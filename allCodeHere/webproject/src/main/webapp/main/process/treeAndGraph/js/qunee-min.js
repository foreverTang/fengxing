/**
 * This file is part of Qunee for HTML5.
 * Copyright (c) 2015 by qunee.com
 **/
window.Q = function (t, i, n) {
    "use strict";

    function e(t, i, n) {
        if (t.hasChildren()) {
            var s = t._fr || t[Fh]();
            if (s) {
                s = s._jw || s;
                for (var h = 0, r = s[Gh]; r > h; h++)
                    if (i.call(n, s[h]) === !1 || e(s[h], i, n) === !1) return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t.hasChildren()) return t instanceof aF ? t : null;
        for (var i, n = t._fr._jw, e = n.length - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }

    function h(t, i, n, e) {
        return e ? r(t, i, n) : a(t, i, n)
    }

    function r(t, i, n) {
        t = t._jw || t;
        for (var e, s = 0, h = t.length; h > s; s++)
            if (e = t[s], e.hasChildren() && !r(e.children, i, n) || i[zh](n, e) === !1) return !1;
        return !0
    }

    function a(t, i, n) {
        t = t._jw || t;
        for (var e, s = 0, h = t[Gh]; h > s; s++)
            if (e = t[s], i[zh](n, e) === !1 || e[qh]() && !a(e[Yh], i, n)) return !1;
        return !0
    }

    function o(t, i, n, e) {
        return e ? f(t, i, n) : _(t, i, n)
    }

    function f(t, i, n) {
        t = t._jw || t;
        for (var e, s = t[Gh], h = s - 1; h >= 0; h--)
            if (e = t[h], e[qh]() && !f(e[Yh], i, n) || i[zh](n, e) === !1) return !1;
        return !0
    }

    function _(t, i, n) {
        t = t._jw || t;
        for (var e, s = t[Gh], h = s - 1; h >= 0; h--)
            if (e = t[h], i[zh](n, e) === !1 || e.hasChildren() && !_(e[Yh], i, n)) return !1;
        return !0
    }

    function c(t, i, n) {
        for (var e, s = (t._jw || t).slice(0); s.length;) {
            e = s[0], s = s.splice(1);
            var h = i[zh](n, e);
            if (h === !1) return !1;
            if (e.hasChildren()) {
                var r = e[Yh];
                r = r._jw || r, s = s.concat(r)
            }
        }
        return !0
    }

    function u(t, i, n) {
        for (var e, s = (t._jw || t)[Hh](0); s.length;) {
            e = s[s[Gh] - 1], s = s[Uh](0, s.length - 1);
            var h = i[zh](n, e);
            if (h === !1) return !1;
            if (e[qh]()) {
                var r = e[Yh];
                r = r._jw || r, s = s[Wh](r)
            }
        }
        return !0
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[Gh], s = n[Gh], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return r
        }

        function e(t) {
            var i = t[Gh],
                s = Math[Xh](i / 2);
            return 1 >= i ? t : n(e(t[Hh](0, s)), e(t[Hh](s)))
        }
        return e(t)
    }

    function l(t, i, n, e) {
        t instanceof vj && (t = t._jw);
        for (var s = 0, h = (t._jw || t)[Gh]; h > s; s++) {
            var r = i[zh](n, t[s], s, e);
            if (r === !1) return !1
        }
        return !0
    }

    function b(t, i, n) {
        for (var e = t instanceof vj, s = t._jw || t, h = 0, r = s[Gh]; r > h; h++) {
            var a = s[h];
            i[zh](n, a) && (e ? t[Vh](a) : t.splice(h, 1), h--, r--)
        }
    }

    function v(t, i, n, e) {
        t instanceof vj && (t = t._jw);
        for (var s = (t._jw || t)[Gh] - 1; s >= 0; s--) {
            var h = i[zh](n, t[s], s, e);
            if (h === !1) return !1
        }
        return !0
    }

    function g(t) {
        if (t[Zh] instanceof Function) return t[Zh](!0);
        var i, n = [];
        return l(t, function (t) {
            i = t && t[Zh] instanceof Function ? t[Zh]() : t, n[Kh](i)
        }, this), n
    }

    function y(t, i, e) {
        e === n || 0 > e ? t[Kh](i) : t[Uh](e, 0, i)
    }

    function p(t, i) {
        var n = t[Jh](i);
        return 0 > n || n >= t[Gh] ? !1 : t[Uh](n, 1)
    }

    function x(t, i) {
        var n = !1;
        return l(t, function (t) {
            return i == t ? (n = !0, !1) : void 0
        }), n
    }

    function m(t, i, n) {
        return i instanceof Object ? t = z(i, t) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
    }

    function E(i, n) {
        return n && (i = z(n, i)), t[Qh](i)
    }

    function w(t, i) {
        return t[tr] = i, t
    }

    function T(t, i) {
        if (!t.hasOwnProperty(ir)) {
            var n = t.getAttribute(nr);
            if (!n) return w(t, i);
            for (var e = n.split(er), s = 0, h = e.length; h > s; s++)
                if (e[s] == i) return;
            return n += er + i, w(t, n)
        }
        t.classList[sr](i)
    }

    function k(t, i) {
        if (!t.hasOwnProperty(ir)) {
            var n = t.getAttribute(nr);
            if (!n || !n[Jh](i)) return;
            for (var e = "", s = n[hr](er), h = 0, r = s[Gh]; r > h; h++) s[h] != i && (e += s[h] + er);
            return w(t, e)
        }
        t.classList[Vh](i)
    }

    function M(t) {
        return t instanceof Number || rr == typeof t
    }

    function S(t) {
        return t !== n && (t instanceof String || ar == typeof t)
    }

    function I(t) {
        return t !== n && (t instanceof Boolean || or == typeof t)
    }

    function O(t) {
        return Array[fr](t)
    }

    function A(i) {
        i || (i = t.event), i[_r] ? i.preventDefault() : i.returnValue = !1
    }

    function C(i) {
        i || (i = t[cr]), i[ur] ? i[ur]() : i.cancelBubble || (i[dr] = !0)
    }

    function P(t) {
        A(t), C(t)
    }

    function L(t) {
        return Math[lr](Math[br]() * t)
    }

    function R() {
        return Math[br]() >= .5
    }

    function D(t, i) {
        var n = t;
        for (var e in i)
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(e),
                    h = i.__lookupSetter__(e);
                s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e]
            } else n[e] = i[e];
        return n
    }

    function N(t, i, n) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        vr == typeof i && (e = i, i = t, t = function () {
            i[gr](this, arguments)
        });
        var s = t.prototype,
            h = function () {};
        return h.prototype = i.prototype, t[yr] = new h, t[pr] = i[yr], t[pr].constructor = i, D(t[yr], s), e && D(t.prototype, e), n && D(t.prototype, n), t.prototype[nr] = t, t
    }

    function j(t, i, n) {
        return B(t, i, "constructor", n)
    }

    function B(t, i, n, e) {
        var s = i[pr];
        if (s) {
            var h = s[n];
            return h ? h[gr](t, e) : void 0
        }
    }

    function $(t) {
        return t[xr](4)
    }

    function F(t) {
        delete t[mr], delete t[Er]
    }

    function G(t, i) {
        t[i] && (F(t[i]), delete t[i])
    }

    function z(t, i) {
        var n = function () {
            return n[Er].apply(n.scope, arguments)
        };
        return n.handle = i, n[mr] = t, n
    }

    function q(t, i) {
        return t == i
    }

    function Y(t, i, e, s, h) {
        if (s) return void Object[wr](t, i, {
            value: e,
            enumerable: !0
        });
        var r = {
                configurable: !0,
                enumerable: !0
            },
            a = Tr + i;
        e !== n && (t[a] = e), r[kr] = function () {
            return this[a]
        }, r[Mr] = function (t) {
            var n = this[a];
            if (q(n, t)) return !1;
            var e = new Dj(this, i, t, n);
            return this[Sr](e) ? (this[a] = t, h && h[zh](this, t, n), this[Ir](e), !0) : !1
        }, Object.defineProperty(t, i, r)
    }

    function H(t, i) {
        for (var n = 0, e = i.length; e > n; n++) {
            var s = i[n];
            Y(t, s.name || s, s[Or] || s.value, s.readOnly, s[Ar])
        }
    }

    function U(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[lr](16777215 * Math.random());
            return Cr + (i >> 16 & 255) + Pr + (i >> 8 & 255) + Pr + (255 & i) + Pr + t.toFixed(2) + Lr
        }
        return V(Math[lr](16777215 * Math[br]()))
    }

    function W(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t)
    }

    function X(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }

    function V(t) {
        return 16777216 > t ? Rr + (Dr + t.toString(16)).slice(-6) : Cr + (t >> 16 & 255) + Pr + (t >> 8 & 255) + Pr + (255 & t) + Pr + ((t >> 24 & 255) / 255)[xr](2) + Lr
    }

    function Z(t, i, n) {
        vr != typeof n || n.hasOwnProperty(Nr) || (n.enumerable = !0), Object[wr](t, i, n)
    }

    function K(t, i) {
        for (var n in i)
            if (jr != n[0]) {
                var e = i[n];
                vr != typeof e || e.hasOwnProperty(Nr) || (e[Nr] = !0)
            }
        Object[Br](t, i)
    }

    function J(i, n) {
        n || (n = t);
        for (var e = i.split($r), s = 0, h = e[Gh]; h > s; s++) {
            var r = e[s];
            n = n[r]
        }
        return n
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[Fr] !== n
    }

    function ti(i) {
        t[Gr] && console[zr](i)
    }

    function ii(i) {
        t[Gr] && console[qr](i)
    }

    function ni(i) {
        t.console && console.error(i)
    }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._o2 ? (e = -1, h = 0, s = i) : 0 == t._o1 ? (e = 0, h = 1, s = n) : (e = -1 / t._o2, s = (t._o2 - e) * i + t._o3, h = 1);
        var r = new mj;
        return r._o2 = e, r._o3 = s, r._o1 = h, r._nx = i, r._nz = n, r._lb = Math[Yr](e, h), r._o1os = Math[Hr](r._lb), r._sin = Math[Ur](r._lb), r
    }

    function si(t, i, n, e, s) {
        var h, r;
        i > e ? h = -1 : e > i && (h = 1), n > s ? r = -1 : s > n && (r = 1);
        var a, o;
        if (!h) return o = 0 > r ? t.y : t[Wr], {
            x: i,
            y: o
        };
        if (!r) return a = 0 > h ? t.x : t[Xr], {
            x: a,
            y: n
        };
        var f = (n - s) / (i - e),
            _ = n - f * i,
            c = 0 > h ? i - t.x : i - t[Xr],
            u = 0 > r ? n - t.y : n - t[Wr];
        return Math.abs(f) >= Math[Vr](u / c) ? (o = 0 > r ? t.y : t[Wr], a = (o - _) / f) : (a = 0 > h ? t.x : t[Xr], o = f * a + _), {
            x: a,
            y: o
        }
    }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
    }

    function ri(t, i, n, e, s, h) {
        return s >= t && t + n >= s && h >= i && i + e >= h
    }

    function ai(t, i, n, e, s, h, r, a) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + a
    }

    function oi(t, i, e) {
        if (!t) return {
            x: 0,
            y: 0
        };
        if (t.x !== n) return {
            x: t.x,
            y: t.y
        };
        var s, h, r = t.horizontalPosition,
            a = t[Zr];
        switch (r) {
        case Mj:
            s = 0;
            break;
        case Ij:
            s = i;
            break;
        default:
            s = i / 2
        }
        switch (a) {
        case Oj:
            h = 0;
            break;
        case Cj:
            h = e;
            break;
        default:
            h = e / 2
        }
        return {
            x: s,
            y: h
        }
    }

    function fi(t, i, n) {
        t[Yh].add(i, n), t[Kr](i, n)
    }

    function _i(t, i) {
        t._fr && (t._fr.remove(i), t[Jr](i))
    }

    function ci(t) {
        return t[Qr](/^-ms-/, ta).replace(/-([\da-z])/gi, function (t, i) {
            return i[ia]()
        })
    }

    function ui(t) {
        return t[Qr](/[A-Z]/g, function (t) {
            return na + t[ea]()
        }).replace(/^ms-/, sa)
    }

    function di(t, i) {
        var n = t[ha];
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = Jj(e)) && (n[s] = i[e]);
        return t
    }

    function li(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = Jj(i)) && (e += ui(n) + ra + t[i] + aa);
        return e ? e[oa](0, e[Gh] - 1) : e
    }

    function bi(t, i, n) {
        (i = Jj(i)) && (t.style[i] = n)
    }

    function vi(t, i) {
        return Zj ? (i && !S(i) && (i = li(i)), Zj[fa] ? void Zj[fa](t + _a + i + ca, 0) : void(Zj.addRule && Zj.addRule(t, i, 0))) : !1
    }

    function gi(i, n) {
        i[Fr] && (i = i[ua] && i.changedTouches.length ? i[ua][0] : i[Fr][0]);
        var e = n.getBoundingClientRect(),
            s = i[da] || 0,
            h = i.clientY || 0;
        return fj && sj && (t[la] && s == i[ba] && (s -= t.pageXOffset), t[va] && h == i[ga] && (h -= t[va])), {
            x: s - e[ya],
            y: h - e[pa]
        }
    }

    function yi(t, i) {
        return this[Tr + i] = tB(t, i, function (t) {
            return wi[zh](this, t, i)
        }, !1, this)
    }

    function pi(t) {
        var i = this;
        return t[xa] = function () {
            return i._l0.getElementByMouseEvent(t)
        }, t[ma] = function () {
            return i._l0.getUIByMouseEvent(t)
        }, t
    }

    function xi(t) {
        this.__o1ancelClick || (this.__o1lickEvent = t, this.__o1lickTime ? this.__o1lickTime++ : (this.__o1lickTime = 1, setTimeout(z(this, function () {
            if (this.__o1lickEvent) {
                var t = this.__o1lickTime;
                this.__o1lickTime = 0, 1 == t ? this._iu(this.__o1lickEvent, Ea) : t > 1 && this._iu(this.__o1lickEvent, wa), this.__o1lickEvent = null
            }
        }), lj[Ta])))
    }

    function mi(t) {
        if (t.touches) {
            for (var i = t[Fr], n = [], e = 0, s = i[Gh]; s > e; e++) {
                var h = i[e];
                n[Kh]({
                    pageX: h.pageX,
                    pageY: h[ga],
                    clientX: h[da],
                    clientY: h[ka]
                })
            }
            return {
                timeStamp: t[Ma],
                touches: n,
                scale: t[Sa]
            }
        }
        return {
            timeStamp: t[Ma],
            x: t[da],
            y: t[ka]
        }
    }

    function Ei(t, i) {
        switch (i) {
        case "touchstart":
            if (t[Fr][Gh] >= 2) return this._9w = mi(t), this._df.clear(), this._1z(), void(this._db || (this._db = t, this._9w = mi(t)));
        case "mousedown":
            if (P(t), 2 == t.button) return;
            if (this._iu(t, Ia), this._db = t, this._9w = mi(t), t[Oa] || (this.__onLongPressFunction ? this.__longPressTimer && this._1z() : this.__onLongPressFunction = z(this, function () {
                this.__longPressTimer = null, this._db && (this.__o1ancelClick = !0, this._iu(this._db, Aa))
            }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, lj[Ca]), this.__o1ancelClick = !1), fj) return;
            return void(sB._o1urrentInteractionSupport = this);
        case "touchend":
            if (!this._db) return void(this._moving = null);
            if (t[Fr].length) return void(this._9w = mi(t));
            t[Ma] - this._db[Ma] < 200 && xi[zh](this, this._db);
        case "touchcancel":
            if (!this._db) return void(this._moving = null);
            this._moving && (this._moving = null, this._iq(t));
        case "mouseup":
            return void this._f6(t);
        case "click":
            return void xi[zh](this, t);
        case "mousewheel":
        case "DOMMouseScroll":
            return t[Pa] = t.wheelDelta || -t[La], this._iu(t, Ra);
        case "touchmove":
            var n = t[Fr][Gh];
            return this._moving || (this._moving = !0, 1 == n && this._f3()), void this._jm(t)
        }
    }

    function wi(t, i) {
        return t = pi[zh](this, t), Ei[zh](this, t, i), Da != i && Na != i ? this._iu(t, ja + i) : void 0
    }

    function Ti(t, i) {
        var n = Tr + i;
        iB(t, i, this[n]), G(this, n)
    }

    function ki(i) {
        l(nB, function (t) {
            yi[zh](this, i, t)
        }, this), fj || sB._o3d || (sB._o3d = !0, tB(t, Ba, function (t) {
            if (sB._o1urrentInteractionSupport) {
                P(t);
                var i = sB._o1urrentInteractionSupport;
                if (!sB._dragging) {
                    if (i._db) {
                        var n = i._db[$a] - t.screenX,
                            e = i._db[Fa] - t.screenY;
                        if (4 > n * n + e * e) return
                    }
                    sB._dragging = !0, i._f3()
                }
                i._jm(t)
            }
        }, !0), tB(t, Ga, function (t) {
            var i = sB._o1urrentInteractionSupport;
            delete sB._o1urrentInteractionSupport, sB._dragging && (delete sB._dragging, A(t), t = pi[zh](i, t), i._iq(t), i._f6(t))
        }, !0))
    }

    function Mi(t) {
        l(nB, function (i) {
            Ti.call(this, t, i)
        }, this), this._o3a()
    }

    function Si(t, i, n) {
        this._n2 = t, this._df = new Oi, ki[zh](this, t), i && (this._listener = i), this._lo = n
    }

    function Ii(t) {
        return hj && t[za] || !hj && t[qa]
    }

    function Oi() {
        this.points = []
    }

    function Ai(t, i, n, e, s) {
        Pi(t, function (e) {
            if (i) {
                var s = e.responseXML;
                if (!s) return void(n || gB)(Ya + t + Ha);
                i(s)
            }
        }, n, e, s)
    }

    function Ci(t, i, n, e, s) {
        Pi(t, function (e) {
            if (i) {
                var s, h = e[Ua];
                if (!h) return (n || gB)(Ya + t + Wa), s = new Error(Ya + t + Wa), i(h, s);
                try {
                    h = JSON.parse(h)
                } catch (r) {
                    (n || gB)(r), s = r
                }
                i(h, s)
            }
        }, n, e, s)
    }

    function Pi(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var h = new XMLHttpRequest,
                r = encodeURI(t);
            if (s !== !1) {
                var a;
                a = r[Jh](Xa) > 0 ? "&" : Xa, r += a + Va + Date[Za]()
            }
            h.open(Ka, r), h.onreadystatechange = function () {
                return 4 == h[Ja] ? h[Qa] && 200 != h[Qa] ? void(n || gB)(Ya + t + to) : void(i && i(h)) : void 0
            }, h[io](e)
        } catch (o) {
            (n || gB)(Ya + t + to, o)
        }
    }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
    }

    function ai(t, i, n, e, s, h, r, a) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + a
    }

    function Li(t, i, n) {
        return t instanceof Object && t.x ? Di(t, i, 0, 0) : Ri(t, i, n, 0, 0)
    }

    function Ri(t, i, n, e, s) {
        var h = Math.sin(n),
            r = Math.cos(n),
            a = t - e,
            o = i - s;
        return t = a * r - o * h + e, i = a * h + o * r + s, new pj(t, i, n)
    }

    function Di(t, i, n, e) {
        n = n || 0, e = e || 0;
        var s = Math[Ur](i),
            h = Math[Hr](i),
            r = t.x - n,
            a = t.y - e;
        return t.x = r * h - a * s + n, t.y = r * s + a * h + e, t
    }

    function Ni(t, i, n) {
        return ji(t, i, n, 0, 0)
    }

    function ji(t, i, n, e, s) {
        var h = Ri(t.x, t.y, i, e, s),
            r = Li(t.x + t.width, t.y, i, e, s),
            a = Li(t.x + t[no], t.y + t.height, i, e, s),
            o = Li(t.x, t.y + t[eo], i, e, s);
        return n ? n.clear() : n = new wj, n[so](h), n[so](r), n[so](a), n[so](o), n
    }

    function Bi(t, i) {
        var n = this[ho] || 1;
        this.style.width = t + ro, this[ha].height = i + ro, this[no] = t * n, this[eo] = i * n
    }

    function $i() {
        this.canvas[no] = this[ao][no]
    }

    function Fi(t) {
        var i = t[oo] || t.mozBackingStorePixelRatio || t[fo] || t[_o] || t[co] || 1;
        return xB / i
    }

    function Gi(t, n, e) {
        var s = i[uo](ao);
        if (s.g = s.getContext(lo), t !== !0 && !e) return t && n && (s.width = t, s.height = n), s;
        var h = s.g;
        return h[ho] = s[ho] = Fi(h), s[bo] = Bi, h._lv = $i, t && n && s[bo](t, n), s
    }

    function zi(t, i, e) {
        if (t === n || null === t) return {
            width: 0,
            height: 0
        };
        var s = qi();
        e = e || lj[vo], s[go] != e && (s[go] = e);
        for (var h = i * lj[yo], r = 0, a = 0, o = t[hr](po), f = 0, _ = o[Gh]; _ > f; f++) {
            var c = o[f];
            r = Math[xo](s.measureText(c)[no], r), a += h
        }
        return {
            width: r,
            height: a
        }
    }

    function qi(t, i) {
        return mB || (mB = Gi()), t && i && (mB[no] = t, mB.height = i), mB.g
    }

    function Yi(t) {
        return Math[zr](t + Math[mo](t * t + 1))
    }

    function Hi(t, i) {
        i = i || t(1);
        var n = 1 / i,
            e = .5 * n,
            s = Math.min(1, i / 100);
        return function (h) {
            if (0 >= h) return 0;
            if (h >= i) return 1;
            for (var r = h * n, a = 0; a++ < 10;) {
                var o = t(r),
                    f = h - o;
                if (Math.abs(f) <= s) return r;
                r += f * e
            }
            return r
        }
    }

    function Ui(t, i, n) {
        var e = 1 - t,
            s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
                a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: h,
                rotate: Math.atan2(a, r)
            }
        }
        return {
            t: t,
            x: s,
            y: h
        }
    }

    function Wi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }

    function Xi(t, i) {
        i[sr](t[4], t[5]);
        var n = Wi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Ui(n, t);
            i[sr](e.x, e.y)
        }
        var s = Wi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Ui(s, t);
            i[sr](e.x, e.y)
        }
        return i
    }

    function Vi(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0],
                n = t[1],
                e = t[4],
                s = t[5],
                h = Math[mo](EB(i, n, e, s));
            return function (t) {
                return h * t
            }
        }
        var r = t[0],
            a = t[2],
            o = t[4],
            f = r - 2 * a + o,
            _ = 2 * a - 2 * r;
        r = t[1], a = t[3], o = t[5];
        var c = r - 2 * a + o,
            u = 2 * a - 2 * r,
            d = 4 * (f * f + c * c),
            l = 4 * (f * _ + c * u),
            b = _ * _ + u * u,
            h = 4 * d * b - l * l,
            v = 1 / h,
            g = .125 * Math.pow(d, -1.5),
            y = 2 * Math.sqrt(d),
            p = (h * Yi(l / Math[mo](h)) + 2 * Math[mo](d) * l * Math[mo](b)) * g;
        return function (t) {
            var i = l + 2 * t * d,
                n = i / Math.sqrt(h),
                e = i * i * v;
            return (h * Math[zr](n + Math[mo](e + 1)) + y * i * Math[mo](b + t * l + t * t * d)) * g - p
        }
    }

    function Zi(t, i, n) {
        var e = 1 - t,
            s = i[0],
            h = i[2],
            r = i[4],
            a = i[6],
            o = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], h = i[3], r = i[5], a = i[7];
        var _ = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
            return {
                x: o,
                y: _,
                rotate: Math.atan2(c, f)
            }
        }
        return {
            x: o,
            y: _
        }
    }

    function Ki(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var h = 2 * t - 4 * i + 2 * n,
            r = i - t,
            a = h * h - 4 * s * r;
        return 0 > a ? void 0 : 0 == a ? [-h / (2 * s)] : (a = Math[mo](a), [(a - h) / (2 * s), (-a - h) / (2 * s)])
    }

    function Ji(t, i) {
        i[sr](t[6], t[7]);
        var n = Ki(t[0], t[2], t[4], t[6]);
        if (n)
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Zi(s, t);
                    i.add(h.x, h.y)
                }
            }
        if (n = Ki(t[1], t[3], t[5], t[7]))
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Zi(s, t);
                    i.add(h.x, h.y)
                }
            }
    }

    function Qi(t) {
        var i = {
                x: t[0],
                y: t[1]
            },
            n = {
                x: t[2],
                y: t[3]
            },
            e = {
                x: t[4],
                y: t[5]
            },
            s = {
                x: t[6],
                y: t[7]
            },
            h = i.x - 0,
            r = i.y - 0,
            a = n.x - 0,
            o = n.y - 0,
            f = e.x - 0,
            _ = e.y - 0,
            c = s.x - 0,
            u = s.y - 0,
            d = 3 * (-h + 3 * a - 3 * f + c),
            l = 6 * (h - 2 * a + f),
            b = 3 * (-h + a),
            v = 3 * (-r + 3 * o - 3 * _ + u),
            g = 6 * (r - 2 * o + _),
            y = 3 * (-r + o),
            p = function (t) {
                var i = d * t * t + l * t + b,
                    n = v * t * t + g * t + y;
                return Math[mo](i * i + n * n)
            },
            x = (p(0) + 4 * p(.5) + p(1)) / 6;
        return x
    }

    function tn(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e,
                h = 2 * t - 4 * i + 2 * n,
                r = i - t;
            return function (t) {
                return 3 * (s * t * t + h * t + r)
            }
        }

        function e(t, i) {
            var n = s(t),
                e = h(t);
            return Math[mo](n * n + e * e) * i
        }
        var s = n(t[0], t[2], t[4], t[6]),
            h = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var r = 1 / i;
        return function (t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0;;) {
                if (i = n + r, i >= t) return s += e(n, i - n);
                s += e(n, r), n = i
            }
        }
    }

    function nn(t, i, n) {
        return EB(i, n, t.cx, t.cy) <= t._squareR + wB
    }

    function en(t, i, n, e) {
        return n = n || sn(t, i), new hn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }

    function sn(t, i) {
        return xj(t.x, t.y, i.x, i.y)
    }

    function hn(t, i, n, e, s, h, r) {
        this.cx = t, this.cy = i, this.r = n, this._squareR = n * n, this.p1 = e, this.p2 = s, this.p3 = h, this._otherPoint = r
    }

    function rn(t, i, n, e) {
        this.cx = t, this.cy = i, this.width = n, this.height = e
    }

    function an(t) {
        var i = t[0],
            n = t[1],
            e = t[2],
            s = hn._ksCircle(i, n, e);
        return fn(t, i, n, e, s)
    }

    function on(t, i) {
        i = i || _n(t);
        for (var n, e = i.width / i.height, s = [], h = t[Gh], r = 0; h > r; r++) n = t[r], s[Kh]({
            x: n.x,
            y: n.y * e
        });
        var a = an(s);
        return a ? new rn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }

    function fn(t, i, n, e, s) {
        for (var h, r, a = t.length, o = s._squareR, f = 0; a > f; f++)
            if (h = t[f], h != i && h != n && h != e) {
                var _ = EB(s.cx, s.cy, h.x, h.y);
                _ - wB > o && (o = _, r = h)
            }
        if (!r) return s;
        var c, u = hn._ksCircle(r, i, n),
            d = hn._ksCircle(r, i, e),
            l = hn._ksCircle(r, e, n);
        return nn(u, e.x, e.y) && (c = u), nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d), nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c._otherPoint, fn(t, i, n, e, c)
    }

    function _n(t) {
        for (var i, n = t[Gh], e = new wj, s = 0; n > s; s++) i = t[s], e[sr](i.x, i.y);
        return e
    }

    function cn(t, i, n, e, s) {
        this._6v && this[Eo]();
        var h = s ? this.getBounds(s) : this.bounds,
            r = n / h[no],
            a = t - r * h.x,
            o = e / h.height,
            f = i - o * h.y,
            _ = this._hg,
            c = [];
        return l(_, function (t) {
            var i = t.clone(),
                n = i.points;
            if (n && n[Gh]) {
                for (var e = n[Gh], s = [], h = 0; e > h; h++) {
                    var _ = n[h];
                    h++;
                    var u = n[h];
                    _ = r * _ + a, u = o * u + f, s[Kh](_), s.push(u)
                }
                i.points = s
            }
            c[Kh](i)
        }, this), new t$(c)
    }

    function un(t, i, n, e, s, h) {
        if (s = s || 0, n = n || 0, !s && !h) return !1;
        if (!e) {
            var r = this[wo](s);
            if (!r[To](t, i, n)) return !1
        }
        var a = Math[ko](2 * n) || 1,
            o = qi(a, a),
            f = (o[ao], -t + n),
            _ = -i + n;
        if (o[Mo](1, 0, 0, 1, f, _), !o[So]) {
            this._ma(o), s && o.stroke(), h && o[Io]();
            for (var c = o[Oo](0, 0, a, a)[Ao], u = c[Gh] / 4; u > 0;) {
                if (c[4 * u - 1] > QB) return !0;
                --u
            }
            return !1
        }
        return o[Co] = (s || 0) + 2 * n, this._ma(o), s && o[So](n, n) ? !0 : h ? o[Po](n, n) : !1
    }

    function dn(t, i, n) {
        if (!this._jg) return null;
        var e = this._hg;
        if (e[Gh] < 2) return null;
        n === !1 && (t += this._jg);
        var s = e[0];
        if (0 >= t) return $s(s[Lo][0], s[Lo][1], e[1][Lo][0], e[1].points[1], t, i);
        if (t >= this._jg) {
            s = e[e.length - 1];
            var h, r, a = s[Lo],
                o = a[Gh],
                f = a[o - 2],
                _ = a[o - 1];
            if (o >= 4) h = a[o - 4], r = a[o - 3];
            else {
                s = e[e.length - 2];
                var c = s[Ro];
                h = c.x, r = c.y
            }
            return $s(f, _, f + f - h, _ + _ - r, t - this._jg, i)
        }
        for (var u, d = 0, l = 1, o = e.length; o > l; l++)
            if (u = e[l], u._jg) {
                if (!(d + u._jg < t)) {
                    var b, c = s[Ro];
                    if (u[Do] == ZB) {
                        var v = u[Lo];
                        b = ln(t - d, u, c.x, c.y, v[0], v[1], v[2], v[3], u._r)
                    } else {
                        if (!u._lf) return $s(c.x, c.y, u[Lo][0], u[Lo][1], t - d, i);
                        var g = Hi(u._lf, u._jg)(t - d),
                            v = u[Lo];
                        b = u[Do] == VB && 6 == v[Gh] ? Zi(g, [c.x, c.y][Wh](v), !0) : Ui(g, [c.x, c.y].concat(v), !0)
                    }
                    return i && (b.x -= i * Math[Ur](b.rotate || 0), b.y += i * Math[Hr](b.rotate || 0)), b
                }
                d += u._jg, s = u
            } else s = u
    }

    function ln(t, i, n, e, s, h, r, a) {
        if (t <= i._l1) return $s(n, e, s, h, t);
        if (t >= i._jg) return t -= i._jg, $s(i._p2x, i._p2y, r, a, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i._CCW && (o = -o);
            var f = Ri(i._p1x, i._p1y, o, i._o.x, i._o.y);
            return f.rotate += i._o21 || 0, f[No] += Math.PI, f
        }
        return $s(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._o2 ? (e = -1, h = 0, s = i) : 0 == t._o1 ? (e = 0, h = 1, s = n) : (e = -1 / t._o2, s = (t._o2 - e) * i + t._o3, h = 1);
        var r = new mj;
        return r._o2 = e, r._o3 = s, r._o1 = h, r._nx = i, r._nz = n, r
    }

    function bn(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function vn(t, i, n, e, s, h, r, a) {
        var o = xj(i, n, e, s),
            f = xj(e, s, h, r);
        if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._jg = 0;
        var _ = yn(e, s, i, n),
            c = yn(e, s, h, r);
        t._o21 = _, t._o22 = c;
        var u = _ - c;
        u = bn(u), u > Math.PI && (u = 2 * Math.PI - u, t._CCW = !0);
        var d = Math.PI - u,
            l = Math.tan(u / 2),
            b = a / l,
            v = Math.min(o, f);
        b > v && (b = v, a = l * b);
        var g, y = e + Math.cos(_) * b,
            p = s + Math[Ur](_) * b,
            x = e + Math.cos(c) * b,
            m = s + Math[Ur](c) * b,
            E = new mj(i, n, e, s),
            w = new mj(e, s, h, r),
            T = ei(E, y, p),
            k = ei(w, x, m),
            M = T._4f(k),
            S = Math[Yr](p - M.y, y - M.x),
            I = Math[Yr](m - M.y, x - M.x);
        g = t._CCW ? I : S;
        for (var O, A = 0; 4 > A;) {
            var C = A * gj;
            if (bn(C - g) <= d) {
                var P, L;
                if (O ? O++ : O = 1, 0 == A ? (P = M.x + a, L = M.y) : 1 == A ? (P = M.x, L = M.y + a) : 2 == A ? (P = M.x - a, L = M.y) : (P = M.x, L = M.y - a), t[jo + O] = {
                    x: P,
                    y: L
                }, 2 == O) break
            }
            A++
        }
        return t._p1x = y, t._p1y = p, t._p2x = x, t._p2y = m, t._o = M, t._d = b, t._r = a, t._l1 = o - b, t._l2 = f - b, t._jg = t._l1 + d * a
    }

    function gn(t, i, n, e, s, h, r) {
        var a = yn(n, e, t, i),
            o = yn(n, e, s, h),
            f = a - o;
        return r ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }

    function yn(t, i, n, e) {
        return Math[Yr](e - i, n - t)
    }

    function pn(t) {
        var i = kB.exec(t);
        if (i) return i[1];
        var n = t[Bo]($r);
        return n >= 0 && n < t[Gh] - 1 ? t.substring(n + 1) : void 0
    }

    function xn(t) {
        if (!t) return null;
        if (t instanceof t$) return PB;
        if (t[$o] instanceof Function) return CB;
        if (S(t)) {
            var i = pn(t);
            if (i) {
                if (!KN && MB[Fo](i)) return AB;
                if (SB[Fo](i)) return OB
            }
            return IB
        }
    }

    function mn(t, i, n) {
        if (this._mc = xn(t), !this._mc) throw new Error("the image format is not supported", t);
        this._mb = t, this._o33 = i, this._95 = n, this[no] = i || lj[Go], this.height = n || lj.IMAGE_HEIGHT, this._k6 = {}
    }

    function En(t, i, n, e) {
        return i ? (NB[t] = new mn(i, n, e), t) : void delete NB[t]
    }

    function wn(t) {
        if (t._m0) return t._m0;
        var i = S(t);
        if (!i && !t[zo]) return t._m0 = new mn(t);
        var n = t[zo] || t;
        return n in NB ? NB[n] : NB[n] = new mn(t)
    }

    function Tn(t) {
        return t in NB
    }

    function kn(t, i, n) {
        n = n || {};
        var e = t[wo](n[Co]);
        if (!e[no] || !e.height) return !1;
        var s = i[qo](lo),
            h = i.ratio || 1,
            r = n[Yo] || Ho,
            a = /full/i [Fo](r),
            o = /uniform/i [Fo](r),
            f = 1,
            _ = 1;
        if (a) {
            var c = i[no],
                u = i[eo],
                d = n[Uo],
                l = 0,
                b = 0;
            if (d) {
                var v, g, y, p;
                M(d) ? v = g = y = p = d : (v = d[pa] || 0, g = d[Wr] || 0, y = d.left || 0, p = d[Xr] || 0), c -= y + p, u -= v + g, l += y, b += v
            }
            f = c / e[no], _ = u / e[eo], o && (f > _ ? (l += (c - _ * e[no]) / 2, f = _) : _ > f && (b += (u - f * e.height) / 2, _ = f)), (l || b) && s.translate(l, b)
        }
        s[Wo](-e.x * f, -e.y * _), t.draw(s, h, n, f, _, !0)
    }

    function Mn(t, i, n) {
        var e = wn(t);
        return e ? (e.validate(), (e._mc == AB || e._6l()) && e._o38(function (t) {
            t[Xo] && (this[no] = this[no], kn(t[Xo], this, n))
        }, i), void kn(e, i, n)) : (yB.error(Vo + t), !1)
    }

    function Sn(t, i, e, s) {
        var h = t[Gh];
        if (h && !(0 > h)) {
            s = s || 1;
            for (var r, a, o, f = [], _ = 0; _++ < h;)
                if (r = t[Zo](_, 0), r && xj(i, e, r.x, r.y) <= s) {
                    a = _, o = r.rotate;
                    break
                }
            if (a !== n) {
                for (var r, c, u, d = 0, _ = 0, l = t._hg[Gh]; l > _; _++) {
                    if (r = t._hg[_], !c && (d += r._jg || 0, d > a)) {
                        c = !0;
                        var b = Math[xo](10, r._jg / 6),
                            v = b * Math[Ur](o),
                            g = b * Math[Hr](o);
                        if (r.type == VB) {
                            var y = r[Lo][0],
                                p = r[Lo][1];
                            if (u) {
                                var x = new mj(i, e, i + g, e + v),
                                    m = x._4f(new mj(u[Ro].x, u[Ro].y, r[Lo][0], r.points[1]));
                                m.x !== n && (y = m.x, p = m.y)
                            }
                            f[Kh](new JB(VB, [y, p, i - g, e - v, i, e]))
                        } else f[Kh](new JB(XB, [i - g, e - v, i, e])); if (r[Lo])
                            if (r.type == VB) {
                                r.points[0] = i + g, r[Lo][1] = e + v;
                                var x = new mj(i, e, i + g, e + v),
                                    m = x._4f(new mj(r[Lo][2], r[Lo][3], r.points[4], r[Lo][5]));
                                m.x !== n && (r[Lo][2] = m.x, r.points[3] = m.y)
                            } else if (r.type == XB) {
                            r[Do] = VB, r.points = [i + g, e + v].concat(r.points);
                            var x = new mj(i, e, i + g, e + v),
                                m = x._4f(new mj(r.points[2], r[Lo][3], r[Lo][4], r[Lo][5]));
                            m.x !== n && (r[Lo][2] = m.x, r.points[3] = m.y)
                        } else r[Do] == WB && (r[Do] = XB, r[Lo] = [i + g, e + v][Wh](r.points), _ == l - 1 && (r.invalidTerminal = !0))
                    }
                    f[Kh](r), u = r
                }
                return f
            }
        }
    }

    function In(t) {
        var i = t.width,
            n = t[eo];
        try {
            var e = t.g.getImageData(0, 0, i, n);
            return An(e.data, i, n)
        } catch (s) {
            yB[Ko](s)
        }
    }

    function On(t, i, n) {
        this._1f(t, i, n)
    }

    function An(t, i, n) {
        return new On(t, i, n)
    }

    function Cn(t) {
        if (Rr == t[0]) {
            if (t = t.substring(1), 3 == t.length) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t.length) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t[Jh](Jo),
                n = t[Jh](Lr);
            if (0 > i || i > n) return;
            if (t = t[oa](i + 1, n), t = t[hr](Pr), t[Gh] < 3) return;
            var e = parseInt(t[0]),
                s = parseInt(t[1]),
                h = parseInt(t[2]),
                r = 3 == t[Gh] ? 255 : parseInt(t[3]);
            return [e, s, h, r]
        }
    }

    function Pn(t, i, n) {
        return n || (n = lj[Qo]), n == pB[tf] ? t * i : n == pB[nf] ? Math.min(t, i) : n == pB[ef] ? 1 - (1 - i) / t : n == pB[sf] ? t + i - 1 : n == pB[hf] ? Math[xo](t, i) : n == pB[rf] ? t + i - t * i : i
    }

    function Ln(t, i, n) {
        var e = Cn(i);
        if (!e) return void yB.error(af + i + of);
        var s = t.g[Oo](0, 0, t.width, t[eo]),
            h = s[Ao];
        if (n instanceof Function) h = n(t, h, e) || h;
        else {
            var r = e[0] / 255,
                a = e[1] / 255,
                o = e[2] / 255;
            if (n == pB[ff])
                for (var f = 0, _ = h[Gh]; _ > f; f += 4) {
                    var c = 77 * h[f] + 151 * h[f + 1] + 28 * h[f + 2] >> 8;
                    h[f] = c * r | 0, h[f + 1] = c * a | 0, h[f + 2] = c * o | 0
                } else
                    for (var f = 0, _ = h.length; _ > f; f += 4) h[f] = 255 * Pn(r, h[f] / 255, n) | 0, h[f + 1] = 255 * Pn(a, h[f + 1] / 255, n) | 0, h[f + 2] = 255 * Pn(o, h[f + 2] / 255, n) | 0
        }
        var t = Gi(t.width, t[eo]);
        return t.g[_f](s, 0, 0), t
    }

    function Rn(t, i, n, e) {
        return 1 > n && (n = 1), Dn(t - n, i - n, 2 * n, 2 * n, e)
    }

    function Dn(t, i, n, e, s) {
        n = Math.round(n) || 1, e = Math[ko](e) || 1;
        var h = qi(n, e);
        h[Mo](1, 0, 0, 1, -t, -i), s[$o](h);
        for (var r = h[Oo](0, 0, n, e).data, a = r[Gh] / 4; a-- > 0;)
            if (r[4 * a - 1] > QB) return !0;
        return !1
    }

    function Nn(t, i, n, e, s, h) {
        t -= s.$x, i -= s.$y;
        var r = s._gu[cf](t, i, n, e);
        if (!r) return !1;
        t = r.x * h, i = r.y * h, n = r[no] * h, e = r[eo] * h, n = Math[ko](n) || 1, e = Math.round(e) || 1;
        var a = qi(),
            o = a.canvas;
        o[no] < n || o.height < e ? (o.width = n, o[eo] = e) : (a[Mo](1, 0, 0, 1, 0, 0), a[uf](0, 0, n, e)), a[Mo](1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h), a[Sa](h, h), s._ji(a, 1);
        for (var f = a[Oo](0, 0, n, e)[Ao], _ = f[Gh] / 4; _-- > 0;)
            if (f[4 * _ - 1] > QB) return !0;
        return !1
    }

    function jn(t, i, n, e, s, h, r, a, o) {
        if (ri(t, i, n, e, a, o)) return null;
        var f, _, c, u = new JB(WB, [t + n - s, i]),
            d = new JB(XB, [t + n, i, t + n, i + h]),
            l = new JB(WB, [t + n, i + e - h]),
            b = new JB(XB, [t + n, i + e, t + n - s, i + e]),
            v = new JB(WB, [t + s, i + e]),
            g = new JB(XB, [t, i + e, t, i + e - h]),
            y = new JB(WB, [t, i + h]),
            p = new JB(XB, [t, i, t + s, i]),
            x = (new JB(KB), [u, d, l, b, v, g, y, p]),
            m = new wj(t + s, i + h, n - s - s, e - h - h);
        t > a ? (f = Mj, c = 5) : a > t + n ? (f = Ij, c = 1) : (f = Sj, c = 0), i > o ? (_ = Oj, f == Mj && (c = 7)) : o > i + e ? (_ = Cj, f == Ij ? c = 3 : f == Sj && (c = 4)) : (_ = Aj, f == Mj ? c = 6 : f == Ij && (c = 2));
        var E = qn(c, t, i, n, e, s, h, r, a, o, m),
            w = E[0],
            T = E[1],
            k = new t$,
            M = k._hg;
        M[Kh](new JB(UB, [w.x, w.y])), M[Kh](new JB(WB, [a, o])), M.push(new JB(WB, [T.x, T.y])), T._n0 && (M[Kh](T._n0), T._n0NO++);
        for (var S = T._n0NO % 8, I = w._n0NO; M[Kh](x[S]), ++S, S %= 8, S != I;);
        return w._n0 && M.push(w._n0), k[df](), k
    }

    function Bn(t, i, e, s, h, r, a, o, f, _, c, u, d, l) {
        var b = new mj(u, d, e, s),
            v = new mj(i[0], i[1], i[4], i[5]),
            g = v._4f(b, c),
            y = g[0],
            p = g[1];
        if (y._rest !== n) {
            y._n0NO = (t - 1) % 8, p._n0NO = (t + 1) % 8;
            var x = y._rest;
            7 == t ? (y.y = r + _ + Math[lf](l[eo], x), p.x = h + f + Math.min(l[no], x)) : 5 == t ? (y.x = h + f + Math[lf](l[no], x), p.y = r + o - _ - Math[lf](l.height, x)) : 3 == t ? (y.y = r + o - _ - Math[lf](l[eo], x), p.x = h + a - f - Math[lf](l[no], x)) : 1 == t && (y.x = h + a - f - Math.min(l[no], x), p.y = r + _ + Math.min(l[eo], x))
        } else {
            b._nf(b._nx, b._nz, y.x, y.y), y = b._$j(i), b._nf(b._nx, b._nz, p.x, p.y), p = b._$j(i);
            var m = Yn(i, [y, p]),
                E = m[0],
                w = m[2];
            y._n0NO = t, p._n0NO = t, y._n0 = new JB(XB, E[Hh](2)), p._n0 = new JB(XB, w.slice(2))
        }
        return [y, p]
    }

    function $n(t, i, n, e, s, h, r, a, o, f) {
        var _, c;
        if (o - a >= i + h) _ = {
            y: n,
            x: o - a
        }, _._n0NO = 0;
        else {
            _ = {
                y: n + r,
                x: Math[xo](i, o - a)
            };
            var u = [i, n + r, i, n, i + h, n],
                d = new mj(o, f, _.x, _.y);
            if (_ = d._$j(u)) {
                O(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Yn(u, [_]);
                l = l[0], l && (_._n0 = new JB(XB, l[Hh](2))), _._n0NO = 7
            } else _ = {
                y: n,
                x: i + h
            }, _._n0NO = 0
        } if (i + e - h >= o + a) c = {
            y: n,
            x: o + a
        }, c._n0NO = 0;
        else {
            c = {
                y: n + r,
                x: Math[lf](i + e, o + a)
            };
            var b = [i + e - h, n, i + e, n, i + e, n + r],
                d = new mj(o, f, c.x, c.y);
            if (c = d._$j(b)) {
                O(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Yn(b, [c]);
                l && l[l[Gh] - 1] && (c._n0 = new JB(XB, l[l.length - 1][Hh](2))), c._n0NO = 1
            } else c = {
                y: n,
                x: i + e - h
            }, c._n0NO = 0
        }
        return [_, c]
    }

    function Fn(t, i, n, e, s, h, r, a, o, f) {
        var _, c;
        if (f - a >= n + r) _ = {
            x: i + e,
            y: f - a
        }, _._n0NO = 2;
        else {
            _ = {
                x: i + e - h,
                y: Math[xo](n, f - a)
            };
            var u = [i + e - h, n, i + e, n, i + e, n + r],
                d = new mj(o, f, _.x, _.y);
            if (_ = d._$j(u)) {
                O(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Yn(u, [_]);
                l = l[0], l && (_._n0 = new JB(XB, l.slice(2))), _._n0NO = 1
            } else _ = {
                x: i + e,
                y: n + r
            }, _._n0NO = 2
        } if (n + s - r >= f + a) c = {
            x: i + e,
            y: f + a
        }, c._n0NO = 2;
        else {
            c = {
                x: i + e - h,
                y: Math.min(n + s, f + a)
            };
            var b = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
                d = new mj(o, f, c.x, c.y);
            if (c = d._$j(b)) {
                O(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Yn(b, [c]);
                l[1] && (c._n0 = new JB(XB, l[1][Hh](2))), c._n0NO = 3
            } else c = {
                x: i + e,
                y: n + s - r
            }, c._n0NO = 2
        }
        return [_, c]
    }

    function Gn(t, i, n, e, s, h, r, a, o, f) {
        var _, c;
        if (o - a >= i + h) c = {
            y: n + s,
            x: o - a
        }, c._n0NO = 4;
        else {
            c = {
                y: n + s - r,
                x: Math[xo](i, o - a)
            };
            var u = [i + h, n + s, i, n + s, i, n + s - r],
                d = new mj(o, f, c.x, c.y);
            if (c = d._$j(u)) {
                O(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Yn(u, [c]);
                l = l[l.length - 1], l && (c._n0 = new JB(XB, l.slice(2))), c._n0NO = 5
            } else c = {
                y: n + s,
                x: i + h
            }, c._n0NO = 4
        } if (i + e - h >= o + a) _ = {
            y: n + s,
            x: o + a
        }, _._n0NO = 4;
        else {
            _ = {
                y: n + s - r,
                x: Math[lf](i + e, o + a)
            };
            var b = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
                d = new mj(o, f, _.x, _.y);
            if (_ = d._$j(b)) {
                O(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Yn(b, [_]);
                l[0] && (_._n0 = new JB(XB, l[0][Hh](2))), _._n0NO = 3
            } else _ = {
                y: n + s,
                x: i + e - h
            }, _._n0NO = 4
        }
        return [_, c]
    }

    function zn(t, i, n, e, s, h, r, a, o, f) {
        var _, c;
        if (f - a >= n + r) c = {
            x: i,
            y: f - a
        }, c._n0NO = 6;
        else {
            c = {
                x: i + h,
                y: Math[xo](n, f - a)
            };
            var u = [i, n + r, i, n, i + h, n],
                d = new mj(o, f, c.x, c.y);
            if (c = d._$j(u)) {
                O(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Yn(u, [c]);
                l = l[l[Gh] - 1], l && (c._n0 = new JB(XB, l[Hh](2)))
            } else c = {
                x: i,
                y: n + r
            };
            c._n0NO = 7
        } if (n + s - r >= f + a) _ = {
            x: i,
            y: f + a
        }, _._n0NO = 6;
        else {
            _ = {
                x: i + h,
                y: Math.min(n + s, f + a)
            };
            var b = [i + h, n + s, i, n + s, i, n + s - r],
                d = new mj(o, f, _.x, _.y);
            if (_ = d._$j(b)) {
                O(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Yn(b, [_]);
                l[0] && (_._n0 = new JB(XB, l[0].slice(2))), _._n0NO = 5
            } else _ = {
                x: i,
                y: n + s - r
            }, _._n0NO = 6
        }
        return [_, c]
    }

    function qn(t, i, n, e, s, h, r, a, o, f, _) {
        var c = a / 2;
        switch (t) {
        case 7:
            var u = [i, n + r, i, n, i + h, n],
                d = i + h,
                l = n + r;
            return Bn(t, u, d, l, i, n, e, s, h, r, a, o, f, _);
        case 5:
            return u = [i + h, n + s, i, n + s, i, n + s - r], d = i + h, l = n + s - r, Bn(t, u, d, l, i, n, e, s, h, r, a, o, f, _);
        case 3:
            return u = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = i + e - h, l = n + s - r, Bn(t, u, d, l, i, n, e, s, h, r, a, o, f, _);
        case 1:
            return u = [i + e - h, n, i + e, n, i + e, n + r], d = i + e - h, l = n + r, Bn(t, u, d, l, i, n, e, s, h, r, a, o, f, _);
        case 0:
            return $n(t, i, n, e, s, h, r, c, o, f, _);
        case 2:
            return Fn(t, i, n, e, s, h, r, c, o, f, _);
        case 4:
            return Gn(t, i, n, e, s, h, r, c, o, f, _);
        case 6:
            return zn(t, i, n, e, s, h, r, c, o, f, _)
        }
    }

    function Yn(t, i) {
        for (var e, s, h, r, a, o, f = t[0], _ = t[1], c = t[2], u = t[3], d = t[4], l = t[5], b = [], v = 0; v < i[Gh]; v++) a = i[v], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = _ + (u - _) * o, h = c + (d - c) * o, r = u + (l - u) * o, b[Kh]([f, _, e, s, a.x, a.y]), f = a.x, _ = a.y, c = h, u = r) : b[Kh](null);
        return h !== n && b[Kh]([a.x, a.y, h, r, d, l]), b
    }

    function Hn(t) {
        return this.$layoutByAnchorPoint && this._o32 && (t.x -= this._o32.x, t.y -= this._o32.y), this.$rotate && Di(t, this[bf]), t.x += this[vf] || 0, t.y += this[gf] || 0, this.$rotatable && this[yf] ? Di(t, this[yf]) : t
    }

    function Un(t) {
        return this[pf] && this.$_hostRotate && Di(t, -this.$_hostRotate), t.x -= this[vf] || 0, t.y -= this[gf] || 0, this[bf] && Di(t, -this.$rotate), this.$layoutByAnchorPoint && this._o32 && (t.x += this._o32.x, t.y += this._o32.y), t
    }

    function Wn() {
        var t = this[xf];
        this[xf] && (this.$invalidateSize = !1, this[mf] = !0, this._89.setByRect(this._k3), this[Ef] && this._89[wf](this[Ef]), this[Tf] && this._89[wf](this[Tf]));
        var i = this._10();
        if (i) var n = this[kf] && this[Mf];
        return this[mf] && this[Sf] && (this[mf] = !1, n && (t = !0), this._o32 = oi(this.$anchorPosition, this._89[no], this._89[eo]), this._o32.x += this._89.x, this._o32.y += this._89.y), i ? (t && (this._o3ackgroundGradientInvalidateFlag = !0, Xn[zh](this, n)), this._o3ackgroundGradientInvalidateFlag && (this._o3ackgroundGradientInvalidateFlag = !1, this._o3ackgroundGradient = this[If] && this._n6Shape && this._n6Shape[Of] ? jB[yr][Af].call(this.backgroundGradient, this._n6Shape.bounds) : null), t) : (this.__mvPointer = !1, t)
    }

    function Xn(t) {
        var i = this._89.x + this[Tf] / 2,
            n = this._89.y + this[Tf] / 2,
            e = this._89[no] - this[Tf],
            s = this._89[eo] - this[Tf],
            h = 0,
            r = 0;
        if (this[Cf] && (M(this.$borderRadius) ? h = r = this[Cf] : (h = this.$borderRadius.x || 0, r = this.$borderRadius.y || 0), h = Math[lf](h, e / 2), r = Math.min(r, s / 2)), t && (this._pointerX = this._o32.x - this[vf] + this[Pf], this._pointerY = this._o32.y - this[gf] + this[Lf], !this._89[To](this._pointerX, this._pointerY))) {
            var a = new n$(i, n, e, s, h, r, this.$pointerWidth, this._pointerX, this._pointerY);
            return this._n6Shape = a._n0, this._n6Shape.bounds.set(i, n, e, s), void(this.__mvPointer = !0)
        }
        this._n6Shape && this._n6Shape.clear(), this._n6Shape = fF.getRect(i, n, e, s, h, r, this._n6Shape), this._n6Shape[Of][Mr](i, n, e, s)
    }

    function Vn(t, i, n, e) {
        return e && (t.width < 0 || t[eo] < 0) ? (t.x = i, t.y = n, void(t[no] = t[eo] = 0)) : (i < t.x ? (t[no] += t.x - i, t.x = i) : i > t.x + t[no] && (t[no] = i - t.x), void(n < t.y ? (t[eo] += t.y - n, t.y = n) : n > t.y + t[eo] && (t.height = n - t.y)))
    }

    function Zn(t, i, e) {
        var s, h = t.position,
            r = t.layoutByPath === n ? this.layoutByPath : t.layoutByPath;
        return this[Rf] instanceof t$ && r ? (s = TB._o3c(h, this.$data, this[Co], i, e), s.x *= this._jk, s.y *= this._jl) : (s = oi(h, this._89[no], this._89[eo]), s.x += this._89.x, s.y += this._89.y), Hn.call(this, s)
    }

    function Kn(t, i) {
        if (i)
            if (i._89[Df]()) t.$x = i.$x, t.$y = i.$y;
            else {
                var n = Zn[zh](i, t);
                t.$x = n.x, t.$y = n.y, t._hostRotate = n.rotate
            } else t.$x = 0, t.$y = 0;
        t[Nf] && h$[zh](t)
    }

    function Jn(t) {
        if (t[jf] === n) {
            var i, e;
            if (t.setLineDash) i = t[Bf], e = t[$f];
            else {
                var s;
                if (t[Ff] !== n) s = Ff;
                else {
                    if (t[Gf] === n) return !1;
                    s = Gf
                }
                e = function (t) {
                    this[s] = t
                }, i = function () {
                    return this[s]
                }
            }
            Z(t, jf, {
                get: function () {
                    return i.call(this)
                }, set: function (t) {
                    e.call(this, t)
                }
            })
        }
        if (t[zf] === n) {
            var h;
            if (t[qf] !== n) h = qf;
            else {
                if (t[Yf] === n) return;
                h = Yf
            }
            Z(t, zf, {
                get: function () {
                    return this[h]
                }, set: function (t) {
                    this[h] = t
                }
            })
        }
    }

    function Qn(t, i, n, e, s) {
        var h, r, a, o, f, _, c, u, d = function (t) {
                return function (i) {
                    t(i)
                }
            },
            l = function () {
                r = null, a = null, o = f, f = null, _ = null
            },
            b = function (t) {
                h = t, c || (c = Gi()), c[no] = h.width, c[eo] = h.height, i[no] = h[no], i[eo] = h.height
            },
            v = function (t) {
                g(), l(), r = t[Hf] ? t[Uf] : null, a = 10 * t[Wf], f = t[Xf]
            },
            g = function () {
                if (_) {
                    var t = _[Oo](0, 0, h[no], h[eo]),
                        n = {
                            data: t,
                            _pixels: An(t[Ao], h[no], h[eo]),
                            delay: a
                        };
                    s[zh](i, n)
                }
            },
            y = function (t) {
                _ || (_ = c[qo](lo));
                var i = t[Vf] ? t[Zf] : h[Kf],
                    n = _[Oo](t.leftPos, t[Jf], t[no], t[eo]);
                t[Qf].forEach(function (t, e) {
                    r !== t ? (n.data[4 * e + 0] = i[t][0], n.data[4 * e + 1] = i[t][1], n[Ao][4 * e + 2] = i[t][2], n[Ao][4 * e + 3] = 255) : (2 === o || 3 === o) && (n[Ao][4 * e + 3] = 0)
                }), _[uf](0, 0, h[no], h.height), _[_f](n, t.leftPos, t.topPos)
            },
            p = function () {},
            x = {
                hdr: d(b),
                gce: d(v),
                com: d(p),
                app: {
                    NETSCAPE: d(p)
                },
                img: d(y, !0),
                eof: function () {
                    g(), n[zh](i)
                }
            },
            m = new XMLHttpRequest;
        KN || m[t_]("text/plain; charset=x-user-defined"), m.onload = function () {
            u = new _$(m[Ua]);
            try {
                u$(u, x)
            } catch (t) {
                e[zh](i, i_)
            }
        }, m[n_] = function () {
            e[zh](i, e_)
        }, m[s_](Ka, t, !0), m[io]()
    }

    function te(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 51, 49, 51, 51, 55, 51, 51, 55, 50, 49, 56, 10, 10, 48, 10];
        return i[h_](function (n, e) {
            i[e] = t(n)
        }), i.join("")
    }

    function ie(t, i) {
        try {
            if (null == t || t[Gh] < 8) return;
            if (null == i || i[Gh] <= 0) return;
            for (var n = "", e = 0; e < i[Gh]; e++) n += i[r_](e).toString();
            var s = Math[lr](n.length / 5),
                h = parseInt(n[a_](s) + n[a_](2 * s) + n[a_](3 * s) + n[a_](4 * s) + n[a_](5 * s), 10),
                r = Math[ko](i.length / 2),
                a = Math[o_](2, 31) - 1,
                o = parseInt(t.substring(t[Gh] - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n[Gh] > 10;) n = (parseInt(n[oa](0, 10), 10) + parseInt(n[oa](10, n[Gh]), 10)).toString();
            n = (h * n + r) % a;
            for (var f = "", _ = "", e = 0; e < t[Gh]; e += 2) f = parseInt(parseInt(t[oa](e, e + 2), 16) ^ Math[lr](n / a * 255), 10), _ += String[f_](f), n = (h * n + r) % a;
            return 0 | _[0] ? q$ = y$[__ + m$ + c_](_) : null
        } catch (c) {}
    }

    function ne() {
        var t = l$;
        if (!t) return void(V$ = !0);
        z$ = t;
        var i;
        t = t[hr](Pr);
        for (var n = 0; n < t[Gh] && (i = ie(t[n], v$), !(i && i[hr](po).length >= 8));) 1 == t[Gh] && (i = ie(t[n], u_)), n++;
        if (!i || i.split(po)[Gh] < 8) return U$ = !0, "" === v$ || v$ == d_ + k$ + l_ + M$ + b_ || v$ == v_ + T$ + g_ ? (W$ = Q$, V$ = !1, K$ = !1, void(G$ = !1)) : (W$ = Q$, void(V$ = !0));
        G$ = i.split(po);
        var e = G$[3];
        if (e != $G) return U$ = !0, void(K$ = !0);
        V$ = !1, K$ = !1;
        var s = G$[0];
        (y_ == s || p_ == s) && (U$ = !1);
        var h = G$[5];
        X$ = h;
        var r = G$[6];
        W$ = r
    }

    function ee() {
        var t = z$;
        if (t) {
            var i;
            t = t[hr](Pr);
            for (var n = 0; n < t[Gh] && (i = tF(t[n], v$), !(i && i[hr](po)[Gh] >= 8));) 1 == t[Gh] && (i = tF(t[n], u_)), n++;
            if (i[hr](po)[Gh] >= 8) return void(Z$ = !1)
        }
        return "" === v$ || v$ == d_ + k$ + l_ + M$ + b_ || v$ == v_ + T$ + g_ ? void(Z$ = !1) : void(Z$ = !0)
    }

    function se() {
        if (U$) {
            var t = ah[C$ + Do]._ji,
                i = H$;
            ah[C$ + Do]._ji = function () {
                t[gr](this, arguments), i[zh](this._dg, this.g)
            };
            var n = cs[C$ + Do]._hb;
            cs[C$ + Do]._hb = function (t) {
                n[gr](this, arguments), i[zh](this, t)
            }
        }
    }

    function he() {
        if (X$ !== !0 && X$) {
            var t = X$.split($r);
            if (3 != t[Gh]) return void(cF[yr]._ji = null);
            var i = parseInt(t[0], 10),
                n = parseInt(t[1], 10),
                e = parseInt(t[2], 10),
                s = 3,
                h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            b$ > h && (cF[yr]._ji = null)
        }
    }

    function re() {
        var t = 0 | W$;
        t && (vj[C$ + Do]._l5 = function (i, e) {
            var s = i.id;
            return s === n || this.containsById(s) ? !1 : this._jw[Gh] > t ? !1 : (y(this._jw, i, e), this._mn[s] = i, i)
        })
    }

    function ae() {
        V$ && (vj[C$ + Do]._l5 = vj[C$ + Do]._hd)
    }

    function oe() {
        Z$ && (cs[C$ + Do]._k4 = null)
    }

    function fe() {
        J$ && (ds[yr]._ka = ds[yr]._5u)
    }

    function _e() {
        K$ && (DF[C$ + Do]._k4 = null)
    }

    function ce() {
        G$ === n && (cs[C$ + Do]._k4 = null)
    }

    function ue(t) {
        return t[x_] ? (t = t.parent, t._dp ? t._dp : t._hy === !1 ? t : null) : null
    }

    function de(t, i, n) {
        if (n = n || i.toAgent, n == t) return !1;
        var e = t[m_](n);
        return e || (e = new IG(t, n), t._linkedNodes[n.id] = e), e._j3(i, t)
    }

    function le(t, i, n) {
        if (n = n || i.toAgent, n == t) return !1;
        var e = t[m_](n);
        return e ? e._o15(i, t) : void 0
    }

    function be(t, i, e) {
        return e === n && (e = i[E_]), e != t ? (t._8b || (t._8b = new vj), t._8b[sr](i) === !1 ? !1 : void t._9m++) : void 0
    }

    function ve(t, i, n) {
        return t._8b && t._8b.remove(i) !== !1 ? (t._9m--, void le(t, i, n)) : !1
    }

    function ge(t, i) {
        return i[w_] != t ? (t._o24 || (t._o24 = new vj), t._o24.add(i) === !1 ? !1 : void t._o2j++) : void 0
    }

    function ye(t, i) {
        return t._o24 && t._o24[Vh](i) !== !1 ? (t._o2j--, void le(i.fromAgent, i, t)) : !1
    }

    function pe(t, i) {
        if (i === n && (i = t instanceof rF), i) {
            if (t.isInvalid()) return null;
            var e = pe(t.from, !1);
            if (t[T_]()) return e;
            for (var s = pe(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[k_](s)) return s;
                if (s[k_](e)) return e;
                e = pe(e, !1), s = pe(s, !1)
            }
            return null
        }
        for (var h = t[x_]; null != h;) {
            if (h._il()) return h;
            h = h[x_]
        }
        return null
    }

    function xe(t, i, n) {
        t._il() && t.hasChildren() && t.children.forEach(function (t) {
            t instanceof aF && i.add(t) && xe(t, i, n)
        }, this), t[M_]() && t._dx[h_](function (t) {
            (null == n || n[S_](t)) && i.add(t) && xe(t, i, n)
        })
    }

    function me(t, i) {
        i.parent ? i.parent.setChildIndex(i, i[x_][I_] - 1) : t.roots.setIndex(i, t[O_][Gh] - 1)
    }

    function Ee(t, i) {
        if (i instanceof rF) return void(i[A_]() || Te(t, i));
        for (me(t, i); i = i[x_];) me(t, i)
    }

    function we(t, i) {
        if (i instanceof rF) return void(i[A_]() || Te(t, i));
        for (me(t, i); i = i[x_];) me(t, i)
    }

    function Te(t, i) {
        var n = i.fromAgent;
        if (i[T_]()) me(t, n);
        else {
            var e = i[E_];
            me(t, n), me(t, e)
        }
    }

    function ke(t, i) {
        return t._9m++, t._gk ? (i._jd = t._is, t._is._jb = i, void(t._is = i)) : (t._gk = i, void(t._is = i))
    }

    function Me(t, i) {
        t._9m--, t._is == i && (t._is = i._jd), i._jd ? i._jd._jb = i._jb : t._gk = i._jb, i._jb && (i._jb._jd = i._jd), i._jd = null, i._jb = null, le(t, i, i[C_])
    }

    function Se(t, i) {
        return t._o2j++, t._i5 ? (i._jr = t._jq, t._jq._jt = i, void(t._jq = i)) : (t._i5 = i, void(t._jq = i))
    }

    function Ie(t, i) {
        t._o2j--, t._jq == i && (t._jq = i._jr), i._jr ? i._jr._jt = i._jt : t._i5 = i._jt, i._jt && (i._jt._jr = i._jr), i._jr = null, i._jt = null
    }

    function Oe(t, i) {
        return i = i || new vj, t[P_](function (t) {
            i[sr]({
                id: t.id,
                edge: t,
                fromAgent: t[L_]._dp,
                toAgent: t[C_]._dp
            })
        }), t[R_](function (t) {
            t instanceof aF && Oe(t, i)
        }), i
    }

    function Ae(t, i, n) {
        return Pe(t, i, n) === !1 ? !1 : Ce(t, i, n)
    }

    function Ce(t, i, n) {
        if (t._gk)
            for (var e = t._gk; e;) {
                if (i.call(n, e) === !1) return !1;
                e = e._jb
            }
    }

    function Pe(t, i, n) {
        if (t._i5)
            for (var e = t._i5; e;) {
                if (i[zh](n, e) === !1) return !1;
                e = e._jt
            }
    }

    function Le(t, i, e, s, h, r, a) {
        return r || a ? (r = r || 0, a = a === n ? r : a || 0, r = Math.min(r, s / 2), a = Math.min(a, h / 2), t[D_](i + r, e), t[N_](i + s - r, e), t[j_](i + s, e, i + s, e + a), t.lineTo(i + s, e + h - a), t[j_](i + s, e + h, i + s - r, e + h), t[N_](i + r, e + h), t.quadTo(i, e + h, i, e + h - a), t[N_](i, e + a), t[j_](i, e, i + r, e), t[df](), t) : (t[D_](i, e), t.lineTo(i + s, e), t[N_](i + s, e + h), t[N_](i, e + h), t[df](), t)
    }

    function Re(t, i) {
        var n = i.r || 1,
            e = i.cx || 0,
            s = i.cy || 0,
            h = n * Math[B_](Math.PI / 8),
            r = n * Math[Ur](Math.PI / 4);
        t[D_](e + n, s), t.quadTo(e + n, s + h, e + r, s + r), t[j_](e + h, s + n, e, s + n), t[j_](e - h, s + n, e - r, s + r), t[j_](e - n, s + h, e - n, s), t[j_](e - n, s - h, e - r, s - r), t[j_](e - h, s - n, e, s - n), t.quadTo(e + h, s - n, e + r, s - r), t.quadTo(e + n, s - h, e + n, s)
    }

    function De(t, i, n, e, s) {
        i instanceof rn && (e = i[no], s = i.height, n = i.cy - s / 2, i = i.cx - e / 2);
        var h = .5522848,
            r = e / 2 * h,
            a = s / 2 * h,
            o = i + e,
            f = n + s,
            _ = i + e / 2,
            c = n + s / 2;
        return t.moveTo(i, c), t[$_](i, c - a, _ - r, n, _, n), t.curveTo(_ + r, n, o, c - a, o, c), t.curveTo(o, c + a, _ + r, f, _, f), t[$_](_ - r, f, i, c + a, i, c), t
    }

    function Ne(t, i, n, e, s) {
        var h = 2 * e,
            r = 2 * s,
            a = i + e / 2,
            o = n + s / 2;
        return t[D_](a - h / 4, o - r / 12), t[N_](i + .306 * e, n + .579 * s), t.lineTo(a - h / 6, o + r / 4), t[N_](i + e / 2, n + .733 * s), t[N_](a + h / 6, o + r / 4), t.lineTo(i + .693 * e, n + .579 * s), t.lineTo(a + h / 4, o - r / 12), t.lineTo(i + .611 * e, n + .332 * s), t[N_](a + 0, o - r / 4), t[N_](i + .388 * e, n + .332 * s), t[df](), t
    }

    function je(t, i, n, e, s) {
        return t[D_](i, n), t[N_](i + e, n + s / 2), t[N_](i, n + s), t.closePath(), t
    }

    function Be(t, i, n, e, s) {
        return t[D_](i, n + s / 2), t[N_](i + e / 2, n), t.lineTo(i + e, n + s / 2), t[N_](i + e / 2, n + s), t[df](), t
    }

    function $e(t, i, n, e, s, h) {
        return t[D_](i, n), t[N_](i + e, n + s / 2), t.lineTo(i, n + s), h || (t[N_](i + .25 * e, n + s / 2), t[df]()), t
    }

    function Fe(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var h, r, a = 0, o = 2 * Math.PI / t, f = new t$; t > a;) h = i + e * Math[Hr](s), r = n + e * Math[Ur](s), a ? f[N_](h, r) : f[D_](h, r), ++a, s += o;
        return f[df](), f
    }

    function Ge() {
        var t = new t$;
        return t[D_](75, 40), t[$_](75, 37, 70, 25, 50, 25), t[$_](20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t[$_](110, 102, 130, 80, 130, 62.5), t[$_](130, 62.5, 130, 25, 100, 25), t.curveTo(85, 25, 75, 37, 75, 40), t
    }

    function ze() {
        var t = new t$;
        return t[D_](20, 0), t[N_](80, 0), t.lineTo(100, 100), t[N_](0, 100), t[df](), t
    }

    function qe() {
        var t = new t$;
        return t[D_](100, 0), t[N_](100, 80), t[N_](0, 100), t.lineTo(0, 20), t[df](), t
    }

    function Ye() {
        var t = new t$;
        return t.moveTo(20, 0), t.lineTo(100, 0), t[N_](80, 100), t[N_](0, 100), t.closePath(), t
    }

    function He() {
        var t = new t$;
        return t[D_](43, 23), t[N_](28, 10), t.lineTo(37, 2), t[N_](63, 31), t[N_](37, 59), t.lineTo(28, 52), t.lineTo(44, 38), t[N_](3, 38), t[N_](3, 23), t[df](), t
    }

    function Ue() {
        var t = new t$;
        return t[D_](1, 8), t[N_](7, 2), t[N_](32, 26), t.lineTo(7, 50), t[N_](1, 44), t.lineTo(18, 26), t[df](), t[D_](27, 8), t[N_](33, 2), t[N_](57, 26), t[N_](33, 50), t[N_](27, 44), t[N_](44, 26), t[df](), t
    }

    function We() {
        var t = new t$;
        return t[D_](0, 15), t.lineTo(23, 15), t.lineTo(23, 1), t[N_](47, 23), t[N_](23, 43), t[N_](23, 29), t.lineTo(0, 29), t[df](), t
    }

    function Xe() {
        var t = new t$;
        return t[D_](0, 21), t[N_](30, 21), t.lineTo(19, 0), t.lineTo(25, 0), t[N_](47, 25), t.lineTo(25, 48), t.lineTo(19, 48), t[N_](30, 28), t[N_](0, 28), t[df](), t
    }

    function Ve() {
        var t = new t$;
        return t[D_](0, 0), t.lineTo(34, 24), t[N_](0, 48), t[N_](14, 24), t[df](), t
    }

    function Ze() {
        var t = new t$;
        return t[D_](20, 0), t[N_](34, 14), t[N_](20, 28), t[N_](22, 18), t[N_](1, 25), t[N_](10, 14), t[N_](1, 3), t[N_](22, 10), t[df](), t
    }

    function Ke() {
        var t = new t$;
        return t[D_](4, 18), t[N_](45, 18), t[N_](37, 4), t.lineTo(83, 25), t[N_](37, 46), t.lineTo(45, 32), t[N_](4, 32), t[df](), t
    }

    function Je() {
        var t = new t$;
        return t.moveTo(17, 11), t[N_](27, 11), t[N_](42, 27), t[N_](27, 42), t.lineTo(17, 42), t[N_](28, 30), t.lineTo(4, 30), t[N_](4, 23), t[N_](28, 23), t[df](), t
    }

    function Qe() {
        fF.register(pB[F_], De(new t$, 0, 0, 100, 100)), fF[G_](pB[z_], Le(new t$, 0, 0, 100, 100)), fF.register(pB[q_], Le(new t$, 0, 0, 100, 100, 20, 20)), fF[G_](pB.SHAPE_STAR, Ne(new t$, 0, 0, 100, 100)), fF[G_](pB[Y_], je(new t$, 0, 0, 100, 100)), fF[G_](pB[H_], Fe(5)), fF[G_](pB[U_], Fe(6)), fF.register(pB[W_], Be(new t$, 0, 0, 100, 100)), fF[G_](pB.SHAPE_HEART, Ge()), fF[G_](pB.SHAPE_TRAPEZIUM, ze()), fF.register(pB[X_], qe()), fF[G_](pB[V_], Ye());
        var t = new t$;
        t[D_](20, 0), t[N_](40, 0), t.lineTo(40, 20), t[N_](60, 20), t[N_](60, 40), t[N_](40, 40), t[N_](40, 60), t.lineTo(20, 60), t.lineTo(20, 40), t.lineTo(0, 40), t.lineTo(0, 20), t[N_](20, 20), t[df](), fF[G_](pB[Z_], t), fF[G_](pB[K_], $e(new t$, 0, 0, 100, 100)), fF.register(pB[J_], He()), fF.register(pB.SHAPE_ARROW_2, Ue()), fF[G_](pB[Q_], We()), fF[G_](pB[tc], Xe()), fF[G_](pB.SHAPE_ARROW_5, Ve()), fF[G_](pB.SHAPE_ARROW_6, Ze()), fF[G_](pB.SHAPE_ARROW_7, Ke()), fF.register(pB[ic], Je()), fF.register(pB[nc], $e(new t$, 0, 0, 100, 100, !0))
    }

    function ts() {
        j(this, ts, arguments), this[ec] = !0
    }

    function is() {
        j(this, is), this._14 = new Gj
    }

    function ns() {
        if (this._hy === !0) {
            var t = this._8b,
                i = this._o24;
            if (t)
                for (t = t._jw; t[Gh];) {
                    var n = t[0];
                    ve(this, n, n[E_])
                }
            if (i)
                for (i = i._jw; i.length;) {
                    var n = i[0];
                    ye(this, n, n[w_])
                }
            return void this.forEachChild(function (t) {
                t._il() && ns.call(t)
            })
        }
        var e = Oe(this);
        e.forEach(function (t) {
            t = t[sc];
            var i = t[L_],
                n = t[C_],
                e = i[k_](this),
                s = n.isDescendantOf(this);
            e && !s ? (be(this, t), de(this, t)) : s && !e && (ge(this, t), de(t[w_], t, this))
        }, this)
    }

    function es() {
        j(this, es, arguments), this[hc] = null
    }

    function ss(t, i, n, e) {
        return t[i] = n, e ? {
            get: function () {
                return this[i]
            }, set: function (t) {
                if (t !== this[i]) {
                    this[i] = t, !this._o3d, this._1u = !0;
                    for (var n = e[Gh]; --n >= 0;) this[e[n]] = !0
                }
            }
        } : {
            get: function () {
                return this[i]
            }, set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function hs(t, i) {
        var n = {},
            e = {};
        for (var s in i) {
            var h = i[s];
            h[rc] && h[rc][h_](function (t, i, n) {
                n[i] = ac + t, e[t] = !0
            }), n[s] = ss(t, Tr + s, h.value, h[rc])
        }
        for (var r in e) t[ac + r] = !0;
        Object.defineProperties(t, n)
    }

    function rs(t, i, n, e) {
        if (Array[fr](i))
            for (var s = i[Gh]; --s >= 0;) rs(t, i[s], n, e);
        else {
            var h = i.target;
            if (h) {
                if (h instanceof cF || (h = t[h]), !h) return
            } else h = t; if (e || (e = t[oc](i.property, n)), i.bindingProperty && (h[i[fc]] = e), i[_c]) {
                var r = i[_c];
                r instanceof Function || (r = t[r]), r instanceof Function && r[zh](t, e, h)
            }
        }
    }

    function as() {
        uF[h_](function (t) {
            this[t] = {}
        }, this)
    }

    function os(t, i, n, e) {
        return e == pB[cc] ? void(t[n] = i) : e == pB[uc] ? void t.set(n, i) : e == pB[dc] ? void t.setStyle(n, i) : !1
    }

    function fs() {
        j(this, fs, arguments)
    }

    function _s() {
        j(this, _s, arguments)
    }

    function cs(t) {
        this._6s(), this._dt(t), this._h9 = [], this._o2f = new LF, this._kl = new ds(this), this._ni = new vj;
        var i = this;
        this._ni._hd = function (t, n, e) {
            n[lc]();
            var s = n[bc];
            return n._ib && s && i._o2f._n6(n.$x + n.uiBounds.x, n.$y + n[bc].y, n.uiBounds[no], n[bc][eo]), vj[yr]._hd[zh](this, t, n, e)
        }, this._ni[vc] = function () {
            return this[h_](function (t) {
                t.destroy()
            }), vj[yr][vc][zh](this)
        }, this._di = [], this._8w = {}, this._8x = new wj, this._8k = [], this._o17()
    }

    function us(t) {
        var i = Gi(!0);
        return Jn(i.g), i[gc] = function () {
            return !1
        }, t.appendChild(i), i[tr] = AF, i
    }

    function ds(t) {
        this._dg = t, this._kl = new bj, this._kl[ho] = t[ho], this._7a = new wj
    }

    function ls(t, i, n, e) {
        var s = bs(t, i, n, e),
            h = [];
        if (ps(t)) vs(s, i, n, h, e.getStyle(dF.EDGE_EXTEND));
        else {
            Os(t, i, n, h, s, e);
            var r = gs(t, e),
                a = r ? Ts(t, s, i, n, e.getStyle(dF.EDGE_SPLIT_PERCENT)) : e.getStyle(dF.EDGE_SPLIT_VALUE);
            0 == a && (s = !s)
        }
        return h
    }

    function bs(t, i, n) {
        if (null != t) {
            if (t == pB[yc] || t == pB[pc] || t == pB[xc] || t == pB[mc] || t == pB.EDGE_TYPE_EXTEND_RIGHT) return !0;
            if (t == pB[Ec] || t == pB[wc] || t == pB[Tc] || t == pB.EDGE_TYPE_EXTEND_TOP || t == pB[kc]) return !1
        }
        var e = Es(i, n),
            s = ws(i, n);
        return e >= s
    }

    function vs(t, i, n, e, s) {
        t ? Rs(i, n, e, s) : Ds(i, n, e, s)
    }

    function gs(t, i) {
        return i[Mc](dF[Sc])
    }

    function ys(t) {
        return null != t && (t == pB.EDGE_TYPE_EXTEND_TOP || t == pB[mc] || t == pB.EDGE_TYPE_EXTEND_BOTTOM || t == pB.EDGE_TYPE_EXTEND_RIGHT)
    }

    function ps(t) {
        return t && (t == pB[Ic] || t == pB.EDGE_TYPE_ELBOW_HORIZONTAL || t == pB[Ec])
    }

    function xs(t, i, n, e, s) {
        if (t == pB[xc] || t == pB[Tc]) return new pj(e.x + e[no] / 2, e.y + e[eo] / 2);
        var h;
        if (ys(t)) {
            var r = Math.min(n.y, e.y),
                a = Math[lf](n.x, e.x),
                o = Math[xo](n.bottom, e.bottom),
                f = Math[xo](n[Xr], e[Xr]);
            if (h = s[Mc](dF.EDGE_EXTEND), t == pB[Oc]) return new pj((a + f) / 2, r - h);
            if (t == pB[mc]) return new pj(a - h, (r + o) / 2);
            if (t == pB[kc]) return new pj((a + f) / 2, o + h);
            if (t == pB[Ac]) return new pj(f + h, (r + o) / 2)
        }
        var _ = gs(t, s);
        if (h = _ ? Ts(t, i, n, e, s[Mc](dF[Cc])) : s[Mc](dF[Pc]), h == Number[Lc] || h == Number[Rc]) return new pj(e.x + e[no] / 2, e.y + e[eo] / 2);
        if (0 == h) return new pj(n.x + n[no] / 2, n.y + n[eo] / 2);
        if (i) {
            var c = n.x + n[Xr] < e.x + e[Xr];
            return new pj(Ss(c, h, n.x, n.width), n.y + n[eo] / 2)
        }
        var u = n.y + n[Wr] < e.y + e[Wr];
        return new pj(n.x + n[no] / 2, Ss(u, h, n.y, n.height))
    }

    function ms(t, i, n, e) {
        var s = Math.max(i, e) - Math[lf](t, n);
        return s - (i - t + e - n)
    }

    function Es(t, i) {
        var n = Math.max(t.x + t.width, i.x + i[no]) - Math.min(t.x, i.x);
        return n - t[no] - i.width
    }

    function ws(t, i) {
        var n = Math[xo](t.y + t[eo], i.y + i[eo]) - Math[lf](t.y, i.y);
        return n - t[eo] - i.height
    }

    function Ts(t, i, n, e, s) {
        var h = ks(s, i, n, e, null);
        return h * s
    }

    function ks(t, i, n, e) {
        return i ? Ms(t, n.x, n[Xr], e.x, e[Xr]) : Ms(t, n.y, n[Wr], e.y, e[Wr])
    }

    function Ms(t, i, n, e, s) {
        var h = ms(i, n, e, s),
            r = e + s > i + n;
        if (h > 0) {
            if (1 == t) return h + (s - e) / 2;
            if (t >= 0 && 1 > t) return h;
            if (0 > t) return r ? e - i : n - s
        }
        return Math.abs(r && t > 0 || !r && 0 > t ? n - s : i - e)
    }

    function Ss(t, i, n, e) {
        return t == i > 0 ? n + e + Math[Vr](i) : n - Math[Vr](i)
    }

    function Is(t, i) {
        var n = t[Gh];
        if (!(3 > n)) {
            var e = i.getStyle(dF.EDGE_CORNER);
            if (e != pB.EDGE_CORNER_NONE) {
                var s = i[Mc](dF[Dc]),
                    h = 0,
                    r = 0;
                s && (M(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
                for (var a, o, f, _, c = t[0], u = t[1], d = null, l = 2; n > l; l++) {
                    var b = t[l],
                        v = u.x - c.x,
                        g = u.y - c.y,
                        x = b.x - u.x,
                        m = b.y - u.y,
                        E = !v || v > -wB && wB > v,
                        w = !g || g > -wB && wB > g,
                        T = !x || x > -wB && wB > x,
                        k = !m || m > -wB && wB > m,
                        S = w;
                    (E && k || w && T) && (S ? (a = Math[lf](2 == l ? Math[Vr](v) : Math.abs(v) / 2, h), o = Math[lf](l == n - 1 ? Math.abs(m) : Math[Vr](m) / 2, r), f = new pj(u.x - (v > 0 ? a : -a), u.y), _ = new pj(u.x, u.y + (m > 0 ? o : -o))) : (a = Math[lf](l == n - 1 ? Math[Vr](x) : Math[Vr](x) / 2, h), o = Math.min(2 == l ? Math[Vr](g) : Math[Vr](g) / 2, r), f = new pj(u.x, u.y - (g > 0 ? o : -o)), _ = new pj(u.x + (x > 0 ? a : -a), u.y)), p(t, u), l--, n--, (f.x != c.x || f.y != c.y) && (y(t, f, l), l++, n++), e == pB[Nc] ? (y(t, _, l), l++, n++) : e == pB.EDGE_CORNER_ROUND && (y(t, [u, _], l), l++, n++)), c = u, u = b
                }
                null != d && _.x == u.x && _.y == u.y && p(t, u)
            }
        }
    }

    function Os(t, i, n, e, s, h) {
        var r = h[Mc](dF[jc]),
            a = null == r;
        if (null != r) {
            var o = (new wj)[Bc](i)[Bc](n);
            o.intersects(r) || (s = As(r.x, r.y, o.y, o.x, o[Wr], o.right))
        } else r = xs(t, s, i, n, h);
        s ? Ls(i, n, r, e, a) : Ps(i, n, r, e, a)
    }

    function As(t, i, n, e, s, h) {
        return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0
    }

    function Cs(t, i, n) {
        return i >= t.x && i <= t.right && n >= t.y && n <= t[Wr]
    }

    function Ps(t, i, n, e, s) {
        var h = Math[xo](t.y, i.y),
            r = Math.min(t.y + t[eo], i.y + i[eo]),
            a = null != n ? n.y : r + (h - r) / 2,
            o = t.x + t.width / 2,
            f = i.x + i[no] / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t.width && (o = n.x), n.x >= i.x && n.x <= i.x + i.width && (f = n.x)), Cs(i, o, a) || Cs(t, o, a) || e[Kh](new pj(o, a)), Cs(i, f, a) || Cs(t, f, a) || e[Kh](new pj(f, a)), 0 == e[Gh])
            if (null != n) Cs(i, n.x, a) || Cs(t, n.x, a) || e.push(new pj(n.x, a));
            else {
                var _ = Math[xo](t.x, i.x),
                    c = Math[lf](t.x + t.width, i.x + i[no]);
                e[Kh](new pj(_ + (c - _) / 2, a))
            }
    }

    function Ls(t, i, n, e, s) {
        var h = Math[xo](t.x, i.x),
            r = Math[lf](t.x + t.width, i.x + i[no]),
            a = null != n ? n.x : r + (h - r) / 2,
            o = t.y + t[eo] / 2,
            f = i.y + i[eo] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[eo] && (o = n.y), n.y >= i.y && n.y <= i.y + i.height && (f = n.y)), Cs(i, a, o) || Cs(t, a, o) || e[Kh](new pj(a, o)), Cs(i, a, f) || Cs(t, a, f) || e[Kh](new pj(a, f)), 0 == e.length)
            if (null != n) Cs(i, a, n.y) || Cs(t, a, n.y) || e[Kh](new pj(a, n.y));
            else {
                var _ = Math[xo](t.y, i.y),
                    c = Math[lf](t.y + t.height, i.y + i.height);
                e[Kh](new pj(a, _ + (c - _) / 2))
            }
    }

    function Rs(t, i, n, e) {
        var s = i.x + i[no] < t.x,
            h = t.x + t.width < i.x,
            r = s ? t.x : t.x + t[no],
            a = t.y + t[eo] / 2,
            o = h ? i.x : i.x + i[no],
            f = i.y + i[eo] / 2,
            _ = e,
            c = s ? -_ : _,
            u = new pj(r + c, a);
        c = h ? -_ : _;
        var d = new pj(o + c, f);
        if (s == h) {
            var l = s ? Math[lf](r, o) - e : Math[xo](r, o) + e;
            n.push(new pj(l, a)), n[Kh](new pj(l, f))
        } else if (u.x < d.x == s) {
            var b = a + (f - a) / 2;
            n.push(u), n.push(new pj(u.x, b)), n.push(new pj(d.x, b)), n[Kh](d)
        } else n[Kh](u), n[Kh](d)
    }

    function Ds(t, i, n, e) {
        var s = i.y + i[eo] < t.y,
            h = t.y + t.height < i.y,
            r = t.x + t.width / 2,
            a = s ? t.y : t.y + t.height,
            o = i.x + i.width / 2,
            f = h ? i.y : i.y + i.height,
            _ = e,
            c = s ? -_ : _,
            u = new pj(r, a + c);
        c = h ? -_ : _;
        var d = new pj(o, f + c);
        if (s == h) {
            var l = s ? Math.min(a, f) - e : Math[xo](a, f) + e;
            n[Kh](new pj(r, l)), n[Kh](new pj(o, l))
        } else if (u.y < d.y == s) {
            var b = r + (o - r) / 2;
            n.push(u), n[Kh](new pj(b, u.y)), n.push(new pj(b, d.y)), n.push(d)
        } else n[Kh](u), n[Kh](d)
    }

    function Ns(t) {
        return t == pB[$c] || t == pB.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == pB[xc] || t == pB[wc] || t == pB[Tc] || t == pB[Oc] || t == pB[mc] || t == pB[kc] || t == pB.EDGE_TYPE_EXTEND_RIGHT || t == pB[Ic] || t == pB[yc] || t == pB[Ec]
    }

    function js(t, i) {
        var n, e;
        i && i[no] && i.height ? (n = i.width, e = i[eo]) : n = e = isNaN(i) ? lj.ARROW_SIZE : i;
        var s = fF[Fc](t, -n, -e / 2, n, e);
        return s || (s = new t$, s[D_](-n, -e / 2), s[N_](0, 0), s.lineTo(-n, e / 2)), s
    }

    function Bs(t, i) {
        var n = Math[Ur](i),
            e = Math.cos(i),
            s = t.x,
            h = t.y;
        return t.x = s * e - h * n, t.y = s * n + h * e, t
    }

    function $s(t, i, n, e, s, h) {
        var r = Math[Yr](e - i, n - t),
            a = new pj(s, h);
        return a.rotate = r, Bs(a, r), a.x += t, a.y += i, a
    }

    function Fs(t, i, n, e, s) {
        i = si(e, i.x, i.y, n.x, n.y), n = si(s, n.x, n.y, i.x, i.y);
        var h = Math.PI / 2 + Math.atan2(n.y - i.y, n.x - i.x),
            r = t * Math[Hr](h),
            a = t * Math[Ur](h),
            o = n.x - i.x,
            f = n.y - i.y,
            _ = i.x + .25 * o,
            c = i.y + .25 * f,
            u = i.x + .75 * o,
            d = i.y + .75 * f;
        return [new JB(VB, [_ + r, c + a, u + r, d + a])]
    }

    function Gs(t, i, e) {
        if (y(t, new JB(UB, [i.x, i.y]), 0), e) {
            if (t.length > 1) {
                var s = t[t[Gh] - 1];
                if (XB == s.type && (s.invalidTerminal || s.points[2] === n || null === s[Lo][2])) return s[Lo][2] = e.x, s.points[3] = e.y, void(s.invalidTerminal = !0);
                if (VB == s[Do] && (s.invalidTerminal || s[Lo][4] === n || null === s[Lo][4])) return s[Lo][4] = e.x, s[Lo][5] = e.y, void(s.invalidTerminal = !0)
            }
            t[Kh](new JB(WB, [e.x, e.y]))
        }
    }

    function zs(t, i, n, e, s, h, r, a) {
        return i[Gc]() ? void(n._hg = i._o28.toDatas()) : e == s ? void t[zc](n, e, h, r) : void t[qc](n, e, s, h, r, a)
    }

    function qs(t, i, n, e, s) {
        var h = e == s,
            r = t[Yc].getUI(e),
            a = h ? r : t[Yc].getUI(s);
        if (r && a) {
            var o = i.edgeType,
                f = r[Hc].clone(),
                _ = h ? f : a[Hc][Zh](),
                c = i[Gc]();
            if (!h && !o && !c) {
                var u = e[ec],
                    d = s[ec];
                if (u != d) {
                    var l, b, v, g, y = i[Uc];
                    u ? (l = r, b = f, v = a, g = _) : (l = a, b = _, v = r, g = f);
                    var p = Vs(b, l, u, v, g, y);
                    if (p && 2 == p.length) {
                        var x = p[0],
                            m = p[1];
                        return n[D_](x.x, x.y), m.x == x.x && m.y == x.y && (m.y += .01), n[N_](m.x, m.y), void(n._6v = !0)
                    }
                }
            }
            zs(t, i, n, r, a, o, f, _), (!h || c) && Ys(t, i, n, r, a, o, f, _), n._6v = !0
        }
    }

    function Ys(t, i, e, s, h, r, a, o) {
        var f = a[Wc],
            _ = o[Wc],
            c = t.fromAtEdge,
            u = t[Xc];
        if (!c && !u) return void Gs(e._hg, f, _);
        var d = e._hg;
        if (d[Gh]) {
            if (c) {
                var l = d[0],
                    b = l[Vc];
                a.contains(b.x, b.y) && (l[Do] == VB ? (f = b, b = {
                    x: l[Lo][2],
                    y: l[Lo][3]
                }, l.points = l[Lo].slice(2), l[Do] = XB) : l[Do] == XB && (f = b, b = {
                    x: l[Lo][0],
                    y: l[Lo][1]
                }, l.points = l[Lo][Hh](2), l[Do] = WB)), Hs(s, a, b, f, n, n)
            }
            if (u) {
                var v, g = d[d[Gh] - 1],
                    y = g[Ro],
                    p = g[Lo].length,
                    x = y.x === n || y.y === n;
                p >= 4 && (x || o[Zc](y.x, y.y)) && (x || (_ = y), v = !0, y = {
                    x: g.points[p - 4],
                    y: g.points[p - 3]
                }, o.contains(y.x, y.y) && (_ = y, p >= 6 ? (y = {
                    x: g.points[p - 6],
                    y: g.points[p - 5]
                }, g[Lo] = g[Lo][Hh](0, 4), g.type = XB) : 1 == d.length ? (y = {
                    x: f.x,
                    y: f.y
                }, g[Lo] = g[Lo].slice(0, 2), g[Do] = WB) : (g = d[d[Gh] - 2], y = g[Ro]))), Hs(h, o, y, _, n, n), v && (p = g[Lo][Gh], g[Lo][p - 2] = _.x, g.points[p - 1] = _.y, _ = null)
            }
        } else {
            var m = Math[Yr](_.y - f.y, _.x - f.x),
                E = Math[Hr](m),
                w = Math[Ur](m);
            c && Hs(s, a, _, f, E, w), u && Hs(h, o, f, _, -E, -w)
        }
        Gs(e._hg, f, _)
    }

    function Hs(t, i, e, s, h, r) {
        if (h === n) {
            var a = Math[Yr](e.y - s.y, e.x - s.x);
            h = Math.cos(a), r = Math.sin(a)
        }
        for (e = {
            x: e.x,
            y: e.y
        }, i[Zc](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
            if (!i.contains(e.x, e.y)) return s;
            if (t[Kc](e.x - h, e.y - r, lj[Jc])) {
                s.x = e.x - h / 2, s.y = e.y - r / 2;
                break
            }
            e.x -= h, e.y -= r
        }
        return s
    }

    function Us(t, i, n, e, s, h, r, a) {
        if (i[Gc]()) return i._o28;
        var o = i[Qc];
        if (Ns(o)) {
            var f = ls(o, n, e, t, s, h);
            if (!f || !f[Gh]) return null;
            y(f, r, 0), f.push(a), o != pB[Ic] && Is(f, t);
            for (var _ = [], c = f[Gh], u = 1; c - 1 > u; u++) {
                var d = f[u];
                _[Kh](O(d) ? new JB(XB, [d[0].x, d[0].y, d[1].x, d[1].y]) : new JB(WB, [d.x, d.y]))
            }
            return _
        }
        if (i.$bundleEnabled) {
            var l = t._32();
            if (!l) return;
            return Fs(l, r, a, n, e)
        }
    }

    function Ws(t, i, n) {
        var e = t[Mc](dF[tu]),
            s = t._32(),
            h = e + .2 * s,
            r = i.x + i[no] - h,
            a = i.y,
            o = i.x + i[no],
            f = i.y + h;
        e += s;
        var _ = .707,
            c = -.707,
            u = i.x + i[no],
            d = i.y,
            l = u + _ * e,
            b = d + c * e,
            v = {
                x: r,
                y: a
            },
            g = {
                x: l,
                y: b
            },
            y = {
                x: o,
                y: f
            },
            p = v.x,
            x = g.x,
            m = y.x,
            E = v.y,
            w = g.y,
            T = y.y,
            k = ((T - E) * (w * w - E * E + x * x - p * p) + (w - E) * (E * E - T * T + p * p - m * m)) / (2 * (x - p) * (T - E) - 2 * (m - p) * (w - E)),
            M = ((m - p) * (x * x - p * p + w * w - E * E) + (x - p) * (p * p - m * m + E * E - T * T)) / (2 * (w - E) * (m - p) - 2 * (T - E) * (x - p)),
            h = Math[mo]((p - k) * (p - k) + (E - M) * (E - M)),
            S = Math[Yr](v.y - M, v.x - k),
            I = Math.atan2(y.y - M, y.x - k),
            O = I - S;
        return 0 > O && (O += 2 * Math.PI), Xs(k, M, S, O, h, h, !0, n)
    }

    function Xs(t, i, n, e, s, h, r, a) {
        var o, f, _, c, u, d, l, b, v, g, y;
        if (Math[Vr](e) > 2 * Math.PI && (e = 2 * Math.PI), u = Math[Xh](Math[Vr](e) / (Math.PI / 4)), o = e / u, f = o, _ = n, u > 0) {
            d = t + Math.cos(_) * s, l = i + Math.sin(_) * h, moveTo ? a.moveTo(d, l) : a[N_](d, l);
            for (var p = 0; u > p; p++) _ += f, c = _ - f / 2, b = t + Math.cos(_) * s, v = i + Math.sin(_) * h, g = t + Math[Hr](c) * (s / Math[Hr](f / 2)), y = i + Math[Ur](c) * (h / Math.cos(f / 2)), a[j_](g, y, b, v)
        }
    }

    function Vs(t, i, e, s, h, r) {
        var a = h.cx,
            o = h.cy,
            f = a < t.x,
            _ = a > t[Xr],
            c = o < t.y,
            u = o > t[Wr],
            d = t.cx,
            l = t.cy,
            b = f || _,
            v = c || u,
            g = r === n || null === r;
        g && (r = Math[Yr](o - l, a - d), b || v || (r += Math.PI));
        var y = Math[Hr](r),
            p = Math[Ur](r),
            x = Ks(i, t, {
                x: a,
                y: o
            }, -y, -p);
        x || (r = Math[Yr](o - l, a - d), b || v || (r += Math.PI), y = Math[Hr](r), p = Math.sin(r), x = Ks(i, t, {
            x: a,
            y: o
        }, -y, -p) || {
            x: d,
            y: l
        });
        var m = Ks(s, h, {
            x: x.x,
            y: x.y
        }, -x.perX || y, -x.perY || p, !1) || {
            x: a,
            y: o
        };
        return e ? [x, m] : [m, x]
    }

    function Zs(t, i, n, e, s, h) {
        var r = i < t.x,
            a = i > t[Xr],
            o = n < t.y,
            f = n > t[Wr];
        if (r && e > 0) {
            var _ = t.x - i,
                c = n + _ * s / e;
            if (c >= t.y && c <= t[Wr]) return {
                x: t.x,
                y: c,
                perX: e,
                perY: s
            }
        }
        if (a && 0 > e) {
            var _ = t[Xr] - i,
                c = n + _ * s / e;
            if (c >= t.y && c <= t[Wr]) return {
                x: t[Xr],
                y: c,
                perX: e,
                perY: s
            }
        }
        if (o && s > 0) {
            var u = t.y - n,
                d = i + u * e / s;
            if (d >= t.x && d <= t[Xr]) return {
                x: d,
                y: t.y,
                perX: e,
                perY: s
            }
        }
        if (f && 0 > s) {
            var u = t.bottom - n,
                d = i + u * e / s;
            if (d >= t.x && d <= t[Xr]) return {
                x: d,
                y: t.bottom,
                perX: e,
                perY: s
            }
        }
        return h !== !1 ? Zs(t, i, n, -e, -s, !1) : void 0
    }

    function Ks(t, i, n, e, s, h) {
        if (!i.contains(n.x, n.y)) {
            if (n = Zs(i, n.x, n.y, e, s, h), !n) return;
            return Js(t, i, n, n[iu], n[nu])
        }
        return h === !1 ? Js(t, i, n, e, s) : Js(t, i, {
            x: n.x,
            y: n.y,
            perX: e,
            perY: s
        }, e, s) || Js(t, i, n, -e, -s)
    }

    function Js(t, i, n, e, s) {
        for (;;) {
            if (!i[Zc](n.x, n.y)) return;
            if (t[Kc](n.x + e, n.y + s)) break;
            n.x += e, n.y += s
        }
        return n
    }

    function Qs(t) {
        return Tn(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t[$o] ? t : void 0)
    }

    function th(t) {
        for (var i = t[x_]; i;) {
            if (i.enableSubNetwork) return i;
            i = i.parent
        }
        return null
    }

    function ih() {
        j(this, ih, arguments)
    }

    function nh(t, n, e, s, h, r, a) {
        var o = i.createElement(eu);
        o[tr] = su, di(o, BF), n && di(o, n);
        var f = i.createElement(hu);
        return r && (fj ? f.ontouchstart = r : f.onmousedown = r), f[zo] = a, f[ru] = e, di(f, $F), h && di(f, h), s && bi(f, au, ou), o._img = f, o[fu](f), t.appendChild(o), o
    }

    function eh(t, n) {
        this._navPane = i[uo](eu), this._navPane[tr] = _u, di(this._navPane, {
            "background-color": cu,
            overflow: uu,
            "float": ya,
            "user-select": du,
            position: lu
        }), this._top = nh(this._navPane, {
            width: bu
        }, lj[vu], !1, null, n, pa), this._left = nh(this._navPane, {
            height: bu
        }, lj.NAVIGATION_IMAGE_LEFT, !1, FF, n, ya), this._right = nh(this._navPane, {
            height: bu,
            right: gu
        }, lj[yu], !0, FF, n, Xr), this._o3ottom = nh(this._navPane, {
            width: bu,
            bottom: gu
        }, lj[vu], !0, null, n, Wr), t[fu](this._navPane)
    }

    function sh(t, i) {
        this._dg = t;
        var n = function (i) {
            var n, e, s = i[pu],
                h = s.name;
            if (ya == h) n = 1;
            else if (Xr == h) n = -1;
            else if (pa == h) e = 1;
            else {
                if (Wr != h) return;
                e = -1
            }
            fj && (s.className = xu, setTimeout(function () {
                s.className = ""
            }, 100)), P(i), t._l0._o2d(n, e)
        };
        eh.call(this, i, n), this._3w(i[mu], i[Eu])
    }

    function hh(t, i) {
        this._dg = t, this[wu](i, t)
    }

    function rh() {
        j(this, rh, arguments)
    }

    function ah(t, i) {
        this._dg = t, this._k0 = us(i), this.g = this._k0.g, this._9z = new vj
    }

    function oh(t) {
        var i = t[Tu],
            n = [];
        return t[ku][h_](function (i) {
            t.isVisible(i) && t[Mu](i) && n[Kh](i)
        }), i[Mr](n)
    }

    function fh(t, i, e, s) {
        s === n && (s = lj.ZOOM_ANIMATE);
        var h = t[Su](i);
        return e ? t[Iu](h.x, h.y, s) : t.zoomOut(h.x, h.y, s)
    }

    function _h(t, i, n) {
        var e = t[Of];
        n = n || e, i = i || 1;
        var s = null;
        s && n[no] * n[eo] * i * i > s && (i = Math[mo](s / n[no] / n[eo]));
        var h = Gi();
        Jn(h.g), h[no] = n.width * i, h[eo] = n[eo] * i, t._91._hb(h.g, i, n);
        var r = null;
        try {
            r = h[Ou](Au)
        } catch (a) {
            yB[Ko](a)
        }
        return {
            canvas: h,
            data: r,
            width: h.width,
            height: h.height
        }
    }

    function ch(t) {
        this[Yc] = t, this.topCanvas = t[Cu]
    }

    function uh(t, i) {
        this[Pu] = t, this[Lu] = i || Ru
    }

    function dh() {
        j(this, dh, arguments)
    }

    function lh(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }

    function bh() {
        j(this, bh, arguments)
    }

    function vh() {
        j(this, vh, arguments)
    }

    function gh() {
        j(this, gh, arguments)
    }

    function yh() {
        j(this, yh, arguments)
    }

    function ph(i, n, e) {
        i += t[la], n += t[va];
        var s = e[Du]();
        return {
            x: i + s[ya],
            y: n + s[pa]
        }
    }

    function xh(t, i, n) {
        var e = t[Nu],
            s = t[ju];
        t[ha].left = i - e / 2 + ro, t.style.top = n - s / 2 + ro
    }

    function mh(t) {
        var n = i[uo](ao),
            e = n[qo](lo),
            s = getComputedStyle(t, null),
            h = s[go];
        h || (h = s.fontStyle + er + s[Bu] + er + s[$u]), e[go] = h;
        var r = t[Fu],
            a = r[hr](po),
            o = parseInt(s[Bu]),
            f = 0,
            _ = 0;
        return yB.forEach(a, function (t) {
            var i = e[Gu](t)[no];
            i > f && (f = i), _ += 1.2 * o
        }), {
            width: f,
            height: _
        }
    }

    function Eh(t, n) {
        if (rr == typeof t[zu] && rr == typeof t[qu]) {
            var e = t[Fu],
                s = t.selectionStart;
            t[Fu] = e[Hh](0, s) + n + e[Hh](t.selectionEnd), t[qu] = t[zu] = s + n[Gh]
        } else if (Yu != typeof i[Hu]) {
            var h = i[Hu][Uu]();
            h[Wu] = n, h.collapse(!1), h[Xu]()
        }
    }

    function wh(i) {
        if (KN) {
            var n = t[Vu] || t[la],
                e = t.scrollY || t[va];
            return i.select(), void t.scrollTo(n, e)
        }
        i.select()
    }

    function Th() {}

    function kh(t) {
        this.graph = t, this[Cu] = t.topCanvas, this[Zu] = fj ? 8 : 5
    }

    function Mh(t) {
        this[Yc] = t, this[Cu] = t[Cu], this.handlerSize = fj ? 8 : 4, this._rotateHandleLength = fj ? 30 : 20
    }

    function Sh(t, i) {
        var n = new wj;
        return n[so](Hn[zh](t, {
            x: i.x,
            y: i.y
        })), n[so](Hn[zh](t, {
            x: i.x + i.width,
            y: i.y
        })), n[so](Hn[zh](t, {
            x: i.x + i[no],
            y: i.y + i[eo]
        })), n[so](Hn[zh](t, {
            x: i.x,
            y: i.y + i.height
        })), n
    }

    function Ih(t) {
        t %= 2 * Math.PI;
        var i = Math[ko](t / qF);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Ku
    }

    function Oh(n, e, s) {
        var h = i.documentElement,
            r = new yB[Ju](t.pageXOffset, t[va], h[mu] - 2, h[Eu] - 2),
            a = n[Nu],
            o = n[ju];
        e + a > r.x + r[no] && (e = r.x + r.width - a), s + o > r.y + r.height && (s = r.y + r.height - o), e < r.x && (e = r.x), s < r.y && (s = r.y), n[ha][ya] = e + ro, n[ha][pa] = s + ro
    }

    function Ah(t, i, n, e, s) {
        this[Xo] = t, this[Do] = Qu, this[td] = i, this[cr] = n, this[Ao] = e, this.datas = s
    }

    function Ch(t) {
        this._5a = {}, this._l0 = t, this._l0._1s.addListener(this._9q, this), this[id] = pB[nd]
    }

    function Ph(t) {
        return t >= 10 && 20 > t
    }

    function Lh(t) {
        return t == aG || t == _G
    }

    function Rh() {
        var t, i, n = {},
            e = [],
            s = 0,
            h = {},
            r = 0;
        this[Yc][h_](function (a) {
            if (this.isLayoutable(a))
                if (a instanceof aF) {
                    var o = {
                        node: a,
                        id: a.id,
                        x: a.x,
                        y: a.y
                    };
                    for (this.appendNodeInfo && this[ed](a, o), n[a.id] = o, e[Kh](o), s++, i = a[x_]; i instanceof _F;) {
                        t || (t = {});
                        var f = t[i.id];
                        f || (f = t[i.id] = {
                            id: i.id,
                            children: []
                        }), f[Yh][Kh](o), i = i[x_]
                    }
                } else if (a instanceof rF && !a.isLooped() && a[w_] && a[E_]) {
                var o = {
                    edge: a
                };
                h[a.id] = o, r++
            }
        }, this);
        var a = {};
        for (var o in h) {
            var f = h[o],
                _ = f.edge,
                c = _[w_],
                u = _[E_],
                d = c.id + na + u.id,
                l = u.id + na + c.id;
            if (n[c.id] && n[u.id] && !a[d] && !a[l]) {
                var b = n[c.id],
                    v = n[u.id];
                f.from = b, f.to = v, a[d] = f, this.appendEdgeInfo && this[sd](_, f)
            } else delete h[o], r--
        }
        return {
            groups: t,
            nodesArray: e,
            nodes: n,
            nodeCount: s,
            edges: h,
            edgeCount: r,
            minEnergy: this.minEnergyFunction(s, r)
        }
    }

    function Dh(t) {
        this.graph = t, this[hd] = {}
    }

    function Nh() {
        j(this, Nh, arguments)
    }

    function jh(t, i, n, e, s) {
        e ? t[P_](function (e) {
            var h = e[rd](t);
            h != n && h._marker != s && i(h, t)
        }, this, !0) : t[ad](function (e) {
            var h = e[E_];
            h != n && h._marker != s && i(h, t)
        })
    }
    var Bh = "9aece3bd6354ae36a71531a02d5bf7130404332e3dee48a7309cd5fdf9f64de20e569ec3c4bc09ed1f3d75282307cc8afa8c2b491e5ba19e8711be0571100c15bcf9ddc0718ded1b3987f4e0360d99a5b3ea2eb738dc60e9394e50f3d5d0267c6eb38da5df4db0c86b178b28cb3eba031242f5be99026390c510e0a238c41e6d922cbf6acc9b6ccca57f3c36781306e8b262c0c4b527a9c6a645fabb6ce846bf20663428ec62740a904844d192b8fbf8fa01519fdcf484fc57cebe4d0834e1ccd706424c92e9ff2b0f6b48aaa74f548a54192a69aad790c34fadd3ecd40b1886cd38b45769a506f381659c4d4aea64d449e2efcb7f5d3f108f463d6d33f447a3b303fd1a1d0eb9bf8c8fe5393506eb2899d7923b6569575bf99d5b7f738fd5ca1f3dd11cbca40cdf5c2fb7b2d3baed4e191b3d621ff1038a7b6db62aa3aa4c753ffb715829bcf003d6451aa1eb50f18285df804417ab8072b515380b6a0cc6b132b2f9dccb524f2ccb72606820e04ac1c321caa3ad2421dbc1a7e6bb962234d2db207ce4fef650d39756671c7ff051c55262075f1b90db95a6a67d824ef07c7ec097626247e7a98dacefd7d06c0428d438dbf65ce5274a76329256d0bcab0e65abe872470b0055031609e4969123b264dc04991ab1fee6072dd5c268d5d2a81c22130f53455e611f7456c4fccd5f14443db78b1e9aabee953ac723cc0b9fb09702868fe643ba3e0c88c455bc9a20855dea70b7c5082200dbd9c3beee2ae0d602d85292f13baa67063cc742f5d2296760b665d84471aab946380e79d526a83201229d51c5d513a7aeb7f85bc60d7e61951478fbf90ac9be518c58896c829755563c10ebe37d4161f8dc6f56a05e7b83cdd4cc6c0a04d8add285153dae0c54b6c81e67e92e014fc7584c96913cce8a3929df27b60c8ab2b47378daf0631c08202df9967110b4169921a1015d9ea080a92533718471ca7cb453df718cfd463f7aa732f320beabbe73c439c087def1cde117d2106a076b848d839b99d289dbdb1aa44da862443744ce54dc51eccc57fef8521519f8fd68a974bd16d25ec0d602b3ea50684627f930f62d7cf48696c2cd0138f707e1f0e3b77794d33ebfc33c3a3e1c819ad5792ce1cc8568145c79d0d56aa822713032cec557eef8c89305182e3a11154845ebab6a588da5fa918bbcc813ea174e8d071e251653caed53f2d47aad6cc3d95e3b08b70cafae4ff28917fec5b56198b9cc8958f2528f9858d8eeaf671732a97d0dda115d845fa6624d78c7238aaddbb510e5f66faae0a79eb0a01dafb5ec803272c24ffae2f0a84e8c8694cf38ea4827984bbd931d8984e37ad6b9168608ae4dece1fe7d36791fb230c023b57c04bc07de8c628a4b076e91f187cd0160eaa2d4faa50705afff56c0ec15f8d08ead464bcef8ccdcdb6be25c9287db316b85129dc83bed9590400b5caf7545282146ccf4d0a41da05692dc8f60176f22d72d6cda89c51f7aa2b65bb5332601654d17fd6535d43463e64d769847abedf7b929357996ba5e16c2c37d365aa82739e5e22d4a1a03defbd721e64b9aa33e66feca31535737192971e9dcce5de11968635220c5570c8829ea577eb9f0ad632644ceed8935ac7a94c272eb8eebea55fe9d1376f9299ace528fce944b6e3b4a99d73f4b05489992417a94e28fc11383dd16b65ad63fe65257540844992e1ae97c4b9ac75fd89cb11ba3a3f4b9c1ad68d24baa35e151832523040b97b64250ba6946f94b94c9e8981f85afbfa619d6daff43b3bcd7d38aead42031bbc944c6e17459c055781e50e72279863a606b2e4a579826bb7e8c6d66ea23103887c8e6d73ed48dc2039fed34c5f092d8ba47ba878b98a3bb92172f47c7823e5919f819876c9c65b00c1ac2ad1438453d092c773216e2c410c2b75e1226fd9a583641556804a327287c1666d6c7f9fc58a7580ff852211df6c2269aaa86055c02d80635dc857da36c42a898f49cf5e9d73367bab17f8d3df8dc08cf6714bf4ce3e6fb43dcaea54dd04e091c58dcfd07dc413736343d6697365e5e3184ced40cc22cf653cb1d981b423868bd9e53d04b5b64e7d779c50e160f10612b6f1832ad485e6fd42aa548e4665838d2bff03da0aaa4427bbc1ca63aaceb4ebd303f7c15d1a7ff1de962284a0a803943ec0f6d3d3d831fe3f3b0f4d79a7ff969359b822f588d8abbd9889050aabc6a149ecbcadd4f5924abe31963aadf7143e1b4b23736df11ef478dc50e0b17e436ca954051af17bf375805b5f945164802bf175b6247a455abef2f2531e66ef98be157770514b6809028da800dc3b8623d5644c5c4e74334d604eeded0a2f85c8ad26cfb5c81813bd237c4c96bff022706ce91a9db5fadcc22f4a716062aa881f43fe9847a179eafaf9e09f71f5beb69ff66699430c8bfb98af9b57a73c81d33419915a7a644846c97b709c8a5a280370efc6b34f8bfe1aac43f1c9c8463b826384fd00cdc435f26ac227757877799eb7b528d0442fc96b6904108e725b61b26edb560770e63e5fe747e88ad1652523ff5400e57db7c183657f8eb0a13273bb0fb965e448f6fc5ae4f69488d991b4d339cb30908f9bea886446e642541d9807691ad6f7216f0262e833792110426127599b15b3c857bede41e7b11a0e4ac02b110785e236eb57d18e8cb9f77de54c78b919b38fe643dfbef9574b4550bd7d2138059a9303a93423d7fb3e4002ca770d95ced46c819a96bca2950230675cc330aed3d1903074ff854ed97d7d8efd8f18287abc46b5925300634f4de9e02dc9de8927a0b453b491277271d07a99c7e059b6eaf7980bdfaea0911e7268877970c4b90e4ba6e5288deafad284c717f9ab785c2fa91e474284a4c8ad557f178995689df6f1f837d98567cbbe6f0af0c6b103c2b2c6b210c82800eb604b0b57138efe11920f46a679f66ec5af4c8a81a4acd431b1206adf9d762386c20bad21414a3701c4bf4b79a113e3237f92d2da96972f14ffa79bfd6bd9516a7b0f54d29206a0bfcb6449db0424808c66eace4e01953ceeae8fdbcb04db70f7fe5713d78c3433a3ad8a41b450ba9a2f0c2886579287ae38b0eda649a4ef1e45006885d42949558387cf2f4d33cf2a1b9d92d253f1cfc2c9fa17c579582aa80023a40a1727d7cd118213ba4b62668131707c1314602b4706f99ad269d090cf7f8e6b9c8d0151fffe2cf840aeaf19f5eb0c4b67131491217fa52c02563f5540ab3d0b59611c896792780d541f901422dd80998319d597e2b48477dd2e89119b45dfbd6083172f687390e62cb2c3cfef4768b78f85c547d24ba76b3ca42abc0c2f8f58d268d9c34d82653cad5a24954ddf48ffbea8a15e49ba873498ce5aa96f485dc6665071aaa0ece98f1b185e9ba52d0f894b59f14bb9d29c443aeb22f043ba4f903b53ef09f7587bdb4b0357a8263e5a44254b0947283c662d68db88ba245e7bbd1e7183a74e19a7eabfb8a1cba65ef2fd6c20239c1483312796108601357b7ee3187a6e54c2e8b2cf967b4d78578e0139505775e7594ad66b1819880addb6d83fe1d71788c92fe67b01d6cbc2fffdfd5bb7024c2604017c80115428c648084c0b6af0f25d1833c0a49f180fd92f002ab3314850703caf9d292a6426cfc72982420c4e816ccdc38e3cbb786df53f04ccd69dfc74b5c23157671c7ec0bf64aeb88997934734b04f40103eb99c9186a7dbe8142317f354032ae586e9e25fe2d3d3dcbfe0016cf3375bd37baf7b9f0752385f2be1018244eb37a17c1828ccf9aaa84804a58a0ed5fb5e76a3f1db96d7f6566f6e49b77629c6ae1b511779f9cca90b9746265f90b478c4a761946e9e28a1bf1be4752d20c409101fc1673c55310274139b44a1c03e8917e4495590f82c24eab0a56d1a170bde6eaea96979a20102d3ea3e92392641ba4055e6318e0e7523876e759de2720a14d3c89c663d85a8fabec47ac6bb909718ad9d8cb6a7c28b59a05e975688cea5e21b1ad3e86a705a86014b941eb36aa4b90d5e82790f6518e21375ae0da341b33011f3934749a5ac20d2c496627ce2c054b19f1e159bd67484bd7c6c7af266d626646a68a343bcff77cd057b338664474e4ea4f09ad7ecb2a9a4c579d71bd3568f89df74d43bba20475613e38b4e6b4a4f1f8a91b3c5ae372e42fcfbd33ab672822d08c7c7a64e7988a900f8e5207ad8f4c45ac5f6691533caa590045a1cc2b75aadf67a15d85251136a70e0bf3b0521247c6beb7e795feda5a02b7f09fa5e574a8b70a29d6bf32a7011f1fa52bbb4d16db55b9042980bdfc8e09bc1e6313b4af872e75cc5d2bef19242711d834bf3286f693def1bc77751b1a32a9c056502d264e7d76bcd250129f0e3fedcfa0b811e9db02b5dad802e6e146dc198e97e13f8a2f5a8e876c68cd6c1912cca0f83d774fc90e62570bd4aa8ed7017dfd44c8091b865f65d53cbee4fe2b83bd7e1d2080372412cd73de21c63933c6a4667ef3c6bb95f7844751ce70682d377d72422536a12d109849cb019217477f2eb30aa6219cc5ccc2509286fda61108c817965cc5edda0dedcfedb35b2fc36c4ecf05fd155ce8a85a43ee271b5f965587a1f64603f24a784224bdaf0b0fcfbb2a3a6980c9c5a46993682a309b09a82606676f9bf0004031f3cbbf3b7712ae3e8e1a67aa7f945bf1ea42901ef769ac2e55e6761bcd04ffce24ad6c4eb58bb59decd6608b47bdd1d441498f1609c1f20e2efaaac5e9e03ef6c2580aa6018573b9f97f50a5d03e967f12dac270e679e8214062a3bb4404f12af58caaccda5c7270fe50a5f55ae0835a151d4195ec9041e992a7067b1bf3814ff729bff44e166e21cb5bab76f857cfdc93520f4870be42f26bdb9afe60231f24cdf95b832c94af38e8f41aba4a38e6df0b561f4b0c3a7f0fda5622905ed2c1801c0b3f2c9cdf211452c96cd3a3e3e78be4682a975dfed00f4cf51c20b6b0abc7f22db772ffb26902d495f9637a1a182a69a73bee93ac6eda9a3b0ac84bb4c38233f3405ab53c18d51f4256f862d8b093c0b4dafeb775e65478c153e1df124e44b1bb3eafc37f496c9b4f7b83a83ed45b502be775107e2e44dce1445fe9333f4da02ed70c86203b8eb535d8837ae9ad786345d85e0dbc88d87fe70cb316d9fd1391dc9f4c288a65b3a10f51a7dfbcb018fd0fd522e814205c7b63c11adb39719c16ac88aef6c3413ec5ddbab43a9de5f66d91bc2ce5c402b2af8ac14e193a48376662a4160ac70e142803ce03a1d090fca7ec03895c2df852668e86ce34453fdf47ad24056207103acef01191ef0d58dffb4fbe98da2e3cc9daf3db6ee6b30d7f9b81c05d652e3a0bce0d94bcf9d28f94dfb9120414b770e8a84f8994a1a9d9fee676ff6fce7c9b3ac1cae8fb399e9c470b7ab9ddee950060c2a7d86db4b870016c587cb5a7fdd0e0a87849345614548fdfb31cb95831bdb419a5826fbe3c28f9a5a69838d8fe5a46c83ab5b95f693cf4dcff66b1cb60bc6bf46b7a3348dfe731e5dba98b7bd842499523c51f2a5527783280fe0ba807990360634f1bd97fd3504325c69c60d9d95f0e30eebb5f9627d69cd3595c647e8c3fee6db4db041a53a5ff70a9fca273c20b15c0e2174b3a6b84635f58be2d2f692835307bc838ff5cdab4df8f408d75d4e2b88407fbc9b9856682f626e82f42d3ae7da20879fce6c0c60eca6963f1f038bc70654a4f42977c71f9b07e7864489e18ebc3f532b07ea4fb2c6c5aa094e78ac0dd7362c0fa89d8f232df7cca50c74c3aaec71aee0b37357f53bf7c6aa099d2e1971d065087a60a11d60083b5b93fe0d155a1e30768f926ee91fb80d773ee4028354a0db9d9ef2fb0afb582a18272e69d9c51c4faba382eae39d43817f08b68c9f61190d30faf3cf2ef0847e87a298e6f3fa024c854187844dea094ad983d32bea1e9be9dba9ad77c9abb308bec7318ee5cb2523ab1614b669888fd19e979afae2a78d64096d7dd22a4de974503384bcf12207d9f5efe2544313142ae0f1bb46c1b22491c20c38e3ef2dd4a4825296e05f21cbefdd88f967b312f8b835604e36484828f3e3041e6cd7aca6bd1c93dafb410436ad513ebebf4ffdba2ef0949d8ee486bbd300b83e34a4f20b301c678b5c56e779422f4590154fda675315308acaa57b408a1c623eef9384e2e2dd2cc84c78d6ae07a5c99d15a6fb44e7071f5cee8b67ef8343626fc0919ae2a13f21958c4e54852cbf665d1824fc269b70d84af03b116de7bb1d45fe32e5582c1ac0236fd7a8e5e663c27699250730960974748c28a3874ac45bb51b71c7931a8849b6a2e14a06636ecf9c226e6aa9bfceaa3c81ebe3d3f1e6d4cb2dce40110b836a72831c96cffcb9ffa50ecd1da88212e1e75d88a3f00be4fac953f8c567d5828a41cb04dc849c9d3de1c1a13c2344c18db2d65b40bbb108dbfc7596e6a401ce0dad011c4f25d046360efb47103d9a54c932d73d85851d36a4970be2dc03483c7e4d553207d47a410e01a36b41afa2a674f9b4c7825b45b194888ac8e37b2a35c399807b85e4166bb87ae5cb6003584e841f6582e7016f3b1bfa64e32090db912c2097c09ec11dd44ec427dcfc30c8bd7cac173dc4ad7d842c2051b13172c2a4d0d58316fea7ad45f33ef303713e739dcabfb807140c6930efd779bbb07f319b136104d0f62b56685ef17cac4dfd43f081b0e6b6f29acae60a23c572eca41ff1bd987417ae227d71a42ac5111657e653316edd0212ad62b7e5f36cf236c348d4ee2afb8098958bdd05e6c462efcf15ba89a5aef53e38823b4b157b097bf032088e90489beecbe697d6f1187980fa4bdec951dab7abbd8912a6ca87d36e01ad559be0725f71bf1a5c508cd2b9375fad63aba63229d562e8932d5b100bda32b505fab779d17bf5823da1c48962bd5316d2dff6ee232457a80939a7f6ff8b908b459d6b7624e3125b069c4d730997524ae38d835540e47c9d6f3bfa8735bff0e0f5cbc0150d85910c65db1eba6113e25c020263f48f313c7677fac87d1c5d8c56910767ad29a58ef43bae9f809ea9eeab99c8732a0ce4556d149c804136dc2ded8512fa6cdad4dfc498f82654fe321dc9a66529374047f6a8bd35144d140e7bcec1169e090df3425be6419e72fd7000ab7aee3c199c76e887db49eca5c46c244ace8a674cef47e17d0e91586dc53cb79eafe76a905144bba01c597cdc965d39ea25bb964190970ba8f7af70f2430ab088649efcca7048b36e7fc0b0d8c3eeb6b1b221112373aa54b7eb6cf4b88a12e8473b0395dbccc5b5b15d689786bcc8940dc22111b9b199939689e161ed48890382640c8a71c61869ffe94fef42e92a26c05f0e38bc43f09fa26fbb9c173e1e56b7e0c84886723951c91ac5024b441724b2dc7972fb3449d4b2473b4bf660b6fcfd123c489e00fc089b0f901ac313647b9a782f4b24831fb35f5aae9e9c84c2ef9eb2e9761f02d7b206d71c44cbc16d83d973355c54fdf838a481876837a2f0f321450faed2404adfdca14b9bf451ff9e5259c34e1a028969b9ce12b3e13f40f5846281924b31ba6a8efaa2c2119523bfbd7dd9a1423da21e0931b171457a26a92548283f02abb09acefceb793c9b93ef81191624df796eb32fd5cea662d352d03fc67bb1c82fdb9536d13083858286fb7c9e19aa847282d1a48c67109f06e68ab78660b2dffcede07a2dd6e2b823cafad875042fc8d54fc3ded8559b6f27645e55dddc3b785d8eb9602ab65bbafc2f3d1e30b44df26c3bc446dc2a72df4c9ae46b30b0c6623aea5670b5511720dd72d17d84446082e06723927611e7ba1a1e9c56eb228935985742fc87625c575a1133fd5f34aae7f48a0811b06374dd545f550b5c85f6f1d303c60e7b678eeaa01a6506cf146d605e12c42e469564b05501797dc76129a334b4da4f4edb2d4bc80e4fc2a231265db3cd9a4d87ea483ca11242337c8754a5a58dc864b9fac404b0fc2a543b599ff4ca1971a677aef562461e9ac5e81db48da930334d3be0be870f4d079bb33fc2bc32ad1e05b553f642bb83be936643478a38992ed859ef33d0677121a9c3810ab98d88f03c5ba0ad0c3d31c7bf58cd2e551ea2d0c0af3a442afd79b2972b08caf5247cd28a748a62ab0f2f9177494c86839c1d1e426bc0c47b922c2c9439eb31f1a6ec37c47ef6918bb387241425fe0f0b2992a6ec1c341431aa9c59acacca4eb710bad8a17fe32905a30b95df354a68207084b9dfd6c7403c0a3e1829f78de9982cebfdb931ecd6aa337f88d9e55c3713688427d3d98c97d034fe6eb14bc7d049add6a0b9d37d1d2a1688eef98e917e1af71fb1e763c81b387f086c6edf590a3081672a26f3442bbb203357939298f7e61acd92e9884f4932bf628b6aa3ab1c40c7e8c852842807caf49bf70e72a28f72e86dabfeeb6fb2a298b1f1968079ae35aa33631050e83ea39c337d1796d29993ab96dfd958f93567339bfbc45ac10ad55d6be5d15d1acd1ca0b56255033d4f6179501f9078961168125ef3171942b173b0a9d09b1ae73b79cd42f0ad596f746a1e18da5bfef1fcdfe4e6aed6b8b8740e369d27b1cce44db8aae2f7b9edca975177bcb920c567f474cf5e7c9e1ef4e44a72be6c68246e14393f898f66ac26993aebb14cbb9d008786cc41fd830ce1dee8e0a73403c2de66de0ed5741e77ffeeefb9d1406c0369d2605a603e35718b1d5b4afa4b5cea1abb7ea3a8cb2eb03d74d8ca911b3c7af8c3b41e804a587a9c18f05fca53e44a5b908c7814aebb35907e8311126763a75dc9166a38514e06b97ac7f3517a90017f7701cbaf01aade12fdfe6afb1a79532d6f94cbd7f561ae35e808b123c47bd8231b0af69756e5f016fbdaaa8706ed68d96b8f1e771d0e7505402dc4c571c648556e72936534b8d816bd8bc21bd801afdeed553ee5ac0de30f1fc7288de85fd54539db089d8438bf819ba2aeaade1ba85aa6b09bd796923fb3c356a00138bd401d1b0cb9fa6a445e3b437ac6b7a5df50d64c2c6800467fb95833196631b8795543a1f5bf882f7906699db9a2f9cea7b1f99fc67f67c11a754a61a089a8514ba68a544f2e3b80ebb2df5a2ab156735cc45f82f1a7a8e9646d657725db1378a6d3cd327a0af53555da3c5a29b286a8194b6e29f56321e1ebaeb7f090edc9ef0a6bd6735fb316b53405a5c5ccf0c4b9af505b27a1dd45d6fd326d3f85de4113585d3fe5d0d55405ceeb29708bf66a8239353ba139fa1634595b9f5eed992dc370abf32f41bea1bac0fb452cab0069994accfa299534c51fa4bb4f2a0d2ad5a995d6ace118856a1b39bcbd6444592df0500696b240c3f23460e2f6478f7f03cda3ae8e76c8b09eabb4d45ae310f250232c80d8c3b8d10ef277bdcc187ad7cc6e594e39b03e8f62124f052ccf30650d348b3e672ac8122653f62c776c4878748dc0bf767f819ac765aa65e71f1b6d0197e770ff2f5625074debea5279574ae78d1181d5280602dd16cc02009bed117081b58cd32524f620fa70d12eecfe9989359c3bf05da95106c4402bccb1a203797785ef83123737b6188d2d795fcb808eed4008c5af8762e75d9c31f33a107bd30ba9b7bafebc505e0a4076fec2a16f633632648e082d7e2f8e0d399ce2105c4087d43994190cb007ec7aaeca0cc342fc8db8399cabb93796733dee59b3eef203afe6b43af86827362af0dfe292033a03921e39f3ea5bac71b02802d6324985c1aadf49e5f864a2b1be0627cbe3d8f56668e6092e96a199418c4fb81f5cfa9f79f7db6e1c0032dd2f34f451e802746602a9f68d5bf90ab61ff7f253463ed0b2ebb9567ffd336f8020fdcf94ec6877764696aeb045fd26713d47c88cc85e032edc3be3d33ea8d03392aed39a49607f4f5bddbb2e96ed2db24fff3090ad8b6595ceb1c4b90faea82d526808aaf8a3b6725c4772a581ab01a639a9b9e4d67b7c1d9a649ddd538e8ebe1868d4052bf11546f4981d9278767a655a43ec18a7edb7bf8d2ce102b522876ffa88b2441b7121fe6b8431a0be9f83e750e14e96bb51e9ded97bb6225c3bb28849f6c398420dc3992942571d15348c8209bdf4adc73c57e1440c9b9352a2214348aa34637ee035e40e2231523245e53da2cd1be34aa716e4e71603a7704b9685706fe03c732294b4bee8c9f984fa1c1d5bd97ee517c87aa0070c854ce8ce4c8479fee56397605402d80d513174f649683813af77a287a74333f383b0c68d26cc94ac6d79e1860bd6b8a1ad8e906c6bf237be211b62d84fb010dd207033f626ad3858a24866521e755e9592eb72f93f4f9b62a258c6e33a385bcf7314873915f0f53900cea7015050c82194fa1820aaf04487eb42e5cd01a54c98bfb81c97cb63ecf95180eabdc8195f071793692d10cd87ed06bc0791a786a457250830c9536d3ee85110622bc30e64a5712516f7978a58912727e815dff5ef6d30b3b0a5df5b7db28f9e0b341bcc3c6ae8b0d80e1665c7849696c1726284113fa143b9b2706bcbbea60ab00707ca8237f0460b3bcbacb8718ac3917693d0c2db899532bacf68699dcb3e8a24ec6b262845fab97bd6eb5dea6ba6abc6c63919f1e12bf55800643d200d2efc1eaca4aa117bca3d570de4287f42ace31bf77c5219a810da293f1e56b0137f1edb864063e2b451e16293a351bc394503d38b82cb07008590e116d99c9fa3b0ce51c3fcd614c8cfa2f4498f6e779c6b59cacf980bd091a00c7bc38121e2000240b19d5dac2934fdd4f3ef0955285b284d1d4fc9aaa8ae3d1d14b29831c911816d6b2da5d697b368f53b230425fd8a5670117062cd5a90ee5b6ed2be4fd8ea50d649613b128966823c6f2f21b00624279d6905cb60f1bc53d5a2a6537de7fa04ecc301c64b77e8065af3b0e87b098db295c04d8f9d77fa938b675bddd7cae640b9cd454d1874cab2dd8b5f7e45c56903653c870b182dbc86441cc1a54509a8f6c4c79509a7ddfba6035cbf592d5d76b505ca5a5ac97b5180c5843e4e236c57e6ed2991513fa84fabf37aabdb6f8107919d367969987252b50649af38246176f4e65eaa441937ed9801aac1933462b3c4445403cb056d336d344f4adfb52c7fe8392dd7135f31c5b63815a904467c8e05e2f0275755e57862e5750dac1f203b3adeb95d3c76c0180c95c8313460942f9d70b55a474f535072d4ff19c1bb06673e044e1f3ecca2d77624ca7774aa93f65dcc3ca2c8d2a99201c7d8e7f29a2018a4638f64788af82adc88c95a9c506af886969e825dc258607a01183d676b5c73f647fb73b1da07a45f78189542308033cf7aefae6176dc90a80b58f3831171273d69d5aea7de33c0285afc8f2280d22243ab7ef90968c988c9d8b36dabd884ad4dafd423fd9b3d92a8a910dbf587df636d47db05f151392d23e538db3249d2b73b5e979e93881be9e4ccf1d2c78a1b8add0d0222cc450758ec4e98b43feab15ff65bee0d6794fb65ced2a0cff4c7f76236e00c90ca0f5b051721d2bef170ad4c6c86e0bd6950c8988d3b62c3b1c76bd1f221f269b016672e5d5cc39bb63867c68014ca44b3e4446bb8081cbbb343773b121655bd528443e155159cbac427fba5d6ae5d92b18a913d23929e2e8768df59457359aac7dfa5f7ede8d9cf91e5beeb51364227e811a8948b0af502d0c92cf3e0861633d7cf005c4950ea3ab210d54bb1be96424d9901ce549ca5919ef2a99d058744d38b1c0fae03cf7ef861e23b7ada4a9befad2e9c706f9cae6a86d23a606a26941e646cebc577f1921993ac2fa84aa03542091dbedf891828dd9b9174d9654f637b9cbfb0850b1ffa43ed7fd75497ceae3c44f2693e65e53303bae6b4b36bc59b24217866b3713a8233c947c556818a3677eb9db845bb40325a9b2aca8575d316ceea0b5b12dca3571bc6b371f15d74f4852ca05f8cc158de71009c807a4669997207d37547de1eac5b2554063942e4a5eae0e0984f2b3249d38cdfc462603426ad828e120bf1e6b266b54b48ca6d606fce79e63c4db69090bf66942f91086f954282616283b4fd58feeac43ef4489cf193a2a6ff137c0e3451405ec68a47a64dfb20bdb30f4101721bac22f4c28d05341d757354a4f3ab32bf66b513f66b8fdd1c62c96a260abf2d11bde11b91362a0f9b1096e4a0ea9cbe671bb9da6b7da74e859ab30906325cf8611429544eb02b979db2d58038d9a5f147e026dfd01a2a980ba06317a6aea90b92296b38ce0d9dfc5aa4efba343445e9806fd93d56393e7d2d4f3b524ce1cd353c7f3f474ceeaf7f8661d2b9338ad6d98db5e337984157b9f3457ce025f9309795413e5550cb67d8e0e49dedcfe6dc2b4f54f6aab8913179244c171acf07fac05710a858bbf8bb96826be9dc316ca3cb0aec714ef65faceb0e3975cba131e6853e95efab470717cafb20d53f89d96b3f5c6d9cfa6a128923eb7a5faa58211525135ada7976ba77695d95e0b298136d6b41936bf92d0c77f593e3e6583f261964ca8af729bd881a7a4e36afab28e34e9981cbe492432308eca90d901bd9fccca9ad7d33bd449ed96f8b421a534c5756a16020d496ea234f7a85adf56578b49eeb615457f635efd92d508fe548d867f3b4c413650da4c6e342f726086b3519399aef71cd6e241e31104e8fecca06be37d74a939a6656f37964321a91dd153b05560833266fe32e6eb4fc4dff7a966fb1f0212bb2478937dcd0a7e18f7c248c27a4ccef8e0bb21ff472cce41c3bea6db730f7fd01366dd5a8806a51d5d022fb8a5e202c82e2f2c2ba471b787c252baaa4c5791b645ae219df5576792ffecdfaf564d2a11f695680ddc4775025294f953b635802a68e4b65b2647e44f4c40d3fe80e4c565e2547b88bd3859cbad48736648ae36d57ce3486aaa9decda29c58a26eee856e0f35b4791e057f0b38c0c93ef44313e7e0dec982c35836d43835ce3dc5fb962258e622500f9a9c7dd1e442cfffc6cec9e75fb61d6ecd1269d3792a2502f22f59286bfabee8f3b2076b4efb19d6d5399704255d8b82ca5c0d3cf9fe9d2b908499ffb9490b299c47de4b7382e47191ef78a3c7dad0583be0ae3812feb4aa4b3cb81f67657e87bd10ff107417843cd749d07a5bf27234847b5f12681288ac04f2b5aea241e82ffc9edfcd6edf1120b43b678aad9c3d65e5b5dd5e613be146d93219d0885b18f23a8f5ce460a1178e54b9a4fe3c2493fdae9dd09c2422f0ed0ce542ff8cf7944a59bbc7badd251fbdc8a1bb1f4eeeb43ae36f53766900ec6fd8be7e85ea1020e9da0e523ba1b24d634885f33f313df00651b87c092c8a7757f478aa54bdac7f7a1567b5555f925f6f7f9c383995bc92d31bb8cd15efec7d0c5aea932ce60fd739ae2be4a7faab6759d6d87902b02203e66e23655b39971d4b9a123f7e51339359cd5f394e726df4ef186b28aa17206f9b98c7983d85c1047f6b6cadc225a68bfe3c3b7a26d0eee23dc67114887bfad4894ae2c621a34b52fe89f92a9d6ef67a152f261f75fd84ea682d0eed7602ad4edd358d5b7295c26145827c3faf001ae698a22442bb4c8476272181d343e172cac71b2f2da981d5e0efae1984e70e548576a44e5d35d146df3bac50defa85097e271bfe156c10c1b7e0d95a488d9c606a917b25acf50d5aec207bf8cc9864ee1f9abd7623d624349076277e445b0141abd0586b84de7b34958a6cdd1ee1cf3de622b3b6568a5daf3cad698ba287a5109a611fc277cf689ef07e66778d4976abed333862223e9eaea13968b32500b08e7bc58210e0e864c46d633e0be45225804836950dc84751118a29548d8e9652e852cb4ff9ed7591243290d5648c701befe65eb0d649259e477d15a54a1d8c5508e006e69027c8eb63f2c92e60cac23db949eb66e043c6a0595bca50f787484d9b451020531fb295124573e33515719102d8e8ec5613fa22007ba6670dad10aaad526cd4ef1589ec3e42342f92a6cbdc3ccbbe080da3b8d4bc6fb173936e80983db1c5de60956cbd596e31f96f3e9fdb019e3f7bce2cf4d3dcc34c5d05d66aee4bd911ea062704ba9168bf5813bd99b1afff9a16025996f0d5269ceb7128a184d2762de3c467280055092d0dd83a343a561d906171aa0fedc9df5d974bdf82ea29c87ccdbcded167f71a3ce6ee17b65e122432e19ca6294f8a778b42113c1c5d0ea61805d355784a0bc1ffcc89768ba9d7eb09dd6189f5c23cce95054864ef5b55f68b167339a66892059a58ba641a89e18b61e9fa8c69d7c11483207b92962c439d9c367f3b215192cbb724746ac174194b4e207ea141838fa972948a34afb721174b4b1c671c10a6b48a9a526ebc9ef46c701f82ddafe19356cdd4bc2e2b5b75ca098438cd0e8cb2d7c454baea80b52d72db53408be0be110b3c2717ff81a7cc39975a4d9123f01785c7c108bfa229faf847bb9f39209a2cb826ecbca111c84bc2c1de02936b85f56aa0a0cd0e2b6df88f2591c4bb7d26c58ac5c5efb12fd6353f00fe93c5873fdbdd1906ae467e3b934f8d2f3ff0c4918ab6d34eda111ececb242734dc98c3069505aff6192a718ab75f479b468df0cb9c7828e3b8ca91b1daa1d1a8f2a2ca70528e5b94dc1967f78234b017959ce5dec2afa6ba2dd8973c2e7e7bf2f86e5dd09d5c9a9f1de1026caeecb1afc2c8bf9eeecf3b3645649b8ffe76b7b4bfb7893c991a2594b2ca3543cbc5299e6e3463f80cea925a885c224db97ee15c309171716cf5bd404e4b5b5cf1e36cc6922761cbd2324a234ca167603a5b56c985962eb27d5d977a6a0739118fdfe4b88795454b42ff3065662308797a509ccb93a6e6a8d0d791faa2b4e82edc35be74a22b6c5b2a3c22024193c76602d32e3be64ac52963beb89334f68f35e215b285904f2cff8f203f22fce56fb9e1fa5f7c3fd6dbb894c8f707e5ffb7b2e0e1b5bafc4c17576758f280a88fd8e179c6c5e26f9036c8537d5c3719f142d9425d288a05f8789cda2cbbd11fb531af01c0d184f1f466c88efd1fd056a10cceac58a7d4f0aa8b0753866cbb940e55afc08fcaf454201f2991dfef4df679577e54629acc40f128dff91a4f2075501bb67c9996d701a4a6a20566273b2dede438f87d0ab37e327ef130f565fde69bf10aee493a7a50211dfe4f6510a99fceb57d57b963f147835a046cc93c0a0fbb49b3ec493142aac51b16abad09aa8c19995430646fd550b302230ba5d440aebb4e43345beddc78dd301a8b86dec41bc178fcf86d52fef784a7b62170fb6d609d8a58ee297dd298c59b0c6260702e2b9e8077f8c94617e3cd609f933ca6ca7e3de804978a972c660216ca416581e3e6f51022a148e202ef372f406da05f399e14aa23c4ecc3b34483542aeea5ad0e92c98c3cdd7f0a5a3e579313d4ebed4bf5f26e5249407fb178a0a022ab29acecab6a2769d5eea73e50ef2acbf4526628e746f4ca00af77501489fbefa85317a8265090f774e50d4e82f5757c1f4f88a793cebe630a84519f9fadae2f1b908dca869853e7e7793c80657cf12f6468cadb16e4c858bbdf9b2d609674e49611b9f8ab9fb292210a6924f9c538de3bc912f85474771b5e32d4c1b9565d628588a32396c77888116ef300aa222f57aee78f2865ff9139f022fc0883c008ded8d40ef723fcad4134db1a3f7ae0438ec87fcfef8a0c4ec725328f35dad1f9d0f66daa38b85d68d976d94068fd67282f959ed80a93cb96c57802896a08c96ba3f82baa11e3fea98d236c828924fa10544a448475fd7216ec11ed3d019a92a7fa3b3339dfae981f0edb80f2f1c38b35d97f092b54d821f0df9e05bdf8f98396e7fa9ec83d38617fa84224c7f6ffe4dc36778817ebdc1b505774020aba67fca50f9cd40c5b84c0d2c5e5cb14fc890f477ca77d25e0873bb028d960fe85c8f2baa34d75cf25c814572f5dae298284fc5feae825413a7ae021d6b229e7bc7bfb09576d9f233fa6fdfbebc0276321752c75a0600e96cc957d3a1e2759863374847021078b9e6eaabbcdcda6cd8590e31ef7bc90dca8e07cf7c8f3ee56d6cd1021088e2a8db612ff9959cd3142a620817012671a4eca02682d1e4a66432e36e13b257e3449bc59839f76fd486474aca418547606afa5d8e51f60c2f5ae62509a550ca279f50d476cb683c5344038a59ff7bb0b242a0a839d832a8f4b09f5fc6360b1b78bd47bf8c03cf5e14d11d24a10019ee94e463d925fb4de6f68e29d0cf79b740787bed4580b5cb959a071bb8351cd8c4f1a0f9ebe8d298de13bdc7aa5841bddef3b650c49f56368482d9da185fc2b52d4fe439275fe48e43d4c70704a8b3205e40025315db3acfce8b9a133caf19a558d5136174f2ee6c73e79f6f0479e1d356027de54b29c43ce4a56a81c872aff07c598bc892ea0c7da5e7d9dbb159bb35184246e1e2f6ca53c06c8baf85f9abbdc8dc49fa80b4057425638ebd192539ab22ce23df73548cb2f9c28c80e0a0d0c1c6f3fff29759227c15794903db3eb5d9c305c193e32d8c2acb6f31565627883e8b366ce263ede8ca108801d0c706e31bf3c93a285c000b7d056588e1eb6a2b3c67119d9cbe077cb7dc16989aa5622202d49809f91a2a9ffe07e0669dff528a67d8d2b48fbd1a8bffbd33e0ff39d2ab14abf5e5fae4b179708cbe33896523549884752e4ce79bf12a7b8026f9538e91704816fda52f3c0effbfa58830494d6d6834dd552ddd52f3163ce05262f62838ead26269ecf8ed3a4657590cbd70ab8ecf5c7f4513a5e41c0fa048ca1cedf269d794d0c6ae739026222c3d0fa285b937e9cdd27811cd6f8392b8e09635c0b873e93c26366129a4f20a3ee184bc9e8715f6df8e4d2cda3d145ffe823b73bedbd53ad2920c1da610a3d75c896187aa4386f4c6442f8796a74734c12bcf5184e9e508e1569358a89338065b649bb19225bdde15c2c3ab0f85d0846f61fe522c19f1e155292bb066cbd105f7cce3abe35d4226a5695cdbc53c9c4c996ea5ed7a1472fcf64ffcbc785d63c139819f987c8169eb0cb94b1b48ddfd8969bb4b8e368ae535a90a86f95edab69fe0110b5a95b3012350787e5d272a955f9d5508c19fde92dbfc60bebfc78cab6deff37cb2b70b6398c870cad54b317ada3d651e92516ab2223074d46528d769d8fb4e3952b8179872525f210e4ef6a3bcc6fa5f092be49e999a0fd682701eb78b8e45df9d016cc45905168871",
        $h = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    ! function (t) {
        function i(t, i) {
            for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5),
                h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
                r = Math.round(i.length / 2),
                a = Math.pow(2, 31) - 1,
                o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (h * n + r) % a;
            for (var f = "", _ = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), _ += String.fromCharCode(f), n = (h * n + r) % a;
            return _
        }
        t = i(t, "QUNEE"), $h = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }(Bh);
    var Fh = $h[0] + $h[1] + $h[2],
        Gh = $h[3],
        zh = $h[4],
        qh = $h[5] + $h[1] + $h[2],
        Yh = $h[6],
        Hh = $h[7],
        Uh = $h[8],
        Wh = $h[9],
        Xh = $h[10],
        Vh = $h[11],
        Zh = $h[12],
        Kh = $h[13],
        Jh = $h[14] + $h[15] + $h[16],
        Qh = $h[17] + $h[18] + $h[19] + $h[20] + $h[21],
        tr = $h[22] + $h[23] + $h[24],
        ir = $h[22] + $h[25] + $h[26],
        nr = $h[22],
        er = $h[27],
        sr = $h[28],
        hr = $h[29],
        rr = $h[30],
        ar = $h[31],
        or = $h[32],
        fr = $h[33] + $h[18] + $h[34],
        _r = $h[35] + $h[36] + $h[37],
        cr = $h[38],
        ur = $h[39] + $h[40] + $h[41],
        dr = $h[42] + $h[43] + $h[44],
        lr = $h[45],
        br = $h[46],
        vr = $h[47],
        gr = $h[48],
        yr = $h[49],
        pr = $h[50],
        xr = $h[51] + $h[20] + $h[52],
        mr = $h[53],
        Er = $h[54],
        wr = $h[55] + $h[40] + $h[56],
        Tr = $h[57],
        kr = $h[0],
        Mr = $h[58],
        Sr = $h[59] + $h[60] + $h[61],
        Ir = $h[62] + $h[60] + $h[61],
        Or = $h[63] + $h[64] + $h[65],
        Ar = $h[62] + $h[66] + $h[67],
        Cr = $h[68] + $h[69],
        Pr = $h[70],
        Lr = $h[71],
        Rr = $h[72],
        Dr = $h[73],
        Nr = $h[74],
        jr = $h[75],
        Br = $h[55] + $h[40] + $h[76],
        $r = $h[77],
        Fr = $h[78],
        Gr = $h[79],
        zr = $h[80],
        qr = $h[81],
        Yr = $h[82] + $h[83],
        Hr = $h[84],
        Ur = $h[85],
        Wr = $h[86],
        Xr = $h[87],
        Vr = $h[88],
        Zr = $h[89] + $h[40] + $h[90],
        Kr = $h[62] + $h[1] + $h[91] + $h[18] + $h[92],
        Jr = $h[62] + $h[1] + $h[91] + $h[93] + $h[94],
        Qr = $h[95],
        ta = $h[96] + $h[97],
        ia = $h[51] + $h[98] + $h[99] + $h[1] + $h[100],
        na = $h[97],
        ea = $h[51] + $h[25] + $h[101] + $h[1] + $h[100],
        sa = $h[97] + $h[96] + $h[97],
        ha = $h[102],
        ra = $h[103],
        aa = $h[104],
        oa = $h[105],
        fa = $h[106] + $h[93] + $h[107],
        _a = $h[108],
        ca = $h[109],
        ua = $h[110] + $h[111] + $h[112],
        da = $h[113] + $h[114],
        la = $h[115] + $h[116] + $h[117],
        ba = $h[115] + $h[114],
        va = $h[115] + $h[118] + $h[117],
        ga = $h[115] + $h[119],
        ya = $h[120],
        pa = $h[121],
        xa = $h[0] + $h[36] + $h[122],
        ma = $h[0] + $h[123],
        Ea = $h[124],
        wa = $h[125],
        Ta = $h[126] + $h[75] + $h[127] + $h[75] + $h[128] + $h[75] + $h[129],
        ka = $h[113] + $h[119],
        Ma = $h[130] + $h[66] + $h[131],
        Sa = $h[132],
        Ia = $h[133],
        Oa = $h[134],
        Aa = $h[135],
        Ca = $h[136] + $h[75] + $h[137] + $h[75] + $h[128],
        Pa = $h[138],
        La = $h[139],
        Ra = $h[140],
        Da = $h[141],
        Na = $h[142],
        ja = $h[62],
        Ba = $h[143],
        $a = $h[144] + $h[114],
        Fa = $h[144] + $h[119],
        Ga = $h[145],
        za = $h[146] + $h[147] + $h[148],
        qa = $h[149] + $h[147] + $h[148],
        Ya = $h[150],
        Ha = $h[151] + $h[152] + $h[27] + $h[153] + $h[27] + $h[154] + $h[77],
        Ua = $h[155] + $h[111] + $h[156],
        Wa = $h[151] + $h[157] + $h[27] + $h[153] + $h[27] + $h[154] + $h[77],
        Xa = $h[158],
        Va = $h[159] + $h[130] + $h[160],
        Za = $h[161],
        Ka = $h[162],
        Ja = $h[163] + $h[66] + $h[164],
        Qa = $h[165],
        to = $h[151] + $h[166] + $h[27] + $h[154],
        io = $h[167],
        no = $h[168],
        eo = $h[169],
        so = $h[28] + $h[40] + $h[170],
        ho = $h[171],
        ro = $h[172],
        ao = $h[173],
        oo = $h[174] + $h[43] + $h[175] + $h[66] + $h[176] + $h[40] + $h[177] + $h[93] + $h[178],
        fo = $h[96] + $h[43] + $h[175] + $h[66] + $h[176] + $h[40] + $h[177] + $h[93] + $h[178],
        _o = $h[179] + $h[43] + $h[175] + $h[66] + $h[176] + $h[40] + $h[177] + $h[93] + $h[178],
        co = $h[180] + $h[66] + $h[176] + $h[40] + $h[177] + $h[93] + $h[178],
        uo = $h[181] + $h[60] + $h[182],
        lo = $h[83] + $h[183],
        bo = $h[58] + $h[66] + $h[184],
        vo = $h[185],
        go = $h[186],
        yo = $h[187] + $h[75] + $h[188],
        po = $h[189],
        xo = $h[190],
        mo = $h[191],
        Eo = $h[192],
        wo = $h[0] + $h[43] + $h[193],
        To = $h[194] + $h[40] + $h[170],
        ko = $h[195],
        Mo = $h[58] + $h[111] + $h[196],
        So = $h[33] + $h[40] + $h[170] + $h[197] + $h[198] + $h[66] + $h[199],
        Io = $h[200],
        Oo = $h[0] + $h[197] + $h[201] + $h[36] + $h[122],
        Ao = $h[202],
        Co = $h[203] + $h[204] + $h[205],
        Po = $h[33] + $h[40] + $h[170] + $h[197] + $h[198] + $h[40] + $h[206],
        Lo = $h[207],
        Ro = $h[208] + $h[40] + $h[170],
        Do = $h[209],
        No = $h[210],
        jo = $h[75] + $h[179] + $h[211] + $h[212] + $h[40] + $h[170],
        Bo = $h[208] + $h[197] + $h[213] + $h[15] + $h[16],
        $o = $h[214],
        Fo = $h[215],
        Go = $h[216] + $h[75] + $h[217],
        zo = $h[218],
        qo = $h[0] + $h[1] + $h[219],
        Yo = $h[132] + $h[220] + $h[221],
        Ho = $h[222] + $h[77] + $h[223],
        Uo = $h[224],
        Wo = $h[225],
        Xo = $h[226],
        Vo = $h[214] + $h[27] + $h[227] + $h[27] + $h[154] + $h[228],
        Zo = $h[0] + $h[25] + $h[229],
        Ko = $h[154],
        Jo = $h[69],
        Qo = $h[230] + $h[75] + $h[231],
        tf = $h[230] + $h[75] + $h[231] + $h[75] + $h[232],
        nf = $h[230] + $h[75] + $h[231] + $h[75] + $h[233],
        ef = $h[230] + $h[75] + $h[231] + $h[75] + $h[234] + $h[75] + $h[235],
        sf = $h[230] + $h[75] + $h[231] + $h[75] + $h[236] + $h[75] + $h[235],
        hf = $h[230] + $h[75] + $h[231] + $h[75] + $h[237],
        rf = $h[230] + $h[75] + $h[231] + $h[75] + $h[238],
        af = $h[239] + $h[27] + $h[154] + $h[240],
        of = $h[241],
        ff = $h[230] + $h[75] + $h[231] + $h[75] + $h[242],
        _f = $h[243] + $h[197] + $h[201] + $h[36] + $h[122],
        cf = $h[244],
        uf = $h[245] + $h[93] + $h[246],
        df = $h[247] + $h[40] + $h[206],
        lf = $h[248],
        bf = $h[57] + $h[210],
        vf = $h[57] + $h[249] + $h[114],
        gf = $h[57] + $h[249] + $h[119],
        yf = $h[250] + $h[251] + $h[93] + $h[252],
        pf = $h[57] + $h[253],
        xf = $h[57] + $h[254] + $h[66] + $h[184],
        mf = $h[57] + $h[254] + $h[18] + $h[255] + $h[40] + $h[170],
        Ef = $h[57] + $h[224],
        wf = $h[256],
        Tf = $h[57] + $h[257],
        kf = $h[258] + $h[40] + $h[259],
        Mf = $h[57] + $h[260] + $h[204] + $h[205],
        Sf = $h[57] + $h[261] + $h[43] + $h[262] + $h[18] + $h[255] + $h[40] + $h[170],
        If = $h[263] + $h[264] + $h[265],
        Of = $h[266],
        Af = $h[267] + $h[264] + $h[265],
        Cf = $h[57] + $h[257] + $h[93] + $h[268],
        Pf = $h[57] + $h[260] + $h[114],
        Lf = $h[57] + $h[260] + $h[119],
        Rf = $h[57] + $h[202],
        Df = $h[33] + $h[60] + $h[269],
        Nf = $h[57] + $h[254] + $h[93] + $h[252],
        jf = $h[203] + $h[36] + $h[270],
        Bf = $h[0] + $h[25] + $h[271] + $h[36] + $h[270],
        $f = $h[58] + $h[25] + $h[271] + $h[36] + $h[270],
        Ff = $h[272] + $h[36] + $h[270],
        Gf = $h[174] + $h[25] + $h[271] + $h[36] + $h[270],
        zf = $h[203] + $h[36] + $h[270] + $h[15] + $h[117],
        qf = $h[272] + $h[36] + $h[270] + $h[15] + $h[117],
        Yf = $h[174] + $h[25] + $h[271] + $h[36] + $h[270] + $h[15] + $h[117],
        Hf = $h[273] + $h[264] + $h[274],
        Uf = $h[273] + $h[197] + $h[213],
        Wf = $h[275] + $h[111] + $h[276],
        Xf = $h[277] + $h[220] + $h[278],
        Vf = $h[279] + $h[20] + $h[280],
        Zf = $h[279],
        Kf = $h[281],
        Jf = $h[121] + $h[40] + $h[282],
        Qf = $h[283],
        t_ = $h[284] + $h[220] + $h[276] + $h[111] + $h[285],
        i_ = $h[286],
        n_ = $h[287],
        e_ = $h[288],
        s_ = $h[289],
        h_ = $h[290] + $h[60] + $h[291],
        r_ = $h[292] + $h[1] + $h[221] + $h[18] + $h[293],
        a_ = $h[292] + $h[18] + $h[293],
        o_ = $h[294],
        f_ = $h[295] + $h[1] + $h[296] + $h[1] + $h[221],
        __ = $h[297] + $h[98],
        c_ = $h[298],
        u_ = $h[299],
        d_ = $h[300],
        l_ = $h[301],
        b_ = $h[293],
        v_ = $h[302],
        g_ = $h[303] + $h[77] + $h[303] + $h[77] + $h[304],
        y_ = $h[83],
        p_ = $h[211],
        x_ = $h[305],
        m_ = $h[0] + $h[60] + $h[306] + $h[43] + $h[307],
        E_ = $h[51] + $h[18] + $h[308],
        w_ = $h[295] + $h[18] + $h[308],
        T_ = $h[33] + $h[25] + $h[309],
        k_ = $h[33] + $h[36] + $h[310] + $h[15] + $h[16],
        M_ = $h[5] + $h[20] + $h[311],
        S_ = $h[312],
        I_ = $h[6] + $h[1] + $h[313],
        O_ = $h[314],
        A_ = $h[33] + $h[197] + $h[315],
        C_ = $h[57] + $h[51],
        P_ = $h[290] + $h[60] + $h[291] + $h[60] + $h[306],
        L_ = $h[57] + $h[295],
        R_ = $h[290] + $h[60] + $h[291] + $h[1] + $h[91],
        D_ = $h[316] + $h[111] + $h[179],
        N_ = $h[203] + $h[111] + $h[179],
        j_ = $h[317] + $h[111] + $h[179],
        B_ = $h[318],
        $_ = $h[319] + $h[111] + $h[179],
        F_ = $h[320] + $h[75] + $h[321],
        G_ = $h[322],
        z_ = $h[320] + $h[75] + $h[323],
        q_ = $h[320] + $h[75] + $h[324],
        Y_ = $h[320] + $h[75] + $h[325],
        H_ = $h[320] + $h[75] + $h[326],
        U_ = $h[320] + $h[75] + $h[327],
        W_ = $h[320] + $h[75] + $h[328],
        X_ = $h[320] + $h[75] + $h[329],
        V_ = $h[320] + $h[75] + $h[330],
        Z_ = $h[320] + $h[75] + $h[331],
        K_ = $h[320] + $h[75] + $h[332] + $h[75] + $h[333],
        J_ = $h[320] + $h[75] + $h[332] + $h[75] + $h[304],
        Q_ = $h[320] + $h[75] + $h[332] + $h[75] + $h[211],
        tc = $h[320] + $h[75] + $h[332] + $h[75] + $h[334],
        ic = $h[320] + $h[75] + $h[332] + $h[75] + $h[335],
        nc = $h[320] + $h[75] + $h[332] + $h[75] + $h[336],
        ec = $h[337] + $h[25] + $h[338],
        sc = $h[339],
        hc = $h[57] + $h[227],
        rc = $h[192] + $h[20] + $h[340],
        ac = $h[57] + $h[254],
        oc = $h[0] + $h[40] + $h[56],
        fc = $h[341] + $h[40] + $h[56],
        _c = $h[342],
        cc = $h[343] + $h[75] + $h[344] + $h[75] + $h[345],
        uc = $h[343] + $h[75] + $h[344] + $h[75] + $h[346],
        dc = $h[343] + $h[75] + $h[344] + $h[75] + $h[347],
        lc = $h[348],
        bc = $h[349] + $h[43] + $h[193],
        vc = $h[245],
        gc = $h[350],
        yc = $h[351] + $h[75] + $h[344] + $h[75] + $h[352] + $h[75] + $h[353],
        pc = $h[351] + $h[75] + $h[344] + $h[75] + $h[354] + $h[75] + $h[353],
        xc = $h[351] + $h[75] + $h[344] + $h[75] + $h[353] + $h[75] + $h[355],
        mc = $h[351] + $h[75] + $h[344] + $h[75] + $h[356] + $h[75] + $h[357],
        Ec = $h[351] + $h[75] + $h[344] + $h[75] + $h[352] + $h[75] + $h[355],
        wc = $h[351] + $h[75] + $h[344] + $h[75] + $h[354] + $h[75] + $h[355],
        Tc = $h[351] + $h[75] + $h[344] + $h[75] + $h[355] + $h[75] + $h[353],
        kc = $h[351] + $h[75] + $h[344] + $h[75] + $h[356] + $h[75] + $h[358],
        Mc = $h[0] + $h[66] + $h[359],
        Sc = $h[351] + $h[75] + $h[360] + $h[75] + $h[361] + $h[75] + $h[362],
        Ic = $h[351] + $h[75] + $h[344] + $h[75] + $h[352],
        Oc = $h[351] + $h[75] + $h[344] + $h[75] + $h[356] + $h[75] + $h[363],
        Ac = $h[351] + $h[75] + $h[344] + $h[75] + $h[356] + $h[75] + $h[364],
        Cc = $h[351] + $h[75] + $h[360] + $h[75] + $h[362],
        Pc = $h[351] + $h[75] + $h[360] + $h[75] + $h[365],
        Lc = $h[366] + $h[75] + $h[367],
        Rc = $h[368] + $h[75] + $h[367],
        Dc = $h[351] + $h[75] + $h[369] + $h[75] + $h[370],
        Nc = $h[351] + $h[75] + $h[369] + $h[75] + $h[371],
        jc = $h[351] + $h[75] + $h[372] + $h[75] + $h[373],
        Bc = $h[374],
        $c = $h[351] + $h[75] + $h[344] + $h[75] + $h[354],
        Fc = $h[0] + $h[66] + $h[375],
        Gc = $h[5] + $h[40] + $h[206] + $h[66] + $h[376],
        zc = $h[214] + $h[25] + $h[309] + $h[60] + $h[306],
        qc = $h[214] + $h[60] + $h[306],
        Yc = $h[377],
        Hc = $h[378] + $h[43] + $h[193],
        Uc = $h[379],
        Wc = $h[380],
        Xc = $h[51] + $h[18] + $h[293] + $h[60] + $h[306],
        Vc = $h[381] + $h[40] + $h[170],
        Zc = $h[382],
        Kc = $h[383] + $h[111] + $h[384],
        Jc = $h[385] + $h[75] + $h[351] + $h[75] + $h[386] + $h[75] + $h[387],
        Qc = $h[339] + $h[111] + $h[285],
        tu = $h[351] + $h[75] + $h[388] + $h[75] + $h[389],
        iu = $h[390] + $h[114],
        nu = $h[390] + $h[119],
        eu = $h[391],
        su = $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[23] + $h[394] + $h[97] + $h[43] + $h[395],
        hu = $h[396],
        ru = $h[397],
        au = $h[398],
        ou = $h[210] + $h[69] + $h[399] + $h[400] + $h[71],
        fu = $h[401] + $h[1] + $h[91],
        _u = $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[23] + $h[394],
        cu = $h[68] + $h[69] + $h[303] + $h[402] + $h[303] + $h[402] + $h[303] + $h[402] + $h[303] + $h[71],
        uu = $h[403],
        du = $h[404],
        lu = $h[405],
        bu = $h[406] + $h[407],
        vu = $h[408] + $h[75] + $h[216] + $h[75] + $h[363],
        gu = $h[303] + $h[172],
        yu = $h[408] + $h[75] + $h[216] + $h[75] + $h[357],
        pu = $h[409],
        xu = $h[410],
        mu = $h[113] + $h[204] + $h[205],
        Eu = $h[113] + $h[411] + $h[412],
        wu = $h[413],
        Tu = $h[414] + $h[220] + $h[415],
        ku = $h[377] + $h[220] + $h[415],
        Mu = $h[33] + $h[66] + $h[416],
        Su = $h[417] + $h[111] + $h[179] + $h[25] + $h[418],
        Iu = $h[419] + $h[197] + $h[198],
        Ou = $h[51] + $h[36] + $h[122] + $h[420],
        Au = $h[227] + $h[421] + $h[422],
        Cu = $h[121] + $h[1] + $h[423],
        Pu = $h[424],
        Lu = $h[63] + $h[1] + $h[425],
        Ru = $h[63],
        Du = $h[0] + $h[43] + $h[426] + $h[1] + $h[427] + $h[93] + $h[246],
        Nu = $h[249] + $h[204] + $h[205],
        ju = $h[249] + $h[411] + $h[412],
        Bu = $h[186] + $h[66] + $h[184],
        $u = $h[186] + $h[20] + $h[428],
        Fu = $h[429],
        Gu = $h[430] + $h[111] + $h[156],
        zu = $h[414] + $h[66] + $h[431],
        qu = $h[414] + $h[60] + $h[432],
        Yu = $h[433],
        Hu = $h[414],
        Uu = $h[181] + $h[93] + $h[434],
        Wu = $h[435],
        Xu = $h[436],
        Vu = $h[437] + $h[114],
        Zu = $h[438] + $h[66] + $h[184],
        Ku = $h[439] + $h[97] + $h[440],
        Ju = $h[93] + $h[246],
        Qu = $h[441],
        td = $h[442],
        id = $h[443] + $h[220] + $h[221],
        nd = $h[444] + $h[75] + $h[231] + $h[75] + $h[445],
        ed = $h[401] + $h[23] + $h[221] + $h[197] + $h[446],
        sd = $h[401] + $h[60] + $h[306] + $h[197] + $h[446],
        hd = $h[443] + $h[220] + $h[447] + $h[23] + $h[448],
        rd = $h[449] + $h[23] + $h[221],
        ad = $h[290] + $h[60] + $h[291] + $h[15] + $h[450] + $h[60] + $h[306],
        od = $h[451],
        fd = $h[452] + $h[18] + $h[308],
        _d = $h[453],
        cd = $h[174] + $h[93] + $h[454] + $h[18] + $h[19] + $h[20] + $h[21],
        ud = $h[272] + $h[93] + $h[454] + $h[18] + $h[19] + $h[20] + $h[21],
        dd = $h[58] + $h[111] + $h[455],
        ld = $h[42] + $h[18] + $h[19] + $h[20] + $h[21],
        bd = $h[272] + $h[1] + $h[456] + $h[18] + $h[19] + $h[20] + $h[21],
        vd = $h[179] + $h[1] + $h[456] + $h[18] + $h[19] + $h[20] + $h[21],
        gd = $h[96] + $h[1] + $h[456] + $h[18] + $h[19] + $h[20] + $h[21],
        yd = $h[245] + $h[111] + $h[455],
        pd = $h[72] + $h[457],
        xd = $h[458],
        md = $h[185] + $h[75] + $h[347],
        Ed = $h[185] + $h[75] + $h[459],
        wd = $h[172] + $h[27],
        Td = $h[185] + $h[75] + $h[460],
        kd = $h[461] + $h[69],
        Md = $h[70] + $h[303] + $h[70] + $h[303] + $h[70],
        Sd = $h[0] + $h[43] + $h[262] + $h[197] + $h[213],
        Id = $h[151] + $h[462] + $h[27] + $h[463],
        Od = $h[0] + $h[43] + $h[262] + $h[197] + $h[183],
        Ad = $h[382] + $h[43] + $h[262] + $h[197] + $h[183],
        Cd = $h[11] + $h[43] + $h[262] + $h[197] + $h[183],
        Pd = $h[51] + $h[36] + $h[464],
        Ld = $h[381] + $h[60] + $h[182] + $h[1] + $h[91],
        Rd = $h[465] + $h[111] + $h[285],
        Dd = $h[466] + $h[23] + $h[24],
        Nd = $h[467] + $h[66] + $h[468],
        jd = $h[467] + $h[60] + $h[182] + $h[66] + $h[468],
        Bd = $h[40] + $h[170] + $h[69],
        $d = $h[402],
        Fd = $h[469],
        Gd = $h[23] + $h[470] + $h[23],
        zd = $h[66] + $h[184] + $h[69],
        qd = $h[194] + $h[93] + $h[246],
        Yd = $h[28] + $h[93] + $h[246],
        Hd = $h[471] + $h[75] + $h[365],
        Ud = $h[472],
        Wd = $h[473] + $h[40] + $h[90],
        Xd = $h[474] + $h[23] + $h[24],
        Vd = $h[475],
        Zd = $h[476],
        Kd = $h[477],
        Jd = $h[478],
        Qd = $h[479],
        tl = $h[357] + $h[75] + $h[363],
        il = $h[357] + $h[75] + $h[358],
        nl = $h[364] + $h[75] + $h[480],
        el = $h[364] + $h[75] + $h[358],
        sl = $h[357] + $h[75] + $h[480],
        hl = $h[481] + $h[75] + $h[480],
        rl = $h[481] + $h[75] + $h[358],
        al = $h[482],
        ol = $h[483],
        fl = $h[226] + $h[484],
        _l = $h[402] + $h[209] + $h[484],
        cl = $h[402] + $h[442] + $h[484],
        ul = $h[485] + $h[64] + $h[65],
        dl = $h[486] + $h[111] + $h[285],
        ll = $h[486] + $h[77] + $h[487],
        bl = $h[402] + $h[486] + $h[23] + $h[24] + $h[484],
        vl = $h[402] + $h[485] + $h[64] + $h[65] + $h[484],
        gl = $h[402] + $h[429] + $h[484],
        yl = $h[486] + $h[23] + $h[24],
        pl = $h[488] + $h[197] + $h[213],
        xl = $h[485] + $h[197] + $h[213],
        ml = $h[0] + $h[1] + $h[91] + $h[197] + $h[213],
        El = $h[489] + $h[77] + $h[28],
        wl = $h[489] + $h[77] + $h[11],
        Tl = $h[489] + $h[77] + $h[14],
        kl = $h[490],
        Ml = $h[491],
        Sl = $h[492],
        Il = $h[493],
        Ol = $h[494],
        Al = $h[402] + $h[202] + $h[484],
        Cl = $h[402] + $h[14] + $h[484],
        Pl = $h[402] + $h[485] + $h[197] + $h[213] + $h[484],
        Ll = $h[495] + $h[75] + $h[496],
        Rl = $h[495] + $h[75] + $h[497],
        Dl = $h[495] + $h[75] + $h[498] + $h[75] + $h[499],
        Nl = $h[14] + $h[77] + $h[487],
        jl = $h[62] + $h[40] + $h[500] + $h[1] + $h[501],
        Bl = $h[51] + $h[1] + $h[2],
        $l = $h[62] + $h[1] + $h[2] + $h[1] + $h[502],
        Fl = $h[0] + $h[197] + $h[183],
        Gl = $h[75] + $h[475] + $h[503],
        zl = $h[495] + $h[75] + $h[504],
        ql = $h[75] + $h[505],
        Yl = $h[506],
        Hl = $h[494] + $h[1] + $h[507] + $h[36] + $h[508],
        Ul = $h[414] + $h[1] + $h[507] + $h[36] + $h[508],
        Wl = $h[202] + $h[1] + $h[507] + $h[36] + $h[508],
        Xl = $h[28] + $h[25] + $h[509],
        Vl = $h[59] + $h[36] + $h[122] + $h[40] + $h[56] + $h[1] + $h[507],
        Zl = $h[62] + $h[36] + $h[122] + $h[40] + $h[56] + $h[1] + $h[501],
        Kl = $h[305] + $h[1] + $h[507] + $h[36] + $h[508],
        Jl = $h[57] + $h[314],
        Ql = $h[58] + $h[197] + $h[213],
        tb = $h[0] + $h[60] + $h[510],
        ib = $h[11] + $h[1] + $h[91],
        nb = $h[489] + $h[197] + $h[213] + $h[1] + $h[507] + $h[36] + $h[508],
        eb = $h[202] + $h[511],
        sb = $h[512],
        hb = $h[513],
        rb = $h[514],
        ab = $h[111] + $h[196],
        ob = $h[181] + $h[40] + $h[515],
        fb = $h[181] + $h[111] + $h[156] + $h[23] + $h[221],
        _b = $h[435] + $h[421] + $h[516],
        cb = $h[299] + $h[97] + $h[517],
        ub = $h[518],
        db = $h[519],
        lb = $h[28] + $h[60] + $h[61] + $h[25] + $h[509],
        bb = $h[520] + $h[64] + $h[65],
        vb = $h[521] + $h[522] + $h[66] + $h[523],
        gb = $h[70] + $h[524] + $h[70] + $h[145] + $h[70] + $h[141] + $h[70] + $h[143] + $h[70] + $h[525],
        yb = $h[70] + $h[526] + $h[70] + $h[527] + $h[70] + $h[528] + $h[70] + $h[529],
        pb = $h[530],
        xb = $h[531],
        mb = $h[532],
        Eb = $h[0] + $h[1] + $h[533] + $h[66] + $h[534],
        wb = $h[535],
        Tb = $h[536],
        kb = $h[173] + $h[40] + $h[537],
        Mb = $h[62] + $h[60] + $h[182] + $h[93] + $h[538],
        Sb = $h[62] + $h[1] + $h[502],
        Ib = $h[539],
        Ob = $h[540],
        Ab = $h[541] + $h[1] + $h[313],
        Cb = $h[542],
        Pb = $h[97] + $h[174] + $h[97] + $h[419] + $h[97] + $h[543],
        Lb = $h[97] + $h[174] + $h[97] + $h[419] + $h[97] + $h[544],
        Rb = $h[97] + $h[174] + $h[97] + $h[545],
        Db = $h[97] + $h[174] + $h[97] + $h[546],
        Nb = $h[97] + $h[272] + $h[97] + $h[419] + $h[97] + $h[543],
        jb = $h[97] + $h[272] + $h[97] + $h[419] + $h[97] + $h[544],
        Bb = $h[97] + $h[272] + $h[97] + $h[545],
        $b = $h[97] + $h[272] + $h[97] + $h[546],
        Fb = $h[547],
        Gb = $h[316],
        zb = $h[548] + $h[69] + $h[202] + $h[103] + $h[227] + $h[421] + $h[549] + $h[104] + $h[550] + $h[551] + $h[70] + $h[552] + $h[553] + $h[554] + $h[303] + $h[555] + $h[556] + $h[557] + $h[558] + $h[559] + $h[560] + $h[561] + $h[16] + $h[335] + $h[421] + $h[562] + $h[558] + $h[563] + $h[479] + $h[83] + $h[564] + $h[303] + $h[183] + $h[83] + $h[20] + $h[262] + $h[565] + $h[562] + $h[552] + $h[566] + $h[479] + $h[567] + $h[198] + $h[568] + $h[475] + $h[569] + $h[503] + $h[570] + $h[571] + $h[572] + $h[23] + $h[573] + $h[421] + $h[40] + $h[574] + $h[40] + $h[554] + $h[220] + $h[575] + $h[576] + $h[16] + $h[577] + $h[262] + $h[578] + $h[198] + $h[421] + $h[579] + $h[580] + $h[581] + $h[582] + $h[572] + $h[18] + $h[583] + $h[264] + $h[560] + $h[114] + $h[334] + $h[584] + $h[585] + $h[586] + $h[478] + $h[587] + $h[554] + $h[304] + $h[1] + $h[588] + $h[589] + $h[475] + $h[18] + $h[304] + $h[262] + $h[18] + $h[334] + $h[590] + $h[147] + $h[558] + $h[119] + $h[554] + $h[43] + $h[591] + $h[592] + $h[593] + $h[594] + $h[595] + $h[596] + $h[560] + $h[597] + $h[560] + $h[598] + $h[335] + $h[558] + $h[421] + $h[334] + $h[599] + $h[600] + $h[601] + $h[602] + $h[503] + $h[603] + $h[604] + $h[335] + $h[27] + $h[335] + $h[70] + $h[547],
        qb = $h[605] + $h[15] + $h[450],
        Yb = $h[605] + $h[197] + $h[198],
        Hb = $h[75] + $h[606],
        Ub = $h[303] + $h[77] + $h[303],
        Wb = $h[33] + $h[607],
        Xb = $h[382] + $h[93] + $h[246],
        Vb = $h[66] + $h[184],
        Zb = $h[40] + $h[170],
        Kb = $h[197] + $h[608],
        Jb = $h[40] + $h[56] + $h[1] + $h[507] + $h[60] + $h[61],
        Qb = $h[411] + $h[609],
        tv = $h[36] + $h[508],
        iv = $h[40] + $h[90],
        nv = $h[36] + $h[122],
        ev = $h[36] + $h[122] + $h[220] + $h[415],
        sv = $h[610] + $h[509],
        hv = $h[166] + $h[157],
        rv = $h[33] + $h[220] + $h[611] + $h[147] + $h[148],
        av = $h[612] + $h[36] + $h[613],
        ov = $h[411] + $h[270] + $h[25] + $h[26],
        fv = $h[36] + $h[614] + $h[66] + $h[615],
        _v = $h[616],
        cv = $h[617],
        uv = $h[618],
        dv = $h[619],
        lv = $h[620],
        bv = $h[257] + $h[77] + $h[621],
        vv = $h[257],
        gv = $h[622],
        yv = $h[623],
        pv = $h[623] + $h[77] + $h[411],
        xv = $h[623] + $h[77] + $h[64],
        mv = $h[624],
        Ev = $h[624] + $h[77] + $h[411],
        wv = $h[624] + $h[77] + $h[64],
        Tv = $h[624] + $h[77] + $h[411] + $h[77] + $h[64],
        kv = $h[624] + $h[77] + $h[64] + $h[77] + $h[411],
        Mv = $h[625] + $h[77] + $h[121],
        Sv = $h[625] + $h[77] + $h[120],
        Iv = $h[625] + $h[77] + $h[86],
        Ov = $h[625] + $h[77] + $h[87],
        Av = $h[626],
        Cv = $h[627],
        Pv = $h[621],
        Lv = $h[628],
        Rv = $h[629],
        Dv = $h[630],
        Nv = $h[631],
        jv = $h[632],
        Bv = $h[633],
        $v = $h[634],
        Fv = $h[635],
        Gv = $h[636],
        zv = $h[637],
        qv = $h[638],
        Yv = $h[639],
        Hv = $h[640],
        Uv = $h[641],
        Wv = $h[642] + $h[77] + $h[643],
        Xv = $h[642] + $h[77] + $h[304],
        Vv = $h[642] + $h[77] + $h[83],
        Zv = $h[642] + $h[77] + $h[211],
        Kv = $h[642] + $h[77] + $h[334],
        Jv = $h[642] + $h[77] + $h[503],
        Qv = $h[642] + $h[77] + $h[644],
        tg = $h[642] + $h[77] + $h[645],
        ig = $h[642] + $h[77] + $h[335],
        ng = $h[642] + $h[77] + $h[289],
        eg = $h[187] + $h[75] + $h[646] + $h[75] + $h[344] + $h[75] + $h[647],
        sg = $h[648],
        hg = $h[187] + $h[75] + $h[646] + $h[75] + $h[344] + $h[75] + $h[649],
        rg = $h[187] + $h[75] + $h[646] + $h[75] + $h[344] + $h[75] + $h[650],
        ag = $h[651],
        og = $h[187] + $h[75] + $h[652] + $h[75] + $h[344] + $h[75] + $h[649],
        fg = $h[187] + $h[75] + $h[652] + $h[75] + $h[344] + $h[75] + $h[653],
        _g = $h[654],
        cg = $h[655] + $h[75] + $h[344],
        ug = $h[655] + $h[75] + $h[387],
        dg = $h[655] + $h[75] + $h[234],
        lg = $h[656] + $h[75] + $h[370],
        bg = $h[657] + $h[40] + $h[177] + $h[93] + $h[178],
        vg = $h[181] + $h[1] + $h[423],
        gg = $h[249],
        yg = $h[658] + $h[111] + $h[179],
        pg = $h[659] + $h[1] + $h[660] + $h[111] + $h[179],
        xg = $h[216] + $h[75] + $h[188],
        mg = $h[471] + $h[75] + $h[661] + $h[75] + $h[662],
        Eg = $h[58] + $h[43] + $h[262] + $h[93] + $h[246],
        wg = $h[305] + $h[23] + $h[221],
        Tg = $h[197] + $h[201] + $h[27] + $h[166] + $h[27] + $h[154] + $h[228],
        kg = $h[663],
        Mg = $h[664],
        Sg = $h[214] + $h[197] + $h[201],
        Ig = $h[216] + $h[75] + $h[471] + $h[75] + $h[459],
        Og = $h[665],
        Ag = $h[200] + $h[66] + $h[359],
        Cg = $h[72] + $h[666],
        Pg = $h[667],
        Lg = $h[668],
        Rg = $h[72] + $h[669],
        Dg = $h[458] + $h[27],
        Ng = $h[670] + $h[66] + $h[359],
        jg = $h[72] + $h[671],
        Bg = $h[72] + $h[672],
        $g = $h[200] + $h[111] + $h[156],
        Fg = $h[622] + $h[1] + $h[673],
        Gg = $h[622] + $h[43] + $h[674],
        zg = $h[622] + $h[15] + $h[117] + $h[114],
        qg = $h[622] + $h[15] + $h[117] + $h[119],
        Yg = $h[25] + $h[675] + $h[676],
        Hg = $h[60] + $h[677] + $h[676],
        Ug = $h[678] + $h[1] + $h[673],
        Wg = $h[678] + $h[1] + $h[673] + $h[43] + $h[679] + $h[220] + $h[221],
        Xg = $h[190] + $h[66] + $h[680],
        Vg = $h[227],
        Zg = $h[166],
        Kg = $h[11] + $h[25] + $h[509],
        Jg = $h[0] + $h[18] + $h[681] + $h[197] + $h[682],
        Qg = $h[683],
        ty = $h[684],
        iy = $h[685] + $h[75] + $h[344] + $h[75] + $h[236],
        ny = $h[181] + $h[25] + $h[686] + $h[264] + $h[265],
        ey = $h[685] + $h[75] + $h[344] + $h[75] + $h[687],
        sy = $h[688],
        hy = $h[181] + $h[93] + $h[689] + $h[264] + $h[265],
        ry = $h[28] + $h[1] + $h[673] + $h[66] + $h[121],
        ay = $h[690] + $h[75] + $h[236] + $h[75] + $h[685],
        oy = $h[690] + $h[75] + $h[687] + $h[75] + $h[685],
        fy = $h[588],
        _y = $h[470],
        cy = $h[585],
        uy = $h[691] + $h[75] + $h[692] + $h[75] + $h[693],
        dy = $h[691] + $h[75] + $h[694] + $h[75] + $h[693],
        ly = $h[691] + $h[75] + $h[695] + $h[75] + $h[693],
        by = $h[691] + $h[75] + $h[696],
        vy = $h[697] + $h[111] + $h[698],
        gy = $h[33] + $h[23] + $h[699],
        yy = $h[414] + $h[1] + $h[673],
        py = $h[414] + $h[66] + $h[700] + $h[43] + $h[674],
        xy = $h[414] + $h[66] + $h[700] + $h[15] + $h[117] + $h[114],
        my = $h[414] + $h[66] + $h[700] + $h[15] + $h[117] + $h[119],
        Ey = $h[414] + $h[43] + $h[701],
        wy = $h[670],
        Ty = $h[203] + $h[1] + $h[702],
        ky = $h[203] + $h[703] + $h[704],
        My = $h[414] + $h[111] + $h[285],
        Sy = $h[705] + $h[66] + $h[359],
        Iy = $h[705],
        Oy = $h[200] + $h[1] + $h[673],
        Ay = $h[200] + $h[264] + $h[265],
        Cy = $h[706] + $h[40] + $h[206],
        Py = $h[707],
        Ly = $h[708],
        Ry = $h[239] + $h[77] + $h[709],
        Dy = $h[710] + $h[77] + $h[709],
        Ny = $h[711],
        jy = $h[144],
        By = $h[712],
        $y = $h[68] + $h[69] + $h[303] + $h[70] + $h[303] + $h[70] + $h[303] + $h[70] + $h[303] + $h[71],
        Fy = $h[713],
        Gy = $h[72] + $h[304] + $h[1] + $h[644] + $h[43] + $h[562] + $h[36],
        zy = $h[72] + $h[714],
        qy = $h[72] + $h[715] + $h[60] + $h[335] + $h[43],
        Yy = $h[72] + $h[716] + $h[43] + $h[717],
        Hy = $h[72] + $h[716] + $h[18] + $h[718],
        Uy = $h[72] + $h[719] + $h[1] + $h[720],
        Wy = $h[72] + $h[721],
        Xy = $h[72] + $h[304] + $h[36] + $h[644] + $h[1] + $h[562] + $h[20],
        Vy = $h[72] + $h[722] + $h[43] + $h[303],
        Zy = $h[72] + $h[723] + $h[724],
        Ky = $h[72] + $h[304] + $h[20] + $h[644] + $h[725] + $h[83],
        Jy = $h[72] + $h[716] + $h[18] + $h[726],
        Qy = $h[72] + $h[727],
        tp = $h[72] + $h[83] + $h[572] + $h[335] + $h[728],
        ip = $h[72] + $h[729],
        np = $h[658],
        ep = $h[654] + $h[25] + $h[730],
        sp = $h[72] + $h[731] + $h[36] + $h[720],
        hp = $h[72] + $h[732],
        rp = $h[72] + $h[304] + $h[20] + $h[733] + $h[18] + $h[334],
        ap = $h[72] + $h[734] + $h[735] + $h[83],
        op = $h[72] + $h[736] + $h[737],
        fp = $h[72] + $h[304] + $h[60] + $h[644] + $h[738] + $h[303],
        _p = $h[72] + $h[739],
        cp = $h[72] + $h[16] + $h[645] + $h[16] + $h[335] + $h[16] + $h[335],
        up = $h[72] + $h[644] + $h[18] + $h[740],
        dp = $h[72] + $h[334] + $h[20] + $h[334] + $h[1] + $h[334] + $h[43],
        lp = $h[72] + $h[741],
        bp = $h[72] + $h[742],
        vp = $h[72] + $h[644] + $h[20] + $h[644] + $h[60] + $h[644] + $h[20],
        gp = $h[72] + $h[334] + $h[1] + $h[743],
        yp = $h[72] + $h[744],
        pp = $h[72] + $h[645] + $h[36] + $h[645] + $h[36] + $h[645] + $h[36],
        xp = $h[72] + $h[745],
        mp = $h[72] + $h[746],
        Ep = $h[72] + $h[747],
        wp = $h[72] + $h[562] + $h[60] + $h[562] + $h[36] + $h[562] + $h[36],
        Tp = $h[72] + $h[18] + $h[645] + $h[18] + $h[503] + $h[18] + $h[334],
        kp = $h[72] + $h[18] + $h[562] + $h[18] + $h[644] + $h[18] + $h[503],
        Mp = $h[72] + $h[18] + $h[645] + $h[18] + $h[334] + $h[18] + $h[211],
        Sp = $h[72] + $h[748],
        Ip = $h[72] + $h[60] + $h[562] + $h[749],
        Op = $h[72] + $h[562] + $h[750] + $h[303] + $h[470] + $h[303],
        Ap = $h[751] + $h[1] + $h[660] + $h[111] + $h[179],
        Cp = $h[72] + $h[476] + $h[562] + $h[752],
        Pp = $h[72] + $h[211] + $h[572] + $h[211] + $h[470] + $h[753],
        Lp = $h[72] + $h[43] + $h[83] + $h[754],
        Rp = $h[72] + $h[83] + $h[60] + $h[335] + $h[755],
        Dp = $h[417] + $h[18] + $h[756],
        Np = $h[72] + $h[757],
        jp = $h[72] + $h[479] + $h[503] + $h[479] + $h[503] + $h[479] + $h[644],
        Bp = $h[392] + $h[97],
        $p = $h[758],
        Fp = $h[759],
        Gp = $h[760],
        zp = $h[761] + $h[43] + $h[762],
        qp = $h[761] + $h[43] + $h[763],
        Yp = $h[761],
        Hp = $h[761] + $h[98] + $h[764],
        Up = $h[197] + $h[315] + $h[27] + $h[765] + $h[27] + $h[766] + $h[77],
        Wp = $h[767],
        Xp = $h[768],
        Vp = $h[23] + $h[769] + $h[27] + $h[470] + $h[27] + $h[768] + $h[27] + $h[770] + $h[77],
        Zp = $h[281] + $h[20] + $h[280],
        Kp = $h[239] + $h[93] + $h[771],
        Jp = $h[772],
        Qp = $h[773],
        tx = $h[281] + $h[66] + $h[184],
        ix = $h[774] + $h[1] + $h[673],
        nx = $h[775] + $h[18] + $h[776] + $h[93] + $h[178],
        ex = $h[777],
        sx = $h[778],
        hx = $h[779],
        rx = $h[780],
        ax = $h[781],
        ox = $h[782],
        fx = $h[783] + $h[411] + $h[784],
        _x = $h[783] + $h[36] + $h[122],
        cx = $h[785],
        ux = $h[786],
        dx = $h[787],
        lx = $h[788],
        bx = $h[789],
        vx = $h[790] + $h[1] + $h[221],
        gx = $h[791],
        yx = $h[156] + $h[111] + $h[285],
        px = $h[279] + $h[66] + $h[184],
        xx = $h[792] + $h[220] + $h[543] + $h[1] + $h[221] + $h[66] + $h[184],
        mx = $h[793],
        Ex = $h[794],
        wx = $h[156],
        Tx = $h[795],
        kx = $h[98] + $h[796] + $h[27] + $h[797] + $h[484] + $h[303] + $h[798],
        Mx = $h[525],
        Sx = $h[773] + $h[147] + $h[148],
        Ix = $h[799] + $h[147] + $h[148],
        Ox = $h[800] + $h[1] + $h[221],
        Ax = $h[189] + $h[64] + $h[801] + $h[228],
        Cx = $h[802],
        Px = $h[189] + $h[40] + $h[803] + $h[27] + $h[36] + $h[804] + $h[228],
        Lx = $h[805],
        Rx = $h[806],
        Dx = $h[16] + $h[807] + $h[479] + $h[334] + $h[572] + $h[808] + $h[809] + $h[645] + $h[470] + $h[810] + $h[572] + $h[811] + $h[476] + $h[211] + $h[812] + $h[562] + $h[813] + $h[814] + $h[815] + $h[816] + $h[817] + $h[303] + $h[479] + $h[503] + $h[16] + $h[818] + $h[470] + $h[819] + $h[820] + $h[821] + $h[479] + $h[645] + $h[822] + $h[211] + $h[470] + $h[823] + $h[824] + $h[825] + $h[476] + $h[562] + $h[479] + $h[826] + $h[470] + $h[83] + $h[827] + $h[828] + $h[829] + $h[830] + $h[831] + $h[83] + $h[832] + $h[833] + $h[70] + $h[834] + $h[304] + $h[470] + $h[835] + $h[183] + $h[836] + $h[470] + $h[837] + $h[16] + $h[838] + $h[839] + $h[840] + $h[841] + $h[842] + $h[843] + $h[334] + $h[844] + $h[845] + $h[846] + $h[847] + $h[470] + $h[645] + $h[848] + $h[211] + $h[476] + $h[303] + $h[849] + $h[850] + $h[851] + $h[852] + $h[572] + $h[825] + $h[853] + $h[854] + $h[183] + $h[855] + $h[572] + $h[856] + $h[839] + $h[83] + $h[476] + $h[857] + $h[572] + $h[562] + $h[858] + $h[859] + $h[860] + $h[861] + $h[848] + $h[562] + $h[470] + $h[862] + $h[863] + $h[718] + $h[864] + $h[303] + $h[865] + $h[866] + $h[470] + $h[867] + $h[572] + $h[334],
        Nx = $h[189] + $h[25] + $h[868] + $h[27] + $h[51] + $h[484],
        jx = $h[407] + $h[869] + $h[870] + $h[407] + $h[211] + $h[18] + $h[407] + $h[869] + $h[871] + $h[77] + $h[299] + $h[77] + $h[782] + $h[407] + $h[83] + $h[1] + $h[872] + $h[77] + $h[299] + $h[77] + $h[782],
        Bx = $h[873],
        $x = $h[874],
        Fx = $h[875],
        Gx = $h[58] + $h[111],
        zx = $h[876],
        qx = $h[645] + $h[77],
        Yx = $h[877],
        Hx = $h[282],
        Ux = $h[878],
        Wx = $h[1] + $h[423],
        Xx = $h[93] + $h[879],
        Vx = $h[1] + $h[880],
        Zx = $h[881],
        Kx = $h[882],
        Jx = $h[181],
        Qx = $h[883],
        tm = $h[884],
        im = $h[885],
        nm = $h[886],
        em = $h[887],
        sm = $h[888],
        hm = $h[455],
        rm = $h[889],
        am = $h[890],
        om = $h[392] + $h[891],
        fm = $h[27] + $h[290] + $h[27] + $h[892] + $h[503],
        _m = $h[893],
        cm = $h[894],
        um = $h[895] + $h[204] + $h[896],
        dm = $h[897],
        lm = $h[898] + $h[77] + $h[899] + $h[77] + $h[304],
        bm = $h[66] + $h[900],
        vm = $h[901],
        gm = $h[902] + $h[60] + $h[182],
        ym = $h[60] + $h[182],
        pm = $h[24],
        xm = $h[903],
        mm = $h[904] + $h[204] + $h[896],
        Em = $h[905],
        wm = $h[156] + $h[83] + $h[36],
        Tm = $h[475] + $h[111] + $h[156],
        km = $h[57] + $h[218],
        Mm = $h[58] + $h[66] + $h[359],
        Sm = $h[254] + $h[64] + $h[906],
        Im = $h[349],
        Om = $h[254],
        Am = $h[392] + $h[77] + $h[60] + $h[182],
        Cm = $h[349] + $h[1] + $h[907],
        Pm = $h[585] + $h[197] + $h[213],
        Lm = $h[908],
        Rm = $h[909] + $h[66] + $h[910] + $h[23] + $h[911],
        Dm = $h[243] + $h[66] + $h[912],
        Nm = $h[913],
        jm = $h[392] + $h[77] + $h[60] + $h[306],
        Bm = $h[295],
        $m = $h[914] + $h[60] + $h[915],
        Fm = $h[916] + $h[77] + $h[917],
        Gm = $h[918] + $h[40] + $h[206] + $h[1] + $h[507],
        zm = $h[28] + $h[40] + $h[206] + $h[66] + $h[919],
        qm = $h[51],
        Ym = $h[392] + $h[97] + $h[465],
        Hm = $h[57] + $h[920] + $h[40] + $h[90],
        Um = $h[57] + $h[921],
        Wm = $h[5] + $h[25] + $h[922],
        Xm = $h[921],
        Vm = $h[251],
        Zm = $h[51] + $h[20] + $h[311],
        Km = $h[392] + $h[77] + $h[23] + $h[221],
        Jm = $h[923] + $h[77] + $h[28],
        Qm = $h[923] + $h[77] + $h[11],
        tE = $h[924],
        iE = $h[920] + $h[40] + $h[90],
        nE = $h[57] + $h[916],
        eE = $h[925] + $h[75] + $h[926],
        sE = $h[392] + $h[77] + $h[66] + $h[375] + $h[23] + $h[221],
        hE = $h[916],
        rE = $h[11] + $h[40] + $h[206] + $h[66] + $h[919],
        aE = $h[927],
        oE = $h[66] + $h[375] + $h[23] + $h[221],
        fE = $h[267],
        _E = $h[392] + $h[77] + $h[43] + $h[928],
        cE = $h[43] + $h[928],
        uE = $h[443] + $h[66] + $h[910] + $h[23] + $h[911],
        dE = $h[929] + $h[75] + $h[344],
        lE = $h[929] + $h[75] + $h[344] + $h[75] + $h[323],
        bE = $h[929] + $h[75] + $h[930],
        vE = $h[929] + $h[75] + $h[931],
        gE = $h[929] + $h[75] + $h[932] + $h[75] + $h[459],
        yE = $h[254] + $h[20] + $h[280],
        pE = $h[57] + $h[248] + $h[66] + $h[184],
        xE = $h[933],
        mE = $h[392] + $h[77] + $h[264] + $h[934],
        EE = $h[248] + $h[66] + $h[184],
        wE = $h[935] + $h[111] + $h[285],
        TE = $h[935] + $h[197] + $h[201],
        kE = $h[392] + $h[77] + $h[111] + $h[156],
        ME = $h[72] + $h[936],
        SE = $h[414] + $h[43] + $h[937] + $h[1] + $h[673],
        IE = $h[200] + $h[93] + $h[246],
        OE = $h[670] + $h[93] + $h[246],
        AE = $h[938] + $h[66] + $h[939] + $h[66] + $h[912],
        CE = $h[57] + $h[940],
        PE = $h[249] + $h[119],
        LE = $h[655] + $h[75] + $h[344] + $h[75] + $h[656] + $h[75] + $h[323],
        RE = $h[257] + $h[25] + $h[271] + $h[36] + $h[270],
        DE = $h[257] + $h[25] + $h[271] + $h[36] + $h[270] + $h[15] + $h[117],
        NE = $h[57] + $h[263] + $h[1] + $h[673],
        jE = $h[57] + $h[254] + $h[36] + $h[122],
        BE = $h[57] + $h[263] + $h[264] + $h[265],
        $E = $h[192] + $h[66] + $h[184],
        FE = $h[62] + $h[43] + $h[193] + $h[1] + $h[501],
        GE = $h[57] + $h[254] + $h[25] + $h[229],
        zE = $h[57] + $h[254] + $h[64] + $h[906],
        qE = $h[57] + $h[941],
        YE = $h[57] + $h[258] + $h[60] + $h[269],
        HE = $h[942] + $h[64] + $h[943],
        UE = $h[64] + $h[906],
        WE = $h[25] + $h[229],
        XE = $h[18] + $h[255] + $h[40] + $h[170],
        VE = $h[944] + $h[75] + $h[217],
        ZE = $h[43] + $h[937] + $h[264] + $h[265],
        KE = $h[655] + $h[75] + $h[656],
        JE = $h[655] + $h[75] + $h[945] + $h[75] + $h[946],
        QE = $h[93] + $h[252],
        tw = $h[486],
        iw = $h[414] + $h[77] + $h[239],
        nw = $h[414] + $h[77] + $h[257],
        ew = $h[655] + $h[75] + $h[945] + $h[75] + $h[947] + $h[75] + $h[114],
        sw = $h[414] + $h[77] + $h[209],
        hw = $h[948] + $h[75] + $h[234],
        rw = $h[678] + $h[77] + $h[239],
        aw = $h[949],
        ow = $h[940],
        fw = $h[945] + $h[75] + $h[946],
        _w = $h[622] + $h[77] + $h[950],
        cw = $h[945] + $h[75] + $h[234],
        uw = $h[622] + $h[77] + $h[239],
        dw = $h[945] + $h[75] + $h[947] + $h[75] + $h[114],
        lw = $h[622] + $h[77] + $h[249] + $h[77] + $h[798],
        bw = $h[622] + $h[77] + $h[249] + $h[77] + $h[262],
        vw = $h[320] + $h[75] + $h[951],
        gw = $h[952] + $h[77] + $h[670],
        yw = $h[320] + $h[75] + $h[951] + $h[75] + $h[347],
        pw = $h[952] + $h[77] + $h[670] + $h[77] + $h[102],
        xw = $h[320] + $h[75] + $h[187] + $h[75] + $h[953],
        mw = $h[952] + $h[77] + $h[203] + $h[77] + $h[954],
        Ew = $h[320] + $h[75] + $h[187] + $h[75] + $h[953] + $h[75] + $h[947],
        ww = $h[320] + $h[75] + $h[955] + $h[75] + $h[234],
        Tw = $h[952] + $h[77] + $h[200] + $h[77] + $h[239],
        kw = $h[320] + $h[75] + $h[955] + $h[75] + $h[685],
        Mw = $h[952] + $h[77] + $h[200] + $h[77] + $h[956],
        Sw = $h[320] + $h[75] + $h[957],
        Iw = $h[952] + $h[77] + $h[705],
        Ow = $h[952] + $h[77] + $h[705] + $h[77] + $h[102],
        Aw = $h[203] + $h[77] + $h[958],
        Cw = $h[187] + $h[75] + $h[652],
        Pw = $h[203] + $h[77] + $h[959],
        Lw = $h[261] + $h[77] + $h[960] + $h[77] + $h[916],
        Rw = $h[961] + $h[75] + $h[234],
        Dw = $h[263] + $h[77] + $h[239],
        Nw = $h[961] + $h[75] + $h[685],
        jw = $h[263] + $h[77] + $h[956],
        Bw = $h[257] + $h[77] + $h[168],
        $w = $h[257] + $h[77] + $h[239],
        Fw = $h[656] + $h[75] + $h[187] + $h[75] + $h[953],
        Gw = $h[257] + $h[77] + $h[203] + $h[77] + $h[954],
        zw = $h[257] + $h[77] + $h[482],
        qw = $h[930],
        Yw = $h[216] + $h[75] + $h[961] + $h[75] + $h[685],
        Hw = $h[216] + $h[75] + $h[656],
        Uw = $h[227] + $h[77] + $h[257] + $h[77] + $h[168],
        Ww = $h[216] + $h[75] + $h[656] + $h[75] + $h[347],
        Xw = $h[216] + $h[75] + $h[656] + $h[75] + $h[234],
        Vw = $h[227] + $h[77] + $h[257] + $h[77] + $h[102],
        Zw = $h[216] + $h[75] + $h[656] + $h[75] + $h[370],
        Kw = $h[227] + $h[77] + $h[482],
        Jw = $h[216] + $h[75] + $h[930],
        Qw = $h[227] + $h[77] + $h[224],
        tT = $h[216] + $h[75] + $h[564] + $h[75] + $h[498],
        iT = $h[227] + $h[77] + $h[585] + $h[77] + $h[14],
        nT = $h[216] + $h[75] + $h[962],
        eT = $h[227] + $h[77] + $h[963],
        sT = $h[216] + $h[75] + $h[949],
        hT = $h[227] + $h[77] + $h[940],
        rT = $h[964] + $h[75] + $h[965],
        aT = $h[791] + $h[77] + $h[210],
        oT = $h[964] + $h[75] + $h[966],
        fT = $h[791] + $h[77] + $h[688],
        _T = $h[964] + $h[75] + $h[967],
        cT = $h[791] + $h[77] + $h[941],
        uT = $h[964] + $h[75] + $h[968] + $h[75] + $h[966],
        dT = $h[964] + $h[75] + $h[234],
        lT = $h[791] + $h[77] + $h[239],
        bT = $h[964] + $h[75] + $h[185] + $h[75] + $h[459],
        vT = $h[791] + $h[77] + $h[186] + $h[77] + $h[924],
        gT = $h[964] + $h[75] + $h[185] + $h[75] + $h[460],
        yT = $h[791] + $h[77] + $h[186] + $h[77] + $h[969],
        pT = $h[964] + $h[75] + $h[185] + $h[75] + $h[347],
        xT = $h[791] + $h[77] + $h[186] + $h[77] + $h[102],
        mT = $h[791] + $h[77] + $h[224],
        ET = $h[964] + $h[75] + $h[944] + $h[75] + $h[217],
        wT = $h[791] + $h[77] + $h[260] + $h[77] + $h[168],
        TT = $h[791] + $h[77] + $h[260],
        kT = $h[964] + $h[75] + $h[370],
        MT = $h[791] + $h[77] + $h[482],
        ST = $h[964] + $h[75] + $h[947] + $h[75] + $h[114],
        IT = $h[791] + $h[77] + $h[249] + $h[77] + $h[798],
        OT = $h[791] + $h[77] + $h[249] + $h[77] + $h[262],
        AT = $h[791] + $h[77] + $h[924],
        CT = $h[964] + $h[75] + $h[970] + $h[75] + $h[966],
        PT = $h[791] + $h[77] + $h[971] + $h[77] + $h[688],
        LT = $h[964] + $h[75] + $h[656],
        RT = $h[791] + $h[77] + $h[257],
        DT = $h[964] + $h[75] + $h[656] + $h[75] + $h[347],
        NT = $h[791] + $h[77] + $h[257] + $h[77] + $h[102],
        jT = $h[964] + $h[75] + $h[961] + $h[75] + $h[234],
        BT = $h[964] + $h[75] + $h[961] + $h[75] + $h[685],
        $T = $h[791] + $h[77] + $h[253],
        FT = $h[964] + $h[75] + $h[945] + $h[75] + $h[946],
        GT = $h[791] + $h[77] + $h[622] + $h[77] + $h[950],
        zT = $h[964] + $h[75] + $h[945] + $h[75] + $h[234],
        qT = $h[791] + $h[77] + $h[622] + $h[77] + $h[239],
        YT = $h[964] + $h[75] + $h[945] + $h[75] + $h[947] + $h[75] + $h[114],
        HT = $h[964] + $h[75] + $h[945] + $h[75] + $h[947] + $h[75] + $h[119],
        UT = $h[964] + $h[75] + $h[564] + $h[75] + $h[498],
        WT = $h[791] + $h[77] + $h[585] + $h[77] + $h[14],
        XT = $h[964] + $h[75] + $h[972] + $h[75] + $h[363],
        VT = $h[791] + $h[77] + $h[62] + $h[77] + $h[121],
        ZT = $h[929] + $h[75] + $h[961] + $h[75] + $h[234],
        KT = $h[929] + $h[75] + $h[961] + $h[75] + $h[685],
        JT = $h[929] + $h[75] + $h[951],
        QT = $h[935] + $h[77] + $h[670],
        tk = $h[929] + $h[75] + $h[951] + $h[75] + $h[347],
        ik = $h[935] + $h[77] + $h[670] + $h[77] + $h[239],
        nk = $h[929] + $h[75] + $h[951] + $h[75] + $h[187] + $h[75] + $h[953],
        ek = $h[929] + $h[75] + $h[951] + $h[75] + $h[187] + $h[75] + $h[953] + $h[75] + $h[947],
        sk = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[965],
        hk = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[234],
        rk = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[185] + $h[75] + $h[347],
        ak = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[930],
        ok = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[944] + $h[75] + $h[217],
        fk = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[947] + $h[75] + $h[114],
        _k = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[656] + $h[75] + $h[347],
        ck = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[961] + $h[75] + $h[234],
        uk = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[974],
        dk = $h[339] + $h[77] + $h[168],
        lk = $h[339] + $h[77] + $h[239],
        bk = $h[351] + $h[75] + $h[957],
        vk = $h[339] + $h[77] + $h[705],
        gk = $h[351] + $h[75] + $h[957] + $h[75] + $h[347],
        yk = $h[339] + $h[77] + $h[705] + $h[77] + $h[102],
        pk = $h[351] + $h[75] + $h[187] + $h[75] + $h[953],
        xk = $h[339] + $h[77] + $h[203] + $h[77] + $h[954],
        mk = $h[351] + $h[75] + $h[187] + $h[75] + $h[953] + $h[75] + $h[947],
        Ek = $h[351] + $h[75] + $h[975] + $h[75] + $h[947],
        wk = $h[339] + $h[77] + $h[295] + $h[77] + $h[249],
        Tk = $h[351] + $h[75] + $h[693] + $h[75] + $h[947],
        kk = $h[339] + $h[77] + $h[51] + $h[77] + $h[249],
        Mk = $h[351] + $h[75] + $h[973] + $h[75] + $h[976],
        Sk = $h[339] + $h[77] + $h[914] + $h[77] + $h[977],
        Ik = $h[339] + $h[77] + $h[978] + $h[77] + $h[979],
        Ok = $h[339] + $h[77] + $h[625],
        Ak = $h[339] + $h[77] + $h[980] + $h[77] + $h[981],
        Ck = $h[339] + $h[77] + $h[29] + $h[77] + $h[982],
        Pk = $h[339] + $h[77] + $h[29] + $h[77] + $h[429],
        Lk = $h[351] + $h[75] + $h[369],
        Rk = $h[339] + $h[77] + $h[983],
        Dk = $h[339] + $h[77] + $h[983] + $h[77] + $h[482],
        Nk = $h[339] + $h[77] + $h[295] + $h[77] + $h[984] + $h[77] + $h[339],
        jk = $h[351] + $h[75] + $h[693] + $h[75] + $h[985] + $h[75] + $h[351],
        Bk = $h[339] + $h[77] + $h[51] + $h[77] + $h[984] + $h[77] + $h[339],
        $k = $h[332] + $h[75] + $h[975],
        Fk = $h[642] + $h[77] + $h[295],
        Gk = $h[332] + $h[75] + $h[975] + $h[75] + $h[459],
        zk = $h[642] + $h[77] + $h[295] + $h[77] + $h[924],
        qk = $h[332] + $h[75] + $h[975] + $h[75] + $h[947],
        Yk = $h[642] + $h[77] + $h[295] + $h[77] + $h[249],
        Hk = $h[332] + $h[75] + $h[975] + $h[75] + $h[951],
        Uk = $h[642] + $h[77] + $h[295] + $h[77] + $h[670],
        Wk = $h[332] + $h[75] + $h[975] + $h[75] + $h[957],
        Xk = $h[642] + $h[77] + $h[295] + $h[77] + $h[705],
        Vk = $h[332] + $h[75] + $h[975] + $h[75] + $h[957] + $h[75] + $h[347],
        Zk = $h[642] + $h[77] + $h[295] + $h[77] + $h[203] + $h[77] + $h[954],
        Kk = $h[332] + $h[75] + $h[975] + $h[75] + $h[187] + $h[75] + $h[953] + $h[75] + $h[947],
        Jk = $h[332] + $h[75] + $h[975] + $h[75] + $h[187] + $h[75] + $h[646],
        Qk = $h[642] + $h[77] + $h[295] + $h[77] + $h[203] + $h[77] + $h[958],
        tM = $h[642] + $h[77] + $h[295] + $h[77] + $h[203] + $h[77] + $h[959],
        iM = $h[642] + $h[77] + $h[51],
        nM = $h[332] + $h[75] + $h[693] + $h[75] + $h[459],
        eM = $h[642] + $h[77] + $h[51] + $h[77] + $h[924],
        sM = $h[332] + $h[75] + $h[693] + $h[75] + $h[947],
        hM = $h[642] + $h[77] + $h[51] + $h[77] + $h[249],
        rM = $h[332] + $h[75] + $h[693] + $h[75] + $h[951],
        aM = $h[642] + $h[77] + $h[51] + $h[77] + $h[670],
        oM = $h[332] + $h[75] + $h[693] + $h[75] + $h[951] + $h[75] + $h[347],
        fM = $h[332] + $h[75] + $h[693] + $h[75] + $h[957],
        _M = $h[642] + $h[77] + $h[51] + $h[77] + $h[705],
        cM = $h[332] + $h[75] + $h[693] + $h[75] + $h[187] + $h[75] + $h[953],
        uM = $h[642] + $h[77] + $h[51] + $h[77] + $h[203] + $h[77] + $h[954],
        dM = $h[332] + $h[75] + $h[693] + $h[75] + $h[187] + $h[75] + $h[953] + $h[75] + $h[947],
        lM = $h[332] + $h[75] + $h[693] + $h[75] + $h[955] + $h[75] + $h[234],
        bM = $h[642] + $h[77] + $h[51] + $h[77] + $h[200] + $h[77] + $h[239],
        vM = $h[332] + $h[75] + $h[693] + $h[75] + $h[955] + $h[75] + $h[685],
        gM = $h[332] + $h[75] + $h[693] + $h[75] + $h[187] + $h[75] + $h[646],
        yM = $h[642] + $h[77] + $h[51] + $h[77] + $h[203] + $h[77] + $h[958],
        pM = $h[332] + $h[75] + $h[693] + $h[75] + $h[187] + $h[75] + $h[652],
        xM = $h[642] + $h[77] + $h[51] + $h[77] + $h[203] + $h[77] + $h[959],
        mM = $h[941],
        EM = $h[239],
        wM = $h[257] + $h[1] + $h[673],
        TM = $h[263] + $h[1] + $h[673],
        kM = $h[258] + $h[15] + $h[198] + $h[111] + $h[986],
        MM = $h[186] + $h[66] + $h[359],
        SM = $h[971] + $h[40] + $h[90],
        IM = $h[964] + $h[75] + $h[930],
        OM = $h[260] + $h[204] + $h[205],
        AM = $h[964] + $h[75] + $h[944],
        CM = $h[257] + $h[93] + $h[268],
        PM = $h[249] + $h[114],
        LM = $h[253],
        RM = $h[964] + $h[75] + $h[459],
        DM = $h[948] + $h[75] + $h[234] + $h[75] + $h[230] + $h[75] + $h[231],
        NM = $h[75] + $h[211] + $h[479],
        jM = $h[656],
        BM = $h[75] + $h[179] + $h[304] + $h[475],
        $M = $h[261] + $h[43] + $h[262] + $h[40] + $h[206],
        FM = $h[963] + $h[111] + $h[285],
        GM = $h[320] + $h[75] + $h[957] + $h[75] + $h[347],
        zM = $h[187] + $h[75] + $h[646],
        qM = $h[216] + $h[75] + $h[961] + $h[75] + $h[234],
        YM = $h[216] + $h[75] + $h[656] + $h[75] + $h[187] + $h[75] + $h[953],
        HM = $h[216] + $h[75] + $h[656] + $h[75] + $h[187] + $h[75] + $h[953] + $h[75] + $h[947],
        UM = $h[987] + $h[43] + $h[988],
        WM = $h[75] + $h[503] + $h[552],
        XM = $h[952],
        VM = $h[75] + $h[334] + $h[588],
        ZM = $h[351] + $h[75] + $h[234],
        KM = $h[295] + $h[18] + $h[989],
        JM = $h[332] + $h[75] + $h[693],
        QM = $h[51] + $h[18] + $h[989],
        tS = $h[295] + $h[18] + $h[293] + $h[60] + $h[306],
        iS = $h[295] + $h[18] + $h[989] + $h[66] + $h[184],
        nS = $h[295] + $h[18] + $h[989] + $h[15] + $h[117],
        eS = $h[295] + $h[18] + $h[989] + $h[66] + $h[199],
        sS = $h[295] + $h[18] + $h[989] + $h[66] + $h[199] + $h[66] + $h[359],
        hS = $h[295] + $h[18] + $h[989] + $h[15] + $h[990],
        rS = $h[295] + $h[18] + $h[989] + $h[20] + $h[991] + $h[1] + $h[673],
        aS = $h[332] + $h[75] + $h[975] + $h[75] + $h[187] + $h[75] + $h[953],
        oS = $h[295] + $h[18] + $h[989] + $h[25] + $h[271] + $h[36] + $h[270],
        fS = $h[332] + $h[75] + $h[975] + $h[75] + $h[187] + $h[75] + $h[652],
        _S = $h[295] + $h[18] + $h[989] + $h[25] + $h[271] + $h[703] + $h[704],
        cS = $h[295] + $h[18] + $h[989] + $h[25] + $h[271] + $h[1] + $h[702],
        uS = $h[51] + $h[18] + $h[989] + $h[66] + $h[184],
        dS = $h[51] + $h[18] + $h[989] + $h[15] + $h[117],
        lS = $h[51] + $h[18] + $h[989] + $h[66] + $h[199],
        bS = $h[51] + $h[18] + $h[989] + $h[66] + $h[199] + $h[66] + $h[359],
        vS = $h[51] + $h[18] + $h[989] + $h[15] + $h[990],
        gS = $h[332] + $h[75] + $h[693] + $h[75] + $h[957] + $h[75] + $h[347],
        yS = $h[51] + $h[18] + $h[989] + $h[15] + $h[990] + $h[66] + $h[359],
        pS = $h[51] + $h[18] + $h[989] + $h[20] + $h[991] + $h[1] + $h[673],
        xS = $h[51] + $h[18] + $h[989] + $h[20] + $h[991] + $h[264] + $h[265],
        mS = $h[51] + $h[18] + $h[989] + $h[25] + $h[271] + $h[36] + $h[270],
        ES = $h[51] + $h[18] + $h[989] + $h[25] + $h[271] + $h[703] + $h[704],
        wS = $h[51] + $h[18] + $h[989] + $h[25] + $h[271] + $h[1] + $h[702],
        TS = $h[914] + $h[25] + $h[992],
        kS = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[966],
        MS = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[968] + $h[75] + $h[966],
        SS = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[185] + $h[75] + $h[459],
        IS = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[185] + $h[75] + $h[460],
        OS = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[370],
        AS = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[656],
        CS = $h[351] + $h[75] + $h[973] + $h[75] + $h[964] + $h[75] + $h[961] + $h[75] + $h[685],
        PS = $h[656] + $h[75] + $h[234],
        LS = $h[254] + $h[66] + $h[375],
        RS = $h[993] + $h[75] + $h[361] + $h[75] + $h[994],
        DS = $h[332] + $h[75] + $h[975] + $h[75] + $h[951] + $h[75] + $h[347],
        NS = $h[332] + $h[75] + $h[975] + $h[75] + $h[955] + $h[75] + $h[685],
        jS = $h[11] + $h[43] + $h[995],
        BS = $h[62] + $h[43] + $h[995] + $h[40] + $h[56] + $h[1] + $h[507],
        $S = $h[254] + $h[93] + $h[996],
        FS = $h[28] + $h[1] + $h[91],
        GS = $h[413] + $h[43] + $h[995] + $h[40] + $h[76],
        zS = $h[341] + $h[40] + $h[76],
        qS = $h[28] + $h[43] + $h[995],
        YS = $h[430],
        HS = $h[474],
        US = $h[57] + $h[414] + $h[43] + $h[701],
        WS = $h[57] + $h[622] + $h[15] + $h[117] + $h[114],
        XS = $h[57] + $h[414] + $h[66] + $h[700] + $h[15] + $h[117] + $h[114],
        VS = $h[57] + $h[622] + $h[15] + $h[117] + $h[119],
        ZS = $h[57] + $h[414] + $h[66] + $h[700] + $h[15] + $h[117] + $h[119],
        KS = $h[57] + $h[622] + $h[43] + $h[674],
        JS = $h[57] + $h[414] + $h[66] + $h[700] + $h[43] + $h[674],
        QS = $h[123] + $h[75] + $h[997] + $h[75] + $h[998],
        tI = $h[57] + $h[254] + $h[43] + $h[193],
        iI = $h[378] + $h[1] + $h[501],
        nI = $h[57] + $h[622] + $h[1] + $h[673],
        eI = $h[383] + $h[111] + $h[384] + $h[1] + $h[2],
        sI = $h[57] + $h[678] + $h[1] + $h[673] + $h[43] + $h[679] + $h[220] + $h[221],
        hI = $h[378],
        rI = $h[57] + $h[678] + $h[1] + $h[673],
        aI = $h[62] + $h[36] + $h[122] + $h[1] + $h[501],
        oI = $h[254] + $h[36] + $h[122],
        fI = $h[254] + $h[66] + $h[184],
        _I = $h[57] + $h[924],
        cI = $h[57] + $h[254] + $h[66] + $h[680],
        uI = $h[58] + $h[220] + $h[999] + $h[43] + $h[193],
        dI = $h[57] + $h[254] + $h[20] + $h[991] + $h[264] + $h[265],
        lI = $h[57] + $h[200] + $h[264] + $h[265],
        bI = $h[57] + $h[963] + $h[111] + $h[285],
        vI = $h[57] + $h[203] + $h[204] + $h[205],
        gI = $h[57] + $h[200] + $h[1] + $h[673],
        yI = $h[66] + $h[680],
        pI = $h[20] + $h[991] + $h[264] + $h[265],
        xI = $h[970] + $h[75] + $h[966],
        mI = $h[57] + $h[186] + $h[66] + $h[184],
        EI = $h[57] + $h[186],
        wI = $h[435] + $h[18] + $h[1e3],
        TI = $h[435] + $h[43] + $h[1001],
        kI = $h[20] + $h[880],
        MI = $h[57] + $h[254] + $h[20] + $h[880],
        SI = $h[57] + $h[186] + $h[66] + $h[359],
        II = $h[57] + $h[186] + $h[20] + $h[428],
        OI = $h[916] + $h[43] + $h[193],
        AI = $h[57] + $h[254] + $h[20] + $h[1002] + $h[18] + $h[989],
        CI = $h[57] + $h[254] + $h[111] + $h[179] + $h[18] + $h[989],
        PI = $h[192] + $h[111] + $h[179] + $h[18] + $h[989],
        LI = $h[57] + $h[295] + $h[18] + $h[989] + $h[66] + $h[375],
        RI = $h[295] + $h[18] + $h[989] + $h[25] + $h[229],
        DI = $h[57] + $h[295] + $h[18] + $h[989],
        NI = $h[295] + $h[18] + $h[989] + $h[66] + $h[912],
        jI = $h[295] + $h[18] + $h[989] + $h[20] + $h[991] + $h[264] + $h[265],
        BI = $h[57] + $h[51] + $h[18] + $h[989],
        $I = $h[57] + $h[51] + $h[18] + $h[989] + $h[66] + $h[375],
        FI = $h[57] + $h[51] + $h[18] + $h[989] + $h[15] + $h[117],
        GI = $h[51] + $h[18] + $h[989] + $h[25] + $h[229],
        zI = $h[57] + $h[51] + $h[18] + $h[989] + $h[66] + $h[184],
        qI = $h[51] + $h[18] + $h[989] + $h[66] + $h[912],
        YI = $h[264] + $h[265],
        HI = $h[18] + $h[989] + $h[66] + $h[199],
        UI = $h[18] + $h[989] + $h[66] + $h[199] + $h[66] + $h[359],
        WI = $h[18] + $h[989] + $h[66] + $h[912],
        XI = $h[18] + $h[989] + $h[25] + $h[271] + $h[36] + $h[270],
        VI = $h[18] + $h[989] + $h[25] + $h[271] + $h[36] + $h[270] + $h[15] + $h[117],
        ZI = $h[18] + $h[989] + $h[20] + $h[991] + $h[1] + $h[673],
        KI = $h[18] + $h[989] + $h[20] + $h[991] + $h[264] + $h[265],
        JI = $h[18] + $h[989] + $h[25] + $h[271] + $h[1] + $h[702],
        QI = $h[18] + $h[989] + $h[25] + $h[271] + $h[703] + $h[704],
        tO = $h[18] + $h[989] + $h[15] + $h[990],
        iO = $h[18] + $h[989] + $h[15] + $h[990] + $h[66] + $h[359],
        nO = $h[214] + $h[18] + $h[989],
        eO = $h[57] + $h[705],
        sO = $h[20] + $h[1002] + $h[18] + $h[989],
        hO = $h[111] + $h[179] + $h[18] + $h[989],
        rO = $h[1003],
        aO = $h[351] + $h[75] + $h[344] + $h[75] + $h[1004],
        oO = $h[0] + $h[118] + $h[117],
        fO = $h[0] + $h[43] + $h[307] + $h[25] + $h[992],
        _O = $h[1005],
        cO = $h[192] + $h[40] + $h[1006],
        uO = $h[351] + $h[75] + $h[344] + $h[75] + $h[445],
        dO = $h[916] + $h[66] + $h[376],
        lO = $h[290] + $h[60] + $h[291] + $h[93] + $h[1007],
        bO = $h[1008] + $h[18] + $h[293] + $h[1] + $h[1009],
        vO = $h[222] + $h[93] + $h[1010],
        gO = $h[349] + $h[197] + $h[183],
        yO = $h[275],
        pO = $h[1011] + $h[197] + $h[213],
        xO = $h[392] + $h[97] + $h[264] + $h[393],
        mO = $h[77] + $h[392] + $h[97] + $h[264] + $h[393],
        EO = $h[435] + $h[97] + $h[971] + $h[484] + $h[120] + $h[1012] + $h[705] + $h[484] + $h[404] + $h[1013] + $h[174] + $h[97] + $h[1014] + $h[97] + $h[1015] + $h[97] + $h[239] + $h[103] + $h[68] + $h[69] + $h[303] + $h[70] + $h[303] + $h[70] + $h[303] + $h[70] + $h[303] + $h[1016] + $h[452] + $h[97] + $h[436] + $h[484] + $h[404],
        wO = $h[303] + $h[27] + $h[303],
        TO = $h[392] + $h[97] + $h[1] + $h[423],
        kO = $h[303],
        MO = $h[392] + $h[97] + $h[1] + $h[423] + $h[40] + $h[537],
        SO = $h[1017],
        IO = $h[481] + $h[75] + $h[363],
        OO = $h[964] + $h[75] + $h[974],
        AO = $h[72] + $h[1018],
        CO = $h[351] + $h[75] + $h[975] + $h[75] + $h[985] + $h[75] + $h[351],
        PO = $h[332] + $h[75] + $h[459],
        LO = $h[351] + $h[75] + $h[369] + $h[75] + $h[649],
        RO = $h[72] + $h[1019] + $h[1020] + $h[503],
        DO = $h[72] + $h[1021] + $h[60] + $h[303],
        NO = $h[408] + $h[75] + $h[1022],
        jO = $h[1023] + $h[77] + $h[1024],
        BO = $h[408] + $h[75] + $h[1025],
        $O = $h[1023] + $h[77] + $h[404],
        FO = $h[408] + $h[75] + $h[1026],
        GO = $h[1023] + $h[77] + $h[134],
        zO = $h[408] + $h[75] + $h[344],
        qO = $h[0] + $h[60] + $h[182] + $h[43] + $h[262] + $h[197] + $h[183],
        YO = $h[1027],
        HO = $h[62] + $h[40] + $h[56] + $h[1] + $h[507],
        UO = $h[75] + $h[1028],
        WO = $h[192] + $h[60] + $h[306] + $h[43] + $h[307],
        XO = $h[290] + $h[60] + $h[291] + $h[43] + $h[262] + $h[36] + $h[1029] + $h[20] + $h[1030],
        VO = $h[5] + $h[60] + $h[306],
        ZO = $h[0] + $h[197] + $h[213] + $h[43] + $h[262] + $h[197] + $h[183],
        KO = $h[123] + $h[511],
        JO = $h[151] + $h[462] + $h[27] + $h[1031],
        QO = $h[58] + $h[197] + $h[213] + $h[43] + $h[1032],
        tA = $h[1033] + $h[60] + $h[1034],
        iA = $h[1035] + $h[77] + $h[266],
        nA = $h[440],
        eA = $h[1036],
        sA = $h[1037],
        hA = $h[39] + $h[60] + $h[61],
        rA = $h[0] + $h[36] + $h[1038] + $h[197] + $h[446],
        aA = $h[1039] + $h[18] + $h[1040],
        oA = $h[23] + $h[221],
        fA = $h[111] + $h[156],
        _A = $h[181] + $h[66] + $h[375] + $h[23] + $h[221],
        cA = $h[264] + $h[934],
        uA = $h[0] + $h[60] + $h[182] + $h[43] + $h[262] + $h[220] + $h[522] + $h[60] + $h[61],
        dA = $h[1041],
        lA = $h[113] + $h[40] + $h[76],
        bA = $h[62] + $h[197] + $h[1042] + $h[60] + $h[61],
        vA = $h[1043],
        gA = $h[28] + $h[60] + $h[182],
        yA = $h[225] + $h[111] + $h[179],
        pA = $h[4] + $h[25] + $h[1044],
        xA = $h[380] + $h[111] + $h[179],
        mA = $h[419] + $h[18] + $h[19],
        EA = $h[248] + $h[66] + $h[680],
        wA = $h[419] + $h[18] + $h[293],
        TA = $h[132] + $h[66] + $h[1045],
        kA = $h[1046],
        MA = $h[437] + $h[111] + $h[179],
        SA = $h[1047],
        IA = $h[1033] + $h[66] + $h[1048],
        OA = $h[58] + $h[25] + $h[229],
        AA = $h[33] + $h[220] + $h[1049],
        CA = $h[28] + $h[1] + $h[1050] + $h[197] + $h[1042],
        PA = $h[1051],
        LA = $h[75] + $h[1052],
        RA = $h[1053],
        DA = $h[1054] + $h[892],
        NA = $h[36] + $h[1055] + $h[27] + $h[60] + $h[1056] + $h[228],
        jA = $h[11] + $h[66] + $h[939],
        BA = $h[1057] + $h[75] + $h[1058],
        $A = $h[66] + $h[375],
        FA = $h[62] + $h[60] + $h[182] + $h[1] + $h[1059],
        GA = $h[1057] + $h[75] + $h[1060],
        zA = $h[25] + $h[271],
        qA = $h[66] + $h[912],
        YA = $h[181] + $h[60] + $h[306],
        HA = $h[60] + $h[306],
        UA = $h[339] + $h[1061] + $h[907],
        WA = $h[441] + $h[40] + $h[76],
        XA = $h[62] + $h[25] + $h[992] + $h[60] + $h[1062],
        VA = $h[1063] + $h[60] + $h[269] + $h[25] + $h[992],
        ZA = $h[254] + $h[60] + $h[182],
        KA = $h[25] + $h[992] + $h[27] + $h[1] + $h[1064] + $h[150] + $h[293] + $h[27] + $h[60] + $h[269],
        JA = $h[441] + $h[220] + $h[221],
        QA = $h[1065] + $h[60] + $h[306],
        tC = $h[1066],
        iC = $h[1067] + $h[60] + $h[510],
        nC = $h[1068],
        eC = $h[486] + $h[1] + $h[507] + $h[36] + $h[508],
        sC = $h[929] + $h[75] + $h[932] + $h[75] + $h[217],
        hC = $h[929] + $h[75] + $h[932] + $h[75] + $h[188],
        rC = $h[929] + $h[75] + $h[344] + $h[75] + $h[321],
        aC = $h[929] + $h[75] + $h[344] + $h[75] + $h[629],
        oC = $h[33] + $h[64] + $h[1069],
        fC = $h[75] + $h[850],
        _C = $h[202] + $h[103] + $h[227] + $h[421] + $h[422] + $h[104] + $h[550] + $h[551] + $h[70] + $h[552] + $h[553] + $h[554] + $h[303] + $h[555] + $h[556] + $h[557] + $h[558] + $h[559] + $h[560] + $h[1070] + $h[179] + $h[1071] + $h[1066] + $h[220] + $h[1072] + $h[563] + $h[479] + $h[83] + $h[564] + $h[303] + $h[183] + $h[83] + $h[20] + $h[262] + $h[565] + $h[562] + $h[552] + $h[566] + $h[479] + $h[567] + $h[198] + $h[568] + $h[475] + $h[569] + $h[503] + $h[570] + $h[1073] + $h[1074] + $h[1075] + $h[572] + $h[23] + $h[1076] + $h[64] + $h[475] + $h[304] + $h[197] + $h[1077] + $h[304] + $h[1078] + $h[1079] + $h[197] + $h[1080] + $h[1081] + $h[421] + $h[1082] + $h[1083] + $h[1084] + $h[264] + $h[211] + $h[1085] + $h[183] + $h[1086] + $h[1087] + $h[36] + $h[183] + $h[43] + $h[558] + $h[1088] + $h[421] + $h[304] + $h[1089] + $h[293] + $h[304] + $h[1090] + $h[303] + $h[1091] + $h[644] + $h[60] + $h[1066] + $h[1092] + $h[644] + $h[1093] + $h[303] + $h[552] + $h[1094] + $h[1095] + $h[1096] + $h[83] + $h[16] + $h[23] + $h[717] + $h[558] + $h[83] + $h[16] + $h[119] + $h[1066] + $h[470] + $h[1097] + $h[1098] + $h[36] + $h[1099] + $h[335] + $h[1100] + $h[40] + $h[562] + $h[421] + $h[644] + $h[476] + $h[825] + $h[579] + $h[564] + $h[83] + $h[1101] + $h[876] + $h[1102] + $h[1103] + $h[1104] + $h[554] + $h[1105] + $h[554] + $h[36] + $h[558] + $h[645] + $h[891] + $h[644] + $h[450] + $h[645] + $h[1106] + $h[1107] + $h[1108] + $h[93] + $h[645] + $h[1109] + $h[114] + $h[211] + $h[264] + $h[470] + $h[25] + $h[211] + $h[1110] + $h[560] + $h[392] + $h[476] + $h[304] + $h[1111] + $h[644] + $h[593] + $h[66] + $h[560] + $h[1112] + $h[560] + $h[1113] + $h[1114] + $h[264] + $h[335] + $h[1115] + $h[470] + $h[98] + $h[475] + $h[1116] + $h[303] + $h[1117] + $h[293] + $h[25] + $h[552] + $h[1118] + $h[478] + $h[392] + $h[1119] + $h[18] + $h[1120] + $h[1121] + $h[645] + $h[798] + $h[1122] + $h[304] + $h[1123] + $h[556] + $h[421] + $h[20] + $h[1124] + $h[211] + $h[15] + $h[644] + $h[40] + $h[1125] + $h[1126] + $h[644] + $h[1127] + $h[304] + $h[560] + $h[1128] + $h[475] + $h[1129] + $h[262] + $h[1130] + $h[303] + $h[554] + $h[60] + $h[809] + $h[64] + $h[1131] + $h[1132] + $h[477] + $h[644] + $h[1066] + $h[1133] + $h[1134] + $h[475] + $h[1135] + $h[1136] + $h[1137] + $h[114] + $h[470] + $h[304] + $h[1138] + $h[421] + $h[1139] + $h[304] + $h[1140] + $h[1141] + $h[83] + $h[1142] + $h[1143] + $h[1144] + $h[645] + $h[98] + $h[475] + $h[421] + $h[1145] + $h[645] + $h[15] + $h[1146] + $h[1101] + $h[1147] + $h[147] + $h[477] + $h[197] + $h[198] + $h[564] + $h[83] + $h[64] + $h[478] + $h[703] + $h[798] + $h[1066] + $h[220] + $h[476] + $h[421] + $h[560] + $h[60] + $h[16] + $h[83] + $h[64] + $h[335] + $h[1066] + $h[1148] + $h[891] + $h[83] + $h[20] + $h[1149] + $h[204] + $h[1150] + $h[304] + $h[1151] + $h[1152] + $h[1077] + $h[1121] + $h[334] + $h[479] + $h[25] + $h[572] + $h[644] + $h[1153] + $h[562] + $h[560] + $h[43] + $h[211] + $h[1154] + $h[304] + $h[114] + $h[1066] + $h[18] + $h[198] + $h[303] + $h[392] + $h[1066] + $h[1155] + $h[1156] + $h[421] + $h[303] + $h[60] + $h[198] + $h[93] + $h[1156] + $h[64] + $h[645] + $h[1157] + $h[645] + $h[1158] + $h[1159] + $h[1160] + $h[183] + $h[18] + $h[552] + $h[1107] + $h[572] + $h[503] + $h[36] + $h[1161] + $h[421] + $h[1162] + $h[703] + $h[211] + $h[560] + $h[1163] + $h[421] + $h[264] + $h[479] + $h[335] + $h[1164] + $h[66] + $h[421] + $h[83] + $h[1165] + $h[220] + $h[579] + $h[147] + $h[644] + $h[421] + $h[211] + $h[220] + $h[562] + $h[1166] + $h[1162] + $h[1167] + $h[1168] + $h[264] + $h[560] + $h[303] + $h[264] + $h[304] + $h[1066] + $h[1169] + $h[645] + $h[1066] + $h[503] + $h[1170] + $h[1171] + $h[1172] + $h[264] + $h[1173] + $h[1174] + $h[478] + $h[703] + $h[1175] + $h[204] + $h[83] + $h[23] + $h[554] + $h[304] + $h[421] + $h[560] + $h[334] + $h[421] + $h[562] + $h[1176] + $h[1177] + $h[36] + $h[1178] + $h[1158] + $h[334] + $h[1179] + $h[476] + $h[93] + $h[552] + $h[1180] + $h[293] + $h[503] + $h[1173] + $h[111] + $h[1181] + $h[1066] + $h[262] + $h[1182] + $h[335] + $h[1183] + $h[477] + $h[1184] + $h[588] + $h[304] + $h[910] + $h[83] + $h[421] + $h[1185] + $h[392] + $h[477] + $h[1066] + $h[1186] + $h[392] + $h[1156] + $h[64] + $h[1187] + $h[644] + $h[1066] + $h[1188] + $h[64] + $h[1189] + $h[1190] + $h[1191] + $h[303] + $h[1192] + $h[1193] + $h[64] + $h[645] + $h[554] + $h[25] + $h[1194] + $h[335] + $h[1173] + $h[1195] + $h[304] + $h[572] + $h[114] + $h[475] + $h[1196] + $h[477] + $h[83] + $h[1197] + $h[1198] + $h[1199] + $h[83] + $h[23] + $h[478] + $h[1200] + $h[588] + $h[1201] + $h[475] + $h[1066] + $h[1202] + $h[304] + $h[1203] + $h[293] + $h[303] + $h[1204] + $h[411] + $h[179] + $h[23] + $h[558] + $h[114] + $h[1077] + $h[1205] + $h[1206] + $h[1207] + $h[1077] + $h[111] + $h[1208] + $h[335] + $h[40] + $h[1173] + $h[20] + $h[334] + $h[1209] + $h[1173] + $h[264] + $h[1210] + $h[1211] + $h[1212] + $h[411] + $h[1213] + $h[1214] + $h[293] + $h[211] + $h[114] + $h[1215] + $h[334] + $h[204] + $h[1156] + $h[562] + $h[15] + $h[1156] + $h[1216] + $h[334] + $h[1115] + $h[645] + $h[183] + $h[211] + $h[23] + $h[262] + $h[98] + $h[552] + $h[119] + $h[478] + $h[703] + $h[211] + $h[66] + $h[1217] + $h[147] + $h[1156] + $h[147] + $h[1218] + $h[564] + $h[1219] + $h[644] + $h[1220] + $h[1066] + $h[36] + $h[1221] + $h[1222] + $h[470] + $h[644] + $h[147] + $h[1223] + $h[147] + $h[335] + $h[114] + $h[552] + $h[1066] + $h[411] + $h[211] + $h[198] + $h[1224] + $h[1225] + $h[264] + $h[303] + $h[475] + $h[264] + $h[304] + $h[477] + $h[1] + $h[572] + $h[111] + $h[262] + $h[119] + $h[798] + $h[304] + $h[475] + $h[335] + $h[1226] + $h[114] + $h[645] + $h[1227] + $h[334] + $h[1] + $h[554] + $h[503] + $h[66] + $h[479] + $h[411] + $h[798] + $h[335] + $h[16] + $h[36] + $h[1228] + $h[1229] + $h[293] + $h[119] + $h[334] + $h[585] + $h[83] + $h[264] + $h[1230] + $h[1231] + $h[554] + $h[20] + $h[421] + $h[262] + $h[334] + $h[891] + $h[25] + $h[1232] + $h[204] + $h[1233] + $h[1234] + $h[421] + $h[470] + $h[1235] + $h[1066] + $h[1236] + $h[335] + $h[264] + $h[179] + $h[93] + $h[1156] + $h[303] + $h[361] + $h[588] + $h[1237] + $h[1238] + $h[597] + $h[179] + $h[503] + $h[1239] + $h[503] + $h[183] + $h[1240] + $h[478] + $h[40] + $h[334] + $h[43] + $h[1241] + $h[1242] + $h[1066] + $h[198] + $h[304] + $h[877] + $h[1243] + $h[1244] + $h[211] + $h[1245] + $h[293] + $h[220] + $h[798] + $h[1246] + $h[644] + $h[798] + $h[60] + $h[478] + $h[15] + $h[503] + $h[15] + $h[572] + $h[1247] + $h[585] + $h[644] + $h[183] + $h[1248] + $h[1249] + $h[1250] + $h[479] + $h[204] + $h[83] + $h[1251] + $h[211] + $h[23] + $h[579] + $h[1252] + $h[470] + $h[1253] + $h[891] + $h[703] + $h[579] + $h[1254] + $h[1255] + $h[869] + $h[1256] + $h[1257] + $h[1258] + $h[1259] + $h[66] + $h[303] + $h[564] + $h[562] + $h[1260] + $h[645] + $h[1261] + $h[1262] + $h[644] + $h[554] + $h[1263] + $h[198] + $h[66] + $h[503] + $h[1264] + $h[392] + $h[475] + $h[645] + $h[1265] + $h[15] + $h[1266] + $h[1267] + $h[1156] + $h[40] + $h[183] + $h[1268] + $h[476] + $h[847] + $h[18] + $h[645] + $h[891] + $h[335] + $h[470] + $h[411] + $h[477] + $h[645] + $h[264] + $h[560] + $h[36] + $h[645] + $h[572] + $h[66] + $h[1269] + $h[644] + $h[1270] + $h[204] + $h[470] + $h[20] + $h[303] + $h[1173] + $h[111] + $h[562] + $h[1156] + $h[1271] + $h[1066] + $h[476] + $h[36] + $h[562] + $h[475] + $h[645] + $h[572] + $h[1272] + $h[579] + $h[645] + $h[1066] + $h[66] + $h[1273] + $h[1274] + $h[60] + $h[572] + $h[644] + $h[477] + $h[1275] + $h[211] + $h[1276] + $h[1066] + $h[1156] + $h[211] + $h[64] + $h[1277] + $h[645] + $h[1278] + $h[334] + $h[43] + $h[1173] + $h[15] + $h[644] + $h[1279] + $h[411] + $h[1173] + $h[1280] + $h[585] + $h[644] + $h[293] + $h[1281] + $h[262] + $h[83] + $h[1282] + $h[220] + $h[554] + $h[211] + $h[1283] + $h[588] + $h[111] + $h[1173] + $h[1284] + $h[303] + $h[1162] + $h[1285] + $h[1286] + $h[83] + $h[1287] + $h[1066] + $h[1288] + $h[1289] + $h[40] + $h[503] + $h[552] + $h[335] + $h[479] + $h[114] + $h[1290] + $h[602] + $h[503] + $h[603] + $h[160],
        cC = $h[202] + $h[103] + $h[227] + $h[421] + $h[422] + $h[104] + $h[550] + $h[551] + $h[70] + $h[552] + $h[553] + $h[554] + $h[303] + $h[555] + $h[556] + $h[557] + $h[558] + $h[559] + $h[560] + $h[1291] + $h[560] + $h[1292] + $h[421] + $h[93] + $h[198] + $h[1066] + $h[645] + $h[563] + $h[479] + $h[83] + $h[564] + $h[303] + $h[183] + $h[83] + $h[20] + $h[262] + $h[565] + $h[562] + $h[552] + $h[566] + $h[479] + $h[567] + $h[198] + $h[568] + $h[475] + $h[569] + $h[503] + $h[570] + $h[1073] + $h[1293] + $h[1075] + $h[572] + $h[23] + $h[477] + $h[1294] + $h[1162] + $h[1066] + $h[1295] + $h[475] + $h[1296] + $h[1077] + $h[335] + $h[579] + $h[1297] + $h[560] + $h[1298] + $h[477] + $h[1299] + $h[558] + $h[18] + $h[552] + $h[1300] + $h[262] + $h[303] + $h[1301] + $h[1290] + $h[64] + $h[1302] + $h[392] + $h[16] + $h[303] + $h[18] + $h[1066] + $h[1] + $h[1303] + $h[1304] + $h[470] + $h[20] + $h[475] + $h[23] + $h[891] + $h[334] + $h[1305] + $h[293] + $h[392] + $h[588] + $h[264] + $h[1306] + $h[1307] + $h[560] + $h[1308] + $h[1077] + $h[559] + $h[293] + $h[264] + $h[83] + $h[197] + $h[478] + $h[1309] + $h[579] + $h[562] + $h[198] + $h[83] + $h[40] + $h[476] + $h[303] + $h[1310] + $h[1311] + $h[211] + $h[114] + $h[579] + $h[335] + $h[15] + $h[16] + $h[23] + $h[1312] + $h[1313] + $h[421] + $h[183] + $h[1314] + $h[1315] + $h[411] + $h[1316] + $h[119] + $h[477] + $h[20] + $h[1317] + $h[1318] + $h[558] + $h[334] + $h[16] + $h[1066] + $h[475] + $h[98] + $h[1319] + $h[60] + $h[1320] + $h[335] + $h[114] + $h[198] + $h[1066] + $h[262] + $h[1321] + $h[334] + $h[891] + $h[1322] + $h[579] + $h[1323] + $h[798] + $h[645] + $h[1324] + $h[20] + $h[179] + $h[211] + $h[1066] + $h[1325] + $h[1326] + $h[421] + $h[1327] + $h[585] + $h[1328] + $h[1329] + $h[421] + $h[562] + $h[1330] + $h[1331] + $h[421] + $h[572] + $h[18] + $h[1332] + $h[1301] + $h[579] + $h[1333] + $h[477] + $h[1334] + $h[198] + $h[264] + $h[211] + $h[479] + $h[303] + $h[1335] + $h[303] + $h[1336] + $h[36] + $h[645] + $h[18] + $h[1162] + $h[421] + $h[51] + $h[411] + $h[303] + $h[1337] + $h[1338] + $h[1066] + $h[1339] + $h[476] + $h[503] + $h[1340] + $h[1162] + $h[197] + $h[477] + $h[1341] + $h[198] + $h[18] + $h[303] + $h[1342] + $h[1156] + $h[1343] + $h[1344] + $h[1345] + $h[554] + $h[1346] + $h[264] + $h[1347] + $h[1348] + $h[20] + $h[1349] + $h[264] + $h[560] + $h[1350] + $h[1173] + $h[1351] + $h[335] + $h[577] + $h[1077] + $h[211] + $h[421] + $h[335] + $h[23] + $h[1352] + $h[1309] + $h[1066] + $h[798] + $h[60] + $h[179] + $h[304] + $h[1353] + $h[503] + $h[1354] + $h[1355] + $h[20] + $h[554] + $h[644] + $h[1356] + $h[470] + $h[564] + $h[1357] + $h[211] + $h[1066] + $h[304] + $h[147] + $h[293] + $h[64] + $h[588] + $h[114] + $h[479] + $h[645] + $h[564] + $h[1156] + $h[211] + $h[293] + $h[303] + $h[411] + $h[262] + $h[335] + $h[564] + $h[335] + $h[1358] + $h[18] + $h[16] + $h[204] + $h[560] + $h[1359] + $h[1360] + $h[1361] + $h[1362] + $h[1363] + $h[83] + $h[470] + $h[392] + $h[1364] + $h[60] + $h[304] + $h[1365] + $h[392] + $h[816] + $h[392] + $h[1366] + $h[1367] + $h[93] + $h[470] + $h[1368] + $h[1077] + $h[83] + $h[478] + $h[1350] + $h[16] + $h[562] + $h[1369] + $h[1370] + $h[1371] + $h[111] + $h[1173] + $h[18] + $h[1372] + $h[564] + $h[552] + $h[1373] + $h[1374] + $h[392] + $h[1375] + $h[392] + $h[335] + $h[478] + $h[1376] + $h[1377] + $h[36] + $h[1378] + $h[18] + $h[585] + $h[1379] + $h[552] + $h[562] + $h[114] + $h[1162] + $h[562] + $h[93] + $h[1077] + $h[1347] + $h[470] + $h[15] + $h[503] + $h[43] + $h[726] + $h[1156] + $h[114] + $h[560] + $h[15] + $h[572] + $h[1380] + $h[476] + $h[703] + $h[503] + $h[1381] + $h[588] + $h[564] + $h[304] + $h[93] + $h[579] + $h[644] + $h[15] + $h[552] + $h[98] + $h[179] + $h[1382] + $h[479] + $h[304] + $h[1383] + $h[1384] + $h[644] + $h[1385] + $h[1386] + $h[1387] + $h[1388] + $h[304] + $h[1389] + $h[197] + $h[1173] + $h[1390] + $h[585] + $h[847] + $h[197] + $h[1391] + $h[304] + $h[558] + $h[1] + $h[1392] + $h[119] + $h[211] + $h[558] + $h[211] + $h[119] + $h[83] + $h[579] + $h[60] + $h[1393] + $h[645] + $h[579] + $h[1394] + $h[1156] + $h[220] + $h[1395] + $h[98] + $h[476] + $h[1312] + $h[1396] + $h[264] + $h[588] + $h[1397] + $h[1398] + $h[40] + $h[1399] + $h[1066] + $h[891] + $h[204] + $h[588] + $h[302] + $h[179] + $h[703] + $h[588] + $h[264] + $h[334] + $h[264] + $h[1400] + $h[211] + $h[114] + $h[304] + $h[111] + $h[1401] + $h[304] + $h[262] + $h[18] + $h[644] + $h[1402] + $h[1153] + $h[1403] + $h[1404] + $h[703] + $h[16] + $h[40] + $h[334] + $h[572] + $h[220] + $h[477] + $h[1405] + $h[645] + $h[1] + $h[334] + $h[1] + $h[304] + $h[554] + $h[220] + $h[558] + $h[1406] + $h[585] + $h[1407] + $h[1408] + $h[303] + $h[554] + $h[703] + $h[293] + $h[1409] + $h[560] + $h[1410] + $h[554] + $h[1411] + $h[262] + $h[1412] + $h[579] + $h[335] + $h[1413] + $h[720] + $h[40] + $h[262] + $h[1104] + $h[304] + $h[66] + $h[588] + $h[98] + $h[552] + $h[562] + $h[114] + $h[1414] + $h[1415] + $h[183] + $h[64] + $h[1416] + $h[1156] + $h[303] + $h[119] + $h[304] + $h[1417] + $h[83] + $h[1418] + $h[334] + $h[470] + $h[64] + $h[1419] + $h[1420] + $h[1230] + $h[197] + $h[211] + $h[1421] + $h[83] + $h[1422] + $h[645] + $h[23] + $h[477] + $h[114] + $h[198] + $h[64] + $h[644] + $h[475] + $h[1423] + $h[83] + $h[1424] + $h[579] + $h[503] + $h[588] + $h[23] + $h[198] + $h[335] + $h[1077] + $h[15] + $h[1425] + $h[1426] + $h[1427] + $h[25] + $h[1428] + $h[1429] + $h[304] + $h[18] + $h[1430] + $h[335] + $h[1431] + $h[1269] + $h[644] + $h[475] + $h[20] + $h[588] + $h[23] + $h[1432] + $h[43] + $h[421] + $h[470] + $h[40] + $h[1433] + $h[1434] + $h[60] + $h[16] + $h[25] + $h[1435] + $h[83] + $h[479] + $h[1436] + $h[1358] + $h[421] + $h[411] + $h[1066] + $h[18] + $h[198] + $h[503] + $h[1437] + $h[23] + $h[1173] + $h[1438] + $h[572] + $h[147] + $h[1077] + $h[211] + $h[1439] + $h[562] + $h[1440] + $h[303] + $h[1441] + $h[421] + $h[23] + $h[588] + $h[111] + $h[1442] + $h[421] + $h[1443] + $h[562] + $h[478] + $h[1444] + $h[644] + $h[470] + $h[60] + $h[579] + $h[703] + $h[470] + $h[562] + $h[1445] + $h[98] + $h[476] + $h[303] + $h[564] + $h[574] + $h[36] + $h[558] + $h[1066] + $h[25] + $h[183] + $h[220] + $h[211] + $h[1173] + $h[83] + $h[1173] + $h[562] + $h[475] + $h[1446] + $h[475] + $h[1447] + $h[334] + $h[23] + $h[645] + $h[20] + $h[1448] + $h[1449] + $h[503] + $h[60] + $h[1450] + $h[703] + $h[1451] + $h[1452],
        uC = $h[1453] + $h[172],
        dC = $h[1454] + $h[27] + $h[303] + $h[77] + $h[83] + $h[1162] + $h[27] + $h[1455] + $h[97] + $h[543],
        lC = $h[1456],
        bC = $h[797],
        vC = $h[77] + $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[23] + $h[394] + $h[27] + $h[396],
        gC = $h[1454] + $h[103] + $h[304] + $h[104] + $h[263] + $h[97] + $h[239] + $h[484] + $h[68] + $h[69] + $h[303] + $h[402] + $h[303] + $h[402] + $h[303] + $h[402] + $h[303] + $h[77] + $h[503] + $h[71],
        yC = $h[77] + $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[23] + $h[394],
        pC = $h[1454] + $h[103] + $h[303] + $h[104],
        xC = $h[1457],
        mC = $h[103] + $h[1454] + $h[27] + $h[211] + $h[1162] + $h[27] + $h[1458] + $h[97] + $h[659] + $h[69] + $h[303] + $h[77] + $h[335] + $h[402] + $h[303] + $h[402] + $h[303] + $h[77] + $h[335] + $h[402] + $h[304] + $h[71],
        EC = $h[77] + $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[23] + $h[394] + $h[103] + $h[410],
        wC = $h[1454] + $h[103] + $h[304] + $h[104],
        TC = $h[103] + $h[1454] + $h[27] + $h[303] + $h[77] + $h[211] + $h[1162] + $h[27] + $h[710],
        kC = $h[1051] + $h[43] + $h[193],
        MC = $h[77] + $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[66] + $h[523] + $h[43] + $h[1404],
        SC = $h[688] + $h[484] + $h[405] + $h[104] + $h[512] + $h[97] + $h[1459] + $h[484] + $h[257] + $h[97] + $h[512] + $h[104] + $h[512] + $h[97] + $h[622] + $h[1460] + $h[671] + $h[27] + $h[303] + $h[172] + $h[27] + $h[303] + $h[172] + $h[27] + $h[304] + $h[172] + $h[1012] + $h[263] + $h[97] + $h[239] + $h[484] + $h[68] + $h[69] + $h[1461] + $h[70] + $h[1461] + $h[70] + $h[1461] + $h[70] + $h[303] + $h[77] + $h[211] + $h[1016] + $h[257] + $h[97] + $h[482] + $h[484] + $h[334] + $h[172] + $h[104] + $h[1462] + $h[484] + $h[304] + $h[172] + $h[104],
        IC = $h[1462] + $h[97] + $h[86] + $h[484] + $h[335] + $h[172] + $h[104],
        OC = $h[1462] + $h[97] + $h[87] + $h[484] + $h[335] + $h[172] + $h[104],
        AC = $h[77] + $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[66] + $h[523] + $h[40] + $h[1463],
        CC = $h[103] + $h[1454] + $h[27] + $h[211] + $h[1162] + $h[27] + $h[1458] + $h[97] + $h[659] + $h[69] + $h[303] + $h[77] + $h[335] + $h[402] + $h[303] + $h[402] + $h[303] + $h[77] + $h[335] + $h[402] + $h[304] + $h[1016],
        PC = $h[392] + $h[97] + $h[264] + $h[393] + $h[97] + $h[66] + $h[523] + $h[40] + $h[1463],
        LC = $h[33] + $h[411],
        RC = $h[909] + $h[197] + $h[1464],
        DC = $h[43] + $h[1465],
        NC = $h[1466],
        jC = $h[1467],
        BC = $h[1468] + $h[75] + $h[1469],
        $C = $h[1455] + $h[15] + $h[450],
        FC = $h[1455] + $h[15] + $h[450] + $h[66] + $h[1470],
        GC = $h[190] + $h[111] + $h[276],
        zC = $h[1471] + $h[75] + $h[1472],
        qC = $h[444] + $h[75] + $h[1473] + $h[75] + $h[459] + $h[75] + $h[1474],
        YC = $h[444] + $h[75] + $h[965] + $h[75] + $h[1473] + $h[75] + $h[459] + $h[75] + $h[1474],
        HC = $h[444] + $h[75] + $h[965] + $h[75] + $h[1473] + $h[75] + $h[459] + $h[75] + $h[1475],
        UC = $h[1035],
        WC = $h[11] + $h[36] + $h[1476],
        XC = $h[28] + $h[36] + $h[1476],
        VC = $h[942] + $h[36] + $h[1477],
        ZC = $h[214] + $h[40] + $h[170],
        KC = $h[0] + $h[36] + $h[37] + $h[36] + $h[1477] + $h[66] + $h[912],
        JC = $h[36] + $h[1477] + $h[40] + $h[206] + $h[197] + $h[1042],
        QC = $h[1478],
        tP = $h[691] + $h[75] + $h[187] + $h[75] + $h[693],
        iP = $h[181] + $h[60] + $h[306] + $h[43] + $h[262] + $h[197] + $h[1042],
        nP = $h[1479] + $h[25] + $h[1480] + $h[111] + $h[179],
        eP = $h[51] + $h[25] + $h[1481] + $h[40] + $h[170],
        sP = $h[1479] + $h[25] + $h[1480] + $h[20] + $h[1002],
        hP = $h[58] + $h[1] + $h[533] + $h[40] + $h[170],
        rP = $h[51] + $h[25] + $h[1481],
        aP = $h[1482],
        oP = $h[1483],
        fP = $h[351] + $h[75] + $h[217],
        _P = $h[0] + $h[36] + $h[37] + $h[66] + $h[359],
        cP = $h[1] + $h[1484] + $h[60] + $h[306] + $h[197] + $h[1042],
        uP = $h[443] + $h[40] + $h[170],
        dP = $h[1] + $h[1484] + $h[66] + $h[375] + $h[197] + $h[1042],
        lP = $h[181] + $h[25] + $h[271] + $h[43] + $h[262] + $h[197] + $h[1042],
        bP = $h[1] + $h[1484] + $h[25] + $h[271] + $h[197] + $h[1042],
        vP = $h[60] + $h[306] + $h[123],
        gP = $h[102] + $h[36] + $h[1477],
        yP = $h[1] + $h[1484] + $h[66] + $h[1485] + $h[60] + $h[306] + $h[197] + $h[1042],
        pP = $h[964] + $h[75] + $h[1486] + $h[75] + $h[1487] + $h[75] + $h[1488] + $h[75] + $h[1489] + $h[75] + $h[1490],
        xP = $h[1491],
        mP = $h[392] + $h[97] + $h[25] + $h[992] + $h[60] + $h[1492],
        EP = $h[1493] + $h[1494] + $h[1366] + $h[60] + $h[27] + $h[304] + $h[172],
        wP = $h[503] + $h[172],
        TP = $h[512] + $h[66] + $h[700],
        kP = $h[42] + $h[60] + $h[1062],
        MP = $h[62] + $h[64] + $h[65] + $h[1] + $h[507],
        SP = $h[39] + $h[60] + $h[1062],
        IP = $h[62] + $h[66] + $h[184] + $h[1] + $h[507],
        OP = $h[181] + $h[892],
        AP = $h[39] + $h[60] + $h[1062] + $h[204] + $h[1495] + $h[1] + $h[1496] + $h[15] + $h[198] + $h[204] + $h[896],
        CP = $h[524],
        PP = $h[58] + $h[111] + $h[156],
        LP = $h[33] + $h[60] + $h[1497],
        RP = $h[11] + $h[60] + $h[61] + $h[25] + $h[509],
        DP = $h[791] + $h[60] + $h[1492],
        NP = $h[1498] + $h[66] + $h[910] + $h[23] + $h[911],
        jP = $h[909] + $h[36] + $h[1499] + $h[1] + $h[1496] + $h[111] + $h[179] + $h[15] + $h[1500],
        BP = $h[419] + $h[111] + $h[179] + $h[15] + $h[1500],
        $P = $h[33] + $h[60] + $h[1501],
        FP = $h[60] + $h[1062] + $h[197] + $h[1042],
        GP = $h[1502] + $h[197] + $h[201],
        zP = $h[1503],
        qP = $h[1502] + $h[27] + $h[227] + $h[228],
        YP = $h[27] + $h[798] + $h[27],
        HP = $h[1504] + $h[60] + $h[1056],
        UP = $h[443] + $h[36] + $h[1505] + $h[60] + $h[182],
        WP = $h[1057] + $h[75] + $h[692] + $h[75] + $h[1506],
        XP = $h[59] + $h[197] + $h[1042] + $h[60] + $h[61],
        VP = $h[1057] + $h[75] + $h[1507],
        ZP = $h[316] + $h[60] + $h[1056],
        KP = $h[1508] + $h[204] + $h[1509],
        JP = $h[1510],
        QP = $h[1057] + $h[75] + $h[692] + $h[75] + $h[1511],
        tL = $h[183] + $h[66] + $h[680],
        iL = $h[202] + $h[40] + $h[56] + $h[1] + $h[507] + $h[36] + $h[508],
        nL = $h[214] + $h[25] + $h[271] + $h[197] + $h[183],
        eL = $h[33] + $h[1] + $h[1512] + $h[40] + $h[170],
        sL = $h[72] + $h[1513],
        hL = $h[11] + $h[40] + $h[206] + $h[66] + $h[919] + $h[43] + $h[262] + $h[197] + $h[213],
        rL = $h[14],
        aL = $h[33] + $h[93] + $h[1514],
        oL = $h[467] + $h[66] + $h[919],
        fL = $h[917],
        _L = $h[981] + $h[197] + $h[213],
        cL = $h[373] + $h[75] + $h[1507],
        uL = $h[981],
        dL = $h[373] + $h[75] + $h[692] + $h[75] + $h[1511],
        lL = $h[655] + $h[75] + $h[1515] + $h[75] + $h[951] + $h[75] + $h[234],
        bL = $h[655] + $h[75] + $h[1515] + $h[75] + $h[955] + $h[75] + $h[234],
        vL = $h[1516] + $h[75] + $h[1506],
        gL = $h[1516] + $h[75] + $h[1511],
        yL = $h[655] + $h[75] + $h[1515] + $h[75] + $h[951],
        pL = $h[290] + $h[60] + $h[291] + $h[64] + $h[1069] + $h[123],
        xL = $h[1516] + $h[75] + $h[1517],
        mL = $h[1518] + $h[97] + $h[440],
        EL = $h[1519] + $h[97] + $h[440],
        wL = $h[364] + $h[75] + $h[363],
        TL = $h[1520] + $h[97] + $h[440],
        kL = $h[68] + $h[69] + $h[303] + $h[402] + $h[1521] + $h[402] + $h[303] + $h[402] + $h[304] + $h[71],
        ML = $h[72] + $h[1522] + $h[303],
        SL = $h[1523],
        IL = $h[1524],
        OL = $h[1525] + $h[75] + $h[1511],
        AL = $h[93] + $h[1526] + $h[197] + $h[1042],
        CL = $h[1516],
        PL = $h[33] + $h[66] + $h[1527],
        LL = $h[167] + $h[111] + $h[179] + $h[111] + $h[986],
        RL = $h[58] + $h[66] + $h[939],
        DL = $h[436] + $h[18] + $h[681],
        NL = $h[1528] + $h[75] + $h[1529],
        jL = $h[392] + $h[97] + $h[111] + $h[1530],
        BL = $h[72] + $h[1531],
        $L = $h[304] + $h[172] + $h[27] + $h[1493] + $h[1494] + $h[36] + $h[562] + $h[36] + $h[562] + $h[36] + $h[562],
        FL = $h[83] + $h[172] + $h[27] + $h[334] + $h[172],
        GL = $h[0] + $h[111] + $h[1530],
        zL = $h[908] + $h[111] + $h[285],
        qL = $h[1532] + $h[1187] + $h[1533],
        YL = $h[435] + $h[1] + $h[1534],
        HL = $h[1535],
        UL = $h[181] + $h[20] + $h[1536],
        WL = $h[908] + $h[36] + $h[1537],
        XL = $h[1528] + $h[75] + $h[1538],
        VL = $h[909] + $h[111] + $h[1530],
        ZL = $h[909] + $h[204] + $h[1539] + $h[564] + $h[1540],
        KL = $h[1035] + $h[77] + $h[316] + $h[77] + $h[1478],
        JL = $h[1035] + $h[77] + $h[1541],
        QL = $h[1035] + $h[77] + $h[316] + $h[77] + $h[879],
        tR = $h[1035] + $h[77] + $h[1542],
        iR = $h[1035] + $h[77] + $h[1543],
        nR = $h[373] + $h[75] + $h[692] + $h[75] + $h[1506],
        eR = $h[981] + $h[77] + $h[316] + $h[77] + $h[1478],
        sR = $h[981] + $h[77] + $h[1541],
        hR = $h[981] + $h[77] + $h[316] + $h[77] + $h[879],
        rR = $h[1525] + $h[75] + $h[1506],
        aR = $h[440] + $h[77] + $h[1478],
        oR = $h[1544],
        fR = $h[440] + $h[77] + $h[879],
        _R = $h[1545],
        cR = $h[210] + $h[77] + $h[879],
        uR = $h[351] + $h[75] + $h[973],
        dR = $h[339] + $h[77] + $h[914],
        lR = $h[436] + $h[77] + $h[1478],
        bR = $h[436] + $h[77] + $h[1546],
        vR = $h[436] + $h[77] + $h[879],
        gR = $h[136] + $h[75] + $h[127],
        yR = $h[1547] + $h[77] + $h[141],
        pR = $h[443] + $h[197] + $h[1042] + $h[220] + $h[221],
        xR = $h[322] + $h[197] + $h[1548],
        mR = $h[444] + $h[75] + $h[231] + $h[75] + $h[1549],
        ER = $h[1550],
        wR = $h[444] + $h[75] + $h[231] + $h[75] + $h[1551],
        TR = $h[1552],
        kR = $h[444] + $h[75] + $h[231] + $h[75] + $h[1553],
        MR = $h[1554],
        SR = $h[444] + $h[75] + $h[231] + $h[75] + $h[1555] + $h[75] + $h[1556] + $h[75] + $h[351],
        IR = $h[181] + $h[77] + $h[1557] + $h[77] + $h[339],
        OR = $h[444] + $h[75] + $h[231] + $h[75] + $h[1555] + $h[75] + $h[351],
        AR = $h[181] + $h[77] + $h[339],
        CR = $h[181] + $h[77] + $h[952],
        PR = $h[181] + $h[77] + $h[203],
        LR = $h[444] + $h[75] + $h[231] + $h[75] + $h[1555] + $h[75] + $h[320],
        RR = $h[444] + $h[75] + $h[231] + $h[75] + $h[1555] + $h[75] + $h[187],
        DR = $h[444] + $h[75] + $h[231] + $h[75] + $h[655],
        NR = $h[66] + $h[939] + $h[197] + $h[1042],
        jR = $h[220] + $h[1558] + $h[197] + $h[1042],
        BR = $h[204] + $h[1539] + $h[564] + $h[1540] + $h[197] + $h[1042],
        $R = $h[36] + $h[1499] + $h[1] + $h[1496] + $h[197] + $h[1042],
        FR = $h[60] + $h[1559] + $h[197] + $h[1042],
        GR = $h[40] + $h[1006] + $h[197] + $h[1042],
        zR = $h[25] + $h[1560],
        qR = $h[0] + $h[1561] + $h[193],
        YR = $h[1562],
        HR = $h[1563],
        UR = $h[1564],
        WR = $h[1565],
        XR = $h[1566] + $h[111] + $h[285],
        VR = $h[1567] + $h[25] + $h[1568],
        ZR = $h[1569] + $h[75] + $h[364],
        KR = $h[1569] + $h[75] + $h[357],
        JR = $h[1569] + $h[75] + $h[481],
        QR = $h[1569] + $h[75] + $h[358],
        tD = $h[1569] + $h[75] + $h[363],
        iD = $h[1569] + $h[75] + $h[480],
        nD = $h[1570],
        eD = $h[1571] + $h[77] + $h[1572],
        sD = $h[1570] + $h[77] + $h[558],
        hD = $h[1570] + $h[77] + $h[1173],
        rD = $h[993] + $h[75] + $h[344] + $h[75] + $h[1573],
        aD = $h[993] + $h[75] + $h[344] + $h[75] + $h[1573] + $h[75] + $h[353],
        oD = $h[993] + $h[75] + $h[344] + $h[75] + $h[1573] + $h[75] + $h[355],
        fD = $h[993] + $h[75] + $h[344] + $h[75] + $h[1574] + $h[75] + $h[1575],
        _D = $h[33] + $h[411] + $h[1576] + $h[36] + $h[1577],
        cD = $h[63] + $h[66] + $h[184],
        uD = $h[33] + $h[25] + $h[1578],
        dD = $h[305] + $h[1] + $h[2] + $h[36] + $h[1577],
        lD = $h[558] + $h[264] + $h[702],
        bD = $h[1579],
        vD = $h[1173] + $h[264] + $h[702],
        gD = $h[261] + $h[111] + $h[285],
        yD = $h[942] + $h[25] + $h[338],
        pD = $h[75] + $h[179] + $h[304] + $h[1162],
        xD = $h[75] + $h[750],
        mD = $h[251] + $h[1580],
        ED = $h[251] + $h[1115],
        wD = $h[465],
        TD = $h[465] + $h[119],
        kD = $h[465] + $h[114],
        MD = $h[305] + $h[43] + $h[193],
        SD = $h[261] + $h[93] + $h[1007],
        ID = $h[261] + $h[36] + $h[464],
        OD = $h[254] + $h[25] + $h[338] + $h[36] + $h[464],
        AD = $h[1581],
        CD = $h[1582] + $h[25] + $h[338] + $h[36] + $h[464],
        PD = $h[0] + $h[220] + $h[1583] + $h[197] + $h[1584],
        LD = $h[1585],
        RD = $h[1586],
        DD = $h[130] + $h[66] + $h[1045],
        ND = $h[33] + $h[93] + $h[1587],
        jD = $h[39],
        BD = $h[1478] + $h[18] + $h[1588],
        $D = $h[43] + $h[1589] + $h[25] + $h[1560],
        FD = $h[1590],
        GD = $h[1591],
        zD = $h[223],
        qD = $h[1592],
        YD = $h[1593] + $h[75] + $h[1594] + $h[75] + $h[1595],
        HD = $h[1593] + $h[75] + $h[1594] + $h[75] + $h[1596],
        UD = $h[370] + $h[75] + $h[231] + $h[75] + $h[1597],
        WD = $h[370] + $h[75] + $h[231] + $h[75] + $h[1598],
        XD = $h[977],
        VD = $h[0] + $h[23] + $h[221] + $h[66] + $h[184],
        ZD = $h[0] + $h[264] + $h[702],
        KD = $h[1599],
        JD = $h[0] + $h[93] + $h[268],
        QD = $h[482] + $h[220] + $h[221],
        tN = $h[465] + $h[304],
        iN = $h[351] + $h[75] + $h[973] + $h[75] + $h[931],
        nN = $h[1479] + $h[43] + $h[1600],
        eN = $h[33] + $h[40] + $h[1601] + $h[15] + $h[1602],
        sN = $h[1603],
        hN = $h[542] + $h[197] + $h[1604],
        rN = $h[1605],
        aN = $h[1606],
        oN = $h[1606] + $h[119],
        fN = $h[33] + $h[197] + $h[1607],
        _N = $h[1582],
        cN = $h[1606] + $h[114],
        uN = $h[932] + $h[75] + $h[365],
        dN = $h[1608],
        lN = $h[1609],
        bN = $h[261] + $h[220] + $h[1610],
        vN = $h[1611],
        gN = $h[1612],
        yN = $h[1585] + $h[18] + $h[34],
        pN = $h[1613],
        xN = $h[1567],
        mN = $h[66] + $h[1614] + $h[25] + $h[1560],
        EN = $h[485] + $h[25] + $h[1568],
        wN = $h[5] + $h[197] + $h[198] + $h[60] + $h[306],
        TN = $h[290] + $h[60] + $h[291] + $h[43] + $h[262] + $h[111] + $h[1615] + $h[36] + $h[1029] + $h[20] + $h[1030] + $h[66] + $h[1616],
        kN = $h[290] + $h[60] + $h[291] + $h[43] + $h[262] + $h[111] + $h[1615] + $h[43] + $h[1617] + $h[20] + $h[1030] + $h[66] + $h[1616],
        MN = $h[33] + $h[1618],
        SN = $h[33] + $h[264] + $h[1619],
        IN = $h[33] + $h[1] + $h[1620],
        ON = $h[36] + $h[1621],
        AN = $h[1] + $h[1622],
        CN = $h[264] + $h[1623],
        PN = $h[264] + $h[393],
        LN = $h[60] + $h[182] + $h[123],
        RN = $h[25] + $h[992] + $h[123],
        DN = $h[66] + $h[1624],
        NN = $h[40] + $h[206],
        jN = $h[197] + $h[1042] + $h[60] + $h[61],
        BN = $h[264] + $h[393] + $h[220] + $h[415],
        $N = $h[60] + $h[306] + $h[43] + $h[307],
        FN = $h[111] + $h[1625] + $h[25] + $h[1560],
        GN = $h[392] + $h[1626] + $h[27] + $h[290] + $h[27] + $h[892] + $h[503],
        zN = $h[83] + $h[77] + $h[303],
        qN = $h[83] + $h[77] + $h[334] + $h[1627],
        YN = $h[392] + $h[1626] + $h[228] + $h[36] + $h[1628] + $h[27] + $h[1] + $h[1629] + $h[27] + $h[290] + $h[27] + $h[892] + $h[503] + $h[421] + $h[1] + $h[423],
        HN = $h[1163] + $h[1476],
        UN = $h[1630] + $h[36] + $h[804],
        WN = $h[1631] + $h[421] + $h[302] + $h[421] + $h[1632],
        XN = 0;
    if (t[od]) {
        var VN = navigator[fd],
            ZN = /opera/i [Fo](VN),
            KN = !ZN && /msie/i.test(VN),
            JN = /rv:11.0/i.test(VN),
            QN = /MSIE 10./i.test(VN);
        if (JN && (KN = !0), /msie\s[6,7,8]/i [Fo](VN)) throw new Error("your browser is not supported");
        var tj = /webkit|khtml/i.test(VN),
            ij = !tj && /gecko/i [Fo](VN),
            nj = /firefox\//i [Fo](VN),
            ej = /Chrome\//i [Fo](VN),
            sj = !ej && /Safari\//i [Fo](VN),
            hj = /Macintosh;/i [Fo](VN),
            rj = /(iPad|iPhone|iPod)/g [Fo](VN),
            aj = /Android/g.test(VN),
            oj = /Windows Phone/g [Fo](VN),
            fj = (rj || aj || oj) && _d in t,
            _j = VN.match(/AppleWebKit\/([0-9\.]*)/);
        if (_j && _j[Gh] > 1) var cj = parseFloat(_j[1]);
        if (aj) {
            var uj = parseFloat(VN.match(/Android\s([0-9\.]*)/)[1]);
            if (cj && 534.3 >= cj) var dj = !0
        }
    }
    t[Qh] || (t.requestAnimationFrame = t[cd] || t[ud] || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
        return t[dd](function () {
            i()
        }, 1e3 / 60)
    }), t[ld] || (t[ld] = t.webkitCancelAnimationFrame || t[bd] || t[vd] || t[gd] || function (i) {
        return t[yd](i)
    });
    var lj = {
        SELECTION_TOLERANCE: 2,
        DOUBLE_BUFFER: n,
        LABEL_COLOR: pd
    };
    K(lj, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this._fontStyle = xd)
            }, set: function (t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function () {
                return this._fontSize || (this._fontSize = 12)
            }, set: function (t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
            }
        },
        FONT_FAMILY: {
            get: function () {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            }, set: function (t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        },
        FONT: {
            get: function () {
                return (this._fontChanged || this._fontChanged === n) && (this._fontChanged = !1, this._font = this[md] + er + this[Ed] + wd + this[Td]), this._font
            }
        }
    });
    var bj = function () {};
    bj[yr] = {
        _nq: 0,
        _ns: 0,
        _ln: !0,
        _lk: 1,
        _fz: function (t, i, n) {
            var e = this._o13(i),
                s = this._o12(n),
                h = t * e,
                r = t * s;
            return this._97(t, i - h, n - r)
        }, _o13: function (t) {
            return (t - this._nq) / this._lk
        }, _o12: function (t) {
            return (t - this._ns) / this._lk
        }, _ep: function (t, i) {
            return this._97(this._lk, this._nq + t, this._ns + i)
        }, _97: function (t, i, n) {
            return this._lk == t && this._nq == i && this._ns == n ? !1 : (this._ln && (1 != this.ratio || 2 != this[ho] ? (i = Math[ko](i * this[ho]) / this[ho], n = Math.round(n * this[ho]) / this[ho]) : (i = Math[ko](i), n = Math[ko](n))), this._nq = i, this._ns = n, this._lk = t, void(this._3m && this._3m()))
        }, _hi: function () {
            return {
                a: this._lk,
                b: 0,
                c: 0,
                d: this._lk,
                e: this._nq,
                f: this._ns
            }
        }, toString: function () {
            return kd + $(this._lk) + Md + $(this._lk) + Pr + $(this._nq) + Pr + $(this._ns) + Lr
        }, _hk: function (t) {
            bi(t, au, this.toString())
        }
    };
    var vj = function (t) {
        this._jw = [], this._mn = {}, t && this.add(t)
    };
    vj[yr] = {
        _jw: null,
        _mn: null,
        get: function (t) {
            return this[Sd](t)
        }, getById: function (t) {
            return this._mn[t]
        }, getByIndex: function (t) {
            return this._jw[t]
        }, forEach: function (t, i, n) {
            return l(this._jw, t, i, n)
        }, forEachReverse: function (t, i, n) {
            return v(this._jw, t, i, n)
        }, size: function () {
            return this._jw[Gh]
        }, contains: function (t) {
            return this.containsById(t.id)
        }, containsById: function (t) {
            return this._mn.hasOwnProperty(t)
        }, setIndex: function (t, i) {
            var n = this._jw[Jh](t);
            if (0 > n) throw new Error(Ya + t.id + Id);
            return n == i ? !1 : (this._jw[Uh](n, 1), this._jw[Uh](i, 0, t), !0)
        }, setIndexAfter: function (t, i) {
            var n = this._jw[Jh](t);
            if (0 > n) throw new Error(Ya + t.id + Id);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jw[Uh](n, 1), this._jw[Uh](i, 0, t), i)
        }, setIndexBefore: function (t, i) {
            var n = this._jw[Jh](t);
            if (0 > n) throw new Error(Ya + t.id + Id);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jw[Uh](n, 1), this._jw.splice(i, 0, t), i)
        }, indexOf: function (t) {
            return this._jw[Jh](t)
        }, getIndexById: function (t) {
            var i = this[Od](t);
            return i ? this._jw.indexOf(i) : -1
        }, add: function (t, i) {
            return O(t) ? this._hf(t, i) : this._l5(t, i)
        }, addFirst: function (t) {
            return this.add(t, 0)
        }, _hf: function (t, i) {
            if (0 == t[Gh]) return !1;
            var e = !1,
                s = i >= 0;
            t = t._jw || t;
            for (var h = 0, r = t[Gh]; r > h; h++) {
                var a = t[h];
                null !== a && a !== n && this._l5(a, i, !0) && (e = !0, s && i++)
            }
            return e
        }, _l5: function (t, i) {
            var e = t.id;
            return e === n || this[Ad](e) ? !1 : (y(this._jw, t, i), this._mn[e] = t, t)
        }, remove: function (t) {
            return O(t) ? this._o2l(t) : t.id ? this._hd(t.id, t) : this[Cd](t)
        }, _o2l: function (t) {
            if (0 == t.length) return !1;
            var i = !1;
            t = t._jw || t;
            for (var e = 0, s = t[Gh]; s > e; e++) {
                var h = t[e];
                if (null !== h && h !== n) {
                    h.id === n && (h = this._mn[h]);
                    var r = h.id;
                    this._hd(r, h, !0) && (i = !0)
                }
            }
            return i
        }, _hd: function (t, i) {
            return t !== n && this[Ad](t) ? ((null === i || i === n) && (i = this.getById(t)), delete this._mn[t], p(this._jw, i), !0) : !1
        }, removeById: function (t) {
            var i = this._mn[t];
            return i ? this._hd(t, i) : !1
        }, set: function (t) {
            if (!t || 0 == t) return void this[vc]();
            if (this.isEmpty() || !O(t)) return this[vc](), this[sr](t);
            var i = [],
                n = {},
                e = 0;
            if (l(t, function (t) {
                this._mn[t.id] ? (n[t.id] = t, e++) : i.push(t)
            }, this), e != this[Gh]) {
                var s = [];
                this[h_](function (t) {
                    n[t.id] || s.push(t)
                }, this), s[Gh] && this._o2l(s)
            }
            return i.length && this._hf(i), !0
        }, clear: function () {
            return this[Df]() ? !1 : (this._jw[Gh] = 0, this._mn = {}, !0)
        }, toDatas: function () {
            return this._jw[Hh](0)
        }, isEmpty: function () {
            return 0 == this._jw[Gh]
        }, valueOf: function () {
            return this._jw[Gh]
        }, clone: function (t) {
            var i = new vj;
            return i.add(t ? g(this._jw) : this[Pd]()), i
        }
    }, K(vj.prototype, {
        datas: {
            get: function () {
                return this._jw
            }
        },
        random: {
            get: function () {
                return this._jw && this._jw.length ? this._jw[L(this._jw[Gh])] : null
            }
        },
        length: {
            get: function () {
                return this._jw ? this._jw.length : 0
            }
        }
    });
    var gj = (2 * Math.PI, .5 * Math.PI),
        yj = function (t, i) {
            i = i.toUpperCase();
            for (var n = KN ? t.firstChild : t[Ld]; n && (1 != n[Rd] || n[Dd] && n.tagName.toUpperCase() != i);) n = KN ? n[Nd] : n[jd];
            return n && 1 == n[Rd] && n[Dd] && n.tagName.toUpperCase() == i ? n : null
        },
        pj = function (t, i, n) {
            t instanceof pj && (i = t.y, t = t.x, n = t[No]), this[Mr](t, i, n)
        },
        xj = function (t, i, n, e) {
            var s = t - n,
                h = i - e;
            return Math[mo](s * s + h * h)
        };
    pj[yr] = {
        x: 0,
        y: 0,
        rotate: n,
        set: function (t, i, n) {
            this.x = t || 0, this.y = i || 0, this[No] = n || 0
        }, negate: function () {
            this.x = -this.x, this.y = -this.y
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y
        }, distanceTo: function (t) {
            return xj(this.x, this.y, t.x, t.y)
        }, toString: function () {
            return Bd + this.x + $d + this.y + Lr
        }, clone: function () {
            return new pj(this.x, this.y)
        }
    }, Object.defineProperty(pj.prototype, Fd, {
        get: function () {
            return Math[mo](this.x * this.x + this.y * this.y)
        }
    });
    var mj = function (t, i, e, s) {
        t !== n && this._nf(t, i, e, s)
    };
    mj[yr] = {
        _nx: null,
        _nz: null,
        _nu: null,
        _nw: null,
        _o2: null,
        _o3: null,
        _o1: 1,
        _nf: function (t, i, n, e) {
            this._nx = t, this._nz = i, this._nu = n, this._nw = e, t == n ? (this._o2 = -1, this._o1 = 0, this._o3 = t) : (this._o2 = (i - e) / (t - n), this._o3 = i - this._o2 * t, this._o1 = 1), this._lb = Math[Yr](this._nw - this._nz, this._nu - this._nx), this._o1os = Math[Hr](this._lb), this._sin = Math[Ur](this._lb)
        }, _o19: function (t) {
            return 0 == this._o1 ? Number[Gd] : this._o2 * t + this._o3
        }, _o1c: function (t) {
            return 0 == this._o2 ? Number[Gd] : (t - this._o3) / this._o2
        }, _$j: function (t) {
            var i, n, e, s, h, r = t[0],
                a = t[2],
                o = t[4],
                f = t[1],
                _ = t[3],
                c = t[5],
                u = this._o2,
                d = this._o3,
                l = this._o1;
            if (0 == l ? (e = Math[mo]((-u * u * r - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * r), s = -u * a + u * r, h = u * o - 2 * u * a + u * r) : (e = Math[mo]((-f + u * r + d) * c + _ * _ + (-2 * u * a - 2 * d) * _ + (u * o + d) * f + (-u * u * r - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * r), s = -_ + f + u * a - u * r, h = c - 2 * _ + f - u * o + 2 * u * a - u * r), 0 != h) {
                i = (e + s) / h, n = (-e + s) / h;
                var b, v;
                return i >= 0 && 1 >= i && (b = Ui(i, t)), n >= 0 && 1 >= n && (v = Ui(n, t)), b && v ? [b, v] : b ? b : v ? v : void 0
            }
        }, _4f: function (t, i, n) {
            if (this._o2 == t._o2 || 0 == this._o1 && 0 == t._o1) return null;
            var e, s;
            if (e = 0 == this._o1 ? this._o3 : 0 == t._o1 ? t._o3 : (t._o3 - this._o3) / (this._o2 - t._o2), s = 0 == this._o2 ? this._o3 : 0 == t._o2 ? t._o3 : this._o1 ? this._o2 * e + this._o3 : t._o2 * e + t._o3, !i) return {
                x: e,
                y: s
            };
            var h, r, a;
            if (n) h = -i / 2, r = -h;
            else {
                h = -xj(this._nx, this._nz, e, s), r = xj(this._nu, this._nw, e, s);
                var o = -h + r;
                if (o > i) {
                    var f = i / o;
                    h *= f, r *= f
                } else a = (i - o) / 2
            }
            var _ = this._7x(e, s, h),
                c = this._7x(e, s, r);
            return a && (_._rest = a, c._rest = a), [_, c]
        }, _7x: function (t, i, n) {
            return 0 == this._o1 ? {
                x: t,
                y: i + n
            } : {
                x: t + n * this._o1os,
                y: i + n * this._sin
            }
        }
    };
    var Ej = function (t, i) {
        this[no] = t, this.height = i
    };
    Ej[yr] = {
        width: 0,
        height: 0,
        isEmpty: function () {
            return this[no] <= 0 || this.height <= 0
        }, clone: function () {
            return new Ej(this.width, this[eo])
        }, toString: function () {
            return zd + this.width + $d + this.height + Lr
        }
    };
    var wj = function (t, i, e, s) {
        t instanceof Object && !M(t) && (i = t.y, e = t.width, s = t[eo], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[no] = e, this[eo] = s
    };
    wj.prototype = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this[no] = t[no] || 0, this[eo] = t[eo] || 0
        }, set: function (t, i, n, e) {
            this.x = t || 0, this.y = i || 0, this.width = n || 0, this[eo] = e || 0
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, contains: function (t, i) {
            return t instanceof wj ? ai(this.x, this.y, this[no], this.height, t.x, t.y, t[no], t[eo]) : t >= this.x && t <= this.x + this[no] && i >= this.y && i <= this.y + this[eo]
        }, intersectsPoint: function (t, i, n) {
            return this[no] <= 0 && this[eo] <= 0 ? !1 : n ? this[qd](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[eo]
        }, intersectsRect: function (t, i, n, e) {
            return hi(this.x, this.y, this[no], this[eo], t, i, n, e)
        }, intersects: function (t, i) {
            return M(t[no]) ? this[qd](t.x, t.y, t[no], t[eo]) : this[To](t, i)
        }, intersection: function (t, i, n, e) {
            var s = this.x,
                h = this.y,
                r = s;
            r += this[no];
            var a = h;
            a += this[eo];
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > h && (h = i), r > o && (r = o), a > f && (a = f), r -= s, a -= h, 0 > r || 0 > a ? null : new wj(s, h, r, a)
        }, addPoint: function (t) {
            this[sr](t.x, t.y)
        }, add: function (t, i) {
            if (M(t[no])) return this[Yd](t.x, t.y, t[no], t[eo]);
            if (M(t.x) && (i = t.y, t = t.x), this[no] < 0 || this[eo] < 0) return this.x = t, this.y = i, void(this[no] = this[eo] = 0);
            var n = this.x,
                e = this.y,
                s = this[no],
                h = this[eo];
            s += n, h += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > h && (h = i), s -= n, h -= e, s > Number[Hd] && (s = Number.MAX_VALUE), h > Number[Hd] && (h = Number[Hd]), this.set(n, e, s, h)
        }, addRect: function (t, i, n, e) {
            var s = this[no],
                h = this[eo];
            (0 > s || 0 > h) && this[Mr](t, i, n, e);
            var r = n,
                a = e;
            if (!(0 > r || 0 > a)) {
                var o = this.x,
                    f = this.y;
                s += o, h += f;
                var _ = t,
                    c = i;
                r += _, a += c, o > _ && (o = _), f > c && (f = c), r > s && (s = r), a > h && (h = a), s -= o, h -= f, s > Number[Hd] && (s = Number[Hd]), h > Number[Hd] && (h = Number.MAX_VALUE), this[Mr](o, f, s, h)
            }
        }, shrink: function (t, i, n, e) {
            return M(t) ? 1 == arguments[Gh] ? e = i = n = t || 0 : 2 == arguments[Gh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[ya] || 0, n = t[Wr] || 0, e = t[Xr] || 0, t = t[pa] || 0), this.x += i, this.y += t, this.width -= i + e, this[eo] -= t + n, this
        }, grow: function (t, i, n, e) {
            return M(t) ? 1 == arguments[Gh] ? e = i = n = t || 0 : 2 == arguments.length ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[ya] || 0, n = t[Wr] || 0, e = t[Xr] || 0, t = t.top || 0), this.x -= i, this.y -= t, this[no] += i + e, this[eo] += t + n, this
        }, isEmpty: function () {
            return this[no] <= 0 && this[eo] <= 0
        }, toString: function () {
            return this.x + Ud + this.y + Ud + this[no] + Ud + this[eo]
        }, union: function (t) {
            var i = this[no],
                n = this[eo];
            if (0 > i || 0 > n) return new wj(t.x, t.y, t[no], t[eo]);
            var e = t[no],
                s = t[eo];
            if (0 > e || 0 > s) return new wj(this.x, this.y, this[no], this[eo]);
            var h = this.x,
                r = this.y;
            i += h, n += r;
            var a = t.x,
                o = t.y;
            return e += a, s += o, h > a && (h = a), r > o && (r = o), e > i && (i = e), s > n && (n = s), i -= h, n -= r, i > Number[Hd] && (i = Number.MAX_VALUE), n > Number[Hd] && (n = Number.MAX_VALUE), new wj(h, r, i, n)
        }, clear: function () {
            this[Mr](0, 0, -1, -1)
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y && this.width == t[no] && this[eo] == t[eo]
        }, clone: function (t, i) {
            return new wj(this.x + (t || 0), this.y + (i || 0), this[no], this[eo])
        }, getIntersectionPoint: function (t, i, n, e) {
            return si(this, t, i, n, e)
        }
    }, N(wj, Ej), K(wj.prototype, {
        left: {
            get: function () {
                return this.x
            }
        },
        top: {
            get: function () {
                return this.y
            }
        },
        bottom: {
            get: function () {
                return this.y + this[eo]
            }
        },
        right: {
            get: function () {
                return this.x + this[no]
            }
        },
        cx: {
            get: function () {
                return this.x + this[no] / 2
            }
        },
        cy: {
            get: function () {
                return this.y + this[eo] / 2
            }
        },
        center: {
            get: function () {
                return new pj(this.cx, this.cy)
            }
        }
    });
    var Tj = function (t, i, n, e) {
        1 == arguments.length ? i = n = e = t : 2 == arguments[Gh] && (n = t, e = i), this.set(t, i, n, e)
    };
    Tj[yr] = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function (t, i, n, e) {
            this.top = t || 0, this[ya] = i || 0, this[Wr] = n || 0, this[Xr] = e || 0
        }, clone: function () {
            return new Tj(this.top, this[ya], this[Wr], this.right)
        }, equals: function (t) {
            return t && this.top == t[pa] && this[Wr] == t[Wr] && this.left == t[ya] && this[Xr] == t.right
        }
    };
    var kj = function (t, i) {
        this[Wd] = t, this[Zr] = i
    };
    kj[yr] = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function () {
            return (this.horizontalPosition || "") + (this[Zr] || "")
        }
    }, Z(kj[yr], Xd, {
        get: function () {
            return (this[Wd] || "") + (this.verticalPosition || "")
        }
    });
    var Mj = Vd,
        Sj = Zd,
        Ij = Kd,
        Oj = b_,
        Aj = Jd,
        Cj = Qd;
    kj[tl] = new kj(Mj, Oj), kj.LEFT_MIDDLE = new kj(Mj, Aj), kj[il] = new kj(Mj, Cj), kj.CENTER_TOP = new kj(Sj, Oj), kj.CENTER_MIDDLE = new kj(Sj, Aj), kj.CENTER_BOTTOM = new kj(Sj, Cj), kj.RIGHT_TOP = new kj(Ij, Oj), kj[nl] = new kj(Ij, Aj), kj[el] = new kj(Ij, Cj);
    var Pj = [kj[tl], kj[sl], kj.LEFT_BOTTOM, kj.CENTER_TOP, kj[hl], kj[rl], kj.RIGHT_TOP, kj[nl], kj[el]];
    Z(kj, br, {
        get: function () {
            return Pj[L(Pj.length)]
        }
    });
    var Lj = function (t, i, n, e, s) {
        this[Mr](t, i, n, e), this[al] = s
    };
    Lj.prototype = {
        radius: 0,
        classify: function (t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        }, intersectsRect: function (t, i, n, e) {
            if (B(this, Lj, qd, arguments) === !1) return !1;
            var s = this.x,
                h = this.y,
                r = s + this.width,
                a = h + this[eo],
                o = 2 * radius,
                f = 2 * radius,
                _ = Math[lf](this[no], Math.abs(o)) / 2,
                c = Math[lf](this[eo], Math[Vr](f)) / 2,
                u = this[ol](t, s, r, _),
                d = this.classify(t + n, s, r, _),
                l = this.classify(i, h, a, c),
                b = this[ol](i + e, h, a, c);
            return 2 == u || 2 == d || 2 == l || 2 == b ? !0 : 2 > u && d > 2 || 2 > l && b > 2 ? !0 : (t = 1 == d ? t = t + n - (s + _) : t -= r - _, i = 1 == b ? i = i + e - (h + c) : i -= a - c, t /= _, i /= c, 1 >= t * t + i * i)
        }, intersectsPoint: function (t, i) {
            if (B(this, Lj, To, arguments) === !1) return !1;
            var n = this.x,
                e = this.y,
                s = n + this.width,
                h = e + this[eo];
            if (n > t || e > i || t >= s || i >= h) return !1;
            var r = 2 * radius,
                a = 2 * radius,
                o = Math[lf](this[no], Math[Vr](r)) / 2,
                f = Math.min(this[eo], Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = h - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        }, clone: function () {
            return new Lj(this.x, this.y, this[no], this[eo], this[al])
        }
    }, N(Lj, wj);
    var Rj = function (t, i, n, e) {
        this[Xo] = t, this[Do] = i, this[td] = n, this[Fu] = e
    };
    Rj[yr] = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function () {
            return fl + this[Xo] + _l + this.type + cl + this[td]
        }
    };
    var Dj = function (t, i, n, e, s) {
        this.source = t, this.kind = i, this[ul] = e, this[Fu] = n, this[dl] = s
    };
    Dj.prototype = {
        type: ll,
        propertyType: null,
        toString: function () {
            return fl + this[Xo] + _l + this[Do] + bl + this[td] + vl + this[ul] + gl + this[Fu]
        }
    }, N(Dj, Rj), Z(Dj[yr], yl, {
        get: function () {
            return this.kind
        }, set: function (t) {
            this.kind = t
        }
    });
    var Nj = function (t, i, n) {
        this[Xo] = t, this.oldValue = t[x_], this.value = i, this[pl] = n, this[ul] && (this[xl] = this.oldValue[ml](t))
    };
    Nj[yr] = {
        kind: x_
    }, N(Nj, Dj);
    var jj = function (t, i) {
        this[Xo] = t, this[Fu] = i
    };
    jj.prototype[td] = El, N(jj, Dj);
    var Bj = function (t, i) {
        this[Xo] = t, this.value = i
    };
    Bj.prototype[td] = wl, N(Bj, Dj);
    var $j = function (t, i, n, e) {
        this[Xo] = i, this[ul] = n, this[Fu] = e, this[x_] = t, this.child = i, this.oldIndex = n, this[pl] = e
    };
    $j.prototype[td] = Tl, N($j, Dj);
    var Fj = function () {};
    Fj[yr] = {
        listener: null,
        beforeEvent: function (t) {
            return null != this[kl] && this.listener.beforeEvent ? this.listener[Sr](t) : !0
        }, onEvent: function (t) {
            null != this.listener && this[kl][Ir] && this[kl][Ir](t)
        }
    };
    var Gj = function () {
            j(this, Gj, arguments), this[Ml] = {}, this.listeners = []
        },
        zj = function (t, i) {
            this[kl] = t, this[mr] = i, t instanceof Function ? this.onEvent = t : (this[Ir] = t[Ir], this.beforeEvent = t.beforeEvent), this[Sl] = function (t) {
                return t && this[kl] == t[kl] && this[mr] == t[mr]
            }
        };
    zj.prototype = {
        equals: function (t) {
            return t && this[kl] == t[kl] && this.scope == t[mr]
        }, destroy: function () {
            delete this[mr], delete this[kl]
        }
    }, Gj[yr] = {
        listeners: null,
        _o3h: function () {
            return this[Il] && this[Il][Gh] > 0
        }, _6y: function (t, i) {
            return t instanceof Gj ? t : new zj(t, i)
        }, _o22: function (t, i) {
            if (t instanceof Gj) return this[Il][Jh](t);
            for (var n = this[Il], e = 0, s = n.length; s > e; e++) {
                var h = n[e];
                if (h[kl] == t && h[mr] == i) return e
            }
            return -1
        }, contains: function (t, i) {
            return this._o22(t, i) >= 0
        }, addListener: function (t, i) {
            return this.contains(t, i) ? !1 : void this.listeners[Kh](this._6y(t, i))
        }, removeListener: function (t, i, n) {
            var e = this._o22(t, i);
            if (e >= 0) {
                var s = this[Il][Uh](e, 1)[0];
                n || F(s)
            }
        }, on: function (t, i) {
            this.addListener(t, i)
        }, un: function (t, i, n) {
            this.removeListener(t, i, n)
        }, onEvent: function (t) {
            return this[Il] ? void l(this.listeners, function (i) {
                i[Ir] && (i[mr] ? i[Ir][zh](i[mr], t) : i[Ir](t))
            }, this) : !1
        }, beforeEvent: function (t) {
            return this[Il] ? l(this[Il], function (i) {
                return i[Sr] ? i[mr] ? i[Sr].call(i[mr], t) : i[Sr](t) : !0
            }, this) : !0
        }, _ds: function (t) {
            return this[Sr](t) === !1 ? !1 : (this[Ir](t), !0)
        }, clear: function () {
            this.listeners = []
        }, destroy: function () {
            this.clear()
        }
    }, N(Gj, Fj);
    var qj = {
            onEvent: function () {}, beforeEvent: function () {}
        },
        Yj = function (t, i, n, e, s) {
            this[Xo] = t, this.type = Ol, this[td] = i, this[Ao] = n, this.index = e, this[xl] = s
        };
    Yj[yr] = {
        index: -1,
        oldIndex: -1,
        toString: function () {
            return fl + this[Xo] + _l + this[Do] + cl + this[td] + Al + this[Ao] + Cl + this.index + Pl + this.oldIndex
        }
    }, N(Yj, Rj), Yj[Ll] = sr, Yj.KIND_REMOVE = Vh, Yj[Rl] = vc, Yj[Dl] = Nl;
    var Hj = function () {
        this.id = ++XN, this._o1o = {}
    };
    Hj[yr] = {
        _o1o: null,
        id: null,
        get: function (t) {
            return this._o1o[t]
        }, set: function (t, i) {
            var n = this[kr](t);
            if (n === i) return !1;
            var e = new Dj(this, t, i, n);
            return e[dl] = pB.PROPERTY_TYPE_CLIENT, this._o2n(t, i, e, this._o1o)
        }, _o2n: function (t, i, e, s) {
            return this[Sr](e) === !1 ? !1 : (s || (s = this._o1o), i === n ? delete s[t] : s[t] = i, this.onEvent(e), !0)
        }, remove: function (t) {
            this[Mr](t, null)
        }, valueOf: function () {
            return this.id
        }, toString: function () {
            return this.id
        }, _dt: function (t, i) {
            if (i === n && (i = -1), this == t || t == this._jn) return !1;
            if (t && this == t._jn && !t._dt(null)) return !1;
            var e = new Nj(this, t, i);
            if (!this[Sr](e)) return !1;
            var s, h, r = this._jn;
            return t && (s = new jj(t, this), !t[Sr](s)) ? !1 : null == r || (h = new Bj(r, this), r.beforeEvent(h)) ? (this._jn = t, null != t && fi(t, this, i), null != r && _i(r, this), this[Ir](e), null != t && t[Ir](s), null != r && r[Ir](h), this[jl](r, t), !0) : !1
        }, addChild: function (t, i) {
            var n = t._dt(this, i);
            return n && this.onChildAdd(t, i), n
        }, onChildAdd: function () {}, removeChild: function (t) {
            if (!this._fr || !this._fr[Zc](t)) return !1;
            var i = t._dt(null);
            return this[Jr](t), i
        }, onChildRemove: function () {}, toChildren: function () {
            return this._fr ? this._fr[Pd]() : null
        }, clearChildren: function () {
            if (this._fr && this._fr.length) {
                var t = this[Bl]();
                l(t, function (t) {
                    t._dt(null)
                }, this), this[$l](t)
            }
        }, forEachChild: function (t, i) {
            return this.hasChildren() ? this._fr[h_](t, i) : !1
        }, onChildrenClear: function () {}, getChildIndex: function (t) {
            return this._fr && this._fr[Gh] ? this._fr[Jh](t) : -1
        }, setChildIndex: function (t, i) {
            if (!this._fr || !this._fr[Gh]) return !1;
            var n = this._fr[Jh](t);
            if (0 > n || n == i) return !1;
            var e = new $j(this, t, n, i);
            return this.beforeEvent(e) === !1 ? !1 : (this._fr.remove(t) && this._fr[sr](t, i), this[Ir](e), !0)
        }, hasChildren: function () {
            return this._fr && this._fr.length > 0
        }, getChildAt: function (t) {
            return null == this._fr ? null : this._fr._jw[t]
        }, isDescendantOf: function (t) {
            if (!t.hasChildren()) return !1;
            for (var i = this[x_]; null != i;) {
                if (t == i) return !0;
                i = i[x_]
            }
            return !1
        }, onParentChanged: function () {}, firePropertyChangeEvent: function (t, i, n, e) {
            this.onEvent(new Dj(this, t, i, n, e))
        }
    }, N(Hj, Fj), K(Hj.prototype, {
        childrenCount: {
            get: function () {
                return this._fr ? this._fr[Gh] : 0
            }
        },
        children: {
            get: function () {
                return this._fr || (this._fr = new vj), this._fr
            }
        },
        parent: {
            get: function () {
                return this._jn
            }, set: function (t) {
                this._dt(t, -1)
            }
        },
        properties: {
            get: function () {
                return this._o1o
            }, set: function (t) {
                this._o1o != t && (this._o1o = t)
            }
        }
    });
    var Uj = function () {
        this._jw = [], this._mn = {}, this._1s = new Gj
    };
    Uj[yr] = {
        beforeEvent: function (t) {
            return null != this._1s && this._1s[Sr] ? this._1s[Sr](t) : !0
        }, onEvent: function (t) {
            return this._1s instanceof Function ? void this._1s(t) : void(null != this._1s && this._1s[Ir] && this._1s[Ir](t))
        }, _1s: null,
        setIndex: function (t, i) {
            if (!this[Zc](t)) throw new Error(Ya + t[Fl]() + Id);
            var n = this[Jh](t);
            if (n == i) return !1;
            var e = new Yj(this, Yj[Dl], t, i, n);
            return this[Sr](e) === !1 ? !1 : (this._jw.remove(t) >= 0 && this._jw[sr](i, t), this[Ir](e), !0)
        }, _hf: function (t, i) {
            if (0 == t[Gh]) return !1;
            var e = !1,
                s = i >= 0,
                h = new Yj(this, Yj[Ll], t, i);
            if (this[Sr](h) === !1) return !1;
            var r = [];
            t = t._jw || t;
            for (var a = 0, o = t[Gh]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._l5(f, i, !0) && (r[Kh](f), e = !0, s && i++)
            }
            return h[Ao] = r, this[Ir](h), e
        }, _l5: function (t, i, n) {
            if (this[S_](t) === !1) return !1;
            if (n) return B(this, Uj, Gl, arguments);
            var e = new Yj(this, Yj[Ll], t, i);
            return this[Sr](e) === !1 ? !1 : B(this, Uj, Gl, arguments) ? (this._l4(t, e), t) : !1
        }, _l4: function (t, i) {
            this.onEvent(i)
        }, _o2l: function (t) {
            if (0 == t.length) return !1;
            var i = new Yj(this, Yj[zl], t);
            if (this[Sr](i) === !1) return !1;
            var e = [],
                s = !1;
            t = t._jw || t;
            for (var h = 0, r = t.length; r > h; h++) {
                var a = t[h];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null), this._hd(o, a, !0) && (e[Kh](a), s = !0)
                }
            }
            return i[Ao] = e, this.onEvent(i), s
        }, _hd: function (t, i, n) {
            if (n) return B(this, Uj, ql, arguments);
            var e = new Yj(this, Yj.KIND_REMOVE, i);
            return this.beforeEvent(e) === !1 ? !1 : B(this, Uj, ql, arguments) ? (this.onEvent(e), !0) : !1
        }, clear: function () {
            if (this[Df]()) return !1;
            var t = new Yj(this, Yj.KIND_CLEAR, this.toDatas());
            return this[Sr](t) === !1 ? !1 : B(this, Uj, vc) ? (this[Ir](t), !0) : !1
        }, accept: function (t) {
            return this[Yl] && this[Yl](t) === !1 ? !1 : !0
        }
    }, N(Uj, vj), Z(Uj.prototype, Hl, {
        get: function () {
            return this._1s
        }
    });
    var Wj = function () {
        j(this, Wj, arguments), this[Ul] = new Gj, this._selectionModel = new Xj(this), this._selectionModel._1s = this[Ul], this[Wl] = new Gj, this.dataChangeDispatcher[Xl]({
            beforeEvent: this[Vl],
            onEvent: this[Zl]
        }, this), this[Kl] = new Gj, this.childIndexChangeDispatcher = new Gj, this[Jl] = new vj;
        var t = this;
        this.$roots[Ql] = function (i, n) {
            if (!t[Jl].contains(i)) throw new Error(Ya + i.id + Id);
            var e = t[Jl]._jw[Jh](i);
            if (e == n) return !1;
            t[Jl]._jw[Uh](e, 1), t[Jl]._jw[Uh](n, 0, i), t._o17IndexFlag = !0;
            var s = new $j(t, i, e, n);
            return t._2q(s), !0
        }
    };
    Wj[yr] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _l4: function (t, i) {
            t[kl] = this[Wl], t[x_] || this[Jl][sr](t), this.onEvent(i)
        }, _hd: function (t, i) {
            if (B(this, Wj, ql, arguments)) {
                if (i instanceof rF) i.disconnect();
                else if (i instanceof aF) {
                    var n = i[tb]();
                    this[Vh](n)
                }
                var e = i[x_];
                return null == e ? this[Jl].remove(i) : (e[ib](i), e.__6v = !0), i.hasChildren() && this.remove(i[Bl]()), i[kl] = null, !0
            }
            return !1
        }, _5h: function (t) {
            var i = t.source;
            this[Zc](i) && (null == i.parent ? this[Jl].add(i) : null == t[ul] && this[Jl][Vh](i), this[Kl].onEvent(t))
        }, _2q: function (t) {
            this[nb][Ir](t)
        }, beforeDataPropertyChange: function (t) {
            return t instanceof Nj ? this[Kl][Sr](t) : !0
        }, onDataPropertyChanged: function (t) {
            return t instanceof Nj ? (this._o17IndexFlag = !0, t[Xo]._o17IndexFlag = !0, void this._5h(t)) : void(t instanceof $j && (this._o17IndexFlag = !0, t.source._o17IndexFlag = !0, this._2q(t)))
        }, toRoots: function () {
            return this[Jl][Pd]()
        }, _hh: function (t) {
            var i, n = t._jn;
            i = n ? n._fr : this[Jl];
            var e = i[Jh](t);
            if (0 > e) throw new Error(eb + t + "' not exist in the box");
            return 0 == e ? n : i[Sd](e - 1)
        }, _fp: function (t) {
            var i, n = t._jn;
            i = n ? n._fr : this.$roots;
            var e = i[Jh](t);
            if (0 > e) throw new Error(eb + t + "' not exist in the box");
            return e == i[Gh] - 1 ? n ? this._fp(n) : null : i.getByIndex(e + 1)
        }, forEachByDepthFirst: function (t, i, n) {
            return this[Jl][Gh] ? h(this.$roots, t, i, n) : !1
        }, forEachByDepthFirstReverse: function (t, i, n) {
            return this[Jl].length ? o(this[Jl], t, i, n) : !1
        }, forEachByBreadthFirst: function (t, i) {
            return this[Jl][Gh] ? c(this[Jl], t, i) : !1
        }, forEachByBreadthFirstReverse: function (t, i) {
            return this[Jl][Gh] ? u(this[Jl], t, i) : !1
        }, clear: function () {
            return B(this, Wj, vc) ? (this.$roots.clear(), this[Tu].clear(), !0) : !1
        }
    }, N(Wj, Uj), K(Wj[yr], {
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        },
        roots: {
            get: function () {
                return this[Jl]
            }
        }
    });
    var Xj = function (t) {
        j(this, Xj), this[sb] = t, this._o3oxChangeListener = {
            onEvent: function (t) {
                Yj[zl] == t[td] ? null != t.data ? this[Vh](t[Ao]) : null != t[hb] && this.remove(t[hb]) : Yj[Rl] == t.kind && this[vc]()
            }
        }, this[sb].listChangeDispatcher.addListener(this._o3oxChangeListener, this)
    };
    Xj[yr] = {
        box: null,
        isSelected: function (t) {
            return this.containsById(t.id || t)
        }, select: function (t) {
            return this[sr](t)
        }, unselect: function (t) {
            return this[Vh](t)
        }, reverseSelect: function (t) {
            return this.contains(t) ? this.remove(t) : this[sr](t)
        }, accept: function (t) {
            return this[sb][Zc](t)
        }
    }, N(Xj, Uj);
    var Vj = null,
        Zj = null,
        Kj = null,
        Jj = function () {
            if (!i.createElement) return function (t) {
                return t
            };
            var t = i[uo](eu),
                e = t[ha],
                s = {};
            return function (t) {
                if (s[t]) return s[t];
                var i = ci(t);
                return e[i] !== n || Kj && e[i = ci(Kj + i)] !== n ? (s[t] = i, i) : t
            }
        }(),
        Qj = {};
    ! function () {
        if (!i[rb]) return !1;
        for (var e = i.head, s = "Webkit Moz O ms Khtml" [hr](er), h = 0; h < s[Gh]; h++)
            if (e.style[s[h] + ab] !== n) {
                Kj = na + s[h].toLowerCase() + na;
                break
            }
        var r = i.createElement(ha);
        t[ob] || r[fu](i[fb]("")), r.classList && (Vj = !0), r[Do] = _b, r.id = cb, e[fu](r), Zj = r[ub];
        var a, o;
        for (var f in Qj) {
            var _ = Qj[f];
            a = f, o = "";
            for (var c in _) o += Jj(c) + ra + _[c] + db;
            vi(a, o)
        }
    }();
    var tB = function (t, i, n, e, s) {
            if (s) {
                var h = function (t) {
                    h[Er][zh](h[mr], t)
                };
                return h.scope = s, h[Er] = n, t[lb](i, h, e), h
            }
            return t.addEventListener(i, n, e), n
        },
        iB = function (t, i, n) {
            t.removeEventListener(i, n)
        },
        A = function (t) {
            t.preventDefault ? t[_r]() : t[bb] = !1
        },
        C = function (t) {
            t.stopPropagation ? t[ur]() : t[dr] || (t.cancelBubble = !0)
        },
        P = function (t) {
            A(t), C(t)
        };
    lj[Ta] = fj ? 500 : 300, lj.LONG_PRESS_INTERVAL = fj ? 1500 : 1e3;
    var nB, eB = Ra in t ? "mousewheel" : vb;
    nB = eB + gb, fj && (nB += yb), nB = nB[hr](Pr), Si[yr] = {
        _o3a: function () {
            sB._o1urrentInteractionSupport == this && (delete sB._dragging, delete sB._o1urrentInteractionSupport), this._1z(), delete this._9w, this._db && (delete this._db[xa], delete this._db.getUI, delete this._db)
        }, _lo: null,
        _ig: function () {
            var t = this._n2;
            t && Mi.call(this, t)
        }, destroy: function () {
            this._ig()
        }, _db: null,
        _1z: function () {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        }, _f3: function () {
            this.__o1ancelClick = !0, this._1z(), this._iu(this._db, pb), this._df[vc]()
        }, _df: null,
        _75: function (t) {
            var i = this._9w;
            this._9w = mi(t), this._df[sr](i, this._9w, t)
        }, _jm: function (t) {
            this._75(t), this._iu(t, xb), t[Fr] && t[Fr][Gh] > 1 && this._iu(t, mb)
        }, _iq: function (t) {
            fj || this._75(t);
            var i = this._df[Eb]();
            i && (t.vx = i.x, t.vy = i.y), this._iu(t, wb), this._df[vc]()
        }, _f6: function (t) {
            this._db && (this._1z(), this._iu(t, Tb), this._db = null, this._9w = null)
        }, _iu: function (t, i) {
            this._listener && this._listener[i] instanceof Function && this._listener[i][zh](this._listener, t, this._lo || this._n2)
        }
    };
    var sB = function (t) {
        this._l0 = t, j(this, sB, [t[kb]])
    };
    sB._o1urrentInteractionSupport = null, sB.prototype = {
        _52: function (t) {
            this._53(function (i) {
                i.onElementRemoved instanceof Function && i[Mb](t, this._l0)
            })
        }, _7b: function () {
            this._53(function (t) {
                t[Sb] instanceof Function && t.onClear(this._l0)
            })
        }, _ig: function () {
            this._2a && this._2s(this._2a), this._$q && this._2s(this._$q), this._o3a()
        }, _l0: null,
        _2a: null,
        _$q: null,
        _79: function (t) {
            return this._2a == t ? !1 : (this._2a && this._2a[Gh] && this._2s(this._2a), void(this._2a = t))
        }, _$b: function (t) {
            this._$q || (this._$q = []), this._$q[Kh](t)
        }, _8: function (t) {
            this._$q && 0 != this._$q[Gh] && p(this._$q, t)
        }, _iu: function (t, i, n) {
            this._l0[i] instanceof Function && this._l0[i].call(this._l0, t, n), this._2a && this._hm(t, i, this._2a, n), this._$q && this._hm(t, i, this._$q, n)
        }, _53: function (t) {
            this._2a && l(this._2a, t, this), this._$q && l(this._$q, t, this)
        }, _hm: function (t, i, n, e) {
            if (!O(n)) return void this._9k(t, i, n, e);
            for (var s = 0; s < n.length; s++) {
                var h = n[s];
                this._9k(t, i, h, e)
            }
        }, _9k: function (t, i, n, e) {
            var s = n[i];
            s && s[zh](n, t, this._l0, e)
        }, _3n: function (t) {
            t.destroy instanceof Function && t[lc][zh](t, this._l0)
        }, _2s: function (t) {
            if (!O(t)) return void this._3n(t);
            for (var i = 0; i < t[Gh]; i++) {
                var n = t[i];
                n && this._3n(n)
            }
        }
    }, N(sB, Si), Oi[yr] = {
        limitCount: 10,
        points: null,
        add: function (t, i, n) {
            var e = i[Ma] - t.timeStamp || 1;
            n[Ib] = e;
            var s, h;
            if (!n[Fr]) return s = i.x - t.x, h = i.y - t.y, n.dx = s, n.dy = h, void this._l5(s, h, e);
            var r = n[Fr][Gh];
            if (1 == r) s = n[Fr][0].clientX - t[Fr][0][da], h = n[Fr][0][ka] - t.touches[0].clientY;
            else {
                for (var a, o, f, _ = [], c = [], u = 0, d = 0, l = 0, b = 0, v = 0, g = 0, y = 0, r = t[Fr][Gh]; r > y; y++) {
                    a = t[Fr][y];
                    var p = a[da],
                        x = a.clientY;
                    u += p, d += x, y && (v = Math[xo](v, Math[mo]((p - o) * (p - o) + (x - f) * (x - f)))), o = p, f = x, _.push({
                        x: p,
                        y: x
                    })
                }
                u /= r, d /= r;
                for (var y = 0, r = n[Fr][Gh]; r > y; y++) {
                    a = n[Fr][y];
                    var p = a[da],
                        x = a.clientY;
                    l += p, b += x, y && (g = Math[xo](g, Math.sqrt((p - o) * (p - o) + (x - f) * (x - f)))), o = p, f = x, c[Kh]({
                        x: p,
                        y: x
                    })
                }
                if (l /= r, b /= r, s = l - u, h = b - d, v && g) {
                    var m = g / v;
                    n[Sa] && t[Sa] && (m = n[Sa] / t.scale), n[Wc] = {
                        x: l,
                        y: b,
                        clientX: l,
                        clientY: b
                    }, n.dScale = m, n[Ob] = t
                }
            }
            n.dx = s, n.dy = h, this._l5(s, h, e)
        }, _l5: function (t, i, n) {
            var e = {
                interval: n,
                dx: t,
                dy: i
            };
            this[Lo][Uh](0, 0, e), this.points[Gh] > this[Ab] && this[Lo][Cb]()
        }, getCurrentSpeed: function () {
            if (!this.points.length) return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this[Lo].length; s > e; e++) {
                var h = this[Lo][e],
                    r = h[Ib];
                if (r > 300) break;
                if (t += h.interval, i += h.dx, n += h.dy, t > 500) break
            }
            return 0 == t || 0 == i && 0 == n ? null : {
                x: i / t,
                y: n / t
            }
        }, clear: function () {
            this.points = []
        }
    };
    var hB, rB, aB, oB;
    tj ? (hB = Pb, rB = Lb, aB = Rb, oB = Db) : ij ? (hB = Nb, rB = jb, aB = Bb, oB = $b) : (hB = Fb, rB = Fb, aB = Ru, oB = Gb);
    var fB = zb,
        _B = Math.PI,
        cB = Math.pow,
        uB = Math.sin,
        dB = 1.70158,
        lB = {
            swing: function (t) {
                return -Math[Hr](t * _B) / 2 + .5
            }, easeNone: function (t) {
                return t
            }, easeIn: function (t) {
                return t * t
            }, easeOut: function (t) {
                return (2 - t) * t
            }, easeBoth: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
            }, easeInStrong: function (t) {
                return t * t * t * t
            }, easeOutStrong: function (t) {
                return 1 - --t * t * t * t
            }, easeBothStrong: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
            }, elasticIn: function (t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : -(cB(2, 10 * (t -= 1)) * uB(2 * (t - n) * _B / i))
            }, elasticOut: function (t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : cB(2, -10 * t) * uB(2 * (t - n) * _B / i) + 1
            }, elasticBoth: function (t) {
                var i = .45,
                    n = i / 4;
                return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * cB(2, 10 * (t -= 1)) * uB(2 * (t - n) * _B / i) : cB(2, -10 * (t -= 1)) * uB(2 * (t - n) * _B / i) * .5 + 1
            }, backIn: function (t) {
                return 1 === t && (t -= .001), t * t * ((dB + 1) * t - dB)
            }, backOut: function (t) {
                return (t -= 1) * t * ((dB + 1) * t + dB) + 1
            }, backBoth: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * (((dB *= 1.525) + 1) * t - dB) : .5 * ((t -= 2) * t * (((dB *= 1.525) + 1) * t + dB) + 2)
            }, bounceIn: function (t) {
                return 1 - lB[qb](1 - t)
            }, bounceOut: function (t) {
                var i, n = 7.5625;
                return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
            }, bounceBoth: function (t) {
                return .5 > t ? .5 * lB[Yb](2 * t) : .5 * lB[qb](2 * t - 1) + .5
            }
        },
        bB = function (t) {
            this._kq = t
        };
    bB[yr] = {
        _kq: null,
        _l2: function (t) {
            var i = Date[Za]();
            this._me();
            var n = this;
            this._requestID = requestAnimationFrame(function e() {
                var s = Date.now(),
                    h = s - i;
                return !h || n._kq && n._kq(h) !== !1 ? (i = s, void(n._requestID = requestAnimationFrame(e))) : (n._me(), void(t instanceof Function && t[zh]()))
            })
        }, _me: function () {
            return this._requestID ? (t[ld](this._requestID), void delete this._requestID) : !1
        }, _dv: function () {
            return null != this._requestID
        }
    };
    var vB = function (t, i, n, e) {
        this._onStep = t, this._lo = i || this, this._40 = e, n && n > 0 && (this._ie = n)
    };
    vB[yr] = {
        _ie: 1e3,
        _40: null,
        _e3: 0,
        _me: function () {
            return this._e3 = 0, this._dc = 0, B(this, vB, Hb)
        }, _dc: 0,
        _kq: function (t) {
            if (this._e3 += t, this._e3 >= this._ie) return this._onStep[zh](this._lo, 1, (1 - this._dc) * this._ie, t, this._ie), !1;
            var i = this._e3 / this._ie;
            return this._40 && (i = this._40(i)), this._onStep[zh](this._lo, i, (i - this._dc) * this._ie, t, this._ie) === !1 ? !1 : void(this._dc = i)
        }
    }, N(vB, bB);
    var gB = function (t) {
            ni(t)
        },
        yB = {
            version: Ub,
            extend: N,
            doSuperConstructor: j,
            doSuper: B,
            createFunction: z,
            setClass: w,
            appendClass: T,
            removeClass: k,
            forEach: l,
            forEachReverse: v,
            isNumber: M,
            isString: S,
            isBoolean: I,
            isArray: O,
            eventPreventDefault: A,
            eventStopPropagation: C,
            stopEvent: P,
            callLater: m,
            nextFrame: E,
            forEachChild: e,
            forEachByDepthFirst: h,
            forEachByDepthFirstReverse: o,
            forEachByBreadthFirst: c,
            randomInt: L,
            randomBool: R,
            randomColor: U,
            addEventListener: tB,
            getFirstElementChildByTagName: yj
        };
    yB.isTouchSupport = fj, yB[Wb] = rj, yB[To] = ri, yB[Xb] = ai, yB.Rect = wj, yB[Vb] = Ej, yB[Zb] = pj, yB[Kb] = Tj, yB.Event = Rj, yB[Jb] = Dj, yB.ListEvent = Yj, yB[Qb] = Fj, yB[tv] = Gj, yB[iv] = kj, yB[nv] = Hj, yB.SelectionModel = Xj, yB[ev] = Wj, yB[sv] = qj, yB.loadURL = Pi, yB.loadXML = Ai, yB[hv] = Ci, yB[rv] = Ii, yB[av] = xj, yB[ov] = vj, yB[fv] = Si, yB[_v] = function (t) {
        alert(t)
    }, yB[cv] = function (t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[zh](e, s) : s
    }, yB[uv] = function (t, i, n) {
        var e = confirm(t);
        return e && i ? i[zh](n) : e
    }, yB.addCSSRule = vi;
    var pB = {
        IMAGE_ADJUST_FLIP: dv,
        IMAGE_ADJUST_MIRROR: lv,
        SELECTION_TYPE_BORDER_RECT: bv,
        SELECTION_TYPE_BORDER: vv,
        SELECTION_TYPE_SHADOW: gv,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: yv,
        EDGE_TYPE_ELBOW_HORIZONTAL: pv,
        EDGE_TYPE_ELBOW_VERTICAL: xv,
        EDGE_TYPE_ORTHOGONAL: mv,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Ev,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: wv,
        EDGE_TYPE_HORIZONTAL_VERTICAL: Tv,
        EDGE_TYPE_VERTICAL_HORIZONTAL: kv,
        EDGE_TYPE_EXTEND_TOP: Mv,
        EDGE_TYPE_EXTEND_LEFT: Sv,
        EDGE_TYPE_EXTEND_BOTTOM: Iv,
        EDGE_TYPE_EXTEND_RIGHT: Ov,
        EDGE_TYPE_ZIGZAG: Av,
        EDGE_CORNER_NONE: du,
        EDGE_CORNER_ROUND: ko,
        EDGE_CORNER_BEVEL: Cv,
        GROUP_TYPE_RECT: Pv,
        GROUP_TYPE_CIRCLE: Lv,
        GROUP_TYPE_ELLIPSE: Rv,
        SHAPE_CIRCLE: Dv,
        SHAPE_RECT: Pv,
        SHAPE_ROUNDRECT: Nv,
        SHAPE_STAR: jv,
        SHAPE_TRIANGLE: Bv,
        SHAPE_HEXAGON: $v,
        SHAPE_PENTAGON: Fv,
        SHAPE_TRAPEZIUM: Gv,
        SHAPE_RHOMBUS: zv,
        SHAPE_PARALLELOGRAM: qv,
        SHAPE_HEART: Yv,
        SHAPE_DIAMOND: Hv,
        SHAPE_CROSS: Uv,
        SHAPE_ARROW_STANDARD: Wv,
        SHAPE_ARROW_1: Xv,
        SHAPE_ARROW_2: Vv,
        SHAPE_ARROW_3: Zv,
        SHAPE_ARROW_4: Kv,
        SHAPE_ARROW_5: Jv,
        SHAPE_ARROW_6: Qv,
        SHAPE_ARROW_7: tg,
        SHAPE_ARROW_8: ig,
        SHAPE_ARROW_OPEN: ng
    };
    pB[eg] = sg, pB[hg] = ko, pB[rg] = ag, pB.LINE_JOIN_TYPE_BEVEL = Cv, pB[og] = ko, pB[fg] = _g, lj[cg] = pB.SELECTION_TYPE_SHADOW, lj[ug] = 3, lj.SELECTION_BORDER = 2, lj.SELECTION_SHADOW_BLUR = 7, lj[dg] = V(3422561023), lj[cg] = pB.SELECTION_TYPE_SHADOW, lj[lg] = 10, lj.POINTER_WIDTH = 10, lj.DOUBLE_BUFFER = n, lj.ARROW_SIZE = 10, lj.IMAGE_MAX_SIZE = 200, lj.LINE_HEIGHT = 1.2;
    var xB = t[bg] || 1;
    1 > xB && (xB = 1);
    var mB;
    yB[vg] = Gi;
    var EB = function (t, i, n, e) {
        var s = t - n,
            h = i - e;
        return s * s + h * h
    };
    hn[yr] = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, hn._ksCircle = function (t, i, n) {
        if (!n) return en(t, i);
        var e = EB(t.x, t.y, i.x, i.y),
            s = EB(t.x, t.y, n.x, n.y),
            h = EB(n.x, n.y, i.x, i.y);
        if (e + wB >= s + h) return en(t, i, 0, n);
        if (s + wB >= e + h) return en(t, n, 0, i);
        if (h + wB >= e + s) return en(i, n, 0, t);
        var r;
        Math[Vr](n.y - i.y) < 1e-4 && (r = t, t = i, i = r), r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r),
            o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new hn(a, o, xj(a, o, t.x, t.y), t, i, n)
    };
    var wB = .01,
        TB = {
            _o3c: function (t, i, e, s, h) {
                var r = 0,
                    a = 0,
                    o = i._jg;
                if (e = e || 0, t.x === n) {
                    var f = t[Wd],
                        _ = t[Zr],
                        c = !0;
                    switch (f) {
                    case Ij:
                        c = !1;
                        break;
                    case Sj:
                        r += o / 2
                    }
                    switch (_) {
                    case Oj:
                        a -= e / 2;
                        break;
                    case Cj:
                        a += e / 2
                    }
                } else r = t.x, a = t.y, Math[Vr](r) > 0 && Math[Vr](r) < 1 && (r *= o);
                h && null != s && (a += s.y, r += Math.abs(s.x) < 1 ? s.x * o : s.x);
                var u = dn.call(i, r, a, c);
                return u ? (h || null == s || u[gg](s), u) : {
                    x: 0,
                    y: 0
                }
            }, _ma: function (t, i) {
                var n = i[Do],
                    e = i.points;
                switch (n) {
                case ZB:
                    t[yg](e[0], e[1], e[2], e[3], i._r);
                    break;
                case UB:
                    t[D_](e[0], e[1]);
                    break;
                case WB:
                    t[N_](e[0], e[1]);
                    break;
                case XB:
                    t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                    break;
                case VB:
                    t[pg](e[0], e[1], e[2], e[3], e[4], e[5]);
                    break;
                case KB:
                    t[df]()
                }
            }, _6e: function (t, i, n, e) {
                var s = i[Do];
                if (s != UB && s != KB) {
                    var h = n[Ro],
                        r = i[Lo];
                    switch (n[Do] == UB && t[sr](h.x, h.y), s) {
                    case ZB:
                        vn(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]), t[sr](r[0], r[1]), t.add(i._p1x, i._p1y), t[sr](i._p2x, i._p2y), i._o3oundaryPoint1 && t[sr](i._o3oundaryPoint1.x, i._o3oundaryPoint1.y), i._o3oundaryPoint2 && t.add(i._o3oundaryPoint2.x, i._o3oundaryPoint2.y);
                        break;
                    case WB:
                        t[sr](r[0], r[1]);
                        break;
                    case XB:
                        Xi([h.x, h.y][Wh](r), t);
                        break;
                    case VB:
                        Ji([h.x, h.y][Wh](r), t);
                        break;
                    case KB:
                        e && t[sr](e.points[0], e[Lo][1])
                    }
                }
            }, _6c: function (t, i, n) {
                var e = t[Do];
                if (e == UB) return 0;
                var s = i[Ro],
                    h = t.points;
                switch (e == VB && 4 == h.length && (e = XB), e) {
                case WB:
                    return xj(h[0], h[1], s.x, s.y);
                case ZB:
                    return t._jg;
                case XB:
                    var r = Vi([s.x, s.y][Wh](h));
                    return t._lf = r, r(1);
                case VB:
                    var r = tn([s.x, s.y][Wh](h));
                    return t._lf = r, r(1) || Qi([s.x, s.y].concat(h));
                case KB:
                    if (s && n) return t[Lo] = n[Lo], xj(n.points[0], n[Lo][1], s.x, s.y)
                }
                return 0
            }
        },
        kB = /^data:image\/(\w+);base64,/i,
        MB = /^gif/i,
        SB = /^svg/i,
        IB = 10,
        OB = 11,
        AB = 12,
        CB = 20,
        PB = 30;
    lj[Go] = 50, lj[xg] = 30, lj[mg] = 1e6;
    var LB = 1,
        RB = 2,
        DB = 3;
    mn.prototype = {
        _jy: 0,
        _6v: !0,
        _m0: null,
        _k0: null,
        _mb: null,
        _mc: null,
        _o33: n,
        _95: n,
        _6l: function () {
            return this._jy == LB
        }, getBounds: function (t) {
            return this._mc == PB ? this._mb[wo](t) : (this._6v && this._fs(), this)
        }, validate: function () {
            this._6v && this._fs()
        }, _fs: function () {
            if (this._6v = !1, this._mc == PB) return this._mb[Eo](), void this[Eg](this._mb[Of]);
            if (this._mc == CB) return void this._9d();
            if (this._jy != LB) try {
                this._ea()
            } catch (t) {
                this._jy = DB, yB[Ko](t)
            }
        }, _5b: function () {
            this._ds(), this._dispatcher[vc](), delete this._dispatcher
        }, _ic: function (t) {
            this._m0 && this._m0[wg] && this._m0[wg].removeChild(this._m0), this._jy = DB, yB.error(Tg + this._mb), this._pixels = null, this._k0 = null, this._m0 = null, t !== !1 && this._5b()
        }, _ea: function () {
            var t = this._mb;
            if (this._jy = LB, this._dispatcher = new Gj, this._mc == AB) {
                for (var n in a$) this[n] = a$[n];
                return void Qn(this._mb, this, this._d5, this._ic, this._ev)
            }
            this._m0 || (KN ? (this._m0 = i[uo](hu), this._m0[ha].visibility = uu, i.body[fu](this._m0)) : this._m0 = new Image), this._m0[ru] = t, !KN && this._m0[no] ? (this._m0[kg] = this._m0[n_] = null, this._88()) : (this._m0[kg] = KN ? function (t) {
                setTimeout(this._88[Mg](this, t), 100)
            }[Mg](this) : this._88[Mg](this), this._m0[n_] = this._ic[Mg](this))
        }, _88: function () {
            this._jy = RB;
            var t = this._m0.width,
                i = this._m0[eo];
            if (this._m0[wg] && this._m0[wg][ib](this._m0), !t || !i) return void this._ic();
            this.width = t, this[eo] = i;
            var n = this._do();
            n.width = t, n.height = i, n.g[Sg](this._m0, 0, 0, t, i), this._pixels = KN && this._mc == OB ? null : In(n), this._5b()
        }, _9d: function () {
            var t = this._mb;
            if (!(t.draw instanceof Function)) return void this._ic(!1);
            if (t.cacheable === !1 && t[no] && t[eo]) return this[no] = t.width, void(this[eo] = t[eo]);
            var i = t[no] || lj[Ig],
                n = t[eo] || lj.IMAGE_MAX_SIZE,
                e = this._do();
            e[no] = i, e[eo] = n;
            var s = e.g;
            t.draw(s);
            var h = s.getImageData(0, 0, i, n),
                r = An(h[Ao], i, n);
            this.x = r._x, this.y = r._y, this[no] = r._width, this.height = r._height, e.width = this[no], e.height = this[eo], s.putImageData(h, -this.x, -this.y), this._pixels = r
        }, _do: function () {
            return this._k0 || (this._k0 = Gi())
        }, _7r: function (t, i, n, e, s, h) {
            i[Og](), i[Pv](0, 0, e, s), i[Ag] = h || Cg, i[Io](), i[Pg](), i.textAlign = Wc, i.textBaseline = Lg, i[Ag] = Rg;
            var r = 6 * (i[ao][ho] || 1);
            i[go] = Dg + r + "px Verdana,helvetica,arial,sans-serif", i[Ng] = jg, i[Co] = 1, i.strokeText(t, e / 2 + .5, s / 2 + .5), i[Ng] = Bg, i.strokeText(t, e / 2 - .5, s / 2 - .5), i[$g](t, e / 2, s / 2), i.restore()
        }, draw: function (t, i, n, e, s, h) {
            if (this[no] && this.height) {
                i = i || 1, e = e || 1, s = s || 1;
                var r = this[no] * e,
                    a = this.height * s;
                if (h && n[Fg] && (t[Fg] = n.shadowColor, t[Gg] = (n[Gg] || 0) * i, t.shadowOffsetX = (n[zg] || 0) * i, t[qg] = (n.shadowOffsetY || 0) * i), this._jy == LB) return this._7r(Yg, t, i, r, a, n.renderColor);
                if (this._jy == DB) return this._7r(Hg, t, i, r, a, n[Ug]);
                if (this._mc == PB) return t[Sa](e, s), void this._mb.draw(t, i, n);
                var o = this._ge(i, e, s);
                return o ? ((this.x || this.y) && t[Wo](this.x * e, this.y * s), t[Sa](e / o.scale, s / o[Sa]), void o._ma(t, n[Ug], n[Wg])) : void this._k4(t, i, e, s, this[no] * e, this[eo] * s, n)
            }
        }, _k4: function (t, i, n, e, s, h, r) {
            if (this._mc == CB) return 1 != n && 1 != e && t[Sa](n, e), void this._mb.draw(t, r);
            if (this._m0) {
                if (!nj) return void t[Sg](this._m0, 0, 0, s, h);
                var n = i * s / this[no],
                    e = i * h / this[eo];
                t[Sa](1 / n, 1 / e), t[Sg](this._m0, 0, 0, s * n, h * e)
            }
        }, _k6: null,
        _ge: function (t, i, n) {
            if (this._mc == CB && this._mb.cacheable === !1) return null;
            if (this._mc == IB || (t *= Math[xo](i, n)) <= 1) return this._defaultCache || (this._defaultCache = this._h6(this._k0 || this._m0, 1)), this._defaultCache;
            var e = this._k6.maxScale || 0;
            if (t = Math[Xh](t), e >= t) {
                for (var s = t, h = this._k6[s]; !h && ++s <= e;) h = this._k6[s];
                if (h) return h
            }
            t % 2 && t++;
            var r = this[no] * t,
                a = this[eo] * t;
            if (r * a > lj[mg]) return null;
            var o = Gi(r, a);
            return (this.x || this.y) && o.g[Wo](-this.x * t, -this.y * t), this._k4(o.g, 1, t, t, r, a), this._h6(o, t)
        }, _h6: function (t, i) {
            var n = new i$(t, i);
            return this._k6[i] = n, this._k6[Xg] = i, n
        }, hitTest: function (t, i, n) {
            if (this._mc == PB) return this._mb[Kc][gr](this._mb, arguments);
            if (!(this._pixels || this._m0 && this._m0._pixels)) return !0;
            var e = this._pixels || this._m0._pixels;
            return e._i7(t, i, n)
        }, _ds: function () {
            this._dispatcher && this._dispatcher[Ir](new Rj(this, Vg, Zg, this._m0))
        }, _o38: function (t, i) {
            this._dispatcher && this._dispatcher[Xl](t, i)
        }, _7q: function (t, i) {
            this._dispatcher && this._dispatcher[Kg](t, i)
        }, _o10: function (t) {
            this._k6 = {}, (t || this[no] * this.height > 1e5) && (this._m0 = null, this._k0 = null)
        }
    }, N(mn, wj);
    var NB = {};
    yB[Sg] = Mn, yB.registerImage = En, yB.hasImage = Tn, yB[Jg] = function () {
        var t = [];
        for (var i in NB) t.push(i);
        return t
    };
    var jB = function (t, i, n, e, s, h) {
        this[Do] = t, this[Qg] = i, this[ty] = n, this[Uc] = e || 0, this.tx = s || 0, this.ty = h || 0
    };
    pB.GRADIENT_TYPE_RADIAL = Kd, pB[iy] = Vd, jB.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: kj.CENTER_MIDDLE,
        isEmpty: function () {
            return null == this[Qg] || 0 == this.colors[Gh]
        }, _6t: function () {
            var t = this[Qg][Gh];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[Kh](n * e);
            return this.positions || (this[ty] = i), i
        }, generatorGradient: function (t) {
            if (null == this[Qg] || 0 == this.colors[Gh]) return null;
            var i, n = qi();
            if (this[Do] == pB[iy]) {
                var e = this[Uc];
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var h = Math[Yr](t.height, t.width),
                        r = Math.sqrt(t[no] * t[no] + t[eo] * t[eo]),
                        a = h - e;
                    s = Math[Hr](a) * r
                } else {
                    var h = Math[Yr](t.width, t.height),
                        r = Math[mo](t.width * t.width + t[eo] * t[eo]),
                        a = h - (e - Math.PI / 2);
                    s = Math[Hr](a) * r
                }
                var o = s / 2,
                    f = o * Math[Hr](e),
                    _ = o * Math.sin(e),
                    c = t.x + t[no] / 2 - f,
                    u = t.y + t.height / 2 - _,
                    d = t.x + t[no] / 2 + f,
                    l = t.y + t[eo] / 2 + _;
                i = n[ny](c, u, d, l)
            } else {
                if (!(this[Do] = pB[ey])) return null;
                var b = oi(this[sy], t[no], t[eo]);
                b.x += t.x, b.y += t.y, this.tx && (b.x += Math[Vr](this.tx) < 1 ? t[no] * this.tx : this.tx), this.ty && (b.y += Math[Vr](this.ty) < 1 ? t[eo] * this.ty : this.ty);
                var v = xj(b.x, b.y, t.x, t.y);
                v = Math[xo](v, xj(b.x, b.y, t.x, t.y + t[eo])), v = Math[xo](v, xj(b.x, b.y, t.x + t[no], t.y + t.height)), v = Math.max(v, xj(b.x, b.y, t.x + t[no], t.y)), i = n[hy](b.x, b.y, 0, b.x, b.y, v)
            }
            var g = this.colors,
                y = this[ty];
            y && y.length == g[Gh] || (y = this._6t());
            for (var p = 0, x = g[Gh]; x > p; p++) i[ry](y[p], g[p]);
            return i
        }
    };
    var BB = new jB(pB[iy], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        $B = new jB(pB.GRADIENT_TYPE_LINEAR, [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
        FB = (new jB(pB.GRADIENT_TYPE_LINEAR, [V(1154272460), V(1442840575)], [.1, .9], 0), new jB(pB[ey], [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        GB = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
        zB = [0, .12, .28, .45, .6, .75, .8, 1],
        qB = new jB(pB[iy], GB, zB),
        YB = new jB(pB[iy], GB, zB, Math.PI / 2),
        HB = new jB(pB[ey], GB, zB);
    jB.LINEAR_GRADIENT_VERTICAL = BB, jB.LINEAR_GRADIENT_HORIZONTAL = $B, jB.RADIAL_GRADIENT = FB, jB[ay] = qB, jB.RAINBOW_LINEAR_GRADIENT_VERTICAL = YB, jB[oy] = HB;
    var UB = Jd,
        WB = Vd,
        XB = fy,
        VB = Zd,
        ZB = _y,
        KB = cy;
    pB[uy] = UB, pB.SEGMENT_LINE_TO = WB, pB[dy] = XB, pB.SEGMENT_CURVE_TO = VB, pB[ly] = ZB, pB[by] = KB;
    var JB = function (t, i) {
        this.id = ++XN, O(t) ? this[Lo] = t : (this[Do] = t, this[Lo] = i)
    };
    JB[yr] = {
        toJSON: function () {
            var t = {
                type: this[Do],
                points: this[Lo]
            };
            return this.invalidTerminal && (t.invalidTerminal = !0), t
        }, parseJSON: function (t) {
            this.type = t[Do], this.points = t[Lo], this[vy] = t[vy]
        }, points: null,
        type: WB,
        clone: function () {
            return new JB(this[Do], g(this[Lo]))
        }, move: function (t, i) {
            if (this[Lo])
                for (var n = 0, e = this[Lo][Gh]; e > n; n++) {
                    var s = this[Lo][n];
                    yB[gy](s) && (this.points[n] += n % 2 == 0 ? t : i)
                }
        }
    }, K(JB.prototype, {
        lastPoint: {
            get: function () {
                return this[Do] == ZB ? {
                    x: this._p2x,
                    y: this._p2y
                } : {
                    x: this[Lo][this[Lo][Gh] - 2],
                    y: this[Lo][this[Lo][Gh] - 1]
                }
            }
        },
        firstPoint: {
            get: function () {
                return {
                    x: this.points[0],
                    y: this.points[1]
                }
            }
        }
    }), yB.PathSegment = JB;
    var QB = 0,
        t$ = function (t) {
            this[Of] = new wj, this._hg = t || []
        };
    t$.prototype = {
        toJSON: function () {
            var t = [];
            return this._hg[h_](function (i) {
                t.push(i.toJSON())
            }), t
        }, parseJSON: function (t) {
            var i = this._hg;
            t[h_](function (t) {
                i[Kh](new JB(t[Do], t[Lo]))
            })
        }, clear: function () {
            this._hg[Gh] = 0, this.bounds[vc](), this._jg = 0, this._6v = !0
        }, _dr: !0,
        _73: function (t, i) {
            this._dr && 0 === this._hg[Gh] && t != UB && this._hg.push(new JB(UB, [0, 0])), this._hg[Kh](new JB(t, i)), this._6v = !0
        }, add: function (t) {
            this._hg[Kh](t), this._6v = !0
        }, removePathSegment: function (t) {
            return t >= this._hg[Gh] ? !1 : (this._hg[Uh](t, 1), void(this._6v = !0))
        }, moveTo: function (t, i) {
            this._73(UB, [t, i])
        }, lineTo: function (t, i) {
            this._73(WB, [t, i])
        }, quadTo: function (t, i, n, e) {
            this._73(XB, [t, i, n, e])
        }, curveTo: function (t, i, n, e, s, h) {
            this._73(VB, [t, i, n, e, s, h])
        }, arcTo: function (t, i, n, e, s) {
            this._73(ZB, [t, i, n, e, s])
        }, closePath: function () {
            this._73(KB)
        }, _85: function (t, i, n, e, s) {
            if (e.selectionColor) {
                if (n == pB.SELECTION_TYPE_SHADOW) {
                    if (!e.selectionShadowBlur) return;
                    return t[Fg] = e[yy], t[Gg] = e[py] * i, t[zg] = (e[xy] || 0) * i, void(t[qg] = (e[my] || 0) * i)
                }
                if (n == pB.SELECTION_TYPE_BORDER) {
                    if (!e[Ey]) return;
                    t[Ng] = e[yy], t[Co] = e.selectionBorder + (s[Co] || 0), this._ma(t), t[wy]()
                }
            }
        }, _6v: !0,
        _hg: null,
        _jg: 0,
        lineCap: sg,
        lineJoin: ko,
        draw: function (t, i, n, e, s) {
            t[Ty] = n[Ty] || this[Ty], t.lineJoin = n[ky] || this.lineJoin, e && (s || (s = n), this._85(t, i, s[My], s, n)), n[Sy] && (this._ma(t), t.lineWidth = n[Co] + 2 * (n[Iy] || 0), t[Ng] = n[Sy], t.stroke()), t.lineWidth = 0, this._ma(t), n[Oy] && (t[Ag] = n[Ug] || n.fillColor, t[Io]()), n[Ay] && (t[Ag] = n._fillGradient || n[Ay], t[Io]()), n.lineWidth && (t[Co] = n[Co], n.lineDash && (t[jf] = n[jf], t[zf] = n[zf]), t[Ng] = n[Ug] || n[Ng], t[wy](), t.lineDash = [])
        }, _ma: function (t) {
            t[Cy]();
            for (var i, n, e = 0, s = this._hg.length; s > e; e++) i = this._hg[e], TB._ma(t, i, n), n = i
        }, invalidate: function () {
            this._6v = !0
        }, validate: function () {
            if (this._6v = !1, this[Of][vc](), this._jg = 0, 0 != this._hg[Gh])
                for (var t, i, n = this._hg, e = 1, s = n[0], h = s, r = n.length; r > e; e++) t = n[e], t[Do] == UB ? h = t : (TB._6e(this[Of], t, s, h), i = TB._6c(t, s, h), t._jg = i, this._jg += i), s = t
        }, getBounds: function (t, i) {
            if (this._6v && this.validate(), i = i || new wj, t) {
                var n = t / 2;
                i[Mr](this[Of].x - n, this.bounds.y - n, this.bounds[no] + t, this[Of].height + t)
            } else i[Mr](this.bounds.x, this[Of].y, this[Of][no], this[Of][eo]);
            return i
        }, hitTest: function (t, i, n, e, s, h) {
            return un[zh](this, t, i, n, e, s, h)
        }, toSegments: function () {
            return [].concat(this._hg)
        }, generator: function (t, i, n, e, s) {
            return cn[zh](this, t, i, n, e, s)
        }, getLocation: function (t, i) {
            return dn[zh](this, t, i || 0)
        }
    }, K(t$[yr], {
        segments: {
            get: function () {
                return this._hg
            }, set: function (t) {
                this[vc](), this._hg = t
            }
        },
        length: {
            get: function () {
                return this._6v && this[Eo](), this._jg
            }
        },
        _empty: {
            get: function () {
                return 0 == this._hg[Gh]
            }
        }
    }), On[yr] = {
        _1f: function (t, i) {
            var n, e, s, h, r, a = t.length,
                o = 0,
                f = 0;
            for (r = 0; a > r; r += 4)
                if (t[r + 3] > 0) {
                    n = (r + 4) / i / 4 | 0;
                    break
                }
            for (r = a - 4; r >= 0; r -= 4)
                if (t[r + 3] > 0) {
                    e = (r + 4) / i / 4 | 0;
                    break
                }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) {
                        s = o;
                        break
                    }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) {
                        h = o;
                        break
                    }
                if (h >= 0) break
            }
            this._x = s, this._y = n, this._width = h - s + 1, this._height = e - n + 1, this._k3 = new wj(s, n, this._width, this._height), this._pixelSize = this._width * this._height, this._originalPixelsWidth = i, this._originalPixels = t
        }, _e1: function (t, i) {
            return this._originalPixels[4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        }, _i7: function (t, i, n) {
            if (t = Math.round(t - this._x), i = Math[ko](i - this._y), !n || 1 >= n) return this._e1(t, i);
            n = 0 | n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._e1(e, s)) return !0;
                    ++e
                }++s
            }
            return !1
        }
    }, pB[nf] = Py, pB[tf] = Ly, pB[ef] = Ry, pB[sf] = Dy, pB[hf] = Ny, pB[rf] = jy, pB[ff] = By, lj[Qo] = pB[sf];
    var i$ = function (t, i, n) {
        this._k0 = t, this[Sa] = i || 1, t instanceof Image && (n = !1), this._ia = n
    };
    i$[yr] = {
        scale: 1,
        _k0: null,
        _k6: null,
        _ia: !0,
        _ma: function (t, i, n) {
            if (!i || this._ia === !1) return void t[Sg](this._k0, 0, 0);
            this._k6 || (this._k6 = {});
            var e = i + n,
                s = this._k6[e];
            if (s || (s = Ln(this._k0, i, n), s || (this._ia = !1), this._k6[e] = s || this._k0), s)
                if (KN) try {
                    t[Sg](s, 0, 0)
                } catch (h) {} else t[Sg](s, 0, 0)
        }
    };
    var n$ = function (t, i, n, e, s, h, r, a, o) {
            this._n0 = jn(t, i, n, e, s, h, r, a, o)
        },
        e$ = {
            server: {
                draw: function (t) {
                    t[Og](), t.translate(0, 0), t.beginPath(), t[D_](0, 0), t[N_](40, 0), t[N_](40, 40), t[N_](0, 40), t.closePath(), t[Pg](), t.translate(0, 0), t.translate(0, 0), t[Sa](1, 1), t[Wo](0, 0), t.strokeStyle = $y, t[Ty] = sg, t[ky] = _g, t.miterLimit = 4, t[Og](), t[Og](), t[Fy](), t[Og](), t[Fy](), t[Og](), t[Fy](), t[Og](), t[Fy](), t[Og](), t.restore(), t[Og](), t[Fy](), t[Og](), t[Fy](), t.save(), t[Fy](), t[Og](), t.restore(), t[Og](), t.restore(), t[Og](), t[Fy](), t[Og](), t[Fy](), t[Og](), t[Fy](), t[Fy](), t[Og]();
                    var i = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
                    i[ry](.0493, Gy), i[ry](.0689, zy), i.addColorStop(.0939, qy), i[ry](.129, Yy), i[ry](.2266, Hy), i[ry](.2556, Uy), i[ry](.2869, Wy), i[ry](.3194, Xy), i.addColorStop(.3525, Vy), i[ry](.3695, Zy), i[ry](.5025, Ky), i[ry](.9212, Jy), i.addColorStop(1, Qy), t[Ag] = i, t[Cy](), t[D_](25.677, 4.113), t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[pg](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t[pg](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[pg](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[pg](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[pg](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[pg](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[pg](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t[df](), t[Io](), t.stroke(), t[Fy](), t.save(), t[Og](), t[Ag] = tp, t.beginPath(), t[D_](19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[pg](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[pg](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[N_](21.398, 36.253), t[pg](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[pg](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[pg](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[N_](4.675, 37.877), t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t[pg](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[pg](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t[pg](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[N_](2.924, 8.431), t[pg](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[pg](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[N_](19.763, 6.645), t[df](), t.fill(), t.stroke(), t.restore(), t.restore(), t[Og](), t.fillStyle = ip, t[Cy](), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t.closePath(), t[Io](), t.stroke(), t[Fy](), t[Og](), t.fillStyle = tp, t.beginPath(), t[np](12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[df](), t.fill(), t[wy](), t[Fy](), t.save(), t[Ag] = ip, t.beginPath(), t.moveTo(19.377, 17.247), t[pg](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[N_](5.882, 18.108999999999998), t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t.lineTo(5.02, 11.144), t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t[pg](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t.lineTo(19.377, 17.247), t.closePath(), t.fill(), t[wy](), t[Fy](), t[Og](), t[Og](), t[Ag] = tp, t[Cy](), t[D_](18.536, 13.176), t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t[N_](6.479, 13.794), t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t[N_](5.861, 11.84), t.bezierCurveTo(5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t[N_](17.918, 11.221), t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[N_](18.535, 13.176), t[df](), t.fill(), t[wy](), t[Fy](), t.save(), t[Ag] = tp, t[Cy](), t.moveTo(18.536, 16.551), t[pg](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t[N_](6.479, 17.168999999999997), t[pg](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t[N_](5.861, 15.215999999999998), t[pg](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t[N_](17.918, 14.596999999999998), t[pg](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t[N_](18.535, 16.551), t[df](), t[Io](), t.stroke(), t[Fy](), t[Fy](), t.restore()
                }
            },
            exchanger2: {
                draw: function (t) {
                    t[Og](), t[Wo](0, 0), t[Cy](), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[N_](0, 40), t[df](), t[Pg](), t.translate(0, 0), t[Wo](0, 0), t[Sa](1, 1), t[Wo](0, 0), t[Ng] = $y, t[Ty] = sg, t[ky] = _g, t[ep] = 4, t[Og](), t[Og](), t[Fy](), t.save(), t.restore(), t[Og](), t[Fy](), t.save(), t.restore(), t[Og](), t[Fy](), t[Og](), t.restore(), t.save(), t[Fy](), t.save(), t[Fy](), t[Og](), t[Fy](), t[Og](), t.restore(), t[Fy](), t.save();
                    var i = t[ny](.4102, 24.3613, 39.5898, 24.3613);
                    i[ry](0, Gy), i[ry](.0788, Hy), i.addColorStop(.2046, sp), i[ry](.3649, hp), i[ry](.5432, rp), i.addColorStop(.6798, ap), i[ry](.7462, op), i[ry](.8508, fp), i.addColorStop(.98, Uy), i.addColorStop(1, _p), t[Ag] = i, t.beginPath(), t[D_](.41, 16.649), t[pg](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[pg](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[pg](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[pg](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[pg](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t[pg](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[df](), t[Io](), t[wy](), t.restore(), t.save(), t[Og](), t[Ag] = tp, t[Cy](), t.moveTo(16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[pg](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[pg](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[pg](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[pg](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t[pg](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t[pg](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[df](), t[Io](), t[wy](), t.restore(), t[Fy](), t[Og](), t.save(), t.save(), t[Og](), t[Og](), t.fillStyle = cp, t[Cy](), t[D_](5.21, 21.754), t[N_](8.188, 17.922), t[N_](9.53, 18.75), t[N_](15.956, 16.004), t[N_](18.547, 17.523), t[N_](12.074, 20.334), t.lineTo(13.464, 21.204), t[N_](5.21, 21.754), t[df](), t.fill(), t.stroke(), t[Fy](), t[Fy](), t[Fy](), t[Og](), t[Og](), t[Og](), t[Ag] = cp, t[Cy](), t.moveTo(17.88, 14.61), t[N_](9.85, 13.522), t[N_](11.703, 12.757), t[N_](7.436, 10.285), t.lineTo(10.783, 8.942), t[N_](15.091, 11.357), t[N_](16.88, 10.614), t.lineTo(17.88, 14.61), t.closePath(), t[Io](), t.stroke(), t.restore(), t[Fy](), t[Og](), t.save(), t.fillStyle = cp, t[Cy](), t[D_](17.88, 14.61), t[N_](9.85, 13.522), t[N_](11.703, 12.757), t[N_](7.436, 10.285), t[N_](10.783, 8.942), t[N_](15.091, 11.357), t[N_](16.88, 10.614), t[N_](17.88, 14.61), t[df](), t[Io](), t[wy](), t[Fy](), t[Fy](), t[Fy](), t[Og](), t[Og](), t[Og](), t.fillStyle = cp, t.beginPath(), t[D_](23.556, 15.339), t[N_](20.93, 13.879), t[N_](26.953, 11.304), t[N_](25.559, 10.567), t.lineTo(33.251, 9.909), t[N_](31.087, 13.467), t.lineTo(29.619, 12.703), t[N_](23.556, 15.339), t[df](), t[Io](), t.stroke(), t[Fy](), t[Fy](), t.restore(), t[Og](), t[Og](), t[Og](), t.fillStyle = cp, t[Cy](), t[D_](30.028, 23.383), t[N_](24.821, 20.366), t[N_](22.915, 21.227), t.lineTo(21.669, 16.762), t[N_](30.189, 17.942), t.lineTo(28.33, 18.782), t[N_](33.579, 21.725), t[N_](30.028, 23.383), t[df](), t[Io](), t[wy](), t.restore(), t[Fy](), t.save(), t[Og](), t[Ag] = cp, t[Cy](), t[D_](30.028, 23.383), t.lineTo(24.821, 20.366), t[N_](22.915, 21.227), t[N_](21.669, 16.762), t.lineTo(30.189, 17.942), t.lineTo(28.33, 18.782), t[N_](33.579, 21.725), t[N_](30.028, 23.383), t[df](), t[Io](), t[wy](), t[Fy](), t[Fy](), t.restore(), t[Fy](), t[Fy](), t.restore()
                }
            },
            exchanger: {
                draw: function (t) {
                    t.save(), t.translate(0, 0), t[Cy](), t.moveTo(0, 0), t[N_](40, 0), t.lineTo(40, 40), t[N_](0, 40), t[df](), t[Pg](), t[Wo](0, 0), t[Wo](0, 0), t[Sa](1, 1), t[Wo](0, 0), t[Ng] = $y, t[Ty] = sg, t.lineJoin = _g, t[ep] = 4, t[Og](), t[Og](), t[Fy](), t.save(), t[Fy](), t[Og](), t.restore(), t.save(), t[Fy](), t[Og](), t[Fy](), t[Og](), t[Fy](), t.save(), t[Fy](), t.restore(), t[Og]();
                    var i = t[ny](.2095, 20.7588, 39.4941, 20.7588);
                    i[ry](0, up), i[ry](.0788, dp), i[ry](.352, lp), i[ry](.6967, bp), i[ry](.8916, vp), i[ry](.9557, gp), i[ry](1, yp), t[Ag] = i, t[Cy](), t[D_](39.449, 12.417), t[N_](39.384, 9.424), t[pg](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t.bezierCurveTo(-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[pg](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[N_](37.711, 30.316999999999997), t.lineTo(39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[pg](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[df](), t[Io](), t[wy](), t.restore(), t.save(), t.save(), t.save(), t[Og](), t.restore(), t[Og](), t.restore(), t[Og](), t.restore(), t[Og](), t[Fy](), t[Og](), t.restore(), t[Og](), t[Fy](), t.save(), t[Fy](), t[Og](), t[Fy](), t[Og](), t.restore(), t.restore(), t[Og]();
                    var i = t[ny](19.8052, 7.7949, 19.8052, 24.7632);
                    i[ry](0, pp), i.addColorStop(.1455, xp), i.addColorStop(.2975, mp), i[ry](.4527, Ep), i[ry](.6099, wp), i[ry](.7687, Tp), i[ry](.9268, kp), i[ry](.9754, Mp), i[ry](1, Sp), t[Ag] = i, t[Cy](), t.moveTo(33.591, 24.763), t[pg](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[pg](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t[pg](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[pg](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[pg](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[pg](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[pg](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[pg](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[pg](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[df](), t.fill(), t[wy](), t.restore(), t[Fy](), t[Fy](), t[Og](), t.save(), t[Og](), t.fillStyle = cp, t[Cy](), t[D_](10.427, 19.292), t.lineTo(5.735, 16.452), t.lineTo(12.58, 13.8), t.lineTo(12.045, 15.07), t[N_](20.482, 15.072), t[N_](19.667, 17.887), t.lineTo(11.029, 17.851), t[N_](10.427, 19.292), t[df](), t[Io](), t[wy](), t.restore(), t[Fy](), t[Og](), t[Og](), t[Ag] = cp, t[Cy](), t[D_](13.041, 13.042), t.lineTo(8.641, 10.73), t.lineTo(14.82, 8.474), t[N_](14.373, 9.537), t[N_](22.102, 9.479), t[N_](21.425, 11.816), t.lineTo(13.54, 11.85), t[N_](13.041, 13.042), t.closePath(), t[Io](), t[wy](), t[Fy](), t[Fy](), t[Og](), t[Og](), t[Ag] = cp, t[Cy](), t[D_](29.787, 16.049), t.lineTo(29.979, 14.704), t.lineTo(21.51, 14.706), t[N_](22.214, 12.147), t[N_](30.486, 12.116), t[N_](30.653, 10.926), t.lineTo(36.141, 13.4), t[N_](29.787, 16.049), t.closePath(), t[Io](), t[wy](), t.restore(), t[Fy](), t[Og](), t[Og](), t.fillStyle = cp, t[Cy](), t[D_](28.775, 23.14), t[N_](29.011, 21.49), t[N_](19.668, 21.405), t[N_](20.523, 18.295), t[N_](29.613, 18.338), t[N_](29.815, 16.898), t[N_](35.832, 19.964), t[N_](28.775, 23.14), t[df](), t[Io](), t[wy](), t[Fy](), t.restore(), t[Fy](), t[Fy]()
                }
            },
            cloud: {
                draw: function (t) {
                    t[Og](), t.beginPath(), t[D_](0, 0), t.lineTo(90.75, 0), t[N_](90.75, 62.125), t[N_](0, 62.125), t.closePath(), t[Pg](), t[Ng] = $y, t[Ty] = sg, t.lineJoin = _g, t[ep] = 4, t.save();
                    var i = t[ny](44.0054, 6.4116, 44.0054, 51.3674);
                    i[ry](0, "rgba(159, 160, 160, 0.7)"), i[ry](.9726, Ip), t[Ag] = i, t.beginPath(), t.moveTo(57.07, 20.354), t[pg](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[pg](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[pg](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[pg](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t.bezierCurveTo(14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[pg](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t[pg](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[pg](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[pg](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[pg](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[df](), t[Io](), t[wy](), t[Fy](), t.restore()
                }
            },
            node: {
                width: 60,
                height: 100,
                draw: function (t) {
                    t.save(), t[Wo](0, 0), t[Cy](), t.moveTo(0, 0), t[N_](40, 0), t[N_](40, 40), t.lineTo(0, 40), t[df](), t[Pg](), t.translate(0, 0), t[Wo](0, 0), t[Sa](1, 1), t.translate(0, 0), t.strokeStyle = $y, t[Ty] = sg, t[ky] = _g, t[ep] = 4, t[Og](), t[Ag] = Op, t[Cy](), t.moveTo(13.948, 31.075), t[N_](25.914, 31.075), t[Ap](25.914, 31.075, 25.914, 31.075), t[N_](25.914, 34.862), t[Ap](25.914, 34.862, 25.914, 34.862), t.lineTo(13.948, 34.862), t[Ap](13.948, 34.862, 13.948, 34.862), t[N_](13.948, 31.075), t[Ap](13.948, 31.075, 13.948, 31.075), t.closePath(), t[Io](), t.stroke(), t[Fy](), t[Og](), t[Ag] = Cp, t.beginPath(), t[D_](29.679, 35.972), t[pg](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t[N_](11.456, 37.244), t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[N_](10.183, 36.136), t[pg](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[N_](28.407, 34.863), t[pg](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[N_](29.678, 35.972), t.closePath(), t[Io](), t[wy](), t[Fy](), t[Og](), t[Ag] = Cp, t[Cy](), t.moveTo(.196, 29.346), t[pg](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[N_](37.936, 31.075), t[pg](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[N_](39.665, 27.174), t[N_](.196, 27.174), t.lineTo(.196, 29.346), t.closePath(), t[Io](), t.stroke(), t.restore(), t[Og](), t[Ag] = Pp, t.beginPath(), t[D_](37.937, 3.884), t.lineTo(1.926, 3.884), t[pg](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[N_](.19699999999999984, 27.12), t[N_](39.666000000000004, 27.12), t[N_](39.666000000000004, 5.615), t[pg](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[df](), t.fill(), t[wy](), t[Fy](), t[Og](), t[Og](), t.restore(), t[Og](), t.restore(), t[Fy](), t[Og]();
                    var i = t[ny](6.9609, 2.9341, 32.9008, 28.874);
                    i[ry](0, Lp), i[ry](1, Rp), t[Ag] = i, t[Cy](), t.moveTo(35.788, 6.39), t.lineTo(4.074, 6.39), t[pg](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[N_](2.702, 24.616), t[N_](37.159, 24.616), t[N_](37.159, 7.763), t[pg](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[df](), t[Io](), t[wy](), t.restore(), t[Fy]()
                }
            },
            group: {
                draw: function (t) {
                    t.save(), t[Wo](0, 0), t[Cy](), t[D_](0, 0), t.lineTo(47.75, 0), t[N_](47.75, 40), t.lineTo(0, 40), t[df](), t.clip(), t[Wo](0, 0), t[Wo](0, 0), t[Sa](1, 1), t[Wo](0, 0), t[Ng] = $y, t.lineCap = sg, t[ky] = _g, t[ep] = 4, t[Og](), t[Og](), t[Ag] = Op, t[Cy](), t[D_](10.447, 26.005), t.lineTo(18.847, 26.005), t[Ap](18.847, 26.005, 18.847, 26.005), t.lineTo(18.847, 28.663), t[Ap](18.847, 28.663, 18.847, 28.663), t[N_](10.447, 28.663), t[Ap](10.447, 28.663, 10.447, 28.663), t[N_](10.447, 26.005), t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005), t[df](), t.fill(), t[wy](), t[Fy](), t[Og](), t[Ag] = Cp, t[Cy](), t.moveTo(21.491, 29.443), t[pg](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[N_](8.698, 30.338), t[pg](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[N_](7.8020000000000005, 29.557000000000002), t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[N_](20.597, 28.662000000000003), t.bezierCurveTo(21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[N_](21.491, 29.443), t[df](), t[Io](), t[wy](), t[Fy](), t[Og](), t[Ag] = Cp, t[Cy](), t[D_](.789, 24.79), t[pg](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t.lineTo(27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[N_](28.504, 23.267), t[N_](.789, 23.267), t[N_](.789, 24.79), t[df](), t[Io](), t.stroke(), t[Fy](), t.save(), t[Ag] = Pp, t[Cy](), t[D_](27.289, 6.912), t[N_](2.006, 6.912), t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[N_](.7889999999999997, 23.227), t.lineTo(28.503999999999998, 23.227), t[N_](28.503999999999998, 8.126), t[pg](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t[df](), t[Io](), t[wy](), t[Fy](), t[Og](), t[Og](), t[Fy](), t.save(), t[Fy](), t.restore(), t[Og]();
                    var i = t[ny](5.54, 6.2451, 23.7529, 24.458);
                    i[ry](0, Lp), i[ry](1, Rp), t[Ag] = i, t[Cy](), t[D_](25.78, 8.671), t.lineTo(3.514, 8.671), t[pg](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[N_](2.549, 21.466), t[N_](26.743, 21.466), t[N_](26.743, 9.636), t[pg](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t.closePath(), t[Io](), t[wy](), t[Fy](), t.restore(), t[Og](), t[Og](), t[Ag] = Op, t.beginPath(), t.moveTo(27.053, 33.602), t.lineTo(36.22, 33.602), t[Ap](36.22, 33.602, 36.22, 33.602), t[N_](36.22, 36.501), t[Ap](36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t[Ap](27.053, 36.501, 27.053, 36.501), t[N_](27.053, 33.602), t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602), t.closePath(), t[Io](), t[wy](), t.restore(), t.save(), t[Ag] = Cp, t[Cy](), t[D_](39.104, 37.352), t[pg](39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[N_](25.143, 38.327), t[pg](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t[pg](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t.lineTo(39.105, 37.352), t.closePath(), t.fill(), t[wy](), t.restore(), t[Og](), t.fillStyle = Cp, t[Cy](), t[D_](16.514, 32.275), t[pg](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[N_](45.433, 33.601), t[pg](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[N_](46.758, 30.607999999999997), t[N_](16.514, 30.607999999999997), t[N_](16.514, 32.275), t.closePath(), t.fill(), t[wy](), t.restore(), t[Og](), t[Ag] = Pp, t.beginPath(), t.moveTo(45.433, 12.763), t[N_](17.839, 12.763), t[pg](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[N_](16.514, 30.57), t[N_](46.757999999999996, 30.57), t[N_](46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t.closePath(), t[Io](), t.stroke(), t[Fy](), t[Og](), t[Og](), t[Fy](), t.save(), t.restore(), t[Fy](), t[Og](), i = t[ny](21.6973, 12.0352, 41.5743, 31.9122), i[ry](0, Lp), i[ry](1, Rp), t[Ag] = i, t.beginPath(), t.moveTo(43.785, 14.683), t.lineTo(19.486, 14.683), t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t[N_](18.433, 28.649), t.lineTo(44.837, 28.649), t[N_](44.837, 15.734), t[pg](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[df](), t[Io](), t.stroke(), t[Fy](), t[Fy](), t[Og](), t[Dp] = .5, t[Cy](), t.moveTo(23.709, 36.33), t[N_](4.232, 36.33), t[N_](4.232, 27.199), t.lineTo(5.304, 27.199), t.lineTo(5.304, 35.259), t[N_](23.709, 35.259), t[N_](23.709, 36.33), t[df](), t[Io](), t.stroke(), t[Fy](), t.restore()
                }
            },
            subnetwork: {
                draw: function (t) {
                    t[Og](), t.translate(0, 0), t[Cy](), t[D_](0, 0), t.lineTo(60.75, 0), t[N_](60.75, 42.125), t.lineTo(0, 42.125), t[df](), t[Pg](), t[Wo](0, .26859504132231393), t.scale(.6694214876033058, .6694214876033058), t.translate(0, 0), t[Ng] = $y, t[Ty] = sg, t[ky] = _g, t[ep] = 4, t.save(), t[Og](), t[Fy](), t[Og](), t[Fy](), t[Fy](), t[Og]();
                    var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                    i[ry](0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, Ip), t[Ag] = i, t[Cy](), t[D_](61.732, 16.509), t[pg](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[pg](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[pg](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[pg](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[pg](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t[pg](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t[pg](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[pg](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t[df](), t[Io](), t[wy](), t[Fy](), t[Og](), t.save(), t[Ag] = Op, t.beginPath(), t[D_](34.966, 44.287), t.lineTo(45.112, 44.287), t[Ap](45.112, 44.287, 45.112, 44.287), t[N_](45.112, 47.497), t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497), t[N_](34.966, 47.497), t[Ap](34.966, 47.497, 34.966, 47.497), t[N_](34.966, 44.287), t[Ap](34.966, 44.287, 34.966, 44.287), t[df](), t[Io](), t.stroke(), t[Fy](), t.save(), t.fillStyle = Np, t[Cy](), t.moveTo(48.306, 48.439), t[pg](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t[pg](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t.lineTo(31.771, 48.578), t[pg](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[N_](47.226, 47.497), t.bezierCurveTo(47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t.lineTo(48.306, 48.439), t.closePath(), t[Io](), t[wy](), t.restore(), t[Og](), t[Ag] = jp, t[Cy](), t[D_](23.302, 42.82), t[pg](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t[pg](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t.lineTo(56.775, 40.98), t[N_](23.302, 40.98), t[N_](23.302, 42.82), t.closePath(), t[Io](), t[wy](), t.restore(), t[Og](), t.fillStyle = Pp, t[Cy](), t.moveTo(55.307, 21.229), t[N_](24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t[N_](56.774, 40.933), t[N_](56.774, 22.695), t[pg](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[df](), t[Io](), t[wy](), t[Fy](), t[Og](), t[Og](), t[Fy](), t[Og](), t.restore(), t.restore(), t[Og](), i = t[ny](29.04, 20.4219, 51.0363, 42.4181), i[ry](0, Lp), i.addColorStop(1, Rp), t.fillStyle = i, t.beginPath(), t.moveTo(53.485, 23.353), t[N_](26.592, 23.353), t[pg](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[N_](25.427, 38.807), t[N_](54.647, 38.807), t.lineTo(54.647, 24.517000000000003), t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[df](), t[Io](), t[wy](), t[Fy](), t[Fy](), t[Fy]()
                }
            }
        };
    for (var s$ in e$) En(Bp + s$, e$[s$]);
    var h$ = function () {
            this.$invalidateRotate = !1;
            var t = this._gu;
            t[vc]();
            var i = this._89.x + this.$border / 2,
                n = this._89.y + this[Tf] / 2,
                e = this._89[no] - this[Tf],
                s = this._89[eo] - this[Tf],
                h = Hn[zh](this, {
                    x: i,
                    y: n
                });
            Vn(t, h.x, h.y, !0), h = Hn[zh](this, {
                x: i + e,
                y: n
            }), Vn(t, h.x, h.y), h = Hn.call(this, {
                x: i + e,
                y: n + s
            }), Vn(t, h.x, h.y), h = Hn[zh](this, {
                x: i,
                y: n + s
            }), Vn(t, h.x, h.y), this.__mvPointer && (h = Hn[zh](this, {
                x: this._pointerX,
                y: this._pointerY
            }), Vn(t, h.x, h.y)), this[Tf] && t.grow(this[Tf] / 2)
        },
        r$ = 20,
        a$ = {
            _gs: !1,
            _kf: null,
            _d3: 0,
            _m3: -1,
            _m2: null,
            _ev: function (t) {
                this._kf || (this._kf = [], this._jy = RB), this._kf[Kh](t), this._e5(), this._l2()
            }, _l2: function () {
                if (!this._m2) {
                    var t = this;
                    this._m2 = setTimeout(function i() {
                        return t._e5() !== !1 ? void(t._m2 = setTimeout(i, t._gm())) : void delete t._m2
                    }, this._gm())
                }
            }, _gm: function () {
                return Math[xo](r$, this._kf[this._m3].delay)
            }, _e5: function () {
                return this._gg(this._m3 + 1)
            }, _gg: function (t) {
                if (this._gs) t %= this._d3;
                else if (t >= this._kf.length) return !1;
                if (this._m3 == t) return !1;
                this._m3 = t;
                var i = this._kf[this._m3],
                    n = i._o1ache;
                return n || (i._o1ache = n = Gi(this[no], this[eo]), n.g.putImageData(i[Ao], 0, 0), n._pixels = i._pixels), this._m0 = n, this[xf] = !0, this._ds()
            }, _d5: function () {
                return this._kf ? (this._gs = !0, this._d3 = this._kf[Gh], 1 == this._d3 ? this._ds() : void this._l2()) : void this._ic()
            }, _me: function () {
                this._m2 && (clearTimeout(this._m2), delete this._m2)
            }, _ds: function () {
                var t = this._dispatcher[Il];
                if (!t || !t.length) return !1;
                for (var i = new Rj(this, Vg, Zg, this._m0), n = 0, e = t[Gh]; e > n; n++) {
                    var s = t[n];
                    s[mr]._jn && s[mr]._jn._iged ? (t[Uh](n, 1), n--, e--) : s[Ir][zh](s.scope, i)
                }
                return t.length > 0
            }, _o38: function (t, i) {
                this._dispatcher[Xl](t, i), this._gs && !this._m2 && this._l2()
            }, _7q: function (t, i) {
                this._dispatcher.removeListener(t, i), this._dispatcher._o3h() || this._me()
            }, _ig: function () {
                this._me(), this._dispatcher[vc]()
            }, _ge: function () {
                var t = this._m0._o3ufferedImage;
                return t || (this._m0._o3ufferedImage = t = new i$(this._m0, 1)), t
            }
        },
        o$ = function (t) {
            return t[$p](function (t, i) {
                return 2 * t + i
            }, 0)
        },
        f$ = function (t) {
            for (var i = [], n = 7; n >= 0; n--) i.push(!!(t & 1 << n));
            return i
        },
        _$ = function (t) {
            this.data = t, this[Fp] = this[Ao][Gh], this[Gp] = 0, this[zp] = function () {
                if (this[Gp] >= this[Ao][Gh]) throw new Error("Attempted to read past end of stream.");
                return 255 & t.charCodeAt(this.pos++)
            }, this[qp] = function (t) {
                for (var i = [], n = 0; t > n; n++) i[Kh](this[zp]());
                return i
            }, this[Yp] = function (t) {
                for (var i = "", n = 0; t > n; n++) i += String[f_](this[zp]());
                return i
            }, this[Hp] = function () {
                var t = this[qp](2);
                return (t[1] << 8) + t[0]
            }
        },
        c$ = function (t, i) {
            for (var n, e, s = 0, h = function (t) {
                for (var n = 0, e = 0; t > e; e++) i[r_](s >> 3) & 1 << (7 & s) && (n |= 1 << e), s++;
                return n
            }, r = [], a = 1 << t, o = a + 1, f = t + 1, _ = [], c = function () {
                _ = [], f = t + 1;
                for (var i = 0; a > i; i++) _[i] = [i];
                _[a] = [], _[o] = null
            };;)
                if (e = n, n = h(f), n !== a) {
                    if (n === o) break;
                    if (n < _[Gh]) e !== a && _.push(_[e][Wh](_[n][0]));
                    else {
                        if (n !== _.length) throw new Error(Up);
                        _[Kh](_[e].concat(_[e][0]))
                    }
                    r[Kh][gr](r, _[n]), _[Gh] === 1 << f && 12 > f && f++
                } else c();
            return r
        },
        u$ = function (t, i) {
            i || (i = {});
            var n = function (i) {
                    for (var n = [], e = 0; i > e; e++) n[Kh](t[qp](3));
                    return n
                },
                e = function () {
                    var i, n;
                    n = "";
                    do i = t[zp](), n += t[Yp](i); while (0 !== i);
                    return n
                },
                s = function () {
                    var e = {};
                    if (e[Wp] = t[Yp](3), e.ver = t[Yp](3), Xp !== e[Wp]) throw new Error(Vp);
                    e[no] = t.readUnsigned(), e.height = t[Hp]();
                    var s = f$(t[zp]());
                    e[Zp] = s.shift(), e[Kp] = o$(s[Uh](0, 3)), e[Jp] = s[Qp](), e[tx] = o$(s.splice(0, 3)), e[ix] = t[zp](), e[nx] = t[zp](), e.gctFlag && (e[Kf] = n(1 << e[tx] + 1)), i.hdr && i[ex](e)
                },
                h = function (n) {
                    var s = function (n) {
                            var e = (t[zp](), f$(t[zp]()));
                            n[sx] = e[Uh](0, 3), n.disposalMethod = o$(e[Uh](0, 3)), n.userInput = e.shift(), n[Hf] = e[Qp](), n[Wf] = t[Hp](), n[Uf] = t[zp](), n[hx] = t[zp](), i[rx] && i[rx](n)
                        },
                        h = function (t) {
                            t[ax] = e(), i[ox] && i.com(t)
                        },
                        r = function (n) {
                            t[zp](), n[fx] = t[qp](12), n[_x] = e(), i[cx] && i[cx](n)
                        },
                        a = function (n) {
                            var s = function (n) {
                                    t[zp](), n[ux] = t[zp](), n.iterations = t[Hp](), n[hx] = t[zp](), i[dx] && i[dx].NETSCAPE && i.app[lx](n)
                                },
                                h = function (t) {
                                    t.appData = e(), i.app && i.app[t[bx]] && i[dx][t[bx]](t)
                                };
                            switch (t.readByte(), n[bx] = t.read(8), n[vx] = t.read(3), n[bx]) {
                            case "NETSCAPE":
                                s(n);
                                break;
                            default:
                                h(n)
                            }
                        },
                        o = function (t) {
                            t[Ao] = e(), i.unknown && i[ux](t)
                        };
                    switch (n[gx] = t[zp](), n[gx]) {
                    case 249:
                        n[yx] = rx, s(n);
                        break;
                    case 254:
                        n[yx] = ox, h(n);
                        break;
                    case 1:
                        n[yx] = cx, r(n);
                        break;
                    case 255:
                        n[yx] = dx, a(n);
                        break;
                    default:
                        n[yx] = ux, o(n)
                    }
                },
                r = function (s) {
                    var h = function (t, i) {
                        for (var n = new Array(t[Gh]), e = t[Gh] / i, s = function (e, s) {
                            var h = t[Hh](s * i, (s + 1) * i);
                            n[Uh][gr](n, [e * i, i][Wh](h))
                        }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)
                            for (var f = h[o]; e > f; f += r[o]) s(f, a), a++;
                        return n
                    };
                    s.leftPos = t.readUnsigned(), s.topPos = t[Hp](), s[no] = t[Hp](), s[eo] = t[Hp]();
                    var r = f$(t[zp]());
                    s[Vf] = r.shift(), s.interlaced = r.shift(), s[Jp] = r[Qp](), s[sx] = r.splice(0, 2), s.lctSize = o$(r[Uh](0, 3)), s[Vf] && (s.lct = n(1 << s[px] + 1)), s[xx] = t[zp]();
                    var a = e();
                    s[Qf] = c$(s[xx], a), s[mx] && (s[Qf] = h(s[Qf], s.width)), i.img && i[hu](s)
                },
                a = function () {
                    var n = {};
                    switch (n[Ex] = t[zp](), String.fromCharCode(n[Ex])) {
                    case "!":
                        n[Do] = wx, h(n);
                        break;
                    case ",":
                        n[Do] = hu, r(n);
                        break;
                    case ";":
                        n[Do] = Tx, i[Tx] && i.eof(n);
                        break;
                    default:
                        throw new Error(kx + n.sentinel.toString(16))
                    }
                    Tx !== n[Do] && setTimeout(a, 0)
                },
                o = function () {
                    s(), setTimeout(a, 0)
                };
            o()
        },
        d$ = "";
    i.addEventListener && i[lb](Mx, function (t) {
        if (t[qa] && t[Sx] && t[Ix] && 73 == t[Ox]) {
            var i = yB.name + Ax + yB[Cx] + Px + yB.publishDate + po + yB[Lx] + po + yB[Rx] + d$;
            yB[_v](i)
        }
    }, !1);
    var l$ = Dx;
    d$ = Nx + decodeURIComponent(jx);
    var b$, v$, g$, y$ = t,
        p$ = Bx,
        x$ = $x,
        m$ = Fx,
        E$ = Gx,
        w$ = zx,
        T$ = qx,
        k$ = Yx,
        M$ = Hx,
        S$ = Ux,
        I$ = Wx,
        O$ = Xx,
        A$ = Vx,
        C$ = Zx,
        P$ = Kx,
        L$ = Jx,
        R$ = Qx,
        D$ = tm,
        N$ = im,
        j$ = nm,
        B$ = em,
        $$ = sm,
        F$ = y$[E$ + hm];
    F$ && (v$ = y$[P$ + rm][w$ + am], F$.call(y$, ne, R$), F$[zh](y$, ee, j$), F$.call(y$, function () {
        z$ && z$ == l$ && (J$ = !1)
    }, D$));
    var G$, z$, q$, Y$ = 111,
        H$ = function (t, i) {
            i || (i = om + x$ + fm);
            try {
                g$.call(t, i, 6 * Y$, 1 * Y$)
            } catch (n) {}
        },
        U$ = !0,
        W$ = !0,
        X$ = !0,
        V$ = !0,
        Z$ = !0,
        K$ = !0,
        J$ = !0,
        Q$ = fj ? 200 : 1024,
        tF = function (t, i) {
            return ie ? ie(t, i) || "" : void 0
        };
    if (i[uo]) {
        var iF = i.createElement(_m);
        iF.style[cm] = du, iF.onload = function (t) {
            var i = t.target[um],
                n = v$;
            if ("" === n || dm == n || lm == n) return void this[wg][wg].removeChild(this[wg]);
            var e = i[bm][f_];
            i[E$ + hm](function () {
                te(e) != G$ && (cF[yr]._ji = null)
            }, j$), this[wg][wg][ib](this.parentNode)
        };
        var nF = i[uo](eu);
        nF[ha].width = gu, nF[ha][eo] = gu, nF[ha][vm] = uu, nF[fu](iF), i[gm].appendChild(nF)
    }
    if (i[L$ + ym]) {
        var eF = i[L$ + ym](S$ + pm);
        eF[ha][cm] = du, eF.onload = function (t) {
            var i = xm,
                n = t[pu][i + mm];
            b$ = n.Date[Za]();
            var e = n[I$ + O$ + Em + A$ + wm][C$ + Do];
            g$ = e[p$ + Tm], ej && (n = y$);
            var s = n[E$ + hm];
            s[zh](y$, ae, j$), s[zh](y$, oe, B$), s.call(y$, _e, $$), s[zh](y$, ce, D$), s.call(y$, se, N$), s[zh](y$, re, $$), s.call(y$, fe, j$), s[zh](y$, he, j$), this[wg][wg][ib](this[wg])
        };
        var nF = i[uo](eu);
        nF.style[no] = gu, nF[ha][eo] = gu, nF[ha][vm] = uu, nF.appendChild(eF), i[gm][fu](nF)
    }
    var sF = function (t, i, n, e) {
        this.source = t, this[td] = i, this[ul] = e, this[Fu] = n, this[dl] = pB[dc]
    };
    N(sF, Dj);
    var hF = function (t) {
        this.id = ++XN, this._o1o = {}, this._jo = {}, t && (this[km] = t)
    };
    hF[yr] = {
        _jo: null,
        getStyle: function (t) {
            return this._jo[t]
        }, setStyle: function (t, i) {
            var n = this._jo[t];
            return n === i || n && i && n[Sl] && n[Sl](i) ? !1 : this._o2n(t, i, new sF(this, t, i, n), this._jo)
        }, putStyles: function (t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._jo[n] = e : this[Mm](n, e)
            }
        }, _12: !0,
        invalidateVisibility: function (t) {
            this._12 = !0, t || (this instanceof aF && this.hasEdge() && this[P_](function (t) {
                t._12 = !0
            }), this._il() && this[qh]() && this[R_](function (t) {
                t[Sm]()
            }))
        }, onParentChanged: function () {
            this[Sm]()
        }, _il: function () {
            return !this._4l && this instanceof _F
        }, invalidate: function () {
            this.onEvent(new Rj(this, Im, Om))
        }, _o1h: null,
        addUI: function (t, i) {
            if (this._o1h || (this._o1h = new vj), t.id || (t.id = ++XN), this._o1h.containsById(t.id)) return !1;
            var n = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._o1h[sr](n);
            var e = new Rj(this, Im, sr, n);
            return this[Ir](e)
        }, removeUI: function (t) {
            if (!this._o1h) return !1;
            var i = this._o1h.getById(t.id);
            return i ? (this._o1h[Vh](i), void this[Ir](new Rj(this, Im, Vh, i))) : !1
        }, toString: function () {
            return this.$name || this.id
        }, type: Am,
        _4l: !1,
        _ib: !0
    }, N(hF, Hj), H(hF[yr], [Cm, zo, Pm, Lm]), K(hF[yr], {
        enableSubNetwork: {
            get: function () {
                return this._4l
            }, set: function (t) {
                if (this._4l != t) {
                    var i = this._4l;
                    this._4l = t, this instanceof aF && this._1a(), this.onEvent(new Dj(this, Rm, t, i))
                }
            }
        },
        bindingUIs: {
            get: function () {
                return this._o1h
            }
        },
        styles: {
            get: function () {
                return this._jo
            }, set: function (t) {
                if (this._jo != t) {
                    for (var i in this._jo) i in t || (t[i] = n);
                    this[Dm](t), this._jo = t
                }
            }
        }
    });
    var rF = function (t, i, n) {
        this.id = ++XN, this._o1o = {}, this._jo = {}, n && (this[km] = n), this[L_] = t, this[C_] = i, this[Nm]()
    };
    rF[yr] = {
        $uiClass: fs,
        _jr: null,
        _jd: null,
        _jt: null,
        _jb: null,
        _fm: !1,
        type: jm,
        otherNode: function (t) {
            return t == this[Bm] ? this.to : t == this.to ? this[Bm] : void 0
        }, connect: function () {
            if (this._fm) return !1;
            if (!this[L_] || !this[C_]) return !1;
            if (this._fm = !0, this[L_] == this[C_]) return void this[L_]._ir(this);
            Se(this[C_], this), ke(this[L_], this), de(this.$from, this, this[C_]);
            var t = this.fromAgent,
                i = this[E_];
            if (t != i) {
                var n;
                this[L_]._dp && (be(t, this, i), n = !0), this.$to._dp && (ge(i, this, t), n = !0), n && de(t, this, i)
            }
        }, disconnect: function () {
            if (!this._fm) return !1;
            if (this._fm = !1, this.$from == this[C_]) return void this[L_]._o1b(this);
            Me(this.$from, this), Ie(this.$to, this), le(this.$from, this, this[C_]);
            var t = this[w_],
                i = this[E_];
            if (t != i) {
                var n;
                this[L_]._dp && (ve(t, this, i), n = !0), this[C_]._dp && (ye(i, this, t), n = !0), n && le(t, this, i)
            }
        }, isConnected: function () {
            return this._fm
        }, isInvalid: function () {
            return !this.$from || !this[C_]
        }, isLooped: function () {
            return this.$from == this[C_]
        }, getEdgeBundle: function (t) {
            return t ? this._3c() : this[T_]() ? this[L_]._4p : this[L_].getEdgeBundle(this[C_])
        }, hasEdgeBundle: function () {
            var t = this.getEdgeBundle(!0);
            return t && t.edges[Gh] > 1
        }, _3c: function () {
            var t = this.fromAgent,
                i = this.toAgent;
            return t == i ? this.$from._dp || this[C_]._dp ? null : this.$from._4p : this[w_][m_](this[E_])
        }, _o28: null,
        hasPathSegments: function () {
            return this._o28 && !this._o28[Df]()
        }, isBundleEnabled: function () {
            return this[$m] && !this.hasPathSegments()
        }, firePathChange: function (t) {
            this[Ir](new Dj(this, Fm, t))
        }, addPathSegment: function (t, i, n) {
            var e = new JB(i || WB, t);
            this._o28 || (this._o28 = new vj), this._o28[sr](e, n), this[Gm](e)
        }, addPathSegement: function () {
            return yB[zr]('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this[zm][gr](this, arguments)
        }, removePathSegmentByIndex: function (t) {
            if (!this._o28) return !1;
            var i = this._o28.getByIndex(t);
            i && (this._o28[Vh](i), this[Gm](i))
        }, removePathSegment: function (t) {
            return this._o28 ? (this._o28[Vh](t), void this[Gm](t)) : !1
        }, movePathSegment: function (t, i, n) {
            if (!this._o28) return !1;
            if (t = t || 0, i = i || 0, yB[gy](n)) {
                var e = this._o28[Sd](n);
                return e ? (e[Gb](t, i), void this[Gm]()) : !1
            }
            l(function (n) {
                n[Gb](t, i)
            }), this[Gm]()
        }, move: function (t, i) {
            return this._o28 ? (this._o28[h_](function (n) {
                n.move(t, i)
            }, this), void this[Gm]()) : !1
        }, validateEdgeBundle: function () {}
    }, N(rF, hF), K(rF.prototype, {
        pathSegments: {
            get: function () {
                return this._o28
            }, set: function (t) {
                yB[fr](t) && (t = new vj(t)), this._o28 = t, this[Gm]()
            }
        },
        from: {
            get: function () {
                return this[L_]
            }, set: function (t) {
                if (this[L_] != t) {
                    var i = new Dj(this, Bm, t, this[L_]);
                    this.beforeEvent(i) !== !1 && (this.disconnect(), this.$from = t, this.connect(), this[Ir](i))
                }
            }
        },
        to: {
            get: function () {
                return this[C_]
            }, set: function (t) {
                if (this[C_] != t) {
                    var i = new Dj(this, qm, t, this.$to);
                    this[Sr](i) !== !1 && (this.disconnect(), this[C_] = t, this[Nm](), this[Ir](i))
                }
            }
        },
        fromAgent: {
            get: function () {
                return this[L_] ? this[L_]._dp || this[L_] : null
            }
        },
        toAgent: {
            get: function () {
                return this[C_] ? this[C_]._dp || this.$to : null
            }
        }
    }), H(rF.prototype, [Qc, {
            name: $m,
            value: !0
        },
        Uc
    ]);
    var aF = function (t, i, n) {
        this.id = ++XN, this._o1o = {}, this._jo = {}, t && (this[km] = t), this[hc] = Ym, this[Hm] = kj[hl], this[Um] = {
            x: i || 0,
            y: n || 0
        }, this._linkedNodes = {}
    };
    aF[yr] = {
        $uiClass: _s,
        _dp: null,
        forEachEdge: function (t, i, n) {
            return !n && this._lw && this._lw.forEach(t, i) === !1 ? !1 : Ae(this, t, i)
        }, forEachOutEdge: function (t, i) {
            return Ce(this, t, i)
        }, forEachInEdge: function (t, i) {
            return Pe(this, t, i)
        }, getEdges: function () {
            var t = [];
            return this.forEachEdge(function (i) {
                t[Kh](i)
            }), t
        }, _i5: null,
        _gk: null,
        _jq: null,
        _is: null,
        _o2j: 0,
        _9m: 0,
        hasInEdge: function () {
            return null != this._i5
        }, hasOutEdge: function () {
            return null != this._gk
        }, hasEdge: function () {
            return null != this._i5 || null != this._gk || this[Wm]()
        }, linkedWith: function (t) {
            return t[Bm] == this || t.to == this || t[w_] == this || t[E_] == this
        }, hasEdgeWith: function (t) {
            var i = this.getEdgeBundle(t);
            return i && i.edges.length > 0
        }, _lw: null,
        _4p: null,
        hasLoops: function () {
            return this._lw && this._lw[Gh] > 0
        }, _ir: function (t) {
            return this._lw || (this._lw = new vj, this._4p = new IG(this, this, this._lw)), this._4p._j3(t)
        }, _o1b: function (t) {
            return this._4p ? this._4p._o15(t) : void 0
        }, getEdgeBundle: function (t) {
            return t == this ? this._4p : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        }, _6m: function () {
            return this._o24 && this._o24.length
        }, _5m: function () {
            return this._8b && this._8b[Gh]
        }, _o21: function () {
            return this._6m() || this._5m()
        }, _8b: null,
        _o24: null,
        _o1e: function () {
            var t = this._dp,
                i = ue(this);
            if (t != i) {
                var n = Oe(this);
                this._9b(i), n[h_](function (t) {
                    var i = t.fromAgent,
                        n = t.toAgent,
                        t = t[sc],
                        e = t.$from._dp,
                        s = t[C_]._dp;
                    i != n && (i && ve(i, t, n || t.$to), n && ye(n, t, i || t[L_])), e != s && (e && be(e, t, s || t[C_]), s && ge(s, t, e || t.$from), de(e || t[L_], t, s || t[C_]))
                }, this)
            }
        }, onParentChanged: function () {
            this[Sm](), this._o1e()
        }, _87: null,
        _1a: function () {
            var t;
            if (this._4l ? t = null : (t = this._dp, t || this._hy !== !1 || (t = this)), this._87 == t) return !1;
            if (this._87 = t, this._fr && this._fr._jw[Gh])
                for (var i, n = this._fr._jw, e = 0, s = n.length; s > e; e++) i = n[e], i instanceof aF && i._9b(t)
        }, setLocation: function (t, i) {
            if (this.$location && this.$location.x == t && this[Um].y == i) return !1;
            var n = new Dj(this, Xm, this.$location, {
                x: t,
                y: i
            });
            return this[Sr](n) === !1 ? !1 : (this.$location ? (this.$location.x = t, this.$location.y = i) : this[Um] = new pj(t, i), this[Ir](n), !0)
        }, _dx: null,
        addFollower: function (t) {
            return null == t ? !1 : t.host = this
        }, removeFollower: function (t) {
            return this._dx && this._dx[Zc](t) ? t[Vm] = null : !1
        }, hasFollowers: function () {
            return this._dx && !this._dx.isEmpty()
        }, toFollowers: function () {
            return this.hasFollowers() ? this._dx.toDatas() : null
        }, clearFollowers: function () {
            this.hasFollowers() && (this[Zm](), l(this[Zm](), function (t) {
                t[Vm] = null
            }))
        }, getFollowerIndex: function (t) {
            return this._dx && this._dx[Zc](t) ? this._dx[Jh](t) : -1
        }, setFollowerIndex: function (t, i) {
            return this._dx && this._dx[Zc](t) ? void this._dx[Ql](t, i) : -1
        }, getFollowerCount: function () {
            return this._dx ? this._dx.length : 0
        }, _98: function () {
            return this._dx ? this._dx : (this._dx = new vj, this._dx)
        }, isFollow: function (t) {
            if (!t || !this._host) return !1;
            for (var i = this._host; i;) {
                if (i == t) return !0;
                i = i._host
            }
            return !1
        }, _9b: function (t) {
            return t == this._dp ? !1 : (this._dp = t, this[Sm](), void this._1a())
        }, type: Km
    }, N(aF, hF), K(aF.prototype, {
        loops: {
            get: function () {
                return this._lw
            }
        },
        edgeCount: {
            get: function () {
                return this._o2j + this._9m
            }
        },
        agentNode: {
            get: function () {
                return this._dp || this
            }
        },
        host: {
            set: function (t) {
                if (this == t || t == this._host) return !1;
                var i = new Dj(this, Vm, this._host, t);
                if (!1 === this[Sr](i)) return !1;
                var n = null,
                    e = null,
                    s = this._host;
                if (null != t && (n = new Dj(t, Jm, null, this), !1 === t[Sr](n))) return !1;
                if (null != s && (e = new Dj(s, Qm, null, this), !1 === s.beforeEvent(e))) return !1;
                if (this._host = t, null != t) {
                    var h = t._98();
                    h[sr](this)
                }
                if (null != s) {
                    var h = s._98();
                    h[Vh](this)
                }
                return this[Ir](i), null != t && t[Ir](n), null != s && s.onEvent(e), !0
            }, get: function () {
                return this._host
            }
        }
    }), H(aF[yr], [Xm, tE, Vg, No, iE]), K(aF[yr], {
        x: {
            get: function () {
                return this[Xm].x
            }, set: function (t) {
                t != this[Xm].x && (this[Xm] = new pj(t, this[Xm].y))
            }
        },
        y: {
            get: function () {
                return this[Xm].y
            }, set: function (t) {
                t != this[Xm].y && (this[Xm] = new pj(this.location.x, t))
            }
        }
    });
    var oF = function (t, i) {
        t instanceof t$ && (i = t, t = n), j(this, oF, [t]), this[nE] = i || new t$, this.image = this[nE], this.anchorPosition = null, this[Cm] = rh, lj[eE] || (lj[eE] = {}, lj.SHAPENODE_STYLES[dF.ARROW_TO] = !1), this.putStyles(lj.SHAPENODE_STYLES)
    };
    oF[yr] = {
        $uiClass: rh,
        type: sE,
        moveTo: function (t, i) {
            this[hE].moveTo(t, i), this[Gm]()
        }, lineTo: function (t, i) {
            this[hE][N_](t, i), this.firePathChange()
        }, quadTo: function (t, i, n, e) {
            this[hE].quadTo(t, i, n, e), this.firePathChange()
        }, curveTo: function (t, i, n, e, s, h) {
            this[hE][$_](t, i, n, e, s, h), this[Gm]()
        }, arcTo: function (t, i, n, e, s) {
            this[hE][yg](t, i, n, e, s), this.firePathChange()
        }, closePath: function () {
            this[hE][df](), this.firePathChange()
        }, clear: function () {
            this[hE][vc](), this[Gm]()
        }, removePathSegmentByIndex: function (t) {
            this[hE][rE](t) !== !1 && this.firePathChange()
        }, firePathChange: function () {
            this[hE]._6v = !0, this[Ir](new Dj(this, Fm))
        }
    }, N(oF, aF), H(oF[yr], [hE]), K(oF[yr], {
        pathSegments: {
            get: function () {
                return this.path[aE]
            }, set: function (t) {
                this[hE][aE] = t || [], this[Gm]()
            }
        },
        length: {
            get: function () {
                return this[hE][Gh]
            }
        }
    }), yB[oE] = oF;
    var fF = {
        _kt: {},
        register: function (t, i) {
            fF._kt[t] = i
        }, getShape: function (t, i, e, s, h, r) {
            s === n && (s = i, h = e, i = 0, e = 0), s || (s = 50), h || (h = 50);
            var a = fF._kt[t];
            return a ? a.generator instanceof Function ? a[fE](i, e, s, h, r) : a : void 0
        }, getRect: function (t, i, n, e, s, h, r) {
            return Le(r || new t$, t, i, n, e, s, h)
        }, getAllShapes: function (t, i, n, e, s) {
            var h = {};
            for (var r in fF._kt) {
                var a = fF[Fc](r, t, i, n, e, s);
                a && (h[r] = a)
            }
            return h
        }, createRegularShape: function (t, i, n, e, s) {
            return Fe(t, i, n, e, s)
        }
    };
    Qe(), ts[yr] = {
        type: _E
    }, N(ts, oF), yB[cE] = ts, is[yr] = {
        _i4: function (t) {
            var i, n = t._jn;
            i = n ? n._fr : this[Jl];
            var e = i[Jh](t);
            if (0 > e) throw new Error(eb + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof aF ? n : null;
                e -= 1;
                var h = i.getByIndex(e);
                if (h = s(h)) return h
            }
            return null
        }, forEachNode: function (t, i) {
            this[h_](function (n) {
                return n instanceof aF && t[zh](i, n) === !1 ? !1 : void 0
            })
        }, _4c: null
    }, N(is, Wj), K(is[yr], {
        propertyChangeDispatcher: {
            get: function () {
                return this._14
            }
        },
        currentSubNetwork: {
            get: function () {
                return this._4c
            }, set: function (t) {
                if (t && !t.enableSubNetwork && (t = null), this._4c != t) {
                    var i = this._4c;
                    this._4c = t, this._14[Ir](new Dj(this, uE, t, i))
                }
            }
        }
    }), lj[dE] = pB[lE], lj[bE] = 5, lj[vE] = !0, lj[gE] = {
        width: 60,
        height: 60
    };
    var _F = function (t, i, e) {
        j(this, _F, arguments), (i === n || e === n) && (this.$location[yE] = !0), this.$groupType = lj[dE], this[Ef] = lj[bE], this[hc] = e$.group, this[pE] = lj[gE], this[xE] = lj[vE]
    };
    _F[yr] = {
        type: mE,
        $uiClass: ih,
        _9x: function () {
            return !this._hy && !this._dp
        }, forEachOutEdge: function (t, i, n) {
            return Ce(this, t, i) === !1 ? !1 : !n && this._9x() && this._8b ? this._8b[h_](t, i) : void 0
        }, forEachInEdge: function (t, i, n) {
            return Pe(this, t, i) === !1 ? !1 : !n && this._9x() && this._o24 ? this._o24.forEach(t, i) : void 0
        }, forEachEdge: function (t, i, n) {
            return B(this, _F, P_, arguments) === !1 ? !1 : n || n || !this._9x() ? void 0 : this._o24 && this._o24[h_](t, i) === !1 ? !1 : this._8b ? this._8b[h_](t, i) : void 0
        }, hasInEdge: function (t) {
            return t ? null != this._i5 : null != this._i5 || this._6m()
        }, hasOutEdge: function (t) {
            return t ? null != this._gk : null != this._gk || this._5m()
        }, hasEdge: function (t) {
            return t ? null != this._i5 || null != this._gk : null != this._i5 || null != this._gk || this._o21()
        }
    }, N(_F, aF), K(_F[yr], {
        expanded: {
            get: function () {
                return this._hy
            }, set: function (t) {
                if (this._hy != t) {
                    var i = new Dj(this, xE, t, this._hy);
                    this.beforeEvent(i) !== !1 && (this._hy = t, this._1a(), this[Ir](i), this._dp || ns[zh](this))
                }
            }
        }
    }), H(_F[yr], [EE, wE, Uo, TE]), yB.Group = _F, es.prototype[Do] = kE, N(es, aF), yB.Text = es;
    var cF = function (t) {
        this._k3 = new wj, this._89 = new wj, this._gu = new wj, this.id = ++XN, t && (this[Ao] = t)
    };
    cF.prototype = {
        invalidate: function () {
            this.invalidateData()
        }, _1u: !0,
        _k3: null,
        _89: null,
        _gu: null,
        _o3d: !1,
        _jk: 1,
        _jl: 1,
        _ib: !0,
        _8e: 0,
        _78: 0,
        _jn: null,
        _o32: null,
        borderColor: ME,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1l: function () {
            this.$anchorPoint = oi(this.anchorPosition, this._8e, this._78)
        }, setMeasuredBounds: function (t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t[eo], t = t[no]), this._k3[no] == t && this._k3[eo] == i && this._k3.x == n && this._k3.y == e ? !1 : void this._k3[Mr](n || 0, e || 0, t || 0, i || 0)
        }, initialize: function () {}, measure: function () {}, draw: function () {}, _85: function (t, i, n) {
            n[My] == pB.SELECTION_TYPE_SHADOW ? (t[Fg] = n.selectionColor, t[Gg] = n[py] * i, t.shadowOffsetX = (n[xy] || 0) * i, t[qg] = (n[my] || 0) * i) : this._2o(t, i, n)
        }, _2o: function (t, i, n) {
            var e = n[Ey] || 0;
            n.selectionBackgroundColor && (t.fillStyle = n[SE], t[IE](this._89.x - e / 2, this._89.y - e / 2, this._89[no] + e, this._89.height + e)), t.strokeStyle = n[yy], t[Co] = e, t[OE](this._89.x - e / 2, this._89.y - e / 2, this._89.width + e, this._89.height + e)
        }, _ji: function (t, i, n, e) {
            if (!this._ib) return !1;
            if (this.syncSelection || (n = this.selected), (n && !this[AE] || !e) && (e = this), t.save(), 1 != this.$alpha && (t.globalAlpha = this[CE]), t[Wo](this.$x, this.$y), this[pf] && this[yf] && t.rotate(this.$_hostRotate), (this.offsetX || this[PE]) && t[Wo](this.offsetX, this[PE]), this.$rotate && t.rotate(this.$rotate), this[Sf] && this._o32 && t[Wo](-this._o32.x, -this._o32.y), this[Fg] && (t[Fg] = this[Fg], t[Gg] = this.shadowBlur * i, t[zg] = this.shadowOffsetX * i, t[qg] = this[qg] * i), n && e[My] == pB[LE] && (this._2o(t, i, e), n = !1), this._10() && this._n6Shape && !this._n6Shape._empty) {
                this._n6Shape[Eo]();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this.borderColor,
                    lineDash: this[RE],
                    lineDashOffset: this[DE],
                    fillColor: this[NE],
                    fillGradient: this._o3ackgroundGradient,
                    lineCap: sg,
                    lineJoin: ko
                };
                this._n6Shape[$o](t, i, s, n, e), n = !1, t[Fg] = $y
            }
            t.beginPath(), this[$o](t, i, n, e), t[Fy]()
        }, invalidateData: function () {
            this[jE] = !0, this._1u = !0
        }, invalidateSize: function () {
            this[xf] = !0, this._1u = !0
        }, invalidateRender: function () {
            this._1u = !0
        }, _5s: function () {}, _10: function () {
            return this[NE] || this[BE] || this[Tf]
        }, _4n: function () {
            return this[NE] || this[BE]
        }, doValidate: function () {
            return this[jE] && (this[jE] = !1, this.measure() !== !1 && (this[xf] = !0)), this[xf] && this.validateSize && this[$E](), Wn[zh](this) ? (this[Nf] = !0, this[FE] && this.onBoundsChanged(), !0) : this[GE] ? (this[GE] = !1, !0) : void 0
        }, validate: function () {
            var t = this._ib;
            return this[zE] && (this[zE] = !1, this._ib = this[qE], !this._ib || (this[Rf] || this[YE]) && this._5s() !== !1 || (this._ib = !1)), this._ib ? (this._1u = !1, this._o3d || (this.initialize(), this._o3d = !0), this[HE]()) : t != this._ib
        }, _ii: function (t, i) {
            return t -= this.$x, i -= this.$y, Un[zh](this, {
                x: t,
                y: i
            })
        }, hitTest: function (t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._gu.intersectsPoint(t, i, n)) return !1;
            var s = Un.call(this, {
                x: t,
                y: i
            });
            return t = s.x, i = s.y, !e && this._10() && this._n6Shape && this._n6Shape[Kc](t, i, n, !1, this.$border, this[NE] || this[BE]) ? !0 : this.doHitTest(t, i, n)
        }, doHitTest: function (t, i, n) {
            return this._k3[To](t, i, n)
        }, hitTestByBounds: function (t, i, n, e) {
            var s = this._ii(t, i);
            return !e && this._10() && this._n6Shape && this._n6Shape[Kc](t, i, n, !1, this[Tf], this[NE] || this.$backgroundGradient) ? !0 : this._k3[To](s.x, s.y, n)
        }, onDataChanged: function () {
            this[jE] = !0, this._1u = !0, this.$invalidateVisibility = !0
        }, getBounds: function () {
            var t = this._gu[Zh]();
            return t.offset(this.x, this.y), this[x_] && (this[x_][No] && Ni(t, this[x_][No], t), t.offset(this[x_].x || 0, this[x_].y || 0)), t
        }, destroy: function () {
            this._iged = !0
        }, _e7: !1
    }, K(cF[yr], {
        originalBounds: {
            get: function () {
                return this._k3
            }
        },
        data: {
            get: function () {
                return this[Rf]
            }, set: function (t) {
                if (this.$data != t) {
                    var i = this.$data;
                    this[Rf] = t, this.onDataChanged(t, i)
                }
            }
        },
        parent: {
            get: function () {
                return this._jn
            }
        },
        showOnTop: {
            get: function () {
                return this._e7
            }, set: function (t) {
                t != this._e7 && (this._e7 = t, this._1u = !0, this._jn && this._jn._o3f && this._jn._o3f(this))
            }
        }
    }), hs(cF.prototype, {
        visible: {
            value: !0,
            validateFlags: [UE, WE]
        },
        showEmpty: {
            validateFlags: [UE]
        },
        anchorPosition: {
            value: kj[hl],
            validateFlags: [XE]
        },
        position: {
            value: kj[hl],
            validateFlags: [WE]
        },
        offsetX: {
            value: 0,
            validateFlags: [WE]
        },
        offsetY: {
            value: 0,
            validateFlags: [WE]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: [Vb, XE]
        },
        padding: {
            value: 0,
            validateFlags: [Vb]
        },
        border: {
            value: 0,
            validateFlags: [Vb]
        },
        borderRadius: {
            value: lj[lg]
        },
        showPointer: {
            value: !1,
            validateFlags: [Vb]
        },
        pointerX: {
            value: 0,
            validateFlags: [Vb]
        },
        pointerY: {
            value: 0,
            validateFlags: [Vb]
        },
        pointerWidth: {
            value: lj[VE]
        },
        backgroundColor: {
            validateFlags: [Vb]
        },
        backgroundGradient: {
            validateFlags: [Vb, ZE]
        },
        selected: {
            value: !1,
            validateFlags: [Vb]
        },
        selectionBorder: {
            value: lj[KE],
            validateFlags: [Vb]
        },
        selectionShadowBlur: {
            value: lj[JE],
            validateFlags: [Vb]
        },
        selectionColor: {
            value: lj[dg],
            validateFlags: [Vb]
        },
        selectionType: {
            value: lj[cg],
            validateFlags: [Vb]
        },
        selectionShadowOffsetX: {
            value: 0,
            validateFlags: [Vb]
        },
        selectionShadowOffsetY: {
            value: 0,
            validateFlags: [Vb]
        },
        shadowBlur: {
            value: 0,
            validateFlags: [Vb]
        },
        shadowColor: {
            validateFlags: [Vb]
        },
        shadowOffsetX: {
            value: 0,
            validateFlags: [Vb]
        },
        shadowOffsetY: {
            value: 0,
            validateFlags: [Vb]
        },
        renderColorBlendMode: {},
        renderColor: {},
        x: {
            value: 0,
            validateFlags: [WE]
        },
        y: {
            value: 0,
            validateFlags: [WE]
        },
        rotatable: {
            value: !0,
            validateFlags: [QE, Vb]
        },
        rotate: {
            value: 0,
            validateFlags: [QE, Vb]
        },
        _hostRotate: {
            validateFlags: [QE]
        },
        lineWidth: {
            value: 0,
            validateFlags: [nv]
        },
        alpha: {
            value: 1
        }
    });
    var uF = [pB[cc], pB[dc], pB.PROPERTY_TYPE_CLIENT];
    as.prototype = {
        removeBinding: function (t) {
            for (var i = uF.length; --i >= 0;) {
                var n = uF[i],
                    e = this[n];
                for (var s in e) {
                    var h = e[s];
                    Array.isArray(h) ? (b(h, function (i) {
                        return i[pu] == t
                    }, this), h[Gh] || delete e[s]) : h[pu] == t && delete e[s]
                }
            }
        }, _2m: function (t, i, n) {
            if (!n && (n = this[i[dl] || pB[cc]], !n)) return !1;
            var e = n[t];
            e ? (Array[fr](e) || (n[t] = e = [e]), e[Kh](i)) : n[t] = i
        }, _38: function (t, i, n, e, s, h) {
            t = t || pB[cc];
            var r = this[t];
            if (!r) return !1;
            var a = {
                property: i,
                propertyType: t,
                bindingProperty: e,
                target: n,
                callback: s,
                invalidateSize: h
            };
            this._2m(i, a, r)
        }, onBindingPropertyChange: function (t, i, n, e) {
            var s = this[n || pB.PROPERTY_TYPE_ACCESSOR];
            if (!s) return !1;
            var h = s[i];
            return h ? (t._1u = !0, rs(t, h, n, e), !0) : !1
        }, initBindingProperties: function (t, i) {
            for (var e = uF[Gh]; --e >= 0;) {
                var s = uF[e],
                    h = this[s];
                for (var r in h) {
                    var a = h[r];
                    if (a[fc]) {
                        var o = a[pu];
                        if (o) {
                            if (!(o instanceof cF || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t[oc](a.property, s) : s == pB[dc] ? t[Yc][Mc](t[Rf], a[tw]) : t[Rf][a.property], f !== n && (o[a[fc]] = f)
                    }
                }
            }
        }
    };
    var dF = {};
    dF[dg] = iw, dF.SELECTION_BORDER = nw, dF[JE] = "selection.shadow.blur", dF[ew] = "selection.shadow.offset.x", dF.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y", dF.SELECTION_TYPE = sw, dF[hw] = rw, dF.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", dF[aw] = ow, dF[fw] = _w, dF[cw] = uw, dF[dw] = lw, dF.SHADOW_OFFSET_Y = bw, dF[vw] = gw, dF[yw] = pw, dF[xw] = mw, dF[Ew] = "shape.line.dash.offset", dF[ww] = Tw, dF[kw] = Mw, dF[Sw] = Iw, dF.SHAPE_OUTLINE_STYLE = Ow, dF.LINE_CAP = Aw, dF[Cw] = Pw, dF.LAYOUT_BY_PATH = Lw, dF[Rw] = Dw, dF[Nw] = jw, dF.BORDER = Bw, dF.BORDER_COLOR = $w, dF[Fw] = Gw, dF.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset", dF[lg] = zw, dF[qw] = Uo, dF.IMAGE_BACKGROUND_COLOR = "image.background.color", dF[Yw] = "image.background.gradient", dF[Hw] = Uw, dF[Ww] = dF[Xw] = Vw, dF.IMAGE_BORDER_LINE_DASH = "image.border.line.dash", dF.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", dF.IMAGE_RADIUS = dF[Zw] = Kw, dF[Jw] = Qw, dF[tT] = iT, dF[nT] = eT, dF[sT] = hT, dF[rT] = aT, dF[oT] = fT, dF[_T] = cT, dF[uT] = "label.anchor.position", dF[dT] = lT, dF[bT] = vT, dF[gT] = yT, dF[pT] = xT, dF.LABEL_PADDING = mT, dF[ET] = wT, dF.LABEL_POINTER = TT, dF[kT] = MT, dF[ST] = IT, dF.LABEL_OFFSET_Y = OT, dF.LABEL_SIZE = AT, dF[CT] = PT, dF[LT] = RT, dF[DT] = NT, dF[jT] = "label.background.color", dF[BT] = "label.background.gradient", dF.LABEL_ROTATABLE = $T, dF[FT] = GT, dF[zT] = qT, dF[YT] = "label.shadow.offset.x", dF[HT] = "label.shadow.offset.y", dF[UT] = WT, dF[XT] = VT, dF[ZT] = "group.background.color", dF[KT] = "group.background.gradient", dF[JT] = QT, dF[tk] = ik, dF[nk] = "group.stroke.line.dash", dF[ek] = "group.stroke.line.dash.offset", dF[sk] = "edge.bundle.label.rotate", dF.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", dF.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", dF[hk] = "edge.bundle.label.color", dF.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size", dF.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family", dF[rk] = "edge.bundle.label.font.style", dF[ak] = "edge.bundle.label.padding", dF[ok] = "edge.bundle.label.pointer.width", dF.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer", dF.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius", dF[fk] = "edge.bundle.label.offset.x", dF.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", dF.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border", dF[_k] = "edge.bundle.label.border.color", dF[ck] = "edge.bundle.label.background.color", dF.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", dF[uk] = "edge.bundle.label.rotatable", dF.EDGE_WIDTH = dk, dF.EDGE_COLOR = lk, dF[bk] = vk, dF[gk] = yk, dF[pk] = xk, dF[mk] = "edge.line.dash.offset", dF[Ek] = wk, dF[Tk] = kk, dF[Mk] = Sk, dF.EDGE_LOOPED_EXTAND = Ik, dF.EDGE_EXTEND = Ok, dF[jc] = Ak, dF[Sc] = "edge.split.by.percent", dF[Cc] = Ck, dF[Pc] = Pk, dF[Lk] = Rk, dF[Dc] = Dk, dF.EDGE_FROM_AT_EDGE = Nk, dF[jk] = Bk, dF[$k] = Fk, dF[Gk] = zk, dF[qk] = Yk, dF[Hk] = Uk, dF.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style", dF[Wk] = Xk, dF[Vk] = "arrow.from.outline.style", dF.ARROW_FROM_LINE_DASH = Zk, dF[Kk] = "arrow.from.line.dash.offset", dF.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color", dF.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient", dF[Jk] = Qk, dF.ARROW_FROM_LINE_JOIN = tM, dF.ARROW_TO = iM, dF[nM] = eM, dF[sM] = hM, dF[rM] = aM, dF[oM] = "arrow.to.stroke.style", dF[fM] = _M, dF.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style", dF[cM] = uM, dF[dM] = "arrow.to.line.dash.offset", dF[lM] = bM, dF[vM] = "arrow.to.fill.gradient", dF[gM] = yM, dF[pM] = xM;
    var lF = new as,
        bF = pB[cc],
        vF = pB.PROPERTY_TYPE_STYLE,
        gF = !1;
    lF._38(vF, dF[cg], null, My), lF._38(vF, dF[KE], null, Ey), lF._38(vF, dF[JE], null, py), lF._38(vF, dF[dg], null, yy), lF._38(vF, dF[ew], null, "selectionShadowOffsetX"), lF._38(vF, dF.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), lF._38(bF, zo, gx, Ao), lF._38(vF, dF[_T], gx, mM), lF._38(vF, dF[oT], gx, sy), lF._38(vF, dF.LABEL_ANCHOR_POSITION, gx, iE), lF._38(vF, dF[dT], gx, EM), lF._38(vF, dF[bT], gx, Bu), lF._38(vF, dF.LABEL_BORDER, gx, vv), lF._38(vF, dF[DT], gx, wM), lF._38(vF, dF.LABEL_BACKGROUND_COLOR, gx, TM), lF._38(vF, dF[XT], gx, kM), gF || (lF._38(vF, dF[fw], null, Gg), lF._38(vF, dF[cw], null, Fg), lF._38(vF, dF[dw], null, zg), lF._38(vF, dF.SHADOW_OFFSET_Y, null, qg), lF._38(vF, dF[gT], gx, $u), lF._38(vF, dF.LABEL_FONT_STYLE, gx, MM), lF._38(vF, dF.LABEL_ALIGN_POSITION, gx, SM), lF._38(vF, dF.LABEL_ROTATE, gx, No), lF._38(vF, dF[IM], gx, Uo), lF._38(vF, dF.LABEL_POINTER_WIDTH, gx, OM), lF._38(vF, dF[AM], gx, kf), lF._38(vF, dF.LABEL_RADIUS, gx, CM), lF._38(vF, dF[ST], gx, PM), lF._38(vF, dF.LABEL_OFFSET_Y, gx, PE), lF._38(vF, dF.LABEL_ROTATABLE, gx, LM), lF._38(vF, dF[BT], gx, If), lF._38(vF, dF[RM], gx, tE), lF._38(vF, dF[FT], gx, Gg), lF._38(vF, dF[zT], gx, Fg), lF._38(vF, dF[YT], gx, zg), lF._38(vF, dF[HT], gx, qg), lF._38(vF, dF[UT], gx, Pm), lF._38(vF, dF[hw], null, Ug), lF._38(vF, dF[DM], null, Wg), lF._38(vF, dF.ALPHA, null, ow));
    var yF = new as;
    yF._38(bF, Xm), yF._38(bF, iE, null, NM), yF._38(bF, No, null, No), gF || (yF._38(vF, dF[Rw], null, TM), yF._38(vF, dF.BACKGROUND_GRADIENT, null, If), yF._38(vF, dF.PADDING, null, Uo), yF._38(vF, dF[jM], null, vv), yF._38(vF, dF.BORDER_RADIUS, null, CM), yF._38(vF, dF.BORDER_COLOR, null, wM), yF._38(vF, dF[Fw], null, RE), yF._38(vF, dF.BORDER_LINE_DASH_OFFSET, null, DE)), yF._38(bF, Vg, Vg, Ao, BM), yF._38(bF, tE, Vg, tE), yF._38(vF, dF[vw], Vg, Co), yF._38(vF, dF.SHAPE_STROKE_STYLE, Vg, Ng), yF._38(vF, dF[ww], Vg, Oy), yF._38(vF, dF.LAYOUT_BY_PATH, Vg, $M), gF || (yF._38(vF, dF[nT], Vg, FM), yF._38(vF, dF[Sw], Vg, Iy), yF._38(vF, dF[GM], Vg, Sy), yF._38(vF, dF[kw], Vg, Ay), yF._38(vF, dF[xw], Vg, jf), yF._38(vF, dF.SHAPE_LINE_DASH_OFFSET, Vg, zf), yF._38(vF, dF[zM], Vg, Ty), yF._38(vF, dF[Cw], Vg, ky), yF._38(vF, dF[qM], Vg, TM), yF._38(vF, dF.IMAGE_BACKGROUND_GRADIENT, Vg, If), yF._38(vF, dF.IMAGE_PADDING, Vg, Uo), yF._38(vF, dF[Hw], Vg, vv), yF._38(vF, dF[Zw], Vg, CM), yF._38(vF, dF[Xw], Vg, wM), yF._38(vF, dF[YM], Vg, RE), yF._38(vF, dF[HM], Vg, DE), yF._38(vF, dF[tT], Vg, Pm), yF._38(vF, dF[sT], Vg, ow)), yF._38(bF, xE, null, null, UM), yF._38(bF, Rm, null, null, UM);
    var pF = new as;
    pF._38(bF, wE, null, null, WM), pF._38(bF, TE, null, null, WM), pF._38(bF, EE, null, null, WM), pF._38(bF, Uo, null, null, WM), pF._38(vF, dF[ZT], XM, Oy), pF._38(vF, dF[KT], XM, Ay), pF._38(vF, dF[JT], XM, Co), pF._38(vF, dF.GROUP_STROKE_STYLE, XM, Ng), pF._38(vF, dF[nk], XM, jf), pF._38(vF, dF[ek], XM, zf);
    var xF = new as;
    xF._38(bF, Bm, XM, null, VM), xF._38(bF, qm, XM, null, VM), xF._38(bF, Qc, XM, null, VM), xF._38(vF, dF.EDGE_WIDTH, XM, Co), xF._38(vF, dF[ZM], XM, Ng), xF._38(vF, dF[$k], XM, KM), xF._38(vF, dF[JM], XM, QM), gF || (xF._38(vF, dF.EDGE_FROM_AT_EDGE, null, tS, VM), xF._38(vF, dF[jk], null, Xc, VM), xF._38(vF, dF[bk], XM, Iy), xF._38(vF, dF[gk], XM, Sy), xF._38(vF, dF.EDGE_LINE_DASH, XM, jf), xF._38(vF, dF[mk], XM, zf), xF._38(vF, dF[jc], XM, null, VM), xF._38(vF, dF[Ek], XM, null, VM), xF._38(vF, dF[Tk], XM, null, VM), xF._38(vF, dF[zM], XM, Ty), xF._38(vF, dF[Cw], XM, ky), xF._38(bF, Fm, null, null, VM, !0), xF._38(bF, Uc, null, null, VM, !0), xF._38(vF, dF[Gk], XM, iS), xF._38(vF, dF.ARROW_FROM_OFFSET, XM, nS), xF._38(vF, dF[Hk], XM, eS), xF._38(vF, dF.ARROW_FROM_STROKE_STYLE, XM, sS), xF._38(vF, dF[Wk], XM, hS), xF._38(vF, dF[Vk], XM, "fromArrowOutlineStyle"), xF._38(vF, dF.ARROW_FROM_FILL_COLOR, XM, rS), xF._38(vF, dF.ARROW_FROM_FILL_GRADIENT, XM, "fromArrowFillGradient"), xF._38(vF, dF[aS], XM, oS), xF._38(vF, dF[Kk], XM, "fromArrowLineDashOffset"), xF._38(vF, dF[fS], XM, _S), xF._38(vF, dF[Jk], XM, cS), xF._38(vF, dF[nM], XM, uS), xF._38(vF, dF[sM], XM, dS), xF._38(vF, dF[rM], XM, lS), xF._38(vF, dF[oM], XM, bS), xF._38(vF, dF[fM], XM, vS), xF._38(vF, dF[gS], XM, yS), xF._38(vF, dF[lM], XM, pS), xF._38(vF, dF[vM], XM, xS), xF._38(vF, dF[cM], XM, mS), xF._38(vF, dF[dM], XM, "toArrowLineDashOffset"), xF._38(vF, dF[pM], XM, ES), xF._38(vF, dF[gM], XM, wS));
    var mF = new as;
    mF._38(vF, dF[hk], TS, EM), mF._38(vF, dF[kS], TS, sy), mF._38(vF, dF[MS], TS, iE), mF._38(vF, dF[SS], TS, Bu), mF._38(vF, dF.EDGE_BUNDLE_LABEL_ROTATABLE, TS, LM), gF || (mF._38(vF, dF[sk], TS, No), mF._38(vF, dF[IS], TS, $u), mF._38(vF, dF[rk], TS, MM), mF._38(vF, dF[ak], TS, Uo), mF._38(vF, dF[ok], TS, OM), mF._38(vF, dF.EDGE_BUNDLE_LABEL_POINTER, TS, kf), mF._38(vF, dF[OS], TS, CM), mF._38(vF, dF.EDGE_BUNDLE_LABEL_OFFSET_X, TS, PM), mF._38(vF, dF.EDGE_BUNDLE_LABEL_OFFSET_Y, TS, PE), mF._38(vF, dF[AS], TS, vv), mF._38(vF, dF.EDGE_BUNDLE_LABEL_BORDER_STYLE, TS, wM), mF._38(vF, dF.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, TS, TM), mF._38(vF, dF[CS], TS, If));
    var EF = new as;
    EF._38(bF, Xm), EF._38(vF, dF[Rw], null, TM), EF._38(vF, dF[Nw], null, If), EF._38(vF, dF[qw], null, Uo), EF._38(vF, dF[jM], null, vv), EF._38(vF, dF.BORDER_RADIUS, null, CM), EF._38(vF, dF[PS], null, wM), EF._38(vF, dF.BORDER_LINE_DASH, null, RE), EF._38(vF, dF.BORDER_LINE_DASH_OFFSET, null, DE), EF._38(bF, No, null, No), EF._38(bF, Fm, null, null, LS), EF._38(bF, hE, Vg, Ao), EF._38(bF, tE, Vg, tE), EF._38(vF, dF[vw], Vg, Co), EF._38(vF, dF.SHAPE_STROKE_STYLE, Vg, Ng), EF._38(vF, dF[ww], Vg, Oy), EF._38(vF, dF[kw], Vg, Ay), gF || (EF._38(vF, dF[Sw], Vg, Iy), EF._38(vF, dF.SHAPE_OUTLINE_STYLE, Vg, Sy), EF._38(vF, dF[xw], Vg, jf), EF._38(vF, dF.SHAPE_LINE_DASH_OFFSET, Vg, zf), EF._38(vF, dF[zM], Vg, Ty), EF._38(vF, dF[Cw], Vg, ky), EF._38(vF, dF[RS], Vg, $M), EF._38(vF, dF[qM], Vg, TM), EF._38(vF, dF.IMAGE_BACKGROUND_GRADIENT, Vg, If), EF._38(vF, dF.IMAGE_PADDING, Vg, Uo), EF._38(vF, dF.IMAGE_BORDER, Vg, vv), EF._38(vF, dF.IMAGE_BORDER_RADIUS, Vg, CM), EF._38(vF, dF[Xw], Vg, wM), EF._38(vF, dF[YM], Vg, RE), EF._38(vF, dF[HM], Vg, DE), EF._38(vF, dF[$k], Vg, KM), EF._38(vF, dF.ARROW_FROM_SIZE, Vg, iS), EF._38(vF, dF[qk], Vg, nS), EF._38(vF, dF[Hk], Vg, eS), EF._38(vF, dF[DS], Vg, sS), EF._38(vF, dF.ARROW_FROM_FILL_COLOR, Vg, rS), EF._38(vF, dF[NS], Vg, "fromArrowFillGradient"), EF._38(vF, dF[aS], Vg, oS), EF._38(vF, dF.ARROW_FROM_LINE_DASH_OFFSET, Vg, "fromArrowLineDashOffset"), EF._38(vF, dF.ARROW_FROM_LINE_JOIN, Vg, _S), EF._38(vF, dF[Jk], Vg, cS), EF._38(vF, dF[nM], Vg, uS), EF._38(vF, dF.ARROW_TO_OFFSET, Vg, dS), EF._38(vF, dF.ARROW_TO, Vg, QM), EF._38(vF, dF.ARROW_TO_STROKE, Vg, lS), EF._38(vF, dF[oM], Vg, bS), EF._38(vF, dF.ARROW_TO_FILL_COLOR, Vg, pS), EF._38(vF, dF[vM], Vg, xS), EF._38(vF, dF[cM], Vg, mS), EF._38(vF, dF[dM], Vg, "toArrowLineDashOffset"), EF._38(vF, dF[pM], Vg, ES), EF._38(vF, dF.ARROW_TO_LINE_CAP, Vg, wS));
    var wF = function (t, i) {
            return t = t[Pm], i = i[Pm], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
        },
        TF = function (t, i) {
            this[bc] = new wj, j(this, TF, arguments), this.id = this[Rf].id, this[Yc] = i, this._fr = [], this._o1j = new as
        };
    TF[yr] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _o1j: null,
        _fr: null,
        addChild: function (t, i) {
            t._jn = this, i !== n ? y(this._fr, t, i) : this._fr[Kh](t), t._e7 && this._o3f(t), this.invalidateChildrenIndex(), this.invalidateSize()
        }, removeChild: function (t) {
            this._o1j[jS](t), t._jn = null, p(this._fr, t), this._k2 && this._k2.remove(t), this.invalidateSize()
        }, getProperty: function (t, i) {
            return i == pB[dc] ? this[Yc][Mc](this[Rf], t) : i == pB[uc] ? this.$data.get(t) : this[Rf][t]
        }, getStyle: function (t) {
            return this[Yc][Mc](this[Rf], t)
        }, _18: function (t, i, n) {
            var e = this._o1j[BS](this, t, i, n);
            return lF.onBindingPropertyChange(this, t, i, n) || e
        }, onPropertyChange: function (t) {
            if (Pm == t[td]) return this[$S](), !0;
            if (Im == t[Do]) {
                if (Om == t.kind) return this[Om](), !0;
                var i = t.value;
                return i && i.ui ? (sr == t.kind ? this._9i(i) : Vh == t[td] && this.removeChild(i.ui), !0) : !1
            }
            return this._18(t[td], t.propertyType || bF, t[Fu])
        }, label: null,
        initLabel: function () {
            var t = new MF;
            t[zo] = gx, this[FS](t), this[gx] = t
        }, initialize: function () {
            this.initLabel(), this.$data._o1h && this.$data._o1h[h_](this._9i, this), lF[GS](this), this._o1j[GS](this, !1)
        }, addBinding: function (t, i) {
            return i.property ? (i[pu] = t, void this._o1j._2m(i.property, i)) : !1
        }, _gv: function (t, i) {
            var n = this.$data;
            if (!n._o1h) return !1;
            var e = n._o1h.getById(t.id);
            if (!e || !e.bindingProperties) return !1;
            var s = e.bindingProperties;
            if (O(s)) {
                var h = !1;
                return l(s, function (t) {
                    return Ao == t.bindingProperty ? (h = os(n, i, t[tw], t.propertyType), !1) : void 0
                }, this), h
            }
            return Ao == s[fc] ? os(n, i, s[tw], s.propertyType) : !1
        }, _9i: function (t) {
            var i = t.ui;
            if (i) {
                var n = t[zS];
                n && (Array.isArray(n) ? n.forEach(function (t) {
                    this[qS](i, t)
                }, this) : this.addBinding(i, n)), this[FS](i)
            }
        }, validate: function () {
            return this._o3d || (this.initialize(), this._o3d = !0), this[HE]()
        }, _$l: !0,
        invalidateChildrenIndex: function () {
            this._$l = !0
        }, doValidate: function () {
            if (this._1u && (this._1u = !1, this.validateChildren() && (this[YS](), this[xf] = !0), this._$l && (this._$l = !1, ej ? this._fr = d(this._fr, wF) : this._fr[HS](wF))), Wn[zh](this) && (this[Nf] = !0), this.$invalidateRotate) {
                h$.call(this), this[bc][Eg](this._gu);
                var t = this[US] || 0,
                    i = Math[xo](this.$selectionBorder || 0, this[WS] || 0, this[XS] || 0),
                    n = Math.max(this[VS] || 0, this[ZS] || 0),
                    e = Math[xo](2 * t, this[KS], this[JS]);
                e += lj[QS] || 0;
                var s = e - i,
                    h = e + i,
                    r = e - n,
                    a = e + n;
                return 0 > s && (s = 0), 0 > h && (h = 0), 0 > r && (r = 0), 0 > a && (a = 0), this[bc][wf](r, s, a, h), this[FE] && this.onBoundsChanged(), this[tI] = !0, !0
            }
        }, validateChildren: function () {
            var t, i = this._o3ody,
                n = this[iI];
            i && (i.$renderColor = this.$renderColor, i.$renderColorBlendMode = this.$renderColorBlendMode, i.$shadowColor = this[nI], i.$shadowBlur = this[KS], i[WS] = this.$shadowOffsetX, i[VS] = this[VS]), this.bodyChanged = !1, i && i._1u && (n = i[Eo]() || n, i.$x = 0, i.$y = 0, i.$invalidateRotate && h$.call(i), t = !0);
            for (var e = 0, s = this._fr.length; s > e; e++) {
                var h = this._fr[e];
                if (h != i) {
                    var r = h._1u && h[Eo]();
                    (r || n) && h._ib && Kn(h, i, this), !t && r && (t = !0)
                }
            }
            return t
        }, measure: function () {
            this._k3.clear();
            for (var t, i, n = 0, e = this._fr[Gh]; e > n; n++) t = this._fr[n], t._ib && (i = t._gu, i[no] <= 0 || i[eo] <= 0 || this._k3[Yd](t.$x + i.x, t.$y + i.y, i[no], i.height))
        }, _k2: null,
        _o3f: function (t) {
            if (!this._k2) {
                if (!t[kM]) return;
                return this._k2 = new vj, this._k2.add(t)
            }
            return t[kM] ? this._k2.add(t) : this._k2[Vh](t)
        }, draw: function (t, i, n) {
            for (var e, s = 0, h = this._fr.length; h > s; s++) e = this._fr[s], e._ib && !e[kM] && e._ji(t, i, n, this)
        }, _9p: function (t, i) {
            if (!this._ib || !this._k2 || !this._k2[Gh]) return !1;
            t[Og](), t[Wo](this.$x, this.$y), this[pf] && this[yf] && t[No](this.$_hostRotate), (this[PM] || this[PE]) && t.translate(this[PM], this.offsetY), this[bf] && t[No](this[bf]), this.$layoutByAnchorPoint && this._o32 && t.translate(-this._o32.x, -this._o32.y), this[Fg] && (t[Fg] = this.shadowColor, t[Gg] = this[Gg] * i, t[zg] = this[zg] * i, t.shadowOffsetY = this[qg] * i), t.beginPath();
            for (var n, e = 0, s = this._fr[Gh]; s > e; e++) n = this._fr[e], n._ib && n[kM] && n._ji(t, i, this.selected, this);
            t[Fy]()
        }, doHitTest: function (t, i, n) {
            if (n) {
                if (!this._k3[qd](t - n, i - n, 2 * n, 2 * n)) return !1
            } else if (!this._k3[To](t, i)) return !1;
            return this[eI](t, i, n)
        }, hitTestChildren: function (t, i, n) {
            for (var e, s = this._fr.length - 1; s >= 0; s--)
                if (e = this._fr[s], e._ib && e[Kc](t, i, n)) return e;
            return !1
        }, destroy: function () {
            this._iged = !0;
            for (var t, i = this._fr[Gh] - 1; i >= 0; i--) t = this._fr[i], t[lc]()
        }
    }, N(TF, cF), K(TF.prototype, {
        renderColorBlendMode: {
            get: function () {
                return this[sI]
            }, set: function (t) {
                this.$renderColorBlendMode = t, this._1u = !0, this.body && (this[hI][Wg] = this.$renderColorBlendMode)
            }
        },
        renderColor: {
            get: function () {
                return this.$renderColor
            }, set: function (t) {
                this[rI] = t, this._1u = !0, this[hI] && (this[hI][Ug] = this[rI])
            }
        },
        bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this[tI] = !1;
                    var t, i = this[hI];
                    t = i && i._ib && !this._10() ? i._gu[Zh]() : this._gu[Zh](), this[No] && Ni(t, this[No], t), t.x += this.$x, t.y += this.$y, this._dm = t
                }
                return this._dm
            }
        },
        bounds: {
            get: function () {
                return new wj((this.$x || 0) + this[bc].x, (this.$y || 0) + this.uiBounds.y, this[bc][no], this.uiBounds[eo])
            }
        },
        body: {
            get: function () {
                return this._o3ody
            }, set: function (t) {
                t && this._o3ody != t && (this._o3ody = t, this[iI] = !0, this.invalidateSize())
            }
        }
    }), lj[QS] = 1;
    var kF = function () {
        j(this, kF, arguments)
    };
    kF[yr] = {
        strokeStyle: Bg,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jk: 1,
        _jl: 1,
        outline: 0,
        onDataChanged: function (t) {
            B(this, kF, aI, arguments), this._m0 && this._88 && this._m0._7q(this._88, this), t && this._o1l(t)
        }, _o1l: function (t) {
            this._m0 = wn(t), this._m0[Eo](), (this._m0._mc == AB || this._m0._6l()) && (this._88 || (this._88 = function () {
                this[oI](), this._jn && this._jn[Yc] && (this._jn[fI](), this._jn[Yc].invalidate())
            }), this._m0._o38(this._88, this))
        }, _m0: null,
        initialize: function () {
            this._o1l(this[Rf])
        }, _5s: function () {
            return this._m0 && this._m0.draw
        }, _9r: function (t) {
            if (!t || t[no] <= 0 || t[eo] <= 0 || !this[_I] || !(this.size instanceof Object)) return this._jk = 1, void(this._jl = 1);
            var i = this.size[no],
                e = this[tE][eo];
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jk = 1, void(this._jl = 1);
            var s, h, r = t.width,
                a = t[eo];
            i >= 0 && (s = i / r), e >= 0 && (h = e / a), 0 > i ? s = h : 0 > e && (h = s), this._jk = s, this._jl = h
        }, validateSize: function () {
            if (this.$invalidateScale) {
                this[cI] = !1;
                var t = this._originalBounds;
                this._jk, this._jl, this._9r(t), this[uI](t[no] * this._jk, t.height * this._jl, t.x * this._jk, t.y * this._jl)
            }
        }, measure: function () {
            var t = this._m0[wo](this[Co] + this.outline);
            return t ? (this.$invalidateScale = !0, void(this._originalBounds = t.clone())) : void this._k3[Mr](0, 0, 0, 0)
        }, onBoundsChanged: function () {
            this[dI] = !0
        }, _26: function () {
            this[dI] = !1, this._fillGradient = this[Ay] ? jB.prototype[Af][zh](this[lI], this._89) : null
        }, _km: function (t) {
            var i, n;
            if (dv == this[bI]) i = 1, n = -1;
            else {
                if (lv != this[bI]) return;
                i = -1, n = 1
            }
            var e = this._k3.cx,
                s = this._k3.cy;
            t[Wo](e, s), t[Sa](i, n), t.translate(-e, -s)
        }, draw: function (t, i, n, e) {
            if (this._jk && this._jl) {
                if (this[dI] && this._26(), t.save(), this[bI] && this._km(t), this._m0._mc == PB) return t[Sa](this._jk, this._jl), this._m0._mb[$o](t, i, this, n, e || this), void t[Fy]();
                n && this._85(t, i, e), this._m0[$o](t, i, this, this._jk, this._jl), t[Fy]()
            }
        }, doHitTest: function (t, i, n) {
            if (this._m0[Kc]) {
                if (dv == this[bI]) {
                    var e = this._k3.cy;
                    i = 2 * e - i
                } else if (lv == this.$adjustType) {
                    var s = this._k3.cx;
                    t = 2 * s - t
                }
                t /= this._jk, i /= this._jl;
                var h = (this._jk + this._jl) / 2;
                return h > 1 && (n /= h, n = 0 | n), this._m0._mb instanceof t$ ? this._m0._mb[Kc](t, i, n, !0, this[vI], this[gI] || this[lI]) : this._m0[Kc](t, i, n)
            }
            return !0
        }, $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, N(kF, cF), hs(kF[yr], {
        adjustType: {},
        fillColor: {},
        size: {
            validateFlags: [Vb, yI]
        },
        fillGradient: {
            validateFlags: [pI]
        }
    }), K(kF[yr], {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        }
    }), lj[xI] = kj[hl];
    var MF = function () {
        j(this, MF, arguments), this[EM] = lj[dT]
    };
    MF[yr] = {
        color: lj[dT],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _h8: null,
        alignPosition: null,
        measure: function () {
            this[go];
            var t = zi(this[Rf], this[mI] || lj.FONT_SIZE, this[EI]);
            if (this._h8 = t, this.$size) {
                var i = this.$size.width || 0,
                    n = this.$size[eo] || 0;
                return this[uI](i > t[no] ? i : t[no], n > t[eo] ? n : t[eo])
            }
            return this[uI](t.width, t.height)
        }, doHitTest: function (t, i, n) {
            return this[Rf] ? Rn(t, i, n, this) : !1
        }, draw: function (t, i, n, e) {
            n && this._85(t, i, e);
            var s = this.$fontSize || lj.FONT_SIZE;
            if (this.$rotatable && this.$_hostRotate) {
                var h = bn(this[yf]);
                h > gj && 3 * gj > h && (t.translate(this._k3[no] / 2, this._k3.height / 2), t[No](Math.PI), t[Wo](-this._k3[no] / 2, -this._k3.height / 2))
            }
            var r = this[SM] || lj.ALIGN_POSITION,
                a = r[Wd],
                o = r[Zr],
                f = s * lj[yo],
                _ = f / 2;
            if (o != Oj && this._h8.height < this._k3[eo]) {
                var c = this._k3.height - this._h8[eo];
                _ += o == Aj ? c / 2 : c
            }
            t[Wo](0, _), t.font != this[EI] && (t[go] = this[EI]), a == Sj ? (t.textAlign = Wc, t[Wo](this._k3[no] / 2, 0)) : a == Ij ? (t[wI] = Xr, t[Wo](this._k3[no], 0)) : t.textAlign = ya, t[TI] = Lg, t.fillStyle = this.color;
            for (var u = 0, d = this[Rf][hr](po), l = 0, b = d.length; b > l; l++) {
                var v = d[l];
                t[$g](v, 0, u), u += f
            }
        }, _5s: function () {
            return null != this[Rf] || this[_I]
        }, $invalidateFont: !0
    }, N(MF, cF), hs(MF[yr], {
        size: {
            validateFlags: [nv]
        },
        fontStyle: {
            validateFlags: [nv, kI]
        },
        fontSize: {
            validateFlags: [nv, kI]
        },
        fontFamily: {
            validateFlags: [nv, kI]
        }
    }), K(MF.prototype, {
        font: {
            get: function () {
                return this[MI] && (this[MI] = !1, this.$font = (this[SI] || lj[md]) + er + (this[mI] || lj[Ed]) + wd + (this[II] || lj.FONT_FAMILY)), this[EI]
            }
        }
    });
    var SF = function (t) {
        t = t || new t$, this[OI] = new wj, j(this, SF, [t])
    };
    SF[yr] = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this[AI] = !0, this[CI] = !0, this[Rf][wo](this[vI] + this.$outline, this.pathBounds), this[uI](this[OI])
        }, validateSize: function () {
            if (this.$invalidateFromArrow || this[CI]) {
                var t = this[OI].clone();
                if (this.$invalidateFromArrow) {
                    this[AI] = !1;
                    var i = this.validateFromArrow();
                    i && t[sr](i)
                }
                if (this[CI]) {
                    this[CI] = !1;
                    var i = this[PI]();
                    i && t[sr](i)
                }
                this[uI](t)
            }
        }, validateFromArrow: function () {
            if (!this[Rf]._jg || !this.$fromArrow) return void(this[LI] = null);
            var t = this.$data,
                i = 0,
                n = 0,
                e = this.$fromArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._jg)), this[RI] = t[Zo](i, n), this[RI][No] = Math.PI + this[RI][No] || 0, this[LI] = js(this[DI], this.$fromArrowSize);
            var s = this[LI][wo](this[NI][Co] + this[NI][Iy]);
            return this[jI] instanceof yB.Gradient ? this[NI]._fillGradient = jB[yr][Af][zh](this[jI], s) : this.fromArrowStyles && (this[NI]._fillGradient = null), ji(s, this.fromArrowLocation.rotate, s, s[Xr], s.cy), s[gg](this[RI].x, this.fromArrowLocation.y), s
        }, validateToArrow: function () {
            if (!this.$data._jg || !this[BI]) return void(this[$I] = null);
            var t = this[Rf],
                i = 0,
                n = 0,
                e = this[FI];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._jg), i += t._jg, this[GI] = t.getLocation(i, n), this[$I] = js(this[BI], this[zI]);
            var s = this[$I][wo](this[qI][Co] + this[qI][Iy]);
            return this[xS] instanceof yB[YI] ? this[qI]._fillGradient = jB.prototype[Af].call(this[xS], s) : this[qI] && (this[qI]._fillGradient = null), ji(s, this[GI][No], s, s[Xr], s.cy), s[gg](this.toArrowLocation.x, this.toArrowLocation.y), s
        }, _2t: function (t) {
            var i = t ? "from" : qm,
                e = this[i + HI];
            e === n && (e = this[vI]);
            var s = this[i + UI];
            s === n && (s = this[Ng]);
            var h = this[i + WI];
            h || (this[i + WI] = h = {}), h[Co] = e, h[Ng] = s, h[jf] = this[i + XI], h[zf] = this[i + VI], h[Oy] = this[i + ZI], h[Ay] = this[i + KI], h[Ty] = this[i + JI], h.lineJoin = this[i + QI], h[Iy] = this[i + tO] || 0, h[Sy] = this[i + iO]
        }, doValidate: function () {
            return this[DI] && this._2t(!0), this[BI] && this._2t(!1), B(this, SF, HE)
        }, drawArrow: function (t, i, n, e) {
            if (this[DI] && this[LI]) {
                t[Og]();
                var s = this.fromArrowLocation,
                    h = s.x,
                    r = s.y,
                    a = s.rotate;
                t.translate(h, r), a && t[No](a), this.$fromArrowShape[$o](t, i, this[NI], n, e), t[Fy]()
            }
            if (this.$toArrow && this[$I]) {
                t[Og]();
                var s = this[GI],
                    h = s.x,
                    r = s.y,
                    a = s.rotate;
                t[Wo](h, r), a && t[No](a), this[$I][$o](t, i, this[qI], n, e), t[Fy]()
            }
        }, outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this[dI] = !0
        }, _26: function () {
            this[dI] = !1, this._fillGradient = this[lI] ? jB[yr][Af][zh](this[lI], this._89) : null
        }, draw: function (t, i, n, e) {
            this[dI] && this._26(), this[Rf].draw(t, i, this, n, e), this[nO](t, i, n, e)
        }, doHitTest: function (t, i, n) {
            if (this.$data[Kc](t, i, n, !0, this[vI] + this[eO], this.$fillColor || this[lI])) return !0;
            if (this[BI] && this.$toArrowShape) {
                var e = t - this[GI].x,
                    s = i - this.toArrowLocation.y;
                if (this[GI][No]) {
                    var h = Li(e, s, -this[GI].rotate);
                    e = h.x, s = h.y
                }
                var r = this[qI][Oy] || this[qI].fillGradient;
                if (this[$I].hitTest(e, s, n, !0, this[qI][Co], r)) return !0
            }
            if (this[DI] && this[LI]) {
                var e = t - this[RI].x,
                    s = i - this[RI].y;
                if (this[RI][No]) {
                    var h = Li(e, s, -this.fromArrowLocation[No]);
                    e = h.x, s = h.y
                }
                var r = this[NI][Oy] || this.fromArrowStyles[Ay];
                if (this.$fromArrowShape[Kc](e, s, n, !0, this.fromArrowStyles.lineWidth, r)) return !0
            }
            return !1
        }, $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, N(SF, cF), hs(SF[yr], {
        fillColor: {},
        fillGradient: {
            validateFlags: [pI]
        },
        fromArrowOffset: {
            validateFlags: [sO, Vb]
        },
        fromArrowSize: {
            validateFlags: [sO, Vb]
        },
        fromArrow: {
            validateFlags: [sO, Vb]
        },
        fromArrowOutline: {
            validateFlags: [sO, Vb]
        },
        fromArrowStroke: {
            validateFlags: [sO, Vb]
        },
        toArrowOffset: {
            validateFlags: [hO, Vb]
        },
        toArrowSize: {
            validateFlags: [hO, Vb]
        },
        toArrow: {
            validateFlags: [hO, Vb]
        },
        toArrowOutline: {
            validateFlags: [hO, Vb]
        },
        toArrowStroke: {
            validateFlags: [hO, Vb]
        },
        outline: {
            value: 0,
            validateFlags: [nv]
        }
    }), K(SF.prototype, {
        length: {
            get: function () {
                return this[Ao][Gh]
            }
        }
    }), fs[yr] = {
        shape: null,
        path: null,
        initialize: function () {
            B(this, fs, rO), this[hE] = new t$, this[hE]._dr = !1, this[XM] = new SF(this[hE]), this[FS](this[XM], 0), this._o3ody = this[XM], xF[GS](this)
        }, _1v: !0,
        _5o: null,
        _10: function () {
            return !1
        }, _4n: function () {
            return !1
        }, validatePoints: function () {
            this.shape[oI]();
            var t = this[Rf],
                i = this.path;
            i[vc]();
            var n = t.fromAgent,
                e = t[E_];
            n && e && qs(this, t, i, n, e)
        }, drawLoopedEdge: function (t, i, n, e) {
            Ws(this, e, t)
        }, drawEdge: function (t, i, n, e, s, h) {
            var r = this[Mc](dF[Ek]),
                a = this.getStyle(dF[Tk]);
            if (r && (s.x += r.x || 0, s.y += r.y || 0), a && (h.x += a.x || 0, h.y += a.y || 0), e == pB[aO]) {
                var o = s[Wc],
                    f = h.center,
                    _ = (o.x + f.x) / 2,
                    c = (o.y + f.y) / 2,
                    u = o.x - f.x,
                    d = o.y - f.y,
                    l = Math[mo](u * u + d * d),
                    b = Math.atan2(d, u);
                b += Math.PI / 6, l *= .04, l > 30 && (l = 30);
                var v = Math[Hr](b) * l,
                    g = Math[Ur](b) * l;
                return t.lineTo(_ - g, c + v), void t[N_](_ + g, c - v)
            }
            var y = Us(this, this[Ao], s, h, i, n, s[Wc], h[Wc]);
            y && (t._hg = y)
        }, _32: function () {
            if (!this[Rf].isBundleEnabled()) return null;
            var t = this[Yc]._91._8s(this[Rf]);
            if (!t || !t.canBind(this.graph) || !t._hy) return null;
            var i = t[oO](this);
            return t.isPositiveOrder(this[Rf]) || (i = -i), i
        }, checkBundleLabel: function () {
            var t = this[fO]();
            return t ? (this[TS] || this.createBundleLabel(), this.bundleLabel._ib = !0, void(this[TS].data = t)) : void(this[TS] && (this[TS]._ib = !1, this[TS][Ao] = null))
        }, createBundleLabel: function () {
            var t = new MF;
            t[_O] = !1, this[TS] = t, this[FS](this.bundleLabel), mF[GS](this)
        }, getBundleLabel: function () {
            return this[Yc][fO](this[Ao])
        }, doValidate: function () {
            return this._1v && (this._1v = !1, this[cO]()), this.checkBundleLabel(), B(this, fs, HE)
        }, _4q: function () {
            this._1v = !0, this.invalidateSize()
        }, _18: function (t, i, n) {
            var e = this._o1j[BS](this, t, i, n);
            return e = lF.onBindingPropertyChange(this, t, i, n) || e, this.bundleLabel && this.bundleLabel[Rf] && (e = mF[BS](this, t, i, n) || e), xF.onBindingPropertyChange(this, t, i, n) || e
        }
    }, N(fs, TF), fs.drawReferenceLine = function (t, i, n, e) {
        if (t[D_](i.x, i.y), !e || e == pB[uO]) return void t.lineTo(n.x, n.y);
        if (e == pB[Tc]) t[N_](i.x, n.y);
        else if (e == pB.EDGE_TYPE_HORIZONTAL_VERTICAL) t.lineTo(n.x, i.y);
        else if (0 == e.indexOf(pB[$c])) {
            var s;
            s = e == pB[pc] ? !0 : e == pB[wc] ? !1 : Math[Vr](i.x - n.x) > Math[Vr](i.y - n.y);
            var h = (i.x + n.x) / 2,
                r = (i.y + n.y) / 2;
            s ? (t[N_](h, i.y), t.lineTo(h, n.y)) : (t[N_](i.x, r), t[N_](n.x, r))
        }
        t.lineTo(n.x, n.y)
    }, K(fs[yr], {
        length: {
            get: function () {
                return this[hE] ? this.path.length : 0
            }
        }
    }), fs[yr].addPoint = function (t, i, n) {
        var e = Sn(this[hE], t, i, n);
        if (e && e[Gh] > 2) {
            var s = this[Ao],
                h = e[e.length - 1];
            s[dO] = h.type == WB ? e.splice(1, e.length - 2) : e[Uh](1, e.length - 1)
        }
    }, _s[yr] = {
        _3b: null,
        image: null,
        initialize: function () {
            B(this, _s, rO), this._o35(), yF.initBindingProperties(this)
        }, _o1l: function () {
            this.data[Vg] ? this.image && (this[hI] = this.image) : this[gx] && (this[hI] = this[gx])
        }, _o35: function () {
            this[Vg] = new kF, this.addChild(this.image, 0), this._o1l()
        }, doValidate: function () {
            this[hI] && (this instanceof ih && !this.$data[TE] && this._6h() ? this[hI][Sf] = !1 : (this[hI].$layoutByAnchorPoint = null != this._3b, this.body[iE] = this._3b));
            var t = this.$data[Um],
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[tI] = !0), this.$x = i, this.$y = n, TF[yr].doValidate[zh](this) || e
        }, _18: function (t, i, n) {
            var e = this._o1j[BS](this, t, i, n);
            return e = lF.onBindingPropertyChange(this, t, i, n) || e, yF[BS](this, t, i, n) || e
        }
    }, N(_s, TF);
    var IF = function (t, i) {
        return t = t[Rf].zIndex || 0, i = i[Rf][Pm] || 0, t - i
    };
    cs[yr] = {
        _lu: 1,
        _di: null,
        _8w: null,
        _8x: null,
        _$h: !0,
        _ni: null,
        _ng: null,
        _k0: null,
        _o2f: null,
        _6v: !1,
        _o3d: !1,
        _kl: null,
        _4i: function (t, i) {
            for (var n = this._di, e = 0, s = n.length; s > e; e++)
                if (t[zh](i, n[e]) === !1) return !1
        }, _f8: function (t, i) {
            this._ni[h_](t, i)
        }, _17: function (t, i) {
            for (var n = this._di, e = n[Gh] - 1; e >= 0; e--)
                if (t.call(i, n[e]) === !1) return !1
        }, _54: function (t, i) {
            this._ni[lO](t, i)
        }, _3w: function (t, i) {
            this._7i && this._7i._3w && this._7i._3w(t, i)
        }, _dd: function () {
            this._kl._4x(), this._l0 && this._l0[bO] ? this._kl._eu(0, 0) : this._kl._2n = !0
        }, _4w: function () {
            return this._$h && (this._$h = !1, this._24()), this._8x
        }, _44: function () {
            return this._kl._1j ? !1 : (this._kl._1j = !0, void this._o17())
        }, _o17: function () {
            this._6v || (this._6v = !0, E(this._fs[Mg](this)))
        }, _o3k: function () {
            var t = !this._o3d || 0 == this._ni[Gh];
            this._o3d || (this._o3d = !0, this._dd(), this._$h = !0), this._o3o(t);
            var i = this._k0.g;
            if (this._ni[Df]()) return i._lv(), this._topCanvas._ji(), this._6v = !1, this._kl._ka(this, !0), void this._4w();
            if (this._kl._ka(this, this._l0[vO] || this._o2f._n4), this._k4) {
                var n = this._lk;
                i[ao][ho] && (n *= i[ao][ho]), this._k4(i, n, t)
            }
            this._o2f._lv(), this._kl._7g(), this._topCanvas._ji(), this._6v = !1
        }, _fs: function () {
            this._6v && (this._iged || (this._o3d && this._l0 && this._l0._12 && (this._l0._12 = !1, this._l0[h_](function (t) {
                t[Sm](!0)
            })), this._o3k(), this._2i()))
        }, _h9: null,
        _1o: function (t, i, n, e, s) {
            if (!n || !e) return void this._5q();
            var h = this._di,
                r = this._8w;
            this._5q(), this._h9[Gh] = 0;
            var a, o = {},
                f = this._o2f;
            s = s || f._n4;
            for (var _, c, u, d, l, b, v = this._ni._jw, g = t + n, y = i + e, p = 0, x = v.length; x > p; p++)
                if (b = v[p], l = b.__oldBounds, b.__oldBounds = null, b._ib)
                    if (d = b.__k3Changed, b.__k3Changed = !1, _ = b.uiBounds, c = _.x + b.$x, u = _.y + b.$y, g > c && y > u && c + _.width > t && u + _[eo] > i) {
                        if (a = b[Rf].zIndex, a in o || (o[a] = !0, this._h9[Kh](a || 0)), h.push(b), this._8w[b.id] = b, s) continue;
                        l && (f._n6(l.x, l.y, l.width, l.height), s = f._n4), d && (f._n6(c, u, _[no], _[eo]), s = f._n4)
                    } else !s && r[b.id] && l && (f._n6(l.x, l.y, l.width, l[eo]), s = f._n4);
            else !s && l && (f._n6(l.x, l.y, l[no], l.height), s = f._n4)
        }, _o1g: function (t) {
            var i = t.$data.__ibChanged;
            return t.$data.__ibChanged = !1, t._1u || t.$data._6v ? (t[Rf]._6v = !1, t._o3d && (t.__oldBounds = {
                x: t.$x + t[bc].x,
                y: t.$y + t.uiBounds.y,
                width: t.uiBounds[no],
                height: t.uiBounds[eo]
            }), t.__k3Changed = t.validate(), i || t.__k3Changed) : (i && t._o3d && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t[bc].y,
                width: t[bc].width,
                height: t[bc][eo]
            }), i)
        }, _k4: function (t, i, n, e) {
            e = e || this._kl._7a;
            var s = e.x,
                h = e.y,
                r = e[no],
                a = e[eo];
            this._1o(s, h, r, a, n), this._4w(), this._h9[Gh] && (ej ? (this._h9.sort(), this._di = d(this._di, IF)) : this._di[HS](IF));
            try {
                this._io(t, i)
            } catch (o) {
                yB[Ko](o), this._m8Flag || (this._m8Flag = !0, this._l0[Om]())
            }
        }, _io: function (t, i) {
            t[Og](), this._o2f._kj(t, this._k0, this._kl), this._kl._o30(t);
            for (var n, e, s = this._di, h = [], r = 0, a = s.length; a > r; r++) n = s[r], e = n.uiBounds, (this._o2f._n4 || this._o2f._fc(e.x + n.$x, e.y + n.$y, e[no], e[eo])) && (n._ji(t, i), n._k2 && n._k2[Gh] && h[Kh](n));
            if (h[Gh])
                for (r = 0, a = h[Gh]; a > r; r++) h[r]._9p(t, i);
            t[Fy]()
        }, _hb: function (t, i, n) {
            t.save(), t[Wo](-n.x * i, -n.y * i), t[Sa](i, i);
            var e, s, h = this._ni._jw.slice();
            this._h9[Gh] && (ej ? (this._h9[HS](), h = d(h, IF)) : h[HS](IF));
            for (var r = [], a = 0, o = h[Gh]; o > a; a++) e = h[a], e._ib && (s = e[bc], n[qd](s.x + e.$x, s.y + e.$y, s[no], s[eo]) && (e._ji(t, i), e._k2 && e._k2[Gh] && r[Kh](e)));
            if (r[Gh])
                for (a = 0, o = r[Gh]; o > a; a++) r[a]._9p(t, i);
            t[Fy]()
        }, _1d: function () {}, _24: function () {
            for (var t, i, n = this._ni._jw, e = new wj, s = n[Gh] - 1; s >= 0; s--) t = n[s], t._ib && (i = t.uiBounds, e[Yd](t.$x + i.x, t.$y + i.y, i[no], i[eo]));
            var h = this._8x;
            this._8x = e, e[Sl](h) || this._1d(h, e)
        }, _o3o: function () {
            for (var t, i = this._ni._jw, n = i.length - 1; n >= 0; n--) t = i[n], this._o1g(t) && !this._$h && (this._$h = !0)
        }, _29: function (t, i, n, e) {
            this._o2f._n4 || (t && (t > 0 && this._o2f._n6(this._kl._7a.x, this._kl._7a.y, t / this._kl._lk, this._kl._9u / this._kl._lk), n + t < this._kl._o3b && this._o2f._n6(this._kl._7a.x + (n + t) / this._kl._lk, this._kl._7a.y, (this._kl._o3b - n - t) / this._kl._lk, this._kl._9u / this._kl._lk)), i && (i > 0 && this._o2f._n6(this._kl._7a.x, this._kl._7a.y, this._kl._o3b / this._kl._lk, i / this._kl._lk), e + i < this._kl._9u && this._o2f._n6(this._kl._7a.x, this._kl._7a.y + (e + i) / this._kl._lk, this._kl._o3b / this._kl._lk, (this._kl._9u - e - i) / this._kl._lk)))
        }, _ep: function (t, i) {
            this._o17(), this._kl._ep(t, i)
        }, _o36: function (t, i, n) {
            this._o17(), this._kl._o36(t, i, n)
        }, _8v: function () {}, _fz: function (t, i, n) {
            return this._o3d ? void(this._kl._fz(t, i, n) !== !1 && this._o17()) : void(this._kl._lk = t)
        }, _2c: function () {
            var t = this._4w();
            if (!t.isEmpty()) {
                var i = this._kl._o3b / t[no],
                    n = this._kl._9u / t.height,
                    e = Math[lf](i, n);
                return e = Math.max(this._ho, Math[lf](this._hn, e)), {
                    scale: e,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        }, _kn: function (t, i, n) {
            return this._kl._kn(t, i, n) === !1 ? !1 : void this._o17()
        }, _ix: function (t, i) {
            return this._kl._ix(t, i) === !1 ? !1 : void this._o17()
        }, _ko: function (t, i) {
            return this._kl._ko(t, i) === !1 ? !1 : void this._o17()
        }, _6r: function () {
            return this._kl._6rFlag ? !1 : (this._kl._6rFlag = !0, void this._o17())
        }, _5q: function () {
            this._di[Gh] = 0, this._8w = {}
        }, _ls: function () {
            this._lv()
        }, _ig: function () {
            this._lv(), this._iged = !0, this._6v = !1, this._topCanvas[vc](), this._8k[Gh] = 0, this._7i && (this._7i._ig(), delete this._7i)
        }, _lv: function () {
            this._o3d = !1, this._$h = !0, this._ni[vc](), this._5q(), this._o2f._lv(), this._o17()
        }, _8t: function (t, i, n, e) {
            var s = this._lk;
            return new wj(this._o13(t), this._o12(i), n / s, e / s)
        }, _o13: function (t) {
            return this._kl._o13(t)
        }, _o12: function (t) {
            return this._kl._o12(t)
        }, _eo: function (t) {
            return this._kl._eo(t)
        }, _em: function (t) {
            return this._kl._em(t)
        }, _lq: function (t) {
            return this._ni[Od](t.id || t)
        }, _$i: function (t) {
            var i = this._8c(t);
            return i.x = this._o13(i.x), i.y = this._o12(i.y), i
        }, _g7: function (t, i) {
            return {
                x: this._eo(t),
                y: this._em(i)
            }
        }, _ei: function (t, i) {
            return {
                x: this._o13(t),
                y: this._o12(i)
            }
        }, _8c: function (t) {
            return gi(t, this._k0Panel)
        }, _47: function (t) {
            if (t[gO] !== n) return t[gO] ? this._ni[Od](t.uiId) : null;
            var i = Math.round(lj[ug] / this._kl._lk) || .1;
            this._k0[ho] && (i *= this._k0.ratio);
            for (var e, s = this._$i(t), h = s.x, r = s.y, a = this._di, o = a[Gh] - 1; o >= 0; o--)
                if (e = a[o], e._ib && e[Kc](h, r, i)) return t[gO] = e.id, e;
            t[gO] = null
        }, hitTest: function (t) {
            var i = this._47(t);
            if (!i) return null;
            var n = Math.round(lj.SELECTION_TOLERANCE / this._kl._lk) || 1;
            this._k0.ratio && (n *= this._k0[ho]);
            var e = this._$i(t),
                s = e.x,
                h = e.y,
                r = i.hitTest(s, h, n, !0);
            return r instanceof cF ? r : i
        }, _o3i: function (t) {
            t.id !== n && (t = t.id);
            var i = this._ni.getById(t);
            return i ? new wj((i.$x || 0) + i[bc].x, (i.$y || 0) + i[bc].y, i[bc][no], i[bc][eo]) : void 0
        }, _8k: null,
        _2i: function () {
            if (!this._8k[Gh]) return !1;
            var t = this._8k;
            this._8k = [], l(t, function (t) {
                try {
                    t[yO] ? m(t.call, t.scope, t[yO]) : t[zh].call(t[mr])
                } catch (i) {}
            }, this), this._fs()
        }, callLater: function (t, i, n) {
            i && M(i) && (n = i, i = null);
            var e = this._8k;
            e.push({
                call: t,
                scope: i,
                delay: n
            }), this._6v || this._2i()
        }, _6s: function () {
            return this._k0Panel || this._5j(), this._k0Panel
        }, _5j: function () {
            var t = i[uo](eu);
            t[tr] = PF, t[pO] = 0, this._k0 = us(t), this[ho] = this._k0[ho] || 1, this._topCanvas = new ah(this, t), this._k0Panel = t
        }, _dt: function (t) {
            var i = this._6s();
            i[wg] && i.parentNode[ib](i), t.appendChild(this._6s()), T(t, xO)
        }
    }, vi(mO, EO);
    var OF = {
            position: lu,
            "user-select": du,
            outline: du,
            "transform-origin": wO,
            "-webkit-tap-highlight-color": $y
        },
        AF = TO;
    vi($r + AF, OF);
    var CF = {
            position: lu,
            left: gu,
            right: gu,
            top: gu,
            bottom: gu,
            overflow: uu,
            outline: du,
            padding: kO
        },
        PF = MO;
    vi($r + PF, CF), K(cs[yr], {
        _7a: {
            get: function () {
                return this._kl._7a
            }
        },
        _f1: {
            get: function () {
                return this._kl._f1
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._kl._f1 = t)
            }
        },
        _hn: {
            get: function () {
                return this._kl._hn
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._kl._hn = t)
            }
        },
        _ho: {
            get: function () {
                return this._kl._ho
            }, set: function (t) {
                return !t || 0 >= t ? !1 : void(this._kl._ho = t)
            }
        },
        _lk: {
            get: function () {
                return this._kl._hp()
            }, set: function (t) {
                this._fz(t)
            }
        },
        _nq: {
            get: function () {
                return this._kl._lg()
            }
        },
        _ns: {
            get: function () {
                return this._kl._le()
            }
        }
    }), ds[yr] = {
        _dg: null,
        _o3b: 0,
        _9u: 0,
        _2n: !0,
        _1j: !0,
        _kl: null,
        _7a: null,
        _f1: 1.3,
        _hn: 10,
        _ho: .1,
        _lk: 1,
        _nq: 0,
        _ns: 0,
        _7g: function () {
            this._kl._hk(this._dg._k0)
        }, _4x: function () {
            return this._1j = !1, this._5u(this._dg._k0Panel[mu], this._dg._k0Panel[Eu])
        }, _5u: function (t, i) {
            return this._o3b == t && this._9u == i ? !1 : (this._o3b = t, this._9u = i, void this._dg._3w(t, i))
        }, _eu: function (t, i, n) {
            n && (n = Math.max(this._ho, Math[lf](this._hn, n)), this._lk = n), this._nq = this._o3b / 2 - t * this._lk, this._ns = this._9u / 2 - i * this._lk, this._2n = !0
        }, _3i: function (t, i) {
            t = t || this._o3b, i = i || this._9u, this._7a[Mr](-this._nq / this._lk, -this._ns / this._lk, t / this._lk, i / this._lk)
        }, _kn: function (t, i, n) {
            return this._fz(this._64() * t, i, n)
        }, _ko: function (t, i) {
            return this._fz(this._64() * this._f1, t, i)
        }, _ix: function (t, i) {
            return this._fz(this._64() / this._f1, t, i)
        }, _fz: function (t, i, e) {
            this._6rFlag = !1, t = Math[xo](this._ho, Math.min(this._hn, t));
            var s = this._64();
            return i === n && (i = this._o3b / 2, e = this._9u / 2), t != s && (this._2n = !0, this._dg._8v(s, t)), this._kl._fz(t / this._lk, i, e)
        }, _64: function () {
            return this._lk * this._kl._lk
        }, _ep: function (t, i) {
            this._kl._ep(t, i)
        }, _o36: function (t, i, n) {
            var e = this._lg(),
                s = this._le(),
                h = this._hp();
            return n && (n = Math[xo](this._ho, Math.min(this._hn, n))), t != e || i != s || n && n != h ? (n && n != h ? (n /= this._lk, this._2n = !0) : n = this._kl._lk, t -= e * n, i -= s * n, this._kl._97(n, t, i), this._dg._3m(e, s, h, arguments[0], arguments[1], arguments[2]), h != arguments[2] && this._dg._8v(h, arguments[2]), !0) : !1
        }, _6r: function () {
            this._6rFlag = !0
        }, _hp: function () {
            return this._lk * this._kl._lk
        }, _lg: function () {
            return this._nq * this._kl._lk + this._kl._nq
        }, _le: function () {
            return this._ns * this._kl._lk + this._kl._ns
        }, _ka: function (t, i) {
            this._1j && this._4x(), fj && aj && (i = !0);
            var n = t._k0,
                e = n[ho] || 1,
                s = n.clientWidth,
                h = n[Eu],
                r = this._o3b != s,
                a = this._9u != h,
                o = r || a;
            o && t._topCanvas._k0[bo](this._o3b, this._9u);
            var f = this._nq,
                _ = this._ns,
                c = this._lk;
            if (this._6rFlag) {
                this._6rFlag = !1;
                var u = t._2c();
                u && this._eu(u.cx, u.cy, u[Sa])
            }
            if (this._2n || i || o) return this._2n = !1, this._lk *= this._kl._lk, this._nq = this._nq * this._kl._lk + this._kl._nq, this._ns = this._ns * this._kl._lk + this._kl._ns, this._kl._lk = 1, this._kl._nq = 0, this._kl._ns = 0, o && n[bo](this._o3b, this._9u), t._o2f._n4 = !0, this._3i(this._o3b, this._9u), void((f != this._nq || _ != this._ns || c != this._lk) && (t._3m(f, _, c, this._nq, this._ns, this._lk), c != this._lk && t._8v(c, this._lk)));
            var d = this._kl._nq,
                l = this._kl._ns;
            if (d || l) {
                this._kl._nq = 0, this._kl._ns = 0, this._nq += d, this._ns += l, this._3i(s, h);
                var b = n.g;
                this._dz(b, n, d * e, l * e), t._29(d, l, s, h), t._3m(f, _, c, this._nq, this._ns, this._lk)
            }
        }, _dz: function (t, n, e, s) {
            var h = this._o3ackCanvas;
            h || (h = this._o3ackCanvas = i.createElement(ao), h.g = h.getContext(lo)), h.width = n.width, h.height = n.height, h.g[Sg](n, e, s), t._lv(), t.drawImage(h, 0, 0)
        }, _o30: function (t) {
            1 != t.canvas.ratio && t[Sa](t[ao][ho], t[ao].ratio), t.translate(this._nq, this._ns), t.scale(this._lk, this._lk)
        }, _o13: function (t) {
            return (t - this._nq) / this._lk
        }, _o12: function (t) {
            return (t - this._ns) / this._lk
        }, _eo: function (t) {
            return t * this._lk + this._nq
        }, _em: function (t) {
            return t * this._lk + this._ns
        }
    };
    var LF = function () {
        this._g8 = [], this._k3 = new wj
    };
    LF[yr] = {
        _g9: 20,
        _g8: null,
        _n4: !1,
        _k3: null,
        _lv: function () {
            this._n4 = !1, this._g8[Gh] = 0, this._k3[vc]()
        }, _j0: function () {
            return this._n4 || this._g8.length > 0
        }, _n6: function (t, i, n, e) {
            this._n4 || 0 >= n || 0 >= e || (this._g8[Kh]({
                x: t,
                y: i,
                width: n,
                height: e
            }), this._k3.addRect(t, i, n, e))
        }, _g5: function (t) {
            this._n6(t.x, t.y, t[no], t.height)
        }, _fc: function (t, i, n, e) {
            if (!this._k3[qd](t, i, n, e)) return !1;
            if (dj || this._g8[Gh] >= this._g9) return !0;
            for (var s, h = 0, r = this._g8[Gh]; r > h; h++)
                if (s = this._g8[h], hi(t, i, n, e, s.x, s.y, s.width, s[eo])) return !0;
            return !1
        }, _kj: function (t, i, n) {
            if (this._n4) return t[Mo](1, 0, 0, 1, 0, 0), void(aj && 4.3 > uj ? (t[uf](0, 0, i[no], i[eo]), i[ha][cm] = du, i.offsetHeight, i[ha][cm] = SO) : t[uf](0, 0, i.width, i[eo]));
            t[Cy]();
            var e, s, h, r, a = n._lk,
                o = this._g8,
                f = i[ho] || 1;
            if (dj || o[Gh] >= this._g9) return e = n._eo(this._k3.x) * f, s = n._em(this._k3.y) * f, h = X(e + this._k3[no] * a * f) - (e = W(e)), r = X(s + this._k3.height * a * f) - (s = W(s)), t[uf](e, s, h, r), t[Pv](e, s, h, r), void t[Pg]();
            for (var _, c = 0, u = o.length; u > c; c++) _ = o[c], e = n._eo(_.x) * f, s = n._em(_.y) * f, h = X(e + _[no] * a * f) - (e = W(e)), r = X(s + _[eo] * a * f) - (s = W(s)), t[uf](e, s, h, r), t[Pv](e, s, h, r);
            t[Pg]()
        }
    };
    var RF = {};
    RF[dF[dg]] = lj[dg], RF[dF.SELECTION_BORDER] = lj[KE], RF[dF[JE]] = lj[JE], RF[dF[cg]] = pB.SELECTION_TYPE_SHADOW, RF[dF[ew]] = 2, RF[dF.SELECTION_SHADOW_OFFSET_Y] = 2, RF[dF.LABEL_COLOR] = lj[dT], RF[dF.LABEL_POSITION] = kj[rl], RF[dF[uT]] = kj[IO], RF[dF[IM]] = new Tj(0, 2), RF[dF.LABEL_POINTER_WIDTH] = 8, RF[dF.LABEL_RADIUS] = 8, RF[dF[AM]] = !0, RF[dF[LT]] = 0, RF[dF.LABEL_BORDER_STYLE] = Bg, RF[dF[OO]] = !0, RF[dF[jT]] = null, RF[dF[BT]] = null, RF[dF[ZM]] = AO, RF[dF.EDGE_WIDTH] = 1.5, RF[dF[CO]] = !0, RF[dF.EDGE_TO_AT_EDGE] = !0, RF[dF[ZT]] = V(3438210798), RF[dF[JT]] = 1, RF[dF.GROUP_STROKE_STYLE] = Bg, RF[dF[JM]] = !0, RF[dF.ARROW_FROM_SIZE] = lj.ARROW_SIZE, RF[dF[nM]] = lj[PO], RF[dF.EDGE_LOOPED_EXTAND] = 10, RF[dF[Dc]] = 8, RF[dF[Lk]] = pB[LO], RF[dF[Sc]] = !0, RF[dF.EDGE_EXTEND] = 20, RF[dF[Cc]] = .5, RF[dF.EDGE_SPLIT_VALUE] = 20, RF[dF[Mk]] = 20, RF[dF[MS]] = kj[rl], RF[dF[kS]] = kj[IO], RF[dF[hk]] = RO, RF[dF[vw]] = 1, RF[dF.SHAPE_STROKE_STYLE] = DO, RF[dF[DM]] = lj[Qo], RF[dF[aw]] = 1, lj.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2, pB[NO] = jO, pB[BO] = $O, pB[FO] = GO, lj[zO] = pB[NO];
    var DF = function (t, n) {
        this._l0 = t, S(n) && (n = i[qO](n)), n && n[Dd] || (n = i.createElement(eu)), j(this, DF, [n]), this._l0._14[Xl](this._1i, this), this._l0._$c[Xl](this._28, this), this._l0._1s[Xl](this._9q, this), this._l0._1g[Xl](this._7u, this), this._l0._$s.addListener(this._35, this), this._l0._$y.addListener(this._4d, this), this._o3p = {}, this._4a(lj.NAVIGATION_TYPE, !0)
    };
    DF[yr] = {
        _$o: null,
        _4d: function (t) {
            var i = t[Xo],
                n = t[Ao];
            if (n)
                if (this._o3d) {
                    var e, s;
                    if (O(n))
                        for (var h = 0, r = n[Gh]; r > h; h++) s = n[h].id, e = this._ni.getById(s), e && (e[YO] = i.containsById(s), e[$S]());
                    else {
                        if (s = n.id, e = this._ni[Od](s), !e) return;
                        e[YO] = i[Ad](s), e[$S]()
                    }
                    this._o17()
                } else {
                    this._$o || (this._$o = {});
                    var e, s;
                    if (O(n))
                        for (var h = 0, r = n[Gh]; r > h; h++) s = n[h].id, this._$o[s] = !0;
                    else s = n.id, this._$o[s] = !0
                }
        }, _l0: null,
        _o1q: function (t) {
            var i = t.uiClass;
            return i ? new i(t, this._l0) : void 0
        }, _1i: function () {}, _28: function (t) {
            if (!this._o3d) return !1;
            var i = t[Xo],
                n = t[td];
            Rm == n && this._l0[Sm](), Cm == n ? (this._ni[Cd](i.id), this._l4(i)) : xE == n && i._il() && t[Fu] && this._5d(i);
            var e = this._ni.getById(i.id);
            e && e._o3d && e[HO](t) && this._o17()
        }, _3t: function (t) {
            var i = this._lq(t);
            i && (i[oI](), this._o17())
        }, _9q: function (t) {
            if (!this._o3d) return !1;
            switch (this._$h = !0, t[td]) {
            case Yj.KIND_ADD:
                this._l4(t.data);
                break;
            case Yj[zl]:
                this._h2(t[Ao]);
                break;
            case Yj[Rl]:
                this._j4(t.data)
            }
        }, _lv: function () {
            this._o3p = {}, B(this, DF, UO)
        }, _o3p: null,
        _l4: function (t) {
            var i = this._o1q(t);
            i && (this._ni[sr](i), this._o3d && (this._o3p[t.id] = t), this._o17())
        }, _h2: function (t) {
            if (yB[fr](t)) {
                for (var i, n = [], e = 0, s = t[Gh]; s > e; e++) i = t[e].id, n[Kh](i), delete this._o3p[i];
                t = n
            } else t = t.id, delete this._o3p[t];
            this._ni.remove(t) && this._o17()
        }, _j4: function () {
            this._lv()
        }, _7u: function (t) {
            return this._o3d ? void(t.source instanceof aF && !this._o3p[t[Xo].id] && (t[ul] && (this._3t(t[ul]), t.oldValue.__6v = !0), t.value && (this._3t(t.value), t[Fu].__6v = !0), this._5d(t[Xo]))) : !1
        }, _35: function (t) {
            return this._o3d ? void(t[Xo] instanceof aF && !this._o3p[t[Xo].id] && this._5d(t[Xo])) : !1
        }, _o3o: function (t) {
            return t ? this._15() : void this._o29()
        }, _3e: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[m_](!0);
                if (!i) return t._edgeBundleInvalidateFlag = !1, void t.validateEdgeBundle();
                i._fs(this._l0), i._o2o(function (t) {
                    t[WO]()
                })
            }
        }, _15: function () {
            var t, i = (this._l0, this._l0.graphModel),
                n = this._ni,
                e = [],
                s = 1;
            if (i[XO](function (i) {
                return i instanceof rF ? (this._3e(i), void e[Kh](i)) : (t = this._o1q(i), void(t && (n[sr](t), t._ib = this._fn(i, !1, !0), i.__m3 = s++)))
            }, this), n[Gh])
                for (var h = n._jw, s = h[Gh] - 1; s >= 0; s--) t = h[s], t._ib && this._41(t, t[Rf]);
            for (var r, s = 0, a = e[Gh]; a > s; s++)
                if (r = e[s], t = this._o1q(r))
                    if (t._ib = this._fn(r, !0, !0), t._ib) {
                        this._41(t, r, !0), n[sr](t);
                        var o = r[w_],
                            f = r[E_],
                            _ = o.__m3 || 0;
                        o != f && (_ = Math[xo](_, f.__m3 || 0)), r.__m3 = _
                    } else n[sr](t);
            if (e[Gh] && n._jw[HS](function (t, i) {
                return t[Rf].__m3 - i[Rf].__m3
            }), this._$o) {
                var c = i[Tu];
                for (var u in this._$o)
                    if (c[Ad](u)) {
                        var t = n[Od](u);
                        t && (t.selected = !0)
                    }
                this._$o = null
            }
        }, _o29: function () {
            for (var t in this._o3p) {
                var i = this._o3p[t];
                i instanceof aF ? this._5d(i) : this._5f(i)
            }
            this._o3p = {};
            for (var n, e, s, h = this._ni._jw, r = [], a = h.length - 1; a >= 0; a--) n = h[a], e = n.$data, s = e instanceof rF, s && this._3e(e), n._ib = this._fn(e, s), n._ib ? s ? r[Kh](n) : this._41(n, e) && !this._$h && (this._$h = !0) : e.__ibChanged && n._o3d && (n.__oldBounds = {
                x: n.$x + n[bc].x,
                y: n.$y + n.uiBounds.y,
                width: n[bc].width,
                height: n[bc].height
            });
            if (r.length)
                for (var a = 0, o = r[Gh]; o > a; a++) n = r[a], this._41(n, n.$data) && !this._$h && (this._$h = !0)
        }, _41: function (t, i, e) {
            if (e || e === n && i instanceof rF) return i.__4q && (i.__4q = !1, t._4q()), this._o1g(t);
            if (i.__6v && i._il() && (t._5i(), i.__6v = !1), this._o1g(t)) {
                var s = this._4u(i);
                return s && (s.__6v = !0), i[VO]() && i[P_](function (t) {
                    t.__4q = !0
                }, this), !0
            }
        }, _3g: function (t, i) {
            var n = t[w_],
                e = t.toAgent,
                s = i[ZO](n.id);
            if (n == e) return s;
            var h = i.getIndexById(e.id);
            return Math.max(s, h)
        }, _3h: function (t, i) {
            var n = this[ku]._i4(t);
            return n ? i.getIndexById(n.id) : 0
        }, _5d: function (t) {
            var i = this._ni,
                n = i[Od](t.id);
            if (!n) throw new Error(KO + t[zo] + JO);
            var s = this._3h(t, i),
                h = [n];
            t[qh]() && e(t, function (t) {
                t instanceof aF && (n = i[Od](t.id), n && h[Kh](n))
            }, this), this._4s(i, s, h)
        }, _5f: function (t) {
            var i = this._ni[Od](t.id);
            if (i) {
                var n = this._3g(t, this._ni);
                this._ni[QO](i, n)
            }
        }, _4s: function (t, i, n) {
            function e(t) {
                s[sr](t)
            }
            var s = new vj;
            l(n, function (n) {
                i = t.setIndexAfter(n, i), n.$data.forEachEdge(e)
            }, this), 0 != s.length && s[h_](this._5f, this)
        }, _8s: function (t) {
            return t[m_](!0)
        }, _5k: function (t) {
            if (!t.isBundleEnabled()) return !1;
            var i = t[m_](!0);
            i && i[tA]() !== !1 && this._o17()
        }, _4u: function (t) {
            var i = pe(t);
            return i && i[xE] ? i : null
        }, _h7: function (t) {
            return pe(t)
        }, _3k: function (t, i, n) {
            t._12 = !1;
            var e = t._ib;
            t._ib = this._5s(t, i), n || t._ib == e || (t.__ibChanged = !0)
        }, _5s: function (t, i) {
            return this._49(t, i) ? !this._l0._ibFilter || this._l0._ibFilter(t) !== !1 : !1
        }, _fn: function (t, i, n) {
            return t._12 && this._3k(t, i, n), t._ib
        }, _9l: function (t) {
            return !this._l0._4c || this._l0._4c == th(t)
        }, _49: function (t, i) {
            if (t[mM] === !1) return !1;
            if (i === n && (i = t instanceof rF), !i) return this._l0._4c != th(t) ? !1 : !t._dp;
            var e = t[w_],
                s = t[E_];
            if (!e || !s) return !1;
            if (e == s && !t[T_]()) return !1;
            if (t.isBundleEnabled()) {
                var h = t[m_](!0);
                if (h && !h._fn(t)) return !1
            }
            var r = this._fn(e, !1),
                a = this._fn(s, !1);
            return r && a ? !0 : !1
        }, _7k: null,
        _7i: null,
        _4a: function (t, i) {
            return i || t != this._7k ? (this._7k = t, this._7i && (this._7i._ig(), delete this._7i), t == pB[NO] ? void(this._7i = new hh(this, this._k0Panel)) : t == pB[FO] ? void(this._7i = new sh(this, this._k0Panel)) : void 0) : !1
        }, _3m: function (t, i, n, e, s, h) {
            this._l0._59(new Dj(this._l0, au, {
                tx: e,
                ty: s,
                scale: h
            }, {
                tx: t,
                ty: i,
                scale: n
            })), this._68()
        }, _8v: function (t, i) {
            this._l0._59(new Dj(this._l0, Sa, i, t))
        }, _68: function () {
            this._7i && this._7i._ka(), this._l0._59(new Dj(this._l0, Of))
        }, _1d: function (t, i) {
            this._l0._59(new Dj(this._l0, iA, i, t)), this._68()
        }
    }, N(DF, cs), K(DF[yr], {
        graphModel: {
            get: function () {
                return this._l0._l0Model
            }
        }
    });
    var NF = function (i, n) {
        this._14 = new Gj, this._14.on(function (t) {
            uE == t[td] && this[Sm]()
        }, this), this._1s = new Gj, this._1s.addListener(function (t) {
            !this[uE] || t[td] != Yj.KIND_CLEAR && t.kind != Yj.KIND_REMOVE || this[ku].contains(this.currentSubNetwork) || (this.currentSubNetwork = null)
        }, this), this._$c = new Gj, this._1g = new Gj, this._$s = new Gj, this._$y = new Gj, this[ku] = n || new is, this._91 = new DF(this, i), this._3p = new Ch(this), this._1m = new Gj, this._onresize = tB(t, nA, function () {
            this.updateViewport()
        }, !1, this), this._91._k0Panel[eA] = function (t) {
            this[eA](t)
        }[Mg](this), this._91._k0Panel[sA] = function (t) {
            this[sA](t)
        }.bind(this)
    };
    NF[yr] = {
        fullRefresh: !1,
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            yB[hA](t)
        }, getDropInfo: function (t, i) {
            var n = null;
            if (i) try {
                n = JSON[i_](i)
            } catch (e) {}
            return n
        }, ondrop: function (t) {
            var i = t.dataTransfer;
            if (i) {
                var n = i[xa](Wu),
                    e = this[rA](t, n);
                e || (e = {}, e.image = i[xa](Vg), e.type = i.getData(Do), e.label = i[xa](gx), e.groupImage = i[xa](TE));
                var s = this.globalToLocal(t);
                if (s = this.toLogical(s.x, s.y), !(this[aA] instanceof Function && this[aA][zh](this, t, s, e) === !1) && (e[Vg] || e[gx])) {
                    var h = e[Vg],
                        r = e[Do],
                        a = e[gx],
                        o = e[TE];
                    yB[hA](t);
                    var f;
                    if (r && oA != r ? fA == r ? f = this.createText(a, s.x, s.y) : oE == r ? f = this[_A](a, s.x, s.y) : cA == r ? (f = this.createGroup(a, s.x, s.y), o && (o = Qs(o), o && (f[TE] = o))) : (r = J(r), r instanceof Function && r[yr] instanceof aF && (f = new r, f[zo] = a, f[Xm] = new pj(s.x, s.y), this._l0Model[sr](f))) : f = this.createNode(a, s.x, s.y), f) {
                        if (h && (h = Qs(h), h && (f[Vg] = h)), t.shiftKey) {
                            var _ = this[uA](t);
                            (_[Rm] || _ instanceof _F) && (f[x_] = _)
                        }
                        if (e[dA])
                            for (var c in e[dA]) f[c] = e[dA][c];
                        if (e[lA])
                            for (var c in e[lA]) f[Mr](c, e[lA][c]);
                        if (e.styles && f[Dm](e.styles), this.onElementCreated(f, t, e) === !1) return !1;
                        var u = new Ah(this, Ah.ELEMENT_CREATED, t, f);
                        return this[bA](u), f
                    }
                }
            }
        }, enableDoubleClickToOverview: !0,
        _91: null,
        _14: null,
        _1s: null,
        _$c: null,
        _$y: null,
        _1g: null,
        _$s: null,
        _1x: function (t) {
            return this._14[Sr](t)
        }, _59: function (t) {
            this._14.onEvent(t)
        }, isVisible: function (t) {
            return this._91._fn(t)
        }, isMovable: function (t) {
            return (t instanceof aF || t instanceof rF && t[Gc]()) && t.movable !== !1
        }, isSelectable: function (t) {
            return t.selectable !== !1
        }, isEditable: function (t) {
            return t.editable !== !1
        }, isRotatable: function (t) {
            return t[LM] !== !1
        }, isResizable: function (t) {
            return t[vA] !== !1
        }, canLinkFrom: function (t) {
            return t.linkable !== !1 && t.canLinkFrom !== !1
        }, canLinkTo: function (t) {
            return t.linkable !== !1 && t.canLinkTo !== !1
        }, createNode: function (t, i, n) {
            var e = new aF(t, i, n);
            return this._l0Model[sr](e), e
        }, createText: function (t, i, n) {
            var e = new es(t, i, n);
            return this._l0Model.add(e), e
        }, createShapeNode: function (t, i, n, e) {
            M(i) && (e = n, n = i, i = null);
            var s = new oF(t, i);
            return s[Um] = new pj(n, e), this._l0Model.add(s), s
        }, createGroup: function (t, i, n) {
            var e = new _F(t, i, n);
            return this._l0Model.add(e), e
        }, createEdge: function (t, i, n) {
            if (t instanceof aF) {
                var e = n;
                n = i, i = t, t = e
            }
            var s = new rF(i, n);
            return t && (s[km] = t), this._l0Model[sr](s), s
        }, addElement: function (t, i) {
            this._l0Model[sr](t), i && t[qh]() && t.forEachChild(function (t) {
                this[gA](t, i)
            }, this)
        }, removeElement: function (t) {
            this._l0Model[Vh](t)
        }, clear: function () {
            this._l0Model[vc]()
        }, getStyle: function (t, i) {
            var e = t._jo[i];
            return e !== n ? e : this.getDefaultStyle(i)
        }, getDefaultStyle: function (t) {
            if (this._jo) {
                var i = this._jo[t];
                if (i !== n) return i
            }
            return RF[t]
        }, translate: function (t, i, n) {
            return n ? this[yA](this.tx + t, this.ty + i, this[Sa], n) : this._91._ep(t, i)
        }, translateTo: function (t, i, n, e) {
            if (e) {
                var s = this._6f();
                return s._l9(t, i, n, e)
            }
            return this._91._o36(t, i, n)
        }, centerTo: function (t, i, n, e) {
            return (!n || 0 >= n) && (n = this[Sa]), this[yA](this.width / 2 - t * n, this[eo] / 2 - i * n, n, e)
        }, moveToCenter: function (t, i) {
            this[pA](function () {
                var n = this.bounds;
                this.centerTo(n.cx, n.cy, t, i)
            }, this)
        }, zoomToOverview: function (t, i) {
            return this[pA](function () {
                var n = this._91._2c();
                n && (i && (n[Sa] = Math[lf](n.scale, i)), this[xA](n.cx, n.cy, n[Sa], t))
            }, this)
        }, zoomAt: function (t, i, e, s) {
            if (s === n && (s = this[mA] === n || null === this.zoomAnimation ? lj.ZOOM_ANIMATE : this[mA]), i === n && (i = this.width / 2), i = i || 0, e === n && (e = this[eo] / 2), e = e || 0, s) {
                var h = this.scale;
                return t = h * t, t >= this.maxScale || t <= this[EA] ? !1 : (i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this.translateTo(i, e, t, s))
            }
            return this._91._kn(t, i, e)
        }, zoomOut: function (t, i, n) {
            return n ? this[wA](1 / this[TA], t, i, n) : this._91._ix(t, i)
        }, zoomIn: function (t, i, n) {
            return n ? this[wA](this.scaleStep, t, i, n) : this._91._ko(t, i)
        }, _6f: function () {
            return this._panAnimation || (this._panAnimation = new zF(this)), this._panAnimation
        }, enableInertia: !0,
        _o2d: function (t, i) {
            var n = this._6f();
            return n._i0(t || 0, i || 0)
        }, stopAnimation: function () {
            this._panAnimation && this._panAnimation._me()
        }, getUI: function (t) {
            return Q(t) ? this._91._47(t) : this._91._lq(t)
        }, getUIByMouseEvent: function (t) {
            return this._91._47(t)
        }, hitTest: function (t) {
            return this._91[Kc](t)
        }, globalToLocal: function (t) {
            return this._91._8c(t)
        }, toCanvas: function (t, i) {
            return this._91._g7(t, i)
        }, toLogical: function (t, i) {
            return Q(t) ? this._91._$i(t) : this._91._ei(t, i)
        }, getElementByMouseEvent: function (t) {
            var i = this._91._47(t);
            return i ? i[Rf] : void 0
        }, getElement: function (t) {
            if (Q(t)) {
                var i = this._91._47(t);
                return i ? i[Rf] : null
            }
            return this._l0Model[Od](t)
        }, invalidate: function () {
            this._91._o17()
        }, invalidateUI: function (t) {
            t[Om](), this[Om]()
        }, invalidateElement: function (t) {
            this._91._3t(t)
        }, getUIBounds: function (t) {
            return this._91._o3i(t)
        }, forEachVisibleUI: function (t, i) {
            return this._91._4i(t, i)
        }, forEachReverseVisibleUI: function (t, i) {
            return this._91._17(t, i)
        }, forEachUI: function (t, i) {
            return this._91._f8(t, i)
        }, forEachReverseUI: function (t, i) {
            return this._91._54(t, i)
        }, forEach: function (t, i) {
            return this._l0Model[h_](t, i)
        }, getElementByName: function (t) {
            var i;
            return this._l0Model.forEach(function (n) {
                return n[zo] == t ? (i = n, !1) : void 0
            }), i
        }, focus: function (i) {
            if (i) {
                var n = t[Vu] || t.pageXOffset,
                    e = t.scrollY || t[va];
                return this[kb][kA](), void t[MA](n, e)
            }
            this[kb][kA]()
        }, callLater: function (t, i, n) {
            this._91.callLater(t, i, n)
        }, exportImage: function (t, i) {
            return _h(this, t, i)
        }, setSelection: function (t) {
            return this._l0Model._selectionModel[Mr](t)
        }, select: function (t) {
            return this._l0Model._selectionModel[Xu](t)
        }, unselect: function (t) {
            return this._l0Model._selectionModel[SA](t)
        }, reverseSelect: function (t) {
            return this._l0Model._selectionModel[IA](t)
        }, selectAll: function () {
            oh(this)
        }, unSelectAll: function () {
            this[Tu][vc]()
        }, unselectAll: function () {
            this.unSelectAll()
        }, isSelected: function (t) {
            return this._l0Model._selectionModel.contains(t)
        }, sendToTop: function (t) {
            Ee(this._l0Model, t)
        }, sendToBottom: function (t) {
            we(this._l0Model, t)
        }, moveElements: function (t, i, n) {
            var e = [],
                s = new vj;
            return l(t, function (t) {
                t instanceof aF ? e[Kh](t) : t instanceof rF && s[sr](t)
            }), this._es(e, i, n, s)
        }, _es: function (t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[Gh] && 0 == e[Gh]) return !1;
            if (0 != t[Gh]) {
                var s = this._55(t);
                e = this._57(s, e), l(s, function (t) {
                    var e = t.$location;
                    e ? t[OA](e.x + i, e.y + n) : t.setLocation(i, n)
                })
            }
            return e && e.length && this._eq(e, i, n), !0
        }, _eq: function (t, i, n) {
            t.forEach(function (t) {
                t[Gb](i, n)
            })
        }, _57: function (t, i) {
            return this[ku][h_](function (n) {
                n instanceof rF && this[AA](n) && t[Zc](n[w_]) && t.contains(n[E_]) && i.add(n)
            }, this), i
        }, _55: function (t) {
            var i = new vj;
            return l(t, function (t) {
                !this.isMovable(t), i.add(t), xe(t, i, this._movableFilter)
            }, this), i
        }, reverseExpanded: function (t) {
            return this._91._5k(t)
        }, _3p: null,
        _1m: null,
        beforeInteractionEvent: function (t) {
            return this._1m.beforeEvent(t)
        }, onInteractionEvent: function (t) {
            this._1m[Ir](t)
        }, addCustomInteraction: function (t) {
            this._3p[CA](t)
        }, enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t.tooltip || t[zo]
        }, updateViewport: function () {
            this._91._44();
            var t = new Dj(this, PA);
            this._59(t)
        }, destroy: function () {
            this._59(new Dj(this, lc, !0, this._iged)), this._iged = !0, iB(t, nA, this._onresize), G(this, LA), this._3p.destroy(), this.graphModel = new is;
            var i = this[RA];
            this._91._ig(), i && (i[DA] = "")
        }, onPropertyChange: function (t, i, n) {
            this._14[Xl](function (e) {
                e[td] == t && i[zh](n, e)
            })
        }, removeSelection: function () {
            var t = this.selectionModel._jw;
            return t && 0 != t[Gh] ? (t = t.slice(), this._l0Model.remove(t), t) : !1
        }, removeSelectionByInteraction: function (t) {
            var i = this[Tu][hb];
            return i && 0 != i[Gh] ? void yB[uv](NA + i[Gh], function () {
                var i = this[jA]();
                if (i) {
                    var n = new Ah(this, Ah[BA], t, i);
                    this[bA](n)
                }
            }, this) : !1
        }, createShapeByInteraction: function (t, i, n, e) {
            var s = new t$(i);
            i.length > 2 && s[df]();
            var h = this[_A]($A, s, n, e);
            this[FA](h, t);
            var r = new Ah(this, Ah[GA], t, h);
            return this[bA](r), h
        }, createLineByInteraction: function (t, i, n, e) {
            var s = new t$(i),
                h = this.createShapeNode(zA, s, n, e);
            h[Mm](yB[qA][ww], null), h.setStyle(yB.Styles.SHAPE_FILL_GRADIENT, null), h[Mm](yB[qA][RS], !0), this.onElementCreated(h, t);
            var r = new Ah(this, Ah[GA], t, h);
            return this.onInteractionEvent(r), h
        }, createEdgeByInteraction: function (t, i, n, e) {
            var s = this[YA](HA, t, i);
            if (e) s._o28 = e;
            else {
                var h = this[UA],
                    r = this[Qc];
                this[WA] && (h = this[WA][Cm] || h, r = this[WA][Qc] || r), h && (s[Cm] = h), r && (s[Qc] = r)
            }
            this[FA](s, n);
            var a = new Ah(this, Ah[GA], n, s);
            return this[bA](a), s
        }, onElementCreated: function (t) {
            !t[x_] && this[uE] && (t.parent = this.currentSubNetwork)
        }, allowEmptyLabel: !1,
        startLabelEdit: function (t, i, n, e) {
            var s = this;
            n.startEdit(e.x, e.y, i.data, this[Mc](t, dF[bT]), function (n) {
                return s[XA](t, i, n, i[x_])
            })
        }, onLabelEdit: function (t, i, n, e) {
            return n || this[VA] ? void(gx == i[zo] ? t[zo] = n : e._gv(i, n) === !1 && (i[Ao] = n, this[ZA](t))) : (yB.alert(KA), !1)
        }, setInteractionMode: function (t, i) {
            this[JA] = t, this[WA] = i
        }, upSubNetwork: function () {
            return this._4c ? this[uE] = th(this._4c) : !1
        }, _12: !1,
        invalidateVisibility: function () {
            this._12 = !0, this[Om]()
        }, getBundleLabel: function (t) {
            var i = t.getEdgeBundle(!0);
            return i && i[QA] == t ? tC + i[iC][Gh] : null
        }, zoomAnimation: null
    }, K(NF.prototype, {
        center: {
            get: function () {
                return this.toLogical(this.html[mu] / 2, this[RA][Eu] / 2)
            }
        },
        visibleFilter: {
            get: function () {
                return this._ibFilter
            }, set: function (t) {
                this._ibFilter = t, this[Sm]()
            }
        },
        topCanvas: {
            get: function () {
                return this._91._topCanvas
            }
        },
        propertyChangeDispatcher: {
            get: function () {
                return this._14
            }
        },
        listChangeDispatcher: {
            get: function () {
                return this._1s
            }
        },
        dataPropertyChangeDispatcher: {
            get: function () {
                return this._$c
            }
        },
        selectionChangeDispatcher: {
            get: function () {
                return this._$y
            }
        },
        parentChangeDispatcher: {
            get: function () {
                return this._1g
            }
        },
        childIndexChangeDispatcher: {
            get: function () {
                return this._$s
            }
        },
        interactionDispatcher: {
            get: function () {
                return this._1m
            }
        },
        cursor: {
            set: function (t) {
                this.canvasPanel.style[nC] = t || this._3p.defaultCursor
            }, get: function () {
                return this[kb].style[nC]
            }
        },
        interactionMode: {
            get: function () {
                return this._3p._o1urrentMode
            }, set: function (t) {
                var i = this[JA];
                i != t && (this._3p.currentMode = t, this._59(new Dj(this, JA, t, i)))
            }
        },
        scaleStep: {
            get: function () {
                return this._91._f1
            }, set: function (t) {
                this._91._f1 = t
            }
        },
        maxScale: {
            get: function () {
                return this._91._hn
            }, set: function (t) {
                this._91._hn = t
            }
        },
        minScale: {
            get: function () {
                return this._91._ho
            }, set: function (t) {
                this._91._ho = t
            }
        },
        scale: {
            get: function () {
                return this._91._lk
            }, set: function (t) {
                return this._91._lk = t
            }
        },
        tx: {
            get: function () {
                return this._91._nq
            }
        },
        ty: {
            get: function () {
                return this._91._ns
            }
        },
        styles: {
            get: function () {
                return this._jo
            }, set: function (t) {
                this._jo = t
            }
        },
        selectionModel: {
            get: function () {
                return this._l0Model._selectionModel
            }
        },
        graphModel: {
            get: function () {
                return this._l0Model
            }, set: function (t) {
                if (this._l0Model == t) return !1;
                var i = this._l0Model,
                    n = new Dj(this, ku, i, t);
                return this._1x(n) === !1 ? !1 : (null != i && (i[eC][Kg](this._14, this), i.listChangeDispatcher[Kg](this._1s, this), i[Wl][Kg](this._$c, this), i[Kl][Kg](this._1g, this), i.childIndexChangeDispatcher.removeListener(this._$s, this), i.selectionChangeDispatcher[Kg](this._$y, this)), this._l0Model = t, this._l0Model && (this._l0Model.propertyChangeDispatcher[Xl](this._14, this), this._l0Model[Hl].addListener(this._1s, this), this._l0Model[Wl].addListener(this._$c, this), this._l0Model[Kl][Xl](this._1g, this), this._l0Model[nb].addListener(this._$s, this), this._l0Model.selectionChangeDispatcher[Xl](this._$y, this)), this._91 && this._91._ls(), void this._59(n))
            }
        },
        count: {
            get: function () {
                return this._l0Model.length
            }
        },
        width: {
            get: function () {
                return this[RA].clientWidth
            }
        },
        height: {
            get: function () {
                return this[RA][Eu]
            }
        },
        viewportBounds: {
            get: function () {
                return this._91._7a
            }
        },
        bounds: {
            get: function () {
                return this._91._4w()
            }
        },
        canvasPanel: {
            get: function () {
                return this._91._k0Panel
            }
        },
        html: {
            get: function () {
                return this._91._k0Panel[wg]
            }
        },
        navigationType: {
            get: function () {
                return this._91._7k
            }, set: function (t) {
                this._91._4a(t)
            }
        },
        _4c: {
            get: function () {
                return this._l0Model._4c
            }
        },
        currentSubNetwork: {
            get: function () {
                return this._l0Model.currentSubNetwork
            }, set: function (t) {
                this._l0Model.currentSubNetwork = t
            }
        }
    }), lj[sC] = 60, lj[hC] = 60, ih[yr] = {
        initialize: function () {
            B(this, ih, rO), this[UM]()
        }, _o2i: function () {
            this._n0 = new t$, this[XM] = new kF(this._n0), this.shape[$M] = !1, this[FS](this[XM], 0), this.body = this[XM]
        }, checkBody: function () {
            return this._6h() ? (this._2k = !0, this[XM] ? (this[XM][mM] = !0, this[hI] = this[XM]) : (this._o2i(), pF[GS](this)), void(this[Vg] && (this[Vg][mM] = !1))) : (this.image ? (this[Vg][mM] = !0, this[hI] = this.image) : this._o35(), void(this[XM] && (this[XM][mM] = !1)))
        }, _6h: function () {
            return this[Rf]._il() && this[Rf][xE]
        }, _n0: null,
        _2k: !0,
        _5i: function () {
            this._1u = !0, this._2k = !0
        }, doValidate: function () {
            if (this._2k && this._6h()) {
                if (this._2k = !1, this[XM].invalidateData(), this[Rf][TE]) {
                    this[XM].data = this[Rf][TE];
                    var t = this._2g();
                    return this[XM][PM] = t.x + t.width / 2, this[XM].offsetY = t.y + t[eo] / 2, this[XM][tE] = {
                        width: t[no],
                        height: t[eo]
                    }, _s.prototype[HE].call(this)
                }
                this[XM][PM] = 0, this[XM].offsetY = 0;
                var i = this._8r(this[Rf][wE]);
                this._n0.clear(), i instanceof wj ? Le(this._n0, i.x, i.y, i[no], i[eo], i.rx, i.ry) : i instanceof hn ? Re(this._n0, i) : i instanceof rn && De(this._n0, i), this._n0._6v = !0, this[XM][oI]()
            }
            return _s[yr][HE][zh](this)
        }, _7m: function (t, i, n) {
            switch (t) {
            case pB[rC]:
                return new hn(0, 0, Math[xo](i, n) / 2);
            case pB[aC]:
                return new rn(0, 0, i, n);
            default:
                return new wj(-i / 2, -n / 2, i, n)
            }
        }, _2g: function () {
            return this._8r(null)
        }, _8r: function (t) {
            var i = this[Ao],
                n = i[Uo],
                e = i.minSize,
                s = lj[sC],
                h = lj[hC];
            if (e && (s = e[no], h = e[eo]), !i[qh]()) return this._7m(t, s, h);
            var r, a = this.$data._fr._jw;
            (t == pB.GROUP_TYPE_CIRCLE || t == pB[aC]) && (r = []);
            for (var o, f, _, c, u = new wj, d = 0, l = a[Gh]; l > d; d++) {
                var b = a[d];
                if (this.graph[oC](b)) {
                    var v = this[Yc][ma](b);
                    v && (o = v.$x + v._gu.x, f = v.$y + v._gu.y, _ = v._gu[no], c = v._gu[eo], u.addRect(o, f, _, c), r && (r.push({
                        x: o,
                        y: f
                    }), r.push({
                        x: o + _,
                        y: f
                    }), r.push({
                        x: o + _,
                        y: f + c
                    }), r[Kh]({
                        x: o,
                        y: f + c
                    })))
                }
            }
            n && u.grow(n);
            var g = this[Rf].$location;
            g ? g.invalidateFlag && (g[yE] = !1, g.x = u.cx, g.y = u.cy) : g = this[Rf][Um] = {
                x: u.cx,
                y: u.cy
            };
            var y, p = g.x,
                x = g.y;
            if (t == pB[rC]) {
                y = an(r), y.cx -= p, y.cy -= x;
                var m = Math[xo](s, h) / 2;
                return y.r < m && (y.cx += m - y.r, y.cy += m - y.r, y.r = m), y
            }
            return t == pB[aC] ? (y = on(r, u), y.cx -= p, y.cy -= x, y[no] < s && (y.cx += (s - y.width) / 2, y[no] = s), y.height < h && (y.cy += (h - y[eo]) / 2, y[eo] = h), y) : (y = u, u.width < s && (u[no] = s), u.height < h && (u[eo] = h), u[gg](-p, -x), y)
        }, _18: function (t, i, n) {
            if (!this._6h()) return B(this, ih, fC, arguments);
            var e = this._o1j.onBindingPropertyChange(this, t, i, n);
            return e = lF[BS](this, t, i, n) || e, e = yF[BS](this, t, i, n) || e, pF[BS](this, t, i, n) || e
        }
    }, N(ih, _s);
    var jF = {
        draw: function () {}
    };
    lj[yu] = _C, lj[vu] = cC;
    var BF = {
            position: lu,
            "text-align": Wc
        },
        $F = {
            padding: uC,
            transition: dC
        },
        FF = {
            position: lC,
            display: bC
        };
    vi(vC, "opacity:0.7;vertical-align:middle;"), vi(".Q-Graph-Nav img:hover,img.hover", gC), fj || (vi(yC, pC + Jj(xC) + mC), vi(EC, wC + Jj(xC) + TC)), sh[yr] = {
        _o1y: function (t, i) {
            return t._ib == i ? !1 : (t._ib = i, void(t[ha][cm] = i ? "block" : du))
        }, _3w: function (t, i) {
            var n = i / 2 - this._left._img[Eu] / 2 + ro;
            this._left._img[ha].top = n, this._right._img[ha].top = n, this._navPane[ha].width = t + ro, this._navPane[ha][eo] = i + ro
        }, _99: function (t, i, n, e) {
            this._o1y(this._top, t), this._o1y(this._left, i), this._o1y(this._o3ottom, n), this._o1y(this._right, e)
        }, _ig: function () {
            var t = this._navPane[wg];
            t && t[ib](this._navPane)
        }, _ka: function () {
            var t = this._dg._l0;
            if (t) {
                var i = t[Of];
                if (i.isEmpty()) return void this._99(!1, !1, !1, !1);
                var n = t[kC],
                    e = n.y > i.y + 1,
                    s = n.x > i.x + 1,
                    h = n[Wr] < i[Wr] - 1,
                    r = n.right < i[Xr] - 1;
                this._99(e, s, h, r)
            }
        }
    };
    var GF = 8;
    vi(MC, SC), vi(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + Jj(xC) + ": background-color 0.2s linear;"), vi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), vi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), vi(".Q-Graph-ScrollBar--V.Both", IC), vi(".Q-Graph-ScrollBar--H.Both", OC), fj || (vi(AC, pC + Jj(xC) + CC), vi(".Q-Graph:hover .Q-Graph-ScrollPane", wC + Jj(xC) + ":opacity 0.3s linear;")), hh[yr] = {
        _ig: function () {
            this._verticalDragSupport._ig(), this._horizontalDragSupport._ig(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._n2[wg] && this._n2.parentNode[ib](this._n2)
        }, _n2: null,
        _o3q: null,
        _8o: null,
        init: function (t) {
            var n = i.createElement(eu);
            n.className = PC, di(n, {
                width: bu,
                height: bu,
                position: lC
            });
            var e = i[uo](eu);
            e[tr] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i.createElement(eu);
            s.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n.appendChild(e), n[fu](s), t[fu](n), this._n2 = n, this._8o = s, this._o3q = e, s.isH = !0;
            var h = this,
                r = {
                    ondrag: function (t, i) {
                        var n = h._dg._l0;
                        if (n) {
                            var e = i[LC],
                                s = e ? t.dx : t.dy;
                            if (s && i[Sa]) {
                                var r = n.scale / i.scale;
                                e ? n.translate(-r * s, 0) : n.translate(0, -r * s), yB[hA](t)
                            }
                        }
                    }, enddrag: function (t, i) {
                        var n = h._dg._l0;
                        if (n && n[RC]) {
                            var e = i[LC],
                                s = e ? t.vx : t.vy;
                            if (Math[Vr](s) > .1) {
                                var r = n[Sa] / i.scale;
                                s *= r, e ? n._o2d(-s, 0) : n._o2d(0, -s)
                            }
                        }
                    }
                };
            this._verticalDragSupport = new Si(e, r), this._horizontalDragSupport = new Si(s, r)
        }, _ka: function () {
            var t = this._dg._l0;
            if (t) {
                var i = t[Of];
                if (i[Df]()) return this._50(!1), void this._4z(!1);
                var n = t.viewportBounds,
                    e = t.width,
                    s = t[eo],
                    h = t[Sa],
                    r = 1 / h,
                    a = n.x > i.x + r || n[Xr] < i.right - r,
                    o = n.y > i.y + r || n.bottom < i.bottom - r,
                    f = a && o;
                f ? (T(this._o3q, DC), T(this._8o, DC)) : (k(this._o3q, DC), k(this._8o, DC)), this._50(a, n, i, f ? e - GF : e), this._4z(o, n, i, f ? s - GF : s)
            }
        }, _50: function (t, i, n, e) {
            if (!t) return this._8o[ha][cm] = du, void(this._8o[Sa] = 0);
            var s = Math.min(i.x, n.x),
                h = Math.max(i[Xr], n.right),
                r = h - s,
                a = e / r;
            this._8o[Sa] = a, this._8o[ha].left = parseInt((i.x - s) * a) + ro, this._8o.style[Xr] = parseInt((h - i[Xr]) * a) + ro, this._8o.style.display = ""
        }, _4z: function (t, i, n, e) {
            if (!t) return this._o3q[ha][cm] = du, void(this._o3q.scale = 0);
            var s = Math.min(i.y, n.y),
                h = Math[xo](i[Wr], n[Wr]),
                r = h - s,
                a = e / r;
            this._o3q[Sa] = a, this._o3q.style[pa] = parseInt((i.y - s) * a) + ro, this._o3q.style.bottom = parseInt((h - i[Wr]) * a) + ro, this._o3q[ha][cm] = ""
        }
    }, rh[yr] = {
        shape: null,
        initialize: function () {
            B(this, rh, rO), this._o35(), EF.initBindingProperties(this)
        }, _o35: function () {
            this.image = new SF(this[Rf][hE]), this[FS](this.image, 0), this.body = this[Vg]
        }, invalidateShape: function () {
            this.image[oI](), this[$S]()
        }, _18: function (t, i, n) {
            var e = this._o1j[BS](this, t, i, n);
            return e = lF[BS](this, t, i, n) || e, EF.onBindingPropertyChange(this, t, i, n) || e
        }, doValidate: function () {
            this[hI] && (this[hI].$layoutByAnchorPoint = null != this._3b, this[hI].anchorPosition = this._3b);
            var t = this[Rf].$location,
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[tI] = !0), this.$x = i, this.$y = n, TF[yr].doValidate[zh](this) || e
        }
    }, N(rh, TF), K(rh[yr], {
        path: {
            get: function () {
                return this.data[hE]
            }
        },
        length: {
            get: function () {
                return this.data.length
            }
        }
    }), rh[yr][so] = function (t, i, n) {
        var e = this._ii(t, i),
            s = this[Ao],
            h = Sn(s[hE], e.x, e.y, n);
        h && (s[dO] = h)
    }, ah.prototype = {
        _mv: function () {
            this._k0[ha].visibility = mM
        }, _kd: function () {
            this._k0.style[NC] = uu
        }, clear: function () {
            this._9z[vc](), this._o17()
        }, contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._9z[Ad](t)
        }, addDrawable: function (t, i) {
            if (i) {
                var n = {
                    id: ++XN,
                    drawable: t,
                    scope: i
                };
                return this._9z.add(n), n
            }
            return t.id || (t.id = ++XN), this._9z[sr](t), t
        }, removeDrawable: function (t) {
            return t.id ? void this._9z[Vh](t) : this._9z.removeById(t)
        }, _9z: null,
        invalidate: function () {
            this._o17()
        }, _o17: function () {
            this._dg._6v || this._ji()
        }, _ji: function () {
            bi(this._k0, au, "");
            var t = this._dg._lk,
                i = this.g;
            i.setTransform(1, 0, 0, 1, 0, 0), i[uf](0, 0, this._k0.width, this._k0[eo]), i[Og](), this._dg._kl._o30(i);
            for (var n = this._9z._jw, e = 0, s = n[Gh]; s > e; e++) i.save(), i.beginPath(), this._h1(i, n[e], t), i.restore();
            i[Fy]()
        }, _h1: function (t, i, n) {
            return i instanceof Function ? void i(t, n) : void(i[jC] instanceof Function && i[mr] && i[jC].call(i[mr], t, n))
        }
    }, lj[BC] = KN ? !1 : !0;
    var zF = function (t) {
        this._l0 = t
    };
    lj.ANIMATION_MAXTIME = 600, lj.ANIMATION_TYPE = lB[$C], zF[yr] = {
        _l0: null,
        _o2: .001,
        _ez: null,
        _d9: function (t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        }, _i0: function (t, i) {
            t *= .6, i *= .6, t = this._d9(t), i = this._d9(i), this._me();
            var n = Math[mo](t * t + i * i);
            if (.01 > n) return !1;
            var e = Math[lf](lj.ANIMATION_MAXTIME, n / this._o2);
            this._speedX = t, this._speedY = i, this._o2X = t / e, this._o2Y = i / e, this._ez = new vB(this._66, this, e, lB[FC]), this._ez._l2()
        }, _66: function (t, i) {
            if (0 != t) {
                var n = this._speedX * i - .5 * this._o2X * i * i,
                    e = this._speedY * i - .5 * this._o2Y * i * i;
                this._speedX -= this._o2X * i, this._speedY -= this._o2Y * i, this._l0[Wo](n, e)
            }
        }, _me: function () {
            this._ez && this._ez._me()
        }, _j5: function (t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t,
                n = this._fromTY + (this._toTY - this._fromTY) * t,
                e = this._fromScale + (this._toScale - this._fromScale) * t;
            this._l0[yA](i, n, e)
        }, _l9: function (t, i, n, e) {
            var s = this._l0,
                h = s[Sa];
            if (0 >= n && (n = h), this._me(), t != s.tx || i != s.ty || n != h) {
                var r, a, o;
                e instanceof Object && (r = e.duration, a = e[GC], o = e.animationType);
                var f = s.tx,
                    _ = s.ty;
                if (!r) {
                    var c = xj(t, i, f, _);
                    if (r = c / 2, n != h) {
                        var u = n > h ? n / h : h / n;
                        r = Math[xo](r, 50 * u)
                    }
                }
                a = a || lj[zC], o = o || lj.ANIMATION_TYPE, r = Math[lf](a, r), this._fromTX = f, this._fromTY = _, this._fromScale = h, this._toTX = t, this._toTY = i, this._toScale = n, this._ez = new vB(this._j5, this, r, o), this._ez._l2()
            }
        }
    }, lj[qC] = 8, lj.INTERACTION_HANDLER_SIZE_DESKTOP = 4, lj[YC] = 30, lj[HC] = 20;
    var qF = Math.PI / 4;
    ch.prototype = {
        onElementRemoved: function (t, i) {
            this.element && (t == this[UC] || O(t) && x(t, this[UC])) && this[lc](i)
        }, onClear: function (t) {
            this[UC] && this.destroy(t)
        }, destroy: function () {
            delete this[UC], this[WC]()
        }, invalidate: function () {
            this[Cu][Om]()
        }, removeDrawable: function () {
            this._fuId && (this[Cu][WC](this._fuId), delete this._fuId, this[Om]())
        }, addDrawable: function () {
            this._fuId || (this._fuId = this[Cu][XC](this[VC], this).id, this[Om]())
        }, doDraw: function () {}, escapable: !0,
        onkeydown: function (t, i) {
            this.escapable && 27 == t[Ox] && (P(t), this[lc](i))
        }
    }, yB.DrawableInteraction = ch, uh[yr] = {
        defaultCursor: Ru,
        getInteractionInstances: function (t) {
            if (!this[Pu]) return null;
            for (var i = [], n = 0, e = this[Pu].length; e > n; n++) {
                var s = this[Pu][n];
                s instanceof Function ? i[Kh](new s(t)) : s instanceof Object && i[Kh](s)
            }
            return i
        }
    }, dh[yr] = {
        _ek: null,
        _k8: null,
        destroy: function () {
            B(this, dh, lc, arguments), delete this._k8, delete this._9w, delete this._ek
        }, doDraw: function (t) {
            var i = this.points;
            i && (i.forEach(function (i) {
                this[ZC](t, i)
            }, this), this.isClosePath && t[df](), this.styleDraw(t))
        }, styleDraw: function (t) {
            var i = lh(this[Yc].interactionProperties, this[KC](this[Yc]));
            i[Co] && (t[Co] = i[Co], i.lineCap && (t[Ty] = i[Ty]), i[ky] && (t.lineJoin = i[ky]), i[jf] && (t[jf] = i[jf], t[zf] = i[zf] || 0), t.strokeStyle = i[Ng], t[wy]()), i[Ag] && (t[Ag] = i[Ag], t[Io]())
        }, drawPoint: function (t, i, n) {
            if (n) return void t[D_](i.x, i.y);
            if (yB[fr](i)) {
                var e = i[0],
                    s = i[1];
                t[Ap](e.x, e.y, s.x, s.y)
            } else t.lineTo(i.x, i.y)
        }, setCurrentPoint: function (t) {
            this.currentPoint = t
        }, addPoint: function (t) {
            this._k8 || (this._k8 = [], this[XC]()), this._k8[Kh](t), this.invalidate()
        }
    }, K(dh[yr], {
        currentPoint: {
            get: function () {
                return this._9w
            }, set: function (t) {
                this._9w = t, this[Om]()
            }
        },
        prevPoint: {
            get: function () {
                return this._k8 && this._k8[Gh] ? this._k8[this._k8[Gh] - 1] : null
            }
        },
        points: {
            get: function () {
                return this._9w && this._k8 && this._k8[Gh] ? this._k8.concat(this._9w) : void 0
            }
        }
    }), N(dh, ch), yB[JC] = dh, bh[yr] = {
        destroy: function () {
            B(this, bh, lc, arguments), delete this._l2Time, delete this[QC]
        }, doDraw: function (t, i) {
            return this._k8 ? this._k8[Gh] <= 1 ? yh.prototype.doDraw[zh](this, t, i) : void B(this, bh, VC, arguments) : void 0
        }, ondblclick: function (t, i) {
            this[lc](i)
        }, finish: function (t, i, n) {
            if (this._l2Time && Date[Za]() - this._l2Time < 200) return void this[lc](i);
            var e;
            this._k8 && this._k8.length >= 2 && (this._k8[Qp](), e = new vj, l(this._k8, function (t) {
                if (yB.isArray(t)) {
                    var i = t[0],
                        n = t[1];
                    e.add(new JB(pB[dy], [i.x, i.y, n.x, n.y]))
                } else e[sr](new JB(pB[tP], [t.x, t.y]))
            }, this)), i[iP](this[QC], n, t, e), this[lc](i)
        }, onstart: function (t, i) {
            if (2 != t.button) {
                var n = t[xa]();
                if (this[QC]) {
                    var e = n instanceof aF && i[nP](n, this[QC]);
                    return e ? void this.finish(t, i, n) : void this[so](this[eP](t))
                }
                var s = n instanceof aF && i[sP](n);
                s && (this.start = n, this._l2Time = Date.now(), this[so](this.toLogicalPoint(t)))
            }
        }, onmousemove: function (t) {
            this[QC] && this[hP](this[eP](t))
        }, toLogicalPoint: function (t) {
            return this.graph[rP](t)
        }, startdrag: function (t) {
            this[QC] && (t[aP] = !0)
        }, ondrag: function (t) {
            this.start && this[hP](this[eP](t))
        }, enddrag: function (t, i) {
            if (this[QC]) {
                var n = t[xa](),
                    e = n instanceof aF && i[nP](n, this[QC]);
                e && this[oP](t, i, n)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Yc].getDefaultStyle(dF[fP]),
                strokeStyle: this[Yc][_P](dF[ZM]),
                lineDash: this[Yc].getDefaultStyle(dF[pk]),
                lineDashOffset: this.graph.getDefaultStyle(dF[mk]),
                lineCap: this.graph.getDefaultStyle(dF[zM]),
                lineJoin: this.graph.getDefaultStyle(dF[Cw])
            }
        }
    }, N(bh, dh), yB[cP] = bh, vh.prototype = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Yc][_P](dF[vw]),
                strokeStyle: this.graph[_P](dF[yw]),
                fillStyle: this[Yc][_P](dF[ww])
            }
        }, finish: function (t, i) {
            if (this._k8 && this._k8.length) {
                var n = this._k8,
                    e = 0,
                    s = 0,
                    h = 0;
                n[h_](function (t) {
                    return yB.isArray(t) ? void t[h_](function () {
                        e += t.x, s += t.y, h++
                    }) : (e += t.x, s += t.y, void h++)
                }), e /= h, s /= h;
                var r = [];
                n[h_](function (t, i) {
                    if (0 == i) return void r[Kh](new JB(pB[uy], [t.x - e, t.y - s]));
                    if (yB[fr](t)) {
                        var n = t[0],
                            h = t[1];
                        r[Kh](new JB(pB[dy], [n.x - e, n.y - s, h.x - e, h.y - s]))
                    } else r[Kh](new JB(pB[tP], [t.x - e, t.y - s]))
                }), this[uo](t, r, e, s), this.destroy(i)
            }
        }, startdrag: function (t) {
            t.responded = !0
        }, createElement: function (t, i, n, e) {
            return this.graph.createShapeByInteraction(t, i, n, e)
        }, onstart: function (t, i) {
            var n = i[rP](t);
            this._ek = n, this[so](n)
        }, onmousemove: function (t, i) {
            this._ek && (this[uP] = i[rP](t))
        }, ondblclick: function (t, i) {
            if (this._ek) {
                if (this._k8[Gh] < 3) return void this[lc](i);
                delete this._k8[this._k8.length - 1], this.finish(t, i)
            }
        }, isClosePath: !0
    }, N(vh, dh), yB[dP] = vh, gh[yr] = {
        isClosePath: !1,
        createElement: function (t, i, n, e) {
            return this[Yc][lP](t, i, n, e)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: RF[dF.SHAPE_STROKE],
                strokeStyle: RF[dF[yw]],
                lineDash: this[Yc][_P](dF[xw]),
                lineDashOffset: this[Yc].getDefaultStyle(dF[Ew]),
                lineCap: this.graph[_P](dF.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(dF.LINE_JOIN)
            }
        }
    }, N(gh, vh), yB[bP] = gh, yh[yr] = {
        destroy: function (t) {
            B(this, yh, lc, arguments), t[nC] = "", this.start = null
        }, doDraw: function (t) {
            if (this[QC] && this.currentPoint) {
                var i, n;
                this[Yc][WA] && (i = this[Yc][WA][Cm], n = this.graph.interactionProperties.edgeType), i = i || this[Yc].edgeUIClass || yB.EdgeUI, n = n || this.graph[Qc];
                var e = i.drawReferenceLine || yB[vP].drawReferenceLine,
                    s = this.graph[ma](this.start);
                s && s[Hc] && (s = s.bodyBounds[Wc], e(t, s, this[uP], n), this[gP](t))
            }
        }, canLinkFrom: function (t, i) {
            return t instanceof aF && i[sP](t)
        }, canLinkTo: function (t, i) {
            return t instanceof aF && i[nP](t, this[QC])
        }, startdrag: function (t, i) {
            var n = t[xa]();
            this[sP](n, i) && (t.responded = !0, this[QC] = n, i[nC] = Fb, this[XC]())
        }, ondrag: function (t, i) {
            this[QC] && (yB.stopEvent(t), this[uP] = i[rP](t), this.invalidate())
        }, enddrag: function (t, i) {
            if (this[QC]) {
                this[Om]();
                var n = t[xa]();
                this[nP](n, i) && i[iP](this[QC], n, t), this.destroy(i)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Yc].getDefaultStyle(dF[fP]),
                strokeStyle: this.graph.getDefaultStyle(dF[ZM]),
                lineDash: this[Yc][_P](dF.EDGE_LINE_DASH),
                lineDashOffset: this.graph[_P](dF[mk]),
                lineCap: this[Yc].getDefaultStyle(dF.LINE_CAP),
                lineJoin: this[Yc].getDefaultStyle(dF[Cw])
            }
        }
    }, N(yh, dh), yB[yP] = yh, lj[pP] = !1, Th[yr] = {
        html: null,
        createHTML: function () {
            var t = i[uo](xP);
            t.className = mP, t.style[sy] = lu, t[ha].textAlign = Wc, t[ha][vv] = EP, t.style[Uo] = wP, t.style[TP] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t[ha].display = du, t.style[vm] = uu;
            var n = this;
            return t.oninput = function (t) {
                n.onValueChange(t)
            }, t.onkeydown = function (t) {
                return 27 == t[Ox] ? void n[kP]() : void 0
            }, t.onkeypress = function (i) {
                if (13 == i[Ox] || 10 == i[Ox]) {
                    if (i[_r](), i[Ix] || i[qa] || i[Sx]) return Eh(t, po), void n[MP](i);
                    n[SP]()
                }
            }, i[hI][fu](t), t
        }, setText: function (t, i) {
            this[RA].value = t || "", i && (this[RA][ha][Bu] = i), wh(this.html), this[IP](this.html)
        }, onSizeChange: function (t) {
            var i = (t.offsetWidth, t[ju], mh(t));
            return t[ha][no] = i[no] + 30 + ro, t[ha].height = i[eo] + 10 + ro, i
        }, onValueChange: function (t) {
            var i = t[pu];
            this.onSizeChange(i), i[ha].left = i.x - i[Nu] / 2 + ro
        }, onClickOnWindow: function (t) {
            t[pu] != this[RA] && (lj[pP] ? this[SP]() : this[kP]())
        }, startEdit: function (i, n, e, s, h) {
            this[RA] || (this[RA] = this[OP]()), this[AP] || (this.stopEditWhenClickOnWindow = function (t) {
                this.onClickOnWindow(t)
            }.bind(this)), t.addEventListener(CP, this[AP], !0), this[_c] = h, this[RA].x = i, this.html.y = n, this.html[ha][cm] = bC, xh(this[RA], i, n), this[PP](e, s || 10), xh(this[RA], i, n)
        }, isEditing: function () {
            return du != this[RA][ha][cm]
        }, cancelEdit: function () {
            this[SP](!0)
        }, stopEdit: function (i) {
            if (this[LP]()) {
                t[RP](CP, this[AP]);
                var n = this[RA].value;
                if (!i && this[_c] && this[_c](n) === !1) return !1;
                this.html[ha][cm] = du, this[RA][Fu] = null, this[_c] = null
            }
        }, destroy: function () {
            this[RA] && i[hI][ib](this[RA])
        }
    }, yB.LabelEditor = Th;
    var YF = function (t) {
        this[Yc] = t
    };
    YF[yr] = {
        destroy: function (t) {
            t[DP] && (t[DP][lc](), delete t[DP])
        }, ondblclick: function (t, i) {
            var n = t.getData();
            if (!n) return i[uE] ? void i[NP]() : void(i[jP] && i[BP](lj[BC]));
            if (i[_O] && i[$P](n)) {
                var e = i[Kc](t);
                if (e instanceof MF && e[_O] !== !1) {
                    var s = i.labelEditor;
                    s || (i[DP] = s = new Th);
                    var h = e[wo]();
                    return h = i.toCanvas(h.x + h.width / 2, h.y + h[eo] / 2), h = ph(h.x, h.y, i[RA]), void i.startLabelEdit(n, e, s, h)
                }
            }
            var r = n instanceof _F,
                a = n instanceof rF && n.hasEdgeBundle();
            return n._4l && (Ii(t) || !r && !a) ? void(i[uE] = n) : r ? void(n[xE] = !n[xE]) : a ? void this[Yc][tA](n) : void 0
        }
    };
    var HF = function (t) {
        this.graph = t
    };
    HF[yr] = {
        onmousedown: function (t, i) {
            i[kA](!0)
        }, onkeydown: function (t, i) {
            if (i.editable) {
                var n = t.keyCode;
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t), void A(t);
                if (Ii(t)) {
                    if (67 == n);
                    else if (86 == n);
                    else if (90 == n);
                    else if (89 != n) return;
                    A(t)
                }
            }
        }
    }, yB[FP] = HF;
    var UF = function (t) {
        this[Yc] = t
    };
    UF[yr] = {
        onkeydown: function (i, n) {
            if (i[za] && 83 == i[Ox]) {
                var e = n[GP](n[Sa], n[kC]),
                    s = t.open(),
                    h = s.document;
                h[zP] = qP + e[no] + YP + e[eo];
                var r = h[uo](hu);
                r[ru] = e.data, h[hI].appendChild(r), A(i)
            }
        }
    };
    var WF = function (t) {
        this.graph = t
    };
    WF[yr] = {
        destroy: function () {
            delete this[HP], delete this[UP]
        }, _33: function (t) {
            var i = new vj;
            return t[Tu][h_](function (n) {
                t[AA](n) && t.isVisible(n) && i.add(n)
            }, this), i
        }, onstart: function (t, i) {
            this[UP] && this[lc](i)
        }, startdrag: function (t, i) {
            if (!t[aP]) {
                var n = t[xa]();
                if (!n || !i.isSelected(n) || !i[AA](n)) return void this[lc](i);
                t.responded = !0, this[UP] = n, this.draggingElements = this._33(i);
                var e = new Ah(i, Ah[WP], t, this[UP], this[HP][hb]);
                return i[XP](e) === !1 ? void this[lc](i) : void i.onInteractionEvent(e)
            }
        }, ondrag: function (t, i) {
            if (this[UP]) {
                P(t);
                var n = t.dx,
                    e = t.dy,
                    s = i[Sa];
                n /= s, e /= s;
                var h = new Ah(i, Ah[VP], t, this[UP], this[HP][hb]);
                i[ZP](this[HP].datas, n, e), i[bA](h)
            }
        }, enddrag: function (t, i) {
            if (this[UP]) {
                if (this.draggingElements && this[HP].length) {
                    if (t.shiftKey) {
                        var n, e = i[rP](t),
                            s = e.x,
                            h = e.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t[Ao];
                            if (!this[HP][Zc](i) && t.uiBounds[To](s - t.x, h - t.y) && t[Kc](s, h, 1)) {
                                if (i instanceof yB[HA]) {
                                    if (!i.enableSubNetwork) return;
                                    for (var e = this[HP][Gh]; e-- > 0;) {
                                        var r = this[HP][kr](e);
                                        if (r instanceof yB[oA] && r[KP](i)) return
                                    }
                                    return n = i, !1
                                }
                                return (i[Rm] || i._il() && i[xE]) && (n = i), !1
                            }
                        }, this), n && this[HP][h_](function (t) {
                            for (var i = t[x_]; i;) {
                                if (this[HP][Zc](i)) return;
                                i = i[x_]
                            }
                            t[x_] = n
                        }, this)
                    }
                    var r = new Ah(i, Ah.ELEMENT_MOVE_END, t, this[UP], this[HP][hb]);
                    i[bA](r)
                }
                this[lc](i)
            }
        }, onpinch: function (t, i) {
            this[UP] && this[wb](t, i)
        }, step: 1,
        onkeydown: function (t, i) {
            if (Ii(t)) {
                var n, e;
                if (37 == t[Ox] ? n = -1 : 39 == t[Ox] ? n = 1 : 38 == t.keyCode ? e = -1 : 40 == t[Ox] && (e = 1), n || e) {
                    var s = this._33(i)[hb];
                    if (0 != s[Gh]) {
                        A(t), n = n || 0, e = e || 0;
                        var h = this[JP] / i.scale,
                            r = new Ah(i, Ah[QP], t, null, s);
                        i[ZP](s, n * h, e * h), i.onInteractionEvent(r)
                    }
                }
            }
        }
    };
    var XF = function (t) {
        this[Yc] = t
    };
    XF.prototype = {
        onkeydown: function (t, i) {
            Ii(t) || (37 == t[Ox] ? (this._65(i, 1, 0), A(t)) : 39 == t.keyCode ? (this._65(i, -1, 0), A(t)) : 38 == t[Ox] ? (this._65(i, 0, 1), A(t)) : 40 == t[Ox] && (this._65(i, 0, -1), A(t)))
        }, _65: function (t, i, n) {
            t._o2d(i, n)
        }, onstart: function (t, i) {
            this._l2 && this[lc](i)
        }, _l2: !1,
        startdrag: function (t, i) {
            t.responded || (t[aP] = !0, this._l2 = !0, i[nC] = oB)
        }, ondrag: function (t, i) {
            this._l2 && (P(t), i[Wo](t.dx || 0, t.dy || 0))
        }, enddrag: function (t, i) {
            if (this._l2) {
                if (i.enableInertia !== !1) {
                    var n = t.vx,
                        e = t.vy;
                    (Math[Vr](n) > .1 || Math.abs(e) > .1) && i._o2d(n, e)
                }
                this[lc](i)
            }
        }, onpinch: function (t, i) {
            this._l2 = !0;
            var n = t[tL];
            if (n && 1 != n) {
                var e = i[Su](t[Wc]);
                i.zoomAt(n, e.x, e.y, !1)
            }
        }, destroy: function (t) {
            this._l2 = !1, t[nC] = null
        }
    }, kh.prototype = {
        _28: function (t) {
            this[UC] && t[Xo] == this[UC] && this.graph[pA](function () {
                this._ka()
            }, this)
        }, _9: function () {
            this._mbPropertyChangeListing || (this._mbPropertyChangeListing = !0, this[Yc][iL][Xl](this._28, this))
        }, _6: function () {
            this._mbPropertyChangeListing = !1, this[Yc][iL][Kg](this._28, this)
        }, onElementRemoved: function (t, i) {
            this[UC] && (t == this[UC] || O(t) && x(t, this.element)) && this[lc](i)
        }, onClear: function (t) {
            this.element && this.destroy(t)
        }, destroy: function () {
            this[Yc][nC] = null, this[UC] && delete this.element._editting, delete this[UC], delete this._o28, delete this._9w, delete this._o1anEdit, this._6w(), this._6()
        }, _6w: function () {
            this.drawLineId && (this[Cu].removeDrawable(this.drawLineId), delete this[nL], this[Cu][Om]())
        }, _o3t: function () {
            this[nL] && this.topCanvas[Zc](this[nL]) || (this[nL] = this[Cu].addDrawable(this.drawLine, this).id, this.topCanvas[Om]())
        }, _o28: null,
        _6a: function (t) {
            this._o28 = t, this.invalidate()
        }, _fh: function (t, i, n) {
            t[Cy](), i[eL] ? t[Pv](i.x - this[Zu] / n, i.y - this.handlerSize / n, this[Zu] / n * 2, this[Zu] / n * 2) : t[np](i.x, i.y, this[Zu] / n, 0, 2 * Math.PI, !1), t[Co] = 1 / n, t[jf] = [], t[Ng] = Rg, t[Ag] = "rgba(255, 255, 0, 0.8)", t[wy](), t[Io]()
        }, _fu: function (t, i, n, e) {
            e ? t[D_](i, n) : t.lineTo(i, n)
        }, drawLine: function (t, i) {
            if (this._o28 && this._o28[Gh]) {
                t[Og]();
                var n = this[UC] instanceof oF;
                n && (t.translate(this[UC].x, this.element.y), this[UC][No] && t[No](this[UC].rotate));
                var e, s = [];
                t[Cy](), this._o28[Gh], l(this._o28, function (i) {
                    if (i[Do] != pB.SEGMENT_CLOSE)
                        for (var n = 0, h = i[Lo]; n + 1 < h[Gh];) {
                            var r = h[n],
                                a = h[n + 1],
                                o = {
                                    x: r,
                                    y: a,
                                    isControlPoint: this._72(i, n)
                                };
                            s[Kh](o), this._fu(t, o.x, o.y, null == e), e = o, n += 2
                        }
                }, this), t[Co] = 1 / i, t[jf] = [2 / i, 3 / i], t[Ng] = sL, t[wy](), l(s, function (n) {
                    this._fh(t, n, i)
                }, this), t.restore()
            }
        }, invalidate: function () {
            this.topCanvas[Om]()
        }, _42: function (t) {
            if (this.element != t && (this[UC] && this.destroy(), t && this[$P](t))) {
                var i = this._5w(t, this[Yc]);
                i && (this[UC] = t, t._editting = !0, this._o1anEdit = !0, this._6a(i), this._9(), this._o3t())
            }
        }, _ka: function () {
            if (this[nL] && this[UC]) {
                var t = this._5w(this[UC], this[Yc]);
                return t ? void this._6a(t) : void this[lc](this[Yc])
            }
        }, _5w: function (t, i) {
            return i.isEditable(t) ? t.pathSegments || [] : void 0
        }, _ii: function (t, i) {
            t -= this[UC].x, i -= this[UC].y;
            var n = {
                x: t,
                y: i
            };
            return this[UC][No] && Bs(n, -this[UC][No]), n
        }, onclick: function (t, i) {
            if (i[_O] && t[Ix] && this.element) {
                var n = this._fw(t, i);
                if (n && n.isControlPoint) return void this.element[hL](n[rL]);
                if (this[UC] == t[xa]()) {
                    var e = i[rP](t),
                        s = i.getUI(this.element);
                    s[so](e.x, e.y, this.handlerSize || 2)
                }
            }
        }, isEditable: function (t) {
            return this[Yc][$P](t) && (t instanceof rF || t instanceof oF)
        }, ondblclick: function (t, i) {
            if (!i[_O]) return void(this[UC] && this.destroy(i));
            var n = t[xa]();
            return !n || n == this.element || n._editting ? void this[lc](i) : void this._42(n)
        }, onstart: function (t, i) {
            if (!i[_O]) return void(this[UC] && this[lc](i));
            if (!t[aP]) {
                if (this[UC] && this._fw(t, i)) return void(t[aP] = !0);
                var n = t[xa]();
                return n && i[aL](n) && n instanceof oF ? void(this.element && n != this.element && this[lc]()) : void this._42(n)
            }
        }, onrelease: function () {
            this[UC] && (this._o1anEdit = !0)
        }, _9w: null,
        _fw: function (t, i) {
            var n = i[rP](t);
            this[UC] instanceof oF && (n = this._ii(n.x, n.y));
            var e, s = i[Sa],
                h = this[Zu] / s,
                r = this._o28;
            return l(r, function (t, i) {
                for (var s = 0, a = t[Lo]; s + 1 < a.length;) {
                    var o = a[s],
                        f = a[s + 1],
                        _ = xj(n.x, n.y, o, f);
                    if (h > _) {
                        if (e = {
                            segment: t,
                            index: i,
                            pointIndex: s
                        }, this._72(t, s)) {
                            e[eL] = !0;
                            var c = r instanceof vj ? r[Sd](i + 1) : r[i + 1];
                            c && (e[oL] = c)
                        }
                        return !1
                    }
                    s += 2
                }
            }, this), e
        }, _72: function (t, i) {
            return i == t.points[Gh] - 2
        }, startdrag: function (t, i) {
            if (this.element && this._o1anEdit && (this._9w = this._fw(t, i), this._9w)) {
                this._6w(), t[aP] = !0;
                var n = new Ah(i, Ah.POINT_MOVE_START, t, this[UC]);
                n.point = this._9w, i.onInteractionEvent(n)
            }
        }, ondrag: function (t, i) {
            if (this[UC] && this._9w) {
                var n = t.dx,
                    e = t.dy,
                    s = i[Sa];
                if (n /= s, e /= s, this.element[No]) {
                    var h = {
                        x: n,
                        y: e
                    };
                    Bs(h, -this[UC].rotate), n = h.x, e = h.y
                }
                var r = this._9w[fL];
                if (!this._9w[eL] || r[Do] != XB && r[Do] != VB) r.points[this._9w.pointIndex] += n, r[Lo][this._9w[_L] + 1] += e;
                else {
                    for (var a = r[Lo][Gh] - 4; a < r[Lo].length;) r[Lo][a] += n, r[Lo][a + 1] += e, a += 2;
                    !this._9w[oL] || this._9w.nextSegment[Do] != VB && this._9w[oL][Do] != XB || (this._9w[oL].points[0] += n, this._9w[oL][Lo][1] += e)
                }
                this.element[Gm]();
                var o = new Ah(i, Ah[cL], t, this[UC]);
                o[uL] = this._9w, i[bA](o)
            }
        }, enddrag: function (t, i) {
            if (this.element && this._9w) {
                this._o3t(), this._ka();
                var n = new Ah(i, Ah[dL], t, this[UC]);
                n[uL] = this._9w, i[bA](n)
            }
        }, onmousemove: function (t, i) {
            this[UC] && (i[nC] = t[Ix] && (this._fw(t, i) || this[UC] == t[xa]()) ? "crosshair" : null)
        }
    }, lj.SELECTION_RECTANGLE_STROKE = 1, lj[lL] = V(3724541951), lj[bL] = V(1430753245);
    var VF = function (t) {
        this[Yc] = t, this.topCanvas = t._91._topCanvas
    };
    VF[yr] = {
        onstart: function (t, i) {
            this._l2 && this.destroy(i)
        }, startdrag: function (t, i) {
            t.responded || (t.responded = !0, this._l2 = i[rP](t), i.cursor = Fb, this._1cId = this.topCanvas[XC](this._1c, this).id)
        }, ondrag: function (t, i) {
            if (this._l2) {
                P(t), this._end = i.toLogical(t), this[Om]();
                var n = new Ah(i, Ah[vL], t, i[Tu]);
                i[bA](n)
            }
        }, enddrag: function (t, i) {
            if (this._l2) {
                this._fsTimer && (clearTimeout(this._fsTimer), this._fsTimer = null), this._fs(!0), this.destroy(i);
                var n = new Ah(i, Ah[gL], t, i[Tu]);
                i[bA](n)
            }
        }, onpinch: function (t, i) {
            this._l2 && this.enddrag(t, i)
        }, _1c: function (t, i) {
            t.strokeStyle = lj[lL], t[Ag] = lj[bL], t.lineWidth = lj[yL] / i;
            var n = this._l2.x,
                e = this._l2.y;
            t.rect(n, e, this._end.x - n, this._end.y - e), t[Io](), t[wy]()
        }, invalidate: function () {
            return this[yE] ? void this.topCanvas[Om]() : (this[yE] = !0, void(this._fsTimer = setTimeout(this._fs.bind(this), 100)))
        }, _fs: function (t) {
            if (this.invalidateFlag = !1, this._fsTimer = null, !this._l2 || QN && !t) return void this[Cu][Om]();
            var i = Math[lf](this._l2.x, this._end.x),
                n = Math[lf](this._l2.y, this._end.y),
                e = Math[Vr](this._l2.x - this._end.x),
                s = Math[Vr](this._l2.y - this._end.y);
            if (!e || !s) return void this.graph[Tu].clear();
            var h, r = [],
                a = this.graph[Sa];
            if (this[Yc][pL](function (t) {
                t._ib && this[Yc][Mu](t.$data) && (h = t._gu, (ai(i, n, e, s, h.x + t._x, h.y + t._y, h[no], h.height) || Nn(i, n, e, s, t, a)) && r.push(t.$data))
            }, this), this[Yc][Tu][Mr](r), this.topCanvas[Om](), !t) {
                var o = new Ah(this.graph, Ah[xL], null, this[Yc][Tu]);
                this[Yc][bA](o)
            }
        }, destroy: function (t) {
            this._l2 = null, t.cursor = null, this._1cId && (this.topCanvas[WC](this._1cId), delete this._1cId, this[Cu][Om]())
        }
    };
    var qF = Math.PI / 4;
    Mh[yr] = {
        _fe: !1,
        _ff: !1,
        _28: function (t) {
            this.element && t[Xo] == this[UC] && this.graph[pA](function () {
                this._9t()
            }, this)
        }, _9: function () {
            this._mbPropertyChangeListing || (this._mbPropertyChangeListing = !0, this[Yc][iL][Xl](this._28, this))
        }, _6: function () {
            this._mbPropertyChangeListing = !1, this.graph[iL][Kg](this._28, this)
        }, onElementRemoved: function (t, i) {
            this[UC] && (t == this[UC] || O(t) && x(t, this.element)) && this[lc](i)
        }, onClear: function (t) {
            this[UC] && this[lc](t)
        }, ondblclick: function (t, i) {
            this.element && this[lc](i)
        }, destroy: function (t) {
            t[nC] = null, delete this[UC], delete this._dm, delete this._o3ody, delete this._9w, delete this._o1anEdit, delete this._k8, delete this._rotatePoint, delete this._ff, delete this._fe, delete this._insets, this._6w(), this._6()
        }, _6w: function () {
            this._fuId && (this.topCanvas.removeDrawable(this._fuId), delete this._fuId, this[Cu].invalidate())
        }, _o3t: function () {
            this._fuId && this[Cu][Zc](this._fuId) || (this._fuId = this[Cu].addDrawable(this._fu, this).id, this.topCanvas[Om]())
        }, _dm: null,
        _k8: null,
        _8z: function (t) {
            this._dm = t;
            var i = this._dm.x,
                n = this._dm.y,
                e = this._dm[no],
                s = this._dm[eo],
                h = this.element instanceof _F && this.element.expanded;
            if (this._ff) {
                var r = [];
                h || (r[Kh]({
                    x: i,
                    y: n,
                    p: kj[tl],
                    cursor: mL,
                    rotate: 5 * qF
                }), r[Kh]({
                    x: i + e / 2,
                    y: n,
                    p: kj[IO],
                    cursor: EL,
                    rotate: 6 * qF
                }), r.push({
                    x: i + e,
                    y: n,
                    p: kj[wL],
                    cursor: Ku,
                    rotate: 7 * qF
                }), r.push({
                    x: i,
                    y: n + s / 2,
                    p: kj.LEFT_MIDDLE,
                    cursor: TL,
                    rotate: 4 * qF
                }), r[Kh]({
                    x: i,
                    y: n + s,
                    p: kj[il],
                    cursor: Ku,
                    rotate: 3 * qF
                })), r.push({
                    x: i + e,
                    y: n + s / 2,
                    p: kj[nl],
                    cursor: TL,
                    rotate: 0
                }), r.push({
                    x: i + e / 2,
                    y: n + s,
                    p: kj[rl],
                    cursor: EL,
                    rotate: 2 * qF
                }), r.push({
                    x: i + e,
                    y: n + s,
                    p: kj.RIGHT_BOTTOM,
                    cursor: mL,
                    rotate: qF
                }), this._k8 = r
            }
            this._rotatePoint = this._fe ? {
                x: i + e / 2,
                y: n,
                cursor: fB
            } : null, this._o17()
        }, _fh: function (t, i, n, e) {
            t.beginPath();
            var s = (this[Zu] - 1) / e;
            t.rect(i - s, n - s, 2 * s, 2 * s), t[Co] = 1 / e, t[jf] = [], t[Ng] = Rg, t[Ag] = "rgba(255, 255, 255, 0.8)", t[wy](), t.fill()
        }, _62: function (t, i, n, e, s, h) {
            s = s || this[Zu], h = h || kL, t.beginPath(), s /= e, t[np](i, n, s, 0, 2 * Math.PI, !1), t.lineWidth = 1 / e, t.lineDash = [], t.strokeStyle = Rg, t.fillStyle = h, t[wy](), t[Io]()
        }, _ii: function (t, i) {
            t -= this[UC].x, i -= this[UC].y;
            var n = {
                x: t,
                y: i
            };
            return this[UC][No] && Bs(n, -this[UC].rotate), n
        }, _fu: function (t, i) {
            if (this._dm) {
                if (t[Og](), t[Wo](this[UC].x, this[UC].y), this[UC][No] && t[No](this.element[No]), this._rotatePoint) {
                    this._62(t, 0, 0, i, 3, ML);
                    var n = this._rotatePoint.x,
                        e = this._rotatePoint.y - this._rotateHandleLength / i;
                    t.beginPath(), t[D_](n, this._rotatePoint.y), t[N_](n, e), t[Co] = 1 / i, t[Ng] = sL, t.stroke(), this._62(t, n, e, i)
                }
                if (this._k8) {
                    var s = this._dm.x,
                        h = this._dm.y,
                        r = this._dm[no],
                        a = this._dm[eo];
                    t[Cy](), t[Pv](s, h, r, a), t[Co] = 1 / i, t[jf] = [2 / i, 3 / i], t[Ng] = sL, t[wy](), l(this._k8, function (n) {
                        this._fh(t, n.x, n.y, i)
                    }, this)
                }
                t.restore()
            }
        }, _o17: function () {
            this[Cu][Om]()
        }, _42: function (t, i, n, e) {
            this[UC] = t, this._o3t();
            var s = i[ma](t);
            this._o3ody = s[hI], this._ff = n, this._fe = e, this._9t(), this._9()
        }, _9t: function () {
            if (this._fuId) {
                var t = Sh(this._o3ody, this._o3ody._k3),
                    i = Sh(this._o3ody, this._o3ody._89);
                this._insets = new Tj(t.y - i.y, t.x - i.x, i.bottom - t[Wr], i[Xr] - t[Xr]), this._8z(i)
            }
        }, _o3z: function (t, i) {
            return i[aL](t)
        }, _o3y: function (t, i) {
            return (!t._il() || !t[xE]) && i.isRotatable(t)
        }, _dk: function (t, i) {
            return t instanceof aF && i[$P](t)
        }, onstart: function (t, i) {
            if (!i[_O]) return void(this[UC] && this.destroy(i));
            if (!t[aP]) {
                var n = i[ma](t),
                    e = t[xa]();
                if (e != this[UC]) {
                    if (this.element) {
                        if (this._fw(t, i)) return void(t[aP] = !0);
                        this[lc](i)
                    }
                    if (e && !e._editting && this._dk(e, i)) {
                        var s = this._o3z(e, i, n),
                            h = this._o3y(e, i, n);
                        (s || h) && this._42(e, i, s, h)
                    }
                }
            }
        }, onrelease: function (t, i) {
            this[UC] && (this._o1anEdit = !0, this._o3t(), i[pA](function () {
                this._9t()
            }, this))
        }, _9w: null,
        _fw: function (t, i) {
            var n = i.toLogical(t);
            n = this._ii(n.x, n.y);
            var e = i[Sa],
                s = this.handlerSize / e;
            if (this._rotatePoint) {
                var h = this._rotatePoint.x,
                    r = this._rotatePoint.y - this._rotateHandleLength / e;
                if (xj(n.x, n.y, h, r) < s) return this._rotatePoint
            }
            if (this._k8 && this._k8.length) {
                var a;
                return l(this._k8, function (t) {
                    return xj(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        }, onmousemove: function (t, i) {
            if (this.element) {
                var n = this._fw(t, i);
                if (!n) return void(i.cursor = null);
                if (n != this._rotatePoint && this[UC][No]) {
                    var e = n[No] + this[UC].rotate;
                    return void(i.cursor = Ih(e))
                }
                i[nC] = n[nC]
            }
        }, startdrag: function (t, i) {
            if (this[UC] && (this._6w(), this._o1anEdit && (this._9w = this._fw(t, i), this._9w))) {
                if (t.responded = !0, this._9w == this._rotatePoint) return this._9w[QC] = i.toLogical(t), void(this._9w[No] = this[UC][No] || 0);
                var n = new Ah(i, Ah.RESIZE_START, t, this.element);
                n[uL] = this._9w, i[bA](n)
            }
        }, _6q: function (t, i, n, e, s, h) {
            var r = this._dm,
                a = r.x,
                o = r.y,
                f = r[no],
                _ = r[eo];
            if (h) {
                var c = e != f;
                c ? s = e * _ / f : e = s * f / _
            }
            var u = t[hE]._hg,
                d = e / f,
                l = s / _,
                b = -a * d + i,
                v = -o * l + n;
            u[h_](function (t) {
                if (t.type != pB[by]) {
                    var e = t[Lo];
                    if (e && e.length)
                        for (var s = 0, h = e.length; h > s; s += 2) {
                            var r = e[s],
                                f = e[s + 1];
                            e[s] = (r - a) * d + i - b, e[s + 1] = (f - o) * l + n - v
                        }
                }
            }), this._dm[Mr](i - b, n - v, e, s), t[OA](t.x + b, t.y + v), t.firePathChange()
        }, _o20: function (t, i, n, e, s) {
            this._dm.set(i, n, e, s), t[EE] = {
                width: e,
                height: s
            }
        }, _4o: function (t, i, n, e, s) {
            if (this.element instanceof _F) return this._o20(this.element, t, i, n, e, s);
            if (this[UC] instanceof oF) return this._6q(this[UC], t, i, n, e, s);
            var h = this._o3ody instanceof MF;
            if (!h && s) {
                var r = this._dm,
                    a = this._o3ody.originalBounds,
                    o = n != r[no];
                o ? e = n * a[eo] / a[no] : n = e * a[no] / a[eo]
            }
            var f = this[UC][iE],
                _ = new Ej(n - this._insets[ya] - this._insets[Xr], e - this._insets[pa] - this._insets.bottom);
            if (_[no] < 1 && (n = this._insets[ya] + this._insets.right + 1, _[no] = 1), _[eo] < 1 && (e = this._insets[pa] + this._insets[Wr] + 1, _[eo] = 1), h ? this[UC][Mm](dF[RM], _) : this.element[tE] = _, f) {
                var c = oi(f, n, e),
                    u = c.x + t - (this._o3ody[PM] || 0),
                    d = c.y + i - (this._o3ody.offsetY || 0);
                if (this._dm[Mr](t - u, i - d, n, e), this[UC].rotate) {
                    var c = Bs({
                        x: u,
                        y: d
                    }, this[UC][No]);
                    u = c.x, d = c.y
                }
                this.element.x += u, this.element.y += d
            } else {
                var u = this._dm.x * n / this._dm[no] - t,
                    d = this._dm.y * e / this._dm[eo] - i;
                if (this._dm[Mr](t + u, i + d, n, e), this[UC][No]) {
                    var c = Bs({
                        x: u,
                        y: d
                    }, this[UC][No]);
                    u = c.x, d = c.y
                }
                this[UC].x -= u, this[UC].y -= d
            }
        }, ondrag: function (t, i) {
            if (this[UC] && this._9w)
                if (this._9w != this._rotatePoint) {
                    var n = t.dx,
                        e = t.dy,
                        s = i[Sa];
                    if (n /= s, e /= s, this[UC][No]) {
                        var h = {
                            x: n,
                            y: e
                        };
                        Bs(h, -this[UC].rotate), n = h.x, e = h.y
                    }
                    var r = this._9w.p,
                        a = this._dm,
                        o = a.x,
                        f = a.y,
                        _ = a.width,
                        c = a[eo];
                    r[Wd] == Mj ? n >= _ ? (o += _, _ = n - _ || 1) : (o += n, _ -= n) : r[Wd] == Ij && (-n >= _ ? (_ = -n - _ || 1, o -= _) : _ += n), r.verticalPosition == Oj ? e >= c ? (f += c, c = e - c || 1) : (f += e, c -= e) : r[Zr] == Cj && (-e >= c ? (c = -e - c || 1, f -= c) : c += e), this._4o(o, f, _, c, t[Sx]);
                    var u = new Ah(i, Ah[SL], t, this[UC]);
                    u[uL] = this._9w, i[bA](u)
                } else {
                    var h = i[rP](t),
                        d = gn(h.x, h.y, this[UC].x, this[UC].y, this._9w[QC].x, this._9w[QC].y, !0);
                    d += this._9w.rotate || 0, t[Sx] && (d = Math.round(d / Math.PI * 4) * Math.PI / 4), this[UC][No] = d % (2 * Math.PI);
                    var u = new Ah(i, Ah[IL], t, this[UC])
                }
        }, enddrag: function (t, i) {
            if (this.element && this._9w && this._9w != this._rotatePoint) {
                var n = new Ah(i, Ah[OL], t, this[UC]);
                n[uL] = this._9w, i[bA](n)
            }
        }
    }, yB[AL] = Mh;
    var ZF = function (t) {
        this[Yc] = t
    };
    ZF[yr] = {
        onstart: function (t, i) {
            if (!t[aP]) {
                !fj && KN && i[kA](!0);
                var n = t[xa]();
                if (n && !i[Mu](n) && (n = null), n && Ii(t)) {
                    i[IA](n);
                    var e = new Ah(i, Ah[CL], t, i[Tu]);
                    return void i[bA](e)
                }
                if (!n || !i[Tu][PL](n)) {
                    n ? (i.setSelection(n), i[LL](n)) : i[RL](null);
                    var e = new Ah(i, Ah.SELECT, t, i[Tu]);
                    i[bA](e)
                }
            }
        }, onkeydown: function (t, i) {
            return 27 == t[Ox] ? void i.unSelectAll() : void(Ii(t) && 65 == t[Ox] && (i[DL](), A(t)))
        }
    };
    var KF = 0,
        JF = 15;
    lj.TOOLTIP_DURATION = 3e3, lj[NL] = 1e3;
    var QF = jL;
    vi($r + QF, {
        "background-color": BL,
        overflow: uu,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: Bg,
        "pointer-events": du,
        border: $L,
        padding: FL,
        display: bC,
        position: lu
    });
    var tG = function (t) {
        this[Yc] = t, this._o3x = {}
    };
    tG.prototype = {
        _o3x: null,
        _o3w: null,
        _o3v: function () {
            delete this._initTimer, this._o3x[Ao] && (this._o3w || (this._o3w = i[uo](eu), this._o3w.className = QF), this._o3w[wg] || i.body[fu](this._o3w), this._dj(this[Yc], this._o3x[Ao]))
        }, _dj: function (t, i) {
            var n = t[GL](i),
                e = Wu == i[zL];
            n && !e && (n = n[Qr](/\n/g, qL)), e ? this._o3w[YL] = n || "" : this._o3w.innerHTML = n || "";
            var s = this._o3x.evt[ba] + KF,
                h = this._o3x[HL].pageY + JF;
            Oh(this._o3w, s, h), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._deleteTimer = setTimeout(yB[UL](this, this._94), t[WL] || lj[XL])
        }, _94: function () {
            delete this._deleteTimer, this._o3w && this._o3w[wg] && this._o3w.parentNode.removeChild(this._o3w), delete this._o3w, this._o3x = {}
        }, _fk: function (t, i, n, e) {
            if (!this._o3w) {
                var s = e.tooltipDelay;
                return isNaN(s) && (s = lj[NL]), void(this._initTimer = setTimeout(yB[UL](this, this._o3v), s))
            }
            this._dj(e, t)
        }, onstart: function (t, i) {
            this[lc](i)
        }, onmousemove: function (t, i) {
            if (i[VL]) {
                var n = t[xa]();
                if (this._o3x[HL] = t, this._o3x[Ao] != n && (this._o3x.data = n, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), n)) {
                    var e = i[GL](n);
                    e && this._fk(n, e, t, i)
                }
            }
        }, destroy: function () {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._o3w && this._94(), this._o3x = {}
        }
    };
    var iG = function (t) {
        this[Yc] = t
    };
    iG[yr] = {
        onmousewheel: function (t, i) {
            if (i[ZL] !== !1) {
                if (i._scaling) return void A(t);
                i._scaling = !0, m(function () {
                    delete i._scaling
                }, this, 100), fh(i, t, t[Pa] > 0) !== !1 && A(t)
            }
        }
    };
    var nG = function (t) {
        this.graph = t
    };
    nG[yr] = {
        onclick: function (t, i) {
            fh(i, t, !Ii(t))
        }
    };
    var eG = function (t) {
        this[Yc] = t
    };
    eG[yr] = {
        onclick: function (t, i) {
            fh(i, t, Ii(t))
        }
    }, N(Ah, Rj), Ah[WP] = KL, Ah.ELEMENT_MOVING = JL, Ah.ELEMENT_MOVE_END = QL, Ah.ELEMENT_CREATED = tR, Ah[BA] = iR, Ah[nR] = eR, Ah.POINT_MOVING = sR, Ah[dL] = hR, Ah[rR] = aR, Ah[SL] = oR, Ah.RESIZE_END = fR, Ah.ROTATING = _R, Ah.ROTATE_END = cR, Ah[uR] = dR, Ah[CL] = Xu, Ah[vL] = lR, Ah[xL] = bR, Ah[gL] = vR, Ah[gR] = yR, Ch[yr] = {
        _9q: function (t) {
            if (this._interactionSupport) switch (t[td]) {
            case Yj.KIND_REMOVE:
                this._interactionSupport._52(t.data);
                break;
            case Yj[Rl]:
                this._interactionSupport._7b(t[Ao])
            }
        }, destroy: function () {
            delete this._l0, delete this._5a, this._interactionSupport && (this._interactionSupport._ig(), delete this._interactionSupport)
        }, _l0: null,
        _5a: null,
        defaultMode: null,
        _gi: function (t, i, n) {
            this._5a[t] = new uh(i, n), t == this.currentMode && this._interactionSupport._79(i)
        }, addCustomInteraction: function (t) {
            this._interactionSupport._$b(t)
        }, _nl: function (t) {
            var i = this._5a[t];
            return i ? i : sG[t]
        }
    }, K(Ch.prototype, {
        defaultCursor: {
            get: function () {
                return this[pR] ? this.currentInteractionMode[Lu] : void 0
            }
        },
        currentMode: {
            get: function () {
                return this._o1urrentMode
            }, set: function (t) {
                this._o1urrentMode != t && (this._o1urrentMode, this._interactionSupport || (this._interactionSupport = new sB(this._l0)), this._o1urrentMode = t, this.currentInteractionMode = this._nl(this._o1urrentMode), this._l0[nC] = this[Lu], this._interactionSupport._79(this.currentInteractionMode ? this[pR].getInteractionInstances(this._l0) : []))
            }
        }
    });
    var sG = {};
    lj[xR] = function (t, i, n) {
        var e = new uh(i, n);
        sG[t] = e
    }, pB[mR] = ER, pB[nd] = Ru, pB.INTERACTION_MODE_SELECTION = Hu, pB[wR] = TR, pB[kR] = MR, pB[SR] = IR, pB[OR] = AR, pB.INTERACTION_MODE_CREATE_SHAPE = CR, pB.INTERACTION_MODE_CREATE_LINE = PR, lj[xR](pB[mR], [ZF, XF, iG, UF, YF, tG]), lj.registerInteractions(pB[SR], [HF, yh, ZF, XF, iG, UF, tG]), lj[xR](pB[OR], [HF, bh, ZF, XF, iG, UF, tG]), lj[xR](pB[LR], [HF, vh, ZF, XF, iG, UF, tG]), lj.registerInteractions(pB[RR], [gh, ZF, XF, iG, UF, tG]), lj[xR](pB[nd], [HF, Mh, kh, ZF, WF, XF, iG, UF, YF, tG]), lj[xR](pB[DR], [HF, Mh, kh, ZF, WF, VF, XF, iG, UF, YF, tG]), lj.registerInteractions(pB.INTERACTION_MODE_ZOOMIN, [iG, UF, nG], hB), lj[xR](pB[kR], [iG, UF, eG], rB), yB.PanInteraction = XF, yB[NR] = ZF, yB[jR] = WF, yB[BR] = iG, yB[$R] = YF, yB[FR] = UF, yB.TooltipInteraction = tG, yB.RectangleSelectionInteraction = VF, yB[GR] = kh;
    var hG = function (t) {
        this[Yc] = t
    };
    yB[zR] = hG, hG[yr] = {
        getNodeBounds: function (t) {
            return this.graph[qR](t)
        }, isLayoutable: function (t) {
            return t[YR] !== !1
        }, getLayoutResult: function () {}, updateLocations: function (t, i, n, e, s) {
            if (i === !0) {
                if (this.animate || (this[HR] = new PG), n && (this[HR].duration = n), e && (this[HR].animationType = e), this[HR][UR] = t, s) {
                    var h = s,
                        r = this;
                    s = function () {
                        h[zh](r, t)
                    }
                }
                return void this.animate.start(s)
            }
            for (var a in t) {
                var o = t[a],
                    f = o.node;
                f.setLocation(o.x, o.y)
            }
            s && s.call(this, t)
        }, _g0: function (t) {
            var i, n, e, s = null;
            t && (i = t.byAnimate, s = t[_c], n = t[WR], e = t[XR]);
            var h = this.getLayoutResult(t);
            return h ? (this[VR](h, i, n, e, s), h) : !1
        }, doLayout: function (t, i) {
            return this.graph && i !== !0 ? void this.graph[pA](function () {
                this._g0(t)
            }, this) : this._g0(t)
        }
    };
    var rG = 11,
        aG = 12,
        oG = 13,
        fG = 21,
        _G = 22,
        cG = 23;
    pB[ZR] = rG, pB[KR] = aG, pB[JR] = oG, pB[QR] = fG, pB[tD] = _G, pB[iD] = cG;
    var uG = nD,
        dG = eD,
        lG = sD,
        bG = hD;
    pB[rD] = uG, pB[aD] = lG, pB[oD] = bG, pB[fD] = dG, yB[_D] = Ph;
    var vG = function (t) {
        this[Yc] = t
    };
    vG[yr] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: fG,
        layoutType: uG,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function (t) {
            if (this[Yc]._91._o3d) {
                var i = this[Yc].getUI(t);
                if (i) return i._gu
            }
            return t[Vg] && t[Vg][Of] ? {
                width: t.image[Of][no],
                height: t[Vg][Of][eo]
            } : this[cD]
        }, _o1w: function (t, i) {
            if (this[uD](t)) {
                var n = this.getNodeSize(t),
                    e = t.id,
                    s = (t[dD], i ? this._o2b[i.id] : this._o2t);
                this._o2b[e] = new gG(t.hGap || this[lD], t.vGap || this.vGap, t.layoutType || this.layoutType, t[dD], s, t, n[no], n.height)
            }
        }, _o2b: null,
        _o2t: null,
        _lv: function () {
            this._o2b = null, this._o2t = null
        }, getLayoutResult: function (t) {
            var i, n, e, s, h = this[Yc];
            t instanceof Object && (i = t.x, n = t.y, h = t.root || this[Yc], e = t[Of], s = t[bD]), this._o2b = {}, this._o2t = new gG, this._o2t._nf(this.hGap, this[vD], this[dD], this[gD]);
            var r = {},
                a = DG(h, this._o1w, this, !1, s);
            return a && (this._o2t._g0(i || 0, n || 0, r), e && e[Mr](this._o2t.x, this._o2t.y, this._o2t.width, this._o2t.height)), this._lv(), r
        }, doLayout: function (t, i) {
            if (M(t)) {
                var n = t,
                    e = 0;
                M(i) && (e = i), t = {
                    x: n,
                    y: e
                }, i = !0
            }
            return B(this, vG, yD, [t, i])
        }
    }, N(vG, hG);
    var gG = function (t, i, n, e, s, h, r, a) {
        this._mo = t || 0, this._mq = i || 0, this[gD] = n, this.parentChildrenDirection = e, this.parentBounds = s, s && s._hv(this), this.node = h, this._fa = r, this._o1s = a
    };
    gG.prototype = {
        _nf: function (t, i, n, e) {
            this._mo = t, this._mq = i, this[dD] = n, this.layoutType = e
        }, _8g: function () {
            this._fr = []
        }, _mo: 0,
        _mq: 0,
        _fr: null,
        _fa: 0,
        _o1s: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _hv: function (t) {
            this._fr || (this._fr = []), this._fr[Kh](t)
        }, _o1t: function (t, i, n, e) {
            var s = new wj;
            return n(this._fr, function (n) {
                n._45(t, i), s.add(n), e ? t += n[no] + this._mo : i += n[eo] + this._mq
            }, this), s
        }, _8f: function (t, i, n, e, s) {
            var h, r = e ? this._mo : this._mq,
                a = e ? this._mq : this._mo,
                o = e ? "width" : eo,
                f = e ? "height" : no,
                _ = e ? "_fa" : pD,
                c = e ? "_o1s" : xD,
                u = e ? "hostDX" : mD,
                d = e ? "hostDY" : ED,
                b = new wj,
                v = 0,
                g = 0,
                y = [],
                p = 0,
                x = 0;
            n(this._fr, function (n) {
                var s = x >= g;
                n._inheritedParentChildrenDirection = s ? e ? aG : _G : e ? rG : fG, n._45(t, i), s ? (y.push(n), v = Math[xo](v, n[o]), g += n[f] + a) : (h || (h = []), h[Kh](n), p = Math[xo](p, n[o]), x += n[f] + a)
            }, this), g -= a, x -= a;
            var m = Math[xo](g, x),
                E = r,
                w = 0;
            this[wD] && (s && (E += this[_] + r, m > this[c] ? this[d] = (m - this[c]) / 2 : w = (this[c] - m) / 2), this[u] = v + E / 2 - this[_] / 2);
            var T = 0,
                k = w;
            return l(y, function (t) {
                e ? t[gg](v - t[o], k) : t[gg](k, v - t[o]), k += a + t[f], b.add(t)
            }, this), h ? (k = w, T = v + E, l(h, function (t) {
                e ? t.offset(T, k) : t[gg](k, T), k += a + t[f], b[sr](t)
            }, this), b) : b
        }, offset: function (t, i) {
            this.x += t, this.y += i, this.nodeX += t, this[TD] += i, this._84(t, i)
        }, _o2v: function (t, i) {
            return 2 * this.cx - t - i - t
        }, _o2x: function (t, i) {
            return 2 * this.cy - t - i - t
        }, _mt: function (t) {
            if (this._fr && 0 != this._fr[Gh]) {
                if (t) return this.node && (this.nodeX += this._o2v(this[kD], this._fa)), void l(this._fr, function (t) {
                    t[gg](this._o2v(t.x, t[no]), 0)
                }, this);
                this.node && (this[TD] += this._o2x(this[TD], this._o1s)), l(this._fr, function (t) {
                    t.offset(0, this._o2x(t.y, t.height))
                }, this)
            }
        }, _84: function (t, i) {
            this._fr && l(this._fr, function (n) {
                n.offset(t, i)
            }, this)
        }, _45: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._fr && 0 != this._fr.length ? void this._20(this.x, this.y, this[gD]) : void(this[wD] && (this.width = this._fa, this[eo] = this._o1s, this.nodeX = this.x, this.nodeY = this.y))
        }, _82: function (t) {
            this[wD] && (t[this[wD].id] = {
                node: this.node,
                x: this[kD] + this._fa / 2,
                y: this.nodeY + this._o1s / 2,
                left: this.nodeX,
                top: this[TD],
                width: this._fa,
                height: this._o1s
            }), this._fr && l(this._fr, function (i) {
                i._82(t)
            }, this)
        }, _g0: function (t, i, n) {
            this._45(t, i), this._82(n)
        }, _20: function (t, i, e) {
            var s, h = t,
                r = i;
            !this[dD] && this[MD] && (this[dD] = this._inheritedParentChildrenDirection || this[MD][dD]);
            var a = this[dD],
                o = Ph(a);
            if (this[wD]) {
                s = a == oG || a == cG;
                var f = Lh(a);
                s || (o ? t += this._fa + this._mo : i += this._o1s + this._mq)
            }
            var _, c = this[wD] && this[wD][SD] ? v : l;
            if (e == dG) _ = this._8f(t, i, c, !o, s);
            else {
                var u;
                u = e == uG ? !o : e == lG, _ = this._o1t(t, i, c, u, s)
            }
            var d = 0,
                b = 0;
            _ && !_[Df]() && (d = _[no], b = _[eo], this.add(_)), this.node && (this.nodeX = h, this[TD] = r, this[ED] !== n || this[mD] !== n ? (this[kD] += this.hostDX || 0, this.nodeY += this.hostDY || 0) : o ? this.nodeY += b / 2 - this._o1s / 2 : this.nodeX += d / 2 - this._fa / 2, this[Yd](this[kD], this[TD], this._fa, this._o1s), f && this._mt(o))
        }, node: null,
        uiBounds: null
    }, N(gG, wj), Dh[yr] = {
        layoutDatas: null,
        isMovable: function (t) {
            return !this[hd][t.id]
        }, _7e: !1,
        _3y: function () {
            this._7e = !0, this[Yc]._1s[Xl](this._9h, this), this[Yc]._1m[Xl](this._2w, this)
        }, _22: function () {
            this._7e = !1, this[Yc]._1s.removeListener(this._9h, this), this.graph._1m[Kg](this._2w, this)
        }, invalidateFlag: !0,
        invalidateLayoutDatas: function () {
            this[yE] = !0
        }, resetLayoutDatas: function () {
            return this.invalidateFlag = !1, this[ID] = Rh.call(this)
        }, _2w: function (t) {
            Ah[WP] == t[td] ? (this[hd] = {}, t[hb][h_](function (t) {
                this[hd][t.id] = t
            }, this)) : Ah[QP] == t[td] && (this[hd] = {})
        }, _9h: function () {
            this[OD]()
        }, isRunning: function () {
            return this[AD] && this[AD]._dv()
        }, getLayoutResult: function () {
            this.stop(), this[CD]();
            for (var t = this[PD](this.layoutDatas.nodeCount || 0, this[ID].edgeCount || 0), i = 0; t > i && this[JP](!1) !== !1; i++);
            var n = this[ID][LD];
            return this[RD](), n
        }, _n3: function () {
            return !1
        }, step: function (t) {
            if (t === !1) return this._n3(this[DD]);
            (this[yE] || !this[ID]) && this.resetLayoutDatas();
            var i = this._n3(t),
                n = this.layoutDatas[LD];
            for (var e in n) {
                var s = n[e],
                    h = s[wD];
                this.isMovable(h) ? h[OA](s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0)
            }
            return i
        }, onstop: function () {
            delete this[ID]
        }, start: function (t) {
            if (this[ND]()) return !1;
            this._7e || this._3y(), this._kqr || (this._kqr = z(this, function (t) {
                return this[JP](t)
            })), this.invalidateLayoutDatas(), this.timer = new bB(this._kqr);
            var i = this;
            return this.timer._l2(function () {
                i.onstop(), t && t()
            }), !0
        }, stop: function () {
            this[AD] && (this[AD]._me(), this[RD]())
        }, getMaxIterations: function (t) {
            return Math[lf](1e3, 3 * t + 10)
        }, minEnergyFunction: function (t, i) {
            return 10 + Math[o_](t + i, 1.4)
        }, resetGraph: function () {
            this._7e || this._3y(), this.resetLayoutDatas()
        }, destroy: function () {
            this[jD](), this._22()
        }
    }, N(Dh, hG);
    var yG = function (t, i, n, e) {
        this.graph = t, M(i) && (this[al] = i), M(n) && (this.gap = n), M(e) && (this[BD] = e)
    };
    yB[$D] = yG;
    var pG = FD,
        xG = GD,
        mG = zD,
        EG = qD;
    pB[YD] = pG, pB[HD] = xG, pB[UD] = mG, pB[WD] = EG, yG[yr] = {
        angleSpacing: pG,
        radiusMode: EG,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _o2b: null,
        _o2t: null,
        _lv: function () {
            this._o2b = null, this._o2t = null
        }, getLayoutResult: function (t) {
            var i, n = 0,
                e = 0,
                s = this[Yc];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t.root || this[Yc], i = t[Of]), this._o2b = {}, this._o2t = new kG(this);
            var h = {},
                r = NG(s, this._o1w, this);
            return r && (this._o2t._fr && 1 == this._o2t._fr[Gh] && (this._o2t = this._o2t._fr[0]), this._o2t._ex(!0), this._o2t._60(n, e, this[BD], h, i)), this._lv(), h
        }, _o1w: function (t, i) {
            if (this[uD](t)) {
                var n = i ? this._o2b[i.id] : this._o2t;
                this._o2b[t.id] = new kG(this, t, n)
            }
        }, defaultSize: 40,
        getRadius: function () {
            return this[al]
        }, getNodeSize: function (t) {
            if (this.graph._91._o3d) {
                var i = this[Yc][ma](t);
                if (i) return (i._gu.width + i._gu[eo]) / 2
            }
            return this.defaultSize
        }, getGap: function () {
            return this[XD]
        }, _36: function (t, i, n) {
            return this[VD](t, i, n) + this[ZD](t, i, n)
        }
    };
    var wG = function (t) {
            var i, n = this._fr[Gh],
                e = 0,
                s = 0;
            if (l(this._fr, function (t) {
                var n = t._ex();
                1 > n && (n = 1), s += n, n > e && (e = n, i = t)
            }, this), n > 1) {
                var h = 0,
                    r = {},
                    a = s / n / 3;
                s = 0, l(this._fr, function (t) {
                    var i = t._mh;
                    a > i && (i = a), r[t.id] = i, s += i
                }, this);
                var o = MG / s;
                l(this._fr, function (i, n) {
                    var e = r[i.id],
                        s = e * o;
                    0 === n && (h = t ? -s / 2 : -s), i._lb = h + s / 2, i._lc = s, h += s
                }, this)
            }
            return [e, i._lc]
        },
        TG = function (t) {
            var i = this._8q,
                n = 2 * Math.PI / i,
                e = 0,
                s = t ? 0 : i > 1 ? -n / 2 : 0;
            return l(this._fr, function (t) {
                t._lb = s % MG, s += n, t._lc = n;
                var i = t._ex();
                i > e && (e = i)
            }, this), [e, n]
        },
        kG = function (t, i, n) {
            this.layouter = t, i && (this._mg = i, this.id = i.id), n && (n._hv(this), n._mj = !1, this._l8 = n._l8 + 1)
        },
        MG = 2 * Math.PI;
    kG.prototype = {
        _lc: 0,
        _lb: 0,
        _kx: 0,
        _e8: 0,
        _dh: 0,
        _l8: 0,
        _mj: !0,
        _mh: 0,
        _i1: 0,
        _fr: null,
        _mg: null,
        _hv: function (t) {
            this._fr || (this._fr = []), this._fr[Kh](t), t[x_] = this
        }, _i2: function (t) {
            if (this._lb = (this._lb + t) % MG, this._fr) {
                var i = this._fr.length;
                if (1 == i) return void this._fr[0]._i2(this._lb);
                t = this._lb + Math.PI, l(this._fr, function (i) {
                    i._i2(t)
                }, this)
            }
        }, _8q: 0,
        _7p: function (t) {
            return this._mg && (this._i1 = this[KD]._36(this._mg, this._l8, this._mj) / 2), this._fr ? (this._i1, this._8q = this._fr[Gh], this._8q <= 2 || this[KD].angleSpacing == xG ? TG.call(this, t) : wG.call(this, t)) : null
        }, _ex: function (t) {
            var i = this._7p(t);
            if (!i) return this._mh = this._i1;
            var n = i[0],
                e = i[1],
                s = this[KD][JD](this._mg, this._l8);
            if (s < this._i1 && (s = this._i1), this._e8 = s, this._i1 + n > s && (s = this._i1 + n), n && this._8q > 1 && e < Math.PI) {
                var h = n / Math.sin(e / 2);
                h > s && (s = h)
            }
            return this._kx = s, this._mh = s + n, this._mg && this._fr && this[KD][QD] == EG && l(this._fr, function (t) {
                var i = t._mh;
                1 == t._8q && (i /= 2);
                var n = this._i1 + i,
                    e = t._lc;
                if (e && e < Math.PI) {
                    var s = Math[Ur](e / 2),
                        h = i / s;
                    h > i && (i = h)
                }
                n > i && (i = n), t._dh = i
            }, this), (!this._mg || t) && this._i2(0), this._mh
        }, _60: function (t, i, n, e, s) {
            if (this._mg && (e[this._mg.id] = {
                x: t,
                y: i,
                node: this._mg
            }, s && s[Yd](t - this._i1 / 2, i - this._i1 / 2, this._i1, this._i1)), this._fr) {
                if (!this._mg && 1 == this._fr[Gh]) return void this._fr[0]._60(t, i, n, e, s);
                n = n || 0;
                var h = this._kx,
                    r = this._e8;
                l(this._fr, function (a) {
                    var o = h;
                    a._dh && (o = Math.max(r, a._dh));
                    var f = a._lb + n,
                        _ = t + o * Math.cos(f),
                        c = i + o * Math.sin(f);
                    a._60(_, c, n, e, s)
                }, this)
            }
        }
    }, N(yG, hG);
    var SG = function () {
        j(this, SG, arguments)
    };
    N(SG, Nh);
    var IG = function (t, i) {
        this[tN] = t, this.node2 = i, t == i ? (this[T_] = !0, this._m7 = t._lw) : this._m7 = new vj, this._93 = [], this._hy = lj.EDGE_BUNDLE_EXPANDED
    };
    lj[iN] = !0, IG.prototype = {
        node1: null,
        node2: null,
        _m7: null,
        _hy: lj[iN],
        _93: null,
        _hw: null,
        agentEdge: null,
        _o2o: function (t, i, n) {
            this._m7[h_](function (e) {
                return n && e[L_] != n && e[w_] != n ? void 0 : t.call(i, e)
            })
        }, _5y: 0,
        _6b: 0,
        _j3: function (t, i) {
            return this._m7[sr](t) === !1 ? !1 : (i == this.node1 ? this._5y++ : this._6b++, this._o3d ? void this._1b(t) : void(this._o3d = !0))
        }, _o15: function (t, i) {
            return this._m7[Vh](t) === !1 ? !1 : (i == this[tN] ? this._5y-- : this._6b--, this._1b(t), void this._m7.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0, t.__4q = !0
            }, this))
        }, _1b: function (t) {
            this._o17BindableFlag = !0, this._6v = !0, t._edgeBundleInvalidateFlag = !0, t.__4q = !0
        }, _o17: function () {
            this._6v || (this._6v = !0, this._m7[h_](function (t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        }, isEmpty: function () {
            return this._m7.isEmpty()
        }, isPositiveOrder: function (t) {
            return this[tN] == t[L_] || this[tN] == t.fromAgent
        }, canBind: function (t) {
            return t && this._6v && this._fs(t), this._m7.length > 1 && this._93[Gh] > 1
        }, _j1: function (t) {
            return this._93[Jh](t)
        }, getYOffset: function (t) {
            return this._hw[t.id]
        }, _4h: function (t) {
            if (!this[nN]()) return void(this._hw = {});
            var i = {},
                n = this._93[Gh];
            if (!(2 > n)) {
                var e = 0,
                    s = this._93[0];
                i[s.id] = 0;
                for (var h = 1; n > h; h++) {
                    s = this._93[h];
                    var r = t[Mc](s, dF.EDGE_BUNDLE_GAP) || RF[dF[Mk]];
                    e += r, i[s.id] = e
                }
                if (!this[T_])
                    for (var a = e / 2, h = 0; n > h; h++) s = this._93[h], i[s.id] -= a;
                this._hw = i
            }
        }, _o2r: function (t) {
            return this._hy == t ? !1 : (this._hy = t, this._o17(), !0)
        }, reverseExpanded: function () {
            return this._o2r(!this._hy)
        }, _1q: function () {
            this._o17BindableFlag = !1, this._93[Gh] = 0;
            var t;
            this._m7[h_](function (i) {
                if (i.isBundleEnabled()) {
                    if (!this[eN](i)) return t || (t = []), void t.push(i);
                    this._93[Kh](i)
                }
            }, this), t && (this._93 = t[Wh](this._93))
        }, _fn: function (t) {
            return t == this.agentEdge || !this.canBind() || this._hy
        }, _fs: function (t) {
            this._6v = !1, this._m7[h_](function (t) {
                t._edgeBundleInvalidateFlag = !1
            }), this._o17BindableFlag && this._1q();
            var i = this._hy,
                n = this.canBind(),
                e = !n || i;
            l(this._93, function (t) {
                t._12 = !0, t._ibInBundle = e, e && (t.__4q = !0)
            }, this), e ? this._o2e(null, t) : (this._o2e(this._93[0], t), this[QA]._ibInBundle = !0, this[QA].__4q = !0), e && this._4h(t)
        }, _o2e: function (t, i) {
            if (t != this[QA]) {
                var n = this[QA];
                return this[QA] = t, i && i._59(new Dj(this, QA, t, n)), !0
            }
        }
    }, K(IG[yr], {
        bindableEdges: {
            get: function () {
                return this._93
            }
        },
        edges: {
            get: function () {
                return this._m7._jw
            }
        },
        length: {
            get: function () {
                return this._m7 ? this._m7[Gh] : 1
            }
        },
        expanded: {
            get: function () {
                return this._hy
            }, set: function (t) {
                return this._hy == t ? !1 : (this._hy = t, void this._o17())
            }
        }
    });
    var OG = function () {
            function t(t, i) {
                this[wD] = t, this[hI] = i
            }

            function i() {
                this[sN] = [], this[hN] = 0
            }
            var n = -1e6,
                e = .8;
            i[yr] = {
                isEmpty: function () {
                    return 0 === this[hN]
                }, push: function (i, n) {
                    var e = this[sN][this[hN]];
                    e ? (e.node = i, e[hI] = n) : this[sN][this[hN]] = new t(i, n), ++this[hN]
                }, pop: function () {
                    return this[hN] > 0 ? this[sN][--this[hN]] : void 0
                }, reset: function () {
                    this[hN] = 0
                }
            };
            var s = [],
                h = new i,
                r = function () {
                    this.body = null, this[rN] = [], this[aN] = 0, this.massX = 0, this[oN] = 0, this[ya] = 0, this[pa] = 0, this[Wr] = 0, this[Xr] = 0, this[fN] = !1
                },
                a = [],
                o = 0,
                f = function () {
                    var t;
                    return a[o] ? (t = a[o], t.quads[0] = null, t[rN][1] = null, t[rN][2] = null, t[rN][3] = null, t[hI] = null, t[aN] = t.massX = t[oN] = 0, t[ya] = t[Xr] = t[pa] = t.bottom = 0, t[fN] = !1) : (t = new r, a[o] = t), ++o, t
                },
                _ = f(),
                c = function (t, i) {
                    var n = Math.abs(t.x - i.x),
                        e = Math.abs(t.y - i.y);
                    return 1e-8 > n && 1e-8 > e
                },
                u = function (t) {
                    for (h[_N](), h[Kh](_, t); !h[Df]();) {
                        var i = h.pop(),
                            n = i.node,
                            e = i[hI];
                        if (n[fN]) {
                            var s = e.x,
                                r = e.y;
                            n[aN] = n[aN] + e[aN], n[cN] = n[cN] + e.mass * s, n.massY = n[oN] + e[aN] * r;
                            var a = 0,
                                o = n[ya],
                                u = (n[Xr] + o) / 2,
                                d = n[pa],
                                l = (n[Wr] + d) / 2;
                            if (s > u) {
                                a += 1;
                                var b = o;
                                o = u, u += u - b
                            }
                            if (r > l) {
                                a += 2;
                                var v = d;
                                d = l, l += l - v
                            }
                            var g = n.quads[a];
                            g || (g = f(), g[ya] = o, g[pa] = d, g[Xr] = u, g[Wr] = l, n[rN][a] = g), h[Kh](g, e)
                        } else if (n[hI]) {
                            var y = n.body;
                            if (n.body = null, n[fN] = !0, c(y, e)) {
                                if (n[Xr] - n[ya] < 1e-8) return;
                                do {
                                    var p = Math[br](),
                                        x = (n.right - n[ya]) * p,
                                        m = (n.bottom - n.top) * p;
                                    y.x = n.left + x, y.y = n[pa] + m
                                } while (c(y, e))
                            }
                            h.push(n, y), h[Kh](n, e)
                        } else n[hI] = e
                    }
                },
                d = function (t) {
                    var i, h, r, a, o = s,
                        f = 1,
                        c = 0,
                        u = 1;
                    for (o[0] = _; f;) {
                        var d = o[c],
                            l = d[hI];
                        f -= 1, c += 1, l && l !== t ? (h = l.x - t.x, r = l.y - t.y, a = Math.sqrt(h * h + r * r), 0 === a && (h = (Math.random() - .5) / 50, r = (Math[br]() - .5) / 50, a = Math[mo](h * h + r * r)), i = n * l[aN] * t[aN] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (h = d[cN] / d[aN] - t.x, r = d.massY / d.mass - t.y, a = Math[mo](h * h + r * r), 0 === a && (h = (Math[br]() - .5) / 50, r = (Math[br]() - .5) / 50, a = Math[mo](h * h + r * r)), (d[Xr] - d[ya]) / a < e ? (i = n * d.mass * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d[rN][0] && (o[u] = d[rN][0], f += 1, u += 1), d[rN][1] && (o[u] = d.quads[1], f += 1, u += 1), d[rN][2] && (o[u] = d[rN][2], f += 1, u += 1), d[rN][3] && (o[u] = d[rN][3], f += 1, u += 1)))
                    }
                },
                l = function (t, i) {
                    n = i;
                    var e, s = Number[Hd],
                        h = Number[Hd],
                        r = Number[uN],
                        a = Number.MIN_VALUE,
                        c = t,
                        d = c[Gh];
                    for (e = d; e--;) {
                        var l = c[e].x,
                            b = c[e].y;
                        s > l && (s = l), l > r && (r = l), h > b && (h = b), b > a && (a = b)
                    }
                    var v = r - s,
                        g = a - h;
                    for (v > g ? a = h + v : r = s + g, o = 0, _ = f(), _[ya] = s, _.right = r, _[pa] = h, _[Wr] = a, e = d; e--;) u(c[e], _)
                };
            return {
                init: l,
                update: d
            }
        },
        AG = function (t) {
            t.fx -= t.x * this[dN], t.fy -= t.y * this[dN]
        },
        CG = function (t) {
            if (0 != t.k) {
                var i = this._d7,
                    n = t.from,
                    e = t.to,
                    s = e.x - n.x,
                    h = e.y - n.y,
                    r = s * s + h * h,
                    a = Math[mo](r) || .1,
                    o = (a - i) * t.k * this[lN];
                o /= a;
                var f = o * s,
                    _ = o * h;
                e.fx -= f, e.fy -= _, n.fx += f, n.fy += _
            }
        };
    Nh[yr] = {
        appendNodeInfo: function (t, i) {
            i[aN] = t[bN] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        }, appendEdgeInfo: function (t, i) {
            i.k = t.layoutElasticity || 1
        }, setMass: function (t, i) {
            t[bN] = i, this[ID] && this.layoutDatas[LD] && (t = this.layoutDatas.nodes[t.id], t && (t[aN] = i))
        }, setElasticity: function (t, i) {
            t.layoutElasticity = i, this[ID] && this[ID][vN] && (t = this.layoutDatas[vN][t.id], t && (t.k = i))
        }, _d7: 50,
        _iw: .5,
        timeStep: .15,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _n8: 1e3,
        _ju: function (t) {
            return this._n8 + .3 * (t - this._n8)
        }, _n3: function (t, i) {
            var n = (Date.now(), this.layoutDatas[LD]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[br]() - .5, s.y += Math[br]() - .5), AG[zh](this, s)
            }
            var h = this[ID][gN];
            if (h)
                for (var e in h) {
                    var r = h[e],
                        a = r[Yh],
                        o = 0,
                        f = 0;
                    a[h_](function (t) {
                        o += t.x, f += t.y
                    }), o /= a[Gh], f /= a.length;
                    var _ = 10 * this.attractive;
                    a.forEach(function (t) {
                        t.fx -= (t.x - o) * _, t.fy -= (t.y - f) * _
                    })
                }
            var c = this._nbodyForce;
            c || (c = this._nbodyForce = OG()), c[wu](this[ID][yN], -this[pN] * this[pN] * this[pN]);
            for (var e in n) c[xN](n[e]);
            if (this[lN]) {
                var u = this[ID][vN];
                for (var e in u) CG[zh](this, u[e])
            }
            return this._n9(t)
        }, _n9: function (t) {
            var i = this[ID].minEnergy,
                n = (this[ID].currentEnergy, this.layoutDatas.nodes),
                t = this[DD],
                e = 0,
                s = this._iw;
            for (var h in n) {
                var r = n[h],
                    a = r.fx / r[aN],
                    o = r.fy / r[aN],
                    f = r.vx += a * t,
                    _ = r.vy += o * t;
                r.x += f * t, r.y += _ * t, i > e && (e += 2 * (f * f + _ * _)), r.fx = 0, r.fy = 0, r.vx *= s, r.vy *= s
            }
            return this[ID].currentEnergy = e, e >= i
        }
    }, N(Nh, Dh), yB[mN] = Nh;
    var PG = function (t) {
        this.locations = t
    };
    PG.prototype = {
        oldLocations: null,
        _eg: null,
        duration: 700,
        animationType: lB.easeOutStrong,
        _7c: function (t) {
            if (this._eg = t, this[EN] = {}, t)
                for (var i in t) {
                    var n = t[i],
                        e = n[wD];
                    this[EN][i] = {
                        x: e.x,
                        y: e.y
                    }
                }
        }, setLocation: function (t, i, n) {
            t[OA](i, n)
        }, forEach: function (t, i) {
            for (var n in this[UR]) {
                var e = this[EN][n],
                    s = this.locations[n];
                t[zh](i, e, s)
            }
        }, _ku: function (t) {
            this[h_](function (i, n) {
                var e = n.node,
                    s = i.x + (n.x - i.x) * t,
                    h = i.y + (n.y - i.y) * t;
                this.setLocation(e, s, h)
            }, this)
        }, stop: function () {
            this._o2nimate && this._o2nimate._me()
        }, start: function (t) {
            this._o2nimate ? (this._o2nimate._me(), this._o2nimate._ie = this[WR], this._o2nimate._ezType = this[XR], this._o2nimate._onfinish = this._onfinish) : this._o2nimate = new vB(this._ku, this, this[WR], this[XR]), this._o2nimate._l2(t)
        }
    }, K(PG[yr], {
        locations: {
            get: function () {
                return this._eg
            }, set: function (t) {
                this._eg != t && this._7c(t)
            }
        }
    });
    var LG = function (t) {
            var i = new vj;
            return t.forEach(function (t) {
                t instanceof aF && (t[wN]() || i[sr](t._dp || t))
            }), i
        },
        RG = function (t, i, n, e, s, h) {
            if (i instanceof Hj) return t(i, n, e, s, h), i;
            if (i instanceof NF) {
                var r = new vj;
                i._l0Model.forEach(function (t) {
                    return i[oC](t) ? t._il() && t._hy && t[qh]() ? void(t[Um] && (t[Um][yE] = !1)) : void r[sr](t) : void 0
                }), i = r
            }
            var i = LG(i);
            return l(i, function (i) {
                t(i, n, e, s, h)
            }), i
        },
        DG = function (t, i, n, e, s) {
            return RG(jG, t, i, n, e, s)
        },
        NG = function (t, i, n, e, s) {
            return RG(BG, t, i, n, e, s)
        };
    is.prototype[TN] = function (t, i, n, e) {
        DG(this, t, i, n, e)
    }, is[yr][kN] = function (t, i, n, e) {
        NG(this, t, i, n, e)
    };
    var jG = function (t, i, n, e, s) {
            function h(t, i, n, e, s, r, a, o) {
                t._marker = r, e || i.call(n, t, o, a), jh(t, function (o) {
                    h(o, i, n, e, s, r, a + 1, t)
                }, o, s, r), e && i[zh](n, t, o, a)
            }
            h(t, i, n, e, s, {}, 0)
        },
        BG = function (t, i, n, e, s) {
            function h(t, i, n, e, s, r, a) {
                var o, f = t[Gh];
                t[h_](function (t, h) {
                    var _ = t.v;
                    _._marker = r, e || i[zh](n, _, t._from, a, h, f), jh(_, function (t) {
                        o || (o = []), t._marker = r, o[Kh]({
                            v: t,
                            _from: _
                        })
                    }, _, s, r)
                }), o && h(o, i, n, e, s, r, a + 1), e && t[h_](function (t, e) {
                    i[zh](n, t.v, t._from, a, e, f)
                })
            }
            h([{
                v: t
            }], i, n, e, s, {}, 0)
        };
    yB.toColor = V, yB[zr] = ti, yB[Ko] = ni, yB[qr] = ii, yB[MN] = KN, yB.isOpera = ZN, yB.isWebkit = tj, yB[SN] = ij, yB.isFirefox = nj, yB.isSafari = sj, yB[IN] = ej, yB.isMac = hj, yB.DefaultStyles = RF, yB[ON] = lj, yB.Styles = dF, yB[AN] = pB, yB[CN] = e$, yB[PN] = NF, yB.BaseUI = cF, yB[LN] = TF, yB.NodeUI = _s, yB[vP] = fs, yB[RN] = MF, yB.ImageUI = kF, yB[DN] = fF, yB[NN] = t$, yB[YI] = jB, yB[jN] = Ah, yB.Element = hF, yB.Node = aF, yB.Edge = rF, yB[BN] = is, yB[$N] = IG, yB[FN] = vG, yB[zo] = GN;
    var $G = zN;
    return yB[Cx] = qN, yB.about = YN, yB[Rx] = "Copyright © 2015 Qunee.com", yB.css = di, yB[HN] = jF, ti = function () {}, yB[UN] = WN, yB
}(window, document);