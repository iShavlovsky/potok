import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class Marquee {
  private readonly marquee: HTMLElement;
  private readonly line: HTMLElement;
  private readonly links: NodeListOf<Element>;
  private readonly timeline: GSAPTimeline;

  constructor(selector: string) {
    this.marquee = document.querySelector(selector) as HTMLElement;
    this.line = this.marquee.querySelector('.marquee-line') as HTMLElement;
    this.links = this.line.querySelectorAll('.marquee-item');
    this.timeline = this.horizontalLoop();
    this.init();
  }

  public toggleDirection(): void {
    if (this.timeline) this.timeline.reversed(!this.timeline.reversed());
  }

  private init(): void {
    if (this.line.dataset.hover_pause === 'true') {
      this.links.forEach((link) => {
        if (this.timeline) {
          link.addEventListener('mouseenter', () => this.timeline?.pause());
          link.addEventListener('mouseleave', () => this.timeline?.resume());
        }
      });
    }

    if (this.line.dataset.scrub === 'true') {
      this.timeline.scrub = true;
    }

    this.createScrollTrigger();
  }

  private horizontalLoop(): GSAPTimeline {
    const items: HTMLElement[] = gsap.utils.toArray(this.links);
    const config = {
      paused: true,
      repeat: -1,
      snap: false,
      speed: this.line.dataset.speed ?? 1,
      reversed: this.line.dataset.reversed === 'true',
      paddingRight: parseFloat(<string>gsap.getProperty(this.links[0], 'marginRight', 'px')),
    };
    const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    });
    const length: number = items.length;
    const startX: number = items[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const xPercents: number[] = [];
    let curIndex: number = 0;
    const pixelsPerSecond: number = +config.speed * 100;
    const snap = gsap.utils.snap(1);

    let curX;
    let distanceToStart;
    let distanceToLoop;
    let item;
    let i;
    gsap.set(items, {
      xPercent: (i, el) => {
        const w = (widths[i] = parseFloat(<string>gsap.getProperty(el, 'width', 'px')));
        xPercents[i] = snap(
          (parseFloat(<string>gsap.getProperty(el, 'x', 'px')) / w) * 100 +
            parseFloat(gsap.getProperty(el, 'xPercent') as string),
        );

        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    const totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        Number(<string>gsap.getProperty(items[length - 1], 'scaleX')) +
      (parseFloat(String(config.paddingRight)) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * parseFloat(<string>gsap.getProperty(item, 'scaleX'));
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item,
          {
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
          },
          {
            xPercent: xPercents[i],
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add('label' + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index: number, vars: gsap.TweenVars = {}): gsap.core.Tween {
      Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];

      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }

      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }

    tl.next = (vars: gsap.TweenVars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars: gsap.TweenVars) => toIndex(curIndex - 1, vars);
    tl.current = (): number => curIndex;
    tl.toIndex = (index: number, vars: gsap.TweenVars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      if (typeof tl.vars.onReverseComplete === 'function') {
        tl.vars.onReverseComplete();
      }
      tl.reverse();
    }
    return tl;
  }

  private createScrollTrigger(): void {
    ScrollTrigger.create({
      trigger: this.line,
      scrub: this.timeline?.scrub ? 1 : false,
      onToggle: (self) => {
        if (self.isActive && this.timeline) {
          this.timeline?.resume();
        } else {
          this.timeline?.pause();
        }
      },
      markers: false,
    });
  }
}

export default Marquee;
