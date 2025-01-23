(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    6694: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 3612)),
        Promise.resolve().then(s.bind(s, 7640)),
        Promise.resolve().then(s.bind(s, 239)),
        Promise.resolve().then(s.t.bind(s, 4080, 23)),
        Promise.resolve().then(s.t.bind(s, 9593, 23)),
        Promise.resolve().then(s.bind(s, 5956)),
        Promise.resolve().then(s.t.bind(s, 4193, 23)),
        Promise.resolve().then(s.t.bind(s, 3054, 23)),
        Promise.resolve().then(s.t.bind(s, 2074, 23)),
        Promise.resolve().then(s.bind(s, 1422)),
        Promise.resolve().then(s.bind(s, 4084)),
        Promise.resolve().then(s.bind(s, 5666)),
        Promise.resolve().then(s.bind(s, 1361)),
        Promise.resolve().then(s.bind(s, 5915));
    },
    1422: function (e, t, s) {
      "use strict";
      s.d(t, {
        Toaster: function () {
          return _;
        },
      });
      var r = s(7437),
        a = s(2265),
        i = s(4867),
        n = s(7397),
        o = s(2218),
        l = s(9354);
      let c = n.zt,
        d = a.forwardRef((e, t) => {
          let { className: s, ...a } = e;
          return (0, r.jsx)(n.l_, {
            ref: t,
            className: (0, l.cn)(
              "fixed bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:flex-col md:top-0 md:max-w-[420px]",
              s
            ),
            ...a,
          });
        });
      d.displayName = n.l_.displayName;
      let u = (0, o.j)(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
          {
            variants: {
              variant: {
                default: "border bg-background text-foreground",
                destructive:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
                success: "bg-lime-600 text-white",
                error:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        h = a.forwardRef((e, t) => {
          let { className: s, variant: a, ...i } = e;
          return (0, r.jsx)(n.fC, {
            ref: t,
            className: (0, l.cn)(u({ variant: a }), s),
            ...i,
          });
        });
      (h.displayName = n.fC.displayName),
        (a.forwardRef((e, t) => {
          let { className: s, ...a } = e;
          return (0, r.jsx)(n.aU, {
            ref: t,
            className: (0, l.cn)(
              "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
              s
            ),
            ...a,
          });
        }).displayName = n.aU.displayName);
      let m = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)(n.x8, {
          ref: t,
          className: (0, l.cn)(
            "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            s
          ),
          "toast-close": "",
          ...a,
          children: (0, r.jsx)(i.Pxu, { className: "h-4 w-4" }),
        });
      });
      m.displayName = n.x8.displayName;
      let x = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)(n.Dx, {
          ref: t,
          className: (0, l.cn)("text-sm font-semibold [&+div]:text-xs", s),
          ...a,
        });
      });
      x.displayName = n.Dx.displayName;
      let f = a.forwardRef((e, t) => {
        let { className: s, ...a } = e;
        return (0, r.jsx)(n.dk, {
          ref: t,
          className: (0, l.cn)("text-sm opacity-90", s),
          ...a,
        });
      });
      f.displayName = n.dk.displayName;
      let p = 0,
        g = new Map(),
        v = (e) => {
          if (g.has(e)) return;
          let t = setTimeout(() => {
            g.delete(e), w({ type: "REMOVE_TOAST", toastId: e });
          }, 1e6);
          g.set(e, t);
        },
        b = (e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e
                ),
              };
            case "DISMISS_TOAST": {
              let { toastId: s } = t;
              return (
                s
                  ? v(s)
                  : e.toasts.forEach((e) => {
                      v(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === s || void 0 === s ? { ...e, open: !1 } : e
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        y = [],
        j = { toasts: [] };
      function w(e) {
        (j = b(j, e)),
          y.forEach((e) => {
            e(j);
          });
      }
      function N(e) {
        let { ...t } = e,
          s = (p = (p + 1) % Number.MAX_VALUE).toString(),
          r = () => w({ type: "DISMISS_TOAST", toastId: s });
        return (
          w({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: s,
              open: !0,
              onOpenChange: (e) => {
                e || r();
              },
            },
          }),
          {
            id: s,
            dismiss: r,
            update: (e) => w({ type: "UPDATE_TOAST", toast: { ...e, id: s } }),
          }
        );
      }
      function _() {
        let { toasts: e } = (function () {
          let [e, t] = a.useState(j);
          return (
            a.useEffect(
              () => (
                y.push(t),
                () => {
                  let e = y.indexOf(t);
                  e > -1 && y.splice(e, 1);
                }
              ),
              [e]
            ),
            {
              ...e,
              toast: N,
              dismiss: (e) => w({ type: "DISMISS_TOAST", toastId: e }),
            }
          );
        })();
        return (0, r.jsxs)(c, {
          children: [
            e.map(function (e) {
              let { id: t, title: s, description: a, action: i, ...n } = e;
              return (0,
              r.jsxs)(h, { ...n, children: [(0, r.jsxs)("div", { className: "grid gap-1", children: [s && (0, r.jsx)(x, { children: s }), a && (0, r.jsx)(f, { children: a })] }), i, (0, r.jsx)(m, {})] }, t);
            }),
            (0, r.jsx)(d, {}),
          ],
        });
      }
    },
    3447: function (e, t, s) {
      "use strict";
      s.d(t, {
        G: function () {
          return o;
        },
      });
      var r = s(9597),
        a = s(8378),
        i = s(2265),
        n = s(1617);
      function o() {
        let [e, t] = (0, i.useState)(!0),
          { data: s, mutate: o } = (0, n.ZP)(
            "/meshmain/user/profile",
            async function (e) {
              try {
                return t(!0), (await (0, a._i)(e)).data;
              } catch (e) {
                throw (0, r.C)(e);
              } finally {
                t(!1);
              }
            }
          );
        return {
          userProfile: (null == s ? void 0 : s.id) ? s : void 0,
          loading: e,
          mutate: o,
        };
      }
    },
    5666: function (e, t, s) {
      "use strict";
      s.d(t, {
        MusicProvider: function () {
          return n;
        },
        u: function () {
          return o;
        },
      });
      var r = s(7437),
        a = s(2265);
      let i = (0, a.createContext)(void 0),
        n = (e) => {
          let { children: t } = e,
            [s, n] = (0, a.useState)(!1);
          return (0, r.jsx)(i.Provider, {
            value: { stopMusic: s, setStopMusic: n },
            children: t,
          });
        },
        o = () => {
          let e = (0, a.useContext)(i);
          if (!e) throw Error("useMusic must be used within a MusicProvider");
          return e;
        };
    },
    4084: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return o;
        },
      });
      var r = s(7437),
        a = s(6648),
        i = s(7138),
        n = s(8179);
      function o() {
        let e = {
          transition: { duration: 1 },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: !0 },
        };
        return (0, r.jsxs)("footer", {
          className: "px-6 pt-12 text-lightGray lg:px-8",
          children: [
            (0, r.jsxs)("div", {
              className:
                "mx-auto flex max-w-[1200px] flex-col justify-between gap-9 lg:flex-row",
              children: [
                (0, r.jsxs)(n.E.div, {
                  initial: { opacity: 0, x: -50 },
                  ...e,
                  className:
                    "flex w-full flex-col items-center lg:w-2/6 lg:items-start",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "mb-4 flex items-center",
                      children: [
                        (0, r.jsx)("div", {
                          className: "mr-2 h-8 w-8",
                          children: (0, r.jsx)(a.default, {
                            src: "/icons/logo.svg",
                            alt: "Logo Orion AI",
                            width: 42,
                            height: 42,
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className: "text-color-primary text-3xl font-bold",
                          children: "Orion AI",
                        }),
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "urbanist mb-4 max-w-3xl text-center text-base font-normal lg:text-left",
                      children:
                        "Join the future of AI development with Orion AI, enabling decentralized, scalable compute power. Secure, blockchain-based, and cost-efficient.",
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex space-x-4",
                      children: [
                        (0, r.jsx)(i.default, {
                          href: "https://x.com/OrionAI_ERC20",
                          className: "text-lightGray hover:text-white",
                          target: "_blank",
                          children: (0, r.jsx)(a.default, {
                            src: "/icons/x.svg",
                            alt: "X",
                            width: 24,
                            height: 24,
                          }),
                        }),
                        (0, r.jsx)(i.default, {
                          href: "https://t.me/OrionAI_ERC20",
                          className: "text-lightGray hover:text-white",
                          target: "_blank",
                          children: (0, r.jsx)(a.default, {
                            src: "/icons/telegram-3.svg",
                            alt: "Telegram",
                            width: 24,
                            height: 24,
                          }),
                        }),
                        (0, r.jsx)(i.default, {
                          href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
                          className: "text-lightGray hover:text-white",
                          target: "_blank",
                          children: (0, r.jsx)(a.default, {
                            src: "/logo_dt.png",
                            alt: "Dextools",
                            width: 24,
                            height: 24,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(n.E.div, {
                  initial: { opacity: 0, x: 50 },
                  ...e,
                  className:
                    "flex w-full flex-col justify-center gap-8 md:flex-row lg:w-1/2 lg:justify-end",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "text-center lg:w-[173px] lg:text-left",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "mb-4 text-lg text-xl font-semibold text-white",
                          children: "Buy Links",
                        }),
                        (0, r.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(i.default, {
                                href: "https://etherscan.io/token/0x00000000000000000000000000000000000000",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                children: "Contract Address",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(i.default, {
                                href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Dextools",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(i.default, {
                                href: "https://dexscreener.com/ethereum/0x0123456789",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Dexscreener",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "text-center lg:w-[173px] lg:text-left",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "urbanist mb-4 text-xl font-semibold text-white",
                          children: "Contacts",
                        }),
                        (0, r.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(i.default, {
                                href: "https://lewy0s-organization.gitbook.io/orion-ai",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Document",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(i.default, {
                                href: "https://t.me/OrionAI_ERC20",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Telegram",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(i.default, {
                                href: "https://x.com/OrionAI_ERC20",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Twitter",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(n.E.div, {
              initial: { opacity: 0, y: 50 },
              ...e,
              className: "mt-8 h-[0px] w-full bg-bleeding md:h-[1px]",
            }),
            (0, r.jsx)(n.E.div, {
              initial: { opacity: 0, y: 50 },
              ...e,
              className:
                "urbanist mx-auto max-w-[1200px] py-9 text-sm font-normal text-lightGray",
              children: (0, r.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-between md:flex-row",
                children: [
                  (0, r.jsx)("p", {
                    className: "text-center",
                    children:
                      "Copyright\xa9 2025. Orion AI. All Right Reserved.",
                  }),
                  (0, r.jsxs)("div", {
                    className: "mt-4 md:mt-0",
                    children: [
                      (0, r.jsx)(i.default, {
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                        className: "mr-4 hover:text-primary",
                        children: "Buy On Uniswap",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    1361: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return n;
        },
      });
      var r = s(7437);
      s(2265);
      var a = s(9512);
      function i(e) {
        let { children: t, ...s } = e;
        return (0, r.jsx)(a.f, { ...s, children: t });
      }
      function n(e) {
        let { children: t } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(i, {
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: !0,
            children: t,
          }),
        });
      }
    },
    5915: function (e, t, s) {
      "use strict";
      s.d(t, {
        Navbar: function () {
          return _;
        },
      });
      var r = s(7437),
        a = s(4697),
        i = s(2873),
        n = s(2265),
        o = s(8179),
        l = s(980),
        c = s(6604),
        d = s(6660),
        u = s(7138),
        h = s(6648),
        m = s(9354),
        x = s(3293),
        f = s(6463),
        p = s(3447),
        g = s(7643);
      let v = () => {
        let [e, t] = (0, n.useState)("#FF5733");
        return (
          (0, n.useEffect)(() => {
            let e = localStorage.getItem("avatarColor");
            if (e) t(e);
            else {
              let e = [
                  "#FF5733",
                  "#33FF57",
                  "#3357FF",
                  "#FF33A8",
                  "#FFBD33",
                  "#33FFBD",
                ],
                s = Math.floor(Math.random() * e.length),
                r = e[s];
              localStorage.setItem("avatarColor", r), t(r);
            }
          }, []),
          e
        );
      };
      var b = s(9597),
        y = s(8378),
        j = () => {
          let [e, t] = (0, n.useState)(!1),
            [s, r] = (0, n.useState)(null),
            { mutate: a } = (0, p.G)();
          return {
            loading: e,
            logout: async () => {
              try {
                t(!0), r(null);
                let e = await (0, y.CL)("/meshmain/auth/logout", {});
                sessionStorage.removeItem("access_token"),
                  sessionStorage.removeItem("refresh_token"),
                  console.log("res :>> ", e),
                  e && (await a());
              } catch (e) {
                r((0, b.C)(e));
              } finally {
                t(!1);
              }
            },
            error: s,
          };
        },
        w = s(5956);
      function N() {
        let { userProfile: e } = (0, p.G)(),
          t = v(),
          s = (0, n.useRef)(null),
          [a, i] = (0, n.useState)(!1),
          { logout: o } = j(),
          [l, c] = (0, n.useState)("");
        (0, n.useEffect)(() => {
          c(window.location.pathname);
        }, []),
          (0, n.useEffect)(() => {
            let e = (e) => {
              s.current && !s.current.contains(e.target) && i(!1);
            };
            return (
              a
                ? document.addEventListener("mousedown", e)
                : document.removeEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [a]);
        let d = async () => {
          try {
            await o(), i(!1), w.Am.success("Logout successful!");
          } catch (e) {
            w.Am.error("Logout failed:", e.message);
          }
        };
        return (0, r.jsx)(r.Fragment, {
          children: e
            ? (0, r.jsxs)("div", {
                className: "relative z-[9999999999]",
                children: [
                  (0, r.jsx)("button", {
                    onClick: () => {
                      i(!a);
                    },
                    children: (0, r.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, r.jsxs)("span", {
                          className: "mr-2 hidden text-xl lg:inline",
                          children: [
                            "Hello",
                            ", ",
                            null == e ? void 0 : e.name,
                            "!",
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "mx-auto flex h-[38px] w-[40px] items-center justify-center rounded-full text-[24px] font-semibold",
                          style: { background: t },
                          children: (0, g.Q)(null == e ? void 0 : e.name),
                        }),
                      ],
                    }),
                  }),
                  a &&
                    (0, r.jsxs)("div", {
                      ref: s,
                      className:
                        "absolute right-0 top-[64px] z-[9999999999] w-[182px] rounded-lg bg-white p-3 text-sm font-medium shadow-lg",
                      children: [
                        (0, r.jsx)(u.default, {
                          href: "https://orion-ai-app-cs.vercel.app/profile",
                          children: (0, r.jsxs)("button", {
                            className:
                              "mb-2 flex h-[42px] w-full items-center rounded-lg p-4 text-gray-700 hover:bg-gray-200",
                            children: [
                              (0, r.jsx)(h.default, {
                                src:
                                  (null == e ? void 0 : e.avatar_url) ||
                                  "/images/airdrop/icon-profile.svg",
                                alt: "Profile",
                                width: 20,
                                height: 20,
                              }),
                              (0, r.jsx)("span", {
                                className: "ml-2",
                                children: "Profile",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)("button", {
                          onClick: d,
                          className:
                            "flex h-[42px] w-full items-center rounded-lg p-4 text-red-500 hover:bg-red-100",
                          children: [
                            (0, r.jsx)(h.default, {
                              src: "/images/airdrop/sign-out-alt_red.svg",
                              alt: "Log Out",
                              width: 20,
                              height: 20,
                            }),
                            (0, r.jsx)("span", {
                              className: "ml-2",
                              children: "Logout",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : (0, r.jsxs)("div", {
                className: "flex",
                children: [
                  (0, r.jsx)(u.default, {
                    href:
                      "https://meshchain.ai" +
                      "/sso?next_uri=".concat(encodeURIComponent(l)),
                    children: (0, r.jsx)("button", {
                      type: "submit",
                      className:
                        "mr-2 w-[80px] rounded-[30px] bg-green-500 px-2 py-2 text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 md:mr-4 md:w-[100px] md:px-4",
                      children: "Log In",
                    }),
                  }),
                  (0, r.jsx)(u.default, {
                    href:
                      "https://meshchain.ai" +
                      "/sso?next_uri=".concat(encodeURIComponent(l)),
                    children: (0, r.jsx)("button", {
                      type: "button",
                      className:
                        "w-[100px] rounded-[30px] bg-white px-2 py-2 text-black shadow-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 md:px-4",
                      children: "Sign Up",
                    }),
                  }),
                ],
              }),
        });
      }
      let _ = () => {
        let [e, t] = n.useState(!1),
          s = (0, f.usePathname)();
        return (0, r.jsxs)(o.E.header, {
          className: "w-full px-6 lg:px-8",
          initial: { opacity: 0, y: -200 },
          transition: { duration: 1 },
          animate: { opacity: 1, y: 0 },
          children: [
            (0, r.jsxs)("nav", {
              className:
                "relative z-[999] mx-auto flex max-w-[1200px] items-center justify-between bg-[#001012] py-5",
              children: [
                (0, r.jsxs)(u.default, {
                  href: "/",
                  className: "flex items-center gap-[10px]",
                  children: [
                    (0, r.jsx)(h.default, {
                      src: "/icons/logo.svg",
                      alt: "Logo",
                      width: 42,
                      height: 42,
                    }),
                    [
                      "/airdrop/wheel",
                      "/airdrop/leaderboard",
                      "/presales",
                    ].includes(s)
                      ? (0, r.jsx)("h1", {
                          className:
                            "clash-display-semibold text-color-primary hidden text-[32px] sm:flex",
                          children: "Orion AI",
                        })
                      : (0, r.jsx)("h1", {
                          className:
                            "clash-display-semibold text-color-primary text-[32px]",
                          children: "Orion AI",
                        }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "hidden gap-9 lg:flex",
                  children: [
                    (0, r.jsx)(u.default, {
                      href: "/",
                      className:
                        "urbanist text-base font-semibold hover:text-primary",
                      children: "Home",
                    }),
                    (0, r.jsx)(x.rU, {
                      to: "features",
                      spy: !0,
                      smooth: !0,
                      offset: -50,
                      duration: 500,
                      className:
                        "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                      children: "Features",
                    }),
                    (0, r.jsx)(x.rU, {
                      to: "roadmap",
                      spy: !0,
                      smooth: !0,
                      offset: -50,
                      duration: 500,
                      className:
                        "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                      children: "Roadmap",
                    }),
                    (0, r.jsx)(u.default, {
                      href: "https://lewy0s-organization.gitbook.io/orion-ai",
                      className:
                        "urbanist text-base font-semibold hover:text-primary",
                      target: "_blank",
                      children: "Docs",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-row-reverse",
                  children: [
                    (0, r.jsx)("div", {
                      className: "ml-3 flex items-center lg:hidden",
                      onClick: () => t(!e),
                      children: e
                        ? (0, r.jsx)(a.Z, {
                            size: 32,
                            onClick: () => t(!1),
                            className: "cursor-pointer",
                          })
                        : (0, r.jsx)(i.Z, {
                            size: 32,
                            onClick: () => t(!0),
                            className: "cursor-pointer",
                          }),
                    }),
                    [
                      "/airdrop/wheel",
                      "/airdrop/leaderboard",
                      "/presales",
                    ].includes(s)
                      ? (0, r.jsx)(N, {})
                      : (0, r.jsx)(u.default, {
                          href: "https://orion-ai-app-cs.vercel.app",
                          className:
                            "poppins hidden rounded-2xl border border-[#00ffa333] bg-[#00FFA333] px-5 py-2 text-base font-bold text-[#00C076] transition duration-300 ease-in-out hover:border-secondary lg:flex",
                          target: "_blank",
                          children: "Get Started",
                        }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "z-[1]",
              children: (0, r.jsx)(l.X, {
                features: c.H,
                strict: !0,
                children: (0, r.jsx)("div", {
                  "aria-expanded": e,
                  className: "relative",
                  children: (0, r.jsxs)("div", {
                    className: "absolute top-0 z-[999] w-full bg-[#001214]",
                    children: [
                      (0, r.jsxs)(d.m.div, {
                        className: (0, m.cn)({
                          "flex w-full flex-col items-center justify-center gap-9 p-8 lg:hidden":
                            !0,
                          hidden: !e,
                        }),
                        initial: { height: 0, opacity: 1 },
                        animate: {
                          transition: { type: "tween" },
                          height: e ? "auto" : 0,
                        },
                        exit: { height: 0, opacity: 1 },
                        transition: { duration: 1, ease: [0.4, 0, 0.2, 0.1] },
                        children: [
                          (0, r.jsx)(u.default, {
                            href: "/",
                            className:
                              "urbanist text-base font-semibold hover:text-primary",
                            children: "Home",
                          }),
                          (0, r.jsx)(x.rU, {
                            to: "features",
                            spy: !0,
                            smooth: !0,
                            offset: -50,
                            duration: 500,
                            className:
                              "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                            children: "Features",
                          }),
                          (0, r.jsx)(x.rU, {
                            to: "roadmap",
                            spy: !0,
                            smooth: !0,
                            offset: -50,
                            duration: 500,
                            className:
                              "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                            children: "Roadmap",
                          }),
                          (0, r.jsx)(u.default, {
                            href: "https://lewy0s-organization.gitbook.io/orion-ai",
                            target: "_blank",
                            className:
                              "urbanist text-base font-semibold hover:text-primary",
                            children: "Docs",
                          }),
                          (0, r.jsx)(u.default, {
                            href: "https://orion-ai-app-cs.vercel.app",
                            className:
                              "poppins rounded-2xl border border-[#00ffa333] bg-[#00FFA333] px-8 py-3 text-base font-bold text-[#00C076] transition duration-300 ease-in-out hover:border-secondary",
                            target: "_blank",
                            children: "Get Started",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "h-[1px] w-full bg-bleeding",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    9597: function (e, t, s) {
      "use strict";
      s.d(t, {
        C: function () {
          return a;
        },
      });
      var r = s(8472);
      function a(e) {
        let { message: t } = (function (e) {
          let t = "An error occurred, please try again",
            s = 500,
            a = "UNKNOWN_ERROR";
          if (r.Z.isAxiosError(e)) {
            var i, n, o;
            (t =
              null === (i = e.response) || void 0 === i
                ? void 0
                : i.data.message),
              (a =
                null === (n = e.response) || void 0 === n
                  ? void 0
                  : n.data.code),
              (s =
                (null === (o = e.response) || void 0 === o
                  ? void 0
                  : o.status) || 500);
          } else e instanceof Error && (t = e.message);
          return { message: t, code: a, status: s };
        })(e);
        return Error(t);
      }
    },
    8378: function (e, t, s) {
      "use strict";
      s.d(t, {
        CL: function () {
          return u;
        },
        _i: function () {
          return d;
        },
      });
      var r = s(8472);
      let a = "https://api.meshchain.ai",
        i = !1,
        n = [],
        o = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          n.forEach((s) => {
            e ? s.reject(e) : s.resolve(t);
          }),
            (n = []);
        },
        l = r.Z.create({ baseURL: a });
      async function c() {
        let e = sessionStorage.getItem("refresh_token");
        if (!e) throw Error("No refresh token available");
        let { access_token: t, refresh_token: s } = (
          await r.Z.post("".concat(a, "/meshmain/auth/refresh-token"), {
            refresh_token: e,
          })
        ).data;
        return (
          sessionStorage.setItem("access_token", t),
          sessionStorage.setItem("refresh_token", s),
          t
        );
      }
      async function d(e) {
        return await l.get(e);
      }
      async function u(e, t, s) {
        return await l.post(e, t, s ? { headers: s } : {});
      }
      l.interceptors.request.use(
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
        l.interceptors.response.use(
          (e) => e,
          async (e) => {
            var t;
            let s = e.config,
              r =
                (null === (t = e.response.data) || void 0 === t
                  ? void 0
                  : t.code) || "";
            return 401 !== e.response.status || "40100002" !== r || s._retry
              ? Promise.reject(e)
              : ((s._retry = !0), i)
              ? new Promise(function (e, t) {
                  n.push({ resolve: e, reject: t });
                })
                  .then(
                    (e) => ((s.headers.Authorization = "Bearer " + e), l(s))
                  )
                  .catch((e) => Promise.reject(e))
              : ((i = !0),
                console.log("refreshing access token"),
                new Promise(function (e, t) {
                  c()
                    .then((t) => {
                      (s.headers.Authorization = "Bearer " + t),
                        o(null, t),
                        e(l(s));
                    })
                    .catch((e) => {
                      o(e, null), t(e);
                    })
                    .finally(() => {
                      i = !1;
                    });
                }));
          }
        );
    },
    7643: function (e, t, s) {
      "use strict";
      s.d(t, {
        Q: function () {
          return r;
        },
        U: function () {
          return a;
        },
      });
      let r = (e) => (e ? e.charAt(0).toUpperCase() : "A"),
        a = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          if (e.length <= t) return e;
          let s = e.slice(0, t);
          return "".concat(s, "...");
        };
    },
    9354: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return i;
        },
      });
      var r = s(4839),
        a = s(6164);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, a.m6)((0, r.W)(t));
      }
    },
    2074: function () {},
    3054: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        553, 141, 480, 310, 974, 684, 140, 956, 702, 293, 143, 905, 971, 23,
        744,
      ],
      function () {
        return e((e.s = 6694));
      }
    ),
      (_N_E = e.O());
  },
]);
