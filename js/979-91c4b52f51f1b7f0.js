"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [979],
  {
    6582: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = s(5893),
        l = s(7294),
        n = s(8266),
        i = s(9362),
        o = s(4179),
        a = (e) => {
          let { fill: t = "#575349" } = e;
          return (0, r.jsxs)("svg", {
            width: "0",
            height: "0",
            viewBox: "0 0 64 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          });
        },
        c = (e) => {
          let { fill: t = "#D7D1C6" } = e;
          return (0, r.jsx)("svg", {
            width: "29",
            height: "29",
            viewBox: "0 0 29 29",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              id: "Vector 45",
              d: "M24.441 27.1214C17.1545 32.2996 -0.196061 23.4427 0.435746 14.6037C0.971134 7.11362 8.3577 -2.06937 20.2601 0.744269C29.2571 2.87109 31.278 22.2626 24.441 27.1214Z",
              fill: t,
            }),
          });
        },
        d = s(9293),
        m = (e) => {
          let { title: t } = e;
          return (
            (0, l.useRef)(null),
            (0, l.useEffect)(() => {}, []),
            (0, r.jsxs)("div", {
              className: "group flex items-center body-mono-10 cursor-pointer",
              children: [
                (0, r.jsxs)("div", {
                  className: "relative mr-[0.7rem]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "svg-wrapper w-[2.8rem] h-[2.7rem] group-hover:scale-110 group-hover:rotate-[50deg] transition-transform duration-global ease-out",
                      children: (0, r.jsx)(c, { fill: "#F2EFE9" }),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "svg-wrapper absolute top-1/2 left-[52%] w-[0.95rem] h-[0.7rem] -translate-x-1/2 -translate-y-1/2",
                      children: (0, r.jsx)(d.Z, {}),
                    }),
                  ],
                }),
                (0, r.jsx)("div", { children: t }),
              ],
            })
          );
        },
        p = s(6038),
        C = s(6546),
        u = s(1831),
        h = s(6465),
        x = s.n(h),
        f = s(5591),
        b = s(187),
        g = s(60);
      let w = function () {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return fetch(...t).then((e) => e.json());
      };
      var v = () => {
          let e = (0, l.useRef)(!1),
            t = (0, l.useRef)(!1),
            { data: s } = (0, f.ZP)("js/get-settings", w);
          return (
            (0, l.useEffect)(() => {
              let t = document.createElement("script");
              return (
                (t.src =
                  "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"),
                e.current.appendChild(t),
                (window.fnames = []),
                (window.ftypes = []),
                (fnames[0] = "EMAIL"),
                (ftypes[0] = "email"),
                (fnames[1] = "FNAME"),
                (ftypes[1] = "text"),
                (fnames[2] = "LNAME"),
                (ftypes[2] = "text"),
                (fnames[3] = "ADDRESS"),
                (ftypes[3] = "address"),
                (fnames[4] = "PHONE"),
                (ftypes[4] = "phone"),
                (fnames[5] = "BIRTHDAY"),
                (ftypes[5] = "birthday"),
                () => {
                  t.remove();
                }
              );
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("link", {
                  href: "//cdn-images.mailchimp.com/embedcode/classic-071822.css",
                  rel: "stylesheet",
                  type: "text/css",
                }),
                (0, r.jsx)(g.Z, {
                  size: "medium",
                  name: "newsletter",
                  keepContent: !0,
                  children: (0, r.jsxs)("div", {
                    ref: e,
                    className:
                      "absolute w-full flex items-center justify-center flex-col h-[calc(100vh_-_2rem)] text-dark_grey",
                    children: [
                      (0, r.jsx)("div", {
                        className: "body-28 text-center text-dark_grey",
                        children: (0, r.jsx)(b.v, {
                          field:
                            null == s
                              ? void 0
                              : s.settings.data.newsletter_popup_title,
                        }),
                      }),
                      (0, r.jsx)("div", {
                        id: "mc_embed_signup",
                        className: "w-full px-[2.5rem] mt-50",
                        children: (0, r.jsx)("form", {
                          onReset: () => {
                            document.getElementById(
                              "mc-embedded-subscribe-form"
                            ).style.display = "none";
                            var e = document.getElementById(
                              "mce-success-response"
                            );
                            document
                              .getElementById("mc_embed_signup")
                              .append(e),
                              void 0 !== window.gtag &&
                                window.gtag("event", "Newsletter Signup"),
                              void 0 !== window.fbq &&
                                fbq("trackCustom", "Newsletter Signup"),
                              void 0 !== window.rdt &&
                                rdt("track", "Custom", {
                                  customEventName: "Newsletter Signup",
                                });
                          },
                          ref: t,
                          action:
                            "https://pebblemobility.us8.list-manage.com/subscribe/post?u=7877ff32e8bf0f9475f6058e8&id=9226248b5d&f_id=004e71e0f0",
                          method: "post",
                          id: "mc-embedded-subscribe-form",
                          name: "mc-embedded-subscribe-form",
                          className: "validate !m-0",
                          target: "_blank",
                          noValidate: !0,
                          children: (0, r.jsxs)("div", {
                            id: "mc_embed_signup_scroll",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-5a2e245bc6cb7224 mc-field-group !w-full !pb-[2rem]",
                                children: [
                                  (0, r.jsx)("input", {
                                    type: "email",
                                    placeholder: "Your email",
                                    name: "EMAIL",
                                    id: "mce-EMAIL",
                                    required: !0,
                                    "aria-required": !0,
                                    className:
                                      "jsx-5a2e245bc6cb7224 style-mail required email bg-black/0 !border-r-0 !border-t-0 !border-l-0 !border-black/10 !border-b-px !rounded-[0] outline-none text-orange body-mono-10 tracking-0.03 text-center",
                                  }),
                                  (0, r.jsx)(x(), {
                                    id: "5a2e245bc6cb7224",
                                    children:
                                      ".style-mail.jsx-5a2e245bc6cb7224{&.mce_inline_error.jsx-5a2e245bc6cb7224{color:red;text-align:center;&.jsx-5a2e245bc6cb7224::-webkit-input-placeholder{color:red}&.jsx-5a2e245bc6cb7224:-moz-placeholder{color:red}&.jsx-5a2e245bc6cb7224::-moz-placeholder{color:red}&.jsx-5a2e245bc6cb7224:-ms-input-placeholder{color:red}&.jsx-5a2e245bc6cb7224::-ms-input-placeholder{color:red}&.jsx-5a2e245bc6cb7224::placeholder{color:red}}&.jsx-5a2e245bc6cb7224::-webkit-input-placeholder{color:#fb7339}&.jsx-5a2e245bc6cb7224:-moz-placeholder{color:#fb7339}&.jsx-5a2e245bc6cb7224::-moz-placeholder{color:#fb7339}&.jsx-5a2e245bc6cb7224:-ms-input-placeholder{color:#fb7339}&.jsx-5a2e245bc6cb7224::-ms-input-placeholder{color:#fb7339}&.jsx-5a2e245bc6cb7224::placeholder{color:#fb7339}}",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                id: "mce-responses",
                                className: "clear",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "response",
                                    id: "mce-error-response",
                                    style: {
                                      display: "none",
                                      textAlign: "center",
                                      width: "100%",
                                    },
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "response",
                                    id: "mce-success-response",
                                    style: {
                                      display: "none",
                                      textAlign: "center",
                                      width: "100%",
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                style: {
                                  position: "absolute",
                                  left: "-5000px",
                                },
                                "aria-hidden": "true",
                                children: (0, r.jsx)("input", {
                                  type: "text",
                                  name: "b_7877ff32e8bf0f9475f6058e8_9226248b5d",
                                  tabIndex: "-1",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "optionalParent",
                                children: (0, r.jsx)("div", {
                                  className: "clear",
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "relative w-[5rem] h-[5rem] mx-auto group",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "svg-wrapper w-full h-full pointer-events-none translate-y-[0.1rem]",
                                        children: (0, r.jsx)("svg", {
                                          width: "101",
                                          height: "101",
                                          viewBox: "0 0 101 101",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className:
                                            "rotate-[150deg] group-hover:scale-110 group-hover:rotate-[200deg] transition-transform duration-global ease-out",
                                          children: (0, r.jsx)("path", {
                                            d: "M91.7202 91.1962C68.7749 112.869 5.56486 95.6803 0.578786 63.0336C-2.90389 40.2305 14.1217 0.964943 58.1622 0.855615C91.9266 0.771796 112.713 71.3678 91.7202 91.1962Z",
                                            fill: "#FB7339",
                                          }),
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "svg-wrapper absolute left-1/2 top-1/2 w-[40%] -translate-y-1/2 -translate-x-1/2 z-1 pointer-events-none",
                                        children: (0, r.jsx)("svg", {
                                          width: "13",
                                          height: "9",
                                          viewBox: "0 0 13 9",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, r.jsx)("path", {
                                            d: "M0.998749 4.5431H11.9987M11.9987 4.5431L8.49875 1.04297M11.9987 4.5431L8.49875 8.04297",
                                            stroke: "#EFEBE5",
                                          }),
                                        }),
                                      }),
                                      (0, r.jsx)("input", {
                                        type: "submit",
                                        name: "subscribe",
                                        id: "mc-embedded-subscribe",
                                        className:
                                          "absolute left-0 top-0 w-full h-full !m-0 !text-black/0 !border-none cursor-pointer",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        j = (e) => {
          let { data: t } = e,
            s = (0, l.useRef)(null),
            c = (0, l.useRef)(null),
            d = (0, l.useRef)(null),
            h = (0, i.a)("(max-width: 1024px)", !0),
            x = (0, n.o)((e) => e.setPagePopupPathnames);
          (0, l.useEffect)(() => {
            let e = [];
            for (let s = 0; s < t.footer_bottom_links.length; s++)
              e.push(t.footer_bottom_links[s].link.url);
            return (
              x(e),
              window.addEventListener("refresh-scroll-trigger", f),
              () => {
                window.removeEventListener("refresh-scroll-trigger", f);
              }
            );
          }, []),
            (0, l.useEffect)(
              () => (
                h ? p.p8.set(c.current, { yPercent: 0 }) : g(),
                () => {
                  d.current && d.current.kill(),
                    d.current && (d.current = null);
                }
              ),
              [h]
            );
          let f = () => {
              d.current && d.current.refresh();
            },
            b = (e, t) => {
              window.dispatchEvent(
                new CustomEvent("open-popup", {
                  detail: { name: "global", type: e, uid: t },
                })
              );
            },
            g = () => {
              d.current = C.ScrollTrigger.create({
                trigger: s.current,
                start: "top bottom",
                end: "+=".concat(s.current.offsetHeight),
                animation: p.p8.fromTo(
                  c.current,
                  { yPercent: -90 },
                  { yPercent: 0, ease: "none" }
                ),
                scrub: !0,
              });
            };
          return (0, r.jsxs)("footer", {
            ref: s,
            className:
              "px-container overflow-hidden py-32 md:pt-48 md:pb-[4.4rem] bg-dark_beige text-white popup:hidden",
            children: [
              (0, r.jsxs)("div", {
                ref: c,
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "grid grid-cols-6 lg:grid-cols-12 mb-[2.4rem] md:mb-75 lg:mb-150 div-footer-delete",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "svg-wrapper col-span-3 md:col-span-2 lg:col-span-3 flex justify-start items-start mb-20 md:mb-0 body-36 font-headings md:opacity-60",
                        children: [
                          t.footer_title &&
                            (0, r.jsx)("div", {
                              className: "hidden md:block",
                              children: t.footer_title,
                            }),
                          (0, r.jsx)(o.Z, {
                            href: "/",
                            className: "svg-wrapper block md:hidden w-[8.9rem]",
                            children: (0, r.jsx)(a, { fill: "#F2EFE9" }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "col-span-3 md:col-span-2 lg:col-start-7 lg:col-end-9 flex flex-col items-start mb-[12rem] md:mb-0",
                        children: (0, r.jsx)("div", {
                          className: "flex flex-col items-start",
                          children: t.links.map((e, t) =>
                            (0, r.jsx)(
                              "div",
                              {
                                className: "body-36 font-headings",
                                children: (0, r.jsx)(o.Z, {
                                  ...("preorder" === e.link.type
                                    ? { href: "/preorder" }
                                    : { field: e.link }),
                                  className:
                                    "transition-opacity duration-global ease-out hover:opacity-50",
                                  children: e.title,
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "col-span-4 md:col-span-2 lg:col-start-10 lg:col-end-13 flex flex-col items-start",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "body-18 md:body-22 max-w-[20rem] md:max-w-[25.3rem] mb-8 md:mb-15",
                            children: t.newsletter_title,
                          }),
                          (0, r.jsx)("div", {
                            onClick: () => {
                              window.dispatchEvent(
                                new CustomEvent("open-popup", {
                                  detail: { name: "newsletter" },
                                })
                              );
                            },
                            children: (0, r.jsx)(m, {
                              title: t.newsletter_button_text,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "relative w-full",
                    children: [
                      (0, r.jsx)("div", {
                        className: "w-full h-px bg-white opacity-20",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "svg-wrapper absolute hidden md:block top-1/2 left-1/2 w-[0.7rem] -translate-x-1/2 -translate-y-[0.4rem] md:-translate-y-[0.5rem] lg:-translate-y-[0.4rem]",
                        children: (0, r.jsx)(u.Z, { color: "#F2EFE9" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(v, {}),
            ],
          });
        };
    },
    6132: function (e, t, s) {
      var r = s(5893),
        l = s(9008),
        n = s.n(l);
      t.Z = (e) => {
        let { data: t } = e,
          s = t.meta_title
            ? t.meta_title
            : t.title
            ? "Oasis | ".concat(t.title)
            : "Oasis Mobility";
        return (0, r.jsxs)(n(), {
          children: [
            (0, r.jsx)("title", { children: s }),
            (0, r.jsx)("meta", { property: "og:title", content: s }, "title"),
            (0, r.jsx)("meta", { property: "og:site_name", content: "Oasis" }),
            t.meta_description &&
              (0, r.jsx)("meta", {
                name: "description",
                content: t.meta_description,
              }),
            t.meta_image &&
              t.meta_image.url &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("meta", {
                    property: "og:image",
                    content: t.meta_image.url,
                  }),
                  (0, r.jsx)("meta", {
                    property: "og:image:type",
                    content: "image/jpg",
                  }),
                  (0, r.jsx)("meta", {
                    property: "og:image:width",
                    content: t.meta_image.dimensions.width,
                  }),
                  (0, r.jsx)("meta", {
                    property: "og:image:height",
                    content: t.meta_image.dimensions.height,
                  }),
                ],
              }),
            (0, r.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, r.jsx)("meta", { name: "theme-color", content: "#d7d1c6" }),
            (0, r.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, maximum-scale=1",
            }),
          ],
        });
      };
    },
    60: function (e, t, s) {
      var r = s(5893),
        l = s(5600),
        n = s(7294);
      t.Z = (e) => {
        let {
            size: t = "small",
            name: s,
            keepContent: i = !1,
            children: o,
          } = e,
          [a, c] = (0, n.useState)(!1),
          d = (0, n.useRef)(!1),
          m = (0, n.useRef)(!1),
          p = (e) => {
            e.detail.name === s && (c(!0), (m.current = !0));
          };
        (0, n.useEffect)(() => {
          a && window.history.pushState({}, null, null);
        }, [a]);
        let C = () => {
            m.current &&
              ((d.current = !0), window.history.back(), (d.current = !1));
          },
          u = () => {
            m.current &&
              !d.current &&
              (c(!1),
              (m.current = !1),
              window.dispatchEvent(new CustomEvent("back-close-popup")));
          };
        return (
          (0, n.useEffect)(
            () => (
              window.addEventListener("open-popup", p),
              window.addEventListener("popup-closed", C),
              window.addEventListener("popstate", u),
              () => {
                window.removeEventListener("open-popup", p),
                  window.removeEventListener("popup-closed", C),
                  window.removeEventListener("popstate", u);
              }
            ),
            []
          ),
          (0, r.jsx)(l.Z, { size: t, name: s, keepContent: i, children: o })
        );
      };
    },
    9293: function (e, t, s) {
      var r = s(5893);
      t.Z = (e) => {
        let { stroke: t = "#575349" } = e;
        return (0, r.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: t,
          }),
        });
      };
    },
  },
]);
