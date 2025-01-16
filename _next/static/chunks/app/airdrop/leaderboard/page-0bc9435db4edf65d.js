(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [182],
  {
    2633: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 1904)),
        Promise.resolve().then(r.bind(r, 7222));
    },
    6710: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(7437),
        a = r(2665),
        s = r(3110),
        i = r(3592);
      function l(e) {
        let {
            balance: t,
            token: r,
            suffix: l,
            decimalScale: o,
            className: c,
          } = e,
          d = "string" == typeof r ? s.no[r] : r,
          x = (0, s.NV)(d, t),
          u = d ? d.DisplayDecimalScale : i.bt;
        return (
          o && o > 0 && (u = o),
          (0, n.jsx)(a.h3, {
            value: x,
            className: c,
            displayType: "text",
            decimalScale: u,
            thousandSeparator: ",",
            suffix: l,
          })
        );
      }
    },
    7058: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(7437),
        a = r(3592),
        s = r(3110),
        i = r(2665);
      function l(e) {
        let { balance: t, token: r, suffix: l, decimalScale: o } = e,
          c = "string" == typeof r ? s.no[r] : r,
          d = (0, s.NV)(c, t),
          x = c ? c.DisplayDecimalScale : a.bt;
        return (
          o && o > 0 && (x = o),
          (0, n.jsx)(n.Fragment, {
            children:
              d > 1e3
                ? (0, a.uf)(d)
                : (0, n.jsx)(i.h3, {
                    value: d,
                    displayType: "text",
                    decimalScale: x,
                    thousandSeparator: ",",
                    suffix: l,
                  }),
          })
        );
      }
    },
    9597: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return a;
        },
      });
      var n = r(8472);
      function a(e) {
        let { message: t } = (function (e) {
          let t = "An error occurred, please try again",
            r = 500,
            a = "UNKNOWN_ERROR";
          if (n.Z.isAxiosError(e)) {
            var s, i, l;
            (t =
              null === (s = e.response) || void 0 === s
                ? void 0
                : s.data.message),
              (a =
                null === (i = e.response) || void 0 === i
                  ? void 0
                  : i.data.code),
              (r =
                (null === (l = e.response) || void 0 === l
                  ? void 0
                  : l.status) || 500);
          } else e instanceof Error && (t = e.message);
          return { message: t, code: a, status: r };
        })(e);
        return Error(t);
      }
    },
    8378: function (e, t, r) {
      "use strict";
      r.d(t, {
        CL: function () {
          return x;
        },
        _i: function () {
          return d;
        },
      });
      var n = r(8472);
      let a = "https://api.meshchain.ai",
        s = !1,
        i = [],
        l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          i.forEach((r) => {
            e ? r.reject(e) : r.resolve(t);
          }),
            (i = []);
        },
        o = n.Z.create({ baseURL: a });
      async function c() {
        let e = sessionStorage.getItem("refresh_token");
        if (!e) throw Error("No refresh token available");
        let { access_token: t, refresh_token: r } = (
          await n.Z.post("".concat(a, "/meshmain/auth/refresh-token"), {
            refresh_token: e,
          })
        ).data;
        return (
          sessionStorage.setItem("access_token", t),
          sessionStorage.setItem("refresh_token", r),
          t
        );
      }
      async function d(e) {
        return await o.get(e);
      }
      async function x(e, t, r) {
        return await o.post(e, t, r ? { headers: r } : {});
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
            let r = e.config,
              n =
                (null === (t = e.response.data) || void 0 === t
                  ? void 0
                  : t.code) || "";
            return 401 !== e.response.status || "40100002" !== n || r._retry
              ? Promise.reject(e)
              : ((r._retry = !0), s)
              ? new Promise(function (e, t) {
                  i.push({ resolve: e, reject: t });
                })
                  .then(
                    (e) => ((r.headers.Authorization = "Bearer " + e), o(r))
                  )
                  .catch((e) => Promise.reject(e))
              : ((s = !0),
                console.log("refreshing access token"),
                new Promise(function (e, t) {
                  c()
                    .then((t) => {
                      (r.headers.Authorization = "Bearer " + t),
                        l(null, t),
                        e(o(r));
                    })
                    .catch((e) => {
                      l(e, null), t(e);
                    })
                    .finally(() => {
                      s = !1;
                    });
                }));
          }
        );
    },
    7643: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return n;
        },
        U: function () {
          return a;
        },
      });
      let n = (e) => (e ? e.charAt(0).toUpperCase() : "A"),
        a = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          if (e.length <= t) return e;
          let r = e.slice(0, t);
          return "".concat(r, "...");
        };
    },
    3592: function (e, t, r) {
      "use strict";
      r.d(t, {
        bt: function () {
          return n;
        },
        dl: function () {
          return a;
        },
        uf: function () {
          return s;
        },
      });
      let n = 6,
        a = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
          return parseFloat(e.toFixed(t)).toString();
        },
        s = (e) => {
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
    3110: function (e, t, r) {
      "use strict";
      r.d(t, {
        Aw: function () {
          return c;
        },
        DQ: function () {
          return i;
        },
        NV: function () {
          return m;
        },
        Sp: function () {
          return s;
        },
        X: function () {
          return o;
        },
        ZD: function () {
          return l;
        },
        no: function () {
          return x;
        },
        sI: function () {
          return p;
        },
        w4: function () {
          return u;
        },
        yA: function () {
          return d;
        },
      });
      var n = r(3592),
        a = r(7603);
      let s = {
          Symbol: "ETH",
          Address: "eth",
          Decimal: 18,
          DisplayDecimalScale: 6,
          Order: 4,
        },
        i = {
          Symbol: "USDC",
          Address: "usdc",
          Decimal: 6,
          DisplayDecimalScale: 3,
          Order: 3,
        },
        l = {
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
        c = {
          Symbol: "MCC",
          Address: "mcc",
          Decimal: 18,
          DisplayDecimalScale: 6,
          Order: 0,
        },
        d = {
          Symbol: "POINT",
          Address: "point",
          Decimal: 0,
          DisplayDecimalScale: 0,
          Order: 0,
        },
        x = {
          [c.Address]: c,
          [d.Address]: d,
          [l.Address]: l,
          [o.Address]: o,
          [i.Address]: i,
        },
        u = (e, t) => {
          let r = "string" == typeof e ? x[e] : e,
            a = m(r, t),
            s = r ? r.DisplayDecimalScale : n.bt;
          return (0, n.dl)(a, s);
        },
        m = (e, t) => {
          "string" == typeof t && (t = Number(t));
          let r = "string" == typeof e ? x[e] : e,
            n = r ? r.Decimal : 0;
          return n < 1 ? t : t / Number("1e".concat(n));
        },
        p = (e, t) => h(e, t).toDecimalPlaces(9, a.Z.ROUND_FLOOR).toNumber(),
        h = (e, t) => {
          let r = "string" == typeof e ? x[e] : e,
            n = r ? r.Decimal : 0;
          if (n < 1) return t;
          let a = Number("1e".concat(n));
          return t.div(a);
        };
    },
    1904: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return m;
        },
      });
      var n = r(7437),
        a = r(6710),
        s = r(1617),
        i = r(8378),
        l = r(9597);
      let o = () => "/meshmain/leaderboard/my-summary",
        c = () => "/meshmain/lucky-wheel/next-round/simple ";
      var d = r(7138),
        x = r(2265);
      let u = (e) => {
        let { title: t, balance: r, symbol: s, ...i } = e;
        return (0, n.jsxs)("div", {
          style: {
            backdropFilter: "blur(50px)",
            background: "rgba(0, 0, 0, 0.28",
            borderTop: "1px solid rgba(0, 255, 163, 0.10)",
            boxShadow:
              "2px 4px 16px 0px rgba(0, 255, 163, 0.06) inset, 0px 54px 32px -16px rgba(5, 5, 5, 0.05)",
          },
          className:
            "mb-7 w-full max-w-md rounded-2xl bg-opacity-70 p-5 shadow-lg xl:p-7",
          ...i,
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, n.jsx)("p", {
                  style: { color: "rgba(255, 255, 255, 0.50)" },
                  className:
                    "text-[18px] font-normal uppercase text-gray-300 xl:text-[20px]",
                  children: t,
                }),
                "My Referrals" === t &&
                  (0, n.jsx)(d.default, {
                    href: "https://orion-ai-app-cs.vercel.app/referrals",
                    target: "blank",
                    className:
                      "font-poppins hidden h-11 items-center rounded-[30px] px-5 text-[#00FFA3] md:flex",
                    style: { background: "rgba(237, 255, 248, 0.10)" },
                    children: "Invite friends",
                  }),
              ],
            }),
            (0, n.jsxs)("h1", {
              className:
                "clash-display-semibold mt-8 text-[44px] font-semibold leading-[53px]",
              children: [
                (0, n.jsx)(a.Z, { token: String("point"), balance: Number(r) }),
                " ",
                (0, n.jsx)("span", { className: "text-[24px]", children: s }),
              ],
            }),
          ],
        });
      };
      var m = () => {
        var e, t;
        let {
            data: r,
            error: a,
            isLoading: d,
          } = (function () {
            let {
              data: e,
              error: t,
              isLoading: r,
              mutate: n,
            } = (0, s.ZP)(o(), async (e) => {
              try {
                return (await (0, i._i)(e)).data;
              } catch (e) {
                throw (0, l.C)(e);
              }
            });
            return { data: e, error: t, isLoading: r, mutate: n };
          })(),
          { spinStartTime: m, spinEndTime: p } = (function () {
            let {
                data: e,
                error: t,
                isLoading: r,
                mutate: n,
              } = (0, s.ZP)(c(), async (e) => {
                try {
                  return (await (0, i._i)(e)).data;
                } catch (e) {
                  throw (0, l.C)(e);
                }
              }),
              a = null == e ? void 0 : e.spinStartTime,
              o = null == e ? void 0 : e.spinEndTime;
            return {
              spinStartTime: a,
              spinEndTime: o,
              spinInterval: null == e ? void 0 : e.spinInterval,
              maxSpinPerUser: (null == e ? void 0 : e.maxSpinPerUser) || 0,
              amountPerSpin: (null == e ? void 0 : e.amountPerSpin) || 100,
              loading: r,
              error: t,
              mutate: n,
            };
          })(),
          [h, g] = (0, x.useState)(!1),
          [f, b] = (0, x.useState)(0);
        (0, x.useEffect)(() => {
          let e = () => {
            let e = Math.floor(Date.now() / 1e3);
            e < Number(m)
              ? (b(Number(m) - e), g(!1))
              : e >= Number(m) && e < Number(p)
              ? (b(Number(p) - e), g(!0))
              : (b(0), g(!1));
          };
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }, [m, p]);
        let {
          d: v,
          h: y,
          m: N,
          s: j,
        } = ((e) => {
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
        })(f);
        return (0, n.jsxs)("div", {
          className:
            "flex w-full flex-col items-center justify-center px-4 text-white",
          children: [
            (0, n.jsxs)("div", {
              className: "flex w-full gap-6 lg:contents lg:gap-0",
              children: [
                (0, n.jsx)(u, {
                  title: "My Mining",
                  balance:
                    (null == r
                      ? void 0
                      : null === (e = r.mining) || void 0 === e
                      ? void 0
                      : e.total_amount) || 0,
                  symbol: "POINT",
                }),
                (0, n.jsx)(u, {
                  title: "My Referrals",
                  balance:
                    (null == r
                      ? void 0
                      : null === (t = r.referral) || void 0 === t
                      ? void 0
                      : t.friend_count) || 0,
                  symbol: "POINT",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              style: {
                backgroundImage:
                  'url("/images/airdrop/bg-table-leaderboard.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              },
              className: "hidden w-full rounded-[24px] shadow-lg lg:block",
              children: (0, n.jsxs)("div", {
                style: {
                  backgroundImage:
                    'url("/images/airdrop/bg_spin_leaderboard.svg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                },
                className: "h-[500px] rounded-[24px]",
                children: [
                  (0, n.jsx)("h2", {
                    className:
                      "clash-display-semibold mb-2 mt-[26px] text-center text-[28px] font-bold",
                    children: "TRY YOUR LUCK",
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "clash-display-semibold mb-4 text-center text-[28px] font-medium",
                    children: "SPIN FOR REWARDS!",
                  }),
                  (0, n.jsx)("div", {
                    className: "flex w-full items-center justify-center",
                    children: (0, n.jsxs)("div", {
                      style: {
                        border: "1.5px solid rgba(0, 255, 163, 0.40)",
                        background: "rgba(0, 55, 36, 0.32)",
                        boxShadow:
                          "2px 4px 16px 0px rgba(0, 255, 163, 0.06) inset, 0px 54px 32px -16px rgba(5, 5, 5, 0.05)",
                        backdropFilter: "blur(50px)",
                      },
                      className:
                        "w-fit flex-col items-center rounded-[12px] px-3 py-2 lg:w-fit",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "clash-display-regular text-center text-[10px] text-[#00FFA3] sm:text-[13px]",
                          children: h ? "On-going" : "Next Round In",
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "w-[42px] text-center text-white sm:w-[54px]",
                              children: [
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-semibold text-[20px] text-[#00FFA3] md:text-[28px]",
                                  children: v,
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-regular text-[10px] sm:text-[12px]",
                                  children: "DAY",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "w-[42px] text-center text-white sm:w-[54px]",
                              children: [
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-semibold text-[20px] text-[#00FFA3] md:text-[28px]",
                                  children: y,
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-regular text-[10px] sm:text-[12px]",
                                  children: "HRS",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "w-[42px] text-center text-white sm:w-[54px]",
                              children: [
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-semibold text-[20px] text-[#00FFA3] md:text-[28px]",
                                  children: N,
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-regular text-[10px] sm:text-[12px]",
                                  children: "MIN",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "w-[42px] text-center text-white sm:w-[54px]",
                              children: [
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-semibold text-[20px] text-[#00FFA3] md:text-[28px]",
                                  children: j,
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "clash-display-regular text-[10px] sm:text-[12px]",
                                  children: "SEC",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    7222: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return b;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(6648),
        i = r(7643),
        l = r(7058),
        o = r(1044);
      function c(e) {
        let {
          currentTab: t,
          currentData: r,
          isLoading: a,
          error: c,
          total: d,
          page: x,
          pageSize: u,
          onPageChange: m,
        } = e;
        if (a) return (0, n.jsx)("p", { children: "Loading..." });
        if (c) return (0, n.jsxs)("p", { children: ["Error: ", c.message] });
        let p = [
            "#FF5733",
            "#33FF57",
            "#3357FF",
            "#FF33A8",
            "#FFBD33",
            "#33FFBD",
          ],
          h = new Map(),
          g = (e) => {
            switch (e) {
              case 1:
                return "/images/airdrop/avt_rank_logo_1.svg";
              case 2:
                return "/images/airdrop/avt_rank_logo_2.svg";
              case 3:
                return "/images/airdrop/avt_rank_logo_3.svg";
              default:
                return "/images/airdrop/avt_rank_logo_4.svg";
            }
          };
        return (0, n.jsxs)("div", {
          style: { background: "rgba(0, 0, 0, 0.28)", borderColor: "#003724" },
          className:
            "bg-dark-green mt-5 h-full w-full rounded-[0px] border p-5 text-white lg:rounded-[24px]",
          children: [
            (0, n.jsxs)("div", {
              className: "mx-auto h-full w-full",
              children: [
                (0, n.jsxs)("table", {
                  className: "w-full table-auto text-center",
                  children: [
                    (0, n.jsx)("thead", {
                      children: (0, n.jsxs)("tr", {
                        className:
                          "h-[54px] bg-[#003724] text-[12px] text-[#009660] sm:text-[14px] md:text-[16px]",
                        children: [
                          (0, n.jsx)("td", {
                            className:
                              "w-[66px] rounded-l-[12px] px-2 py-2 text-center",
                            children: "Rank",
                          }),
                          (0, n.jsx)("td", {
                            className: "px-4 py-2 text-left",
                            children: "Name",
                          }),
                          (0, n.jsxs)("td", {
                            className: "rounded-r-[12px] px-4 py-2 text-right",
                            children: [
                              "mining" === t ? "Points" : "Friends",
                              " ",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("tbody", {
                      children:
                        null == r
                          ? void 0
                          : r.map((e, r) => {
                              let a = h.get(e.user.id);
                              a ||
                                ((a = p[h.size % p.length]),
                                h.set(e.user.id, a));
                              let o = (Number(x || 1) - 1) * Number(u || 10);
                              return (0, n.jsxs)(
                                "tr",
                                {
                                  className:
                                    "h-[48px] text-[12px] sm:text-[14px] md:text-[20px]",
                                  children: [
                                    (0, n.jsx)("td", {
                                      className:
                                        "px-2 py-2 text-center text-[12px] sm:text-[16px]",
                                      children: o + (r + 1),
                                    }),
                                    (0, n.jsxs)("td", {
                                      className:
                                        "flex items-center justify-start space-x-2 px-2 py-2",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className:
                                            "relative mb-[10px] flex h-10 w-10 min-w-10 items-center justify-center rounded-full",
                                          children: [
                                            (0, n.jsx)(s.default, {
                                              className:
                                                "absolute inset-0 z-10 min-w-[40px] rounded-full",
                                              width: 40,
                                              height: 40,
                                              src: g(r + 1),
                                              alt: "Rank ".concat(r + 1),
                                            }),
                                            (0, n.jsx)("span", {
                                              className:
                                                "z-1 flex h-8 w-8 items-center justify-center rounded-[50%] ".concat(
                                                  0 === r || 1 === r || 2 === r
                                                    ? "mt-[10px]"
                                                    : ""
                                                ),
                                              style: {
                                                fontFamily:
                                                  "ClashDisplay-Medium",
                                                background: a,
                                              },
                                              children: (0, i.Q)(
                                                String(e.user.name)
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "text-[12px] sm:text-[16px]",
                                          children: (0, i.U)(
                                            String(e.user.name),
                                            10
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)("td", {
                                      className: "px-4 py-2 text-right",
                                      children: (0, n.jsx)(l.Z, {
                                        token: String("point"),
                                        balance: Number(
                                          "mining" === t
                                            ? e.total_amount
                                            : e.friend_count
                                        ),
                                      }),
                                    }),
                                  ],
                                },
                                e.id
                              );
                            }),
                    }),
                  ],
                }),
                !(null == r ? void 0 : r.length) &&
                  (0, n.jsx)("div", {
                    className:
                      "flex h-[400px] w-full items-center justify-center text-center text-gray-400",
                    children: (0, n.jsxs)("div", {
                      children: [
                        !a &&
                          (0, n.jsx)(s.default, {
                            className: "mx-auto mb-2",
                            src: "/images/airdrop/empty_state.svg",
                            alt: "Icon Empty",
                            width: 64,
                            height: 40,
                          }),
                        a ? "Loading..." : "No History Found",
                      ],
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "mt-4 flex justify-center",
              children: (0, n.jsx)(o.Z, {
                current: x,
                pageSize: u,
                total: d,
                onChange: m,
              }),
            }),
          ],
        });
      }
      var d = r(1617),
        x = r(8378),
        u = r(9597);
      let m = (e, t) =>
        "/meshmain/leaderboard/referral?page=".concat(e, "&limit=").concat(t);
      function p() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
          {
            data: r,
            error: n,
            isLoading: a,
            mutate: s,
          } = (0, d.ZP)(m(e, t), async (e) => {
            try {
              return (await (0, x._i)(e)).data;
            } catch (e) {
              throw (0, u.C)(e);
            }
          });
        return { leaderboardData: r || [], loading: a, error: n, mutate: s };
      }
      let h = (e, t) =>
        "/meshmain/leaderboard/mining?page=".concat(e, "&limit=").concat(t);
      function g() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
          {
            data: r,
            error: n,
            isLoading: a,
            mutate: s,
          } = (0, d.ZP)(h(e, t), async (e) => {
            try {
              return (await (0, x._i)(e)).data;
            } catch (e) {
              throw (0, u.C)(e);
            }
          });
        return { leaderboardData: r || [], loading: a, error: n, mutate: s };
      }
      var f = r(6710),
        b = () => {
          let [e, t] = (0, a.useState)(1),
            [r, l] = (0, a.useState)("mining"),
            { leaderboardData: o, loading: d, error: x, mutate: u } = g(e, 20),
            { leaderboardData: m, loading: h, error: b, mutate: v } = p(e, 20),
            { leaderboardData: y } = g(),
            { leaderboardData: N } = p(),
            j = "mining" === r,
            w = j ? (null == o ? void 0 : o.page) : null == m ? void 0 : m.page,
            S = j
              ? null == o
                ? void 0
                : o.totals
              : null == m
              ? void 0
              : m.totals,
            _ = j ? (null == y ? void 0 : y.data) : null == N ? void 0 : N.data,
            D = j ? (null == o ? void 0 : o.data) : null == m ? void 0 : m.data,
            F = (e) => {
              l(e);
            },
            k = [
              "#FF5733",
              "#33FF57",
              "#3357FF",
              "#FF33A8",
              "#FFBD33",
              "#33FFBD",
            ],
            A = new Map(),
            C = (e) => {
              switch (e) {
                case 2:
                  return "/images/airdrop/avt_rank_logo_1.svg";
                case 1:
                  return "/images/airdrop/avt_rank_logo_2.svg";
                case 3:
                  return "/images/airdrop/avt_rank_logo_3.svg";
                default:
                  return "/images/airdrop/avt_rank_logo_4.svg";
              }
            };
          return (
            (0, a.useEffect)(() => {
              t(1);
            }, [r]),
            (0, n.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              },
              className: "w-full",
              children: [
                (0, n.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: "16px",
                    marginBottom: "24px",
                    border: "1px solid #06754E",
                  },
                  className: "w-fit rounded-[24px] bg-[#003724]",
                  children: [
                    (0, n.jsx)("button", {
                      onClick: () => F("mining"),
                      style: {
                        padding: "8px 20px",
                        borderRadius: "24px",
                        backgroundColor:
                          "mining" === r ? "#00C076" : "transparent",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      },
                      className: "w-full min-w-[150px] md:min-w-[200px]",
                      children: "Mining",
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => F("referrals"),
                      style: {
                        padding: "8px 20px",
                        borderRadius: "24px",
                        backgroundColor:
                          "referrals" === r ? "#00C076" : "transparent",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      },
                      className: "w-full min-w-[150px] md:min-w-[200px]",
                      children: "Referrals",
                    }),
                  ],
                }),
                (0, n.jsx)("h2", {
                  className:
                    "clash-display-semibold mb-4 text-[32px] sm:mb-10 md:text-[40px]",
                  children: "mining" === r ? "HARD WORKING" : "TOP REFERRALS",
                }),
                (0, n.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  },
                  className: "w-full px-[18px] lg:px-[0px]",
                  children:
                    null == _
                      ? void 0
                      : _.slice(0, 3)
                          .sort((e, t) => {
                            let r = [2, 1, 3];
                            return (
                              r.indexOf(_.indexOf(e) + 1) -
                              r.indexOf(_.indexOf(t) + 1)
                            );
                          })
                          .map((e, t) => {
                            let a = [
                                "/images/airdrop/bg_top_silver.svg",
                                "/images/airdrop/bg_top_gold.svg",
                                "/images/airdrop/bg_top_bronze.svg",
                              ],
                              l = a[t % a.length],
                              o = 1 === t,
                              c = A.get(e.user_id);
                            return (
                              c ||
                                ((c = k[A.size % k.length]),
                                A.set(e.user_id, c)),
                              (0, n.jsx)(
                                "div",
                                {
                                  style: {
                                    position: "relative",
                                    width: o ? "300px" : "240px",
                                    height: o ? "314px" : "260px",
                                    borderRadius: "24px",
                                    background: "url(".concat(
                                      l,
                                      ") center/contain no-repeat"
                                    ),
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "start",
                                    zIndex: 1 === t ? 10 : 1,
                                  },
                                  className:
                                    "max-h-[220px]sm:max-h-full ".concat(
                                      0 === t
                                        ? "mr-[-5px] sm:mr-[-25px]"
                                        : 2 === t
                                        ? "ml-[-5px] sm:ml-[-25px]"
                                        : {}
                                    ),
                                  children: (0, n.jsxs)("div", {
                                    className: "mt-".concat(
                                      "16",
                                      " sm:mt-14 md:mt-8"
                                    ),
                                    style: { textAlign: "center" },
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "flex items-center justify-center",
                                        children: (0, n.jsxs)("div", {
                                          className:
                                            "relative mb-[10px] flex h-[40px] w-[40px] min-w-10 items-center justify-center rounded-full sm:h-[48px] sm:w-[48px] md:h-[68px] md:w-[68px]",
                                          children: [
                                            (0, n.jsx)(s.default, {
                                              className:
                                                "absolute inset-0 z-10 rounded-full sm:min-w-[48px] md:min-w-[68px]",
                                              width: 40,
                                              height: 40,
                                              src: C(t + 1),
                                              alt: "Rank ".concat(t + 1),
                                            }),
                                            (0, n.jsx)("span", {
                                              className:
                                                "z-1 flex h-[32px] w-[32px] items-center justify-center rounded-[50%] text-[24px] sm:h-[40px] sm:w-[40px] md:h-[60px] md:w-[60px] ".concat(
                                                  0 === t || 1 === t
                                                    ? "mt-[10px]"
                                                    : "".concat(
                                                        2 === t
                                                          ? "mt-[16px]"
                                                          : ""
                                                      )
                                                ),
                                              style: {
                                                fontFamily:
                                                  "ClashDisplay-Medium",
                                                background: c,
                                              },
                                              children: (0, i.Q)(e.user.name),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, n.jsx)("p", {
                                        className:
                                          "mt-1 text-[10px] sm:mt-2 sm:text-[14px] md:text-[16px]",
                                        style: {
                                          fontWeight: "bold",
                                          color: "white",
                                        },
                                        children: e.user.name,
                                      }),
                                      (0, n.jsxs)("p", {
                                        className: "text-[12px] md:text-[14px]",
                                        style: {
                                          color: "rgba(255, 255, 255, 0.50)",
                                        },
                                        children: [
                                          (0, n.jsx)(f.Z, {
                                            token: String("point"),
                                            balance: Number(
                                              "mining" === r
                                                ? e.total_amount
                                                : e.friend_count
                                            ),
                                          }),
                                          " ",
                                          "mining" === r ? "POINT" : "Friends",
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                e.user_id
                              )
                            );
                          }),
                }),
                (0, n.jsx)(c, {
                  currentTab: r,
                  currentData: D,
                  isLoading: j ? d : h,
                  error: j ? x : b,
                  total: S,
                  page: w,
                  pageSize: 20,
                  onPageChange: (e) => {
                    t(e);
                  },
                }),
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(0, [974, 684, 598, 44, 971, 23, 744], function () {
      return e((e.s = 2633));
    }),
      (_N_E = e.O());
  },
]);
