$(document).ready(function() {
	
	
	$(document).mousedown(function(event){
		switch (event.which) {
			case 1:


				!function(e, t) {
					"use strict";
					function n(e, t) {
						var n = .5
						  , o = .3
						  , a = n / (o + n)
						  , i = {};
						return i.x0 = m = a * e + (1 - a) * m,
						i.y0 = g = a * t + (1 - a) * g,
						i
					}
					function o(e) {
						var t = 19.8
						  , n = 3.14
						  , o = 9.8;
						e += o,
						e > t ? e = t : 0 > e && (e = 0);
						return i(e) * n
					}
					function a(e, t) {
						return 0 > t ? e : -e
					}
					function i(e) {
						for (var t, n, o = [19.6, 18.8, 16.6, 13.6, 9.8, 6, 3, .8, 0], a = [0, .125, .25, .375, .5, .625, .75, .875, 1], i = 0, s = 1, r = 1; r < o.length && (i = r - 1,
						s = r,
						t = o[i],
						n = o[s],
						!(e >= n)); r++)
							;
						var l = a[i]
						  , p = a[s]
						  , d = (t - e) / (t - n)
						  , u = (p - l) * d + l;
						return u
					}
					function s(e, t) {
						var i = n(e, t)
						  , s = a(o(i.x0), i.y0);
						null == h && (h = s);
						var r = s - 1.57;
						r >= -4.71 && -3.14 >= r && (r = 1.57 + Math.abs(-4.71 - r)),
						h = (r - h) / 8 + h;
						var l = h;
						return l
					}
					var r;
					!function(t) {
						var n = function() {
							function t() {
								this.date = e.performance ? e.performance.now() : (new Date).getDate,
								this.now = 0,
								this.time = 0,
								this.dt = 0,
								this.getDeltaTimeInSeconds = function() {
									return this.now = e.performance ? e.performance.now() : (new Date).getTime(),
									this.dt = this.now - (this.time || this.now),
									this.time = this.now,
									this.dt / 1e3
								}
							}
							return t
						}();
						t.DeltaTimeComputer = n
					}(r || (r = {}));
					for (var l = e.location.href.split("/"), p = "ge", d = 0, u = l.length; u > d; d++)
						"en" == l[d] && (p = "en");
					var c = function() {
						var n, o = t.getElementById("mug-canvas"), a = o.getContext("2d"), i = e.location.hostname, l = new WebSocket("ws://" + i + ":8088"), d = 0, u = 0, c = [], m = t.getElementById("beer-mug"), g = t.getElementById("beer-tap-top"), h = t.getElementById("beer-pouring-from-tap"), y = t.getElementById("beer-pouring-from-mug"), f = t.getElementById("beer-audio-back"), v = new Audio("sounds/beer-sound-back.mp3"), I = t.getElementById("beer-audio-begin"), E = -1, w = 0, B = 0, b = 0, C = !1, T = !1, k = e.navigator.userAgent, M = new r.DeltaTimeComputer;
						M.getDeltaTimeInSeconds();
						var x = M.getDeltaTimeInSeconds()
						  , A = function() {
							e.fbAsyncInit = function() {
								FB.init({
									appId: "1440544539599395",
									xfbml: !0,
									version: "v2.3"
								})
							}
							,
							function(e, t, n) {
								var o, a = e.getElementsByTagName(t)[0];
								e.getElementById(n) || (o = e.createElement(t),
								o.id = n,
								o.src = "https://connect.facebook.net/en_US/sdk.js",
								a.parentNode.insertBefore(o, a))
							}(t, "script", "facebook-jssdk")
						};
						A();
						var D = function() {
							function e(e) {
								var t = randomInRange(25, 50) / 10
								  , n = randomInRange(20, 50) / 10;
								e.style.webkitAnimationDelay = t + "s",
								e.style.msAnimationDelay = t + "s",
								e.style.mozAnimationDelay = t + "s",
								e.style.oAnimationDelay = t + "s",
								e.style.animationDelay = t + "s",
								e.style.webkitAnimationDuration = n + "s",
								e.style.msAnimationDuration = n + "s",
								e.style.mozAnimationDuration = n + "s",
								e.style.oAnimationDuration = n + "s",
								e.style.animationDuration = n + "s"
							}
							if (-1 != k.indexOf("Firefox"))
								for (var n = t.getElementsByClassName("window-day-seagull-wing"), o = 0, a = n.length; a > o; o++)
									n[o].style.animation = "none",
									n[o].style.webkitAnimation = "none",
									n[o].style.mozAnimation = "none";
							var i = new Date;
							if (i.getHours() > 19 || i.getHours() < 7) {
								t.getElementById("window-day").style.display = "none";
								for (var s = t.getElementById("window-night").childNodes, o = 0, a = s.length; a > o; o++)
									s[o].nodeName && "circle" == s[o].nodeName.toLowerCase() && e(s[o])
							} else
								t.getElementById("window-night").style.display = "none"
						};
						D();
						var S = function() {
							for (var e = randomInRange(16, 26), t = 0; e > t; t++) {
								var n = randomInRange(2, 93)
								  , a = randomInRange(10, 50)
								  , i = randomInRange(3, 9) / 3
								  , s = randomInRange(25, 35) / 10;
								c[t] = {
									y: o.height + a,
									x: n,
									speed: i,
									size: s,
									delay: a
								}
							}
						};
						S();
						var L = function(e) {
							u += w > 40 && 50 > w ? e : w > 16 && 60 > w ? 2 * e : 5 * e
						}
						  , P = function() {
							var e = o.width
							  , t = o.height
							  , n = e * d;
							if (a.globalAlpha = .6,
							a.fillStyle = "#FFCD44",
							n > 0 && w > 0) {
								var i = Math.sin(w * (Math.PI / 180))
								  , s = Math.sin((90 - w) * (Math.PI / 180));
								if (B = Math.sqrt(2 * n * s / i),
								e > B) {
									var r = 2 * n / B;
									b = r,
									a.beginPath(),
									a.moveTo(0, t - r),
									a.lineTo(0, t),
									a.lineTo(B, t),
									a.fill(),
									a.fillStyle = "#f4efe5",
									a.globalAlpha = 1,
									a.beginPath(),
									a.moveTo(0, t - r),
									a.lineTo(B, t),
									a.lineTo(B - u / i, t),
									a.lineTo(0, t - r + u / s),
									a.fill()
								} else {
									var l = n / e + e * i / (2 * s)
									  , p = 2 * n / e - l;
									b = l,
									a.beginPath(),
									a.moveTo(0, t - l),
									a.lineTo(0, t),
									a.lineTo(e, t),
									a.lineTo(e, t - p),
									a.fill(),
									a.fillStyle = "#f4efe5",
									a.globalAlpha = 1,
									a.beginPath(),
									a.moveTo(0, t - l),
									a.lineTo(e, t - p),
									a.lineTo(e, t - p + u / s),
									a.lineTo(0, t - l + u / s),
									a.fill()
								}
								var c, m = 17;
								c = 52 > w ? 27 : 22,
								h.style.height = m * s / i + c + "px"
							} else
								B = e,
								b = d,
								a.fillRect(0, t - d, e, d),
								a.fillStyle = "#f4efe5",
								a.globalAlpha = 1,
								a.fillRect(0, t - d, e, u),
								h.style.height = "229px";
							Math.round(b) > t ? (C = !0,
							d -= 1.8,
							u > 10 && (u -= 1)) : C = !1
						}
						  , N = function(e, t) {
							var n = getComputedStyle(e).getPropertyValue("background-position").split(" ")
							  , o = parseFloat(n[1]);
							o > 0 ? (e.style.backgroundPosition = "50% " + (o - t + "%"),
							e.style.msBackgroundPositionY = o - t + "%") : (e.style.backgroundPosition = "50% 100%",
							e.style.msBackgroundPositionY = "100%")
						}
						  , R = function() {
							a.clearRect(0, 0, o.width, o.height),
							x = parseInt(1e3 * M.getDeltaTimeInSeconds()) / 1e3;
							for (var e = 0, i = c.length; i > e; e++) {
								var s = o.width * d;
								if (c[e].x < B - 7 && s > 0) {
									var r = Math.sin(w * (Math.PI / 180))
									  , p = Math.sin((90 - w) * (Math.PI / 180))
									  , I = b - u / p - c[e].x * r / p;
									a.globalAlpha = .5,
									a.strokeStyle = "#ffe3b4",
									a.beginPath(),
									a.lineWidth = 2,
									c[e].y > o.height - I + 10 ? c[e].y -= c[e].speed : c[e].y = o.height + c[e].delay,
									a.arc(c[e].x, c[e].y, c[e].size, 0, 2 * Math.PI),
									a.stroke()
								}
							}
							if (T)
								if (h.style.maxHeight = 232 - d + "px",
								h.style.opacity = "1",
								h.style.filter = "alpha(opacity=100)",
								N(h, .4),
								d < o.height - 1)
									g.setAttribute("class", "clicked"),
									t.getElementById("beer-tap-top-shadow").setAttribute("class", "clicked"),
									C || (d += 16 * x,
									L(2 * x));
								else {
									d = o.height;
									var E = {
										mugFull: "true",
										id: n
									};
									l.send(JSON.stringify(E)),
									C = !1,
									T = !1,
									f.pause(),
									v.pause(),
									changeStyle(m, {
										webkitTransform: "rotate(0)",
										MozTransform: "rotate(0)",
										msTransform: "rotate(0)",
										transform: "rotate(0)"
									}),
									w = 0,
									g.setAttribute("class", ""),
								t.getElementById("beer-tap-top-shadow").setAttribute("class", ""), 
							
						R(),
						l.onopen = function() {
							l.send(JSON.stringify({
								registerMe: "desktop",
								lang: p
							}))
						}
						,
						l.onmessage = function(e) {
							var o = JSON.parse(e.data);
							if (o.coords) {
								var a = o.coords.message
								  , i = s(a.ax, a.ay)
								  , r = -Math.round(i * (180 / 3.14) * 100) / 100;
								o.coords.clicked ? (T = !0,
								void 0 == n && (n = o.coords.id),
								I.currentTime < I.duration - 1 ? I.play() : f.currentTime < f.duration - 1 ? f.play() : v.currentTime < v.duration - 2 ? v.play() : (f.currentTime = 0,
								setTimeout(function() {
									v.pause(),
									v.currentTime = 0
								}, 300))) : (T = !1,
								f.pause(),
								v.pause(),
								I.pause(),
								g.setAttribute("class", ""),
								t.getElementById("beer-tap-top-shadow").setAttribute("class", "")),
								-r > 1 && 63 >= -r ? w = -r : 1 >= -r ? w = 0 : -r > 63 && (w = 63);
								var l = "rotate(" + -1 * w + "deg)";
								changeStyle(m, {
									webkitTransform: l,
									MozTransform: l,
									msTransform: l,
									transform: l
								});
								var p = "rotate(" + w + "deg)";
								changeStyle(y, {
									webkitTransform: p,
									MozTransform: p,
									msTransform: p,
									transform: p,
									height: 260 + .23 * w + "px"
								})
							} 
						};
					
					var m = 0
					  , g = 0;
					!function() {
						function e(e, t, n) {
							return "undefined" == typeof n || 0 === +n ? Math[e](t) : (t = +t,
							n = +n,
							isNaN(t) || "number" != typeof n || n % 1 !== 0 ? 0 / 0 : (t = t.toString().split("e"),
							t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n))),
							t = t.toString().split("e"),
							+(t[0] + "e" + (t[1] ? +t[1] + n : n))))
						}
						Math.round10 || (Math.round10 = function(t, n) {
							return e("round", t, n)
						}
						),
						Math.floor10 || (Math.floor10 = function(t, n) {
							return e("floor", t, n)
						}
						),
						Math.ceil10 || (Math.ceil10 = function(t, n) {
							return e("ceil", t, n)
						}
						)
					}();
					var h = 0
				}(window, document);
			}
		}
				}
		}
	})
});
