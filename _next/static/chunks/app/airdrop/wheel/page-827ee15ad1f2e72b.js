(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [690],
  {
    8973: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 8173, 23)),
        Promise.resolve().then(n.bind(n, 912)),
        Promise.resolve().then(n.bind(n, 1481)),
        Promise.resolve().then(n.bind(n, 992)),
        Promise.resolve().then(n.bind(n, 2882)),
        Promise.resolve().then(n.bind(n, 5638)),
        Promise.resolve().then(n.bind(n, 6229)),
        Promise.resolve().then(n.bind(n, 5172));
    },
    6710: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(7437),
        l = n(2665),
        i = n(3110),
        r = n(3592);
      function a(e) {
        let {
            balance: t,
            token: n,
            suffix: a,
            decimalScale: o,
            className: d,
          } = e,
          c = "string" == typeof n ? i.no[n] : n,
          u = (0, i.NV)(c, t),
          x = c ? c.DisplayDecimalScale : r.bt;
        return (
          o && o > 0 && (x = o),
          (0, s.jsx)(l.h3, {
            value: u,
            className: d,
            displayType: "text",
            decimalScale: x,
            thousandSeparator: ",",
            suffix: a,
          })
        );
      }
    },
    7058: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(7437),
        l = n(3592),
        i = n(3110),
        r = n(2665);
      function a(e) {
        let { balance: t, token: n, suffix: a, decimalScale: o } = e,
          d = "string" == typeof n ? i.no[n] : n,
          c = (0, i.NV)(d, t),
          u = d ? d.DisplayDecimalScale : l.bt;
        return (
          o && o > 0 && (u = o),
          (0, s.jsx)(s.Fragment, {
            children:
              c > 1e3
                ? (0, l.uf)(c)
                : (0, s.jsx)(r.h3, {
                    value: c,
                    displayType: "text",
                    decimalScale: u,
                    thousandSeparator: ",",
                    suffix: a,
                  }),
          })
        );
      }
    },
    9388: function (e, t, n) {
      "use strict";
      n.d(t, {
        Rs: function () {
          return d;
        },
        kI: function () {
          return c;
        },
      });
      var s = n(7603),
        l = n(3592),
        i = n(9597),
        r = n(8378),
        a = n(1617),
        o = n(3110);
      let d = (e) => {
        let t = new s.Z(e.balance),
          n = (0, o.w4)(e.address, e.balance);
        return {
          id: e.id,
          symbol: e.symbol,
          address: e.address,
          balance: t.toFixed(l.bt),
          rawBalance: t,
          balanceString: n,
        };
      };
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          {
            data: t,
            error: n,
            isLoading: s,
            mutate: l,
          } = (0, a.ZP)("/meshmain/wallet/tokens", async (e) => {
            try {
              return (await (0, r._i)(e)).data.data;
            } catch (e) {
              throw (0, i.C)(e);
            }
          }),
          o = null;
        if (e && t) {
          let n = t.findIndex((t) => t.address == e);
          o = t[n];
        }
        return { tokens: t, foundToken: o, loading: s, error: n, mutate: l };
      }
    },
    7157: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var s = n(1617),
        l = n(8378),
        i = n(9597);
      let r = () => "/meshmain/lucky-wheel";
      function a() {
        var e, t, n, a;
        let {
            data: o,
            error: d,
            isLoading: c,
            mutate: u,
          } = (0, s.ZP)(r(), async (e) => {
            try {
              return (await (0, l._i)(e)).data;
            } catch (e) {
              throw (0, i.C)(e);
            }
          }),
          x = null == o ? void 0 : o.totalSpin,
          m =
            null == o
              ? void 0
              : null === (e = o.round) || void 0 === e
              ? void 0
              : e.spinStartTime,
          p =
            null == o
              ? void 0
              : null === (t = o.round) || void 0 === t
              ? void 0
              : t.spinEndTime,
          h =
            null == o
              ? void 0
              : null === (n = o.round) || void 0 === n
              ? void 0
              : n.spinInterval;
        return {
          totalSpin: x,
          spinStartTime: m,
          spinEndTime: p,
          spinInterval: h,
          maxSpinPerUser:
            (null == o
              ? void 0
              : null === (a = o.round) || void 0 === a
              ? void 0
              : a.maxSpinPerUser) || 0,
          loading: c,
          allTotalPrizes: null == o ? void 0 : o.totalPrizes,
          totalRecentRoundPrizes: null == o ? void 0 : o.totalRecentRoundPrizes,
          error: d,
          mutate: u,
        };
      }
    },
    8379: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return a;
        },
      });
      var s = n(1617),
        l = n(8378),
        i = n(9597);
      let r = () => "/meshmain/lucky-wheel/history/all";
      function a() {
        let {
          data: e,
          error: t,
          isLoading: n,
          mutate: a,
        } = (0, s.ZP)(r(), async (e) => {
          try {
            return (await (0, l._i)(e)).data;
          } catch (e) {
            throw (0, i.C)(e);
          }
        });
        return {
          histories: (null == e ? void 0 : e.histories) || [],
          pagination: {
            page: (null == e ? void 0 : e.page) || 1,
            pageSize: (null == e ? void 0 : e.pageSize) || 100,
            totalCount: (null == e ? void 0 : e.totalCount) || 100,
            totalPages: (null == e ? void 0 : e.totalPages) || 100,
          },
          loading: n,
          error: t,
          mutate: a,
        };
      }
    },
    4087: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var s = n(1617),
        l = n(8378),
        i = n(9597);
      let r = () => "/meshmain/lucky-wheel/next-round";
      function a() {
        let {
            data: e,
            error: t,
            isLoading: n,
            mutate: a,
          } = (0, s.ZP)(r(), async (e) => {
            try {
              return (await (0, l._i)(e)).data;
            } catch (e) {
              throw (0, i.C)(e);
            }
          }),
          o = null == e ? void 0 : e.spinStartTime,
          d = null == e ? void 0 : e.spinEndTime,
          c = (null == e ? void 0 : e.maxSpinPerUser) || 0,
          u = null == e ? void 0 : e.spinInterval,
          x = (null == e ? void 0 : e.userCurrentSpin) || 0,
          m = (null == e ? void 0 : e.amountPerSpin) || 100,
          p = null == e ? void 0 : e.spinDayOfWeek;
        return {
          spinStartTime: o,
          spinEndTime: d,
          spinDayOfWeek: p,
          amountPerSpin: m,
          userCurrentSpin: x,
          spinInterval: u,
          maxSpinPerUser: c,
          nextSpinTime: (null == e ? void 0 : e.nextSpinTime) || 0,
          loading: n,
          totalPrizes: null == e ? void 0 : e.totalPrizes,
          userTotalSpin: (null == e ? void 0 : e.userTotalSpin) || 0,
          error: t,
          mutate: a,
        };
      }
    },
    3447: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return a;
        },
      });
      var s = n(9597),
        l = n(8378),
        i = n(2265),
        r = n(1617);
      function a() {
        let [e, t] = (0, i.useState)(!0),
          { data: n, mutate: a } = (0, r.ZP)(
            "/meshmain/user/profile",
            async function (e) {
              try {
                return t(!0), (await (0, l._i)(e)).data;
              } catch (e) {
                throw (0, s.C)(e);
              } finally {
                t(!1);
              }
            }
          );
        return {
          userProfile: (null == n ? void 0 : n.id) ? n : void 0,
          loading: e,
          mutate: a,
        };
      }
    },
    5666: function (e, t, n) {
      "use strict";
      n.d(t, {
        MusicProvider: function () {
          return r;
        },
        u: function () {
          return a;
        },
      });
      var s = n(7437),
        l = n(2265);
      let i = (0, l.createContext)(void 0),
        r = (e) => {
          let { children: t } = e,
            [n, r] = (0, l.useState)(!1);
          return (0, s.jsx)(i.Provider, {
            value: { stopMusic: n, setStopMusic: r },
            children: t,
          });
        },
        a = () => {
          let e = (0, l.useContext)(i);
          if (!e) throw Error("useMusic must be used within a MusicProvider");
          return e;
        };
    },
    9597: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return l;
        },
      });
      var s = n(8472);
      function l(e) {
        let { message: t } = (function (e) {
          let t = "An error occurred, please try again",
            n = 500,
            l = "UNKNOWN_ERROR";
          if (s.Z.isAxiosError(e)) {
            var i, r, a;
            (t =
              null === (i = e.response) || void 0 === i
                ? void 0
                : i.data.message),
              (l =
                null === (r = e.response) || void 0 === r
                  ? void 0
                  : r.data.code),
              (n =
                (null === (a = e.response) || void 0 === a
                  ? void 0
                  : a.status) || 500);
          } else e instanceof Error && (t = e.message);
          return { message: t, code: l, status: n };
        })(e);
        return Error(t);
      }
    },
    8378: function (e, t, n) {
      "use strict";
      n.d(t, {
        CL: function () {
          return u;
        },
        _i: function () {
          return c;
        },
      });
      var s = n(8472);
      let l = "https://api.meshchain.ai",
        i = !1,
        r = [],
        a = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          r.forEach((n) => {
            e ? n.reject(e) : n.resolve(t);
          }),
            (r = []);
        },
        o = s.Z.create({ baseURL: l });
      async function d() {
        let e = sessionStorage.getItem("refresh_token");
        if (!e) throw Error("No refresh token available");
        let { access_token: t, refresh_token: n } = (
          await s.Z.post("".concat(l, "/meshmain/auth/refresh-token"), {
            refresh_token: e,
          })
        ).data;
        return (
          sessionStorage.setItem("access_token", t),
          sessionStorage.setItem("refresh_token", n),
          t
        );
      }
      async function c(e) {
        return await o.get(e);
      }
      async function u(e, t, n) {
        return await o.post(e, t, n ? { headers: n } : {});
      }
      o.interceptors.request.use(
        (e) => {
          let t = sessionStorage.getItem("access_token");
          return (
            t && !e.headers.Authorization
              ? (e.headers.Authorization = "Bearer ".concat(t))
              : t || delete e.headers.Authorization,
            e
          );
        },
        (e) => Promise.reject(e)
      ),
        o.interceptors.response.use(
          (e) => e,
          async (e) => {
            var t;
            let n = e.config,
              s =
                (null === (t = e.response.data) || void 0 === t
                  ? void 0
                  : t.code) || "";
            return 401 !== e.response.status || "40100002" !== s || n._retry
              ? Promise.reject(e)
              : ((n._retry = !0), i)
              ? new Promise(function (e, t) {
                  r.push({ resolve: e, reject: t });
                })
                  .then(
                    (e) => ((n.headers.Authorization = "Bearer " + e), o(n))
                  )
                  .catch((e) => Promise.reject(e))
              : ((i = !0),
                console.log("refreshing access token"),
                new Promise(function (e, t) {
                  d()
                    .then((t) => {
                      (n.headers.Authorization = "Bearer " + t),
                        a(null, t),
                        e(o(n));
                    })
                    .catch((e) => {
                      a(e, null), t(e);
                    })
                    .finally(() => {
                      i = !1;
                    });
                }));
          }
        );
    },
    7643: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return s;
        },
        U: function () {
          return l;
        },
      });
      let s = (e) => (e ? e.charAt(0).toUpperCase() : "A"),
        l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          if (e.length <= t) return e;
          let n = e.slice(0, t);
          return "".concat(n, "...");
        };
    },
    3592: function (e, t, n) {
      "use strict";
      n.d(t, {
        bt: function () {
          return s;
        },
        dl: function () {
          return l;
        },
        uf: function () {
          return i;
        },
      });
      let s = 6,
        l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
          return parseFloat(e.toFixed(t)).toString();
        },
        i = (e) => {
          let t = Number(e);
          return t >= 1e9
            ? "".concat(
                (t / 1e9).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                "B"
              )
            : t >= 1e6
            ? "".concat(
                (t / 1e6).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                "M"
              )
            : t >= 1e3
            ? "".concat(
                (t / 1e3).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                "K"
              )
            : t.toLocaleString();
        };
    },
    3110: function (e, t, n) {
      "use strict";
      n.d(t, {
        Aw: function () {
          return d;
        },
        DQ: function () {
          return r;
        },
        NV: function () {
          return m;
        },
        Sp: function () {
          return i;
        },
        X: function () {
          return o;
        },
        ZD: function () {
          return a;
        },
        no: function () {
          return u;
        },
        sI: function () {
          return p;
        },
        w4: function () {
          return x;
        },
        yA: function () {
          return c;
        },
      });
      var s = n(3592),
        l = n(7603);
      let i = {
          Symbol: "ETH",
          Address: "eth",
          Decimal: 18,
          DisplayDecimalScale: 6,
          Order: 4,
        },
        r = {
          Symbol: "USDC",
          Address: "usdc",
          Decimal: 6,
          DisplayDecimalScale: 3,
          Order: 3,
        },
        a = {
          Symbol: "BNB",
          Address: "bnb",
          Decimal: 18,
          DisplayDecimalScale: 4,
          Order: 2,
        },
        o = {
          Symbol: "USDT",
          Address: "usdt",
          Decimal: 18,
          DisplayDecimalScale: 3,
          Order: 1,
        },
        d = {
          Symbol: "MCC",
          Address: "mcc",
          Decimal: 18,
          DisplayDecimalScale: 6,
          Order: 0,
        },
        c = {
          Symbol: "POINT",
          Address: "point",
          Decimal: 0,
          DisplayDecimalScale: 0,
          Order: 0,
        },
        u = {
          [d.Address]: d,
          [c.Address]: c,
          [a.Address]: a,
          [o.Address]: o,
          [r.Address]: r,
        },
        x = (e, t) => {
          let n = "string" == typeof e ? u[e] : e,
            l = m(n, t),
            i = n ? n.DisplayDecimalScale : s.bt;
          return (0, s.dl)(l, i);
        },
        m = (e, t) => {
          "string" == typeof t && (t = Number(t));
          let n = "string" == typeof e ? u[e] : e,
            s = n ? n.Decimal : 0;
          return s < 1 ? t : t / Number("1e".concat(s));
        },
        p = (e, t) => h(e, t).toDecimalPlaces(9, l.Z.ROUND_FLOOR).toNumber(),
        h = (e, t) => {
          let n = "string" == typeof e ? u[e] : e,
            s = n ? n.Decimal : 0;
          if (s < 1) return t;
          let l = Number("1e".concat(s));
          return t.div(l);
        };
    },
    2882: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n(7437),
        l = n(2265),
        i = n(6648),
        r = n(7157),
        a = n(8379),
        o = n(7643),
        d = n(6710),
        c = n(2737),
        u = n.n(c),
        x = n(1470),
        m = n.n(x),
        p = n(3592);
      u().extend(m());
      let h = (e) => {
        let { address: t, balance: n } = e;
        return (0, s.jsxs)("li", {
          style: { background: "rgba(0, 0, 0, 0.28)" },
          className:
            "bg_noel_secondary mb-2 flex justify-between rounded-[29px] p-3 font-medium",
          children: [
            (0, s.jsxs)("span", {
              className: "flex items-center",
              children: [
                (0, s.jsx)(i.default, {
                  src: "/images/airdrop/".concat(t, ".svg"),
                  alt: "",
                  width: 30,
                  height: 30,
                  className: "mr-2",
                }),
                t.toUpperCase(),
              ],
            }),
            (0, s.jsx)("span", {
              className: "mr-2",
              children: n
                ? (0, s.jsx)(d.Z, { token: String(t), balance: Number(n) })
                : 0,
            }),
          ],
        });
      };
      t.default = () => {
        let {
            totalSpin: e,
            allTotalPrizes: t,
            totalRecentRoundPrizes: n,
          } = (0, r.B)(),
          { histories: c, loading: x } = (0, a.a)(),
          [m, f] = (0, l.useState)("recent"),
          g = "recent" === m ? n : t,
          b = [
            "#FF5733",
            "#33FF57",
            "#3357FF",
            "#FF33A8",
            "#FFBD33",
            "#33FFBD",
          ],
          v = new Map();
        return (
          console.log("activeTab :>> ", m),
          (0, s.jsxs)("div", {
            className:
              "relative mx-auto flex max-w-[1200px] flex-col-reverse gap-6 rounded-[16px] bg-[#003724] p-5 text-white shadow-lg lg:flex-row",
            children: [
              (0, s.jsxs)("div", {
                className: "mt-6 w-full lg:mt-0 lg:w-2/3",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "bg_noel color_noel flex w-full rounded-[12px] bg-[#00281a] text-white",
                    children: [
                      (0, s.jsx)("div", {
                        className: "flex-1 px-4 py-2",
                        children: "Player",
                      }),
                      (0, s.jsx)("div", {
                        className: "hidden flex-1 px-4 py-2 md:block",
                        children: "Time",
                      }),
                      (0, s.jsx)("div", {
                        className: "flex-1 px-4 py-2 text-right",
                        children: "Prize",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "style-scroll "
                      .concat(
                        (null == c ? void 0 : c.length) ? "" : "h-full",
                        " "
                      )
                      .concat(
                        (null == c ? void 0 : c.length) > 12
                          ? "overflow-auto"
                          : ""
                      ),
                    style: { maxHeight: "674px", minHeight: "674px" },
                    children:
                      !x && (null == c ? void 0 : c.length) > 0
                        ? c.map((e) => {
                            let t = v.get(e.user.id);
                            t ||
                              ((t = b[v.size % b.length]), v.set(e.user.id, t));
                            let n =
                              "none" === e.prize_type
                                ? "good_lucky"
                                : e.prize_type;
                            return (0, s.jsxs)(
                              "div",
                              {
                                className:
                                  "flex items-center border-b border-[#003724] py-2",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-1 items-center gap-2 px-4",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex h-10 w-10 min-w-10 items-center justify-center rounded-full",
                                        style: {
                                          background: t,
                                          fontFamily: "ClashDisplay-Semibold",
                                        },
                                        children: (0, o.Q)(e.user.name),
                                      }),
                                      (0, s.jsx)("div", {
                                        children:
                                          (0, o.U)(e.user.name, 10) ||
                                          "Unknown Player",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "hidden flex-1 px-4 md:block",
                                    children: u()(e.spin_time).fromNow(),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-1 items-center justify-end gap-2 px-4",
                                    children: [
                                      "none" === e.prize_type
                                        ? "GOOD LUCK"
                                        : (0, s.jsxs)(s.Fragment, {
                                            children: [
                                              (0, s.jsx)(d.Z, {
                                                token: String(e.prize_type),
                                                balance: Number(e.prize_amount),
                                              }),
                                              (0, s.jsx)("span", {
                                                children:
                                                  e.prize_type.toUpperCase(),
                                              }),
                                            ],
                                          }),
                                      (0, s.jsx)(i.default, {
                                        src: "/images/airdrop/".concat(
                                          n,
                                          ".svg"
                                        ),
                                        alt: e.prize_type,
                                        width: 28,
                                        height: 28,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id
                            );
                          })
                        : (0, s.jsxs)("div", {
                            className:
                              "h-full pt-[40%] text-center text-gray-400",
                            children: [
                              !x &&
                                (0, s.jsx)(i.default, {
                                  className: "mx-auto mb-2",
                                  src: "/images/airdrop/empty_state.svg",
                                  alt: "Icon Empty",
                                  width: 64,
                                  height: 40,
                                }),
                              x
                                ? "Loading..."
                                : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      "History is temporarily disabled due to high traffic.",
                                      (0, s.jsx)("br", {}),
                                      "Thank you for understanding!",
                                    ],
                                  }),
                            ],
                          }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "relative w-full lg:w-1/3",
                children: [
                  (0, s.jsxs)("div", {
                    style: { background: "rgba(0, 0, 0, 0.28)" },
                    className: "bg_noel rounded-[8px] px-5 pb-8 pt-5",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "color_noel text-[20px] font-semibold",
                        children: "Total Spins",
                      }),
                      (0, s.jsxs)("p", {
                        className:
                          "color_noel_primary clash-display-semibold text-[32px] text-[#00FFA3]",
                        children: [
                          (0, p.uf)(Number(e || 0)),
                          " ",
                          (0, s.jsx)("span", {
                            className:
                              "clash-display-medium text-[16px] text-[#06754E]",
                            children: "Spin",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    style: { background: "rgba(0, 0, 0, 0.28)" },
                    className:
                      "bg_noel color_noel mt-3 rounded-[8px] px-5 pb-8 pt-5",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "mb-5 flex items-center justify-between",
                        children: [
                          (0, s.jsx)("h3", {
                            className:
                              "text-[18px] font-semibold xl:text-[20px]",
                            children: "Total Prizes",
                          }),
                          (0, s.jsxs)("div", {
                            style: { border: "1px solid #F1F1F1" },
                            className:
                              "flex rounded-[16px] bg-white text-[14px] font-medium",
                            children: [
                              (0, s.jsx)("button", {
                                className:
                                  "h-[30px] rounded-[16px] px-3 ".concat(
                                    "recent" === m
                                      ? "bg-[#00C076] text-white"
                                      : "bg-white text-black"
                                  ),
                                onClick: () => f("recent"),
                                children: "Recent Round",
                              }),
                              (0, s.jsx)("button", {
                                className:
                                  "h-[30px] rounded-[16px] px-3 ".concat(
                                    "all" === m
                                      ? "bg-[#00C076] text-white"
                                      : "bg-white text-black"
                                  ),
                                onClick: () => f("all"),
                                children: "All",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("ul", {
                        className: "mt-5",
                        children: [
                          (0, s.jsx)(h, {
                            address: "point",
                            balance: (null == g ? void 0 : g.point) || 0,
                          }),
                          (0, s.jsx)(h, {
                            address: "bnb",
                            balance: (null == g ? void 0 : g.bnb) || 0,
                          }),
                          (0, s.jsx)(h, {
                            address: "usdt",
                            balance: (null == g ? void 0 : g.usdt) || 0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    5638: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n(7437);
      n(2265);
      var l = n(6229),
        i = n(6648),
        r = n(1980),
        a = n.n(r),
        o = n(2280),
        d = n(5666);
      function c() {
        let {
            isModalOpen: e,
            prizeAmount: t,
            prizeIcon: n,
            closeModal: r,
          } = (0, l.s)(),
          { width: c, height: u } = (0, o.Z)(),
          { setStopMusic: x } = (0, d.u)();
        return e
          ? (0, s.jsxs)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70",
              children: [
                "GOOD LUCKY" !== t &&
                  (0, s.jsx)(a(), {
                    width: c,
                    height: u,
                    numberOfPieces: 200,
                    gravity: 0.2,
                  }),
                (0, s.jsxs)("div", {
                  className:
                    "relative z-50 w-full max-w-[385px] rounded-[20px] p-5 text-center shadow-lg",
                  style: {
                    borderRadius: "20px",
                    background:
                      "linear-gradient(180deg, #00C076 20%, rgba(255, 255, 255, 0) 100%)",
                    boxShadow: "0px 4px 41.9px rgba(0, 0, 0, 0.61)",
                    backdropFilter: "blur(20.95px)",
                  },
                  children: [
                    (0, s.jsx)("button", {
                      onClick: r,
                      className:
                        "absolute right-3 top-3 text-2xl text-gray-400 hover:text-gray-600",
                      children: "\xd7",
                    }),
                    (0, s.jsx)("div", {
                      className: "mb-4 flex justify-center",
                      children: (0, s.jsx)(i.default, {
                        src: n,
                        alt: "Prize Icon",
                        width: 125,
                        height: 125,
                        className: "ml-2",
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "text-[20px] font-bold text-white",
                      children:
                        "GOOD LUCKY" !== t
                          ? t
                          : "Don't give up, your time will come",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "mt-2 text-[24px] font-semibold text-[#00FFA3]",
                      children: "Your Prizes",
                    }),
                    "GOOD LUCKY" !== t
                      ? (0, s.jsxs)("p", {
                          className:
                            "poppins-light mt-2 text-[14px] text-white",
                          children: [
                            "Congratulations! You have just won",
                            " ",
                            (0, s.jsx)("span", {
                              className: "font-bold",
                              children: t,
                            }),
                            ". Keep spinning for a chance to win even more exciting prizes!",
                          ],
                        })
                      : (0, s.jsx)("p", {
                          className:
                            "poppins-light mt-2 text-[14px] text-white",
                          children: "Don't give up, your time will come",
                        }),
                    (0, s.jsx)("button", {
                      onClick: () => {
                        r(), x(!1);
                      },
                      className:
                        "mt-6 h-[54px] w-full rounded-full bg-white px-6 py-2 text-black hover:bg-gray-100",
                      children: "GOOD LUCKY" !== t ? "Claim" : "Close",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
    6229: function (e, t, n) {
      "use strict";
      n.d(t, {
        SpinProvider: function () {
          return g;
        },
        s: function () {
          return b;
        },
      });
      var s = n(7437),
        l = n(9388),
        i = n(9597),
        r = n(8378),
        a = n(2265),
        o = () => {
          let [e, t] = (0, a.useState)(!1),
            [n, s] = (0, a.useState)(null);
          return {
            loading: e,
            spinLuckyWheel: async (e) => {
              try {
                t(!0);
                let n = await (0, r.CL)("/meshmain/lucky-wheel/spin", {
                  captcha_token: e,
                });
                s(n);
              } catch (e) {
                throw (0, i.C)(e);
              } finally {
                t(!1);
              }
            },
            result: n,
          };
        };
      let d = (e) => {
        let t = [
          {
            key: "none_0",
            value: 6,
            amount: "GOOD LUCK",
            icon: "/images/airdrop/good_lucky.svg",
          },
          {
            key: "point_50",
            value: 1,
            amount: "50 POINT",
            icon: "/images/airdrop/point.svg",
          },
          {
            key: "point_100",
            value: 9,
            amount: "100 POINT",
            icon: "/images/airdrop/point.svg",
          },
          {
            key: "point_500",
            value: 3,
            amount: "500 POINT",
            icon: "/images/airdrop/point.svg",
          },
          {
            key: "point_1000",
            value: 11,
            amount: "1000 POINT",
            icon: "/images/airdrop/point.svg",
          },
          {
            key: "bnb_0.001",
            value: 10,
            amount: "0,001 BNB",
            icon: "/images/airdrop/bnb.svg",
          },
          {
            key: "bnb_0.005",
            value: 7,
            amount: "0,005 BNB",
            icon: "/images/airdrop/bnb.svg",
          },
          {
            key: "bnb_0.1",
            value: 5,
            amount: "0,1 BNB",
            icon: "/images/airdrop/bnb.svg",
          },
          {
            key: "usdt_5",
            value: 8,
            amount: "5 USDT",
            icon: "/images/airdrop/usdt.svg",
          },
          {
            key: "usdt_10",
            value: 4,
            amount: "10 USDT",
            icon: "/images/airdrop/usdt.svg",
          },
          {
            key: "usdt_20",
            value: 2,
            amount: "20 USDT",
            icon: "/images/airdrop/usdt.svg",
          },
          {
            key: "usdt_100",
            value: 0,
            amount: "100 USDT",
            icon: "/images/airdrop/usdt.svg",
          },
        ].find((t) => t.key === e);
        return t ? { value: t.value, amount: t.amount, icon: t.icon } : null;
      };
      var c = n(5956),
        u = n(8379),
        x = n(4087),
        m = n(3110),
        p = n(5666),
        h = n(7157);
      let f = (0, a.createContext)(void 0),
        g = (e) => {
          let { children: t } = e,
            { spinLuckyWheel: n, result: i } = o(),
            { mutate: r } = (0, u.a)(),
            { mutate: g, amountPerSpin: b } = (0, x.J)(),
            { mutate: v } = (0, h.B)(),
            [y, j] = (0, a.useState)(!1),
            [N, w] = (0, a.useState)(0),
            [S, _] = (0, a.useState)(!1),
            [k, F] = (0, a.useState)(""),
            [P, D] = (0, a.useState)(""),
            [A, C] = (0, a.useState)(null),
            [T, E] = (0, a.useState)(null),
            { foundToken: O, mutate: z } = (0, l.kI)(m.yA.Address),
            { setStopMusic: I } = (0, p.u)();
          (0, a.useEffect)(() => {
            C(new Audio("https://statics.meshchain.ai/sounds/lose.mp3")),
              E(new Audio("https://statics.meshchain.ai/sounds/win.mp3"));
          }, []);
          let U = async (e) => {
            if (!y) {
              if (!O) {
                c.Am.error("No POINTS token found to spin the wheel");
                return;
              }
              if (Number(O.balance) >= Number(b))
                try {
                  await n(e);
                } catch (e) {
                  c.Am.error(e.message);
                }
              else
                c.Am.error(
                  "You don’t have enough POINTS to spin the wheel. Earn more POINTS to join the fun and claim exciting prizes!"
                );
            }
          };
          return (
            (0, a.useEffect)(() => {
              var e, t;
              if (
                null == i
                  ? void 0
                  : null === (e = i.data) || void 0 === e
                  ? void 0
                  : e.key
              ) {
                let e = (N % 360) / 30,
                  n = d(
                    null == i
                      ? void 0
                      : null === (t = i.data) || void 0 === t
                      ? void 0
                      : t.key
                  ),
                  s = Number(null == n ? void 0 : n.value),
                  l = 3600 + ((s - e + 12) % 12) * 30;
                w((e) => e + l), j(!0);
                let a = new Audio(
                  "https://statics.meshchain.ai/sounds/spin.mp3"
                );
                (a.currentTime = 0),
                  a.play(),
                  setTimeout(async () => {
                    j(!1),
                      a.pause(),
                      F(null == n ? void 0 : n.amount),
                      D(null == n ? void 0 : n.icon),
                      _(!0),
                      await z(),
                      await r(),
                      await g(),
                      await v(),
                      6 === s
                        ? (I(!0), A && ((A.currentTime = 0), A.play()))
                        : T && ((T.currentTime = 0), T.play());
                  }, 5e3);
              }
            }, [null == i ? void 0 : i.data]),
            (0, s.jsx)(f.Provider, {
              value: {
                isSpinning: y,
                rotation: N,
                spinWheel: U,
                isModalOpen: S,
                prizeAmount: k,
                prizeIcon: P,
                closeModal: () => {
                  A && (A.pause(), (A.currentTime = 0)),
                    T && (T.pause(), (T.currentTime = 0)),
                    _(!1);
                },
              },
              children: t,
            })
          );
        },
        b = () => {
          let e = (0, a.useContext)(f);
          if (!e) throw Error("useSpin must be used within a SpinProvider");
          return e;
        };
    },
    5172: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var s = n(7437),
        l = n(2265),
        i = n(6648),
        r = n(6229),
        a = n(7643),
        o = n(3447),
        d = n(6710),
        c = n(4087),
        u = n(2737),
        x = n.n(u),
        m = n(1470),
        p = n.n(m),
        h = n(7138),
        f = n(1617),
        g = n(8378),
        b = n(9597);
      let v = () => "/meshmain/lucky-wheel/history";
      x().extend(p());
      var y = (e) => {
          let { isOpen: t, onClose: n } = e,
            {
              totalPrizes: l,
              userCurrentSpin: r,
              userTotalSpin: u,
            } = (0, c.J)(),
            { histories: m, loading: p } = (function (e) {
              let {
                data: t,
                error: n,
                isLoading: s,
                mutate: l,
              } = (0, f.ZP)(e ? v() : null, async (e) => {
                try {
                  return (await (0, g._i)(e)).data;
                } catch (e) {
                  throw (0, b.C)(e);
                }
              });
              return {
                histories: (null == t ? void 0 : t.histories) || [],
                pagination: {
                  page: (null == t ? void 0 : t.page) || 1,
                  pageSize: (null == t ? void 0 : t.pageSize) || 100,
                  totalCount: (null == t ? void 0 : t.totalCount) || 100,
                  totalPages: (null == t ? void 0 : t.totalPages) || 100,
                },
                loading: s,
                error: n,
                mutate: l,
              };
            })(t),
            y = [
              "#FF5733",
              "#33FF57",
              "#3357FF",
              "#FF33A8",
              "#FFBD33",
              "#33FFBD",
            ],
            { userProfile: j } = (0, o.G)(),
            N =
              (null == m
                ? void 0
                : m.filter((e) => e.user_id === (null == j ? void 0 : j.id))) ||
              null,
            w = new Map();
          return t
            ? (0, s.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70",
                children: (0, s.jsxs)("div", {
                  className:
                    "relative mx-4 w-full max-w-[800px] rounded-[16px] bg-[#003724] p-6 text-white shadow-lg lg:mx-0",
                  style: {
                    borderRadius: "20px",
                    background:
                      "linear-gradient(180deg, #00C076 20%, rgba(255, 255, 255, 0.00) 100%)",
                    boxShadow: "0px 4px 41.9px 0px rgba(0, 0, 0, 0.61)",
                    backdropFilter: "blur(20px)",
                  },
                  children: [
                    (0, s.jsxs)("div", {
                      className: "relative mb-8 flex justify-between",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text-left text-[24px] font-bold",
                          children: "My Prizes",
                        }),
                        (0, s.jsx)("button", {
                          onClick: n,
                          className:
                            "text-whit absolute right-0 top-[-9px] text-[38px]",
                          children: "\xd7",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mb-5 flex-row justify-between gap-2 text-left md:flex",
                      children: [
                        (0, s.jsxs)("div", {
                          style: { background: "rgba(0, 0, 0, 0.28)" },
                          className:
                            "mb-2 flex w-full items-center justify-between rounded-[12px] p-3 md:mb-0 md:block md:w-1/4",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[14px] font-semibold text-[#00FFA3]",
                              children: "Your Total Spins",
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-[20px] font-bold",
                              children: [u || 0, " Spins"],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          style: { background: "rgba(0, 0, 0, 0.28)" },
                          className:
                            "mb-2 flex w-full justify-between rounded-[12px] p-3 md:mb-0 md:block md:w-1/4",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[14px] font-semibold text-[#00FFA3]",
                              children: "POINT",
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-[20px] font-bold",
                              children: [
                                (0, s.jsx)(d.Z, {
                                  token: String("point"),
                                  balance: Number(
                                    (null == l ? void 0 : l.point) || 0
                                  ),
                                }),
                                " ",
                                "PT",
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          style: { background: "rgba(0, 0, 0, 0.28)" },
                          className:
                            "mb-2 flex w-full justify-between rounded-[12px] p-3 md:mb-0 md:block md:w-1/4",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[14px] font-semibold text-[#00FFA3]",
                              children: "BNB",
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-[20px] font-bold",
                              children: [
                                (0, s.jsx)(d.Z, {
                                  token: String("bnb"),
                                  balance: Number(
                                    (null == l ? void 0 : l.bnb) || 0
                                  ),
                                }),
                                " ",
                                "BNB",
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          style: { background: "rgba(0, 0, 0, 0.28)" },
                          className:
                            "mb-2 flex w-full justify-between rounded-[12px] p-3 md:mb-0 md:block md:w-1/4",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-[14px] font-semibold text-[#00FFA3]",
                              children: "USDT",
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-[20px] font-bold",
                              children: [
                                (0, s.jsx)(d.Z, {
                                  token: String("usdt"),
                                  balance: Number(
                                    (null == l ? void 0 : l.usdt) || 0
                                  ),
                                }),
                                " ",
                                "USDT",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "mb-5 flex flex-col justify-between rounded-[12px] p-3 text-center text-sm leading-6",
                      style: { background: "rgba(0, 0, 0, 0.28)" },
                      children: (0, s.jsxs)("p", {
                        children: [
                          "You can view your rewards in the",
                          " ",
                          (0, s.jsx)(h.default, {
                            href: "https://orion-ai-app-cs.vercel.app/wallet",
                            target: "_blank",
                            className: "text-[#00FFA3]",
                            children: "MeshChain Wallet",
                          }),
                          " ",
                          "and withdraw USDT anytime.",
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "w-full",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex w-full rounded-[16px] bg-[#002518]",
                          children: [
                            (0, s.jsx)("div", {
                              className: "flex-1 rounded-l-[12px] px-4 py-3",
                              children: "Player",
                            }),
                            (0, s.jsx)("div", {
                              className: "hidden flex-1 px-4 py-3 md:block",
                              children: "Time",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "flex-1 rounded-r-[12px] px-4 py-3 text-right",
                              children: "Prize",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "style-scroll max-h-[280px] ".concat(
                            (null == N ? void 0 : N.length) > 5
                              ? "overflow-auto"
                              : ""
                          ),
                          children:
                            !p && (null == N ? void 0 : N.length) > 0
                              ? N.map((e) => {
                                  let t = w.get(e.user.id);
                                  return (
                                    t ||
                                      ((t = y[w.size % y.length]),
                                      w.set(e.user.id, t)),
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "flex w-full items-center justify-between py-2",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2 px-4 md:flex-1",
                                            children: [
                                              (0, s.jsx)("div", {
                                                className:
                                                  "flex h-10 w-10 items-center justify-center rounded-full",
                                                style: {
                                                  background: t,
                                                  fontFamily:
                                                    "ClashDisplay-Semibold",
                                                },
                                                children: (0, a.Q)(e.user.name),
                                              }),
                                              (0, s.jsx)("div", {
                                                children:
                                                  (0, a.U)(e.user.name, 20) ||
                                                  "Unknown Player",
                                              }),
                                            ],
                                          }),
                                          (0, s.jsx)("div", {
                                            className:
                                              "hidden px-4 md:block md:flex-1",
                                            children: x()(
                                              e.spin_time
                                            ).fromNow(),
                                          }),
                                          (0, s.jsxs)("div", {
                                            className:
                                              "flex items-center justify-between gap-2 px-4 md:flex-1 md:justify-end",
                                            children: [
                                              "none" === e.prize_type
                                                ? "GOOD LUCK"
                                                : (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                      (0, s.jsx)(d.Z, {
                                                        token: String(
                                                          e.prize_type
                                                        ),
                                                        balance: Number(
                                                          e.prize_amount
                                                        ),
                                                      }),
                                                      (0, s.jsx)("span", {
                                                        children:
                                                          e.prize_type.toUpperCase(),
                                                      }),
                                                    ],
                                                  }),
                                              (0, s.jsx)(i.default, {
                                                src: "/images/airdrop/".concat(
                                                  "none" === e.prize_type
                                                    ? "good_lucky"
                                                    : e.prize_type,
                                                  ".svg"
                                                ),
                                                alt: e.prize_type,
                                                width: 28,
                                                height: 28,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.id
                                    )
                                  );
                                })
                              : (0, s.jsxs)("div", {
                                  className:
                                    "flex min-h-[200px] flex-col items-center justify-center text-gray-400",
                                  children: [
                                    !p &&
                                      (0, s.jsx)(i.default, {
                                        className: "mx-auto mb-2",
                                        src: "/images/airdrop/empty_state.svg",
                                        alt: "Icon Empty",
                                        width: 64,
                                        height: 40,
                                      }),
                                    p ? "Loading..." : "No History Found",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        },
        j = n(9388),
        N = n(7157),
        w = (e) => {
          let { isOpen: t, onClose: n } = e;
          return t
            ? (0, s.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4",
                children: (0, s.jsxs)("div", {
                  className:
                    "relative w-full max-w-[503px] rounded-[20px] bg-white p-6 shadow-lg",
                  children: [
                    (0, s.jsx)("h2", {
                      className:
                        "clash-display-semibold mb-4 text-left text-[24px] font-bold text-black",
                      children: "Discover Program Details",
                    }),
                    (0, s.jsxs)("div", {
                      className: "mb-6 rounded-lg bg-gray-50 p-4 shadow-inner",
                      children: [
                        (0, s.jsx)("h3", {
                          className: "mb-2 font-semibold text-gray-900",
                          children: "Event Timing",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-6 text-sm text-gray-700",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                "Frequency: The event is held once every week.",
                            }),
                            (0, s.jsx)("li", {
                              children: "Duration: The event lasts for 2 hour.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("h3", {
                          className: "mb-2 mt-4 font-semibold text-gray-900",
                          children: "Participation Rules",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-6 text-sm text-gray-700",
                          children: [
                            (0, s.jsx)("li", {
                              children: "Eligibility: Open to all users.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Spin Limits: A maximum of 5 spins per user.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Spin Intervals: At least 15 minutes between spins.",
                            }),
                            (0, s.jsx)("li", {
                              children: "Cost: Each spin costs 100 POINTS.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("h3", {
                          className: "mb-2 mt-4 font-semibold text-gray-900",
                          children: "Prizes",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-6 text-sm text-gray-700",
                          children: [
                            (0, s.jsx)("li", {
                              children: "POINTS: 50, 100, 500, 1000.",
                            }),
                            (0, s.jsx)("li", {
                              children: "BNB Gas Fee: 0.001, 0.005, 0.1.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "USDT: 5, 10, 20, 100 (paid directly in cash).",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "flex w-full justify-end",
                      children: (0, s.jsx)("button", {
                        onClick: n,
                        className:
                          "h-[48px] w-[120px] rounded-[40px] bg-green-500 py-2 font-medium text-white transition duration-200 hover:bg-green-600",
                        children: "Close",
                      }),
                    }),
                  ],
                }),
              })
            : null;
        },
        S = n(7058),
        _ = n(3592),
        k = n(1826);
      let F = (0, l.forwardRef)((e, t) => {
        let { setCaptchaToken: n, setError: i, className: r } = e,
          a = (0, l.useRef)(null);
        return (
          (0, l.useImperativeHandle)(t, () => ({
            reset: () => {
              a.current && a.current.reset();
            },
          })),
          (0, s.jsx)(k.Nc, {
            className: r,
            ref: a,
            siteKey: "0x4AAAAAAA0e4lkIb7ZRG1LE",
            onSuccess: (e) => {
              n(e), i && i(null);
            },
            onError: i,
            onExpire: i,
            options: { theme: "light" },
          })
        );
      });
      F.displayName = "CaptchaWidget";
      let P = (e) => {
        let { address: t, balance: n } = e;
        return (0, s.jsxs)("div", {
          style: { background: "rgba(0, 0, 0, 0.28)" },
          className:
            "bg_noel_secondary flex w-full items-center justify-between rounded-[12px] px-3 py-2 md:justify-start",
          children: [
            (0, s.jsxs)("div", {
              className: "flex",
              children: [
                (0, s.jsx)(i.default, {
                  src: "/images/airdrop/".concat(t, ".svg"),
                  alt: "",
                  width: 30,
                  height: 30,
                  className: "mr-2",
                  style: { minWidth: "24px" },
                }),
                (0, s.jsx)("p", {
                  className: "color_noel flex md:hidden",
                  children: t.toUpperCase(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "text-left",
              children: [
                (0, s.jsx)("p", {
                  className: "color_noel hidden font-medium md:flex",
                  children: t.toUpperCase(),
                }),
                (0, s.jsx)("p", {
                  className:
                    "color_noel_primary clash-display-semibold text-[14px] text-[#00FFA3]",
                  children: n
                    ? (0, s.jsx)(S.Z, { token: String(t), balance: Number(n) })
                    : 0,
                }),
              ],
            }),
          ],
        });
      };
      var D = () => {
        var e;
        let { isSpinning: t, spinWheel: n } = (0, r.s)(),
          [a, u] = (0, l.useState)(null),
          [x, m] = (0, l.useState)(!1),
          [p, f] = (0, l.useState)(!1),
          { userProfile: g } = (0, o.G)(),
          { allTotalPrizes: b } = (0, N.B)(),
          {
            userCurrentSpin: v,
            amountPerSpin: S,
            maxSpinPerUser: k,
            nextSpinTime: D,
            totalPrizes: A,
            spinInterval: C,
          } = (0, c.J)(),
          { tokens: T } = (0, j.kI)("bnb"),
          E =
            (null == T
              ? void 0
              : null === (e = T.find((e) => "POINT" === e.symbol)) ||
                void 0 === e
              ? void 0
              : e.balance) || 0,
          {
            totalSpin: O,
            spinStartTime: z,
            spinEndTime: I,
            maxSpinPerUser: U,
          } = (0, N.B)(),
          [B, Z] = (0, l.useState)(0),
          [L, R] = (0, l.useState)(!1),
          [M, G] = (0, l.useState)(0),
          [H, K] = (0, l.useState)(0),
          [W, Y] = (0, l.useState)(0),
          [$, J] = (0, l.useState)(null),
          Q = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          Z(null != k ? k : U);
        }, [k, U]),
          (0, l.useEffect)(() => {
            let e = () => {
              let e = D - Math.floor(Date.now() / 1e3);
              Y(e > 0 ? e : 0);
            };
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
          }, [D]),
          (0, l.useEffect)(() => {
            let e = () => {
              let e = Math.floor(Date.now() / 1e3);
              e < Number(z)
                ? (G(Number(z) - e), R(!1))
                : e >= Number(z) && e < Number(I)
                ? (G(Number(I) - e), R(!0))
                : (G(0), R(!1));
            };
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
          }, [z, I]),
          (0, l.useEffect)(() => {
            if (H > 0) {
              let e = setInterval(() => {
                K((e) => e - 1);
              }, 1e3);
              return () => clearInterval(e);
            }
          }, [H]);
        let V = (e) => {
            let t = Math.floor(e / 86400)
              .toString()
              .padStart(2, "0");
            return {
              d: t,
              h: Math.floor((e % 86400) / 3600)
                .toString()
                .padStart(2, "0"),
              m: Math.floor((e % 3600) / 60)
                .toString()
                .padStart(2, "0"),
              s: (e % 60).toString().padStart(2, "0"),
            };
          },
          { d: q, h: X, m: ee, s: et } = V(M),
          { m: en, s: es } = V(Number(W)),
          el = v >= B,
          ei = !$ || t || !g || W > 0 || el || !L,
          er = g ? A : b,
          ea = !L || Number(q) > 0;
        return (0, s.jsxs)("div", {
          className:
            "relative mx-auto flex h-full w-full flex-col-reverse justify-between rounded-[16px] bg-[#003724] p-6 text-white shadow-lg lg:flex-col",
          children: [
            (0, s.jsx)(i.default, {
              src: "/images/airdrop/coin_airdrop_r.svg",
              alt: "",
              width: 91,
              height: 152,
              className: "absolute right-[-60px] top-[-70px] hidden lg:flex",
            }),
            (0, s.jsx)(i.default, {
              src: "/images/airdrop/coin_airdrop_l.svg",
              alt: "",
              width: 76,
              height: 136,
              className: "absolute bottom-[-70px] left-[-60px] hidden lg:flex",
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className:
                    "clash-display-semibold mx-auto mb-4 hidden w-full justify-center text-center text-[36px] lg:flex",
                  children: "WHEEL OF FORTUNE",
                }),
                (0, s.jsx)("div", {
                  className: "flex w-full",
                  children: g
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)("div", {
                            style: {
                              background: "rgba(0, 0, 0, 0.28)",
                              border: "1px solid rgba(0, 0, 0, 0.16)",
                            },
                            className:
                              "bg_noel mb-4 mr-3 flex w-full flex-col justify-center rounded-[12px] p-4 text-center",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "color_noel text-[14px] font-medium text-[#AEFFE2]",
                                children: "USED SPIN",
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "color_noel_primary clash-display-semibold mx-auto mt-2 flex w-full justify-center text-[18px] md:text-[24px]",
                                children: [v, "/", B],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            style: {
                              background: "rgba(0, 0, 0, 0.28)",
                              border: "1px solid rgba(0, 0, 0, 0.16)",
                            },
                            className:
                              "bg_noel mb-4 flex w-full flex-col justify-center rounded-[12px] p-4 text-center",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "color_noel text-[14px] font-medium text-[#AEFFE2]",
                                children: "MY POINTS",
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "color_noel_primary clash-display-semibold mx-auto mt-2 flex w-full justify-center text-[18px] md:text-[24px]",
                                children: [
                                  (0, s.jsx)(d.Z, {
                                    token: String("point"),
                                    balance: Number(E),
                                  }),
                                  (0, s.jsx)(i.default, {
                                    src: "/images/airdrop/point.svg",
                                    alt: "",
                                    width: 30,
                                    height: 30,
                                    className: "ml-2",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, s.jsxs)("div", {
                        style: {
                          background: "rgba(0, 0, 0, 0.28)",
                          border: "1px solid rgba(0, 0, 0, 0.16)",
                        },
                        className:
                          "bg_noel mb-4 flex w-full flex-col justify-center rounded-[12px] p-4 text-center",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "color_noel_primary text-[14px] font-medium text-[#AEFFE2]",
                            children: "PLEASE LOG IN TO SPIN",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "color_noel_primary text-[14px] font-medium text-[#AEFFE2]",
                            children: "THE WHEEL AND CLAIM REWARDS",
                          }),
                        ],
                      }),
                }),
                (0, s.jsxs)("div", {
                  style: {
                    background: "rgba(0, 0, 0, 0.28)",
                    border: "1px solid rgba(0, 0, 0, 0.16)",
                  },
                  className: "bg_noel mb-4 rounded-[12px] p-5",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "color_noel text-[20px] font-semibold text-[#00FFA3]",
                          children: g ? "My Prizes" : "Community Won",
                        }),
                        g &&
                          (0, s.jsxs)("button", {
                            onClick: () => m(!0),
                            className:
                              "color_noel flex h-[30px] items-center gap-1 rounded-[20px] border border-[#00FFA3] px-4 py-1 text-sm text-[#00FFA3] hover:underline",
                            children: [
                              "Detail",
                              (0, s.jsx)("span", {
                                className: "material-icons",
                                children: "->",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      style: { background: "rgba(0, 0, 0, 0.28)" },
                      className:
                        "bg_noel_secondary color_noel mt-5 flex items-center justify-between rounded-[12px] px-4 py-3 text-center font-medium",
                      children: [
                        (0, s.jsx)("p", { children: "Spins Completed" }),
                        (0, s.jsxs)("p", {
                          className:
                            "color_noel_primary clash-display-semibold mt-1 text-[#00FFA3]",
                          children: [
                            g ? v : (0, _.uf)(Number(O || 0)),
                            " ",
                            "Spins",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mt-4 grid grid-cols-1 gap-2 text-center md:grid-cols-3",
                      children: [
                        (0, s.jsx)(P, {
                          address: "point",
                          balance: (null == er ? void 0 : er.point) || 0,
                        }),
                        (0, s.jsx)(P, {
                          address: "bnb",
                          balance: (null == er ? void 0 : er.bnb) || 0,
                        }),
                        (0, s.jsx)(P, {
                          address: "usdt",
                          balance: (null == er ? void 0 : er.usdt) || 0,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  onClick: () => f(!0),
                  className:
                    "mb-8 mt-8 cursor-pointer text-center hover:underline lg:mb-6",
                  children: "Learn How to Play?",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "mb-3 flex w-full items-center justify-center text-center text-[14px] text-[#06754E]",
                  children: [
                    (0, s.jsx)("div", {
                      className: "mr-2 text-white",
                      children: L
                        ? "Ends In"
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("span", {
                                className: "hidden lg:flex",
                                children: "Round Starts In",
                              }),
                              (0, s.jsx)("span", {
                                className: "flex lg:hidden",
                                children: "Starts In",
                              }),
                            ],
                          }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "clash-display-semibold flex gap-1 text-[21px]",
                      children: [
                        ea &&
                          (0, s.jsx)("span", {
                            className: "text-[#00FFA3]",
                            children: q,
                          }),
                        ea && (0, s.jsx)("span", { children: "D" }),
                        (0, s.jsx)("span", {
                          className: "text-[#00FFA3]",
                          children: X,
                        }),
                        (0, s.jsx)("span", { children: "H" }),
                        (0, s.jsx)("span", {
                          className: "text-[#00FFA3]",
                          children: ee,
                        }),
                        (0, s.jsx)("span", { children: "M" }),
                        (0, s.jsx)("span", {
                          className: "text-[#00FFA3]",
                          children: et,
                        }),
                        (0, s.jsx)("span", { children: "S" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "mb-8 w-full text-center text-white lg:mb-0",
                  children: g
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          L &&
                            (0, s.jsx)(F, {
                              ref: Q,
                              setCaptchaToken: (e) => J(e),
                              setError: u,
                              className: "mb-3",
                            }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              $ &&
                                n($)
                                  .then()
                                  .finally(() => {
                                    K(Number(C)),
                                      Q.current &&
                                        (console.log("reset captcha"),
                                        Q.current.reset());
                                  });
                            },
                            disabled: ei,
                            className: "relative h-[90px] w-full "
                              .concat(
                                ei ? "cursor-not-allowed" : "cursor-pointer",
                                " rounded-full bg-[radial-gradient(59.21%_106.67%_at_49.78%_106.67%,#FE0_24.07%,#FFBA0A_100%)] px-12 py-3 text-[30px] font-bold shadow-lg transition hover:"
                              )
                              .concat(t ? "opacity-60" : "opacity-90", "}"),
                            style: {
                              background: ei
                                ? "radial-gradient(59.21% 106.67% at 49.78% 106.67%, #CDCDCD 24.07%, #8D8D8D 100%)"
                                : "radial-gradient(59.21% 106.67% at 49.78% 106.67%, #FE0 24.07%, #FFBA0A 100%)",
                              border: "3px solid rgba(255, 255, 255, 0.00)",
                            },
                            children: [
                              (0, s.jsx)("p", { children: "SPIN" }),
                              (0, s.jsx)("div", {
                                className: "text-[12px] font-normal text-black",
                                children:
                                  W > 0 && L
                                    ? (0, s.jsxs)("div", {
                                        className: "flex justify-center gap-1",
                                        children: [
                                          (0, s.jsx)("span", { children: en }),
                                          (0, s.jsx)("span", { children: "M" }),
                                          (0, s.jsx)("span", { children: es }),
                                          (0, s.jsx)("span", { children: "S" }),
                                        ],
                                      })
                                    : L
                                    ? "".concat(S, " POINTS / 1 SPIN")
                                    : "Round Not Started",
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, s.jsx)(h.default, {
                        href:
                          "https://meshchain.ai" +
                          "/sso?next_uri=".concat(
                            encodeURIComponent("/airdrop/wheel")
                          ),
                        children: (0, s.jsxs)("button", {
                          className:
                            "relative h-[90px] w-full cursor-pointer rounded-full bg-[radial-gradient(59.21%_106.67%_at_49.78%_106.67%,#FE0_24.07%,#FFBA0A_100%)] px-12 py-3 text-[30px] font-bold shadow-lg transition hover:".concat(
                              t ? "opacity-60" : "opacity-90",
                              "}"
                            ),
                          style: {
                            border: "3px solid rgba(255, 255, 255, 0.00)",
                          },
                          children: [
                            (0, s.jsx)("p", { children: "SPIN" }),
                            (0, s.jsx)("div", {
                              className: "text-[12px] font-normal text-black",
                              children: "Please login to continue",
                            }),
                            (0, s.jsx)(i.default, {
                              src: "/images/airdrop/bg_noel_spin.png",
                              alt: "",
                              width: 67,
                              height: 30,
                              className:
                                "absolute left-[30px] top-[-19px] z-10",
                            }),
                          ],
                        }),
                      }),
                }),
              ],
            }),
            (0, s.jsx)(y, { isOpen: x, onClose: () => m(!1) }),
            (0, s.jsx)(w, { isOpen: p, onClose: () => f(!1) }),
          ],
        });
      };
    },
    992: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var s = n(8646),
        l = n(7437);
      n(2265);
      var i = n(5229),
        r = n(6229);
      function a() {
        let e = (0, s._)([
          "\n  0%, 100% {\n    transform: rotate(-5deg);\n  }\n  50% {\n    transform: rotate(5deg);\n  }\n",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        let e = (0, s._)([
          "\n  position: relative;\n  width: 100%;\n  max-width: 690px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  overflow: hidden;\n  background-image: url('/images/airdrop/bg-wheel.png');\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        let e = (0, s._)([
          "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('/images/airdrop/spin.png');\n  background-size: cover;\n  transform-origin: center;\n  transition: transform\n    ",
          ";\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, s._)([
          "\n          animation: ",
          " 2s infinite;\n        ",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = (0, s._)([
          "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('/images/airdrop/spin.png');\n  background-size: cover;\n  transform-origin: center;\n  transition: transform: ",
          ";\n\n  ",
          "\n",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        let e = (0, s._)([
          "\n  position: absolute;\n  width: 35%;\n  height: 35%;\n  top: 48%;\n  left: 52%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  background-image: url('/images/airdrop/needle.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      let m = (0, i.F4)(a()),
        p = i.ZP.div(o()),
        h = i.ZP.div(d(), (e) => (e.$isSpinning ? "5s ease-out" : "none")),
        f = i.ZP.div(
          u(),
          (e) =>
            0 === e.$rotation ? "rotate(".concat(e.$rotation, "deg)") : "none",
          (e) =>
            e.$isSpinning || 0 !== e.$rotation ? "none" : (0, i.iv)(c(), m)
        ),
        g = i.ZP.div(x());
      function b() {
        let { isSpinning: e, rotation: t } = (0, r.s)();
        return (0, l.jsxs)("div", {
          className:
            "flex w-full flex-col items-center justify-center lg:pr-[65px] lg:pt-10",
          children: [
            (0, l.jsx)("h1", {
              className:
                "clash-display-semibold mb-8 flex text-center text-[36px] leading-[36px] lg:hidden",
              children: "WHEEL OF FORTUNE",
            }),
            (0, l.jsxs)(p, {
              children: [
                (0, l.jsx)(g, {}),
                (0, l.jsx)(f, {
                  $rotation: t,
                  $isSpinning: e,
                  children: (0, l.jsx)(h, {
                    style: { transform: "rotate(".concat(t, "deg)") },
                    $rotation: t,
                    $isSpinning: e,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [974, 684, 956, 598, 418, 971, 23, 744], function () {
      return e((e.s = 8973));
    }),
      (_N_E = e.O());
  },
]);
