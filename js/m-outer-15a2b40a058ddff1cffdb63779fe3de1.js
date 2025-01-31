!(function () {
  "use strict";
  var e = "https://m.stripe.network",
    n = window.location.hash,
    t = /preview=true/.test(n) ? "inner-preview.html" : "inner.html",
    o = document.createElement("iframe");
  o.src = "".concat(e, "/").concat(t).concat(n);
  var i = function (n) {
    if (n.origin === e) {
      var t = window.opener || window.parent || window;
      if (!t) return;
      t.postMessage(n.data, "*");
    } else o.contentWindow.postMessage(n.data, "*");
  };
  window.addEventListener
    ? window.addEventListener("message", i, !1)
    : window.attachEvent("onMessage", i),
    document.body && document.body.appendChild(o);
})();