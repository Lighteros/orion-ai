"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [549],
  {
    8369: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return c;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        l = 0,
        a = function (e) {
          return e && (e.host || a(e.parentNode));
        },
        u = function (e, t, n, u) {
          var c = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = a(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var s = i[n],
            d = [],
            f = new Set(),
            p = new Set(c),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          c.forEach(m);
          var v = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) v(e);
                else
                  try {
                    var t = e.getAttribute(u),
                      i = null !== t && "false" !== t,
                      l = (r.get(e) || 0) + 1,
                      a = (s.get(e) || 0) + 1;
                    r.set(e, l),
                      s.set(e, a),
                      d.push(e),
                      1 === l && i && o.set(e, !0),
                      1 === a && e.setAttribute(n, "true"),
                      i || e.setAttribute(u, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            v(t),
            f.clear(),
            l++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = s.get(e) - 1;
                r.set(e, t),
                  s.set(e, i),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --l ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        c = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              u(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    7818: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(551),
        o = n.n(r);
    },
    551: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(9920);
      n(7437), n(2265);
      let o = r._(n(148));
      function i(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let i = { ...r, ...t };
        return (0, o.default)({
          ...i,
          modules: null == (n = i.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    912: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(5592);
      function o(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    148: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = n(7437),
        o = n(2265),
        i = n(912),
        l = n(1481);
      function a(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let u = {
          loader: () => Promise.resolve(a(() => null)),
          loading: null,
          ssr: !0,
        },
        c = function (e) {
          let t = { ...u, ...e },
            n = (0, o.lazy)(() => t.loader().then(a)),
            c = t.loading;
          function s(e) {
            let a = c
                ? (0, r.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              u = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(l.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(i.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(o.Suspense, { fallback: a, children: u });
          }
          return (s.displayName = "LoadableComponent"), s;
        };
    },
    1481: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(7437),
        o = n(8512);
      function i(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, o.getExpectedRequestStore)("next/dynamic css"),
          i = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            i.push(...t);
          }
        }
        return 0 === i.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: i.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    2096: function (e, t, n) {
      var r = n(2265),
        o = n(1448);
      function i(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e;
      }
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && s(e, t);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t = (function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(e);
          return (
            (n = t
              ? Reflect.construct(r, arguments, c(this).constructor)
              : r.apply(this, arguments)),
            n && ("object" == typeof n || "function" == typeof n)
              ? n
              : (function (e) {
                  if (void 0 === e)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(this)
          );
        };
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function p(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          r = String(e);
        if (0 === n) return r;
        var o = r.match(/(.*?)([0-9]+)(.*)/),
          i = o ? o[1] : "",
          l = o ? o[3] : "",
          a = o ? o[2] : r,
          u =
            a.length >= n
              ? a
              : (
                  (
                    (function (e) {
                      if (Array.isArray(e)) return f(e);
                    })((t = Array(n))) ||
                    (function (e) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    (function (e, t) {
                      if (e) {
                        if ("string" == typeof e) return f(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if (
                          ("Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(e);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return f(e, void 0);
                      }
                    })(t) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  )
                    .map(function () {
                      return "0";
                    })
                    .join("") + a
                ).slice(-1 * n);
        return "".concat(i).concat(u).concat(l);
      }
      var m = { daysInHours: !1, zeroPadTime: 2 },
        v = (function (e) {
          u(n, e);
          var t = d(n);
          function n() {
            var e;
            return (
              i(this, n),
              (e = t.apply(this, arguments)),
              (e.state = { count: e.props.count || 3 }),
              (e.startCountdown = function () {
                e.interval = window.setInterval(function () {
                  0 == e.state.count - 1
                    ? (e.stopCountdown(),
                      e.props.onComplete && e.props.onComplete())
                    : e.setState(function (e) {
                        return { count: e.count - 1 };
                      });
                }, 1e3);
              }),
              (e.stopCountdown = function () {
                clearInterval(e.interval);
              }),
              (e.addTime = function (t) {
                e.stopCountdown(),
                  e.setState(function (e) {
                    return { count: e.count + t };
                  }, e.startCountdown);
              }),
              e
            );
          }
          return (
            a(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.startCountdown();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.interval);
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children
                    ? (0, r.cloneElement)(this.props.children, {
                        count: this.state.count,
                      })
                    : null;
                },
              },
            ]),
            n
          );
        })(r.Component);
      v.propTypes = {
        count: o.number,
        children: o.element,
        onComplete: o.func,
      };
      var h = (function (e) {
        u(n, e);
        var t = d(n);
        function n(e) {
          var r;
          if (
            (i(this, n),
            ((r = t.call(this, e)).mounted = !1),
            (r.initialTimestamp = r.calcOffsetStartTimestamp()),
            (r.offsetStartTimestamp = r.props.autoStart
              ? 0
              : r.initialTimestamp),
            (r.offsetTime = 0),
            (r.legacyMode = !1),
            (r.legacyCountdownRef = null),
            (r.tick = function () {
              var e = r.calcTimeDelta(),
                t = e.completed && !r.props.overtime ? void 0 : r.props.onTick;
              r.setTimeDeltaState(e, void 0, t);
            }),
            (r.setLegacyCountdownRef = function (e) {
              r.legacyCountdownRef = e;
            }),
            (r.start = function () {
              if (!r.isStarted()) {
                var e = r.offsetStartTimestamp;
                (r.offsetStartTimestamp = 0),
                  (r.offsetTime += e ? r.calcOffsetStartTimestamp() - e : 0);
                var t = r.calcTimeDelta();
                r.setTimeDeltaState(t, "STARTED", r.props.onStart),
                  r.props.controlled ||
                    (t.completed && !r.props.overtime) ||
                    (r.clearTimer(),
                    (r.interval = window.setInterval(
                      r.tick,
                      r.props.intervalDelay
                    )));
              }
            }),
            (r.pause = function () {
              r.isPaused() ||
                (r.clearTimer(),
                (r.offsetStartTimestamp = r.calcOffsetStartTimestamp()),
                r.setTimeDeltaState(
                  r.state.timeDelta,
                  "PAUSED",
                  r.props.onPause
                ));
            }),
            (r.stop = function () {
              r.isStopped() ||
                (r.clearTimer(),
                (r.offsetStartTimestamp = r.calcOffsetStartTimestamp()),
                (r.offsetTime = r.offsetStartTimestamp - r.initialTimestamp),
                r.setTimeDeltaState(
                  r.calcTimeDelta(),
                  "STOPPED",
                  r.props.onStop
                ));
            }),
            (r.isStarted = function () {
              return r.isStatus("STARTED");
            }),
            (r.isPaused = function () {
              return r.isStatus("PAUSED");
            }),
            (r.isStopped = function () {
              return r.isStatus("STOPPED");
            }),
            (r.isCompleted = function () {
              return r.isStatus("COMPLETED");
            }),
            e.date)
          ) {
            var o = r.calcTimeDelta();
            r.state = {
              timeDelta: o,
              status: o.completed ? "COMPLETED" : "STOPPED",
            };
          } else r.legacyMode = !0;
          return r;
        }
        return (
          a(n, [
            {
              key: "componentDidMount",
              value: function () {
                !this.legacyMode &&
                  ((this.mounted = !0),
                  this.props.onMount &&
                    this.props.onMount(this.calcTimeDelta()),
                  this.props.autoStart && this.start());
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.legacyMode ||
                  this.props.date === e.date ||
                  ((this.initialTimestamp = this.calcOffsetStartTimestamp()),
                  (this.offsetStartTimestamp = this.initialTimestamp),
                  (this.offsetTime = 0),
                  this.setTimeDeltaState(this.calcTimeDelta()));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.legacyMode || ((this.mounted = !1), this.clearTimer());
              },
            },
            {
              key: "calcTimeDelta",
              value: function () {
                var e = this.props,
                  t = e.date,
                  n = e.now,
                  r = e.precision,
                  o = e.controlled,
                  i = e.overtime;
                return (function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.now,
                    o = void 0 === r ? Date.now : r,
                    i = n.precision,
                    l = n.controlled,
                    a = n.offsetTime,
                    u = n.overtime;
                  (t =
                    "string" == typeof e
                      ? new Date(e).getTime()
                      : e instanceof Date
                      ? e.getTime()
                      : e),
                    l || (t += void 0 === a ? 0 : a);
                  var c = l ? t : t - o(),
                    s = Math.round(
                      1e3 *
                        parseFloat(
                          ((u ? c : Math.max(0, c)) / 1e3).toFixed(
                            Math.min(20, Math.max(0, void 0 === i ? 0 : i))
                          )
                        )
                    ),
                    d = Math.abs(s) / 1e3;
                  return {
                    total: s,
                    days: Math.floor(d / 86400),
                    hours: Math.floor((d / 3600) % 24),
                    minutes: Math.floor((d / 60) % 60),
                    seconds: Math.floor(d % 60),
                    milliseconds: Number(((d % 1) * 1e3).toFixed()),
                    completed: s <= 0,
                  };
                })(t, {
                  now: n,
                  precision: r,
                  controlled: o,
                  offsetTime: this.offsetTime,
                  overtime: i,
                });
              },
            },
            {
              key: "calcOffsetStartTimestamp",
              value: function () {
                return Date.now();
              },
            },
            {
              key: "addTime",
              value: function (e) {
                this.legacyCountdownRef.addTime(e);
              },
            },
            {
              key: "clearTimer",
              value: function () {
                window.clearInterval(this.interval);
              },
            },
            {
              key: "isStatus",
              value: function (e) {
                return this.state.status === e;
              },
            },
            {
              key: "setTimeDeltaState",
              value: function (e, t, n) {
                var r = this;
                if (this.mounted) {
                  var o = e.completed && !this.state.timeDelta.completed,
                    i = e.completed && "STARTED" === t;
                  return (
                    o && !this.props.overtime && this.clearTimer(),
                    this.setState(
                      function (n) {
                        var o = t || n.status;
                        return (
                          e.completed && !r.props.overtime
                            ? (o = "COMPLETED")
                            : t || "COMPLETED" !== o || (o = "STOPPED"),
                          { timeDelta: e, status: o }
                        );
                      },
                      function () {
                        n && n(r.state.timeDelta),
                          r.props.onComplete &&
                            (o || i) &&
                            r.props.onComplete(e, i);
                      }
                    )
                  );
                }
              },
            },
            {
              key: "getApi",
              value: function () {
                return (this.api = this.api || {
                  start: this.start,
                  pause: this.pause,
                  stop: this.stop,
                  isStarted: this.isStarted,
                  isPaused: this.isPaused,
                  isStopped: this.isStopped,
                  isCompleted: this.isCompleted,
                });
              },
            },
            {
              key: "getRenderProps",
              value: function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  l,
                  a,
                  u,
                  c,
                  s,
                  d,
                  f = this.props,
                  v = f.daysInHours,
                  h = f.zeroPadTime,
                  g = f.zeroPadDays,
                  y = this.state.timeDelta;
                return Object.assign(Object.assign({}, y), {
                  api: this.getApi(),
                  props: this.props,
                  formatted:
                    ((e = { daysInHours: v, zeroPadTime: h, zeroPadDays: g }),
                    (t = y.days),
                    (n = y.hours),
                    (r = y.minutes),
                    (o = y.seconds),
                    (l = (i = Object.assign(Object.assign({}, m), e))
                      .daysInHours),
                    (a = i.zeroPadTime),
                    (c = void 0 === (u = i.zeroPadDays) ? a : u),
                    (s = Math.min(2, a)),
                    (d = l ? p(n + 24 * t, a) : p(n, s)),
                    {
                      days: l ? "" : p(t, c),
                      hours: d,
                      minutes: p(r, s),
                      seconds: p(o, s),
                    }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                if (this.legacyMode) {
                  var e = this.props,
                    t = e.count,
                    n = e.children,
                    o = e.onComplete;
                  return (0, r.createElement)(
                    v,
                    {
                      ref: this.setLegacyCountdownRef,
                      count: t,
                      onComplete: o,
                    },
                    n
                  );
                }
                var i = this.props,
                  l = i.className,
                  a = i.overtime,
                  u = i.children,
                  c = i.renderer,
                  s = this.getRenderProps();
                if (c) return c(s);
                if (u && this.state.timeDelta.completed && !a)
                  return (0, r.cloneElement)(u, { countdown: s });
                var d = s.formatted,
                  f = d.days,
                  p = d.hours,
                  m = d.minutes,
                  h = d.seconds;
                return (0, r.createElement)(
                  "span",
                  { className: l },
                  s.total < 0 ? "-" : "",
                  f,
                  f ? ":" : "",
                  p,
                  ":",
                  m,
                  ":",
                  h
                );
              },
            },
          ]),
          n
        );
      })(r.Component);
      (h.defaultProps = Object.assign(Object.assign({}, m), {
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        autoStart: !0,
      })),
        (h.propTypes = {
          date: (0, o.oneOfType)([(0, o.instanceOf)(Date), o.string, o.number]),
          daysInHours: o.bool,
          zeroPadTime: o.number,
          zeroPadDays: o.number,
          controlled: o.bool,
          intervalDelay: o.number,
          precision: o.number,
          autoStart: o.bool,
          overtime: o.bool,
          className: o.string,
          children: o.element,
          renderer: o.func,
          now: o.func,
          onMount: o.func,
          onStart: o.func,
          onPause: o.func,
          onStop: o.func,
          onTick: o.func,
          onComplete: o.func,
        }),
        (t.ZP = h);
    },
    1823: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return l;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return i;
        },
        zi: function () {
          return o;
        },
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        i = "with-scroll-bars-hidden",
        l = "--removed-body-scroll-bar-size";
    },
    5973: function (e, t, n) {
      n.d(t, {
        jp: function () {
          return v;
        },
      });
      var r = n(2265),
        o = n(8039),
        i = n(1823),
        l = { left: 0, top: 0, right: 0, gap: 0 },
        a = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        u = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [a(n), a(r), a(o)];
        },
        c = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return l;
          var t = u(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        s = (0, o.Ws)(),
        d = "data-scroll-locked",
        f = function (e, t, n, r) {
          var o = e.left,
            l = e.top,
            a = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(i.xv, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(l, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(i.pF, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.zi, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.pF, " .")
              .concat(i.pF, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.zi, " .")
              .concat(i.zi, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(i.Av, ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        p = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        m = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(d, (p() + 1).toString()),
              function () {
                var e = p() - 1;
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString());
              }
            );
          }, []);
        },
        v = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            i = void 0 === o ? "margin" : o;
          m();
          var l = r.useMemo(
            function () {
              return c(i);
            },
            [i]
          );
          return r.createElement(s, {
            styles: f(l, !t, i, n ? "" : "!important"),
          });
        };
    },
    8039: function (e, t, n) {
      n.d(t, {
        Ws: function () {
          return a;
        },
      });
      var r,
        o = n(2265),
        i = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, l;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        l = function () {
          var e = i();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        a = function () {
          var e = l();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    8215: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var r = n(2265);
      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        l = new WeakMap();
      function a(e, t) {
        var n,
          a,
          u,
          c =
            ((n = t || null),
            (a = function (t) {
              return e.forEach(function (e) {
                return o(e, t);
              });
            }),
            ((u = (0, r.useState)(function () {
              return {
                value: n,
                callback: a,
                facade: {
                  get current() {
                    return u.value;
                  },
                  set current(value) {
                    var e = u.value;
                    e !== value && ((u.value = value), u.callback(value, e));
                  },
                },
              };
            })[0]).callback = a),
            u.facade);
        return (
          i(
            function () {
              var t = l.get(c);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  i = c.current;
                n.forEach(function (e) {
                  r.has(e) || o(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || o(e, i);
                  });
              }
              l.set(c, e);
            },
            [e]
          ),
          c
        );
      }
    },
    8776: function (e, t, n) {
      n.d(t, {
        L: function () {
          return l;
        },
      });
      var r = n(1735),
        o = n(2265),
        i = function (e) {
          var t = e.sideCar,
            n = (0, r._T)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var i = t.read();
          if (!i) throw Error("Sidecar medium not found");
          return o.createElement(i, (0, r.pi)({}, n));
        };
      function l(e, t) {
        return e.useMedium(t), i;
      }
      i.isSideCarExport = !0;
    },
    5411: function (e, t, n) {
      n.d(t, {
        _: function () {
          return i;
        },
      });
      var r = n(1735);
      function o(e) {
        return e;
      }
      function i(e) {
        void 0 === e && (e = {});
        var t,
          n,
          i,
          l =
            (void 0 === t && (t = o),
            (n = []),
            (i = !1),
            {
              read: function () {
                if (i)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (e) {
                var r = t(e, i);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (e) {
                      return e !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (i = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                i = !0;
                var t = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(e), (t = n);
                }
                var o = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  l = function () {
                    return Promise.resolve().then(o);
                  };
                l(),
                  (n = {
                    push: function (e) {
                      t.push(e), l();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            });
        return (l.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), l;
      }
    },
    1310: function (e, t, n) {
      let r;
      n.d(t, {
        x8: function () {
          return eB;
        },
        VY: function () {
          return eW;
        },
        dk: function () {
          return eH;
        },
        aV: function () {
          return eF;
        },
        h_: function () {
          return ej;
        },
        fC: function () {
          return eI;
        },
        Dx: function () {
          return eV;
        },
        xz: function () {
          return eN;
        },
      });
      var o = n(2265),
        i = n.t(o, 2),
        l = n(8149),
        a = n(1584),
        u = n(8324),
        c = n(1336),
        s = i["useId".toString()] || (() => void 0),
        d = 0;
      function f(e) {
        let [t, n] = o.useState(s());
        return (
          (0, c.b)(() => {
            e || n((e) => e ?? String(d++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      var p = n(1715),
        m = n(2358),
        v = n(5171),
        h = n(5137),
        g = n(7437),
        y = "focusScope.autoFocusOnMount",
        w = "focusScope.autoFocusOnUnmount",
        b = { bubbles: !1, cancelable: !0 },
        E = o.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: i,
              onUnmountAutoFocus: l,
              ...u
            } = e,
            [c, s] = o.useState(null),
            d = (0, h.W)(i),
            f = (0, h.W)(l),
            p = o.useRef(null),
            m = (0, a.e)(t, (e) => s(e)),
            E = o.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          o.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (E.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (p.current = t)
                    : C(p.current, { select: !0 });
                },
                t = function (e) {
                  if (E.paused || !c) return;
                  let t = e.relatedTarget;
                  null === t || c.contains(t) || C(p.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && C(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, c, E.paused]),
            o.useEffect(() => {
              if (c) {
                T.add(E);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(y, b);
                  c.addEventListener(y, d),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (C(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        x(c).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && C(c));
                }
                return () => {
                  c.removeEventListener(y, d),
                    setTimeout(() => {
                      let t = new CustomEvent(w, b);
                      c.addEventListener(w, f),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          C(null != e ? e : document.body, { select: !0 }),
                        c.removeEventListener(w, f),
                        T.remove(E);
                    }, 0);
                };
              }
            }, [c, d, f, E]);
          let R = o.useCallback(
            (e) => {
              if ((!n && !r) || E.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = x(e);
                    return [S(t, e), S(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && C(i, { select: !0 }))
                    : (e.preventDefault(), n && C(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, E.paused]
          );
          return (0, g.jsx)(v.WV.div, {
            tabIndex: -1,
            ...u,
            ref: m,
            onKeyDown: R,
          });
        });
      function x(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function S(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function C(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      E.displayName = "FocusScope";
      var T =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = R(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = R(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function R(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var P = n(6935),
        D = n(1383),
        O = 0;
      function k() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var L = n(1735),
        M = n(1823),
        A = n(8215),
        _ = (0, n(5411)._)(),
        I = function () {},
        N = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: I,
              onWheelCapture: I,
              onTouchMoveCapture: I,
            }),
            i = r[0],
            l = r[1],
            a = e.forwardProps,
            u = e.children,
            c = e.className,
            s = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noIsolation,
            v = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            w = (0, L._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            b = (0, A.q)([n, t]),
            E = (0, L.pi)((0, L.pi)({}, w), i);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(p, {
                sideCar: _,
                removeScrollBar: s,
                shards: f,
                noIsolation: m,
                inert: v,
                setCallbacks: l,
                allowPinchZoom: !!h,
                lockRef: n,
                gapMode: y,
              }),
            a
              ? o.cloneElement(
                  o.Children.only(u),
                  (0, L.pi)((0, L.pi)({}, E), { ref: b })
                )
              : o.createElement(
                  void 0 === g ? "div" : g,
                  (0, L.pi)({}, E, { className: c, ref: b }),
                  u
                )
          );
        });
      (N.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (N.classNames = { fullWidth: M.zi, zeroRight: M.pF });
      var j = n(8776),
        F = n(5973),
        W = n(8039),
        V = !1;
      if ("undefined" != typeof window)
        try {
          var H = Object.defineProperty({}, "passive", {
            get: function () {
              return (V = !0), !0;
            },
          });
          window.addEventListener("test", H, H),
            window.removeEventListener("test", H, H);
        } catch (e) {
          V = !1;
        }
      var B = !!V && { passive: !1 },
        z = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        K = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              $(e, r))
            ) {
              var o = U(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        $ = function (e, t) {
          return "v" === e ? z(t, "overflowY") : z(t, "overflowX");
        },
        U = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        q = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var m = U(e, u),
              v = m[0],
              h = m[1] - m[2] - l * v;
            (v || h) && $(e, u) && ((f += h), (p += v)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (s = !0),
            s
          );
        },
        Y = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        X = function (e) {
          return [e.deltaX, e.deltaY];
        },
        Z = function (e) {
          return e && "current" in e ? e.current : e;
        },
        J = 0,
        G = [],
        Q = (0, j.L)(_, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            i = o.useState(J++)[0],
            l = o.useState(W.Ws)[0],
            a = o.useRef(e);
          o.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, L.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(Z),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = o.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !a.current.allowPinchZoom;
              var o,
                i = Y(e),
                l = n.current,
                u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                c = "deltaY" in e ? e.deltaY : l[1] - i[1],
                s = e.target,
                d = Math.abs(u) > Math.abs(c) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = K(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = K(d, s))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || c) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return q(p, t, e, "h" === p ? u : c, !0);
            }, []),
            c = o.useCallback(function (e) {
              if (G.length && G[G.length - 1] === l) {
                var n = "deltaY" in e ? X(e) : Y(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(Z)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = o.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = Y(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              s(t.type, X(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              s(t.type, Y(t), t.target, u(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              G.push(l),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", c, B),
              document.addEventListener("touchmove", c, B),
              document.addEventListener("touchstart", d, B),
              function () {
                (G = G.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", c, B),
                  document.removeEventListener("touchmove", c, B),
                  document.removeEventListener("touchstart", d, B);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            v = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            v
              ? o.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            m ? o.createElement(F.jp, { gapMode: e.gapMode }) : null
          );
        }),
        ee = o.forwardRef(function (e, t) {
          return o.createElement(N, (0, L.pi)({}, e, { ref: t, sideCar: Q }));
        });
      ee.classNames = N.classNames;
      var et = n(8369),
        en = n(1538),
        er = "Dialog",
        [eo, ei] = (0, u.b)(er),
        [el, ea] = eo(er),
        eu = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: l,
              modal: a = !0,
            } = e,
            u = o.useRef(null),
            c = o.useRef(null),
            [s = !1, d] = (0, p.T)({ prop: r, defaultProp: i, onChange: l });
          return (0, g.jsx)(el, {
            scope: t,
            triggerRef: u,
            contentRef: c,
            contentId: f(),
            titleId: f(),
            descriptionId: f(),
            open: s,
            onOpenChange: d,
            onOpenToggle: o.useCallback(() => d((e) => !e), [d]),
            modal: a,
            children: n,
          });
        };
      eu.displayName = er;
      var ec = "DialogTrigger",
        es = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ea(ec, n),
            i = (0, a.e)(t, o.triggerRef);
          return (0, g.jsx)(v.WV.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": eO(o.open),
            ...r,
            ref: i,
            onClick: (0, l.M)(e.onClick, o.onOpenToggle),
          });
        });
      es.displayName = ec;
      var ed = "DialogPortal",
        [ef, ep] = eo(ed, { forceMount: void 0 }),
        em = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: i,
            } = e,
            l = ea(ed, t);
          return (0, g.jsx)(ef, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e) =>
              (0, g.jsx)(D.z, {
                present: n || l.open,
                children: (0, g.jsx)(P.h, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      em.displayName = ed;
      var ev = "DialogOverlay",
        eh = o.forwardRef((e, t) => {
          let n = ep(ev, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = ea(ev, e.__scopeDialog);
          return i.modal
            ? (0, g.jsx)(D.z, {
                present: r || i.open,
                children: (0, g.jsx)(eg, { ...o, ref: t }),
              })
            : null;
        });
      eh.displayName = ev;
      var eg = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ea(ev, n);
          return (0, g.jsx)(ee, {
            as: en.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, g.jsx)(v.WV.div, {
              "data-state": eO(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        ey = "DialogContent",
        ew = o.forwardRef((e, t) => {
          let n = ep(ey, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = ea(ey, e.__scopeDialog);
          return (0, g.jsx)(D.z, {
            present: r || i.open,
            children: i.modal
              ? (0, g.jsx)(eb, { ...o, ref: t })
              : (0, g.jsx)(eE, { ...o, ref: t }),
          });
        });
      ew.displayName = ey;
      var eb = o.forwardRef((e, t) => {
          let n = ea(ey, e.__scopeDialog),
            r = o.useRef(null),
            i = (0, a.e)(t, n.contentRef, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, et.Ry)(e);
            }, []),
            (0, g.jsx)(ex, {
              ...e,
              ref: i,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, l.M)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, l.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, l.M)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        eE = o.forwardRef((e, t) => {
          let n = ea(ey, e.__scopeDialog),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, g.jsx)(ex, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var o, l;
              null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (l = n.triggerRef.current) ||
                    void 0 === l ||
                    l.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var o, l;
              null === (o = e.onInteractOutside) ||
                void 0 === o ||
                o.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let a = t.target;
              (null === (l = n.triggerRef.current) || void 0 === l
                ? void 0
                : l.contains(a)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        ex = o.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: i,
              onCloseAutoFocus: l,
              ...u
            } = e,
            c = ea(ey, n),
            s = o.useRef(null),
            d = (0, a.e)(t, s);
          return (
            o.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : k()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : k()
                ),
                O++,
                () => {
                  1 === O &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    O--;
                }
              );
            }, []),
            (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(E, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: l,
                  children: (0, g.jsx)(m.XB, {
                    role: "dialog",
                    id: c.contentId,
                    "aria-describedby": c.descriptionId,
                    "aria-labelledby": c.titleId,
                    "data-state": eO(c.open),
                    ...u,
                    ref: d,
                    onDismiss: () => c.onOpenChange(!1),
                  }),
                }),
                (0, g.jsxs)(g.Fragment, {
                  children: [
                    (0, g.jsx)(eA, { titleId: c.titleId }),
                    (0, g.jsx)(e_, {
                      contentRef: s,
                      descriptionId: c.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        eS = "DialogTitle",
        eC = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ea(eS, n);
          return (0, g.jsx)(v.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      eC.displayName = eS;
      var eT = "DialogDescription",
        eR = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ea(eT, n);
          return (0, g.jsx)(v.WV.p, { id: o.descriptionId, ...r, ref: t });
        });
      eR.displayName = eT;
      var eP = "DialogClose",
        eD = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ea(eP, n);
          return (0, g.jsx)(v.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, l.M)(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function eO(e) {
        return e ? "open" : "closed";
      }
      eD.displayName = eP;
      var ek = "DialogTitleWarning",
        [eL, eM] = (0, u.k)(ek, {
          contentName: ey,
          titleName: eS,
          docsSlug: "dialog",
        }),
        eA = (e) => {
          let { titleId: t } = e,
            n = eM(ek),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            o.useEffect(() => {
              t && !document.getElementById(t) && console.error(r);
            }, [r, t]),
            null
          );
        },
        e_ = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = eM("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            o.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(i);
            }, [i, t, n]),
            null
          );
        },
        eI = eu,
        eN = es,
        ej = em,
        eF = eh,
        eW = ew,
        eV = eC,
        eH = eR,
        eB = eD;
    },
    4357: function (e, t, n) {
      let r, o;
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      n.d(t, {
        VY: function () {
          return nb;
        },
        ZA: function () {
          return nx;
        },
        JO: function () {
          return ny;
        },
        ck: function () {
          return nC;
        },
        wU: function () {
          return nR;
        },
        eT: function () {
          return nT;
        },
        __: function () {
          return nS;
        },
        h_: function () {
          return nw;
        },
        fC: function () {
          return nv;
        },
        Z0: function () {
          return nP;
        },
        xz: function () {
          return nh;
        },
        B4: function () {
          return ng;
        },
        l_: function () {
          return nE;
        },
      });
      var l = n(2265),
        a = n.t(l, 2),
        u = n(4887);
      function c(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      function s(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      function d(e, t = []) {
        let n = [],
          r = () => {
            let t = n.map((e) => (0, l.createContext)(e));
            return function (n) {
              let r = (null == n ? void 0 : n[e]) || t;
              return (0, l.useMemo)(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r]
              );
            };
          };
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              let o = (0, l.createContext)(r),
                i = n.length;
              function a(t) {
                let { scope: n, children: r, ...a } = t,
                  u = (null == n ? void 0 : n[e][i]) || o,
                  c = (0, l.useMemo)(() => a, Object.values(a));
                return (0, l.createElement)(u.Provider, { value: c }, r);
              }
              return (
                (n = [...n, r]),
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, a) {
                    let u = (null == a ? void 0 : a[e][i]) || o,
                      c = (0, l.useContext)(u);
                    if (c) return c;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, l.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: r }),
                    [r]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(r, ...t),
          ]
        );
      }
      function f(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function p(...e) {
        return (0, l.useCallback)(f(...e), e);
      }
      let m = (0, l.forwardRef)((e, t) => {
        let { children: n, ...r } = e,
          o = l.Children.toArray(n),
          a = o.find(g);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : l.Children.count(e) > 1
                ? l.Children.only(null)
                : (0, l.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, l.createElement)(
            v,
            i({}, r, { ref: t }),
            (0, l.isValidElement)(e) ? (0, l.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, l.createElement)(v, i({}, r, { ref: t }), n);
      });
      m.displayName = "Slot";
      let v = (0, l.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, l.isValidElement)(n)
          ? (0, l.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r)
                    ? o && i
                      ? (n[r] = (...e) => {
                          i(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : "style" === r
                    ? (n[r] = { ...o, ...i })
                    : "className" === r &&
                      (n[r] = [o, i].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: t ? f(t, n.ref) : n.ref,
            })
          : l.Children.count(n) > 1
          ? l.Children.only(null)
          : null;
      });
      v.displayName = "SlotClone";
      let h = ({ children: e }) => (0, l.createElement)(l.Fragment, null, e);
      function g(e) {
        return (0, l.isValidElement)(e) && e.type === h;
      }
      let y = (0, l.createContext)(void 0),
        w = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, l.forwardRef)((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? m : t;
            return (
              (0, l.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, l.createElement)(a, i({}, o, { ref: n }))
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function b(e) {
        let t = (0, l.useRef)(e);
        return (
          (0, l.useEffect)(() => {
            t.current = e;
          }),
          (0, l.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
      let E = "dismissableLayer.update",
        x = (0, l.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        S = (0, l.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: o = !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              onFocusOutside: c,
              onInteractOutside: d,
              onDismiss: f,
              ...m
            } = e,
            v = (0, l.useContext)(x),
            [h, g] = (0, l.useState)(null),
            y =
              null !== (n = null == h ? void 0 : h.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, S] = (0, l.useState)({}),
            R = p(t, (e) => g(e)),
            P = Array.from(v.layers),
            [D] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = P.indexOf(D),
            k = h ? P.indexOf(h) : -1,
            L = v.layersWithOutsidePointerEventsDisabled.size > 0,
            M = k >= O,
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = b(e),
                r = (0, l.useRef)(!1),
                o = (0, l.useRef)(() => {});
              return (
                (0, l.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function i() {
                          T("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = i),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : i();
                      }
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...v.branches].some((e) => e.contains(t));
              !M ||
                n ||
                (null == u || u(e),
                null == d || d(e),
                e.defaultPrevented || null == f || f());
            }, y),
            _ = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = b(e),
                r = (0, l.useRef)(!1);
              return (
                (0, l.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      T(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...v.branches].some((e) => e.contains(t)) ||
                (null == c || c(e),
                null == d || d(e),
                e.defaultPrevented || null == f || f());
            }, y);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = b(e);
              (0, l.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              k !== v.layers.size - 1 ||
                (null == a || a(e),
                !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, y),
            (0, l.useEffect)(() => {
              if (h)
                return (
                  o &&
                    (0 === v.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = y.body.style.pointerEvents),
                      (y.body.style.pointerEvents = "none")),
                    v.layersWithOutsidePointerEventsDisabled.add(h)),
                  v.layers.add(h),
                  C(),
                  () => {
                    o &&
                      1 === v.layersWithOutsidePointerEventsDisabled.size &&
                      (y.body.style.pointerEvents = r);
                  }
                );
            }, [h, y, o, v]),
            (0, l.useEffect)(
              () => () => {
                h &&
                  (v.layers.delete(h),
                  v.layersWithOutsidePointerEventsDisabled.delete(h),
                  C());
              },
              [h, v]
            ),
            (0, l.useEffect)(() => {
              let e = () => S({});
              return (
                document.addEventListener(E, e),
                () => document.removeEventListener(E, e)
              );
            }, []),
            (0, l.createElement)(
              w.div,
              i({}, m, {
                ref: R,
                style: {
                  pointerEvents: L ? (M ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: s(e.onFocusCapture, _.onFocusCapture),
                onBlurCapture: s(e.onBlurCapture, _.onBlurCapture),
                onPointerDownCapture: s(
                  e.onPointerDownCapture,
                  A.onPointerDownCapture
                ),
              })
            )
          );
        });
      function C() {
        let e = new CustomEvent(E);
        document.dispatchEvent(e);
      }
      function T(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && o.addEventListener(e, t, { once: !0 }), r)
          ? o && (0, u.flushSync)(() => o.dispatchEvent(i))
          : o.dispatchEvent(i);
      }
      let R = 0;
      function P() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      let D = "focusScope.autoFocusOnMount",
        O = "focusScope.autoFocusOnUnmount",
        k = { bubbles: !1, cancelable: !0 },
        L = (0, l.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...u
            } = e,
            [c, s] = (0, l.useState)(null),
            d = b(o),
            f = b(a),
            m = (0, l.useRef)(null),
            v = p(t, (e) => s(e)),
            h = (0, l.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, l.useEffect)(() => {
            if (r) {
              function e(e) {
                if (h.paused || !c) return;
                let t = e.target;
                c.contains(t) ? (m.current = t) : _(m.current, { select: !0 });
              }
              function t(e) {
                if (h.paused || !c) return;
                let t = e.relatedTarget;
                null === t || c.contains(t) || _(m.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                let t = document.activeElement;
                for (let n of e)
                  n.removedNodes.length > 0 &&
                    !(null != c && c.contains(t)) &&
                    _(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, c, h.paused]),
            (0, l.useEffect)(() => {
              if (c) {
                I.add(h);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(D, k);
                  c.addEventListener(D, d),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (_(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        M(c).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && _(c));
                }
                return () => {
                  c.removeEventListener(D, d),
                    setTimeout(() => {
                      let t = new CustomEvent(O, k);
                      c.addEventListener(O, f),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          _(null != e ? e : document.body, { select: !0 }),
                        c.removeEventListener(O, f),
                        I.remove(h);
                    }, 0);
                };
              }
            }, [c, d, f, h]);
          let g = (0, l.useCallback)(
            (e) => {
              if ((!n && !r) || h.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = M(e);
                    return [A(t, e), A(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && _(i, { select: !0 }))
                    : (e.preventDefault(), n && _(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, h.paused]
          );
          return (0, l.createElement)(
            w.div,
            i({ tabIndex: -1 }, u, { ref: v, onKeyDown: g })
          );
        });
      function M(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function A(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function _(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let I =
        ((o = []),
        {
          add(e) {
            let t = o[0];
            e !== t && (null == t || t.pause()), (o = N(o, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (o = N(o, e))[0]) || void 0 === t || t.resume();
          },
        });
      function N(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      let j = (null == globalThis ? void 0 : globalThis.document)
          ? l.useLayoutEffect
          : () => {},
        F = a["useId".toString()] || (() => void 0),
        W = 0;
      function V(e) {
        let [t, n] = l.useState(F());
        return (
          j(() => {
            e || n((e) => (null != e ? e : String(W++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      let H = ["top", "right", "bottom", "left"],
        B = Math.min,
        z = Math.max,
        K = Math.round,
        $ = Math.floor,
        U = (e) => ({ x: e, y: e }),
        q = { left: "right", right: "left", bottom: "top", top: "bottom" },
        Y = { start: "end", end: "start" };
      function X(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function Z(e) {
        return e.split("-")[0];
      }
      function J(e) {
        return e.split("-")[1];
      }
      function G(e) {
        return "x" === e ? "y" : "x";
      }
      function Q(e) {
        return "y" === e ? "height" : "width";
      }
      function ee(e) {
        return ["top", "bottom"].includes(Z(e)) ? "y" : "x";
      }
      function et(e) {
        return e.replace(/start|end/g, (e) => Y[e]);
      }
      function en(e) {
        return e.replace(/left|right|bottom|top/g, (e) => q[e]);
      }
      function er(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function eo(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function ei(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = ee(t),
          a = G(ee(t)),
          u = Q(a),
          c = Z(t),
          s = "y" === l,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          p = o[u] / 2 - i[u] / 2;
        switch (c) {
          case "top":
            r = { x: d, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (J(t)) {
          case "start":
            r[a] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let el = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          c = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: d } = ei(c, r, u),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: v } = a[n],
            {
              x: h,
              y: g,
              data: y,
              reset: w,
            } = await v({
              x: s,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (s = null != h ? h : s),
            (d = null != g ? g : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: s, y: d } = ei(c, f, u))),
              (n = -1));
        }
        return { x: s, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function ea(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = X(t, e),
          m = er(p),
          v = a[f ? ("floating" === d ? "reference" : "floating") : d],
          h = eo(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          g =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          b = eo(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: g,
                  offsetParent: y,
                  strategy: u,
                })
              : g
          );
        return {
          top: (h.top - b.top + m.top) / w.y,
          bottom: (b.bottom - h.bottom + m.bottom) / w.y,
          left: (h.left - b.left + m.left) / w.x,
          right: (b.right - h.right + m.right) / w.x,
        };
      }
      function eu(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function ec(e) {
        return H.some((t) => e[t] >= 0);
      }
      async function es(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = Z(n),
          a = J(n),
          u = "y" === ee(n),
          c = ["left", "top"].includes(l) ? -1 : 1,
          s = i && u ? -1 : 1,
          d = X(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          a && "number" == typeof m && (p = "end" === a ? -1 * m : m),
          u ? { x: p * s, y: f * c } : { x: f * c, y: p * s }
        );
      }
      function ed(e) {
        return em(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function ef(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function ep(e) {
        var t;
        return null ==
          (t = (em(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function em(e) {
        return e instanceof Node || e instanceof ef(e).Node;
      }
      function ev(e) {
        return e instanceof Element || e instanceof ef(e).Element;
      }
      function eh(e) {
        return e instanceof HTMLElement || e instanceof ef(e).HTMLElement;
      }
      function eg(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof ef(e).ShadowRoot)
        );
      }
      function ey(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = eS(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function ew(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function eb(e) {
        let t = eE(),
          n = ev(e) ? eS(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function eE() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function ex(e) {
        return ["html", "body", "#document"].includes(ed(e));
      }
      function eS(e) {
        return ef(e).getComputedStyle(e);
      }
      function eC(e) {
        return ev(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function eT(e) {
        if ("html" === ed(e)) return e;
        let t = e.assignedSlot || e.parentNode || (eg(e) && e.host) || ep(e);
        return eg(t) ? t.host : t;
      }
      function eR(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = eT(t);
            return ex(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eh(n) && ey(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = ef(o);
        if (i) {
          let e = eP(l);
          return t.concat(
            l,
            l.visualViewport || [],
            ey(o) ? o : [],
            e && n ? eR(e) : []
          );
        }
        return t.concat(o, eR(o, [], n));
      }
      function eP(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function eD(e) {
        let t = eS(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = eh(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = K(n) !== i || K(r) !== l;
        return a && ((n = i), (r = l)), { width: n, height: r, $: a };
      }
      function eO(e) {
        return ev(e) ? e : e.contextElement;
      }
      function ek(e) {
        let t = eO(e);
        if (!eh(t)) return U(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = eD(t),
          l = (i ? K(n.width) : n.width) / r,
          a = (i ? K(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let eL = U(0);
      function eM(e) {
        let t = ef(e);
        return eE() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eL;
      }
      function eA(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = eO(e),
          a = U(1);
        t && (r ? ev(r) && (a = ek(r)) : (a = ek(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === ef(l)) && o)
            ? eM(l)
            : U(0),
          c = (i.left + u.x) / a.x,
          s = (i.top + u.y) / a.y,
          d = i.width / a.x,
          f = i.height / a.y;
        if (l) {
          let e = ef(l),
            t = r && ev(r) ? ef(r) : r,
            n = e,
            o = eP(n);
          for (; o && r && t !== n; ) {
            let e = ek(o),
              t = o.getBoundingClientRect(),
              r = eS(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += i),
              (s += l),
              (o = eP((n = ef(o))));
          }
        }
        return eo({ width: d, height: f, x: c, y: s });
      }
      function e_(e) {
        return eA(ep(e)).left + eC(e).scrollLeft;
      }
      function eI(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = ef(e),
              r = ep(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = eE();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = ep(e),
              n = eC(e),
              r = e.ownerDocument.body,
              o = z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = z(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + e_(e),
              a = -n.scrollTop;
            return (
              "rtl" === eS(r).direction &&
                (l += z(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })(ep(e));
        else if (ev(t))
          r = (function (e, t) {
            let n = eA(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = eh(e) ? ek(e) : U(1),
              l = e.clientWidth * i.x;
            return {
              width: l,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = eM(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return eo(r);
      }
      function eN(e) {
        return "static" === eS(e).position;
      }
      function ej(e, t) {
        return eh(e) && "fixed" !== eS(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function eF(e, t) {
        let n = ef(e);
        if (ew(e)) return n;
        if (!eh(e)) {
          let t = eT(e);
          for (; t && !ex(t); ) {
            if (ev(t) && !eN(t)) return t;
            t = eT(t);
          }
          return n;
        }
        let r = ej(e, t);
        for (; r && ["table", "td", "th"].includes(ed(r)) && eN(r); )
          r = ej(r, t);
        return r && ex(r) && eN(r) && !eb(r)
          ? n
          : r ||
              (function (e) {
                let t = eT(e);
                for (; eh(t) && !ex(t); ) {
                  if (eb(t)) return t;
                  if (ew(t)) break;
                  t = eT(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eW = async function (e) {
          let t = this.getOffsetParent || eF,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = eh(t),
                o = ep(t),
                i = "fixed" === n,
                l = eA(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                u = U(0);
              if (r || (!r && !i)) {
                if ((("body" !== ed(t) || ey(o)) && (a = eC(t)), r)) {
                  let e = eA(t, !0, i, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = e_(o));
              }
              return {
                x: l.left + a.scrollLeft - u.x,
                y: l.top + a.scrollTop - u.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eV = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = ep(r),
              a = !!t && ew(t.floating);
            if (r === l || (a && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = U(1),
              s = U(0),
              d = eh(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== ed(r) || ey(l)) && (u = eC(r)), eh(r))
            ) {
              let e = eA(r);
              (c = ek(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + s.x,
              y: n.y * c.y - u.scrollTop * c.y + s.y,
            };
          },
          getDocumentElement: ep,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? ew(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = eR(e, [], !1).filter(
                            (e) => ev(e) && "body" !== ed(e)
                          ),
                          o = null,
                          i = "fixed" === eS(e).position,
                          l = i ? eT(e) : e;
                        for (; ev(l) && !ex(l); ) {
                          let t = eS(l),
                            n = eb(l);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (ey(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = eT(t);
                                      return (
                                        !(r === n || !ev(r) || ex(r)) &&
                                        ("fixed" === eS(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = eT(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = i[0],
              a = i.reduce((e, n) => {
                let r = eI(t, n, o);
                return (
                  (e.top = z(r.top, e.top)),
                  (e.right = B(r.right, e.right)),
                  (e.bottom = B(r.bottom, e.bottom)),
                  (e.left = z(r.left, e.left)),
                  e
                );
              }, eI(t, l, o));
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: eF,
          getElementRects: eW,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eD(e);
            return { width: t, height: n };
          },
          getScale: ek,
          isElement: ev,
          isRTL: function (e) {
            return "rtl" === eS(e).direction;
          },
        };
      function eH(e, t, n, r) {
        let o;
        void 0 === r && (r = {});
        let {
            ancestorScroll: i = !0,
            ancestorResize: l = !0,
            elementResize: a = "function" == typeof ResizeObserver,
            layoutShift: u = "function" == typeof IntersectionObserver,
            animationFrame: c = !1,
          } = r,
          s = eO(e),
          d = i || l ? [...(s ? eR(s) : []), ...eR(t)] : [];
        d.forEach((e) => {
          i && e.addEventListener("scroll", n, { passive: !0 }),
            l && e.addEventListener("resize", n);
        });
        let f =
            s && u
              ? (function (e, t) {
                  let n,
                    r = null,
                    o = ep(e);
                  function i() {
                    var e;
                    clearTimeout(n),
                      null == (e = r) || e.disconnect(),
                      (r = null);
                  }
                  return (
                    !(function l(a, u) {
                      void 0 === a && (a = !1), void 0 === u && (u = 1), i();
                      let {
                        left: c,
                        top: s,
                        width: d,
                        height: f,
                      } = e.getBoundingClientRect();
                      if ((a || t(), !d || !f)) return;
                      let p = $(s),
                        m = $(o.clientWidth - (c + d)),
                        v = {
                          rootMargin:
                            -p +
                            "px " +
                            -m +
                            "px " +
                            -$(o.clientHeight - (s + f)) +
                            "px " +
                            -$(c) +
                            "px",
                          threshold: z(0, B(1, u)) || 1,
                        },
                        h = !0;
                      function g(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== u) {
                          if (!h) return l();
                          t
                            ? l(!1, t)
                            : (n = setTimeout(() => {
                                l(!1, 1e-7);
                              }, 1e3));
                        }
                        h = !1;
                      }
                      try {
                        r = new IntersectionObserver(g, {
                          ...v,
                          root: o.ownerDocument,
                        });
                      } catch (e) {
                        r = new IntersectionObserver(g, v);
                      }
                      r.observe(e);
                    })(!0),
                    i
                  );
                })(s, n)
              : null,
          p = -1,
          m = null;
        a &&
          ((m = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === s &&
              m &&
              (m.unobserve(t),
              cancelAnimationFrame(p),
              (p = requestAnimationFrame(() => {
                var e;
                null == (e = m) || e.observe(t);
              }))),
              n();
          })),
          s && !c && m.observe(s),
          m.observe(t));
        let v = c ? eA(e) : null;
        return (
          c &&
            (function t() {
              let r = eA(e);
              v &&
                (r.x !== v.x ||
                  r.y !== v.y ||
                  r.width !== v.width ||
                  r.height !== v.height) &&
                n(),
                (v = r),
                (o = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            d.forEach((e) => {
              i && e.removeEventListener("scroll", n),
                l && e.removeEventListener("resize", n);
            }),
              null == f || f(),
              null == (e = m) || e.disconnect(),
              (m = null),
              c && cancelAnimationFrame(o);
          }
        );
      }
      let eB = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: l,
                elements: a,
                middlewareData: u,
              } = t,
              { element: c, padding: s = 0 } = X(e, t) || {};
            if (null == c) return {};
            let d = er(s),
              f = { x: n, y: r },
              p = G(ee(o)),
              m = Q(p),
              v = await l.getDimensions(c),
              h = "y" === p,
              g = h ? "clientHeight" : "clientWidth",
              y = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
              w = f[p] - i.reference[p],
              b = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(c)),
              E = b ? b[g] : 0;
            (E && (await (null == l.isElement ? void 0 : l.isElement(b)))) ||
              (E = a.floating[g] || i.floating[m]);
            let x = E / 2 - v[m] / 2 - 1,
              S = B(d[h ? "top" : "left"], x),
              C = B(d[h ? "bottom" : "right"], x),
              T = E - v[m] - C,
              R = E / 2 - v[m] / 2 + (y / 2 - w / 2),
              P = z(S, B(R, T)),
              D =
                !u.arrow &&
                null != J(o) &&
                R !== P &&
                i.reference[m] / 2 - (R < S ? S : C) - v[m] / 2 < 0,
              O = D ? (R < S ? R - S : R - T) : 0;
            return {
              [p]: f[p] + O,
              data: {
                [p]: P,
                centerOffset: R - P - O,
                ...(D && { alignmentOffset: O }),
              },
              reset: D,
            };
          },
        }),
        ez = (e, t, n) => {
          let r = new Map(),
            o = { platform: eV, ...n },
            i = { ...o.platform, _c: r };
          return el(e, t, { ...o, platform: i });
        };
      var eK = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
      function e$(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!e$(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !e$(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eU(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eq(e, t) {
        let n = eU(e);
        return Math.round(t * n) / n;
      }
      function eY(e) {
        let t = l.useRef(e);
        return (
          eK(() => {
            t.current = e;
          }),
          t
        );
      }
      let eX = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eB({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? eB({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        eZ = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: i, placement: l, middlewareData: a } = e,
                  u = await es(e, n);
                return l === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } };
              },
            }),
            options: [e, t],
          };
        },
        eJ = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: i = !0,
                    crossAxis: l = !1,
                    limiter: a = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...u
                  } = X(n, e),
                  c = { x: t, y: r },
                  s = await ea(e, u),
                  d = ee(Z(o)),
                  f = G(d),
                  p = c[f],
                  m = c[d];
                if (i) {
                  let e = "y" === f ? "top" : "left",
                    t = "y" === f ? "bottom" : "right",
                    n = p + s[e],
                    r = p - s[t];
                  p = z(n, B(p, r));
                }
                if (l) {
                  let e = "y" === d ? "top" : "left",
                    t = "y" === d ? "bottom" : "right",
                    n = m + s[e],
                    r = m - s[t];
                  m = z(n, B(m, r));
                }
                let v = a.fn({ ...e, [f]: p, [d]: m });
                return { ...v, data: { x: v.x - t, y: v.y - r } };
              },
            }),
            options: [e, t],
          };
        },
        eG = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: l,
                  } = e,
                  {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: c = !0,
                  } = X(n, e),
                  s = { x: t, y: r },
                  d = ee(o),
                  f = G(d),
                  p = s[f],
                  m = s[d],
                  v = X(a, e),
                  h =
                    "number" == typeof v
                      ? { mainAxis: v, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...v };
                if (u) {
                  let e = "y" === f ? "height" : "width",
                    t = i.reference[f] - i.floating[e] + h.mainAxis,
                    n = i.reference[f] + i.reference[e] - h.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (c) {
                  var g, y;
                  let e = "y" === f ? "width" : "height",
                    t = ["top", "left"].includes(Z(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (g = l.offset) ? void 0 : g[d])) || 0) +
                      (t ? 0 : h.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) -
                      (t ? h.crossAxis : 0);
                  m < n ? (m = n) : m > r && (m = r);
                }
                return { [f]: p, [d]: m };
              },
            }),
            options: [e, t],
          };
        },
        eQ = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, i, l;
                let {
                    placement: a,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: s,
                    platform: d,
                    elements: f,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: h = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: y = !0,
                    ...w
                  } = X(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let b = Z(a),
                  E = ee(s),
                  x = Z(s) === s,
                  S = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                  C =
                    v ||
                    (x || !y
                      ? [en(s)]
                      : (function (e) {
                          let t = en(e);
                          return [et(e), t, et(t)];
                        })(s)),
                  T = "none" !== g;
                !v &&
                  T &&
                  C.push(
                    ...(function (e, t, n, r) {
                      let o = J(e),
                        i = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? o : r;
                              return t ? r : o;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(Z(e), "start" === n, r);
                      return (
                        o &&
                          ((i = i.map((e) => e + "-" + o)),
                          t && (i = i.concat(i.map(et)))),
                        i
                      );
                    })(s, y, g, S)
                  );
                let R = [s, ...C],
                  P = await ea(e, w),
                  D = [],
                  O = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((p && D.push(P[b]), m)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = J(e),
                      o = G(ee(e)),
                      i = Q(o),
                      l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[i] > t.floating[i] && (l = en(l)), [l, en(l)]
                    );
                  })(a, c, S);
                  D.push(P[e[0]], P[e[1]]);
                }
                if (
                  ((O = [...O, { placement: a, overflows: D }]),
                  !D.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = R[e];
                  if (t)
                    return {
                      data: { index: e, overflows: O },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (i = O.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (h) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = O.filter((e) => {
                            if (T) {
                              let t = ee(e.placement);
                              return t === E || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = s;
                    }
                  if (a !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        e0 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                let t, r;
                let { placement: o, rects: i, platform: l, elements: a } = e,
                  { apply: u = () => {}, ...c } = X(n, e),
                  s = await ea(e, c),
                  d = Z(o),
                  f = J(o),
                  p = "y" === ee(o),
                  { width: m, height: v } = i.floating;
                "top" === d || "bottom" === d
                  ? ((t = d),
                    (r =
                      f ===
                      ((await (null == l.isRTL ? void 0 : l.isRTL(a.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((r = d), (t = "end" === f ? "top" : "bottom"));
                let h = v - s.top - s.bottom,
                  g = m - s.left - s.right,
                  y = B(v - s[t], h),
                  w = B(m - s[r], g),
                  b = !e.middlewareData.shift,
                  E = y,
                  x = w;
                if (
                  (p ? (x = f || b ? B(w, g) : g) : (E = f || b ? B(y, h) : h),
                  b && !f)
                ) {
                  let e = z(s.left, 0),
                    t = z(s.right, 0),
                    n = z(s.top, 0),
                    r = z(s.bottom, 0);
                  p
                    ? (x =
                        m -
                        2 * (0 !== e || 0 !== t ? e + t : z(s.left, s.right)))
                    : (E =
                        v -
                        2 * (0 !== n || 0 !== r ? n + r : z(s.top, s.bottom)));
                }
                await u({ ...e, availableWidth: x, availableHeight: E });
                let S = await l.getDimensions(a.floating);
                return m !== S.width || v !== S.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        e1 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = X(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = eu(
                      await ea(e, { ...o, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: ec(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = eu(
                      await ea(e, { ...o, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: ec(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        e2 = (e, t) => ({ ...eX(e), options: [e, t] }),
        e8 = (0, l.forwardRef)((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...a } = e;
          return (0, l.createElement)(
            w.svg,
            i({}, a, {
              ref: t,
              width: r,
              height: o,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            e.asChild
              ? n
              : (0, l.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        e3 = "Popper",
        [e5, e6] = d(e3),
        [e7, e4] = e5(e3),
        e9 = (0, l.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            a = e4("PopperAnchor", n),
            u = (0, l.useRef)(null),
            c = p(t, u);
          return (
            (0, l.useEffect)(() => {
              a.onAnchorChange((null == r ? void 0 : r.current) || u.current);
            }),
            r ? null : (0, l.createElement)(w.div, i({}, o, { ref: c }))
          );
        }),
        te = "PopperContent",
        [tt, tn] = e5(te),
        tr = (0, l.forwardRef)((e, t) => {
          var n, r, o, a, c, s, d, f;
          let {
              __scopePopper: m,
              side: v = "bottom",
              sideOffset: h = 0,
              align: g = "center",
              alignOffset: y = 0,
              arrowPadding: E = 0,
              collisionBoundary: x = [],
              collisionPadding: S = 0,
              sticky: C = "partial",
              hideWhenDetached: T = !1,
              avoidCollisions: R = !0,
              onPlaced: P,
              ...D
            } = e,
            O = e4(te, m),
            [k, L] = (0, l.useState)(null),
            M = p(t, (e) => L(e)),
            [A, _] = (0, l.useState)(null),
            I = (function (e) {
              let [t, n] = (0, l.useState)(void 0);
              return (
                j(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(A),
            N =
              null !== (n = null == I ? void 0 : I.width) && void 0 !== n
                ? n
                : 0,
            F =
              null !== (r = null == I ? void 0 : I.height) && void 0 !== r
                ? r
                : 0,
            W =
              "number" == typeof S
                ? S
                : { top: 0, right: 0, bottom: 0, left: 0, ...S },
            V = Array.isArray(x) ? x : [x],
            H = V.length > 0,
            B = { padding: W, boundary: V.filter(ti), altBoundary: H },
            {
              refs: z,
              floatingStyles: K,
              placement: $,
              isPositioned: U,
              middlewareData: q,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: o,
                  elements: { reference: i, floating: a } = {},
                  transform: c = !0,
                  whileElementsMounted: s,
                  open: d,
                } = e,
                [f, p] = l.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [m, v] = l.useState(r);
              e$(m, r) || v(r);
              let [h, g] = l.useState(null),
                [y, w] = l.useState(null),
                b = l.useCallback((e) => {
                  e !== C.current && ((C.current = e), g(e));
                }, []),
                E = l.useCallback((e) => {
                  e !== T.current && ((T.current = e), w(e));
                }, []),
                x = i || h,
                S = a || y,
                C = l.useRef(null),
                T = l.useRef(null),
                R = l.useRef(f),
                P = null != s,
                D = eY(s),
                O = eY(o),
                k = l.useCallback(() => {
                  if (!C.current || !T.current) return;
                  let e = { placement: t, strategy: n, middleware: m };
                  O.current && (e.platform = O.current),
                    ez(C.current, T.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      L.current &&
                        !e$(R.current, t) &&
                        ((R.current = t),
                        u.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [m, t, n, O]);
              eK(() => {
                !1 === d &&
                  R.current.isPositioned &&
                  ((R.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let L = l.useRef(!1);
              eK(
                () => (
                  (L.current = !0),
                  () => {
                    L.current = !1;
                  }
                ),
                []
              ),
                eK(() => {
                  if ((x && (C.current = x), S && (T.current = S), x && S)) {
                    if (D.current) return D.current(x, S, k);
                    k();
                  }
                }, [x, S, k, D, P]);
              let M = l.useMemo(
                  () => ({
                    reference: C,
                    floating: T,
                    setReference: b,
                    setFloating: E,
                  }),
                  [b, E]
                ),
                A = l.useMemo(() => ({ reference: x, floating: S }), [x, S]),
                _ = l.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!A.floating) return e;
                  let t = eq(A.floating, f.x),
                    r = eq(A.floating, f.y);
                  return c
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eU(A.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, c, A.floating, f.x, f.y]);
              return l.useMemo(
                () => ({
                  ...f,
                  update: k,
                  refs: M,
                  elements: A,
                  floatingStyles: _,
                }),
                [f, k, M, A, _]
              );
            })({
              strategy: "fixed",
              placement: v + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: eH,
              elements: { reference: O.anchor },
              middleware: [
                eZ({ mainAxis: h + F, alignmentAxis: y }),
                R &&
                  eJ({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === C ? eG() : void 0,
                    ...B,
                  }),
                R && eQ({ ...B }),
                e0({
                  ...B,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      l = e.floating.style;
                    l.setProperty("--radix-popper-available-width", `${n}px`),
                      l.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      l.setProperty("--radix-popper-anchor-width", `${o}px`),
                      l.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                A && e2({ element: A, padding: E }),
                tl({ arrowWidth: N, arrowHeight: F }),
                T && e1({ strategy: "referenceHidden" }),
              ],
            }),
            [Y, X] = ta($),
            Z = b(P);
          j(() => {
            U && (null == Z || Z());
          }, [U, Z]);
          let J = null === (o = q.arrow) || void 0 === o ? void 0 : o.x,
            G = null === (a = q.arrow) || void 0 === a ? void 0 : a.y,
            Q =
              (null === (c = q.arrow) || void 0 === c
                ? void 0
                : c.centerOffset) !== 0,
            [ee, et] = (0, l.useState)();
          return (
            j(() => {
              k && et(window.getComputedStyle(k).zIndex);
            }, [k]),
            (0, l.createElement)(
              "div",
              {
                ref: z.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...K,
                  transform: U ? K.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: ee,
                  "--radix-popper-transform-origin": [
                    null === (s = q.transformOrigin) || void 0 === s
                      ? void 0
                      : s.x,
                    null === (d = q.transformOrigin) || void 0 === d
                      ? void 0
                      : d.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, l.createElement)(
                tt,
                {
                  scope: m,
                  placedSide: Y,
                  onArrowChange: _,
                  arrowX: J,
                  arrowY: G,
                  shouldHideArrow: Q,
                },
                (0, l.createElement)(
                  w.div,
                  i({ "data-side": Y, "data-align": X }, D, {
                    ref: M,
                    style: {
                      ...D.style,
                      animation: U ? void 0 : "none",
                      opacity:
                        null !== (f = q.hide) &&
                        void 0 !== f &&
                        f.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        to = { top: "bottom", right: "left", bottom: "top", left: "right" };
      function ti(e) {
        return null !== e;
      }
      let tl = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: u, middlewareData: c } = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, m] = ta(a),
            v = { start: "0%", center: "50%", end: "100%" }[m],
            h =
              (null !==
                (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              d / 2,
            g =
              (null !==
                (i = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = s ? v : `${h}px`), (w = `${-f}px`))
              : "top" === p
              ? ((y = s ? v : `${h}px`), (w = `${u.floating.height + f}px`))
              : "right" === p
              ? ((y = `${-f}px`), (w = s ? v : `${g}px`))
              : "left" === p &&
                ((y = `${u.floating.width + f}px`), (w = s ? v : `${g}px`)),
            { data: { x: y, y: w } }
          );
        },
      });
      function ta(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let tu = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = (0, l.useState)(null);
          return (0, l.createElement)(
            e7,
            { scope: t, anchor: r, onAnchorChange: o },
            n
          );
        },
        tc = (0, l.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
            ...o
          } = e;
          return r
            ? u.createPortal(
                (0, l.createElement)(w.div, i({}, o, { ref: t })),
                r
              )
            : null;
        });
      function ts({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [r, o] = (function ({ defaultProp: e, onChange: t }) {
            let n = (0, l.useState)(e),
              [r] = n,
              o = (0, l.useRef)(r),
              i = b(t);
            return (
              (0, l.useEffect)(() => {
                o.current !== r && (i(r), (o.current = r));
              }, [r, o, i]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          i = void 0 !== e,
          a = i ? e : r,
          u = b(n);
        return [
          a,
          (0, l.useCallback)(
            (t) => {
              if (i) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && u(n);
              } else o(t);
            },
            [i, e, o, u]
          ),
        ];
      }
      let td = (0, l.forwardRef)((e, t) =>
        (0, l.createElement)(
          w.span,
          i({}, e, {
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        )
      );
      var tf = n(8369),
        tp = n(1735),
        tm = n(1823),
        tv = n(8215),
        th = (0, n(5411)._)(),
        tg = function () {},
        ty = l.forwardRef(function (e, t) {
          var n = l.useRef(null),
            r = l.useState({
              onScrollCapture: tg,
              onWheelCapture: tg,
              onTouchMoveCapture: tg,
            }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            u = e.children,
            c = e.className,
            s = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noIsolation,
            v = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = (0, tp._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            w = (0, tv.q)([n, t]),
            b = (0, tp.pi)((0, tp.pi)({}, y), o);
          return l.createElement(
            l.Fragment,
            null,
            d &&
              l.createElement(p, {
                sideCar: th,
                removeScrollBar: s,
                shards: f,
                noIsolation: m,
                inert: v,
                setCallbacks: i,
                allowPinchZoom: !!h,
                lockRef: n,
              }),
            a
              ? l.cloneElement(
                  l.Children.only(u),
                  (0, tp.pi)((0, tp.pi)({}, b), { ref: w })
                )
              : l.createElement(
                  void 0 === g ? "div" : g,
                  (0, tp.pi)({}, b, { className: c, ref: w }),
                  u
                )
          );
        });
      (ty.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (ty.classNames = { fullWidth: tm.zi, zeroRight: tm.pF });
      var tw = n(8776),
        tb = n(5973),
        tE = n(8039),
        tx = !1;
      if ("undefined" != typeof window)
        try {
          var tS = Object.defineProperty({}, "passive", {
            get: function () {
              return (tx = !0), !0;
            },
          });
          window.addEventListener("test", tS, tS),
            window.removeEventListener("test", tS, tS);
        } catch (e) {
          tx = !1;
        }
      var tC = !!tx && { passive: !1 },
        tT = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        tR = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              tP(e, n))
            ) {
              var r = tD(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        tP = function (e, t) {
          return "v" === e ? tT(t, "overflowY") : tT(t, "overflowX");
        },
        tD = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        tO = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var m = tD(e, u),
              v = m[0],
              h = m[1] - m[2] - l * v;
            (v || h) && tP(e, u) && ((f += h), (p += v)), (u = u.parentNode);
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 0 === f) || (!o && a > f))
              ? (s = !0)
              : !d && ((o && 0 === p) || (!o && -a > p)) && (s = !0),
            s
          );
        },
        tk = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        tL = function (e) {
          return [e.deltaX, e.deltaY];
        },
        tM = function (e) {
          return e && "current" in e ? e.current : e;
        },
        tA = 0,
        t_ = [],
        tI = (0, tw.L)(th, function (e) {
          var t = l.useRef([]),
            n = l.useRef([0, 0]),
            r = l.useRef(),
            o = l.useState(tA++)[0],
            i = l.useState(function () {
              return (0, tE.Ws)();
            })[0],
            a = l.useRef(e);
          l.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            l.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, tp.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(tM),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = l.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !a.current.allowPinchZoom;
              var o,
                i = tk(e),
                l = n.current,
                u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                c = "deltaY" in e ? e.deltaY : l[1] - i[1],
                s = e.target,
                d = Math.abs(u) > Math.abs(c) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = tR(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = tR(d, s))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || c) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return tO(p, t, e, "h" === p ? u : c, !0);
            }, []),
            c = l.useCallback(function (e) {
              if (t_.length && t_[t_.length - 1] === i) {
                var n = "deltaY" in e ? tL(e) : tk(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      t.target === e.target &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(tM)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = l.useCallback(function (e, n, r, o) {
              var i = { name: e, delta: n, target: r, should: o };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = l.useCallback(function (e) {
              (n.current = tk(e)), (r.current = void 0);
            }, []),
            f = l.useCallback(function (t) {
              s(t.type, tL(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = l.useCallback(function (t) {
              s(t.type, tk(t), t.target, u(t, e.lockRef.current));
            }, []);
          l.useEffect(function () {
            return (
              t_.push(i),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", c, tC),
              document.addEventListener("touchmove", c, tC),
              document.addEventListener("touchstart", d, tC),
              function () {
                (t_ = t_.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", c, tC),
                  document.removeEventListener("touchmove", c, tC),
                  document.removeEventListener("touchstart", d, tC);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            v = e.inert;
          return l.createElement(
            l.Fragment,
            null,
            v
              ? l.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            m ? l.createElement(tb.jp, { gapMode: "margin" }) : null
          );
        }),
        tN = l.forwardRef(function (e, t) {
          return l.createElement(
            ty,
            (0, tp.pi)({}, e, { ref: t, sideCar: tI })
          );
        });
      tN.classNames = ty.classNames;
      let tj = [" ", "Enter", "ArrowUp", "ArrowDown"],
        tF = [" ", "Enter"],
        tW = "Select",
        [tV, tH, tB] = (function (e) {
          let t = e + "CollectionProvider",
            [n, r] = d(t),
            [o, i] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            a = e + "CollectionSlot",
            u = l.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = p(t, i(a, n).collectionRef);
              return l.createElement(m, { ref: o }, r);
            }),
            c = e + "CollectionItemSlot",
            s = "data-radix-collection-item";
          return [
            {
              Provider: (e) => {
                let { scope: t, children: n } = e,
                  r = l.useRef(null),
                  i = l.useRef(new Map()).current;
                return l.createElement(
                  o,
                  { scope: t, itemMap: i, collectionRef: r },
                  n
                );
              },
              Slot: u,
              ItemSlot: l.forwardRef((e, t) => {
                let { scope: n, children: r, ...o } = e,
                  a = l.useRef(null),
                  u = p(t, a),
                  d = i(c, n);
                return (
                  l.useEffect(
                    () => (
                      d.itemMap.set(a, { ref: a, ...o }),
                      () => void d.itemMap.delete(a)
                    )
                  ),
                  l.createElement(m, { [s]: "", ref: u }, r)
                );
              }),
            },
            function (t) {
              let n = i(e + "CollectionConsumer", t);
              return l.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${s}]`));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r,
          ];
        })(tW),
        [tz, tK] = d(tW, [tB, e6]),
        t$ = e6(),
        [tU, tq] = tz(tW),
        [tY, tX] = tz(tW),
        tZ = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...o } = e,
            a = t$(n),
            u = tq("SelectTrigger", n),
            c = u.disabled || r,
            d = p(t, u.onTriggerChange),
            f = tH(n),
            [m, v, h] = np((e) => {
              let t = f().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = nm(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            g = () => {
              c || (u.onOpenChange(!0), h());
            };
          return (0, l.createElement)(
            e9,
            i({ asChild: !0 }, a),
            (0, l.createElement)(
              w.button,
              i(
                {
                  type: "button",
                  role: "combobox",
                  "aria-controls": u.contentId,
                  "aria-expanded": u.open,
                  "aria-required": u.required,
                  "aria-autocomplete": "none",
                  dir: u.dir,
                  "data-state": u.open ? "open" : "closed",
                  disabled: c,
                  "data-disabled": c ? "" : void 0,
                  "data-placeholder": void 0 === u.value ? "" : void 0,
                },
                o,
                {
                  ref: d,
                  onClick: s(o.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: s(o.onPointerDown, (e) => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (g(),
                        (u.triggerPointerDownPosRef.current = {
                          x: Math.round(e.pageX),
                          y: Math.round(e.pageY),
                        }),
                        e.preventDefault());
                  }),
                  onKeyDown: s(o.onKeyDown, (e) => {
                    let t = "" !== m.current;
                    e.ctrlKey ||
                      e.altKey ||
                      e.metaKey ||
                      1 !== e.key.length ||
                      v(e.key),
                      (!t || " " !== e.key) &&
                        tj.includes(e.key) &&
                        (g(), e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        tJ = (0, l.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: a,
              placeholder: u,
              ...c
            } = e,
            s = tq("SelectValue", n),
            { onValueNodeHasChildrenChange: d } = s,
            f = void 0 !== a,
            m = p(t, s.onValueNodeChange);
          return (
            j(() => {
              d(f);
            }, [d, f]),
            (0, l.createElement)(
              w.span,
              i({}, c, { ref: m, style: { pointerEvents: "none" } }),
              void 0 === s.value && void 0 !== u ? u : a
            )
          );
        }),
        tG = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, children: r, ...o } = e;
          return (0, l.createElement)(
            w.span,
            i({ "aria-hidden": !0 }, o, { ref: t }),
            r || "▼"
          );
        }),
        tQ = "SelectContent",
        t0 = (0, l.forwardRef)((e, t) => {
          let n = tq(tQ, e.__scopeSelect),
            [r, o] = (0, l.useState)();
          return (j(() => {
            o(new DocumentFragment());
          }, []),
          n.open)
            ? (0, l.createElement)(t8, i({}, e, { ref: t }))
            : r
            ? (0, u.createPortal)(
                (0, l.createElement)(
                  t1,
                  { scope: e.__scopeSelect },
                  (0, l.createElement)(
                    tV.Slot,
                    { scope: e.__scopeSelect },
                    (0, l.createElement)("div", null, e.children)
                  )
                ),
                r
              )
            : null;
        }),
        [t1, t2] = tz(tQ),
        t8 = (0, l.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: o,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              side: c,
              sideOffset: d,
              align: f,
              alignOffset: v,
              arrowPadding: h,
              collisionBoundary: g,
              collisionPadding: y,
              sticky: w,
              hideWhenDetached: b,
              avoidCollisions: E,
              ...x
            } = e,
            C = tq(tQ, n),
            [T, D] = (0, l.useState)(null),
            [O, k] = (0, l.useState)(null),
            M = p(t, (e) => D(e)),
            [A, _] = (0, l.useState)(null),
            [I, N] = (0, l.useState)(null),
            j = tH(n),
            [F, W] = (0, l.useState)(!1),
            V = (0, l.useRef)(!1);
          (0, l.useEffect)(() => {
            if (T) return (0, tf.Ry)(T);
          }, [T]),
            (0, l.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : P()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : P()
                ),
                R++,
                () => {
                  1 === R &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    R--;
                }
              );
            }, []);
          let H = (0, l.useCallback)(
              (e) => {
                let [t, ...n] = j().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && O && (O.scrollTop = 0),
                    n === r && O && (O.scrollTop = O.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [j, O]
            ),
            B = (0, l.useCallback)(() => H([A, T]), [H, A, T]);
          (0, l.useEffect)(() => {
            F && B();
          }, [F, B]);
          let { onOpenChange: z, triggerPointerDownPosRef: K } = C;
          (0, l.useEffect)(() => {
            if (T) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, i;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (r = K.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (o =
                            null === (i = K.current) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== o
                          ? o
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : T.contains(n.target) || z(!1),
                    document.removeEventListener("pointermove", t),
                    (K.current = null);
                };
              return (
                null !== K.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [T, z, K]),
            (0, l.useEffect)(() => {
              let e = () => z(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [z]);
          let [$, U] = np((e) => {
              let t = j().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = nm(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            q = (0, l.useCallback)(
              (e, t, n) => {
                let r = !V.current && !n;
                ((void 0 !== C.value && C.value === t) || r) &&
                  (_(e), r && (V.current = !0));
              },
              [C.value]
            ),
            Y = (0, l.useCallback)(() => (null == T ? void 0 : T.focus()), [T]),
            X = (0, l.useCallback)(
              (e, t, n) => {
                let r = !V.current && !n;
                ((void 0 !== C.value && C.value === t) || r) && N(e);
              },
              [C.value]
            ),
            Z = "popper" === r ? t5 : t3;
          return (0, l.createElement)(
            t1,
            {
              scope: n,
              content: T,
              viewport: O,
              onViewportChange: k,
              itemRefCallback: q,
              selectedItem: A,
              onItemLeave: Y,
              itemTextRefCallback: X,
              focusSelectedItem: B,
              selectedItemText: I,
              position: r,
              isPositioned: F,
              searchRef: $,
            },
            (0, l.createElement)(
              tN,
              { as: m, allowPinchZoom: !0 },
              (0, l.createElement)(
                L,
                {
                  asChild: !0,
                  trapped: C.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: s(o, (e) => {
                    var t;
                    null === (t = C.trigger) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }),
                      e.preventDefault();
                  }),
                },
                (0, l.createElement)(
                  S,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: u,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => C.onOpenChange(!1),
                  },
                  (0, l.createElement)(
                    Z,
                    i(
                      {
                        role: "listbox",
                        id: C.contentId,
                        "data-state": C.open ? "open" : "closed",
                        dir: C.dir,
                        onContextMenu: (e) => e.preventDefault(),
                      },
                      x,
                      Z === t5
                        ? {
                            side: c,
                            sideOffset: d,
                            align: f,
                            alignOffset: v,
                            arrowPadding: h,
                            collisionBoundary: g,
                            collisionPadding: y,
                            sticky: w,
                            hideWhenDetached: b,
                            avoidCollisions: E,
                          }
                        : {},
                      {
                        onPlaced: () => W(!0),
                        ref: M,
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          outline: "none",
                          ...x.style,
                        },
                        onKeyDown: s(x.onKeyDown, (e) => {
                          let t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ("Tab" === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || U(e.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(
                              e.key
                            ))
                          ) {
                            let t = j()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            if (
                              (["ArrowUp", "End"].includes(e.key) &&
                                (t = t.slice().reverse()),
                              ["ArrowUp", "ArrowDown"].includes(e.key))
                            ) {
                              let n = e.target,
                                r = t.indexOf(n);
                              t = t.slice(r + 1);
                            }
                            setTimeout(() => H(t)), e.preventDefault();
                          }
                        }),
                      }
                    )
                  )
                )
              )
            )
          );
        }),
        t3 = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, onPlaced: r, ...o } = e,
            a = tq(tQ, n),
            u = t2(tQ, n),
            [s, d] = (0, l.useState)(null),
            [f, m] = (0, l.useState)(null),
            v = p(t, (e) => m(e)),
            h = tH(n),
            g = (0, l.useRef)(!1),
            y = (0, l.useRef)(!0),
            {
              viewport: b,
              selectedItem: E,
              selectedItemText: x,
              focusSelectedItem: S,
            } = u,
            C = (0, l.useCallback)(() => {
              if (a.trigger && a.valueNode && s && f && b && E && x) {
                let e = a.trigger.getBoundingClientRect(),
                  t = f.getBoundingClientRect(),
                  n = a.valueNode.getBoundingClientRect(),
                  o = x.getBoundingClientRect();
                if ("rtl" !== a.dir) {
                  let r = o.left - t.left,
                    i = n.left - r,
                    l = e.left - i,
                    a = e.width + l,
                    u = Math.max(a, t.width),
                    d = c(i, [10, window.innerWidth - 10 - u]);
                  (s.style.minWidth = a + "px"), (s.style.left = d + "px");
                } else {
                  let r = t.right - o.right,
                    i = window.innerWidth - n.right - r,
                    l = window.innerWidth - e.right - i,
                    a = e.width + l,
                    u = Math.max(a, t.width),
                    d = c(i, [10, window.innerWidth - 10 - u]);
                  (s.style.minWidth = a + "px"), (s.style.right = d + "px");
                }
                let i = h(),
                  l = window.innerHeight - 20,
                  u = b.scrollHeight,
                  d = window.getComputedStyle(f),
                  p = parseInt(d.borderTopWidth, 10),
                  m = parseInt(d.paddingTop, 10),
                  v = parseInt(d.borderBottomWidth, 10),
                  y = p + m + u + parseInt(d.paddingBottom, 10) + v,
                  w = Math.min(5 * E.offsetHeight, y),
                  S = window.getComputedStyle(b),
                  C = parseInt(S.paddingTop, 10),
                  T = parseInt(S.paddingBottom, 10),
                  R = e.top + e.height / 2 - 10,
                  P = E.offsetHeight / 2,
                  D = p + m + (E.offsetTop + P);
                if (D <= R) {
                  let e = E === i[i.length - 1].ref.current;
                  s.style.bottom = "0px";
                  let t = f.clientHeight - b.offsetTop - b.offsetHeight;
                  s.style.height =
                    D + Math.max(l - R, P + (e ? T : 0) + t + v) + "px";
                } else {
                  let e = E === i[0].ref.current;
                  s.style.top = "0px";
                  let t = Math.max(R, p + b.offsetTop + (e ? C : 0) + P);
                  (s.style.height = t + (y - D) + "px"),
                    (b.scrollTop = D - R + b.offsetTop);
                }
                (s.style.margin = "10px 0"),
                  (s.style.minHeight = w + "px"),
                  (s.style.maxHeight = l + "px"),
                  null == r || r(),
                  requestAnimationFrame(() => (g.current = !0));
              }
            }, [h, a.trigger, a.valueNode, s, f, b, E, x, a.dir, r]);
          j(() => C(), [C]);
          let [T, R] = (0, l.useState)();
          j(() => {
            f && R(window.getComputedStyle(f).zIndex);
          }, [f]);
          let P = (0, l.useCallback)(
            (e) => {
              e &&
                !0 === y.current &&
                (C(), null == S || S(), (y.current = !1));
            },
            [C, S]
          );
          return (0, l.createElement)(
            t6,
            {
              scope: n,
              contentWrapper: s,
              shouldExpandOnScrollRef: g,
              onScrollButtonChange: P,
            },
            (0, l.createElement)(
              "div",
              {
                ref: d,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  zIndex: T,
                },
              },
              (0, l.createElement)(
                w.div,
                i({}, o, {
                  ref: v,
                  style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style,
                  },
                })
              )
            )
          );
        }),
        t5 = (0, l.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              align: r = "start",
              collisionPadding: o = 10,
              ...a
            } = e,
            u = t$(n);
          return (0, l.createElement)(
            tr,
            i({}, u, a, {
              ref: t,
              align: r,
              collisionPadding: o,
              style: {
                boxSizing: "border-box",
                ...a.style,
                "--radix-select-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-select-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-select-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        [t6, t7] = tz(tQ, {}),
        t4 = "SelectViewport",
        t9 = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = t2(t4, n),
            a = t7(t4, n),
            u = p(t, o.onViewportChange),
            c = (0, l.useRef)(0);
          return (0, l.createElement)(
            l.Fragment,
            null,
            (0, l.createElement)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
              },
            }),
            (0, l.createElement)(
              tV.Slot,
              { scope: n },
              (0, l.createElement)(
                w.div,
                i(
                  { "data-radix-select-viewport": "", role: "presentation" },
                  r,
                  {
                    ref: u,
                    style: {
                      position: "relative",
                      flex: 1,
                      overflow: "auto",
                      ...r.style,
                    },
                    onScroll: s(r.onScroll, (e) => {
                      let t = e.currentTarget,
                        { contentWrapper: n, shouldExpandOnScrollRef: r } = a;
                      if (null != r && r.current && n) {
                        let e = Math.abs(c.current - t.scrollTop);
                        if (e > 0) {
                          let r = window.innerHeight - 20,
                            o = Math.max(
                              parseFloat(n.style.minHeight),
                              parseFloat(n.style.height)
                            );
                          if (o < r) {
                            let i = o + e,
                              l = Math.min(r, i),
                              a = i - l;
                            (n.style.height = l + "px"),
                              "0px" === n.style.bottom &&
                                ((t.scrollTop = a > 0 ? a : 0),
                                (n.style.justifyContent = "flex-end"));
                          }
                        }
                      }
                      c.current = t.scrollTop;
                    }),
                  }
                )
              )
            )
          );
        }),
        [ne, nt] = tz("SelectGroup"),
        nn = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = V();
          return (0, l.createElement)(
            ne,
            { scope: n, id: o },
            (0, l.createElement)(
              w.div,
              i({ role: "group", "aria-labelledby": o }, r, { ref: t })
            )
          );
        }),
        nr = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = nt("SelectLabel", n);
          return (0, l.createElement)(w.div, i({ id: o.id }, r, { ref: t }));
        }),
        no = "SelectItem",
        [ni, nl] = tz(no),
        na = (0, l.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: o = !1,
              textValue: a,
              ...u
            } = e,
            c = tq(no, n),
            d = t2(no, n),
            f = c.value === r,
            [m, v] = (0, l.useState)(null != a ? a : ""),
            [h, g] = (0, l.useState)(!1),
            y = p(t, (e) => {
              var t;
              return null === (t = d.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(d, e, r, o);
            }),
            b = V(),
            E = () => {
              o || (c.onValueChange(r), c.onOpenChange(!1));
            };
          return (0, l.createElement)(
            ni,
            {
              scope: n,
              value: r,
              disabled: o,
              textId: b,
              isSelected: f,
              onItemTextChange: (0, l.useCallback)((e) => {
                v((t) => {
                  var n;
                  return (
                    t ||
                    (null !== (n = null == e ? void 0 : e.textContent) &&
                    void 0 !== n
                      ? n
                      : ""
                    ).trim()
                  );
                });
              }, []),
            },
            (0, l.createElement)(
              tV.ItemSlot,
              { scope: n, value: r, disabled: o, textValue: m },
              (0, l.createElement)(
                w.div,
                i(
                  {
                    role: "option",
                    "aria-labelledby": b,
                    "data-highlighted": h ? "" : void 0,
                    "aria-selected": f && h,
                    "data-state": f ? "checked" : "unchecked",
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    tabIndex: o ? void 0 : -1,
                  },
                  u,
                  {
                    ref: y,
                    onFocus: s(u.onFocus, () => g(!0)),
                    onBlur: s(u.onBlur, () => g(!1)),
                    onPointerUp: s(u.onPointerUp, E),
                    onPointerMove: s(u.onPointerMove, (e) => {
                      if (o) {
                        var t;
                        null === (t = d.onItemLeave) ||
                          void 0 === t ||
                          t.call(d);
                      } else e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: s(u.onPointerLeave, (e) => {
                      if (e.currentTarget === document.activeElement) {
                        var t;
                        null === (t = d.onItemLeave) ||
                          void 0 === t ||
                          t.call(d);
                      }
                    }),
                    onKeyDown: s(u.onKeyDown, (e) => {
                      var t;
                      ((null === (t = d.searchRef) || void 0 === t
                        ? void 0
                        : t.current) !== "" &&
                        " " === e.key) ||
                        (tF.includes(e.key) && E(),
                        " " === e.key && e.preventDefault());
                    }),
                  }
                )
              )
            )
          );
        }),
        nu = "SelectItemText",
        nc = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, className: r, style: o, ...a } = e,
            c = tq(nu, n),
            s = t2(nu, n),
            d = nl(nu, n),
            f = tX(nu, n),
            [m, v] = (0, l.useState)(null),
            h = p(
              t,
              (e) => v(e),
              d.onItemTextChange,
              (e) => {
                var t;
                return null === (t = s.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(s, e, d.value, d.disabled);
              }
            ),
            g = null == m ? void 0 : m.textContent,
            y = (0, l.useMemo)(
              () =>
                (0, l.createElement)(
                  "option",
                  { key: d.value, value: d.value, disabled: d.disabled },
                  g
                ),
              [d.disabled, d.value, g]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: E } = f;
          return (
            j(() => (b(y), () => E(y)), [b, E, y]),
            (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(w.span, i({ id: d.textId }, a, { ref: h })),
              d.isSelected && c.valueNode && !c.valueNodeHasChildren
                ? (0, u.createPortal)(a.children, c.valueNode)
                : null
            )
          );
        }),
        ns = (0, l.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return nl("SelectItemIndicator", n).isSelected
            ? (0, l.createElement)(
                w.span,
                i({ "aria-hidden": !0 }, r, { ref: t })
              )
            : null;
        }),
        nd =
          ((e, t) => {
            let { __scopeSelect: n, onAutoScroll: r, ...o } = e,
              a = t2("SelectScrollButton", n),
              u = (0, l.useRef)(null),
              c = tH(n),
              d = (0, l.useCallback)(() => {
                null !== u.current &&
                  (window.clearInterval(u.current), (u.current = null));
              }, []);
            return (
              (0, l.useEffect)(() => () => d(), [d]),
              j(() => {
                var e;
                let t = c().find(
                  (e) => e.ref.current === document.activeElement
                );
                null == t ||
                  null === (e = t.ref.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ block: "nearest" });
              }, [c]),
              (0, l.createElement)(
                w.div,
                i({ "aria-hidden": !0 }, o, {
                  ref: t,
                  style: { flexShrink: 0, ...o.style },
                  onPointerDown: s(o.onPointerDown, () => {
                    null === u.current &&
                      (u.current = window.setInterval(r, 50));
                  }),
                  onPointerMove: s(o.onPointerMove, () => {
                    var e;
                    null === (e = a.onItemLeave) || void 0 === e || e.call(a),
                      null === u.current &&
                        (u.current = window.setInterval(r, 50));
                  }),
                  onPointerLeave: s(o.onPointerLeave, () => {
                    d();
                  }),
                })
              )
            );
          },
          (0, l.forwardRef)((e, t) => {
            let { __scopeSelect: n, ...r } = e;
            return (0, l.createElement)(
              w.div,
              i({ "aria-hidden": !0 }, r, { ref: t })
            );
          })),
        nf = (0, l.forwardRef)((e, t) => {
          let { value: n, ...r } = e,
            o = (0, l.useRef)(null),
            a = p(t, o),
            u = (function (e) {
              let t = (0, l.useRef)({ value: e, previous: e });
              return (0, l.useMemo)(
                () => (
                  t.current.value !== e &&
                    ((t.current.previous = t.current.value),
                    (t.current.value = e)),
                  t.current.previous
                ),
                [e]
              );
            })(n);
          return (
            (0, l.useEffect)(() => {
              let e = o.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLSelectElement.prototype,
                  "value"
                ).set;
              if (u !== n && t) {
                let r = new Event("change", { bubbles: !0 });
                t.call(e, n), e.dispatchEvent(r);
              }
            }, [u, n]),
            (0, l.createElement)(
              td,
              { asChild: !0 },
              (0, l.createElement)(
                "select",
                i({}, r, { ref: a, defaultValue: n })
              )
            )
          );
        });
      function np(e) {
        let t = b(e),
          n = (0, l.useRef)(""),
          r = (0, l.useRef)(0),
          o = (0, l.useCallback)(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          i = (0, l.useCallback)(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          (0, l.useEffect)(() => () => window.clearTimeout(r.current), []),
          [n, o, i]
        );
      }
      function nm(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (i = i.filter((e) => e !== n));
        let l = i.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return l !== n ? l : void 0;
      }
      nf.displayName = "BubbleSelect";
      let nv = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: i,
              value: a,
              defaultValue: u,
              onValueChange: c,
              dir: s,
              name: d,
              autoComplete: f,
              disabled: p,
              required: m,
            } = e,
            v = t$(t),
            [h, g] = (0, l.useState)(null),
            [w, b] = (0, l.useState)(null),
            [E, x] = (0, l.useState)(!1),
            S = (function (e) {
              let t = (0, l.useContext)(y);
              return e || t || "ltr";
            })(s),
            [C = !1, T] = ts({ prop: r, defaultProp: o, onChange: i }),
            [R, P] = ts({ prop: a, defaultProp: u, onChange: c }),
            D = (0, l.useRef)(null),
            O = !h || !!h.closest("form"),
            [k, L] = (0, l.useState)(new Set()),
            M = Array.from(k)
              .map((e) => e.props.value)
              .join(";");
          return (0, l.createElement)(
            tu,
            v,
            (0, l.createElement)(
              tU,
              {
                required: m,
                scope: t,
                trigger: h,
                onTriggerChange: g,
                valueNode: w,
                onValueNodeChange: b,
                valueNodeHasChildren: E,
                onValueNodeHasChildrenChange: x,
                contentId: V(),
                value: R,
                onValueChange: P,
                open: C,
                onOpenChange: T,
                dir: S,
                triggerPointerDownPosRef: D,
                disabled: p,
              },
              (0, l.createElement)(
                tV.Provider,
                { scope: t },
                (0, l.createElement)(
                  tY,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, l.useCallback)((e) => {
                      L((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, l.useCallback)((e) => {
                      L((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                  },
                  n
                )
              ),
              O
                ? (0, l.createElement)(
                    nf,
                    {
                      key: M,
                      "aria-hidden": !0,
                      required: m,
                      tabIndex: -1,
                      name: d,
                      autoComplete: f,
                      value: R,
                      onChange: (e) => P(e.target.value),
                      disabled: p,
                    },
                    void 0 === R
                      ? (0, l.createElement)("option", { value: "" })
                      : null,
                    Array.from(k)
                  )
                : null
            )
          );
        },
        nh = tZ,
        ng = tJ,
        ny = tG,
        nw = (e) => (0, l.createElement)(tc, i({ asChild: !0 }, e)),
        nb = t0,
        nE = t9,
        nx = nn,
        nS = nr,
        nC = na,
        nT = nc,
        nR = ns,
        nP = nd;
    },
    7634: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(2265),
        o = n(554),
        i = n(3791);
      let l =
          r.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          }),
        a = { dedupe: !0 };
      i.$l.defineProperty(i.J$, "defaultValue", { value: i.u_ });
      let u = (0, i.s6)((e, t, n) => {
          let {
              cache: u,
              compare: c,
              suspense: s,
              fallbackData: d,
              revalidateOnMount: f,
              revalidateIfStale: p,
              refreshInterval: m,
              refreshWhenHidden: v,
              refreshWhenOffline: h,
              keepPreviousData: g,
            } = n,
            [y, w, b, E] = i.DY.get(u),
            [x, S] = (0, i.qC)(e),
            C = (0, r.useRef)(!1),
            T = (0, r.useRef)(!1),
            R = (0, r.useRef)(x),
            P = (0, r.useRef)(t),
            D = (0, r.useRef)(n),
            O = () => D.current,
            k = () => O().isVisible() && O().isOnline(),
            [L, M, A, _] = (0, i.JN)(u, x),
            I = (0, r.useRef)({}).current,
            N = (0, i.o8)(d) ? n.fallback[x] : d,
            j = (e, t) => {
              for (let n in I)
                if ("data" === n) {
                  if (!c(e[n], t[n]) && (!(0, i.o8)(e[n]) || !c(U, t[n])))
                    return !1;
                } else if (t[n] !== e[n]) return !1;
              return !0;
            },
            F = (0, r.useMemo)(() => {
              let e =
                  !!x &&
                  !!t &&
                  ((0, i.o8)(f)
                    ? !O().isPaused() && !s && (!!(0, i.o8)(p) || p)
                    : f),
                n = (t) => {
                  let n = (0, i.PM)(t);
                  return (delete n._k, e)
                    ? { isValidating: !0, isLoading: !0, ...n }
                    : n;
                },
                r = L(),
                o = _(),
                l = n(r),
                a = r === o ? l : n(o),
                u = l;
              return [
                () => {
                  let e = n(L());
                  return j(e, u)
                    ? ((u.data = e.data),
                      (u.isLoading = e.isLoading),
                      (u.isValidating = e.isValidating),
                      (u.error = e.error),
                      u)
                    : ((u = e), e);
                },
                () => a,
              ];
            }, [u, x]),
            W = (0, o.useSyncExternalStore)(
              (0, r.useCallback)(
                (e) =>
                  A(x, (t, n) => {
                    j(n, t) || e();
                  }),
                [u, x]
              ),
              F[0],
              F[1]
            ),
            V = !C.current,
            H = y[x] && y[x].length > 0,
            B = W.data,
            z = (0, i.o8)(B) ? N : B,
            K = W.error,
            $ = (0, r.useRef)(z),
            U = g ? ((0, i.o8)(B) ? $.current : B) : z,
            q =
              (!H || !!(0, i.o8)(K)) &&
              (V && !(0, i.o8)(f)
                ? f
                : !O().isPaused() &&
                  (s ? !(0, i.o8)(z) && p : (0, i.o8)(z) || p)),
            Y = !!(x && t && V && q),
            X = (0, i.o8)(W.isValidating) ? Y : W.isValidating,
            Z = (0, i.o8)(W.isLoading) ? Y : W.isLoading,
            J = (0, r.useCallback)(
              async (e) => {
                let t, r;
                let o = P.current;
                if (!x || !o || T.current || O().isPaused()) return !1;
                let l = !0,
                  a = e || {},
                  u = !b[x] || !a.dedupe,
                  s = () =>
                    i.w6
                      ? !T.current && x === R.current && C.current
                      : x === R.current,
                  d = { isValidating: !1, isLoading: !1 },
                  f = () => {
                    M(d);
                  },
                  p = () => {
                    let e = b[x];
                    e && e[1] === r && delete b[x];
                  },
                  m = { isValidating: !0 };
                (0, i.o8)(L().data) && (m.isLoading = !0);
                try {
                  if (
                    (u &&
                      (M(m),
                      n.loadingTimeout &&
                        (0, i.o8)(L().data) &&
                        setTimeout(() => {
                          l && s() && O().onLoadingSlow(x, n);
                        }, n.loadingTimeout),
                      (b[x] = [o(S), (0, i.u3)()])),
                    ([t, r] = b[x]),
                    (t = await t),
                    u && setTimeout(p, n.dedupingInterval),
                    !b[x] || b[x][1] !== r)
                  )
                    return u && s() && O().onDiscarded(x), !1;
                  d.error = i.i_;
                  let e = w[x];
                  if (!(0, i.o8)(e) && (r <= e[0] || r <= e[1] || 0 === e[1]))
                    return f(), u && s() && O().onDiscarded(x), !1;
                  let a = L().data;
                  (d.data = c(a, t) ? a : t),
                    u && s() && O().onSuccess(t, x, n);
                } catch (n) {
                  p();
                  let e = O(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((d.error = n),
                    u &&
                      s() &&
                      (e.onError(n, x, e),
                      (!0 === t || ((0, i.mf)(t) && t(n))) &&
                        (!O().revalidateOnFocus ||
                          !O().revalidateOnReconnect ||
                          k()) &&
                        e.onErrorRetry(
                          n,
                          x,
                          e,
                          (e) => {
                            let t = y[x];
                            t && t[0] && t[0](i.sj.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (a.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (l = !1), f(), !0;
              },
              [x, u]
            ),
            G = (0, r.useCallback)((...e) => (0, i.BN)(u, R.current, ...e), []);
          if (
            ((0, i.LI)(() => {
              (P.current = t), (D.current = n), (0, i.o8)(B) || ($.current = B);
            }),
            (0, i.LI)(() => {
              if (!x) return;
              let e = J.bind(i.i_, a),
                t = 0,
                n = (0, i.ko)(x, y, (n, r = {}) => {
                  if (n == i.sj.FOCUS_EVENT) {
                    let n = Date.now();
                    O().revalidateOnFocus &&
                      n > t &&
                      k() &&
                      ((t = n + O().focusThrottleInterval), e());
                  } else if (n == i.sj.RECONNECT_EVENT)
                    O().revalidateOnReconnect && k() && e();
                  else if (n == i.sj.MUTATE_EVENT) return J();
                  else if (n == i.sj.ERROR_REVALIDATE_EVENT) return J(r);
                });
              return (
                (T.current = !1),
                (R.current = x),
                (C.current = !0),
                M({ _k: S }),
                q && ((0, i.o8)(z) || i.W6 ? e() : (0, i.kw)(e)),
                () => {
                  (T.current = !0), n();
                }
              );
            }, [x]),
            (0, i.LI)(() => {
              let e;
              function t() {
                let t = (0, i.mf)(m) ? m(L().data) : m;
                t && -1 !== e && (e = setTimeout(n, t));
              }
              function n() {
                !L().error && (v || O().isVisible()) && (h || O().isOnline())
                  ? J(a).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [m, v, h, x]),
            (0, r.useDebugValue)(U),
            s && (0, i.o8)(z) && x)
          ) {
            if (!i.w6 && i.W6)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            (P.current = t), (D.current = n), (T.current = !1);
            let e = E[x];
            if (((0, i.o8)(e) || l(G(e)), (0, i.o8)(K))) {
              let e = J(a);
              (0, i.o8)(U) || ((e.status = "fulfilled"), (e.value = !0)), l(e);
            } else throw K;
          }
          return {
            mutate: G,
            get data() {
              return (I.data = !0), U;
            },
            get error() {
              return (I.error = !0), K;
            },
            get isValidating() {
              return (I.isValidating = !0), X;
            },
            get isLoading() {
              return (I.isLoading = !0), Z;
            },
          };
        }),
        c = i.w6
          ? (e) => {
              e();
            }
          : r.startTransition,
        s = (e) => {
          let [, t] = (0, r.useState)({}),
            n = (0, r.useRef)(!1),
            o = (0, r.useRef)(e),
            l = (0, r.useRef)({ data: !1, error: !1, isValidating: !1 }),
            a = (0, r.useCallback)((e) => {
              let r = !1,
                i = o.current;
              for (let t in e)
                i[t] !== e[t] && ((i[t] = e[t]), l.current[t] && (r = !0));
              r && !n.current && t({});
            }, []);
          return (
            (0, i.LI)(
              () => (
                (n.current = !1),
                () => {
                  n.current = !0;
                }
              )
            ),
            [o, l.current, a]
          );
        },
        d = (0, i.xD)(u, () => (e, t, n = {}) => {
          let { mutate: o } = (0, i.kY)(),
            l = (0, r.useRef)(e),
            a = (0, r.useRef)(t),
            u = (0, r.useRef)(n),
            d = (0, r.useRef)(0),
            [f, p, m] = s({ data: i.i_, error: i.i_, isMutating: !1 }),
            v = f.current,
            h = (0, r.useCallback)(async (e, t) => {
              let [n, r] = (0, i.qC)(l.current);
              if (!a.current)
                throw Error("Can’t trigger the mutation: missing fetcher.");
              if (!n) throw Error("Can’t trigger the mutation: missing key.");
              let s = (0, i.PM)(
                  (0, i.PM)({ populateCache: !1, throwOnError: !0 }, u.current),
                  t
                ),
                f = (0, i.u3)();
              (d.current = f), m({ isMutating: !0 });
              try {
                let t = await o(
                  n,
                  a.current(r, { arg: e }),
                  (0, i.PM)(s, { throwOnError: !0 })
                );
                return (
                  d.current <= f &&
                    (c(() => m({ data: t, isMutating: !1, error: void 0 })),
                    null == s.onSuccess || s.onSuccess.call(s, t, n, s)),
                  t
                );
              } catch (e) {
                if (
                  d.current <= f &&
                  (c(() => m({ error: e, isMutating: !1 })),
                  null == s.onError || s.onError.call(s, e, n, s),
                  s.throwOnError)
                )
                  throw e;
              }
            }, []),
            g = (0, r.useCallback)(() => {
              (d.current = (0, i.u3)()),
                m({ data: i.i_, error: i.i_, isMutating: !1 });
            }, []);
          return (
            (0, i.LI)(() => {
              (l.current = e), (a.current = t), (u.current = n);
            }),
            {
              trigger: h,
              reset: g,
              get data() {
                return (p.data = !0), v.data;
              },
              get error() {
                return (p.error = !0), v.error;
              },
              get isMutating() {
                return (p.isMutating = !0), v.isMutating;
              },
            }
          );
        });
    },
    1735: function (e, t, n) {
      n.d(t, {
        _T: function () {
          return o;
        },
        ev: function () {
          return i;
        },
        pi: function () {
          return r;
        },
      });
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function i(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
