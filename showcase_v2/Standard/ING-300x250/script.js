(window.Creative = function () {}),
    (Creative.timelineStart = function () {
        window.dispatchEvent(new CustomEvent("lemonpi.dcp/timeline-start"));
    }),
    (Creative.timelineEnd = function () {
        window.dispatchEvent(new CustomEvent("lemonpi.dcp/timeline-stop"));
    }),
    (Creative.captureImage = function () {
        window.dispatchEvent(new CustomEvent("lemonpi.dcp/capture-image"));
    }),
    (function () {
        function e(e, t) {
            function i(e, t) {
                var i = e.split("<br>"),
                    n = "";
                return (
                    $.each(i, function (e, i) {
                        n += '<div class="' + t + ' copyGroup"><div class="copyLines">' + i + "</div></div>";
                    }),
                    n
                );
            }
            function n() {
                $(".title").html(i(t.title.value, "introTitles")),
                    $(".title2").html(i(t.title2.value, "introTitles2")),
                    $(".endTitle").html(i(t.endTitle.value, "endTitles")),
                    $("#subtitle").html(t.endSubtitle.value),
                    $("#introImage").css({ backgroundImage: "url(" + t.introImage.value + ")" }),
                    $("#endBg").css({ backgroundColor: t.endBgColor.value }),
                    $("#title, #title2").css({ marginTop: t.titleMarginTop.value }),
                    $(".introTitles:not(:first), .introTitles2:not(:first)").css({ marginTop: t.titlesSpaceBetween.value }),
                    $(".introTitles > .copyLines, .introTitles2 > .copyLines").css({ fontSize: t.titleFontSize.value, backgroundColor: t.titleBgColor.value, padding: t.titlePadding.value, color: t.titleColor.value }),
                    $("#subtitle").css({ fontSize: t.subtitleFontSize.value, color: t.endCopyColor.value }),
                    $("#endTitle").css({ marginTop: t.endTitleMarginTop.value }),
                    $("#endTitle > .endTitles:not(:first)").css({ marginTop: t.endTitlesSpaceBetween.value }),
                    $("#endTitle > .endTitles > .copyLines").css({ paddingBottom: t.endTitlesPaddingBottom.value, fontSize: t.endTitleFontSize.value, color: t.endCopyColor.value }),
                    $("#investCopy").html("Beleggen brengt risico&#39;s en kosten met zich mee. Je kunt jouw inleg of een deel hiervan verliezen."),
                    e.check.retina() && $("#disclaimerImage").css({ background: "none", backgroundImage: $("#disclaimerImageRetina").css("backgroundImage"), backgroundSize: "cover" });
            }
            function o() {
                if ("FALSE" !== t.disclaimer.value) {
                    TweenMax.set("#disclaimerImageRetina", { autoAlpha: 0 });
                    var e = $("#disclaimer").outerHeight();
                    TweenMax.set("#disclaimer", { autoAlpha: 1 }), TweenMax.set("#title, #subtitle, #endTitle", { y: e });
                } else $("#disclaimer, #disclaimerImageRetina").remove();
                "FALSE" !== t.investDisclaimer.value
                    ? ((c = $("#investDisclaimer").outerHeight()), TweenMax.set("#investDisclaimer", { autoAlpha: 1 }), TweenMax.set("#ctaContainer, #logo, #endBg, #logoBorder_container, #introImage", { y: -c }))
                    : $("#investDisclaimer").remove(),
                    "FALSE" !== t.sprintersDisclaimer.value
                        ? ((c = $("#sprintersDisclaimer").outerHeight()),
                          TweenMax.set("#sprintersDisclaimer", { autoAlpha: 1 }),
                          TweenMax.set("#sprintersBg", { autoAlpha: 0 }),
                          TweenMax.set("#ctaContainer, #logo, #endBg, #logoBorder_container, #introImage", { y: -c }),
                          u
                              .to("#sprintersBg", 0.5, { autoAlpha: 1 }, 0)
                              .fromTo("#disclaimerPancake", 0.5, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, ease: Bounce.easeOut })
                              .to("#disclaimerPancake", 0.5, { scale: 0, ease: Back.easeIn }, 3.5)
                              .to("#sprintersBg", 0.5, { autoAlpha: 0, ease: Back.easeIn }, 3.5))
                        : $("#sprintersPancake, #sprintersDisclaimer").remove();
            }
            function a() {
                new TimelineMax().to("#cta", 0.1, { scale: 1.1 }).to("#cta", 1, { scale: 1, ease: Elastic.easeOut });
            }
            function r() {
                TweenMax.to(".ctaInner, .hider", 0.2, { backgroundColor: t.ctaColorHover.value });
            }
            function s() {
                TweenMax.to(".ctaInner, .hider", 0.2, { backgroundColor: t.ctaColor.value });
            }
            function l(e, t, i, n) {
                var o = $('<video poster="' + i + '" playsinline webkit-playsinline muted />')
                    .width($(e).width())
                    .height($(e).height())
                    .append("<source src=" + t + "/>");
                for (var a in n) "volume" !== a ? o.attr(a, n[a]) : o.prop(a, n[a]);
                return $(e).css({ background: "none" }).append(o), o[0];
            }
            function d(e) {
                $("<div class='ctaInner'></div>").prependTo(".cta"),
                    $("<span class='ctaCopy'>" + e + "</span>").prependTo(".ctaInner"),
                    $("<span class='hider'></span>").prependTo(".ctaInner"),
                    $("#cta").css({ backgroundColor: t.ctaColor.value }),
                    $(".ctaInner").css({ width: "auto", backgroundColor: t.ctaColor.value }),
                    $(".ctaCopy").css({ fontSize: t.ctaFontSize.value }),
                    $(".hider").css({ backgroundColor: t.ctaColor.value });
            }
            var c = 0,
                u = new TimelineMax(),
                p = 0,
                f = new TimelineMax();
            if ((TweenMax.set("#arrow", { scale: 1.3 }), TweenMax.set("#loading", { autoAlpha: 0 }), TweenMax.set("#logoBorder", { transformOrigin: "50% 50%", rotation: 90 }), n(), o(), d(t.ctaCopy.value), t.introVideo.value)) {
                var h = l("#introImage", t.introVideo.value, t.videoPoster.value, { loop: !1 });
                (h.volume = 0), (h.muted = "muted"), (h.autoplay = "autoplay");
            }
            t.title2.value ? ((p = 3), f.to(".introTitles", 0.5, { width: 0, ease: Quad.easeOut }).staggerFrom(".introTitles2", 1.2, { width: 0, ease: Quad.easeOut }, 0.15, 0.8)) : $("#title2").remove();
            var g = new TimelineMax({ paused: !0, repeatDelay: 3 }).add(a, 2);
            new TimelineMax()
                .staggerFrom(".introTitles", 1.2, { width: 0, ease: Quad.easeOut }, 0.15, 0.4)
                .add(f, 2.5)
                .fromTo("#logoBorder", 0.8, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", ease: Power2.easeIn }, 2.5 + p)
                .fromTo("#endBg", 0.8, { scale: 0.1, x: -25, y: -25 - c, borderRadius: "300px", transformOrigin: "bottom right" }, { scale: 1, x: 0, y: 0, borderRadius: "0px", ease: Power4.easeOut })
                .from("#subtitle", 0.1, { autoAlpha: 0 }, 3.9 + p)
                .staggerFrom(".endTitles", 1.2, { width: 0, ease: Quad.easeOut }, 0.15, 4.3 + p)
                .fromTo("#cta", 0.5, { autoAlpha: 0, rotation: 0.001 }, { autoAlpha: 1 }, 5.4 + p)
                .from(".ctaInner", 0.3, { width: 40, ease: Power4.easeNone })
                .add(u, 8 + p)
                .add(function () {
                    g.play();
                }),
                $("#creative_container").on("mouseenter touchstart", r).on("mouseleave touchend", s),
                (window.onLoopStop = function () {});
        }
        function t() {
            for (var e = document.querySelectorAll("[data-fallback]"), t = 0; t < e.length; t++) {
                var i = e[t],
                    n = i.getAttribute("data-fallback-image");
                n && (i.style["background-image"] = "url(" + n + ")"), (i.style.display = "");
            }
            Creative.fallback();
        }
        function i(e, t, i) {
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var o = e + "." + n;
                    i[o] = t[n];
                }
        }
        function n(e) {
            return 0 === _
                ? void e()
                : void (b = function () {
                      e();
                  });
        }
        function o(e, t) {
            var i = e.length;
            if (0 === i) return void t();
            for (var n = 0; n < e.length; n++) {
                var o = new Image(),
                    a = function () {
                        0 === --i && t();
                    };
                (o.onload = a), (o.onerror = a), (o.src = e[n]);
            }
        }
        function a(e) {
            for (var t in e) if (e.hasOwnProperty(t)) for (var i = document.querySelectorAll("[data-studio-behaviour='" + t + "']"), n = 0; n < i.length; n++) e[t](i[n]);
        }
        var r = ["17.png", "78.svg", "76.svg", "51.png", "63.svg", "72.svg", "34.svg"],
            s = [
                {
                    name: "check",
                    init: function () {
                        return (function (e) {
                            function t() {
                                return !0;
                            }
                            function i() {
                                return !1;
                            }
                            var n = e;
                            "4005" !== window.location.port && (n = void 0);
                            var o = navigator,
                                a = o.userAgent,
                                r = o.standalone,
                                s = {
                                    retina: function () {
                                        return (
                                            (window.matchMedia &&
                                                (window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches ||
                                                    window.matchMedia(
                                                        "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)"
                                                    ).matches)) ||
                                            (window.devicePixelRatio && 2 <= window.devicePixelRatio)
                                        );
                                    },
                                    desktop: function () {
                                        return !this.mobile();
                                    },
                                    mobile: function () {
                                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
                                    },
                                    osx: function () {
                                        return /OS X/i.test(a);
                                    },
                                    windows: function () {
                                        return /Windows/i.test(a);
                                    },
                                    ios: function () {
                                        return /iPhone|iPad|iPod/i.test(a);
                                    },
                                    android: function () {
                                        return /Android/i.test(a);
                                    },
                                    ie: function () {
                                        return /MSIE|Trident/i.test(a);
                                    },
                                    ie9: function () {
                                        return /MSIE 9\./i.test(a);
                                    },
                                    ie10: function () {
                                        return /MSIE 10\./i.test(a);
                                    },
                                    ie11: function () {
                                        return /Trident\//i.test(a) && !/MSIE/i.test(a);
                                    },
                                    edge: function () {
                                        return /Edge\//i.test(a);
                                    },
                                    chrome: function () {
                                        return /Chrome\//i.test(a) && !/Edge\//i.test(a);
                                    },
                                    firefox: function () {
                                        return /Firefox\//i.test(a);
                                    },
                                    safari: function () {
                                        return /Safari\//i.test(a) && !/Chrome\//i.test(a) && !/Edge\//i.test(a);
                                    },
                                    inApp: function () {
                                        if (!this.mobile) return !1;
                                        if (this.ios()) {
                                            if (!r && !this.safari()) return !0;
                                        } else if (this.android()) return /; wv|version\/[0-9]+\.[0-9]+/gi.test(a);
                                        return !1;
                                    },
                                };
                            if (n && void 0 !== n.deviceType)
                                switch (n.deviceType) {
                                    case "desktop":
                                        (s.desktop = t), (s.mobile = i), (s.inApp = i);
                                        break;
                                    case "mobile":
                                        (s.desktop = i), (s.mobile = t), (s.inApp = i);
                                        break;
                                    case "in-app":
                                        (s.desktop = i), (s.mobile = t), (s.inApp = t);
                                        break;
                                    default:
                                        (s.desktop = t), (s.mobile = i), (s.inApp = i);
                                }
                            if (n && void 0 !== n.operatingSystem)
                                switch (n.operatingSystem) {
                                    case "osx":
                                        (s.osx = t), (s.windows = i), (s.android = i), (s.ios = i);
                                        break;
                                    case "windows":
                                        (s.osx = i), (s.windows = t), (s.android = i), (s.ios = i);
                                        break;
                                    case "android":
                                        (s.osx = i), (s.windows = i), (s.android = t), (s.ios = i);
                                        break;
                                    case "ios":
                                        (s.osx = i), (s.windows = i), (s.android = i), (s.ios = t);
                                        break;
                                    default:
                                        (s.osx = i), (s.windows = i), (s.android = i), (s.ios = i);
                                }
                            if (n && void 0 !== n.browser)
                                switch (n.browser) {
                                    case "chrome":
                                        (s.chrome = t), (s.safari = i), (s.firefox = i), (s.ie = i), (s.ie9 = i), (s.ie10 = i), (s.ie11 = i), (s.edge = i);
                                        break;
                                    case "safari":
                                        (s.chrome = i), (s.safari = t), (s.firefox = i), (s.ie = i), (s.ie9 = i), (s.ie10 = i), (s.ie11 = i), (s.edge = i);
                                        break;
                                    case "firefox":
                                        (s.chrome = i), (s.safari = i), (s.firefox = t), (s.ie = i), (s.ie9 = i), (s.ie10 = i), (s.ie11 = i), (s.edge = i);
                                        break;
                                    case "ie9":
                                        (s.chrome = i), (s.safari = i), (s.firefox = i), (s.ie = t), (s.ie9 = t), (s.ie10 = i), (s.ie11 = i), (s.edge = i);
                                        break;
                                    case "ie10":
                                        (s.chrome = i), (s.safari = i), (s.firefox = i), (s.ie = t), (s.ie9 = i), (s.ie10 = t), (s.ie11 = i), (s.edge = i);
                                        break;
                                    case "ie11":
                                        (s.chrome = i), (s.safari = i), (s.firefox = i), (s.ie = t), (s.ie9 = i), (s.ie10 = i), (s.ie11 = t), (s.edge = i);
                                        break;
                                    case "edge":
                                        (s.chrome = i), (s.safari = i), (s.firefox = i), (s.ie = i), (s.ie9 = i), (s.ie10 = i), (s.ie11 = i), (s.edge = t);
                                        break;
                                    default:
                                        (s.chrome = i), (s.safari = i), (s.firefox = i), (s.ie = i), (s.ie9 = i), (s.ie10 = i), (s.ie11 = i), (s.edge = i);
                                }
                            if (n && void 0 !== n.screenType)
                                switch (n.screenType) {
                                    case "nonretina":
                                        s.retina = i;
                                        break;
                                    case "retina":
                                    default:
                                        s.retina = t;
                                }
                            return { pluginApi: s };
                        })({ browser: "", deviceType: "", operatingSystem: "", screenType: "" });
                    },
                },
                {
                    name: "ghg",
                    init: function () {
                        return (function (e) {
                            function t() {
                                window.addEventListener("message", function (e) {
                                    var t;
                                    e.data && "LP_EXEC_SCRIPT_RESPONSE" === e.data.name && (((t = document.createElement("script")).text = e.data.script), document.body.appendChild(t));
                                });
                            }
                            function i(e) {
                                if (f && window.lemonpi.context) {
                                    var t = e.replace(/\$\{/, "").replace(/\}/, "").trim();
                                    return f[t];
                                }
                                return e;
                            }
                            function n() {
                                if (d) return !0;
                                if (c && void 0 !== e.looping) return e.looping;
                                if (u) return !1;
                                var t = parseInt(i("${SELLER_MEMBER_ID}"), 10) || 1;
                                return 0 < t && 181 !== t && 280 !== t;
                            }
                            function o(e) {
                                var t, n;
                                void 0 !== window.lemonpi &&
                                    ((t = document.querySelector("#creative_container")),
                                    ((n = e).referer = i("${REFERER_URL_ENC}")),
                                    (n.creativeIsVisible = !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)),
                                    window.postMessage(n, "*"),
                                    window.parent.postMessage(n, "*"));
                            }
                            function a() {
                                var e;
                                p &&
                                    (e = setInterval(function () {
                                        var t, i, n;
                                        0 !== window.clickTag1.length &&
                                            (clearInterval(e),
                                            2 < (n = window.clickTag1.split("__AN_MACROS__")).length &&
                                                (n.pop(),
                                                n.shift(),
                                                (t = n.map(function (e) {
                                                    var t = e.split(":");
                                                    return { macro: t[0], value: t[1] || "0" };
                                                })),
                                                "undefined" != typeof lemonpi &&
                                                    void 0 !== lemonpi.context &&
                                                    ((i = window.open),
                                                    (window.open = function (e) {
                                                        for (var n = e.split("3D__AN_MACROS__")[0] + "3Dh" + e.split("__AN_MACROS__h")[1]; 0 < t.length; )
                                                            n = (n = n.replace("(%253A" + t[0].macro + "%253A)", t[0].value)).replace("(%3A" + t[0].macro + "%3A)", t[0].value);
                                                        i.call(window, n);
                                                    }))));
                                    }, 100));
                            }
                            function r() {
                                document.hidden || "function" != typeof window.onPageVisible ? document.hidden && "function" == typeof window.onPageHidden && window.onPageHidden() : window.onPageVisible();
                            }
                            function s() {
                                o({ name: "LEMONPI_CREATIVE_WILL_LOAD" });
                            }
                            var l = void 0,
                                d = !1,
                                c = "4005" === window.location.port,
                                u = c || -1 < window.location.hostname.indexOf("lemonpi.io") || /lemonpi-prod-templates\.s3\.amazonaws\.com/.test(window.location.host),
                                p = "string" == typeof clickTag1,
                                f = void 0;
                            return {
                                creativeWillLoad: function (e) {
                                    window.lemonpi.context
                                        ? window.lemonpi.context.subscribe(function (i) {
                                              (f = i.appnexus), t(), s(), e();
                                          })
                                        : (t(), s(), e()),
                                        window.lemonpi.config && window.lemonpi.config.subscribe(o);
                                },
                                creativeDidRender: function () {
                                    var t, s, p, f, h, g;
                                    (-1 < window.location.href.indexOf("inapptesting=1") || (!u && void 0 !== window.screenad && !window.screenad.isPreviewer)) &&
                                        (console.log = function (e) {
                                            o({ name: "LEMONPI_LOG", message: e });
                                        }),
                                        !c && window.Raven && "function" == typeof window.Raven.config && window.Raven.config("https://87dc5e0450d3461f83c185097b7db5cf@sentry.io/75086").install(),
                                        (function () {
                                            window.addEventListener("message", function (e) {
                                                e.data &&
                                                    "LP_IS_IN_APP" === e.data.name &&
                                                    (window.open = function (e) {
                                                        var t = { name: "LP_MRAID_CLICK", url: e };
                                                        window.parent.postMessage(t, "*"), window.postMessage(t, "*");
                                                    });
                                            });
                                            var e = { name: "LP_REQUEST_IN_APP" };
                                            window.parent.postMessage(e, "*"), window.postMessage(e, "*");
                                        })(),
                                        a(),
                                        (t = document.querySelector("head")),
                                        ((s = document.createElement("style")).type = "text/css"),
                                        s.appendChild(
                                            document.createTextNode(
                                                "* { box-sizing: border-box; } #creative_container { cursor: default; -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; -ms-user-select: none; -moz-user-select: none; -webkit-user-select: none; user-select: none }"
                                            )
                                        ),
                                        t.appendChild(s),
                                        document.getElementById("creative_container").addEventListener("mouseenter", function () {
                                            l = setTimeout(function () {
                                                d = !0;
                                            }, 1e3);
                                        }),
                                        document.getElementById("creative_container").addEventListener("mouseleave", function () {
                                            clearTimeout(l);
                                        }),
                                        (p = setInterval(function () {
                                            var t = void 0,
                                                i = Math.abs(parseInt(e.loopstopDelay, 10)),
                                                t = isNaN(i) || 0 === i ? 15 : i;
                                            "function" != typeof window.onLoopStop ||
                                                (n() && !window.screenad) ||
                                                (clearInterval(p),
                                                TweenMax.delayedCall(t, function () {
                                                    window.onLoopStop();
                                                }));
                                        }, 100)),
                                        setTimeout(function () {
                                            return clearInterval(p);
                                        }, 500),
                                        (f = document.querySelector('meta[name="ad.size"]').content.match(/\d+/g)),
                                        (h = { "336x280": 0.8928571429, "1272x328": 0.7625786164 }[f[0] + "x" + f[1]]),
                                        c &&
                                            e.previewScalifier &&
                                            h &&
                                            window.addEventListener("message", function (e) {
                                                var t;
                                                e.data &&
                                                    "LEMONPI_CREATIVE_RENDERED" === e.data.name &&
                                                    (((t = document.querySelector("#creative_container")).style.transformOrigin = "0 0"),
                                                    (t.style.webkitTransformOrigin = "0 0"),
                                                    (t.style.transform = "scale(" + h + ")"),
                                                    (t.style.webkitTransform = "scale(" + h + ")"));
                                            }),
                                        void 0 !== document.hidden && document.addEventListener("visibilitychange", r, !1),
                                        (g = lemonpi.click),
                                        (window.lemonpi.click = function (e, t, i) {
                                            o({ name: "LP_CLICK" }), g(e, t, i);
                                        }),
                                        u &&
                                            $.getScript("https://s3.eu-central-1.amazonaws.com/ghg-tools/ghg-banner-basics-debugger/debugger-v2.js", function () {
                                                var e, t;
                                                c &&
                                                    ((e = window.location.href.replace("concept.html", "script.js")),
                                                    (t = new XMLHttpRequest()).addEventListener("load", function (e) {
                                                        var t = e.currentTarget.responseText.match(/function executeScript\(plugins\) {[^]+?(?=\/\/ All the Creative's plugins.)/g);
                                                        (t = t ? t[0] : "").match(/https?/gi) && window.drawWarning("error", "Found one or more hardcoded URL's in your creative, please move them to a placeholder.");
                                                    }),
                                                    t.open("get", e, !0),
                                                    t.send());
                                            }),
                                        setTimeout(function () {
                                            var e = { name: "LEMONPI_CREATIVE_RENDERED", supplyType: i("${SUPPLY_TYPE}"), mraidVersion: "undefined" != typeof mraid ? window.mraid.getVersion() : "n/a", appId: i("${EXT_APP_ID}") };
                                            o(Object.assign(e));
                                        }, 1);
                                },
                                pluginApi: {
                                    getAppNexusMacro: i,
                                    getAllowLooping: n,
                                    getUserInteracted: function () {
                                        return d;
                                    },
                                    addMacrosToUrl: function (e) {
                                        var t = e;
                                        return (t = (t = (t = (t = t.replace("${CREATIVE_ID}", i("${CREATIVE_ID}"))).replace("${USER_ID}", i("${USER_ID}"))).replace("${AUCTION_ID}", i("${AUCTION_ID}"))).replace(
                                            "${CREATIVE_SIZE}",
                                            i("${CREATIVE_SIZE}")
                                        ));
                                    },
                                    isInLemonpiStudio: c,
                                    isInAnyLemonpiEnvironment: u,
                                    getResizedImageUrl: function (e, t, i, n, o) {
                                        /* var a = "https://image.lemonpi.io/img/http://res.cloudinary.com/" + e + "/image/fetch/",
                                            r = "c_scale"; */
                                        return i && (r += ",w_" + Math.round(parseFloat(i))), n && (r += ",h_" + Math.round(parseFloat(n))), o && (r += "/q_" + o), a + r + "/" + t.replace(/^(https?:)?\/\/image\.lemonpi\.io\/img\//i, "");
                                    },
                                },
                            };
                        })({ looping: !1, loopstopDelay: "", previewScalifier: !1 });
                    },
                },
                {
                    name: "greensock-drawsvg",
                    init: function () {
                        return (function () {
                            var e = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
                            (e._gsQueue || (e._gsQueue = [])).push(function () {
                                "use strict";
                                function t(e, t, i, n, o, a) {
                                    return (i = (parseFloat(i || 0) - parseFloat(e || 0)) * o), (n = (parseFloat(n || 0) - parseFloat(t || 0)) * a), Math.sqrt(i * i + n * n);
                                }
                                function i(t) {
                                    return ("string" != typeof t && t.nodeType) || ((t = e.TweenLite.selector(t)), t.length && (t = t[0])), t;
                                }
                                function n(e, t, i) {
                                    var n,
                                        o,
                                        a = e.indexOf(" ");
                                    return (
                                        -1 === a ? ((n = void 0 !== i ? i + "" : e), (o = e)) : ((n = e.substr(0, a)), (o = e.substr(a + 1))),
                                        (n = -1 !== n.indexOf("%") ? (parseFloat(n) / 100) * t : parseFloat(n)),
                                        (o = -1 !== o.indexOf("%") ? (parseFloat(o) / 100) * t : parseFloat(o)),
                                        n > o ? [o, n] : [n, o]
                                    );
                                }
                                function o(e) {
                                    if (!e) return 0;
                                    e = i(e);
                                    var n,
                                        o,
                                        a,
                                        r,
                                        s,
                                        l,
                                        d,
                                        u = e.tagName.toLowerCase(),
                                        f = 1,
                                        h = 1;
                                    "non-scaling-stroke" === e.getAttribute("vector-effect") && ((h = e.getScreenCTM()), (f = Math.sqrt(h.a * h.a + h.b * h.b)), (h = Math.sqrt(h.d * h.d + h.c * h.c)));
                                    try {
                                        o = e.getBBox();
                                    } catch (e) {
                                        console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).");
                                    }
                                    if (
                                        ((o && (o.width || o.height)) ||
                                            !p[u] ||
                                            ((o = { width: parseFloat(e.getAttribute(p[u][0])), height: parseFloat(e.getAttribute(p[u][1])) }),
                                            "rect" !== u && "line" !== u && ((o.width *= 2), (o.height *= 2)),
                                            "line" === u && ((o.x = parseFloat(e.getAttribute("x1"))), (o.y = parseFloat(e.getAttribute("y1"))), (o.width = Math.abs(o.width - o.x)), (o.height = Math.abs(o.height - o.y)))),
                                        "path" === u)
                                    )
                                        (r = e.style.strokeDasharray),
                                            (e.style.strokeDasharray = "none"),
                                            (n = e.getTotalLength() || 0),
                                            f !== h && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
                                            (n *= (f + h) / 2),
                                            (e.style.strokeDasharray = r);
                                    else if ("rect" === u) n = 2 * o.width * f + 2 * o.height * h;
                                    else if ("line" === u) n = t(o.x, o.y, o.x + o.width, o.y + o.height, f, h);
                                    else if ("polyline" === u || "polygon" === u)
                                        for (a = e.getAttribute("points").match(c) || [], "polygon" === u && a.push(a[0], a[1]), n = 0, s = 2; s < a.length; s += 2) n += t(a[s - 2], a[s - 1], a[s], a[s + 1], f, h) || 0;
                                    else ("circle" === u || "ellipse" === u) && ((l = (o.width / 2) * f), (d = (o.height / 2) * h), (n = Math.PI * (3 * (l + d) - Math.sqrt((3 * l + d) * (l + 3 * d)))));
                                    return n || 0;
                                }
                                function a(e, t) {
                                    if (!e) return [0, 0];
                                    (e = i(e)), (t = t || o(e) + 1);
                                    var n = d(e),
                                        a = n.strokeDasharray || "",
                                        r = parseFloat(n.strokeDashoffset),
                                        s = a.indexOf(",");
                                    return 0 > s && (s = a.indexOf(" ")), (a = 0 > s ? t : parseFloat(a.substr(0, s)) || 1e-5), a > t && (a = t), [Math.max(0, -r), Math.max(0, a - r)];
                                }
                                var r,
                                    s = e.document,
                                    l = "undefined" != typeof window ? window : s.defaultView || { getComputedStyle: function () {} },
                                    d = function (e) {
                                        return l.getComputedStyle(e);
                                    },
                                    c = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                                    u = -1 !== ((e.navigator || {}).userAgent || "").indexOf("Edge"),
                                    p = { rect: ["width", "height"], circle: ["r", "r"], ellipse: ["rx", "ry"], line: ["x2", "y2"] };
                                (r = e._gsDefine.plugin({
                                    propName: "drawSVG",
                                    API: 2,
                                    version: "0.2.1",
                                    global: !0,
                                    overwriteProps: ["drawSVG"],
                                    init: function (e, t, i, r) {
                                        if (!e.getBBox) return !1;
                                        var s,
                                            l,
                                            c,
                                            p,
                                            f = o(e) + 1;
                                        return (
                                            (this._style = e.style),
                                            (this._target = e),
                                            "function" == typeof t && (t = t(r, e)),
                                            t === !0 || "true" === t ? (t = "0 100%") : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : (t = "0 0"),
                                            (s = a(e, f)),
                                            (l = n(t, f, s[0])),
                                            (this._length = f + 10),
                                            0 === s[0] && 0 === l[0]
                                                ? ((c = Math.max(1e-5, l[1] - f)), (this._dash = f + c), (this._offset = f - s[1] + c), (this._offsetPT = this._addTween(this, "_offset", this._offset, f - l[1] + c, "drawSVG")))
                                                : ((this._dash = s[1] - s[0] || 1e-6),
                                                  (this._offset = -s[0]),
                                                  (this._dashPT = this._addTween(this, "_dash", this._dash, l[1] - l[0] || 1e-5, "drawSVG")),
                                                  (this._offsetPT = this._addTween(this, "_offset", this._offset, -l[0], "drawSVG"))),
                                            u && ((p = d(e)), p.strokeLinecap !== p.strokeLinejoin && ((l = parseFloat(p.strokeMiterlimit)), this._addTween(e.style, "strokeMiterlimit", l, l + 1e-4, "strokeMiterlimit"))),
                                            (this._live = "non-scaling-stroke" === e.getAttribute("vector-effect") || -1 !== (t + "").indexOf("live")),
                                            !0
                                        );
                                    },
                                    set: function (e) {
                                        if (this._firstPT) {
                                            if (this._live) {
                                                var t,
                                                    i = o(this._target) + 11;
                                                i !== this._length &&
                                                    ((t = i / this._length), (this._length = i), (this._offsetPT.s *= t), (this._offsetPT.c *= t), this._dashPT ? ((this._dashPT.s *= t), (this._dashPT.c *= t)) : (this._dash *= t));
                                            }
                                            this._super.setRatio.call(this, e),
                                                (this._style.strokeDashoffset = this._offset),
                                                1 === e || 0 === e
                                                    ? (this._style.strokeDasharray =
                                                          this._offset < 0.001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px")
                                                    : (this._style.strokeDasharray = this._dash + "px," + this._length + "px");
                                        }
                                    },
                                })),
                                    (r.getLength = o),
                                    (r.getPosition = a);
                            }),
                                e._gsDefine && e._gsQueue.pop()(),
                                (function (t) {
                                    "use strict";
                                    var i = function () {
                                        return (e.GreenSockGlobals || e)[t];
                                    };
                                    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), (module.exports = i())) : "function" == typeof define && define.amd && define(["TweenLite"], i);
                                })("DrawSVGPlugin");
                        })({});
                    },
                },
            ];
            
            (function() {
                document.getElementById('creative_container').addEventListener('click', adClick);
            }
            )();
        
            function adClick() {
                Enabler.exitOverride("Banner click", dynEle.clickUrl);
            }

        window.addEventListener("error", t);
        for (var l = [], d = [], c = [], u = [], p = [], f = [], h = {}, g = {}, m = {}, w = 0; w < s.length; w++) {
            var v = s[w],
                y = v.init() || {};
            y.creativeWillLoad && l.push(y.creativeWillLoad),
                y.creativeDidLoad && d.push(y.creativeDidLoad),
                y.creativeWillRender && c.push(y.creativeWillRender),
                y.creativeDidRender && u.push(y.creativeDidRender),
                y.creativeWillOpenClickUrl && p.push(y.creativeWillOpenClickUrl),
                y.creativeDidOpenClickUrl && f.push(y.creativeDidOpenClickUrl),
                y.layerWillRender && i(v.name, y.layerWillRender, h),
                y.layerDidRender && i(v.name, y.layerDidRender, g),
                (m[v.name] = y.pluginApi || {});
        }
        for (var _ = 0, b = function () {}, w = 0; w < l.length; w++) {
            var T = l[w];
            T.length > 0
                ? (_++,
                  T(function () {
                      _--, 0 === _ && b();
                  }))
                : T();
        }
        o(r, function () {
            n(function () {
                for (var t = 0; t < d.length; t++) d[t]();
                for (var t = 0; t < c.length; t++) c[t]();
                a(h);
                var i = !1;
                lemonpi.subscribe(function (t) {
                    if (!i) {
                        (i = !0), (document.querySelector("#creative_container").style.display = ""), a(g);
                        for (var n = 0; n < u.length; n++) u[n]();
                        requestAnimationFrame(function () {
                            e(m, window.lemonpiConfig.exportContent);
                        });
                    }
                });
            });
        });
    })();
