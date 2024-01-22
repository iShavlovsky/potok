(() => {
  'use strict';
  function t() {}
  const e = (function () {
    let t = 0;
    return function () {
      return t++;
    };
  })();
  function i(t) {
    return null == t;
  }
  function s(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
  }
  function n(t) {
    return null !== t && '[object Object]' === Object.prototype.toString.call(t);
  }
  const o = (t) => ('number' == typeof t || t instanceof Number) && isFinite(+t);
  function a(t, e) {
    return o(t) ? t : e;
  }
  function r(t, e) {
    return void 0 === t ? e : t;
  }
  const l = (t, e) => ('string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t);
  function h(t, e, i) {
    if (t && 'function' == typeof t.call) return t.apply(i, e);
  }
  function u(t, e, i, o) {
    let a, r, l;
    if (s(t))
      if (((r = t.length), o)) for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);
      else for (a = 0; a < r; a++) e.call(i, t[a], a);
    else if (n(t))
      for (l = Object.keys(t), r = l.length, a = 0; a < r; a++) e.call(i, t[l[a]], l[a]);
  }
  function c(t, e) {
    let i, s, n, o;
    if (!t || !e || t.length !== e.length) return !1;
    for (i = 0, s = t.length; i < s; ++i)
      if (((n = t[i]), (o = e[i]), n.datasetIndex !== o.datasetIndex || n.index !== o.index))
        return !1;
    return !0;
  }
  function d(t) {
    if (s(t)) return t.map(d);
    if (n(t)) {
      const e = Object.create(null),
        i = Object.keys(t),
        s = i.length;
      let n = 0;
      for (; n < s; ++n) e[i[n]] = d(t[i[n]]);
      return e;
    }
    return t;
  }
  function f(t) {
    return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
  }
  function p(t, e, i, s) {
    if (!f(t)) return;
    const o = e[t],
      a = i[t];
    n(o) && n(a) ? g(o, a, s) : (e[t] = d(a));
  }
  function g(t, e, i) {
    const o = s(e) ? e : [e],
      a = o.length;
    if (!n(t)) return t;
    const r = (i = i || {}).merger || p;
    for (let s = 0; s < a; ++s) {
      if (!n((e = o[s]))) continue;
      const a = Object.keys(e);
      for (let s = 0, n = a.length; s < n; ++s) r(a[s], t, e, i);
    }
    return t;
  }
  function m(t, e) {
    return g(t, e, { merger: b });
  }
  function b(t, e, i) {
    if (!f(t)) return;
    const s = e[t],
      o = i[t];
    n(s) && n(o) ? m(s, o) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = d(o));
  }
  const v = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
  function x(t, e) {
    const i =
      v[e] ||
      (v[e] = (function (t) {
        const e = (function (t) {
          const e = t.split('.'),
            i = [];
          let s = '';
          for (const t of e)
            (s += t), s.endsWith('\\') ? (s = s.slice(0, -1) + '.') : (i.push(s), (s = ''));
          return i;
        })(t);
        return (t) => {
          for (const i of e) {
            if ('' === i) break;
            t = t && t[i];
          }
          return t;
        };
      })(e));
    return i(t);
  }
  function y(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const _ = (t) => void 0 !== t,
    k = (t) => 'function' == typeof t,
    w = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const i of t) if (!e.has(i)) return !1;
      return !0;
    },
    M = Math.PI,
    S = 2 * M,
    A = S + M,
    C = Number.POSITIVE_INFINITY,
    E = M / 180,
    D = M / 2,
    P = M / 4,
    F = (2 * M) / 3,
    O = Math.log10,
    T = Math.sign;
  function B(t) {
    const e = Math.round(t);
    t = I(t, e, t / 1e3) ? e : t;
    const i = Math.pow(10, Math.floor(O(t))),
      s = t / i;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
  }
  function R(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function I(t, e, i) {
    return Math.abs(t - e) < i;
  }
  function L(t, e, i) {
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      (o = t[s][i]), isNaN(o) || ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
  }
  function V(t) {
    return t * (M / 180);
  }
  function z(t) {
    return t * (180 / M);
  }
  function j(t) {
    if (!o(t)) return;
    let e = 1,
      i = 0;
    for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
    return i;
  }
  function N(t, e) {
    const i = e.x - t.x,
      s = e.y - t.y,
      n = Math.sqrt(i * i + s * s);
    let o = Math.atan2(s, i);
    return o < -0.5 * M && (o += S), { angle: o, distance: n };
  }
  function W(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function H(t, e) {
    return ((t - e + A) % S) - M;
  }
  function $(t) {
    return ((t % S) + S) % S;
  }
  function U(t, e, i, s) {
    const n = $(t),
      o = $(e),
      a = $(i),
      r = $(o - n),
      l = $(a - n),
      h = $(n - o),
      u = $(n - a);
    return n === o || n === a || (s && o === a) || (r > l && h < u);
  }
  function Y(t, e, i) {
    return Math.max(e, Math.min(i, t));
  }
  function q(t, e, i, s = 1e-6) {
    return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
  }
  function X(t, e, i) {
    i = i || ((i) => t[i] < e);
    let s,
      n = t.length - 1,
      o = 0;
    for (; n - o > 1; ) (s = (o + n) >> 1), i(s) ? (o = s) : (n = s);
    return { lo: o, hi: n };
  }
  const K = (t, e, i, s) => X(t, i, s ? (s) => t[s][e] <= i : (s) => t[s][e] < i),
    Z = (t, e, i) => X(t, i, (s) => t[s][e] >= i),
    G = ['push', 'pop', 'shift', 'splice', 'unshift'];
  function J(t, e) {
    const i = t._chartjs;
    if (!i) return;
    const s = i.listeners,
      n = s.indexOf(e);
    -1 !== n && s.splice(n, 1),
      s.length > 0 ||
        (G.forEach((e) => {
          delete t[e];
        }),
        delete t._chartjs);
  }
  function Q(t) {
    const e = new Set();
    let i, s;
    for (i = 0, s = t.length; i < s; ++i) e.add(t[i]);
    return e.size === s ? t : Array.from(e);
  }
  const tt =
    'undefined' == typeof window
      ? function (t) {
          return t();
        }
      : window.requestAnimationFrame;
  function et(t, e, i) {
    const s = i || ((t) => Array.prototype.slice.call(t));
    let n = !1,
      o = [];
    return function (...i) {
      (o = s(i)),
        n ||
          ((n = !0),
          tt.call(window, () => {
            (n = !1), t.apply(e, o);
          }));
    };
  }
  const it = (t) => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
    st = (t, e, i) => ('start' === t ? e : 'end' === t ? i : (e + i) / 2);
  function nt(t, e, i) {
    const s = e.length;
    let n = 0,
      o = s;
    if (t._sorted) {
      const { iScale: a, _parsed: r } = t,
        l = a.axis,
        { min: h, max: u, minDefined: c, maxDefined: d } = a.getUserBounds();
      c &&
        (n = Y(Math.min(K(r, a.axis, h).lo, i ? s : K(e, l, a.getPixelForValue(h)).lo), 0, s - 1)),
        (o = d
          ? Y(
              Math.max(
                K(r, a.axis, u, !0).hi + 1,
                i ? 0 : K(e, l, a.getPixelForValue(u), !0).hi + 1,
              ),
              n,
              s,
            ) - n
          : s - n);
    }
    return { start: n, count: o };
  }
  function ot(t) {
    const { xScale: e, yScale: i, _scaleRanges: s } = t,
      n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
    if (!s) return (t._scaleRanges = n), !0;
    const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
    return Object.assign(s, n), o;
  }
  const at = (t) => 0 === t || 1 === t,
    rt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * S) / i),
    lt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * S) / i) + 1,
    ht = {
      linear: (t) => t,
      easeInQuad: (t) => t * t,
      easeOutQuad: (t) => -t * (t - 2),
      easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
      easeInCubic: (t) => t * t * t,
      easeOutCubic: (t) => (t -= 1) * t * t + 1,
      easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
      easeInQuart: (t) => t * t * t * t,
      easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
      easeInOutQuart: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
      easeInQuint: (t) => t * t * t * t * t,
      easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
      easeInOutQuint: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
      easeInSine: (t) => 1 - Math.cos(t * D),
      easeOutSine: (t) => Math.sin(t * D),
      easeInOutSine: (t) => -0.5 * (Math.cos(M * t) - 1),
      easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
      easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
      easeInOutExpo: (t) =>
        at(t)
          ? t
          : t < 0.5
            ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
      easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
      easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: (t) =>
        (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: (t) => (at(t) ? t : rt(t, 0.075, 0.3)),
      easeOutElastic: (t) => (at(t) ? t : lt(t, 0.075, 0.3)),
      easeInOutElastic(t) {
        const e = 0.1125;
        return at(t) ? t : t < 0.5 ? 0.5 * rt(2 * t, e, 0.45) : 0.5 + 0.5 * lt(2 * t - 1, e, 0.45);
      },
      easeInBack(t) {
        const e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack(t) {
        const e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack(t) {
        let e = 1.70158;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: (t) => 1 - ht.easeOutBounce(1 - t),
      easeOutBounce(t) {
        const e = 7.5625,
          i = 2.75;
        return t < 1 / i
          ? e * t * t
          : t < 2 / i
            ? e * (t -= 1.5 / i) * t + 0.75
            : t < 2.5 / i
              ? e * (t -= 2.25 / i) * t + 0.9375
              : e * (t -= 2.625 / i) * t + 0.984375;
      },
      easeInOutBounce: (t) =>
        t < 0.5 ? 0.5 * ht.easeInBounce(2 * t) : 0.5 * ht.easeOutBounce(2 * t - 1) + 0.5,
    };
  function ut(t) {
    return (t + 0.5) | 0;
  }
  const ct = (t, e, i) => Math.max(Math.min(t, i), e);
  function dt(t) {
    return ct(ut(2.55 * t), 0, 255);
  }
  function ft(t) {
    return ct(ut(255 * t), 0, 255);
  }
  function pt(t) {
    return ct(ut(t / 2.55) / 100, 0, 1);
  }
  function gt(t) {
    return ct(ut(100 * t), 0, 100);
  }
  const mt = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    bt = [...'0123456789ABCDEF'],
    vt = (t) => bt[15 & t],
    xt = (t) => bt[(240 & t) >> 4] + bt[15 & t],
    yt = (t) => (240 & t) >> 4 == (15 & t);
  const _t =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function kt(t, e, i) {
    const s = e * Math.min(i, 1 - i),
      n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
    return [n(0), n(8), n(4)];
  }
  function wt(t, e, i) {
    const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
    return [s(5), s(3), s(1)];
  }
  function Mt(t, e, i) {
    const s = kt(t, 1, 0.5);
    let n;
    for (e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0; n < 3; n++)
      (s[n] *= 1 - e - i), (s[n] += e);
    return s;
  }
  function St(t) {
    const e = t.r / 255,
      i = t.g / 255,
      s = t.b / 255,
      n = Math.max(e, i, s),
      o = Math.min(e, i, s),
      a = (n + o) / 2;
    let r, l, h;
    return (
      n !== o &&
        ((h = n - o),
        (l = a > 0.5 ? h / (2 - n - o) : h / (n + o)),
        (r = (function (t, e, i, s, n) {
          return t === n
            ? (e - i) / s + (e < i ? 6 : 0)
            : e === n
              ? (i - t) / s + 2
              : (t - e) / s + 4;
        })(e, i, s, h, n)),
        (r = 60 * r + 0.5)),
      [0 | r, l || 0, a]
    );
  }
  function At(t, e, i, s) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(ft);
  }
  function Ct(t, e, i) {
    return At(kt, t, e, i);
  }
  function Et(t) {
    return ((t % 360) + 360) % 360;
  }
  const Dt = {
      x: 'dark',
      Z: 'light',
      Y: 're',
      X: 'blu',
      W: 'gr',
      V: 'medium',
      U: 'slate',
      A: 'ee',
      T: 'ol',
      S: 'or',
      B: 'ra',
      C: 'lateg',
      D: 'ights',
      R: 'in',
      Q: 'turquois',
      E: 'hi',
      P: 'ro',
      O: 'al',
      N: 'le',
      M: 'de',
      L: 'yello',
      F: 'en',
      K: 'ch',
      G: 'arks',
      H: 'ea',
      I: 'ightg',
      J: 'wh',
    },
    Pt = {
      OiceXe: 'f0f8ff',
      antiquewEte: 'faebd7',
      aqua: 'ffff',
      aquamarRe: '7fffd4',
      azuY: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '0',
      blanKedOmond: 'ffebcd',
      Xe: 'ff',
      XeviTet: '8a2be2',
      bPwn: 'a52a2a',
      burlywood: 'deb887',
      caMtXe: '5f9ea0',
      KartYuse: '7fff00',
      KocTate: 'd2691e',
      cSO: 'ff7f50',
      cSnflowerXe: '6495ed',
      cSnsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: 'ffff',
      xXe: '8b',
      xcyan: '8b8b',
      xgTMnPd: 'b8860b',
      xWay: 'a9a9a9',
      xgYF: '6400',
      xgYy: 'a9a9a9',
      xkhaki: 'bdb76b',
      xmagFta: '8b008b',
      xTivegYF: '556b2f',
      xSange: 'ff8c00',
      xScEd: '9932cc',
      xYd: '8b0000',
      xsOmon: 'e9967a',
      xsHgYF: '8fbc8f',
      xUXe: '483d8b',
      xUWay: '2f4f4f',
      xUgYy: '2f4f4f',
      xQe: 'ced1',
      xviTet: '9400d3',
      dAppRk: 'ff1493',
      dApskyXe: 'bfff',
      dimWay: '696969',
      dimgYy: '696969',
      dodgerXe: '1e90ff',
      fiYbrick: 'b22222',
      flSOwEte: 'fffaf0',
      foYstWAn: '228b22',
      fuKsia: 'ff00ff',
      gaRsbSo: 'dcdcdc',
      ghostwEte: 'f8f8ff',
      gTd: 'ffd700',
      gTMnPd: 'daa520',
      Way: '808080',
      gYF: '8000',
      gYFLw: 'adff2f',
      gYy: '808080',
      honeyMw: 'f0fff0',
      hotpRk: 'ff69b4',
      RdianYd: 'cd5c5c',
      Rdigo: '4b0082',
      ivSy: 'fffff0',
      khaki: 'f0e68c',
      lavFMr: 'e6e6fa',
      lavFMrXsh: 'fff0f5',
      lawngYF: '7cfc00',
      NmoncEffon: 'fffacd',
      ZXe: 'add8e6',
      ZcSO: 'f08080',
      Zcyan: 'e0ffff',
      ZgTMnPdLw: 'fafad2',
      ZWay: 'd3d3d3',
      ZgYF: '90ee90',
      ZgYy: 'd3d3d3',
      ZpRk: 'ffb6c1',
      ZsOmon: 'ffa07a',
      ZsHgYF: '20b2aa',
      ZskyXe: '87cefa',
      ZUWay: '778899',
      ZUgYy: '778899',
      ZstAlXe: 'b0c4de',
      ZLw: 'ffffe0',
      lime: 'ff00',
      limegYF: '32cd32',
      lRF: 'faf0e6',
      magFta: 'ff00ff',
      maPon: '800000',
      VaquamarRe: '66cdaa',
      VXe: 'cd',
      VScEd: 'ba55d3',
      VpurpN: '9370db',
      VsHgYF: '3cb371',
      VUXe: '7b68ee',
      VsprRggYF: 'fa9a',
      VQe: '48d1cc',
      VviTetYd: 'c71585',
      midnightXe: '191970',
      mRtcYam: 'f5fffa',
      mistyPse: 'ffe4e1',
      moccasR: 'ffe4b5',
      navajowEte: 'ffdead',
      navy: '80',
      Tdlace: 'fdf5e6',
      Tive: '808000',
      TivedBb: '6b8e23',
      Sange: 'ffa500',
      SangeYd: 'ff4500',
      ScEd: 'da70d6',
      pOegTMnPd: 'eee8aa',
      pOegYF: '98fb98',
      pOeQe: 'afeeee',
      pOeviTetYd: 'db7093',
      papayawEp: 'ffefd5',
      pHKpuff: 'ffdab9',
      peru: 'cd853f',
      pRk: 'ffc0cb',
      plum: 'dda0dd',
      powMrXe: 'b0e0e6',
      purpN: '800080',
      YbeccapurpN: '663399',
      Yd: 'ff0000',
      Psybrown: 'bc8f8f',
      PyOXe: '4169e1',
      saddNbPwn: '8b4513',
      sOmon: 'fa8072',
      sandybPwn: 'f4a460',
      sHgYF: '2e8b57',
      sHshell: 'fff5ee',
      siFna: 'a0522d',
      silver: 'c0c0c0',
      skyXe: '87ceeb',
      UXe: '6a5acd',
      UWay: '708090',
      UgYy: '708090',
      snow: 'fffafa',
      sprRggYF: 'ff7f',
      stAlXe: '4682b4',
      tan: 'd2b48c',
      teO: '8080',
      tEstN: 'd8bfd8',
      tomato: 'ff6347',
      Qe: '40e0d0',
      viTet: 'ee82ee',
      JHt: 'f5deb3',
      wEte: 'ffffff',
      wEtesmoke: 'f5f5f5',
      Lw: 'ffff00',
      LwgYF: '9acd32',
    };
  let Ft;
  const Ot =
      /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
    Tt = (t) => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
    Bt = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
  function Rt(t, e, i) {
    if (t) {
      let s = St(t);
      (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
        (s = Ct(s)),
        (t.r = s[0]),
        (t.g = s[1]),
        (t.b = s[2]);
    }
  }
  function It(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function Lt(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(t)
        ? t.length >= 3 &&
          ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = ft(t[3])))
        : ((e = It(t, { r: 0, g: 0, b: 0, a: 1 })).a = ft(e.a)),
      e
    );
  }
  function Vt(t) {
    return 'r' === t.charAt(0)
      ? (function (t) {
          const e = Ot.exec(t);
          let i,
            s,
            n,
            o = 255;
          if (e) {
            if (e[7] !== i) {
              const t = +e[7];
              o = e[8] ? dt(t) : ct(255 * t, 0, 255);
            }
            return (
              (i = +e[1]),
              (s = +e[3]),
              (n = +e[5]),
              (i = 255 & (e[2] ? dt(i) : ct(i, 0, 255))),
              (s = 255 & (e[4] ? dt(s) : ct(s, 0, 255))),
              (n = 255 & (e[6] ? dt(n) : ct(n, 0, 255))),
              { r: i, g: s, b: n, a: o }
            );
          }
        })(t)
      : (function (t) {
          const e = _t.exec(t);
          let i,
            s = 255;
          if (!e) return;
          e[5] !== i && (s = e[6] ? dt(+e[5]) : ft(+e[5]));
          const n = Et(+e[2]),
            o = +e[3] / 100,
            a = +e[4] / 100;
          return (
            (i =
              'hwb' === e[1]
                ? (function (t, e, i) {
                    return At(Mt, t, e, i);
                  })(n, o, a)
                : 'hsv' === e[1]
                  ? (function (t, e, i) {
                      return At(wt, t, e, i);
                    })(n, o, a)
                  : Ct(n, o, a)),
            { r: i[0], g: i[1], b: i[2], a: s }
          );
        })(t);
  }
  class zt {
    constructor(t) {
      if (t instanceof zt) return t;
      const e = typeof t;
      let i;
      var s, n, o;
      'object' === e
        ? (i = Lt(t))
        : 'string' === e &&
          ((o = (s = t).length),
          '#' === s[0] &&
            (4 === o || 5 === o
              ? (n = {
                  r: 255 & (17 * mt[s[1]]),
                  g: 255 & (17 * mt[s[2]]),
                  b: 255 & (17 * mt[s[3]]),
                  a: 5 === o ? 17 * mt[s[4]] : 255,
                })
              : (7 !== o && 9 !== o) ||
                (n = {
                  r: (mt[s[1]] << 4) | mt[s[2]],
                  g: (mt[s[3]] << 4) | mt[s[4]],
                  b: (mt[s[5]] << 4) | mt[s[6]],
                  a: 9 === o ? (mt[s[7]] << 4) | mt[s[8]] : 255,
                })),
          (i =
            n ||
            (function (t) {
              Ft ||
                ((Ft = (function () {
                  const t = {},
                    e = Object.keys(Pt),
                    i = Object.keys(Dt);
                  let s, n, o, a, r;
                  for (s = 0; s < e.length; s++) {
                    for (a = r = e[s], n = 0; n < i.length; n++)
                      (o = i[n]), (r = r.replace(o, Dt[o]));
                    (o = parseInt(Pt[a], 16)), (t[r] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
                  }
                  return t;
                })()),
                (Ft.transparent = [0, 0, 0, 0]));
              const e = Ft[t.toLowerCase()];
              return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
            })(t) ||
            Vt(t))),
        (this._rgb = i),
        (this._valid = !!i);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = It(this._rgb);
      return t && (t.a = pt(t.a)), t;
    }
    set rgb(t) {
      this._rgb = Lt(t);
    }
    rgbString() {
      return this._valid
        ? (t = this._rgb) &&
            (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${pt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`)
        : void 0;
      var t;
    }
    hexString() {
      return this._valid
        ? ((t = this._rgb),
          (e = ((t) => yt(t.r) && yt(t.g) && yt(t.b) && yt(t.a))(t) ? vt : xt),
          t ? '#' + e(t.r) + e(t.g) + e(t.b) + ((t, e) => (t < 255 ? e(t) : ''))(t.a, e) : void 0)
        : void 0;
      var t, e;
    }
    hslString() {
      return this._valid
        ? (function (t) {
            if (!t) return;
            const e = St(t),
              i = e[0],
              s = gt(e[1]),
              n = gt(e[2]);
            return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${pt(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`;
          })(this._rgb)
        : void 0;
    }
    mix(t, e) {
      if (t) {
        const i = this.rgb,
          s = t.rgb;
        let n;
        const o = e === n ? 0.5 : e,
          a = 2 * o - 1,
          r = i.a - s.a,
          l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
        (n = 1 - l),
          (i.r = 255 & (l * i.r + n * s.r + 0.5)),
          (i.g = 255 & (l * i.g + n * s.g + 0.5)),
          (i.b = 255 & (l * i.b + n * s.b + 0.5)),
          (i.a = o * i.a + (1 - o) * s.a),
          (this.rgb = i);
      }
      return this;
    }
    interpolate(t, e) {
      return (
        t &&
          (this._rgb = (function (t, e, i) {
            const s = Bt(pt(t.r)),
              n = Bt(pt(t.g)),
              o = Bt(pt(t.b));
            return {
              r: ft(Tt(s + i * (Bt(pt(e.r)) - s))),
              g: ft(Tt(n + i * (Bt(pt(e.g)) - n))),
              b: ft(Tt(o + i * (Bt(pt(e.b)) - o))),
              a: t.a + i * (e.a - t.a),
            };
          })(this._rgb, t._rgb, e)),
        this
      );
    }
    clone() {
      return new zt(this.rgb);
    }
    alpha(t) {
      return (this._rgb.a = ft(t)), this;
    }
    clearer(t) {
      return (this._rgb.a *= 1 - t), this;
    }
    greyscale() {
      const t = this._rgb,
        e = ut(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
      return (t.r = t.g = t.b = e), this;
    }
    opaquer(t) {
      return (this._rgb.a *= 1 + t), this;
    }
    negate() {
      const t = this._rgb;
      return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
      return Rt(this._rgb, 2, t), this;
    }
    darken(t) {
      return Rt(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return Rt(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return Rt(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return (
        (function (t, e) {
          var i = St(t);
          (i[0] = Et(i[0] + e)), (i = Ct(i)), (t.r = i[0]), (t.g = i[1]), (t.b = i[2]);
        })(this._rgb, t),
        this
      );
    }
  }
  function jt(t) {
    return new zt(t);
  }
  function Nt(t) {
    if (t && 'object' == typeof t) {
      const e = t.toString();
      return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e;
    }
    return !1;
  }
  function Wt(t) {
    return Nt(t) ? t : jt(t);
  }
  function Ht(t) {
    return Nt(t) ? t : jt(t).saturate(0.5).darken(0.1).hexString();
  }
  const $t = Object.create(null),
    Ut = Object.create(null);
  function Yt(t, e) {
    if (!e) return t;
    const i = e.split('.');
    for (let e = 0, s = i.length; e < s; ++e) {
      const s = i[e];
      t = t[s] || (t[s] = Object.create(null));
    }
    return t;
  }
  function qt(t, e, i) {
    return 'string' == typeof e ? g(Yt(t, e), i) : g(Yt(t, ''), e);
  }
  var Xt = new (class {
    constructor(t) {
      (this.animation = void 0),
        (this.backgroundColor = 'rgba(0,0,0,0.1)'),
        (this.borderColor = 'rgba(0,0,0,0.1)'),
        (this.color = '#666'),
        (this.datasets = {}),
        (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
        (this.elements = {}),
        (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
        (this.font = {
          family: '\'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
          size: 12,
          style: 'normal',
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = (t, e) => Ht(e.backgroundColor)),
        (this.hoverBorderColor = (t, e) => Ht(e.borderColor)),
        (this.hoverColor = (t, e) => Ht(e.color)),
        (this.indexAxis = 'x'),
        (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        (this.drawActiveElementsOnTop = !0),
        this.describe(t);
    }
    set(t, e) {
      return qt(this, t, e);
    }
    get(t) {
      return Yt(this, t);
    }
    describe(t, e) {
      return qt(Ut, t, e);
    }
    override(t, e) {
      return qt($t, t, e);
    }
    route(t, e, i, s) {
      const o = Yt(this, t),
        a = Yt(this, i),
        l = '_' + e;
      Object.defineProperties(o, {
        [l]: { value: o[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const t = this[l],
              e = a[s];
            return n(t) ? Object.assign({}, e, t) : r(t, e);
          },
          set(t) {
            this[l] = t;
          },
        },
      });
    }
  })({
    _scriptable: (t) => !t.startsWith('on'),
    _indexable: (t) => 'events' !== t,
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  });
  function Kt(t, e, i, s, n) {
    let o = e[n];
    return o || ((o = e[n] = t.measureText(n).width), i.push(n)), o > s && (s = o), s;
  }
  function Zt(t, e, i, n) {
    let o = ((n = n || {}).data = n.data || {}),
      a = (n.garbageCollect = n.garbageCollect || []);
    n.font !== e && ((o = n.data = {}), (a = n.garbageCollect = []), (n.font = e)),
      t.save(),
      (t.font = e);
    let r = 0;
    const l = i.length;
    let h, u, c, d, f;
    for (h = 0; h < l; h++)
      if (((d = i[h]), null != d && !0 !== s(d))) r = Kt(t, o, a, r, d);
      else if (s(d))
        for (u = 0, c = d.length; u < c; u++)
          (f = d[u]), null == f || s(f) || (r = Kt(t, o, a, r, f));
    t.restore();
    const p = a.length / 2;
    if (p > i.length) {
      for (h = 0; h < p; h++) delete o[a[h]];
      a.splice(0, p);
    }
    return r;
  }
  function Gt(t, e, i) {
    const s = t.currentDevicePixelRatio,
      n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
    return Math.round((e - n) * s) / s + n;
  }
  function Jt(t, e) {
    (e = e || t.getContext('2d')).save(),
      e.resetTransform(),
      e.clearRect(0, 0, t.width, t.height),
      e.restore();
  }
  function Qt(t, e, i, s) {
    te(t, e, i, s, null);
  }
  function te(t, e, i, s, n) {
    let o, a, r, l, h, u;
    const c = e.pointStyle,
      d = e.rotation,
      f = e.radius;
    let p = (d || 0) * E;
    if (
      c &&
      'object' == typeof c &&
      ((o = c.toString()), '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
    )
      return (
        t.save(),
        t.translate(i, s),
        t.rotate(p),
        t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
        void t.restore()
      );
    if (!(isNaN(f) || f <= 0)) {
      switch ((t.beginPath(), c)) {
        default:
          n ? t.ellipse(i, s, n / 2, f, 0, 0, S) : t.arc(i, s, f, 0, S), t.closePath();
          break;
        case 'triangle':
          t.moveTo(i + Math.sin(p) * f, s - Math.cos(p) * f),
            (p += F),
            t.lineTo(i + Math.sin(p) * f, s - Math.cos(p) * f),
            (p += F),
            t.lineTo(i + Math.sin(p) * f, s - Math.cos(p) * f),
            t.closePath();
          break;
        case 'rectRounded':
          (h = 0.516 * f),
            (l = f - h),
            (a = Math.cos(p + P) * l),
            (r = Math.sin(p + P) * l),
            t.arc(i - a, s - r, h, p - M, p - D),
            t.arc(i + r, s - a, h, p - D, p),
            t.arc(i + a, s + r, h, p, p + D),
            t.arc(i - r, s + a, h, p + D, p + M),
            t.closePath();
          break;
        case 'rect':
          if (!d) {
            (l = Math.SQRT1_2 * f), (u = n ? n / 2 : l), t.rect(i - u, s - l, 2 * u, 2 * l);
            break;
          }
          p += P;
        case 'rectRot':
          (a = Math.cos(p) * f),
            (r = Math.sin(p) * f),
            t.moveTo(i - a, s - r),
            t.lineTo(i + r, s - a),
            t.lineTo(i + a, s + r),
            t.lineTo(i - r, s + a),
            t.closePath();
          break;
        case 'crossRot':
          p += P;
        case 'cross':
          (a = Math.cos(p) * f),
            (r = Math.sin(p) * f),
            t.moveTo(i - a, s - r),
            t.lineTo(i + a, s + r),
            t.moveTo(i + r, s - a),
            t.lineTo(i - r, s + a);
          break;
        case 'star':
          (a = Math.cos(p) * f),
            (r = Math.sin(p) * f),
            t.moveTo(i - a, s - r),
            t.lineTo(i + a, s + r),
            t.moveTo(i + r, s - a),
            t.lineTo(i - r, s + a),
            (p += P),
            (a = Math.cos(p) * f),
            (r = Math.sin(p) * f),
            t.moveTo(i - a, s - r),
            t.lineTo(i + a, s + r),
            t.moveTo(i + r, s - a),
            t.lineTo(i - r, s + a);
          break;
        case 'line':
          (a = n ? n / 2 : Math.cos(p) * f),
            (r = Math.sin(p) * f),
            t.moveTo(i - a, s - r),
            t.lineTo(i + a, s + r);
          break;
        case 'dash':
          t.moveTo(i, s), t.lineTo(i + Math.cos(p) * f, s + Math.sin(p) * f);
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function ee(t, e, i) {
    return (
      (i = i || 0.5),
      !e || (t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i)
    );
  }
  function ie(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
  }
  function se(t) {
    t.restore();
  }
  function ne(t, e, i, s, n) {
    if (!e) return t.lineTo(i.x, i.y);
    if ('middle' === n) {
      const s = (e.x + i.x) / 2;
      t.lineTo(s, e.y), t.lineTo(s, i.y);
    } else ('after' === n) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
    t.lineTo(i.x, i.y);
  }
  function oe(t, e, i, s) {
    if (!e) return t.lineTo(i.x, i.y);
    t.bezierCurveTo(
      s ? e.cp1x : e.cp2x,
      s ? e.cp1y : e.cp2y,
      s ? i.cp2x : i.cp1x,
      s ? i.cp2y : i.cp1y,
      i.x,
      i.y,
    );
  }
  function ae(t, e, n, o, a, r = {}) {
    const l = s(e) ? e : [e],
      h = r.strokeWidth > 0 && '' !== r.strokeColor;
    let u, c;
    for (
      t.save(),
        t.font = a.string,
        (function (t, e) {
          e.translation && t.translate(e.translation[0], e.translation[1]),
            i(e.rotation) || t.rotate(e.rotation),
            e.color && (t.fillStyle = e.color),
            e.textAlign && (t.textAlign = e.textAlign),
            e.textBaseline && (t.textBaseline = e.textBaseline);
        })(t, r),
        u = 0;
      u < l.length;
      ++u
    )
      (c = l[u]),
        h &&
          (r.strokeColor && (t.strokeStyle = r.strokeColor),
          i(r.strokeWidth) || (t.lineWidth = r.strokeWidth),
          t.strokeText(c, n, o, r.maxWidth)),
        t.fillText(c, n, o, r.maxWidth),
        re(t, n, o, c, r),
        (o += a.lineHeight);
    t.restore();
  }
  function re(t, e, i, s, n) {
    if (n.strikethrough || n.underline) {
      const o = t.measureText(s),
        a = e - o.actualBoundingBoxLeft,
        r = e + o.actualBoundingBoxRight,
        l = i - o.actualBoundingBoxAscent,
        h = i + o.actualBoundingBoxDescent,
        u = n.strikethrough ? (l + h) / 2 : h;
      (t.strokeStyle = t.fillStyle),
        t.beginPath(),
        (t.lineWidth = n.decorationWidth || 2),
        t.moveTo(a, u),
        t.lineTo(r, u),
        t.stroke();
    }
  }
  function le(t, e) {
    const { x: i, y: s, w: n, h: o, radius: a } = e;
    t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -D, M, !0),
      t.lineTo(i, s + o - a.bottomLeft),
      t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, M, D, !0),
      t.lineTo(i + n - a.bottomRight, s + o),
      t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, D, 0, !0),
      t.lineTo(i + n, s + a.topRight),
      t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -D, !0),
      t.lineTo(i + a.topLeft, s);
  }
  const he = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
    ue = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
  function ce(t, e) {
    const i = ('' + t).match(he);
    if (!i || 'normal' === i[1]) return 1.2 * e;
    switch (((t = +i[2]), i[3])) {
      case 'px':
        return t;
      case '%':
        t /= 100;
    }
    return e * t;
  }
  function de(t, e) {
    const i = {},
      s = n(e),
      o = s ? Object.keys(e) : e,
      a = n(t) ? (s ? (i) => r(t[i], t[e[i]]) : (e) => t[e]) : () => t;
    for (const t of o) i[t] = +a(t) || 0;
    return i;
  }
  function fe(t) {
    return de(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
  }
  function pe(t) {
    return de(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
  function ge(t) {
    const e = fe(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
  }
  function me(t, e) {
    (t = t || {}), (e = e || Xt.font);
    let s = r(t.size, e.size);
    'string' == typeof s && (s = parseInt(s, 10));
    let n = r(t.style, e.style);
    n &&
      !('' + n).match(ue) &&
      (console.warn('Invalid font style specified: "' + n + '"'), (n = ''));
    const o = {
      family: r(t.family, e.family),
      lineHeight: ce(r(t.lineHeight, e.lineHeight), s),
      size: s,
      style: n,
      weight: r(t.weight, e.weight),
      string: '',
    };
    return (
      (o.string = (function (t) {
        return !t || i(t.size) || i(t.family)
          ? null
          : (t.style ? t.style + ' ' : '') +
              (t.weight ? t.weight + ' ' : '') +
              t.size +
              'px ' +
              t.family;
      })(o)),
      o
    );
  }
  function be(t, e, i, n) {
    let o,
      a,
      r,
      l = !0;
    for (o = 0, a = t.length; o < a; ++o)
      if (
        ((r = t[o]),
        void 0 !== r &&
          (void 0 !== e && 'function' == typeof r && ((r = r(e)), (l = !1)),
          void 0 !== i && s(r) && ((r = r[i % r.length]), (l = !1)),
          void 0 !== r))
      )
        return n && !l && (n.cacheable = !1), r;
  }
  function ve(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function xe(t, e = [''], i = t, s, n = () => t[0]) {
    _(s) || (s = Pe('_fallback', t));
    const o = {
      [Symbol.toStringTag]: 'Object',
      _cacheable: !0,
      _scopes: t,
      _rootScopes: i,
      _fallback: s,
      _getTarget: n,
      override: (n) => xe([n, ...t], e, i, s),
    };
    return new Proxy(o, {
      deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
      get: (i, s) =>
        Me(i, s, () =>
          (function (t, e, i, s) {
            let n;
            for (const o of e)
              if (((n = Pe(ke(o, t), i)), _(n))) return we(t, n) ? Ee(i, s, t, n) : n;
          })(s, e, t, i),
        ),
      getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
      getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
      has: (t, e) => Fe(t).includes(e),
      ownKeys: (t) => Fe(t),
      set(t, e, i) {
        const s = t._storage || (t._storage = n());
        return (t[e] = s[e] = i), delete t._keys, !0;
      },
    });
  }
  function ye(t, e, i, o) {
    const a = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: i,
      _stack: new Set(),
      _descriptors: _e(t, o),
      setContext: (e) => ye(t, e, i, o),
      override: (s) => ye(t.override(s), e, i, o),
    };
    return new Proxy(a, {
      deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
      get: (t, e, i) =>
        Me(t, e, () =>
          (function (t, e, i) {
            const { _proxy: o, _context: a, _subProxy: r, _descriptors: l } = t;
            let h = o[e];
            return (
              k(h) &&
                l.isScriptable(e) &&
                (h = (function (t, e, i, s) {
                  const { _proxy: n, _context: o, _subProxy: a, _stack: r } = i;
                  if (r.has(t))
                    throw new Error('Recursion detected: ' + Array.from(r).join('->') + '->' + t);
                  return (
                    r.add(t),
                    (e = e(o, a || s)),
                    r.delete(t),
                    we(t, e) && (e = Ee(n._scopes, n, t, e)),
                    e
                  );
                })(e, h, t, i)),
              s(h) &&
                h.length &&
                (h = (function (t, e, i, s) {
                  const { _proxy: o, _context: a, _subProxy: r, _descriptors: l } = i;
                  if (_(a.index) && s(t)) e = e[a.index % e.length];
                  else if (n(e[0])) {
                    const i = e,
                      s = o._scopes.filter((t) => t !== i);
                    e = [];
                    for (const n of i) {
                      const i = Ee(s, o, t, n);
                      e.push(ye(i, a, r && r[t], l));
                    }
                  }
                  return e;
                })(e, h, t, l.isIndexable)),
              we(e, h) && (h = ye(h, a, r && r[e], l)),
              h
            );
          })(t, e, i),
        ),
      getOwnPropertyDescriptor: (e, i) =>
        e._descriptors.allKeys
          ? Reflect.has(t, i)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(t, i),
      getPrototypeOf: () => Reflect.getPrototypeOf(t),
      has: (e, i) => Reflect.has(t, i),
      ownKeys: () => Reflect.ownKeys(t),
      set: (e, i, s) => ((t[i] = s), delete e[i], !0),
    });
  }
  function _e(t, e = { scriptable: !0, indexable: !0 }) {
    const {
      _scriptable: i = e.scriptable,
      _indexable: s = e.indexable,
      _allKeys: n = e.allKeys,
    } = t;
    return {
      allKeys: n,
      scriptable: i,
      indexable: s,
      isScriptable: k(i) ? i : () => i,
      isIndexable: k(s) ? s : () => s,
    };
  }
  const ke = (t, e) => (t ? t + y(e) : e),
    we = (t, e) =>
      n(e) && 'adapters' !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
  function Me(t, e, i) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    const s = i();
    return (t[e] = s), s;
  }
  function Se(t, e, i) {
    return k(t) ? t(e, i) : t;
  }
  const Ae = (t, e) => (!0 === t ? e : 'string' == typeof t ? x(e, t) : void 0);
  function Ce(t, e, i, s, n) {
    for (const o of e) {
      const e = Ae(i, o);
      if (e) {
        t.add(e);
        const o = Se(e._fallback, i, n);
        if (_(o) && o !== i && o !== s) return o;
      } else if (!1 === e && _(s) && i !== s) return null;
    }
    return !1;
  }
  function Ee(t, e, i, o) {
    const a = e._rootScopes,
      r = Se(e._fallback, i, o),
      l = [...t, ...a],
      h = new Set();
    h.add(o);
    let u = De(h, l, i, r || i, o);
    return (
      null !== u &&
      (!_(r) || r === i || ((u = De(h, l, r, u, o)), null !== u)) &&
      xe(Array.from(h), [''], a, r, () =>
        (function (t, e, i) {
          const o = t._getTarget();
          e in o || (o[e] = {});
          const a = o[e];
          return s(a) && n(i) ? i : a;
        })(e, i, o),
      )
    );
  }
  function De(t, e, i, s, n) {
    for (; i; ) i = Ce(t, e, i, s, n);
    return i;
  }
  function Pe(t, e) {
    for (const i of e) {
      if (!i) continue;
      const e = i[t];
      if (_(e)) return e;
    }
  }
  function Fe(t) {
    let e = t._keys;
    return (
      e ||
        (e = t._keys =
          (function (t) {
            const e = new Set();
            for (const i of t)
              for (const t of Object.keys(i).filter((t) => !t.startsWith('_'))) e.add(t);
            return Array.from(e);
          })(t._scopes)),
      e
    );
  }
  function Oe(t, e, i, s) {
    const { iScale: n } = t,
      { key: o = 'r' } = this._parsing,
      a = new Array(s);
    let r, l, h, u;
    for (r = 0, l = s; r < l; ++r) (h = r + i), (u = e[h]), (a[r] = { r: n.parse(x(u, o), h) });
    return a;
  }
  const Te = Number.EPSILON || 1e-14,
    Be = (t, e) => e < t.length && !t[e].skip && t[e],
    Re = (t) => ('x' === t ? 'y' : 'x');
  function Ie(t, e, i, s) {
    const n = t.skip ? e : t,
      o = e,
      a = i.skip ? e : i,
      r = W(o, n),
      l = W(a, o);
    let h = r / (r + l),
      u = l / (r + l);
    (h = isNaN(h) ? 0 : h), (u = isNaN(u) ? 0 : u);
    const c = s * h,
      d = s * u;
    return {
      previous: { x: o.x - c * (a.x - n.x), y: o.y - c * (a.y - n.y) },
      next: { x: o.x + d * (a.x - n.x), y: o.y + d * (a.y - n.y) },
    };
  }
  function Le(t, e, i) {
    return Math.max(Math.min(t, i), e);
  }
  function Ve(t, e, i, s, n) {
    let o, a, r, l;
    if ((e.spanGaps && (t = t.filter((t) => !t.skip)), 'monotone' === e.cubicInterpolationMode))
      !(function (t, e = 'x') {
        const i = Re(e),
          s = t.length,
          n = Array(s).fill(0),
          o = Array(s);
        let a,
          r,
          l,
          h = Be(t, 0);
        for (a = 0; a < s; ++a)
          if (((r = l), (l = h), (h = Be(t, a + 1)), l)) {
            if (h) {
              const t = h[e] - l[e];
              n[a] = 0 !== t ? (h[i] - l[i]) / t : 0;
            }
            o[a] = r
              ? h
                ? T(n[a - 1]) !== T(n[a])
                  ? 0
                  : (n[a - 1] + n[a]) / 2
                : n[a - 1]
              : n[a];
          }
        !(function (t, e, i) {
          const s = t.length;
          let n,
            o,
            a,
            r,
            l,
            h = Be(t, 0);
          for (let u = 0; u < s - 1; ++u)
            (l = h),
              (h = Be(t, u + 1)),
              l &&
                h &&
                (I(e[u], 0, Te)
                  ? (i[u] = i[u + 1] = 0)
                  : ((n = i[u] / e[u]),
                    (o = i[u + 1] / e[u]),
                    (r = Math.pow(n, 2) + Math.pow(o, 2)),
                    r <= 9 ||
                      ((a = 3 / Math.sqrt(r)), (i[u] = n * a * e[u]), (i[u + 1] = o * a * e[u]))));
        })(t, n, o),
          (function (t, e, i = 'x') {
            const s = Re(i),
              n = t.length;
            let o,
              a,
              r,
              l = Be(t, 0);
            for (let h = 0; h < n; ++h) {
              if (((a = r), (r = l), (l = Be(t, h + 1)), !r)) continue;
              const n = r[i],
                u = r[s];
              a && ((o = (n - a[i]) / 3), (r[`cp1${i}`] = n - o), (r[`cp1${s}`] = u - o * e[h])),
                l && ((o = (l[i] - n) / 3), (r[`cp2${i}`] = n + o), (r[`cp2${s}`] = u + o * e[h]));
            }
          })(t, o, e);
      })(t, n);
    else {
      let i = s ? t[t.length - 1] : t[0];
      for (o = 0, a = t.length; o < a; ++o)
        (r = t[o]),
          (l = Ie(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension)),
          (r.cp1x = l.previous.x),
          (r.cp1y = l.previous.y),
          (r.cp2x = l.next.x),
          (r.cp2y = l.next.y),
          (i = r);
    }
    e.capBezierPoints &&
      (function (t, e) {
        let i,
          s,
          n,
          o,
          a,
          r = ee(t[0], e);
        for (i = 0, s = t.length; i < s; ++i)
          (a = o),
            (o = r),
            (r = i < s - 1 && ee(t[i + 1], e)),
            o &&
              ((n = t[i]),
              a && ((n.cp1x = Le(n.cp1x, e.left, e.right)), (n.cp1y = Le(n.cp1y, e.top, e.bottom))),
              r &&
                ((n.cp2x = Le(n.cp2x, e.left, e.right)), (n.cp2y = Le(n.cp2y, e.top, e.bottom))));
      })(t, i);
  }
  function ze() {
    return 'undefined' != typeof window && 'undefined' != typeof document;
  }
  function je(t) {
    let e = t.parentNode;
    return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
  }
  function Ne(t, e, i) {
    let s;
    return (
      'string' == typeof t
        ? ((s = parseInt(t, 10)), -1 !== t.indexOf('%') && (s = (s / 100) * e.parentNode[i]))
        : (s = t),
      s
    );
  }
  const We = (t) => window.getComputedStyle(t, null),
    He = ['top', 'right', 'bottom', 'left'];
  function $e(t, e, i) {
    const s = {};
    i = i ? '-' + i : '';
    for (let n = 0; n < 4; n++) {
      const o = He[n];
      s[o] = parseFloat(t[e + '-' + o + i]) || 0;
    }
    return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
  }
  function Ue(t, e) {
    if ('native' in t) return t;
    const { canvas: i, currentDevicePixelRatio: s } = e,
      n = We(i),
      o = 'border-box' === n.boxSizing,
      a = $e(n, 'padding'),
      r = $e(n, 'border', 'width'),
      {
        x: l,
        y: h,
        box: u,
      } = (function (t, e) {
        const i = t.touches,
          s = i && i.length ? i[0] : t,
          { offsetX: n, offsetY: o } = s;
        let a,
          r,
          l = !1;
        if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(n, o, t.target))
          (a = n), (r = o);
        else {
          const t = e.getBoundingClientRect();
          (a = s.clientX - t.left), (r = s.clientY - t.top), (l = !0);
        }
        return { x: a, y: r, box: l };
      })(t, i),
      c = a.left + (u && r.left),
      d = a.top + (u && r.top);
    let { width: f, height: p } = e;
    return (
      o && ((f -= a.width + r.width), (p -= a.height + r.height)),
      {
        x: Math.round((((l - c) / f) * i.width) / s),
        y: Math.round((((h - d) / p) * i.height) / s),
      }
    );
  }
  const Ye = (t) => Math.round(10 * t) / 10;
  function qe(t, e, i) {
    const s = e || 1,
      n = Math.floor(t.height * s),
      o = Math.floor(t.width * s);
    (t.height = n / s), (t.width = o / s);
    const a = t.canvas;
    return (
      a.style &&
        (i || (!a.style.height && !a.style.width)) &&
        ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
      (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) &&
        ((t.currentDevicePixelRatio = s),
        (a.height = n),
        (a.width = o),
        t.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
    );
  }
  const Xe = (function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return (t = !0), !1;
        },
      };
      window.addEventListener('test', null, e), window.removeEventListener('test', null, e);
    } catch (t) {}
    return t;
  })();
  function Ke(t, e) {
    const i = (function (t, e) {
        return We(t).getPropertyValue(e);
      })(t, e),
      s = i && i.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0;
  }
  function Ze(t, e, i, s) {
    return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
  }
  function Ge(t, e, i, s) {
    return {
      x: t.x + i * (e.x - t.x),
      y:
        'middle' === s
          ? i < 0.5
            ? t.y
            : e.y
          : 'after' === s
            ? i < 1
              ? t.y
              : e.y
            : i > 0
              ? e.y
              : t.y,
    };
  }
  function Je(t, e, i, s) {
    const n = { x: t.cp2x, y: t.cp2y },
      o = { x: e.cp1x, y: e.cp1y },
      a = Ze(t, n, i),
      r = Ze(n, o, i),
      l = Ze(o, e, i),
      h = Ze(a, r, i),
      u = Ze(r, l, i);
    return Ze(h, u, i);
  }
  const Qe = new Map();
  function ti(t, e, i) {
    return (function (t, e) {
      e = e || {};
      const i = t + JSON.stringify(e);
      let s = Qe.get(i);
      return s || ((s = new Intl.NumberFormat(t, e)), Qe.set(i, s)), s;
    })(e, i).format(t);
  }
  function ei(t, e, i) {
    return t
      ? (function (t, e) {
          return {
            x: (i) => t + t + e - i,
            setWidth(t) {
              e = t;
            },
            textAlign: (t) => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e,
          };
        })(e, i)
      : {
          x: (t) => t,
          setWidth(t) {},
          textAlign: (t) => t,
          xPlus: (t, e) => t + e,
          leftForLtr: (t, e) => t,
        };
  }
  function ii(t, e) {
    let i, s;
    ('ltr' !== e && 'rtl' !== e) ||
      ((i = t.canvas.style),
      (s = [i.getPropertyValue('direction'), i.getPropertyPriority('direction')]),
      i.setProperty('direction', e, 'important'),
      (t.prevTextDirection = s));
  }
  function si(t, e) {
    void 0 !== e &&
      (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]));
  }
  function ni(t) {
    return 'angle' === t
      ? { between: U, compare: H, normalize: $ }
      : { between: q, compare: (t, e) => t - e, normalize: (t) => t };
  }
  function oi({ start: t, end: e, count: i, loop: s, style: n }) {
    return { start: t % i, end: e % i, loop: s && (e - t + 1) % i == 0, style: n };
  }
  function ai(t, e, i) {
    if (!i) return [t];
    const { property: s, start: n, end: o } = i,
      a = e.length,
      { compare: r, between: l, normalize: h } = ni(s),
      {
        start: u,
        end: c,
        loop: d,
        style: f,
      } = (function (t, e, i) {
        const { property: s, start: n, end: o } = i,
          { between: a, normalize: r } = ni(s),
          l = e.length;
        let h,
          u,
          { start: c, end: d, loop: f } = t;
        if (f) {
          for (c += l, d += l, h = 0, u = l; h < u && a(r(e[c % l][s]), n, o); ++h) c--, d--;
          (c %= l), (d %= l);
        }
        return d < c && (d += l), { start: c, end: d, loop: f, style: t.style };
      })(t, e, i),
      p = [];
    let g,
      m,
      b,
      v = !1,
      x = null;
    for (let t = u, i = u; t <= c; ++t)
      (m = e[t % a]),
        m.skip ||
          ((g = h(m[s])),
          g !== b &&
            ((v = l(g, n, o)),
            null === x && (v || (l(n, b, g) && 0 !== r(n, b))) && (x = 0 === r(g, n) ? t : i),
            null !== x &&
              (!v || 0 === r(o, g) || l(o, b, g)) &&
              (p.push(oi({ start: x, end: t, loop: d, count: a, style: f })), (x = null)),
            (i = t),
            (b = g)));
    return null !== x && p.push(oi({ start: x, end: c, loop: d, count: a, style: f })), p;
  }
  function ri(t, e) {
    const i = [],
      s = t.segments;
    for (let n = 0; n < s.length; n++) {
      const o = ai(s[n], t.points, e);
      o.length && i.push(...o);
    }
    return i;
  }
  function li(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor,
    };
  }
  function hi(t, e) {
    return e && JSON.stringify(t) !== JSON.stringify(e);
  }
  var ui = new (class {
    constructor() {
      (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    _notify(t, e, i, s) {
      const n = e.listeners[s],
        o = e.duration;
      n.forEach((s) =>
        s({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) }),
      );
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = tt.call(window, () => {
          this._update(), (this._request = null), this._running && this._refresh();
        })));
    }
    _update(t = Date.now()) {
      let e = 0;
      this._charts.forEach((i, s) => {
        if (!i.running || !i.items.length) return;
        const n = i.items;
        let o,
          a = n.length - 1,
          r = !1;
        for (; a >= 0; --a)
          (o = n[a]),
            o._active
              ? (o._total > i.duration && (i.duration = o._total), o.tick(t), (r = !0))
              : ((n[a] = n[n.length - 1]), n.pop());
        r && (s.draw(), this._notify(s, i, t, 'progress')),
          n.length || ((i.running = !1), this._notify(s, i, t, 'complete'), (i.initial = !1)),
          (e += n.length);
      }),
        (this._lastDate = t),
        0 === e && (this._running = !1);
    }
    _getAnims(t) {
      const e = this._charts;
      let i = e.get(t);
      return (
        i ||
          ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
          e.set(t, i)),
        i
      );
    }
    listen(t, e, i) {
      this._getAnims(t).listeners[e].push(i);
    }
    add(t, e) {
      e && e.length && this._getAnims(t).items.push(...e);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const e = this._charts.get(t);
      e &&
        ((e.running = !0),
        (e.start = Date.now()),
        (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
        this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const e = this._charts.get(t);
      return !!(e && e.running && e.items.length);
    }
    stop(t) {
      const e = this._charts.get(t);
      if (!e || !e.items.length) return;
      const i = e.items;
      let s = i.length - 1;
      for (; s >= 0; --s) i[s].cancel();
      (e.items = []), this._notify(t, e, Date.now(), 'complete');
    }
    remove(t) {
      return this._charts.delete(t);
    }
  })();
  const ci = 'transparent',
    di = {
      boolean: (t, e, i) => (i > 0.5 ? e : t),
      color(t, e, i) {
        const s = Wt(t || ci),
          n = s.valid && Wt(e || ci);
        return n && n.valid ? n.mix(s, i).hexString() : e;
      },
      number: (t, e, i) => t + (e - t) * i,
    };
  class fi {
    constructor(t, e, i, s) {
      const n = e[i];
      s = be([t.to, s, n, t.from]);
      const o = be([t.from, n, s]);
      (this._active = !0),
        (this._fn = t.fn || di[t.type || typeof o]),
        (this._easing = ht[t.easing] || ht.linear),
        (this._start = Math.floor(Date.now() + (t.delay || 0))),
        (this._duration = this._total = Math.floor(t.duration)),
        (this._loop = !!t.loop),
        (this._target = e),
        (this._prop = i),
        (this._from = o),
        (this._to = s),
        (this._promises = void 0);
    }
    active() {
      return this._active;
    }
    update(t, e, i) {
      if (this._active) {
        this._notify(!1);
        const s = this._target[this._prop],
          n = i - this._start,
          o = this._duration - n;
        (this._start = i),
          (this._duration = Math.floor(Math.max(o, t.duration))),
          (this._total += n),
          (this._loop = !!t.loop),
          (this._to = be([t.to, e, s, t.from])),
          (this._from = be([t.from, s, e]));
      }
    }
    cancel() {
      this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(t) {
      const e = t - this._start,
        i = this._duration,
        s = this._prop,
        n = this._from,
        o = this._loop,
        a = this._to;
      let r;
      if (((this._active = n !== a && (o || e < i)), !this._active))
        return (this._target[s] = a), void this._notify(!0);
      e < 0
        ? (this._target[s] = n)
        : ((r = (e / i) % 2),
          (r = o && r > 1 ? 2 - r : r),
          (r = this._easing(Math.min(1, Math.max(0, r)))),
          (this._target[s] = this._fn(n, a, r)));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, i) => {
        t.push({ res: e, rej: i });
      });
    }
    _notify(t) {
      const e = t ? 'res' : 'rej',
        i = this._promises || [];
      for (let t = 0; t < i.length; t++) i[t][e]();
    }
  }
  Xt.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  });
  const pi = Object.keys(Xt.animation);
  Xt.describe('animation', {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
  }),
    Xt.set('animations', {
      colors: { type: 'color', properties: ['color', 'borderColor', 'backgroundColor'] },
      numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius', 'tension'] },
    }),
    Xt.describe('animations', { _fallback: 'animation' }),
    Xt.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } },
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: (t) => 0 | t },
        },
      },
    });
  class gi {
    constructor(t, e) {
      (this._chart = t), (this._properties = new Map()), this.configure(e);
    }
    configure(t) {
      if (!n(t)) return;
      const e = this._properties;
      Object.getOwnPropertyNames(t).forEach((i) => {
        const o = t[i];
        if (!n(o)) return;
        const a = {};
        for (const t of pi) a[t] = o[t];
        ((s(o.properties) && o.properties) || [i]).forEach((t) => {
          (t !== i && e.has(t)) || e.set(t, a);
        });
      });
    }
    _animateOptions(t, e) {
      const i = e.options,
        s = (function (t, e) {
          if (!e) return;
          let i = t.options;
          if (i)
            return (
              i.$shared && (t.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })),
              i
            );
          t.options = e;
        })(t, i);
      if (!s) return [];
      const n = this._createAnimations(s, i);
      return (
        i.$shared &&
          (function (t, e) {
            const i = [],
              s = Object.keys(e);
            for (let e = 0; e < s.length; e++) {
              const n = t[s[e]];
              n && n.active() && i.push(n.wait());
            }
            return Promise.all(i);
          })(t.options.$animations, i).then(
            () => {
              t.options = i;
            },
            () => {},
          ),
        n
      );
    }
    _createAnimations(t, e) {
      const i = this._properties,
        s = [],
        n = t.$animations || (t.$animations = {}),
        o = Object.keys(e),
        a = Date.now();
      let r;
      for (r = o.length - 1; r >= 0; --r) {
        const l = o[r];
        if ('$' === l.charAt(0)) continue;
        if ('options' === l) {
          s.push(...this._animateOptions(t, e));
          continue;
        }
        const h = e[l];
        let u = n[l];
        const c = i.get(l);
        if (u) {
          if (c && u.active()) {
            u.update(c, h, a);
            continue;
          }
          u.cancel();
        }
        c && c.duration ? ((n[l] = u = new fi(c, t, l, h)), s.push(u)) : (t[l] = h);
      }
      return s;
    }
    update(t, e) {
      if (0 === this._properties.size) return void Object.assign(t, e);
      const i = this._createAnimations(t, e);
      return i.length ? (ui.add(this._chart, i), !0) : void 0;
    }
  }
  function mi(t, e) {
    const i = (t && t.options) || {},
      s = i.reverse,
      n = void 0 === i.min ? e : 0,
      o = void 0 === i.max ? e : 0;
    return { start: s ? o : n, end: s ? n : o };
  }
  function bi(t, e) {
    const i = [],
      s = t._getSortedDatasetMetas(e);
    let n, o;
    for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
    return i;
  }
  function vi(t, e, i, s = {}) {
    const n = t.keys,
      a = 'single' === s.mode;
    let r, l, h, u;
    if (null !== e) {
      for (r = 0, l = n.length; r < l; ++r) {
        if (((h = +n[r]), h === i)) {
          if (s.all) continue;
          break;
        }
        (u = t.values[h]), o(u) && (a || 0 === e || T(e) === T(u)) && (e += u);
      }
      return e;
    }
  }
  function xi(t, e) {
    const i = t && t.options.stacked;
    return i || (void 0 === i && void 0 !== e.stack);
  }
  function yi(t, e, i) {
    const s = t[e] || (t[e] = {});
    return s[i] || (s[i] = {});
  }
  function _i(t, e, i, s) {
    for (const n of e.getMatchingVisibleMetas(s).reverse()) {
      const e = t[n.index];
      if ((i && e > 0) || (!i && e < 0)) return n.index;
    }
    return null;
  }
  function ki(t, e) {
    const { chart: i, _cachedMeta: s } = t,
      n = i._stacks || (i._stacks = {}),
      { iScale: o, vScale: a, index: r } = s,
      l = o.axis,
      h = a.axis,
      u = (function (t, e, i) {
        return `${t.id}.${e.id}.${i.stack || i.type}`;
      })(o, a, s),
      c = e.length;
    let d;
    for (let t = 0; t < c; ++t) {
      const i = e[t],
        { [l]: o, [h]: c } = i;
      (d = (i._stacks || (i._stacks = {}))[h] = yi(n, u, o)),
        (d[r] = c),
        (d._top = _i(d, a, !0, s.type)),
        (d._bottom = _i(d, a, !1, s.type));
    }
  }
  function wi(t, e) {
    const i = t.scales;
    return Object.keys(i)
      .filter((t) => i[t].axis === e)
      .shift();
  }
  function Mi(t, e) {
    const i = t.controller.index,
      s = t.vScale && t.vScale.axis;
    if (s) {
      e = e || t._parsed;
      for (const t of e) {
        const e = t._stacks;
        if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
        delete e[s][i];
      }
    }
  }
  const Si = (t) => 'reset' === t || 'none' === t,
    Ai = (t, e) => (e ? t : Object.assign({}, t));
  class Ci {
    constructor(t, e) {
      (this.chart = t),
        (this._ctx = t.ctx),
        (this.index = e),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.supportsDecimation = !1),
        (this.$context = void 0),
        (this._syncList = []),
        this.initialize();
    }
    initialize() {
      const t = this._cachedMeta;
      this.configure(), this.linkScales(), (t._stacked = xi(t.vScale, t)), this.addElements();
    }
    updateIndex(t) {
      this.index !== t && Mi(this._cachedMeta), (this.index = t);
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        i = this.getDataset(),
        s = (t, e, i, s) => ('x' === t ? e : 'r' === t ? s : i),
        n = (e.xAxisID = r(i.xAxisID, wi(t, 'x'))),
        o = (e.yAxisID = r(i.yAxisID, wi(t, 'y'))),
        a = (e.rAxisID = r(i.rAxisID, wi(t, 'r'))),
        l = e.indexAxis,
        h = (e.iAxisID = s(l, n, o, a)),
        u = (e.vAxisID = s(l, o, n, a));
      (e.xScale = this.getScaleForId(n)),
        (e.yScale = this.getScaleForId(o)),
        (e.rScale = this.getScaleForId(a)),
        (e.iScale = this.getScaleForId(h)),
        (e.vScale = this.getScaleForId(u));
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const e = this._cachedMeta;
      return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
      this._update('reset');
    }
    _destroy() {
      const t = this._cachedMeta;
      this._data && J(this._data, this), t._stacked && Mi(t);
    }
    _dataCheck() {
      const t = this.getDataset(),
        e = t.data || (t.data = []),
        i = this._data;
      if (n(e))
        this._data = (function (t) {
          const e = Object.keys(t),
            i = new Array(e.length);
          let s, n, o;
          for (s = 0, n = e.length; s < n; ++s) (o = e[s]), (i[s] = { x: o, y: t[o] });
          return i;
        })(e);
      else if (i !== e) {
        if (i) {
          J(i, this);
          const t = this._cachedMeta;
          Mi(t), (t._parsed = []);
        }
        e &&
          Object.isExtensible(e) &&
          (this,
          (s = e)._chartjs
            ? s._chartjs.listeners.push(this)
            : (Object.defineProperty(s, '_chartjs', {
                configurable: !0,
                enumerable: !1,
                value: { listeners: [this] },
              }),
              G.forEach((t) => {
                const e = '_onData' + y(t),
                  i = s[t];
                Object.defineProperty(s, t, {
                  configurable: !0,
                  enumerable: !1,
                  value(...t) {
                    const n = i.apply(this, t);
                    return (
                      s._chartjs.listeners.forEach((i) => {
                        'function' == typeof i[e] && i[e](...t);
                      }),
                      n
                    );
                  },
                });
              }))),
          (this._syncList = []),
          (this._data = e);
      }
      var s;
    }
    addElements() {
      const t = this._cachedMeta;
      this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const e = this._cachedMeta,
        i = this.getDataset();
      let s = !1;
      this._dataCheck();
      const n = e._stacked;
      (e._stacked = xi(e.vScale, e)),
        e.stack !== i.stack && ((s = !0), Mi(e), (e.stack = i.stack)),
        this._resyncElements(t),
        (s || n !== e._stacked) && ki(this, e._parsed);
    }
    configure() {
      const t = this.chart.config,
        e = t.datasetScopeKeys(this._type),
        i = t.getOptionScopes(this.getDataset(), e, !0);
      (this.options = t.createResolver(i, this.getContext())),
        (this._parsing = this.options.parsing),
        (this._cachedDataOpts = {});
    }
    parse(t, e) {
      const { _cachedMeta: i, _data: o } = this,
        { iScale: a, _stacked: r } = i,
        l = a.axis;
      let h,
        u,
        c,
        d = (0 === t && e === o.length) || i._sorted,
        f = t > 0 && i._parsed[t - 1];
      if (!1 === this._parsing) (i._parsed = o), (i._sorted = !0), (c = o);
      else {
        c = s(o[t])
          ? this.parseArrayData(i, o, t, e)
          : n(o[t])
            ? this.parseObjectData(i, o, t, e)
            : this.parsePrimitiveData(i, o, t, e);
        const a = () => null === u[l] || (f && u[l] < f[l]);
        for (h = 0; h < e; ++h) (i._parsed[h + t] = u = c[h]), d && (a() && (d = !1), (f = u));
        i._sorted = d;
      }
      r && ki(this, c);
    }
    parsePrimitiveData(t, e, i, s) {
      const { iScale: n, vScale: o } = t,
        a = n.axis,
        r = o.axis,
        l = n.getLabels(),
        h = n === o,
        u = new Array(s);
      let c, d, f;
      for (c = 0, d = s; c < d; ++c)
        (f = c + i), (u[c] = { [a]: h || n.parse(l[f], f), [r]: o.parse(e[f], f) });
      return u;
    }
    parseArrayData(t, e, i, s) {
      const { xScale: n, yScale: o } = t,
        a = new Array(s);
      let r, l, h, u;
      for (r = 0, l = s; r < l; ++r)
        (h = r + i), (u = e[h]), (a[r] = { x: n.parse(u[0], h), y: o.parse(u[1], h) });
      return a;
    }
    parseObjectData(t, e, i, s) {
      const { xScale: n, yScale: o } = t,
        { xAxisKey: a = 'x', yAxisKey: r = 'y' } = this._parsing,
        l = new Array(s);
      let h, u, c, d;
      for (h = 0, u = s; h < u; ++h)
        (c = h + i), (d = e[c]), (l[h] = { x: n.parse(x(d, a), c), y: o.parse(x(d, r), c) });
      return l;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, e, i) {
      const s = this.chart,
        n = this._cachedMeta,
        o = e[t.axis];
      return vi({ keys: bi(s, !0), values: e._stacks[t.axis] }, o, n.index, { mode: i });
    }
    updateRangeFromParsed(t, e, i, s) {
      const n = i[e.axis];
      let o = null === n ? NaN : n;
      const a = s && i._stacks[e.axis];
      s && a && ((s.values = a), (o = vi(s, n, this._cachedMeta.index))),
        (t.min = Math.min(t.min, o)),
        (t.max = Math.max(t.max, o));
    }
    getMinMax(t, e) {
      const i = this._cachedMeta,
        s = i._parsed,
        n = i._sorted && t === i.iScale,
        a = s.length,
        r = this._getOtherScale(t),
        l = ((t, e, i) => t && !e.hidden && e._stacked && { keys: bi(i, !0), values: null })(
          e,
          i,
          this.chart,
        ),
        h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: u, max: c } = (function (t) {
          const { min: e, max: i, minDefined: s, maxDefined: n } = t.getUserBounds();
          return { min: s ? e : Number.NEGATIVE_INFINITY, max: n ? i : Number.POSITIVE_INFINITY };
        })(r);
      let d, f;
      function p() {
        f = s[d];
        const e = f[r.axis];
        return !o(f[t.axis]) || u > e || c < e;
      }
      for (d = 0; d < a && (p() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++d);
      if (n)
        for (d = a - 1; d >= 0; --d)
          if (!p()) {
            this.updateRangeFromParsed(h, t, f, l);
            break;
          }
      return h;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed,
        i = [];
      let s, n, a;
      for (s = 0, n = e.length; s < n; ++s) (a = e[s][t.axis]), o(a) && i.push(a);
      return i;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = e.iScale,
        s = e.vScale,
        n = this.getParsed(t);
      return {
        label: i ? '' + i.getLabelForValue(n[i.axis]) : '',
        value: s ? '' + s.getLabelForValue(n[s.axis]) : '',
      };
    }
    _update(t) {
      const e = this._cachedMeta;
      this.update(t || 'default'),
        (e._clip = (function (t) {
          let e, i, s, o;
          return (
            n(t) ? ((e = t.top), (i = t.right), (s = t.bottom), (o = t.left)) : (e = i = s = o = t),
            { top: e, right: i, bottom: s, left: o, disabled: !1 === t }
          );
        })(
          r(
            this.options.clip,
            (function (t, e, i) {
              if (!1 === i) return !1;
              const s = mi(t, i),
                n = mi(e, i);
              return { top: n.end, right: s.end, bottom: n.start, left: s.start };
            })(e.xScale, e.yScale, this.getMaxOverflow()),
          ),
        ));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        e = this.chart,
        i = this._cachedMeta,
        s = i.data || [],
        n = e.chartArea,
        o = [],
        a = this._drawStart || 0,
        r = this._drawCount || s.length - a,
        l = this.options.drawActiveElementsOnTop;
      let h;
      for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) {
        const e = s[h];
        e.hidden || (e.active && l ? o.push(e) : e.draw(t, n));
      }
      for (h = 0; h < o.length; ++h) o[h].draw(t, n);
    }
    getStyle(t, e) {
      const i = e ? 'active' : 'default';
      return void 0 === t && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(i)
        : this.resolveDataElementOptions(t || 0, i);
    }
    getContext(t, e, i) {
      const s = this.getDataset();
      let n;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const e = this._cachedMeta.data[t];
        (n =
          e.$context ||
          (e.$context = (function (t, e, i) {
            return ve(t, {
              active: !1,
              dataIndex: e,
              parsed: void 0,
              raw: void 0,
              element: i,
              index: e,
              mode: 'default',
              type: 'data',
            });
          })(this.getContext(), t, e))),
          (n.parsed = this.getParsed(t)),
          (n.raw = s.data[t]),
          (n.index = n.dataIndex = t);
      } else
        (n =
          this.$context ||
          (this.$context = (function (t, e) {
            return ve(t, {
              active: !1,
              dataset: void 0,
              datasetIndex: e,
              index: e,
              mode: 'default',
              type: 'dataset',
            });
          })(this.chart.getContext(), this.index))),
          (n.dataset = s),
          (n.index = n.datasetIndex = this.index);
      return (n.active = !!e), (n.mode = i), n;
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
      return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t, e = 'default', i) {
      const s = 'active' === e,
        n = this._cachedDataOpts,
        o = t + '-' + e,
        a = n[o],
        r = this.enableOptionSharing && _(i);
      if (a) return Ai(a, r);
      const l = this.chart.config,
        h = l.datasetElementScopeKeys(this._type, t),
        u = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
        c = l.getOptionScopes(this.getDataset(), h),
        d = Object.keys(Xt.elements[t]),
        f = l.resolveNamedOptions(c, d, () => this.getContext(i, s), u);
      return f.$shared && ((f.$shared = r), (n[o] = Object.freeze(Ai(f, r)))), f;
    }
    _resolveAnimations(t, e, i) {
      const s = this.chart,
        n = this._cachedDataOpts,
        o = `animation-${e}`,
        a = n[o];
      if (a) return a;
      let r;
      if (!1 !== s.options.animation) {
        const s = this.chart.config,
          n = s.datasetAnimationScopeKeys(this._type, e),
          o = s.getOptionScopes(this.getDataset(), n);
        r = s.createResolver(o, this.getContext(t, i, e));
      }
      const l = new gi(s, r && r.animations);
      return r && r._cacheable && (n[o] = Object.freeze(l)), l;
    }
    getSharedOptions(t) {
      if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
    }
    includeOptions(t, e) {
      return !e || Si(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const i = this.resolveDataElementOptions(t, e),
        s = this._sharedOptions,
        n = this.getSharedOptions(i),
        o = this.includeOptions(e, n) || n !== s;
      return this.updateSharedOptions(n, e, i), { sharedOptions: n, includeOptions: o };
    }
    updateElement(t, e, i, s) {
      Si(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
    }
    updateSharedOptions(t, e, i) {
      t && !Si(e) && this._resolveAnimations(void 0, e).update(t, i);
    }
    _setStyle(t, e, i, s) {
      t.active = s;
      const n = this.getStyle(e, s);
      this._resolveAnimations(e, i, s).update(t, {
        options: (!s && this.getSharedOptions(n)) || n,
      });
    }
    removeHoverStyle(t, e, i) {
      this._setStyle(t, i, 'active', !1);
    }
    setHoverStyle(t, e, i) {
      this._setStyle(t, i, 'active', !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, 'active', !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, 'active', !0);
    }
    _resyncElements(t) {
      const e = this._data,
        i = this._cachedMeta.data;
      for (const [t, e, i] of this._syncList) this[t](e, i);
      this._syncList = [];
      const s = i.length,
        n = e.length,
        o = Math.min(n, s);
      o && this.parse(0, o),
        n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n);
    }
    _insertElements(t, e, i = !0) {
      const s = this._cachedMeta,
        n = s.data,
        o = t + e;
      let a;
      const r = (t) => {
        for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
      };
      for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType();
      this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, 'reset');
    }
    updateElements(t, e, i, s) {}
    _removeElements(t, e) {
      const i = this._cachedMeta;
      if (this._parsing) {
        const s = i._parsed.splice(t, e);
        i._stacked && Mi(i, s);
      }
      i.data.splice(t, e);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);
      else {
        const [e, i, s] = t;
        this[e](i, s);
      }
      this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
      const t = arguments.length;
      this._sync(['_insertElements', this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
      this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(['_removeElements', 0, 1]);
    }
    _onDataSplice(t, e) {
      e && this._sync(['_removeElements', t, e]);
      const i = arguments.length - 2;
      i && this._sync(['_insertElements', t, i]);
    }
    _onDataUnshift() {
      this._sync(['_insertElements', 0, arguments.length]);
    }
  }
  function Ei(t) {
    const e = t.iScale,
      i = (function (t, e) {
        if (!t._cache.$bar) {
          const i = t.getMatchingVisibleMetas(e);
          let s = [];
          for (let e = 0, n = i.length; e < n; e++)
            s = s.concat(i[e].controller.getAllParsedValues(t));
          t._cache.$bar = Q(s.sort((t, e) => t - e));
        }
        return t._cache.$bar;
      })(e, t.type);
    let s,
      n,
      o,
      a,
      r = e._length;
    const l = () => {
      32767 !== o && -32768 !== o && (_(a) && (r = Math.min(r, Math.abs(o - a) || r)), (a = o));
    };
    for (s = 0, n = i.length; s < n; ++s) (o = e.getPixelForValue(i[s])), l();
    for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) (o = e.getPixelForTick(s)), l();
    return r;
  }
  function Di(t, e, i, n) {
    return (
      s(t)
        ? (function (t, e, i, s) {
            const n = i.parse(t[0], s),
              o = i.parse(t[1], s),
              a = Math.min(n, o),
              r = Math.max(n, o);
            let l = a,
              h = r;
            Math.abs(a) > Math.abs(r) && ((l = r), (h = a)),
              (e[i.axis] = h),
              (e._custom = { barStart: l, barEnd: h, start: n, end: o, min: a, max: r });
          })(t, e, i, n)
        : (e[i.axis] = i.parse(t, n)),
      e
    );
  }
  function Pi(t, e, i, s) {
    const n = t.iScale,
      o = t.vScale,
      a = n.getLabels(),
      r = n === o,
      l = [];
    let h, u, c, d;
    for (h = i, u = i + s; h < u; ++h)
      (d = e[h]), (c = {}), (c[n.axis] = r || n.parse(a[h], h)), l.push(Di(d, c, o, h));
    return l;
  }
  function Fi(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  function Oi(t, e, i, s) {
    let n = e.borderSkipped;
    const o = {};
    if (!n) return void (t.borderSkipped = o);
    if (!0 === n) return void (t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 });
    const {
      start: a,
      end: r,
      reverse: l,
      top: h,
      bottom: u,
    } = (function (t) {
      let e, i, s, n, o;
      return (
        t.horizontal
          ? ((e = t.base > t.x), (i = 'left'), (s = 'right'))
          : ((e = t.base < t.y), (i = 'bottom'), (s = 'top')),
        e ? ((n = 'end'), (o = 'start')) : ((n = 'start'), (o = 'end')),
        { start: i, end: s, reverse: e, top: n, bottom: o }
      );
    })(t);
    'middle' === n &&
      i &&
      ((t.enableBorderRadius = !0),
      (i._top || 0) === s
        ? (n = h)
        : (i._bottom || 0) === s
          ? (n = u)
          : ((o[Ti(u, a, r, l)] = !0), (n = h))),
      (o[Ti(n, a, r, l)] = !0),
      (t.borderSkipped = o);
  }
  function Ti(t, e, i, s) {
    var n, o, a;
    return (
      s
        ? ((a = i), (t = Bi((t = (n = t) === (o = e) ? a : n === a ? o : n), i, e)))
        : (t = Bi(t, e, i)),
      t
    );
  }
  function Bi(t, e, i) {
    return 'start' === t ? e : 'end' === t ? i : t;
  }
  function Ri(t, { inflateAmount: e }, i) {
    t.inflateAmount = 'auto' === e ? (1 === i ? 0.33 : 0) : e;
  }
  (Ci.defaults = {}),
    (Ci.prototype.datasetElementType = null),
    (Ci.prototype.dataElementType = null);
  class Ii extends Ci {
    parsePrimitiveData(t, e, i, s) {
      return Pi(t, e, i, s);
    }
    parseArrayData(t, e, i, s) {
      return Pi(t, e, i, s);
    }
    parseObjectData(t, e, i, s) {
      const { iScale: n, vScale: o } = t,
        { xAxisKey: a = 'x', yAxisKey: r = 'y' } = this._parsing,
        l = 'x' === n.axis ? a : r,
        h = 'x' === o.axis ? a : r,
        u = [];
      let c, d, f, p;
      for (c = i, d = i + s; c < d; ++c)
        (p = e[c]), (f = {}), (f[n.axis] = n.parse(x(p, l), c)), u.push(Di(x(p, h), f, o, c));
      return u;
    }
    updateRangeFromParsed(t, e, i, s) {
      super.updateRangeFromParsed(t, e, i, s);
      const n = i._custom;
      n &&
        e === this._cachedMeta.vScale &&
        ((t.min = Math.min(t.min, n.min)), (t.max = Math.max(t.max, n.max)));
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        { iScale: i, vScale: s } = e,
        n = this.getParsed(t),
        o = n._custom,
        a = Fi(o) ? '[' + o.start + ', ' + o.end + ']' : '' + s.getLabelForValue(n[s.axis]);
      return { label: '' + i.getLabelForValue(n[i.axis]), value: a };
    }
    initialize() {
      (this.enableOptionSharing = !0),
        super.initialize(),
        (this._cachedMeta.stack = this.getDataset().stack);
    }
    update(t) {
      const e = this._cachedMeta;
      this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, s, n) {
      const o = 'reset' === n,
        {
          index: a,
          _cachedMeta: { vScale: r },
        } = this,
        l = r.getBasePixel(),
        h = r.isHorizontal(),
        u = this._getRuler(),
        { sharedOptions: c, includeOptions: d } = this._getSharedOptions(e, n);
      for (let f = e; f < e + s; f++) {
        const e = this.getParsed(f),
          s = o || i(e[r.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(f),
          p = this._calculateBarIndexPixels(f, u),
          g = (e._stacks || {})[r.axis],
          m = {
            horizontal: h,
            base: s.base,
            enableBorderRadius: !g || Fi(e._custom) || a === g._top || a === g._bottom,
            x: h ? s.head : p.center,
            y: h ? p.center : s.head,
            height: h ? p.size : Math.abs(s.size),
            width: h ? Math.abs(s.size) : p.size,
          };
        d && (m.options = c || this.resolveDataElementOptions(f, t[f].active ? 'active' : n));
        const b = m.options || t[f].options;
        Oi(m, b, g, a), Ri(m, b, u.ratio), this.updateElement(t[f], f, m, n);
      }
    }
    _getStacks(t, e) {
      const { iScale: s } = this._cachedMeta,
        n = s.getMatchingVisibleMetas(this._type).filter((t) => t.controller.options.grouped),
        o = s.options.stacked,
        a = [],
        r = (t) => {
          const s = t.controller.getParsed(e),
            n = s && s[t.vScale.axis];
          if (i(n) || isNaN(n)) return !0;
        };
      for (const i of n)
        if (
          (void 0 === e || !r(i)) &&
          ((!1 === o || -1 === a.indexOf(i.stack) || (void 0 === o && void 0 === i.stack)) &&
            a.push(i.stack),
          i.index === t)
        )
          break;
      return a.length || a.push(void 0), a;
    }
    _getStackCount(t) {
      return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, i) {
      const s = this._getStacks(t, i),
        n = void 0 !== e ? s.indexOf(e) : -1;
      return -1 === n ? s.length - 1 : n;
    }
    _getRuler() {
      const t = this.options,
        e = this._cachedMeta,
        i = e.iScale,
        s = [];
      let n, o;
      for (n = 0, o = e.data.length; n < o; ++n)
        s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
      const a = t.barThickness;
      return {
        min: a || Ei(e),
        pixels: s,
        start: i._startPixel,
        end: i._endPixel,
        stackCount: this._getStackCount(),
        scale: i,
        grouped: t.grouped,
        ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
      };
    }
    _calculateBarValuePixels(t) {
      const {
          _cachedMeta: { vScale: e, _stacked: s },
          options: { base: n, minBarLength: o },
        } = this,
        a = n || 0,
        r = this.getParsed(t),
        l = r._custom,
        h = Fi(l);
      let u,
        c,
        d = r[e.axis],
        f = 0,
        p = s ? this.applyStack(e, r, s) : d;
      p !== d && ((f = p - d), (p = d)),
        h &&
          ((d = l.barStart),
          (p = l.barEnd - l.barStart),
          0 !== d && T(d) !== T(l.barEnd) && (f = 0),
          (f += d));
      const g = i(n) || h ? f : n;
      let m = e.getPixelForValue(g);
      if (
        ((u = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m),
        (c = u - m),
        Math.abs(c) < o)
      ) {
        (c =
          (function (t, e, i) {
            return 0 !== t ? T(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
          })(c, e, a) * o),
          d === a && (m -= c / 2);
        const t = e.getPixelForDecimal(0),
          i = e.getPixelForDecimal(1),
          s = Math.min(t, i),
          n = Math.max(t, i);
        (m = Math.max(Math.min(m, n), s)), (u = m + c);
      }
      if (m === e.getPixelForValue(a)) {
        const t = (T(c) * e.getLineWidthForValue(a)) / 2;
        (m += t), (c -= t);
      }
      return { size: c, base: m, head: u, center: u + c / 2 };
    }
    _calculateBarIndexPixels(t, e) {
      const s = e.scale,
        n = this.options,
        o = n.skipNull,
        a = r(n.maxBarThickness, 1 / 0);
      let l, h;
      if (e.grouped) {
        const s = o ? this._getStackCount(t) : e.stackCount,
          r =
            'flex' === n.barThickness
              ? (function (t, e, i, s) {
                  const n = e.pixels,
                    o = n[t];
                  let a = t > 0 ? n[t - 1] : null,
                    r = t < n.length - 1 ? n[t + 1] : null;
                  const l = i.categoryPercentage;
                  null === a && (a = o - (null === r ? e.end - e.start : r - o)),
                    null === r && (r = o + o - a);
                  const h = o - ((o - Math.min(a, r)) / 2) * l;
                  return {
                    chunk: ((Math.abs(r - a) / 2) * l) / s,
                    ratio: i.barPercentage,
                    start: h,
                  };
                })(t, e, n, s)
              : (function (t, e, s, n) {
                  const o = s.barThickness;
                  let a, r;
                  return (
                    i(o)
                      ? ((a = e.min * s.categoryPercentage), (r = s.barPercentage))
                      : ((a = o * n), (r = 1)),
                    { chunk: a / n, ratio: r, start: e.pixels[t] - a / 2 }
                  );
                })(t, e, n, s),
          u = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
        (l = r.start + r.chunk * u + r.chunk / 2), (h = Math.min(a, r.chunk * r.ratio));
      } else
        (l = s.getPixelForValue(this.getParsed(t)[s.axis], t)), (h = Math.min(a, e.min * e.ratio));
      return { base: l - h / 2, head: l + h / 2, center: l, size: h };
    }
    draw() {
      const t = this._cachedMeta,
        e = t.vScale,
        i = t.data,
        s = i.length;
      let n = 0;
      for (; n < s; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
    }
  }
  (Ii.id = 'bar'),
    (Ii.defaults = {
      datasetElementType: !1,
      dataElementType: 'bar',
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: !0,
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] },
      },
    }),
    (Ii.overrides = {
      scales: {
        _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
        _value_: { type: 'linear', beginAtZero: !0 },
      },
    });
  class Li extends Ci {
    initialize() {
      (this.enableOptionSharing = !0), super.initialize();
    }
    parsePrimitiveData(t, e, i, s) {
      const n = super.parsePrimitiveData(t, e, i, s);
      for (let t = 0; t < n.length; t++)
        n[t]._custom = this.resolveDataElementOptions(t + i).radius;
      return n;
    }
    parseArrayData(t, e, i, s) {
      const n = super.parseArrayData(t, e, i, s);
      for (let t = 0; t < n.length; t++) {
        const s = e[i + t];
        n[t]._custom = r(s[2], this.resolveDataElementOptions(t + i).radius);
      }
      return n;
    }
    parseObjectData(t, e, i, s) {
      const n = super.parseObjectData(t, e, i, s);
      for (let t = 0; t < n.length; t++) {
        const s = e[i + t];
        n[t]._custom = r(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius);
      }
      return n;
    }
    getMaxOverflow() {
      const t = this._cachedMeta.data;
      let e = 0;
      for (let i = t.length - 1; i >= 0; --i)
        e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
      return e > 0 && e;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        { xScale: i, yScale: s } = e,
        n = this.getParsed(t),
        o = i.getLabelForValue(n.x),
        a = s.getLabelForValue(n.y),
        r = n._custom;
      return { label: e.label, value: '(' + o + ', ' + a + (r ? ', ' + r : '') + ')' };
    }
    update(t) {
      const e = this._cachedMeta.data;
      this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, i, s) {
      const n = 'reset' === s,
        { iScale: o, vScale: a } = this._cachedMeta,
        { sharedOptions: r, includeOptions: l } = this._getSharedOptions(e, s),
        h = o.axis,
        u = a.axis;
      for (let c = e; c < e + i; c++) {
        const e = t[c],
          i = !n && this.getParsed(c),
          d = {},
          f = (d[h] = n ? o.getPixelForDecimal(0.5) : o.getPixelForValue(i[h])),
          p = (d[u] = n ? a.getBasePixel() : a.getPixelForValue(i[u]));
        (d.skip = isNaN(f) || isNaN(p)),
          l &&
            ((d.options = r || this.resolveDataElementOptions(c, e.active ? 'active' : s)),
            n && (d.options.radius = 0)),
          this.updateElement(e, c, d, s);
      }
    }
    resolveDataElementOptions(t, e) {
      const i = this.getParsed(t);
      let s = super.resolveDataElementOptions(t, e);
      s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
      const n = s.radius;
      return 'active' !== e && (s.radius = 0), (s.radius += r(i && i._custom, n)), s;
    }
  }
  (Li.id = 'bubble'),
    (Li.defaults = {
      datasetElementType: !1,
      dataElementType: 'point',
      animations: { numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] } },
    }),
    (Li.overrides = {
      scales: { x: { type: 'linear' }, y: { type: 'linear' } },
      plugins: { tooltip: { callbacks: { title: () => '' } } },
    });
  class Vi extends Ci {
    constructor(t, e) {
      super(t, e),
        (this.enableOptionSharing = !0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.offsetX = void 0),
        (this.offsetY = void 0);
    }
    linkScales() {}
    parse(t, e) {
      const i = this.getDataset().data,
        s = this._cachedMeta;
      if (!1 === this._parsing) s._parsed = i;
      else {
        let o,
          a,
          r = (t) => +i[t];
        if (n(i[t])) {
          const { key: t = 'value' } = this._parsing;
          r = (e) => +x(i[e], t);
        }
        for (o = t, a = t + e; o < a; ++o) s._parsed[o] = r(o);
      }
    }
    _getRotation() {
      return V(this.options.rotation - 90);
    }
    _getCircumference() {
      return V(this.options.circumference);
    }
    _getRotationExtents() {
      let t = S,
        e = -S;
      for (let i = 0; i < this.chart.data.datasets.length; ++i)
        if (this.chart.isDatasetVisible(i)) {
          const s = this.chart.getDatasetMeta(i).controller,
            n = s._getRotation(),
            o = s._getCircumference();
          (t = Math.min(t, n)), (e = Math.max(e, n + o));
        }
      return { rotation: t, circumference: e - t };
    }
    update(t) {
      const e = this.chart,
        { chartArea: i } = e,
        s = this._cachedMeta,
        n = s.data,
        o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
        a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
        r = Math.min(
          ((u = a),
          'string' == typeof (h = this.options.cutout) && h.endsWith('%')
            ? parseFloat(h) / 100
            : h / u),
          1,
        );
      var h, u;
      const c = this._getRingWeight(this.index),
        { circumference: d, rotation: f } = this._getRotationExtents(),
        {
          ratioX: p,
          ratioY: g,
          offsetX: m,
          offsetY: b,
        } = (function (t, e, i) {
          let s = 1,
            n = 1,
            o = 0,
            a = 0;
          if (e < S) {
            const r = t,
              l = r + e,
              h = Math.cos(r),
              u = Math.sin(r),
              c = Math.cos(l),
              d = Math.sin(l),
              f = (t, e, s) => (U(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i)),
              p = (t, e, s) => (U(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i)),
              g = f(0, h, c),
              m = f(D, u, d),
              b = p(M, h, c),
              v = p(M + D, u, d);
            (s = (g - b) / 2), (n = (m - v) / 2), (o = -(g + b) / 2), (a = -(m + v) / 2);
          }
          return { ratioX: s, ratioY: n, offsetX: o, offsetY: a };
        })(f, d, r),
        v = (i.width - o) / p,
        x = (i.height - o) / g,
        y = Math.max(Math.min(v, x) / 2, 0),
        _ = l(this.options.radius, y),
        k = (_ - Math.max(_ * r, 0)) / this._getVisibleDatasetWeightTotal();
      (this.offsetX = m * _),
        (this.offsetY = b * _),
        (s.total = this.calculateTotal()),
        (this.outerRadius = _ - k * this._getRingWeightOffset(this.index)),
        (this.innerRadius = Math.max(this.outerRadius - k * c, 0)),
        this.updateElements(n, 0, n.length, t);
    }
    _circumference(t, e) {
      const i = this.options,
        s = this._cachedMeta,
        n = this._getCircumference();
      return (e && i.animation.animateRotate) ||
        !this.chart.getDataVisibility(t) ||
        null === s._parsed[t] ||
        s.data[t].hidden
        ? 0
        : this.calculateCircumference((s._parsed[t] * n) / S);
    }
    updateElements(t, e, i, s) {
      const n = 'reset' === s,
        o = this.chart,
        a = o.chartArea,
        r = o.options.animation,
        l = (a.left + a.right) / 2,
        h = (a.top + a.bottom) / 2,
        u = n && r.animateScale,
        c = u ? 0 : this.innerRadius,
        d = u ? 0 : this.outerRadius,
        { sharedOptions: f, includeOptions: p } = this._getSharedOptions(e, s);
      let g,
        m = this._getRotation();
      for (g = 0; g < e; ++g) m += this._circumference(g, n);
      for (g = e; g < e + i; ++g) {
        const e = this._circumference(g, n),
          i = t[g],
          o = {
            x: l + this.offsetX,
            y: h + this.offsetY,
            startAngle: m,
            endAngle: m + e,
            circumference: e,
            outerRadius: d,
            innerRadius: c,
          };
        p && (o.options = f || this.resolveDataElementOptions(g, i.active ? 'active' : s)),
          (m += e),
          this.updateElement(i, g, o, s);
      }
    }
    calculateTotal() {
      const t = this._cachedMeta,
        e = t.data;
      let i,
        s = 0;
      for (i = 0; i < e.length; i++) {
        const n = t._parsed[i];
        null === n ||
          isNaN(n) ||
          !this.chart.getDataVisibility(i) ||
          e[i].hidden ||
          (s += Math.abs(n));
      }
      return s;
    }
    calculateCircumference(t) {
      const e = this._cachedMeta.total;
      return e > 0 && !isNaN(t) ? S * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        s = i.data.labels || [],
        n = ti(e._parsed[t], i.options.locale);
      return { label: s[t] || '', value: n };
    }
    getMaxBorderWidth(t) {
      let e = 0;
      const i = this.chart;
      let s, n, o, a, r;
      if (!t)
        for (s = 0, n = i.data.datasets.length; s < n; ++s)
          if (i.isDatasetVisible(s)) {
            (o = i.getDatasetMeta(s)), (t = o.data), (a = o.controller);
            break;
          }
      if (!t) return 0;
      for (s = 0, n = t.length; s < n; ++s)
        (r = a.resolveDataElementOptions(s)),
          'inner' !== r.borderAlign &&
            (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
      return e;
    }
    getMaxOffset(t) {
      let e = 0;
      for (let i = 0, s = t.length; i < s; ++i) {
        const t = this.resolveDataElementOptions(i);
        e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
      }
      return e;
    }
    _getRingWeightOffset(t) {
      let e = 0;
      for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
      return e;
    }
    _getRingWeight(t) {
      return Math.max(r(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  (Vi.id = 'doughnut'),
    (Vi.defaults = {
      datasetElementType: !1,
      dataElementType: 'arc',
      animation: { animateRotate: !0, animateScale: !1 },
      animations: {
        numbers: {
          type: 'number',
          properties: [
            'circumference',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'startAngle',
            'x',
            'y',
            'offset',
            'borderWidth',
            'spacing',
          ],
        },
      },
      cutout: '50%',
      rotation: 0,
      circumference: 360,
      radius: '100%',
      spacing: 0,
      indexAxis: 'r',
    }),
    (Vi.descriptors = { _scriptable: (t) => 'spacing' !== t, _indexable: (t) => 'spacing' !== t }),
    (Vi.overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: { pointStyle: i },
                } = t.legend.options;
                return e.labels.map((e, s) => {
                  const n = t.getDatasetMeta(0).controller.getStyle(s);
                  return {
                    text: e,
                    fillStyle: n.backgroundColor,
                    strokeStyle: n.borderColor,
                    lineWidth: n.borderWidth,
                    pointStyle: i,
                    hidden: !t.getDataVisibility(s),
                    index: s,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          },
        },
        tooltip: {
          callbacks: {
            title: () => '',
            label(t) {
              let e = t.label;
              const i = ': ' + t.formattedValue;
              return s(e) ? ((e = e.slice()), (e[0] += i)) : (e += i), e;
            },
          },
        },
      },
    });
  class zi extends Ci {
    initialize() {
      (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
    }
    update(t) {
      const e = this._cachedMeta,
        { dataset: i, data: s = [], _dataset: n } = e,
        o = this.chart._animationsDisabled;
      let { start: a, count: r } = nt(e, s, o);
      (this._drawStart = a),
        (this._drawCount = r),
        ot(e) && ((a = 0), (r = s.length)),
        (i._chart = this.chart),
        (i._datasetIndex = this.index),
        (i._decimated = !!n._decimated),
        (i.points = s);
      const l = this.resolveDatasetElementOptions(t);
      this.options.showLine || (l.borderWidth = 0),
        (l.segment = this.options.segment),
        this.updateElement(i, void 0, { animated: !o, options: l }, t),
        this.updateElements(s, a, r, t);
    }
    updateElements(t, e, s, n) {
      const o = 'reset' === n,
        { iScale: a, vScale: r, _stacked: l, _dataset: h } = this._cachedMeta,
        { sharedOptions: u, includeOptions: c } = this._getSharedOptions(e, n),
        d = a.axis,
        f = r.axis,
        { spanGaps: p, segment: g } = this.options,
        m = R(p) ? p : Number.POSITIVE_INFINITY,
        b = this.chart._animationsDisabled || o || 'none' === n;
      let v = e > 0 && this.getParsed(e - 1);
      for (let p = e; p < e + s; ++p) {
        const e = t[p],
          s = this.getParsed(p),
          x = b ? e : {},
          y = i(s[f]),
          _ = (x[d] = a.getPixelForValue(s[d], p)),
          k = (x[f] =
            o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, s, l) : s[f], p));
        (x.skip = isNaN(_) || isNaN(k) || y),
          (x.stop = p > 0 && Math.abs(s[d] - v[d]) > m),
          g && ((x.parsed = s), (x.raw = h.data[p])),
          c && (x.options = u || this.resolveDataElementOptions(p, e.active ? 'active' : n)),
          b || this.updateElement(e, p, x, n),
          (v = s);
      }
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.dataset,
        i = (e.options && e.options.borderWidth) || 0,
        s = t.data || [];
      if (!s.length) return i;
      const n = s[0].size(this.resolveDataElementOptions(0)),
        o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
      return Math.max(i, n, o) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
    }
  }
  (zi.id = 'line'),
    (zi.defaults = {
      datasetElementType: 'line',
      dataElementType: 'point',
      showLine: !0,
      spanGaps: !1,
    }),
    (zi.overrides = { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } });
  class ji extends Ci {
    constructor(t, e) {
      super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        s = i.data.labels || [],
        n = ti(e._parsed[t].r, i.options.locale);
      return { label: s[t] || '', value: n };
    }
    parseObjectData(t, e, i, s) {
      return Oe.bind(this)(t, e, i, s);
    }
    update(t) {
      const e = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
      const t = this._cachedMeta,
        e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      return (
        t.data.forEach((t, i) => {
          const s = this.getParsed(i).r;
          !isNaN(s) &&
            this.chart.getDataVisibility(i) &&
            (s < e.min && (e.min = s), s > e.max && (e.max = s));
        }),
        e
      );
    }
    _updateRadius() {
      const t = this.chart,
        e = t.chartArea,
        i = t.options,
        s = Math.min(e.right - e.left, e.bottom - e.top),
        n = Math.max(s / 2, 0),
        o =
          (n - Math.max(i.cutoutPercentage ? (n / 100) * i.cutoutPercentage : 1, 0)) /
          t.getVisibleDatasetCount();
      (this.outerRadius = n - o * this.index), (this.innerRadius = this.outerRadius - o);
    }
    updateElements(t, e, i, s) {
      const n = 'reset' === s,
        o = this.chart,
        a = o.options.animation,
        r = this._cachedMeta.rScale,
        l = r.xCenter,
        h = r.yCenter,
        u = r.getIndexAngle(0) - 0.5 * M;
      let c,
        d = u;
      const f = 360 / this.countVisibleElements();
      for (c = 0; c < e; ++c) d += this._computeAngle(c, s, f);
      for (c = e; c < e + i; c++) {
        const e = t[c];
        let i = d,
          p = d + this._computeAngle(c, s, f),
          g = o.getDataVisibility(c) ? r.getDistanceFromCenterForValue(this.getParsed(c).r) : 0;
        (d = p), n && (a.animateScale && (g = 0), a.animateRotate && (i = p = u));
        const m = {
          x: l,
          y: h,
          innerRadius: 0,
          outerRadius: g,
          startAngle: i,
          endAngle: p,
          options: this.resolveDataElementOptions(c, e.active ? 'active' : s),
        };
        this.updateElement(e, c, m, s);
      }
    }
    countVisibleElements() {
      const t = this._cachedMeta;
      let e = 0;
      return (
        t.data.forEach((t, i) => {
          !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
        }),
        e
      );
    }
    _computeAngle(t, e, i) {
      return this.chart.getDataVisibility(t)
        ? V(this.resolveDataElementOptions(t, e).angle || i)
        : 0;
    }
  }
  (ji.id = 'polarArea'),
    (ji.defaults = {
      dataElementType: 'arc',
      animation: { animateRotate: !0, animateScale: !0 },
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
        },
      },
      indexAxis: 'r',
      startAngle: 0,
    }),
    (ji.overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: { pointStyle: i },
                } = t.legend.options;
                return e.labels.map((e, s) => {
                  const n = t.getDatasetMeta(0).controller.getStyle(s);
                  return {
                    text: e,
                    fillStyle: n.backgroundColor,
                    strokeStyle: n.borderColor,
                    lineWidth: n.borderWidth,
                    pointStyle: i,
                    hidden: !t.getDataVisibility(s),
                    index: s,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          },
        },
        tooltip: {
          callbacks: {
            title: () => '',
            label: (t) => t.chart.data.labels[t.dataIndex] + ': ' + t.formattedValue,
          },
        },
      },
      scales: {
        r: {
          type: 'radialLinear',
          angleLines: { display: !1 },
          beginAtZero: !0,
          grid: { circular: !0 },
          pointLabels: { display: !1 },
          startAngle: 0,
        },
      },
    });
  class Ni extends Vi {}
  (Ni.id = 'pie'), (Ni.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' });
  class Wi extends Ci {
    getLabelAndValue(t) {
      const e = this._cachedMeta.vScale,
        i = this.getParsed(t);
      return { label: e.getLabels()[t], value: '' + e.getLabelForValue(i[e.axis]) };
    }
    parseObjectData(t, e, i, s) {
      return Oe.bind(this)(t, e, i, s);
    }
    update(t) {
      const e = this._cachedMeta,
        i = e.dataset,
        s = e.data || [],
        n = e.iScale.getLabels();
      if (((i.points = s), 'resize' !== t)) {
        const e = this.resolveDatasetElementOptions(t);
        this.options.showLine || (e.borderWidth = 0);
        const o = { _loop: !0, _fullLoop: n.length === s.length, options: e };
        this.updateElement(i, void 0, o, t);
      }
      this.updateElements(s, 0, s.length, t);
    }
    updateElements(t, e, i, s) {
      const n = this._cachedMeta.rScale,
        o = 'reset' === s;
      for (let a = e; a < e + i; a++) {
        const e = t[a],
          i = this.resolveDataElementOptions(a, e.active ? 'active' : s),
          r = n.getPointPositionForValue(a, this.getParsed(a).r),
          l = o ? n.xCenter : r.x,
          h = o ? n.yCenter : r.y,
          u = { x: l, y: h, angle: r.angle, skip: isNaN(l) || isNaN(h), options: i };
        this.updateElement(e, a, u, s);
      }
    }
  }
  (Wi.id = 'radar'),
    (Wi.defaults = {
      datasetElementType: 'line',
      dataElementType: 'point',
      indexAxis: 'r',
      showLine: !0,
      elements: { line: { fill: 'start' } },
    }),
    (Wi.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } });
  class Hi {
    constructor() {
      (this.x = void 0),
        (this.y = void 0),
        (this.active = !1),
        (this.options = void 0),
        (this.$animations = void 0);
    }
    tooltipPosition(t) {
      const { x: e, y: i } = this.getProps(['x', 'y'], t);
      return { x: e, y: i };
    }
    hasValue() {
      return R(this.x) && R(this.y);
    }
    getProps(t, e) {
      const i = this.$animations;
      if (!e || !i) return this;
      const s = {};
      return (
        t.forEach((t) => {
          s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
        }),
        s
      );
    }
  }
  (Hi.defaults = {}), (Hi.defaultRoutes = void 0);
  const $i = {
    values: (t) => (s(t) ? t : '' + t),
    numeric(t, e, i) {
      if (0 === t) return '0';
      const s = this.chart.options.locale;
      let n,
        o = t;
      if (i.length > 1) {
        const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
        (e < 1e-4 || e > 1e15) && (n = 'scientific'),
          (o = (function (t, e) {
            let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
            return Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i;
          })(t, i));
      }
      const a = O(Math.abs(o)),
        r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
        l = { notation: n, minimumFractionDigits: r, maximumFractionDigits: r };
      return Object.assign(l, this.options.ticks.format), ti(t, s, l);
    },
    logarithmic(t, e, i) {
      if (0 === t) return '0';
      const s = t / Math.pow(10, Math.floor(O(t)));
      return 1 === s || 2 === s || 5 === s ? $i.numeric.call(this, t, e, i) : '';
    },
  };
  var Ui = { formatters: $i };
  function Yi(t, e, i, s, n) {
    const o = r(s, 0),
      a = Math.min(r(n, t.length), t.length);
    let l,
      h,
      u,
      c = 0;
    for (i = Math.ceil(i), n && ((l = n - s), (i = l / Math.floor(l / i))), u = o; u < 0; )
      c++, (u = Math.round(o + c * i));
    for (h = Math.max(o, 0); h < a; h++)
      h === u && (e.push(t[h]), c++, (u = Math.round(o + c * i)));
  }
  Xt.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
      borderDash: [],
      borderDashOffset: 0,
      borderWidth: 1,
    },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ui.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    Xt.route('scale.ticks', 'color', '', 'color'),
    Xt.route('scale.grid', 'color', '', 'borderColor'),
    Xt.route('scale.grid', 'borderColor', '', 'borderColor'),
    Xt.route('scale.title', 'color', '', 'color'),
    Xt.describe('scale', {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith('before') && !t.startsWith('after') && 'callback' !== t && 'parser' !== t,
      _indexable: (t) => 'borderDash' !== t && 'tickBorderDash' !== t,
    }),
    Xt.describe('scales', { _fallback: 'scale' }),
    Xt.describe('scale.ticks', {
      _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
      _indexable: (t) => 'backdropPadding' !== t,
    });
  const qi = (t, e, i) => ('top' === e || 'left' === e ? t[e] + i : t[e] - i);
  function Xi(t, e) {
    const i = [],
      s = t.length / e,
      n = t.length;
    let o = 0;
    for (; o < n; o += s) i.push(t[Math.floor(o)]);
    return i;
  }
  function Ki(t, e, i) {
    const s = t.ticks.length,
      n = Math.min(e, s - 1),
      o = t._startPixel,
      a = t._endPixel,
      r = 1e-6;
    let l,
      h = t.getPixelForTick(n);
    if (
      !(
        i &&
        ((l =
          1 === s
            ? Math.max(h - o, a - h)
            : 0 === e
              ? (t.getPixelForTick(1) - h) / 2
              : (h - t.getPixelForTick(n - 1)) / 2),
        (h += n < e ? l : -l),
        h < o - r || h > a + r)
      )
    )
      return h;
  }
  function Zi(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function Gi(t, e) {
    if (!t.display) return 0;
    const i = me(t.font, e),
      n = ge(t.padding);
    return (s(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
  }
  function Ji(t, e, i) {
    let s = it(t);
    return (
      ((i && 'right' !== e) || (!i && 'right' === e)) &&
        (s = ((t) => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(s)),
      s
    );
  }
  class Qi extends Hi {
    constructor(t) {
      super(),
        (this.id = t.id),
        (this.type = t.type),
        (this.options = void 0),
        (this.ctx = t.ctx),
        (this.chart = t.chart),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (this.maxWidth = void 0),
        (this.maxHeight = void 0),
        (this.paddingTop = void 0),
        (this.paddingBottom = void 0),
        (this.paddingLeft = void 0),
        (this.paddingRight = void 0),
        (this.axis = void 0),
        (this.labelRotation = void 0),
        (this.min = void 0),
        (this.max = void 0),
        (this._range = void 0),
        (this.ticks = []),
        (this._gridLineItems = null),
        (this._labelItems = null),
        (this._labelSizes = null),
        (this._length = 0),
        (this._maxLength = 0),
        (this._longestTextCache = {}),
        (this._startPixel = void 0),
        (this._endPixel = void 0),
        (this._reversePixels = !1),
        (this._userMax = void 0),
        (this._userMin = void 0),
        (this._suggestedMax = void 0),
        (this._suggestedMin = void 0),
        (this._ticksLength = 0),
        (this._borderValue = 0),
        (this._cache = {}),
        (this._dataLimitsCached = !1),
        (this.$context = void 0);
    }
    init(t) {
      (this.options = t.setContext(this.getContext())),
        (this.axis = t.axis),
        (this._userMin = this.parse(t.min)),
        (this._userMax = this.parse(t.max)),
        (this._suggestedMin = this.parse(t.suggestedMin)),
        (this._suggestedMax = this.parse(t.suggestedMax));
    }
    parse(t, e) {
      return t;
    }
    getUserBounds() {
      let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
      return (
        (t = a(t, Number.POSITIVE_INFINITY)),
        (e = a(e, Number.NEGATIVE_INFINITY)),
        (i = a(i, Number.POSITIVE_INFINITY)),
        (s = a(s, Number.NEGATIVE_INFINITY)),
        { min: a(t, i), max: a(e, s), minDefined: o(t), maxDefined: o(e) }
      );
    }
    getMinMax(t) {
      let e,
        { min: i, max: s, minDefined: n, maxDefined: o } = this.getUserBounds();
      if (n && o) return { min: i, max: s };
      const r = this.getMatchingVisibleMetas();
      for (let a = 0, l = r.length; a < l; ++a)
        (e = r[a].controller.getMinMax(this, t)),
          n || (i = Math.min(i, e.min)),
          o || (s = Math.max(s, e.max));
      return (
        (i = o && i > s ? s : i),
        (s = n && i > s ? i : s),
        { min: a(i, a(s, i)), max: a(s, a(i, s)) }
      );
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
    }
    beforeLayout() {
      (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
      h(this.options.beforeUpdate, [this]);
    }
    update(t, e, s) {
      const { beginAtZero: n, grace: o, ticks: a } = this.options,
        r = a.sampleSize;
      this.beforeUpdate(),
        (this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = s = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
        (this.ticks = null),
        (this._labelSizes = null),
        (this._gridLineItems = null),
        (this._labelItems = null),
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        (this._maxLength = this.isHorizontal()
          ? this.width + s.left + s.right
          : this.height + s.top + s.bottom),
        this._dataLimitsCached ||
          (this.beforeDataLimits(),
          this.determineDataLimits(),
          this.afterDataLimits(),
          (this._range = (function (t, e, i) {
            const { min: s, max: n } = t,
              o = l(e, (n - s) / 2),
              a = (t, e) => (i && 0 === t ? 0 : t + e);
            return { min: a(s, -Math.abs(o)), max: a(n, o) };
          })(this, o, n)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks();
      const h = r < this.ticks.length;
      this._convertTicksToLabels(h ? Xi(this.ticks, r) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        a.display &&
          (a.autoSkip || 'auto' === a.source) &&
          ((this.ticks = (function (t, e) {
            const s = t.options.ticks,
              n =
                s.maxTicksLimit ||
                (function (t) {
                  const e = t.options.offset,
                    i = t._tickSize(),
                    s = t._length / i + (e ? 0 : 1),
                    n = t._maxLength / i;
                  return Math.floor(Math.min(s, n));
                })(t),
              o = s.major.enabled
                ? (function (t) {
                    const e = [];
                    let i, s;
                    for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                    return e;
                  })(e)
                : [],
              a = o.length,
              r = o[0],
              l = o[a - 1],
              h = [];
            if (a > n)
              return (
                (function (t, e, i, s) {
                  let n,
                    o = 0,
                    a = i[0];
                  for (s = Math.ceil(s), n = 0; n < t.length; n++)
                    n === a && (e.push(t[n]), o++, (a = i[o * s]));
                })(e, h, o, a / n),
                h
              );
            const u = (function (t, e, i) {
              const s = (function (t) {
                  const e = t.length;
                  let i, s;
                  if (e < 2) return !1;
                  for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
                  return s;
                })(t),
                n = e.length / i;
              if (!s) return Math.max(n, 1);
              const o = (function (t) {
                const e = [],
                  i = Math.sqrt(t);
                let s;
                for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
                return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
              })(s);
              for (let t = 0, e = o.length - 1; t < e; t++) {
                const e = o[t];
                if (e > n) return e;
              }
              return Math.max(n, 1);
            })(o, e, n);
            if (a > 0) {
              let t, s;
              const n = a > 1 ? Math.round((l - r) / (a - 1)) : null;
              for (Yi(e, h, u, i(n) ? 0 : r - n, r), t = 0, s = a - 1; t < s; t++)
                Yi(e, h, u, o[t], o[t + 1]);
              return Yi(e, h, u, l, i(n) ? e.length : l + n), h;
            }
            return Yi(e, h, u), h;
          })(this, this.ticks)),
          (this._labelSizes = null),
          this.afterAutoSkip()),
        h && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate();
    }
    configure() {
      let t,
        e,
        i = this.options.reverse;
      this.isHorizontal()
        ? ((t = this.left), (e = this.right))
        : ((t = this.top), (e = this.bottom), (i = !i)),
        (this._startPixel = t),
        (this._endPixel = e),
        (this._reversePixels = i),
        (this._length = e - t),
        (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
      h(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      h(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
        : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
        (this.paddingLeft = 0),
        (this.paddingTop = 0),
        (this.paddingRight = 0),
        (this.paddingBottom = 0);
    }
    afterSetDimensions() {
      h(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()), h(this.options[t], [this]);
    }
    beforeDataLimits() {
      this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
      this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
      h(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let i, s, n;
      for (i = 0, s = t.length; i < s; i++)
        (n = t[i]), (n.label = h(e.callback, [n.value, i, t], this));
    }
    afterTickToLabelConversion() {
      h(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      h(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        i = this.ticks.length,
        s = e.minRotation || 0,
        n = e.maxRotation;
      let o,
        a,
        r,
        l = s;
      if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal())
        return void (this.labelRotation = s);
      const h = this._getLabelSizes(),
        u = h.widest.width,
        c = h.highest.height,
        d = Y(this.chart.width - u, 0, this.maxWidth);
      (o = t.offset ? this.maxWidth / i : d / (i - 1)),
        u + 6 > o &&
          ((o = d / (i - (t.offset ? 0.5 : 1))),
          (a = this.maxHeight - Zi(t.grid) - e.padding - Gi(t.title, this.chart.options.font)),
          (r = Math.sqrt(u * u + c * c)),
          (l = z(
            Math.min(
              Math.asin(Y((h.highest.height + 6) / o, -1, 1)),
              Math.asin(Y(a / r, -1, 1)) - Math.asin(Y(c / r, -1, 1)),
            ),
          )),
          (l = Math.max(s, Math.min(n, l)))),
        (this.labelRotation = l);
    }
    afterCalculateLabelRotation() {
      h(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      h(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        {
          chart: e,
          options: { ticks: i, title: s, grid: n },
        } = this,
        o = this._isVisible(),
        a = this.isHorizontal();
      if (o) {
        const o = Gi(s, e.options.font);
        if (
          (a
            ? ((t.width = this.maxWidth), (t.height = Zi(n) + o))
            : ((t.height = this.maxHeight), (t.width = Zi(n) + o)),
          i.display && this.ticks.length)
        ) {
          const { first: e, last: s, widest: n, highest: o } = this._getLabelSizes(),
            r = 2 * i.padding,
            l = V(this.labelRotation),
            h = Math.cos(l),
            u = Math.sin(l);
          if (a) {
            const e = i.mirror ? 0 : u * n.width + h * o.height;
            t.height = Math.min(this.maxHeight, t.height + e + r);
          } else {
            const e = i.mirror ? 0 : h * n.width + u * o.height;
            t.width = Math.min(this.maxWidth, t.width + e + r);
          }
          this._calculatePadding(e, s, u, h);
        }
      }
      this._handleMargins(),
        a
          ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
            (this.height = t.height))
          : ((this.width = t.width),
            (this.height = this._length = e.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(t, e, i, s) {
      const {
          ticks: { align: n, padding: o },
          position: a,
        } = this.options,
        r = 0 !== this.labelRotation,
        l = 'top' !== a && 'x' === this.axis;
      if (this.isHorizontal()) {
        const a = this.getPixelForTick(0) - this.left,
          h = this.right - this.getPixelForTick(this.ticks.length - 1);
        let u = 0,
          c = 0;
        r
          ? l
            ? ((u = s * t.width), (c = i * e.height))
            : ((u = i * t.height), (c = s * e.width))
          : 'start' === n
            ? (c = e.width)
            : 'end' === n
              ? (u = t.width)
              : 'inner' !== n && ((u = t.width / 2), (c = e.width / 2)),
          (this.paddingLeft = Math.max(((u - a + o) * this.width) / (this.width - a), 0)),
          (this.paddingRight = Math.max(((c - h + o) * this.width) / (this.width - h), 0));
      } else {
        let i = e.height / 2,
          s = t.height / 2;
        'start' === n ? ((i = 0), (s = t.height)) : 'end' === n && ((i = e.height), (s = 0)),
          (this.paddingTop = i + o),
          (this.paddingBottom = s + o);
      }
    }
    _handleMargins() {
      this._margins &&
        ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
        (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
        (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
        (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
    }
    afterFit() {
      h(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t, position: e } = this.options;
      return 'top' === e || 'bottom' === e || 'x' === t;
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      let e, s;
      for (
        this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, s = t.length;
        e < s;
        e++
      )
        i(t[e].label) && (t.splice(e, 1), s--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let i = this.ticks;
        e < i.length && (i = Xi(i, e)),
          (this._labelSizes = t = this._computeLabelSizes(i, i.length));
      }
      return t;
    }
    _computeLabelSizes(t, e) {
      const { ctx: n, _longestTextCache: o } = this,
        a = [],
        r = [];
      let l,
        h,
        c,
        d,
        f,
        p,
        g,
        m,
        b,
        v,
        x,
        y = 0,
        _ = 0;
      for (l = 0; l < e; ++l) {
        if (
          ((d = t[l].label),
          (f = this._resolveTickFontOptions(l)),
          (n.font = p = f.string),
          (g = o[p] = o[p] || { data: {}, gc: [] }),
          (m = f.lineHeight),
          (b = v = 0),
          i(d) || s(d))
        ) {
          if (s(d))
            for (h = 0, c = d.length; h < c; ++h)
              (x = d[h]), i(x) || s(x) || ((b = Kt(n, g.data, g.gc, b, x)), (v += m));
        } else (b = Kt(n, g.data, g.gc, b, d)), (v = m);
        a.push(b), r.push(v), (y = Math.max(b, y)), (_ = Math.max(v, _));
      }
      !(function (t, e) {
        u(t, (t) => {
          const i = t.gc,
            s = i.length / 2;
          let n;
          if (s > e) {
            for (n = 0; n < s; ++n) delete t.data[i[n]];
            i.splice(0, s);
          }
        });
      })(o, e);
      const k = a.indexOf(y),
        w = r.indexOf(_),
        M = (t) => ({ width: a[t] || 0, height: r[t] || 0 });
      return { first: M(0), last: M(e - 1), widest: M(k), highest: M(w), widths: a, heights: r };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, e) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
      this._reversePixels && (t = 1 - t);
      const e = this._startPixel + t * this._length;
      return Y(this._alignToPixels ? Gt(this.chart, e, 0) : e, -32768, 32767);
    }
    getDecimalForPixel(t) {
      const e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t, max: e } = this;
      return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
      const e = this.ticks || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return (
          i.$context ||
          (i.$context = (function (t, e, i) {
            return ve(t, { tick: i, index: e, type: 'tick' });
          })(this.getContext(), t, i))
        );
      }
      return (
        this.$context ||
        (this.$context = ve(this.chart.getContext(), { scale: this, type: 'scale' }))
      );
    }
    _tickSize() {
      const t = this.options.ticks,
        e = V(this.labelRotation),
        i = Math.abs(Math.cos(e)),
        s = Math.abs(Math.sin(e)),
        n = this._getLabelSizes(),
        o = t.autoSkipPadding || 0,
        a = n ? n.widest.width + o : 0,
        r = n ? n.highest.height + o : 0;
      return this.isHorizontal() ? (r * i > a * s ? a / i : r / s) : r * s < a * i ? r / i : a / s;
    }
    _isVisible() {
      const t = this.options.display;
      return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this.axis,
        i = this.chart,
        s = this.options,
        { grid: o, position: a } = s,
        l = o.offset,
        h = this.isHorizontal(),
        u = this.ticks.length + (l ? 1 : 0),
        c = Zi(o),
        d = [],
        f = o.setContext(this.getContext()),
        p = f.drawBorder ? f.borderWidth : 0,
        g = p / 2,
        m = function (t) {
          return Gt(i, t, p);
        };
      let b, v, x, y, _, k, w, M, S, A, C, E;
      if ('top' === a)
        (b = m(this.bottom)),
          (k = this.bottom - c),
          (M = b - g),
          (A = m(t.top) + g),
          (E = t.bottom);
      else if ('bottom' === a)
        (b = m(this.top)), (A = t.top), (E = m(t.bottom) - g), (k = b + g), (M = this.top + c);
      else if ('left' === a)
        (b = m(this.right)), (_ = this.right - c), (w = b - g), (S = m(t.left) + g), (C = t.right);
      else if ('right' === a)
        (b = m(this.left)), (S = t.left), (C = m(t.right) - g), (_ = b + g), (w = this.left + c);
      else if ('x' === e) {
        if ('center' === a) b = m((t.top + t.bottom) / 2 + 0.5);
        else if (n(a)) {
          const t = Object.keys(a)[0],
            e = a[t];
          b = m(this.chart.scales[t].getPixelForValue(e));
        }
        (A = t.top), (E = t.bottom), (k = b + g), (M = k + c);
      } else if ('y' === e) {
        if ('center' === a) b = m((t.left + t.right) / 2);
        else if (n(a)) {
          const t = Object.keys(a)[0],
            e = a[t];
          b = m(this.chart.scales[t].getPixelForValue(e));
        }
        (_ = b - g), (w = _ - c), (S = t.left), (C = t.right);
      }
      const D = r(s.ticks.maxTicksLimit, u),
        P = Math.max(1, Math.ceil(u / D));
      for (v = 0; v < u; v += P) {
        const t = o.setContext(this.getContext(v)),
          e = t.lineWidth,
          s = t.color,
          n = t.borderDash || [],
          a = t.borderDashOffset,
          r = t.tickWidth,
          u = t.tickColor,
          c = t.tickBorderDash || [],
          f = t.tickBorderDashOffset;
        (x = Ki(this, v, l)),
          void 0 !== x &&
            ((y = Gt(i, x, e)),
            h ? (_ = w = S = C = y) : (k = M = A = E = y),
            d.push({
              tx1: _,
              ty1: k,
              tx2: w,
              ty2: M,
              x1: S,
              y1: A,
              x2: C,
              y2: E,
              width: e,
              color: s,
              borderDash: n,
              borderDashOffset: a,
              tickWidth: r,
              tickColor: u,
              tickBorderDash: c,
              tickBorderDashOffset: f,
            }));
      }
      return (this._ticksLength = u), (this._borderValue = b), d;
    }
    _computeLabelItems(t) {
      const e = this.axis,
        i = this.options,
        { position: o, ticks: a } = i,
        r = this.isHorizontal(),
        l = this.ticks,
        { align: h, crossAlign: u, padding: c, mirror: d } = a,
        f = Zi(i.grid),
        p = f + c,
        g = d ? -c : p,
        m = -V(this.labelRotation),
        b = [];
      let v,
        x,
        y,
        _,
        k,
        w,
        M,
        S,
        A,
        C,
        E,
        D,
        P = 'middle';
      if ('top' === o) (w = this.bottom - g), (M = this._getXAxisLabelAlignment());
      else if ('bottom' === o) (w = this.top + g), (M = this._getXAxisLabelAlignment());
      else if ('left' === o) {
        const t = this._getYAxisLabelAlignment(f);
        (M = t.textAlign), (k = t.x);
      } else if ('right' === o) {
        const t = this._getYAxisLabelAlignment(f);
        (M = t.textAlign), (k = t.x);
      } else if ('x' === e) {
        if ('center' === o) w = (t.top + t.bottom) / 2 + p;
        else if (n(o)) {
          const t = Object.keys(o)[0],
            e = o[t];
          w = this.chart.scales[t].getPixelForValue(e) + p;
        }
        M = this._getXAxisLabelAlignment();
      } else if ('y' === e) {
        if ('center' === o) k = (t.left + t.right) / 2 - p;
        else if (n(o)) {
          const t = Object.keys(o)[0],
            e = o[t];
          k = this.chart.scales[t].getPixelForValue(e);
        }
        M = this._getYAxisLabelAlignment(f).textAlign;
      }
      'y' === e && ('start' === h ? (P = 'top') : 'end' === h && (P = 'bottom'));
      const F = this._getLabelSizes();
      for (v = 0, x = l.length; v < x; ++v) {
        (y = l[v]), (_ = y.label);
        const t = a.setContext(this.getContext(v));
        (S = this.getPixelForTick(v) + a.labelOffset),
          (A = this._resolveTickFontOptions(v)),
          (C = A.lineHeight),
          (E = s(_) ? _.length : 1);
        const e = E / 2,
          i = t.color,
          n = t.textStrokeColor,
          h = t.textStrokeWidth;
        let c,
          f = M;
        if (
          (r
            ? ((k = S),
              'inner' === M &&
                (f =
                  v === x - 1
                    ? this.options.reverse
                      ? 'left'
                      : 'right'
                    : 0 === v
                      ? this.options.reverse
                        ? 'right'
                        : 'left'
                      : 'center'),
              (D =
                'top' === o
                  ? 'near' === u || 0 !== m
                    ? -E * C + C / 2
                    : 'center' === u
                      ? -F.highest.height / 2 - e * C + C
                      : -F.highest.height + C / 2
                  : 'near' === u || 0 !== m
                    ? C / 2
                    : 'center' === u
                      ? F.highest.height / 2 - e * C
                      : F.highest.height - E * C),
              d && (D *= -1))
            : ((w = S), (D = ((1 - E) * C) / 2)),
          t.showLabelBackdrop)
        ) {
          const e = ge(t.backdropPadding),
            i = F.heights[v],
            s = F.widths[v];
          let n = w + D - e.top,
            o = k - e.left;
          switch (P) {
            case 'middle':
              n -= i / 2;
              break;
            case 'bottom':
              n -= i;
          }
          switch (M) {
            case 'center':
              o -= s / 2;
              break;
            case 'right':
              o -= s;
          }
          c = { left: o, top: n, width: s + e.width, height: i + e.height, color: t.backdropColor };
        }
        b.push({
          rotation: m,
          label: _,
          font: A,
          color: i,
          strokeColor: n,
          strokeWidth: h,
          textOffset: D,
          textAlign: f,
          textBaseline: P,
          translation: [k, w],
          backdrop: c,
        });
      }
      return b;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-V(this.labelRotation)) return 'top' === t ? 'left' : 'right';
      let i = 'center';
      return (
        'start' === e.align
          ? (i = 'left')
          : 'end' === e.align
            ? (i = 'right')
            : 'inner' === e.align && (i = 'inner'),
        i
      );
    }
    _getYAxisLabelAlignment(t) {
      const {
          position: e,
          ticks: { crossAlign: i, mirror: s, padding: n },
        } = this.options,
        o = t + n,
        a = this._getLabelSizes().widest.width;
      let r, l;
      return (
        'left' === e
          ? s
            ? ((l = this.right + n),
              'near' === i
                ? (r = 'left')
                : 'center' === i
                  ? ((r = 'center'), (l += a / 2))
                  : ((r = 'right'), (l += a)))
            : ((l = this.right - o),
              'near' === i
                ? (r = 'right')
                : 'center' === i
                  ? ((r = 'center'), (l -= a / 2))
                  : ((r = 'left'), (l = this.left)))
          : 'right' === e
            ? s
              ? ((l = this.left + n),
                'near' === i
                  ? (r = 'right')
                  : 'center' === i
                    ? ((r = 'center'), (l -= a / 2))
                    : ((r = 'left'), (l -= a)))
              : ((l = this.left + o),
                'near' === i
                  ? (r = 'left')
                  : 'center' === i
                    ? ((r = 'center'), (l += a / 2))
                    : ((r = 'right'), (l = this.right)))
            : (r = 'right'),
        { textAlign: r, x: l }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart,
        e = this.options.position;
      return 'left' === e || 'right' === e
        ? { top: 0, left: this.left, bottom: t.height, right: this.right }
        : 'top' === e || 'bottom' === e
          ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
          : void 0;
    }
    drawBackground() {
      const {
        ctx: t,
        options: { backgroundColor: e },
        left: i,
        top: s,
        width: n,
        height: o,
      } = this;
      e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, n, o), t.restore());
    }
    getLineWidthForValue(t) {
      const e = this.options.grid;
      if (!this._isVisible() || !e.display) return 0;
      const i = this.ticks.findIndex((e) => e.value === t);
      return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
    }
    drawGrid(t) {
      const e = this.options.grid,
        i = this.ctx,
        s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
      let n, o;
      const a = (t, e, s) => {
        s.width &&
          s.color &&
          (i.save(),
          (i.lineWidth = s.width),
          (i.strokeStyle = s.color),
          i.setLineDash(s.borderDash || []),
          (i.lineDashOffset = s.borderDashOffset),
          i.beginPath(),
          i.moveTo(t.x, t.y),
          i.lineTo(e.x, e.y),
          i.stroke(),
          i.restore());
      };
      if (e.display)
        for (n = 0, o = s.length; n < o; ++n) {
          const t = s[n];
          e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
            e.drawTicks &&
              a(
                { x: t.tx1, y: t.ty1 },
                { x: t.tx2, y: t.ty2 },
                {
                  color: t.tickColor,
                  width: t.tickWidth,
                  borderDash: t.tickBorderDash,
                  borderDashOffset: t.tickBorderDashOffset,
                },
              );
        }
    }
    drawBorder() {
      const {
          chart: t,
          ctx: e,
          options: { grid: i },
        } = this,
        s = i.setContext(this.getContext()),
        n = i.drawBorder ? s.borderWidth : 0;
      if (!n) return;
      const o = i.setContext(this.getContext(0)).lineWidth,
        a = this._borderValue;
      let r, l, h, u;
      this.isHorizontal()
        ? ((r = Gt(t, this.left, n) - n / 2), (l = Gt(t, this.right, o) + o / 2), (h = u = a))
        : ((h = Gt(t, this.top, n) - n / 2), (u = Gt(t, this.bottom, o) + o / 2), (r = l = a)),
        e.save(),
        (e.lineWidth = s.borderWidth),
        (e.strokeStyle = s.borderColor),
        e.beginPath(),
        e.moveTo(r, h),
        e.lineTo(l, u),
        e.stroke(),
        e.restore();
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const e = this.ctx,
        i = this._computeLabelArea();
      i && ie(e, i);
      const s = this._labelItems || (this._labelItems = this._computeLabelItems(t));
      let n, o;
      for (n = 0, o = s.length; n < o; ++n) {
        const t = s[n],
          i = t.font,
          o = t.label;
        t.backdrop &&
          ((e.fillStyle = t.backdrop.color),
          e.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)),
          ae(e, o, 0, t.textOffset, i, t);
      }
      i && se(e);
    }
    drawTitle() {
      const {
        ctx: t,
        options: { position: e, title: i, reverse: o },
      } = this;
      if (!i.display) return;
      const a = me(i.font),
        r = ge(i.padding),
        l = i.align;
      let h = a.lineHeight / 2;
      'bottom' === e || 'center' === e || n(e)
        ? ((h += r.bottom), s(i.text) && (h += a.lineHeight * (i.text.length - 1)))
        : (h += r.top);
      const {
        titleX: u,
        titleY: c,
        maxWidth: d,
        rotation: f,
      } = (function (t, e, i, s) {
        const { top: o, left: a, bottom: r, right: l, chart: h } = t,
          { chartArea: u, scales: c } = h;
        let d,
          f,
          p,
          g = 0;
        const m = r - o,
          b = l - a;
        if (t.isHorizontal()) {
          if (((f = st(s, a, l)), n(i))) {
            const t = Object.keys(i)[0],
              s = i[t];
            p = c[t].getPixelForValue(s) + m - e;
          } else p = 'center' === i ? (u.bottom + u.top) / 2 + m - e : qi(t, i, e);
          d = l - a;
        } else {
          if (n(i)) {
            const t = Object.keys(i)[0],
              s = i[t];
            f = c[t].getPixelForValue(s) - b + e;
          } else f = 'center' === i ? (u.left + u.right) / 2 - b + e : qi(t, i, e);
          (p = st(s, r, o)), (g = 'left' === i ? -D : D);
        }
        return { titleX: f, titleY: p, maxWidth: d, rotation: g };
      })(this, h, e, l);
      ae(t, i.text, 0, 0, a, {
        color: i.color,
        maxWidth: d,
        rotation: f,
        textAlign: Ji(l, e, o),
        textBaseline: 'middle',
        translation: [u, c],
      });
    }
    draw(t) {
      this._isVisible() &&
        (this.drawBackground(),
        this.drawGrid(t),
        this.drawBorder(),
        this.drawTitle(),
        this.drawLabels(t));
    }
    _layers() {
      const t = this.options,
        e = (t.ticks && t.ticks.z) || 0,
        i = r(t.grid && t.grid.z, -1);
      return this._isVisible() && this.draw === Qi.prototype.draw
        ? [
            {
              z: i,
              draw: (t) => {
                this.drawBackground(), this.drawGrid(t), this.drawTitle();
              },
            },
            {
              z: i + 1,
              draw: () => {
                this.drawBorder();
              },
            },
            {
              z: e,
              draw: (t) => {
                this.drawLabels(t);
              },
            },
          ]
        : [
            {
              z: e,
              draw: (t) => {
                this.draw(t);
              },
            },
          ];
    }
    getMatchingVisibleMetas(t) {
      const e = this.chart.getSortedVisibleDatasetMetas(),
        i = this.axis + 'AxisID',
        s = [];
      let n, o;
      for (n = 0, o = e.length; n < o; ++n) {
        const o = e[n];
        o[i] !== this.id || (t && o.type !== t) || s.push(o);
      }
      return s;
    }
    _resolveTickFontOptions(t) {
      return me(this.options.ticks.setContext(this.getContext(t)).font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class ts {
    constructor(t, e, i) {
      (this.type = t), (this.scope = e), (this.override = i), (this.items = Object.create(null));
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
    }
    register(t) {
      const e = Object.getPrototypeOf(t);
      let i;
      (function (t) {
        return 'id' in t && 'defaults' in t;
      })(e) && (i = this.register(e));
      const s = this.items,
        n = t.id,
        o = this.scope + '.' + n;
      if (!n) throw new Error('class does not have id: ' + t);
      return (
        n in s ||
          ((s[n] = t),
          (function (t, e, i) {
            const s = g(Object.create(null), [i ? Xt.get(i) : {}, Xt.get(e), t.defaults]);
            Xt.set(e, s),
              t.defaultRoutes &&
                (function (t, e) {
                  Object.keys(e).forEach((i) => {
                    const s = i.split('.'),
                      n = s.pop(),
                      o = [t].concat(s).join('.'),
                      a = e[i].split('.'),
                      r = a.pop(),
                      l = a.join('.');
                    Xt.route(o, n, l, r);
                  });
                })(e, t.defaultRoutes),
              t.descriptors && Xt.describe(e, t.descriptors);
          })(t, o, i),
          this.override && Xt.override(t.id, t.overrides)),
        o
      );
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items,
        i = t.id,
        s = this.scope;
      i in e && delete e[i], s && i in Xt[s] && (delete Xt[s][i], this.override && delete $t[i]);
    }
  }
  var es = new (class {
    constructor() {
      (this.controllers = new ts(Ci, 'datasets', !0)),
        (this.elements = new ts(Hi, 'elements')),
        (this.plugins = new ts(Object, 'plugins')),
        (this.scales = new ts(Qi, 'scales')),
        (this._typedRegistries = [this.controllers, this.scales, this.elements]);
    }
    add(...t) {
      this._each('register', t);
    }
    remove(...t) {
      this._each('unregister', t);
    }
    addControllers(...t) {
      this._each('register', t, this.controllers);
    }
    addElements(...t) {
      this._each('register', t, this.elements);
    }
    addPlugins(...t) {
      this._each('register', t, this.plugins);
    }
    addScales(...t) {
      this._each('register', t, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, 'controller');
    }
    getElement(t) {
      return this._get(t, this.elements, 'element');
    }
    getPlugin(t) {
      return this._get(t, this.plugins, 'plugin');
    }
    getScale(t) {
      return this._get(t, this.scales, 'scale');
    }
    removeControllers(...t) {
      this._each('unregister', t, this.controllers);
    }
    removeElements(...t) {
      this._each('unregister', t, this.elements);
    }
    removePlugins(...t) {
      this._each('unregister', t, this.plugins);
    }
    removeScales(...t) {
      this._each('unregister', t, this.scales);
    }
    _each(t, e, i) {
      [...e].forEach((e) => {
        const s = i || this._getRegistryForType(e);
        i || s.isForType(e) || (s === this.plugins && e.id)
          ? this._exec(t, s, e)
          : u(e, (e) => {
              const s = i || this._getRegistryForType(e);
              this._exec(t, s, e);
            });
      });
    }
    _exec(t, e, i) {
      const s = y(t);
      h(i['before' + s], [], i), e[t](i), h(i['after' + s], [], i);
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const i = this._typedRegistries[e];
        if (i.isForType(t)) return i;
      }
      return this.plugins;
    }
    _get(t, e, i) {
      const s = e.get(t);
      if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + '.');
      return s;
    }
  })();
  class is extends Ci {
    update(t) {
      const e = this._cachedMeta,
        { data: i = [] } = e,
        s = this.chart._animationsDisabled;
      let { start: n, count: o } = nt(e, i, s);
      if (
        ((this._drawStart = n),
        (this._drawCount = o),
        ot(e) && ((n = 0), (o = i.length)),
        this.options.showLine)
      ) {
        const { dataset: n, _dataset: o } = e;
        (n._chart = this.chart),
          (n._datasetIndex = this.index),
          (n._decimated = !!o._decimated),
          (n.points = i);
        const a = this.resolveDatasetElementOptions(t);
        (a.segment = this.options.segment),
          this.updateElement(n, void 0, { animated: !s, options: a }, t);
      }
      this.updateElements(i, n, o, t);
    }
    addElements() {
      const { showLine: t } = this.options;
      !this.datasetElementType && t && (this.datasetElementType = es.getElement('line')),
        super.addElements();
    }
    updateElements(t, e, s, n) {
      const o = 'reset' === n,
        { iScale: a, vScale: r, _stacked: l, _dataset: h } = this._cachedMeta,
        u = this.resolveDataElementOptions(e, n),
        c = this.getSharedOptions(u),
        d = this.includeOptions(n, c),
        f = a.axis,
        p = r.axis,
        { spanGaps: g, segment: m } = this.options,
        b = R(g) ? g : Number.POSITIVE_INFINITY,
        v = this.chart._animationsDisabled || o || 'none' === n;
      let x = e > 0 && this.getParsed(e - 1);
      for (let u = e; u < e + s; ++u) {
        const e = t[u],
          s = this.getParsed(u),
          g = v ? e : {},
          y = i(s[p]),
          _ = (g[f] = a.getPixelForValue(s[f], u)),
          k = (g[p] =
            o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, s, l) : s[p], u));
        (g.skip = isNaN(_) || isNaN(k) || y),
          (g.stop = u > 0 && Math.abs(s[f] - x[f]) > b),
          m && ((g.parsed = s), (g.raw = h.data[u])),
          d && (g.options = c || this.resolveDataElementOptions(u, e.active ? 'active' : n)),
          v || this.updateElement(e, u, g, n),
          (x = s);
      }
      this.updateSharedOptions(c, n, u);
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.data || [];
      if (!this.options.showLine) {
        let t = 0;
        for (let i = e.length - 1; i >= 0; --i)
          t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
        return t > 0 && t;
      }
      const i = t.dataset,
        s = (i.options && i.options.borderWidth) || 0;
      if (!e.length) return s;
      const n = e[0].size(this.resolveDataElementOptions(0)),
        o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
      return Math.max(s, n, o) / 2;
    }
  }
  (is.id = 'scatter'),
    (is.defaults = { datasetElementType: !1, dataElementType: 'point', showLine: !1, fill: !1 }),
    (is.overrides = {
      interaction: { mode: 'point' },
      plugins: {
        tooltip: {
          callbacks: {
            title: () => '',
            label: (t) => '(' + t.label + ', ' + t.formattedValue + ')',
          },
        },
      },
      scales: { x: { type: 'linear' }, y: { type: 'linear' } },
    });
  var ss = Object.freeze({
    __proto__: null,
    BarController: Ii,
    BubbleController: Li,
    DoughnutController: Vi,
    LineController: zi,
    PolarAreaController: ji,
    PieController: Ni,
    RadarController: Wi,
    ScatterController: is,
  });
  function ns() {
    throw new Error(
      'This method is not implemented: Check that a complete date adapter is provided.',
    );
  }
  class os {
    constructor(t) {
      this.options = t || {};
    }
    init(t) {}
    formats() {
      return ns();
    }
    parse(t, e) {
      return ns();
    }
    format(t, e) {
      return ns();
    }
    add(t, e, i) {
      return ns();
    }
    diff(t, e, i) {
      return ns();
    }
    startOf(t, e, i) {
      return ns();
    }
    endOf(t, e) {
      return ns();
    }
  }
  os.override = function (t) {
    Object.assign(os.prototype, t);
  };
  var as = { _date: os };
  function rs(t, e, i, s) {
    const { controller: n, data: o, _sorted: a } = t,
      r = n._cachedMeta.iScale;
    if (r && e === r.axis && 'r' !== e && a && o.length) {
      const t = r._reversePixels ? Z : K;
      if (!s) return t(o, e, i);
      if (n._sharedOptions) {
        const s = o[0],
          n = 'function' == typeof s.getRange && s.getRange(e);
        if (n) {
          const s = t(o, e, i - n),
            a = t(o, e, i + n);
          return { lo: s.lo, hi: a.hi };
        }
      }
    }
    return { lo: 0, hi: o.length - 1 };
  }
  function ls(t, e, i, s, n) {
    const o = t.getSortedVisibleDatasetMetas(),
      a = i[e];
    for (let t = 0, i = o.length; t < i; ++t) {
      const { index: i, data: r } = o[t],
        { lo: l, hi: h } = rs(o[t], e, a, n);
      for (let t = l; t <= h; ++t) {
        const e = r[t];
        e.skip || s(e, i, t);
      }
    }
  }
  function hs(t, e, i, s, n) {
    const o = [];
    return n || t.isPointInArea(e)
      ? (ls(
          t,
          i,
          e,
          function (i, a, r) {
            (n || ee(i, t.chartArea, 0)) &&
              i.inRange(e.x, e.y, s) &&
              o.push({ element: i, datasetIndex: a, index: r });
          },
          !0,
        ),
        o)
      : o;
  }
  function us(t, e, i, s, n, o) {
    return o || t.isPointInArea(e)
      ? 'r' !== i || s
        ? (function (t, e, i, s, n, o) {
            let a = [];
            const r = (function (t) {
              const e = -1 !== t.indexOf('x'),
                i = -1 !== t.indexOf('y');
              return function (t, s) {
                const n = e ? Math.abs(t.x - s.x) : 0,
                  o = i ? Math.abs(t.y - s.y) : 0;
                return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
              };
            })(i);
            let l = Number.POSITIVE_INFINITY;
            return (
              ls(t, i, e, function (i, h, u) {
                const c = i.inRange(e.x, e.y, n);
                if (s && !c) return;
                const d = i.getCenterPoint(n);
                if (!o && !t.isPointInArea(d) && !c) return;
                const f = r(e, d);
                f < l
                  ? ((a = [{ element: i, datasetIndex: h, index: u }]), (l = f))
                  : f === l && a.push({ element: i, datasetIndex: h, index: u });
              }),
              a
            );
          })(t, e, i, s, n, o)
        : (function (t, e, i, s) {
            let n = [];
            return (
              ls(t, i, e, function (t, i, o) {
                const { startAngle: a, endAngle: r } = t.getProps(['startAngle', 'endAngle'], s),
                  { angle: l } = N(t, { x: e.x, y: e.y });
                U(l, a, r) && n.push({ element: t, datasetIndex: i, index: o });
              }),
              n
            );
          })(t, e, i, n)
      : [];
  }
  function cs(t, e, i, s, n) {
    const o = [],
      a = 'x' === i ? 'inXRange' : 'inYRange';
    let r = !1;
    return (
      ls(t, i, e, (t, s, l) => {
        t[a](e[i], n) &&
          (o.push({ element: t, datasetIndex: s, index: l }), (r = r || t.inRange(e.x, e.y, n)));
      }),
      s && !r ? [] : o
    );
  }
  var ds = {
    evaluateInteractionItems: ls,
    modes: {
      index(t, e, i, s) {
        const n = Ue(e, t),
          o = i.axis || 'x',
          a = i.includeInvisible || !1,
          r = i.intersect ? hs(t, n, o, s, a) : us(t, n, o, !1, s, a),
          l = [];
        return r.length
          ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
              const e = r[0].index,
                i = t.data[e];
              i && !i.skip && l.push({ element: i, datasetIndex: t.index, index: e });
            }),
            l)
          : [];
      },
      dataset(t, e, i, s) {
        const n = Ue(e, t),
          o = i.axis || 'xy',
          a = i.includeInvisible || !1;
        let r = i.intersect ? hs(t, n, o, s, a) : us(t, n, o, !1, s, a);
        if (r.length > 0) {
          const e = r[0].datasetIndex,
            i = t.getDatasetMeta(e).data;
          r = [];
          for (let t = 0; t < i.length; ++t) r.push({ element: i[t], datasetIndex: e, index: t });
        }
        return r;
      },
      point: (t, e, i, s) => hs(t, Ue(e, t), i.axis || 'xy', s, i.includeInvisible || !1),
      nearest(t, e, i, s) {
        const n = Ue(e, t),
          o = i.axis || 'xy',
          a = i.includeInvisible || !1;
        return us(t, n, o, i.intersect, s, a);
      },
      x: (t, e, i, s) => cs(t, Ue(e, t), 'x', i.intersect, s),
      y: (t, e, i, s) => cs(t, Ue(e, t), 'y', i.intersect, s),
    },
  };
  const fs = ['left', 'top', 'right', 'bottom'];
  function ps(t, e) {
    return t.filter((t) => t.pos === e);
  }
  function gs(t, e) {
    return t.filter((t) => -1 === fs.indexOf(t.pos) && t.box.axis === e);
  }
  function ms(t, e) {
    return t.sort((t, i) => {
      const s = e ? i : t,
        n = e ? t : i;
      return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
    });
  }
  function bs(t, e, i, s) {
    return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
  }
  function vs(t, e) {
    (t.top = Math.max(t.top, e.top)),
      (t.left = Math.max(t.left, e.left)),
      (t.bottom = Math.max(t.bottom, e.bottom)),
      (t.right = Math.max(t.right, e.right));
  }
  function xs(t, e, i, s) {
    const { pos: o, box: a } = i,
      r = t.maxPadding;
    if (!n(o)) {
      i.size && (t[o] -= i.size);
      const e = s[i.stack] || { size: 0, count: 1 };
      (e.size = Math.max(e.size, i.horizontal ? a.height : a.width)),
        (i.size = e.size / e.count),
        (t[o] += i.size);
    }
    a.getPadding && vs(r, a.getPadding());
    const l = Math.max(0, e.outerWidth - bs(r, t, 'left', 'right')),
      h = Math.max(0, e.outerHeight - bs(r, t, 'top', 'bottom')),
      u = l !== t.w,
      c = h !== t.h;
    return (t.w = l), (t.h = h), i.horizontal ? { same: u, other: c } : { same: c, other: u };
  }
  function ys(t, e) {
    const i = e.maxPadding;
    return (function (t) {
      const s = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        t.forEach((t) => {
          s[t] = Math.max(e[t], i[t]);
        }),
        s
      );
    })(t ? ['left', 'right'] : ['top', 'bottom']);
  }
  function _s(t, e, i, s) {
    const n = [];
    let o, a, r, l, h, u;
    for (o = 0, a = t.length, h = 0; o < a; ++o) {
      (r = t[o]), (l = r.box), l.update(r.width || e.w, r.height || e.h, ys(r.horizontal, e));
      const { same: a, other: c } = xs(e, i, r, s);
      (h |= a && n.length), (u = u || c), l.fullSize || n.push(r);
    }
    return (h && _s(n, e, i, s)) || u;
  }
  function ks(t, e, i, s, n) {
    (t.top = i), (t.left = e), (t.right = e + s), (t.bottom = i + n), (t.width = s), (t.height = n);
  }
  function ws(t, e, i, s) {
    const n = i.padding;
    let { x: o, y: a } = e;
    for (const r of t) {
      const t = r.box,
        l = s[r.stack] || { count: 1, placed: 0, weight: 1 },
        h = r.stackWeight / l.weight || 1;
      if (r.horizontal) {
        const s = e.w * h,
          o = l.size || t.height;
        _(l.start) && (a = l.start),
          t.fullSize
            ? ks(t, n.left, a, i.outerWidth - n.right - n.left, o)
            : ks(t, e.left + l.placed, a, s, o),
          (l.start = a),
          (l.placed += s),
          (a = t.bottom);
      } else {
        const s = e.h * h,
          a = l.size || t.width;
        _(l.start) && (o = l.start),
          t.fullSize
            ? ks(t, o, n.top, a, i.outerHeight - n.bottom - n.top)
            : ks(t, o, e.top + l.placed, a, s),
          (l.start = o),
          (l.placed += s),
          (o = t.right);
      }
    }
    (e.x = o), (e.y = a);
  }
  Xt.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
  var Ms = {
    addBox(t, e) {
      t.boxes || (t.boxes = []),
        (e.fullSize = e.fullSize || !1),
        (e.position = e.position || 'top'),
        (e.weight = e.weight || 0),
        (e._layers =
          e._layers ||
          function () {
            return [
              {
                z: 0,
                draw(t) {
                  e.draw(t);
                },
              },
            ];
          }),
        t.boxes.push(e);
    },
    removeBox(t, e) {
      const i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure(t, e, i) {
      (e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight);
    },
    update(t, e, i, s) {
      if (!t) return;
      const n = ge(t.options.layout.padding),
        o = Math.max(e - n.width, 0),
        a = Math.max(i - n.height, 0),
        r = (function (t) {
          const e = (function (t) {
              const e = [];
              let i, s, n, o, a, r;
              for (i = 0, s = (t || []).length; i < s; ++i)
                (n = t[i]),
                  ({
                    position: o,
                    options: { stack: a, stackWeight: r = 1 },
                  } = n),
                  e.push({
                    index: i,
                    box: n,
                    pos: o,
                    horizontal: n.isHorizontal(),
                    weight: n.weight,
                    stack: a && o + a,
                    stackWeight: r,
                  });
              return e;
            })(t),
            i = ms(
              e.filter((t) => t.box.fullSize),
              !0,
            ),
            s = ms(ps(e, 'left'), !0),
            n = ms(ps(e, 'right')),
            o = ms(ps(e, 'top'), !0),
            a = ms(ps(e, 'bottom')),
            r = gs(e, 'x'),
            l = gs(e, 'y');
          return {
            fullSize: i,
            leftAndTop: s.concat(o),
            rightAndBottom: n.concat(l).concat(a).concat(r),
            chartArea: ps(e, 'chartArea'),
            vertical: s.concat(n).concat(l),
            horizontal: o.concat(a).concat(r),
          };
        })(t.boxes),
        l = r.vertical,
        h = r.horizontal;
      u(t.boxes, (t) => {
        'function' == typeof t.beforeLayout && t.beforeLayout();
      });
      const c =
          l.reduce((t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
        d = Object.freeze({
          outerWidth: e,
          outerHeight: i,
          padding: n,
          availableWidth: o,
          availableHeight: a,
          vBoxMaxWidth: o / 2 / c,
          hBoxMaxHeight: a / 2,
        }),
        f = Object.assign({}, n);
      vs(f, ge(s));
      const p = Object.assign({ maxPadding: f, w: o, h: a, x: n.left, y: n.top }, n),
        g = (function (t, e) {
          const i = (function (t) {
              const e = {};
              for (const i of t) {
                const { stack: t, pos: s, stackWeight: n } = i;
                if (!t || !fs.includes(s)) continue;
                const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                o.count++, (o.weight += n);
              }
              return e;
            })(t),
            { vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
          let o, a, r;
          for (o = 0, a = t.length; o < a; ++o) {
            r = t[o];
            const { fullSize: a } = r.box,
              l = i[r.stack],
              h = l && r.stackWeight / l.weight;
            r.horizontal
              ? ((r.width = h ? h * s : a && e.availableWidth), (r.height = n))
              : ((r.width = s), (r.height = h ? h * n : a && e.availableHeight));
          }
          return i;
        })(l.concat(h), d);
      _s(r.fullSize, p, d, g),
        _s(l, p, d, g),
        _s(h, p, d, g) && _s(l, p, d, g),
        (function (t) {
          const e = t.maxPadding;
          function i(i) {
            const s = Math.max(e[i] - t[i], 0);
            return (t[i] += s), s;
          }
          (t.y += i('top')), (t.x += i('left')), i('right'), i('bottom');
        })(p),
        ws(r.leftAndTop, p, d, g),
        (p.x += p.w),
        (p.y += p.h),
        ws(r.rightAndBottom, p, d, g),
        (t.chartArea = {
          left: p.left,
          top: p.top,
          right: p.left + p.w,
          bottom: p.top + p.h,
          height: p.h,
          width: p.w,
        }),
        u(r.chartArea, (e) => {
          const i = e.box;
          Object.assign(i, t.chartArea),
            i.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class Ss {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, i) {}
    removeEventListener(t, e, i) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, i, s) {
      return (
        (e = Math.max(0, e || t.width)),
        (i = i || t.height),
        { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
      );
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class As extends Ss {
    acquireContext(t) {
      return (t && t.getContext && t.getContext('2d')) || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Cs = {
      touchstart: 'mousedown',
      touchmove: 'mousemove',
      touchend: 'mouseup',
      pointerenter: 'mouseenter',
      pointerdown: 'mousedown',
      pointermove: 'mousemove',
      pointerup: 'mouseup',
      pointerleave: 'mouseout',
      pointerout: 'mouseout',
    },
    Es = (t) => null === t || '' === t,
    Ds = !!Xe && { passive: !0 };
  function Ps(t, e, i) {
    t.canvas.removeEventListener(e, i, Ds);
  }
  function Fs(t, e) {
    for (const i of t) if (i === e || i.contains(e)) return !0;
  }
  function Os(t, e, i) {
    const s = t.canvas,
      n = new MutationObserver((t) => {
        let e = !1;
        for (const i of t) (e = e || Fs(i.addedNodes, s)), (e = e && !Fs(i.removedNodes, s));
        e && i();
      });
    return n.observe(document, { childList: !0, subtree: !0 }), n;
  }
  function Ts(t, e, i) {
    const s = t.canvas,
      n = new MutationObserver((t) => {
        let e = !1;
        for (const i of t) (e = e || Fs(i.removedNodes, s)), (e = e && !Fs(i.addedNodes, s));
        e && i();
      });
    return n.observe(document, { childList: !0, subtree: !0 }), n;
  }
  const Bs = new Map();
  let Rs = 0;
  function Is() {
    const t = window.devicePixelRatio;
    t !== Rs &&
      ((Rs = t),
      Bs.forEach((e, i) => {
        i.currentDevicePixelRatio !== t && e();
      }));
  }
  function Ls(t, e, i) {
    const s = t.canvas,
      n = s && je(s);
    if (!n) return;
    const o = et((t, e) => {
        const s = n.clientWidth;
        i(t, e), s < n.clientWidth && i();
      }, window),
      a = new ResizeObserver((t) => {
        const e = t[0],
          i = e.contentRect.width,
          s = e.contentRect.height;
        (0 === i && 0 === s) || o(i, s);
      });
    return (
      a.observe(n),
      (function (t, e) {
        Bs.size || window.addEventListener('resize', Is), Bs.set(t, e);
      })(t, o),
      a
    );
  }
  function Vs(t, e, i) {
    i && i.disconnect(),
      'resize' === e &&
        (function (t) {
          Bs.delete(t), Bs.size || window.removeEventListener('resize', Is);
        })(t);
  }
  function zs(t, e, i) {
    const s = t.canvas,
      n = et(
        (e) => {
          null !== t.ctx &&
            i(
              (function (t, e) {
                const i = Cs[t.type] || t.type,
                  { x: s, y: n } = Ue(t, e);
                return {
                  type: i,
                  chart: e,
                  native: t,
                  x: void 0 !== s ? s : null,
                  y: void 0 !== n ? n : null,
                };
              })(e, t),
            );
        },
        t,
        (t) => {
          const e = t[0];
          return [e, e.offsetX, e.offsetY];
        },
      );
    return (
      (function (t, e, i) {
        t.addEventListener(e, i, Ds);
      })(s, e, n),
      n
    );
  }
  class js extends Ss {
    acquireContext(t, e) {
      const i = t && t.getContext && t.getContext('2d');
      return i && i.canvas === t
        ? ((function (t, e) {
            const i = t.style,
              s = t.getAttribute('height'),
              n = t.getAttribute('width');
            if (
              ((t.$chartjs = {
                initial: {
                  height: s,
                  width: n,
                  style: { display: i.display, height: i.height, width: i.width },
                },
              }),
              (i.display = i.display || 'block'),
              (i.boxSizing = i.boxSizing || 'border-box'),
              Es(n))
            ) {
              const e = Ke(t, 'width');
              void 0 !== e && (t.width = e);
            }
            if (Es(s))
              if ('' === t.style.height) t.height = t.width / (e || 2);
              else {
                const e = Ke(t, 'height');
                void 0 !== e && (t.height = e);
              }
          })(t, e),
          i)
        : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e.$chartjs) return !1;
      const s = e.$chartjs.initial;
      ['height', 'width'].forEach((t) => {
        const n = s[t];
        i(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
      });
      const n = s.style || {};
      return (
        Object.keys(n).forEach((t) => {
          e.style[t] = n[t];
        }),
        (e.width = e.width),
        delete e.$chartjs,
        !0
      );
    }
    addEventListener(t, e, i) {
      this.removeEventListener(t, e);
      const s = t.$proxies || (t.$proxies = {}),
        n = { attach: Os, detach: Ts, resize: Ls }[e] || zs;
      s[e] = n(t, e, i);
    }
    removeEventListener(t, e) {
      const i = t.$proxies || (t.$proxies = {}),
        s = i[e];
      s && (({ attach: Vs, detach: Vs, resize: Vs }[e] || Ps)(t, e, s), (i[e] = void 0));
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, i, s) {
      return (function (t, e, i, s) {
        const n = We(t),
          o = $e(n, 'margin'),
          a = Ne(n.maxWidth, t, 'clientWidth') || C,
          r = Ne(n.maxHeight, t, 'clientHeight') || C,
          l = (function (t, e, i) {
            let s, n;
            if (void 0 === e || void 0 === i) {
              const o = je(t);
              if (o) {
                const t = o.getBoundingClientRect(),
                  a = We(o),
                  r = $e(a, 'border', 'width'),
                  l = $e(a, 'padding');
                (e = t.width - l.width - r.width),
                  (i = t.height - l.height - r.height),
                  (s = Ne(a.maxWidth, o, 'clientWidth')),
                  (n = Ne(a.maxHeight, o, 'clientHeight'));
              } else (e = t.clientWidth), (i = t.clientHeight);
            }
            return { width: e, height: i, maxWidth: s || C, maxHeight: n || C };
          })(t, e, i);
        let { width: h, height: u } = l;
        if ('content-box' === n.boxSizing) {
          const t = $e(n, 'border', 'width'),
            e = $e(n, 'padding');
          (h -= e.width + t.width), (u -= e.height + t.height);
        }
        return (
          (h = Math.max(0, h - o.width)),
          (u = Math.max(0, s ? Math.floor(h / s) : u - o.height)),
          (h = Ye(Math.min(h, a, l.maxWidth))),
          (u = Ye(Math.min(u, r, l.maxHeight))),
          h && !u && (u = Ye(h / 2)),
          { width: h, height: u }
        );
      })(t, e, i, s);
    }
    isAttached(t) {
      const e = je(t);
      return !(!e || !e.isConnected);
    }
  }
  class Ns {
    constructor() {
      this._init = [];
    }
    notify(t, e, i, s) {
      'beforeInit' === e &&
        ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
      const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
        o = this._notify(n, t, e, i);
      return (
        'afterDestroy' === e &&
          (this._notify(n, t, 'stop'), this._notify(this._init, t, 'uninstall')),
        o
      );
    }
    _notify(t, e, i, s) {
      s = s || {};
      for (const n of t) {
        const t = n.plugin;
        if (!1 === h(t[i], [e, s, n.options], t) && s.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      i(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = (this._cache = this._createDescriptors(t));
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const i = t && t.config,
        s = r(i.options && i.options.plugins, {}),
        n = (function (t) {
          const e = {},
            i = [],
            s = Object.keys(es.plugins.items);
          for (let t = 0; t < s.length; t++) i.push(es.getPlugin(s[t]));
          const n = t.plugins || [];
          for (let t = 0; t < n.length; t++) {
            const s = n[t];
            -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
          }
          return { plugins: i, localIds: e };
        })(i);
      return !1 !== s || e
        ? (function (t, { plugins: e, localIds: i }, s, n) {
            const o = [],
              a = t.getContext();
            for (const r of e) {
              const e = r.id,
                l = Ws(s[e], n);
              null !== l &&
                o.push({ plugin: r, options: Hs(t.config, { plugin: r, local: i[e] }, l, a) });
            }
            return o;
          })(t, n, s, e)
        : [];
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        i = this._cache,
        s = (t, e) => t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
      this._notify(s(e, i), t, 'stop'), this._notify(s(i, e), t, 'start');
    }
  }
  function Ws(t, e) {
    return e || !1 !== t ? (!0 === t ? {} : t) : null;
  }
  function Hs(t, { plugin: e, local: i }, s, n) {
    const o = t.pluginScopeKeys(e),
      a = t.getOptionScopes(s, o);
    return (
      i && e.defaults && a.push(e.defaults),
      t.createResolver(a, n, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
  }
  function $s(t, e) {
    const i = Xt.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || 'x';
  }
  function Us(t, e) {
    return 'x' === t || 'y' === t
      ? t
      : e.axis ||
          ('top' === (i = e.position) || 'bottom' === i
            ? 'x'
            : 'left' === i || 'right' === i
              ? 'y'
              : void 0) ||
          t.charAt(0).toLowerCase();
    var i;
  }
  function Ys(t) {
    const e = t.options || (t.options = {});
    (e.plugins = r(e.plugins, {})),
      (e.scales = (function (t, e) {
        const i = $t[t.type] || { scales: {} },
          s = e.scales || {},
          o = $s(t.type, e),
          a = Object.create(null),
          r = Object.create(null);
        return (
          Object.keys(s).forEach((t) => {
            const e = s[t];
            if (!n(e)) return console.error(`Invalid scale configuration for scale: ${t}`);
            if (e._proxy)
              return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
            const l = Us(t, e),
              h = (function (t, e) {
                return t === e ? '_index_' : '_value_';
              })(l, o),
              u = i.scales || {};
            (a[l] = a[l] || t), (r[t] = m(Object.create(null), [{ axis: l }, e, u[l], u[h]]));
          }),
          t.data.datasets.forEach((i) => {
            const n = i.type || t.type,
              o = i.indexAxis || $s(n, e),
              l = ($t[n] || {}).scales || {};
            Object.keys(l).forEach((t) => {
              const e = (function (t, e) {
                  let i = t;
                  return (
                    '_index_' === t ? (i = e) : '_value_' === t && (i = 'x' === e ? 'y' : 'x'), i
                  );
                })(t, o),
                n = i[e + 'AxisID'] || a[e] || e;
              (r[n] = r[n] || Object.create(null)), m(r[n], [{ axis: e }, s[n], l[t]]);
            });
          }),
          Object.keys(r).forEach((t) => {
            const e = r[t];
            m(e, [Xt.scales[e.type], Xt.scale]);
          }),
          r
        );
      })(t, e));
  }
  function qs(t) {
    return ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t;
  }
  const Xs = new Map(),
    Ks = new Set();
  function Zs(t, e) {
    let i = Xs.get(t);
    return i || ((i = e()), Xs.set(t, i), Ks.add(i)), i;
  }
  const Gs = (t, e, i) => {
    const s = x(e, i);
    void 0 !== s && t.add(s);
  };
  class Js {
    constructor(t) {
      (this._config = (function (t) {
        return ((t = t || {}).data = qs(t.data)), Ys(t), t;
      })(t)),
        (this._scopeCache = new Map()),
        (this._resolverCache = new Map());
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = qs(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      this.clearCache(), Ys(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return Zs(t, () => [[`datasets.${t}`, '']]);
    }
    datasetAnimationScopeKeys(t, e) {
      return Zs(`${t}.transition.${e}`, () => [
        [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
        [`datasets.${t}`, ''],
      ]);
    }
    datasetElementScopeKeys(t, e) {
      return Zs(`${t}-${e}`, () => [
        [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
      ]);
    }
    pluginScopeKeys(t) {
      const e = t.id;
      return Zs(`${this.type}-plugin-${e}`, () => [
        [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
      ]);
    }
    _cachedScopes(t, e) {
      const i = this._scopeCache;
      let s = i.get(t);
      return (s && !e) || ((s = new Map()), i.set(t, s)), s;
    }
    getOptionScopes(t, e, i) {
      const { options: s, type: n } = this,
        o = this._cachedScopes(t, i),
        a = o.get(e);
      if (a) return a;
      const r = new Set();
      e.forEach((e) => {
        t && (r.add(t), e.forEach((e) => Gs(r, t, e))),
          e.forEach((t) => Gs(r, s, t)),
          e.forEach((t) => Gs(r, $t[n] || {}, t)),
          e.forEach((t) => Gs(r, Xt, t)),
          e.forEach((t) => Gs(r, Ut, t));
      });
      const l = Array.from(r);
      return 0 === l.length && l.push(Object.create(null)), Ks.has(e) && o.set(e, l), l;
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, $t[e] || {}, Xt.datasets[e] || {}, { type: e }, Xt, Ut];
    }
    resolveNamedOptions(t, e, i, n = ['']) {
      const o = { $shared: !0 },
        { resolver: a, subPrefixes: r } = Qs(this._resolverCache, t, n);
      let l = a;
      (function (t, e) {
        const { isScriptable: i, isIndexable: n } = _e(t);
        for (const o of e) {
          const e = i(o),
            a = n(o),
            r = (a || e) && t[o];
          if ((e && (k(r) || tn(r))) || (a && s(r))) return !0;
        }
        return !1;
      })(a, e) &&
        ((o.$shared = !1), (l = ye(a, (i = k(i) ? i() : i), this.createResolver(t, i, r))));
      for (const t of e) o[t] = l[t];
      return o;
    }
    createResolver(t, e, i = [''], s) {
      const { resolver: o } = Qs(this._resolverCache, t, i);
      return n(e) ? ye(o, e, void 0, s) : o;
    }
  }
  function Qs(t, e, i) {
    let s = t.get(e);
    s || ((s = new Map()), t.set(e, s));
    const n = i.join();
    let o = s.get(n);
    return (
      o ||
        ((o = {
          resolver: xe(e, i),
          subPrefixes: i.filter((t) => !t.toLowerCase().includes('hover')),
        }),
        s.set(n, o)),
      o
    );
  }
  const tn = (t) => n(t) && Object.getOwnPropertyNames(t).reduce((e, i) => e || k(t[i]), !1),
    en = ['top', 'bottom', 'left', 'right', 'chartArea'];
  function sn(t, e) {
    return 'top' === t || 'bottom' === t || (-1 === en.indexOf(t) && 'x' === e);
  }
  function nn(t, e) {
    return function (i, s) {
      return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
    };
  }
  function on(t) {
    const e = t.chart,
      i = e.options.animation;
    e.notifyPlugins('afterRender'), h(i && i.onComplete, [t], e);
  }
  function an(t) {
    const e = t.chart,
      i = e.options.animation;
    h(i && i.onProgress, [t], e);
  }
  function rn(t) {
    return (
      ze() && 'string' == typeof t ? (t = document.getElementById(t)) : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t
    );
  }
  const ln = {},
    hn = (t) => {
      const e = rn(t);
      return Object.values(ln)
        .filter((t) => t.canvas === e)
        .pop();
    };
  function un(t, e, i) {
    const s = Object.keys(t);
    for (const n of s) {
      const s = +n;
      if (s >= e) {
        const o = t[n];
        delete t[n], (i > 0 || s > e) && (t[s + i] = o);
      }
    }
  }
  class cn {
    constructor(t, i) {
      const s = (this.config = new Js(i)),
        n = rn(t),
        o = hn(n);
      if (o)
        throw new Error(
          'Canvas is already in use. Chart with ID \'' +
            o.id +
            '\' must be destroyed before the canvas with ID \'' +
            o.canvas.id +
            '\' can be reused.',
        );
      const a = s.createResolver(s.chartOptionScopes(), this.getContext());
      (this.platform = new (s.platform ||
        (function (t) {
          return !ze() || ('undefined' != typeof OffscreenCanvas && t instanceof OffscreenCanvas)
            ? As
            : js;
        })(n))()),
        this.platform.updateConfig(s);
      const r = this.platform.acquireContext(n, a.aspectRatio),
        l = r && r.canvas,
        h = l && l.height,
        u = l && l.width;
      (this.id = e()),
        (this.ctx = r),
        (this.canvas = l),
        (this.width = u),
        (this.height = h),
        (this._options = a),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Ns()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = (function (t, e) {
          let i;
          return function (...s) {
            return e ? (clearTimeout(i), (i = setTimeout(t, e, s))) : t.apply(this, s), e;
          };
        })((t) => this.update(t), a.resizeDelay || 0)),
        (this._dataChanges = []),
        (ln[this.id] = this),
        r && l
          ? (ui.listen(this, 'complete', on),
            ui.listen(this, 'progress', an),
            this._initialize(),
            this.attached && this.update())
          : console.error('Failed to create chart: can\'t acquire context from the given item');
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: e },
        width: s,
        height: n,
        _aspectRatio: o,
      } = this;
      return i(t) ? (e && o ? o : n ? s / n : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    _initialize() {
      return (
        this.notifyPlugins('beforeInit'),
        this.options.responsive ? this.resize() : qe(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins('afterInit'),
        this
      );
    }
    clear() {
      return Jt(this.canvas, this.ctx), this;
    }
    stop() {
      return ui.stop(this), this;
    }
    resize(t, e) {
      ui.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e);
    }
    _resize(t, e) {
      const i = this.options,
        s = this.canvas,
        n = i.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(s, t, e, n),
        a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        r = this.width ? 'resize' : 'attach';
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        qe(this, a, !0) &&
          (this.notifyPlugins('resize', { size: o }),
          h(i.onResize, [this, o], this),
          this.attached && this._doResize(r) && this.render());
    }
    ensureScalesHaveIDs() {
      u(this.options.scales || {}, (t, e) => {
        t.id = e;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        i = this.scales,
        s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
      let n = [];
      e &&
        (n = n.concat(
          Object.keys(e).map((t) => {
            const i = e[t],
              s = Us(t, i),
              n = 'r' === s,
              o = 'x' === s;
            return {
              options: i,
              dposition: n ? 'chartArea' : o ? 'bottom' : 'left',
              dtype: n ? 'radialLinear' : o ? 'category' : 'linear',
            };
          }),
        )),
        u(n, (e) => {
          const n = e.options,
            o = n.id,
            a = Us(o, n),
            l = r(n.type, e.dtype);
          (void 0 !== n.position && sn(n.position, a) === sn(e.dposition)) ||
            (n.position = e.dposition),
            (s[o] = !0);
          let h = null;
          o in i && i[o].type === l
            ? (h = i[o])
            : ((h = new (es.getScale(l))({ id: o, type: l, ctx: this.ctx, chart: this })),
              (i[h.id] = h)),
            h.init(n, t);
        }),
        u(s, (t, e) => {
          t || delete i[e];
        }),
        u(i, (t) => {
          Ms.configure(this, t, t.options), Ms.addBox(this, t);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        e = this.data.datasets.length,
        i = t.length;
      if ((t.sort((t, e) => t.index - e.index), i > e)) {
        for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
        t.splice(e, i - e);
      }
      this._sortedMetasets = t.slice(0).sort(nn('order', 'index'));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: e },
      } = this;
      t.length > e.length && delete this._stacks,
        t.forEach((t, i) => {
          0 === e.filter((e) => e === t._dataset).length && this._destroyDatasetMeta(i);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        e = this.data.datasets;
      let i, s;
      for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
        const s = e[i];
        let n = this.getDatasetMeta(i);
        const o = s.type || this.config.type;
        if (
          (n.type && n.type !== o && (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
          (n.type = o),
          (n.indexAxis = s.indexAxis || $s(o, this.options)),
          (n.order = s.order || 0),
          (n.index = i),
          (n.label = '' + s.label),
          (n.visible = this.isDatasetVisible(i)),
          n.controller)
        )
          n.controller.updateIndex(i), n.controller.linkScales();
        else {
          const e = es.getController(o),
            { datasetElementType: s, dataElementType: a } = Xt.datasets[o];
          Object.assign(e.prototype, {
            dataElementType: es.getElement(a),
            datasetElementType: s && es.getElement(s),
          }),
            (n.controller = new e(this, i)),
            t.push(n.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      u(
        this.data.datasets,
        (t, e) => {
          this.getDatasetMeta(e).controller.reset();
        },
        this,
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins('reset');
    }
    update(t) {
      const e = this.config;
      e.update();
      const i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
        s = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        !1 === this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
      )
        return;
      const n = this.buildOrUpdateControllers();
      this.notifyPlugins('beforeElementsUpdate');
      let o = 0;
      for (let t = 0, e = this.data.datasets.length; t < e; t++) {
        const { controller: e } = this.getDatasetMeta(t),
          i = !s && -1 === n.indexOf(e);
        e.buildOrUpdateElements(i), (o = Math.max(+e.getMaxOverflow(), o));
      }
      (o = this._minPadding = i.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        s ||
          u(n, (t) => {
            t.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins('afterUpdate', { mode: t }),
        this._layers.sort(nn('z', '_idx'));
      const { _active: a, _lastEvent: r } = this;
      r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
    }
    _updateScales() {
      u(this.scales, (t) => {
        Ms.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        i = new Set(t.events);
      (w(e, i) && !!this._responsiveListeners === t.responsive) ||
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        e = this._getUniformDataChanges() || [];
      for (const { method: i, start: s, count: n } of e) un(t, s, '_removeElements' === i ? -n : n);
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const e = this.data.datasets.length,
        i = (e) =>
          new Set(t.filter((t) => t[0] === e).map((t, e) => e + ',' + t.splice(1).join(','))),
        s = i(0);
      for (let t = 1; t < e; t++) if (!w(s, i(t))) return;
      return Array.from(s)
        .map((t) => t.split(','))
        .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
    }
    _updateLayout(t) {
      if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 })) return;
      Ms.update(this, this.width, this.height, t);
      const e = this.chartArea,
        i = e.width <= 0 || e.height <= 0;
      (this._layers = []),
        u(
          this.boxes,
          (t) => {
            (i && 'chartArea' === t.position) ||
              (t.configure && t.configure(), this._layers.push(...t._layers()));
          },
          this,
        ),
        this._layers.forEach((t, e) => {
          t._idx = e;
        }),
        this.notifyPlugins('afterLayout');
    }
    _updateDatasets(t) {
      if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 })) {
        for (let t = 0, e = this.data.datasets.length; t < e; ++t)
          this.getDatasetMeta(t).controller.configure();
        for (let e = 0, i = this.data.datasets.length; e < i; ++e)
          this._updateDataset(e, k(t) ? t({ datasetIndex: e }) : t);
        this.notifyPlugins('afterDatasetsUpdate', { mode: t });
      }
    }
    _updateDataset(t, e) {
      const i = this.getDatasetMeta(t),
        s = { meta: i, index: t, mode: e, cancelable: !0 };
      !1 !== this.notifyPlugins('beforeDatasetUpdate', s) &&
        (i.controller._update(e), (s.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', s));
    }
    render() {
      !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
        (ui.has(this)
          ? this.attached && !ui.running(this) && ui.start(this)
          : (this.draw(), on({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: t, height: e } = this._resizeBeforeDraw;
        this._resize(t, e), (this._resizeBeforeDraw = null);
      }
      if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
      if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 })) return;
      const e = this._layers;
      for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
      for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
      this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets,
        i = [];
      let s, n;
      for (s = 0, n = e.length; s < n; ++s) {
        const n = e[s];
        (t && !n.visible) || i.push(n);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (!1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })) return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
      this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(t) {
      const e = this.ctx,
        i = t._clip,
        s = !i.disabled,
        n = this.chartArea,
        o = { meta: t, index: t.index, cancelable: !0 };
      !1 !== this.notifyPlugins('beforeDatasetDraw', o) &&
        (s &&
          ie(e, {
            left: !1 === i.left ? 0 : n.left - i.left,
            right: !1 === i.right ? this.width : n.right + i.right,
            top: !1 === i.top ? 0 : n.top - i.top,
            bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom,
          }),
        t.controller.draw(),
        s && se(e),
        (o.cancelable = !1),
        this.notifyPlugins('afterDatasetDraw', o));
    }
    isPointInArea(t) {
      return ee(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, i, s) {
      const n = ds.modes[e];
      return 'function' == typeof n ? n(this, t, i, s) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t],
        i = this._metasets;
      let s = i.filter((t) => t && t._dataset === e).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (e && e.order) || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(s)),
        s
      );
    }
    getContext() {
      return this.$context || (this.$context = ve(null, { chart: this, type: 'chart' }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const i = this.getDatasetMeta(t);
      return 'boolean' == typeof i.hidden ? !i.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      this.getDatasetMeta(t).hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, i) {
      const s = i ? 'show' : 'hide',
        n = this.getDatasetMeta(t),
        o = n.controller._resolveAnimations(void 0, s);
      _(e)
        ? ((n.data[e].hidden = !i), this.update())
        : (this.setDatasetVisibility(t, i),
          o.update(n, { visible: i }),
          this.update((e) => (e.datasetIndex === t ? s : void 0)));
    }
    hide(t, e) {
      this._updateVisibility(t, e, !1);
    }
    show(t, e) {
      this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this._metasets[t];
      e && e.controller && e.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, e;
      for (this.stop(), ui.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins('beforeDestroy');
      const { canvas: t, ctx: e } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Jt(t, e),
          this.platform.releaseContext(e),
          (this.canvas = null),
          (this.ctx = null)),
        this.notifyPlugins('destroy'),
        delete ln[this.id],
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        e = this.platform,
        i = (i, s) => {
          e.addEventListener(this, i, s), (t[i] = s);
        },
        s = (t, e, i) => {
          (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
        };
      u(this.options.events, (t) => i(t, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        i = (i, s) => {
          e.addEventListener(this, i, s), (t[i] = s);
        },
        s = (i, s) => {
          t[i] && (e.removeEventListener(this, i, s), delete t[i]);
        },
        n = (t, e) => {
          this.canvas && this.resize(t, e);
        };
      let o;
      const a = () => {
        s('attach', a), (this.attached = !0), this.resize(), i('resize', n), i('detach', o);
      };
      (o = () => {
        (this.attached = !1), s('resize', n), this._stop(), this._resize(0, 0), i('attach', a);
      }),
        e.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
      u(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
        (this._listeners = {}),
        u(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, e, i) {
      const s = i ? 'set' : 'remove';
      let n, o, a, r;
      for (
        'dataset' === e &&
          ((n = this.getDatasetMeta(t[0].datasetIndex)),
          n.controller['_' + s + 'DatasetHoverStyle']()),
          a = 0,
          r = t.length;
        a < r;
        ++a
      ) {
        o = t[a];
        const e = o && this.getDatasetMeta(o.datasetIndex).controller;
        e && e[s + 'HoverStyle'](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        i = t.map(({ datasetIndex: t, index: e }) => {
          const i = this.getDatasetMeta(t);
          if (!i) throw new Error('No dataset found at index ' + t);
          return { datasetIndex: t, element: i.data[e], index: e };
        });
      !c(i, e) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e));
    }
    notifyPlugins(t, e, i) {
      return this._plugins.notify(this, t, e, i);
    }
    _updateHoverStyles(t, e, i) {
      const s = this.options.hover,
        n = (t, e) =>
          t.filter((t) => !e.some((e) => t.datasetIndex === e.datasetIndex && t.index === e.index)),
        o = n(e, t),
        a = i ? t : n(t, e);
      o.length && this.updateHoverStyle(o, s.mode, !1),
        a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
    }
    _eventHandler(t, e) {
      const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
        s = (e) => (e.options.events || this.options.events).includes(t.native.type);
      if (!1 === this.notifyPlugins('beforeEvent', i, s)) return;
      const n = this._handleEvent(t, e, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins('afterEvent', i, s),
        (n || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, e, i) {
      const { _active: s = [], options: n } = this,
        o = e,
        a = this._getActiveElements(t, s, i, o),
        r = (function (t) {
          return 'mouseup' === t.type || 'click' === t.type || 'contextmenu' === t.type;
        })(t),
        l = (function (t, e, i, s) {
          return i && 'mouseout' !== t.type ? (s ? e : t) : null;
        })(t, this._lastEvent, i, r);
      i &&
        ((this._lastEvent = null),
        h(n.onHover, [t, a, this], this),
        r && h(n.onClick, [t, a, this], this));
      const u = !c(a, s);
      return (
        (u || e) && ((this._active = a), this._updateHoverStyles(a, s, e)), (this._lastEvent = l), u
      );
    }
    _getActiveElements(t, e, i, s) {
      if ('mouseout' === t.type) return [];
      if (!i) return e;
      const n = this.options.hover;
      return this.getElementsAtEventForMode(t, n.mode, n, s);
    }
  }
  const dn = () => u(cn.instances, (t) => t._plugins.invalidate()),
    fn = !0;
  function pn(t, e, i) {
    const { startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l } = e;
    let h = n / r;
    t.beginPath(),
      t.arc(o, a, r, s - h, i + h),
      l > n ? ((h = n / l), t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + D, s - D),
      t.closePath(),
      t.clip();
  }
  function gn(t, e, i, s) {
    return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
  }
  function mn(t, e, i, s, n, o) {
    const { x: a, y: r, startAngle: l, pixelMargin: h, innerRadius: u } = e,
      c = Math.max(e.outerRadius + s + i - h, 0),
      d = u > 0 ? u + s + i + h : 0;
    let f = 0;
    const p = n - l;
    if (s) {
      const t = ((u > 0 ? u - s : 0) + (c > 0 ? c - s : 0)) / 2;
      f = (p - (0 !== t ? (p * t) / (t + s) : p)) / 2;
    }
    const g = (p - Math.max(0.001, p * c - i / M) / c) / 2,
      m = l + g + f,
      b = n - g - f,
      {
        outerStart: v,
        outerEnd: x,
        innerStart: y,
        innerEnd: _,
      } = (function (t, e, i, s) {
        const n = de(t.options.borderRadius, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']),
          o = (i - e) / 2,
          a = Math.min(o, (s * e) / 2),
          r = (t) => {
            const e = ((i - Math.min(o, t)) * s) / 2;
            return Y(t, 0, Math.min(o, e));
          };
        return {
          outerStart: r(n.outerStart),
          outerEnd: r(n.outerEnd),
          innerStart: Y(n.innerStart, 0, a),
          innerEnd: Y(n.innerEnd, 0, a),
        };
      })(e, d, c, b - m),
      k = c - v,
      w = c - x,
      S = m + v / k,
      A = b - x / w,
      C = d + y,
      E = d + _,
      P = m + y / C,
      F = b - _ / E;
    if ((t.beginPath(), o)) {
      if ((t.arc(a, r, c, S, A), x > 0)) {
        const e = gn(w, A, a, r);
        t.arc(e.x, e.y, x, A, b + D);
      }
      const e = gn(E, b, a, r);
      if ((t.lineTo(e.x, e.y), _ > 0)) {
        const e = gn(E, F, a, r);
        t.arc(e.x, e.y, _, b + D, F + Math.PI);
      }
      if ((t.arc(a, r, d, b - _ / d, m + y / d, !0), y > 0)) {
        const e = gn(C, P, a, r);
        t.arc(e.x, e.y, y, P + Math.PI, m - D);
      }
      const i = gn(k, m, a, r);
      if ((t.lineTo(i.x, i.y), v > 0)) {
        const e = gn(k, S, a, r);
        t.arc(e.x, e.y, v, m - D, S);
      }
    } else {
      t.moveTo(a, r);
      const e = Math.cos(S) * c + a,
        i = Math.sin(S) * c + r;
      t.lineTo(e, i);
      const s = Math.cos(A) * c + a,
        n = Math.sin(A) * c + r;
      t.lineTo(s, n);
    }
    t.closePath();
  }
  Object.defineProperties(cn, {
    defaults: { enumerable: fn, value: Xt },
    instances: { enumerable: fn, value: ln },
    overrides: { enumerable: fn, value: $t },
    registry: { enumerable: fn, value: es },
    version: { enumerable: fn, value: '3.9.1' },
    getChart: { enumerable: fn, value: hn },
    register: {
      enumerable: fn,
      value: (...t) => {
        es.add(...t), dn();
      },
    },
    unregister: {
      enumerable: fn,
      value: (...t) => {
        es.remove(...t), dn();
      },
    },
  });
  class bn extends Hi {
    constructor(t) {
      super(),
        (this.options = void 0),
        (this.circumference = void 0),
        (this.startAngle = void 0),
        (this.endAngle = void 0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.pixelMargin = 0),
        (this.fullCircles = 0),
        t && Object.assign(this, t);
    }
    inRange(t, e, i) {
      const s = this.getProps(['x', 'y'], i),
        { angle: n, distance: o } = N(s, { x: t, y: e }),
        {
          startAngle: a,
          endAngle: l,
          innerRadius: h,
          outerRadius: u,
          circumference: c,
        } = this.getProps(
          ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
          i,
        ),
        d = this.options.spacing / 2,
        f = r(c, l - a) >= S || U(n, a, l),
        p = q(o, h + d, u + d);
      return f && p;
    }
    getCenterPoint(t) {
      const {
          x: e,
          y: i,
          startAngle: s,
          endAngle: n,
          innerRadius: o,
          outerRadius: a,
        } = this.getProps(
          ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
          t,
        ),
        { offset: r, spacing: l } = this.options,
        h = (s + n) / 2,
        u = (o + a + l + r) / 2;
      return { x: e + Math.cos(h) * u, y: i + Math.sin(h) * u };
    }
    tooltipPosition(t) {
      return this.getCenterPoint(t);
    }
    draw(t) {
      const { options: e, circumference: i } = this,
        s = (e.offset || 0) / 2,
        n = (e.spacing || 0) / 2,
        o = e.circular;
      if (
        ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
        (this.fullCircles = i > S ? Math.floor(i / S) : 0),
        0 === i || this.innerRadius < 0 || this.outerRadius < 0)
      )
        return;
      t.save();
      let a = 0;
      if (s) {
        a = s / 2;
        const e = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(e) * a, Math.sin(e) * a), this.circumference >= M && (a = s);
      }
      (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
      const r = (function (t, e, i, s, n) {
        const { fullCircles: o, startAngle: a, circumference: r } = e;
        let l = e.endAngle;
        if (o) {
          mn(t, e, i, s, a + S, n);
          for (let e = 0; e < o; ++e) t.fill();
          isNaN(r) || ((l = a + (r % S)), r % S == 0 && (l += S));
        }
        return mn(t, e, i, s, l, n), t.fill(), l;
      })(t, this, a, n, o);
      (function (t, e, i, s, n, o) {
        const { options: a } = e,
          { borderWidth: r, borderJoinStyle: l } = a,
          h = 'inner' === a.borderAlign;
        r &&
          (h
            ? ((t.lineWidth = 2 * r), (t.lineJoin = l || 'round'))
            : ((t.lineWidth = r), (t.lineJoin = l || 'bevel')),
          e.fullCircles &&
            (function (t, e, i) {
              const { x: s, y: n, startAngle: o, pixelMargin: a, fullCircles: r } = e,
                l = Math.max(e.outerRadius - a, 0),
                h = e.innerRadius + a;
              let u;
              for (
                i && pn(t, e, o + S), t.beginPath(), t.arc(s, n, h, o + S, o, !0), u = 0;
                u < r;
                ++u
              )
                t.stroke();
              for (t.beginPath(), t.arc(s, n, l, o, o + S), u = 0; u < r; ++u) t.stroke();
            })(t, e, h),
          h && pn(t, e, n),
          mn(t, e, i, s, n, o),
          t.stroke());
      })(t, this, a, n, r, o),
        t.restore();
    }
  }
  function vn(t, e, i = e) {
    (t.lineCap = r(i.borderCapStyle, e.borderCapStyle)),
      t.setLineDash(r(i.borderDash, e.borderDash)),
      (t.lineDashOffset = r(i.borderDashOffset, e.borderDashOffset)),
      (t.lineJoin = r(i.borderJoinStyle, e.borderJoinStyle)),
      (t.lineWidth = r(i.borderWidth, e.borderWidth)),
      (t.strokeStyle = r(i.borderColor, e.borderColor));
  }
  function xn(t, e, i) {
    t.lineTo(i.x, i.y);
  }
  function yn(t, e, i = {}) {
    const s = t.length,
      { start: n = 0, end: o = s - 1 } = i,
      { start: a, end: r } = e,
      l = Math.max(n, a),
      h = Math.min(o, r),
      u = (n < a && o < a) || (n > r && o > r);
    return { count: s, start: l, loop: e.loop, ilen: h < l && !u ? s + h - l : h - l };
  }
  function _n(t, e, i, s) {
    const { points: n, options: o } = e,
      { count: a, start: r, loop: l, ilen: h } = yn(n, i, s),
      u = (function (t) {
        return t.stepped ? ne : t.tension || 'monotone' === t.cubicInterpolationMode ? oe : xn;
      })(o);
    let c,
      d,
      f,
      { move: p = !0, reverse: g } = s || {};
    for (c = 0; c <= h; ++c)
      (d = n[(r + (g ? h - c : c)) % a]),
        d.skip || (p ? (t.moveTo(d.x, d.y), (p = !1)) : u(t, f, d, g, o.stepped), (f = d));
    return l && ((d = n[(r + (g ? h : 0)) % a]), u(t, f, d, g, o.stepped)), !!l;
  }
  function kn(t, e, i, s) {
    const n = e.points,
      { count: o, start: a, ilen: r } = yn(n, i, s),
      { move: l = !0, reverse: h } = s || {};
    let u,
      c,
      d,
      f,
      p,
      g,
      m = 0,
      b = 0;
    const v = (t) => (a + (h ? r - t : t)) % o,
      x = () => {
        f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
      };
    for (l && ((c = n[v(0)]), t.moveTo(c.x, c.y)), u = 0; u <= r; ++u) {
      if (((c = n[v(u)]), c.skip)) continue;
      const e = c.x,
        i = c.y,
        s = 0 | e;
      s === d
        ? (i < f ? (f = i) : i > p && (p = i), (m = (b * m + e) / ++b))
        : (x(), t.lineTo(e, i), (d = s), (b = 0), (f = p = i)),
        (g = i);
    }
    x();
  }
  function wn(t) {
    const e = t.options,
      i = e.borderDash && e.borderDash.length;
    return t._decimated ||
      t._loop ||
      e.tension ||
      'monotone' === e.cubicInterpolationMode ||
      e.stepped ||
      i
      ? _n
      : kn;
  }
  (bn.id = 'arc'),
    (bn.defaults = {
      borderAlign: 'center',
      borderColor: '#fff',
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: !0,
    }),
    (bn.defaultRoutes = { backgroundColor: 'backgroundColor' });
  const Mn = 'function' == typeof Path2D;
  class Sn extends Hi {
    constructor(t) {
      super(),
        (this.animated = !0),
        (this.options = void 0),
        (this._chart = void 0),
        (this._loop = void 0),
        (this._fullLoop = void 0),
        (this._path = void 0),
        (this._points = void 0),
        (this._segments = void 0),
        (this._decimated = !1),
        (this._pointsUpdated = !1),
        (this._datasetIndex = void 0),
        t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
      const i = this.options;
      if (
        (i.tension || 'monotone' === i.cubicInterpolationMode) &&
        !i.stepped &&
        !this._pointsUpdated
      ) {
        const s = i.spanGaps ? this._loop : this._fullLoop;
        Ve(this._points, i, t, s, e), (this._pointsUpdated = !0);
      }
    }
    set points(t) {
      (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
    }
    get points() {
      return this._points;
    }
    get segments() {
      return (
        this._segments ||
        (this._segments = (function (t, e) {
          const i = t.points,
            s = t.options.spanGaps,
            n = i.length;
          if (!n) return [];
          const o = !!t._loop,
            { start: a, end: r } = (function (t, e, i, s) {
              let n = 0,
                o = e - 1;
              if (i && !s) for (; n < e && !t[n].skip; ) n++;
              for (; n < e && t[n].skip; ) n++;
              for (n %= e, i && (o += n); o > n && t[o % e].skip; ) o--;
              return (o %= e), { start: n, end: o };
            })(i, n, o, s);
          return (function (t, e, i, s) {
            return s && s.setContext && i
              ? (function (t, e, i, s) {
                  const n = t._chart.getContext(),
                    o = li(t.options),
                    {
                      _datasetIndex: a,
                      options: { spanGaps: r },
                    } = t,
                    l = i.length,
                    h = [];
                  let u = o,
                    c = e[0].start,
                    d = c;
                  function f(t, e, s, n) {
                    const o = r ? -1 : 1;
                    if (t !== e) {
                      for (t += l; i[t % l].skip; ) t -= o;
                      for (; i[e % l].skip; ) e += o;
                      t % l != e % l &&
                        (h.push({ start: t % l, end: e % l, loop: s, style: n }),
                        (u = n),
                        (c = e % l));
                    }
                  }
                  for (const t of e) {
                    c = r ? c : t.start;
                    let e,
                      o = i[c % l];
                    for (d = c + 1; d <= t.end; d++) {
                      const r = i[d % l];
                      (e = li(
                        s.setContext(
                          ve(n, {
                            type: 'segment',
                            p0: o,
                            p1: r,
                            p0DataIndex: (d - 1) % l,
                            p1DataIndex: d % l,
                            datasetIndex: a,
                          }),
                        ),
                      )),
                        hi(e, u) && f(c, d - 1, t.loop, u),
                        (o = r),
                        (u = e);
                    }
                    c < d - 1 && f(c, d - 1, t.loop, u);
                  }
                  return h;
                })(t, e, i, s)
              : e;
          })(
            t,
            !0 === s
              ? [{ start: a, end: r, loop: o }]
              : (function (t, e, i, s) {
                  const n = t.length,
                    o = [];
                  let a,
                    r = e,
                    l = t[e];
                  for (a = e + 1; a <= i; ++a) {
                    const i = t[a % n];
                    i.skip || i.stop
                      ? l.skip ||
                        ((s = !1),
                        o.push({ start: e % n, end: (a - 1) % n, loop: s }),
                        (e = r = i.stop ? a : null))
                      : ((r = a), l.skip && (e = a)),
                      (l = i);
                  }
                  return null !== r && o.push({ start: e % n, end: r % n, loop: s }), o;
                })(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1),
            i,
            e,
          );
        })(this, this.options.segment))
      );
    }
    first() {
      const t = this.segments,
        e = this.points;
      return t.length && e[t[0].start];
    }
    last() {
      const t = this.segments,
        e = this.points,
        i = t.length;
      return i && e[t[i - 1].end];
    }
    interpolate(t, e) {
      const i = this.options,
        s = t[e],
        n = this.points,
        o = ri(this, { property: e, start: s, end: s });
      if (!o.length) return;
      const a = [],
        r = (function (t) {
          return t.stepped ? Ge : t.tension || 'monotone' === t.cubicInterpolationMode ? Je : Ze;
        })(i);
      let l, h;
      for (l = 0, h = o.length; l < h; ++l) {
        const { start: h, end: u } = o[l],
          c = n[h],
          d = n[u];
        if (c === d) {
          a.push(c);
          continue;
        }
        const f = r(c, d, Math.abs((s - c[e]) / (d[e] - c[e])), i.stepped);
        (f[e] = t[e]), a.push(f);
      }
      return 1 === a.length ? a[0] : a;
    }
    pathSegment(t, e, i) {
      return wn(this)(t, this, e, i);
    }
    path(t, e, i) {
      const s = this.segments,
        n = wn(this);
      let o = this._loop;
      (e = e || 0), (i = i || this.points.length - e);
      for (const a of s) o &= n(t, this, a, { start: e, end: e + i - 1 });
      return !!o;
    }
    draw(t, e, i, s) {
      const n = this.options || {};
      (this.points || []).length &&
        n.borderWidth &&
        (t.save(),
        (function (t, e, i, s) {
          Mn && !e.options.segment
            ? (function (t, e, i, s) {
                let n = e._path;
                n || ((n = e._path = new Path2D()), e.path(n, i, s) && n.closePath()),
                  vn(t, e.options),
                  t.stroke(n);
              })(t, e, i, s)
            : (function (t, e, i, s) {
                const { segments: n, options: o } = e,
                  a = wn(e);
                for (const r of n)
                  vn(t, o, r.style),
                    t.beginPath(),
                    a(t, e, r, { start: i, end: i + s - 1 }) && t.closePath(),
                    t.stroke();
              })(t, e, i, s);
        })(t, this, i, s),
        t.restore()),
        this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
  }
  function An(t, e, i, s) {
    const n = t.options,
      { [i]: o } = t.getProps([i], s);
    return Math.abs(e - o) < n.radius + n.hitRadius;
  }
  (Sn.id = 'line'),
    (Sn.defaults = {
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: 'miter',
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: 'default',
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0,
    }),
    (Sn.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
    (Sn.descriptors = { _scriptable: !0, _indexable: (t) => 'borderDash' !== t && 'fill' !== t });
  class Cn extends Hi {
    constructor(t) {
      super(),
        (this.options = void 0),
        (this.parsed = void 0),
        (this.skip = void 0),
        (this.stop = void 0),
        t && Object.assign(this, t);
    }
    inRange(t, e, i) {
      const s = this.options,
        { x: n, y: o } = this.getProps(['x', 'y'], i);
      return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
    }
    inXRange(t, e) {
      return An(this, t, 'x', e);
    }
    inYRange(t, e) {
      return An(this, t, 'y', e);
    }
    getCenterPoint(t) {
      const { x: e, y: i } = this.getProps(['x', 'y'], t);
      return { x: e, y: i };
    }
    size(t) {
      let e = (t = t || this.options || {}).radius || 0;
      return (e = Math.max(e, (e && t.hoverRadius) || 0)), 2 * (e + ((e && t.borderWidth) || 0));
    }
    draw(t, e) {
      const i = this.options;
      this.skip ||
        i.radius < 0.1 ||
        !ee(this, e, this.size(i) / 2) ||
        ((t.strokeStyle = i.borderColor),
        (t.lineWidth = i.borderWidth),
        (t.fillStyle = i.backgroundColor),
        Qt(t, i, this.x, this.y));
    }
    getRange() {
      const t = this.options || {};
      return t.radius + t.hitRadius;
    }
  }
  function En(t, e) {
    const {
      x: i,
      y: s,
      base: n,
      width: o,
      height: a,
    } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
    let r, l, h, u, c;
    return (
      t.horizontal
        ? ((c = a / 2), (r = Math.min(i, n)), (l = Math.max(i, n)), (h = s - c), (u = s + c))
        : ((c = o / 2), (r = i - c), (l = i + c), (h = Math.min(s, n)), (u = Math.max(s, n))),
      { left: r, top: h, right: l, bottom: u }
    );
  }
  function Dn(t, e, i, s) {
    return t ? 0 : Y(e, i, s);
  }
  function Pn(t, e, i, s) {
    const n = null === e,
      o = null === i,
      a = t && !(n && o) && En(t, s);
    return a && (n || q(e, a.left, a.right)) && (o || q(i, a.top, a.bottom));
  }
  function Fn(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  function On(t, e, i = {}) {
    const s = t.x !== i.x ? -e : 0,
      n = t.y !== i.y ? -e : 0,
      o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
      a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
    return { x: t.x + s, y: t.y + n, w: t.w + o, h: t.h + a, radius: t.radius };
  }
  (Cn.id = 'point'),
    (Cn.defaults = {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: 'circle',
      radius: 3,
      rotation: 0,
    }),
    (Cn.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
  class Tn extends Hi {
    constructor(t) {
      super(),
        (this.options = void 0),
        (this.horizontal = void 0),
        (this.base = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.inflateAmount = void 0),
        t && Object.assign(this, t);
    }
    draw(t) {
      const {
          inflateAmount: e,
          options: { borderColor: i, backgroundColor: s },
        } = this,
        { inner: o, outer: a } = (function (t) {
          const e = En(t),
            i = e.right - e.left,
            s = e.bottom - e.top,
            o = (function (t, e, i) {
              const s = t.options.borderWidth,
                n = t.borderSkipped,
                o = fe(s);
              return {
                t: Dn(n.top, o.top, 0, i),
                r: Dn(n.right, o.right, 0, e),
                b: Dn(n.bottom, o.bottom, 0, i),
                l: Dn(n.left, o.left, 0, e),
              };
            })(t, i / 2, s / 2),
            a = (function (t, e, i) {
              const { enableBorderRadius: s } = t.getProps(['enableBorderRadius']),
                o = t.options.borderRadius,
                a = pe(o),
                r = Math.min(e, i),
                l = t.borderSkipped,
                h = s || n(o);
              return {
                topLeft: Dn(!h || l.top || l.left, a.topLeft, 0, r),
                topRight: Dn(!h || l.top || l.right, a.topRight, 0, r),
                bottomLeft: Dn(!h || l.bottom || l.left, a.bottomLeft, 0, r),
                bottomRight: Dn(!h || l.bottom || l.right, a.bottomRight, 0, r),
              };
            })(t, i / 2, s / 2);
          return {
            outer: { x: e.left, y: e.top, w: i, h: s, radius: a },
            inner: {
              x: e.left + o.l,
              y: e.top + o.t,
              w: i - o.l - o.r,
              h: s - o.t - o.b,
              radius: {
                topLeft: Math.max(0, a.topLeft - Math.max(o.t, o.l)),
                topRight: Math.max(0, a.topRight - Math.max(o.t, o.r)),
                bottomLeft: Math.max(0, a.bottomLeft - Math.max(o.b, o.l)),
                bottomRight: Math.max(0, a.bottomRight - Math.max(o.b, o.r)),
              },
            },
          };
        })(this),
        r = (l = a.radius).topLeft || l.topRight || l.bottomLeft || l.bottomRight ? le : Fn;
      var l;
      t.save(),
        (a.w === o.w && a.h === o.h) ||
          (t.beginPath(),
          r(t, On(a, e, o)),
          t.clip(),
          r(t, On(o, -e, a)),
          (t.fillStyle = i),
          t.fill('evenodd')),
        t.beginPath(),
        r(t, On(o, e)),
        (t.fillStyle = s),
        t.fill(),
        t.restore();
    }
    inRange(t, e, i) {
      return Pn(this, t, e, i);
    }
    inXRange(t, e) {
      return Pn(this, t, null, e);
    }
    inYRange(t, e) {
      return Pn(this, null, t, e);
    }
    getCenterPoint(t) {
      const {
        x: e,
        y: i,
        base: s,
        horizontal: n,
      } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
      return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 };
    }
    getRange(t) {
      return 'x' === t ? this.width / 2 : this.height / 2;
    }
  }
  (Tn.id = 'bar'),
    (Tn.defaults = {
      borderSkipped: 'start',
      borderWidth: 0,
      borderRadius: 0,
      inflateAmount: 'auto',
      pointStyle: void 0,
    }),
    (Tn.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
  var Bn = Object.freeze({
    __proto__: null,
    ArcElement: bn,
    LineElement: Sn,
    PointElement: Cn,
    BarElement: Tn,
  });
  function Rn(t) {
    if (t._decimated) {
      const e = t._data;
      delete t._decimated, delete t._data, Object.defineProperty(t, 'data', { value: e });
    }
  }
  function In(t) {
    t.data.datasets.forEach((t) => {
      Rn(t);
    });
  }
  var Ln = {
    id: 'decimation',
    defaults: { algorithm: 'min-max', enabled: !1 },
    beforeElementsUpdate: (t, e, s) => {
      if (!s.enabled) return void In(t);
      const n = t.width;
      t.data.datasets.forEach((e, o) => {
        const { _data: a, indexAxis: r } = e,
          l = t.getDatasetMeta(o),
          h = a || e.data;
        if ('y' === be([r, t.options.indexAxis])) return;
        if (!l.controller.supportsDecimation) return;
        const u = t.scales[l.xAxisID];
        if ('linear' !== u.type && 'time' !== u.type) return;
        if (t.options.parsing) return;
        let c,
          { start: d, count: f } = (function (t, e) {
            const i = e.length;
            let s,
              n = 0;
            const { iScale: o } = t,
              { min: a, max: r, minDefined: l, maxDefined: h } = o.getUserBounds();
            return (
              l && (n = Y(K(e, o.axis, a).lo, 0, i - 1)),
              (s = h ? Y(K(e, o.axis, r).hi + 1, n, i) - n : i - n),
              { start: n, count: s }
            );
          })(l, h);
        if (f <= (s.threshold || 4 * n)) Rn(e);
        else {
          switch (
            (i(a) &&
              ((e._data = h),
              delete e.data,
              Object.defineProperty(e, 'data', {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return this._decimated;
                },
                set: function (t) {
                  this._data = t;
                },
              })),
            s.algorithm)
          ) {
            case 'lttb':
              c = (function (t, e, i, s, n) {
                const o = n.samples || s;
                if (o >= i) return t.slice(e, e + i);
                const a = [],
                  r = (i - 2) / (o - 2);
                let l = 0;
                const h = e + i - 1;
                let u,
                  c,
                  d,
                  f,
                  p,
                  g = e;
                for (a[l++] = t[g], u = 0; u < o - 2; u++) {
                  let s,
                    n = 0,
                    o = 0;
                  const h = Math.floor((u + 1) * r) + 1 + e,
                    m = Math.min(Math.floor((u + 2) * r) + 1, i) + e,
                    b = m - h;
                  for (s = h; s < m; s++) (n += t[s].x), (o += t[s].y);
                  (n /= b), (o /= b);
                  const v = Math.floor(u * r) + 1 + e,
                    x = Math.min(Math.floor((u + 1) * r) + 1, i) + e,
                    { x: y, y: _ } = t[g];
                  for (d = f = -1, s = v; s < x; s++)
                    (f = 0.5 * Math.abs((y - n) * (t[s].y - _) - (y - t[s].x) * (o - _))),
                      f > d && ((d = f), (c = t[s]), (p = s));
                  (a[l++] = c), (g = p);
                }
                return (a[l++] = t[h]), a;
              })(h, d, f, n, s);
              break;
            case 'min-max':
              c = (function (t, e, s, n) {
                let o,
                  a,
                  r,
                  l,
                  h,
                  u,
                  c,
                  d,
                  f,
                  p,
                  g = 0,
                  m = 0;
                const b = [],
                  v = e + s - 1,
                  x = t[e].x,
                  y = t[v].x - x;
                for (o = e; o < e + s; ++o) {
                  (a = t[o]), (r = ((a.x - x) / y) * n), (l = a.y);
                  const e = 0 | r;
                  if (e === h)
                    l < f ? ((f = l), (u = o)) : l > p && ((p = l), (c = o)),
                      (g = (m * g + a.x) / ++m);
                  else {
                    const s = o - 1;
                    if (!i(u) && !i(c)) {
                      const e = Math.min(u, c),
                        i = Math.max(u, c);
                      e !== d && e !== s && b.push({ ...t[e], x: g }),
                        i !== d && i !== s && b.push({ ...t[i], x: g });
                    }
                    o > 0 && s !== d && b.push(t[s]),
                      b.push(a),
                      (h = e),
                      (m = 0),
                      (f = p = l),
                      (u = c = d = o);
                  }
                }
                return b;
              })(h, d, f, n);
              break;
            default:
              throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`);
          }
          e._decimated = c;
        }
      });
    },
    destroy(t) {
      In(t);
    },
  };
  function Vn(t, e, i, s) {
    if (s) return;
    let n = e[t],
      o = i[t];
    return 'angle' === t && ((n = $(n)), (o = $(o))), { property: t, start: n, end: o };
  }
  function zn(t, e, i) {
    for (; e > t; e--) {
      const t = i[e];
      if (!isNaN(t.x) && !isNaN(t.y)) break;
    }
    return e;
  }
  function jn(t, e, i, s) {
    return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
  }
  function Nn(t, e) {
    let i = [],
      n = !1;
    return (
      s(t)
        ? ((n = !0), (i = t))
        : (i = (function (t, e) {
            const { x: i = null, y: s = null } = t || {},
              n = e.points,
              o = [];
            return (
              e.segments.forEach(({ start: t, end: e }) => {
                e = zn(t, e, n);
                const a = n[t],
                  r = n[e];
                null !== s
                  ? (o.push({ x: a.x, y: s }), o.push({ x: r.x, y: s }))
                  : null !== i && (o.push({ x: i, y: a.y }), o.push({ x: i, y: r.y }));
              }),
              o
            );
          })(t, e)),
      i.length ? new Sn({ points: i, options: { tension: 0 }, _loop: n, _fullLoop: n }) : null
    );
  }
  function Wn(t) {
    return t && !1 !== t.fill;
  }
  function Hn(t, e, i) {
    let s = t[e].fill;
    const n = [e];
    let a;
    if (!i) return s;
    for (; !1 !== s && -1 === n.indexOf(s); ) {
      if (!o(s)) return s;
      if (((a = t[s]), !a)) return !1;
      if (a.visible) return s;
      n.push(s), (s = a.fill);
    }
    return !1;
  }
  function $n(t, e, i) {
    const s = (function (t) {
      const e = t.options,
        i = e.fill;
      let s = r(i && i.target, i);
      return (
        void 0 === s && (s = !!e.backgroundColor),
        !1 !== s && null !== s && (!0 === s ? 'origin' : s)
      );
    })(t);
    if (n(s)) return !isNaN(s.value) && s;
    let a = parseFloat(s);
    return o(a) && Math.floor(a) === a
      ? (function (t, e, i, s) {
          return ('-' !== t && '+' !== t) || (i = e + i), !(i === e || i < 0 || i >= s) && i;
        })(s[0], e, a, i)
      : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(s) >= 0 && s;
  }
  function Un(t, e, i) {
    const s = [];
    for (let n = 0; n < i.length; n++) {
      const o = i[n],
        { first: a, last: r, point: l } = Yn(o, e, 'x');
      if (!(!l || (a && r)))
        if (a) s.unshift(l);
        else if ((t.push(l), !r)) break;
    }
    t.push(...s);
  }
  function Yn(t, e, i) {
    const s = t.interpolate(e, i);
    if (!s) return {};
    const n = s[i],
      o = t.segments,
      a = t.points;
    let r = !1,
      l = !1;
    for (let t = 0; t < o.length; t++) {
      const e = o[t],
        s = a[e.start][i],
        h = a[e.end][i];
      if (q(n, s, h)) {
        (r = n === s), (l = n === h);
        break;
      }
    }
    return { first: r, last: l, point: s };
  }
  class qn {
    constructor(t) {
      (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
    }
    pathSegment(t, e, i) {
      const { x: s, y: n, radius: o } = this;
      return (e = e || { start: 0, end: S }), t.arc(s, n, o, e.end, e.start, !0), !i.bounds;
    }
    interpolate(t) {
      const { x: e, y: i, radius: s } = this,
        n = t.angle;
      return { x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n };
    }
  }
  function Xn(t, e, i) {
    const s = (function (t) {
        const { chart: e, fill: i, line: s } = t;
        if (o(i))
          return (function (t, e) {
            const i = t.getDatasetMeta(e);
            return i && t.isDatasetVisible(e) ? i.dataset : null;
          })(e, i);
        if ('stack' === i)
          return (function (t) {
            const { scale: e, index: i, line: s } = t,
              n = [],
              o = s.segments,
              a = s.points,
              r = (function (t, e) {
                const i = [],
                  s = t.getMatchingVisibleMetas('line');
                for (let t = 0; t < s.length; t++) {
                  const n = s[t];
                  if (n.index === e) break;
                  n.hidden || i.unshift(n.dataset);
                }
                return i;
              })(e, i);
            r.push(Nn({ x: null, y: e.bottom }, s));
            for (let t = 0; t < o.length; t++) {
              const e = o[t];
              for (let t = e.start; t <= e.end; t++) Un(n, a[t], r);
            }
            return new Sn({ points: n, options: {} });
          })(t);
        if ('shape' === i) return !0;
        const a = (function (t) {
          return (t.scale || {}).getPointPositionForValue
            ? (function (t) {
                const { scale: e, fill: i } = t,
                  s = e.options,
                  o = e.getLabels().length,
                  a = s.reverse ? e.max : e.min,
                  r = (function (t, e, i) {
                    let s;
                    return (
                      (s =
                        'start' === t
                          ? i
                          : 'end' === t
                            ? e.options.reverse
                              ? e.min
                              : e.max
                            : n(t)
                              ? t.value
                              : e.getBaseValue()),
                      s
                    );
                  })(i, e, a),
                  l = [];
                if (s.grid.circular) {
                  const t = e.getPointPositionForValue(0, a);
                  return new qn({ x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(r) });
                }
                for (let t = 0; t < o; ++t) l.push(e.getPointPositionForValue(t, r));
                return l;
              })(t)
            : (function (t) {
                const { scale: e = {}, fill: i } = t,
                  s = (function (t, e) {
                    let i = null;
                    return (
                      'start' === t
                        ? (i = e.bottom)
                        : 'end' === t
                          ? (i = e.top)
                          : n(t)
                            ? (i = e.getPixelForValue(t.value))
                            : e.getBasePixel && (i = e.getBasePixel()),
                      i
                    );
                  })(i, e);
                if (o(s)) {
                  const t = e.isHorizontal();
                  return { x: t ? s : null, y: t ? null : s };
                }
                return null;
              })(t);
        })(t);
        return a instanceof qn ? a : Nn(a, s);
      })(e),
      { line: a, scale: r, axis: l } = e,
      h = a.options,
      u = h.fill,
      c = h.backgroundColor,
      { above: d = c, below: f = c } = u || {};
    s &&
      a.points.length &&
      (ie(t, i),
      (function (t, e) {
        const { line: i, target: s, above: n, below: o, area: a, scale: r } = e,
          l = i._loop ? 'angle' : e.axis;
        t.save(),
          'x' === l &&
            o !== n &&
            (Kn(t, s, a.top),
            Zn(t, { line: i, target: s, color: n, scale: r, property: l }),
            t.restore(),
            t.save(),
            Kn(t, s, a.bottom)),
          Zn(t, { line: i, target: s, color: o, scale: r, property: l }),
          t.restore();
      })(t, { line: a, target: s, above: d, below: f, area: i, scale: r, axis: l }),
      se(t));
  }
  function Kn(t, e, i) {
    const { segments: s, points: n } = e;
    let o = !0,
      a = !1;
    t.beginPath();
    for (const r of s) {
      const { start: s, end: l } = r,
        h = n[s],
        u = n[zn(s, l, n)];
      o ? (t.moveTo(h.x, h.y), (o = !1)) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)),
        (a = !!e.pathSegment(t, r, { move: a })),
        a ? t.closePath() : t.lineTo(u.x, i);
    }
    t.lineTo(e.first().x, i), t.closePath(), t.clip();
  }
  function Zn(t, e) {
    const { line: i, target: s, property: n, color: o, scale: a } = e,
      r = (function (t, e, i) {
        const s = t.segments,
          n = t.points,
          o = e.points,
          a = [];
        for (const t of s) {
          let { start: s, end: r } = t;
          r = zn(s, r, n);
          const l = Vn(i, n[s], n[r], t.loop);
          if (!e.segments) {
            a.push({ source: t, target: l, start: n[s], end: n[r] });
            continue;
          }
          const h = ri(e, l);
          for (const e of h) {
            const s = Vn(i, o[e.start], o[e.end], e.loop),
              r = ai(t, n, s);
            for (const t of r)
              a.push({
                source: t,
                target: e,
                start: { [i]: jn(l, s, 'start', Math.max) },
                end: { [i]: jn(l, s, 'end', Math.min) },
              });
          }
        }
        return a;
      })(i, s, n);
    for (const { source: e, target: l, start: h, end: u } of r) {
      const { style: { backgroundColor: r = o } = {} } = e,
        c = !0 !== s;
      t.save(), (t.fillStyle = r), Gn(t, a, c && Vn(n, h, u)), t.beginPath();
      const d = !!i.pathSegment(t, e);
      let f;
      if (c) {
        d ? t.closePath() : Jn(t, s, u, n);
        const e = !!s.pathSegment(t, l, { move: d, reverse: !0 });
        (f = d && e), f || Jn(t, s, h, n);
      }
      t.closePath(), t.fill(f ? 'evenodd' : 'nonzero'), t.restore();
    }
  }
  function Gn(t, e, i) {
    const { top: s, bottom: n } = e.chart.chartArea,
      { property: o, start: a, end: r } = i || {};
    'x' === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip());
  }
  function Jn(t, e, i, s) {
    const n = e.interpolate(i, s);
    n && t.lineTo(n.x, n.y);
  }
  var Qn = {
    id: 'filler',
    afterDatasetsUpdate(t, e, i) {
      const s = (t.data.datasets || []).length,
        n = [];
      let o, a, r, l;
      for (a = 0; a < s; ++a)
        (o = t.getDatasetMeta(a)),
          (r = o.dataset),
          (l = null),
          r &&
            r.options &&
            r instanceof Sn &&
            (l = {
              visible: t.isDatasetVisible(a),
              index: a,
              fill: $n(r, a, s),
              chart: t,
              axis: o.controller.options.indexAxis,
              scale: o.vScale,
              line: r,
            }),
          (o.$filler = l),
          n.push(l);
      for (a = 0; a < s; ++a) (l = n[a]), l && !1 !== l.fill && (l.fill = Hn(n, a, i.propagate));
    },
    beforeDraw(t, e, i) {
      const s = 'beforeDraw' === i.drawTime,
        n = t.getSortedVisibleDatasetMetas(),
        o = t.chartArea;
      for (let e = n.length - 1; e >= 0; --e) {
        const i = n[e].$filler;
        i && (i.line.updateControlPoints(o, i.axis), s && i.fill && Xn(t.ctx, i, o));
      }
    },
    beforeDatasetsDraw(t, e, i) {
      if ('beforeDatasetsDraw' !== i.drawTime) return;
      const s = t.getSortedVisibleDatasetMetas();
      for (let e = s.length - 1; e >= 0; --e) {
        const i = s[e].$filler;
        Wn(i) && Xn(t.ctx, i, t.chartArea);
      }
    },
    beforeDatasetDraw(t, e, i) {
      const s = e.meta.$filler;
      Wn(s) && 'beforeDatasetDraw' === i.drawTime && Xn(t.ctx, s, t.chartArea);
    },
    defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
  };
  const to = (t, e) => {
    let { boxHeight: i = e, boxWidth: s = e } = t;
    return (
      t.usePointStyle && ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
      { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
    );
  };
  class eo extends Hi {
    constructor(t) {
      super(),
        (this._added = !1),
        (this.legendHitBoxes = []),
        (this._hoveredItem = null),
        (this.doughnutMode = !1),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this.legendItems = void 0),
        (this.columnSizes = void 0),
        (this.lineWidths = void 0),
        (this.maxHeight = void 0),
        (this.maxWidth = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this._margins = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, e, i) {
      (this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = i),
        this.setDimensions(),
        this.buildLabels(),
        this.fit();
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth),
          (this.left = this._margins.left),
          (this.right = this.width))
        : ((this.height = this.maxHeight),
          (this.top = this._margins.top),
          (this.bottom = this.height));
    }
    buildLabels() {
      const t = this.options.labels || {};
      let e = h(t.generateLabels, [this.chart], this) || [];
      t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
        t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
        this.options.reverse && e.reverse(),
        (this.legendItems = e);
    }
    fit() {
      const { options: t, ctx: e } = this;
      if (!t.display) return void (this.width = this.height = 0);
      const i = t.labels,
        s = me(i.font),
        n = s.size,
        o = this._computeTitleHeight(),
        { boxWidth: a, itemHeight: r } = to(i, n);
      let l, h;
      (e.font = s.string),
        this.isHorizontal()
          ? ((l = this.maxWidth), (h = this._fitRows(o, n, a, r) + 10))
          : ((h = this.maxHeight), (l = this._fitCols(o, n, a, r) + 10)),
        (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
        (this.height = Math.min(h, t.maxHeight || this.maxHeight));
    }
    _fitRows(t, e, i, s) {
      const {
          ctx: n,
          maxWidth: o,
          options: {
            labels: { padding: a },
          },
        } = this,
        r = (this.legendHitBoxes = []),
        l = (this.lineWidths = [0]),
        h = s + a;
      let u = t;
      (n.textAlign = 'left'), (n.textBaseline = 'middle');
      let c = -1,
        d = -h;
      return (
        this.legendItems.forEach((t, f) => {
          const p = i + e / 2 + n.measureText(t.text).width;
          (0 === f || l[l.length - 1] + p + 2 * a > o) &&
            ((u += h), (l[l.length - (f > 0 ? 0 : 1)] = 0), (d += h), c++),
            (r[f] = { left: 0, top: d, row: c, width: p, height: s }),
            (l[l.length - 1] += p + a);
        }),
        u
      );
    }
    _fitCols(t, e, i, s) {
      const {
          ctx: n,
          maxHeight: o,
          options: {
            labels: { padding: a },
          },
        } = this,
        r = (this.legendHitBoxes = []),
        l = (this.columnSizes = []),
        h = o - t;
      let u = a,
        c = 0,
        d = 0,
        f = 0,
        p = 0;
      return (
        this.legendItems.forEach((t, o) => {
          const g = i + e / 2 + n.measureText(t.text).width;
          o > 0 &&
            d + s + 2 * a > h &&
            ((u += c + a), l.push({ width: c, height: d }), (f += c + a), p++, (c = d = 0)),
            (r[o] = { left: f, top: d, col: p, width: g, height: s }),
            (c = Math.max(c, g)),
            (d += s + a);
        }),
        (u += c),
        l.push({ width: c, height: d }),
        u
      );
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const t = this._computeTitleHeight(),
        {
          legendHitBoxes: e,
          options: {
            align: i,
            labels: { padding: s },
            rtl: n,
          },
        } = this,
        o = ei(n, this.left, this.width);
      if (this.isHorizontal()) {
        let n = 0,
          a = st(i, this.left + s, this.right - this.lineWidths[n]);
        for (const r of e)
          n !== r.row && ((n = r.row), (a = st(i, this.left + s, this.right - this.lineWidths[n]))),
            (r.top += this.top + t + s),
            (r.left = o.leftForLtr(o.x(a), r.width)),
            (a += r.width + s);
      } else {
        let n = 0,
          a = st(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
        for (const r of e)
          r.col !== n &&
            ((n = r.col), (a = st(i, this.top + t + s, this.bottom - this.columnSizes[n].height))),
            (r.top = a),
            (r.left += this.left + s),
            (r.left = o.leftForLtr(o.x(r.left), r.width)),
            (a += r.height + s);
      }
    }
    isHorizontal() {
      return 'top' === this.options.position || 'bottom' === this.options.position;
    }
    draw() {
      if (this.options.display) {
        const t = this.ctx;
        ie(t, this), this._draw(), se(t);
      }
    }
    _draw() {
      const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
        { align: n, labels: o } = t,
        a = Xt.color,
        l = ei(t.rtl, this.left, this.width),
        h = me(o.font),
        { color: u, padding: c } = o,
        d = h.size,
        f = d / 2;
      let p;
      this.drawTitle(),
        (s.textAlign = l.textAlign('left')),
        (s.textBaseline = 'middle'),
        (s.lineWidth = 0.5),
        (s.font = h.string);
      const { boxWidth: g, boxHeight: m, itemHeight: b } = to(o, d),
        v = this.isHorizontal(),
        x = this._computeTitleHeight();
      (p = v
        ? { x: st(n, this.left + c, this.right - i[0]), y: this.top + c + x, line: 0 }
        : { x: this.left + c, y: st(n, this.top + x + c, this.bottom - e[0].height), line: 0 }),
        ii(this.ctx, t.textDirection);
      const y = b + c;
      this.legendItems.forEach((_, k) => {
        (s.strokeStyle = _.fontColor || u), (s.fillStyle = _.fontColor || u);
        const w = s.measureText(_.text).width,
          M = l.textAlign(_.textAlign || (_.textAlign = o.textAlign)),
          S = g + f + w;
        let A = p.x,
          C = p.y;
        l.setWidth(this.width),
          v
            ? k > 0 &&
              A + S + c > this.right &&
              ((C = p.y += y), p.line++, (A = p.x = st(n, this.left + c, this.right - i[p.line])))
            : k > 0 &&
              C + y > this.bottom &&
              ((A = p.x = A + e[p.line].width + c),
              p.line++,
              (C = p.y = st(n, this.top + x + c, this.bottom - e[p.line].height))),
          (function (t, e, i) {
            if (isNaN(g) || g <= 0 || isNaN(m) || m < 0) return;
            s.save();
            const n = r(i.lineWidth, 1);
            if (
              ((s.fillStyle = r(i.fillStyle, a)),
              (s.lineCap = r(i.lineCap, 'butt')),
              (s.lineDashOffset = r(i.lineDashOffset, 0)),
              (s.lineJoin = r(i.lineJoin, 'miter')),
              (s.lineWidth = n),
              (s.strokeStyle = r(i.strokeStyle, a)),
              s.setLineDash(r(i.lineDash, [])),
              o.usePointStyle)
            ) {
              const a = {
                  radius: (m * Math.SQRT2) / 2,
                  pointStyle: i.pointStyle,
                  rotation: i.rotation,
                  borderWidth: n,
                },
                r = l.xPlus(t, g / 2);
              te(s, a, r, e + f, o.pointStyleWidth && g);
            } else {
              const o = e + Math.max((d - m) / 2, 0),
                a = l.leftForLtr(t, g),
                r = pe(i.borderRadius);
              s.beginPath(),
                Object.values(r).some((t) => 0 !== t)
                  ? le(s, { x: a, y: o, w: g, h: m, radius: r })
                  : s.rect(a, o, g, m),
                s.fill(),
                0 !== n && s.stroke();
            }
            s.restore();
          })(l.x(A), C, _),
          (A = ((t, e, i, s) =>
            t === (s ? 'left' : 'right') ? i : 'center' === t ? (e + i) / 2 : e)(
            M,
            A + g + f,
            v ? A + S : this.right,
            t.rtl,
          )),
          (function (t, e, i) {
            ae(s, i.text, t, e + b / 2, h, {
              strikethrough: i.hidden,
              textAlign: l.textAlign(i.textAlign),
            });
          })(l.x(A), C, _),
          v ? (p.x += S + c) : (p.y += y);
      }),
        si(this.ctx, t.textDirection);
    }
    drawTitle() {
      const t = this.options,
        e = t.title,
        i = me(e.font),
        s = ge(e.padding);
      if (!e.display) return;
      const n = ei(t.rtl, this.left, this.width),
        o = this.ctx,
        a = e.position,
        r = i.size / 2,
        l = s.top + r;
      let h,
        u = this.left,
        c = this.width;
      if (this.isHorizontal())
        (c = Math.max(...this.lineWidths)),
          (h = this.top + l),
          (u = st(t.align, u, this.right - c));
      else {
        const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
        h =
          l +
          st(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight());
      }
      const d = st(a, u, u + c);
      (o.textAlign = n.textAlign(it(a))),
        (o.textBaseline = 'middle'),
        (o.strokeStyle = e.color),
        (o.fillStyle = e.color),
        (o.font = i.string),
        ae(o, e.text, d, h, i);
    }
    _computeTitleHeight() {
      const t = this.options.title,
        e = me(t.font),
        i = ge(t.padding);
      return t.display ? e.lineHeight + i.height : 0;
    }
    _getLegendItemAt(t, e) {
      let i, s, n;
      if (q(t, this.left, this.right) && q(e, this.top, this.bottom))
        for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
          if (((s = n[i]), q(t, s.left, s.left + s.width) && q(e, s.top, s.top + s.height)))
            return this.legendItems[i];
      return null;
    }
    handleEvent(t) {
      const e = this.options;
      if (
        !(function (t, e) {
          return (
            !(('mousemove' !== t && 'mouseout' !== t) || (!e.onHover && !e.onLeave)) ||
            !(!e.onClick || ('click' !== t && 'mouseup' !== t))
          );
        })(t.type, e)
      )
        return;
      const i = this._getLegendItemAt(t.x, t.y);
      if ('mousemove' === t.type || 'mouseout' === t.type) {
        const o = this._hoveredItem,
          a =
            ((n = i),
            null !== (s = o) &&
              null !== n &&
              s.datasetIndex === n.datasetIndex &&
              s.index === n.index);
        o && !a && h(e.onLeave, [t, o, this], this),
          (this._hoveredItem = i),
          i && !a && h(e.onHover, [t, i, this], this);
      } else i && h(e.onClick, [t, i, this], this);
      var s, n;
    }
  }
  var io = {
    id: 'legend',
    _element: eo,
    start(t, e, i) {
      const s = (t.legend = new eo({ ctx: t.ctx, options: i, chart: t }));
      Ms.configure(t, s, i), Ms.addBox(t, s);
    },
    stop(t) {
      Ms.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, i) {
      const s = t.legend;
      Ms.configure(t, s, i), (s.options = i);
    },
    afterUpdate(t) {
      const e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: 'top',
      align: 'center',
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick(t, e, i) {
        const s = e.datasetIndex,
          n = i.chart;
        n.isDatasetVisible(s) ? (n.hide(s), (e.hidden = !0)) : (n.show(s), (e.hidden = !1));
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (t) => t.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(t) {
          const e = t.data.datasets,
            {
              labels: { usePointStyle: i, pointStyle: s, textAlign: n, color: o },
            } = t.legend.options;
          return t._getSortedDatasetMetas().map((t) => {
            const a = t.controller.getStyle(i ? 0 : void 0),
              r = ge(a.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: a.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: a.borderCapStyle,
              lineDash: a.borderDash,
              lineDashOffset: a.borderDashOffset,
              lineJoin: a.borderJoinStyle,
              lineWidth: (r.width + r.height) / 4,
              strokeStyle: a.borderColor,
              pointStyle: s || a.pointStyle,
              rotation: a.rotation,
              textAlign: n || a.textAlign,
              borderRadius: 0,
              datasetIndex: t.index,
            };
          }, this);
        },
      },
      title: { color: (t) => t.chart.options.color, display: !1, position: 'center', text: '' },
    },
    descriptors: {
      _scriptable: (t) => !t.startsWith('on'),
      labels: { _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t) },
    },
  };
  class so extends Hi {
    constructor(t) {
      super(),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this._padding = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, e) {
      const i = this.options;
      if (((this.left = 0), (this.top = 0), !i.display))
        return void (this.width = this.height = this.right = this.bottom = 0);
      (this.width = this.right = t), (this.height = this.bottom = e);
      const n = s(i.text) ? i.text.length : 1;
      this._padding = ge(i.padding);
      const o = n * me(i.font).lineHeight + this._padding.height;
      this.isHorizontal() ? (this.height = o) : (this.width = o);
    }
    isHorizontal() {
      const t = this.options.position;
      return 'top' === t || 'bottom' === t;
    }
    _drawArgs(t) {
      const { top: e, left: i, bottom: s, right: n, options: o } = this,
        a = o.align;
      let r,
        l,
        h,
        u = 0;
      return (
        this.isHorizontal()
          ? ((l = st(a, i, n)), (h = e + t), (r = n - i))
          : ('left' === o.position
              ? ((l = i + t), (h = st(a, s, e)), (u = -0.5 * M))
              : ((l = n - t), (h = st(a, e, s)), (u = 0.5 * M)),
            (r = s - e)),
        { titleX: l, titleY: h, maxWidth: r, rotation: u }
      );
    }
    draw() {
      const t = this.ctx,
        e = this.options;
      if (!e.display) return;
      const i = me(e.font),
        s = i.lineHeight / 2 + this._padding.top,
        { titleX: n, titleY: o, maxWidth: a, rotation: r } = this._drawArgs(s);
      ae(t, e.text, 0, 0, i, {
        color: e.color,
        maxWidth: a,
        rotation: r,
        textAlign: it(e.align),
        textBaseline: 'middle',
        translation: [n, o],
      });
    }
  }
  var no = {
    id: 'title',
    _element: so,
    start(t, e, i) {
      !(function (t, e) {
        const i = new so({ ctx: t.ctx, options: e, chart: t });
        Ms.configure(t, i, e), Ms.addBox(t, i), (t.titleBlock = i);
      })(t, i);
    },
    stop(t) {
      const e = t.titleBlock;
      Ms.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, i) {
      const s = t.titleBlock;
      Ms.configure(t, s, i), (s.options = i);
    },
    defaults: {
      align: 'center',
      display: !1,
      font: { weight: 'bold' },
      fullSize: !0,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2e3,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const oo = new WeakMap();
  var ao = {
    id: 'subtitle',
    start(t, e, i) {
      const s = new so({ ctx: t.ctx, options: i, chart: t });
      Ms.configure(t, s, i), Ms.addBox(t, s), oo.set(t, s);
    },
    stop(t) {
      Ms.removeBox(t, oo.get(t)), oo.delete(t);
    },
    beforeUpdate(t, e, i) {
      const s = oo.get(t);
      Ms.configure(t, s, i), (s.options = i);
    },
    defaults: {
      align: 'center',
      display: !1,
      font: { weight: 'normal' },
      fullSize: !0,
      padding: 0,
      position: 'top',
      text: '',
      weight: 1500,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const ro = {
    average(t) {
      if (!t.length) return !1;
      let e,
        i,
        s = 0,
        n = 0,
        o = 0;
      for (e = 0, i = t.length; e < i; ++e) {
        const i = t[e].element;
        if (i && i.hasValue()) {
          const t = i.tooltipPosition();
          (s += t.x), (n += t.y), ++o;
        }
      }
      return { x: s / o, y: n / o };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let i,
        s,
        n,
        o = e.x,
        a = e.y,
        r = Number.POSITIVE_INFINITY;
      for (i = 0, s = t.length; i < s; ++i) {
        const s = t[i].element;
        if (s && s.hasValue()) {
          const t = W(e, s.getCenterPoint());
          t < r && ((r = t), (n = s));
        }
      }
      if (n) {
        const t = n.tooltipPosition();
        (o = t.x), (a = t.y);
      }
      return { x: o, y: a };
    },
  };
  function lo(t, e) {
    return e && (s(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function ho(t) {
    return ('string' == typeof t || t instanceof String) && t.indexOf('\n') > -1
      ? t.split('\n')
      : t;
  }
  function uo(t, e) {
    const { element: i, datasetIndex: s, index: n } = e,
      o = t.getDatasetMeta(s).controller,
      { label: a, value: r } = o.getLabelAndValue(n);
    return {
      chart: t,
      label: a,
      parsed: o.getParsed(n),
      raw: t.data.datasets[s].data[n],
      formattedValue: r,
      dataset: o.getDataset(),
      dataIndex: n,
      datasetIndex: s,
      element: i,
    };
  }
  function co(t, e) {
    const i = t.chart.ctx,
      { body: s, footer: n, title: o } = t,
      { boxWidth: a, boxHeight: r } = e,
      l = me(e.bodyFont),
      h = me(e.titleFont),
      c = me(e.footerFont),
      d = o.length,
      f = n.length,
      p = s.length,
      g = ge(e.padding);
    let m = g.height,
      b = 0,
      v = s.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
    (v += t.beforeBody.length + t.afterBody.length),
      d && (m += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
      v &&
        (m +=
          p * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) +
          (v - p) * l.lineHeight +
          (v - 1) * e.bodySpacing),
      f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing);
    let x = 0;
    const y = function (t) {
      b = Math.max(b, i.measureText(t).width + x);
    };
    return (
      i.save(),
      (i.font = h.string),
      u(t.title, y),
      (i.font = l.string),
      u(t.beforeBody.concat(t.afterBody), y),
      (x = e.displayColors ? a + 2 + e.boxPadding : 0),
      u(s, (t) => {
        u(t.before, y), u(t.lines, y), u(t.after, y);
      }),
      (x = 0),
      (i.font = c.string),
      u(t.footer, y),
      i.restore(),
      (b += g.width),
      { width: b, height: m }
    );
  }
  function fo(t, e, i, s) {
    const { x: n, width: o } = i,
      {
        width: a,
        chartArea: { left: r, right: l },
      } = t;
    let h = 'center';
    return (
      'center' === s
        ? (h = n <= (r + l) / 2 ? 'left' : 'right')
        : n <= o / 2
          ? (h = 'left')
          : n >= a - o / 2 && (h = 'right'),
      (function (t, e, i, s) {
        const { x: n, width: o } = s,
          a = i.caretSize + i.caretPadding;
        return ('left' === t && n + o + a > e.width) || ('right' === t && n - o - a < 0) || void 0;
      })(h, t, e, i) && (h = 'center'),
      h
    );
  }
  function po(t, e, i) {
    const s =
      i.yAlign ||
      e.yAlign ||
      (function (t, e) {
        const { y: i, height: s } = e;
        return i < s / 2 ? 'top' : i > t.height - s / 2 ? 'bottom' : 'center';
      })(t, i);
    return { xAlign: i.xAlign || e.xAlign || fo(t, e, i, s), yAlign: s };
  }
  function go(t, e, i, s) {
    const { caretSize: n, caretPadding: o, cornerRadius: a } = t,
      { xAlign: r, yAlign: l } = i,
      h = n + o,
      { topLeft: u, topRight: c, bottomLeft: d, bottomRight: f } = pe(a);
    let p = (function (t, e) {
      let { x: i, width: s } = t;
      return 'right' === e ? (i -= s) : 'center' === e && (i -= s / 2), i;
    })(e, r);
    const g = (function (t, e, i) {
      let { y: s, height: n } = t;
      return 'top' === e ? (s += i) : (s -= 'bottom' === e ? n + i : n / 2), s;
    })(e, l, h);
    return (
      'center' === l
        ? 'left' === r
          ? (p += h)
          : 'right' === r && (p -= h)
        : 'left' === r
          ? (p -= Math.max(u, d) + n)
          : 'right' === r && (p += Math.max(c, f) + n),
      { x: Y(p, 0, s.width - e.width), y: Y(g, 0, s.height - e.height) }
    );
  }
  function mo(t, e, i) {
    const s = ge(i.padding);
    return 'center' === e
      ? t.x + t.width / 2
      : 'right' === e
        ? t.x + t.width - s.right
        : t.x + s.left;
  }
  function bo(t) {
    return lo([], ho(t));
  }
  function vo(t, e) {
    const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return i ? t.override(i) : t;
  }
  class xo extends Hi {
    constructor(t) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = t.chart || t._chart),
        (this._chart = this.chart),
        (this.options = t.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0);
    }
    initialize(t) {
      (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
    }
    _resolveAnimations() {
      const t = this._cachedAnimations;
      if (t) return t;
      const e = this.chart,
        i = this.options.setContext(this.getContext()),
        s = i.enabled && e.options.animation && i.animations,
        n = new gi(this.chart, s);
      return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
    }
    getContext() {
      return (
        this.$context ||
        (this.$context =
          (this,
          ve(this.chart.getContext(), {
            tooltip: this,
            tooltipItems: this._tooltipItems,
            type: 'tooltip',
          })))
      );
    }
    getTitle(t, e) {
      const { callbacks: i } = e,
        s = i.beforeTitle.apply(this, [t]),
        n = i.title.apply(this, [t]),
        o = i.afterTitle.apply(this, [t]);
      let a = [];
      return (a = lo(a, ho(s))), (a = lo(a, ho(n))), (a = lo(a, ho(o))), a;
    }
    getBeforeBody(t, e) {
      return bo(e.callbacks.beforeBody.apply(this, [t]));
    }
    getBody(t, e) {
      const { callbacks: i } = e,
        s = [];
      return (
        u(t, (t) => {
          const e = { before: [], lines: [], after: [] },
            n = vo(i, t);
          lo(e.before, ho(n.beforeLabel.call(this, t))),
            lo(e.lines, n.label.call(this, t)),
            lo(e.after, ho(n.afterLabel.call(this, t))),
            s.push(e);
        }),
        s
      );
    }
    getAfterBody(t, e) {
      return bo(e.callbacks.afterBody.apply(this, [t]));
    }
    getFooter(t, e) {
      const { callbacks: i } = e,
        s = i.beforeFooter.apply(this, [t]),
        n = i.footer.apply(this, [t]),
        o = i.afterFooter.apply(this, [t]);
      let a = [];
      return (a = lo(a, ho(s))), (a = lo(a, ho(n))), (a = lo(a, ho(o))), a;
    }
    _createItems(t) {
      const e = this._active,
        i = this.chart.data,
        s = [],
        n = [],
        o = [];
      let a,
        r,
        l = [];
      for (a = 0, r = e.length; a < r; ++a) l.push(uo(this.chart, e[a]));
      return (
        t.filter && (l = l.filter((e, s, n) => t.filter(e, s, n, i))),
        t.itemSort && (l = l.sort((e, s) => t.itemSort(e, s, i))),
        u(l, (e) => {
          const i = vo(t.callbacks, e);
          s.push(i.labelColor.call(this, e)),
            n.push(i.labelPointStyle.call(this, e)),
            o.push(i.labelTextColor.call(this, e));
        }),
        (this.labelColors = s),
        (this.labelPointStyles = n),
        (this.labelTextColors = o),
        (this.dataPoints = l),
        l
      );
    }
    update(t, e) {
      const i = this.options.setContext(this.getContext()),
        s = this._active;
      let n,
        o = [];
      if (s.length) {
        const t = ro[i.position].call(this, s, this._eventPosition);
        (o = this._createItems(i)),
          (this.title = this.getTitle(o, i)),
          (this.beforeBody = this.getBeforeBody(o, i)),
          (this.body = this.getBody(o, i)),
          (this.afterBody = this.getAfterBody(o, i)),
          (this.footer = this.getFooter(o, i));
        const e = (this._size = co(this, i)),
          a = Object.assign({}, t, e),
          r = po(this.chart, i, a),
          l = go(i, a, r, this.chart);
        (this.xAlign = r.xAlign),
          (this.yAlign = r.yAlign),
          (n = {
            opacity: 1,
            x: l.x,
            y: l.y,
            width: e.width,
            height: e.height,
            caretX: t.x,
            caretY: t.y,
          });
      } else 0 !== this.opacity && (n = { opacity: 0 });
      (this._tooltipItems = o),
        (this.$context = void 0),
        n && this._resolveAnimations().update(this, n),
        t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e });
    }
    drawCaret(t, e, i, s) {
      const n = this.getCaretPosition(t, i, s);
      e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
    }
    getCaretPosition(t, e, i) {
      const { xAlign: s, yAlign: n } = this,
        { caretSize: o, cornerRadius: a } = i,
        { topLeft: r, topRight: l, bottomLeft: h, bottomRight: u } = pe(a),
        { x: c, y: d } = t,
        { width: f, height: p } = e;
      let g, m, b, v, x, y;
      return (
        'center' === n
          ? ((x = d + p / 2),
            'left' === s
              ? ((g = c), (m = g - o), (v = x + o), (y = x - o))
              : ((g = c + f), (m = g + o), (v = x - o), (y = x + o)),
            (b = g))
          : ((m =
              'left' === s
                ? c + Math.max(r, h) + o
                : 'right' === s
                  ? c + f - Math.max(l, u) - o
                  : this.caretX),
            'top' === n
              ? ((v = d), (x = v - o), (g = m - o), (b = m + o))
              : ((v = d + p), (x = v + o), (g = m + o), (b = m - o)),
            (y = v)),
        { x1: g, x2: m, x3: b, y1: v, y2: x, y3: y }
      );
    }
    drawTitle(t, e, i) {
      const s = this.title,
        n = s.length;
      let o, a, r;
      if (n) {
        const l = ei(i.rtl, this.x, this.width);
        for (
          t.x = mo(this, i.titleAlign, i),
            e.textAlign = l.textAlign(i.titleAlign),
            e.textBaseline = 'middle',
            o = me(i.titleFont),
            a = i.titleSpacing,
            e.fillStyle = i.titleColor,
            e.font = o.string,
            r = 0;
          r < n;
          ++r
        )
          e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + a),
            r + 1 === n && (t.y += i.titleMarginBottom - a);
      }
    }
    _drawColorBox(t, e, i, s, o) {
      const a = this.labelColors[i],
        r = this.labelPointStyles[i],
        { boxHeight: l, boxWidth: h, boxPadding: u } = o,
        c = me(o.bodyFont),
        d = mo(this, 'left', o),
        f = s.x(d),
        p = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
        g = e.y + p;
      if (o.usePointStyle) {
        const e = {
            radius: Math.min(h, l) / 2,
            pointStyle: r.pointStyle,
            rotation: r.rotation,
            borderWidth: 1,
          },
          i = s.leftForLtr(f, h) + h / 2,
          n = g + l / 2;
        (t.strokeStyle = o.multiKeyBackground),
          (t.fillStyle = o.multiKeyBackground),
          Qt(t, e, i, n),
          (t.strokeStyle = a.borderColor),
          (t.fillStyle = a.backgroundColor),
          Qt(t, e, i, n);
      } else {
        (t.lineWidth = n(a.borderWidth)
          ? Math.max(...Object.values(a.borderWidth))
          : a.borderWidth || 1),
          (t.strokeStyle = a.borderColor),
          t.setLineDash(a.borderDash || []),
          (t.lineDashOffset = a.borderDashOffset || 0);
        const e = s.leftForLtr(f, h - u),
          i = s.leftForLtr(s.xPlus(f, 1), h - u - 2),
          r = pe(a.borderRadius);
        Object.values(r).some((t) => 0 !== t)
          ? (t.beginPath(),
            (t.fillStyle = o.multiKeyBackground),
            le(t, { x: e, y: g, w: h, h: l, radius: r }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = a.backgroundColor),
            t.beginPath(),
            le(t, { x: i, y: g + 1, w: h - 2, h: l - 2, radius: r }),
            t.fill())
          : ((t.fillStyle = o.multiKeyBackground),
            t.fillRect(e, g, h, l),
            t.strokeRect(e, g, h, l),
            (t.fillStyle = a.backgroundColor),
            t.fillRect(i, g + 1, h - 2, l - 2));
      }
      t.fillStyle = this.labelTextColors[i];
    }
    drawBody(t, e, i) {
      const { body: s } = this,
        {
          bodySpacing: n,
          bodyAlign: o,
          displayColors: a,
          boxHeight: r,
          boxWidth: l,
          boxPadding: h,
        } = i,
        c = me(i.bodyFont);
      let d = c.lineHeight,
        f = 0;
      const p = ei(i.rtl, this.x, this.width),
        g = function (i) {
          e.fillText(i, p.x(t.x + f), t.y + d / 2), (t.y += d + n);
        },
        m = p.textAlign(o);
      let b, v, x, y, _, k, w;
      for (
        e.textAlign = o,
          e.textBaseline = 'middle',
          e.font = c.string,
          t.x = mo(this, m, i),
          e.fillStyle = i.bodyColor,
          u(this.beforeBody, g),
          f = a && 'right' !== m ? ('center' === o ? l / 2 + h : l + 2 + h) : 0,
          y = 0,
          k = s.length;
        y < k;
        ++y
      ) {
        for (
          b = s[y],
            v = this.labelTextColors[y],
            e.fillStyle = v,
            u(b.before, g),
            x = b.lines,
            a && x.length && (this._drawColorBox(e, t, y, p, i), (d = Math.max(c.lineHeight, r))),
            _ = 0,
            w = x.length;
          _ < w;
          ++_
        )
          g(x[_]), (d = c.lineHeight);
        u(b.after, g);
      }
      (f = 0), (d = c.lineHeight), u(this.afterBody, g), (t.y -= n);
    }
    drawFooter(t, e, i) {
      const s = this.footer,
        n = s.length;
      let o, a;
      if (n) {
        const r = ei(i.rtl, this.x, this.width);
        for (
          t.x = mo(this, i.footerAlign, i),
            t.y += i.footerMarginTop,
            e.textAlign = r.textAlign(i.footerAlign),
            e.textBaseline = 'middle',
            o = me(i.footerFont),
            e.fillStyle = i.footerColor,
            e.font = o.string,
            a = 0;
          a < n;
          ++a
        )
          e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + i.footerSpacing);
      }
    }
    drawBackground(t, e, i, s) {
      const { xAlign: n, yAlign: o } = this,
        { x: a, y: r } = t,
        { width: l, height: h } = i,
        { topLeft: u, topRight: c, bottomLeft: d, bottomRight: f } = pe(s.cornerRadius);
      (e.fillStyle = s.backgroundColor),
        (e.strokeStyle = s.borderColor),
        (e.lineWidth = s.borderWidth),
        e.beginPath(),
        e.moveTo(a + u, r),
        'top' === o && this.drawCaret(t, e, i, s),
        e.lineTo(a + l - c, r),
        e.quadraticCurveTo(a + l, r, a + l, r + c),
        'center' === o && 'right' === n && this.drawCaret(t, e, i, s),
        e.lineTo(a + l, r + h - f),
        e.quadraticCurveTo(a + l, r + h, a + l - f, r + h),
        'bottom' === o && this.drawCaret(t, e, i, s),
        e.lineTo(a + d, r + h),
        e.quadraticCurveTo(a, r + h, a, r + h - d),
        'center' === o && 'left' === n && this.drawCaret(t, e, i, s),
        e.lineTo(a, r + u),
        e.quadraticCurveTo(a, r, a + u, r),
        e.closePath(),
        e.fill(),
        s.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
      const e = this.chart,
        i = this.$animations,
        s = i && i.x,
        n = i && i.y;
      if (s || n) {
        const i = ro[t.position].call(this, this._active, this._eventPosition);
        if (!i) return;
        const o = (this._size = co(this, t)),
          a = Object.assign({}, i, this._size),
          r = po(e, t, a),
          l = go(t, a, r, e);
        (s._to === l.x && n._to === l.y) ||
          ((this.xAlign = r.xAlign),
          (this.yAlign = r.yAlign),
          (this.width = o.width),
          (this.height = o.height),
          (this.caretX = i.x),
          (this.caretY = i.y),
          this._resolveAnimations().update(this, l));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t) {
      const e = this.options.setContext(this.getContext());
      let i = this.opacity;
      if (!i) return;
      this._updateAnimationTarget(e);
      const s = { width: this.width, height: this.height },
        n = { x: this.x, y: this.y };
      i = Math.abs(i) < 0.001 ? 0 : i;
      const o = ge(e.padding),
        a =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      e.enabled &&
        a &&
        (t.save(),
        (t.globalAlpha = i),
        this.drawBackground(n, t, s, e),
        ii(t, e.textDirection),
        (n.y += o.top),
        this.drawTitle(n, t, e),
        this.drawBody(n, t, e),
        this.drawFooter(n, t, e),
        si(t, e.textDirection),
        t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const i = this._active,
        s = t.map(({ datasetIndex: t, index: e }) => {
          const i = this.chart.getDatasetMeta(t);
          if (!i) throw new Error('Cannot find a dataset at index ' + t);
          return { datasetIndex: t, element: i.data[e], index: e };
        }),
        n = !c(i, s),
        o = this._positionChanged(s, e);
      (n || o) &&
        ((this._active = s),
        (this._eventPosition = e),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(t, e, i = !0) {
      if (e && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const s = this.options,
        n = this._active || [],
        o = this._getActiveElements(t, n, e, i),
        a = this._positionChanged(o, t),
        r = e || !c(o, n) || a;
      return (
        r &&
          ((this._active = o),
          (s.enabled || s.external) &&
            ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
        r
      );
    }
    _getActiveElements(t, e, i, s) {
      const n = this.options;
      if ('mouseout' === t.type) return [];
      if (!s) return e;
      const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
      return n.reverse && o.reverse(), o;
    }
    _positionChanged(t, e) {
      const { caretX: i, caretY: s, options: n } = this,
        o = ro[n.position].call(this, t, e);
      return !1 !== o && (i !== o.x || s !== o.y);
    }
  }
  xo.positioners = ro;
  var yo = {
      id: 'tooltip',
      _element: xo,
      positioners: ro,
      afterInit(t, e, i) {
        i && (t.tooltip = new xo({ chart: t, options: i }));
      },
      beforeUpdate(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      reset(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      afterDraw(t) {
        const e = t.tooltip;
        if (e && e._willRender()) {
          const i = { tooltip: e };
          if (!1 === t.notifyPlugins('beforeTooltipDraw', i)) return;
          e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', i);
        }
      },
      afterEvent(t, e) {
        if (t.tooltip) {
          const i = e.replay;
          t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
        }
      },
      defaults: {
        enabled: !0,
        external: null,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        titleFont: { weight: 'bold' },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: 'left',
        bodyColor: '#fff',
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: 'left',
        footerColor: '#fff',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: 'bold' },
        footerAlign: 'left',
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (t, e) => e.bodyFont.size,
        boxWidth: (t, e) => e.bodyFont.size,
        multiKeyBackground: '#fff',
        displayColors: !0,
        boxPadding: 0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        animation: { duration: 400, easing: 'easeOutQuart' },
        animations: {
          numbers: {
            type: 'number',
            properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
          },
          opacity: { easing: 'linear', duration: 200 },
        },
        callbacks: {
          beforeTitle: t,
          title(t) {
            if (t.length > 0) {
              const e = t[0],
                i = e.chart.data.labels,
                s = i ? i.length : 0;
              if (this && this.options && 'dataset' === this.options.mode)
                return e.dataset.label || '';
              if (e.label) return e.label;
              if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
            }
            return '';
          },
          afterTitle: t,
          beforeBody: t,
          beforeLabel: t,
          label(t) {
            if (this && this.options && 'dataset' === this.options.mode)
              return t.label + ': ' + t.formattedValue || t.formattedValue;
            let e = t.dataset.label || '';
            e && (e += ': ');
            const s = t.formattedValue;
            return i(s) || (e += s), e;
          },
          labelColor(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return {
              borderColor: e.borderColor,
              backgroundColor: e.backgroundColor,
              borderWidth: e.borderWidth,
              borderDash: e.borderDash,
              borderDashOffset: e.borderDashOffset,
              borderRadius: 0,
            };
          },
          labelTextColor() {
            return this.options.bodyColor;
          },
          labelPointStyle(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return { pointStyle: e.pointStyle, rotation: e.rotation };
          },
          afterLabel: t,
          afterBody: t,
          beforeFooter: t,
          footer: t,
          afterFooter: t,
        },
      },
      defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
      descriptors: {
        _scriptable: (t) => 'filter' !== t && 'itemSort' !== t && 'external' !== t,
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: 'animation' },
      },
      additionalOptionScopes: ['interaction'],
    },
    _o = Object.freeze({
      __proto__: null,
      Decimation: Ln,
      Filler: Qn,
      Legend: io,
      SubTitle: ao,
      Title: no,
      Tooltip: yo,
    });
  class ko extends Qi {
    constructor(t) {
      super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
    }
    init(t) {
      const e = this._addedLabels;
      if (e.length) {
        const t = this.getLabels();
        for (const { index: i, label: s } of e) t[i] === s && t.splice(i, 1);
        this._addedLabels = [];
      }
      super.init(t);
    }
    parse(t, e) {
      if (i(t)) return null;
      const s = this.getLabels();
      return ((t, e) => (null === t ? null : Y(Math.round(t), 0, e)))(
        (e =
          isFinite(e) && s[e] === t
            ? e
            : (function (t, e, i, s) {
                const n = t.indexOf(e);
                return -1 === n
                  ? ((t, e, i, s) => (
                      'string' == typeof e
                        ? ((i = t.push(e) - 1), s.unshift({ index: i, label: e }))
                        : isNaN(e) && (i = null),
                      i
                    ))(t, e, i, s)
                  : n !== t.lastIndexOf(e)
                    ? i
                    : n;
              })(s, t, r(e, t), this._addedLabels)),
        s.length - 1,
      );
    }
    determineDataLimits() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let { min: i, max: s } = this.getMinMax(!0);
      'ticks' === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)),
        (this.min = i),
        (this.max = s);
    }
    buildTicks() {
      const t = this.min,
        e = this.max,
        i = this.options.offset,
        s = [];
      let n = this.getLabels();
      (n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
        (this._valueRange = Math.max(n.length - (i ? 0 : 1), 1)),
        (this._startValue = this.min - (i ? 0.5 : 0));
      for (let i = t; i <= e; i++) s.push({ value: i });
      return s;
    }
    getLabelForValue(t) {
      const e = this.getLabels();
      return t >= 0 && t < e.length ? e[t] : t;
    }
    configure() {
      super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t) {
      return (
        'number' != typeof t && (t = this.parse(t)),
        null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
      );
    }
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getValueForPixel(t) {
      return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
    }
    getBasePixel() {
      return this.bottom;
    }
  }
  function wo(t, e, { horizontal: i, minRotation: s }) {
    const n = V(s),
      o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
      a = 0.75 * e * ('' + t).length;
    return Math.min(e / o, a);
  }
  (ko.id = 'category'), (ko.defaults = { ticks: { callback: ko.prototype.getLabelForValue } });
  class Mo extends Qi {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      return i(t) || (('number' == typeof t || t instanceof Number) && !isFinite(+t)) ? null : +t;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t } = this.options,
        { minDefined: e, maxDefined: i } = this.getUserBounds();
      let { min: s, max: n } = this;
      const o = (t) => (s = e ? s : t),
        a = (t) => (n = i ? n : t);
      if (t) {
        const t = T(s),
          e = T(n);
        t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
      }
      if (s === n) {
        let e = 1;
        (n >= Number.MAX_SAFE_INTEGER || s <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(0.05 * n)),
          a(n + e),
          t || o(s - e);
      }
      (this.min = s), (this.max = n);
    }
    getTickLimit() {
      const t = this.options.ticks;
      let e,
        { maxTicksLimit: i, stepSize: s } = t;
      return (
        s
          ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
            e > 1e3 &&
              (console.warn(
                `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`,
              ),
              (e = 1e3)))
          : ((e = this.computeTickLimit()), (i = i || 11)),
        i && (e = Math.min(i, e)),
        e
      );
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this.options,
        e = t.ticks;
      let s = this.getTickLimit();
      s = Math.max(2, s);
      const n = (function (t, e) {
        const s = [],
          {
            bounds: n,
            step: o,
            min: a,
            max: r,
            precision: l,
            count: h,
            maxTicks: u,
            maxDigits: c,
            includeBounds: d,
          } = t,
          f = o || 1,
          p = u - 1,
          { min: g, max: m } = e,
          b = !i(a),
          v = !i(r),
          x = !i(h),
          y = (m - g) / (c + 1);
        let _,
          k,
          w,
          M,
          S = B((m - g) / p / f) * f;
        if (S < 1e-14 && !b && !v) return [{ value: g }, { value: m }];
        (M = Math.ceil(m / S) - Math.floor(g / S)),
          M > p && (S = B((M * S) / p / f) * f),
          i(l) || ((_ = Math.pow(10, l)), (S = Math.ceil(S * _) / _)),
          'ticks' === n
            ? ((k = Math.floor(g / S) * S), (w = Math.ceil(m / S) * S))
            : ((k = g), (w = m)),
          b &&
          v &&
          o &&
          (function (t, e) {
            const i = Math.round(t);
            return i - e <= t && i + e >= t;
          })((r - a) / o, S / 1e3)
            ? ((M = Math.round(Math.min((r - a) / S, u))), (S = (r - a) / M), (k = a), (w = r))
            : x
              ? ((k = b ? a : k), (w = v ? r : w), (M = h - 1), (S = (w - k) / M))
              : ((M = (w - k) / S),
                (M = I(M, Math.round(M), S / 1e3) ? Math.round(M) : Math.ceil(M)));
        const A = Math.max(j(S), j(k));
        (_ = Math.pow(10, i(l) ? A : l)), (k = Math.round(k * _) / _), (w = Math.round(w * _) / _);
        let C = 0;
        for (
          b &&
          (d && k !== a
            ? (s.push({ value: a }),
              k < a && C++,
              I(Math.round((k + C * S) * _) / _, a, wo(a, y, t)) && C++)
            : k < a && C++);
          C < M;
          ++C
        )
          s.push({ value: Math.round((k + C * S) * _) / _ });
        return (
          v && d && w !== r
            ? s.length && I(s[s.length - 1].value, r, wo(r, y, t))
              ? (s[s.length - 1].value = r)
              : s.push({ value: r })
            : (v && w !== r) || s.push({ value: w }),
          s
        );
      })(
        {
          maxTicks: s,
          bounds: t.bounds,
          min: t.min,
          max: t.max,
          precision: e.precision,
          step: e.stepSize,
          count: e.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: e.minRotation || 0,
          includeBounds: !1 !== e.includeBounds,
        },
        this._range || this,
      );
      return (
        'ticks' === t.bounds && L(n, this, 'value'),
        t.reverse
          ? (n.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        n
      );
    }
    configure() {
      const t = this.ticks;
      let e = this.min,
        i = this.max;
      if ((super.configure(), this.options.offset && t.length)) {
        const s = (i - e) / Math.max(t.length - 1, 1) / 2;
        (e -= s), (i += s);
      }
      (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
    }
    getLabelForValue(t) {
      return ti(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class So extends Mo {
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = o(t) ? t : 0), (this.max = o(e) ? e : 1), this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        i = V(this.options.ticks.minRotation),
        s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
        n = this._resolveTickFontOptions(0);
      return Math.ceil(e / Math.min(40, n.lineHeight / s));
    }
    getPixelForValue(t) {
      return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  function Ao(t) {
    return 1 == t / Math.pow(10, Math.floor(O(t)));
  }
  (So.id = 'linear'), (So.defaults = { ticks: { callback: Ui.formatters.numeric } });
  class Co extends Qi {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      const i = Mo.prototype.parse.apply(this, [t, e]);
      if (0 !== i) return o(i) && i > 0 ? i : null;
      this._zero = !0;
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = o(t) ? Math.max(0, t) : null),
        (this.max = o(e) ? Math.max(0, e) : null),
        this.options.beginAtZero && (this._zero = !0),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let i = this.min,
        s = this.max;
      const n = (e) => (i = t ? i : e),
        o = (t) => (s = e ? s : t),
        a = (t, e) => Math.pow(10, Math.floor(O(t)) + e);
      i === s && (i <= 0 ? (n(1), o(10)) : (n(a(i, -1)), o(a(s, 1)))),
        i <= 0 && n(a(s, -1)),
        s <= 0 && o(a(i, 1)),
        this._zero && this.min !== this._suggestedMin && i === a(this.min, 0) && n(a(i, -1)),
        (this.min = i),
        (this.max = s);
    }
    buildTicks() {
      const t = this.options,
        e = (function (t, e) {
          const i = Math.floor(O(e.max)),
            s = Math.ceil(e.max / Math.pow(10, i)),
            n = [];
          let o = a(t.min, Math.pow(10, Math.floor(O(e.min)))),
            r = Math.floor(O(o)),
            l = Math.floor(o / Math.pow(10, r)),
            h = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
          do {
            n.push({ value: o, major: Ao(o) }),
              ++l,
              10 === l && ((l = 1), ++r, (h = r >= 0 ? 1 : h)),
              (o = Math.round(l * Math.pow(10, r) * h) / h);
          } while (r < i || (r === i && l < s));
          const u = a(t.max, o);
          return n.push({ value: u, major: Ao(o) }), n;
        })({ min: this._userMin, max: this._userMax }, this);
      return (
        'ticks' === t.bounds && L(e, this, 'value'),
        t.reverse
          ? (e.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        e
      );
    }
    getLabelForValue(t) {
      return void 0 === t ? '0' : ti(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(), (this._startValue = O(t)), (this._valueRange = O(this.max) - O(t));
    }
    getPixelForValue(t) {
      return (
        (void 0 !== t && 0 !== t) || (t = this.min),
        null === t || isNaN(t)
          ? NaN
          : this.getPixelForDecimal(
              t === this.min ? 0 : (O(t) - this._startValue) / this._valueRange,
            )
      );
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  function Eo(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const t = ge(e.backdropPadding);
      return r(e.font && e.font.size, Xt.font.size) + t.height;
    }
    return 0;
  }
  function Do(t, e, i) {
    return (i = s(i) ? i : [i]), { w: Zt(t, e.string, i), h: i.length * e.lineHeight };
  }
  function Po(t, e, i, s, n) {
    return t === s || t === n
      ? { start: e - i / 2, end: e + i / 2 }
      : t < s || t > n
        ? { start: e - i, end: e }
        : { start: e, end: e + i };
  }
  function Fo(t, e, i, s, n) {
    const o = Math.abs(Math.sin(i)),
      a = Math.abs(Math.cos(i));
    let r = 0,
      l = 0;
    s.start < e.l
      ? ((r = (e.l - s.start) / o), (t.l = Math.min(t.l, e.l - r)))
      : s.end > e.r && ((r = (s.end - e.r) / o), (t.r = Math.max(t.r, e.r + r))),
      n.start < e.t
        ? ((l = (e.t - n.start) / a), (t.t = Math.min(t.t, e.t - l)))
        : n.end > e.b && ((l = (n.end - e.b) / a), (t.b = Math.max(t.b, e.b + l)));
  }
  function Oo(t) {
    return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
  }
  function To(t, e, i) {
    return 90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e), t;
  }
  function Bo(t, e, i, s) {
    const { ctx: n } = t;
    if (i) n.arc(t.xCenter, t.yCenter, e, 0, S);
    else {
      let i = t.getPointPosition(0, e);
      n.moveTo(i.x, i.y);
      for (let o = 1; o < s; o++) (i = t.getPointPosition(o, e)), n.lineTo(i.x, i.y);
    }
  }
  (Co.id = 'logarithmic'),
    (Co.defaults = { ticks: { callback: Ui.formatters.logarithmic, major: { enabled: !0 } } });
  class Ro extends Mo {
    constructor(t) {
      super(t),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const t = (this._padding = ge(Eo(this.options) / 2)),
        e = (this.width = this.maxWidth - t.width),
        i = (this.height = this.maxHeight - t.height);
      (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
        (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
        (this.drawingArea = Math.floor(Math.min(e, i) / 2));
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!1);
      (this.min = o(t) && !isNaN(t) ? t : 0),
        (this.max = o(e) && !isNaN(e) ? e : 0),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / Eo(this.options));
    }
    generateTickLabels(t) {
      Mo.prototype.generateTickLabels.call(this, t),
        (this._pointLabels = this.getLabels()
          .map((t, e) => {
            const i = h(this.options.pointLabels.callback, [t, e], this);
            return i || 0 === i ? i : '';
          })
          .filter((t, e) => this.chart.getDataVisibility(e)));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display
        ? (function (t) {
            const e = {
                l: t.left + t._padding.left,
                r: t.right - t._padding.right,
                t: t.top + t._padding.top,
                b: t.bottom - t._padding.bottom,
              },
              i = Object.assign({}, e),
              s = [],
              n = [],
              o = t._pointLabels.length,
              a = t.options.pointLabels,
              r = a.centerPointLabels ? M / o : 0;
            for (let l = 0; l < o; l++) {
              const o = a.setContext(t.getPointLabelContext(l));
              n[l] = o.padding;
              const h = t.getPointPosition(l, t.drawingArea + n[l], r),
                u = me(o.font),
                c = Do(t.ctx, u, t._pointLabels[l]);
              s[l] = c;
              const d = $(t.getIndexAngle(l) + r),
                f = Math.round(z(d));
              Fo(i, e, d, Po(f, h.x, c.w, 0, 180), Po(f, h.y, c.h, 90, 270));
            }
            t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
              (t._pointLabelItems = (function (t, e, i) {
                const s = [],
                  n = t._pointLabels.length,
                  o = t.options,
                  a = Eo(o) / 2,
                  r = t.drawingArea,
                  l = o.pointLabels.centerPointLabels ? M / n : 0;
                for (let o = 0; o < n; o++) {
                  const n = t.getPointPosition(o, r + a + i[o], l),
                    d = Math.round(z($(n.angle + D))),
                    f = e[o],
                    p = To(n.y, f.h, d),
                    g = Oo(d),
                    m =
                      ((h = n.x),
                      (u = f.w),
                      'right' === (c = g) ? (h -= u) : 'center' === c && (h -= u / 2),
                      h);
                  s.push({
                    x: n.x,
                    y: p,
                    textAlign: g,
                    left: m,
                    top: p,
                    right: m + f.w,
                    bottom: p + f.h,
                  });
                }
                var h, u, c;
                return s;
              })(t, s, n));
          })(this)
        : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, i, s) {
      (this.xCenter += Math.floor((t - e) / 2)),
        (this.yCenter += Math.floor((i - s) / 2)),
        (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)));
    }
    getIndexAngle(t) {
      return $(t * (S / (this._pointLabels.length || 1)) + V(this.options.startAngle || 0));
    }
    getDistanceFromCenterForValue(t) {
      if (i(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (i(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return (function (t, e, i) {
          return ve(t, { label: i, index: e, type: 'pointLabel' });
        })(this.getContext(), t, i);
      }
    }
    getPointPosition(t, e, i = 0) {
      const s = this.getIndexAngle(t) - D + i;
      return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: i, right: s, bottom: n } = this._pointLabelItems[t];
      return { left: e, top: i, right: s, bottom: n };
    }
    drawBackground() {
      const {
        backgroundColor: t,
        grid: { circular: e },
      } = this.options;
      if (t) {
        const i = this.ctx;
        i.save(),
          i.beginPath(),
          Bo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
          i.closePath(),
          (i.fillStyle = t),
          i.fill(),
          i.restore();
      }
    }
    drawGrid() {
      const t = this.ctx,
        e = this.options,
        { angleLines: s, grid: n } = e,
        o = this._pointLabels.length;
      let a, r, l;
      if (
        (e.pointLabels.display &&
          (function (t, e) {
            const {
              ctx: s,
              options: { pointLabels: n },
            } = t;
            for (let o = e - 1; o >= 0; o--) {
              const e = n.setContext(t.getPointLabelContext(o)),
                a = me(e.font),
                {
                  x: r,
                  y: l,
                  textAlign: h,
                  left: u,
                  top: c,
                  right: d,
                  bottom: f,
                } = t._pointLabelItems[o],
                { backdropColor: p } = e;
              if (!i(p)) {
                const t = pe(e.borderRadius),
                  i = ge(e.backdropPadding);
                s.fillStyle = p;
                const n = u - i.left,
                  o = c - i.top,
                  a = d - u + i.width,
                  r = f - c + i.height;
                Object.values(t).some((t) => 0 !== t)
                  ? (s.beginPath(), le(s, { x: n, y: o, w: a, h: r, radius: t }), s.fill())
                  : s.fillRect(n, o, a, r);
              }
              ae(s, t._pointLabels[o], r, l + a.lineHeight / 2, a, {
                color: e.color,
                textAlign: h,
                textBaseline: 'middle',
              });
            }
          })(this, o),
        n.display &&
          this.ticks.forEach((t, e) => {
            0 !== e &&
              ((r = this.getDistanceFromCenterForValue(t.value)),
              (function (t, e, i, s) {
                const n = t.ctx,
                  o = e.circular,
                  { color: a, lineWidth: r } = e;
                (!o && !s) ||
                  !a ||
                  !r ||
                  i < 0 ||
                  (n.save(),
                  (n.strokeStyle = a),
                  (n.lineWidth = r),
                  n.setLineDash(e.borderDash),
                  (n.lineDashOffset = e.borderDashOffset),
                  n.beginPath(),
                  Bo(t, i, o, s),
                  n.closePath(),
                  n.stroke(),
                  n.restore());
              })(this, n.setContext(this.getContext(e - 1)), r, o));
          }),
        s.display)
      ) {
        for (t.save(), a = o - 1; a >= 0; a--) {
          const i = s.setContext(this.getPointLabelContext(a)),
            { color: n, lineWidth: o } = i;
          o &&
            n &&
            ((t.lineWidth = o),
            (t.strokeStyle = n),
            t.setLineDash(i.borderDash),
            (t.lineDashOffset = i.borderDashOffset),
            (r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
            (l = this.getPointPosition(a, r)),
            t.beginPath(),
            t.moveTo(this.xCenter, this.yCenter),
            t.lineTo(l.x, l.y),
            t.stroke());
        }
        t.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this.ctx,
        e = this.options,
        i = e.ticks;
      if (!i.display) return;
      const s = this.getIndexAngle(0);
      let n, o;
      t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(s),
        (t.textAlign = 'center'),
        (t.textBaseline = 'middle'),
        this.ticks.forEach((s, a) => {
          if (0 === a && !e.reverse) return;
          const r = i.setContext(this.getContext(a)),
            l = me(r.font);
          if (
            ((n = this.getDistanceFromCenterForValue(this.ticks[a].value)), r.showLabelBackdrop)
          ) {
            (t.font = l.string),
              (o = t.measureText(s.label).width),
              (t.fillStyle = r.backdropColor);
            const e = ge(r.backdropPadding);
            t.fillRect(-o / 2 - e.left, -n - l.size / 2 - e.top, o + e.width, l.size + e.height);
          }
          ae(t, s.label, 0, -n, l, { color: r.color });
        }),
        t.restore();
    }
    drawTitle() {}
  }
  (Ro.id = 'radialLinear'),
    (Ro.defaults = {
      display: !0,
      animate: !0,
      position: 'chartArea',
      angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: Ui.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback: (t) => t,
        padding: 5,
        centerPointLabels: !1,
      },
    }),
    (Ro.defaultRoutes = {
      'angleLines.color': 'borderColor',
      'pointLabels.color': 'color',
      'ticks.color': 'color',
    }),
    (Ro.descriptors = { angleLines: { _fallback: 'grid' } });
  const Io = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    Lo = Object.keys(Io);
  function Vo(t, e) {
    return t - e;
  }
  function zo(t, e) {
    if (i(e)) return null;
    const s = t._adapter,
      { parser: n, round: a, isoWeekday: r } = t._parseOpts;
    let l = e;
    return (
      'function' == typeof n && (l = n(l)),
      o(l) || (l = 'string' == typeof n ? s.parse(l, n) : s.parse(l)),
      null === l
        ? null
        : (a &&
            (l =
              'week' !== a || (!R(r) && !0 !== r) ? s.startOf(l, a) : s.startOf(l, 'isoWeek', r)),
          +l)
    );
  }
  function jo(t, e, i, s) {
    const n = Lo.length;
    for (let o = Lo.indexOf(t); o < n - 1; ++o) {
      const t = Io[Lo[o]],
        n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
      if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Lo[o];
    }
    return Lo[n - 1];
  }
  function No(t, e, i) {
    if (i) {
      if (i.length) {
        const { lo: s, hi: n } = X(i, e);
        t[i[s] >= e ? i[s] : i[n]] = !0;
      }
    } else t[e] = !0;
  }
  function Wo(t, e, i) {
    const s = [],
      n = {},
      o = e.length;
    let a, r;
    for (a = 0; a < o; ++a) (r = e[a]), (n[r] = a), s.push({ value: r, major: !1 });
    return 0 !== o && i
      ? (function (t, e, i, s) {
          const n = t._adapter,
            o = +n.startOf(e[0].value, s),
            a = e[e.length - 1].value;
          let r, l;
          for (r = o; r <= a; r = +n.add(r, 1, s)) (l = i[r]), l >= 0 && (e[l].major = !0);
          return e;
        })(t, s, n, i)
      : s;
  }
  class Ho extends Qi {
    constructor(t) {
      super(t),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = 'day'),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(t, e) {
      const i = t.time || (t.time = {}),
        s = (this._adapter = new as._date(t.adapters.date));
      s.init(e),
        m(i.displayFormats, s.formats()),
        (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
        super.init(t),
        (this._normalized = e.normalized);
    }
    parse(t, e) {
      return void 0 === t ? null : zo(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
      const t = this.options,
        e = this._adapter,
        i = t.time.unit || 'day';
      let { min: s, max: n, minDefined: a, maxDefined: r } = this.getUserBounds();
      function l(t) {
        a || isNaN(t.min) || (s = Math.min(s, t.min)),
          r || isNaN(t.max) || (n = Math.max(n, t.max));
      }
      (a && r) ||
        (l(this._getLabelBounds()),
        ('ticks' === t.bounds && 'labels' === t.ticks.source) || l(this.getMinMax(!1))),
        (s = o(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
        (n = o(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1),
        (this.min = Math.min(s, n - 1)),
        (this.max = Math.max(s + 1, n));
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY,
        i = Number.NEGATIVE_INFINITY;
      return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
    }
    buildTicks() {
      const t = this.options,
        e = t.time,
        i = t.ticks,
        s = 'labels' === i.source ? this.getLabelTimestamps() : this._generate();
      'ticks' === t.bounds &&
        s.length &&
        ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]));
      const n = this.min,
        o = (function (t, e, i) {
          let s = 0,
            n = t.length;
          for (; s < n && t[s] < e; ) s++;
          for (; n > s && t[n - 1] > i; ) n--;
          return s > 0 || n < t.length ? t.slice(s, n) : t;
        })(s, n, this.max);
      return (
        (this._unit =
          e.unit ||
          (i.autoSkip
            ? jo(e.minUnit, this.min, this.max, this._getLabelCapacity(n))
            : (function (t, e, i, s, n) {
                for (let o = Lo.length - 1; o >= Lo.indexOf(i); o--) {
                  const i = Lo[o];
                  if (Io[i].common && t._adapter.diff(n, s, i) >= e - 1) return i;
                }
                return Lo[i ? Lo.indexOf(i) : 0];
              })(this, o.length, e.minUnit, this.min, this.max))),
        (this._majorUnit =
          i.major.enabled && 'year' !== this._unit
            ? (function (t) {
                for (let e = Lo.indexOf(t) + 1, i = Lo.length; e < i; ++e)
                  if (Io[Lo[e]].common) return Lo[e];
              })(this._unit)
            : void 0),
        this.initOffsets(s),
        t.reverse && o.reverse(),
        Wo(this, o, this._majorUnit)
      );
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets(t) {
      let e,
        i,
        s = 0,
        n = 0;
      this.options.offset &&
        t.length &&
        ((e = this.getDecimalForValue(t[0])),
        (s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
        (i = this.getDecimalForValue(t[t.length - 1])),
        (n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
      const o = t.length < 3 ? 0.5 : 0.25;
      (s = Y(s, 0, o)),
        (n = Y(n, 0, o)),
        (this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) });
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        i = this.max,
        s = this.options,
        n = s.time,
        o = n.unit || jo(n.minUnit, e, i, this._getLabelCapacity(e)),
        a = r(n.stepSize, 1),
        l = 'week' === o && n.isoWeekday,
        h = R(l) || !0 === l,
        u = {};
      let c,
        d,
        f = e;
      if (
        (h && (f = +t.startOf(f, 'isoWeek', l)),
        (f = +t.startOf(f, h ? 'day' : o)),
        t.diff(i, e, o) > 1e5 * a)
      )
        throw new Error(e + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + o);
      const p = 'data' === s.ticks.source && this.getDataTimestamps();
      for (c = f, d = 0; c < i; c = +t.add(c, a, o), d++) No(u, c, p);
      return (
        (c !== i && 'ticks' !== s.bounds && 1 !== d) || No(u, c, p),
        Object.keys(u)
          .sort((t, e) => t - e)
          .map((t) => +t)
      );
    }
    getLabelForValue(t) {
      const e = this._adapter,
        i = this.options.time;
      return i.tooltipFormat
        ? e.format(t, i.tooltipFormat)
        : e.format(t, i.displayFormats.datetime);
    }
    _tickFormatFunction(t, e, i, s) {
      const n = this.options,
        o = n.time.displayFormats,
        a = this._unit,
        r = this._majorUnit,
        l = a && o[a],
        u = r && o[r],
        c = i[e],
        d = r && u && c && c.major,
        f = this._adapter.format(t, s || (d ? u : l)),
        p = n.ticks.callback;
      return p ? h(p, [f, e, i], this) : f;
    }
    generateTickLabels(t) {
      let e, i, s;
      for (e = 0, i = t.length; e < i; ++e)
        (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
    }
    getDecimalForValue(t) {
      return null === t ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
      const e = this._offsets,
        i = this.getDecimalForValue(t);
      return this.getPixelForDecimal((e.start + i) * e.factor);
    }
    getValueForPixel(t) {
      const e = this._offsets,
        i = this.getDecimalForPixel(t) / e.factor - e.end;
      return this.min + i * (this.max - this.min);
    }
    _getLabelSize(t) {
      const e = this.options.ticks,
        i = this.ctx.measureText(t).width,
        s = V(this.isHorizontal() ? e.maxRotation : e.minRotation),
        n = Math.cos(s),
        o = Math.sin(s),
        a = this._resolveTickFontOptions(0).size;
      return { w: i * n + a * o, h: i * o + a * n };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        i = e.displayFormats,
        s = i[e.unit] || i.millisecond,
        n = this._tickFormatFunction(t, 0, Wo(this, [t], this._majorUnit), s),
        o = this._getLabelSize(n),
        a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
      return a > 0 ? a : 1;
    }
    getDataTimestamps() {
      let t,
        e,
        i = this._cache.data || [];
      if (i.length) return i;
      const s = this.getMatchingVisibleMetas();
      if (this._normalized && s.length)
        return (this._cache.data = s[0].controller.getAllParsedValues(this));
      for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
      return (this._cache.data = this.normalize(i));
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let e, i;
      if (t.length) return t;
      const s = this.getLabels();
      for (e = 0, i = s.length; e < i; ++e) t.push(zo(this, s[e]));
      return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
      return Q(t.sort(Vo));
    }
  }
  function $o(t, e, i) {
    let s,
      n,
      o,
      a,
      r = 0,
      l = t.length - 1;
    i
      ? (e >= t[r].pos && e <= t[l].pos && ({ lo: r, hi: l } = K(t, 'pos', e)),
        ({ pos: s, time: o } = t[r]),
        ({ pos: n, time: a } = t[l]))
      : (e >= t[r].time && e <= t[l].time && ({ lo: r, hi: l } = K(t, 'time', e)),
        ({ time: s, pos: o } = t[r]),
        ({ time: n, pos: a } = t[l]));
    const h = n - s;
    return h ? o + ((a - o) * (e - s)) / h : o;
  }
  (Ho.id = 'time'),
    (Ho.defaults = {
      bounds: 'data',
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: 'millisecond',
        displayFormats: {},
      },
      ticks: { source: 'auto', major: { enabled: !1 } },
    });
  class Uo extends Ho {
    constructor(t) {
      super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        e = (this._table = this.buildLookupTable(t));
      (this._minPos = $o(e, this.min)),
        (this._tableRange = $o(e, this.max) - this._minPos),
        super.initOffsets(t);
    }
    buildLookupTable(t) {
      const { min: e, max: i } = this,
        s = [],
        n = [];
      let o, a, r, l, h;
      for (o = 0, a = t.length; o < a; ++o) (l = t[o]), l >= e && l <= i && s.push(l);
      if (s.length < 2)
        return [
          { time: e, pos: 0 },
          { time: i, pos: 1 },
        ];
      for (o = 0, a = s.length; o < a; ++o)
        (h = s[o + 1]),
          (r = s[o - 1]),
          (l = s[o]),
          Math.round((h + r) / 2) !== l && n.push({ time: l, pos: o / (a - 1) });
      return n;
    }
    _getTimestampsForTable() {
      let t = this._cache.all || [];
      if (t.length) return t;
      const e = this.getDataTimestamps(),
        i = this.getLabelTimestamps();
      return (
        (t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i),
        (t = this._cache.all = t),
        t
      );
    }
    getDecimalForValue(t) {
      return ($o(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const e = this._offsets,
        i = this.getDecimalForPixel(t) / e.factor - e.end;
      return $o(this._table, i * this._tableRange + this._minPos, !0);
    }
  }
  (Uo.id = 'timeseries'), (Uo.defaults = Ho.defaults);
  const Yo = [
    ss,
    Bn,
    _o,
    Object.freeze({
      __proto__: null,
      CategoryScale: ko,
      LinearScale: So,
      LogarithmicScale: Co,
      RadialLinearScale: Ro,
      TimeScale: Ho,
      TimeSeriesScale: Uo,
    }),
  ];
  function qo(t) {
    return (
      (qo =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      qo(t)
    );
  }
  function Xo(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
  }
  function Ko(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        'value' in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  function Zo(t, e, i) {
    return (
      e && Ko(t.prototype, e),
      i && Ko(t, i),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      t
    );
  }
  function Go(t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && Qo(t, e);
  }
  function Jo(t) {
    return (
      (Jo = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      Jo(t)
    );
  }
  function Qo(t, e) {
    return (
      (Qo = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      Qo(t, e)
    );
  }
  function ta(t, e) {
    if (null == t) return {};
    var i,
      s,
      n = (function (t, e) {
        if (null == t) return {};
        var i,
          s,
          n = {},
          o = Object.keys(t);
        for (s = 0; s < o.length; s++) (i = o[s]), e.indexOf(i) >= 0 || (n[i] = t[i]);
        return n;
      })(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (s = 0; s < o.length; s++)
        (i = o[s]),
          e.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]));
    }
    return n;
  }
  function ea(t, e) {
    if (e && ('object' == typeof e || 'function' == typeof e)) return e;
    if (void 0 !== e)
      throw new TypeError('Derived constructors may only return object or undefined');
    return (function (t) {
      if (void 0 === t)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return t;
    })(t);
  }
  function ia(t) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var i,
        s = Jo(t);
      if (e) {
        var n = Jo(this).constructor;
        i = Reflect.construct(s, arguments, n);
      } else i = s.apply(this, arguments);
      return ea(this, i);
    };
  }
  function sa(t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Jo(t)); );
    return t;
  }
  function na() {
    return (
      (na =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, i) {
              var s = sa(t, e);
              if (s) {
                var n = Object.getOwnPropertyDescriptor(s, e);
                return n.get ? n.get.call(arguments.length < 3 ? t : i) : n.value;
              }
            }),
      na.apply(this, arguments)
    );
  }
  function oa(t, e, i, s) {
    return (
      (oa =
        'undefined' != typeof Reflect && Reflect.set
          ? Reflect.set
          : function (t, e, i, s) {
              var n,
                o = sa(t, e);
              if (o) {
                if ((n = Object.getOwnPropertyDescriptor(o, e)).set) return n.set.call(s, i), !0;
                if (!n.writable) return !1;
              }
              if ((n = Object.getOwnPropertyDescriptor(s, e))) {
                if (!n.writable) return !1;
                (n.value = i), Object.defineProperty(s, e, n);
              } else
                !(function (t, e, i) {
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = i);
                })(s, e, i);
              return !0;
            }),
      oa(t, e, i, s)
    );
  }
  function aa(t, e, i, s, n) {
    if (!oa(t, e, i, s || t) && n) throw new Error('failed to set property');
    return i;
  }
  function ra(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var i =
          null == t
            ? null
            : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (null != i) {
          var s,
            n,
            o = [],
            a = !0,
            r = !1;
          try {
            for (
              i = i.call(t);
              !(a = (s = i.next()).done) && (o.push(s.value), !e || o.length !== e);
              a = !0
            );
          } catch (t) {
            (r = !0), (n = t);
          } finally {
            try {
              a || null == i.return || i.return();
            } finally {
              if (r) throw n;
            }
          }
          return o;
        }
      })(t, e) ||
      la(t, e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function la(t, e) {
    if (t) {
      if ('string' == typeof t) return ha(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        'Object' === i && t.constructor && (i = t.constructor.name),
        'Map' === i || 'Set' === i
          ? Array.from(t)
          : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            ? ha(t, e)
            : void 0
      );
    }
  }
  function ha(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s;
  }
  var ua = (function () {
    function t(e) {
      Xo(this, t),
        Object.assign(this, { inserted: '', rawInserted: '', skip: !1, tailShift: 0 }, e);
    }
    return (
      Zo(t, [
        {
          key: 'aggregate',
          value: function (t) {
            return (
              (this.rawInserted += t.rawInserted),
              (this.skip = this.skip || t.skip),
              (this.inserted += t.inserted),
              (this.tailShift += t.tailShift),
              this
            );
          },
        },
        {
          key: 'offset',
          get: function () {
            return this.tailShift + this.inserted.length;
          },
        },
      ]),
      t
    );
  })();
  function ca(t) {
    return 'string' == typeof t || t instanceof String;
  }
  var da = 'NONE',
    fa = 'LEFT',
    pa = 'FORCE_LEFT',
    ga = 'RIGHT',
    ma = 'FORCE_RIGHT';
  function ba(t) {
    switch (t) {
      case fa:
        return pa;
      case ga:
        return ma;
      default:
        return t;
    }
  }
  function va(t) {
    return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }
  function xa(t) {
    return Array.isArray(t) ? t : [t, new ua()];
  }
  function ya(t, e) {
    if (e === t) return !0;
    var i,
      s = Array.isArray(e),
      n = Array.isArray(t);
    if (s && n) {
      if (e.length != t.length) return !1;
      for (i = 0; i < e.length; i++) if (!ya(e[i], t[i])) return !1;
      return !0;
    }
    if (s != n) return !1;
    if (e && t && 'object' === qo(e) && 'object' === qo(t)) {
      var o = e instanceof Date,
        a = t instanceof Date;
      if (o && a) return e.getTime() == t.getTime();
      if (o != a) return !1;
      var r = e instanceof RegExp,
        l = t instanceof RegExp;
      if (r && l) return e.toString() == t.toString();
      if (r != l) return !1;
      var h = Object.keys(e);
      for (i = 0; i < h.length; i++) if (!Object.prototype.hasOwnProperty.call(t, h[i])) return !1;
      for (i = 0; i < h.length; i++) if (!ya(t[h[i]], e[h[i]])) return !1;
      return !0;
    }
    return (
      !(!e || !t || 'function' != typeof e || 'function' != typeof t) &&
      e.toString() === t.toString()
    );
  }
  var _a = (function () {
      function t(e, i, s, n) {
        for (
          Xo(this, t), this.value = e, this.cursorPos = i, this.oldValue = s, this.oldSelection = n;
          this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);

        )
          --this.oldSelection.start;
      }
      return (
        Zo(t, [
          {
            key: 'startChangePos',
            get: function () {
              return Math.min(this.cursorPos, this.oldSelection.start);
            },
          },
          {
            key: 'insertedCount',
            get: function () {
              return this.cursorPos - this.startChangePos;
            },
          },
          {
            key: 'inserted',
            get: function () {
              return this.value.substr(this.startChangePos, this.insertedCount);
            },
          },
          {
            key: 'removedCount',
            get: function () {
              return Math.max(
                this.oldSelection.end - this.startChangePos ||
                  this.oldValue.length - this.value.length,
                0,
              );
            },
          },
          {
            key: 'removed',
            get: function () {
              return this.oldValue.substr(this.startChangePos, this.removedCount);
            },
          },
          {
            key: 'head',
            get: function () {
              return this.value.substring(0, this.startChangePos);
            },
          },
          {
            key: 'tail',
            get: function () {
              return this.value.substring(this.startChangePos + this.insertedCount);
            },
          },
          {
            key: 'removeDirection',
            get: function () {
              return !this.removedCount || this.insertedCount
                ? da
                : (this.oldSelection.end !== this.cursorPos &&
                      this.oldSelection.start !== this.cursorPos) ||
                    this.oldSelection.end !== this.oldSelection.start
                  ? fa
                  : ga;
            },
          },
        ]),
        t
      );
    })(),
    ka = (function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          s = arguments.length > 2 ? arguments[2] : void 0;
        Xo(this, t), (this.value = e), (this.from = i), (this.stop = s);
      }
      return (
        Zo(t, [
          {
            key: 'toString',
            value: function () {
              return this.value;
            },
          },
          {
            key: 'extend',
            value: function (t) {
              this.value += String(t);
            },
          },
          {
            key: 'appendTo',
            value: function (t) {
              return t.append(this.toString(), { tail: !0 }).aggregate(t._appendPlaceholder());
            },
          },
          {
            key: 'state',
            get: function () {
              return { value: this.value, from: this.from, stop: this.stop };
            },
            set: function (t) {
              Object.assign(this, t);
            },
          },
          {
            key: 'unshift',
            value: function (t) {
              if (!this.value.length || (null != t && this.from >= t)) return '';
              var e = this.value[0];
              return (this.value = this.value.slice(1)), e;
            },
          },
          {
            key: 'shift',
            value: function () {
              if (!this.value.length) return '';
              var t = this.value[this.value.length - 1];
              return (this.value = this.value.slice(0, -1)), t;
            },
          },
        ]),
        t
      );
    })();
  function wa(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new wa.InputMask(t, e);
  }
  var Ma = (function () {
    function t(e) {
      Xo(this, t),
        (this._value = ''),
        this._update(Object.assign({}, t.DEFAULTS, e)),
        (this.isInitialized = !0);
    }
    return (
      Zo(t, [
        {
          key: 'updateOptions',
          value: function (t) {
            Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t));
          },
        },
        {
          key: '_update',
          value: function (t) {
            Object.assign(this, t);
          },
        },
        {
          key: 'state',
          get: function () {
            return { _value: this.value };
          },
          set: function (t) {
            this._value = t._value;
          },
        },
        {
          key: 'reset',
          value: function () {
            this._value = '';
          },
        },
        {
          key: 'value',
          get: function () {
            return this._value;
          },
          set: function (t) {
            this.resolve(t);
          },
        },
        {
          key: 'resolve',
          value: function (t) {
            return this.reset(), this.append(t, { input: !0 }, ''), this.doCommit(), this.value;
          },
        },
        {
          key: 'unmaskedValue',
          get: function () {
            return this.value;
          },
          set: function (t) {
            this.reset(), this.append(t, {}, ''), this.doCommit();
          },
        },
        {
          key: 'typedValue',
          get: function () {
            return this.doParse(this.value);
          },
          set: function (t) {
            this.value = this.doFormat(t);
          },
        },
        {
          key: 'rawInputValue',
          get: function () {
            return this.extractInput(0, this.value.length, { raw: !0 });
          },
          set: function (t) {
            this.reset(), this.append(t, { raw: !0 }, ''), this.doCommit();
          },
        },
        {
          key: 'isComplete',
          get: function () {
            return !0;
          },
        },
        {
          key: 'isFilled',
          get: function () {
            return this.isComplete;
          },
        },
        {
          key: 'nearestInputPos',
          value: function (t, e) {
            return t;
          },
        },
        {
          key: 'extractInput',
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return this.value.slice(t, e);
          },
        },
        {
          key: 'extractTail',
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return new ka(this.extractInput(t, e), t);
          },
        },
        {
          key: 'appendTail',
          value: function (t) {
            return ca(t) && (t = new ka(String(t))), t.appendTo(this);
          },
        },
        {
          key: '_appendCharRaw',
          value: function (t) {
            return t ? ((this._value += t), new ua({ inserted: t, rawInserted: t })) : new ua();
          },
        },
        {
          key: '_appendChar',
          value: function (t) {
            var e,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              s = arguments.length > 2 ? arguments[2] : void 0,
              n = this.state,
              o = xa(this.doPrepare(t, i)),
              a = ra(o, 2);
            if (((t = a[0]), (e = (e = a[1]).aggregate(this._appendCharRaw(t, i))).inserted)) {
              var r,
                l = !1 !== this.doValidate(i);
              if (l && null != s) {
                var h = this.state;
                !0 === this.overwrite && ((r = s.state), s.unshift(this.value.length));
                var u = this.appendTail(s);
                ((l = u.rawInserted === s.toString()) && u.inserted) ||
                  'shift' !== this.overwrite ||
                  ((this.state = h),
                  (r = s.state),
                  s.shift(),
                  (l = (u = this.appendTail(s)).rawInserted === s.toString())),
                  l && u.inserted && (this.state = h);
              }
              l || ((e = new ua()), (this.state = n), s && r && (s.state = r));
            }
            return e;
          },
        },
        {
          key: '_appendPlaceholder',
          value: function () {
            return new ua();
          },
        },
        {
          key: '_appendEager',
          value: function () {
            return new ua();
          },
        },
        {
          key: 'append',
          value: function (t, e, i) {
            if (!ca(t)) throw new Error('value should be string');
            var s = new ua(),
              n = ca(i) ? new ka(String(i)) : i;
            null != e && e.tail && (e._beforeTailState = this.state);
            for (var o = 0; o < t.length; ++o) s.aggregate(this._appendChar(t[o], e, n));
            return (
              null != n && (s.tailShift += this.appendTail(n).tailShift),
              this.eager && null != e && e.input && t && s.aggregate(this._appendEager()),
              s
            );
          },
        },
        {
          key: 'remove',
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return (this._value = this.value.slice(0, t) + this.value.slice(e)), new ua();
          },
        },
        {
          key: 'withValueRefresh',
          value: function (t) {
            if (this._refreshing || !this.isInitialized) return t();
            this._refreshing = !0;
            var e = this.rawInputValue,
              i = this.value,
              s = t();
            return (
              (this.rawInputValue = e),
              this.value &&
                this.value !== i &&
                0 === i.indexOf(this.value) &&
                this.append(i.slice(this.value.length), {}, ''),
              delete this._refreshing,
              s
            );
          },
        },
        {
          key: 'runIsolated',
          value: function (t) {
            if (this._isolated || !this.isInitialized) return t(this);
            this._isolated = !0;
            var e = this.state,
              i = t(this);
            return (this.state = e), delete this._isolated, i;
          },
        },
        {
          key: 'doPrepare',
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.prepare ? this.prepare(t, this, e) : t;
          },
        },
        {
          key: 'doValidate',
          value: function (t) {
            return (
              (!this.validate || this.validate(this.value, this, t)) &&
              (!this.parent || this.parent.doValidate(t))
            );
          },
        },
        {
          key: 'doCommit',
          value: function () {
            this.commit && this.commit(this.value, this);
          },
        },
        {
          key: 'doFormat',
          value: function (t) {
            return this.format ? this.format(t, this) : t;
          },
        },
        {
          key: 'doParse',
          value: function (t) {
            return this.parse ? this.parse(t, this) : t;
          },
        },
        {
          key: 'splice',
          value: function (t, e, i, s) {
            var n,
              o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { input: !0 },
              a = t + e,
              r = this.extractTail(a);
            this.eager && ((s = ba(s)), (n = this.extractInput(0, a, { raw: !0 })));
            var l = this.nearestInputPos(t, e > 1 && 0 !== t && !this.eager ? da : s),
              h = new ua({ tailShift: l - t }).aggregate(this.remove(l));
            if (this.eager && s !== da && n === this.rawInputValue)
              if (s === pa)
                for (var u; n === this.rawInputValue && (u = this.value.length); )
                  h.aggregate(new ua({ tailShift: -1 })).aggregate(this.remove(u - 1));
              else s === ma && r.unshift();
            return h.aggregate(this.append(i, o, r));
          },
        },
        {
          key: 'maskEquals',
          value: function (t) {
            return this.mask === t;
          },
        },
        {
          key: 'typedValueEquals',
          value: function (e) {
            var i = this.typedValue;
            return (
              e === i ||
              (t.EMPTY_VALUES.includes(e) && t.EMPTY_VALUES.includes(i)) ||
              this.doFormat(e) === this.doFormat(this.typedValue)
            );
          },
        },
      ]),
      t
    );
  })();
  function Sa(t) {
    if (null == t) throw new Error('mask property should be defined');
    return t instanceof RegExp
      ? wa.MaskedRegExp
      : ca(t)
        ? wa.MaskedPattern
        : t instanceof Date || t === Date
          ? wa.MaskedDate
          : t instanceof Number || 'number' == typeof t || t === Number
            ? wa.MaskedNumber
            : Array.isArray(t) || t === Array
              ? wa.MaskedDynamic
              : wa.Masked && t.prototype instanceof wa.Masked
                ? t
                : t instanceof wa.Masked
                  ? t.constructor
                  : t instanceof Function
                    ? wa.MaskedFunction
                    : (console.warn('Mask not found for mask', t), wa.Masked);
  }
  function Aa(t) {
    if (wa.Masked && t instanceof wa.Masked) return t;
    var e = (t = Object.assign({}, t)).mask;
    if (wa.Masked && e instanceof wa.Masked) return e;
    var i = Sa(e);
    if (!i)
      throw new Error(
        'Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.',
      );
    return new i(t);
  }
  (Ma.DEFAULTS = {
    format: function (t) {
      return t;
    },
    parse: function (t) {
      return t;
    },
  }),
    (Ma.EMPTY_VALUES = [void 0, null, '']),
    (wa.Masked = Ma),
    (wa.createMask = Aa);
  var Ca = ['mask'],
    Ea = {
      0: /\d/,
      a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      '*': /./,
    },
    Da = (function () {
      function t(e) {
        Xo(this, t);
        var i = e.mask,
          s = ta(e, Ca);
        (this.masked = Aa({ mask: i })), Object.assign(this, s);
      }
      return (
        Zo(t, [
          {
            key: 'reset',
            value: function () {
              (this.isFilled = !1), this.masked.reset();
            },
          },
          {
            key: 'remove',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length;
              return 0 === t && e >= 1
                ? ((this.isFilled = !1), this.masked.remove(t, e))
                : new ua();
            },
          },
          {
            key: 'value',
            get: function () {
              return (
                this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '')
              );
            },
          },
          {
            key: 'unmaskedValue',
            get: function () {
              return this.masked.unmaskedValue;
            },
          },
          {
            key: 'isComplete',
            get: function () {
              return Boolean(this.masked.value) || this.isOptional;
            },
          },
          {
            key: '_appendChar',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (this.isFilled) return new ua();
              var i = this.masked.state,
                s = this.masked._appendChar(t, e);
              return (
                s.inserted &&
                  !1 === this.doValidate(e) &&
                  ((s.inserted = s.rawInserted = ''), (this.masked.state = i)),
                s.inserted ||
                  this.isOptional ||
                  this.lazy ||
                  e.input ||
                  (s.inserted = this.placeholderChar),
                (s.skip = !s.inserted && !this.isOptional),
                (this.isFilled = Boolean(s.inserted)),
                s
              );
            },
          },
          {
            key: 'append',
            value: function () {
              var t;
              return (t = this.masked).append.apply(t, arguments);
            },
          },
          {
            key: '_appendPlaceholder',
            value: function () {
              var t = new ua();
              return (
                this.isFilled ||
                  this.isOptional ||
                  ((this.isFilled = !0), (t.inserted = this.placeholderChar)),
                t
              );
            },
          },
          {
            key: '_appendEager',
            value: function () {
              return new ua();
            },
          },
          {
            key: 'extractTail',
            value: function () {
              var t;
              return (t = this.masked).extractTail.apply(t, arguments);
            },
          },
          {
            key: 'appendTail',
            value: function () {
              var t;
              return (t = this.masked).appendTail.apply(t, arguments);
            },
          },
          {
            key: 'extractInput',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                i = arguments.length > 2 ? arguments[2] : void 0;
              return this.masked.extractInput(t, e, i);
            },
          },
          {
            key: 'nearestInputPos',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : da,
                i = 0,
                s = this.value.length,
                n = Math.min(Math.max(t, i), s);
              switch (e) {
                case fa:
                case pa:
                  return this.isComplete ? n : i;
                case ga:
                case ma:
                  return this.isComplete ? n : s;
                default:
                  return n;
              }
            },
          },
          {
            key: 'doValidate',
            value: function () {
              var t, e;
              return (
                (t = this.masked).doValidate.apply(t, arguments) &&
                (!this.parent || (e = this.parent).doValidate.apply(e, arguments))
              );
            },
          },
          {
            key: 'doCommit',
            value: function () {
              this.masked.doCommit();
            },
          },
          {
            key: 'state',
            get: function () {
              return { masked: this.masked.state, isFilled: this.isFilled };
            },
            set: function (t) {
              (this.masked.state = t.masked), (this.isFilled = t.isFilled);
            },
          },
        ]),
        t
      );
    })(),
    Pa = (function () {
      function t(e) {
        Xo(this, t), Object.assign(this, e), (this._value = ''), (this.isFixed = !0);
      }
      return (
        Zo(t, [
          {
            key: 'value',
            get: function () {
              return this._value;
            },
          },
          {
            key: 'unmaskedValue',
            get: function () {
              return this.isUnmasking ? this.value : '';
            },
          },
          {
            key: 'reset',
            value: function () {
              (this._isRawInput = !1), (this._value = '');
            },
          },
          {
            key: 'remove',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this._value.length;
              return (
                (this._value = this._value.slice(0, t) + this._value.slice(e)),
                this._value || (this._isRawInput = !1),
                new ua()
              );
            },
          },
          {
            key: 'nearestInputPos',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : da,
                i = 0,
                s = this._value.length;
              switch (e) {
                case fa:
                case pa:
                  return i;
                default:
                  return s;
              }
            },
          },
          {
            key: 'extractInput',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this._value.length,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return (i.raw && this._isRawInput && this._value.slice(t, e)) || '';
            },
          },
          {
            key: 'isComplete',
            get: function () {
              return !0;
            },
          },
          {
            key: 'isFilled',
            get: function () {
              return Boolean(this._value);
            },
          },
          {
            key: '_appendChar',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = new ua();
              if (this._value) return i;
              var s = this.char === t,
                n =
                  s && (this.isUnmasking || e.input || e.raw) && (!e.raw || !this.eager) && !e.tail;
              return (
                n && (i.rawInserted = this.char),
                (this._value = i.inserted = this.char),
                (this._isRawInput = n && (e.raw || e.input)),
                i
              );
            },
          },
          {
            key: '_appendEager',
            value: function () {
              return this._appendChar(this.char, { tail: !0 });
            },
          },
          {
            key: '_appendPlaceholder',
            value: function () {
              var t = new ua();
              return this._value || (this._value = t.inserted = this.char), t;
            },
          },
          {
            key: 'extractTail',
            value: function () {
              return (
                (arguments.length > 1 && void 0 !== arguments[1]) || this.value.length, new ka('')
              );
            },
          },
          {
            key: 'appendTail',
            value: function (t) {
              return ca(t) && (t = new ka(String(t))), t.appendTo(this);
            },
          },
          {
            key: 'append',
            value: function (t, e, i) {
              var s = this._appendChar(t[0], e);
              return null != i && (s.tailShift += this.appendTail(i).tailShift), s;
            },
          },
          { key: 'doCommit', value: function () {} },
          {
            key: 'state',
            get: function () {
              return { _value: this._value, _isRawInput: this._isRawInput };
            },
            set: function (t) {
              Object.assign(this, t);
            },
          },
        ]),
        t
      );
    })(),
    Fa = ['chunks'],
    Oa = (function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        Xo(this, t), (this.chunks = e), (this.from = i);
      }
      return (
        Zo(t, [
          {
            key: 'toString',
            value: function () {
              return this.chunks.map(String).join('');
            },
          },
          {
            key: 'extend',
            value: function (e) {
              if (String(e)) {
                ca(e) && (e = new ka(String(e)));
                var i = this.chunks[this.chunks.length - 1],
                  s =
                    i &&
                    (i.stop === e.stop || null == e.stop) &&
                    e.from === i.from + i.toString().length;
                if (e instanceof ka) s ? i.extend(e.toString()) : this.chunks.push(e);
                else if (e instanceof t) {
                  if (null == e.stop)
                    for (var n; e.chunks.length && null == e.chunks[0].stop; )
                      ((n = e.chunks.shift()).from += e.from), this.extend(n);
                  e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e));
                }
              }
            },
          },
          {
            key: 'appendTo',
            value: function (e) {
              if (!(e instanceof wa.MaskedPattern)) return new ka(this.toString()).appendTo(e);
              for (var i = new ua(), s = 0; s < this.chunks.length && !i.skip; ++s) {
                var n = this.chunks[s],
                  o = e._mapPosToBlock(e.value.length),
                  a = n.stop,
                  r = void 0;
                if (
                  (null != a &&
                    (!o || o.index <= a) &&
                    ((n instanceof t || e._stops.indexOf(a) >= 0) &&
                      i.aggregate(e._appendPlaceholder(a)),
                    (r = n instanceof t && e._blocks[a])),
                  r)
                ) {
                  var l = r.appendTail(n);
                  (l.skip = !1), i.aggregate(l), (e._value += l.inserted);
                  var h = n.toString().slice(l.rawInserted.length);
                  h && i.aggregate(e.append(h, { tail: !0 }));
                } else i.aggregate(e.append(n.toString(), { tail: !0 }));
              }
              return i;
            },
          },
          {
            key: 'state',
            get: function () {
              return {
                chunks: this.chunks.map(function (t) {
                  return t.state;
                }),
                from: this.from,
                stop: this.stop,
                blockIndex: this.blockIndex,
              };
            },
            set: function (e) {
              var i = e.chunks,
                s = ta(e, Fa);
              Object.assign(this, s),
                (this.chunks = i.map(function (e) {
                  var i = 'chunks' in e ? new t() : new ka();
                  return (i.state = e), i;
                }));
            },
          },
          {
            key: 'unshift',
            value: function (t) {
              if (!this.chunks.length || (null != t && this.from >= t)) return '';
              for (var e = null != t ? t - this.from : t, i = 0; i < this.chunks.length; ) {
                var s = this.chunks[i],
                  n = s.unshift(e);
                if (s.toString()) {
                  if (!n) break;
                  ++i;
                } else this.chunks.splice(i, 1);
                if (n) return n;
              }
              return '';
            },
          },
          {
            key: 'shift',
            value: function () {
              if (!this.chunks.length) return '';
              for (var t = this.chunks.length - 1; 0 <= t; ) {
                var e = this.chunks[t],
                  i = e.shift();
                if (e.toString()) {
                  if (!i) break;
                  --t;
                } else this.chunks.splice(t, 1);
                if (i) return i;
              }
              return '';
            },
          },
        ]),
        t
      );
    })(),
    Ta = (function () {
      function t(e, i) {
        Xo(this, t), (this.masked = e), (this._log = []);
        var s =
            e._mapPosToBlock(i) ||
            (i < 0 ? { index: 0, offset: 0 } : { index: this.masked._blocks.length, offset: 0 }),
          n = s.offset,
          o = s.index;
        (this.offset = n), (this.index = o), (this.ok = !1);
      }
      return (
        Zo(t, [
          {
            key: 'block',
            get: function () {
              return this.masked._blocks[this.index];
            },
          },
          {
            key: 'pos',
            get: function () {
              return this.masked._blockStartPos(this.index) + this.offset;
            },
          },
          {
            key: 'state',
            get: function () {
              return { index: this.index, offset: this.offset, ok: this.ok };
            },
            set: function (t) {
              Object.assign(this, t);
            },
          },
          {
            key: 'pushState',
            value: function () {
              this._log.push(this.state);
            },
          },
          {
            key: 'popState',
            value: function () {
              var t = this._log.pop();
              return (this.state = t), t;
            },
          },
          {
            key: 'bindBlock',
            value: function () {
              this.block ||
                (this.index < 0 && ((this.index = 0), (this.offset = 0)),
                this.index >= this.masked._blocks.length &&
                  ((this.index = this.masked._blocks.length - 1),
                  (this.offset = this.block.value.length)));
            },
          },
          {
            key: '_pushLeft',
            value: function (t) {
              for (
                this.pushState(), this.bindBlock();
                0 <= this.index;
                --this.index,
                  this.offset =
                    (null === (e = this.block) || void 0 === e ? void 0 : e.value.length) || 0
              ) {
                var e;
                if (t()) return (this.ok = !0);
              }
              return (this.ok = !1);
            },
          },
          {
            key: '_pushRight',
            value: function (t) {
              for (
                this.pushState(), this.bindBlock();
                this.index < this.masked._blocks.length;
                ++this.index, this.offset = 0
              )
                if (t()) return (this.ok = !0);
              return (this.ok = !1);
            },
          },
          {
            key: 'pushLeftBeforeFilled',
            value: function () {
              var t = this;
              return this._pushLeft(function () {
                if (!t.block.isFixed && t.block.value)
                  return (
                    (t.offset = t.block.nearestInputPos(t.offset, pa)), 0 !== t.offset || void 0
                  );
              });
            },
          },
          {
            key: 'pushLeftBeforeInput',
            value: function () {
              var t = this;
              return this._pushLeft(function () {
                if (!t.block.isFixed) return (t.offset = t.block.nearestInputPos(t.offset, fa)), !0;
              });
            },
          },
          {
            key: 'pushLeftBeforeRequired',
            value: function () {
              var t = this;
              return this._pushLeft(function () {
                if (!(t.block.isFixed || (t.block.isOptional && !t.block.value)))
                  return (t.offset = t.block.nearestInputPos(t.offset, fa)), !0;
              });
            },
          },
          {
            key: 'pushRightBeforeFilled',
            value: function () {
              var t = this;
              return this._pushRight(function () {
                if (!t.block.isFixed && t.block.value)
                  return (
                    (t.offset = t.block.nearestInputPos(t.offset, ma)),
                    t.offset !== t.block.value.length || void 0
                  );
              });
            },
          },
          {
            key: 'pushRightBeforeInput',
            value: function () {
              var t = this;
              return this._pushRight(function () {
                if (!t.block.isFixed) return (t.offset = t.block.nearestInputPos(t.offset, da)), !0;
              });
            },
          },
          {
            key: 'pushRightBeforeRequired',
            value: function () {
              var t = this;
              return this._pushRight(function () {
                if (!(t.block.isFixed || (t.block.isOptional && !t.block.value)))
                  return (t.offset = t.block.nearestInputPos(t.offset, da)), !0;
              });
            },
          },
        ]),
        t
      );
    })(),
    Ba = (function (t) {
      Go(i, t);
      var e = ia(i);
      function i() {
        return Xo(this, i), e.apply(this, arguments);
      }
      return (
        Zo(i, [
          {
            key: '_update',
            value: function (t) {
              t.mask &&
                (t.validate = function (e) {
                  return e.search(t.mask) >= 0;
                }),
                na(Jo(i.prototype), '_update', this).call(this, t);
            },
          },
        ]),
        i
      );
    })(Ma);
  wa.MaskedRegExp = Ba;
  var Ra = ['_blocks'],
    Ia = (function (t) {
      Go(i, t);
      var e = ia(i);
      function i() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          Xo(this, i),
          (t.definitions = Object.assign({}, Ea, t.definitions)),
          e.call(this, Object.assign({}, i.DEFAULTS, t))
        );
      }
      return (
        Zo(i, [
          {
            key: '_update',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (t.definitions = Object.assign({}, this.definitions, t.definitions)),
                na(Jo(i.prototype), '_update', this).call(this, t),
                this._rebuildMask();
            },
          },
          {
            key: '_rebuildMask',
            value: function () {
              var t = this,
                e = this.definitions;
              (this._blocks = []), (this._stops = []), (this._maskedBlocks = {});
              var s = this.mask;
              if (s && e)
                for (var n = !1, o = !1, a = 0; a < s.length; ++a)
                  if (
                    !this.blocks ||
                    'continue' !==
                      (function () {
                        var e = s.slice(a),
                          i = Object.keys(t.blocks).filter(function (t) {
                            return 0 === e.indexOf(t);
                          });
                        i.sort(function (t, e) {
                          return e.length - t.length;
                        });
                        var n = i[0];
                        if (n) {
                          var o = Aa(
                            Object.assign(
                              {
                                parent: t,
                                lazy: t.lazy,
                                eager: t.eager,
                                placeholderChar: t.placeholderChar,
                                overwrite: t.overwrite,
                              },
                              t.blocks[n],
                            ),
                          );
                          return (
                            o &&
                              (t._blocks.push(o),
                              t._maskedBlocks[n] || (t._maskedBlocks[n] = []),
                              t._maskedBlocks[n].push(t._blocks.length - 1)),
                            (a += n.length - 1),
                            'continue'
                          );
                        }
                      })()
                  ) {
                    var r = s[a],
                      l = r in e;
                    if (r !== i.STOP_CHAR)
                      if ('{' !== r && '}' !== r)
                        if ('[' !== r && ']' !== r) {
                          if (r === i.ESCAPE_CHAR) {
                            if ((++a, !(r = s[a]))) break;
                            l = !1;
                          }
                          var h = l
                            ? new Da({
                                parent: this,
                                lazy: this.lazy,
                                eager: this.eager,
                                placeholderChar: this.placeholderChar,
                                mask: e[r],
                                isOptional: o,
                              })
                            : new Pa({ char: r, eager: this.eager, isUnmasking: n });
                          this._blocks.push(h);
                        } else o = !o;
                      else n = !n;
                    else this._stops.push(this._blocks.length);
                  }
            },
          },
          {
            key: 'state',
            get: function () {
              return Object.assign({}, na(Jo(i.prototype), 'state', this), {
                _blocks: this._blocks.map(function (t) {
                  return t.state;
                }),
              });
            },
            set: function (t) {
              var e = t._blocks,
                s = ta(t, Ra);
              this._blocks.forEach(function (t, i) {
                return (t.state = e[i]);
              }),
                aa(Jo(i.prototype), 'state', s, this, !0);
            },
          },
          {
            key: 'reset',
            value: function () {
              na(Jo(i.prototype), 'reset', this).call(this),
                this._blocks.forEach(function (t) {
                  return t.reset();
                });
            },
          },
          {
            key: 'isComplete',
            get: function () {
              return this._blocks.every(function (t) {
                return t.isComplete;
              });
            },
          },
          {
            key: 'isFilled',
            get: function () {
              return this._blocks.every(function (t) {
                return t.isFilled;
              });
            },
          },
          {
            key: 'isFixed',
            get: function () {
              return this._blocks.every(function (t) {
                return t.isFixed;
              });
            },
          },
          {
            key: 'isOptional',
            get: function () {
              return this._blocks.every(function (t) {
                return t.isOptional;
              });
            },
          },
          {
            key: 'doCommit',
            value: function () {
              this._blocks.forEach(function (t) {
                return t.doCommit();
              }),
                na(Jo(i.prototype), 'doCommit', this).call(this);
            },
          },
          {
            key: 'unmaskedValue',
            get: function () {
              return this._blocks.reduce(function (t, e) {
                return t + e.unmaskedValue;
              }, '');
            },
            set: function (t) {
              aa(Jo(i.prototype), 'unmaskedValue', t, this, !0);
            },
          },
          {
            key: 'value',
            get: function () {
              return this._blocks.reduce(function (t, e) {
                return t + e.value;
              }, '');
            },
            set: function (t) {
              aa(Jo(i.prototype), 'value', t, this, !0);
            },
          },
          {
            key: 'appendTail',
            value: function (t) {
              return na(Jo(i.prototype), 'appendTail', this)
                .call(this, t)
                .aggregate(this._appendPlaceholder());
            },
          },
          {
            key: '_appendEager',
            value: function () {
              var t,
                e = new ua(),
                i =
                  null === (t = this._mapPosToBlock(this.value.length)) || void 0 === t
                    ? void 0
                    : t.index;
              if (null == i) return e;
              this._blocks[i].isFilled && ++i;
              for (var s = i; s < this._blocks.length; ++s) {
                var n = this._blocks[s]._appendEager();
                if (!n.inserted) break;
                e.aggregate(n);
              }
              return e;
            },
          },
          {
            key: '_appendCharRaw',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = this._mapPosToBlock(this.value.length),
                s = new ua();
              if (!i) return s;
              for (var n = i.index; ; ++n) {
                var o,
                  a,
                  r = this._blocks[n];
                if (!r) break;
                var l = r._appendChar(
                    t,
                    Object.assign({}, e, {
                      _beforeTailState:
                        null === (o = e._beforeTailState) ||
                        void 0 === o ||
                        null === (a = o._blocks) ||
                        void 0 === a
                          ? void 0
                          : a[n],
                    }),
                  ),
                  h = l.skip;
                if ((s.aggregate(l), h || l.rawInserted)) break;
              }
              return s;
            },
          },
          {
            key: 'extractTail',
            value: function () {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                s = new Oa();
              return (
                e === i ||
                  this._forEachBlocksInRange(e, i, function (e, i, n, o) {
                    var a = e.extractTail(n, o);
                    (a.stop = t._findStopBefore(i)),
                      (a.from = t._blockStartPos(i)),
                      a instanceof Oa && (a.blockIndex = i),
                      s.extend(a);
                  }),
                s
              );
            },
          },
          {
            key: 'extractInput',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if (t === e) return '';
              var s = '';
              return (
                this._forEachBlocksInRange(t, e, function (t, e, n, o) {
                  s += t.extractInput(n, o, i);
                }),
                s
              );
            },
          },
          {
            key: '_findStopBefore',
            value: function (t) {
              for (var e, i = 0; i < this._stops.length; ++i) {
                var s = this._stops[i];
                if (!(s <= t)) break;
                e = s;
              }
              return e;
            },
          },
          {
            key: '_appendPlaceholder',
            value: function (t) {
              var e = this,
                i = new ua();
              if (this.lazy && null == t) return i;
              var s = this._mapPosToBlock(this.value.length);
              if (!s) return i;
              var n = s.index,
                o = null != t ? t : this._blocks.length;
              return (
                this._blocks.slice(n, o).forEach(function (s) {
                  if (!s.lazy || null != t) {
                    var n = null != s._blocks ? [s._blocks.length] : [],
                      o = s._appendPlaceholder.apply(s, n);
                    (e._value += o.inserted), i.aggregate(o);
                  }
                }),
                i
              );
            },
          },
          {
            key: '_mapPosToBlock',
            value: function (t) {
              for (var e = '', i = 0; i < this._blocks.length; ++i) {
                var s = this._blocks[i],
                  n = e.length;
                if (t <= (e += s.value).length) return { index: i, offset: t - n };
              }
            },
          },
          {
            key: '_blockStartPos',
            value: function (t) {
              return this._blocks.slice(0, t).reduce(function (t, e) {
                return t + e.value.length;
              }, 0);
            },
          },
          {
            key: '_forEachBlocksInRange',
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                i = arguments.length > 2 ? arguments[2] : void 0,
                s = this._mapPosToBlock(t);
              if (s) {
                var n = this._mapPosToBlock(e),
                  o = n && s.index === n.index,
                  a = s.offset,
                  r = n && o ? n.offset : this._blocks[s.index].value.length;
                if ((i(this._blocks[s.index], s.index, a, r), n && !o)) {
                  for (var l = s.index + 1; l < n.index; ++l)
                    i(this._blocks[l], l, 0, this._blocks[l].value.length);
                  i(this._blocks[n.index], n.index, 0, n.offset);
                }
              }
            },
          },
          {
            key: 'remove',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                s = na(Jo(i.prototype), 'remove', this).call(this, t, e);
              return (
                this._forEachBlocksInRange(t, e, function (t, e, i, n) {
                  s.aggregate(t.remove(i, n));
                }),
                s
              );
            },
          },
          {
            key: 'nearestInputPos',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : da;
              if (!this._blocks.length) return 0;
              var i = new Ta(this, t);
              if (e === da)
                return i.pushRightBeforeInput()
                  ? i.pos
                  : (i.popState(), i.pushLeftBeforeInput() ? i.pos : this.value.length);
              if (e === fa || e === pa) {
                if (e === fa) {
                  if ((i.pushRightBeforeFilled(), i.ok && i.pos === t)) return t;
                  i.popState();
                }
                if (
                  (i.pushLeftBeforeInput(),
                  i.pushLeftBeforeRequired(),
                  i.pushLeftBeforeFilled(),
                  e === fa)
                ) {
                  if ((i.pushRightBeforeInput(), i.pushRightBeforeRequired(), i.ok && i.pos <= t))
                    return i.pos;
                  if ((i.popState(), i.ok && i.pos <= t)) return i.pos;
                  i.popState();
                }
                return i.ok
                  ? i.pos
                  : e === pa
                    ? 0
                    : (i.popState(), i.ok ? i.pos : (i.popState(), i.ok ? i.pos : 0));
              }
              return e === ga || e === ma
                ? (i.pushRightBeforeInput(),
                  i.pushRightBeforeRequired(),
                  i.pushRightBeforeFilled()
                    ? i.pos
                    : e === ma
                      ? this.value.length
                      : (i.popState(),
                        i.ok ? i.pos : (i.popState(), i.ok ? i.pos : this.nearestInputPos(t, fa))))
                : t;
            },
          },
          {
            key: 'maskedBlock',
            value: function (t) {
              return this.maskedBlocks(t)[0];
            },
          },
          {
            key: 'maskedBlocks',
            value: function (t) {
              var e = this,
                i = this._maskedBlocks[t];
              return i
                ? i.map(function (t) {
                    return e._blocks[t];
                  })
                : [];
            },
          },
        ]),
        i
      );
    })(Ma);
  (Ia.DEFAULTS = { lazy: !0, placeholderChar: '_' }),
    (Ia.STOP_CHAR = '`'),
    (Ia.ESCAPE_CHAR = '\\'),
    (Ia.InputDefinition = Da),
    (Ia.FixedDefinition = Pa),
    (wa.MaskedPattern = Ia);
  var La = (function (t) {
    Go(i, t);
    var e = ia(i);
    function i() {
      return Xo(this, i), e.apply(this, arguments);
    }
    return (
      Zo(i, [
        {
          key: '_matchFrom',
          get: function () {
            return this.maxLength - String(this.from).length;
          },
        },
        {
          key: '_update',
          value: function (t) {
            t = Object.assign(
              { to: this.to || 0, from: this.from || 0, maxLength: this.maxLength || 0 },
              t,
            );
            var e = String(t.to).length;
            null != t.maxLength && (e = Math.max(e, t.maxLength)), (t.maxLength = e);
            for (
              var s = String(t.from).padStart(e, '0'), n = String(t.to).padStart(e, '0'), o = 0;
              o < n.length && n[o] === s[o];

            )
              ++o;
            (t.mask = n.slice(0, o).replace(/0/g, '\\0') + '0'.repeat(e - o)),
              na(Jo(i.prototype), '_update', this).call(this, t);
          },
        },
        {
          key: 'isComplete',
          get: function () {
            return na(Jo(i.prototype), 'isComplete', this) && Boolean(this.value);
          },
        },
        {
          key: 'boundaries',
          value: function (t) {
            var e = '',
              i = '',
              s = ra(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
              n = s[1],
              o = s[2];
            return (
              o && ((e = '0'.repeat(n.length) + o), (i = '9'.repeat(n.length) + o)),
              [(e = e.padEnd(this.maxLength, '0')), (i = i.padEnd(this.maxLength, '9'))]
            );
          },
        },
        {
          key: 'doPrepare',
          value: function (t) {
            var e,
              s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = xa(na(Jo(i.prototype), 'doPrepare', this).call(this, t.replace(/\D/g, ''), s)),
              o = ra(n, 2);
            if (((t = o[0]), (e = o[1]), !this.autofix || !t)) return t;
            var a = String(this.from).padStart(this.maxLength, '0'),
              r = String(this.to).padStart(this.maxLength, '0'),
              l = this.value + t;
            if (l.length > this.maxLength) return '';
            var h = this.boundaries(l),
              u = ra(h, 2),
              c = u[0],
              d = u[1];
            return Number(d) < this.from
              ? a[l.length - 1]
              : Number(c) > this.to
                ? 'pad' === this.autofix && l.length < this.maxLength
                  ? ['', e.aggregate(this.append(a[l.length - 1] + t, s))]
                  : r[l.length - 1]
                : t;
          },
        },
        {
          key: 'doValidate',
          value: function () {
            var t,
              e = this.value,
              s = e.search(/[^0]/);
            if (-1 === s && e.length <= this._matchFrom) return !0;
            for (
              var n = this.boundaries(e),
                o = ra(n, 2),
                a = o[0],
                r = o[1],
                l = arguments.length,
                h = new Array(l),
                u = 0;
              u < l;
              u++
            )
              h[u] = arguments[u];
            return (
              this.from <= Number(r) &&
              Number(a) <= this.to &&
              (t = na(Jo(i.prototype), 'doValidate', this)).call.apply(t, [this].concat(h))
            );
          },
        },
      ]),
      i
    );
  })(Ia);
  wa.MaskedRange = La;
  var Va = (function (t) {
    Go(i, t);
    var e = ia(i);
    function i(t) {
      return Xo(this, i), e.call(this, Object.assign({}, i.DEFAULTS, t));
    }
    return (
      Zo(i, [
        {
          key: '_update',
          value: function (t) {
            t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
            var e = t.blocks;
            (t.blocks = Object.assign({}, i.GET_DEFAULT_BLOCKS())),
              t.min && (t.blocks.Y.from = t.min.getFullYear()),
              t.max && (t.blocks.Y.to = t.max.getFullYear()),
              t.min &&
                t.max &&
                t.blocks.Y.from === t.blocks.Y.to &&
                ((t.blocks.m.from = t.min.getMonth() + 1),
                (t.blocks.m.to = t.max.getMonth() + 1),
                t.blocks.m.from === t.blocks.m.to &&
                  ((t.blocks.d.from = t.min.getDate()), (t.blocks.d.to = t.max.getDate()))),
              Object.assign(t.blocks, this.blocks, e),
              Object.keys(t.blocks).forEach(function (e) {
                var i = t.blocks[e];
                !('autofix' in i) && 'autofix' in t && (i.autofix = t.autofix);
              }),
              na(Jo(i.prototype), '_update', this).call(this, t);
          },
        },
        {
          key: 'doValidate',
          value: function () {
            for (var t, e = this.date, s = arguments.length, n = new Array(s), o = 0; o < s; o++)
              n[o] = arguments[o];
            return (
              (t = na(Jo(i.prototype), 'doValidate', this)).call.apply(t, [this].concat(n)) &&
              (!this.isComplete ||
                (this.isDateExist(this.value) &&
                  null != e &&
                  (null == this.min || this.min <= e) &&
                  (null == this.max || e <= this.max)))
            );
          },
        },
        {
          key: 'isDateExist',
          value: function (t) {
            return this.format(this.parse(t, this), this).indexOf(t) >= 0;
          },
        },
        {
          key: 'date',
          get: function () {
            return this.typedValue;
          },
          set: function (t) {
            this.typedValue = t;
          },
        },
        {
          key: 'typedValue',
          get: function () {
            return this.isComplete ? na(Jo(i.prototype), 'typedValue', this) : null;
          },
          set: function (t) {
            aa(Jo(i.prototype), 'typedValue', t, this, !0);
          },
        },
        {
          key: 'maskEquals',
          value: function (t) {
            return t === Date || na(Jo(i.prototype), 'maskEquals', this).call(this, t);
          },
        },
      ]),
      i
    );
  })(Ia);
  (Va.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function (t) {
      return t
        ? [
            String(t.getDate()).padStart(2, '0'),
            String(t.getMonth() + 1).padStart(2, '0'),
            t.getFullYear(),
          ].join('.')
        : '';
    },
    parse: function (t) {
      var e = ra(t.split('.'), 3),
        i = e[0],
        s = e[1],
        n = e[2];
      return new Date(n, s - 1, i);
    },
  }),
    (Va.GET_DEFAULT_BLOCKS = function () {
      return {
        d: { mask: La, from: 1, to: 31, maxLength: 2 },
        m: { mask: La, from: 1, to: 12, maxLength: 2 },
        Y: { mask: La, from: 1900, to: 9999 },
      };
    }),
    (wa.MaskedDate = Va);
  var za = (function () {
    function t() {
      Xo(this, t);
    }
    return (
      Zo(t, [
        {
          key: 'selectionStart',
          get: function () {
            var t;
            try {
              t = this._unsafeSelectionStart;
            } catch (t) {}
            return null != t ? t : this.value.length;
          },
        },
        {
          key: 'selectionEnd',
          get: function () {
            var t;
            try {
              t = this._unsafeSelectionEnd;
            } catch (t) {}
            return null != t ? t : this.value.length;
          },
        },
        {
          key: 'select',
          value: function (t, e) {
            if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd))
              try {
                this._unsafeSelect(t, e);
              } catch (t) {}
          },
        },
        { key: '_unsafeSelect', value: function (t, e) {} },
        {
          key: 'isActive',
          get: function () {
            return !1;
          },
        },
        { key: 'bindEvents', value: function (t) {} },
        { key: 'unbindEvents', value: function () {} },
      ]),
      t
    );
  })();
  wa.MaskElement = za;
  var ja = (function (t) {
    Go(i, t);
    var e = ia(i);
    function i(t) {
      var s;
      return Xo(this, i), ((s = e.call(this)).input = t), (s._handlers = {}), s;
    }
    return (
      Zo(i, [
        {
          key: 'rootElement',
          get: function () {
            var t, e, i;
            return null !==
              (t =
                null === (e = (i = this.input).getRootNode) || void 0 === e ? void 0 : e.call(i)) &&
              void 0 !== t
              ? t
              : document;
          },
        },
        {
          key: 'isActive',
          get: function () {
            return this.input === this.rootElement.activeElement;
          },
        },
        {
          key: '_unsafeSelectionStart',
          get: function () {
            return this.input.selectionStart;
          },
        },
        {
          key: '_unsafeSelectionEnd',
          get: function () {
            return this.input.selectionEnd;
          },
        },
        {
          key: '_unsafeSelect',
          value: function (t, e) {
            this.input.setSelectionRange(t, e);
          },
        },
        {
          key: 'value',
          get: function () {
            return this.input.value;
          },
          set: function (t) {
            this.input.value = t;
          },
        },
        {
          key: 'bindEvents',
          value: function (t) {
            var e = this;
            Object.keys(t).forEach(function (s) {
              return e._toggleEventHandler(i.EVENTS_MAP[s], t[s]);
            });
          },
        },
        {
          key: 'unbindEvents',
          value: function () {
            var t = this;
            Object.keys(this._handlers).forEach(function (e) {
              return t._toggleEventHandler(e);
            });
          },
        },
        {
          key: '_toggleEventHandler',
          value: function (t, e) {
            this._handlers[t] &&
              (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]),
              e && (this.input.addEventListener(t, e), (this._handlers[t] = e));
          },
        },
      ]),
      i
    );
  })(za);
  (ja.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur',
  }),
    (wa.HTMLMaskElement = ja);
  var Na = (function (t) {
    Go(i, t);
    var e = ia(i);
    function i() {
      return Xo(this, i), e.apply(this, arguments);
    }
    return (
      Zo(i, [
        {
          key: '_unsafeSelectionStart',
          get: function () {
            var t = this.rootElement,
              e = t.getSelection && t.getSelection(),
              i = e && e.anchorOffset,
              s = e && e.focusOffset;
            return null == s || null == i || i < s ? i : s;
          },
        },
        {
          key: '_unsafeSelectionEnd',
          get: function () {
            var t = this.rootElement,
              e = t.getSelection && t.getSelection(),
              i = e && e.anchorOffset,
              s = e && e.focusOffset;
            return null == s || null == i || i > s ? i : s;
          },
        },
        {
          key: '_unsafeSelect',
          value: function (t, e) {
            if (this.rootElement.createRange) {
              var i = this.rootElement.createRange();
              i.setStart(this.input.firstChild || this.input, t),
                i.setEnd(this.input.lastChild || this.input, e);
              var s = this.rootElement,
                n = s.getSelection && s.getSelection();
              n && (n.removeAllRanges(), n.addRange(i));
            }
          },
        },
        {
          key: 'value',
          get: function () {
            return this.input.textContent;
          },
          set: function (t) {
            this.input.textContent = t;
          },
        },
      ]),
      i
    );
  })(ja);
  wa.HTMLContenteditableMaskElement = Na;
  var Wa = ['mask'],
    Ha = (function () {
      function t(e, i) {
        Xo(this, t),
          (this.el =
            e instanceof za
              ? e
              : e.isContentEditable && 'INPUT' !== e.tagName && 'TEXTAREA' !== e.tagName
                ? new Na(e)
                : new ja(e)),
          (this.masked = Aa(i)),
          (this._listeners = {}),
          (this._value = ''),
          (this._unmaskedValue = ''),
          (this._saveSelection = this._saveSelection.bind(this)),
          (this._onInput = this._onInput.bind(this)),
          (this._onChange = this._onChange.bind(this)),
          (this._onDrop = this._onDrop.bind(this)),
          (this._onFocus = this._onFocus.bind(this)),
          (this._onClick = this._onClick.bind(this)),
          (this.alignCursor = this.alignCursor.bind(this)),
          (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
          this._bindEvents(),
          this.updateValue(),
          this._onChange();
      }
      return (
        Zo(t, [
          {
            key: 'mask',
            get: function () {
              return this.masked.mask;
            },
            set: function (t) {
              if (!this.maskEquals(t))
                if (t instanceof wa.Masked || this.masked.constructor !== Sa(t)) {
                  var e = Aa({ mask: t });
                  (e.unmaskedValue = this.masked.unmaskedValue), (this.masked = e);
                } else this.masked.updateOptions({ mask: t });
            },
          },
          {
            key: 'maskEquals',
            value: function (t) {
              var e;
              return (
                null == t || (null === (e = this.masked) || void 0 === e ? void 0 : e.maskEquals(t))
              );
            },
          },
          {
            key: 'value',
            get: function () {
              return this._value;
            },
            set: function (t) {
              this.value !== t &&
                ((this.masked.value = t), this.updateControl(), this.alignCursor());
            },
          },
          {
            key: 'unmaskedValue',
            get: function () {
              return this._unmaskedValue;
            },
            set: function (t) {
              this.unmaskedValue !== t &&
                ((this.masked.unmaskedValue = t), this.updateControl(), this.alignCursor());
            },
          },
          {
            key: 'typedValue',
            get: function () {
              return this.masked.typedValue;
            },
            set: function (t) {
              this.masked.typedValueEquals(t) ||
                ((this.masked.typedValue = t), this.updateControl(), this.alignCursor());
            },
          },
          {
            key: '_bindEvents',
            value: function () {
              this.el.bindEvents({
                selectionChange: this._saveSelection,
                input: this._onInput,
                drop: this._onDrop,
                click: this._onClick,
                focus: this._onFocus,
                commit: this._onChange,
              });
            },
          },
          {
            key: '_unbindEvents',
            value: function () {
              this.el && this.el.unbindEvents();
            },
          },
          {
            key: '_fireEvent',
            value: function (t) {
              for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                i[s - 1] = arguments[s];
              var n = this._listeners[t];
              n &&
                n.forEach(function (t) {
                  return t.apply(void 0, i);
                });
            },
          },
          {
            key: 'selectionStart',
            get: function () {
              return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
            },
          },
          {
            key: 'cursorPos',
            get: function () {
              return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
            },
            set: function (t) {
              this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection());
            },
          },
          {
            key: '_saveSelection',
            value: function () {
              this.value !== this.el.value &&
                console.warn(
                  'Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.',
                ),
                (this._selection = { start: this.selectionStart, end: this.cursorPos });
            },
          },
          {
            key: 'updateValue',
            value: function () {
              (this.masked.value = this.el.value), (this._value = this.masked.value);
            },
          },
          {
            key: 'updateControl',
            value: function () {
              var t = this.masked.unmaskedValue,
                e = this.masked.value,
                i = this.unmaskedValue !== t || this.value !== e;
              (this._unmaskedValue = t),
                (this._value = e),
                this.el.value !== e && (this.el.value = e),
                i && this._fireChangeEvents();
            },
          },
          {
            key: 'updateOptions',
            value: function (t) {
              var e = t.mask,
                i = ta(t, Wa),
                s = !this.maskEquals(e),
                n = !ya(this.masked, i);
              s && (this.mask = e),
                n && this.masked.updateOptions(i),
                (s || n) && this.updateControl();
            },
          },
          {
            key: 'updateCursor',
            value: function (t) {
              null != t && ((this.cursorPos = t), this._delayUpdateCursor(t));
            },
          },
          {
            key: '_delayUpdateCursor',
            value: function (t) {
              var e = this;
              this._abortUpdateCursor(),
                (this._changingCursorPos = t),
                (this._cursorChanging = setTimeout(function () {
                  e.el && ((e.cursorPos = e._changingCursorPos), e._abortUpdateCursor());
                }, 10));
            },
          },
          {
            key: '_fireChangeEvents',
            value: function () {
              this._fireEvent('accept', this._inputEvent),
                this.masked.isComplete && this._fireEvent('complete', this._inputEvent);
            },
          },
          {
            key: '_abortUpdateCursor',
            value: function () {
              this._cursorChanging &&
                (clearTimeout(this._cursorChanging), delete this._cursorChanging);
            },
          },
          {
            key: 'alignCursor',
            value: function () {
              this.cursorPos = this.masked.nearestInputPos(
                this.masked.nearestInputPos(this.cursorPos, fa),
              );
            },
          },
          {
            key: 'alignCursorFriendly',
            value: function () {
              this.selectionStart === this.cursorPos && this.alignCursor();
            },
          },
          {
            key: 'on',
            value: function (t, e) {
              return (
                this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this
              );
            },
          },
          {
            key: 'off',
            value: function (t, e) {
              if (!this._listeners[t]) return this;
              if (!e) return delete this._listeners[t], this;
              var i = this._listeners[t].indexOf(e);
              return i >= 0 && this._listeners[t].splice(i, 1), this;
            },
          },
          {
            key: '_onInput',
            value: function (t) {
              if (((this._inputEvent = t), this._abortUpdateCursor(), !this._selection))
                return this.updateValue();
              var e = new _a(this.el.value, this.cursorPos, this.value, this._selection),
                i = this.masked.rawInputValue,
                s = this.masked.splice(
                  e.startChangePos,
                  e.removed.length,
                  e.inserted,
                  e.removeDirection,
                  { input: !0, raw: !0 },
                ).offset,
                n = i === this.masked.rawInputValue ? e.removeDirection : da,
                o = this.masked.nearestInputPos(e.startChangePos + s, n);
              n !== da && (o = this.masked.nearestInputPos(o, da)),
                this.updateControl(),
                this.updateCursor(o),
                delete this._inputEvent;
            },
          },
          {
            key: '_onChange',
            value: function () {
              this.value !== this.el.value && this.updateValue(),
                this.masked.doCommit(),
                this.updateControl(),
                this._saveSelection();
            },
          },
          {
            key: '_onDrop',
            value: function (t) {
              t.preventDefault(), t.stopPropagation();
            },
          },
          {
            key: '_onFocus',
            value: function (t) {
              this.alignCursorFriendly();
            },
          },
          {
            key: '_onClick',
            value: function (t) {
              this.alignCursorFriendly();
            },
          },
          {
            key: 'destroy',
            value: function () {
              this._unbindEvents(), (this._listeners.length = 0), delete this.el;
            },
          },
        ]),
        t
      );
    })();
  wa.InputMask = Ha;
  var $a = (function (t) {
    Go(i, t);
    var e = ia(i);
    function i() {
      return Xo(this, i), e.apply(this, arguments);
    }
    return (
      Zo(i, [
        {
          key: '_update',
          value: function (t) {
            t.enum && (t.mask = '*'.repeat(t.enum[0].length)),
              na(Jo(i.prototype), '_update', this).call(this, t);
          },
        },
        {
          key: 'doValidate',
          value: function () {
            for (var t, e = this, s = arguments.length, n = new Array(s), o = 0; o < s; o++)
              n[o] = arguments[o];
            return (
              this.enum.some(function (t) {
                return t.indexOf(e.unmaskedValue) >= 0;
              }) && (t = na(Jo(i.prototype), 'doValidate', this)).call.apply(t, [this].concat(n))
            );
          },
        },
      ]),
      i
    );
  })(Ia);
  wa.MaskedEnum = $a;
  var Ua,
    Ya = (function (t) {
      Go(i, t);
      var e = ia(i);
      function i(t) {
        return Xo(this, i), e.call(this, Object.assign({}, i.DEFAULTS, t));
      }
      return (
        Zo(i, [
          {
            key: '_update',
            value: function (t) {
              na(Jo(i.prototype), '_update', this).call(this, t), this._updateRegExps();
            },
          },
          {
            key: '_updateRegExps',
            value: function () {
              var t = '^' + (this.allowNegative ? '[+|\\-]?' : ''),
                e = (this.scale ? '(' + va(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
              (this._numberRegExpInput = new RegExp(t + '(0|([1-9]+\\d*))?' + e)),
                (this._numberRegExp = new RegExp(t + '\\d*' + e)),
                (this._mapToRadixRegExp = new RegExp(
                  '[' + this.mapToRadix.map(va).join('') + ']',
                  'g',
                )),
                (this._thousandsSeparatorRegExp = new RegExp(va(this.thousandsSeparator), 'g'));
            },
          },
          {
            key: '_removeThousandsSeparators',
            value: function (t) {
              return t.replace(this._thousandsSeparatorRegExp, '');
            },
          },
          {
            key: '_insertThousandsSeparators',
            value: function (t) {
              var e = t.split(this.radix);
              return (
                (e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)),
                e.join(this.radix)
              );
            },
          },
          {
            key: 'doPrepare',
            value: function (t) {
              var e;
              t = t.replace(this._mapToRadixRegExp, this.radix);
              for (
                var s = this._removeThousandsSeparators(t),
                  n = arguments.length,
                  o = new Array(n > 1 ? n - 1 : 0),
                  a = 1;
                a < n;
                a++
              )
                o[a - 1] = arguments[a];
              var r = xa(
                  (e = na(Jo(i.prototype), 'doPrepare', this)).call.apply(e, [this, s].concat(o)),
                ),
                l = ra(r, 2),
                h = l[0],
                u = l[1];
              return t && !s && (u.skip = !0), [h, u];
            },
          },
          {
            key: '_separatorsCount',
            value: function (t) {
              for (
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  i = 0,
                  s = 0;
                s < t;
                ++s
              )
                this._value.indexOf(this.thousandsSeparator, s) === s &&
                  (++i, e && (t += this.thousandsSeparator.length));
              return i;
            },
          },
          {
            key: '_separatorsCountFromSlice',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
              return this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
            },
          },
          {
            key: 'extractInput',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                s = arguments.length > 2 ? arguments[2] : void 0,
                n = this._adjustRangeWithSeparators(t, e),
                o = ra(n, 2);
              return (
                (t = o[0]),
                (e = o[1]),
                this._removeThousandsSeparators(
                  na(Jo(i.prototype), 'extractInput', this).call(this, t, e, s),
                )
              );
            },
          },
          {
            key: '_appendCharRaw',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!this.thousandsSeparator)
                return na(Jo(i.prototype), '_appendCharRaw', this).call(this, t, e);
              var s = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                n = this._separatorsCountFromSlice(s);
              this._value = this._removeThousandsSeparators(this.value);
              var o = na(Jo(i.prototype), '_appendCharRaw', this).call(this, t, e);
              this._value = this._insertThousandsSeparators(this._value);
              var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                r = this._separatorsCountFromSlice(a);
              return (
                (o.tailShift += (r - n) * this.thousandsSeparator.length),
                (o.skip = !o.rawInserted && t === this.thousandsSeparator),
                o
              );
            },
          },
          {
            key: '_findSeparatorAround',
            value: function (t) {
              if (this.thousandsSeparator) {
                var e = t - this.thousandsSeparator.length + 1,
                  i = this.value.indexOf(this.thousandsSeparator, e);
                if (i <= t) return i;
              }
              return -1;
            },
          },
          {
            key: '_adjustRangeWithSeparators',
            value: function (t, e) {
              var i = this._findSeparatorAround(t);
              i >= 0 && (t = i);
              var s = this._findSeparatorAround(e);
              return s >= 0 && (e = s + this.thousandsSeparator.length), [t, e];
            },
          },
          {
            key: 'remove',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                i = this._adjustRangeWithSeparators(t, e),
                s = ra(i, 2);
              (t = s[0]), (e = s[1]);
              var n = this.value.slice(0, t),
                o = this.value.slice(e),
                a = this._separatorsCount(n.length);
              this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + o));
              var r = this._separatorsCountFromSlice(n);
              return new ua({ tailShift: (r - a) * this.thousandsSeparator.length });
            },
          },
          {
            key: 'nearestInputPos',
            value: function (t, e) {
              if (!this.thousandsSeparator) return t;
              switch (e) {
                case da:
                case fa:
                case pa:
                  var i = this._findSeparatorAround(t - 1);
                  if (i >= 0) {
                    var s = i + this.thousandsSeparator.length;
                    if (t < s || this.value.length <= s || e === pa) return i;
                  }
                  break;
                case ga:
                case ma:
                  var n = this._findSeparatorAround(t);
                  if (n >= 0) return n + this.thousandsSeparator.length;
              }
              return t;
            },
          },
          {
            key: 'doValidate',
            value: function (t) {
              var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(
                this._removeThousandsSeparators(this.value),
              );
              if (e) {
                var s = this.number;
                e =
                  e &&
                  !isNaN(s) &&
                  (null == this.min || this.min >= 0 || this.min <= this.number) &&
                  (null == this.max || this.max <= 0 || this.number <= this.max);
              }
              return e && na(Jo(i.prototype), 'doValidate', this).call(this, t);
            },
          },
          {
            key: 'doCommit',
            value: function () {
              if (this.value) {
                var t = this.number,
                  e = t;
                null != this.min && (e = Math.max(e, this.min)),
                  null != this.max && (e = Math.min(e, this.max)),
                  e !== t && (this.unmaskedValue = String(e));
                var s = this.value;
                this.normalizeZeros && (s = this._normalizeZeros(s)),
                  this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)),
                  (this._value = s);
              }
              na(Jo(i.prototype), 'doCommit', this).call(this);
            },
          },
          {
            key: '_normalizeZeros',
            value: function (t) {
              var e = this._removeThousandsSeparators(t).split(this.radix);
              return (
                (e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, i, s) {
                  return e + s;
                })),
                t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + '0'),
                e.length > 1 && ((e[1] = e[1].replace(/0*$/, '')), e[1].length || (e.length = 1)),
                this._insertThousandsSeparators(e.join(this.radix))
              );
            },
          },
          {
            key: '_padFractionalZeros',
            value: function (t) {
              if (!t) return t;
              var e = t.split(this.radix);
              return (
                e.length < 2 && e.push(''),
                (e[1] = e[1].padEnd(this.scale, '0')),
                e.join(this.radix)
              );
            },
          },
          {
            key: 'unmaskedValue',
            get: function () {
              return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(
                this.radix,
                '.',
              );
            },
            set: function (t) {
              aa(Jo(i.prototype), 'unmaskedValue', t.replace('.', this.radix), this, !0);
            },
          },
          {
            key: 'typedValue',
            get: function () {
              return Number(this.unmaskedValue);
            },
            set: function (t) {
              aa(Jo(i.prototype), 'unmaskedValue', String(t), this, !0);
            },
          },
          {
            key: 'number',
            get: function () {
              return this.typedValue;
            },
            set: function (t) {
              this.typedValue = t;
            },
          },
          {
            key: 'allowNegative',
            get: function () {
              return (
                this.signed ||
                (null != this.min && this.min < 0) ||
                (null != this.max && this.max < 0)
              );
            },
          },
          {
            key: 'typedValueEquals',
            value: function (t) {
              return (
                (na(Jo(i.prototype), 'typedValueEquals', this).call(this, t) ||
                  (i.EMPTY_VALUES.includes(t) && i.EMPTY_VALUES.includes(this.typedValue))) &&
                !(0 === t && '' === this.value)
              );
            },
          },
        ]),
        i
      );
    })(Ma);
  (Ya.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1,
  }),
    (Ya.EMPTY_VALUES = [].concat(
      (function (t) {
        if (Array.isArray(t)) return ha(t);
      })((Ua = Ma.EMPTY_VALUES)) ||
        (function (t) {
          if (
            ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t);
        })(Ua) ||
        la(Ua) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        })(),
      [0],
    )),
    (wa.MaskedNumber = Ya);
  var qa = (function (t) {
    Go(i, t);
    var e = ia(i);
    function i() {
      return Xo(this, i), e.apply(this, arguments);
    }
    return (
      Zo(i, [
        {
          key: '_update',
          value: function (t) {
            t.mask && (t.validate = t.mask), na(Jo(i.prototype), '_update', this).call(this, t);
          },
        },
      ]),
      i
    );
  })(Ma);
  wa.MaskedFunction = qa;
  var Xa = ['compiledMasks', 'currentMaskRef', 'currentMask'],
    Ka = (function (t) {
      Go(i, t);
      var e = ia(i);
      function i(t) {
        var s;
        return (
          Xo(this, i), ((s = e.call(this, Object.assign({}, i.DEFAULTS, t))).currentMask = null), s
        );
      }
      return (
        Zo(i, [
          {
            key: '_update',
            value: function (t) {
              na(Jo(i.prototype), '_update', this).call(this, t),
                'mask' in t &&
                  (this.compiledMasks = Array.isArray(t.mask)
                    ? t.mask.map(function (t) {
                        return Aa(t);
                      })
                    : []);
            },
          },
          {
            key: '_appendCharRaw',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = this._applyDispatch(t, e);
              return (
                this.currentMask &&
                  i.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(e))),
                i
              );
            },
          },
          {
            key: '_applyDispatch',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
                s = this.rawInputValue,
                n = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : s,
                o = s.slice(n.length),
                a = this.currentMask,
                r = new ua(),
                l = null == a ? void 0 : a.state;
              if (((this.currentMask = this.doDispatch(t, Object.assign({}, e))), this.currentMask))
                if (this.currentMask !== a) {
                  if ((this.currentMask.reset(), n)) {
                    var h = this.currentMask.append(n, { raw: !0 });
                    r.tailShift = h.inserted.length - i.length;
                  }
                  o && (r.tailShift += this.currentMask.append(o, { raw: !0, tail: !0 }).tailShift);
                } else this.currentMask.state = l;
              return r;
            },
          },
          {
            key: '_appendPlaceholder',
            value: function () {
              var t = this._applyDispatch.apply(this, arguments);
              return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
            },
          },
          {
            key: '_appendEager',
            value: function () {
              var t = this._applyDispatch.apply(this, arguments);
              return this.currentMask && t.aggregate(this.currentMask._appendEager()), t;
            },
          },
          {
            key: 'currentMaskFlags',
            value: function (t) {
              var e, i;
              return Object.assign({}, t, {
                _beforeTailState:
                  ((null === (e = t._beforeTailState) || void 0 === e
                    ? void 0
                    : e.currentMaskRef) === this.currentMask &&
                    (null === (i = t._beforeTailState) || void 0 === i ? void 0 : i.currentMask)) ||
                  t._beforeTailState,
              });
            },
          },
          {
            key: 'doDispatch',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.dispatch(t, this, e);
            },
          },
          {
            key: 'doValidate',
            value: function (t) {
              return (
                na(Jo(i.prototype), 'doValidate', this).call(this, t) &&
                (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)))
              );
            },
          },
          {
            key: 'doPrepare',
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = xa(na(Jo(i.prototype), 'doPrepare', this).call(this, t, e)),
                n = ra(s, 2),
                o = n[0],
                a = n[1];
              if (this.currentMask) {
                var r,
                  l = xa(
                    na(Jo(i.prototype), 'doPrepare', this).call(this, o, this.currentMaskFlags(e)),
                  ),
                  h = ra(l, 2);
                (o = h[0]), (r = h[1]), (a = a.aggregate(r));
              }
              return [o, a];
            },
          },
          {
            key: 'reset',
            value: function () {
              var t;
              null === (t = this.currentMask) || void 0 === t || t.reset(),
                this.compiledMasks.forEach(function (t) {
                  return t.reset();
                });
            },
          },
          {
            key: 'value',
            get: function () {
              return this.currentMask ? this.currentMask.value : '';
            },
            set: function (t) {
              aa(Jo(i.prototype), 'value', t, this, !0);
            },
          },
          {
            key: 'unmaskedValue',
            get: function () {
              return this.currentMask ? this.currentMask.unmaskedValue : '';
            },
            set: function (t) {
              aa(Jo(i.prototype), 'unmaskedValue', t, this, !0);
            },
          },
          {
            key: 'typedValue',
            get: function () {
              return this.currentMask ? this.currentMask.typedValue : '';
            },
            set: function (t) {
              var e = String(t);
              this.currentMask &&
                ((this.currentMask.typedValue = t), (e = this.currentMask.unmaskedValue)),
                (this.unmaskedValue = e);
            },
          },
          {
            key: 'isComplete',
            get: function () {
              var t;
              return Boolean(
                null === (t = this.currentMask) || void 0 === t ? void 0 : t.isComplete,
              );
            },
          },
          {
            key: 'isFilled',
            get: function () {
              var t;
              return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isFilled);
            },
          },
          {
            key: 'remove',
            value: function () {
              var t,
                e = new ua();
              return (
                this.currentMask &&
                  e
                    .aggregate((t = this.currentMask).remove.apply(t, arguments))
                    .aggregate(this._applyDispatch()),
                e
              );
            },
          },
          {
            key: 'state',
            get: function () {
              var t;
              return Object.assign({}, na(Jo(i.prototype), 'state', this), {
                _rawInputValue: this.rawInputValue,
                compiledMasks: this.compiledMasks.map(function (t) {
                  return t.state;
                }),
                currentMaskRef: this.currentMask,
                currentMask: null === (t = this.currentMask) || void 0 === t ? void 0 : t.state,
              });
            },
            set: function (t) {
              var e = t.compiledMasks,
                s = t.currentMaskRef,
                n = t.currentMask,
                o = ta(t, Xa);
              this.compiledMasks.forEach(function (t, i) {
                return (t.state = e[i]);
              }),
                null != s && ((this.currentMask = s), (this.currentMask.state = n)),
                aa(Jo(i.prototype), 'state', o, this, !0);
            },
          },
          {
            key: 'extractInput',
            value: function () {
              var t;
              return this.currentMask
                ? (t = this.currentMask).extractInput.apply(t, arguments)
                : '';
            },
          },
          {
            key: 'extractTail',
            value: function () {
              for (var t, e, s = arguments.length, n = new Array(s), o = 0; o < s; o++)
                n[o] = arguments[o];
              return this.currentMask
                ? (t = this.currentMask).extractTail.apply(t, n)
                : (e = na(Jo(i.prototype), 'extractTail', this)).call.apply(e, [this].concat(n));
            },
          },
          {
            key: 'doCommit',
            value: function () {
              this.currentMask && this.currentMask.doCommit(),
                na(Jo(i.prototype), 'doCommit', this).call(this);
            },
          },
          {
            key: 'nearestInputPos',
            value: function () {
              for (var t, e, s = arguments.length, n = new Array(s), o = 0; o < s; o++)
                n[o] = arguments[o];
              return this.currentMask
                ? (t = this.currentMask).nearestInputPos.apply(t, n)
                : (e = na(Jo(i.prototype), 'nearestInputPos', this)).call.apply(
                    e,
                    [this].concat(n),
                  );
            },
          },
          {
            key: 'overwrite',
            get: function () {
              return this.currentMask
                ? this.currentMask.overwrite
                : na(Jo(i.prototype), 'overwrite', this);
            },
            set: function (t) {
              console.warn(
                '"overwrite" option is not available in dynamic mask, use this option in siblings',
              );
            },
          },
          {
            key: 'eager',
            get: function () {
              return this.currentMask ? this.currentMask.eager : na(Jo(i.prototype), 'eager', this);
            },
            set: function (t) {
              console.warn(
                '"eager" option is not available in dynamic mask, use this option in siblings',
              );
            },
          },
          {
            key: 'maskEquals',
            value: function (t) {
              return (
                Array.isArray(t) &&
                this.compiledMasks.every(function (e, i) {
                  var s;
                  return e.maskEquals(null === (s = t[i]) || void 0 === s ? void 0 : s.mask);
                })
              );
            },
          },
          {
            key: 'typedValueEquals',
            value: function (t) {
              var e;
              return Boolean(
                null === (e = this.currentMask) || void 0 === e ? void 0 : e.typedValueEquals(t),
              );
            },
          },
        ]),
        i
      );
    })(Ma);
  (Ka.DEFAULTS = {
    dispatch: function (t, e, i) {
      if (e.compiledMasks.length) {
        var s = e.rawInputValue,
          n = e.compiledMasks.map(function (n, o) {
            return (
              n.reset(),
              n.append(s, { raw: !0 }),
              n.append(t, e.currentMaskFlags(i)),
              { weight: n.rawInputValue.length, index: o }
            );
          });
        return (
          n.sort(function (t, e) {
            return e.weight - t.weight;
          }),
          e.compiledMasks[n[0].index]
        );
      }
    },
  }),
    (wa.MaskedDynamic = Ka);
  var Za = { MASKED: 'value', UNMASKED: 'unmaskedValue', TYPED: 'typedValue' };
  function Ga(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Za.MASKED,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Za.MASKED,
      s = Aa(t);
    return function (t) {
      return s.runIsolated(function (s) {
        return (s[e] = t), s[i];
      });
    };
  }
  (wa.PIPE_TYPE = Za),
    (wa.createPipe = Ga),
    (wa.pipe = function (t) {
      for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
        i[s - 1] = arguments[s];
      return Ga.apply(void 0, i)(t);
    });
  try {
    globalThis.IMask = wa;
  } catch (t) {}
  const Ja = document.getElementById('total'),
    Qa = document.getElementById('clear'),
    tr = document.getElementById('first_payment'),
    er = document.getElementById('first_payment_range'),
    ir = document.getElementById('monthly_payment'),
    sr = document.getElementById('monthly_payment_range'),
    nr = document.getElementById('interest_rate'),
    or = document.getElementById('time'),
    ar = document.getElementById('time_range'),
    rr = [tr, er, ir, sr, or, ar],
    lr = document.getElementById('total_sum'),
    hr = document.getElementById('total_payment'),
    ur = document.getElementById('total_percent');
  cn.register(...Yo);
  const cr = document.getElementById('myChart'),
    dr = new cn(cr, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          { label: ['Ð½Ð°Ñ‡Ð°Ð»ÑŒÐ½Ð°Ñ ÑÑƒÐ¼Ð¼Ð°'], data: [], backgroundColor: '#10273D' },
          { label: ['Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ'], data: [], backgroundColor: '#0D6579' },
          { label: ['Ð½Ð°Ñ‡Ð¸ÑÐ»ÐµÐ½Ð½Ñ‹Ðµ %'], data: [], backgroundColor: '#04CCD9' },
        ],
      },
      options: {
        responsive: !0,
        interaction: { mode: 'point' },
        plugins: {
          tooltip: {
            backgroundColor: '#FFFFFF',
            titleColor: '#000000',
            displayColors: !0,
            usePointStyle: !0,
            callbacks: {
              labelTextColor: function (t) {
                return '#000000';
              },
              label: function (t) {
                let e = t.dataset.label[0] || '';
                return e && (e += ': '), null !== t.parsed.y && (e += wr(t.parsed.y.toFixed())), e;
              },
              title: function (t) {
                return t[0].label + ' Ð¼ÐµÑ.';
              },
            },
          },
          legend: {
            display: !0,
            position: 'bottom',
            useBorderRadius: !0,
            borderRadius: 10,
            labels: { color: 'rgba(16, 39, 61, 0.5)' },
          },
        },
        transitions: {
          show: {
            animations: { tension: { duration: 800, easing: 'linear', from: 0, to: 1, loop: !0 } },
          },
        },
        scales: {
          x: { stacked: !0, display: !1 },
          y: {
            stacked: !0,
            ticks: {
              callback: function (t) {
                return wr(t.toFixed());
              },
            },
          },
        },
      },
    });
  (tr.value = 1e6), (ir.value = 5e4), (or.value = 60);
  let fr,
    pr = [],
    gr = [],
    mr = [],
    br = [],
    vr = [],
    xr = [];
  function yr(t, e, i, s) {
    fr = Number(((t + e) * i) / s);
  }
  function _r(t) {
    if (pr.length > 0) {
      (pr = []), (gr = []), (mr = []), (br = []), kr([0, 0], [0, 0], [0, 0]);
      for (let t = 0; t < 3; t++) (dr.data.datasets[t].data = []), (dr.data.labels = []);
      t.update();
    }
  }
  function kr(t, e, i) {
    let s = e.pop() + t[0];
    (lr.innerText = `${wr(t.pop())}`),
      (hr.innerText = `${wr(s)}`),
      (ur.innerText = `${wr(i.pop())}`);
  }
  function wr(t) {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(t);
  }
  function Mr(t) {
    return t.replace(/\s/g, '');
  }
  function Sr(t, e, i) {
    return /^[0-9\s]*$/.test(t) && t >= e && t <= i;
  }
  function Ar() {
    _r(dr);
    let t = Number(Mr(tr.value)),
      e = Number(Mr(ir.value)),
      i = Number(Mr(nr.value)),
      s = Number(or.value),
      n = [tr, ir, or],
      o = [Sr(t, 1e3, 1e7), Sr(e, 0, 1e6), Sr(s, 1, 120)];
    if (o.every((t) => t)) {
      n.forEach((t) => {
        t.classList.remove('error'), (Ja.disabled = !1);
      }),
        pr.push(t);
      let o = t + e;
      yr(t, e, i, 12), gr.push(fr), mr.push(fr), pr.push(o + fr);
      for (let t = 1; t < s; t++) {
        let s = pr[t];
        yr(s, e, i, 12);
        let n = s + e + fr;
        gr.push(fr), pr.push(n);
      }
      !(function (t, e, i, s) {
        let n = 0;
        for (let h = 0; h < t.length - 1; h++) {
          i[h], t[h], i[h];
          let u = (n += e);
          if ((br.push(u), h < t.length - 2)) {
            let t = mr[h] + gr[h + 1];
            mr.push(t);
          }
          xr.push(s),
            vr.push(h + 1),
            (o = h + 1),
            (a = s),
            (r = u),
            (l = mr[h]),
            dr.data.datasets[0].data.push(a),
            dr.data.datasets[1].data.push(r),
            dr.data.datasets[2].data.push(l),
            dr.data.labels.push(`${o}`),
            dr.data.labels.length >= Number(or.value) && dr.update();
        }
        var o, a, r, l;
      })(pr, e, gr, t),
        kr(pr, br, mr);
    } else
      o.forEach((t, e) => {
        t || (n[e].classList.add('error'), (Ja.disabled = !0));
      });
  }
  function Cr() {
    for (let t of document.querySelectorAll('input[type="range"].slider-progress'))
      t.style.setProperty('--value', t.value),
        t.style.setProperty('--min', '' === t.min ? '0' : t.min),
        t.style.setProperty('--max', '' === t.max ? '100' : t.max),
        t.style.setProperty('--value', t.value),
        t.addEventListener('input', () => t.style.setProperty('--value', t.value)),
        t.addEventListener('change', () => t.style.setProperty('--value', t.value));
  }
  const Er = function (t) {
      if ((Cr(), 'range' === t.target.type)) {
        let e = t.target.id.slice(0, 1);
        document.querySelectorAll('.input_calc').forEach((i) => {
          e === i.id.slice(0, 1) &&
            ((i.value = t.target.value), i.classList.remove('error'), (Ja.disabled = !1));
        });
      } else if ('number' === t.target.type || 'text' === t.target.type) {
        let e = t.target.id.slice(0, 1);
        document.querySelectorAll('input[type=range]').forEach((i) => {
          e === i.id.slice(0, 1) &&
            ('' === t.target.value ||
            Number(t.target.value) < Number(t.target.min) ||
            Number(t.target.value) > Number(t.target.max) ||
            0 === t.target.value
              ? (t.target.classList.add('error'),
                (Ja.disabled = !0),
                (i.value = 0),
                i.style.setProperty('--value', 0))
              : (t.target.classList.remove('error'),
                (Ja.disabled = !1),
                (i.value = Mr(t.target.value)),
                i.style.setProperty('--value', Mr(t.target.value))));
        });
      }
    },
    Dr = wa(document.getElementById('first_payment'), {
      mask: Number,
      min: 1e3,
      max: 1e7,
      thousandsSeparator: ' ',
    }),
    Pr = wa(document.getElementById('monthly_payment'), {
      mask: Number,
      min: 0,
      max: 1e6,
      thousandsSeparator: ' ',
    });
  rr.forEach((t) => {
    t.addEventListener('input', Er, !1),
      t.addEventListener('change', Er, !1),
      t.addEventListener('focus', Er, !1),
      t.addEventListener('paste', Er, !1),
      t.addEventListener('change', function () {
        Dr.updateValue(), Dr.updateControl(), Pr.updateValue(), Pr.updateControl();
      });
  }),
    (Ja.onclick = function () {
      Ar();
    }),
    (Qa.onclick = function () {
      _r(dr);
    }),
    Cr(),
    document.addEventListener('DOMContentLoaded', Ar);
})();
