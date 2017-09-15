!function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        });
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
}([ function(e, t, n) {
    "use strict";
    !function(e) {
        e("html").addClass("js"), e.fn.coverride = function(t) {
            var n = (/iPad|iPhone|iPod/.test(navigator.platform) || /iPad|iPhone|iPod/.test(navigator.userAgent), 
            e.extend({}, e.fn.coverride.defaults, t));
            return this.each(function() {
                var t = e(this);
                t[0].currentTime > 0 ? t.fadeTo(n.fadeIn, 1, function() {
                    t.addClass("is-playing");
                }) : t.on("playing", function() {
                    t.fadeTo(n.fadeIn, 1, function() {
                        t.addClass("is-playing");
                    });
                }), e.fn.coverride.fitVideo(t), e(window).resize(function() {
                    e.fn.coverride.fitVideo(t);
                });
            });
        }, e.fn.coverride.defaults = {
            fadeIn: 300
        }, e.fn.coverride.fitVideo = function(e) {
            var t = e.parent();
            t.css({
                position: "relative",
                overflow: "hidden"
            }), e.css({
                "min-width": "auto",
                "min-height": "auto",
                width: "100%",
                height: "auto",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)"
            }), t.height() > e.height() && e.css({
                height: "100%",
                width: "auto"
            });
        }, e(document).ready(function() {
            e("[data-coverride]").each(function() {
                var t = {};
                e(this).data("coverride-fade-in") && (t.fadeIn = e(this).data("coverride-fade-in")), 
                e(this).coverride(t);
            });
        });
    }(jQuery);
} ]);