"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [598],
  {
    2665: function (e, t, n) {
      n.d(t, {
        h3: function () {
          return R;
        },
      });
      var r,
        i,
        s,
        o,
        u,
        a = n(2265);
      function c(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      function l() {}
      function f(e) {
        return !!(e || "").match(/\d/);
      }
      function h(e) {
        return null == e;
      }
      function d(e) {
        return (
          h(e) ||
          ("number" == typeof e && isNaN(e)) ||
          ("number" == typeof e && !isFinite(e))
        );
      }
      function g(e) {
        return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
      }
      function p(e, t) {
        void 0 === t && (t = !0);
        var n = "-" === e[0],
          r = n && t,
          i = (e = e.replace("-", "")).split(".");
        return {
          beforeDecimal: i[0],
          afterDecimal: i[1] || "",
          hasNegation: n,
          addNegation: r,
        };
      }
      function v(e, t, n) {
        for (var r = "", i = n ? "0" : "", s = 0; s <= t - 1; s++)
          r += e[s] || i;
        return r;
      }
      function m(e, t) {
        return Array(t + 1).join(e);
      }
      function w(e) {
        var t = e + "",
          n = "-" === t[0] ? "-" : "";
        n && (t = t.substring(1));
        var r = t.split(/[eE]/g),
          i = r[0],
          s = r[1];
        if (!(s = Number(s))) return n + i;
        i = i.replace(".", "");
        var o = 1 + s,
          u = i.length;
        return (
          o < 0
            ? (i = "0." + m("0", Math.abs(o)) + i)
            : o >= u
            ? (i += m("0", o - u))
            : (i = (i.substring(0, o) || "0") + "." + i.substring(o)),
          n + i
        );
      }
      function N(e, t, n) {
        if (-1 !== ["", "-"].indexOf(e)) return e;
        var r = (-1 !== e.indexOf(".") || n) && t,
          i = p(e),
          s = i.beforeDecimal,
          o = i.afterDecimal,
          u = i.hasNegation,
          a = parseFloat("0." + (o || "0")),
          c = (o.length <= t ? "0." + o : a.toFixed(t)).split("."),
          l = s;
        return (
          s &&
            Number(c[0]) &&
            (l = s
              .split("")
              .reverse()
              .reduce(function (e, t, n) {
                return e.length > n
                  ? (Number(e[0]) + Number(t)).toString() +
                      e.substring(1, e.length)
                  : t + e;
              }, c[0])),
          (u ? "-" : "") + l + (r ? "." : "") + v(c[1] || "", t, n)
        );
      }
      function b(e, t) {
        if (((e.value = e.value), null !== e)) {
          if (e.createTextRange) {
            var n = e.createTextRange();
            return n.move("character", t), n.select(), !0;
          }
          return e.selectionStart || 0 === e.selectionStart
            ? (e.focus(), e.setSelectionRange(t, t), !0)
            : (e.focus(), !1);
        }
      }
      ((r = u || (u = {})).event = "event"), (r.props = "prop");
      var x =
          ((i = function (e, t) {
            for (
              var n = 0, r = 0, i = e.length, s = t.length;
              e[n] === t[n] && n < i;

            )
              n++;
            for (; e[i - 1 - r] === t[s - 1 - r] && s - r > n && i - r > n; )
              r++;
            return {
              from: { start: n, end: i - r },
              to: { start: n, end: s - r },
            };
          }),
          (o = void 0),
          function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return s &&
              e.length === s.length &&
              e.every(function (e, t) {
                return e === s[t];
              })
              ? o
              : ((s = e), (o = i.apply(void 0, e)));
          }),
        S = function (e, t) {
          var n = Math.min(e.selectionStart, t);
          return {
            from: { start: n, end: e.selectionEnd },
            to: { start: n, end: t },
          };
        };
      function y(e) {
        return Math.max(e.selectionStart, e.selectionEnd);
      }
      function E(e) {
        var t = e.currentValue,
          n = e.formattedValue,
          r = e.currentValueIndex,
          i = e.formattedValueIndex;
        return t[r] === n[i];
      }
      function O(e, t, n, r) {
        var i = e.length;
        if (((t = Math.min(Math.max(t, 0), i)), "left" === r)) {
          for (; t >= 0 && !n[t]; ) t--;
          -1 === t && (t = n.indexOf(!0));
        } else {
          for (; t <= i && !n[t]; ) t++;
          t > i && (t = n.lastIndexOf(!0));
        }
        return -1 === t && (t = i), t;
      }
      function V(e) {
        for (
          var t = Array.from({ length: e.length + 1 }).map(function () {
              return !0;
            }),
            n = 0,
            r = t.length;
          n < r;
          n++
        )
          t[n] = !!(f(e[n]) || f(e[n - 1]));
        return t;
      }
      function D(e, t, n, r, i, s) {
        void 0 === s && (s = l);
        var o,
          u,
          c =
            ((o = function (e, t) {
              var n, s;
              return (
                d(e)
                  ? ((s = ""), (n = ""))
                  : (n =
                      "number" == typeof e || t
                        ? r((s = "number" == typeof e ? w(e) : e))
                        : r((s = i(e, void 0)))),
                { formattedValue: n, numAsString: s }
              );
            }),
            ((u = (0, a.useRef)(o)).current = o),
            (0, a.useRef)(function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return u.current.apply(u, e);
            }).current),
          f = (0, a.useState)(function () {
            return c(h(e) ? t : e, n);
          }),
          g = f[0],
          p = f[1],
          v = e,
          m = n;
        h(e) && ((v = g.numAsString), (m = !0));
        var N = c(v, m);
        return (
          (0, a.useMemo)(
            function () {
              p(N);
            },
            [N.formattedValue]
          ),
          [
            g,
            function (e, t) {
              e.formattedValue !== g.formattedValue &&
                p({ formattedValue: e.formattedValue, numAsString: e.value }),
                s(e, t);
            },
          ]
        );
      }
      function M(e) {
        return e.replace(/[^0-9]/g, "");
      }
      function A(e) {
        return e;
      }
      function T(e) {
        var t = e.type;
        void 0 === t && (t = "text");
        var n = e.displayType;
        void 0 === n && (n = "input");
        var r = e.customInput,
          i = e.renderText,
          s = e.getInputRef,
          o = e.format;
        void 0 === o && (o = A);
        var h = e.removeFormatting;
        void 0 === h && (h = M);
        var d = e.defaultValue,
          g = e.valueIsNumericString,
          p = e.onValueChange,
          v = e.isAllowed,
          m = e.onChange;
        void 0 === m && (m = l);
        var w = e.onKeyDown;
        void 0 === w && (w = l);
        var N = e.onMouseUp;
        void 0 === N && (N = l);
        var T = e.onFocus;
        void 0 === T && (T = l);
        var F = e.onBlur;
        void 0 === F && (F = l);
        var C = e.value,
          R = e.getCaretBoundary;
        void 0 === R && (R = V);
        var I = e.isValidInputCharacter;
        void 0 === I && (I = f);
        var q = e.isCharacterSame,
          k = c(e, [
            "type",
            "displayType",
            "customInput",
            "renderText",
            "getInputRef",
            "format",
            "removeFormatting",
            "defaultValue",
            "valueIsNumericString",
            "onValueChange",
            "isAllowed",
            "onChange",
            "onKeyDown",
            "onMouseUp",
            "onFocus",
            "onBlur",
            "value",
            "getCaretBoundary",
            "isValidInputCharacter",
            "isCharacterSame",
          ]),
          Z = D(C, d, !!g, o, h, p),
          j = Z[0],
          P = j.formattedValue,
          B = j.numAsString,
          L = Z[1],
          _ = (0, a.useRef)(),
          U = (0, a.useRef)({ formattedValue: P, numAsString: B }),
          H = function (e, t) {
            (U.current = {
              formattedValue: e.formattedValue,
              numAsString: e.value,
            }),
              L(e, t);
          },
          W = (0, a.useState)(!1),
          $ = W[0],
          K = W[1],
          G = (0, a.useRef)(null),
          J = (0, a.useRef)({ setCaretTimeout: null, focusTimeout: null });
        (0, a.useEffect)(function () {
          return (
            K(!0),
            function () {
              clearTimeout(J.current.setCaretTimeout),
                clearTimeout(J.current.focusTimeout);
            }
          );
        }, []);
        var z = o,
          Q = function (e, t) {
            var n = parseFloat(t);
            return {
              formattedValue: e,
              value: t,
              floatValue: isNaN(n) ? void 0 : n,
            };
          },
          X = function (e, t, n) {
            (0 !== e.selectionStart || e.selectionEnd !== e.value.length) &&
              (b(e, t),
              (J.current.setCaretTimeout = setTimeout(function () {
                e.value === n && e.selectionStart !== t && b(e, t);
              }, 0)));
          },
          Y = function (e, t, n) {
            return O(e, t, R(e), n);
          },
          ee = function (e, t, n) {
            var r = R(t),
              i = (function (e, t, n, r, i, s, o) {
                void 0 === o && (o = E);
                var u = i.findIndex(function (e) {
                    return e;
                  }),
                  a = e.slice(0, u);
                t || n.startsWith(a) || ((t = a), (n = a + n), (r += a.length));
                for (
                  var c = n.length, l = e.length, f = {}, h = Array(c), d = 0;
                  d < c;
                  d++
                ) {
                  h[d] = -1;
                  for (var g = 0; g < l; g++)
                    if (
                      o({
                        currentValue: n,
                        lastValue: t,
                        formattedValue: e,
                        currentValueIndex: d,
                        formattedValueIndex: g,
                      }) &&
                      !0 !== f[g]
                    ) {
                      (h[d] = g), (f[g] = !0);
                      break;
                    }
                }
                for (var p = r; p < c && (-1 === h[p] || !s(n[p])); ) p++;
                var v = p === c || -1 === h[p] ? l : h[p];
                for (p = r - 1; p > 0 && -1 === h[p]; ) p--;
                var m = -1 === p || -1 === h[p] ? 0 : h[p] + 1;
                return m > v ? v : r - m < v - r ? m : v;
              })(t, P, e, n, r, I, q);
            return O(t, i, r);
          },
          et = function (e) {
            var t,
              n = e.formattedValue;
            void 0 === n && (n = "");
            var r = e.input,
              i = e.source,
              s = e.event,
              o = e.numAsString;
            if (r) {
              var u = e.inputValue || r.value,
                a = y(r);
              (r.value = n), void 0 !== (t = ee(u, n, a)) && X(r, t, n);
            }
            n !== P && H(Q(n, o), { event: s, source: i });
          };
        (0, a.useEffect)(
          function () {
            var e = U.current,
              t = e.formattedValue,
              n = e.numAsString;
            (P !== t || B !== n) &&
              H(Q(P, B), { event: void 0, source: u.props });
          },
          [P, B]
        );
        var en = G.current ? y(G.current) : void 0;
        ("undefined" != typeof window ? a.useLayoutEffect : a.useEffect)(
          function () {
            var e = G.current;
            if (P !== U.current.formattedValue && e) {
              var t = ee(U.current.formattedValue, P, en);
              (e.value = P), X(e, t, P);
            }
          },
          [P]
        );
        var er = function (e, t, n) {
            var r = t.target,
              i = Object.assign(
                Object.assign(
                  {},
                  _.current ? S(_.current, r.selectionEnd) : x(P, e)
                ),
                { lastValue: P }
              ),
              s = h(e, i),
              o = z(s);
            if (((s = h(o, void 0)), v && !v(Q(o, s)))) {
              var u = t.target,
                a = ee(e, P, y(u));
              return (u.value = P), X(u, a, P), !1;
            }
            return (
              et({
                formattedValue: o,
                numAsString: s,
                inputValue: e,
                event: t,
                source: n,
                input: t.target,
              }),
              !0
            );
          },
          ei = function (e, t) {
            void 0 === t && (t = 0);
            var n = e.selectionStart,
              r = e.selectionEnd;
            _.current = { selectionStart: n, selectionEnd: r + t };
          },
          es = Object.assign(
            {
              inputMode:
                $ &&
                "undefined" != typeof navigator &&
                !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
                  ? "numeric"
                  : void 0,
            },
            k,
            {
              type: t,
              value: P,
              onChange: function (e) {
                er(e.target.value, e, u.event) && m(e), (_.current = void 0);
              },
              onKeyDown: function (e) {
                var t,
                  n = e.target,
                  r = e.key,
                  i = n.selectionStart,
                  s = n.selectionEnd,
                  o = n.value;
                void 0 === o && (o = ""),
                  "ArrowLeft" === r || "Backspace" === r
                    ? (t = Math.max(i - 1, 0))
                    : "ArrowRight" === r
                    ? (t = Math.min(i + 1, o.length))
                    : "Delete" === r && (t = i);
                var u = 0;
                "Delete" === r && i === s && (u = 1);
                var a = "ArrowLeft" === r || "ArrowRight" === r;
                if (void 0 === t || (i !== s && !a)) {
                  w(e), ei(n, u);
                  return;
                }
                var c = t;
                a
                  ? (c = Y(o, t, "ArrowLeft" === r ? "left" : "right")) !== t &&
                    e.preventDefault()
                  : "Delete" !== r || I(o[t])
                  ? "Backspace" !== r || I(o[t]) || (c = Y(o, t, "left"))
                  : (c = Y(o, t, "right")),
                  c !== t && X(n, c, o),
                  w(e),
                  ei(n, u);
              },
              onMouseUp: function (e) {
                var t = e.target,
                  n = function () {
                    var e = t.selectionStart,
                      n = t.selectionEnd,
                      r = t.value;
                    if ((void 0 === r && (r = ""), e === n)) {
                      var i = Y(r, e);
                      i !== e && X(t, i, r);
                    }
                  };
                n(),
                  requestAnimationFrame(function () {
                    n();
                  }),
                  N(e),
                  ei(t);
              },
              onFocus: function (e) {
                e.persist && e.persist();
                var t = e.target,
                  n = e.currentTarget;
                (G.current = t),
                  (J.current.focusTimeout = setTimeout(function () {
                    var r = t.selectionStart,
                      i = t.selectionEnd,
                      s = t.value;
                    void 0 === s && (s = "");
                    var o = Y(s, r);
                    o === r || (0 === r && i === s.length) || X(t, o, s),
                      T(
                        Object.assign(Object.assign({}, e), {
                          currentTarget: n,
                        })
                      );
                  }, 0));
              },
              onBlur: function (e) {
                (G.current = null),
                  clearTimeout(J.current.focusTimeout),
                  clearTimeout(J.current.setCaretTimeout),
                  F(e);
              },
            }
          );
        return "text" === n
          ? i
            ? a.createElement(a.Fragment, null, i(P, k) || null)
            : a.createElement("span", Object.assign({}, k, { ref: s }), P)
          : r
          ? a.createElement(r, Object.assign({}, es, { ref: s }))
          : a.createElement("input", Object.assign({}, es, { ref: s }));
      }
      function F(e, t) {
        var n,
          r,
          i,
          s = t.decimalScale,
          o = t.fixedDecimalScale,
          u = t.prefix;
        void 0 === u && (u = "");
        var a = t.suffix;
        void 0 === a && (a = "");
        var c = t.allowNegative,
          l = t.thousandsGroupStyle;
        if ((void 0 === l && (l = "thousand"), "" === e || "-" === e)) return e;
        var f = C(t),
          h = f.thousandSeparator,
          d = f.decimalSeparator,
          g = (0 !== s && -1 !== e.indexOf(".")) || (s && o),
          m = p(e, c),
          w = m.beforeDecimal,
          N = m.afterDecimal,
          b = m.addNegation;
        return (
          void 0 !== s && (N = v(N, s, !!o)),
          h &&
            ((n = w),
            (r = (function (e) {
              switch (e) {
                case "lakh":
                  return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                case "wan":
                  return /(\d)(?=(\d{4})+(?!\d))/g;
                default:
                  return /(\d)(?=(\d{3})+(?!\d))/g;
              }
            })(l)),
            (i = -1 === (i = n.search(/[1-9]/)) ? n.length : i),
            (w =
              n.substring(0, i) +
              n.substring(i, n.length).replace(r, "$1" + h))),
          u && (w = u + w),
          a && (N += a),
          b && (w = "-" + w),
          (e = w + ((g && d) || "") + N)
        );
      }
      function C(e) {
        var t = e.decimalSeparator;
        void 0 === t && (t = ".");
        var n = e.thousandSeparator,
          r = e.allowedDecimalSeparators;
        return (
          !0 === n && (n = ","),
          r || (r = [t, "."]),
          {
            decimalSeparator: t,
            thousandSeparator: n,
            allowedDecimalSeparators: r,
          }
        );
      }
      function R(e) {
        var t,
          n,
          r,
          i,
          s,
          o,
          v,
          m,
          S,
          y,
          E,
          O,
          V,
          M,
          A,
          R,
          I,
          q,
          k,
          Z,
          j,
          P,
          B,
          L,
          _,
          U,
          H,
          W,
          $,
          K =
            ((t = (function (e) {
              var t = C(e),
                n = t.thousandSeparator,
                r = t.decimalSeparator,
                i = e.prefix;
              void 0 === i && (i = "");
              var s = e.allowNegative;
              if ((void 0 === s && (s = !0), n === r))
                throw Error(
                  "\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " +
                    n +
                    ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' +
                    r +
                    " (default value for decimalSeparator is .)\n     "
                );
              return (
                i.startsWith("-") &&
                  s &&
                  (console.error(
                    "\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " +
                      i +
                      "\n      allowNegative: " +
                      s +
                      "\n    "
                  ),
                  (s = !1)),
                Object.assign(Object.assign({}, e), { allowNegative: s })
              );
            })((t = e))).decimalSeparator,
            t.allowedDecimalSeparators,
            t.thousandsGroupStyle,
            (n = t.suffix),
            (r = t.allowNegative),
            (i = t.allowLeadingZeros),
            void 0 === (s = t.onKeyDown) && (s = l),
            void 0 === (o = t.onBlur) && (o = l),
            (v = t.thousandSeparator),
            (m = t.decimalScale),
            (S = t.fixedDecimalScale),
            void 0 === (y = t.prefix) && (y = ""),
            (E = t.defaultValue),
            (O = t.value),
            (V = t.valueIsNumericString),
            (M = t.onValueChange),
            (A = c(t, [
              "decimalSeparator",
              "allowedDecimalSeparators",
              "thousandsGroupStyle",
              "suffix",
              "allowNegative",
              "allowLeadingZeros",
              "onKeyDown",
              "onBlur",
              "thousandSeparator",
              "decimalScale",
              "fixedDecimalScale",
              "prefix",
              "defaultValue",
              "value",
              "valueIsNumericString",
              "onValueChange",
            ])),
            (I = (R = C(t)).decimalSeparator),
            (q = R.allowedDecimalSeparators),
            (k = function (e) {
              return F(e, t);
            }),
            (Z = function (e, n) {
              return (function (e, t, n) {
                void 0 === t &&
                  (t = {
                    from: { start: 0, end: 0 },
                    to: { start: 0, end: e.length },
                    lastValue: "",
                  });
                var r,
                  i,
                  s,
                  o,
                  u = n.allowNegative,
                  a = n.prefix;
                void 0 === a && (a = "");
                var c = n.suffix;
                void 0 === c && (c = "");
                var l = n.decimalScale,
                  h = t.from,
                  d = t.to,
                  v = d.start,
                  m = d.end,
                  w = C(n),
                  N = w.allowedDecimalSeparators,
                  b = w.decimalSeparator,
                  x = e[m] === b;
                if (f(e) && (e === a || e === c) && "" === t.lastValue)
                  return e;
                if (m - v == 1 && -1 !== N.indexOf(e[v])) {
                  var S = 0 === l ? "" : b;
                  e = e.substring(0, v) + S + e.substring(v + 1, e.length);
                }
                var y = function (e, t, n) {
                    var r = !1,
                      i = !1;
                    a.startsWith("-")
                      ? (r = !1)
                      : e.startsWith("--")
                      ? ((r = !1), (i = !0))
                      : c.startsWith("-") && e.length === c.length
                      ? (r = !1)
                      : "-" === e[0] && (r = !0);
                    var s = r ? 1 : 0;
                    return (
                      i && (s = 2),
                      s && ((e = e.substring(s)), (t -= s), (n -= s)),
                      { value: e, start: t, end: n, hasNegation: r }
                    );
                  },
                  E = y(e, v, m),
                  O = E.hasNegation;
                (e = E.value), (v = E.start), (m = E.end);
                var V = y(t.lastValue, h.start, h.end),
                  D = V.start,
                  M = V.end,
                  A = V.value,
                  T = e.substring(v, m);
                e.length &&
                  A.length &&
                  (D > A.length - c.length || M < a.length) &&
                  !(T && c.startsWith(T)) &&
                  (e = A);
                var F = 0;
                e.startsWith(a) ? (F += a.length) : v < a.length && (F = v),
                  (e = e.substring(F)),
                  (m -= F);
                var R = e.length,
                  I = e.length - c.length;
                e.endsWith(c)
                  ? (R = I)
                  : m > I
                  ? (R = m)
                  : m > e.length - c.length && (R = m),
                  (e = e.substring(0, R)),
                  void 0 === (r = O ? "-" + e : e) && (r = ""),
                  (i = RegExp("(-)(.)*(-)")),
                  (s = /(-)/.test(r)),
                  (o = i.test(r)),
                  (r = r.replace(/-/g, "")),
                  s && !o && u && (r = "-" + r);
                var q = (e = (
                    (e = r).match(RegExp("(^-)|[0-9]|" + g(b), "g")) || []
                  ).join("")).indexOf(b),
                  k = p(
                    (e = e.replace(RegExp(g(b), "g"), function (e, t) {
                      return t === q ? "." : "";
                    })),
                    u
                  ),
                  Z = k.beforeDecimal,
                  j = k.afterDecimal,
                  P = k.addNegation;
                return (
                  d.end - d.start < h.end - h.start &&
                    "" === Z &&
                    x &&
                    !parseFloat(j) &&
                    (e = P ? "-" : ""),
                  e
                );
              })(e, n, t);
            }),
            (j = h(O) ? E : O),
            (B =
              null != V
                ? V
                : ((P = y),
                  "" === j ||
                    (!(null == P ? void 0 : P.match(/\d/)) &&
                      !(null == n ? void 0 : n.match(/\d/)) &&
                      "string" == typeof j &&
                      !isNaN(Number(j))))),
            h(O)
              ? h(E) || (B = B || "number" == typeof E)
              : (B = B || "number" == typeof O),
            (H = (U = (_ = D(
              (L = function (e) {
                return d(e)
                  ? e
                  : ("number" == typeof e && (e = w(e)),
                    B && "number" == typeof m)
                  ? N(e, m, !!S)
                  : e;
              })(O),
              L(E),
              !!B,
              k,
              Z,
              M
            ))[0]).numAsString),
            (W = U.formattedValue),
            ($ = _[1]),
            Object.assign(Object.assign({}, A), {
              value: W,
              valueIsNumericString: !1,
              isValidInputCharacter: function (e) {
                return e === I || f(e);
              },
              isCharacterSame: function (e) {
                var t = e.currentValue,
                  n = e.lastValue,
                  r = e.formattedValue,
                  i = e.currentValueIndex,
                  s = e.formattedValueIndex,
                  o = t[i],
                  u = r[s],
                  a = x(n, t).to,
                  c = function (e) {
                    return Z(e).indexOf(".") + y.length;
                  };
                return (
                  !(
                    0 === O &&
                    S &&
                    m &&
                    t[a.start] === I &&
                    c(t) < i &&
                    c(r) > s
                  ) &&
                  ((!!(i >= a.start && i < a.end && q && q.includes(o)) &&
                    u === I) ||
                    o === u)
                );
              },
              onValueChange: $,
              format: k,
              removeFormatting: Z,
              getCaretBoundary: function (e) {
                var n, r, i, s, o, u;
                return (
                  void 0 === (r = (n = t).prefix) && (r = ""),
                  void 0 === (i = n.suffix) && (i = ""),
                  (s = Array.from({ length: e.length + 1 }).map(function () {
                    return !0;
                  })),
                  (o = "-" === e[0]),
                  s.fill(!1, 0, r.length + (o ? 1 : 0)),
                  (u = e.length),
                  s.fill(!1, u - i.length + 1, u + 1),
                  s
                );
              },
              onKeyDown: function (e) {
                var t = e.target,
                  n = e.key,
                  i = t.selectionStart,
                  o = t.selectionEnd,
                  u = t.value;
                if (
                  (void 0 === u && (u = ""),
                  ("Backspace" === n || "Delete" === n) && o < y.length)
                ) {
                  e.preventDefault();
                  return;
                }
                if (i !== o) {
                  s(e);
                  return;
                }
                "Backspace" === n &&
                  "-" === u[0] &&
                  i === y.length + 1 &&
                  r &&
                  b(t, 1),
                  m &&
                    S &&
                    ("Backspace" === n && u[i - 1] === I
                      ? (b(t, i - 1), e.preventDefault())
                      : "Delete" === n && u[i] === I && e.preventDefault()),
                  (null == q ? void 0 : q.includes(n)) &&
                    u[i] === I &&
                    b(t, i + 1);
                var a = !0 === v ? "," : v;
                "Backspace" === n && u[i - 1] === a && b(t, i - 1),
                  "Delete" === n && u[i] === a && b(t, i + 1),
                  s(e);
              },
              onBlur: function (e) {
                var n = H;
                n.match(/\d/g) || (n = ""),
                  i ||
                    (n = (function (e) {
                      if (!e) return e;
                      var t = "-" === e[0];
                      t && (e = e.substring(1, e.length));
                      var n = e.split("."),
                        r = n[0].replace(/^0+/, "") || "0",
                        i = n[1] || "";
                      return (t ? "-" : "") + r + (i ? "." + i : "");
                    })(n)),
                  S && m && (n = N(n, m, S)),
                  n !== H &&
                    $(
                      {
                        formattedValue: F(n, t),
                        value: n,
                        floatValue: parseFloat(n),
                      },
                      { event: e, source: u.event }
                    ),
                  o(e);
              },
            }));
        return a.createElement(T, Object.assign({}, K));
      }
    },
    7603: function (e, t, n) {
      var r,
        i,
        s = "0123456789abcdef",
        o =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        u =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        a = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        c = !0,
        l = "[DecimalError] ",
        f = l + "Invalid argument: ",
        h = l + "Precision limit exceeded",
        d = l + "crypto unavailable",
        g = "[object Decimal]",
        p = Math.floor,
        v = Math.pow,
        m = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        w = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        N = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        b = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        x = o.length - 1,
        S = u.length - 1,
        y = { toStringTag: g };
      function E(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          s = "",
          o = e[0];
        if (i > 0) {
          for (s += o, t = 1; t < i; t++)
            (n = 7 - (r = e[t] + "").length) && (s += q(n)), (s += r);
          (n = 7 - (r = (o = e[t]) + "").length) && (s += q(n));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return s + o;
      }
      function O(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(f + e);
      }
      function V(e, t, n, r) {
        var i, s, o, u;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (s = v(10, 7 - t)),
          (u = e[i] % s | 0),
          null == r
            ? t < 3
              ? (0 == t ? (u = (u / 100) | 0) : 1 == t && (u = (u / 10) | 0),
                (o =
                  (n < 4 && 99999 == u) ||
                  (n > 3 && 49999 == u) ||
                  5e4 == u ||
                  0 == u))
              : (o =
                  (((n < 4 && u + 1 == s) || (n > 3 && u + 1 == s / 2)) &&
                    ((e[i + 1] / s / 100) | 0) == v(10, t - 2) - 1) ||
                  ((u == s / 2 || 0 == u) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
            ? (0 == t
                ? (u = (u / 1e3) | 0)
                : 1 == t
                ? (u = (u / 100) | 0)
                : 2 == t && (u = (u / 10) | 0),
              (o = ((r || n < 4) && 9999 == u) || (!r && n > 3 && 4999 == u)))
            : (o =
                (((r || n < 4) && u + 1 == s) ||
                  (!r && n > 3 && u + 1 == s / 2)) &&
                ((e[i + 1] / s / 1e3) | 0) == v(10, t - 3) - 1),
          o
        );
      }
      function D(e, t, n) {
        for (var r, i, o = [0], u = 0, a = e.length; u < a; ) {
          for (i = o.length; i--; ) o[i] *= t;
          for (o[0] += s.indexOf(e.charAt(u++)), r = 0; r < o.length; r++)
            o[r] > n - 1 &&
              (void 0 === o[r + 1] && (o[r + 1] = 0),
              (o[r + 1] += (o[r] / n) | 0),
              (o[r] %= n));
        }
        return o.reverse();
      }
      (y.absoluteValue = y.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), A(e);
        }),
        (y.ceil = function () {
          return A(new this.constructor(this), this.e + 1, 2);
        }),
        (y.clampedTo = y.clamp =
          function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s))
              return new n(NaN);
            if (e.gt(t)) throw Error(f + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
          }),
        (y.comparedTo = y.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              s = this.d,
              o = (e = new this.constructor(e)).d,
              u = this.s,
              a = e.s;
            if (!s || !o)
              return u && a
                ? u !== a
                  ? u
                  : s === o
                  ? 0
                  : !s ^ (u < 0)
                  ? 1
                  : -1
                : NaN;
            if (!s[0] || !o[0]) return s[0] ? u : o[0] ? -a : 0;
            if (u !== a) return u;
            if (this.e !== e.e) return (this.e > e.e) ^ (u < 0) ? 1 : -1;
            for (t = 0, n = (r = s.length) < (i = o.length) ? r : i; t < n; ++t)
              if (s[t] !== o[t]) return (s[t] > o[t]) ^ (u < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (u < 0) ? 1 : -1;
          }),
        (y.cosine = y.cos =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.d
              ? n.d[0]
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n, r, i;
                    if (t.isZero()) return t;
                    (r = t.d.length) < 32
                      ? (i = (1 / H(4, (n = Math.ceil(r / 3)))).toString())
                      : ((n = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += n),
                      (t = U(e, 1, t.times(i), new e(1)));
                    for (var s = n; s--; ) {
                      var o = t.times(t);
                      t = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (e.precision -= n), t;
                  })(r, W(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  A(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                : new r(1)
              : new r(NaN);
          }),
        (y.cubeRoot = y.cbrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o,
              u,
              a,
              l,
              f = this.constructor;
            if (!this.isFinite() || this.isZero()) return new f(this);
            for (
              c = !1,
                (s = this.s * v(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                  ? (r = new f(s.toString()))
                  : ((n = E(this.d)),
                    (s = ((e = this.e) - n.length + 1) % 3) &&
                      (n += 1 == s || -2 == s ? "0" : "00"),
                    (s = v(n, 1 / 3)),
                    (e = p((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((r = new f(
                      (n =
                        s == 1 / 0
                          ? "5e" + e
                          : (n = s.toExponential()).slice(
                              0,
                              n.indexOf("e") + 1
                            ) + e)
                    )).s = this.s)),
                o = (e = f.precision) + 3;
              ;

            )
              if (
                ((r = M(
                  (l = (a = (u = r).times(u).times(u)).plus(this))
                    .plus(this)
                    .times(u),
                  l.plus(a),
                  o + 2,
                  1
                )),
                E(u.d).slice(0, o) === (n = E(r.d)).slice(0, o))
              ) {
                if (
                  "9999" != (n = n.slice(o - 3, o + 1)) &&
                  (i || "4999" != n)
                ) {
                  (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                    (A(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                  break;
                }
                if (!i && (A(u, e + 1, 0), u.times(u).times(u).eq(this))) {
                  r = u;
                  break;
                }
                (o += 4), (i = 1);
              }
            return (c = !0), A(r, e, f.rounding, t);
          }),
        (y.decimalPlaces = y.dp =
          function () {
            var e,
              t = this.d,
              n = NaN;
            if (t) {
              if (((n = ((e = t.length - 1) - p(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) n--;
              n < 0 && (n = 0);
            }
            return n;
          }),
        (y.dividedBy = y.div =
          function (e) {
            return M(this, new this.constructor(e));
          }),
        (y.dividedToIntegerBy = y.divToInt =
          function (e) {
            var t = this.constructor;
            return A(M(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (y.equals = y.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (y.floor = function () {
          return A(new this.constructor(this), this.e + 1, 3);
        }),
        (y.greaterThan = y.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (y.greaterThanOrEqualTo = y.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (y.hyperbolicCosine = y.cosh =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s = this,
              o = s.constructor,
              u = new o(1);
            if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return u;
            (n = o.precision),
              (r = o.rounding),
              (o.precision = n + Math.max(s.e, s.sd()) + 4),
              (o.rounding = 1),
              (i = s.d.length) < 32
                ? (t = (1 / H(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (s = U(o, 1, s.times(t), new o(1), !0));
            for (var a, c = e, l = new o(8); c--; )
              (a = s.times(s)), (s = u.minus(a.times(l.minus(a.times(l)))));
            return A(s, (o.precision = n), (o.rounding = r), !0);
          }),
        (y.hyperbolicSine = y.sinh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
              ((t = s.precision),
              (n = s.rounding),
              (s.precision = t + Math.max(i.e, i.sd()) + 4),
              (s.rounding = 1),
              (r = i.d.length) < 3)
            )
              i = U(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e),
                (i = U(s, 2, (i = i.times(1 / H(5, e))), i, !0));
              for (var o, u = new s(5), a = new s(16), c = new s(20); e--; )
                (o = i.times(i)),
                  (i = i.times(u.plus(o.times(a.times(o).plus(c)))));
            }
            return (s.precision = t), (s.rounding = n), A(i, t, n, !0);
          }),
        (y.hyperbolicTangent = y.tanh =
          function () {
            var e,
              t,
              n = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new n(this)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 7),
                  (n.rounding = 1),
                  M(
                    this.sinh(),
                    this.cosh(),
                    (n.precision = e),
                    (n.rounding = t)
                  ))
              : new n(this.s);
          }),
        (y.inverseCosine = y.acos =
          function () {
            var e,
              t = this,
              n = t.constructor,
              r = t.abs().cmp(1),
              i = n.precision,
              s = n.rounding;
            return -1 !== r
              ? 0 === r
                ? t.isNeg()
                  ? R(n, i, s)
                  : new n(0)
                : new n(NaN)
              : t.isZero()
              ? R(n, i + 4, s).times(0.5)
              : ((n.precision = i + 6),
                (n.rounding = 1),
                (t = t.asin()),
                (e = R(n, i + 4, s).times(0.5)),
                (n.precision = i),
                (n.rounding = s),
                e.minus(t));
          }),
        (y.inverseHyperbolicCosine = y.acosh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.lte(1)
              ? new r(n.eq(1) ? 0 : NaN)
              : n.isFinite()
              ? ((e = r.precision),
                (t = r.rounding),
                (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                (r.rounding = 1),
                (c = !1),
                (n = n.times(n).minus(1).sqrt().plus(n)),
                (c = !0),
                (r.precision = e),
                (r.rounding = t),
                n.ln())
              : new r(n);
          }),
        (y.inverseHyperbolicSine = y.asinh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return !n.isFinite() || n.isZero()
              ? new r(n)
              : ((e = r.precision),
                (t = r.rounding),
                (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                (r.rounding = 1),
                (c = !1),
                (n = n.times(n).plus(1).sqrt().plus(n)),
                (c = !0),
                (r.precision = e),
                (r.rounding = t),
                n.ln());
          }),
        (y.inverseHyperbolicTangent = y.atanh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = s.precision),
                  (t = s.rounding),
                  Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                ? A(new s(i), e, t, !0)
                : ((s.precision = n = r - i.e),
                  (i = M(i.plus(1), new s(1).minus(i), n + e, 1)),
                  (s.precision = e + 4),
                  (s.rounding = 1),
                  (i = i.ln()),
                  (s.precision = e),
                  (s.rounding = t),
                  i.times(0.5))
              : new s(NaN);
          }),
        (y.inverseSine = y.asin =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            return i.isZero()
              ? new s(i)
              : ((t = i.abs().cmp(1)),
                (n = s.precision),
                (r = s.rounding),
                -1 !== t)
              ? 0 === t
                ? (((e = R(s, n + 4, r).times(0.5)).s = i.s), e)
                : new s(NaN)
              : ((s.precision = n + 6),
                (s.rounding = 1),
                (i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                (s.precision = n),
                (s.rounding = r),
                i.times(2));
          }),
        (y.inverseTangent = y.atan =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o,
              u,
              a,
              l = this,
              f = l.constructor,
              h = f.precision,
              d = f.rounding;
            if (l.isFinite()) {
              if (l.isZero()) return new f(l);
              if (l.abs().eq(1) && h + 4 <= S)
                return ((o = R(f, h + 4, d).times(0.25)).s = l.s), o;
            } else {
              if (!l.s) return new f(NaN);
              if (h + 4 <= S)
                return ((o = R(f, h + 4, d).times(0.5)).s = l.s), o;
            }
            for (
              f.precision = u = h + 10,
                f.rounding = 1,
                e = n = Math.min(28, (u / 7 + 2) | 0);
              e;
              --e
            )
              l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (
              c = !1,
                t = Math.ceil(u / 7),
                r = 1,
                a = l.times(l),
                o = new f(l),
                i = l;
              -1 !== e;

            )
              if (
                ((i = i.times(a)),
                (s = o.minus(i.div((r += 2)))),
                (i = i.times(a)),
                void 0 !== (o = s.plus(i.div((r += 2)))).d[t])
              )
                for (e = t; o.d[e] === s.d[e] && e--; );
            return (
              n && (o = o.times(2 << (n - 1))),
              (c = !0),
              A(o, (f.precision = h), (f.rounding = d), !0)
            );
          }),
        (y.isFinite = function () {
          return !!this.d;
        }),
        (y.isInteger = y.isInt =
          function () {
            return !!this.d && p(this.e / 7) > this.d.length - 2;
          }),
        (y.isNaN = function () {
          return !this.s;
        }),
        (y.isNegative = y.isNeg =
          function () {
            return this.s < 0;
          }),
        (y.isPositive = y.isPos =
          function () {
            return this.s > 0;
          }),
        (y.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (y.lessThan = y.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (y.lessThanOrEqualTo = y.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (y.logarithm = y.log =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              u,
              a = this.constructor,
              l = a.precision,
              f = a.rounding;
            if (null == e) (e = new a(10)), (t = !0);
            else {
              if (((n = (e = new a(e)).d), e.s < 0 || !n || !n[0] || e.eq(1)))
                return new a(NaN);
              t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
              return new a(
                n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0
              );
            if (t) {
              if (n.length > 1) i = !0;
              else {
                for (r = n[0]; r % 10 == 0; ) r /= 10;
                i = 1 !== r;
              }
            }
            if (
              ((c = !1),
              V(
                (u = M(B(this, (o = l + 5)), t ? C(a, o + 10) : B(e, o), o, 1))
                  .d,
                (r = l),
                f
              ))
            )
              do
                if (
                  ((o += 10),
                  (u = M(B(this, o), t ? C(a, o + 10) : B(e, o), o, 1)),
                  !i)
                ) {
                  +E(u.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                    (u = A(u, l + 1, 0));
                  break;
                }
              while (V(u.d, (r += 10), f));
            return (c = !0), A(u, l, f);
          }),
        (y.minus = y.sub =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              u,
              a,
              l,
              f,
              h,
              d,
              g = this.constructor;
            if (((e = new g(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new g(e.d || this.s !== e.s ? this : NaN))
                  : (e = new g(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((l = this.d),
              (d = e.d),
              (u = g.precision),
              (a = g.rounding),
              !l[0] || !d[0])
            ) {
              if (d[0]) e.s = -e.s;
              else {
                if (!l[0]) return new g(3 === a ? -0 : 0);
                e = new g(this);
              }
              return c ? A(e, u, a) : e;
            }
            if (
              ((n = p(e.e / 7)),
              (f = p(this.e / 7)),
              (l = l.slice()),
              (s = f - n))
            ) {
              for (
                (h = s < 0)
                  ? ((t = l), (s = -s), (o = d.length))
                  : ((t = d), (n = f), (o = l.length)),
                  s > (r = Math.max(Math.ceil(u / 7), o) + 2) &&
                    ((s = r), (t.length = 1)),
                  t.reverse(),
                  r = s;
                r--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (h = (r = l.length) < (o = d.length)) && (o = r), r = 0;
                r < o;
                r++
              )
                if (l[r] != d[r]) {
                  h = l[r] < d[r];
                  break;
                }
              s = 0;
            }
            for (
              h && ((t = l), (l = d), (d = t), (e.s = -e.s)),
                o = l.length,
                r = d.length - o;
              r > 0;
              --r
            )
              l[o++] = 0;
            for (r = d.length; r > s; ) {
              if (l[--r] < d[r]) {
                for (i = r; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
                --l[i], (l[r] += 1e7);
              }
              l[r] -= d[r];
            }
            for (; 0 === l[--o]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --n;
            return l[0]
              ? ((e.d = l), (e.e = F(l, n)), c ? A(e, u, a) : e)
              : new g(3 === a ? -0 : 0);
          }),
        (y.modulo = y.mod =
          function (e) {
            var t,
              n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
              ? e.d && (!this.d || this.d[0])
                ? ((c = !1),
                  9 == n.modulo
                    ? ((t = M(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = M(this, e, 0, n.modulo, 1)),
                  (t = t.times(e)),
                  (c = !0),
                  this.minus(t))
                : A(new n(this), n.precision, n.rounding)
              : new n(NaN);
          }),
        (y.naturalExponential = y.exp =
          function () {
            return P(this);
          }),
        (y.naturalLogarithm = y.ln =
          function () {
            return B(this);
          }),
        (y.negated = y.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), A(e);
          }),
        (y.plus = y.add =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              u,
              a,
              l,
              f,
              h = this.constructor;
            if (((e = new h(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new h(e.d || this.s === e.s ? this : NaN))
                  : (e = new h(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((l = this.d),
              (f = e.d),
              (u = h.precision),
              (a = h.rounding),
              !l[0] || !f[0])
            )
              return f[0] || (e = new h(this)), c ? A(e, u, a) : e;
            if (
              ((s = p(this.e / 7)),
              (r = p(e.e / 7)),
              (l = l.slice()),
              (i = s - r))
            ) {
              for (
                i < 0
                  ? ((n = l), (i = -i), (o = f.length))
                  : ((n = f), (r = s), (o = l.length)),
                  i > (o = (s = Math.ceil(u / 7)) > o ? s + 1 : o + 1) &&
                    ((i = o), (n.length = 1)),
                  n.reverse();
                i--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              (o = l.length) - (i = f.length) < 0 &&
                ((i = o), (n = f), (f = l), (l = n)),
                t = 0;
              i;

            )
              (t = ((l[--i] = l[i] + f[i] + t) / 1e7) | 0), (l[i] %= 1e7);
            for (t && (l.unshift(t), ++r), o = l.length; 0 == l[--o]; ) l.pop();
            return (e.d = l), (e.e = F(l, r)), c ? A(e, u, a) : e;
          }),
        (y.precision = y.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(f + e);
            return (
              this.d
                ? ((t = I(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = NaN),
              t
            );
          }),
        (y.round = function () {
          var e = this.constructor;
          return A(new e(this), this.e + 1, e.rounding);
        }),
        (y.sine = y.sin =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n,
                      r = t.d.length;
                    if (r < 3) return t.isZero() ? t : U(e, 2, t, t);
                    (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                      (t = U(e, 2, (t = t.times(1 / H(5, n))), t));
                    for (
                      var i, s = new e(5), o = new e(16), u = new e(20);
                      n--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(o.times(i).minus(u)))));
                    return t;
                  })(r, W(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  A(i > 2 ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        (y.squareRoot = y.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o = this.d,
              u = this.e,
              a = this.s,
              l = this.constructor;
            if (1 !== a || !o || !o[0])
              return new l(
                !a || (a < 0 && (!o || o[0])) ? NaN : o ? this : 1 / 0
              );
            for (
              c = !1,
                0 == (a = Math.sqrt(+this)) || a == 1 / 0
                  ? (((t = E(o)).length + u) % 2 == 0 && (t += "0"),
                    (a = Math.sqrt(t)),
                    (u = p((u + 1) / 2) - (u < 0 || u % 2)),
                    (r = new l(
                      (t =
                        a == 1 / 0
                          ? "5e" + u
                          : (t = a.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1
                            ) + u)
                    )))
                  : (r = new l(a.toString())),
                n = (u = l.precision) + 3;
              ;

            )
              if (
                ((r = (s = r).plus(M(this, s, n + 2, 1)).times(0.5)),
                E(s.d).slice(0, n) === (t = E(r.d)).slice(0, n))
              ) {
                if (
                  "9999" != (t = t.slice(n - 3, n + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (A(r, u + 1, 1), (e = !r.times(r).eq(this)));
                  break;
                }
                if (!i && (A(s, u + 1, 0), s.times(s).eq(this))) {
                  r = s;
                  break;
                }
                (n += 4), (i = 1);
              }
            return (c = !0), A(r, u, l.rounding, e);
          }),
        (y.tangent = y.tan =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 10),
                  (r.rounding = 1),
                  ((n = n.sin()).s = 1),
                  (n = M(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                  (r.precision = e),
                  (r.rounding = t),
                  A(2 == i || 4 == i ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        (y.times = y.mul =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              u,
              a,
              l,
              f = this.constructor,
              h = this.d,
              d = (e = new f(e)).d;
            if (((e.s *= this.s), !h || !h[0] || !d || !d[0]))
              return new f(
                e.s && (!h || h[0] || d) && (!d || d[0] || h)
                  ? h && d
                    ? 0 * e.s
                    : e.s / 0
                  : NaN
              );
            for (
              n = p(this.e / 7) + p(e.e / 7),
                (a = h.length) < (l = d.length) &&
                  ((s = h), (h = d), (d = s), (o = a), (a = l), (l = o)),
                s = [],
                r = o = a + l;
              r--;

            )
              s.push(0);
            for (r = l; --r >= 0; ) {
              for (t = 0, i = a + r; i > r; )
                (u = s[i] + d[r] * h[i - r - 1] + t),
                  (s[i--] = u % 1e7 | 0),
                  (t = (u / 1e7) | 0);
              s[i] = (s[i] + t) % 1e7 | 0;
            }
            for (; !s[--o]; ) s.pop();
            return (
              t ? ++n : s.shift(),
              (e.d = s),
              (e.e = F(s, n)),
              c ? A(e, f.precision, f.rounding) : e
            );
          }),
        (y.toBinary = function (e, t) {
          return $(this, 2, e, t);
        }),
        (y.toDecimalPlaces = y.toDP =
          function (e, t) {
            var n = this,
              r = n.constructor;
            return ((n = new r(n)), void 0 === e)
              ? n
              : (O(e, 0, 1e9),
                void 0 === t ? (t = r.rounding) : O(t, 0, 8),
                A(n, e + n.e + 1, t));
          }),
        (y.toExponential = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = T(r, !0))
              : (O(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : O(t, 0, 8),
                (n = T((r = A(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (y.toFixed = function (e, t) {
          var n,
            r,
            i = this.constructor;
          return (
            void 0 === e
              ? (n = T(this))
              : (O(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : O(t, 0, 8),
                (n = T(
                  (r = A(new i(this), e + this.e + 1, t)),
                  !1,
                  e + r.e + 1
                ))),
            this.isNeg() && !this.isZero() ? "-" + n : n
          );
        }),
        (y.toFraction = function (e) {
          var t,
            n,
            r,
            i,
            s,
            o,
            u,
            a,
            l,
            h,
            d,
            g,
            p = this.d,
            m = this.constructor;
          if (!p) return new m(this);
          if (
            ((l = n = new m(1)),
            (r = a = new m(0)),
            (o = (s = (t = new m(r)).e = I(p) - this.e - 1) % 7),
            (t.d[0] = v(10, o < 0 ? 7 + o : o)),
            null == e)
          )
            e = s > 0 ? t : l;
          else {
            if (!(u = new m(e)).isInt() || u.lt(l)) throw Error(f + u);
            e = u.gt(t) ? (s > 0 ? t : l) : u;
          }
          for (
            c = !1,
              u = new m(E(p)),
              h = m.precision,
              m.precision = s = 14 * p.length;
            (d = M(u, t, 0, 1, 1)), 1 != (i = n.plus(d.times(r))).cmp(e);

          )
            (n = r),
              (r = i),
              (i = l),
              (l = a.plus(d.times(i))),
              (a = i),
              (i = t),
              (t = u.minus(d.times(i))),
              (u = i);
          return (
            (i = M(e.minus(n), r, 0, 1, 1)),
            (a = a.plus(i.times(l))),
            (n = n.plus(i.times(r))),
            (a.s = l.s = this.s),
            (g =
              1 >
              M(l, r, s, 1)
                .minus(this)
                .abs()
                .cmp(M(a, n, s, 1).minus(this).abs())
                ? [l, r]
                : [a, n]),
            (m.precision = h),
            (c = !0),
            g
          );
        }),
        (y.toHexadecimal = y.toHex =
          function (e, t) {
            return $(this, 16, e, t);
          }),
        (y.toNearest = function (e, t) {
          var n = this,
            r = n.constructor;
          if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
          } else {
            if (
              ((e = new r(e)),
              void 0 === t ? (t = r.rounding) : O(t, 0, 8),
              !n.d)
            )
              return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
          }
          return (
            e.d[0]
              ? ((c = !1), (n = M(n, e, 0, t, 1).times(e)), (c = !0), A(n))
              : ((e.s = n.s), (n = e)),
            n
          );
        }),
        (y.toNumber = function () {
          return +this;
        }),
        (y.toOctal = function (e, t) {
          return $(this, 8, e, t);
        }),
        (y.toPower = y.pow =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              u = this,
              a = u.constructor,
              l = +(e = new a(e));
            if (!u.d || !e.d || !u.d[0] || !e.d[0]) return new a(v(+u, l));
            if ((u = new a(u)).eq(1)) return u;
            if (((r = a.precision), (s = a.rounding), e.eq(1)))
              return A(u, r, s);
            if (
              (t = p(e.e / 7)) >= e.d.length - 1 &&
              (n = l < 0 ? -l : l) <= 9007199254740991
            )
              return (
                (i = k(a, u, n, r)), e.s < 0 ? new a(1).div(i) : A(i, r, s)
              );
            if ((o = u.s) < 0) {
              if (t < e.d.length - 1) return new a(NaN);
              if (
                ((1 & e.d[t]) == 0 && (o = 1),
                0 == u.e && 1 == u.d[0] && 1 == u.d.length)
              )
                return (u.s = o), u;
            }
            return (t =
              0 != (n = v(+u, l)) && isFinite(n)
                ? new a(n + "").e
                : p(l * (Math.log("0." + E(u.d)) / Math.LN10 + u.e + 1))) >
              a.maxE + 1 || t < a.minE - 1
              ? new a(t > 0 ? o / 0 : 0)
              : ((c = !1),
                (a.rounding = u.s = 1),
                (n = Math.min(12, (t + "").length)),
                (i = P(e.times(B(u, r + n)), r)).d &&
                  V((i = A(i, r + 5, 1)).d, r, s) &&
                  ((t = r + 10),
                  +E((i = A(P(e.times(B(u, t + n)), t), t + 5, 1)).d).slice(
                    r + 1,
                    r + 15
                  ) +
                    1 ==
                    1e14 && (i = A(i, r + 1, 0))),
                (i.s = o),
                (c = !0),
                (a.rounding = s),
                A(i, r, s));
          }),
        (y.toPrecision = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = T(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
              : (O(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : O(t, 0, 8),
                (n = T(
                  (r = A(new i(r), e, t)),
                  e <= r.e || r.e <= i.toExpNeg,
                  e
                ))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (y.toSignificantDigits = y.toSD =
          function (e, t) {
            var n = this.constructor;
            return (
              void 0 === e
                ? ((e = n.precision), (t = n.rounding))
                : (O(e, 1, 1e9), void 0 === t ? (t = n.rounding) : O(t, 0, 8)),
              A(new n(this), e, t)
            );
          }),
        (y.toString = function () {
          var e = this.constructor,
            t = T(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (y.truncated = y.trunc =
          function () {
            return A(new this.constructor(this), this.e + 1, 1);
          }),
        (y.valueOf = y.toJSON =
          function () {
            var e = this.constructor,
              t = T(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          });
      var M = (function () {
        function e(e, t, n) {
          var r,
            i = 0,
            s = e.length;
          for (e = e.slice(); s--; )
            (r = e[s] * t + i), (e[s] = r % n | 0), (i = (r / n) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, n, r) {
          var i, s;
          if (n != r) s = n > r ? 1 : -1;
          else
            for (i = s = 0; i < n; i++)
              if (e[i] != t[i]) {
                s = e[i] > t[i] ? 1 : -1;
                break;
              }
          return s;
        }
        function n(e, t, n, r) {
          for (var i = 0; n--; )
            (e[n] -= i),
              (i = e[n] < t[n] ? 1 : 0),
              (e[n] = i * r + e[n] - t[n]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, s, o, u, a, c) {
          var l,
            f,
            h,
            d,
            g,
            v,
            m,
            w,
            N,
            b,
            x,
            S,
            y,
            E,
            O,
            V,
            D,
            M,
            T,
            F,
            C = i.constructor,
            R = i.s == s.s ? 1 : -1,
            I = i.d,
            q = s.d;
          if (!I || !I[0] || !q || !q[0])
            return new C(
              i.s && s.s && (I ? !q || I[0] != q[0] : q)
                ? (I && 0 == I[0]) || !q
                  ? 0 * R
                  : R / 0
                : NaN
            );
          for (
            c
              ? ((g = 1), (f = i.e - s.e))
              : ((c = 1e7), (g = 7), (f = p(i.e / g) - p(s.e / g))),
              T = q.length,
              D = I.length,
              b = (N = new C(R)).d = [],
              h = 0;
            q[h] == (I[h] || 0);
            h++
          );
          if (
            (q[h] > (I[h] || 0) && f--,
            null == o
              ? ((E = o = C.precision), (u = C.rounding))
              : (E = a ? o + (i.e - s.e) + 1 : o),
            E < 0)
          )
            b.push(1), (v = !0);
          else {
            if (((E = (E / g + 2) | 0), (h = 0), 1 == T)) {
              for (d = 0, q = q[0], E++; (h < D || d) && E--; h++)
                (O = d * c + (I[h] || 0)),
                  (b[h] = (O / q) | 0),
                  (d = O % q | 0);
              v = d || h < D;
            } else {
              for (
                (d = (c / (q[0] + 1)) | 0) > 1 &&
                  ((q = e(q, d, c)),
                  (I = e(I, d, c)),
                  (T = q.length),
                  (D = I.length)),
                  V = T,
                  S = (x = I.slice(0, T)).length;
                S < T;

              )
                x[S++] = 0;
              (F = q.slice()).unshift(0), (M = q[0]), q[1] >= c / 2 && ++M;
              do
                (d = 0),
                  (l = t(q, x, T, S)) < 0
                    ? ((y = x[0]),
                      T != S && (y = y * c + (x[1] || 0)),
                      (d = (y / M) | 0) > 1
                        ? (d >= c && (d = c - 1),
                          (w = (m = e(q, d, c)).length),
                          (S = x.length),
                          1 == (l = t(m, x, w, S)) &&
                            (d--, n(m, T < w ? F : q, w, c)))
                        : (0 == d && (l = d = 1), (m = q.slice())),
                      (w = m.length) < S && m.unshift(0),
                      n(x, m, S, c),
                      -1 == l &&
                        ((S = x.length),
                        (l = t(q, x, T, S)) < 1 &&
                          (d++, n(x, T < S ? F : q, S, c))),
                      (S = x.length))
                    : 0 === l && (d++, (x = [0])),
                  (b[h++] = d),
                  l && x[0] ? (x[S++] = I[V] || 0) : ((x = [I[V]]), (S = 1));
              while ((V++ < D || void 0 !== x[0]) && E--);
              v = void 0 !== x[0];
            }
            b[0] || b.shift();
          }
          if (1 == g) (N.e = f), (r = v);
          else {
            for (h = 1, d = b[0]; d >= 10; d /= 10) h++;
            (N.e = h + f * g - 1), A(N, a ? o + N.e + 1 : o, u, v);
          }
          return N;
        };
      })();
      function A(e, t, n, r) {
        var i,
          s,
          o,
          u,
          a,
          l,
          f,
          h,
          d,
          g = e.constructor;
        e: if (null != t) {
          if (!(h = e.d)) return e;
          for (i = 1, u = h[0]; u >= 10; u /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (o = t),
              (a = ((f = h[(d = 0)]) / v(10, i - o - 1)) % 10 | 0);
          else if ((d = Math.ceil((s + 1) / 7)) >= (u = h.length)) {
            if (r) {
              for (; u++ <= d; ) h.push(0);
              (f = a = 0), (i = 1), (s %= 7), (o = s - 7 + 1);
            } else break e;
          } else {
            for (i = 1, f = u = h[d]; u >= 10; u /= 10) i++;
            (s %= 7),
              (a = (o = s - 7 + i) < 0 ? 0 : (f / v(10, i - o - 1)) % 10 | 0);
          }
          if (
            ((r =
              r ||
              t < 0 ||
              void 0 !== h[d + 1] ||
              (o < 0 ? f : f % v(10, i - o - 1))),
            (l =
              n < 4
                ? (a || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                : a > 5 ||
                  (5 == a &&
                    (4 == n ||
                      r ||
                      (6 == n &&
                        (s > 0 ? (o > 0 ? f / v(10, i - o) : 0) : h[d - 1]) %
                          10 &
                          1) ||
                      n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !h[0])
          )
            return (
              (h.length = 0),
              l
                ? ((t -= e.e + 1),
                  (h[0] = v(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (h[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((h.length = d), (u = 1), d--)
              : ((h.length = d + 1),
                (u = v(10, 7 - s)),
                (h[d] = o > 0 ? ((f / v(10, i - o)) % v(10, o) | 0) * u : 0)),
            l)
          )
            for (;;) {
              if (0 == d) {
                for (s = 1, o = h[0]; o >= 10; o /= 10) s++;
                for (o = h[0] += u, u = 1; o >= 10; o /= 10) u++;
                s != u && (e.e++, 1e7 == h[0] && (h[0] = 1));
                break;
              }
              if (((h[d] += u), 1e7 != h[d])) break;
              (h[d--] = 0), (u = 1);
            }
          for (s = h.length; 0 === h[--s]; ) h.pop();
        }
        return (
          c &&
            (e.e > g.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < g.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function T(e, t, n) {
        if (!e.isFinite()) return L(e);
        var r,
          i = e.e,
          s = E(e.d),
          o = s.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (s = s.charAt(0) + "." + s.slice(1) + q(r))
                : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
            ? ((s = "0." + q(-i - 1) + s), n && (r = n - o) > 0 && (s += q(r)))
            : i >= o
            ? ((s += q(i + 1 - o)),
              n && (r = n - i - 1) > 0 && (s = s + "." + q(r)))
            : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)),
              n && (r = n - o) > 0 && (i + 1 === o && (s += "."), (s += q(r)))),
          s
        );
      }
      function F(e, t) {
        var n = e[0];
        for (t *= 7; n >= 10; n /= 10) t++;
        return t;
      }
      function C(e, t, n) {
        if (t > x) throw ((c = !0), n && (e.precision = n), Error(h));
        return A(new e(o), t, 1, !0);
      }
      function R(e, t, n) {
        if (t > S) throw Error(h);
        return A(new e(u), t, n, !0);
      }
      function I(e) {
        var t = e.length - 1,
          n = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) n--;
          for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
      }
      function q(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function k(e, t, n, r) {
        var i,
          s = new e(1),
          o = Math.ceil(r / 7 + 4);
        for (c = !1; ; ) {
          if (
            (n % 2 && K((s = s.times(t)).d, o) && (i = !0),
            0 === (n = p(n / 2)))
          ) {
            (n = s.d.length - 1), i && 0 === s.d[n] && ++s.d[n];
            break;
          }
          K((t = t.times(t)).d, o);
        }
        return (c = !0), s;
      }
      function Z(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function j(e, t, n) {
        for (var r, i = new e(t[0]), s = 0; ++s < t.length; )
          if ((r = new e(t[s])).s) i[n](r) && (i = r);
          else {
            i = r;
            break;
          }
        return i;
      }
      function P(e, t) {
        var n,
          r,
          i,
          s,
          o,
          u,
          a,
          l = 0,
          f = 0,
          h = 0,
          d = e.constructor,
          g = d.rounding,
          p = d.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new d(
            e.d
              ? e.d[0]
                ? e.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : e.s
              ? e.s < 0
                ? 0
                : e
              : 0 / 0
          );
        for (
          null == t ? ((c = !1), (a = p)) : (a = t), u = new d(0.03125);
          e.e > -2;

        )
          (e = e.times(u)), (h += 5);
        for (
          a += r = ((Math.log(v(2, h)) / Math.LN10) * 2 + 5) | 0,
            n = s = o = new d(1),
            d.precision = a;
          ;

        ) {
          if (
            ((s = A(s.times(e), a, 1)),
            (n = n.times(++f)),
            E((u = o.plus(M(s, n, a, 1))).d).slice(0, a) === E(o.d).slice(0, a))
          ) {
            for (i = h; i--; ) o = A(o.times(o), a, 1);
            if (null != t) return (d.precision = p), o;
            if (!(l < 3 && V(o.d, a - r, g, l)))
              return A(o, (d.precision = p), g, (c = !0));
            (d.precision = a += 10), (n = s = u = new d(1)), (f = 0), l++;
          }
          o = u;
        }
      }
      function B(e, t) {
        var n,
          r,
          i,
          s,
          o,
          u,
          a,
          l,
          f,
          h,
          d,
          g = 1,
          p = e,
          v = p.d,
          m = p.constructor,
          w = m.rounding,
          N = m.precision;
        if (p.s < 0 || !v || !v[0] || (!p.e && 1 == v[0] && 1 == v.length))
          return new m(v && !v[0] ? -1 / 0 : 1 != p.s ? NaN : v ? 0 : p);
        if (
          (null == t ? ((c = !1), (f = N)) : (f = t),
          (m.precision = f += 10),
          (r = (n = E(v)).charAt(0)),
          !(15e14 > Math.abs((s = p.e))))
        )
          return (
            (l = C(m, f + 2, N).times(s + "")),
            (p = B(new m(r + "." + n.slice(1)), f - 10).plus(l)),
            (m.precision = N),
            null == t ? A(p, N, w, (c = !0)) : p
          );
        for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
          (r = (n = E((p = p.times(e)).d)).charAt(0)), g++;
        for (
          s = p.e,
            r > 1
              ? ((p = new m("0." + n)), s++)
              : (p = new m(r + "." + n.slice(1))),
            h = p,
            a = o = p = M(p.minus(1), p.plus(1), f, 1),
            d = A(p.times(p), f, 1),
            i = 3;
          ;

        ) {
          if (
            ((o = A(o.times(d), f, 1)),
            E((l = a.plus(M(o, new m(i), f, 1))).d).slice(0, f) ===
              E(a.d).slice(0, f))
          ) {
            if (
              ((a = a.times(2)),
              0 !== s && (a = a.plus(C(m, f + 2, N).times(s + ""))),
              (a = M(a, new m(g), f, 1)),
              null != t)
            )
              return (m.precision = N), a;
            if (!V(a.d, f - 10, w, u))
              return A(a, (m.precision = N), w, (c = !0));
            (m.precision = f += 10),
              (l = o = p = M(h.minus(1), h.plus(1), f, 1)),
              (d = A(p.times(p), f, 1)),
              (i = u = 1);
          }
          (a = l), (i += 2);
        }
      }
      function L(e) {
        return String((e.s * e.s) / 0);
      }
      function _(e, t) {
        var n, r, i;
        for (
          (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          48 === t.charCodeAt(r);
          r++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(r, i))) {
          if (
            ((i -= r),
            (e.e = n = n - r - 1),
            (e.d = []),
            (r = (n + 1) % 7),
            n < 0 && (r += 7),
            r < i)
          ) {
            for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i; )
              e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
          } else r -= i;
          for (; r--; ) t += "0";
          e.d.push(+t),
            c &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function U(e, t, n, r, i) {
        var s,
          o,
          u,
          a,
          l = e.precision,
          f = Math.ceil(l / 7);
        for (c = !1, a = n.times(n), u = new e(r); ; ) {
          if (
            ((o = M(u.times(a), new e(t++ * t++), l, 1)),
            (u = i ? r.plus(o) : r.minus(o)),
            (r = M(o.times(a), new e(t++ * t++), l, 1)),
            void 0 !== (o = u.plus(r)).d[f])
          ) {
            for (s = f; o.d[s] === u.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = u), (u = r), (r = o), (o = s);
        }
        return (c = !0), (o.d.length = f + 1), o;
      }
      function H(e, t) {
        for (var n = e; --t; ) n *= e;
        return n;
      }
      function W(e, t) {
        var n,
          r = t.s < 0,
          s = R(e, e.precision, 1),
          o = s.times(0.5);
        if ((t = t.abs()).lte(o)) return (i = r ? 4 : 1), t;
        if ((n = t.divToInt(s)).isZero()) i = r ? 3 : 2;
        else {
          if ((t = t.minus(n.times(s))).lte(o))
            return (i = Z(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
          i = Z(n) ? (r ? 1 : 4) : r ? 3 : 2;
        }
        return t.minus(s).abs();
      }
      function $(e, t, n, i) {
        var o,
          u,
          a,
          c,
          l,
          f,
          h,
          d,
          g,
          p = e.constructor,
          v = void 0 !== n;
        if (
          (v
            ? (O(n, 1, 1e9), void 0 === i ? (i = p.rounding) : O(i, 0, 8))
            : ((n = p.precision), (i = p.rounding)),
          e.isFinite())
        ) {
          for (
            a = (h = T(e)).indexOf("."),
              v
                ? ((o = 2),
                  16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2))
                : (o = t),
              a >= 0 &&
                ((h = h.replace(".", "")),
                ((g = new p(1)).e = h.length - a),
                (g.d = D(T(g), 10, o)),
                (g.e = g.d.length)),
              u = l = (d = D(h, 10, o)).length;
            0 == d[--l];

          )
            d.pop();
          if (d[0]) {
            if (
              (a < 0
                ? u--
                : (((e = new p(e)).d = d),
                  (e.e = u),
                  (d = (e = M(e, g, n, i, 0, o)).d),
                  (u = e.e),
                  (f = r)),
              (a = d[n]),
              (c = o / 2),
              (f = f || void 0 !== d[n + 1]),
              (f =
                i < 4
                  ? (void 0 !== a || f) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : a > c ||
                    (a === c &&
                      (4 === i ||
                        f ||
                        (6 === i && 1 & d[n - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (d.length = n),
              f)
            )
              for (; ++d[--n] > o - 1; ) (d[n] = 0), n || (++u, d.unshift(1));
            for (l = d.length; !d[l - 1]; --l);
            for (a = 0, h = ""; a < l; a++) h += s.charAt(d[a]);
            if (v) {
              if (l > 1) {
                if (16 == t || 8 == t) {
                  for (a = 16 == t ? 4 : 3, --l; l % a; l++) h += "0";
                  for (l = (d = D(h, o, t)).length; !d[l - 1]; --l);
                  for (a = 1, h = "1."; a < l; a++) h += s.charAt(d[a]);
                } else h = h.charAt(0) + "." + h.slice(1);
              }
              h = h + (u < 0 ? "p" : "p+") + u;
            } else if (u < 0) {
              for (; ++u; ) h = "0" + h;
              h = "0." + h;
            } else if (++u > l) for (u -= l; u--; ) h += "0";
            else u < l && (h = h.slice(0, u) + "." + h.slice(u));
          } else h = v ? "0p+0" : "0";
          h = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + h;
        } else h = L(e);
        return e.s < 0 ? "-" + h : h;
      }
      function K(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function G(e) {
        return new this(e).abs();
      }
      function J(e) {
        return new this(e).acos();
      }
      function z(e) {
        return new this(e).acosh();
      }
      function Q(e, t) {
        return new this(e).plus(t);
      }
      function X(e) {
        return new this(e).asin();
      }
      function Y(e) {
        return new this(e).asinh();
      }
      function ee(e) {
        return new this(e).atan();
      }
      function et(e) {
        return new this(e).atanh();
      }
      function en(e, t) {
        (e = new this(e)), (t = new this(t));
        var n,
          r = this.precision,
          i = this.rounding,
          s = r + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((n = t.s < 0 ? R(this, r, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                ? ((n = R(this, s, 1).times(0.5)).s = e.s)
                : t.s < 0
                ? ((this.precision = s),
                  (this.rounding = 1),
                  (n = this.atan(M(e, t, s, 1))),
                  (t = R(this, s, 1)),
                  (this.precision = r),
                  (this.rounding = i),
                  (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                : (n = this.atan(M(e, t, s, 1)))
              : ((n = R(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
          n
        );
      }
      function er(e) {
        return new this(e).cbrt();
      }
      function ei(e) {
        return A((e = new this(e)), e.e + 1, 2);
      }
      function es(e, t, n) {
        return new this(e).clamp(t, n);
      }
      function eo(e) {
        if (!e || "object" != typeof e) throw Error(l + "Object expected");
        var t,
          n,
          r,
          i = !0 === e.defaults,
          s = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < s.length; t += 3)
          if (((n = s[t]), i && (this[n] = a[n]), void 0 !== (r = e[n]))) {
            if (p(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
            else throw Error(f + n + ": " + r);
          }
        if (((n = "crypto"), i && (this[n] = a[n]), void 0 !== (r = e[n]))) {
          if (!0 === r || !1 === r || 0 === r || 1 === r) {
            if (r) {
              if (
                "undefined" != typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[n] = !0;
              else throw Error(d);
            } else this[n] = !1;
          } else throw Error(f + n + ": " + r);
        }
        return this;
      }
      function eu(e) {
        return new this(e).cos();
      }
      function ea(e) {
        return new this(e).cosh();
      }
      function ec(e, t) {
        return new this(e).div(t);
      }
      function el(e) {
        return new this(e).exp();
      }
      function ef(e) {
        return A((e = new this(e)), e.e + 1, 3);
      }
      function eh() {
        var e,
          t,
          n = new this(0);
        for (e = 0, c = !1; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            n.d && (n = n.plus(t.times(t)));
          else {
            if (t.s) return (c = !0), new this(1 / 0);
            n = t;
          }
        return (c = !0), n.sqrt();
      }
      function ed(e) {
        return e instanceof eI || (e && e.toStringTag === g) || !1;
      }
      function eg(e) {
        return new this(e).ln();
      }
      function ep(e, t) {
        return new this(e).log(t);
      }
      function ev(e) {
        return new this(e).log(2);
      }
      function em(e) {
        return new this(e).log(10);
      }
      function ew() {
        return j(this, arguments, "lt");
      }
      function eN() {
        return j(this, arguments, "gt");
      }
      function eb(e, t) {
        return new this(e).mod(t);
      }
      function ex(e, t) {
        return new this(e).mul(t);
      }
      function eS(e, t) {
        return new this(e).pow(t);
      }
      function ey(e) {
        var t,
          n,
          r,
          i,
          s = 0,
          o = new this(1),
          u = [];
        if (
          (void 0 === e ? (e = this.precision) : O(e, 1, 1e9),
          (r = Math.ceil(e / 7)),
          this.crypto)
        ) {
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; )
              (i = t[s]) >= 429e7
                ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (u[s++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); s < r; )
              (i =
                t[s] +
                (t[s + 1] << 8) +
                (t[s + 2] << 16) +
                ((127 & t[s + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, s)
                : (u.push(i % 1e7), (s += 4));
            s = r / 4;
          } else throw Error(d);
        } else for (; s < r; ) u[s++] = (1e7 * Math.random()) | 0;
        for (
          r = u[--s],
            e %= 7,
            r && e && ((i = v(10, 7 - e)), (u[s] = ((r / i) | 0) * i));
          0 === u[s];
          s--
        )
          u.pop();
        if (s < 0) (n = 0), (u = [0]);
        else {
          for (n = -1; 0 === u[0]; n -= 7) u.shift();
          for (r = 1, i = u[0]; i >= 10; i /= 10) r++;
          r < 7 && (n -= 7 - r);
        }
        return (o.e = n), (o.d = u), o;
      }
      function eE(e) {
        return A((e = new this(e)), e.e + 1, this.rounding);
      }
      function eO(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
      }
      function eV(e) {
        return new this(e).sin();
      }
      function eD(e) {
        return new this(e).sinh();
      }
      function eM(e) {
        return new this(e).sqrt();
      }
      function eA(e, t) {
        return new this(e).sub(t);
      }
      function eT() {
        var e = 0,
          t = arguments,
          n = new this(t[0]);
        for (c = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
        return (c = !0), A(n, this.precision, this.rounding);
      }
      function eF(e) {
        return new this(e).tan();
      }
      function eC(e) {
        return new this(e).tanh();
      }
      function eR(e) {
        return A((e = new this(e)), e.e + 1, 1);
      }
      (y[Symbol.for("nodejs.util.inspect.custom")] = y.toString),
        (y[Symbol.toStringTag] = "Decimal");
      var eI = (y.constructor = (function e(t) {
        var n, r, i;
        function s(e) {
          var t, n, r;
          if (!(this instanceof s)) return new s(e);
          if (((this.constructor = s), ed(e))) {
            (this.s = e.s),
              c
                ? !e.d || e.e > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : e.e < s.minE
                  ? ((this.e = 0), (this.d = [0]))
                  : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ("number" == (r = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, n = e; n >= 10; n /= 10) t++;
              c
                ? t > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : t < s.minE
                  ? ((this.e = 0), (this.d = [0]))
                  : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = NaN), (this.e = NaN), (this.d = null);
              return;
            }
            return _(this, e.toString());
          }
          if ("string" !== r) throw Error(f + e);
          return (
            45 === (n = e.charCodeAt(0))
              ? ((e = e.slice(1)), (this.s = -1))
              : (43 === n && (e = e.slice(1)), (this.s = 1)),
            b.test(e)
              ? _(this, e)
              : (function (e, t) {
                  var n, r, i, s, o, u, a, l, h;
                  if (t.indexOf("_") > -1) {
                    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), b.test(t)))
                      return _(e, t);
                  } else if ("Infinity" === t || "NaN" === t)
                    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                  if (w.test(t)) (n = 16), (t = t.toLowerCase());
                  else if (m.test(t)) n = 2;
                  else if (N.test(t)) n = 8;
                  else throw Error(f + t);
                  for (
                    (s = t.search(/p/i)) > 0
                      ? ((a = +t.slice(s + 1)), (t = t.substring(2, s)))
                      : (t = t.slice(2)),
                      o = (s = t.indexOf(".")) >= 0,
                      r = e.constructor,
                      o &&
                        ((s = (u = (t = t.replace(".", "")).length) - s),
                        (i = k(r, new r(n), s, 2 * s))),
                      s = h = (l = D(t, n, 1e7)).length - 1;
                    0 === l[s];
                    --s
                  )
                    l.pop();
                  return s < 0
                    ? new r(0 * e.s)
                    : ((e.e = F(l, h)),
                      (e.d = l),
                      (c = !1),
                      o && (e = M(e, i, 4 * u)),
                      a &&
                        (e = e.times(
                          54 > Math.abs(a) ? v(2, a) : eI.pow(2, a)
                        )),
                      (c = !0),
                      e);
                })(this, e)
          );
        }
        if (
          ((s.prototype = y),
          (s.ROUND_UP = 0),
          (s.ROUND_DOWN = 1),
          (s.ROUND_CEIL = 2),
          (s.ROUND_FLOOR = 3),
          (s.ROUND_HALF_UP = 4),
          (s.ROUND_HALF_DOWN = 5),
          (s.ROUND_HALF_EVEN = 6),
          (s.ROUND_HALF_CEIL = 7),
          (s.ROUND_HALF_FLOOR = 8),
          (s.EUCLID = 9),
          (s.config = s.set = eo),
          (s.clone = e),
          (s.isDecimal = ed),
          (s.abs = G),
          (s.acos = J),
          (s.acosh = z),
          (s.add = Q),
          (s.asin = X),
          (s.asinh = Y),
          (s.atan = ee),
          (s.atanh = et),
          (s.atan2 = en),
          (s.cbrt = er),
          (s.ceil = ei),
          (s.clamp = es),
          (s.cos = eu),
          (s.cosh = ea),
          (s.div = ec),
          (s.exp = el),
          (s.floor = ef),
          (s.hypot = eh),
          (s.ln = eg),
          (s.log = ep),
          (s.log10 = em),
          (s.log2 = ev),
          (s.max = ew),
          (s.min = eN),
          (s.mod = eb),
          (s.mul = ex),
          (s.pow = eS),
          (s.random = ey),
          (s.round = eE),
          (s.sign = eO),
          (s.sin = eV),
          (s.sinh = eD),
          (s.sqrt = eM),
          (s.sub = eA),
          (s.sum = eT),
          (s.tan = eF),
          (s.tanh = eC),
          (s.trunc = eR),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            n = 0,
              i = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ];
            n < i.length;

          )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
        return s.config(t), s;
      })(a));
      (o = new eI(o)), (u = new eI(u)), (t.Z = eI);
    },
  },
]);
