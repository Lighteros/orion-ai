(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [125],
  {
    261: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 1298));
    },
    6463: function (e, t, r) {
      "use strict";
      var n = r(1169);
      r.o(n, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    3447: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return i;
        },
      });
      var n = r(9597),
        s = r(8378),
        o = r(2265),
        a = r(1617);
      function i() {
        let [e, t] = (0, o.useState)(!0),
          { data: r, mutate: i } = (0, a.ZP)(
            "/meshmain/user/profile",
            async function (e) {
              try {
                return t(!0), (await (0, s._i)(e)).data;
              } catch (e) {
                throw (0, n.C)(e);
              } finally {
                t(!1);
              }
            }
          );
        return {
          userProfile: (null == r ? void 0 : r.id) ? r : void 0,
          loading: e,
          mutate: i,
        };
      }
    },
    9597: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return s;
        },
      });
      var n = r(8472);
      function s(e) {
        let { message: t } = (function (e) {
          let t = "An error occurred, please try again",
            r = 500,
            s = "UNKNOWN_ERROR";
          if (n.Z.isAxiosError(e)) {
            var o, a, i;
            (t =
              null === (o = e.response) || void 0 === o
                ? void 0
                : o.data.message),
              (s =
                null === (a = e.response) || void 0 === a
                  ? void 0
                  : a.data.code),
              (r =
                (null === (i = e.response) || void 0 === i
                  ? void 0
                  : i.status) || 500);
          } else e instanceof Error && (t = e.message);
          return { message: t, code: s, status: r };
        })(e);
        return Error(t);
      }
    },
    8378: function (e, t, r) {
      "use strict";
      r.d(t, {
        CL: function () {
          return l;
        },
        _i: function () {
          return h;
        },
      });
      var n = r(8472);
      let s = "https://api.meshchain.ai",
        o = !1,
        a = [],
        i = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          a.forEach((r) => {
            e ? r.reject(e) : r.resolve(t);
          }),
            (a = []);
        },
        u = n.Z.create({ baseURL: s });
      async function c() {
        let e = sessionStorage.getItem("refresh_token");
        if (!e) throw Error("No refresh token available");
        let { access_token: t, refresh_token: r } = (
          await n.Z.post("".concat(s, "/meshmain/auth/refresh-token"), {
            refresh_token: e,
          })
        ).data;
        return (
          sessionStorage.setItem("access_token", t),
          sessionStorage.setItem("refresh_token", r),
          t
        );
      }
      async function h(e) {
        return await u.get(e);
      }
      async function l(e, t, r) {
        return await u.post(e, t, r ? { headers: r } : {});
      }
      u.interceptors.request.use(
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
        u.interceptors.response.use(
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
              : ((r._retry = !0), o)
              ? new Promise(function (e, t) {
                  a.push({ resolve: e, reject: t });
                })
                  .then(
                    (e) => ((r.headers.Authorization = "Bearer " + e), u(r))
                  )
                  .catch((e) => Promise.reject(e))
              : ((o = !0),
                console.log("refreshing access token"),
                new Promise(function (e, t) {
                  c()
                    .then((t) => {
                      (r.headers.Authorization = "Bearer " + t),
                        i(null, t),
                        e(u(r));
                    })
                    .catch((e) => {
                      i(e, null), t(e);
                    })
                    .finally(() => {
                      o = !1;
                    });
                }));
          }
        );
    },
    1298: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return f;
        },
      });
      var n = r(7437),
        s = r(6463),
        o = r(2265),
        a = r(9597),
        i = r(8378),
        u = () => {
          let [e, t] = (0, o.useState)(!1);
          return {
            loading: e,
            exchange: async (e) => {
              try {
                return (
                  t(!0),
                  (await (0, i.CL)("/meshmain/auth/exchange", { auth_code: e }))
                    .data
                );
              } catch (e) {
                throw (0, a.C)(e);
              } finally {
                t(!1);
              }
            },
          };
        },
        c = r(5956),
        h = r(3447);
      let l = () => {
        let e = (0, s.useRouter)(),
          { mutate: t } = (0, h.G)(),
          { exchange: r, loading: a } = u(),
          i = (0, s.useSearchParams)(),
          l = i.get("next_uri"),
          f = i.get("code");
        return (
          (0, o.useEffect)(() => {
            if (l) {
              if (!f) {
                let t =
                  "https://app.meshchain.ai" +
                  "/login?redirect_uri=".concat(
                    encodeURIComponent(window.location.href),
                    "&grant_type=authorization_code"
                  );
                console.log("ssoUri=", t), e.push(t);
                return;
              }
              a ||
                r(f)
                  .then((r) => {
                    let { access_token: n, refresh_token: s } = r;
                    sessionStorage.setItem("access_token", n),
                      sessionStorage.setItem("refresh_token", s),
                      t().then(() => {
                        e.push(l);
                      });
                  })
                  .catch((t) => {
                    c.Am.error("Login failed, please try again"), e.push(l);
                  });
            }
          }, [l, f]),
          (0, n.jsx)("p", { className: "text-2xl", children: "Logging in..." })
        );
      };
      function f() {
        return (0, n.jsx)(o.Suspense, {
          fallback: (0, n.jsx)("div", { children: "Loading..." }),
          children: (0, n.jsx)(l, {}),
        });
      }
    },
  },
  function (e) {
    e.O(0, [684, 956, 971, 23, 744], function () {
      return e((e.s = 261));
    }),
      (_N_E = e.O());
  },
]);
