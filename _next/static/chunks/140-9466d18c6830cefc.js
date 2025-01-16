(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [140],
  {
    9949: function (t, e, i) {
      "use strict";
      var n = i(8877);
      function r() {}
      function s() {}
      (s.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, i, r, s, o) {
            if (o !== n) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: s,
            resetWarningCache: r,
          };
          return (i.PropTypes = i), i;
        });
    },
    1448: function (t, e, i) {
      t.exports = i(9949)();
    },
    8877: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    6323: function (t, e, i) {
      "use strict";
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    1777: function (t, e, i) {
      "use strict";
      i.d(e, {
        v: function () {
          return tR;
        },
      });
      var n = i(557),
        r = i(6019);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
            ? t.startsWith("scale")
              ? o(e[1])
              : s
            : l;
      var h = i(9792),
        c = i(565);
      let d = { current: !1 },
        p = (t) => null !== t;
      function f(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(p),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      var m = i(6219),
        v = i(3078);
      function g(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var y = i(9276),
        x = i(9993),
        P = i(3653),
        w = i(9047),
        T = i(3646);
      let b = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (T.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class S {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = x.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, P.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = x.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = b(r, e),
                a = b(s, e);
              return (
                (0, w.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, n, r)
          ) {
            if (d.current || !s) {
              null == a || a(f(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var A = i(3476);
      function V(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, A.R)(i - t(n), e - n);
      }
      var D = i(1506);
      function C(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let E = ["duration", "bounce"],
        M = ["stiffness", "damping", "mass"];
      function R(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function k({ keyframes: t, restDelta: e, restSpeed: i, ...r }) {
        let s;
        let o = t[0],
          a = t[t.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!R(t, M) && R(t, E)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let s, o;
                (0, w.K)(
                  t <= (0, n.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - e;
                (a = (0, D.u)(0.05, 1, a)),
                  (t = (0, D.u)(0.01, 10, (0, n.X)(t))),
                  a < 1
                    ? ((s = (e) => {
                        let n = e * a,
                          r = n * t;
                        return 0.001 - ((n - i) / C(e, a)) * Math.exp(-r);
                      }),
                      (o = (e) => {
                        let n = e * a * t,
                          r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                          o = C(Math.pow(e, 2), a);
                        return (
                          ((n * i + i - r) *
                            Math.exp(-n) *
                            (-s(e) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((s = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (o = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let l = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(s, o, 5 / t);
                if (((t = (0, n.w)(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...r, velocity: -(0, n.X)(r.velocity || 0) }),
          m = p || 0,
          v = h / (2 * Math.sqrt(u * c)),
          g = a - o,
          y = (0, n.X)(Math.sqrt(u / c)),
          x = 5 > Math.abs(g);
        if ((i || (i = x ? 0.01 : 2), e || (e = x ? 0.005 : 0.5), v < 1)) {
          let t = C(y, v);
          s = (e) =>
            a -
            Math.exp(-v * y * e) *
              (((m + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          s = (t) => a - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          s = (e) => {
            let i = Math.exp(-v * y * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((m + v * y * g) * Math.sinh(n) + t * g * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (f && d) || null,
          next: (t) => {
            let r = s(t);
            if (f) l.done = t >= d;
            else {
              let o = 0;
              v < 1 && (o = 0 === t ? (0, n.w)(m) : V(s, t, r));
              let u = Math.abs(o) <= i,
                h = Math.abs(a - r) <= e;
              l.done = u && h;
            }
            return (l.value = l.done ? a : r), l;
          },
        };
      }
      function j({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / n),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          b = (t) => {
            m(f.value) &&
              ((c = t),
              (d = k({
                keyframes: [f.value, v(f.value)],
                velocity: V(w, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), T(t), b(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || T(t), f);
            },
          }
        );
      }
      let L = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function F(t, e, i, n) {
        if (t === e && i === n) return y.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = L((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : L(r(t), e, n));
      }
      let B = F(0.42, 0, 1, 1),
        O = F(0, 0, 0.58, 1),
        W = F(0.42, 0, 0.58, 1),
        $ = (t) => Array.isArray(t) && "number" != typeof t[0];
      var I = i(8536),
        U = i(3108),
        N = i(2718);
      let X = F(0.33, 1.53, 0.69, 0.99),
        z = (0, N.M)(X),
        H = (0, U.o)(z),
        Y = {
          linear: y.Z,
          easeIn: B,
          easeInOut: W,
          easeOut: O,
          circIn: I.Z7,
          circInOut: I.X7,
          circOut: I.Bn,
          backIn: z,
          backInOut: H,
          backOut: X,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * z(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        K = (t) => {
          if (Array.isArray(t)) {
            (0, w.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return F(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, w.k)(void 0 !== Y[t], `Invalid easing type '${t}'`), Y[t])
            : t;
        };
      var G = i(9654),
        Z = i(3217),
        q = i(5004);
      function _(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var J = i(5778),
        Q = i(1583),
        tt = i(598);
      function te(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ti = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        tn = [J.$, Q.m, tt.J],
        tr = (t) => tn.find((e) => e.test(t));
      function ts(t) {
        let e = tr(t);
        if (
          ((0, w.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tt.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = _(a, n, t + 1 / 3)),
                  (s = _(a, n, t)),
                  (o = _(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let to = (t, e) => {
        let i = ts(t),
          n = ts(e);
        if (!i || !n) return te(t, e);
        let r = { ...i };
        return (t) => (
          (r.red = ti(i.red, n.red, t)),
          (r.green = ti(i.green, n.green, t)),
          (r.blue = ti(i.blue, n.blue, t)),
          (r.alpha = (0, q.t)(i.alpha, n.alpha, t)),
          Q.m.transform(r)
        );
      };
      var ta = i(146),
        tl = i(1534);
      let tu = new Set(["none", "hidden"]);
      function th(t, e) {
        return (i) => (0, q.t)(t, e, i);
      }
      function tc(t) {
        return "number" == typeof t
          ? th
          : "string" == typeof t
          ? (0, tl.t)(t)
            ? te
            : ta.$.test(t)
            ? to
            : tf
          : Array.isArray(t)
          ? td
          : "object" == typeof t
          ? ta.$.test(t)
            ? to
            : tp
          : te;
      }
      function td(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => tc(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function tp(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = tc(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let tf = (t, e) => {
        let i = T.P.createTransformer(e),
          n = (0, T.V)(t),
          r = (0, T.V)(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (tu.has(t) && !r.values.length) || (tu.has(e) && !n.values.length)
            ? tu.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, G.z)(
                td(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : ((0, w.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            te(t, e));
      };
      function tm(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, q.t)(t, e, i)
          : tc(t)(t, e);
      }
      function tv({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = $(n) ? n.map(K) : K(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              ((0, w.k)(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || tm,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || y.Z : e;
                    s = (0, G.z)(t, s);
                  }
                  n.push(s);
                }
                return n;
              })(e, n, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = (0, Z.Y)(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l((0, D.u)(t[0], t[s - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = (0, Z.Y)(0, e, n);
                        t.push((0, q.t)(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || W).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let tg = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => m.Wi.update(e, !0),
            stop: () => (0, m.Pn)(e),
            now: () =>
              m.frameData.isProcessing ? m.frameData.timestamp : x.X.now(),
          };
        },
        ty = { decay: j, inertia: j, tween: tv, keyframes: tv, spring: k },
        tx = (t) => t / 100;
      class tP extends S {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || P.e;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = ty[n] || tv;
          l !== tv &&
            "number" != typeof t[0] &&
            ((e = (0, G.z)(tx, tm(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let x = this.currentTime,
            P = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (P = s)),
              (x = (0, D.u)(0, 1, i) * h);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: T } = w;
          y ||
            null === l ||
            (T =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            b && void 0 !== n && (w.value = f(a, this.options, n)),
            v && v(w.value),
            b && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, n.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, n.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, n.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tg, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      var tw = i(6323);
      let tT = (t) => Array.isArray(t) && "number" == typeof t[0],
        tb = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tS = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tb([0, 0.65, 0.55, 1]),
          circOut: tb([0.55, 0, 1, 0.45]),
          backIn: tb([0.31, 0.01, 0.66, -0.59]),
          backOut: tb([0.33, 1.53, 0.69, 0.99]),
        };
      function tA(t) {
        return tV(t) || tS.easeOut;
      }
      function tV(t) {
        if (t) return tT(t) ? tb(t) : Array.isArray(t) ? t.map(tA) : tS[t];
      }
      let tD = g(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class tC extends S {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new v.s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in tS) ||
                tT(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new tP({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = tV(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(f(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, n.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, n.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, n.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              c = new tP({
                ...h,
                keyframes: i,
                duration: r,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              d = (0, n.w)(this.time);
            t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            tD() &&
            i &&
            tw.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let tE = g(() => void 0 !== window.ScrollTimeline);
      class tM {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!tE() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let n = () => {
                    let { currentTime: n } = e,
                      r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return m.Wi.update(n, !0), () => (0, m.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tR =
        (t, e, i, r = {}, s, o, a) =>
        (l) => {
          let p = (0, h.e)(r, t) || {},
            v = p.delay || r.delay || 0,
            { elapsed: g = 0 } = r;
          g -= (0, n.w)(v);
          let y = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...p,
            delay: -g,
            onUpdate: (t) => {
              e.set(t), p.onUpdate && p.onUpdate(t);
            },
            onComplete: () => {
              l(), p.onComplete && p.onComplete(), a && a();
            },
            onStop: a,
            name: t,
            motionValue: e,
            element: o ? void 0 : s,
          };
          (0, h.r)(p) || (y = { ...y, ...u(t, y) }),
            y.duration && (y.duration = (0, n.w)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0, n.w)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
          let x = !1;
          if (
            ((!1 !== y.type && (0 !== y.duration || y.repeatDelay)) ||
              ((y.duration = 0), 0 !== y.delay || (x = !0)),
            (d.current || c.c.skipAnimations) &&
              ((x = !0), (y.duration = 0), (y.delay = 0)),
            x && !o && void 0 !== e.get())
          ) {
            let t = f(y.keyframes, p);
            if (void 0 !== t)
              return (
                m.Wi.update(() => {
                  y.onUpdate(t), y.onComplete();
                }),
                new tM([])
              );
          }
          return !o && tC.supports(y) ? new tC(y) : new tP(y);
        };
    },
    5908: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, i(1580).D)("framerAppearId");
    },
    2087: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return r;
        },
      });
      var n = i(5908);
      function r(t) {
        return t.props[n.M];
      }
    },
    4572: function (t, e, i) {
      "use strict";
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        H: function () {
          return n;
        },
      });
    },
    6925: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    9792: function (t, e, i) {
      "use strict";
      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: n,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    5050: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    6539: function (t, e, i) {
      "use strict";
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({ strict: !1 });
    },
    9791: function (t, e, i) {
      "use strict";
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    7797: function (t, e, i) {
      "use strict";
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    6094: function (t, e, i) {
      "use strict";
      i.d(e, {
        g: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    8536: function (t, e, i) {
      "use strict";
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(3108),
        r = i(2718);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    3108: function (t, e, i) {
      "use strict";
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2718: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    3731: function (t, e, i) {
      "use strict";
      function n(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      i.d(e, {
        E: function () {
          return n;
        },
      });
    },
    3787: function (t, e, i) {
      "use strict";
      i.d(e, {
        a: function () {
          return s;
        },
      });
      var n = i(3731),
        r = i(3280);
      function s(t, e, i, s) {
        return (0, n.E)(t, e, (0, r.s)(i), s);
      }
    },
    3280: function (t, e, i) {
      "use strict";
      i.d(e, {
        Q: function () {
          return r;
        },
        s: function () {
          return s;
        },
      });
      var n = i(3414);
      function r(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let s = (t) => (e) => (0, n.D)(e) && t(e, r(e));
    },
    3414: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    2981: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = i(565);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    6219: function (t, e, i) {
      "use strict";
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(9276);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    8172: function (t, e, i) {
      "use strict";
      i.d(e, {
        g: function () {
          return n;
        },
      });
      let { schedule: n, cancel: r } = (0, i(2981).Z)(queueMicrotask, !1);
    },
    9993: function (t, e, i) {
      "use strict";
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(565),
        s = i(6219);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    5153: function (t, e, i) {
      "use strict";
      function n(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      i.d(e, {
        fJ: function () {
          return o;
        },
        gD: function () {
          return a;
        },
      });
      let r = n("dragHorizontal"),
        s = n("dragVertical");
      function o(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = r();
        else {
          let t = r(),
            i = s();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function a() {
        let t = o(!0);
        return !t || (t(), !1);
      }
    },
    847: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return n;
        },
      });
      class n {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    9188: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return M;
        },
      });
      var n = i(4572),
        r = i(6925);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var o = i(6859),
        a = i(8595);
      function l(t, e, i) {
        let n = t.getProps();
        return (0, a.o)(n, e, void 0 !== i ? i : n.custom, t);
      }
      var u = i(3552),
        h = i(6019),
        c = i(1777),
        d = i(9155),
        p = i(804),
        f = i(9792),
        m = i(2087),
        v = i(3944),
        g = i(6219);
      function y(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...u
        } = e;
        n && (o = n);
        let y = [],
          x = r && t.animationState && t.animationState.getState()[r];
        for (let e in u) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = u[e];
          if (
            void 0 === r ||
            (x &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(x, e))
          )
            continue;
          let a = { delay: i, ...(0, f.e)(o || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, m.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, g.Wi);
              null !== t && ((a.startTime = t), (l = !0));
            }
          }
          n.start(
            (0, c.v)(
              e,
              n,
              r,
              t.shouldReduceMotion && h.G.has(e) ? { type: !1 } : a,
              t,
              l,
              (0, v.K)(t, e)
            )
          );
          let d = n.animation;
          d && y.push(d);
        }
        return (
          a &&
            Promise.all(y).then(() => {
              g.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = l(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = (0, d.Y)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, p.BX)(i));
                    }
                  })(t, a);
              });
            }),
          y
        );
      }
      function x(t, e, i = {}) {
        var n;
        let r = l(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(y(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(P)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              x(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: u } = s;
        if (!u) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function P(t, e) {
        return t.sortNodePosition(e);
      }
      let w = u.V.length,
        T = [...u.e].reverse(),
        b = u.e.length;
      function S(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function A() {
        return {
          animate: S(!0),
          whileInView: S(),
          whileHover: S(),
          whileTap: S(),
          whileDrag: S(),
          whileFocus: S(),
          exit: S(),
        };
      }
      var V = i(847);
      class D extends V.L {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => x(t, e, i)));
                          else if ("string" == typeof e) n = x(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? l(t, e, i.custom) : e;
                            n = Promise.all(y(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = A(),
                  a = !0,
                  h = (e) => (i, n) => {
                    var r;
                    let s = l(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function c(l) {
                  let { props: c } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < w; t++) {
                          let n = u.V[t],
                            r = e.props[n];
                          ((0, o.$)(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    f = new Set(),
                    m = {},
                    v = 1 / 0;
                  for (let e = 0; e < b; e++) {
                    var g;
                    let u = T[e],
                      y = i[u],
                      x = void 0 !== c[u] ? c[u] : d[u],
                      P = (0, o.$)(x),
                      w = u === l ? y.isActive : null;
                    !1 === w && (v = e);
                    let b = x === d[u] && x !== c[u] && P;
                    if (
                      (b && a && t.manuallyAnimateOnMount && (b = !1),
                      (y.protectedKeys = { ...m }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        (0, n.H)(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let S =
                        ((g = y.prevProp),
                        "string" == typeof x
                          ? x !== g
                          : !!Array.isArray(x) && !s(x, g)),
                      A =
                        S || (u === l && y.isActive && !b && P) || (e > v && P),
                      V = !1,
                      D = Array.isArray(x) ? x : [x],
                      C = D.reduce(h(u), {});
                    !1 === w && (C = {});
                    let { prevResolvedValues: E = {} } = y,
                      M = { ...E, ...C },
                      R = (e) => {
                        (A = !0),
                          f.has(e) && ((V = !0), f.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = C[t],
                        i = E[t];
                      if (!m.hasOwnProperty(t))
                        ((0, r.C)(e) && (0, r.C)(i) ? s(e, i) : e === i)
                          ? void 0 !== e && f.has(t)
                            ? R(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? R(t)
                          : f.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = C),
                      y.isActive && (m = { ...m, ...C }),
                      a && t.blockInitialAnimation && (A = !1);
                    let k = !(b && S) || V;
                    A &&
                      k &&
                      p.push(
                        ...D.map((t) => ({
                          animation: t,
                          options: { type: u },
                        }))
                      );
                  }
                  if (f.size) {
                    let e = {};
                    f.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    a &&
                      (!1 === c.initial || c.initial === c.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: c,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = c(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = A()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, n.H)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let C = 0;
      class E extends V.L {
        constructor() {
          super(...arguments), (this.id = C++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let M = { animation: { Feature: D }, exit: { Feature: E } };
    },
    6317: function (t, e, i) {
      "use strict";
      i.d(e, {
        featureDefinitions: function () {
          return r;
        },
      });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r = {};
      for (let t in n) r[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
    },
    5859: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return b;
        },
      });
      var n = i(3787),
        r = i(9654),
        s = i(5153),
        o = i(847),
        a = i(6219);
      function l(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return (0, n.a)(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || (0, s.gD)()) return;
            let o = t.getProps();
            t.animationState &&
              o.whileHover &&
              t.animationState.setActive("whileHover", e);
            let l = o[i];
            l && a.Wi.postRender(() => l(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class u extends o.L {
        mount() {
          this.unmount = (0, r.z)(l(this.node, !0), l(this.node, !1));
        }
        unmount() {}
      }
      var h = i(3731);
      class c extends o.L {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, r.z)(
            (0, h.E)(this.node.current, "focus", () => this.onFocus()),
            (0, h.E)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var d = i(3280);
      let p = (t, e) => !!e && (t === e || p(t, e.parentElement));
      var f = i(9276);
      function m(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, (0, d.Q)(i));
      }
      class v extends o.L {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = f.Z),
            (this.removeEndListeners = f.Z),
            (this.removeAccessibleListeners = f.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = (0, n.a)(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || p(this.node.current, t.target) ? i : n;
                    s && a.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                o = (0, n.a)(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, r.z)(s, o)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = (0, h.E)(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, h.E)(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          m("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && a.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    m("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = (0, h.E)(this.node.current, "blur", () => {
                  this.isPressing &&
                    m("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, r.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && a.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, s.gD)()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && a.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = (0, n.a)(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = (0, h.E)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, r.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let g = new WeakMap(),
        y = new WeakMap(),
        x = (t) => {
          let e = g.get(t.target);
          e && e(t);
        },
        P = (t) => {
          t.forEach(x);
        },
        w = { some: 0, all: 1 };
      class T extends o.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : w[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              y.has(i) || y.set(i, {});
              let n = y.get(i),
                r = JSON.stringify(e);
              return (
                n[r] || (n[r] = new IntersectionObserver(P, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              g.set(t, i),
              n.observe(t),
              () => {
                g.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let b = {
        inView: { Feature: T },
        tap: { Feature: v },
        focus: { Feature: c },
        hover: { Feature: u },
      };
    },
    344: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return r;
        },
      });
      var n = i(6317);
      function r(t) {
        for (let e in t)
          n.featureDefinitions[e] = { ...n.featureDefinitions[e], ...t[e] };
      }
    },
    2020: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return s;
        },
      });
      var n = i(7290),
        r = i(6019);
      function s(t, { layout: e, layoutId: i }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!n.P[t] || "opacity" === t))
        );
      }
    },
    3005: function (t, e, i) {
      "use strict";
      function n({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      i.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return n;
        },
        z2: function () {
          return r;
        },
      });
    },
    6711: function (t, e, i) {
      "use strict";
      i.d(e, {
        D2: function () {
          return d;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return h;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var n = i(5004),
        r = i(8107);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function o(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function a(t, e = 0, i = 1, n, r) {
        (t.min = o(t.min, e, i, n, r)), (t.max = o(t.max, e, i, n, r));
      }
      function l(t, { x: e, y: i }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, n = !1) {
        let s, o;
        let a = i.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = i[u]).projectionDelta;
            let { visualElement: a } = s.options;
            (!a || !a.props.style || "contents" !== a.props.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                d(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              n && (0, r.ud)(s.latestValues) && d(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function c(t, e, i, r, s = 0.5) {
        let o = (0, n.t)(t.min, t.max, s);
        a(t, e, i, o, r);
      }
      function d(t, e) {
        c(t.x, e.x, e.scaleX, e.scale, e.originX),
          c(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    8250: function (t, e, i) {
      "use strict";
      i.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    7290: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return n;
        },
      });
      let n = {};
      function r(t) {
        Object.assign(n, t);
      }
    },
    8107: function (t, e, i) {
      "use strict";
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: i }) {
        return !n(t) || !n(e) || !n(i);
      }
      function s(t) {
        return (
          r(t) ||
          o(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function o(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    7684: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var n = i(3005),
        r = i(6711);
      function s(t, e) {
        return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, i) {
        let n = s(t, i),
          { scroll: o } = e;
        return o && ((0, r.am)(n.x, o.offset.x), (0, r.am)(n.y, o.offset.y)), n;
      }
    },
    1292: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return q;
        },
      });
      var n,
        r = i(7437),
        s = i(2265),
        o = i(9791);
      let a = (0, s.createContext)({});
      var l = i(7797),
        u = i(9033),
        h = i(6539),
        c = i(5908),
        d = i(8172),
        p = i(7576),
        f = i(6094);
      let m = !1;
      function v() {
        window.MotionHandoffIsComplete = !0;
      }
      var g = i(6859),
        y = i(3795);
      function x(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var P = i(344),
        w = i(7282),
        T = i(5050);
      let b = Symbol.for("motionComponentSymbol");
      var S = i(6317),
        A = i(2860),
        V = i(545),
        D = i(875),
        C = i(4572),
        E = i(8595),
        M = i(458),
        R = i(2404),
        k = i(5674),
        j = i(8746);
      let L = (t) => (e, i) => {
        let n = (0, s.useContext)(a),
          r = (0, s.useContext)(l.O),
          o = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: n,
              },
              r,
              s,
              o,
              a
            ) {
              let l = {
                latestValues: (function (t, e, i, n, r) {
                  var s;
                  let o = {},
                    a = [],
                    l =
                      n &&
                      (null === (s = t.style) || void 0 === s
                        ? void 0
                        : s.willChange) === void 0,
                    u = r(t, {});
                  for (let t in u) o[t] = (0, R.b)(u[t]);
                  let { initial: h, animate: c } = t,
                    d = (0, y.G)(t),
                    p = (0, y.M)(t);
                  e &&
                    p &&
                    !d &&
                    !1 !== t.inherit &&
                    (void 0 === h && (h = e.initial),
                    void 0 === c && (c = e.animate));
                  let f = !!i && !1 === i.initial,
                    m = (f = f || !1 === h) ? c : h;
                  return (
                    m &&
                      "boolean" != typeof m &&
                      !(0, C.H)(m) &&
                      F(t, m, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = f ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (o[e] = i);
                        }
                        for (let t in e) o[t] = e[t];
                      }),
                    l &&
                      (c &&
                        !1 !== h &&
                        !(0, C.H)(c) &&
                        F(t, c, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, k.p)(e);
                              i && (0, j.y4)(t, i);
                            })(a, e);
                        }),
                      a.length && (o.willChange = a.join(","))),
                    o
                  );
                })(r, s, o, !a && t, e),
                renderState: i(),
              };
              return n && (l.mount = (t) => n(r, t, l)), l;
            })(t, e, n, r, i);
        return i ? o() : (0, M.h)(o);
      };
      function F(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let r = (0, E.o)(t, n[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...n } = r;
            i(n, t);
          }
        }
      }
      let B = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        O = () => ({ ...B(), attrs: {} });
      var W = i(2622),
        $ = i(5969),
        I = i(6219);
      let U = {
          useVisualState: L({
            scrapeMotionValuesFromProps: D.U,
            createRenderState: O,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              I.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                I.Wi.render(() => {
                  (0, W.i)(i, n, (0, $.a)(e.tagName), t.transformTemplate),
                    (0, V.K)(e, i);
                });
            },
          }),
        },
        N = {
          useVisualState: L({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: i(1315).U,
            createRenderState: B,
          }),
        };
      var X = i(2020),
        z = i(8322),
        H = i(4651);
      function Y(t, e, i) {
        for (let n in e) (0, z.i)(e[n]) || (0, X.j)(n, i) || (t[n] = e[n]);
      }
      let K = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function G(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          K.has(t)
        );
      }
      let Z = (t) => !G(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (Z = (t) => (t.startsWith("on") ? !G(t) : n(t)));
      } catch (t) {}
      function q(t, e) {
        return function (
          i,
          { forwardMotionProps: n } = { forwardMotionProps: !1 }
        ) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: A,
              Component: V,
            } = t;
            e && (0, P.K)(e);
            let D = (0, s.forwardRef)(function (t, e) {
              var P;
              let b;
              let D = {
                  ...(0, s.useContext)(o._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, s.useContext)(T.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: C } = D,
                E = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if ((0, y.G)(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || (0, g.$)(e) ? e : void 0,
                        animate: (0, g.$)(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, s.useContext)(a));
                  return (0, s.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [x(e), x(i)]
                  );
                })(t),
                M = A(t, C);
              if (!C && w.j) {
                (0, s.useContext)(h.u).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = S.featureDefinitions;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(D);
                (b = t.MeasureLayout),
                  (E.visualElement = (function (t, e, i, n, r) {
                    var g;
                    let { visualElement: y } = (0, s.useContext)(a),
                      x = (0, s.useContext)(h.u),
                      P = (0, s.useContext)(l.O),
                      w = (0, s.useContext)(o._).reducedMotion,
                      T = (0, s.useRef)();
                    (n = n || x.renderer),
                      !T.current &&
                        n &&
                        (T.current = n(t, {
                          visualState: e,
                          parent: y,
                          props: i,
                          presenceContext: P,
                          blockInitialAnimation: !!P && !1 === P.initial,
                          reducedMotionConfig: w,
                        }));
                    let b = T.current,
                      S = (0, s.useContext)(f.g);
                    b &&
                      !b.projection &&
                      r &&
                      ("html" === b.type || "svg" === b.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && (0, p.I)(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(T.current, i, r, S),
                      (0, s.useInsertionEffect)(() => {
                        b && b.update(i, P);
                      });
                    let A = i[c.M],
                      V = (0, s.useRef)(
                        !!A &&
                          !window.MotionHandoffIsComplete &&
                          (null === (g = window.MotionHasOptimisedAnimation) ||
                          void 0 === g
                            ? void 0
                            : g.call(window, A))
                      );
                    return (
                      (0, u.L)(() => {
                        b &&
                          (b.updateFeatures(),
                          d.g.render(b.render),
                          V.current &&
                            b.animationState &&
                            b.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        b &&
                          (!V.current &&
                            b.animationState &&
                            b.animationState.animateChanges(),
                          (V.current = !1),
                          m || ((m = !0), queueMicrotask(v)));
                      }),
                      b
                    );
                  })(V, M, D, i, t.ProjectionNode));
              }
              return (0, r.jsxs)(a.Provider, {
                value: E,
                children: [
                  b && E.visualElement
                    ? (0, r.jsx)(b, { visualElement: E.visualElement, ...D })
                    : null,
                  n(
                    V,
                    t,
                    ((P = E.visualElement),
                    (0, s.useCallback)(
                      (t) => {
                        t && M.mount && M.mount(t),
                          P && (t ? P.mount(t) : P.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : (0, p.I)(e) && (e.current = t));
                      },
                      [P]
                    )),
                    M,
                    C,
                    E.visualElement
                  ),
                ],
              });
            });
            return (D[b] = V), D;
          })({
            ...((0, A.q)(i) ? U : N),
            preloadedFeatures: t,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, o) => {
                let a = (
                    (0, A.q)(e)
                      ? function (t, e, i, n) {
                          let r = (0, s.useMemo)(() => {
                            let i = O();
                            return (
                              (0, W.i)(i, e, (0, $.a)(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            Y(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                Y(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, s.useMemo)(() => {
                                      let i = B();
                                      return (
                                        (0, H.r)(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, o, e),
                  l = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (Z(r) ||
                          (!0 === i && G(r)) ||
                          (!e && !G(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  u = e !== s.Fragment ? { ...l, ...a, ref: n } : {},
                  { children: h } = i,
                  c = (0, s.useMemo)(() => ((0, z.i)(h) ? h.get() : h), [h]);
                return (0, s.createElement)(e, { ...u, children: c });
              };
            })(n),
            createVisualElement: e,
            Component: i,
          });
        };
      }
    },
    6863: function (t, e, i) {
      "use strict";
      function n(t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      }
      i.d(e, {
        c: function () {
          return n;
        },
      });
    },
    8179: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return ex;
        },
      });
      var n = i(6863),
        r = i(9188),
        s = i(847),
        o = i(9276),
        a = i(9047),
        l = i(3280),
        u = i(557),
        h = i(3787),
        c = i(9654);
      let d = (t, e) => Math.abs(t - e);
      var p = i(3414),
        f = i(6219);
      class m {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = y(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(d(t.x, e.x) ** 2 + d(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = f.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = v(e, this.transformPagePoint)),
                f.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = y(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : v(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !(0, p.D)(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = v((0, l.Q)(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = f.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: u } = e;
          u && u(t, y(s, this.history)),
            (this.removeListeners = (0, c.z)(
              (0, h.a)(
                this.contextWindow,
                "pointermove",
                this.handlePointerMove
              ),
              (0, h.a)(this.contextWindow, "pointerup", this.handlePointerUp),
              (0, h.a)(
                this.contextWindow,
                "pointercancel",
                this.handlePointerUp
              )
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, f.Pn)(this.updatePoint);
        }
      }
      function v(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function g(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function y({ point: t }, e) {
        return {
          point: t,
          delta: g(t, x(e)),
          offset: g(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = x(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, u.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, u.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function x(t) {
        return t[t.length - 1];
      }
      var P = i(5153),
        w = i(7576),
        T = i(3217),
        b = i(5004);
      function S(t) {
        return t.max - t.min;
      }
      function A(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, b.t)(e.min, e.max, t.origin)),
          (t.scale = S(i) / S(e)),
          (t.translate = (0, b.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function V(t, e, i, n) {
        A(t.x, e.x, i.x, n ? n.originX : void 0),
          A(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function D(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + S(e));
      }
      function C(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + S(e));
      }
      function E(t, e, i) {
        C(t.x, e.x, i.x), C(t.y, e.y, i.y);
      }
      var M = i(1506);
      function R(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function k(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function j(t, e, i) {
        return { min: L(t, e), max: L(t, i) };
      }
      function L(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var F = i(8250);
      function B(t) {
        return [t("x"), t("y")];
      }
      var O = i(7684),
        W = i(3005),
        $ = i(3731),
        I = i(5480),
        U = i(1777);
      let N = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var X = i(3944);
      let z = new WeakMap();
      class H {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, F.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new m(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, l.Q)(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: s,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = (0, P.fJ)(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  B((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (I.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = S(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && f.Wi.postRender(() => s(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = (0, X.K)(
                    this.visualElement,
                    "transform"
                  ));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                B((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: N(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: s } = this.getProps();
          s && f.Wi.postRender(() => s(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !Y(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, b.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, b.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && (0, w.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: R(t.x, i, r), y: R(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: j(t, "left", "right"), y: j(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              B((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, w.I)(e)) return !1;
          let n = e.current;
          (0, a.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, O.z)(
              n,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: k((t = r.layout.layoutBox).x, s.x), y: k(t.y, s.y) };
          if (i) {
            let t = i((0, W.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, W.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            B((o) => {
              if (!Y(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            (0, U.v)(
              t,
              i,
              0,
              e,
              this.visualElement,
              !1,
              (0, X.K)(this.visualElement, t)
            )
          );
        }
        stopAnimation() {
          B((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          B((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          B((e) => {
            let { drag: i } = this.getProps();
            if (!Y(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, b.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, w.I)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          B((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = S(t),
                  r = S(e);
                return (
                  r > n
                    ? (i = (0, T.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, T.Y)(t.min, t.max - r, e.min)),
                  (0, M.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            B((e) => {
              if (!Y(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, b.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          z.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = (0, h.a)(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              (0, w.I)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            f.Wi.read(i);
          let s = (0, $.E)(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (B((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function Y(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class K extends s.L {
        constructor(t) {
          super(t),
            (this.removeGroupControls = o.Z),
            (this.removeListeners = o.Z),
            (this.controls = new H(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || o.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let G = (t) => (e, i) => {
        t && f.Wi.postRender(() => t(e, i));
      };
      class Z extends s.L {
        constructor() {
          super(...arguments), (this.removePointerDownListener = o.Z);
        }
        onPointerDown(t) {
          this.session = new m(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: N(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: G(t),
            onStart: G(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && f.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = (0, h.a)(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var q = i(7437),
        _ = i(2265),
        J = i(7797),
        Q = i(5050),
        tt = i(6094);
      let te = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ti(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tn = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!I.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = ti(t, e.target.x),
            n = ti(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var tr = i(3646),
        ts = i(7290),
        to = i(8172);
      class ta extends _.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (0, ts.B)(tu),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (te.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    f.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            to.g.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tl(t) {
        let [e, i] = (function () {
            let t = (0, _.useContext)(J.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, _.useId)();
            (0, _.useEffect)(() => n(r), []);
            let s = (0, _.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          n = (0, _.useContext)(Q.p);
        return (0, q.jsx)(ta, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, _.useContext)(tt.g),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let tu = {
        borderRadius: {
          ...tn,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tn,
        borderTopRightRadius: tn,
        borderBottomLeftRadius: tn,
        borderBottomRightRadius: tn,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = tr.P.parse(t);
            if (n.length > 5) return t;
            let r = tr.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, b.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var th = i(2428),
        tc = i(8536);
      let td = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tp = td.length,
        tf = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tm = (t) => "number" == typeof t || I.px.test(t);
      function tv(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tg = tx(0, 0.5, tc.Bn),
        ty = tx(0.5, 0.95, o.Z);
      function tx(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, T.Y)(t, e, n)));
      }
      function tP(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function tw(t, e) {
        tP(t.x, e.x), tP(t.y, e.y);
      }
      function tT(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var tb = i(6711);
      function tS(t, e, i, n, r) {
        return (
          (t -= e),
          (t = (0, tb.q2)(t, 1 / i, n)),
          void 0 !== r && (t = (0, tb.q2)(t, 1 / r, n)),
          t
        );
      }
      function tA(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (I.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, b.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, b.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = tS(t.min, e, i, a, r)),
            (t.max = tS(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let tV = ["x", "scaleX", "originX"],
        tD = ["y", "scaleY", "originY"];
      function tC(t, e, i, n) {
        tA(t.x, e, tV, i ? i.x : void 0, n ? n.x : void 0),
          tA(t.y, e, tD, i ? i.y : void 0, n ? n.y : void 0);
      }
      var tE = i(9792);
      function tM(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function tR(t) {
        return tM(t.x) && tM(t.y);
      }
      function tk(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function tj(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function tL(t, e) {
        return tj(t.x, e.x) && tj(t.y, e.y);
      }
      function tF(t) {
        return S(t.x) / S(t.y);
      }
      function tB(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var tO = i(8746);
      class tW {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tO.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tO.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      var t$ = i(8107);
      let tI = (t, e) => t.depth - e.depth;
      class tU {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tO.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tO.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tI),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tN = i(2404),
        tX = i(9993),
        tz = i(804),
        tH = i(8322),
        tY = i(2087);
      let tK = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        tG = "undefined" != typeof window && void 0 !== window.MotionDebug,
        tZ = ["", "X", "Y", "Z"],
        tq = { visibility: "hidden" },
        t_ = 0;
      function tJ(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function tQ({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = t_++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  tG &&
                    (tK.totalNodes =
                      tK.resolvedTargetDeltas =
                      tK.recalculatedProjection =
                        0),
                  this.nodes.forEach(t5),
                  this.nodes.forEach(t4),
                  this.nodes.forEach(et),
                  this.nodes.forEach(t2),
                  tG && window.MotionDebug.record(tK);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tU());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new th.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = tX.X.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, f.Pn)(n), t(r - 250));
                      };
                    return f.Wi.read(n, !0), () => (0, f.Pn)(n);
                  })(n, 0)),
                  te.hasAnimatedSinceResize &&
                    ((te.hasAnimatedSinceResize = !1), this.nodes.forEach(t8));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        eo,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !tL(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, tE.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || t8(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, f.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ee),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = (0, tY.s)(i);
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      f.Wi,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(t9);
              return;
            }
            this.isUpdating || this.nodes.forEach(t7),
              (this.isUpdating = !1),
              this.nodes.forEach(t6),
              this.nodes.forEach(t0),
              this.nodes.forEach(t1),
              this.clearAllSnapshots();
            let t = tX.X.now();
            (f.frameData.delta = (0, M.u)(
              0,
              1e3 / 60,
              t - f.frameData.timestamp
            )),
              (f.frameData.timestamp = t),
              (f.frameData.isProcessing = !0),
              f.S6.update.process(f.frameData),
              f.S6.preRender.process(f.frameData),
              f.S6.render.process(f.frameData),
              (f.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), to.g.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(t3), this.sharedNodes.forEach(ei);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              f.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            f.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, F.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !tR(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || (0, t$.ud)(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              eu((e = n).x),
              eu(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, F.dO)();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(ec)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, tb.am)(i.x, t.offset.x), (0, tb.am)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, F.dO)();
            if (
              (tw(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && tw(i, t),
                (0, tb.am)(i.x, r.offset.x),
                (0, tb.am)(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, F.dO)();
            tw(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                (0, tb.D2)(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                (0, t$.ud)(n.latestValues) && (0, tb.D2)(i, n.latestValues);
            }
            return (
              (0, t$.ud)(this.latestValues) && (0, tb.D2)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, F.dO)();
            tw(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, t$.ud)(i.latestValues)) continue;
              (0, t$.Lj)(i.latestValues) && i.updateSnapshot();
              let n = (0, F.dO)();
              tw(n, i.measurePageBox()),
                tC(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return (0, t$.ud)(this.latestValues) && tC(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                f.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = f.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, F.dO)()),
                    (this.relativeTargetOrigin = (0, F.dO)()),
                    E(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    tw(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, F.dO)()),
                    (this.targetWithTransforms = (0, F.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      D(i.x, n.x, r.x),
                      D(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : tw(this.target, this.layout.layoutBox),
                      (0, tb.o2)(this.target, this.targetDelta))
                    : tw(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, F.dO)()),
                      (this.relativeTargetOrigin = (0, F.dO)()),
                      E(this.relativeTargetOrigin, this.target, t.target),
                      tw(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tG && tK.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, t$.Lj)(this.parent.latestValues) ||
              (0, t$.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === f.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            tw(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, tb.YY)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, F.dO)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (tT(this.prevProjectionDelta.x, this.projectionDelta.x),
                tT(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              V(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                tB(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                tB(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              tG && tK.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = (0, F.wc)()),
              (this.projectionDelta = (0, F.wc)()),
              (this.projectionDeltaWithTransform = (0, F.wc)());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = (0, F.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, F.dO)(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(es)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (en(o.x, t.x, n),
                  en(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  E(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    er(p.x, f.x, a.x, n),
                    er(p.y, f.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      tk(u.x, d.x) && tk(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, F.dO)()),
                    tw(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, b.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          tg(n)
                        )),
                        (t.opacityExit = (0, b.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ty(n)
                        )))
                      : s &&
                        (t.opacity = (0, b.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < tp; r++) {
                      let s = `border${td[r]}Radius`,
                        o = tv(e, s),
                        a = tv(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tm(o) === tm(a)
                          ? ((t[s] = Math.max((0, b.t)(tf(o), tf(a), n), 0)),
                            (I.aQ.test(a) || I.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, b.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, f.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = f.Wi.update(() => {
                (te.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, tH.i)(0) ? 0 : (0, tz.BX)(0);
                    return n.start((0, U.v)("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                eh(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || (0, F.dO)();
                let e = S(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = S(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              tw(e, i),
                (0, tb.D2)(e, r),
                V(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new tW()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && tJ("z", t, n, this.animationValues);
            for (let e = 0; e < tZ.length; e++)
              tJ(`rotate${tZ[e]}`, t, n, this.animationValues),
                tJ(`skew${tZ[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tq;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  (0, tN.b)(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, tN.b)(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, t$.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            ts.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = ts.P[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? (0, tN.b)(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(t9),
              this.root.sharedNodes.clear();
          }
        };
      }
      function t0(t) {
        t.updateLayout();
      }
      function t1(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? B((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = S(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : eh(r, i.layoutBox, e) &&
              B((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = S(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = (0, F.wc)();
          V(o, e, i.layoutBox);
          let a = (0, F.wc)();
          s
            ? V(a, t.applyTransform(n, !0), i.measuredBox)
            : V(a, e, i.layoutBox);
          let l = !tR(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = (0, F.dO)();
                E(o, i.layoutBox, r.layoutBox);
                let a = (0, F.dO)();
                E(a, e, s.layoutBox),
                  tL(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function t5(t) {
        tG && tK.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function t2(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function t3(t) {
        t.clearSnapshot();
      }
      function t9(t) {
        t.clearMeasurements();
      }
      function t7(t) {
        t.isLayoutDirty = !1;
      }
      function t6(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function t8(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function t4(t) {
        t.resolveTargetDelta();
      }
      function et(t) {
        t.calcProjection();
      }
      function ee(t) {
        t.resetSkewAndRotation();
      }
      function ei(t) {
        t.removeLeadSnapshot();
      }
      function en(t, e, i) {
        (t.translate = (0, b.t)(e.translate, 0, i)),
          (t.scale = (0, b.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function er(t, e, i, n) {
        (t.min = (0, b.t)(e.min, i.min, n)),
          (t.max = (0, b.t)(e.max, i.max, n));
      }
      function es(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eo = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ea = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        el = ea("applewebkit/") && !ea("chrome/") ? Math.round : o.Z;
      function eu(t) {
        (t.min = el(t.min)), (t.max = el(t.max));
      }
      function eh(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(tF(e) - tF(i))))
        );
      }
      function ec(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let ed = tQ({
          attachResizeListener: (t, e) => (0, $.E)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ep = { current: void 0 },
        ef = tQ({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ep.current) {
              let t = new ed({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ep.current = t);
            }
            return ep.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var em = i(5859),
        ev = i(1292),
        eg = i(3302);
      let ey = (0, ev.x)(
          {
            ...r.s,
            ...em.E,
            pan: { Feature: Z },
            drag: { Feature: K, ProjectionNode: ef, MeasureLayout: tl },
            layout: { ProjectionNode: ef, MeasureLayout: tl },
          },
          eg.b
        ),
        ex = (0, n.c)(ey);
    },
    3078: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return f;
        },
      });
      var n = i(9102),
        r = i(9047),
        s = i(4386),
        o = i(1534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(5014),
        u = i(3769),
        h = i(3653),
        c = i(3646),
        d = i(6450);
      let p = new Set(["auto", "none", "0"]);
      class f extends h.e {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, o.t)(n))) {
              let l = (function t(e, i, n = 1) {
                (0, r.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, n + 1) : u;
              })(n, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length))
            return;
          let [n, h] = t,
            c = (0, u.C)(n),
            d = (0, u.C)(h);
          if (c !== d) {
            if ((0, l.mP)(c) && (0, l.mP)(d))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, n.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !p.has(e) &&
                  (0, c.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = (0, d.T)(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = l.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    3302: function (t, e, i) {
      "use strict";
      i.d(e, {
        b: function () {
          return K;
        },
      });
      var n = i(2265),
        r = i(4651),
        s = i(1534),
        o = i(6019),
        a = i(1315),
        l = i(9979),
        u = i(781),
        h = i(7684),
        c = i(7282);
      let d = { current: null },
        p = { current: !1 };
      var f = i(2428),
        m = i(804),
        v = i(8322),
        g = i(3795),
        y = i(8595),
        x = i(6317);
      let P = new WeakMap();
      var w = i(3653),
        T = i(4386),
        b = i(9102),
        S = i(146),
        A = i(3646),
        V = i(3769),
        D = i(2649);
      let C = [...V.$, S.$, A.P],
        E = (t) => C.find((0, D.l)(t));
      var M = i(6450),
        R = i(8250),
        k = i(9993),
        j = i(6219);
      let L = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class F {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = w.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = k.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                j.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, g.G)(e)),
            (this.isVariantNode = (0, g.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && (0, v.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            P.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            p.current ||
              (function () {
                if (((p.current = !0), c.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (d.current = t.matches);
                    t.addListener(e), e();
                  } else d.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || d.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (P.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, j.Pn)(this.notifyUpdate),
          (0, j.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = o.G.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && j.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in x.featureDefinitions) {
            let e = x.featureDefinitions[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, R.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < L.length; e++) {
            let i = L[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, v.i)(r)) t.addValue(n, r);
              else if ((0, v.i)(s)) t.addValue(n, (0, m.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, m.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, m.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, T.P)(n) || (0, b.W)(n))
                ? (n = parseFloat(n))
                : !E(n) && A.P.test(e) && (n = (0, M.T)(t, e)),
              this.setBaseTarget(t, (0, v.i)(n) ? n.get() : n)),
            (0, v.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = (0, y.o)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, v.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new f.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var B = i(3078);
      class O extends F {
        constructor() {
          super(...arguments), (this.KeyframeResolver = B.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class W extends O {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = l.N);
        }
        readValueFromInstance(t, e) {
          if (o.G.has(e)) {
            let t = (0, u.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, s.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, h.J)(t, e);
        }
        build(t, e, i) {
          (0, r.r)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, a.U)(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, v.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var $ = i(875),
        I = i(2622),
        U = i(1580),
        N = i(2394),
        X = i(545),
        z = i(5969);
      class H extends O {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = R.dO);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (o.G.has(e)) {
            let t = (0, u.A)(e);
            return (t && t.default) || 0;
          }
          return (e = N.s.has(e) ? e : (0, U.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, $.U)(t, e, i);
        }
        build(t, e, i) {
          (0, I.i)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          (0, X.K)(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = (0, z.a)(t.tagName)), super.mount(t);
        }
      }
      var Y = i(2860);
      let K = (t, e) =>
        (0, Y.q)(t)
          ? new H(e)
          : new W(e, { allowProjection: t !== n.Fragment });
    },
    1580: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    1534: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    2860: function (t, e, i) {
      "use strict";
      i.d(e, {
        q: function () {
          return r;
        },
      });
      let n = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function r(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (n.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
    },
    5014: function (t, e, i) {
      "use strict";
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(6019),
        r = i(783),
        s = i(5480);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        c = n._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    6450: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(3646),
        r = i(4913),
        s = i(781);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    781: function (t, e, i) {
      "use strict";
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(146),
        r = i(4913);
      let s = {
          ...i(7755).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    3769: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(783),
        r = i(5480),
        s = i(2649);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    7755: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(783),
        r = i(5480);
      let s = { ...n.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    2649: function (t, e, i) {
      "use strict";
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    4651: function (t, e, i) {
      "use strict";
      i.d(e, {
        r: function () {
          return u;
        },
      });
      var n = i(6019);
      let r = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var s = i(7755);
      let o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        a = n._.length;
      var l = i(1534);
      function u(t, e, i) {
        let { style: u, vars: h, transformOrigin: c } = t,
          d = !1,
          p = !1;
        for (let t in e) {
          let i = e[t];
          if (n.G.has(t)) {
            d = !0;
            continue;
          }
          if ((0, l.f)(t)) {
            h[t] = i;
            continue;
          }
          {
            let e = r(i, s.j[t]);
            t.startsWith("origin") ? ((p = !0), (c[t] = e)) : (u[t] = e);
          }
        }
        if (
          (!e.transform &&
            (d || i
              ? (u.transform = (function (t, e, i) {
                  let l = "",
                    u = !0;
                  for (let h = 0; h < a; h++) {
                    let a = n._[h],
                      c = t[a];
                    if (void 0 === c) continue;
                    let d = !0;
                    if (
                      !(d =
                        "number" == typeof c
                          ? c === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(c)) ||
                      i
                    ) {
                      let t = r(c, s.j[a]);
                      if (!d) {
                        u = !1;
                        let e = o[a] || a;
                        l += `${e}(${t}) `;
                      }
                      i && (e[a] = t);
                    }
                  }
                  return (
                    (l = l.trim()),
                    i ? (l = i(e, u ? "" : l)) : u && (l = "none"),
                    l
                  );
                })(e, t.transform, i))
              : u.transform && (u.transform = "none")),
          p)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = c;
          u.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    9979: function (t, e, i) {
      "use strict";
      function n(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      i.d(e, {
        N: function () {
          return n;
        },
      });
    },
    1315: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return s;
        },
      });
      var n = i(2020),
        r = i(8322);
      function s(t, e, i) {
        var s;
        let { style: o } = t,
          a = {};
        for (let l in o)
          ((0, r.i)(o[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, n.j)(l, t) ||
            (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return (
          i && o && "string" == typeof o.willChange && (i.applyWillChange = !1),
          a
        );
      }
    },
    6019: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(n);
    },
    2622: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return l;
        },
      });
      var n = i(4651),
        r = i(5480);
      function s(t, e, i) {
        return "string" == typeof t ? t : r.px.transform(e + i * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: c,
          pathSpacing: d = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        v
      ) {
        if (((0, n.r)(t, f, v), m)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: x } = t;
        g.transform && (x && (y.transform = g.transform), delete g.transform),
          x &&
            (void 0 !== u || void 0 !== h || y.transform) &&
            (y.transformOrigin = (function (t, e, i) {
              let n = s(e, t.x, t.width),
                r = s(i, t.y, t.height);
              return `${n} ${r}`;
            })(x, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== i && (g.y = i),
          void 0 !== l && (g.scale = l),
          void 0 !== c &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-n);
              let u = r.px.transform(e),
                h = r.px.transform(i);
              t[l.array] = `${u} ${h}`;
            })(g, c, d, p, !1);
      }
    },
    2394: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    5969: function (t, e, i) {
      "use strict";
      i.d(e, {
        a: function () {
          return n;
        },
      });
      let n = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    545: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return o;
        },
      });
      var n = i(1580),
        r = i(9979),
        s = i(2394);
      function o(t, e, i, o) {
        for (let i in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(i) ? i : (0, n.D)(i), e.attrs[i]);
      }
    },
    875: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var n = i(8322),
        r = i(1315),
        s = i(6019);
      function o(t, e, i) {
        let o = (0, r.U)(t, e, i);
        for (let i in t)
          ((0, n.i)(t[i]) || (0, n.i)(e[i])) &&
            (o[
              -1 !== s._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return o;
      }
    },
    3653: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(5014),
        r = i(6219);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    3795: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var n = i(4572),
        r = i(6859),
        s = i(3552);
      function o(t) {
        return (0, n.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    6859: function (t, e, i) {
      "use strict";
      function n(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      i.d(e, {
        $: function () {
          return n;
        },
      });
    },
    8595: function (t, e, i) {
      "use strict";
      function n(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function r(t, e, i, r) {
        if ("function" == typeof e) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, {
        o: function () {
          return r;
        },
      });
    },
    3552: function (t, e, i) {
      "use strict";
      i.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...n];
    },
    565: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (t, e, i) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    1506: function (t, e, i) {
      "use strict";
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    9047: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(9276);
      let r = n.Z,
        s = n.Z;
    },
    7282: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    4386: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    7576: function (t, e, i) {
      "use strict";
      function n(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      i.d(e, {
        I: function () {
          return n;
        },
      });
    },
    9102: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    5004: function (t, e, i) {
      "use strict";
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    9276: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    9654: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    3217: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    9155: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(6925);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    2428: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(8746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    557: function (t, e, i) {
      "use strict";
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    458: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(7282).j ? n.useLayoutEffect : n.useEffect;
    },
    3476: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, {
        R: function () {
          return n;
        },
      });
    },
    804: function (t, e, i) {
      "use strict";
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
      });
      var n = i(2428),
        r = i(3476),
        s = i(9993),
        o = i(6219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.5.6"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    5778: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(1583);
      let r = {
        test: (0, i(3338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    598: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(783),
        r = i(5480),
        s = i(7292),
        o = i(3338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    146: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(7292),
        r = i(5778),
        s = i(598),
        o = i(1583);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    1583: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(1506),
        r = i(783),
        s = i(7292),
        o = i(3338);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    3338: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(7292);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4913: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(3646),
        r = i(7292);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    3646: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(146),
        r = i(7292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), i.push(t))
                  : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    783: function (t, e, i) {
      "use strict";
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(1506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    5480: function (t, e, i) {
      "use strict";
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(7292);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    7292: function (t, e, i) {
      "use strict";
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    3944: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return l;
        },
      });
      var n = i(804),
        r = i(5674),
        s = i(8746);
      class o extends n.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, r.p)(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let n = !1;
          return () => {
            if (n) return;
            n = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, s.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      var a = i(8322);
      function l(t, e) {
        var i, n;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((r = new o("auto")), t.addValue("willChange", r)),
          (n = r),
          (0, a.i)(n) && n.add)
        )
          return r.add(e);
      }
    },
    5674: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return o;
        },
      });
      var n = i(6323),
        r = i(1580),
        s = i(6019);
      function o(t) {
        return s.G.has(t) ? "transform" : n.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    8322: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    2404: function (t, e, i) {
      "use strict";
      i.d(e, {
        b: function () {
          return s;
        },
      });
      var n = i(9155),
        r = i(8322);
      function s(t) {
        let e = (0, r.i)(t) ? t.get() : t;
        return (0, n.p)(e) ? e.toValue() : e;
      }
    },
  },
]);
