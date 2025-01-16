(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [44],
  {
    1044: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return s8;
        },
      });
      var o,
        i,
        a,
        c,
        l,
        s,
        u,
        d,
        f,
        p,
        h,
        m,
        g = n(2265),
        v = n.t(g, 2);
      function b() {
        return (b = Object.assign
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
      var y = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "64 64 896 896", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z",
              },
            },
          ],
        },
        name: "double-left",
        theme: "outlined",
      };
      function x(e) {
        if (Array.isArray(e)) return e;
      }
      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function E(e, t) {
        if (e) {
          if ("string" == typeof e) return w(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? w(e, t)
              : void 0
          );
        }
      }
      function S() {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function C(e, t) {
        return (
          x(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(e, t) ||
          E(e, t) ||
          S()
        );
      }
      function k(e) {
        return (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function M(e) {
        var t = (function (e, t) {
          if ("object" != k(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != k(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == k(t) ? t : t + "";
      }
      function O(e, t, n) {
        return (
          (t = M(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function R(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.includes(r)) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.includes(n) ||
                ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var I = n(6800),
        P = n.n(I);
      let F = Math.round;
      function j(e, t) {
        let n =
            e
              .replace(/^[^(]*\((.*)/, "$1")
              .replace(/\).*/, "")
              .match(/\d*\.?\d+%?/g) || [],
          r = n.map((e) => parseFloat(e));
        for (let e = 0; e < 3; e += 1) r[e] = t(r[e] || 0, n[e] || "", e);
        return (
          n[3] ? (r[3] = n[3].includes("%") ? r[3] / 100 : r[3]) : (r[3] = 1), r
        );
      }
      let A = (e, t, n) => (0 === n ? e : e / 100);
      function T(e, t) {
        let n = t || 255;
        return e > n ? n : e < 0 ? 0 : e;
      }
      class N {
        constructor(e) {
          function t(t) {
            return t[0] in e && t[1] in e && t[2] in e;
          }
          if (
            (O(this, "isValid", !0),
            O(this, "r", 0),
            O(this, "g", 0),
            O(this, "b", 0),
            O(this, "a", 1),
            O(this, "_h", void 0),
            O(this, "_s", void 0),
            O(this, "_l", void 0),
            O(this, "_v", void 0),
            O(this, "_max", void 0),
            O(this, "_min", void 0),
            O(this, "_brightness", void 0),
            e)
          ) {
            if ("string" == typeof e) {
              let t = e.trim();
              function n(e) {
                return t.startsWith(e);
              }
              /^#?[A-F\d]{3,8}$/i.test(t)
                ? this.fromHexString(t)
                : n("rgb")
                ? this.fromRgbString(t)
                : n("hsl")
                ? this.fromHslString(t)
                : (n("hsv") || n("hsb")) && this.fromHsvString(t);
            } else if (e instanceof N)
              (this.r = e.r),
                (this.g = e.g),
                (this.b = e.b),
                (this.a = e.a),
                (this._h = e._h),
                (this._s = e._s),
                (this._l = e._l),
                (this._v = e._v);
            else if (t("rgb"))
              (this.r = T(e.r)),
                (this.g = T(e.g)),
                (this.b = T(e.b)),
                (this.a = "number" == typeof e.a ? T(e.a, 1) : 1);
            else if (t("hsl")) this.fromHsl(e);
            else if (t("hsv")) this.fromHsv(e);
            else
              throw Error(
                "@ant-design/fast-color: unsupported input " + JSON.stringify(e)
              );
          }
        }
        setR(e) {
          return this._sc("r", e);
        }
        setG(e) {
          return this._sc("g", e);
        }
        setB(e) {
          return this._sc("b", e);
        }
        setA(e) {
          return this._sc("a", e, 1);
        }
        setHue(e) {
          let t = this.toHsv();
          return (t.h = e), this._c(t);
        }
        getLuminance() {
          function e(e) {
            let t = e / 255;
            return t <= 0.03928
              ? t / 12.92
              : Math.pow((t + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * e(this.r) + 0.7152 * e(this.g) + 0.0722 * e(this.b);
        }
        getHue() {
          if (void 0 === this._h) {
            let e = this.getMax() - this.getMin();
            0 === e
              ? (this._h = 0)
              : (this._h = F(
                  60 *
                    (this.r === this.getMax()
                      ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0)
                      : this.g === this.getMax()
                      ? (this.b - this.r) / e + 2
                      : (this.r - this.g) / e + 4)
                ));
          }
          return this._h;
        }
        getSaturation() {
          if (void 0 === this._s) {
            let e = this.getMax() - this.getMin();
            0 === e ? (this._s = 0) : (this._s = e / this.getMax());
          }
          return this._s;
        }
        getLightness() {
          return (
            void 0 === this._l &&
              (this._l = (this.getMax() + this.getMin()) / 510),
            this._l
          );
        }
        getValue() {
          return void 0 === this._v && (this._v = this.getMax() / 255), this._v;
        }
        getBrightness() {
          return (
            void 0 === this._brightness &&
              (this._brightness =
                (299 * this.r + 587 * this.g + 114 * this.b) / 1e3),
            this._brightness
          );
        }
        darken(e = 10) {
          let t = this.getHue(),
            n = this.getSaturation(),
            r = this.getLightness() - e / 100;
          return r < 0 && (r = 0), this._c({ h: t, s: n, l: r, a: this.a });
        }
        lighten(e = 10) {
          let t = this.getHue(),
            n = this.getSaturation(),
            r = this.getLightness() + e / 100;
          return r > 1 && (r = 1), this._c({ h: t, s: n, l: r, a: this.a });
        }
        mix(e, t = 50) {
          let n = this._c(e),
            r = t / 100,
            o = (e) => (n[e] - this[e]) * r + this[e],
            i = {
              r: F(o("r")),
              g: F(o("g")),
              b: F(o("b")),
              a: F(100 * o("a")) / 100,
            };
          return this._c(i);
        }
        tint(e = 10) {
          return this.mix({ r: 255, g: 255, b: 255, a: 1 }, e);
        }
        shade(e = 10) {
          return this.mix({ r: 0, g: 0, b: 0, a: 1 }, e);
        }
        onBackground(e) {
          let t = this._c(e),
            n = this.a + t.a * (1 - this.a),
            r = (e) => F((this[e] * this.a + t[e] * t.a * (1 - this.a)) / n);
          return this._c({ r: r("r"), g: r("g"), b: r("b"), a: n });
        }
        isDark() {
          return 128 > this.getBrightness();
        }
        isLight() {
          return this.getBrightness() >= 128;
        }
        equals(e) {
          return (
            this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a
          );
        }
        clone() {
          return this._c(this);
        }
        toHexString() {
          let e = "#",
            t = (this.r || 0).toString(16);
          e += 2 === t.length ? t : "0" + t;
          let n = (this.g || 0).toString(16);
          e += 2 === n.length ? n : "0" + n;
          let r = (this.b || 0).toString(16);
          if (
            ((e += 2 === r.length ? r : "0" + r),
            "number" == typeof this.a && this.a >= 0 && this.a < 1)
          ) {
            let t = F(255 * this.a).toString(16);
            e += 2 === t.length ? t : "0" + t;
          }
          return e;
        }
        toHsl() {
          return {
            h: this.getHue(),
            s: this.getSaturation(),
            l: this.getLightness(),
            a: this.a,
          };
        }
        toHslString() {
          let e = this.getHue(),
            t = F(100 * this.getSaturation()),
            n = F(100 * this.getLightness());
          return 1 !== this.a
            ? `hsla(${e},${t}%,${n}%,${this.a})`
            : `hsl(${e},${t}%,${n}%)`;
        }
        toHsv() {
          return {
            h: this.getHue(),
            s: this.getSaturation(),
            v: this.getValue(),
            a: this.a,
          };
        }
        toRgb() {
          return { r: this.r, g: this.g, b: this.b, a: this.a };
        }
        toRgbString() {
          return 1 !== this.a
            ? `rgba(${this.r},${this.g},${this.b},${this.a})`
            : `rgb(${this.r},${this.g},${this.b})`;
        }
        toString() {
          return this.toRgbString();
        }
        _sc(e, t, n) {
          let r = this.clone();
          return (r[e] = T(t, n)), r;
        }
        _c(e) {
          return new this.constructor(e);
        }
        getMax() {
          return (
            void 0 === this._max &&
              (this._max = Math.max(this.r, this.g, this.b)),
            this._max
          );
        }
        getMin() {
          return (
            void 0 === this._min &&
              (this._min = Math.min(this.r, this.g, this.b)),
            this._min
          );
        }
        fromHexString(e) {
          let t = e.replace("#", "");
          function n(e, n) {
            return parseInt(t[e] + t[n || e], 16);
          }
          t.length < 6
            ? ((this.r = n(0)),
              (this.g = n(1)),
              (this.b = n(2)),
              (this.a = t[3] ? n(3) / 255 : 1))
            : ((this.r = n(0, 1)),
              (this.g = n(2, 3)),
              (this.b = n(4, 5)),
              (this.a = t[6] ? n(6, 7) / 255 : 1));
        }
        fromHsl({ h: e, s: t, l: n, a: r }) {
          if (
            ((this._h = e % 360),
            (this._s = t),
            (this._l = n),
            (this.a = "number" == typeof r ? r : 1),
            t <= 0)
          ) {
            let e = F(255 * n);
            (this.r = e), (this.g = e), (this.b = e);
          }
          let o = 0,
            i = 0,
            a = 0,
            c = e / 60,
            l = (1 - Math.abs(2 * n - 1)) * t,
            s = l * (1 - Math.abs((c % 2) - 1));
          c >= 0 && c < 1
            ? ((o = l), (i = s))
            : c >= 1 && c < 2
            ? ((o = s), (i = l))
            : c >= 2 && c < 3
            ? ((i = l), (a = s))
            : c >= 3 && c < 4
            ? ((i = s), (a = l))
            : c >= 4 && c < 5
            ? ((o = s), (a = l))
            : c >= 5 && c < 6 && ((o = l), (a = s));
          let u = n - l / 2;
          (this.r = F((o + u) * 255)),
            (this.g = F((i + u) * 255)),
            (this.b = F((a + u) * 255));
        }
        fromHsv({ h: e, s: t, v: n, a: r }) {
          (this._h = e % 360),
            (this._s = t),
            (this._v = n),
            (this.a = "number" == typeof r ? r : 1);
          let o = F(255 * n);
          if (((this.r = o), (this.g = o), (this.b = o), t <= 0)) return;
          let i = e / 60,
            a = Math.floor(i),
            c = i - a,
            l = F(n * (1 - t) * 255),
            s = F(n * (1 - t * c) * 255),
            u = F(n * (1 - t * (1 - c)) * 255);
          switch (a) {
            case 0:
              (this.g = u), (this.b = l);
              break;
            case 1:
              (this.r = s), (this.b = l);
              break;
            case 2:
              (this.r = l), (this.b = u);
              break;
            case 3:
              (this.r = l), (this.g = s);
              break;
            case 4:
              (this.r = u), (this.g = l);
              break;
            default:
              (this.g = l), (this.b = s);
          }
        }
        fromHsvString(e) {
          let t = j(e, A);
          this.fromHsv({ h: t[0], s: t[1], v: t[2], a: t[3] });
        }
        fromHslString(e) {
          let t = j(e, A);
          this.fromHsl({ h: t[0], s: t[1], l: t[2], a: t[3] });
        }
        fromRgbString(e) {
          let t = j(e, (e, t) => (t.includes("%") ? F((e / 100) * 255) : e));
          (this.r = t[0]), (this.g = t[1]), (this.b = t[2]), (this.a = t[3]);
        }
      }
      var _ = [
        { index: 7, amount: 15 },
        { index: 6, amount: 25 },
        { index: 5, amount: 30 },
        { index: 5, amount: 45 },
        { index: 5, amount: 65 },
        { index: 5, amount: 85 },
        { index: 4, amount: 90 },
        { index: 3, amount: 95 },
        { index: 2, amount: 97 },
        { index: 1, amount: 98 },
      ];
      function H(e, t, n) {
        var r;
        return (
          (r =
            Math.round(e.h) >= 60 && 240 >= Math.round(e.h)
              ? n
                ? Math.round(e.h) - 2 * t
                : Math.round(e.h) + 2 * t
              : n
              ? Math.round(e.h) + 2 * t
              : Math.round(e.h) - 2 * t) < 0
            ? (r += 360)
            : r >= 360 && (r -= 360),
          r
        );
      }
      function z(e, t, n) {
        var r;
        return 0 === e.h && 0 === e.s
          ? e.s
          : ((r = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) >
              1 && (r = 1),
            n && 5 === t && r > 0.1 && (r = 0.1),
            r < 0.06 && (r = 0.06),
            Math.round(100 * r) / 100);
      }
      function L(e, t, n) {
        return (
          Math.round(
            100 * Math.max(0, Math.min(1, n ? e.v + 0.05 * t : e.v - 0.15 * t))
          ) / 100
        );
      }
      function D(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = [],
            r = new N(e),
            o = r.toHsv(),
            i = 5;
          i > 0;
          i -= 1
        ) {
          var a = new N({ h: H(o, i, !0), s: z(o, i, !0), v: L(o, i, !0) });
          n.push(a);
        }
        n.push(r);
        for (var c = 1; c <= 4; c += 1) {
          var l = new N({ h: H(o, c), s: z(o, c), v: L(o, c) });
          n.push(l);
        }
        return "dark" === t.theme
          ? _.map(function (e) {
              var r = e.index,
                o = e.amount;
              return new N(t.backgroundColor || "#141414")
                .mix(n[r], o)
                .toHexString();
            })
          : n.map(function (e) {
              return e.toHexString();
            });
      }
      var B = {
          red: "#F5222D",
          volcano: "#FA541C",
          orange: "#FA8C16",
          gold: "#FAAD14",
          yellow: "#FADB14",
          lime: "#A0D911",
          green: "#52C41A",
          cyan: "#13C2C2",
          blue: "#1677FF",
          geekblue: "#2F54EB",
          purple: "#722ED1",
          magenta: "#EB2F96",
          grey: "#666666",
        },
        V = [
          "#fff1f0",
          "#ffccc7",
          "#ffa39e",
          "#ff7875",
          "#ff4d4f",
          "#f5222d",
          "#cf1322",
          "#a8071a",
          "#820014",
          "#5c0011",
        ];
      V.primary = V[5];
      var W = [
        "#fff2e8",
        "#ffd8bf",
        "#ffbb96",
        "#ff9c6e",
        "#ff7a45",
        "#fa541c",
        "#d4380d",
        "#ad2102",
        "#871400",
        "#610b00",
      ];
      W.primary = W[5];
      var q = [
        "#fff7e6",
        "#ffe7ba",
        "#ffd591",
        "#ffc069",
        "#ffa940",
        "#fa8c16",
        "#d46b08",
        "#ad4e00",
        "#873800",
        "#612500",
      ];
      q.primary = q[5];
      var U = [
        "#fffbe6",
        "#fff1b8",
        "#ffe58f",
        "#ffd666",
        "#ffc53d",
        "#faad14",
        "#d48806",
        "#ad6800",
        "#874d00",
        "#613400",
      ];
      U.primary = U[5];
      var X = [
        "#feffe6",
        "#ffffb8",
        "#fffb8f",
        "#fff566",
        "#ffec3d",
        "#fadb14",
        "#d4b106",
        "#ad8b00",
        "#876800",
        "#614700",
      ];
      X.primary = X[5];
      var $ = [
        "#fcffe6",
        "#f4ffb8",
        "#eaff8f",
        "#d3f261",
        "#bae637",
        "#a0d911",
        "#7cb305",
        "#5b8c00",
        "#3f6600",
        "#254000",
      ];
      $.primary = $[5];
      var K = [
        "#f6ffed",
        "#d9f7be",
        "#b7eb8f",
        "#95de64",
        "#73d13d",
        "#52c41a",
        "#389e0d",
        "#237804",
        "#135200",
        "#092b00",
      ];
      K.primary = K[5];
      var G = [
        "#e6fffb",
        "#b5f5ec",
        "#87e8de",
        "#5cdbd3",
        "#36cfc9",
        "#13c2c2",
        "#08979c",
        "#006d75",
        "#00474f",
        "#002329",
      ];
      G.primary = G[5];
      var Y = [
        "#e6f4ff",
        "#bae0ff",
        "#91caff",
        "#69b1ff",
        "#4096ff",
        "#1677ff",
        "#0958d9",
        "#003eb3",
        "#002c8c",
        "#001d66",
      ];
      Y.primary = Y[5];
      var Q = [
        "#f0f5ff",
        "#d6e4ff",
        "#adc6ff",
        "#85a5ff",
        "#597ef7",
        "#2f54eb",
        "#1d39c4",
        "#10239e",
        "#061178",
        "#030852",
      ];
      Q.primary = Q[5];
      var Z = [
        "#f9f0ff",
        "#efdbff",
        "#d3adf7",
        "#b37feb",
        "#9254de",
        "#722ed1",
        "#531dab",
        "#391085",
        "#22075e",
        "#120338",
      ];
      Z.primary = Z[5];
      var J = [
        "#fff0f6",
        "#ffd6e7",
        "#ffadd2",
        "#ff85c0",
        "#f759ab",
        "#eb2f96",
        "#c41d7f",
        "#9e1068",
        "#780650",
        "#520339",
      ];
      J.primary = J[5];
      var ee = [
        "#a6a6a6",
        "#999999",
        "#8c8c8c",
        "#808080",
        "#737373",
        "#666666",
        "#404040",
        "#1a1a1a",
        "#000000",
        "#000000",
      ];
      ee.primary = ee[5];
      var et = {
          red: V,
          volcano: W,
          orange: q,
          gold: U,
          yellow: X,
          lime: $,
          green: K,
          cyan: G,
          blue: Y,
          geekblue: Q,
          purple: Z,
          magenta: J,
          grey: ee,
        },
        en = [
          "#2a1215",
          "#431418",
          "#58181c",
          "#791a1f",
          "#a61d24",
          "#d32029",
          "#e84749",
          "#f37370",
          "#f89f9a",
          "#fac8c3",
        ];
      en.primary = en[5];
      var er = [
        "#2b1611",
        "#441d12",
        "#592716",
        "#7c3118",
        "#aa3e19",
        "#d84a1b",
        "#e87040",
        "#f3956a",
        "#f8b692",
        "#fad4bc",
      ];
      er.primary = er[5];
      var eo = [
        "#2b1d11",
        "#442a11",
        "#593815",
        "#7c4a15",
        "#aa6215",
        "#d87a16",
        "#e89a3c",
        "#f3b765",
        "#f8cf8d",
        "#fae3b7",
      ];
      eo.primary = eo[5];
      var ei = [
        "#2b2111",
        "#443111",
        "#594214",
        "#7c5914",
        "#aa7714",
        "#d89614",
        "#e8b339",
        "#f3cc62",
        "#f8df8b",
        "#faedb5",
      ];
      ei.primary = ei[5];
      var ea = [
        "#2b2611",
        "#443b11",
        "#595014",
        "#7c6e14",
        "#aa9514",
        "#d8bd14",
        "#e8d639",
        "#f3ea62",
        "#f8f48b",
        "#fafab5",
      ];
      ea.primary = ea[5];
      var ec = [
        "#1f2611",
        "#2e3c10",
        "#3e4f13",
        "#536d13",
        "#6f9412",
        "#8bbb11",
        "#a9d134",
        "#c9e75d",
        "#e4f88b",
        "#f0fab5",
      ];
      ec.primary = ec[5];
      var el = [
        "#162312",
        "#1d3712",
        "#274916",
        "#306317",
        "#3c8618",
        "#49aa19",
        "#6abe39",
        "#8fd460",
        "#b2e58b",
        "#d5f2bb",
      ];
      el.primary = el[5];
      var es = [
        "#112123",
        "#113536",
        "#144848",
        "#146262",
        "#138585",
        "#13a8a8",
        "#33bcb7",
        "#58d1c9",
        "#84e2d8",
        "#b2f1e8",
      ];
      es.primary = es[5];
      var eu = [
        "#111a2c",
        "#112545",
        "#15325b",
        "#15417e",
        "#1554ad",
        "#1668dc",
        "#3c89e8",
        "#65a9f3",
        "#8dc5f8",
        "#b7dcfa",
      ];
      eu.primary = eu[5];
      var ed = [
        "#131629",
        "#161d40",
        "#1c2755",
        "#203175",
        "#263ea0",
        "#2b4acb",
        "#5273e0",
        "#7f9ef3",
        "#a8c1f8",
        "#d2e0fa",
      ];
      ed.primary = ed[5];
      var ef = [
        "#1a1325",
        "#24163a",
        "#301c4d",
        "#3e2069",
        "#51258f",
        "#642ab5",
        "#854eca",
        "#ab7ae0",
        "#cda8f0",
        "#ebd7fa",
      ];
      ef.primary = ef[5];
      var ep = [
        "#291321",
        "#40162f",
        "#551c3b",
        "#75204f",
        "#a02669",
        "#cb2b83",
        "#e0529c",
        "#f37fb7",
        "#f8a8cc",
        "#fad2e3",
      ];
      ep.primary = ep[5];
      var eh = [
        "#151515",
        "#1f1f1f",
        "#2d2d2d",
        "#393939",
        "#494949",
        "#5a5a5a",
        "#6a6a6a",
        "#7b7b7b",
        "#888888",
        "#969696",
      ];
      eh.primary = eh[5];
      var em = (0, g.createContext)({});
      function eg(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ev(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eg(Object(n), !0).forEach(function (t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eg(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function eb() {
        return !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        );
      }
      var ey = "data-rc-order",
        ex = "data-rc-priority",
        ew = new Map();
      function eE() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.mark;
        return t
          ? t.startsWith("data-")
            ? t
            : "data-".concat(t)
          : "rc-util-key";
      }
      function eS(e) {
        return e.attachTo
          ? e.attachTo
          : document.querySelector("head") || document.body;
      }
      function eC(e) {
        return Array.from((ew.get(e) || e).children).filter(function (e) {
          return "STYLE" === e.tagName;
        });
      }
      function ek(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!eb()) return null;
        var n = t.csp,
          r = t.prepend,
          o = t.priority,
          i = void 0 === o ? 0 : o,
          a = "queue" === r ? "prependQueue" : r ? "prepend" : "append",
          c = "prependQueue" === a,
          l = document.createElement("style");
        l.setAttribute(ey, a),
          c && i && l.setAttribute(ex, "".concat(i)),
          null != n && n.nonce && (l.nonce = null == n ? void 0 : n.nonce),
          (l.innerHTML = e);
        var s = eS(t),
          u = s.firstChild;
        if (r) {
          if (c) {
            var d = (t.styles || eC(s)).filter(function (e) {
              return (
                !!["prepend", "prependQueue"].includes(e.getAttribute(ey)) &&
                i >= Number(e.getAttribute(ex) || 0)
              );
            });
            if (d.length)
              return s.insertBefore(l, d[d.length - 1].nextSibling), l;
          }
          s.insertBefore(l, u);
        } else s.appendChild(l);
        return l;
      }
      function eM(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = eS(t);
        return (t.styles || eC(n)).find(function (n) {
          return n.getAttribute(eE(t)) === e;
        });
      }
      function eO(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = eM(e, t);
        n && eS(t).removeChild(n);
      }
      function eR(e, t) {
        var n,
          r,
          o,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = eS(i),
          c = eC(a),
          l = ev(ev({}, i), {}, { styles: c });
        !(function (e, t) {
          var n = ew.get(e);
          if (
            !n ||
            !(function (e, t) {
              if (!e) return !1;
              if (e.contains) return e.contains(t);
              for (var n = t; n; ) {
                if (n === e) return !0;
                n = n.parentNode;
              }
              return !1;
            })(document, n)
          ) {
            var r = ek("", t),
              o = r.parentNode;
            ew.set(e, o), e.removeChild(r);
          }
        })(a, l);
        var s = eM(t, l);
        if (s)
          return (
            null !== (n = l.csp) &&
              void 0 !== n &&
              n.nonce &&
              s.nonce !==
                (null === (r = l.csp) || void 0 === r ? void 0 : r.nonce) &&
              (s.nonce =
                null === (o = l.csp) || void 0 === o ? void 0 : o.nonce),
            s.innerHTML !== e && (s.innerHTML = e),
            s
          );
        var u = ek(e, l);
        return u.setAttribute(eE(l), t), u;
      }
      function eI(e) {
        var t;
        return null == e || null === (t = e.getRootNode) || void 0 === t
          ? void 0
          : t.call(e);
      }
      function eP(e) {
        return eI(e) instanceof ShadowRoot ? eI(e) : null;
      }
      var eF = {},
        ej = [];
      function eA(e, t) {}
      function eT(e, t) {}
      function eN(e, t, n) {
        t || eF[n] || (e(!1, n), (eF[n] = !0));
      }
      function e_(e, t) {
        eN(eA, e, t);
      }
      function eH(e) {
        return (
          "object" === k(e) &&
          "string" == typeof e.name &&
          "string" == typeof e.theme &&
          ("object" === k(e.icon) || "function" == typeof e.icon)
        );
      }
      function ez() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce(function (t, n) {
          var r = e[n];
          return (
            "class" === n
              ? ((t.className = r), delete t.class)
              : (delete t[n],
                (t[
                  n.replace(/-(.)/g, function (e, t) {
                    return t.toUpperCase();
                  })
                ] = r)),
            t
          );
        }, {});
      }
      function eL(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      (e_.preMessage = function (e) {
        ej.push(e);
      }),
        (e_.resetWarned = function () {
          eF = {};
        }),
        (e_.noteOnce = function (e, t) {
          eN(eT, e, t);
        });
      var eD = function (e) {
          var t = (0, g.useContext)(em),
            n = t.csp,
            r = t.prefixCls,
            o =
              "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
          r && (o = o.replace(/anticon/g, r)),
            (0, g.useEffect)(function () {
              var t = eP(e.current);
              eR(o, "@ant-design-icons", { prepend: !0, csp: n, attachTo: t });
            }, []);
        },
        eB = [
          "icon",
          "className",
          "onClick",
          "style",
          "primaryColor",
          "secondaryColor",
        ],
        eV = {
          primaryColor: "#333",
          secondaryColor: "#E6E6E6",
          calculated: !1,
        },
        eW = function (e) {
          var t,
            n,
            r = e.icon,
            o = e.className,
            i = e.onClick,
            a = e.style,
            c = e.primaryColor,
            l = e.secondaryColor,
            s = R(e, eB),
            u = g.useRef(),
            d = eV;
          if (
            (c && (d = { primaryColor: c, secondaryColor: l || D(c)[0] }),
            eD(u),
            (t = eH(r)),
            (n = "icon should be icon definiton, but got ".concat(r)),
            e_(t, "[@ant-design/icons] ".concat(n)),
            !eH(r))
          )
            return null;
          var f = r;
          return (
            f &&
              "function" == typeof f.icon &&
              (f = ev(
                ev({}, f),
                {},
                { icon: f.icon(d.primaryColor, d.secondaryColor) }
              )),
            (function e(t, n, r) {
              return r
                ? g.createElement(
                    t.tag,
                    ev(ev({ key: n }, ez(t.attrs)), r),
                    (t.children || []).map(function (r, o) {
                      return e(
                        r,
                        "".concat(n, "-").concat(t.tag, "-").concat(o)
                      );
                    })
                  )
                : g.createElement(
                    t.tag,
                    ev({ key: n }, ez(t.attrs)),
                    (t.children || []).map(function (r, o) {
                      return e(
                        r,
                        "".concat(n, "-").concat(t.tag, "-").concat(o)
                      );
                    })
                  );
            })(
              f.icon,
              "svg-".concat(f.name),
              ev(
                ev(
                  {
                    className: o,
                    onClick: i,
                    style: a,
                    "data-icon": f.name,
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    "aria-hidden": "true",
                  },
                  s
                ),
                {},
                { ref: u }
              )
            )
          );
        };
      function eq(e) {
        var t = C(eL(e), 2),
          n = t[0],
          r = t[1];
        return eW.setTwoToneColors({ primaryColor: n, secondaryColor: r });
      }
      (eW.displayName = "IconReact"),
        (eW.getTwoToneColors = function () {
          return ev({}, eV);
        }),
        (eW.setTwoToneColors = function (e) {
          var t = e.primaryColor,
            n = e.secondaryColor;
          (eV.primaryColor = t),
            (eV.secondaryColor = n || D(t)[0]),
            (eV.calculated = !!n);
        });
      var eU = [
        "className",
        "icon",
        "spin",
        "rotate",
        "tabIndex",
        "onClick",
        "twoToneColor",
      ];
      eq(Y.primary);
      var eX = g.forwardRef(function (e, t) {
        var n = e.className,
          r = e.icon,
          o = e.spin,
          i = e.rotate,
          a = e.tabIndex,
          c = e.onClick,
          l = e.twoToneColor,
          s = R(e, eU),
          u = g.useContext(em),
          d = u.prefixCls,
          f = void 0 === d ? "anticon" : d,
          p = u.rootClassName,
          h = P()(
            p,
            f,
            O(
              O({}, "".concat(f, "-").concat(r.name), !!r.name),
              "".concat(f, "-spin"),
              !!o || "loading" === r.name
            ),
            n
          ),
          m = a;
        void 0 === m && c && (m = -1);
        var v = C(eL(l), 2),
          y = v[0],
          x = v[1];
        return g.createElement(
          "span",
          b({ role: "img", "aria-label": r.name }, s, {
            ref: t,
            tabIndex: m,
            onClick: c,
            className: h,
          }),
          g.createElement(eW, {
            icon: r,
            primaryColor: y,
            secondaryColor: x,
            style: i
              ? {
                  msTransform: "rotate(".concat(i, "deg)"),
                  transform: "rotate(".concat(i, "deg)"),
                }
              : void 0,
          })
        );
      });
      (eX.displayName = "AntdIcon"),
        (eX.getTwoToneColor = function () {
          var e = eW.getTwoToneColors();
          return e.calculated
            ? [e.primaryColor, e.secondaryColor]
            : e.primaryColor;
        }),
        (eX.setTwoToneColor = eq);
      var e$ = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: y }));
        }),
        eK = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z",
                },
              },
            ],
          },
          name: "double-right",
          theme: "outlined",
        },
        eG = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: eK }));
        }),
        eY = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
                },
              },
            ],
          },
          name: "left",
          theme: "outlined",
        },
        eQ = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: eY }));
        }),
        eZ = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
                },
              },
            ],
          },
          name: "right",
          theme: "outlined",
        },
        eJ = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: eZ }));
        });
      function e0(e) {
        var t = g.useRef();
        return (
          (t.current = e),
          g.useCallback(function () {
            for (var e, n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return null === (e = t.current) || void 0 === e
              ? void 0
              : e.call.apply(e, [t].concat(r));
          }, [])
        );
      }
      var e1 = eb() ? g.useLayoutEffect : g.useEffect,
        e2 = function (e, t) {
          var n = g.useRef(!0);
          e1(function () {
            return e(n.current);
          }, t),
            e1(function () {
              return (
                (n.current = !1),
                function () {
                  n.current = !0;
                }
              );
            }, []);
        },
        e5 = function (e, t) {
          e2(function (t) {
            if (!t) return e();
          }, t);
        };
      function e6(e) {
        var t = g.useRef(!1),
          n = C(g.useState(e), 2),
          r = n[0],
          o = n[1];
        return (
          g.useEffect(function () {
            return (
              (t.current = !1),
              function () {
                t.current = !0;
              }
            );
          }, []),
          [
            r,
            function (e, n) {
              (n && t.current) || o(e);
            },
          ]
        );
      }
      function e3(e) {
        return void 0 !== e;
      }
      function e4(e, t) {
        var n = t || {},
          r = n.defaultValue,
          o = n.value,
          i = n.onChange,
          a = n.postState,
          c = C(
            e6(function () {
              return e3(o)
                ? o
                : e3(r)
                ? "function" == typeof r
                  ? r()
                  : r
                : "function" == typeof e
                ? e()
                : e;
            }),
            2
          ),
          l = c[0],
          s = c[1],
          u = void 0 !== o ? o : l,
          d = a ? a(u) : u,
          f = e0(i),
          p = C(e6([u]), 2),
          h = p[0],
          m = p[1];
        return (
          e5(
            function () {
              var e = h[0];
              l !== e && f(l, e);
            },
            [h]
          ),
          e5(
            function () {
              e3(o) || s(o);
            },
            [o]
          ),
          [
            d,
            e0(function (e, t) {
              s(e, t), m([u], t);
            }),
          ]
        );
      }
      var e9 = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (e) {
            var t = e.keyCode;
            if (
              (e.altKey && !e.ctrlKey) ||
              e.metaKey ||
              (t >= e9.F1 && t <= e9.F12)
            )
              return !1;
            switch (t) {
              case e9.ALT:
              case e9.CAPS_LOCK:
              case e9.CONTEXT_MENU:
              case e9.CTRL:
              case e9.DOWN:
              case e9.END:
              case e9.ESC:
              case e9.HOME:
              case e9.INSERT:
              case e9.LEFT:
              case e9.MAC_FF_META:
              case e9.META:
              case e9.NUMLOCK:
              case e9.NUM_CENTER:
              case e9.PAGE_DOWN:
              case e9.PAGE_UP:
              case e9.PAUSE:
              case e9.PRINT_SCREEN:
              case e9.RIGHT:
              case e9.SHIFT:
              case e9.UP:
              case e9.WIN_KEY:
              case e9.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function (e) {
            if (
              (e >= e9.ZERO && e <= e9.NINE) ||
              (e >= e9.NUM_ZERO && e <= e9.NUM_MULTIPLY) ||
              (e >= e9.A && e <= e9.Z) ||
              (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            )
              return !0;
            switch (e) {
              case e9.SPACE:
              case e9.QUESTION_MARK:
              case e9.NUM_PLUS:
              case e9.NUM_MINUS:
              case e9.NUM_PERIOD:
              case e9.NUM_DIVISION:
              case e9.SEMICOLON:
              case e9.DASH:
              case e9.EQUALS:
              case e9.COMMA:
              case e9.PERIOD:
              case e9.SLASH:
              case e9.APOSTROPHE:
              case e9.SINGLE_QUOTE:
              case e9.OPEN_SQUARE_BRACKET:
              case e9.BACKSLASH:
              case e9.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        e8 = ""
          .concat(
            "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap",
            " "
          )
          .concat(
            "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError"
          )
          .split(/[\s\n]+/);
      function e7(e, t) {
        return 0 === e.indexOf(t);
      }
      function te(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t =
          !1 === n
            ? { aria: !0, data: !0, attr: !0 }
            : !0 === n
            ? { aria: !0 }
            : ev({}, n);
        var r = {};
        return (
          Object.keys(e).forEach(function (n) {
            ((t.aria && ("role" === n || e7(n, "aria-"))) ||
              (t.data && e7(n, "data-")) ||
              (t.attr && e8.includes(n))) &&
              (r[n] = e[n]);
          }),
          r
        );
      }
      var tt = {
          items_per_page: "条/页",
          jump_to: "跳至",
          jump_to_confirm: "确定",
          page: "页",
          prev_page: "上一页",
          next_page: "下一页",
          prev_5: "向前 5 页",
          next_5: "向后 5 页",
          prev_3: "向前 3 页",
          next_3: "向后 3 页",
          page_size: "页码",
        },
        tn = [10, 20, 50, 100],
        tr = function (e) {
          var t = e.pageSizeOptions,
            n = void 0 === t ? tn : t,
            r = e.locale,
            o = e.changeSize,
            i = e.pageSize,
            a = e.goButton,
            c = e.quickGo,
            l = e.rootPrefixCls,
            s = e.disabled,
            u = e.buildOptionText,
            d = e.showSizeChanger,
            f = e.sizeChangerRender,
            p = C(g.useState(""), 2),
            h = p[0],
            m = p[1],
            v = function () {
              return !h || Number.isNaN(h) ? void 0 : Number(h);
            },
            b =
              "function" == typeof u
                ? u
                : function (e) {
                    return "".concat(e, " ").concat(r.items_per_page);
                  },
            y = function (e) {
              "" !== h &&
                (e.keyCode === e9.ENTER || "click" === e.type) &&
                (m(""), null == c || c(v()));
            },
            x = "".concat(l, "-options");
          if (!d && !c) return null;
          var w = null,
            E = null,
            S = null;
          return (
            d &&
              f &&
              (w = f({
                disabled: s,
                size: i,
                onSizeChange: function (e) {
                  null == o || o(Number(e));
                },
                "aria-label": r.page_size,
                className: "".concat(x, "-size-changer"),
                options: (n.some(function (e) {
                  return e.toString() === i.toString();
                })
                  ? n
                  : n.concat([i]).sort(function (e, t) {
                      return (
                        (Number.isNaN(Number(e)) ? 0 : Number(e)) -
                        (Number.isNaN(Number(t)) ? 0 : Number(t))
                      );
                    })
                ).map(function (e) {
                  return { label: b(e), value: e };
                }),
              })),
            c &&
              (a &&
                (S =
                  "boolean" == typeof a
                    ? g.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: y,
                          onKeyUp: y,
                          disabled: s,
                          className: "".concat(x, "-quick-jumper-button"),
                        },
                        r.jump_to_confirm
                      )
                    : g.createElement("span", { onClick: y, onKeyUp: y }, a)),
              (E = g.createElement(
                "div",
                { className: "".concat(x, "-quick-jumper") },
                r.jump_to,
                g.createElement("input", {
                  disabled: s,
                  type: "text",
                  value: h,
                  onChange: function (e) {
                    m(e.target.value);
                  },
                  onKeyUp: y,
                  onBlur: function (e) {
                    !a &&
                      "" !== h &&
                      (m(""),
                      (e.relatedTarget &&
                        (e.relatedTarget.className.indexOf(
                          "".concat(l, "-item-link")
                        ) >= 0 ||
                          e.relatedTarget.className.indexOf(
                            "".concat(l, "-item")
                          ) >= 0)) ||
                        null == c ||
                        c(v()));
                  },
                  "aria-label": r.page,
                }),
                r.page,
                S
              ))),
            g.createElement("li", { className: x }, w, E)
          );
        },
        to = function (e) {
          var t,
            n = e.rootPrefixCls,
            r = e.page,
            o = e.active,
            i = e.className,
            a = e.showTitle,
            c = e.onClick,
            l = e.onKeyPress,
            s = e.itemRender,
            u = "".concat(n, "-item"),
            d = P()(
              u,
              "".concat(u, "-").concat(r),
              (O((t = {}), "".concat(u, "-active"), o),
              O(t, "".concat(u, "-disabled"), !r),
              t),
              i
            ),
            f = s(r, "page", g.createElement("a", { rel: "nofollow" }, r));
          return f
            ? g.createElement(
                "li",
                {
                  title: a ? String(r) : null,
                  className: d,
                  onClick: function () {
                    c(r);
                  },
                  onKeyDown: function (e) {
                    l(e, c, r);
                  },
                  tabIndex: 0,
                },
                f
              )
            : null;
        },
        ti = function (e, t, n) {
          return n;
        };
      function ta() {}
      function tc(e) {
        var t = Number(e);
        return (
          "number" == typeof t &&
          !Number.isNaN(t) &&
          isFinite(t) &&
          Math.floor(t) === t
        );
      }
      function tl(e, t, n) {
        return Math.floor((n - 1) / (void 0 === e ? t : e)) + 1;
      }
      var ts = function (e) {
          var t,
            n,
            r,
            o,
            i,
            a = e.prefixCls,
            c = void 0 === a ? "rc-pagination" : a,
            l = e.selectPrefixCls,
            s = e.className,
            u = e.current,
            d = e.defaultCurrent,
            f = e.total,
            p = void 0 === f ? 0 : f,
            h = e.pageSize,
            m = e.defaultPageSize,
            v = e.onChange,
            y = void 0 === v ? ta : v,
            x = e.hideOnSinglePage,
            w = e.align,
            E = e.showPrevNextJumpers,
            S = e.showQuickJumper,
            M = e.showLessItems,
            R = e.showTitle,
            I = void 0 === R || R,
            F = e.onShowSizeChange,
            j = void 0 === F ? ta : F,
            A = e.locale,
            T = void 0 === A ? tt : A,
            N = e.style,
            _ = e.totalBoundaryShowSizeChanger,
            H = e.disabled,
            z = e.simple,
            L = e.showTotal,
            D = e.showSizeChanger,
            B = void 0 === D ? p > (void 0 === _ ? 50 : _) : D,
            V = e.sizeChangerRender,
            W = e.pageSizeOptions,
            q = e.itemRender,
            U = void 0 === q ? ti : q,
            X = e.jumpPrevIcon,
            $ = e.jumpNextIcon,
            K = e.prevIcon,
            G = e.nextIcon,
            Y = g.useRef(null),
            Q = C(e4(10, { value: h, defaultValue: void 0 === m ? 10 : m }), 2),
            Z = Q[0],
            J = Q[1],
            ee = C(
              e4(1, {
                value: u,
                defaultValue: void 0 === d ? 1 : d,
                postState: function (e) {
                  return Math.max(1, Math.min(e, tl(void 0, Z, p)));
                },
              }),
              2
            ),
            et = ee[0],
            en = ee[1],
            er = C(g.useState(et), 2),
            eo = er[0],
            ei = er[1];
          (0, g.useEffect)(
            function () {
              ei(et);
            },
            [et]
          );
          var ea = Math.max(1, et - (M ? 3 : 5)),
            ec = Math.min(tl(void 0, Z, p), et + (M ? 3 : 5));
          function el(t, n) {
            var r =
              t ||
              g.createElement("button", {
                type: "button",
                "aria-label": n,
                className: "".concat(c, "-item-link"),
              });
            return (
              "function" == typeof t && (r = g.createElement(t, ev({}, e))), r
            );
          }
          function es(e) {
            var t = e.target.value,
              n = tl(void 0, Z, p);
            return "" === t
              ? t
              : Number.isNaN(Number(t))
              ? eo
              : t >= n
              ? n
              : Number(t);
          }
          var eu = p > Z && S;
          function ed(e) {
            var t = es(e);
            switch ((t !== eo && ei(t), e.keyCode)) {
              case e9.ENTER:
                ef(t);
                break;
              case e9.UP:
                ef(t - 1);
                break;
              case e9.DOWN:
                ef(t + 1);
            }
          }
          function ef(e) {
            if (tc(e) && e !== et && tc(p) && p > 0 && !H) {
              var t = tl(void 0, Z, p),
                n = e;
              return (
                e > t ? (n = t) : e < 1 && (n = 1),
                n !== eo && ei(n),
                en(n),
                null == y || y(n, Z),
                n
              );
            }
            return et;
          }
          var ep = et > 1,
            eh = et < tl(void 0, Z, p);
          function em() {
            ep && ef(et - 1);
          }
          function eg() {
            eh && ef(et + 1);
          }
          function eb() {
            ef(ea);
          }
          function ey() {
            ef(ec);
          }
          function ex(e, t) {
            if (
              "Enter" === e.key ||
              e.charCode === e9.ENTER ||
              e.keyCode === e9.ENTER
            ) {
              for (
                var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2;
                o < n;
                o++
              )
                r[o - 2] = arguments[o];
              t.apply(void 0, r);
            }
          }
          function ew(e) {
            ("click" === e.type || e.keyCode === e9.ENTER) && ef(eo);
          }
          var eE = null,
            eS = te(e, { aria: !0, data: !0 }),
            eC =
              L &&
              g.createElement(
                "li",
                { className: "".concat(c, "-total-text") },
                L(p, [0 === p ? 0 : (et - 1) * Z + 1, et * Z > p ? p : et * Z])
              ),
            ek = null,
            eM = tl(void 0, Z, p);
          if (x && p <= Z) return null;
          var eO = [],
            eR = {
              rootPrefixCls: c,
              onClick: ef,
              onKeyPress: ex,
              showTitle: I,
              itemRender: U,
              page: -1,
            },
            eI = et - 1 > 0 ? et - 1 : 0,
            eP = et + 1 < eM ? et + 1 : eM,
            eF = S && S.goButton,
            ej = "object" === k(z) ? z.readOnly : !z,
            eA = eF,
            eT = null;
          z &&
            (eF &&
              ((eA =
                "boolean" == typeof eF
                  ? g.createElement(
                      "button",
                      { type: "button", onClick: ew, onKeyUp: ew },
                      T.jump_to_confirm
                    )
                  : g.createElement("span", { onClick: ew, onKeyUp: ew }, eF)),
              (eA = g.createElement(
                "li",
                {
                  title: I
                    ? "".concat(T.jump_to).concat(et, "/").concat(eM)
                    : null,
                  className: "".concat(c, "-simple-pager"),
                },
                eA
              ))),
            (eT = g.createElement(
              "li",
              {
                title: I ? "".concat(et, "/").concat(eM) : null,
                className: "".concat(c, "-simple-pager"),
              },
              ej
                ? eo
                : g.createElement("input", {
                    type: "text",
                    value: eo,
                    disabled: H,
                    onKeyDown: function (e) {
                      (e.keyCode === e9.UP || e.keyCode === e9.DOWN) &&
                        e.preventDefault();
                    },
                    onKeyUp: ed,
                    onChange: ed,
                    onBlur: function (e) {
                      ef(es(e));
                    },
                    size: 3,
                  }),
              g.createElement(
                "span",
                { className: "".concat(c, "-slash") },
                "/"
              ),
              eM
            )));
          var eN = M ? 1 : 2;
          if (eM <= 3 + 2 * eN) {
            eM ||
              eO.push(
                g.createElement(
                  to,
                  b({}, eR, {
                    key: "noPager",
                    page: 1,
                    className: "".concat(c, "-item-disabled"),
                  })
                )
              );
            for (var e_ = 1; e_ <= eM; e_ += 1)
              eO.push(
                g.createElement(
                  to,
                  b({}, eR, { key: e_, page: e_, active: et === e_ })
                )
              );
          } else {
            var eH = M ? T.prev_3 : T.prev_5,
              ez = M ? T.next_3 : T.next_5,
              eL = U(ea, "jump-prev", el(X, "prev page")),
              eD = U(ec, "jump-next", el($, "next page"));
            (void 0 === E || E) &&
              ((eE = eL
                ? g.createElement(
                    "li",
                    {
                      title: I ? eH : null,
                      key: "prev",
                      onClick: eb,
                      tabIndex: 0,
                      onKeyDown: function (e) {
                        ex(e, eb);
                      },
                      className: P()(
                        "".concat(c, "-jump-prev"),
                        O({}, "".concat(c, "-jump-prev-custom-icon"), !!X)
                      ),
                    },
                    eL
                  )
                : null),
              (ek = eD
                ? g.createElement(
                    "li",
                    {
                      title: I ? ez : null,
                      key: "next",
                      onClick: ey,
                      tabIndex: 0,
                      onKeyDown: function (e) {
                        ex(e, ey);
                      },
                      className: P()(
                        "".concat(c, "-jump-next"),
                        O({}, "".concat(c, "-jump-next-custom-icon"), !!$)
                      ),
                    },
                    eD
                  )
                : null));
            var eB = Math.max(1, et - eN),
              eV = Math.min(et + eN, eM);
            et - 1 <= eN && (eV = 1 + 2 * eN),
              eM - et <= eN && (eB = eM - 2 * eN);
            for (var eW = eB; eW <= eV; eW += 1)
              eO.push(
                g.createElement(
                  to,
                  b({}, eR, { key: eW, page: eW, active: et === eW })
                )
              );
            if (
              (et - 1 >= 2 * eN &&
                3 !== et &&
                ((eO[0] = g.cloneElement(eO[0], {
                  className: P()(
                    "".concat(c, "-item-after-jump-prev"),
                    eO[0].props.className
                  ),
                })),
                eO.unshift(eE)),
              eM - et >= 2 * eN && et !== eM - 2)
            ) {
              var eq = eO[eO.length - 1];
              (eO[eO.length - 1] = g.cloneElement(eq, {
                className: P()(
                  "".concat(c, "-item-before-jump-next"),
                  eq.props.className
                ),
              })),
                eO.push(ek);
            }
            1 !== eB &&
              eO.unshift(g.createElement(to, b({}, eR, { key: 1, page: 1 }))),
              eV !== eM &&
                eO.push(g.createElement(to, b({}, eR, { key: eM, page: eM })));
          }
          var eU =
            ((t = U(eI, "prev", el(K, "prev page"))),
            g.isValidElement(t) ? g.cloneElement(t, { disabled: !ep }) : t);
          if (eU) {
            var eX = !ep || !eM;
            eU = g.createElement(
              "li",
              {
                title: I ? T.prev_page : null,
                onClick: em,
                tabIndex: eX ? null : 0,
                onKeyDown: function (e) {
                  ex(e, em);
                },
                className: P()(
                  "".concat(c, "-prev"),
                  O({}, "".concat(c, "-disabled"), eX)
                ),
                "aria-disabled": eX,
              },
              eU
            );
          }
          var e$ =
            ((n = U(eP, "next", el(G, "next page"))),
            g.isValidElement(n) ? g.cloneElement(n, { disabled: !eh }) : n);
          e$ &&
            (z
              ? ((o = !eh), (i = ep ? 0 : null))
              : (i = (o = !eh || !eM) ? null : 0),
            (e$ = g.createElement(
              "li",
              {
                title: I ? T.next_page : null,
                onClick: eg,
                tabIndex: i,
                onKeyDown: function (e) {
                  ex(e, eg);
                },
                className: P()(
                  "".concat(c, "-next"),
                  O({}, "".concat(c, "-disabled"), o)
                ),
                "aria-disabled": o,
              },
              e$
            )));
          var eK = P()(
            c,
            s,
            (O((r = {}), "".concat(c, "-start"), "start" === w),
            O(r, "".concat(c, "-center"), "center" === w),
            O(r, "".concat(c, "-end"), "end" === w),
            O(r, "".concat(c, "-simple"), z),
            O(r, "".concat(c, "-disabled"), H),
            r)
          );
          return g.createElement(
            "ul",
            b({ className: eK, style: N, ref: Y }, eS),
            eC,
            eU,
            z ? eT : eO,
            e$,
            g.createElement(tr, {
              locale: T,
              rootPrefixCls: c,
              disabled: H,
              selectPrefixCls: void 0 === l ? "rc-select" : l,
              changeSize: function (e) {
                var t = tl(e, Z, p),
                  n = et > t && 0 !== t ? t : et;
                J(e), ei(n), null == j || j(et, e), en(n), null == y || y(n, e);
              },
              pageSize: Z,
              pageSizeOptions: W,
              quickGo: eu ? ef : null,
              goButton: eA,
              showSizeChanger: B,
              sizeChangerRender: V,
            })
          );
        },
        tu = {
          items_per_page: "/ page",
          jump_to: "Go to",
          jump_to_confirm: "confirm",
          page: "Page",
          prev_page: "Previous Page",
          next_page: "Next Page",
          prev_5: "Previous 5 Pages",
          next_5: "Next 5 Pages",
          prev_3: "Previous 3 Pages",
          next_3: "Next 3 Pages",
          page_size: "Page Size",
        };
      let td = "anticon",
        tf = ["outlined", "borderless", "filled"],
        tp = g.createContext({
          getPrefixCls: (e, t) =>
            t || (e ? "".concat("ant", "-").concat(e) : "ant"),
          iconPrefixCls: td,
        }),
        { Consumer: th } = tp,
        tm = g.createContext(void 0),
        tg = (e) => {
          let { children: t, size: n } = e,
            r = g.useContext(tm);
          return g.createElement(tm.Provider, { value: n || r }, t);
        };
      var tv = (e) => {
        let t = g.useContext(tm);
        return g.useMemo(
          () =>
            e
              ? "string" == typeof e
                ? null != e
                  ? e
                  : t
                : e instanceof Function
                ? e(t)
                : t
              : t,
          [e, t]
        );
      };
      function tb(e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function ty(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return w(e);
          })(e) ||
          tb(e) ||
          E(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var tx = function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
          (t =
            (65535 &
              (t =
                (255 & e.charCodeAt(r)) |
                ((255 & e.charCodeAt(++r)) << 8) |
                ((255 & e.charCodeAt(++r)) << 16) |
                ((255 & e.charCodeAt(++r)) << 24))) *
              1540483477 +
            (((t >>> 16) * 59797) << 16)),
            (t ^= t >>> 24),
            (n =
              ((65535 & t) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
              ((65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)));
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            (n ^= 255 & e.charCodeAt(r)),
              (n = (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16));
        }
        return (
          (n ^= n >>> 13),
          (
            ((n = (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36)
        );
      };
      function tw(e, t, n) {
        var r = g.useRef({});
        return (
          (!("value" in r.current) || n(r.current.condition, t)) &&
            ((r.current.value = e()), (r.current.condition = t)),
          r.current.value
        );
      }
      var tE = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = new Set();
        return (function e(t, o) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            a = r.has(t);
          if ((e_(!a, "Warning: There may be circular references"), a))
            return !1;
          if (t === o) return !0;
          if (n && i > 1) return !1;
          r.add(t);
          var c = i + 1;
          if (Array.isArray(t)) {
            if (!Array.isArray(o) || t.length !== o.length) return !1;
            for (var l = 0; l < t.length; l++) if (!e(t[l], o[l], c)) return !1;
            return !0;
          }
          if (t && o && "object" === k(t) && "object" === k(o)) {
            var s = Object.keys(t);
            return (
              s.length === Object.keys(o).length &&
              s.every(function (n) {
                return e(t[n], o[n], c);
              })
            );
          }
          return !1;
        })(e, t);
      };
      function tS(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function tC(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, M(r.key), r);
        }
      }
      function tk(e, t, n) {
        return (
          t && tC(e.prototype, t),
          n && tC(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function tM(e) {
        return e.join("%");
      }
      var tO = (function () {
          function e(t) {
            tS(this, e),
              O(this, "instanceId", void 0),
              O(this, "cache", new Map()),
              (this.instanceId = t);
          }
          return (
            tk(e, [
              {
                key: "get",
                value: function (e) {
                  return this.opGet(tM(e));
                },
              },
              {
                key: "opGet",
                value: function (e) {
                  return this.cache.get(e) || null;
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  return this.opUpdate(tM(e), t);
                },
              },
              {
                key: "opUpdate",
                value: function (e, t) {
                  var n = t(this.cache.get(e));
                  null === n ? this.cache.delete(e) : this.cache.set(e, n);
                },
              },
            ]),
            e
          );
        })(),
        tR = "data-token-hash",
        tI = "data-css-hash",
        tP = "__cssinjs_instance__",
        tF = g.createContext({
          hashPriority: "low",
          cache: (function () {
            var e = Math.random().toString(12).slice(2);
            if (
              "undefined" != typeof document &&
              document.head &&
              document.body
            ) {
              var t =
                  document.body.querySelectorAll("style[".concat(tI, "]")) ||
                  [],
                n = document.head.firstChild;
              Array.from(t).forEach(function (t) {
                (t[tP] = t[tP] || e),
                  t[tP] === e && document.head.insertBefore(t, n);
              });
              var r = {};
              Array.from(
                document.querySelectorAll("style[".concat(tI, "]"))
              ).forEach(function (t) {
                var n,
                  o = t.getAttribute(tI);
                r[o]
                  ? t[tP] === e &&
                    (null === (n = t.parentNode) ||
                      void 0 === n ||
                      n.removeChild(t))
                  : (r[o] = !0);
              });
            }
            return new tO(e);
          })(),
          defaultCache: !0,
        }),
        tj = (function () {
          function e() {
            tS(this, e),
              O(this, "cache", void 0),
              O(this, "keys", void 0),
              O(this, "cacheCallTimes", void 0),
              (this.cache = new Map()),
              (this.keys = []),
              (this.cacheCallTimes = 0);
          }
          return (
            tk(e, [
              {
                key: "size",
                value: function () {
                  return this.keys.length;
                },
              },
              {
                key: "internalGet",
                value: function (e) {
                  var t,
                    n,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    o = { map: this.cache };
                  return (
                    e.forEach(function (e) {
                      if (o) {
                        var t;
                        o =
                          null === (t = o) ||
                          void 0 === t ||
                          null === (t = t.map) ||
                          void 0 === t
                            ? void 0
                            : t.get(e);
                      } else o = void 0;
                    }),
                    null !== (t = o) &&
                      void 0 !== t &&
                      t.value &&
                      r &&
                      (o.value[1] = this.cacheCallTimes++),
                    null === (n = o) || void 0 === n ? void 0 : n.value
                  );
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t;
                  return null === (t = this.internalGet(e, !0)) || void 0 === t
                    ? void 0
                    : t[0];
                },
              },
              {
                key: "has",
                value: function (e) {
                  return !!this.internalGet(e);
                },
              },
              {
                key: "set",
                value: function (t, n) {
                  var r = this;
                  if (!this.has(t)) {
                    if (
                      this.size() + 1 >
                      e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET
                    ) {
                      var o = this.keys.reduce(
                          function (e, t) {
                            var n = C(e, 2)[1];
                            return r.internalGet(t)[1] < n
                              ? [t, r.internalGet(t)[1]]
                              : e;
                          },
                          [this.keys[0], this.cacheCallTimes]
                        ),
                        i = C(o, 1)[0];
                      this.delete(i);
                    }
                    this.keys.push(t);
                  }
                  var a = this.cache;
                  t.forEach(function (e, o) {
                    if (o === t.length - 1)
                      a.set(e, { value: [n, r.cacheCallTimes++] });
                    else {
                      var i = a.get(e);
                      i
                        ? i.map || (i.map = new Map())
                        : a.set(e, { map: new Map() }),
                        (a = a.get(e).map);
                    }
                  });
                },
              },
              {
                key: "deleteByPath",
                value: function (e, t) {
                  var n,
                    r = e.get(t[0]);
                  if (1 === t.length)
                    return (
                      r.map ? e.set(t[0], { map: r.map }) : e.delete(t[0]),
                      null === (n = r.value) || void 0 === n ? void 0 : n[0]
                    );
                  var o = this.deleteByPath(r.map, t.slice(1));
                  return (
                    (r.map && 0 !== r.map.size) || r.value || e.delete(t[0]), o
                  );
                },
              },
              {
                key: "delete",
                value: function (e) {
                  if (this.has(e))
                    return (
                      (this.keys = this.keys.filter(function (t) {
                        return !(function (e, t) {
                          if (e.length !== t.length) return !1;
                          for (var n = 0; n < e.length; n++)
                            if (e[n] !== t[n]) return !1;
                          return !0;
                        })(t, e);
                      })),
                      this.deleteByPath(this.cache, e)
                    );
                },
              },
            ]),
            e
          );
        })();
      O(tj, "MAX_CACHE_SIZE", 20), O(tj, "MAX_CACHE_OFFSET", 5);
      var tA = 0,
        tT = (function () {
          function e(t) {
            tS(this, e),
              O(this, "derivatives", void 0),
              O(this, "id", void 0),
              (this.derivatives = Array.isArray(t) ? t : [t]),
              (this.id = tA),
              0 === t.length && t.length,
              (tA += 1);
          }
          return (
            tk(e, [
              {
                key: "getDerivativeToken",
                value: function (e) {
                  return this.derivatives.reduce(function (t, n) {
                    return n(e, t);
                  }, void 0);
                },
              },
            ]),
            e
          );
        })(),
        tN = new tj();
      function t_(e) {
        var t = Array.isArray(e) ? e : [e];
        return tN.has(t) || tN.set(t, new tT(t)), tN.get(t);
      }
      var tH = new WeakMap(),
        tz = {},
        tL = new WeakMap();
      function tD(e) {
        var t = tL.get(e) || "";
        return (
          t ||
            (Object.keys(e).forEach(function (n) {
              var r = e[n];
              (t += n),
                r instanceof tT
                  ? (t += r.id)
                  : r && "object" === k(r)
                  ? (t += tD(r))
                  : (t += r);
            }),
            (t = tx(t)),
            tL.set(e, t)),
          t
        );
      }
      function tB(e, t) {
        return tx("".concat(t, "_").concat(tD(e)));
      }
      "random-"
        .concat(Date.now(), "-")
        .concat(Math.random())
        .replace(/\./g, "");
      var tV = eb();
      function tW(e) {
        return "number" == typeof e ? "".concat(e, "px") : e;
      }
      function tq(e, t, n) {
        var r,
          o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (i) return e;
        var a = ev(ev({}, o), {}, (O((r = {}), tR, t), O(r, tI, n), r)),
          c = Object.keys(a)
            .map(function (e) {
              var t = a[e];
              return t ? "".concat(e, '="').concat(t, '"') : null;
            })
            .filter(function (e) {
              return e;
            })
            .join(" ");
        return "<style ".concat(c, ">").concat(e, "</style>");
      }
      var tU = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return "--"
            .concat(t ? "".concat(t, "-") : "")
            .concat(e)
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
            .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
            .toLowerCase();
        },
        tX = function (e, t, n) {
          var r,
            o = {},
            i = {};
          return (
            Object.entries(e).forEach(function (e) {
              var t = C(e, 2),
                r = t[0],
                a = t[1];
              if (
                null != n &&
                null !== (c = n.preserve) &&
                void 0 !== c &&
                c[r]
              )
                i[r] = a;
              else if (
                ("string" == typeof a || "number" == typeof a) &&
                !(null != n && null !== (l = n.ignore) && void 0 !== l && l[r])
              ) {
                var c,
                  l,
                  s,
                  u = tU(r, null == n ? void 0 : n.prefix);
                (o[u] =
                  "number" != typeof a ||
                  (null != n &&
                    null !== (s = n.unitless) &&
                    void 0 !== s &&
                    s[r])
                    ? String(a)
                    : "".concat(a, "px")),
                  (i[r] = "var(".concat(u, ")"));
              }
            }),
            [
              i,
              ((r = { scope: null == n ? void 0 : n.scope }),
              Object.keys(o).length
                ? "."
                    .concat(t)
                    .concat(
                      null != r && r.scope ? ".".concat(r.scope) : "",
                      "{"
                    )
                    .concat(
                      Object.entries(o)
                        .map(function (e) {
                          var t = C(e, 2),
                            n = t[0],
                            r = t[1];
                          return "".concat(n, ":").concat(r, ";");
                        })
                        .join(""),
                      "}"
                    )
                : ""),
            ]
          );
        },
        t$ = ev({}, v).useInsertionEffect,
        tK = t$
          ? function (e, t, n) {
              return t$(function () {
                return e(), t();
              }, n);
            }
          : function (e, t, n) {
              g.useMemo(e, n),
                e2(function () {
                  return t(!0);
                }, n);
            },
        tG =
          void 0 !== ev({}, v).useInsertionEffect
            ? function (e) {
                var t = [],
                  n = !1;
                return (
                  g.useEffect(function () {
                    return (
                      (n = !1),
                      function () {
                        (n = !0),
                          t.length &&
                            t.forEach(function (e) {
                              return e();
                            });
                      }
                    );
                  }, e),
                  function (e) {
                    n || t.push(e);
                  }
                );
              }
            : function () {
                return function (e) {
                  e();
                };
              };
      function tY(e, t, n, r, o) {
        var i = g.useContext(tF).cache,
          a = tM([e].concat(ty(t))),
          c = tG([a]),
          l = function (e) {
            i.opUpdate(a, function (t) {
              var r = C(t || [void 0, void 0], 2),
                o = r[0],
                i = [void 0 === o ? 0 : o, r[1] || n()];
              return e ? e(i) : i;
            });
          };
        g.useMemo(
          function () {
            l();
          },
          [a]
        );
        var s = i.opGet(a)[1];
        return (
          tK(
            function () {
              null == o || o(s);
            },
            function (e) {
              return (
                l(function (t) {
                  var n = C(t, 2),
                    r = n[0],
                    i = n[1];
                  return e && 0 === r && (null == o || o(s)), [r + 1, i];
                }),
                function () {
                  i.opUpdate(a, function (t) {
                    var n = C(t || [], 2),
                      o = n[0],
                      l = void 0 === o ? 0 : o,
                      s = n[1];
                    return 0 == l - 1
                      ? (c(function () {
                          (e || !i.opGet(a)) && (null == r || r(s, !1));
                        }),
                        null)
                      : [l - 1, s];
                  });
                }
              );
            },
            [a]
          ),
          s
        );
      }
      var tQ = {},
        tZ = new Map(),
        tJ = function (e, t, n, r) {
          var o = ev(ev({}, n.getDerivativeToken(e)), t);
          return r && (o = r(o)), o;
        },
        t0 = "token",
        t1 = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        t2 = "comm",
        t5 = "rule",
        t6 = "decl",
        t3 = Math.abs,
        t4 = String.fromCharCode;
      function t9(e, t, n) {
        return e.replace(t, n);
      }
      function t8(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function t7(e, t, n) {
        return e.slice(t, n);
      }
      function ne(e) {
        return e.length;
      }
      function nt(e, t) {
        return t.push(e), e;
      }
      function nn(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function nr(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case t6:
            return (e.return = e.return || e.value);
          case t2:
            return "";
          case "@keyframes":
            return (e.return = e.value + "{" + nn(e.children, r) + "}");
          case t5:
            if (!ne((e.value = e.props.join(",")))) return "";
        }
        return ne((n = nn(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      var no = 1,
        ni = 1,
        na = 0,
        nc = 0,
        nl = 0,
        ns = "";
      function nu(e, t, n, r, o, i, a, c) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: i,
          line: no,
          column: ni,
          length: a,
          return: "",
          siblings: c,
        };
      }
      function nd() {
        return (
          (nl = nc < na ? t8(ns, nc++) : 0),
          ni++,
          10 === nl && ((ni = 1), no++),
          nl
        );
      }
      function nf() {
        return t8(ns, nc);
      }
      function np(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function nh(e) {
        var t, n;
        return ((t = nc - 1),
        (n = (function e(t) {
          for (; nd(); )
            switch (nl) {
              case t:
                return nc;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(nl);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                nd();
            }
          return nc;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        t7(ns, t, n)).trim();
      }
      function nm(e, t, n, r, o, i, a, c, l, s, u, d) {
        for (
          var f = o - 1,
            p = 0 === o ? i : [""],
            h = p.length,
            m = 0,
            g = 0,
            v = 0;
          m < r;
          ++m
        )
          for (
            var b = 0, y = t7(e, f + 1, (f = t3((g = a[m])))), x = e;
            b < h;
            ++b
          )
            (x = (g > 0 ? p[b] + " " + y : t9(y, /&\f/g, p[b])).trim()) &&
              (l[v++] = x);
        return nu(e, t, n, 0 === o ? t5 : c, l, s, u, d);
      }
      function ng(e, t, n, r, o) {
        return nu(e, t, n, t6, t7(e, 0, r), t7(e, r + 1, -1), r, o);
      }
      var nv = "data-ant-cssinjs-cache-path",
        nb = "_FILE_STYLE__",
        ny = !0,
        nx = "_multi_value_";
      function nw(e) {
        var t, n, r;
        return nn(
          ((r = (function e(t, n, r, o, i, a, c, l, s) {
            for (
              var u,
                d,
                f,
                p = 0,
                h = 0,
                m = c,
                g = 0,
                v = 0,
                b = 0,
                y = 1,
                x = 1,
                w = 1,
                E = 0,
                S = "",
                C = i,
                k = a,
                M = o,
                O = S;
              x;

            )
              switch (((b = E), (E = nd()))) {
                case 40:
                  if (108 != b && 58 == t8(O, m - 1)) {
                    -1 !=
                      ((d = O += t9(nh(E), "&", "&\f")),
                      (f = t3(p ? l[p - 1] : 0)),
                      d.indexOf("&\f", f)) && (w = -1);
                    break;
                  }
                case 34:
                case 39:
                case 91:
                  O += nh(E);
                  break;
                case 9:
                case 10:
                case 13:
                case 32:
                  O += (function (e) {
                    for (; (nl = nf()); )
                      if (nl < 33) nd();
                      else break;
                    return np(e) > 2 || np(nl) > 3 ? "" : " ";
                  })(b);
                  break;
                case 92:
                  O += (function (e, t) {
                    for (
                      var n;
                      --t &&
                      nd() &&
                      !(nl < 48) &&
                      !(nl > 102) &&
                      (!(nl > 57) || !(nl < 65)) &&
                      (!(nl > 70) || !(nl < 97));

                    );
                    return (
                      (n = nc + (t < 6 && 32 == nf() && 32 == nd())),
                      t7(ns, e, n)
                    );
                  })(nc - 1, 7);
                  continue;
                case 47:
                  switch (nf()) {
                    case 42:
                    case 47:
                      nt(
                        nu(
                          (u = (function (e, t) {
                            for (; nd(); )
                              if (e + nl === 57) break;
                              else if (e + nl === 84 && 47 === nf()) break;
                            return (
                              "/*" +
                              t7(ns, t, nc - 1) +
                              "*" +
                              t4(47 === e ? e : nd())
                            );
                          })(nd(), nc)),
                          n,
                          r,
                          t2,
                          t4(nl),
                          t7(u, 2, -2),
                          0,
                          s
                        ),
                        s
                      ),
                        (5 == np(b || 1) || 5 == np(nf() || 1)) &&
                          ne(O) &&
                          " " !== t7(O, -1, void 0) &&
                          (O += " ");
                      break;
                    default:
                      O += "/";
                  }
                  break;
                case 123 * y:
                  l[p++] = ne(O) * w;
                case 125 * y:
                case 59:
                case 0:
                  switch (E) {
                    case 0:
                    case 125:
                      x = 0;
                    case 59 + h:
                      -1 == w && (O = t9(O, /\f/g, "")),
                        v > 0 &&
                          (ne(O) - m || (0 === y && 47 === b)) &&
                          nt(
                            v > 32
                              ? ng(O + ";", o, r, m - 1, s)
                              : ng(t9(O, " ", "") + ";", o, r, m - 2, s),
                            s
                          );
                      break;
                    case 59:
                      O += ";";
                    default:
                      if (
                        (nt(
                          (M = nm(
                            O,
                            n,
                            r,
                            p,
                            h,
                            i,
                            l,
                            S,
                            (C = []),
                            (k = []),
                            m,
                            a
                          )),
                          a
                        ),
                        123 === E)
                      ) {
                        if (0 === h) e(O, n, M, M, C, a, m, l, k);
                        else
                          switch (99 === g && 110 === t8(O, 3) ? 100 : g) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                              e(
                                t,
                                M,
                                M,
                                o &&
                                  nt(
                                    nm(
                                      t,
                                      M,
                                      M,
                                      0,
                                      0,
                                      i,
                                      l,
                                      S,
                                      i,
                                      (C = []),
                                      m,
                                      k
                                    ),
                                    k
                                  ),
                                i,
                                k,
                                m,
                                l,
                                o ? C : k
                              );
                              break;
                            default:
                              e(O, M, M, M, [""], k, 0, l, k);
                          }
                      }
                  }
                  (p = h = v = 0), (y = w = 1), (S = O = ""), (m = c);
                  break;
                case 58:
                  (m = 1 + ne(O)), (v = b);
                default:
                  if (y < 1) {
                    if (123 == E) --y;
                    else if (
                      125 == E &&
                      0 == y++ &&
                      125 ==
                        ((nl = nc > 0 ? t8(ns, --nc) : 0),
                        ni--,
                        10 === nl && ((ni = 1), no--),
                        nl)
                    )
                      continue;
                  }
                  switch (((O += t4(E)), E * y)) {
                    case 38:
                      w = h > 0 ? 1 : ((O += "\f"), -1);
                      break;
                    case 44:
                      (l[p++] = (ne(O) - 1) * w), (w = 1);
                      break;
                    case 64:
                      45 === nf() && (O += nh(nd())),
                        (g = nf()),
                        (h = m =
                          ne(
                            (S = O +=
                              (function (e) {
                                for (; !np(nf()); ) nd();
                                return t7(ns, e, nc);
                              })(nc))
                          )),
                        E++;
                      break;
                    case 45:
                      45 === b && 2 == ne(O) && (y = 0);
                  }
              }
            return a;
          })(
            "",
            null,
            null,
            null,
            [""],
            ((n = t = e),
            (no = ni = 1),
            (na = ne((ns = n))),
            (nc = 0),
            (t = [])),
            0,
            [0],
            t
          )),
          (ns = ""),
          r),
          nr
        ).replace(/\{%%%\:[^;];}/g, ";");
      }
      function nE(e, t, n) {
        if (!t) return e;
        var r = ".".concat(t),
          o = "low" === n ? ":where(".concat(r, ")") : r;
        return e
          .split(",")
          .map(function (e) {
            var t,
              n = e.trim().split(/\s+/),
              r = n[0] || "",
              i =
                (null === (t = r.match(/^\w+/)) || void 0 === t
                  ? void 0
                  : t[0]) || "";
            return [(r = "".concat(i).concat(o).concat(r.slice(i.length)))]
              .concat(ty(n.slice(1)))
              .join(" ");
          })
          .join(",");
      }
      var nS = function e(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { root: !0, parentSelectors: [] },
          o = r.root,
          i = r.injectHash,
          a = r.parentSelectors,
          c = n.hashId,
          l = n.layer,
          s = (n.path, n.hashPriority),
          u = n.transformers,
          d = void 0 === u ? [] : u;
        n.linters;
        var f = "",
          p = {};
        function h(t) {
          var r = t.getName(c);
          if (!p[r]) {
            var o = C(e(t.style, n, { root: !1, parentSelectors: a }), 1)[0];
            p[r] = "@keyframes ".concat(t.getName(c)).concat(o);
          }
        }
        return (
          (function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return (
              t.forEach(function (t) {
                Array.isArray(t) ? e(t, n) : t && n.push(t);
              }),
              n
            );
          })(Array.isArray(t) ? t : [t]).forEach(function (t) {
            var r = "string" != typeof t || o ? t : {};
            if ("string" == typeof r) f += "".concat(r, "\n");
            else if (r._keyframe) h(r);
            else {
              var l = d.reduce(function (e, t) {
                var n;
                return (
                  (null == t || null === (n = t.visit) || void 0 === n
                    ? void 0
                    : n.call(t, e)) || e
                );
              }, r);
              Object.keys(l).forEach(function (t) {
                var r = l[t];
                if (
                  "object" !== k(r) ||
                  !r ||
                  ("animationName" === t && r._keyframe) ||
                  ("object" === k(r) && r && ("_skip_check_" in r || nx in r))
                ) {
                  function u(e, t) {
                    var n = e.replace(/[A-Z]/g, function (e) {
                        return "-".concat(e.toLowerCase());
                      }),
                      r = t;
                    t1[e] ||
                      "number" != typeof r ||
                      0 === r ||
                      (r = "".concat(r, "px")),
                      "animationName" === e &&
                        null != t &&
                        t._keyframe &&
                        (h(t), (r = t.getName(c))),
                      (f += "".concat(n, ":").concat(r, ";"));
                  }
                  var d,
                    m =
                      null !== (d = null == r ? void 0 : r.value) &&
                      void 0 !== d
                        ? d
                        : r;
                  "object" === k(r) && null != r && r[nx] && Array.isArray(m)
                    ? m.forEach(function (e) {
                        u(t, e);
                      })
                    : u(t, m);
                } else {
                  var g = !1,
                    v = t.trim(),
                    b = !1;
                  (o || i) && c
                    ? v.startsWith("@")
                      ? (g = !0)
                      : (v = "&" === v ? nE("", c, s) : nE(t, c, s))
                    : o &&
                      !c &&
                      ("&" === v || "" === v) &&
                      ((v = ""), (b = !0));
                  var y = C(
                      e(r, n, {
                        root: b,
                        injectHash: g,
                        parentSelectors: [].concat(ty(a), [v]),
                      }),
                      2
                    ),
                    x = y[0],
                    w = y[1];
                  (p = ev(ev({}, p), w)), (f += "".concat(v).concat(x));
                }
              });
            }
          }),
          o
            ? l &&
              (f && (f = "@layer ".concat(l.name, " {").concat(f, "}")),
              l.dependencies &&
                (p["@layer ".concat(l.name)] = l.dependencies
                  .map(function (e) {
                    return "@layer ".concat(e, ", ").concat(l.name, ";");
                  })
                  .join("\n")))
            : (f = "{".concat(f, "}")),
          [f, p]
        );
      };
      function nC(e, t) {
        return tx("".concat(e.join("%")).concat(t));
      }
      function nk() {
        return null;
      }
      var nM = "style";
      function nO(e, t) {
        var n = e.token,
          r = e.path,
          o = e.hashId,
          i = e.layer,
          a = e.nonce,
          c = e.clientOnly,
          l = e.order,
          s = void 0 === l ? 0 : l,
          u = g.useContext(tF),
          d = u.autoClear,
          f = (u.mock, u.defaultCache),
          h = u.hashPriority,
          m = u.container,
          v = u.ssrInline,
          y = u.transformers,
          x = u.linters,
          w = u.cache,
          E = u.layer,
          S = n._tokenKey,
          k = [S];
        E && k.push("layer"), k.push.apply(k, ty(r));
        var M = tY(
            nM,
            k,
            function () {
              var e = k.join("|");
              if (
                (!(function () {
                  if (!p && ((p = {}), eb())) {
                    var e,
                      t = document.createElement("div");
                    (t.className = nv),
                      (t.style.position = "fixed"),
                      (t.style.visibility = "hidden"),
                      (t.style.top = "-9999px"),
                      document.body.appendChild(t);
                    var n = getComputedStyle(t).content || "";
                    (n = n.replace(/^"/, "").replace(/"$/, ""))
                      .split(";")
                      .forEach(function (e) {
                        var t = C(e.split(":"), 2),
                          n = t[0],
                          r = t[1];
                        p[n] = r;
                      });
                    var r = document.querySelector("style[".concat(nv, "]"));
                    r &&
                      ((ny = !1),
                      null === (e = r.parentNode) ||
                        void 0 === e ||
                        e.removeChild(r)),
                      document.body.removeChild(t);
                  }
                })(),
                p[e])
              ) {
                var n = C(
                    (function (e) {
                      var t = p[e],
                        n = null;
                      if (t && eb()) {
                        if (ny) n = nb;
                        else {
                          var r = document.querySelector(
                            "style[".concat(tI, '="').concat(p[e], '"]')
                          );
                          r ? (n = r.innerHTML) : delete p[e];
                        }
                      }
                      return [n, t];
                    })(e),
                    2
                  ),
                  a = n[0],
                  l = n[1];
                if (a) return [a, S, l, {}, c, s];
              }
              var u = C(
                  nS(t(), {
                    hashId: o,
                    hashPriority: h,
                    layer: E ? i : void 0,
                    path: r.join("-"),
                    transformers: y,
                    linters: x,
                  }),
                  2
                ),
                d = u[0],
                f = u[1],
                m = nw(d),
                g = nC(k, m);
              return [m, S, g, f, c, s];
            },
            function (e, t) {
              var n = C(e, 3)[2];
              (t || d) && tV && eO(n, { mark: tI });
            },
            function (e) {
              var t = C(e, 4),
                n = t[0],
                r = (t[1], t[2]),
                o = t[3];
              if (tV && n !== nb) {
                var i = {
                    mark: tI,
                    prepend: !E && "queue",
                    attachTo: m,
                    priority: s,
                  },
                  c = "function" == typeof a ? a() : a;
                c && (i.csp = { nonce: c });
                var l = [],
                  u = [];
                Object.keys(o).forEach(function (e) {
                  e.startsWith("@layer") ? l.push(e) : u.push(e);
                }),
                  l.forEach(function (e) {
                    eR(
                      nw(o[e]),
                      "_layer-".concat(e),
                      ev(ev({}, i), {}, { prepend: !0 })
                    );
                  });
                var d = eR(n, r, i);
                (d[tP] = w.instanceId),
                  d.setAttribute(tR, S),
                  u.forEach(function (e) {
                    eR(nw(o[e]), "_effect-".concat(e), i);
                  });
              }
            }
          ),
          R = C(M, 3),
          I = R[0],
          P = R[1],
          F = R[2];
        return function (e) {
          var t, n;
          return (
            (t =
              v && !tV && f
                ? g.createElement(
                    "style",
                    b({}, (O((n = {}), tR, P), O(n, tI, F), n), {
                      dangerouslySetInnerHTML: { __html: I },
                    })
                  )
                : g.createElement(nk, null)),
            g.createElement(g.Fragment, null, t, e)
          );
        };
      }
      var nR = "cssVar",
        nI = function (e, t) {
          var n = e.key,
            r = e.prefix,
            o = e.unitless,
            i = e.ignore,
            a = e.token,
            c = e.scope,
            l = void 0 === c ? "" : c,
            s = (0, g.useContext)(tF),
            u = s.cache.instanceId,
            d = s.container,
            f = a._tokenKey,
            p = [].concat(ty(e.path), [n, l, f]);
          return tY(
            nR,
            p,
            function () {
              var e = C(
                  tX(t(), n, { prefix: r, unitless: o, ignore: i, scope: l }),
                  2
                ),
                a = e[0],
                c = e[1],
                s = nC(p, c);
              return [a, c, s, n];
            },
            function (e) {
              var t = C(e, 3)[2];
              tV && eO(t, { mark: tI });
            },
            function (e) {
              var t = C(e, 3),
                r = t[1],
                o = t[2];
              if (r) {
                var i = eR(r, o, {
                  mark: tI,
                  prepend: "queue",
                  attachTo: d,
                  priority: -999,
                });
                (i[tP] = u), i.setAttribute(tR, n);
              }
            }
          );
        };
      O((h = {}), nM, function (e, t, n) {
        var r = C(e, 6),
          o = r[0],
          i = r[1],
          a = r[2],
          c = r[3],
          l = r[4],
          s = r[5],
          u = (n || {}).plain;
        if (l) return null;
        var d = o,
          f = {
            "data-rc-order": "prependQueue",
            "data-rc-priority": "".concat(s),
          };
        return (
          (d = tq(o, i, a, f, u)),
          c &&
            Object.keys(c).forEach(function (e) {
              if (!t[e]) {
                t[e] = !0;
                var n = tq(nw(c[e]), i, "_effect-".concat(e), f, u);
                e.startsWith("@layer") ? (d = n + d) : (d += n);
              }
            }),
          [s, a, d]
        );
      }),
        O(h, t0, function (e, t, n) {
          var r = C(e, 5),
            o = r[2],
            i = r[3],
            a = r[4],
            c = (n || {}).plain;
          if (!i) return null;
          var l = o._tokenKey,
            s = tq(
              i,
              a,
              l,
              {
                "data-rc-order": "prependQueue",
                "data-rc-priority": "".concat(-999),
              },
              c
            );
          return [-999, l, s];
        }),
        O(h, nR, function (e, t, n) {
          var r = C(e, 4),
            o = r[1],
            i = r[2],
            a = r[3],
            c = (n || {}).plain;
          if (!o) return null;
          var l = tq(
            o,
            a,
            i,
            {
              "data-rc-order": "prependQueue",
              "data-rc-priority": "".concat(-999),
            },
            c
          );
          return [-999, i, l];
        });
      var nP = (function () {
        function e(t, n) {
          tS(this, e),
            O(this, "name", void 0),
            O(this, "style", void 0),
            O(this, "_keyframe", !0),
            (this.name = t),
            (this.style = n);
        }
        return (
          tk(e, [
            {
              key: "getName",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                return e ? "".concat(e, "-").concat(this.name) : this.name;
              },
            },
          ]),
          e
        );
      })();
      function nF(e) {
        return (e.notSplit = !0), e;
      }
      nF(["borderTop", "borderBottom"]),
        nF(["borderTop"]),
        nF(["borderBottom"]),
        nF(["borderLeft", "borderRight"]),
        nF(["borderLeft"]),
        nF(["borderRight"]);
      let nj = {
          blue: "#1677FF",
          purple: "#722ED1",
          cyan: "#13C2C2",
          green: "#52C41A",
          magenta: "#EB2F96",
          pink: "#EB2F96",
          red: "#F5222D",
          orange: "#FA8C16",
          yellow: "#FADB14",
          volcano: "#FA541C",
          geekblue: "#2F54EB",
          gold: "#FAAD14",
          lime: "#A0D911",
        },
        nA = Object.assign(Object.assign({}, nj), {
          colorPrimary: "#1677ff",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#ff4d4f",
          colorInfo: "#1677ff",
          colorLink: "",
          colorTextBase: "",
          colorBgBase: "",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
          fontFamilyCode:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: 14,
          lineWidth: 1,
          lineType: "solid",
          motionUnit: 0.1,
          motionBase: 0,
          motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
          motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
          motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
          motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
          motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
          motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
          borderRadius: 6,
          sizeUnit: 4,
          sizeStep: 4,
          sizePopupArrow: 16,
          controlHeight: 32,
          zIndexBase: 0,
          zIndexPopupBase: 1e3,
          opacityImage: 1,
          wireframe: !1,
          motion: !0,
        });
      function nT(e, t) {
        "string" == typeof (n = e) &&
          -1 !== n.indexOf(".") &&
          1 === parseFloat(n) &&
          (e = "100%");
        var n,
          r,
          o = "string" == typeof (r = e) && -1 !== r.indexOf("%");
        return ((e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
        o && (e = parseInt(String(e * t), 10) / 100),
        1e-6 > Math.abs(e - t))
          ? 1
          : (e =
              360 === t
                ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
                : (e % t) / parseFloat(String(t)));
      }
      function nN(e) {
        return Math.min(1, Math.max(0, e));
      }
      function n_(e) {
        return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
      }
      function nH(e) {
        return e <= 1 ? "".concat(100 * Number(e), "%") : e;
      }
      function nz(e) {
        return 1 === e.length ? "0" + e : String(e);
      }
      function nL(e, t, n) {
        var r = Math.max((e = nT(e, 255)), (t = nT(t, 255)), (n = nT(n, 255))),
          o = Math.min(e, t, n),
          i = 0,
          a = 0,
          c = (r + o) / 2;
        if (r === o) (a = 0), (i = 0);
        else {
          var l = r - o;
          switch (((a = c > 0.5 ? l / (2 - r - o) : l / (r + o)), r)) {
            case e:
              i = (t - n) / l + (t < n ? 6 : 0);
              break;
            case t:
              i = (n - e) / l + 2;
              break;
            case n:
              i = (e - t) / l + 4;
          }
          i /= 6;
        }
        return { h: i, s: a, l: c };
      }
      function nD(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + 6 * n * (t - e)
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      function nB(e, t, n) {
        var r = Math.max((e = nT(e, 255)), (t = nT(t, 255)), (n = nT(n, 255))),
          o = Math.min(e, t, n),
          i = 0,
          a = r - o;
        if (r === o) i = 0;
        else {
          switch (r) {
            case e:
              i = (t - n) / a + (t < n ? 6 : 0);
              break;
            case t:
              i = (n - e) / a + 2;
              break;
            case n:
              i = (e - t) / a + 4;
          }
          i /= 6;
        }
        return { h: i, s: 0 === r ? 0 : a / r, v: r };
      }
      function nV(e, t, n, r) {
        var o = [
          nz(Math.round(e).toString(16)),
          nz(Math.round(t).toString(16)),
          nz(Math.round(n).toString(16)),
        ];
        return r &&
          o[0].startsWith(o[0].charAt(1)) &&
          o[1].startsWith(o[1].charAt(1)) &&
          o[2].startsWith(o[2].charAt(1))
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join("");
      }
      function nW(e) {
        return parseInt(e, 16);
      }
      var nq = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          goldenrod: "#daa520",
          gold: "#ffd700",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavenderblush: "#fff0f5",
          lavender: "#e6e6fa",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        },
        nU = "(?:"
          .concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:")
          .concat("[-\\+]?\\d+%?", ")"),
        nX = "[\\s|\\(]+("
          .concat(nU, ")[,|\\s]+(")
          .concat(nU, ")[,|\\s]+(")
          .concat(nU, ")\\s*\\)?"),
        n$ = "[\\s|\\(]+("
          .concat(nU, ")[,|\\s]+(")
          .concat(nU, ")[,|\\s]+(")
          .concat(nU, ")[,|\\s]+(")
          .concat(nU, ")\\s*\\)?"),
        nK = {
          CSS_UNIT: new RegExp(nU),
          rgb: RegExp("rgb" + nX),
          rgba: RegExp("rgba" + n$),
          hsl: RegExp("hsl" + nX),
          hsla: RegExp("hsla" + n$),
          hsv: RegExp("hsv" + nX),
          hsva: RegExp("hsva" + n$),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        };
      function nG(e) {
        return !!nK.CSS_UNIT.exec(String(e));
      }
      var nY = (function () {
          function e(t, n) {
            if (
              (void 0 === t && (t = ""),
              void 0 === n && (n = {}),
              t instanceof e)
            )
              return t;
            "number" == typeof t &&
              (t = { r: (r = t) >> 16, g: (65280 & r) >> 8, b: 255 & r }),
              (this.originalInput = t);
            var r,
              o,
              i,
              a,
              c,
              l,
              s,
              u,
              d,
              f,
              p,
              h,
              m,
              g,
              v,
              b,
              y,
              x,
              w,
              E,
              S,
              C,
              k =
                ((v = { r: 0, g: 0, b: 0 }),
                (b = 1),
                (y = null),
                (x = null),
                (w = null),
                (E = !1),
                (S = !1),
                "string" == typeof (o = t) &&
                  (o = (function (e) {
                    if (0 === (e = e.trim().toLowerCase()).length) return !1;
                    var t = !1;
                    if (nq[e]) (e = nq[e]), (t = !0);
                    else if ("transparent" === e)
                      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                    var n = nK.rgb.exec(e);
                    return n
                      ? { r: n[1], g: n[2], b: n[3] }
                      : (n = nK.rgba.exec(e))
                      ? { r: n[1], g: n[2], b: n[3], a: n[4] }
                      : (n = nK.hsl.exec(e))
                      ? { h: n[1], s: n[2], l: n[3] }
                      : (n = nK.hsla.exec(e))
                      ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                      : (n = nK.hsv.exec(e))
                      ? { h: n[1], s: n[2], v: n[3] }
                      : (n = nK.hsva.exec(e))
                      ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                      : (n = nK.hex8.exec(e))
                      ? {
                          r: nW(n[1]),
                          g: nW(n[2]),
                          b: nW(n[3]),
                          a: nW(n[4]) / 255,
                          format: t ? "name" : "hex8",
                        }
                      : (n = nK.hex6.exec(e))
                      ? {
                          r: nW(n[1]),
                          g: nW(n[2]),
                          b: nW(n[3]),
                          format: t ? "name" : "hex",
                        }
                      : (n = nK.hex4.exec(e))
                      ? {
                          r: nW(n[1] + n[1]),
                          g: nW(n[2] + n[2]),
                          b: nW(n[3] + n[3]),
                          a: nW(n[4] + n[4]) / 255,
                          format: t ? "name" : "hex8",
                        }
                      : !!(n = nK.hex3.exec(e)) && {
                          r: nW(n[1] + n[1]),
                          g: nW(n[2] + n[2]),
                          b: nW(n[3] + n[3]),
                          format: t ? "name" : "hex",
                        };
                  })(o)),
                "object" == typeof o &&
                  (nG(o.r) && nG(o.g) && nG(o.b)
                    ? ((i = o.r),
                      (a = o.g),
                      (c = o.b),
                      (v = {
                        r: 255 * nT(i, 255),
                        g: 255 * nT(a, 255),
                        b: 255 * nT(c, 255),
                      }),
                      (E = !0),
                      (S = "%" === String(o.r).substr(-1) ? "prgb" : "rgb"))
                    : nG(o.h) && nG(o.s) && nG(o.v)
                    ? ((y = nH(o.s)),
                      (x = nH(o.v)),
                      (l = o.h),
                      (s = y),
                      (u = x),
                      (l = 6 * nT(l, 360)),
                      (s = nT(s, 100)),
                      (u = nT(u, 100)),
                      (d = Math.floor(l)),
                      (f = l - d),
                      (p = u * (1 - s)),
                      (h = u * (1 - f * s)),
                      (m = u * (1 - (1 - f) * s)),
                      (v = {
                        r: 255 * [u, h, p, p, m, u][(g = d % 6)],
                        g: 255 * [m, u, u, h, p, p][g],
                        b: 255 * [p, p, m, u, u, h][g],
                      }),
                      (E = !0),
                      (S = "hsv"))
                    : nG(o.h) &&
                      nG(o.s) &&
                      nG(o.l) &&
                      ((y = nH(o.s)),
                      (w = nH(o.l)),
                      (v = (function (e, t, n) {
                        if (
                          ((e = nT(e, 360)),
                          (t = nT(t, 100)),
                          (n = nT(n, 100)),
                          0 === t)
                        )
                          (o = n), (i = n), (r = n);
                        else {
                          var r,
                            o,
                            i,
                            a = n < 0.5 ? n * (1 + t) : n + t - n * t,
                            c = 2 * n - a;
                          (r = nD(c, a, e + 1 / 3)),
                            (o = nD(c, a, e)),
                            (i = nD(c, a, e - 1 / 3));
                        }
                        return { r: 255 * r, g: 255 * o, b: 255 * i };
                      })(o.h, y, w)),
                      (E = !0),
                      (S = "hsl")),
                  Object.prototype.hasOwnProperty.call(o, "a") && (b = o.a)),
                (b = n_(b)),
                {
                  ok: E,
                  format: o.format || S,
                  r: Math.min(255, Math.max(v.r, 0)),
                  g: Math.min(255, Math.max(v.g, 0)),
                  b: Math.min(255, Math.max(v.b, 0)),
                  a: b,
                });
            (this.originalInput = t),
              (this.r = k.r),
              (this.g = k.g),
              (this.b = k.b),
              (this.a = k.a),
              (this.roundA = Math.round(100 * this.a) / 100),
              (this.format =
                null !== (C = n.format) && void 0 !== C ? C : k.format),
              (this.gradientType = n.gradientType),
              this.r < 1 && (this.r = Math.round(this.r)),
              this.g < 1 && (this.g = Math.round(this.g)),
              this.b < 1 && (this.b = Math.round(this.b)),
              (this.isValid = k.ok);
          }
          return (
            (e.prototype.isDark = function () {
              return 128 > this.getBrightness();
            }),
            (e.prototype.isLight = function () {
              return !this.isDark();
            }),
            (e.prototype.getBrightness = function () {
              var e = this.toRgb();
              return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
            }),
            (e.prototype.getLuminance = function () {
              var e = this.toRgb(),
                t = e.r / 255,
                n = e.g / 255,
                r = e.b / 255;
              return (
                0.2126 *
                  (t <= 0.03928
                    ? t / 12.92
                    : Math.pow((t + 0.055) / 1.055, 2.4)) +
                0.7152 *
                  (n <= 0.03928
                    ? n / 12.92
                    : Math.pow((n + 0.055) / 1.055, 2.4)) +
                0.0722 *
                  (r <= 0.03928
                    ? r / 12.92
                    : Math.pow((r + 0.055) / 1.055, 2.4))
              );
            }),
            (e.prototype.getAlpha = function () {
              return this.a;
            }),
            (e.prototype.setAlpha = function (e) {
              return (
                (this.a = n_(e)),
                (this.roundA = Math.round(100 * this.a) / 100),
                this
              );
            }),
            (e.prototype.isMonochrome = function () {
              return 0 === this.toHsl().s;
            }),
            (e.prototype.toHsv = function () {
              var e = nB(this.r, this.g, this.b);
              return { h: 360 * e.h, s: e.s, v: e.v, a: this.a };
            }),
            (e.prototype.toHsvString = function () {
              var e = nB(this.r, this.g, this.b),
                t = Math.round(360 * e.h),
                n = Math.round(100 * e.s),
                r = Math.round(100 * e.v);
              return 1 === this.a
                ? "hsv(".concat(t, ", ").concat(n, "%, ").concat(r, "%)")
                : "hsva("
                    .concat(t, ", ")
                    .concat(n, "%, ")
                    .concat(r, "%, ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toHsl = function () {
              var e = nL(this.r, this.g, this.b);
              return { h: 360 * e.h, s: e.s, l: e.l, a: this.a };
            }),
            (e.prototype.toHslString = function () {
              var e = nL(this.r, this.g, this.b),
                t = Math.round(360 * e.h),
                n = Math.round(100 * e.s),
                r = Math.round(100 * e.l);
              return 1 === this.a
                ? "hsl(".concat(t, ", ").concat(n, "%, ").concat(r, "%)")
                : "hsla("
                    .concat(t, ", ")
                    .concat(n, "%, ")
                    .concat(r, "%, ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toHex = function (e) {
              return void 0 === e && (e = !1), nV(this.r, this.g, this.b, e);
            }),
            (e.prototype.toHexString = function (e) {
              return void 0 === e && (e = !1), "#" + this.toHex(e);
            }),
            (e.prototype.toHex8 = function (e) {
              var t, n, r, o, i, a;
              return (
                void 0 === e && (e = !1),
                (t = this.r),
                (n = this.g),
                (r = this.b),
                (o = this.a),
                (i = e),
                (a = [
                  nz(Math.round(t).toString(16)),
                  nz(Math.round(n).toString(16)),
                  nz(Math.round(r).toString(16)),
                  nz(Math.round(255 * parseFloat(o)).toString(16)),
                ]),
                i &&
                a[0].startsWith(a[0].charAt(1)) &&
                a[1].startsWith(a[1].charAt(1)) &&
                a[2].startsWith(a[2].charAt(1)) &&
                a[3].startsWith(a[3].charAt(1))
                  ? a[0].charAt(0) +
                    a[1].charAt(0) +
                    a[2].charAt(0) +
                    a[3].charAt(0)
                  : a.join("")
              );
            }),
            (e.prototype.toHex8String = function (e) {
              return void 0 === e && (e = !1), "#" + this.toHex8(e);
            }),
            (e.prototype.toHexShortString = function (e) {
              return (
                void 0 === e && (e = !1),
                1 === this.a ? this.toHexString(e) : this.toHex8String(e)
              );
            }),
            (e.prototype.toRgb = function () {
              return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a,
              };
            }),
            (e.prototype.toRgbString = function () {
              var e = Math.round(this.r),
                t = Math.round(this.g),
                n = Math.round(this.b);
              return 1 === this.a
                ? "rgb(".concat(e, ", ").concat(t, ", ").concat(n, ")")
                : "rgba("
                    .concat(e, ", ")
                    .concat(t, ", ")
                    .concat(n, ", ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toPercentageRgb = function () {
              var e = function (e) {
                return "".concat(Math.round(100 * nT(e, 255)), "%");
              };
              return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
            }),
            (e.prototype.toPercentageRgbString = function () {
              var e = function (e) {
                return Math.round(100 * nT(e, 255));
              };
              return 1 === this.a
                ? "rgb("
                    .concat(e(this.r), "%, ")
                    .concat(e(this.g), "%, ")
                    .concat(e(this.b), "%)")
                : "rgba("
                    .concat(e(this.r), "%, ")
                    .concat(e(this.g), "%, ")
                    .concat(e(this.b), "%, ")
                    .concat(this.roundA, ")");
            }),
            (e.prototype.toName = function () {
              if (0 === this.a) return "transparent";
              if (this.a < 1) return !1;
              for (
                var e = "#" + nV(this.r, this.g, this.b, !1),
                  t = 0,
                  n = Object.entries(nq);
                t < n.length;
                t++
              ) {
                var r = n[t],
                  o = r[0];
                if (e === r[1]) return o;
              }
              return !1;
            }),
            (e.prototype.toString = function (e) {
              var t = !!e;
              e = null != e ? e : this.format;
              var n = !1,
                r = this.a < 1 && this.a >= 0;
              return !t && r && (e.startsWith("hex") || "name" === e)
                ? "name" === e && 0 === this.a
                  ? this.toName()
                  : this.toRgbString()
                : ("rgb" === e && (n = this.toRgbString()),
                  "prgb" === e && (n = this.toPercentageRgbString()),
                  ("hex" === e || "hex6" === e) && (n = this.toHexString()),
                  "hex3" === e && (n = this.toHexString(!0)),
                  "hex4" === e && (n = this.toHex8String(!0)),
                  "hex8" === e && (n = this.toHex8String()),
                  "name" === e && (n = this.toName()),
                  "hsl" === e && (n = this.toHslString()),
                  "hsv" === e && (n = this.toHsvString()),
                  n || this.toHexString());
            }),
            (e.prototype.toNumber = function () {
              return (
                (Math.round(this.r) << 16) +
                (Math.round(this.g) << 8) +
                Math.round(this.b)
              );
            }),
            (e.prototype.clone = function () {
              return new e(this.toString());
            }),
            (e.prototype.lighten = function (t) {
              void 0 === t && (t = 10);
              var n = this.toHsl();
              return (n.l += t / 100), (n.l = nN(n.l)), new e(n);
            }),
            (e.prototype.brighten = function (t) {
              void 0 === t && (t = 10);
              var n = this.toRgb();
              return (
                (n.r = Math.max(
                  0,
                  Math.min(255, n.r - Math.round(-((t / 100) * 255)))
                )),
                (n.g = Math.max(
                  0,
                  Math.min(255, n.g - Math.round(-((t / 100) * 255)))
                )),
                (n.b = Math.max(
                  0,
                  Math.min(255, n.b - Math.round(-((t / 100) * 255)))
                )),
                new e(n)
              );
            }),
            (e.prototype.darken = function (t) {
              void 0 === t && (t = 10);
              var n = this.toHsl();
              return (n.l -= t / 100), (n.l = nN(n.l)), new e(n);
            }),
            (e.prototype.tint = function (e) {
              return void 0 === e && (e = 10), this.mix("white", e);
            }),
            (e.prototype.shade = function (e) {
              return void 0 === e && (e = 10), this.mix("black", e);
            }),
            (e.prototype.desaturate = function (t) {
              void 0 === t && (t = 10);
              var n = this.toHsl();
              return (n.s -= t / 100), (n.s = nN(n.s)), new e(n);
            }),
            (e.prototype.saturate = function (t) {
              void 0 === t && (t = 10);
              var n = this.toHsl();
              return (n.s += t / 100), (n.s = nN(n.s)), new e(n);
            }),
            (e.prototype.greyscale = function () {
              return this.desaturate(100);
            }),
            (e.prototype.spin = function (t) {
              var n = this.toHsl(),
                r = (n.h + t) % 360;
              return (n.h = r < 0 ? 360 + r : r), new e(n);
            }),
            (e.prototype.mix = function (t, n) {
              void 0 === n && (n = 50);
              var r = this.toRgb(),
                o = new e(t).toRgb(),
                i = n / 100;
              return new e({
                r: (o.r - r.r) * i + r.r,
                g: (o.g - r.g) * i + r.g,
                b: (o.b - r.b) * i + r.b,
                a: (o.a - r.a) * i + r.a,
              });
            }),
            (e.prototype.analogous = function (t, n) {
              void 0 === t && (t = 6), void 0 === n && (n = 30);
              var r = this.toHsl(),
                o = 360 / n,
                i = [this];
              for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
                (r.h = (r.h + o) % 360), i.push(new e(r));
              return i;
            }),
            (e.prototype.complement = function () {
              var t = this.toHsl();
              return (t.h = (t.h + 180) % 360), new e(t);
            }),
            (e.prototype.monochromatic = function (t) {
              void 0 === t && (t = 6);
              for (
                var n = this.toHsv(),
                  r = n.h,
                  o = n.s,
                  i = n.v,
                  a = [],
                  c = 1 / t;
                t--;

              )
                a.push(new e({ h: r, s: o, v: i })), (i = (i + c) % 1);
              return a;
            }),
            (e.prototype.splitcomplement = function () {
              var t = this.toHsl(),
                n = t.h;
              return [
                this,
                new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
                new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
              ];
            }),
            (e.prototype.onBackground = function (t) {
              var n = this.toRgb(),
                r = new e(t).toRgb(),
                o = n.a + r.a * (1 - n.a);
              return new e({
                r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
                g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
                b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
                a: o,
              });
            }),
            (e.prototype.triad = function () {
              return this.polyad(3);
            }),
            (e.prototype.tetrad = function () {
              return this.polyad(4);
            }),
            (e.prototype.polyad = function (t) {
              for (
                var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1;
                a < t;
                a++
              )
                o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
              return o;
            }),
            (e.prototype.equals = function (t) {
              return this.toRgbString() === new e(t).toRgbString();
            }),
            e
          );
        })(),
        nQ = (e) => {
          let t = e,
            n = e,
            r = e,
            o = e;
          return (
            e < 6 && e >= 5
              ? (t = e + 1)
              : e < 16 && e >= 6
              ? (t = e + 2)
              : e >= 16 && (t = 16),
            e < 7 && e >= 5
              ? (n = 4)
              : e < 8 && e >= 7
              ? (n = 5)
              : e < 14 && e >= 8
              ? (n = 6)
              : e < 16 && e >= 14
              ? (n = 7)
              : e >= 16 && (n = 8),
            e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
            e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
            {
              borderRadius: e,
              borderRadiusXS: r,
              borderRadiusSM: n,
              borderRadiusLG: t,
              borderRadiusOuter: o,
            }
          );
        },
        nZ = (e) => {
          let { controlHeight: t } = e;
          return {
            controlHeightSM: 0.75 * t,
            controlHeightXS: 0.5 * t,
            controlHeightLG: 1.25 * t,
          };
        },
        nJ = (e) => {
          let t = (function (e) {
              let t = Array(10)
                .fill(null)
                .map((t, n) => {
                  let r = e * Math.pow(Math.E, (n - 1) / 5);
                  return (
                    2 * Math.floor((n > 1 ? Math.floor(r) : Math.ceil(r)) / 2)
                  );
                });
              return (
                (t[1] = e), t.map((e) => ({ size: e, lineHeight: (e + 8) / e }))
              );
            })(e),
            n = t.map((e) => e.size),
            r = t.map((e) => e.lineHeight),
            o = n[1],
            i = n[0],
            a = n[2],
            c = r[1],
            l = r[0],
            s = r[2];
          return {
            fontSizeSM: i,
            fontSize: o,
            fontSizeLG: a,
            fontSizeXL: n[3],
            fontSizeHeading1: n[6],
            fontSizeHeading2: n[5],
            fontSizeHeading3: n[4],
            fontSizeHeading4: n[3],
            fontSizeHeading5: n[2],
            lineHeight: c,
            lineHeightLG: s,
            lineHeightSM: l,
            fontHeight: Math.round(c * o),
            fontHeightLG: Math.round(s * a),
            fontHeightSM: Math.round(l * i),
            lineHeightHeading1: r[6],
            lineHeightHeading2: r[5],
            lineHeightHeading3: r[4],
            lineHeightHeading4: r[3],
            lineHeightHeading5: r[2],
          };
        };
      let n0 = (e, t) => new nY(e).setAlpha(t).toRgbString(),
        n1 = (e, t) => new nY(e).darken(t).toHexString(),
        n2 = (e) => {
          let t = D(e);
          return {
            1: t[0],
            2: t[1],
            3: t[2],
            4: t[3],
            5: t[4],
            6: t[5],
            7: t[6],
            8: t[4],
            9: t[5],
            10: t[6],
          };
        },
        n5 = (e, t) => {
          let n = e || "#fff",
            r = t || "#000";
          return {
            colorBgBase: n,
            colorTextBase: r,
            colorText: n0(r, 0.88),
            colorTextSecondary: n0(r, 0.65),
            colorTextTertiary: n0(r, 0.45),
            colorTextQuaternary: n0(r, 0.25),
            colorFill: n0(r, 0.15),
            colorFillSecondary: n0(r, 0.06),
            colorFillTertiary: n0(r, 0.04),
            colorFillQuaternary: n0(r, 0.02),
            colorBgSolid: n0(r, 1),
            colorBgSolidHover: n0(r, 0.75),
            colorBgSolidActive: n0(r, 0.95),
            colorBgLayout: n1(n, 4),
            colorBgContainer: n1(n, 0),
            colorBgElevated: n1(n, 0),
            colorBgSpotlight: n0(r, 0.85),
            colorBgBlur: "transparent",
            colorBorder: n1(n, 15),
            colorBorderSecondary: n1(n, 6),
          };
        },
        n6 = t_(function (e) {
          (B.pink = B.magenta), (et.pink = et.magenta);
          let t = Object.keys(nj)
            .map((t) => {
              let n = e[t] === B[t] ? et[t] : D(e[t]);
              return Array(10)
                .fill(1)
                .reduce(
                  (e, r, o) => (
                    (e["".concat(t, "-").concat(o + 1)] = n[o]),
                    (e["".concat(t).concat(o + 1)] = n[o]),
                    e
                  ),
                  {}
                );
            })
            .reduce((e, t) => (e = Object.assign(Object.assign({}, e), t)), {});
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({}, e), t),
                    (function (e, t) {
                      let {
                          generateColorPalettes: n,
                          generateNeutralColorPalettes: r,
                        } = t,
                        {
                          colorSuccess: o,
                          colorWarning: i,
                          colorError: a,
                          colorInfo: c,
                          colorPrimary: l,
                          colorBgBase: s,
                          colorTextBase: u,
                        } = e,
                        d = n(l),
                        f = n(o),
                        p = n(i),
                        h = n(a),
                        m = n(c),
                        g = r(s, u),
                        v = n(e.colorLink || e.colorInfo),
                        b = new nY(h[1]).mix(new nY(h[3]), 50).toHexString();
                      return Object.assign(Object.assign({}, g), {
                        colorPrimaryBg: d[1],
                        colorPrimaryBgHover: d[2],
                        colorPrimaryBorder: d[3],
                        colorPrimaryBorderHover: d[4],
                        colorPrimaryHover: d[5],
                        colorPrimary: d[6],
                        colorPrimaryActive: d[7],
                        colorPrimaryTextHover: d[8],
                        colorPrimaryText: d[9],
                        colorPrimaryTextActive: d[10],
                        colorSuccessBg: f[1],
                        colorSuccessBgHover: f[2],
                        colorSuccessBorder: f[3],
                        colorSuccessBorderHover: f[4],
                        colorSuccessHover: f[4],
                        colorSuccess: f[6],
                        colorSuccessActive: f[7],
                        colorSuccessTextHover: f[8],
                        colorSuccessText: f[9],
                        colorSuccessTextActive: f[10],
                        colorErrorBg: h[1],
                        colorErrorBgHover: h[2],
                        colorErrorBgFilledHover: b,
                        colorErrorBgActive: h[3],
                        colorErrorBorder: h[3],
                        colorErrorBorderHover: h[4],
                        colorErrorHover: h[5],
                        colorError: h[6],
                        colorErrorActive: h[7],
                        colorErrorTextHover: h[8],
                        colorErrorText: h[9],
                        colorErrorTextActive: h[10],
                        colorWarningBg: p[1],
                        colorWarningBgHover: p[2],
                        colorWarningBorder: p[3],
                        colorWarningBorderHover: p[4],
                        colorWarningHover: p[4],
                        colorWarning: p[6],
                        colorWarningActive: p[7],
                        colorWarningTextHover: p[8],
                        colorWarningText: p[9],
                        colorWarningTextActive: p[10],
                        colorInfoBg: m[1],
                        colorInfoBgHover: m[2],
                        colorInfoBorder: m[3],
                        colorInfoBorderHover: m[4],
                        colorInfoHover: m[4],
                        colorInfo: m[6],
                        colorInfoActive: m[7],
                        colorInfoTextHover: m[8],
                        colorInfoText: m[9],
                        colorInfoTextActive: m[10],
                        colorLinkHover: v[4],
                        colorLink: v[6],
                        colorLinkActive: v[7],
                        colorBgMask: new nY("#000")
                          .setAlpha(0.45)
                          .toRgbString(),
                        colorWhite: "#fff",
                      });
                    })(e, {
                      generateColorPalettes: n2,
                      generateNeutralColorPalettes: n5,
                    })
                  ),
                  nJ(e.fontSize)
                ),
                (function (e) {
                  let { sizeUnit: t, sizeStep: n } = e;
                  return {
                    sizeXXL: t * (n + 8),
                    sizeXL: t * (n + 4),
                    sizeLG: t * (n + 2),
                    sizeMD: t * (n + 1),
                    sizeMS: t * n,
                    size: t * n,
                    sizeSM: t * (n - 1),
                    sizeXS: t * (n - 2),
                    sizeXXS: t * (n - 3),
                  };
                })(e)
              ),
              nZ(e)
            ),
            (function (e) {
              let {
                motionUnit: t,
                motionBase: n,
                borderRadius: r,
                lineWidth: o,
              } = e;
              return Object.assign(
                {
                  motionDurationFast: "".concat((n + t).toFixed(1), "s"),
                  motionDurationMid: "".concat((n + 2 * t).toFixed(1), "s"),
                  motionDurationSlow: "".concat((n + 3 * t).toFixed(1), "s"),
                  lineWidthBold: o + 1,
                },
                nQ(r)
              );
            })(e)
          );
        }),
        n3 = { token: nA, override: { override: nA }, hashed: !0 },
        n4 = g.createContext(n3);
      function n9(e) {
        return e >= 0 && e <= 255;
      }
      var n8 = function (e, t) {
          let { r: n, g: r, b: o, a: i } = new nY(e).toRgb();
          if (i < 1) return e;
          let { r: a, g: c, b: l } = new nY(t).toRgb();
          for (let e = 0.01; e <= 1; e += 0.01) {
            let t = Math.round((n - a * (1 - e)) / e),
              i = Math.round((r - c * (1 - e)) / e),
              s = Math.round((o - l * (1 - e)) / e);
            if (n9(t) && n9(i) && n9(s))
              return new nY({
                r: t,
                g: i,
                b: s,
                a: Math.round(100 * e) / 100,
              }).toRgbString();
          }
          return new nY({ r: n, g: r, b: o, a: 1 }).toRgbString();
        },
        n7 = function (e, t) {
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
        };
      function re(e) {
        let { override: t } = e,
          n = n7(e, ["override"]),
          r = Object.assign({}, t);
        Object.keys(nA).forEach((e) => {
          delete r[e];
        });
        let o = Object.assign(Object.assign({}, n), r);
        return (
          !1 === o.motion &&
            ((o.motionDurationFast = "0s"),
            (o.motionDurationMid = "0s"),
            (o.motionDurationSlow = "0s")),
          Object.assign(
            Object.assign(Object.assign({}, o), {
              colorFillContent: o.colorFillSecondary,
              colorFillContentHover: o.colorFill,
              colorFillAlter: o.colorFillQuaternary,
              colorBgContainerDisabled: o.colorFillTertiary,
              colorBorderBg: o.colorBgContainer,
              colorSplit: n8(o.colorBorderSecondary, o.colorBgContainer),
              colorTextPlaceholder: o.colorTextQuaternary,
              colorTextDisabled: o.colorTextQuaternary,
              colorTextHeading: o.colorText,
              colorTextLabel: o.colorTextSecondary,
              colorTextDescription: o.colorTextTertiary,
              colorTextLightSolid: o.colorWhite,
              colorHighlight: o.colorError,
              colorBgTextHover: o.colorFillSecondary,
              colorBgTextActive: o.colorFill,
              colorIcon: o.colorTextTertiary,
              colorIconHover: o.colorText,
              colorErrorOutline: n8(o.colorErrorBg, o.colorBgContainer),
              colorWarningOutline: n8(o.colorWarningBg, o.colorBgContainer),
              fontSizeIcon: o.fontSizeSM,
              lineWidthFocus: 3 * o.lineWidth,
              lineWidth: o.lineWidth,
              controlOutlineWidth: 2 * o.lineWidth,
              controlInteractiveSize: o.controlHeight / 2,
              controlItemBgHover: o.colorFillTertiary,
              controlItemBgActive: o.colorPrimaryBg,
              controlItemBgActiveHover: o.colorPrimaryBgHover,
              controlItemBgActiveDisabled: o.colorFill,
              controlTmpOutline: o.colorFillQuaternary,
              controlOutline: n8(o.colorPrimaryBg, o.colorBgContainer),
              lineType: o.lineType,
              borderRadius: o.borderRadius,
              borderRadiusXS: o.borderRadiusXS,
              borderRadiusSM: o.borderRadiusSM,
              borderRadiusLG: o.borderRadiusLG,
              fontWeightStrong: 600,
              opacityLoading: 0.65,
              linkDecoration: "none",
              linkHoverDecoration: "none",
              linkFocusDecoration: "none",
              controlPaddingHorizontal: 12,
              controlPaddingHorizontalSM: 8,
              paddingXXS: o.sizeXXS,
              paddingXS: o.sizeXS,
              paddingSM: o.sizeSM,
              padding: o.size,
              paddingMD: o.sizeMD,
              paddingLG: o.sizeLG,
              paddingXL: o.sizeXL,
              paddingContentHorizontalLG: o.sizeLG,
              paddingContentVerticalLG: o.sizeMS,
              paddingContentHorizontal: o.sizeMS,
              paddingContentVertical: o.sizeSM,
              paddingContentHorizontalSM: o.size,
              paddingContentVerticalSM: o.sizeXS,
              marginXXS: o.sizeXXS,
              marginXS: o.sizeXS,
              marginSM: o.sizeSM,
              margin: o.size,
              marginMD: o.sizeMD,
              marginLG: o.sizeLG,
              marginXL: o.sizeXL,
              marginXXL: o.sizeXXL,
              boxShadow:
                "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
              boxShadowSecondary:
                "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
              boxShadowTertiary:
                "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
              screenXS: 480,
              screenXSMin: 480,
              screenXSMax: 575,
              screenSM: 576,
              screenSMMin: 576,
              screenSMMax: 767,
              screenMD: 768,
              screenMDMin: 768,
              screenMDMax: 991,
              screenLG: 992,
              screenLGMin: 992,
              screenLGMax: 1199,
              screenXL: 1200,
              screenXLMin: 1200,
              screenXLMax: 1599,
              screenXXL: 1600,
              screenXXLMin: 1600,
              boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
              boxShadowCard: "\n      0 1px 2px -2px "
                .concat(
                  new nY("rgba(0, 0, 0, 0.16)").toRgbString(),
                  ",\n      0 3px 6px 0 "
                )
                .concat(
                  new nY("rgba(0, 0, 0, 0.12)").toRgbString(),
                  ",\n      0 5px 12px 4px "
                )
                .concat(new nY("rgba(0, 0, 0, 0.09)").toRgbString(), "\n    "),
              boxShadowDrawerRight:
                "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
              boxShadowDrawerLeft:
                "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
              boxShadowDrawerUp:
                "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
              boxShadowDrawerDown:
                "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
              boxShadowTabsOverflowLeft:
                "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
              boxShadowTabsOverflowRight:
                "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
              boxShadowTabsOverflowTop:
                "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
              boxShadowTabsOverflowBottom:
                "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
            }),
            r
          )
        );
      }
      var rt = function (e, t) {
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
      };
      let rn = {
          lineHeight: !0,
          lineHeightSM: !0,
          lineHeightLG: !0,
          lineHeightHeading1: !0,
          lineHeightHeading2: !0,
          lineHeightHeading3: !0,
          lineHeightHeading4: !0,
          lineHeightHeading5: !0,
          opacityLoading: !0,
          fontWeightStrong: !0,
          zIndexPopupBase: !0,
          zIndexBase: !0,
          opacityImage: !0,
        },
        rr = {
          size: !0,
          sizeSM: !0,
          sizeLG: !0,
          sizeMD: !0,
          sizeXS: !0,
          sizeXXS: !0,
          sizeMS: !0,
          sizeXL: !0,
          sizeXXL: !0,
          sizeUnit: !0,
          sizeStep: !0,
          motionBase: !0,
          motionUnit: !0,
        },
        ro = {
          screenXS: !0,
          screenXSMin: !0,
          screenXSMax: !0,
          screenSM: !0,
          screenSMMin: !0,
          screenSMMax: !0,
          screenMD: !0,
          screenMDMin: !0,
          screenMDMax: !0,
          screenLG: !0,
          screenLGMin: !0,
          screenLGMax: !0,
          screenXL: !0,
          screenXLMin: !0,
          screenXLMax: !0,
          screenXXL: !0,
          screenXXLMin: !0,
        },
        ri = (e, t, n) => {
          let r = n.getDerivativeToken(e),
            { override: o } = t,
            i = rt(t, ["override"]),
            a = Object.assign(Object.assign({}, r), { override: o });
          return (
            (a = re(a)),
            i &&
              Object.entries(i).forEach((e) => {
                let [t, n] = e,
                  { theme: r } = n,
                  o = rt(n, ["theme"]),
                  i = o;
                r &&
                  (i = ri(
                    Object.assign(Object.assign({}, a), o),
                    { override: o },
                    r
                  )),
                  (a[t] = i);
              }),
            a
          );
        };
      function ra() {
        let {
            token: e,
            hashed: t,
            theme: n,
            override: r,
            cssVar: o,
          } = g.useContext(n4),
          i = "".concat("5.22.7", "-").concat(t || ""),
          a = n || n6,
          [c, l, s] = (function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = (0, g.useContext)(tF),
              o = r.cache.instanceId,
              i = r.container,
              a = n.salt,
              c = void 0 === a ? "" : a,
              l = n.override,
              s = void 0 === l ? tQ : l,
              u = n.formatToken,
              d = n.getComputedToken,
              f = n.cssVar,
              p = (function (e, t) {
                for (var n = tH, r = 0; r < t.length; r += 1) {
                  var o = t[r];
                  n.has(o) || n.set(o, new WeakMap()), (n = n.get(o));
                }
                return n.has(tz) || n.set(tz, e()), n.get(tz);
              })(function () {
                return Object.assign.apply(Object, [{}].concat(ty(t)));
              }, t),
              h = tD(p),
              m = tD(s),
              v = f ? tD(f) : "";
            return tY(
              t0,
              [c, e.id, h, m, v],
              function () {
                var t,
                  n = d ? d(p, s, e) : tJ(p, s, e, u),
                  r = ev({}, n),
                  o = "";
                if (f) {
                  var i = C(
                    tX(n, f.key, {
                      prefix: f.prefix,
                      ignore: f.ignore,
                      unitless: f.unitless,
                      preserve: f.preserve,
                    }),
                    2
                  );
                  (n = i[0]), (o = i[1]);
                }
                var a = tB(n, c);
                (n._tokenKey = a), (r._tokenKey = tB(r, c));
                var l =
                  null !== (t = null == f ? void 0 : f.key) && void 0 !== t
                    ? t
                    : a;
                (n._themeKey = l), tZ.set(l, (tZ.get(l) || 0) + 1);
                var h = "".concat("css", "-").concat(tx(a));
                return (
                  (n._hashId = h),
                  [n, h, r, o, (null == f ? void 0 : f.key) || ""]
                );
              },
              function (e) {
                var t, n, r;
                (t = e[0]._themeKey),
                  tZ.set(t, (tZ.get(t) || 0) - 1),
                  (r = (n = Array.from(tZ.keys())).filter(function (e) {
                    return 0 >= (tZ.get(e) || 0);
                  })),
                  n.length - r.length > 0 &&
                    r.forEach(function (e) {
                      "undefined" != typeof document &&
                        document
                          .querySelectorAll(
                            "style[".concat(tR, '="').concat(e, '"]')
                          )
                          .forEach(function (e) {
                            if (e[tP] === o) {
                              var t;
                              null === (t = e.parentNode) ||
                                void 0 === t ||
                                t.removeChild(e);
                            }
                          }),
                        tZ.delete(e);
                    });
              },
              function (e) {
                var t = C(e, 4),
                  n = t[0],
                  r = t[3];
                if (f && r) {
                  var a = eR(r, tx("css-variables-".concat(n._themeKey)), {
                    mark: tI,
                    prepend: "queue",
                    attachTo: i,
                    priority: -999,
                  });
                  (a[tP] = o), a.setAttribute(tR, n._themeKey);
                }
              }
            );
          })(a, [nA, e], {
            salt: i,
            override: r,
            getComputedToken: ri,
            formatToken: re,
            cssVar: o && {
              prefix: o.prefix,
              key: o.key,
              unitless: rn,
              ignore: rr,
              preserve: ro,
            },
          });
        return [a, s, t ? l : "", c, o];
      }
      let rc = ["xxl", "xl", "lg", "md", "sm", "xs"],
        rl = (e) => ({
          xs: "(max-width: ".concat(e.screenXSMax, "px)"),
          sm: "(min-width: ".concat(e.screenSM, "px)"),
          md: "(min-width: ".concat(e.screenMD, "px)"),
          lg: "(min-width: ".concat(e.screenLG, "px)"),
          xl: "(min-width: ".concat(e.screenXL, "px)"),
          xxl: "(min-width: ".concat(e.screenXXL, "px)"),
        }),
        rs = (e) => {
          let t = [].concat(rc).reverse();
          return (
            t.forEach((n, r) => {
              let o = n.toUpperCase(),
                i = "screen".concat(o, "Min"),
                a = "screen".concat(o);
              if (!(e[i] <= e[a]))
                throw Error(
                  ""
                    .concat(i, "<=")
                    .concat(a, " fails : !(")
                    .concat(e[i], "<=")
                    .concat(e[a], ")")
                );
              if (r < t.length - 1) {
                let n = "screen".concat(o, "Max");
                if (!(e[a] <= e[n]))
                  throw Error(
                    ""
                      .concat(a, "<=")
                      .concat(n, " fails : !(")
                      .concat(e[a], "<=")
                      .concat(e[n], ")")
                  );
                let i = t[r + 1].toUpperCase(),
                  c = "screen".concat(i, "Min");
                if (!(e[n] <= e[c]))
                  throw Error(
                    ""
                      .concat(n, "<=")
                      .concat(c, " fails : !(")
                      .concat(e[n], "<=")
                      .concat(e[c], ")")
                  );
              }
            }),
            e
          );
        };
      var ru = function () {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          t = (0, g.useRef)({}),
          n = (function () {
            let [, e] = g.useReducer((e) => e + 1, 0);
            return e;
          })(),
          r = (function () {
            let [, e] = ra(),
              t = rl(rs(e));
            return g.useMemo(() => {
              let e = new Map(),
                n = -1,
                r = {};
              return {
                matchHandlers: {},
                dispatch: (t) => ((r = t), e.forEach((e) => e(r)), e.size >= 1),
                subscribe(t) {
                  return (
                    e.size || this.register(), (n += 1), e.set(n, t), t(r), n
                  );
                },
                unsubscribe(t) {
                  e.delete(t), e.size || this.unregister();
                },
                unregister() {
                  Object.keys(t).forEach((e) => {
                    let n = t[e],
                      r = this.matchHandlers[n];
                    null == r ||
                      r.mql.removeListener(null == r ? void 0 : r.listener);
                  }),
                    e.clear();
                },
                register() {
                  Object.keys(t).forEach((e) => {
                    let n = t[e],
                      o = (t) => {
                        let { matches: n } = t;
                        this.dispatch(
                          Object.assign(Object.assign({}, r), { [e]: n })
                        );
                      },
                      i = window.matchMedia(n);
                    i.addListener(o),
                      (this.matchHandlers[n] = { mql: i, listener: o }),
                      o(i);
                  });
                },
                responsiveMap: t,
              };
            }, [e]);
          })();
        return (
          e2(() => {
            let o = r.subscribe((r) => {
              (t.current = r), e && n();
            });
            return () => r.unsubscribe(o);
          }, []),
          t.current
        );
      };
      let rd = (0, g.createContext)(void 0);
      var rf = ev(
          ev(
            {},
            {
              yearFormat: "YYYY",
              dayFormat: "D",
              cellMeridiemFormat: "A",
              monthBeforeYear: !0,
            }
          ),
          {},
          {
            locale: "en_US",
            today: "Today",
            now: "Now",
            backToToday: "Back to today",
            ok: "OK",
            clear: "Clear",
            month: "Month",
            year: "Year",
            timeSelect: "select time",
            dateSelect: "select date",
            weekSelect: "Choose a week",
            monthSelect: "Choose a month",
            yearSelect: "Choose a year",
            decadeSelect: "Choose a decade",
            dateFormat: "M/D/YYYY",
            dateTimeFormat: "M/D/YYYY HH:mm:ss",
            previousMonth: "Previous month (PageUp)",
            nextMonth: "Next month (PageDown)",
            previousYear: "Last year (Control + left)",
            nextYear: "Next year (Control + right)",
            previousDecade: "Last decade",
            nextDecade: "Next decade",
            previousCentury: "Last century",
            nextCentury: "Next century",
          }
        ),
        rp = {
          placeholder: "Select time",
          rangePlaceholder: ["Start time", "End time"],
        };
      let rh = {
          lang: Object.assign(
            {
              placeholder: "Select date",
              yearPlaceholder: "Select year",
              quarterPlaceholder: "Select quarter",
              monthPlaceholder: "Select month",
              weekPlaceholder: "Select week",
              rangePlaceholder: ["Start date", "End date"],
              rangeYearPlaceholder: ["Start year", "End year"],
              rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
              rangeMonthPlaceholder: ["Start month", "End month"],
              rangeWeekPlaceholder: ["Start week", "End week"],
            },
            rf
          ),
          timePickerLocale: Object.assign({}, rp),
        },
        rm = "${label} is not a valid ${type}";
      var rg = {
          locale: "en",
          Pagination: tu,
          DatePicker: rh,
          TimePicker: rp,
          Calendar: rh,
          global: { placeholder: "Please select" },
          Table: {
            filterTitle: "Filter menu",
            filterConfirm: "OK",
            filterReset: "Reset",
            filterEmptyText: "No filters",
            filterCheckall: "Select all items",
            filterSearchPlaceholder: "Search in filters",
            emptyText: "No data",
            selectAll: "Select current page",
            selectInvert: "Invert current page",
            selectNone: "Clear all data",
            selectionAll: "Select all data",
            sortTitle: "Sort",
            expand: "Expand row",
            collapse: "Collapse row",
            triggerDesc: "Click to sort descending",
            triggerAsc: "Click to sort ascending",
            cancelSort: "Click to cancel sorting",
          },
          Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
          Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
          Popconfirm: { okText: "OK", cancelText: "Cancel" },
          Transfer: {
            titles: ["", ""],
            searchPlaceholder: "Search here",
            itemUnit: "item",
            itemsUnit: "items",
            remove: "Remove",
            selectCurrent: "Select current page",
            removeCurrent: "Remove current page",
            selectAll: "Select all data",
            deselectAll: "Deselect all data",
            removeAll: "Remove all data",
            selectInvert: "Invert current page",
          },
          Upload: {
            uploading: "Uploading...",
            removeFile: "Remove file",
            uploadError: "Upload error",
            previewFile: "Preview file",
            downloadFile: "Download file",
          },
          Empty: { description: "No data" },
          Icon: { icon: "icon" },
          Text: {
            edit: "Edit",
            copy: "Copy",
            copied: "Copied",
            expand: "Expand",
            collapse: "Collapse",
          },
          Form: {
            optional: "(optional)",
            defaultValidateMessages: {
              default: "Field validation error for ${label}",
              required: "Please enter ${label}",
              enum: "${label} must be one of [${enum}]",
              whitespace: "${label} cannot be a blank character",
              date: {
                format: "${label} date format is invalid",
                parse: "${label} cannot be converted to a date",
                invalid: "${label} is an invalid date",
              },
              types: {
                string: rm,
                method: rm,
                array: rm,
                object: rm,
                number: rm,
                date: rm,
                boolean: rm,
                integer: rm,
                float: rm,
                regexp: rm,
                email: rm,
                url: rm,
                hex: rm,
              },
              string: {
                len: "${label} must be ${len} characters",
                min: "${label} must be at least ${min} characters",
                max: "${label} must be up to ${max} characters",
                range: "${label} must be between ${min}-${max} characters",
              },
              number: {
                len: "${label} must be equal to ${len}",
                min: "${label} must be minimum ${min}",
                max: "${label} must be maximum ${max}",
                range: "${label} must be between ${min}-${max}",
              },
              array: {
                len: "Must be ${len} ${label}",
                min: "At least ${min} ${label}",
                max: "At most ${max} ${label}",
                range: "The amount of ${label} must be between ${min}-${max}",
              },
              pattern: {
                mismatch: "${label} does not match the pattern ${pattern}",
              },
            },
          },
          Image: { preview: "Preview" },
          QRCode: {
            expired: "QR code expired",
            refresh: "Refresh",
            scanned: "Scanned",
          },
          ColorPicker: {
            presetEmpty: "Empty",
            transparent: "Transparent",
            singleColor: "Single",
            gradientColor: "Gradient",
          },
        },
        rv = (e, t) => {
          let n = g.useContext(rd);
          return [
            g.useMemo(() => {
              var r;
              let o = t || rg[e],
                i =
                  null !== (r = null == n ? void 0 : n[e]) && void 0 !== r
                    ? r
                    : {};
              return Object.assign(
                Object.assign({}, "function" == typeof o ? o() : o),
                i || {}
              );
            }, [e, t, n]),
            g.useMemo(() => {
              let e = null == n ? void 0 : n.locale;
              return (null == n ? void 0 : n.exist) && !e ? rg.locale : e;
            }, [n]),
          ];
        },
        rb = function () {
          if ("undefined" == typeof navigator || "undefined" == typeof window)
            return !1;
          var e = navigator.userAgent || navigator.vendor || window.opera;
          return (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              e
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
              null == e ? void 0 : e.substr(0, 4)
            )
          );
        },
        ry = n(9553),
        rx = Symbol.for("react.element"),
        rw = Symbol.for("react.transitional.element"),
        rE = Symbol.for("react.fragment");
      function rS(e) {
        return (
          e &&
          "object" === k(e) &&
          (e.$$typeof === rx || e.$$typeof === rw) &&
          e.type === rE
        );
      }
      var rC = function (e, t) {
          "function" == typeof e
            ? e(t)
            : "object" === k(e) && e && "current" in e && (e.current = t);
        },
        rk = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t.filter(Boolean);
          return r.length <= 1
            ? r[0]
            : function (e) {
                t.forEach(function (t) {
                  rC(t, e);
                });
              };
        },
        rM = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return tw(
            function () {
              return rk.apply(void 0, t);
            },
            t,
            function (e, t) {
              return (
                e.length !== t.length ||
                e.every(function (e, n) {
                  return e !== t[n];
                })
              );
            }
          );
        },
        rO = function (e) {
          if (!e) return !1;
          if (rR(e) && e.props.propertyIsEnumerable("ref")) return !0;
          var t,
            n,
            r = (0, ry.isMemo)(e) ? e.type.type : e.type;
          return (
            ("function" != typeof r ||
              (null !== (t = r.prototype) && void 0 !== t && !!t.render) ||
              r.$$typeof === ry.ForwardRef) &&
            ("function" != typeof e ||
              (null !== (n = e.prototype) && void 0 !== n && !!n.render) ||
              e.$$typeof === ry.ForwardRef)
          );
        };
      function rR(e) {
        return (0, g.isValidElement)(e) && !rS(e);
      }
      var rI = function (e) {
          return e && rR(e)
            ? e.props.propertyIsEnumerable("ref")
              ? e.props.ref
              : e.ref
            : null;
        },
        rP = function (e) {
          var t = e.className,
            n = e.customizeIcon,
            r = e.customizeIconProps,
            o = e.children,
            i = e.onMouseDown,
            a = e.onClick,
            c = "function" == typeof n ? n(r) : n;
          return g.createElement(
            "span",
            {
              className: t,
              onMouseDown: function (e) {
                e.preventDefault(), null == i || i(e);
              },
              style: { userSelect: "none", WebkitUserSelect: "none" },
              unselectable: "on",
              onClick: a,
              "aria-hidden": !0,
            },
            void 0 !== c
              ? c
              : g.createElement(
                  "span",
                  {
                    className: P()(
                      t.split(/\s+/).map(function (e) {
                        return "".concat(e, "-icon");
                      })
                    ),
                  },
                  o
                )
          );
        },
        rF = function (e, t, n, r, o) {
          var i =
              arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            a = arguments.length > 6 ? arguments[6] : void 0,
            c = arguments.length > 7 ? arguments[7] : void 0,
            l = g.useMemo(
              function () {
                return "object" === k(r) ? r.clearIcon : o || void 0;
              },
              [r, o]
            );
          return {
            allowClear: g.useMemo(
              function () {
                return (
                  !i &&
                  !!r &&
                  (!!n.length || !!a) &&
                  !("combobox" === c && "" === a)
                );
              },
              [r, i, n.length, a, c]
            ),
            clearIcon: g.createElement(
              rP,
              {
                className: "".concat(e, "-clear"),
                onMouseDown: t,
                customizeIcon: l,
              },
              "\xd7"
            ),
          };
        },
        rj = g.createContext(null);
      function rA() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 250,
          t = g.useRef(null),
          n = g.useRef(null);
        return (
          g.useEffect(function () {
            return function () {
              window.clearTimeout(n.current);
            };
          }, []),
          [
            function () {
              return t.current;
            },
            function (r) {
              (r || null === t.current) && (t.current = r),
                window.clearTimeout(n.current),
                (n.current = window.setTimeout(function () {
                  t.current = null;
                }, e));
            },
          ]
        );
      }
      function rT(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = [];
        return (
          g.Children.forEach(e, function (e) {
            (null != e || t.keepEmpty) &&
              (Array.isArray(e)
                ? (n = n.concat(rT(e)))
                : rS(e) && e.props
                ? (n = n.concat(rT(e.props.children, t)))
                : n.push(e));
          }),
          n
        );
      }
      var rN = n(4887);
      function r_(e) {
        return e instanceof HTMLElement || e instanceof SVGElement;
      }
      function rH(e) {
        var t;
        return (
          (e && "object" === k(e) && r_(e.nativeElement)
            ? e.nativeElement
            : r_(e)
            ? e
            : null) ||
          (e instanceof g.Component
            ? null === (t = rN.findDOMNode) || void 0 === t
              ? void 0
              : t.call(rN, e)
            : null)
        );
      }
      var rz = g.createContext(null),
        rL = (function () {
          if ("undefined" != typeof Map) return Map;
          function e(e, t) {
            var n = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var n = e(this.__entries__, t),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (t.prototype.set = function (t, n) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([t, n]);
              }),
              (t.prototype.delete = function (t) {
                var n = this.__entries__,
                  r = e(n, t);
                ~r && n.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var o = r[n];
                  e.call(t, o[1], o[0]);
                }
              }),
              t
            );
          })();
        })(),
        rD =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        rB =
          void 0 !== n.g && n.g.Math === Math
            ? n.g
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        rV =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(rB)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              },
        rW = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        rq = "undefined" != typeof MutationObserver,
        rU = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var n = !1,
                  r = !1,
                  o = 0;
                function i() {
                  n && ((n = !1), e()), r && c();
                }
                function a() {
                  rV(i);
                }
                function c() {
                  var e = Date.now();
                  if (n) {
                    if (e - o < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(a, 20);
                  o = e;
                }
                return c;
              })(this.refresh.bind(this), 0));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e);
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              rD &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                rq
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              rD &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                n = void 0 === t ? "" : t;
              rW.some(function (e) {
                return !!~n.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        rX = function (e, t) {
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {
              value: t[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        r$ = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || rB;
        },
        rK = rZ(0, 0, 0, 0);
      function rG(e) {
        return parseFloat(e) || 0;
      }
      function rY(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
          return t + rG(e["border-" + n + "-width"]);
        }, 0);
      }
      var rQ =
        "undefined" != typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof r$(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof r$(e).SVGElement && "function" == typeof e.getBBox
              );
            };
      function rZ(e, t, n, r) {
        return { x: e, y: t, width: n, height: r };
      }
      var rJ = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = rZ(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = (function (e) {
                if (!rD) return rK;
                if (rQ(e)) {
                  var t;
                  return rZ(0, 0, (t = e.getBBox()).width, t.height);
                }
                return (function (e) {
                  var t = e.clientWidth,
                    n = e.clientHeight;
                  if (!t && !n) return rK;
                  var r = r$(e).getComputedStyle(e),
                    o = (function (e) {
                      for (
                        var t = {},
                          n = 0,
                          r = ["top", "right", "bottom", "left"];
                        n < r.length;
                        n++
                      ) {
                        var o = r[n],
                          i = e["padding-" + o];
                        t[o] = rG(i);
                      }
                      return t;
                    })(r),
                    i = o.left + o.right,
                    a = o.top + o.bottom,
                    c = rG(r.width),
                    l = rG(r.height);
                  if (
                    ("border-box" === r.boxSizing &&
                      (Math.round(c + i) !== t &&
                        (c -= rY(r, "left", "right") + i),
                      Math.round(l + a) !== n &&
                        (l -= rY(r, "top", "bottom") + a)),
                    e !== r$(e).document.documentElement)
                  ) {
                    var s = Math.round(c + i) - t,
                      u = Math.round(l + a) - n;
                    1 !== Math.abs(s) && (c -= s),
                      1 !== Math.abs(u) && (l -= u);
                  }
                  return rZ(o.left, o.top, c, l);
                })(e);
              })(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        r0 = function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            c =
              ((n = t.x),
              (r = t.y),
              (o = t.width),
              (i = t.height),
              rX(
                (a = Object.create(
                  ("undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object
                  ).prototype
                )),
                {
                  x: n,
                  y: r,
                  width: o,
                  height: i,
                  top: r,
                  right: n + o,
                  bottom: i + r,
                  left: n,
                }
              ),
              a);
          rX(this, { target: e, contentRect: c });
        },
        r1 = (function () {
          function e(e, t, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new rL()),
              "function" != typeof e)
            )
              throw TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = n);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof r$(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new rJ(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof r$(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new r0(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        r2 = "undefined" != typeof WeakMap ? new WeakMap() : new rL(),
        r5 = function e(t) {
          if (!(this instanceof e))
            throw TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw TypeError("1 argument required, but only 0 present.");
          var n = new r1(t, rU.getInstance(), this);
          r2.set(this, n);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        r5.prototype[e] = function () {
          var t;
          return (t = r2.get(this))[e].apply(t, arguments);
        };
      });
      var r6 = void 0 !== rB.ResizeObserver ? rB.ResizeObserver : r5,
        r3 = new Map(),
        r4 = new r6(function (e) {
          e.forEach(function (e) {
            var t,
              n = e.target;
            null === (t = r3.get(n)) ||
              void 0 === t ||
              t.forEach(function (e) {
                return e(n);
              });
          });
        });
      function r9(e, t) {
        return (r9 = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function r8(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && r9(e, t);
      }
      function r7(e) {
        return (r7 = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function oe() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (oe = function () {
          return !!e;
        })();
      }
      function ot(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function on(e) {
        var t = oe();
        return function () {
          var n,
            r = r7(e);
          return (
            (n = t
              ? Reflect.construct(r, arguments, r7(this).constructor)
              : r.apply(this, arguments)),
            (function (e, t) {
              if (t && ("object" == k(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return ot(e);
            })(this, n)
          );
        };
      }
      var or = (function (e) {
          r8(n, e);
          var t = on(n);
          function n() {
            return tS(this, n), t.apply(this, arguments);
          }
          return (
            tk(n, [
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(g.Component),
        oo = g.forwardRef(function (e, t) {
          var n = e.children,
            r = e.disabled,
            o = g.useRef(null),
            i = g.useRef(null),
            a = g.useContext(rz),
            c = "function" == typeof n,
            l = c ? n(o) : n,
            s = g.useRef({
              width: -1,
              height: -1,
              offsetWidth: -1,
              offsetHeight: -1,
            }),
            u = !c && g.isValidElement(l) && rO(l),
            d = rM(u ? rI(l) : null, o),
            f = function () {
              var e;
              return (
                rH(o.current) ||
                (o.current && "object" === k(o.current)
                  ? rH(
                      null === (e = o.current) || void 0 === e
                        ? void 0
                        : e.nativeElement
                    )
                  : null) ||
                rH(i.current)
              );
            };
          g.useImperativeHandle(t, function () {
            return f();
          });
          var p = g.useRef(e);
          p.current = e;
          var h = g.useCallback(function (e) {
            var t = p.current,
              n = t.onResize,
              r = t.data,
              o = e.getBoundingClientRect(),
              i = o.width,
              c = o.height,
              l = e.offsetWidth,
              u = e.offsetHeight,
              d = Math.floor(i),
              f = Math.floor(c);
            if (
              s.current.width !== d ||
              s.current.height !== f ||
              s.current.offsetWidth !== l ||
              s.current.offsetHeight !== u
            ) {
              var h = { width: d, height: f, offsetWidth: l, offsetHeight: u };
              s.current = h;
              var m = ev(
                ev({}, h),
                {},
                {
                  offsetWidth: l === Math.round(i) ? i : l,
                  offsetHeight: u === Math.round(c) ? c : u,
                }
              );
              null == a || a(m, e, r),
                n &&
                  Promise.resolve().then(function () {
                    n(m, e);
                  });
            }
          }, []);
          return (
            g.useEffect(
              function () {
                var e = f();
                return (
                  e &&
                    !r &&
                    (r3.has(e) || (r3.set(e, new Set()), r4.observe(e)),
                    r3.get(e).add(h)),
                  function () {
                    r3.has(e) &&
                      (r3.get(e).delete(h),
                      r3.get(e).size || (r4.unobserve(e), r3.delete(e)));
                  }
                );
              },
              [o.current, r]
            ),
            g.createElement(
              or,
              { ref: i },
              u ? g.cloneElement(l, { ref: d }) : l
            )
          );
        }),
        oi = g.forwardRef(function (e, t) {
          var n = e.children;
          return ("function" == typeof n ? [n] : rT(n)).map(function (n, r) {
            var o =
              (null == n ? void 0 : n.key) ||
              "".concat("rc-observer-key", "-").concat(r);
            return g.createElement(
              oo,
              b({}, e, { key: o, ref: 0 === r ? t : void 0 }),
              n
            );
          });
        });
      oi.Collection = function (e) {
        var t = e.children,
          n = e.onBatchResize,
          r = g.useRef(0),
          o = g.useRef([]),
          i = g.useContext(rz),
          a = g.useCallback(
            function (e, t, a) {
              r.current += 1;
              var c = r.current;
              o.current.push({ size: e, element: t, data: a }),
                Promise.resolve().then(function () {
                  c === r.current &&
                    (null == n || n(o.current), (o.current = []));
                }),
                null == i || i(e, t, a);
            },
            [n, i]
          );
        return g.createElement(rz.Provider, { value: a }, t);
      };
      var oa = [
          "prefixCls",
          "invalidate",
          "item",
          "renderItem",
          "responsive",
          "responsiveDisabled",
          "registerSize",
          "itemKey",
          "className",
          "style",
          "children",
          "display",
          "order",
          "component",
        ],
        oc = void 0,
        ol = g.forwardRef(function (e, t) {
          var n,
            r = e.prefixCls,
            o = e.invalidate,
            i = e.item,
            a = e.renderItem,
            c = e.responsive,
            l = e.responsiveDisabled,
            s = e.registerSize,
            u = e.itemKey,
            d = e.className,
            f = e.style,
            p = e.children,
            h = e.display,
            m = e.order,
            v = e.component,
            y = R(e, oa),
            x = c && !h;
          g.useEffect(function () {
            return function () {
              s(u, null);
            };
          }, []);
          var w = a && i !== oc ? a(i) : p;
          o ||
            (n = {
              opacity: x ? 0 : 1,
              height: x ? 0 : oc,
              overflowY: x ? "hidden" : oc,
              order: c ? m : oc,
              pointerEvents: x ? "none" : oc,
              position: x ? "absolute" : oc,
            });
          var E = {};
          x && (E["aria-hidden"] = !0);
          var S = g.createElement(
            void 0 === v ? "div" : v,
            b({ className: P()(!o && r, d), style: ev(ev({}, n), f) }, E, y, {
              ref: t,
            }),
            w
          );
          return (
            c &&
              (S = g.createElement(
                oi,
                {
                  onResize: function (e) {
                    s(u, e.offsetWidth);
                  },
                  disabled: l,
                },
                S
              )),
            S
          );
        });
      ol.displayName = "Item";
      var os = function (e) {
          return +setTimeout(e, 16);
        },
        ou = function (e) {
          return clearTimeout(e);
        };
      "undefined" != typeof window &&
        "requestAnimationFrame" in window &&
        ((os = function (e) {
          return window.requestAnimationFrame(e);
        }),
        (ou = function (e) {
          return window.cancelAnimationFrame(e);
        }));
      var od = 0,
        of = new Map(),
        op = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            n = (od += 1);
          return (
            !(function t(r) {
              if (0 === r) of.delete(n), e();
              else {
                var o = os(function () {
                  t(r - 1);
                });
                of.set(n, o);
              }
            })(t),
            n
          );
        };
      function oh(e, t) {
        var n = C(g.useState(t), 2),
          r = n[0],
          o = n[1];
        return [
          r,
          e0(function (t) {
            e(function () {
              o(t);
            });
          }),
        ];
      }
      op.cancel = function (e) {
        var t = of.get(e);
        return of.delete(e), ou(t);
      };
      var om = g.createContext(null),
        og = ["component"],
        ov = ["className"],
        ob = ["className"],
        oy = g.forwardRef(function (e, t) {
          var n = g.useContext(om);
          if (!n) {
            var r = e.component,
              o = R(e, og);
            return g.createElement(
              void 0 === r ? "div" : r,
              b({}, o, { ref: t })
            );
          }
          var i = n.className,
            a = R(n, ov),
            c = e.className,
            l = R(e, ob);
          return g.createElement(
            om.Provider,
            { value: null },
            g.createElement(ol, b({ ref: t, className: P()(i, c) }, a, l))
          );
        });
      oy.displayName = "RawItem";
      var ox = [
          "prefixCls",
          "data",
          "renderItem",
          "renderRawItem",
          "itemKey",
          "itemWidth",
          "ssr",
          "style",
          "className",
          "maxCount",
          "renderRest",
          "renderRawRest",
          "suffix",
          "component",
          "itemComponent",
          "onVisibleChange",
        ],
        ow = "responsive",
        oE = "invalidate";
      function oS(e) {
        return "+ ".concat(e.length, " ...");
      }
      var oC = g.forwardRef(function (e, t) {
        var n,
          r,
          o = e.prefixCls,
          i = void 0 === o ? "rc-overflow" : o,
          a = e.data,
          c = void 0 === a ? [] : a,
          l = e.renderItem,
          s = e.renderRawItem,
          u = e.itemKey,
          d = e.itemWidth,
          f = void 0 === d ? 10 : d,
          p = e.ssr,
          h = e.style,
          m = e.className,
          v = e.maxCount,
          y = e.renderRest,
          x = e.renderRawRest,
          w = e.suffix,
          E = e.component,
          S = e.itemComponent,
          k = e.onVisibleChange,
          M = R(e, ox),
          O = "full" === p,
          I =
            ((n = g.useRef(null)),
            function (e) {
              n.current ||
                ((n.current = []),
                (function (e) {
                  if ("undefined" == typeof MessageChannel) op(e);
                  else {
                    var t = new MessageChannel();
                    (t.port1.onmessage = function () {
                      return e();
                    }),
                      t.port2.postMessage(void 0);
                  }
                })(function () {
                  (0, rN.unstable_batchedUpdates)(function () {
                    n.current.forEach(function (e) {
                      e();
                    }),
                      (n.current = null);
                  });
                })),
                n.current.push(e);
            }),
          F = C(oh(I, null), 2),
          j = F[0],
          A = F[1],
          T = j || 0,
          N = C(oh(I, new Map()), 2),
          _ = N[0],
          H = N[1],
          z = C(oh(I, 0), 2),
          L = z[0],
          D = z[1],
          B = C(oh(I, 0), 2),
          V = B[0],
          W = B[1],
          q = C(oh(I, 0), 2),
          U = q[0],
          X = q[1],
          $ = C((0, g.useState)(null), 2),
          K = $[0],
          G = $[1],
          Y = C((0, g.useState)(null), 2),
          Q = Y[0],
          Z = Y[1],
          J = g.useMemo(
            function () {
              return null === Q && O ? Number.MAX_SAFE_INTEGER : Q || 0;
            },
            [Q, j]
          ),
          ee = C((0, g.useState)(!1), 2),
          et = ee[0],
          en = ee[1],
          er = "".concat(i, "-item"),
          eo = Math.max(L, V),
          ei = v === ow,
          ea = c.length && ei,
          ec = v === oE,
          el = ea || ("number" == typeof v && c.length > v),
          es = (0, g.useMemo)(
            function () {
              var e = c;
              return (
                ea
                  ? (e =
                      null === j && O
                        ? c
                        : c.slice(0, Math.min(c.length, T / f)))
                  : "number" == typeof v && (e = c.slice(0, v)),
                e
              );
            },
            [c, f, j, v, ea]
          ),
          eu = (0, g.useMemo)(
            function () {
              return ea ? c.slice(J + 1) : c.slice(es.length);
            },
            [c, es, ea, J]
          ),
          ed = (0, g.useCallback)(
            function (e, t) {
              var n;
              return "function" == typeof u
                ? u(e)
                : null !== (n = u && (null == e ? void 0 : e[u])) &&
                  void 0 !== n
                ? n
                : t;
            },
            [u]
          ),
          ef = (0, g.useCallback)(
            l ||
              function (e) {
                return e;
              },
            [l]
          );
        function ep(e, t, n) {
          (Q !== e || (void 0 !== t && t !== K)) &&
            (Z(e),
            n || (en(e < c.length - 1), null == k || k(e)),
            void 0 !== t && G(t));
        }
        function eh(e, t) {
          H(function (n) {
            var r = new Map(n);
            return null === t ? r.delete(e) : r.set(e, t), r;
          });
        }
        function em(e) {
          return _.get(ed(es[e], e));
        }
        e2(
          function () {
            if (T && "number" == typeof eo && es) {
              var e = U,
                t = es.length,
                n = t - 1;
              if (!t) {
                ep(0, null);
                return;
              }
              for (var r = 0; r < t; r += 1) {
                var o = em(r);
                if ((O && (o = o || 0), void 0 === o)) {
                  ep(r - 1, void 0, !0);
                  break;
                }
                if (
                  ((e += o),
                  (0 === n && e <= T) || (r === n - 1 && e + em(n) <= T))
                ) {
                  ep(n, null);
                  break;
                }
                if (e + eo > T) {
                  ep(r - 1, e - o - U + V);
                  break;
                }
              }
              w && em(0) + U > T && G(null);
            }
          },
          [T, _, V, U, ed, es]
        );
        var eg = et && !!eu.length,
          eb = {};
        null !== K && ea && (eb = { position: "absolute", left: K, top: 0 });
        var ey = {
            prefixCls: er,
            responsive: ea,
            component: S,
            invalidate: ec,
          },
          ex = s
            ? function (e, t) {
                var n = ed(e, t);
                return g.createElement(
                  om.Provider,
                  {
                    key: n,
                    value: ev(
                      ev({}, ey),
                      {},
                      {
                        order: t,
                        item: e,
                        itemKey: n,
                        registerSize: eh,
                        display: t <= J,
                      }
                    ),
                  },
                  s(e, t)
                );
              }
            : function (e, t) {
                var n = ed(e, t);
                return g.createElement(
                  ol,
                  b({}, ey, {
                    order: t,
                    key: n,
                    item: e,
                    renderItem: ef,
                    itemKey: n,
                    registerSize: eh,
                    display: t <= J,
                  })
                );
              },
          ew = {
            order: eg ? J : Number.MAX_SAFE_INTEGER,
            className: "".concat(er, "-rest"),
            registerSize: function (e, t) {
              W(t), D(V);
            },
            display: eg,
          };
        if (x)
          x &&
            (r = g.createElement(
              om.Provider,
              { value: ev(ev({}, ey), ew) },
              x(eu)
            ));
        else {
          var eE = y || oS;
          r = g.createElement(
            ol,
            b({}, ey, ew),
            "function" == typeof eE ? eE(eu) : eE
          );
        }
        var eS = g.createElement(
          void 0 === E ? "div" : E,
          b({ className: P()(!ec && i, m), style: h, ref: t }, M),
          es.map(ex),
          el ? r : null,
          w &&
            g.createElement(
              ol,
              b({}, ey, {
                responsive: ei,
                responsiveDisabled: !ea,
                order: J,
                className: "".concat(er, "-suffix"),
                registerSize: function (e, t) {
                  X(t);
                },
                display: !0,
                style: eb,
              }),
              w
            )
        );
        return (
          ei &&
            (eS = g.createElement(
              oi,
              {
                onResize: function (e, t) {
                  A(t.clientWidth);
                },
                disabled: !ea,
              },
              eS
            )),
          eS
        );
      });
      (oC.displayName = "Overflow"),
        (oC.Item = oy),
        (oC.RESPONSIVE = ow),
        (oC.INVALIDATE = oE);
      var ok = g.forwardRef(function (e, t) {
        var n,
          r = e.prefixCls,
          o = e.id,
          i = e.inputElement,
          a = e.disabled,
          c = e.tabIndex,
          l = e.autoFocus,
          s = e.autoComplete,
          u = e.editable,
          d = e.activeDescendantId,
          f = e.value,
          p = e.maxLength,
          h = e.onKeyDown,
          m = e.onMouseDown,
          v = e.onChange,
          b = e.onPaste,
          y = e.onCompositionStart,
          x = e.onCompositionEnd,
          w = e.open,
          E = e.attrs,
          S = i || g.createElement("input", null),
          C = S,
          k = C.ref,
          M = C.props,
          O = M.onKeyDown,
          R = M.onChange,
          I = M.onMouseDown,
          F = M.onCompositionStart,
          j = M.onCompositionEnd,
          A = M.style;
        return (
          S.props,
          (S = g.cloneElement(
            S,
            ev(
              ev(
                ev({ type: "search" }, M),
                {},
                {
                  id: o,
                  ref: rk(t, k),
                  disabled: a,
                  tabIndex: c,
                  autoComplete: s || "off",
                  autoFocus: l,
                  className: P()(
                    "".concat(r, "-selection-search-input"),
                    null === (n = S) ||
                      void 0 === n ||
                      null === (n = n.props) ||
                      void 0 === n
                      ? void 0
                      : n.className
                  ),
                  role: "combobox",
                  "aria-expanded": w || !1,
                  "aria-haspopup": "listbox",
                  "aria-owns": "".concat(o, "_list"),
                  "aria-autocomplete": "list",
                  "aria-controls": "".concat(o, "_list"),
                  "aria-activedescendant": w ? d : void 0,
                },
                E
              ),
              {},
              {
                value: u ? f : "",
                maxLength: p,
                readOnly: !u,
                unselectable: u ? null : "on",
                style: ev(ev({}, A), {}, { opacity: u ? null : 0 }),
                onKeyDown: function (e) {
                  h(e), O && O(e);
                },
                onMouseDown: function (e) {
                  m(e), I && I(e);
                },
                onChange: function (e) {
                  v(e), R && R(e);
                },
                onCompositionStart: function (e) {
                  y(e), F && F(e);
                },
                onCompositionEnd: function (e) {
                  x(e), j && j(e);
                },
                onPaste: b,
              }
            )
          ))
        );
      });
      function oM(e) {
        return Array.isArray(e) ? e : void 0 !== e ? [e] : [];
      }
      var oO =
        "undefined" != typeof window &&
        window.document &&
        window.document.documentElement;
      function oR(e) {
        return ["string", "number"].includes(k(e));
      }
      function oI(e) {
        var t = void 0;
        return (
          e &&
            (oR(e.title)
              ? (t = e.title.toString())
              : oR(e.label) && (t = e.label.toString())),
          t
        );
      }
      function oP(e) {
        var t;
        return null !== (t = e.key) && void 0 !== t ? t : e.value;
      }
      var oF = function (e) {
          e.preventDefault(), e.stopPropagation();
        },
        oj = function (e) {
          var t,
            n,
            r = e.id,
            o = e.prefixCls,
            i = e.values,
            a = e.open,
            c = e.searchValue,
            l = e.autoClearSearchValue,
            s = e.inputRef,
            u = e.placeholder,
            d = e.disabled,
            f = e.mode,
            p = e.showSearch,
            h = e.autoFocus,
            m = e.autoComplete,
            v = e.activeDescendantId,
            b = e.tabIndex,
            y = e.removeIcon,
            x = e.maxTagCount,
            w = e.maxTagTextLength,
            E = e.maxTagPlaceholder,
            S =
              void 0 === E
                ? function (e) {
                    return "+ ".concat(e.length, " ...");
                  }
                : E,
            k = e.tagRender,
            M = e.onToggleOpen,
            R = e.onRemove,
            I = e.onInputChange,
            F = e.onInputPaste,
            j = e.onInputKeyDown,
            A = e.onInputMouseDown,
            T = e.onInputCompositionStart,
            N = e.onInputCompositionEnd,
            _ = g.useRef(null),
            H = C((0, g.useState)(0), 2),
            z = H[0],
            L = H[1],
            D = C((0, g.useState)(!1), 2),
            B = D[0],
            V = D[1],
            W = "".concat(o, "-selection"),
            q = a || ("multiple" === f && !1 === l) || "tags" === f ? c : "",
            U =
              "tags" === f || ("multiple" === f && !1 === l) || (p && (a || B));
          (t = function () {
            L(_.current.scrollWidth);
          }),
            (n = [q]),
            oO ? g.useLayoutEffect(t, n) : g.useEffect(t, n);
          var X = function (e, t, n, r, o) {
              return g.createElement(
                "span",
                {
                  title: oI(e),
                  className: P()(
                    "".concat(W, "-item"),
                    O({}, "".concat(W, "-item-disabled"), n)
                  ),
                },
                g.createElement(
                  "span",
                  { className: "".concat(W, "-item-content") },
                  t
                ),
                r &&
                  g.createElement(
                    rP,
                    {
                      className: "".concat(W, "-item-remove"),
                      onMouseDown: oF,
                      onClick: o,
                      customizeIcon: y,
                    },
                    "\xd7"
                  )
              );
            },
            $ = function (e, t, n, r, o, i) {
              return g.createElement(
                "span",
                {
                  onMouseDown: function (e) {
                    oF(e), M(!a);
                  },
                },
                k({
                  label: t,
                  value: e,
                  disabled: n,
                  closable: r,
                  onClose: o,
                  isMaxTag: !!i,
                })
              );
            },
            K = g.createElement(
              "div",
              {
                className: "".concat(W, "-search"),
                style: { width: z },
                onFocus: function () {
                  V(!0);
                },
                onBlur: function () {
                  V(!1);
                },
              },
              g.createElement(ok, {
                ref: s,
                open: a,
                prefixCls: o,
                id: r,
                inputElement: null,
                disabled: d,
                autoFocus: h,
                autoComplete: m,
                editable: U,
                activeDescendantId: v,
                value: q,
                onKeyDown: j,
                onMouseDown: A,
                onChange: I,
                onPaste: F,
                onCompositionStart: T,
                onCompositionEnd: N,
                tabIndex: b,
                attrs: te(e, !0),
              }),
              g.createElement(
                "span",
                {
                  ref: _,
                  className: "".concat(W, "-search-mirror"),
                  "aria-hidden": !0,
                },
                q,
                "\xa0"
              )
            ),
            G = g.createElement(oC, {
              prefixCls: "".concat(W, "-overflow"),
              data: i,
              renderItem: function (e) {
                var t = e.disabled,
                  n = e.label,
                  r = e.value,
                  o = !d && !t,
                  i = n;
                if (
                  "number" == typeof w &&
                  ("string" == typeof n || "number" == typeof n)
                ) {
                  var a = String(i);
                  a.length > w && (i = "".concat(a.slice(0, w), "..."));
                }
                var c = function (t) {
                  t && t.stopPropagation(), R(e);
                };
                return "function" == typeof k
                  ? $(r, i, t, o, c)
                  : X(e, i, t, o, c);
              },
              renderRest: function (e) {
                var t = "function" == typeof S ? S(e) : S;
                return "function" == typeof k
                  ? $(void 0, t, !1, !1, void 0, !0)
                  : X({ title: t }, t, !1);
              },
              suffix: K,
              itemKey: oP,
              maxCount: x,
            });
          return g.createElement(
            "span",
            { className: "".concat(W, "-wrap") },
            G,
            !i.length &&
              !q &&
              g.createElement(
                "span",
                { className: "".concat(W, "-placeholder") },
                u
              )
          );
        },
        oA = function (e) {
          var t = e.inputElement,
            n = e.prefixCls,
            r = e.id,
            o = e.inputRef,
            i = e.disabled,
            a = e.autoFocus,
            c = e.autoComplete,
            l = e.activeDescendantId,
            s = e.mode,
            u = e.open,
            d = e.values,
            f = e.placeholder,
            p = e.tabIndex,
            h = e.showSearch,
            m = e.searchValue,
            v = e.activeValue,
            b = e.maxLength,
            y = e.onInputKeyDown,
            x = e.onInputMouseDown,
            w = e.onInputChange,
            E = e.onInputPaste,
            S = e.onInputCompositionStart,
            k = e.onInputCompositionEnd,
            M = e.title,
            O = C(g.useState(!1), 2),
            R = O[0],
            I = O[1],
            P = "combobox" === s,
            F = P || h,
            j = d[0],
            A = m || "";
          P && v && !R && (A = v),
            g.useEffect(
              function () {
                P && I(!1);
              },
              [P, v]
            );
          var T = ("combobox" === s || !!u || !!h) && !!A,
            N = void 0 === M ? oI(j) : M,
            _ = g.useMemo(
              function () {
                return j
                  ? null
                  : g.createElement(
                      "span",
                      {
                        className: "".concat(n, "-selection-placeholder"),
                        style: T ? { visibility: "hidden" } : void 0,
                      },
                      f
                    );
              },
              [j, T, f, n]
            );
          return g.createElement(
            "span",
            { className: "".concat(n, "-selection-wrap") },
            g.createElement(
              "span",
              { className: "".concat(n, "-selection-search") },
              g.createElement(ok, {
                ref: o,
                prefixCls: n,
                id: r,
                open: u,
                inputElement: t,
                disabled: i,
                autoFocus: a,
                autoComplete: c,
                editable: F,
                activeDescendantId: l,
                value: A,
                onKeyDown: y,
                onMouseDown: x,
                onChange: function (e) {
                  I(!0), w(e);
                },
                onPaste: E,
                onCompositionStart: S,
                onCompositionEnd: k,
                tabIndex: p,
                attrs: te(e, !0),
                maxLength: P ? b : void 0,
              })
            ),
            !P && j
              ? g.createElement(
                  "span",
                  {
                    className: "".concat(n, "-selection-item"),
                    title: N,
                    style: T ? { visibility: "hidden" } : void 0,
                  },
                  j.label
                )
              : null,
            _
          );
        },
        oT = g.forwardRef(function (e, t) {
          var n = (0, g.useRef)(null),
            r = (0, g.useRef)(!1),
            o = e.prefixCls,
            i = e.open,
            a = e.mode,
            c = e.showSearch,
            l = e.tokenWithEnter,
            s = e.disabled,
            u = e.prefix,
            d = e.autoClearSearchValue,
            f = e.onSearch,
            p = e.onSearchSubmit,
            h = e.onToggleOpen,
            m = e.onInputKeyDown,
            v = e.domRef;
          g.useImperativeHandle(t, function () {
            return {
              focus: function (e) {
                n.current.focus(e);
              },
              blur: function () {
                n.current.blur();
              },
            };
          });
          var y = C(rA(0), 2),
            x = y[0],
            w = y[1],
            E = (0, g.useRef)(null),
            S = function (e) {
              !1 !== f(e, !0, r.current) && h(!0);
            },
            k = {
              inputRef: n,
              onInputKeyDown: function (e) {
                var t = e.which,
                  o = n.current instanceof HTMLTextAreaElement;
                !o && i && (t === e9.UP || t === e9.DOWN) && e.preventDefault(),
                  m && m(e),
                  t !== e9.ENTER ||
                    "tags" !== a ||
                    r.current ||
                    i ||
                    null == p ||
                    p(e.target.value),
                  (o &&
                    !i &&
                    ~[e9.UP, e9.DOWN, e9.LEFT, e9.RIGHT].indexOf(t)) ||
                    !t ||
                    [
                      e9.ESC,
                      e9.SHIFT,
                      e9.BACKSPACE,
                      e9.TAB,
                      e9.WIN_KEY,
                      e9.ALT,
                      e9.META,
                      e9.WIN_KEY_RIGHT,
                      e9.CTRL,
                      e9.SEMICOLON,
                      e9.EQUALS,
                      e9.CAPS_LOCK,
                      e9.CONTEXT_MENU,
                      e9.F1,
                      e9.F2,
                      e9.F3,
                      e9.F4,
                      e9.F5,
                      e9.F6,
                      e9.F7,
                      e9.F8,
                      e9.F9,
                      e9.F10,
                      e9.F11,
                      e9.F12,
                    ].includes(t) ||
                    h(!0);
              },
              onInputMouseDown: function () {
                w(!0);
              },
              onInputChange: function (e) {
                var t = e.target.value;
                if (l && E.current && /[\r\n]/.test(E.current)) {
                  var n = E.current
                    .replace(/[\r\n]+$/, "")
                    .replace(/\r\n/g, " ")
                    .replace(/[\r\n]/g, " ");
                  t = t.replace(n, E.current);
                }
                (E.current = null), S(t);
              },
              onInputPaste: function (e) {
                var t = e.clipboardData,
                  n = null == t ? void 0 : t.getData("text");
                E.current = n || "";
              },
              onInputCompositionStart: function () {
                r.current = !0;
              },
              onInputCompositionEnd: function (e) {
                (r.current = !1), "combobox" !== a && S(e.target.value);
              },
            },
            M =
              "multiple" === a || "tags" === a
                ? g.createElement(oj, b({}, e, k))
                : g.createElement(oA, b({}, e, k));
          return g.createElement(
            "div",
            {
              ref: v,
              className: "".concat(o, "-selector"),
              onClick: function (e) {
                e.target !== n.current &&
                  (void 0 !== document.body.style.msTouchAction
                    ? setTimeout(function () {
                        n.current.focus();
                      })
                    : n.current.focus());
              },
              onMouseDown: function (e) {
                var t = x();
                e.target === n.current ||
                  t ||
                  ("combobox" === a && s) ||
                  e.preventDefault(),
                  (("combobox" === a || (c && t)) && i) ||
                    (i && !1 !== d && f("", !0, !1), h());
              },
            },
            u &&
              g.createElement("div", { className: "".concat(o, "-prefix") }, u),
            M
          );
        }),
        oN = g.createContext(null),
        o_ = [],
        oH = "rc-util-locker-".concat(Date.now()),
        oz = 0,
        oL = function (e) {
          return (
            !1 !== e &&
            (eb() && e
              ? "string" == typeof e
                ? document.querySelector(e)
                : "function" == typeof e
                ? e()
                : e
              : null)
          );
        },
        oD = g.forwardRef(function (e, t) {
          var n,
            r,
            o = e.open,
            i = e.autoLock,
            a = e.getContainer,
            c = (e.debug, e.autoDestroy),
            l = void 0 === c || c,
            s = e.children,
            u = C(g.useState(o), 2),
            d = u[0],
            f = u[1],
            p = d || o;
          g.useEffect(
            function () {
              (l || o) && f(o);
            },
            [o, l]
          );
          var h = C(
              g.useState(function () {
                return oL(a);
              }),
              2
            ),
            m = h[0],
            v = h[1];
          g.useEffect(function () {
            var e = oL(a);
            v(null != e ? e : null);
          });
          var b = (function (e, t) {
              var n = C(
                  g.useState(function () {
                    return eb() ? document.createElement("div") : null;
                  }),
                  1
                )[0],
                r = g.useRef(!1),
                o = g.useContext(oN),
                i = C(g.useState(o_), 2),
                a = i[0],
                c = i[1],
                l =
                  o ||
                  (r.current
                    ? void 0
                    : function (e) {
                        c(function (t) {
                          return [e].concat(ty(t));
                        });
                      });
              function s() {
                n.parentElement || document.body.appendChild(n),
                  (r.current = !0);
              }
              function u() {
                var e;
                null === (e = n.parentElement) ||
                  void 0 === e ||
                  e.removeChild(n),
                  (r.current = !1);
              }
              return (
                e2(
                  function () {
                    return e ? (o ? o(s) : s()) : u(), u;
                  },
                  [e]
                ),
                e2(
                  function () {
                    a.length &&
                      (a.forEach(function (e) {
                        return e();
                      }),
                      c(o_));
                  },
                  [a]
                ),
                [n, l]
              );
            })(p && !m, 0),
            y = C(b, 2),
            x = y[0],
            w = y[1],
            E = null != m ? m : x;
          e2(
            function () {
              if (n) {
                var e,
                  t = ((e = document.body),
                  "undefined" != typeof document && e && e instanceof Element
                    ? (function (e) {
                        var t,
                          n,
                          r = "rc-scrollbar-measure-".concat(
                            Math.random().toString(36).substring(7)
                          ),
                          o = document.createElement("div");
                        o.id = r;
                        var i = o.style;
                        if (
                          ((i.position = "absolute"),
                          (i.left = "0"),
                          (i.top = "0"),
                          (i.width = "100px"),
                          (i.height = "100px"),
                          (i.overflow = "scroll"),
                          e)
                        ) {
                          var a = getComputedStyle(e);
                          (i.scrollbarColor = a.scrollbarColor),
                            (i.scrollbarWidth = a.scrollbarWidth);
                          var c = getComputedStyle(e, "::-webkit-scrollbar"),
                            l = parseInt(c.width, 10),
                            s = parseInt(c.height, 10);
                          try {
                            var u = l ? "width: ".concat(c.width, ";") : "",
                              d = s ? "height: ".concat(c.height, ";") : "";
                            eR(
                              "\n#"
                                .concat(r, "::-webkit-scrollbar {\n")
                                .concat(u, "\n")
                                .concat(d, "\n}"),
                              r
                            );
                          } catch (e) {
                            console.error(e), (t = l), (n = s);
                          }
                        }
                        document.body.appendChild(o);
                        var f =
                            e && t && !isNaN(t)
                              ? t
                              : o.offsetWidth - o.clientWidth,
                          p =
                            e && n && !isNaN(n)
                              ? n
                              : o.offsetHeight - o.clientHeight;
                        return (
                          document.body.removeChild(o),
                          eO(r),
                          { width: f, height: p }
                        );
                      })(e)
                    : { width: 0, height: 0 }).width,
                  o =
                    document.body.scrollHeight >
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    window.innerWidth > document.body.offsetWidth;
                eR(
                  "\nhtml body {\n  overflow-y: hidden;\n  ".concat(
                    o ? "width: calc(100% - ".concat(t, "px);") : "",
                    "\n}"
                  ),
                  r
                );
              } else eO(r);
              return function () {
                eO(r);
              };
            },
            [
              (n = !!(i && o && eb() && (E === x || E === document.body))),
              (r = C(
                g.useState(function () {
                  return (oz += 1), "".concat(oH, "_").concat(oz);
                }),
                1
              )[0]),
            ]
          );
          var S = null;
          s && rO(s) && t && (S = s.ref);
          var k = rM(S, t);
          if (!p || !eb() || void 0 === m) return null;
          var M = !1 === E,
            O = s;
          return (
            t && (O = g.cloneElement(s, { ref: k })),
            g.createElement(
              oN.Provider,
              { value: w },
              M ? O : (0, rN.createPortal)(O, E)
            )
          );
        }),
        oB = 0,
        oV = ev({}, v).useId,
        oW = oV
          ? function (e) {
              var t = oV();
              return e || t;
            }
          : function (e) {
              var t = C(g.useState("ssr-id"), 2),
                n = t[0],
                r = t[1];
              return (g.useEffect(function () {
                var e = oB;
                (oB += 1), r("rc_unique_".concat(e));
              }, []),
              e)
                ? e
                : n;
            },
        oq = ["children"],
        oU = g.createContext({});
      function oX(e) {
        var t = e.children,
          n = R(e, oq);
        return g.createElement(oU.Provider, { value: n }, t);
      }
      var o$ = (function (e) {
        r8(n, e);
        var t = on(n);
        function n() {
          return tS(this, n), t.apply(this, arguments);
        }
        return (
          tk(n, [
            {
              key: "render",
              value: function () {
                return this.props.children;
              },
            },
          ]),
          n
        );
      })(g.Component);
      function oK(e) {
        return x(e) || tb(e) || E(e) || S();
      }
      function oG(e, t) {
        for (var n = e, r = 0; r < t.length; r += 1) {
          if (null == n) return;
          n = n[t[r]];
        }
        return n;
      }
      function oY(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return t.length && r && void 0 === n && !oG(e, t.slice(0, -1))
          ? e
          : (function e(t, n, r, o) {
              if (!n.length) return r;
              var i,
                a = oK(n),
                c = a[0],
                l = a.slice(1);
              return (
                (i =
                  t || "number" != typeof c
                    ? Array.isArray(t)
                      ? ty(t)
                      : ev({}, t)
                    : []),
                o && void 0 === r && 1 === l.length
                  ? delete i[c][l[0]]
                  : (i[c] = e(i[c], l, r, o)),
                i
              );
            })(e, t, n, r);
      }
      function oQ(e) {
        return Array.isArray(e) ? [] : {};
      }
      var oZ = "undefined" == typeof Reflect ? Object.keys : Reflect.ownKeys;
      function oJ() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = oQ(t[0]);
        return (
          t.forEach(function (e) {
            !(function t(n, o) {
              var i = new Set(o),
                a = oG(e, n),
                c = Array.isArray(a);
              if (
                c ||
                ("object" === k(a) &&
                  null !== a &&
                  Object.getPrototypeOf(a) === Object.prototype)
              ) {
                if (!i.has(a)) {
                  i.add(a);
                  var l = oG(r, n);
                  c
                    ? (r = oY(r, n, []))
                    : (l && "object" === k(l)) || (r = oY(r, n, oQ(a))),
                    oZ(a).forEach(function (e) {
                      t([].concat(ty(n), [e]), i);
                    });
                }
              } else r = oY(r, n, a);
            })([]);
          }),
          r
        );
      }
      var o0 = "none",
        o1 = "appear",
        o2 = "enter",
        o5 = "leave",
        o6 = "none",
        o3 = "prepare",
        o4 = "start",
        o9 = "active",
        o8 = "prepared";
      function o7(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit".concat(e)] = "webkit".concat(t)),
          (n["Moz".concat(e)] = "moz".concat(t)),
          (n["ms".concat(e)] = "MS".concat(t)),
          (n["O".concat(e)] = "o".concat(t.toLowerCase())),
          n
        );
      }
      var ie =
          ((o = eb()),
          (i = "undefined" != typeof window ? window : {}),
          (a = {
            animationend: o7("Animation", "AnimationEnd"),
            transitionend: o7("Transition", "TransitionEnd"),
          }),
          !o ||
            ("AnimationEvent" in i || delete a.animationend.animation,
            "TransitionEvent" in i || delete a.transitionend.transition),
          a),
        it = {};
      eb() && (it = document.createElement("div").style);
      var ir = {};
      function io(e) {
        if (ir[e]) return ir[e];
        var t = ie[e];
        if (t)
          for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
            var i = n[o];
            if (Object.prototype.hasOwnProperty.call(t, i) && i in it)
              return (ir[e] = t[i]), ir[e];
          }
        return "";
      }
      var ii = io("animationend"),
        ia = io("transitionend"),
        ic = !!(ii && ia),
        il = ii || "animationend",
        is = ia || "transitionend";
      function iu(e, t) {
        return e
          ? "object" === k(e)
            ? e[
                t.replace(/-\w/g, function (e) {
                  return e[1].toUpperCase();
                })
              ]
            : "".concat(e, "-").concat(t)
          : null;
      }
      var id = function (e) {
          var t = (0, g.useRef)();
          function n(t) {
            t && (t.removeEventListener(is, e), t.removeEventListener(il, e));
          }
          return (
            g.useEffect(function () {
              return function () {
                n(t.current);
              };
            }, []),
            [
              function (r) {
                t.current && t.current !== r && n(t.current),
                  r &&
                    r !== t.current &&
                    (r.addEventListener(is, e),
                    r.addEventListener(il, e),
                    (t.current = r));
              },
              n,
            ]
          );
        },
        ip = eb() ? g.useLayoutEffect : g.useEffect,
        ih = function () {
          var e = g.useRef(null);
          function t() {
            op.cancel(e.current);
          }
          return (
            g.useEffect(function () {
              return function () {
                t();
              };
            }, []),
            [
              function n(r) {
                var o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 2;
                t();
                var i = op(function () {
                  o <= 1
                    ? r({
                        isCanceled: function () {
                          return i !== e.current;
                        },
                      })
                    : n(r, o - 1);
                });
                e.current = i;
              },
              t,
            ]
          );
        },
        im = [o3, o4, o9, "end"],
        ig = [o3, o8];
      function iv(e) {
        return e === o9 || "end" === e;
      }
      var ib = function (e, t, n) {
          var r = C(e6(o6), 2),
            o = r[0],
            i = r[1],
            a = C(ih(), 2),
            c = a[0],
            l = a[1],
            s = t ? ig : im;
          return (
            ip(
              function () {
                if (o !== o6 && "end" !== o) {
                  var e = s.indexOf(o),
                    t = s[e + 1],
                    r = n(o);
                  !1 === r
                    ? i(t, !0)
                    : t &&
                      c(function (e) {
                        function n() {
                          e.isCanceled() || i(t, !0);
                        }
                        !0 === r ? n() : Promise.resolve(r).then(n);
                      });
                }
              },
              [e, o]
            ),
            g.useEffect(function () {
              return function () {
                l();
              };
            }, []),
            [
              function () {
                i(o3, !0);
              },
              o,
            ]
          );
        },
        iy =
          ((c = ic),
          "object" === k(ic) && (c = ic.transitionSupport),
          ((l = g.forwardRef(function (e, t) {
            var n = e.visible,
              r = void 0 === n || n,
              o = e.removeOnLeave,
              i = void 0 === o || o,
              a = e.forceRender,
              l = e.children,
              s = e.motionName,
              u = e.leavedClassName,
              d = e.eventProps,
              f = g.useContext(oU).motion,
              p = !!(e.motionName && c && !1 !== f),
              h = (0, g.useRef)(),
              m = (0, g.useRef)(),
              v = (function (e, t, n, r) {
                var o,
                  i,
                  a = r.motionEnter,
                  c = void 0 === a || a,
                  l = r.motionAppear,
                  s = void 0 === l || l,
                  u = r.motionLeave,
                  d = void 0 === u || u,
                  f = r.motionDeadline,
                  p = r.motionLeaveImmediately,
                  h = r.onAppearPrepare,
                  m = r.onEnterPrepare,
                  v = r.onLeavePrepare,
                  b = r.onAppearStart,
                  y = r.onEnterStart,
                  x = r.onLeaveStart,
                  w = r.onAppearActive,
                  E = r.onEnterActive,
                  S = r.onLeaveActive,
                  k = r.onAppearEnd,
                  M = r.onEnterEnd,
                  R = r.onLeaveEnd,
                  I = r.onVisibleChanged,
                  P = C(e6(), 2),
                  F = P[0],
                  j = P[1],
                  A =
                    ((o = C(
                      g.useReducer(function (e) {
                        return e + 1;
                      }, 0),
                      2
                    )[1]),
                    (i = g.useRef(o0)),
                    [
                      e0(function () {
                        return i.current;
                      }),
                      e0(function (e) {
                        (i.current = "function" == typeof e ? e(i.current) : e),
                          o();
                      }),
                    ]),
                  T = C(A, 2),
                  N = T[0],
                  _ = T[1],
                  H = C(e6(null), 2),
                  z = H[0],
                  L = H[1],
                  D = N(),
                  B = (0, g.useRef)(!1),
                  V = (0, g.useRef)(null),
                  W = (0, g.useRef)(!1);
                function q() {
                  _(o0), L(null, !0);
                }
                var U = e0(function (e) {
                    var t,
                      r = N();
                    if (r !== o0) {
                      var o = n();
                      if (!e || e.deadline || e.target === o) {
                        var i = W.current;
                        r === o1 && i
                          ? (t = null == k ? void 0 : k(o, e))
                          : r === o2 && i
                          ? (t = null == M ? void 0 : M(o, e))
                          : r === o5 && i && (t = null == R ? void 0 : R(o, e)),
                          i && !1 !== t && q();
                      }
                    }
                  }),
                  X = C(id(U), 1)[0],
                  $ = function (e) {
                    switch (e) {
                      case o1:
                        return O(O(O({}, o3, h), o4, b), o9, w);
                      case o2:
                        return O(O(O({}, o3, m), o4, y), o9, E);
                      case o5:
                        return O(O(O({}, o3, v), o4, x), o9, S);
                      default:
                        return {};
                    }
                  },
                  K = g.useMemo(
                    function () {
                      return $(D);
                    },
                    [D]
                  ),
                  G = C(
                    ib(D, !e, function (e) {
                      if (e === o3) {
                        var t,
                          r = K[o3];
                        return !!r && r(n());
                      }
                      return (
                        Q in K &&
                          L(
                            (null === (t = K[Q]) || void 0 === t
                              ? void 0
                              : t.call(K, n(), null)) || null
                          ),
                        Q === o9 &&
                          D !== o0 &&
                          (X(n()),
                          f > 0 &&
                            (clearTimeout(V.current),
                            (V.current = setTimeout(function () {
                              U({ deadline: !0 });
                            }, f)))),
                        Q === o8 && q(),
                        !0
                      );
                    }),
                    2
                  ),
                  Y = G[0],
                  Q = G[1],
                  Z = iv(Q);
                W.current = Z;
                var J = (0, g.useRef)(null);
                ip(
                  function () {
                    if (!B.current || J.current !== t) {
                      j(t);
                      var n,
                        r = B.current;
                      (B.current = !0),
                        !r && t && s && (n = o1),
                        r && t && c && (n = o2),
                        ((r && !t && d) || (!r && p && !t && d)) && (n = o5);
                      var o = $(n);
                      n && (e || o[o3]) ? (_(n), Y()) : _(o0), (J.current = t);
                    }
                  },
                  [t]
                ),
                  (0, g.useEffect)(
                    function () {
                      ((D !== o1 || s) && (D !== o2 || c) && (D !== o5 || d)) ||
                        _(o0);
                    },
                    [s, c, d]
                  ),
                  (0, g.useEffect)(function () {
                    return function () {
                      (B.current = !1), clearTimeout(V.current);
                    };
                  }, []);
                var ee = g.useRef(!1);
                (0, g.useEffect)(
                  function () {
                    F && (ee.current = !0),
                      void 0 !== F &&
                        D === o0 &&
                        ((ee.current || F) && (null == I || I(F)),
                        (ee.current = !0));
                  },
                  [F, D]
                );
                var et = z;
                return (
                  K[o3] && Q === o4 && (et = ev({ transition: "none" }, et)),
                  [D, Q, et, null != F ? F : t]
                );
              })(
                p,
                r,
                function () {
                  try {
                    return h.current instanceof HTMLElement
                      ? h.current
                      : rH(m.current);
                  } catch (e) {
                    return null;
                  }
                },
                e
              ),
              b = C(v, 4),
              y = b[0],
              x = b[1],
              w = b[2],
              E = b[3],
              S = g.useRef(E);
            E && (S.current = !0);
            var k = g.useCallback(
                function (e) {
                  (h.current = e), rC(t, e);
                },
                [t]
              ),
              M = ev(ev({}, d), {}, { visible: r });
            if (l) {
              if (y === o0)
                R = E
                  ? l(ev({}, M), k)
                  : !i && S.current && u
                  ? l(ev(ev({}, M), {}, { className: u }), k)
                  : !a && (i || u)
                  ? null
                  : l(ev(ev({}, M), {}, { style: { display: "none" } }), k);
              else {
                x === o3
                  ? (I = "prepare")
                  : iv(x)
                  ? (I = "active")
                  : x === o4 && (I = "start");
                var R,
                  I,
                  F = iu(s, "".concat(y, "-").concat(I));
                R = l(
                  ev(
                    ev({}, M),
                    {},
                    {
                      className: P()(
                        iu(s, y),
                        O(O({}, F, F && I), s, "string" == typeof s)
                      ),
                      style: w,
                    }
                  ),
                  k
                );
              }
            } else R = null;
            return (
              g.isValidElement(R) &&
                rO(R) &&
                !rI(R) &&
                (R = g.cloneElement(R, { ref: k })),
              g.createElement(o$, { ref: m }, R)
            );
          })).displayName = "CSSMotion"),
          l),
        ix = "keep",
        iw = "remove",
        iE = "removed";
      function iS(e) {
        var t;
        return ev(
          ev({}, (t = e && "object" === k(e) && "key" in e ? e : { key: e })),
          {},
          { key: String(t.key) }
        );
      }
      function iC() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.map(iS);
      }
      var ik = ["component", "children", "onVisibleChanged", "onAllRemoved"],
        iM = ["status"],
        iO = [
          "eventProps",
          "visible",
          "children",
          "motionName",
          "motionAppear",
          "motionEnter",
          "motionLeave",
          "motionLeaveImmediately",
          "motionDeadline",
          "removeOnLeave",
          "leavedClassName",
          "onAppearPrepare",
          "onAppearStart",
          "onAppearActive",
          "onAppearEnd",
          "onEnterStart",
          "onEnterActive",
          "onEnterEnd",
          "onLeaveStart",
          "onLeaveActive",
          "onLeaveEnd",
        ];
      function iR(e) {
        var t = e.prefixCls,
          n = e.align,
          r = e.arrow,
          o = e.arrowPos,
          i = r || {},
          a = i.className,
          c = i.content,
          l = o.x,
          s = o.y,
          u = g.useRef();
        if (!n || !n.points) return null;
        var d = { position: "absolute" };
        if (!1 !== n.autoArrow) {
          var f = n.points[0],
            p = n.points[1],
            h = f[0],
            m = f[1],
            v = p[0],
            b = p[1];
          h !== v && ["t", "b"].includes(h)
            ? "t" === h
              ? (d.top = 0)
              : (d.bottom = 0)
            : (d.top = void 0 === s ? 0 : s),
            m !== b && ["l", "r"].includes(m)
              ? "l" === m
                ? (d.left = 0)
                : (d.right = 0)
              : (d.left = void 0 === l ? 0 : l);
        }
        return g.createElement(
          "div",
          { ref: u, className: P()("".concat(t, "-arrow"), a), style: d },
          c
        );
      }
      function iI(e) {
        var t = e.prefixCls,
          n = e.open,
          r = e.zIndex,
          o = e.mask,
          i = e.motion;
        return o
          ? g.createElement(
              iy,
              b({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
              function (e) {
                var n = e.className;
                return g.createElement("div", {
                  style: { zIndex: r },
                  className: P()("".concat(t, "-mask"), n),
                });
              }
            )
          : null;
      }
      !(function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iy,
          n = (function (e) {
            r8(r, e);
            var n = on(r);
            function r() {
              var e;
              tS(this, r);
              for (var t = arguments.length, o = Array(t), i = 0; i < t; i++)
                o[i] = arguments[i];
              return (
                O(ot((e = n.call.apply(n, [this].concat(o)))), "state", {
                  keyEntities: [],
                }),
                O(ot(e), "removeKey", function (t) {
                  e.setState(
                    function (e) {
                      return {
                        keyEntities: e.keyEntities.map(function (e) {
                          return e.key !== t
                            ? e
                            : ev(ev({}, e), {}, { status: iE });
                        }),
                      };
                    },
                    function () {
                      0 ===
                        e.state.keyEntities.filter(function (e) {
                          return e.status !== iE;
                        }).length &&
                        e.props.onAllRemoved &&
                        e.props.onAllRemoved();
                    }
                  );
                }),
                e
              );
            }
            return (
              tk(
                r,
                [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        n = this.state.keyEntities,
                        r = this.props,
                        o = r.component,
                        i = r.children,
                        a = r.onVisibleChanged,
                        c = (r.onAllRemoved, R(r, ik)),
                        l = o || g.Fragment,
                        s = {};
                      return (
                        iO.forEach(function (e) {
                          (s[e] = c[e]), delete c[e];
                        }),
                        delete c.keys,
                        g.createElement(
                          l,
                          c,
                          n.map(function (n, r) {
                            var o = n.status,
                              c = R(n, iM);
                            return g.createElement(
                              t,
                              b({}, s, {
                                key: c.key,
                                visible: "add" === o || o === ix,
                                eventProps: c,
                                onVisibleChanged: function (t) {
                                  null == a || a(t, { key: c.key }),
                                    t || e.removeKey(c.key);
                                },
                              }),
                              function (e, t) {
                                return i(ev(ev({}, e), {}, { index: r }), t);
                              }
                            );
                          })
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, t) {
                      var n = e.keys,
                        r = t.keyEntities;
                      return {
                        keyEntities: (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            n = [],
                            r = 0,
                            o = t.length,
                            i = iC(e),
                            a = iC(t);
                          i.forEach(function (e) {
                            for (var t = !1, i = r; i < o; i += 1) {
                              var c = a[i];
                              if (c.key === e.key) {
                                r < i &&
                                  ((n = n.concat(
                                    a.slice(r, i).map(function (e) {
                                      return ev(
                                        ev({}, e),
                                        {},
                                        { status: "add" }
                                      );
                                    })
                                  )),
                                  (r = i)),
                                  n.push(ev(ev({}, c), {}, { status: ix })),
                                  (r += 1),
                                  (t = !0);
                                break;
                              }
                            }
                            t || n.push(ev(ev({}, e), {}, { status: iw }));
                          }),
                            r < o &&
                              (n = n.concat(
                                a.slice(r).map(function (e) {
                                  return ev(ev({}, e), {}, { status: "add" });
                                })
                              ));
                          var c = {};
                          return (
                            n.forEach(function (e) {
                              var t = e.key;
                              c[t] = (c[t] || 0) + 1;
                            }),
                            Object.keys(c)
                              .filter(function (e) {
                                return c[e] > 1;
                              })
                              .forEach(function (e) {
                                (n = n.filter(function (t) {
                                  var n = t.key,
                                    r = t.status;
                                  return n !== e || r !== iw;
                                })).forEach(function (t) {
                                  t.key === e && (t.status = ix);
                                });
                              }),
                            n
                          );
                        })(r, iC(n)).filter(function (e) {
                          var t = r.find(function (t) {
                            var n = t.key;
                            return e.key === n;
                          });
                          return !t || t.status !== iE || e.status !== iw;
                        }),
                      };
                    },
                  },
                ]
              ),
              r
            );
          })(g.Component);
        O(n, "defaultProps", { component: "div" });
      })(ic);
      var iP = g.memo(
          function (e) {
            return e.children;
          },
          function (e, t) {
            return t.cache;
          }
        ),
        iF = g.forwardRef(function (e, t) {
          var n = e.popup,
            r = e.className,
            o = e.prefixCls,
            i = e.style,
            a = e.target,
            c = e.onVisibleChanged,
            l = e.open,
            s = e.keepDom,
            u = e.fresh,
            d = e.onClick,
            f = e.mask,
            p = e.arrow,
            h = e.arrowPos,
            m = e.align,
            v = e.motion,
            y = e.maskMotion,
            x = e.forceRender,
            w = e.getPopupContainer,
            E = e.autoDestroy,
            S = e.portal,
            k = e.zIndex,
            M = e.onMouseEnter,
            O = e.onMouseLeave,
            R = e.onPointerEnter,
            I = e.onPointerDownCapture,
            F = e.ready,
            j = e.offsetX,
            A = e.offsetY,
            T = e.offsetR,
            N = e.offsetB,
            _ = e.onAlign,
            H = e.onPrepare,
            z = e.stretch,
            L = e.targetWidth,
            D = e.targetHeight,
            B = "function" == typeof n ? n() : n,
            V = l || s,
            W = (null == w ? void 0 : w.length) > 0,
            q = C(g.useState(!w || !W), 2),
            U = q[0],
            X = q[1];
          if (
            (e2(
              function () {
                !U && W && a && X(!0);
              },
              [U, W, a]
            ),
            !U)
          )
            return null;
          var $ = "auto",
            K = { left: "-1000vw", top: "-1000vh", right: $, bottom: $ };
          if (F || !l) {
            var G,
              Y = m.points,
              Q =
                m.dynamicInset ||
                (null === (G = m._experimental) || void 0 === G
                  ? void 0
                  : G.dynamicInset),
              Z = Q && "r" === Y[0][1],
              J = Q && "b" === Y[0][0];
            Z ? ((K.right = T), (K.left = $)) : ((K.left = j), (K.right = $)),
              J ? ((K.bottom = N), (K.top = $)) : ((K.top = A), (K.bottom = $));
          }
          var ee = {};
          return (
            z &&
              (z.includes("height") && D
                ? (ee.height = D)
                : z.includes("minHeight") && D && (ee.minHeight = D),
              z.includes("width") && L
                ? (ee.width = L)
                : z.includes("minWidth") && L && (ee.minWidth = L)),
            l || (ee.pointerEvents = "none"),
            g.createElement(
              S,
              {
                open: x || V,
                getContainer:
                  w &&
                  function () {
                    return w(a);
                  },
                autoDestroy: E,
              },
              g.createElement(iI, {
                prefixCls: o,
                open: l,
                zIndex: k,
                mask: f,
                motion: y,
              }),
              g.createElement(oi, { onResize: _, disabled: !l }, function (e) {
                return g.createElement(
                  iy,
                  b(
                    {
                      motionAppear: !0,
                      motionEnter: !0,
                      motionLeave: !0,
                      removeOnLeave: !1,
                      forceRender: x,
                      leavedClassName: "".concat(o, "-hidden"),
                    },
                    v,
                    {
                      onAppearPrepare: H,
                      onEnterPrepare: H,
                      visible: l,
                      onVisibleChanged: function (e) {
                        var t;
                        null == v ||
                          null === (t = v.onVisibleChanged) ||
                          void 0 === t ||
                          t.call(v, e),
                          c(e);
                      },
                    }
                  ),
                  function (n, a) {
                    var c = n.className,
                      s = n.style,
                      f = P()(o, c, r);
                    return g.createElement(
                      "div",
                      {
                        ref: rk(e, t, a),
                        className: f,
                        style: ev(
                          ev(
                            ev(
                              ev(
                                {
                                  "--arrow-x": "".concat(h.x || 0, "px"),
                                  "--arrow-y": "".concat(h.y || 0, "px"),
                                },
                                K
                              ),
                              ee
                            ),
                            s
                          ),
                          {},
                          { boxSizing: "border-box", zIndex: k },
                          i
                        ),
                        onMouseEnter: M,
                        onMouseLeave: O,
                        onPointerEnter: R,
                        onClick: d,
                        onPointerDownCapture: I,
                      },
                      p &&
                        g.createElement(iR, {
                          prefixCls: o,
                          arrow: p,
                          arrowPos: h,
                          align: m,
                        }),
                      g.createElement(iP, { cache: !l && !u }, B)
                    );
                  }
                );
              })
            )
          );
        }),
        ij = g.forwardRef(function (e, t) {
          var n = e.children,
            r = e.getTriggerDOMNode,
            o = rO(n),
            i = rM(
              g.useCallback(
                function (e) {
                  rC(t, r ? r(e) : e);
                },
                [r]
              ),
              rI(n)
            );
          return o ? g.cloneElement(n, { ref: i }) : n;
        }),
        iA = g.createContext(null);
      function iT(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var iN = function (e) {
        if (!e) return !1;
        if (e instanceof Element) {
          if (e.offsetParent) return !0;
          if (e.getBBox) {
            var t = e.getBBox(),
              n = t.width,
              r = t.height;
            if (n || r) return !0;
          }
          if (e.getBoundingClientRect) {
            var o = e.getBoundingClientRect(),
              i = o.width,
              a = o.height;
            if (i || a) return !0;
          }
        }
        return !1;
      };
      function i_(e, t, n, r) {
        return (
          t ||
          (n
            ? { motionName: "".concat(e, "-").concat(n) }
            : r
            ? { motionName: r }
            : null)
        );
      }
      function iH(e) {
        return e.ownerDocument.defaultView;
      }
      function iz(e) {
        for (
          var t = [],
            n = null == e ? void 0 : e.parentElement,
            r = ["hidden", "scroll", "clip", "auto"];
          n;

        ) {
          var o = iH(n).getComputedStyle(n);
          [o.overflowX, o.overflowY, o.overflow].some(function (e) {
            return r.includes(e);
          }) && t.push(n),
            (n = n.parentElement);
        }
        return t;
      }
      function iL(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return Number.isNaN(e) ? t : e;
      }
      function iD(e) {
        return iL(parseFloat(e), 0);
      }
      function iB(e, t) {
        var n = ev({}, e);
        return (
          (t || []).forEach(function (e) {
            if (
              !(e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement)
            ) {
              var t = iH(e).getComputedStyle(e),
                r = t.overflow,
                o = t.overflowClipMargin,
                i = t.borderTopWidth,
                a = t.borderBottomWidth,
                c = t.borderLeftWidth,
                l = t.borderRightWidth,
                s = e.getBoundingClientRect(),
                u = e.offsetHeight,
                d = e.clientHeight,
                f = e.offsetWidth,
                p = e.clientWidth,
                h = iD(i),
                m = iD(a),
                g = iD(c),
                v = iD(l),
                b = iL(Math.round((s.width / f) * 1e3) / 1e3),
                y = iL(Math.round((s.height / u) * 1e3) / 1e3),
                x = h * y,
                w = g * b,
                E = 0,
                S = 0;
              if ("clip" === r) {
                var C = iD(o);
                (E = C * b), (S = C * y);
              }
              var k = s.x + w - E,
                M = s.y + x - S,
                O = k + s.width + 2 * E - w - v * b - (f - p - g - v) * b,
                R = M + s.height + 2 * S - x - m * y - (u - d - h - m) * y;
              (n.left = Math.max(n.left, k)),
                (n.top = Math.max(n.top, M)),
                (n.right = Math.min(n.right, O)),
                (n.bottom = Math.min(n.bottom, R));
            }
          }),
          n
        );
      }
      function iV(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = "".concat(t),
          r = n.match(/^(.*)\%$/);
        return r ? (parseFloat(r[1]) / 100) * e : parseFloat(n);
      }
      function iW(e, t) {
        var n = C(t || [], 2),
          r = n[0],
          o = n[1];
        return [iV(e.width, r), iV(e.height, o)];
      }
      function iq() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return [e[0], e[1]];
      }
      function iU(e, t) {
        var n,
          r = t[0],
          o = t[1];
        return (
          (n =
            "t" === r ? e.y : "b" === r ? e.y + e.height : e.y + e.height / 2),
          {
            x: "l" === o ? e.x : "r" === o ? e.x + e.width : e.x + e.width / 2,
            y: n,
          }
        );
      }
      function iX(e, t) {
        var n = { t: "b", b: "t", l: "r", r: "l" };
        return e
          .map(function (e, r) {
            return r === t ? n[e] || "c" : e;
          })
          .join("");
      }
      var i$ = [
          "prefixCls",
          "children",
          "action",
          "showAction",
          "hideAction",
          "popupVisible",
          "defaultPopupVisible",
          "onPopupVisibleChange",
          "afterPopupVisibleChange",
          "mouseEnterDelay",
          "mouseLeaveDelay",
          "focusDelay",
          "blurDelay",
          "mask",
          "maskClosable",
          "getPopupContainer",
          "forceRender",
          "autoDestroy",
          "destroyPopupOnHide",
          "popup",
          "popupClassName",
          "popupStyle",
          "popupPlacement",
          "builtinPlacements",
          "popupAlign",
          "zIndex",
          "stretch",
          "getPopupClassNameFromAlign",
          "fresh",
          "alignPoint",
          "onPopupClick",
          "onPopupAlign",
          "arrow",
          "popupMotion",
          "maskMotion",
          "popupTransitionName",
          "popupAnimation",
          "maskTransitionName",
          "maskAnimation",
          "className",
          "getTriggerDOMNode",
        ],
        iK = (function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oD;
          return g.forwardRef(function (t, n) {
            var r,
              o,
              i,
              a,
              c,
              l,
              s,
              u,
              d,
              f,
              p,
              h,
              m,
              v,
              b,
              y,
              x = t.prefixCls,
              w = void 0 === x ? "rc-trigger-popup" : x,
              E = t.children,
              S = t.action,
              k = t.showAction,
              M = t.hideAction,
              O = t.popupVisible,
              I = t.defaultPopupVisible,
              F = t.onPopupVisibleChange,
              j = t.afterPopupVisibleChange,
              A = t.mouseEnterDelay,
              T = t.mouseLeaveDelay,
              N = void 0 === T ? 0.1 : T,
              _ = t.focusDelay,
              H = t.blurDelay,
              z = t.mask,
              L = t.maskClosable,
              D = t.getPopupContainer,
              B = t.forceRender,
              V = t.autoDestroy,
              W = t.destroyPopupOnHide,
              q = t.popup,
              U = t.popupClassName,
              X = t.popupStyle,
              $ = t.popupPlacement,
              K = t.builtinPlacements,
              G = void 0 === K ? {} : K,
              Y = t.popupAlign,
              Q = t.zIndex,
              Z = t.stretch,
              J = t.getPopupClassNameFromAlign,
              ee = t.fresh,
              et = t.alignPoint,
              en = t.onPopupClick,
              er = t.onPopupAlign,
              eo = t.arrow,
              ei = t.popupMotion,
              ea = t.maskMotion,
              ec = t.popupTransitionName,
              el = t.popupAnimation,
              es = t.maskTransitionName,
              eu = t.maskAnimation,
              ed = t.className,
              ef = t.getTriggerDOMNode,
              ep = R(t, i$),
              eh = C(g.useState(!1), 2),
              em = eh[0],
              eg = eh[1];
            e2(function () {
              eg(rb());
            }, []);
            var eb = g.useRef({}),
              ey = g.useContext(iA),
              ex = g.useMemo(
                function () {
                  return {
                    registerSubPopup: function (e, t) {
                      (eb.current[e] = t),
                        null == ey || ey.registerSubPopup(e, t);
                    },
                  };
                },
                [ey]
              ),
              ew = oW(),
              eE = C(g.useState(null), 2),
              eS = eE[0],
              eC = eE[1],
              ek = g.useRef(null),
              eM = e0(function (e) {
                (ek.current = e),
                  r_(e) && eS !== e && eC(e),
                  null == ey || ey.registerSubPopup(ew, e);
              }),
              eO = C(g.useState(null), 2),
              eR = eO[0],
              eI = eO[1],
              eF = g.useRef(null),
              ej = e0(function (e) {
                r_(e) && eR !== e && (eI(e), (eF.current = e));
              }),
              eA = g.Children.only(E),
              eT = (null == eA ? void 0 : eA.props) || {},
              eN = {},
              e_ = e0(function (e) {
                var t, n;
                return (
                  (null == eR ? void 0 : eR.contains(e)) ||
                  (null === (t = eP(eR)) || void 0 === t ? void 0 : t.host) ===
                    e ||
                  e === eR ||
                  (null == eS ? void 0 : eS.contains(e)) ||
                  (null === (n = eP(eS)) || void 0 === n ? void 0 : n.host) ===
                    e ||
                  e === eS ||
                  Object.values(eb.current).some(function (t) {
                    return (null == t ? void 0 : t.contains(e)) || e === t;
                  })
                );
              }),
              eH = i_(w, ei, el, ec),
              ez = i_(w, ea, eu, es),
              eL = C(g.useState(I || !1), 2),
              eD = eL[0],
              eB = eL[1],
              eV = null != O ? O : eD,
              eW = e0(function (e) {
                void 0 === O && eB(e);
              });
            e2(
              function () {
                eB(O || !1);
              },
              [O]
            );
            var eq = g.useRef(eV);
            eq.current = eV;
            var eU = g.useRef([]);
            eU.current = [];
            var eX = e0(function (e) {
                var t;
                eW(e),
                  (null !== (t = eU.current[eU.current.length - 1]) &&
                  void 0 !== t
                    ? t
                    : eV) !== e && (eU.current.push(e), null == F || F(e));
              }),
              e$ = g.useRef(),
              eK = function () {
                clearTimeout(e$.current);
              },
              eG = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                eK(),
                  0 === t
                    ? eX(e)
                    : (e$.current = setTimeout(function () {
                        eX(e);
                      }, 1e3 * t));
              };
            g.useEffect(function () {
              return eK;
            }, []);
            var eY = C(g.useState(!1), 2),
              eQ = eY[0],
              eZ = eY[1];
            e2(
              function (e) {
                (!e || eV) && eZ(!0);
              },
              [eV]
            );
            var eJ = C(g.useState(null), 2),
              e1 = eJ[0],
              e5 = eJ[1],
              e6 = C(g.useState(null), 2),
              e3 = e6[0],
              e4 = e6[1],
              e9 = function (e) {
                e4([e.clientX, e.clientY]);
              },
              e8 =
                ((r = et && null !== e3 ? e3 : eR),
                (i = (o = C(
                  g.useState({
                    ready: !1,
                    offsetX: 0,
                    offsetY: 0,
                    offsetR: 0,
                    offsetB: 0,
                    arrowX: 0,
                    arrowY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    align: G[$] || {},
                  }),
                  2
                ))[0]),
                (a = o[1]),
                (c = g.useRef(0)),
                (l = g.useMemo(
                  function () {
                    return eS ? iz(eS) : [];
                  },
                  [eS]
                )),
                (s = g.useRef({})),
                eV || (s.current = {}),
                (u = e0(function () {
                  if (eS && r && eV) {
                    var e = eS.ownerDocument,
                      t = iH(eS).getComputedStyle(eS),
                      n = t.width,
                      o = t.height,
                      i = t.position,
                      c = eS.style.left,
                      u = eS.style.top,
                      d = eS.style.right,
                      f = eS.style.bottom,
                      p = eS.style.overflow,
                      h = ev(ev({}, G[$]), Y),
                      m = e.createElement("div");
                    if (
                      (null === (x = eS.parentElement) ||
                        void 0 === x ||
                        x.appendChild(m),
                      (m.style.left = "".concat(eS.offsetLeft, "px")),
                      (m.style.top = "".concat(eS.offsetTop, "px")),
                      (m.style.position = i),
                      (m.style.height = "".concat(eS.offsetHeight, "px")),
                      (m.style.width = "".concat(eS.offsetWidth, "px")),
                      (eS.style.left = "0"),
                      (eS.style.top = "0"),
                      (eS.style.right = "auto"),
                      (eS.style.bottom = "auto"),
                      (eS.style.overflow = "hidden"),
                      Array.isArray(r))
                    )
                      k = { x: r[0], y: r[1], width: 0, height: 0 };
                    else {
                      var g,
                        v,
                        b,
                        y,
                        x,
                        w,
                        E,
                        S,
                        k,
                        M,
                        O,
                        R = r.getBoundingClientRect();
                      (R.x = null !== (M = R.x) && void 0 !== M ? M : R.left),
                        (R.y = null !== (O = R.y) && void 0 !== O ? O : R.top),
                        (k = {
                          x: R.x,
                          y: R.y,
                          width: R.width,
                          height: R.height,
                        });
                    }
                    var I = eS.getBoundingClientRect();
                    (I.x = null !== (w = I.x) && void 0 !== w ? w : I.left),
                      (I.y = null !== (E = I.y) && void 0 !== E ? E : I.top);
                    var P = e.documentElement,
                      F = P.clientWidth,
                      j = P.clientHeight,
                      A = P.scrollWidth,
                      T = P.scrollHeight,
                      N = P.scrollTop,
                      _ = P.scrollLeft,
                      H = I.height,
                      z = I.width,
                      L = k.height,
                      D = k.width,
                      B = h.htmlRegion,
                      V = "visible",
                      W = "visibleFirst";
                    "scroll" !== B && B !== W && (B = V);
                    var q = B === W,
                      U = iB(
                        { left: -_, top: -N, right: A - _, bottom: T - N },
                        l
                      ),
                      X = iB({ left: 0, top: 0, right: F, bottom: j }, l),
                      K = B === V ? X : U,
                      Q = q ? X : K;
                    (eS.style.left = "auto"),
                      (eS.style.top = "auto"),
                      (eS.style.right = "0"),
                      (eS.style.bottom = "0");
                    var Z = eS.getBoundingClientRect();
                    (eS.style.left = c),
                      (eS.style.top = u),
                      (eS.style.right = d),
                      (eS.style.bottom = f),
                      (eS.style.overflow = p),
                      null === (S = eS.parentElement) ||
                        void 0 === S ||
                        S.removeChild(m);
                    var J = iL(Math.round((z / parseFloat(n)) * 1e3) / 1e3),
                      ee = iL(Math.round((H / parseFloat(o)) * 1e3) / 1e3);
                    if (!(0 === J || 0 === ee || (r_(r) && !iN(r)))) {
                      var et = h.offset,
                        en = h.targetOffset,
                        eo = C(iW(I, et), 2),
                        ei = eo[0],
                        ea = eo[1],
                        ec = C(iW(k, en), 2),
                        el = ec[0],
                        es = ec[1];
                      (k.x -= el), (k.y -= es);
                      var eu = C(h.points || [], 2),
                        ed = eu[0],
                        ef = iq(eu[1]),
                        ep = iq(ed),
                        eh = iU(k, ef),
                        em = iU(I, ep),
                        eg = ev({}, h),
                        eb = eh.x - em.x + ei,
                        ey = eh.y - em.y + ea,
                        ex = e6(eb, ey),
                        ew = e6(eb, ey, X),
                        eE = iU(k, ["t", "l"]),
                        eC = iU(I, ["t", "l"]),
                        ek = iU(k, ["b", "r"]),
                        eM = iU(I, ["b", "r"]),
                        eO = h.overflow || {},
                        eR = eO.adjustX,
                        eI = eO.adjustY,
                        eP = eO.shiftX,
                        eF = eO.shiftY,
                        ej = function (e) {
                          return "boolean" == typeof e ? e : e >= 0;
                        };
                      e3();
                      var eA = ej(eI),
                        eT = ep[0] === ef[0];
                      if (
                        eA &&
                        "t" === ep[0] &&
                        (v > Q.bottom || s.current.bt)
                      ) {
                        var eN = ey;
                        eT ? (eN -= H - L) : (eN = eE.y - eM.y - ea);
                        var e_ = e6(eb, eN),
                          eH = e6(eb, eN, X);
                        e_ > ex || (e_ === ex && (!q || eH >= ew))
                          ? ((s.current.bt = !0),
                            (ey = eN),
                            (ea = -ea),
                            (eg.points = [iX(ep, 0), iX(ef, 0)]))
                          : (s.current.bt = !1);
                      }
                      if (eA && "b" === ep[0] && (g < Q.top || s.current.tb)) {
                        var ez = ey;
                        eT ? (ez += H - L) : (ez = ek.y - eC.y - ea);
                        var eL = e6(eb, ez),
                          eD = e6(eb, ez, X);
                        eL > ex || (eL === ex && (!q || eD >= ew))
                          ? ((s.current.tb = !0),
                            (ey = ez),
                            (ea = -ea),
                            (eg.points = [iX(ep, 0), iX(ef, 0)]))
                          : (s.current.tb = !1);
                      }
                      var eB = ej(eR),
                        eW = ep[1] === ef[1];
                      if (
                        eB &&
                        "l" === ep[1] &&
                        (y > Q.right || s.current.rl)
                      ) {
                        var eq = eb;
                        eW ? (eq -= z - D) : (eq = eE.x - eM.x - ei);
                        var eU = e6(eq, ey),
                          eX = e6(eq, ey, X);
                        eU > ex || (eU === ex && (!q || eX >= ew))
                          ? ((s.current.rl = !0),
                            (eb = eq),
                            (ei = -ei),
                            (eg.points = [iX(ep, 1), iX(ef, 1)]))
                          : (s.current.rl = !1);
                      }
                      if (eB && "r" === ep[1] && (b < Q.left || s.current.lr)) {
                        var e$ = eb;
                        eW ? (e$ += z - D) : (e$ = ek.x - eC.x - ei);
                        var eK = e6(e$, ey),
                          eG = e6(e$, ey, X);
                        eK > ex || (eK === ex && (!q || eG >= ew))
                          ? ((s.current.lr = !0),
                            (eb = e$),
                            (ei = -ei),
                            (eg.points = [iX(ep, 1), iX(ef, 1)]))
                          : (s.current.lr = !1);
                      }
                      e3();
                      var eY = !0 === eP ? 0 : eP;
                      "number" == typeof eY &&
                        (b < X.left &&
                          ((eb -= b - X.left - ei),
                          k.x + D < X.left + eY &&
                            (eb += k.x - X.left + D - eY)),
                        y > X.right &&
                          ((eb -= y - X.right - ei),
                          k.x > X.right - eY && (eb += k.x - X.right + eY)));
                      var eQ = !0 === eF ? 0 : eF;
                      "number" == typeof eQ &&
                        (g < X.top &&
                          ((ey -= g - X.top - ea),
                          k.y + L < X.top + eQ && (ey += k.y - X.top + L - eQ)),
                        v > X.bottom &&
                          ((ey -= v - X.bottom - ea),
                          k.y > X.bottom - eQ && (ey += k.y - X.bottom + eQ)));
                      var eZ = I.x + eb,
                        eJ = I.y + ey,
                        e0 = k.x,
                        e1 = k.y;
                      null == er || er(eS, eg);
                      var e2 = Z.right - I.x - (eb + I.width),
                        e5 = Z.bottom - I.y - (ey + I.height);
                      1 === J && ((eb = Math.round(eb)), (e2 = Math.round(e2))),
                        1 === ee &&
                          ((ey = Math.round(ey)), (e5 = Math.round(e5))),
                        a({
                          ready: !0,
                          offsetX: eb / J,
                          offsetY: ey / ee,
                          offsetR: e2 / J,
                          offsetB: e5 / ee,
                          arrowX:
                            ((Math.max(eZ, e0) + Math.min(eZ + z, e0 + D)) / 2 -
                              eZ) /
                            J,
                          arrowY:
                            ((Math.max(eJ, e1) + Math.min(eJ + H, e1 + L)) / 2 -
                              eJ) /
                            ee,
                          scaleX: J,
                          scaleY: ee,
                          align: eg,
                        });
                    }
                    function e6(e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : K,
                        r = I.x + e,
                        o = I.y + t,
                        i = Math.max(r, n.left),
                        a = Math.max(o, n.top);
                      return Math.max(
                        0,
                        (Math.min(r + z, n.right) - i) *
                          (Math.min(o + H, n.bottom) - a)
                      );
                    }
                    function e3() {
                      (v = (g = I.y + ey) + H), (y = (b = I.x + eb) + z);
                    }
                  }
                })),
                e2(
                  (d = function () {
                    a(function (e) {
                      return ev(ev({}, e), {}, { ready: !1 });
                    });
                  }),
                  [$]
                ),
                e2(
                  function () {
                    eV || d();
                  },
                  [eV]
                ),
                [
                  i.ready,
                  i.offsetX,
                  i.offsetY,
                  i.offsetR,
                  i.offsetB,
                  i.arrowX,
                  i.arrowY,
                  i.scaleX,
                  i.scaleY,
                  i.align,
                  function () {
                    c.current += 1;
                    var e = c.current;
                    Promise.resolve().then(function () {
                      c.current === e && u();
                    });
                  },
                ]),
              e7 = C(e8, 11),
              te = e7[0],
              tt = e7[1],
              tn = e7[2],
              tr = e7[3],
              to = e7[4],
              ti = e7[5],
              ta = e7[6],
              tc = e7[7],
              tl = e7[8],
              ts = e7[9],
              tu = e7[10],
              td = C(
                ((f = void 0 === S ? "hover" : S),
                g.useMemo(
                  function () {
                    var e = iT(null != k ? k : f),
                      t = iT(null != M ? M : f),
                      n = new Set(e),
                      r = new Set(t);
                    return (
                      em &&
                        (n.has("hover") && (n.delete("hover"), n.add("click")),
                        r.has("hover") && (r.delete("hover"), r.add("click"))),
                      [n, r]
                    );
                  },
                  [em, f, k, M]
                )),
                2
              ),
              tf = td[0],
              tp = td[1],
              th = tf.has("click"),
              tm = tp.has("click") || tp.has("contextMenu"),
              tg = e0(function () {
                eQ || tu();
              });
            (p = function () {
              eq.current && et && tm && eG(!1);
            }),
              e2(
                function () {
                  if (eV && eR && eS) {
                    var e = iz(eR),
                      t = iz(eS),
                      n = iH(eS),
                      r = new Set([n].concat(ty(e), ty(t)));
                    function o() {
                      tg(), p();
                    }
                    return (
                      r.forEach(function (e) {
                        e.addEventListener("scroll", o, { passive: !0 });
                      }),
                      n.addEventListener("resize", o, { passive: !0 }),
                      tg(),
                      function () {
                        r.forEach(function (e) {
                          e.removeEventListener("scroll", o),
                            n.removeEventListener("resize", o);
                        });
                      }
                    );
                  }
                },
                [eV, eR, eS]
              ),
              e2(
                function () {
                  tg();
                },
                [e3, $]
              ),
              e2(
                function () {
                  eV && !(null != G && G[$]) && tg();
                },
                [JSON.stringify(Y)]
              );
            var tv = g.useMemo(
              function () {
                var e = (function (e, t, n, r) {
                  for (
                    var o = n.points, i = Object.keys(e), a = 0;
                    a < i.length;
                    a += 1
                  ) {
                    var c,
                      l = i[a];
                    if (
                      (function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : [],
                          n = arguments.length > 2 ? arguments[2] : void 0;
                        return n
                          ? e[0] === t[0]
                          : e[0] === t[0] && e[1] === t[1];
                      })(
                        null === (c = e[l]) || void 0 === c ? void 0 : c.points,
                        o,
                        r
                      )
                    )
                      return "".concat(t, "-placement-").concat(l);
                  }
                  return "";
                })(G, w, ts, et);
                return P()(e, null == J ? void 0 : J(ts));
              },
              [ts, J, G, w, et]
            );
            g.useImperativeHandle(n, function () {
              return {
                nativeElement: eF.current,
                popupElement: ek.current,
                forceAlign: tg,
              };
            });
            var tb = C(g.useState(0), 2),
              tx = tb[0],
              tw = tb[1],
              tE = C(g.useState(0), 2),
              tS = tE[0],
              tC = tE[1],
              tk = function () {
                if (Z && eR) {
                  var e = eR.getBoundingClientRect();
                  tw(e.width), tC(e.height);
                }
              };
            function tM(e, t, n, r) {
              eN[e] = function (o) {
                var i;
                null == r || r(o), eG(t, n);
                for (
                  var a = arguments.length, c = Array(a > 1 ? a - 1 : 0), l = 1;
                  l < a;
                  l++
                )
                  c[l - 1] = arguments[l];
                null === (i = eT[e]) ||
                  void 0 === i ||
                  i.call.apply(i, [eT, o].concat(c));
              };
            }
            e2(
              function () {
                e1 && (tu(), e1(), e5(null));
              },
              [e1]
            ),
              (th || tm) &&
                (eN.onClick = function (e) {
                  var t;
                  eq.current && tm
                    ? eG(!1)
                    : !eq.current && th && (e9(e), eG(!0));
                  for (
                    var n = arguments.length,
                      r = Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  null === (t = eT.onClick) ||
                    void 0 === t ||
                    t.call.apply(t, [eT, e].concat(r));
                });
            var tO =
                ((h = void 0 === L || L),
                ((m = g.useRef(eV)).current = eV),
                (v = g.useRef(!1)),
                g.useEffect(
                  function () {
                    if (tm && eS && (!z || h)) {
                      var e = function () {
                          v.current = !1;
                        },
                        t = function (e) {
                          var t;
                          !m.current ||
                            e_(
                              (null === (t = e.composedPath) ||
                              void 0 === t ||
                              null === (t = t.call(e)) ||
                              void 0 === t
                                ? void 0
                                : t[0]) || e.target
                            ) ||
                            v.current ||
                            eG(!1);
                        },
                        n = iH(eS);
                      n.addEventListener("pointerdown", e, !0),
                        n.addEventListener("mousedown", t, !0),
                        n.addEventListener("contextmenu", t, !0);
                      var r = eP(eR);
                      return (
                        r &&
                          (r.addEventListener("mousedown", t, !0),
                          r.addEventListener("contextmenu", t, !0)),
                        function () {
                          n.removeEventListener("pointerdown", e, !0),
                            n.removeEventListener("mousedown", t, !0),
                            n.removeEventListener("contextmenu", t, !0),
                            r &&
                              (r.removeEventListener("mousedown", t, !0),
                              r.removeEventListener("contextmenu", t, !0));
                        }
                      );
                    }
                  },
                  [tm, eR, eS, z, h]
                ),
                function () {
                  v.current = !0;
                }),
              tR = tf.has("hover"),
              tI = tp.has("hover");
            tR &&
              (tM("onMouseEnter", !0, A, function (e) {
                e9(e);
              }),
              tM("onPointerEnter", !0, A, function (e) {
                e9(e);
              }),
              (b = function (e) {
                (eV || eQ) && null != eS && eS.contains(e.target) && eG(!0, A);
              }),
              et &&
                (eN.onMouseMove = function (e) {
                  var t;
                  null === (t = eT.onMouseMove) ||
                    void 0 === t ||
                    t.call(eT, e);
                })),
              tI &&
                (tM("onMouseLeave", !1, N),
                tM("onPointerLeave", !1, N),
                (y = function () {
                  eG(!1, N);
                })),
              tf.has("focus") && tM("onFocus", !0, _),
              tp.has("focus") && tM("onBlur", !1, H),
              tf.has("contextMenu") &&
                (eN.onContextMenu = function (e) {
                  var t;
                  eq.current && tp.has("contextMenu")
                    ? eG(!1)
                    : (e9(e), eG(!0)),
                    e.preventDefault();
                  for (
                    var n = arguments.length,
                      r = Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  null === (t = eT.onContextMenu) ||
                    void 0 === t ||
                    t.call.apply(t, [eT, e].concat(r));
                }),
              ed && (eN.className = P()(eT.className, ed));
            var tP = ev(ev({}, eT), eN),
              tF = {};
            [
              "onContextMenu",
              "onClick",
              "onMouseDown",
              "onTouchStart",
              "onMouseEnter",
              "onMouseLeave",
              "onFocus",
              "onBlur",
            ].forEach(function (e) {
              ep[e] &&
                (tF[e] = function () {
                  for (
                    var t, n = arguments.length, r = Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  null === (t = tP[e]) ||
                    void 0 === t ||
                    t.call.apply(t, [tP].concat(r)),
                    ep[e].apply(ep, r);
                });
            });
            var tj = g.cloneElement(eA, ev(ev({}, tP), tF)),
              tA = eo ? ev({}, !0 !== eo ? eo : {}) : null;
            return g.createElement(
              g.Fragment,
              null,
              g.createElement(
                oi,
                {
                  disabled: !eV,
                  ref: ej,
                  onResize: function () {
                    tk(), tg();
                  },
                },
                g.createElement(ij, { getTriggerDOMNode: ef }, tj)
              ),
              g.createElement(
                iA.Provider,
                { value: ex },
                g.createElement(iF, {
                  portal: e,
                  ref: eM,
                  prefixCls: w,
                  popup: q,
                  className: P()(U, tv),
                  style: X,
                  target: eR,
                  onMouseEnter: b,
                  onMouseLeave: y,
                  onPointerEnter: b,
                  zIndex: Q,
                  open: eV,
                  keepDom: eQ,
                  fresh: ee,
                  onClick: en,
                  onPointerDownCapture: tO,
                  mask: z,
                  motion: eH,
                  maskMotion: ez,
                  onVisibleChanged: function (e) {
                    eZ(!1), tu(), null == j || j(e);
                  },
                  onPrepare: function () {
                    return new Promise(function (e) {
                      tk(),
                        e5(function () {
                          return e;
                        });
                    });
                  },
                  forceRender: B,
                  autoDestroy: V || W || !1,
                  getPopupContainer: D,
                  align: ts,
                  arrow: tA,
                  arrowPos: { x: ti, y: ta },
                  ready: te,
                  offsetX: tt,
                  offsetY: tn,
                  offsetR: tr,
                  offsetB: to,
                  onAlign: tg,
                  stretch: Z,
                  targetWidth: tx / tc,
                  targetHeight: tS / tl,
                })
              )
            );
          });
        })(oD),
        iG = [
          "prefixCls",
          "disabled",
          "visible",
          "children",
          "popupElement",
          "animation",
          "transitionName",
          "dropdownStyle",
          "dropdownClassName",
          "direction",
          "placement",
          "builtinPlacements",
          "dropdownMatchSelectWidth",
          "dropdownRender",
          "dropdownAlign",
          "getPopupContainer",
          "empty",
          "getTriggerDOMNode",
          "onPopupVisibleChange",
          "onPopupMouseEnter",
        ],
        iY = function (e) {
          var t = !0 === e ? 0 : 1;
          return {
            bottomLeft: {
              points: ["tl", "bl"],
              offset: [0, 4],
              overflow: { adjustX: t, adjustY: 1 },
              htmlRegion: "scroll",
            },
            bottomRight: {
              points: ["tr", "br"],
              offset: [0, 4],
              overflow: { adjustX: t, adjustY: 1 },
              htmlRegion: "scroll",
            },
            topLeft: {
              points: ["bl", "tl"],
              offset: [0, -4],
              overflow: { adjustX: t, adjustY: 1 },
              htmlRegion: "scroll",
            },
            topRight: {
              points: ["br", "tr"],
              offset: [0, -4],
              overflow: { adjustX: t, adjustY: 1 },
              htmlRegion: "scroll",
            },
          };
        },
        iQ = g.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = (e.disabled, e.visible),
            o = e.children,
            i = e.popupElement,
            a = e.animation,
            c = e.transitionName,
            l = e.dropdownStyle,
            s = e.dropdownClassName,
            u = e.direction,
            d = e.placement,
            f = e.builtinPlacements,
            p = e.dropdownMatchSelectWidth,
            h = e.dropdownRender,
            m = e.dropdownAlign,
            v = e.getPopupContainer,
            y = e.empty,
            x = e.getTriggerDOMNode,
            w = e.onPopupVisibleChange,
            E = e.onPopupMouseEnter,
            S = R(e, iG),
            C = "".concat(n, "-dropdown"),
            k = i;
          h && (k = h(i));
          var M = g.useMemo(
              function () {
                return f || iY(p);
              },
              [f, p]
            ),
            I = a ? "".concat(C, "-").concat(a) : c,
            F = "number" == typeof p,
            j = g.useMemo(
              function () {
                return F ? null : !1 === p ? "minWidth" : "width";
              },
              [p, F]
            ),
            A = l;
          F && (A = ev(ev({}, A), {}, { width: p }));
          var T = g.useRef(null);
          return (
            g.useImperativeHandle(t, function () {
              return {
                getPopupElement: function () {
                  var e;
                  return null === (e = T.current) || void 0 === e
                    ? void 0
                    : e.popupElement;
                },
              };
            }),
            g.createElement(
              iK,
              b({}, S, {
                showAction: w ? ["click"] : [],
                hideAction: w ? ["click"] : [],
                popupPlacement:
                  d ||
                  ("rtl" === (void 0 === u ? "ltr" : u)
                    ? "bottomRight"
                    : "bottomLeft"),
                builtinPlacements: M,
                prefixCls: C,
                popupTransitionName: I,
                popup: g.createElement("div", { onMouseEnter: E }, k),
                ref: T,
                stretch: j,
                popupAlign: m,
                popupVisible: r,
                getPopupContainer: v,
                popupClassName: P()(s, O({}, "".concat(C, "-empty"), y)),
                popupStyle: A,
                getTriggerDOMNode: x,
                onPopupVisibleChange: w,
              }),
              o
            )
          );
        });
      function iZ(e, t) {
        var n,
          r = e.key;
        return ("value" in e && (n = e.value), null != r)
          ? r
          : void 0 !== n
          ? n
          : "rc-index-key-".concat(t);
      }
      function iJ(e) {
        return void 0 !== e && !Number.isNaN(e);
      }
      function i0(e, t) {
        var n = e || {},
          r = n.label,
          o = n.value,
          i = n.options,
          a = n.groupLabel,
          c = r || (t ? "children" : "label");
        return {
          label: c,
          value: o || "value",
          options: i || "options",
          groupLabel: a || c,
        };
      }
      function i1(e) {
        var t = ev({}, e);
        return (
          "props" in t ||
            Object.defineProperty(t, "props", {
              get: function () {
                return (
                  e_(
                    !1,
                    "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."
                  ),
                  t
                );
              },
            }),
          t
        );
      }
      var i2 = function (e, t, n) {
          if (!t || !t.length) return null;
          var r = !1,
            o = (function e(t, n) {
              var o = oK(n),
                i = o[0],
                a = o.slice(1);
              if (!i) return [t];
              var c = t.split(i);
              return (
                (r = r || c.length > 1),
                c
                  .reduce(function (t, n) {
                    return [].concat(ty(t), ty(e(n, a)));
                  }, [])
                  .filter(Boolean)
              );
            })(e, t);
          return r ? (void 0 !== n ? o.slice(0, n) : o) : null;
        },
        i5 = g.createContext(null);
      function i6(e) {
        var t = e.visible,
          n = e.values;
        return t
          ? g.createElement(
              "span",
              {
                "aria-live": "polite",
                style: {
                  width: 0,
                  height: 0,
                  position: "absolute",
                  overflow: "hidden",
                  opacity: 0,
                },
              },
              "".concat(
                n
                  .slice(0, 50)
                  .map(function (e) {
                    var t = e.label,
                      n = e.value;
                    return ["number", "string"].includes(k(t)) ? t : n;
                  })
                  .join(", ")
              ),
              n.length > 50 ? ", ..." : null
            )
          : null;
      }
      var i3 = [
          "id",
          "prefixCls",
          "className",
          "showSearch",
          "tagRender",
          "direction",
          "omitDomProps",
          "displayValues",
          "onDisplayValuesChange",
          "emptyOptions",
          "notFoundContent",
          "onClear",
          "mode",
          "disabled",
          "loading",
          "getInputElement",
          "getRawInputElement",
          "open",
          "defaultOpen",
          "onDropdownVisibleChange",
          "activeValue",
          "onActiveValueChange",
          "activeDescendantId",
          "searchValue",
          "autoClearSearchValue",
          "onSearch",
          "onSearchSplit",
          "tokenSeparators",
          "allowClear",
          "prefix",
          "suffixIcon",
          "clearIcon",
          "OptionList",
          "animation",
          "transitionName",
          "dropdownStyle",
          "dropdownClassName",
          "dropdownMatchSelectWidth",
          "dropdownRender",
          "dropdownAlign",
          "placement",
          "builtinPlacements",
          "getPopupContainer",
          "showAction",
          "onFocus",
          "onBlur",
          "onKeyUp",
          "onKeyDown",
          "onMouseDown",
        ],
        i4 = [
          "value",
          "onChange",
          "removeIcon",
          "placeholder",
          "autoFocus",
          "maxTagCount",
          "maxTagTextLength",
          "maxTagPlaceholder",
          "choiceTransitionName",
          "onInputKeyDown",
          "onPopupScroll",
          "tabIndex",
        ],
        i9 = function (e) {
          return "tags" === e || "multiple" === e;
        },
        i8 = g.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l,
            s = e.id,
            u = e.prefixCls,
            d = e.className,
            f = e.showSearch,
            p = e.tagRender,
            h = e.direction,
            m = e.omitDomProps,
            v = e.displayValues,
            y = e.onDisplayValuesChange,
            x = e.emptyOptions,
            w = e.notFoundContent,
            E = void 0 === w ? "Not Found" : w,
            S = e.onClear,
            k = e.mode,
            M = e.disabled,
            I = e.loading,
            F = e.getInputElement,
            j = e.getRawInputElement,
            A = e.open,
            T = e.defaultOpen,
            N = e.onDropdownVisibleChange,
            _ = e.activeValue,
            H = e.onActiveValueChange,
            z = e.activeDescendantId,
            L = e.searchValue,
            D = e.autoClearSearchValue,
            B = e.onSearch,
            V = e.onSearchSplit,
            W = e.tokenSeparators,
            q = e.allowClear,
            U = e.prefix,
            X = e.suffixIcon,
            $ = e.clearIcon,
            K = e.OptionList,
            G = e.animation,
            Y = e.transitionName,
            Q = e.dropdownStyle,
            Z = e.dropdownClassName,
            J = e.dropdownMatchSelectWidth,
            ee = e.dropdownRender,
            et = e.dropdownAlign,
            en = e.placement,
            er = e.builtinPlacements,
            eo = e.getPopupContainer,
            ei = e.showAction,
            ea = void 0 === ei ? [] : ei,
            ec = e.onFocus,
            el = e.onBlur,
            es = e.onKeyUp,
            eu = e.onKeyDown,
            ed = e.onMouseDown,
            ef = R(e, i3),
            ep = i9(k),
            eh = (void 0 !== f ? f : ep) || "combobox" === k,
            em = ev({}, ef);
          i4.forEach(function (e) {
            delete em[e];
          }),
            null == m ||
              m.forEach(function (e) {
                delete em[e];
              });
          var eg = C(g.useState(!1), 2),
            eb = eg[0],
            ey = eg[1];
          g.useEffect(function () {
            ey(rb());
          }, []);
          var ex = g.useRef(null),
            ew = g.useRef(null),
            eE = g.useRef(null),
            eS = g.useRef(null),
            eC = g.useRef(null),
            ek = g.useRef(!1),
            eM = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 10,
                t = C(g.useState(!1), 2),
                n = t[0],
                r = t[1],
                o = g.useRef(null),
                i = function () {
                  window.clearTimeout(o.current);
                };
              return (
                g.useEffect(function () {
                  return i;
                }, []),
                [
                  n,
                  function (t, n) {
                    i(),
                      (o.current = window.setTimeout(function () {
                        r(t), n && n();
                      }, e));
                  },
                  i,
                ]
              );
            })(),
            eO = C(eM, 3),
            eR = eO[0],
            eI = eO[1],
            eP = eO[2];
          g.useImperativeHandle(t, function () {
            var e, t;
            return {
              focus:
                null === (e = eS.current) || void 0 === e ? void 0 : e.focus,
              blur: null === (t = eS.current) || void 0 === t ? void 0 : t.blur,
              scrollTo: function (e) {
                var t;
                return null === (t = eC.current) || void 0 === t
                  ? void 0
                  : t.scrollTo(e);
              },
              nativeElement: ex.current || ew.current,
            };
          });
          var eF = g.useMemo(
              function () {
                if ("combobox" !== k) return L;
                var e,
                  t = null === (e = v[0]) || void 0 === e ? void 0 : e.value;
                return "string" == typeof t || "number" == typeof t
                  ? String(t)
                  : "";
              },
              [L, k, v]
            ),
            ej = ("combobox" === k && "function" == typeof F && F()) || null,
            eA = "function" == typeof j && j(),
            eT = rM(
              ew,
              null == eA || null === (i = eA.props) || void 0 === i
                ? void 0
                : i.ref
            ),
            eN = C(g.useState(!1), 2),
            e_ = eN[0],
            eH = eN[1];
          e2(function () {
            eH(!0);
          }, []);
          var ez = C(e4(!1, { defaultValue: T, value: A }), 2),
            eL = ez[0],
            eD = ez[1],
            eB = !!e_ && eL,
            eV = !E && x;
          (M || (eV && eB && "combobox" === k)) && (eB = !1);
          var eW = !eV && eB,
            eq = g.useCallback(
              function (e) {
                var t = void 0 !== e ? e : !eB;
                M || (eD(t), eB !== t && (null == N || N(t)));
              },
              [M, eB, eD, N]
            ),
            eU = g.useMemo(
              function () {
                return (W || []).some(function (e) {
                  return ["\n", "\r\n"].includes(e);
                });
              },
              [W]
            ),
            eX = g.useContext(i5) || {},
            e$ = eX.maxCount,
            eK = eX.rawValues,
            eG = function (e, t, n) {
              if (!(ep && iJ(e$)) || !((null == eK ? void 0 : eK.size) >= e$)) {
                var r = !0,
                  o = e;
                null == H || H(null);
                var i = i2(e, W, iJ(e$) ? e$ - eK.size : void 0),
                  a = n ? null : i;
                return (
                  "combobox" !== k &&
                    a &&
                    ((o = ""), null == V || V(a), eq(!1), (r = !1)),
                  B && eF !== o && B(o, { source: t ? "typing" : "effect" }),
                  r
                );
              }
            };
          g.useEffect(
            function () {
              eB || ep || "combobox" === k || eG("", !1, !1);
            },
            [eB]
          ),
            g.useEffect(
              function () {
                eL && M && eD(!1), M && !ek.current && eI(!1);
              },
              [M]
            );
          var eY = C(rA(), 2),
            eQ = eY[0],
            eZ = eY[1],
            eJ = g.useRef(!1),
            e0 = g.useRef(!1),
            e1 = [];
          g.useEffect(function () {
            return function () {
              e1.forEach(function (e) {
                return clearTimeout(e);
              }),
                e1.splice(0, e1.length);
            };
          }, []);
          var e5 = C(g.useState({}), 2)[1];
          eA &&
            (a = function (e) {
              eq(e);
            }),
            (n = function () {
              var e;
              return [
                ex.current,
                null === (e = eE.current) || void 0 === e
                  ? void 0
                  : e.getPopupElement(),
              ];
            }),
            (r = !!eA),
            ((o = g.useRef(null)).current = {
              open: eW,
              triggerOpen: eq,
              customizedTrigger: r,
            }),
            g.useEffect(function () {
              function e(e) {
                if (
                  null === (t = o.current) ||
                  void 0 === t ||
                  !t.customizedTrigger
                ) {
                  var t,
                    r = e.target;
                  r.shadowRoot && e.composed && (r = e.composedPath()[0] || r),
                    o.current.open &&
                      n()
                        .filter(function (e) {
                          return e;
                        })
                        .every(function (e) {
                          return !e.contains(r) && e !== r;
                        }) &&
                      o.current.triggerOpen(!1);
                }
              }
              return (
                window.addEventListener("mousedown", e),
                function () {
                  return window.removeEventListener("mousedown", e);
                }
              );
            }, []);
          var e6 = g.useMemo(
              function () {
                return ev(
                  ev({}, e),
                  {},
                  {
                    notFoundContent: E,
                    open: eB,
                    triggerOpen: eW,
                    id: s,
                    showSearch: eh,
                    multiple: ep,
                    toggleOpen: eq,
                  }
                );
              },
              [e, E, eW, eB, s, eh, ep, eq]
            ),
            e3 = !!X || I;
          e3 &&
            (c = g.createElement(rP, {
              className: P()(
                "".concat(u, "-arrow"),
                O({}, "".concat(u, "-arrow-loading"), I)
              ),
              customizeIcon: X,
              customizeIconProps: {
                loading: I,
                searchValue: eF,
                open: eB,
                focused: eR,
                showSearch: eh,
              },
            }));
          var e9 = rF(
              u,
              function () {
                var e;
                null == S || S(),
                  null === (e = eS.current) || void 0 === e || e.focus(),
                  y([], { type: "clear", values: v }),
                  eG("", !1, !1);
              },
              v,
              q,
              $,
              M,
              eF,
              k
            ),
            e8 = e9.allowClear,
            e7 = e9.clearIcon,
            te = g.createElement(K, { ref: eC }),
            tt = P()(
              u,
              d,
              O(
                O(
                  O(
                    O(
                      O(
                        O(
                          O(
                            O(
                              O(
                                O({}, "".concat(u, "-focused"), eR),
                                "".concat(u, "-multiple"),
                                ep
                              ),
                              "".concat(u, "-single"),
                              !ep
                            ),
                            "".concat(u, "-allow-clear"),
                            q
                          ),
                          "".concat(u, "-show-arrow"),
                          e3
                        ),
                        "".concat(u, "-disabled"),
                        M
                      ),
                      "".concat(u, "-loading"),
                      I
                    ),
                    "".concat(u, "-open"),
                    eB
                  ),
                  "".concat(u, "-customize-input"),
                  ej
                ),
                "".concat(u, "-show-search"),
                eh
              )
            ),
            tn = g.createElement(
              iQ,
              {
                ref: eE,
                disabled: M,
                prefixCls: u,
                visible: eW,
                popupElement: te,
                animation: G,
                transitionName: Y,
                dropdownStyle: Q,
                dropdownClassName: Z,
                direction: h,
                dropdownMatchSelectWidth: J,
                dropdownRender: ee,
                dropdownAlign: et,
                placement: en,
                builtinPlacements: er,
                getPopupContainer: eo,
                empty: x,
                getTriggerDOMNode: function (e) {
                  return ew.current || e;
                },
                onPopupVisibleChange: a,
                onPopupMouseEnter: function () {
                  e5({});
                },
              },
              eA
                ? g.cloneElement(eA, { ref: eT })
                : g.createElement(
                    oT,
                    b({}, e, {
                      domRef: ew,
                      prefixCls: u,
                      inputElement: ej,
                      ref: eS,
                      id: s,
                      prefix: U,
                      showSearch: eh,
                      autoClearSearchValue: D,
                      mode: k,
                      activeDescendantId: z,
                      tagRender: p,
                      values: v,
                      open: eB,
                      onToggleOpen: eq,
                      activeValue: _,
                      searchValue: eF,
                      onSearch: eG,
                      onSearchSubmit: function (e) {
                        e && e.trim() && B(e, { source: "submit" });
                      },
                      onRemove: function (e) {
                        y(
                          v.filter(function (t) {
                            return t !== e;
                          }),
                          { type: "remove", values: [e] }
                        );
                      },
                      tokenWithEnter: eU,
                    })
                  )
            );
          return (
            (l = eA
              ? tn
              : g.createElement(
                  "div",
                  b({ className: tt }, em, {
                    ref: ex,
                    onMouseDown: function (e) {
                      var t,
                        n = e.target,
                        r =
                          null === (t = eE.current) || void 0 === t
                            ? void 0
                            : t.getPopupElement();
                      if (r && r.contains(n)) {
                        var o = setTimeout(function () {
                          var e,
                            t = e1.indexOf(o);
                          -1 !== t && e1.splice(t, 1),
                            eP(),
                            eb ||
                              r.contains(document.activeElement) ||
                              null === (e = eS.current) ||
                              void 0 === e ||
                              e.focus();
                        });
                        e1.push(o);
                      }
                      for (
                        var i = arguments.length,
                          a = Array(i > 1 ? i - 1 : 0),
                          c = 1;
                        c < i;
                        c++
                      )
                        a[c - 1] = arguments[c];
                      null == ed || ed.apply(void 0, [e].concat(a));
                    },
                    onKeyDown: function (e) {
                      var t,
                        n = eQ(),
                        r = e.key,
                        o = "Enter" === r;
                      if (
                        (o &&
                          ("combobox" !== k && e.preventDefault(),
                          eB || eq(!0)),
                        eZ(!!eF),
                        "Backspace" === r && !n && ep && !eF && v.length)
                      ) {
                        for (
                          var i = ty(v), a = null, c = i.length - 1;
                          c >= 0;
                          c -= 1
                        ) {
                          var l = i[c];
                          if (!l.disabled) {
                            i.splice(c, 1), (a = l);
                            break;
                          }
                        }
                        a && y(i, { type: "remove", values: [a] });
                      }
                      for (
                        var s = arguments.length,
                          u = Array(s > 1 ? s - 1 : 0),
                          d = 1;
                        d < s;
                        d++
                      )
                        u[d - 1] = arguments[d];
                      !eB ||
                        (o && eJ.current) ||
                        null === (t = eC.current) ||
                        void 0 === t ||
                        t.onKeyDown.apply(t, [e].concat(u)),
                        o && (eJ.current = !0),
                        null == eu || eu.apply(void 0, [e].concat(u));
                    },
                    onKeyUp: function (e) {
                      for (
                        var t,
                          n = arguments.length,
                          r = Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      eB &&
                        (null === (t = eC.current) ||
                          void 0 === t ||
                          t.onKeyUp.apply(t, [e].concat(r))),
                        "Enter" === e.key && (eJ.current = !1),
                        null == es || es.apply(void 0, [e].concat(r));
                    },
                    onFocus: function () {
                      eI(!0),
                        !M &&
                          (ec && !e0.current && ec.apply(void 0, arguments),
                          ea.includes("focus") && eq(!0)),
                        (e0.current = !0);
                    },
                    onBlur: function () {
                      (ek.current = !0),
                        eI(!1, function () {
                          (e0.current = !1), (ek.current = !1), eq(!1);
                        }),
                        !M &&
                          (eF &&
                            ("tags" === k
                              ? B(eF, { source: "submit" })
                              : "multiple" === k && B("", { source: "blur" })),
                          el && el.apply(void 0, arguments));
                    },
                  }),
                  g.createElement(i6, { visible: eR && !eB, values: v }),
                  tn,
                  c,
                  e8 && e7
                )),
            g.createElement(rj.Provider, { value: e6 }, l)
          );
        }),
        i7 = function () {
          return null;
        };
      i7.isSelectOptGroup = !0;
      var ae = function () {
        return null;
      };
      function at(e, t) {
        var n = Object.assign({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
      ae.isSelectOption = !0;
      var an = g.forwardRef(function (e, t) {
        var n = e.height,
          r = e.offsetY,
          o = e.offsetX,
          i = e.children,
          a = e.prefixCls,
          c = e.onInnerResize,
          l = e.innerProps,
          s = e.rtl,
          u = e.extra,
          d = {},
          f = { display: "flex", flexDirection: "column" };
        return (
          void 0 !== r &&
            ((d = { height: n, position: "relative", overflow: "hidden" }),
            (f = ev(
              ev({}, f),
              {},
              O(
                O(
                  O(
                    O(
                      O(
                        { transform: "translateY(".concat(r, "px)") },
                        s ? "marginRight" : "marginLeft",
                        -o
                      ),
                      "position",
                      "absolute"
                    ),
                    "left",
                    0
                  ),
                  "right",
                  0
                ),
                "top",
                0
              )
            ))),
          g.createElement(
            "div",
            { style: d },
            g.createElement(
              oi,
              {
                onResize: function (e) {
                  e.offsetHeight && c && c();
                },
              },
              g.createElement(
                "div",
                b(
                  {
                    style: f,
                    className: P()(O({}, "".concat(a, "-holder-inner"), a)),
                    ref: t,
                  },
                  l
                ),
                i,
                u
              )
            )
          )
        );
      });
      function ar(e) {
        var t = e.children,
          n = e.setRef,
          r = g.useCallback(function (e) {
            n(e);
          }, []);
        return g.cloneElement(t, { ref: r });
      }
      an.displayName = "Filler";
      var ao =
          ("undefined" == typeof navigator ? "undefined" : k(navigator)) ===
            "object" && /Firefox/i.test(navigator.userAgent),
        ai = function (e, t, n, r) {
          var o = (0, g.useRef)(!1),
            i = (0, g.useRef)(null),
            a = (0, g.useRef)({ top: e, bottom: t, left: n, right: r });
          return (
            (a.current.top = e),
            (a.current.bottom = t),
            (a.current.left = n),
            (a.current.right = r),
            function (e, t) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = e
                  ? (t < 0 && a.current.left) || (t > 0 && a.current.right)
                  : (t < 0 && a.current.top) || (t > 0 && a.current.bottom);
              return (
                n && r
                  ? (clearTimeout(i.current), (o.current = !1))
                  : (!r || o.current) &&
                    (clearTimeout(i.current),
                    (o.current = !0),
                    (i.current = setTimeout(function () {
                      o.current = !1;
                    }, 50))),
                !o.current && r
              );
            }
          );
        },
        aa = (function () {
          function e() {
            tS(this, e),
              O(this, "maps", void 0),
              O(this, "id", 0),
              O(this, "diffKeys", new Set()),
              (this.maps = Object.create(null));
          }
          return (
            tk(e, [
              {
                key: "set",
                value: function (e, t) {
                  (this.maps[e] = t), (this.id += 1), this.diffKeys.add(e);
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this.maps[e];
                },
              },
              {
                key: "resetRecord",
                value: function () {
                  this.diffKeys.clear();
                },
              },
              {
                key: "getRecord",
                value: function () {
                  return this.diffKeys;
                },
              },
            ]),
            e
          );
        })();
      function ac(e) {
        var t = parseFloat(e);
        return isNaN(t) ? 0 : t;
      }
      var al = 14 / 15;
      function as(e) {
        return Math.floor(Math.pow(e, 0.5));
      }
      function au(e, t) {
        return (
          ("touches" in e ? e.touches[0] : e)[t ? "pageX" : "pageY"] -
          window[t ? "scrollX" : "scrollY"]
        );
      }
      var ad = g.forwardRef(function (e, t) {
        var n = e.prefixCls,
          r = e.rtl,
          o = e.scrollOffset,
          i = e.scrollRange,
          a = e.onStartMove,
          c = e.onStopMove,
          l = e.onScroll,
          s = e.horizontal,
          u = e.spinSize,
          d = e.containerSize,
          f = e.style,
          p = e.thumbStyle,
          h = C(g.useState(!1), 2),
          m = h[0],
          v = h[1],
          b = C(g.useState(null), 2),
          y = b[0],
          x = b[1],
          w = C(g.useState(null), 2),
          E = w[0],
          S = w[1],
          k = !r,
          M = g.useRef(),
          R = g.useRef(),
          I = C(g.useState(!1), 2),
          F = I[0],
          j = I[1],
          A = g.useRef(),
          T = function () {
            clearTimeout(A.current),
              j(!0),
              (A.current = setTimeout(function () {
                j(!1);
              }, 3e3));
          },
          N = i - d || 0,
          _ = d - u || 0,
          H = g.useMemo(
            function () {
              return 0 === o || 0 === N ? 0 : (o / N) * _;
            },
            [o, N, _]
          ),
          z = g.useRef({ top: H, dragging: m, pageY: y, startTop: E });
        z.current = { top: H, dragging: m, pageY: y, startTop: E };
        var L = function (e) {
          v(!0),
            x(au(e, s)),
            S(z.current.top),
            a(),
            e.stopPropagation(),
            e.preventDefault();
        };
        g.useEffect(function () {
          var e = function (e) {
              e.preventDefault();
            },
            t = M.current,
            n = R.current;
          return (
            t.addEventListener("touchstart", e, { passive: !1 }),
            n.addEventListener("touchstart", L, { passive: !1 }),
            function () {
              t.removeEventListener("touchstart", e),
                n.removeEventListener("touchstart", L);
            }
          );
        }, []);
        var D = g.useRef();
        D.current = N;
        var B = g.useRef();
        (B.current = _),
          g.useEffect(
            function () {
              if (m) {
                var e,
                  t = function (t) {
                    var n = z.current,
                      r = n.dragging,
                      o = n.pageY,
                      i = n.startTop;
                    op.cancel(e);
                    var a = M.current.getBoundingClientRect(),
                      c = d / (s ? a.width : a.height);
                    if (r) {
                      var u = (au(t, s) - o) * c,
                        f = i;
                      !k && s ? (f -= u) : (f += u);
                      var p = D.current,
                        h = B.current,
                        m = Math.ceil((h ? f / h : 0) * p);
                      (m = Math.min((m = Math.max(m, 0)), p)),
                        (e = op(function () {
                          l(m, s);
                        }));
                    }
                  },
                  n = function () {
                    v(!1), c();
                  };
                return (
                  window.addEventListener("mousemove", t, { passive: !0 }),
                  window.addEventListener("touchmove", t, { passive: !0 }),
                  window.addEventListener("mouseup", n, { passive: !0 }),
                  window.addEventListener("touchend", n, { passive: !0 }),
                  function () {
                    window.removeEventListener("mousemove", t),
                      window.removeEventListener("touchmove", t),
                      window.removeEventListener("mouseup", n),
                      window.removeEventListener("touchend", n),
                      op.cancel(e);
                  }
                );
              }
            },
            [m]
          ),
          g.useEffect(
            function () {
              return (
                T(),
                function () {
                  clearTimeout(A.current);
                }
              );
            },
            [o]
          ),
          g.useImperativeHandle(t, function () {
            return { delayHidden: T };
          });
        var V = "".concat(n, "-scrollbar"),
          W = { position: "absolute", visibility: F ? null : "hidden" },
          q = {
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: 99,
            cursor: "pointer",
            userSelect: "none",
          };
        return (
          s
            ? ((W.height = 8),
              (W.left = 0),
              (W.right = 0),
              (W.bottom = 0),
              (q.height = "100%"),
              (q.width = u),
              k ? (q.left = H) : (q.right = H))
            : ((W.width = 8),
              (W.top = 0),
              (W.bottom = 0),
              k ? (W.right = 0) : (W.left = 0),
              (q.width = "100%"),
              (q.height = u),
              (q.top = H)),
          g.createElement(
            "div",
            {
              ref: M,
              className: P()(
                V,
                O(
                  O(
                    O({}, "".concat(V, "-horizontal"), s),
                    "".concat(V, "-vertical"),
                    !s
                  ),
                  "".concat(V, "-visible"),
                  F
                )
              ),
              style: ev(ev({}, W), f),
              onMouseDown: function (e) {
                e.stopPropagation(), e.preventDefault();
              },
              onMouseMove: T,
            },
            g.createElement("div", {
              ref: R,
              className: P()(
                "".concat(V, "-thumb"),
                O({}, "".concat(V, "-thumb-moving"), m)
              ),
              style: ev(ev({}, q), p),
              onMouseDown: L,
            })
          )
        );
      });
      function af() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (e / t) * e;
        return isNaN(n) && (n = 0), Math.floor((n = Math.max(n, 20)));
      }
      var ap = [
          "prefixCls",
          "className",
          "height",
          "itemHeight",
          "fullHeight",
          "style",
          "data",
          "children",
          "itemKey",
          "virtual",
          "direction",
          "scrollWidth",
          "component",
          "onScroll",
          "onVirtualScroll",
          "onVisibleChange",
          "innerProps",
          "extraRender",
          "styles",
        ],
        ah = [],
        am = { overflowY: "auto", overflowAnchor: "none" },
        ag = g.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l,
            s,
            u,
            d,
            f,
            p,
            h,
            m,
            v,
            y,
            x,
            w,
            E,
            S,
            M,
            I,
            F,
            j,
            A,
            T,
            N,
            _,
            H,
            z,
            L,
            D,
            B,
            V = e.prefixCls,
            W = void 0 === V ? "rc-virtual-list" : V,
            q = e.className,
            U = e.height,
            X = e.itemHeight,
            $ = e.fullHeight,
            K = e.style,
            G = e.data,
            Y = e.children,
            Q = e.itemKey,
            Z = e.virtual,
            J = e.direction,
            ee = e.scrollWidth,
            et = e.component,
            en = e.onScroll,
            er = e.onVirtualScroll,
            eo = e.onVisibleChange,
            ei = e.innerProps,
            ea = e.extraRender,
            ec = e.styles,
            el = R(e, ap),
            es = g.useCallback(
              function (e) {
                return "function" == typeof Q
                  ? Q(e)
                  : null == e
                  ? void 0
                  : e[Q];
              },
              [Q]
            ),
            eu = (function (e, t, n) {
              var r = C(g.useState(0), 2),
                o = r[0],
                i = r[1],
                a = (0, g.useRef)(new Map()),
                c = (0, g.useRef)(new aa()),
                l = (0, g.useRef)(0);
              function s() {
                l.current += 1;
              }
              function u() {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                s();
                var t = function () {
                  a.current.forEach(function (e, t) {
                    if (e && e.offsetParent) {
                      var n = rH(e),
                        r = n.offsetHeight,
                        o = getComputedStyle(n),
                        i = o.marginTop,
                        a = o.marginBottom,
                        l = r + ac(i) + ac(a);
                      c.current.get(t) !== l && c.current.set(t, l);
                    }
                  }),
                    i(function (e) {
                      return e + 1;
                    });
                };
                if (e) t();
                else {
                  l.current += 1;
                  var n = l.current;
                  Promise.resolve().then(function () {
                    n === l.current && t();
                  });
                }
              }
              return (
                (0, g.useEffect)(function () {
                  return s;
                }, []),
                [
                  function (r, o) {
                    var i = e(r),
                      c = a.current.get(i);
                    o ? (a.current.set(i, o), u()) : a.current.delete(i),
                      !c != !o && (o ? null == t || t(r) : null == n || n(r));
                  },
                  u,
                  c.current,
                  o,
                ]
              );
            })(es, null, null),
            ed = C(eu, 4),
            ef = ed[0],
            ep = ed[1],
            eh = ed[2],
            em = ed[3],
            eg = !!(!1 !== Z && U && X),
            eb = g.useMemo(
              function () {
                return Object.values(eh.maps).reduce(function (e, t) {
                  return e + t;
                }, 0);
              },
              [eh.id, eh.maps]
            ),
            ey = eg && G && (Math.max(X * G.length, eb) > U || !!ee),
            ex = "rtl" === J,
            ew = P()(W, O({}, "".concat(W, "-rtl"), ex), q),
            eE = G || ah,
            eS = (0, g.useRef)(),
            eC = (0, g.useRef)(),
            ek = (0, g.useRef)(),
            eM = C((0, g.useState)(0), 2),
            eO = eM[0],
            eR = eM[1],
            eI = C((0, g.useState)(0), 2),
            eP = eI[0],
            eF = eI[1],
            ej = C((0, g.useState)(!1), 2),
            eA = ej[0],
            eT = ej[1],
            eN = function () {
              eT(!0);
            },
            e_ = function () {
              eT(!1);
            };
          function eH(e) {
            eR(function (t) {
              var n,
                r =
                  ((n = "function" == typeof e ? e(t) : e),
                  Number.isNaN(e5.current) || (n = Math.min(n, e5.current)),
                  (n = Math.max(n, 0)));
              return (eS.current.scrollTop = r), r;
            });
          }
          var ez = (0, g.useRef)({ start: 0, end: eE.length }),
            eL = (0, g.useRef)(),
            eD =
              ((r = (n = C(g.useState(eE), 2))[0]),
              (o = n[1]),
              (a = (i = C(g.useState(null), 2))[0]),
              (c = i[1]),
              g.useEffect(
                function () {
                  var e = (function (e, t, n) {
                    var r,
                      o,
                      i = e.length,
                      a = t.length;
                    if (0 === i && 0 === a) return null;
                    i < a ? ((r = e), (o = t)) : ((r = t), (o = e));
                    var c = { __EMPTY_ITEM__: !0 };
                    function l(e) {
                      return void 0 !== e ? n(e) : c;
                    }
                    for (
                      var s = null, u = 1 !== Math.abs(i - a), d = 0;
                      d < o.length;
                      d += 1
                    ) {
                      var f = l(r[d]);
                      if (f !== l(o[d])) {
                        (s = d), (u = u || f !== l(o[d + 1]));
                        break;
                      }
                    }
                    return null === s ? null : { index: s, multiple: u };
                  })(r || [], eE || [], es);
                  (null == e ? void 0 : e.index) !== void 0 && c(eE[e.index]),
                    o(eE);
                },
                [eE]
              ),
              [a]),
            eB = C(eD, 1)[0];
          eL.current = eB;
          var eV = g.useMemo(
              function () {
                if (!eg)
                  return {
                    scrollHeight: void 0,
                    start: 0,
                    end: eE.length - 1,
                    offset: void 0,
                  };
                if (!ey)
                  return {
                    scrollHeight:
                      (null === (e = eC.current) || void 0 === e
                        ? void 0
                        : e.offsetHeight) || 0,
                    start: 0,
                    end: eE.length - 1,
                    offset: void 0,
                  };
                for (
                  var e, t, n, r, o = 0, i = eE.length, a = 0;
                  a < i;
                  a += 1
                ) {
                  var c = es(eE[a]),
                    l = eh.get(c),
                    s = o + (void 0 === l ? X : l);
                  s >= eO && void 0 === t && ((t = a), (n = o)),
                    s > eO + U && void 0 === r && (r = a),
                    (o = s);
                }
                return (
                  void 0 === t && ((t = 0), (n = 0), (r = Math.ceil(U / X))),
                  void 0 === r && (r = eE.length - 1),
                  {
                    scrollHeight: o,
                    start: t,
                    end: (r = Math.min(r + 1, eE.length - 1)),
                    offset: n,
                  }
                );
              },
              [ey, eg, eO, eE, em, U]
            ),
            eW = eV.scrollHeight,
            eq = eV.start,
            eU = eV.end,
            eX = eV.offset;
          (ez.current.start = eq),
            (ez.current.end = eU),
            g.useLayoutEffect(
              function () {
                var e = eh.getRecord();
                if (1 === e.size) {
                  var t = Array.from(e)[0];
                  if (es(eE[eq]) === t) {
                    var n = eh.get(t) - X;
                    eH(function (e) {
                      return e + n;
                    });
                  }
                }
                eh.resetRecord();
              },
              [eW]
            );
          var e$ = C(g.useState({ width: 0, height: U }), 2),
            eK = e$[0],
            eG = e$[1],
            eY = (0, g.useRef)(),
            eQ = (0, g.useRef)(),
            eZ = g.useMemo(
              function () {
                return af(eK.width, ee);
              },
              [eK.width, ee]
            ),
            eJ = g.useMemo(
              function () {
                return af(eK.height, eW);
              },
              [eK.height, eW]
            ),
            e1 = eW - U,
            e5 = (0, g.useRef)(e1);
          e5.current = e1;
          var e6 = eO <= 0,
            e3 = eO >= e1,
            e4 = eP <= 0,
            e9 = eP >= ee,
            e8 = ai(e6, e3, e4, e9),
            e7 = function () {
              return { x: ex ? -eP : eP, y: eO };
            },
            te = (0, g.useRef)(e7()),
            tt = e0(function (e) {
              if (er) {
                var t = ev(ev({}, e7()), e);
                (te.current.x !== t.x || te.current.y !== t.y) &&
                  (er(t), (te.current = t));
              }
            });
          function tn(e, t) {
            t
              ? ((0, rN.flushSync)(function () {
                  eF(e);
                }),
                tt())
              : eH(e);
          }
          var tr = function (e) {
              var t = e,
                n = ee ? ee - eK.width : 0;
              return Math.min((t = Math.max(t, 0)), n);
            },
            to = e0(function (e, t) {
              t
                ? ((0, rN.flushSync)(function () {
                    eF(function (t) {
                      return tr(t + (ex ? -e : e));
                    });
                  }),
                  tt())
                : eH(function (t) {
                    return t + e;
                  });
            }),
            ti = C(
              ((l = !!ee),
              (s = (0, g.useRef)(0)),
              (u = (0, g.useRef)(null)),
              (d = (0, g.useRef)(null)),
              (f = (0, g.useRef)(!1)),
              (p = ai(e6, e3, e4, e9)),
              (h = (0, g.useRef)(null)),
              (m = (0, g.useRef)(null)),
              [
                function (e) {
                  if (eg) {
                    op.cancel(m.current),
                      (m.current = op(function () {
                        h.current = null;
                      }, 2));
                    var t,
                      n = e.deltaX,
                      r = e.deltaY,
                      o = e.shiftKey,
                      i = n,
                      a = r;
                    ("sx" === h.current || (!h.current && o && r && !n)) &&
                      ((i = r), (a = 0), (h.current = "sx"));
                    var c = Math.abs(i),
                      g = Math.abs(a);
                    (null === h.current && (h.current = l && c > g ? "x" : "y"),
                    "y" === h.current)
                      ? ((t = a),
                        op.cancel(u.current),
                        p(!1, t) ||
                          e._virtualHandled ||
                          ((e._virtualHandled = !0),
                          (s.current += t),
                          (d.current = t),
                          ao || e.preventDefault(),
                          (u.current = op(function () {
                            var e = f.current ? 10 : 1;
                            to(s.current * e, !1), (s.current = 0);
                          }))))
                      : (to(i, !0), ao || e.preventDefault());
                  }
                },
                function (e) {
                  eg && (f.current = e.detail === d.current);
                },
              ]),
              2
            ),
            ta = ti[0],
            tc = ti[1];
          (v = function (e, t, n, r) {
            return (
              !e8(e, t, n) &&
              (!r || !r._virtualHandled) &&
              (r && (r._virtualHandled = !0),
              ta({
                preventDefault: function () {},
                deltaX: e ? t : 0,
                deltaY: e ? 0 : t,
              }),
              !0)
            );
          }),
            (x = (0, g.useRef)(!1)),
            (w = (0, g.useRef)(0)),
            (E = (0, g.useRef)(0)),
            (S = (0, g.useRef)(null)),
            (M = (0, g.useRef)(null)),
            (I = function (e) {
              if (x.current) {
                var t = Math.ceil(e.touches[0].pageX),
                  n = Math.ceil(e.touches[0].pageY),
                  r = w.current - t,
                  o = E.current - n,
                  i = Math.abs(r) > Math.abs(o);
                i ? (w.current = t) : (E.current = n);
                var a = v(i, i ? r : o, !1, e);
                a && e.preventDefault(),
                  clearInterval(M.current),
                  a &&
                    (M.current = setInterval(function () {
                      i ? (r *= al) : (o *= al);
                      var e = Math.floor(i ? r : o);
                      (!v(i, e, !0) || 0.1 >= Math.abs(e)) &&
                        clearInterval(M.current);
                    }, 16));
              }
            }),
            (F = function () {
              (x.current = !1), y();
            }),
            (j = function (e) {
              y(),
                1 !== e.touches.length ||
                  x.current ||
                  ((x.current = !0),
                  (w.current = Math.ceil(e.touches[0].pageX)),
                  (E.current = Math.ceil(e.touches[0].pageY)),
                  (S.current = e.target),
                  S.current.addEventListener("touchmove", I, { passive: !1 }),
                  S.current.addEventListener("touchend", F, { passive: !0 }));
            }),
            (y = function () {
              S.current &&
                (S.current.removeEventListener("touchmove", I),
                S.current.removeEventListener("touchend", F));
            }),
            e2(
              function () {
                return (
                  eg &&
                    eS.current.addEventListener("touchstart", j, {
                      passive: !0,
                    }),
                  function () {
                    var e;
                    null === (e = eS.current) ||
                      void 0 === e ||
                      e.removeEventListener("touchstart", j),
                      y(),
                      clearInterval(M.current);
                  }
                );
              },
              [eg]
            ),
            (A = function (e) {
              eH(function (t) {
                return t + e;
              });
            }),
            g.useEffect(
              function () {
                var e = eS.current;
                if (ey && e) {
                  var t,
                    n,
                    r = !1,
                    o = function () {
                      op.cancel(t);
                    },
                    i = function e() {
                      o(),
                        (t = op(function () {
                          A(n), e();
                        }));
                    },
                    a = function (e) {
                      e._virtualHandled || ((e._virtualHandled = !0), (r = !0));
                    },
                    c = function () {
                      (r = !1), o();
                    },
                    l = function (t) {
                      if (r) {
                        var a = au(t, !1),
                          c = e.getBoundingClientRect(),
                          l = c.top,
                          s = c.bottom;
                        a <= l
                          ? ((n = -as(l - a)), i())
                          : a >= s
                          ? ((n = as(a - s)), i())
                          : o();
                      }
                    };
                  return (
                    e.addEventListener("mousedown", a),
                    e.ownerDocument.addEventListener("mouseup", c),
                    e.ownerDocument.addEventListener("mousemove", l),
                    function () {
                      e.removeEventListener("mousedown", a),
                        e.ownerDocument.removeEventListener("mouseup", c),
                        e.ownerDocument.removeEventListener("mousemove", l),
                        o();
                    }
                  );
                }
              },
              [ey]
            ),
            e2(
              function () {
                function e(e) {
                  var t = e6 && e.detail < 0,
                    n = e3 && e.detail > 0;
                  !eg || t || n || e.preventDefault();
                }
                var t = eS.current;
                return (
                  t.addEventListener("wheel", ta, { passive: !1 }),
                  t.addEventListener("DOMMouseScroll", tc, { passive: !0 }),
                  t.addEventListener("MozMousePixelScroll", e, { passive: !1 }),
                  function () {
                    t.removeEventListener("wheel", ta),
                      t.removeEventListener("DOMMouseScroll", tc),
                      t.removeEventListener("MozMousePixelScroll", e);
                  }
                );
              },
              [eg, e6, e3]
            ),
            e2(
              function () {
                if (ee) {
                  var e = tr(eP);
                  eF(e), tt({ x: e });
                }
              },
              [eK.width, ee]
            );
          var tl = function () {
              var e, t;
              null === (e = eY.current) || void 0 === e || e.delayHidden(),
                null === (t = eQ.current) || void 0 === t || t.delayHidden();
            },
            ts =
              ((T = function () {
                return ep(!0);
              }),
              (N = g.useRef()),
              (H = (_ = C(g.useState(null), 2))[0]),
              (z = _[1]),
              e2(
                function () {
                  if (H && H.times < 10) {
                    if (!eS.current) {
                      z(function (e) {
                        return ev({}, e);
                      });
                      return;
                    }
                    T();
                    var e = H.targetAlign,
                      t = H.originAlign,
                      n = H.index,
                      r = H.offset,
                      o = eS.current.clientHeight,
                      i = !1,
                      a = e,
                      c = null;
                    if (o) {
                      for (
                        var l = e || t,
                          s = 0,
                          u = 0,
                          d = 0,
                          f = Math.min(eE.length - 1, n),
                          p = 0;
                        p <= f;
                        p += 1
                      ) {
                        var h = es(eE[p]);
                        u = s;
                        var m = eh.get(h);
                        s = d = u + (void 0 === m ? X : m);
                      }
                      for (
                        var g = "top" === l ? r : o - r, v = f;
                        v >= 0;
                        v -= 1
                      ) {
                        var b = es(eE[v]),
                          y = eh.get(b);
                        if (void 0 === y) {
                          i = !0;
                          break;
                        }
                        if ((g -= y) <= 0) break;
                      }
                      switch (l) {
                        case "top":
                          c = u - r;
                          break;
                        case "bottom":
                          c = d - o + r;
                          break;
                        default:
                          var x = eS.current.scrollTop;
                          u < x ? (a = "top") : d > x + o && (a = "bottom");
                      }
                      null !== c && eH(c), c !== H.lastTop && (i = !0);
                    }
                    i &&
                      z(
                        ev(
                          ev({}, H),
                          {},
                          { times: H.times + 1, targetAlign: a, lastTop: c }
                        )
                      );
                  }
                },
                [H, eS.current]
              ),
              function (e) {
                if (null == e) {
                  tl();
                  return;
                }
                if ((op.cancel(N.current), "number" == typeof e)) eH(e);
                else if (e && "object" === k(e)) {
                  var t,
                    n = e.align;
                  t =
                    "index" in e
                      ? e.index
                      : eE.findIndex(function (t) {
                          return es(t) === e.key;
                        });
                  var r = e.offset;
                  z({
                    times: 0,
                    index: t,
                    offset: void 0 === r ? 0 : r,
                    originAlign: n,
                  });
                }
              });
          g.useImperativeHandle(t, function () {
            return {
              nativeElement: ek.current,
              getScrollInfo: e7,
              scrollTo: function (e) {
                e && "object" === k(e) && ("left" in e || "top" in e)
                  ? (void 0 !== e.left && eF(tr(e.left)), ts(e.top))
                  : ts(e);
              },
            };
          }),
            e2(
              function () {
                eo && eo(eE.slice(eq, eU + 1), eE);
              },
              [eq, eU, eE]
            );
          var tu =
              ((D = (L = C(
                g.useMemo(
                  function () {
                    return [new Map(), []];
                  },
                  [eE, eh.id, X]
                ),
                2
              ))[0]),
              (B = L[1]),
              function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e,
                  n = D.get(e),
                  r = D.get(t);
                if (void 0 === n || void 0 === r)
                  for (var o = eE.length, i = B.length; i < o; i += 1) {
                    var a,
                      c = es(eE[i]);
                    D.set(c, i);
                    var l = null !== (a = eh.get(c)) && void 0 !== a ? a : X;
                    if (
                      ((B[i] = (B[i - 1] || 0) + l),
                      c === e && (n = i),
                      c === t && (r = i),
                      void 0 !== n && void 0 !== r)
                    )
                      break;
                  }
                return { top: B[n - 1] || 0, bottom: B[r] };
              }),
            td =
              null == ea
                ? void 0
                : ea({
                    start: eq,
                    end: eU,
                    virtual: ey,
                    offsetX: eP,
                    offsetY: eX,
                    rtl: ex,
                    getSize: tu,
                  }),
            tf = eE.slice(eq, eU + 1).map(function (e, t) {
              var n = Y(e, eq + t, { style: { width: ee }, offsetX: eP }),
                r = es(e);
              return g.createElement(
                ar,
                {
                  key: r,
                  setRef: function (t) {
                    return ef(e, t);
                  },
                },
                n
              );
            }),
            tp = null;
          U &&
            ((tp = ev(
              O({}, void 0 === $ || $ ? "height" : "maxHeight", U),
              am
            )),
            eg &&
              ((tp.overflowY = "hidden"),
              ee && (tp.overflowX = "hidden"),
              eA && (tp.pointerEvents = "none")));
          var th = {};
          return (
            ex && (th.dir = "rtl"),
            g.createElement(
              "div",
              b(
                {
                  ref: ek,
                  style: ev(ev({}, K), {}, { position: "relative" }),
                  className: ew,
                },
                th,
                el
              ),
              g.createElement(
                oi,
                {
                  onResize: function (e) {
                    eG({ width: e.offsetWidth, height: e.offsetHeight });
                  },
                },
                g.createElement(
                  void 0 === et ? "div" : et,
                  {
                    className: "".concat(W, "-holder"),
                    style: tp,
                    ref: eS,
                    onScroll: function (e) {
                      var t = e.currentTarget.scrollTop;
                      t !== eO && eH(t), null == en || en(e), tt();
                    },
                    onMouseEnter: tl,
                  },
                  g.createElement(
                    an,
                    {
                      prefixCls: W,
                      height: eW,
                      offsetX: eP,
                      offsetY: eX,
                      scrollWidth: ee,
                      onInnerResize: ep,
                      ref: eC,
                      innerProps: ei,
                      rtl: ex,
                      extra: td,
                    },
                    tf
                  )
                )
              ),
              ey &&
                eW > U &&
                g.createElement(ad, {
                  ref: eY,
                  prefixCls: W,
                  scrollOffset: eO,
                  scrollRange: eW,
                  rtl: ex,
                  onScroll: tn,
                  onStartMove: eN,
                  onStopMove: e_,
                  spinSize: eJ,
                  containerSize: eK.height,
                  style: null == ec ? void 0 : ec.verticalScrollBar,
                  thumbStyle: null == ec ? void 0 : ec.verticalScrollBarThumb,
                }),
              ey &&
                ee > eK.width &&
                g.createElement(ad, {
                  ref: eQ,
                  prefixCls: W,
                  scrollOffset: eP,
                  scrollRange: ee,
                  rtl: ex,
                  onScroll: tn,
                  onStartMove: eN,
                  onStopMove: e_,
                  spinSize: eZ,
                  containerSize: eK.width,
                  horizontal: !0,
                  style: null == ec ? void 0 : ec.horizontalScrollBar,
                  thumbStyle: null == ec ? void 0 : ec.horizontalScrollBarThumb,
                })
            )
          );
        });
      ag.displayName = "List";
      var av = ["disabled", "title", "children", "style", "className"];
      function ab(e) {
        return "string" == typeof e || "number" == typeof e;
      }
      var ay = g.forwardRef(function (e, t) {
          var n = g.useContext(rj),
            r = n.prefixCls,
            o = n.id,
            i = n.open,
            a = n.multiple,
            c = n.mode,
            l = n.searchValue,
            s = n.toggleOpen,
            u = n.notFoundContent,
            d = n.onPopupScroll,
            f = g.useContext(i5),
            p = f.maxCount,
            h = f.flattenOptions,
            m = f.onActiveValue,
            v = f.defaultActiveFirstOption,
            y = f.onSelect,
            x = f.menuItemSelectedIcon,
            w = f.rawValues,
            E = f.fieldNames,
            S = f.virtual,
            k = f.direction,
            M = f.listHeight,
            I = f.listItemHeight,
            F = f.optionRender,
            j = "".concat(r, "-item"),
            A = tw(
              function () {
                return h;
              },
              [i, h],
              function (e, t) {
                return t[0] && e[1] !== t[1];
              }
            ),
            T = g.useRef(null),
            N = g.useMemo(
              function () {
                return a && iJ(p) && (null == w ? void 0 : w.size) >= p;
              },
              [a, p, null == w ? void 0 : w.size]
            ),
            _ = function (e) {
              e.preventDefault();
            },
            H = function (e) {
              var t;
              null === (t = T.current) ||
                void 0 === t ||
                t.scrollTo("number" == typeof e ? { index: e } : e);
            },
            z = g.useCallback(
              function (e) {
                return "combobox" !== c && w.has(e);
              },
              [c, ty(w).toString(), w.size]
            ),
            L = function (e) {
              for (
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  n = A.length,
                  r = 0;
                r < n;
                r += 1
              ) {
                var o = (e + r * t + n) % n,
                  i = A[o] || {},
                  a = i.group,
                  c = i.data;
                if (!a && !(null != c && c.disabled) && (z(c.value) || !N))
                  return o;
              }
              return -1;
            },
            D = C(
              g.useState(function () {
                return L(0);
              }),
              2
            ),
            B = D[0],
            V = D[1],
            W = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              V(e);
              var n = { source: t ? "keyboard" : "mouse" },
                r = A[e];
              if (!r) {
                m(null, -1, n);
                return;
              }
              m(r.value, e, n);
            };
          (0, g.useEffect)(
            function () {
              W(!1 !== v ? L(0) : -1);
            },
            [A.length, l]
          );
          var q = g.useCallback(
            function (e) {
              return "combobox" === c
                ? String(e).toLowerCase() === l.toLowerCase()
                : w.has(e);
            },
            [c, l, ty(w).toString(), w.size]
          );
          (0, g.useEffect)(
            function () {
              var e,
                t = setTimeout(function () {
                  if (!a && i && 1 === w.size) {
                    var e = Array.from(w)[0],
                      t = A.findIndex(function (t) {
                        return t.data.value === e;
                      });
                    -1 !== t && (W(t), H(t));
                  }
                });
              return (
                i &&
                  (null === (e = T.current) ||
                    void 0 === e ||
                    e.scrollTo(void 0)),
                function () {
                  return clearTimeout(t);
                }
              );
            },
            [i, l]
          );
          var U = function (e) {
            void 0 !== e && y(e, { selected: !w.has(e) }), a || s(!1);
          };
          if (
            (g.useImperativeHandle(t, function () {
              return {
                onKeyDown: function (e) {
                  var t = e.which,
                    n = e.ctrlKey;
                  switch (t) {
                    case e9.N:
                    case e9.P:
                    case e9.UP:
                    case e9.DOWN:
                      var r = 0;
                      if (
                        (t === e9.UP
                          ? (r = -1)
                          : t === e9.DOWN
                          ? (r = 1)
                          : /(mac\sos|macintosh)/i.test(navigator.appVersion) &&
                            n &&
                            (t === e9.N ? (r = 1) : t === e9.P && (r = -1)),
                        0 !== r)
                      ) {
                        var o = L(B + r, r);
                        H(o), W(o, !0);
                      }
                      break;
                    case e9.TAB:
                    case e9.ENTER:
                      var a,
                        c = A[B];
                      !c ||
                      (null != c &&
                        null !== (a = c.data) &&
                        void 0 !== a &&
                        a.disabled) ||
                      N
                        ? U(void 0)
                        : U(c.value),
                        i && e.preventDefault();
                      break;
                    case e9.ESC:
                      s(!1), i && e.stopPropagation();
                  }
                },
                onKeyUp: function () {},
                scrollTo: function (e) {
                  H(e);
                },
              };
            }),
            0 === A.length)
          )
            return g.createElement(
              "div",
              {
                role: "listbox",
                id: "".concat(o, "_list"),
                className: "".concat(j, "-empty"),
                onMouseDown: _,
              },
              u
            );
          var X = Object.keys(E).map(function (e) {
              return E[e];
            }),
            $ = function (e) {
              return e.label;
            };
          function K(e, t) {
            return {
              role: e.group ? "presentation" : "option",
              id: "".concat(o, "_list_").concat(t),
            };
          }
          var G = function (e) {
              var t = A[e];
              if (!t) return null;
              var n = t.data || {},
                r = n.value,
                o = t.group,
                i = te(n, !0),
                a = $(t);
              return t
                ? g.createElement(
                    "div",
                    b(
                      { "aria-label": "string" != typeof a || o ? null : a },
                      i,
                      { key: e },
                      K(t, e),
                      { "aria-selected": q(r) }
                    ),
                    r
                  )
                : null;
            },
            Y = { role: "listbox", id: "".concat(o, "_list") };
          return g.createElement(
            g.Fragment,
            null,
            S &&
              g.createElement(
                "div",
                b({}, Y, {
                  style: { height: 0, width: 0, overflow: "hidden" },
                }),
                G(B - 1),
                G(B),
                G(B + 1)
              ),
            g.createElement(
              ag,
              {
                itemKey: "key",
                ref: T,
                data: A,
                height: M,
                itemHeight: I,
                fullHeight: !1,
                onMouseDown: _,
                onScroll: d,
                virtual: S,
                direction: k,
                innerProps: S ? null : Y,
              },
              function (e, t) {
                var n = e.group,
                  r = e.groupOption,
                  o = e.data,
                  i = e.label,
                  a = e.value,
                  c = o.key;
                if (n) {
                  var l,
                    s =
                      null !== (l = o.title) && void 0 !== l
                        ? l
                        : ab(i)
                        ? i.toString()
                        : void 0;
                  return g.createElement(
                    "div",
                    {
                      className: P()(j, "".concat(j, "-group"), o.className),
                      title: s,
                    },
                    void 0 !== i ? i : c
                  );
                }
                var u = o.disabled,
                  d = o.title,
                  f = (o.children, o.style),
                  p = o.className,
                  h = at(R(o, av), X),
                  m = z(a),
                  v = u || (!m && N),
                  y = "".concat(j, "-option"),
                  w = P()(
                    j,
                    y,
                    p,
                    O(
                      O(
                        O(
                          O({}, "".concat(y, "-grouped"), r),
                          "".concat(y, "-active"),
                          B === t && !v
                        ),
                        "".concat(y, "-disabled"),
                        v
                      ),
                      "".concat(y, "-selected"),
                      m
                    )
                  ),
                  E = $(e),
                  C = !x || "function" == typeof x || m,
                  k = "number" == typeof E ? E : E || a,
                  M = ab(k) ? k.toString() : void 0;
                return (
                  void 0 !== d && (M = d),
                  g.createElement(
                    "div",
                    b({}, te(h), S ? {} : K(e, t), {
                      "aria-selected": q(a),
                      className: w,
                      title: M,
                      onMouseMove: function () {
                        B === t || v || W(t);
                      },
                      onClick: function () {
                        v || U(a);
                      },
                      style: f,
                    }),
                    g.createElement(
                      "div",
                      { className: "".concat(y, "-content") },
                      "function" == typeof F ? F(e, { index: t }) : k
                    ),
                    g.isValidElement(x) || m,
                    C &&
                      g.createElement(
                        rP,
                        {
                          className: "".concat(j, "-option-state"),
                          customizeIcon: x,
                          customizeIconProps: {
                            value: a,
                            disabled: v,
                            isSelected: m,
                          },
                        },
                        m ? "✓" : null
                      )
                  )
                );
              }
            )
          );
        }),
        ax = function (e, t) {
          var n = g.useRef({ values: new Map(), options: new Map() });
          return [
            g.useMemo(
              function () {
                var r = n.current,
                  o = r.values,
                  i = r.options,
                  a = e.map(function (e) {
                    if (void 0 === e.label) {
                      var t;
                      return ev(
                        ev({}, e),
                        {},
                        {
                          label:
                            null === (t = o.get(e.value)) || void 0 === t
                              ? void 0
                              : t.label,
                        }
                      );
                    }
                    return e;
                  }),
                  c = new Map(),
                  l = new Map();
                return (
                  a.forEach(function (e) {
                    c.set(e.value, e),
                      l.set(e.value, t.get(e.value) || i.get(e.value));
                  }),
                  (n.current.values = c),
                  (n.current.options = l),
                  a
                );
              },
              [e, t]
            ),
            g.useCallback(
              function (e) {
                return t.get(e) || n.current.options.get(e);
              },
              [t]
            ),
          ];
        };
      function aw(e, t) {
        return oM(e).join("").toUpperCase().includes(t);
      }
      var aE = 0,
        aS = eb(),
        aC = ["children", "value"],
        ak = ["children"];
      function aM(e) {
        var t = g.useRef();
        return (
          (t.current = e),
          g.useCallback(function () {
            return t.current.apply(t, arguments);
          }, [])
        );
      }
      var aO = [
          "id",
          "mode",
          "prefixCls",
          "backfill",
          "fieldNames",
          "inputValue",
          "searchValue",
          "onSearch",
          "autoClearSearchValue",
          "onSelect",
          "onDeselect",
          "dropdownMatchSelectWidth",
          "filterOption",
          "filterSort",
          "optionFilterProp",
          "optionLabelProp",
          "options",
          "optionRender",
          "children",
          "defaultActiveFirstOption",
          "menuItemSelectedIcon",
          "virtual",
          "direction",
          "listHeight",
          "listItemHeight",
          "labelRender",
          "value",
          "defaultValue",
          "labelInValue",
          "onChange",
          "maxCount",
        ],
        aR = ["inputValue"],
        aI = g.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a = e.id,
            c = e.mode,
            l = e.prefixCls,
            s = e.backfill,
            u = e.fieldNames,
            d = e.inputValue,
            f = e.searchValue,
            p = e.onSearch,
            h = e.autoClearSearchValue,
            m = void 0 === h || h,
            v = e.onSelect,
            y = e.onDeselect,
            x = e.dropdownMatchSelectWidth,
            w = void 0 === x || x,
            E = e.filterOption,
            S = e.filterSort,
            M = e.optionFilterProp,
            I = e.optionLabelProp,
            P = e.options,
            F = e.optionRender,
            j = e.children,
            A = e.defaultActiveFirstOption,
            T = e.menuItemSelectedIcon,
            N = e.virtual,
            _ = e.direction,
            H = e.listHeight,
            z = void 0 === H ? 200 : H,
            L = e.listItemHeight,
            D = void 0 === L ? 20 : L,
            B = e.labelRender,
            V = e.value,
            W = e.defaultValue,
            q = e.labelInValue,
            U = e.onChange,
            X = e.maxCount,
            $ = R(e, aO),
            K =
              ((r = (n = C(g.useState(), 2))[0]),
              (o = n[1]),
              g.useEffect(function () {
                var e;
                o(
                  "rc_select_".concat(
                    (aS ? ((e = aE), (aE += 1)) : (e = "TEST_OR_SSR"), e)
                  )
                );
              }, []),
              a || r),
            G = i9(c),
            Y = !!(!P && j),
            Q = g.useMemo(
              function () {
                return (void 0 !== E || "combobox" !== c) && E;
              },
              [E, c]
            ),
            Z = g.useMemo(
              function () {
                return i0(u, Y);
              },
              [JSON.stringify(u), Y]
            ),
            J = C(
              e4("", {
                value: void 0 !== f ? f : d,
                postState: function (e) {
                  return e || "";
                },
              }),
              2
            ),
            ee = J[0],
            et = J[1],
            en = g.useMemo(
              function () {
                var e = P;
                P ||
                  (e = (function e(t) {
                    var n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    return rT(t)
                      .map(function (t, r) {
                        if (!g.isValidElement(t) || !t.type) return null;
                        var o,
                          i,
                          a,
                          c,
                          l = t.type.isSelectOptGroup,
                          s = t.key,
                          u = t.props,
                          d = u.children,
                          f = R(u, ak);
                        return n || !l
                          ? ((o = t.key),
                            (a = (i = t.props).children),
                            ev(
                              {
                                key: o,
                                value: void 0 !== (c = i.value) ? c : o,
                                children: a,
                              },
                              R(i, aC)
                            ))
                          : ev(
                              ev(
                                {
                                  key: "__RC_SELECT_GRP__".concat(
                                    null === s ? r : s,
                                    "__"
                                  ),
                                  label: s,
                                },
                                f
                              ),
                              {},
                              { options: e(d) }
                            );
                      })
                      .filter(function (e) {
                        return e;
                      });
                  })(j));
                var t = new Map(),
                  n = new Map(),
                  r = function (e, t, n) {
                    n && "string" == typeof n && e.set(t[n], t);
                  };
                return (
                  (function e(o) {
                    for (
                      var i =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        a = 0;
                      a < o.length;
                      a += 1
                    ) {
                      var c = o[a];
                      !c[Z.options] || i
                        ? (t.set(c[Z.value], c),
                          r(n, c, Z.label),
                          r(n, c, M),
                          r(n, c, I))
                        : e(c[Z.options], !0);
                    }
                  })(e),
                  { options: e, valueOptions: t, labelOptions: n }
                );
              },
              [P, j, Z, M, I]
            ),
            er = en.valueOptions,
            eo = en.labelOptions,
            ei = en.options,
            ea = g.useCallback(
              function (e) {
                return oM(e).map(function (e) {
                  e && "object" === k(e)
                    ? ((r = e.key),
                      (n = e.label),
                      (t = null !== (a = e.value) && void 0 !== a ? a : r))
                    : (t = e);
                  var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    c,
                    l = er.get(t);
                  return (
                    l &&
                      (void 0 === n &&
                        (n = null == l ? void 0 : l[I || Z.label]),
                      void 0 === r &&
                        (r =
                          null !== (c = null == l ? void 0 : l.key) &&
                          void 0 !== c
                            ? c
                            : t),
                      (o = null == l ? void 0 : l.disabled),
                      (i = null == l ? void 0 : l.title)),
                    { label: n, value: t, key: r, disabled: o, title: i }
                  );
                });
              },
              [Z, I, er]
            ),
            ec = C(e4(W, { value: V }), 2),
            el = ec[0],
            es = ec[1],
            eu = C(
              ax(
                g.useMemo(
                  function () {
                    var e,
                      t,
                      n = ea(G && null === el ? [] : el);
                    return "combobox" !== c ||
                      (t =
                        null === (e = n[0]) || void 0 === e
                          ? void 0
                          : e.value) ||
                      0 === t
                      ? n
                      : [];
                  },
                  [el, ea, c, G]
                ),
                er
              ),
              2
            ),
            ed = eu[0],
            ef = eu[1],
            ep = g.useMemo(
              function () {
                if (!c && 1 === ed.length) {
                  var e = ed[0];
                  if (
                    null === e.value &&
                    (null === e.label || void 0 === e.label)
                  )
                    return [];
                }
                return ed.map(function (e) {
                  var t;
                  return ev(
                    ev({}, e),
                    {},
                    {
                      label:
                        null !==
                          (t = "function" == typeof B ? B(e) : e.label) &&
                        void 0 !== t
                          ? t
                          : e.value,
                    }
                  );
                });
              },
              [c, ed, B]
            ),
            eh = g.useMemo(
              function () {
                return new Set(
                  ed.map(function (e) {
                    return e.value;
                  })
                );
              },
              [ed]
            );
          g.useEffect(
            function () {
              if ("combobox" === c) {
                var e,
                  t = null === (e = ed[0]) || void 0 === e ? void 0 : e.value;
                et(null != t ? String(t) : "");
              }
            },
            [ed]
          );
          var em = aM(function (e, t) {
              var n = null != t ? t : e;
              return O(O({}, Z.value, e), Z.label, n);
            }),
            eg =
              ((i = g.useMemo(
                function () {
                  if ("tags" !== c) return ei;
                  var e = ty(ei);
                  return (
                    ty(ed)
                      .sort(function (e, t) {
                        return e.value < t.value ? -1 : 1;
                      })
                      .forEach(function (t) {
                        var n = t.value;
                        er.has(n) || e.push(em(n, t.label));
                      }),
                    e
                  );
                },
                [em, ei, er, ed, c]
              )),
              g.useMemo(
                function () {
                  if (!ee || !1 === Q) return i;
                  var e = Z.options,
                    t = Z.label,
                    n = Z.value,
                    r = [],
                    o = "function" == typeof Q,
                    a = ee.toUpperCase(),
                    c = o
                      ? Q
                      : function (r, o) {
                          return M
                            ? aw(o[M], a)
                            : o[e]
                            ? aw(o["children" !== t ? t : "label"], a)
                            : aw(o[n], a);
                        },
                    l = o
                      ? function (e) {
                          return i1(e);
                        }
                      : function (e) {
                          return e;
                        };
                  return (
                    i.forEach(function (t) {
                      if (t[e]) {
                        if (c(ee, l(t))) r.push(t);
                        else {
                          var n = t[e].filter(function (e) {
                            return c(ee, l(e));
                          });
                          n.length && r.push(ev(ev({}, t), {}, O({}, e, n)));
                        }
                        return;
                      }
                      c(ee, l(t)) && r.push(t);
                    }),
                    r
                  );
                },
                [i, Q, M, ee, Z]
              )),
            eb = g.useMemo(
              function () {
                return "tags" !== c ||
                  !ee ||
                  eg.some(function (e) {
                    return e[M || "value"] === ee;
                  }) ||
                  eg.some(function (e) {
                    return e[Z.value] === ee;
                  })
                  ? eg
                  : [em(ee)].concat(ty(eg));
              },
              [em, M, c, eg, ee, Z]
            ),
            ey = g.useMemo(
              function () {
                return S
                  ? (function e(t) {
                      return ty(t)
                        .sort(function (e, t) {
                          return S(e, t, { searchValue: ee });
                        })
                        .map(function (t) {
                          return Array.isArray(t.options)
                            ? ev(
                                ev({}, t),
                                {},
                                {
                                  options:
                                    t.options.length > 0
                                      ? e(t.options)
                                      : t.options,
                                }
                              )
                            : t;
                        });
                    })(eb)
                  : eb;
              },
              [eb, S, ee]
            ),
            ex = g.useMemo(
              function () {
                return (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.fieldNames,
                    r = t.childrenAsData,
                    o = [],
                    i = i0(n, !1),
                    a = i.label,
                    c = i.value,
                    l = i.options,
                    s = i.groupLabel;
                  return (
                    !(function e(t, n) {
                      Array.isArray(t) &&
                        t.forEach(function (t) {
                          if (!n && l in t) {
                            var i = t[s];
                            void 0 === i && r && (i = t.label),
                              o.push({
                                key: iZ(t, o.length),
                                group: !0,
                                data: t,
                                label: i,
                              }),
                              e(t[l], !0);
                          } else {
                            var u = t[c];
                            o.push({
                              key: iZ(t, o.length),
                              groupOption: n,
                              data: t,
                              label: t[a],
                              value: u,
                            });
                          }
                        });
                    })(e, !1),
                    o
                  );
                })(ey, { fieldNames: Z, childrenAsData: Y });
              },
              [ey, Z, Y]
            ),
            ew = function (e) {
              var t = ea(e);
              if (
                (es(t),
                U &&
                  (t.length !== ed.length ||
                    t.some(function (e, t) {
                      var n;
                      return (
                        (null === (n = ed[t]) || void 0 === n
                          ? void 0
                          : n.value) !== (null == e ? void 0 : e.value)
                      );
                    })))
              ) {
                var n = q
                    ? t
                    : t.map(function (e) {
                        return e.value;
                      }),
                  r = t.map(function (e) {
                    return i1(ef(e.value));
                  });
                U(G ? n : n[0], G ? r : r[0]);
              }
            },
            eE = C(g.useState(null), 2),
            eS = eE[0],
            eC = eE[1],
            ek = C(g.useState(0), 2),
            eM = ek[0],
            eO = ek[1],
            eR = void 0 !== A ? A : "combobox" !== c,
            eI = g.useCallback(
              function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = n.source;
                eO(t),
                  s &&
                    "combobox" === c &&
                    null !== e &&
                    "keyboard" === (void 0 === r ? "keyboard" : r) &&
                    eC(String(e));
              },
              [s, c]
            ),
            eP = function (e, t, n) {
              var r = function () {
                var t,
                  n = ef(e);
                return [
                  q
                    ? {
                        label: null == n ? void 0 : n[Z.label],
                        value: e,
                        key:
                          null !== (t = null == n ? void 0 : n.key) &&
                          void 0 !== t
                            ? t
                            : e,
                      }
                    : e,
                  i1(n),
                ];
              };
              if (t && v) {
                var o = C(r(), 2);
                v(o[0], o[1]);
              } else if (!t && y && "clear" !== n) {
                var i = C(r(), 2);
                y(i[0], i[1]);
              }
            },
            eF = aM(function (e, t) {
              var n = !G || t.selected;
              ew(
                n
                  ? G
                    ? [].concat(ty(ed), [e])
                    : [e]
                  : ed.filter(function (t) {
                      return t.value !== e;
                    })
              ),
                eP(e, n),
                "combobox" === c ? eC("") : (!i9 || m) && (et(""), eC(""));
            }),
            ej = g.useMemo(
              function () {
                var e = !1 !== N && !1 !== w;
                return ev(
                  ev({}, en),
                  {},
                  {
                    flattenOptions: ex,
                    onActiveValue: eI,
                    defaultActiveFirstOption: eR,
                    onSelect: eF,
                    menuItemSelectedIcon: T,
                    rawValues: eh,
                    fieldNames: Z,
                    virtual: e,
                    direction: _,
                    listHeight: z,
                    listItemHeight: D,
                    childrenAsData: Y,
                    maxCount: X,
                    optionRender: F,
                  }
                );
              },
              [X, en, ex, eI, eR, eF, T, eh, Z, N, w, _, z, D, Y, F]
            );
          return g.createElement(
            i5.Provider,
            { value: ej },
            g.createElement(
              i8,
              b({}, $, {
                id: K,
                prefixCls: void 0 === l ? "rc-select" : l,
                ref: t,
                omitDomProps: aR,
                mode: c,
                displayValues: ep,
                onDisplayValuesChange: function (e, t) {
                  ew(e);
                  var n = t.type,
                    r = t.values;
                  ("remove" === n || "clear" === n) &&
                    r.forEach(function (e) {
                      eP(e.value, !1, n);
                    });
                },
                direction: _,
                searchValue: ee,
                onSearch: function (e, t) {
                  if ((et(e), eC(null), "submit" === t.source)) {
                    var n = (e || "").trim();
                    n &&
                      (ew(Array.from(new Set([].concat(ty(eh), [n])))),
                      eP(n, !0),
                      et(""));
                    return;
                  }
                  "blur" !== t.source &&
                    ("combobox" === c && ew(e), null == p || p(e));
                },
                autoClearSearchValue: m,
                onSearchSplit: function (e) {
                  var t = e;
                  "tags" !== c &&
                    (t = e
                      .map(function (e) {
                        var t = eo.get(e);
                        return null == t ? void 0 : t.value;
                      })
                      .filter(function (e) {
                        return void 0 !== e;
                      }));
                  var n = Array.from(new Set([].concat(ty(eh), ty(t))));
                  ew(n),
                    n.forEach(function (e) {
                      eP(e, !0);
                    });
                },
                dropdownMatchSelectWidth: w,
                OptionList: ay,
                emptyOptions: !ex.length,
                activeValue: eS,
                activeDescendantId: "".concat(K, "_list_").concat(eM),
              })
            )
          );
        });
      (aI.Option = ae), (aI.OptGroup = i7);
      let aP = g.createContext(void 0),
        aF = {
          Modal: 100,
          Drawer: 100,
          Popover: 100,
          Popconfirm: 100,
          Tooltip: 100,
          Tour: 100,
          FloatButton: 100,
        },
        aj = {
          SelectLike: 50,
          Dropdown: 50,
          DatePicker: 50,
          Menu: 50,
          ImagePreview: 1,
        },
        aA = (e, t) => {
          let n;
          let [, r] = ra(),
            o = g.useContext(aP);
          if (void 0 !== t) n = [t, t];
          else {
            let i = null != o ? o : 0;
            e in aF ? (i += (o ? 0 : r.zIndexPopupBase) + aF[e]) : (i += aj[e]),
              (n = [void 0 === o ? t : i, i]);
          }
          return n;
        },
        aT = (e, t, n) => (void 0 !== n ? n : "".concat(e, "-").concat(t));
      function aN() {}
      let a_ = g.createContext({}),
        aH = () => {
          let e = () => {};
          return (e.deprecated = aN), e;
        };
      var az = (0, g.createContext)(void 0);
      Object.assign({}, rg.Modal);
      let aL = [],
        aD = () =>
          aL.reduce((e, t) => Object.assign(Object.assign({}, e), t), rg.Modal);
      var aB = (e) => {
        let { locale: t = {}, children: n, _ANT_MARK__: r } = e;
        g.useEffect(
          () =>
            (function (e) {
              if (e) {
                let t = Object.assign({}, e);
                return (
                  aL.push(t),
                  aD(),
                  () => {
                    (aL = aL.filter((e) => e !== t)), aD();
                  }
                );
              }
              Object.assign({}, rg.Modal);
            })(null == t ? void 0 : t.Modal),
          [t]
        );
        let o = g.useMemo(
          () => Object.assign(Object.assign({}, t), { exist: !0 }),
          [t]
        );
        return g.createElement(rd.Provider, { value: o }, n);
      };
      let aV = "-ant-".concat(Date.now(), "-").concat(Math.random()),
        aW = g.createContext(!1),
        aq = (e) => {
          let { children: t, disabled: n } = e,
            r = g.useContext(aW);
          return g.createElement(aW.Provider, { value: null != n ? n : r }, t);
        },
        { useId: aU } = Object.assign({}, v);
      var aX = void 0 === aU ? () => "" : aU;
      function a$(e) {
        let { children: t } = e,
          [, n] = ra(),
          { motion: r } = n,
          o = g.useRef(!1);
        return ((o.current = o.current || !1 === r), o.current)
          ? g.createElement(oX, { motion: r }, t)
          : t;
      }
      var aK = () => null;
      let aG = {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },
        aY = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            color: e.colorText,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            listStyle: "none",
            fontFamily: t ? "inherit" : e.fontFamily,
          };
        },
        aQ = () => ({
          display: "inline-flex",
          alignItems: "center",
          color: "inherit",
          fontStyle: "normal",
          lineHeight: 0,
          textAlign: "center",
          textTransform: "none",
          verticalAlign: "-0.125em",
          textRendering: "optimizeLegibility",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          "> *": { lineHeight: 1 },
          svg: { display: "inline-block" },
        }),
        aZ = () => ({
          "&::before": { display: "table", content: '""' },
          "&::after": { display: "table", clear: "both", content: '""' },
        }),
        aJ = (e) => ({
          a: {
            color: e.colorLink,
            textDecoration: e.linkDecoration,
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            transition: "color ".concat(e.motionDurationSlow),
            "-webkit-text-decoration-skip": "objects",
            "&:hover": { color: e.colorLinkHover },
            "&:active": { color: e.colorLinkActive },
            "&:active, &:hover": {
              textDecoration: e.linkHoverDecoration,
              outline: 0,
            },
            "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
            "&[disabled]": {
              color: e.colorTextDisabled,
              cursor: "not-allowed",
            },
          },
        }),
        a0 = (e) => ({
          outline: ""
            .concat(tW(e.lineWidthFocus), " solid ")
            .concat(e.colorPrimaryBorder),
          outlineOffset: 1,
          transition: "outline-offset 0s, outline 0s",
        }),
        a1 = (e) => ({ "&:focus-visible": Object.assign({}, a0(e)) }),
        a2 = (e) => ({
          [".".concat(e)]: Object.assign(Object.assign({}, aQ()), {
            [".".concat(e, " .").concat(e, "-icon")]: { display: "block" },
          }),
        });
      var a5 = (e, t) => {
          let [n, r] = ra();
          return nO(
            {
              theme: n,
              token: r,
              hashId: "",
              path: ["ant-design-icons", e],
              nonce: () => (null == t ? void 0 : t.nonce),
              layer: { name: "antd" },
            },
            () => [a2(e)]
          );
        },
        a6 = function (e, t) {
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
        };
      let a3 = [
          "getTargetContainer",
          "getPopupContainer",
          "renderEmpty",
          "input",
          "pagination",
          "form",
          "select",
          "button",
        ],
        a4 = (e) => {
          let {
              children: t,
              csp: n,
              autoInsertSpaceInButton: r,
              alert: o,
              anchor: i,
              form: a,
              locale: c,
              componentSize: l,
              direction: s,
              space: u,
              splitter: d,
              virtual: f,
              dropdownMatchSelectWidth: p,
              popupMatchSelectWidth: h,
              popupOverflow: m,
              legacyLocale: v,
              parentContext: b,
              iconPrefixCls: y,
              theme: x,
              componentDisabled: w,
              segmented: E,
              statistic: S,
              spin: C,
              calendar: k,
              carousel: M,
              cascader: O,
              collapse: R,
              typography: I,
              checkbox: P,
              descriptions: F,
              divider: j,
              drawer: A,
              skeleton: T,
              steps: N,
              image: _,
              layout: H,
              list: z,
              mentions: L,
              modal: D,
              progress: B,
              result: V,
              slider: W,
              breadcrumb: q,
              menu: U,
              pagination: X,
              input: $,
              textArea: K,
              empty: G,
              badge: Y,
              radio: Q,
              rate: Z,
              switch: J,
              transfer: ee,
              avatar: et,
              message: en,
              tag: er,
              table: eo,
              card: ei,
              tabs: ea,
              timeline: ec,
              timePicker: el,
              upload: es,
              notification: eu,
              tree: ed,
              colorPicker: ef,
              datePicker: ep,
              rangePicker: eh,
              flex: eg,
              wave: ev,
              dropdown: eb,
              warning: ey,
              tour: ex,
              floatButtonGroup: ew,
              variant: eE,
              inputNumber: eS,
              treeSelect: eC,
            } = e,
            ek = g.useCallback(
              (t, n) => {
                let { prefixCls: r } = e;
                if (n) return n;
                let o = r || b.getPrefixCls("");
                return t ? "".concat(o, "-").concat(t) : o;
              },
              [b.getPrefixCls, e.prefixCls]
            ),
            eM = y || b.iconPrefixCls || td,
            eO = n || b.csp;
          a5(eM, eO);
          let eR = (function (e, t, n) {
              var r;
              aH("ConfigProvider");
              let o = e || {},
                i =
                  !1 !== o.inherit && t
                    ? t
                    : Object.assign(Object.assign({}, n3), {
                        hashed:
                          null !== (r = null == t ? void 0 : t.hashed) &&
                          void 0 !== r
                            ? r
                            : n3.hashed,
                        cssVar: null == t ? void 0 : t.cssVar,
                      }),
                a = aX();
              return tw(
                () => {
                  var r, c;
                  if (!e) return t;
                  let l = Object.assign({}, i.components);
                  Object.keys(e.components || {}).forEach((t) => {
                    l[t] = Object.assign(
                      Object.assign({}, l[t]),
                      e.components[t]
                    );
                  });
                  let s = "css-var-".concat(a.replace(/:/g, "")),
                    u =
                      (null !== (r = o.cssVar) && void 0 !== r
                        ? r
                        : i.cssVar) &&
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            { prefix: null == n ? void 0 : n.prefixCls },
                            "object" == typeof i.cssVar ? i.cssVar : {}
                          ),
                          "object" == typeof o.cssVar ? o.cssVar : {}
                        ),
                        {
                          key:
                            ("object" == typeof o.cssVar &&
                              (null === (c = o.cssVar) || void 0 === c
                                ? void 0
                                : c.key)) ||
                            s,
                        }
                      );
                  return Object.assign(Object.assign(Object.assign({}, i), o), {
                    token: Object.assign(Object.assign({}, i.token), o.token),
                    components: l,
                    cssVar: u,
                  });
                },
                [o, i],
                (e, t) => e.some((e, n) => !tE(e, t[n], !0))
              );
            })(x, b.theme, { prefixCls: ek("") }),
            eI = {
              csp: eO,
              autoInsertSpaceInButton: r,
              alert: o,
              anchor: i,
              locale: c || v,
              direction: s,
              space: u,
              splitter: d,
              virtual: f,
              popupMatchSelectWidth: null != h ? h : p,
              popupOverflow: m,
              getPrefixCls: ek,
              iconPrefixCls: eM,
              theme: eR,
              segmented: E,
              statistic: S,
              spin: C,
              calendar: k,
              carousel: M,
              cascader: O,
              collapse: R,
              typography: I,
              checkbox: P,
              descriptions: F,
              divider: j,
              drawer: A,
              skeleton: T,
              steps: N,
              image: _,
              input: $,
              textArea: K,
              layout: H,
              list: z,
              mentions: L,
              modal: D,
              progress: B,
              result: V,
              slider: W,
              breadcrumb: q,
              menu: U,
              pagination: X,
              empty: G,
              badge: Y,
              radio: Q,
              rate: Z,
              switch: J,
              transfer: ee,
              avatar: et,
              message: en,
              tag: er,
              table: eo,
              card: ei,
              tabs: ea,
              timeline: ec,
              timePicker: el,
              upload: es,
              notification: eu,
              tree: ed,
              colorPicker: ef,
              datePicker: ep,
              rangePicker: eh,
              flex: eg,
              wave: ev,
              dropdown: eb,
              warning: ey,
              tour: ex,
              floatButtonGroup: ew,
              variant: eE,
              inputNumber: eS,
              treeSelect: eC,
            },
            eP = Object.assign({}, b);
          Object.keys(eI).forEach((e) => {
            void 0 !== eI[e] && (eP[e] = eI[e]);
          }),
            a3.forEach((t) => {
              let n = e[t];
              n && (eP[t] = n);
            }),
            void 0 !== r &&
              (eP.button = Object.assign({ autoInsertSpace: r }, eP.button));
          let eF = tw(
              () => eP,
              eP,
              (e, t) => {
                let n = Object.keys(e),
                  r = Object.keys(t);
                return n.length !== r.length || n.some((n) => e[n] !== t[n]);
              }
            ),
            ej = g.useMemo(() => ({ prefixCls: eM, csp: eO }), [eM, eO]),
            eA = g.createElement(
              g.Fragment,
              null,
              g.createElement(aK, { dropdownMatchSelectWidth: p }),
              t
            ),
            eT = g.useMemo(() => {
              var e, t, n, r;
              return oJ(
                (null === (e = rg.Form) || void 0 === e
                  ? void 0
                  : e.defaultValidateMessages) || {},
                (null ===
                  (n =
                    null === (t = eF.locale) || void 0 === t
                      ? void 0
                      : t.Form) || void 0 === n
                  ? void 0
                  : n.defaultValidateMessages) || {},
                (null === (r = eF.form) || void 0 === r
                  ? void 0
                  : r.validateMessages) || {},
                (null == a ? void 0 : a.validateMessages) || {}
              );
            }, [eF, null == a ? void 0 : a.validateMessages]);
          Object.keys(eT).length > 0 &&
            (eA = g.createElement(az.Provider, { value: eT }, eA)),
            c &&
              (eA = g.createElement(
                aB,
                { locale: c, _ANT_MARK__: "internalMark" },
                eA
              )),
            (eM || eO) &&
              (eA = g.createElement(em.Provider, { value: ej }, eA)),
            l && (eA = g.createElement(tg, { size: l }, eA)),
            (eA = g.createElement(a$, null, eA));
          let eN = g.useMemo(() => {
            let e = eR || {},
              { algorithm: t, token: n, components: r, cssVar: o } = e,
              i = a6(e, ["algorithm", "token", "components", "cssVar"]),
              a = t && (!Array.isArray(t) || t.length > 0) ? t_(t) : n6,
              c = {};
            Object.entries(r || {}).forEach((e) => {
              let [t, n] = e,
                r = Object.assign({}, n);
              "algorithm" in r &&
                (!0 === r.algorithm
                  ? (r.theme = a)
                  : (Array.isArray(r.algorithm) ||
                      "function" == typeof r.algorithm) &&
                    (r.theme = t_(r.algorithm)),
                delete r.algorithm),
                (c[t] = r);
            });
            let l = Object.assign(Object.assign({}, nA), n);
            return Object.assign(Object.assign({}, i), {
              theme: a,
              token: l,
              components: c,
              override: Object.assign({ override: l }, c),
              cssVar: o,
            });
          }, [eR]);
          return (
            x && (eA = g.createElement(n4.Provider, { value: eN }, eA)),
            eF.warning &&
              (eA = g.createElement(a_.Provider, { value: eF.warning }, eA)),
            void 0 !== w && (eA = g.createElement(aq, { disabled: w }, eA)),
            g.createElement(tp.Provider, { value: eF }, eA)
          );
        },
        a9 = (e) => {
          let t = g.useContext(tp),
            n = g.useContext(rd);
          return g.createElement(
            a4,
            Object.assign({ parentContext: t, legacyLocale: n }, e)
          );
        };
      (a9.ConfigContext = tp),
        (a9.SizeContext = tm),
        (a9.config = (e) => {
          let { prefixCls: t, iconPrefixCls: n, theme: o, holderRender: i } = e;
          void 0 !== t && (r = t),
            o &&
              Object.keys(o).some((e) => e.endsWith("Color")) &&
              (function (e, t) {
                let n = (function (e, t) {
                  let n = {},
                    r = (e, t) => {
                      let n = e.clone();
                      return (n =
                        (null == t ? void 0 : t(n)) || n).toRgbString();
                    },
                    o = (e, t) => {
                      let o = new nY(e),
                        i = D(o.toRgbString());
                      (n["".concat(t, "-color")] = r(o)),
                        (n["".concat(t, "-color-disabled")] = i[1]),
                        (n["".concat(t, "-color-hover")] = i[4]),
                        (n["".concat(t, "-color-active")] = i[6]),
                        (n["".concat(t, "-color-outline")] = o
                          .clone()
                          .setAlpha(0.2)
                          .toRgbString()),
                        (n["".concat(t, "-color-deprecated-bg")] = i[0]),
                        (n["".concat(t, "-color-deprecated-border")] = i[2]);
                    };
                  if (t.primaryColor) {
                    o(t.primaryColor, "primary");
                    let e = new nY(t.primaryColor),
                      i = D(e.toRgbString());
                    i.forEach((e, t) => {
                      n["primary-".concat(t + 1)] = e;
                    }),
                      (n["primary-color-deprecated-l-35"] = r(e, (e) =>
                        e.lighten(35)
                      )),
                      (n["primary-color-deprecated-l-20"] = r(e, (e) =>
                        e.lighten(20)
                      )),
                      (n["primary-color-deprecated-t-20"] = r(e, (e) =>
                        e.tint(20)
                      )),
                      (n["primary-color-deprecated-t-50"] = r(e, (e) =>
                        e.tint(50)
                      )),
                      (n["primary-color-deprecated-f-12"] = r(e, (e) =>
                        e.setAlpha(0.12 * e.getAlpha())
                      ));
                    let a = new nY(i[0]);
                    (n["primary-color-active-deprecated-f-30"] = r(a, (e) =>
                      e.setAlpha(0.3 * e.getAlpha())
                    )),
                      (n["primary-color-active-deprecated-d-02"] = r(a, (e) =>
                        e.darken(2)
                      ));
                  }
                  t.successColor && o(t.successColor, "success"),
                    t.warningColor && o(t.warningColor, "warning"),
                    t.errorColor && o(t.errorColor, "error"),
                    t.infoColor && o(t.infoColor, "info");
                  let i = Object.keys(n).map((t) =>
                    "--".concat(e, "-").concat(t, ": ").concat(n[t], ";")
                  );
                  return "\n  :root {\n    "
                    .concat(i.join("\n"), "\n  }\n  ")
                    .trim();
                })(e, t);
                eb() && eR(n, "".concat(aV, "-dynamic-theme"));
              })(r || "ant", o);
        }),
        (a9.useConfig = function () {
          return {
            componentDisabled: (0, g.useContext)(aW),
            componentSize: (0, g.useContext)(tm),
          };
        }),
        Object.defineProperty(a9, "SizeContext", { get: () => tm });
      let a8 = (e, t) => t || e;
      var a7 = tk(function e() {
          tS(this, e);
        }),
        ce = "CALC_UNIT",
        ct = RegExp(ce, "g");
      function cn(e) {
        return "number" == typeof e ? "".concat(e).concat(ce) : e;
      }
      var cr = (function (e) {
          r8(n, e);
          var t = on(n);
          function n(e, r) {
            tS(this, n),
              O(ot((o = t.call(this))), "result", ""),
              O(ot(o), "unitlessCssVar", void 0),
              O(ot(o), "lowPriority", void 0);
            var o,
              i = k(e);
            return (
              (o.unitlessCssVar = r),
              e instanceof n
                ? (o.result = "(".concat(e.result, ")"))
                : "number" === i
                ? (o.result = cn(e))
                : "string" === i && (o.result = e),
              o
            );
          }
          return (
            tk(n, [
              {
                key: "add",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result = ""
                          .concat(this.result, " + ")
                          .concat(e.getResult()))
                      : ("number" == typeof e || "string" == typeof e) &&
                        (this.result = ""
                          .concat(this.result, " + ")
                          .concat(cn(e))),
                    (this.lowPriority = !0),
                    this
                  );
                },
              },
              {
                key: "sub",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result = ""
                          .concat(this.result, " - ")
                          .concat(e.getResult()))
                      : ("number" == typeof e || "string" == typeof e) &&
                        (this.result = ""
                          .concat(this.result, " - ")
                          .concat(cn(e))),
                    (this.lowPriority = !0),
                    this
                  );
                },
              },
              {
                key: "mul",
                value: function (e) {
                  return (
                    this.lowPriority &&
                      (this.result = "(".concat(this.result, ")")),
                    e instanceof n
                      ? (this.result = ""
                          .concat(this.result, " * ")
                          .concat(e.getResult(!0)))
                      : ("number" == typeof e || "string" == typeof e) &&
                        (this.result = "".concat(this.result, " * ").concat(e)),
                    (this.lowPriority = !1),
                    this
                  );
                },
              },
              {
                key: "div",
                value: function (e) {
                  return (
                    this.lowPriority &&
                      (this.result = "(".concat(this.result, ")")),
                    e instanceof n
                      ? (this.result = ""
                          .concat(this.result, " / ")
                          .concat(e.getResult(!0)))
                      : ("number" == typeof e || "string" == typeof e) &&
                        (this.result = "".concat(this.result, " / ").concat(e)),
                    (this.lowPriority = !1),
                    this
                  );
                },
              },
              {
                key: "getResult",
                value: function (e) {
                  return this.lowPriority || e
                    ? "(".concat(this.result, ")")
                    : this.result;
                },
              },
              {
                key: "equal",
                value: function (e) {
                  var t = this,
                    n = (e || {}).unit,
                    r = !0;
                  return ("boolean" == typeof n
                    ? (r = n)
                    : Array.from(this.unitlessCssVar).some(function (e) {
                        return t.result.includes(e);
                      }) && (r = !1),
                  (this.result = this.result.replace(ct, r ? "px" : "")),
                  void 0 !== this.lowPriority)
                    ? "calc(".concat(this.result, ")")
                    : this.result;
                },
              },
            ]),
            n
          );
        })(a7),
        co = (function (e) {
          r8(n, e);
          var t = on(n);
          function n(e) {
            var r;
            return (
              tS(this, n),
              O(ot((r = t.call(this))), "result", 0),
              e instanceof n
                ? (r.result = e.result)
                : "number" == typeof e && (r.result = e),
              r
            );
          }
          return (
            tk(n, [
              {
                key: "add",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result += e.result)
                      : "number" == typeof e && (this.result += e),
                    this
                  );
                },
              },
              {
                key: "sub",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result -= e.result)
                      : "number" == typeof e && (this.result -= e),
                    this
                  );
                },
              },
              {
                key: "mul",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result *= e.result)
                      : "number" == typeof e && (this.result *= e),
                    this
                  );
                },
              },
              {
                key: "div",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result /= e.result)
                      : "number" == typeof e && (this.result /= e),
                    this
                  );
                },
              },
              {
                key: "equal",
                value: function () {
                  return this.result;
                },
              },
            ]),
            n
          );
        })(a7),
        ci = function (e, t) {
          var n = "css" === e ? cr : co;
          return function (e) {
            return new n(e, t);
          };
        },
        ca = function (e, t) {
          return "".concat(
            [
              t,
              e
                .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
                .replace(/([a-z])([A-Z])/g, "$1-$2"),
            ]
              .filter(Boolean)
              .join("-")
          );
        },
        cc = function (e, t, n, r) {
          var o = ev({}, t[e]);
          null != r &&
            r.deprecatedTokens &&
            r.deprecatedTokens.forEach(function (e) {
              var t,
                n = C(e, 2),
                r = n[0],
                i = n[1];
              ((null != o && o[r]) || (null != o && o[i])) &&
                ((null !== (t = o[i]) && void 0 !== t) ||
                  (o[i] = null == o ? void 0 : o[r]));
            });
          var i = ev(ev({}, n), o);
          return (
            Object.keys(i).forEach(function (e) {
              i[e] === t[e] && delete i[e];
            }),
            i
          );
        },
        cl = "undefined" != typeof CSSINJS_STATISTIC,
        cs = !0;
      function cu() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (!cl) return Object.assign.apply(Object, [{}].concat(t));
        cs = !1;
        var r = {};
        return (
          t.forEach(function (e) {
            "object" === k(e) &&
              Object.keys(e).forEach(function (t) {
                Object.defineProperty(r, t, {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                });
              });
          }),
          (cs = !0),
          r
        );
      }
      var cd = {};
      function cf() {}
      var cp = function (e) {
          var t,
            n = e,
            r = cf;
          return (
            cl &&
              "undefined" != typeof Proxy &&
              ((t = new Set()),
              (n = new Proxy(e, {
                get: function (e, n) {
                  if (cs) {
                    var r;
                    null === (r = t) || void 0 === r || r.add(n);
                  }
                  return e[n];
                },
              })),
              (r = function (e, n) {
                var r;
                cd[e] = {
                  global: Array.from(t),
                  component: ev(
                    ev(
                      {},
                      null === (r = cd[e]) || void 0 === r
                        ? void 0
                        : r.component
                    ),
                    n
                  ),
                };
              })),
            { token: n, keys: t, flush: r }
          );
        },
        ch = function (e, t, n) {
          if ("function" == typeof n) {
            var r;
            return n(cu(t, null !== (r = t[e]) && void 0 !== r ? r : {}));
          }
          return null != n ? n : {};
        },
        cm = new ((function () {
          function e() {
            tS(this, e),
              O(this, "map", new Map()),
              O(this, "objectIDMap", new WeakMap()),
              O(this, "nextID", 0),
              O(this, "lastAccessBeat", new Map()),
              O(this, "accessBeat", 0);
          }
          return (
            tk(e, [
              {
                key: "set",
                value: function (e, t) {
                  this.clear();
                  var n = this.getCompositeKey(e);
                  this.map.set(n, t), this.lastAccessBeat.set(n, Date.now());
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = this.getCompositeKey(e),
                    n = this.map.get(t);
                  return (
                    this.lastAccessBeat.set(t, Date.now()),
                    (this.accessBeat += 1),
                    n
                  );
                },
              },
              {
                key: "getCompositeKey",
                value: function (e) {
                  var t = this;
                  return e
                    .map(function (e) {
                      return e && "object" === k(e)
                        ? "obj_".concat(t.getObjectID(e))
                        : "".concat(k(e), "_").concat(e);
                    })
                    .join("|");
                },
              },
              {
                key: "getObjectID",
                value: function (e) {
                  if (this.objectIDMap.has(e)) return this.objectIDMap.get(e);
                  var t = this.nextID;
                  return this.objectIDMap.set(e, t), (this.nextID += 1), t;
                },
              },
              {
                key: "clear",
                value: function () {
                  var e = this;
                  if (this.accessBeat > 1e4) {
                    var t = Date.now();
                    this.lastAccessBeat.forEach(function (n, r) {
                      t - n > 6e5 &&
                        (e.map.delete(r), e.lastAccessBeat.delete(r));
                    }),
                      (this.accessBeat = 0);
                  }
                },
              },
            ]),
            e
          );
        })())(),
        cg = function () {
          return {};
        };
      let {
          genStyleHooks: cv,
          genComponentStyleHook: cb,
          genSubStyleComponent: cy,
        } = (function (e) {
          var t = e.useCSP,
            n = void 0 === t ? cg : t,
            r = e.useToken,
            o = e.usePrefix,
            i = e.getResetStyles,
            a = e.getCommonStyle,
            c = e.getCompUnitless;
          function l(t, c, l) {
            var s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              u = Array.isArray(t) ? t : [t, t],
              d = C(u, 1)[0],
              f = u.join("-"),
              p = e.layer || { name: "antd" };
            return function (e) {
              var t,
                u,
                h =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e,
                m = r(),
                v = m.theme,
                b = m.realToken,
                y = m.hashId,
                x = m.token,
                w = m.cssVar,
                E = o(),
                S = E.rootPrefixCls,
                C = E.iconPrefixCls,
                M = n(),
                O = w ? "css" : "js",
                R =
                  ((t = function () {
                    var e = new Set();
                    return (
                      w &&
                        Object.keys(s.unitless || {}).forEach(function (t) {
                          e.add(tU(t, w.prefix)), e.add(tU(t, ca(d, w.prefix)));
                        }),
                      ci(O, e)
                    );
                  }),
                  (u = [O, d, null == w ? void 0 : w.prefix]),
                  g.useMemo(function () {
                    var e = cm.get(u);
                    if (e) return e;
                    var n = t();
                    return cm.set(u, n), n;
                  }, u)),
                I =
                  "js" === O
                    ? { max: Math.max, min: Math.min }
                    : {
                        max: function () {
                          for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return "max(".concat(
                            t
                              .map(function (e) {
                                return tW(e);
                              })
                              .join(","),
                            ")"
                          );
                        },
                        min: function () {
                          for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return "min(".concat(
                            t
                              .map(function (e) {
                                return tW(e);
                              })
                              .join(","),
                            ")"
                          );
                        },
                      },
                P = I.max,
                F = I.min,
                j = {
                  theme: v,
                  token: x,
                  hashId: y,
                  nonce: function () {
                    return M.nonce;
                  },
                  clientOnly: s.clientOnly,
                  layer: p,
                  order: s.order || -999,
                };
              return (
                "function" == typeof i &&
                  nO(
                    ev(ev({}, j), {}, { clientOnly: !1, path: ["Shared", S] }),
                    function () {
                      return i(x, {
                        prefix: { rootPrefixCls: S, iconPrefixCls: C },
                        csp: M,
                      });
                    }
                  ),
                [
                  nO(ev(ev({}, j), {}, { path: [f, e, C] }), function () {
                    if (!1 === s.injectStyle) return [];
                    var t = cp(x),
                      n = t.token,
                      r = t.flush,
                      o = ch(d, b, l),
                      i = ".".concat(e),
                      u = cc(d, b, o, { deprecatedTokens: s.deprecatedTokens });
                    w &&
                      o &&
                      "object" === k(o) &&
                      Object.keys(o).forEach(function (e) {
                        o[e] = "var(".concat(tU(e, ca(d, w.prefix)), ")");
                      });
                    var f = cu(
                        n,
                        {
                          componentCls: i,
                          prefixCls: e,
                          iconCls: ".".concat(C),
                          antCls: ".".concat(S),
                          calc: R,
                          max: P,
                          min: F,
                        },
                        w ? o : u
                      ),
                      p = c(f, {
                        hashId: y,
                        prefixCls: e,
                        rootPrefixCls: S,
                        iconPrefixCls: C,
                      });
                    r(d, u);
                    var m =
                      "function" == typeof a ? a(f, e, h, s.resetFont) : null;
                    return [!1 === s.resetStyle ? null : m, p];
                  }),
                  y,
                ]
              );
            };
          }
          return {
            genStyleHooks: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                d,
                f,
                p = Array.isArray(e) ? e[0] : e;
              function h(e) {
                return ""
                  .concat(String(p))
                  .concat(e.slice(0, 1).toUpperCase())
                  .concat(e.slice(1));
              }
              var m = (null == o ? void 0 : o.unitless) || {},
                v = ev(
                  ev({}, "function" == typeof c ? c(e) : {}),
                  {},
                  O({}, h("zIndexPopup"), !0)
                );
              Object.keys(m).forEach(function (e) {
                v[h(e)] = m[e];
              });
              var b = ev(ev({}, o), {}, { unitless: v, prefixToken: h }),
                y = l(e, t, n, b),
                x =
                  ((i = b.unitless),
                  (s = void 0 === (a = b.injectStyle) || a),
                  (u = b.prefixToken),
                  (d = b.ignore),
                  (f = function (e) {
                    var t = e.rootCls,
                      o = e.cssVar,
                      a = void 0 === o ? {} : o,
                      c = r().realToken;
                    return (
                      nI(
                        {
                          path: [p],
                          prefix: a.prefix,
                          key: a.key,
                          unitless: i,
                          ignore: d,
                          token: c,
                          scope: t,
                        },
                        function () {
                          var e = ch(p, c, n),
                            t = cc(p, c, e, {
                              deprecatedTokens:
                                null == b ? void 0 : b.deprecatedTokens,
                            });
                          return (
                            Object.keys(e).forEach(function (e) {
                              (t[u(e)] = t[e]), delete t[e];
                            }),
                            t
                          );
                        }
                      ),
                      null
                    );
                  }),
                  function (e) {
                    var t = r().cssVar;
                    return [
                      function (n) {
                        return s && t
                          ? g.createElement(
                              g.Fragment,
                              null,
                              g.createElement(f, {
                                rootCls: e,
                                cssVar: t,
                                component: p,
                              }),
                              n
                            )
                          : n;
                      },
                      null == t ? void 0 : t.key,
                    ];
                  });
              return function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e,
                  n = C(y(e, t), 2)[1],
                  r = C(x(t), 2);
                return [r[0], n, r[1]];
              };
            },
            genSubStyleComponent: function (e, t, n) {
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                o = l(e, t, n, ev({ resetStyle: !1, order: -998 }, r));
              return function (e) {
                var t = e.prefixCls,
                  n = e.rootCls,
                  r = void 0 === n ? t : n;
                return o(t, r), null;
              };
            },
            genComponentStyleHook: l,
          };
        })({
          usePrefix: () => {
            let { getPrefixCls: e, iconPrefixCls: t } = (0, g.useContext)(tp);
            return { rootPrefixCls: e(), iconPrefixCls: t };
          },
          useToken: () => {
            let [e, t, n, r, o] = ra();
            return { theme: e, realToken: t, hashId: n, token: r, cssVar: o };
          },
          useCSP: () => {
            let { csp: e } = (0, g.useContext)(tp);
            return null != e ? e : {};
          },
          getResetStyles: (e, t) => {
            var n;
            return [
              { "&": aJ(e) },
              a2(
                null !== (n = null == t ? void 0 : t.prefix.iconPrefixCls) &&
                  void 0 !== n
                  ? n
                  : td
              ),
            ];
          },
          getCommonStyle: (e, t, n, r) => {
            let o = '[class^="'.concat(t, '"], [class*=" ').concat(t, '"]'),
              i = n ? ".".concat(n) : o,
              a = {
                boxSizing: "border-box",
                "&::before, &::after": { boxSizing: "border-box" },
              },
              c = {};
            return (
              !1 !== r &&
                (c = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
              {
                [i]: Object.assign(Object.assign(Object.assign({}, c), a), {
                  [o]: a,
                }),
              }
            );
          },
          getCompUnitless: () => rn,
        }),
        cx = (e) => {
          let {
            componentCls: t,
            margin: n,
            marginXS: r,
            marginXL: o,
            fontSize: i,
            lineHeight: a,
          } = e;
          return {
            [t]: {
              marginInline: r,
              fontSize: i,
              lineHeight: a,
              textAlign: "center",
              ["".concat(t, "-image")]: {
                height: e.emptyImgHeight,
                marginBottom: r,
                opacity: e.opacityImage,
                img: { height: "100%" },
                svg: { maxWidth: "100%", height: "100%", margin: "auto" },
              },
              ["".concat(t, "-description")]: { color: e.colorTextDescription },
              ["".concat(t, "-footer")]: { marginTop: n },
              "&-normal": {
                marginBlock: o,
                color: e.colorTextDescription,
                ["".concat(t, "-description")]: {
                  color: e.colorTextDescription,
                },
                ["".concat(t, "-image")]: { height: e.emptyImgHeightMD },
              },
              "&-small": {
                marginBlock: r,
                color: e.colorTextDescription,
                ["".concat(t, "-image")]: { height: e.emptyImgHeightSM },
              },
            },
          };
        };
      var cw = cv("Empty", (e) => {
          let { componentCls: t, controlHeightLG: n, calc: r } = e;
          return [
            cx(
              cu(e, {
                emptyImgCls: "".concat(t, "-img"),
                emptyImgHeight: r(n).mul(2.5).equal(),
                emptyImgHeightMD: n,
                emptyImgHeightSM: r(n).mul(0.875).equal(),
              })
            ),
          ];
        }),
        cE = function (e, t) {
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
        };
      let cS = g.createElement(() => {
          let [, e] = ra(),
            [t] = rv("Empty"),
            n = new nY(e.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {};
          return g.createElement(
            "svg",
            {
              style: n,
              width: "184",
              height: "152",
              viewBox: "0 0 184 152",
              xmlns: "http://www.w3.org/2000/svg",
            },
            g.createElement(
              "title",
              null,
              (null == t ? void 0 : t.description) || "Empty"
            ),
            g.createElement(
              "g",
              { fill: "none", fillRule: "evenodd" },
              g.createElement(
                "g",
                { transform: "translate(24 31.67)" },
                g.createElement("ellipse", {
                  fillOpacity: ".8",
                  fill: "#F5F5F7",
                  cx: "67.797",
                  cy: "106.89",
                  rx: "67.797",
                  ry: "12.668",
                }),
                g.createElement("path", {
                  d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
                  fill: "#AEB8C2",
                }),
                g.createElement("path", {
                  d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
                  fill: "url(#linearGradient-1)",
                  transform: "translate(13.56)",
                }),
                g.createElement("path", {
                  d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
                  fill: "#F5F5F7",
                }),
                g.createElement("path", {
                  d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
                  fill: "#DCE0E6",
                })
              ),
              g.createElement("path", {
                d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
                fill: "#DCE0E6",
              }),
              g.createElement(
                "g",
                { transform: "translate(149.65 15.383)", fill: "#FFF" },
                g.createElement("ellipse", {
                  cx: "20.654",
                  cy: "3.167",
                  rx: "2.849",
                  ry: "2.815",
                }),
                g.createElement("path", {
                  d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z",
                })
              )
            )
          );
        }, null),
        cC = g.createElement(() => {
          let [, e] = ra(),
            [t] = rv("Empty"),
            {
              colorFill: n,
              colorFillTertiary: r,
              colorFillQuaternary: o,
              colorBgContainer: i,
            } = e,
            {
              borderColor: a,
              shadowColor: c,
              contentColor: l,
            } = (0, g.useMemo)(
              () => ({
                borderColor: new nY(n).onBackground(i).toHexShortString(),
                shadowColor: new nY(r).onBackground(i).toHexShortString(),
                contentColor: new nY(o).onBackground(i).toHexShortString(),
              }),
              [n, r, o, i]
            );
          return g.createElement(
            "svg",
            {
              width: "64",
              height: "41",
              viewBox: "0 0 64 41",
              xmlns: "http://www.w3.org/2000/svg",
            },
            g.createElement(
              "title",
              null,
              (null == t ? void 0 : t.description) || "Empty"
            ),
            g.createElement(
              "g",
              {
                transform: "translate(0 1)",
                fill: "none",
                fillRule: "evenodd",
              },
              g.createElement("ellipse", {
                fill: c,
                cx: "32",
                cy: "33",
                rx: "32",
                ry: "7",
              }),
              g.createElement(
                "g",
                { fillRule: "nonzero", stroke: a },
                g.createElement("path", {
                  d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z",
                }),
                g.createElement("path", {
                  d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
                  fill: l,
                })
              )
            )
          );
        }, null),
        ck = (e) => {
          var {
              className: t,
              rootClassName: n,
              prefixCls: r,
              image: o = cS,
              description: i,
              children: a,
              imageStyle: c,
              style: l,
            } = e,
            s = cE(e, [
              "className",
              "rootClassName",
              "prefixCls",
              "image",
              "description",
              "children",
              "imageStyle",
              "style",
            ]);
          let { getPrefixCls: u, direction: d, empty: f } = g.useContext(tp),
            p = u("empty", r),
            [h, m, v] = cw(p),
            [b] = rv("Empty"),
            y = void 0 !== i ? i : null == b ? void 0 : b.description,
            x = null;
          return (
            (x =
              "string" == typeof o
                ? g.createElement("img", {
                    alt: "string" == typeof y ? y : "empty",
                    src: o,
                  })
                : o),
            h(
              g.createElement(
                "div",
                Object.assign(
                  {
                    className: P()(
                      m,
                      v,
                      p,
                      null == f ? void 0 : f.className,
                      {
                        ["".concat(p, "-normal")]: o === cC,
                        ["".concat(p, "-rtl")]: "rtl" === d,
                      },
                      t,
                      n
                    ),
                    style: Object.assign(
                      Object.assign({}, null == f ? void 0 : f.style),
                      l
                    ),
                  },
                  s
                ),
                g.createElement(
                  "div",
                  { className: "".concat(p, "-image"), style: c },
                  x
                ),
                y &&
                  g.createElement(
                    "div",
                    { className: "".concat(p, "-description") },
                    y
                  ),
                a &&
                  g.createElement(
                    "div",
                    { className: "".concat(p, "-footer") },
                    a
                  )
              )
            )
          );
        };
      (ck.PRESENTED_IMAGE_DEFAULT = cS), (ck.PRESENTED_IMAGE_SIMPLE = cC);
      var cM = (e) => {
          let { componentName: t } = e,
            { getPrefixCls: n } = (0, g.useContext)(tp),
            r = n("empty");
          switch (t) {
            case "Table":
            case "List":
              return g.createElement(ck, { image: ck.PRESENTED_IMAGE_SIMPLE });
            case "Select":
            case "TreeSelect":
            case "Cascader":
            case "Transfer":
            case "Mentions":
              return g.createElement(ck, {
                image: ck.PRESENTED_IMAGE_SIMPLE,
                className: "".concat(r, "-small"),
              });
            case "Table.filter":
              return null;
            default:
              return g.createElement(ck, null);
          }
        },
        cO = (e) => {
          let [, , , , t] = ra();
          return t ? "".concat(e, "-css-var") : "";
        };
      function cR() {
        cR = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (e) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(t, n, r, i) {
          var a,
            c,
            l = Object.create(
              (n && n.prototype instanceof g ? n : g).prototype
            );
          return (
            o(l, "_invoke", {
              value:
                ((a = new R(i || [])),
                (c = f),
                function (n, o) {
                  if (c === p) throw Error("Generator is already running");
                  if (c === h) {
                    if ("throw" === n) throw o;
                    return { value: e, done: !0 };
                  }
                  for (a.method = n, a.arg = o; ; ) {
                    var i = a.delegate;
                    if (i) {
                      var l = (function t(n, r) {
                        var o = r.method,
                          i = n.iterator[o];
                        if (i === e)
                          return (
                            (r.delegate = null),
                            ("throw" === o &&
                              n.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = e),
                              t(n, r),
                              "throw" === r.method)) ||
                              ("return" !== o &&
                                ((r.method = "throw"),
                                (r.arg = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method"
                                )))),
                            m
                          );
                        var a = d(i, n.iterator, r.arg);
                        if ("throw" === a.type)
                          return (
                            (r.method = "throw"),
                            (r.arg = a.arg),
                            (r.delegate = null),
                            m
                          );
                        var c = a.arg;
                        return c
                          ? c.done
                            ? ((r[n.resultName] = c.value),
                              (r.next = n.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = e)),
                              (r.delegate = null),
                              m)
                            : c
                          : ((r.method = "throw"),
                            (r.arg = TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            m);
                      })(i, a);
                      if (l) {
                        if (l === m) continue;
                        return l;
                      }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                      if (c === f) throw ((c = h), a.arg);
                      a.dispatchException(a.arg);
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    c = p;
                    var s = d(t, r, a);
                    if ("normal" === s.type) {
                      if (((c = a.done ? h : "suspendedYield"), s.arg === m))
                        continue;
                      return { value: s.arg, done: a.done };
                    }
                    "throw" === s.type &&
                      ((c = h), (a.method = "throw"), (a.arg = s.arg));
                  }
                }),
            }),
            l
          );
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = u;
        var f = "suspendedStart",
          p = "executing",
          h = "completed",
          m = {};
        function g() {}
        function v() {}
        function b() {}
        var y = {};
        s(y, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          w = x && x(x(I([])));
        w && w !== n && r.call(w, a) && (y = w);
        var E = (b.prototype = g.prototype = Object.create(y));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function C(e, t) {
          var n;
          o(this, "_invoke", {
            value: function (o, i) {
              function a() {
                return new t(function (n, a) {
                  !(function n(o, i, a, c) {
                    var l = d(e[o], e, i);
                    if ("throw" !== l.type) {
                      var s = l.arg,
                        u = s.value;
                      return u && "object" == k(u) && r.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              n("next", e, a, c);
                            },
                            function (e) {
                              n("throw", e, a, c);
                            }
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return n("throw", e, a, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(o, i, n, a);
                });
              }
              return (n = n ? n.then(a, a) : a());
            },
          });
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function R(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function I(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw TypeError(k(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(E, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = s(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), s(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(E)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(C.prototype),
          s(C.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = C),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new C(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(E),
          s(E, l, "Generator"),
          s(E, a, function () {
            return this;
          }),
          s(E, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = I),
          (R.prototype = {
            constructor: R,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (l && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: I(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      function cI(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            l = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function cP(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              cI(i, r, o, a, c, "next", e);
            }
            function c(e) {
              cI(i, r, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var cF = "RC_FORM_INTERNAL_HOOKS",
        cj = function () {
          e_(
            !1,
            "Can not find FormContext. Please make sure you wrap Field under Form."
          );
        },
        cA = g.createContext({
          getFieldValue: cj,
          getFieldsValue: cj,
          getFieldError: cj,
          getFieldWarning: cj,
          getFieldsError: cj,
          isFieldsTouched: cj,
          isFieldTouched: cj,
          isFieldValidating: cj,
          isFieldsValidating: cj,
          resetFields: cj,
          setFields: cj,
          setFieldValue: cj,
          setFieldsValue: cj,
          validateFields: cj,
          submit: cj,
          getInternalHooks: function () {
            return (
              cj(),
              {
                dispatch: cj,
                initEntityValue: cj,
                registerField: cj,
                useSubscribe: cj,
                setInitialValues: cj,
                destroyForm: cj,
                setCallbacks: cj,
                registerWatch: cj,
                getFields: cj,
                setValidateMessages: cj,
                setPreserve: cj,
                getInitialValue: cj,
              }
            );
          },
        }),
        cT = g.createContext(null);
      function cN(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e];
      }
      function c_() {
        return {
          default: "Validation error on field %s",
          required: "%s is required",
          enum: "%s must be one of %s",
          whitespace: "%s cannot be empty",
          date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid",
          },
          types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            boolean: "%s is not a %s",
            integer: "%s is not an %s",
            float: "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s",
          },
          string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters",
          },
          number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s",
          },
          array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length",
          },
          pattern: { mismatch: "%s value %s does not match pattern %s" },
          clone: function () {
            var e = JSON.parse(JSON.stringify(this));
            return (e.clone = this.clone), e;
          },
        };
      }
      var cH = c_();
      function cz(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (cz = function (e) {
          if (
            null === e ||
            !(function (e) {
              try {
                return (
                  -1 !== Function.toString.call(e).indexOf("[native code]")
                );
              } catch (t) {
                return "function" == typeof e;
              }
            })(e)
          )
            return e;
          if ("function" != typeof e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return (function (e, t, n) {
              if (oe()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new (e.bind.apply(e, r))();
              return n && r9(o, n.prototype), o;
            })(e, arguments, r7(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            r9(n, e)
          );
        })(e);
      }
      var cL = n(5566),
        cD = /%[sdj%]/g;
      function cB(e) {
        if (!e || !e.length) return null;
        var t = {};
        return (
          e.forEach(function (e) {
            var n = e.field;
            (t[n] = t[n] || []), t[n].push(e);
          }),
          t
        );
      }
      function cV(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        var o = 0,
          i = n.length;
        return "function" == typeof e
          ? e.apply(null, n)
          : "string" == typeof e
          ? e.replace(cD, function (e) {
              if ("%%" === e) return "%";
              if (o >= i) return e;
              switch (e) {
                case "%s":
                  return String(n[o++]);
                case "%d":
                  return Number(n[o++]);
                case "%j":
                  try {
                    return JSON.stringify(n[o++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                  break;
                default:
                  return e;
              }
            })
          : e;
      }
      function cW(e, t) {
        return (
          !!(null == e || ("array" === t && Array.isArray(e) && !e.length)) ||
          (("string" === t ||
            "url" === t ||
            "hex" === t ||
            "email" === t ||
            "date" === t ||
            "pattern" === t) &&
            "string" == typeof e &&
            !e)
        );
      }
      function cq(e, t, n) {
        var r = 0,
          o = e.length;
        !(function i(a) {
          if (a && a.length) {
            n(a);
            return;
          }
          var c = r;
          (r += 1), c < o ? t(e[c], i) : n([]);
        })([]);
      }
      void 0 !== cL && cL.env;
      var cU = (function (e) {
        r8(n, e);
        var t = on(n);
        function n(e, r) {
          var o;
          return (
            tS(this, n),
            O(
              ot((o = t.call(this, "Async Validation Error"))),
              "errors",
              void 0
            ),
            O(ot(o), "fields", void 0),
            (o.errors = e),
            (o.fields = r),
            o
          );
        }
        return tk(n);
      })(cz(Error));
      function cX(e, t) {
        return function (n) {
          var r;
          return ((r = e.fullFields
            ? (function (e, t) {
                for (var n = e, r = 0; r < t.length && void 0 != n; r++)
                  n = n[t[r]];
                return n;
              })(t, e.fullFields)
            : t[n.field || e.fullField]),
          n && void 0 !== n.message)
            ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
            : {
                message: "function" == typeof n ? n() : n,
                fieldValue: r,
                field: n.field || e.fullField,
              };
        };
      }
      function c$(e, t) {
        if (t) {
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              var r = t[n];
              "object" === k(r) && "object" === k(e[n])
                ? (e[n] = ev(ev({}, e[n]), r))
                : (e[n] = r);
            }
        }
        return e;
      }
      var cK = "enum",
        cG = function (e, t, n, r, o, i) {
          e.required &&
            (!n.hasOwnProperty(e.field) || cW(t, i || e.type)) &&
            r.push(cV(o.messages.required, e.fullField));
        },
        cY = function () {
          if (m) return m;
          var e = "[a-fA-F\\d:]",
            t = function (t) {
              return t && t.includeBoundaries
                ? "(?:(?<=\\s|^)(?="
                    .concat(e, ")|(?<=")
                    .concat(e, ")(?=\\s|$))")
                : "";
            },
            n =
              "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
            r = "[a-fA-F\\d]{1,4}",
            o = [
              "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
              "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
              "(?:"
                .concat(r, ":){5}(?::")
                .concat(n, "|(?::")
                .concat(r, "){1,2}|:)"),
              "(?:"
                .concat(r, ":){4}(?:(?::")
                .concat(r, "){0,1}:")
                .concat(n, "|(?::")
                .concat(r, "){1,3}|:)"),
              "(?:"
                .concat(r, ":){3}(?:(?::")
                .concat(r, "){0,2}:")
                .concat(n, "|(?::")
                .concat(r, "){1,4}|:)"),
              "(?:"
                .concat(r, ":){2}(?:(?::")
                .concat(r, "){0,3}:")
                .concat(n, "|(?::")
                .concat(r, "){1,5}|:)"),
              "(?:"
                .concat(r, ":){1}(?:(?::")
                .concat(r, "){0,4}:")
                .concat(n, "|(?::")
                .concat(r, "){1,6}|:)"),
              "(?::(?:(?::"
                .concat(r, "){0,5}:")
                .concat(n, "|(?::")
                .concat(r, "){1,7}|:))"),
            ],
            i = "(?:".concat(o.join("|"), ")").concat("(?:%[0-9a-zA-Z]{1,})?"),
            a = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")),
            c = new RegExp("^".concat(n, "$")),
            l = new RegExp("^".concat(i, "$")),
            s = function (e) {
              return e && e.exact
                ? a
                : RegExp(
                    "(?:"
                      .concat(t(e))
                      .concat(n)
                      .concat(t(e), ")|(?:")
                      .concat(t(e))
                      .concat(i)
                      .concat(t(e), ")"),
                    "g"
                  );
            };
          (s.v4 = function (e) {
            return e && e.exact
              ? c
              : RegExp("".concat(t(e)).concat(n).concat(t(e)), "g");
          }),
            (s.v6 = function (e) {
              return e && e.exact
                ? l
                : RegExp("".concat(t(e)).concat(i).concat(t(e)), "g");
            });
          var u = s.v4().source,
            d = s.v6().source,
            f = "(?:"
              .concat("(?:(?:[a-z]+:)?//)", "|www\\.)")
              .concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|")
              .concat(u, "|")
              .concat(d, "|")
              .concat(
                "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)"
              )
              .concat(
                "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"
              )
              .concat("(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", ")")
              .concat("(?::\\d{2,5})?")
              .concat('(?:[/?#][^\\s"]*)?');
          return (m = RegExp("(?:^".concat(f, "$)"), "i"));
        },
        cQ = {
          email:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
          hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
        },
        cZ = {
          integer: function (e) {
            return cZ.number(e) && parseInt(e, 10) === e;
          },
          float: function (e) {
            return cZ.number(e) && !cZ.integer(e);
          },
          array: function (e) {
            return Array.isArray(e);
          },
          regexp: function (e) {
            if (e instanceof RegExp) return !0;
            try {
              return new RegExp(e), !0;
            } catch (e) {
              return !1;
            }
          },
          date: function (e) {
            return (
              "function" == typeof e.getTime &&
              "function" == typeof e.getMonth &&
              "function" == typeof e.getYear &&
              !isNaN(e.getTime())
            );
          },
          number: function (e) {
            return !isNaN(e) && "number" == typeof e;
          },
          object: function (e) {
            return "object" === k(e) && !cZ.array(e);
          },
          method: function (e) {
            return "function" == typeof e;
          },
          email: function (e) {
            return (
              "string" == typeof e && e.length <= 320 && !!e.match(cQ.email)
            );
          },
          url: function (e) {
            return "string" == typeof e && e.length <= 2048 && !!e.match(cY());
          },
          hex: function (e) {
            return "string" == typeof e && !!e.match(cQ.hex);
          },
        },
        cJ = {
          required: cG,
          whitespace: function (e, t, n, r, o) {
            (/^\s+$/.test(t) || "" === t) &&
              r.push(cV(o.messages.whitespace, e.fullField));
          },
          type: function (e, t, n, r, o) {
            if (e.required && void 0 === t) {
              cG(e, t, n, r, o);
              return;
            }
            var i = e.type;
            [
              "integer",
              "float",
              "array",
              "regexp",
              "object",
              "method",
              "email",
              "number",
              "date",
              "url",
              "hex",
            ].indexOf(i) > -1
              ? cZ[i](t) || r.push(cV(o.messages.types[i], e.fullField, e.type))
              : i &&
                k(t) !== e.type &&
                r.push(cV(o.messages.types[i], e.fullField, e.type));
          },
          range: function (e, t, n, r, o) {
            var i = "number" == typeof e.len,
              a = "number" == typeof e.min,
              c = "number" == typeof e.max,
              l = t,
              s = null,
              u = "number" == typeof t,
              d = "string" == typeof t,
              f = Array.isArray(t);
            if (
              (u ? (s = "number") : d ? (s = "string") : f && (s = "array"), !s)
            )
              return !1;
            f && (l = t.length),
              d &&
                (l = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length),
              i
                ? l !== e.len &&
                  r.push(cV(o.messages[s].len, e.fullField, e.len))
                : a && !c && l < e.min
                ? r.push(cV(o.messages[s].min, e.fullField, e.min))
                : c && !a && l > e.max
                ? r.push(cV(o.messages[s].max, e.fullField, e.max))
                : a &&
                  c &&
                  (l < e.min || l > e.max) &&
                  r.push(cV(o.messages[s].range, e.fullField, e.min, e.max));
          },
          enum: function (e, t, n, r, o) {
            (e[cK] = Array.isArray(e[cK]) ? e[cK] : []),
              -1 === e[cK].indexOf(t) &&
                r.push(cV(o.messages[cK], e.fullField, e[cK].join(", ")));
          },
          pattern: function (e, t, n, r, o) {
            !e.pattern ||
              (e.pattern instanceof RegExp
                ? ((e.pattern.lastIndex = 0),
                  e.pattern.test(t) ||
                    r.push(
                      cV(o.messages.pattern.mismatch, e.fullField, t, e.pattern)
                    ))
                : "string" != typeof e.pattern ||
                  new RegExp(e.pattern).test(t) ||
                  r.push(
                    cV(o.messages.pattern.mismatch, e.fullField, t, e.pattern)
                  ));
          },
        },
        c0 = function (e, t, n, r, o) {
          var i = e.type,
            a = [];
          if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
            if (cW(t, i) && !e.required) return n();
            cJ.required(e, t, r, a, o, i), cW(t, i) || cJ.type(e, t, r, a, o);
          }
          n(a);
        },
        c1 = {
          string: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t, "string") && !e.required) return n();
              cJ.required(e, t, r, i, o, "string"),
                cW(t, "string") ||
                  (cJ.type(e, t, r, i, o),
                  cJ.range(e, t, r, i, o),
                  cJ.pattern(e, t, r, i, o),
                  !0 === e.whitespace && cJ.whitespace(e, t, r, i, o));
            }
            n(i);
          },
          method: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o),
                void 0 !== t && cJ.type(e, t, r, i, o);
            }
            n(i);
          },
          number: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (("" === t && (t = void 0), cW(t) && !e.required)) return n();
              cJ.required(e, t, r, i, o),
                void 0 !== t &&
                  (cJ.type(e, t, r, i, o), cJ.range(e, t, r, i, o));
            }
            n(i);
          },
          boolean: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o),
                void 0 !== t && cJ.type(e, t, r, i, o);
            }
            n(i);
          },
          regexp: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o), cW(t) || cJ.type(e, t, r, i, o);
            }
            n(i);
          },
          integer: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o),
                void 0 !== t &&
                  (cJ.type(e, t, r, i, o), cJ.range(e, t, r, i, o));
            }
            n(i);
          },
          float: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o),
                void 0 !== t &&
                  (cJ.type(e, t, r, i, o), cJ.range(e, t, r, i, o));
            }
            n(i);
          },
          array: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (null == t && !e.required) return n();
              cJ.required(e, t, r, i, o, "array"),
                null != t && (cJ.type(e, t, r, i, o), cJ.range(e, t, r, i, o));
            }
            n(i);
          },
          object: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o),
                void 0 !== t && cJ.type(e, t, r, i, o);
            }
            n(i);
          },
          enum: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o),
                void 0 !== t && cJ.enum(e, t, r, i, o);
            }
            n(i);
          },
          pattern: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t, "string") && !e.required) return n();
              cJ.required(e, t, r, i, o),
                cW(t, "string") || cJ.pattern(e, t, r, i, o);
            }
            n(i);
          },
          date: function (e, t, n, r, o) {
            var i,
              a = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t, "date") && !e.required) return n();
              cJ.required(e, t, r, a, o),
                !cW(t, "date") &&
                  ((i = t instanceof Date ? t : new Date(t)),
                  cJ.type(e, i, r, a, o),
                  i && cJ.range(e, i.getTime(), r, a, o));
            }
            n(a);
          },
          url: c0,
          hex: c0,
          email: c0,
          required: function (e, t, n, r, o) {
            var i = [],
              a = Array.isArray(t) ? "array" : k(t);
            cJ.required(e, t, r, i, o, a), n(i);
          },
          any: function (e, t, n, r, o) {
            var i = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (cW(t) && !e.required) return n();
              cJ.required(e, t, r, i, o);
            }
            n(i);
          },
        },
        c2 = (function () {
          function e(t) {
            tS(this, e),
              O(this, "rules", null),
              O(this, "_messages", cH),
              this.define(t);
          }
          return (
            tk(e, [
              {
                key: "define",
                value: function (e) {
                  var t = this;
                  if (!e)
                    throw Error("Cannot configure a schema with no rules");
                  if ("object" !== k(e) || Array.isArray(e))
                    throw Error("Rules must be an object");
                  (this.rules = {}),
                    Object.keys(e).forEach(function (n) {
                      var r = e[n];
                      t.rules[n] = Array.isArray(r) ? r : [r];
                    });
                },
              },
              {
                key: "messages",
                value: function (e) {
                  return e && (this._messages = c$(c_(), e)), this._messages;
                },
              },
              {
                key: "validate",
                value: function (t) {
                  var n = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {},
                    i = t,
                    a = r,
                    c = o;
                  if (
                    ("function" == typeof a && ((c = a), (a = {})),
                    !this.rules || 0 === Object.keys(this.rules).length)
                  )
                    return c && c(null, i), Promise.resolve(i);
                  if (a.messages) {
                    var l = this.messages();
                    l === cH && (l = c_()), c$(l, a.messages), (a.messages = l);
                  } else a.messages = this.messages();
                  var s = {};
                  (a.keys || Object.keys(this.rules)).forEach(function (e) {
                    var r = n.rules[e],
                      o = i[e];
                    r.forEach(function (r) {
                      var a = r;
                      "function" == typeof a.transform &&
                        (i === t && (i = ev({}, i)),
                        null != (o = i[e] = a.transform(o)) &&
                          (a.type =
                            a.type || (Array.isArray(o) ? "array" : k(o)))),
                        ((a =
                          "function" == typeof a
                            ? { validator: a }
                            : ev({}, a)).validator = n.getValidationMethod(a)),
                        a.validator &&
                          ((a.field = e),
                          (a.fullField = a.fullField || e),
                          (a.type = n.getType(a)),
                          (s[e] = s[e] || []),
                          s[e].push({
                            rule: a,
                            value: o,
                            source: i,
                            field: e,
                          }));
                    });
                  });
                  var u = {};
                  return (function (e, t, n, r, o) {
                    if (t.first) {
                      var i = new Promise(function (t, i) {
                        var a;
                        cq(
                          ((a = []),
                          Object.keys(e).forEach(function (t) {
                            a.push.apply(a, ty(e[t] || []));
                          }),
                          a),
                          n,
                          function (e) {
                            return r(e), e.length ? i(new cU(e, cB(e))) : t(o);
                          }
                        );
                      });
                      return (
                        i.catch(function (e) {
                          return e;
                        }),
                        i
                      );
                    }
                    var a =
                        !0 === t.firstFields
                          ? Object.keys(e)
                          : t.firstFields || [],
                      c = Object.keys(e),
                      l = c.length,
                      s = 0,
                      u = [],
                      d = new Promise(function (t, i) {
                        var d = function (e) {
                          if ((u.push.apply(u, e), ++s === l))
                            return r(u), u.length ? i(new cU(u, cB(u))) : t(o);
                        };
                        c.length || (r(u), t(o)),
                          c.forEach(function (t) {
                            var r = e[t];
                            -1 !== a.indexOf(t)
                              ? cq(r, n, d)
                              : (function (e, t, n) {
                                  var r = [],
                                    o = 0,
                                    i = e.length;
                                  function a(e) {
                                    r.push.apply(r, ty(e || [])),
                                      ++o === i && n(r);
                                  }
                                  e.forEach(function (e) {
                                    t(e, a);
                                  });
                                })(r, n, d);
                          });
                      });
                    return (
                      d.catch(function (e) {
                        return e;
                      }),
                      d
                    );
                  })(
                    s,
                    a,
                    function (t, n) {
                      var r,
                        o,
                        c,
                        l = t.rule,
                        s =
                          ("object" === l.type || "array" === l.type) &&
                          ("object" === k(l.fields) ||
                            "object" === k(l.defaultField));
                      function d(e, t) {
                        return ev(
                          ev({}, t),
                          {},
                          {
                            fullField: "".concat(l.fullField, ".").concat(e),
                            fullFields: l.fullFields
                              ? [].concat(ty(l.fullFields), [e])
                              : [e],
                          }
                        );
                      }
                      function f() {
                        var r =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          o = Array.isArray(r) ? r : [r];
                        !a.suppressWarning &&
                          o.length &&
                          e.warning("async-validator:", o),
                          o.length &&
                            void 0 !== l.message &&
                            (o = [].concat(l.message));
                        var c = o.map(cX(l, i));
                        if (a.first && c.length) return (u[l.field] = 1), n(c);
                        if (s) {
                          if (l.required && !t.value)
                            return (
                              void 0 !== l.message
                                ? (c = [].concat(l.message).map(cX(l, i)))
                                : a.error &&
                                  (c = [
                                    a.error(
                                      l,
                                      cV(a.messages.required, l.field)
                                    ),
                                  ]),
                              n(c)
                            );
                          var f = {};
                          l.defaultField &&
                            Object.keys(t.value).map(function (e) {
                              f[e] = l.defaultField;
                            });
                          var p = {};
                          Object.keys(
                            (f = ev(ev({}, f), t.rule.fields))
                          ).forEach(function (e) {
                            var t = f[e],
                              n = Array.isArray(t) ? t : [t];
                            p[e] = n.map(d.bind(null, e));
                          });
                          var h = new e(p);
                          h.messages(a.messages),
                            t.rule.options &&
                              ((t.rule.options.messages = a.messages),
                              (t.rule.options.error = a.error)),
                            h.validate(
                              t.value,
                              t.rule.options || a,
                              function (e) {
                                var t = [];
                                c && c.length && t.push.apply(t, ty(c)),
                                  e && e.length && t.push.apply(t, ty(e)),
                                  n(t.length ? t : null);
                              }
                            );
                        } else n(c);
                      }
                      if (
                        ((s = s && (l.required || (!l.required && t.value))),
                        (l.field = t.field),
                        l.asyncValidator)
                      )
                        r = l.asyncValidator(l, t.value, f, t.source, a);
                      else if (l.validator) {
                        try {
                          r = l.validator(l, t.value, f, t.source, a);
                        } catch (e) {
                          null === (o = (c = console).error) ||
                            void 0 === o ||
                            o.call(c, e),
                            a.suppressValidatorError ||
                              setTimeout(function () {
                                throw e;
                              }, 0),
                            f(e.message);
                        }
                        !0 === r
                          ? f()
                          : !1 === r
                          ? f(
                              "function" == typeof l.message
                                ? l.message(l.fullField || l.field)
                                : l.message ||
                                    "".concat(l.fullField || l.field, " fails")
                            )
                          : r instanceof Array
                          ? f(r)
                          : r instanceof Error && f(r.message);
                      }
                      r &&
                        r.then &&
                        r.then(
                          function () {
                            return f();
                          },
                          function (e) {
                            return f(e);
                          }
                        );
                    },
                    function (e) {
                      !(function (e) {
                        for (var t = [], n = {}, r = 0; r < e.length; r++)
                          !(function (e) {
                            if (Array.isArray(e)) {
                              var n;
                              t = (n = t).concat.apply(n, ty(e));
                            } else t.push(e);
                          })(e[r]);
                        t.length ? ((n = cB(t)), c(t, n)) : c(null, i);
                      })(e);
                    },
                    i
                  );
                },
              },
              {
                key: "getType",
                value: function (e) {
                  if (
                    (void 0 === e.type &&
                      e.pattern instanceof RegExp &&
                      (e.type = "pattern"),
                    "function" != typeof e.validator &&
                      e.type &&
                      !c1.hasOwnProperty(e.type))
                  )
                    throw Error(cV("Unknown rule type %s", e.type));
                  return e.type || "string";
                },
              },
              {
                key: "getValidationMethod",
                value: function (e) {
                  if ("function" == typeof e.validator) return e.validator;
                  var t = Object.keys(e),
                    n = t.indexOf("message");
                  return (-1 !== n && t.splice(n, 1),
                  1 === t.length && "required" === t[0])
                    ? c1.required
                    : c1[this.getType(e)] || void 0;
                },
              },
            ]),
            e
          );
        })();
      O(c2, "register", function (e, t) {
        if ("function" != typeof t)
          throw Error(
            "Cannot register a validator by type, validator is not a function"
          );
        c1[e] = t;
      }),
        O(c2, "warning", function () {}),
        O(c2, "messages", cH),
        O(c2, "validators", c1);
      var c5 = "'${name}' is not a valid ${type}",
        c6 = {
          default: "Validation error on field '${name}'",
          required: "'${name}' is required",
          enum: "'${name}' must be one of [${enum}]",
          whitespace: "'${name}' cannot be empty",
          date: {
            format: "'${name}' is invalid for format date",
            parse: "'${name}' could not be parsed as date",
            invalid: "'${name}' is invalid date",
          },
          types: {
            string: c5,
            method: c5,
            array: c5,
            object: c5,
            number: c5,
            date: c5,
            boolean: c5,
            integer: c5,
            float: c5,
            regexp: c5,
            email: c5,
            url: c5,
            hex: c5,
          },
          string: {
            len: "'${name}' must be exactly ${len} characters",
            min: "'${name}' must be at least ${min} characters",
            max: "'${name}' cannot be longer than ${max} characters",
            range: "'${name}' must be between ${min} and ${max} characters",
          },
          number: {
            len: "'${name}' must equal ${len}",
            min: "'${name}' cannot be less than ${min}",
            max: "'${name}' cannot be greater than ${max}",
            range: "'${name}' must be between ${min} and ${max}",
          },
          array: {
            len: "'${name}' must be exactly ${len} in length",
            min: "'${name}' cannot be less than ${min} in length",
            max: "'${name}' cannot be greater than ${max} in length",
            range: "'${name}' must be between ${min} and ${max} in length",
          },
          pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
        },
        c3 = "CODE_LOGIC_ERROR";
      function c4(e, t, n, r, o) {
        return c9.apply(this, arguments);
      }
      function c9() {
        return (c9 = cP(
          cR().mark(function e(t, n, r, o, i) {
            var a, c, l, s, u, d, f, p, h;
            return cR().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = ev({}, r)),
                        delete a.ruleIndex,
                        (c2.warning = function () {}),
                        a.validator &&
                          ((c = a.validator),
                          (a.validator = function () {
                            try {
                              return c.apply(void 0, arguments);
                            } catch (e) {
                              return console.error(e), Promise.reject(c3);
                            }
                          })),
                        (l = null),
                        a &&
                          "array" === a.type &&
                          a.defaultField &&
                          ((l = a.defaultField), delete a.defaultField),
                        (s = new c2(O({}, t, [a]))),
                        (u = oJ(c6, o.validateMessages)),
                        s.messages(u),
                        (d = []),
                        (e.prev = 10),
                        (e.next = 13),
                        Promise.resolve(s.validate(O({}, t, n), ev({}, o)))
                      );
                    case 13:
                      e.next = 18;
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t0 = e.catch(10)),
                        e.t0.errors &&
                          (d = e.t0.errors.map(function (e, t) {
                            var n = e.message,
                              r = n === c3 ? u.default : n;
                            return g.isValidElement(r)
                              ? g.cloneElement(r, { key: "error_".concat(t) })
                              : r;
                          }));
                    case 18:
                      if (!(!d.length && l)) {
                        e.next = 23;
                        break;
                      }
                      return (
                        (e.next = 21),
                        Promise.all(
                          n.map(function (e, n) {
                            return c4("".concat(t, ".").concat(n), e, l, o, i);
                          })
                        )
                      );
                    case 21:
                      return (
                        (f = e.sent),
                        e.abrupt(
                          "return",
                          f.reduce(function (e, t) {
                            return [].concat(ty(e), ty(t));
                          }, [])
                        )
                      );
                    case 23:
                      return (
                        (p = ev(
                          ev({}, r),
                          {},
                          { name: t, enum: (r.enum || []).join(", ") },
                          i
                        )),
                        (h = d.map(function (e) {
                          return "string" == typeof e
                            ? (function (e, t) {
                                return e.replace(/\\?\$\{\w+\}/g, function (e) {
                                  return e.startsWith("\\")
                                    ? e.slice(1)
                                    : t[e.slice(2, -1)];
                                });
                              })(e, p)
                            : e;
                        })),
                        e.abrupt("return", h)
                      );
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[10, 15]]
            );
          })
        )).apply(this, arguments);
      }
      function c8() {
        return (c8 = cP(
          cR().mark(function e(t) {
            return cR().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Promise.all(t).then(function (e) {
                        var t;
                        return (t = []).concat.apply(t, ty(e));
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function c7() {
        return (c7 = cP(
          cR().mark(function e(t) {
            var n;
            return cR().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = 0),
                      e.abrupt(
                        "return",
                        new Promise(function (e) {
                          t.forEach(function (r) {
                            r.then(function (r) {
                              r.errors.length && e([r]),
                                (n += 1) === t.length && e([]);
                            });
                          });
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function le(e) {
        return cN(e);
      }
      function lt(e, t) {
        var n = {};
        return (
          t.forEach(function (t) {
            var r = oG(e, t);
            n = oY(n, t, r);
          }),
          n
        );
      }
      function ln(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          e &&
          e.some(function (e) {
            return lr(t, e, n);
          })
        );
      }
      function lr(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          !!e &&
          !!t &&
          (!!n || e.length === t.length) &&
          t.every(function (t, n) {
            return e[n] === t;
          })
        );
      }
      function lo(e) {
        var t = arguments.length <= 1 ? void 0 : arguments[1];
        return t && t.target && "object" === k(t.target) && e in t.target
          ? t.target[e]
          : t;
      }
      function li(e, t, n) {
        var r = e.length;
        if (t < 0 || t >= r || n < 0 || n >= r) return e;
        var o = e[t],
          i = t - n;
        return i > 0
          ? [].concat(
              ty(e.slice(0, n)),
              [o],
              ty(e.slice(n, t)),
              ty(e.slice(t + 1, r))
            )
          : i < 0
          ? [].concat(
              ty(e.slice(0, t)),
              ty(e.slice(t + 1, n + 1)),
              [o],
              ty(e.slice(n + 1, r))
            )
          : e;
      }
      var la = ["name"],
        lc = [];
      function ll(e, t, n, r, o, i) {
        return "function" == typeof e
          ? e(t, n, "source" in i ? { source: i.source } : {})
          : r !== o;
      }
      var ls = (function (e) {
        r8(n, e);
        var t = on(n);
        function n(e) {
          var r;
          return (
            tS(this, n),
            O(ot((r = t.call(this, e))), "state", { resetCount: 0 }),
            O(ot(r), "cancelRegisterFunc", null),
            O(ot(r), "mounted", !1),
            O(ot(r), "touched", !1),
            O(ot(r), "dirty", !1),
            O(ot(r), "validatePromise", void 0),
            O(ot(r), "prevValidating", void 0),
            O(ot(r), "errors", lc),
            O(ot(r), "warnings", lc),
            O(ot(r), "cancelRegister", function () {
              var e = r.props,
                t = e.preserve,
                n = e.isListField,
                o = e.name;
              r.cancelRegisterFunc && r.cancelRegisterFunc(n, t, le(o)),
                (r.cancelRegisterFunc = null);
            }),
            O(ot(r), "getNamePath", function () {
              var e = r.props,
                t = e.name,
                n = e.fieldContext.prefixName;
              return void 0 !== t
                ? [].concat(ty(void 0 === n ? [] : n), ty(t))
                : [];
            }),
            O(ot(r), "getRules", function () {
              var e = r.props,
                t = e.rules,
                n = e.fieldContext;
              return (void 0 === t ? [] : t).map(function (e) {
                return "function" == typeof e ? e(n) : e;
              });
            }),
            O(ot(r), "refresh", function () {
              r.mounted &&
                r.setState(function (e) {
                  return { resetCount: e.resetCount + 1 };
                });
            }),
            O(ot(r), "metaCache", null),
            O(ot(r), "triggerMetaEvent", function (e) {
              var t = r.props.onMetaChange;
              if (t) {
                var n = ev(ev({}, r.getMeta()), {}, { destroy: e });
                tE(r.metaCache, n) || t(n), (r.metaCache = n);
              } else r.metaCache = null;
            }),
            O(ot(r), "onStoreChange", function (e, t, n) {
              var o = r.props,
                i = o.shouldUpdate,
                a = o.dependencies,
                c = void 0 === a ? [] : a,
                l = o.onReset,
                s = n.store,
                u = r.getNamePath(),
                d = r.getValue(e),
                f = r.getValue(s),
                p = t && ln(t, u);
              switch (
                ("valueUpdate" !== n.type ||
                  "external" !== n.source ||
                  tE(d, f) ||
                  ((r.touched = !0),
                  (r.dirty = !0),
                  (r.validatePromise = null),
                  (r.errors = lc),
                  (r.warnings = lc),
                  r.triggerMetaEvent()),
                n.type)
              ) {
                case "reset":
                  if (!t || p) {
                    (r.touched = !1),
                      (r.dirty = !1),
                      (r.validatePromise = void 0),
                      (r.errors = lc),
                      (r.warnings = lc),
                      r.triggerMetaEvent(),
                      null == l || l(),
                      r.refresh();
                    return;
                  }
                  break;
                case "remove":
                  if (i && ll(i, e, s, d, f, n)) {
                    r.reRender();
                    return;
                  }
                  break;
                case "setField":
                  var h = n.data;
                  if (p) {
                    "touched" in h && (r.touched = h.touched),
                      "validating" in h &&
                        !("originRCField" in h) &&
                        (r.validatePromise = h.validating
                          ? Promise.resolve([])
                          : null),
                      "errors" in h && (r.errors = h.errors || lc),
                      "warnings" in h && (r.warnings = h.warnings || lc),
                      (r.dirty = !0),
                      r.triggerMetaEvent(),
                      r.reRender();
                    return;
                  }
                  if (
                    ("value" in h && ln(t, u, !0)) ||
                    (i && !u.length && ll(i, e, s, d, f, n))
                  ) {
                    r.reRender();
                    return;
                  }
                  break;
                case "dependenciesUpdate":
                  if (
                    c.map(le).some(function (e) {
                      return ln(n.relatedFields, e);
                    })
                  ) {
                    r.reRender();
                    return;
                  }
                  break;
                default:
                  if (
                    p ||
                    ((!c.length || u.length || i) && ll(i, e, s, d, f, n))
                  ) {
                    r.reRender();
                    return;
                  }
              }
              !0 === i && r.reRender();
            }),
            O(ot(r), "validateRules", function (e) {
              var t = r.getNamePath(),
                n = r.getValue(),
                o = e || {},
                i = o.triggerName,
                a = o.validateOnly,
                c = Promise.resolve().then(
                  cP(
                    cR().mark(function o() {
                      var a, l, s, u, d, f, p;
                      return cR().wrap(function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if (r.mounted) {
                                o.next = 2;
                                break;
                              }
                              return o.abrupt("return", []);
                            case 2:
                              if (
                                ((s =
                                  void 0 !==
                                    (l = (a = r.props).validateFirst) && l),
                                (u = a.messageVariables),
                                (d = a.validateDebounce),
                                (f = r.getRules()),
                                i &&
                                  (f = f
                                    .filter(function (e) {
                                      return e;
                                    })
                                    .filter(function (e) {
                                      var t = e.validateTrigger;
                                      return !t || cN(t).includes(i);
                                    })),
                                !(d && i))
                              ) {
                                o.next = 10;
                                break;
                              }
                              return (
                                (o.next = 8),
                                new Promise(function (e) {
                                  setTimeout(e, d);
                                })
                              );
                            case 8:
                              if (!(r.validatePromise !== c)) {
                                o.next = 10;
                                break;
                              }
                              return o.abrupt("return", []);
                            case 10:
                              return (
                                (p = (function (e, t, n, r, o, i) {
                                  var a,
                                    c,
                                    l = e.join("."),
                                    s = n
                                      .map(function (e, t) {
                                        var n = e.validator,
                                          r = ev(
                                            ev({}, e),
                                            {},
                                            { ruleIndex: t }
                                          );
                                        return (
                                          n &&
                                            (r.validator = function (e, t, r) {
                                              var o = !1,
                                                i = n(e, t, function () {
                                                  for (
                                                    var e = arguments.length,
                                                      t = Array(e),
                                                      n = 0;
                                                    n < e;
                                                    n++
                                                  )
                                                    t[n] = arguments[n];
                                                  Promise.resolve().then(
                                                    function () {
                                                      e_(
                                                        !o,
                                                        "Your validator function has already return a promise. `callback` will be ignored."
                                                      ),
                                                        o || r.apply(void 0, t);
                                                    }
                                                  );
                                                });
                                              e_(
                                                (o =
                                                  i &&
                                                  "function" == typeof i.then &&
                                                  "function" == typeof i.catch),
                                                "`callback` is deprecated. Please return a promise instead."
                                              ),
                                                o &&
                                                  i
                                                    .then(function () {
                                                      r();
                                                    })
                                                    .catch(function (e) {
                                                      r(e || " ");
                                                    });
                                            }),
                                          r
                                        );
                                      })
                                      .sort(function (e, t) {
                                        var n = e.warningOnly,
                                          r = e.ruleIndex,
                                          o = t.warningOnly,
                                          i = t.ruleIndex;
                                        return !!n == !!o ? r - i : n ? 1 : -1;
                                      });
                                  if (!0 === o)
                                    c = new Promise(
                                      ((a = cP(
                                        cR().mark(function e(n, o) {
                                          var a, c, u;
                                          return cR().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  a = 0;
                                                case 1:
                                                  if (!(a < s.length)) {
                                                    e.next = 12;
                                                    break;
                                                  }
                                                  return (
                                                    (c = s[a]),
                                                    (e.next = 5),
                                                    c4(l, t, c, r, i)
                                                  );
                                                case 5:
                                                  if (!(u = e.sent).length) {
                                                    e.next = 9;
                                                    break;
                                                  }
                                                  return (
                                                    o([{ errors: u, rule: c }]),
                                                    e.abrupt("return")
                                                  );
                                                case 9:
                                                  (a += 1), (e.next = 1);
                                                  break;
                                                case 12:
                                                  n([]);
                                                case 13:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      )),
                                      function (e, t) {
                                        return a.apply(this, arguments);
                                      })
                                    );
                                  else {
                                    var u = s.map(function (e) {
                                      return c4(l, t, e, r, i).then(function (
                                        t
                                      ) {
                                        return { errors: t, rule: e };
                                      });
                                    });
                                    c = (
                                      o
                                        ? (function (e) {
                                            return c7.apply(this, arguments);
                                          })(u)
                                        : (function (e) {
                                            return c8.apply(this, arguments);
                                          })(u)
                                    ).then(function (e) {
                                      return Promise.reject(e);
                                    });
                                  }
                                  return (
                                    c.catch(function (e) {
                                      return e;
                                    }),
                                    c
                                  );
                                })(t, n, f, e, s, u))
                                  .catch(function (e) {
                                    return e;
                                  })
                                  .then(function () {
                                    var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : lc;
                                    if (r.validatePromise === c) {
                                      r.validatePromise = null;
                                      var t,
                                        n = [],
                                        o = [];
                                      null === (t = e.forEach) ||
                                        void 0 === t ||
                                        t.call(e, function (e) {
                                          var t = e.rule.warningOnly,
                                            r = e.errors,
                                            i = void 0 === r ? lc : r;
                                          t
                                            ? o.push.apply(o, ty(i))
                                            : n.push.apply(n, ty(i));
                                        }),
                                        (r.errors = n),
                                        (r.warnings = o),
                                        r.triggerMetaEvent(),
                                        r.reRender();
                                    }
                                  }),
                                o.abrupt("return", p)
                              );
                            case 13:
                            case "end":
                              return o.stop();
                          }
                      }, o);
                    })
                  )
                );
              return (
                (void 0 !== a && a) ||
                  ((r.validatePromise = c),
                  (r.dirty = !0),
                  (r.errors = lc),
                  (r.warnings = lc),
                  r.triggerMetaEvent(),
                  r.reRender()),
                c
              );
            }),
            O(ot(r), "isFieldValidating", function () {
              return !!r.validatePromise;
            }),
            O(ot(r), "isFieldTouched", function () {
              return r.touched;
            }),
            O(ot(r), "isFieldDirty", function () {
              return (
                !!r.dirty ||
                void 0 !== r.props.initialValue ||
                void 0 !==
                  (0,
                  r.props.fieldContext.getInternalHooks(cF).getInitialValue)(
                    r.getNamePath()
                  )
              );
            }),
            O(ot(r), "getErrors", function () {
              return r.errors;
            }),
            O(ot(r), "getWarnings", function () {
              return r.warnings;
            }),
            O(ot(r), "isListField", function () {
              return r.props.isListField;
            }),
            O(ot(r), "isList", function () {
              return r.props.isList;
            }),
            O(ot(r), "isPreserve", function () {
              return r.props.preserve;
            }),
            O(ot(r), "getMeta", function () {
              return (
                (r.prevValidating = r.isFieldValidating()),
                {
                  touched: r.isFieldTouched(),
                  validating: r.prevValidating,
                  errors: r.errors,
                  warnings: r.warnings,
                  name: r.getNamePath(),
                  validated: null === r.validatePromise,
                }
              );
            }),
            O(ot(r), "getOnlyChild", function (e) {
              if ("function" == typeof e) {
                var t = r.getMeta();
                return ev(
                  ev(
                    {},
                    r.getOnlyChild(
                      e(r.getControlled(), t, r.props.fieldContext)
                    )
                  ),
                  {},
                  { isFunction: !0 }
                );
              }
              var n = rT(e);
              return 1 === n.length && g.isValidElement(n[0])
                ? { child: n[0], isFunction: !1 }
                : { child: n, isFunction: !1 };
            }),
            O(ot(r), "getValue", function (e) {
              var t = r.props.fieldContext.getFieldsValue,
                n = r.getNamePath();
              return oG(e || t(!0), n);
            }),
            O(ot(r), "getControlled", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = r.props,
                n = t.name,
                o = t.trigger,
                i = t.validateTrigger,
                a = t.getValueFromEvent,
                c = t.normalize,
                l = t.valuePropName,
                s = t.getValueProps,
                u = t.fieldContext,
                d = void 0 !== i ? i : u.validateTrigger,
                f = r.getNamePath(),
                p = u.getInternalHooks,
                h = u.getFieldsValue,
                m = p(cF).dispatch,
                g = r.getValue(),
                v =
                  s ||
                  function (e) {
                    return O({}, l, e);
                  },
                b = e[o],
                y = void 0 !== n ? v(g) : {},
                x = ev(ev({}, e), y);
              return (
                (x[o] = function () {
                  (r.touched = !0), (r.dirty = !0), r.triggerMetaEvent();
                  for (
                    var e, t = arguments.length, n = Array(t), o = 0;
                    o < t;
                    o++
                  )
                    n[o] = arguments[o];
                  (e = a
                    ? a.apply(void 0, n)
                    : lo.apply(void 0, [l].concat(n))),
                    c && (e = c(e, g, h(!0))),
                    e !== g &&
                      m({ type: "updateValue", namePath: f, value: e }),
                    b && b.apply(void 0, n);
                }),
                cN(d || []).forEach(function (e) {
                  var t = x[e];
                  x[e] = function () {
                    t && t.apply(void 0, arguments);
                    var n = r.props.rules;
                    n &&
                      n.length &&
                      m({ type: "validateField", namePath: f, triggerName: e });
                  };
                }),
                x
              );
            }),
            e.fieldContext &&
              (0, (0, e.fieldContext.getInternalHooks)(cF).initEntityValue)(
                ot(r)
              ),
            r
          );
        }
        return (
          tk(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props,
                  t = e.shouldUpdate,
                  n = e.fieldContext;
                if (((this.mounted = !0), n)) {
                  var r = (0, n.getInternalHooks)(cF).registerField;
                  this.cancelRegisterFunc = r(this);
                }
                !0 === t && this.reRender();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.cancelRegister(),
                  this.triggerMetaEvent(!0),
                  (this.mounted = !1);
              },
            },
            {
              key: "reRender",
              value: function () {
                this.mounted && this.forceUpdate();
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.state.resetCount,
                  n = this.props.children,
                  r = this.getOnlyChild(n),
                  o = r.child;
                return (
                  r.isFunction
                    ? (e = o)
                    : g.isValidElement(o)
                    ? (e = g.cloneElement(o, this.getControlled(o.props)))
                    : (e_(
                        !o,
                        "`children` of Field is not validate ReactElement."
                      ),
                      (e = o)),
                  g.createElement(g.Fragment, { key: t }, e)
                );
              },
            },
          ]),
          n
        );
      })(g.Component);
      O(ls, "contextType", cA),
        O(ls, "defaultProps", { trigger: "onChange", valuePropName: "value" });
      var lu = function (e) {
          var t,
            n = e.name,
            r = R(e, la),
            o = g.useContext(cA),
            i = g.useContext(cT),
            a = void 0 !== n ? le(n) : void 0,
            c = null !== (t = r.isListField) && void 0 !== t ? t : !!i,
            l = "keep";
          return (
            c || (l = "_".concat((a || []).join("_"))),
            g.createElement(
              ls,
              b({ key: l, name: a, isListField: c }, r, { fieldContext: o })
            )
          );
        },
        ld = "__@field_split__";
      function lf(e) {
        return e
          .map(function (e) {
            return "".concat(k(e), ":").concat(e);
          })
          .join(ld);
      }
      var lp = (function () {
          function e() {
            tS(this, e), O(this, "kvs", new Map());
          }
          return (
            tk(e, [
              {
                key: "set",
                value: function (e, t) {
                  this.kvs.set(lf(e), t);
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this.kvs.get(lf(e));
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  var n = t(this.get(e));
                  n ? this.set(e, n) : this.delete(e);
                },
              },
              {
                key: "delete",
                value: function (e) {
                  this.kvs.delete(lf(e));
                },
              },
              {
                key: "map",
                value: function (e) {
                  return ty(this.kvs.entries()).map(function (t) {
                    var n = C(t, 2),
                      r = n[0],
                      o = n[1];
                    return e({
                      key: r.split(ld).map(function (e) {
                        var t = C(e.match(/^([^:]*):(.*)$/), 3),
                          n = t[1],
                          r = t[2];
                        return "number" === n ? Number(r) : r;
                      }),
                      value: o,
                    });
                  });
                },
              },
              {
                key: "toJSON",
                value: function () {
                  var e = {};
                  return (
                    this.map(function (t) {
                      var n = t.key,
                        r = t.value;
                      return (e[n.join(".")] = r), null;
                    }),
                    e
                  );
                },
              },
            ]),
            e
          );
        })(),
        lh = ["name"],
        lm = tk(function e(t) {
          var n = this;
          tS(this, e),
            O(this, "formHooked", !1),
            O(this, "forceRootUpdate", void 0),
            O(this, "subscribable", !0),
            O(this, "store", {}),
            O(this, "fieldEntities", []),
            O(this, "initialValues", {}),
            O(this, "callbacks", {}),
            O(this, "validateMessages", null),
            O(this, "preserve", null),
            O(this, "lastValidatePromise", null),
            O(this, "getForm", function () {
              return {
                getFieldValue: n.getFieldValue,
                getFieldsValue: n.getFieldsValue,
                getFieldError: n.getFieldError,
                getFieldWarning: n.getFieldWarning,
                getFieldsError: n.getFieldsError,
                isFieldsTouched: n.isFieldsTouched,
                isFieldTouched: n.isFieldTouched,
                isFieldValidating: n.isFieldValidating,
                isFieldsValidating: n.isFieldsValidating,
                resetFields: n.resetFields,
                setFields: n.setFields,
                setFieldValue: n.setFieldValue,
                setFieldsValue: n.setFieldsValue,
                validateFields: n.validateFields,
                submit: n.submit,
                _init: !0,
                getInternalHooks: n.getInternalHooks,
              };
            }),
            O(this, "getInternalHooks", function (e) {
              return e === cF
                ? ((n.formHooked = !0),
                  {
                    dispatch: n.dispatch,
                    initEntityValue: n.initEntityValue,
                    registerField: n.registerField,
                    useSubscribe: n.useSubscribe,
                    setInitialValues: n.setInitialValues,
                    destroyForm: n.destroyForm,
                    setCallbacks: n.setCallbacks,
                    setValidateMessages: n.setValidateMessages,
                    getFields: n.getFields,
                    setPreserve: n.setPreserve,
                    getInitialValue: n.getInitialValue,
                    registerWatch: n.registerWatch,
                  })
                : (e_(
                    !1,
                    "`getInternalHooks` is internal usage. Should not call directly."
                  ),
                  null);
            }),
            O(this, "useSubscribe", function (e) {
              n.subscribable = e;
            }),
            O(this, "prevWithoutPreserves", null),
            O(this, "setInitialValues", function (e, t) {
              if (((n.initialValues = e || {}), t)) {
                var r,
                  o = oJ(e, n.store);
                null === (r = n.prevWithoutPreserves) ||
                  void 0 === r ||
                  r.map(function (t) {
                    var n = t.key;
                    o = oY(o, n, oG(e, n));
                  }),
                  (n.prevWithoutPreserves = null),
                  n.updateStore(o);
              }
            }),
            O(this, "destroyForm", function (e) {
              if (e) n.updateStore({});
              else {
                var t = new lp();
                n.getFieldEntities(!0).forEach(function (e) {
                  n.isMergedPreserve(e.isPreserve()) ||
                    t.set(e.getNamePath(), !0);
                }),
                  (n.prevWithoutPreserves = t);
              }
            }),
            O(this, "getInitialValue", function (e) {
              var t = oG(n.initialValues, e);
              return e.length ? oJ(t) : t;
            }),
            O(this, "setCallbacks", function (e) {
              n.callbacks = e;
            }),
            O(this, "setValidateMessages", function (e) {
              n.validateMessages = e;
            }),
            O(this, "setPreserve", function (e) {
              n.preserve = e;
            }),
            O(this, "watchList", []),
            O(this, "registerWatch", function (e) {
              return (
                n.watchList.push(e),
                function () {
                  n.watchList = n.watchList.filter(function (t) {
                    return t !== e;
                  });
                }
              );
            }),
            O(this, "notifyWatch", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              if (n.watchList.length) {
                var t = n.getFieldsValue(),
                  r = n.getFieldsValue(!0);
                n.watchList.forEach(function (n) {
                  n(t, r, e);
                });
              }
            }),
            O(this, "timeoutId", null),
            O(this, "warningUnhooked", function () {}),
            O(this, "updateStore", function (e) {
              n.store = e;
            }),
            O(this, "getFieldEntities", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e
                ? n.fieldEntities.filter(function (e) {
                    return e.getNamePath().length;
                  })
                : n.fieldEntities;
            }),
            O(this, "getFieldsMap", function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = new lp();
              return (
                n.getFieldEntities(e).forEach(function (e) {
                  var n = e.getNamePath();
                  t.set(n, e);
                }),
                t
              );
            }),
            O(this, "getFieldEntitiesForNamePathList", function (e) {
              if (!e) return n.getFieldEntities(!0);
              var t = n.getFieldsMap(!0);
              return e.map(function (e) {
                var n = le(e);
                return t.get(n) || { INVALIDATE_NAME_PATH: le(e) };
              });
            }),
            O(this, "getFieldsValue", function (e, t) {
              if (
                (n.warningUnhooked(),
                !0 === e || Array.isArray(e)
                  ? ((r = e), (o = t))
                  : e && "object" === k(e) && ((i = e.strict), (o = e.filter)),
                !0 === r && !o)
              )
                return n.store;
              var r,
                o,
                i,
                a = n.getFieldEntitiesForNamePathList(
                  Array.isArray(r) ? r : null
                ),
                c = [];
              return (
                a.forEach(function (e) {
                  var t,
                    n,
                    a,
                    l =
                      "INVALIDATE_NAME_PATH" in e
                        ? e.INVALIDATE_NAME_PATH
                        : e.getNamePath();
                  if (i) {
                    if (null !== (a = e.isList) && void 0 !== a && a.call(e))
                      return;
                  } else if (!r && null !== (t = (n = e).isListField) && void 0 !== t && t.call(n)) return;
                  if (o) {
                    var s = "getMeta" in e ? e.getMeta() : null;
                    o(s) && c.push(l);
                  } else c.push(l);
                }),
                lt(n.store, c.map(le))
              );
            }),
            O(this, "getFieldValue", function (e) {
              n.warningUnhooked();
              var t = le(e);
              return oG(n.store, t);
            }),
            O(this, "getFieldsError", function (e) {
              return (
                n.warningUnhooked(),
                n.getFieldEntitiesForNamePathList(e).map(function (t, n) {
                  return !t || "INVALIDATE_NAME_PATH" in t
                    ? { name: le(e[n]), errors: [], warnings: [] }
                    : {
                        name: t.getNamePath(),
                        errors: t.getErrors(),
                        warnings: t.getWarnings(),
                      };
                })
              );
            }),
            O(this, "getFieldError", function (e) {
              n.warningUnhooked();
              var t = le(e);
              return n.getFieldsError([t])[0].errors;
            }),
            O(this, "getFieldWarning", function (e) {
              n.warningUnhooked();
              var t = le(e);
              return n.getFieldsError([t])[0].warnings;
            }),
            O(this, "isFieldsTouched", function () {
              n.warningUnhooked();
              for (var e, t = arguments.length, r = Array(t), o = 0; o < t; o++)
                r[o] = arguments[o];
              var i = r[0],
                a = r[1],
                c = !1;
              0 === r.length
                ? (e = null)
                : 1 === r.length
                ? Array.isArray(i)
                  ? ((e = i.map(le)), (c = !1))
                  : ((e = null), (c = i))
                : ((e = i.map(le)), (c = a));
              var l = n.getFieldEntities(!0),
                s = function (e) {
                  return e.isFieldTouched();
                };
              if (!e)
                return c
                  ? l.every(function (e) {
                      return s(e) || e.isList();
                    })
                  : l.some(s);
              var u = new lp();
              e.forEach(function (e) {
                u.set(e, []);
              }),
                l.forEach(function (t) {
                  var n = t.getNamePath();
                  e.forEach(function (e) {
                    e.every(function (e, t) {
                      return n[t] === e;
                    }) &&
                      u.update(e, function (e) {
                        return [].concat(ty(e), [t]);
                      });
                  });
                });
              var d = function (e) {
                  return e.some(s);
                },
                f = u.map(function (e) {
                  return e.value;
                });
              return c ? f.every(d) : f.some(d);
            }),
            O(this, "isFieldTouched", function (e) {
              return n.warningUnhooked(), n.isFieldsTouched([e]);
            }),
            O(this, "isFieldsValidating", function (e) {
              n.warningUnhooked();
              var t = n.getFieldEntities();
              if (!e)
                return t.some(function (e) {
                  return e.isFieldValidating();
                });
              var r = e.map(le);
              return t.some(function (e) {
                return ln(r, e.getNamePath()) && e.isFieldValidating();
              });
            }),
            O(this, "isFieldValidating", function (e) {
              return n.warningUnhooked(), n.isFieldsValidating([e]);
            }),
            O(this, "resetWithFieldInitialValue", function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = new lp(),
                o = n.getFieldEntities(!0);
              o.forEach(function (e) {
                var t = e.props.initialValue,
                  n = e.getNamePath();
                if (void 0 !== t) {
                  var o = r.get(n) || new Set();
                  o.add({ entity: e, value: t }), r.set(n, o);
                }
              }),
                t.entities
                  ? (e = t.entities)
                  : t.namePathList
                  ? ((e = []),
                    t.namePathList.forEach(function (t) {
                      var n,
                        o = r.get(t);
                      o &&
                        (n = e).push.apply(
                          n,
                          ty(
                            ty(o).map(function (e) {
                              return e.entity;
                            })
                          )
                        );
                    }))
                  : (e = o),
                (function (e) {
                  e.forEach(function (e) {
                    if (void 0 !== e.props.initialValue) {
                      var o = e.getNamePath();
                      if (void 0 !== n.getInitialValue(o))
                        e_(
                          !1,
                          "Form already set 'initialValues' with path '".concat(
                            o.join("."),
                            "'. Field can not overwrite it."
                          )
                        );
                      else {
                        var i = r.get(o);
                        if (i && i.size > 1)
                          e_(
                            !1,
                            "Multiple Field with path '".concat(
                              o.join("."),
                              "' set 'initialValue'. Can not decide which one to pick."
                            )
                          );
                        else if (i) {
                          var a = n.getFieldValue(o);
                          e.isListField() ||
                            (t.skipExist && void 0 !== a) ||
                            n.updateStore(oY(n.store, o, ty(i)[0].value));
                        }
                      }
                    }
                  });
                })(e);
            }),
            O(this, "resetFields", function (e) {
              n.warningUnhooked();
              var t = n.store;
              if (!e) {
                n.updateStore(oJ(n.initialValues)),
                  n.resetWithFieldInitialValue(),
                  n.notifyObservers(t, null, { type: "reset" }),
                  n.notifyWatch();
                return;
              }
              var r = e.map(le);
              r.forEach(function (e) {
                var t = n.getInitialValue(e);
                n.updateStore(oY(n.store, e, t));
              }),
                n.resetWithFieldInitialValue({ namePathList: r }),
                n.notifyObservers(t, r, { type: "reset" }),
                n.notifyWatch(r);
            }),
            O(this, "setFields", function (e) {
              n.warningUnhooked();
              var t = n.store,
                r = [];
              e.forEach(function (e) {
                var o = e.name,
                  i = R(e, lh),
                  a = le(o);
                r.push(a),
                  "value" in i && n.updateStore(oY(n.store, a, i.value)),
                  n.notifyObservers(t, [a], { type: "setField", data: e });
              }),
                n.notifyWatch(r);
            }),
            O(this, "getFields", function () {
              return n.getFieldEntities(!0).map(function (e) {
                var t = e.getNamePath(),
                  r = ev(
                    ev({}, e.getMeta()),
                    {},
                    { name: t, value: n.getFieldValue(t) }
                  );
                return (
                  Object.defineProperty(r, "originRCField", { value: !0 }), r
                );
              });
            }),
            O(this, "initEntityValue", function (e) {
              var t = e.props.initialValue;
              if (void 0 !== t) {
                var r = e.getNamePath();
                void 0 === oG(n.store, r) && n.updateStore(oY(n.store, r, t));
              }
            }),
            O(this, "isMergedPreserve", function (e) {
              var t = void 0 !== e ? e : n.preserve;
              return null == t || t;
            }),
            O(this, "registerField", function (e) {
              n.fieldEntities.push(e);
              var t = e.getNamePath();
              if ((n.notifyWatch([t]), void 0 !== e.props.initialValue)) {
                var r = n.store;
                n.resetWithFieldInitialValue({ entities: [e], skipExist: !0 }),
                  n.notifyObservers(r, [e.getNamePath()], {
                    type: "valueUpdate",
                    source: "internal",
                  });
              }
              return function (r, o) {
                var i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
                if (
                  ((n.fieldEntities = n.fieldEntities.filter(function (t) {
                    return t !== e;
                  })),
                  !n.isMergedPreserve(o) && (!r || i.length > 1))
                ) {
                  var a = r ? void 0 : n.getInitialValue(t);
                  if (
                    t.length &&
                    n.getFieldValue(t) !== a &&
                    n.fieldEntities.every(function (e) {
                      return !lr(e.getNamePath(), t);
                    })
                  ) {
                    var c = n.store;
                    n.updateStore(oY(c, t, a, !0)),
                      n.notifyObservers(c, [t], { type: "remove" }),
                      n.triggerDependenciesUpdate(c, t);
                  }
                }
                n.notifyWatch([t]);
              };
            }),
            O(this, "dispatch", function (e) {
              switch (e.type) {
                case "updateValue":
                  var t = e.namePath,
                    r = e.value;
                  n.updateValue(t, r);
                  break;
                case "validateField":
                  var o = e.namePath,
                    i = e.triggerName;
                  n.validateFields([o], { triggerName: i });
              }
            }),
            O(this, "notifyObservers", function (e, t, r) {
              if (n.subscribable) {
                var o = ev(ev({}, r), {}, { store: n.getFieldsValue(!0) });
                n.getFieldEntities().forEach(function (n) {
                  (0, n.onStoreChange)(e, t, o);
                });
              } else n.forceRootUpdate();
            }),
            O(this, "triggerDependenciesUpdate", function (e, t) {
              var r = n.getDependencyChildrenFields(t);
              return (
                r.length && n.validateFields(r),
                n.notifyObservers(e, r, {
                  type: "dependenciesUpdate",
                  relatedFields: [t].concat(ty(r)),
                }),
                r
              );
            }),
            O(this, "updateValue", function (e, t) {
              var r = le(e),
                o = n.store;
              n.updateStore(oY(n.store, r, t)),
                n.notifyObservers(o, [r], {
                  type: "valueUpdate",
                  source: "internal",
                }),
                n.notifyWatch([r]);
              var i = n.triggerDependenciesUpdate(o, r),
                a = n.callbacks.onValuesChange;
              a && a(lt(n.store, [r]), n.getFieldsValue()),
                n.triggerOnFieldsChange([r].concat(ty(i)));
            }),
            O(this, "setFieldsValue", function (e) {
              n.warningUnhooked();
              var t = n.store;
              if (e) {
                var r = oJ(n.store, e);
                n.updateStore(r);
              }
              n.notifyObservers(t, null, {
                type: "valueUpdate",
                source: "external",
              }),
                n.notifyWatch();
            }),
            O(this, "setFieldValue", function (e, t) {
              n.setFields([{ name: e, value: t, errors: [], warnings: [] }]);
            }),
            O(this, "getDependencyChildrenFields", function (e) {
              var t = new Set(),
                r = [],
                o = new lp();
              return (
                n.getFieldEntities().forEach(function (e) {
                  (e.props.dependencies || []).forEach(function (t) {
                    var n = le(t);
                    o.update(n, function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : new Set();
                      return t.add(e), t;
                    });
                  });
                }),
                (function e(n) {
                  (o.get(n) || new Set()).forEach(function (n) {
                    if (!t.has(n)) {
                      t.add(n);
                      var o = n.getNamePath();
                      n.isFieldDirty() && o.length && (r.push(o), e(o));
                    }
                  });
                })(e),
                r
              );
            }),
            O(this, "triggerOnFieldsChange", function (e, t) {
              var r = n.callbacks.onFieldsChange;
              if (r) {
                var o = n.getFields();
                if (t) {
                  var i = new lp();
                  t.forEach(function (e) {
                    var t = e.name,
                      n = e.errors;
                    i.set(t, n);
                  }),
                    o.forEach(function (e) {
                      e.errors = i.get(e.name) || e.errors;
                    });
                }
                var a = o.filter(function (t) {
                  return ln(e, t.name);
                });
                a.length && r(a, o);
              }
            }),
            O(this, "validateFields", function (e, t) {
              n.warningUnhooked(),
                Array.isArray(e) || "string" == typeof e || "string" == typeof t
                  ? ((a = e), (c = t))
                  : (c = e);
              var r,
                o,
                i,
                a,
                c,
                l = !!a,
                s = l ? a.map(le) : [],
                u = [],
                d = String(Date.now()),
                f = new Set(),
                p = c || {},
                h = p.recursive,
                m = p.dirty;
              n.getFieldEntities(!0).forEach(function (e) {
                if (
                  (l || s.push(e.getNamePath()),
                  e.props.rules &&
                    e.props.rules.length &&
                    (!m || e.isFieldDirty()))
                ) {
                  var t = e.getNamePath();
                  if ((f.add(t.join(d)), !l || ln(s, t, h))) {
                    var r = e.validateRules(
                      ev(
                        {
                          validateMessages: ev(ev({}, c6), n.validateMessages),
                        },
                        c
                      )
                    );
                    u.push(
                      r
                        .then(function () {
                          return { name: t, errors: [], warnings: [] };
                        })
                        .catch(function (e) {
                          var n,
                            r = [],
                            o = [];
                          return (null === (n = e.forEach) ||
                            void 0 === n ||
                            n.call(e, function (e) {
                              var t = e.rule.warningOnly,
                                n = e.errors;
                              t
                                ? o.push.apply(o, ty(n))
                                : r.push.apply(r, ty(n));
                            }),
                          r.length)
                            ? Promise.reject({
                                name: t,
                                errors: r,
                                warnings: o,
                              })
                            : { name: t, errors: r, warnings: o };
                        })
                    );
                  }
                }
              });
              var g =
                ((r = !1),
                (o = u.length),
                (i = []),
                u.length
                  ? new Promise(function (e, t) {
                      u.forEach(function (n, a) {
                        n.catch(function (e) {
                          return (r = !0), e;
                        }).then(function (n) {
                          (o -= 1), (i[a] = n), o > 0 || (r && t(i), e(i));
                        });
                      });
                    })
                  : Promise.resolve([]));
              (n.lastValidatePromise = g),
                g
                  .catch(function (e) {
                    return e;
                  })
                  .then(function (e) {
                    var t = e.map(function (e) {
                      return e.name;
                    });
                    n.notifyObservers(n.store, t, { type: "validateFinish" }),
                      n.triggerOnFieldsChange(t, e);
                  });
              var v = g
                .then(function () {
                  return n.lastValidatePromise === g
                    ? Promise.resolve(n.getFieldsValue(s))
                    : Promise.reject([]);
                })
                .catch(function (e) {
                  var t = e.filter(function (e) {
                    return e && e.errors.length;
                  });
                  return Promise.reject({
                    values: n.getFieldsValue(s),
                    errorFields: t,
                    outOfDate: n.lastValidatePromise !== g,
                  });
                });
              v.catch(function (e) {
                return e;
              });
              var b = s.filter(function (e) {
                return f.has(e.join(d));
              });
              return n.triggerOnFieldsChange(b), v;
            }),
            O(this, "submit", function () {
              n.warningUnhooked(),
                n
                  .validateFields()
                  .then(function (e) {
                    var t = n.callbacks.onFinish;
                    if (t)
                      try {
                        t(e);
                      } catch (e) {
                        console.error(e);
                      }
                  })
                  .catch(function (e) {
                    var t = n.callbacks.onFinishFailed;
                    t && t(e);
                  });
            }),
            (this.forceRootUpdate = t);
        }),
        lg = function (e) {
          var t = g.useRef(),
            n = C(g.useState({}), 2)[1];
          if (!t.current) {
            if (e) t.current = e;
            else {
              var r = new lm(function () {
                n({});
              });
              t.current = r.getForm();
            }
          }
          return [t.current];
        },
        lv = g.createContext({
          triggerFormChange: function () {},
          triggerFormFinish: function () {},
          registerForm: function () {},
          unregisterForm: function () {},
        }),
        lb = [
          "name",
          "initialValues",
          "fields",
          "form",
          "preserve",
          "children",
          "component",
          "validateMessages",
          "validateTrigger",
          "onValuesChange",
          "onFieldsChange",
          "onFinish",
          "onFinishFailed",
          "clearOnDestroy",
        ];
      function ly(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return Math.random();
        }
      }
      var lx = function () {},
        lw = g.forwardRef(function (e, t) {
          var n,
            r = e.name,
            o = e.initialValues,
            i = e.fields,
            a = e.form,
            c = e.preserve,
            l = e.children,
            s = e.component,
            u = void 0 === s ? "form" : s,
            d = e.validateMessages,
            f = e.validateTrigger,
            p = void 0 === f ? "onChange" : f,
            h = e.onValuesChange,
            m = e.onFieldsChange,
            v = e.onFinish,
            y = e.onFinishFailed,
            x = e.clearOnDestroy,
            w = R(e, lb),
            E = g.useRef(null),
            S = g.useContext(lv),
            M = C(lg(a), 1)[0],
            O = M.getInternalHooks(cF),
            I = O.useSubscribe,
            P = O.setInitialValues,
            F = O.setCallbacks,
            j = O.setValidateMessages,
            A = O.setPreserve,
            T = O.destroyForm;
          g.useImperativeHandle(t, function () {
            return ev(ev({}, M), {}, { nativeElement: E.current });
          }),
            g.useEffect(
              function () {
                return (
                  S.registerForm(r, M),
                  function () {
                    S.unregisterForm(r);
                  }
                );
              },
              [S, M, r]
            ),
            j(ev(ev({}, S.validateMessages), d)),
            F({
              onValuesChange: h,
              onFieldsChange: function (e) {
                if ((S.triggerFormChange(r, e), m)) {
                  for (
                    var t = arguments.length,
                      n = Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    n[o - 1] = arguments[o];
                  m.apply(void 0, [e].concat(n));
                }
              },
              onFinish: function (e) {
                S.triggerFormFinish(r, e), v && v(e);
              },
              onFinishFailed: y,
            }),
            A(c);
          var N = g.useRef(null);
          P(o, !N.current),
            N.current || (N.current = !0),
            g.useEffect(function () {
              return function () {
                return T(x);
              };
            }, []);
          var _ = "function" == typeof l;
          (n = _ ? l(M.getFieldsValue(!0), M) : l), I(!_);
          var H = g.useRef();
          g.useEffect(
            function () {
              var e, t;
              (e = H.current || []) === (t = i || []) ||
                ((e || !t) &&
                  (!e || t) &&
                  e &&
                  t &&
                  "object" === k(e) &&
                  "object" === k(t) &&
                  ty(new Set([].concat(Object.keys(e), Object.keys(t)))).every(
                    function (n) {
                      var r = e[n],
                        o = t[n];
                      return (
                        ("function" == typeof r && "function" == typeof o) ||
                        r === o
                      );
                    }
                  )) ||
                M.setFields(i || []),
                (H.current = i);
            },
            [i, M]
          );
          var z = g.useMemo(
              function () {
                return ev(ev({}, M), {}, { validateTrigger: p });
              },
              [M, p]
            ),
            L = g.createElement(
              cT.Provider,
              { value: null },
              g.createElement(cA.Provider, { value: z }, n)
            );
          return !1 === u
            ? L
            : g.createElement(
                u,
                b({}, w, {
                  ref: E,
                  onSubmit: function (e) {
                    e.preventDefault(), e.stopPropagation(), M.submit();
                  },
                  onReset: function (e) {
                    var t;
                    e.preventDefault(),
                      M.resetFields(),
                      null === (t = w.onReset) || void 0 === t || t.call(w, e);
                  },
                }),
                L
              );
        });
      (lw.FormProvider = function (e) {
        var t = e.validateMessages,
          n = e.onFormChange,
          r = e.onFormFinish,
          o = e.children,
          i = g.useContext(lv),
          a = g.useRef({});
        return g.createElement(
          lv.Provider,
          {
            value: ev(
              ev({}, i),
              {},
              {
                validateMessages: ev(ev({}, i.validateMessages), t),
                triggerFormChange: function (e, t) {
                  n && n(e, { changedFields: t, forms: a.current }),
                    i.triggerFormChange(e, t);
                },
                triggerFormFinish: function (e, t) {
                  r && r(e, { values: t, forms: a.current }),
                    i.triggerFormFinish(e, t);
                },
                registerForm: function (e, t) {
                  e && (a.current = ev(ev({}, a.current), {}, O({}, e, t))),
                    i.registerForm(e, t);
                },
                unregisterForm: function (e) {
                  var t = ev({}, a.current);
                  delete t[e], (a.current = t), i.unregisterForm(e);
                },
              }
            ),
          },
          o
        );
      }),
        (lw.Field = lu),
        (lw.List = function (e) {
          var t = e.name,
            n = e.initialValue,
            r = e.children,
            o = e.rules,
            i = e.validateTrigger,
            a = e.isListField,
            c = g.useContext(cA),
            l = g.useContext(cT),
            s = g.useRef({ keys: [], id: 0 }).current,
            u = g.useMemo(
              function () {
                return [].concat(ty(le(c.prefixName) || []), ty(le(t)));
              },
              [c.prefixName, t]
            ),
            d = g.useMemo(
              function () {
                return ev(ev({}, c), {}, { prefixName: u });
              },
              [c, u]
            ),
            f = g.useMemo(
              function () {
                return {
                  getKey: function (e) {
                    var t = u.length,
                      n = e[t];
                    return [s.keys[n], e.slice(t + 1)];
                  },
                };
              },
              [u]
            );
          return "function" != typeof r
            ? (e_(!1, "Form.List only accepts function as children."), null)
            : g.createElement(
                cT.Provider,
                { value: f },
                g.createElement(
                  cA.Provider,
                  { value: d },
                  g.createElement(
                    lu,
                    {
                      name: [],
                      shouldUpdate: function (e, t, n) {
                        return "internal" !== n.source && e !== t;
                      },
                      rules: o,
                      validateTrigger: i,
                      initialValue: n,
                      isList: !0,
                      isListField: null != a ? a : !!l,
                    },
                    function (e, t) {
                      var n = e.value,
                        o = e.onChange,
                        i = c.getFieldValue,
                        a = function () {
                          return i(u || []) || [];
                        },
                        l = (void 0 === n ? [] : n) || [];
                      return (
                        Array.isArray(l) || (l = []),
                        r(
                          l.map(function (e, t) {
                            var n = s.keys[t];
                            return (
                              void 0 === n &&
                                ((s.keys[t] = s.id),
                                (n = s.keys[t]),
                                (s.id += 1)),
                              { name: t, key: n, isListField: !0 }
                            );
                          }),
                          {
                            add: function (e, t) {
                              var n = a();
                              t >= 0 && t <= n.length
                                ? ((s.keys = [].concat(
                                    ty(s.keys.slice(0, t)),
                                    [s.id],
                                    ty(s.keys.slice(t))
                                  )),
                                  o(
                                    [].concat(
                                      ty(n.slice(0, t)),
                                      [e],
                                      ty(n.slice(t))
                                    )
                                  ))
                                : ((s.keys = [].concat(ty(s.keys), [s.id])),
                                  o([].concat(ty(n), [e]))),
                                (s.id += 1);
                            },
                            remove: function (e) {
                              var t = a(),
                                n = new Set(Array.isArray(e) ? e : [e]);
                              n.size <= 0 ||
                                ((s.keys = s.keys.filter(function (e, t) {
                                  return !n.has(t);
                                })),
                                o(
                                  t.filter(function (e, t) {
                                    return !n.has(t);
                                  })
                                ));
                            },
                            move: function (e, t) {
                              if (e !== t) {
                                var n = a();
                                e < 0 ||
                                  e >= n.length ||
                                  t < 0 ||
                                  t >= n.length ||
                                  ((s.keys = li(s.keys, e, t)), o(li(n, e, t)));
                              }
                            },
                          },
                          t
                        )
                      );
                    }
                  )
                )
              );
        }),
        (lw.useForm = lg),
        (lw.useWatch = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            o = t[1],
            i = void 0 === o ? {} : o,
            a = i && i._init ? { form: i } : i,
            c = a.form,
            l = C((0, g.useState)(), 2),
            s = l[0],
            u = l[1],
            d = (0, g.useMemo)(
              function () {
                return ly(s);
              },
              [s]
            ),
            f = (0, g.useRef)(d);
          f.current = d;
          var p = (0, g.useContext)(cA),
            h = c || p,
            m = h && h._init,
            v = le(r),
            b = (0, g.useRef)(v);
          return (
            (b.current = v),
            lx(v),
            (0, g.useEffect)(
              function () {
                if (m) {
                  var e = h.getFieldsValue,
                    t = (0, h.getInternalHooks)(cF).registerWatch,
                    n = function (e, t) {
                      var n = a.preserve ? t : e;
                      return "function" == typeof r ? r(n) : oG(n, b.current);
                    },
                    o = t(function (e, t) {
                      var r = n(e, t),
                        o = ly(r);
                      f.current !== o && ((f.current = o), u(r));
                    }),
                    i = n(e(), e(!0));
                  return s !== i && u(i), o;
                }
              },
              [m]
            ),
            s
          );
        });
      let lE = g.createContext({}),
        lS = g.createContext(void 0);
      var lC = function (e, t) {
        var n, r;
        let o,
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          { variant: a, [e]: c } = g.useContext(tp),
          l = g.useContext(lS),
          s = null == c ? void 0 : c.variant;
        o =
          void 0 !== t
            ? t
            : !1 === i
            ? "borderless"
            : null !==
                (r =
                  null !== (n = null != l ? l : s) && void 0 !== n ? n : a) &&
              void 0 !== r
            ? r
            : "outlined";
        let u = tf.includes(o);
        return [o, u];
      };
      let lk = g.createContext(null),
        lM = (e, t) => {
          let n = g.useContext(lk),
            r = g.useMemo(() => {
              if (!n) return "";
              let { compactDirection: r, isFirstItem: o, isLastItem: i } = n,
                a = "vertical" === r ? "-vertical-" : "-";
              return P()("".concat(e, "-compact").concat(a, "item"), {
                ["".concat(e, "-compact").concat(a, "first-item")]: o,
                ["".concat(e, "-compact").concat(a, "last-item")]: i,
                ["".concat(e, "-compact").concat(a, "item-rtl")]: "rtl" === t,
              });
            }, [e, t, n]);
          return {
            compactSize: null == n ? void 0 : n.compactSize,
            compactDirection: null == n ? void 0 : n.compactDirection,
            compactItemClassnames: r,
          };
        },
        lO = (e) => {
          let t = {
            overflow: { adjustX: !0, adjustY: !0, shiftY: !0 },
            htmlRegion: "scroll" === e ? "scroll" : "visible",
            dynamicInset: !0,
          };
          return {
            bottomLeft: Object.assign(Object.assign({}, t), {
              points: ["tl", "bl"],
              offset: [0, 4],
            }),
            bottomRight: Object.assign(Object.assign({}, t), {
              points: ["tr", "br"],
              offset: [0, 4],
            }),
            topLeft: Object.assign(Object.assign({}, t), {
              points: ["bl", "tl"],
              offset: [0, -4],
            }),
            topRight: Object.assign(Object.assign({}, t), {
              points: ["br", "tr"],
              offset: [0, -4],
            }),
          };
        };
      function lR(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { focus: !0 },
          { componentCls: n } = e,
          r = "".concat(n, "-compact");
        return {
          [r]: Object.assign(
            Object.assign(
              {},
              (function (e, t, n) {
                let { focusElCls: r, focus: o, borderElCls: i } = n,
                  a = i ? "> *" : "",
                  c = ["hover", o ? "focus" : null, "active"]
                    .filter(Boolean)
                    .map((e) => "&:".concat(e, " ").concat(a))
                    .join(",");
                return {
                  ["&-item:not(".concat(t, "-last-item)")]: {
                    marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                  },
                  "&-item": Object.assign(
                    Object.assign(
                      { [c]: { zIndex: 2 } },
                      r ? { ["&".concat(r)]: { zIndex: 2 } } : {}
                    ),
                    { ["&[disabled] ".concat(a)]: { zIndex: 0 } }
                  ),
                };
              })(e, r, t)
            ),
            (function (e, t, n) {
              let { borderElCls: r } = n,
                o = r ? "> ".concat(r) : "";
              return {
                ["&-item:not("
                  .concat(t, "-first-item):not(")
                  .concat(t, "-last-item) ")
                  .concat(o)]: { borderRadius: 0 },
                ["&-item:not("
                  .concat(t, "-last-item)")
                  .concat(t, "-first-item")]: {
                  ["& "
                    .concat(o, ", &")
                    .concat(e, "-sm ")
                    .concat(o, ", &")
                    .concat(e, "-lg ")
                    .concat(o)]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                  },
                },
                ["&-item:not("
                  .concat(t, "-first-item)")
                  .concat(t, "-last-item")]: {
                  ["& "
                    .concat(o, ", &")
                    .concat(e, "-sm ")
                    .concat(o, ", &")
                    .concat(e, "-lg ")
                    .concat(o)]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0,
                  },
                },
              };
            })(n, r, t)
          ),
        };
      }
      let lI = (e) => ({ animationDuration: e, animationFillMode: "both" }),
        lP = (e) => ({ animationDuration: e, animationFillMode: "both" }),
        lF = function (e, t, n, r) {
          let o =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = o ? "&" : "";
          return {
            ["\n      "
              .concat(i)
              .concat(e, "-enter,\n      ")
              .concat(i)
              .concat(e, "-appear\n    ")]: Object.assign(
              Object.assign({}, lI(r)),
              { animationPlayState: "paused" }
            ),
            ["".concat(i).concat(e, "-leave")]: Object.assign(
              Object.assign({}, lP(r)),
              { animationPlayState: "paused" }
            ),
            ["\n      "
              .concat(i)
              .concat(e, "-enter")
              .concat(e, "-enter-active,\n      ")
              .concat(i)
              .concat(e, "-appear")
              .concat(e, "-appear-active\n    ")]: {
              animationName: t,
              animationPlayState: "running",
            },
            ["".concat(i).concat(e, "-leave").concat(e, "-leave-active")]: {
              animationName: n,
              animationPlayState: "running",
              pointerEvents: "none",
            },
          };
        },
        lj = new nP("antSlideUpIn", {
          "0%": {
            transform: "scaleY(0.8)",
            transformOrigin: "0% 0%",
            opacity: 0,
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "0% 0%",
            opacity: 1,
          },
        }),
        lA = new nP("antSlideUpOut", {
          "0%": {
            transform: "scaleY(1)",
            transformOrigin: "0% 0%",
            opacity: 1,
          },
          "100%": {
            transform: "scaleY(0.8)",
            transformOrigin: "0% 0%",
            opacity: 0,
          },
        }),
        lT = new nP("antSlideDownIn", {
          "0%": {
            transform: "scaleY(0.8)",
            transformOrigin: "100% 100%",
            opacity: 0,
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "100% 100%",
            opacity: 1,
          },
        }),
        lN = new nP("antSlideDownOut", {
          "0%": {
            transform: "scaleY(1)",
            transformOrigin: "100% 100%",
            opacity: 1,
          },
          "100%": {
            transform: "scaleY(0.8)",
            transformOrigin: "100% 100%",
            opacity: 0,
          },
        }),
        l_ = new nP("antSlideLeftIn", {
          "0%": {
            transform: "scaleX(0.8)",
            transformOrigin: "0% 0%",
            opacity: 0,
          },
          "100%": {
            transform: "scaleX(1)",
            transformOrigin: "0% 0%",
            opacity: 1,
          },
        }),
        lH = {
          "slide-up": { inKeyframes: lj, outKeyframes: lA },
          "slide-down": { inKeyframes: lT, outKeyframes: lN },
          "slide-left": {
            inKeyframes: l_,
            outKeyframes: new nP("antSlideLeftOut", {
              "0%": {
                transform: "scaleX(1)",
                transformOrigin: "0% 0%",
                opacity: 1,
              },
              "100%": {
                transform: "scaleX(0.8)",
                transformOrigin: "0% 0%",
                opacity: 0,
              },
            }),
          },
          "slide-right": {
            inKeyframes: new nP("antSlideRightIn", {
              "0%": {
                transform: "scaleX(0.8)",
                transformOrigin: "100% 0%",
                opacity: 0,
              },
              "100%": {
                transform: "scaleX(1)",
                transformOrigin: "100% 0%",
                opacity: 1,
              },
            }),
            outKeyframes: new nP("antSlideRightOut", {
              "0%": {
                transform: "scaleX(1)",
                transformOrigin: "100% 0%",
                opacity: 1,
              },
              "100%": {
                transform: "scaleX(0.8)",
                transformOrigin: "100% 0%",
                opacity: 0,
              },
            }),
          },
        },
        lz = (e, t) => {
          let { antCls: n } = e,
            r = "".concat(n, "-").concat(t),
            { inKeyframes: o, outKeyframes: i } = lH[t];
          return [
            lF(r, o, i, e.motionDurationMid),
            {
              ["\n      "
                .concat(r, "-enter,\n      ")
                .concat(r, "-appear\n    ")]: {
                transform: "scale(0)",
                transformOrigin: "0% 0%",
                opacity: 0,
                animationTimingFunction: e.motionEaseOutQuint,
                "&-prepare": { transform: "scale(1)" },
              },
              ["".concat(r, "-leave")]: {
                animationTimingFunction: e.motionEaseInQuint,
              },
            },
          ];
        },
        lL = new nP("antMoveDownIn", {
          "0%": {
            transform: "translate3d(0, 100%, 0)",
            transformOrigin: "0 0",
            opacity: 0,
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            transformOrigin: "0 0",
            opacity: 1,
          },
        }),
        lD = new nP("antMoveDownOut", {
          "0%": {
            transform: "translate3d(0, 0, 0)",
            transformOrigin: "0 0",
            opacity: 1,
          },
          "100%": {
            transform: "translate3d(0, 100%, 0)",
            transformOrigin: "0 0",
            opacity: 0,
          },
        }),
        lB = new nP("antMoveLeftIn", {
          "0%": {
            transform: "translate3d(-100%, 0, 0)",
            transformOrigin: "0 0",
            opacity: 0,
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            transformOrigin: "0 0",
            opacity: 1,
          },
        }),
        lV = new nP("antMoveLeftOut", {
          "0%": {
            transform: "translate3d(0, 0, 0)",
            transformOrigin: "0 0",
            opacity: 1,
          },
          "100%": {
            transform: "translate3d(-100%, 0, 0)",
            transformOrigin: "0 0",
            opacity: 0,
          },
        }),
        lW = new nP("antMoveRightIn", {
          "0%": {
            transform: "translate3d(100%, 0, 0)",
            transformOrigin: "0 0",
            opacity: 0,
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            transformOrigin: "0 0",
            opacity: 1,
          },
        }),
        lq = new nP("antMoveRightOut", {
          "0%": {
            transform: "translate3d(0, 0, 0)",
            transformOrigin: "0 0",
            opacity: 1,
          },
          "100%": {
            transform: "translate3d(100%, 0, 0)",
            transformOrigin: "0 0",
            opacity: 0,
          },
        }),
        lU = {
          "move-up": {
            inKeyframes: new nP("antMoveUpIn", {
              "0%": {
                transform: "translate3d(0, -100%, 0)",
                transformOrigin: "0 0",
                opacity: 0,
              },
              "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1,
              },
            }),
            outKeyframes: new nP("antMoveUpOut", {
              "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1,
              },
              "100%": {
                transform: "translate3d(0, -100%, 0)",
                transformOrigin: "0 0",
                opacity: 0,
              },
            }),
          },
          "move-down": { inKeyframes: lL, outKeyframes: lD },
          "move-left": { inKeyframes: lB, outKeyframes: lV },
          "move-right": { inKeyframes: lW, outKeyframes: lq },
        },
        lX = (e, t) => {
          let { antCls: n } = e,
            r = "".concat(n, "-").concat(t),
            { inKeyframes: o, outKeyframes: i } = lU[t];
          return [
            lF(r, o, i, e.motionDurationMid),
            {
              ["\n        "
                .concat(r, "-enter,\n        ")
                .concat(r, "-appear\n      ")]: {
                opacity: 0,
                animationTimingFunction: e.motionEaseOutCirc,
              },
              ["".concat(r, "-leave")]: {
                animationTimingFunction: e.motionEaseInOutCirc,
              },
            },
          ];
        },
        l$ = (e) => {
          let {
            optionHeight: t,
            optionFontSize: n,
            optionLineHeight: r,
            optionPadding: o,
          } = e;
          return {
            position: "relative",
            display: "block",
            minHeight: t,
            padding: o,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: n,
            lineHeight: r,
            boxSizing: "border-box",
          };
        };
      var lK = (e) => {
        let { antCls: t, componentCls: n } = e,
          r = "".concat(n, "-item"),
          o = "&"
            .concat(t, "-slide-up-enter")
            .concat(t, "-slide-up-enter-active"),
          i = "&"
            .concat(t, "-slide-up-appear")
            .concat(t, "-slide-up-appear-active"),
          a = "&"
            .concat(t, "-slide-up-leave")
            .concat(t, "-slide-up-leave-active"),
          c = "".concat(n, "-dropdown-placement-");
        return [
          {
            ["".concat(n, "-dropdown")]: Object.assign(
              Object.assign({}, aY(e)),
              {
                position: "absolute",
                top: -9999,
                zIndex: e.zIndexPopup,
                boxSizing: "border-box",
                padding: e.paddingXXS,
                overflow: "hidden",
                fontSize: e.fontSize,
                fontVariant: "initial",
                backgroundColor: e.colorBgElevated,
                borderRadius: e.borderRadiusLG,
                outline: "none",
                boxShadow: e.boxShadowSecondary,
                ["\n          "
                  .concat(o)
                  .concat(c, "bottomLeft,\n          ")
                  .concat(i)
                  .concat(c, "bottomLeft\n        ")]: { animationName: lj },
                ["\n          "
                  .concat(o)
                  .concat(c, "topLeft,\n          ")
                  .concat(i)
                  .concat(c, "topLeft,\n          ")
                  .concat(o)
                  .concat(c, "topRight,\n          ")
                  .concat(i)
                  .concat(c, "topRight\n        ")]: { animationName: lT },
                ["".concat(a).concat(c, "bottomLeft")]: { animationName: lA },
                ["\n          "
                  .concat(a)
                  .concat(c, "topLeft,\n          ")
                  .concat(a)
                  .concat(c, "topRight\n        ")]: { animationName: lN },
                "&-hidden": { display: "none" },
                [r]: Object.assign(Object.assign({}, l$(e)), {
                  cursor: "pointer",
                  transition: "background ".concat(
                    e.motionDurationSlow,
                    " ease"
                  ),
                  borderRadius: e.borderRadiusSM,
                  "&-group": {
                    color: e.colorTextDescription,
                    fontSize: e.fontSizeSM,
                    cursor: "default",
                  },
                  "&-option": {
                    display: "flex",
                    "&-content": Object.assign({ flex: "auto" }, aG),
                    "&-state": {
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                    },
                    ["&-active:not(".concat(r, "-option-disabled)")]: {
                      backgroundColor: e.optionActiveBg,
                    },
                    ["&-selected:not(".concat(r, "-option-disabled)")]: {
                      color: e.optionSelectedColor,
                      fontWeight: e.optionSelectedFontWeight,
                      backgroundColor: e.optionSelectedBg,
                      ["".concat(r, "-option-state")]: {
                        color: e.colorPrimary,
                      },
                      ["&:has(+ "
                        .concat(r, "-option-selected:not(")
                        .concat(r, "-option-disabled))")]: {
                        borderEndStartRadius: 0,
                        borderEndEndRadius: 0,
                        ["& + "
                          .concat(r, "-option-selected:not(")
                          .concat(r, "-option-disabled)")]: {
                          borderStartStartRadius: 0,
                          borderStartEndRadius: 0,
                        },
                      },
                    },
                    "&-disabled": {
                      ["&".concat(r, "-option-selected")]: {
                        backgroundColor: e.colorBgContainerDisabled,
                      },
                      color: e.colorTextDisabled,
                      cursor: "not-allowed",
                    },
                    "&-grouped": {
                      paddingInlineStart: e
                        .calc(e.controlPaddingHorizontal)
                        .mul(2)
                        .equal(),
                    },
                  },
                  "&-empty": Object.assign(Object.assign({}, l$(e)), {
                    color: e.colorTextDisabled,
                  }),
                }),
                "&-rtl": { direction: "rtl" },
              }
            ),
          },
          lz(e, "slide-up"),
          lz(e, "slide-down"),
          lX(e, "move-up"),
          lX(e, "move-down"),
        ];
      };
      let lG = (e) => {
          let {
              multipleSelectItemHeight: t,
              paddingXXS: n,
              lineWidth: r,
              INTERNAL_FIXED_ITEM_MARGIN: o,
            } = e,
            i = e.max(e.calc(n).sub(r).equal(), 0),
            a = e.max(e.calc(i).sub(o).equal(), 0);
          return {
            basePadding: i,
            containerPadding: a,
            itemHeight: tW(t),
            itemLineHeight: tW(
              e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal()
            ),
          };
        },
        lY = (e) => {
          let {
            multipleSelectItemHeight: t,
            selectHeight: n,
            lineWidth: r,
          } = e;
          return e.calc(n).sub(t).div(2).sub(r).equal();
        },
        lQ = (e) => {
          let {
            componentCls: t,
            iconCls: n,
            borderRadiusSM: r,
            motionDurationSlow: o,
            paddingXS: i,
            multipleItemColorDisabled: a,
            multipleItemBorderColorDisabled: c,
            colorIcon: l,
            colorIconHover: s,
            INTERNAL_FIXED_ITEM_MARGIN: u,
          } = e;
          return {
            ["".concat(t, "-selection-overflow")]: {
              position: "relative",
              display: "flex",
              flex: "auto",
              flexWrap: "wrap",
              maxWidth: "100%",
              "&-item": {
                flex: "none",
                alignSelf: "center",
                maxWidth: "100%",
                display: "inline-flex",
              },
              ["".concat(t, "-selection-item")]: {
                display: "flex",
                alignSelf: "center",
                flex: "none",
                boxSizing: "border-box",
                maxWidth: "100%",
                marginBlock: u,
                borderRadius: r,
                cursor: "default",
                transition: "font-size "
                  .concat(o, ", line-height ")
                  .concat(o, ", height ")
                  .concat(o),
                marginInlineEnd: e.calc(u).mul(2).equal(),
                paddingInlineStart: i,
                paddingInlineEnd: e.calc(i).div(2).equal(),
                ["".concat(t, "-disabled&")]: {
                  color: a,
                  borderColor: c,
                  cursor: "not-allowed",
                },
                "&-content": {
                  display: "inline-block",
                  marginInlineEnd: e.calc(i).div(2).equal(),
                  overflow: "hidden",
                  whiteSpace: "pre",
                  textOverflow: "ellipsis",
                },
                "&-remove": Object.assign(Object.assign({}, aQ()), {
                  display: "inline-flex",
                  alignItems: "center",
                  color: l,
                  fontWeight: "bold",
                  fontSize: 10,
                  lineHeight: "inherit",
                  cursor: "pointer",
                  ["> ".concat(n)]: { verticalAlign: "-0.2em" },
                  "&:hover": { color: s },
                }),
              },
            },
          };
        },
        lZ = (e, t) => {
          let { componentCls: n, INTERNAL_FIXED_ITEM_MARGIN: r } = e,
            o = "".concat(n, "-selection-overflow"),
            i = e.multipleSelectItemHeight,
            a = lY(e),
            c = t ? "".concat(n, "-").concat(t) : "",
            l = lG(e);
          return {
            ["".concat(n, "-multiple").concat(c)]: Object.assign(
              Object.assign({}, lQ(e)),
              {
                ["".concat(n, "-selector")]: {
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  paddingInline: l.basePadding,
                  paddingBlock: l.containerPadding,
                  borderRadius: e.borderRadius,
                  ["".concat(n, "-disabled&")]: {
                    background: e.multipleSelectorBgDisabled,
                    cursor: "not-allowed",
                  },
                  "&:after": {
                    display: "inline-block",
                    width: 0,
                    margin: "".concat(tW(r), " 0"),
                    lineHeight: tW(i),
                    visibility: "hidden",
                    content: '"\\a0"',
                  },
                },
                ["".concat(n, "-selection-item")]: {
                  height: l.itemHeight,
                  lineHeight: tW(l.itemLineHeight),
                },
                ["".concat(n, "-selection-wrap")]: {
                  alignSelf: "flex-start",
                  "&:after": { lineHeight: tW(i), marginBlock: r },
                },
                ["".concat(n, "-prefix")]: {
                  marginInlineStart: e
                    .calc(e.inputPaddingHorizontalBase)
                    .sub(l.basePadding)
                    .equal(),
                },
                [""
                  .concat(o, "-item + ")
                  .concat(o, "-item,\n        ")
                  .concat(n, "-prefix + ")
                  .concat(n, "-selection-wrap\n      ")]: {
                  ["".concat(n, "-selection-search")]: { marginInlineStart: 0 },
                  ["".concat(n, "-selection-placeholder")]: {
                    insetInlineStart: 0,
                  },
                },
                ["".concat(o, "-item-suffix")]: {
                  minHeight: l.itemHeight,
                  marginBlock: r,
                },
                ["".concat(n, "-selection-search")]: {
                  display: "inline-flex",
                  position: "relative",
                  maxWidth: "100%",
                  marginInlineStart: e
                    .calc(e.inputPaddingHorizontalBase)
                    .sub(a)
                    .equal(),
                  "\n          &-input,\n          &-mirror\n        ": {
                    height: i,
                    fontFamily: e.fontFamily,
                    lineHeight: tW(i),
                    transition: "all ".concat(e.motionDurationSlow),
                  },
                  "&-input": { width: "100%", minWidth: 4.1 },
                  "&-mirror": {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: "auto",
                    zIndex: 999,
                    whiteSpace: "pre",
                    visibility: "hidden",
                  },
                },
                ["".concat(n, "-selection-placeholder")]: {
                  position: "absolute",
                  top: "50%",
                  insetInlineStart: e
                    .calc(e.inputPaddingHorizontalBase)
                    .sub(l.basePadding)
                    .equal(),
                  insetInlineEnd: e.inputPaddingHorizontalBase,
                  transform: "translateY(-50%)",
                  transition: "all ".concat(e.motionDurationSlow),
                },
              }
            ),
          };
        };
      function lJ(e, t) {
        let { componentCls: n } = e,
          r = t ? "".concat(n, "-").concat(t) : "",
          o = {
            ["".concat(n, "-multiple").concat(r)]: {
              fontSize: e.fontSize,
              ["".concat(n, "-selector")]: {
                ["".concat(n, "-show-search&")]: { cursor: "text" },
              },
              ["\n        &"
                .concat(n, "-show-arrow ")
                .concat(n, "-selector,\n        &")
                .concat(n, "-allow-clear ")
                .concat(n, "-selector\n      ")]: {
                paddingInlineEnd: e
                  .calc(e.fontSizeIcon)
                  .add(e.controlPaddingHorizontal)
                  .equal(),
              },
            },
          };
        return [lZ(e, t), o];
      }
      var l0 = (e) => {
        let { componentCls: t } = e,
          n = cu(e, {
            selectHeight: e.controlHeightSM,
            multipleSelectItemHeight: e.multipleItemHeightSM,
            borderRadius: e.borderRadiusSM,
            borderRadiusSM: e.borderRadiusXS,
          }),
          r = cu(e, {
            fontSize: e.fontSizeLG,
            selectHeight: e.controlHeightLG,
            multipleSelectItemHeight: e.multipleItemHeightLG,
            borderRadius: e.borderRadiusLG,
            borderRadiusSM: e.borderRadius,
          });
        return [
          lJ(e),
          lJ(n, "sm"),
          {
            ["".concat(t, "-multiple").concat(t, "-sm")]: {
              ["".concat(t, "-selection-placeholder")]: {
                insetInline: e
                  .calc(e.controlPaddingHorizontalSM)
                  .sub(e.lineWidth)
                  .equal(),
              },
              ["".concat(t, "-selection-search")]: { marginInlineStart: 2 },
            },
          },
          lJ(r, "lg"),
        ];
      };
      function l1(e, t) {
        let {
            componentCls: n,
            inputPaddingHorizontalBase: r,
            borderRadius: o,
          } = e,
          i = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
          a = t ? "".concat(n, "-").concat(t) : "";
        return {
          ["".concat(n, "-single").concat(a)]: {
            fontSize: e.fontSize,
            height: e.controlHeight,
            ["".concat(n, "-selector")]: Object.assign(
              Object.assign({}, aY(e, !0)),
              {
                display: "flex",
                borderRadius: o,
                flex: "1 1 auto",
                ["".concat(n, "-selection-search")]: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  "&-input": { width: "100%", WebkitAppearance: "textfield" },
                },
                ["\n          "
                  .concat(n, "-selection-item,\n          ")
                  .concat(n, "-selection-placeholder\n        ")]: {
                  display: "block",
                  padding: 0,
                  lineHeight: tW(i),
                  transition: "all ".concat(
                    e.motionDurationSlow,
                    ", visibility 0s"
                  ),
                  alignSelf: "center",
                },
                ["".concat(n, "-selection-placeholder")]: {
                  transition: "none",
                  pointerEvents: "none",
                },
                [[
                  "&:after",
                  "".concat(n, "-selection-item:empty:after"),
                  "".concat(n, "-selection-placeholder:empty:after"),
                ].join(",")]: {
                  display: "inline-block",
                  width: 0,
                  visibility: "hidden",
                  content: '"\\a0"',
                },
              }
            ),
            ["\n        &"
              .concat(n, "-show-arrow ")
              .concat(n, "-selection-item,\n        &")
              .concat(n, "-show-arrow ")
              .concat(n, "-selection-search,\n        &")
              .concat(n, "-show-arrow ")
              .concat(n, "-selection-placeholder\n      ")]: {
              paddingInlineEnd: e.showArrowPaddingInlineEnd,
            },
            ["&".concat(n, "-open ").concat(n, "-selection-item")]: {
              color: e.colorTextPlaceholder,
            },
            ["&:not(".concat(n, "-customize-input)")]: {
              ["".concat(n, "-selector")]: {
                width: "100%",
                height: "100%",
                alignItems: "center",
                padding: "0 ".concat(tW(r)),
                ["".concat(n, "-selection-search-input")]: { height: i },
                "&:after": { lineHeight: tW(i) },
              },
            },
            ["&".concat(n, "-customize-input")]: {
              ["".concat(n, "-selector")]: {
                "&:after": { display: "none" },
                ["".concat(n, "-selection-search")]: {
                  position: "static",
                  width: "100%",
                },
                ["".concat(n, "-selection-placeholder")]: {
                  position: "absolute",
                  insetInlineStart: 0,
                  insetInlineEnd: 0,
                  padding: "0 ".concat(tW(r)),
                  "&:after": { display: "none" },
                },
              },
            },
          },
        };
      }
      let l2 = (e, t) => {
          let { componentCls: n, antCls: r, controlOutlineWidth: o } = e;
          return {
            ["&:not(".concat(n, "-customize-input) ").concat(n, "-selector")]: {
              border: ""
                .concat(tW(e.lineWidth), " ")
                .concat(e.lineType, " ")
                .concat(t.borderColor),
              background: e.selectorBg,
            },
            ["&:not("
              .concat(n, "-disabled):not(")
              .concat(n, "-customize-input):not(")
              .concat(r, "-pagination-size-changer)")]: {
              ["&:hover ".concat(n, "-selector")]: {
                borderColor: t.hoverBorderHover,
              },
              ["".concat(n, "-focused& ").concat(n, "-selector")]: {
                borderColor: t.activeBorderColor,
                boxShadow: "0 0 0 "
                  .concat(tW(o), " ")
                  .concat(t.activeOutlineColor),
                outline: 0,
              },
              ["".concat(n, "-prefix")]: { color: t.color },
            },
          };
        },
        l5 = (e, t) => ({
          ["&".concat(e.componentCls, "-status-").concat(t.status)]:
            Object.assign({}, l2(e, t)),
        }),
        l6 = (e) => ({
          "&-outlined": Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  l2(e, {
                    borderColor: e.colorBorder,
                    hoverBorderHover: e.hoverBorderColor,
                    activeBorderColor: e.activeBorderColor,
                    activeOutlineColor: e.activeOutlineColor,
                    color: e.colorText,
                  })
                ),
                l5(e, {
                  status: "error",
                  borderColor: e.colorError,
                  hoverBorderHover: e.colorErrorHover,
                  activeBorderColor: e.colorError,
                  activeOutlineColor: e.colorErrorOutline,
                  color: e.colorError,
                })
              ),
              l5(e, {
                status: "warning",
                borderColor: e.colorWarning,
                hoverBorderHover: e.colorWarningHover,
                activeBorderColor: e.colorWarning,
                activeOutlineColor: e.colorWarningOutline,
                color: e.colorWarning,
              })
            ),
            {
              ["&".concat(e.componentCls, "-disabled")]: {
                ["&:not("
                  .concat(e.componentCls, "-customize-input) ")
                  .concat(e.componentCls, "-selector")]: {
                  background: e.colorBgContainerDisabled,
                  color: e.colorTextDisabled,
                },
              },
              ["&"
                .concat(e.componentCls, "-multiple ")
                .concat(e.componentCls, "-selection-item")]: {
                background: e.multipleItemBg,
                border: ""
                  .concat(tW(e.lineWidth), " ")
                  .concat(e.lineType, " ")
                  .concat(e.multipleItemBorderColor),
              },
            }
          ),
        }),
        l3 = (e, t) => {
          let { componentCls: n, antCls: r } = e;
          return {
            ["&:not(".concat(n, "-customize-input) ").concat(n, "-selector")]: {
              background: t.bg,
              border: ""
                .concat(tW(e.lineWidth), " ")
                .concat(e.lineType, " transparent"),
              color: t.color,
            },
            ["&:not("
              .concat(n, "-disabled):not(")
              .concat(n, "-customize-input):not(")
              .concat(r, "-pagination-size-changer)")]: {
              ["&:hover ".concat(n, "-selector")]: { background: t.hoverBg },
              ["".concat(n, "-focused& ").concat(n, "-selector")]: {
                background: e.selectorBg,
                borderColor: t.activeBorderColor,
                outline: 0,
              },
            },
          };
        },
        l4 = (e, t) => ({
          ["&".concat(e.componentCls, "-status-").concat(t.status)]:
            Object.assign({}, l3(e, t)),
        }),
        l9 = (e) => ({
          "&-filled": Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  l3(e, {
                    bg: e.colorFillTertiary,
                    hoverBg: e.colorFillSecondary,
                    activeBorderColor: e.activeBorderColor,
                    color: e.colorText,
                  })
                ),
                l4(e, {
                  status: "error",
                  bg: e.colorErrorBg,
                  hoverBg: e.colorErrorBgHover,
                  activeBorderColor: e.colorError,
                  color: e.colorError,
                })
              ),
              l4(e, {
                status: "warning",
                bg: e.colorWarningBg,
                hoverBg: e.colorWarningBgHover,
                activeBorderColor: e.colorWarning,
                color: e.colorWarning,
              })
            ),
            {
              ["&".concat(e.componentCls, "-disabled")]: {
                ["&:not("
                  .concat(e.componentCls, "-customize-input) ")
                  .concat(e.componentCls, "-selector")]: {
                  borderColor: e.colorBorder,
                  background: e.colorBgContainerDisabled,
                  color: e.colorTextDisabled,
                },
              },
              ["&"
                .concat(e.componentCls, "-multiple ")
                .concat(e.componentCls, "-selection-item")]: {
                background: e.colorBgContainer,
                border: ""
                  .concat(tW(e.lineWidth), " ")
                  .concat(e.lineType, " ")
                  .concat(e.colorSplit),
              },
            }
          ),
        }),
        l8 = (e) => ({
          "&-borderless": {
            ["".concat(e.componentCls, "-selector")]: {
              background: "transparent",
              border: ""
                .concat(tW(e.lineWidth), " ")
                .concat(e.lineType, " transparent"),
            },
            ["&".concat(e.componentCls, "-disabled")]: {
              ["&:not("
                .concat(e.componentCls, "-customize-input) ")
                .concat(e.componentCls, "-selector")]: {
                color: e.colorTextDisabled,
              },
            },
            ["&"
              .concat(e.componentCls, "-multiple ")
              .concat(e.componentCls, "-selection-item")]: {
              background: e.multipleItemBg,
              border: ""
                .concat(tW(e.lineWidth), " ")
                .concat(e.lineType, " ")
                .concat(e.multipleItemBorderColor),
            },
            ["&".concat(e.componentCls, "-status-error")]: {
              [""
                .concat(e.componentCls, "-prefix, ")
                .concat(e.componentCls, "-selection-item")]: {
                color: e.colorError,
              },
            },
            ["&".concat(e.componentCls, "-status-warning")]: {
              [""
                .concat(e.componentCls, "-prefix, ")
                .concat(e.componentCls, "-selection-item")]: {
                color: e.colorWarning,
              },
            },
          },
        });
      var l7 = (e) => ({
        [e.componentCls]: Object.assign(
          Object.assign(Object.assign({}, l6(e)), l9(e)),
          l8(e)
        ),
      });
      let se = (e) => {
          let { componentCls: t } = e;
          return {
            position: "relative",
            transition: "all "
              .concat(e.motionDurationMid, " ")
              .concat(e.motionEaseInOut),
            input: { cursor: "pointer" },
            ["".concat(t, "-show-search&")]: {
              cursor: "text",
              input: { cursor: "auto", color: "inherit", height: "100%" },
            },
            ["".concat(t, "-disabled&")]: {
              cursor: "not-allowed",
              input: { cursor: "not-allowed" },
            },
          };
        },
        st = (e) => {
          let { componentCls: t } = e;
          return {
            ["".concat(t, "-selection-search-input")]: {
              margin: 0,
              padding: 0,
              background: "transparent",
              border: "none",
              outline: "none",
              appearance: "none",
              fontFamily: "inherit",
              "&::-webkit-search-cancel-button": {
                display: "none",
                "-webkit-appearance": "none",
              },
            },
          };
        },
        sn = (e) => {
          let {
            antCls: t,
            componentCls: n,
            inputPaddingHorizontalBase: r,
            iconCls: o,
          } = e;
          return {
            [n]: Object.assign(Object.assign({}, aY(e)), {
              position: "relative",
              display: "inline-flex",
              cursor: "pointer",
              ["&:not(".concat(n, "-customize-input) ").concat(n, "-selector")]:
                Object.assign(Object.assign({}, se(e)), st(e)),
              ["".concat(n, "-selection-item")]: Object.assign(
                Object.assign(
                  {
                    flex: 1,
                    fontWeight: "normal",
                    position: "relative",
                    userSelect: "none",
                  },
                  aG
                ),
                { ["> ".concat(t, "-typography")]: { display: "inline" } }
              ),
              ["".concat(n, "-selection-placeholder")]: Object.assign(
                Object.assign({}, aG),
                {
                  flex: 1,
                  color: e.colorTextPlaceholder,
                  pointerEvents: "none",
                }
              ),
              ["".concat(n, "-arrow")]: Object.assign(Object.assign({}, aQ()), {
                position: "absolute",
                top: "50%",
                insetInlineStart: "auto",
                insetInlineEnd: r,
                height: e.fontSizeIcon,
                marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                lineHeight: 1,
                textAlign: "center",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                transition: "opacity ".concat(e.motionDurationSlow, " ease"),
                [o]: {
                  verticalAlign: "top",
                  transition: "transform ".concat(e.motionDurationSlow),
                  "> svg": { verticalAlign: "top" },
                  ["&:not(".concat(n, "-suffix)")]: { pointerEvents: "auto" },
                },
                ["".concat(n, "-disabled &")]: { cursor: "not-allowed" },
                "> *:not(:last-child)": { marginInlineEnd: 8 },
              }),
              ["".concat(n, "-selection-wrap")]: {
                display: "flex",
                width: "100%",
                position: "relative",
                minWidth: 0,
                "&:after": { content: '"\\a0"', width: 0, overflow: "hidden" },
              },
              ["".concat(n, "-prefix")]: {
                flex: "none",
                marginInlineEnd: e.selectAffixPadding,
              },
              ["".concat(n, "-clear")]: {
                position: "absolute",
                top: "50%",
                insetInlineStart: "auto",
                insetInlineEnd: r,
                zIndex: 1,
                display: "inline-block",
                width: e.fontSizeIcon,
                height: e.fontSizeIcon,
                marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                fontStyle: "normal",
                lineHeight: 1,
                textAlign: "center",
                textTransform: "none",
                cursor: "pointer",
                opacity: 0,
                transition: "color "
                  .concat(e.motionDurationMid, " ease, opacity ")
                  .concat(e.motionDurationSlow, " ease"),
                textRendering: "auto",
                "&:before": { display: "block" },
                "&:hover": { color: e.colorTextTertiary },
              },
              ["&:hover ".concat(n, "-clear")]: {
                opacity: 1,
                background: e.colorBgBase,
                borderRadius: "50%",
              },
            }),
            ["".concat(n, "-status")]: {
              "&-error, &-warning, &-success, &-validating": {
                ["&".concat(n, "-has-feedback")]: {
                  ["".concat(n, "-clear")]: {
                    insetInlineEnd: e
                      .calc(r)
                      .add(e.fontSize)
                      .add(e.paddingXS)
                      .equal(),
                  },
                },
              },
            },
          };
        },
        sr = (e) => {
          let { componentCls: t } = e;
          return [
            { [t]: { ["&".concat(t, "-in-form-item")]: { width: "100%" } } },
            sn(e),
            (function (e) {
              let { componentCls: t } = e,
                n = e
                  .calc(e.controlPaddingHorizontalSM)
                  .sub(e.lineWidth)
                  .equal();
              return [
                l1(e),
                l1(
                  cu(e, {
                    controlHeight: e.controlHeightSM,
                    borderRadius: e.borderRadiusSM,
                  }),
                  "sm"
                ),
                {
                  ["".concat(t, "-single").concat(t, "-sm")]: {
                    ["&:not(".concat(t, "-customize-input)")]: {
                      ["".concat(t, "-selector")]: {
                        padding: "0 ".concat(tW(n)),
                      },
                      ["&"
                        .concat(t, "-show-arrow ")
                        .concat(t, "-selection-search")]: {
                        insetInlineEnd: e
                          .calc(n)
                          .add(e.calc(e.fontSize).mul(1.5))
                          .equal(),
                      },
                      ["\n            &"
                        .concat(t, "-show-arrow ")
                        .concat(t, "-selection-item,\n            &")
                        .concat(t, "-show-arrow ")
                        .concat(t, "-selection-placeholder\n          ")]: {
                        paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal(),
                      },
                    },
                  },
                },
                l1(
                  cu(e, {
                    controlHeight: e.singleItemHeightLG,
                    fontSize: e.fontSizeLG,
                    borderRadius: e.borderRadiusLG,
                  }),
                  "lg"
                ),
              ];
            })(e),
            l0(e),
            lK(e),
            { ["".concat(t, "-rtl")]: { direction: "rtl" } },
            lR(e, {
              borderElCls: "".concat(t, "-selector"),
              focusElCls: "".concat(t, "-focused"),
            }),
          ];
        };
      var so = cv(
          "Select",
          (e, t) => {
            let { rootPrefixCls: n } = t,
              r = cu(e, {
                rootPrefixCls: n,
                inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
                multipleSelectItemHeight: e.multipleItemHeight,
                selectHeight: e.controlHeight,
              });
            return [sr(r), l7(r)];
          },
          (e) => {
            let {
                fontSize: t,
                lineHeight: n,
                lineWidth: r,
                controlHeight: o,
                controlHeightSM: i,
                controlHeightLG: a,
                paddingXXS: c,
                controlPaddingHorizontal: l,
                zIndexPopupBase: s,
                colorText: u,
                fontWeightStrong: d,
                controlItemBgActive: f,
                controlItemBgHover: p,
                colorBgContainer: h,
                colorFillSecondary: m,
                colorBgContainerDisabled: g,
                colorTextDisabled: v,
                colorPrimaryHover: b,
                colorPrimary: y,
                controlOutline: x,
              } = e,
              w = 2 * c,
              E = 2 * r;
            return {
              INTERNAL_FIXED_ITEM_MARGIN: Math.floor(c / 2),
              zIndexPopup: s + 50,
              optionSelectedColor: u,
              optionSelectedFontWeight: d,
              optionSelectedBg: f,
              optionActiveBg: p,
              optionPadding: "".concat((o - t * n) / 2, "px ").concat(l, "px"),
              optionFontSize: t,
              optionLineHeight: n,
              optionHeight: o,
              selectorBg: h,
              clearBg: h,
              singleItemHeightLG: a,
              multipleItemBg: m,
              multipleItemBorderColor: "transparent",
              multipleItemHeight: Math.min(o - w, o - E),
              multipleItemHeightSM: Math.min(i - w, i - E),
              multipleItemHeightLG: Math.min(a - w, a - E),
              multipleSelectorBgDisabled: g,
              multipleItemColorDisabled: v,
              multipleItemBorderColorDisabled: "transparent",
              showArrowPaddingInlineEnd: Math.ceil(1.25 * e.fontSize),
              hoverBorderColor: b,
              activeBorderColor: y,
              activeOutlineColor: x,
              selectAffixPadding: c,
            };
          },
          { unitless: { optionLineHeight: !0, optionSelectedFontWeight: !0 } }
        ),
        si = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
                },
              },
            ],
          },
          name: "check",
          theme: "outlined",
        },
        sa = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: si }));
        }),
        sc = {
          icon: {
            tag: "svg",
            attrs: {
              "fill-rule": "evenodd",
              viewBox: "64 64 896 896",
              focusable: "false",
            },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z",
                },
              },
            ],
          },
          name: "close-circle",
          theme: "filled",
        },
        sl = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: sc }));
        }),
        ss = {
          icon: {
            tag: "svg",
            attrs: {
              "fill-rule": "evenodd",
              viewBox: "64 64 896 896",
              focusable: "false",
            },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z",
                },
              },
            ],
          },
          name: "close",
          theme: "outlined",
        },
        su = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: ss }));
        }),
        sd = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
                },
              },
            ],
          },
          name: "down",
          theme: "outlined",
        },
        sf = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: sd }));
        }),
        sp = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
                },
              },
            ],
          },
          name: "loading",
          theme: "outlined",
        },
        sh = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: sp }));
        }),
        sm = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
                },
              },
            ],
          },
          name: "search",
          theme: "outlined",
        },
        sg = g.forwardRef(function (e, t) {
          return g.createElement(eX, b({}, e, { ref: t, icon: sm }));
        }),
        sv = function (e, t) {
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
        };
      let sb = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
        sy = g.forwardRef((e, t) => {
          var n, r, o;
          let i;
          let {
              prefixCls: a,
              bordered: c,
              className: l,
              rootClassName: s,
              getPopupContainer: u,
              popupClassName: d,
              dropdownClassName: f,
              listHeight: p = 256,
              placement: h,
              listItemHeight: m,
              size: v,
              disabled: b,
              notFoundContent: y,
              status: x,
              builtinPlacements: w,
              dropdownMatchSelectWidth: E,
              popupMatchSelectWidth: S,
              direction: C,
              style: k,
              allowClear: M,
              variant: O,
              dropdownStyle: R,
              transitionName: I,
              tagRender: F,
              maxCount: j,
              prefix: A,
            } = e,
            T = sv(e, [
              "prefixCls",
              "bordered",
              "className",
              "rootClassName",
              "getPopupContainer",
              "popupClassName",
              "dropdownClassName",
              "listHeight",
              "placement",
              "listItemHeight",
              "size",
              "disabled",
              "notFoundContent",
              "status",
              "builtinPlacements",
              "dropdownMatchSelectWidth",
              "popupMatchSelectWidth",
              "direction",
              "style",
              "allowClear",
              "variant",
              "dropdownStyle",
              "transitionName",
              "tagRender",
              "maxCount",
              "prefix",
            ]),
            {
              getPopupContainer: N,
              getPrefixCls: _,
              renderEmpty: H,
              direction: z,
              virtual: L,
              popupMatchSelectWidth: D,
              popupOverflow: B,
              select: V,
            } = g.useContext(tp),
            [, W] = ra(),
            q = null != m ? m : null == W ? void 0 : W.controlHeight,
            U = _("select", a),
            X = _(),
            $ = null != C ? C : z,
            { compactSize: K, compactItemClassnames: G } = lM(U, $),
            [Y, Q] = lC("select", O, c),
            Z = cO(U),
            [J, ee, et] = so(U, Z),
            en = g.useMemo(() => {
              let { mode: t } = e;
              return "combobox" === t ? void 0 : t === sb ? "combobox" : t;
            }, [e.mode]),
            er = "multiple" === en || "tags" === en,
            eo =
              ((r = e.suffixIcon),
              void 0 !== (o = e.showArrow) ? o : null !== r),
            ei = null !== (n = null != S ? S : E) && void 0 !== n ? n : D,
            {
              status: ea,
              hasFeedback: ec,
              isFormItemInput: el,
              feedbackIcon: es,
            } = g.useContext(lE),
            eu = a8(ea, x);
          i =
            void 0 !== y
              ? y
              : "combobox" === en
              ? null
              : (null == H ? void 0 : H("Select")) ||
                g.createElement(cM, { componentName: "Select" });
          let {
              suffixIcon: ed,
              itemIcon: ef,
              removeIcon: ep,
              clearIcon: eh,
            } = (function (e) {
              let {
                  suffixIcon: t,
                  clearIcon: n,
                  menuItemSelectedIcon: r,
                  removeIcon: o,
                  loading: i,
                  multiple: a,
                  hasFeedback: c,
                  prefixCls: l,
                  showSuffixIcon: s,
                  feedbackIcon: u,
                  showArrow: d,
                  componentName: f,
                } = e,
                p = null != n ? n : g.createElement(sl, null),
                h = (e) =>
                  null !== t || c || d
                    ? g.createElement(g.Fragment, null, !1 !== s && e, c && u)
                    : null,
                m = null;
              if (void 0 !== t) m = h(t);
              else if (i) m = h(g.createElement(sh, { spin: !0 }));
              else {
                let e = "".concat(l, "-suffix");
                m = (t) => {
                  let { open: n, showSearch: r } = t;
                  return n && r
                    ? h(g.createElement(sg, { className: e }))
                    : h(g.createElement(sf, { className: e }));
                };
              }
              let v = null;
              return (
                (v = void 0 !== r ? r : a ? g.createElement(sa, null) : null),
                {
                  clearIcon: p,
                  suffixIcon: m,
                  itemIcon: v,
                  removeIcon: void 0 !== o ? o : g.createElement(su, null),
                }
              );
            })(
              Object.assign(Object.assign({}, T), {
                multiple: er,
                hasFeedback: ec,
                feedbackIcon: es,
                showSuffixIcon: eo,
                prefixCls: U,
                componentName: "Select",
              })
            ),
            em = at(T, ["suffixIcon", "itemIcon"]),
            eg = P()(
              d || f,
              { ["".concat(U, "-dropdown-").concat($)]: "rtl" === $ },
              s,
              et,
              Z,
              ee
            ),
            ev = tv((e) => {
              var t;
              return null !== (t = null != v ? v : K) && void 0 !== t ? t : e;
            }),
            eb = g.useContext(aW),
            ey = P()(
              {
                ["".concat(U, "-lg")]: "large" === ev,
                ["".concat(U, "-sm")]: "small" === ev,
                ["".concat(U, "-rtl")]: "rtl" === $,
                ["".concat(U, "-").concat(Y)]: Q,
                ["".concat(U, "-in-form-item")]: el,
              },
              P()({
                ["".concat(U, "-status-success")]: "success" === eu,
                ["".concat(U, "-status-warning")]: "warning" === eu,
                ["".concat(U, "-status-error")]: "error" === eu,
                ["".concat(U, "-status-validating")]: "validating" === eu,
                ["".concat(U, "-has-feedback")]: ec,
              }),
              G,
              null == V ? void 0 : V.className,
              l,
              s,
              et,
              Z,
              ee
            ),
            ex = g.useMemo(
              () =>
                void 0 !== h ? h : "rtl" === $ ? "bottomRight" : "bottomLeft",
              [h, $]
            ),
            [ew] = aA("SelectLike", null == R ? void 0 : R.zIndex);
          return J(
            g.createElement(
              aI,
              Object.assign(
                {
                  ref: t,
                  virtual: L,
                  showSearch: null == V ? void 0 : V.showSearch,
                },
                em,
                {
                  style: Object.assign(
                    Object.assign({}, null == V ? void 0 : V.style),
                    k
                  ),
                  dropdownMatchSelectWidth: ei,
                  transitionName: aT(X, "slide-up", I),
                  builtinPlacements: w || lO(B),
                  listHeight: p,
                  listItemHeight: q,
                  mode: en,
                  prefixCls: U,
                  placement: ex,
                  direction: $,
                  prefix: A,
                  suffixIcon: ed,
                  menuItemSelectedIcon: ef,
                  removeIcon: ep,
                  allowClear: !0 === M ? { clearIcon: eh } : M,
                  notFoundContent: i,
                  className: ey,
                  getPopupContainer: u || N,
                  dropdownClassName: eg,
                  disabled: null != b ? b : eb,
                  dropdownStyle: Object.assign(Object.assign({}, R), {
                    zIndex: ew,
                  }),
                  maxCount: er ? j : void 0,
                  tagRender: er ? F : void 0,
                }
              )
            )
          );
        }),
        sx =
          ((f = (e) => {
            let { prefixCls: t, style: n } = e,
              r = g.useRef(null),
              [o, i] = g.useState(0),
              [a, c] = g.useState(0),
              [l, f] = e4(!1, { value: e.open }),
              { getPrefixCls: p } = g.useContext(tp),
              h = p(s || "select", t);
            g.useEffect(() => {
              if ((f(!0), "undefined" != typeof ResizeObserver)) {
                let e = new ResizeObserver((e) => {
                    let t = e[0].target;
                    i(t.offsetHeight + 8), c(t.offsetWidth);
                  }),
                  t = setInterval(() => {
                    var n;
                    let o = u ? ".".concat(u(h)) : ".".concat(h, "-dropdown"),
                      i =
                        null === (n = r.current) || void 0 === n
                          ? void 0
                          : n.querySelector(o);
                    i && (clearInterval(t), e.observe(i));
                  }, 10);
                return () => {
                  clearInterval(t), e.disconnect();
                };
              }
            }, []);
            let m = Object.assign(Object.assign({}, e), {
              style: Object.assign(Object.assign({}, n), { margin: 0 }),
              open: l,
              visible: l,
              getPopupContainer: () => r.current,
            });
            return (
              d && (m = d(m)),
              g.createElement(
                "div",
                {
                  ref: r,
                  style: {
                    paddingBottom: o,
                    position: "relative",
                    minWidth: a,
                  },
                },
                g.createElement(sy, Object.assign({}, m))
              )
            );
          }),
          (e) =>
            g.createElement(
              a9,
              { theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
              g.createElement(f, Object.assign({}, e))
            ));
      function sw(e) {
        return cu(e, { inputAffixPadding: e.paddingXXS });
      }
      (sy.SECRET_COMBOBOX_MODE_DO_NOT_USE = sb),
        (sy.Option = ae),
        (sy.OptGroup = i7),
        (sy._InternalPanelDoNotUseOrYouWillBeFired = sx);
      let sE = (e) => {
          let {
            controlHeight: t,
            fontSize: n,
            lineHeight: r,
            lineWidth: o,
            controlHeightSM: i,
            controlHeightLG: a,
            fontSizeLG: c,
            lineHeightLG: l,
            paddingSM: s,
            controlPaddingHorizontalSM: u,
            controlPaddingHorizontal: d,
            colorFillAlter: f,
            colorPrimaryHover: p,
            colorPrimary: h,
            controlOutlineWidth: m,
            controlOutline: g,
            colorErrorOutline: v,
            colorWarningOutline: b,
            colorBgContainer: y,
          } = e;
          return {
            paddingBlock: Math.max(
              Math.round(((t - n * r) / 2) * 10) / 10 - o,
              0
            ),
            paddingBlockSM: Math.max(
              Math.round(((i - n * r) / 2) * 10) / 10 - o,
              0
            ),
            paddingBlockLG: Math.ceil(((a - c * l) / 2) * 10) / 10 - o,
            paddingInline: s - o,
            paddingInlineSM: u - o,
            paddingInlineLG: d - o,
            addonBg: f,
            activeBorderColor: h,
            hoverBorderColor: p,
            activeShadow: "0 0 0 ".concat(m, "px ").concat(g),
            errorActiveShadow: "0 0 0 ".concat(m, "px ").concat(v),
            warningActiveShadow: "0 0 0 ".concat(m, "px ").concat(b),
            hoverBg: y,
            activeBg: y,
            inputFontSize: n,
            inputFontSizeLG: c,
            inputFontSizeSM: n,
          };
        },
        sS = (e) => ({
          borderColor: e.hoverBorderColor,
          backgroundColor: e.hoverBg,
        }),
        sC = (e) => ({
          color: e.colorTextDisabled,
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          boxShadow: "none",
          cursor: "not-allowed",
          opacity: 1,
          "input[disabled], textarea[disabled]": { cursor: "not-allowed" },
          "&:hover:not([disabled])": Object.assign(
            {},
            sS(
              cu(e, {
                hoverBorderColor: e.colorBorder,
                hoverBg: e.colorBgContainerDisabled,
              })
            )
          ),
        }),
        sk = (e, t) => ({
          background: e.colorBgContainer,
          borderWidth: e.lineWidth,
          borderStyle: e.lineType,
          borderColor: t.borderColor,
          "&:hover": {
            borderColor: t.hoverBorderColor,
            backgroundColor: e.hoverBg,
          },
          "&:focus, &:focus-within": {
            borderColor: t.activeBorderColor,
            boxShadow: t.activeShadow,
            outline: 0,
            backgroundColor: e.activeBg,
          },
        }),
        sM = (e, t) => ({
          ["&"
            .concat(e.componentCls, "-status-")
            .concat(t.status, ":not(")
            .concat(e.componentCls, "-disabled)")]: Object.assign(
            Object.assign({}, sk(e, t)),
            {
              [""
                .concat(e.componentCls, "-prefix, ")
                .concat(e.componentCls, "-suffix")]: { color: t.affixColor },
            }
          ),
          ["&"
            .concat(e.componentCls, "-status-")
            .concat(t.status)
            .concat(e.componentCls, "-disabled")]: {
            borderColor: t.borderColor,
          },
        }),
        sO = (e, t) => ({
          "&-outlined": Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    sk(e, {
                      borderColor: e.colorBorder,
                      hoverBorderColor: e.hoverBorderColor,
                      activeBorderColor: e.activeBorderColor,
                      activeShadow: e.activeShadow,
                    })
                  ),
                  {
                    ["&".concat(e.componentCls, "-disabled, &[disabled]")]:
                      Object.assign({}, sC(e)),
                  }
                ),
                sM(e, {
                  status: "error",
                  borderColor: e.colorError,
                  hoverBorderColor: e.colorErrorBorderHover,
                  activeBorderColor: e.colorError,
                  activeShadow: e.errorActiveShadow,
                  affixColor: e.colorError,
                })
              ),
              sM(e, {
                status: "warning",
                borderColor: e.colorWarning,
                hoverBorderColor: e.colorWarningBorderHover,
                activeBorderColor: e.colorWarning,
                activeShadow: e.warningActiveShadow,
                affixColor: e.colorWarning,
              })
            ),
            t
          ),
        }),
        sR = (e, t) => ({
          ["&"
            .concat(e.componentCls, "-group-wrapper-status-")
            .concat(t.status)]: {
            ["".concat(e.componentCls, "-group-addon")]: {
              borderColor: t.addonBorderColor,
              color: t.addonColor,
            },
          },
        }),
        sI = (e) => ({
          "&-outlined": Object.assign(
            Object.assign(
              Object.assign(
                {
                  ["".concat(e.componentCls, "-group")]: {
                    "&-addon": {
                      background: e.addonBg,
                      border: ""
                        .concat(tW(e.lineWidth), " ")
                        .concat(e.lineType, " ")
                        .concat(e.colorBorder),
                    },
                    "&-addon:first-child": { borderInlineEnd: 0 },
                    "&-addon:last-child": { borderInlineStart: 0 },
                  },
                },
                sR(e, {
                  status: "error",
                  addonBorderColor: e.colorError,
                  addonColor: e.colorErrorText,
                })
              ),
              sR(e, {
                status: "warning",
                addonBorderColor: e.colorWarning,
                addonColor: e.colorWarningText,
              })
            ),
            {
              ["&".concat(e.componentCls, "-group-wrapper-disabled")]: {
                ["".concat(e.componentCls, "-group-addon")]: Object.assign(
                  {},
                  sC(e)
                ),
              },
            }
          ),
        }),
        sP = (e, t) => {
          let { componentCls: n } = e;
          return {
            "&-borderless": Object.assign(
              {
                background: "transparent",
                border: "none",
                "&:focus, &:focus-within": { outline: "none" },
                ["&".concat(n, "-disabled, &[disabled]")]: {
                  color: e.colorTextDisabled,
                  cursor: "not-allowed",
                },
                ["&".concat(n, "-status-error")]: {
                  "&, & input, & textarea": { color: e.colorError },
                },
                ["&".concat(n, "-status-warning")]: {
                  "&, & input, & textarea": { color: e.colorWarning },
                },
              },
              t
            ),
          };
        },
        sF = (e, t) => ({
          background: t.bg,
          borderWidth: e.lineWidth,
          borderStyle: e.lineType,
          borderColor: "transparent",
          "input&, & input, textarea&, & textarea": {
            color: null == t ? void 0 : t.inputColor,
          },
          "&:hover": { background: t.hoverBg },
          "&:focus, &:focus-within": {
            outline: 0,
            borderColor: t.activeBorderColor,
            backgroundColor: e.activeBg,
          },
        }),
        sj = (e, t) => ({
          ["&"
            .concat(e.componentCls, "-status-")
            .concat(t.status, ":not(")
            .concat(e.componentCls, "-disabled)")]: Object.assign(
            Object.assign({}, sF(e, t)),
            {
              [""
                .concat(e.componentCls, "-prefix, ")
                .concat(e.componentCls, "-suffix")]: { color: t.affixColor },
            }
          ),
        }),
        sA = (e, t) => ({
          "&-filled": Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    sF(e, {
                      bg: e.colorFillTertiary,
                      hoverBg: e.colorFillSecondary,
                      activeBorderColor: e.activeBorderColor,
                    })
                  ),
                  {
                    ["&".concat(e.componentCls, "-disabled, &[disabled]")]:
                      Object.assign({}, sC(e)),
                  }
                ),
                sj(e, {
                  status: "error",
                  bg: e.colorErrorBg,
                  hoverBg: e.colorErrorBgHover,
                  activeBorderColor: e.colorError,
                  inputColor: e.colorErrorText,
                  affixColor: e.colorError,
                })
              ),
              sj(e, {
                status: "warning",
                bg: e.colorWarningBg,
                hoverBg: e.colorWarningBgHover,
                activeBorderColor: e.colorWarning,
                inputColor: e.colorWarningText,
                affixColor: e.colorWarning,
              })
            ),
            t
          ),
        }),
        sT = (e, t) => ({
          ["&"
            .concat(e.componentCls, "-group-wrapper-status-")
            .concat(t.status)]: {
            ["".concat(e.componentCls, "-group-addon")]: {
              background: t.addonBg,
              color: t.addonColor,
            },
          },
        }),
        sN = (e) => ({
          "&-filled": Object.assign(
            Object.assign(
              Object.assign(
                {
                  ["".concat(e.componentCls, "-group")]: {
                    "&-addon": { background: e.colorFillTertiary },
                    ["".concat(
                      e.componentCls,
                      "-filled:not(:focus):not(:focus-within)"
                    )]: {
                      "&:not(:first-child)": {
                        borderInlineStart: ""
                          .concat(tW(e.lineWidth), " ")
                          .concat(e.lineType, " ")
                          .concat(e.colorSplit),
                      },
                      "&:not(:last-child)": {
                        borderInlineEnd: ""
                          .concat(tW(e.lineWidth), " ")
                          .concat(e.lineType, " ")
                          .concat(e.colorSplit),
                      },
                    },
                  },
                },
                sT(e, {
                  status: "error",
                  addonBg: e.colorErrorBg,
                  addonColor: e.colorErrorText,
                })
              ),
              sT(e, {
                status: "warning",
                addonBg: e.colorWarningBg,
                addonColor: e.colorWarningText,
              })
            ),
            {
              ["&".concat(e.componentCls, "-group-wrapper-disabled")]: {
                ["".concat(e.componentCls, "-group")]: {
                  "&-addon": {
                    background: e.colorFillTertiary,
                    color: e.colorTextDisabled,
                  },
                  "&-addon:first-child": {
                    borderInlineStart: ""
                      .concat(tW(e.lineWidth), " ")
                      .concat(e.lineType, " ")
                      .concat(e.colorBorder),
                    borderTop: ""
                      .concat(tW(e.lineWidth), " ")
                      .concat(e.lineType, " ")
                      .concat(e.colorBorder),
                    borderBottom: ""
                      .concat(tW(e.lineWidth), " ")
                      .concat(e.lineType, " ")
                      .concat(e.colorBorder),
                  },
                  "&-addon:last-child": {
                    borderInlineEnd: ""
                      .concat(tW(e.lineWidth), " ")
                      .concat(e.lineType, " ")
                      .concat(e.colorBorder),
                    borderTop: ""
                      .concat(tW(e.lineWidth), " ")
                      .concat(e.lineType, " ")
                      .concat(e.colorBorder),
                    borderBottom: ""
                      .concat(tW(e.lineWidth), " ")
                      .concat(e.lineType, " ")
                      .concat(e.colorBorder),
                  },
                },
              },
            }
          ),
        }),
        s_ = (e) => ({
          "&::-moz-placeholder": { opacity: 1 },
          "&::placeholder": { color: e, userSelect: "none" },
          "&:placeholder-shown": { textOverflow: "ellipsis" },
        }),
        sH = (e) => {
          let {
            paddingBlockLG: t,
            lineHeightLG: n,
            borderRadiusLG: r,
            paddingInlineLG: o,
          } = e;
          return {
            padding: "".concat(tW(t), " ").concat(tW(o)),
            fontSize: e.inputFontSizeLG,
            lineHeight: n,
            borderRadius: r,
          };
        },
        sz = (e) => ({
          padding: ""
            .concat(tW(e.paddingBlockSM), " ")
            .concat(tW(e.paddingInlineSM)),
          fontSize: e.inputFontSizeSM,
          borderRadius: e.borderRadiusSM,
        }),
        sL = (e) =>
          Object.assign(
            Object.assign(
              {
                position: "relative",
                display: "inline-block",
                width: "100%",
                minWidth: 0,
                padding: ""
                  .concat(tW(e.paddingBlock), " ")
                  .concat(tW(e.paddingInline)),
                color: e.colorText,
                fontSize: e.inputFontSize,
                lineHeight: e.lineHeight,
                borderRadius: e.borderRadius,
                transition: "all ".concat(e.motionDurationMid),
              },
              s_(e.colorTextPlaceholder)
            ),
            {
              "textarea&": {
                maxWidth: "100%",
                height: "auto",
                minHeight: e.controlHeight,
                lineHeight: e.lineHeight,
                verticalAlign: "bottom",
                transition: "all ".concat(e.motionDurationSlow, ", height 0s"),
                resize: "vertical",
              },
              "&-lg": Object.assign({}, sH(e)),
              "&-sm": Object.assign({}, sz(e)),
              "&-rtl, &-textarea-rtl": { direction: "rtl" },
            }
          ),
        sD = (e) => {
          let { componentCls: t, antCls: n } = e;
          return {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            "&[class*='col-']": {
              paddingInlineEnd: e.paddingXS,
              "&:last-child": { paddingInlineEnd: 0 },
            },
            ["&-lg ".concat(t, ", &-lg > ").concat(t, "-group-addon")]:
              Object.assign({}, sH(e)),
            ["&-sm ".concat(t, ", &-sm > ").concat(t, "-group-addon")]:
              Object.assign({}, sz(e)),
            ["&-lg "
              .concat(n, "-select-single ")
              .concat(n, "-select-selector")]: { height: e.controlHeightLG },
            ["&-sm "
              .concat(n, "-select-single ")
              .concat(n, "-select-selector")]: { height: e.controlHeightSM },
            ["> ".concat(t)]: {
              display: "table-cell",
              "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
            },
            ["".concat(t, "-group")]: {
              "&-addon, &-wrap": {
                display: "table-cell",
                width: 1,
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
              },
              "&-wrap > *": { display: "block !important" },
              "&-addon": {
                position: "relative",
                padding: "0 ".concat(tW(e.paddingInline)),
                color: e.colorText,
                fontWeight: "normal",
                fontSize: e.inputFontSize,
                textAlign: "center",
                borderRadius: e.borderRadius,
                transition: "all ".concat(e.motionDurationSlow),
                lineHeight: 1,
                ["".concat(n, "-select")]: {
                  margin: ""
                    .concat(
                      tW(e.calc(e.paddingBlock).add(1).mul(-1).equal()),
                      " "
                    )
                    .concat(tW(e.calc(e.paddingInline).mul(-1).equal())),
                  ["&"
                    .concat(n, "-select-single:not(")
                    .concat(n, "-select-customize-input):not(")
                    .concat(n, "-pagination-size-changer)")]: {
                    ["".concat(n, "-select-selector")]: {
                      backgroundColor: "inherit",
                      border: ""
                        .concat(tW(e.lineWidth), " ")
                        .concat(e.lineType, " transparent"),
                      boxShadow: "none",
                    },
                  },
                },
                ["".concat(n, "-cascader-picker")]: {
                  margin: "-9px ".concat(
                    tW(e.calc(e.paddingInline).mul(-1).equal())
                  ),
                  backgroundColor: "transparent",
                  ["".concat(n, "-cascader-input")]: {
                    textAlign: "start",
                    border: 0,
                    boxShadow: "none",
                  },
                },
              },
            },
            [t]: {
              width: "100%",
              marginBottom: 0,
              textAlign: "inherit",
              "&:focus": { zIndex: 1, borderInlineEndWidth: 1 },
              "&:hover": {
                zIndex: 1,
                borderInlineEndWidth: 1,
                ["".concat(t, "-search-with-button &")]: { zIndex: 0 },
              },
            },
            ["> "
              .concat(t, ":first-child, ")
              .concat(t, "-group-addon:first-child")]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              ["".concat(n, "-select ").concat(n, "-select-selector")]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            ["> ".concat(t, "-affix-wrapper")]: {
              ["&:not(:first-child) ".concat(t)]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
              ["&:not(:last-child) ".concat(t)]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            ["> "
              .concat(t, ":last-child, ")
              .concat(t, "-group-addon:last-child")]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
              ["".concat(n, "-select ").concat(n, "-select-selector")]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
            ["".concat(t, "-affix-wrapper")]: {
              "&:not(:last-child)": {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                ["".concat(t, "-search &")]: {
                  borderStartStartRadius: e.borderRadius,
                  borderEndStartRadius: e.borderRadius,
                },
              },
              ["&:not(:first-child), ".concat(
                t,
                "-search &:not(:first-child)"
              )]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
            },
            ["&".concat(t, "-group-compact")]: Object.assign(
              Object.assign({ display: "block" }, aZ()),
              {
                [""
                  .concat(t, "-group-addon, ")
                  .concat(t, "-group-wrap, > ")
                  .concat(t)]: {
                  "&:not(:first-child):not(:last-child)": {
                    borderInlineEndWidth: e.lineWidth,
                    "&:hover, &:focus": { zIndex: 1 },
                  },
                },
                "& > *": {
                  display: "inline-flex",
                  float: "none",
                  verticalAlign: "top",
                  borderRadius: 0,
                },
                ["\n        & > "
                  .concat(t, "-affix-wrapper,\n        & > ")
                  .concat(t, "-number-affix-wrapper,\n        & > ")
                  .concat(n, "-picker-range\n      ")]: {
                  display: "inline-flex",
                },
                "& > *:not(:last-child)": {
                  marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                  borderInlineEndWidth: e.lineWidth,
                },
                [t]: { float: "none" },
                ["& > "
                  .concat(n, "-select > ")
                  .concat(n, "-select-selector,\n      & > ")
                  .concat(n, "-select-auto-complete ")
                  .concat(t, ",\n      & > ")
                  .concat(n, "-cascader-picker ")
                  .concat(t, ",\n      & > ")
                  .concat(t, "-group-wrapper ")
                  .concat(t)]: {
                  borderInlineEndWidth: e.lineWidth,
                  borderRadius: 0,
                  "&:hover, &:focus": { zIndex: 1 },
                },
                ["& > ".concat(n, "-select-focused")]: { zIndex: 1 },
                ["& > ".concat(n, "-select > ").concat(n, "-select-arrow")]: {
                  zIndex: 1,
                },
                ["& > *:first-child,\n      & > "
                  .concat(n, "-select:first-child > ")
                  .concat(n, "-select-selector,\n      & > ")
                  .concat(n, "-select-auto-complete:first-child ")
                  .concat(t, ",\n      & > ")
                  .concat(n, "-cascader-picker:first-child ")
                  .concat(t)]: {
                  borderStartStartRadius: e.borderRadius,
                  borderEndStartRadius: e.borderRadius,
                },
                ["& > *:last-child,\n      & > "
                  .concat(n, "-select:last-child > ")
                  .concat(n, "-select-selector,\n      & > ")
                  .concat(n, "-cascader-picker:last-child ")
                  .concat(t, ",\n      & > ")
                  .concat(n, "-cascader-picker-focused:last-child ")
                  .concat(t)]: {
                  borderInlineEndWidth: e.lineWidth,
                  borderStartEndRadius: e.borderRadius,
                  borderEndEndRadius: e.borderRadius,
                },
                ["& > ".concat(n, "-select-auto-complete ").concat(t)]: {
                  verticalAlign: "top",
                },
                ["".concat(t, "-group-wrapper + ").concat(t, "-group-wrapper")]:
                  {
                    marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
                    ["".concat(t, "-affix-wrapper")]: { borderRadius: 0 },
                  },
                ["".concat(t, "-group-wrapper:not(:last-child)")]: {
                  ["&".concat(t, "-search > ").concat(t, "-group")]: {
                    ["& > "
                      .concat(t, "-group-addon > ")
                      .concat(t, "-search-button")]: { borderRadius: 0 },
                    ["& > ".concat(t)]: {
                      borderStartStartRadius: e.borderRadius,
                      borderStartEndRadius: 0,
                      borderEndEndRadius: 0,
                      borderEndStartRadius: e.borderRadius,
                    },
                  },
                },
              }
            ),
          };
        },
        sB = (e) => {
          let {
              componentCls: t,
              controlHeightSM: n,
              lineWidth: r,
              calc: o,
            } = e,
            i = o(n).sub(o(r).mul(2)).sub(16).div(2).equal();
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({}, aY(e)), sL(e)),
                    sO(e)
                  ),
                  sA(e)
                ),
                sP(e)
              ),
              {
                '&[type="color"]': {
                  height: e.controlHeight,
                  ["&".concat(t, "-lg")]: { height: e.controlHeightLG },
                  ["&".concat(t, "-sm")]: {
                    height: n,
                    paddingTop: i,
                    paddingBottom: i,
                  },
                },
                '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
                  { "-webkit-appearance": "none" },
              }
            ),
          };
        },
        sV = (e) => {
          let { componentCls: t } = e;
          return {
            ["".concat(t, "-clear-icon")]: {
              margin: 0,
              lineHeight: 0,
              color: e.colorTextQuaternary,
              fontSize: e.fontSizeIcon,
              verticalAlign: -1,
              cursor: "pointer",
              transition: "color ".concat(e.motionDurationSlow),
              "&:hover": { color: e.colorTextTertiary },
              "&:active": { color: e.colorText },
              "&-hidden": { visibility: "hidden" },
              "&-has-suffix": { margin: "0 ".concat(tW(e.inputAffixPadding)) },
            },
          };
        },
        sW = (e) => {
          let {
              componentCls: t,
              inputAffixPadding: n,
              colorTextDescription: r,
              motionDurationSlow: o,
              colorIcon: i,
              colorIconHover: a,
              iconCls: c,
            } = e,
            l = "".concat(t, "-affix-wrapper"),
            s = "".concat(t, "-affix-wrapper-disabled");
          return {
            [l]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, sL(e)), {
                  display: "inline-flex",
                  ["&:not(".concat(t, "-disabled):hover")]: {
                    zIndex: 1,
                    ["".concat(t, "-search-with-button &")]: { zIndex: 0 },
                  },
                  "&-focused, &:focus": { zIndex: 1 },
                  ["> input".concat(t)]: { padding: 0 },
                  ["> input".concat(t, ", > textarea").concat(t)]: {
                    fontSize: "inherit",
                    border: "none",
                    borderRadius: 0,
                    outline: "none",
                    background: "transparent",
                    color: "inherit",
                    "&::-ms-reveal": { display: "none" },
                    "&:focus": { boxShadow: "none !important" },
                  },
                  "&::before": {
                    display: "inline-block",
                    width: 0,
                    visibility: "hidden",
                    content: '"\\a0"',
                  },
                  [t]: {
                    "&-prefix, &-suffix": {
                      display: "flex",
                      flex: "none",
                      alignItems: "center",
                      "> *:not(:last-child)": { marginInlineEnd: e.paddingXS },
                    },
                    "&-show-count-suffix": { color: r },
                    "&-show-count-has-suffix": {
                      marginInlineEnd: e.paddingXXS,
                    },
                    "&-prefix": { marginInlineEnd: n },
                    "&-suffix": { marginInlineStart: n },
                  },
                }),
                sV(e)
              ),
              {
                ["".concat(c).concat(t, "-password-icon")]: {
                  color: i,
                  cursor: "pointer",
                  transition: "all ".concat(o),
                  "&:hover": { color: a },
                },
              }
            ),
            [s]: {
              ["".concat(c).concat(t, "-password-icon")]: {
                color: i,
                cursor: "not-allowed",
                "&:hover": { color: i },
              },
            },
          };
        },
        sq = (e) => {
          let { componentCls: t, borderRadiusLG: n, borderRadiusSM: r } = e;
          return {
            ["".concat(t, "-group")]: Object.assign(
              Object.assign(Object.assign({}, aY(e)), sD(e)),
              {
                "&-rtl": { direction: "rtl" },
                "&-wrapper": Object.assign(
                  Object.assign(
                    Object.assign(
                      {
                        display: "inline-block",
                        width: "100%",
                        textAlign: "start",
                        verticalAlign: "top",
                        "&-rtl": { direction: "rtl" },
                        "&-lg": {
                          ["".concat(t, "-group-addon")]: {
                            borderRadius: n,
                            fontSize: e.inputFontSizeLG,
                          },
                        },
                        "&-sm": {
                          ["".concat(t, "-group-addon")]: { borderRadius: r },
                        },
                      },
                      sI(e)
                    ),
                    sN(e)
                  ),
                  {
                    ["&:not("
                      .concat(t, "-compact-first-item):not(")
                      .concat(t, "-compact-last-item)")
                      .concat(t, "-compact-item")]: {
                      ["".concat(t, ", ").concat(t, "-group-addon")]: {
                        borderRadius: 0,
                      },
                    },
                    ["&:not("
                      .concat(t, "-compact-last-item)")
                      .concat(t, "-compact-first-item")]: {
                      ["".concat(t, ", ").concat(t, "-group-addon")]: {
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 0,
                      },
                    },
                    ["&:not("
                      .concat(t, "-compact-first-item)")
                      .concat(t, "-compact-last-item")]: {
                      ["".concat(t, ", ").concat(t, "-group-addon")]: {
                        borderStartStartRadius: 0,
                        borderEndStartRadius: 0,
                      },
                    },
                    ["&:not("
                      .concat(t, "-compact-last-item)")
                      .concat(t, "-compact-item")]: {
                      ["".concat(t, "-affix-wrapper")]: {
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 0,
                      },
                    },
                  }
                ),
              }
            ),
          };
        },
        sU = (e) => {
          let { componentCls: t, antCls: n } = e,
            r = "".concat(t, "-search");
          return {
            [r]: {
              [t]: {
                "&:hover, &:focus": {
                  ["+ "
                    .concat(t, "-group-addon ")
                    .concat(r, "-button:not(")
                    .concat(n, "-btn-primary)")]: {
                    borderInlineStartColor: e.colorPrimaryHover,
                  },
                },
              },
              ["".concat(t, "-affix-wrapper")]: {
                height: e.controlHeight,
                borderRadius: 0,
              },
              ["".concat(t, "-lg")]: {
                lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal(),
              },
              ["> ".concat(t, "-group")]: {
                ["> ".concat(t, "-group-addon:last-child")]: {
                  insetInlineStart: -1,
                  padding: 0,
                  border: 0,
                  ["".concat(r, "-button")]: {
                    marginInlineEnd: -1,
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0,
                    boxShadow: "none",
                  },
                  ["".concat(r, "-button:not(").concat(n, "-btn-primary)")]: {
                    color: e.colorTextDescription,
                    "&:hover": { color: e.colorPrimaryHover },
                    "&:active": { color: e.colorPrimaryActive },
                    ["&".concat(n, "-btn-loading::before")]: {
                      insetInlineStart: 0,
                      insetInlineEnd: 0,
                      insetBlockStart: 0,
                      insetBlockEnd: 0,
                    },
                  },
                },
              },
              ["".concat(r, "-button")]: {
                height: e.controlHeight,
                "&:hover, &:focus": { zIndex: 1 },
              },
              "&-large": {
                ["".concat(t, "-affix-wrapper, ").concat(r, "-button")]: {
                  height: e.controlHeightLG,
                },
              },
              "&-small": {
                ["".concat(t, "-affix-wrapper, ").concat(r, "-button")]: {
                  height: e.controlHeightSM,
                },
              },
              "&-rtl": { direction: "rtl" },
              ["&".concat(t, "-compact-item")]: {
                ["&:not(".concat(t, "-compact-last-item)")]: {
                  ["".concat(t, "-group-addon")]: {
                    ["".concat(t, "-search-button")]: {
                      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                      borderRadius: 0,
                    },
                  },
                },
                ["&:not(".concat(t, "-compact-first-item)")]: {
                  ["".concat(t, ",").concat(t, "-affix-wrapper")]: {
                    borderRadius: 0,
                  },
                },
                ["> "
                  .concat(t, "-group-addon ")
                  .concat(t, "-search-button,\n        > ")
                  .concat(t, ",\n        ")
                  .concat(t, "-affix-wrapper")]: {
                  "&:hover, &:focus, &:active": { zIndex: 2 },
                },
                ["> ".concat(t, "-affix-wrapper-focused")]: { zIndex: 2 },
              },
            },
          };
        },
        sX = (e) => {
          let { componentCls: t, paddingLG: n } = e,
            r = "".concat(t, "-textarea");
          return {
            [r]: {
              position: "relative",
              "&-show-count": {
                ["> ".concat(t)]: { height: "100%" },
                ["".concat(t, "-data-count")]: {
                  position: "absolute",
                  bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
                  insetInlineEnd: 0,
                  color: e.colorTextDescription,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                },
              },
              ["\n        &-allow-clear > "
                .concat(t, ",\n        &-affix-wrapper")
                .concat(r, "-has-feedback ")
                .concat(t, "\n      ")]: { paddingInlineEnd: n },
              ["&-affix-wrapper".concat(t, "-affix-wrapper")]: {
                padding: 0,
                ["> textarea".concat(t)]: {
                  fontSize: "inherit",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  "&:focus": { boxShadow: "none !important" },
                },
                ["".concat(t, "-suffix")]: {
                  margin: 0,
                  "> *:not(:last-child)": { marginInline: 0 },
                  ["".concat(t, "-clear-icon")]: {
                    position: "absolute",
                    insetInlineEnd: e.paddingInline,
                    insetBlockStart: e.paddingXS,
                  },
                  ["".concat(r, "-suffix")]: {
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: e.paddingInline,
                    bottom: 0,
                    zIndex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "auto",
                    pointerEvents: "none",
                  },
                },
              },
              ["&-affix-wrapper".concat(t, "-affix-wrapper-sm")]: {
                ["".concat(t, "-suffix")]: {
                  ["".concat(t, "-clear-icon")]: {
                    insetInlineEnd: e.paddingInlineSM,
                  },
                },
              },
            },
          };
        },
        s$ = (e) => {
          let { componentCls: t } = e;
          return {
            ["".concat(t, "-out-of-range")]: {
              ["&, & input, & textarea, "
                .concat(t, "-show-count-suffix, ")
                .concat(t, "-data-count")]: { color: e.colorError },
            },
          };
        };
      cv(
        "Input",
        (e) => {
          let t = cu(e, sw(e));
          return [sB(t), sX(t), sW(t), sq(t), sU(t), s$(t), lR(t)];
        },
        sE,
        { resetFont: !1 }
      );
      let sK = (e) => {
          let { componentCls: t } = e;
          return {
            ["".concat(t, "-disabled")]: {
              "&, &:hover": {
                cursor: "not-allowed",
                ["".concat(t, "-item-link")]: {
                  color: e.colorTextDisabled,
                  cursor: "not-allowed",
                },
              },
              "&:focus-visible": {
                cursor: "not-allowed",
                ["".concat(t, "-item-link")]: {
                  color: e.colorTextDisabled,
                  cursor: "not-allowed",
                },
              },
            },
            ["&".concat(t, "-disabled")]: {
              cursor: "not-allowed",
              ["".concat(t, "-item")]: {
                cursor: "not-allowed",
                "&:hover, &:active": { backgroundColor: "transparent" },
                a: {
                  color: e.colorTextDisabled,
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "not-allowed",
                },
                "&-active": {
                  borderColor: e.colorBorder,
                  backgroundColor: e.itemActiveBgDisabled,
                  "&:hover, &:active": {
                    backgroundColor: e.itemActiveBgDisabled,
                  },
                  a: { color: e.itemActiveColorDisabled },
                },
              },
              ["".concat(t, "-item-link")]: {
                color: e.colorTextDisabled,
                cursor: "not-allowed",
                "&:hover, &:active": { backgroundColor: "transparent" },
                ["".concat(t, "-simple&")]: {
                  backgroundColor: "transparent",
                  "&:hover, &:active": { backgroundColor: "transparent" },
                },
              },
              ["".concat(t, "-simple-pager")]: { color: e.colorTextDisabled },
              ["".concat(t, "-jump-prev, ").concat(t, "-jump-next")]: {
                ["".concat(t, "-item-link-icon")]: { opacity: 0 },
                ["".concat(t, "-item-ellipsis")]: { opacity: 1 },
              },
            },
            ["&".concat(t, "-simple")]: {
              ["".concat(t, "-prev, ").concat(t, "-next")]: {
                ["&".concat(t, "-disabled ").concat(t, "-item-link")]: {
                  "&:hover, &:active": { backgroundColor: "transparent" },
                },
              },
            },
          };
        },
        sG = (e) => {
          let { componentCls: t } = e;
          return {
            ["&"
              .concat(t, "-mini ")
              .concat(t, "-total-text, &")
              .concat(t, "-mini ")
              .concat(t, "-simple-pager")]: {
              height: e.itemSizeSM,
              lineHeight: tW(e.itemSizeSM),
            },
            ["&".concat(t, "-mini ").concat(t, "-item")]: {
              minWidth: e.itemSizeSM,
              height: e.itemSizeSM,
              margin: 0,
              lineHeight: tW(e.calc(e.itemSizeSM).sub(2).equal()),
            },
            ["&"
              .concat(t, "-mini:not(")
              .concat(t, "-disabled) ")
              .concat(t, "-item:not(")
              .concat(t, "-item-active)")]: {
              backgroundColor: "transparent",
              borderColor: "transparent",
              "&:hover": { backgroundColor: e.colorBgTextHover },
              "&:active": { backgroundColor: e.colorBgTextActive },
            },
            ["&"
              .concat(t, "-mini ")
              .concat(t, "-prev, &")
              .concat(t, "-mini ")
              .concat(t, "-next")]: {
              minWidth: e.itemSizeSM,
              height: e.itemSizeSM,
              margin: 0,
              lineHeight: tW(e.itemSizeSM),
            },
            ["&".concat(t, "-mini:not(").concat(t, "-disabled)")]: {
              ["".concat(t, "-prev, ").concat(t, "-next")]: {
                ["&:hover ".concat(t, "-item-link")]: {
                  backgroundColor: e.colorBgTextHover,
                },
                ["&:active ".concat(t, "-item-link")]: {
                  backgroundColor: e.colorBgTextActive,
                },
                ["&".concat(t, "-disabled:hover ").concat(t, "-item-link")]: {
                  backgroundColor: "transparent",
                },
              },
            },
            ["\n    &"
              .concat(t, "-mini ")
              .concat(t, "-prev ")
              .concat(t, "-item-link,\n    &")
              .concat(t, "-mini ")
              .concat(t, "-next ")
              .concat(t, "-item-link\n    ")]: {
              backgroundColor: "transparent",
              borderColor: "transparent",
              "&::after": {
                height: e.itemSizeSM,
                lineHeight: tW(e.itemSizeSM),
              },
            },
            ["&"
              .concat(t, "-mini ")
              .concat(t, "-jump-prev, &")
              .concat(t, "-mini ")
              .concat(t, "-jump-next")]: {
              height: e.itemSizeSM,
              marginInlineEnd: 0,
              lineHeight: tW(e.itemSizeSM),
            },
            ["&".concat(t, "-mini ").concat(t, "-options")]: {
              marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
              "&-size-changer": { top: e.miniOptionsSizeChangerTop },
              "&-quick-jumper": {
                height: e.itemSizeSM,
                lineHeight: tW(e.itemSizeSM),
                input: Object.assign(Object.assign({}, sz(e)), {
                  width: e.paginationMiniQuickJumperInputWidth,
                  height: e.controlHeightSM,
                }),
              },
            },
          };
        },
        sY = (e) => {
          let { componentCls: t } = e;
          return {
            ["\n    &"
              .concat(t, "-simple ")
              .concat(t, "-prev,\n    &")
              .concat(t, "-simple ")
              .concat(t, "-next\n    ")]: {
              height: e.itemSizeSM,
              lineHeight: tW(e.itemSizeSM),
              verticalAlign: "top",
              ["".concat(t, "-item-link")]: {
                height: e.itemSizeSM,
                backgroundColor: "transparent",
                border: 0,
                "&:hover": { backgroundColor: e.colorBgTextHover },
                "&:active": { backgroundColor: e.colorBgTextActive },
                "&::after": {
                  height: e.itemSizeSM,
                  lineHeight: tW(e.itemSizeSM),
                },
              },
            },
            ["&".concat(t, "-simple ").concat(t, "-simple-pager")]: {
              display: "inline-block",
              height: e.itemSizeSM,
              marginInlineEnd: e.marginXS,
              input: {
                boxSizing: "border-box",
                height: "100%",
                padding: "0 ".concat(tW(e.paginationItemPaddingInline)),
                textAlign: "center",
                backgroundColor: e.itemInputBg,
                border: ""
                  .concat(tW(e.lineWidth), " ")
                  .concat(e.lineType, " ")
                  .concat(e.colorBorder),
                borderRadius: e.borderRadius,
                outline: "none",
                transition: "border-color ".concat(e.motionDurationMid),
                color: "inherit",
                "&:hover": { borderColor: e.colorPrimary },
                "&:focus": {
                  borderColor: e.colorPrimaryHover,
                  boxShadow: ""
                    .concat(tW(e.inputOutlineOffset), " 0 ")
                    .concat(tW(e.controlOutlineWidth), " ")
                    .concat(e.controlOutline),
                },
                "&[disabled]": {
                  color: e.colorTextDisabled,
                  backgroundColor: e.colorBgContainerDisabled,
                  borderColor: e.colorBorder,
                  cursor: "not-allowed",
                },
              },
            },
          };
        },
        sQ = (e) => {
          let { componentCls: t } = e;
          return {
            ["".concat(t, "-jump-prev, ").concat(t, "-jump-next")]: {
              outline: 0,
              ["".concat(t, "-item-container")]: {
                position: "relative",
                ["".concat(t, "-item-link-icon")]: {
                  color: e.colorPrimary,
                  fontSize: e.fontSizeSM,
                  opacity: 0,
                  transition: "all ".concat(e.motionDurationMid),
                  "&-svg": {
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    margin: "auto",
                  },
                },
                ["".concat(t, "-item-ellipsis")]: {
                  position: "absolute",
                  top: 0,
                  insetInlineEnd: 0,
                  bottom: 0,
                  insetInlineStart: 0,
                  display: "block",
                  margin: "auto",
                  color: e.colorTextDisabled,
                  letterSpacing: e.paginationEllipsisLetterSpacing,
                  textAlign: "center",
                  textIndent: e.paginationEllipsisTextIndent,
                  opacity: 1,
                  transition: "all ".concat(e.motionDurationMid),
                },
              },
              "&:hover": {
                ["".concat(t, "-item-link-icon")]: { opacity: 1 },
                ["".concat(t, "-item-ellipsis")]: { opacity: 0 },
              },
            },
            ["\n    "
              .concat(t, "-prev,\n    ")
              .concat(t, "-jump-prev,\n    ")
              .concat(t, "-jump-next\n    ")]: { marginInlineEnd: e.marginXS },
            ["\n    "
              .concat(t, "-prev,\n    ")
              .concat(t, "-next,\n    ")
              .concat(t, "-jump-prev,\n    ")
              .concat(t, "-jump-next\n    ")]: {
              display: "inline-block",
              minWidth: e.itemSize,
              height: e.itemSize,
              color: e.colorText,
              fontFamily: e.fontFamily,
              lineHeight: tW(e.itemSize),
              textAlign: "center",
              verticalAlign: "middle",
              listStyle: "none",
              borderRadius: e.borderRadius,
              cursor: "pointer",
              transition: "all ".concat(e.motionDurationMid),
            },
            ["".concat(t, "-prev, ").concat(t, "-next")]: {
              outline: 0,
              button: {
                color: e.colorText,
                cursor: "pointer",
                userSelect: "none",
              },
              ["".concat(t, "-item-link")]: {
                display: "block",
                width: "100%",
                height: "100%",
                padding: 0,
                fontSize: e.fontSizeSM,
                textAlign: "center",
                backgroundColor: "transparent",
                border: ""
                  .concat(tW(e.lineWidth), " ")
                  .concat(e.lineType, " transparent"),
                borderRadius: e.borderRadius,
                outline: "none",
                transition: "all ".concat(e.motionDurationMid),
              },
              ["&:hover ".concat(t, "-item-link")]: {
                backgroundColor: e.colorBgTextHover,
              },
              ["&:active ".concat(t, "-item-link")]: {
                backgroundColor: e.colorBgTextActive,
              },
              ["&".concat(t, "-disabled:hover")]: {
                ["".concat(t, "-item-link")]: {
                  backgroundColor: "transparent",
                },
              },
            },
            ["".concat(t, "-slash")]: {
              marginInlineEnd: e.paginationSlashMarginInlineEnd,
              marginInlineStart: e.paginationSlashMarginInlineStart,
            },
            ["".concat(t, "-options")]: {
              display: "inline-block",
              marginInlineStart: e.margin,
              verticalAlign: "middle",
              "&-size-changer": { display: "inline-block", width: "auto" },
              "&-quick-jumper": {
                display: "inline-block",
                height: e.controlHeight,
                marginInlineStart: e.marginXS,
                lineHeight: tW(e.controlHeight),
                verticalAlign: "top",
                input: Object.assign(
                  Object.assign(
                    Object.assign({}, sL(e)),
                    sk(e, {
                      borderColor: e.colorBorder,
                      hoverBorderColor: e.colorPrimaryHover,
                      activeBorderColor: e.colorPrimary,
                      activeShadow: e.activeShadow,
                    })
                  ),
                  {
                    "&[disabled]": Object.assign({}, sC(e)),
                    width: e.calc(e.controlHeightLG).mul(1.25).equal(),
                    height: e.controlHeight,
                    boxSizing: "border-box",
                    margin: 0,
                    marginInlineStart: e.marginXS,
                    marginInlineEnd: e.marginXS,
                  }
                ),
              },
            },
          };
        },
        sZ = (e) => {
          let { componentCls: t } = e;
          return {
            ["".concat(t, "-item")]: {
              display: "inline-block",
              minWidth: e.itemSize,
              height: e.itemSize,
              marginInlineEnd: e.marginXS,
              fontFamily: e.fontFamily,
              lineHeight: tW(e.calc(e.itemSize).sub(2).equal()),
              textAlign: "center",
              verticalAlign: "middle",
              listStyle: "none",
              backgroundColor: e.itemBg,
              border: ""
                .concat(tW(e.lineWidth), " ")
                .concat(e.lineType, " transparent"),
              borderRadius: e.borderRadius,
              outline: 0,
              cursor: "pointer",
              userSelect: "none",
              a: {
                display: "block",
                padding: "0 ".concat(tW(e.paginationItemPaddingInline)),
                color: e.colorText,
                "&:hover": { textDecoration: "none" },
              },
              ["&:not(".concat(t, "-item-active)")]: {
                "&:hover": {
                  transition: "all ".concat(e.motionDurationMid),
                  backgroundColor: e.colorBgTextHover,
                },
                "&:active": { backgroundColor: e.colorBgTextActive },
              },
              "&-active": {
                fontWeight: e.fontWeightStrong,
                backgroundColor: e.itemActiveBg,
                borderColor: e.colorPrimary,
                a: { color: e.colorPrimary },
                "&:hover": { borderColor: e.colorPrimaryHover },
                "&:hover a": { color: e.colorPrimaryHover },
              },
            },
          };
        },
        sJ = (e) => {
          let { componentCls: t } = e;
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(Object.assign({}, aY(e)), {
                          display: "flex",
                          "&-start": { justifyContent: "start" },
                          "&-center": { justifyContent: "center" },
                          "&-end": { justifyContent: "end" },
                          "ul, ol": {
                            margin: 0,
                            padding: 0,
                            listStyle: "none",
                          },
                          "&::after": {
                            display: "block",
                            clear: "both",
                            height: 0,
                            overflow: "hidden",
                            visibility: "hidden",
                            content: '""',
                          },
                          ["".concat(t, "-total-text")]: {
                            display: "inline-block",
                            height: e.itemSize,
                            marginInlineEnd: e.marginXS,
                            lineHeight: tW(e.calc(e.itemSize).sub(2).equal()),
                            verticalAlign: "middle",
                          },
                        }),
                        sZ(e)
                      ),
                      sQ(e)
                    ),
                    sY(e)
                  ),
                  sG(e)
                ),
                sK(e)
              ),
              {
                ["@media only screen and (max-width: ".concat(
                  e.screenLG,
                  "px)"
                )]: {
                  ["".concat(t, "-item")]: {
                    "&-after-jump-prev, &-before-jump-next": {
                      display: "none",
                    },
                  },
                },
                ["@media only screen and (max-width: ".concat(
                  e.screenSM,
                  "px)"
                )]: { ["".concat(t, "-options")]: { display: "none" } },
              }
            ),
            ["&".concat(e.componentCls, "-rtl")]: { direction: "rtl" },
          };
        },
        s0 = (e) => {
          let { componentCls: t } = e;
          return {
            ["".concat(t, ":not(").concat(t, "-disabled)")]: {
              ["".concat(t, "-item")]: Object.assign({}, a1(e)),
              ["".concat(t, "-jump-prev, ").concat(t, "-jump-next")]: {
                "&:focus-visible": Object.assign(
                  {
                    ["".concat(t, "-item-link-icon")]: { opacity: 1 },
                    ["".concat(t, "-item-ellipsis")]: { opacity: 0 },
                  },
                  a0(e)
                ),
              },
              ["".concat(t, "-prev, ").concat(t, "-next")]: {
                ["&:focus-visible ".concat(t, "-item-link")]: Object.assign(
                  {},
                  a0(e)
                ),
              },
            },
          };
        },
        s1 = (e) =>
          Object.assign(
            {
              itemBg: e.colorBgContainer,
              itemSize: e.controlHeight,
              itemSizeSM: e.controlHeightSM,
              itemActiveBg: e.colorBgContainer,
              itemLinkBg: e.colorBgContainer,
              itemActiveColorDisabled: e.colorTextDisabled,
              itemActiveBgDisabled: e.controlItemBgActiveDisabled,
              itemInputBg: e.colorBgContainer,
              miniOptionsSizeChangerTop: 0,
            },
            sE(e)
          ),
        s2 = (e) =>
          cu(
            e,
            {
              inputOutlineOffset: 0,
              paginationMiniOptionsMarginInlineStart: e
                .calc(e.marginXXS)
                .div(2)
                .equal(),
              paginationMiniQuickJumperInputWidth: e
                .calc(e.controlHeightLG)
                .mul(1.1)
                .equal(),
              paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
              paginationEllipsisLetterSpacing: e
                .calc(e.marginXXS)
                .div(2)
                .equal(),
              paginationSlashMarginInlineStart: e.marginSM,
              paginationSlashMarginInlineEnd: e.marginSM,
              paginationEllipsisTextIndent: "0.13em",
            },
            sw(e)
          );
      var s5 = cv(
        "Pagination",
        (e) => {
          let t = s2(e);
          return [sJ(t), s0(t)];
        },
        s1
      );
      let s6 = (e) => {
        let { componentCls: t } = e;
        return {
          [""
            .concat(t)
            .concat(t, "-bordered")
            .concat(t, "-disabled:not(")
            .concat(t, "-mini)")]: {
            "&, &:hover": {
              ["".concat(t, "-item-link")]: { borderColor: e.colorBorder },
            },
            "&:focus-visible": {
              ["".concat(t, "-item-link")]: { borderColor: e.colorBorder },
            },
            ["".concat(t, "-item, ").concat(t, "-item-link")]: {
              backgroundColor: e.colorBgContainerDisabled,
              borderColor: e.colorBorder,
              ["&:hover:not(".concat(t, "-item-active)")]: {
                backgroundColor: e.colorBgContainerDisabled,
                borderColor: e.colorBorder,
                a: { color: e.colorTextDisabled },
              },
              ["&".concat(t, "-item-active")]: {
                backgroundColor: e.itemActiveBgDisabled,
              },
            },
            ["".concat(t, "-prev, ").concat(t, "-next")]: {
              "&:hover button": {
                backgroundColor: e.colorBgContainerDisabled,
                borderColor: e.colorBorder,
                color: e.colorTextDisabled,
              },
              ["".concat(t, "-item-link")]: {
                backgroundColor: e.colorBgContainerDisabled,
                borderColor: e.colorBorder,
              },
            },
          },
          ["".concat(t).concat(t, "-bordered:not(").concat(t, "-mini)")]: {
            ["".concat(t, "-prev, ").concat(t, "-next")]: {
              "&:hover button": {
                borderColor: e.colorPrimaryHover,
                backgroundColor: e.itemBg,
              },
              ["".concat(t, "-item-link")]: {
                backgroundColor: e.itemLinkBg,
                borderColor: e.colorBorder,
              },
              ["&:hover ".concat(t, "-item-link")]: {
                borderColor: e.colorPrimary,
                backgroundColor: e.itemBg,
                color: e.colorPrimary,
              },
              ["&".concat(t, "-disabled")]: {
                ["".concat(t, "-item-link")]: {
                  borderColor: e.colorBorder,
                  color: e.colorTextDisabled,
                },
              },
            },
            ["".concat(t, "-item")]: {
              backgroundColor: e.itemBg,
              border: ""
                .concat(tW(e.lineWidth), " ")
                .concat(e.lineType, " ")
                .concat(e.colorBorder),
              ["&:hover:not(".concat(t, "-item-active)")]: {
                borderColor: e.colorPrimary,
                backgroundColor: e.itemBg,
                a: { color: e.colorPrimary },
              },
              "&-active": { borderColor: e.colorPrimary },
            },
          },
        };
      };
      var s3 = cy(["Pagination", "bordered"], (e) => [s6(s2(e))], s1);
      function s4(e) {
        return (0, g.useMemo)(
          () =>
            "boolean" == typeof e
              ? [e, {}]
              : e && "object" == typeof e
              ? [!0, e]
              : [void 0, void 0],
          [e]
        );
      }
      var s9 = function (e, t) {
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
        },
        s8 = (e) => {
          let {
              align: t,
              prefixCls: n,
              selectPrefixCls: r,
              className: o,
              rootClassName: i,
              style: a,
              size: c,
              locale: l,
              responsive: s,
              showSizeChanger: u,
              selectComponentClass: d,
              pageSizeOptions: f,
            } = e,
            p = s9(e, [
              "align",
              "prefixCls",
              "selectPrefixCls",
              "className",
              "rootClassName",
              "style",
              "size",
              "locale",
              "responsive",
              "showSizeChanger",
              "selectComponentClass",
              "pageSizeOptions",
            ]),
            { xs: h } = ru(s),
            [, m] = ra(),
            {
              getPrefixCls: v,
              direction: b,
              pagination: y = {},
            } = g.useContext(tp),
            x = v("pagination", n),
            [w, E, S] = s5(x),
            C = tv(c),
            k = "small" === C || !!(h && !C && s),
            [M] = rv("Pagination", tu),
            O = Object.assign(Object.assign({}, M), l),
            [R, I] = s4(u),
            [F, j] = s4(y.showSizeChanger),
            A = null != I ? I : j,
            T = d || sy,
            N = g.useMemo(() => (f ? f.map((e) => Number(e)) : void 0), [f]),
            _ = g.useMemo(() => {
              let e = g.createElement(
                  "span",
                  { className: "".concat(x, "-item-ellipsis") },
                  "•••"
                ),
                t = g.createElement(
                  "button",
                  {
                    className: "".concat(x, "-item-link"),
                    type: "button",
                    tabIndex: -1,
                  },
                  "rtl" === b
                    ? g.createElement(eJ, null)
                    : g.createElement(eQ, null)
                );
              return {
                prevIcon: t,
                nextIcon: g.createElement(
                  "button",
                  {
                    className: "".concat(x, "-item-link"),
                    type: "button",
                    tabIndex: -1,
                  },
                  "rtl" === b
                    ? g.createElement(eQ, null)
                    : g.createElement(eJ, null)
                ),
                jumpPrevIcon: g.createElement(
                  "a",
                  { className: "".concat(x, "-item-link") },
                  g.createElement(
                    "div",
                    { className: "".concat(x, "-item-container") },
                    "rtl" === b
                      ? g.createElement(eG, {
                          className: "".concat(x, "-item-link-icon"),
                        })
                      : g.createElement(e$, {
                          className: "".concat(x, "-item-link-icon"),
                        }),
                    e
                  )
                ),
                jumpNextIcon: g.createElement(
                  "a",
                  { className: "".concat(x, "-item-link") },
                  g.createElement(
                    "div",
                    { className: "".concat(x, "-item-container") },
                    "rtl" === b
                      ? g.createElement(e$, {
                          className: "".concat(x, "-item-link-icon"),
                        })
                      : g.createElement(eG, {
                          className: "".concat(x, "-item-link-icon"),
                        }),
                    e
                  )
                ),
              };
            }, [b, x]),
            H = v("select", r),
            z = P()(
              {
                ["".concat(x, "-").concat(t)]: !!t,
                ["".concat(x, "-mini")]: k,
                ["".concat(x, "-rtl")]: "rtl" === b,
                ["".concat(x, "-bordered")]: m.wireframe,
              },
              null == y ? void 0 : y.className,
              o,
              i,
              E,
              S
            ),
            L = Object.assign(
              Object.assign({}, null == y ? void 0 : y.style),
              a
            );
          return w(
            g.createElement(
              g.Fragment,
              null,
              m.wireframe && g.createElement(s3, { prefixCls: x }),
              g.createElement(
                ts,
                Object.assign({}, _, p, {
                  style: L,
                  prefixCls: x,
                  selectPrefixCls: H,
                  className: z,
                  locale: O,
                  pageSizeOptions: N,
                  showSizeChanger: null != R ? R : F,
                  sizeChangerRender: (e) => {
                    var t;
                    let {
                        disabled: n,
                        size: r,
                        onSizeChange: o,
                        "aria-label": i,
                        className: a,
                        options: c,
                      } = e,
                      { className: l, onChange: s } = A || {},
                      u =
                        null ===
                          (t = c.find((e) => String(e.value) === String(r))) ||
                        void 0 === t
                          ? void 0
                          : t.value;
                    return g.createElement(
                      T,
                      Object.assign(
                        {
                          disabled: n,
                          showSearch: !0,
                          popupMatchSelectWidth: !1,
                          getPopupContainer: (e) => e.parentNode,
                          "aria-label": i,
                          options: c,
                        },
                        A,
                        {
                          value: u,
                          onChange: (e, t) => {
                            null == o || o(e), null == s || s(e, t);
                          },
                          size: k ? "small" : "middle",
                          className: P()(a, l),
                        }
                      )
                    );
                  },
                })
              )
            )
          );
        };
    },
    4604: function (e, t) {
      "use strict";
      var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        s = Symbol.for("react.server_context"),
        u = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        f = Symbol.for("react.suspense_list"),
        p = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy");
      Symbol.for("react.offscreen"),
        Symbol.for("react.module.reference"),
        (t.ForwardRef = u),
        (t.isMemo = function (e) {
          return (
            (function (e) {
              if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                  case n:
                    switch ((e = e.type)) {
                      case o:
                      case a:
                      case i:
                      case d:
                      case f:
                        return e;
                      default:
                        switch ((e = e && e.$$typeof)) {
                          case s:
                          case l:
                          case u:
                          case h:
                          case p:
                          case c:
                            return e;
                          default:
                            return t;
                        }
                    }
                  case r:
                    return t;
                }
              }
            })(e) === p
          );
        });
    },
    9553: function (e, t, n) {
      "use strict";
      e.exports = n(4604);
    },
    6800: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n &&
              (e = i(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return o.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
                  return t;
                })(n)
              ));
          }
          return e;
        }
        function i(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 !==
              (n = function () {
                return o;
              }.apply(t, [])) && (e.exports = n);
      })();
    },
  },
]);
