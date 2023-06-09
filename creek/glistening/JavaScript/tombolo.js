!function(t) {
    var e = {};
    function n(o) {
        if (e[o])
            return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(o, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return o
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 6)
}([function(t, e) {
    t.exports = function() {
    }
}
, function(t, e) {
    t.exports = function() {
        window.isTouch = !("undefined" == typeof window || !("ontouchstart"in window || window.DocumentTouch && "undefined" != typeof document && document instanceof window.DocumentTouch)) || !("undefined" == typeof navigator || !navigator.maxTouchPoints && !navigator.msMaxTouchPoints),
        window.isTouch || document.documentElement.classList.add("non-touch")
    }
}
, function(t, e) {
    var n = function() {
        if ("undefined" == typeof window)
            return {
                animate: function() {},
                init: function() {}
            };
        var t, e, n, o, i, r, c = [0, 0, 1, 1, 2], a = 0, s = function() {
            t = 0,
            e = 220,
            o = [],
            r = document.querySelector(".js-iconLines"),
            n = [].map.call(r.querySelectorAll("path"), (function(t) {
                return t
            }
            )),
            a = Math.max.apply(Math, c) + 1,
            n.forEach((function(t, e) {
                i = n[e].getTotalLength(),
                o[e] = i,
                n[e].style.strokeDasharray = "".concat(i, " ").concat(i),
                n[e].style.strokeDashoffset = i
            }
            ))
        }, l = function i() {
            var r, s = t / e;
            s >= 1 || (t++,
            n.forEach((function(t, e) {
                var i;
                r = 1 - Math.max(0, Math.min(1, (s - c[e] / a) / (1 / a))),
                r = (i = r) * i * i,
                n[e].style.opacity = 1 === r ? 0 : 1,
                n[e].style.strokeDashoffset = Math.ceil(o[e] * r)
            }
            )),
            window.requestAnimationFrame(i))
        }, u = function() {
            s(),
            l()
        };
        return {
            init: function() {
                var t = document.querySelector(".js-iconLines");
                s(),
                t.removeEventListener("click", u),
                t.addEventListener("click", u)
            },
            animate: l
        }
    }();
    t.exports = n
}
, function(t, e) {
    var n = function() {
        if ("undefined" == typeof window)
            return {
                animate: function() {},
                init: function() {}
            };
        var t, e, n, o, i, r, c, a, s = [-1, -1, -1, -1], l = [0, .83, .9, 1], u = function() {
            var s;
            if (t = 0,
            n = 320,
            i = [],
            c = document.querySelector(".js-iconSpiral")) {
                for (o = c.querySelectorAll("path"),
                e = c.querySelector("circle"),
                a = o.length,
                s = 0; s < a; s++)
                    r = o[s].getTotalLength(),
                    i[s] = r,
                    o[s].style.strokeDasharray = "".concat(r, " ").concat(r),
                    o[s].style.strokeDashoffset = r,
                    o[s].style.opacity = 0;
                e.style.opacity = 0
            }
        }, d = function r() {
            var c, u, d = t / n;
            if (d = Math.max(0, Math.min(1, d = 1 - (1 - d) * (1 - d))),
            !((d = Math.pow(d, 1.5)) >= 1)) {
                for (t++,
                u = 0; u < a; u++) {
                    if (c = Math.max(0, Math.min(1, (l[u] || u / a) + 1 - 2 * d)),
                    c = Math.pow(c, 1.6),
                    c *= s[u] || 1,
                    o[u].style.strokeDashoffset = Math.ceil(i[u] * c),
                    u === a - 2 && 1 + c > 0) {
                        var f = o[u].getPointAtLength(Math.ceil((1 - (1 + c)) * i[u]));
                        e.style.transform = "translate3d(".concat(f.x, "px, ").concat(f.y, "px, 0)"),
                        e.setAttribute("cx", 0),
                        e.setAttribute("cy", 0)
                    } else
                        u === a - 2 && 1 + c <= 0 && (e.style.transform = "translate3d(-50px, -50px, 0)");
                    o[u].style.opacity = 1,
                    e.style.opacity = 1,
                    o[a - 1].style.opacity = d >= .9 ? 0 : 1
                }
                window.requestAnimationFrame(r)
            }
        }, f = function() {
            u(),
            d()
        };
        return {
            init: function() {
                var t = document.querySelector(".js-iconSpiral");
                u(),
                t.removeEventListener("click", f),
                t.addEventListener("click", f)
            },
            animate: d
        }
    }();
    t.exports = n
}
, function(t, e) {
    var n = function() {
        if ("undefined" == typeof window)
            return {
                animate: function() {},
                init: function() {}
            };
        var t, e, n, o = {
            current: 0,
            outerLen: 0,
            frames: 160
        }, i = .3125, r = .5;
        o.outerLen = 2 * Math.PI * 475;
        var c = function(t) {
            return t
        };
        function a() {
            if (t) {
                var s, l = o.current / o.frames, u = Math.min(1, l / i), d = Math.min(l / r, 1), f = Math.min(1, (l - i) / (r - i)), m = (l - r) / (1 - r);
                l < r ? (t.style.opacity = 1,
                t.style.fill = "none",
                e.style.transform = "none",
                s = 135 * Math.max(0, f),
                n.style.opacity = 1,
                n.style.transform = "rotate(".concat(225 + s, "deg) translate3d(0, -").concat(41.5, "%, 0) scale(").concat(Math.min(u, 1), ")"),
                t.style.strokeDashoffset = Math.ceil(o.outerLen * (1 - d)),
                t.style.transform = "rotate(-90deg)",
                t.style.fill = "none",
                e.style.transform = "none") : l <= 1 && (t.style.strokeDashoffset = 0,
                s = 450 * c(m),
                e.style.transform = "scale(".concat(1 - .8 * m, ")"),
                n.style.transform = "rotate(".concat(s, "deg) translate3d(0, ").concat(41.5 * (m - 1), "%, 0)"),
                t.style.fill = "#fff"),
                o.current++,
                l >= 1 || requestAnimationFrame(a)
            }
        }
        function s() {
            var i = document.querySelector(".js-iconTurn");
            if (i) {
                o.current = 0,
                t = document.querySelector(".turnOuter"),
                e = document.querySelector(".turnInner"),
                n = document.querySelector(".turnDot"),
                i.removeEventListener("click", l),
                i.addEventListener("click", l);
                var r = o.outerLen;
                t.style.strokeDasharray = "".concat(r, " ").concat(r),
                t.style.strokeDashoffset = r,
                t.style.opacity = 0,
                n.style.opacity = 0
            }
        }
        function l() {
            s(),
            a()
        }
        return {
            animate: a,
            init: s
        }
    }();
    t.exports = n
}
, function(t, e) {
    var n = function() {
        if ("undefined" == typeof window)
            return {
                animate: function() {},
                init: function() {}
            };
        var t, e, n, o, i = function() {
            t = 0,
            e = 210,
            o = document.querySelector(".js-iconDots"),
            (n = [].map.call(o.querySelectorAll("circle"), (function(t) {
                return t
            }
            ))).forEach((function(t) {
                t.style.opacity = 0
            }
            ))
        }, r = function o() {
            var i, r = t / e;
            r >= 1 ? n.forEach((function(t, e) {
                n[e].style.transform = "scale(1)"
            }
            )) : (t++,
            n.forEach((function(t, e) {
                var o;
                i = Math.max(0, Math.min(1, (r - e / n.length) / (1 / n.length))),
                o = i,
                i = 1 - --o * o * o * o,
                n[e].style.opacity = 0 === i ? 0 : 1,
                n[e].style.transform = "scale(".concat(i, ")")
            }
            )),
            window.requestAnimationFrame(o))
        }, c = function() {
            i(),
            r()
        };
        return {
            init: function() {
                var t = document.querySelector(".js-iconDots");
                i(),
                t.removeEventListener("click", c),
                t.addEventListener("click", c)
            },
            animate: r
        }
    }();
    t.exports = n
}
, function(t, e, n) {
    n(8),
    t.exports = n(7)
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(2)
      , i = n.n(o)
      , r = n(3)
      , c = n.n(r)
      , a = n(4)
      , s = n.n(a)
      , l = n(5)
      , u = n.n(l)
      , d = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      , f = n(0)
      , m = n.n(f);
    function p(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, o)
        }
        return n
    }
    function w(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? y(Object(n), !0).forEach((function(e) {
                h(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function h(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    var b = {
        currentSectionIndex: !1,
        isMobile: !1,
        isScrollingToSection: !1,
        sections: []
    }
      , g = w({}, b)
      , v = function(t, e) {
        var n, o;
        if (!g.isScrollingToSection) {
            if (t.sections = t.sections || t.el.querySelectorAll(".js-section"),
            !t.sectionPositions) {
                t.sectionPositions = [];
                var i = g.isMobile ? 0 : -88;
                [].forEach.call(t.sections, (function(e) {
                    t.sectionPositions = [].concat(p(t.sectionPositions), [e.offsetTop + i])
                }
                )),
                t.sectionsNo = t.sectionPositions.length
            }
            for (n = t.sectionsNo - 1,
            o = 0; o < t.sectionsNo + 1; o++)
                t.sectionPositions[o] <= e && (n = o);
            var r;
            n !== g.currentSectionIndex && (g.currentSectionIndex = n,
            r = !1 !== g.currentSectionIndex ? g.sections[g.currentSectionIndex] : "",
            window.history.pushState(null, null, "#".concat(r)))
        }
    }
      , T = function(t) {
        var e = t.from
          , n = t.to;
        return .667 * Math.max(.3, Math.min(3, Math.abs(e - n) / tt.getWindowHeight()))
    }
      , x = function(t) {
        var e = t.target.getAttribute("href")
          , n = document.querySelector(e);
        if (n && "#" === e.charAt(0)) {
            var o = g.sections.indexOf(n.id);
            o && (g.currentSectionIndex = o);
            var i = n.offsetTop
              , r = window.scrollY
              , c = i > r || window.matchMedia("(max-width: 1024px)").matches ? 0 : -88;
            g.isScrollingToSection = !0,
            d && document.body.classList.add("is-scrolling"),
            et.to({
                y: Math.max(0, i + c),
                speed: T({
                    from: r,
                    to: i
                }),
                callback: function() {
                    g.isScrollingToSection = !1,
                    d && document.body.classList.remove("is-scrolling")
                }
            })
        }
    }
      , S = function() {
        var t = encodeURIComponent(window.location.hash.replace("#", "")) || ""
          , e = document.querySelector("".concat(".js-section", '[id="').concat(t, '"]'));
        e && (g.isScrollingToSection = !0,
        setTimeout((function() {
            window.scrollTo(0, e.offsetTop),
            g.isScrollingToSection = !1
        }
        ), 0))
    }
      , O = function() {
        var t = window.matchMedia("(max-width: ".concat(1023, "px)")).matches;
        g.isMobile !== t && (g.isMobile = t)
    }
      , L = {
        init: function() {
            (g = w({}, b)).isMobile = window.matchMedia("(max-width: ".concat(1023, "px)")).matches,
            [].forEach.call(document.querySelectorAll('a[href*="#"]'), (function(t) {
                return t.addEventListener("click", x)
            }
            )),
            [].forEach.call(document.querySelectorAll(".js-section"), (function(t) {
                g.sections = [].concat(p(g.sections), [t.id])
            }
            )),
            S(),
            tt.addCallback("links", v, !0),
            window.addEventListener("resize", O)
        }
    };
    var j = function(t) {
        return t.replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
    };
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || !1;
    var A, E, M, k, P = ".js-scroll", D = 88, q = {
        disabled: !1,
        resizeTimeout: null
    }, H = [], I = !1, C = !1, F = !1, W = null, z = 0, V = {}, Y = {};
    function _() {
        k = document.querySelectorAll(P)
    }
    function B(t) {
        var e = t.getBoundingClientRect()
          , n = window.scrollY || window.pageYOffset
          , o = t.getAttribute("data-callback") || !1;
        return {
            el: t,
            callback: o,
            top: e.top + n,
            left: e.left,
            height: t.offsetHeight
        }
    }
    function R() {
        H = Array.prototype.map.call(k, B) || []
    }
    function N(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = t;
        return t.callback && (e && t.callback in Y ? n = Y[t.callback](t, A) || n : t.callback in V && (n = V[t.callback](t, A) || n)),
        n
    }
    function Q(t, e, n) {
        Object.keys(e).forEach((function(o) {
            var i = e[o]
              , r = j(o);
            n ? i !== t.states[o] && (i ? t.el.classList.add(r) : t.el.classList.remove(r)) : i ? t.el.classList.add(r) : t.el.classList.remove(r)
        }
        ))
    }
    var U = [{
        name: "isInView",
        test: function(t) {
            return t.scrollTop + t.windowHeight > t.top && t.scrollTop <= t.top + t.height
        }
    }, {
        name: "isPastHalf",
        test: function(t) {
            return t.scrollTop + t.windowHeight / 2 >= t.top
        }
    }, {
        name: "isPastQuarter",
        test: function(t) {
            return t.scrollTop + .75 * t.windowHeight >= t.top
        }
    }, {
        name: "isPastTop",
        test: function(t) {
            return t.scrollTop >= t.top
        }
    }, {
        name: "isPastBottom",
        test: function(t) {
            return t.scrollTop + t.windowHeight > t.top + t.height
        }
    }, {
        name: "isPastMiddle",
        test: function(t) {
            return t.scrollTop + t.windowHeight / 2 > t.top + .5 * t.height
        }
    }, {
        name: "isHalfPastBottom",
        test: function(t) {
            return t.scrollTop + t.windowHeight > t.top + 1.5 * t.height
        }
    }, {
        name: "isQuarterPastBottom",
        test: function(t) {
            return t.scrollTop + t.windowHeight > t.top + 1.25 * t.height
        }
    }];
    function X(t) {
        var e = t
          , n = {};
        return U.forEach((function(t) {
            n[t.name] = t.test({
                scrollTop: A,
                windowHeight: E,
                top: e.top,
                height: e.height
            })
        }
        )),
        n.isInView && (e = N(e) || e),
        e.states ? Q(e, n, e.states) : Q(e, n),
        (e = N(e, !0) || e).states = n,
        e
    }
    function $() {
        return !q.disabled && (A = window.scrollY || window.pageYOffset,
        H = H.map(X),
        z === A || F ? z === A && F && (clearTimeout(W),
        F = !1,
        W = setTimeout((function() {
            document.body.classList.remove("scrolling-in-progress")
        }
        ), 100)) : (clearTimeout(W),
        document.body.classList.add("scrolling-in-progress"),
        F = !0),
        z > A && !C && A > 0 ? A >= D && (document.body.classList.add("scrolling-up"),
        C = !0) : z < A && C && (document.body.classList.remove("scrolling-up"),
        C = !1),
        A < D ? document.body.classList.add("is-at-top") : document.body.classList.remove("is-at-top"),
        z = A,
        !0)
    }
    function Z() {
        return !!I && ($(),
        window.requestAnimFrame(Z),
        !0)
    }
    function G() {
        E = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        M = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
    function J() {
        G(),
        R()
    }
    function K() {
        clearTimeout(q.resizeTimeout),
        q.resizeTimeout = setTimeout((function() {
            window.requestAnimFrame(J)
        }
        ), 100)
    }
    var tt = {
        addCallback: function(t, e) {
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Y[t] = e : V[t] = e
        },
        buildCache: R,
        destroy: function() {
            I = !1,
            window.removeEventListener("resize", K),
            k = null
        },
        disable: function() {
            q.disabled = !0
        },
        enable: function() {
            q.disabled = !1
        },
        getScrollY: function() {
            return A
        },
        getWindowHeight: function() {
            return E
        },
        getWindowWidth: function() {
            return M
        },
        indexElements: _,
        init: function() {
            I = !0,
            _(),
            G(),
            R(),
            Z(),
            window.addEventListener("resize", K)
        },
        rebuildCache: function() {
            _(),
            R()
        }
    }
      , et = function() {
        if ("undefined" == typeof window)
            return {};
        var t = window.gsap
          , e = {};
        function n() {
            window.scrollTo(e.x, e.y)
        }
        function o(o) {
            var i = o.animate
              , r = void 0 === i || i
              , c = o.callback
              , a = void 0 !== c && c
              , s = o.ease
              , l = void 0 === s ? "power2.out" : s
              , u = o.speed
              , d = void 0 === u ? 1.4 : u
              , f = o.x
              , m = void 0 === f ? 0 : f
              , p = o.y
              , y = void 0 === p ? 0 : p;
            e.x = Math.max(document.body.scrollLeft, window.pageXOffset),
            e.y = Math.max(document.body.scrollTop, window.pageYOffset),
            r ? t.to(e, d, {
                ease: l,
                onUpdate: n,
                onComplete: a,
                x: m,
                y: y
            }) : (window.scrollTo(m, y),
            a && a())
        }
        return {
            scrollTo: o,
            to: o
        }
    }()
      , nt = {
        tabbing: !1
    }
      , ot = function(t) {
        9 === t.keyCode && !nt.tabbing && (nt.tabbing = !0,
        document.documentElement.classList.remove("not-tabbing"))
    }
      , it = {
        destroy: function() {
            document.documentElement.classList.remove("not-tabbing"),
            document.removeEventListener("keydown", ot)
        },
        init: function() {
            document.documentElement.classList.add("not-tabbing"),
            document.addEventListener("keydown", ot)
        }
    }
      , rt = function(t) {
        var e = t.currentTarget
          , n = e.parentElement.querySelector('[role="tabpanel"]');
        e && n && (t.preventDefault(),
        e.tabToggleDebounce = e.tabToggleDebounce || null,
        e.tabToggleDebounce || (clearTimeout(e.tabToggleDebounce),
        e.tabToggleDebounce = setTimeout((function() {
            e.tabToggleDebounce = null
        }
        ), 400),
        function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.expand
              , n = t.tab
              , o = t.tabpanel
              , i = o.scrollHeight;
            o.tabToggleTimeout = o.tabToggleTimeout || null,
            clearTimeout(o.tabToggleTimeout),
            e ? (n.setAttribute("aria-selected", "true"),
            o.setAttribute("style", "height: ".concat(i, "px")),
            o.setAttribute("aria-hidden", "false"),
            o.tabToggleTimeout = setTimeout((function() {
                o.setAttribute("style", "height: auto")
            }
            ), 400)) : (n.setAttribute("aria-selected", "false"),
            o.setAttribute("style", "height: ".concat(i, "px")),
            o.tabToggleTimeout = setTimeout((function() {
                o.setAttribute("style", "height: 0"),
                o.setAttribute("aria-hidden", "true")
            }
            ), 25)),
            setTimeout(tt.rebuildCache, 425)
        }({
            tab: e,
            tabpanel: n,
            expand: 0 === n.offsetHeight
        })))
    }
      , ct = {
        init: function() {
            [].forEach.call(document.querySelectorAll('.js-toggleTab > [role="tab"]'), (function(t) {
                t.removeEventListener("click", rt),
                t.addEventListener("click", rt)
            }
            ))
        }
    }
      , at = n(1)
      , st = n.n(at);
    function lt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, o)
        }
        return n
    }
    function ut(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    var dt, ft = {
        inView: []
    }, mt = {
        init: function() {
            dt = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lt(Object(n), !0).forEach((function(e) {
                        ut(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }({}, ft);
            var t = [s.a, c.a, u.a, i.a];
            tt.addCallback("techIcon", (function(e) {
                e.index = e.index >= 0 ? e.index : 1 * e.el.getAttribute("data-index");
                var n = e.index;
                e.states && e.states.isInView !== dt.inView[n] && (dt.inView[n] = e.states.isInView,
                dt.inView[n] && t[n] && (t[n].init(),
                setTimeout((function() {
                    t[n].animate()
                }
                ), function(t) {
                    return window.matchMedia("(max-width: 1023px)").matches ? 200 : 800 + 400 * t
                }(n))))
            }
            ))
        }
    }, pt = {
        isActive: !1,
        isDown: !1,
        el: null,
        elDot: null,
        dotScale: .25,
        dotTween: null,
        scale: .25,
        x: "undefined" != typeof window ? .5 * window.innerWidth : 0,
        y: "undefined" != typeof window ? .5 * window.innerHeight : 0
    }, yt = function(t) {
        var e = t.clientX
          , n = t.clientY;
        pt.x = e,
        pt.y = n
    }, wt = function() {
        pt.isActive = !0
    }, ht = function() {
        pt.isActive = !1
    }, bt = function() {
        pt.isDown = !0
    }, gt = function() {
        pt.isDown = !1
    }, vt = {
        init: function() {
            pt.el = document.querySelector(".pointer"),
            pt.el && (pt.elDot = pt.el.children[0],
            pt.el.style.opacity = 1,
            function t() {
                pt.scale = .25,
                pt.isActive && (pt.scale = 1),
                pt.isDown && (pt.scale = 2),
                pt.el.style.transform = "translate3d(".concat(pt.x, "px, ").concat(pt.y, "px, 0)"),
                pt.scale !== pt.dotScale && window.gsap.to(pt, .1, {
                    dotScale: pt.scale,
                    overwrite: !0
                }),
                pt.elDot.style.transform = "scale(".concat(pt.dotScale, ")"),
                window.requestAnimationFrame(t)
            }(),
            document.addEventListener("mousemove", yt),
            document.addEventListener("mousedown", bt),
            document.addEventListener("mouseup", gt),
            [].forEach.call(document.querySelectorAll("a, button"), (function(t) {
                t.addEventListener("mouseenter", wt),
                t.addEventListener("mouseleave", ht)
            }
            )))
        }
    };
    L.init(),
    tt.init(),
    it.init(),
    ct.init(),
    st()(),
    m()(),
    vt.init(),
    mt.init()
}
]);
