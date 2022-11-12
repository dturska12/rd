!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    s = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    o = n.push,
    a = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = u.toString,
    h = d.call(Object),
    p = {},
    f = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    m = function (e) {
      return null != e && e === e.window;
    },
    g = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      r,
      s = (n = n || g).createElement("script");
    if (((s.text = e), t))
      for (i in v)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          s.setAttribute(i, r);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var _ = "3.6.0",
    w = function (e, t) {
      return new w.fn.init(e, t);
    };
  function x(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !f(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (w.fn = w.prototype = {
    jquery: _,
    constructor: w,
    length: 0,
    toArray: function () {
      return r.call(this);
    },
    get: function (e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        w.grep(this, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: o,
    sort: n.sort,
    splice: n.splice
  }),
    (w.extend = w.fn.extend = function () {
      var e,
        t,
        n,
        i,
        r,
        s,
        o = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof o && ((c = o), (o = arguments[a] || {}), a++),
          "object" == typeof o || f(o) || (o = {}),
          a === l && ((o = this), a--);
        a < l;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (i = e[t]),
              "__proto__" !== t &&
                o !== i &&
                (c && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                  ? ((n = o[t]),
                    (s =
                      r && !Array.isArray(n)
                        ? []
                        : r || w.isPlainObject(n)
                        ? n
                        : {}),
                    (r = !1),
                    (o[t] = w.extend(c, s, i)))
                  : void 0 !== i && (o[t] = i));
      return o;
    }),
    w.extend({
      expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = u.call(t, "constructor") && t.constructor) ||
              d.call(n) !== h))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (x(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : o.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : a.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
          !t(e[r], r) !== o && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          o = 0,
          a = [];
        if (x(e))
          for (i = e.length; o < i; o++)
            null != (r = t(e[o], o, n)) && a.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
        return s(a);
      },
      guid: 1,
      support: p
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var E = (function (e) {
    var t,
      n,
      i,
      r,
      s,
      o,
      a,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      m,
      g,
      v,
      y,
      b,
      _ = "sizzle" + 1 * new Date(),
      w = e.document,
      x = 0,
      E = 0,
      T = le(),
      A = le(),
      k = le(),
      C = le(),
      S = function (e, t) {
        return e === t && (d = !0), 0;
      },
      D = {}.hasOwnProperty,
      L = [],
      N = L.pop,
      j = L.push,
      O = L.push,
      I = L.slice,
      M = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      q = "[\\x20\\t\\r\\n\\f]",
      H =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        q +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      R =
        "\\[" +
        q +
        "*(" +
        H +
        ")(?:" +
        q +
        "*([*^$|!~]?=)" +
        q +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        H +
        "))|)" +
        q +
        "*\\]",
      F =
        ":(" +
        H +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        R +
        ")*)|.*)\\)|)",
      z = new RegExp(q + "+", "g"),
      B = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
      W = new RegExp("^" + q + "*," + q + "*"),
      $ = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
      U = new RegExp(q + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + H + "$"),
      Y = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            q +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            q +
            "*(?:([+-]|)" +
            q +
            "*(\\d+)|))" +
            q +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            q +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            q +
            "*((?:-\\d)?\\d*)" +
            q +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      Q = /HTML$/i,
      J = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      G = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      se = function () {
        h();
      },
      oe = _e(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((L = I.call(w.childNodes)), w.childNodes);
    } catch (t) {
      O = {
        apply: L.length
          ? function (e, t) {
              j.apply(e, I.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            }
      };
    }
    function ae(e, t, i, r) {
      var s,
        a,
        c,
        u,
        d,
        f,
        v,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i;
      if (!r && (h(t), (t = t || p), m)) {
        if (11 !== w && (d = Z.exec(e)))
          if ((s = d[1])) {
            if (9 === w) {
              if (!(c = t.getElementById(s))) return i;
              if (c.id === s) return i.push(c), i;
            } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s)
              return i.push(c), i;
          } else {
            if (d[2]) return O.apply(i, t.getElementsByTagName(e)), i;
            if (
              (s = d[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(i, t.getElementsByClassName(s)), i;
          }
        if (
          n.qsa &&
          !C[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== w || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === w && (U.test(e) || $.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                ((u = t.getAttribute("id"))
                  ? (u = u.replace(ie, re))
                  : t.setAttribute("id", (u = _))),
                a = (f = o(e)).length;
              a--;

            )
              f[a] = (u ? "#" + u : ":scope") + " " + be(f[a]);
            v = f.join(",");
          }
          try {
            return O.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            C(e, !0);
          } finally {
            u === _ && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(B, "$1"), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function ce(e) {
      return (e[_] = !0), e;
    }
    function ue(e) {
      var t = p.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function he(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function fe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function me(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (n, i) {
            for (var r, s = e([], n.length, t), o = s.length; o--; )
              n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (s = ae.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !Q.test((e && e.namespaceURI) || (t && t.nodeName) || "HTML");
    }),
    (h = ae.setDocument = function (e) {
      var t,
        r,
        o = e ? e.ownerDocument || e : w;
      return (
        o != p &&
          9 === o.nodeType &&
          o.documentElement &&
          ((f = (p = o).documentElement),
          (m = !s(p)),
          w != p &&
            (r = p.defaultView) &&
            r.top !== r &&
            (r.addEventListener
              ? r.addEventListener("unload", se, !1)
              : r.attachEvent && r.attachEvent("onunload", se)),
          (n.scope = ue(function (e) {
            return (
              f.appendChild(e).appendChild(p.createElement("div")),
              void 0 !== e.querySelectorAll &&
                !e.querySelectorAll(":scope fieldset div").length
            );
          })),
          (n.attributes = ue(function (e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (n.getElementsByTagName = ue(function (e) {
            return (
              e.appendChild(p.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (n.getElementsByClassName = G.test(p.getElementsByClassName)),
          (n.getById = ue(function (e) {
            return (
              (f.appendChild(e).id = _),
              !p.getElementsByName || !p.getElementsByName(_).length
            );
          })),
          n.getById
            ? ((i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              }),
              (i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n,
                    i,
                    r,
                    s = t.getElementById(e);
                  if (s) {
                    if ((n = s.getAttributeNode("id")) && n.value === e)
                      return [s];
                    for (r = t.getElementsByName(e), i = 0; (s = r[i++]); )
                      if ((n = s.getAttributeNode("id")) && n.value === e)
                        return [s];
                  }
                  return [];
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  i = [],
                  r = 0,
                  s = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return s;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function (e, t) {
              if (void 0 !== t.getElementsByClassName && m)
                return t.getElementsByClassName(e);
            }),
          (v = []),
          (g = []),
          (n.qsa = G.test(p.querySelectorAll)) &&
            (ue(function (e) {
              var t;
              (f.appendChild(e).innerHTML =
                "<a id='" +
                _ +
                "'></a><select id='" +
                _ +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  g.push("[*^$]=" + q + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  g.push("\\[" + q + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                (t = p.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  g.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + _ + "+*").length ||
                  g.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                g.push("[\\r\\n\\f]");
            }),
            ue(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = p.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  g.push("name" + q + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length &&
                  g.push(":enabled", ":disabled"),
                (f.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:");
            })),
          (n.matchesSelector = G.test(
            (y =
              f.matches ||
              f.webkitMatchesSelector ||
              f.mozMatchesSelector ||
              f.oMatchesSelector ||
              f.msMatchesSelector)
          )) &&
            ue(function (e) {
              (n.disconnectedMatch = y.call(e, "*")),
                y.call(e, "[s!='']:x"),
                v.push("!=", F);
            }),
          (g = g.length && new RegExp(g.join("|"))),
          (v = v.length && new RegExp(v.join("|"))),
          (t = G.test(f.compareDocumentPosition)),
          (b =
            t || G.test(f.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (S = t
            ? function (e, t) {
                if (e === t) return (d = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 &
                    (i =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e == p || (e.ownerDocument == w && b(w, e))
                      ? -1
                      : t == p || (t.ownerDocument == w && b(w, t))
                      ? 1
                      : u
                      ? M(u, e) - M(u, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (d = !0), 0;
                var n,
                  i = 0,
                  r = e.parentNode,
                  s = t.parentNode,
                  o = [e],
                  a = [t];
                if (!r || !s)
                  return e == p
                    ? -1
                    : t == p
                    ? 1
                    : r
                    ? -1
                    : s
                    ? 1
                    : u
                    ? M(u, e) - M(u, t)
                    : 0;
                if (r === s) return he(e, t);
                for (n = e; (n = n.parentNode); ) o.unshift(n);
                for (n = t; (n = n.parentNode); ) a.unshift(n);
                for (; o[i] === a[i]; ) i++;
                return i ? he(o[i], a[i]) : o[i] == w ? -1 : a[i] == w ? 1 : 0;
              })),
        p
      );
    }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        (h(e),
        n.matchesSelector &&
          m &&
          !C[t + " "] &&
          (!v || !v.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          C(t, !0);
        }
      return 0 < ae(t, p, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) != p && h(e), b(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) != p && h(e);
      var r = i.attrHandle[t.toLowerCase()],
        s = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
      return void 0 !== s
        ? s
        : n.attributes || !m
        ? e.getAttribute(t)
        : (s = e.getAttributeNode(t)) && s.specified
        ? s.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, re);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        s = 0;
      if (
        ((d = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(S),
        d)
      ) {
        for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (u = null), e;
    }),
    (r = ae.getText = function (e) {
      var t,
        n = "",
        i = 0,
        s = e.nodeType;
      if (s) {
        if (1 === s || 9 === s || 11 === s) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
        } else if (3 === s || 4 === s) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += r(t);
      return n;
    }),
    ((i = ae.selectors = {
      cacheLength: 50,
      createPseudo: ce,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || ae.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && ae.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return Y.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  X.test(n) &&
                  (t = o(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = T[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
              T(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (e, t, n) {
          return function (i) {
            var r = ae.attr(i, e);
            return null == r
              ? "!=" === t
              : !t ||
                  ((r += ""),
                  "=" === t
                    ? r === n
                    : "!=" === t
                    ? r !== n
                    : "^=" === t
                    ? n && 0 === r.indexOf(n)
                    : "*=" === t
                    ? n && -1 < r.indexOf(n)
                    : "$=" === t
                    ? n && r.slice(-n.length) === n
                    : "~=" === t
                    ? -1 < (" " + r.replace(z, " ") + " ").indexOf(n)
                    : "|=" === t &&
                      (r === n || r.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function (e, t, n, i, r) {
          var s = "nth" !== e.slice(0, 3),
            o = "last" !== e.slice(-4),
            a = "of-type" === t;
          return 1 === i && 0 === r
            ? function (e) {
                return !!e.parentNode;
              }
            : function (t, n, l) {
                var c,
                  u,
                  d,
                  h,
                  p,
                  f,
                  m = s !== o ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;
                if (g) {
                  if (s) {
                    for (; m; ) {
                      for (h = t; (h = h[m]); )
                        if (
                          a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType
                        )
                          return !1;
                      f = m = "only" === e && !f && "nextSibling";
                    }
                    return !0;
                  }
                  if (((f = [o ? g.firstChild : g.lastChild]), o && y)) {
                    for (
                      b =
                        (p =
                          (c =
                            (u =
                              (d = (h = g)[_] || (h[_] = {}))[h.uniqueID] ||
                              (d[h.uniqueID] = {}))[e] || [])[0] === x &&
                          c[1]) && c[2],
                        h = p && g.childNodes[p];
                      (h = (++p && h && h[m]) || (b = p = 0) || f.pop());

                    )
                      if (1 === h.nodeType && ++b && h === t) {
                        u[e] = [x, p, b];
                        break;
                      }
                  } else if (
                    (y &&
                      (b = p =
                        (c =
                          (u =
                            (d = (h = t)[_] || (h[_] = {}))[h.uniqueID] ||
                            (d[h.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                    !1 === b)
                  )
                    for (
                      ;
                      (h = (++p && h && h[m]) || (b = p = 0) || f.pop()) &&
                      ((a
                        ? h.nodeName.toLowerCase() !== v
                        : 1 !== h.nodeType) ||
                        !++b ||
                        (y &&
                          ((u =
                            (d = h[_] || (h[_] = {}))[h.uniqueID] ||
                            (d[h.uniqueID] = {}))[e] = [x, b]),
                        h !== t));

                    );
                  return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                }
              };
        },
        PSEUDO: function (e, t) {
          var n,
            r =
              i.pseudos[e] ||
              i.setFilters[e.toLowerCase()] ||
              ae.error("unsupported pseudo: " + e);
          return r[_]
            ? r(t)
            : 1 < r.length
            ? ((n = [e, e, "", t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? ce(function (e, n) {
                    for (var i, s = r(e, t), o = s.length; o--; )
                      e[(i = M(e, s[o]))] = !(n[i] = s[o]);
                  })
                : function (e) {
                    return r(e, 0, n);
                  })
            : r;
        }
      },
      pseudos: {
        not: ce(function (e) {
          var t = [],
            n = [],
            i = a(e.replace(B, "$1"));
          return i[_]
            ? ce(function (e, t, n, r) {
                for (var s, o = i(e, null, r, []), a = e.length; a--; )
                  (s = o[a]) && (e[a] = !(t[a] = s));
              })
            : function (e, r, s) {
                return (t[0] = e), i(t, null, s, n), (t[0] = null), !n.pop();
              };
        }),
        has: ce(function (e) {
          return function (t) {
            return 0 < ae(e, t).length;
          };
        }),
        contains: ce(function (e) {
          return (
            (e = e.replace(te, ne)),
            function (t) {
              return -1 < (t.textContent || r(t)).indexOf(e);
            }
          );
        }),
        lang: ce(function (e) {
          return (
            V.test(e || "") || ae.error("unsupported lang: " + e),
            (e = e.replace(te, ne).toLowerCase()),
            function (t) {
              var n;
              do {
                if (
                  (n = m
                    ? t.lang
                    : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                )
                  return (
                    (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  );
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === f;
        },
        focus: function (e) {
          return (
            e === p.activeElement &&
            (!p.hasFocus || p.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: me(!1),
        disabled: me(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          return !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return K.test(e.nodeName);
        },
        input: function (e) {
          return J.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: ge(function () {
          return [0];
        }),
        last: ge(function (e, t) {
          return [t - 1];
        }),
        eq: ge(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ge(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ge(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ge(function (e, t, n) {
          for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
          return e;
        }),
        gt: ge(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        })
      }
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = pe(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function _e(e, t, n) {
      var i = t.dir,
        r = t.next,
        s = r || i,
        o = n && "parentNode" === s,
        a = E++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              d,
              h = [x, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || o)
                  if (
                    ((u =
                      (d = t[_] || (t[_] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[s]) && c[0] === x && c[1] === a)
                      return (h[2] = c[2]);
                    if (((u[s] = h)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function xe(e, t, n, i, r) {
      for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (s = e[a]) && ((n && !n(s, i, r)) || (o.push(s), c && t.push(a)));
      return o;
    }
    function Ee(e, t, n, i, r, s) {
      return (
        i && !i[_] && (i = Ee(i)),
        r && !r[_] && (r = Ee(r, s)),
        ce(function (s, o, a, l) {
          var c,
            u,
            d,
            h = [],
            p = [],
            f = o.length,
            m =
              s ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            g = !e || (!s && t) ? m : xe(m, h, e, a, l),
            v = n ? (r || (s ? e : f || i) ? [] : o) : g;
          if ((n && n(g, v, a, l), i))
            for (c = xe(v, p), i(c, [], a, l), u = c.length; u--; )
              (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
          if (s) {
            if (r || e) {
              if (r) {
                for (c = [], u = v.length; u--; )
                  (d = v[u]) && c.push((g[u] = d));
                r(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (d = v[u]) &&
                  -1 < (c = r ? M(s, d) : h[u]) &&
                  (s[c] = !(o[c] = d));
            }
          } else (v = xe(v === o ? v.splice(f, v.length) : v)), r ? r(null, o, v, l) : O.apply(o, v);
        })
      );
    }
    function Te(e) {
      for (
        var t,
          n,
          r,
          s = e.length,
          o = i.relative[e[0].type],
          a = o || i.relative[" "],
          l = o ? 1 : 0,
          u = _e(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          d = _e(
            function (e) {
              return -1 < M(t, e);
            },
            a,
            !0
          ),
          h = [
            function (e, n, i) {
              var r =
                (!o && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
              return (t = null), r;
            }
          ];
        l < s;
        l++
      )
        if ((n = i.relative[e[l].type])) h = [_e(we(h), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
            for (r = ++l; r < s && !i.relative[e[r].type]; r++);
            return Ee(
              1 < l && we(h),
              1 < l &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              l < r && Te(e.slice(l, r)),
              r < s && Te((e = e.slice(r))),
              r < s && be(e)
            );
          }
          h.push(n);
        }
      return we(h);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (o = ae.tokenize = function (e, t) {
        var n,
          r,
          s,
          o,
          a,
          l,
          c,
          u = A[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (a = e, l = [], c = i.preFilter; a; ) {
          for (o in ((n && !(r = W.exec(a))) ||
            (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
          (n = !1),
          (r = $.exec(a)) &&
            ((n = r.shift()),
            s.push({ value: n, type: r[0].replace(B, " ") }),
            (a = a.slice(n.length))),
          i.filter))
            !(r = Y[o].exec(a)) ||
              (c[o] && !(r = c[o](r))) ||
              ((n = r.shift()),
              s.push({ value: n, type: o, matches: r }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? ae.error(e) : A(e, l).slice(0);
      }),
      (a = ae.compile = function (e, t) {
        var n,
          r,
          s,
          a,
          l,
          u,
          d = [],
          f = [],
          g = k[e + " "];
        if (!g) {
          for (t || (t = o(e)), n = t.length; n--; )
            (g = Te(t[n]))[_] ? d.push(g) : f.push(g);
          (g = k(
            e,
            ((r = f),
            (a = 0 < (s = d).length),
            (l = 0 < r.length),
            (u = function (e, t, n, o, u) {
              var d,
                f,
                g,
                v = 0,
                y = "0",
                b = e && [],
                _ = [],
                w = c,
                E = e || (l && i.find.TAG("*", u)),
                T = (x += null == w ? 1 : Math.random() || 0.1),
                A = E.length;
              for (
                u && (c = t == p || t || u);
                y !== A && null != (d = E[y]);
                y++
              ) {
                if (l && d) {
                  for (
                    f = 0, t || d.ownerDocument == p || (h(d), (n = !m));
                    (g = r[f++]);

                  )
                    if (g(d, t || p, n)) {
                      o.push(d);
                      break;
                    }
                  u && (x = T);
                }
                a && ((d = !g && d) && v--, e && b.push(d));
              }
              if (((v += y), a && y !== v)) {
                for (f = 0; (g = s[f++]); ) g(b, _, t, n);
                if (e) {
                  if (0 < v) for (; y--; ) b[y] || _[y] || (_[y] = N.call(o));
                  _ = xe(_);
                }
                O.apply(o, _),
                  u &&
                    !e &&
                    0 < _.length &&
                    1 < v + s.length &&
                    ae.uniqueSort(o);
              }
              return u && ((x = T), (c = w)), b;
            }),
            a ? ce(u) : u)
          )).selector = e;
        }
        return g;
      }),
      (l = ae.select = function (e, t, n, r) {
        var s,
          l,
          c,
          u,
          d,
          h = "function" == typeof e && e,
          p = !r && o((e = h.selector || e));
        if (((n = n || []), 1 === p.length)) {
          if (
            2 < (l = p[0] = p[0].slice(0)).length &&
            "ID" === (c = l[0]).type &&
            9 === t.nodeType &&
            m &&
            i.relative[l[1].type]
          ) {
            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
              return n;
            h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
          }
          for (
            s = Y.needsContext.test(e) ? 0 : l.length;
            s-- && !i.relative[(u = (c = l[s]).type)];

          )
            if (
              (d = i.find[u]) &&
              (r = d(
                c.matches[0].replace(te, ne),
                (ee.test(l[0].type) && ve(t.parentNode)) || t
              ))
            ) {
              if ((l.splice(s, 1), !(e = r.length && be(l))))
                return O.apply(n, r), n;
              break;
            }
        }
        return (
          (h || a(e, p))(
            r,
            t,
            !m,
            n,
            !t || (ee.test(e) && ve(t.parentNode)) || t
          ),
          n
        );
      }),
      (n.sortStable = _.split("").sort(S).join("") === _),
      (n.detectDuplicates = !!d),
      h(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        de("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        de("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        de(P, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var T = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    A = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = w.expr.match.needsContext;
  function C(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, t, n) {
    return f(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return -1 < a.call(t, e) !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
        return 1 < i ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1)
          .length;
      }
    });
  var L,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : N.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          (w.merge(
            this,
            w.parseHTML(
              i[1],
              (t = t instanceof w ? t[0] : t) && t.nodeType
                ? t.ownerDocument || t
                : g,
              !0
            )
          ),
          S.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) f(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : f(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (L = w(g));
  var j = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function I(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        s = [],
        o = "string" != typeof e && w(e);
      if (!k.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (o
                ? -1 < o.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              s.push(n);
              break;
            }
      return this.pushStack(1 < s.length ? w.uniqueSort(s) : s);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? a.call(w(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return I(e, "nextSibling");
        },
        prev: function (e) {
          return I(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return A((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return A(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (C(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        }
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var r = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = w.filter(i, r)),
            1 < this.length &&
              (O[e] || w.uniqueSort(r), j.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var M = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function H(e, t, n, i) {
    var r;
    try {
      e && f((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && f((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t;
    e =
      "string" == typeof e
        ? ((t = {}),
          w.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
          }),
          t)
        : w.extend({}, e);
    var n,
      i,
      r,
      s,
      o = [],
      a = [],
      l = -1,
      c = function () {
        for (s = s || e.once, r = n = !0; a.length; l = -1)
          for (i = a.shift(); ++l < o.length; )
            !1 === o[l].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((l = o.length), (i = !1));
        e.memory || (i = !1), (n = !1), s && (o = i ? [] : "");
      },
      u = {
        add: function () {
          return (
            o &&
              (i && !n && ((l = o.length - 1), a.push(i)),
              (function t(n) {
                w.each(n, function (n, i) {
                  f(i)
                    ? (e.unique && u.has(i)) || o.push(i)
                    : i && i.length && "string" !== b(i) && t(i);
                });
              })(arguments),
              i && !n && c()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, o, n)); )
                o.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, o) : 0 < o.length;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (s = a = []), (o = i = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (s = a = []), i || n || (o = i = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              a.push(t),
              n || c()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        }
      };
    return u;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var r = f(e[i[4]]) && e[i[4]];
                    s[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && f(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              var s = 0;
              function o(t, n, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < s)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        f(
                          (c =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then)
                        )
                          ? r
                            ? c.call(e, o(s, n, P, r), o(s, n, q, r))
                            : (s++,
                              c.call(
                                e,
                                o(s, n, P, r),
                                o(s, n, q, r),
                                o(s, n, P, n.notifyWith)
                              ))
                          : (i !== P && ((a = void 0), (l = [e])),
                            (r || n.resolveWith)(a, l));
                      }
                    },
                    u = r
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (c) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(c, u.stackTrace),
                              s <= t + 1 &&
                                (i !== q && ((a = void 0), (l = [c])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? u()
                    : (w.Deferred.getStackHook &&
                        (u.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(o(0, e, f(r) ? r : P, e.notifyWith)),
                    n[1][3].add(o(0, e, f(t) ? t : P)),
                    n[2][3].add(o(0, e, f(i) ? i : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, r) : r;
            }
          },
          s = {};
        return (
          w.each(n, function (e, t) {
            var o = t[2],
              a = t[5];
            (r[t[1]] = o.add),
              a &&
                o.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              o.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = o.fireWith);
          }),
          r.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          s = r.call(arguments),
          o = w.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (s[e] = 1 < arguments.length ? r.call(arguments) : n),
                --t || o.resolveWith(i, s);
            };
          };
        if (
          t <= 1 &&
          (H(e, o.done(a(n)).resolve, o.reject, !t),
          "pending" === o.state() || f(s[n] && s[n].then))
        )
          return o.then();
        for (; n--; ) H(s[n], a(n), o.reject);
        return o.promise();
      }
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      R.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  function z() {
    g.removeEventListener("DOMContentLoaded", z),
      e.removeEventListener("load", z),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          F.resolveWith(g, [w]);
      }
    }),
    (w.ready.then = F.then),
    "complete" === g.readyState ||
    ("loading" !== g.readyState && !g.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (g.addEventListener("DOMContentLoaded", z),
        e.addEventListener("load", z));
  var B = function (e, t, n, i, r, s, o) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === b(n))
        for (a in ((r = !0), n)) B(e, t, a, n[a], !0, s, o);
      else if (
        void 0 !== i &&
        ((r = !0),
        f(i) || (o = !0),
        c &&
          (o
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(w(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : s;
    },
    W = /^-ms-/,
    $ = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(W, "ms-").replace($, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[X(t)] = n;
        else for (i in t) r[X(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in i
              ? [t]
              : t.match(M) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      }
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    G = /[A-Z]/g;
  function Z(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(G, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : K.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    }
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          s = this[0],
          o = s && s.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = J.get(s)), 1 === s.nodeType && !Q.get(s, "hasDataAttrs"))
          ) {
            for (n = o.length; n--; )
              o[n] &&
                0 === (i = o[n].name).indexOf("data-") &&
                ((i = X(i.slice(5))), Z(s, i, r[i]));
            Q.set(s, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              J.set(this, e);
            })
          : B(
              this,
              function (t) {
                var n;
                if (s && void 0 === t)
                  return void 0 !== (n = J.get(s, e)) ||
                    void 0 !== (n = Z(s, e))
                    ? n
                    : void 0;
                this.each(function () {
                  J.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      }
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = Q.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || Array.isArray(n)
                ? (i = Q.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        var n = w.queue(e, (t = t || "fx")),
          i = n.length,
          r = n.shift(),
          s = w._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            r.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              s
            )),
          !i && s && s.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            })
          })
        );
      }
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = w.Deferred(),
          s = this,
          o = this.length,
          a = function () {
            --i || r.resolveWith(s, [s]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          o--;

        )
          (n = Q.get(s[o], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      }
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = g.documentElement,
    re = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    se = { composed: !0 };
  ie.getRootNode &&
    (re = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
      );
    });
  var oe = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && re(e) && "none" === w.css(e, "display"))
    );
  };
  function ae(e, t, n, i) {
    var r,
      s,
      o = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (w.cssNumber[t] || ("px" !== c && +l)) &&
        te.exec(w.css(e, t));
    if (u && u[3] !== c) {
      for (c = c || u[3], u = +(l /= 2) || 1; o--; )
        w.style(e, t, u + c),
          (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
          (u /= s);
      w.style(e, t, (u *= 2) + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = r))),
      r
    );
  }
  var le = {};
  function ce(e, t) {
    for (var n, i, r, s, o, a, l, c = [], u = 0, d = e.length; u < d; u++)
      (i = e[u]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((c[u] = Q.get(i, "display") || null),
              c[u] || (i.style.display = "")),
            "" === i.style.display &&
              oe(i) &&
              (c[u] =
                ((l = o = s = void 0),
                (o = (r = i).ownerDocument),
                (l = le[(a = r.nodeName)]) ||
                  ((s = o.body.appendChild(o.createElement(a))),
                  (l = w.css(s, "display")),
                  s.parentNode.removeChild(s),
                  "none" === l && (l = "block"),
                  (le[a] = l)))))
          : "none" !== n && ((c[u] = "none"), Q.set(i, "display", n)));
    for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            oe(this) ? w(this).show() : w(this).hide();
          });
    }
  });
  var ue,
    de,
    he = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    fe = /^$|^module$|\/(?:java|ecma)script/i;
  (ue = g.createDocumentFragment().appendChild(g.createElement("div"))),
    (de = g.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    ue.appendChild(de),
    (p.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = "<textarea>x</textarea>"),
    (p.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = "<option></option>"),
    (p.option = !!ue.lastChild);
  var me = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function ge(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && C(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td),
    p.option ||
      (me.optgroup = me.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
      ]);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, i, r) {
    for (
      var s,
        o,
        a,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        h = [],
        p = 0,
        f = e.length;
      p < f;
      p++
    )
      if ((s = e[p]) || 0 === s)
        if ("object" === b(s)) w.merge(h, s.nodeType ? [s] : s);
        else if (ye.test(s)) {
          for (
            o = o || d.appendChild(t.createElement("div")),
              a = (pe.exec(s) || ["", ""])[1].toLowerCase(),
              o.innerHTML =
                (l = me[a] || me._default)[1] + w.htmlPrefilter(s) + l[2],
              u = l[0];
            u--;

          )
            o = o.lastChild;
          w.merge(h, o.childNodes), ((o = d.firstChild).textContent = "");
        } else h.push(t.createTextNode(s));
    for (d.textContent = "", p = 0; (s = h[p++]); )
      if (i && -1 < w.inArray(s, i)) r && r.push(s);
      else if (
        ((c = re(s)), (o = ge(d.appendChild(s), "script")), c && ve(o), n)
      )
        for (u = 0; (s = o[u++]); ) fe.test(s.type || "") && n.push(s);
    return d;
  }
  var _e = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function () {
          try {
            return g.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Te(e, t, n, i, r, s) {
    var o, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Te(e, a, n, i, t[a], s);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = xe;
    else if (!r) return e;
    return (
      1 === s &&
        ((o = r),
        ((r = function (e) {
          return w().off(e), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, r, i, n);
      })
    );
  }
  function Ae(e, t, n) {
    n
      ? (Q.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              s,
              o = Q.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (o.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((o = r.call(arguments)),
                Q.set(this, t, o),
                (i = n(this, t)),
                this[t](),
                o !== (s = Q.get(this, t)) || i ? Q.set(this, t, !1) : (s = {}),
                o !== s)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), s && s.value
                );
            } else
              o.length &&
                (Q.set(this, t, {
                  value: w.event.trigger(
                    w.extend(o[0], w.Event.prototype),
                    o.slice(1),
                    this
                  )
                }),
                e.stopImmediatePropagation());
          }
        }))
      : void 0 === Q.get(e, t) && w.event.add(e, t, we);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var s,
        o,
        a,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g = Q.get(e);
      if (V(e))
        for (
          n.handler && ((n = (s = n).handler), (r = s.selector)),
            r && w.find.matchesSelector(ie, r),
            n.guid || (n.guid = w.guid++),
            (l = g.events) || (l = g.events = Object.create(null)),
            (o = g.handle) ||
              (o = g.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            c = (t = (t || "").match(M) || [""]).length;
          c--;

        )
          (p = m = (a = _e.exec(t[c]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            p &&
              ((d = w.event.special[p] || {}),
              (d =
                w.event.special[(p = (r ? d.delegateType : d.bindType) || p)] ||
                {}),
              (u = w.extend(
                {
                  type: p,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && w.expr.match.needsContext.test(r),
                  namespace: f.join(".")
                },
                s
              )),
              (h = l[p]) ||
                (((h = l[p] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, f, o)) ||
                  (e.addEventListener && e.addEventListener(p, o))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
              (w.event.global[p] = !0));
    },
    remove: function (e, t, n, i, r) {
      var s,
        o,
        a,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g = Q.hasData(e) && Q.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(M) || [""]).length; c--; )
          if (
            ((p = m = (a = _e.exec(t[c]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            p)
          ) {
            for (
              d = w.event.special[p] || {},
                h = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = s = h.length;
              s--;

            )
              (u = h[s]),
                (!r && m !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (h.splice(s, 1),
                  u.selector && h.delegateCount--,
                  d.remove && d.remove.call(e, u));
            o &&
              !h.length &&
              ((d.teardown && !1 !== d.teardown.call(e, f, g.handle)) ||
                w.removeEvent(e, p, g.handle),
              delete l[p]);
          } else for (p in l) w.event.remove(e, p + t[c], n, i, !0);
        w.isEmptyObject(l) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        s,
        o,
        a = new Array(arguments.length),
        l = w.event.fix(e),
        c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
        u = w.event.special[l.type] || {};
      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          o = w.event.handlers.call(this, l, c), t = 0;
          (r = o[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = r.elem, n = 0;
            (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== s.namespace &&
              !l.rnamespace.test(s.namespace)) ||
              ((l.handleObj = s),
              (l.data = s.data),
              void 0 !==
                (i = (
                  (w.event.special[s.origType] || {}).handle || s.handler
                ).apply(r.elem, a)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        s,
        o,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (s = [], o = {}, n = 0; n < l; n++)
              void 0 === o[(r = (i = t[n]).selector + " ")] &&
                (o[r] = i.needsContext
                  ? -1 < w(r, this).index(c)
                  : w.find(r, this, null, [c]).length),
                o[r] && s.push(i);
            s.length && a.push({ elem: c, handlers: s });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: f(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && C(t, "input") && Ae(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && C(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (he.test(t.type) &&
              t.click &&
              C(t, "input") &&
              Q.get(t, "click")) ||
            C(t, "a")
          );
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : xe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Ae(this, e, Ee), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t
      };
    }),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          }
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Te(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Te(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = xe),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      }
    });
  var ke = /<script|<style|<link/i,
    Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function De(e, t) {
    return (
      (C(e, "table") &&
        C(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Ne(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function je(e, t) {
    var n, i, r, s, o, a;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && (a = Q.get(e).events))
        for (r in (Q.remove(t, "handle events"), a))
          for (n = 0, i = a[r].length; n < i; n++) w.event.add(t, r, a[r][n]);
      J.hasData(e) && ((s = J.access(e)), (o = w.extend({}, s)), J.set(t, o));
    }
  }
  function Oe(e, t, n, i) {
    t = s(t);
    var r,
      o,
      a,
      l,
      c,
      u,
      d = 0,
      h = e.length,
      m = h - 1,
      g = t[0],
      v = f(g);
    if (v || (1 < h && "string" == typeof g && !p.checkClone && Ce.test(g)))
      return e.each(function (r) {
        var s = e.eq(r);
        v && (t[0] = g.call(this, r, s.html())), Oe(s, t, n, i);
      });
    if (
      h &&
      ((o = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = o),
      o || i)
    ) {
      for (l = (a = w.map(ge(r, "script"), Le)).length; d < h; d++)
        (c = r),
          d !== m &&
            ((c = w.clone(c, !0, !0)), l && w.merge(a, ge(c, "script"))),
          n.call(e[d], c, d);
      if (l)
        for (u = a[a.length - 1].ownerDocument, w.map(a, Ne), d = 0; d < l; d++)
          fe.test((c = a[d]).type || "") &&
            !Q.access(c, "globalEval") &&
            w.contains(u, c) &&
            (c.src && "module" !== (c.type || "").toLowerCase()
              ? w._evalUrl &&
                !c.noModule &&
                w._evalUrl(
                  c.src,
                  { nonce: c.nonce || c.getAttribute("nonce") },
                  u
                )
              : y(c.textContent.replace(Se, ""), c, u));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, s = 0; null != (i = r[s]); s++)
      n || 1 !== i.nodeType || w.cleanData(ge(i)),
        i.parentNode &&
          (n && re(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        s,
        o,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        d = re(e);
      if (
        !(
          p.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (o = ge(u), i = 0, r = (s = ge(e)).length; i < r; i++)
          (a = s[i]),
            "input" === (c = (l = o[i]).nodeName.toLowerCase()) &&
            he.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (s = s || ge(e), o = o || ge(u), i = 0, r = s.length; i < r; i++)
            je(s[i], o[i]);
        else je(e, u);
      return (
        0 < (o = ge(u, "script")).length && ve(o, !d && ge(e, "script")), u
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = w.event.special, s = 0; void 0 !== (n = e[s]); s++)
        if (V(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    }
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Oe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            De(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Oe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = De(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Oe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], r = w(e), s = r.length - 1, a = 0; a <= s; a++)
            (n = a === s ? this : this.clone(!0)),
              w(r[a])[t](n),
              o.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Pe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    qe = function (e, t, n) {
      var i,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
      return i;
    },
    He = new RegExp(ne.join("|"), "i");
  function Re(e, t, n) {
    var i,
      r,
      s,
      o,
      a = e.style;
    return (
      (n = n || Pe(e)) &&
        ("" !== (o = n.getPropertyValue(t) || n[t]) ||
          re(e) ||
          (o = w.style(e, t)),
        !p.pixelBoxStyles() &&
          Me.test(o) &&
          He.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (s = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = o),
          (o = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = s))),
      void 0 !== o ? o + "" : o
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (i = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (s = 12 === n(u.offsetWidth / 3)),
          ie.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      s,
      o,
      a,
      l,
      c = g.createElement("div"),
      u = g.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (p.clearCloneStyle = "content-box" === u.style.backgroundClip),
      w.extend(p, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), o;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), s;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == a &&
              ((t = g.createElement("table")),
              (n = g.createElement("tr")),
              (i = g.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              (i.style.display = "block"),
              ie.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                n.offsetHeight),
              ie.removeChild(t)),
            a
          );
        }
      }));
  })();
  var ze = ["Webkit", "Moz", "ms"],
    Be = g.createElement("div").style,
    We = {};
  function $e(e) {
    return (
      w.cssProps[e] ||
      We[e] ||
      (e in Be
        ? e
        : (We[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = ze.length;
                n--;

              )
                if ((e = ze[n] + t) in Be) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ye = { letterSpacing: "0", fontWeight: "400" };
  function Qe(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Je(e, t, n, i, r, s) {
    var o = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; o < 4; o += 2)
      "margin" === n && (l += w.css(e, n + ne[o], !0, r)),
        i
          ? ("content" === n && (l -= w.css(e, "padding" + ne[o], !0, r)),
            "margin" !== n &&
              (l -= w.css(e, "border" + ne[o] + "Width", !0, r)))
          : ((l += w.css(e, "padding" + ne[o], !0, r)),
            "padding" !== n
              ? (l += w.css(e, "border" + ne[o] + "Width", !0, r))
              : (a += w.css(e, "border" + ne[o] + "Width", !0, r)));
    return (
      !i &&
        0 <= s &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function Ke(e, t, n) {
    var i = Pe(e),
      r =
        (!p.boxSizingReliable() || n) &&
        "border-box" === w.css(e, "boxSizing", !1, i),
      s = r,
      o = Re(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(o)) {
      if (!n) return o;
      o = "auto";
    }
    return (
      ((!p.boxSizingReliable() && r) ||
        (!p.reliableTrDimensions() && C(e, "tr")) ||
        "auto" === o ||
        (!parseFloat(o) && "inline" === w.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === w.css(e, "boxSizing", !1, i)),
        (s = a in e) && (o = e[a])),
      (o = parseFloat(o) || 0) +
        Je(e, t, n || (r ? "border" : "content"), s, i, o) +
        "px"
    );
  }
  function Ge(e, t, n, i, r) {
    return new Ge.prototype.init(e, t, n, i, r);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Re(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          s,
          o,
          a = X(t),
          l = Xe.test(t),
          c = e.style;
        if (
          (l || (t = $e(a)), (o = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)
        )
          return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : c[t];
        "string" == (s = typeof n) &&
          (r = te.exec(n)) &&
          r[1] &&
          ((n = ae(e, t, r)), (s = "number")),
          null != n &&
            n == n &&
            ("number" !== s ||
              l ||
              (n += (r && r[3]) || (w.cssNumber[a] ? "" : "px")),
            p.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        s,
        o,
        a = X(t);
      return (
        Xe.test(t) || (t = $e(a)),
        (o = w.cssHooks[t] || w.cssHooks[a]) &&
          "get" in o &&
          (r = o.get(e, !0, n)),
        void 0 === r && (r = Re(e, t, i)),
        "normal" === r && t in Ye && (r = Ye[t]),
        "" === n || n
          ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
          : r
      );
    }
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ue.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ke(e, t, i)
              : qe(e, Ve, function () {
                  return Ke(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            s = Pe(e),
            o = !p.scrollboxSize() && "absolute" === s.position,
            a = (o || i) && "border-box" === w.css(e, "boxSizing", !1, s),
            l = i ? Je(e, t, i, a, s) : 0;
          return (
            a &&
              o &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(s[t]) -
                  Je(e, t, "border", !1, s) -
                  0.5
              )),
            l &&
              (r = te.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Qe(0, n, l)
          );
        }
      };
    }),
    (w.cssHooks.marginLeft = Fe(p.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Re(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              qe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + ne[i] + t] = s[i] || s[i - 2] || s[0];
          return r;
        }
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Qe);
    }),
    w.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var i,
              r,
              s = {},
              o = 0;
            if (Array.isArray(t)) {
              for (i = Pe(e), r = t.length; o < r; o++)
                s[t[o]] = w.css(e, t[o], !1, i);
              return s;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      }
    }),
    (((w.Tween = Ge).prototype = {
      constructor: Ge,
      init: function (e, t, n, i, r, s) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = s || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ge.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ge.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ge.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? w.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ge.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = Ge.prototype),
    ((Ge.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = Ge.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (w.fx = Ge.prototype.init),
    (w.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    it = /^(?:toggle|show|hide)$/,
    rt = /queueHooks$/;
  function st() {
    et &&
      (!1 === g.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(st)
        : e.setTimeout(st, w.fx.interval),
      w.fx.tick());
  }
  function ot() {
    return (
      e.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function at(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = ne[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function lt(e, t, n) {
    for (
      var i,
        r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
        s = 0,
        o = r.length;
      s < o;
      s++
    )
      if ((i = r[s].call(n, t, e))) return i;
  }
  function ct(e, t, n) {
    var i,
      r,
      s = 0,
      o = ct.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = Ze || ot(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            s = 0,
            o = c.tweens.length;
          s < o;
          s++
        )
          c.tweens[s].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && o
            ? n
            : (o || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || ot(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        }
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, r, s, o;
        for (n in e)
          if (
            ((r = t[(i = X(n))]),
            (s = e[n]),
            Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
            n !== i && ((e[i] = s), delete e[n]),
            (o = w.cssHooks[i]) && ("expand" in o))
          )
            for (n in ((s = o.expand(s)), delete e[i], s))
              (n in e) || ((e[n] = s[n]), (t[n] = r));
          else t[i] = r;
      })(u, c.opts.specialEasing);
      s < o;
      s++
    )
      if ((i = ct.prefilters[s].call(c, e, u, c.opts)))
        return (
          f(i.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      w.map(u, lt, c),
      f(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (w.Animation = w.extend(ct, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ae(n.elem, e, te.exec(t), n), n;
        }
      ]
    },
    tweener: function (e, t) {
      f(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, i = 0, r = e.length; i < r; i++)
        (ct.tweeners[(n = e[i])] = ct.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          s,
          o,
          a,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          h = this,
          p = {},
          f = e.style,
          m = e.nodeType && oe(e),
          g = Q.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (o = w._queueHooks(e, "fx")).unqueued &&
            ((o.unqueued = 0),
            (a = o.empty.fire),
            (o.empty.fire = function () {
              o.unqueued || a();
            })),
          o.unqueued++,
          h.always(function () {
            h.always(function () {
              o.unqueued--, w.queue(e, "fx").length || o.empty.fire();
            });
          })),
        t))
          if (it.test((r = t[i]))) {
            if (
              (delete t[i],
              (s = s || "toggle" === r),
              r === (m ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              m = !0;
            }
            p[i] = (g && g[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (c = g && g.display) && (c = Q.get(e, "display")),
            "none" === (u = w.css(e, "display")) &&
              (c
                ? (u = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (u = w.css(e, "display")),
                  ce([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === w.css(e, "float") &&
              (l ||
                (h.done(function () {
                  f.display = c;
                }),
                null == c && (c = "none" === (u = f.display) ? "" : u)),
              (f.display = "inline-block"))),
          n.overflow &&
            ((f.overflow = "hidden"),
            h.always(function () {
              (f.overflow = n.overflow[0]),
                (f.overflowX = n.overflow[1]),
                (f.overflowY = n.overflow[2]);
            })),
          (l = !1),
          p))
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = Q.access(e, "fxshow", { display: c })),
              s && (g.hidden = !m),
              m && ce([e], !0),
              h.done(function () {
                for (i in (m || ce([e]), Q.remove(e, "fxshow"), p))
                  w.style(e, i, p[i]);
              })),
              (l = lt(m ? g[i] : 0, i, h)),
              i in g ||
                ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
      }
    ],
    prefilter: function (e, t) {
      t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
    }
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (f(e) && e),
              duration: e,
              easing: (n && t) || (t && !f(t) && t)
            };
      return (
        w.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration =
              i.duration in w.fx.speeds
                ? w.fx.speeds[i.duration]
                : w.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          f(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(oe)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = w.isEmptyObject(e),
          s = w.speed(t, n, i),
          o = function () {
            var t = ct(this, w.extend({}, e), s);
            (r || Q.get(this, "finish")) && t.stop(!0);
          };
        return (
          (o.finish = o),
          r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              s = w.timers,
              o = Q.get(this);
            if (r) o[r] && o[r].stop && i(o[r]);
            else for (r in o) o[r] && o[r].stop && rt.test(r) && i(o[r]);
            for (r = s.length; r--; )
              s[r].elem !== this ||
                (null != e && s[r].queue !== e) ||
                (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Q.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              s = w.timers,
              o = i ? i.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = s.length;
              t--;

            )
              s[t].elem === this &&
                s[t].queue === e &&
                (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; t < o; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(at(t, !0), e, i, r);
      };
    }),
    w.each(
      {
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (Ze = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      et || ((et = !0), st());
    }),
    (w.fx.stop = function () {
      et = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        this.queue((n = n || "fx"), function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (tt = g.createElement("input")),
    (nt = g.createElement("select").appendChild(g.createElement("option"))),
    (tt.type = "checkbox"),
    (p.checkOn = "" !== tt.value),
    (p.optSelected = nt.selected),
    ((tt = g.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (p.radioValue = "t" === tt.value);
  var ut,
    dt = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return B(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          r,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === s && w.isXMLDoc(e)) ||
                (r =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? ut : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!p.radioValue && "radio" === t && C(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(M);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      }
    }),
    (ut = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = dt[t] || w.find.attr;
      dt[t] = function (e, t, i) {
        var r,
          s,
          o = t.toLowerCase();
        return (
          i ||
            ((s = dt[o]),
            (dt[o] = r),
            (r = null != n(e, t, i) ? o : null),
            (dt[o] = s)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    pt = /^(?:a|area)$/i;
  function ft(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function gt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return B(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          r,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && w.isXMLDoc(e)) ||
              (r = w.propHooks[(t = w.propFix[t] || t)]),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (pt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    p.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          return null;
        },
        set: function (e) {}
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          s,
          o,
          a,
          l = 0;
        if (f(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, mt(this)));
          });
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((r = mt(n)), (i = 1 === n.nodeType && " " + ft(r) + " "))) {
              for (o = 0; (s = t[o++]); )
                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              r !== (a = ft(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          s,
          o,
          a,
          l = 0;
        if (f(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, mt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((r = mt(n)), (i = 1 === n.nodeType && " " + ft(r) + " "))) {
              for (o = 0; (s = t[o++]); )
                for (; -1 < i.indexOf(" " + s + " "); )
                  i = i.replace(" " + s + " ", " ");
              r !== (a = ft(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : f(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, mt(this), t), t);
            })
          : this.each(function () {
              var t, r, s, o;
              if (i)
                for (r = 0, s = w(this), o = gt(e); (t = o[r++]); )
                  s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = mt(this)) && Q.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Q.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + ft(mt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      }
    });
  var vt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = f(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, w(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = w.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(vt, "")
          : null == n
          ? ""
          : n
        : void 0;
    }
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : ft(w.text(e));
          }
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              s = e.selectedIndex,
              o = "select-one" === e.type,
              a = o ? null : [],
              l = o ? s + 1 : r.length;
            for (i = s < 0 ? l : o ? s : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === s) &&
                !n.disabled &&
                (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, s = w.makeArray(t), o = r.length;
              o--;

            )
              ((i = r[o]).selected =
                -1 < w.inArray(w.valHooks.option.get(i), s)) && (n = !0);
            return n || (e.selectedIndex = -1), s;
          }
        }
      }
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < w.inArray(w(e).val(), t));
        }
      }),
        p.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (p.focusin = "onfocusin" in e);
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, r) {
      var s,
        o,
        a,
        l,
        c,
        d,
        h,
        p,
        v = [i || g],
        y = u.call(t, "type") ? t.type : t,
        b = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((o = p = a = i = i || g),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !yt.test(y + w.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[w.expando]
            ? t
            : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (h = w.event.special[y] || {}),
          r || !h.trigger || !1 !== h.trigger.apply(i, n)))
      ) {
        if (!r && !h.noBubble && !m(i)) {
          for (
            yt.test((l = h.delegateType || y) + y) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            v.push(o), (a = o);
          a === (i.ownerDocument || g) &&
            v.push(a.defaultView || a.parentWindow || e);
        }
        for (s = 0; (o = v[s++]) && !t.isPropagationStopped(); )
          (p = o),
            (t.type = 1 < s ? l : h.bindType || y),
            (d =
              (Q.get(o, "events") || Object.create(null))[t.type] &&
              Q.get(o, "handle")) && d.apply(o, n),
            (d = c && o[c]) &&
              d.apply &&
              V(o) &&
              ((t.result = d.apply(o, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (h._default && !1 !== h._default.apply(v.pop(), n)) ||
            !V(i) ||
            (c &&
              f(i[y]) &&
              !m(i) &&
              ((a = i[c]) && (i[c] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && p.addEventListener(y, bt),
              i[y](),
              t.isPropagationStopped() && p.removeEventListener(y, bt),
              (w.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(i, null, t);
    }
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      }
    }),
    p.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t);
            r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t) - 1;
            r
              ? Q.access(i, t, r)
              : (i.removeEventListener(e, n, !0), Q.remove(i, t));
          }
        };
      });
  var _t = e.location,
    wt = { guid: Date.now() },
    xt = /\?/;
  w.parseXML = function (t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {}
    return (
      (i = n && n.getElementsByTagName("parsererror")[0]),
      (n && !i) ||
        w.error(
          "Invalid XML: " +
            (i
              ? w
                  .map(i.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : t)
        ),
      n
    );
  };
  var Et = /\[\]$/,
    Tt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function Ct(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      w.each(t, function (t, r) {
        n || Et.test(e)
          ? i(e, r)
          : Ct(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== b(t)) i(e, t);
    else for (r in t) Ct(e + "[" + r + "]", t[r], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = f(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Ct(n, e[n], t, r);
    return i.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !he.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Tt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Tt, "\r\n") };
          })
          .get();
      }
    });
  var St = /%20/g,
    Dt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    jt = /^(?:GET|HEAD)$/,
    Ot = /^\/\//,
    It = {},
    Mt = {},
    Pt = "*/".concat("*"),
    qt = g.createElement("a");
  function Ht(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        s = t.toLowerCase().match(M) || [];
      if (f(n))
        for (; (i = s[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Rt(e, t, n, i) {
    var r = {},
      s = e === Mt;
    function o(a) {
      var l;
      return (
        (r[a] = !0),
        w.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || r[c]
            ? s
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    return o(t.dataTypes[0]) || (!r["*"] && o("*"));
  }
  function Ft(e, t) {
    var n,
      i,
      r = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (qt.href = _t.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _t.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          _t.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Pt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e);
      },
      ajaxPrefilter: Ht(It),
      ajaxTransport: Ht(Mt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0));
        var i,
          r,
          s,
          o,
          a,
          l,
          c,
          u,
          d,
          h,
          p = w.ajaxSetup({}, (n = n || {})),
          f = p.context || p,
          m = p.context && (f.nodeType || f.jquery) ? w(f) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = p.statusCode || {},
          _ = {},
          x = {},
          E = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!o)
                  for (o = {}; (t = Nt.exec(s)); )
                    o[t[1].toLowerCase() + " "] = (
                      o[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = o[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (_[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) T.always(e[T.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || E;
              return i && i.abort(t), A(0, t), this;
            }
          };
        if (
          (v.promise(T),
          (p.url = ((t || p.url || _t.href) + "").replace(
            Ot,
            _t.protocol + "//"
          )),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""]),
          null == p.crossDomain)
        ) {
          l = g.createElement("a");
          try {
            (l.href = p.url),
              (l.href = l.href),
              (p.crossDomain =
                qt.protocol + "//" + qt.host != l.protocol + "//" + l.host);
          } catch (t) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = w.param(p.data, p.traditional)),
          Rt(It, p, n, T),
          c)
        )
          return T;
        for (d in ((u = w.event && p.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !jt.test(p.type)),
        (r = p.url.replace(Dt, "")),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 ===
              (p.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (p.data = p.data.replace(St, "+"))
          : ((h = p.url.slice(r.length)),
            p.data &&
              (p.processData || "string" == typeof p.data) &&
              ((r += (xt.test(r) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              ((r = r.replace(Lt, "$1")),
              (h = (xt.test(r) ? "&" : "?") + "_=" + wt.guid++ + h)),
            (p.url = r + h)),
        p.ifModified &&
          (w.lastModified[r] &&
            T.setRequestHeader("If-Modified-Since", w.lastModified[r]),
          w.etag[r] && T.setRequestHeader("If-None-Match", w.etag[r])),
        ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
          T.setRequestHeader("Content-Type", p.contentType),
        T.setRequestHeader(
          "Accept",
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] +
                ("*" !== p.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
            : p.accepts["*"]
        ),
        p.headers))
          T.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, T, p) || c))
          return T.abort();
        if (
          ((E = "abort"),
          y.add(p.complete),
          T.done(p.success),
          T.fail(p.error),
          (i = Rt(Mt, p, n, T)))
        ) {
          if (((T.readyState = 1), u && m.trigger("ajaxSend", [T, p]), c))
            return T;
          p.async &&
            0 < p.timeout &&
            (a = e.setTimeout(function () {
              T.abort("timeout");
            }, p.timeout));
          try {
            (c = !1), i.send(_, A);
          } catch (t) {
            if (c) throw t;
            A(-1, t);
          }
        } else A(-1, "No Transport");
        function A(t, n, o, l) {
          var d,
            h,
            g,
            _,
            x,
            E = n;
          c ||
            ((c = !0),
            a && e.clearTimeout(a),
            (i = void 0),
            (s = l || ""),
            (T.readyState = 0 < t ? 4 : 0),
            (d = (200 <= t && t < 300) || 304 === t),
            o &&
              (_ = (function (e, t, n) {
                for (
                  var i, r, s, o, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) s = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      s = r;
                      break;
                    }
                    o || (o = r);
                  }
                  s = s || o;
                }
                if (s) return s !== l[0] && l.unshift(s), n[s];
              })(p, T, o)),
            !d &&
              -1 < w.inArray("script", p.dataTypes) &&
              w.inArray("json", p.dataTypes) < 0 &&
              (p.converters["text script"] = function () {}),
            (_ = (function (e, t, n, i) {
              var r,
                s,
                o,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
              for (s = u.shift(); s; )
                if (
                  (e.responseFields[s] && (n[e.responseFields[s]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = s),
                  (s = u.shift()))
                )
                  if ("*" === s) s = l;
                  else if ("*" !== l && l !== s) {
                    if (!(o = c[l + " " + s] || c["* " + s]))
                      for (r in c)
                        if (
                          (a = r.split(" "))[1] === s &&
                          (o = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === o
                            ? (o = c[r])
                            : !0 !== c[r] && ((s = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== o)
                      if (o && e.throws) t = o(t);
                      else
                        try {
                          t = o(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: o
                              ? e
                              : "No conversion from " + l + " to " + s
                          };
                        }
                  }
              return { state: "success", data: t };
            })(p, _, T, d)),
            d
              ? (p.ifModified &&
                  ((x = T.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[r] = x),
                  (x = T.getResponseHeader("etag")) && (w.etag[r] = x)),
                204 === t || "HEAD" === p.type
                  ? (E = "nocontent")
                  : 304 === t
                  ? (E = "notmodified")
                  : ((E = _.state), (h = _.data), (d = !(g = _.error))))
              : ((g = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || E) + ""),
            d ? v.resolveWith(f, [h, E, T]) : v.rejectWith(f, [T, E, g]),
            T.statusCode(b),
            (b = void 0),
            u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? h : g]),
            y.fireWith(f, [T, E]),
            u &&
              (m.trigger("ajaxComplete", [T, p]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      }
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, i, r) {
        return (
          f(n) && ((r = r || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    w.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (w._evalUrl = function (e, t, n) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, n);
        }
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (f(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return f(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = f(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var zt = { 0: 200, 1223: 204 },
    Bt = w.ajaxSettings.xhr();
  (p.cors = !!Bt && "withCredentials" in Bt),
    (p.ajax = Bt = !!Bt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (p.cors || (Bt && !t.crossDomain))
        return {
          send: function (r, s) {
            var o,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (o in t.xhrFields) a[o] = t.xhrFields[o];
            for (o in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              a.setRequestHeader(o, r[o]);
            (n = function (e) {
              return function () {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? s(0, "error")
                      : s(a.status, a.statusText)
                    : s(
                        zt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (r) {
              if (n) throw r;
            }
          },
          abort: function () {
            n && n();
          }
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        }
      }
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = w("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              g.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          }
        };
    });
  var Wt,
    $t = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = $t.pop() || w.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    }
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        s,
        o,
        a =
          !1 !== t.jsonp &&
          (Ut.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback = f(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Ut, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return o || w.error(r + " was not called"), o[0];
          }),
          (t.dataTypes[0] = "json"),
          (s = e[r]),
          (e[r] = function () {
            o = arguments;
          }),
          i.always(function () {
            void 0 === s ? w(e).removeProp(r) : (e[r] = s),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), $t.push(r)),
              o && f(s) && s(o[0]),
              (o = s = void 0);
          }),
          "script"
        );
    }),
    (p.createHTMLDocument =
      (((Wt = g.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Wt.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (p.createHTMLDocument
              ? (((i = (t = g.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = g.location.href),
                t.head.appendChild(i))
              : (t = g)),
          (s = !n && []),
          (r = S.exec(e))
            ? [t.createElement(r[1])]
            : ((r = be([e], t, s)),
              s && s.length && w(s).remove(),
              w.merge([], r.childNodes)));
      var i, r, s;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        r,
        s,
        o = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = ft(e.slice(a))), (e = e.slice(0, a))),
        f(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        0 < o.length &&
          w
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (s = arguments),
                o.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  o.each(function () {
                    n.apply(this, s || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          s,
          o,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (s = w.css(e, "top")),
          (l = w.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto")
            ? ((o = (i = u.position()).top), (r = i.left))
            : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
          f(t) && (t = t.call(e, n, w.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + o),
          null != t.left && (d.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, d) : u.css(d);
      }
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top:
                  (t = i.getBoundingClientRect()).top +
                  (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (r.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - w.css(i, "marginTop", !0),
            left: t.left - r.left - w.css(i, "marginLeft", !0)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || ie;
        });
      }
    }),
    w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      e,
      t
    ) {
      var n = "pageYOffset" === t;
      w.fn[e] = function (i) {
        return B(
          this,
          function (e, i, r) {
            var s;
            if (
              (m(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView),
              void 0 === r)
            )
              return s ? s[t] : e[i];
            s
              ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset)
              : (e[i] = r);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = Fe(p.pixelPosition, function (e, n) {
        if (n)
          return (n = Re(e, t)), Me.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
        n,
        i
      ) {
        w.fn[i] = function (r, s) {
          var o = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === s ? "margin" : "border");
          return B(
            this,
            function (t, n, r) {
              var s;
              return m(t)
                ? 0 === i.indexOf("outer")
                  ? t["inner" + e]
                  : t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((s = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    s["scroll" + e],
                    t.body["offset" + e],
                    s["offset" + e],
                    s["client" + e]
                  ))
                : void 0 === r
                ? w.css(t, n, a)
                : w.style(t, n, r, a);
            },
            t,
            o ? r : void 0,
            o
          );
        };
      });
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var n, i, s;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), f(e)))
      return (
        (i = r.call(arguments, 2)),
        ((s = function () {
          return e.apply(t || this, i.concat(r.call(arguments)));
        }).guid = e.guid = e.guid || w.guid++),
        s
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = C),
    (w.isFunction = f),
    (w.isWindow = m),
    (w.camelCase = X),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Vt = e.jQuery,
    Yt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Vt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t(require("@popperjs/core")))
      : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], t)
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).bootstrap = t(e.Popper));
  })(this, function (e) {
    "use strict";
    var t = (function (e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if ("default" !== n) {
              var i = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      }
                    }
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    })(e);
    const n = {
        find: (e, t = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e, t = document.documentElement) =>
          Element.prototype.querySelector.call(t, e),
        children: (e, t) =>
          [].concat(...e.children).filter((e) => e.matches(t)),
        parents(e, t) {
          const n = [];
          let i = e.parentNode;
          for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
            i.matches(t) && n.push(i), (i = i.parentNode);
          return n;
        },
        prev(e, t) {
          let n = e.previousElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.previousElementSibling;
          }
          return [];
        },
        next(e, t) {
          let n = e.nextElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.nextElementSibling;
          }
          return [];
        }
      },
      i = (e) => {
        do {
          e += Math.floor(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      },
      r = (e) => {
        let t = e.getAttribute("data-bs-target");
        if (!t || "#" === t) {
          let n = e.getAttribute("href");
          if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
          n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]),
            (t = n && "#" !== n ? n.trim() : null);
        }
        return t;
      },
      s = (e) => {
        const t = r(e);
        return t && document.querySelector(t) ? t : null;
      },
      o = (e) => {
        const t = r(e);
        return t ? document.querySelector(t) : null;
      },
      a = (e) => {
        e.dispatchEvent(new Event("transitionend"));
      },
      l = (e) =>
        !(!e || "object" != typeof e) &&
        (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
      c = (e) =>
        l(e)
          ? e.jquery
            ? e[0]
            : e
          : "string" == typeof e && e.length > 0
          ? n.findOne(e)
          : null,
      u = (e, t, n) => {
        Object.keys(n).forEach((i) => {
          const r = n[i],
            s = t[i],
            o =
              s && l(s)
                ? "element"
                : null == (a = s)
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          var a;
          if (!new RegExp(r).test(o))
            throw new TypeError(
              `${e.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`
            );
        });
      },
      d = (e) =>
        !(!l(e) || 0 === e.getClientRects().length) &&
        "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      h = (e) =>
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        !!e.classList.contains("disabled") ||
        (void 0 !== e.disabled
          ? e.disabled
          : e.hasAttribute("disabled") &&
            "false" !== e.getAttribute("disabled")),
      p = (e) => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof e.getRootNode) {
          const t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? p(e.parentNode)
          : null;
      },
      f = () => {},
      m = (e) => e.offsetHeight,
      g = () => {
        const { jQuery: e } = window;
        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
      },
      v = [],
      y = () => "rtl" === document.documentElement.dir,
      b = (e) => {
        var t;
        (t = () => {
          const t = g();
          if (t) {
            const n = e.NAME,
              i = t.fn[n];
            (t.fn[n] = e.jQueryInterface),
              (t.fn[n].Constructor = e),
              (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
          }
        }),
          "loading" === document.readyState
            ? (v.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  v.forEach((e) => e());
                }),
              v.push(t))
            : t();
      },
      _ = (e) => {
        "function" == typeof e && e();
      },
      w = (e, t, n = !0) => {
        if (!n) return void _(e);
        const i =
          ((e) => {
            if (!e) return 0;
            let {
              transitionDuration: t,
              transitionDelay: n
            } = window.getComputedStyle(e);
            const i = Number.parseFloat(t),
              r = Number.parseFloat(n);
            return i || r
              ? ((t = t.split(",")[0]),
                (n = n.split(",")[0]),
                1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
              : 0;
          })(t) + 5;
        let r = !1;
        const s = ({ target: n }) => {
          n === t &&
            ((r = !0), t.removeEventListener("transitionend", s), _(e));
        };
        t.addEventListener("transitionend", s),
          setTimeout(() => {
            r || a(t);
          }, i);
      },
      x = (e, t, n, i) => {
        let r = e.indexOf(t);
        if (-1 === r) return e[!n && i ? e.length - 1 : 0];
        const s = e.length;
        return (
          (r += n ? 1 : -1),
          i && (r = (r + s) % s),
          e[Math.max(0, Math.min(r, s - 1))]
        );
      },
      E = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      A = /::\d+$/,
      k = {};
    let C = 1;
    const S = { mouseenter: "mouseover", mouseleave: "mouseout" },
      D = /^(mouseenter|mouseleave)/i,
      L = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
      ]);
    function N(e, t) {
      return (t && `${t}::${C++}`) || e.uidEvent || C++;
    }
    function j(e) {
      const t = N(e);
      return (e.uidEvent = t), (k[t] = k[t] || {}), k[t];
    }
    function O(e, t, n = null) {
      const i = Object.keys(e);
      for (let r = 0, s = i.length; r < s; r++) {
        const s = e[i[r]];
        if (s.originalHandler === t && s.delegationSelector === n) return s;
      }
      return null;
    }
    function I(e, t, n) {
      const i = "string" == typeof t,
        r = i ? n : t;
      let s = q(e);
      return L.has(s) || (s = e), [i, r, s];
    }
    function M(e, t, n, i, r) {
      if ("string" != typeof t || !e) return;
      if ((n || ((n = i), (i = null)), D.test(t))) {
        const e = (e) =>
          function (t) {
            if (
              !t.relatedTarget ||
              (t.relatedTarget !== t.delegateTarget &&
                !t.delegateTarget.contains(t.relatedTarget))
            )
              return e.call(this, t);
          };
        i ? (i = e(i)) : (n = e(n));
      }
      const [s, o, a] = I(t, n, i),
        l = j(e),
        c = l[a] || (l[a] = {}),
        u = O(c, o, s ? n : null);
      if (u) return void (u.oneOff = u.oneOff && r);
      const d = N(o, t.replace(E, "")),
        h = s
          ? (function (e, t, n) {
              return function i(r) {
                const s = e.querySelectorAll(t);
                for (let { target: o } = r; o && o !== this; o = o.parentNode)
                  for (let a = s.length; a--; )
                    if (s[a] === o)
                      return (
                        (r.delegateTarget = o),
                        i.oneOff && H.off(e, r.type, t, n),
                        n.apply(o, [r])
                      );
                return null;
              };
            })(e, n, i)
          : (function (e, t) {
              return function n(i) {
                return (
                  (i.delegateTarget = e),
                  n.oneOff && H.off(e, i.type, t),
                  t.apply(e, [i])
                );
              };
            })(e, n);
      (h.delegationSelector = s ? n : null),
        (h.originalHandler = o),
        (h.oneOff = r),
        (h.uidEvent = d),
        (c[d] = h),
        e.addEventListener(a, h, s);
    }
    function P(e, t, n, i, r) {
      const s = O(t[n], i, r);
      s && (e.removeEventListener(n, s, Boolean(r)), delete t[n][s.uidEvent]);
    }
    function q(e) {
      return (e = e.replace(T, "")), S[e] || e;
    }
    const H = {
        on(e, t, n, i) {
          M(e, t, n, i, !1);
        },
        one(e, t, n, i) {
          M(e, t, n, i, !0);
        },
        off(e, t, n, i) {
          if ("string" != typeof t || !e) return;
          const [r, s, o] = I(t, n, i),
            a = o !== t,
            l = j(e),
            c = t.startsWith(".");
          if (void 0 !== s) {
            if (!l || !l[o]) return;
            return void P(e, l, o, s, r ? n : null);
          }
          c &&
            Object.keys(l).forEach((n) => {
              !(function (e, t, n, i) {
                const r = t[n] || {};
                Object.keys(r).forEach((s) => {
                  if (s.includes(i)) {
                    const i = r[s];
                    P(e, t, n, i.originalHandler, i.delegationSelector);
                  }
                });
              })(e, l, n, t.slice(1));
            });
          const u = l[o] || {};
          Object.keys(u).forEach((n) => {
            const i = n.replace(A, "");
            if (!a || t.includes(i)) {
              const t = u[n];
              P(e, l, o, t.originalHandler, t.delegationSelector);
            }
          });
        },
        trigger(e, t, n) {
          if ("string" != typeof t || !e) return null;
          const i = g(),
            r = q(t),
            s = t !== r,
            o = L.has(r);
          let a,
            l = !0,
            c = !0,
            u = !1,
            d = null;
          return (
            s &&
              i &&
              ((a = i.Event(t, n)),
              i(e).trigger(a),
              (l = !a.isPropagationStopped()),
              (c = !a.isImmediatePropagationStopped()),
              (u = a.isDefaultPrevented())),
            o
              ? ((d = document.createEvent("HTMLEvents")),
                d.initEvent(r, l, !0))
              : (d = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
            void 0 !== n &&
              Object.keys(n).forEach((e) => {
                Object.defineProperty(d, e, { get: () => n[e] });
              }),
            u && d.preventDefault(),
            c && e.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
          );
        }
      },
      R = new Map();
    var F = {
      set(e, t, n) {
        R.has(e) || R.set(e, new Map());
        const i = R.get(e);
        i.has(t) || 0 === i.size
          ? i.set(t, n)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (e, t) => (R.has(e) && R.get(e).get(t)) || null,
      remove(e, t) {
        if (!R.has(e)) return;
        const n = R.get(e);
        n.delete(t), 0 === n.size && R.delete(e);
      }
    };
    class z {
      constructor(e) {
        (e = c(e)) &&
          ((this._element = e),
          F.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        F.remove(this._element, this.constructor.DATA_KEY),
          H.off(this._element, this.constructor.EVENT_KEY),
          Object.getOwnPropertyNames(this).forEach((e) => {
            this[e] = null;
          });
      }
      _queueCallback(e, t, n = !0) {
        w(e, t, n);
      }
      static getInstance(e) {
        return F.get(e, this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        );
      }
      static get VERSION() {
        return "5.0.2";
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      static get DATA_KEY() {
        return "bs." + this.NAME;
      }
      static get EVENT_KEY() {
        return "." + this.DATA_KEY;
      }
    }
    class B extends z {
      static get NAME() {
        return "alert";
      }
      close(e) {
        const t = e ? this._getRootElement(e) : this._element,
          n = this._triggerCloseEvent(t);
        null === n || n.defaultPrevented || this._removeElement(t);
      }
      _getRootElement(e) {
        return o(e) || e.closest(".alert");
      }
      _triggerCloseEvent(e) {
        return H.trigger(e, "close.bs.alert");
      }
      _removeElement(e) {
        e.classList.remove("show");
        const t = e.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(e), e, t);
      }
      _destroyElement(e) {
        e.remove(), H.trigger(e, "closed.bs.alert");
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = B.getOrCreateInstance(this);
          "close" === e && t[e](this);
        });
      }
      static handleDismiss(e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }
    }
    H.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      B.handleDismiss(new B())
    ),
      b(B);
    class W extends z {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = W.getOrCreateInstance(this);
          "toggle" === e && t[e]();
        });
      }
    }
    function $(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          (e === Number(e).toString()
            ? Number(e)
            : "" === e || "null" === e
            ? null
            : e))
      );
    }
    function U(e) {
      return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
    }
    H.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      (e) => {
        e.preventDefault();
        const t = e.target.closest('[data-bs-toggle="button"]');
        W.getOrCreateInstance(t).toggle();
      }
    ),
      b(W);
    const X = {
        setDataAttribute(e, t, n) {
          e.setAttribute("data-bs-" + U(t), n);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute("data-bs-" + U(t));
        },
        getDataAttributes(e) {
          if (!e) return {};
          const t = {};
          return (
            Object.keys(e.dataset)
              .filter((e) => e.startsWith("bs"))
              .forEach((n) => {
                let i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (t[i] = $(e.dataset[n]));
              }),
            t
          );
        },
        getDataAttribute: (e, t) => $(e.getAttribute("data-bs-" + U(t))),
        offset(e) {
          const t = e.getBoundingClientRect();
          return {
            top: t.top + document.body.scrollTop,
            left: t.left + document.body.scrollLeft
          };
        },
        position: (e) => ({ top: e.offsetTop, left: e.offsetLeft })
      },
      V = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
      },
      Y = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      },
      Q = "next",
      J = "prev",
      K = "left",
      G = "right",
      Z = { ArrowLeft: G, ArrowRight: K };
    class ee extends z {
      constructor(e, t) {
        super(e),
          (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._indicatorsElement = n.findOne(
            ".carousel-indicators",
            this._element
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(window.PointerEvent)),
          this._addEventListeners();
      }
      static get Default() {
        return V;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Q);
      }
      nextWhenVisible() {
        !document.hidden && d(this._element) && this.next();
      }
      prev() {
        this._slide(J);
      }
      pause(e) {
        e || (this._isPaused = !0),
          n.findOne(
            ".carousel-item-next, .carousel-item-prev",
            this._element
          ) && (a(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }
      cycle(e) {
        e || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config &&
            this._config.interval &&
            !this._isPaused &&
            (this._updateInterval(),
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            )));
      }
      to(e) {
        this._activeElement = n.findOne(".active.carousel-item", this._element);
        const t = this._getItemIndex(this._activeElement);
        if (!(e > this._items.length - 1 || e < 0)) {
          if (!this._isSliding)
            return t === e
              ? (this.pause(), void this.cycle())
              : void this._slide(e > t ? Q : J, this._items[e]);
          H.one(this._element, "slid.bs.carousel", () => this.to(e));
        }
      }
      _getConfig(e) {
        return (
          (e = {
            ...V,
            ...X.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {})
          }),
          u("carousel", e, Y),
          e
        );
      }
      _handleSwipe() {
        const e = Math.abs(this.touchDeltaX);
        if (e <= 40) return;
        const t = e / this.touchDeltaX;
        (this.touchDeltaX = 0), t && this._slide(t > 0 ? G : K);
      }
      _addEventListeners() {
        this._config.keyboard &&
          H.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
          "hover" === this._config.pause &&
            (H.on(this._element, "mouseenter.bs.carousel", (e) =>
              this.pause(e)
            ),
            H.on(this._element, "mouseleave.bs.carousel", (e) =>
              this.cycle(e)
            )),
          this._config.touch &&
            this._touchSupported &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        const e = (e) => {
            !this._pointerEvent ||
            ("pen" !== e.pointerType && "touch" !== e.pointerType)
              ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
              : (this.touchStartX = e.clientX);
          },
          t = (e) => {
            this.touchDeltaX =
              e.touches && e.touches.length > 1
                ? 0
                : e.touches[0].clientX - this.touchStartX;
          },
          i = (e) => {
            !this._pointerEvent ||
              ("pen" !== e.pointerType && "touch" !== e.pointerType) ||
              (this.touchDeltaX = e.clientX - this.touchStartX),
              this._handleSwipe(),
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  (e) => this.cycle(e),
                  500 + this._config.interval
                )));
          };
        n.find(".carousel-item img", this._element).forEach((e) => {
          H.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
        }),
          this._pointerEvent
            ? (H.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
              H.on(this._element, "pointerup.bs.carousel", (e) => i(e)),
              this._element.classList.add("pointer-event"))
            : (H.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
              H.on(this._element, "touchmove.bs.carousel", (e) => t(e)),
              H.on(this._element, "touchend.bs.carousel", (e) => i(e)));
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = Z[e.key];
        t && (e.preventDefault(), this._slide(t));
      }
      _getItemIndex(e) {
        return (
          (this._items =
            e && e.parentNode ? n.find(".carousel-item", e.parentNode) : []),
          this._items.indexOf(e)
        );
      }
      _getItemByOrder(e, t) {
        return x(this._items, t, e === Q, this._config.wrap);
      }
      _triggerSlideEvent(e, t) {
        const i = this._getItemIndex(e),
          r = this._getItemIndex(
            n.findOne(".active.carousel-item", this._element)
          );
        return H.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: t,
          from: r,
          to: i
        });
      }
      _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          const t = n.findOne(".active", this._indicatorsElement);
          t.classList.remove("active"), t.removeAttribute("aria-current");
          const i = n.find("[data-bs-target]", this._indicatorsElement);
          for (let n = 0; n < i.length; n++)
            if (
              Number.parseInt(i[n].getAttribute("data-bs-slide-to"), 10) ===
              this._getItemIndex(e)
            ) {
              i[n].classList.add("active"),
                i[n].setAttribute("aria-current", "true");
              break;
            }
        }
      }
      _updateInterval() {
        const e =
          this._activeElement ||
          n.findOne(".active.carousel-item", this._element);
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        t
          ? ((this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = t))
          : (this._config.interval =
              this._config.defaultInterval || this._config.interval);
      }
      _slide(e, t) {
        const i = this._directionToOrder(e),
          r = n.findOne(".active.carousel-item", this._element),
          s = this._getItemIndex(r),
          o = t || this._getItemByOrder(i, r),
          a = this._getItemIndex(o),
          l = Boolean(this._interval),
          c = i === Q,
          u = c ? "carousel-item-start" : "carousel-item-end",
          d = c ? "carousel-item-next" : "carousel-item-prev",
          h = this._orderToDirection(i);
        if (o && o.classList.contains("active"))
          return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(o, h).defaultPrevented) return;
        if (!r || !o) return;
        (this._isSliding = !0),
          l && this.pause(),
          this._setActiveIndicatorElement(o),
          (this._activeElement = o);
        const p = () => {
          H.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: o,
            direction: h,
            from: s,
            to: a
          });
        };
        this._element.classList.contains("slide")
          ? (o.classList.add(d),
            m(o),
            r.classList.add(u),
            o.classList.add(u),
            this._queueCallback(
              () => {
                o.classList.remove(u, d),
                  o.classList.add("active"),
                  r.classList.remove("active", d, u),
                  (this._isSliding = !1),
                  setTimeout(p, 0);
              },
              r,
              !0
            ))
          : (r.classList.remove("active"),
            o.classList.add("active"),
            (this._isSliding = !1),
            p()),
          l && this.cycle();
      }
      _directionToOrder(e) {
        return [G, K].includes(e)
          ? y()
            ? e === K
              ? J
              : Q
            : e === K
            ? Q
            : J
          : e;
      }
      _orderToDirection(e) {
        return [Q, J].includes(e)
          ? y()
            ? e === J
              ? K
              : G
            : e === J
            ? G
            : K
          : e;
      }
      static carouselInterface(e, t) {
        const n = ee.getOrCreateInstance(e, t);
        let { _config: i } = n;
        "object" == typeof t && (i = { ...i, ...t });
        const r = "string" == typeof t ? t : i.slide;
        if ("number" == typeof t) n.to(t);
        else if ("string" == typeof r) {
          if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
          n[r]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      }
      static jQueryInterface(e) {
        return this.each(function () {
          ee.carouselInterface(this, e);
        });
      }
      static dataApiClickHandler(e) {
        const t = o(this);
        if (!t || !t.classList.contains("carousel")) return;
        const n = { ...X.getDataAttributes(t), ...X.getDataAttributes(this) },
          i = this.getAttribute("data-bs-slide-to");
        i && (n.interval = !1),
          ee.carouselInterface(t, n),
          i && ee.getInstance(t).to(i),
          e.preventDefault();
      }
    }
    H.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      ee.dataApiClickHandler
    ),
      H.on(window, "load.bs.carousel.data-api", () => {
        const e = n.find('[data-bs-ride="carousel"]');
        for (let t = 0, n = e.length; t < n; t++)
          ee.carouselInterface(e[t], ee.getInstance(e[t]));
      }),
      b(ee);
    const te = { toggle: !0, parent: "" },
      ne = { toggle: "boolean", parent: "(string|element)" };
    class ie extends z {
      constructor(e, t) {
        super(e),
          (this._isTransitioning = !1),
          (this._config = this._getConfig(t)),
          (this._triggerArray = n.find(
            `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
          ));
        const i = n.find('[data-bs-toggle="collapse"]');
        for (let r = 0, o = i.length; r < o; r++) {
          const e = i[r],
            t = s(e),
            o = n.find(t).filter((e) => e === this._element);
          null !== t &&
            o.length &&
            ((this._selector = t), this._triggerArray.push(e));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return te;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._element.classList.contains("show"))
          return;
        let e, t;
        this._parent &&
          ((e = n
            .find(".show, .collapsing", this._parent)
            .filter((e) =>
              "string" == typeof this._config.parent
                ? e.getAttribute("data-bs-parent") === this._config.parent
                : e.classList.contains("collapse")
            )),
          0 === e.length && (e = null));
        const i = n.findOne(this._selector);
        if (e) {
          const n = e.find((e) => i !== e);
          if (((t = n ? ie.getInstance(n) : null), t && t._isTransitioning))
            return;
        }
        if (H.trigger(this._element, "show.bs.collapse").defaultPrevented)
          return;
        e &&
          e.forEach((e) => {
            i !== e && ie.collapseInterface(e, "hide"),
              t || F.set(e, "bs.collapse", null);
          });
        const r = this._getDimension();
        this._element.classList.remove("collapse"),
          this._element.classList.add("collapsing"),
          (this._element.style[r] = 0),
          this._triggerArray.length &&
            this._triggerArray.forEach((e) => {
              e.classList.remove("collapsed"),
                e.setAttribute("aria-expanded", !0);
            }),
          this.setTransitioning(!0);
        const s = "scroll" + (r[0].toUpperCase() + r.slice(1));
        this._queueCallback(
          () => {
            this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse", "show"),
              (this._element.style[r] = ""),
              this.setTransitioning(!1),
              H.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[r] = this._element[s] + "px");
      }
      hide() {
        if (this._isTransitioning || !this._element.classList.contains("show"))
          return;
        if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented)
          return;
        const e = this._getDimension();
        (this._element.style[e] =
          this._element.getBoundingClientRect()[e] + "px"),
          m(this._element),
          this._element.classList.add("collapsing"),
          this._element.classList.remove("collapse", "show");
        const t = this._triggerArray.length;
        if (t > 0)
          for (let n = 0; n < t; n++) {
            const e = this._triggerArray[n],
              t = o(e);
            t &&
              !t.classList.contains("show") &&
              (e.classList.add("collapsed"),
              e.setAttribute("aria-expanded", !1));
          }
        this.setTransitioning(!0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              this.setTransitioning(!1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                H.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      setTransitioning(e) {
        this._isTransitioning = e;
      }
      _getConfig(e) {
        return (
          ((e = { ...te, ...e }).toggle = Boolean(e.toggle)),
          u("collapse", e, ne),
          e
        );
      }
      _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
      _getParent() {
        let { parent: e } = this._config;
        return (
          (e = c(e)),
          n
            .find(`[data-bs-toggle="collapse"][data-bs-parent="${e}"]`, e)
            .forEach((e) => {
              const t = o(e);
              this._addAriaAndCollapsedClass(t, [e]);
            }),
          e
        );
      }
      _addAriaAndCollapsedClass(e, t) {
        if (!e || !t.length) return;
        const n = e.classList.contains("show");
        t.forEach((e) => {
          n ? e.classList.remove("collapsed") : e.classList.add("collapsed"),
            e.setAttribute("aria-expanded", n);
        });
      }
      static collapseInterface(e, t) {
        let n = ie.getInstance(e);
        const i = {
          ...te,
          ...X.getDataAttributes(e),
          ...("object" == typeof t && t ? t : {})
        };
        if (
          (!n &&
            i.toggle &&
            "string" == typeof t &&
            /show|hide/.test(t) &&
            (i.toggle = !1),
          n || (n = new ie(e, i)),
          "string" == typeof t)
        ) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t]();
        }
      }
      static jQueryInterface(e) {
        return this.each(function () {
          ie.collapseInterface(this, e);
        });
      }
    }
    H.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (e) {
        ("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault();
        const t = X.getDataAttributes(this),
          i = s(this);
        n.find(i).forEach((e) => {
          const n = ie.getInstance(e);
          let i;
          n
            ? (null === n._parent &&
                "string" == typeof t.parent &&
                ((n._config.parent = t.parent), (n._parent = n._getParent())),
              (i = "toggle"))
            : (i = t),
            ie.collapseInterface(e, i);
        });
      }
    ),
      b(ie);
    const re = new RegExp("ArrowUp|ArrowDown|Escape"),
      se = y() ? "top-end" : "top-start",
      oe = y() ? "top-start" : "top-end",
      ae = y() ? "bottom-end" : "bottom-start",
      le = y() ? "bottom-start" : "bottom-end",
      ce = y() ? "left-start" : "right-start",
      ue = y() ? "right-start" : "left-start",
      de = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
      },
      he = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
      };
    class pe extends z {
      constructor(e, t) {
        super(e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      static get Default() {
        return de;
      }
      static get DefaultType() {
        return he;
      }
      static get NAME() {
        return "dropdown";
      }
      toggle() {
        h(this._element) ||
          (this._element.classList.contains("show")
            ? this.hide()
            : this.show());
      }
      show() {
        if (h(this._element) || this._menu.classList.contains("show")) return;
        const e = pe.getParentFromElement(this._element),
          n = { relatedTarget: this._element };
        if (!H.trigger(this._element, "show.bs.dropdown", n).defaultPrevented) {
          if (this._inNavbar) X.setDataAttribute(this._menu, "popper", "none");
          else {
            if (void 0 === t)
              throw new TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
              );
            let n = this._element;
            "parent" === this._config.reference
              ? (n = e)
              : l(this._config.reference)
              ? (n = c(this._config.reference))
              : "object" == typeof this._config.reference &&
                (n = this._config.reference);
            const i = this._getPopperConfig(),
              r = i.modifiers.find(
                (e) => "applyStyles" === e.name && !1 === e.enabled
              );
            (this._popper = t.createPopper(n, this._menu, i)),
              r && X.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement &&
            !e.closest(".navbar-nav") &&
            []
              .concat(...document.body.children)
              .forEach((e) => H.on(e, "mouseover", f)),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.toggle("show"),
            this._element.classList.toggle("show"),
            H.trigger(this._element, "shown.bs.dropdown", n);
        }
      }
      hide() {
        !h(this._element) &&
          this._menu.classList.contains("show") &&
          this._completeHide({ relatedTarget: this._element });
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _addEventListeners() {
        H.on(this._element, "click.bs.dropdown", (e) => {
          e.preventDefault(), this.toggle();
        });
      }
      _completeHide(e) {
        H.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
          ("ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => H.off(e, "mouseover", f)),
          this._popper && this._popper.destroy(),
          this._menu.classList.remove("show"),
          this._element.classList.remove("show"),
          this._element.setAttribute("aria-expanded", "false"),
          X.removeDataAttribute(this._menu, "popper"),
          H.trigger(this._element, "hidden.bs.dropdown", e));
      }
      _getConfig(e) {
        if (
          ((e = {
            ...this.constructor.Default,
            ...X.getDataAttributes(this._element),
            ...e
          }),
          u("dropdown", e, this.constructor.DefaultType),
          "object" == typeof e.reference &&
            !l(e.reference) &&
            "function" != typeof e.reference.getBoundingClientRect)
        )
          throw new TypeError(
            "dropdown".toUpperCase() +
              ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
          );
        return e;
      }
      _getMenuElement() {
        return n.next(this._element, ".dropdown-menu")[0];
      }
      _getPlacement() {
        const e = this._element.parentNode;
        if (e.classList.contains("dropend")) return ce;
        if (e.classList.contains("dropstart")) return ue;
        const t =
          "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return e.classList.contains("dropup") ? (t ? oe : se) : t ? le : ae;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary }
            },
            { name: "offset", options: { offset: this._getOffset() } }
          ]
        };
        return (
          "static" === this._config.display &&
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
          {
            ...e,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(e)
              : this._config.popperConfig)
          }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        const i = n
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          )
          .filter(d);
        i.length && x(i, t, "ArrowDown" === e, !i.includes(t)).focus();
      }
      static dropdownInterface(e, t) {
        const n = pe.getOrCreateInstance(e, t);
        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t]();
        }
      }
      static jQueryInterface(e) {
        return this.each(function () {
          pe.dropdownInterface(this, e);
        });
      }
      static clearMenus(e) {
        if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
          return;
        const t = n.find('[data-bs-toggle="dropdown"]');
        for (let n = 0, i = t.length; n < i; n++) {
          const i = pe.getInstance(t[n]);
          if (!i || !1 === i._config.autoClose) continue;
          if (!i._element.classList.contains("show")) continue;
          const r = { relatedTarget: i._element };
          if (e) {
            const t = e.composedPath(),
              n = t.includes(i._menu);
            if (
              t.includes(i._element) ||
              ("inside" === i._config.autoClose && !n) ||
              ("outside" === i._config.autoClose && n)
            )
              continue;
            if (
              i._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName))
            )
              continue;
            "click" === e.type && (r.clickEvent = e);
          }
          i._completeHide(r);
        }
      }
      static getParentFromElement(e) {
        return o(e) || e.parentNode;
      }
      static dataApiKeydownHandler(e) {
        if (
          /input|textarea/i.test(e.target.tagName)
            ? "Space" === e.key ||
              ("Escape" !== e.key &&
                (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                  e.target.closest(".dropdown-menu")))
            : !re.test(e.key)
        )
          return;
        const t = this.classList.contains("show");
        if (!t && "Escape" === e.key) return;
        if ((e.preventDefault(), e.stopPropagation(), h(this))) return;
        const i = () =>
          this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : n.prev(this, '[data-bs-toggle="dropdown"]')[0];
        return "Escape" === e.key
          ? (i().focus(), void pe.clearMenus())
          : "ArrowUp" === e.key || "ArrowDown" === e.key
          ? (t || i().click(), void pe.getInstance(i())._selectMenuItem(e))
          : void ((t && "Space" !== e.key) || pe.clearMenus());
      }
    }
    H.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      pe.dataApiKeydownHandler
    ),
      H.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        pe.dataApiKeydownHandler
      ),
      H.on(document, "click.bs.dropdown.data-api", pe.clearMenus),
      H.on(document, "keyup.bs.dropdown.data-api", pe.clearMenus),
      H.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (e) {
          e.preventDefault(), pe.dropdownInterface(this);
        }
      ),
      b(pe);
    class fe {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(
            this._element,
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".sticky-top",
            "marginRight",
            (t) => t - e
          );
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(e, t, n) {
        const i = this.getWidth();
        this._applyManipulationCallback(e, (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + i)
            return;
          this._saveInitialAttribute(e, t);
          const r = window.getComputedStyle(e)[t];
          e.style[t] = n(Number.parseFloat(r)) + "px";
        });
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, "paddingRight"),
          this._resetElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight"
          ),
          this._resetElementAttributes(".sticky-top", "marginRight");
      }
      _saveInitialAttribute(e, t) {
        const n = e.style[t];
        n && X.setDataAttribute(e, t, n);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (e) => {
          const n = X.getDataAttribute(e, t);
          void 0 === n
            ? e.style.removeProperty(t)
            : (X.removeDataAttribute(e, t), (e.style[t] = n));
        });
      }
      _applyManipulationCallback(e, t) {
        l(e) ? t(e) : n.find(e, this._element).forEach(t);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
    }
    const me = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
      },
      ge = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
      };
    class ve {
      constructor(e) {
        (this._config = this._getConfig(e)),
          (this._isAppended = !1),
          (this._element = null);
      }
      show(e) {
        this._config.isVisible
          ? (this._append(),
            this._config.isAnimated && m(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation(() => {
              _(e);
            }))
          : _(e);
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(() => {
              this.dispose(), _(e);
            }))
          : _(e);
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          (e.className = "modal-backdrop"),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e);
        }
        return this._element;
      }
      _getConfig(e) {
        return (
          ((e = { ...me, ...("object" == typeof e ? e : {}) }).rootElement = c(
            e.rootElement
          )),
          u("backdrop", e, ge),
          e
        );
      }
      _append() {
        this._isAppended ||
          (this._config.rootElement.appendChild(this._getElement()),
          H.on(this._getElement(), "mousedown.bs.backdrop", () => {
            _(this._config.clickCallback);
          }),
          (this._isAppended = !0));
      }
      dispose() {
        this._isAppended &&
          (H.off(this._element, "mousedown.bs.backdrop"),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _emulateAnimation(e) {
        w(e, this._getElement(), this._config.isAnimated);
      }
    }
    const ye = { backdrop: !0, keyboard: !0, focus: !0 },
      be = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
      };
    class _e extends z {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._dialog = n.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._isShown = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new fe());
      }
      static get Default() {
        return ye;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          H.trigger(this._element, "show.bs.modal", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._isAnimated() && (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add("modal-open"),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          H.on(
            this._element,
            "click.dismiss.bs.modal",
            '[data-bs-dismiss="modal"]',
            (e) => this.hide(e)
          ),
          H.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
            H.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
              e.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(e)));
      }
      hide(e) {
        if (
          (e && ["A", "AREA"].includes(e.target.tagName) && e.preventDefault(),
          !this._isShown || this._isTransitioning)
        )
          return;
        if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        const t = this._isAnimated();
        t && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          H.off(document, "focusin.bs.modal"),
          this._element.classList.remove("show"),
          H.off(this._element, "click.dismiss.bs.modal"),
          H.off(this._dialog, "mousedown.dismiss.bs.modal"),
          this._queueCallback(() => this._hideModal(), this._element, t);
      }
      dispose() {
        [window, this._dialog].forEach((e) => H.off(e, ".bs.modal")),
          this._backdrop.dispose(),
          super.dispose(),
          H.off(document, "focusin.bs.modal");
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new ve({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
      _getConfig(e) {
        return (
          (e = {
            ...ye,
            ...X.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {})
          }),
          u("modal", e, be),
          e
        );
      }
      _showElement(e) {
        const t = this._isAnimated(),
          i = n.findOne(".modal-body", this._dialog);
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0),
          i && (i.scrollTop = 0),
          t && m(this._element),
          this._element.classList.add("show"),
          this._config.focus && this._enforceFocus(),
          this._queueCallback(
            () => {
              this._config.focus && this._element.focus(),
                (this._isTransitioning = !1),
                H.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: e
                });
            },
            this._dialog,
            t
          );
      }
      _enforceFocus() {
        H.off(document, "focusin.bs.modal"),
          H.on(document, "focusin.bs.modal", (e) => {
            document === e.target ||
              this._element === e.target ||
              this._element.contains(e.target) ||
              this._element.focus();
          });
      }
      _setEscapeEvent() {
        this._isShown
          ? H.on(this._element, "keydown.dismiss.bs.modal", (e) => {
              this._config.keyboard && "Escape" === e.key
                ? (e.preventDefault(), this.hide())
                : this._config.keyboard ||
                  "Escape" !== e.key ||
                  this._triggerBackdropTransition();
            })
          : H.off(this._element, "keydown.dismiss.bs.modal");
      }
      _setResizeEvent() {
        this._isShown
          ? H.on(window, "resize.bs.modal", () => this._adjustDialog())
          : H.off(window, "resize.bs.modal");
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove("modal-open"),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              H.trigger(this._element, "hidden.bs.modal");
          });
      }
      _showBackdrop(e) {
        H.on(this._element, "click.dismiss.bs.modal", (e) => {
          this._ignoreBackdropClick
            ? (this._ignoreBackdropClick = !1)
            : e.target === e.currentTarget &&
              (!0 === this._config.backdrop
                ? this.hide()
                : "static" === this._config.backdrop &&
                  this._triggerBackdropTransition());
        }),
          this._backdrop.show(e);
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const { classList: e, scrollHeight: t, style: n } = this._element,
          i = t > document.documentElement.clientHeight;
        (!i && "hidden" === n.overflowY) ||
          e.contains("modal-static") ||
          (i || (n.overflowY = "hidden"),
          e.add("modal-static"),
          this._queueCallback(() => {
            e.remove("modal-static"),
              i ||
                this._queueCallback(() => {
                  n.overflowY = "";
                }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          n = t > 0;
        ((!n && e && !y()) || (n && !e && y())) &&
          (this._element.style.paddingLeft = t + "px"),
          ((n && !e && !y()) || (!n && e && y())) &&
            (this._element.style.paddingRight = t + "px");
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(e, t) {
        return this.each(function () {
          const n = _e.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }
    }
    H.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (e) {
        const t = o(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          H.one(t, "show.bs.modal", (e) => {
            e.defaultPrevented ||
              H.one(t, "hidden.bs.modal", () => {
                d(this) && this.focus();
              });
          }),
          _e.getOrCreateInstance(t).toggle(this);
      }
    ),
      b(_e);
    const we = { backdrop: !0, keyboard: !0, scroll: !1 },
      xe = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class Ee extends z {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          this._addEventListeners();
      }
      static get NAME() {
        return "offcanvas";
      }
      static get Default() {
        return we;
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          H.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          (this._element.style.visibility = "visible"),
          this._backdrop.show(),
          this._config.scroll ||
            (new fe().hide(), this._enforceFocusOnElement(this._element)),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              H.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: e
              });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (H.off(document, "focusin.bs.offcanvas"),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  (this._element.style.visibility = "hidden"),
                  this._config.scroll || new fe().reset(),
                  H.trigger(this._element, "hidden.bs.offcanvas");
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(),
          super.dispose(),
          H.off(document, "focusin.bs.offcanvas");
      }
      _getConfig(e) {
        return (
          (e = {
            ...we,
            ...X.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {})
          }),
          u("offcanvas", e, xe),
          e
        );
      }
      _initializeBackDrop() {
        return new ve({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide()
        });
      }
      _enforceFocusOnElement(e) {
        H.off(document, "focusin.bs.offcanvas"),
          H.on(document, "focusin.bs.offcanvas", (t) => {
            document === t.target ||
              e === t.target ||
              e.contains(t.target) ||
              e.focus();
          }),
          e.focus();
      }
      _addEventListeners() {
        H.on(
          this._element,
          "click.dismiss.bs.offcanvas",
          '[data-bs-dismiss="offcanvas"]',
          () => this.hide()
        ),
          H.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
            this._config.keyboard && "Escape" === e.key && this.hide();
          });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ee.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    H.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (e) {
        const t = o(this);
        if (
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this))
        )
          return;
        H.one(t, "hidden.bs.offcanvas", () => {
          d(this) && this.focus();
        });
        const i = n.findOne(".offcanvas.show");
        i && i !== t && Ee.getInstance(i).hide(),
          Ee.getOrCreateInstance(t).toggle(this);
      }
    ),
      H.on(window, "load.bs.offcanvas.data-api", () =>
        n
          .find(".offcanvas.show")
          .forEach((e) => Ee.getOrCreateInstance(e).show())
      ),
      b(Ee);
    const Te = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
      ]),
      Ae = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      ke = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ce = (e, t) => {
        const n = e.nodeName.toLowerCase();
        if (t.includes(n))
          return (
            !Te.has(n) || Boolean(Ae.test(e.nodeValue) || ke.test(e.nodeValue))
          );
        const i = t.filter((e) => e instanceof RegExp);
        for (let r = 0, s = i.length; r < s; r++) if (i[r].test(n)) return !0;
        return !1;
      };
    function Se(e, t, n) {
      if (!e.length) return e;
      if (n && "function" == typeof n) return n(e);
      const i = new window.DOMParser().parseFromString(e, "text/html"),
        r = Object.keys(t),
        s = [].concat(...i.body.querySelectorAll("*"));
      for (let o = 0, a = s.length; o < a; o++) {
        const e = s[o],
          n = e.nodeName.toLowerCase();
        if (!r.includes(n)) {
          e.remove();
          continue;
        }
        const i = [].concat(...e.attributes),
          a = [].concat(t["*"] || [], t[n] || []);
        i.forEach((t) => {
          Ce(t, a) || e.removeAttribute(t.nodeName);
        });
      }
      return i.body.innerHTML;
    }
    const De = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Le = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ne = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
      },
      je = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: y() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: y() ? "right" : "left"
      },
      Oe = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        },
        popperConfig: null
      },
      Ie = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
      };
    class Me extends z {
      constructor(e, n) {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(e),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._config = this._getConfig(n)),
          (this.tip = null),
          this._setListeners();
      }
      static get Default() {
        return Oe;
      }
      static get NAME() {
        return "tooltip";
      }
      static get Event() {
        return Ie;
      }
      static get DefaultType() {
        return Ne;
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle(e) {
        if (this._isEnabled)
          if (e) {
            const t = this._initializeOnDelegatedTarget(e);
            (t._activeTrigger.click = !t._activeTrigger.click),
              t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
          } else {
            if (this.getTipElement().classList.contains("show"))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }
      dispose() {
        clearTimeout(this._timeout),
          H.off(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this.tip && this.tip.remove(),
          this._popper && this._popper.destroy(),
          super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const e = H.trigger(this._element, this.constructor.Event.SHOW),
          n = p(this._element),
          r =
            null === n
              ? this._element.ownerDocument.documentElement.contains(
                  this._element
                )
              : n.contains(this._element);
        if (e.defaultPrevented || !r) return;
        const s = this.getTipElement(),
          o = i(this.constructor.NAME);
        s.setAttribute("id", o),
          this._element.setAttribute("aria-describedby", o),
          this.setContent(),
          this._config.animation && s.classList.add("fade");
        const a =
            "function" == typeof this._config.placement
              ? this._config.placement.call(this, s, this._element)
              : this._config.placement,
          l = this._getAttachment(a);
        this._addAttachmentClass(l);
        const { container: c } = this._config;
        F.set(s, this.constructor.DATA_KEY, this),
          this._element.ownerDocument.documentElement.contains(this.tip) ||
            (c.appendChild(s),
            H.trigger(this._element, this.constructor.Event.INSERTED)),
          this._popper
            ? this._popper.update()
            : (this._popper = t.createPopper(
                this._element,
                s,
                this._getPopperConfig(l)
              )),
          s.classList.add("show");
        const u =
          "function" == typeof this._config.customClass
            ? this._config.customClass()
            : this._config.customClass;
        u && s.classList.add(...u.split(" ")),
          "ontouchstart" in document.documentElement &&
            [].concat(...document.body.children).forEach((e) => {
              H.on(e, "mouseover", f);
            });
        const d = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            const e = this._hoverState;
            (this._hoverState = null),
              H.trigger(this._element, this.constructor.Event.SHOWN),
              "out" === e && this._leave(null, this);
          },
          this.tip,
          d
        );
      }
      hide() {
        if (!this._popper) return;
        const e = this.getTipElement();
        if (
          H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
        )
          return;
        e.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => H.off(e, "mouseover", f)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1);
        const t = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              ("show" !== this._hoverState && e.remove(),
              this._cleanTipClass(),
              this._element.removeAttribute("aria-describedby"),
              H.trigger(this._element, this.constructor.Event.HIDDEN),
              this._popper && (this._popper.destroy(), (this._popper = null)));
          },
          this.tip,
          t
        ),
          (this._hoverState = "");
      }
      update() {
        null !== this._popper && this._popper.update();
      }
      isWithContent() {
        return Boolean(this.getTitle());
      }
      getTipElement() {
        if (this.tip) return this.tip;
        const e = document.createElement("div");
        return (
          (e.innerHTML = this._config.template),
          (this.tip = e.children[0]),
          this.tip
        );
      }
      setContent() {
        const e = this.getTipElement();
        this.setElementContent(n.findOne(".tooltip-inner", e), this.getTitle()),
          e.classList.remove("fade", "show");
      }
      setElementContent(e, t) {
        if (null !== e)
          return l(t)
            ? ((t = c(t)),
              void (this._config.html
                ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t))
                : (e.textContent = t.textContent)))
            : void (this._config.html
                ? (this._config.sanitize &&
                    (t = Se(
                      t,
                      this._config.allowList,
                      this._config.sanitizeFn
                    )),
                  (e.innerHTML = t))
                : (e.textContent = t));
      }
      getTitle() {
        let e = this._element.getAttribute("data-bs-original-title");
        return (
          e ||
            (e =
              "function" == typeof this._config.title
                ? this._config.title.call(this._element)
                : this._config.title),
          e
        );
      }
      updateAttachment(e) {
        return "right" === e ? "end" : "left" === e ? "start" : e;
      }
      _initializeOnDelegatedTarget(e, t) {
        const n = this.constructor.DATA_KEY;
        return (
          (t = t || F.get(e.delegateTarget, n)) ||
            ((t = new this.constructor(
              e.delegateTarget,
              this._getDelegateConfig()
            )),
            F.set(e.delegateTarget, n, t)),
          t
        );
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements }
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary }
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` }
            },
            {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: (e) => this._handlePopperPlacementChange(e)
            }
          ],
          onFirstUpdate: (e) => {
            e.options.placement !== e.placement &&
              this._handlePopperPlacementChange(e);
          }
        };
        return {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig)
        };
      }
      _addAttachmentClass(e) {
        this.getTipElement().classList.add(
          "bs-tooltip-" + this.updateAttachment(e)
        );
      }
      _getAttachment(e) {
        return je[e.toUpperCase()];
      }
      _setListeners() {
        this._config.trigger.split(" ").forEach((e) => {
          if ("click" === e)
            H.on(
              this._element,
              this.constructor.Event.CLICK,
              this._config.selector,
              (e) => this.toggle(e)
            );
          else if ("manual" !== e) {
            const t =
              "hover" === e
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
            H.on(
              this._element,
              "hover" === e
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
              this._config.selector,
              (e) => this._enter(e)
            ),
              H.on(this._element, t, this._config.selector, (e) =>
                this._leave(e)
              );
          }
        }),
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
          H.on(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this._config.selector
            ? (this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
              })
            : this._fixTitle();
      }
      _fixTitle() {
        const e = this._element.getAttribute("title"),
          t = typeof this._element.getAttribute("data-bs-original-title");
        (e || "string" !== t) &&
          (this._element.setAttribute("data-bs-original-title", e || ""),
          !e ||
            this._element.getAttribute("aria-label") ||
            this._element.textContent ||
            this._element.setAttribute("aria-label", e),
          this._element.setAttribute("title", ""));
      }
      _enter(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
          t.getTipElement().classList.contains("show") ||
          "show" === t._hoverState
            ? (t._hoverState = "show")
            : (clearTimeout(t._timeout),
              (t._hoverState = "show"),
              t._config.delay && t._config.delay.show
                ? (t._timeout = setTimeout(() => {
                    "show" === t._hoverState && t.show();
                  }, t._config.delay.show))
                : t.show());
      }
      _leave(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger[
              "focusout" === e.type ? "focus" : "hover"
            ] = t._element.contains(e.relatedTarget)),
          t._isWithActiveTrigger() ||
            (clearTimeout(t._timeout),
            (t._hoverState = "out"),
            t._config.delay && t._config.delay.hide
              ? (t._timeout = setTimeout(() => {
                  "out" === t._hoverState && t.hide();
                }, t._config.delay.hide))
              : t.hide());
      }
      _isWithActiveTrigger() {
        for (const e in this._activeTrigger)
          if (this._activeTrigger[e]) return !0;
        return !1;
      }
      _getConfig(e) {
        const t = X.getDataAttributes(this._element);
        return (
          Object.keys(t).forEach((e) => {
            Le.has(e) && delete t[e];
          }),
          ((e = {
            ...this.constructor.Default,
            ...t,
            ...("object" == typeof e && e ? e : {})
          }).container = !1 === e.container ? document.body : c(e.container)),
          "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          "number" == typeof e.title && (e.title = e.title.toString()),
          "number" == typeof e.content && (e.content = e.content.toString()),
          u("tooltip", e, this.constructor.DefaultType),
          e.sanitize &&
            (e.template = Se(e.template, e.allowList, e.sanitizeFn)),
          e
        );
      }
      _getDelegateConfig() {
        const e = {};
        if (this._config)
          for (const t in this._config)
            this.constructor.Default[t] !== this._config[t] &&
              (e[t] = this._config[t]);
        return e;
      }
      _cleanTipClass() {
        const e = this.getTipElement(),
          t = e.getAttribute("class").match(De);
        null !== t &&
          t.length > 0 &&
          t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
      }
      _handlePopperPlacementChange(e) {
        const { state: t } = e;
        t &&
          ((this.tip = t.elements.popper),
          this._cleanTipClass(),
          this._addAttachmentClass(this._getAttachment(t.placement)));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Me.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    b(Me);
    const Pe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      qe = {
        ...Me.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      },
      He = { ...Me.DefaultType, content: "(string|element|function)" },
      Re = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
      };
    class Fe extends Me {
      static get Default() {
        return qe;
      }
      static get NAME() {
        return "popover";
      }
      static get Event() {
        return Re;
      }
      static get DefaultType() {
        return He;
      }
      isWithContent() {
        return this.getTitle() || this._getContent();
      }
      getTipElement() {
        return (
          this.tip ||
            ((this.tip = super.getTipElement()),
            this.getTitle() || n.findOne(".popover-header", this.tip).remove(),
            this._getContent() ||
              n.findOne(".popover-body", this.tip).remove()),
          this.tip
        );
      }
      setContent() {
        const e = this.getTipElement();
        this.setElementContent(
          n.findOne(".popover-header", e),
          this.getTitle()
        );
        let t = this._getContent();
        "function" == typeof t && (t = t.call(this._element)),
          this.setElementContent(n.findOne(".popover-body", e), t),
          e.classList.remove("fade", "show");
      }
      _addAttachmentClass(e) {
        this.getTipElement().classList.add(
          "bs-popover-" + this.updateAttachment(e)
        );
      }
      _getContent() {
        return (
          this._element.getAttribute("data-bs-content") || this._config.content
        );
      }
      _cleanTipClass() {
        const e = this.getTipElement(),
          t = e.getAttribute("class").match(Pe);
        null !== t &&
          t.length > 0 &&
          t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Fe.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    b(Fe);
    const ze = { offset: 10, method: "auto", target: "" },
      Be = { offset: "number", method: "string", target: "(string|element)" };
    class We extends z {
      constructor(e, t) {
        super(e),
          (this._scrollElement =
            "BODY" === this._element.tagName ? window : this._element),
          (this._config = this._getConfig(t)),
          (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          H.on(this._scrollElement, "scroll.bs.scrollspy", () =>
            this._process()
          ),
          this.refresh(),
          this._process();
      }
      static get Default() {
        return ze;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        const e =
            "auto" === this._config.method
              ? this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position"
              : this._config.method,
          t = "position" === e ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          n
            .find(this._selector)
            .map((i) => {
              const r = s(i),
                o = r ? n.findOne(r) : null;
              if (o) {
                const n = o.getBoundingClientRect();
                if (n.width || n.height) return [X[e](o).top + t, r];
              }
              return null;
            })
            .filter((e) => e)
            .sort((e, t) => e[0] - t[0])
            .forEach((e) => {
              this._offsets.push(e[0]), this._targets.push(e[1]);
            });
      }
      dispose() {
        H.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
      }
      _getConfig(e) {
        if (
          "string" !=
            typeof (e = {
              ...ze,
              ...X.getDataAttributes(this._element),
              ...("object" == typeof e && e ? e : {})
            }).target &&
          l(e.target)
        ) {
          let { id: t } = e.target;
          t || ((t = i("scrollspy")), (e.target.id = t)), (e.target = "#" + t);
        }
        return u("scrollspy", e, Be), e;
      }
      _getScrollTop() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }
      _getScrollHeight() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }
      _getOffsetHeight() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }
      _process() {
        const e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();
        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
          const e = this._targets[this._targets.length - 1];
          this._activeTarget !== e && this._activate(e);
        } else {
          if (
            this._activeTarget &&
            e < this._offsets[0] &&
            this._offsets[0] > 0
          )
            return (this._activeTarget = null), void this._clear();
          for (let t = this._offsets.length; t--; )
            this._activeTarget !== this._targets[t] &&
              e >= this._offsets[t] &&
              (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) &&
              this._activate(this._targets[t]);
        }
      }
      _activate(e) {
        (this._activeTarget = e), this._clear();
        const t = this._selector
            .split(",")
            .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
          i = n.findOne(t.join(","));
        i.classList.contains("dropdown-item")
          ? (n
              .findOne(".dropdown-toggle", i.closest(".dropdown"))
              .classList.add("active"),
            i.classList.add("active"))
          : (i.classList.add("active"),
            n.parents(i, ".nav, .list-group").forEach((e) => {
              n
                .prev(e, ".nav-link, .list-group-item")
                .forEach((e) => e.classList.add("active")),
                n.prev(e, ".nav-item").forEach((e) => {
                  n.children(e, ".nav-link").forEach((e) =>
                    e.classList.add("active")
                  );
                });
            })),
          H.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: e
          });
      }
      _clear() {
        n.find(this._selector)
          .filter((e) => e.classList.contains("active"))
          .forEach((e) => e.classList.remove("active"));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = We.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    H.on(window, "load.bs.scrollspy.data-api", () => {
      n.find('[data-bs-spy="scroll"]').forEach((e) => new We(e));
    }),
      b(We);
    class $e extends z {
      static get NAME() {
        return "tab";
      }
      show() {
        if (
          this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          this._element.classList.contains("active")
        )
          return;
        let e;
        const t = o(this._element),
          i = this._element.closest(".nav, .list-group");
        i &&
          ((e = n.find(
            "UL" === i.nodeName || "OL" === i.nodeName
              ? ":scope > li > .active"
              : ".active",
            i
          )),
          (e = e[e.length - 1]));
        const r = e
          ? H.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
          : null;
        if (
          H.trigger(this._element, "show.bs.tab", { relatedTarget: e })
            .defaultPrevented ||
          (null !== r && r.defaultPrevented)
        )
          return;
        this._activate(this._element, i);
        const s = () => {
          H.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
            H.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
        };
        t ? this._activate(t, t.parentNode, s) : s();
      }
      _activate(e, t, i) {
        const r = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
            ? n.children(t, ".active")
            : n.find(":scope > li > .active", t))[0],
          s = i && r && r.classList.contains("fade"),
          o = () => this._transitionComplete(e, r, i);
        r && s
          ? (r.classList.remove("show"), this._queueCallback(o, e, !0))
          : o();
      }
      _transitionComplete(e, t, i) {
        if (t) {
          t.classList.remove("active");
          const e = n.findOne(":scope > .dropdown-menu .active", t.parentNode);
          e && e.classList.remove("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !1);
        }
        e.classList.add("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !0),
          m(e),
          e.classList.contains("fade") && e.classList.add("show");
        let r = e.parentNode;
        if (
          (r && "LI" === r.nodeName && (r = r.parentNode),
          r && r.classList.contains("dropdown-menu"))
        ) {
          const t = e.closest(".dropdown");
          t &&
            n
              .find(".dropdown-toggle", t)
              .forEach((e) => e.classList.add("active")),
            e.setAttribute("aria-expanded", !0);
        }
        i && i();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = $e.getOrCreateInstance(this);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    H.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          h(this) || $e.getOrCreateInstance(this).show();
      }
    ),
      b($e);
    const Ue = { animation: "boolean", autohide: "boolean", delay: "number" },
      Xe = { animation: !0, autohide: !0, delay: 5e3 };
    class Ve extends z {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get DefaultType() {
        return Ue;
      }
      static get Default() {
        return Xe;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        H.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove("hide"),
          m(this._element),
          this._element.classList.add("showing"),
          this._queueCallback(
            () => {
              this._element.classList.remove("showing"),
                this._element.classList.add("show"),
                H.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this._element.classList.contains("show") &&
          (H.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.remove("show"),
            this._queueCallback(
              () => {
                this._element.classList.add("hide"),
                  H.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this._element.classList.contains("show") &&
            this._element.classList.remove("show"),
          super.dispose();
      }
      _getConfig(e) {
        return (
          (e = {
            ...Xe,
            ...X.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {})
          }),
          u("toast", e, this.constructor.DefaultType),
          e
        );
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n ||
          this._element.contains(n) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        H.on(
          this._element,
          "click.dismiss.bs.toast",
          '[data-bs-dismiss="toast"]',
          () => this.hide()
        ),
          H.on(this._element, "mouseover.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
          H.on(this._element, "mouseout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          ),
          H.on(this._element, "focusin.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
          H.on(this._element, "focusout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ve.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return (
      b(Ve),
      {
        Alert: B,
        Button: W,
        Carousel: ee,
        Collapse: ie,
        Dropdown: pe,
        Modal: _e,
        Offcanvas: Ee,
        Popover: Fe,
        ScrollSpy: We,
        Tab: $e,
        Toast: Ve,
        Tooltip: Me
      }
    );
  });
var pJS = function (e, t) {
  var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: n, w: n.offsetWidth, h: n.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 }
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {}
  };
  var i = this.pJS;
  t && Object.deepExtend(i, t),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance
    }),
    (i.fn.retinaInit = function () {
      i.retina_detect && window.devicePixelRatio > 1
        ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
        : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed =
          i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance =
          i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance =
          i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance =
          i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width =
          i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size =
          i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance =
          i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function () {
      i.canvas.ctx = i.canvas.el.getContext("2d");
    }),
    (i.fn.canvasSize = function () {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina &&
                ((i.canvas.w *= i.canvas.pxratio),
                (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable ||
                (i.fn.particlesEmpty(),
                i.fn.particlesCreate(),
                i.fn.particlesDraw(),
                i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function () {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function (e, t, n) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = n ? n.x : Math.random() * i.canvas.w),
        (this.y = n ? n.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var r =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(r);
        } else
          null != e.value.r &&
            null != e.value.g &&
            null != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            null != e.value.h &&
              null != e.value.s &&
              null != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (i.particles.opacity.random ? Math.random() : 1) *
        i.particles.opacity.value),
        i.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = i.particles.opacity.anim.speed / 100),
          i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var s = {};
      switch (i.particles.move.direction) {
        case "top":
          s = { x: 0, y: -1 };
          break;
        case "top-right":
          s = { x: 0.5, y: -0.5 };
          break;
        case "right":
          s = { x: 1, y: -0 };
          break;
        case "bottom-right":
          s = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          s = { x: 0, y: 1 };
          break;
        case "bottom-left":
          s = { x: -0.5, y: 1 };
          break;
        case "left":
          s = { x: -1, y: 0 };
          break;
        case "top-left":
          s = { x: -0.5, y: -0.5 };
          break;
        default:
          s = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = s.x),
          (this.vy = s.y),
          i.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = s.x + Math.random() - 0.5),
          (this.vy = s.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var o = i.particles.shape.type;
      if ("object" == typeof o) {
        if (o instanceof Array) {
          var a = o[Math.floor(Math.random() * o.length)];
          this.shape = a;
        }
      } else this.shape = o;
      if ("image" == this.shape) {
        var l = i.particles.shape;
        (this.img = {
          src: l.image.src,
          ratio: l.image.width / l.image.height
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type &&
            null != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      var e = this;
      if (null != e.radius_bubble) var t = e.radius_bubble;
      else t = e.radius;
      if (null != e.opacity_bubble) var n = e.opacity_bubble;
      else n = e.opacity;
      if (e.color.rgb)
        var r =
          "rgba(" +
          e.color.rgb.r +
          "," +
          e.color.rgb.g +
          "," +
          e.color.rgb.b +
          "," +
          n +
          ")";
      else
        r =
          "hsla(" +
          e.color.hsl.h +
          "," +
          e.color.hsl.s +
          "%," +
          e.color.hsl.l +
          "%," +
          n +
          ")";
      switch (
        ((i.canvas.ctx.fillStyle = r), i.canvas.ctx.beginPath(), e.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - t,
            e.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - t / (i.particles.shape.polygon.nb_sides / 3.5),
            e.y - t / 0.76,
            (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4),
            e.y - t / 1.52,
            (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == i.tmp.img_type) var s = e.img.obj;
          else s = i.tmp.img_obj;
          s &&
            i.canvas.ctx.drawImage(
              s,
              e.x - t,
              e.y - t,
              2 * t,
              (2 * t) / e.img.ratio
            );
      }
      i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 &&
          ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
          (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
          i.canvas.ctx.stroke()),
        i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function () {
      for (var e = 0; e < i.particles.number.value; e++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value)
        );
    }),
    (i.fn.particlesUpdate = function () {
      for (var e = 0; e < i.particles.array.length; e++) {
        var t = i.particles.array[e];
        if (i.particles.move.enable) {
          var n = i.particles.move.speed / 2;
          (t.x += t.vx * n), (t.y += t.vy * n);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == t.opacity_status
              ? (t.opacity >= i.particles.opacity.value &&
                  (t.opacity_status = !1),
                (t.opacity += t.vo))
              : (t.opacity <= i.particles.opacity.anim.opacity_min &&
                  (t.opacity_status = !0),
                (t.opacity -= t.vo)),
            t.opacity < 0 && (t.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == t.size_status
              ? (t.radius >= i.particles.size.value && (t.size_status = !1),
                (t.radius += t.vs))
              : (t.radius <= i.particles.size.anim.size_min &&
                  (t.size_status = !0),
                (t.radius -= t.vs)),
            t.radius < 0 && (t.radius = 0)),
          "bounce" == i.particles.move.out_mode)
        )
          var r = {
            x_left: t.radius,
            x_right: i.canvas.w,
            y_top: t.radius,
            y_bottom: i.canvas.h
          };
        else
          r = {
            x_left: -t.radius,
            x_right: i.canvas.w + t.radius,
            y_top: -t.radius,
            y_bottom: i.canvas.h + t.radius
          };
        switch (
          (t.x - t.radius > i.canvas.w
            ? ((t.x = r.x_left), (t.y = Math.random() * i.canvas.h))
            : t.x + t.radius < 0 &&
              ((t.x = r.x_right), (t.y = Math.random() * i.canvas.h)),
          t.y - t.radius > i.canvas.h
            ? ((t.y = r.y_top), (t.x = Math.random() * i.canvas.w))
            : t.y + t.radius < 0 &&
              ((t.y = r.y_bottom), (t.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            (t.x + t.radius > i.canvas.w || t.x - t.radius < 0) &&
              (t.vx = -t.vx),
              (t.y + t.radius > i.canvas.h || t.y - t.radius < 0) &&
                (t.vy = -t.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(t),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(t),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(t),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var s = e + 1; s < i.particles.array.length; s++) {
            var o = i.particles.array[s];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(t, o),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(t, o),
              i.particles.move.bounce && i.fn.interact.bounceParticles(t, o);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++)
        i.particles.array[e].draw();
    }),
    (i.fn.particlesEmpty = function () {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        (i.tmp.source_svg = void 0),
        (i.tmp.img_obj = void 0),
        (i.tmp.count_svg = 0),
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function (e, t) {
      var n = e.x - t.x,
        r = e.y - t.y,
        s = Math.sqrt(n * n + r * r);
      if (s <= i.particles.line_linked.distance) {
        var o =
          i.particles.line_linked.opacity -
          s /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (o > 0) {
          var a = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            "rgba(" + a.r + "," + a.g + "," + a.b + "," + o + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(t.x, t.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, t) {
      var n = e.x - t.x,
        r = e.y - t.y;
      if (Math.sqrt(n * n + r * r) <= i.particles.line_linked.distance) {
        var s = n / (1e3 * i.particles.move.attract.rotateX),
          o = r / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= s), (e.vy -= o), (t.vx += s), (t.vy += o);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, t) {
      var n = e.x - t.x,
        i = e.y - t.y;
      Math.sqrt(n * n + i * i) <= e.radius + t.radius &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
    }),
    (i.fn.modes.pushParticles = function (e, t) {
      i.tmp.pushing = !0;
      for (var n = 0; n < e; n++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * i.canvas.w,
            y: t ? t.pos_y : Math.random() * i.canvas.h
          })
        ),
          n == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r =
            1 -
            (l = Math.sqrt(t * t + n * n)) /
              i.interactivity.modes.bubble.distance;
        function s() {
          (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
        }
        if (l <= i.interactivity.modes.bubble.distance) {
          if (r >= 0 && "mousemove" == i.interactivity.status) {
            var o, a;
            i.interactivity.modes.bubble.size != i.particles.size.value &&
              (i.interactivity.modes.bubble.size > i.particles.size.value
                ? (o = e.radius + i.interactivity.modes.bubble.size * r) >= 0 &&
                  (e.radius_bubble = o)
                : (e.radius_bubble =
                    (o =
                      e.radius -
                      (e.radius - i.interactivity.modes.bubble.size) * r) > 0
                      ? o
                      : 0)),
              i.interactivity.modes.bubble.opacity !=
                i.particles.opacity.value &&
                (i.interactivity.modes.bubble.opacity >
                i.particles.opacity.value
                  ? (a = i.interactivity.modes.bubble.opacity * r) >
                      e.opacity &&
                    a <= i.interactivity.modes.bubble.opacity &&
                    (e.opacity_bubble = a)
                  : (a =
                      e.opacity -
                      (i.particles.opacity.value -
                        i.interactivity.modes.bubble.opacity) *
                        r) < e.opacity &&
                    a >= i.interactivity.modes.bubble.opacity &&
                    (e.opacity_bubble = a));
          }
        } else s();
        "mouseleave" == i.interactivity.status && s();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          (t = e.x - i.interactivity.mouse.click_pos_x),
            (n = e.y - i.interactivity.mouse.click_pos_y);
          var l = Math.sqrt(t * t + n * n),
            c = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          c > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            c > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        function u(t, n, r, s, o) {
          if (t != n)
            if (i.tmp.bubble_duration_end)
              null != r &&
                ((u =
                  t +
                  (t -
                    (s -
                      (c * (s - t)) / i.interactivity.modes.bubble.duration))),
                "size" == o && (e.radius_bubble = u),
                "opacity" == o && (e.opacity_bubble = u));
            else if (l <= i.interactivity.modes.bubble.distance) {
              if (null != r) var a = r;
              else a = s;
              if (a != t) {
                var u =
                  s - (c * (s - t)) / i.interactivity.modes.bubble.duration;
                "size" == o && (e.radius_bubble = u),
                  "opacity" == o && (e.opacity_bubble = u);
              }
            } else
              "size" == o && (e.radius_bubble = void 0),
                "opacity" == o && (e.opacity_bubble = void 0);
        }
        i.tmp.bubble_clicking &&
          (u(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          u(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(t * t + n * n),
          s = { x: t / r, y: n / r },
          o = clamp(
            (1 / (l = i.interactivity.modes.repulse.distance)) *
              (-1 * Math.pow(r / l, 2) + 1) *
              l *
              100,
            0,
            50
          ),
          a = { x: e.x + s.x * o, y: e.y + s.y * o };
        "bounce" == i.particles.move.out_mode
          ? (a.x - e.radius > 0 && a.x + e.radius < i.canvas.w && (e.x = a.x),
            a.y - e.radius > 0 && a.y + e.radius < i.canvas.h && (e.y = a.y))
          : ((e.x = a.x), (e.y = a.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var l = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            c = i.interactivity.mouse.click_pos_x - e.x,
            u = i.interactivity.mouse.click_pos_y - e.y,
            d = c * c + u * u,
            h = (-l / d) * 1;
          d <= l &&
            (function () {
              var t = Math.atan2(u, c);
              if (
                ((e.vx = h * Math.cos(t)),
                (e.vy = h * Math.sin(t)),
                "bounce" == i.particles.move.out_mode)
              ) {
                var n = { x: e.x + e.vx, y: e.y + e.vy };
                (n.x + e.radius > i.canvas.w || n.x - e.radius < 0) &&
                  (e.vx = -e.vx),
                  (n.y + e.radius > i.canvas.h || n.y - e.radius < 0) &&
                    (e.vy = -e.vy);
              }
            })();
        } else
          0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(t * t + n * n);
        if (r <= i.interactivity.modes.grab.distance) {
          var s =
            i.interactivity.modes.grab.line_linked.opacity -
            r /
              (1 / i.interactivity.modes.grab.line_linked.opacity) /
              i.interactivity.modes.grab.distance;
          if (s > 0) {
            var o = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle =
              "rgba(" + o.r + "," + o.g + "," + o.b + "," + s + ")"),
              (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(
                i.interactivity.mouse.pos_x,
                i.interactivity.mouse.pos_y
              ),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath();
          }
        }
      }
    }),
    (i.fn.vendors.eventsListeners = function () {
      (i.interactivity.el =
        "window" == i.interactivity.detect_on ? window : i.canvas.el),
        (i.interactivity.events.onhover.enable ||
          i.interactivity.events.onclick.enable) &&
          (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)
              var t = e.clientX,
                n = e.clientY;
            else (t = e.offsetX || e.clientX), (n = e.offsetY || e.clientY);
            (i.interactivity.mouse.pos_x = t),
              (i.interactivity.mouse.pos_y = n),
              i.tmp.retina &&
                ((i.interactivity.mouse.pos_x *= i.canvas.pxratio),
                (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
              (i.interactivity.status = "mousemove");
          }),
          i.interactivity.el.addEventListener("mouseleave", function (e) {
            (i.interactivity.mouse.pos_x = null),
              (i.interactivity.mouse.pos_y = null),
              (i.interactivity.status = "mouseleave");
          })),
        i.interactivity.events.onclick.enable &&
          i.interactivity.el.addEventListener("click", function () {
            if (
              ((i.interactivity.mouse.click_pos_x =
                i.interactivity.mouse.pos_x),
              (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
              (i.interactivity.mouse.click_time = new Date().getTime()),
              i.interactivity.events.onclick.enable)
            )
              switch (i.interactivity.events.onclick.mode) {
                case "push":
                  i.particles.move.enable ||
                  1 == i.interactivity.modes.push.particles_nb
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : i.interactivity.modes.push.particles_nb > 1 &&
                      i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  i.fn.modes.removeParticles(
                    i.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  i.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (i.tmp.repulse_clicking = !0),
                    (i.tmp.repulse_count = 0),
                    (i.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
              }
          });
    }),
    (i.fn.vendors.densityAutoParticles = function () {
      if (i.particles.number.density.enable) {
        var e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
        i.tmp.retina && (e /= 2 * i.canvas.pxratio);
        var t =
          i.particles.array.length -
          (e * i.particles.number.value) /
            i.particles.number.density.value_area;
        t < 0
          ? i.fn.modes.pushParticles(Math.abs(t))
          : i.fn.modes.removeParticles(t);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, t) {
      for (var n = 0; n < i.particles.array.length; n++) {
        var r = i.particles.array[n],
          s = e.x - r.x,
          o = e.y - r.y;
        Math.sqrt(s * s + o * o) <= e.radius + r.radius &&
          ((e.x = t ? t.x : Math.random() * i.canvas.w),
          (e.y = t ? t.y : Math.random() * i.canvas.h),
          i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      var t = i.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (
          t,
          n,
          i,
          r
        ) {
          if (e.color.rgb)
            var s =
              "rgba(" +
              e.color.rgb.r +
              "," +
              e.color.rgb.g +
              "," +
              e.color.rgb.b +
              "," +
              e.opacity +
              ")";
          else
            s =
              "hsla(" +
              e.color.hsl.h +
              "," +
              e.color.hsl.s +
              "%," +
              e.color.hsl.l +
              "%," +
              e.opacity +
              ")";
          return s;
        }),
        n = new Blob([t], { type: "image/svg+xml;charset=utf-8" }),
        r = window.URL || window.webkitURL || window,
        s = r.createObjectURL(n),
        o = new Image();
      o.addEventListener("load", function () {
        (e.img.obj = o),
          (e.img.loaded = !0),
          r.revokeObjectURL(s),
          i.tmp.count_svg++;
      }),
        (o.src = s);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, t, n, i, r, s) {
      var o = r * s,
        a = r / s,
        l = Math.PI - (Math.PI * ((180 * (a - 2)) / a)) / 180;
      e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
      for (var c = 0; c < o; c++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), "" != i.particles.shape.image.src))
        if ("svg" == e) {
          var t = new XMLHttpRequest();
          t.open("GET", i.particles.shape.image.src),
            (t.onreadystatechange = function (e) {
              4 == t.readyState &&
                (200 == t.status
                  ? ((i.tmp.source_svg = e.currentTarget.response),
                    i.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (i.tmp.img_error = !0)));
            }),
            t.send();
        } else {
          var n = new Image();
          n.addEventListener("load", function () {
            (i.tmp.img_obj = n), i.fn.vendors.checkBeforeDraw();
          }),
            (n.src = i.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (i.tmp.img_error = !0);
    }),
    (i.fn.vendors.draw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type
          ? i.tmp.count_svg >= i.particles.number.value
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : null != i.tmp.img_obj
          ? (i.fn.particlesDraw(),
            i.particles.move.enable
              ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
              : cancelRequestAnimFrame(i.fn.drawAnimFrame))
          : i.tmp.img_error ||
            (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
        : (i.fn.particlesDraw(),
          i.particles.move.enable
            ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
            : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }),
    (i.fn.vendors.checkBeforeDraw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type && null == i.tmp.source_svg
          ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
            i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
        : (i.fn.vendors.init(), i.fn.vendors.draw());
    }),
    (i.fn.vendors.init = function () {
      i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        (i.particles.line_linked.color_rgb_line = hexToRgb(
          i.particles.line_linked.color
        ));
    }),
    (i.fn.vendors.start = function () {
      isInArray("image", i.particles.shape.type)
        ? ((i.tmp.img_type = i.particles.shape.image.src.substr(
            i.particles.shape.image.src.length - 3
          )),
          i.fn.vendors.loadImg(i.tmp.img_type))
        : i.fn.vendors.checkBeforeDraw();
    }),
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start();
};
function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
    return t + t + n + n + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function isInArray(e, t) {
  return t.indexOf(e) > -1;
}
(Object.deepExtend = function (e, t) {
  for (var n in t)
    t[n] && t[n].constructor && t[n].constructor === Object
      ? ((e[n] = e[n] || {}), arguments.callee(e[n], t[n]))
      : (e[n] = t[n]);
  return e;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function (e, t) {
    "string" != typeof e && ((t = e), (e = "particles-js")),
      e || (e = "particles-js");
    var n = document.getElementById(e),
      i = n.getElementsByClassName("particles-js-canvas-el");
    if (i.length) for (; i.length > 0; ) n.removeChild(i[0]);
    var r = document.createElement("canvas");
    (r.className = "particles-js-canvas-el"),
      (r.style.width = "100%"),
      (r.style.height = "100%"),
      null != document.getElementById(e).appendChild(r) &&
        pJSDom.push(new pJS(e, t));
  }),
  (window.particlesJS.load = function (e, t, n) {
    var i = new XMLHttpRequest();
    i.open("GET", t),
      (i.onreadystatechange = function (t) {
        if (4 == i.readyState)
          if (200 == i.status) {
            var r = JSON.parse(t.currentTarget.response);
            window.particlesJS(e, r), n && n();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found");
      }),
      i.send();
  });
