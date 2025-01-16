(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [909],
  {
    7782: function (a, e, i) {
      Promise.resolve().then(i.bind(i, 4995)),
        Promise.resolve().then(i.bind(i, 3601)),
        Promise.resolve().then(i.bind(i, 1347)),
        Promise.resolve().then(i.bind(i, 7197)),
        Promise.resolve().then(i.bind(i, 780));
    },
    6710: function (a, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      var s = i(7437),
        t = i(2665),
        r = i(3110),
        x = i(3592);
      function n(a) {
        let {
            balance: e,
            token: i,
            suffix: n,
            decimalScale: l,
            className: o,
          } = a,
          d = "string" == typeof i ? r.no[i] : i,
          k = (0, r.NV)(d, e),
          c = d ? d.DisplayDecimalScale : x.bt;
        return (
          l && l > 0 && (c = l),
          (0, s.jsx)(t.h3, {
            value: k,
            className: o,
            displayType: "text",
            decimalScale: c,
            thousandSeparator: ",",
            suffix: n,
          })
        );
      }
    },
    4662: function (a, e, i) {
      "use strict";
      i.d(e, {
        Vq: function () {
          return n;
        },
        cZ: function () {
          return d;
        },
      });
      var s = i(7437),
        t = i(2265),
        r = i(1310),
        x = i(9354);
      let n = r.fC;
      r.xz;
      let l = r.h_;
      r.x8;
      let o = t.forwardRef((a, e) => {
        let { className: i, ...t } = a;
        return (0, s.jsx)(r.aV, {
          ref: e,
          className: (0, x.cn)(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            i
          ),
          ...t,
        });
      });
      o.displayName = r.aV.displayName;
      let d = t.forwardRef((a, e) => {
        let { className: i, children: t, ...n } = a;
        return (0, s.jsxs)(l, {
          children: [
            (0, s.jsx)(o, {}),
            (0, s.jsx)(r.VY, {
              ref: e,
              className: (0, x.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
                i
              ),
              ...n,
              children: t,
            }),
          ],
        });
      });
      (d.displayName = r.VY.displayName),
        (t.forwardRef((a, e) => {
          let { className: i, ...t } = a;
          return (0, s.jsx)(r.Dx, {
            ref: e,
            className: (0, x.cn)(
              "text-lg font-semibold leading-none tracking-tight",
              i
            ),
            ...t,
          });
        }).displayName = r.Dx.displayName),
        (t.forwardRef((a, e) => {
          let { className: i, ...t } = a;
          return (0, s.jsx)(r.dk, {
            ref: e,
            className: (0, x.cn)("text-sm text-muted-foreground", i),
            ...t,
          });
        }).displayName = r.dk.displayName);
    },
    9388: function (a, e, i) {
      "use strict";
      i.d(e, {
        Rs: function () {
          return o;
        },
        kI: function () {
          return d;
        },
      });
      var s = i(7603),
        t = i(3592),
        r = i(9597),
        x = i(8378),
        n = i(1617),
        l = i(3110);
      let o = (a) => {
        let e = new s.Z(a.balance),
          i = (0, l.w4)(a.address, a.balance);
        return {
          id: a.id,
          symbol: a.symbol,
          address: a.address,
          balance: e.toFixed(t.bt),
          rawBalance: e,
          balanceString: i,
        };
      };
      function d() {
        let a =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          {
            data: e,
            error: i,
            isLoading: s,
            mutate: t,
          } = (0, n.ZP)("/meshmain/wallet/tokens", async (a) => {
            try {
              return (await (0, x._i)(a)).data.data;
            } catch (a) {
              throw (0, r.C)(a);
            }
          }),
          l = null;
        if (a && e) {
          let i = e.findIndex((e) => e.address == a);
          l = e[i];
        }
        return { tokens: e, foundToken: l, loading: s, error: i, mutate: t };
      }
    },
    4754: function (a, e, i) {
      "use strict";
      i.d(e, {
        MV: function () {
          return t;
        },
        wT: function () {
          return l;
        },
      });
      var s,
        t,
        r = i(1617),
        x = i(9597),
        n = i(8378);
      function l() {
        let { data: a, mutate: e } = (0, r.ZP)(
          "/meshmain/presales",
          async function (a) {
            try {
              var e, i;
              let s = await (0, n._i)(a);
              if (!(null === (e = s.data) || void 0 === e ? void 0 : e.data))
                return Promise.reject("No response found for this page");
              return null === (i = s.data) || void 0 === i
                ? void 0
                : i.data.map((a) => ({
                    id: a.id,
                    name: a.name,
                    start_time: new Date(a.start_time).toUTCString(),
                    end_time: new Date(a.end_time).toUTCString(),
                    usd_price: a.usd_price,
                    total_cap: a.total_cap,
                    sold_cap: a.sold_cap,
                    sold_percent:
                      a.total_cap <= 0 ? 0 : (a.sold_cap / a.total_cap) * 100,
                    status: a.status,
                  }));
            } catch (a) {
              throw (0, x.C)(a);
            }
          },
          { refreshInterval: 5e3 }
        );
        return { data: a, mutate: e };
      }
      ((s = t || (t = {})).Pending = "pending"),
        (s.Active = "active"),
        (s.Completed = "completed");
    },
    3447: function (a, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return n;
        },
      });
      var s = i(9597),
        t = i(8378),
        r = i(2265),
        x = i(1617);
      function n() {
        let [a, e] = (0, r.useState)(!0),
          { data: i, mutate: n } = (0, x.ZP)(
            "/meshmain/user/profile",
            async function (a) {
              try {
                return e(!0), (await (0, t._i)(a)).data;
              } catch (a) {
                throw (0, s.C)(a);
              } finally {
                e(!1);
              }
            }
          );
        return {
          userProfile: (null == i ? void 0 : i.id) ? i : void 0,
          loading: a,
          mutate: n,
        };
      }
    },
    9597: function (a, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return t;
        },
      });
      var s = i(8472);
      function t(a) {
        let { message: e } = (function (a) {
          let e = "An error occurred, please try again",
            i = 500,
            t = "UNKNOWN_ERROR";
          if (s.Z.isAxiosError(a)) {
            var r, x, n;
            (e =
              null === (r = a.response) || void 0 === r
                ? void 0
                : r.data.message),
              (t =
                null === (x = a.response) || void 0 === x
                  ? void 0
                  : x.data.code),
              (i =
                (null === (n = a.response) || void 0 === n
                  ? void 0
                  : n.status) || 500);
          } else a instanceof Error && (e = a.message);
          return { message: e, code: t, status: i };
        })(a);
        return Error(e);
      }
    },
    8378: function (a, e, i) {
      "use strict";
      i.d(e, {
        CL: function () {
          return k;
        },
        _i: function () {
          return d;
        },
      });
      var s = i(8472);
      let t = "https://api.meshchain.ai",
        r = !1,
        x = [],
        n = function (a) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          x.forEach((i) => {
            a ? i.reject(a) : i.resolve(e);
          }),
            (x = []);
        },
        l = s.Z.create({ baseURL: t });
      async function o() {
        let a = sessionStorage.getItem("refresh_token");
        if (!a) throw Error("No refresh token available");
        let { access_token: e, refresh_token: i } = (
          await s.Z.post("".concat(t, "/meshmain/auth/refresh-token"), {
            refresh_token: a,
          })
        ).data;
        return (
          sessionStorage.setItem("access_token", e),
          sessionStorage.setItem("refresh_token", i),
          e
        );
      }
      async function d(a) {
        return await l.get(a);
      }
      async function k(a, e, i) {
        return await l.post(a, e, i ? { headers: i } : {});
      }
      l.interceptors.request.use(
        (a) => {
          let e = sessionStorage.getItem("access_token");
          return (
            e && !a.headers.Authorization
              ? (a.headers.Authorization = "Bearer ".concat(e))
              : e || delete a.headers.Authorization,
            a
          );
        },
        (a) => Promise.reject(a)
      ),
        l.interceptors.response.use(
          (a) => a,
          async (a) => {
            var e;
            let i = a.config,
              s =
                (null === (e = a.response.data) || void 0 === e
                  ? void 0
                  : e.code) || "";
            return 401 !== a.response.status || "40100002" !== s || i._retry
              ? Promise.reject(a)
              : ((i._retry = !0), r)
              ? new Promise(function (a, e) {
                  x.push({ resolve: a, reject: e });
                })
                  .then(
                    (a) => ((i.headers.Authorization = "Bearer " + a), l(i))
                  )
                  .catch((a) => Promise.reject(a))
              : ((r = !0),
                console.log("refreshing access token"),
                new Promise(function (a, e) {
                  o()
                    .then((e) => {
                      (i.headers.Authorization = "Bearer " + e),
                        n(null, e),
                        a(l(i));
                    })
                    .catch((a) => {
                      n(a, null), e(a);
                    })
                    .finally(() => {
                      r = !1;
                    });
                }));
          }
        );
    },
    3592: function (a, e, i) {
      "use strict";
      i.d(e, {
        bt: function () {
          return s;
        },
        dl: function () {
          return t;
        },
        uf: function () {
          return r;
        },
      });
      let s = 6,
        t = function (a) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
          return parseFloat(a.toFixed(e)).toString();
        },
        r = (a) => {
          let e = Number(a);
          return e >= 1e9
            ? "".concat(
                (e / 1e9).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                "B"
              )
            : e >= 1e6
            ? "".concat(
                (e / 1e6).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                "M"
              )
            : e >= 1e3
            ? "".concat(
                (e / 1e3).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                "K"
              )
            : e.toLocaleString();
        };
    },
    3110: function (a, e, i) {
      "use strict";
      i.d(e, {
        Aw: function () {
          return o;
        },
        DQ: function () {
          return x;
        },
        NV: function () {
          return p;
        },
        Sp: function () {
          return r;
        },
        X: function () {
          return l;
        },
        ZD: function () {
          return n;
        },
        no: function () {
          return k;
        },
        sI: function () {
          return m;
        },
        w4: function () {
          return c;
        },
        yA: function () {
          return d;
        },
      });
      var s = i(3592),
        t = i(7603);
      let r = {
          Symbol: "ETH",
          Address: "eth",
          Decimal: 18,
          DisplayDecimalScale: 6,
          Order: 4,
        },
        x = {
          Symbol: "USDC",
          Address: "usdc",
          Decimal: 6,
          DisplayDecimalScale: 3,
          Order: 3,
        },
        n = {
          Symbol: "BNB",
          Address: "bnb",
          Decimal: 18,
          DisplayDecimalScale: 4,
          Order: 2,
        },
        l = {
          Symbol: "USDT",
          Address: "usdt",
          Decimal: 18,
          DisplayDecimalScale: 3,
          Order: 1,
        },
        o = {
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
        k = {
          [o.Address]: o,
          [d.Address]: d,
          [n.Address]: n,
          [l.Address]: l,
          [x.Address]: x,
        },
        c = (a, e) => {
          let i = "string" == typeof a ? k[a] : a,
            t = p(i, e),
            r = i ? i.DisplayDecimalScale : s.bt;
          return (0, s.dl)(t, r);
        },
        p = (a, e) => {
          "string" == typeof e && (e = Number(e));
          let i = "string" == typeof a ? k[a] : a,
            s = i ? i.Decimal : 0;
          return s < 1 ? e : e / Number("1e".concat(s));
        },
        m = (a, e) => u(a, e).toDecimalPlaces(9, t.Z.ROUND_FLOOR).toNumber(),
        u = (a, e) => {
          let i = "string" == typeof a ? k[a] : a,
            s = i ? i.Decimal : 0;
          if (s < 1) return e;
          let t = Number("1e".concat(s));
          return e.div(t);
        };
    },
    9354: function (a, e, i) {
      "use strict";
      i.d(e, {
        cn: function () {
          return r;
        },
      });
      var s = i(4839),
        t = i(6164);
      function r() {
        for (var a = arguments.length, e = Array(a), i = 0; i < a; i++)
          e[i] = arguments[i];
        return (0, t.m6)((0, s.W)(e));
      }
    },
    4995: function (a, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return E;
        },
      });
      var s = i(7437),
        t = i(8179),
        r = i(6648),
        x = i(7138),
        n = i(2265),
        l = i(2096),
        o = i(4662),
        d = i(6710),
        k = i(4839),
        c = (a) => {
          var e;
          let {
            estimationData: i,
            isOpen: t,
            disabledConfirm: n,
            onClose: l,
            onConfirm: c,
          } = a;
          return (0, s.jsx)(o.Vq, {
            open: t,
            children: (0, s.jsx)(o.cZ, {
              className:
                "z-[1000] rounded-[20px] px-5 pb-5 pt-8 max-sm:max-w-[90%]",
              style: {
                background:
                  "linear-gradient(180deg, #00C076 20%, rgba(255, 255, 255, 0) 100%)",
                backdropFilter: "blur(41.900001525878906px)",
                boxShadow: "0px 4px 41.9px 0px #0000009C",
              },
              children: (0, s.jsxs)("div", {
                className: "flex w-full flex-col items-center",
                children: [
                  (0, s.jsx)(r.default, {
                    src: "/icons/".concat(i ? "logo_mcc" : "checked", ".svg"),
                    alt: "MCC",
                    width: 124,
                    height: 124,
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-5 flex w-full flex-col items-center gap-8",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "w-full text-center",
                        children: [
                          (0, s.jsx)("h4", {
                            className:
                              "clash-display-semibold text-[24px] leading-[29px] text-[#00FFA3]",
                            children: i
                              ? "Purchase Confirmation"
                              : "Transaction Completed",
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-2 text-sm font-normal",
                            style: { letterSpacing: "1px" },
                            children: i
                              ? "Please review the transaction details carefully before confirming."
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    "The tokens have been transferred to your wallet. Please check your balance in",
                                    " ",
                                    (0, s.jsx)(x.default, {
                                      href: "https://orion-ai-app-cs.vercel.app/wallet",
                                      target: "_blank",
                                      className: "font-bold",
                                      children: "MeshChain Wallet",
                                    }),
                                    ".",
                                  ],
                                }),
                          }),
                        ],
                      }),
                      i &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex items-center gap-2 rounded-[33px] bg-[#00000047] px-5 py-3",
                              children: [
                                (0, s.jsx)("p", {
                                  className: "text-xl font-medium",
                                  children: (0, s.jsx)(d.Z, {
                                    token:
                                      (null == i ? void 0 : i.token1.Address) ||
                                      "",
                                    balance:
                                      (null == i
                                        ? void 0
                                        : i.token1_amount_decimal) || 0,
                                    suffix:
                                      " " +
                                      (null == i ? void 0 : i.token1.Symbol),
                                  }),
                                }),
                                (0, s.jsx)(r.default, {
                                  src: "/icons/logo_mcc.svg",
                                  alt: "MCC",
                                  width: 28,
                                  height: 28,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex w-full flex-col gap-2 rounded-xl bg-[#00000047] p-6",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-sm font-medium text-[#999999]",
                                      children: "Fee",
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-sm font-medium",
                                      children:
                                        i.fee.amount +
                                        " " +
                                        (null === (e = i.fee) || void 0 === e
                                          ? void 0
                                          : e.token.Symbol),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-sm font-medium text-[#999999]",
                                      children: "Total send",
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-sm font-medium",
                                      children: (0, s.jsx)(d.Z, {
                                        token: i.token0.Address || "",
                                        balance: i.token0_amount_decimal || 0,
                                        suffix: " " + i.token0.Symbol,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, s.jsxs)("div", {
                        className: (0, k.Z)({
                          "flex w-full gap-3": !0,
                          "justify-between": !!i,
                          "justify-center": !i,
                        }),
                        children: [
                          (0, s.jsx)("button", {
                            onClick: () => l(),
                            className:
                              "w-1/2 rounded-[30px] border border-white bg-transparent px-8 py-3 text-xl font-medium leading-[30px] text-white shadow-md hover:bg-green-600 hover:text-white focus:outline-none",
                            children: i ? "Cancel" : "Close",
                          }),
                          !!i &&
                            (0, s.jsx)("button", {
                              disabled: n,
                              onClick: c,
                              className:
                                "w-1/2 rounded-[30px] bg-white px-8 py-3 text-xl font-medium leading-[30px] text-black shadow-md hover:bg-green-600 hover:text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black",
                              children: "Confirm",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        p = i(4867),
        m = i(4357),
        u = i(9354);
      let f = m.fC;
      m.ZA;
      let h = m.B4,
        y = n.forwardRef((a, e) => {
          let { className: i, children: t, ...r } = a;
          return (0, s.jsxs)(m.xz, {
            ref: e,
            className: (0, u.cn)(
              "flex h-9 w-full items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              i
            ),
            ...r,
            children: [
              t,
              (0, s.jsx)(m.JO, {
                asChild: !0,
                children: (0, s.jsx)(p.AS7, { className: "h-5 w-5" }),
              }),
            ],
          });
        });
      y.displayName = m.xz.displayName;
      let b = n.forwardRef((a, e) => {
        let { className: i, children: t, position: r = "popper", ...x } = a;
        return (0, s.jsx)(m.h_, {
          children: (0, s.jsx)(m.VY, {
            ref: e,
            className: (0, u.cn)(
              "relative z-50 min-w-[9rem] overflow-hidden rounded-md border bg-primary text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === r &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              i
            ),
            position: r,
            ...x,
            children: (0, s.jsx)(m.l_, {
              className: (0, u.cn)(
                "p-1",
                "popper" === r &&
                  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
              ),
              children: t,
            }),
          }),
        });
      });
      (b.displayName = m.VY.displayName),
        (n.forwardRef((a, e) => {
          let { className: i, ...t } = a;
          return (0, s.jsx)(m.__, {
            ref: e,
            className: (0, u.cn)("px-2 py-1.5 text-sm font-semibold", i),
            ...t,
          });
        }).displayName = m.__.displayName);
      let g = n.forwardRef((a, e) => {
        let { className: i, children: t, ...r } = a;
        return (0, s.jsxs)(m.ck, {
          ref: e,
          className: (0, u.cn)(
            "relative flex w-full cursor-pointer select-none items-center rounded-sm text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            i
          ),
          ...r,
          children: [
            (0, s.jsx)("span", {
              className:
                "absolute right-2 flex h-4 w-4 items-center justify-center",
              children: (0, s.jsx)(m.wU, {
                children: (0, s.jsx)(p.nQG, { className: "h-5 w-5" }),
              }),
            }),
            (0, s.jsx)(m.eT, { children: t }),
          ],
        });
      });
      (g.displayName = m.ck.displayName),
        (n.forwardRef((a, e) => {
          let { className: i, ...t } = a;
          return (0, s.jsx)(m.Z0, {
            ref: e,
            className: (0, u.cn)("-mx-1 my-1 h-px bg-muted", i),
            ...t,
          });
        }).displayName = m.Z0.displayName);
      var v = (a) => {
          let { token: e, tokens: i, onSelectToken: t } = a;
          return (0, s.jsxs)(f, {
            onValueChange: t,
            value: e,
            children: [
              (0, s.jsx)(y, {
                className: "flex h-[30px] w-full rounded-lg p-0",
                children: (0, s.jsx)("div", {
                  className: "flex gap-3 font-semibold",
                  children: (0, s.jsx)(h, {}),
                }),
              }),
              (0, s.jsx)(b, {
                align: "center",
                children: (i || []).map((a) =>
                  (0, s.jsx)(
                    g,
                    {
                      value: a.Address,
                      className: "px-2 py-1",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center text-sm",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "flex h-7 w-7 items-center justify-center",
                            children: (0, s.jsx)(r.default, {
                              src: "/icons/logo_".concat(a.Address, ".svg"),
                              alt: "".concat(a.Symbol, " logo"),
                              width: 28,
                              height: 28,
                              className:
                                "mr-2 max-h-5 max-w-5 sm:max-h-7 sm:max-w-7",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-sm font-medium sm:text-xl sm:leading-[30px]",
                            children: a.Symbol,
                          }),
                        ],
                      }),
                    },
                    a.Address
                  )
                ),
              }),
            ],
          });
        },
        w = i(4754),
        j = i(3447),
        N = i(9388),
        S = i(3110),
        C = i(7634),
        _ = i(9597),
        F = i(8378);
      class A {
        validate() {
          if (!this.token0_address || !S.no[this.token0_address])
            return { error: "Invalid token0 address" };
          if (!this.token1_address || !S.no[this.token1_address])
            return { error: "Invalid token1 address" };
          let a = S.no[this.token0_address],
            e = S.no[this.token1_address];
          return !this.token0_amount || this.token0_amount <= 0
            ? {
                error: "Token0 amount must greater than zero",
                token0: a,
                token1: e,
              }
            : { token0: a, token1: e };
        }
        constructor(a, e, i) {
          (this.token0_address = a),
            (this.token1_address = e),
            (this.token0_amount = i);
        }
      }
      class V extends A {
        validate() {
          return this.quoted_token1_amount <= 0
            ? { error: "Quoted amount must greater than zero" }
            : this.quoted_fee_token && S.no[this.quoted_fee_token]
            ? super.validate()
            : { error: "Invalid fee token" };
        }
        constructor(a, e, i, s, t, r) {
          super(a, e, i),
            (this.token0_address = a),
            (this.token1_address = e),
            (this.token0_amount = i),
            (this.quoted_token1_amount = s),
            (this.quoted_fee_amount = t),
            (this.quoted_fee_token = r);
        }
      }
      var P = i(1347),
        D = i(5956),
        M = i(2665);
      let I = n.forwardRef((a, e) => {
        let {
          className: i,
          type: t,
          value: r,
          defaultValue: x,
          prefixIcon: n,
          suffixIcon: l,
          decimalScale: o,
          thousandSeparator: d,
          ...k
        } = a;
        return (0, s.jsxs)("div", {
          className: (0, u.cn)(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-3xl file:border-0 file:bg-transparent placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            i
          ),
          children: [
            n,
            "number" === t
              ? (0, s.jsx)(M.h3, {
                  displayType: "input",
                  decimalSeparator: ".",
                  decimalScale: o,
                  thousandSeparator: d,
                  className:
                    "w-full bg-transparent text-3xl placeholder:font-normal placeholder:text-[#999999] placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                  getInputRef: e,
                  value: Number(r),
                  defaultValue: Number(x),
                  ...k,
                })
              : (0, s.jsx)("input", {
                  type: t,
                  className:
                    "w-full text-3xl placeholder:font-normal placeholder:text-[#999999] placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                  ref: e,
                  ...k,
                }),
            l,
          ],
        });
      });
      I.displayName = "InputNumber";
      var T = i(7603);
      let R = {
        transition: { duration: 1 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: !0 },
      };
      var E = () => {
        let { userProfile: a } = (0, j.G)(),
          {
            indexRound: e,
            mutatePresales: i,
            activeRound: o,
            activeRoundTime: k,
          } = (0, P.c)(),
          { tokens: p, foundToken: m, mutate: u } = (0, N.kI)(S.ZD.Address),
          { estimate: f, estimating: h } = (function () {
            let [a, e] = (0, n.useState)(!1),
              {
                trigger: i,
                error: s,
                reset: t,
              } = (0, C.Z)("/meshmain/swap/estimate", async function (a, i) {
                let { arg: s } = i;
                e(!0);
                try {
                  var t, r;
                  let e = await (0, F.CL)(a, s);
                  if (
                    !(null === (t = e.data) || void 0 === t ? void 0 : t.data)
                  )
                    return Promise.reject(
                      Error("Unexpected response, please try again")
                    );
                  return null === (r = e.data) || void 0 === r
                    ? void 0
                    : r.data;
                } catch (a) {
                  throw (0, _.C)(a);
                } finally {
                  e(!1);
                }
              });
            return { estimate: i, estimating: a, error: s, reset: t };
          })(),
          [y, b] = (0, n.useState)(),
          {
            swap: g,
            swapping: M,
            reset: E,
          } = (function () {
            let [a, e] = (0, n.useState)(!1),
              {
                trigger: i,
                error: s,
                reset: t,
              } = (0, C.Z)("/meshmain/swap", async function (a, i) {
                let { arg: s } = i;
                e(!0);
                try {
                  var t;
                  let e = await (0, F.CL)(a, s);
                  if (
                    !(null === (t = e.data) || void 0 === t ? void 0 : t.data)
                  )
                    return Promise.reject(
                      Error("Unexpected response, please try again")
                    );
                } catch (a) {
                  throw (0, _.C)(a);
                } finally {
                  e(!1);
                }
              });
            return { swap: i, swapping: a, error: s, reset: t };
          })(),
          [Z, O] = (0, n.useState)(!1),
          [U, z] = (0, n.useState)(!1),
          [B, q] = (0, n.useState)(S.X),
          [L, G] = (0, n.useState)(),
          [W, Y] = (0, n.useState)(),
          [X, J] = (0, n.useState)(0),
          [Q, H] = (0, n.useState)(!1),
          [K, $] = (0, n.useState)(""),
          { debouncedValue: aa, reset: ae } = (function (a, e) {
            let [i, s] = (0, n.useState)(a),
              t = null;
            switch (typeof a) {
              case "string":
                t = "";
                break;
              case "number":
                t = 0;
                break;
              case "boolean":
                t = !1;
            }
            return (
              (0, n.useEffect)(() => {
                let e = setTimeout(() => {
                  s(a);
                }, 500);
                return () => {
                  clearTimeout(e);
                };
              }, [a, 500]),
              { debouncedValue: i, reset: () => s(t) }
            );
          })(X, 0),
          ai = [S.X, S.DQ, S.Sp],
          as = (e) => {
            if (
              e !== B.Address &&
              (J(0), ae(), q(ai.find((a) => a.Address === e) || S.X), a)
            ) {
              let a = null == p ? void 0 : p.find((a) => a.address === e);
              a && G((0, N.Rs)(a));
            }
          },
          at = () => {
            L && J((0, S.sI)(L.address, L.rawBalance));
          },
          ar = (a) => {
            $(""),
              J(a ? parseFloat(null == a ? void 0 : a.replace(/,/g, "")) : 0);
          };
        (0, n.useEffect)(() => {
          if (aa <= 0) {
            b(void 0);
            return;
          }
          f(
            new A(
              (null == L ? void 0 : L.address) || "",
              (null === S.Aw || void 0 === S.Aw ? void 0 : S.Aw.Address) || "",
              aa
            )
          )
            .then((a) => {
              $(""), b(a);
            })
            .catch((a) => {
              $((null == a ? void 0 : a.message) || "Estimation error"),
                b(void 0);
            });
        }, [aa, L]),
          (0, n.useEffect)(() => {
            if (p && a) {
              let a = p.find((a) => a.address === S.X.Address);
              a && G((0, N.Rs)(a));
              let e = p.find((a) => a.address === S.Aw.Address);
              e && Y((0, N.Rs)(e));
            }
          }, [p, a]),
          (0, n.useEffect)(() => {
            p &&
              y &&
              H(
                !m ||
                  (0, N.Rs)(m).rawBalance.lessThan(new T.Z(y.fee.amount || 0))
              );
          }, [p, y]);
        let ax = !a || (null == o ? void 0 : o.status) !== w.MV.Active;
        return (0, s.jsx)("section", {
          className:
            "flex w-full justify-center rounded-3xl bg-[#00000047] p-4 sm:px-0 sm:py-16",
          children: (0, s.jsxs)("div", {
            className: "w-full sm:w-4/5",
            children: [
              (0, s.jsxs)(t.E.div, {
                initial: { opacity: 0, x: 50 },
                ...R,
                className:
                  "flex w-full flex-col items-center gap-2 rounded-[20px] border-2 border-[#00ffa31a] bg-[#00000047] px-6 py-5",
                style: {
                  borderImageSource:
                    "linear-gradient(158.39deg, rgba(0, 255, 163, 0.06) 14.19%, rgba(0, 255, 163, 1.5e-05) 50.59%, rgba(0, 255, 163, 1.5e-05) 68.79%, rgba(0, 255, 163, 0.015) 105.18%)",
                  backdropFilter: "blur(100px)",
                  boxShadow: "2px 4px 16px 0px #00FFA30F inset",
                },
                children: [
                  (0, s.jsx)("h4", {
                    className: "clash-display-semibold text-2xl",
                    children:
                      (null == o ? void 0 : o.status) === w.MV.Pending
                        ? "START IN"
                        : "ROUND ".concat(e),
                  }),
                  (null == o ? void 0 : o.status) && o.status !== w.MV.Completed
                    ? (0, s.jsx)(l.ZP, {
                        date: k,
                        onComplete: () => {
                          setTimeout(() => i(), 2e3);
                        },
                        renderer: (a) => {
                          let { days: e, hours: i, minutes: t, seconds: r } = a;
                          return (0, s.jsxs)("div", {
                            className:
                              "mt-2 flex min-h-[73px] justify-between gap-4 sm:gap-5",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "min-w-[52px] text-center sm:min-w-[68px]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "clash-display-semibold text-[34px] text-[#00FFA3] sm:text-[37px] sm:leading-[40.8px] sm:leading-[44.4px]",
                                    children: e,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "clash-display-regular text-xl",
                                    children: "DAY",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "min-w-[52px] text-center sm:min-w-[68px]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "clash-display-semibold text-[34px] text-[#00FFA3] sm:text-[37px] sm:leading-[40.8px] sm:leading-[44.4px]",
                                    children: i,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "clash-display-regular text-xl",
                                    children: "HRS",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "min-w-[52px] text-center sm:min-w-[68px]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "clash-display-semibold text-[34px] text-[#00FFA3] sm:text-[37px] sm:leading-[40.8px] sm:leading-[44.4px]",
                                    children: t,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "clash-display-regular text-xl",
                                    children: "MIN",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "min-w-[52px] text-center sm:min-w-[68px]",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "clash-display-semibold text-[34px] text-[#00FFA3] sm:text-[37px] sm:leading-[40.8px] sm:leading-[44.4px]",
                                    children: r,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "clash-display-regular text-xl",
                                    children: "SEC",
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                      })
                    : (0, s.jsx)("div", {
                        className:
                          "mt-2 flex min-h-[73px] w-full items-center justify-center",
                        children: (0, s.jsx)("p", {
                          className:
                            "clash-display-semibold text-[34px] tracking-wider text-[#00FFA3] sm:text-[37px] sm:leading-[46px] sm:leading-[55px]",
                          children: "Ended",
                        }),
                      }),
                ],
              }),
              (0, s.jsxs)(t.E.div, {
                initial: { opacity: 0, x: -50 },
                ...R,
                className:
                  "mt-3 flex w-full flex-col items-center rounded-[20px] border-2 border-[#00ffa31a] bg-[#00000047] px-6 py-3",
                style: {
                  borderImageSource:
                    "linear-gradient(158.39deg, rgba(0, 255, 163, 0.06) 14.19%, rgba(0, 255, 163, 1.5e-05) 50.59%, rgba(0, 255, 163, 1.5e-05) 68.79%, rgba(0, 255, 163, 0.015) 105.18%)",
                  backdropFilter: "blur(100px)",
                  boxShadow: "2px 4px 16px 0px #00FFA30F inset",
                },
                children: [
                  (0, s.jsx)("p", {
                    className: "text-xl leading-[30px]",
                    children: "Pre-Sale Price",
                  }),
                  (0, s.jsxs)("p", {
                    className:
                      "text-xl font-medium leading-[30px] text-[#00FFA3]",
                    children: [
                      "1 ORION = ",
                      null == o ? void 0 : o.usd_price,
                      " USD",
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)(t.E.div, {
                initial: { opacity: 0, y: 50 },
                ...R,
                className: "my-8 flex w-full flex-col gap-2",
                children: [
                  (0, s.jsx)("div", {
                    className: "h-8 w-full rounded-[66px] bg-[#00000047]",
                    children: (0, s.jsx)("div", {
                      className: "h-full rounded-[66px] bg-presales2",
                      style: {
                        width: "".concat(
                          (null == o ? void 0 : o.sold_percent) || 0,
                          "%"
                        ),
                        minWidth: "".concat(
                          (null == o ? void 0 : o.status) === w.MV.Pending
                            ? 0
                            : 50,
                          "px"
                        ),
                        boxShadow: "0px 0px 8.8px 0px #FFFFFFC4 inset",
                      },
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, s.jsxs)("p", {
                        className: "clash-display-medium text-base",
                        children: [
                          null == o ? void 0 : o.sold_cap.toLocaleString("en"),
                          " MCC",
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        className: "clash-display-medium text-base",
                        children: [
                          null == o ? void 0 : o.total_cap.toLocaleString("en"),
                          " MCC",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)(t.E.div, {
                initial: { opacity: 0, y: 50 },
                ...R,
                className:
                  "flex w-full flex-col items-center gap-6 rounded-[20px] border-2 border-[#00ffa31a] bg-[#00000047] p-4 sm:px-6 sm:py-5",
                style: {
                  borderImageSource:
                    "linear-gradient(158.39deg, rgba(0, 255, 163, 0.06) 14.19%, rgba(0, 255, 163, 1.5e-05) 50.59%, rgba(0, 255, 163, 1.5e-05) 68.79%, rgba(0, 255, 163, 0.015) 105.18%)",
                  backdropFilter: "blur(100px)",
                  boxShadow: "2px 4px 16px 0px #00FFA30F inset",
                },
                children: [
                  (0, s.jsx)("h4", {
                    className: "clash-display-semibold text-2xl",
                    children: "Buy MCC",
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "w-full rounded-xl bg-[#003724]",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "w-full p-6",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex justify-between gap-0 sm:gap-3",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "w-[60%]",
                                    children: [
                                      (0, s.jsx)("p", {
                                        className:
                                          "text-xs font-medium text-[#999999]",
                                        children: "You send",
                                      }),
                                      (0, s.jsx)(I, {
                                        className:
                                          "border-none px-0 text-3xl focus-visible:ring-0",
                                        value: X,
                                        type: "number",
                                        decimalScale:
                                          null == B
                                            ? void 0
                                            : B.DisplayDecimalScale,
                                        thousandSeparator: ",",
                                        disabled: ax,
                                        onChange: (a) => ar(a.target.value),
                                      }),
                                      K
                                        ? (0, s.jsx)("p", {
                                            className:
                                              "text-xs font-medium text-[#FF6259]",
                                            children: K,
                                          })
                                        : (0, s.jsx)("div", {
                                            className: "h-[16px]",
                                          }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex flex-col items-end justify-center sm:w-1/2",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "flex w-[100px] rounded-lg bg-[#00000047] py-1 pl-2 pr-1 sm:w-[133px]",
                                      children: (0, s.jsx)(v, {
                                        token: B.Address || "",
                                        tokens: ai.filter((a) =>
                                          p
                                            ? p.some(
                                                (e) => e.address === a.Address
                                              )
                                            : a.Address !== S.Sp.Address
                                        ),
                                        onSelectToken: (a) => as(a),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              !!a &&
                                (0, s.jsxs)("div", {
                                  className: "mt-[3px] flex justify-end gap-2",
                                  children: [
                                    (0, s.jsxs)("p", {
                                      className:
                                        "text-xs font-medium text-[#999999]",
                                      children: [
                                        "Balance:",
                                        " ",
                                        (0, s.jsx)(d.Z, {
                                          token:
                                            (null == L ? void 0 : L.address) ||
                                            "",
                                          balance:
                                            (null == L ? void 0 : L.balance) ||
                                            "0",
                                          suffix:
                                            " " +
                                            (null == L ? void 0 : L.symbol),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      onClick: () => {
                                        L &&
                                          (null == o ? void 0 : o.status) ===
                                            w.MV.Active &&
                                          at();
                                      },
                                      className:
                                        "text-xs font-medium text-[#00FFA3] hover:cursor-pointer",
                                      children: "Max",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "relative h-[2px] w-full bg-black",
                            children: (0, s.jsx)("div", {
                              className:
                                "absolute left-0 top-[-15px] flex w-full justify-center",
                              children: (0, s.jsx)("div", {
                                className:
                                  "flex h-8 w-8 items-center justify-center rounded-[33px] bg-black",
                                children: (0, s.jsx)(r.default, {
                                  src: "/icons/arrow-down.svg",
                                  alt: "Arrow Down",
                                  width: 16,
                                  height: 16,
                                }),
                              }),
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "w-full p-6",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex w-full justify-between gap-0 sm:gap-3",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "w-full max-w-[60%]",
                                    children: [
                                      (0, s.jsx)("p", {
                                        className:
                                          "font-poppins text-xs font-medium text-[#999999]",
                                        children: "You receive",
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "max-w-full overflow-hidden truncate text-3xl font-medium leading-[42px]",
                                        children: (0, s.jsx)(d.Z, {
                                          token:
                                            (null == y
                                              ? void 0
                                              : y.token1.Address) || "",
                                          balance:
                                            (null == y
                                              ? void 0
                                              : y.token1_amount_decimal) || "0",
                                          suffix: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex flex-col items-end justify-center",
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "flex w-[100px] items-center rounded-lg bg-[#00000047] py-1 pl-2 pr-1 sm:w-[133px]",
                                      children: [
                                        (0, s.jsx)(r.default, {
                                          src: "/icons/logo_mcc.svg",
                                          alt: "MCC",
                                          width: 28,
                                          height: 28,
                                          className: "mr-2",
                                        }),
                                        (0, s.jsx)("p", {
                                          className:
                                            "text-sm font-medium sm:text-xl sm:leading-[30px]",
                                          children: "MCC",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              !!a &&
                                (0, s.jsx)("div", {
                                  className: "mt-[3px] flex justify-end",
                                  children: (0, s.jsxs)("p", {
                                    className:
                                      "text-xs font-medium text-[#999999]",
                                    children: [
                                      "Balance:",
                                      " ",
                                      W
                                        ? (0, s.jsx)(d.Z, {
                                            token:
                                              (null == W
                                                ? void 0
                                                : W.address) || "",
                                            balance:
                                              (null == W
                                                ? void 0
                                                : W.balance) || "0",
                                            suffix: "",
                                          })
                                        : 0,
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "mt-3 flex w-full justify-between",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "font-poppins text-sm font-medium text-[#999999]",
                            children: "Fee",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm font-medium",
                            children: "0.000042 BNB",
                          }),
                        ],
                      }),
                      Q &&
                        (0, s.jsx)("div", {
                          className: "mt-3 flex w-full justify-center",
                          children: (0, s.jsx)("div", {
                            className:
                              "flex items-center justify-center rounded-[21px] bg-[#FFEBEA] px-3 py-1",
                            children: (0, s.jsxs)("p", {
                              className:
                                "manrope text-center text-sm font-thin leading-[22px] text-[#FF6259]",
                              children: [
                                "Insufficient BNB for gas fee. You can",
                                " ",
                                (0, s.jsx)("u", {
                                  children: (0, s.jsx)(x.default, {
                                    href: "https://orion-ai-app-cs.vercel.app/wallet/deposit",
                                    target: "_blank",
                                    children: "deposit here",
                                  }),
                                }),
                                ".",
                              ],
                            }),
                          }),
                        }),
                    ],
                  }),
                  a
                    ? (0, s.jsx)("button", {
                        onClick: () => O(!0),
                        disabled: ax || !y || !!K,
                        className:
                          "w-full rounded-[30px] bg-white px-8 py-3 text-xl font-medium leading-[30px] text-black shadow-md hover:bg-green-600 hover:text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black",
                        children: "Buy",
                      })
                    : (0, s.jsx)(x.default, {
                        className: "w-full",
                        href:
                          "https://meshchain.ai" +
                          "/sso?next_uri=".concat(
                            encodeURIComponent("/presales")
                          ),
                        children: (0, s.jsx)("button", {
                          onClick: () => O(!0),
                          className:
                            "w-full rounded-[30px] bg-white px-8 py-3 text-xl font-medium leading-[30px] text-black shadow-md hover:bg-green-600 hover:text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black",
                          children: "Please login to continue",
                        }),
                      }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-wrap justify-center",
                    children: [
                      (0, s.jsx)("p", {
                        className:
                          "manrope mr-[2px] text-sm font-medium sm:mr-2",
                        children: "Don’t have enough tokens to buy MCC?",
                      }),
                      (0, s.jsx)(x.default, {
                        href: "https://orion-ai-app-cs.vercel.app/wallet/deposit",
                        className: "manrope text-sm font-medium text-[#00FFA3]",
                        target: "_blank",
                        children: "Deposit Now",
                      }),
                    ],
                  }),
                  (!!y || U) &&
                    (0, s.jsx)(c, {
                      estimationData: y,
                      isOpen: (Z && !ax) || U,
                      disabledConfirm: !y || M,
                      onClose: () => {
                        O(!1), z(!1);
                      },
                      onConfirm: () => {
                        if (!(aa <= 0)) {
                          if (h) {
                            D.Am.error(
                              "Please wait for quote completed before transfer"
                            );
                            return;
                          }
                          if (!y) {
                            D.Am.error(
                              "Please wait for quote before process transaction"
                            );
                            return;
                          }
                          E(),
                            g(
                              new V(
                                (null == L ? void 0 : L.address) || "",
                                (null === S.Aw || void 0 === S.Aw
                                  ? void 0
                                  : S.Aw.Address) || "",
                                X,
                                y.token1_amount,
                                y.fee.amount,
                                y.fee.token.Address
                              )
                            )
                              .then(async () => {
                                D.Am.success("Transaction successfully"),
                                  J(0),
                                  b(void 0),
                                  q(S.X),
                                  z(!0),
                                  ae();
                              })
                              .catch((a) => {
                                D.Am.error(a.message);
                              })
                              .finally(async () => {
                                await u();
                              });
                        }
                      },
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    3601: function (a, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return n;
        },
      });
      var s = i(7437),
        t = i(7818),
        r = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":200,"w":505,"h":239,"nm":"Comp 1","ddd":0,"metadata":{},"assets":[{"id":"0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Solid","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"gr","nm":"Solid","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[108.60529446601868,81.70271420478821],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Stroke mask - box","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[114,86],"ix":2},"p":{"a":0,"k":[56,42],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0}],"ip":0,"op":201,"st":0,"bm":0}]},{"id":"1","layers":[{"ddd":0,"refId":"2","w":114,"h":86,"ind":3,"ty":0,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[56,42],"ix":2},"a":{"a":0,"k":[56,42],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"td":1},{"ddd":0,"refId":"0","w":114,"h":86,"ind":3,"ty":0,"nm":"Stroke group","sr":1,"ks":{"p":{"a":0,"k":[56,42],"ix":2},"a":{"a":0,"k":[56,42],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"tt":1}]},{"id":"2","layers":[{"ddd":0,"ind":4,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[54.04705047607422,40.595760345458984],"ix":2},"a":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"refId":"3","w":114,"h":86,"ind":5,"ty":0,"nm":"Stroke mask","sr":1,"ks":{"p":{"a":0,"k":[-1,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":4}]},{"id":"4","layers":[{"ddd":0,"ind":6,"ty":4,"nm":"Outlines","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"gr","nm":"Outlines","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[97.16712502702299,0.003531228332176548],[97.31282707131403,0.27209014441687174],[102.644816047633,10.100045156135499],[72.65169231948836,70.41103301198487],[5.4776983045979675,62.1983467325407],[0,52.10183091118514],[67.25072597194087,59.815519366580645],[97.31282707131403,0.27209014441687174],[97.16712502702299,0],[97.16712502702299,0.003531228332176548]],"i":[[0,0],[0,0],[0,0],[26.831064921226726,-14.386299875378532],[10.267234563728655,18.923028589782678],[0,0],[-26.831064921226726,14.386299875378532],[9.993495776319406,18.90771056410798],[0.0491073113877718,0.09052411997905807],[0,0]],"o":[[0,0],[0,0],[10.267234563728655,18.923028589782678],[-26.831064921226726,14.386299875378532],[0,0],[10.267234563728655,18.923028589782678],[26.702734215253884,-14.317491424250534],[-0.04802775467761933,-0.090868591413237],[0,0],[0,0]]}}},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.5111935138702393,"ix":2},"lc":1,"lj":1,"ml":4},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.59575653076172],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.595757581925454],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Stroke adjustment mask - box","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[114,86],"ix":2},"p":{"a":0,"k":[56,42],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0}],"ip":0,"op":201,"st":0,"bm":0}]},{"id":"3","layers":[{"ddd":0,"ind":8,"ty":4,"nm":"Stroke adjustment mask","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"td":1,"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","nm":"Stroke adjustment mask","it":[{"ty":"gr","nm":"Path","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[102.644816047633,10.100045156135499],[72.65169231948836,70.41103301198487],[5.4776983045979675,62.1983467325407],[0,52.10183091118514],[67.25072597194087,59.815519366580645],[97.31282707131403,0.27209014441687174],[102.644816047633,10.100045156135499]],"i":[[0,0],[26.831064921226726,-14.386299875378532],[10.267234563728655,18.923028589782678],[0,0],[-26.831064921226726,14.386299875378532],[9.993495776319406,18.90771056410798],[0,0]],"o":[[10.267234563728655,18.923028589782678],[-26.831064921226726,14.386299875378532],[0,0],[10.267234563728655,18.923028589782678],[26.702734215253884,-14.317491424250534],[0,0],[0,0]]}}},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.73180389404297],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.731802654133894],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Path","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[97.16712502702299,0.003531228332176548],[97.16712502702299,0],[97.31282707131403,0.27209014441687174],[97.16712502702299,0.003531228332176548]],"i":[[0,0],[0,0],[-0.04802775467761933,-0.090868591413237],[0,0]],"o":[[0,0],[0.0491073113877718,0.09052411997905807],[0,0],[0,0]]}}},{"ty":"tr","p":{"a":0,"k":[97.23997497558594,0.13604506850242615],"ix":2},"a":{"a":0,"k":[97.23997604916852,0.13604507220843587],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.59575653076172],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.595757581925454],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"refId":"4","w":114,"h":86,"ind":5,"ty":0,"nm":"Stroke mask","sr":1,"ks":{"p":{"a":0,"k":[56,42],"ix":2},"a":{"a":0,"k":[56,42],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"tt":1}]},{"id":"5","layers":[{"ddd":0,"ind":9,"ty":4,"nm":"Solid","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"gr","nm":"Solid","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[108.60529446601868,81.70271420478821],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Stroke mask - box","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[114,86],"ix":2},"p":{"a":0,"k":[56,42],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0}],"ip":0,"op":201,"st":0,"bm":0}]},{"id":"6","layers":[{"ddd":0,"refId":"7","w":114,"h":86,"ind":11,"ty":0,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[56,42],"ix":2},"a":{"a":0,"k":[56,42],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"td":1},{"ddd":0,"refId":"5","w":114,"h":86,"ind":11,"ty":0,"nm":"Stroke group","sr":1,"ks":{"p":{"a":0,"k":[56,42],"ix":2},"a":{"a":0,"k":[56,42],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"tt":1}]},{"id":"7","layers":[{"ddd":0,"ind":12,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[54.04705047607422,40.595760345458984],"ix":2},"a":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"refId":"8","w":114,"h":86,"ind":13,"ty":0,"nm":"Stroke mask","sr":1,"ks":{"p":{"a":0,"k":[-1,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":12}]},{"id":"9","layers":[{"ddd":0,"ind":14,"ty":4,"nm":"Outlines","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"gr","nm":"Outlines","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[97.16712502702299,0.003531228332176548],[97.31282707131403,0.27209014441687174],[102.644816047633,10.100045156135499],[72.65169231948836,70.41103301198487],[5.4776983045979675,62.1983467325407],[0,52.10183091118514],[67.25072597194087,59.815519366580645],[97.31282707131403,0.27209014441687174],[97.16712502702299,0],[97.16712502702299,0.003531228332176548]],"i":[[0,0],[0,0],[0,0],[26.831064921226726,-14.386299875378532],[10.267234563728655,18.923028589782678],[0,0],[-26.831064921226726,14.386299875378532],[9.993495776319406,18.90771056410798],[0.0491073113877718,0.09052411997905807],[0,0]],"o":[[0,0],[0,0],[10.267234563728655,18.923028589782678],[-26.831064921226726,14.386299875378532],[0,0],[10.267234563728655,18.923028589782678],[26.702734215253884,-14.317491424250534],[-0.04802775467761933,-0.090868591413237],[0,0],[0,0]]}}},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.5111935138702393,"ix":2},"lc":1,"lj":1,"ml":4},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.59575653076172],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.595757581925454],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Stroke adjustment mask - box","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[114,86],"ix":2},"p":{"a":0,"k":[56,42],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0}],"ip":0,"op":201,"st":0,"bm":0}]},{"id":"8","layers":[{"ddd":0,"ind":16,"ty":4,"nm":"Stroke adjustment mask","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"td":1,"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","nm":"Stroke adjustment mask","it":[{"ty":"gr","nm":"Path","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[102.644816047633,10.100045156135499],[72.65169231948836,70.41103301198487],[5.4776983045979675,62.1983467325407],[0,52.10183091118514],[67.25072597194087,59.815519366580645],[97.31282707131403,0.27209014441687174],[102.644816047633,10.100045156135499]],"i":[[0,0],[26.831064921226726,-14.386299875378532],[10.267234563728655,18.923028589782678],[0,0],[-26.831064921226726,14.386299875378532],[9.993495776319406,18.90771056410798],[0,0]],"o":[[10.267234563728655,18.923028589782678],[-26.831064921226726,14.386299875378532],[0,0],[10.267234563728655,18.923028589782678],[26.702734215253884,-14.317491424250534],[0,0],[0,0]]}}},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.73180389404297],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.731802654133894],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Path","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[97.16712502702299,0.003531228332176548],[97.16712502702299,0],[97.31282707131403,0.27209014441687174],[97.16712502702299,0.003531228332176548]],"i":[[0,0],[0,0],[-0.04802775467761933,-0.090868591413237],[0,0]],"o":[[0,0],[0.0491073113877718,0.09052411997905807],[0,0],[0,0]]}}},{"ty":"tr","p":{"a":0,"k":[97.23997497558594,0.13604506850242615],"ix":2},"a":{"a":0,"k":[97.23997604916852,0.13604507220843587],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.59575653076172],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.595757581925454],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"refId":"9","w":114,"h":86,"ind":13,"ty":0,"nm":"Stroke mask","sr":1,"ks":{"p":{"a":0,"k":[56,42],"ix":2},"a":{"a":0,"k":[56,42],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"tt":1}]},{"id":"10","layers":[{"ddd":0,"ind":17,"ty":4,"nm":"Solid","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"gr","nm":"Solid","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[210.87072110176086,158.0364010334015],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[104.17976379394531,77.76260375976562],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Stroke mask - box","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[223,168],"ix":2},"p":{"a":0,"k":[110.5,83],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0}],"ip":0,"op":201,"st":0,"bm":0}]},{"id":"11","layers":[{"ddd":0,"refId":"12","w":223,"h":168,"ind":19,"ty":0,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[110.5,83],"ix":2},"a":{"a":0,"k":[110.5,83],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"td":1},{"ddd":0,"refId":"10","w":223,"h":168,"ind":19,"ty":0,"nm":"Stroke group","sr":1,"ks":{"p":{"a":0,"k":[110.5,83],"ix":2},"a":{"a":0,"k":[110.5,83],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"tt":1}]},{"id":"12","layers":[{"ddd":0,"ind":20,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[105.17976379394531,78.76260375976562],"ix":2},"a":{"a":0,"k":[104.17976379394531,77.76260375976562],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"refId":"13","w":223,"h":168,"ind":21,"ty":0,"nm":"Stroke mask","sr":1,"ks":{"p":{"a":0,"k":[-1,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":20}]},{"id":"14","layers":[{"ddd":0,"ind":22,"ty":4,"nm":"Outlines","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"gr","nm":"Outlines","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[190.82772827148438,0.00693502302227655],[191.11387433280746,0.5343612018717749],[201.58543395996094,19.83560367523991],[142.6815643310547,138.28109910395224],[10.757719993591309,122.15210288365557],[0,102.32343051266726],[132.0745391845703,117.47243873096735],[191.11387433280746,0.5343612018717749],[190.82772827148438,0],[190.82772827148438,0.00693502302227655]],"i":[[0,0],[0,0],[0,0],[52.69386291494223,-28.253432362853218],[20.163949966430664,37.16317002940809],[0,0],[-52.69386291503906,28.253432362905126],[19.62635094899997,37.13308676921733],[0.09644246107973231,0.17778143950809522],[0,0]],"o":[[0,0],[0,0],[20.16394996622256,37.16317002939812],[-52.69386291503906,28.253432362905126],[0,0],[20.163949966430664,37.16317002940809],[52.4418326416162,-28.118298594195892],[-0.09432230619728443,-0.17845795122067898],[0,0],[0,0]]}}},{"ty":"st","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.5111935138702393,"ix":2},"lc":1,"lj":1,"ml":4},{"ty":"tr","p":{"a":0,"k":[104.17976379394531,77.7625961303711],"ix":2},"a":{"a":0,"k":[104.17976384614208,77.76259833242791],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Stroke adjustment mask - box","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[223,168],"ix":2},"p":{"a":0,"k":[110.5,83],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0}],"ip":0,"op":201,"st":0,"bm":0}]},{"id":"13","layers":[{"ddd":0,"ind":24,"ty":4,"nm":"Stroke adjustment mask","sr":1,"ks":{"p":{"a":0,"k":[1,1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"td":1,"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","nm":"Stroke adjustment mask","it":[{"ty":"gr","nm":"Path","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[201.58543395996094,19.83560367523991],[142.6815643310547,138.28109910395224],[10.757719993591309,122.15210288365557],[0,102.32343051266726],[132.0745391845703,117.47243873096735],[191.11387433280746,0.5343612018717749],[201.58543395996094,19.83560367523991]],"i":[[0,0],[52.69386291494223,-28.253432362853218],[20.163949966430664,37.16317002940809],[0,0],[-52.69386291503906,28.253432362905126],[19.62635094899997,37.13308676921733],[0,0]],"o":[[20.16394996622256,37.16317002939812],[-52.69386291503906,28.253432362905126],[0,0],[20.163949966430664,37.16317002940809],[52.4418326416162,-28.118298594195892],[0,0],[0,0]]}}},{"ty":"tr","p":{"a":0,"k":[104.17976379394531,78.02977752685547],"ix":2},"a":{"a":0,"k":[104.17976384614208,78.0297789333638],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Path","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[190.82772827148438,0.00693502302227655],[190.82772827148438,0],[191.11387433280746,0.5343612018717749],[190.82772827148438,0.00693502302227655]],"i":[[0,0],[0,0],[-0.09432230619728443,-0.17845795122067898],[0,0]],"o":[[0,0],[0.09644246107973231,0.17778143950809522],[0,0],[0,0]]}}},{"ty":"tr","p":{"a":0,"k":[190.97079467773438,0.26718059182167053],"ix":2},"a":{"a":0,"k":[190.9708013021459,0.26718060093588747],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"tr","p":{"a":0,"k":[104.17976379394531,77.7625961303711],"ix":2},"a":{"a":0,"k":[104.17976384614208,77.76259833242791],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"refId":"14","w":223,"h":168,"ind":21,"ty":0,"nm":"Stroke mask","sr":1,"ks":{"p":{"a":0,"k":[110.5,83],"ix":2},"a":{"a":0,"k":[110.5,83],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"tt":1}]}],"layers":[{"ddd":0,"ind":25,"ty":3,"nm":"Frame 1597886796","sr":1,"ks":{"p":{"a":0,"k":[251.73472595214844,118.76922607421875],"ix":2},"a":{"a":0,"k":[252.32066345214844,123.02557373046875],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":26,"ty":3,"nm":"Group","sr":1,"ks":{"p":{"a":0,"k":[433.63250732421875,169.7867889404297],"ix":2},"a":{"a":0,"k":[433.6325225830078,169.78679275512695],"ix":2},"s":{"a":1,"k":[{"t":0,"s":[0,0],"i":{"x":[0.09195402298850575],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":50,"s":[100,100],"i":{"x":[0.75],"y":[0.75]},"o":{"x":[0.25],"y":[0.25]}}],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":25},{"ddd":0,"ind":27,"ty":4,"nm":"Group","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":26,"shapes":[{"ty":"gr","it":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[4.46415185147562,0],[5.169476982188374,0.4126339952797234],[6.3751324187958645,2.4128833169385366],[5.853955900435798,3.6997473048038634],[2.792913330870078,5.472688290988149],[1.368362060013213,5.297842292471028],[0.10364587885357703,3.2241499677729797],[0.6665148324991507,1.940786314838904],[3.7275574020648707,0.1678453286546188],[4.460684551640338,0.0035003349312509513],[4.46415185147562,0]],"i":[[0,0],[-0.13203138299444142,-0.22380287309953034],[-0.39261964217447487,-0.671408619298591],[0.5976157509935299,-0.36367966357591996],[1.0319295162935858,-0.5734948701337717],[0.2744863071251251,0.4266242463865427],[0.4065176694098724,0.6993839940684827],[-0.6045647646112287,0.36367966357591996],[-1.0215059958670376,0.5909794949974044],[-0.20847061562790442,-0.006993839784360323],[0,0]],"o":[[0.37524710813022794,0.034969200224505816],[0.3995686557921736,0.6679117026631713],[0.2536392455623347,0.433618079657382],[-1.0041334618227906,0.6119609948099224],[-0.5906667373758312,0.3287104763784562],[-0.4412627789177545,-0.6818994108913845],[-0.2501647387534853,-0.4301211630219624],[1.0110824754404895,-0.604967161539083],[0.26406276598888284,-0.1538644778613355],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[460.37176513671875,175.69857788085938],"ix":2},"a":{"a":0,"k":[3.24369478225708,2.8381760120391846],"ix":2},"s":{"a":0,"k":[99.99124705476493,-99.93735900123288],"ix":2},"r":{"a":0,"k":-148.66560407520987,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07786105338744,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[19.498791765369358,7.993694490426091],[13.525859904948755,11.443035694047348],[10.157666911417529,11.141738384869509],[7.867293989020926,7.439568703973372],[5.8256495863070095,6.279402847965595],[3.8461948909148385,7.017067608432006],[0.9789064071481639,6.916621080214447],[0.1359936349570346,5.534805239902728],[0.7854520632250808,4.066408896843509],[3.535286876929245,2.4837206424183704],[5.1105639874292415,2.6083910177187],[5.798017769662738,3.7443331917822813],[6.8067530279511494,4.367706206021348],[9.477118777179557,3.6508198414383246],[14.835139928172277,0.5616450411239919],[18.26897034651359,0.8075403405252688],[20.8598880338453,5.03263601202719],[19.495333834862176,7.993694490426091],[19.498791765369358,7.993694490426091]],"i":[[0,0],[1.9967339701831281,-1.1359318529027322],[0.6183656748650799,0.9662347115580666],[0.7254569195076573,1.2536808577374707],[1.0570943966642052,0.0034632068214054605],[0.6218202284869999,-0.380952767126487],[0.7841844134433538,1.4718629319960208],[0.2729100038116153,0.4640697360007985],[-0.7358206627364727,0.42943765875572815],[-0.8981847653297715,0.5506499084711527],[-0.2314553191670468,-0.4086583958948286],[-0.2660008759770114,-0.3567103006695448],[-0.49745621573482196,-0.05194810554644467],[-0.8981847653297715,0.5402602563983812],[-1.7894604234157028,1.0251092552600793],[-0.6425475914000479,-0.9904771367303655],[-0.8290936928913699,-1.4268412026781792],[1.3507317839796324,-0.7930743666173583],[0,0]],"o":[[-1.9829155909693374,1.163637481671074],[-1.3887318738207532,0.7896111630213156],[-0.7841844134433538,-1.2225120253730866],[-0.4041831443983972,-0.696104583358876],[-0.7116387050199771,0.020779240928432762],[-1.4440047317714746,0.8796545390877125],[-0.25218266148933105,-0.4744593467889266],[-0.31091011424349996,-0.5298706456102531],[0.915457615802427,-0.5333338492062958],[0.6010929067554794,-0.37056315633835896],[0.2210916377105228,0.3844159707225297],[0.22800076554512674,0.30129900184821823],[0.9085485085585868,0.0658009302517763],[1.7652786304253174,-1.0562780876244635],[1.4336411532687694,-0.8207799953856999],[0.8981847653297715,1.3887460456909961],[0.5561836684889908,0.9593083043659812],[0,0],[0,0]]}}},{"ty":"gf","o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,0.520709216594696,0,0.9921568627450981,0.38823529411764707,0,1,0.520709216594696,1],"ix":2}},"s":{"a":0,"k":[0.031056009726777134,6.025910267229847],"ix":2},"e":{"a":0,"k":[21.07142127411589,6.025910267229847],"ix":2},"t":1},{"ty":"tr","p":{"a":0,"k":[444.6851501464844,168.68942260742188],"ix":2},"a":{"a":0,"k":[10.535709381103516,5.980250358581543],"ix":2},"s":{"a":0,"k":[99.98789909099249,-99.93876249526976],"ix":2},"r":{"a":0,"k":-148.70522281896734,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.1496977363372,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[2.7168915018444735,7.814514552671738],[1.92467169127873,7.345915582815035],[0.1838685510683018,4.523755861700781],[1.0282166176612102,2.6458167815362352],[4.878124155023304,0.4146676292789502],[7.067160113227338,0.5895224512278484],[8.71414089218989,3.250807635212941],[7.82463130151224,5.244156874346932],[3.91564988020941,7.503267846902838],[2.7238475885750906,7.818015064243958],[2.7168915018444735,7.814514552671738]],"i":[[0,0],[0.1598339099038564,0.2587851398194604],[0.5663679731630343,0.9477131483033925],[-0.9729020260669479,0.5665296247819757],[-1.2856205729080203,0.7378873119383488],[-0.448229856387986,-0.7238989395228012],[-0.545520092131527,-0.8917595752639256],[1.056293633035093,-0.6119918768211438],[1.2995191602623586,-0.7553728608350597],[0.40653405290391353,0.045462252039168004],[0,0]],"o":[[-0.39263546554957524,-0.024479675177067343],[-0.5802665605173727,-0.9407189620956187],[-0.4134833880021403,-0.6889280084839321],[1.2786712792308512,-0.7483786746272859],[1.0528189861965083,-0.6049976906133699],[0.5524693858086961,0.8847653890561518],[0.4551791500651552,0.7413844050422357],[-1.3029938071009433,0.7553728608350597],[-0.39611011238815985,0.23080837414404604],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[449.5696105957031,181.7834014892578],"ix":2},"a":{"a":0,"k":[4.4612135887146,3.9135239124298096],"ix":2},"s":{"a":0,"k":[99.99125127868425,-99.93735409352385],"ix":2},"r":{"a":0,"k":-148.66550158507323,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.0776742820351,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[0.1025689976434423,3.558003484461469],[0.9503915034593144,2.6837207042801023],[5.036606707684896,0.31965615890399685],[7.017178267403363,0.5049930443595444],[8.775364954739914,3.376145801162924],[7.979660512011378,5.142193085017184],[3.8899669042492517,7.502757375261195],[1.9476226580850728,7.362884910630283],[0.14774152027865273,4.460248117446151],[0.1025689976434423,3.558003484461469]],"i":[[0,0],[-0.3891640411676177,0.2273135578659654],[-1.3690235160183446,0.7763632668859677],[-0.375265338725653,-0.5980095490458209],[-0.5698473385987616,-0.9652083700839913],[0.861720379829825,-0.5035869974468091],[1.3690235160183446,-0.7798603953385933],[0.36831594608327,0.5770267366410075],[0.5941701092936005,0.9722026269892425],[-0.16678458463382895,0.34971317877504204]],"o":[[0.1424618346496904,-0.370695949490796],[1.3585994891868711,-0.7903517806964703],[0.8582457042193338,-0.48610131349462127],[0.6011194605145828,0.947722727820863],[0.36136659486228767,0.6119980628563235],[-1.3585994891868711,0.7938489091490959],[-0.8478216773878603,0.48610131349462127],[-0.6150181629565475,-0.95821411317874],[-0.15983523341284658,-0.25878775562865586],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[452.28759765625,160.7584228515625],"ix":2},"a":{"a":0,"k":[4.4632182121276855,3.917318820953369],"ix":2},"s":{"a":0,"k":[99.9912515035779,-99.93735071130341],"ix":2},"r":{"a":0,"k":-148.6654816704956,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07763911257038,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[4.192733428851701,12.010722117398744],[2.8064335426556535,11.227442049627433],[0.24231141307259665,7.045282067000137],[1.6529241443597045,3.9470995951571433],[7.434360509866554,0.5971794783255967],[11.03038498578153,0.9153790439998843],[13.531958730143492,5.027620575839927],[12.208206421511942,8.045362105573108],[6.256527808362085,11.493202360360087],[4.192733428851701,12.010722117398744]],"i":[[0,0],[0.284902251751127,0.45458414734433655],[0.8303858750146484,1.4057141005256923],[-1.4488322218309413,0.8427291340781369],[-1.9283019089656546,1.1154796224847388],[-0.6740370603908692,-1.0979956328503873],[-0.8269114605935233,-1.3777397171107297],[1.3689206073084892,-0.7972706776585838],[1.9804180424459579,-1.1539443996803125],[0.7157300334443708,0.06993602627572557]],"o":[[-0.6427672891824558,-0.04895521787194391],[-0.8616556048047748,-1.3917269088182112],[-0.6114975179740426,-1.0350531867964825],[1.9248274117079556,-1.118976420411609],[1.5530646544646955,-0.8951811029811918],[0.844283532699149,1.3637525254032485],[0.5871766170261666,0.9791043365963185],[-1.9804180424459579,1.1539443996803125],[-0.6775114748119943,0.3951385409024216],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[444.3028564453125,145.9620819091797],"ix":2},"a":{"a":0,"k":[6.883284568786621,6.012426853179932],"ix":2},"s":{"a":0,"k":[99.99124217257919,-99.93736068936771],"ix":2},"r":{"a":0,"k":-148.6656743468056,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07798807154228,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[13.599252185799127,6.598676928199482],[12.209490543159884,8.04982928884999],[6.136238950771906,11.553613218714425],[2.8702909394827776,11.291354453728713],[0.1845833096098343,6.909895784890695],[1.4423159411300948,4.080988849281336],[7.68234241638414,0.4723056402722952],[10.91006680026495,0.731064165212286],[13.585362203561447,5.067084366748361],[13.599252185799127,6.605655982248174],[13.599252185799127,6.598676928199482]],"i":[[0,0],[0.6531879703837198,-0.37765263658599046],[2.029052051268496,-1.1609321096598648],[0.5802254708913597,0.8986733446741539],[0.8686010266495277,1.475642577620828],[-1.198669433343598,0.7063502670252625],[-2.091591265545163,1.1889064346164822],[-0.5628534669256189,-0.8706991030873525],[-0.875549828235824,-1.454661896430727],[0.26405470878800646,-0.5769692746315822],[0,0]],"o":[[-0.2675291095811546,0.5909564371098909],[-2.0221032496822,1.1714224502549153],[-1.292478337594847,0.737821288810414],[-0.9241915221761471,-1.4441716392054926],[-0.5037886120239758,-0.856711982293952],[2.0672703771568766,-1.2203774564016336],[1.2542598460339685,-0.7133438274219629],[0.9241915221761471,1.4266876548439258],[0.2675291095811546,0.4405947218412015],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[438.8774108886719,187.75222778320312],"ix":2},"a":{"a":0,"k":[6.895877838134766,6.02186918258667],"ix":2},"s":{"a":0,"k":[99.99123796481882,-99.93736241372825],"ix":2},"r":{"a":0,"k":-148.66568487466566,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07800622684576,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[16.05528684597576,7.840664691942586],[14.297338966687954,9.700823715432906],[7.66160219365057,13.540012658215783],[3.0409002290190976,13.085467414920803],[0.35534515000427275,8.70081991195311],[2.2939480163381964,4.326651582608436],[8.47803234995781,0.753182017674502],[13.286332863305882,1.162291943678763],[16.06569844035389,5.704287109648242],[16.05528684597576,7.8371647426538695],[16.05528684597576,7.840664691942586]],"i":[[0,0],[0.8303355025889745,-0.4825217874909],[2.2234924947710275,-1.2587524601105622],[0.799067586834993,1.2867247944303613],[0.8893969647757913,1.465048061002089],[-2.0358853315733345,1.178332155248422],[-2.063678960837719,1.1853253013512843],[-0.8581291318533588,-1.3811312247704592],[-0.9171906768717247,-1.517496114908314],[0.32657545447482567,-0.7902168397795617],[0,0]],"o":[[-0.37521436781116013,0.730775723134358],[-2.2095956801388352,1.2867247944303613],[-1.8413297610595456,1.041967348474451],[-0.9032937794079836,-1.4580549982631101],[-0.8755001501435992,-1.4405722580517795],[2.060204674348122,-1.1923183640902633],[1.9768237865549687,-1.1398703101840384],[0.934561695161965,1.510503052169335],[0.37521436781116013,0.6188866359468128],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[422.68487548828125,157.95059204101562],"ix":2},"a":{"a":0,"k":[8.162153244018555,7.101851940155029],"ix":2},"s":{"a":0,"k":[99.99122399323173,-99.93736751294333],"ix":2},"r":{"a":0,"k":-148.66583594575252,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07827841851403,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[0.22906977017159044,6.40989910848798],[2.1815838521842847,4.3748980796235974],[8.532470681238248,0.6965306480721261],[13.260899486120033,1.112622253753725],[15.835292550528294,5.343452289617631],[16.24525942430398,7.249082270954607],[14.303167662074852,9.682675027742015],[7.729925033953051,13.500935608435467],[3.0501404998159027,13.067365466309635],[0.288125696075606,8.563792599538964],[0.2255921501183558,6.406399132936265],[0.22906977017159044,6.40989910848798]],"i":[[0,0],[-0.9102475005745004,0.5279806988198972],[-2.1088560023209824,1.2342860023176534],[-0.8199175953050306,-1.3182034682463228],[-0.8998248287547961,-1.3881347037476324],[0.17718558659903808,-0.7517606357511856],[1.0492166238346228,-0.6258843951759266],[2.2061342726382223,-1.2482722327450133],[0.826866126016866,1.3147069106394829],[0.9171960312863358,1.5035212715023711],[-0.298783548743637,0.7972158846401057],[0,0]],"o":[[0.40301034977271244,-0.8216917878879858],[2.115804450200785,-1.2272928871039732],[1.810072412161329,-1.0594579552466343],[0.8755052611754861,1.4021210175395014],[0.37174233431359954,0.5699394317842319],[-0.23277323176148537,0.9790370469248048],[-2.178340481119011,1.2937275649984428],[-1.8969280934908974,1.0734441856739942],[-0.934567150985843,-1.493031515317342],[-0.3856392300732053,-0.6293809527827667],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[430.7771301269531,172.92100524902344],"ix":2},"a":{"a":0,"k":[8.154135704040527,7.097522258758545],"ix":2},"s":{"a":0,"k":[99.99122111830945,-99.93736740159027],"ix":2},"r":{"a":0,"k":-148.66581894842355,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07824914140215,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[11.403901507175542,0.017908102527259398],[13.283410048278832,1.1472525310873516],[15.902911132802485,5.3429847814799905],[13.86359533043816,9.9373167174034],[7.908922110528891,13.384805594959564],[2.999967048431493,12.975727675913664],[0.3387885751738243,8.633150105230982],[2.232186086530058,4.332528816698084],[8.582905232559273,0.6542633815292442],[11.39695705311026,0.014408244489619053],[11.403901507175542,0.017908102527259398]],"i":[[0,0],[-0.3578359395801975,-0.6887993877761969],[-0.833792536867344,-1.4230525816119348],[2.268610510137014,-1.3111663282476997],[1.9872053943457904,-1.1433370315630573],[0.889378650771938,1.4300454620269858],[0.8789562544148266,1.4510241032721385],[-1.9663606016315676,1.1468334717705828],[-2.115748531239694,1.2272516799053785],[-1.0561371581454069,-0.07342531208942416],[0,0]],"o":[[0.7365166718746178,0.1398577437637974],[0.764309811656758,1.4615133405330047],[0.9449648475063753,1.6153568763875452],[-1.9837313450565965,1.1468334717705828],[-2.053213987437339,1.1817979572075477],[-0.8963269150100123,-1.440534699287852],[-0.8442149332244554,-1.3985774167975464],[2.1122743162908137,-1.2342445603204295],[0.8754821222957895,-0.5069843302614526],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[433.4963684082031,151.93991088867188],"ix":2},"a":{"a":0,"k":[8.154358863830566,7.085676670074463],"ix":2},"s":{"a":0,"k":[99.99122132771075,-99.93737074226694],"ix":2},"r":{"a":0,"k":-148.6658909961477,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.0783794232548,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"tr","p":{"a":0,"k":[438.3810729980469,166.8645477294922],"ix":2},"a":{"a":0,"k":[438.3810729980469,166.8645477294922],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"Subtract","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":26,"shapes":[{"ty":"gr","nm":"Subtract","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[10.3824,63.4294],[3.04872,55.016],[29.0968,1.90405],[32.9087,0],[4.98633,56.5172],[10.3824,63.4294]],"i":[[0,0],[1.8060700000000005,3.348700000000001],[-23.401090000000003,12.61485],[-1.2769000000000048,0.588507],[-9.67281,-17.7898],[-2.152850000000001,-1.9905000000000044]],"o":[[-3.0291300000000003,-2.253399999999999],[-9.01754,-16.7196],[1.2632999999999974,-0.681],[-25.091800000000003,13.4319],[1.4217000000000004,2.614699999999999],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[463.8066101074219,180.9444580078125],"ix":2},"a":{"a":0,"k":[16.454326629638672,31.71470069885254],"ix":2},"s":{"a":0,"k":[99.9853817879857,-99.96954687270228],"ix":2},"r":{"a":0,"k":-149.1197338127128,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.9171331690469,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":26,"shapes":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[88.21931786884166,14.909360201167786],[61.92577225162679,67.81213647090996],[3.0261597636913695,60.60278848983201],[29.319710635755143,7.700012893816345],[88.21931786884166,14.909360201167786]],"i":[[0,0],[23.524718432140805,-12.617259065506351],[9.005583370118602,16.601656097791295],[-23.524718432140805,12.617259065506351],[-9.005583370118602,-16.601656097791295]],"o":[[9.002139473513271,16.598124423415776],[-23.524718432140805,12.617259065506351],[-9.005583370118602,-16.601656097791295],[23.524718432140805,-12.617259065506351],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[438.5654296875,166.2298583984375],"ix":2},"a":{"a":0,"k":[45.62203598022461,37.756072998046875],"ix":2},"s":{"a":0,"k":[99.9866229392198,-99.96906065952565],"ix":2},"r":{"a":0,"k":-149.09476932727367,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.87005858949416,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":30,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":26,"shapes":[{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[432.85174560546875,172.74595642089844],"ix":2},"a":{"a":0,"k":[50.34269714355469,34.644222259521484],"ix":2},"s":{"a":0,"k":[99.98624287262979,-99.96921604885061],"ix":2},"r":{"a":0,"k":-149.10240909453762,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.88445128960225,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":31,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":26,"shapes":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[100.70275269191342,17.01699243271851],[70.68645085086109,77.40818685309928],[3.4528023763282327,69.18152126275318],[33.469115383932746,8.790347727897714],[100.70275269191342,17.01699243271851]],"i":[[0,0],[26.854888016619988,-14.404587808191783],[10.27979460158817,18.947084462194944],[-26.854888016619988,14.404587808191783],[-10.27979460158817,-18.947084462194944]],"o":[[10.276350705522496,18.947084462194944],[-26.854888016619988,14.404587808191783],[-10.276350705522496,-18.947084462194944],[26.854888016619988,-14.404587808191783],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[438.5630187988281,166.22799682617188],"ix":2},"a":{"a":0,"k":[52.07777786254883,43.09926223754883],"ix":2},"s":{"a":0,"k":[99.9866229392198,-99.96906065952565],"ix":2},"r":{"a":0,"k":-149.09476932727367,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.87005858949416,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":32,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[427.79754638671875,175.8926239013672],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-149.09847321620634,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":26},{"ddd":0,"ind":33,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":44.71923192910103,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":32},{"ddd":0,"ind":34,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100.98489966858372,99.02470599880179],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":33},{"ddd":0,"ind":35,"ty":3,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"s":{"a":0,"k":[99.98644268578781,-99.96913468760168],"ix":2},"r":{"a":0,"k":-45.28076807089897,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":34},{"ddd":0,"ind":36,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"a":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":35},{"ddd":0,"refId":"1","w":114,"h":86,"ind":3,"ty":0,"nm":"Stroke group","sr":1,"ks":{"p":{"a":0,"k":[-1,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":36},{"ddd":0,"ind":37,"ty":4,"nm":"Filled region","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":35,"shapes":[{"ty":"gr","nm":"Filled region","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[97.16712502702299,0.003531228332176548],[97.31282707131403,0.27209014441687174],[102.644816047633,10.100045156135499],[72.65169231948836,70.41103301198487],[5.4776983045979675,62.1983467325407],[0,52.10183091118514],[67.25072597194087,59.815519366580645],[97.31282707131403,0.27209014441687174],[97.16712502702299,0],[97.16712502702299,0.003531228332176548]],"i":[[0,0],[0,0],[0,0],[26.831064921226726,-14.386299875378532],[10.267234563728655,18.923028589782678],[0,0],[-26.831064921226726,14.386299875378532],[9.993495776319406,18.90771056410798],[0.0491073113877718,0.09052411997905807],[0,0]],"o":[[0,0],[0,0],[10.267234563728655,18.923028589782678],[-26.831064921226726,14.386299875378532],[0,0],[10.267234563728655,18.923028589782678],[26.702734215253884,-14.317491424250534],[-0.04802775467761933,-0.090868591413237],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.59575653076172],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.595757581925454],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":38,"ty":3,"nm":"Group","sr":1,"ks":{"p":{"a":0,"k":[55.77460861206055,169.41790771484375],"ix":2},"a":{"a":0,"k":[55.77460762858391,169.41790771484375],"ix":2},"s":{"a":1,"k":[{"t":20,"s":[0,0],"i":{"x":[0.09195402298850575],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":70,"s":[100,100],"i":{"x":[0.75],"y":[0.75]},"o":{"x":[0.25],"y":[0.25]}}],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":25},{"ddd":0,"ind":39,"ty":4,"nm":"Group","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":38,"shapes":[{"ty":"gr","it":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[4.46415185147562,0],[5.169476982188374,0.4126339952797234],[6.3751324187958645,2.4128833169385366],[5.853955900435798,3.6997473048038634],[2.792913330870078,5.472688290988149],[1.368362060013213,5.297842292471028],[0.10364587885357703,3.2241499677729797],[0.6665148324991507,1.940786314838904],[3.7275574020648707,0.1678453286546188],[4.460684551640338,0.0035003349312509513],[4.46415185147562,0]],"i":[[0,0],[-0.13203138299444142,-0.22380287309953034],[-0.39261964217447487,-0.671408619298591],[0.5976157509935299,-0.36367966357591996],[1.0319295162935858,-0.5734948701337717],[0.2744863071251251,0.4266242463865427],[0.4065176694098724,0.6993839940684827],[-0.6045647646112287,0.36367966357591996],[-1.0215059958670376,0.5909794949974044],[-0.20847061562790442,-0.006993839784360323],[0,0]],"o":[[0.37524710813022794,0.034969200224505816],[0.3995686557921736,0.6679117026631713],[0.2536392455623347,0.433618079657382],[-1.0041334618227906,0.6119609948099224],[-0.5906667373758312,0.3287104763784562],[-0.4412627789177545,-0.6818994108913845],[-0.2501647387534853,-0.4301211630219624],[1.0110824754404895,-0.604967161539083],[0.26406276598888284,-0.1538644778613355],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[82.04270935058594,161.41563415527344],"ix":2},"a":{"a":0,"k":[3.24369478225708,2.8381760120391846],"ix":2},"s":{"a":0,"k":[99.99125347541951,-99.93735173357098],"ix":2},"r":{"a":0,"k":-179.0473959805443,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07786369329986,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[19.498791765369358,7.993694490426091],[13.525859904948755,11.443035694047348],[10.157666911417529,11.141738384869509],[7.867293989020926,7.439568703973372],[5.8256495863070095,6.279402847965595],[3.8461948909148385,7.017067608432006],[0.9789064071481639,6.916621080214447],[0.1359936349570346,5.534805239902728],[0.7854520632250808,4.066408896843509],[3.535286876929245,2.4837206424183704],[5.1105639874292415,2.6083910177187],[5.798017769662738,3.7443331917822813],[6.8067530279511494,4.367706206021348],[9.477118777179557,3.6508198414383246],[14.835139928172277,0.5616450411239919],[18.26897034651359,0.8075403405252688],[20.8598880338453,5.03263601202719],[19.495333834862176,7.993694490426091],[19.498791765369358,7.993694490426091]],"i":[[0,0],[1.9967339701831281,-1.1359318529027322],[0.6183656748650799,0.9662347115580666],[0.7254569195076573,1.2536808577374707],[1.0570943966642052,0.0034632068214054605],[0.6218202284869999,-0.380952767126487],[0.7841844134433538,1.4718629319960208],[0.2729100038116153,0.4640697360007985],[-0.7358206627364727,0.42943765875572815],[-0.8981847653297715,0.5506499084711527],[-0.2314553191670468,-0.4086583958948286],[-0.2660008759770114,-0.3567103006695448],[-0.49745621573482196,-0.05194810554644467],[-0.8981847653297715,0.5402602563983812],[-1.7894604234157028,1.0251092552600793],[-0.6425475914000479,-0.9904771367303655],[-0.8290936928913699,-1.4268412026781792],[1.3507317839796324,-0.7930743666173583],[0,0]],"o":[[-1.9829155909693374,1.163637481671074],[-1.3887318738207532,0.7896111630213156],[-0.7841844134433538,-1.2225120253730866],[-0.4041831443983972,-0.696104583358876],[-0.7116387050199771,0.020779240928432762],[-1.4440047317714746,0.8796545390877125],[-0.25218266148933105,-0.4744593467889266],[-0.31091011424349996,-0.5298706456102531],[0.915457615802427,-0.5333338492062958],[0.6010929067554794,-0.37056315633835896],[0.2210916377105228,0.3844159707225297],[0.22800076554512674,0.30129900184821823],[0.9085485085585868,0.0658009302517763],[1.7652786304253174,-1.0562780876244635],[1.4336411532687694,-0.8207799953856999],[0.8981847653297715,1.3887460456909961],[0.5561836684889908,0.9593083043659812],[0,0],[0,0]]}}},{"ty":"gf","o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,0.520709216594696,0,0.9921568627450981,0.38823529411764707,0,1,0.520709216594696,1],"ix":2}},"s":{"a":0,"k":[0.031056009726777134,6.025910267229847],"ix":2},"e":{"a":0,"k":[21.07142127411589,6.025910267229847],"ix":2},"t":1},{"ty":"tr","p":{"a":0,"k":[64.96533203125,163.3026580810547],"ix":2},"a":{"a":0,"k":[10.535709381103516,5.980250358581543],"ix":2},"s":{"a":0,"k":[99.98790425580299,-99.93875547624363],"ix":2},"r":{"a":0,"k":-179.08701258860577,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.14969828562755,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[2.7168915018444735,7.814514552671738],[1.92467169127873,7.345915582815035],[0.1838685510683018,4.523755861700781],[1.0282166176612102,2.6458167815362352],[4.878124155023304,0.4146676292789502],[7.067160113227338,0.5895224512278484],[8.71414089218989,3.250807635212941],[7.82463130151224,5.244156874346932],[3.91564988020941,7.503267846902838],[2.7238475885750906,7.818015064243958],[2.7168915018444735,7.814514552671738]],"i":[[0,0],[0.1598339099038564,0.2587851398194604],[0.5663679731630343,0.9477131483033925],[-0.9729020260669479,0.5665296247819757],[-1.2856205729080203,0.7378873119383488],[-0.448229856387986,-0.7238989395228012],[-0.545520092131527,-0.8917595752639256],[1.056293633035093,-0.6119918768211438],[1.2995191602623586,-0.7553728608350597],[0.40653405290391353,0.045462252039168004],[0,0]],"o":[[-0.39263546554957524,-0.024479675177067343],[-0.5802665605173727,-0.9407189620956187],[-0.4134833880021403,-0.6889280084839321],[1.2786712792308512,-0.7483786746272859],[1.0528189861965083,-0.6049976906133699],[0.5524693858086961,0.8847653890561518],[0.4551791500651552,0.7413844050422357],[-1.3029938071009433,0.7553728608350597],[-0.39611011238815985,0.23080837414404604],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[75.80142211914062,172.12815856933594],"ix":2},"a":{"a":0,"k":[4.4612135887146,3.9135239124298096],"ix":2},"s":{"a":0,"k":[99.99125647628992,-99.93734922416773],"ix":2},"r":{"a":0,"k":-179.04729257246265,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.0776771066871,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[0.1025689976434423,3.558003484461469],[0.9503915034593144,2.6837207042801023],[5.036606707684896,0.31965615890399685],[7.017178267403363,0.5049930443595444],[8.775364954739914,3.376145801162924],[7.979660512011378,5.142193085017184],[3.8899669042492517,7.502757375261195],[1.9476226580850728,7.362884910630283],[0.14774152027865273,4.460248117446151],[0.1025689976434423,3.558003484461469]],"i":[[0,0],[-0.3891640411676177,0.2273135578659654],[-1.3690235160183446,0.7763632668859677],[-0.375265338725653,-0.5980095490458209],[-0.5698473385987616,-0.9652083700839913],[0.861720379829825,-0.5035869974468091],[1.3690235160183446,-0.7798603953385933],[0.36831594608327,0.5770267366410075],[0.5941701092936005,0.9722026269892425],[-0.16678458463382895,0.34971317877504204]],"o":[[0.1424618346496904,-0.370695949490796],[1.3585994891868711,-0.7903517806964703],[0.8582457042193338,-0.48610131349462127],[0.6011194605145828,0.947722727820863],[0.36136659486228767,0.6119980628563235],[-1.3585994891868711,0.7938489091490959],[-0.8478216773878603,0.48610131349462127],[-0.6150181629565475,-0.95821411317874],[-0.15983523341284658,-0.25878775562865586],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[67.5125732421875,152.61578369140625],"ix":2},"a":{"a":0,"k":[4.4632182121276855,3.917318820953369],"ix":2},"s":{"a":0,"k":[99.99126303986007,-99.93734753227882],"ix":2},"r":{"a":0,"k":-179.04727181957688,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07763991996418,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[4.192733428851701,12.010722117398744],[2.8064335426556535,11.227442049627433],[0.24231141307259665,7.045282067000137],[1.6529241443597045,3.9470995951571433],[7.434360509866554,0.5971794783255967],[11.03038498578153,0.9153790439998843],[13.531958730143492,5.027620575839927],[12.208206421511942,8.045362105573108],[6.256527808362085,11.493202360360087],[4.192733428851701,12.010722117398744]],"i":[[0,0],[0.284902251751127,0.45458414734433655],[0.8303858750146484,1.4057141005256923],[-1.4488322218309413,0.8427291340781369],[-1.9283019089656546,1.1154796224847388],[-0.6740370603908692,-1.0979956328503873],[-0.8269114605935233,-1.3777397171107297],[1.3689206073084892,-0.7972706776585838],[1.9804180424459579,-1.1539443996803125],[0.7157300334443708,0.06993602627572557]],"o":[[-0.6427672891824558,-0.04895521787194391],[-0.8616556048047748,-1.3917269088182112],[-0.6114975179740426,-1.0350531867964825],[1.9248274117079556,-1.118976420411609],[1.5530646544646955,-0.8951811029811918],[0.844283532699149,1.3637525254032485],[0.5871766170261666,0.9791043365963185],[-1.9804180424459579,1.1539443996803125],[-0.6775114748119943,0.3951385409024216],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[53.140968322753906,143.88970947265625],"ix":2},"a":{"a":0,"k":[6.883284568786621,6.012426853179932],"ix":2},"s":{"a":0,"k":[99.9912455308618,-99.93735736934445],"ix":2},"r":{"a":0,"k":-179.04746432890948,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.077988386257,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[13.599252185799127,6.598676928199482],[12.209490543159884,8.04982928884999],[6.136238950771906,11.553613218714425],[2.8702909394827776,11.291354453728713],[0.1845833096098343,6.909895784890695],[1.4423159411300948,4.080988849281336],[7.68234241638414,0.4723056402722952],[10.91006680026495,0.731064165212286],[13.585362203561447,5.067084366748361],[13.599252185799127,6.605655982248174],[13.599252185799127,6.598676928199482]],"i":[[0,0],[0.6531879703837198,-0.37765263658599046],[2.029052051268496,-1.1609321096598648],[0.5802254708913597,0.8986733446741539],[0.8686010266495277,1.475642577620828],[-1.198669433343598,0.7063502670252625],[-2.091591265545163,1.1889064346164822],[-0.5628534669256189,-0.8706991030873525],[-0.875549828235824,-1.454661896430727],[0.26405470878800646,-0.5769692746315822],[0,0]],"o":[[-0.2675291095811546,0.5909564371098909],[-2.0221032496822,1.1714224502549153],[-1.292478337594847,0.737821288810414],[-0.9241915221761471,-1.4441716392054926],[-0.5037886120239758,-0.856711982293952],[2.0672703771568766,-1.2203774564016336],[1.2542598460339685,-0.7133438274219629],[0.9241915221761471,1.4266876548439258],[0.2675291095811546,0.4405947218412015],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[69.59632873535156,182.6849822998047],"ix":2},"a":{"a":0,"k":[6.895877838134766,6.02186918258667],"ix":2},"s":{"a":0,"k":[99.99124519644363,-99.93735830405899],"ix":2},"r":{"a":0,"k":-179.04747585426995,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07800887553003,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[16.05528684597576,7.840664691942586],[14.297338966687954,9.700823715432906],[7.66160219365057,13.540012658215783],[3.0409002290190976,13.085467414920803],[0.35534515000427275,8.70081991195311],[2.2939480163381964,4.326651582608436],[8.47803234995781,0.753182017674502],[13.286332863305882,1.162291943678763],[16.06569844035389,5.704287109648242],[16.05528684597576,7.8371647426538695],[16.05528684597576,7.840664691942586]],"i":[[0,0],[0.8303355025889745,-0.4825217874909],[2.2234924947710275,-1.2587524601105622],[0.799067586834993,1.2867247944303613],[0.8893969647757913,1.465048061002089],[-2.0358853315733345,1.178332155248422],[-2.063678960837719,1.1853253013512843],[-0.8581291318533588,-1.3811312247704592],[-0.9171906768717247,-1.517496114908314],[0.32657545447482567,-0.7902168397795617],[0,0]],"o":[[-0.37521436781116013,0.730775723134358],[-2.2095956801388352,1.2867247944303613],[-1.8413297610595456,1.041967348474451],[-0.9032937794079836,-1.4580549982631101],[-0.8755001501435992,-1.4405722580517795],[2.060204674348122,-1.1923183640902633],[1.9768237865549687,-1.1398703101840384],[0.934561695161965,1.510503052169335],[0.37521436781116013,0.6188866359468128],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[40.554962158203125,165.1654052734375],"ix":2},"a":{"a":0,"k":[8.162153244018555,7.101851940155029],"ix":2},"s":{"a":0,"k":[99.9912289579571,-99.93736456503879],"ix":2},"r":{"a":0,"k":-179.04762460997964,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.0782786929983,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[0.22906977017159044,6.40989910848798],[2.1815838521842847,4.3748980796235974],[8.532470681238248,0.6965306480721261],[13.260899486120033,1.112622253753725],[15.835292550528294,5.343452289617631],[16.24525942430398,7.249082270954607],[14.303167662074852,9.682675027742015],[7.729925033953051,13.500935608435467],[3.0501404998159027,13.067365466309635],[0.288125696075606,8.563792599538964],[0.2255921501183558,6.406399132936265],[0.22906977017159044,6.40989910848798]],"i":[[0,0],[-0.9102475005745004,0.5279806988198972],[-2.1088560023209824,1.2342860023176534],[-0.8199175953050306,-1.3182034682463228],[-0.8998248287547961,-1.3881347037476324],[0.17718558659903808,-0.7517606357511856],[1.0492166238346228,-0.6258843951759266],[2.2061342726382223,-1.2482722327450133],[0.826866126016866,1.3147069106394829],[0.9171960312863358,1.5035212715023711],[-0.298783548743637,0.7972158846401057],[0,0]],"o":[[0.40301034977271244,-0.8216917878879858],[2.115804450200785,-1.2272928871039732],[1.810072412161329,-1.0594579552466343],[0.8755052611754861,1.4021210175395014],[0.37174233431359954,0.5699394317842319],[-0.23277323176148537,0.9790370469248048],[-2.178340481119011,1.2937275649984428],[-1.8969280934908974,1.0734441856739942],[-0.934567150985843,-1.493031515317342],[-0.3856392300732053,-0.6293809527827667],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[55.10738754272461,173.9872589111328],"ix":2},"a":{"a":0,"k":[8.154135704040527,7.097522258758545],"ix":2},"s":{"a":0,"k":[99.99122939758726,-99.9373633128458],"ix":2},"r":{"a":0,"k":-179.04760945626182,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07825094711603,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[11.403901507175542,0.017908102527259398],[13.283410048278832,1.1472525310873516],[15.902911132802485,5.3429847814799905],[13.86359533043816,9.9373167174034],[7.908922110528891,13.384805594959564],[2.999967048431493,12.975727675913664],[0.3387885751738243,8.633150105230982],[2.232186086530058,4.332528816698084],[8.582905232559273,0.6542633815292442],[11.39695705311026,0.014408244489619053],[11.403901507175542,0.017908102527259398]],"i":[[0,0],[-0.3578359395801975,-0.6887993877761969],[-0.833792536867344,-1.4230525816119348],[2.268610510137014,-1.3111663282476997],[1.9872053943457904,-1.1433370315630573],[0.889378650771938,1.4300454620269858],[0.8789562544148266,1.4510241032721385],[-1.9663606016315676,1.1468334717705828],[-2.115748531239694,1.2272516799053785],[-1.0561371581454069,-0.07342531208942416],[0,0]],"o":[[0.7365166718746178,0.1398577437637974],[0.764309811656758,1.4615133405330047],[0.9449648475063753,1.6153568763875452],[-1.9837313450565965,1.1468334717705828],[-2.053213987437339,1.1817979572075477],[-0.8963269150100123,-1.440534699287852],[-0.8442149332244554,-1.3985774167975464],[2.1122743162908137,-1.2342445603204295],[0.8754821222957895,-0.5069843302614526],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[46.841819763183594,154.5121307373047],"ix":2},"a":{"a":0,"k":[8.154358863830566,7.085676670074463],"ix":2},"s":{"a":0,"k":[99.99122734500784,-99.93736911293075],"ix":2},"r":{"a":0,"k":-179.0476802091848,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.0783788983462,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"tr","p":{"a":0,"k":[58.80410385131836,163.29217529296875],"ix":2},"a":{"a":0,"k":[58.80410385131836,163.29217529296875],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":40,"ty":4,"nm":"Subtract","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":38,"shapes":[{"ty":"gr","nm":"Subtract","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[10.3824,63.4294],[3.04872,55.016],[29.0968,1.90405],[32.9087,0],[4.98633,56.5172],[10.3824,63.4294]],"i":[[0,0],[1.8060700000000005,3.348700000000001],[-23.401090000000003,12.61485],[-1.2769000000000048,0.588504],[-9.67281,-17.7898],[-2.1528600000000004,-1.9906000000000006]],"o":[[-3.029140000000001,-2.253399999999999],[-9.01754,-16.7196],[1.2632999999999974,-0.681],[-25.091800000000003,13.4319],[1.42169,2.614699999999999],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[87.65900421142578,164.2039031982422],"ix":2},"a":{"a":0,"k":[16.454326629638672,31.71470069885254],"ix":2},"s":{"a":0,"k":[99.98538996934835,-99.96954595592591],"ix":2},"r":{"a":0,"k":-179.5015241158224,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.9171340133316,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":41,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":38,"shapes":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[88.21931786884166,14.909360201167786],[61.92577225162679,67.81213647090996],[3.0261597636913695,60.60278848983201],[29.319710635755143,7.700012893816345],[88.21931786884166,14.909360201167786]],"i":[[0,0],[23.524718432140805,-12.617259065506351],[9.005583370118602,16.601656097791295],[-23.524718432140805,12.617259065506351],[-9.005583370118602,-16.601656097791295]],"o":[[9.002139473513271,16.598124423415776],[-23.524718432140805,12.617259065506351],[-9.005583370118602,-16.601656097791295],[23.524718432140805,-12.617259065506351],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[58.44203186035156,164.27598571777344],"ix":2},"a":{"a":0,"k":[45.62203598022461,37.756072998046875],"ix":2},"s":{"a":0,"k":[99.98663086762485,-99.9690519654688],"ix":2},"r":{"a":0,"k":-179.47655976200673,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.87006052906185,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":42,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":38,"shapes":[{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[56.80855941772461,172.7869873046875],"ix":2},"a":{"a":0,"k":[50.34269714355469,34.644222259521484],"ix":2},"s":{"a":0,"k":[99.98624770639856,-99.96921143324636],"ix":2},"r":{"a":0,"k":-179.48419804718966,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.88445089261864,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":43,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":38,"shapes":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[100.70275269191342,17.01699243271851],[70.68645085086109,77.40818685309928],[3.4528023763282327,69.18152126275318],[33.469115383932746,8.790347727897714],[100.70275269191342,17.01699243271851]],"i":[[0,0],[26.854888016619988,-14.404587808191783],[10.27979460158817,18.947084462194944],[-26.854888016619988,14.404587808191783],[-10.27979460158817,-18.947084462194944]],"o":[[10.276350705522496,18.947084462194944],[-26.854888016619988,14.404587808191783],[-10.276350705522496,-18.947084462194944],[26.854888016619988,-14.404587808191783],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[58.43901062011719,164.2755889892578],"ix":2},"a":{"a":0,"k":[52.07777786254883,43.09926223754883],"ix":2},"s":{"a":0,"k":[99.98663086762485,-99.9690519654688],"ix":2},"r":{"a":0,"k":-179.47655976200673,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.87006052906185,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":44,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[54.03989791870117,178.05775451660156],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-179.4802642449558,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":38},{"ddd":0,"ind":45,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":44.7192326479068,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":44},{"ddd":0,"ind":46,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100.98489713464443,99.02470848355546],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":45},{"ddd":0,"ind":47,"ty":3,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"s":{"a":0,"k":[99.98644684038186,-99.96912974892234],"ix":2},"r":{"a":0,"k":-45.2807673520932,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":46},{"ddd":0,"ind":48,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"a":{"a":0,"k":[53.04705047607422,39.595760345458984],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":47},{"ddd":0,"refId":"6","w":114,"h":86,"ind":11,"ty":0,"nm":"Stroke group","sr":1,"ks":{"p":{"a":0,"k":[-1,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":48},{"ddd":0,"ind":49,"ty":4,"nm":"Filled region","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":47,"shapes":[{"ty":"gr","nm":"Filled region","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[97.16712502702299,0.003531228332176548],[97.31282707131403,0.27209014441687174],[102.644816047633,10.100045156135499],[72.65169231948836,70.41103301198487],[5.4776983045979675,62.1983467325407],[0,52.10183091118514],[67.25072597194087,59.815519366580645],[97.31282707131403,0.27209014441687174],[97.16712502702299,0],[97.16712502702299,0.003531228332176548]],"i":[[0,0],[0,0],[0,0],[26.831064921226726,-14.386299875378532],[10.267234563728655,18.923028589782678],[0,0],[-26.831064921226726,14.386299875378532],[9.993495776319406,18.90771056410798],[0.0491073113877718,0.09052411997905807],[0,0]],"o":[[0,0],[0,0],[10.267234563728655,18.923028589782678],[-26.831064921226726,14.386299875378532],[0,0],[10.267234563728655,18.923028589782678],[26.702734215253884,-14.317491424250534],[-0.04802775467761933,-0.090868591413237],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[53.04705047607422,39.59575653076172],"ix":2},"a":{"a":0,"k":[53.047050502676726,39.595757581925454],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":50,"ty":3,"nm":"Group","sr":1,"ks":{"p":{"a":0,"k":[241.27719116210938,123.55642700195312],"ix":2},"a":{"a":0,"k":[241.27718353271484,123.55642986297607],"ix":2},"s":{"a":1,"k":[{"t":10,"s":[0,0],"i":{"x":[0.09195402298850575],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":60,"s":[100,100],"i":{"x":[0.75],"y":[0.75]},"o":{"x":[0.25],"y":[0.25]}}],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":25},{"ddd":0,"ind":51,"ty":4,"nm":"Group","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":50,"shapes":[{"ty":"gr","it":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[8.76720360764667,0],[10.152400445990036,0.8103769864915289],[12.520202224486894,4.738691269997794],[11.496657147166832,7.265979308405374],[5.485037392299904,10.747879951703974],[2.6873433494761545,10.404497741320764],[0.20355143669730355,6.331947839415009],[1.3089768086865183,3.811534151898889],[7.320596563553447,0.32963350860028884],[8.760394134170845,0.006874350891460754],[8.76720360764667,0]],"i":[[0,0],[-0.25929808300065343,-0.4395292194662654],[-0.7710706216606842,-1.318587658398796],[1.1736650415162435,-0.7142349713990939],[2.0266192726162946,-1.126293640232686],[0.5390670886971621,0.8378526129835209],[0.7983651310257884,1.3735288415328413],[-1.1873122961987956,0.7142349713990939],[-2.0061483905924664,1.1606319103922262],[-0.40941804719683544,-0.013735288108320793],[0,0]],"o":[[0.7369524849543039,0.0686764431000008],[0.7847178763432363,1.3117200207406279],[0.49812528397747863,0.8515878882998574],[-1.9720302538860863,1.201837736341236],[-1.1600177868336914,0.6455585538830614],[-0.8666014857826034,-1.3391906532419997],[-0.49130165663620257,-0.8447202506416892],[1.9856775085686384,-1.1881024610248996],[0.5185961660013069,-0.3021763434998511],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[295.26702880859375,122.05229949951172],"ix":2},"a":{"a":0,"k":[6.370332717895508,5.5739288330078125],"ix":2},"s":{"a":0,"k":[99.9912514158198,-99.93736054686399],"ix":2},"r":{"a":0,"k":-163.1710985013259,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07786351259395,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[38.29392153163065,15.698915998541548],[26.563605790582958,22.473120075369092],[19.948769356114802,21.881398543725044],[15.45067726795789,14.61066147686001],[11.441066236987497,12.332197327441245],[7.553590351666672,13.780906322201584],[1.9224865618965794,13.583638136543348],[0.2670796041370648,10.869872827087363],[1.5425591512505124,7.986070991795616],[6.942994206306281,4.877809850735396],[10.036700666990567,5.1226515508642425],[11.386799765962792,7.353542510130096],[13.367867582466749,8.577792523439662],[18.612232345791337,7.169890478700795],[29.134917237751665,1.103021679420347],[35.87865983345592,1.5859385152289047],[40.96699555227758,9.883656436792176],[38.28713045856842,15.698915998541548],[38.29392153163065,15.698915998541548]],"i":[[0,0],[3.921410869648601,-2.230870689409734],[1.2144160990114887,1.8976003636106638],[1.42473393656853,2.4621194240250457],[2.0760409344583164,0.006801434935990702],[1.221200540166431,-0.7481578758974934],[1.5400695979563819,2.8906099124062146],[0.5359713769403933,0.9113923244961982],[-1.4450874217871925,0.8433779574001671],[-1.7639563178233073,1.0814282016965637],[-0.4545580022041701,-0.8025693047107787],[-0.5224024541920501,-0.7005477946064442],[-0.9769604968346792,-0.10202153037419055],[-1.7639563178233073,1.0610238348121575],[-3.5143437533367305,2.013224811997744],[-1.2619072679730017,-1.9452103638222884],[-1.6282674947244655,-2.802191178425777],[2.6527190796437394,-1.5575286092099327],[0,0]],"o":[[-3.89427278152116,2.2852821182230194],[-2.7273479323481022,1.550727180608272],[-1.5400695979563819,-2.4009065666100997],[-0.7937803430204883,-1.3670884462045851],[-1.3975961719487617,0.04080860961594421],[-2.8358989908271757,1.7275644864102984],[-0.4952646895722817,-0.9317966103011802],[-0.6106002700832155,-1.0406195490071755],[1.797878685351854,-1.0474209776088361],[1.1804938932367783,-0.7277535900925114],[0.43420463830088474,0.754959304499154],[0.447773561049228,0.5917248559004491],[1.78430980304197,0.12922726505068935],[3.466852827005972,-2.0744376694126903],[2.8155458291161857,-1.611940038023218],[1.7639563178233073,2.7273756259663586],[1.092296077345613,1.8839975064073424],[0,0],[0,0]]}}},{"ty":"gf","o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,0.520709216594696,0,0.9921568627450981,0.38823529411764707,0,1,0.520709216594696,1],"ix":2}},"s":{"a":0,"k":[0.060991286735772476,11.834360096359887],"ix":2},"e":{"a":0,"k":[41.3824283340482,11.834360096359887],"ix":2},"t":1},{"ty":"tr","p":{"a":0,"k":[261.99432373046875,116.44195556640625],"ix":2},"a":{"a":0,"k":[20.691211700439453,11.744688034057617],"ix":2},"s":{"a":0,"k":[99.98790492180643,-99.93876370810747],"ix":2},"r":{"a":0,"k":-163.2107168872625,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.14970027812953,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[5.335736886650884,15.347022141844256],[3.7798865839422597,14.426734807607037],[0.361101725837836,8.884260296128467],[2.019327356501992,5.1961524232643415],[9.580208474998019,0.8143709049558718],[13.879283318606934,1.1577704604843086],[17.11380927886317,6.3843014713475945],[15.366890371432996,10.299064788149984],[7.689993320255695,14.735760872469784],[5.349398031577024,15.353896839977393],[5.335736886650884,15.347022141844256]],"i":[[0,0],[0.3138997962313404,0.5082313487319131],[1.1122970806055736,1.8612256171634343],[-1.9106943446429747,1.1126145631870485],[-2.524846173815021,1.449146052281909],[-0.8802841691705188,-1.421674114038941],[-1.0713536687126788,-1.7513377004458939],[2.07446815490921,-1.2018984443495286],[2.552141781743618,-1.4834861388312874],[0.7983972640374011,0.08928388116248019],[0,0]],"o":[[-0.7711016561088047,-0.04807593797866323],[-1.13959268853417,-1.84748964804195],[-0.8120451493490276,-1.352994268431521],[2.511198369850723,-1.4697501697098034],[2.067644252927061,-1.1881624752280446],[1.0850014726769772,1.7376017313244099],[0.893931973134817,1.456014036842651],[-2.558965683725767,1.4834861388312874],[-0.7779255580909538,0.45328743130956],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[277.7159729003906,138.93312072753906],"ix":2},"a":{"a":0,"k":[8.761432647705078,7.685818195343018],"ix":2},"s":{"a":0,"k":[99.99125581800057,-99.93735478045642],"ix":2},"r":{"a":0,"k":-163.17099578627378,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07767873893022,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[0.20143654421254684,6.987607301254207],[1.8664858242187465,5.270592474024264],[9.89145524538178,0.6277767066848504],[13.781124635953708,0.991762121442508],[17.234049579304983,6.630454734890595],[15.671355618747848,10.098816963571215],[7.63955491714066,14.734758536316921],[3.824960628342406,14.460061263150166],[0.2901514294318781,8.759536759022971],[0.20143654421254684,6.987607301254207]],"i":[[0,0],[-0.7642841539419701,0.4464239238536619],[-2.6886424977175056,1.5247094770451186],[-0.73698831744876,-1.1744383920311945],[-1.1191303537457404,-1.8955847242660588],[1.6923434895392204,-0.9890007684207243],[2.6886424977175056,-1.531577531114124],[0.7233403178541454,1.1332299857434995],[1.1668981489568677,1.9093208324040696],[-0.3275503429735576,0.6868060618898376]],"o":[[0.2797825884364351,-0.7280143863038698],[2.6681706203475977,-1.55218169332114],[1.6855195304159178,-0.9546604162020348],[1.1805460672034727,1.861244453921032],[0.7096923996075404,1.2019106083072157],[-2.6681706203475977,1.5590497473901455],[-1.66504765304601,0.9546604162020348],[-1.207841903696683,-1.881848616128048],[-0.31390242472695257,-0.5082364923483729],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[272.5461120605469,97.6224136352539],"ix":2},"a":{"a":0,"k":[8.76537036895752,7.693271160125732],"ix":2},"s":{"a":0,"k":[99.99126046672335,-99.93735635638636],"ix":2},"r":{"a":0,"k":-163.17097518272809,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07763987637009,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[8.234161494887418,23.5880075986661],[5.5115898511164385,22.04971406311681],[0.475878407523892,13.83631769237344],[3.2461983511277066,7.7517583316982845],[14.600433366024996,1.17280825705777],[21.66271070292724,1.7977243694824006],[26.575582592349516,9.873807019007657],[23.97584891658194,15.800387405963866],[12.287273027376058,22.571644065968574],[8.234161494887418,23.5880075986661]],"i":[[0,0],[0.5595230870230523,0.8927635005607528],[1.6308051809095492,2.760699528358866],[-2.8453796779586504,1.655046301458983],[-3.7870161790065247,2.1907044017954345],[-1.3237497930598605,-2.156367375568455],[-1.623981735076613,-2.7057602863956984],[2.688440261117338,-1.5657698695369795],[3.8893677038167858,-2.26624585949479],[1.4056311430550943,0.1373482379400519]],"o":[[-1.2623386992215446,-0.09614376553471224],[-1.6922161934059745,-2.7332299073772823],[-1.200927605383229,-2.032753917419472],[3.7801925704898074,-2.1975718070408305],[3.0500830529467344,-1.758057380139922],[1.6580989642412938,2.6782906654141145],[1.153163484552676,1.9228752697612805],[-3.8893677038167858,2.26624585949479],[-1.3305732388927967,0.7760175295230938],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[250.08370971679688,73.41703033447266],"ix":2},"a":{"a":0,"k":[13.518168449401855,11.807880401611328],"ix":2},"s":{"a":0,"k":[99.99124542905415,-99.93736374763714],"ix":2},"r":{"a":0,"k":-163.17116882784862,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07799103797075,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[26.707740176400904,12.959224582319916],[23.978370035188544,15.809160948270323],[12.051035845093173,22.690286260072224],[5.637000005223375,22.17523297422223],[0.36250545299156317,13.57043120782973],[2.832582180379657,8.014705310055357],[15.087447633126946,0.9275669850766851],[21.426415616656307,1.4357461054935041],[26.680461467866753,9.951310694668576],[26.707740176400904,12.972930834311528],[26.707740176400904,12.959224582319916]],"i":[[0,0],[1.2828039631161463,-0.7416767610955761],[3.9848805102872538,-2.2799691661846166],[1.1395120046731955,1.764915880334623],[1.705856338257725,2.8980330109659906],[-2.354081779332288,1.387210170124167],[-4.1077020495099505,2.3349082946790496],[-1.1053949104446685,-1.70997691557122],[-1.7195031759491357,-2.8568287873934386],[0.5185803203230228,-1.133117212496883],[0,0]],"o":[[-0.5254037391687283,1.1605867767440994],[-3.971233672595843,2.3005712779708927],[-2.538314250849471,1.4490165054829953],[-1.8150312024721489,-2.836226839338192],[-0.989396708726108,-1.6825074331895185],[4.059937954906875,-2.396714630037878],[2.463256480863574,-1.4009449113150176],[1.8150312024721489,2.8018898226300353],[0.5254037391687283,0.865289513678748],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[260.3290710449219,155.54298400878906],"ix":2},"a":{"a":0,"k":[13.542900085449219,11.826424598693848],"ix":2},"s":{"a":0,"k":[99.99124595735267,-99.93736783083592],"ix":2},"r":{"a":0,"k":-163.1711796240282,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07800843489358,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[31.53117824430575,15.398378903807401],[28.078722460875348,19.051568345064286],[15.046716182807513,26.591399258255873],[5.972061917310706,25.69871220171433],[0.6978667756311481,17.087648438241263],[4.5051131431177724,8.497164854177202],[16.65011355773529,1.4791835319274063],[26.09319495472485,2.282639603757133],[31.55162570446599,11.202720399551449],[31.53117824430575,15.391505309869995],[31.53117824430575,15.398378903807401]],"i":[[0,0],[1.630706258061687,-0.9476305396355955],[4.366744664862476,-2.47207961166873],[1.5692988080157948,2.5270148269347104],[1.7466978008754253,2.877226107983103],[-3.998300615282775,2.3141411747528498],[-4.052884870724534,2.3278751013588708],[-1.685290513503446,-2.7124207896238968],[-1.8012822189910973,-2.9802294933523705],[0.6413656114678447,-1.5519166796661248],[0,0]],"o":[[-0.736888180496358,1.4351795314102045],[-4.339452537141597,2.5270148269347104],[-3.6162105018426347,2.0463326347437443],[-1.7739899285963048,-2.86349234509645],[-1.7194056731545455,-2.8291577741604494],[4.046061676120401,-2.3416088642455244],[3.8823089097951238,-2.238605478876257],[1.8353973786421969,2.9664957304657174],[0.736888180496358,1.2154391615043851],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[214.88095092773438,106.84528350830078],"ix":2},"a":{"a":0,"k":[16.029754638671875,13.947415351867676],"ix":2},"s":{"a":0,"k":[99.9912296702712,-99.93737245542732],"ix":2},"r":{"a":0,"k":-163.1713284499216,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07827913783592,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[0.4498729973684864,12.588481581062954],[4.28443991478083,8.591917433059333],[16.757026287021795,1.3679253113814036],[26.043246977347852,2.185092855753766],[31.099129835319232,10.494073243378628],[31.90426892542746,14.23656396193232],[28.090170532679256,19.0159274239967],[15.180896815207266,26.514657462993604],[5.99020921887393,25.66316360078563],[0.5658536716360231,16.818540132805534],[0.44304325568810005,12.581607935000633],[0.4498729973684864,12.588481581062954]],"i":[[0,0],[-1.787646493572157,1.0369079434416946],[-4.141608777413115,2.424029823708846],[-1.6102464586170966,-2.5888363918455672],[-1.7671772775398271,-2.726175225912937],[0.3479769978993441,-1.4763921797131547],[2.0605696993529583,-1.229182245647768],[4.33265479371486,-2.451497557778198],[1.6238927653135182,2.5819694583282295],[1.8012928002685786,2.9527843594263095],[-0.5867847622888283,1.5656623154385487],[0,0]],"o":[[0.791477085286995,-1.6137308500599148],[4.155254921434668,-2.4102959566741697],[3.5548239337868526,-2.0806828204007273],[1.719415773464391,2.753643123702898],[0.7300694371900056,1.1193112275100552],[-0.4571462720779213,1.9227431857813437],[-4.278070217628647,2.540767857224201],[-3.7254008967311365,2.108150554470079],[-1.8354081603224617,-2.9321833951536864],[-0.757361725233112,-1.236049179165106],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[237.62911987304688,131.3279266357422],"ix":2},"a":{"a":0,"k":[16.014009475708008,13.938913345336914],"ix":2},"s":{"a":0,"k":[99.99122602514853,-99.93737114426474],"ix":2},"r":{"a":0,"k":-163.1713117612534,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07825001928347,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[22.396265926641806,0.03516994749321656],[26.087456443453757,2.2531036562016387],[31.231927644577688,10.493154924463346],[27.226889632857226,19.516021121866245],[15.53243183212768,26.286587831685825],[5.8916731037670305,25.483194568129363],[0.6653511535264306,16.954751930856677],[4.383818394101421,8.50870776310204],[16.85607578166222,1.2849160730508324],[22.38262762576175,0.028296532332109582],[22.396265926641806,0.03516994749321656]],"i":[[0,0],[-0.7027585125937084,-1.3527417695187767],[-1.6374956738779627,-2.794750839693641],[4.455352778786588,-2.575016021331783],[3.902697724513093,-2.2454139575041063],[1.7466619436894446,2.8084842453768686],[1.7261932680997918,2.8496844624265507],[-3.8617603733337873,2.2522806603457197],[-4.155145211463865,2.4102149894179448],[-2.0741610784650373,-0.14420089269241435],[0,0]],"o":[[1.4464543763667226,0.2746683797016013],[1.5010376739430369,2.8702844072362823],[1.8558283761715,3.1724196596975043],[-3.895874995320449,2.2522806603457197],[-4.032332832584801,2.3209478524769667],[-1.7603077274158798,-2.8290841901865997],[-1.6579643494676155,-2.7466837560872355],[4.1483221569300746,-2.423948395101172],[1.7193703762365742,-0.9956728943246448],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[232.48016357421875,90.09902954101562],"ix":2},"a":{"a":0,"k":[16.014448165893555,13.9156494140625],"ix":2},"s":{"a":0,"k":[99.99122574404737,-99.93737440170507],"ix":2},"r":{"a":0,"k":-163.17138307659727,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.07837853349568,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"tr","p":{"a":0,"k":[249.37454223632812,114.49254608154297],"ix":2},"a":{"a":0,"k":[249.3745346069336,114.49254417419434],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":52,"ty":4,"nm":"Subtract","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":50,"shapes":[{"ty":"gr","nm":"Subtract","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[20.3966,124.576],[5.98741,108.048],[57.1437,3.74037],[64.6318,0.0000109566],[9.79364,110.995],[20.3966,124.576]],"i":[[0,0],[3.54826,6.5789999999999935],[-45.957800000000006,24.774530000000002],[-2.5084000000000017,1.1560490434000001],[-18.99671,-34.93740000000001],[-4.2303999999999995,-3.910999999999987]],"o":[[-5.9519,-4.4269999999999925],[-17.70961,-32.836200000000005],[2.4816000000000003,-1.33779],[-49.2788,26.3788890434],[2.79336,5.137999999999991],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[304.37908935546875,130.33920288085938],"ix":2},"a":{"a":0,"k":[32.31593322753906,62.28780746459961],"ix":2},"s":{"a":0,"k":[99.98538896719009,-99.96955356750551],"ix":2},"r":{"a":0,"k":-163.6252277340337,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.9171337682713,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":53,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":50,"shapes":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[173.25502116319552,29.28067742251953],[121.61679823861122,133.1770959012087],[5.943112988937955,119.01856798234456],[57.58134623358572,15.122150826795243],[173.25502116319552,29.28067742251953]],"i":[[0,0],[46.20048860362252,-24.779191572856018],[17.68617775640149,32.60419832374541],[-46.20048860362252,24.779191572856018],[-17.68617775640149,-32.60419832374541]],"o":[[17.67941424480727,32.597262424635346],[-46.20048860362252,24.779191572856018],[-17.68617775640149,-32.60419832374541],[46.20048860362252,-24.779191572856018],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0,0],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[249.152587890625,114.77750396728516],"ix":2},"a":{"a":0,"k":[89.59768676757812,74.14962005615234],"ix":2},"s":{"a":0,"k":[99.98662556955409,-99.96906153764827],"ix":2},"r":{"a":0,"k":-163.6002637312693,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.8700621266522,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":54,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":50,"shapes":[{"ty":"gr","it":[{"ty":"tr","p":{"a":0,"k":[241.49313354492188,129.97686767578125],"ix":2},"a":{"a":0,"k":[98.86865234375,68.03822326660156],"ix":2},"s":{"a":0,"k":[99.98624567160283,-99.9692180361173],"ix":2},"r":{"a":0,"k":-163.6079006977315,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.88445030501242,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":55,"ty":4,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":50,"shapes":[{"ty":"gr","nm":"Vector","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[197.77139561659823,33.41988153275754],[138.82200498260534,152.0228938529805],[6.781001775034662,135.86644373254882],[65.73041433915908,17.263472429666887],[197.77139561659823,33.41988153275754]],"i":[[0,0],[52.74065048075778,-28.289347837540774],[20.188617199252807,37.2104130986294],[-52.74065048075778,28.289347837540774],[-20.188617199252807,-37.2104130986294]],"o":[[20.181853688692666,37.2104130986294],[-52.74065048075778,28.289347837540774],[-20.181853688692666,-37.2104130986294],[52.74065048075778,-28.289347837540774],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0,0.9921568627450981,0.38823529411764707],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[249.1444091796875,114.77450561523438],"ix":2},"a":{"a":0,"k":[102.27619934082031,84.64317321777344],"ix":2},"s":{"a":0,"k":[99.98662641098409,-99.96906148126844],"ix":2},"r":{"a":0,"k":-163.60026209297402,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":178.8700604883569,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0},{"ddd":0,"ind":56,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[233.42990112304688,138.44569396972656],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-163.6039680028091,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":50},{"ddd":0,"ind":57,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":44.719232736832716,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":56},{"ddd":0,"ind":58,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100.98489682116214,99.02470879095284],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":57},{"ddd":0,"ind":59,"ty":3,"nm":"Vector","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[104.17976379394531,77.76260375976562],"ix":2},"s":{"a":0,"k":[99.98644433467655,-99.96913630742415],"ix":2},"r":{"a":0,"k":-45.280767263167284,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":58},{"ddd":0,"ind":60,"ty":3,"nm":"","sr":1,"ks":{"p":{"a":0,"k":[104.17976379394531,77.76260375976562],"ix":2},"a":{"a":0,"k":[104.17976379394531,77.76260375976562],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":59},{"ddd":0,"refId":"11","w":223,"h":168,"ind":19,"ty":0,"nm":"Stroke group","sr":1,"ks":{"p":{"a":0,"k":[-1,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"ip":0,"op":201,"st":0,"bm":0,"parent":60},{"ddd":0,"ind":61,"ty":4,"nm":"Filled region","sr":1,"ks":{"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}},"ao":0,"parent":59,"shapes":[{"ty":"gr","nm":"Filled region","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"v":[[190.82772827148438,0.00693502302227655],[191.11387433280746,0.5343612018717749],[201.58543395996094,19.83560367523991],[142.6815643310547,138.28109910395224],[10.757719993591309,122.15210288365557],[0,102.32343051266726],[132.0745391845703,117.47243873096735],[191.11387433280746,0.5343612018717749],[190.82772827148438,0],[190.82772827148438,0.00693502302227655]],"i":[[0,0],[0,0],[0,0],[52.69386291494223,-28.253432362853218],[20.163949966430664,37.16317002940809],[0,0],[-52.69386291503906,28.253432362905126],[19.62635094899997,37.13308676921733],[0.09644246107973231,0.17778143950809522],[0,0]],"o":[[0,0],[0,0],[20.16394996622256,37.16317002939812],[-52.69386291503906,28.253432362905126],[0,0],[20.163949966430664,37.16317002940809],[52.4418326416162,-28.118298594195892],[-0.09432230619728443,-0.17845795122067898],[0,0],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.027450980392156862,0.8117647058823529,0.3333333333333333],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[104.17976379394531,77.7625961303711],"ix":2},"a":{"a":0,"k":[104.17976384614208,77.76259833242791],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":201,"st":0,"bm":0}],"markers":[]}'
        );
      let x = (0, t.default)(
        () => Promise.all([i.e(705), i.e(393)]).then(i.t.bind(i, 3393, 23)),
        { loadableGenerated: { webpack: () => [3393] }, ssr: !1 }
      );
      var n = () =>
        (0, s.jsxs)("div", {
          className:
            "relative z-[20] mb-[-200px] flex min-h-[336px] w-full flex-col items-center bg-[url(/images/presales/top_presale_mobile_bg.png)] pt-[40px] sm:mb-[-200px] sm:min-h-[496px] sm:bg-[url(/images/presales/top_presale_bg.png)] sm:pt-[60px]",
          style: { backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" },
          children: [
            (0, s.jsxs)("p", {
              className:
                "clash-display-semibold mb-10 text-[40px] leading-[44px] sm:mb-4 md:text-[90px] md:leading-[99px]",
              children: [
                "MCC",
                (0, s.jsx)("span", {
                  className: "pl-4",
                  style: {
                    background:
                      "linear-gradient(90deg, #FFFFFF 38.29%, rgba(255, 255, 255, 0.36) 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                  children: "PRESALE",
                }),
              ],
            }),
            (0, s.jsx)(x, {
              animationData: r,
              loop: !0,
              className: "w-full max-w-[279px] sm:max-w-[500px]",
            }),
          ],
        });
    },
    1347: function (a, e, i) {
      "use strict";
      i.d(e, {
        PresaleProvider: function () {
          return n;
        },
        c: function () {
          return l;
        },
      });
      var s = i(7437),
        t = i(4754),
        r = i(2265);
      let x = (0, r.createContext)({
          indexRound: 1,
          activeRoundTime: void 0,
          activeRound: void 0,
          onChangeSelectedRound: (a) => {},
          listPresales: [],
          mutatePresales: () => {},
        }),
        n = (a) => {
          let { children: e } = a,
            { data: i, mutate: n } = (0, t.wT)(),
            [l, o] = (0, r.useState)(),
            [d, k] = (0, r.useState)(),
            [c, p] = (0, r.useState)(1),
            m = (a) => {
              if (!i) return;
              let e = i.findIndex((e) => e.id === a.id) || 0,
                s = i[e];
              p(e + 1),
                o(
                  new Date(
                    s.status === t.MV.Pending ? s.start_time : s.end_time
                  )
                ),
                k(s);
            };
          return (
            (0, r.useEffect)(() => {
              if (i && i.length > 0 && !d)
                m(
                  i.find(
                    (a) => a.status === t.MV.Active || a.status === t.MV.Pending
                  ) || i[0]
                );
              else if (i && i.length > 0) {
                let a =
                  i.find((a) => a.id === (null == d ? void 0 : d.id)) || i[0];
                JSON.stringify(a) !== JSON.stringify(d) && m(a);
              }
            }, [i]),
            (0, s.jsx)(x.Provider, {
              value: {
                indexRound: c,
                activeRoundTime: l,
                activeRound: d,
                onChangeSelectedRound: m,
                listPresales: i || [],
                mutatePresales: n,
              },
              children: e,
            })
          );
        };
      function l() {
        let a = (0, r.useContext)(x);
        if (!a)
          throw Error(
            "usePreSale must be inside a PreSaleContextState with a state value"
          );
        return a;
      }
    },
    7197: function (a, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return k;
        },
      });
      var s = i(7437),
        t = i(2265),
        r = i(8179),
        x = i(4662),
        n = i(6648),
        l = (a) => {
          let { isOpen: e, onClose: i } = a;
          return (0, s.jsx)(x.Vq, {
            open: e,
            children: (0, s.jsx)(x.cZ, {
              className: "z-[1000] rounded-[20px] px-0 py-5 max-sm:max-w-[90%]",
              style: {
                background:
                  "linear-gradient(180deg, #00C076 20%, rgba(255, 255, 255, 0) 100%)",
                backdropFilter: "blur(41.900001525878906px)",
                boxShadow: "0px 4px 41.9px 0px #0000009C",
              },
              children: (0, s.jsxs)("div", {
                className: "flex w-full flex-col gap-5 px-2",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex w-full items-center justify-between px-3",
                    children: [
                      (0, s.jsx)("h4", {
                        className:
                          "clash-display-semibold text-[24px] leading-[29px]",
                        children: "Learn More",
                      }),
                      (0, s.jsx)("div", {
                        onClick: i,
                        className: "cursor-pointer",
                        children: (0, s.jsx)(n.default, {
                          src: "/icons/close.svg",
                          alt: "Close Icon",
                          width: 16,
                          height: 16,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "max-h-[50vh] w-full overflow-auto px-3",
                    children: (0, s.jsxs)("div", {
                      className: "w-full rounded-xl bg-[#00000047] px-4 py-3",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "poppins mb-3 text-[18px] font-bold leading-[28.8px]",
                          style: { letterSpacing: "0.02em" },
                          children: "1. Introduction to ORION Token",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "poppins-light text-sm font-normal leading-[22.4px]",
                          style: { letterSpacing: "0.02em" },
                          children:
                            "ORION is the official token of the Orion AI ecosystem, powering transactions, rewards, and utilities across the network. With MCC, users can participate in the Orion AI network, enjoy exclusive benefits, and unlock potential growth in the AI and blockchain revolution.",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "poppins mb-3 mt-5 text-[18px] font-bold leading-[28.8px]",
                          style: { letterSpacing: "0.02em" },
                          children: "2. What is a Pre-Sale Program?",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "poppins-light mb-2 text-sm font-normal leading-[22.4px]",
                          style: { letterSpacing: "0.02em" },
                          children:
                            "A pre-sale program allows early adopters to purchase tokens before they are made widely available. It’s an exclusive opportunity to secure ORION tokens at the best rates and become part of the Orion AI ecosystem from the very beginning.",
                        }),
                        (0, s.jsx)("b", { children: "During the pre-sale:" }),
                        (0, s.jsxs)("p", {
                          className:
                            "poppins-light text-sm font-normal leading-[22.4px]",
                          style: { letterSpacing: "0.02em" },
                          children: [
                            (0, s.jsx)("span", {
                              className: "ml-4",
                              style: { display: "list-item" },
                              children:
                                "Tokens are sold in limited quantities.",
                            }),
                            (0, s.jsx)("span", {
                              className: "ml-4",
                              style: { display: "list-item" },
                              children:
                                "Participants gain early access to future benefits and features within the network.",
                            }),
                            (0, s.jsx)("span", {
                              className: "ml-4",
                              style: { display: "list-item" },
                              children:
                                "Prices may be more favorable compared to public sales, rewarding early supporters.",
                            }),
                            (0, s.jsx)("span", {
                              className: "ml-4",
                              style: { display: "list-item" },
                              children:
                                "The ORION pre-sale is designed to prioritize fairness and transparency, ensuring everyone has a chance to participate.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "poppins mb-3 mt-5 text-[18px] font-bold leading-[28.8px]",
                          style: { letterSpacing: "0.02em" },
                          children:
                            "3. Rules for the ORION Token Pre-Sale Program",
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex w-full flex-col gap-5",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "poppins flex flex-col gap-1.5 text-sm font-bold leading-[22.4px]",
                              style: { letterSpacing: "0.02em" },
                              children: [
                                (0, s.jsx)("p", {
                                  children: "3.1. ORION Supply and Allocation:",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "poppins-light text-sm font-normal leading-[22.4px]",
                                  style: { letterSpacing: "0.02em" },
                                  children:
                                    "ORION has a limited supply of 1 billion tokens, with a specific portion allocated for the pre-sale.",
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Total ORION Token Supply: 1 billion tokens.",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Pre-Sale Allocation: 15% of the total supply (150 million tokens).",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "poppins flex flex-col gap-1.5 text-sm font-bold leading-[22.4px]",
                              style: { letterSpacing: "0.02em" },
                              children: [
                                (0, s.jsx)("p", {
                                  children: "3.2. Pre-Sale Structure:",
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "poppins-light text-sm font-normal leading-[22.4px]",
                                  style: { letterSpacing: "0.02em" },
                                  children: [
                                    "The pre-sale will take place in ",
                                    (0, s.jsx)("b", { children: "3 rounds" }),
                                    ", each offering a specific token allocation and limited duration:",
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Round 1: 30 million tokens, ends in 10 minutes.",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Round 2: 50 million tokens, ends in 15 minutes.",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Round 3: 70 million tokens, ends in 1 hour.",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "poppins-light text-sm font-normal leading-[22.4px]",
                                  style: { letterSpacing: "0.02em" },
                                  children:
                                    "Tokens are sold on a first-come, first-served basis until the allocation for each round is sold out.",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "poppins flex flex-col gap-1.5 text-sm font-bold leading-[22.4px]",
                              style: { letterSpacing: "0.02em" },
                              children: [
                                (0, s.jsx)("p", {
                                  children: "3.3. Participation Requirements:",
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Users must register and connect their Orion AI Wallet to participate.",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Payments are accepted in supported cryptocurrencies such as USDT and USDC.",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "poppins-light ml-4 font-normal",
                                      style: { display: "list-item" },
                                      children:
                                        "Participants must act quickly to secure tokens within the short timeframes.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "poppins flex flex-col gap-1.5 text-sm font-bold leading-[22.4px]",
                              style: { letterSpacing: "0.02em" },
                              children: [
                                (0, s.jsx)("p", {
                                  children: "3.4. Token Distribution:",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "poppins-light text-sm font-normal leading-[22.4px]",
                                  style: { letterSpacing: "0.02em" },
                                  children:
                                    "ORION tokens purchased during the pre-sale will be distributed to user wallets immediately.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "flex w-full justify-end px-3",
                    children: (0, s.jsx)("button", {
                      onClick: i,
                      className:
                        "rounded-[30px] bg-white px-6 py-3 text-base font-medium leading-[22px] text-black shadow-md hover:bg-green-600 hover:text-white focus:outline-none",
                      children: "Close",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        o = i(1347);
      let d = {
        transition: { duration: 1 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: !0 },
      };
      var k = () => {
        let { listPresales: a } = (0, o.c)(),
          [e, i] = (0, t.useState)(!1);
        return (0, s.jsxs)(r.E.section, {
          initial: { opacity: 0, x: 50 },
          ...d,
          className:
            "w-[calc(100%_-_32px)] rounded-3xl border-2 border-[#00ffa31a] bg-[#00000047] p-4 sm:w-full sm:p-8",
          style: {
            boxShadow: "box-shadow: 0px 54px 32px -16px #0505050D",
            backdropFilter: "blur(100px)",
          },
          children: [
            (0, s.jsxs)("div", {
              className: "mb-5 flex w-full flex-col justify-center",
              children: [
                (0, s.jsx)("h4", {
                  className:
                    "text-xl font-semibold sm:text-[30px] sm:leading-[42px]",
                  children: "ORION Pre-Sale",
                }),
                (0, s.jsxs)("p", {
                  className:
                    "poppins-light text-base font-normal text-[#F9F9F9]",
                  children: [
                    "ORION is the official token of Orion AI AI.",
                    " ",
                    (0, s.jsx)("span", {
                      onClick: () => i(!0),
                      className: "cursor-pointer text-[#00FFA3]",
                      children: "Learn more",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "mb-3 flex w-full flex-col rounded-xl bg-[#00000047] py-4 sm:flex-row",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex w-full flex-col justify-center px-5 py-1 sm:w-1/2",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "font-poppins text-sm font-medium text-[#999999]",
                      children: "Total Supply",
                    }),
                    (0, s.jsx)("p", {
                      className: "text-xl font-medium",
                      children: "1,000,000,000 MCC",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "hidden h-[60px] w-[1px] bg-[#003724] sm:block",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex w-full flex-col justify-center px-5 py-1 sm:w-1/2",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "font-poppins text-sm font-medium text-[#999999]",
                      children: "Token For Presale",
                    }),
                    (0, s.jsx)("p", {
                      className: "text-xl font-medium",
                      children: "150,000,000 MCC",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "flex w-full flex-col gap-1 rounded-xl bg-[#00000047] py-4 lg:flex-row",
              children: a.map((a, e) =>
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    0 !== e &&
                      (0, s.jsx)("div", {
                        className:
                          "hidden h-[60px] w-[1px] bg-[#003724] lg:block",
                      }),
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "flex w-full flex-col justify-center px-5 py-1 sm:w-1/3",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "font-poppins text-sm font-medium text-[#999999]",
                            children: "Round ".concat(e + 1),
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xl font-medium",
                            children: "1 ORION = ".concat(a.usd_price, " USD"),
                          }),
                        ],
                      },
                      a.id
                    ),
                  ],
                })
              ),
            }),
            (0, s.jsx)(l, { isOpen: e, onClose: () => i(!1) }),
          ],
        });
      };
    },
    780: function (a, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return k;
        },
      });
      var s = i(7437),
        t = i(8179),
        r = i(4839),
        x = i(4754),
        n = i(9354);
      function l(a) {
        let { className: e, ...i } = a;
        return (0, s.jsx)("div", {
          className: (0, n.cn)("animate-pulse rounded-md bg-primary/10", e),
          ...i,
        });
      }
      var o = i(1347);
      let d = {
        transition: { duration: 1 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: !0 },
      };
      var k = () => {
        let {
            listPresales: a,
            activeRound: e,
            onChangeSelectedRound: i,
          } = (0, o.c)(),
          n = (a) => {
            let e = new Date(a),
              i = e.getUTCFullYear(),
              s = String(e.getUTCMonth() + 1).padStart(2, "0"),
              t = String(e.getUTCDate()).padStart(2, "0"),
              r = String(e.getUTCHours()).padStart(2, "0"),
              x = String(e.getUTCMinutes()).padStart(2, "0");
            return ""
              .concat(i, ".")
              .concat(s, ".")
              .concat(t, " ")
              .concat(r, ":")
              .concat(x);
          };
        return (0, s.jsxs)(t.E.section, {
          initial: { opacity: 0, x: -50 },
          ...d,
          className:
            "w-[calc(100%_-_32px)] rounded-3xl border-2 border-[#00ffa31a] bg-[#00000047] px-4 pb-4 pt-6 sm:w-full",
          style: {
            boxShadow: "box-shadow: 0px 54px 32px -16px #0505050D",
            backdropFilter: "blur(100px)",
          },
          children: [
            (0, s.jsx)("div", {
              className:
                "mb-5 flex justify-between rounded-[62px] bg-[#00000047] p-2",
              children: a
                ? a.map((a, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        onClick: () => i(a),
                        className: (0, r.Z)({
                          "flex w-1/3 cursor-pointer flex-col items-center py-2 sm:py-3":
                            !0,
                          "rounded-[100px] bg-white":
                            (null == e ? void 0 : e.id) === a.id,
                          "opacity-50": a.status === x.MV.Completed,
                        }),
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "font-poppins text-xs font-medium text-[#999999]",
                            children:
                              a.status === x.MV.Active
                                ? "On Going"
                                : a.status === x.MV.Completed
                                ? "Ended"
                                : "Next Round",
                          }),
                          (0, s.jsxs)("p", {
                            className: (0, r.Z)({
                              "clash-display-semibold text-base sm:text-2xl":
                                !0,
                              "text-[#003724]":
                                (null == e ? void 0 : e.id) === a.id,
                            }),
                            children: ["Round ", t + 1],
                          }),
                        ],
                      },
                      a.id
                    )
                  )
                : [1, 2, 3].map((a) =>
                    (0, s.jsx)(
                      l,
                      {
                        className:
                          "flex min-h-[56px] w-[calc(33%_-_4px)] rounded-[100px] sm:min-h-[72px]",
                      },
                      a
                    )
                  ),
            }),
            (0, s.jsxs)("div", {
              className:
                "flex w-full flex-row items-center gap-4 sm:flex-col sm:gap-0",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "relative mb-4 mt-2 hidden h-4 w-3/4 items-center justify-between rounded-[66px] bg-[#001810] sm:flex",
                  children: [
                    (0, s.jsx)("div", {
                      className: "ml-1 h-2 w-2 rounded-full bg-[#003724]",
                    }),
                    (0, s.jsx)("div", {
                      className: "mr-1 h-2 w-2 rounded-full bg-[#003724]",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "absolute flex h-4 items-center justify-center rounded-[66px] bg-[#00FFA3] p-1 sm:justify-between",
                      style: {
                        width: "".concat(
                          (null == e ? void 0 : e.status) === x.MV.Pending
                            ? 15
                            : (null == e ? void 0 : e.status) === x.MV.Completed
                            ? 100
                            : 50,
                          "%"
                        ),
                      },
                      children: [
                        (0, s.jsx)("div", {
                          className: "h-2 w-2 rounded-full bg-white",
                        }),
                        (0, s.jsx)("div", {
                          className: "h-2 w-2 rounded-full bg-white",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "relative block h-[146px] w-3 rounded-[23px] bg-[#001810] sm:hidden",
                  children: (0, s.jsx)("div", {
                    className: "absolute w-3 rounded-[66px] bg-[#00FFA3]",
                    style: {
                      height: "".concat(
                        (null == e ? void 0 : e.status) === x.MV.Pending
                          ? 20
                          : (null == e ? void 0 : e.status) === x.MV.Completed
                          ? 100
                          : 50,
                        "%"
                      ),
                    },
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-5",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "w-full sm:w-1/3 sm:text-center",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-base font-semibold",
                          children: "Waiting for Round Start",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xs font-medium text-[#999999]",
                          children: "No one can purchase",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: (0, r.Z)({
                        "w-full sm:w-1/3 sm:text-center": !0,
                        "opacity-[35%]":
                          (null == e ? void 0 : e.status) === x.MV.Pending,
                      }),
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-base font-semibold",
                          children: "Round Start",
                        }),
                        (0, s.jsxs)("p", {
                          className: "text-xs font-medium text-[#999999]",
                          children: [
                            "Starts at ",
                            n((null == e ? void 0 : e.start_time) || ""),
                            " (UTC)",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: (0, r.Z)({
                        "w-full sm:w-1/3 sm:text-center": !0,
                        "opacity-[35%]":
                          (null == e ? void 0 : e.status) !== x.MV.Completed,
                      }),
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-base font-semibold",
                          children: "Round End",
                        }),
                        (0, s.jsxs)("p", {
                          className: "text-xs font-medium text-[#999999]",
                          children: [
                            "Ends at ",
                            n((null == e ? void 0 : e.end_time) || ""),
                            " (UTC)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
  },
  function (a) {
    a.O(
      0,
      [310, 974, 684, 140, 956, 598, 702, 143, 549, 971, 23, 744],
      function () {
        return a((a.s = 7782));
      }
    ),
      (_N_E = a.O());
  },
]);
