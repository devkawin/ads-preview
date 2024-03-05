if (document.all && !window.setTimeout.isPolyfill) {
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(e, t) {
        var n = Array.prototype.slice.call(arguments, 2);
        return __nativeST__(e instanceof Function ? function() {
            e.apply(null, n)
        }
        : e, t)
    }
    ,
    window.setTimeout.isPolyfill = !0
}
var utils = {
    hasClass: function(e, t) {
        return !!(null === e.getAttribute("class") ? "" : e.getAttribute("class")).match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
    },
    addClass: function(e, t) {
        var n = (e.getAttribute("class") ? e.getAttribute("class") + " " : "") + t;
        utils.hasClass(e, t) || e.setAttribute("class", n)
    },
    removeClass: function(e, t) {
        if (utils.hasClass(e, t)) {
            var n = new RegExp(t + "(\\s|$)");
            e.setAttribute("class", e.getAttribute("class").replace(n, ""))
        }
    },
    setUserAgent: function() {
        var e = document.documentElement;
        e.setAttribute("data-useragent", navigator.userAgent)
    },
    hexToRGB: function(e, t) {
        var n = parseInt(e.slice(1, 3), 16)
          , o = parseInt(e.slice(3, 5), 16)
          , i = parseInt(e.slice(5, 7), 16);
        return t ? "rgba(" + n + ", " + o + ", " + i + ", " + t + ")" : "rgb(" + n + ", " + o + ", " + i + ")"
    },
    getUrlVars: function() {
        {
            var e = {};
            window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, n, o) {
                e[n] = o
            })
        }
        return e
    }
}
  , ola = {
    is_custom_roll_over_active: !1,
    custom_roll_over_count: 2,
    ui_ola: document.getElementById("ola"),
    enable_rollover: function() {
        ola.is_custom_roll_over_active = !0
    },
    bugs_animation_trigger: function() {},
    bugs_animation_preset: function() {},
    bugs_animation_rollover_1: function() {},
    bugs_animation_rollover_2: function() {},
    init: function() {
        window.onload = function() {
            ola.init_enabler()
        }
    },
    init_enabler: function() {
        ola.init_dynamic_content()
    },
    init_dynamic_content: function(e) {
        var t = "{{ copy1 }}"
          , n = "{{ copy2 }}"
          , o = "{{ cta }}";
        document.getElementById("copy-1").getElementsByTagName("p")[0].innerHTML = t,
        document.getElementById("copy-1").getElementsByTagName("p")[0].innerHTML = ola.insertLineBreak(document.getElementById("copy-1").getElementsByTagName("p")[0]),
        document.getElementById("copy-1").getElementsByTagName("p")[0].innerHTML = ola.wrapLines(document.getElementById("copy-1").getElementsByTagName("p")[0]),
        document.getElementById("copy-2").getElementsByTagName("p")[0].innerHTML = n,
        document.getElementById("copy-2").getElementsByTagName("p")[0].innerHTML = ola.insertLineBreak(document.getElementById("copy-2").getElementsByTagName("p")[0]),
        document.getElementById("copy-2").getElementsByTagName("p")[0].innerHTML = ola.wrapLines(document.getElementById("copy-2").getElementsByTagName("p")[0]),
        document.getElementById("cta").getElementsByTagName("p")[0].innerHTML = o,
        document.getElementById("cta").getElementsByTagName("p")[0].innerHTML = ola.insertLineBreak(document.getElementById("cta").getElementsByTagName("p")[0]),
        ola.fitFontSize(document.getElementById("copy")),
        ola.init_content()
    },
    insertLineBreak: function(e) {
        var t = e.innerHTML.replace(/\n/g, "<br>");
        return t
    },
    wrapLines: function(e) {
        for (var t = e.innerHTML.split("<br>"), n = "", o = 0; o < t.length; o++)
            n += '<span class="flex-break">' + t[o] + "</span>";
        return n
    },
    countLines: function(e) {
        for (var t = 0, n = [].concat(e.innerHTML.split("<span")); n.length; )
            0 != n.pop().length && t++;
        return t
    },
    fitFontSize: function(e, t) {
        ola.fitFontSizeRecursionLimit = ola.fitFontSizeRecursionLimit || 55;
        var n = window.getComputedStyle(e, null)
          , o = parseInt(n.getPropertyValue("font-size"))
          , i = ola.calculateVisibleHeight(e)
          , a = parseInt(n.getPropertyValue("height"))
          , l = o - 1
          , t = t || 55;
        i - t > a && ola.fitFontSizeRecursionLimit-- > 1 && (e.style.fontSize = String(l) + "px",
        ola.fitFontSize(e, t))
    },
    calculateVisibleHeight: function(e) {
        var t = e.style.overflow
          , n = e.style.height;
        return e.style.overflow = "visible",
        e.style.height = "auto",
        visibleHeight = e.offsetHeight,
        e.style.overflow = t,
        e.style.height = n,
        visibleHeight
    },
    replace_time: function(e, t) {
        return String(e).replace("{time}", t)
    },
    init_content: function() {
        ola.init_clicktag(),
        init()
    },
    init_clicktag: function() {
        ola.ui_ola.addEventListener("click", function() {
            window.open(window.clickTag)
        }, !1)
    },
    custom_rollover: function() {
        if (ola.is_custom_roll_over_active)
            switch (ola.custom_roll_over_count--) {
            case 2:
                ola.bugs_animation_rollover_1();
                break;
            case 1:
                ola.bugs_animation_rollover_2(),
                utils.removeClass(ola.ui_ola, "show-hover"),
                utils.addClass(ola.ui_ola, "show-end")
            }
    },
    animate: function() {
        ola.animate_frame_1()
    },
    animate_frame_1: function() {
        ola.bugs_animation_preset(),
        utils.addClass(ola.ui_ola, "frame-1"),
        utils.addClass(ola.ui_ola, "show-hover");
        for (var e = 3200, t = ola.countLines(document.getElementById("copy-1").getElementsByTagName("p")[0]), n = 0; t > n; n++)
            setTimeout(function(e) {
                utils.addClass(document.getElementById("copy-1").getElementsByTagName("span")[e], "animate-in")
            }, e, [n]),
            e += 200;
        e += 500;
        for (var o = ola.countLines(document.getElementById("copy-2").getElementsByTagName("p")[0]), n = 0; o > n; n++)
            setTimeout(function(e) {
                utils.addClass(document.getElementById("copy-2").getElementsByTagName("span")[e], "animate-in-2")
            }, e, [n]),
            e += 200;
        setTimeout(function() {
            ola.bugs_animation_trigger()
        }, 100),
        document.getElementById("ola").addEventListener("mouseenter", function() {
            ola.custom_rollover()
        })
    }
};
ola.init();
