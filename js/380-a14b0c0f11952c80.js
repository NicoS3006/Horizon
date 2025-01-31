"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [380],
  {
    5905: function (t, e, d) {
      d.d(e, {
        a: function () {
          return n;
        },
      });
      class n {
        constructor(t = null, e = {}) {
          if (
            ((this.apiKey = t),
            (this.options = e),
            "undefined" == typeof window)
          )
            throw Error("google-maps is supported only in browser environment");
        }
        load() {
          return void 0 !== this.api
            ? Promise.resolve(this.api)
            : void 0 !== this.loader
            ? this.loader
            : ((window[n.CALLBACK_NAME] = () => {
                if (((this.api = window.google), void 0 === this.resolve))
                  throw Error("Should not happen");
                this.resolve(this.api);
              }),
              (window.gm_authFailure = () => {
                if (void 0 === this.reject) throw Error("Should not happen");
                this.reject(Error("google-maps: authentication error"));
              }),
              (this.loader = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
                let d = document.createElement("script");
                (d.src = this.createUrl()),
                  (d.async = !0),
                  (d.onerror = (t) => e(t)),
                  document.head.appendChild(d);
              })));
        }
        createUrl() {
          let t = [`callback=${n.CALLBACK_NAME}`];
          for (let e in (this.apiKey && t.push(`key=${this.apiKey}`),
          this.options))
            if (this.options.hasOwnProperty(e)) {
              let d = this.options[e];
              "version" === e && (e = "v"),
                "libraries" === e && (d = d.join(",")),
                t.push(`${e}=${d}`);
            }
          return `https://maps.googleapis.com/maps/api/js?${t.join("&")}`;
        }
      }
      n.CALLBACK_NAME = "_dk_google_maps_loader_cb";
    },
    5946: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return y;
        },
      });
      var n = d(7691),
        r = d(6829),
        a = d(1316),
        i = d(1089),
        o = d(5738),
        $ = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function l(t, e) {
        var d = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            d.push.apply(d, n);
        }
        return d;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var d = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(d), !0).forEach(function (e) {
                var n;
                (n = d[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(d))
            : l(Object(d)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(d, e)
                );
              });
        }
        return t;
      }
      var c = {
        formatExtension: function (t, e, d) {
          return "".concat(t).concat(d.ext()).concat(e);
        },
      };
      function f(t, e, d, n, r) {
        var i = (function (t, e) {
          for (
            var d,
              n = (function (t, e) {
                var d =
                  ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
                if (d) return (d = d.call(t)).next.bind(d);
                if (
                  Array.isArray(t) ||
                  (d = (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return u(t, e);
                      var d = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === d &&
                          t.constructor &&
                          (d = t.constructor.name),
                        "Map" === d || "Set" === d)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === d ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                      )
                        return u(t, e);
                    }
                  })(t))
                ) {
                  d && (t = d);
                  var n = 0;
                  return function () {
                    return n >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[n++] };
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(t);
            !(d = n()).done;

          ) {
            var r = d.value;
            if (r.leadingDigitsPatterns().length > 0) {
              var i =
                r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
              if (0 !== e.search(i)) continue;
            }
            if ((0, a.Z)(e, r.pattern())) return r;
          }
        })(n.formats(), t);
        return i
          ? (0, o.Z)(t, i, {
              useInternationalFormat: "INTERNATIONAL" === d,
              withNationalPrefix:
                !i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() ||
                !r ||
                !1 !== r.nationalPrefix,
              carrierCode: e,
              metadata: n,
            })
          : t;
      }
      function h(t, e) {
        var d = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            d.push.apply(d, n);
        }
        return d;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var d = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(d), !0).forEach(function (e) {
                var n;
                (n = d[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(d))
            : h(Object(d)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(d, e)
                );
              });
        }
        return t;
      }
      function m(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var y = (function () {
        var t, e;
        function d(t, e, r) {
          if (
            (!(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, d),
            !t)
          )
            throw TypeError("`country` or `countryCallingCode` not passed");
          if (!e) throw TypeError("`nationalNumber` not passed");
          if (!r) throw TypeError("`metadata` not passed");
          var a,
            i,
            o,
            $,
            u,
            l =
              ((a = t),
              (i = r),
              (u = new n.ZP(i)),
              /^[A-Z]{2}$/.test(a)
                ? ((o = a),
                  u.selectNumberingPlan(o),
                  ($ = u.countryCallingCode()))
                : ($ = a),
              { country: o, countryCallingCode: $ }),
            s = l.country,
            c = l.countryCallingCode;
          (this.country = s),
            (this.countryCallingCode = c),
            (this.nationalNumber = e),
            (this.number = "+" + this.countryCallingCode + this.nationalNumber),
            (this.getMetadata = function () {
              return r;
            });
        }
        return (
          (t = [
            {
              key: "setExt",
              value: function (t) {
                this.ext = t;
              },
            },
            {
              key: "getPossibleCountries",
              value: function () {
                var t, e, d, r;
                return this.country
                  ? [this.country]
                  : ((t = this.countryCallingCode),
                    (e = this.nationalNumber),
                    (d = this.getMetadata()),
                    (r = new n.ZP(d).getCountryCodesForCallingCode(t))
                      ? r.filter(function (t) {
                          var r;
                          return (
                            (r = new n.ZP(d)).selectNumberingPlan(t),
                            r.numberingPlan
                              .possibleLengths()
                              .indexOf(e.length) >= 0
                          );
                        })
                      : []);
              },
            },
            {
              key: "isPossible",
              value: function () {
                return (0, r.Z)(this, { v2: !0 }, this.getMetadata());
              },
            },
            {
              key: "isValid",
              value: function () {
                return (function (t, e, d) {
                  if (
                    ((e = e || {}),
                    (d = new n.ZP(d)).selectNumberingPlan(
                      t.country,
                      t.countryCallingCode
                    ),
                    d.hasTypes())
                  )
                    return void 0 !== (0, i.Z)(t, e, d.metadata);
                  var r = e.v2 ? t.nationalNumber : t.phone;
                  return (0, a.Z)(r, d.nationalNumberPattern());
                })(this, { v2: !0 }, this.getMetadata());
              },
            },
            {
              key: "isNonGeographic",
              value: function () {
                return new n.ZP(this.getMetadata()).isNonGeographicCallingCode(
                  this.countryCallingCode
                );
              },
            },
            {
              key: "isEqual",
              value: function (t) {
                return this.number === t.number && this.ext === t.ext;
              },
            },
            {
              key: "getType",
              value: function () {
                return (0, i.Z)(this, { v2: !0 }, this.getMetadata());
              },
            },
            {
              key: "format",
              value: function (t, e) {
                return (function (t, e, d, r) {
                  if (
                    ((d = d ? s(s({}, c), d) : c),
                    (r = new n.ZP(r)),
                    t.country && "001" !== t.country)
                  ) {
                    if (!r.hasCountry(t.country))
                      throw Error("Unknown country: ".concat(t.country));
                    r.country(t.country);
                  } else {
                    if (!t.countryCallingCode) return t.phone || "";
                    r.selectNumberingPlan(t.countryCallingCode);
                  }
                  var a,
                    i,
                    o,
                    u,
                    l,
                    h,
                    g,
                    m,
                    y,
                    p,
                    v,
                    b,
                    C,
                    N = r.countryCallingCode(),
                    P = d.v2 ? t.nationalNumber : t.phone;
                  switch (e) {
                    case "NATIONAL":
                      if (!P) return "";
                      return (
                        (a = C = f(P, t.carrierCode, "NATIONAL", r, d)),
                        (i = t.ext),
                        (o = r),
                        (u = d.formatExtension),
                        i ? u(a, i, o) : a
                      );
                    case "INTERNATIONAL":
                      if (!P) return "+".concat(N);
                      return (
                        (C = f(P, null, "INTERNATIONAL", r, d)),
                        (l = C = "+".concat(N, " ").concat(C)),
                        (h = t.ext),
                        (g = r),
                        (m = d.formatExtension),
                        h ? m(l, h, g) : l
                      );
                    case "E.164":
                      return "+".concat(N).concat(P);
                    case "RFC3966":
                      return (function (t) {
                        var e = t.number,
                          d = t.ext;
                        if (!e) return "";
                        if ("+" !== e[0])
                          throw Error(
                            '"formatRFC3966()" expects "number" to be in E.164 format.'
                          );
                        return "tel:".concat(e).concat(d ? ";ext=" + d : "");
                      })({ number: "+".concat(N).concat(P), ext: t.ext });
                    case "IDD":
                      if (!d.fromCountry) return;
                      return (
                        (y = (function (t, e, d, r, a) {
                          if ((0, n.Gg)(r, a.metadata) === d) {
                            var i,
                              o,
                              u = f(t, e, "NATIONAL", a);
                            return "1" === d ? d + " " + u : u;
                          }
                          var l =
                            ((i = a.metadata),
                            ((o = new n.ZP(i)).selectNumberingPlan(r, void 0),
                            o.defaultIDDPrefix())
                              ? o.defaultIDDPrefix()
                              : $.test(o.IDDPrefix())
                              ? o.IDDPrefix()
                              : void 0);
                          if (l)
                            return ""
                              .concat(l, " ")
                              .concat(d, " ")
                              .concat(f(t, null, "INTERNATIONAL", a));
                        })(P, t.carrierCode, N, d.fromCountry, r)),
                        (p = t.ext),
                        (v = r),
                        (b = d.formatExtension),
                        p ? b(y, p, v) : y
                      );
                    default:
                      throw Error(
                        'Unknown "format" argument passed to "formatNumber()": "'.concat(
                          e,
                          '"'
                        )
                      );
                  }
                })(
                  this,
                  t,
                  e ? g(g({}, e), {}, { v2: !0 }) : { v2: !0 },
                  this.getMetadata()
                );
              },
            },
            {
              key: "formatNational",
              value: function (t) {
                return this.format("NATIONAL", t);
              },
            },
            {
              key: "formatInternational",
              value: function (t) {
                return this.format("INTERNATIONAL", t);
              },
            },
            {
              key: "getURI",
              value: function (t) {
                return this.format("RFC3966", t);
              },
            },
          ]),
          m(d.prototype, t),
          e && m(d, e),
          Object.defineProperty(d, "prototype", { writable: !1 }),
          d
        );
      })();
    },
    5619: function (t, e, d) {
      d.d(e, {
        ex: function () {
          return n;
        },
        sJ: function () {
          return r;
        },
        uv: function () {
          return o;
        },
        xc: function () {
          return i;
        },
        xg: function () {
          return a;
        },
        xy: function () {
          return $;
        },
      });
      var n = 2,
        r = 17,
        a = 3,
        i = "0-9０-９٠-٩۰-۹",
        o = ""
          .concat("-‐-―−ー－")
          .concat("／/")
          .concat("．.")
          .concat(" \xa0\xad​⁠　")
          .concat("()（）［］\\[\\]")
          .concat("~⁓∼～"),
        $ = "+＋";
    },
    2354: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = d(5619);
      function r(t) {
        return t.replace(RegExp("[".concat(n.uv, "]+"), "g"), " ").trim();
      }
    },
    280: function (t, e, d) {
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function r(t, e) {
        return (function t(e, d, r) {
          var a = r.type(d),
            i = (a && a.possibleLengths()) || r.possibleLengths();
          if (!i) return "IS_POSSIBLE";
          if ("FIXED_LINE_OR_MOBILE" === d) {
            if (!r.type("FIXED_LINE")) return t(e, "MOBILE", r);
            var o = r.type("MOBILE");
            o &&
              (i = (function (t, e) {
                for (
                  var d,
                    r = t.slice(),
                    a = (function (t, e) {
                      var d =
                        ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                      if (d) return (d = d.call(t)).next.bind(d);
                      if (
                        Array.isArray(t) ||
                        (d = (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return n(t, e);
                            var d = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            if (
                              ("Object" === d &&
                                t.constructor &&
                                (d = t.constructor.name),
                              "Map" === d || "Set" === d)
                            )
                              return Array.from(t);
                            if (
                              "Arguments" === d ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                            )
                              return n(t, e);
                          }
                        })(t))
                      ) {
                        d && (t = d);
                        var r = 0;
                        return function () {
                          return r >= t.length
                            ? { done: !0 }
                            : { done: !1, value: t[r++] };
                        };
                      }
                      throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(e);
                  !(d = a()).done;

                ) {
                  var i = d.value;
                  0 > t.indexOf(i) && r.push(i);
                }
                return r.sort(function (t, e) {
                  return t - e;
                });
              })(i, o.possibleLengths()));
          } else if (d && !a) return "INVALID_LENGTH";
          var $ = e.length,
            u = i[0];
          return u === $
            ? "IS_POSSIBLE"
            : u > $
            ? "TOO_SHORT"
            : i[i.length - 1] < $
            ? "TOO_LONG"
            : i.indexOf($, 1) >= 0
            ? "IS_POSSIBLE"
            : "INVALID_LENGTH";
        })(t, void 0, e);
      }
      d.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    3661: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = d(3633),
        r = d(9471),
        a = d(7691),
        i = d(5619);
      function o(t, e, d, o) {
        if (!t) return {};
        if ("+" !== t[0]) {
          var $,
            u = (0, n.Z)(t, e, d, o);
          if (u && u !== t) ($ = !0), (t = "+" + u);
          else {
            if (e || d) {
              var l = (0, r.Z)(t, e, d, o),
                s = l.countryCallingCode,
                c = l.number;
              if (s)
                return {
                  countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                  countryCallingCode: s,
                  number: c,
                };
            }
            return { number: t };
          }
        }
        if ("0" === t[1]) return {};
        o = new a.ZP(o);
        for (var f = 2; f - 1 <= i.xg && f <= t.length; ) {
          var h = t.slice(1, f);
          if (o.hasCallingCode(h))
            return (
              o.selectNumberingPlan(h),
              {
                countryCallingCodeSource: $
                  ? "FROM_NUMBER_WITH_IDD"
                  : "FROM_NUMBER_WITH_PLUS_SIGN",
                countryCallingCode: h,
                number: t.slice(f),
              }
            );
          f++;
        }
        return {};
      }
    },
    9471: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = d(7691),
        r = d(1316),
        a = d(7428),
        i = d(280);
      function o(t, e, d, o) {
        var $ = e ? (0, n.Gg)(e, o) : d;
        if (0 === t.indexOf($)) {
          (o = new n.ZP(o)).selectNumberingPlan(e, d);
          var u = t.slice($.length),
            l = (0, a.Z)(u, o).nationalNumber,
            s = (0, a.Z)(t, o).nationalNumber;
          if (
            (!(0, r.Z)(s, o.nationalNumberPattern()) &&
              (0, r.Z)(l, o.nationalNumberPattern())) ||
            "TOO_LONG" === (0, i.Z)(s, o)
          )
            return { countryCallingCode: $, number: u };
        }
        return { number: t };
      }
    },
    7428: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = d(5227),
        r = d(1316),
        a = d(280);
      function i(t, e) {
        var d = (0, n.Z)(t, e),
          i = d.carrierCode,
          o = d.nationalNumber;
        return o !== t &&
          (!(
            !(0, r.Z)(t, e.nationalNumberPattern()) ||
            (0, r.Z)(o, e.nationalNumberPattern())
          ) ||
            (e.possibleLengths() &&
              !(function (t, e) {
                switch ((0, a.Z)(t, e)) {
                  case "TOO_SHORT":
                  case "INVALID_LENGTH":
                    return !1;
                  default:
                    return !0;
                }
              })(o, e)))
          ? { nationalNumber: t }
          : { nationalNumber: o, carrierCode: i };
      }
    },
    5227: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return n;
        },
      });
      function n(t, e) {
        if (t && e.numberingPlan.nationalPrefixForParsing()) {
          var d = RegExp(
              "^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"
            ),
            n = d.exec(t);
          if (n) {
            var r,
              a,
              i,
              o = n.length - 1,
              $ = o > 0 && n[o];
            if (e.nationalPrefixTransformRule() && $)
              (r = t.replace(d, e.nationalPrefixTransformRule())),
                o > 1 && (a = n[1]);
            else {
              var u = n[0];
              (r = t.slice(u.length)), $ && (a = n[1]);
            }
            if ($) {
              var l = t.indexOf(n[1]);
              t.slice(0, l) === e.numberingPlan.nationalPrefix() &&
                (i = e.numberingPlan.nationalPrefix());
            } else i = n[0];
            return { nationalNumber: r, nationalPrefix: i, carrierCode: a };
          }
        }
        return { nationalNumber: t };
      }
    },
    5738: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return a;
        },
        i: function () {
          return r;
        },
      });
      var n = d(2354),
        r = /(\$\d)/;
      function a(t, e, d) {
        var a = d.useInternationalFormat,
          i = d.withNationalPrefix;
        d.carrierCode, d.metadata;
        var o = t.replace(
          new RegExp(e.pattern()),
          a
            ? e.internationalFormat()
            : i && e.nationalPrefixFormattingRule()
            ? e.format().replace(r, e.nationalPrefixFormattingRule())
            : e.format()
        );
        return a ? (0, n.Z)(o) : o;
      }
    },
    2691: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = d(9287);
      function r(t, e) {
        var d = e.nationalNumber,
          r = e.defaultCountry,
          a = e.metadata,
          i = a.getCountryCodesForCallingCode(t);
        return i
          ? 1 === i.length
            ? i[0]
            : (0, n.Z)(d, {
                countries: i,
                defaultCountry: r,
                metadata: a.metadata,
              })
          : void 0;
      }
    },
    9287: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = d(7691),
        r = d(1089);
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function i(t, e) {
        var d = e.countries,
          i = e.defaultCountry,
          o = e.metadata;
        o = new n.ZP(o);
        for (
          var $,
            u = [],
            l = (function (t, e) {
              var d =
                ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
              if (d) return (d = d.call(t)).next.bind(d);
              if (
                Array.isArray(t) ||
                (d = (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return a(t, e);
                    var d = Object.prototype.toString.call(t).slice(8, -1);
                    if (
                      ("Object" === d &&
                        t.constructor &&
                        (d = t.constructor.name),
                      "Map" === d || "Set" === d)
                    )
                      return Array.from(t);
                    if (
                      "Arguments" === d ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                    )
                      return a(t, e);
                  }
                })(t))
              ) {
                d && (t = d);
                var n = 0;
                return function () {
                  return n >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[n++] };
                };
              }
              throw TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(d);
          !($ = l()).done;

        ) {
          var s = $.value;
          if ((o.country(s), o.leadingDigits())) {
            if (t && 0 === t.search(o.leadingDigits())) return s;
          } else if ((0, r.Z)({ phone: t, country: s }, void 0, o.metadata)) {
            if (!i || s === i) return s;
            u.push(s);
          }
        }
        if (u.length > 0) return u[0];
      }
    },
    1089: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = d(7691),
        r = d(1316);
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      var i = [
        "MOBILE",
        "PREMIUM_RATE",
        "TOLL_FREE",
        "SHARED_COST",
        "VOIP",
        "PERSONAL_NUMBER",
        "PAGER",
        "UAN",
        "VOICEMAIL",
      ];
      function o(t, e, d) {
        if (((e = e || {}), t.country || t.countryCallingCode)) {
          (d = new n.ZP(d)).selectNumberingPlan(
            t.country,
            t.countryCallingCode
          );
          var o = e.v2 ? t.nationalNumber : t.phone;
          if ((0, r.Z)(o, d.nationalNumberPattern())) {
            if ($(o, "FIXED_LINE", d))
              return (d.type("MOBILE") && "" === d.type("MOBILE").pattern()) ||
                !d.type("MOBILE") ||
                $(o, "MOBILE", d)
                ? "FIXED_LINE_OR_MOBILE"
                : "FIXED_LINE";
            for (
              var u,
                l = (function (t, e) {
                  var d =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                  if (d) return (d = d.call(t)).next.bind(d);
                  if (
                    Array.isArray(t) ||
                    (d = (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var d = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === d &&
                            t.constructor &&
                            (d = t.constructor.name),
                          "Map" === d || "Set" === d)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === d ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                        )
                          return a(t, e);
                      }
                    })(t))
                  ) {
                    d && (t = d);
                    var n = 0;
                    return function () {
                      return n >= t.length
                        ? { done: !0 }
                        : { done: !1, value: t[n++] };
                    };
                  }
                  throw TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(i);
              !(u = l()).done;

            ) {
              var s = u.value;
              if ($(o, s, d)) return s;
            }
          }
        }
      }
      function $(t, e, d) {
        return (
          !(
            !(e = d.type(e)) ||
            !e.pattern() ||
            (e.possibleLengths() && 0 > e.possibleLengths().indexOf(t.length))
          ) && (0, r.Z)(t, e.pattern())
        );
      }
    },
    3398: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = {}.constructor;
      function r(t) {
        return null != t && t.constructor === n;
      }
    },
    1316: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return n;
        },
      });
      function n(t, e) {
        return (t = t || ""), RegExp("^(?:" + e + ")$").test(t);
      }
    },
    9233: function (t, e, d) {
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      d.d(e, {
        ZP: function () {
          return i;
        },
        xh: function () {
          return a;
        },
      });
      var r = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "０": "0",
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
      };
      function a(t) {
        return r[t];
      }
      function i(t) {
        for (
          var e,
            d = "",
            a = (function (t, e) {
              var d =
                ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
              if (d) return (d = d.call(t)).next.bind(d);
              if (
                Array.isArray(t) ||
                (d = (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return n(t, e);
                    var d = Object.prototype.toString.call(t).slice(8, -1);
                    if (
                      ("Object" === d &&
                        t.constructor &&
                        (d = t.constructor.name),
                      "Map" === d || "Set" === d)
                    )
                      return Array.from(t);
                    if (
                      "Arguments" === d ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                    )
                      return n(t, e);
                  }
                })(t))
              ) {
                d && (t = d);
                var r = 0;
                return function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                };
              }
              throw TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(t.split(""));
          !(e = a()).done;

        ) {
          var i = r[e.value];
          i && (d += i);
        }
        return d;
      }
    },
    3633: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return a;
        },
      });
      var n = d(7691),
        r = RegExp("([" + d(5619).xc + "])");
      function a(t, e, d, a) {
        if (e) {
          var i = new n.ZP(a);
          i.selectNumberingPlan(e, d);
          var o = new RegExp(i.IDDPrefix());
          if (0 === t.search(o)) {
            var $ = (t = t.slice(t.match(o)[0].length)).match(r);
            if (!$ || null == $[1] || !($[1].length > 0) || "0" !== $[1])
              return t;
          }
        }
      }
    },
    6829: function (t, e, d) {
      d.d(e, {
        D: function () {
          return i;
        },
        Z: function () {
          return a;
        },
      });
      var n = d(7691),
        r = d(280);
      function a(t, e, d) {
        if ((void 0 === e && (e = {}), (d = new n.ZP(d)), e.v2)) {
          if (!t.countryCallingCode)
            throw Error("Invalid phone number object passed");
          d.selectNumberingPlan(t.countryCallingCode);
        } else {
          if (!t.phone) return !1;
          if (t.country) {
            if (!d.hasCountry(t.country))
              throw Error("Unknown country: ".concat(t.country));
            d.country(t.country);
          } else {
            if (!t.countryCallingCode)
              throw Error("Invalid phone number object passed");
            d.selectNumberingPlan(t.countryCallingCode);
          }
        }
        if (d.possibleLengths()) return i(t.phone || t.nationalNumber, d);
        if (
          t.countryCallingCode &&
          d.isNonGeographicCallingCode(t.countryCallingCode)
        )
          return !0;
        throw Error(
          'Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.'
        );
      }
      function i(t, e) {
        return "IS_POSSIBLE" === (0, r.Z)(t, e);
      }
    },
    7691: function (t, e, d) {
      function n(t, e) {
        (t = t.split("-")), (e = e.split("-"));
        for (var d = t[0].split("."), n = e[0].split("."), r = 0; r < 3; r++) {
          var a = Number(d[r]),
            i = Number(n[r]);
          if (a > i) return 1;
          if (i > a) return -1;
          if (!isNaN(a) && isNaN(i)) return 1;
          if (isNaN(a) && !isNaN(i)) return -1;
        }
        return t[1] && e[1]
          ? t[1] > e[1]
            ? 1
            : t[1] < e[1]
            ? -1
            : 0
          : !t[1] && e[1]
          ? 1
          : t[1] && !e[1]
          ? -1
          : 0;
      }
      d.d(e, {
        ZP: function () {
          return s;
        },
        Gg: function () {
          return p;
        },
        aS: function () {
          return v;
        },
      });
      var r = d(3398);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function $(t, e, d) {
        return (
          e && o(t.prototype, e),
          d && o(t, d),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      var u = " ext. ",
        l = /^\d+$/,
        s = (function () {
          function t(e) {
            i(this, t),
              (function (t) {
                if (!t)
                  throw Error(
                    "[libphonenumber-js] `metadata` argument not passed. Check your arguments."
                  );
                if (!(0, r.Z)(t) || !(0, r.Z)(t.countries))
                  throw Error(
                    "[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(
                      (0, r.Z)(t)
                        ? "an object of shape: { " +
                            Object.keys(t).join(", ") +
                            " }"
                        : "a " + y(t) + ": " + t,
                      "."
                    )
                  );
              })(e),
              (this.metadata = e),
              b.call(this, e);
          }
          return (
            $(t, [
              {
                key: "getCountries",
                value: function () {
                  return Object.keys(this.metadata.countries).filter(function (
                    t
                  ) {
                    return "001" !== t;
                  });
                },
              },
              {
                key: "getCountryMetadata",
                value: function (t) {
                  return this.metadata.countries[t];
                },
              },
              {
                key: "nonGeographic",
                value: function () {
                  if (!this.v1 && !this.v2 && !this.v3)
                    return (
                      this.metadata.nonGeographic ||
                      this.metadata.nonGeographical
                    );
                },
              },
              {
                key: "hasCountry",
                value: function (t) {
                  return void 0 !== this.getCountryMetadata(t);
                },
              },
              {
                key: "hasCallingCode",
                value: function (t) {
                  if (this.getCountryCodesForCallingCode(t)) return !0;
                  if (this.nonGeographic()) {
                    if (this.nonGeographic()[t]) return !0;
                  } else {
                    var e = this.countryCallingCodes()[t];
                    if (e && 1 === e.length && "001" === e[0]) return !0;
                  }
                },
              },
              {
                key: "isNonGeographicCallingCode",
                value: function (t) {
                  return this.nonGeographic()
                    ? !!this.nonGeographic()[t]
                    : !this.getCountryCodesForCallingCode(t);
                },
              },
              {
                key: "country",
                value: function (t) {
                  return this.selectNumberingPlan(t);
                },
              },
              {
                key: "selectNumberingPlan",
                value: function (t, e) {
                  if (
                    (t && l.test(t) && ((e = t), (t = null)), t && "001" !== t)
                  ) {
                    if (!this.hasCountry(t))
                      throw Error("Unknown country: ".concat(t));
                    this.numberingPlan = new c(
                      this.getCountryMetadata(t),
                      this
                    );
                  } else if (e) {
                    if (!this.hasCallingCode(e))
                      throw Error("Unknown calling code: ".concat(e));
                    this.numberingPlan = new c(
                      this.getNumberingPlanMetadata(e),
                      this
                    );
                  } else this.numberingPlan = void 0;
                  return this;
                },
              },
              {
                key: "getCountryCodesForCallingCode",
                value: function (t) {
                  var e = this.countryCallingCodes()[t];
                  if (e) {
                    if (1 === e.length && 3 === e[0].length) return;
                    return e;
                  }
                },
              },
              {
                key: "getCountryCodeForCallingCode",
                value: function (t) {
                  var e = this.getCountryCodesForCallingCode(t);
                  if (e) return e[0];
                },
              },
              {
                key: "getNumberingPlanMetadata",
                value: function (t) {
                  var e = this.getCountryCodeForCallingCode(t);
                  if (e) return this.getCountryMetadata(e);
                  if (this.nonGeographic()) {
                    var d = this.nonGeographic()[t];
                    if (d) return d;
                  } else {
                    var n = this.countryCallingCodes()[t];
                    if (n && 1 === n.length && "001" === n[0])
                      return this.metadata.countries["001"];
                  }
                },
              },
              {
                key: "countryCallingCode",
                value: function () {
                  return this.numberingPlan.callingCode();
                },
              },
              {
                key: "IDDPrefix",
                value: function () {
                  return this.numberingPlan.IDDPrefix();
                },
              },
              {
                key: "defaultIDDPrefix",
                value: function () {
                  return this.numberingPlan.defaultIDDPrefix();
                },
              },
              {
                key: "nationalNumberPattern",
                value: function () {
                  return this.numberingPlan.nationalNumberPattern();
                },
              },
              {
                key: "possibleLengths",
                value: function () {
                  return this.numberingPlan.possibleLengths();
                },
              },
              {
                key: "formats",
                value: function () {
                  return this.numberingPlan.formats();
                },
              },
              {
                key: "nationalPrefixForParsing",
                value: function () {
                  return this.numberingPlan.nationalPrefixForParsing();
                },
              },
              {
                key: "nationalPrefixTransformRule",
                value: function () {
                  return this.numberingPlan.nationalPrefixTransformRule();
                },
              },
              {
                key: "leadingDigits",
                value: function () {
                  return this.numberingPlan.leadingDigits();
                },
              },
              {
                key: "hasTypes",
                value: function () {
                  return this.numberingPlan.hasTypes();
                },
              },
              {
                key: "type",
                value: function (t) {
                  return this.numberingPlan.type(t);
                },
              },
              {
                key: "ext",
                value: function () {
                  return this.numberingPlan.ext();
                },
              },
              {
                key: "countryCallingCodes",
                value: function () {
                  return this.v1
                    ? this.metadata.country_phone_code_to_countries
                    : this.metadata.country_calling_codes;
                },
              },
              {
                key: "chooseCountryByCountryCallingCode",
                value: function (t) {
                  return this.selectNumberingPlan(t);
                },
              },
              {
                key: "hasSelectedNumberingPlan",
                value: function () {
                  return void 0 !== this.numberingPlan;
                },
              },
            ]),
            t
          );
        })(),
        c = (function () {
          function t(e, d) {
            i(this, t),
              (this.globalMetadataObject = d),
              (this.metadata = e),
              b.call(this, d.metadata);
          }
          return (
            $(t, [
              {
                key: "callingCode",
                value: function () {
                  return this.metadata[0];
                },
              },
              {
                key: "getDefaultCountryMetadataForRegion",
                value: function () {
                  return this.globalMetadataObject.getNumberingPlanMetadata(
                    this.callingCode()
                  );
                },
              },
              {
                key: "IDDPrefix",
                value: function () {
                  if (!this.v1 && !this.v2) return this.metadata[1];
                },
              },
              {
                key: "defaultIDDPrefix",
                value: function () {
                  if (!this.v1 && !this.v2) return this.metadata[12];
                },
              },
              {
                key: "nationalNumberPattern",
                value: function () {
                  return this.v1 || this.v2
                    ? this.metadata[1]
                    : this.metadata[2];
                },
              },
              {
                key: "possibleLengths",
                value: function () {
                  if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
                },
              },
              {
                key: "_getFormats",
                value: function (t) {
                  return t[this.v1 ? 2 : this.v2 ? 3 : 4];
                },
              },
              {
                key: "formats",
                value: function () {
                  var t = this;
                  return (
                    this._getFormats(this.metadata) ||
                    this._getFormats(
                      this.getDefaultCountryMetadataForRegion()
                    ) ||
                    []
                  ).map(function (e) {
                    return new f(e, t);
                  });
                },
              },
              {
                key: "nationalPrefix",
                value: function () {
                  return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
                },
              },
              {
                key: "_getNationalPrefixFormattingRule",
                value: function (t) {
                  return t[this.v1 ? 4 : this.v2 ? 5 : 6];
                },
              },
              {
                key: "nationalPrefixFormattingRule",
                value: function () {
                  return (
                    this._getNationalPrefixFormattingRule(this.metadata) ||
                    this._getNationalPrefixFormattingRule(
                      this.getDefaultCountryMetadataForRegion()
                    )
                  );
                },
              },
              {
                key: "_nationalPrefixForParsing",
                value: function () {
                  return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
                },
              },
              {
                key: "nationalPrefixForParsing",
                value: function () {
                  return (
                    this._nationalPrefixForParsing() || this.nationalPrefix()
                  );
                },
              },
              {
                key: "nationalPrefixTransformRule",
                value: function () {
                  return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
                },
              },
              {
                key: "_getNationalPrefixIsOptionalWhenFormatting",
                value: function () {
                  return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
                },
              },
              {
                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                value: function () {
                  return (
                    this._getNationalPrefixIsOptionalWhenFormatting(
                      this.metadata
                    ) ||
                    this._getNationalPrefixIsOptionalWhenFormatting(
                      this.getDefaultCountryMetadataForRegion()
                    )
                  );
                },
              },
              {
                key: "leadingDigits",
                value: function () {
                  return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
                },
              },
              {
                key: "types",
                value: function () {
                  return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
                },
              },
              {
                key: "hasTypes",
                value: function () {
                  return (
                    (!this.types() || 0 !== this.types().length) &&
                    !!this.types()
                  );
                },
              },
              {
                key: "type",
                value: function (t) {
                  if (this.hasTypes() && m(this.types(), t))
                    return new g(m(this.types(), t), this);
                },
              },
              {
                key: "ext",
                value: function () {
                  return this.v1 || this.v2 ? u : this.metadata[13] || u;
                },
              },
            ]),
            t
          );
        })(),
        f = (function () {
          function t(e, d) {
            i(this, t), (this._format = e), (this.metadata = d);
          }
          return (
            $(t, [
              {
                key: "pattern",
                value: function () {
                  return this._format[0];
                },
              },
              {
                key: "format",
                value: function () {
                  return this._format[1];
                },
              },
              {
                key: "leadingDigitsPatterns",
                value: function () {
                  return this._format[2] || [];
                },
              },
              {
                key: "nationalPrefixFormattingRule",
                value: function () {
                  return (
                    this._format[3] ||
                    this.metadata.nationalPrefixFormattingRule()
                  );
                },
              },
              {
                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                value: function () {
                  return (
                    !!this._format[4] ||
                    this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                  );
                },
              },
              {
                key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                value: function () {
                  return (
                    this.usesNationalPrefix() &&
                    !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                  );
                },
              },
              {
                key: "usesNationalPrefix",
                value: function () {
                  return (
                    !!this.nationalPrefixFormattingRule() &&
                    !h.test(this.nationalPrefixFormattingRule())
                  );
                },
              },
              {
                key: "internationalFormat",
                value: function () {
                  return this._format[5] || this.format();
                },
              },
            ]),
            t
          );
        })(),
        h = /^\(?\$1\)?$/,
        g = (function () {
          function t(e, d) {
            i(this, t), (this.type = e), (this.metadata = d);
          }
          return (
            $(t, [
              {
                key: "pattern",
                value: function () {
                  return this.metadata.v1 ? this.type : this.type[0];
                },
              },
              {
                key: "possibleLengths",
                value: function () {
                  if (!this.metadata.v1)
                    return this.type[1] || this.metadata.possibleLengths();
                },
              },
            ]),
            t
          );
        })();
      function m(t, e) {
        switch (e) {
          case "FIXED_LINE":
            return t[0];
          case "MOBILE":
            return t[1];
          case "TOLL_FREE":
            return t[2];
          case "PREMIUM_RATE":
            return t[3];
          case "PERSONAL_NUMBER":
            return t[4];
          case "VOICEMAIL":
            return t[5];
          case "UAN":
            return t[6];
          case "PAGER":
            return t[7];
          case "VOIP":
            return t[8];
          case "SHARED_COST":
            return t[9];
        }
      }
      var y = function (t) {
        return a(t);
      };
      function p(t, e) {
        if ((e = new s(e)).hasCountry(t))
          return e.country(t).countryCallingCode();
        throw Error("Unknown country: ".concat(t));
      }
      function v(t, e) {
        return e.countries.hasOwnProperty(t);
      }
      function b(t) {
        var e = t.version;
        "number" == typeof e
          ? ((this.v1 = 1 === e),
            (this.v2 = 2 === e),
            (this.v3 = 3 === e),
            (this.v4 = 4 === e))
          : e
          ? -1 === n(e, "1.2.0")
            ? (this.v2 = !0)
            : -1 === n(e, "1.7.35")
            ? (this.v3 = !0)
            : (this.v4 = !0)
          : (this.v1 = !0);
      }
    },
    6359: function (t, e) {
      e.Z = {
        AC: "40123",
        AD: "312345",
        AE: "501234567",
        AF: "701234567",
        AG: "2684641234",
        AI: "2642351234",
        AL: "672123456",
        AM: "77123456",
        AO: "923123456",
        AR: "91123456789",
        AS: "6847331234",
        AT: "664123456",
        AU: "412345678",
        AW: "5601234",
        AX: "412345678",
        AZ: "401234567",
        BA: "61123456",
        BB: "2462501234",
        BD: "1812345678",
        BE: "470123456",
        BF: "70123456",
        BG: "43012345",
        BH: "36001234",
        BI: "79561234",
        BJ: "90011234",
        BL: "690001234",
        BM: "4413701234",
        BN: "7123456",
        BO: "71234567",
        BQ: "3181234",
        BR: "11961234567",
        BS: "2423591234",
        BT: "17123456",
        BW: "71123456",
        BY: "294911911",
        BZ: "6221234",
        CA: "5062345678",
        CC: "412345678",
        CD: "991234567",
        CF: "70012345",
        CG: "061234567",
        CH: "781234567",
        CI: "0123456789",
        CK: "71234",
        CL: "221234567",
        CM: "671234567",
        CN: "13123456789",
        CO: "3211234567",
        CR: "83123456",
        CU: "51234567",
        CV: "9911234",
        CW: "95181234",
        CX: "412345678",
        CY: "96123456",
        CZ: "601123456",
        DE: "15123456789",
        DJ: "77831001",
        DK: "32123456",
        DM: "7672251234",
        DO: "8092345678",
        DZ: "551234567",
        EC: "991234567",
        EE: "51234567",
        EG: "1001234567",
        EH: "650123456",
        ER: "7123456",
        ES: "612345678",
        ET: "911234567",
        FI: "412345678",
        FJ: "7012345",
        FK: "51234",
        FM: "3501234",
        FO: "211234",
        FR: "612345678",
        GA: "06031234",
        GB: "7400123456",
        GD: "4734031234",
        GE: "555123456",
        GF: "694201234",
        GG: "7781123456",
        GH: "231234567",
        GI: "57123456",
        GL: "221234",
        GM: "3012345",
        GN: "601123456",
        GP: "690001234",
        GQ: "222123456",
        GR: "6912345678",
        GT: "51234567",
        GU: "6713001234",
        GW: "955012345",
        GY: "6091234",
        HK: "51234567",
        HN: "91234567",
        HR: "921234567",
        HT: "34101234",
        HU: "201234567",
        ID: "812345678",
        IE: "850123456",
        IL: "502345678",
        IM: "7924123456",
        IN: "8123456789",
        IO: "3801234",
        IQ: "7912345678",
        IR: "9123456789",
        IS: "6111234",
        IT: "3123456789",
        JE: "7797712345",
        JM: "8762101234",
        JO: "790123456",
        JP: "9012345678",
        KE: "712123456",
        KG: "700123456",
        KH: "91234567",
        KI: "72001234",
        KM: "3212345",
        KN: "8697652917",
        KP: "1921234567",
        KR: "1020000000",
        KW: "50012345",
        KY: "3453231234",
        KZ: "7710009998",
        LA: "2023123456",
        LB: "71123456",
        LC: "7582845678",
        LI: "660234567",
        LK: "712345678",
        LR: "770123456",
        LS: "50123456",
        LT: "61234567",
        LU: "628123456",
        LV: "21234567",
        LY: "912345678",
        MA: "650123456",
        MC: "612345678",
        MD: "62112345",
        ME: "67622901",
        MF: "690001234",
        MG: "321234567",
        MH: "2351234",
        MK: "72345678",
        ML: "65012345",
        MM: "92123456",
        MN: "88123456",
        MO: "66123456",
        MP: "6702345678",
        MQ: "696201234",
        MR: "22123456",
        MS: "6644923456",
        MT: "96961234",
        MU: "52512345",
        MV: "7712345",
        MW: "991234567",
        MX: "12221234567",
        MY: "123456789",
        MZ: "821234567",
        NA: "811234567",
        NC: "751234",
        NE: "93123456",
        NF: "381234",
        NG: "8021234567",
        NI: "81234567",
        NL: "612345678",
        NO: "40612345",
        NP: "9841234567",
        NR: "5551234",
        NU: "8884012",
        NZ: "211234567",
        OM: "92123456",
        PA: "61234567",
        PE: "912345678",
        PF: "87123456",
        PG: "70123456",
        PH: "9051234567",
        PK: "3012345678",
        PL: "512345678",
        PM: "551234",
        PR: "7872345678",
        PS: "599123456",
        PT: "912345678",
        PW: "6201234",
        PY: "961456789",
        QA: "33123456",
        RE: "692123456",
        RO: "712034567",
        RS: "601234567",
        RU: "9123456789",
        RW: "720123456",
        SA: "512345678",
        SB: "7421234",
        SC: "2510123",
        SD: "911231234",
        SE: "701234567",
        SG: "81234567",
        SH: "51234",
        SI: "31234567",
        SJ: "41234567",
        SK: "912123456",
        SL: "25123456",
        SM: "66661212",
        SN: "701234567",
        SO: "71123456",
        SR: "7412345",
        SS: "977123456",
        ST: "9812345",
        SV: "70123456",
        SX: "7215205678",
        SY: "944567890",
        SZ: "76123456",
        TA: "8999",
        TC: "6492311234",
        TD: "63012345",
        TG: "90112345",
        TH: "812345678",
        TJ: "917123456",
        TK: "7290",
        TL: "77212345",
        TM: "66123456",
        TN: "20123456",
        TO: "7715123",
        TR: "5012345678",
        TT: "8682911234",
        TV: "901234",
        TW: "912345678",
        TZ: "621234567",
        UA: "501234567",
        UG: "712345678",
        US: "2015550123",
        UY: "94231234",
        UZ: "912345678",
        VA: "3123456789",
        VC: "7844301234",
        VE: "4121234567",
        VG: "2843001234",
        VI: "3406421234",
        VN: "912345678",
        VU: "5912345",
        WF: "821234",
        WS: "7212345",
        XK: "43201234",
        YE: "712345678",
        YT: "639012345",
        ZA: "711234567",
        ZM: "955123456",
        ZW: "712345678",
      };
    },
    8951: function (t, e) {
      e.Z = {
        version: 4,
        country_calling_codes: {
          1: [
            "US",
            "AG",
            "AI",
            "AS",
            "BB",
            "BM",
            "BS",
            "CA",
            "DM",
            "DO",
            "GD",
            "GU",
            "JM",
            "KN",
            "KY",
            "LC",
            "MP",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
          7: ["RU", "KZ"],
          20: ["EG"],
          27: ["ZA"],
          30: ["GR"],
          31: ["NL"],
          32: ["BE"],
          33: ["FR"],
          34: ["ES"],
          36: ["HU"],
          39: ["IT", "VA"],
          40: ["RO"],
          41: ["CH"],
          43: ["AT"],
          44: ["GB", "GG", "IM", "JE"],
          45: ["DK"],
          46: ["SE"],
          47: ["NO", "SJ"],
          48: ["PL"],
          49: ["DE"],
          51: ["PE"],
          52: ["MX"],
          53: ["CU"],
          54: ["AR"],
          55: ["BR"],
          56: ["CL"],
          57: ["CO"],
          58: ["VE"],
          60: ["MY"],
          61: ["AU", "CC", "CX"],
          62: ["ID"],
          63: ["PH"],
          64: ["NZ"],
          65: ["SG"],
          66: ["TH"],
          81: ["JP"],
          82: ["KR"],
          84: ["VN"],
          86: ["CN"],
          90: ["TR"],
          91: ["IN"],
          92: ["PK"],
          93: ["AF"],
          94: ["LK"],
          95: ["MM"],
          98: ["IR"],
          211: ["SS"],
          212: ["MA", "EH"],
          213: ["DZ"],
          216: ["TN"],
          218: ["LY"],
          220: ["GM"],
          221: ["SN"],
          222: ["MR"],
          223: ["ML"],
          224: ["GN"],
          225: ["CI"],
          226: ["BF"],
          227: ["NE"],
          228: ["TG"],
          229: ["BJ"],
          230: ["MU"],
          231: ["LR"],
          232: ["SL"],
          233: ["GH"],
          234: ["NG"],
          235: ["TD"],
          236: ["CF"],
          237: ["CM"],
          238: ["CV"],
          239: ["ST"],
          240: ["GQ"],
          241: ["GA"],
          242: ["CG"],
          243: ["CD"],
          244: ["AO"],
          245: ["GW"],
          246: ["IO"],
          247: ["AC"],
          248: ["SC"],
          249: ["SD"],
          250: ["RW"],
          251: ["ET"],
          252: ["SO"],
          253: ["DJ"],
          254: ["KE"],
          255: ["TZ"],
          256: ["UG"],
          257: ["BI"],
          258: ["MZ"],
          260: ["ZM"],
          261: ["MG"],
          262: ["RE", "YT"],
          263: ["ZW"],
          264: ["NA"],
          265: ["MW"],
          266: ["LS"],
          267: ["BW"],
          268: ["SZ"],
          269: ["KM"],
          290: ["SH", "TA"],
          291: ["ER"],
          297: ["AW"],
          298: ["FO"],
          299: ["GL"],
          350: ["GI"],
          351: ["PT"],
          352: ["LU"],
          353: ["IE"],
          354: ["IS"],
          355: ["AL"],
          356: ["MT"],
          357: ["CY"],
          358: ["FI", "AX"],
          359: ["BG"],
          370: ["LT"],
          371: ["LV"],
          372: ["EE"],
          373: ["MD"],
          374: ["AM"],
          375: ["BY"],
          376: ["AD"],
          377: ["MC"],
          378: ["SM"],
          380: ["UA"],
          381: ["RS"],
          382: ["ME"],
          383: ["XK"],
          385: ["HR"],
          386: ["SI"],
          387: ["BA"],
          389: ["MK"],
          420: ["CZ"],
          421: ["SK"],
          423: ["LI"],
          500: ["FK"],
          501: ["BZ"],
          502: ["GT"],
          503: ["SV"],
          504: ["HN"],
          505: ["NI"],
          506: ["CR"],
          507: ["PA"],
          508: ["PM"],
          509: ["HT"],
          590: ["GP", "BL", "MF"],
          591: ["BO"],
          592: ["GY"],
          593: ["EC"],
          594: ["GF"],
          595: ["PY"],
          596: ["MQ"],
          597: ["SR"],
          598: ["UY"],
          599: ["CW", "BQ"],
          670: ["TL"],
          672: ["NF"],
          673: ["BN"],
          674: ["NR"],
          675: ["PG"],
          676: ["TO"],
          677: ["SB"],
          678: ["VU"],
          679: ["FJ"],
          680: ["PW"],
          681: ["WF"],
          682: ["CK"],
          683: ["NU"],
          685: ["WS"],
          686: ["KI"],
          687: ["NC"],
          688: ["TV"],
          689: ["PF"],
          690: ["TK"],
          691: ["FM"],
          692: ["MH"],
          850: ["KP"],
          852: ["HK"],
          853: ["MO"],
          855: ["KH"],
          856: ["LA"],
          880: ["BD"],
          886: ["TW"],
          960: ["MV"],
          961: ["LB"],
          962: ["JO"],
          963: ["SY"],
          964: ["IQ"],
          965: ["KW"],
          966: ["SA"],
          967: ["YE"],
          968: ["OM"],
          970: ["PS"],
          971: ["AE"],
          972: ["IL"],
          973: ["BH"],
          974: ["QA"],
          975: ["BT"],
          976: ["MN"],
          977: ["NP"],
          992: ["TJ"],
          993: ["TM"],
          994: ["AZ"],
          995: ["GE"],
          996: ["KG"],
          998: ["UZ"],
        },
        countries: {
          AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
          AD: [
            "376",
            "00",
            "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
            [6, 8, 9],
            [
              ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
            ],
          ],
          AE: [
            "971",
            "00",
            "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[236]|[479][2-8]"],
                "0$1",
              ],
              ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
            ],
            "0",
          ],
          AF: [
            "93",
            "00",
            "[2-7]\\d{8}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]],
            "0",
          ],
          AG: [
            "1",
            "011",
            "(?:268|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([457]\\d{6})$|1",
            "268$1",
            0,
            "268",
          ],
          AI: [
            "1",
            "011",
            "(?:264|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2457]\\d{6})$|1",
            "264$1",
            0,
            "264",
          ],
          AL: [
            "355",
            "00",
            "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
            [6, 7, 8, 9],
            [
              ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[2358][2-5]|4"],
                "0$1",
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"],
            ],
            "0",
          ],
          AM: [
            "374",
            "00",
            "(?:[1-489]\\d|55|60|77)\\d{6}",
            [8],
            [
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
              ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
              ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
              ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"],
            ],
            "0",
          ],
          AO: [
            "244",
            "00",
            "[29]\\d{8}",
            [9],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],
          ],
          AR: [
            "54",
            "00",
            "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
            [10, 11],
            [
              [
                "(\\d{4})(\\d{2})(\\d{4})",
                "$1 $2-$3",
                [
                  "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                  "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                  "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                  "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                ],
                "0$1",
                1,
              ],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
              [
                "(\\d)(\\d{4})(\\d{2})(\\d{4})",
                "$2 15-$3-$4",
                [
                  "9(?:2[2-469]|3[3-578])",
                  "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
                  "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
                  "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                  "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                ],
                "0$1",
                0,
                "$1 $2 $3-$4",
              ],
              [
                "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                "$2 15-$3-$4",
                ["91"],
                "0$1",
                0,
                "$1 $2 $3-$4",
              ],
              ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
              [
                "(\\d)(\\d{3})(\\d{3})(\\d{4})",
                "$2 15-$3-$4",
                ["9"],
                "0$1",
                0,
                "$1 $2 $3-$4",
              ],
            ],
            "0",
            0,
            "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
            "9$1",
          ],
          AS: [
            "1",
            "011",
            "(?:[58]\\d\\d|684|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([267]\\d{6})$|1",
            "684$1",
            0,
            "684",
          ],
          AT: [
            "43",
            "00",
            "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            [
              ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
              ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
              ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
              [
                "(\\d{3})(\\d{3,10})",
                "$1 $2",
                ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],
                "0$1",
              ],
              ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"],
            ],
            "0",
          ],
          AU: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
            [5, 6, 7, 8, 9, 10, 12],
            [
              ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]],
            ],
            "0",
            0,
            "(183[12])|0",
            0,
            0,
            0,
            [
              [
                "(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
                [9],
              ],
              [
                "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                [9],
              ],
              ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
              ["190[0-26]\\d{6}", [10]],
              0,
              0,
              0,
              ["163\\d{2,6}", [5, 6, 7, 8, 9]],
              ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
              [
                "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                [6, 8, 10, 12],
              ],
            ],
            "0011",
          ],
          AW: [
            "297",
            "00",
            "(?:[25-79]\\d\\d|800)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],
          ],
          AX: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            0,
            "0",
            0,
            0,
            0,
            0,
            "18",
            0,
            "00",
          ],
          AZ: [
            "994",
            "00",
            "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["90"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                [
                  "1[28]|2|365|46",
                  "1[28]|2|365[45]|46",
                  "1[28]|2|365(?:4|5[02])|46",
                ],
                "(0$1)",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[13-9]"],
                "0$1",
              ],
            ],
            "0",
          ],
          BA: [
            "387",
            "00",
            "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"],
            ],
            "0",
          ],
          BB: [
            "1",
            "011",
            "(?:246|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "246$1",
            0,
            "246",
          ],
          BD: [
            "880",
            "00",
            "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
            [6, 7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
              [
                "(\\d{3})(\\d{3,7})",
                "$1-$2",
                [
                  "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]",
                ],
                "0$1",
              ],
              ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
              ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"],
            ],
            "0",
          ],
          BE: [
            "32",
            "00",
            "4\\d{8}|[1-9]\\d{7}",
            [8, 9],
            [
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
              [
                "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[239]|4[23]"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[15-8]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"],
            ],
            "0",
          ],
          BF: [
            "226",
            "00",
            "[025-7]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]],
          ],
          BG: [
            "359",
            "00",
            "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
            [6, 7, 8, 9, 12],
            [
              ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
              ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
              ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2,3})",
                "$1 $2 $3",
                ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
          ],
          BH: [
            "973",
            "00",
            "[136-9]\\d{7}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]],
          ],
          BI: [
            "257",
            "00",
            "(?:[267]\\d|31)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]],
          ],
          BJ: [
            "229",
            "00",
            "[24-689]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]],
          ],
          BL: [
            "590",
            "00",
            "590\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
              ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
              ["80[0-5]\\d{6}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"],
            ],
          ],
          BM: [
            "1",
            "011",
            "(?:441|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "441$1",
            0,
            "441",
          ],
          BN: [
            "673",
            "00",
            "[2-578]\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],
          ],
          BO: [
            "591",
            "00(?:1\\d)?",
            "(?:[2-467]\\d\\d|8001)\\d{5}",
            [8, 9],
            [
              ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
              ["(\\d{8})", "$1", ["[67]"]],
              ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
            "0",
            0,
            "0(1\\d)?",
          ],
          BQ: [
            "599",
            "00",
            "(?:[34]1|7\\d)\\d{5}",
            [7],
            0,
            0,
            0,
            0,
            0,
            0,
            "[347]",
          ],
          BR: [
            "55",
            "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
            "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",
            [8, 9, 10, 11],
            [
              [
                "(\\d{4})(\\d{4})",
                "$1-$2",
                ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"],
              ],
              [
                "(\\d{3})(\\d{2,3})(\\d{4})",
                "$1 $2 $3",
                ["(?:[358]|90)0"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2-$3",
                ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
                "($1)",
              ],
              [
                "(\\d{2})(\\d{5})(\\d{4})",
                "$1 $2-$3",
                ["[16][1-9]|[2-57-9]"],
                "($1)",
              ],
            ],
            "0",
            0,
            "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
            "$2",
          ],
          BS: [
            "1",
            "011",
            "(?:242|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([3-8]\\d{6})$|1",
            "242$1",
            0,
            "242",
          ],
          BT: [
            "975",
            "00",
            "[17]\\d{7}|[2-8]\\d{6}",
            [7, 8],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]],
            ],
          ],
          BW: [
            "267",
            "00",
            "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
            [7, 8, 10],
            [
              ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
              ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
              ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
          ],
          BY: [
            "375",
            "810",
            "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
            [6, 7, 8, 9, 10, 11],
            [
              ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
              ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
              [
                "(\\d{4})(\\d{2})(\\d{3})",
                "$1 $2-$3",
                [
                  "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
                  "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])",
                ],
                "8 0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["1(?:[56]|7[467])|2[1-3]"],
                "8 0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["[1-4]"],
                "8 0$1",
              ],
              ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"],
            ],
            "8",
            0,
            "0|80?",
            0,
            0,
            0,
            0,
            "8~10",
          ],
          BZ: [
            "501",
            "00",
            "(?:0800\\d|[2-8])\\d{6}",
            [7, 11],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
              ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]],
            ],
          ],
          CA: [
            "1",
            "011",
            "(?:[2-8]\\d|90)\\d{8}|3\\d{6}",
            [7, 10],
            0,
            "1",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
                [10],
              ],
              ["", [10]],
              ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
              ["900[2-9]\\d{6}", [10]],
              [
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",
                [10],
              ],
              0,
              ["310\\d{4}", [7]],
              0,
              ["600[2-9]\\d{6}", [10]],
            ],
          ],
          CC: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [6, 7, 8, 9, 10, 12],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
              [
                "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
                [9],
              ],
              [
                "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                [9],
              ],
              ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
              ["190[0-26]\\d{6}", [10]],
              0,
              0,
              0,
              0,
              ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
              [
                "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                [6, 8, 10, 12],
              ],
            ],
            "0011",
          ],
          CD: [
            "243",
            "00",
            "[189]\\d{8}|[1-68]\\d{6}",
            [7, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
              ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
          ],
          CF: [
            "236",
            "00",
            "(?:[27]\\d{3}|8776)\\d{4}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]],
          ],
          CG: [
            "242",
            "00",
            "222\\d{6}|(?:0\\d|80)\\d{7}",
            [9],
            [
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
            ],
          ],
          CH: [
            "41",
            "00",
            "8\\d{11}|[2-9]\\d{8}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[2-79]|81"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["8"],
                "0$1",
              ],
            ],
            "0",
          ],
          CI: [
            "225",
            "00",
            "[02]\\d{9}",
            [10],
            [
              ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]],
            ],
          ],
          CK: [
            "682",
            "00",
            "[2-578]\\d{4}",
            [5],
            [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]],
          ],
          CL: [
            "56",
            "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
            "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
            [9, 10, 11],
            [
              ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],
                "($1)",
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
              ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]],
            ],
          ],
          CM: [
            "237",
            "00",
            "[26]\\d{8}|88\\d{6,7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["[26]|88"],
              ],
            ],
          ],
          CN: [
            "86",
            "00|1(?:[12]\\d|79)\\d\\d00",
            "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",
            [7, 8, 9, 10, 11, 12],
            [
              [
                "(\\d{2})(\\d{5,6})",
                "$1 $2",
                [
                  "(?:10|2[0-57-9])[19]",
                  "(?:10|2[0-57-9])(?:10|9[56])",
                  "10(?:10|9[56])|2[0-57-9](?:100|9[56])",
                ],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{5,6})",
                "$1 $2",
                [
                  "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
                  "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
                  "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
                  "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                [
                  "10|2(?:[02-57-9]|1[1-9])",
                  "10|2(?:[02-57-9]|1[1-9])",
                  "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])",
                ],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                [
                  "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]",
                ],
                "0$1",
                1,
              ],
              ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
              [
                "(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3 $4",
                ["[12]"],
                "0$1",
                1,
              ],
            ],
            "0",
            0,
            "(1(?:[12]\\d|79)\\d\\d)|0",
            0,
            0,
            0,
            0,
            "00",
          ],
          CO: [
            "57",
            "00(?:4(?:[14]4|56)|[579])",
            "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",
            [10, 11],
            [
              ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
              ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
              [
                "(\\d)(\\d{3})(\\d{7})",
                "$1-$2-$3",
                ["1"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
            ],
            "0",
            0,
            "0([3579]|4(?:[14]4|56))?",
          ],
          CR: [
            "506",
            "00",
            "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
            [8, 10],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]],
            ],
            0,
            0,
            "(19(?:0[0-2468]|1[09]|20|66|77|99))",
          ],
          CU: [
            "53",
            "119",
            "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}",
            [6, 7, 8, 10],
            [
              ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
              ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
              ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
              ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"],
            ],
            "0",
          ],
          CV: [
            "238",
            "0",
            "(?:[2-59]\\d\\d|800)\\d{4}",
            [7],
            [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]],
          ],
          CW: [
            "599",
            "00",
            "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
            [7, 8],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            "[69]",
          ],
          CX: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [6, 7, 8, 9, 10, 12],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
              [
                "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
                [9],
              ],
              [
                "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                [9],
              ],
              ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
              ["190[0-26]\\d{6}", [10]],
              0,
              0,
              0,
              0,
              ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
              [
                "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                [6, 8, 10, 12],
              ],
            ],
            "0011",
          ],
          CY: [
            "357",
            "00",
            "(?:[279]\\d|[58]0)\\d{6}",
            [8],
            [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],
          ],
          CZ: [
            "420",
            "00",
            "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
              ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
              ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
              ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
            ],
          ],
          DE: [
            "49",
            "00",
            "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [
              ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
              [
                "(\\d{3})(\\d{3,12})",
                "$1 $2",
                [
                  "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                  "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                ],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{2,11})",
                "$1 $2",
                [
                  "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
                  "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
              ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
              ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
              ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
              ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
              ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
              ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
              ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
              ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
              ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
              ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{7,8})",
                "$1 $2 $3",
                ["1(?:6[023]|7)"],
                "0$1",
              ],
              ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
              ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"],
            ],
            "0",
          ],
          DJ: [
            "253",
            "00",
            "(?:2\\d|77)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]],
          ],
          DK: [
            "45",
            "00",
            "[2-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]],
          ],
          DM: [
            "1",
            "011",
            "(?:[58]\\d\\d|767|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "767$1",
            0,
            "767",
          ],
          DO: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "8001|8[024]9",
          ],
          DZ: [
            "213",
            "00",
            "(?:[1-4]|[5-79]\\d|80)\\d{7}",
            [8, 9],
            [
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[1-4]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[5-8]"],
                "0$1",
              ],
            ],
            "0",
          ],
          EC: [
            "593",
            "00",
            "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
            [8, 9, 10, 11],
            [
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2-$3",
                ["[2-7]"],
                "(0$1)",
                0,
                "$1-$2-$3",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          EE: [
            "372",
            "00",
            "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
            [7, 8, 10],
            [
              [
                "(\\d{3})(\\d{4})",
                "$1 $2",
                [
                  "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88",
                  "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88",
                ],
              ],
              [
                "(\\d{4})(\\d{3,4})",
                "$1 $2",
                ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"],
              ],
              ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
          ],
          EG: [
            "20",
            "00",
            "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
              [
                "(\\d{2})(\\d{6,7})",
                "$1 $2",
                ["1[35]|[4-6]|8[2468]|9[235-7]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"],
            ],
            "0",
          ],
          EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
          ER: [
            "291",
            "00",
            "[178]\\d{6}",
            [7],
            [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]],
            "0",
          ],
          ES: [
            "34",
            "00",
            "[5-9]\\d{8}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]],
            ],
          ],
          ET: [
            "251",
            "00",
            "(?:11|[2-579]\\d)\\d{7}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]],
            "0",
          ],
          FI: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
              [
                "(\\d)(\\d{4,9})",
                "$1 $2",
                ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
              ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
              ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            "1[03-79]|[2-9]",
            0,
            "00",
          ],
          FJ: [
            "679",
            "0(?:0|52)",
            "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
            [7, 11],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          FK: ["500", "00", "[2-7]\\d{4}", [5]],
          FM: [
            "691",
            "00",
            "(?:[39]\\d\\d|820)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]],
          ],
          FO: [
            "298",
            "00",
            "[2-9]\\d{5}",
            [6],
            [["(\\d{6})", "$1", ["[2-9]"]]],
            0,
            0,
            "(10(?:01|[12]0|88))",
          ],
          FR: [
            "33",
            "00",
            "[1-9]\\d{8}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["8"],
                "0 $1",
              ],
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["[1-79]"],
                "0$1",
              ],
            ],
            "0",
          ],
          GA: [
            "241",
            "00",
            "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
            [7, 8],
            [
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[2-7]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["11|[67]"],
                "0$1",
              ],
            ],
            0,
            0,
            "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
            "$1",
          ],
          GB: [
            "44",
            "00",
            "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
            [7, 9, 10],
            [
              [
                "(\\d{3})(\\d{4})",
                "$1 $2",
                ["800", "8001", "80011", "800111", "8001111"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                ["845", "8454", "84546", "845464"],
                "0$1",
              ],
              ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
              [
                "(\\d{5})(\\d{4,5})",
                "$1 $2",
                [
                  "1(?:38|5[23]|69|76|94)",
                  "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                  "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)",
                ],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{5,6})",
                "$1 $2",
                ["1(?:[2-69][02-9]|[78])"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
                "0$1",
              ],
              ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
                [9, 10],
              ],
              [
                "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",
                [10],
              ],
              ["80[08]\\d{7}|800\\d{6}|8001111"],
              [
                "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",
                [7, 10],
              ],
              ["70\\d{8}", [10]],
              0,
              ["(?:3[0347]|55)\\d{8}", [10]],
              [
                "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                [10],
              ],
              ["56\\d{8}", [10]],
            ],
            0,
            " x",
          ],
          GD: [
            "1",
            "011",
            "(?:473|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "473$1",
            0,
            "473",
          ],
          GE: [
            "995",
            "00",
            "(?:[3-57]\\d\\d|800)\\d{6}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["32"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[348]"],
                "0$1",
              ],
            ],
            "0",
          ],
          GF: [
            "594",
            "00",
            "[56]94\\d{6}|(?:80|9\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[56]|9[47]"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[89]"],
                "0$1",
              ],
            ],
            "0",
          ],
          GG: [
            "44",
            "00",
            "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
            [7, 9, 10],
            0,
            "0",
            0,
            "([25-9]\\d{5})$|0",
            "1481$1",
            0,
            0,
            [
              ["1481[25-9]\\d{5}", [10]],
              ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
              ["80[08]\\d{7}|800\\d{6}|8001111"],
              [
                "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",
                [7, 10],
              ],
              ["70\\d{8}", [10]],
              0,
              ["(?:3[0347]|55)\\d{8}", [10]],
              [
                "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                [10],
              ],
              ["56\\d{8}", [10]],
            ],
          ],
          GH: [
            "233",
            "00",
            "(?:[235]\\d{3}|800)\\d{5}",
            [8, 9],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"],
            ],
            "0",
          ],
          GI: [
            "350",
            "00",
            "(?:[25]\\d|60)\\d{6}",
            [8],
            [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]],
          ],
          GL: [
            "299",
            "00",
            "(?:19|[2-689]\\d|70)\\d{4}",
            [6],
            [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]],
          ],
          GM: [
            "220",
            "00",
            "[2-9]\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
          ],
          GN: [
            "224",
            "00",
            "722\\d{6}|(?:3|6\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]],
            ],
          ],
          GP: [
            "590",
            "00",
            "590\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[569]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}",
              ],
              ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
              ["80[0-5]\\d{6}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"],
            ],
          ],
          GQ: [
            "240",
            "00",
            "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
              ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]],
            ],
          ],
          GR: [
            "30",
            "00",
            "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
            [10, 11, 12],
            [
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
              [
                "(\\d{4})(\\d{6})",
                "$1 $2",
                ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"],
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
              ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]],
            ],
          ],
          GT: [
            "502",
            "00",
            "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
            [8, 11],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ],
          ],
          GU: [
            "1",
            "011",
            "(?:[58]\\d\\d|671|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([3-9]\\d{6})$|1",
            "671$1",
            0,
            "671",
          ],
          GW: [
            "245",
            "00",
            "[49]\\d{8}|4\\d{6}",
            [7, 9],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]],
            ],
          ],
          GY: [
            "592",
            "001",
            "9008\\d{3}|(?:[2-467]\\d\\d|510|862)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
          ],
          HK: [
            "852",
            "00(?:30|5[09]|[126-9]?)",
            "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
            [5, 6, 7, 8, 9, 11],
            [
              ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
              ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          HN: [
            "504",
            "00",
            "8\\d{10}|[237-9]\\d{7}",
            [8, 11],
            [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]],
          ],
          HR: [
            "385",
            "00",
            "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",
            [6, 7, 8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
              ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
              ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
          ],
          HT: [
            "509",
            "00",
            "(?:[2-489]\\d|55)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]],
          ],
          HU: [
            "36",
            "00",
            "[235-7]\\d{8}|[1-9]\\d{7}",
            [8, 9],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
                "(06 $1)",
              ],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"],
            ],
            "06",
          ],
          ID: [
            "62",
            "00[89]",
            "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",
            [7, 8, 9, 10, 11, 12, 13],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
              ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
              ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
              ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
              ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
              ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
              ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
              ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"],
            ],
            "0",
          ],
          IE: [
            "353",
            "00",
            "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
            [7, 8, 9, 10],
            [
              [
                "(\\d{2})(\\d{5})",
                "$1 $2",
                ["2[24-9]|47|58|6[237-9]|9[35-9]"],
                "(0$1)",
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
              ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[2569]|4[1-69]|7[14]"],
                "(0$1)",
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
              ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          IL: [
            "972",
            "0(?:0|1[2-9])",
            "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
            [7, 8, 9, 10, 11, 12],
            [
              ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
              ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
              ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
              ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
              ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
              ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]],
            ],
            "0",
          ],
          IM: [
            "44",
            "00",
            "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [10],
            0,
            "0",
            0,
            "([25-8]\\d{5})$|0",
            "1624$1",
            0,
            "74576|(?:16|7[56])24",
          ],
          IN: [
            "91",
            "00",
            "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
            [8, 9, 10, 11, 12, 13],
            [
              [
                "(\\d{8})",
                "$1",
                [
                  "5(?:0|2[23]|3[03]|[67]1|88)",
                  "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
                  "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)",
                ],
                0,
                1,
              ],
              ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                [
                  "11|2[02]|33|4[04]|79[1-7]|80[2-46]",
                  "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
                  "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])",
                ],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                [
                  "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]",
                ],
                "0$1",
                1,
              ],
              [
                "(\\d{4})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                [
                  "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
                  "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
                  "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]",
                ],
                "0$1",
                1,
              ],
              ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
              [
                "(\\d{4})(\\d{2,4})(\\d{4})",
                "$1 $2 $3",
                ["1(?:6|8[06])", "1(?:6|8[06]0)"],
                0,
                1,
              ],
              ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1],
            ],
            "0",
          ],
          IO: [
            "246",
            "00",
            "3\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]],
          ],
          IQ: [
            "964",
            "00",
            "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
          ],
          IR: [
            "98",
            "00",
            "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
            [4, 5, 6, 7, 10],
            [
              ["(\\d{4,5})", "$1", ["96"], "0$1"],
              [
                "(\\d{2})(\\d{4,5})",
                "$1 $2",
                [
                  "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"],
            ],
            "0",
          ],
          IS: [
            "354",
            "00|1(?:0(?:01|[12]0)|100)",
            "(?:38\\d|[4-9])\\d{6}",
            [7, 9],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          IT: [
            "39",
            "00",
            "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
            [6, 7, 8, 9, 10, 11],
            [
              ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
              [
                "(\\d{3})(\\d{3,6})",
                "$1 $2",
                [
                  "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])",
                  "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))",
                ],
              ],
              [
                "(\\d{4})(\\d{2,6})",
                "$1 $2",
                ["0(?:[13-579][2-46-8]|8[236-8])"],
              ],
              ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
              ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
              [
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["1(?:44|[679])|[378]"],
              ],
              [
                "(\\d{3})(\\d{3,4})(\\d{4})",
                "$1 $2 $3",
                ["0[13-57-9][0159]|14"],
              ],
              ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
              ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              [
                "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
              ],
              ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
              ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
              [
                "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",
                [6, 8, 9, 10],
              ],
              ["1(?:78\\d|99)\\d{6}", [9, 10]],
              0,
              0,
              0,
              ["55\\d{8}", [10]],
              ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]],
            ],
          ],
          JE: [
            "44",
            "00",
            "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [10],
            0,
            "0",
            0,
            "([0-24-8]\\d{5})$|0",
            "1534$1",
            0,
            0,
            [
              ["1534[0-24-8]\\d{5}"],
              ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
              ["80(?:07(?:35|81)|8901)\\d{4}"],
              [
                "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
              ],
              ["701511\\d{4}"],
              0,
              [
                "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
              ],
              [
                "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
              ],
              ["56\\d{8}"],
            ],
          ],
          JM: [
            "1",
            "011",
            "(?:[58]\\d\\d|658|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "658|876",
          ],
          JO: [
            "962",
            "00",
            "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",
            [8, 9],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
              ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
          ],
          JP: [
            "81",
            "010",
            "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
            [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1-$2-$3",
                ["(?:12|57|99)0"],
                "0$1",
              ],
              [
                "(\\d{4})(\\d)(\\d{4})",
                "$1-$2-$3",
                [
                  "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
                  "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                  "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                ],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
              [
                "(\\d)(\\d{4})(\\d{4})",
                "$1-$2-$3",
                [
                  "[36]|4(?:2[09]|7[01])",
                  "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))",
                ],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1-$2-$3",
                [
                  "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
                ],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{4})",
                "$1-$2-$3",
                ["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"],
            ],
            "0",
            0,
            "(000[259]\\d{6})$|(?:(?:003768)0?)|0",
            "$1",
          ],
          KE: [
            "254",
            "000",
            "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
            [7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
              ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
          ],
          KG: [
            "996",
            "00",
            "8\\d{9}|[235-9]\\d{8}",
            [9, 10],
            [
              ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          KH: [
            "855",
            "00[14-9]",
            "1\\d{9}|[1-9]\\d{7,8}",
            [8, 9, 10],
            [
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          KI: [
            "686",
            "00",
            "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
            [5, 8],
            0,
            "0",
          ],
          KM: [
            "269",
            "00",
            "[3478]\\d{6}",
            [7],
            [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]],
          ],
          KN: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "869$1",
            0,
            "869",
          ],
          KP: [
            "850",
            "00|99",
            "85\\d{6}|(?:19\\d|[2-7])\\d{7}",
            [8, 10],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
            ],
            "0",
          ],
          KR: [
            "82",
            "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
            "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
            [5, 6, 8, 9, 10, 11, 12, 13, 14],
            [
              [
                "(\\d{2})(\\d{3,4})",
                "$1-$2",
                ["(?:3[1-3]|[46][1-4]|5[1-5])1"],
                "0$1",
              ],
              ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
              ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
              [
                "(\\d{2})(\\d{3,4})(\\d{4})",
                "$1-$2-$3",
                ["[1346]|5[1-5]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
              ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"],
            ],
            "0",
            0,
            "0(8(?:[1-46-8]|5\\d\\d))?",
          ],
          KW: [
            "965",
            "00",
            "18\\d{5}|(?:[2569]\\d|41)\\d{6}",
            [7, 8],
            [
              [
                "(\\d{4})(\\d{3,4})",
                "$1 $2",
                ["[169]|2(?:[235]|4[1-35-9])|52"],
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]],
            ],
          ],
          KY: [
            "1",
            "011",
            "(?:345|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "345$1",
            0,
            "345",
          ],
          KZ: [
            "7",
            "810",
            "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",
            [10, 14],
            0,
            "8",
            0,
            0,
            0,
            0,
            "33|7",
            0,
            "8~10",
          ],
          LA: [
            "856",
            "00",
            "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
            [8, 9, 10],
            [
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["2[13]|3[14]|[4-8]"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
                "$1 $2 $3 $4",
                ["30[013-9]"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["[23]"],
                "0$1",
              ],
            ],
            "0",
          ],
          LB: [
            "961",
            "00",
            "[27-9]\\d{7}|[13-9]\\d{6}",
            [7, 8],
            [
              [
                "(\\d)(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]],
            ],
            "0",
          ],
          LC: [
            "1",
            "011",
            "(?:[58]\\d\\d|758|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-8]\\d{6})$|1",
            "758$1",
            0,
            "758",
          ],
          LI: [
            "423",
            "00",
            "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
            [7, 9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"],
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
            ],
            "0",
            0,
            "(1001)|0",
          ],
          LK: [
            "94",
            "00",
            "[1-9]\\d{8}",
            [9],
            [
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
            ],
            "0",
          ],
          LR: [
            "231",
            "00",
            "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
            [7, 8, 9],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"],
            ],
            "0",
          ],
          LS: [
            "266",
            "00",
            "(?:[256]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]],
          ],
          LT: [
            "370",
            "00",
            "(?:[3469]\\d|52|[78]0)\\d{6}",
            [8],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
              [
                "(\\d{2})(\\d{6})",
                "$1 $2",
                ["37|4(?:[15]|6[1-8])"],
                "(8-$1)",
                1,
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1],
            ],
            "8",
            0,
            "[08]",
          ],
          LU: [
            "352",
            "00",
            "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
            [4, 5, 6, 7, 8, 9, 10, 11],
            [
              [
                "(\\d{2})(\\d{3})",
                "$1 $2",
                [
                  "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
                ],
              ],
              [
                "(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                [
                  "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
                ],
              ],
              ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                "$1 $2 $3 $4",
                ["2(?:[0367]|4[3-8])"],
              ],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                "$1 $2 $3 $4 $5",
                ["2(?:[0367]|4[3-8])"],
              ],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
                "$1 $2 $3 $4",
                ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],
              ],
            ],
            0,
            0,
            "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
          ],
          LV: [
            "371",
            "00",
            "(?:[268]\\d|90)\\d{6}",
            [8],
            [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]],
          ],
          LY: [
            "218",
            "00",
            "[2-9]\\d{8}",
            [9],
            [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],
            "0",
          ],
          MA: [
            "212",
            "00",
            "[5-8]\\d{8}",
            [9],
            [
              [
                "(\\d{5})(\\d{4})",
                "$1-$2",
                [
                  "5(?:29|38)",
                  "5(?:29[1289]|389)",
                  "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]",
                ],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["5[45]"],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{5})",
                "$1-$2",
                [
                  "5(?:2[2-489]|3[5-9]|9)|892",
                  "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892",
                ],
                "0$1",
              ],
              ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
              ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",
              ],
              [
                "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}",
              ],
              ["80\\d{7}"],
              ["89\\d{7}"],
              0,
              0,
              0,
              0,
              ["592(?:4[0-2]|93)\\d{4}"],
            ],
          ],
          MC: [
            "377",
            "00",
            "(?:[3489]|6\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["6"],
                "0$1",
              ],
            ],
            "0",
          ],
          MD: [
            "373",
            "00",
            "(?:[235-7]\\d|[89]0)\\d{6}",
            [8],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"],
            ],
            "0",
          ],
          ME: [
            "382",
            "00",
            "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
            [8, 9],
            [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],
            "0",
          ],
          MF: [
            "590",
            "00",
            "590\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
              ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
              ["80[0-5]\\d{6}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"],
            ],
          ],
          MG: [
            "261",
            "00",
            "[23]\\d{8}",
            [9],
            [
              [
                "(\\d{2})(\\d{2})(\\d{3})(\\d{2})",
                "$1 $2 $3 $4",
                ["[23]"],
                "0$1",
              ],
            ],
            "0",
            0,
            "([24-9]\\d{6})$|0",
            "20$1",
          ],
          MH: [
            "692",
            "011",
            "329\\d{4}|(?:[256]\\d|45)\\d{5}",
            [7],
            [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],
            "1",
          ],
          MK: [
            "389",
            "00",
            "[2-578]\\d{7}",
            [8],
            [
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["2|34[47]|4(?:[37]7|5[47]|64)"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
              ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"],
            ],
            "0",
          ],
          ML: [
            "223",
            "00",
            "[24-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]],
          ],
          MM: [
            "95",
            "00",
            "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
            [6, 7, 8, 9, 10],
            [
              ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
              [
                "(\\d{2})(\\d{2})(\\d{3})",
                "$1 $2 $3",
                ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],
                "0$1",
              ],
              ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[4-7]|8[1-35]"],
                "0$1",
              ],
              [
                "(\\d)(\\d{3})(\\d{4,6})",
                "$1 $2 $3",
                ["9(?:2[0-4]|[35-9]|4[137-9])"],
                "0$1",
              ],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
              ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
              ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
          ],
          MN: [
            "976",
            "001",
            "[12]\\d{7,9}|[5-9]\\d{7}",
            [8, 9, 10],
            [
              ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
              ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
              [
                "(\\d{4})(\\d{5,6})",
                "$1 $2",
                [
                  "[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
                  "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]",
                ],
                "0$1",
              ],
              ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"],
            ],
            "0",
          ],
          MO: [
            "853",
            "00",
            "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
            [7, 8],
            [
              ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]],
            ],
          ],
          MP: [
            "1",
            "011",
            "[58]\\d{9}|(?:67|90)0\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "670$1",
            0,
            "670",
          ],
          MQ: [
            "596",
            "00",
            "596\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[569]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          MR: [
            "222",
            "00",
            "(?:[2-4]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]],
          ],
          MS: [
            "1",
            "011",
            "(?:[58]\\d\\d|664|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([34]\\d{6})$|1",
            "664$1",
            0,
            "664",
          ],
          MT: [
            "356",
            "00",
            "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]],
          ],
          MU: [
            "230",
            "0(?:0|[24-7]0|3[03])",
            "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
            [7, 8, 10],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
              ["(\\d{5})(\\d{5})", "$1 $2", ["8"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "020",
          ],
          MV: [
            "960",
            "0(?:0|19)",
            "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
            [7, 10],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          MW: [
            "265",
            "00",
            "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
            [7, 9],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[137-9]"],
                "0$1",
              ],
            ],
            "0",
          ],
          MX: [
            "52",
            "0[09]",
            "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}",
            [10, 11],
            [
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
              [
                "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                "$2 $3 $4",
                ["1(?:33|5[56]|81)"],
                0,
                1,
              ],
              ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1],
            ],
            "01",
            0,
            "0(?:[12]|4[45])|1",
            0,
            0,
            0,
            0,
            "00",
          ],
          MY: [
            "60",
            "00",
            "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1-$2 $3",
                [
                  "1(?:[02469]|[378][1-9]|53)|8",
                  "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8",
                ],
                "0$1",
              ],
              ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
              [
                "(\\d)(\\d{3})(\\d{2})(\\d{4})",
                "$1-$2-$3-$4",
                ["1(?:[367]|80)"],
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"],
            ],
            "0",
          ],
          MZ: [
            "258",
            "00",
            "(?:2|8\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
          ],
          NA: [
            "264",
            "00",
            "[68]\\d{7,8}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
          ],
          NC: [
            "687",
            "00",
            "(?:050|[2-57-9]\\d\\d)\\d{3}",
            [6],
            [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]],
          ],
          NE: [
            "227",
            "00",
            "[027-9]\\d{7}",
            [8],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[089]|2[013]|7[047]"],
              ],
            ],
          ],
          NF: [
            "672",
            "00",
            "[13]\\d{5}",
            [6],
            [
              ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
              ["(\\d)(\\d{5})", "$1 $2", ["[13]"]],
            ],
            0,
            0,
            "([0-258]\\d{4})$",
            "3$1",
          ],
          NG: [
            "234",
            "009",
            "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",
            [7, 8, 10, 11, 12, 13, 14],
            [
              ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
              [
                "(\\d)(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[12]|9(?:0[3-9]|[1-9])"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2,3})",
                "$1 $2 $3",
                ["[3-7]|8[2-9]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
              ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
              ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"],
            ],
            "0",
          ],
          NI: [
            "505",
            "00",
            "(?:1800|[25-8]\\d{3})\\d{4}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]],
          ],
          NL: [
            "31",
            "00",
            "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
            [5, 6, 7, 8, 9, 10, 11],
            [
              ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
              ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
          ],
          NO: [
            "47",
            "00",
            "(?:0|[2-9]\\d{3})\\d{4}",
            [5, 8],
            [
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            "[02-689]|7[0-8]",
          ],
          NP: [
            "977",
            "00",
            "(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
            [8, 10, 11],
            [
              ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
              [
                "(\\d{2})(\\d{6})",
                "$1-$2",
                ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
                "0$1",
              ],
              ["(\\d{3})(\\d{7})", "$1-$2", ["9"]],
            ],
            "0",
          ],
          NR: [
            "674",
            "00",
            "(?:444|(?:55|8\\d)\\d|666)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]],
          ],
          NU: [
            "683",
            "00",
            "(?:[47]|888\\d)\\d{3}",
            [4, 7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]],
          ],
          NZ: [
            "64",
            "0(?:0|161)",
            "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
            [5, 6, 7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{2,3})",
                "$1 $2 $3",
                ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"],
                "0$1",
              ],
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["24|[346]|7[2-57-9]|9[2-9]"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["2(?:10|74)|[589]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3,5})",
                "$1 $2 $3",
                ["2(?:[169]|7[0-35-9])|7"],
                "0$1",
              ],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          OM: [
            "968",
            "00",
            "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
            [7, 8, 9],
            [
              ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
              ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]],
            ],
          ],
          PA: [
            "507",
            "00",
            "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
            [7, 8, 10, 11],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
              ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
          ],
          PE: [
            "51",
            "00|19(?:1[124]|77|90)00",
            "(?:[14-8]|9\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
              ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
              ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " Anexo ",
          ],
          PF: [
            "689",
            "00",
            "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
            [6, 8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
            ],
          ],
          PG: [
            "675",
            "00|140[1-3]",
            "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
            [7, 8],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          PH: [
            "63",
            "00",
            "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
            [6, 8, 9, 10, 11, 12, 13],
            [
              ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
              [
                "(\\d{4})(\\d{4,6})",
                "$1 $2",
                [
                  "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2",
                  "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))",
                ],
                "(0$1)",
              ],
              [
                "(\\d{5})(\\d{4})",
                "$1 $2",
                ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
                "(0$1)",
              ],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[3-7]|8[2-8]"],
                "(0$1)",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
              ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]],
            ],
            "0",
          ],
          PK: [
            "92",
            "00",
            "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
            [8, 9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
              ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
              [
                "(\\d{3})(\\d{6,7})",
                "$1 $2",
                [
                  "2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
                  "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]",
                ],
                "(0$1)",
              ],
              [
                "(\\d{2})(\\d{7,8})",
                "$1 $2",
                ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],
                "(0$1)",
              ],
              ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
              ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],
                "(0$1)",
              ],
              [
                "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["[24-9]"],
                "(0$1)",
              ],
            ],
            "0",
          ],
          PL: [
            "48",
            "00",
            "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
            [6, 7, 8, 9, 10],
            [
              ["(\\d{5})", "$1", ["19"]],
              ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
              [
                "(\\d{2})(\\d{2})(\\d{3})",
                "$1 $2 $3",
                [
                  "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
                  "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19",
                ],
              ],
              ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"],
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["1[2-8]|[2-7]|8[1-79]|9[145]"],
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]],
            ],
          ],
          PM: [
            "508",
            "00",
            "[45]\\d{5}|(?:708|80\\d)\\d{6}",
            [6, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          PR: [
            "1",
            "011",
            "(?:[589]\\d\\d|787)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "787|939",
          ],
          PS: [
            "970",
            "00",
            "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          PT: [
            "351",
            "00",
            "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
            [9],
            [
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]],
            ],
          ],
          PW: [
            "680",
            "01[12]",
            "(?:[24-8]\\d\\d|345|900)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
          ],
          PY: [
            "595",
            "00",
            "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
            [6, 7, 8, 9, 10, 11],
            [
              ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
              [
                "(\\d{2})(\\d{5})",
                "$1 $2",
                ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
                "(0$1)",
              ],
              [
                "(\\d{3})(\\d{4,5})",
                "$1 $2",
                ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
                "(0$1)",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
                "(0$1)",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
              ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]],
            ],
            "0",
          ],
          QA: [
            "974",
            "00",
            "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
            [7, 8, 9, 11],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]],
            ],
          ],
          RE: [
            "262",
            "00",
            "(?:26|[689]\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[2689]"],
                "0$1",
              ],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
              [
                "69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}",
              ],
              ["80\\d{7}"],
              ["89[1-37-9]\\d{6}"],
              0,
              0,
              0,
              0,
              ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"],
              ["8(?:1[019]|2[0156]|84|90)\\d{6}"],
            ],
          ],
          RO: [
            "40",
            "00",
            "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}",
            [6, 9],
            [
              ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
              ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            " int ",
          ],
          RS: [
            "381",
            "00",
            "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
            [6, 7, 8, 9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
              ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"],
            ],
            "0",
          ],
          RU: [
            "7",
            "810",
            "8\\d{13}|[347-9]\\d{9}",
            [10, 14],
            [
              [
                "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                [
                  "7(?:1[0-8]|2[1-9])",
                  "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
                  "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2",
                ],
                "8 ($1)",
                1,
              ],
              [
                "(\\d{5})(\\d)(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                [
                  "7(?:1[0-68]|2[1-9])",
                  "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
                  "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]",
                ],
                "8 ($1)",
                1,
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
              [
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["[349]|8(?:[02-7]|1[1-8])"],
                "8 ($1)",
                1,
              ],
              [
                "(\\d{4})(\\d{4})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["8"],
                "8 ($1)",
              ],
            ],
            "8",
            0,
            0,
            0,
            0,
            "3[04-689]|[489]",
            0,
            "8~10",
          ],
          RW: [
            "250",
            "00",
            "(?:06|[27]\\d\\d|[89]00)\\d{6}",
            [8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
            ],
            "0",
          ],
          SA: [
            "966",
            "00",
            "92\\d{7}|(?:[15]|8\\d)\\d{8}",
            [9, 10],
            [
              ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
            "0",
          ],
          SB: [
            "677",
            "0[01]",
            "(?:[1-6]|[7-9]\\d\\d)\\d{4}",
            [5, 7],
            [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],
          ],
          SC: [
            "248",
            "010|0[0-2]",
            "800\\d{4}|(?:[249]\\d|64)\\d{5}",
            [7],
            [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          SD: [
            "249",
            "00",
            "[19]\\d{8}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]],
            "0",
          ],
          SE: [
            "46",
            "00",
            "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
            [6, 7, 8, 9, 10],
            [
              [
                "(\\d{2})(\\d{2,3})(\\d{2})",
                "$1-$2 $3",
                ["20"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d{3})(\\d{4})",
                "$1-$2",
                ["9(?:00|39|44|9)"],
                "0$1",
                0,
                "$1 $2",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})",
                "$1-$2 $3",
                ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                ["8"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2,3})(\\d{2})",
                "$1-$2 $3",
                [
                  "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                ],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d{3})(\\d{2,3})(\\d{3})",
                "$1-$2 $3",
                ["9(?:00|39|44)"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                ["10|7"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                "$1-$2 $3 $4",
                ["8"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                [
                  "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                ],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
                "$1-$2 $3 $4",
                ["9"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4 $5",
                ["[26]"],
                "0$1",
                0,
                "$1 $2 $3 $4 $5",
              ],
            ],
            "0",
          ],
          SG: [
            "65",
            "0[0-3]\\d",
            "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
            [8, 10, 11],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
              ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ],
          ],
          SH: [
            "290",
            "00",
            "(?:[256]\\d|8)\\d{3}",
            [4, 5],
            0,
            0,
            0,
            0,
            0,
            0,
            "[256]",
          ],
          SI: [
            "386",
            "00|10(?:22|66|88|99)",
            "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
            [5, 6, 7, 8],
            [
              ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
              ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[37][01]|4[0139]|51|6"],
                "0$1",
              ],
              [
                "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[1-57]"],
                "(0$1)",
              ],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          SJ: [
            "47",
            "00",
            "0\\d{4}|(?:[489]\\d|79)\\d{6}",
            [5, 8],
            0,
            0,
            0,
            0,
            0,
            0,
            "79",
          ],
          SK: [
            "421",
            "00",
            "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
            [6, 7, 9],
            [
              ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
              [
                "(\\d{2})(\\d{2})(\\d{2,3})",
                "$1 $2 $3",
                ["[3-5][1-8]1", "[3-5][1-8]1[67]"],
                "0$1",
              ],
              ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1/$2 $3 $4",
                ["[3-5]"],
                "0$1",
              ],
            ],
            "0",
          ],
          SL: [
            "232",
            "00",
            "(?:[237-9]\\d|66)\\d{6}",
            [8],
            [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]],
            "0",
          ],
          SM: [
            "378",
            "00",
            "(?:0549|[5-7]\\d)\\d{6}",
            [8, 10],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
              ["(\\d{4})(\\d{6})", "$1 $2", ["0"]],
            ],
            0,
            0,
            "([89]\\d{5})$",
            "0549$1",
          ],
          SN: [
            "221",
            "00",
            "(?:[378]\\d|93)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
              ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
            ],
          ],
          SO: [
            "252",
            "00",
            "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
            [6, 7, 8, 9],
            [
              ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
              ["(\\d{6})", "$1", ["[134]"]],
              ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
              ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
              ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]],
            ],
            "0",
          ],
          SR: [
            "597",
            "00",
            "(?:[2-5]|68|[78]\\d)\\d{5}",
            [6, 7],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
              ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
              ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]],
            ],
          ],
          SS: [
            "211",
            "00",
            "[19]\\d{8}",
            [9],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]],
            "0",
          ],
          ST: [
            "239",
            "00",
            "(?:22|9\\d)\\d{5}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]],
          ],
          SV: [
            "503",
            "00",
            "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",
            [7, 8, 11],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]],
            ],
          ],
          SX: [
            "1",
            "011",
            "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "(5\\d{6})$|1",
            "721$1",
            0,
            "721",
          ],
          SY: [
            "963",
            "00",
            "[1-39]\\d{8}|[1-5]\\d{7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1],
            ],
            "0",
          ],
          SZ: [
            "268",
            "00",
            "0800\\d{4}|(?:[237]\\d|900)\\d{6}",
            [8, 9],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
              ["(\\d{5})(\\d{4})", "$1 $2", ["9"]],
            ],
          ],
          TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
          TC: [
            "1",
            "011",
            "(?:[58]\\d\\d|649|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-479]\\d{6})$|1",
            "649$1",
            0,
            "649",
          ],
          TD: [
            "235",
            "00|16",
            "(?:22|[69]\\d|77)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          TG: [
            "228",
            "00",
            "[279]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]],
          ],
          TH: [
            "66",
            "00[1-9]",
            "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
            [8, 9, 10, 13],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          TJ: [
            "992",
            "810",
            "[0-57-9]\\d{8}",
            [9],
            [
              ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
              ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[04]|[34]7"]],
              ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
          ],
          TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
          TL: [
            "670",
            "00",
            "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
            [7, 8],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["7"]],
            ],
          ],
          TM: [
            "993",
            "810",
            "[1-6]\\d{7}",
            [8],
            [
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["12"],
                "(8 $1)",
              ],
              [
                "(\\d{3})(\\d)(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["[1-5]"],
                "(8 $1)",
              ],
              ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
          ],
          TN: [
            "216",
            "00",
            "[2-57-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]],
          ],
          TO: [
            "676",
            "00",
            "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
            [5, 7],
            [
              [
                "(\\d{2})(\\d{3})",
                "$1-$2",
                ["[2-4]|50|6[09]|7[0-24-69]|8[05]"],
              ],
              ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
              ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]],
            ],
          ],
          TR: [
            "90",
            "00",
            "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
            [7, 10, 12, 13],
            [
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["512|8[01589]|90"],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[24][1-8]|3[1-9]"],
                "(0$1)",
                1,
              ],
              ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1],
            ],
            "0",
          ],
          TT: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-46-8]\\d{6})$|1",
            "868$1",
            0,
            "868",
          ],
          TV: [
            "688",
            "00",
            "(?:2|7\\d\\d|90)\\d{4}",
            [5, 6, 7],
            [
              ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
              ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
              ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
            ],
          ],
          TW: [
            "886",
            "0(?:0[25-79]|19)",
            "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
            [7, 8, 9, 10, 11],
            [
              ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
              [
                "(\\d)(\\d{3,4})(\\d{4})",
                "$1 $2 $3",
                [
                  "[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]",
                  "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "#",
          ],
          TZ: [
            "255",
            "00[056]",
            "(?:[25-8]\\d|41|90)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
            ],
            "0",
          ],
          UA: [
            "380",
            "00",
            "[89]\\d{9}|[3-9]\\d{8}",
            [9, 10],
            [
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                [
                  "6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]",
                  "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]",
                ],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{5})",
                "$1 $2",
                [
                  "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])",
                  "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])",
                ],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[3-7]|89|9[1-9]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "0~0",
          ],
          UG: [
            "256",
            "00[057]",
            "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
            [9],
            [
              ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
              ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"],
            ],
            "0",
          ],
          US: [
            "1",
            "011",
            "[2-9]\\d{9}|3\\d{6}",
            [10],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "($1) $2-$3",
                ["[2-9]"],
                0,
                1,
                "$1-$2-$3",
              ],
            ],
            "1",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "5056(?:[0-35-9]\\d|4[468])\\d{4}|(?:4722|505[2-57-9]|983[29])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
              ],
              [""],
              ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
              ["900[2-9]\\d{6}"],
              [
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
              ],
            ],
          ],
          UY: [
            "598",
            "0(?:0|1[3-9]\\d)",
            "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",
            [6, 7, 8, 9, 10, 11, 12, 13],
            [
              ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
              ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
              ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
              ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " int. ",
          ],
          UZ: [
            "998",
            "810",
            "(?:20|33|[5-79]\\d|88)\\d{7}",
            [9],
            [
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[235-9]"],
                "8 $1",
              ],
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
          ],
          VA: [
            "39",
            "00",
            "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
            [6, 7, 8, 9, 10, 11],
            0,
            0,
            0,
            0,
            0,
            0,
            "06698",
          ],
          VC: [
            "1",
            "011",
            "(?:[58]\\d\\d|784|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "784$1",
            0,
            "784",
          ],
          VE: [
            "58",
            "00",
            "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
            [10],
            [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]],
            "0",
          ],
          VG: [
            "1",
            "011",
            "(?:284|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-578]\\d{6})$|1",
            "284$1",
            0,
            "284",
          ],
          VI: [
            "1",
            "011",
            "[58]\\d{9}|(?:34|90)0\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "340$1",
            0,
            "340",
          ],
          VN: [
            "84",
            "00",
            "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
            [7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
              ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["6"],
                "0$1",
                1,
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
              ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1],
            ],
            "0",
          ],
          VU: [
            "678",
            "00",
            "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
            [5, 7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]],
          ],
          WF: [
            "681",
            "00",
            "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",
            [6, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
            ],
          ],
          WS: [
            "685",
            "0",
            "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
            [5, 6, 7, 10],
            [
              ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
              ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
              ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
            ],
          ],
          XK: [
            "383",
            "00",
            "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",
            [8, 9],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"],
            ],
            "0",
          ],
          YE: [
            "967",
            "00",
            "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
            [7, 8, 9],
            [
              [
                "(\\d)(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[1-6]|7(?:[24-6]|8[0-7])"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
          ],
          YT: [
            "262",
            "00",
            "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"],
              [
                "639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}",
              ],
              ["80\\d{7}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"],
            ],
          ],
          ZA: [
            "27",
            "00",
            "[1-79]\\d{8}|8\\d{4,9}",
            [5, 6, 7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
          ],
          ZM: [
            "260",
            "00",
            "800\\d{6}|(?:21|63|[79]\\d)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"],
            ],
            "0",
          ],
          ZW: [
            "263",
            "00",
            "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
            [5, 6, 7, 8, 9, 10],
            [
              [
                "(\\d{3})(\\d{3,5})",
                "$1 $2",
                [
                  "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]",
                ],
                "0$1",
              ],
              ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
              ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
              [
                "(\\d{2})(\\d{7})",
                "$1 $2",
                [
                  "24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2",
                  "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]",
                ],
                "(0$1)",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
              [
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                [
                  "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
                  "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)",
                ],
                "0$1",
              ],
              ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
              [
                "(\\d{2})(\\d{3,5})",
                "$1 $2",
                [
                  "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]",
                ],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["29[013-9]|39|54"],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{3,5})",
                "$1 $2",
                ["(?:25|54)8", "258|5483"],
                "0$1",
              ],
            ],
            "0",
          ],
        },
        nonGeographic: {
          800: [
            "800",
            0,
            "(?:00|[1-9]\\d)\\d{6}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]],
          ],
          808: [
            "808",
            0,
            "[1-9]\\d{7}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]],
          ],
          870: [
            "870",
            0,
            "7\\d{11}|[35-7]\\d{8}",
            [9, 12],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]],
          ],
          878: [
            "878",
            0,
            "10\\d{10}",
            [12],
            [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]],
          ],
          881: [
            "881",
            0,
            "6\\d{9}|[0-36-9]\\d{8}",
            [9, 10],
            [
              ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
              ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, ["6\\d{9}|[0-36-9]\\d{8}"]],
          ],
          882: [
            "882",
            0,
            "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
            [7, 8, 9, 10, 11, 12],
            [
              ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
              ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
              ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
              ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
              ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                ["10|23|3(?:[15]|4[57])|4|51"],
              ],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
              ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              0,
              [
                "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
                [7, 8, 9, 10, 12],
              ],
              0,
              0,
              0,
              0,
              0,
              0,
              [
                "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}",
              ],
            ],
          ],
          883: [
            "883",
            0,
            "(?:[1-4]\\d|51)\\d{6,10}",
            [8, 9, 10, 11, 12],
            [
              [
                "(\\d{3})(\\d{3})(\\d{2,8})",
                "$1 $2 $3",
                ["[14]|2[24-689]|3[02-689]|51[24-9]"],
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
              ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
              ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              [
                "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
              ],
            ],
          ],
          888: [
            "888",
            0,
            "\\d{11}",
            [11],
            [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, ["\\d{11}"]],
          ],
          979: [
            "979",
            0,
            "[1359]\\d{8}",
            [9],
            [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, ["[1359]\\d{8}"]],
          ],
        },
      };
    },
    5559: function (t, e, d) {
      d.d(e, {
        R: function () {
          return q;
        },
      });
      var n = d(8951),
        r = d(7691),
        a = d(5946);
      function i(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var o = (function () {
        var t, e;
        function d(t) {
          var e = t.onCountryChange,
            n = t.onCallingCodeChange;
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, d),
            (this.onCountryChange = e),
            (this.onCallingCodeChange = n);
        }
        return (
          (t = [
            {
              key: "reset",
              value: function (t) {
                var e = t.country,
                  d = t.callingCode;
                (this.international = !1),
                  (this.missingPlus = !1),
                  (this.IDDPrefix = void 0),
                  (this.callingCode = void 0),
                  (this.digits = ""),
                  this.resetNationalSignificantNumber(),
                  this.initCountryAndCallingCode(e, d);
              },
            },
            {
              key: "resetNationalSignificantNumber",
              value: function () {
                (this.nationalSignificantNumber = this.getNationalDigits()),
                  (this.nationalSignificantNumberMatchesInput = !0),
                  (this.nationalPrefix = void 0),
                  (this.carrierCode = void 0),
                  (this.complexPrefixBeforeNationalSignificantNumber = void 0);
              },
            },
            {
              key: "update",
              value: function (t) {
                for (var e = 0, d = Object.keys(t); e < d.length; e++) {
                  var n = d[e];
                  this[n] = t[n];
                }
              },
            },
            {
              key: "initCountryAndCallingCode",
              value: function (t, e) {
                this.setCountry(t), this.setCallingCode(e);
              },
            },
            {
              key: "setCountry",
              value: function (t) {
                (this.country = t), this.onCountryChange(t);
              },
            },
            {
              key: "setCallingCode",
              value: function (t) {
                (this.callingCode = t),
                  this.onCallingCodeChange(t, this.country);
              },
            },
            {
              key: "startInternationalNumber",
              value: function (t, e) {
                (this.international = !0), this.initCountryAndCallingCode(t, e);
              },
            },
            {
              key: "appendDigits",
              value: function (t) {
                this.digits += t;
              },
            },
            {
              key: "appendNationalSignificantNumberDigits",
              value: function (t) {
                this.nationalSignificantNumber += t;
              },
            },
            {
              key: "getNationalDigits",
              value: function () {
                return this.international
                  ? this.digits.slice(
                      (this.IDDPrefix ? this.IDDPrefix.length : 0) +
                        (this.callingCode ? this.callingCode.length : 0)
                    )
                  : this.digits;
              },
            },
            {
              key: "getDigitsWithoutInternationalPrefix",
              value: function () {
                return this.international && this.IDDPrefix
                  ? this.digits.slice(this.IDDPrefix.length)
                  : this.digits;
              },
            },
          ]),
          i(d.prototype, t),
          e && i(d, e),
          Object.defineProperty(d, "prototype", { writable: !1 }),
          d
        );
      })();
      function $(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      var u = /x/;
      function l(t, e) {
        if (e < 1) return "";
        for (var d = ""; e > 1; ) 1 & e && (d += t), (e >>= 1), (t += t);
        return d + t;
      }
      function s(t, e) {
        return (
          ")" === t[e] && e++,
          (function (t) {
            for (var e = [], d = 0; d < t.length; )
              "(" === t[d] ? e.push(d) : ")" === t[d] && e.pop(), d++;
            var n = 0,
              r = "";
            e.push(t.length);
            for (var a = 0; a < e.length; a++) {
              var i = e[a];
              (r += t.slice(n, i)), (n = i + 1);
            }
            return r;
          })(t.slice(0, e))
        );
      }
      var c = d(280),
        f = d(9233),
        h = d(5738);
      function g(t, e, d) {
        var n,
          r = d.metadata,
          a = d.useNationalPrefixFormattingRule,
          i = d.getSeparatorAfterNationalPrefix,
          o = (0, h.Z)(t.nationalSignificantNumber, e, {
            carrierCode: t.carrierCode,
            useInternationalFormat: t.international,
            withNationalPrefix: a,
            metadata: r,
          });
        if (
          (!a &&
            (t.nationalPrefix
              ? (o = t.nationalPrefix + i(e) + o)
              : t.complexPrefixBeforeNationalSignificantNumber &&
                (o = t.complexPrefixBeforeNationalSignificantNumber + " " + o)),
          (n = o),
          (0, f.ZP)(n) === t.getNationalDigits())
        )
          return o;
      }
      function m(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var y = (function () {
          var t, e;
          function d() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, d);
          }
          return (
            (t = [
              {
                key: "parse",
                value: function (t) {
                  if (
                    ((this.context = [{ or: !0, instructions: [] }]),
                    this.parsePattern(t),
                    1 !== this.context.length)
                  )
                    throw Error(
                      "Non-finalized contexts left when pattern parse ended"
                    );
                  var e = this.context[0],
                    d = e.branches,
                    n = e.instructions;
                  if (d) return { op: "|", args: d.concat([b(n)]) };
                  if (0 === n.length) throw Error("Pattern is required");
                  return 1 === n.length ? n[0] : n;
                },
              },
              {
                key: "startContext",
                value: function (t) {
                  this.context.push(t);
                },
              },
              {
                key: "endContext",
                value: function () {
                  this.context.pop();
                },
              },
              {
                key: "getContext",
                value: function () {
                  return this.context[this.context.length - 1];
                },
              },
              {
                key: "parsePattern",
                value: function (t) {
                  if (!t) throw Error("Pattern is required");
                  var e = t.match(v);
                  if (!e) {
                    if (p.test(t))
                      throw Error(
                        "Illegal characters found in a pattern: ".concat(t)
                      );
                    this.getContext().instructions =
                      this.getContext().instructions.concat(t.split(""));
                    return;
                  }
                  var d = e[1],
                    n = t.slice(0, e.index),
                    r = t.slice(e.index + d.length);
                  switch (d) {
                    case "(?:":
                      n && this.parsePattern(n),
                        this.startContext({
                          or: !0,
                          instructions: [],
                          branches: [],
                        });
                      break;
                    case ")":
                      if (!this.getContext().or)
                        throw Error(
                          '")" operator must be preceded by "(?:" operator'
                        );
                      if (
                        (n && this.parsePattern(n),
                        0 === this.getContext().instructions.length)
                      )
                        throw Error(
                          'No instructions found after "|" operator in an "or" group'
                        );
                      var a = this.getContext().branches;
                      a.push(b(this.getContext().instructions)),
                        this.endContext(),
                        this.getContext().instructions.push({
                          op: "|",
                          args: a,
                        });
                      break;
                    case "|":
                      if (!this.getContext().or)
                        throw Error(
                          '"|" operator can only be used inside "or" groups'
                        );
                      if (
                        (n && this.parsePattern(n), !this.getContext().branches)
                      ) {
                        if (1 === this.context.length)
                          this.getContext().branches = [];
                        else
                          throw Error(
                            '"branches" not found in an "or" group context'
                          );
                      }
                      this.getContext().branches.push(
                        b(this.getContext().instructions)
                      ),
                        (this.getContext().instructions = []);
                      break;
                    case "[":
                      n && this.parsePattern(n),
                        this.startContext({ oneOfSet: !0 });
                      break;
                    case "]":
                      if (!this.getContext().oneOfSet)
                        throw Error(
                          '"]" operator must be preceded by "[" operator'
                        );
                      this.endContext(),
                        this.getContext().instructions.push({
                          op: "[]",
                          args: (function (t) {
                            for (var e = [], d = 0; d < t.length; ) {
                              if ("-" === t[d]) {
                                if (0 === d || d === t.length - 1)
                                  throw Error(
                                    "Couldn't parse a one-of set pattern: ".concat(
                                      t
                                    )
                                  );
                                for (
                                  var n = t[d - 1].charCodeAt(0) + 1,
                                    r = t[d + 1].charCodeAt(0) - 1,
                                    a = n;
                                  a <= r;

                                )
                                  e.push(String.fromCharCode(a)), a++;
                              } else e.push(t[d]);
                              d++;
                            }
                            return e;
                          })(n),
                        });
                      break;
                    default:
                      throw Error("Unknown operator: ".concat(d));
                  }
                  r && this.parsePattern(r);
                },
              },
            ]),
            m(d.prototype, t),
            e && m(d, e),
            Object.defineProperty(d, "prototype", { writable: !1 }),
            d
          );
        })(),
        p = /[\(\)\[\]\?\:\|]/,
        v = RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");
      function b(t) {
        return 1 === t.length ? t[0] : t;
      }
      function C(t, e) {
        var d =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (d) return (d = d.call(t)).next.bind(d);
        if (
          Array.isArray(t) ||
          (d = (function (t, e) {
            if (t) {
              if ("string" == typeof t) return N(t, e);
              var d = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === d && t.constructor && (d = t.constructor.name),
                "Map" === d || "Set" === d)
              )
                return Array.from(t);
              if (
                "Arguments" === d ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
              )
                return N(t, e);
            }
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          d && (t = d);
          var n = 0;
          return function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          };
        }
        throw TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function N(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function P(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var x = (function () {
          var t, e;
          function d(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, d),
              (this.matchTree = new y().parse(t));
          }
          return (
            (t = [
              {
                key: "match",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    d = e.allowOverflow;
                  if (!t) throw Error("String is required");
                  var n = (function t(e, d, n) {
                    if ("string" == typeof d) {
                      var r = e.join("");
                      return 0 === d.indexOf(r)
                        ? e.length === d.length
                          ? { match: !0, matchedChars: e }
                          : { partialMatch: !0 }
                        : 0 === r.indexOf(d)
                        ? n && e.length > d.length
                          ? { overflow: !0 }
                          : { match: !0, matchedChars: e.slice(0, d.length) }
                        : void 0;
                    }
                    if (Array.isArray(d)) {
                      for (var a = e.slice(), i = 0; i < d.length; ) {
                        var o = t(a, d[i], n && i === d.length - 1);
                        if (!o) return;
                        if (o.overflow) return o;
                        if (o.match) {
                          if (
                            0 === (a = a.slice(o.matchedChars.length)).length
                          ) {
                            if (i === d.length - 1)
                              return { match: !0, matchedChars: e };
                            return { partialMatch: !0 };
                          }
                        } else {
                          if (o.partialMatch) return { partialMatch: !0 };
                          throw Error(
                            "Unsupported match result:\n".concat(
                              JSON.stringify(o, null, 2)
                            )
                          );
                        }
                        i++;
                      }
                      return n
                        ? { overflow: !0 }
                        : {
                            match: !0,
                            matchedChars: e.slice(0, e.length - a.length),
                          };
                    }
                    switch (d.op) {
                      case "|":
                        for (var $, u, l = C(d.args); !(u = l()).done; ) {
                          var s = t(e, u.value, n);
                          if (s) {
                            if (s.overflow) return s;
                            if (s.match)
                              return {
                                match: !0,
                                matchedChars: s.matchedChars,
                              };
                            if (s.partialMatch) $ = !0;
                            else
                              throw Error(
                                "Unsupported match result:\n".concat(
                                  JSON.stringify(s, null, 2)
                                )
                              );
                          }
                        }
                        if ($) return { partialMatch: !0 };
                        return;
                      case "[]":
                        for (var c, f = C(d.args); !(c = f()).done; ) {
                          var h = c.value;
                          if (e[0] === h) {
                            if (1 === e.length)
                              return { match: !0, matchedChars: e };
                            if (n) return { overflow: !0 };
                            return { match: !0, matchedChars: [h] };
                          }
                        }
                        return;
                      default:
                        throw Error("Unsupported instruction tree: ".concat(d));
                    }
                  })(t.split(""), this.matchTree, !0);
                  if (
                    (n && n.match && delete n.matchedChars,
                    !n || !n.overflow || d)
                  )
                    return n;
                },
              },
            ]),
            P(d.prototype, t),
            e && P(d, e),
            Object.defineProperty(d, "prototype", { writable: !1 }),
            d
          );
        })(),
        O = d(5619),
        S = d(2354);
      function E(t, e) {
        var d =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (d) return (d = d.call(t)).next.bind(d);
        if (
          Array.isArray(t) ||
          (d = (function (t, e) {
            if (t) {
              if ("string" == typeof t) return I(t, e);
              var d = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === d && t.constructor && (d = t.constructor.name),
                "Map" === d || "Set" === d)
              )
                return Array.from(t);
              if (
                "Arguments" === d ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
              )
                return I(t, e);
            }
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          d && (t = d);
          var n = 0;
          return function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          };
        }
        throw TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function I(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function A(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var w = l("9", 15),
        T = /[- ]/,
        M = RegExp(
          "[" + O.uv + "]*\\$1[" + O.uv + "]*(\\$\\d[" + O.uv + "]*)*$"
        ),
        F = (function () {
          var t, e;
          function d(t) {
            t.state;
            var e = t.metadata;
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, d),
              (this.metadata = e),
              this.resetFormat();
          }
          return (
            (t = [
              {
                key: "resetFormat",
                value: function () {
                  (this.chosenFormat = void 0),
                    (this.template = void 0),
                    (this.nationalNumberTemplate = void 0),
                    (this.populatedNationalNumberTemplate = void 0),
                    (this.populatedNationalNumberTemplatePosition = -1);
                },
              },
              {
                key: "reset",
                value: function (t, e) {
                  this.resetFormat(),
                    t
                      ? ((this.isNANP = "1" === t.callingCode()),
                        (this.matchingFormats = t.formats()),
                        e.nationalSignificantNumber &&
                          this.narrowDownMatchingFormats(e))
                      : ((this.isNANP = void 0), (this.matchingFormats = []));
                },
              },
              {
                key: "format",
                value: function (t, e) {
                  var d = this;
                  if (
                    ((n = e.nationalSignificantNumber),
                    (r = this.metadata),
                    "IS_POSSIBLE" === (0, c.Z)(n, r))
                  )
                    for (
                      var n, r, a, i = E(this.matchingFormats);
                      !(a = i()).done;

                    ) {
                      var o = a.value,
                        $ = (function (t, e, d) {
                          var n = d.metadata,
                            r = d.shouldTryNationalPrefixFormattingRule,
                            a = d.getSeparatorAfterNationalPrefix;
                          if (
                            new RegExp("^(?:".concat(e.pattern(), ")$")).test(
                              t.nationalSignificantNumber
                            )
                          )
                            return (function (t, e, d) {
                              var n = d.metadata,
                                r = d.shouldTryNationalPrefixFormattingRule,
                                a = d.getSeparatorAfterNationalPrefix;
                              if (
                                (t.nationalSignificantNumber,
                                t.international,
                                t.nationalPrefix,
                                t.carrierCode,
                                r(e))
                              ) {
                                var i = g(t, e, {
                                  useNationalPrefixFormattingRule: !0,
                                  getSeparatorAfterNationalPrefix: a,
                                  metadata: n,
                                });
                                if (i) return i;
                              }
                              return g(t, e, {
                                useNationalPrefixFormattingRule: !1,
                                getSeparatorAfterNationalPrefix: a,
                                metadata: n,
                              });
                            })(t, e, {
                              metadata: n,
                              shouldTryNationalPrefixFormattingRule: r,
                              getSeparatorAfterNationalPrefix: a,
                            });
                        })(e, o, {
                          metadata: this.metadata,
                          shouldTryNationalPrefixFormattingRule: function (t) {
                            return d.shouldTryNationalPrefixFormattingRule(t, {
                              international: e.international,
                              nationalPrefix: e.nationalPrefix,
                            });
                          },
                          getSeparatorAfterNationalPrefix: function (t) {
                            return d.getSeparatorAfterNationalPrefix(t);
                          },
                        });
                      if ($)
                        return (
                          this.resetFormat(),
                          (this.chosenFormat = o),
                          this.setNationalNumberTemplate(
                            $.replace(/\d/g, "x"),
                            e
                          ),
                          (this.populatedNationalNumberTemplate = $),
                          (this.populatedNationalNumberTemplatePosition =
                            this.template.lastIndexOf("x")),
                          $
                        );
                    }
                  return this.formatNationalNumberWithNextDigits(t, e);
                },
              },
              {
                key: "formatNationalNumberWithNextDigits",
                value: function (t, e) {
                  var d = this.chosenFormat,
                    n = this.chooseFormat(e);
                  if (n)
                    return n === d
                      ? this.formatNextNationalNumberDigits(t)
                      : this.formatNextNationalNumberDigits(
                          e.getNationalDigits()
                        );
                },
              },
              {
                key: "narrowDownMatchingFormats",
                value: function (t) {
                  var e = this,
                    d = t.nationalSignificantNumber,
                    n = t.nationalPrefix,
                    r = t.international,
                    a = d.length - 3;
                  a < 0 && (a = 0),
                    (this.matchingFormats = this.matchingFormats.filter(
                      function (t) {
                        return (
                          e.formatSuits(t, r, n) && e.formatMatches(t, d, a)
                        );
                      }
                    )),
                    this.chosenFormat &&
                      -1 === this.matchingFormats.indexOf(this.chosenFormat) &&
                      this.resetFormat();
                },
              },
              {
                key: "formatSuits",
                value: function (t, e, d) {
                  return !(
                    (d &&
                      !t.usesNationalPrefix() &&
                      !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) ||
                    (!e &&
                      !d &&
                      t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
                  );
                },
              },
              {
                key: "formatMatches",
                value: function (t, e, d) {
                  var n = t.leadingDigitsPatterns().length;
                  if (0 === n) return !0;
                  d = Math.min(d, n - 1);
                  var r = t.leadingDigitsPatterns()[d];
                  if (e.length < 3)
                    try {
                      return (
                        void 0 !== new x(r).match(e, { allowOverflow: !0 })
                      );
                    } catch (t) {
                      return console.error(t), !0;
                    }
                  return new RegExp("^(".concat(r, ")")).test(e);
                },
              },
              {
                key: "getFormatFormat",
                value: function (t, e) {
                  return e ? t.internationalFormat() : t.format();
                },
              },
              {
                key: "chooseFormat",
                value: function (t) {
                  for (
                    var e, d = this, n = E(this.matchingFormats.slice());
                    !(e = n()).done;

                  ) {
                    var r = (function () {
                      var n = e.value;
                      return d.chosenFormat === n
                        ? "break"
                        : M.test(d.getFormatFormat(n, t.international))
                        ? d.createTemplateForFormat(n, t)
                          ? ((d.chosenFormat = n), "break")
                          : ((d.matchingFormats = d.matchingFormats.filter(
                              function (t) {
                                return t !== n;
                              }
                            )),
                            "continue")
                        : "continue";
                    })();
                    if ("break" === r) break;
                    if ("continue" === r) continue;
                  }
                  return (
                    this.chosenFormat || this.resetFormat(), this.chosenFormat
                  );
                },
              },
              {
                key: "createTemplateForFormat",
                value: function (t, e) {
                  if (!(t.pattern().indexOf("|") >= 0)) {
                    var d = this.getTemplateForFormat(t, e);
                    if (d) return this.setNationalNumberTemplate(d, e), !0;
                  }
                },
              },
              {
                key: "getSeparatorAfterNationalPrefix",
                value: function (t) {
                  return this.isNANP ||
                    (t &&
                      t.nationalPrefixFormattingRule() &&
                      T.test(t.nationalPrefixFormattingRule()))
                    ? " "
                    : "";
                },
              },
              {
                key: "getInternationalPrefixBeforeCountryCallingCode",
                value: function (t, e) {
                  var d = t.IDDPrefix,
                    n = t.missingPlus;
                  return d
                    ? e && !1 === e.spacing
                      ? d
                      : d + " "
                    : n
                    ? ""
                    : "+";
                },
              },
              {
                key: "getTemplate",
                value: function (t) {
                  if (this.template) {
                    for (
                      var e = -1,
                        d = 0,
                        n = t.international
                          ? this.getInternationalPrefixBeforeCountryCallingCode(
                              t,
                              { spacing: !1 }
                            )
                          : "";
                      d <
                      n.length + t.getDigitsWithoutInternationalPrefix().length;

                    )
                      (e = this.template.indexOf("x", e + 1)), d++;
                    return s(this.template, e + 1);
                  }
                },
              },
              {
                key: "setNationalNumberTemplate",
                value: function (t, e) {
                  (this.nationalNumberTemplate = t),
                    (this.populatedNationalNumberTemplate = t),
                    (this.populatedNationalNumberTemplatePosition = -1),
                    e.international
                      ? (this.template =
                          this.getInternationalPrefixBeforeCountryCallingCode(
                            e
                          ).replace(/[\d\+]/g, "x") +
                          l("x", e.callingCode.length) +
                          " " +
                          t)
                      : (this.template = t);
                },
              },
              {
                key: "getTemplateForFormat",
                value: function (t, e) {
                  var d,
                    n = e.nationalSignificantNumber,
                    r = e.international,
                    a = e.nationalPrefix,
                    i = e.complexPrefixBeforeNationalSignificantNumber,
                    o = t.pattern();
                  o = o
                    .replace(/\[([^\[\]])*\]/g, "\\d")
                    .replace(/\d(?=[^,}][^,}])/g, "\\d");
                  var $ = w.match(o)[0];
                  if (!(n.length > $.length)) {
                    var u = RegExp("^" + o + "$"),
                      s = n.replace(/\d/g, "9");
                    u.test(s) && ($ = s);
                    var c = this.getFormatFormat(t, r);
                    if (
                      this.shouldTryNationalPrefixFormattingRule(t, {
                        international: r,
                        nationalPrefix: a,
                      })
                    ) {
                      var g = c.replace(h.i, t.nationalPrefixFormattingRule());
                      if (
                        (0, f.ZP)(t.nationalPrefixFormattingRule()) ===
                          (a || "") + (0, f.ZP)("$1") &&
                        ((c = g), (d = !0), a)
                      )
                        for (var m = a.length; m > 0; )
                          (c = c.replace(/\d/, "x")), m--;
                    }
                    var y = $.replace(new RegExp(o), c).replace(/9/g, "x");
                    return (
                      !d &&
                        (i
                          ? (y = l("x", i.length) + " " + y)
                          : a &&
                            (y =
                              l("x", a.length) +
                              this.getSeparatorAfterNationalPrefix(t) +
                              y)),
                      r && (y = (0, S.Z)(y)),
                      y
                    );
                  }
                },
              },
              {
                key: "formatNextNationalNumberDigits",
                value: function (t) {
                  var e = (function (t, e, d) {
                    for (
                      var n,
                        r = (function (t, e) {
                          var d =
                            ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t["@@iterator"];
                          if (d) return (d = d.call(t)).next.bind(d);
                          if (
                            Array.isArray(t) ||
                            (d = (function (t, e) {
                              if (t) {
                                if ("string" == typeof t) return $(t, e);
                                var d = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                if (
                                  ("Object" === d &&
                                    t.constructor &&
                                    (d = t.constructor.name),
                                  "Map" === d || "Set" === d)
                                )
                                  return Array.from(t);
                                if (
                                  "Arguments" === d ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    d
                                  )
                                )
                                  return $(t, e);
                              }
                            })(t))
                          ) {
                            d && (t = d);
                            var n = 0;
                            return function () {
                              return n >= t.length
                                ? { done: !0 }
                                : { done: !1, value: t[n++] };
                            };
                          }
                          throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })(d.split(""));
                      !(n = r()).done;

                    ) {
                      var a = n.value;
                      if (0 > t.slice(e + 1).search(u)) return;
                      (e = t.search(u)), (t = t.replace(u, a));
                    }
                    return [t, e];
                  })(
                    this.populatedNationalNumberTemplate,
                    this.populatedNationalNumberTemplatePosition,
                    t
                  );
                  if (!e) {
                    this.resetFormat();
                    return;
                  }
                  return (
                    (this.populatedNationalNumberTemplate = e[0]),
                    (this.populatedNationalNumberTemplatePosition = e[1]),
                    s(
                      this.populatedNationalNumberTemplate,
                      this.populatedNationalNumberTemplatePosition + 1
                    )
                  );
                },
              },
              {
                key: "shouldTryNationalPrefixFormattingRule",
                value: function (t, e) {
                  var d = e.international,
                    n = e.nationalPrefix;
                  if (t.nationalPrefixFormattingRule()) {
                    var r = t.usesNationalPrefix();
                    if ((r && n) || (!r && !d)) return !0;
                  }
                },
              },
            ]),
            A(d.prototype, t),
            e && A(d, e),
            Object.defineProperty(d, "prototype", { writable: !1 }),
            d
          );
        })(),
        k = d(3661),
        R = d(9471),
        D = d(5227),
        j = d(3633);
      function L(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var d,
              n,
              r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
            if (null != r) {
              var a = [],
                i = !0,
                o = !1;
              try {
                for (
                  r = r.call(t);
                  !(i = (d = r.next()).done) &&
                  (a.push(d.value), !e || a.length !== e);
                  i = !0
                );
              } catch (t) {
                (o = !0), (n = t);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Z(t, e);
              var d = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === d && t.constructor && (d = t.constructor.name),
                "Map" === d || "Set" === d)
              )
                return Array.from(t);
              if (
                "Arguments" === d ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
              )
                return Z(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function G(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var B = RegExp("^[" + O.uv + O.xc + "]+$", "i"),
        _ = "(?:[" + O.xy + "][" + O.uv + O.xc + "]*|[" + O.uv + O.xc + "]+)",
        U = RegExp("[^" + O.uv + O.xc + "]+.*$"),
        K = /[^\d\[\]]/,
        W = (function () {
          var t, e;
          function d(t) {
            var e = t.defaultCountry,
              n = t.defaultCallingCode,
              r = t.metadata,
              a = t.onNationalSignificantNumberChange;
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, d),
              (this.defaultCountry = e),
              (this.defaultCallingCode = n),
              (this.metadata = r),
              (this.onNationalSignificantNumberChange = a);
          }
          return (
            (t = [
              {
                key: "input",
                value: function (t, e) {
                  var d,
                    n,
                    r,
                    a,
                    i,
                    o = L(
                      ((r = (n = L(
                        "+" ===
                          (d =
                            (function (t) {
                              var e,
                                d = t.search(_);
                              if (!(d < 0))
                                return (
                                  "+" === (t = t.slice(d))[0] &&
                                    ((e = !0), (t = t.slice(1))),
                                  (t = t.replace(U, "")),
                                  e && (t = "+" + t),
                                  t
                                );
                            })(t) || "")[0]
                          ? [d.slice(1), !0]
                          : [d],
                        2
                      ))[0]),
                      (a = n[1]),
                      B.test(r) || (r = ""),
                      [r, a]),
                      2
                    ),
                    $ = o[0],
                    u = o[1],
                    l = (0, f.ZP)($);
                  return (
                    !u ||
                      e.digits ||
                      (e.startInternationalNumber(), l || (i = !0)),
                    l && this.inputDigits(l, e),
                    { digits: l, justLeadingPlus: i }
                  );
                },
              },
              {
                key: "inputDigits",
                value: function (t, e) {
                  var d = e.digits,
                    n = d.length < 3 && d.length + t.length >= 3;
                  if (
                    (e.appendDigits(t),
                    n && this.extractIddPrefix(e),
                    this.isWaitingForCountryCallingCode(e))
                  ) {
                    if (!this.extractCountryCallingCode(e)) return;
                  } else e.appendNationalSignificantNumberDigits(t);
                  e.international ||
                    this.hasExtractedNationalSignificantNumber ||
                    this.extractNationalSignificantNumber(
                      e.getNationalDigits(),
                      function (t) {
                        return e.update(t);
                      }
                    );
                },
              },
              {
                key: "isWaitingForCountryCallingCode",
                value: function (t) {
                  var e = t.international,
                    d = t.callingCode;
                  return e && !d;
                },
              },
              {
                key: "extractCountryCallingCode",
                value: function (t) {
                  var e = (0, k.Z)(
                      "+" + t.getDigitsWithoutInternationalPrefix(),
                      this.defaultCountry,
                      this.defaultCallingCode,
                      this.metadata.metadata
                    ),
                    d = e.countryCallingCode,
                    n = e.number;
                  if (d)
                    return (
                      t.setCallingCode(d),
                      t.update({ nationalSignificantNumber: n }),
                      !0
                    );
                },
              },
              {
                key: "reset",
                value: function (t) {
                  if (t) {
                    this.hasSelectedNumberingPlan = !0;
                    var e = t._nationalPrefixForParsing();
                    this.couldPossiblyExtractAnotherNationalSignificantNumber =
                      e && K.test(e);
                  } else
                    (this.hasSelectedNumberingPlan = void 0),
                      (this.couldPossiblyExtractAnotherNationalSignificantNumber =
                        void 0);
                },
              },
              {
                key: "extractNationalSignificantNumber",
                value: function (t, e) {
                  if (this.hasSelectedNumberingPlan) {
                    var d = (0, D.Z)(t, this.metadata),
                      n = d.nationalPrefix,
                      r = d.nationalNumber,
                      a = d.carrierCode;
                    if (r !== t)
                      return this.onExtractedNationalNumber(n, a, r, t, e), !0;
                  }
                },
              },
              {
                key: "extractAnotherNationalSignificantNumber",
                value: function (t, e, d) {
                  if (!this.hasExtractedNationalSignificantNumber)
                    return this.extractNationalSignificantNumber(t, d);
                  if (
                    this.couldPossiblyExtractAnotherNationalSignificantNumber
                  ) {
                    var n = (0, D.Z)(t, this.metadata),
                      r = n.nationalPrefix,
                      a = n.nationalNumber,
                      i = n.carrierCode;
                    if (a !== e)
                      return this.onExtractedNationalNumber(r, i, a, t, d), !0;
                  }
                },
              },
              {
                key: "onExtractedNationalNumber",
                value: function (t, e, d, n, r) {
                  var a,
                    i,
                    o = n.lastIndexOf(d);
                  if (o >= 0 && o === n.length - d.length) {
                    i = !0;
                    var $ = n.slice(0, o);
                    $ !== t && (a = $);
                  }
                  r({
                    nationalPrefix: t,
                    carrierCode: e,
                    nationalSignificantNumber: d,
                    nationalSignificantNumberMatchesInput: i,
                    complexPrefixBeforeNationalSignificantNumber: a,
                  }),
                    (this.hasExtractedNationalSignificantNumber = !0),
                    this.onNationalSignificantNumberChange();
                },
              },
              {
                key: "reExtractNationalSignificantNumber",
                value: function (t) {
                  return (
                    !!this.extractAnotherNationalSignificantNumber(
                      t.getNationalDigits(),
                      t.nationalSignificantNumber,
                      function (e) {
                        return t.update(e);
                      }
                    ) ||
                    (this.extractIddPrefix(t) || this.fixMissingPlus(t)
                      ? (this.extractCallingCodeAndNationalSignificantNumber(t),
                        !0)
                      : void 0)
                  );
                },
              },
              {
                key: "extractIddPrefix",
                value: function (t) {
                  var e = t.international,
                    d = t.IDDPrefix,
                    n = t.digits;
                  if ((t.nationalSignificantNumber, !e && !d)) {
                    var r = (0, j.Z)(
                      n,
                      this.defaultCountry,
                      this.defaultCallingCode,
                      this.metadata.metadata
                    );
                    if (void 0 !== r && r !== n)
                      return (
                        t.update({
                          IDDPrefix: n.slice(0, n.length - r.length),
                        }),
                        this.startInternationalNumber(t, {
                          country: void 0,
                          callingCode: void 0,
                        }),
                        !0
                      );
                  }
                },
              },
              {
                key: "fixMissingPlus",
                value: function (t) {
                  if (!t.international) {
                    var e = (0, R.Z)(
                        t.digits,
                        this.defaultCountry,
                        this.defaultCallingCode,
                        this.metadata.metadata
                      ),
                      d = e.countryCallingCode;
                    if ((e.number, d))
                      return (
                        t.update({ missingPlus: !0 }),
                        this.startInternationalNumber(t, {
                          country: t.country,
                          callingCode: d,
                        }),
                        !0
                      );
                  }
                },
              },
              {
                key: "startInternationalNumber",
                value: function (t, e) {
                  var d = e.country,
                    n = e.callingCode;
                  t.startInternationalNumber(d, n),
                    t.nationalSignificantNumber &&
                      (t.resetNationalSignificantNumber(),
                      this.onNationalSignificantNumberChange(),
                      (this.hasExtractedNationalSignificantNumber = void 0));
                },
              },
              {
                key: "extractCallingCodeAndNationalSignificantNumber",
                value: function (t) {
                  this.extractCountryCallingCode(t) &&
                    this.extractNationalSignificantNumber(
                      t.getNationalDigits(),
                      function (e) {
                        return t.update(e);
                      }
                    );
                },
              },
            ]),
            G(d.prototype, t),
            e && G(d, e),
            Object.defineProperty(d, "prototype", { writable: !1 }),
            d
          );
        })(),
        H = d(2691),
        V = d(9287),
        Y = d(3398);
      function J(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function X(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var Q = (function () {
        var t, e;
        function d(t, e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, d),
            (this.metadata = new r.ZP(e));
          var n,
            a =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((n = this.getCountryAndCallingCode(t))) ||
              (function (t, e) {
                var d,
                  n,
                  r =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                if (null != r) {
                  var a = [],
                    i = !0,
                    o = !1;
                  try {
                    for (
                      r = r.call(t);
                      !(i = (d = r.next()).done) &&
                      (a.push(d.value), !e || a.length !== e);
                      i = !0
                    );
                  } catch (t) {
                    (o = !0), (n = t);
                  } finally {
                    try {
                      i || null == r.return || r.return();
                    } finally {
                      if (o) throw n;
                    }
                  }
                  return a;
                }
              })(n, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return J(t, e);
                  var d = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === d &&
                      t.constructor &&
                      (d = t.constructor.name),
                    "Map" === d || "Set" === d)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === d ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                  )
                    return J(t, e);
                }
              })(n, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            i = a[0],
            o = a[1];
          (this.defaultCountry = i),
            (this.defaultCallingCode = o),
            this.reset();
        }
        return (
          (t = [
            {
              key: "getCountryAndCallingCode",
              value: function (t) {
                var e, d;
                return (
                  t &&
                    ((0, Y.Z)(t)
                      ? ((e = t.defaultCountry), (d = t.defaultCallingCode))
                      : (e = t)),
                  e && !this.metadata.hasCountry(e) && (e = void 0),
                  [e, d]
                );
              },
            },
            {
              key: "input",
              value: function (t) {
                var e = this.parser.input(t, this.state),
                  d = e.digits;
                if (e.justLeadingPlus) this.formattedOutput = "+";
                else if (d) {
                  if (
                    (this.determineTheCountryIfNeeded(),
                    this.state.nationalSignificantNumber &&
                      this.formatter.narrowDownMatchingFormats(this.state),
                    this.metadata.hasSelectedNumberingPlan() &&
                      (n = this.formatter.format(d, this.state)),
                    void 0 === n &&
                      this.parser.reExtractNationalSignificantNumber(
                        this.state
                      ))
                  ) {
                    this.determineTheCountryIfNeeded();
                    var n,
                      r = this.state.getNationalDigits();
                    r && (n = this.formatter.format(r, this.state));
                  }
                  this.formattedOutput = n
                    ? this.getFullNumber(n)
                    : this.getNonFormattedNumber();
                }
                return this.formattedOutput;
              },
            },
            {
              key: "reset",
              value: function () {
                var t = this;
                return (
                  (this.state = new o({
                    onCountryChange: function (e) {
                      t.country = e;
                    },
                    onCallingCodeChange: function (e, d) {
                      t.metadata.selectNumberingPlan(d, e),
                        t.formatter.reset(t.metadata.numberingPlan, t.state),
                        t.parser.reset(t.metadata.numberingPlan);
                    },
                  })),
                  (this.formatter = new F({
                    state: this.state,
                    metadata: this.metadata,
                  })),
                  (this.parser = new W({
                    defaultCountry: this.defaultCountry,
                    defaultCallingCode: this.defaultCallingCode,
                    metadata: this.metadata,
                    state: this.state,
                    onNationalSignificantNumberChange: function () {
                      t.determineTheCountryIfNeeded(),
                        t.formatter.reset(t.metadata.numberingPlan, t.state);
                    },
                  })),
                  this.state.reset({
                    country: this.defaultCountry,
                    callingCode: this.defaultCallingCode,
                  }),
                  (this.formattedOutput = ""),
                  this
                );
              },
            },
            {
              key: "isInternational",
              value: function () {
                return this.state.international;
              },
            },
            {
              key: "getCallingCode",
              value: function () {
                if (this.isInternational()) return this.state.callingCode;
              },
            },
            {
              key: "getCountryCallingCode",
              value: function () {
                return this.getCallingCode();
              },
            },
            {
              key: "getCountry",
              value: function () {
                if (this.state.digits) return this._getCountry();
              },
            },
            {
              key: "_getCountry",
              value: function () {
                return this.state.country;
              },
            },
            {
              key: "determineTheCountryIfNeeded",
              value: function () {
                (!this.state.country || this.isCountryCallingCodeAmbiguous()) &&
                  this.determineTheCountry();
              },
            },
            {
              key: "getFullNumber",
              value: function (t) {
                var e = this;
                if (this.isInternational()) {
                  var d,
                    n = this.state.callingCode;
                  return (
                    (d = n
                      ? t
                        ? "".concat(n, " ").concat(t)
                        : n
                      : "".concat(
                          this.state.getDigitsWithoutInternationalPrefix()
                        )),
                    e.formatter.getInternationalPrefixBeforeCountryCallingCode(
                      e.state,
                      { spacing: !!d }
                    ) + d
                  );
                }
                return t;
              },
            },
            {
              key: "getNonFormattedNationalNumberWithPrefix",
              value: function () {
                var t = this.state,
                  e = t.nationalSignificantNumber,
                  d = t.complexPrefixBeforeNationalSignificantNumber,
                  n = t.nationalPrefix,
                  r = e,
                  a = d || n;
                return a && (r = a + r), r;
              },
            },
            {
              key: "getNonFormattedNumber",
              value: function () {
                var t = this.state.nationalSignificantNumberMatchesInput;
                return this.getFullNumber(
                  t
                    ? this.getNonFormattedNationalNumberWithPrefix()
                    : this.state.getNationalDigits()
                );
              },
            },
            {
              key: "getNonFormattedTemplate",
              value: function () {
                var t = this.getNonFormattedNumber();
                if (t) return t.replace(/[\+\d]/g, "x");
              },
            },
            {
              key: "isCountryCallingCodeAmbiguous",
              value: function () {
                var t = this.state.callingCode,
                  e = this.metadata.getCountryCodesForCallingCode(t);
                return e && e.length > 1;
              },
            },
            {
              key: "determineTheCountry",
              value: function () {
                this.state.setCountry(
                  (0, H.Z)(
                    this.isInternational()
                      ? this.state.callingCode
                      : this.defaultCallingCode,
                    {
                      nationalNumber: this.state.nationalSignificantNumber,
                      defaultCountry: this.defaultCountry,
                      metadata: this.metadata,
                    }
                  )
                );
              },
            },
            {
              key: "getNumberValue",
              value: function () {
                var t = this.state,
                  e = t.digits,
                  d = t.callingCode,
                  n = t.country,
                  r = t.nationalSignificantNumber;
                if (e) {
                  if (this.isInternational()) return d ? "+" + d + r : "+" + e;
                  if (n || d)
                    return (
                      "+" + (n ? this.metadata.countryCallingCode() : d) + r
                    );
                }
              },
            },
            {
              key: "getNumber",
              value: function () {
                var t = this.state,
                  e = t.nationalSignificantNumber,
                  d = t.carrierCode,
                  n = t.callingCode,
                  i = this._getCountry();
                if (e && (i || n)) {
                  if (i && i === this.defaultCountry) {
                    var o = new r.ZP(this.metadata.metadata);
                    o.selectNumberingPlan(i);
                    var $ = o.numberingPlan.callingCode(),
                      u = this.metadata.getCountryCodesForCallingCode($);
                    if (u.length > 1) {
                      var l = (0, V.Z)(e, {
                        countries: u,
                        defaultCountry: this.defaultCountry,
                        metadata: this.metadata.metadata,
                      });
                      l && (i = l);
                    }
                  }
                  var s = new a.Z(i || n, e, this.metadata.metadata);
                  return d && (s.carrierCode = d), s;
                }
              },
            },
            {
              key: "isPossible",
              value: function () {
                var t = this.getNumber();
                return !!t && t.isPossible();
              },
            },
            {
              key: "isValid",
              value: function () {
                var t = this.getNumber();
                return !!t && t.isValid();
              },
            },
            {
              key: "getNationalNumber",
              value: function () {
                return this.state.nationalSignificantNumber;
              },
            },
            {
              key: "getChars",
              value: function () {
                return (
                  (this.state.international ? "+" : "") + this.state.digits
                );
              },
            },
            {
              key: "getTemplate",
              value: function () {
                return (
                  this.formatter.getTemplate(this.state) ||
                  this.getNonFormattedTemplate() ||
                  ""
                );
              },
            },
          ]),
          X(d.prototype, t),
          e && X(d, e),
          Object.defineProperty(d, "prototype", { writable: !1 }),
          d
        );
      })();
      function q(t) {
        return Q.call(this, t, n.Z);
      }
      (q.prototype = Object.create(Q.prototype, {})),
        (q.prototype.constructor = q);
    },
    4613: function (t, e, d) {
      d.d(e, {
        L: function () {
          return i;
        },
      });
      var n = d(2324),
        r = d(5946);
      function a(t, e, d) {
        if (e[t]) return new r.Z(t, e[t], d);
      }
      function i() {
        return (0, n.Z)(a, arguments);
      }
    },
    306: function (t, e, d) {
      d.d(e, {
        S: function () {
          return V;
        },
      });
      var n = d(2324),
        r = d(3398);
      function a(t, e) {
        var d = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            d.push.apply(d, n);
        }
        return d;
      }
      function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      var o = d(5619);
      function $(t) {
        return ($ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u(t, e) {
        for (var d = 0; d < e.length; d++) {
          var n = e[d];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function l(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function s(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (s = function (t) {
          if (
            null === t ||
            -1 === Function.toString.call(t).indexOf("[native code]")
          )
            return t;
          if ("function" != typeof t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, d);
          }
          function d() {
            return c(t, arguments, g(this).constructor);
          }
          return (
            (d.prototype = Object.create(t.prototype, {
              constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            h(d, t)
          );
        })(t);
      }
      function c(t, e, d) {
        return (c = f()
          ? Reflect.construct
          : function (t, e, d) {
              var n = [null];
              n.push.apply(n, e);
              var r = new (Function.bind.apply(t, n))();
              return d && h(r, d.prototype), r;
            }).apply(null, arguments);
      }
      function f() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function h(t, e) {
        return (h =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function g(t) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var m = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && h(t, e);
          })(a, t);
          var e,
            d,
            n,
            r =
              ((e = f()),
              function () {
                var t,
                  d = g(a);
                if (e) {
                  var n = g(this).constructor;
                  t = Reflect.construct(d, arguments, n);
                } else t = d.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === $(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return l(t);
                })(this, t);
              });
          function a(t) {
            var e;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, a),
              Object.setPrototypeOf(l((e = r.call(this, t))), a.prototype),
              (e.name = e.constructor.name),
              e
            );
          }
          return (
            d && u(a.prototype, d),
            n && u(a, n),
            Object.defineProperty(a, "prototype", { writable: !1 }),
            a
          );
        })(s(Error)),
        y = d(7691),
        p = function (t) {
          return "([".concat(o.xc, "]{1,").concat(t, "})");
        };
      function v(t) {
        var e = "[ \xa0\\t,]*",
          d = "[:\\.．]?[ \xa0\\t,-]*",
          n = "[ \xa0\\t]*";
        return (
          ";ext=" +
          p("20") +
          "|" +
          (e + "(?:e?xt(?:ensi(?:ó?|\xf3))?n?|ｅ?ｘｔｎ?|доб|anexo)" + d) +
          p("20") +
          "#?|" +
          (e + "(?:[xｘ#＃~～]|int|ｉｎｔ)" + d) +
          p("9") +
          "#?|[- ]+" +
          p("6") +
          "#|" +
          (n + "(?:,{2}|;)" + d) +
          p("15") +
          "#?|" +
          (n + "(?:,)+" + d) +
          p("9") +
          "#?"
        );
      }
      var b = "[" + o.xc + "]{" + o.ex + "}",
        C =
          "[" +
          o.xy +
          "]{0,1}(?:[" +
          o.uv +
          "]*[" +
          o.xc +
          "]){3,}[" +
          o.uv +
          o.xc +
          "]*",
        N = RegExp(
          "^[" + o.xy + "]{0,1}(?:[" + o.uv + "]*[" + o.xc + "]){1,2}$",
          "i"
        ),
        P = RegExp("^" + b + "$|^" + (C + "(?:") + v() + ")?$", "i"),
        x = RegExp("(?:" + v() + ")$", "i"),
        O = d(9233);
      function S(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var d = 0, n = Array(e); d < e; d++) n[d] = t[d];
        return n;
      }
      function E(t) {
        for (
          var e,
            d = "",
            n = (function (t, e) {
              var d =
                ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
              if (d) return (d = d.call(t)).next.bind(d);
              if (
                Array.isArray(t) ||
                (d = (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return S(t, e);
                    var d = Object.prototype.toString.call(t).slice(8, -1);
                    if (
                      ("Object" === d &&
                        t.constructor &&
                        (d = t.constructor.name),
                      "Map" === d || "Set" === d)
                    )
                      return Array.from(t);
                    if (
                      "Arguments" === d ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                    )
                      return S(t, e);
                  }
                })(t))
              ) {
                d && (t = d);
                var n = 0;
                return function () {
                  return n >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[n++] };
                };
              }
              throw TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(t.split(""));
          !(e = n()).done;

        ) {
          var r = e.value;
          d +=
            (function (t, e) {
              if ("+" === t) {
                if (e) return;
                return "+";
              }
              return (0, O.xh)(t);
            })(r, d) || "";
        }
        return d;
      }
      var I = d(6829),
        A = d(5946),
        w = d(1316),
        T = d(3661),
        M = d(7428),
        F = d(2691),
        k = "([" + o.xc + "]|[\\-\\.\\(\\)]?)",
        R = RegExp("^\\+" + k + "*[" + o.xc + "]" + k + "*$", "g"),
        D = o.xc,
        j = RegExp(
          "^([" +
            D +
            "]+((\\-)*[" +
            D +
            "])*\\.)*[a-zA-Z]+((\\-)*[" +
            D +
            "])*\\.?$",
          "g"
        ),
        L = "tel:",
        Z = ";phone-context=",
        G = RegExp("[" + o.xy + o.xc + "]"),
        B = RegExp("[^" + o.xc + "#]+$");
      function _(t, e) {
        var d = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            d.push.apply(d, n);
        }
        return d;
      }
      function U(t) {
        for (var e = 1; e < arguments.length; e++) {
          var d = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(d), !0).forEach(function (e) {
                var n;
                (n = d[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(d))
            : _(Object(d)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(d, e)
                );
              });
        }
        return t;
      }
      function K(t, e) {
        var d = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            d.push.apply(d, n);
        }
        return d;
      }
      function W(t) {
        for (var e = 1; e < arguments.length; e++) {
          var d = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? K(Object(d), !0).forEach(function (e) {
                var n;
                (n = d[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(d))
            : K(Object(d)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(d, e)
                );
              });
        }
        return t;
      }
      function H() {
        var t = (function (t) {
          var e,
            d,
            n,
            o,
            $ =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = Array.prototype.slice.call(t))) ||
              (function (t, e) {
                var d,
                  n,
                  r =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                if (null != r) {
                  var a = [],
                    i = !0,
                    o = !1;
                  try {
                    for (
                      r = r.call(t);
                      !(i = (d = r.next()).done) &&
                      (a.push(d.value), !e || a.length !== e);
                      i = !0
                    );
                  } catch (t) {
                    (o = !0), (n = t);
                  } finally {
                    try {
                      i || null == r.return || r.return();
                    } finally {
                      if (o) throw n;
                    }
                  }
                  return a;
                }
              })(e, 4) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return i(t, e);
                  var d = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === d &&
                      t.constructor &&
                      (d = t.constructor.name),
                    "Map" === d || "Set" === d)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === d ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                  )
                    return i(t, e);
                }
              })(e, 4) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            u = $[0],
            l = $[1],
            s = $[2],
            c = $[3];
          if ("string" == typeof u) d = u;
          else throw TypeError("A text for parsing must be a string.");
          if (l && "string" != typeof l) {
            if ((0, r.Z)(l)) s ? ((n = l), (o = s)) : (o = l);
            else throw Error("Invalid second argument: ".concat(l));
          } else
            c ? ((n = s), (o = c)) : ((n = void 0), (o = s)),
              l &&
                (n = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var d = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? a(Object(d), !0).forEach(function (e) {
                          var n;
                          (n = d[e]),
                            e in t
                              ? Object.defineProperty(t, e, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (t[e] = n);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(d)
                        )
                      : a(Object(d)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(d, e)
                          );
                        });
                  }
                  return t;
                })({ defaultCountry: l }, n));
          return { text: d, options: n, metadata: o };
        })(arguments);
        return (function (t, e, d) {
          e &&
            e.defaultCountry &&
            !(0, y.aS)(e.defaultCountry, d) &&
            (e = W(W({}, e), {}, { defaultCountry: void 0 }));
          try {
            var n;
            return (
              (n = e),
              (function (t, e, d) {
                if (
                  ((e = e || {}),
                  (d = new y.ZP(d)),
                  e.defaultCountry && !d.hasCountry(e.defaultCountry))
                ) {
                  if (e.v2) throw new m("INVALID_COUNTRY");
                  throw Error("Unknown country: ".concat(e.defaultCountry));
                }
                var n,
                  r = (function (t, e, d) {
                    var n = (function (t, e) {
                      var d = e.extractFormattedPhoneNumber,
                        n = (function (t) {
                          var e = t.indexOf(Z);
                          if (e < 0) return null;
                          var d = e + Z.length;
                          if (d >= t.length) return "";
                          var n = t.indexOf(";", d);
                          return n >= 0 ? t.substring(d, n) : t.substring(d);
                        })(t);
                      if (
                        !(
                          null === n ||
                          (0 !== n.length && (R.test(n) || j.test(n)))
                        )
                      )
                        throw new m("NOT_A_NUMBER");
                      if (null === n) r = d(t) || "";
                      else {
                        (r = ""), "+" === n.charAt(0) && (r += n);
                        var r,
                          a,
                          i = t.indexOf(L);
                        a = i >= 0 ? i + L.length : 0;
                        var o = t.indexOf(Z);
                        r += t.substring(a, o);
                      }
                      var $ = r.indexOf(";isub=");
                      if (($ > 0 && (r = r.substring(0, $)), "" !== r))
                        return r;
                    })(t, {
                      extractFormattedPhoneNumber: function (t) {
                        return (function (t, e, d) {
                          if (t) {
                            if (t.length > 250) {
                              if (d) throw new m("TOO_LONG");
                              return;
                            }
                            if (!1 === e) return t;
                            var n = t.search(G);
                            if (!(n < 0)) return t.slice(n).replace(B, "");
                          }
                        })(t, d, e);
                      },
                    });
                    if (!n) return {};
                    if (!(n.length >= o.ex && P.test(n)))
                      return N.test(n) ? { error: "TOO_SHORT" } : {};
                    var r = (function (t) {
                      var e = t.search(x);
                      if (e < 0) return {};
                      for (
                        var d = t.slice(0, e), n = t.match(x), r = 1;
                        r < n.length;

                      ) {
                        if (n[r]) return { number: d, ext: n[r] };
                        r++;
                      }
                    })(n);
                    return r.ext ? r : { number: n };
                  })(t, e.v2, e.extract),
                  a = r.number,
                  i = r.ext,
                  $ = r.error;
                if (!a) {
                  if (e.v2) {
                    if ("TOO_SHORT" === $) throw new m("TOO_SHORT");
                    throw new m("NOT_A_NUMBER");
                  }
                  return {};
                }
                var u = (function (t, e, d, n) {
                    var r,
                      a = (0, T.Z)(E(t), e, d, n.metadata),
                      i = a.countryCallingCodeSource,
                      o = a.countryCallingCode,
                      $ = a.number;
                    if (o) n.selectNumberingPlan(o);
                    else {
                      if (!$ || (!e && !d)) return {};
                      n.selectNumberingPlan(e, d),
                        e && (r = e),
                        (o = d || (0, y.Gg)(e, n.metadata));
                    }
                    if (!$)
                      return {
                        countryCallingCodeSource: i,
                        countryCallingCode: o,
                      };
                    var u = (0, M.Z)(E($), n),
                      l = u.nationalNumber,
                      s = u.carrierCode,
                      c = (0, F.Z)(o, {
                        nationalNumber: l,
                        defaultCountry: e,
                        metadata: n,
                      });
                    return (
                      c && ((r = c), "001" === c || n.country(r)),
                      {
                        country: r,
                        countryCallingCode: o,
                        countryCallingCodeSource: i,
                        nationalNumber: l,
                        carrierCode: s,
                      }
                    );
                  })(a, e.defaultCountry, e.defaultCallingCode, d),
                  l = u.country,
                  s = u.nationalNumber,
                  c = u.countryCallingCode,
                  f = u.countryCallingCodeSource,
                  h = u.carrierCode;
                if (!d.hasSelectedNumberingPlan()) {
                  if (e.v2) throw new m("INVALID_COUNTRY");
                  return {};
                }
                if (!s || s.length < o.ex) {
                  if (e.v2) throw new m("TOO_SHORT");
                  return {};
                }
                if (s.length > o.sJ) {
                  if (e.v2) throw new m("TOO_LONG");
                  return {};
                }
                if (e.v2) {
                  var g = new A.Z(c, s, d.metadata);
                  return (
                    l && (g.country = l),
                    h && (g.carrierCode = h),
                    i && (g.ext = i),
                    (g.__countryCallingCodeSource = f),
                    g
                  );
                }
                var p =
                  (e.extended ? !!d.hasSelectedNumberingPlan() : !!l) &&
                  (0, w.Z)(s, d.nationalNumberPattern());
                return e.extended
                  ? {
                      country: l,
                      countryCallingCode: c,
                      carrierCode: h,
                      valid: p,
                      possible:
                        !!p ||
                        !!(
                          !0 === e.extended &&
                          d.possibleLengths() &&
                          (0, I.D)(s, d)
                        ),
                      phone: s,
                      ext: i,
                    }
                  : p
                  ? ((n = { country: l, phone: s }), i && (n.ext = i), n)
                  : {};
              })(t, U(U({}, n), {}, { v2: !0 }), d)
            );
          } catch (t) {
            if (t instanceof m);
            else throw t;
          }
        })(t.text, t.options, t.metadata);
      }
      function V() {
        return (0, n.Z)(H, arguments);
      }
    },
    2324: function (t, e, d) {
      d.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = d(8951);
      function r(t, e) {
        var d = Array.prototype.slice.call(e);
        return d.push(n.Z), t.apply(this, d);
      }
    },
  },
]);