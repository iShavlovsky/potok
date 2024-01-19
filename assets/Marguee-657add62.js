var L=Object.defineProperty;var b=(u,e,r)=>e in u?L(u,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[e]=r;var g=(u,e,r)=>(b(u,typeof e!="symbol"?e+"":e,r),r);import{g as n,S as R}from"./ScrollTrigger-06fbf3d1.js";class C{constructor(e){g(this,"marquee");g(this,"line");g(this,"links");g(this,"timeline");this.marquee=document.querySelector(e),this.line=this.marquee.querySelector(".marquee-line"),this.links=this.line.querySelectorAll(".marquee-item"),this.timeline=this.horizontalLoop(),this.init()}toggleDirection(){this.timeline&&this.timeline.reversed(!this.timeline.reversed())}init(){this.line.dataset.hover_pause==="true"&&this.links.forEach(e=>{this.timeline&&(e.addEventListener("mouseenter",()=>{var r;return(r=this.timeline)==null?void 0:r.pause()}),e.addEventListener("mouseleave",()=>{var r;return(r=this.timeline)==null?void 0:r.resume()}))}),this.line.dataset.scrub==="true"&&(this.timeline.scrub=!0),this.createScrollTrigger()}horizontalLoop(){const e=n.utils.toArray(this.links),r={paused:!0,repeat:-1,snap:!1,speed:this.line.dataset.speed??1,reversed:this.line.dataset.reversed==="true",paddingRight:parseFloat(n.getProperty(this.links[0],"marginRight","px"))},t=n.timeline({repeat:r.repeat,paused:r.paused,defaults:{ease:"none"},onReverseComplete:()=>{t.totalTime(t.rawTime()+t.duration()*100)}}),s=e.length,q=e[0].offsetLeft,P=[],c=[],h=[];let l=0;const d=+r.speed*100,S=n.utils.snap(1);let p,v,m,f,o;n.set(e,{xPercent:(i,a)=>{const x=c[i]=parseFloat(n.getProperty(a,"width","px"));return h[i]=S(parseFloat(n.getProperty(a,"x","px"))/x*100+parseFloat(n.getProperty(a,"xPercent"))),h[i]}}),n.set(e,{x:0});const w=e[s-1].offsetLeft+h[s-1]/100*c[s-1]-q+e[s-1].offsetWidth*Number(n.getProperty(e[s-1],"scaleX"))+(parseFloat(String(r.paddingRight))||0);for(o=0;o<s;o++)f=e[o],p=h[o]/100*c[o],v=f.offsetLeft+p-q,m=v+c[o]*parseFloat(n.getProperty(f,"scaleX")),t.to(f,{xPercent:S((p-m)/c[o]*100),duration:m/d},0).fromTo(f,{xPercent:S((p-m+w)/c[o]*100)},{xPercent:h[o],duration:(p-m+w-p)/d,immediateRender:!1},m/d).add("label"+o,v/d),P[o]=v/d;function y(i,a={}){Math.abs(i-l)>s/2&&(i+=i>l?-s:s);const x=n.utils.wrap(0,s,i);let T=P[x];return T>t.time()!=i>l&&(a.modifiers={time:n.utils.wrap(0,t.duration())},T+=t.duration()*(i>l?1:-1)),l=x,a.overwrite=!0,t.tweenTo(T,a)}return t.next=i=>y(l+1,i),t.previous=i=>y(l-1,i),t.current=()=>l,t.toIndex=(i,a)=>y(i,a),t.times=P,t.progress(1,!0).progress(0,!0),r.reversed&&(typeof t.vars.onReverseComplete=="function"&&t.vars.onReverseComplete(),t.reverse()),t}createScrollTrigger(){var e;R.create({trigger:this.line,scrub:(e=this.timeline)!=null&&e.scrub?1:!1,onToggle:r=>{var t,s;r.isActive&&this.timeline?(t=this.timeline)==null||t.resume():(s=this.timeline)==null||s.pause()},markers:!1})}}export{C as M};
