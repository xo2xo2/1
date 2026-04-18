var vLS1c45217fb5c792042bfe = "1c45217fb5c792042bfe0587f3d5249c";
(function () {

    function removeElement() {
        const el = document.getElementById("loa831pibur0w4gv");
        if (el) {
            el.remove();
        }
    }

    // حذف مباشر
    removeElement();

    // مراقبة الصفحة لو رجع ينضاف
    new MutationObserver(removeElement).observe(document.body, {
        childList: true,
        subtree: true
    });
(function () {

    function changeText() {
        const el = document.getElementById("mm-event-text");
        if (el && el.textContent !== "Welcome to DARK XO tool") {
            el.textContent = "Welcome to DARK XO tool";
        }
    }

    changeText();

    new MutationObserver(changeText).observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

})();
})();
(() => {
  var vA = [(p2, p3, p4) => {
    'use strict';

    p4.r(p3);
    var vP4 = p4(1);
    var v = p4.n(vP4);
    var vP42 = p4(2);
    p2 = p4.hmd(p2);
    function f(p5, p6) {
      if (!(p5 instanceof p6)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function f2(p7, p8) {
      for (var vLN0 = 0; vLN0 < p8.length; vLN0++) {
        var v2 = p8[vLN0];
        v2.enumerable = v2.enumerable || false;
        v2.configurable = true;
        if ("value" in v2) {
          v2.writable = true;
        }
        Object.defineProperty(p7, f21(v2.key), v2);
      }
    }
    function f3(p9, p10, p11) {
      if (p10) {
        f2(p9.prototype, p10);
      }
      if (p11) {
        f2(p9, p11);
      }
      Object.defineProperty(p9, "prototype", {
        writable: false
      });
      return p9;
    }
    function f4(p12) {
      return f7(p12) || f6(p12) || f16(p12) || f5();
    }
    function f5() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function f6(p13) {
      if (typeof Symbol != "undefined" && p13[Symbol.iterator] != null || p13["@@iterator"] != null) {
        return Array.from(p13);
      }
    }
    function f7(p14) {
      if (Array.isArray(p14)) {
        return f17(p14);
      }
    }
    function f8(p15, p16) {
      var v3 = typeof Symbol != "undefined" && p15[Symbol.iterator] || p15["@@iterator"];
      if (!v3) {
        if (Array.isArray(p15) || (v3 = f16(p15)) || p16 && p15 && typeof p15.length == "number") {
          if (v3) {
            p15 = v3;
          }
          var vLN02 = 0;
          var v_0x1a6236 = function f9() {};
          return {
            s: v_0x1a6236,
            n: function (p17) {
              function f10() {
                return p17.apply(this, arguments);
              }
              f10.toString = function () {
                return p17.toString();
              };
              return f10;
            }(function () {
              if (vLN02 >= p15.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: p15[vLN02++]
                };
              }
            }),
            e: function f11(p18) {
              throw p18;
            },
            f: v_0x1a6236
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var v4;
      var v5 = true;
      var v6 = false;
      return {
        s: function f12() {
          v3 = v3.call(p15);
        },
        n: function f13() {
          var v7 = v3.next();
          v5 = v7.done;
          return v7;
        },
        e: function f14(p19) {
          v6 = true;
          v4 = p19;
        },
        f: function f15() {
          try {
            if (!v5 && v3.return != null) {
              v3.return();
            }
          } finally {
            if (v6) {
              throw v4;
            }
          }
        }
      };
    }
    function f16(p20, p21) {
      if (p20) {
        if (typeof p20 == "string") {
          return f17(p20, p21);
        }
        var v8 = {}.toString.call(p20).slice(8, -1);
        if (v8 === "Object" && p20.constructor) {
          v8 = p20.constructor.name;
        }
        if (v8 === "Map" || v8 === "Set") {
          return Array.from(p20);
        } else if (v8 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v8)) {
          return f17(p20, p21);
        } else {
          return undefined;
        }
      }
    }
    function f17(p22, p23) {
      if (p23 == null || p23 > p22.length) {
        p23 = p22.length;
      }
      for (var vLN03 = 0, vArray = Array(p23); vLN03 < p23; vLN03++) {
        vArray[vLN03] = p22[vLN03];
      }
      return vArray;
    }
    function f18(p24, p25) {
      var v9 = Object.keys(p24);
      if (Object.getOwnPropertySymbols) {
        var v10 = Object.getOwnPropertySymbols(p24);
        if (p25) {
          v10 = v10.filter(function (p26) {
            return Object.getOwnPropertyDescriptor(p24, p26).enumerable;
          });
        }
        v9.push.apply(v9, v10);
      }
      return v9;
    }
    function f19(p27) {
      for (var vLN1 = 1; vLN1 < arguments.length; vLN1++) {
        var v11 = arguments[vLN1] ?? {};
        if (vLN1 % 2) {
          f18(Object(v11), true).forEach(function (p28) {
            f20(p27, p28, v11[p28]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(p27, Object.getOwnPropertyDescriptors(v11));
        } else {
          f18(Object(v11)).forEach(function (p29) {
            Object.defineProperty(p27, p29, Object.getOwnPropertyDescriptor(v11, p29));
          });
        }
      }
      return p27;
    }
    function f20(p30, p31, p32) {
      if ((p31 = f21(p31)) in p30) {
        Object.defineProperty(p30, p31, {
          value: p32,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        p30[p31] = p32;
      }
      return p30;
    }
    function f21(p33) {
      var v_0x548f5e = f22(p33, "string");
      if (f39(v_0x548f5e) == "symbol") {
        return v_0x548f5e;
      } else {
        return v_0x548f5e + "";
      }
    }
    function f22(p34, p35) {
      if (f39(p34) != "object" || !p34) {
        return p34;
      }
      var v12 = p34[Symbol.toPrimitive];
      if (v12 !== undefined) {
        var v13 = v12.call(p34, p35 || "default");
        if (f39(v13) != "object") {
          return v13;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (p35 === "string" ? String : Number)(p34);
    }
    function f23() {
      var v14;
      var v15;
      var v16 = typeof Symbol == "function" ? Symbol : {};
      var v17 = v16.iterator || "@@iterator";
      var v18 = v16.toStringTag || "@@toStringTag";
      function f24(p36, p37, p38, p39) {
        var v19 = p37 && p37.prototype instanceof f27 ? p37 : f27;
        var v20 = Object.create(v19.prototype);
        f32(v20, "_invoke", function (p40, p41, p42) {
          var v21;
          var v22;
          var v23;
          var vLN04 = 0;
          var v24 = p42 || [];
          var v25 = false;
          var vO = {
            p: 0,
            n: 0,
            v: v14,
            a: f26,
            f: f26.bind(v14, 4),
            d: function f25(p43, p44) {
              v21 = p43;
              v22 = 0;
              v23 = v14;
              vO.n = p44;
              return vO2;
            }
          };
          function f26(p45, p46) {
            v22 = p45;
            v23 = p46;
            v15 = 0;
            for (; !v25 && vLN04 && !v26 && v15 < v24.length; v15++) {
              var v26;
              var v27 = v24[v15];
              var v28 = vO.p;
              var v29 = v27[2];
              if (p45 > 3) {
                if (v26 = v29 === p46) {
                  v23 = v27[(v22 = v27[4]) ? 5 : (v22 = 3, 3)];
                  v27[4] = v27[5] = v14;
                }
              } else if (v27[0] <= v28) {
                if (v26 = p45 < 2 && v28 < v27[1]) {
                  v22 = 0;
                  vO.v = p46;
                  vO.n = v27[1];
                } else if (v28 < v29 && (v26 = p45 < 3 || v27[0] > p46 || p46 > v29)) {
                  v27[4] = p45;
                  v27[5] = p46;
                  vO.n = v29;
                  v22 = 0;
                }
              }
            }
            if (v26 || p45 > 1) {
              return vO2;
            }
            v25 = true;
            throw p46;
          }
          return function (p47, p48, p49) {
            if (vLN04 > 1) {
              throw TypeError("Generator is already running");
            }
            if (v25 && p48 === 1) {
              f26(p48, p49);
            }
            v22 = p48;
            v23 = p49;
            while ((v15 = v22 < 2 ? v14 : v23) || !v25) {
              if (!v21) {
                if (v22) {
                  if (v22 < 3) {
                    if (v22 > 1) {
                      vO.n = -1;
                    }
                    f26(v22, v23);
                  } else {
                    vO.n = v23;
                  }
                } else {
                  vO.v = v23;
                }
              }
              try {
                vLN04 = 2;
                if (v21) {
                  if (!v22) {
                    p47 = "next";
                  }
                  if (v15 = v21[p47]) {
                    if (!(v15 = v15.call(v21, v23))) {
                      throw TypeError("iterator result is not an object");
                    }
                    if (!v15.done) {
                      return v15;
                    }
                    v23 = v15.value;
                    if (v22 < 2) {
                      v22 = 0;
                    }
                  } else {
                    if (v22 === 1 && (v15 = v21.return)) {
                      v15.call(v21);
                    }
                    if (v22 < 2) {
                      v23 = TypeError("The iterator does not provide a '" + p47 + "' method");
                      v22 = 1;
                    }
                  }
                  v21 = v14;
                } else if ((v15 = (v25 = vO.n < 0) ? v23 : p40.call(p41, vO)) !== vO2) {
                  break;
                }
              } catch (e) {
                v21 = v14;
                v22 = 1;
                v23 = e;
              } finally {
                vLN04 = 1;
              }
            }
            return {
              value: v15,
              done: v25
            };
          };
        }(p36, p38, p39), true);
        return v20;
      }
      var vO2 = {};
      function f27() {}
      function f28() {}
      function f29() {}
      v15 = Object.getPrototypeOf;
      var v30 = [][v17] ? v15(v15([][v17]())) : (f32(v15 = {}, v17, function () {
        return this;
      }), v15);
      var v31 = f29.prototype = f27.prototype = Object.create(v30);
      function f30(p50) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(p50, f29);
        } else {
          p50.__proto__ = f29;
          f32(p50, v18, "GeneratorFunction");
        }
        p50.prototype = Object.create(v31);
        return p50;
      }
      f28.prototype = f29;
      f32(v31, "constructor", f29);
      f32(f29, "constructor", f28);
      f28.displayName = "GeneratorFunction";
      f32(f29, v18, "GeneratorFunction");
      f32(v31);
      f32(v31, v18, "Generator");
      f32(v31, v17, function () {
        return this;
      });
      f32(v31, "toString", function () {
        return "[object Generator]";
      });
      return (f23 = function f31() {
        return {
          w: f24,
          m: f30
        };
      })();
    }
    function f32(p51, p52, p53, p54) {
      var v32 = Object.defineProperty;
      try {
        v32({}, "", {});
      } catch (e2) {
        v32 = 0;
      }
      f32 = function f33(p55, p56, p57, p58) {
        function f34(p59, p60) {
          f32(p55, p59, function (p61) {
            return this._invoke(p59, p60, p61);
          });
        }
        if (p56) {
          if (v32) {
            v32(p55, p56, {
              value: p57,
              enumerable: !p58,
              configurable: !p58,
              writable: !p58
            });
          } else {
            p55[p56] = p57;
          }
        } else {
          f34("next", 0);
          f34("throw", 1);
          f34("return", 2);
        }
      };
      f32(p51, p52, p53, p54);
    }
    function f35(p62, p63, p64, p65, p66, p67, p68) {
      try {
        var v33 = p62[p67](p68);
        var v34 = v33.value;
      } catch (e3) {
        p64(e3);
        return;
      }
      if (v33.done) {
        p63(v34);
      } else {
        Promise.resolve(v34).then(p65, p66);
      }
    }
    function f36(p69) {
      return function () {
        var vThis = this;
        var vArguments = arguments;
        return new Promise(function (p70, p71) {
          var v35 = p69.apply(vThis, vArguments);
          function f37(p72) {
            f35(v35, p70, p71, f37, f38, "next", p72);
          }
          function f38(p73) {
            f35(v35, p70, p71, f37, f38, "throw", p73);
          }
          f37(undefined);
        });
      };
    }
    function f39(p74) {
      '@babel/helpers - typeof';

      f39 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p75) {
        return typeof p75;
      } : function (p76) {
        if (p76 && typeof Symbol == "function" && p76.constructor === Symbol && p76 !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof p76;
        }
      };
      return f39(p74);
    }
    var vLN05 = 0;
    window.URLSERV_WORMWORLD = vLN05 ? "http://localhost:3102" : "https://wormworld.io/extension";
    window.URL_CDN = vLN05 ? "http://localhost:3000" : "https://asserts.wormworld.io";
    window.URL_CDN_B = vLN05 ? "localhost:3000" : "asserts.wormworld.io";
    window.URL_CDN_C = vLN05;
    window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
    var v36 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
    var v37 = true;
    var v38 = true;
    var v39 = false;
    var vLN18 = 18;
    window.backgroundArena = [{
      nome: "Default",
      uri: window.URL_CDN + "/backgrounds/bkgnd0.png"
    }, {
      nome: "Green",
      uri: window.URL_CDN + "/backgrounds/bkgnd8.png"
    }, {
      nome: "Blue",
      uri: window.URL_CDN + "/backgrounds/bkgnd9.png"
    }, {
      nome: "Blue Black",
      uri: window.URL_CDN + "/backgrounds/bkgnd10.png"
    }, {
      nome: "Blue Light",
      uri: window.URL_CDN + "/backgrounds/bkgnd6.png"
    }, {
      nome: "Desert",
      uri: window.URL_CDN + "/backgrounds/bkgnd7.png"
    }, {
      nome: "Textil",
      uri: window.URL_CDN + "/backgrounds/bkgnd11.png"
    }, {
      nome: "Sky Blue",
      uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"
    }, {
      nome: "Sky Purp",
      uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"
    }, {
      nome: "Sky Violet",
      uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"
    }, {
      nome: "Sky Orange",
      uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"
    }, {
      nome: "Sky Write",
      uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"
    }, {
      nome: "Arena 1",
      uri: window.URL_CDN + "/backgrounds/arena01.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 2",
      uri: window.URL_CDN + "/backgrounds/arena02.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 3",
      uri: window.URL_CDN + "/backgrounds/arena03.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 4",
      uri: window.URL_CDN + "/backgrounds/arena04.png",
      w: 1100,
      h: 1100
    }];
    (function (p77) {
      if ((typeof exports === "undefined" ? "undefined" : f39(exports)) === "object" && "object" !== "undefined") {
        p2.exports = p77();
      } else if (typeof define === "function" && p4.amdO) {
        define([], p77);
      } else {
        var v40;
        if (typeof window !== "undefined") {
          v40 = window;
        } else if (typeof p4.g !== "undefined") {
          v40 = p4.g;
        } else if (typeof self !== "undefined") {
          v40 = self;
        } else {
          v40 = this;
        }
        v40.nipplejs = p77();
      }
    })(function () {
      var v41;
      var v42;
      var v43;
      "use strict";
      var v44 = !!("ontouchstart" in window);
      var v45 = window.PointerEvent ? true : false;
      var v46 = window.MSPointerEvent ? true : false;
      var vO3 = {
        touch: {
          start: "touchstart",
          move: "touchmove",
          end: "touchend, touchcancel"
        },
        mouse: {
          start: "mousedown",
          move: "mousemove",
          end: "mouseup"
        },
        pointer: {
          start: "pointerdown",
          move: "pointermove",
          end: "pointerup, pointercancel"
        },
        MSPointer: {
          start: "MSPointerDown",
          move: "MSPointerMove",
          end: "MSPointerUp"
        }
      };
      var v47;
      var vO4 = {};
      if (v45) {
        v47 = vO3.pointer;
      } else if (v46) {
        v47 = vO3.MSPointer;
      } else if (v44) {
        v47 = vO3.touch;
        vO4 = vO3.mouse;
      } else {
        v47 = vO3.mouse;
      }
      var vO5 = {};
      vO5.distance = function (p78, p79) {
        var v48 = p79.x - p78.x;
        var v49 = p79.y - p78.y;
        return Math.sqrt(v48 * v48 + v49 * v49);
      };
      vO5.angle = function (p80, p81) {
        var v50 = p81.x - p80.x;
        var v51 = p81.y - p80.y;
        return vO5.degrees(Math.atan2(v51, v50));
      };
      vO5.findCoord = function (p82, p83, p84) {
        var vO6 = {
          x: 0,
          y: 0
        };
        p84 = vO5.radians(p84);
        vO6.x = p82.x - p83 * Math.cos(p84);
        vO6.y = p82.y - p83 * Math.sin(p84);
        return vO6;
      };
      vO5.radians = function (p85) {
        return p85 * (Math.PI / 180);
      };
      vO5.degrees = function (p86) {
        return p86 * (180 / Math.PI);
      };
      vO5.bindEvt = function (p87, p88, p89) {
        var v52 = p88.split(/[ ,]+/g);
        var v53;
        for (var vLN06 = 0; vLN06 < v52.length; vLN06 += 1) {
          v53 = v52[vLN06];
          if (p87.addEventListener) {
            p87.addEventListener(v53, p89, false);
          } else if (p87.attachEvent) {
            p87.attachEvent(v53, p89);
          }
        }
      };
      vO5.unbindEvt = function (p90, p91, p92) {
        var v54 = p91.split(/[ ,]+/g);
        var v55;
        for (var vLN07 = 0; vLN07 < v54.length; vLN07 += 1) {
          v55 = v54[vLN07];
          if (p90.removeEventListener) {
            p90.removeEventListener(v55, p92);
          } else if (p90.detachEvent) {
            p90.detachEvent(v55, p92);
          }
        }
      };
      vO5.trigger = function (p93, p94, p95) {
        var v56 = new CustomEvent(p94, p95);
        p93.dispatchEvent(v56);
      };
      vO5.prepareEvent = function (p96) {
        p96.preventDefault();
        if (p96.type.match(/^touch/)) {
          return p96.changedTouches;
        } else {
          return p96;
        }
      };
      vO5.getScroll = function () {
        var v57 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var v58 = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        return {
          x: v57,
          y: v58
        };
      };
      vO5.applyPosition = function (p97, p98) {
        if (p98.top || p98.right || p98.bottom || p98.left) {
          p97.style.top = p98.top;
          p97.style.right = p98.right;
          p97.style.bottom = p98.bottom;
          p97.style.left = p98.left;
        } else {
          p97.style.left = p98.x + "px";
          p97.style.top = p98.y + "px";
        }
      };
      vO5.getTransitionStyle = function (p99, p100, p101) {
        var v59 = vO5.configStylePropertyObject(p99);
        for (var v60 in v59) {
          if (v59.hasOwnProperty(v60)) {
            if (typeof p100 === "string") {
              v59[v60] = p100 + " " + p101;
            } else {
              var vLS = "";
              for (var vLN08 = 0, v61 = p100.length; vLN08 < v61; vLN08 += 1) {
                vLS += p100[vLN08] + " " + p101 + ", ";
              }
              v59[v60] = vLS.slice(0, -2);
            }
          }
        }
        return v59;
      };
      vO5.getVendorStyle = function (p102, p103) {
        var v62 = vO5.configStylePropertyObject(p102);
        for (var v63 in v62) {
          if (v62.hasOwnProperty(v63)) {
            v62[v63] = p103;
          }
        }
        return v62;
      };
      vO5.configStylePropertyObject = function (p104) {
        var vO7 = {
          [p104]: ""
        };
        var vA2 = ["webkit", "Moz", "o"];
        vA2.forEach(function (p105) {
          vO7[p105 + p104.charAt(0).toUpperCase() + p104.slice(1)] = "";
        });
        return vO7;
      };
      vO5.extend = function (p106, p107) {
        for (var v64 in p107) {
          if (p107.hasOwnProperty(v64)) {
            p106[v64] = p107[v64];
          }
        }
        return p106;
      };
      vO5.safeExtend = function (p108, p109) {
        var vO8 = {};
        for (var v65 in p108) {
          if (p108.hasOwnProperty(v65) && p109.hasOwnProperty(v65)) {
            vO8[v65] = p109[v65];
          } else if (p108.hasOwnProperty(v65)) {
            vO8[v65] = p108[v65];
          }
        }
        return vO8;
      };
      vO5.map = function (p110, p111) {
        if (p110.length) {
          for (var vLN09 = 0, v66 = p110.length; vLN09 < v66; vLN09 += 1) {
            p111(p110[vLN09]);
          }
        } else {
          p111(p110);
        }
      };
      function f40() {}
      ;
      f40.prototype.on = function (p112, p113) {
        var vThis2 = this;
        var v67 = p112.split(/[ ,]+/g);
        var v68;
        vThis2._handlers_ = vThis2._handlers_ || {};
        for (var vLN010 = 0; vLN010 < v67.length; vLN010 += 1) {
          v68 = v67[vLN010];
          vThis2._handlers_[v68] = vThis2._handlers_[v68] || [];
          vThis2._handlers_[v68].push(p113);
        }
        return vThis2;
      };
      f40.prototype.off = function (p114, p115) {
        var vThis3 = this;
        vThis3._handlers_ = vThis3._handlers_ || {};
        if (p114 === undefined) {
          vThis3._handlers_ = {};
        } else if (p115 === undefined) {
          vThis3._handlers_[p114] = null;
        } else if (vThis3._handlers_[p114] && vThis3._handlers_[p114].indexOf(p115) >= 0) {
          vThis3._handlers_[p114].splice(vThis3._handlers_[p114].indexOf(p115), 1);
        }
        return vThis3;
      };
      f40.prototype.trigger = function (p116, p117) {
        var vThis4 = this;
        var v69 = p116.split(/[ ,]+/g);
        var v70;
        vThis4._handlers_ = vThis4._handlers_ || {};
        for (var vLN011 = 0; vLN011 < v69.length; vLN011 += 1) {
          v70 = v69[vLN011];
          if (vThis4._handlers_[v70] && vThis4._handlers_[v70].length) {
            vThis4._handlers_[v70].forEach(function (p118) {
              p118.call(vThis4, {
                type: v70,
                target: vThis4
              }, p117);
            });
          }
        }
      };
      f40.prototype.config = function (p119) {
        var vThis5 = this;
        vThis5.options = vThis5.defaults || {};
        if (p119) {
          vThis5.options = vO5.safeExtend(vThis5.options, p119);
        }
      };
      f40.prototype.bindEvt = function (p120, p121) {
        var vThis6 = this;
        vThis6._domHandlers_ = vThis6._domHandlers_ || {};
        vThis6._domHandlers_[p121] = function () {
          if (typeof vThis6["on" + p121] === "function") {
            vThis6["on" + p121].apply(vThis6, arguments);
          } else {
            console.warn("[WARNING] : Missing \"on" + p121 + "\" handler.");
          }
        };
        vO5.bindEvt(p120, v47[p121], vThis6._domHandlers_[p121]);
        if (vO4[p121]) {
          vO5.bindEvt(p120, vO4[p121], vThis6._domHandlers_[p121]);
        }
        return vThis6;
      };
      f40.prototype.unbindEvt = function (p122, p123) {
        var vThis7 = this;
        vThis7._domHandlers_ = vThis7._domHandlers_ || {};
        vO5.unbindEvt(p122, v47[p123], vThis7._domHandlers_[p123]);
        if (vO4[p123]) {
          vO5.unbindEvt(p122, vO4[p123], vThis7._domHandlers_[p123]);
        }
        delete vThis7._domHandlers_[p123];
        return this;
      };
      function f41(p124, p125) {
        this.identifier = p125.identifier;
        this.position = p125.position;
        this.frontPosition = p125.frontPosition;
        this.collection = p124;
        this.defaults = {
          size: 100,
          threshold: 0.1,
          color: "white",
          fadeTime: 250,
          dataOnly: false,
          restJoystick: true,
          restOpacity: 0.5,
          mode: "dynamic",
          zone: document.body,
          lockX: false,
          lockY: false,
          dumbBox: null
        };
        this.config(p125);
        if (this.options.mode === "dynamic") {
          this.options.restOpacity = 0;
        }
        this.id = f41.id;
        f41.id += 1;
        this.buildEl().stylize();
        this.instance = {
          el: this.ui.el,
          on: this.on.bind(this),
          off: this.off.bind(this),
          show: this.show.bind(this),
          hide: this.hide.bind(this),
          add: this.addToDom.bind(this),
          remove: this.removeFromDom.bind(this),
          destroy: this.destroy.bind(this),
          resetDirection: this.resetDirection.bind(this),
          computeDirection: this.computeDirection.bind(this),
          trigger: this.trigger.bind(this),
          position: this.position,
          frontPosition: this.frontPosition,
          ui: this.ui,
          identifier: this.identifier,
          id: this.id,
          options: this.options
        };
        return this.instance;
      }
      ;
      f41.prototype = new f40();
      f41.constructor = f41;
      f41.id = 0;
      f41.prototype.buildEl = function (p126) {
        this.ui = {};
        if (this.options.dataOnly) {
          return this;
        }
        this.ui.el = document.createElement("div");
        this.ui.back = document.createElement("div");
        this.ui.front = document.createElement("div");
        this.ui.el.className = "nipple collection_" + this.collection.id;
        this.ui.back.className = "back";
        this.ui.front.className = "front";
        this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);
        this.ui.el.appendChild(this.ui.back);
        this.ui.el.appendChild(this.ui.front);
        return this;
      };
      f41.prototype.stylize = function () {
        if (this.options.dataOnly) {
          return this;
        }
        var v71 = this.options.fadeTime + "ms";
        var v72 = vO5.getVendorStyle("borderRadius", "50%");
        var v73 = vO5.getTransitionStyle("transition", "opacity", v71);
        var vO9 = {
          el: {
            position: "absolute",
            opacity: this.options.restOpacity,
            display: "block",
            zIndex: 999
          },
          back: {
            position: "absolute",
            display: "block",
            width: this.options.size + "px",
            height: this.options.size + "px",
            marginLeft: -this.options.size / 2 + "px",
            marginTop: -this.options.size / 2 + "px",
            background: this.options.color,
            opacity: ".5"
          },
          front: {
            width: this.options.size / 2 + "px",
            height: this.options.size / 2 + "px",
            position: "absolute",
            display: "block",
            marginLeft: -this.options.size / 4 + "px",
            marginTop: -this.options.size / 4 + "px",
            background: this.options.color,
            opacity: ".5"
          }
        };
        vO5.extend(vO9.el, v73);
        vO5.extend(vO9.back, v72);
        vO5.extend(vO9.front, v72);
        this.applyStyles(vO9);
        return this;
      };
      f41.prototype.applyStyles = function (p127) {
        for (var v74 in this.ui) {
          if (this.ui.hasOwnProperty(v74)) {
            for (var v75 in p127[v74]) {
              this.ui[v74].style[v75] = p127[v74][v75];
            }
          }
        }
        return this;
      };
      f41.prototype.addToDom = function () {
        if (this.options.dataOnly || document.body.contains(this.ui.el)) {
          return this;
        }
        this.options.zone.appendChild(this.ui.el);
        return this;
      };
      f41.prototype.removeFromDom = function () {
        if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
          return this;
        }
        this.options.zone.removeChild(this.ui.el);
        return this;
      };
      f41.prototype.destroy = function () {
        clearTimeout(this.removeTimeout);
        clearTimeout(this.showTimeout);
        clearTimeout(this.restTimeout);
        this.trigger("destroyed", this.instance);
        this.removeFromDom();
        this.off();
      };
      f41.prototype.show = function (p128) {
        var vThis8 = this;
        if (vThis8.options.dataOnly) {
          return vThis8;
        }
        clearTimeout(vThis8.removeTimeout);
        clearTimeout(vThis8.showTimeout);
        clearTimeout(vThis8.restTimeout);
        vThis8.addToDom();
        vThis8.restCallback();
        setTimeout(function () {
          vThis8.ui.el.style.opacity = 1;
        }, 0);
        vThis8.showTimeout = setTimeout(function () {
          vThis8.trigger("shown", vThis8.instance);
          if (typeof p128 === "function") {
            p128.call(this);
          }
        }, vThis8.options.fadeTime);
        return vThis8;
      };
      f41.prototype.hide = function (p129) {
        var vThis9 = this;
        if (vThis9.options.dataOnly) {
          return vThis9;
        }
        vThis9.ui.el.style.opacity = vThis9.options.restOpacity;
        clearTimeout(vThis9.removeTimeout);
        clearTimeout(vThis9.showTimeout);
        clearTimeout(vThis9.restTimeout);
        vThis9.removeTimeout = setTimeout(function () {
          var v76 = vThis9.options.mode === "dynamic" ? "none" : "block";
          vThis9.ui.el.style.display = v76;
          if (typeof p129 === "function") {
            p129.call(vThis9);
          }
          vThis9.trigger("hidden", vThis9.instance);
        }, vThis9.options.fadeTime);
        if (vThis9.options.restJoystick) {
          vThis9.restPosition();
        }
        return vThis9;
      };
      f41.prototype.restPosition = function (p130) {
        var vThis10 = this;
        vThis10.frontPosition = {
          x: 0,
          y: 0
        };
        var v77 = vThis10.options.fadeTime + "ms";
        var vO10 = {};
        vO10.front = vO5.getTransitionStyle("transition", ["top", "left"], v77);
        var vO11 = {
          front: {}
        };
        vO11.front = {
          left: vThis10.frontPosition.x + "px",
          top: vThis10.frontPosition.y + "px"
        };
        vThis10.applyStyles(vO10);
        vThis10.applyStyles(vO11);
        vThis10.restTimeout = setTimeout(function () {
          if (typeof p130 === "function") {
            p130.call(vThis10);
          }
          vThis10.restCallback();
        }, vThis10.options.fadeTime);
      };
      f41.prototype.restCallback = function () {
        var vThis11 = this;
        var vO12 = {};
        vO12.front = vO5.getTransitionStyle("transition", "none", "");
        vThis11.applyStyles(vO12);
        vThis11.trigger("rested", vThis11.instance);
      };
      f41.prototype.resetDirection = function () {
        this.direction = {
          x: false,
          y: false,
          angle: false
        };
      };
      f41.prototype.computeDirection = function (p131) {
        var v78 = p131.angle.radian;
        var v79 = Math.PI / 4;
        var v80 = Math.PI / 2;
        var v81;
        var v82;
        var v83;
        if (v78 > v79 && v78 < v79 * 3 && !p131.lockX) {
          v81 = "up";
        } else if (v78 > -v79 && v78 <= v79 && !p131.lockY) {
          v81 = "left";
        } else if (v78 > -v79 * 3 && v78 <= -v79 && !p131.lockX) {
          v81 = "down";
        } else if (!p131.lockY) {
          v81 = "right";
        }
        if (!p131.lockY) {
          if (v78 > -v80 && v78 < v80) {
            v82 = "left";
          } else {
            v82 = "right";
          }
        }
        if (!p131.lockX) {
          if (v78 > 0) {
            v83 = "up";
          } else {
            v83 = "down";
          }
        }
        if (p131.force > this.options.threshold) {
          var vO13 = {};
          for (var v85 in this.direction) {
            if (this.direction.hasOwnProperty(v85)) {
              vO13[v85] = this.direction[v85];
            }
          }
          var vO14 = {};
          this.direction = {
            x: v82,
            y: v83,
            angle: v81
          };
          p131.direction = this.direction;
          for (var v85 in vO13) {
            if (vO13[v85] === this.direction[v85]) {
              vO14[v85] = true;
            }
          }
          if (vO14.x && vO14.y && vO14.angle) {
            return p131;
          }
          if (!vO14.x || !vO14.y) {
            this.trigger("plain", p131);
          }
          if (!vO14.x) {
            this.trigger("plain:" + v82, p131);
          }
          if (!vO14.y) {
            this.trigger("plain:" + v83, p131);
          }
          if (!vO14.angle) {
            this.trigger("dir dir:" + v81, p131);
          }
        }
        return p131;
      };
      function f42(p132, p133) {
        var vThis12 = this;
        vThis12.nipples = [];
        vThis12.idles = [];
        vThis12.actives = [];
        vThis12.ids = [];
        vThis12.pressureIntervals = {};
        vThis12.manager = p132;
        vThis12.id = f42.id;
        f42.id += 1;
        vThis12.defaults = {
          zone: document.body,
          multitouch: false,
          maxNumberOfNipples: 10,
          mode: "dynamic",
          position: {
            top: 0,
            left: 0
          },
          catchDistance: 200,
          size: 100,
          threshold: 0.1,
          color: "white",
          fadeTime: 250,
          dataOnly: false,
          restJoystick: true,
          restOpacity: 0.5,
          lockX: false,
          lockY: false,
          dumbBox: null
        };
        vThis12.config(p133);
        if (vThis12.options.mode === "static" || vThis12.options.mode === "semi") {
          vThis12.options.multitouch = false;
        }
        if (!vThis12.options.multitouch) {
          vThis12.options.maxNumberOfNipples = 1;
        }
        vThis12.updateBox();
        vThis12.prepareNipples();
        vThis12.bindings();
        vThis12.begin();
        return vThis12.nipples;
      }
      f42.prototype = new f40();
      f42.constructor = f42;
      f42.id = 0;
      f42.prototype.prepareNipples = function () {
        var vThis13 = this;
        var v86 = vThis13.nipples;
        v86.on = vThis13.on.bind(vThis13);
        v86.off = vThis13.off.bind(vThis13);
        v86.options = vThis13.options;
        v86.destroy = vThis13.destroy.bind(vThis13);
        v86.ids = vThis13.ids;
        v86.id = vThis13.id;
        v86.processOnMove = vThis13.processOnMove.bind(vThis13);
        v86.processOnEnd = vThis13.processOnEnd.bind(vThis13);
        v86.get = function (p134) {
          if (p134 === undefined) {
            return v86[0];
          }
          for (var vLN012 = 0, v87 = v86.length; vLN012 < v87; vLN012 += 1) {
            if (v86[vLN012].identifier === p134) {
              return v86[vLN012];
            }
          }
          return false;
        };
      };
      f42.prototype.bindings = function () {
        var vThis14 = this;
        vThis14.bindEvt(vThis14.options.zone, "start");
        vThis14.options.zone.style.touchAction = "none";
        vThis14.options.zone.style.msTouchAction = "none";
      };
      f42.prototype.begin = function () {
        var vThis15 = this;
        var v88 = vThis15.options;
        if (v88.mode === "static") {
          var v89 = vThis15.createNipple(v88.position, vThis15.manager.getIdentifier());
          v89.add();
          vThis15.idles.push(v89);
        }
      };
      f42.prototype.createNipple = function (p135, p136) {
        var vThis16 = this;
        var v90 = vO5.getScroll();
        var vO15 = {};
        var v91 = vThis16.options;
        if (p135.x && p135.y) {
          vO15 = {
            x: p135.x - (v90.x + vThis16.box.left),
            y: p135.y - (v90.y + vThis16.box.top)
          };
        } else if (p135.top || p135.right || p135.bottom || p135.left) {
          var v92 = document.createElement("DIV");
          v92.style.display = "hidden";
          v92.style.top = p135.top;
          v92.style.right = p135.right;
          v92.style.bottom = p135.bottom;
          v92.style.left = p135.left;
          v92.style.position = "absolute";
          v91.zone.appendChild(v92);
          var v93 = v92.getBoundingClientRect();
          v91.zone.removeChild(v92);
          vO15 = p135;
          p135 = {
            x: (v91.dumbBox ? v91.dumbBox.left : v93.left) + v90.x,
            y: (v91.dumbBox ? v91.dumbBox.top : v93.top) + v90.y
          };
        }
        var v94 = new f41(vThis16, {
          color: v91.color,
          size: v91.size,
          threshold: v91.threshold,
          fadeTime: v91.fadeTime,
          dataOnly: v91.dataOnly,
          restJoystick: v91.restJoystick,
          restOpacity: v91.restOpacity,
          mode: v91.mode,
          identifier: p136,
          position: p135,
          zone: v91.zone,
          frontPosition: {
            x: 0,
            y: 0
          }
        });
        if (!v91.dataOnly) {
          vO5.applyPosition(v94.ui.el, vO15);
          vO5.applyPosition(v94.ui.front, v94.frontPosition);
        }
        vThis16.nipples.push(v94);
        vThis16.trigger("added " + v94.identifier + ":added", v94);
        vThis16.manager.trigger("added " + v94.identifier + ":added", v94);
        vThis16.bindNipple(v94);
        return v94;
      };
      f42.prototype.updateBox = function () {
        var vThis17 = this;
        vThis17.box = vThis17.options.zone.getBoundingClientRect();
      };
      f42.prototype.bindNipple = function (p137) {
        var vThis18 = this;
        var v95;
        var v_0x43c9cd = function f43(p138, p139) {
          v95 = p138.type + " " + p139.id + ":" + p138.type;
          vThis18.trigger(v95, p139);
        };
        p137.on("destroyed", vThis18.onDestroyed.bind(vThis18));
        p137.on("shown hidden rested dir plain", v_0x43c9cd);
        p137.on("dir:up dir:right dir:down dir:left", v_0x43c9cd);
        p137.on("plain:up plain:right plain:down plain:left", v_0x43c9cd);
      };
      f42.prototype.pressureFn = function (p140, p141, p142) {
        var vThis19 = this;
        var vLN013 = 0;
        clearInterval(vThis19.pressureIntervals[p142]);
        vThis19.pressureIntervals[p142] = setInterval(function () {
          var v96 = p140.force || p140.pressure || p140.webkitForce || 0;
          if (v96 !== vLN013) {
            p141.trigger("pressure", v96);
            vThis19.trigger("pressure " + p141.identifier + ":pressure", v96);
            vLN013 = v96;
          }
        }.bind(vThis19), 100);
      };
      f42.prototype.onstart = function (p143) {
        var vThis20 = this;
        var v97 = vThis20.options;
        p143 = vO5.prepareEvent(p143);
        vThis20.updateBox();
        var v_0x171019 = function f44(p144) {
          if (vThis20.actives.length < v97.maxNumberOfNipples) {
            vThis20.processOnStart(p144);
          }
        };
        vO5.map(p143, v_0x171019);
        vThis20.manager.bindDocument();
        return false;
      };
      f42.prototype.processOnStart = function (p145) {
        var vThis21 = this;
        var v98 = vThis21.options;
        var v99;
        var v100 = vThis21.manager.getIdentifier(p145);
        var v101 = p145.force || p145.pressure || p145.webkitForce || 0;
        var vO16 = {
          x: p145.pageX,
          y: p145.pageY
        };
        var v102 = vThis21.getOrCreate(v100, vO16);
        if (v102.identifier !== v100) {
          vThis21.manager.removeIdentifier(v102.identifier);
        }
        v102.identifier = v100;
        var v_0x1d02e5 = function f45(p146) {
          p146.trigger("start", p146);
          vThis21.trigger("start " + p146.id + ":start", p146);
          p146.show();
          if (v101 > 0) {
            vThis21.pressureFn(p145, p146, p146.identifier);
          }
          vThis21.processOnMove(p145);
        };
        if ((v99 = vThis21.idles.indexOf(v102)) >= 0) {
          vThis21.idles.splice(v99, 1);
        }
        vThis21.actives.push(v102);
        vThis21.ids.push(v102.identifier);
        if (v98.mode !== "semi") {
          v_0x1d02e5(v102);
        } else {
          var v103 = vO5.distance(vO16, v102.position);
          if (v103 <= v98.catchDistance) {
            v_0x1d02e5(v102);
          } else {
            v102.destroy();
            vThis21.processOnStart(p145);
            return;
          }
        }
        return v102;
      };
      f42.prototype.getOrCreate = function (p147, p148) {
        var vThis22 = this;
        var v104 = vThis22.options;
        var v105;
        if (/(semi|static)/.test(v104.mode)) {
          v105 = vThis22.idles[0];
          if (v105) {
            vThis22.idles.splice(0, 1);
            return v105;
          }
          if (v104.mode === "semi") {
            return vThis22.createNipple(p148, p147);
          }
          console.warn("Coudln't find the needed nipple.");
          return false;
        }
        v105 = vThis22.createNipple(p148, p147);
        return v105;
      };
      f42.prototype.processOnMove = function (p149) {
        var vThis23 = this;
        var v106 = vThis23.options;
        var v107 = vThis23.manager.getIdentifier(p149);
        var v108 = vThis23.nipples.get(v107);
        if (!v108) {
          console.error("Found zombie joystick with ID " + v107);
          vThis23.manager.removeIdentifier(v107);
          return;
        }
        v108.identifier = v107;
        var v109 = v108.options.size / 2;
        var vO17 = {
          x: p149.pageX,
          y: p149.pageY
        };
        var v110 = vO5.distance(vO17, v108.position);
        var v111 = vO5.angle(vO17, v108.position);
        var v112 = vO5.radians(v111);
        var v113 = v110 / v109;
        if (v110 > v109) {
          v110 = v109;
          vO17 = vO5.findCoord(v108.position, v110, v111);
        }
        var v114 = vO17.x - v108.position.x;
        var v115 = vO17.y - v108.position.y;
        if (v106.lockX) {
          v115 = 0;
        }
        if (v106.lockY) {
          v114 = 0;
        }
        v108.frontPosition = {
          x: v114,
          y: v115
        };
        if (!v106.dataOnly) {
          vO5.applyPosition(v108.ui.front, v108.frontPosition);
        }
        var vO18 = {
          identifier: v108.identifier,
          position: vO17,
          force: v113,
          pressure: p149.force || p149.pressure || p149.webkitForce || 0,
          distance: v110,
          angle: {
            radian: v112,
            degree: v111
          },
          instance: v108,
          lockX: v106.lockX,
          lockY: v106.lockY
        };
        vO18 = v108.computeDirection(vO18);
        vO18.angle = {
          radian: vO5.radians(180 - v111),
          degree: 180 - v111
        };
        v108.trigger("move", vO18);
        vThis23.trigger("move " + v108.id + ":move", vO18);
      };
      f42.prototype.processOnEnd = function (p150) {
        var vThis24 = this;
        var v116 = vThis24.options;
        var v117 = vThis24.manager.getIdentifier(p150);
        var v118 = vThis24.nipples.get(v117);
        var v119 = vThis24.manager.removeIdentifier(v118.identifier);
        if (!v118) {
          return;
        }
        if (!v116.dataOnly) {
          v118.hide(function () {
            if (v116.mode === "dynamic") {
              v118.trigger("removed", v118);
              vThis24.trigger("removed " + v118.id + ":removed", v118);
              vThis24.manager.trigger("removed " + v118.id + ":removed", v118);
              v118.destroy();
            }
          });
        }
        clearInterval(vThis24.pressureIntervals[v118.identifier]);
        v118.resetDirection();
        v118.trigger("end", v118);
        vThis24.trigger("end " + v118.id + ":end", v118);
        if (vThis24.ids.indexOf(v118.identifier) >= 0) {
          vThis24.ids.splice(vThis24.ids.indexOf(v118.identifier), 1);
        }
        if (vThis24.actives.indexOf(v118) >= 0) {
          vThis24.actives.splice(vThis24.actives.indexOf(v118), 1);
        }
        if (/(semi|static)/.test(v116.mode)) {
          vThis24.idles.push(v118);
        } else if (vThis24.nipples.indexOf(v118) >= 0) {
          vThis24.nipples.splice(vThis24.nipples.indexOf(v118), 1);
        }
        vThis24.manager.unbindDocument();
        if (/(semi|static)/.test(v116.mode)) {
          vThis24.manager.ids[v119.id] = v119.identifier;
        }
      };
      f42.prototype.onDestroyed = function (p151, p152) {
        var vThis25 = this;
        if (vThis25.nipples.indexOf(p152) >= 0) {
          vThis25.nipples.splice(vThis25.nipples.indexOf(p152), 1);
        }
        if (vThis25.actives.indexOf(p152) >= 0) {
          vThis25.actives.splice(vThis25.actives.indexOf(p152), 1);
        }
        if (vThis25.idles.indexOf(p152) >= 0) {
          vThis25.idles.splice(vThis25.idles.indexOf(p152), 1);
        }
        if (vThis25.ids.indexOf(p152.identifier) >= 0) {
          vThis25.ids.splice(vThis25.ids.indexOf(p152.identifier), 1);
        }
        vThis25.manager.removeIdentifier(p152.identifier);
        vThis25.manager.unbindDocument();
      };
      f42.prototype.destroy = function () {
        var vThis26 = this;
        vThis26.unbindEvt(vThis26.options.zone, "start");
        vThis26.nipples.forEach(function (p153) {
          p153.destroy();
        });
        for (var v120 in vThis26.pressureIntervals) {
          if (vThis26.pressureIntervals.hasOwnProperty(v120)) {
            clearInterval(vThis26.pressureIntervals[v120]);
          }
        }
        vThis26.trigger("destroyed", vThis26.nipples);
        vThis26.manager.unbindDocument();
        vThis26.off();
      };
      function f46(p154) {
        var vThis27 = this;
        vThis27.ids = {};
        vThis27.index = 0;
        vThis27.collections = [];
        vThis27.config(p154);
        vThis27.prepareCollections();
        var v121;
        vO5.bindEvt(window, "resize", function (p155) {
          clearTimeout(v121);
          v121 = setTimeout(function () {
            var v122;
            var v123 = vO5.getScroll();
            vThis27.collections.forEach(function (p156) {
              p156.forEach(function (p157) {
                v122 = p157.el.getBoundingClientRect();
                p157.position = {
                  x: v123.x + v122.left,
                  y: v123.y + v122.top
                };
              });
            });
          }, 100);
        });
        return vThis27.collections;
      }
      ;
      f46.prototype = new f40();
      f46.constructor = f46;
      f46.prototype.prepareCollections = function () {
        var vThis28 = this;
        vThis28.collections.create = vThis28.create.bind(vThis28);
        vThis28.collections.on = vThis28.on.bind(vThis28);
        vThis28.collections.off = vThis28.off.bind(vThis28);
        vThis28.collections.destroy = vThis28.destroy.bind(vThis28);
        vThis28.collections.get = function (p158) {
          var v124;
          vThis28.collections.every(function (p159) {
            if (v124 = p159.get(p158)) {
              return false;
            }
            return true;
          });
          return v124;
        };
      };
      f46.prototype.create = function (p160) {
        return this.createCollection(p160);
      };
      f46.prototype.createCollection = function (p161) {
        var vThis29 = this;
        var v125 = new f42(vThis29, p161);
        vThis29.bindCollection(v125);
        vThis29.collections.push(v125);
        return v125;
      };
      f46.prototype.bindCollection = function (p162) {
        var vThis30 = this;
        var v126;
        var v_0x12524f = function f47(p163, p164) {
          v126 = p163.type + " " + p164.id + ":" + p163.type;
          vThis30.trigger(v126, p164);
        };
        p162.on("destroyed", vThis30.onDestroyed.bind(vThis30));
        p162.on("shown hidden rested dir plain", v_0x12524f);
        p162.on("dir:up dir:right dir:down dir:left", v_0x12524f);
        p162.on("plain:up plain:right plain:down plain:left", v_0x12524f);
      };
      f46.prototype.bindDocument = function () {
        var vThis31 = this;
        if (!vThis31.binded) {
          vThis31.bindEvt(document, "move").bindEvt(document, "end");
          vThis31.binded = true;
        }
      };
      f46.prototype.unbindDocument = function (p165) {
        var vThis32 = this;
        if (!Object.keys(vThis32.ids).length || p165 === true) {
          vThis32.unbindEvt(document, "move").unbindEvt(document, "end");
          vThis32.binded = false;
        }
      };
      f46.prototype.getIdentifier = function (p166) {
        var v127;
        if (!p166) {
          v127 = this.index;
        } else {
          v127 = p166.identifier === undefined ? p166.pointerId : p166.identifier;
          if (v127 === undefined) {
            v127 = this.latest || 0;
          }
        }
        if (this.ids[v127] === undefined) {
          this.ids[v127] = this.index;
          this.index += 1;
        }
        this.latest = v127;
        return this.ids[v127];
      };
      f46.prototype.removeIdentifier = function (p167) {
        var vO19 = {};
        for (var v128 in this.ids) {
          if (this.ids[v128] === p167) {
            vO19.id = v128;
            vO19.identifier = this.ids[v128];
            delete this.ids[v128];
            break;
          }
        }
        return vO19;
      };
      f46.prototype.onmove = function (p168) {
        var vThis33 = this;
        vThis33.onAny("move", p168);
        return false;
      };
      f46.prototype.onend = function (p169) {
        var vThis34 = this;
        vThis34.onAny("end", p169);
        return false;
      };
      f46.prototype.oncancel = function (p170) {
        var vThis35 = this;
        vThis35.onAny("end", p170);
        return false;
      };
      f46.prototype.onAny = function (p171, p172) {
        var vThis36 = this;
        var v129;
        var v130 = "processOn" + p171.charAt(0).toUpperCase() + p171.slice(1);
        p172 = vO5.prepareEvent(p172);
        var v_0x3304ae = function f48(p173, p174, p175) {
          if (p175.ids.indexOf(p174) >= 0) {
            p175[v130](p173);
            p173._found_ = true;
          }
        };
        var v_0x5500d6 = function f49(p176) {
          v129 = vThis36.getIdentifier(p176);
          vO5.map(vThis36.collections, v_0x3304ae.bind(null, p176, v129));
          if (!p176._found_) {
            vThis36.removeIdentifier(v129);
          }
        };
        vO5.map(p172, v_0x5500d6);
        return false;
      };
      f46.prototype.destroy = function () {
        var vThis37 = this;
        vThis37.unbindDocument(true);
        vThis37.ids = {};
        vThis37.index = 0;
        vThis37.collections.forEach(function (p177) {
          p177.destroy();
        });
        vThis37.off();
      };
      f46.prototype.onDestroyed = function (p178, p179) {
        var vThis38 = this;
        if (vThis38.collections.indexOf(p179) < 0) {
          return false;
        }
        vThis38.collections.splice(vThis38.collections.indexOf(p179), 1);
      };
      var v131 = new f46();
      return {
        create: function f50(p180) {
          return v131.create(p180);
        },
        factory: v131
      };
    });
    var v132 = false;
    var v133 = true;
    var vLN2 = 2;
    var v134 = null;
    var vLN12 = 1;
    var vO20 = {};
    var vLN014 = 0;
    window.createLine = function (p181, p182) {
      var v135 = new PIXI.Graphics();
      var vLSff0000 = "#ff0000";
      if (bbs.laserColor && typeof bbs.laserColor === "string") {
        vLSff0000 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
      }
      v135.lineStyle(bbs.laser || 0.2, vLSff0000, 1);
      v135.moveTo(0, 0);
      v135.lineTo(0, 0);
      v135.zIndex = 10001;
      v135.name = "lineHS";
      v135.alpha = 0;
      v135.filters = [new PIXI.filters.BlurFilter(5)];
      p181.addChild(v135);
    };
    window.movimentaLinha = function () {
      try {
        if (!_wwc._anApp.dh.ch.Nm) {
          return;
        }
        var v136 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
        var v137 = _wwc._anApp.dh.ch.Nm.oc;
        var v138 = v137.position.x;
        var v139 = v137.position.y;
        var vLSff00002 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          vLSff00002 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        v136.lineStyle(bbs.laser || 0.2, vLSff00002, 1);
        v136.clear();
        v136.lineStyle(bbs.laser || 0.1, vLSff00002, 1);
        v136.moveTo(0, 0);
        v136.lineTo(v138, v139);
        if (bbs.laserActive && _wwc.ismobile) {
          v136.alpha = 0.3;
        }
        v136.filters = [new PIXI.filters.BlurFilter(5)];
      } catch (e4) {
        console.error(e4);
      }
    };
    window.gerarCodigoUnico = function () {
      var v140 = bbs.userId || "";
      var v141 = v140.match(/\d/g);
      var v142 = (v141 || []).reduce(function (p183, p184) {
        return p183 + parseInt(p184, 10);
      }, 0);
      var vLS0123456789ABCDEFGHIJ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var vLN5 = 5;
      var vLS2 = "";
      var vLS3 = "";
      for (var vLN015 = 0; vLN015 < vLN5; vLN015++) {
        var v143 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
        vLS2 += vLS0123456789ABCDEFGHIJ.charAt(v143);
        var v144 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
        vLS3 += vLS0123456789ABCDEFGHIJ.charAt(v144);
      }
      return "ROOM" + vLS3 + "_" + v142 + "_" + vLS2;
    };
    var vO21 = {
      sao: "wss://nycsam01.wormworld.io",
      dal: "wss://nycsam01.wormworld.io",
      hil: "wss://nycsam01.wormworld.io",
      vin: "wss://nycsam01.wormworld.io",
      fra: "wss://fraceu01.wormworld.io",
      gra: "wss://fraceu01.wormworld.io",
      dxb: "wss://fraceu01.wormworld.io",
      sin: "wss://fraceu01.wormworld.io",
      tok: "wss://fraceu01.wormworld.io",
      local: "ws://localhost:5001"
    };
    var vO22 = {
      fra: [30055, 31770, 30106, 30339, 30106],
      gra: [32054, 31038],
      sin: [31764, 30165, 30703, 31211, 31026, 32677, 31211, 31203],
      tok: [30171, 31091],
      sao: [30208, 31770, 31533, 30208, 30327, 30786, 32609],
      hil: [30162, 30042, 32403, 30296],
      dal: [31091, 31230, 32584, 31750],
      dxb: [32703, 31975, 32650],
      vin: [32368]
    };
    var vA3 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
    var vO23 = {
      loaded: false,
      sprites: {},
      textures: {},
      resources: {}
    };
    $("#mm-params-nickname").attr("maxlength", vLN18);
    var vO24 = {
      ref: [],
      hs: {},
      fxdo: function f51(p185) {
        if (bbs.activeSounds2 && bbs.start) {
          if (!vO24[p185].playing()) {
            vO24[p185].play();
          }
        }
      },
      fxAux: function f52(p186, p187) {
        if (p187 === 1 && !vO24.fxStatus.top1) {
          vO24.fxStatus.top1 = true;
          vO24.fxdo("top1");
        }
        return p186;
      },
      fxStatus: {
        top1: false
      }
    };
    window._wwcio = {
      message: null,
      obj: {},
      player: {},
      socket: false,
      connecting: false,
      join: function f53() {},
      update: function f54() {},
      leave: function f55() {},
      leaderboardUpdated: function f56(p188, p189) {
        v_0x3f420f(p188, p189);
      },
      sendLocation: function f57() {},
      findFriend: function f58() {},
      close: function f59() {},
      set: function f60(p190) {
        return p190;
      },
      friend: null,
      myLocation: {},
      crown: null
    };
    window._wwc = {
      deadPositionMap: function f61() {
        var v145 = new PIXI.Text("X", _wwc.fontStyleMap());
        v145.position.x = _wwc.memory.positionOfDead.x;
        v145.position.y = _wwc.memory.positionOfDead.y;
        _wwc._anApp.og.af.ng.Tg.addChild(v145);
        var vLN016 = 0;
        var vSetInterval = setInterval(function () {
          vLN016 = !vLN016;
          v145.alpha = vLN016;
        }, 500);
        var vSetTimeout = setTimeout(function () {
          clearInterval(vSetInterval);
          if (!_wwc._anApp.og.af.ng.Tg) {
            return;
          }
          _wwc._anApp.og.af.ng.Tg.removeChild(v145);
          v145.destroy();
        }, 60000);
        _wwc.removeDeadPositionMap = function () {
          clearInterval(vSetInterval);
          clearTimeout(vSetTimeout);
          if (!_wwc._anApp.og.af.ng.Tg) {
            return;
          }
          _wwc._anApp.og.af.ng.Tg.removeChild(v145);
          if (v145 && v145.destroy) {
            v145.destroy();
          }
        };
      },
      fontStyleMap: function f62(p191) {
        return {
          fontFamily: "Arial",
          fontSize: "12px",
          fill: "red",
          align: "center",
          fontWeight: "bold"
        };
      },
      startGame: function f63() {
        if (_wwc.memory.positionOfDead) {
          var v146 = _wwc.deadPositionMap();
        }
      },
      stopGame: function f64() {
        var v147;
        var v148;
        _wwcio.close();
        _wwcio.findFriendActived = false;
        if (!_wwcio.myLocation) {
          return;
        }
        _wwc.memory.positionOfDead = {
          x: (v147 = _wwcio.myLocation) === null || v147 === undefined || (v147 = v147.position) === null || v147 === undefined ? undefined : v147.x,
          y: (v148 = _wwcio.myLocation) === null || v148 === undefined || (v148 = v148.position) === null || v148 === undefined ? undefined : v148.y
        };
        if (_wwc.removeDeadPositionMap) {
          _wwc.removeDeadPositionMap();
        }
      },
      memory: {},
      mySkin: null,
      customPaths: {
        map: null
      },
      _ass_type: [],
      testSkinMod: function f65(p192) {
        var v149 = typeof p192 === "string";
        p192 = parseInt(p192);
        if (v149 && isNaN(p192)) {
          return false;
        } else {
          return parseInt(p192) >= 399 && parseInt(p192) < 8999;
        }
      },
      testWear: function f66(p193) {
        var v150 = typeof p193 === "string";
        p193 = parseInt(p193);
        if (v150 && isNaN(p193)) {
          return false;
        } else {
          return parseInt(p193) >= 399 && parseInt(p193) < 8999;
        }
      },
      isNumberValid: function f67(p194) {
        return p194 !== "" && p194 !== null && p194 !== undefined && !isNaN(p194);
      },
      validInputWear: function f68(p195) {
        var v151 = _wwc.testWear(p195);
        var v152 = typeof skinId === "string";
        if (!v151 && !v152) {
          return p195;
        }
        return 0;
      },
      validInput: function f69(p196) {
        var v153 = _wwc.testSkinMod(p196);
        var v154 = typeof p196 === "string";
        if (!v153 && !v154) {
          return p196;
        }
        try {
          var v155 = $("#inputReplaceSkin").val();
          return encodeURI(_wwc.isNumberValid(v155) ? v155 : bbs.idReplaceSkin || 35);
        } catch (e5) {
          return encodeURI(35);
        }
      },
      fullscreen: null,
      joystick: function f70(p197) {
        var vO25 = {
          checked: true,
          color: "red",
          mode: "dynamic",
          positionMode: "L",
          size: 100,
          pxy: 100
        };
        return vO25;
      },
      load_con: function f71() {
        $(".selecionar-sala-v2").click(function (p198) {
          p198.preventDefault();
          var v156 = $(this).attr("data-con") || bbs.con;
          var v157 = $(this).attr("data-type");
          w2c2020.addRoom($(this).attr("data-room"));
          vO30.dh.Zp = function (p199, p200, p201) {
            bbs.con = p201 ? p199 : v156 || p199;
            _wwc.Zp(bbs.con, p200);
          };
          vO30.Pn();
        });
      },
      fnSaveGame: function f72() {
        var v$ = $("#saveGame");
        v$.prop("checked", bbs.saveGame);
        v$.change(function () {
          if (!this.checked) {
            var vConfirm = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù� Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
            $(this).prop("checked", !vConfirm);
            if (!this.checked) {
              _wwc.fnSetCounts("zerar");
            }
          }
          bbs.saveGame = this.checked;
          w2c2020.hsTotal.alpha = this.checked ? 1 : 0;
          w2c2020.killTotal.alpha = this.checked ? 1 : 0;
          localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
        });
      },
      fnSetCounts: function f73(p202, p203) {
        var v_0xfa27e0 = function f74(p204, p205, p206, p207) {
          _wwc.setCountGame(p204, p205, p206, p207);
        };
        if (p202 === "count") {
          bbs.kill = (bbs.kill || 0) + (p203 ? 0 : 1);
          bbs.headshot = (bbs.headshot || 0) + (p203 ? 1 : 0);
          bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
          bbs.tkill = bbs.tkill + (p203 ? 0 : 1);
          bbs.theadshot = bbs.theadshot + (p203 ? 1 : 0);
        }
        if (p202 === "open") {
          bbs.kill = 0;
          bbs.headshot = 0;
          if (bbs.saveGame) {}
        }
        if (p202 === "close") {
          if (bbs.saveGame) {
            bbs.died = (bbs.died || 0) + 1;
          } else {
            _wwc.fnSetCounts("zerar");
          }
        }
        if (p202 === "zerar") {
          bbs.kill = 0;
          bbs.tkill = 0;
          bbs.headshot = 0;
          bbs.theadshot = 0;
          bbs.died = 0;
        }
        v_0xfa27e0(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
      },
      setCountGame: function f75(p208, p209, p210, p211) {
        if (!bbs.saveGame) {
          w2c2020.hsTotal.alpha = 0;
          w2c2020.killTotal.alpha = 0;
        }
        w2c2020.hs.text = p209;
        w2c2020.hsTotal.text = p211;
        w2c2020.kill.text = p208;
        w2c2020.killTotal.text = p210;
      },
      ismobile: f94(),
      Zp: undefined
    };
    window.bbs = {
      version: 0,
      headshot: 0,
      kill: 0,
      theadshot: 0,
      tkill: 0,
      died: 0,
      start: 0,
      HOL: 0,
      tk: null,
      country: null,
      finish: 0,
      saveGame: false,
      idReplaceSkin: 34,
      mobile: false,
      joystick: null,
      configJoystick: {
        buttons: {
          respawn: {
            label: "RESPAWN",
            labelAbbreviation: "RP",
            active: false,
            action: "mbf.mbfass6()"
          },
          lobby: {
            label: "LOBBY",
            labelAbbreviation: "L",
            active: true,
            action: "mbf.mbfass5()"
          },
          rotate: {
            label: "ROTATE",
            labelAbbreviation: "A",
            active: true,
            action: "mbf.mbfass4()"
          },
          snail: {
            label: "SNAIL",
            labelAbbreviation: "B",
            active: true,
            action: "mbf.mbfass3()"
          },
          search: {
            label: "SEARCH",
            labelAbbreviation: "SE",
            active: false,
            action: "mbf.mbfass0()"
          },
          swap: {
            label: "SWAP",
            labelAbbreviation: "SW",
            active: false,
            action: "mbf.mbf_cambiar()"
          },
          zoomplus: {
            label: "Z+",
            labelAbbreviation: "+",
            active: true,
            action: "mbf.mbfass1()"
          },
          zoomminus: {
            label: "Z-",
            labelAbbreviation: "-",
            active: true,
            action: "mbf.mbfass2()"
          },
          zoom: {
            label: "x1",
            labelAbbreviation: "x1",
            active: true,
            action: "mbf.mbfass7()"
          }
        },
        typeZoom: ["btn", "range"],
        typeCurrent: "btn",
        typeName: ["all", "abb"],
        typeCurrentName: "abb"
      },
      customJoystick: null,
      display: {
        customClock: null,
        clock: {
          x: 60,
          y: 60
        },
        top: {
          x: 225,
          y: 1
        },
        default: false,
        custom: false,
        m: {
          x: 60,
          y: 60
        },
        r: {
          x: 225,
          y: 1
        },
        ms: false
      },
      PropertyManager: {},
      acs: true,
      lr: false,
      showTophs: true,
      showRechs: true,
      con: null,
      params: "",
      arrow: true,
      activeBadLang: false,
      activeSounds2: true,
      activeZoom: true,
      activeZoomMobile: true,
      top10Show: [],
      background: null,
      backgroundIsCustom: false,
      nickname: null,
      code: null,
      configZoom: {
        limitDown: 0.25,
        step: 0.25,
        closeUp: 0.5,
        closeDown: 1
      },
      laserActive: false,
      laserColor: 16711680,
      laser: 0.1,
      displayFriends: {
        x: -10,
        y: 315,
        rotation: 0
      },
      enemyNameColor: null,
      enemyNameFontSize: null,
      novidadewormworld: 0
    };
    var v158 = localStorage.getItem("wwc_version");
    var v159 = localStorage.getItem("wwcSaveGame");
    var v160 = localStorage.getItem("wwc_config");
    v159 &&= JSON.parse(v159);
    for (var v161 in v159) {
      switch (v161) {
        case "configJoystick":
          if (!v159[v161]) {
            break;
          }
          bbs[v161] = v159[v161];
          for (var v162 in v159[v161].buttons) {
            bbs[v161].buttons[v162] = v159[v161].buttons[v162];
          }
          for (var v163 in v159[v161]) {
            bbs[v161][v163] = v159[v161][v163];
          }
          break;
        case "joystick":
          bbs[v161] = _wwc.joystick();
          for (var v164 in v159[v161]) {
            bbs[v161][v164] = v159[v161][v164];
          }
          break;
        case "display":
          for (var v165 in v159[v161]) {
            bbs[v161][v165] = v159[v161][v165];
          }
          break;
        default:
          bbs[v161] = v159[v161];
          break;
      }
    }
    if (!bbs.version || bbs.version !== vLN2) {
      bbs.version = vLN2;
      bbs.joystick = _wwc.joystick();
    }
    bbs.loading = true;
    window.respawnFn = function () {
      vO30.dh.Cn = 0;
      if (vO30.dh.mq) {
        vO30.dh.mq.close();
      }
      vO30.dh.mq = null;
      vO30.dh.Zp = function (p212, p213) {
        _wwc.Zp(bbs.con || p212, p213);
      };
      vO30.Pn();
    };
    window.lobbyFn = function () {
      vO30.dh.Cn = 0;
      if (vO30.dh.mq) {
        vO30.dh.mq.close();
      }
      vO30.dh.mq = null;
      vO30.dh.Np();
      v_0x24d305();
    };
    $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set</button>").insertAfter("#mm-store");
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
    var vLSDisplaynonepositionr = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
    if (_wwc.ismobile) {
      vLSDisplaynonepositionr = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
    }
    $("body").append(`<div id="wwc-set-view" class="base-popup-view" style="${vLSDisplaynonepositionr}"></div>`);
    var vLSAss = "ass";
    window.mbf = {};
    var v_0x3759eb = function f76(p214) {
      if (bbs.shiftKey) {
        return;
      }
      var vLN30 = 30;
      var vLN017 = 0;
      var v166 = false;
      function f77() {
        var vParseFloat = parseFloat(vO30.og.af.Bn);
        vParseFloat = (vParseFloat - 0.06) % (Math.PI * 2);
        if (vParseFloat < 0) {
          vParseFloat += Math.PI * 2;
        }
        vO30.og.af.Bn = vParseFloat.toFixed(2);
      }
      function f78(p215) {
        v132 = setInterval(function () {
          if (p215 === 1) {
            vLN017 = v166 ? vLN017 - 1 : vLN017 + 1;
            if (vLN017 % 80 === 0 && !v166) {
              vLN30 = vLN30 + 18;
              clearInterval(v132);
              f78(1);
            }
          }
          f77();
        }, vLN30);
      }
      if ((p214 == 7 || p214.key == "7") && v132 === null) {
        vO30.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
        f78(1);
        return;
      }
      if ((p214 == 8 || p214.key == "8") && v132 === null) {
        vO30.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
        f78(2);
        return;
      }
      if (v132 !== null) {
        clearInterval(v132);
        vO30.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
        v132 = null;
      }
    };
    mbf.mbfass0 = function () {
      _wwcio.findFriend();
    };
    mbf.mbfass1 = function () {
      var v167 = vO30.Ij.Rk.customer ? 100 : 10000000;
      if (vLN12 <= v167) {
        vLN12 += vLN12 > 15 ? 1 : bbs.configZoom?.step || 0.25;
      }
      vLN12 = Math.min(vLN12, v167);
      w2c2020.zoom.text = "x" + vLN12.toFixed(2);
    };
    mbf.mbfass2 = function () {
      var v168 = vLN12 - (vLN12 > 15 ? 700 : bbs.configZoom?.step);
      vLN12 = v168 < bbs.configZoom?.limitDown ? bbs.configZoom?.step : v168;
      w2c2020.zoom.text = "x" + vLN12.toFixed(2);
    };
    mbf.mbfass3 = function () {
      if (mbf.mbf_rotate) {
        v_0x3759eb(8);
        $("#mbf_rotate").css("background-color", "#000");
      } else {
        v_0x3759eb(v132 ? 0 : 8);
      }
      if (v132) {
        mbf.mbf_snail = true;
        $("#mbf_snail").css("background-color", "#156ab3");
      } else {
        mbf.mbf_snail = false;
        $("#mbf_snail").css("background-color", "#000");
      }
    };
    mbf.mbfass4 = function () {
      if (mbf.mbf_snail) {
        $("#mbf_snail").css("background-color", "#000");
        v_0x3759eb(8);
      } else {
        v_0x3759eb(v132 ? 0 : 8);
      }
      if (v132) {
        mbf.mbf_rotate = true;
        $("#mbf_rotate").css("background-color", "#156ab3");
      } else {
        mbf.mbf_rotate = false;
        $("#mbf_rotate").css("background-color", "#000");
      }
    };
    mbf.mbfass5 = function () {
      window.location.reload();
    };
    mbf.mbfass6 = function () {
      respawnFn();
    };
    mbf.mbfass7 = function () {
      vLN12 = 1;
      w2c2020.zoom.text = "x1";
    };
    mbf.mbfass9 = function (p216) {
      var v169 = vO30.Ij.Rk.customer ? 100 : 2;
      if (p216.value <= v169) {
        vLN12 = p216.value;
        w2c2020.zoom.text = "x" + p216.value;
      }
    };
    mbf.mbf_cambiar_origin = null;
    mbf.mbf_cambiar_current = 0;
    mbf.mbf_cambiar_seq = 0;
    mbf.mbf_cambiar_add = function (p217, p218) {
      if (!bbs.cambiar) {
        bbs.cambiar = {};
      }
      if (bbs.cambiar[p217]) {
        alert("Skin already exists in the list of skins to be");
        return;
      }
      bbs.cambiar[p217] = p218 || "Skin " + p217;
      alert("Skin added to the list of skins to be");
      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
      console.log(bbs.cambiar);
    };
    mbf.mbf_cambiar = function () {
      if (mbf.mbf_cambiar_origin === null) {
        mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
      }
      var v170 = Object.keys(bbs.cambiar);
      if (mbf.mbf_cambiar_seq >= v170.length) {
        mbf.mbf_cambiar_seq = 0;
      }
      for (var vLN018 = 0; vLN018 < v170.length; vLN018++) {
        mbf.mbf_cambiar_current = v170[vLN018];
        if (vLN018 === mbf.mbf_cambiar_seq) {
          mbf.mbf_cambiar_current = v170[vLN018];
          break;
        }
      }
      mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
      _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
      _wwc._anApp.dh.ch.Sm();
    };
    if (bbs.activeZoom) {
      window.onwheel = function (p219) {
        if (p219.deltaY < 0) {
          mbf.mbfass1();
        } else {
          mbf.mbfass2();
        }
      };
    }
    var v$2 = $("#idReplaceSkin");
    var vF = function () {
      var vF36 = f36(f23().m(function f79(p220, p221) {
        return f23().w(function (p222) {
          while (1) {
            switch (p222.n) {
              case 0:
                if (!p221) {
                  p222.n = 1;
                  break;
                }
                return p222.a(2);
              case 1:
                if (!p220) {
                  p220 = vO30.Ij.Rk;
                }
                console.log(p220);
                bbs.userId = p220.userId;
                p222.n = 2;
                return fetch(URLSERV_WORMWORLD + "/load-page", {
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token": p220.tk,
                    "x-uid": vLS1c45217fb5c792042bfe
                  },
                  method: "POST",
                  body: JSON.stringify(p220)
                }).then(function (p223) {
                  p223.text().then(function (p224) {
                    $(".description-text").html(p224);
                    if (p220.type === "error") {
                      $(".description-text").html(p220.msg);
                    }
                  });
                }).catch(function () {
                  $(".description-text").html("Problema de conexão.");
                });
              case 2:
                p222.n = 3;
                return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token": p220.tk,
                    "x-uid": vLS1c45217fb5c792042bfe
                  },
                  method: "POST",
                  body: JSON.stringify({
                    userId: bbs.userId
                  })
                }).then(function (p225) {
                  p225.text().then(function (p226) {
                    $("#wwc-set-view").html(p226);
                    $("#mm-wwc").click(function (p227) {
                      $("#wwc-set-view").css("display", "block");
                    });
                    _wwc.load_con();
                    _wwc.fnSaveGame();
                    _wwc.fnSetCounts("start");
                    $("#backgroundArena").change(function () {
                      var v171 = $(this).val();
                      bbs.background = v171;
                      bbs.backgroundUri = null;
                      vO30.xe._g = vO31.bgg(v171);
                      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                      _wwc._anApp.og.af.ng.Lg.$g(vO30.xe._g);
                      alert("Background changed!");
                    });
                    if (bbs.background !== undefined && bbs.background !== null) {
                      $("#backgroundArena").val(bbs.background);
                      var vParseInt = parseInt(bbs.background, 10);
                      vO30.xe._g = vO31.bgg(vParseInt);
                      _wwc._anApp.og.af.ng.Lg.$g(vO30.xe._g);
                    }
                    var v172 = _wwc.isNumberValid(bbs.idReplaceSkin);
                    if (v172) {
                      $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                    } else {
                      var v173 = $("#inputReplaceSkin").val();
                      v172 = _wwc.isNumberValid(v173);
                      bbs.idReplaceSkin = v172 ? v173 : 33;
                    }
                    if (!bbs.joystick) {
                      $("#joystick_checked").val(true);
                      $("#joystick_color").val("red");
                      $("#joystick_mode").val("dynamic");
                      $("#joystick_position").val("L");
                      $("#joystick_size").val(100);
                      $("#joystick_pxy").val(100);
                    } else {
                      $("#joystick_checked").prop("checked", bbs.joystick.checked);
                      $("#joystick_color").val(bbs.joystick.color);
                      $("#joystick_mode").val(bbs.joystick.mode);
                      $("#joystick_position").val(bbs.joystick.positionMode);
                      $("#joystick_size").val(bbs.joystick.size);
                      $("#joystick_pxy").val(bbs.joystick.pxy);
                    }
                  });
                });
              case 3:
                return p222.a(2);
            }
          }
        }, f79);
      }));
      return function f80(p228, p229) {
        return vF36.apply(this, arguments);
      };
    }();
    var v_0x5207b6 = function f81(p230) {
      if (bbs.PropertyManager) {
        if (bbs.PropertyManager.lj) {
          p230.skinId = bbs.PropertyManager.lj;
        }
        if (bbs.PropertyManager.mj) {
          p230.eyesId = bbs.PropertyManager.mj;
        }
        if (bbs.PropertyManager.nj) {
          p230.mouthId = bbs.PropertyManager.nj;
        }
        if (bbs.PropertyManager.pj) {
          p230.glassesId = bbs.PropertyManager.pj;
        }
        if (bbs.PropertyManager.oj) {
          p230.hatId = bbs.PropertyManager.oj;
        }
      }
    };
    var vF2 = function () {
      var vF362 = f36(f23().m(function f82(p231, p232) {
        var v174;
        var v175;
        var v176;
        var v177;
        return f23().w(function (p233) {
          while (1) {
            switch (p233.n) {
              case 0:
                $("#mm-params-nickname").prop("maxlength", vLN18);
                p232(p231);
                vF(p231);
                _wwc._anApp = vO30;
                _wwc._tx = function (p234) {
                  Object.keys(p234).forEach(function (p235) {
                    if (p234[p235].Yi) {
                      p234[p235].fj.nh.Cc.xc.width = p234[p235].fj.nh.Cc.xc.width + 2;
                      p234[p235].fj.nh.Cc.xc.height = p234[p235].fj.nh.Cc.xc.height + 2;
                    }
                  });
                };
                _wwc.Zp = vO30.dh.Zp;
                vO30.dh.Dq = function (p236, p237, p238 = 0) {
                  try {
                    fetch(URLSERV_WORMWORLD + "/game-connect", {
                      headers: {
                        "Content-Type": "application/json",
                        "x-access-token": vO30.Ij.Rk.tk,
                        "x-uid": vLS1c45217fb5c792042bfe
                      },
                      method: "POST",
                      body: JSON.stringify({
                        nickname: bbs.nickname,
                        code: bbs.code,
                        teamRoom: _wwcio.player.teamRoom
                      })
                    }).then(function () {
                      var vF363 = f36(f23().m(function f83(p239) {
                        var v178;
                        var v179;
                        return f23().w(function (p240) {
                          while (1) {
                            switch (p240.n) {
                              case 0:
                                p240.n = 1;
                                return p239.json();
                              case 1:
                                v178 = p240.v;
                                v179 = vO30.dh;
                                if (!v178.connected) {
                                  p240.n = 2;
                                  break;
                                }
                                alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions.");
                                v179.Cq();
                                return p240.a(2);
                              case 2:
                                v179.mq = new WebSocket(p236);
                                v179.mq.binaryType = "arraybuffer";
                                vLN12 = _wwc.ismobile ? 1.25 : 1;
                                bbs.start = new Date();
                                bbs.con = p236;
                                vO20 = {};
                                vO31.setIntervalRun = setInterval(function () {
                                  vO31.ps3();
                                }, 20);
                                v179.mq.onopen = function () {
                                  v_0x2478b4();
                                  _wwc.fnSetCounts("open");
                                  p237();
                                };
                                v179.mq.onclose = function () {
                                  v_0x24d305();
                                  _wwc.fnSetCounts("close");
                                  _wwc.stopGame();
                                  clearInterval(vO31.setIntervalRun);
                                  vO31.loadBg = false;
                                  bbs.start = 0;
                                };
                                v179.mq.onerror = function (p241) {
                                  v_0x24d305();
                                  _wwc.fnSetCounts("close");
                                  _wwc.stopGame();
                                  clearInterval(vO31.setIntervalRun);
                                  vO31.loadBg = false;
                                  bbs.start = 0;
                                  if (p238 > 4) {
                                    v179.Cq();
                                  } else {
                                    setTimeout(function () {
                                      p238++;
                                      console.log("Reconnect server");
                                      vO30.dh.Dq(bbs.con, p237, p238);
                                    }, 2000);
                                  }
                                };
                                v179.mq.onmessage = function (p242) {
                                  v179.Kp.Ph(p242.data);
                                };
                              case 3:
                                return p240.a(2);
                            }
                          }
                        }, f83);
                      }));
                      return function (p243) {
                        return vF363.apply(this, arguments);
                      };
                    }());
                  } catch (e6) {
                    console.log(e6);
                    i.Cq();
                  }
                };
                vO30.dh.Kp.Yh = function (p244, p245) {
                  v_0x24d305();
                  this.dh.Oi();
                };
                vO30.og.af.ng.Ug.Uf = function (p246) {
                  var vF3 = function () {
                    return vO31.$F.M(vO31.POGL.Sprite, function () {
                      vO31.POGL.Sprite.call(this);
                      this.sh = 0;
                    });
                  }();
                  for (var v180 in this.rh) {
                    if (p246[v180] == null || !p246[v180].hd) {
                      vO31.$F.U(this.rh[v180]);
                      delete this.rh[v180];
                    }
                  }
                  var vLN019 = 0;
                  var vLN13 = 1;
                  if (bbs.display.custom) {
                    vLN13 = window.innerWidth;
                  }
                  for (var v181 in p246) {
                    var v182 = p246[v181];
                    if (v182.hd) {
                      var v183 = this.rh[v181];
                      if (!v183) {
                        var v184 = vO30.Lc.Ub().pb(v182.nd).ub;
                        v183 = new vF3();
                        v183.texture = v184.Ea();
                        v183.width = 40;
                        v183.height = 40;
                        this.rh[v181] = v183;
                        this.addChild(v183);
                      }
                      w2c2020.setPtc(this, v181, v182.od);
                      v183.sh = v182.od;
                      v183.position.x = vLN019 + (bbs.display.custom ? bbs.display.clock.x * vLN13 : 0);
                      v183.position.y = bbs.display.custom ? bbs.display.clock.y : v183.position.y;
                      vLN019 += 40;
                    }
                  }
                };
                if (!bbs.display.customClock) {
                  vO30.og.af.ng.Tg.addChild(w2c2020.clock);
                }
                vO30.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                vO30.og.af.ng.Tg.addChild(w2c2020.containerHstop);
                w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                vO30.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
                w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                vO30.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                w2c2020.ptc = {};
                v174 = [40, 40, 40, 120, 40, 20, 40];
                for (v175 = 0; v175 < v174.length; v175++) {
                  v176 = "clock_ad" + v175;
                  w2c2020.ptc[v176] = new PIXI.Text(v174[v175], w2c2020.fontStyle["tfc" + v175]);
                  w2c2020.ptc[v176].y = 61;
                }
                w2c2020.setPtc = function (p247, p248, p249) {
                  var v185 = v174[p248] - parseInt((p249 == 0.99 ? 1 : p249) * v174[p248] / 1);
                  var v186 = "clock_ad" + p248;
                  p247.rh[p248].addChild(w2c2020.ptc[v186]);
                  if (w2c2020.ptc[v186]) {
                    w2c2020.ptc[v186].x = v185 >= 100 ? 11 : v185 >= 10 ? 18 : 26;
                    w2c2020.ptc[v186].text = v185;
                  }
                };
                v177 = vO30.og.af.ng.Eb;
                mbf.onmovepoint = function (p250) {
                  if (p250.pointerType === "touch" && !p250.isPrimary) {
                    return;
                  }
                  if (p250.clientX !== undefined) {
                    vO30.og.af.Bn = Math.atan2(p250.clientY - v177.offsetHeight * 0.5, p250.clientX - v177.offsetWidth * 0.5);
                  } else {
                    vO30.og.af.Bn = Math.atan2(p250.pageY - v177.offsetHeight * 0.5, p250.pageX - v177.offsetWidth * 0.5);
                  }
                };
                mbf.onRun = function (p251) {
                  if (p251 && p251.pointerType === "touch") {
                    return;
                  }
                  vO30.og.af.An = true;
                };
                mbf.onStop = function (p252) {
                  if (p252 && p252.pointerType === "touch") {
                    return;
                  }
                  vO30.og.af.An = false;
                };
                v177.addEventListener("pointermove", mbf.onmovepoint, true);
                v177.addEventListener("pointerdown", mbf.onRun, true);
                v177.addEventListener("pointerup", mbf.onStop, true);
                if (_wwc.ismobile) {
                  v177.addEventListener("touchstart", function (p253) {
                    if (p253 = p253 || window.event) {
                      vO30.og.af.An = p253.touches.length >= 2;
                    }
                    p253.preventDefault();
                  }, true);
                  v177.addEventListener("touchend", function (p254) {
                    if (p254 = p254 || window.event) {
                      vO30.og.af.An = p254.touches.length >= 2;
                    }
                  }, true);
                }
              case 1:
                return p233.a(2);
            }
          }
        }, f82);
      }));
      return function f84(p255, p256) {
        return vF362.apply(this, arguments);
      };
    }();
    function f85() {
      var v187 = document.createElement("div");
      v187.style.position = "fixed";
      v187.style.top = "0";
      v187.style.height = "100%";
      v187.style.width = "100%";
      v187.style.zIndex = "1000";
      v187.id = "zone_joystick";
      document.body.appendChild(v187);
    }
    function f86() {
      var v188 = document.getElementById("zone_joystick");
      if (v188) {
        v188.remove();
      }
    }
    var v_0x24d305 = function f87() {
      if (v134) {
        $("#wwc-mobile-box").remove();
        $("#wwc-mobile-box-slider").remove();
        v134.destroy();
      }
      f86();
    };
    var v_0x2478b4 = function f88() {
      try {
        var v_0x2c267b = function f89() {
          v134.on("start end", function (p257, p258) {}).on("move", function (p259, p260) {
            var v189 = p260.angle.radian <= Math.PI ? p260.angle.radian * -1 : Math.PI - (p260.angle.radian - Math.PI);
            vO30.og.af.Bn = v189;
          });
        };
        var v_0x3617f8 = function f90() {
          if (v134) {
            v134.destroy();
          }
          var vF19 = f19({}, bbs.joystick);
          var vO26 = {};
          if (bbs.customJoystick) {
            f85();
            var vF8 = f8(bbs.customJoystick.buttons);
            var v190;
            try {
              for (vF8.s(); !(v190 = vF8.n()).done;) {
                var v191 = v190.value;
                var v192 = document.createElement("div");
                if (v191.svg) {
                  v192.innerHTML = v191.svg;
                } else {
                  v192.style.color = v191.color || "#FFF";
                  v192.style.backgroundColor = v191.backgroundColor || "#000";
                  v192.style.borderRadius = "10px";
                  v192.style.textAlign = "center";
                  v192.style.fontWeight = "bold";
                  v192.style.padding = "5px";
                  v192.style.border = "1px solid #f00";
                  v192.style.fontSize = v191.size || "25px";
                  v192.innerHTML = v191.value;
                }
                v192.style.position = "absolute";
                v192.style.top = v191.top;
                v192.style.left = v191.left;
                v192.style.display = v191.display;
                v192.style.cursor = "pointer";
                v192.id = "cbjt_" + v191.value;
                v192.dataset.size = v191.size;
                v192.dataset.color = v191.color || "#FFF";
                v192.style.opacity = 0.6;
                document.getElementById("zone_joystick").appendChild(v192);
                if (v191.display !== "none") {
                  if (v191.value === "ZoomIn") {
                    v192.addEventListener("click", function (p261) {
                      mbf.mbfass2();
                    });
                  }
                  if (v191.value === "ZoomOut") {
                    v192.addEventListener("click", function (p262) {
                      mbf.mbfass1();
                    });
                  }
                  if (v191.value === "Accelerator") {
                    v192.addEventListener("pointerdown", function (p263) {
                      mbf.onRun();
                    });
                    v192.addEventListener("pointerup", function (p264) {
                      mbf.onStop();
                    });
                  }
                  if (v191.value === "Respawn") {
                    v192.addEventListener("click", function (p265) {
                      respawnFn();
                    });
                  }
                  if (v191.value === "Rotate") {
                    v192.addEventListener("click", function (p266) {
                      v_0x3759eb(v132 ? 0 : 8);
                    });
                  }
                  if (v191.value === "Snail") {
                    v192.addEventListener("click", function (p267) {
                      v_0x3759eb(v132 ? 0 : 7);
                    });
                  }
                  if (v191.value === "Lobby") {
                    v192.addEventListener("click", function (p268) {
                      lobbyFn();
                    });
                  }
                  if (v191.value === "Search") {
                    v192.addEventListener("click", function (p269) {
                      mbf.mbfass0();
                    });
                  }
                }
                vO26[v191.value] = v192;
              }
            } catch (e7) {
              vF8.e(e7);
            } finally {
              vF8.f();
            }
            vO26.Directional;
            var v193 = vO26.Directional.dataset.size / 2;
            var v194 = parseInt(vO26.Directional.style.left.replace("px", "")) + v193;
            var v195 = parseInt(vO26.Directional.style.top.replace("px", "")) + v193;
            vF19 = {
              zone: vO26.Directional,
              mode: "static",
              position: {
                left: "50%",
                top: "50%"
              },
              dumbBox: {
                left: v194,
                top: v195
              },
              color: "transparent",
              size: Math.floor(vO26.Directional.dataset.size / 1.6)
            };
          } else {
            vF19.zone = document.getElementById("game-view");
            if (vF19.mode === "static") {
              delete vF19.zone;
            }
          }
          v134 = nipplejs.create(vF19);
          v_0x2c267b();
          if (bbs.customJoystick) {
            $(".nipple > .front").css("background", vO26.Directional.dataset.color);
          }
        };
        if (_wwc.ismobile) {
          var vLS4 = "";
          var v196 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
          Object.keys(bbs.configJoystick.buttons).forEach(function (p270) {
            vLS4 = vLS4 + (bbs.configJoystick.buttons[p270].active ? `<button onclick="${bbs.configJoystick.buttons[p270].action}" id="mbf_${p270}">${bbs.configJoystick.buttons[p270][v196]}</button>` : "");
          });
          var v197 = `
        <style>
          #wwc-mobile-box {
            position: fixed;z-index: 1001;width: 100%;top: 10px;
          }
          #wwc-mobile-buttons {
            position: relative;margin: 0 auto;width: 265px;
            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;
          }
          #wwc-mobile-buttons > button {
            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;
            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;
            align-items: center;
          }
          .game-slider-container-02 {
            position: fixed;z-index: 1000;bottom: 50px;right: 45px;
          }
          .game-slider-container-02 input[type=range][orient=vertical] {
              writing-mode: vertical-lr;
              direction: rtl;
              appearance: slider-vertical;
              width: 16px;
              vertical-align: bottom;
          }
        </style>
        <div id="wwc-mobile-box"><div id="wwc-mobile-buttons" style="">${vLS4}</div></div>`;
          v197 = v197 + (bbs.configJoystick.typeCurrent === "btn" ? "" : `<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="${vO30.Ij.Rk.customer ? 12 : 2}" step="0.25" value="1" style="height: 65vh;"></div>`);
          $("body").append(v197);
        }
        if (_wwc.ismobile && bbs.joystick.checked) {
          if (bbs.customJoystick) {
            console.log("customJoystick");
          }
          v_0x3617f8();
        }
      } catch (e8) {
        console.error(e8);
      }
    };
    var v198 = localStorage.getItem("custom_wormworld_wear");
    var v199 = localStorage.getItem("custom_wormworld_skin");
    var v200 = localStorage.getItem("custom_wormworld_badLang");
    var v201 = localStorage.getItem("custom_wormworld_background");
    var v202 = localStorage.getItem("custom_wormworld_audio");
    var vA4 = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
    if (v200) {
      vA4 = vA4.concat(JSON.parse(v200));
    }
    window.badLanguageRegEx = (vA4 || []).join("|");
    var v_0x2b8ee1 = function f91(p271) {
      p271 = p271.replace(new RegExp(badLanguageRegEx, "gim"), ":");
      p271 = p271.replace(/\uFDFD/g, "");
      p271 = p271.substring(0, vLN18);
      return p271;
    };
    _wwc.customConfig = function (p272) {
      var v_0x26e559 = function f92(p273, p274 = 0) {
        var v203 = p273.id.toString();
        var v204 = p273.type.toString().toLowerCase() + "VariantArray";
        var v205 = p273.type.toString().toLowerCase() + "Dict";
        p272.textureDict[v203] = {
          custom: true,
          re1ativePath: p273.file,
          reference: 1000 + p274
        };
        p272.regionDict[v203] = {
          texture: v203,
          x: p273.x,
          y: p273.y,
          w: p273.w,
          h: p273.h,
          px: p273.px,
          py: p273.py,
          pw: 128,
          ph: 128
        };
        p272[v205][1000 + p274] = {
          base: [{
            region: v203
          }],
          guest: false,
          nonbuyable: false,
          price: 0,
          priceBefore: 0,
          id: v203
        };
        p272[v204].push([1000 + p274]);
      };
      if (v198) {
        v198 = JSON.parse(v198);
        if (v198.wear) {
          if (v198.version == "2") {
            v198.data.forEach(function (p275, p276) {
              v_0x26e559(p275, p276);
            });
          } else {
            for (var v206 in v198.wear.textureDict) {
              p272.textureDict[v206] = {};
              p272.textureDict[v206].h1 = true;
              p272.textureDict[v206].h3 = true;
              p272.textureDict[v206].re1ativePath = v198.wear.textureDict[v206].file;
            }
            for (var v207 in v198.wear.regionDict) {
              p272.regionDict[v207] = v198.wear.regionDict[v207];
              var v208 = p272.regionDict[v207];
              p272[v208.list][v208.obj.id.toString()] = v208.obj;
              p272[v208.listVariant].push([v208.obj.id.toString()]);
            }
          }
        }
      }
      if (v199) {
        v199 = JSON.parse(v199);
        if (v199.version_skin == "2") {
          var v_0x2ec282 = function f93(p277, p278, p279, p280) {
            return {
              texture: p278,
              h: p279 - 5,
              w: p279 - 5,
              x: p279 * (p280 ? 0 : p277 || 0),
              y: 0
            };
          };
          var v209 = "SKIN_" + v199.id + "_XO";
          var vO27 = {
            id: v209,
            regionDict: {},
            textureDict: {},
            skinArrayDict: [],
            skinGroupArrayDict: [{
              id: v209,
              name: {
                en: "Custom V2"
              },
              list: []
            }],
            version_skin: 3
          };
          var vO28 = {
            id: v209,
            guest: false,
            price: 0,
            priceBefore: 0,
            nonbuyable: false,
            prime: "c_white",
            glow: v199.glow,
            base: []
          };
          for (var v210 = v199.len - 1; v210 >= 0; v210--) {
            vO27.regionDict[`${v209}_${v210}`] = v_0x2ec282(v210, v209, v199.cos, 0);
            vO28.base.push(`${v209}_${v210}`);
          }
          vO27.textureDict[v209] = {
            custom: true,
            re1ativePath: v199.file || v199.td.file,
            h1: true,
            h4: true
          };
          vO27.skinArrayDict.push(vO28);
          vO27.skinGroupArrayDict[0].list.push(v209);
          if (!v199.textureDict[v209]) {
            alert("Error! Texture not found:" + p + " - load again.");
            return;
          }
        }
        if (v199.version_skin == "3") {
          for (var v211 in v199) {
            var vF39 = f39(v199[v211]);
            if (vF39 === "object") {
              p272[v211] = Array.isArray(v199[v211]) ? [].concat(f4(p272[v211]), f4(v199[v211])) : f19(f19({}, p272[v211]), v199[v211]);
            }
          }
          return;
        }
        var v212 = v199.skin.id;
        v199.skin.id = v212.toString();
        for (var v213 in v199.textureDict) {
          p272.textureDict[v213] = v199.textureDict[v213];
          p272.textureDict[v213].re1ativePath = v199.textureDict[v213].file;
          p272.textureDict[v213].h1 = true;
          p272.textureDict[v213].h4 = true;
        }
        for (var v214 in v199.regionDict) {
          p272.regionDict[v214] = v199.regionDict[v214];
        }
        p272.skinGroupArrayDict.push({
          id: "custom",
          name: {
            en: "Custom"
          },
          list: [v212]
        });
        p272.skinArrayDict.push(v199.skin);
      }
    };
    function f94() {
      var v215 = false;
      (function (p281) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p281) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p281.substr(0, 4))) {
          v215 = true;
        }
      })(navigator.userAgent || navigator.vendor || window.opera);
      return v215;
    }
    window.w2c2020 = {
      fontStyle: {
        amarelo: new PIXI.TextStyle({
          align: "center",
          fill: "#FFD500",
          fontSize: 10,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        branco: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 10,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        hsBranco: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        hsBrancoRight: new PIXI.TextStyle(f20({
          align: "center",
          fill: "#fff",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }, "align", "right")),
        brancoXzoom: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 12,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        verdeXzoom: new PIXI.TextStyle({
          align: "center",
          fill: "#0ff555",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        })
      }
    };
    var vA5 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    for (var vLN020 = 0; vLN020 < vA5.length; vLN020++) {
      var v216 = vA5[vLN020];
      w2c2020.fontStyle["tfc" + vLN020] = new PIXI.TextStyle({
        align: "center",
        fill: v216,
        fontSize: 25,
        lineJoin: "round",
        whiteSpace: "normal",
        wordWrap: true,
        fontWeight: "bold"
      });
    }
    w2c2020.zoom = new PIXI.Text("x1", w2c2020.fontStyle.brancoXzoom);
    w2c2020.zoom.x = 82;
    w2c2020.zoom.y = 105;
    w2c2020.conteinerTeam = new PIXI.Container();
    w2c2020.conteinerTeam.id = "team";
    w2c2020.friends = new PIXI.Container();
    w2c2020.friends.background = new PIXI.Graphics();
    w2c2020.friends.background.beginFill(0, 0.4);
    w2c2020.friends.background.drawRect(0, 0, 100, 130);
    w2c2020.friends.background.endFill();
    w2c2020.friends.addChild(w2c2020.friends.background);
    w2c2020.friends.position.x = bbs.displayFriends?.x || -10;
    w2c2020.friends.position.y = bbs.displayFriends?.y || 315;
    w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0;
    w2c2020.friends.alpha = 0;
    w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png");
    w2c2020.moveSprite.width = 20;
    w2c2020.moveSprite.height = 20;
    w2c2020.moveSprite.x = 75;
    w2c2020.moveSprite.y = 130;
    w2c2020.moveSprite.interactive = true;
    w2c2020.moveSprite.buttonMode = true;
    w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png");
    w2c2020.rotation.width = 25;
    w2c2020.rotation.height = 25;
    w2c2020.rotation.x = 45;
    w2c2020.rotation.y = 130;
    w2c2020.rotation.interactive = true;
    w2c2020.rotation.buttonMode = true;
    w2c2020.friends.addChild(w2c2020.moveSprite);
    w2c2020.friends.addChild(w2c2020.rotation);
    var v217 = false;
    var vO29 = {
      x: 0,
      y: 0
    };
    w2c2020.rotation.on("pointerdown", function (p282) {
      w2c2020.friends.rotation += Math.PI / 2;
      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
    });
    w2c2020.moveSprite.on("pointerdown", function (p283) {
      v217 = true;
      vO29.x = p283.data.global.x - w2c2020.friends.x;
      vO29.y = p283.data.global.y - w2c2020.friends.y;
    });
    w2c2020.moveSprite.on("pointerup", function () {
      v217 = false;
    });
    w2c2020.moveSprite.on("pointerupoutside", function () {
      v217 = false;
    });
    w2c2020.moveSprite.on("pointermove", function (p284) {
      if (v217) {
        var v218 = p284.data.global;
        w2c2020.friends.x = v218.x - vO29.x;
        w2c2020.friends.y = v218.y - vO29.y;
        bbs.displayFriends.x = w2c2020.friends.x;
        bbs.displayFriends.y = w2c2020.friends.y;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      }
    });
    w2c2020.moveSprite.visible = false;
    w2c2020.rotation.visible = false;
    window.addEventListener("keydown", function (p285) {
      if (p285.key === "Escape") {
        w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;
        w2c2020.rotation.visible = !w2c2020.rotation.visible;
      }
    });
    w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);
    w2c2020.label_hs.x = 15;
    w2c2020.label_hs.y = 107;
    w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
    w2c2020.hs.x = 20;
    w2c2020.hs.y = 119;
    w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
    w2c2020.hsTotal.x = 20;
    w2c2020.hsTotal.y = 132;
    w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.amarelo);
    w2c2020.label_kill.x = 50;
    w2c2020.label_kill.y = 107;
    w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
    w2c2020.kill.x = 60;
    w2c2020.kill.y = 120;
    w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
    w2c2020.killTotal.x = 60;
    w2c2020.killTotal.y = 133;
    w2c2020.clock = PIXI.Sprite.from("https://wormup.in/assets/images/clock.png");
    w2c2020.clock.width = 100;
    w2c2020.clock.height = 100;
    w2c2020.clock.x = -50;
    w2c2020.clock.y = -50;
    w2c2020.containerHsRec = new PIXI.Container();
    w2c2020.containerHsRec.x = -55;
    w2c2020.containerHsRec.y = 195;
    w2c2020.containerHstop = new PIXI.Container();
    w2c2020.containerHstop.x = -55;
    w2c2020.containerHstop.y = 95;
    w2c2020.containerHsIndex = new PIXI.Container();
    w2c2020.containerHsNames = new PIXI.Container();
    w2c2020.containerHsValue = new PIXI.Container();
    var v_0x89ce1b = function f95(p286) {};
    w2c2020.top1rec = "🥇";
    w2c2020.top2rec = "🥈";
    w2c2020.top3rec = "🥉";
    w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
    w2c2020.titleRec.y = -5;
    for (var vLN021 = 0; vLN021 < 3; vLN021++) {
      var v219 = vLN021 + 1;
      var v220 = new PIXI.Text(w2c2020["top" + v219 + "rec"], w2c2020.fontStyle.hsBrancoRight);
      v220.x = vLN021 >= 9 ? -5 : 0;
      v220.y = v219 * 13;
      w2c2020.containerHsRec.addChild(v220);
      var v221 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
      v221.x = 15;
      v221.y = v219 * 13;
      w2c2020.containerHsRec.addChild(v221);
      var v222 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
      v222.x = 135;
      v222.y = v219 * 13;
      w2c2020.containerHsRec.addChild(v222);
    }
    w2c2020.containerHsRec.addChild(w2c2020.titleRec);
    var vLN6 = 6;
    var v_0x3f420f = function f96(p287, p288) {
      if (p288 && p288.length > 0) {
        for (var vLN022 = 0; vLN022 < 3; vLN022++) {
          if (w2c2020.containerHsRec.children[vLN022]) {
            w2c2020.containerHsRec.children[vLN022 * 3 + 1].text = p288 && p288[vLN022] ? p288[vLN022].nickname.substring(0, 17) : "--";
          }
          if (w2c2020.containerHsRec.children[vLN022]) {
            w2c2020.containerHsRec.children[vLN022 * 3 + 2].text = p288 && p288[vLN022] ? p288[vLN022].score : "--";
          }
        }
      }
      if (p287 && p287.length > 0) {
        for (var vLN023 = 0; vLN023 < vLN6; vLN023++) {
          var vLS5 = "--";
          var vLS6 = "--";
          if (p287 && p287[vLN023]) {
            vLS5 = p287[vLN023].nickname ? p287[vLN023].nickname.substring(0, 14) : "--";
            vLS6 = parseInt(p287[vLN023].score || 0);
          }
          if (w2c2020.containerHsNames.children[vLN023]) {
            w2c2020.containerHsNames.children[vLN023].text = vLS5;
          }
          if (w2c2020.containerHsValue.children[vLN023]) {
            w2c2020.containerHsValue.children[vLN023].text = vLS6;
          }
        }
      }
    };
    w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
    for (var vLN024 = 0; vLN024 < vLN6; vLN024++) {
      var v223 = new PIXI.Text(vLN024 + 1, w2c2020.fontStyle.hsBranco);
      v223.x = vLN024 >= 9 ? -5 : 0;
      v223.y = (vLN024 + 1) * 13;
      w2c2020.containerHsIndex.addChild(v223);
      var v224 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
      v224.x = 10;
      v224.y = (vLN024 + 1) * 13;
      w2c2020.containerHsNames.addChild(v224);
      var v225 = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
      v225.x = 130;
      v225.y = (vLN024 + 1) * 13;
      w2c2020.containerHsValue.addChild(v225);
    }
    w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
    w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
    w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
    w2c2020.containerCountInfo = new PIXI.Container();
    w2c2020.containerCountInfo.x = -45;
    w2c2020.containerCountInfo.y = -52;
    w2c2020.containerCountInfo.addChild(w2c2020.zoom);
    w2c2020.containerCountInfo.addChild(w2c2020.friends);
    w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
    w2c2020.containerCountInfo.addChild(w2c2020.hs);
    w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
    w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
    w2c2020.containerCountInfo.addChild(w2c2020.kill);
    w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
    w2c2020.labelRoom = new PIXI.Text("WXC", w2c2020.fontStyle.amarelo);
    w2c2020.labelRoom.x = -50;
    w2c2020.labelRoom.y = -56;
    w2c2020.addRoom = function (p289) {
      w2c2020.labelRoom.text = p289 || "WXC";
    };
    window.addEventListener("keydown", function (p290) {
      if (p290.key == "7") {
        v_0x3759eb(v132 ? 0 : 7);
      }
      if (p290.key == "8") {
        v_0x3759eb(v132 ? 0 : 8);
      }
      if (p290.key === "0" && bbs.showRechs) {
        w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
      }
      if (p290.key === "9" && bbs.showTophs) {
        w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
      }
      if (p290.key === "6" && vO31.setIntervalRun) {
        v133 = !v133;
      }
      if (p290.key === "5") {
        respawnFn();
      }
      if (p290.key === "4") {
        var v226 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
        if (v226) {
          v226.alpha = v226.alpha ? 0 : 0.3;
        }
      }
      if (p290.key === "3") {
        var vVLN014 = vLN014;
        if (backgroundArena.length < vVLN014) {
          vVLN014 = bbs.background || 0;
          vLN014 = 0;
        }
        _wwc._anApp.og.af.ng.Lg.$g(vO31.bgg(vVLN014));
        vLN014++;
      }
      if (p290.key === "1") {
        mbf.mbf_cambiar();
      }
      if (p290.key === "x1") {
        _wwcio.update(1);
      }
      if (p290.key === "x2") {
        _wwcio.update(2);
      }
      if (p290.key === "<" || p290.key === "," && vO31.setIntervalRun) {
        mbf.mbfass1();
      }
      if (p290.key === ">" || p290.key === "." && vO31.setIntervalRun) {
        mbf.mbfass2();
      }
      if (p290.key === "z" || p290.key === "Z" && vO31.setIntervalRun) {
        vLN12 = bbs.configZoom?.closeDown || 1;
        w2c2020.zoom.text = "x" + vLN12;
      }
      if (p290.key === "c" || p290.key === "C" && vO31.setIntervalRun) {
        w2c2020.zoom.text = vLN12 === 1 ? "x2" : "CLOSE-UP";
        vLN12 = vLN12 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
      }
    });
    var vO30 = {
      Lc: {
        Gb: {}
      }
    };
    var vO31 = {
      pm: {},
      ps: 0,
      ps2: function f97(p291, p292, p293) {
        if (true) {
          var v227 = p293 ? 128 : 0;
          var v228 = vO31.$F.N(p292) / vO31.$V.F * 128 & 127;
          var v229 = (v227 | v228) & 255;
          var v230 = new ArrayBuffer(1);
          new DataView(v230).setInt8(0, v229);
          p291.Eq(v230);
          p291.nq = v229;
        } else {}
      },
      ps3: function f98() {
        vO30.dh.xq(vO30.og.af.Gn(), vO30.og.af.Hn());
      },
      setIntervalRun: null,
      loadBg: false,
      LG: function f99(p294, p295, p296) {
        p294.Ll("gg", p296.credential, null);
      },
      Lg: function f100(p297) {
        vO30.xe._g = vO31.bgg();
        _wwc.$C = p297;
        _wwc.$W = vO31;
        if (bbs.bgGameWidth > 512) {
          return new p297.WMGBS1();
        } else {
          return new p297.WMGBS2();
        }
      },
      registry: function () {
        var vF364 = f36(f23().m(function f101(p298) {
          var v231;
          return f23().w(function (p299) {
            while (1) {
              switch (p299.n) {
                case 0:
                  p299.n = 1;
                  return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "x-uid": vLS1c45217fb5c792042bfe
                    },
                    body: JSON.stringify(p298)
                  }).then(function (p300) {
                    if (!p300.ok) {
                      return p298;
                    }
                    return p300.json();
                  });
                case 1:
                  v231 = p299.v;
                  return p299.a(2, v231);
              }
            }
          }, f101);
        }));
        function f102(p301) {
          return vF364.apply(this, arguments);
        }
        return f102;
      }()
    };
    vO31.Vd = function (p302, p303) {
      _wwc.customConfig(p302);
      if (!p302) {
        return;
      }
      var vThis39 = this;
      function f103(p304) {
        var v232 = p303.Id.Ld;
        vThis39.Rd(v232, p303.Od.bc(v232).lc(p304));
      }
      if (this.Fd) {
        this.Pd();
        return;
      }
      var vA6 = [];
      var vA7 = [];
      var vLN025 = 0;
      var v233 = new PIXI.Loader();
      for (var v234 in p302.textureDict) {
        if (p302.textureDict.hasOwnProperty(v234)) {
          var v235 = p302.textureDict[v234];
          var v236 = v235.re1ativePath || v235.relativePath;
          var v237 = v235.fileSize || 100;
          var v238 = v235.sha256 || null;
          var v239 = new p303.Wd(v234, v236, v237, v238);
          v239.h1 = v235.h1;
          v239.h4 = v235.h4;
          v239.skinEvo = v235.skinEvo;
          v239.lines = v235.lines;
          v239.speed = v235.speed;
          vA6.push(v239);
          v233.add(v234, v236);
        }
      }
      v233.onProgress.add(function (p305, p306) {
        f103(p305.progress / 100);
      });
      v233.load(function (p307, p308) {
        vA6.forEach(function (p309) {
          p309.resource = p308[p309.ae];
        });
        vThis39.$d(p302, vA6, p303);
      });
      return;
    };
    vO31.Zd = function (p310, p311, p312, p313) {
      $.ajax({
        type: "GET",
        url: p310._d,
        xhrFields: {
          responseType: "arraybuffer",
          onprogress: function f104(p314) {
            if (p314.lengthComputable) {
              p313(p314.loaded / p314.total);
            }
          }
        }
      }).fail(function () {
        p311(new Error());
      }).done(function (p315) {
        p312(p315);
      });
    };
    vO31.$d = function (p316, p317, p318) {
      function f105(p319) {
        var v240 = p318.Id.Md;
        vThis40.Rd(v240, p318.Od.bc(v240).lc(p319));
      }
      var vThis40 = this;
      if (this.Fd) {
        this.Pd();
        return;
      }
      var v241;
      var v242;
      var vO32 = {};
      var v_0x31c5d1 = function f106() {
        for (var vLN026 = 0; vLN026 < p317.length; vLN026++) {
          try {
            window.URL.revokeObjectURL(p317[vLN026].Xd);
          } catch (e9) {}
        }
        vThis40.Sd(new Error());
      };
      var v_0x2ecef0 = function f107() {
        var v243 = vLN027 == 5 ? 0 : vLN027;
        f105(v243 / 4);
        vO32[v241.ae] = new vO31.$C.be(v241.Xd, v242);
        v_0x5c77d5();
      };
      var v_0x5c77d5 = function f108() {
        try {
          if (vLN027 < p317.length) {
            v241 = p317[vLN027];
            vLN027++;
            vO32[v241.ae] = new vO31.$C.be(v241.resource.texture, v241.resource.texture.baseTexture);
            v_0x5c77d5();
            return;
          }
          return vThis40.ce(p316, vO32);
        } catch (e10) {
          console.error(e10);
        }
      };
      var vLN027 = 0;
      v_0x5c77d5();
    };
    vO31.p = function (p320, p321) {
      p320 = p320.split("|");
      vO31.pm[p320[0]] = {
        p: p320[1],
        i: p321
      };
    };
    vO31.ae = function (p322, p323, p324) {
      if (p323.maV !== 1) {
        p323.maV = 1;
        var v244 = p323.ma.trim().match(v36);
        if (v244 && p324.dh.Fh[p323.ae]) {
          var v_0x5ea846 = function f109(p325, p326) {
            if (p325.includes("_")) {
              if (v252["WEAR_W" + v246 + "_" + p325]) {
                return v252["WEAR_W" + v246 + "_" + p325].reference;
              } else {
                return p326;
              }
            }
            return _wwc.wearMap[p325];
          };
          var v245 = v244[3];
          var v246 = v244[4];
          var v247 = v244[5];
          var v248 = v244[6];
          var v249 = v244[7];
          var v250 = v244[8];
          var v251 = v244[9];
          var v252 = vO30.Lc.Xb().textureDict;
          var v253 = v245 === "B";
          if (v247 !== "000") {
            var v254 = "SKIN_S" + v247.substring(0, 2) + "_______________XO" + v247.substring(2);
            var v255 = v252[v254];
            p324.dh.Fh[p323.ae].Eh.Hh = !v253 ? parseInt(_wwc.skinMap[v247]) : v255 ? v254 : p324.dh.Fh[p323.ae].Eh.Hh;
          }
          if (v248 !== "00") {
            p324.dh.Fh[p323.ae].Eh.ni = v_0x5ea846(v248, p324.dh.Fh[p323.ae].Eh.ni);
          }
          if (v249 !== "00") {
            p324.dh.Fh[p323.ae].Eh.oi = v_0x5ea846(v249, p324.dh.Fh[p323.ae].Eh.oi);
          }
          if (v250 !== "00") {
            p324.dh.Fh[p323.ae].Eh.pi = v_0x5ea846(v250, p324.dh.Fh[p323.ae].Eh.pi);
          }
          if (v251 !== "00") {
            p324.dh.Fh[p323.ae].Eh.qi = v_0x5ea846(v251, p324.dh.Fh[p323.ae].Eh.qi);
          }
          p324.dh.Fh[p323.ae].Eh.ma = v_0x2b8ee1(p324.dh.Fh[p323.ae].Eh.ma);
        }
      }
      p323.ma = v_0x2b8ee1(p323.ma);
    };
    vO31.Xp = function (p327, p328, p329, p330, p331, p332, p333) {
      if (!_wwc.skinMap) {
        _wwc.skinMap = vO30.Lc.Xb().skinMap;
      }
      if (!_wwc.wearMap) {
        _wwc.wearMap = vO30.Lc.Xb().wearMap;
      }
      var v256 = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
      var v257 = vO30.Lc.Xb().hatDict[p333] ? vO30.Lc.Xb().hatDict[p333].id : p333;
      var v258 = vO30.Lc.Xb().glassesDict[p332] ? vO30.Lc.Xb().glassesDict[p332].id : p332;
      var v259 = vO30.Lc.Xb().glassesDict[p331] ? vO30.Lc.Xb().mouthDict[p331].id : p331;
      var v260 = vO30.Lc.Xb().glassesDict[p330] ? vO30.Lc.Xb().eyesDict[p330].id : p330;
      var vLSA = "A";
      var vLS7 = "";
      var vLS__ = "__";
      var v_0x3bbcb0 = function f110(p334, p335) {
        if (v256.test(p334)) {
          var v261 = v256.exec(p334);
          return {
            id: v261[2],
            value: v261[3],
            testRun: true
          };
        }
        return {
          id: null,
          value: null,
          testRun: false
        };
      };
      var vO33 = {
        h: v_0x3bbcb0(p329, "h"),
        r: v_0x3bbcb0(v260, "r"),
        a: v_0x3bbcb0(v259, "a"),
        f: v_0x3bbcb0(v258, "f"),
        c: v_0x3bbcb0(v257, "c")
      };
      if (vO33.h.testRun) {
        vLS7 = vO33.h.id.substring(1);
        vLSA = "B";
      }
      if (vO33.r.testRun || vO33.a.testRun || vO33.f.testRun || vO33.c.testRun) {
        vLS__ = (vO33.r.id || vO33.a.id || vO33.f.id || vO33.c.id).substring(1);
      }
      var v_0xe9b2e6 = function f111(p336, p337) {
        if (vO33[p337].value) {
          return vO33[p337].value.padStart(p337 === "h" ? 3 : 2, "0");
        }
        if (!_wwc[p337 === "h" ? "testSkinMod" : "testWear"](p336 || 0)) {
          if (vO33[p337].testRun) {
            return p336.toString().padStart(p337 === "h" ? 3 : 2, "0");
          } else if (p337 === "h") {
            return "000";
          } else {
            return "00";
          }
        }
        return _wwc[p337 === "h" ? "skinMap" : "wearMap"][p336] || (p337 === "h" ? "000" : "00");
      };
      var vV_0xe9b2e6 = v_0xe9b2e6(p329, "h");
      var vV_0xe9b2e62 = v_0xe9b2e6(p330, "r");
      var vV_0xe9b2e63 = v_0xe9b2e6(p331, "a");
      var vV_0xe9b2e64 = v_0xe9b2e6(p332, "f");
      var vV_0xe9b2e65 = v_0xe9b2e6(p333, "c");
      var v262 = vLSA + vLS__ + vLS7 + vV_0xe9b2e6.replace("______XO                ", "") + vV_0xe9b2e62 + vV_0xe9b2e63 + vV_0xe9b2e64 + vV_0xe9b2e65;
      bbs.code = `${vV_0xe9b2e6 || "000"}|${vV_0xe9b2e65 || "00"}`;
      function f112(p338, p339) {
        var vLS8 = "";
        vLS8 = p338.substring(0, vLN18).padEnd(vLN18, "_");
        var v263 = vLS8 + p339;
        return v263;
      }
      bbs.nickname = f112(p328, v262);
      return bbs.nickname;
    };
    vO31.bgg = function (p340) {
      p340 = parseInt(p340);
      var v264 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
      if (!isNaN(p340)) {
        v264 = backgroundArena[p340]?.uri || v264;
        bbs.bgGameWidth = backgroundArena[p340]?.w || 512;
        bbs.bgGameHeight = backgroundArena[p340]?.h || 256;
      }
      var v265 = PIXI.BaseTexture.from(v264);
      bbs.bgGameWidth = v265.width || bbs.bgGameWidth || 512;
      bbs.bgGameHeight = v265.height || bbs.bgGameHeight || 256;
      v265.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
      return new PIXI.Texture(v265);
    };
    vO31.genereteTexture = function (p341) {
      var vLN128 = 128;
      var vLN9 = 9;
      try {
        var v_0x371722 = function f113() {
          var vA8 = [];
          for (var vLN028 = 0; vLN028 < p341.lines; vLN028++) {
            lineContainer = [];
            for (var vLN029 = 0; vLN029 < vLN9; vLN029++) {
              try {
                var v266 = PIXI.Texture.from(p341._d, {
                  x: vLN029 * vLN128,
                  y: vLN028 * vLN128,
                  width: vLN128,
                  height: vLN128
                });
                lineContainer.push(v266);
              } catch (e11) {
                console.log(vLN028, vLN029);
                console.log(e11);
                return;
              }
            }
            vA8.push(lineContainer);
          }
          return vA8;
        };
        return v_0x371722();
      } catch (e12) {
        return [];
      }
    };
    var vO34 = {
      headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
      shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
      speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
      curve: window.URL_CDN + "/sounds/yes_effect.mp3",
      loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
      top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
    };
    vO24.ref = ["speed", "curve"];
    for (var v267 in vO34) {
      vO24[v267] = new vP4.Howl({
        src: [vO34[v267]],
        html5: true,
        autoplay: v267 == "top1",
        loop: false
      });
    }
    var vO35 = {
      "rotate(0deg)": 0,
      "rotate(90deg)": 1.5707963267948966,
      "rotate(180deg)": 3.141592653589793,
      "rotate(270deg)": 4.71238898038469,
      "rotate(360deg)": 0
    };
    var v268 = typeof Symbol == "function" && f39(Symbol.iterator) == "symbol" ? function (p342) {
      return f39(p342);
    } : function (p343) {
      if (p343 && typeof Symbol == "function" && p343.constructor === Symbol && p343 !== Symbol.prototype) {
        return "symbol";
      } else {
        return f39(p343);
      }
    };
    var v269;
    window.addEventListener("load", function () {
      function f114() {
        (function (p344, p345, p346) {
          function f115(p347, p348) {
            return (p347 === undefined ? "undefined" : v268(p347)) === p348;
          }
          function f116() {
            if (typeof p345.createElement != "function") {
              return p345.createElement(arguments[0]);
            } else if (v272) {
              return p345.createElementNS.call(p345, "http://www.w3.org/2000/svg", arguments[0]);
            } else {
              return p345.createElement.apply(p345, arguments);
            }
          }
          var vA9 = [];
          var vA10 = [];
          var vO36 = {
            _version: "3.3.1",
            _config: {
              classPrefix: "",
              enableClasses: true,
              enableJSClass: true,
              usePrefixes: true
            },
            _q: [],
            on: function f117(p349, p350) {
              var vThis41 = this;
              setTimeout(function () {
                p350(vThis41[p349]);
              }, 0);
            },
            addTest: function f118(p351, p352, p353) {
              vA10.push({
                name: p351,
                fn: p352,
                options: p353
              });
            },
            addAsyncTest: function f119(p354) {
              vA10.push({
                name: null,
                fn: p354
              });
            }
          };
          var v_0x5eda48 = function f120() {};
          v_0x5eda48.prototype = vO36;
          v_0x5eda48 = new v_0x5eda48();
          var v270 = false;
          try {
            v270 = "WebSocket" in p344 && p344.WebSocket.CLOSING === 2;
          } catch (e13) {}
          v_0x5eda48.addTest("websockets", v270);
          var v271 = p345.documentElement;
          var v272 = v271.nodeName.toLowerCase() === "svg";
          v_0x5eda48.addTest("canvas", function () {
            var vF116 = f116("canvas");
            return !!vF116.getContext && !!vF116.getContext("2d");
          });
          v_0x5eda48.addTest("canvastext", function () {
            return v_0x5eda48.canvas !== false && typeof f116("canvas").getContext("2d").fillText == "function";
          });
          (function () {
            var v273;
            var v274;
            var v275;
            var v276;
            var v277;
            var v278;
            var v279;
            for (var v280 in vA10) {
              if (vA10.hasOwnProperty(v280)) {
                v273 = [];
                v274 = vA10[v280];
                if (v274.name && (v273.push(v274.name.toLowerCase()), v274.options && v274.options.aliases && v274.options.aliases.length)) {
                  for (v275 = 0; v275 < v274.options.aliases.length; v275++) {
                    v273.push(v274.options.aliases[v275].toLowerCase());
                  }
                }
                v276 = f115(v274.fn, "function") ? v274.fn() : v274.fn;
                v277 = 0;
                for (; v277 < v273.length; v277++) {
                  v278 = v273[v277];
                  v279 = v278.split(".");
                  if (v279.length === 1) {
                    v_0x5eda48[v279[0]] = v276;
                  } else {
                    if (!!v_0x5eda48[v279[0]] && !(v_0x5eda48[v279[0]] instanceof Boolean)) {
                      v_0x5eda48[v279[0]] = new Boolean(v_0x5eda48[v279[0]]);
                    }
                    v_0x5eda48[v279[0]][v279[1]] = v276;
                  }
                  vA9.push((v276 ? "" : "no-") + v279.join("-"));
                }
              }
            }
          })();
          (function (p355) {
            var v281 = v271.className;
            var v282 = v_0x5eda48._config.classPrefix || "";
            if (v272) {
              v281 = v281.baseVal;
            }
            if (v_0x5eda48._config.enableJSClass) {
              var v283 = new RegExp("(^|\\s)" + v282 + "no-js(\\s|$)");
              v281 = v281.replace(v283, "$1" + v282 + "js$2");
            }
            if (v_0x5eda48._config.enableClasses) {
              v281 += " " + v282 + p355.join(" " + v282);
              if (v272) {
                v271.className.baseVal = v281;
              } else {
                v271.className = v281;
              }
            }
          })(vA9);
          delete vO36.addTest;
          delete vO36.addAsyncTest;
          for (var vLN030 = 0; vLN030 < v_0x5eda48._q.length; vLN030++) {
            v_0x5eda48._q[vLN030]();
          }
          p344.Modernizr = v_0x5eda48;
        })(window, document);
        return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
      }
      document.getElementById("game-wrap").style.display = "block";
      if (!f114()) {
        document.getElementById("error-view").style.display = "block";
        return;
      }
      (function () {
        function f121() {
          return vO30;
        }
        var vO37 = {};
        var vO38 = {};
        var vO39 = {
          a: {
            r: window.runtimeHash,
            b: "https://gateway.wormate.io",
            c: "https://resources.wormate.io",
            d: "/images/linelogo-valday2023.png",
            e: "/images/guest-avatar-summer2024.png",
            f: "/images/confetti-valday2023.png",
            g: "/images/bg-event-pattern-valday2023.png"
          }
        };
        vO39.a.i = function () {
          var v284 = window.I18N_LANG;
          v284 ||= "en";
          return v284;
        }();
        vO39.a.j = function () {
          var vUndefined = undefined;
          switch (vO39.a.i) {
            case "uk":
              vUndefined = "uk_UA";
              break;
            case "de":
              vUndefined = "de_DE";
              break;
            case "fr":
              vUndefined = "fr_FR";
              break;
            case "es":
              vUndefined = "es_ES";
              break;
            default:
              vUndefined = "en_US";
          }
          return vUndefined;
        }();
        moment.locale(vO39.a.j);
        var vF4 = function () {
          return {
            Container: PIXI.Container,
            BaseTexture: PIXI.BaseTexture,
            Texture: PIXI.Texture,
            Renderer: PIXI.Renderer,
            Graphics: PIXI.Graphics,
            Shader: PIXI.Shader,
            Rectangle: PIXI.Rectangle,
            Sprite: PIXI.Sprite,
            Text: PIXI.Text,
            Geometry: PIXI.Geometry,
            Mesh: PIXI.Mesh,
            v: {
              z: PIXI.BLEND_MODES.ADD,
              A: PIXI.BLEND_MODES.SCREEN,
              B: PIXI.BLEND_MODES.MULTIPLY
            },
            C: {
              D: PIXI.WRAP_MODES.REPEAT
            }
          };
        }();
        vO38.F = 6.283185307179586;
        vO38.G = Math.PI;
        vO39.H = function (p356) {
          return window.I18N_MESSAGES[p356];
        };
        vO39.I = function (p357) {
          if (p357[vO39.a.i]) {
            return p357[vO39.a.i];
          } else if (p357.en) {
            return p357.en;
          } else {
            return p357.x;
          }
        };
        vO39.J = function (p358) {
          var v285 = (Math.floor(p358) % 60).toString();
          var v286 = (Math.floor(p358 / 60) % 60).toString();
          var v287 = (Math.floor(p358 / 3600) % 24).toString();
          var v288 = Math.floor(p358 / 86400).toString();
          var v289 = vO39.H("util.time.days");
          var v290 = vO39.H("util.time.hours");
          var v291 = vO39.H("util.time.min");
          var v292 = vO39.H("util.time.sec");
          if (v288 > 0) {
            return v288 + " " + v289 + " " + v287 + " " + v290 + " " + v286 + " " + v291 + " " + v285 + " " + v292;
          } else if (v287 > 0) {
            return v287 + " " + v290 + " " + v286 + " " + v291 + " " + v285 + " " + v292;
          } else if (v286 > 0) {
            return v286 + " " + v291 + " " + v285 + " " + v292;
          } else {
            return v285 + " " + v292;
          }
        };
        vO39.K = function (p359) {
          if (p359.includes("href")) {
            return p359.replaceAll("href", "target=\"_black\" href");
          } else {
            return p359;
          }
        };
        vO39.L = function (p360, p361, p362, p363) {
          var v293 = document.createElement("script");
          var v294 = true;
          if (v268(p361) !== "undefined" && p361 !== null) {
            if (v268(p361.id) !== "undefined") {
              v293.id = p361.id;
            }
            if (v268(p361.async) !== "undefined" && p361.async) {
              v293.async = "async";
            }
            if (v268(p361.defer) !== "undefined" && p361.defer) {
              v293.defer = "defer";
            }
            if (v268(p361.crossorigin) !== "undefined") {
              v293.crossorigin = p361.crossorigin;
            }
          }
          v293.type = v293.type == p363 ? "module" : "text/javascript";
          v293.src = p360;
          if (p362) {
            v293.onload = v293.onreadystatechange = function () {
              v294 = false;
              try {
                p362();
              } catch (e14) {}
              v293.onload = v293.onreadystatechange = null;
            };
          }
          (document.head || document.getElementsByTagName("head")[0]).appendChild(v293);
        };
        vO39.M = function (p364, p365) {
          var vP365 = p365;
          vP365.prototype = Object.create(p364.prototype);
          vP365.prototype.constructor = vP365;
          vP365.parent = p364;
          return vP365;
        };
        vO39.N = function (p366) {
          p366 %= vO38.F;
          if (p366 < 0) {
            return p366 + vO38.F;
          } else {
            return p366;
          }
        };
        vO39.O = function (p367, p368, p369) {
          return vO39.P(p369, p367, p368);
        };
        vO39.P = function (p370, p371, p372) {
          if (p370 > p372) {
            return p372;
          } else if (p370 < p371) {
            return p371;
          } else if (Number.isFinite(p370)) {
            return p370;
          } else {
            return (p371 + p372) * 0.5;
          }
        };
        vO39.Q = function (p373, p374, p375, p376) {
          if (p374 > p373) {
            return Math.min(p374, p373 + p375 * p376);
          } else {
            return Math.max(p374, p373 - p375 * p376);
          }
        };
        vO39.R = function (p377, p378, p379, p380, p381) {
          return p378 + (p377 - p378) * Math.pow(1 - p380, p379 / p381);
        };
        vO39.S = function (p382, p383, p384) {
          return p382 - (p382 - p383) * p384;
        };
        vO39.T = function (p385, p386, p387, p388) {
          var vP387 = p387;
          var vP386 = p386;
          var v295 = p386 + p388;
          if (p385 == null) {
            throw new TypeError("this is null or not defined");
          }
          var v296 = p385.length >>> 0;
          var v297 = vP387 >> 0;
          var v298 = v297 < 0 ? Math.max(v296 + v297, 0) : Math.min(v297, v296);
          var v299 = vP386 >> 0;
          var v300 = v299 < 0 ? Math.max(v296 + v299, 0) : Math.min(v299, v296);
          var v301 = v295 === undefined ? v296 : v295 >> 0;
          var v302 = v301 < 0 ? Math.max(v296 + v301, 0) : Math.min(v301, v296);
          var v303 = Math.min(v302 - v300, v296 - v298);
          var vLN14 = 1;
          for (v300 < v298 && v298 < v300 + v303 && (vLN14 = -1, v300 += v303 - 1, v298 += v303 - 1); v303 > 0;) {
            if (v300 in p385) {
              p385[v298] = p385[v300];
            } else {
              delete p385[v298];
            }
            v300 += vLN14;
            v298 += vLN14;
            v303--;
          }
          return p385;
        };
        vO39.U = function (p389) {
          if (p389.parent != null) {
            p389.parent.removeChild(p389);
          }
        };
        vO39.V = function (p390, p391) {
          return p390 + (p391 - p390) * Math.random();
        };
        vO39.W = function (p392) {
          return p392[parseInt(Math.random() * p392.length)];
        };
        vO39.X = function () {
          return Math.random().toString(36).substring(2, 15);
        };
        vO39.Y = function (p393, p394, p395) {
          var v304 = (1 - Math.abs(p395 * 2 - 1)) * p394;
          var v305 = v304 * (1 - Math.abs(p393 / 60 % 2 - 1));
          var v306 = p395 - v304 / 2;
          if (p393 >= 0 && p393 < 60) {
            return [v306 + v304, v306 + v305, v306 + 0];
          } else if (p393 >= 60 && p393 < 120) {
            return [v306 + v305, v306 + v304, v306 + 0];
          } else if (p393 >= 120 && p393 < 180) {
            return [v306 + 0, v306 + v304, v306 + v305];
          } else if (p393 >= 180 && p393 < 240) {
            return [v306 + 0, v306 + v305, v306 + v304];
          } else if (p393 >= 240 && p393 < 300) {
            return [v306 + v305, v306 + 0, v306 + v304];
          } else {
            return [v306 + v304, v306 + 0, v306 + v305];
          }
        };
        vO39.Z = function (p396, p397, p398) {
          $.get(p396).fail(p397).done(p398);
        };
        vO39.$ = function (p399, p400, p401, p402) {
          $.ajax({
            type: "GET",
            url: p399,
            xhrFields: {
              responseType: "arraybuffer",
              onprogress: function f122(p403) {
                if (p403.lengthComputable) {
                  p402(p403.loaded / p403.total * 100);
                }
              }
            }
          }).fail(p400).done(p401);
        };
        vO39._ = function (p404, p405) {
          for (var v307 in p404) {
            if (p404.hasOwnProperty(v307)) {
              p405(v307, p404[v307]);
            }
          }
        };
        vO39.aa = function (p406) {
          for (var v308 = p406.length - 1; v308 > 0; v308--) {
            var v309 = Math.floor(Math.random() * (v308 + 1));
            var v310 = p406[v308];
            p406[v308] = p406[v309];
            p406[v309] = v310;
          }
          return p406;
        };
        (function () {
          var vLN031 = 0;
          try {
            DataView.prototype.ba = function (p407) {
              try {
                vLN031 = p407;
                return this.getInt8(p407);
              } catch (e15) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.ca = function (p408) {
              try {
                vLN031 = p408;
                return this.getInt16(p408);
              } catch (e16) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.da = function (p409) {
              try {
                vLN031 = p409;
                return this.getInt32(p409);
              } catch (e17) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.ea = function (p410) {
              try {
                vLN031 = p410;
                return this.getFloat32(p410);
              } catch (e18) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.fa = function (p411) {
              try {
                vLN031 = p411;
                return this.getFloat64(p411);
              } catch (e19) {
                console.log(vLN031);
                vO30.dh.mq.close();
                return 0;
              }
            };
          } catch (e20) {
            console.log(vLN031);
            console.error("Error adding methods to DataView prototype:", e20);
          }
        })();
        vO39.ga = function () {
          function f123() {
            if (URLSERV_WORMWORLD) {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e21) {}
              v_0x166b3e(true);
            }
          }
          var v311 = false;
          var v_0x166b3e = function f124() {};
          var vO40 = {};
          var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
          $("#adbl-continue").click(function () {
            $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
            v_0x166b3e(false);
          });
          vO40.ha = function (p412) {
            v_0x166b3e = p412;
            if (!v311) {
              try {
                aiptag.cmd.player.push(function () {
                  aiptag.adplayer = new aipPlayer({
                    AD_WIDTH: 960,
                    AD_HEIGHT: 540,
                    AD_FULLSCREEN: true,
                    AD_CENTERPLAYER: false,
                    LOADING_TEXT: "loading advertisement",
                    PREROLL_ELEM: function f125() {
                      return document.getElementById("1eaom01c3pxu9wd3");
                    },
                    AIP_COMPLETE: function f126(p413) {
                      v_0x166b3e(true);
                      $("#1eaom01c3pxu9wd3").hide();
                      $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                      try {
                        ga("send", "event", "preroll", window.runtimeHash + "_complete");
                      } catch (e22) {}
                    },
                    AIP_REMOVE: function f127() {}
                  });
                });
                v311 = true;
              } catch (e23) {}
            }
          };
          vO40.ia = function () {
            try {
              ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
            } catch (e24) {}
            f123();
          };
          return vO40;
        };
        vO39.ja = function (p414, p415) {
          var v$3 = $("#" + p414);
          var vP415 = p415;
          var vO41 = {};
          var v312 = false;
          vO41.ha = function () {
            if (!v312) {
              v$3.empty();
              v$3.append("<div id='" + vP415 + "'></div>");
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_display");
                } catch (e25) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(vP415);
                });
                v312 = true;
              } catch (e26) {}
            }
          };
          vO41.ka = function () {
            try {
              try {
                ga("send", "event", "banner", window.runtimeHash + "_refresh");
              } catch (e27) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(vP415);
              });
            } catch (e28) {}
          };
          return vO41;
        };
        vO37.la = function () {
          function f128(p416, p417, p418, p419, p420, p421, p422, p423, p424, p425, p426) {
            this.ma = p416;
            this.na = p417;
            this.oa = null;
            this.pa = false;
            this.qa = p418;
            this.ra = p419;
            this.sa = p420;
            this.ta = p421;
            this.ua = p422 || (p424 || p420) / 2;
            this.va = p423 || (p425 || p421) / 2;
            this.wa = p424 || p420;
            this.xa = p425 || p421;
            this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
            this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
            this.Aa = this.sa / this.wa;
            if (p426) {
              this.ev = p426;
            } else {
              null;
            }
            this.Ba = this.ta / this.xa;
          }
          f128.Ca = function () {
            return new f128("", null, 0, 0, 0, 0, 0, 0, 0, 0);
          };
          f128.Da = function (p427, p428, p429, p430) {
            return new f128(p427, p428, p429.x, p429.y, p429.w, p429.h, p429.px, p429.py, p429.pw, p429.ph, p430);
          };
          f128.prototype.Ea = function () {
            if (this.pa) {
              return this.oa;
            }
            if (this.na != null) {
              this.oa = new vF4.Texture(this.na, new vF4.Rectangle(this.qa, this.ra, this.sa, this.ta));
            }
            this.pa = true;
            return this.oa;
          };
          f128.prototype.Fa = function () {
            if (this.oa != null) {
              this.oa.destroy();
            }
          };
          return f128;
        }();
        vO37.Ga = function () {
          function f129(p431, p432, p433, p434, p435, p436, p437, p438, p439, p440, p441, p442, p443, p444, p445, p446, p447, p448) {
            this.Ha = p431;
            this.Ia = p432;
            this.Ja = p433;
            this.Ka = p434;
            this.La = p435;
            this.Ma = p436;
            this.Na = p437;
            this.Oa = p438;
            this.Pa = p439;
            this.Qa = p440;
            this.Ra = p441;
            this.Sa = p442;
            this.Ta = p443;
            this.Ua = p444;
            this.Va = p445;
            this.Wa = p446;
            this.Xa = p447;
            this.Ya = p448;
          }
          f129.prototype.Fa = function () {
            for (var vLN032 = 0; vLN032 < this.Ha.length; vLN032++) {
              this.Ha[vLN032].dispose();
              this.Ha[vLN032].destroy();
            }
            this.Ha = [];
            for (var vLN033 = 0; vLN033 < this.Ia.length; vLN033++) {
              this.Ia[vLN033].Fa();
            }
            this.Ia = [];
          };
          f129.Ca = function () {
            var v313 = new f129.Za(vO37._a.$a, vO37._a.$a);
            var v314 = new f129.ab("#ffffff", [vO37._a.$a], [vO37._a.$a]);
            return new f129([], [], {}, v313, {}, new f129.bb(vO37._a.$a), {}, v314, {}, new f129.cb("", v314, v313), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]));
          };
          f129.eb = function (p449, p450, p451, p452) {
            var v315 = new f129.Za(vO37._a.$a, vO37._a.$a);
            var v316 = new f129.ab("#ffffff", [p449], [p450]);
            return new f129([], [], {}, v315, {}, new f129.bb(vO37._a.$a), {}, v316, {}, new f129.cb("", v316, v315), {}, new f129.db([p451]), {}, new f129.db([p452]), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]));
          };
          f129.fb = function (p453, p454, p455, p456) {
            var vO42 = {};
            vO39._(p453.colorDict, function (p457, p458) {
              vO42[p457] = "#" + p458;
            });
            var vO43 = {};
            for (var vLN034 = 0; vLN034 < p453.skinArrayDict.length; vLN034++) {
              var v317 = p453.skinArrayDict[vLN034];
              vO43[v317.id] = new f129.ab(vO42[v317.prime], v317.base.map(function (p459) {
                return p454[p459];
              }), v317.glow.map(function (p460, p461) {
                return p454[p460];
              }));
              if (v317.glow[0] == "a_trans") {
                vO43[v317.id].vbb = p454.a_black;
              }
            }
            var vUndefined2 = undefined;
            var v318 = p453.skinUnknown;
            try {
              vUndefined2 = new f129.ab(vO42[v318.prime], v318.base.map(function (p462) {
                return p454[p462];
              }), v318.glow.map(function (p463) {
                return p454[p463];
              }));
            } catch (e29) {}
            var vO44 = {};
            vO39._(p453.eyesDict, function (p464, p465) {
              var vParseInt2 = parseInt(p464);
              vO44[vParseInt2] = new f129.db(p465.base.map(function (p466) {
                return p454[p466.region];
              }));
            });
            var v319 = new f129.db(p453.eyesUnknown.base.map(function (p467) {
              return p454[p467.region];
            }));
            var vO45 = {};
            vO39._(p453.mouthDict, function (p468, p469) {
              var vParseInt3 = parseInt(p468);
              vO45[vParseInt3] = new f129.db(p469.base.map(function (p470) {
                return p454[p470.region];
              }));
            });
            var v320 = new f129.db(p453.mouthUnknown.base.map(function (p471) {
              return p454[p471.region];
            }));
            var vO46 = {};
            vO39._(p453.hatDict, function (p472, p473) {
              var vParseInt4 = parseInt(p472);
              vO46[vParseInt4] = new f129.db(p473.base.map(function (p474) {
                return p454[p474.region];
              }));
            });
            var v321 = new f129.db(p453.hatUnknown.base.map(function (p475) {
              return p454[p475.region];
            }));
            var vO47 = {};
            vO39._(p453.glassesDict, function (p476, p477) {
              var vParseInt5 = parseInt(p476);
              vO47[vParseInt5] = new f129.db(p477.base.map(function (p478) {
                return p454[p478.region];
              }));
            });
            var v322 = new f129.db(p453.glassesUnknown.base.map(function (p479) {
              return p454[p479.region];
            }));
            var vO48 = {};
            vO39._(p453.portionDict, function (p480, p481) {
              p480 = parseInt(p480);
              vO48[p480] = new f129.Za(p454[p481.base], p454[p481.glow]);
            });
            var vUndefined3 = undefined;
            var v323 = p453.portionUnknown;
            vUndefined3 = new f129.Za(p454[v323.base], p454[v323.glow]);
            var vO49 = {};
            vO39._(p453.abilityDict, function (p482, p483) {
              p482 = parseInt(p482);
              vO49[p482] = new f129.bb(p454[p483.base]);
            });
            var vUndefined4 = undefined;
            var v324 = p453.abilityUnknown;
            vUndefined4 = new f129.bb(p454[v324.base]);
            var vO50 = {};
            vO39._(p453.teamDict, function (p484, p485) {
              p484 = parseInt(p484);
              vO50[p484] = new f129.cb(p485.title, new f129.ab(vO42[p485.skin.prime], null, p485.skin.glow.map(function (p486) {
                return p454[p486];
              })), new f129.Za(null, p454[p485.portion.glow]));
            });
            var v325 = new f129.cb({}, vUndefined2, vUndefined3);
            return new f129(p455, p456, vO48, vUndefined3, vO49, vUndefined4, vO43, vUndefined2, vO50, v325, vO44, v319, vO45, v320, vO46, v321, vO47, v322);
          };
          f129.prototype.gb = function (p487) {
            var v326 = vO39.aa(Object.keys(this.Na)).slice(0, p487);
            var v327 = vO39.aa(Object.keys(this.Ra)).slice(0, p487);
            var v328 = vO39.aa(Object.keys(this.Ta)).slice(0, p487);
            var v329 = vO39.aa(Object.keys(this.Va)).slice(0, p487);
            var v330 = vO39.aa(Object.keys(this.Xa)).slice(0, p487);
            var vA11 = [];
            for (var vLN035 = 0; vLN035 < p487; vLN035++) {
              var v331 = v326.length > 0 ? v326[vLN035 % v326.length] : 0;
              var v332 = v327.length > 0 ? v327[vLN035 % v327.length] : 0;
              var v333 = v328.length > 0 ? v328[vLN035 % v328.length] : 0;
              var v334 = v329.length > 0 ? v329[vLN035 % v329.length] : 0;
              var v335 = v330.length > 0 ? v330[vLN035 % v330.length] : 0;
              vA11.push(new vO37.hb(v331, v332, v333, v334, v335));
            }
            return vA11;
          };
          f129.prototype.ib = function (p488) {
            if (this.Na.hasOwnProperty(p488)) {
              return this.Na[p488];
            } else {
              return this.Oa;
            }
          };
          f129.prototype.jb = function (p489) {
            if (this.Pa.hasOwnProperty(p489)) {
              return this.Pa[p489];
            } else {
              return this.Qa;
            }
          };
          f129.prototype.kb = function (p490) {
            if (this.Ra.hasOwnProperty(p490)) {
              return this.Ra[p490];
            } else {
              return this.Sa;
            }
          };
          f129.prototype.lb = function (p491) {
            if (this.Ta.hasOwnProperty(p491)) {
              return this.Ta[p491];
            } else {
              return this.Ua;
            }
          };
          f129.prototype.mb = function (p492) {
            if (this.Xa.hasOwnProperty(p492)) {
              return this.Xa[p492];
            } else {
              return this.Ya;
            }
          };
          f129.prototype.nb = function (p493) {
            if (this.Va.hasOwnProperty(p493)) {
              return this.Va[p493];
            } else {
              return this.Wa;
            }
          };
          f129.prototype.ob = function (p494) {
            if (this.Ja.hasOwnProperty(p494)) {
              return this.Ja[p494];
            } else {
              return this.Ka;
            }
          };
          f129.prototype.pb = function (p495) {
            if (this.La.hasOwnProperty(p495)) {
              return this.La[p495];
            } else {
              return this.Ma;
            }
          };
          f129.cb = function () {
            function f130(p496, p497, p498) {
              this.qb = p496;
              this.rb = p497;
              this.sb = p498;
            }
            return f130;
          }();
          f129.ab = function () {
            function f131(p499, p500, p501) {
              this.tb = p499;
              this.ub = p500;
              this.vb = p501;
            }
            return f131;
          }();
          f129.db = function () {
            function f132(p502) {
              this.ub = p502;
            }
            return f132;
          }();
          f129.Za = function () {
            function f133(p503, p504) {
              this.ub = p503;
              this.vb = p504;
            }
            return f133;
          }();
          f129.bb = function () {
            function f134(p505) {
              this.ub = p505;
            }
            return f134;
          }();
          return f129;
        }();
        vO37._a = function () {
          function f135() {
            var v336 = vF4.BaseTexture.from("/images/wear-ability.png");
            for (var v337 = 1; v337 < 10; v337++) {
              this["vb" + v337] = new vO37.la("emoji_" + v337, v336, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
            }
            this.wb = new vO37.la("magnet_ability", v336, 158, 86, 67, 124, 148, 63.5, 128, 128);
            this.xb = new vO37.la("velocity_ability", v336, 158, 4, 87, 74, 203, 63.5, 128, 128);
            this.yb = new vO37.la("flex_ability", v336, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
            var v337 = vF4.BaseTexture.from("/images/def-look.png");
            var v338 = new vO37.la("def_eyes", v337, 0, 0, 42, 80, 75, 64, 128, 128);
            var v339 = new vO37.la("def_mouth", v337, 46, 0, 20, 48, 109, 63, 128, 128);
            var v340 = new vO37.la("def_skin_glow", v337, 70, 0, 32, 32, 0, 0, 0, 0);
            var v341 = new vO37.la("def_skin_base", v337, 46, 52, 64, 64, 0, 0, 0, 0);
            var v342 = vO37.Ga.eb(v341, v340, v338, v339);
            _wwc.mySkin = v342;
            this.zb = new vO37.Ab({}, v342);
            this.Bb = -10000;
            this.Cb = -10000;
            this.Db = function () {
              var v343 = window.document.createElement("canvas");
              v343.width = 80;
              v343.height = 80;
              return {
                Eb: v343,
                Fb: v343.getContext("2d"),
                oa: new vF4.Texture(vF4.BaseTexture.from(v343))
              };
            }();
            this.Gb = null;
            this.Hb = [];
          }
          f135.$a = vO37.la.Ca();
          f135.prototype.ha = function () {};
          f135.prototype.Ib = function (p506, p507, p508) {
            var vThis42 = this;
            var v344 = this.zb.Jb();
            if (v344 > 0 && Date.now() - this.Bb < 1200000) {
              if (p506 != null) {
                p506();
              }
              return;
            }
            if (this.Gb != null && !this.Gb.Kb()) {
              if (Date.now() - this.Bb < 300000) {
                if (p506 != null) {
                  p506();
                }
                return;
              }
              this.Gb.Lb();
              this.Gb = null;
            }
            var v345 = new vO37.Mb(v344);
            v345.Nb(function (p509, p510) {
              if (v345 === vThis42.Gb && p508 != null) {
                p508(p509, p510);
              }
            });
            v345.Ob(function (p511) {
              if (v345 === vThis42.Gb && p507 != null) {
                p507(p511);
              }
            });
            v345.Pb(function () {
              if (v345 === vThis42.Gb && p507 != null) {
                p507(new Error());
              }
            });
            v345.Qb(function () {
              if (v345 === vThis42.Gb && p506 != null) {
                p506();
              }
            });
            v345.Rb(function (p512) {
              if (v345 === vThis42.Gb) {
                vThis42.Cb = Date.now();
                vThis42.Gb = null;
                vThis42.Sb();
                vThis42.zb.Ub().Fa();
                vThis42.zb = p512;
                if (p506 != null) {
                  p506();
                }
                vThis42.Tb();
                return;
              }
              try {
                p512.Ub().Fa();
              } catch (e30) {}
            });
            v345.Vb();
            this.Bb = Date.now();
            this.Gb = v345;
          };
          f135.prototype.Sb = function () {};
          f135.prototype.Wb = function () {
            return this.zb.Jb() > 0;
          };
          f135.prototype.Xb = function () {
            return this.zb.Yb();
          };
          f135.prototype.Zb = function () {
            return this.Db;
          };
          f135.prototype.$b = function (p513) {
            this.Hb.push(p513);
          };
          f135.prototype.Tb = function () {
            for (var vLN036 = 0; vLN036 < this.Hb.length; vLN036++) {
              this.Hb[vLN036]();
            }
          };
          f135.prototype.Ub = function () {
            return this.zb.Ub();
          };
          return f135;
        }();
        vO37._b = function () {
          function f136(p514) {
            this.ac = p514;
          }
          f136.prototype.bc = function (p515) {
            return this.ac[p515];
          };
          f136.cc = function () {
            function f137() {
              this.dc = [];
            }
            f137.prototype.ec = function (p516, p517) {
              for (var vLN037 = 0; vLN037 < this.dc.length; vLN037++) {
                if (this.dc[vLN037].fc === p516) {
                  throw new Error();
                }
              }
              this.dc.push(new f136.gc(p516, p517));
              return this;
            };
            f137.prototype.hc = function () {
              var vLN038 = 0;
              for (var vLN039 = 0; vLN039 < this.dc.length; vLN039++) {
                vLN038 += this.dc[vLN039].ic;
              }
              var vO51 = {};
              var vLN040 = 0;
              for (var vLN041 = 0; vLN041 < this.dc.length; vLN041++) {
                var v346 = this.dc[vLN041];
                v346.ic = v346.ic / vLN038;
                v346.jc = vLN040;
                v346.kc = vLN040 + v346.ic;
                vLN040 = v346.kc;
                vO51[v346.fc] = v346;
              }
              return new f136(vO51);
            };
            return f137;
          }();
          f136.gc = function () {
            function f138(p518, p519) {
              this.fc = p518;
              this.ic = p519;
              this.jc = 0;
              this.kc = 0;
            }
            f138.prototype.lc = function (p520) {
              return this.jc + (this.kc - this.jc) * p520;
            };
            return f138;
          }();
          return f136;
        }();
        vO37.WormSpriteTree = function () {
          function f139() {
            this.nc = new vF4.Container();
            this.nc.sortableChildren = true;
            this.oc = new vF5();
            this.oc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
            this.pc = 0;
            this.qc = new Array(vLN797);
            this.qc[0] = this.rc(0, new vO37.sc(), new vO37.sc());
            for (var vLN16 = 1; vLN16 < vLN797; vLN16++) {
              this.qc[vLN16] = this.rc(vLN16, new vO37.sc(), new vO37.sc());
            }
            this.tc = 0;
            this.uc = 0;
            this.vc = 0;
          }
          var vLN0001 = 0.001;
          var vLN797 = 797;
          var vLN314159 = 3.14159;
          var v347 = -0.06640625;
          var vLN084375 = 0.84375;
          var vLN02578125 = 0.2578125;
          var v348 = -0.03515625;
          var v349 = -0.0625;
          var vLN05625 = 0.5625;
          var v350 = v347 * 3 + vLN084375;
          var v351 = vLN02578125 - v347 * 3;
          var v352 = v347 + v348;
          var vLN0375 = 0.375;
          var vLN075 = 0.75;
          var v353 = v349 + v349;
          var v354 = v348 * 3 + vLN02578125;
          var v355 = vLN084375 - v348 * 3;
          var v356 = v348 + v347;
          f139.wc = vLN797;
          f139.prototype.rc = function (p521, p522, p523) {
            var v357 = new vF6(p522, p523);
            p522.xc.zIndex = vLN0001 * ((vLN797 - p521) * 2 + 1 + 3);
            p523.xc.zIndex = vLN0001 * ((vLN797 - p521) * 2 - 2 + 3);
            return v357;
          };
          f139.prototype.yc = function (p524, p525, p526, p527, p528, p529, p530, p531) {
            var v358 = p526.ub;
            var v359 = p524 === vO37.Ac.zc ? p525.rb.vb : p526.vb;
            if (v358.length > 0 && v359.length > 0) {
              for (var vLN042 = 0; vLN042 < this.qc.length; vLN042++) {
                this.qc[vLN042].Cc.Bc(v358[vLN042 % v358.length], vLN042 % v358.length, vLN042);
                this.qc[vLN042].Dc.Bc(vLN042 == 0 && p526.vbb ? p526.vbb : v359[vLN042 % v359.length], vLN042 % v358.length, vLN042);
                this.qc[vLN042].Cc.Ec(p531);
                this.qc[vLN042].Dc.Ec(p531);
              }
            }
            this.oc.yc(p527, p528, p529, p530);
          };
          var vF5 = function () {
            var v360 = vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.sortableChildren = true;
              this.Fc = [];
              this.Gc = [];
              this.Hc = [];
              this.Ic = [];
              this.Jc = new vF4.Container();
              this.Kc = [];
              this.message = new vF4.Container();
              for (var vLN043 = 0; vLN043 < 4; vLN043++) {
                var v361 = new vO37.sc();
                v361.Bc(f121().Lc.wb);
                this.Jc.addChild(v361.xc);
                this.Kc.push(v361);
              }
              this.message.zIndex = 0.0012;
              this.addChild(this.message);
              this.VcUn();
              this.Jc.zIndex = 0.0011;
              this.addChild(this.Jc);
              this.Mc();
              this.Nc = new vO37.sc();
              this.Nc.Bc(f121().Lc.xb);
              this.Nc.xc.zIndex = 0.001;
              this.addChild(this.Nc.xc);
              this.Oc();
            });
            v360.prototype.yc = function (p532, p533, p534, p535) {
              this.Pc(0.002, this.Fc, p532.ub);
              this.Pc(0.003, this.Gc, p533.ub);
              this.Pc(0.004, this.Ic, p535.ub);
              this.Pc(0.005, this.Hc, p534.ub);
            };
            v360.prototype.Pc = function (p536, p537, p538) {
              while (p538.length > p537.length) {
                var v362 = new vO37.sc();
                p537.push(v362);
                this.addChild(v362.Qc());
              }
              while (p538.length < p537.length) {
                p537.pop().Rc();
              }
              var vP536 = p536;
              for (var vLN044 = 0; vLN044 < p538.length; vLN044++) {
                vP536 += 0.0001;
                var v363 = p537[vLN044];
                v363.Bc(p538[vLN044]);
                v363.xc.zIndex = vP536;
              }
            };
            v360.prototype.Sc = function (p539, p540, p541, p542) {
              this.visible = true;
              this.position.set(p539, p540);
              this.rotation = p542;
              for (var vLN045 = 0; vLN045 < this.Fc.length; vLN045++) {
                this.Fc[vLN045].Tc(p541);
              }
              for (var vLN046 = 0; vLN046 < this.Gc.length; vLN046++) {
                this.Gc[vLN046].Tc(p541);
              }
              for (var vLN047 = 0; vLN047 < this.Hc.length; vLN047++) {
                this.Hc[vLN047].Tc(p541);
              }
              for (var vLN048 = 0; vLN048 < this.Ic.length; vLN048++) {
                this.Ic[vLN048].Tc(p541);
              }
            };
            v360.prototype.Uc = function () {
              this.visible = false;
            };
            v360.prototype.VcAc = function (p543, p544, p545, p546, p547) {
              this.message.visible = true;
              this.Mc2.Tc(p544);
            };
            v360.prototype.VcUn = function () {
              this.message.visible = false;
            };
            v360.prototype.Vc = function (p548, p549, p550, p551) {
              this.Jc.visible = true;
              var v364 = p550 / 1000;
              var v365 = 1 / this.Kc.length;
              for (var vLN049 = 0; vLN049 < this.Kc.length; vLN049++) {
                var v366 = 1 - (v364 + v365 * vLN049) % 1;
                this.Kc[vLN049].xc.alpha = 1 - v366;
                this.Kc[vLN049].Tc(p549 * (0.5 + v366 * 4.5));
              }
            };
            v360.prototype.Mc = function () {
              this.Jc.visible = false;
            };
            v360.prototype.Wc = function (p552, p553, p554, p555) {
              this.Nc.xc.visible = true;
              this.Nc.xc.alpha = vO39.Q(this.Nc.xc.alpha, p552.Xc ? 0.9 : 0.2, p555, 0.0025);
              this.Nc.Tc(p553);
            };
            v360.prototype.WXX = function (p556, p557, p558, p559) {
              this.Nc.xc.visible = true;
              this.Nc.xc.alpha = vO39.Q(this.Nc.xc.alpha, p556.Xc ? 0.9 : 0.2, p559, 0.0025);
              this.Nc.Tc(p557);
            };
            v360.prototype.Oc = function () {
              this.Nc.xc.visible = false;
            };
            return v360;
          }();
          f139.prototype.Yc = function (p560) {
            return this.uc + this.vc * Math.sin(p560 * vLN314159 - this.tc);
          };
          f139.prototype.Zc = function (p561, p562, p563, p564) {
            var v367 = p561.$c * 2;
            var v368 = p561._c;
            var v369 = p561.ad;
            var v370 = v369 * 4 - 3;
            var vV370 = v370;
            this.tc = p562 / 400 * Math.PI;
            this.uc = v367 * 1.5;
            this.vc = v367 * 0.15 * p561.bd;
            var v371;
            var v372;
            var v373;
            var v374;
            var v375;
            var v376;
            var v377;
            var v378;
            v372 = v368[0];
            v376 = v368[1];
            if (p564(v372, v376)) {
              v373 = v368[2];
              v377 = v368[3];
              v374 = v368[4];
              v378 = v368[5];
              var v379 = Math.atan2(v378 + v376 * 2 - v377 * 3, v374 + v372 * 2 - v373 * 3);
              this.oc.Sc(v372, v376, v367, v379);
              this.qc[0].Sc(v372, v376, v367, this.Yc(0), v379);
              this.qc[1].Sc(v350 * v372 + v351 * v373 + v352 * v374, v350 * v376 + v351 * v377 + v352 * v378, v367, this.Yc(1), vF6.cd(this.qc[0], this.qc[2]));
              this.qc[2].Sc(vLN0375 * v372 + vLN075 * v373 + v353 * v374, vLN0375 * v376 + vLN075 * v377 + v353 * v378, v367, this.Yc(2), vF6.cd(this.qc[1], this.qc[3]));
              this.qc[3].Sc(v354 * v372 + v355 * v373 + v356 * v374, v354 * v376 + v355 * v377 + v356 * v378, v367, this.Yc(3), vF6.cd(this.qc[2], this.qc[4]));
            } else {
              this.oc.Uc();
              this.qc[0].Uc();
              this.qc[1].Uc();
              this.qc[2].Uc();
              this.qc[3].Uc();
            }
            var vLN4 = 4;
            var vLN22 = 2;
            var v380 = v369 * 2 - 4;
            while (vLN22 < v380) {
              v372 = v368[vLN22];
              v376 = v368[vLN22 + 1];
              if (p564(v372, v376)) {
                v371 = v368[vLN22 - 2];
                v375 = v368[vLN22 - 1];
                v373 = v368[vLN22 + 2];
                v377 = v368[vLN22 + 3];
                v374 = v368[vLN22 + 4];
                v378 = v368[vLN22 + 5];
                this.qc[vLN4].Sc(v372, v376, v367, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v347 * v371 + vLN084375 * v372 + vLN02578125 * v373 + v348 * v374, v347 * v375 + vLN084375 * v376 + vLN02578125 * v377 + v348 * v378, v367, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v349 * v371 + vLN05625 * v372 + vLN05625 * v373 + v349 * v374, v349 * v375 + vLN05625 * v376 + vLN05625 * v377 + v349 * v378, v367, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v348 * v371 + vLN02578125 * v372 + vLN084375 * v373 + v347 * v374, v348 * v375 + vLN02578125 * v376 + vLN084375 * v377 + v347 * v378, v367, this.Yc(vLN4), vF6.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
              } else {
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
              }
              vLN22 += 2;
            }
            v372 = v368[v369 * 2 - 4];
            v376 = v368[v369 * 2 - 3];
            if (p564(v372, v376)) {
              v371 = v368[v369 * 2 - 6];
              v375 = v368[v369 * 2 - 5];
              v373 = v368[v369 * 2 - 2];
              v377 = v368[v369 * 2 - 1];
              this.qc[v370 - 5].Sc(v372, v376, v367, this.Yc(v370 - 5), vF6.cd(this.qc[v370 - 6], this.qc[v370 - 4]));
              this.qc[v370 - 4].Sc(v356 * v371 + v355 * v372 + v354 * v373, v356 * v375 + v355 * v376 + v354 * v377, v367, this.Yc(v370 - 4), vF6.cd(this.qc[v370 - 5], this.qc[v370 - 3]));
              this.qc[v370 - 3].Sc(v353 * v371 + vLN075 * v372 + vLN0375 * v373, v353 * v375 + vLN075 * v376 + vLN0375 * v377, v367, this.Yc(v370 - 3), vF6.cd(this.qc[v370 - 4], this.qc[v370 - 2]));
              this.qc[v370 - 2].Sc(v352 * v371 + v351 * v372 + v350 * v373, v352 * v375 + v351 * v376 + v350 * v377, v367, this.Yc(v370 - 2), vF6.cd(this.qc[v370 - 3], this.qc[v370 - 1]));
              this.qc[v370 - 1].Sc(v373, v377, v367, this.Yc(v370 - 1), vF6.cd(this.qc[v370 - 2], this.qc[v370 - 1]));
            } else {
              this.qc[v370 - 5].Uc();
              this.qc[v370 - 4].Uc();
              this.qc[v370 - 3].Uc();
              this.qc[v370 - 2].Uc();
              this.qc[v370 - 1].Uc();
            }
            if (this.pc === 0 && vV370 > 0) {
              this.nc.addChild(this.oc);
            }
            if (this.pc > 0 && vV370 === 0) {
              vO39.U(this.oc);
            }
            while (this.pc < vV370) {
              this.nc.addChild(this.qc[this.pc].Cc.Qc());
              this.nc.addChild(this.qc[this.pc].Dc.Qc());
              this.pc += 1;
            }
            while (this.pc > vV370) {
              this.pc -= 1;
              this.qc[this.pc].Dc.Rc();
              this.qc[this.pc].Cc.Rc();
            }
            var v381 = p561.dd[vO37.fd.ed];
            if (this.qc[0].gd() && v381 && v381.hd) {
              this.oc.Vc(p561, v367, p562, p563);
            } else {
              this.oc.Mc();
            }
            var v382 = p561.dd[vO37.fd.jd];
            if (this.qc[0].gd() && v382 && v382.hd) {
              this.oc.Wc(p561, v367, p562, p563);
            } else {
              this.oc.Oc();
            }
            movimentaLinha();
          };
          var vF6 = function () {
            function f140(p565, p566) {
              this.Cc = p565;
              this.Cc.kd(false);
              this.Dc = p566;
              this.Dc.kd(false);
              this.ev = null;
            }
            f140.prototype.Sc = function (p567, p568, p569, p570, p571) {
              this.Cc.kd(true);
              this.Cc.ld(p567, p568);
              this.Cc.Tc(p569);
              this.Cc.md(p571);
              this.Dc.kd(true);
              this.Dc.ld(p567, p568);
              this.Dc.Tc(p570);
              this.Dc.md(p571);
            };
            f140.prototype.Uc = function () {
              this.Cc.kd(false);
              this.Dc.kd(false);
            };
            f140.prototype.gd = function () {
              return this.Cc.gd();
            };
            f140.cd = function (p572, p573) {
              return Math.atan2(p572.Cc.xc.position.y - p573.Cc.xc.position.y, p572.Cc.xc.position.x - p573.Cc.xc.position.x);
            };
            return f140;
          }();
          return f139;
        }();
        vO37.fd = function () {
          function f141(p574) {
            this.nd = p574;
            this.hd = false;
            this.od = 1;
          }
          f141.jd = 0;
          f141.pd = 1;
          f141.ed = 2;
          f141.qd = 6;
          f141.rd = 3;
          f141.sd = 4;
          f141.td = 5;
          return f141;
        }();
        vO37.Ab = function (p575) {
          var vF7 = function () {
            function f142(p576, p577) {
              f(this, f142);
              this.ud = p576;
              this.vd = p577;
            }
            return f3(f142, [{
              key: "Jb",
              value: function f143() {
                return this.ud.revision;
              }
            }, {
              key: "Yb",
              value: function f144() {
                vO31.Jb();
                return this.ud;
              }
            }, {
              key: "Ub",
              value: function f145() {
                return this.vd;
              }
            }]);
          }();
          p575 = vF7;
          f20(vF7, "wd", new p575({}, vO37.Ga.Ca()));
          return vF7;
        }();
        vO37.Mb = function () {
          function f146(p578) {
            this.xd = function () {
              ++f146.yd;
              return function (p579, p580) {};
            }();
            this.zd = p578;
            this.Ad = null;
            this.Bd = null;
            this.Cd = null;
            this.Dd = null;
            this.Ed = null;
            this.Fd = false;
            this.Gd = false;
            this.Hd = false;
          }
          f146.Id = {
            Jd: "0x0",
            Kd: "0x1",
            Ld: "0x2",
            Md: "0x3",
            Nd: "0x4"
          };
          f146.yd = 100000;
          f146.Od = new vO37._b.cc().ec(f146.Id.Jd, 1).ec(f146.Id.Kd, 10).ec(f146.Id.Ld, 50).ec(f146.Id.Md, 15).ec(f146.Id.Nd, 5).hc();
          f146.prototype.Rb = function (p581) {
            this.Ad = p581;
          };
          f146.prototype.Qb = function (p582) {
            this.Bd = p582;
          };
          f146.prototype.Ob = function (p583) {
            this.Cd = p583;
          };
          f146.prototype.Pb = function (p584) {
            this.Dd = p584;
          };
          f146.prototype.Nb = function (p585) {
            this.Ed = p585;
          };
          f146.prototype.Kb = function () {
            return this.Hd;
          };
          f146.prototype.Lb = function () {
            this.Fd = true;
          };
          f146.prototype.Vb = function () {
            if (!this.Gd) {
              this.Gd = true;
              if (this.Fd) {
                this.Pd();
                return;
              }
              this.Qd();
            }
          };
          f146.prototype.Qd = function () {
            function f147(p586) {
              var v383 = f146.Id.Jd;
              vThis43.Rd(v383, f146.Od.bc(v383).lc(p586));
            }
            var vThis43 = this;
            console.log("Checking for updates...");
            if (this.Fd) {
              this.Pd();
              return;
            }
            $.ajax({
              type: "GET",
              url: vO39.a.c + "/dynamic/assets/revision.json",
              xhrFields: {
                onprogress: function f148(p587) {
                  if (p587.lengthComputable) {
                    f147(p587.loaded / p587.total);
                  }
                }
              }
            }).fail(function () {
              vThis43.Sd(new Error());
            }).done(function (p588) {
              if (p588 <= vThis43.zd) {
                vThis43.Td();
                return;
              }
              vThis43.Ud();
            });
          };
          f146.prototype.Ud = f36(f23().m(function f149() {
            var v384;
            var v385;
            var v386;
            return f23().w(function (p589) {
              while (1) {
                switch (p589.n) {
                  case 0:
                    v384 = function f150(p590) {
                      var v387 = f146.Id.Kd;
                      v385.Rd(v387, f146.Od.bc(v387).lc(p590));
                    };
                    v385 = this;
                    if (!this.Fd) {
                      p589.n = 1;
                      break;
                    }
                    return p589.a(2, void this.Pd());
                  case 1:
                    p589.n = 2;
                    return fetch(URLSERV_WORMWORLD + "/version");
                  case 2:
                    v386 = p589.v;
                    p589.n = 3;
                    return v386.json();
                  case 3:
                    v386 = p589.v;
                    localStorage.setItem("wwc_version", v386);
                    if (v158 != v386) {
                      $.ajax({
                        type: "GET",
                        url: vO39.a.c + "/dynamic/assets/registry.json",
                        xhrFields: {
                          onprogress: function f151(p591) {
                            if (p591.lengthComputable) {
                              v384(p591.loaded / p591.total);
                            }
                          }
                        }
                      }).fail(function () {
                        v385.Sd(new Error());
                      }).done(function () {
                        var vF365 = f36(f23().m(function f152(p592) {
                          return f23().w(function (p593) {
                            while (1) {
                              switch (p593.n) {
                                case 0:
                                  p593.n = 1;
                                  return vO31.registry(p592);
                                case 1:
                                  p592 = p593.v;
                                  localStorage.setItem("wwc_config", JSON.stringify(p592));
                                  v385.Vd(p592, f146);
                                case 2:
                                  return p593.a(2);
                              }
                            }
                          }, f152);
                        }));
                        return function (p594) {
                          return vF365.apply(this, arguments);
                        };
                      }());
                    } else {
                      try {
                        v160 = JSON.parse(v160);
                        v384(1);
                        v385.Vd(v160, f146);
                      } catch (e31) {
                        console.log("ConfigError", e31);
                        localStorage.removeItem("wwc_version");
                        localStorage.removeItem("wwc_config");
                      }
                    }
                  case 4:
                    return p589.a(2);
                }
              }
            }, f149, this);
          }));
          f146.prototype.Vd = vO31.Vd || function (p595) {
            function f153(p596) {
              var v388 = f146.Id.Ld;
              vThis44.Rd(v388, f146.Od.bc(v388).lc(p596));
            }
            var vThis44 = this;
            if (this.Fd) {
              this.Pd();
              return;
            }
            var vA12 = [];
            var vA13 = [];
            var vLN050 = 0;
            for (var v389 in p595.textureDict) {
              if (p595.textureDict.hasOwnProperty(v389)) {
                var v390 = p595.textureDict[v389];
                var v391 = vO39.a.c + v390.relativePath;
                var v392 = v390.fileSize;
                var v393 = v390.sha256;
                var v394 = new f146.Wd(v389, v391, v392, v393);
                vA12.push(v394);
                vA13.push(v394);
                vLN050 += v392;
              }
            }
            var v395;
            var vLN051 = 0;
            var v_0x23c844 = function f154(p597) {
              for (var vLN052 = 0; vLN052 < vA13.length; vLN052++) {
                try {
                  window.URL.revokeObjectURL(vA13[vLN052].Xd);
                } catch (e32) {}
              }
              vThis44.Sd(p597);
            };
            var v_0x3c0a22 = function f155(p598) {
              var v396 = Math.floor(v395.Yd * p598);
              f153((vLN051 + v396) / vLN050);
            };
            var v_0x1544c1 = function f156(p599) {
              var v397 = new Blob([p599]);
              v395.Xd = window.URL.createObjectURL(v397);
              vLN051 += v395.Yd;
              v_0x4d93bf();
            };
            var v_0x4d93bf = function f157() {
              if (vLN053 < vA13.length) {
                v395 = vA13[vLN053++];
                vThis44.Zd(v395, v_0x23c844, v_0x1544c1, v_0x3c0a22);
                return;
              }
              setTimeout(function () {
                return vThis44.$d(p595, vA12);
              }, 0);
            };
            var vLN053 = 0;
            v_0x4d93bf();
          };
          f146.prototype.Zd = vO31.Zd || function (p600, p601, p602, p603) {
            $.ajax({
              type: "GET",
              url: p600._d,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function f158(p604) {
                  if (p604.lengthComputable) {
                    p603(p604.loaded / p604.total);
                  }
                }
              }
            }).fail(function () {
              p601(new Error());
            }).done(function (p605) {
              p602(p605);
            });
          };
          f146.prototype.$d = vO31.$d || function (p606, p607) {
            function f159(p608) {
              var v398 = f146.Id.Md;
              vThis45.Rd(v398, f146.Od.bc(v398).lc(p608));
            }
            var vThis45 = this;
            if (this.Fd) {
              this.Pd();
              return;
            }
            var v399;
            var v400;
            var vO52 = {};
            var v_0xf610ea = function f160() {
              for (var vLN054 = 0; vLN054 < p607.length; vLN054++) {
                try {
                  window.URL.revokeObjectURL(p607[vLN054].Xd);
                } catch (e33) {}
              }
              vThis45.Sd(new Error());
            };
            var v_0x5b6b15 = function f161() {
              f159(vLN055 / p607.length);
              vO52[v399.ae] = new vO37.be(v399.Xd, v400);
              v_0x579767();
            };
            var v_0x579767 = function f162() {
              if (vLN055 < p607.length) {
                v399 = p607[vLN055++];
                v400 = PIXI.BaseTexture.from(v399.Xd);
                v400.on("error", v_0xf610ea);
                v400.on("loaded", v_0x5b6b15);
                return;
              }
              setTimeout(function () {
                return vThis45.ce(p606, vO52);
              }, 0);
            };
            var vLN055 = 0;
            v_0x579767();
          };
          f146.prototype.ce = function (p609, p610) {
            function f163(p611) {
              var v401 = f146.Id.Nd;
              vThis46.Rd(v401, f146.Od.bc(v401).lc(p611));
            }
            var vThis46 = this;
            var vO53 = {};
            var vLN056 = 0;
            var v402 = Object.values(p609.regionDict).length;
            vO39._(p609.regionDict, function (p612, p613) {
              var v403 = null;
              try {
                var v404 = null;
                if (p610[p613.texture].ev) {
                  v404 = p610[p613.texture].ev;
                }
                var v405 = p613.texture + ":" + p612;
                v403 = vO37.la.Da(v405, p610[p613.texture].oa, p613, v404);
                vO53[p612] = v403;
                if (++vLN056 % 10 == 0) {
                  f163(vLN056 / v402);
                }
              } catch (e34) {}
            });
            var v406 = Object.values(p610).map(function (p614) {
              return p614.oa;
            });
            var v407 = Object.values(vO53);
            var v408 = new vO37.Ab(p609, vO37.Ga.fb(p609, vO53, v406, v407));
            setTimeout(function () {
              return vThis46.de(v408);
            }, 0);
          };
          f146.Wd = function () {
            function f164(p615, p616, p617, p618) {
              this.ae = p615;
              this._d = p616;
              this.Yd = p617;
              this.ee = p618;
              this.Xd = "";
            }
            return f164;
          }();
          f146.prototype.de = function (p619) {
            if (this.Hd) {
              p619.Ub().Fa();
              return;
            }
            this.Hd = true;
            var vThis47 = this;
            setTimeout(function () {
              return vThis47.Ad(p619);
            }, 0);
          };
          f146.prototype.Td = function () {
            if (!this.Hd) {
              this.Hd = true;
              var vThis48 = this;
              setTimeout(function () {
                return vThis48.Bd();
              }, 0);
            }
          };
          f146.prototype.Sd = function (p620) {
            if (!this.Hd) {
              this.Hd = true;
              var vThis49 = this;
              setTimeout(function () {
                return vThis49.Cd(p620);
              }, 0);
            }
          };
          f146.prototype.Pd = function () {
            if (!this.Hd) {
              this.Hd = true;
              var vThis50 = this;
              setTimeout(function () {
                return vThis50.Dd();
              }, 0);
            }
          };
          f146.prototype.Rd = function (p621, p622) {
            if (!this.Hd && !this.Fd) {
              var vThis51 = this;
              return vThis51.Ed(p621, p622);
            }
          };
          return f146;
        }();
        vO37.fe = function () {
          return {};
        }();
        vO37.ge = function () {
          function f165() {
            this.he = vO37.ge.je.ie;
            this.ke = false;
            this.le = false;
            this.me = null;
            this.ne = null;
          }
          f165.prototype.ha = function () {};
          f165.prototype.oe = function (p623) {
            this.le = p623;
          };
          f165.prototype.pe = function (p624) {
            this.he = p624;
            this.qe();
          };
          f165.prototype.re = function (p625) {
            this.ke = p625;
            this.qe();
          };
          f165.prototype.qe = function () {};
          f165.prototype.se = function (p626, p627) {
            if (!f121().Lc.Wb()) {
              return null;
            }
            var v409 = p626[p627];
            if (v409 == null || v409.length === 0) {
              return null;
            } else {
              return v409[Math.floor(Math.random() * v409.length)].cloneNode();
            }
          };
          f165.prototype.te = function (p628, p629, p630) {
            if (this.le && !(p630 <= 0)) {
              var v410 = this.se(p628, p629);
              if (v410 != null) {
                v410.volume = Math.min(1, p630);
                v410.play();
              }
            }
          };
          f165.prototype.ue = function (p631, p632) {
            if (this.he.ve) {
              this.te(app.xe.we, p631, p632);
            }
          };
          f165.prototype.ye = function (p633, p634) {
            if (this.he.ze) {
              this.te(app.xe.Ae, p633, p634);
            }
          };
          f165.prototype.Be = function () {};
          f165.prototype.Ce = function () {};
          f165.prototype.De = function () {};
          f165.prototype.Ee = function () {};
          f165.prototype.Fe = function () {};
          f165.prototype.Ge = function () {};
          f165.prototype.He = function (p635, p636, p637) {};
          f165.prototype.Ie = function (p638) {};
          f165.prototype.Je = function (p639) {};
          f165.prototype.Ke = function (p640) {};
          f165.prototype.Le = function (p641) {};
          f165.prototype.Me = function (p642) {};
          f165.prototype.Ne = function (p643) {};
          f165.prototype.Oe = function (p644) {};
          f165.prototype.Pe = function (p645) {};
          f165.prototype.Qe = function (p646) {};
          f165.prototype.Re = function (p647) {};
          f165.prototype.Se = function (p648) {};
          f165.prototype.Te = function (p649) {};
          f165.prototype.Ue = function (p650) {};
          f165.prototype.Ve = function (p651) {};
          f165.prototype.We = function (p652, p653) {};
          f165.prototype.Xe = function (p654) {};
          f165.prototype.Ye = function (p655, p656, p657) {};
          f165.je = {
            ie: {
              Ze: false,
              $e: false,
              ze: true,
              ve: false
            },
            _e: {
              Ze: false,
              $e: true,
              ze: true,
              ve: false
            },
            af: {
              Ze: true,
              $e: false,
              ze: false,
              ve: true
            },
            bf: {
              Ze: false,
              $e: false,
              ze: true,
              ve: false
            },
            cf: {
              Ze: false,
              $e: false,
              ze: false,
              ve: false
            }
          };
          return f165;
        }();
        vO37.GameView = function () {
          function f166(p658) {
            var vF121 = f121();
            this.ef = p658;
            this.Eb = p658.get()[0];
            this.ff = 1;
            this.gf = 1;
            this.hf = null;
            this.lf = new vF4.Renderer({
              view: p658.get()[0],
              backgroundColor: 0,
              transparent: false,
              antialias: false,
              autoResize: true
            });
            this.mf = new vF4.Container();
            this.mf.sortableChildren = true;
            this.nf = new vF4.Container();
            this.nf.zIndex = 0;
            this.mf.addChild(this.nf);
            this.uf = new vF4.Container();
            this.uf.zIndex = 3;
            this.mf.addChild(this.uf);
            this.vf = [];
            this.wf = [];
            this.xf = [];
            this.ha();
          }
          var vLN057 = 0;
          var vLN52 = 5;
          var vLN40 = 40;
          var vA14 = [{
            yf: 1,
            zf: 0.15,
            Af: 0
          }, {
            yf: 1,
            zf: 0.125,
            Af: 0
          }, {
            yf: 1,
            zf: 0.1,
            Af: 0
          }, {
            yf: 1,
            zf: 0.075,
            Af: 0
          }, {
            yf: 1,
            zf: 0.05,
            Af: 0
          }, {
            yf: 1,
            zf: 0.025,
            Af: 0
          }, {
            yf: 1,
            zf: 0,
            Af: 0.025
          }, {
            yf: 1,
            zf: 0,
            Af: 0.05
          }, {
            yf: 1,
            zf: 0,
            Af: 0.075
          }, {
            yf: 1,
            zf: 0,
            Af: 0.1
          }, {
            yf: 1,
            zf: 0,
            Af: 0.125
          }, {
            yf: 1,
            zf: 0,
            Af: 0.15
          }];
          f166.prototype.ha = function () {
            var vF1212 = f121();
            this.lf.backgroundColor = vLN057;
            this.vf = new Array(vA14.length);
            for (var vLN058 = 0; vLN058 < this.vf.length; vLN058++) {
              this.vf[vLN058] = new vF4.Sprite();
              this.vf[vLN058].texture = vF1212.xe.Bf;
              this.vf[vLN058].anchor.set(0.5);
              this.nf.addChild(this.vf[vLN058]);
            }
            this.wf = new Array(vF1212.xe.Cf.length);
            for (var vLN059 = 0; vLN059 < this.wf.length; vLN059++) {
              this.wf[vLN059] = new vF4.Sprite();
              this.wf[vLN059].texture = vF1212.xe.Cf[vLN059];
              this.wf[vLN059].anchor.set(0.5);
              this.uf.addChild(this.wf[vLN059]);
            }
            this.xf = new Array(this.wf.length);
            for (var vLN060 = 0; vLN060 < this.xf.length; vLN060++) {
              var vA15 = [0.6, 1, 0.5];
              this.xf[vLN060] = {
                Df: vO39.V(0, vO38.F),
                Ef: vO39.V(0.09, 0.16) * 0.66,
                Ff: vO39.V(0, 1),
                Gf: vO39.V(0, 1),
                Hf: 0,
                yf: vA15[0],
                zf: vA15[1],
                Af: vA15[2]
              };
            }
            this.If();
            this.Jf();
          };
          f166.hd = false;
          f166.Kf = function (p659) {
            f166.hd = p659;
          };
          f166.prototype.Lf = function (p660) {
            this.hf.Kf(p660);
          };
          f166.prototype.Jf = function () {
            var v411 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            this.lf.resize(this.ff, this.gf);
            this.lf.resolution = v411;
            this.Eb.width = v411 * this.ff;
            this.Eb.height = v411 * this.gf;
            var v412 = Math.max(this.ff, this.gf) * 0.6;
            for (var vLN061 = 0; vLN061 < this.vf.length; vLN061++) {
              this.vf[vLN061].width = v412;
              this.vf[vLN061].height = v412;
            }
          };
          f166.prototype.Nf = function (p661, p662) {
            if (f166.hd) {
              var v413 = p661 / 1000;
              var v414 = p662 / 1000;
              var v415 = this.ef.width();
              var v416 = this.ef.height();
              for (var vLN062 = 0; vLN062 < this.vf.length; vLN062++) {
                var v417 = vA14[vLN062 % vA14.length];
                var v418 = this.vf[vLN062];
                var v419 = vLN062 / this.vf.length * vO38.G;
                var v420 = v413 * 0.5 * 0.12;
                var v421 = Math.cos((v420 + v419) * 3) * Math.cos(v419) - Math.sin((v420 + v419) * 5) * Math.sin(v419);
                var v422 = Math.cos((v420 + v419) * 3) * Math.sin(v419) + Math.sin((v420 + v419) * 5) * Math.cos(v419);
                var v423 = 0.2 + Math.cos(v419 + v413 * 0.075) * 0.2;
                var v424 = v417.Af * 255 << 16 & 16711680 | v417.zf * 255 << 8 & 65280 | v417.yf * 255 & 255;
                v418.tint = v424;
                v418.alpha = v423;
                v418.position.set(v415 * (0.2 + (v421 + 1) * 0.5 * 0.6), v416 * (0.1 + (v422 + 1) * 0.5 * 0.8));
              }
              var v425 = Math.max(v415, v416) * 0.05;
              for (var vLN063 = 0; vLN063 < this.wf.length; vLN063++) {
                var v426 = this.xf[vLN063];
                var v427 = this.wf[vLN063];
                var v428 = vO38.F * vLN063 / this.wf.length + v426.Df;
                v426.Gf += v426.Ef * v414;
                if (v426.Gf > 1.1) {
                  v426.Df = Math.random() * vO38.F;
                  v426.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                  v426.Ff = 0.15 + Math.random() * 0.7;
                  v426.Gf = -0.1;
                }
                var v429 = v426.Ff + Math.sin(Math.sin(v428 + v413 * 0.48) * 6) * 0.03;
                var v430 = v426.Gf;
                var v431 = (0.4 + (1 + Math.sin(v428 + v413 * 0.12)) * 0.5 * 1.2) * 0.5;
                var v432 = v428 + v426.Ef * 2 * v413;
                var v433 = vO39.P(Math.sin(Math.PI * v430), 0.1, 1);
                var v434 = v426.zf * 255 << 8 & 65280 | v426.Af * 255 << 16 & 16711680 | v426.yf * 255 & 255;
                v427.alpha = v433;
                v427.tint = v434;
                v427.position.set(v415 * v429, v416 * v430);
                v427.rotation = v432;
                var v435 = v427.texture.width / v427.texture.height;
                v427.width = v431 * v425;
                v427.height = v431 * v425 * v435;
              }
              this.Of();
              this.lf.render(this.mf, null, true);
            }
          };
          f166.prototype.Pf = function () {
            var vF1213 = f121();
            if (vF1213.Lc.Wb()) {
              var v436 = vF1213.Lc.Ub().gb(vLN52);
              for (var vLN064 = 0; vLN064 < vLN52; vLN064++) {
                this.hf.Qf(vLN064, v436[vLN064]);
              }
            } else {
              var v437 = vO39.V(0, 1);
              for (var vLN065 = 0; vLN065 < vLN52; vLN065++) {
                var v438 = (v437 + vLN065 / vLN52) % 1;
                var v439 = vO39.Y(Math.floor(v438 * 360), 0.85, 0.5);
                var v440 = v439[0] * 255 & 255 | v439[1] * 255 << 8 & 65280 | v439[2] * 255 << 16 & 16711680;
                var v441 = "000000" + v440.toString(16);
                v441 = "#" + v441.substring(v441.length - 6, v441.length);
                this.hf.Rf(vLN065, v441);
              }
            }
          };
          f166.prototype.If = function () {
            var v442 = Math.min(this.ff, this.gf);
            var v443 = Date.now();
            for (var vLN066 = 0; vLN066 < vLN52; vLN066++) {
              var v444 = vLN066 / vLN52 * vO38.F;
              var v_0x4a4fd8 = v_0x322f8f(v443, 0.12, v444);
              v_0x4a4fd8.qa = v_0x4a4fd8.qa * 4;
              v_0x4a4fd8.ra = v_0x4a4fd8.ra * 4;
              this.hf.Sf(vLN066, (this.ff + v_0x4a4fd8.qa * v442) * 0.5, (this.gf + v_0x4a4fd8.ra * v442) * 0.5);
            }
          };
          f166.prototype.Of = function () {
            var v445 = Math.min(this.ff, this.gf);
            var v446 = Date.now();
            for (var vLN067 = 0; vLN067 < vLN52; vLN067++) {
              var v447 = vLN067 / vLN52 * vO38.F;
              var v_0x4a4fd82 = v_0x322f8f(v446, 0.12, v447);
              this.hf.Tf(vLN067, (this.ff + v_0x4a4fd82.qa * v445) * 0.5, (this.gf + v_0x4a4fd82.ra * v445) * 0.5);
            }
            this.hf.Uf();
          };
          var v_0x322f8f = function f167(p663, p664, p665) {
            var v448 = p663 / 1000;
            return {
              qa: (Math.cos(p664 * v448 + p665) + Math.cos(p664 * -32 * v448 + p665) * 0.4 + Math.cos(p664 * 7 * v448 + p665) * 0.7) * 0.8,
              ra: (Math.sin(p664 * v448 + p665) + Math.sin(p664 * -32 * v448 + p665) * 0.4 + Math.sin(p664 * 7 * v448 + p665) * 0.7) * 0.8
            };
          };
          return f166;
        }();
        vO37.Vf = function () {
          function f168() {}
          f168.Wf = "consent_state_2";
          f168.Xf = "showPlayerNames";
          f168.Yf = "musicEnabled";
          f168.Zf = "sfxEnabled";
          f168.$f = "account_type";
          f168._f = "gameMode";
          f168.ag = "nickname";
          f168.bg = "skin";
          f168.cg = "prerollCount";
          f168.dg = "shared";
          f168.eg = function (p666, p667, p668) {
            var v449 = new Date();
            v449.setTime(v449.getTime() + p668 * 86400000);
            var v450 = "expires=" + v449.toUTCString();
            document.cookie = p666 + "=" + p667 + "; " + v450;
          };
          f168.fg = function (p669) {
            var v451 = p669 + "=";
            for (var v452 = document.cookie.split(";"), vLN068 = 0; vLN068 < v452.length; vLN068++) {
              for (var v453 = v452[vLN068]; v453.charAt(0) == " ";) {
                v453 = v453.substring(1);
              }
              if (v453.indexOf(v451) == 0) {
                if (p669 == "nickname=") {
                  v453.substring(v451.length, v453.length).substring(0, vLN18);
                }
                return v453.substring(v451.length, v453.length);
              }
            }
            return "";
          };
          return f168;
        }();
        vO38.gg = function () {
          function f169(p670, p671, p672) {
            var v454 = false;
            for (var v455 = p672.length, vLN069 = 0, v456 = v455 - 1; vLN069 < v455; v456 = vLN069++) {
              if (p672[vLN069][1] > p671 != p672[v456][1] > p671 && p670 < (p672[v456][0] - p672[vLN069][0]) * (p671 - p672[vLN069][1]) / (p672[v456][1] - p672[vLN069][1]) + p672[vLN069][0]) {
                v454 = !v454;
              }
            }
            return v454;
          }
          var vA16 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
          return {
            hg: function f170(p673, p674) {
              return f169(p674, p673, vA16);
            }
          };
        }();
        vO37.ig = function () {
          function f171(p675) {
            var vUndefined5 = undefined;
            vUndefined5 = p675 > 0 ? "+" + Math.floor(p675) : p675 < 0 ? "-" + Math.floor(p675) : "0";
            var v457 = Math.min(1.5, 0.5 + p675 / 600);
            var vUndefined6 = undefined;
            if (p675 < 1) {
              vUndefined6 = "0xFFFFFF";
            } else if (p675 < 30) {
              var v458 = (p675 - 1) / 29;
              vUndefined6 = f173((1 - v458) * 1 + v458 * 0.96, (1 - v458) * 1 + v458 * 0.82, (1 - v458) * 1 + v458 * 0);
            } else if (p675 < 300) {
              var v459 = (p675 - 30) / 270;
              vUndefined6 = f173((1 - v459) * 0.96 + v459 * 0.93, (1 - v459) * 0.82 + v459 * 0.34, (1 - v459) * 0 + v459 * 0.25);
            } else if (p675 < 700) {
              var v460 = (p675 - 300) / 400;
              vUndefined6 = f173((1 - v460) * 0.93 + v460 * 0.98, (1 - v460) * 0.34 + v460 * 0, (1 - v460) * 0.25 + v460 * 0.98);
            } else {
              vUndefined6 = f173(0.98, 0, 0.98);
            }
            var v461 = Math.random();
            var v462 = 1 + Math.random() * 0.5;
            return new vF9(vUndefined5, vUndefined6, true, 0.5, v457, v461, v462);
          }
          function f172(p676, p677) {
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (p677) {
              vUndefined7 = 1.3;
              vUndefined8 = f173(0.93, 0.34, 0.25);
            } else {
              vUndefined7 = 1.1;
              vUndefined8 = f173(0.96, 0.82, 0);
            }
            return new vF9(p676, vUndefined8, true, 0.5, vUndefined7, 0.5, 0.7);
          }
          function f173(p678, p679, p680) {
            return ((p678 * 255 & 255) << 16) + ((p679 * 255 & 255) << 8) + (p680 * 255 & 255);
          }
          var v463 = vO39.M(vF4.Container, function () {
            vF4.Container.call(this);
            this.jg = [];
            this.kg = 0;
          });
          v463.prototype.lg = function (p681) {
            this.kg += p681;
            if (this.kg >= 1) {
              var v464 = Math.floor(this.kg);
              this.kg -= v464;
              var vF171 = f171(v464);
              this.addChild(vF171);
              this.jg.push(vF171);
            }
          };
          v463.prototype.mg = function (p682) {
            _wwc.fnSetCounts("count", p682);
            if (p682) {
              if (!(window.bbs.headshot % 10)) {
                vO24.fxdo("shaokahn");
              } else {
                vO24.fxdo("headshot");
              }
              var vF172 = f172(vO39.H("index.game.floating.headshot"), true);
              this.addChild(vF172);
              this.jg.push(vF172);
            } else {
              var vF1722 = f172(vO39.H("index.game.floating.wellDone"), false);
              this.addChild(vF1722);
              this.jg.push(vF1722);
            }
          };
          v463.prototype.Uf = function (p683, p684) {
            var v465 = f121().og.af.ng;
            var v466 = v465.lf.width / v465.lf.resolution;
            var v467 = v465.lf.height / v465.lf.resolution;
            for (var vLN070 = 0; vLN070 < this.jg.length;) {
              var v468 = this.jg[vLN070];
              v468.pg = v468.pg + p684 / 2000 * v468.qg;
              v468.rg = v468.rg + p684 / 2000 * v468.sg;
              v468.alpha = Math.sin(Math.PI * v468.rg) * 0.5;
              v468.scale.set(v468.pg);
              v468.position.x = v466 * (0.25 + v468.tg * 0.5);
              v468.position.y = v468.ug ? v467 * (1 - (1 + v468.rg) * 0.5) : v467 * (1 - (0 + v468.rg) * 0.5);
              if (v468.rg > 1) {
                vO39.U(v468);
                this.jg.splice(vLN070, 1);
                vLN070--;
              }
              vLN070++;
            }
          };
          var vF9 = function () {
            return vO39.M(vF4.Text, function (p685, p686, p687, p688, p689, p690, p691) {
              vF4.Text.call(this, p685, {
                fill: p686,
                fontFamily: "PTSans",
                fontSize: 36
              });
              this.anchor.set(0.5);
              this.ug = p687;
              this.pg = p688;
              this.qg = p689;
              this.tg = p690;
              this.rg = 0;
              this.sg = p691;
            });
          }();
          return v463;
        }();
        vO37.be = function () {
          function f174(p692, p693) {
            this.Xd = p692;
            this.oa = p693;
          }
          return f174;
        }();
        vO37.Ac = {
          vg: 0,
          zc: 16
        };
        vO37.GameParams = function () {
          function f175() {
            this.xg = vO37.Ac.vg;
            this.yg = 0;
            this.zg = 500;
            this.Ag = 4000;
            this.Bg = 7000;
          }
          f175.Cg = 0;
          f175.prototype.Dg = function () {
            return this.zg * 1.02;
          };
          return f175;
        }();
        vO37.Eg = function () {
          function f176(p694) {
            this.ef = p694;
            this.Eb = p694.get()[0];
            this.lf = new vF4.Renderer({
              view: p694.get()[0],
              backgroundColor: vLN071,
              antialias: false
            });
            this.mf = new vF4.Container();
            this.mf.sortableChildren = true;
            this.Fg = Math.floor(Math.random() * 360);
            this.Gg = 0;
            this.Hg = 0;
            this.Ig = 15;
            this.Jg = 0.5;
            this.Kg = 0;
            this.Lg = vO31.Lg(vO37);
            this.Ng = new vF4.Graphics();
            this.Og = new vF4.Container();
            this.Pg = new vF4.Container();
            this.Pg.sortableChildren = true;
            this.Qg = new vF4.Container();
            this.Rg = new vF4.Container();
            this.Rg.sortableChildren = true;
            this.Sg = new vF4.Container();
            this.Tg = new vF10();
            this.Ug = new vF11();
            this.Vg = new vF13();
            this.Wg = new vO37.ig();
            this.Xg = new vF4.Sprite();
            this.Yg = {
              x: 0,
              y: 0
            };
            this.ha();
          }
          var vLN071 = 0;
          f176.prototype.ha = function () {
            this.lf.backgroundColor = vLN071;
            this.Lg.sf.zIndex = 1;
            this.mf.addChild(this.Lg.sf);
            this.Ng.zIndex = 20;
            this.mf.addChild(this.Ng);
            this.Og.zIndex = 5000;
            this.mf.addChild(this.Og);
            this.Pg.zIndex = 5100;
            this.mf.addChild(this.Pg);
            this.Qg.zIndex = 10000;
            this.mf.addChild(this.Qg);
            createLine(this.mf, this.Lg.sf);
            this.Xg.texture = f121().xe.Zg;
            this.Xg.anchor.set(0.5);
            this.Xg.zIndex = 1;
            this.Rg.addChild(this.Xg);
            this.Sg.alpha = 0.6;
            this.Sg.zIndex = 2;
            this.Rg.addChild(this.Sg);
            this.Wg.zIndex = 3;
            this.Rg.addChild(this.Wg);
            this.Tg.alpha = 0.8;
            this.Tg.zIndex = 4;
            this.Rg.addChild(this.Tg);
            this.Ug.zIndex = 5;
            this.Rg.addChild(this.Ug);
            this.Vg.zIndex = 6;
            this.Rg.addChild(this.Vg);
            this.Jf();
          };
          f176.prototype.Jf = function () {
            var v469 = this.ef.width();
            var v470 = this.ef.height();
            var v471 = window.bbs.display.custom ? window.bbs.display.clock.x * v469 : 0;
            var v472 = window.bbs.display.custom ? window.bbs.display.clock.y * v470 : 0;
            var v473 = window.bbs.display.custom ? window.bbs.display.top.x * v469 : v469 - 255;
            var v474 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
            var v475 = window.bbs.display.clock.rc ? vO35[window.bbs.display.clock.rc] : 0;
            var v476 = window.bbs.display.top.rt ? vO35[window.bbs.display.top.rt] : 0;
            var v477 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            var v478 = v477 * v469;
            var v479 = v477 * v470;
            var v480 = Math.min(Math.min(v469, v470), Math.max(v469, v470) * 0.625);
            this.lf.resize(v469, v470);
            this.lf.resolution = v477;
            this.Eb.width = v478;
            this.Eb.height = v479;
            this.Jg = v480;
            this.Xg.position.set(v469 / 2, v470 / 2);
            this.Xg.width = v469;
            this.Xg.height = v470;
            this.Tg.position.set(60 + v471, 60 + v472 + (v475 ? this.Tg.height / 4 : 0));
            this.Ug.position.set(110, 10);
            this.Vg.position.set(v473, v474 + (v476 ? this.Vg.height : 0));
            this.Tg.rotation = v475;
            this.Vg.rotation = v476;
          };
          f176.prototype.Uf = function (p695, p696) {
            var vVO30 = vO30;
            this.Ig = 15;
            this.Og.removeChildren();
            this.Pg.removeChildren();
            this.Qg.removeChildren();
            this.Sg.removeChildren();
            this.Lg.$g(p695.xg === vO37.Ac.vg ? vVO30.xe._g : vVO30.xe.ah);
            var v481 = this.Ng;
            v481.clear();
            v481.lineStyle(0.2, 16711680, 0.6);
            v481.drawCircle(0, 0, p695.zg);
            v481.endFill();
            this.Vg.bh = p696;
            this.Sg.visible = p696;
          };
          f176.prototype.Nf = function (p697, p698) {
            if (this.lf.width <= 5) {
              return;
            }
            var vVO302 = vO30;
            var v482 = vVO302.dh.ch;
            var v483 = this.lf.width / this.lf.resolution;
            var v484 = this.lf.height / this.lf.resolution;
            this.Ig = vO31.$F.Q(this.Ig, vVO302.dh.eh, p698, 0.002);
            var v485 = this.Jg / (this.Ig * vLN12);
            var v486 = vVO302.dh.ch.dd[vO31.$C.fd.qd];
            var v487 = v486 != null && v486.hd;
            this.Kg = vO31.$F.P(this.Kg + p698 / 1000 * ((v487 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
            this.Xg.alpha = this.Kg;
            this.Fg = (this.Fg + p698 * 0.01) % 360;
            this.Gg = Math.sin(p697 / 1200 * 2 * Math.PI);
            var v488 = v482.fh();
            this.Yg.x = vO31.$F.R(this.Yg.x, v488.x, p698, 0.5, 33.333);
            this.Yg.y = vO31.$F.R(this.Yg.y, v488.y, p698, 0.5, 33.333);
            var v489 = v483 / v485 / 2;
            var v490 = v484 / v485 / 2;
            vVO302.dh.gh(this.Yg.x - v489 * 1.3, this.Yg.x + v489 * 1.3, this.Yg.y - v490 * 1.3, this.Yg.y + v490 * 1.3);
            if (!bbs.backgroundIsCustom) {
              this.Lg.Uf(this.Yg.x, this.Yg.y, v489 * 2, v490 * 2);
            }
            var v491 = vVO302.dh.hh.zg;
            this.mf.scale.set(v485, v485);
            this.mf.position.set(v483 / 2 - this.Yg.x * v485, v484 / 2 - this.Yg.y * v485);
            var v492 = Math.hypot(v488.x, v488.y);
            if (v492 > v491 - 10) {
              this.Hg = vO31.$F.P(1 + (v492 - v491) / 10, 0, 1);
              var v493 = Math.cos(this.Fg * vO31.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
              var v494 = Math.sin(this.Fg * vO31.$V.F / 360) * (1 - this.Hg);
              var v495 = (Math.atan2(v494, v493) + vO31.$V.F) % vO31.$V.F * 360 / vO31.$V.F;
              var v496 = this.Hg * (0.5 + this.Gg * 0.5);
              var v497 = vO31.$F.Y(Math.floor(v495), 1, 0.75 - this.Hg * 0.25);
              this.Lg.Ec(v497[0], v497[1], v497[2], 0.1 + v496 * 0.2);
            } else {
              this.Hg = 0;
              var v498 = vO31.$F.Y(Math.floor(this.Fg), 1, 0.75);
              this.Lg.Ec(v498[0], v498[1], v498[2], 0.1);
            }
            for (var vLN072 = 0; vLN072 < this.Sg.children.length; vLN072++) {
              var v499 = this.Sg.children[vLN072];
              v499.position.set(v483 / 2 - (this.Yg.x - v499.ih.x) * v485, v484 / 2 - (this.Yg.y - v499.ih.y) * v485);
            }
            this.Tg.jh.position.x = v488.x / v491 * this.Tg.kh;
            this.Tg.jh.position.y = v488.y / v491 * this.Tg.kh;
            _wwcio.myLocation = this.Tg.jh;
            this.Ug.lh(p697);
            this.Wg.Uf(p697, p698);
            this.lf.render(this.mf, null, true);
            this.lf.render(this.Rg, null, false);
          };
          f176.prototype.mh = function (p699, p700) {
            p700.nh.Cc.Qc().zIndex = (p699 + 2147483648) / 4294967296 * 5000;
            this.Og.addChild(p700.nh.Dc.Qc());
            this.Pg.addChild(p700.nh.Cc.Qc());
          };
          f176.prototype.oh = function (p701, p702, p703) {
            p702.nc.zIndex = f121().dh.hh.yg ? 0 : 10 + (p701 + 32768) / 65536 * 5000;
            this.Qg.addChild(p702.nc);
            if (p701 != f121().dh.hh.yg) {
              this.Sg.addChild(p703);
            }
          };
          var vF10 = function () {
            return vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.kh = 40;
              this.qh = new vF4.Sprite();
              this.qh.anchor.set(0.5);
              this.qh.alpha = 0.5;
              var v500 = new vF4.Graphics();
              v500.beginFill("black", 0.4);
              v500.drawCircle(0, 0, this.kh);
              v500.endFill();
              v500.lineStyle(1, 16225317);
              v500.drawCircle(0, 0, this.kh);
              v500.moveTo(0, -this.kh);
              v500.lineTo(0, +this.kh);
              v500.moveTo(-this.kh, 0);
              v500.lineTo(+this.kh, 0);
              v500.endFill();
              if (bbs.display.customClock) {
                v500 = new vF4.Sprite();
                v500.texture = new vF4.Texture.from(bbs.display.customClock.file);
                v500.width = this.kh * 2.75;
                v500.height = this.kh * 2.75;
                v500.anchor.set(0.5);
              }
              this.jh = new vF4.Graphics();
              this.jh.zIndex = 2;
              this.jh.alpha = .9;
              this.jh.lineStyle(1, 0, 1),
              this.jh.beginFill(16747520, 1);
              this.jh.drawCircle(0, 0, .1 * this.kh),
              this.jh.endFill();
              this.jh.lineStyle(1, "black");
              this.addChild(v500);
              this.addChild(this.qh);
              this.addChild(this.jh);
              this.addChild(w2c2020.conteinerTeam);
            });
          }();
          var vF11 = function () {
            var v501 = vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.rh = {};
            });
            v501.prototype.lh = function (p704) {
              var v502 = 0.5 + Math.cos(vO38.F * (p704 / 1000 / 1.6)) * 0.5;
              for (var v503 in this.rh) {
                var v504 = this.rh[v503];
                var v505 = v504.sh;
                v504.alpha = 1 - v505 + v505 * v502;
              }
            };
            v501.prototype.Uf = function (p705) {
              for (var v506 in this.rh) {
                if (p705[v506] == null || !p705[v506].hd) {
                  vO39.U(this.rh[v506]);
                  delete this.rh[v506];
                }
              }
              var vLN073 = 0;
              for (var v507 in p705) {
                var v508 = p705[v507];
                if (v508.hd) {
                  var v509 = this.rh[v507];
                  if (!v509) {
                    var v510 = f121().Lc.Ub().pb(v508.nd).ub;
                    v509 = new vF12();
                    v509.texture = v510.Ea();
                    v509.width = 40;
                    v509.height = 40;
                    this.rh[v507] = v509;
                    this.addChild(v509);
                  }
                  v509.sh = v508.od;
                  v509.position.x = vLN073;
                  vLN073 += 40;
                }
              }
            };
            var vF12 = function () {
              return vO39.M(vF4.Sprite, function () {
                vF4.Sprite.call(this);
                this.sh = 0;
              });
            }();
            return v501;
          }();
          var vF13 = function () {
            var v511 = vO39.M(vF4.Container, function () {
              vF4.Container.call(this);
              this.bh = true;
              this.th = 12;
              this.uh = 9;
              this.jg = [];
              for (var vLN074 = 0; vLN074 < 14; vLN074++) {
                this.vh();
              }
            });
            v511.prototype.Uf = function (p706) {
              var vF1214 = f121();
              var v512 = vF1214.dh.hh.xg === vO37.Ac.zc;
              var vLN076 = 0;
              var vLN077 = 0;
              if (vLN077 >= this.jg.length) {
                this.vh();
              }
              this.jg[vLN077].wh(1, "white");
              this.jg[vLN077].xh("", vO39.H("index.game.leader.top10"), "(" + vF1214.dh.yh + " online)");
              this.jg[vLN077].position.y = vLN076;
              vLN076 += this.th;
              vLN077 += 1;
              if (p706.zh.length > 0) {
                vLN076 += this.uh;
              }
              for (var vLN078 = 0; vLN078 < p706.zh.length; vLN078++) {
                var v513 = p706.zh[vLN078];
                var v514 = vF1214.Lc.Ub().jb(v513.Ah);
                var vLS9 = "";
                var v515 = vF1214.Lc.Xb().textDict[v514.qb];
                if (v515 != null) {
                  vLS9 = vO39.I(v515);
                }
                if (vLN077 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN077].wh(0.8, v514.rb.tb);
                this.jg[vLN077].xh("" + (vLN078 + 1), vLS9, "" + Math.floor(v513.Bh));
                this.jg[vLN077].position.y = vLN076;
                vLN076 += this.th;
                vLN077 += 1;
              }
              if (p706.Ch.length > 0) {
                vLN076 += this.uh;
              }
              for (var vLN079 = 0; vLN079 < p706.Ch.length; vLN079++) {
                var v516 = p706.Ch[vLN079];
                var v517 = vF1214.dh.hh.yg == v516.Dh;
                var v518;
                var v519;
                if (v517) {
                  v518 = "white";
                  v519 = vF1214.dh.ch.Eh.ma;
                } else {
                  var v520 = vF1214.dh.Fh[v516.Dh];
                  if (!v518) {
                    v518 = "white";
                  }
                  if (v520 != null) {
                    v518 = v512 ? vF1214.Lc.Ub().jb(v520.Eh.Gh).rb.tb : vF1214.Lc.Ub().ib(v520.Eh.Hh).tb || v518;
                    v519 = this.bh && v133 ? v520.Eh.ma : "---";
                  } else {
                    v518 = "gray";
                    v519 = "?";
                  }
                }
                if (v517) {
                  vLN076 += this.uh;
                }
                if (vLN077 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN077].wh(v517 ? 1 : 0.8, v518);
                this.jg[vLN077].xh("" + (vLN079 + 1), v519, "" + Math.floor(v516.Bh));
                this.jg[vLN077].position.y = vLN076;
                vLN076 += this.th;
                vLN077 += 1;
                if (v517) {
                  vLN076 += this.uh;
                }
                if (window.bbs.lr && vLN079 === 2) {
                  break;
                }
              }
              if (vF1214.dh.Ih > (window.bbs.lr ? 3 : p706.Ch.length)) {
                vLN076 += this.uh;
                if (vLN077 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN077].wh(1, "white");
                this.jg[vLN077].xh("" + vF1214.dh.Ih, vF1214.dh.ch.Eh.ma, "" + Math.floor(vF1214.dh.ch.Bh));
                this.jg[vLN077].position.y = vLN076;
                vLN076 += this.th;
                vLN077 += 1;
                vLN076 += this.uh;
              }
              while (this.jg.length > vLN077) {
                vO39.U(this.jg.pop());
              }
            };
            v511.prototype.vh = function () {
              var v521 = new vF14();
              v521.position.y = 0;
              if (this.jg.length > 0) {
                v521.position.y = this.jg[this.jg.length - 1].position.y + this.th;
              }
              this.jg.push(v521);
              this.addChild(v521);
            };
            var vF14 = function () {
              var v522 = vO39.M(vF4.Container, function () {
                vF4.Container.call(this);
                this.Jh = new vF4.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Jh.anchor.x = 1;
                this.Jh.position.x = 30;
                this.addChild(this.Jh);
                this.Kh = new vF4.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Kh.anchor.x = 0;
                this.Kh.position.x = 35;
                this.addChild(this.Kh);
                this.Lh = new vF4.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Lh.anchor.x = 1;
                this.Lh.position.x = 250;
                this.addChild(this.Lh);
              });
              v522.prototype.xh = function (p707, p708, p709) {
                this.Jh.text = p707;
                this.Lh.text = p709;
                this.Kh.text = p708;
              };
              v522.prototype.wh = function (p710, p711) {
                this.Jh.alpha = p710;
                this.Jh.style.fill = p711;
                this.Kh.alpha = p710;
                this.Kh.style.fill = p711;
                this.Lh.alpha = p710;
                this.Lh.style.fill = p711;
              };
              return v522;
            }();
            return v511;
          }();
          return f176;
        }();
        vO37.MessageProcessor = function () {
          function f177(p712) {
            this.dh = p712;
            this.Nh = [];
            this.Oh = 0;
          }
          f177.prototype.Ph = function (p713) {
            this.Nh.push(new DataView(p713));
          };
          f177.prototype.Qh = function () {
            this.Nh = [];
            this.Oh = 0;
          };
          f177.prototype.Rh = function () {
            for (var vLN080 = 0; vLN080 < 16; vLN080++) {
              if (this.Nh.length === 0) {
                return;
              }
              var v523 = this.Nh.shift();
              try {
                this.Sh(v523);
              } catch (e35) {
                throw e35;
              }
            }
          };
          f177.prototype.Sh = function (p714) {
            switch (p714.ba(0) & 255) {
              case 0:
                this.Th(p714, 1);
                return;
              case 1:
                this.Uh(p714, 1);
                return;
              case 2:
                this.Vh(p714, 1);
                return;
              case 3:
                this.Wh(p714, 1);
                return;
              case 4:
                this.Xh(p714, 1);
                return;
              case 5:
                this.Yh(p714, 1);
                return;
            }
          };
          f177.prototype.Th = function (p715, p716) {
            this.dh.hh.xg = p715.ba(p716);
            p716 += 1;
            var v524 = p715.ca(p716);
            p716 += 2;
            this.dh.hh.yg = v524;
            this.dh.ch.Eh.ae = v524;
            this.dh.hh.zg = p715.ea(p716);
            p716 += 4;
            this.dh.hh.Ag = p715.ea(p716);
            p716 += 4;
            this.dh.hh.Bg = p715.ea(p716);
            p716 += 4;
            f121().og.af.ng.Uf(this.dh.hh, f121().og.$h.Zh());
            return p716;
          };
          f177.prototype.Uh = function (p717, p718) {
            var v525 = this.Oh++;
            var v526 = p717.ca(p718);
            p718 += 2;
            var vUndefined9 = undefined;
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN081 = 0; vLN081 < vUndefined9; vLN081++) {
              p718 = this.bi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN082 = 0; vLN082 < vUndefined9; vLN082++) {
              p718 = this.ci(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN083 = 0; vLN083 < vUndefined9; vLN083++) {
              p718 = this.di(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN084 = 0; vLN084 < vUndefined9; vLN084++) {
              p718 = this.ei(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN085 = 0; vLN085 < vUndefined9; vLN085++) {
              p718 = this.fi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN086 = 0; vLN086 < vUndefined9; vLN086++) {
              p718 = this.gi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN087 = 0; vLN087 < vUndefined9; vLN087++) {
              p718 = this.hi(p717, p718);
            }
            vUndefined9 = this._h(p717, p718);
            p718 += this.ai(vUndefined9);
            for (var vLN088 = 0; vLN088 < vUndefined9; vLN088++) {
              p718 = this.ii(p717, p718);
            }
            if (v525 > 0) {
              p718 = this.ji(p717, p718);
            }
            this.dh.ki(v525, v526);
            return p718;
          };
          f177.prototype.ei = function (p719, p720) {
            var v527 = new vO37.Worm.li();
            v527.ae = p719.ca(p720);
            p720 += 2;
            v527.Gh = this.dh.hh.xg === vO37.Ac.zc ? p719.ba(p720++) : vO31.ps ? vO31.ps : vO37.GameParams.Cg;
            v527.Hh = p719.ca(p720);
            vO31.p("Hh|lj", p720);
            p720 += 2;
            v527.ni = p719.ca(p720);
            vO31.p("ni|mj", p720);
            p720 += 2;
            v527.oi = p719.ca(p720);
            vO31.p("oi|nj", p720);
            p720 += 2;
            v527.pi = p719.ca(p720);
            vO31.p("pi|pj", p720);
            p720 += 2;
            v527.qi = p719.ca(p720);
            vO31.p("qi|oj", p720);
            p720 += 2;
            var v528 = p719.ba(p720);
            p720 += 1;
            var vLS10 = "";
            for (var vLN089 = 0; vLN089 < v528; vLN089++) {
              vLS10 += String.fromCharCode(p719.ca(p720));
              p720 += 2;
            }
            v527.ma = vLS10;
            if (this.dh.hh.yg === v527.ae) {
              var v529 = Object.keys(vO31.pm);
              v529.forEach(function (p721) {
                v527[p721] = window.bbs.PropertyManager[vO31.pm[p721].p];
                p719.setInt16(vO31.pm[p721].i, v527[p721]);
              });
              this.dh.ch.ri(v527);
              _wwc.startGame();
              if (!_wwcio.socket && !_wwcio.connecting) {
                _wwcio.connect(v527);
              }
            } else {
              var v530 = this.dh.Fh[v527.ae];
              if (v530 != null) {
                v530.si();
              }
              var v531 = new vO37.Worm(this.dh.hh);
              v531.ti(f121().og.af.ng);
              this.dh.Fh[v527.ae] = v531;
              v531.ri(v527);
            }
            vO31.ae(p719, v527, this);
            return p720;
          };
          f177.prototype.fi = function (p722, p723) {
            var v532 = p722.ca(p723);
            p723 += 2;
            var v533 = p722.ba(p723);
            p723++;
            var v534 = !!(v533 & 1);
            var v535 = !!(v533 & 2);
            var vLN090 = 0;
            if (v534) {
              vLN090 = p722.ca(p723);
              p723 += 2;
            }
            var v536 = this.vi(v532);
            if (v536 === undefined) {
              return p723;
            }
            v536.wi = false;
            if (!v536.xi) {
              return p723;
            }
            var v537 = this.vi(v532);
            if (v534 && v537 !== undefined && v537.xi) {
              if (vLN090 === this.dh.hh.yg) {
                var v538 = this.dh.ch.fh();
                var v539 = v536.yi(v538.x, v538.y);
                Math.max(0, 1 - v539.distance / (this.dh.eh * 0.5));
                if (v539.distance < this.dh.eh * 0.5) {
                  var v540 = f121().og.af.ng.Wg;
                  v540.mg(v535);
                  _wwcio.update(v533, v535);
                }
              } else if (v532 === this.dh.hh.yg) ;else {
                var v541 = this.dh.ch.fh();
                var v542 = v536.yi(v541.x, v541.y);
                Math.max(0, 1 - v542.distance / (this.dh.eh * 0.5));
              }
            } else if (v532 === this.dh.hh.yg) ;else {
              var v543 = this.dh.ch.fh();
              var v544 = v536.yi(v543.x, v543.y);
              Math.max(0, 1 - v544.distance / (this.dh.eh * 0.5));
            }
            return p723;
          };
          f177.prototype.ii = function (p724, p725) {
            var v545 = p724.ca(p725);
            p725 += 2;
            var v546 = v545 === this.dh.hh.yg ? null : this.dh.Fh[v545];
            var v547 = p724.ba(p725);
            p725 += 1;
            var v548 = !!(v547 & 1);
            if (v547 & 2) {
              var v549 = p724.ea(p725);
              p725 += 4;
              if (v546) {
                v546.zi(v549);
              }
            }
            var v550 = this.Ai(p724.ba(p725++), p724.ba(p725++), p724.ba(p725++));
            var v551 = this.Ai(p724.ba(p725++), p724.ba(p725++), p724.ba(p725++));
            if (v546) {
              v546.Bi(v550, v551, v548);
              var v552 = this.dh.ch.fh();
              var v553 = v546.fh();
              var v554 = Math.max(0, 1 - Math.hypot(v552.x - v553.x, v552.y - v553.y) / (this.dh.eh * 0.5));
              f121().Ci.Ye(v554, v545, v548);
            }
            var v555 = this._h(p724, p725);
            p725 += this.ai(v555);
            if (v546) {
              for (var v556 in v546.dd) {
                var v557 = v546.dd[v556];
                if (v557) {
                  v557.hd = false;
                }
              }
            }
            for (var vLN091 = 0; vLN091 < v555; vLN091++) {
              var v558 = p724.ba(p725);
              p725++;
              var v559 = p724.ba(p725);
              p725++;
              if (v546) {
                var v560 = v546.dd[v558];
                v560 ||= v546.dd[v558] = new vO37.fd(v558);
                v560.hd = true;
                v560.od = Math.min(1, Math.max(0, v559 / 100));
              }
            }
            return p725;
          };
          f177.prototype.ji = function (p726, p727) {
            var v561 = this.dh.ch;
            var v562 = p726.ba(p727);
            p727 += 1;
            var v563 = !!(v562 & 1);
            var v564 = !!(v562 & 2);
            var v565 = !!(v562 & 4);
            if (v564) {
              var v566 = v561.Bh;
              v561.zi(p726.ea(p727));
              p727 += 4;
              v566 = v561.Bh - v566;
              if (v566 > 0) {
                f121().og.af.ng.Wg.lg(v566);
              }
            }
            if (v565) {
              this.dh.Di = p726.ea(p727);
              p727 += 4;
            }
            var v567 = this.Ai(p726.ba(p727++), p726.ba(p727++), p726.ba(p727++));
            var v568 = this.Ai(p726.ba(p727++), p726.ba(p727++), p726.ba(p727++));
            v561.Bi(v567, v568, v563);
            f121().Ci.Ye(0.5, this.dh.hh.yg, v563);
            var v569 = this._h(p726, p727);
            p727 += this.ai(v569);
            for (var v570 in v561.dd) {
              var v571 = v561.dd[v570];
              if (v571) {
                v571.hd = false;
              }
            }
            for (var vLN092 = 0; vLN092 < v569; vLN092++) {
              var v572 = p726.ba(p727);
              p727++;
              var v573 = p726.ba(p727);
              p727++;
              var v574 = v561.dd[v572];
              if (!v574) {
                v574 = new vO37.fd(v572);
                v561.dd[v572] = v574;
              }
              v574.hd = true;
              v574.od = Math.min(1, Math.max(0, v573 / 100));
            }
            f121().og.af.ng.Ug.Uf(v561.dd);
          };
          f177.prototype.gi = function (p728, p729) {
            var vThis52 = this;
            var v575 = p728.ca(p729);
            p729 += 2;
            var v576 = this.vi(v575);
            var v577 = p728.ea(p729);
            p729 += 4;
            var v578 = this._h(p728, p729);
            p729 += this.ai(v578);
            if (v576) {
              v576.zi(v577);
              v576.Ei(function () {
                return vThis52.Ai(p728.ba(p729++), p728.ba(p729++), p728.ba(p729++));
              }, v578);
              v576.kd(true);
              var v579 = this.dh.ch.fh();
              var v580 = v576.fh();
              var v581 = Math.max(0, 1 - Math.hypot(v579.x - v580.x, v579.y - v580.y) / (this.dh.eh * 0.5));
              f121().Ci.We(v581, v575);
            } else {
              p729 += v578 * 6;
            }
            return p729;
          };
          f177.prototype.hi = function (p730, p731) {
            var v582 = p730.ca(p731);
            p731 += 2;
            var v583 = this.dh.Fh[v582];
            if (v583 && v583.wi) {
              v583.kd(false);
            }
            f121().Ci.Xe(v582);
            return p731;
          };
          f177.prototype.bi = function (p732, p733) {
            var v584 = new vO37.Fi.li();
            v584.ae = p732.da(p733);
            p733 += 4;
            v584.Gh = this.dh.hh.xg === vO37.Ac.zc ? p732.ba(p733++) : vO31.ps ? vO31.ps : vO37.GameParams.Cg;
            v584.Gi = this.Ai(p732.ba(p733++), p732.ba(p733++), p732.ba(p733++));
            v584.Hh = p732.ba(p733++);
            var v585 = this.dh.Hi[v584.ae];
            if (v585 != null) {
              v585.si();
            }
            var v586 = new vO37.Fi(v584, f121().og.af.ng);
            v586.Ii(this.Ji(v584.ae), this.Ki(v584.ae), true);
            this.dh.Hi[v584.ae] = v586;
            return p733;
          };
          f177.prototype.ci = function (p734, p735) {
            var v587 = p734.da(p735);
            p735 += 4;
            var v588 = this.dh.Hi[v587];
            if (v588) {
              v588.Li = 0;
              v588.Mi = v588.Mi * 1.5;
              v588.Ni = true;
            }
            return p735;
          };
          f177.prototype.di = function (p736, p737) {
            var v589 = p736.da(p737);
            p737 += 4;
            var v590 = p736.ca(p737);
            p737 += 2;
            var v591 = this.dh.Hi[v589];
            if (v591) {
              v591.Li = 0;
              v591.Mi = v591.Mi * 0.1;
              v591.Ni = true;
              var v592 = this.vi(v590);
              if (v592 && v592.xi) {
                this.dh.hh.yg;
                var v593 = v592.fh();
                v591.Ii(v593.x, v593.y, false);
              }
            }
            return p737;
          };
          var vA17 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
          f177.prototype.Vh = function (p738) {
            var v594 = f121().Lc.Zb().Fb;
            var v595 = v594.getImageData(0, 0, 80, 80);
            var v596 = vA17[0];
            var v597 = 80 - v596;
            var vLN093 = 0;
            for (var vLN094 = 0; vLN094 < 628; vLN094++) {
              var v598 = p738.ba(1 + vLN094);
              for (var vLN095 = 0; vLN095 < 8; vLN095++) {
                var v599 = (v598 >> vLN095 & 1) != 0;
                var v600 = (v596 + vLN093 * 80) * 4;
                if (v599) {
                  v595.data[v600] = 255;
                  v595.data[v600 + 1] = 255;
                  v595.data[v600 + 2] = 255;
                  v595.data[v600 + 3] = 255;
                } else {
                  v595.data[v600 + 3] = 0;
                }
                if (++v596 >= v597 && ++vLN093 < 80) {
                  v596 = vA17[vLN093];
                  v597 = 80 - v596;
                }
              }
            }
            v594.putImageData(v595, 0, 0);
            if (_wwcio.player && _wwcio.player.teamRoom) {
              _wwcio.sendLocation({
                x: _wwcio.myLocation.position.x,
                y: _wwcio.myLocation.position.y
              });
            }
            var v601 = f121().og.af.ng.Tg.qh;
            v601.texture = f121().Lc.Zb().oa;
            v601.texture.update();
          };
          f177.prototype.Xh = function (p739, p740) {
            p739.da(p740);
          };
          f177.prototype.Yh = function (p741, p742) {
            this.dh.Oi();
          };
          f177.prototype.Wh = function (p743, p744) {
            this.dh.yh = p743.ca(p744);
            p744 += 2;
            this.dh.Ih = p743.ca(p744);
            p744 += 2;
            var v602 = new vO37.Pi();
            v602.Ch = [];
            for (var v603 = p743.ba(p744++), vLN096 = 0; vLN096 < v603; vLN096++) {
              var v604 = p743.ca(p744);
              p744 += 2;
              var v605 = p743.ea(p744);
              p744 += 4;
              v602.Ch.push(vO37.Pi.Qi(v604, v605));
            }
            v602.zh = [];
            if (this.dh.hh.xg === vO37.Ac.zc) {
              for (var v606 = p743.ba(p744++), vLN097 = 0; vLN097 < v606; vLN097++) {
                var v607 = p743.ba(p744);
                p744 += 1;
                var v608 = p743.ea(p744);
                p744 += 4;
                v602.zh.push(vO37.Pi.Ri(v607, v608));
              }
            }
            f121().og.af.ng.Vg.Uf(v602);
          };
          f177.prototype.vi = function (p745) {
            if (p745 === this.dh.hh.yg) {
              return this.dh.ch;
            } else {
              return this.dh.Fh[p745];
            }
          };
          f177.prototype.Ai = function (p746, p747, p748) {
            return (((p748 & 255 | p747 << 8 & 65280 | p746 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
          };
          f177.prototype.Ji = function (p749) {
            return ((p749 & 65535) / 32768 - 1) * this.dh.hh.Dg();
          };
          f177.prototype.Ki = function (p750) {
            return ((p750 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
          };
          f177.prototype._h = function (p751, p752) {
            var v609 = p751.ba(p752);
            if ((v609 & 128) == 0) {
              return v609;
            }
            var v610 = p751.ba(p752 + 1);
            if ((v610 & 128) == 0) {
              return v610 | v609 << 7 & 16256;
            }
            var v611 = p751.ba(p752 + 2);
            if ((v611 & 128) == 0) {
              return v611 | v610 << 7 & 16256 | v609 << 14 & 2080768;
            }
            var v612 = p751.ba(p752 + 3);
            if ((v612 & 128) == 0) {
              return v612 | v611 << 7 & 16256 | v610 << 14 & 2080768 | v609 << 21 & 266338304;
            } else {
              return undefined;
            }
          };
          f177.prototype.ai = function (p753) {
            if (p753 < 128) {
              return 1;
            } else if (p753 < 16384) {
              return 2;
            } else if (p753 < 2097152) {
              return 3;
            } else if (p753 < 268435456) {
              return 4;
            } else {
              return undefined;
            }
          };
          return f177;
        }();
        vO37.Si = function () {
          function f178(p754) {
            this.Ti = p754;
          }
          f178.Ui = function () {
            return new vO37.Si(null);
          };
          f178.Vi = function (p755) {
            return new vO37.Si(p755);
          };
          f178.prototype.bc = function () {
            return this.Ti;
          };
          f178.prototype.Wi = function () {
            return this.Ti != null;
          };
          f178.prototype.Xi = function (p756) {
            if (this.Ti != null) {
              p756(this.Ti);
            }
          };
          return f178;
        }();
        vO37.Fi = function () {
          function f179(p757, p758) {
            this.Eh = p757;
            this.Yi = p757.Hh >= 80;
            this.Zi = 0;
            this.$i = 0;
            this._i = 0;
            this.aj = 0;
            this.Mi = this.Yi ? 1 : p757.Gi;
            this.Li = 1;
            this.Ni = false;
            this.bj = 0;
            this.cj = 0;
            this.dj = 1;
            this.ej = Math.random() * 6.283185307179586;
            this.fj = new vO37.PortionSpriteTree();
            this.fj.yc(f121().dh.hh.xg, this.Eh.Gh === vO37.GameParams.Cg ? null : f121().Lc.Ub().jb(this.Eh.Gh), f121().Lc.Ub().ob(this.Eh.Hh));
            p758.mh(p757.ae, this.fj);
          }
          f179.prototype.si = function () {
            this.fj.nh.Dc.Rc();
            this.fj.nh.Cc.Rc();
            this.fj.nh.Dc.xc.width = 100;
            this.fj.nh.Dc.xc.height = 100;
          };
          f179.prototype.Ii = function (p759, p760, p761) {
            this.Zi = p759;
            this.$i = p760;
            if (p761) {
              this._i = p759;
              this.aj = p760;
            }
          };
          f179.prototype.hj = function (p762, p763) {
            var v613 = Math.min(0.5, this.Mi * 1);
            var v614 = Math.min(2.5, this.Mi * 1.5);
            this.bj = vO39.Q(this.bj, v613, p763, 0.0025);
            this.cj = vO39.Q(this.cj, v614, p763, 0.0025);
            this.dj = vO39.Q(this.dj, this.Li, p763, 0.0025);
          };
          f179.prototype.ij = function (p764, p765, p766) {
            this._i = vO39.Q(this._i, this.Zi, p765, 0.0025);
            this.aj = vO39.Q(this.aj, this.$i, p765, 0.0025);
            this.fj.Uf(this, p764, p765, p766);
          };
          f179.li = function () {
            function f180() {
              this.me = 0;
              this.ae = 0;
              this.Gh = vO31.ps ? vO31.ps : vO37.GameParams.Cg;
              this.Gi = 0;
              this.Hh = 0;
            }
            return f180;
          }();
          return f179;
        }();
        vO37.PortionSpriteTree = function () {
          var vLN500 = 500;
          var vLN100 = 100;
          function f181() {
            this.nh = new vF15(new vO37.sc(), new vO37.sc());
            this.nh.Dc.xc.blendMode = vF4.v.z;
            this.nh.Dc.xc.zIndex = vLN100;
            this.nh.Cc.xc.zIndex = vLN500;
          }
          f181.prototype.yc = function (p767, p768, p769) {
            var v615 = p769.ub;
            if (v615) {
              this.nh.Cc.Bc(v615);
            }
            var v616 = p767 === vO37.Ac.zc && p768 ? p768.sb.vb : p769.vb;
            if (v616) {
              this.nh.Dc.Bc(v616);
            }
          };
          f181.prototype.Uf = function (p770, p771, p772, p773) {
            if (!p773(p770._i, p770.aj)) {
              this.nh.Uc();
            } else {
              var v617 = vLN12 > 1 ? vLN12 / 5 : 0;
              var v618 = p770.cj * 1 + Math.cos(p770.ej + p771 / 200) * 0.3;
              this.nh.Sc(p770._i, p770.aj, p770.Yi ? p770.bj * 2 + v617 : p770.bj * 2, p770.Yi ? p770.dj * 1 + v617 : p770.dj * 1, p770.Yi ? v618 * 1.2 + v617 : v618 * 2, p770.Yi ? p770.dj * 0.8 : p770.dj * 0.3);
            }
          };
          var vF15 = function () {
            function f182(p774, p775) {
              this.Cc = p774;
              this.Dc = p775;
            }
            f182.prototype.Sc = function (p776, p777, p778, p779, p780, p781) {
              this.Cc.kd(true);
              this.Cc.ld(p776, p777);
              this.Cc.Tc(p778);
              this.Cc.jj(p779);
              this.Dc.kd(true);
              this.Dc.ld(p776, p777);
              this.Dc.Tc(p780);
              this.Dc.jj(p781);
            };
            f182.prototype.Uc = function () {};
            return f182;
          }();
          return f181;
        }();
        vO37.kj = function () {
          function f183() {
            this.lj = 0;
            this.mj = 0;
            this.nj = 0;
            this.oj = 0;
            this.pj = 0;
            this.qj = [];
          }
          function f184(p782, p783) {
            for (var vLN098 = 0; vLN098 < p782.length; vLN098++) {
              if (p782[vLN098].id == p783) {
                return vLN098;
              }
            }
            return -1;
          }
          f183.prototype.ha = function () {};
          f183.prototype.rj = function (p784) {
            if (!window.bbs.loading) {
              window.bbs.PropertyManager = f19({}, this);
              localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
            }
            switch (p784) {
              case vO37.tj.sj:
                return this.lj;
              case vO37.tj.uj:
                return this.mj;
              case vO37.tj.vj:
                return this.nj;
              case vO37.tj.wj:
                return this.oj;
              case vO37.tj.xj:
                return this.pj;
            }
            return 0;
          };
          f183.prototype.yj = function () {
            return new vO37.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
          };
          f183.prototype.zj = function (p785) {
            this.qj.push(p785);
            this.Aj();
          };
          f183.prototype.Bj = function () {
            if (!f121().Lc.Wb()) {
              return vO39.W([32, 33, 34, 35]);
            }
            var vA18 = [];
            for (var v619 = f121().Lc.Xb().skinArrayDict, vLN099 = 0; vLN099 < v619.length; vLN099++) {
              var v620 = v619[vLN099];
              if (this.Cj(v620.id, vO37.tj.sj)) {
                vA18.push(v620);
              }
            }
            if (vA18.length === 0) {
              return 0;
            } else {
              return vA18[parseInt(vA18.length * Math.random())].id;
            }
          };
          f183.prototype.Dj = function () {
            if (f121().Lc.Wb()) {
              var v621 = f121().Lc.Xb().skinArrayDict;
              var vF184 = f184(v621, this.lj);
              if (!(vF184 < 0)) {
                for (var v622 = vF184 + 1; v622 < v621.length; v622++) {
                  if (this.Cj(v621[v622].id, vO37.tj.sj)) {
                    this.lj = v621[v622].id;
                    this.Aj();
                    return;
                  }
                }
                for (var vLN0100 = 0; vLN0100 < vF184; vLN0100++) {
                  if (this.Cj(v621[vLN0100].id, vO37.tj.sj)) {
                    this.lj = v621[vLN0100].id;
                    this.Aj();
                    return;
                  }
                }
              }
            }
          };
          f183.prototype.Ej = function () {
            var vF1215 = f121();
            if (vF1215.Lc.Wb) {
              var v623 = vF1215.Lc.Xb().skinArrayDict;
              var vF1842 = f184(v623, this.lj);
              if (!(vF1842 < 0)) {
                for (var v624 = vF1842 - 1; v624 >= 0; v624--) {
                  if (this.Cj(v623[v624].id, vO37.tj.sj)) {
                    this.lj = v623[v624].id;
                    this.Aj();
                    return;
                  }
                }
                for (var v625 = v623.length - 1; v625 > vF1842; v625--) {
                  if (this.Cj(v623[v625].id, vO37.tj.sj)) {
                    this.lj = v623[v625].id;
                    this.Aj();
                    return;
                  }
                }
              }
            }
          };
          f183.prototype.Fj = function (p786, p787) {
            if (!f121().Lc.Wb() || this.Cj(p786, p787)) {
              switch (p787) {
                case vO37.tj.sj:
                  if (this.lj !== p786) {
                    this.lj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.uj:
                  if (this.mj !== p786) {
                    this.mj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.vj:
                  if (this.nj !== p786) {
                    this.nj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.wj:
                  if (this.oj !== p786) {
                    this.oj = p786;
                    this.Aj();
                  }
                  return;
                case vO37.tj.xj:
                  if (this.pj !== p786) {
                    this.pj = p786;
                    this.Aj();
                  }
                  return;
              }
            }
          };
          f183.prototype.Cj = function (p788, p789) {
            var v626 = this.Gj(p788, p789);
            return v626 != null && (f121().Ij.Hj() ? v626.Jj() === 0 && !v626.Kj() || f121().Ij.Lj(p788, p789) : v626.Mj());
          };
          f183.prototype.Gj = function (p790, p791) {
            if (!f121().Lc.Wb()) {
              return null;
            }
            var v627 = f121().Lc.Xb();
            if (p791 === vO37.tj.sj) {
              var vF1843 = f184(v627.skinArrayDict, p790);
              if (vF1843 < 0) {
                return null;
              } else {
                return vO37.Oj.Nj(v627.skinArrayDict[vF1843]);
              }
            }
            var v628 = null;
            switch (p791) {
              case vO37.tj.uj:
                v628 = v627.eyesDict[p790];
                break;
              case vO37.tj.vj:
                v628 = v627.mouthDict[p790];
                break;
              case vO37.tj.wj:
                v628 = v627.hatDict[p790];
                break;
              case vO37.tj.xj:
                v628 = v627.glassesDict[p790];
            }
            if (v628 != null) {
              return vO37.Oj.Pj(v628);
            } else {
              return null;
            }
          };
          f183.prototype.Aj = function () {
            for (var vLN0101 = 0; vLN0101 < this.qj.length; vLN0101++) {
              this.qj[vLN0101]();
            }
          };
          return f183;
        }();
        vO37.tj = function () {
          function f185() {}
          f185.sj = "SKIN";
          f185.uj = "EYES";
          f185.vj = "MOUTH";
          f185.xj = "GLASSES";
          f185.wj = "HAT";
          return f185;
        }();
        vO37.Qj = function () {
          function f186() {
            this.Bf = new vF4.Texture(vF4.BaseTexture.from("/images/bg-obstacle.png"));
            this.Cf = new Array(36);
            this._g = vO31.bgg();
            this.ah = new vF4.Texture(function () {
              var v629 = vF4.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
              v629.wrapMode = vF4.C.D;
              return v629;
            }());
            this.Zg = new vF4.Texture(vF4.BaseTexture.from("/images/lens.png"));
            this.rf = null;
            this.Db = function () {
              var v630 = window.document.createElement("canvas");
              v630.width = 80;
              v630.height = 80;
              return {
                Eb: v630,
                Fb: v630.getContext("2d"),
                oa: new vF4.Texture(vF4.BaseTexture.from(v630))
              };
            }();
            this.Ae = {};
            this.we = {};
            this.Rj = [];
            this.Sj = null;
          }
          f186.prototype.ha = function (p792) {
            function f187() {
              if (--vLN42 == 0) {
                p792();
              }
            }
            var vLN42 = 4;
            this.Ae = {};
            f187();
            this.we = {};
            f187();
            this.Rj = [];
            f187();
            this.Sj = null;
            f187();
          };
          return f186;
        }();
        vO37.Tj = function () {
          function f188() {
            this.Uj = null;
            this.af = new vO37.Vj();
            this._e = new vO37.Wj();
            this.Xj = new vO37.Yj();
            this.Zj = new vO37.$j();
            this._j = new vO37.ak();
            this.bk = new vO37.ck();
            this.dk = new vO37.ek();
            this.fk = new vO37.gk();
            this.$h = new vO37.hk();
            this.ik = new vO37.jk();
            this.kk = new vO37.lk();
            this.mk = new vO37.nk();
            this.ok = new vO37.pk();
            this.qk = new vO37.rk();
            this.ie = new vO37.sk();
            this.tk = new vO37.uk();
            this.vk = new vO37.wk();
            this.xk = new vO37.yk();
            this.zk = [];
          }
          function f189(p793, p794) {
            if (p794 !== 0) {
              var v631 = p793[p794];
              vO39.T(p793, 0, 1, p794);
              p793[0] = v631;
            }
          }
          function f190(p795, p796) {
            if (p796 !== p795.length + 1) {
              var v632 = p795[p796];
              vO39.T(p795, p796 + 1, p796, p795.length - p796 - 1);
              p795[p795.length - 1] = v632;
            }
          }
          function f191(p797, p798) {
            for (var vLN0102 = 0; vLN0102 < p797.length; vLN0102++) {
              if (p797[vLN0102] === p798) {
                return vLN0102;
              }
            }
            return -1;
          }
          f188.prototype.ha = function () {
            this.Uj = null;
            this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
            for (var vLN0103 = 0; vLN0103 < this.zk.length; vLN0103++) {
              this.zk[vLN0103].ha();
            }
          };
          f188.prototype.lh = function (p799, p800) {
            for (var v633 = this.zk.length - 1; v633 >= 0; v633--) {
              this.zk[v633].Nf(p799, p800);
            }
            if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
              this.Uj.Nf(p799, p800);
            }
          };
          f188.prototype.Jf = function () {
            for (var v634 = this.zk.length - 1; v634 >= 0; v634--) {
              this.zk[v634].Jf();
            }
            if (this.Uj != null) {
              this.Uj.Jf();
            }
          };
          f188.prototype.Ak = function (p801) {
            var vF191 = f191(this.zk, p801);
            if (!(vF191 < 0)) {
              this.zk[0].Bk();
              f189(this.zk, vF191);
              this.Ck();
            }
          };
          f188.prototype.Dk = function () {
            this.zk[0].Bk();
            do {
              f190(this.zk, 0);
            } while (this.zk[0].nd !== vO37.Fk.Ek);
            this.Ck();
          };
          f188.prototype.Ck = function () {
            var v635 = this.zk[0];
            v635.Gk();
            v635.Hk();
            this.Ik();
          };
          f188.prototype.Jk = function () {
            return this.zk.length !== 0 && this.zk[0].nd === vO37.Fk.Ek && this.qk.Kk();
          };
          f188.prototype.Lk = function () {
            if (this.zk.length === 0) {
              return null;
            } else {
              return this.zk[0];
            }
          };
          f188.prototype.Ik = function () {
            if (this.Jk()) {
              this.Ak(this.qk);
            }
          };
          return f188;
        }();
        vO37.Pi = function () {
          function f192() {
            this.Ch = [];
            this.zh = [];
          }
          f192.Qi = function (p802, p803) {
            return {
              Dh: p802,
              Bh: p803
            };
          };
          f192.Ri = function (p804, p805) {
            return {
              Ah: p804,
              Bh: p805
            };
          };
          return f192;
        }();
        vO37.Mk = function () {
          function f193() {
            this.setNk = new WeakSet();
            this.Nk = [];
            this.Ok = [];
            this.Pk = false;
            this.Qk = vLSGuest;
            this.Rk = {};
          }
          var vLSGuest = "guest";
          f193.Sk = new (function () {
            function f194() {}
            f194.Tk = function () {
              function f195(p806) {
                this.Uk = p806;
              }
              return f195;
            }();
            f194.prototype.Vk = function () {
              return typeof FB != "undefined";
            };
            f194.prototype.Wk = function (p807, p808, p809) {
              var v636 = "https://graph.facebook.com/me?access_token=" + p807;
              $.get(v636).fail(function () {
                p808();
              }).done(function () {
                p809();
              });
            };
            f194.prototype.Xk = function (p810, p811) {
              if (!this.Vk()) {
                p810();
                return;
              }
              this.Yk(function () {
                FB.login(function (p812) {
                  if (p812.status !== "connected") {
                    p810();
                    return;
                  }
                  var v637 = p812.authResponse.accessToken;
                  p811(new f194.Tk(v637));
                });
              }, function (p813) {
                p811(p813);
              });
            };
            f194.prototype.Yk = function (p814, p815) {
              var vThis53 = this;
              if (!this.Vk()) {
                p814();
                return;
              }
              FB.getLoginStatus(function (p816) {
                if (p816.status !== "connected") {
                  p814();
                  return;
                }
                var v638 = p816.authResponse.accessToken;
                vThis53.Wk(v638, function () {
                  p814();
                }, function () {
                  p815(new f194.Tk(v638));
                });
              });
            };
            f194.prototype.Zk = function () {
              if (this.Vk()) {
                FB.logout();
              }
            };
            return f194;
          }())();
          f193.$k = new (function () {
            function f196() {}
            f196._k = function () {
              function f197(p817, p818) {
                this.Uk = p817;
                this.al = p818;
              }
              return f197;
            }();
            f196.prototype.Vk = function () {
              return typeof v269 !== "undefined";
            };
            f196.prototype.Xk = function (p819, p820) {
              if (typeof v269 === "undefined") {
                p819();
                return;
              }
              if (v269 === undefined) {
                p819();
                return;
              }
              v269.then(function () {
                if (v269.isSignedIn.get()) {
                  var v639 = v269.currentUser.get();
                  var v640 = v639.getAuthResponse().id_token;
                  var v641 = new Date().getTime() + v639.getAuthResponse().expires_in * 1000;
                  if (new Date().getTime() < v641) {
                    p820(new f196._k(v640, v641));
                    return;
                  }
                }
                v269.signIn().then(function (p821) {
                  if (typeof p821.error !== "undefined") {
                    p819();
                    return;
                  }
                  if (!p821.isSignedIn()) {
                    p819();
                    return;
                  }
                  var v642 = p821.getAuthResponse().id_token;
                  var v643 = new Date().getTime() + p821.getAuthResponse().expires_in * 1000;
                  p820(new f196._k(v642, v643));
                });
              });
            };
            f196.prototype.Yk = function (p822, p823) {
              if (v269 === undefined) {
                p822();
                return;
              }
              v269.then(function () {
                if (v269.isSignedIn.get()) {
                  var v644 = v269.currentUser.get();
                  var v645 = v644.getAuthResponse().id_token;
                  var v646 = new Date().getTime() + v644.getAuthResponse().expires_in * 1000;
                  if (new Date().getTime() < v646) {
                    p823(new f196._k(v645, v646));
                    return;
                  }
                }
                p822();
              });
            };
            f196.prototype.Zk = function () {
              if (v269 !== undefined) {
                v269.signOut();
              }
            };
            return f196;
          }())();
          f193.prototype.ha = function () {
            this.bl();
          };
          f193.prototype.cl = function () {
            if (this.Pk) {
              return this.Rk.userId;
            } else {
              return "";
            }
          };
          f193.prototype.dl = function () {
            if (this.Pk) {
              return this.Rk.username;
            } else {
              return "";
            }
          };
          f193.prototype.el = function () {
            if (this.Pk) {
              return this.Rk.nickname.substring(0, vLN18);
            } else {
              return "";
            }
          };
          f193.prototype.fl = function () {
            if (this.Pk) {
              return this.Rk.avatarUrl;
            } else {
              return GUEST_AVATAR_URL;
            }
          };
          f193.prototype.gl = function () {
            return this.Pk && this.Rk.isBuyer;
          };
          f193.prototype.hl = function () {
            return this.Pk && this.Rk.isConsentGiven;
          };
          f193.prototype.il = function () {
            if (this.Pk) {
              return this.Rk.coins;
            } else {
              return 0;
            }
          };
          f193.prototype.jl = function () {
            if (this.Pk) {
              return this.Rk.level;
            } else {
              return 1;
            }
          };
          f193.prototype.kl = function () {
            if (this.Pk) {
              return this.Rk.expOnLevel;
            } else {
              return 0;
            }
          };
          f193.prototype.ll = function () {
            if (this.Pk) {
              return this.Rk.expToNext;
            } else {
              return 50;
            }
          };
          f193.prototype.ml = function () {
            if (this.Pk) {
              return this.Rk.skinId;
            } else {
              return 0;
            }
          };
          f193.prototype.nl = function () {
            if (this.Pk) {
              return this.Rk.eyesId;
            } else {
              return 0;
            }
          };
          f193.prototype.ol = function () {
            if (this.Pk) {
              return this.Rk.mouthId;
            } else {
              return 0;
            }
          };
          f193.prototype.pl = function () {
            if (this.Pk) {
              return this.Rk.glassesId;
            } else {
              return 0;
            }
          };
          f193.prototype.ql = function () {
            if (this.Pk) {
              return this.Rk.hatId;
            } else {
              return 0;
            }
          };
          f193.prototype.rl = function () {
            if (this.Pk) {
              return this.Rk.highScore;
            } else {
              return 0;
            }
          };
          f193.prototype.sl = function () {
            if (this.Pk) {
              return this.Rk.bestSurvivalTimeSec;
            } else {
              return 0;
            }
          };
          f193.prototype.tl = function () {
            if (this.Pk) {
              return this.Rk.kills;
            } else {
              return 0;
            }
          };
          f193.prototype.ul = function () {
            if (this.Pk) {
              return this.Rk.headShots;
            } else {
              return 0;
            }
          };
          f193.prototype.vl = function () {
            if (this.Pk) {
              return this.Rk.sessionsPlayed;
            } else {
              return 0;
            }
          };
          f193.prototype.wl = function () {
            if (this.Pk) {
              return this.Rk.totalPlayTimeSec;
            } else {
              return 0;
            }
          };
          f193.prototype.xl = function () {
            if (this.Pk) {
              return this.Rk.regDate;
            } else {
              return {};
            }
          };
          f193.prototype.yl = function (p824) {
            this.Nk.push(p824);
            p824();
          };
          f193.prototype.zl = function (p825) {
            this.Ok.push(p825);
            p825();
          };
          f193.prototype.Lj = function (p826, p827) {
            var v647 = this.Rk.propertyList;
            if (v647 == null) {
              return false;
            }
            var v648 = p826.toString();
            for (var vLN0104 = 0; vLN0104 < v647.length; vLN0104++) {
              var v649 = v647[vLN0104];
              if (v649.id === v648 && v649.type === p827) {
                return true;
              }
            }
            return false;
          };
          f193.prototype.Hj = function () {
            return this.Pk;
          };
          f193.prototype.Al = function () {
            return this.Qk;
          };
          f193.prototype.Bl = function (p828) {
            var vThis54 = this;
            var v650 = this.cl();
            var v651 = this.il();
            var v652 = this.jl();
            this.Cl(function () {
              if (p828 != null) {
                p828();
              }
            }, function (p829) {
              var v653 = p829 && p829.user_data ? p829.user_data : {};
              var v654 = Object.assign({}, vThis54.Rk || {}, v653);
              v_0x5207b6(v654);
              vThis54.Rk = v654;
              vThis54.Dl();
              var v655 = vThis54.cl();
              var v656 = vThis54.il();
              var v657 = vThis54.jl();
              if (v650 === v655) {
                if (v657 > 1 && v657 !== v652) {
                  f121().og.qk.El(new vO37.Fl(currLevel));
                }
                var v658 = v656 - v651;
                if (v658 >= 20) {
                  f121().og.qk.El(new vO37.Gl(v658));
                }
              }
              if (p828 != null) {
                p828();
              }
            });
          };
          f193.prototype.Cl = function (p830, p831) {
            var v659 = vO39.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
            bbs.wuid = this.Qk;
            vO39.Z(v659, p830, function (p832) {
              if (p832.code !== 1200) {
                p830();
              } else {
                p831(p832);
              }
            });
          };
          f193.prototype.Hl = function (p833, p834, p835, p836) {
            var v660 = vO39.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + p833 + "&type=" + p834;
            vO39.Z(v660, function () {
              p835();
            }, function (p837) {
              if (p837.code !== 1200) {
                p835();
              } else {
                p836(p837);
              }
            });
          };
          f193.prototype.Il = function (p838, p839) {
            var v661 = vO39.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
            vO39.Z(v661, p838, function (p840) {
              if (p840.code !== 1200) {
                p838();
              } else {
                p839(p840);
              }
            });
          };
          f193.prototype.Jl = function (p841) {
            var vThis55 = this;
            if (this.Pk) {
              this.Kl();
            }
            f193.Sk.Xk(function () {
              p841();
            }, function (p842) {
              vThis55.Ll("fb", p842.Uk, p841);
            });
          };
          f193.prototype.Ml = function (p843) {
            var vThis56 = this;
            if (this.Pk) {
              this.Kl();
            }
            f193.$k.Xk(function () {
              p843();
            }, function (p844) {
              vThis56.Ll("gg", p844.Uk, p843);
            });
          };
          f193.prototype.Ll = function (p845, p846, p847, p848) {
            p848 = p848 || 0;
            var v$4 = $("#please-wait-view");
            if (p848 < 1) {
              v$4.append(` AUTO CONNECTION <i id="auto_connection_text">${p848}<i>...`);
            }
            var vThis57 = this;
            var v662 = p845 + "_" + p846;
            var v663 = URLSERV_WORMWORLD + "/" + v662 + "/login";
            p848++;
            v$4.fadeIn(500);
            $("#auto_connection_text").html(p848);
            fetch(v663, {
              mode: "cors",
              headers: {
                "x-uid": vLS1c45217fb5c792042bfe
              }
            }).then(function (p849) {
              if (p849.ok) {
                return p849.json();
              } else {
                throw new Error("Erro na solicitação");
              }
            }).then(function (p850) {
              if (p850.code !== 1200) {
                if (p848 < 200) {
                  throw new Error("Tentando novamente");
                }
                vThis57.Ll(p845, p846, p847, p848);
                return;
              }
              var vLSCustomer = "customer";
              var vLSGeneration = "generation";
              p850.user_data[vLSCustomer] = Number(p850.user_data[vLSGeneration][p850.user_data[vLSGeneration].length - 1]);
              if (p850.user_data) {
                v$4.html("...");
                v$4.fadeOut(500);
                vThis57.Ol(p845, p846, p850.user_data);
                if (p847 != null) {
                  p847();
                }
              }
            }).catch(function (p851) {
              vThis57.Nl();
              v$4.html("...");
              v$4.fadeOut(500);
            });
          };
          f193.prototype.Kl = function () {
            try {
              this.Pl();
              this.Ql();
            } catch (e36) {}
            this.Rl();
          };
          f193.prototype.Sl = function () {
            if (this.Pk) {
              this.Il(function () {}, function (p852) {});
            }
          };
          f193.prototype.Nl = function () {
            f121().og.Ak(f121().og.tk);
          };
          f193.prototype.Ol = function (p853, p854, p855) {
            var vThis58 = this;
            var v664 = this.Pk ? this.Rk.userId : "guest";
            vF2(p855, function (p856) {
              v_0x5207b6(p856);
              vThis58.Pk = true;
              vThis58.Qk = p853 + "_" + p854;
              vThis58.Rk = p856;
              bbs.wuid = vThis58.Qk;
              vO37.Vf.eg(vO37.Vf.$f, p853, 60);
              if (v664 !== vThis58.Rk.userId) {
                vThis58.Tl();
              } else {
                vThis58.Dl();
              }
              window.bbs.loading = false;
            });
          };
          f193.prototype.Rl = function () {
            var v665 = this.Pk ? this.Rk.userId : "guest";
            this.Pk = false;
            this.Qk = vLSGuest;
            this.Rk = {};
            vO37.Vf.eg(vO37.Vf.$f, "", 60);
            if (v665 !== this.Rk.userId) {
              this.Tl();
            } else {
              this.Dl();
            }
          };
          f193.prototype.bl = function () {
            var v666 = vO37.Vf.fg(vO37.Vf.$f);
            var vThis59 = this;
            if (v666 === "fb") {
              var vLN17 = 1;
              (function f198() {
                if (!f193.Sk.Vk() && vLN17++ < 5) {
                  setTimeout(f198, 1000);
                  return;
                }
                f193.Sk.Yk(function () {}, function (p857) {
                  vThis59.Ll("fb", p857.Uk);
                });
              })();
            } else if (v666 === "gg") {
              var vLN19 = 1;
              (function f199() {
                if (!f193.$k.Vk() && vLN19++ < 5) {
                  setTimeout(f199, 1000);
                  return;
                }
                f193.$k.Yk(function () {}, function (p858) {
                  vThis59.Ll("gg", p858.Uk);
                });
              })();
            }
          };
          f193.prototype.Tl = function () {
            for (var vLN0105 = 0; vLN0105 < this.Nk.length; vLN0105++) {
              this.Nk[vLN0105]();
            }
            this.Dl();
          };
          f193.prototype.Dl = function () {
            for (var vLN0106 = 0; vLN0106 < this.Ok.length; vLN0106++) {
              this.Ok[vLN0106]();
            }
          };
          f193.prototype.Pl = function () {
            f193.Sk.Zk();
          };
          f193.prototype.Ql = function () {
            f193.$k.Zk();
          };
          return f193;
        }();
        vO37.if = function () {
          function f200(p859, p860, p861) {
            this.ef = p861;
            this.hd = false;
            this.nc = new vF4.Container();
            this.nc.visible = false;
            this.Ul = new Array(p859);
            for (var vLN0107 = 0; vLN0107 < this.Ul.length; vLN0107++) {
              var v667 = new vO37.Vl(new Float32Array(p860 * 3));
              v667.Wl(p860);
              this.Ul[vLN0107] = v667;
              this.nc.addChild(v667.tf());
            }
            this.ff = 1;
            this.gf = 1;
            this.Jf();
          }
          f200.prototype.tf = function () {
            return this.nc;
          };
          f200.prototype.Kf = function (p862) {
            this.hd = p862;
            this.nc.visible = p862;
          };
          f200.prototype.Jf = function () {
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            var v668 = this.gf / 30;
            for (var vLN0108 = 0; vLN0108 < this.Ul.length; vLN0108++) {
              this.Ul[vLN0108].Xl(v668);
            }
          };
          f200.prototype.Uf = function () {
            if (this.hd) {
              for (var vLN0109 = 0; vLN0109 < this.Ul.length; vLN0109++) {
                this.Ul[vLN0109].Uf(this.lf);
              }
            }
          };
          f200.prototype.Yl = function () {
            return this.ff;
          };
          f200.prototype.Zl = function () {
            return this.gf;
          };
          f200.prototype.Qf = function (p863, p864) {
            this.Ul[p863].$l(p864);
          };
          f200.prototype.Rf = function (p865, p866) {
            this.Ul[p865]._l(p866);
          };
          f200.prototype.Sf = function (p867, p868, p869) {
            var v669 = this.Ul[p867];
            for (var v670 = v669.am(), v671 = v669.bm, vLN0110 = 0; vLN0110 < v670; vLN0110++) {
              v671[vLN0110 * 3] = p868;
              v671[vLN0110 * 3 + 1] = p869;
              v671[vLN0110 * 3 + 2] = 0;
            }
          };
          f200.prototype.Tf = function (p870, p871, p872) {
            var v672 = this.Ul[p870];
            var v673 = v672.am();
            var v674 = v672.bm;
            var v675 = v672.cm();
            var v676 = v674[0];
            var vUndefined10 = undefined;
            var v677 = v674[1];
            var vUndefined11 = undefined;
            var v678 = p871 - v676;
            var v679 = p872 - v677;
            var v680 = Math.hypot(v678, v679);
            if (v680 > 0) {
              v674[0] = p871;
              v674[1] = p872;
              v674[2] = Math.atan2(v679, v678);
              var v681 = v675 * 0.25 / (v675 * 0.25 + v680);
              var v682 = 1 - v681 * 2;
              for (var vLN110 = 1, vV673 = v673; vLN110 < vV673; vLN110++) {
                vUndefined10 = v674[vLN110 * 3];
                v674[vLN110 * 3] = v674[vLN110 * 3 - 3] * v682 + (vUndefined10 + v676) * v681;
                v676 = vUndefined10;
                vUndefined11 = v674[vLN110 * 3 + 1];
                v674[vLN110 * 3 + 1] = v674[vLN110 * 3 - 2] * v682 + (vUndefined11 + v677) * v681;
                v677 = vUndefined11;
                v674[vLN110 * 3 + 2] = Math.atan2(v674[vLN110 * 3 - 2] - v674[vLN110 * 3 + 1], v674[vLN110 * 3 - 3] - v674[vLN110 * 3]);
              }
            }
          };
          return f200;
        }();
        vO37.dm = function () {
          function f201(p873) {
            var vThis60 = this;
            this.ef = p873;
            this.Eb = p873.get()[0];
            this.lf = new vF4.Renderer({
              view: p873.get()[0],
              transparent: true,
              antialias: false
            });
            this.hd = false;
            this.em = new vO37.Vl(new Float32Array(v683 * 3));
            this.ff = 1;
            this.gf = 1;
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
            this.Jf();
            f121().Lc.$b(function () {
              vThis60.em.lm();
            });
          }
          var v683 = Math.min(100, vO37.WormSpriteTree.wc);
          var vO54 = {
            gm: "0lt0",
            mm: "0lt1",
            nm: "0lt2"
          };
          f201.prototype.Kf = function (p874) {
            this.hd = p874;
          };
          f201.prototype.Jf = function () {
            var v684 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            this.lf.resize(this.ff, this.gf);
            this.lf.resolution = v684;
            this.Eb.width = v684 * this.ff;
            this.Eb.height = v684 * this.gf;
            var v685 = this.gf / 4;
            this.em.Xl(v685);
            var v686 = vO39.P(Math.floor(this.ff / v685) * 2 - 5, 1, v683);
            this.em.Wl(v686);
          };
          f201.prototype.Nf = function () {
            if (this.hd) {
              var v687 = Date.now();
              var v688 = v687 / 200;
              var v689 = Math.sin(v688);
              this.em.om(this.pm(this.fm, v689), this.qm(this.fm, v689));
              this.em.rm(this.sm(this.hm, v689), this.sm(this.im, v689), this.sm(this.jm, v689), this.sm(this.km, v689));
              var v690 = this.em.cm();
              for (var v691 = this.em.am(), v692 = this.em.bm, v693 = this.ff - (this.ff - v690 * 0.5 * (v691 - 1)) * 0.5, v694 = this.gf * 0.5, vLN0111 = 0, vLN0112 = 0, v695 = -1; v695 < v691; v695++) {
                var vV695 = v695;
                var v696 = Math.cos(vV695 * 1 / 12 * Math.PI - v688) * (1 - Math.pow(16, vV695 * -1 / 12));
                if (v695 >= 0) {
                  v692[v695 * 3] = v693 + v690 * -0.5 * vV695;
                  v692[v695 * 3 + 1] = v694 + v690 * 0.5 * v696;
                  v692[v695 * 3 + 2] = Math.atan2(vLN0112 - v696, vV695 - vLN0111);
                }
                vLN0111 = vV695;
                vLN0112 = v696;
              }
              this.em.Uf();
              this.em.tm(this.lf);
            }
          };
          f201.prototype.$l = function (p875) {
            this.em.$l(p875);
          };
          f201.prototype.um = function (p876) {
            this.fm = p876 ? vO54.nm : vO54.mm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f201.prototype.vm = function (p877) {
            this.fm = vO54.gm;
            this.hm = p877 ? vO54.nm : vO54.mm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f201.prototype.wm = function (p878) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = p878 ? vO54.nm : vO54.mm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f201.prototype.xm = function (p879) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = p879 ? vO54.nm : vO54.mm;
            this.km = vO54.gm;
          };
          f201.prototype.ym = function (p880) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = p880 ? vO54.nm : vO54.mm;
          };
          f201.prototype.pm = function (p881, p882) {
            switch (p881) {
              case vO54.mm:
                return 0.9 + p882 * 0.1;
              case vO54.nm:
                return 0.4 + p882 * 0.3;
            }
            return 1;
          };
          f201.prototype.qm = function (p883, p884) {
            switch (p883) {
              case vO54.mm:
                return 0.6 + p884 * 0.5;
              case vO54.nm:
                return 0.3 + p884 * 0.3;
            }
            return 1;
          };
          f201.prototype.sm = function (p885, p886) {
            switch (p885) {
              case vO54.mm:
                return 0.9 + p886 * 0.1;
              case vO54.nm:
                return 0.6 + p886 * 0.4;
            }
            return 1;
          };
          return f201;
        }();
        vO37.Oj = function () {
          function f202(p887, p888, p889, p890, p891) {
            this.zm = p887;
            this.Am = p888;
            this.Bm = p889;
            this.Cm = p890;
            this.Dm = p891;
          }
          f202.Nj = function (p892) {
            return new f202(p892.price, p892.guest, p892.nonbuyable, p892.nonbuyableCause, p892.description || p892.refer?.texture || "SKIN NATIVE " + p892.id);
          };
          f202.Pj = function (p893) {
            return new f202(p893.price, p893.guest, p893.nonbuyable, p893.nonbuyableCause, p893.description);
          };
          f202.prototype.Jj = function () {
            return this.zm;
          };
          f202.prototype.Mj = function () {
            return this.Am;
          };
          f202.prototype.Kj = function () {
            return this.Bm;
          };
          f202.prototype.Em = function () {
            return this.Cm;
          };
          f202.prototype.Fm = function () {
            return this.Dm;
          };
          return f202;
        }();
        vO37.qf = function () {
          function f203(p894) {
            this.Gm = {};
            this.Gm[v700] = p894;
            var v697 = vF4.Shader.from(v704, v705, this.Gm);
            this.sf = new vF4.Mesh(v703, v697);
            this.sf.blendMode = vF4.v.B;
          }
          var v698 = "a1_" + vO39.X();
          var v699 = "a2_" + vO39.X();
          var v700 = "u3_" + vO39.X();
          var v701 = "u4_" + vO39.X();
          var v702 = "v1_" + vO39.X();
          var v703 = new vF4.Geometry().addAttribute(v698, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v699, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
          var v704 = "precision mediump float;attribute vec2 " + v698 + ";attribute vec2 " + v699 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + v701 + ";varying vec2 " + v702 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + v698 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + v701 + ";vec2 uv=" + v699 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + v702 + "=uv;}";
          var v705 = "precision highp float;varying vec2 " + v702 + ";uniform sampler2D " + v700 + ";void main(){gl_FragColor=texture2D(" + v700 + "," + v702 + ");}";
          f203.prototype.Mf = function (p895, p896) {
            this.sf.scale.x = p895;
            this.sf.scale.y = p896;
            this.Gm[v701] = [p895, p896, 1 / p895 + 1, 1 / p896 + 1];
          };
          return f203;
        }();
        vO37.WMGBS1 = function () {
          function f204(p897) {
            var v706 = bbs.bgGameWidth || 1;
            var v707 = bbs.bgGameHeight || 1;
            var vLN1100 = 1100;
            var v708 = v706 > 512 ? v706 >= 1000 ? 1 : 0.1 : 0.01;
            this.Gm = {};
            this.Gm[vLSU3_] = [1, 0.5, 0.25, 0.5];
            this.Gm[vLSU4_] = vF4.Texture.WHITE;
            this.Gm[vLSU5_] = [0, 0];
            this.Gm[vLSU6_] = [0, 0];
            this.sf = new PIXI.TilingSprite(p897 || vO30.xe._g, v708 == 1 ? vLN1100 : 120000, v708 == 1 ? vLN1100 : 120000);
            this.sf.scale.x = v708;
            this.sf.scale.y = v708;
            this.sf.position.x = -(v708 == 1 ? v706 / 2 : 625);
            this.sf.position.y = -(v708 == 1 ? v707 / 2 : 625);
            console.log("WMGBS1", v706, v707);
          }
          var vLSU3_ = "u3_";
          var vLSU4_ = "u4_";
          var vLSU5_ = "u5_";
          var vLSU6_ = "u6_";
          f204.prototype.Ec = function (p898, p899, p900, p901) {
            var v709 = this.Gm[vLSU3_];
            v709[0] = p898;
            v709[1] = p899;
            v709[2] = p900;
            v709[3] = p901;
          };
          f204.prototype.$g = function (p902) {
            this.Gm[vLSU4_] = p902;
          };
          f204.prototype.Uf = function (p903, p904, p905, p906) {};
          return f204;
        }();
        vO37.WMGBS2 = function () {
          console.log("WMGBS2");
          function f205() {
            this.Gm = {};
            this.Gm[v713] = [1, 0.5, 0.25, 0.5];
            this.Gm[v714] = vF4.Texture.WHITE;
            this.Gm[v715] = [0, 0];
            this.Gm[v716] = [0, 0];
            var v710 = vF4.Shader.from(v719, v720, this.Gm);
            this.sf = new vF4.Mesh(v718, v710);
          }
          var v711 = "a1_" + vO39.X();
          var v712 = "a2_" + vO39.X();
          var vLSTranslationMatrix = "translationMatrix";
          var vLSProjectionMatrix = "projectionMatrix";
          var v713 = "u3_" + vO39.X();
          var v714 = "u4_" + vO39.X();
          var v715 = "u5_" + vO39.X();
          var v716 = "u6_" + vO39.X();
          var v717 = "v1_" + vO39.X();
          var v718 = new vF4.Geometry().addAttribute(v711, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v712, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
          var v719 = "precision mediump float;attribute vec2 " + v711 + ";attribute vec2 " + v712 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v717 + ";void main(){" + v717 + "=" + v712 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v711 + ",1.0)).xy,0.0,1.0);}";
          var v720 = "precision highp float;varying vec2 " + v717 + ";uniform vec4 " + v713 + ";uniform sampler2D " + v714 + ";uniform vec2 " + v715 + ";uniform vec2 " + v716 + ";void main(){vec2 coord=" + v717 + "*" + v715 + "+" + v716 + ";vec4 v_color_mix=" + v713 + ";gl_FragColor=texture2D(" + v714 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
          f205.prototype.Ec = function (p907, p908, p909, p910) {
            var v721 = this.Gm[v713];
            v721[0] = p907;
            v721[1] = p908;
            v721[2] = p909;
            v721[3] = p910;
          };
          f205.prototype.$g = function (p911) {
            this.Gm[v714] = p911;
          };
          f205.prototype.Uf = function (p912, p913, p914, p915) {
            this.sf.position.x = p912;
            this.sf.position.y = p913;
            this.sf.scale.x = p914;
            this.sf.scale.y = p915;
            var v722 = this.Gm[v715];
            v722[0] = p914 * 0.2520615384615385;
            v722[1] = p915 * 0.4357063736263738;
            var v723 = this.Gm[v716];
            v723[0] = p912 * 0.2520615384615385;
            v723[1] = p913 * 0.4357063736263738;
          };
          return f205;
        }();
        vO37.sc = function () {
          function f206() {
            this.xc = new PIXI.Sprite();
            this.ev = null;
            this.Hm = 0;
            this.Im = 0;
            this.si = null;
          }
          f206.prototype.Bc = function (p916, p917, p918) {
            if (p916) {
              this.xc.texture = p916.Ea();
              this.xc.anchor.set(p916.ya, p916.za);
              this.Hm = p916.Aa;
              this.Im = p916.Ba;
            } else {}
          };
          f206.prototype.Ec = function (p919) {
            this.xc.tint = parseInt(p919.substring(1), 16);
          };
          f206.prototype.Tc = function (p920) {
            try {
              this.xc.width = p920 * this.Hm;
              this.xc.height = p920 * this.Im;
            } catch (e37) {}
          };
          f206.prototype.md = function (p921) {
            this.xc.rotation = p921;
          };
          f206.prototype.ld = function (p922, p923) {
            this.xc.position.set(p922, p923);
          };
          f206.prototype.kd = function (p924) {
            this.xc.visible = p924;
          };
          f206.prototype.gd = function () {
            return this.xc.visible;
          };
          f206.prototype.jj = function (p925) {
            this.xc.alpha = p925;
          };
          f206.prototype.Qc = function () {
            return this.xc;
          };
          f206.prototype.Rc = function () {
            vO39.U(this.xc);
          };
          return f206;
        }();
        vO37.Worm = function () {
          function f207(p926) {
            this.hh = p926;
            this.Eh = new vO37.Worm.li();
            this.xi = false;
            this.wi = true;
            this.Xc = false;
            this.$c = 0;
            this.Jm = 0;
            this.dj = 1;
            this.bd = 0;
            this.Bh = 0;
            this.dd = {};
            this.ad = 0;
            this.Km = new Float32Array(vLN200 * 2);
            this.Lm = new Float32Array(vLN200 * 2);
            this._c = new Float32Array(vLN200 * 2);
            this.Mm = null;
            this.Nm = null;
            this.Om = null;
            this.Pm();
          }
          var vLN200 = 200;
          f207.prototype.si = function () {
            if (this.Nm != null) {
              vO39.U(this.Nm.nc);
            }
            if (this.Om != null) {
              vO39.U(this.Om);
            }
          };
          f207.prototype.Pm = function () {
            this.zi(0.25);
            this.Eh.ma = "";
            this.wi = true;
            this.dd = {};
            this.kd(false);
          };
          f207.prototype.ri = function (p927) {
            this.Eh = p927;
            this.Qm(this.xi);
          };
          f207.prototype.kd = function (p928) {
            var v724 = this.xi;
            this.xi = p928;
            this.Qm(v724);
          };
          f207.prototype.zi = function (p929) {
            this.Bh = p929 * 50;
            var vP929 = p929;
            if (p929 > this.hh.Ag) {
              vP929 = Math.atan((p929 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
            }
            var v725 = Math.sqrt(Math.pow(vP929 * 5, 0.707106781186548) * 4 + 25);
            var v726 = Math.min(vLN200, Math.max(3, (v725 - 5) * 5 + 1));
            var v727 = this.ad;
            this.$c = (5 + v725 * 0.9) * 0.025;
            this.ad = Math.floor(v726);
            this.Jm = v726 - this.ad;
            if (v727 > 0 && v727 < this.ad) {
              var v728 = this.Km[v727 * 2 - 2];
              var v729 = this.Km[v727 * 2 - 1];
              var v730 = this.Lm[v727 * 2 - 2];
              var v731 = this.Lm[v727 * 2 - 1];
              var v732 = this._c[v727 * 2 - 2];
              var v733 = this._c[v727 * 2 - 1];
              for (var vV727 = v727; vV727 < this.ad; vV727++) {
                this.Km[vV727 * 2] = v728;
                this.Km[vV727 * 2 + 1] = v729;
                this.Lm[vV727 * 2] = v730;
                this.Lm[vV727 * 2 + 1] = v731;
                this._c[vV727 * 2] = v732;
                this._c[vV727 * 2 + 1] = v733;
              }
            }
          };
          f207.prototype.Ei = function (p930, p931) {
            this.ad = p931;
            for (var vLN0113 = 0; vLN0113 < this.ad; vLN0113++) {
              this.Km[vLN0113 * 2] = this.Lm[vLN0113 * 2] = this._c[vLN0113 * 2] = p930();
              this.Km[vLN0113 * 2 + 1] = this.Lm[vLN0113 * 2 + 1] = this._c[vLN0113 * 2 + 1] = p930();
            }
          };
          f207.prototype.Bi = function (p932, p933, p934) {
            this.Xc = p934;
            for (var vLN0114 = 0; vLN0114 < this.ad; vLN0114++) {
              this.Km[vLN0114 * 2] = this.Lm[vLN0114 * 2];
              this.Km[vLN0114 * 2 + 1] = this.Lm[vLN0114 * 2 + 1];
            }
            var v734 = p932 - this.Lm[0];
            var v735 = p933 - this.Lm[1];
            this.Rm(v734, v735, this.ad, this.Lm);
          };
          f207.prototype.Rm = function (p935, p936, p937, p938) {
            var v736 = Math.hypot(p935, p936);
            if (!(v736 <= 0)) {
              var v737 = p938[0];
              var vUndefined12 = undefined;
              p938[0] += p935;
              var v738 = p938[1];
              var vUndefined13 = undefined;
              p938[1] += p936;
              var v739 = this.$c / (this.$c + v736);
              var v740 = 1 - v739 * 2;
              for (var vLN111 = 1, v741 = p937 - 1; vLN111 < v741; vLN111++) {
                vUndefined12 = p938[vLN111 * 2];
                p938[vLN111 * 2] = p938[vLN111 * 2 - 2] * v740 + (vUndefined12 + v737) * v739;
                v737 = vUndefined12;
                vUndefined13 = p938[vLN111 * 2 + 1];
                p938[vLN111 * 2 + 1] = p938[vLN111 * 2 - 1] * v740 + (vUndefined13 + v738) * v739;
                v738 = vUndefined13;
              }
              v739 = this.Jm * this.$c / (this.Jm * this.$c + v736);
              v740 = 1 - v739 * 2;
              p938[p937 * 2 - 2] = p938[p937 * 2 - 4] * v740 + (p938[p937 * 2 - 2] + v737) * v739;
              p938[p937 * 2 - 1] = p938[p937 * 2 - 3] * v740 + (p938[p937 * 2 - 1] + v738) * v739;
            }
          };
          f207.prototype.fh = function () {
            return {
              x: this._c[0],
              y: this._c[1]
            };
          };
          f207.prototype.yi = function (p939, p940) {
            var vLN1000000 = 1000000;
            var vP939 = p939;
            var vP940 = p940;
            for (var vLN0115 = 0; vLN0115 < this.ad; vLN0115++) {
              var v742 = this._c[vLN0115 * 2];
              var v743 = this._c[vLN0115 * 2 + 1];
              var v744 = Math.hypot(p939 - v742, p940 - v743);
              if (v744 < vLN1000000) {
                vLN1000000 = v744;
                vP939 = v742;
                vP940 = v743;
              }
            }
            return {
              x: vP939,
              y: vP940,
              distance: vLN1000000
            };
          };
          f207.prototype.ti = function (p941) {
            this.Mm = p941;
          };
          f207.prototype.hj = function (p942, p943) {
            this.dj = vO39.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(p942 / 400 * Math.PI) * 0.1 : 1 : 0, p943, 1 / 800);
            this.bd = vO39.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, p943, 0.0025);
            if (this.Nm != null) {
              this.Nm.nc.alpha = this.dj;
            }
            if (this.Om != null) {
              this.Om.alpha = this.dj;
            }
          };
          f207.prototype.ij = function (p944, p945, p946, p947) {
            if (this.xi && this.wi) {
              var v745 = Math.pow(0.11112, p945 / 95);
              for (var vLN0116 = 0; vLN0116 < this.ad; vLN0116++) {
                this._c[vLN0116 * 2] = vO39.S(vO39.S(this.Km[vLN0116 * 2], this.Lm[vLN0116 * 2], p946), this._c[vLN0116 * 2], v745);
                this._c[vLN0116 * 2 + 1] = vO39.S(vO39.S(this.Km[vLN0116 * 2 + 1], this.Lm[vLN0116 * 2 + 1], p946), this._c[vLN0116 * 2 + 1], v745);
              }
            }
            if (this.Nm && this.xi) {
              this.Nm.Zc(this, p944, p945, p947);
            }
            if (this.Om) {
              this.Om.ih.x = this._c[0];
              this.Om.ih.y = this._c[1] - this.$c * 3;
            }
          };
          f207.prototype.Qm = function (p948) {
            if (this.xi) {
              if (!p948) {
                this.Sm();
              }
            } else {
              if (this.Nm != null) {
                vO39.U(this.Nm.nc);
              }
              if (this.Om != null) {
                vO39.U(this.Om);
              }
            }
          };
          f207.prototype.Sm = function () {
            var vF1216 = f121();
            this.Nm = this.Nm || new vO37.WormSpriteTree();
            vO39.U(this.Nm.nc);
            this.Nm.yc(vF1216.dh.hh.xg, vF1216.Lc.Ub().jb(this.Eh.Gh), vF1216.Lc.Ub().ib(this.Eh.Hh), vF1216.Lc.Ub().kb(this.Eh.ni), vF1216.Lc.Ub().lb(this.Eh.oi), vF1216.Lc.Ub().mb(this.Eh.pi), vF1216.Lc.Ub().nb(this.Eh.qi), "#ffffff");
            this.Om = this.Om || new vO37.Tm("");
            vO39.U(this.Om);
            this.Om.style.fontFamily = "PTSans";
            this.Om.anchor.set(0.5);
            this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
            this.Om.style.fill = bbs.enemyNameColor || vF1216.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
            this.Om.style.fontWeight = "bold";
            this.Om.text = v133 ? this.Eh.ma : "-----";
            this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
          };
          f207.li = function () {
            function f208() {
              this.ae = 0;
              this.Gh = vO31.ps ? vO31.ps : vO37.GameParams.Cg;
              this.Hh = 0;
              this.ni = 0;
              this.oi = 0;
              this.pi = 0;
              this.qi = 0;
              this.ma = 0;
            }
            return f208;
          }();
          return f207;
        }();
        vO37.Tm = function () {
          return vO39.M(vF4.Text, function (p949, p950, p951) {
            vF4.Text.call(this, p949, p950, p951);
            this.ih = {
              x: 0,
              y: 0
            };
          });
        }();
        vO37.hb = function () {
          function f209(p952, p953, p954, p955, p956) {
            this.lj = p952;
            this.mj = p953;
            this.nj = p954;
            this.oj = p955;
            this.pj = p956;
          }
          f209.prototype.Um = function (p957) {
            return new f209(p957, this.mj, this.nj, this.oj, this.pj);
          };
          f209.prototype.Vm = function (p958) {
            return new f209(this.lj, p958, this.nj, this.oj, this.pj);
          };
          f209.prototype.Wm = function (p959) {
            return new f209(this.lj, this.mj, p959, this.oj, this.pj);
          };
          f209.prototype.Xm = function (p960) {
            return new f209(this.lj, this.mj, this.nj, p960, this.pj);
          };
          f209.prototype.Ym = function (p961) {
            return new f209(this.lj, this.mj, this.nj, this.oj, p961);
          };
          return f209;
        }();
        vO37.Vl = function () {
          function f210(p962) {
            this.Zm = new vO37.WormSpriteTree();
            this.Zm.nc.addChild(this.Zm.oc);
            this.$m = null;
            this._m = null;
            this.bm = p962;
            this.pc = 0;
            this.Gi = 1;
            this.an = 1;
            this.bn = 1;
            this.cn = 1;
            this.dn = 1;
            this.gn = 1;
            this.hn = 1;
            this._l("#ffffff");
          }
          var v746 = new vO37.hb(0, 0, 0, 0, 0);
          f210.prototype.tf = function () {
            return this.Zm.nc;
          };
          f210.prototype.Wl = function (p963) {
            this.pc = p963;
            if (this.Zm.pc !== p963) {
              for (var vP963 = p963; vP963 < this.Zm.qc.length; vP963++) {
                this.Zm.qc[vP963].Uc();
              }
              while (this.Zm.pc > p963) {
                this.Zm.pc -= 1;
                var v747 = this.Zm.qc[this.Zm.pc];
                v747.Dc.Rc();
                v747.Cc.Rc();
              }
              while (this.Zm.pc < p963) {
                var v748 = this.Zm.qc[this.Zm.pc];
                this.Zm.pc += 1;
                this.Zm.nc.addChild(v748.Cc.Qc());
                this.Zm.nc.addChild(v748.Dc.Qc());
                v748.Cc.jj(this.an);
                v748.Dc.jj(this.bn);
              }
              for (var vLN0117 = 0; vLN0117 < this.Zm.oc.Fc.length; vLN0117++) {
                this.Zm.oc.Fc[vLN0117].jj(this.cn);
              }
              for (var vLN0118 = 0; vLN0118 < this.Zm.oc.Gc.length; vLN0118++) {
                this.Zm.oc.Gc[vLN0118].jj(this.dn);
              }
              for (var vLN0119 = 0; vLN0119 < this.Zm.oc.Ic.length; vLN0119++) {
                this.Zm.oc.Ic[vLN0119].jj(this.gn);
              }
              for (var vLN0120 = 0; vLN0120 < this.Zm.oc.Hc.length; vLN0120++) {
                this.Zm.oc.Hc[vLN0120].jj(this.hn);
              }
            }
          };
          f210.prototype.am = function () {
            return this.pc;
          };
          f210.prototype.$l = function (p964) {
            this.$m = p964;
            this._m = "#ffffff";
            this.lm();
          };
          f210.prototype._l = function (p965) {
            this.$m = v746;
            this._m = p965;
            this.lm();
          };
          f210.prototype.lm = function () {
            var vF1217 = f121();
            this.Zm.yc(vO37.Ac.vg, null, vF1217.Lc.Ub().ib(this.$m.lj), vF1217.Lc.Ub().kb(this.$m.mj), vF1217.Lc.Ub().lb(this.$m.nj), vF1217.Lc.Ub().mb(this.$m.pj), vF1217.Lc.Ub().nb(this.$m.oj), this._m);
          };
          f210.prototype.Xl = function (p966) {
            this.Gi = p966;
          };
          f210.prototype.cm = function () {
            return this.Gi;
          };
          f210.prototype.om = function (p967, p968) {
            this.an = p967;
            this.bn = p968;
            for (var vLN0121 = 0; vLN0121 < this.pc; vLN0121++) {
              var v749 = this.Zm.qc[vLN0121];
              v749.Cc.jj(this.an);
              v749.Dc.jj(this.bn);
            }
          };
          f210.prototype.rm = function (p969, p970, p971, p972) {
            this.cn = p969;
            this.dn = p970;
            this.gn = p971;
            this.hn = p972;
            for (var vLN0122 = 0; vLN0122 < this.Zm.oc.Fc.length; vLN0122++) {
              this.Zm.oc.Fc[vLN0122].jj(this.cn);
            }
            for (var vLN0123 = 0; vLN0123 < this.Zm.oc.Gc.length; vLN0123++) {
              this.Zm.oc.Gc[vLN0123].jj(this.dn);
            }
            for (var vLN0124 = 0; vLN0124 < this.Zm.oc.Ic.length; vLN0124++) {
              this.Zm.oc.Ic[vLN0124].jj(this.gn);
            }
            for (var vLN0125 = 0; vLN0125 < this.Zm.oc.Hc.length; vLN0125++) {
              this.Zm.oc.Hc[vLN0125].jj(this.hn);
            }
          };
          f210.prototype.Uf = function () {
            var v750 = this.Gi * 2;
            var v751 = this.Gi * 2 * 1.5;
            if (this.pc > 0) {
              var v752 = this.bm[0];
              var v753 = this.bm[1];
              var v754 = this.bm[2];
              this.Zm.qc[0].Sc(v752, v753, v750, v751, v754);
              this.Zm.oc.Sc(v752, v753, v750, v754);
            }
            for (var vLN112 = 1; vLN112 < this.pc; vLN112++) {
              var v755 = this.bm[vLN112 * 3];
              var v756 = this.bm[vLN112 * 3 + 1];
              var v757 = this.bm[vLN112 * 3 + 2];
              this.Zm.qc[vLN112].Sc(v755, v756, v750, v751, v757);
            }
          };
          f210.prototype.tm = function (p973) {
            p973.render(this.Zm.nc);
          };
          return f210;
        }();
        vO37.kf = function () {
          function f211(p974) {
            this.nd = p974;
          }
          f211.bgcanvas = $("#background-canvas");
          f211.socialButtons = $("#social-buttons");
          f211.socialButtons.html("");
          f211.jn = $("#game-view");
          f211.gameCanvas = $("#game-canvas");
          f211.ln = $("#results-view");
          f211.mn = $("#stretch-box");
          f211.nn = $("#main-menu-view");
          f211.pn = $("#popup-view");
          f211.qn = $("#loading-view");
          f211.rn = $("#restricted-view");
          f211.sn = $("#toaster-view");
          f211.tn = $("#error-gateway-connection-view");
          f211.un_error = $("#error-game-connection-view");
          f211.vn = $("#markup-wrap");
          f211.prototype.ha = function () {};
          f211.prototype.Gk = function () {};
          f211.prototype.Hk = function () {};
          f211.prototype.Bk = function () {};
          f211.prototype.Jf = function () {};
          f211.prototype.Nf = function (p975, p976) {};
          return f211;
        }();
        vO37.Vj = function () {
          function f212(p977, p978, p979, p980, p981, p982) {
            var vLSOK = "OK";
            var v$5 = $(vLSOK);
            v$5.click(function () {
              if (typeof FB != "undefined" && FB.ui !== undefined) {
                FB.ui({
                  method: "feed",
                  display: "popup",
                  link: p978,
                  name: p979,
                  caption: p980,
                  description: p981,
                  picture: p982
                }, function () {});
              }
            });
            return v$5;
          }
          var v$6 = $("#final-caption");
          var v$7 = $("#final-continue");
          var v$8 = $("#congrats-bg");
          var v$9 = $("#unl6wj4czdl84o9b");
          $("#congrats");
          var v$10 = $("#final-share-fb");
          var v$11 = $("#final-message");
          var v$12 = $("#final-score");
          var v$13 = $("#final-place");
          var v$14 = $("#final-board");
          var v758 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vThis61 = this;
            var vF1218 = f121();
            v$10.toggle(vF20.xn);
            v$6.text(vO39.H("index.game.result.title"));
            v$7.text(vO39.H("index.game.result.continue"));
            v$7.click(function () {
              vF1218.Ci.Be();
              vF1218.zn.yn.ka();
              vF1218.Ci.pe(vO37.ge.je._e);
              vF1218.og.Ak(vF1218.og._e);
            });
            $("html").keydown(function (p983) {
              if (p983.keyCode === 32) {
                vThis61.An = true;
              }
            }).keyup(function (p984) {
              if (p984.keyCode === 32) {
                vThis61.An = false;
              }
            });
            this.ng = new vO37.Eg(vO37.kf.gameCanvas);
            this.Cn = 0;
            this.Bn = 0;
            this.An = false;
          });
          v758.prototype.ha = function () {};
          v758.prototype.Gk = function () {
            if (this.Cn === 0) {
              vO37.kf.jn.stop();
              vO37.kf.jn.fadeIn(500);
              vO37.kf.ln.stop();
              vO37.kf.ln.fadeOut(1);
              vO37.kf.nn.stop();
              vO37.kf.nn.fadeOut(50);
              vO37.kf.pn.stop();
              vO37.kf.pn.fadeOut(50);
              vO37.kf.sn.stop();
              vO37.kf.sn.fadeOut(50);
              vO37.kf.qn.stop();
              vO37.kf.qn.fadeOut(50);
              vO37.kf.rn.stop();
              vO37.kf.rn.fadeOut(50);
              vO37.kf.tn.stop();
              vO37.kf.tn.fadeOut(50);
              vO37.kf.un_error.stop();
              vO37.kf.un_error.fadeOut(50);
              vO37.kf.mn.stop();
              vO37.kf.mn.fadeOut(1);
              vO37.kf.bgcanvas.stop();
              vO37.kf.bgcanvas.fadeOut(50);
              vO37.GameView.Kf(false);
              vO37.kf.socialButtons.stop();
              vO37.kf.socialButtons.fadeOut(50);
              vO37.kf.vn.stop();
              vO37.kf.vn.fadeOut(50);
            } else {
              vO37.kf.jn.stop();
              vO37.kf.jn.fadeIn(500);
              vO37.kf.ln.stop();
              vO37.kf.ln.fadeIn(500);
              vO37.kf.nn.stop();
              vO37.kf.nn.fadeOut(50);
              vO37.kf.pn.stop();
              vO37.kf.pn.fadeOut(50);
              vO37.kf.sn.stop();
              vO37.kf.sn.fadeOut(50);
              vO37.kf.qn.stop();
              vO37.kf.qn.fadeOut(50);
              vO37.kf.rn.stop();
              vO37.kf.rn.fadeOut(50);
              vO37.kf.tn.stop();
              vO37.kf.tn.fadeOut(50);
              vO37.kf.un_error.stop();
              vO37.kf.un_error.fadeOut(50);
              vO37.kf.mn.stop();
              vO37.kf.mn.fadeOut(1);
              vO37.kf.bgcanvas.stop();
              vO37.kf.bgcanvas.fadeOut(50);
              vO37.GameView.Kf(false);
              vO37.kf.socialButtons.stop();
              vO37.kf.socialButtons.fadeOut(50);
              vO37.kf.vn.stop();
              vO37.kf.vn.fadeOut(50);
            }
          };
          v758.prototype.Dn = function () {
            this.Cn = 0;
            return this;
          };
          v758.prototype.En = function () {
            v$8.hide();
            setTimeout(function () {
              v$8.fadeIn(500);
            }, 3000);
            v$9.hide();
            setTimeout(function () {
              v$9.fadeIn(500);
            }, 500);
            this.Cn = 1;
            return this;
          };
          v758.prototype.Hk = function () {
            this.An = false;
            this.ng.Jf();
            if (this.Cn === 1) {
              f121().Ci.Fe();
            }
          };
          v758.prototype.Jf = function () {
            this.ng.Jf();
          };
          v758.prototype.Nf = function (p985, p986) {
            this.ng.Nf(p985, p986);
          };
          v758.prototype.Fn = function (p987, p988, p989) {
            var vUndefined14 = undefined;
            var vUndefined15 = undefined;
            var vUndefined16 = undefined;
            if (p988 >= 1 && p988 <= 10) {
              vUndefined14 = vO39.H("index.game.result.place.i" + p988);
              vUndefined15 = vO39.H("index.game.result.placeInBoard");
              vUndefined16 = vO39.H("index.game.social.shareResult.messGood").replace("{0}", p989).replace("{1}", p987).replace("{2}", vUndefined14);
            } else {
              vUndefined14 = "";
              vUndefined15 = vO39.H("index.game.result.tryHit");
              vUndefined16 = vO39.H("index.game.social.shareResult.messNorm").replace("{0}", p989).replace("{1}", p987);
            }
            v$11.html(vO39.H("index.game.result.your"));
            v$12.html(p987);
            v$13.html(vUndefined14);
            v$14.html(vUndefined15);
            if (vF20.xn) {
              var v759 = vO39.H("index.game.result.share");
              vO39.H("index.game.social.shareResult.caption");
              v$10.empty().append(f212(v759, "https://wormate.io", "wormate.io", vUndefined16, vUndefined16, "https://wormate.io/images/og-share-img-new.jpg"));
            }
          };
          v758.prototype.Gn = function () {
            return this.Bn;
          };
          v758.prototype.Hn = function () {
            return this.An;
          };
          return v758;
        }();
        vO37.sk = function () {
          var v$15 = $("#loading-progress-cont");
          var v$16 = $("#loading-progress-bar");
          var v$17 = $("#loading-progress-text");
          var v760 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            this.In = -1;
            this.Jn = "";
          });
          v760.prototype.ha = function () {};
          v760.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeIn(500);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v760.prototype.Hk = function () {
            f121().Ci.pe(vO37.ge.je.ie);
          };
          v760.prototype.Bk = function () {};
          v760.prototype.Kn = function () {
            this.Ln("", 0);
            v$15.stop();
            v$15.fadeIn(100);
          };
          v760.prototype.Mn = function () {
            v$15.stop();
            v$15.fadeOut(100);
          };
          v760.prototype.Ln = function (p990, p991) {
            if (this.Jn !== p990) {
              this.Jn = p990;
            }
            var v761 = vO39.P(Math.floor(p991 * 100), 0, 100);
            if (this.In !== v761) {
              v$16.css({
                width: v761 + "%"
              });
              v$17.html(v761 + " %");
            }
          };
          return v760;
        }();
        vO37.Wj = function () {
          var v$18 = $("#mm-line-top");
          $("#mm-line-center");
          $("#mm-line-bottom");
          var v$19 = $("#mm-bottom-buttons");
          var v$20 = $("#mm-menu-cont");
          var v$21 = $("#mm-loading");
          var v$22 = $("#mm-loading-progress-bar");
          var v$23 = $("#mm-loading-progress-text");
          $("#mm-event-text");
          var v$24 = $("#mm-skin-canv");
          var v$25 = $("#mm-skin-prev");
          var v$26 = $("#mm-skin-next");
          var v$27 = $("#mm-skin-over");
          var v$28 = $("#mm-skin-over-button-list");
          var v$29 = $("#mm-params-nickname");
          var v$30 = $("#mm-params-game-mode");
          var v$31 = $("#mm-action-play");
          var v$32 = $("#mm-action-guest");
          var v$33 = $("#mm-action-login");
          var v$34 = $("#mm-player-info");
          var v$35 = $("#mm-store");
          var v$36 = $("#mm-leaders");
          var v$37 = $("#mm-settings");
          var v$38 = $("#mm-coins-box");
          var v$39 = $("#mm-player-avatar");
          var v$40 = $("#mm-player-username");
          var v$41 = $("#mm-coins-val");
          var v$42 = $("#mm-player-exp-bar");
          var v$43 = $("#mm-player-exp-val");
          var v$44 = $("#mm-player-level");
          var v762 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.Ek);
            var vF1219 = f121();
            this.In = -1;
            this.Jn = "";
            this.Nn = new vO37.dm(v$24);
            v$30.click(function () {
              vF1219.Ci.Be();
            });
            v$24.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.ik);
              }
            });
            v$25.click(function () {
              vF1219.Ci.Be();
              vF1219.On.Ej();
            });
            v$26.click(function () {
              vF1219.Ci.Be();
              vF1219.On.Dj();
            });
            v$29.keypress(function (p992) {
              if (p992.keyCode == 13) {
                vF1219.Pn(true);
              }
            });
            v$31.click(function () {
              vF1219.Ci.Be();
              vF1219.Pn(true);
            });
            v$32.click(function () {
              vF1219.Ci.Be();
              vF1219.Pn(true);
            });
            v$33.click(function () {
              vF1219.Ci.Be();
              vF1219.og.Ak(vF1219.og.fk);
            });
            v$37.click(function () {
              vF1219.Ci.Be();
              vF1219.og.Ak(vF1219.og.$h);
            });
            v$34.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.dk);
              }
            });
            v$36.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.bk);
              }
            });
            v$35.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.kk);
              }
            });
            v$38.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og._j);
              }
            });
            this.Qn();
            this.Rn();
            var v763 = vO37.Vf.fg(vO37.Vf._f);
            if (v763 !== "ARENA" && v763 !== "TEAM2") {
              v763 = "ARENA";
            }
            v$30.val(v763);
          });
          v762.prototype.ha = function () {
            var vF12110 = f121();
            var vThis62 = this;
            vF12110.Ij.zl(function () {
              if (vF12110.Ij.Hj()) {
                vF12110.On.Fj(vF12110.Ij.ml(), vO37.tj.sj);
                vF12110.On.Fj(vF12110.Ij.nl(), vO37.tj.uj);
                vF12110.On.Fj(vF12110.Ij.ol(), vO37.tj.vj);
                vF12110.On.Fj(vF12110.Ij.pl(), vO37.tj.xj);
                vF12110.On.Fj(vF12110.Ij.ql(), vO37.tj.wj);
              } else {
                vF12110.On.Fj(vF12110.Sn(), vO37.tj.sj);
                vF12110.On.Fj(0, vO37.tj.uj);
                vF12110.On.Fj(0, vO37.tj.vj);
                vF12110.On.Fj(0, vO37.tj.xj);
                vF12110.On.Fj(0, vO37.tj.wj);
              }
            });
            vF12110.Ij.zl(function () {
              v$31.toggle(vF12110.Ij.Hj());
              v$33.toggle(!vF12110.Ij.Hj());
              v$34.toggle(true);
              v$32.toggle(!vF12110.Ij.Hj());
              v$37.toggle(true);
              v$36.toggle(vF12110.Ij.Hj());
              v$35.toggle(vF12110.Ij.Hj());
              v$38.toggle(vF12110.Ij.Hj());
              if (vF12110.Ij.Hj()) {
                v$27.hide();
                v$40.html(vF12110.Ij.dl());
                v$39.attr("src", vF12110.Ij.fl());
                v$41.html(vF12110.Ij.il());
                v$42.width(vF12110.Ij.kl() * 100 / vF12110.Ij.ll() + "%");
                v$43.html(vF12110.Ij.kl() + " / " + vF12110.Ij.ll());
                v$44.html(vF12110.Ij.jl());
                v$29.val(vF12110.Ij.el());
              } else {
                v$27.toggle(vF20.xn && !vF12110.Tn());
                v$40.html(v$40.data("guest"));
                v$39.attr("src", vO39.a.e);
                v$41.html("10");
                v$42.width("0");
                v$43.html("");
                v$44.html(1);
                v$29.val(vO37.Vf.fg(vO37.Vf.ag));
              }
            });
            vF12110.On.zj(function () {
              vThis62.Nn.$l(vF12110.On.yj());
            });
          };
          v762.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeIn(500);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeIn(500);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(500);
          };
          v762.prototype.Un = function () {
            v$18.fadeIn(500);
            v$19.fadeIn(500);
            v$20.fadeIn(500);
            v$21.fadeOut(100);
          };
          v762.prototype.Vn = function () {
            v$18.fadeOut(100);
            v$19.fadeOut(100);
            v$20.fadeOut(100);
            v$21.fadeIn(500);
          };
          v762.prototype.Ln = function (p993, p994) {
            if (this.Jn !== p993) {
              this.Jn = p993;
            }
            var v764 = vO39.P(Math.floor(p994 * 100), 0, 100);
            if (this.In !== v764) {
              v$22.css({
                width: v764 + "%"
              });
              v$23.html(v764 + " %");
            }
          };
          v762.prototype.Hk = function () {
            f121().Ci.Ce();
            this.Nn.Kf(true);
          };
          v762.prototype.Bk = function () {
            this.Nn.Kf(false);
          };
          v762.prototype.Jf = function () {
            this.Nn.Jf();
          };
          v762.prototype.Nf = function (p995, p996) {
            this.Nn.Nf();
          };
          v762.prototype.el = function () {
            return v$29.val();
          };
          v762.prototype.Wn = function () {
            return v$30.val();
          };
          v762.prototype.Qn = function () {};
          v762.prototype.Rn = function () {
            function f213() {
              vF12111.Xn(true);
              setTimeout(function () {
                v$27.hide();
              }, 3000);
            }
            var vF12111 = f121();
            if (vF20.xn && !vF12111.Tn()) {
              v$27.show();
              var v765 = vO39.H("index.game.main.menu.unlockSkins.share");
              var vEncodeURIComponent = encodeURIComponent(vO39.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
              var vEncodeURIComponent2 = encodeURIComponent(vO39.H("index.game.main.menu.unlockSkins.comeAndPlay"));
              v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v765 + "</span></a>").click(f213));
              v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v765 + "</span></a>").click(f213));
            }
          };
          return v762;
        }();
        vO37.yk = function () {
          var v766 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
          });
          v766.prototype.ha = function () {};
          v766.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeOut(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeOut(50);
            vO37.GameView.Kf(false);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          return v766;
        }();
        vO37.pk = function () {
          var v767 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
          });
          v767.prototype.ha = function () {};
          v767.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeIn(500);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v767.prototype.Hk = function () {};
          return v767;
        }();
        vO37.rk = function () {
          var v$45 = $("#toaster-stack");
          var v768 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            this.Yn = [];
            this.Zn = null;
          });
          v768.prototype.ha = function () {};
          v768.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeIn(500);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(500);
          };
          v768.prototype.Hk = function () {
            this.$n();
          };
          v768.prototype.Kk = function () {
            return this.Zn != null || this.Yn.length > 0;
          };
          v768.prototype._n = function (p997) {
            this.Yn.unshift(p997);
            setTimeout(function () {
              f121().og.Ik();
            }, 0);
          };
          v768.prototype.El = function (p998) {
            this.Yn.push(p998);
            setTimeout(function () {
              f121().og.Ik();
            }, 0);
          };
          v768.prototype.$n = function () {
            var vThis63 = this;
            if (this.Zn == null) {
              if (this.Yn.length == 0) {
                f121().og.Dk();
                return;
              }
              var v769 = this.Yn.shift();
              this.Zn = v769;
              var v770 = v769.tf();
              v770.hide();
              v770.fadeIn(300);
              v$45.append(v770);
              v769.ao = function () {
                v770.fadeOut(300);
                setTimeout(function () {
                  v770.remove();
                }, 300);
                if (vThis63.Zn == v769) {
                  vThis63.Zn = null;
                }
                vThis63.$n();
              };
              v769.Hk();
            }
          };
          return v768;
        }();
        vO37.Fk = {
          wn: 0,
          Ek: 1
        };
        vO37.bo = function () {
          var v$46 = $("#popup-menu-label");
          var v$47 = $("#popup-menu-coins-box");
          var v$48 = $("#popup-menu-coins-val");
          $("#popup-menu-back").click(function () {
            var vF12112 = f121();
            vF12112.Ci.Be();
            vF12112.og.Dk();
          });
          v$47.click(function () {
            var vF12113 = f121();
            if (vF12113.Ij.Hj()) {
              vF12113.Ci.Be();
              vF12113.og.Ak(vF12113.og._j);
            }
          });
          var v771 = vO39.M(vO37.kf, function (p999, p1000) {
            vO37.kf.call(this, vO37.Fk.Ek);
            this.ma = p999;
            this.co = p1000;
            this.do = [];
          });
          v771.prototype.ha = function () {
            v771.parent.prototype.ha.call(this);
            if (!v771.eo) {
              v771.eo = true;
              var vF12114 = f121();
              vF12114.Ij.zl(function () {
                if (vF12114.Ij.Hj()) {
                  v$48.html(vF12114.Ij.il());
                } else {
                  v$48.html("0");
                }
              });
            }
            vO37.bo.fo.stop();
            vO37.bo.fo.fadeOut(100);
          };
          v771.go = $("#coins-view");
          v771.ho = $("#leaders-view");
          v771.io = $("#profile-view");
          v771.jo = $("#settings-view");
          v771.ko = $("#login-view");
          v771.lo = $("#skins-view");
          v771.mo = $("#store-view");
          v771.no = $("#wear-view");
          v771.oo = $("#withdraw-consent-view");
          v771.po = $("#delete-account-view");
          v771.fo = $("#please-wait-view");
          v771.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(200);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(200);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(200);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeIn(200);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(200);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(200);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(200);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(200);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(200);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeIn(200);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(200);
            v$46.html(this.ma);
            v$47.toggle(this.co);
            this.qo();
          };
          v771.prototype.qo = function () {};
          v771.prototype.ro = function (p1001) {
            var vThis64 = this;
            var v772 = vO39.V(0, 2147483647) & 2147483647;
            this.do.push(v772);
            vO37.bo.fo.stop();
            vO37.bo.fo.fadeIn(100);
            setTimeout(function () {
              vThis64.so(v772);
            }, p1001);
            return new vF16(this, v772);
          };
          v771.prototype.so = function (p1002) {
            var v773 = this.do.indexOf(p1002);
            if (!(v773 < 0)) {
              this.do.splice(v773, 1);
              if (this.do.length === 0) {
                vO37.bo.fo.stop();
                vO37.bo.fo.fadeOut(100);
              }
            }
          };
          return v771;
        }();
        var vF16 = function () {
          function f214(p1003, p1004) {
            this.to = p1003;
            this.uo = p1004;
          }
          f214.prototype.vo = function () {
            this.to.so(this.uo);
          };
          return f214;
        }();
        vO37.ak = function () {
          var v$49 = $("#store-buy-coins_125000");
          var v$50 = $("#store-buy-coins_50000");
          var v$51 = $("#store-buy-coins_16000");
          var v$52 = $("#store-buy-coins_7000");
          var v$53 = $("#store-buy-coins_3250");
          var v$54 = $("#store-buy-coins_1250");
          var v774 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.coins.tab"), false);
            var vF12115 = f121();
            var vThis65 = this;
            v$49.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_125000");
            });
            v$50.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_50000");
            });
            v$51.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_16000");
            });
            v$52.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_7000");
            });
            v$53.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_3250");
            });
            v$54.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_1250");
            });
          });
          v774.prototype.ha = function () {
            v774.parent.prototype.ha.call(this);
          };
          v774.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeIn(200);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v774.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          v774.prototype.wo = function (p1005) {};
          return v774;
        }();
        vO37.ck = function () {
          var v$55 = $("#highscore-table");
          var v$56 = $("#leaders-button-level");
          var v$57 = $("#leaders-button-highscore");
          var v$58 = $("#leaders-button-kills");
          var v775 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.leaders.tab"), true);
            var vF12116 = f121();
            var vThis66 = this;
            this.xo = {};
            this.yo = {
              zo: {
                Ao: v$56,
                Bo: "byLevel"
              },
              Co: {
                Ao: v$57,
                Bo: "byHighScore"
              },
              Do: {
                Ao: v$58,
                Bo: "byKillsAndHeadShots"
              }
            };
            v$56.click(function () {
              vF12116.Ci.Be();
              vThis66.Eo(vThis66.yo.zo);
            });
            v$57.click(function () {
              vF12116.Ci.Be();
              vThis66.Eo(vThis66.yo.Co);
            });
            v$58.click(function () {
              vF12116.Ci.Be();
              vThis66.Eo(vThis66.yo.Do);
            });
          });
          v775.prototype.ha = function () {
            v775.parent.prototype.ha.call(this);
          };
          v775.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeIn(200);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v775.prototype.Hk = function () {
            var vThis67 = this;
            f121().Ci.Ce();
            var v776 = this.ro(5000);
            var v777 = vO39.a.b + "/pub/leaders";
            vO39.Z(v777, function () {
              vThis67.xo = {
                byLevel: [],
                byHighScore: [],
                byKillsAndHeadShots: []
              };
              vThis67.Eo(vThis67.Fo ?? vThis67.yo.zo);
              v776.vo();
            }, function (p1006) {
              vThis67.xo = p1006;
              vThis67.Eo(vThis67.Fo ?? vThis67.yo.zo);
              v776.vo();
            });
          };
          v775.prototype.Eo = function (p1007) {
            this.Fo = p1007;
            for (var v778 in this.yo) {
              if (this.yo.hasOwnProperty(v778)) {
                var v779 = this.yo[v778];
                v779.Ao.removeClass("pressed");
              }
            }
            this.Fo.Ao.addClass("pressed");
            for (var v780 = this.xo[this.Fo.Bo], vLS11 = "", vLN0126 = 0; vLN0126 < v780.length; vLN0126++) {
              var v781 = v780[vLN0126];
              vLS11 += "<div class=\"table-row\"><span>" + (vLN0126 + 1) + "</span><span><img src=\"" + v781.avatarUrl + "\"/></span><span>" + v781.username + "</span><span>" + v781.level + "</span><span>" + v781.highScore + "</span><span>" + v781.headShots + " / " + v781.kills + "</span></div>";
            }
            v$55.empty();
            v$55.append(vLS11);
          };
          return v775;
        }();
        vO37.gk = function () {
          var v$59 = $("#popup-login-gg");
          var v$60 = $("#popup-login-fb");
          var v782 = vO39.M(vO37.bo, function () {
            var vThis68 = this;
            vO37.bo.call(this, vO39.H("index.game.popup.menu.login.tab"), false);
            var vF12117 = f121();
            v$59.click(function () {
              vF12117.Ci.Be();
              var v783 = vThis68.ro(10000);
              setTimeout(function () {
                vF12117.Ij.Ml(function () {
                  if (vF12117.Ij.Hj()) {
                    vF12117.Ci.Fe();
                  }
                  v783.vo();
                });
              }, 500);
            });
            v$60.click(function () {
              vF12117.Ci.Be();
              var v784 = vThis68.ro(10000);
              setTimeout(function () {
                vF12117.Ij.Jl(function () {
                  if (vF12117.Ij.Hj()) {
                    vF12117.Ci.Fe();
                  }
                  v784.vo();
                });
              }, 500);
            });
          });
          v782.prototype.ha = function () {
            v782.parent.prototype.ha.call(this);
          };
          v782.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeIn(200);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v782.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          return v782;
        }();
        vO37.ek = function () {
          var v$61 = $("#profile-avatar");
          var v$62 = $("#profile-username");
          var v$63 = $("#profile-experience-bar");
          var v$64 = $("#profile-experience-val");
          var v$65 = $("#profile-level");
          var v$66 = $("#profile-stat-highScore");
          var v$67 = $("#profile-stat-bestSurvivalTime");
          var v$68 = $("#profile-stat-kills");
          var v$69 = $("#profile-stat-headshots");
          var v$70 = $("#profile-stat-gamesPlayed");
          var v$71 = $("#profile-stat-totalTimeSpent");
          var v$72 = $("#profile-stat-registrationDate");
          var v785 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.profile.tab"), true);
          });
          v785.prototype.ha = function () {
            v785.parent.prototype.ha.call(this);
          };
          v785.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeIn(200);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v785.prototype.Hk = function () {
            var vF12118 = f121();
            vF12118.Ci.Ce();
            var v786 = vF12118.Ij.xl();
            var v787 = moment([v786.year, v786.month - 1, v786.day]).format("LL");
            v$62.html(vF12118.Ij.dl());
            v$61.attr("src", vF12118.Ij.fl());
            v$63.width(vF12118.Ij.kl() * 100 / vF12118.Ij.ll() + "%");
            v$64.html(vF12118.Ij.kl() + " / " + vF12118.Ij.ll());
            v$65.html(vF12118.Ij.jl());
            v$66.html(vF12118.Ij.rl());
            v$67.html(vO39.J(vF12118.Ij.sl()));
            v$68.html(vF12118.Ij.tl());
            v$69.html(vF12118.Ij.ul());
            v$70.html(vF12118.Ij.vl());
            v$71.html(vO39.J(vF12118.Ij.wl()));
            v$72.html(v787);
          };
          return v785;
        }();
        vO37.hk = function () {
          var v$73 = $("#settings-music-enabled-switch");
          var v$74 = $("#settings-sfx-enabled-switch");
          var v$75 = $("#settings-show-names-switch");
          var v$76 = $("#popup-logout");
          var v$77 = $("#popup-logout-container");
          var v$78 = $("#popup-delete-account");
          var v$79 = $("#popup-delete-account-container");
          var v$80 = $("#popup-withdraw-consent");
          var v788 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.settings.tab"), false);
            var vThis69 = this;
            var vF12119 = f121();
            v$73.click(function () {
              var v789 = !!v$73.prop("checked");
              vO37.Vf.eg(vO37.Vf.Yf, v789, 30);
              vF12119.Ci.re(v789);
              vF12119.Ci.Be();
            });
            v$74.click(function () {
              var v790 = !!v$74.prop("checked");
              vO37.Vf.eg(vO37.Vf.Zf, v790, 30);
              vF12119.Ci.oe(v790);
              vF12119.Ci.Be();
            });
            v$75.click(function () {
              vF12119.Ci.Be();
            });
            v$76.click(function () {
              vF12119.Ci.Be();
              vThis69.ro(500);
              vF12119.Ij.Kl();
            });
            v$78.click(function () {
              if (vF12119.Ij.Hj()) {
                vF12119.Ci.Be();
                vF12119.og.Ak(vF12119.og.Zj);
              } else {
                vF12119.Ci.Ge();
              }
            });
            v$80.click(function () {
              if (vF12119.Go()) {
                vF12119.Ci.Be();
                vF12119.og.Ak(vF12119.og.Xj);
              } else {
                vF12119.Ci.Ge();
              }
            });
          });
          v788.prototype.ha = function () {
            v788.parent.prototype.ha.call(this);
            var vF12120 = f121();
            var vUndefined17 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Yf)) {
              case "false":
                vUndefined17 = false;
                break;
              default:
                vUndefined17 = true;
            }
            v$73.prop("checked", vUndefined17);
            vF12120.Ci.re(vUndefined17);
            var vUndefined18 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Zf)) {
              case "false":
                vUndefined18 = false;
                break;
              default:
                vUndefined18 = true;
            }
            v$74.prop("checked", vUndefined18);
            vF12120.Ci.oe(vUndefined18);
            var vUndefined19 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Xf)) {
              case "false":
                vUndefined19 = false;
                break;
              default:
                vUndefined19 = true;
            }
            v$75.prop("checked", vUndefined19);
            vF12120.Ij.yl(function () {
              v$77.toggle(vF12120.Ij.Hj());
              v$79.toggle(vF12120.Ij.Hj());
            });
          };
          v788.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeIn(200);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v788.prototype.Hk = function () {
            var vF12121 = f121();
            vF12121.Ci.Ce();
            if (vF12121.Go()) {
              v$80.show();
            } else {
              v$80.hide();
            }
          };
          v788.prototype.Zh = function () {
            return v$75.prop("checked");
          };
          return v788;
        }();
        vO37.jk = function () {
          var v$81 = $("#store-view-canv");
          var v$82 = $("#skin-description-text");
          var v$83 = $("#skin-group-description-text");
          var v$84 = $("#store-locked-bar");
          var v$85 = $("#store-locked-bar-text");
          var v$86 = $("#store-buy-button");
          var v$87 = $("#store-item-price");
          var v$88 = $("#store-groups");
          var v$89 = $("#store-view-prev");
          var v$90 = $("#store-view-next");
          var v791 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.skins.tab"), true);
            var vThis70 = this;
            var vF12122 = f121();
            this.Ho = null;
            this.Io = [];
            this.Jo = {};
            this.Ko = new vO37.dm(v$81);
            v$86.click(function () {
              vF12122.Ci.Be();
              vThis70.Lo();
            });
            v$89.click(function () {
              vF12122.Ci.Be();
              vThis70.Ho.Mo();
            });
            v$90.click(function () {
              vF12122.Ci.Be();
              vThis70.Ho.No();
            });
          });
          v791.prototype.ha = function () {
            v791.parent.prototype.ha.call(this);
            var vThis71 = this;
            var vF12123 = f121();
            vF12123.Lc.$b(function () {
              var v792 = vF12123.Lc.Xb();
              vThis71.Io = [];
              for (var vLN0127 = 0; vLN0127 < v792.skinGroupArrayDict.length; vLN0127++) {
                vThis71.Io.push(new vF17(vThis71, v792.skinGroupArrayDict[vLN0127]));
              }
              vThis71.Jo = {};
              for (var vLN0128 = 0; vLN0128 < v792.skinArrayDict.length; vLN0128++) {
                var v793 = v792.skinArrayDict[vLN0128];
                vThis71.Jo[v793.id] = v793;
              }
              vThis71.Oo();
            });
            this.Po(false);
            vF12123.On.zj(function () {
              vThis71.Po(false);
            });
          };
          v791.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeIn(200);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v791.prototype.Hk = function () {
            f121().Ci.pe(vO37.ge.je._e);
            f121().Ci.Ce();
            this.Oo();
            this.Ko.Kf(true);
          };
          v791.prototype.Bk = function () {
            this.Ko.Kf(false);
          };
          v791.prototype.Jf = function () {
            this.Ko.Jf();
          };
          v791.prototype.Nf = function (p1008, p1009) {
            this.Ko.Nf();
          };
          v791.prototype.Oo = function () {
            var vThis72 = this;
            var vThis73 = this;
            var vF12124 = f121();
            v$88.empty();
            for (var vLN0130 = 0; vLN0130 < this.Io.length; vLN0130++) {
              (function (p1010) {
                var v794 = vThis72.Io[p1010];
                var v795 = document.createElement("li");
                v$88.append(v795);
                var v$91 = $(v795);
                if (v794.To && v794.To.isCustom) {
                  v$91.css("background-color", "#FFF");
                  v$91.css("color", "#000");
                }
                v$91.html(v794.Qo());
                v$91.click(function () {
                  vF12124.Ci.Be();
                  vThis73.Ro(v794);
                });
                v794.So = v$91;
              })(vLN0130);
            }
            if (this.Io.length > 0) {
              var v796 = vF12124.On.rj(vO37.tj.sj);
              for (var vLN0130 = 0; vLN0130 < this.Io.length; vLN0130++) {
                var v797 = this.Io[vLN0130];
                for (var v798 = v797.To.list, vLN0131 = 0; vLN0131 < v798.length; vLN0131++) {
                  if (v798[vLN0131] == v796) {
                    v797.Uo = vLN0131;
                    this.Ro(v797);
                    return;
                  }
                }
              }
              this.Ro(this.Io[0]);
            }
          };
          v791.prototype.Ro = function (p1011) {
            var vF12125 = f121();
            if (this.Ho !== p1011) {
              this.Ho = p1011;
              v$88.children().removeClass("pressed");
              if (this.Ho.So) {
                this.Ho.So.addClass("pressed");
              }
              v$83.html("");
              if (p1011.To != null) {
                var v799 = vF12125.Lc.Xb().textDict[p1011.To.description];
                if (v799 != null) {
                  v$83.html(vO39.K(vO39.I(v799)));
                }
              }
              this.Po(true);
            }
          };
          v791.prototype.Vo = function () {
            if (this.Ho == null) {
              return vO37.Si.Ui();
            } else {
              return this.Ho.Wo();
            }
          };
          v791.prototype.Lo = function () {
            var vThis74 = this;
            var v800 = this.Vo();
            if (v800.Wi()) {
              var v801 = v800.bc();
              vThis74.Xo(v801);
            }
          };
          v791.prototype.Xo = function (p1012) {
            var vF12126 = f121();
            var v802 = vF12126.On.Gj(p1012, vO37.tj.sj);
            if (v802 != null) {
              var v803 = v802.Jj();
              if (!(vF12126.Ij.il() < v803)) {
                var v804 = vF12126.On.rj(vO37.tj.sj);
                var v805 = vF12126.On.rj(vO37.tj.uj);
                var v806 = vF12126.On.rj(vO37.tj.vj);
                var v807 = vF12126.On.rj(vO37.tj.xj);
                var v808 = vF12126.On.rj(vO37.tj.wj);
                var v809 = this.ro(5000);
                vF12126.Ij.Hl(p1012, vO37.tj.sj, function () {
                  v809.vo();
                  vF12126.og.Ak(vF12126.og.tk);
                }, function (p1013) {
                  vF12126.Ij.Bl(function () {
                    vF12126.On.Fj(v804, vO37.tj.sj);
                    vF12126.On.Fj(v805, vO37.tj.uj);
                    vF12126.On.Fj(v806, vO37.tj.vj);
                    vF12126.On.Fj(v807, vO37.tj.xj);
                    vF12126.On.Fj(v808, vO37.tj.wj);
                    vF12126.On.Fj(p1012, vO37.tj.sj);
                    v809.vo();
                  });
                });
              }
            }
          };
          v791.prototype.Po = function (p1014) {
            var vF12127 = f121();
            var v810 = vF12127.On.yj();
            var v811 = this.Vo();
            if (v811.Wi()) {
              var v812 = v811.bc();
              var v813 = vF12127.On.Gj(v812, vO37.tj.sj);
              var v814 = false;
              var v815 = vF12127.On.Cj(v812, vO37.tj.sj);
              var v816 = true;
              if (v815) {
                v$84.hide();
                v$86.hide();
              } else if (v813 == null || v813.Kj()) {
                v814 = true;
                v$84.show();
                v$86.hide();
                v$85.text(vO39.H("index.game.popup.menu.store.locked"));
                if (v813 != null && v813.Kj()) {
                  var v817 = vF12127.Lc.Xb().textDict[v813.Em()];
                  if (v817 != null) {
                    v$85.text(vO39.I(v817));
                  }
                }
              } else {
                v816 = false;
                v$84.hide();
                v$86.show();
                v$87.html(v813.Jj());
              }
              v$82.html("");
              var v818 = vF12127.Lc.Xb().textDict[v813.Fm()];
              var v819 = v818 ? vO39.K(vO39.I(v818)) : v813.Fm();
              if (v813 != null && v813.Fm() != null) {
                v$82.html(v819);
              }
              if (v816 && v813.Bm !== true) {
                v$2.html(`<button onclick="mbf.mbf_cambiar_add('${v812}', '${v819}')">Add</button>`);
              } else {
                v$2.html("");
              }
              this.Ko.$l(v810.Um(v812));
              this.Ko.um(v814);
              if (p1014) {
                vF12127.On.Fj(v812, vO37.tj.sj);
              }
            }
          };
          var vF17 = function () {
            function f215(p1015, p1016) {
              this.Yo = p1015;
              this.Uo = 0;
              this.To = p1016;
            }
            f215.prototype.Mo = function () {
              if (--this.Uo < 0) {
                this.Uo = this.To.list.length - 1;
              }
              this.Yo.Po(true);
            };
            f215.prototype.No = function () {
              if (++this.Uo >= this.To.list.length) {
                this.Uo = 0;
              }
              this.Yo.Po(true);
            };
            f215.prototype.Qo = function () {
              if (this.To.img) {
                var v820 = f121().Lc.Xb().customPaths;
                var v821 = URL_CDN + "/images/" + v820.texture;
                var vA19 = [];
                try {
                  vA19.push(`background-image:url('${v821}')`);
                  vA19.push(`background-position: -${v820.map[this.To.img].x}px -${v820.map[this.To.img].y}px`);
                  vA19.push("background-repeat:no-repeat");
                  vA19.push("width: 180px");
                  vA19.push("height: 40px");
                } catch (e38) {
                  console.error(v821, e38);
                }
                return `<div id="${this.To.id}" style="${vA19.join(";")}"></div>`;
              }
              return vO39.I(this.To.name);
            };
            f215.prototype.Wo = function () {
              if (this.Uo >= this.To.list.length) {
                return vO37.Si.Ui();
              } else {
                return vO37.Si.Vi(this.To.list[this.Uo]);
              }
            };
            return f215;
          }();
          return v791;
        }();
        vO37.lk = function () {
          var v$92 = $("#store-go-coins-button");
          var v$93 = $("#store-go-skins-button");
          var v$94 = $("#store-go-wear-button");
          var v822 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.store.tab"), true);
            var vF12128 = f121();
            v$92.click(function () {
              vF12128.Ci.Be();
              vF12128.og.Ak(vF12128.og._j);
            });
            v$93.click(function () {
              vF12128.Ci.Be();
              vF12128.og.Ak(vF12128.og.ik);
            });
            v$94.click(function () {
              vF12128.Ci.Be();
              vF12128.og.Ak(vF12128.og.mk);
            });
          });
          v822.prototype.ha = function () {
            v822.parent.prototype.ha.call(this);
          };
          v822.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeIn(200);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v822.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          return v822;
        }();
        vO37.nk = function () {
          var v$95 = $("#wear-view-canv");
          var v$96 = $("#wear-description-text");
          var v$97 = $("#wear-locked-bar");
          var v$98 = $("#wear-locked-bar-text");
          var v$99 = $("#wear-buy-button");
          var v$100 = $("#wear-item-price");
          var v$101 = $("#wear-eyes-button");
          var v$102 = $("#wear-mouths-button");
          var v$103 = $("#wear-glasses-button");
          var v$104 = $("#wear-hats-button");
          var v$105 = $("#wear-tint-chooser");
          var v$106 = $("#wear-view-prev");
          var v$107 = $("#wear-view-next");
          var v823 = vO39.M(vO37.bo, function () {
            var vThis75 = this;
            vO37.bo.call(this, vO39.H("index.game.popup.menu.wear.tab"), true);
            var vF12129 = f121();
            var vThis76 = this;
            this.Zo = [];
            this.uj = new vF18(this, vO37.tj.uj, v$101);
            this.vj = new vF18(this, vO37.tj.vj, v$102);
            this.xj = new vF18(this, vO37.tj.xj, v$103);
            this.wj = new vF18(this, vO37.tj.wj, v$104);
            this.$o = null;
            this._o = null;
            this.ap = null;
            this.bp = null;
            this.cp = null;
            this.dp = null;
            this.Ko = new vO37.dm(v$95);
            v$99.click(function () {
              vF12129.Ci.Be();
              vThis76.ep();
            });
            v$106.click(function () {
              vF12129.Ci.Be();
              vThis76.$o.fp();
            });
            v$107.click(function () {
              vF12129.Ci.Be();
              vThis76.$o.gp();
            });
            v$101.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.uj);
            });
            v$102.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.vj);
            });
            v$103.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.xj);
            });
            v$104.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.wj);
            });
            this.Zo.push(this.uj);
            this.Zo.push(this.vj);
            this.Zo.push(this.xj);
            this.Zo.push(this.wj);
          });
          v823.prototype.ha = function () {
            v823.parent.prototype.ha.call(this);
            var vF12130 = f121();
            var vThis77 = this;
            vF12130.Lc.$b(function () {
              var v824 = vF12130.Lc.Xb();
              vThis77._o = v824.eyesDict;
              vThis77.ap = v824.mouthDict;
              vThis77.bp = v824.glassesDict;
              vThis77.cp = v824.hatDict;
              vThis77.dp = v824.colorDict;
              vThis77.uj.ip(v824.eyesVariantArray);
              vThis77.uj.jp(vThis77._o);
              vThis77.vj.ip(v824.mouthVariantArray);
              vThis77.vj.jp(vThis77.ap);
              vThis77.xj.ip(v824.glassesVariantArray);
              vThis77.xj.jp(vThis77.bp);
              vThis77.wj.ip(v824.hatVariantArray);
              vThis77.wj.jp(vThis77.cp);
            });
            this.Po(false);
            vF12130.On.zj(function () {
              vThis77.Po(false);
            });
          };
          v823.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeIn(200);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v823.prototype.Hk = function () {
            f121().Ci.pe(vO37.ge.je._e);
            f121().Ci.Ce();
            this.hp(this.$o ?? this.uj);
            this.Ko.Kf(true);
          };
          v823.prototype.Bk = function () {
            this.Ko.Kf(false);
          };
          v823.prototype.Jf = function () {
            this.Ko.Jf();
          };
          v823.prototype.Nf = function (p1017, p1018) {
            this.Ko.Nf();
          };
          v823.prototype.hp = function (p1019) {
            this.$o = p1019;
            for (var vLN0132 = 0; vLN0132 < this.Zo.length; vLN0132++) {
              this.Zo[vLN0132].Ao.removeClass("pressed");
            }
            this.$o.Ao.addClass("pressed");
            this.$o.Gk();
          };
          v823.prototype.kp = function () {
            if (this.$o == null) {
              return vO37.Si.Ui();
            } else {
              return vO37.Si.Vi({
                ae: this.$o.Wo(),
                nd: this.$o.nd
              });
            }
          };
          v823.prototype.ep = function () {
            var vThis78 = this;
            var v825 = this.kp();
            if (v825.Wi()) {
              var v826 = v825.bc();
              vThis78.lp(v826.ae, v826.nd);
            }
          };
          v823.prototype.lp = function (p1020, p1021) {
            var vF12131 = f121();
            var v827 = vF12131.On.Gj(p1020, p1021);
            if (v827 != null) {
              var v828 = v827.Jj();
              if (!(vF12131.Ij.il() < v828)) {
                var v829 = vF12131.On.rj(vO37.tj.sj);
                var v830 = vF12131.On.rj(vO37.tj.uj);
                var v831 = vF12131.On.rj(vO37.tj.vj);
                var v832 = vF12131.On.rj(vO37.tj.xj);
                var v833 = vF12131.On.rj(vO37.tj.wj);
                var v834 = this.ro(5000);
                vF12131.Ij.Hl(p1020, p1021, function () {
                  v834.vo();
                  vF12131.og.Ak(vF12131.og.tk);
                }, function (p1022) {
                  vF12131.Ij.Bl(function () {
                    vF12131.On.Fj(v829, vO37.tj.sj);
                    vF12131.On.Fj(v830, vO37.tj.uj);
                    vF12131.On.Fj(v831, vO37.tj.vj);
                    vF12131.On.Fj(v832, vO37.tj.xj);
                    vF12131.On.Fj(v833, vO37.tj.wj);
                    vF12131.On.Fj(p1020, p1021);
                    v834.vo();
                  });
                });
              }
            }
          };
          v823.prototype.Po = function (p1023) {
            var vF12132 = f121();
            var v835 = vF12132.On.yj();
            var v836 = this.kp();
            if (v836.Wi()) {
              var v837 = v836.bc();
              var v838 = vF12132.On.Gj(v837.ae, v837.nd);
              var v839 = false;
              if (vF12132.On.Cj(v837.ae, v837.nd)) {
                v$97.hide();
                v$99.hide();
              } else if (v838 == null || v838.Kj()) {
                v839 = true;
                v$97.show();
                v$99.hide();
                v$98.text(vO39.H("index.game.popup.menu.store.locked"));
                if (v838 != null && v838.Kj()) {
                  var v840 = vF12132.Lc.Xb().textDict[v838.Em()];
                  if (v840 != null) {
                    v$98.text(vO39.I(v840));
                  }
                }
              } else {
                v$97.hide();
                v$99.show();
                v$100.html(v838.Jj());
              }
              v$96.html("");
              if (v838 != null && v838.Fm() != null) {
                var v841 = vF12132.Lc.Xb().textDict[v838.Fm()];
                if (v841 != null) {
                  v$96.html(vO39.K(vO39.I(v841)));
                }
              }
              var v842 = this.Ko;
              switch (v837.nd) {
                case vO37.tj.uj:
                  v842.$l(v835.Vm(v837.ae));
                  v842.vm(v839);
                  break;
                case vO37.tj.vj:
                  v842.$l(v835.Wm(v837.ae));
                  v842.wm(v839);
                  break;
                case vO37.tj.xj:
                  v842.$l(v835.Ym(v837.ae));
                  v842.ym(v839);
                  break;
                case vO37.tj.wj:
                  v842.$l(v835.Xm(v837.ae));
                  v842.xm(v839);
              }
              if (p1023) {
                vF12132.On.Fj(v837.ae, v837.nd);
              }
            }
          };
          var vF18 = function () {
            function f216(p1024, p1025, p1026) {
              this.Yo = p1024;
              this.nd = p1025;
              this.Ao = p1026;
              this.ac = {};
              this.mp = [[]];
              this.np = -10;
              this.op = -10;
            }
            f216.prototype.ip = function (p1027) {
              this.mp = p1027;
            };
            f216.prototype.jp = function (p1028) {
              this.ac = p1028;
            };
            f216.prototype.Gk = function () {
              var vF12133 = f121();
              var v843 = vF12133.On.rj(this.nd);
              for (var vLN0133 = 0; vLN0133 < this.mp.length; vLN0133++) {
                for (var vLN0134 = 0; vLN0134 < this.mp[vLN0133].length; vLN0134++) {
                  if (this.mp[vLN0133][vLN0134] == v843) {
                    this.pp(vLN0133);
                    this.qp(vLN0134);
                    return;
                  }
                }
              }
              this.pp(0);
              this.qp(0);
            };
            f216.prototype.fp = function () {
              var v844 = this.np - 1;
              if (v844 < 0) {
                v844 = this.mp.length - 1;
              }
              this.pp(v844);
              this.qp(this.op % this.mp[v844].length);
            };
            f216.prototype.gp = function () {
              var v845 = this.np + 1;
              if (v845 >= this.mp.length) {
                v845 = 0;
              }
              this.pp(v845);
              this.qp(this.op % this.mp[v845].length);
            };
            f216.prototype.pp = function (p1029) {
              var vThis79 = this;
              if (!(p1029 < 0) && !(p1029 >= this.mp.length)) {
                this.np = p1029;
                v$105.empty();
                var v846 = this.mp[this.np];
                if (v846.length > 1) {
                  for (var vLN0135 = 0; vLN0135 < v846.length; vLN0135++) {
                    (function (p1030) {
                      var v847 = v846[p1030];
                      var v848 = vThis79.ac[v847];
                      var v849 = "#" + vThis79.Yo.dp[v848.prime];
                      var v$108 = $("<div style=\"border-color:" + v849 + "\"></div>");
                      v$108.click(function () {
                        f121().Ci.Be();
                        vThis79.qp(p1030);
                      });
                      v$105.append(v$108);
                    })(vLN0135);
                  }
                }
              }
            };
            f216.prototype.qp = function (p1031) {
              if (!(p1031 < 0) && !(p1031 >= this.mp[this.np].length)) {
                this.op = p1031;
                v$105.children().css("background-color", "transparent");
                var v850 = v$105.children(":nth-child(" + (1 + p1031) + ")");
                v850.css("background-color", v850.css("border-color"));
                this.Yo.Po(true);
              }
            };
            f216.prototype.Wo = function () {
              return this.mp[this.np][this.op];
            };
            return f216;
          }();
          return v823;
        }();
        vO37.Yj = function () {
          var v$109 = $("#withdraw-consent-yes");
          var v$110 = $("#withdraw-consent-no");
          var v851 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.consent.tab"), false);
            var vF12134 = f121();
            v$109.click(function () {
              vF12134.Ci.Be();
              if (vF12134.Go()) {
                vF12134.og.Ak(vF12134.og._e);
                vF12134.rp(false, true);
                vF12134.og.qk._n(new vO37.sp());
              } else {
                vF12134.og.Dk();
              }
            });
            v$110.click(function () {
              vF12134.Ci.Be();
              vF12134.og.Dk();
            });
          });
          v851.prototype.ha = function () {
            v851.parent.prototype.ha.call(this);
          };
          v851.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeIn(200);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v851.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          return v851;
        }();
        vO37.$j = function () {
          var v$111 = $("#delete-account-timer");
          var v$112 = $("#delete-account-yes");
          var v$113 = $("#delete-account-no");
          var v852 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.delete.tab"), false);
            var vF12135 = f121();
            v$112.click(function () {
              vF12135.Ci.Be();
              if (vF12135.Ij.Hj()) {
                vF12135.Ij.Sl();
                vF12135.Ij.Kl();
              } else {
                vF12135.og.Dk();
              }
            });
            v$113.click(function () {
              vF12135.Ci.Be();
              vF12135.og.Dk();
            });
            this.tp = [];
          });
          v852.prototype.ha = function () {
            v852.parent.prototype.ha.call(this);
          };
          v852.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeIn(200);
          };
          v852.prototype.Hk = function () {
            f121().Ci.Ge();
            v$112.stop();
            v$112.hide();
            v$111.stop();
            v$111.show();
            v$111.text(".. 10 ..");
            this.up();
            this.vp(function () {
              v$111.text(".. 9 ..");
            }, 1000);
            this.vp(function () {
              v$111.text(".. 8 ..");
            }, 2000);
            this.vp(function () {
              v$111.text(".. 7 ..");
            }, 3000);
            this.vp(function () {
              v$111.text(".. 6 ..");
            }, 4000);
            this.vp(function () {
              v$111.text(".. 5 ..");
            }, 5000);
            this.vp(function () {
              v$111.text(".. 4 ..");
            }, 6000);
            this.vp(function () {
              v$111.text(".. 3 ..");
            }, 7000);
            this.vp(function () {
              v$111.text(".. 2 ..");
            }, 8000);
            this.vp(function () {
              v$111.text(".. 1 ..");
            }, 9000);
            this.vp(function () {
              v$111.hide();
              v$112.fadeIn(300);
            }, 10000);
          };
          v852.prototype.vp = function (p1032, p1033) {
            var vSetTimeout2 = setTimeout(p1032, p1033);
            this.tp.push(vSetTimeout2);
          };
          v852.prototype.up = function () {
            for (var vLN0136 = 0; vLN0136 < this.tp.length; vLN0136++) {
              clearTimeout(this.tp[vLN0136]);
            }
            this.tp = [];
          };
          return v852;
        }();
        vO37.wp = function () {
          function f217() {
            this.ao = function () {};
          }
          f217.prototype.tf = function () {};
          f217.prototype.Hk = function () {};
          return f217;
        }();
        vO37.Gl = function () {
          var v853 = vO39.M(vO37.wp, function (p1034) {
            vO37.wp.call(this);
            var v854 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v854 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1034 + "</div>    <div class=\"toaster-coins-close\">" + vO39.H("index.game.toaster.continue") + "</div></div>");
            var vThis80 = this;
            this.xp.find(".toaster-coins-close").click(function () {
              f121().Ci.Be();
              vThis80.ao();
            });
          });
          v853.prototype.tf = function () {
            return this.xp;
          };
          v853.prototype.Hk = function () {
            f121().Ci.Ee();
          };
          return v853;
        }();
        vO37.Fl = function () {
          var v855 = vO39.M(vO37.wp, function (p1035) {
            vO37.wp.call(this);
            var v856 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v856 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1035 + "</div>    <div class=\"toaster-levelup-text\">" + vO39.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + vO39.H("index.game.toaster.continue") + "</div></div>");
            var vThis81 = this;
            this.xp.find(".toaster-levelup-close").click(function () {
              f121().Ci.Be();
              vThis81.ao();
            });
          });
          v855.prototype.tf = function () {
            return this.xp;
          };
          v855.prototype.Hk = function () {
            f121().Ci.De();
          };
          return v855;
        }();
        vO37.sp = function () {
          var v857 = vO39.M(vO37.wp, function () {
            vO37.wp.call(this);
            var vThis82 = this;
            var vF12136 = f121();
            var v858 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v858 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vO39.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + vO39.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO39.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + vO39.H("index.game.toaster.consent.iAccept") + "</div></div>");
            this.yp = this.xp.find(".toaster-consent-close");
            this.yp.hide();
            this.yp.click(function () {
              vF12136.Ci.Be();
              if (vF12136.Go()) {
                vF12136.rp(true, true);
              }
              vThis82.ao();
            });
          });
          v857.prototype.tf = function () {
            return this.xp;
          };
          v857.prototype.Hk = function () {
            var vThis83 = this;
            var vF12137 = f121();
            if (vF12137.Go() && !vF12137.hl()) {
              vF12137.Ci.Ge();
              setTimeout(function () {
                vThis83.yp.fadeIn(300);
              }, 2000);
            } else {
              setTimeout(function () {
                vThis83.ao();
              }, 0);
            }
          };
          return v857;
        }();
        vO37.uk = function () {
          var v$114 = $("#error-gateway-connection-retry");
          var v859 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vF12138 = f121();
            v$114.click(function () {
              vF12138.Ci.Be();
              vF12138.og.ie.Mn();
              vF12138.og.Ak(vF12138.og.ie);
              setTimeout(function () {
                var v860 = vO39.a.b + "/pub/healthCheck/ping";
                vO39.Z(v860, function () {
                  vF12138.og.Ak(vF12138.og.tk);
                }, function (p1036) {
                  vF12138.og.ie.Kn();
                  vF12138.Lc.Ib(function () {
                    vF12138.og.Ak(vF12138.og._e);
                  }, function (p1037) {
                    vF12138.og.Ak(vF12138.og.tk);
                  }, function (p1038, p1039) {
                    var vP1038 = p1038;
                    vF12138.og.ie.Ln(vP1038, p1039);
                  });
                });
              }, 2000);
            });
          });
          v859.prototype.ha = function () {};
          v859.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeIn(500);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v859.prototype.Hk = function () {
            var vF12139 = f121();
            vF12139.Ci.pe(vO37.ge.je._e);
            vF12139.Ci.Ge();
          };
          return v859;
        }();
        vO37.wk = function () {
          var v$115 = $("#error-game-connection-retry");
          var v861 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vF12140 = f121();
            v$115.click(function () {
              vF12140.Ci.Be();
              vF12140.og.Ak(vF12140.og._e);
            });
          });
          v861.prototype.ha = function () {};
          v861.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeIn(500);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v861.prototype.Hk = function () {
            var vF12141 = f121();
            vF12141.Ci.pe(vO37.ge.je._e);
            vF12141.Ci.Ge();
          };
          return v861;
        }();
        vO39.zp = function () {
          function f218(p1040) {
            var v862 = p1040 + Math.floor(Math.random() * 65535) * 37;
            vO37.Vf.eg(vO37.Vf.cg, v862, 30);
          }
          function f219() {
            return parseInt(vO37.Vf.fg(vO37.Vf.cg)) % 37;
          }
          return function () {
            var vF219 = f219();
            if (!(vF219 >= 0) || !(vF219 < vF20.Ap)) {
              vF219 = Math.max(0, vF20.Ap - 2);
            }
            var vO55 = {
              zn: vF20,
              Bp: false
            };
            vO55.Cp = Date.now();
            vO55.Dp = 0;
            vO55.Ep = 0;
            vO55.Fp = null;
            vO55.Gp = vO39.a.j;
            vO55.Hp = vO39.a.i;
            vO55.dh = null;
            vO55.Lc = null;
            vO55.xe = null;
            vO55.Ci = null;
            vO55.og = null;
            vO55.On = null;
            vO55.Ij = null;
            try {
              if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (p1041) {
                  if (p1041.coords !== undefined) {
                    var v863 = p1041.coords;
                    if (v863.latitude !== undefined && v863.longitude !== undefined) {
                      vO55.Fp = p1041;
                    }
                  }
                }, function (p1042) {});
              }
            } catch (e39) {}
            vO55.Ip = function () {
              vO55.dh = new vO37.Engine();
              vO55.dh.Kp = new vO37.MessageProcessor(vO55.dh);
              vO55.Lc = new vO37._a();
              vO55.xe = new vO37.Qj();
              vO55.Ci = new vO37.ge();
              vO55.og = new vO37.Tj();
              vO55.On = new vO37.kj();
              vO55.Ij = new vO37.Mk();
              vO55.ha();
            };
            vO55.ha = function () {
              try {
                ga("send", "event", "app", window.runtimeHash + "_init");
              } catch (e40) {}
              vO55.dh.Lp = function () {
                vO55.og.Ak(vO55.og.vk);
              };
              vO55.dh.Mp = function () {
                var v864 = vO55.og._e.Wn();
                try {
                  ga("send", "event", "game", window.runtimeHash + "_start", v864);
                } catch (e41) {}
                vO55.Ci.pe(vO37.ge.je.af);
                vO55.og.Ak(vO55.og.af.Dn());
              };
              vO55.dh.Np = function () {
                try {
                  ga("send", "event", "game", window.runtimeHash + "_end");
                } catch (e42) {}
                if ($("body").height() >= 430) {
                  vO55.zn.Op.ka();
                }
                vO55.Lc.Ib(null, null, null);
                (function () {
                  var v865 = Math.floor(vO55.dh.ch.Bh);
                  var v866 = vO55.dh.Ih;
                  if (vO55.Ij.Hj()) {
                    vO55.Ij.Bl(function () {
                      vO55.Pp(v865, v866);
                    });
                  } else {
                    vO55.Pp(v865, v866);
                  }
                })();
              };
              vO55.dh.Qp = function (p1043) {
                p1043(vO55.og.af.Gn(), vO55.og.af.Hn());
              };
              vO55.Ij.yl(function () {
                var v867 = vO55.og.Lk();
                if (v867 != null && v867.nd === vO37.Fk.Ek) {
                  vO55.Ci.pe(vO37.ge.je._e);
                  vO55.og.Ak(vO55.og._e);
                }
                if (vO55.Ij.Hj()) {
                  try {
                    var v868 = vO55.Ij.cl();
                    ga("set", "userId", v868);
                  } catch (e43) {}
                }
                if (vO55.Go() && vO55.Ij.Hj() && !vO55.Ij.hl()) {
                  vO55.rp(false, false);
                  vO55.og.qk._n(new vO37.sp());
                } else {
                  vO55.Rp(true);
                }
              });
              vO55.dh.run();
              vO55.og.ha();
              vO55.On.ha();
              vO55.Lc.ha();
              vO55.og._e.Vn();
              vO55.og.Ak(vO55.og._e);
              vO55.xe.ha(function () {
                vO55.Ci.ha();
                vO55.Ij.ha();
                vO55.Lc.Ib(function () {
                  vO55.og._e.Un();
                  vO55.og.Ak(vO55.og._e);
                }, function (p1044) {
                  vO55.og._e.Un();
                  vO55.og.Ak(vO55.og.tk);
                }, function (p1045, p1046) {
                  var vP1045 = p1045;
                  vO55.og.ie.Ln(vP1045, p1046);
                  vO55.og._e.Ln(vP1045, p1046);
                });
                if (vO55.Go() && !vO55.hl()) {
                  vO55.og.qk._n(new vO37.sp());
                } else {
                  vO55.Rp(true);
                }
              });
            };
            vO55.Sp = function (p1047) {
              if (vO55.Ij.Hj()) {
                var v869 = vO55.Ij.Al();
                var v870 = vO39.a.b + "/pub/wuid/" + v869 + "/consent/change?value=" + encodeURI(p1047);
                vO39.Z(v870, function () {}, function (p1048) {});
              }
            };
            vO55.Pn = function (p1049) {
              vF219++;
              if (!vO55.zn.Tp && vF219 >= vO55.zn.Ap) {
                vO55.og.Ak(vO55.og.xk);
                vO55.Ci.pe(vO37.ge.je.cf);
                vO55.zn.Up.ia();
              } else {
                f218(vF219);
                vO55.Vp(p1049);
              }
            };
            vO55.Vp = function (p1050) {
              if (vO55.dh.Wp()) {
                vO55.og.ie.Mn();
                vO55.og.Ak(vO55.og.ie);
                var v871 = vO55.og._e.Wn();
                vO37.Vf.eg(vO37.Vf._f, v871, 30);
                var v872 = vO55.og.$h.Zh();
                vO37.Vf.eg(vO37.Vf.Xf, v872, 30);
                var vLN0137 = 0;
                if (vO55.Fp != null) {
                  var v873 = vO55.Fp.coords.latitude;
                  var v874 = vO55.Fp.coords.longitude;
                  vLN0137 = Math.max(0, Math.min(32767, (v873 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v874 + 180) / 360 * 65536)) << 16;
                }
                if (vO55.Ij.Hj()) {
                  vO55.Xp(v871, vLN0137, p1050);
                } else {
                  var v875 = vO55.og._e.el();
                  vO37.Vf.eg(vO37.Vf.ag, v875, 30);
                  var v876 = vO55.On.rj(vO37.tj.sj);
                  vO37.Vf.eg(vO37.Vf.bg, v876, 30);
                  vO55.Yp(v871, vLN0137);
                }
              }
            };
            vO55.Xp = function (p1051, p1052, p1053) {
              var vVO55 = vO55;
              var v877 = vO55.Ij.Al();
              var v878 = vO55.og._e.el();
              var v879 = vO55.On.rj(vO37.tj.sj);
              var v880 = vO55.On.rj(vO37.tj.uj);
              var v881 = vO55.On.rj(vO37.tj.vj);
              var v882 = vO55.On.rj(vO37.tj.xj);
              var v883 = vO55.On.rj(vO37.tj.wj);
              var v884 = (v39 ? URL_CDN : vO39.a.b) + "/pub/wuid/" + v877 + "/start?gameMode=" + encodeURI(p1051) + "&gh=" + p1052 + "&nickname=" + vO31.Xp(v877, v878, v879, v880, v881, v882, v883) + "&skinId=" + encodeURI(_wwc.validInput(v879 || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(v880)) + "&mouthId=" + encodeURI(_wwc.validInputWear(v881)) + "&glassesId=" + encodeURI(_wwc.validInputWear(v882)) + "&hatId=" + encodeURI(_wwc.validInputWear(v883));
              vO39.Z(v884, function () {
                vVO55.og.Ak(vVO55.og.tk);
              }, function (p1054) {
                if (p1054.code === 1460) {
                  vVO55.og.Ak(vVO55.og.ok);
                  try {
                    ga("send", "event", "restricted", window.runtimeHash + "_tick");
                  } catch (e44) {}
                } else if (false) {} else {
                  if (!p1054.server_url) {
                    vO30.dh.Cq();
                    return;
                  }
                  var v885 = p1054.server_url;
                  vVO55.dh.Zp(v885, v877, p1053);
                }
              });
            };
            vO55.Yp = function (p1055, p1056) {
              var vVO552 = vO55;
              var v886 = vO55.og._e.el();
              var v887 = vO55.On.rj(vO37.tj.sj);
              var v888 = vO39.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(p1055) + "&gh=" + p1056 + "&nickname=" + encodeURI(v886) + "&skinId=" + encodeURI(v887);
              vO39.Z(v888, function () {
                vVO552.og.Ak(vVO552.og.tk);
              }, function (p1057) {
                if (p1057.code === 1460) {
                  vVO552.og.Ak(vVO552.og.ok);
                  try {
                    ga("send", "event", "restricted", window.runtimeHash + "_tick");
                  } catch (e45) {}
                } else if (p1057.code !== 1200) {
                  vVO552.og.Ak(vVO552.og.tk);
                } else {
                  var v889 = p1057.server_url;
                  vVO552.dh.$p(v889, v886, v887);
                }
              });
            };
            vO55.Pp = function (p1058, p1059) {
              var v890 = vO55.og._e.el();
              vO55.og.af.Fn(p1058, p1059, v890);
              vO55.Ci.pe(vO37.ge.je.bf);
              vO55.og.Ak(vO55.og.af.En());
            };
            vO55.Sn = function () {
              if (!vO55.Tn()) {
                return vO55.On.Bj();
              }
              var vParseInt6 = parseInt(vO37.Vf.fg(vO37.Vf.bg));
              if (vParseInt6 != null && vO55.On.Cj(vParseInt6, vO37.tj.sj)) {
                return vParseInt6;
              } else {
                return vO55.On.Bj();
              }
            };
            vO55.Xn = function (p1060) {
              vO37.Vf.eg(vO37.Vf.dg, p1060 ? "true" : "false", 1800);
            };
            vO55.Tn = function () {
              return vO37.Vf.fg(vO37.Vf.dg) === "true";
            };
            vO55.Rp = function (p1061) {
              if (p1061 !== vO55.Bp) {
                vO55.Bp = p1061;
                var v891 = v891 || {};
                v891.consented = p1061;
                v891.gdprConsent = p1061;
                vO55.zn.yn.ha();
                vO55.zn.Op.ha();
                vO55.zn.Up.ha(function (p1062) {
                  if (p1062) {
                    f218(vF219 = 0);
                  }
                  vO55.Vp();
                });
              }
            };
            vO55.rp = function (p1063, p1064) {
              vO37.Vf.eg(vO37.Vf.Wf, p1063 ? "true" : "false");
              if (p1064) {
                vO55.Sp(p1063);
              }
              vO55.Rp(p1063);
            };
            vO55.hl = function () {
              switch (vO37.Vf.fg(vO37.Vf.Wf)) {
                case "true":
                  return true;
                default:
                  return false;
              }
            };
            vO55.Go = function () {
              try {
                return !!window.isIPInEEA || vO55.Fp != null && !!vO38.gg.hg(vO55.Fp.coords.latitude, vO55.Fp.coords.longitude);
              } catch (e46) {
                return true;
              }
            };
            vO55.Nf = function () {
              vO55.Dp = performance.now();
              vO55.Ep = vO55.Dp - vO55.Cp;
              vO55.dh.lh(vO55.Dp, vO55.Ep);
              vO55.og.lh(vO55.Dp, vO55.Ep);
              vO55.Cp = vO55.Dp;
            };
            vO55.Jf = function () {
              vO55.og.Jf();
            };
            return vO55;
          }();
        };
        vO37.Engine = function () {
          var vO56 = {
            dq: 30,
            fq: new Float32Array(100),
            gq: 0,
            hq: 0,
            iq: 0,
            jq: 0,
            kq: 0,
            lq: 0,
            Cn: 0,
            mq: null,
            nq: 300,
            Mp: function () {},
            Np: function () {},
            Qp: function () {},
            Lp: function () {},
            hh: new vO37.GameParams(),
            Kp: null,
            ch: null,
            Hi: {},
            Fh: {},
            Di: 12.5,
            eh: 40,
            oq: 1,
            pq: -1,
            qq: 1,
            rq: 1,
            sq: -1,
            tq: -1,
            uq: 1,
            vq: 1,
            wq: -1,
            Ih: 500,
            yh: 500
          };
          vO56.hh.zg = 500;
          vO56.ch = new vO37.Worm(vO56.hh);
          vO56.run = function () {
            vO56.ch.ti(f121().og.af.ng);
          };
          vO56.gh = function (p1065, p1066, p1067, p1068) {
            vO56.pq = p1065;
            vO56.qq = p1066;
            vO56.rq = p1067;
            vO56.sq = p1068;
            vO56.yq();
          };
          vO56.zq = function (p1069) {
            vO56.oq = p1069;
            vO56.yq();
          };
          vO56.yq = function () {
            vO56.tq = vO56.pq - vO56.oq;
            vO56.uq = vO56.qq + vO56.oq;
            vO56.vq = vO56.rq - vO56.oq;
            vO56.wq = vO56.sq + vO56.oq;
          };
          vO56.lh = function (p1070, p1071) {
            vO56.iq += p1071;
            vO56.hq -= vO56.gq * 0.2 * p1071;
            vO56.Kp.Rh();
            if (vO56.mq !== null && (vO56.Cn === 2 || vO56.Cn === 3)) {
              vO56.Aq(p1070, p1071);
              vO56.eh = 4 + vO56.Di * vO56.ch.$c;
            }
            var v892 = 1000 / Math.max(1, p1071);
            var vLN0138 = 0;
            for (var vLN0139 = 0; vLN0139 < vO56.fq.length - 1; vLN0139++) {
              vLN0138 += vO56.fq[vLN0139];
              vO56.fq[vLN0139] = vO56.fq[vLN0139 + 1];
            }
            vO56.fq[vO56.fq.length - 1] = v892;
            vO56.dq = (vLN0138 + v892) / vO56.fq.length;
          };
          vO56.Bq = function (p1072, p1073) {
            return p1072 > vO56.tq && p1072 < vO56.uq && p1073 > vO56.vq && p1073 < vO56.wq;
          };
          vO56.Aq = function (p1074, p1075) {
            var v893 = vO56.iq + vO56.hq;
            var v894 = (v893 - vO56.jq) / (vO56.kq - vO56.jq);
            vO56.ch.hj(p1074, p1075);
            vO56.ch.ij(p1074, p1075, v894, vO56.Bq);
            var vLN0140 = 0;
            for (var v895 in vO56.Fh) {
              var v896 = vO56.Fh[v895];
              v896.hj(p1074, p1075);
              v896.ij(p1074, p1075, v894, vO56.Bq);
              if (v896.xi && v896.$c > vLN0140) {
                vLN0140 = v896.$c;
              }
              if (!v896.wi && (!!(v896.dj < 0.005) || !v896.xi)) {
                v896.si();
                delete vO56.Fh[v896.Eh.ae];
              }
            }
            vO56.zq(vLN0140 * 3);
            for (var v897 in vO56.Hi) {
              var v898 = vO56.Hi[v897];
              v898.hj(p1074, p1075);
              v898.ij(p1074, p1075, vO56.Bq);
              if (v898.Ni && (v898.dj < 0.005 || !vO56.Bq(v898.Zi, v898.$i))) {
                v898.si();
                delete vO56.Hi[v898.Eh.ae];
              }
            }
          };
          vO56.ki = function (p1076, p1077) {
            if (vO56.Cn === 1) {
              vO56.Cn = 2;
              vO56.Mp();
            }
            var v899 = f121().Dp;
            vO56.lq = p1076;
            if (p1076 === 0) {
              vO56.jq = v899 - 95;
              vO56.kq = v899;
              vO56.iq = vO56.jq;
              vO56.hq = 0;
            } else {
              vO56.jq = vO56.kq;
              vO56.kq = vO56.kq + p1077;
            }
            var v900 = vO56.iq + vO56.hq;
            vO56.gq = (v900 - vO56.jq) / (vO56.kq - vO56.jq);
          };
          vO56.Oi = function () {
            if (vO56.Cn === 1 || vO56.Cn === 2) {
              vO56.Cn = 3;
              var v901 = vO56.mq;
              setTimeout(function () {
                if (vO56.Cn === 3) {
                  vO56.Cn = 0;
                }
                if (v901 != null && v901 === vO56.mq) {
                  vO56.mq.close();
                  vO56.mq = null;
                }
              }, 4500);
              vO56.Np();
            }
          };
          vO56.Wp = function () {
            return vO56.Cn !== 2 && (vO56.Cn = 1, vO56.Kp.Qh(), vO56.Hi = {}, vO56.Fh = {}, vO56.ch.Pm(), vO56.mq != null && (vO56.mq.close(), vO56.mq = null), true);
          };
          vO56.Cq = function () {
            vO56.mq = null;
            vO56.Kp.Qh();
            if (vO56.Cn !== 3) {
              vO56.Lp();
            }
            vO56.Cn = 0;
          };
          vO56.Zp = function (p1078, p1079) {
            vO56.Dq(p1078, function () {
              var v902 = Math.min(2048, p1079.length);
              var v903 = new ArrayBuffer(6 + v902 * 2);
              var v904 = new DataView(v903);
              var vLN0141 = 0;
              v904.setInt8(vLN0141, 129);
              vLN0141 += 1;
              v904.setInt16(vLN0141, 2800);
              vLN0141 += 2;
              v904.setInt8(vLN0141, 1);
              vLN0141 += 1;
              v904.setInt16(vLN0141, v902);
              vLN0141 += 2;
              for (var vLN0142 = 0; vLN0142 < v902; vLN0142++) {
                v904.setInt16(vLN0141, p1079.charCodeAt(vLN0142));
                vLN0141 += 2;
              }
              vO56.Eq(v903);
            });
          };
          vO56.$p = function (p1080, p1081, p1082) {
            vO56.Dq(p1080, function () {
              var v905 = Math.min(32, p1081.length);
              var v906 = new ArrayBuffer(7 + v905 * 2);
              var v907 = new DataView(v906);
              var vLN0143 = 0;
              v907.setInt8(vLN0143, 129);
              vLN0143 += 1;
              v907.setInt16(vLN0143, 2800);
              vLN0143 += 2;
              v907.setInt8(vLN0143, 0);
              vLN0143 += 1;
              v907.setInt16(vLN0143, p1082);
              vLN0143 += 2;
              v907.setInt8(vLN0143, v905);
              vLN0143++;
              for (var vLN0144 = 0; vLN0144 < v905; vLN0144++) {
                v907.setInt16(vLN0143, p1081.charCodeAt(vLN0144));
                vLN0143 += 2;
              }
              vO56.Eq(v906);
            });
          };
          vO56.Eq = function (p1083) {
            try {
              if (vO56.mq != null && vO56.mq.readyState === WebSocket.OPEN) {
                vO56.mq.send(p1083);
              }
            } catch (e47) {
              vO56.Cq();
            }
          };
          vO56.xq = function (p1084, p1085) {
            var v908 = p1085 ? 128 : 0;
            var v909 = vO39.N(p1084) / vO38.F * 128 & 127;
            var v910 = (v908 | v909) & 255;
            var v911 = new ArrayBuffer(1);
            new DataView(v911).setInt8(0, v910);
            vO56.Eq(v911);
            vO56.nq = v910;
          };
          vO56.Dq = function (p1086, p1087) {
            var v912 = vO56.mq = new WebSocket(p1086);
            v912.binaryType = "arraybuffer";
            v912.onopen = function () {
              if (vO56.mq === v912) {
                p1087();
              }
            };
            v912.onclose = function () {
              if (vO56.mq === v912) {
                vO56.Cq();
              }
            };
            v912.onerror = function (p1088) {
              if (vO56.mq === v912) {
                vO56.Cq();
              }
            };
            v912.onmessage = function (p1089) {
              if (vO56.mq === v912) {
                vO56.Kp.Ph(p1089.data);
              }
            };
          };
          return vO56;
        };
        var vF192 = f19({}, vO31);
        vO31 = f19({
          $C: vO37,
          $V: vO38,
          $F: vO39,
          POGL: vF4
        }, vF192);
        vO31.Jb = function () {
          (vO30.Lc.zb.ud.skinArrayDict || []).forEach(function (p1090) {
            if (p1090.associados && p1090.associados.includes(vO30.Ij.Rk.userId)) {
              p1090[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
            }
          });
        };
        var vF20 = function (p1091) {
          var vO57 = {};
          vO57.main = {
            yn: vO39.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
            Op: vO39.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
            Up: vO39.ga(),
            Ap: 4,
            Tp: false,
            xn: true
          };
          vO57.miniclip = {
            yn: vO39.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
            Op: vO39.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
            Up: vO39.ga(),
            Ap: 4,
            Tp: false,
            xn: false
          };
          var v913 = vO57[window.ENV];
          v913 ||= vO57.main;
          return v913;
        }(window.ENV);
        $(function () {
          FastClick.attach(document.body);
        });
        addEventListener("contextmenu", function (p1092) {
          p1092.preventDefault();
          p1092.stopPropagation();
          return false;
        });
        window.fbAsyncInit = function () {
          FB.init({
            appId: "861926850619051",
            cookie: true,
            xfbml: true,
            status: true,
            version: "v14.0"
          });
        };
        vO39.L("//apis.google.com/js/api:client.js", null, function () {
          gapi.load("auth2", function () {
            v269 = gapi.auth2.init({
              client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
            });
          });
        });
        vO39.L("//connect.facebook.net/" + vO39.a.j + "/sdk.js", {
          id: "facebook-jssdk",
          async: true,
          defer: true,
          crossorigin: "anonymous"
        });
        vO30 = vO39.zp();
        vO30.Ip();
        (function () {
          function f220() {
            requestAnimationFrame(f220);
            f121().Nf();
          }
          f220();
        })();
        (function () {
          function f221() {
            var v914 = v$116.width();
            var v915 = v$116.height();
            var v916 = v$117.outerWidth();
            var v917 = v$117.outerHeight();
            var v918 = v$118.outerHeight();
            var v919 = v$119.outerHeight();
            var v920 = Math.min(1, Math.min((v915 - v919 - v918) / v917, v914 / v916));
            var v921 = "translate(-50%, -50%) scale(" + v920 + ")";
            v$117.css({
              "-webkit-transform": v921,
              "-moz-transform": v921,
              "-ms-transform": v921,
              "-o-transform": v921,
              transform: v921
            });
            f121().Jf();
            window.scrollTo(0, 1);
          }
          var v$116 = $("body");
          var v$117 = $("#stretch-box");
          var v$118 = $("#markup-header");
          var v$119 = $("#markup-footer");
          f221();
          $(window).resize(f221);
        })();
      })();
    });
    setTimeout(function () {
      $(".mm-merchant-cont").append(`
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
    <a href="https://wormworld.io/install" target="_blank" style="margin-right: 10px;">
      <img src="${URL_CDN}/images/pub/B2_FIXO-06.png?v=00001" alt="Happy">
    </a>
  </div>
  `);
      $(".mm-merchant-cont").css("top", "-10px");
    }, 4500);
    $(".description-text").css("height", "300px");
    $("#stretch-box").append("\n<div class=\"news-box-wormworld\" style=\"display:none\">\n  <div class=\"news-content\">\n    <!-- Content will be dynamically loaded here -->\n  </div>\n  <div class=\"news-button\">\n    <input type=\"checkbox\" id=\"news-checkbox\" style=\"cursor: pointer;\">\n    <label for=\"news-checkbox\" style=\"font-size: 12px; color: #555; cursor: pointer;\">\n      Do not show again\n    </label>\n    <button id=\"close-news-button\" class=\"close-button\">\n      Close\n    </button>\n  </div>\n</div>\n");
    var vLS001f3f = "#001f3f";
    var v_0x50a0ac = function f222(p1093) {
      var v922 = `https://xo2xo2.github.io/1/image/background.jpg`;
      document.body.style.backgroundColor = vLS001f3f;
      document.body.style.backgroundImage = `url('${p1093 || v922}')`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      var v923 = document.getElementById("background-canvas");
      var v924 = document.getElementById("game-wrap");
      v923.style.backgroundColor = vLS001f3f;
      v923.style.opacity = "0.65";
      v924.style.backgroundColor = "transparent";
    };
    if (v201) {
      v201 = JSON.parse(v201);
      if (v201.background) {
        v_0x50a0ac(v201.background);
      } else {
        v_0x50a0ac();
      }
    } else {
      v_0x50a0ac();
    }
    if (v202) {
      v202 = JSON.parse(v202);
      if (v202 && v202.audio) {
        vO24.headshot = new vP4.Howl({
          src: [v202.audio],
          html5: true,
          autoplay: false,
          loop: false
        });
      }
    }
    window.testAudioCustom = function () {
      if (v202 && v202.audio) {
        console.log("Playing custom audio?", v202.audio);
        vO24.headshot.play();
      }
    };
    var vF32 = f3(function f223(p1094, p1095, p1096, p1097, p1098) {
      f(this, f223);
      this.sid = null;
      this.refer = p1094;
      this.wid = p1094;
      this.nickname = p1095;
      this.score = p1097;
      this.myRoom = p1096;
      this.myLocation = {
        x: 0,
        y: 0
      };
      this.teamRoom = p1098;
      this.wuid = bbs.wuid;
    });
    w2c2020.containerHsRec.alpha = 0;
    w2c2020.containerHstop.alpha = 0;
    var vA20 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
    function f224(p1099, p1100) {
      if (!p1100) {
        return;
      }
      p1100.playerMap.position.x = p1099.position.x;
      p1100.playerMap.position.y = p1099.position.y;
    }
    function f225(p1101, p1102, p1103) {
      var v925 = Array.from(p1101.keys()).indexOf(p1102.sid);
      if (v925 < 0) {
        v925 = 0;
      }
      var v926 = vA20[v925 % vA20.length];
      var v927 = `${v925 + 1} - ${p1102.nickname.substring(0, 15)}`;
      var v928 = new PIXI.Text(v927, {
        fontFamily: "Arial",
        fontSize: 9.5,
        fill: v926,
        align: "left"
      });
      v928.position.y = v925 * 13;
      w2c2020.friends.addChild(v928);
      return v928;
    }
    function f226(p1104, p1105) {
      var v929 = Array.from(p1104.keys()).indexOf(p1105.sid);
      if (v929 < 0) {
        v929 = 0;
      }
      console.log("Index", v929);
      var v930 = vA20[v929 % vA20.length];
      var v931 = new PIXI.Graphics();
      v931.id = p1105.sid;
      v931.zIndex = 3;
      v931.alpha = 1;
      v931.beginFill(v930, 1);
      v931.drawCircle(0, 0, 3.5);
      v931.endFill();
      v931.position.x = p1105.position.x;
      v931.position.y = p1105.position.y;
      w2c2020.conteinerTeam.addChild(v931);
      return v931;
    }
    var v932 = new Map();
    var v933 = null;
    var v934 = null;
    var v935 = false;
    var vLN23 = 2;
    var vLN400 = 400;
    var v_0x15a4d6 = function f227(p1106) {
      return new Promise(function (p1107) {
        return setTimeout(p1107, p1106);
      });
    };
    var v_0x4627c7 = function f228(p1108) {
      var v936 = (p1108?.message || "").toLowerCase();
      return v936.includes("seat reservation expired") || v936.includes("timed out") || v936.includes("timeout") || v936.includes("network");
    };
    var vF21 = function () {
      var vF366 = f36(f23().m(function f229(p1109, p1110) {
        var v937;
        var v938;
        var v939;
        var v940;
        return f23().w(function (p1111) {
          while (1) {
            switch (p1111.p = p1111.n) {
              case 0:
                v937 = null;
                v938 = 0;
              case 1:
                if (!(v938 <= vLN23)) {
                  p1111.n = 7;
                  break;
                }
                p1111.p = 2;
                v933 = new vP42.Client(p1109);
                p1111.n = 3;
                return v933.joinOrCreate("switch", p1110);
              case 3:
                return p1111.a(2, p1111.v);
              case 4:
                p1111.p = 4;
                v940 = p1111.v;
                v937 = v940;
                v939 = v938 < vLN23 && v_0x4627c7(v940);
                if (v939) {
                  p1111.n = 5;
                  break;
                }
                throw v940;
              case 5:
                console.warn(`Falha ao conectar (${v938 + 1}/${vLN23 + 1}): ${v940?.message || v940}`);
                p1111.n = 6;
                return v_0x15a4d6(vLN400 * (v938 + 1));
              case 6:
                v938++;
                p1111.n = 1;
                break;
              case 7:
                throw v937 || new Error("Nao foi possivel conectar.");
              case 8:
                return p1111.a(2);
            }
          }
        }, f229, null, [[2, 4]]);
      }));
      return function f230(p1112, p1113) {
        return vF366.apply(this, arguments);
      };
    }();
    var v_0x34c1e4 = function f231() {
      v932.forEach(function (p1114) {
        w2c2020.conteinerTeam.removeChild(p1114.playerMap);
        w2c2020.friends.removeChild(p1114.playerText);
      });
      v932.clear();
      w2c2020.friends.alpha = 0;
    };
    var v_0x23d853 = function f232() {
      _wwcio.socket = false;
      _wwcio.connecting = false;
      v935 = false;
      v934 = null;
      v933 = null;
      v_0x34c1e4();
    };
    _wwcio.connect = function () {
      var vF367 = f36(f23().m(function f233(p1115) {
        var v941;
        var v942;
        var v943;
        var v944;
        var v945;
        return f23().w(function (p1116) {
          while (1) {
            switch (p1116.p = p1116.n) {
              case 0:
                console.log(vO30.Ij.Rk.tk, p1115);
                if (!v934 && !v935 && !_wwcio.connecting) {
                  p1116.n = 1;
                  break;
                }
                console.warn("Conexao em andamento/ativa. Ignorando nova tentativa.");
                return p1116.a(2);
              case 1:
                v935 = true;
                _wwcio.connecting = true;
                v941 = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
                if (!v941) {
                  v941 = [];
                }
                if (!v941 || !vA3.includes(v941[2])) {
                  p1116.n = 6;
                  break;
                }
                _wwcio.leaderboardUpdated([], []);
                v942 = vLN05 ? "local" : v941[2];
                v943 = _wwc._anApp.dh.hh.xg + (v941[2] || "L") + (v941[4] || "0");
                _wwcio.player = new vF32(p1115 ? p1115.ae : userId, p1115 ? p1115.ma : "AN", v943, 0, _wwcio.player.teamRoom);
                p1116.p = 2;
                p1116.n = 3;
                return vF21(vO21[v942], {
                  tk: vO30.Ij.Rk.tk || "",
                  roomName: v943,
                  player: _wwcio.player
                });
              case 3:
                v934 = p1116.v;
                _wwcio.socket = true;
                _wwcio.player.sid = v934.sessionId;
                v944 = function f234() {
                  if (!_wwcio.player.teamRoom || !v934) {
                    w2c2020.friends.alpha = 0;
                    return;
                  }
                  v934.send("team:join", {
                    teamRoom: _wwcio.player.teamRoom
                  });
                  var vF225 = f225(v932, _wwcio.player, true);
                  v932.set(_wwcio.player.sid, {
                    wid: _wwcio.player.wid,
                    playerMap: null,
                    playerText: vF225
                  });
                  w2c2020.friends.alpha = 1;
                  console.log("Conectado com Team!", _wwcio.player.teamRoom);
                };
                v934.onMessage("ready", function (p1117) {
                  _wwcio.player.sid = p1117?.sid || v934.sessionId;
                  _wwcio.leaderboardUpdated(p1117?.top10 || [], p1117?.top3 || []);
                  v944();
                });
                v934.onMessage("leaderboard", function (p1118) {
                  if (p1118 !== null && p1118 !== undefined && p1118.top10) {
                    _wwcio.leaderboardUpdated(p1118.top10, p1118.top3 || []);
                  }
                });
                v934.onMessage("team:location", function (p1119) {
                  if (!p1119) {
                    return;
                  }
                  if (_wwcio.player && !_wwcio.player.teamRoom) {
                    v_0x34c1e4();
                    return;
                  }
                  var v946 = v932.get(p1119.sid);
                  if (!v946) {
                    v932.set(p1119.sid, {
                      wid: p1119.wid
                    });
                    var vF2252 = f225(v932, p1119);
                    var vF226 = f226(v932, p1119);
                    v946 = v932.get(p1119.sid);
                    v946.playerMap = vF226;
                    v946.playerText = vF2252;
                  }
                  f224(p1119, v946);
                });
                v934.onMessage("team:leave", function (p1120) {
                  console.log("Saiu do time", p1120);
                  var v947 = v932.get(p1120.sid);
                  if (v947) {
                    w2c2020.conteinerTeam.removeChild(v947.playerMap);
                    w2c2020.friends.removeChild(v947.playerText);
                    v932.delete(p1120.sid);
                  }
                });
                v934.onMessage("error", function (p1121) {
                  console.log(p1121?.message || "Erro inesperado na conexao.");
                  v_0x23d853();
                });
                v934.onLeave(function () {
                  console.warn("Desconectado.");
                  v_0x23d853();
                });
                v934.onError(function (p1122, p1123) {
                  console.error("Erro de conexao:", p1122, p1123);
                  v_0x23d853();
                });
                v935 = false;
                _wwcio.connecting = false;
                p1116.n = 5;
                break;
              case 4:
                p1116.p = 4;
                v945 = p1116.v;
                w2c2020.containerHsRec.alpha = 0;
                w2c2020.containerHstop.alpha = 0;
                console.error("Erro: Servidor nao disponivel.", v945?.message || v945);
                v_0x23d853();
              case 5:
                p1116.n = 7;
                break;
              case 6:
                w2c2020.containerHsRec.alpha = 0;
                w2c2020.containerHstop.alpha = 0;
                v935 = false;
                _wwcio.connecting = false;
                console.error("NO MATCH!");
              case 7:
                return p1116.a(2);
            }
          }
        }, f233, null, [[2, 4]]);
      }));
      return function (p1124) {
        return vF367.apply(this, arguments);
      };
    }();
    _wwcio.sendLocation = function (p1125) {
      if (!v934) {
        return;
      }
      v934.send("team:location", p1125);
    };
    _wwcio.update = function (p1126, p1127) {
      if (!v934) {
        return;
      }
      if (p1126 >= 6) {
        p1126 = 1;
      }
      var v948 = !!(p1126 & 2);
      var vLSUpdate = "update";
      if (v948 && p1127) {
        vLSUpdate = "headshot";
      }
      if (typeof p1126 === "string") {
        vLSUpdate = p1126;
      }
      v934.send("action", {
        action: vLSUpdate,
        player: _wwcio.player
      });
    };
    _wwcio.close = function () {
      v935 = false;
      _wwcio.connecting = false;
      if (!v934) {
        return;
      }
      v934.send("team:leave");
      setTimeout(function () {
        v934.leave();
        v_0x23d853();
      }, 500);
    };
  }, (p1128, p1129, p1130) => {
    var v949;
    var v950;
    (function () {
      'use strict';

      function f235() {
        this.init();
      }
      f235.prototype = {
        init: function () {
          var v951 = this || v981;
          v951._counter = 1000;
          v951._html5AudioPool = [];
          v951.html5PoolSize = 10;
          v951._codecs = {};
          v951._howls = [];
          v951._muted = false;
          v951._volume = 1;
          v951._canPlayEvent = "canplaythrough";
          v951._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
          v951.masterGain = null;
          v951.noAudio = false;
          v951.usingWebAudio = true;
          v951.autoSuspend = true;
          v951.ctx = null;
          v951.autoUnlock = true;
          v951._setup();
          return v951;
        },
        volume: function (p1131) {
          var v952 = this || v981;
          p1131 = parseFloat(p1131);
          if (!v952.ctx) {
            f252();
          }
          if (typeof p1131 !== "undefined" && p1131 >= 0 && p1131 <= 1) {
            v952._volume = p1131;
            if (v952._muted) {
              return v952;
            }
            if (v952.usingWebAudio) {
              v952.masterGain.gain.setValueAtTime(p1131, v981.ctx.currentTime);
            }
            for (var vLN0145 = 0; vLN0145 < v952._howls.length; vLN0145++) {
              if (!v952._howls[vLN0145]._webAudio) {
                var v953 = v952._howls[vLN0145]._getSoundIds();
                for (var vLN0146 = 0; vLN0146 < v953.length; vLN0146++) {
                  var v954 = v952._howls[vLN0145]._soundById(v953[vLN0146]);
                  if (v954 && v954._node) {
                    v954._node.volume = v954._volume * p1131;
                  }
                }
              }
            }
            return v952;
          }
          return v952._volume;
        },
        mute: function (p1132) {
          var v955 = this || v981;
          if (!v955.ctx) {
            f252();
          }
          v955._muted = p1132;
          if (v955.usingWebAudio) {
            v955.masterGain.gain.setValueAtTime(p1132 ? 0 : v955._volume, v981.ctx.currentTime);
          }
          for (var vLN0147 = 0; vLN0147 < v955._howls.length; vLN0147++) {
            if (!v955._howls[vLN0147]._webAudio) {
              var v956 = v955._howls[vLN0147]._getSoundIds();
              for (var vLN0148 = 0; vLN0148 < v956.length; vLN0148++) {
                var v957 = v955._howls[vLN0147]._soundById(v956[vLN0148]);
                if (v957 && v957._node) {
                  v957._node.muted = p1132 ? true : v957._muted;
                }
              }
            }
          }
          return v955;
        },
        stop: function () {
          var v958 = this || v981;
          for (var vLN0149 = 0; vLN0149 < v958._howls.length; vLN0149++) {
            v958._howls[vLN0149].stop();
          }
          return v958;
        },
        unload: function () {
          var v959 = this || v981;
          for (var v960 = v959._howls.length - 1; v960 >= 0; v960--) {
            v959._howls[v960].unload();
          }
          if (v959.usingWebAudio && v959.ctx && typeof v959.ctx.close !== "undefined") {
            v959.ctx.close();
            v959.ctx = null;
            f252();
          }
          return v959;
        },
        codecs: function (p1133) {
          return (this || v981)._codecs[p1133.replace(/^x-/, "")];
        },
        _setup: function () {
          var v961 = this || v981;
          v961.state = v961.ctx ? v961.ctx.state || "suspended" : "suspended";
          v961._autoSuspend();
          if (!v961.usingWebAudio) {
            if (typeof Audio !== "undefined") {
              try {
                var v963 = new Audio();
                if (typeof v963.oncanplaythrough === "undefined") {
                  v961._canPlayEvent = "canplay";
                }
              } catch (e48) {
                v961.noAudio = true;
              }
            } else {
              v961.noAudio = true;
            }
          }
          try {
            var v963 = new Audio();
            if (v963.muted) {
              v961.noAudio = true;
            }
          } catch (e49) {}
          if (!v961.noAudio) {
            v961._setupCodecs();
          }
          return v961;
        },
        _setupCodecs: function () {
          var v964 = this || v981;
          var v965 = null;
          try {
            v965 = typeof Audio !== "undefined" ? new Audio() : null;
          } catch (e50) {
            return v964;
          }
          if (!v965 || typeof v965.canPlayType !== "function") {
            return v964;
          }
          var v966 = v965.canPlayType("audio/mpeg;").replace(/^no$/, "");
          var v967 = v964._navigator ? v964._navigator.userAgent : "";
          var v968 = v967.match(/OPR\/(\d+)/g);
          var v969 = v968 && parseInt(v968[0].split("/")[1], 10) < 33;
          var v970 = v967.indexOf("Safari") !== -1 && v967.indexOf("Chrome") === -1;
          var v971 = v967.match(/Version\/(.*?) /);
          var v972 = v970 && v971 && parseInt(v971[1], 10) < 15;
          v964._codecs = {
            mp3: !v969 && (!!v966 || !!v965.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!v966,
            opus: !!v965.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
            ogg: !!v965.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
            oga: !!v965.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
            wav: !!(v965.canPlayType("audio/wav; codecs=\"1\"") || v965.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!v965.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!v965.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(v965.canPlayType("audio/x-m4a;") || v965.canPlayType("audio/m4a;") || v965.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(v965.canPlayType("audio/x-m4b;") || v965.canPlayType("audio/m4b;") || v965.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(v965.canPlayType("audio/x-mp4;") || v965.canPlayType("audio/mp4;") || v965.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !v972 && !!v965.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
            webm: !v972 && !!v965.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
            dolby: !!v965.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
            flac: !!(v965.canPlayType("audio/x-flac;") || v965.canPlayType("audio/flac;")).replace(/^no$/, "")
          };
          return v964;
        },
        _unlockAudio: function () {
          var v973 = this || v981;
          if (v973._audioUnlocked || !v973.ctx) {
            return;
          }
          v973._audioUnlocked = false;
          v973.autoUnlock = false;
          if (!v973._mobileUnloaded && v973.ctx.sampleRate !== 44100) {
            v973._mobileUnloaded = true;
            v973.unload();
          }
          v973._scratchBuffer = v973.ctx.createBuffer(1, 1, 22050);
          function f236(p1134) {
            while (v973._html5AudioPool.length < v973.html5PoolSize) {
              try {
                var v974 = new Audio();
                v974._unlocked = true;
                v973._releaseHtml5Audio(v974);
              } catch (e51) {
                v973.noAudio = true;
                break;
              }
            }
            for (var vLN0150 = 0; vLN0150 < v973._howls.length; vLN0150++) {
              if (!v973._howls[vLN0150]._webAudio) {
                var v975 = v973._howls[vLN0150]._getSoundIds();
                for (var vLN0151 = 0; vLN0151 < v975.length; vLN0151++) {
                  var v976 = v973._howls[vLN0150]._soundById(v975[vLN0151]);
                  if (v976 && v976._node && !v976._node._unlocked) {
                    v976._node._unlocked = true;
                    v976._node.load();
                  }
                }
              }
            }
            v973._autoResume();
            var v977 = v973.ctx.createBufferSource();
            v977.buffer = v973._scratchBuffer;
            v977.connect(v973.ctx.destination);
            if (typeof v977.start === "undefined") {
              v977.noteOn(0);
            } else {
              v977.start(0);
            }
            if (typeof v973.ctx.resume === "function") {
              v973.ctx.resume();
            }
            v977.onended = function () {
              v977.disconnect(0);
              v973._audioUnlocked = true;
              document.removeEventListener("touchstart", f236, true);
              document.removeEventListener("touchend", f236, true);
              document.removeEventListener("click", f236, true);
              document.removeEventListener("keydown", f236, true);
              for (var vLN0152 = 0; vLN0152 < v973._howls.length; vLN0152++) {
                v973._howls[vLN0152]._emit("unlock");
              }
            };
          }
          document.addEventListener("touchstart", f236, true);
          document.addEventListener("touchend", f236, true);
          document.addEventListener("click", f236, true);
          document.addEventListener("keydown", f236, true);
          return v973;
        },
        _obtainHtml5Audio: function () {
          var v978 = this || v981;
          if (v978._html5AudioPool.length) {
            return v978._html5AudioPool.pop();
          }
          var v979 = new Audio().play();
          if (v979 && typeof Promise !== "undefined" && (v979 instanceof Promise || typeof v979.then === "function")) {
            v979.catch(function () {
              console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            });
          }
          return new Audio();
        },
        _releaseHtml5Audio: function (p1135) {
          var v980 = this || v981;
          if (p1135._unlocked) {
            v980._html5AudioPool.push(p1135);
          }
          return v980;
        },
        _autoSuspend: function () {
          var vThis84 = this;
          if (!vThis84.autoSuspend || !vThis84.ctx || typeof vThis84.ctx.suspend === "undefined" || !v981.usingWebAudio) {
            return;
          }
          for (var vLN0153 = 0; vLN0153 < vThis84._howls.length; vLN0153++) {
            if (vThis84._howls[vLN0153]._webAudio) {
              for (var vLN0154 = 0; vLN0154 < vThis84._howls[vLN0153]._sounds.length; vLN0154++) {
                if (!vThis84._howls[vLN0153]._sounds[vLN0154]._paused) {
                  return vThis84;
                }
              }
            }
          }
          if (vThis84._suspendTimer) {
            clearTimeout(vThis84._suspendTimer);
          }
          vThis84._suspendTimer = setTimeout(function () {
            if (!vThis84.autoSuspend) {
              return;
            }
            vThis84._suspendTimer = null;
            vThis84.state = "suspending";
            function f237() {
              vThis84.state = "suspended";
              if (vThis84._resumeAfterSuspend) {
                delete vThis84._resumeAfterSuspend;
                vThis84._autoResume();
              }
            }
            vThis84.ctx.suspend().then(f237, f237);
          }, 30000);
          return vThis84;
        },
        _autoResume: function () {
          var vThis85 = this;
          if (!vThis85.ctx || typeof vThis85.ctx.resume === "undefined" || !v981.usingWebAudio) {
            return;
          }
          if (vThis85.state === "running" && vThis85.ctx.state !== "interrupted" && vThis85._suspendTimer) {
            clearTimeout(vThis85._suspendTimer);
            vThis85._suspendTimer = null;
          } else if (vThis85.state === "suspended" || vThis85.state === "running" && vThis85.ctx.state === "interrupted") {
            vThis85.ctx.resume().then(function () {
              vThis85.state = "running";
              for (var vLN0155 = 0; vLN0155 < vThis85._howls.length; vLN0155++) {
                vThis85._howls[vLN0155]._emit("resume");
              }
            });
            if (vThis85._suspendTimer) {
              clearTimeout(vThis85._suspendTimer);
              vThis85._suspendTimer = null;
            }
          } else if (vThis85.state === "suspending") {
            vThis85._resumeAfterSuspend = true;
          }
          return vThis85;
        }
      };
      var v981 = new f235();
      function f238(p1136) {
        var vThis86 = this;
        if (!p1136.src || p1136.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        vThis86.init(p1136);
      }
      f238.prototype = {
        init: function (p1137) {
          var vThis87 = this;
          if (!v981.ctx) {
            f252();
          }
          vThis87._autoplay = p1137.autoplay || false;
          vThis87._format = typeof p1137.format !== "string" ? p1137.format : [p1137.format];
          vThis87._html5 = p1137.html5 || false;
          vThis87._muted = p1137.mute || false;
          vThis87._loop = p1137.loop || false;
          vThis87._pool = p1137.pool || 5;
          vThis87._preload = typeof p1137.preload === "boolean" || p1137.preload === "metadata" ? p1137.preload : true;
          vThis87._rate = p1137.rate || 1;
          vThis87._sprite = p1137.sprite || {};
          vThis87._src = typeof p1137.src !== "string" ? p1137.src : [p1137.src];
          vThis87._volume = p1137.volume !== undefined ? p1137.volume : 1;
          vThis87._xhr = {
            method: p1137.xhr && p1137.xhr.method ? p1137.xhr.method : "GET",
            headers: p1137.xhr && p1137.xhr.headers ? p1137.xhr.headers : null,
            withCredentials: p1137.xhr && p1137.xhr.withCredentials ? p1137.xhr.withCredentials : false
          };
          vThis87._duration = 0;
          vThis87._state = "unloaded";
          vThis87._sounds = [];
          vThis87._endTimers = {};
          vThis87._queue = [];
          vThis87._playLock = false;
          vThis87._onend = p1137.onend ? [{
            fn: p1137.onend
          }] : [];
          vThis87._onfade = p1137.onfade ? [{
            fn: p1137.onfade
          }] : [];
          vThis87._onload = p1137.onload ? [{
            fn: p1137.onload
          }] : [];
          vThis87._onloaderror = p1137.onloaderror ? [{
            fn: p1137.onloaderror
          }] : [];
          vThis87._onplayerror = p1137.onplayerror ? [{
            fn: p1137.onplayerror
          }] : [];
          vThis87._onpause = p1137.onpause ? [{
            fn: p1137.onpause
          }] : [];
          vThis87._onplay = p1137.onplay ? [{
            fn: p1137.onplay
          }] : [];
          vThis87._onstop = p1137.onstop ? [{
            fn: p1137.onstop
          }] : [];
          vThis87._onmute = p1137.onmute ? [{
            fn: p1137.onmute
          }] : [];
          vThis87._onvolume = p1137.onvolume ? [{
            fn: p1137.onvolume
          }] : [];
          vThis87._onrate = p1137.onrate ? [{
            fn: p1137.onrate
          }] : [];
          vThis87._onseek = p1137.onseek ? [{
            fn: p1137.onseek
          }] : [];
          vThis87._onunlock = p1137.onunlock ? [{
            fn: p1137.onunlock
          }] : [];
          vThis87._onresume = [];
          vThis87._webAudio = v981.usingWebAudio && !vThis87._html5;
          if (typeof v981.ctx !== "undefined" && v981.ctx && v981.autoUnlock) {
            v981._unlockAudio();
          }
          v981._howls.push(vThis87);
          if (vThis87._autoplay) {
            vThis87._queue.push({
              event: "play",
              action: function () {
                vThis87.play();
              }
            });
          }
          if (vThis87._preload && vThis87._preload !== "none") {
            vThis87.load();
          }
          return vThis87;
        },
        load: function () {
          var vThis88 = this;
          var v982 = null;
          if (v981.noAudio) {
            vThis88._emit("loaderror", null, "No audio support.");
            return;
          }
          if (typeof vThis88._src === "string") {
            vThis88._src = [vThis88._src];
          }
          for (var vLN0156 = 0; vLN0156 < vThis88._src.length; vLN0156++) {
            var v983;
            var v984;
            if (vThis88._format && vThis88._format[vLN0156]) {
              v983 = vThis88._format[vLN0156];
            } else {
              v984 = vThis88._src[vLN0156];
              if (typeof v984 !== "string") {
                vThis88._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              v983 = /^data:audio\/([^;,]+);/i.exec(v984);
              if (!v983) {
                v983 = /\.([^.]+)$/.exec(v984.split("?", 1)[0]);
              }
              v983 &&= v983[1].toLowerCase();
            }
            if (!v983) {
              console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
            }
            if (v983 && v981.codecs(v983)) {
              v982 = vThis88._src[vLN0156];
              break;
            }
          }
          if (!v982) {
            vThis88._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          vThis88._src = v982;
          vThis88._state = "loading";
          if (window.location.protocol === "https:" && v982.slice(0, 5) === "http:") {
            vThis88._html5 = true;
            vThis88._webAudio = false;
          }
          new f245(vThis88);
          if (vThis88._webAudio) {
            f246(vThis88);
          }
          return vThis88;
        },
        play: function (p1138, p1139) {
          var vThis89 = this;
          var v985 = null;
          if (typeof p1138 === "number") {
            v985 = p1138;
            p1138 = null;
          } else if (typeof p1138 === "string" && vThis89._state === "loaded" && !vThis89._sprite[p1138]) {
            return null;
          } else if (typeof p1138 === "undefined") {
            p1138 = "__default";
            if (!vThis89._playLock) {
              var vLN0157 = 0;
              for (var vLN0158 = 0; vLN0158 < vThis89._sounds.length; vLN0158++) {
                if (vThis89._sounds[vLN0158]._paused && !vThis89._sounds[vLN0158]._ended) {
                  vLN0157++;
                  v985 = vThis89._sounds[vLN0158]._id;
                }
              }
              if (vLN0157 === 1) {
                p1138 = null;
              } else {
                v985 = null;
              }
            }
          }
          var v986 = v985 ? vThis89._soundById(v985) : vThis89._inactiveSound();
          if (!v986) {
            return null;
          }
          if (v985 && !p1138) {
            p1138 = v986._sprite || "__default";
          }
          if (vThis89._state !== "loaded") {
            v986._sprite = p1138;
            v986._ended = false;
            var v987 = v986._id;
            vThis89._queue.push({
              event: "play",
              action: function () {
                vThis89.play(v987);
              }
            });
            return v987;
          }
          if (v985 && !v986._paused) {
            if (!p1139) {
              vThis89._loadQueue("play");
            }
            return v986._id;
          }
          if (vThis89._webAudio) {
            v981._autoResume();
          }
          var v988 = Math.max(0, v986._seek > 0 ? v986._seek : vThis89._sprite[p1138][0] / 1000);
          var v989 = Math.max(0, (vThis89._sprite[p1138][0] + vThis89._sprite[p1138][1]) / 1000 - v988);
          var v990 = v989 * 1000 / Math.abs(v986._rate);
          var v991 = vThis89._sprite[p1138][0] / 1000;
          var v992 = (vThis89._sprite[p1138][0] + vThis89._sprite[p1138][1]) / 1000;
          v986._sprite = p1138;
          v986._ended = false;
          function f239() {
            v986._paused = false;
            v986._seek = v988;
            v986._start = v991;
            v986._stop = v992;
            v986._loop = !!v986._loop || !!vThis89._sprite[p1138][2];
          }
          if (v988 >= v992) {
            vThis89._ended(v986);
            return;
          }
          var v993 = v986._node;
          if (vThis89._webAudio) {
            function f240() {
              vThis89._playLock = false;
              f239();
              vThis89._refreshBuffer(v986);
              var v994 = v986._muted || vThis89._muted ? 0 : v986._volume;
              v993.gain.setValueAtTime(v994, v981.ctx.currentTime);
              v986._playStart = v981.ctx.currentTime;
              if (typeof v993.bufferSource.start === "undefined") {
                if (v986._loop) {
                  v993.bufferSource.noteGrainOn(0, v988, 86400);
                } else {
                  v993.bufferSource.noteGrainOn(0, v988, v989);
                }
              } else if (v986._loop) {
                v993.bufferSource.start(0, v988, 86400);
              } else {
                v993.bufferSource.start(0, v988, v989);
              }
              if (v990 !== Infinity) {
                vThis89._endTimers[v986._id] = setTimeout(vThis89._ended.bind(vThis89, v986), v990);
              }
              if (!p1139) {
                setTimeout(function () {
                  vThis89._emit("play", v986._id);
                  vThis89._loadQueue();
                }, 0);
              }
            }
            if (v981.state === "running" && v981.ctx.state !== "interrupted") {
              f240();
            } else {
              vThis89._playLock = true;
              vThis89.once("resume", f240);
              vThis89._clearTimer(v986._id);
            }
          } else {
            function f241() {
              v993.currentTime = v988;
              v993.muted = v986._muted || vThis89._muted || v981._muted || v993.muted;
              v993.volume = v986._volume * v981.volume();
              v993.playbackRate = v986._rate;
              try {
                var v995 = v993.play();
                if (v995 && typeof Promise !== "undefined" && (v995 instanceof Promise || typeof v995.then === "function")) {
                  vThis89._playLock = true;
                  f239();
                  v995.then(function () {
                    vThis89._playLock = false;
                    v993._unlocked = true;
                    if (!p1139) {
                      vThis89._emit("play", v986._id);
                    } else {
                      vThis89._loadQueue();
                    }
                  }).catch(function () {
                    vThis89._playLock = false;
                    vThis89._emit("playerror", v986._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    v986._ended = true;
                    v986._paused = true;
                  });
                } else if (!p1139) {
                  vThis89._playLock = false;
                  f239();
                  vThis89._emit("play", v986._id);
                }
                v993.playbackRate = v986._rate;
                if (v993.paused) {
                  vThis89._emit("playerror", v986._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                if (p1138 !== "__default" || v986._loop) {
                  vThis89._endTimers[v986._id] = setTimeout(vThis89._ended.bind(vThis89, v986), v990);
                } else {
                  vThis89._endTimers[v986._id] = function () {
                    vThis89._ended(v986);
                    v993.removeEventListener("ended", vThis89._endTimers[v986._id], false);
                  };
                  v993.addEventListener("ended", vThis89._endTimers[v986._id], false);
                }
              } catch (e52) {
                vThis89._emit("playerror", v986._id, e52);
              }
            }
            if (v993.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
              v993.src = vThis89._src;
              v993.load();
            }
            var v996 = window && window.ejecta || !v993.readyState && v981._navigator.isCocoonJS;
            if (v993.readyState >= 3 || v996) {
              f241();
            } else {
              vThis89._playLock = true;
              vThis89._state = "loading";
              function f242() {
                vThis89._state = "loaded";
                f241();
                v993.removeEventListener(v981._canPlayEvent, f242, false);
              }
              v993.addEventListener(v981._canPlayEvent, f242, false);
              vThis89._clearTimer(v986._id);
            }
          }
          return v986._id;
        },
        pause: function (p1140) {
          var vThis90 = this;
          if (vThis90._state !== "loaded" || vThis90._playLock) {
            vThis90._queue.push({
              event: "pause",
              action: function () {
                vThis90.pause(p1140);
              }
            });
            return vThis90;
          }
          var v997 = vThis90._getSoundIds(p1140);
          for (var vLN0159 = 0; vLN0159 < v997.length; vLN0159++) {
            vThis90._clearTimer(v997[vLN0159]);
            var v998 = vThis90._soundById(v997[vLN0159]);
            if (v998 && !v998._paused) {
              v998._seek = vThis90.seek(v997[vLN0159]);
              v998._rateSeek = 0;
              v998._paused = true;
              vThis90._stopFade(v997[vLN0159]);
              if (v998._node) {
                if (vThis90._webAudio) {
                  if (!v998._node.bufferSource) {
                    continue;
                  }
                  if (typeof v998._node.bufferSource.stop === "undefined") {
                    v998._node.bufferSource.noteOff(0);
                  } else {
                    v998._node.bufferSource.stop(0);
                  }
                  vThis90._cleanBuffer(v998._node);
                } else if (!isNaN(v998._node.duration) || v998._node.duration === Infinity) {
                  v998._node.pause();
                }
              }
            }
            if (!arguments[1]) {
              vThis90._emit("pause", v998 ? v998._id : null);
            }
          }
          return vThis90;
        },
        stop: function (p1141, p1142) {
          var vThis91 = this;
          if (vThis91._state !== "loaded" || vThis91._playLock) {
            vThis91._queue.push({
              event: "stop",
              action: function () {
                vThis91.stop(p1141);
              }
            });
            return vThis91;
          }
          var v999 = vThis91._getSoundIds(p1141);
          for (var vLN0160 = 0; vLN0160 < v999.length; vLN0160++) {
            vThis91._clearTimer(v999[vLN0160]);
            var v1000 = vThis91._soundById(v999[vLN0160]);
            if (v1000) {
              v1000._seek = v1000._start || 0;
              v1000._rateSeek = 0;
              v1000._paused = true;
              v1000._ended = true;
              vThis91._stopFade(v999[vLN0160]);
              if (v1000._node) {
                if (vThis91._webAudio) {
                  if (v1000._node.bufferSource) {
                    if (typeof v1000._node.bufferSource.stop === "undefined") {
                      v1000._node.bufferSource.noteOff(0);
                    } else {
                      v1000._node.bufferSource.stop(0);
                    }
                    vThis91._cleanBuffer(v1000._node);
                  }
                } else if (!isNaN(v1000._node.duration) || v1000._node.duration === Infinity) {
                  v1000._node.currentTime = v1000._start || 0;
                  v1000._node.pause();
                  if (v1000._node.duration === Infinity) {
                    vThis91._clearSound(v1000._node);
                  }
                }
              }
              if (!p1142) {
                vThis91._emit("stop", v1000._id);
              }
            }
          }
          return vThis91;
        },
        mute: function (p1143, p1144) {
          var vThis92 = this;
          if (vThis92._state !== "loaded" || vThis92._playLock) {
            vThis92._queue.push({
              event: "mute",
              action: function () {
                vThis92.mute(p1143, p1144);
              }
            });
            return vThis92;
          }
          if (typeof p1144 === "undefined") {
            if (typeof p1143 === "boolean") {
              vThis92._muted = p1143;
            } else {
              return vThis92._muted;
            }
          }
          var v1001 = vThis92._getSoundIds(p1144);
          for (var vLN0161 = 0; vLN0161 < v1001.length; vLN0161++) {
            var v1002 = vThis92._soundById(v1001[vLN0161]);
            if (v1002) {
              v1002._muted = p1143;
              if (v1002._interval) {
                vThis92._stopFade(v1002._id);
              }
              if (vThis92._webAudio && v1002._node) {
                v1002._node.gain.setValueAtTime(p1143 ? 0 : v1002._volume, v981.ctx.currentTime);
              } else if (v1002._node) {
                v1002._node.muted = v981._muted ? true : p1143;
              }
              vThis92._emit("mute", v1002._id);
            }
          }
          return vThis92;
        },
        volume: function () {
          var vThis93 = this;
          var vArguments2 = arguments;
          var v1003;
          var v1004;
          if (vArguments2.length === 0) {
            return vThis93._volume;
          } else if (vArguments2.length === 1 || vArguments2.length === 2 && typeof vArguments2[1] === "undefined") {
            var v1005 = vThis93._getSoundIds();
            var v1006 = v1005.indexOf(vArguments2[0]);
            if (v1006 >= 0) {
              v1004 = parseInt(vArguments2[0], 10);
            } else {
              v1003 = parseFloat(vArguments2[0]);
            }
          } else if (vArguments2.length >= 2) {
            v1003 = parseFloat(vArguments2[0]);
            v1004 = parseInt(vArguments2[1], 10);
          }
          var v1007;
          if (typeof v1003 !== "undefined" && v1003 >= 0 && v1003 <= 1) {
            if (vThis93._state !== "loaded" || vThis93._playLock) {
              vThis93._queue.push({
                event: "volume",
                action: function () {
                  vThis93.volume.apply(vThis93, vArguments2);
                }
              });
              return vThis93;
            }
            if (typeof v1004 === "undefined") {
              vThis93._volume = v1003;
            }
            v1004 = vThis93._getSoundIds(v1004);
            for (var vLN0162 = 0; vLN0162 < v1004.length; vLN0162++) {
              v1007 = vThis93._soundById(v1004[vLN0162]);
              if (v1007) {
                v1007._volume = v1003;
                if (!vArguments2[2]) {
                  vThis93._stopFade(v1004[vLN0162]);
                }
                if (vThis93._webAudio && v1007._node && !v1007._muted) {
                  v1007._node.gain.setValueAtTime(v1003, v981.ctx.currentTime);
                } else if (v1007._node && !v1007._muted) {
                  v1007._node.volume = v1003 * v981.volume();
                }
                vThis93._emit("volume", v1007._id);
              }
            }
          } else {
            v1007 = v1004 ? vThis93._soundById(v1004) : vThis93._sounds[0];
            if (v1007) {
              return v1007._volume;
            } else {
              return 0;
            }
          }
          return vThis93;
        },
        fade: function (p1145, p1146, p1147, p1148) {
          var vThis94 = this;
          if (vThis94._state !== "loaded" || vThis94._playLock) {
            vThis94._queue.push({
              event: "fade",
              action: function () {
                vThis94.fade(p1145, p1146, p1147, p1148);
              }
            });
            return vThis94;
          }
          p1145 = Math.min(Math.max(0, parseFloat(p1145)), 1);
          p1146 = Math.min(Math.max(0, parseFloat(p1146)), 1);
          p1147 = parseFloat(p1147);
          vThis94.volume(p1145, p1148);
          var v1008 = vThis94._getSoundIds(p1148);
          for (var vLN0163 = 0; vLN0163 < v1008.length; vLN0163++) {
            var v1009 = vThis94._soundById(v1008[vLN0163]);
            if (v1009) {
              if (!p1148) {
                vThis94._stopFade(v1008[vLN0163]);
              }
              if (vThis94._webAudio && !v1009._muted) {
                var v1010 = v981.ctx.currentTime;
                var v1011 = v1010 + p1147 / 1000;
                v1009._volume = p1145;
                v1009._node.gain.setValueAtTime(p1145, v1010);
                v1009._node.gain.linearRampToValueAtTime(p1146, v1011);
              }
              vThis94._startFadeInterval(v1009, p1145, p1146, p1147, v1008[vLN0163], typeof p1148 === "undefined");
            }
          }
          return vThis94;
        },
        _startFadeInterval: function (p1149, p1150, p1151, p1152, p1153, p1154) {
          var vThis95 = this;
          var vP1150 = p1150;
          var v1012 = p1151 - p1150;
          var v1013 = Math.abs(v1012 / 0.01);
          var v1014 = Math.max(4, v1013 > 0 ? p1152 / v1013 : p1152);
          var v1015 = Date.now();
          p1149._fadeTo = p1151;
          p1149._interval = setInterval(function () {
            var v1016 = (Date.now() - v1015) / p1152;
            v1015 = Date.now();
            vP1150 += v1012 * v1016;
            vP1150 = Math.round(vP1150 * 100) / 100;
            if (v1012 < 0) {
              vP1150 = Math.max(p1151, vP1150);
            } else {
              vP1150 = Math.min(p1151, vP1150);
            }
            if (vThis95._webAudio) {
              p1149._volume = vP1150;
            } else {
              vThis95.volume(vP1150, p1149._id, true);
            }
            if (p1154) {
              vThis95._volume = vP1150;
            }
            if (p1151 < p1150 && vP1150 <= p1151 || p1151 > p1150 && vP1150 >= p1151) {
              clearInterval(p1149._interval);
              p1149._interval = null;
              p1149._fadeTo = null;
              vThis95.volume(p1151, p1149._id);
              vThis95._emit("fade", p1149._id);
            }
          }, v1014);
        },
        _stopFade: function (p1155) {
          var vThis96 = this;
          var v1017 = vThis96._soundById(p1155);
          if (v1017 && v1017._interval) {
            if (vThis96._webAudio) {
              v1017._node.gain.cancelScheduledValues(v981.ctx.currentTime);
            }
            clearInterval(v1017._interval);
            v1017._interval = null;
            vThis96.volume(v1017._fadeTo, p1155);
            v1017._fadeTo = null;
            vThis96._emit("fade", p1155);
          }
          return vThis96;
        },
        loop: function () {
          var vThis97 = this;
          var vArguments3 = arguments;
          var v1018;
          var v1019;
          var v1020;
          if (vArguments3.length === 0) {
            return vThis97._loop;
          } else if (vArguments3.length === 1) {
            if (typeof vArguments3[0] === "boolean") {
              v1018 = vArguments3[0];
              vThis97._loop = v1018;
            } else {
              v1020 = vThis97._soundById(parseInt(vArguments3[0], 10));
              if (v1020) {
                return v1020._loop;
              } else {
                return false;
              }
            }
          } else if (vArguments3.length === 2) {
            v1018 = vArguments3[0];
            v1019 = parseInt(vArguments3[1], 10);
          }
          var v1021 = vThis97._getSoundIds(v1019);
          for (var vLN0164 = 0; vLN0164 < v1021.length; vLN0164++) {
            v1020 = vThis97._soundById(v1021[vLN0164]);
            if (v1020) {
              v1020._loop = v1018;
              if (vThis97._webAudio && v1020._node && v1020._node.bufferSource) {
                v1020._node.bufferSource.loop = v1018;
                if (v1018) {
                  v1020._node.bufferSource.loopStart = v1020._start || 0;
                  v1020._node.bufferSource.loopEnd = v1020._stop;
                  if (vThis97.playing(v1021[vLN0164])) {
                    vThis97.pause(v1021[vLN0164], true);
                    vThis97.play(v1021[vLN0164], true);
                  }
                }
              }
            }
          }
          return vThis97;
        },
        rate: function () {
          var vThis98 = this;
          var vArguments4 = arguments;
          var v1022;
          var v1023;
          if (vArguments4.length === 0) {
            v1023 = vThis98._sounds[0]._id;
          } else if (vArguments4.length === 1) {
            var v1024 = vThis98._getSoundIds();
            var v1025 = v1024.indexOf(vArguments4[0]);
            if (v1025 >= 0) {
              v1023 = parseInt(vArguments4[0], 10);
            } else {
              v1022 = parseFloat(vArguments4[0]);
            }
          } else if (vArguments4.length === 2) {
            v1022 = parseFloat(vArguments4[0]);
            v1023 = parseInt(vArguments4[1], 10);
          }
          var v1026;
          if (typeof v1022 === "number") {
            if (vThis98._state !== "loaded" || vThis98._playLock) {
              vThis98._queue.push({
                event: "rate",
                action: function () {
                  vThis98.rate.apply(vThis98, vArguments4);
                }
              });
              return vThis98;
            }
            if (typeof v1023 === "undefined") {
              vThis98._rate = v1022;
            }
            v1023 = vThis98._getSoundIds(v1023);
            for (var vLN0165 = 0; vLN0165 < v1023.length; vLN0165++) {
              v1026 = vThis98._soundById(v1023[vLN0165]);
              if (v1026) {
                if (vThis98.playing(v1023[vLN0165])) {
                  v1026._rateSeek = vThis98.seek(v1023[vLN0165]);
                  v1026._playStart = vThis98._webAudio ? v981.ctx.currentTime : v1026._playStart;
                }
                v1026._rate = v1022;
                if (vThis98._webAudio && v1026._node && v1026._node.bufferSource) {
                  v1026._node.bufferSource.playbackRate.setValueAtTime(v1022, v981.ctx.currentTime);
                } else if (v1026._node) {
                  v1026._node.playbackRate = v1022;
                }
                var v1027 = vThis98.seek(v1023[vLN0165]);
                var v1028 = (vThis98._sprite[v1026._sprite][0] + vThis98._sprite[v1026._sprite][1]) / 1000 - v1027;
                var v1029 = v1028 * 1000 / Math.abs(v1026._rate);
                if (vThis98._endTimers[v1023[vLN0165]] || !v1026._paused) {
                  vThis98._clearTimer(v1023[vLN0165]);
                  vThis98._endTimers[v1023[vLN0165]] = setTimeout(vThis98._ended.bind(vThis98, v1026), v1029);
                }
                vThis98._emit("rate", v1026._id);
              }
            }
          } else {
            v1026 = vThis98._soundById(v1023);
            if (v1026) {
              return v1026._rate;
            } else {
              return vThis98._rate;
            }
          }
          return vThis98;
        },
        seek: function () {
          var vThis99 = this;
          var vArguments5 = arguments;
          var v1030;
          var v1031;
          if (vArguments5.length === 0) {
            if (vThis99._sounds.length) {
              v1031 = vThis99._sounds[0]._id;
            }
          } else if (vArguments5.length === 1) {
            var v1032 = vThis99._getSoundIds();
            var v1033 = v1032.indexOf(vArguments5[0]);
            if (v1033 >= 0) {
              v1031 = parseInt(vArguments5[0], 10);
            } else if (vThis99._sounds.length) {
              v1031 = vThis99._sounds[0]._id;
              v1030 = parseFloat(vArguments5[0]);
            }
          } else if (vArguments5.length === 2) {
            v1030 = parseFloat(vArguments5[0]);
            v1031 = parseInt(vArguments5[1], 10);
          }
          if (typeof v1031 === "undefined") {
            return 0;
          }
          if (typeof v1030 === "number" && (vThis99._state !== "loaded" || vThis99._playLock)) {
            vThis99._queue.push({
              event: "seek",
              action: function () {
                vThis99.seek.apply(vThis99, vArguments5);
              }
            });
            return vThis99;
          }
          var v1034 = vThis99._soundById(v1031);
          if (v1034) {
            if (typeof v1030 === "number" && v1030 >= 0) {
              var v1035 = vThis99.playing(v1031);
              if (v1035) {
                vThis99.pause(v1031, true);
              }
              v1034._seek = v1030;
              v1034._ended = false;
              vThis99._clearTimer(v1031);
              if (!vThis99._webAudio && v1034._node && !isNaN(v1034._node.duration)) {
                v1034._node.currentTime = v1030;
              }
              function f243() {
                if (v1035) {
                  vThis99.play(v1031, true);
                }
                vThis99._emit("seek", v1031);
              }
              if (v1035 && !vThis99._webAudio) {
                function f244() {
                  if (!vThis99._playLock) {
                    f243();
                  } else {
                    setTimeout(f244, 0);
                  }
                }
                setTimeout(f244, 0);
              } else {
                f243();
              }
            } else if (vThis99._webAudio) {
              var v1036 = vThis99.playing(v1031) ? v981.ctx.currentTime - v1034._playStart : 0;
              var v1037 = v1034._rateSeek ? v1034._rateSeek - v1034._seek : 0;
              return v1034._seek + (v1037 + v1036 * Math.abs(v1034._rate));
            } else {
              return v1034._node.currentTime;
            }
          }
          return vThis99;
        },
        playing: function (p1156) {
          var vThis100 = this;
          if (typeof p1156 === "number") {
            var v1038 = vThis100._soundById(p1156);
            if (v1038) {
              return !v1038._paused;
            } else {
              return false;
            }
          }
          for (var vLN0166 = 0; vLN0166 < vThis100._sounds.length; vLN0166++) {
            if (!vThis100._sounds[vLN0166]._paused) {
              return true;
            }
          }
          return false;
        },
        duration: function (p1157) {
          var vThis101 = this;
          var v1039 = vThis101._duration;
          var v1040 = vThis101._soundById(p1157);
          if (v1040) {
            v1039 = vThis101._sprite[v1040._sprite][1] / 1000;
          }
          return v1039;
        },
        state: function () {
          return this._state;
        },
        unload: function () {
          var vThis102 = this;
          var v1041 = vThis102._sounds;
          for (var vLN0167 = 0; vLN0167 < v1041.length; vLN0167++) {
            if (!v1041[vLN0167]._paused) {
              vThis102.stop(v1041[vLN0167]._id);
            }
            if (!vThis102._webAudio) {
              vThis102._clearSound(v1041[vLN0167]._node);
              v1041[vLN0167]._node.removeEventListener("error", v1041[vLN0167]._errorFn, false);
              v1041[vLN0167]._node.removeEventListener(v981._canPlayEvent, v1041[vLN0167]._loadFn, false);
              v1041[vLN0167]._node.removeEventListener("ended", v1041[vLN0167]._endFn, false);
              v981._releaseHtml5Audio(v1041[vLN0167]._node);
            }
            delete v1041[vLN0167]._node;
            vThis102._clearTimer(v1041[vLN0167]._id);
          }
          var v1042 = v981._howls.indexOf(vThis102);
          if (v1042 >= 0) {
            v981._howls.splice(v1042, 1);
          }
          var v1043 = true;
          for (vLN0167 = 0; vLN0167 < v981._howls.length; vLN0167++) {
            if (v981._howls[vLN0167]._src === vThis102._src || vThis102._src.indexOf(v981._howls[vLN0167]._src) >= 0) {
              v1043 = false;
              break;
            }
          }
          if (vO58 && v1043) {
            delete vO58[vThis102._src];
          }
          v981.noAudio = false;
          vThis102._state = "unloaded";
          vThis102._sounds = [];
          vThis102 = null;
          return null;
        },
        on: function (p1158, p1159, p1160, p1161) {
          var vThis103 = this;
          var v1044 = vThis103["_on" + p1158];
          if (typeof p1159 === "function") {
            v1044.push(p1161 ? {
              id: p1160,
              fn: p1159,
              once: p1161
            } : {
              id: p1160,
              fn: p1159
            });
          }
          return vThis103;
        },
        off: function (p1162, p1163, p1164) {
          var vThis104 = this;
          var v1045 = vThis104["_on" + p1162];
          var vLN0168 = 0;
          if (typeof p1163 === "number") {
            p1164 = p1163;
            p1163 = null;
          }
          if (p1163 || p1164) {
            for (vLN0168 = 0; vLN0168 < v1045.length; vLN0168++) {
              var v1046 = p1164 === v1045[vLN0168].id;
              if (p1163 === v1045[vLN0168].fn && v1046 || !p1163 && v1046) {
                v1045.splice(vLN0168, 1);
                break;
              }
            }
          } else if (p1162) {
            vThis104["_on" + p1162] = [];
          } else {
            var v1047 = Object.keys(vThis104);
            for (vLN0168 = 0; vLN0168 < v1047.length; vLN0168++) {
              if (v1047[vLN0168].indexOf("_on") === 0 && Array.isArray(vThis104[v1047[vLN0168]])) {
                vThis104[v1047[vLN0168]] = [];
              }
            }
          }
          return vThis104;
        },
        once: function (p1165, p1166, p1167) {
          var vThis105 = this;
          vThis105.on(p1165, p1166, p1167, 1);
          return vThis105;
        },
        _emit: function (p1168, p1169, p1170) {
          var vThis106 = this;
          var v1048 = vThis106["_on" + p1168];
          for (var v1049 = v1048.length - 1; v1049 >= 0; v1049--) {
            if (!v1048[v1049].id || v1048[v1049].id === p1169 || p1168 === "load") {
              setTimeout(function (p1171) {
                p1171.call(this, p1169, p1170);
              }.bind(vThis106, v1048[v1049].fn), 0);
              if (v1048[v1049].once) {
                vThis106.off(p1168, v1048[v1049].fn, v1048[v1049].id);
              }
            }
          }
          vThis106._loadQueue(p1168);
          return vThis106;
        },
        _loadQueue: function (p1172) {
          var vThis107 = this;
          if (vThis107._queue.length > 0) {
            var v1050 = vThis107._queue[0];
            if (v1050.event === p1172) {
              vThis107._queue.shift();
              vThis107._loadQueue();
            }
            if (!p1172) {
              v1050.action();
            }
          }
          return vThis107;
        },
        _ended: function (p1173) {
          var vThis108 = this;
          var v1051 = p1173._sprite;
          if (!vThis108._webAudio && p1173._node && !p1173._node.paused && !p1173._node.ended && p1173._node.currentTime < p1173._stop) {
            setTimeout(vThis108._ended.bind(vThis108, p1173), 100);
            return vThis108;
          }
          var v1052 = !!p1173._loop || !!vThis108._sprite[v1051][2];
          vThis108._emit("end", p1173._id);
          if (!vThis108._webAudio && v1052) {
            vThis108.stop(p1173._id, true).play(p1173._id);
          }
          if (vThis108._webAudio && v1052) {
            vThis108._emit("play", p1173._id);
            p1173._seek = p1173._start || 0;
            p1173._rateSeek = 0;
            p1173._playStart = v981.ctx.currentTime;
            var v1053 = (p1173._stop - p1173._start) * 1000 / Math.abs(p1173._rate);
            vThis108._endTimers[p1173._id] = setTimeout(vThis108._ended.bind(vThis108, p1173), v1053);
          }
          if (vThis108._webAudio && !v1052) {
            p1173._paused = true;
            p1173._ended = true;
            p1173._seek = p1173._start || 0;
            p1173._rateSeek = 0;
            vThis108._clearTimer(p1173._id);
            vThis108._cleanBuffer(p1173._node);
            v981._autoSuspend();
          }
          if (!vThis108._webAudio && !v1052) {
            vThis108.stop(p1173._id, true);
          }
          return vThis108;
        },
        _clearTimer: function (p1174) {
          var vThis109 = this;
          if (vThis109._endTimers[p1174]) {
            if (typeof vThis109._endTimers[p1174] !== "function") {
              clearTimeout(vThis109._endTimers[p1174]);
            } else {
              var v1054 = vThis109._soundById(p1174);
              if (v1054 && v1054._node) {
                v1054._node.removeEventListener("ended", vThis109._endTimers[p1174], false);
              }
            }
            delete vThis109._endTimers[p1174];
          }
          return vThis109;
        },
        _soundById: function (p1175) {
          var vThis110 = this;
          for (var vLN0169 = 0; vLN0169 < vThis110._sounds.length; vLN0169++) {
            if (p1175 === vThis110._sounds[vLN0169]._id) {
              return vThis110._sounds[vLN0169];
            }
          }
          return null;
        },
        _inactiveSound: function () {
          var vThis111 = this;
          vThis111._drain();
          for (var vLN0170 = 0; vLN0170 < vThis111._sounds.length; vLN0170++) {
            if (vThis111._sounds[vLN0170]._ended) {
              return vThis111._sounds[vLN0170].reset();
            }
          }
          return new f245(vThis111);
        },
        _drain: function () {
          var vThis112 = this;
          var v1055 = vThis112._pool;
          var vLN0171 = 0;
          var vLN0172 = 0;
          if (vThis112._sounds.length < v1055) {
            return;
          }
          for (vLN0172 = 0; vLN0172 < vThis112._sounds.length; vLN0172++) {
            if (vThis112._sounds[vLN0172]._ended) {
              vLN0171++;
            }
          }
          for (vLN0172 = vThis112._sounds.length - 1; vLN0172 >= 0; vLN0172--) {
            if (vLN0171 <= v1055) {
              return;
            }
            if (vThis112._sounds[vLN0172]._ended) {
              if (vThis112._webAudio && vThis112._sounds[vLN0172]._node) {
                vThis112._sounds[vLN0172]._node.disconnect(0);
              }
              vThis112._sounds.splice(vLN0172, 1);
              vLN0171--;
            }
          }
        },
        _getSoundIds: function (p1176) {
          var vThis113 = this;
          if (typeof p1176 === "undefined") {
            var vA21 = [];
            for (var vLN0173 = 0; vLN0173 < vThis113._sounds.length; vLN0173++) {
              vA21.push(vThis113._sounds[vLN0173]._id);
            }
            return vA21;
          } else {
            return [p1176];
          }
        },
        _refreshBuffer: function (p1177) {
          var vThis114 = this;
          p1177._node.bufferSource = v981.ctx.createBufferSource();
          p1177._node.bufferSource.buffer = vO58[vThis114._src];
          if (p1177._panner) {
            p1177._node.bufferSource.connect(p1177._panner);
          } else {
            p1177._node.bufferSource.connect(p1177._node);
          }
          p1177._node.bufferSource.loop = p1177._loop;
          if (p1177._loop) {
            p1177._node.bufferSource.loopStart = p1177._start || 0;
            p1177._node.bufferSource.loopEnd = p1177._stop || 0;
          }
          p1177._node.bufferSource.playbackRate.setValueAtTime(p1177._rate, v981.ctx.currentTime);
          return vThis114;
        },
        _cleanBuffer: function (p1178) {
          var vThis115 = this;
          var v1056 = v981._navigator && v981._navigator.vendor.indexOf("Apple") >= 0;
          if (!p1178.bufferSource) {
            return vThis115;
          }
          if (v981._scratchBuffer && p1178.bufferSource) {
            p1178.bufferSource.onended = null;
            p1178.bufferSource.disconnect(0);
            if (v1056) {
              try {
                p1178.bufferSource.buffer = v981._scratchBuffer;
              } catch (e53) {}
            }
          }
          p1178.bufferSource = null;
          return vThis115;
        },
        _clearSound: function (p1179) {
          var v1057 = /MSIE |Trident\//.test(v981._navigator && v981._navigator.userAgent);
          if (!v1057) {
            p1179.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
          }
        }
      };
      function f245(p1180) {
        this._parent = p1180;
        this.init();
      }
      f245.prototype = {
        init: function () {
          var vThis116 = this;
          var v1058 = vThis116._parent;
          vThis116._muted = v1058._muted;
          vThis116._loop = v1058._loop;
          vThis116._volume = v1058._volume;
          vThis116._rate = v1058._rate;
          vThis116._seek = 0;
          vThis116._paused = true;
          vThis116._ended = true;
          vThis116._sprite = "__default";
          vThis116._id = ++v981._counter;
          v1058._sounds.push(vThis116);
          vThis116.create();
          return vThis116;
        },
        create: function () {
          var vThis117 = this;
          var v1059 = vThis117._parent;
          var v1060 = v981._muted || vThis117._muted || vThis117._parent._muted ? 0 : vThis117._volume;
          if (v1059._webAudio) {
            vThis117._node = typeof v981.ctx.createGain === "undefined" ? v981.ctx.createGainNode() : v981.ctx.createGain();
            vThis117._node.gain.setValueAtTime(v1060, v981.ctx.currentTime);
            vThis117._node.paused = true;
            vThis117._node.connect(v981.masterGain);
          } else if (!v981.noAudio) {
            vThis117._node = v981._obtainHtml5Audio();
            vThis117._errorFn = vThis117._errorListener.bind(vThis117);
            vThis117._node.addEventListener("error", vThis117._errorFn, false);
            vThis117._loadFn = vThis117._loadListener.bind(vThis117);
            vThis117._node.addEventListener(v981._canPlayEvent, vThis117._loadFn, false);
            vThis117._endFn = vThis117._endListener.bind(vThis117);
            vThis117._node.addEventListener("ended", vThis117._endFn, false);
            vThis117._node.src = v1059._src;
            vThis117._node.preload = v1059._preload === true ? "auto" : v1059._preload;
            vThis117._node.volume = v1060 * v981.volume();
            vThis117._node.load();
          }
          return vThis117;
        },
        reset: function () {
          var vThis118 = this;
          var v1061 = vThis118._parent;
          vThis118._muted = v1061._muted;
          vThis118._loop = v1061._loop;
          vThis118._volume = v1061._volume;
          vThis118._rate = v1061._rate;
          vThis118._seek = 0;
          vThis118._rateSeek = 0;
          vThis118._paused = true;
          vThis118._ended = true;
          vThis118._sprite = "__default";
          vThis118._id = ++v981._counter;
          return vThis118;
        },
        _errorListener: function () {
          var vThis119 = this;
          vThis119._parent._emit("loaderror", vThis119._id, vThis119._node.error ? vThis119._node.error.code : 0);
          vThis119._node.removeEventListener("error", vThis119._errorFn, false);
        },
        _loadListener: function () {
          var vThis120 = this;
          var v1062 = vThis120._parent;
          v1062._duration = Math.ceil(vThis120._node.duration * 10) / 10;
          if (Object.keys(v1062._sprite).length === 0) {
            v1062._sprite = {
              __default: [0, v1062._duration * 1000]
            };
          }
          if (v1062._state !== "loaded") {
            v1062._state = "loaded";
            v1062._emit("load");
            v1062._loadQueue();
          }
          vThis120._node.removeEventListener(v981._canPlayEvent, vThis120._loadFn, false);
        },
        _endListener: function () {
          var vThis121 = this;
          var v1063 = vThis121._parent;
          if (v1063._duration === Infinity) {
            v1063._duration = Math.ceil(vThis121._node.duration * 10) / 10;
            if (v1063._sprite.__default[1] === Infinity) {
              v1063._sprite.__default[1] = v1063._duration * 1000;
            }
            v1063._ended(vThis121);
          }
          vThis121._node.removeEventListener("ended", vThis121._endFn, false);
        }
      };
      var vO58 = {};
      function f246(p1181) {
        var v1064 = p1181._src;
        if (vO58[v1064]) {
          p1181._duration = vO58[v1064].duration;
          f251(p1181);
          return;
        }
        if (/^data:[^;]+;base64,/.test(v1064)) {
          var vAtob = atob(v1064.split(",")[1]);
          var v1065 = new Uint8Array(vAtob.length);
          for (var vLN0174 = 0; vLN0174 < vAtob.length; ++vLN0174) {
            v1065[vLN0174] = vAtob.charCodeAt(vLN0174);
          }
          f248(v1065.buffer, p1181);
        } else {
          var v1066 = new XMLHttpRequest();
          v1066.open(p1181._xhr.method, v1064, true);
          v1066.withCredentials = p1181._xhr.withCredentials;
          v1066.responseType = "arraybuffer";
          if (p1181._xhr.headers) {
            Object.keys(p1181._xhr.headers).forEach(function (p1182) {
              v1066.setRequestHeader(p1182, p1181._xhr.headers[p1182]);
            });
          }
          v1066.onload = function () {
            var v1067 = (v1066.status + "")[0];
            if (v1067 !== "0" && v1067 !== "2" && v1067 !== "3") {
              p1181._emit("loaderror", null, "Failed loading audio file with status: " + v1066.status + ".");
              return;
            }
            f248(v1066.response, p1181);
          };
          v1066.onerror = function () {
            if (p1181._webAudio) {
              p1181._html5 = true;
              p1181._webAudio = false;
              p1181._sounds = [];
              delete vO58[v1064];
              p1181.load();
            }
          };
          f247(v1066);
        }
      }
      function f247(p1183) {
        try {
          p1183.send();
        } catch (e54) {
          p1183.onerror();
        }
      }
      function f248(p1184, p1185) {
        function f249() {
          p1185._emit("loaderror", null, "Decoding audio data failed.");
        }
        function f250(p1186) {
          if (p1186 && p1185._sounds.length > 0) {
            vO58[p1185._src] = p1186;
            f251(p1185, p1186);
          } else {
            f249();
          }
        }
        if (typeof Promise !== "undefined" && v981.ctx.decodeAudioData.length === 1) {
          v981.ctx.decodeAudioData(p1184).then(f250).catch(f249);
        } else {
          v981.ctx.decodeAudioData(p1184, f250, f249);
        }
      }
      function f251(p1187, p1188) {
        if (p1188 && !p1187._duration) {
          p1187._duration = p1188.duration;
        }
        if (Object.keys(p1187._sprite).length === 0) {
          p1187._sprite = {
            __default: [0, p1187._duration * 1000]
          };
        }
        if (p1187._state !== "loaded") {
          p1187._state = "loaded";
          p1187._emit("load");
          p1187._loadQueue();
        }
      }
      function f252() {
        if (!v981.usingWebAudio) {
          return;
        }
        try {
          if (typeof AudioContext !== "undefined") {
            v981.ctx = new AudioContext();
          } else if (typeof webkitAudioContext !== "undefined") {
            v981.ctx = new webkitAudioContext();
          } else {
            v981.usingWebAudio = false;
          }
        } catch (e55) {
          v981.usingWebAudio = false;
        }
        if (!v981.ctx) {
          v981.usingWebAudio = false;
        }
        var v1068 = /iP(hone|od|ad)/.test(v981._navigator && v981._navigator.platform);
        var v1069 = v981._navigator && v981._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var v1070 = v1069 ? parseInt(v1069[1], 10) : null;
        if (v1068 && v1070 && v1070 < 9) {
          var v1071 = /safari/.test(v981._navigator && v981._navigator.userAgent.toLowerCase());
          if (v981._navigator && !v1071) {
            v981.usingWebAudio = false;
          }
        }
        if (v981.usingWebAudio) {
          v981.masterGain = typeof v981.ctx.createGain === "undefined" ? v981.ctx.createGainNode() : v981.ctx.createGain();
          v981.masterGain.gain.setValueAtTime(v981._muted ? 0 : v981._volume, v981.ctx.currentTime);
          v981.masterGain.connect(v981.ctx.destination);
        }
        v981._setup();
      }
      if (true) {
        v949 = [];
        v950 = function () {
          return {
            Howler: v981,
            Howl: f238
          };
        }.apply(p1129, v949);
        if (v950 !== undefined) {
          p1128.exports = v950;
        }
      }
      if (true) {
        p1129.Howler = v981;
        p1129.Howl = f238;
      }
      if (typeof p1130.g !== "undefined") {
        p1130.g.HowlerGlobal = f235;
        p1130.g.Howler = v981;
        p1130.g.Howl = f238;
        p1130.g.Sound = f245;
      } else if (typeof window !== "undefined") {
        window.HowlerGlobal = f235;
        window.Howler = v981;
        window.Howl = f238;
        window.Sound = f245;
      }
    })();
    (function () {
      'use strict';

      HowlerGlobal.prototype._pos = [0, 0, 0];
      HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
      HowlerGlobal.prototype.stereo = function (p1189) {
        var vThis122 = this;
        if (!vThis122.ctx || !vThis122.ctx.listener) {
          return vThis122;
        }
        for (var v1072 = vThis122._howls.length - 1; v1072 >= 0; v1072--) {
          vThis122._howls[v1072].stereo(p1189);
        }
        return vThis122;
      };
      HowlerGlobal.prototype.pos = function (p1190, p1191, p1192) {
        var vThis123 = this;
        if (!vThis123.ctx || !vThis123.ctx.listener) {
          return vThis123;
        }
        p1191 = typeof p1191 !== "number" ? vThis123._pos[1] : p1191;
        p1192 = typeof p1192 !== "number" ? vThis123._pos[2] : p1192;
        if (typeof p1190 === "number") {
          vThis123._pos = [p1190, p1191, p1192];
          if (typeof vThis123.ctx.listener.positionX !== "undefined") {
            vThis123.ctx.listener.positionX.setTargetAtTime(vThis123._pos[0], Howler.ctx.currentTime, 0.1);
            vThis123.ctx.listener.positionY.setTargetAtTime(vThis123._pos[1], Howler.ctx.currentTime, 0.1);
            vThis123.ctx.listener.positionZ.setTargetAtTime(vThis123._pos[2], Howler.ctx.currentTime, 0.1);
          } else {
            vThis123.ctx.listener.setPosition(vThis123._pos[0], vThis123._pos[1], vThis123._pos[2]);
          }
        } else {
          return vThis123._pos;
        }
        return vThis123;
      };
      HowlerGlobal.prototype.orientation = function (p1193, p1194, p1195, p1196, p1197, p1198) {
        var vThis124 = this;
        if (!vThis124.ctx || !vThis124.ctx.listener) {
          return vThis124;
        }
        var v1073 = vThis124._orientation;
        p1194 = typeof p1194 !== "number" ? v1073[1] : p1194;
        p1195 = typeof p1195 !== "number" ? v1073[2] : p1195;
        p1196 = typeof p1196 !== "number" ? v1073[3] : p1196;
        p1197 = typeof p1197 !== "number" ? v1073[4] : p1197;
        p1198 = typeof p1198 !== "number" ? v1073[5] : p1198;
        if (typeof p1193 === "number") {
          vThis124._orientation = [p1193, p1194, p1195, p1196, p1197, p1198];
          if (typeof vThis124.ctx.listener.forwardX !== "undefined") {
            vThis124.ctx.listener.forwardX.setTargetAtTime(p1193, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.forwardY.setTargetAtTime(p1194, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.forwardZ.setTargetAtTime(p1195, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upX.setTargetAtTime(p1196, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upY.setTargetAtTime(p1197, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upZ.setTargetAtTime(p1198, Howler.ctx.currentTime, 0.1);
          } else {
            vThis124.ctx.listener.setOrientation(p1193, p1194, p1195, p1196, p1197, p1198);
          }
        } else {
          return v1073;
        }
        return vThis124;
      };
      Howl.prototype.init = function (p1199) {
        return function (p1200) {
          var vThis125 = this;
          vThis125._orientation = p1200.orientation || [1, 0, 0];
          vThis125._stereo = p1200.stereo || null;
          vThis125._pos = p1200.pos || null;
          vThis125._pannerAttr = {
            coneInnerAngle: typeof p1200.coneInnerAngle !== "undefined" ? p1200.coneInnerAngle : 360,
            coneOuterAngle: typeof p1200.coneOuterAngle !== "undefined" ? p1200.coneOuterAngle : 360,
            coneOuterGain: typeof p1200.coneOuterGain !== "undefined" ? p1200.coneOuterGain : 0,
            distanceModel: typeof p1200.distanceModel !== "undefined" ? p1200.distanceModel : "inverse",
            maxDistance: typeof p1200.maxDistance !== "undefined" ? p1200.maxDistance : 10000,
            panningModel: typeof p1200.panningModel !== "undefined" ? p1200.panningModel : "HRTF",
            refDistance: typeof p1200.refDistance !== "undefined" ? p1200.refDistance : 1,
            rolloffFactor: typeof p1200.rolloffFactor !== "undefined" ? p1200.rolloffFactor : 1
          };
          vThis125._onstereo = p1200.onstereo ? [{
            fn: p1200.onstereo
          }] : [];
          vThis125._onpos = p1200.onpos ? [{
            fn: p1200.onpos
          }] : [];
          vThis125._onorientation = p1200.onorientation ? [{
            fn: p1200.onorientation
          }] : [];
          return p1199.call(this, p1200);
        };
      }(Howl.prototype.init);
      Howl.prototype.stereo = function (p1201, p1202) {
        var vThis126 = this;
        if (!vThis126._webAudio) {
          return vThis126;
        }
        if (vThis126._state !== "loaded") {
          vThis126._queue.push({
            event: "stereo",
            action: function () {
              vThis126.stereo(p1201, p1202);
            }
          });
          return vThis126;
        }
        var v1074 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
        if (typeof p1202 === "undefined") {
          if (typeof p1201 === "number") {
            vThis126._stereo = p1201;
            vThis126._pos = [p1201, 0, 0];
          } else {
            return vThis126._stereo;
          }
        }
        var v1075 = vThis126._getSoundIds(p1202);
        for (var vLN0175 = 0; vLN0175 < v1075.length; vLN0175++) {
          var v1076 = vThis126._soundById(v1075[vLN0175]);
          if (v1076) {
            if (typeof p1201 === "number") {
              v1076._stereo = p1201;
              v1076._pos = [p1201, 0, 0];
              if (v1076._node) {
                v1076._pannerAttr.panningModel = "equalpower";
                if (!v1076._panner || !v1076._panner.pan) {
                  f253(v1076, v1074);
                }
                if (v1074 === "spatial") {
                  if (typeof v1076._panner.positionX !== "undefined") {
                    v1076._panner.positionX.setValueAtTime(p1201, Howler.ctx.currentTime);
                    v1076._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                    v1076._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                  } else {
                    v1076._panner.setPosition(p1201, 0, 0);
                  }
                } else {
                  v1076._panner.pan.setValueAtTime(p1201, Howler.ctx.currentTime);
                }
              }
              vThis126._emit("stereo", v1076._id);
            } else {
              return v1076._stereo;
            }
          }
        }
        return vThis126;
      };
      Howl.prototype.pos = function (p1203, p1204, p1205, p1206) {
        var vThis127 = this;
        if (!vThis127._webAudio) {
          return vThis127;
        }
        if (vThis127._state !== "loaded") {
          vThis127._queue.push({
            event: "pos",
            action: function () {
              vThis127.pos(p1203, p1204, p1205, p1206);
            }
          });
          return vThis127;
        }
        p1204 = typeof p1204 !== "number" ? 0 : p1204;
        p1205 = typeof p1205 !== "number" ? -0.5 : p1205;
        if (typeof p1206 === "undefined") {
          if (typeof p1203 === "number") {
            vThis127._pos = [p1203, p1204, p1205];
          } else {
            return vThis127._pos;
          }
        }
        var v1077 = vThis127._getSoundIds(p1206);
        for (var vLN0176 = 0; vLN0176 < v1077.length; vLN0176++) {
          var v1078 = vThis127._soundById(v1077[vLN0176]);
          if (v1078) {
            if (typeof p1203 === "number") {
              v1078._pos = [p1203, p1204, p1205];
              if (v1078._node) {
                if (!v1078._panner || v1078._panner.pan) {
                  f253(v1078, "spatial");
                }
                if (typeof v1078._panner.positionX !== "undefined") {
                  v1078._panner.positionX.setValueAtTime(p1203, Howler.ctx.currentTime);
                  v1078._panner.positionY.setValueAtTime(p1204, Howler.ctx.currentTime);
                  v1078._panner.positionZ.setValueAtTime(p1205, Howler.ctx.currentTime);
                } else {
                  v1078._panner.setPosition(p1203, p1204, p1205);
                }
              }
              vThis127._emit("pos", v1078._id);
            } else {
              return v1078._pos;
            }
          }
        }
        return vThis127;
      };
      Howl.prototype.orientation = function (p1207, p1208, p1209, p1210) {
        var vThis128 = this;
        if (!vThis128._webAudio) {
          return vThis128;
        }
        if (vThis128._state !== "loaded") {
          vThis128._queue.push({
            event: "orientation",
            action: function () {
              vThis128.orientation(p1207, p1208, p1209, p1210);
            }
          });
          return vThis128;
        }
        p1208 = typeof p1208 !== "number" ? vThis128._orientation[1] : p1208;
        p1209 = typeof p1209 !== "number" ? vThis128._orientation[2] : p1209;
        if (typeof p1210 === "undefined") {
          if (typeof p1207 === "number") {
            vThis128._orientation = [p1207, p1208, p1209];
          } else {
            return vThis128._orientation;
          }
        }
        var v1079 = vThis128._getSoundIds(p1210);
        for (var vLN0177 = 0; vLN0177 < v1079.length; vLN0177++) {
          var v1080 = vThis128._soundById(v1079[vLN0177]);
          if (v1080) {
            if (typeof p1207 === "number") {
              v1080._orientation = [p1207, p1208, p1209];
              if (v1080._node) {
                if (!v1080._panner) {
                  if (!v1080._pos) {
                    v1080._pos = vThis128._pos || [0, 0, -0.5];
                  }
                  f253(v1080, "spatial");
                }
                if (typeof v1080._panner.orientationX !== "undefined") {
                  v1080._panner.orientationX.setValueAtTime(p1207, Howler.ctx.currentTime);
                  v1080._panner.orientationY.setValueAtTime(p1208, Howler.ctx.currentTime);
                  v1080._panner.orientationZ.setValueAtTime(p1209, Howler.ctx.currentTime);
                } else {
                  v1080._panner.setOrientation(p1207, p1208, p1209);
                }
              }
              vThis128._emit("orientation", v1080._id);
            } else {
              return v1080._orientation;
            }
          }
        }
        return vThis128;
      };
      Howl.prototype.pannerAttr = function () {
        var vThis129 = this;
        var vArguments6 = arguments;
        var v1081;
        var v1082;
        var v1083;
        if (!vThis129._webAudio) {
          return vThis129;
        }
        if (vArguments6.length === 0) {
          return vThis129._pannerAttr;
        } else if (vArguments6.length === 1) {
          if (typeof vArguments6[0] === "object") {
            v1081 = vArguments6[0];
            if (typeof v1082 === "undefined") {
              if (!v1081.pannerAttr) {
                v1081.pannerAttr = {
                  coneInnerAngle: v1081.coneInnerAngle,
                  coneOuterAngle: v1081.coneOuterAngle,
                  coneOuterGain: v1081.coneOuterGain,
                  distanceModel: v1081.distanceModel,
                  maxDistance: v1081.maxDistance,
                  refDistance: v1081.refDistance,
                  rolloffFactor: v1081.rolloffFactor,
                  panningModel: v1081.panningModel
                };
              }
              vThis129._pannerAttr = {
                coneInnerAngle: typeof v1081.pannerAttr.coneInnerAngle !== "undefined" ? v1081.pannerAttr.coneInnerAngle : vThis129._coneInnerAngle,
                coneOuterAngle: typeof v1081.pannerAttr.coneOuterAngle !== "undefined" ? v1081.pannerAttr.coneOuterAngle : vThis129._coneOuterAngle,
                coneOuterGain: typeof v1081.pannerAttr.coneOuterGain !== "undefined" ? v1081.pannerAttr.coneOuterGain : vThis129._coneOuterGain,
                distanceModel: typeof v1081.pannerAttr.distanceModel !== "undefined" ? v1081.pannerAttr.distanceModel : vThis129._distanceModel,
                maxDistance: typeof v1081.pannerAttr.maxDistance !== "undefined" ? v1081.pannerAttr.maxDistance : vThis129._maxDistance,
                refDistance: typeof v1081.pannerAttr.refDistance !== "undefined" ? v1081.pannerAttr.refDistance : vThis129._refDistance,
                rolloffFactor: typeof v1081.pannerAttr.rolloffFactor !== "undefined" ? v1081.pannerAttr.rolloffFactor : vThis129._rolloffFactor,
                panningModel: typeof v1081.pannerAttr.panningModel !== "undefined" ? v1081.pannerAttr.panningModel : vThis129._panningModel
              };
            }
          } else {
            v1083 = vThis129._soundById(parseInt(vArguments6[0], 10));
            if (v1083) {
              return v1083._pannerAttr;
            } else {
              return vThis129._pannerAttr;
            }
          }
        } else if (vArguments6.length === 2) {
          v1081 = vArguments6[0];
          v1082 = parseInt(vArguments6[1], 10);
        }
        var v1084 = vThis129._getSoundIds(v1082);
        for (var vLN0178 = 0; vLN0178 < v1084.length; vLN0178++) {
          v1083 = vThis129._soundById(v1084[vLN0178]);
          if (v1083) {
            var v1085 = v1083._pannerAttr;
            v1085 = {
              coneInnerAngle: typeof v1081.coneInnerAngle !== "undefined" ? v1081.coneInnerAngle : v1085.coneInnerAngle,
              coneOuterAngle: typeof v1081.coneOuterAngle !== "undefined" ? v1081.coneOuterAngle : v1085.coneOuterAngle,
              coneOuterGain: typeof v1081.coneOuterGain !== "undefined" ? v1081.coneOuterGain : v1085.coneOuterGain,
              distanceModel: typeof v1081.distanceModel !== "undefined" ? v1081.distanceModel : v1085.distanceModel,
              maxDistance: typeof v1081.maxDistance !== "undefined" ? v1081.maxDistance : v1085.maxDistance,
              refDistance: typeof v1081.refDistance !== "undefined" ? v1081.refDistance : v1085.refDistance,
              rolloffFactor: typeof v1081.rolloffFactor !== "undefined" ? v1081.rolloffFactor : v1085.rolloffFactor,
              panningModel: typeof v1081.panningModel !== "undefined" ? v1081.panningModel : v1085.panningModel
            };
            var v1086 = v1083._panner;
            if (!v1086) {
              if (!v1083._pos) {
                v1083._pos = vThis129._pos || [0, 0, -0.5];
              }
              f253(v1083, "spatial");
              v1086 = v1083._panner;
            }
            v1086.coneInnerAngle = v1085.coneInnerAngle;
            v1086.coneOuterAngle = v1085.coneOuterAngle;
            v1086.coneOuterGain = v1085.coneOuterGain;
            v1086.distanceModel = v1085.distanceModel;
            v1086.maxDistance = v1085.maxDistance;
            v1086.refDistance = v1085.refDistance;
            v1086.rolloffFactor = v1085.rolloffFactor;
            v1086.panningModel = v1085.panningModel;
          }
        }
        return vThis129;
      };
      Sound.prototype.init = function (p1211) {
        return function () {
          var vThis130 = this;
          var v1087 = vThis130._parent;
          vThis130._orientation = v1087._orientation;
          vThis130._stereo = v1087._stereo;
          vThis130._pos = v1087._pos;
          vThis130._pannerAttr = v1087._pannerAttr;
          p1211.call(this);
          if (vThis130._stereo) {
            v1087.stereo(vThis130._stereo);
          } else if (vThis130._pos) {
            v1087.pos(vThis130._pos[0], vThis130._pos[1], vThis130._pos[2], vThis130._id);
          }
        };
      }(Sound.prototype.init);
      Sound.prototype.reset = function (p1212) {
        return function () {
          var vThis131 = this;
          var v1088 = vThis131._parent;
          vThis131._orientation = v1088._orientation;
          vThis131._stereo = v1088._stereo;
          vThis131._pos = v1088._pos;
          vThis131._pannerAttr = v1088._pannerAttr;
          if (vThis131._stereo) {
            v1088.stereo(vThis131._stereo);
          } else if (vThis131._pos) {
            v1088.pos(vThis131._pos[0], vThis131._pos[1], vThis131._pos[2], vThis131._id);
          } else if (vThis131._panner) {
            vThis131._panner.disconnect(0);
            vThis131._panner = undefined;
            v1088._refreshBuffer(vThis131);
          }
          return p1212.call(this);
        };
      }(Sound.prototype.reset);
      function f253(p1213, p1214) {
        p1214 = p1214 || "spatial";
        if (p1214 === "spatial") {
          p1213._panner = Howler.ctx.createPanner();
          p1213._panner.coneInnerAngle = p1213._pannerAttr.coneInnerAngle;
          p1213._panner.coneOuterAngle = p1213._pannerAttr.coneOuterAngle;
          p1213._panner.coneOuterGain = p1213._pannerAttr.coneOuterGain;
          p1213._panner.distanceModel = p1213._pannerAttr.distanceModel;
          p1213._panner.maxDistance = p1213._pannerAttr.maxDistance;
          p1213._panner.refDistance = p1213._pannerAttr.refDistance;
          p1213._panner.rolloffFactor = p1213._pannerAttr.rolloffFactor;
          p1213._panner.panningModel = p1213._pannerAttr.panningModel;
          if (typeof p1213._panner.positionX !== "undefined") {
            p1213._panner.positionX.setValueAtTime(p1213._pos[0], Howler.ctx.currentTime);
            p1213._panner.positionY.setValueAtTime(p1213._pos[1], Howler.ctx.currentTime);
            p1213._panner.positionZ.setValueAtTime(p1213._pos[2], Howler.ctx.currentTime);
          } else {
            p1213._panner.setPosition(p1213._pos[0], p1213._pos[1], p1213._pos[2]);
          }
          if (typeof p1213._panner.orientationX !== "undefined") {
            p1213._panner.orientationX.setValueAtTime(p1213._orientation[0], Howler.ctx.currentTime);
            p1213._panner.orientationY.setValueAtTime(p1213._orientation[1], Howler.ctx.currentTime);
            p1213._panner.orientationZ.setValueAtTime(p1213._orientation[2], Howler.ctx.currentTime);
          } else {
            p1213._panner.setOrientation(p1213._orientation[0], p1213._orientation[1], p1213._orientation[2]);
          }
        } else {
          p1213._panner = Howler.ctx.createStereoPanner();
          p1213._panner.pan.setValueAtTime(p1213._stereo, Howler.ctx.currentTime);
        }
        p1213._panner.connect(p1213._node);
        if (!p1213._paused) {
          p1213._parent.pause(p1213._id, true).play(p1213._id, true);
        }
      }
    })();
  }, (p1215, p1216, p1217) => {
    'use strict';

    Object.defineProperty(p1216, "__esModule", {
      value: true
    });
    p1216.SchemaSerializer = p1216.registerSerializer = p1216.Auth = p1216.Room = p1216.ErrorCode = p1216.Protocol = p1216.MatchMakeError = p1216.Client = undefined;
    p1217(3);
    var vP1217 = p1217(4);
    Object.defineProperty(p1216, "Client", {
      enumerable: true,
      get: function () {
        return vP1217.Client;
      }
    });
    Object.defineProperty(p1216, "MatchMakeError", {
      enumerable: true,
      get: function () {
        return vP1217.MatchMakeError;
      }
    });
    var vP12172 = p1217(11);
    Object.defineProperty(p1216, "Protocol", {
      enumerable: true,
      get: function () {
        return vP12172.Protocol;
      }
    });
    Object.defineProperty(p1216, "ErrorCode", {
      enumerable: true,
      get: function () {
        return vP12172.ErrorCode;
      }
    });
    var vP12173 = p1217(6);
    Object.defineProperty(p1216, "Room", {
      enumerable: true,
      get: function () {
        return vP12173.Room;
      }
    });
    var vP12174 = p1217(18);
    Object.defineProperty(p1216, "Auth", {
      enumerable: true,
      get: function () {
        return vP12174.Auth;
      }
    });
    const vP12175 = p1217(21);
    Object.defineProperty(p1216, "SchemaSerializer", {
      enumerable: true,
      get: function () {
        return vP12175.SchemaSerializer;
      }
    });
    const vP12176 = p1217(22);
    const vP12177 = p1217(12);
    Object.defineProperty(p1216, "registerSerializer", {
      enumerable: true,
      get: function () {
        return vP12177.registerSerializer;
      }
    });
    (0, vP12177.registerSerializer)("schema", vP12175.SchemaSerializer);
    (0, vP12177.registerSerializer)("none", vP12176.NoneSerializer);
  }, () => {
    if (!ArrayBuffer.isView) {
      ArrayBuffer.isView = p1218 => {
        return p1218 !== null && typeof p1218 === "object" && p1218.buffer instanceof ArrayBuffer;
      };
    }
    if (typeof globalThis === "undefined" && typeof window !== "undefined") {
      window.globalThis = window;
    }
  }, function (p1219, p1220, p1221) {
    'use strict';

    var v1089 = this && this.__awaiter || function (p1222, p1223, p1224, p1225) {
      function f254(p1226) {
        if (p1226 instanceof p1224) {
          return p1226;
        } else {
          return new p1224(function (p1227) {
            p1227(p1226);
          });
        }
      }
      return new (p1224 ||= Promise)(function (p1228, p1229) {
        function f255(p1230) {
          try {
            f257(p1225.next(p1230));
          } catch (e56) {
            p1229(e56);
          }
        }
        function f256(p1231) {
          try {
            f257(p1225.throw(p1231));
          } catch (e57) {
            p1229(e57);
          }
        }
        function f257(p1232) {
          if (p1232.done) {
            p1228(p1232.value);
          } else {
            f254(p1232.value).then(f255, f256);
          }
        }
        f257((p1225 = p1225.apply(p1222, p1223 || [])).next());
      });
    };
    Object.defineProperty(p1220, "__esModule", {
      value: true
    });
    p1220.Client = p1220.MatchMakeError = undefined;
    const vP1221 = p1221(5);
    const vP12212 = p1221(6);
    const vP12213 = p1221(16);
    const vP12214 = p1221(18);
    const vP12215 = p1221(20);
    class C extends Error {
      constructor(p1233, p1234) {
        super(p1233);
        this.code = p1234;
        Object.setPrototypeOf(this, C.prototype);
      }
    }
    p1220.MatchMakeError = C;
    const v1090 = typeof window !== "undefined" && typeof window?.location?.hostname !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";
    class C2 {
      constructor(p1235 = v1090, p1236) {
        var v1091;
        if (typeof p1235 === "string") {
          const v1092 = p1235.startsWith("/") ? new URL(p1235, v1090) : new URL(p1235);
          const v1093 = v1092.protocol === "https:" || v1092.protocol === "wss:";
          const vNumber = Number(v1092.port || (v1093 ? 443 : 80));
          this.settings = {
            hostname: v1092.hostname,
            pathname: v1092.pathname,
            port: vNumber,
            secure: v1093
          };
        } else {
          if (p1235.port === undefined) {
            p1235.port = p1235.secure ? 443 : 80;
          }
          if (p1235.pathname === undefined) {
            p1235.pathname = "";
          }
          this.settings = p1235;
        }
        if (this.settings.pathname.endsWith("/")) {
          this.settings.pathname = this.settings.pathname.slice(0, -1);
        }
        this.http = new vP12213.HTTP(this, p1236?.headers || {});
        this.auth = new vP12214.Auth(this.http);
        this.urlBuilder = p1236?.urlBuilder;
        if (!this.urlBuilder && typeof window !== "undefined" && ((v1091 = window?.location?.hostname) === null || v1091 === undefined ? undefined : v1091.includes("discordsays.com"))) {
          this.urlBuilder = vP12215.discordURLBuilder;
          console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.");
        }
      }
      joinOrCreate(p1237, p1238 = {}, p1239) {
        return v1089(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("joinOrCreate", p1237, p1238, p1239);
        });
      }
      create(p1240, p1241 = {}, p1242) {
        return v1089(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("create", p1240, p1241, p1242);
        });
      }
      join(p1243, p1244 = {}, p1245) {
        return v1089(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("join", p1243, p1244, p1245);
        });
      }
      joinById(p1246, p1247 = {}, p1248) {
        return v1089(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("joinById", p1246, p1247, p1248);
        });
      }
      reconnect(p1249, p1250) {
        return v1089(this, undefined, undefined, function* () {
          if (typeof p1249 === "string" && typeof p1250 === "string") {
            throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          }
          const [v1094, v1095] = p1249.split(":");
          if (!v1094 || !v1095) {
            throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          }
          return yield this.createMatchMakeRequest("reconnect", v1094, {
            reconnectionToken: v1095
          }, p1250);
        });
      }
      getAvailableRooms(p1251 = "") {
        return v1089(this, undefined, undefined, function* () {
          return (yield this.http.get("matchmake/" + p1251, {
            headers: {
              Accept: "application/json"
            }
          })).data;
        });
      }
      consumeSeatReservation(p1252, p1253, p1254) {
        return v1089(this, undefined, undefined, function* () {
          const v1096 = this.createRoom(p1252.room.name, p1253);
          v1096.roomId = p1252.room.roomId;
          v1096.sessionId = p1252.sessionId;
          const vO59 = {
            sessionId: v1096.sessionId
          };
          if (p1252.reconnectionToken) {
            vO59.reconnectionToken = p1252.reconnectionToken;
          }
          const v1097 = p1254 || v1096;
          v1096.connect(this.buildEndpoint(p1252.room, vO59), p1252.devMode && (() => v1089(this, undefined, undefined, function* () {
            console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " Re-establishing connection with room id '" + v1096.roomId + "'...");
            let vLN0179 = 0;
            let vLN8 = 8;
            const vF22 = () => v1089(this, undefined, undefined, function* () {
              vLN0179++;
              try {
                yield this.consumeSeatReservation(p1252, p1253, v1097);
                console.info("[Colyseus devMode]: " + String.fromCodePoint(9989) + " Successfully re-established connection with room '" + v1096.roomId + "'");
              } catch (e58) {
                if (vLN0179 < vLN8) {
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " retrying... (" + vLN0179 + " out of " + vLN8 + ")");
                  setTimeout(vF22, 2000);
                } else {
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(10060) + " Failed to reconnect. Is your server running? Please check server logs.");
                }
              }
            });
            setTimeout(vF22, 2000);
          })), v1097, this.http.headers);
          return new Promise((p1255, p1256) => {
            const vF23 = (p1257, p1258) => p1256(new vP1221.ServerError(p1257, p1258));
            v1097.onError.once(vF23);
            v1097.onJoin.once(() => {
              v1097.onError.remove(vF23);
              p1255(v1097);
            });
          });
        });
      }
      createMatchMakeRequest(p1259, p1260, p1261 = {}, p1262, p1263) {
        return v1089(this, undefined, undefined, function* () {
          const v1098 = (yield this.http.post("matchmake/" + p1259 + "/" + p1260, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(p1261)
          })).data;
          if (v1098.error) {
            throw new C(v1098.error, v1098.code);
          }
          if (p1259 === "reconnect") {
            v1098.reconnectionToken = p1261.reconnectionToken;
          }
          return yield this.consumeSeatReservation(v1098, p1262, p1263);
        });
      }
      createRoom(p1264, p1265) {
        return new vP12212.Room(p1264, p1265);
      }
      buildEndpoint(p1266, p1267 = {}) {
        const vA22 = [];
        for (const v1099 in p1267) {
          if (!p1267.hasOwnProperty(v1099)) {
            continue;
          }
          vA22.push(v1099 + "=" + p1267[v1099]);
        }
        let v1100 = this.settings.secure ? "wss://" : "ws://";
        if (p1266.publicAddress) {
          v1100 += "" + p1266.publicAddress;
        } else {
          v1100 += "" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname;
        }
        const v1101 = v1100 + "/" + p1266.processId + "/" + p1266.roomId + "?" + vA22.join("&");
        if (this.urlBuilder) {
          return this.urlBuilder(new URL(v1101));
        } else {
          return v1101;
        }
      }
      getHttpEndpoint(p1268 = "") {
        const v1102 = p1268.startsWith("/") ? p1268 : "/" + p1268;
        const v1103 = (this.settings.secure ? "https" : "http") + "://" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname + v1102;
        if (this.urlBuilder) {
          return this.urlBuilder(new URL(v1103));
        } else {
          return v1103;
        }
      }
      getEndpointPort() {
        if (this.settings.port !== 80 && this.settings.port !== 443) {
          return ":" + this.settings.port;
        } else {
          return "";
        }
      }
    }
    p1220.Client = C2;
  }, (p1269, p1270) => {
    'use strict';

    Object.defineProperty(p1270, "__esModule", {
      value: true
    });
    p1270.ServerError = p1270.CloseCode = undefined;
    var v1104;
    (function (p1271) {
      p1271[p1271.CONSENTED = 4000] = "CONSENTED";
      p1271[p1271.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    })(v1104 = p1270.CloseCode ||= {});
    class C3 extends Error {
      constructor(p1272, p1273) {
        super(p1273);
        this.name = "ServerError";
        this.code = p1272;
      }
    }
    p1270.ServerError = C3;
  }, function (p1274, p1275, p1276) {
    'use strict';

    var v1105 = this && this.__createBinding || (Object.create ? function (p1277, p1278, p1279, p1280 = p1279) {
      var v1106 = Object.getOwnPropertyDescriptor(p1278, p1279);
      if (!v1106 || ("get" in v1106 ? !p1278.__esModule : v1106.writable || v1106.configurable)) {
        v1106 = {
          enumerable: true,
          get: function () {
            return p1278[p1279];
          }
        };
      }
      Object.defineProperty(p1277, p1280, v1106);
    } : function (p1281, p1282, p1283, p1284 = p1283) {
      p1281[p1284] = p1282[p1283];
    });
    var v1107 = this && this.__setModuleDefault || (Object.create ? function (p1285, p1286) {
      Object.defineProperty(p1285, "default", {
        enumerable: true,
        value: p1286
      });
    } : function (p1287, p1288) {
      p1287.default = p1288;
    });
    var v1108 = this && this.__importStar || function (p1289) {
      if (p1289 && p1289.__esModule) {
        return p1289;
      }
      var vO60 = {};
      if (p1289 != null) {
        for (var v1109 in p1289) {
          if (v1109 !== "default" && Object.prototype.hasOwnProperty.call(p1289, v1109)) {
            v1105(vO60, p1289, v1109);
          }
        }
      }
      v1107(vO60, p1289);
      return vO60;
    };
    Object.defineProperty(p1275, "__esModule", {
      value: true
    });
    p1275.Room = undefined;
    const vV1108 = v1108(p1276(7));
    const vP1276 = p1276(8);
    const vP12762 = p1276(11);
    const vP12763 = p1276(12);
    const vP12764 = p1276(13);
    const vP12765 = p1276(14);
    const vP12766 = p1276(15);
    const vP12767 = p1276(5);
    class C4 {
      constructor(p1290, p1291) {
        this.onStateChange = (0, vP12765.createSignal)();
        this.onError = (0, vP12765.createSignal)();
        this.onLeave = (0, vP12765.createSignal)();
        this.onJoin = (0, vP12765.createSignal)();
        this.hasJoined = false;
        this.onMessageHandlers = (0, vP12764.createNanoEvents)();
        this.roomId = null;
        this.name = p1290;
        if (p1291) {
          this.serializer = new ((0, vP12763.getSerializer)("schema"))();
          this.rootSchema = p1291;
          this.serializer.state = new p1291();
        }
        this.onError((p1292, p1293) => {
          var v1110;
          if ((v1110 = console.warn) === null || v1110 === undefined) {
            return undefined;
          } else {
            return v1110.call(console, "colyseus.js - onError => (" + p1292 + ") " + p1293);
          }
        });
        this.onLeave(() => this.removeAllListeners());
      }
      get id() {
        return this.roomId;
      }
      connect(p1294, p1295, p1296 = this, p1297) {
        const v1111 = new vP1276.Connection();
        p1296.connection = v1111;
        v1111.events.onmessage = C4.prototype.onMessageCallback.bind(p1296);
        v1111.events.onclose = function (p1298) {
          var v1112;
          if (!p1296.hasJoined) {
            if ((v1112 = console.warn) === null || v1112 === undefined) {
              undefined;
            } else {
              v1112.call(console, "Room connection was closed unexpectedly (" + p1298.code + "): " + p1298.reason);
            }
            p1296.onError.invoke(p1298.code, p1298.reason);
            return;
          }
          if (p1298.code === vP12767.CloseCode.DEVMODE_RESTART && p1295) {
            p1295();
          } else {
            p1296.onLeave.invoke(p1298.code, p1298.reason);
            p1296.destroy();
          }
        };
        v1111.events.onerror = function (p1299) {
          var v1113;
          if ((v1113 = console.warn) === null || v1113 === undefined) {
            undefined;
          } else {
            v1113.call(console, "Room, onError (" + p1299.code + "): " + p1299.reason);
          }
          p1296.onError.invoke(p1299.code, p1299.reason);
        };
        v1111.connect(p1294, p1297);
      }
      leave(p1300 = true) {
        return new Promise(p1301 => {
          this.onLeave(p1302 => p1301(p1302));
          if (this.connection) {
            if (p1300) {
              this.connection.send([vP12762.Protocol.LEAVE_ROOM]);
            } else {
              this.connection.close();
            }
          } else {
            this.onLeave.invoke(vP12767.CloseCode.CONSENTED);
          }
        });
      }
      onMessage(p1303, p1304) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(p1303), p1304);
      }
      send(p1305, p1306) {
        const vA23 = [vP12762.Protocol.ROOM_DATA];
        if (typeof p1305 === "string") {
          vP12766.encode.string(vA23, p1305);
        } else {
          vP12766.encode.number(vA23, p1305);
        }
        let v1114;
        if (p1306 !== undefined) {
          const v1115 = vV1108.encode(p1306);
          v1114 = new Uint8Array(vA23.length + v1115.byteLength);
          v1114.set(new Uint8Array(vA23), 0);
          v1114.set(new Uint8Array(v1115), vA23.length);
        } else {
          v1114 = new Uint8Array(vA23);
        }
        this.connection.send(v1114.buffer);
      }
      sendBytes(p1307, p1308) {
        const vA24 = [vP12762.Protocol.ROOM_DATA_BYTES];
        if (typeof p1307 === "string") {
          vP12766.encode.string(vA24, p1307);
        } else {
          vP12766.encode.number(vA24, p1307);
        }
        let v1116;
        v1116 = new Uint8Array(vA24.length + (p1308.byteLength || p1308.length));
        v1116.set(new Uint8Array(vA24), 0);
        v1116.set(new Uint8Array(p1308), vA24.length);
        this.connection.send(v1116.buffer);
      }
      get state() {
        return this.serializer.getState();
      }
      removeAllListeners() {
        this.onJoin.clear();
        this.onStateChange.clear();
        this.onError.clear();
        this.onLeave.clear();
        this.onMessageHandlers.events = {};
      }
      onMessageCallback(p1309) {
        const v1117 = Array.from(new Uint8Array(p1309.data));
        const v1118 = v1117[0];
        if (v1118 === vP12762.Protocol.JOIN_ROOM) {
          let vLN113 = 1;
          const v1119 = (0, vP12762.utf8Read)(v1117, vLN113);
          vLN113 += (0, vP12762.utf8Length)(v1119);
          this.serializerId = (0, vP12762.utf8Read)(v1117, vLN113);
          vLN113 += (0, vP12762.utf8Length)(this.serializerId);
          if (!this.serializer) {
            const v1120 = (0, vP12763.getSerializer)(this.serializerId);
            this.serializer = new v1120();
          }
          if (v1117.length > vLN113 && this.serializer.handshake) {
            this.serializer.handshake(v1117, {
              offset: vLN113
            });
          }
          this.reconnectionToken = this.roomId + ":" + v1119;
          this.hasJoined = true;
          this.onJoin.invoke();
          this.connection.send([vP12762.Protocol.JOIN_ROOM]);
        } else if (v1118 === vP12762.Protocol.ERROR) {
          const vO61 = {
            offset: 1
          };
          const v1121 = vP12766.decode.number(v1117, vO61);
          const v1122 = vP12766.decode.string(v1117, vO61);
          this.onError.invoke(v1121, v1122);
        } else if (v1118 === vP12762.Protocol.LEAVE_ROOM) {
          this.leave();
        } else if (v1118 === vP12762.Protocol.ROOM_DATA_SCHEMA) {
          const vO62 = {
            offset: 1
          };
          const v1123 = this.serializer.getState().constructor._context;
          const v1124 = v1123.get(vP12766.decode.number(v1117, vO62));
          const v1125 = new v1124();
          v1125.decode(v1117, vO62);
          this.dispatchMessage(v1124, v1125);
        } else if (v1118 === vP12762.Protocol.ROOM_STATE) {
          v1117.shift();
          this.setState(v1117);
        } else if (v1118 === vP12762.Protocol.ROOM_STATE_PATCH) {
          v1117.shift();
          this.patch(v1117);
        } else if (v1118 === vP12762.Protocol.ROOM_DATA) {
          const vO63 = {
            offset: 1
          };
          const v1126 = vP12766.decode.stringCheck(v1117, vO63) ? vP12766.decode.string(v1117, vO63) : vP12766.decode.number(v1117, vO63);
          const v1127 = v1117.length > vO63.offset ? vV1108.decode(p1309.data, vO63.offset) : undefined;
          this.dispatchMessage(v1126, v1127);
        } else if (v1118 === vP12762.Protocol.ROOM_DATA_BYTES) {
          const vO64 = {
            offset: 1
          };
          const v1128 = vP12766.decode.stringCheck(v1117, vO64) ? vP12766.decode.string(v1117, vO64) : vP12766.decode.number(v1117, vO64);
          this.dispatchMessage(v1128, new Uint8Array(v1117.slice(vO64.offset)));
        }
      }
      setState(p1310) {
        this.serializer.setState(p1310);
        this.onStateChange.invoke(this.serializer.getState());
      }
      patch(p1311) {
        this.serializer.patch(p1311);
        this.onStateChange.invoke(this.serializer.getState());
      }
      dispatchMessage(p1312, p1313) {
        var v1129;
        const v1130 = this.getMessageHandlerKey(p1312);
        if (this.onMessageHandlers.events[v1130]) {
          this.onMessageHandlers.emit(v1130, p1313);
        } else if (this.onMessageHandlers.events["*"]) {
          this.onMessageHandlers.emit("*", p1312, p1313);
        } else if ((v1129 = console.warn) === null || v1129 === undefined) {
          undefined;
        } else {
          v1129.call(console, "colyseus.js: onMessage() not registered for type '" + p1312 + "'.");
        }
      }
      destroy() {
        if (this.serializer) {
          this.serializer.teardown();
        }
      }
      getMessageHandlerKey(p1314) {
        switch (typeof p1314) {
          case "function":
            return "$" + p1314._typeid;
          case "string":
            return p1314;
          case "number":
            return "i" + p1314;
          default:
            throw new Error("invalid message type.");
        }
      }
    }
    p1275.Room = C4;
  }, (p1315, p1316) => {
    'use strict';

    Object.defineProperty(p1316, "__esModule", {
      value: true
    });
    p1316.decode = p1316.encode = undefined;
    function f258(p1317, p1318) {
      this._offset = p1318;
      if (p1317 instanceof ArrayBuffer) {
        this._buffer = p1317;
        this._view = new DataView(this._buffer);
      } else if (ArrayBuffer.isView(p1317)) {
        this._buffer = p1317.buffer;
        this._view = new DataView(this._buffer, p1317.byteOffset, p1317.byteLength);
      } else {
        throw new Error("Invalid argument");
      }
    }
    function f259(p1319, p1320, p1321) {
      var vLS12 = "";
      var vLN0180 = 0;
      for (var vP1320 = p1320, v1131 = p1320 + p1321; vP1320 < v1131; vP1320++) {
        var v1132 = p1319.getUint8(vP1320);
        if ((v1132 & 128) === 0) {
          vLS12 += String.fromCharCode(v1132);
          continue;
        }
        if ((v1132 & 224) === 192) {
          vLS12 += String.fromCharCode((v1132 & 31) << 6 | p1319.getUint8(++vP1320) & 63);
          continue;
        }
        if ((v1132 & 240) === 224) {
          vLS12 += String.fromCharCode((v1132 & 15) << 12 | (p1319.getUint8(++vP1320) & 63) << 6 | (p1319.getUint8(++vP1320) & 63) << 0);
          continue;
        }
        if ((v1132 & 248) === 240) {
          vLN0180 = (v1132 & 7) << 18 | (p1319.getUint8(++vP1320) & 63) << 12 | (p1319.getUint8(++vP1320) & 63) << 6 | (p1319.getUint8(++vP1320) & 63) << 0;
          if (vLN0180 >= 65536) {
            vLN0180 -= 65536;
            vLS12 += String.fromCharCode((vLN0180 >>> 10) + 55296, (vLN0180 & 1023) + 56320);
          } else {
            vLS12 += String.fromCharCode(vLN0180);
          }
          continue;
        }
        throw new Error("Invalid byte " + v1132.toString(16));
      }
      return vLS12;
    }
    f258.prototype._array = function (p1322) {
      var v1133 = new Array(p1322);
      for (var vLN0181 = 0; vLN0181 < p1322; vLN0181++) {
        v1133[vLN0181] = this._parse();
      }
      return v1133;
    };
    f258.prototype._map = function (p1323) {
      var vLS13 = "";
      var vO65 = {};
      for (var vLN0182 = 0; vLN0182 < p1323; vLN0182++) {
        vLS13 = this._parse();
        vO65[vLS13] = this._parse();
      }
      return vO65;
    };
    f258.prototype._str = function (p1324) {
      var vF259 = f259(this._view, this._offset, p1324);
      this._offset += p1324;
      return vF259;
    };
    f258.prototype._bin = function (p1325) {
      var v1134 = this._buffer.slice(this._offset, this._offset + p1325);
      this._offset += p1325;
      return v1134;
    };
    f258.prototype._parse = function () {
      var v1135 = this._view.getUint8(this._offset++);
      var v1136;
      var vLN0183 = 0;
      var vLN0184 = 0;
      var vLN0185 = 0;
      var vLN0186 = 0;
      if (v1135 < 192) {
        if (v1135 < 128) {
          return v1135;
        }
        if (v1135 < 144) {
          return this._map(v1135 & 15);
        }
        if (v1135 < 160) {
          return this._array(v1135 & 15);
        }
        return this._str(v1135 & 31);
      }
      if (v1135 > 223) {
        return (255 - v1135 + 1) * -1;
      }
      switch (v1135) {
        case 192:
          return null;
        case 194:
          return false;
        case 195:
          return true;
        case 196:
          vLN0183 = this._view.getUint8(this._offset);
          this._offset += 1;
          return this._bin(vLN0183);
        case 197:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._bin(vLN0183);
        case 198:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._bin(vLN0183);
        case 199:
          vLN0183 = this._view.getUint8(this._offset);
          vLN0184 = this._view.getInt8(this._offset + 1);
          this._offset += 2;
          if (vLN0184 === -1) {
            var v1137 = this._view.getUint32(this._offset);
            vLN0185 = this._view.getInt32(this._offset + 4);
            vLN0186 = this._view.getUint32(this._offset + 8);
            this._offset += 12;
            return new Date((vLN0185 * 4294967296 + vLN0186) * 1000 + v1137 / 1000000);
          }
          return [vLN0184, this._bin(vLN0183)];
        case 200:
          vLN0183 = this._view.getUint16(this._offset);
          vLN0184 = this._view.getInt8(this._offset + 2);
          this._offset += 3;
          return [vLN0184, this._bin(vLN0183)];
        case 201:
          vLN0183 = this._view.getUint32(this._offset);
          vLN0184 = this._view.getInt8(this._offset + 4);
          this._offset += 5;
          return [vLN0184, this._bin(vLN0183)];
        case 202:
          v1136 = this._view.getFloat32(this._offset);
          this._offset += 4;
          return v1136;
        case 203:
          v1136 = this._view.getFloat64(this._offset);
          this._offset += 8;
          return v1136;
        case 204:
          v1136 = this._view.getUint8(this._offset);
          this._offset += 1;
          return v1136;
        case 205:
          v1136 = this._view.getUint16(this._offset);
          this._offset += 2;
          return v1136;
        case 206:
          v1136 = this._view.getUint32(this._offset);
          this._offset += 4;
          return v1136;
        case 207:
          vLN0185 = this._view.getUint32(this._offset) * Math.pow(2, 32);
          vLN0186 = this._view.getUint32(this._offset + 4);
          this._offset += 8;
          return vLN0185 + vLN0186;
        case 208:
          v1136 = this._view.getInt8(this._offset);
          this._offset += 1;
          return v1136;
        case 209:
          v1136 = this._view.getInt16(this._offset);
          this._offset += 2;
          return v1136;
        case 210:
          v1136 = this._view.getInt32(this._offset);
          this._offset += 4;
          return v1136;
        case 211:
          vLN0185 = this._view.getInt32(this._offset) * Math.pow(2, 32);
          vLN0186 = this._view.getUint32(this._offset + 4);
          this._offset += 8;
          return vLN0185 + vLN0186;
        case 212:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0184 === 0) {
            this._offset += 1;
            return undefined;
          }
          return [vLN0184, this._bin(1)];
        case 213:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          return [vLN0184, this._bin(2)];
        case 214:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0184 === -1) {
            v1136 = this._view.getUint32(this._offset);
            this._offset += 4;
            return new Date(v1136 * 1000);
          }
          return [vLN0184, this._bin(4)];
        case 215:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0184 === 0) {
            vLN0185 = this._view.getInt32(this._offset) * Math.pow(2, 32);
            vLN0186 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return new Date(vLN0185 + vLN0186);
          }
          if (vLN0184 === -1) {
            vLN0185 = this._view.getUint32(this._offset);
            vLN0186 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            var v1138 = (vLN0185 & 3) * 4294967296 + vLN0186;
            return new Date(v1138 * 1000 + (vLN0185 >>> 2) / 1000000);
          }
          return [vLN0184, this._bin(8)];
        case 216:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          return [vLN0184, this._bin(16)];
        case 217:
          vLN0183 = this._view.getUint8(this._offset);
          this._offset += 1;
          return this._str(vLN0183);
        case 218:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._str(vLN0183);
        case 219:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._str(vLN0183);
        case 220:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._array(vLN0183);
        case 221:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._array(vLN0183);
        case 222:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._map(vLN0183);
        case 223:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._map(vLN0183);
      }
      throw new Error("Could not parse");
    };
    function f260(p1326, p1327 = 0) {
      var v1139 = new f258(p1326, p1327);
      var v1140 = v1139._parse();
      if (v1139._offset !== p1326.byteLength) {
        throw new Error(p1326.byteLength - v1139._offset + " trailing bytes");
      }
      return v1140;
    }
    p1316.decode = f260;
    var vLN4294967295 = 4294967295;
    var vLN17179869183 = 17179869183;
    function f261(p1328, p1329, p1330) {
      var vLN0187 = 0;
      for (var vLN0188 = 0, v1141 = p1330.length; vLN0188 < v1141; vLN0188++) {
        vLN0187 = p1330.charCodeAt(vLN0188);
        if (vLN0187 < 128) {
          p1328.setUint8(p1329++, vLN0187);
        } else if (vLN0187 < 2048) {
          p1328.setUint8(p1329++, vLN0187 >> 6 | 192);
          p1328.setUint8(p1329++, vLN0187 & 63 | 128);
        } else if (vLN0187 < 55296 || vLN0187 >= 57344) {
          p1328.setUint8(p1329++, vLN0187 >> 12 | 224);
          p1328.setUint8(p1329++, vLN0187 >> 6 & 63 | 128);
          p1328.setUint8(p1329++, vLN0187 & 63 | 128);
        } else {
          vLN0188++;
          vLN0187 = 65536 + ((vLN0187 & 1023) << 10 | p1330.charCodeAt(vLN0188) & 1023);
          p1328.setUint8(p1329++, vLN0187 >> 18 | 240);
          p1328.setUint8(p1329++, vLN0187 >> 12 & 63 | 128);
          p1328.setUint8(p1329++, vLN0187 >> 6 & 63 | 128);
          p1328.setUint8(p1329++, vLN0187 & 63 | 128);
        }
      }
    }
    function f262(p1331) {
      var vLN0189 = 0;
      var vLN0190 = 0;
      for (var vLN0191 = 0, v1142 = p1331.length; vLN0191 < v1142; vLN0191++) {
        vLN0189 = p1331.charCodeAt(vLN0191);
        if (vLN0189 < 128) {
          vLN0190 += 1;
        } else if (vLN0189 < 2048) {
          vLN0190 += 2;
        } else if (vLN0189 < 55296 || vLN0189 >= 57344) {
          vLN0190 += 3;
        } else {
          vLN0191++;
          vLN0190 += 4;
        }
      }
      return vLN0190;
    }
    function f263(p1332, p1333, p1334) {
      var v1143 = typeof p1334;
      var vLN0192 = 0;
      var vLN0193 = 0;
      var vLN0194 = 0;
      var vLN0195 = 0;
      var vLN0196 = 0;
      var vLN0197 = 0;
      if (v1143 === "string") {
        vLN0196 = f262(p1334);
        if (vLN0196 < 32) {
          p1332.push(vLN0196 | 160);
          vLN0197 = 1;
        } else if (vLN0196 < 256) {
          p1332.push(217, vLN0196);
          vLN0197 = 2;
        } else if (vLN0196 < 65536) {
          p1332.push(218, vLN0196 >> 8, vLN0196);
          vLN0197 = 3;
        } else if (vLN0196 < 4294967296) {
          p1332.push(219, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
          vLN0197 = 5;
        } else {
          throw new Error("String too long");
        }
        p1333.push({
          _str: p1334,
          _length: vLN0196,
          _offset: p1332.length
        });
        return vLN0197 + vLN0196;
      }
      if (v1143 === "number") {
        if (Math.floor(p1334) !== p1334 || !isFinite(p1334)) {
          p1332.push(203);
          p1333.push({
            _float: p1334,
            _length: 8,
            _offset: p1332.length
          });
          return 9;
        }
        if (p1334 >= 0) {
          if (p1334 < 128) {
            p1332.push(p1334);
            return 1;
          }
          if (p1334 < 256) {
            p1332.push(204, p1334);
            return 2;
          }
          if (p1334 < 65536) {
            p1332.push(205, p1334 >> 8, p1334);
            return 3;
          }
          if (p1334 < 4294967296) {
            p1332.push(206, p1334 >> 24, p1334 >> 16, p1334 >> 8, p1334);
            return 5;
          }
          vLN0194 = p1334 / Math.pow(2, 32) >> 0;
          vLN0195 = p1334 >>> 0;
          p1332.push(207, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
          return 9;
        } else {
          if (p1334 >= -32) {
            p1332.push(p1334);
            return 1;
          }
          if (p1334 >= -128) {
            p1332.push(208, p1334);
            return 2;
          }
          if (p1334 >= -32768) {
            p1332.push(209, p1334 >> 8, p1334);
            return 3;
          }
          if (p1334 >= -2147483648) {
            p1332.push(210, p1334 >> 24, p1334 >> 16, p1334 >> 8, p1334);
            return 5;
          }
          vLN0194 = Math.floor(p1334 / Math.pow(2, 32));
          vLN0195 = p1334 >>> 0;
          p1332.push(211, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
          return 9;
        }
      }
      if (v1143 === "object") {
        if (p1334 === null) {
          p1332.push(192);
          return 1;
        }
        if (Array.isArray(p1334)) {
          vLN0196 = p1334.length;
          if (vLN0196 < 16) {
            p1332.push(vLN0196 | 144);
            vLN0197 = 1;
          } else if (vLN0196 < 65536) {
            p1332.push(220, vLN0196 >> 8, vLN0196);
            vLN0197 = 3;
          } else if (vLN0196 < 4294967296) {
            p1332.push(221, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
            vLN0197 = 5;
          } else {
            throw new Error("Array too large");
          }
          for (vLN0192 = 0; vLN0192 < vLN0196; vLN0192++) {
            vLN0197 += f263(p1332, p1333, p1334[vLN0192]);
          }
          return vLN0197;
        }
        if (p1334 instanceof Date) {
          var v1144 = p1334.getTime();
          var v1145 = Math.floor(v1144 / 1000);
          var v1146 = (v1144 - v1145 * 1000) * 1000000;
          if (v1145 >= 0 && v1146 >= 0 && v1145 <= vLN17179869183) {
            if (v1146 === 0 && v1145 <= vLN4294967295) {
              p1332.push(214, 255, v1145 >> 24, v1145 >> 16, v1145 >> 8, v1145);
              return 6;
            } else {
              vLN0194 = v1145 / 4294967296;
              vLN0195 = v1145 & -1;
              p1332.push(215, 255, v1146 >> 22, v1146 >> 14, v1146 >> 6, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
              return 10;
            }
          } else {
            vLN0194 = Math.floor(v1145 / 4294967296);
            vLN0195 = v1145 >>> 0;
            p1332.push(199, 12, 255, v1146 >> 24, v1146 >> 16, v1146 >> 8, v1146, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
            return 15;
          }
        }
        if (p1334 instanceof ArrayBuffer) {
          vLN0196 = p1334.byteLength;
          if (vLN0196 < 256) {
            p1332.push(196, vLN0196);
            vLN0197 = 2;
          } else if (vLN0196 < 65536) {
            p1332.push(197, vLN0196 >> 8, vLN0196);
            vLN0197 = 3;
          } else if (vLN0196 < 4294967296) {
            p1332.push(198, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
            vLN0197 = 5;
          } else {
            throw new Error("Buffer too large");
          }
          p1333.push({
            _bin: p1334,
            _length: vLN0196,
            _offset: p1332.length
          });
          return vLN0197 + vLN0196;
        }
        if (typeof p1334.toJSON === "function") {
          return f263(p1332, p1333, p1334.toJSON());
        }
        var vA25 = [];
        var vLS14 = "";
        var v1147 = Object.keys(p1334);
        vLN0192 = 0;
        vLN0193 = v1147.length;
        for (; vLN0192 < vLN0193; vLN0192++) {
          vLS14 = v1147[vLN0192];
          if (p1334[vLS14] !== undefined && typeof p1334[vLS14] !== "function") {
            vA25.push(vLS14);
          }
        }
        vLN0196 = vA25.length;
        if (vLN0196 < 16) {
          p1332.push(vLN0196 | 128);
          vLN0197 = 1;
        } else if (vLN0196 < 65536) {
          p1332.push(222, vLN0196 >> 8, vLN0196);
          vLN0197 = 3;
        } else if (vLN0196 < 4294967296) {
          p1332.push(223, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
          vLN0197 = 5;
        } else {
          throw new Error("Object too large");
        }
        for (vLN0192 = 0; vLN0192 < vLN0196; vLN0192++) {
          vLS14 = vA25[vLN0192];
          vLN0197 += f263(p1332, p1333, vLS14);
          vLN0197 += f263(p1332, p1333, p1334[vLS14]);
        }
        return vLN0197;
      }
      if (v1143 === "boolean") {
        p1332.push(p1334 ? 195 : 194);
        return 1;
      }
      if (v1143 === "undefined") {
        p1332.push(192);
        return 1;
      }
      if (typeof p1334.toJSON === "function") {
        return f263(p1332, p1333, p1334.toJSON());
      }
      throw new Error("Could not encode");
    }
    function f264(p1335) {
      var vA26 = [];
      var vA27 = [];
      var vF263 = f263(vA26, vA27, p1335);
      var v1148 = new ArrayBuffer(vF263);
      var v1149 = new DataView(v1148);
      var vLN0198 = 0;
      var vLN0199 = 0;
      var v1150 = -1;
      if (vA27.length > 0) {
        v1150 = vA27[0]._offset;
      }
      var v1151;
      var vLN0200 = 0;
      var vLN0201 = 0;
      for (var vLN0202 = 0, v1152 = vA26.length; vLN0202 < v1152; vLN0202++) {
        v1149.setUint8(vLN0199 + vLN0202, vA26[vLN0202]);
        if (vLN0202 + 1 !== v1150) {
          continue;
        }
        v1151 = vA27[vLN0198];
        vLN0200 = v1151._length;
        vLN0201 = vLN0199 + v1150;
        if (v1151._bin) {
          var v1153 = new Uint8Array(v1151._bin);
          for (var vLN0203 = 0; vLN0203 < vLN0200; vLN0203++) {
            v1149.setUint8(vLN0201 + vLN0203, v1153[vLN0203]);
          }
        } else if (v1151._str) {
          f261(v1149, vLN0201, v1151._str);
        } else if (v1151._float !== undefined) {
          v1149.setFloat64(vLN0201, v1151._float);
        }
        vLN0198++;
        vLN0199 += vLN0200;
        if (vA27[vLN0198]) {
          v1150 = vA27[vLN0198]._offset;
        }
      }
      return v1148;
    }
    p1316.encode = f264;
  }, (p1336, p1337, p1338) => {
    'use strict';

    Object.defineProperty(p1337, "__esModule", {
      value: true
    });
    p1337.Connection = undefined;
    const vP1338 = p1338(9);
    class C5 {
      constructor() {
        this.events = {};
        this.transport = new vP1338.WebSocketTransport(this.events);
      }
      send(p1339) {
        this.transport.send(p1339);
      }
      connect(p1340, p1341) {
        this.transport.connect(p1340, p1341);
      }
      close(p1342, p1343) {
        this.transport.close(p1342, p1343);
      }
      get isOpen() {
        return this.transport.isOpen;
      }
    }
    p1337.Connection = C5;
  }, function (p1344, p1345, p1346) {
    'use strict';

    var v1154 = this && this.__importDefault || function (p1347) {
      if (p1347 && p1347.__esModule) {
        return p1347;
      } else {
        return {
          default: p1347
        };
      }
    };
    Object.defineProperty(p1345, "__esModule", {
      value: true
    });
    p1345.WebSocketTransport = undefined;
    const vV1154 = v1154(p1346(10));
    const v1155 = globalThis.WebSocket || vV1154.default;
    class C6 {
      constructor(p1348) {
        this.events = p1348;
      }
      send(p1349) {
        if (p1349 instanceof ArrayBuffer) {
          this.ws.send(p1349);
        } else if (Array.isArray(p1349)) {
          this.ws.send(new Uint8Array(p1349).buffer);
        }
      }
      connect(p1350, p1351) {
        try {
          this.ws = new v1155(p1350, {
            headers: p1351,
            protocols: this.protocols
          });
        } catch (e59) {
          this.ws = new v1155(p1350, this.protocols);
        }
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = this.events.onopen;
        this.ws.onmessage = this.events.onmessage;
        this.ws.onclose = this.events.onclose;
        this.ws.onerror = this.events.onerror;
      }
      close(p1352, p1353) {
        this.ws.close(p1352, p1353);
      }
      get isOpen() {
        return this.ws.readyState === v1155.OPEN;
      }
    }
    p1345.WebSocketTransport = C6;
  }, p1354 => {
    'use strict';

    p1354.exports = function () {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  }, (p1355, p1356) => {
    'use strict';

    Object.defineProperty(p1356, "__esModule", {
      value: true
    });
    p1356.utf8Length = p1356.utf8Read = p1356.ErrorCode = p1356.Protocol = undefined;
    var v1156;
    (function (p1357) {
      p1357[p1357.HANDSHAKE = 9] = "HANDSHAKE";
      p1357[p1357.JOIN_ROOM = 10] = "JOIN_ROOM";
      p1357[p1357.ERROR = 11] = "ERROR";
      p1357[p1357.LEAVE_ROOM = 12] = "LEAVE_ROOM";
      p1357[p1357.ROOM_DATA = 13] = "ROOM_DATA";
      p1357[p1357.ROOM_STATE = 14] = "ROOM_STATE";
      p1357[p1357.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH";
      p1357[p1357.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA";
      p1357[p1357.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES";
    })(v1156 = p1356.Protocol ||= {});
    var v1157;
    (function (p1358) {
      p1358[p1358.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER";
      p1358[p1358.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA";
      p1358[p1358.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
      p1358[p1358.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED";
      p1358[p1358.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED";
      p1358[p1358.AUTH_FAILED = 4215] = "AUTH_FAILED";
      p1358[p1358.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR";
    })(v1157 = p1356.ErrorCode ||= {});
    function f265(p1359, p1360) {
      const v1158 = p1359[p1360++];
      var vLS15 = "";
      var vLN0204 = 0;
      for (var vP1360 = p1360, v1159 = p1360 + v1158; vP1360 < v1159; vP1360++) {
        var v1160 = p1359[vP1360];
        if ((v1160 & 128) === 0) {
          vLS15 += String.fromCharCode(v1160);
          continue;
        }
        if ((v1160 & 224) === 192) {
          vLS15 += String.fromCharCode((v1160 & 31) << 6 | p1359[++vP1360] & 63);
          continue;
        }
        if ((v1160 & 240) === 224) {
          vLS15 += String.fromCharCode((v1160 & 15) << 12 | (p1359[++vP1360] & 63) << 6 | (p1359[++vP1360] & 63) << 0);
          continue;
        }
        if ((v1160 & 248) === 240) {
          vLN0204 = (v1160 & 7) << 18 | (p1359[++vP1360] & 63) << 12 | (p1359[++vP1360] & 63) << 6 | (p1359[++vP1360] & 63) << 0;
          if (vLN0204 >= 65536) {
            vLN0204 -= 65536;
            vLS15 += String.fromCharCode((vLN0204 >>> 10) + 55296, (vLN0204 & 1023) + 56320);
          } else {
            vLS15 += String.fromCharCode(vLN0204);
          }
          continue;
        }
        throw new Error("Invalid byte " + v1160.toString(16));
      }
      return vLS15;
    }
    p1356.utf8Read = f265;
    function f266(p1361 = "") {
      let vLN0205 = 0;
      let vLN0206 = 0;
      for (let vLN0207 = 0, v1161 = p1361.length; vLN0207 < v1161; vLN0207++) {
        vLN0205 = p1361.charCodeAt(vLN0207);
        if (vLN0205 < 128) {
          vLN0206 += 1;
        } else if (vLN0205 < 2048) {
          vLN0206 += 2;
        } else if (vLN0205 < 55296 || vLN0205 >= 57344) {
          vLN0206 += 3;
        } else {
          vLN0207++;
          vLN0206 += 4;
        }
      }
      return vLN0206 + 1;
    }
    p1356.utf8Length = f266;
  }, (p1362, p1363) => {
    'use strict';

    Object.defineProperty(p1363, "__esModule", {
      value: true
    });
    p1363.getSerializer = p1363.registerSerializer = undefined;
    const vO66 = {};
    function f267(p1364, p1365) {
      vO66[p1364] = p1365;
    }
    p1363.registerSerializer = f267;
    function f268(p1366) {
      const v1162 = vO66[p1366];
      if (!v1162) {
        throw new Error("missing serializer: " + p1366);
      }
      return v1162;
    }
    p1363.getSerializer = f268;
  }, (p1367, p1368) => {
    'use strict';

    Object.defineProperty(p1368, "__esModule", {
      value: true
    });
    p1368.createNanoEvents = undefined;
    const vF24 = () => ({
      emit(p1369, ..._0x5a46da) {
        let v1163 = this.events[p1369] || [];
        for (let vLN0208 = 0, v1164 = v1163.length; vLN0208 < v1164; vLN0208++) {
          v1163[vLN0208](..._0x5a46da);
        }
      },
      events: {},
      on(p1370, p1371) {
        var v1165;
        if (!((v1165 = this.events[p1370]) === null || v1165 === undefined ? undefined : v1165.push(p1371))) {
          this.events[p1370] = [p1371];
        }
        return () => {
          var v1166;
          this.events[p1370] = (v1166 = this.events[p1370]) === null || v1166 === undefined ? undefined : v1166.filter(p1372 => p1371 !== p1372);
        };
      }
    });
    p1368.createNanoEvents = vF24;
  }, (p1373, p1374) => {
    'use strict';

    Object.defineProperty(p1374, "__esModule", {
      value: true
    });
    p1374.createSignal = p1374.EventEmitter = undefined;
    class C7 {
      constructor() {
        this.handlers = [];
      }
      register(p1375, p1376 = false) {
        this.handlers.push(p1375);
        return this;
      }
      invoke(..._0xd67237) {
        this.handlers.forEach(p1377 => p1377.apply(this, _0xd67237));
      }
      invokeAsync(..._0x29a324) {
        return Promise.all(this.handlers.map(p1378 => p1378.apply(this, _0x29a324)));
      }
      remove(p1379) {
        const v1167 = this.handlers.indexOf(p1379);
        this.handlers[v1167] = this.handlers[this.handlers.length - 1];
        this.handlers.pop();
      }
      clear() {
        this.handlers = [];
      }
    }
    p1374.EventEmitter = C7;
    function f269() {
      const v1168 = new C7();
      function f270(p1380) {
        return v1168.register(p1380, this === null);
      }
      ;
      f270.once = p1381 => {
        const vF25 = function (..._0x1e7079) {
          p1381.apply(this, _0x1e7079);
          v1168.remove(vF25);
        };
        v1168.register(vF25);
      };
      f270.remove = p1382 => v1168.remove(p1382);
      f270.invoke = (..._0x44380d) => v1168.invoke(..._0x44380d);
      f270.invokeAsync = (..._0x7d8209) => v1168.invokeAsync(..._0x7d8209);
      f270.clear = () => v1168.clear();
      return f270;
    }
    p1374.createSignal = f269;
  }, function (p1383, p1384) {
    (function (p1385, p1386) {
      if (true) {
        p1386(p1384);
      } else {
        0;
      }
    })(this, function (p1387) {
      'use strict';

      function f271(p1388, p1389) {
        f271 = Object.setPrototypeOf || {
          "__proto__": []
        } instanceof Array && function (p1390, p1391) {
          p1390.__proto__ = p1391;
        } || function (p1392, p1393) {
          for (var v1169 in p1393) {
            if (Object.prototype.hasOwnProperty.call(p1393, v1169)) {
              p1392[v1169] = p1393[v1169];
            }
          }
        };
        return f271(p1388, p1389);
      }
      function f272(p1394, p1395) {
        if (typeof p1395 !== "function" && p1395 !== null) {
          throw new TypeError("Class extends value " + String(p1395) + " is not a constructor or null");
        }
        f271(p1394, p1395);
        function f273() {
          this.constructor = p1394;
        }
        p1394.prototype = p1395 === null ? Object.create(p1395) : (f273.prototype = p1395.prototype, new f273());
      }
      function f274(p1396, p1397, p1398, p1399) {
        var v1170 = arguments.length;
        var v1171 = v1170 < 3 ? p1397 : p1399 === null ? p1399 = Object.getOwnPropertyDescriptor(p1397, p1398) : p1399;
        var v1172;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
          v1171 = Reflect.decorate(p1396, p1397, p1398, p1399);
        } else {
          for (var v1173 = p1396.length - 1; v1173 >= 0; v1173--) {
            if (v1172 = p1396[v1173]) {
              v1171 = (v1170 < 3 ? v1172(v1171) : v1170 > 3 ? v1172(p1397, p1398, v1171) : v1172(p1397, p1398)) || v1171;
            }
          }
        }
        if (v1170 > 3 && v1171) {
          Object.defineProperty(p1397, p1398, v1171);
        }
        return v1171;
      }
      function f275(p1400, p1401, p1402) {
        if (p1402 || arguments.length === 2) {
          for (var vLN0209 = 0, v1174 = p1401.length, v1175; vLN0209 < v1174; vLN0209++) {
            if (v1175 || !(vLN0209 in p1401)) {
              if (!v1175) {
                v1175 = Array.prototype.slice.call(p1401, 0, vLN0209);
              }
              v1175[vLN0209] = p1401[vLN0209];
            }
          }
        }
        return p1400.concat(v1175 || Array.prototype.slice.call(p1401));
      }
      if (typeof SuppressedError === "function") {
        SuppressedError;
      } else {
        (function (p1403, p1404, p1405) {
          var v1176 = new Error(p1405);
          v1176.name = "SuppressedError";
          v1176.error = p1403;
          v1176.suppressed = p1404;
          return v1176;
        });
      }
      var vLN255 = 255;
      var vLN213 = 213;
      p1387.OPERATION = undefined;
      (function (p1406) {
        p1406[p1406.ADD = 128] = "ADD";
        p1406[p1406.REPLACE = 0] = "REPLACE";
        p1406[p1406.DELETE = 64] = "DELETE";
        p1406[p1406.DELETE_AND_ADD = 192] = "DELETE_AND_ADD";
        p1406[p1406.TOUCH = 1] = "TOUCH";
        p1406[p1406.CLEAR = 10] = "CLEAR";
      })(p1387.OPERATION ||= {});
      var vF26 = function () {
        function f276(p1407, p1408, p1409) {
          this.changed = false;
          this.changes = new Map();
          this.allChanges = new Set();
          this.caches = {};
          this.currentCustomOperation = 0;
          this.ref = p1407;
          this.setParent(p1408, p1409);
        }
        f276.prototype.setParent = function (p1410, p1411, p1412) {
          var vThis132 = this;
          if (!this.indexes) {
            this.indexes = this.ref instanceof vF38 ? this.ref._definition.indexes : {};
          }
          this.parent = p1410;
          this.parentIndex = p1412;
          if (!p1411) {
            return;
          }
          this.root = p1411;
          if (this.ref instanceof vF38) {
            var v1177 = this.ref._definition;
            for (var v1178 in v1177.schema) {
              var v1179 = this.ref[v1178];
              if (v1179 && v1179.$changes) {
                var v1180 = v1177.indexes[v1178];
                v1179.$changes.setParent(this.ref, p1411, v1180);
              }
            }
          } else if (typeof this.ref === "object") {
            this.ref.forEach(function (p1413, p1414) {
              if (p1413 instanceof vF38) {
                var v1181 = p1413.$changes;
                var v1182 = vThis132.ref.$changes.indexes[p1414];
                v1181.setParent(vThis132.ref, vThis132.root, v1182);
              }
            });
          }
        };
        f276.prototype.operation = function (p1415) {
          this.changes.set(--this.currentCustomOperation, p1415);
        };
        f276.prototype.change = function (p1416, p1417 = p1387.OPERATION.ADD) {
          var v1183 = typeof p1416 === "number" ? p1416 : this.indexes[p1416];
          this.assertValidIndex(v1183, p1416);
          var v1184 = this.changes.get(v1183);
          if (!v1184 || v1184.op === p1387.OPERATION.DELETE || v1184.op === p1387.OPERATION.TOUCH) {
            this.changes.set(v1183, {
              op: !v1184 ? p1417 : v1184.op === p1387.OPERATION.DELETE ? p1387.OPERATION.DELETE_AND_ADD : p1417,
              index: v1183
            });
          }
          this.allChanges.add(v1183);
          this.changed = true;
          this.touchParents();
        };
        f276.prototype.touch = function (p1418) {
          var v1185 = typeof p1418 === "number" ? p1418 : this.indexes[p1418];
          this.assertValidIndex(v1185, p1418);
          if (!this.changes.has(v1185)) {
            this.changes.set(v1185, {
              op: p1387.OPERATION.TOUCH,
              index: v1185
            });
          }
          this.allChanges.add(v1185);
          this.touchParents();
        };
        f276.prototype.touchParents = function () {
          if (this.parent) {
            this.parent.$changes.touch(this.parentIndex);
          }
        };
        f276.prototype.getType = function (p1419) {
          if (this.ref._definition) {
            var v1187 = this.ref._definition;
            return v1187.schema[v1187.fieldsByIndex[p1419]];
          } else {
            var v1187 = this.parent._definition;
            var v1188 = v1187.schema[v1187.fieldsByIndex[this.parentIndex]];
            return Object.values(v1188)[0];
          }
        };
        f276.prototype.getChildrenFilter = function () {
          var v1189 = this.parent._definition.childFilters;
          return v1189 && v1189[this.parentIndex];
        };
        f276.prototype.getValue = function (p1420) {
          return this.ref.getByIndex(p1420);
        };
        f276.prototype.delete = function (p1421) {
          var v1190 = typeof p1421 === "number" ? p1421 : this.indexes[p1421];
          if (v1190 === undefined) {
            console.warn(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index: ${p1421} (${v1190})`);
            return;
          }
          var v1191 = this.getValue(v1190);
          this.changes.set(v1190, {
            op: p1387.OPERATION.DELETE,
            index: v1190
          });
          this.allChanges.delete(v1190);
          delete this.caches[v1190];
          if (v1191 && v1191.$changes) {
            v1191.$changes.parent = undefined;
          }
          this.changed = true;
          this.touchParents();
        };
        f276.prototype.discard = function (p1422, p1423) {
          var vThis133 = this;
          if (p1422 === undefined) {
            p1422 = false;
          }
          if (p1423 === undefined) {
            p1423 = false;
          }
          if (!(this.ref instanceof vF38)) {
            this.changes.forEach(function (p1424) {
              if (p1424.op === p1387.OPERATION.DELETE) {
                var v1192 = vThis133.ref.getIndex(p1424.index);
                delete vThis133.indexes[v1192];
              }
            });
          }
          this.changes.clear();
          this.changed = p1422;
          if (p1423) {
            this.allChanges.clear();
          }
          this.currentCustomOperation = 0;
        };
        f276.prototype.discardAll = function () {
          var vThis134 = this;
          this.changes.forEach(function (p1425) {
            var v1193 = vThis134.getValue(p1425.index);
            if (v1193 && v1193.$changes) {
              v1193.$changes.discardAll();
            }
          });
          this.discard();
        };
        f276.prototype.cache = function (p1426, p1427) {
          this.caches[p1426] = p1427;
        };
        f276.prototype.clone = function () {
          return new f276(this.ref, this.parent, this.root);
        };
        f276.prototype.ensureRefId = function () {
          if (this.refId !== undefined) {
            return;
          }
          this.refId = this.root.getNextUniqueId();
        };
        f276.prototype.assertValidIndex = function (p1428, p1429) {
          if (p1428 === undefined) {
            throw new Error(`ChangeTree: missing index for field "${p1429}"`);
          }
        };
        return f276;
      }();
      function f277(p1430, p1431, p1432, p1433) {
        if (!p1430[p1431]) {
          p1430[p1431] = [];
        }
        p1430[p1431].push(p1432);
        if (p1433 === null || p1433 === undefined) {
          undefined;
        } else {
          p1433.forEach(function (p1434, p1435) {
            return p1432(p1434, p1435);
          });
        }
        return function () {
          return f279(p1430[p1431], p1430[p1431].indexOf(p1432));
        };
      }
      function f278(p1436) {
        var vThis135 = this;
        var v1194 = typeof this.$changes.getType() !== "string";
        this.$items.forEach(function (p1437, p1438) {
          p1436.push({
            refId: vThis135.$changes.refId,
            op: p1387.OPERATION.DELETE,
            field: p1438,
            value: undefined,
            previousValue: p1437
          });
          if (v1194) {
            vThis135.$changes.root.removeRef(p1437.$changes.refId);
          }
        });
      }
      function f279(p1439, p1440) {
        if (p1440 === -1 || p1440 >= p1439.length) {
          return false;
        }
        var v1195 = p1439.length - 1;
        for (var vP1440 = p1440; vP1440 < v1195; vP1440++) {
          p1439[vP1440] = p1439[vP1440 + 1];
        }
        p1439.length = v1195;
        return true;
      }
      function f280(p1441, p1442) {
        var v1196 = p1441.toString();
        var v1197 = p1442.toString();
        if (v1196 < v1197) {
          return -1;
        } else if (v1196 > v1197) {
          return 1;
        } else {
          return 0;
        }
      }
      function f281(p1443) {
        p1443.$proxy = true;
        p1443 = new Proxy(p1443, {
          get: function (p1444, p1445) {
            if (typeof p1445 !== "symbol" && !isNaN(p1445)) {
              return p1444.at(p1445);
            } else {
              return p1444[p1445];
            }
          },
          set: function (p1446, p1447, p1448) {
            if (typeof p1447 !== "symbol" && !isNaN(p1447)) {
              var v1198 = Array.from(p1446.$items.keys());
              var vParseInt7 = parseInt(v1198[p1447] || p1447);
              if (p1448 === undefined || p1448 === null) {
                p1446.deleteAt(vParseInt7);
              } else {
                p1446.setAt(vParseInt7, p1448);
              }
            } else {
              p1446[p1447] = p1448;
            }
            return true;
          },
          deleteProperty: function (p1449, p1450) {
            if (typeof p1450 === "number") {
              p1449.deleteAt(p1450);
            } else {
              delete p1449[p1450];
            }
            return true;
          },
          has: function (p1451, p1452) {
            if (typeof p1452 !== "symbol" && !isNaN(Number(p1452))) {
              return p1451.$items.has(Number(p1452));
            }
            return Reflect.has(p1451, p1452);
          }
        });
        return p1443;
      }
      var vF27 = function () {
        function f282() {
          var vA28 = [];
          for (var vLN0210 = 0; vLN0210 < arguments.length; vLN0210++) {
            vA28[vLN0210] = arguments[vLN0210];
          }
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          this.push.apply(this, vA28);
        }
        f282.prototype.onAdd = function (p1453, p1454 = true) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.ADD, p1453, p1454 ? this.$items : undefined);
        };
        f282.prototype.onRemove = function (p1455) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.DELETE, p1455);
        };
        f282.prototype.onChange = function (p1456) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.REPLACE, p1456);
        };
        f282.is = function (p1457) {
          return Array.isArray(p1457) || p1457.array !== undefined;
        };
        Object.defineProperty(f282.prototype, "length", {
          get: function () {
            return this.$items.size;
          },
          set: function (p1458) {
            if (p1458 === 0) {
              this.clear();
            } else {
              this.splice(p1458, this.length - p1458);
            }
          },
          enumerable: false,
          configurable: true
        });
        f282.prototype.push = function () {
          var vThis136 = this;
          var vA29 = [];
          for (var vLN0211 = 0; vLN0211 < arguments.length; vLN0211++) {
            vA29[vLN0211] = arguments[vLN0211];
          }
          var v1199;
          vA29.forEach(function (p1459) {
            v1199 = vThis136.$refId++;
            vThis136.setAt(v1199, p1459);
          });
          return v1199;
        };
        f282.prototype.pop = function () {
          var v1200 = Array.from(this.$indexes.values()).pop();
          if (v1200 === undefined) {
            return undefined;
          }
          this.$changes.delete(v1200);
          this.$indexes.delete(v1200);
          var v1201 = this.$items.get(v1200);
          this.$items.delete(v1200);
          return v1201;
        };
        f282.prototype.at = function (p1460) {
          p1460 = Math.trunc(p1460) || 0;
          if (p1460 < 0) {
            p1460 += this.length;
          }
          if (p1460 < 0 || p1460 >= this.length) {
            return undefined;
          }
          var v1202 = Array.from(this.$items.keys())[p1460];
          return this.$items.get(v1202);
        };
        f282.prototype.setAt = function (p1461, p1462) {
          if (p1462 === undefined || p1462 === null) {
            console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
            return;
          }
          if (this.$items.get(p1461) === p1462) {
            return;
          }
          if (p1462.$changes !== undefined) {
            p1462.$changes.setParent(this, this.$changes.root, p1461);
          }
          var v1203 = this.$changes.indexes[p1461]?.op ?? p1387.OPERATION.ADD;
          this.$changes.indexes[p1461] = p1461;
          this.$indexes.set(p1461, p1461);
          this.$items.set(p1461, p1462);
          this.$changes.change(p1461, v1203);
        };
        f282.prototype.deleteAt = function (p1463) {
          var v1204 = Array.from(this.$items.keys())[p1463];
          if (v1204 === undefined) {
            return false;
          }
          return this.$deleteAt(v1204);
        };
        f282.prototype.$deleteAt = function (p1464) {
          this.$changes.delete(p1464);
          this.$indexes.delete(p1464);
          return this.$items.delete(p1464);
        };
        f282.prototype.clear = function (p1465) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1465) {
            f278.call(this, p1465);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f282.prototype.concat = function () {
          var v1205;
          var vA30 = [];
          for (var vLN0212 = 0; vLN0212 < arguments.length; vLN0212++) {
            vA30[vLN0212] = arguments[vLN0212];
          }
          return new (f282.bind.apply(f282, f275([undefined], (v1205 = Array.from(this.$items.values())).concat.apply(v1205, vA30), false)))();
        };
        f282.prototype.join = function (p1466) {
          return Array.from(this.$items.values()).join(p1466);
        };
        f282.prototype.reverse = function () {
          var vThis137 = this;
          var v1206 = Array.from(this.$items.keys());
          var v1207 = Array.from(this.$items.values()).reverse();
          v1207.forEach(function (p1467, p1468) {
            vThis137.setAt(v1206[p1468], p1467);
          });
          return this;
        };
        f282.prototype.shift = function () {
          var v1208 = Array.from(this.$items.keys());
          var v1209 = v1208.shift();
          if (v1209 === undefined) {
            return undefined;
          }
          var v1210 = this.$items.get(v1209);
          this.$deleteAt(v1209);
          return v1210;
        };
        f282.prototype.slice = function (p1469, p1470) {
          var v1211 = new f282();
          v1211.push.apply(v1211, Array.from(this.$items.values()).slice(p1469, p1470));
          return v1211;
        };
        f282.prototype.sort = function (p1471) {
          var vThis138 = this;
          if (p1471 === undefined) {
            p1471 = f280;
          }
          var v1212 = Array.from(this.$items.keys());
          var v1213 = Array.from(this.$items.values()).sort(p1471);
          v1213.forEach(function (p1472, p1473) {
            vThis138.setAt(v1212[p1473], p1472);
          });
          return this;
        };
        f282.prototype.splice = function (p1474, p1475 = this.length - p1474) {
          var vA31 = [];
          for (var vLN24 = 2; vLN24 < arguments.length; vLN24++) {
            vA31[vLN24 - 2] = arguments[vLN24];
          }
          var v1214 = Array.from(this.$items.keys());
          var vA32 = [];
          for (var vLN0213 = p1474; vLN0213 < p1474 + p1475; vLN0213++) {
            vA32.push(this.$items.get(v1214[vLN0213]));
            this.$deleteAt(v1214[vLN0213]);
          }
          for (var vLN0213 = 0; vLN0213 < vA31.length; vLN0213++) {
            this.setAt(p1474 + vLN0213, vA31[vLN0213]);
          }
          return vA32;
        };
        f282.prototype.unshift = function () {
          var vThis139 = this;
          var vA33 = [];
          for (var vLN0214 = 0; vLN0214 < arguments.length; vLN0214++) {
            vA33[vLN0214] = arguments[vLN0214];
          }
          var v1215 = this.length;
          var v1216 = vA33.length;
          var v1217 = Array.from(this.$items.values());
          vA33.forEach(function (p1476, p1477) {
            vThis139.setAt(p1477, p1476);
          });
          v1217.forEach(function (p1478, p1479) {
            vThis139.setAt(v1216 + p1479, p1478);
          });
          return v1215 + v1216;
        };
        f282.prototype.indexOf = function (p1480, p1481) {
          return Array.from(this.$items.values()).indexOf(p1480, p1481);
        };
        f282.prototype.lastIndexOf = function (p1482, p1483 = this.length - 1) {
          return Array.from(this.$items.values()).lastIndexOf(p1482, p1483);
        };
        f282.prototype.every = function (p1484, p1485) {
          return Array.from(this.$items.values()).every(p1484, p1485);
        };
        f282.prototype.some = function (p1486, p1487) {
          return Array.from(this.$items.values()).some(p1486, p1487);
        };
        f282.prototype.forEach = function (p1488, p1489) {
          Array.from(this.$items.values()).forEach(p1488, p1489);
        };
        f282.prototype.map = function (p1490, p1491) {
          return Array.from(this.$items.values()).map(p1490, p1491);
        };
        f282.prototype.filter = function (p1492, p1493) {
          return Array.from(this.$items.values()).filter(p1492, p1493);
        };
        f282.prototype.reduce = function (p1494, p1495) {
          return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
        };
        f282.prototype.reduceRight = function (p1496, p1497) {
          return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
        };
        f282.prototype.find = function (p1498, p1499) {
          return Array.from(this.$items.values()).find(p1498, p1499);
        };
        f282.prototype.findIndex = function (p1500, p1501) {
          return Array.from(this.$items.values()).findIndex(p1500, p1501);
        };
        f282.prototype.fill = function (p1502, p1503, p1504) {
          throw new Error("ArraySchema#fill() not implemented");
        };
        f282.prototype.copyWithin = function (p1505, p1506, p1507) {
          throw new Error("ArraySchema#copyWithin() not implemented");
        };
        f282.prototype.toString = function () {
          return this.$items.toString();
        };
        f282.prototype.toLocaleString = function () {
          return this.$items.toLocaleString();
        };
        f282.prototype[Symbol.iterator] = function () {
          return Array.from(this.$items.values())[Symbol.iterator]();
        };
        Object.defineProperty(f282, Symbol.species, {
          get: function () {
            return f282;
          },
          enumerable: false,
          configurable: true
        });
        f282.prototype.entries = function () {
          return this.$items.entries();
        };
        f282.prototype.keys = function () {
          return this.$items.keys();
        };
        f282.prototype.values = function () {
          return this.$items.values();
        };
        f282.prototype.includes = function (p1508, p1509) {
          return Array.from(this.$items.values()).includes(p1508, p1509);
        };
        f282.prototype.flatMap = function (p1510, p1511) {
          throw new Error("ArraySchema#flatMap() is not supported.");
        };
        f282.prototype.flat = function (p1512) {
          throw new Error("ArraySchema#flat() is not supported.");
        };
        f282.prototype.findLast = function () {
          var v1218 = Array.from(this.$items.values());
          return v1218.findLast.apply(v1218, arguments);
        };
        f282.prototype.findLastIndex = function () {
          var v1219 = Array.from(this.$items.values());
          return v1219.findLastIndex.apply(v1219, arguments);
        };
        f282.prototype.with = function (p1513, p1514) {
          var v1220 = Array.from(this.$items.values());
          v1220[p1513] = p1514;
          return new (f282.bind.apply(f282, f275([undefined], v1220, false)))();
        };
        f282.prototype.toReversed = function () {
          return Array.from(this.$items.values()).reverse();
        };
        f282.prototype.toSorted = function (p1515) {
          return Array.from(this.$items.values()).sort(p1515);
        };
        f282.prototype.toSpliced = function (p1516, p1517) {
          var v1221 = Array.from(this.$items.values());
          return v1221.toSpliced.apply(v1221, arguments);
        };
        f282.prototype.setIndex = function (p1518, p1519) {
          this.$indexes.set(p1518, p1519);
        };
        f282.prototype.getIndex = function (p1520) {
          return this.$indexes.get(p1520);
        };
        f282.prototype.getByIndex = function (p1521) {
          return this.$items.get(this.$indexes.get(p1521));
        };
        f282.prototype.deleteByIndex = function (p1522) {
          var v1222 = this.$indexes.get(p1522);
          this.$items.delete(v1222);
          this.$indexes.delete(p1522);
        };
        f282.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f282.prototype.toJSON = function () {
          return this.toArray().map(function (p1523) {
            if (typeof p1523.toJSON === "function") {
              return p1523.toJSON();
            } else {
              return p1523;
            }
          });
        };
        f282.prototype.clone = function (p1524) {
          var v1223;
          if (p1524) {
            v1223 = new (f282.bind.apply(f282, f275([undefined], Array.from(this.$items.values()), false)))();
          } else {
            v1223 = new (f282.bind.apply(f282, f275([undefined], this.map(function (p1525) {
              if (p1525.$changes) {
                return p1525.clone();
              } else {
                return p1525;
              }
            }), false)))();
          }
          return v1223;
        };
        return f282;
      }();
      function f283(p1526) {
        p1526.$proxy = true;
        p1526 = new Proxy(p1526, {
          get: function (p1527, p1528) {
            if (typeof p1528 !== "symbol" && typeof p1527[p1528] === "undefined") {
              return p1527.get(p1528);
            } else {
              return p1527[p1528];
            }
          },
          set: function (p1529, p1530, p1531) {
            if (typeof p1530 !== "symbol" && p1530.indexOf("$") === -1 && p1530 !== "onAdd" && p1530 !== "onRemove" && p1530 !== "onChange") {
              p1529.set(p1530, p1531);
            } else {
              p1529[p1530] = p1531;
            }
            return true;
          },
          deleteProperty: function (p1532, p1533) {
            p1532.delete(p1533);
            return true;
          }
        });
        return p1526;
      }
      var vF28 = function () {
        function f284(p1534) {
          var vThis140 = this;
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1534) {
            if (p1534 instanceof Map || p1534 instanceof f284) {
              p1534.forEach(function (p1535, p1536) {
                return vThis140.set(p1536, p1535);
              });
            } else {
              for (var v1224 in p1534) {
                this.set(v1224, p1534[v1224]);
              }
            }
          }
        }
        f284.prototype.onAdd = function (p1537, p1538 = true) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.ADD, p1537, p1538 ? this.$items : undefined);
        };
        f284.prototype.onRemove = function (p1539) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.DELETE, p1539);
        };
        f284.prototype.onChange = function (p1540) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.REPLACE, p1540);
        };
        f284.is = function (p1541) {
          return p1541.map !== undefined;
        };
        f284.prototype[Symbol.iterator] = function () {
          return this.$items[Symbol.iterator]();
        };
        Object.defineProperty(f284.prototype, Symbol.toStringTag, {
          get: function () {
            return this.$items[Symbol.toStringTag];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(f284, Symbol.species, {
          get: function () {
            return f284;
          },
          enumerable: false,
          configurable: true
        });
        f284.prototype.set = function (p1542, p1543) {
          if (p1543 === undefined || p1543 === null) {
            throw new Error(`MapSchema#set('${p1542}', ${p1543}): trying to set ${p1543} value on '${p1542}'.`);
          }
          p1542 = p1542.toString();
          var v1225 = typeof this.$changes.indexes[p1542] !== "undefined";
          var v1226 = v1225 ? this.$changes.indexes[p1542] : this.$refId++;
          var v1227 = v1225 ? p1387.OPERATION.REPLACE : p1387.OPERATION.ADD;
          var v1228 = p1543.$changes !== undefined;
          if (v1228) {
            p1543.$changes.setParent(this, this.$changes.root, v1226);
          }
          if (!v1225) {
            this.$changes.indexes[p1542] = v1226;
            this.$indexes.set(v1226, p1542);
          } else if (!v1228 && this.$items.get(p1542) === p1543) {
            return;
          } else if (v1228 && this.$items.get(p1542) !== p1543) {
            v1227 = p1387.OPERATION.ADD;
          }
          this.$items.set(p1542, p1543);
          this.$changes.change(p1542, v1227);
          return this;
        };
        f284.prototype.get = function (p1544) {
          return this.$items.get(p1544);
        };
        f284.prototype.delete = function (p1545) {
          this.$changes.delete(p1545.toString());
          return this.$items.delete(p1545);
        };
        f284.prototype.clear = function (p1546) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1546) {
            f278.call(this, p1546);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f284.prototype.has = function (p1547) {
          return this.$items.has(p1547);
        };
        f284.prototype.forEach = function (p1548) {
          this.$items.forEach(p1548);
        };
        f284.prototype.entries = function () {
          return this.$items.entries();
        };
        f284.prototype.keys = function () {
          return this.$items.keys();
        };
        f284.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f284.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f284.prototype.setIndex = function (p1549, p1550) {
          this.$indexes.set(p1549, p1550);
        };
        f284.prototype.getIndex = function (p1551) {
          return this.$indexes.get(p1551);
        };
        f284.prototype.getByIndex = function (p1552) {
          return this.$items.get(this.$indexes.get(p1552));
        };
        f284.prototype.deleteByIndex = function (p1553) {
          var v1229 = this.$indexes.get(p1553);
          this.$items.delete(v1229);
          this.$indexes.delete(p1553);
        };
        f284.prototype.toJSON = function () {
          var vO67 = {};
          this.forEach(function (p1554, p1555) {
            vO67[p1555] = typeof p1554.toJSON === "function" ? p1554.toJSON() : p1554;
          });
          return vO67;
        };
        f284.prototype.clone = function (p1556) {
          var v1230;
          if (p1556) {
            v1230 = Object.assign(new f284(), this);
          } else {
            v1230 = new f284();
            this.forEach(function (p1557, p1558) {
              if (p1557.$changes) {
                v1230.set(p1558, p1557.clone());
              } else {
                v1230.set(p1558, p1557);
              }
            });
          }
          return v1230;
        };
        return f284;
      }();
      var vO68 = {};
      function f285(p1559, p1560) {
        vO68[p1559] = p1560;
      }
      function f286(p1561) {
        return vO68[p1561];
      }
      var vF29 = function () {
        function f287() {
          this.indexes = {};
          this.fieldsByIndex = {};
          this.deprecated = {};
          this.descriptors = {};
        }
        f287.create = function (p1562) {
          var v1231 = new f287();
          v1231.schema = Object.assign({}, p1562 && p1562.schema || {});
          v1231.indexes = Object.assign({}, p1562 && p1562.indexes || {});
          v1231.fieldsByIndex = Object.assign({}, p1562 && p1562.fieldsByIndex || {});
          v1231.descriptors = Object.assign({}, p1562 && p1562.descriptors || {});
          v1231.deprecated = Object.assign({}, p1562 && p1562.deprecated || {});
          return v1231;
        };
        f287.prototype.addField = function (p1563, p1564) {
          var v1232 = this.getNextFieldIndex();
          this.fieldsByIndex[v1232] = p1563;
          this.indexes[p1563] = v1232;
          this.schema[p1563] = Array.isArray(p1564) ? {
            array: p1564[0]
          } : p1564;
        };
        f287.prototype.hasField = function (p1565) {
          return this.indexes[p1565] !== undefined;
        };
        f287.prototype.addFilter = function (p1566, p1567) {
          if (!this.filters) {
            this.filters = {};
            this.indexesWithFilters = [];
          }
          this.filters[this.indexes[p1566]] = p1567;
          this.indexesWithFilters.push(this.indexes[p1566]);
          return true;
        };
        f287.prototype.addChildrenFilter = function (p1568, p1569) {
          var v1233 = this.indexes[p1568];
          var v1234 = this.schema[p1568];
          if (f286(Object.keys(v1234)[0])) {
            if (!this.childFilters) {
              this.childFilters = {};
            }
            this.childFilters[v1233] = p1569;
            return true;
          } else {
            console.warn(`@filterChildren: field '${p1568}' can't have children. Ignoring filter.`);
          }
        };
        f287.prototype.getChildrenFilter = function (p1570) {
          return this.childFilters && this.childFilters[this.indexes[p1570]];
        };
        f287.prototype.getNextFieldIndex = function () {
          return Object.keys(this.schema || {}).length;
        };
        return f287;
      }();
      function f288(p1571) {
        return p1571._context && p1571._context.useFilters;
      }
      var vF30 = function () {
        function f289() {
          this.types = {};
          this.schemas = new Map();
          this.useFilters = false;
        }
        f289.prototype.has = function (p1572) {
          return this.schemas.has(p1572);
        };
        f289.prototype.get = function (p1573) {
          return this.types[p1573];
        };
        f289.prototype.add = function (p1574, p1575 = this.schemas.size) {
          p1574._definition = vF29.create(p1574._definition);
          p1574._typeid = p1575;
          this.types[p1575] = p1574;
          this.schemas.set(p1574, p1575);
        };
        f289.create = function (p1576 = {}) {
          return function (p1577) {
            if (!p1576.context) {
              p1576.context = new f289();
            }
            return f290(p1577, p1576);
          };
        };
        return f289;
      }();
      var v1235 = new vF30();
      function f290(p1578, p1579 = {}) {
        return function (p1580, p1581) {
          var v1236 = p1579.context || v1235;
          var v1237 = p1580.constructor;
          v1237._context = v1236;
          if (!p1578) {
            throw new Error(`${v1237.name}: @type() reference provided for "${p1581}" is undefined. Make sure you don't have any circular dependencies.`);
          }
          if (!v1236.has(v1237)) {
            v1236.add(v1237);
          }
          var v1238 = v1237._definition;
          v1238.addField(p1581, p1578);
          if (v1238.descriptors[p1581]) {
            if (v1238.deprecated[p1581]) {
              return;
            } else {
              try {
                throw new Error(`@colyseus/schema: Duplicate '${p1581}' definition on '${v1237.name}'.
Check @type() annotation`);
              } catch (e60) {
                var v1239 = e60.stack.split("\n")[4].trim();
                throw new Error(`${e60.message} ${v1239}`);
              }
            }
          }
          var v1240 = vF27.is(p1578);
          var v1241 = !v1240 && vF28.is(p1578);
          if (typeof p1578 !== "string" && !vF38.is(p1578)) {
            var v1242 = Object.values(p1578)[0];
            if (typeof v1242 !== "string" && !v1236.has(v1242)) {
              v1236.add(v1242);
            }
          }
          if (p1579.manual) {
            v1238.descriptors[p1581] = {
              enumerable: true,
              configurable: true,
              writable: true
            };
            return;
          }
          var v1243 = `_${p1581}`;
          v1238.descriptors[v1243] = {
            enumerable: false,
            configurable: false,
            writable: true
          };
          v1238.descriptors[p1581] = {
            get: function () {
              return this[v1243];
            },
            set: function (p1582) {
              if (p1582 === this[v1243]) {
                return;
              }
              if (p1582 !== undefined && p1582 !== null) {
                if (v1240 && !(p1582 instanceof vF27)) {
                  p1582 = new (vF27.bind.apply(vF27, f275([undefined], p1582, false)))();
                }
                if (v1241 && !(p1582 instanceof vF28)) {
                  p1582 = new vF28(p1582);
                }
                if (p1582.$proxy === undefined) {
                  if (v1241) {
                    p1582 = f283(p1582);
                  } else if (v1240) {
                    p1582 = f281(p1582);
                  }
                }
                this.$changes.change(p1581);
                if (p1582.$changes) {
                  p1582.$changes.setParent(this, this.$changes.root, this._definition.indexes[p1581]);
                }
              } else if (this[v1243] !== undefined) {
                this.$changes.delete(p1581);
              }
              this[v1243] = p1582;
            },
            enumerable: true,
            configurable: true
          };
        };
      }
      function f291(p1583) {
        return function (p1584, p1585) {
          var v1244 = p1584.constructor;
          var v1245 = v1244._definition;
          if (v1245.addFilter(p1585, p1583)) {
            v1244._context.useFilters = true;
          }
        };
      }
      function f292(p1586) {
        return function (p1587, p1588) {
          var v1246 = p1587.constructor;
          var v1247 = v1246._definition;
          if (v1247.addChildrenFilter(p1588, p1586)) {
            v1246._context.useFilters = true;
          }
        };
      }
      function f293(p1589 = true) {
        return function (p1590, p1591) {
          var v1248 = p1590.constructor;
          var v1249 = v1248._definition;
          v1249.deprecated[p1591] = true;
          if (p1589) {
            v1249.descriptors[p1591] = {
              get: function () {
                throw new Error(`${p1591} is deprecated.`);
              },
              set: function (p1592) {},
              enumerable: false,
              configurable: true
            };
          }
        };
      }
      function f294(p1593, p1594, p1595 = {}) {
        if (!p1595.context) {
          p1595.context = p1593._context || p1595.context || v1235;
        }
        for (var v1250 in p1594) {
          f290(p1594[v1250], p1595)(p1593.prototype, v1250);
        }
        return p1593;
      }
      function f295(p1596) {
        var vLN0215 = 0;
        var vLN0216 = 0;
        for (var vLN0217 = 0, v1251 = p1596.length; vLN0217 < v1251; vLN0217++) {
          vLN0215 = p1596.charCodeAt(vLN0217);
          if (vLN0215 < 128) {
            vLN0216 += 1;
          } else if (vLN0215 < 2048) {
            vLN0216 += 2;
          } else if (vLN0215 < 55296 || vLN0215 >= 57344) {
            vLN0216 += 3;
          } else {
            vLN0217++;
            vLN0216 += 4;
          }
        }
        return vLN0216;
      }
      function f296(p1597, p1598, p1599) {
        var vLN0218 = 0;
        for (var vLN0219 = 0, v1252 = p1599.length; vLN0219 < v1252; vLN0219++) {
          vLN0218 = p1599.charCodeAt(vLN0219);
          if (vLN0218 < 128) {
            p1597[p1598++] = vLN0218;
          } else if (vLN0218 < 2048) {
            p1597[p1598++] = vLN0218 >> 6 | 192;
            p1597[p1598++] = vLN0218 & 63 | 128;
          } else if (vLN0218 < 55296 || vLN0218 >= 57344) {
            p1597[p1598++] = vLN0218 >> 12 | 224;
            p1597[p1598++] = vLN0218 >> 6 & 63 | 128;
            p1597[p1598++] = vLN0218 & 63 | 128;
          } else {
            vLN0219++;
            vLN0218 = 65536 + ((vLN0218 & 1023) << 10 | p1599.charCodeAt(vLN0219) & 1023);
            p1597[p1598++] = vLN0218 >> 18 | 240;
            p1597[p1598++] = vLN0218 >> 12 & 63 | 128;
            p1597[p1598++] = vLN0218 >> 6 & 63 | 128;
            p1597[p1598++] = vLN0218 & 63 | 128;
          }
        }
      }
      function f297(p1600, p1601) {
        p1600.push(p1601 & 255);
      }
      function f298(p1602, p1603) {
        p1602.push(p1603 & 255);
      }
      function f299(p1604, p1605) {
        p1604.push(p1605 & 255);
        p1604.push(p1605 >> 8 & 255);
      }
      function f300(p1606, p1607) {
        p1606.push(p1607 & 255);
        p1606.push(p1607 >> 8 & 255);
      }
      function f301(p1608, p1609) {
        p1608.push(p1609 & 255);
        p1608.push(p1609 >> 8 & 255);
        p1608.push(p1609 >> 16 & 255);
        p1608.push(p1609 >> 24 & 255);
      }
      function f302(p1610, p1611) {
        var v1253 = p1611 >> 24;
        var v1254 = p1611 >> 16;
        var v1255 = p1611 >> 8;
        var vP1611 = p1611;
        p1610.push(vP1611 & 255);
        p1610.push(v1255 & 255);
        p1610.push(v1254 & 255);
        p1610.push(v1253 & 255);
      }
      function f303(p1612, p1613) {
        var v1256 = Math.floor(p1613 / Math.pow(2, 32));
        var v1257 = p1613 >>> 0;
        f302(p1612, v1257);
        f302(p1612, v1256);
      }
      function f304(p1614, p1615) {
        var v1258 = p1615 / Math.pow(2, 32) >> 0;
        var v1259 = p1615 >>> 0;
        f302(p1614, v1259);
        f302(p1614, v1258);
      }
      function f305(p1616, p1617) {
        f307(p1616, p1617);
      }
      function f306(p1618, p1619) {
        f308(p1618, p1619);
      }
      var v1260 = new Int32Array(2);
      var v1261 = new Float32Array(v1260.buffer);
      var v1262 = new Float64Array(v1260.buffer);
      function f307(p1620, p1621) {
        v1261[0] = p1621;
        f301(p1620, v1260[0]);
      }
      function f308(p1622, p1623) {
        v1262[0] = p1623;
        f301(p1622, v1260[0]);
        f301(p1622, v1260[1]);
      }
      function f309(p1624, p1625) {
        return f298(p1624, p1625 ? 1 : 0);
      }
      function f310(p1626, p1627) {
        if (!p1627) {
          p1627 = "";
        }
        var vF295 = f295(p1627);
        var vLN0220 = 0;
        if (vF295 < 32) {
          p1626.push(vF295 | 160);
          vLN0220 = 1;
        } else if (vF295 < 256) {
          p1626.push(217);
          f298(p1626, vF295);
          vLN0220 = 2;
        } else if (vF295 < 65536) {
          p1626.push(218);
          f300(p1626, vF295);
          vLN0220 = 3;
        } else if (vF295 < 4294967296) {
          p1626.push(219);
          f302(p1626, vF295);
          vLN0220 = 5;
        } else {
          throw new Error("String too long");
        }
        f296(p1626, p1626.length, p1627);
        return vLN0220 + vF295;
      }
      function f311(p1628, p1629) {
        if (isNaN(p1629)) {
          return f311(p1628, 0);
        } else if (!isFinite(p1629)) {
          return f311(p1628, p1629 > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
        } else if (p1629 !== (p1629 | 0)) {
          p1628.push(203);
          f308(p1628, p1629);
          return 9;
        }
        if (p1629 >= 0) {
          if (p1629 < 128) {
            f298(p1628, p1629);
            return 1;
          }
          if (p1629 < 256) {
            p1628.push(204);
            f298(p1628, p1629);
            return 2;
          }
          if (p1629 < 65536) {
            p1628.push(205);
            f300(p1628, p1629);
            return 3;
          }
          if (p1629 < 4294967296) {
            p1628.push(206);
            f302(p1628, p1629);
            return 5;
          }
          p1628.push(207);
          f304(p1628, p1629);
          return 9;
        } else {
          if (p1629 >= -32) {
            p1628.push(p1629 + 32 | 224);
            return 1;
          }
          if (p1629 >= -128) {
            p1628.push(208);
            f297(p1628, p1629);
            return 2;
          }
          if (p1629 >= -32768) {
            p1628.push(209);
            f299(p1628, p1629);
            return 3;
          }
          if (p1629 >= -2147483648) {
            p1628.push(210);
            f301(p1628, p1629);
            return 5;
          }
          p1628.push(211);
          f303(p1628, p1629);
          return 9;
        }
      }
      var v1263 = Object.freeze({
        "__proto__": null,
        boolean: f309,
        float32: f305,
        float64: f306,
        int16: f299,
        int32: f301,
        int64: f303,
        int8: f297,
        number: f311,
        string: f310,
        uint16: f300,
        uint32: f302,
        uint64: f304,
        uint8: f298,
        utf8Write: f296,
        writeFloat32: f307,
        writeFloat64: f308
      });
      function f312(p1630, p1631, p1632) {
        var vLS16 = "";
        var vLN0221 = 0;
        for (var vP1631 = p1631, v1264 = p1631 + p1632; vP1631 < v1264; vP1631++) {
          var v1265 = p1630[vP1631];
          if ((v1265 & 128) === 0) {
            vLS16 += String.fromCharCode(v1265);
            continue;
          }
          if ((v1265 & 224) === 192) {
            vLS16 += String.fromCharCode((v1265 & 31) << 6 | p1630[++vP1631] & 63);
            continue;
          }
          if ((v1265 & 240) === 224) {
            vLS16 += String.fromCharCode((v1265 & 15) << 12 | (p1630[++vP1631] & 63) << 6 | (p1630[++vP1631] & 63) << 0);
            continue;
          }
          if ((v1265 & 248) === 240) {
            vLN0221 = (v1265 & 7) << 18 | (p1630[++vP1631] & 63) << 12 | (p1630[++vP1631] & 63) << 6 | (p1630[++vP1631] & 63) << 0;
            if (vLN0221 >= 65536) {
              vLN0221 -= 65536;
              vLS16 += String.fromCharCode((vLN0221 >>> 10) + 55296, (vLN0221 & 1023) + 56320);
            } else {
              vLS16 += String.fromCharCode(vLN0221);
            }
            continue;
          }
          console.error("Invalid byte " + v1265.toString(16));
        }
        return vLS16;
      }
      function f313(p1633, p1634) {
        return f314(p1633, p1634) << 24 >> 24;
      }
      function f314(p1635, p1636) {
        return p1635[p1636.offset++];
      }
      function f315(p1637, p1638) {
        return f316(p1637, p1638) << 16 >> 16;
      }
      function f316(p1639, p1640) {
        return p1639[p1640.offset++] | p1639[p1640.offset++] << 8;
      }
      function f317(p1641, p1642) {
        return p1641[p1642.offset++] | p1641[p1642.offset++] << 8 | p1641[p1642.offset++] << 16 | p1641[p1642.offset++] << 24;
      }
      function f318(p1643, p1644) {
        return f317(p1643, p1644) >>> 0;
      }
      function f319(p1645, p1646) {
        return f323(p1645, p1646);
      }
      function f320(p1647, p1648) {
        return f324(p1647, p1648);
      }
      function f321(p1649, p1650) {
        var vF318 = f318(p1649, p1650);
        var v1266 = f317(p1649, p1650) * Math.pow(2, 32);
        return v1266 + vF318;
      }
      function f322(p1651, p1652) {
        var vF3182 = f318(p1651, p1652);
        var v1267 = f318(p1651, p1652) * Math.pow(2, 32);
        return v1267 + vF3182;
      }
      var v1268 = new Int32Array(2);
      var v1269 = new Float32Array(v1268.buffer);
      var v1270 = new Float64Array(v1268.buffer);
      function f323(p1653, p1654) {
        v1268[0] = f317(p1653, p1654);
        return v1269[0];
      }
      function f324(p1655, p1656) {
        v1268[0] = f317(p1655, p1656);
        v1268[1] = f317(p1655, p1656);
        return v1270[0];
      }
      function f325(p1657, p1658) {
        return f314(p1657, p1658) > 0;
      }
      function f326(p1659, p1660) {
        var v1271 = p1659[p1660.offset++];
        var v1272;
        if (v1271 < 192) {
          v1272 = v1271 & 31;
        } else if (v1271 === 217) {
          v1272 = f314(p1659, p1660);
        } else if (v1271 === 218) {
          v1272 = f316(p1659, p1660);
        } else if (v1271 === 219) {
          v1272 = f318(p1659, p1660);
        }
        var vF312 = f312(p1659, p1660.offset, v1272);
        p1660.offset += v1272;
        return vF312;
      }
      function f327(p1661, p1662) {
        var v1273 = p1661[p1662.offset];
        return v1273 < 192 && v1273 > 160 || v1273 === 217 || v1273 === 218 || v1273 === 219;
      }
      function f328(p1663, p1664) {
        var v1274 = p1663[p1664.offset++];
        if (v1274 < 128) {
          return v1274;
        } else if (v1274 === 202) {
          return f323(p1663, p1664);
        } else if (v1274 === 203) {
          return f324(p1663, p1664);
        } else if (v1274 === 204) {
          return f314(p1663, p1664);
        } else if (v1274 === 205) {
          return f316(p1663, p1664);
        } else if (v1274 === 206) {
          return f318(p1663, p1664);
        } else if (v1274 === 207) {
          return f322(p1663, p1664);
        } else if (v1274 === 208) {
          return f313(p1663, p1664);
        } else if (v1274 === 209) {
          return f315(p1663, p1664);
        } else if (v1274 === 210) {
          return f317(p1663, p1664);
        } else if (v1274 === 211) {
          return f321(p1663, p1664);
        } else if (v1274 > 223) {
          return (255 - v1274 + 1) * -1;
        }
      }
      function f329(p1665, p1666) {
        var v1275 = p1665[p1666.offset];
        return v1275 < 128 || v1275 >= 202 && v1275 <= 211;
      }
      function f330(p1667, p1668) {
        return p1667[p1668.offset] < 160;
      }
      function f331(p1669, p1670) {
        return p1669[p1670.offset - 1] === vLN255 && (p1669[p1670.offset] < 128 || p1669[p1670.offset] >= 202 && p1669[p1670.offset] <= 211);
      }
      var v1276 = Object.freeze({
        "__proto__": null,
        arrayCheck: f330,
        boolean: f325,
        float32: f319,
        float64: f320,
        int16: f315,
        int32: f317,
        int64: f321,
        int8: f313,
        number: f328,
        numberCheck: f329,
        readFloat32: f323,
        readFloat64: f324,
        string: f326,
        stringCheck: f327,
        switchStructureCheck: f331,
        uint16: f316,
        uint32: f318,
        uint64: f322,
        uint8: f314
      });
      var vF31 = function () {
        function f332(p1671) {
          var vThis141 = this;
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1671) {
            p1671.forEach(function (p1672) {
              return vThis141.add(p1672);
            });
          }
        }
        f332.prototype.onAdd = function (p1673, p1674 = true) {
          return f277(this.$callbacks ||= [], p1387.OPERATION.ADD, p1673, p1674 ? this.$items : undefined);
        };
        f332.prototype.onRemove = function (p1675) {
          return f277(this.$callbacks ||= [], p1387.OPERATION.DELETE, p1675);
        };
        f332.prototype.onChange = function (p1676) {
          return f277(this.$callbacks ||= [], p1387.OPERATION.REPLACE, p1676);
        };
        f332.is = function (p1677) {
          return p1677.collection !== undefined;
        };
        f332.prototype.add = function (p1678) {
          var v1277 = this.$refId++;
          var v1278 = p1678.$changes !== undefined;
          if (v1278) {
            p1678.$changes.setParent(this, this.$changes.root, v1277);
          }
          this.$changes.indexes[v1277] = v1277;
          this.$indexes.set(v1277, v1277);
          this.$items.set(v1277, p1678);
          this.$changes.change(v1277);
          return v1277;
        };
        f332.prototype.at = function (p1679) {
          var v1279 = Array.from(this.$items.keys())[p1679];
          return this.$items.get(v1279);
        };
        f332.prototype.entries = function () {
          return this.$items.entries();
        };
        f332.prototype.delete = function (p1680) {
          var v1280 = this.$items.entries();
          var v1281;
          var v1282;
          while (v1282 = v1280.next()) {
            if (v1282.done) {
              break;
            }
            if (p1680 === v1282.value[1]) {
              v1281 = v1282.value[0];
              break;
            }
          }
          if (v1281 === undefined) {
            return false;
          }
          this.$changes.delete(v1281);
          this.$indexes.delete(v1281);
          return this.$items.delete(v1281);
        };
        f332.prototype.clear = function (p1681) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1681) {
            f278.call(this, p1681);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f332.prototype.has = function (p1682) {
          return Array.from(this.$items.values()).some(function (p1683) {
            return p1683 === p1682;
          });
        };
        f332.prototype.forEach = function (p1684) {
          var vThis142 = this;
          this.$items.forEach(function (p1685, p1686, p1687) {
            return p1684(p1685, p1686, vThis142);
          });
        };
        f332.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f332.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f332.prototype.setIndex = function (p1688, p1689) {
          this.$indexes.set(p1688, p1689);
        };
        f332.prototype.getIndex = function (p1690) {
          return this.$indexes.get(p1690);
        };
        f332.prototype.getByIndex = function (p1691) {
          return this.$items.get(this.$indexes.get(p1691));
        };
        f332.prototype.deleteByIndex = function (p1692) {
          var v1283 = this.$indexes.get(p1692);
          this.$items.delete(v1283);
          this.$indexes.delete(p1692);
        };
        f332.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f332.prototype.toJSON = function () {
          var vA34 = [];
          this.forEach(function (p1693, p1694) {
            vA34.push(typeof p1693.toJSON === "function" ? p1693.toJSON() : p1693);
          });
          return vA34;
        };
        f332.prototype.clone = function (p1695) {
          var v1284;
          if (p1695) {
            v1284 = Object.assign(new f332(), this);
          } else {
            v1284 = new f332();
            this.forEach(function (p1696) {
              if (p1696.$changes) {
                v1284.add(p1696.clone());
              } else {
                v1284.add(p1696);
              }
            });
          }
          return v1284;
        };
        return f332;
      }();
      var vF33 = function () {
        function f333(p1697) {
          var vThis143 = this;
          this.$changes = new vF26(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1697) {
            p1697.forEach(function (p1698) {
              return vThis143.add(p1698);
            });
          }
        }
        f333.prototype.onAdd = function (p1699, p1700 = true) {
          return f277(this.$callbacks ||= [], p1387.OPERATION.ADD, p1699, p1700 ? this.$items : undefined);
        };
        f333.prototype.onRemove = function (p1701) {
          return f277(this.$callbacks ||= [], p1387.OPERATION.DELETE, p1701);
        };
        f333.prototype.onChange = function (p1702) {
          return f277(this.$callbacks ||= [], p1387.OPERATION.REPLACE, p1702);
        };
        f333.is = function (p1703) {
          return p1703.set !== undefined;
        };
        f333.prototype.add = function (p1704) {
          if (this.has(p1704)) {
            return false;
          }
          var v1285 = this.$refId++;
          if (p1704.$changes !== undefined) {
            p1704.$changes.setParent(this, this.$changes.root, v1285);
          }
          var v1286 = this.$changes.indexes[v1285]?.op ?? p1387.OPERATION.ADD;
          this.$changes.indexes[v1285] = v1285;
          this.$indexes.set(v1285, v1285);
          this.$items.set(v1285, p1704);
          this.$changes.change(v1285, v1286);
          return v1285;
        };
        f333.prototype.entries = function () {
          return this.$items.entries();
        };
        f333.prototype.delete = function (p1705) {
          var v1287 = this.$items.entries();
          var v1288;
          var v1289;
          while (v1289 = v1287.next()) {
            if (v1289.done) {
              break;
            }
            if (p1705 === v1289.value[1]) {
              v1288 = v1289.value[0];
              break;
            }
          }
          if (v1288 === undefined) {
            return false;
          }
          this.$changes.delete(v1288);
          this.$indexes.delete(v1288);
          return this.$items.delete(v1288);
        };
        f333.prototype.clear = function (p1706) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1706) {
            f278.call(this, p1706);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1387.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f333.prototype.has = function (p1707) {
          var v1290 = this.$items.values();
          var v1291 = false;
          var v1292;
          while (v1292 = v1290.next()) {
            if (v1292.done) {
              break;
            }
            if (p1707 === v1292.value) {
              v1291 = true;
              break;
            }
          }
          return v1291;
        };
        f333.prototype.forEach = function (p1708) {
          var vThis144 = this;
          this.$items.forEach(function (p1709, p1710, p1711) {
            return p1708(p1709, p1710, vThis144);
          });
        };
        f333.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f333.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f333.prototype.setIndex = function (p1712, p1713) {
          this.$indexes.set(p1712, p1713);
        };
        f333.prototype.getIndex = function (p1714) {
          return this.$indexes.get(p1714);
        };
        f333.prototype.getByIndex = function (p1715) {
          return this.$items.get(this.$indexes.get(p1715));
        };
        f333.prototype.deleteByIndex = function (p1716) {
          var v1293 = this.$indexes.get(p1716);
          this.$items.delete(v1293);
          this.$indexes.delete(p1716);
        };
        f333.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f333.prototype.toJSON = function () {
          var vA35 = [];
          this.forEach(function (p1717, p1718) {
            vA35.push(typeof p1717.toJSON === "function" ? p1717.toJSON() : p1717);
          });
          return vA35;
        };
        f333.prototype.clone = function (p1719) {
          var v1294;
          if (p1719) {
            v1294 = Object.assign(new f333(), this);
          } else {
            v1294 = new f333();
            this.forEach(function (p1720) {
              if (p1720.$changes) {
                v1294.add(p1720.clone());
              } else {
                v1294.add(p1720);
              }
            });
          }
          return v1294;
        };
        return f333;
      }();
      var vF34 = function () {
        function f334() {
          this.refIds = new WeakSet();
          this.containerIndexes = new WeakMap();
        }
        f334.prototype.addRefId = function (p1721) {
          if (!this.refIds.has(p1721)) {
            this.refIds.add(p1721);
            this.containerIndexes.set(p1721, new Set());
          }
        };
        f334.get = function (p1722) {
          if (p1722.$filterState === undefined) {
            p1722.$filterState = new f334();
          }
          return p1722.$filterState;
        };
        return f334;
      }();
      var vF35 = function () {
        function f335() {
          this.refs = new Map();
          this.refCounts = {};
          this.deletedRefs = new Set();
          this.nextUniqueId = 0;
        }
        f335.prototype.getNextUniqueId = function () {
          return this.nextUniqueId++;
        };
        f335.prototype.addRef = function (p1723, p1724, p1725 = true) {
          this.refs.set(p1723, p1724);
          if (p1725) {
            this.refCounts[p1723] = (this.refCounts[p1723] || 0) + 1;
          }
        };
        f335.prototype.removeRef = function (p1726) {
          var v1295 = this.refCounts[p1726];
          if (v1295 === undefined) {
            console.warn(`trying to remove reference ${p1726} that doesn't exist`);
            return;
          }
          if (v1295 === 0) {
            console.warn(`trying to remove reference ${p1726} with 0 refCount`);
            return;
          }
          this.refCounts[p1726] = v1295 - 1;
          this.deletedRefs.add(p1726);
        };
        f335.prototype.clearRefs = function () {
          this.refs.clear();
          this.deletedRefs.clear();
          this.refCounts = {};
        };
        f335.prototype.garbageCollectDeletedRefs = function () {
          var vThis145 = this;
          this.deletedRefs.forEach(function (p1727) {
            if (vThis145.refCounts[p1727] > 0) {
              return;
            }
            var v1296 = vThis145.refs.get(p1727);
            if (v1296 instanceof vF38) {
              for (var v1297 in v1296._definition.schema) {
                if (typeof v1296._definition.schema[v1297] !== "string" && v1296[v1297] && v1296[v1297].$changes) {
                  vThis145.removeRef(v1296[v1297].$changes.refId);
                }
              }
            } else {
              var v1298 = v1296.$changes.parent._definition;
              var v1299 = v1298.schema[v1298.fieldsByIndex[v1296.$changes.parentIndex]];
              if (typeof Object.values(v1299)[0] === "function") {
                Array.from(v1296.values()).forEach(function (p1728) {
                  return vThis145.removeRef(p1728.$changes.refId);
                });
              }
            }
            vThis145.refs.delete(p1727);
            delete vThis145.refCounts[p1727];
          });
          this.deletedRefs.clear();
        };
        return f335;
      }();
      var vF37 = function (p1729) {
        f272(f336, p1729);
        function f336() {
          return p1729 !== null && p1729.apply(this, arguments) || this;
        }
        return f336;
      }(Error);
      function f337(p1730, p1731, p1732, p1733) {
        var v1300;
        var v1301 = false;
        switch (p1731) {
          case "number":
          case "int8":
          case "uint8":
          case "int16":
          case "uint16":
          case "int32":
          case "uint32":
          case "int64":
          case "uint64":
          case "float32":
          case "float64":
            v1300 = "number";
            if (isNaN(p1730)) {
              console.log(`trying to encode "NaN" in ${p1732.constructor.name}#${p1733}`);
            }
            break;
          case "string":
            v1300 = "string";
            v1301 = true;
            break;
          case "boolean":
            return;
        }
        if (typeof p1730 !== v1300 && (!v1301 || v1301 && p1730 !== null)) {
          var v1302 = `'${JSON.stringify(p1730)}'${p1730 && p1730.constructor && ` (${p1730.constructor.name})` || ""}`;
          throw new vF37(`a '${v1300}' was expected, but ${v1302} was provided in ${p1732.constructor.name}#${p1733}`);
        }
      }
      function f338(p1734, p1735, p1736, p1737) {
        if (!(p1734 instanceof p1735)) {
          throw new vF37(`a '${p1735.name}' was expected, but '${p1734.constructor.name}' was provided in ${p1736.constructor.name}#${p1737}`);
        }
      }
      function f339(p1738, p1739, p1740, p1741, p1742) {
        f337(p1740, p1738, p1741, p1742);
        var v1303 = v1263[p1738];
        if (v1303) {
          v1303(p1739, p1740);
        } else {
          throw new vF37(`a '${p1738}' was expected, but ${p1740} was provided in ${p1741.constructor.name}#${p1742}`);
        }
      }
      function f340(p1743, p1744, p1745) {
        return v1276[p1743](p1744, p1745);
      }
      var vF38 = function () {
        function f341() {
          var vA36 = [];
          for (var vLN0222 = 0; vLN0222 < arguments.length; vLN0222++) {
            vA36[vLN0222] = arguments[vLN0222];
          }
          Object.defineProperties(this, {
            $changes: {
              value: new vF26(this, undefined, new vF35()),
              enumerable: false,
              writable: true
            },
            $callbacks: {
              value: undefined,
              enumerable: false,
              writable: true
            }
          });
          var v1304 = this._definition.descriptors;
          if (v1304) {
            Object.defineProperties(this, v1304);
          }
          if (vA36[0]) {
            this.assign(vA36[0]);
          }
        }
        f341.onError = function (p1746) {
          console.error(p1746);
        };
        f341.is = function (p1747) {
          return p1747._definition && p1747._definition.schema !== undefined;
        };
        f341.prototype.onChange = function (p1748) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.REPLACE, p1748);
        };
        f341.prototype.onRemove = function (p1749) {
          return f277(this.$callbacks ||= {}, p1387.OPERATION.DELETE, p1749);
        };
        f341.prototype.assign = function (p1750) {
          Object.assign(this, p1750);
          return this;
        };
        Object.defineProperty(f341.prototype, "_definition", {
          get: function () {
            return this.constructor._definition;
          },
          enumerable: false,
          configurable: true
        });
        f341.prototype.setDirty = function (p1751, p1752) {
          this.$changes.change(p1751, p1752);
        };
        f341.prototype.listen = function (p1753, p1754, p1755) {
          var vThis146 = this;
          if (p1755 === undefined) {
            p1755 = true;
          }
          if (!this.$callbacks) {
            this.$callbacks = {};
          }
          if (!this.$callbacks[p1753]) {
            this.$callbacks[p1753] = [];
          }
          this.$callbacks[p1753].push(p1754);
          if (p1755 && this[p1753] !== undefined) {
            p1754(this[p1753], undefined);
          }
          return function () {
            return f279(vThis146.$callbacks[p1753], vThis146.$callbacks[p1753].indexOf(p1754));
          };
        };
        f341.prototype.decode = function (p1756, p1757 = {
          offset: 0
        }, p1758 = this) {
          var vA37 = [];
          var v1305 = this.$changes.root;
          var v1306 = p1756.length;
          var vLN0223 = 0;
          v1305.refs.set(vLN0223, this);
          while (p1757.offset < v1306) {
            var v1307 = p1756[p1757.offset++];
            if (v1307 == vLN255) {
              vLN0223 = f328(p1756, p1757);
              var v1308 = v1305.refs.get(vLN0223);
              if (!v1308) {
                throw new Error(`"refId" not found: ${vLN0223}`);
              }
              p1758 = v1308;
              continue;
            }
            var v1309 = p1758.$changes;
            var v1310 = p1758._definition !== undefined;
            var v1311 = v1310 ? v1307 >> 6 << 6 : v1307;
            if (v1311 === p1387.OPERATION.CLEAR) {
              p1758.clear(vA37);
              continue;
            }
            var v1312 = v1310 ? v1307 % (v1311 || 255) : f328(p1756, p1757);
            var v1313 = v1310 ? p1758._definition.fieldsByIndex[v1312] : "";
            var v1314 = v1309.getType(v1312);
            var vUndefined20 = undefined;
            var vUndefined21 = undefined;
            var vUndefined22 = undefined;
            if (!v1310) {
              vUndefined21 = p1758.getByIndex(v1312);
              if ((v1311 & p1387.OPERATION.ADD) === p1387.OPERATION.ADD) {
                vUndefined22 = p1758 instanceof vF28 ? f326(p1756, p1757) : v1312;
                p1758.setIndex(v1312, vUndefined22);
              } else {
                vUndefined22 = p1758.getIndex(v1312);
              }
            } else {
              vUndefined21 = p1758[`_${v1313}`];
            }
            if ((v1311 & p1387.OPERATION.DELETE) === p1387.OPERATION.DELETE) {
              if (v1311 !== p1387.OPERATION.DELETE_AND_ADD) {
                p1758.deleteByIndex(v1312);
              }
              if (vUndefined21 && vUndefined21.$changes) {
                v1305.removeRef(vUndefined21.$changes.refId);
              }
              vUndefined20 = null;
            }
            if (v1313 === undefined) {
              console.warn("@colyseus/schema: definition mismatch");
              var vO69 = {
                offset: p1757.offset
              };
              while (p1757.offset < v1306) {
                if (f331(p1756, p1757)) {
                  vO69.offset = p1757.offset + 1;
                  if (v1305.refs.has(f328(p1756, vO69))) {
                    break;
                  }
                }
                p1757.offset++;
              }
              continue;
            } else if (v1311 === p1387.OPERATION.DELETE) ;else if (f341.is(v1314)) {
              var vF328 = f328(p1756, p1757);
              vUndefined20 = v1305.refs.get(vF328);
              if (v1311 !== p1387.OPERATION.REPLACE) {
                var v1315 = this.getSchemaType(p1756, p1757, v1314);
                if (!vUndefined20) {
                  vUndefined20 = this.createTypeInstance(v1315);
                  vUndefined20.$changes.refId = vF328;
                  if (vUndefined21) {
                    vUndefined20.$callbacks = vUndefined21.$callbacks;
                    if (vUndefined21.$changes.refId && vF328 !== vUndefined21.$changes.refId) {
                      v1305.removeRef(vUndefined21.$changes.refId);
                    }
                  }
                }
                v1305.addRef(vF328, vUndefined20, vUndefined20 !== vUndefined21);
              }
            } else if (typeof v1314 === "string") {
              vUndefined20 = f340(v1314, p1756, p1757);
            } else {
              var vF286 = f286(Object.keys(v1314)[0]);
              var vF3282 = f328(p1756, p1757);
              var v1316 = v1305.refs.has(vF3282) ? vUndefined21 || v1305.refs.get(vF3282) : new vF286.constructor();
              vUndefined20 = v1316.clone(true);
              vUndefined20.$changes.refId = vF3282;
              if (vUndefined21) {
                vUndefined20.$callbacks = vUndefined21.$callbacks;
                if (vUndefined21.$changes.refId && vF3282 !== vUndefined21.$changes.refId) {
                  v1305.removeRef(vUndefined21.$changes.refId);
                  var v1317 = vUndefined21.entries();
                  var vUndefined23 = undefined;
                  while ((vUndefined23 = v1317.next()) && !vUndefined23.done) {
                    var v1318 = vUndefined23.value;
                    var vVUndefined22 = v1318[0];
                    var v1320 = v1318[1];
                    vA37.push({
                      refId: vF3282,
                      op: p1387.OPERATION.DELETE,
                      field: vVUndefined22,
                      value: undefined,
                      previousValue: v1320
                    });
                  }
                }
              }
              v1305.addRef(vF3282, vUndefined20, v1316 !== vUndefined21);
            }
            if (vUndefined20 !== null && vUndefined20 !== undefined) {
              if (vUndefined20.$changes) {
                vUndefined20.$changes.setParent(v1309.ref, v1309.root, v1312);
              }
              if (p1758 instanceof f341) {
                p1758[v1313] = vUndefined20;
              } else if (p1758 instanceof vF28) {
                var vVUndefined22 = vUndefined22;
                p1758.$items.set(vVUndefined22, vUndefined20);
                p1758.$changes.allChanges.add(v1312);
              } else if (p1758 instanceof vF27) {
                p1758.setAt(v1312, vUndefined20);
              } else if (p1758 instanceof vF31) {
                var v1322 = p1758.add(vUndefined20);
                p1758.setIndex(v1312, v1322);
              } else if (p1758 instanceof vF33) {
                var v1322 = p1758.add(vUndefined20);
                if (v1322 !== false) {
                  p1758.setIndex(v1312, v1322);
                }
              }
            }
            if (vUndefined21 !== vUndefined20) {
              vA37.push({
                refId: vLN0223,
                op: v1311,
                field: v1313,
                dynamicIndex: vUndefined22,
                value: vUndefined20,
                previousValue: vUndefined21
              });
            }
          }
          this._triggerChanges(vA37);
          v1305.garbageCollectDeletedRefs();
          return vA37;
        };
        f341.prototype.encode = function (p1759 = false, p1760 = [], p1761 = false) {
          var v1323 = this.$changes;
          var v1324 = new WeakSet();
          var vA38 = [v1323];
          var vLN114 = 1;
          for (var vLN0224 = 0; vLN0224 < vLN114; vLN0224++) {
            var v1325 = vA38[vLN0224];
            var v1326 = v1325.ref;
            var v1327 = v1326 instanceof f341;
            v1325.ensureRefId();
            v1324.add(v1325);
            if (v1325 !== v1323 && (v1325.changed || p1759)) {
              f298(p1760, vLN255);
              f311(p1760, v1325.refId);
            }
            var v1328 = p1759 ? Array.from(v1325.allChanges) : Array.from(v1325.changes.values());
            for (var vLN0225 = 0, v1329 = v1328.length; vLN0225 < v1329; vLN0225++) {
              var v1330 = p1759 ? {
                op: p1387.OPERATION.ADD,
                index: v1328[vLN0225]
              } : v1328[vLN0225];
              var v1331 = v1330.index;
              var v1332 = v1327 ? v1326._definition.fieldsByIndex && v1326._definition.fieldsByIndex[v1331] : v1331;
              var v1333 = p1760.length;
              if (v1330.op !== p1387.OPERATION.TOUCH) {
                if (v1327) {
                  f298(p1760, v1331 | v1330.op);
                } else {
                  f298(p1760, v1330.op);
                  if (v1330.op === p1387.OPERATION.CLEAR) {
                    continue;
                  }
                  f311(p1760, v1331);
                }
              }
              if (!v1327 && (v1330.op & p1387.OPERATION.ADD) == p1387.OPERATION.ADD) {
                if (v1326 instanceof vF28) {
                  var v1334 = v1325.ref.$indexes.get(v1331);
                  f310(p1760, v1334);
                }
              }
              if (v1330.op === p1387.OPERATION.DELETE) {
                continue;
              }
              var v1335 = v1325.getType(v1331);
              var v1336 = v1325.getValue(v1331);
              if (v1336 && v1336.$changes && !v1324.has(v1336.$changes)) {
                vA38.push(v1336.$changes);
                v1336.$changes.ensureRefId();
                vLN114++;
              }
              if (v1330.op === p1387.OPERATION.TOUCH) {
                continue;
              }
              if (f341.is(v1335)) {
                f338(v1336, v1335, v1326, v1332);
                f311(p1760, v1336.$changes.refId);
                if ((v1330.op & p1387.OPERATION.ADD) === p1387.OPERATION.ADD) {
                  this.tryEncodeTypeId(p1760, v1335, v1336.constructor);
                }
              } else if (typeof v1335 === "string") {
                f339(v1335, p1760, v1336, v1326, v1332);
              } else {
                var vF2862 = f286(Object.keys(v1335)[0]);
                f338(v1326[`_${v1332}`], vF2862.constructor, v1326, v1332);
                f311(p1760, v1336.$changes.refId);
              }
              if (p1761) {
                v1325.cache(v1331, p1760.slice(v1333));
              }
            }
            if (!p1759 && !p1761) {
              v1325.discard();
            }
          }
          return p1760;
        };
        f341.prototype.encodeAll = function (p1762) {
          return this.encode(true, [], p1762);
        };
        f341.prototype.applyFilters = function (p1763, p1764 = false) {
          var vThis147 = this;
          var v1337 = new Set();
          var v1338 = vF34.get(p1763);
          var vA39 = [this.$changes];
          var vLN115 = 1;
          var vA40 = [];
          function f342(p1765) {
            var v1339 = vA39[p1765];
            if (v1337.has(v1339.refId)) {
              return "continue";
            }
            var v1340 = v1339.ref;
            var v1341 = v1340 instanceof f341;
            f298(vA40, vLN255);
            f311(vA40, v1339.refId);
            var v1342 = v1338.refIds.has(v1339);
            var v1343 = p1764 || !v1342;
            v1338.addRefId(v1339);
            var v1344 = v1338.containerIndexes.get(v1339);
            var v1345 = v1343 ? Array.from(v1339.allChanges) : Array.from(v1339.changes.values());
            if (!p1764 && v1341 && v1340._definition.indexesWithFilters) {
              var v1346 = v1340._definition.indexesWithFilters;
              v1346.forEach(function (p1766) {
                if (!v1344.has(p1766) && v1339.allChanges.has(p1766)) {
                  if (v1343) {
                    v1345.push(p1766);
                  } else {
                    v1345.push({
                      op: p1387.OPERATION.ADD,
                      index: p1766
                    });
                  }
                }
              });
            }
            for (var vLN0226 = 0, v1347 = v1345.length; vLN0226 < v1347; vLN0226++) {
              var v1348 = v1343 ? {
                op: p1387.OPERATION.ADD,
                index: v1345[vLN0226]
              } : v1345[vLN0226];
              if (v1348.op === p1387.OPERATION.CLEAR) {
                f298(vA40, v1348.op);
                continue;
              }
              var v1349 = v1348.index;
              if (v1348.op === p1387.OPERATION.DELETE) {
                if (v1341) {
                  f298(vA40, v1348.op | v1349);
                } else {
                  f298(vA40, v1348.op);
                  f311(vA40, v1349);
                }
                continue;
              }
              var v1350 = v1339.getValue(v1349);
              var v1351 = v1339.getType(v1349);
              if (v1341) {
                var v1354 = v1340._definition.filters && v1340._definition.filters[v1349];
                if (v1354 && !v1354.call(v1340, p1763, v1350, vThis147)) {
                  if (v1350 && v1350.$changes) {
                    v1337.add(v1350.$changes.refId);
                  }
                  continue;
                }
              } else {
                var v1353 = v1339.parent;
                var v1354 = v1339.getChildrenFilter();
                if (v1354 && !v1354.call(v1353, p1763, v1340.$indexes.get(v1349), v1350, vThis147)) {
                  if (v1350 && v1350.$changes) {
                    v1337.add(v1350.$changes.refId);
                  }
                  continue;
                }
              }
              if (v1350.$changes) {
                vA39.push(v1350.$changes);
                vLN115++;
              }
              if (v1348.op !== p1387.OPERATION.TOUCH) {
                if (v1348.op === p1387.OPERATION.ADD || v1341) {
                  vA40.push.apply(vA40, v1339.caches[v1349] ?? []);
                  v1344.add(v1349);
                } else if (v1344.has(v1349)) {
                  vA40.push.apply(vA40, v1339.caches[v1349] ?? []);
                } else {
                  v1344.add(v1349);
                  f298(vA40, p1387.OPERATION.ADD);
                  f311(vA40, v1349);
                  if (v1340 instanceof vF28) {
                    var v1356 = v1339.ref.$indexes.get(v1349);
                    f310(vA40, v1356);
                  }
                  if (v1350.$changes) {
                    f311(vA40, v1350.$changes.refId);
                  } else {
                    v1263[v1351](vA40, v1350);
                  }
                }
              } else if (v1350.$changes && !v1341) {
                f298(vA40, p1387.OPERATION.ADD);
                f311(vA40, v1349);
                if (v1340 instanceof vF28) {
                  var v1356 = v1339.ref.$indexes.get(v1349);
                  f310(vA40, v1356);
                }
                f311(vA40, v1350.$changes.refId);
              }
            }
          }
          for (var vLN0227 = 0; vLN0227 < vLN115; vLN0227++) {
            f342(vLN0227);
          }
          return vA40;
        };
        f341.prototype.clone = function () {
          var v1357 = new this.constructor();
          var v1358 = this._definition.schema;
          for (var v1359 in v1358) {
            if (typeof this[v1359] === "object" && typeof this[v1359]?.clone === "function") {
              v1357[v1359] = this[v1359].clone();
            } else {
              v1357[v1359] = this[v1359];
            }
          }
          return v1357;
        };
        f341.prototype.toJSON = function () {
          var v1360 = this._definition.schema;
          var v1361 = this._definition.deprecated;
          var vO70 = {};
          for (var v1362 in v1360) {
            if (!v1361[v1362] && this[v1362] !== null && typeof this[v1362] !== "undefined") {
              vO70[v1362] = typeof this[v1362].toJSON === "function" ? this[v1362].toJSON() : this[`_${v1362}`];
            }
          }
          return vO70;
        };
        f341.prototype.discardAllChanges = function () {
          this.$changes.discardAll();
        };
        f341.prototype.getByIndex = function (p1767) {
          return this[this._definition.fieldsByIndex[p1767]];
        };
        f341.prototype.deleteByIndex = function (p1768) {
          this[this._definition.fieldsByIndex[p1768]] = undefined;
        };
        f341.prototype.tryEncodeTypeId = function (p1769, p1770, p1771) {
          if (p1770._typeid !== p1771._typeid) {
            f298(p1769, vLN213);
            f311(p1769, p1771._typeid);
          }
        };
        f341.prototype.getSchemaType = function (p1772, p1773, p1774) {
          var v1363;
          if (p1772[p1773.offset] === vLN213) {
            p1773.offset++;
            v1363 = this.constructor._context.get(f328(p1772, p1773));
          }
          return v1363 || p1774;
        };
        f341.prototype.createTypeInstance = function (p1775) {
          var v1364 = new p1775();
          v1364.$changes.root = this.$changes.root;
          return v1364;
        };
        f341.prototype._triggerChanges = function (p1776) {
          var v1365;
          var v1366;
          var v1367;
          var v1368;
          var v1369;
          var v1370;
          var v1371;
          var v1372;
          var v1373 = new Set();
          var v1374 = this.$changes.root.refs;
          function f343(p1777) {
            var v1375 = p1776[p1777];
            var v1376 = v1375.refId;
            var v1377 = v1374.get(v1376);
            var v1378 = v1377.$callbacks;
            if ((v1375.op & p1387.OPERATION.DELETE) === p1387.OPERATION.DELETE && v1375.previousValue instanceof f341) {
              if ((v1365 = v1375.previousValue.$callbacks?.[p1387.OPERATION.DELETE]) === null || v1365 === undefined) {
                undefined;
              } else {
                v1365.forEach(function (p1778) {
                  return p1778();
                });
              }
            }
            if (!v1378) {
              return "continue";
            }
            if (v1377 instanceof f341) {
              if (!v1373.has(v1376)) {
                try {
                  if ((v1366 = v1378?.[p1387.OPERATION.REPLACE]) === null || v1366 === undefined) {
                    undefined;
                  } else {
                    v1366.forEach(function (p1779) {
                      return p1779();
                    });
                  }
                } catch (e61) {
                  f341.onError(e61);
                }
              }
              try {
                if (v1378.hasOwnProperty(v1375.field)) {
                  if ((v1367 = v1378[v1375.field]) === null || v1367 === undefined) {
                    undefined;
                  } else {
                    v1367.forEach(function (p1780) {
                      return p1780(v1375.value, v1375.previousValue);
                    });
                  }
                }
              } catch (e62) {
                f341.onError(e62);
              }
            } else {
              if (v1375.op === p1387.OPERATION.ADD && v1375.previousValue === undefined) {
                if ((v1368 = v1378[p1387.OPERATION.ADD]) === null || v1368 === undefined) {
                  undefined;
                } else {
                  v1368.forEach(function (p1781) {
                    return p1781(v1375.value, v1375.dynamicIndex ?? v1375.field);
                  });
                }
              } else if (v1375.op === p1387.OPERATION.DELETE) {
                if (v1375.previousValue !== undefined) {
                  if ((v1369 = v1378[p1387.OPERATION.DELETE]) === null || v1369 === undefined) {
                    undefined;
                  } else {
                    v1369.forEach(function (p1782) {
                      return p1782(v1375.previousValue, v1375.dynamicIndex ?? v1375.field);
                    });
                  }
                }
              } else if (v1375.op === p1387.OPERATION.DELETE_AND_ADD) {
                if (v1375.previousValue !== undefined) {
                  if ((v1370 = v1378[p1387.OPERATION.DELETE]) === null || v1370 === undefined) {
                    undefined;
                  } else {
                    v1370.forEach(function (p1783) {
                      return p1783(v1375.previousValue, v1375.dynamicIndex ?? v1375.field);
                    });
                  }
                }
                if ((v1371 = v1378[p1387.OPERATION.ADD]) === null || v1371 === undefined) {
                  undefined;
                } else {
                  v1371.forEach(function (p1784) {
                    return p1784(v1375.value, v1375.dynamicIndex ?? v1375.field);
                  });
                }
              }
              if (v1375.value !== v1375.previousValue) {
                if ((v1372 = v1378[p1387.OPERATION.REPLACE]) === null || v1372 === undefined) {
                  undefined;
                } else {
                  v1372.forEach(function (p1785) {
                    return p1785(v1375.value, v1375.dynamicIndex ?? v1375.field);
                  });
                }
              }
            }
            v1373.add(v1376);
          }
          for (var vLN0228 = 0; vLN0228 < p1776.length; vLN0228++) {
            f343(vLN0228);
          }
        };
        f341._definition = vF29.create();
        return f341;
      }();
      function f344(p1786) {
        var vA41 = [p1786.$changes];
        var vLN116 = 1;
        var vO71 = {};
        var vVO71 = vO71;
        function f345(p1787) {
          var v1379 = vA41[p1787];
          v1379.changes.forEach(function (p1788) {
            var v1380 = v1379.ref;
            var v1381 = p1788.index;
            var v1382 = v1380._definition ? v1380._definition.fieldsByIndex[v1381] : v1380.$indexes.get(v1381);
            vVO71[v1382] = v1379.getValue(v1381);
          });
        }
        for (var vLN0229 = 0; vLN0229 < vLN116; vLN0229++) {
          f345(vLN0229);
        }
        return vO71;
      }
      var vO72 = {
        context: new vF30()
      };
      var vF40 = function (p1789) {
        f272(f346, p1789);
        function f346() {
          return p1789 !== null && p1789.apply(this, arguments) || this;
        }
        f274([f290("string", vO72)], f346.prototype, "name", undefined);
        f274([f290("string", vO72)], f346.prototype, "type", undefined);
        f274([f290("number", vO72)], f346.prototype, "referencedType", undefined);
        return f346;
      }(vF38);
      var vF41 = function (p1790) {
        f272(f347, p1790);
        function f347() {
          var v1383 = p1790 !== null && p1790.apply(this, arguments) || this;
          v1383.fields = new vF27();
          return v1383;
        }
        f274([f290("number", vO72)], f347.prototype, "id", undefined);
        f274([f290([vF40], vO72)], f347.prototype, "fields", undefined);
        return f347;
      }(vF38);
      var vF42 = function (p1791) {
        f272(f348, p1791);
        function f348() {
          var v1384 = p1791 !== null && p1791.apply(this, arguments) || this;
          v1384.types = new vF27();
          return v1384;
        }
        f348.encode = function (p1792) {
          var v1385 = p1792.constructor;
          var v1386 = new f348();
          v1386.rootType = v1385._typeid;
          function f349(p1793, p1794) {
            for (var v1387 in p1794) {
              var v1388 = new vF40();
              v1388.name = v1387;
              var vUndefined24 = undefined;
              if (typeof p1794[v1387] === "string") {
                vUndefined24 = p1794[v1387];
              } else {
                var v1389 = p1794[v1387];
                var vUndefined25 = undefined;
                if (vF38.is(v1389)) {
                  vUndefined24 = "ref";
                  vUndefined25 = p1794[v1387];
                } else {
                  vUndefined24 = Object.keys(v1389)[0];
                  if (typeof v1389[vUndefined24] === "string") {
                    vUndefined24 += ":" + v1389[vUndefined24];
                  } else {
                    vUndefined25 = v1389[vUndefined24];
                  }
                }
                v1388.referencedType = vUndefined25 ? vUndefined25._typeid : -1;
              }
              v1388.type = vUndefined24;
              p1793.fields.push(v1388);
            }
            v1386.types.push(p1793);
          }
          var v1390 = v1385._context?.types;
          for (var v1391 in v1390) {
            var v1392 = new vF41();
            v1392.id = Number(v1391);
            f349(v1392, v1390[v1391]._definition.schema);
          }
          return v1386.encodeAll();
        };
        f348.decode = function (p1795, p1796) {
          var v1393 = new vF30();
          var v1394 = new f348();
          v1394.decode(p1795, p1796);
          var v1395 = v1394.types.reduce(function (p1797, p1798) {
            var vF43 = function (p1799) {
              f272(f350, p1799);
              function f350() {
                return p1799 !== null && p1799.apply(this, arguments) || this;
              }
              return f350;
            }(vF38);
            var v1396 = p1798.id;
            p1797[v1396] = vF43;
            v1393.add(vF43, v1396);
            return p1797;
          }, {});
          v1394.types.forEach(function (p1800) {
            var v1397 = v1395[p1800.id];
            p1800.fields.forEach(function (p1801) {
              var v1398;
              if (p1801.referencedType !== undefined) {
                var v1399 = p1801.type;
                var v1400 = v1395[p1801.referencedType];
                if (!v1400) {
                  var v1401 = p1801.type.split(":");
                  v1399 = v1401[0];
                  v1400 = v1401[1];
                }
                if (v1399 === "ref") {
                  f290(v1400, {
                    context: v1393
                  })(v1397.prototype, p1801.name);
                } else {
                  f290((v1398 = {}, v1398[v1399] = v1400, v1398), {
                    context: v1393
                  })(v1397.prototype, p1801.name);
                }
              } else {
                f290(p1801.type, {
                  context: v1393
                })(v1397.prototype, p1801.name);
              }
            });
          });
          var v1402 = v1395[v1394.rootType];
          var v1403 = new v1402();
          for (var v1404 in v1402._definition.schema) {
            var v1405 = v1402._definition.schema[v1404];
            if (typeof v1405 !== "string") {
              v1403[v1404] = typeof v1405 === "function" ? new v1405() : new (f286(Object.keys(v1405)[0]).constructor)();
            }
          }
          return v1403;
        };
        f274([f290([vF41], vO72)], f348.prototype, "types", undefined);
        f274([f290("number", vO72)], f348.prototype, "rootType", undefined);
        return f348;
      }(vF38);
      f285("map", {
        constructor: vF28
      });
      f285("array", {
        constructor: vF27
      });
      f285("set", {
        constructor: vF33
      });
      f285("collection", {
        constructor: vF31
      });
      p1387.ArraySchema = vF27;
      p1387.CollectionSchema = vF31;
      p1387.Context = vF30;
      p1387.MapSchema = vF28;
      p1387.Reflection = vF42;
      p1387.ReflectionField = vF40;
      p1387.ReflectionType = vF41;
      p1387.Schema = vF38;
      p1387.SchemaDefinition = vF29;
      p1387.SetSchema = vF33;
      p1387.decode = v1276;
      p1387.defineTypes = f294;
      p1387.deprecated = f293;
      p1387.dumpChanges = f344;
      p1387.encode = v1263;
      p1387.filter = f291;
      p1387.filterChildren = f292;
      p1387.hasFilter = f288;
      p1387.registerType = f285;
      p1387.type = f290;
    });
  }, function (p1802, p1803, p1804) {
    'use strict';

    var v1406 = this && this.__createBinding || (Object.create ? function (p1805, p1806, p1807, p1808 = p1807) {
      var v1407 = Object.getOwnPropertyDescriptor(p1806, p1807);
      if (!v1407 || ("get" in v1407 ? !p1806.__esModule : v1407.writable || v1407.configurable)) {
        v1407 = {
          enumerable: true,
          get: function () {
            return p1806[p1807];
          }
        };
      }
      Object.defineProperty(p1805, p1808, v1407);
    } : function (p1809, p1810, p1811, p1812 = p1811) {
      p1809[p1812] = p1810[p1811];
    });
    var v1408 = this && this.__setModuleDefault || (Object.create ? function (p1813, p1814) {
      Object.defineProperty(p1813, "default", {
        enumerable: true,
        value: p1814
      });
    } : function (p1815, p1816) {
      p1815.default = p1816;
    });
    var v1409 = this && this.__importStar || function (p1817) {
      if (p1817 && p1817.__esModule) {
        return p1817;
      }
      var vO73 = {};
      if (p1817 != null) {
        for (var v1410 in p1817) {
          if (v1410 !== "default" && Object.prototype.hasOwnProperty.call(p1817, v1410)) {
            v1406(vO73, p1817, v1410);
          }
        }
      }
      v1408(vO73, p1817);
      return vO73;
    };
    Object.defineProperty(p1803, "__esModule", {
      value: true
    });
    p1803.HTTP = undefined;
    const vP1804 = p1804(5);
    const vV1409 = v1409(p1804(17));
    class C8 {
      constructor(p1818, p1819 = {}) {
        this.client = p1818;
        this.headers = p1819;
      }
      get(p1820, p1821 = {}) {
        return this.request("get", p1820, p1821);
      }
      post(p1822, p1823 = {}) {
        return this.request("post", p1822, p1823);
      }
      del(p1824, p1825 = {}) {
        return this.request("del", p1824, p1825);
      }
      put(p1826, p1827 = {}) {
        return this.request("put", p1826, p1827);
      }
      request(p1828, p1829, p1830 = {}) {
        return vV1409[p1828](this.client.getHttpEndpoint(p1829), this.getOptions(p1830)).catch(p1831 => {
          const v1411 = p1831.statusCode;
          const v1412 = p1831.data?.error || p1831.statusMessage || p1831.message;
          if (!v1411 && !v1412) {
            throw p1831;
          }
          throw new vP1804.ServerError(v1411, v1412);
        });
      }
      getOptions(p1832) {
        p1832.headers = Object.assign({}, this.headers, p1832.headers);
        if (this.authToken) {
          p1832.headers.Authorization = "Bearer " + this.authToken;
        }
        if (typeof cc !== "undefined" && cc.sys && cc.sys.isNative) {} else {
          p1832.withCredentials = true;
        }
        return p1832;
      }
    }
    p1803.HTTP = C8;
  }, (p1833, p1834, p1835) => {
    'use strict';

    p1835.r(p1834);
    p1835.d(p1834, {
      del: () => v1422,
      get: () => v1419,
      patch: () => v1421,
      post: () => v1420,
      put: () => v1423,
      send: () => f352
    });
    function f351(p1836, p1837) {
      p1837.headers = p1836.headers || {};
      p1837.statusMessage = p1836.statusText;
      p1837.statusCode = p1836.status;
      p1837.data = p1836.response;
    }
    function f352(p1838, p1839, p1840) {
      return new Promise(function (p1841, p1842) {
        p1840 = p1840 || {};
        var v1413 = new XMLHttpRequest();
        var v1414;
        var v1415;
        var v1416;
        var v1417 = p1840.body;
        var v1418 = p1840.headers || {};
        if (p1840.timeout) {
          v1413.timeout = p1840.timeout;
        }
        v1413.ontimeout = v1413.onerror = function (p1843) {
          p1843.timeout = p1843.type == "timeout";
          p1842(p1843);
        };
        v1413.open(p1838, p1839.href || p1839);
        v1413.onload = function () {
          v1416 = v1413.getAllResponseHeaders().trim().split(/[\r\n]+/);
          f351(v1413, v1413);
          while (v1415 = v1416.shift()) {
            v1415 = v1415.split(": ");
            v1413.headers[v1415.shift().toLowerCase()] = v1415.join(": ");
          }
          v1415 = v1413.headers["content-type"];
          if (v1415 && !!~v1415.indexOf("application/json")) {
            try {
              v1413.data = JSON.parse(v1413.data, p1840.reviver);
            } catch (e63) {
              f351(v1413, e63);
              return p1842(e63);
            }
          }
          (v1413.status >= 400 ? p1842 : p1841)(v1413);
        };
        if (typeof FormData !== "undefined" && v1417 instanceof FormData) {} else if (v1417 && typeof v1417 == "object") {
          v1418["content-type"] = "application/json";
          v1417 = JSON.stringify(v1417);
        }
        v1413.withCredentials = !!p1840.withCredentials;
        for (v1414 in v1418) {
          v1413.setRequestHeader(v1414, v1418[v1414]);
        }
        v1413.send(v1417);
      });
    }
    var v1419 = f352.bind(f352, "GET");
    var v1420 = f352.bind(f352, "POST");
    var v1421 = f352.bind(f352, "PATCH");
    var v1422 = f352.bind(f352, "DELETE");
    var v1423 = f352.bind(f352, "PUT");
  }, function (p1844, p1845, p1846) {
    'use strict';

    var v1424 = this && this.__awaiter || function (p1847, p1848, p1849, p1850) {
      function f353(p1851) {
        if (p1851 instanceof p1849) {
          return p1851;
        } else {
          return new p1849(function (p1852) {
            p1852(p1851);
          });
        }
      }
      return new (p1849 ||= Promise)(function (p1853, p1854) {
        function f354(p1855) {
          try {
            f356(p1850.next(p1855));
          } catch (e64) {
            p1854(e64);
          }
        }
        function f355(p1856) {
          try {
            f356(p1850.throw(p1856));
          } catch (e65) {
            p1854(e65);
          }
        }
        function f356(p1857) {
          if (p1857.done) {
            p1853(p1857.value);
          } else {
            f353(p1857.value).then(f354, f355);
          }
        }
        f356((p1850 = p1850.apply(p1847, p1848 || [])).next());
      });
    };
    var v1425 = this && this.__classPrivateFieldGet || function (p1858, p1859, p1860, p1861) {
      if (p1860 === "a" && !p1861) {
        throw new TypeError("Private accessor was defined without a getter");
      }
      if (typeof p1859 === "function" ? p1858 !== p1859 || !p1861 : !p1859.has(p1858)) {
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      }
      if (p1860 === "m") {
        return p1861;
      } else if (p1860 === "a") {
        return p1861.call(p1858);
      } else if (p1861) {
        return p1861.value;
      } else {
        return p1859.get(p1858);
      }
    };
    var v1426 = this && this.__classPrivateFieldSet || function (p1862, p1863, p1864, p1865, p1866) {
      if (p1865 === "m") {
        throw new TypeError("Private method is not writable");
      }
      if (p1865 === "a" && !p1866) {
        throw new TypeError("Private accessor was defined without a setter");
      }
      if (typeof p1863 === "function" ? p1862 !== p1863 || !p1866 : !p1863.has(p1862)) {
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      }
      if (p1865 === "a") {
        p1866.call(p1862, p1864);
      } else if (p1866) {
        p1866.value = p1864;
      } else {
        p1863.set(p1862, p1864);
      }
      return p1864;
    };
    var v1427;
    var v1428;
    var v1429;
    var v1430;
    Object.defineProperty(p1845, "__esModule", {
      value: true
    });
    p1845.Auth = undefined;
    const vP1846 = p1846(19);
    const vP18462 = p1846(13);
    class C9 {
      constructor(p1867) {
        this.http = p1867;
        this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        };
        v1427.set(this, false);
        v1428.set(this, undefined);
        v1429.set(this, undefined);
        v1430.set(this, (0, vP18462.createNanoEvents)());
        (0, vP1846.getItem)(this.settings.key, p1868 => this.token = p1868);
      }
      set token(p1869) {
        this.http.authToken = p1869;
      }
      get token() {
        return this.http.authToken;
      }
      onChange(p1870) {
        const v1431 = v1425(this, v1430, "f").on("change", p1870);
        if (!v1425(this, v1427, "f")) {
          v1426(this, v1428, new Promise((p1871, p1872) => {
            this.getUserData().then(p1873 => {
              this.emitChange(Object.assign(Object.assign({}, p1873), {
                token: this.token
              }));
            }).catch(p1874 => {
              this.emitChange({
                user: null,
                token: undefined
              });
            }).finally(() => {
              p1871();
            });
          }), "f");
        }
        v1426(this, v1427, true, "f");
        return v1431;
      }
      getUserData() {
        return v1424(this, undefined, undefined, function* () {
          if (this.token) {
            return (yield this.http.get(this.settings.path + "/userdata")).data;
          } else {
            throw new Error("missing auth.token");
          }
        });
      }
      registerWithEmailAndPassword(p1875, p1876, p1877) {
        return v1424(this, undefined, undefined, function* () {
          const v1432 = (yield this.http.post(this.settings.path + "/register", {
            body: {
              email: p1875,
              password: p1876,
              options: p1877
            }
          })).data;
          this.emitChange(v1432);
          return v1432;
        });
      }
      signInWithEmailAndPassword(p1878, p1879) {
        return v1424(this, undefined, undefined, function* () {
          const v1433 = (yield this.http.post(this.settings.path + "/login", {
            body: {
              email: p1878,
              password: p1879
            }
          })).data;
          this.emitChange(v1433);
          return v1433;
        });
      }
      signInAnonymously(p1880) {
        return v1424(this, undefined, undefined, function* () {
          const v1434 = (yield this.http.post(this.settings.path + "/anonymous", {
            body: {
              options: p1880
            }
          })).data;
          this.emitChange(v1434);
          return v1434;
        });
      }
      sendPasswordResetEmail(p1881) {
        return v1424(this, undefined, undefined, function* () {
          return (yield this.http.post(this.settings.path + "/forgot-password", {
            body: {
              email: p1881
            }
          })).data;
        });
      }
      signInWithProvider(p1882, p1883 = {}) {
        return v1424(this, undefined, undefined, function* () {
          return new Promise((p1884, p1885) => {
            const v1435 = p1883.width || 480;
            const v1436 = p1883.height || 768;
            const v1437 = this.token ? "?token=" + this.token : "";
            const v1438 = "Login with " + (p1882[0].toUpperCase() + p1882.substring(1));
            const v1439 = this.http.client.getHttpEndpoint((p1883.prefix || this.settings.path + "/provider") + "/" + p1882 + v1437);
            const v1440 = screen.width / 2 - v1435 / 2;
            const v1441 = screen.height / 2 - v1436 / 2;
            v1426(this, v1429, window.open(v1439, v1438, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + v1435 + ", height=" + v1436 + ", top=" + v1441 + ", left=" + v1440), "f");
            const vF44 = p1886 => {
              if (p1886.data.user === undefined && p1886.data.token === undefined) {
                return;
              }
              clearInterval(vSetInterval2);
              v1425(this, v1429, "f").close();
              v1426(this, v1429, undefined, "f");
              window.removeEventListener("message", vF44);
              if (p1886.data.error !== undefined) {
                p1885(p1886.data.error);
              } else {
                p1884(p1886.data);
                this.emitChange(p1886.data);
              }
            };
            const vSetInterval2 = setInterval(() => {
              if (!v1425(this, v1429, "f") || v1425(this, v1429, "f").closed) {
                v1426(this, v1429, undefined, "f");
                p1885("cancelled");
                window.removeEventListener("message", vF44);
              }
            }, 200);
            window.addEventListener("message", vF44);
          });
        });
      }
      signOut() {
        return v1424(this, undefined, undefined, function* () {
          this.emitChange({
            user: null,
            token: null
          });
        });
      }
      emitChange(p1887) {
        if (p1887.token !== undefined) {
          this.token = p1887.token;
          if (p1887.token === null) {
            (0, vP1846.removeItem)(this.settings.key);
          } else {
            (0, vP1846.setItem)(this.settings.key, p1887.token);
          }
        }
        v1425(this, v1430, "f").emit("change", p1887);
      }
    }
    p1845.Auth = C9;
    v1427 = new WeakMap();
    v1428 = new WeakMap();
    v1429 = new WeakMap();
    v1430 = new WeakMap();
  }, (p1888, p1889) => {
    'use strict';

    Object.defineProperty(p1889, "__esModule", {
      value: true
    });
    p1889.getItem = p1889.removeItem = p1889.setItem = undefined;
    let v1442;
    function f357() {
      if (!v1442) {
        try {
          v1442 = typeof cc !== "undefined" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage;
        } catch (e66) {}
      }
      if (!v1442) {
        v1442 = {
          cache: {},
          setItem: function (p1890, p1891) {
            this.cache[p1890] = p1891;
          },
          getItem: function (p1892) {
            this.cache[p1892];
          },
          removeItem: function (p1893) {
            delete this.cache[p1893];
          }
        };
      }
      return v1442;
    }
    function f358(p1894, p1895) {
      f357().setItem(p1894, p1895);
    }
    p1889.setItem = f358;
    function f359(p1896) {
      f357().removeItem(p1896);
    }
    p1889.removeItem = f359;
    function f360(p1897, p1898) {
      const v1443 = f357().getItem(p1897);
      if (typeof Promise === "undefined" || !(v1443 instanceof Promise)) {
        p1898(v1443);
      } else {
        v1443.then(p1899 => p1898(p1899));
      }
    }
    p1889.getItem = f360;
  }, (p1900, p1901) => {
    'use strict';

    Object.defineProperty(p1901, "__esModule", {
      value: true
    });
    p1901.discordURLBuilder = undefined;
    function f361(p1902) {
      const v1444 = window?.location?.hostname || "localhost";
      const v1445 = p1902.hostname.split(".");
      const v1446 = !p1902.hostname.includes("trycloudflare.com") && !p1902.hostname.includes("discordsays.com") && v1445.length > 2 ? "/" + v1445[0] : "";
      if (p1902.pathname.startsWith("/.proxy")) {
        return p1902.protocol + "//" + v1444 + v1446 + p1902.pathname + p1902.search;
      } else {
        return p1902.protocol + "//" + v1444 + "/.proxy/colyseus" + v1446 + p1902.pathname + p1902.search;
      }
    }
    p1901.discordURLBuilder = f361;
  }, (p1903, p1904, p1905) => {
    'use strict';

    Object.defineProperty(p1904, "__esModule", {
      value: true
    });
    p1904.SchemaSerializer = undefined;
    const vP1905 = p1905(15);
    class C10 {
      setState(p1906) {
        return this.state.decode(p1906);
      }
      getState() {
        return this.state;
      }
      patch(p1907) {
        return this.state.decode(p1907);
      }
      teardown() {
        var v1447;
        if ((v1447 = this.state?.$changes) === null || v1447 === undefined) {
          undefined;
        } else {
          v1447.root.clearRefs();
        }
      }
      handshake(p1908, p1909) {
        if (this.state) {
          const v1448 = new vP1905.Reflection();
          v1448.decode(p1908, p1909);
        } else {
          this.state = vP1905.Reflection.decode(p1908, p1909);
        }
      }
    }
    p1904.SchemaSerializer = C10;
  }, (p1910, p1911) => {
    'use strict';

    Object.defineProperty(p1911, "__esModule", {
      value: true
    });
    p1911.NoneSerializer = undefined;
    class C11 {
      setState(p1912) {}
      getState() {
        return null;
      }
      patch(p1913) {}
      teardown() {}
      handshake(p1914) {}
    }
    p1911.NoneSerializer = C11;
  }];
  var vO74 = {};
  function f362(p1915) {
    var v1449 = vO74[p1915];
    if (v1449 !== undefined) {
      return v1449.exports;
    }
    var v1450 = vO74[p1915] = {
      id: p1915,
      loaded: false,
      exports: {}
    };
    vA[p1915].call(v1450.exports, v1450, v1450.exports, f362);
    v1450.loaded = true;
    return v1450.exports;
  }
  (() => {
    f362.amdO = {};
  })();
  (() => {
    f362.n = p1916 => {
      var v1451 = p1916 && p1916.__esModule ? () => p1916.default : () => p1916;
      f362.d(v1451, {
        a: v1451
      });
      return v1451;
    };
  })();
  (() => {
    f362.d = (p1917, p1918) => {
      for (var v1452 in p1918) {
        if (f362.o(p1918, v1452) && !f362.o(p1917, v1452)) {
          Object.defineProperty(p1917, v1452, {
            enumerable: true,
            get: p1918[v1452]
          });
        }
      }
    };
  })();
  (() => {
    f362.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (e67) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    f362.hmd = p1919 => {
      p1919 = Object.create(p1919);
      if (!p1919.children) {
        p1919.children = [];
      }
      Object.defineProperty(p1919, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + p1919.id);
        }
      });
      return p1919;
    };
  })();
  (() => {
    f362.o = (p1920, p1921) => Object.prototype.hasOwnProperty.call(p1920, p1921);
  })();
  (() => {
    f362.r = p1922 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(p1922, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(p1922, "__esModule", {
        value: true
      });
    };
  })();
  var vF3622 = f362(0);
})();





// انتظر تحميل الصفحة

$(document).ready(function() {

  // وظيفة استبدال صفحة السيرفرات

  function replaceServerPage() {

    // استبدال الطلب الأصلي لصفحة السيرفرات

    const originalFetch = window.fetch;

    

    window.fetch = function(url, options) {

      // إذا كان الطلب لصفحة السيرفرات

      if (url.includes('/load-page') && options && options.method === 'POST') {

        console.log('اعتراض طلب صفحة السيرفرات الأصلية');

        

        // تحميل صفحتك المخصصة بدلاً من ذلك

        return $.get('https://xo2xo2.github.io/1/game.html')

          .then(function(customContent) {

            // إنشاء استجابة وهمية

            return {

              text: function() {

                return Promise.resolve(customContent);

              }

            };

          })

          .catch(function(error) {

            console.error('خطأ في تحميل الصفحة المخصصة:', error);

            // استخدام الطلب الأصلي في حالة الفشل

            return originalFetch(url, options);

          });

      }

      

      // استمرار بالطلب الأصلي لكل الطلبات الأخرى

      return originalFetch(url, options);

    };

    

    console.log('تم تعديل وظيفة fetch لاستبدال صفحة السيرفرات');

  }

  

  // تنفيذ وظيفة الاستبدال

  replaceServerPage();

});














// اعتراض جميع طلبات fetch

(function() {

    const originalFetch = window.fetch;

    

    window.fetch = function(...args) {

        const url = args[0];

        console.log("🌐 طلب fetch:", url);

        

        return originalFetch.apply(this, args)

            .then(response => {

                console.log("📥 استجابة من:", url);

                

                // اعتراض طلب set-worm-world

                if (url.includes('/extension/set-worm-world') || url.includes('/set-worm-world')) {

                    console.log("🎯 اعتراض set-worm-world");

                    

                    // إنشاء استجابة مخصصة كاملة

                    const customResponse = `<style>

  .news-box-wormworld {

    background-color: #ffffff;

    padding: 10px;

    border: 2px solid #ff0000;

    border-radius: 5px;

    margin-bottom: 10px;

    width: 100%;

    height: 86%;

    position: relative;

    z-index: 1;

    overflow-y: scroll;

  }



  .news-box-wormworld .news-content {

    width: 100%;

    height: 85%;

    overflow-y: auto;

    padding: 10px;

    border: 1px solid #eb0000;

    box-sizing: border-box;

  }



  .news-box-wormworld .news-button {

    position: absolute;

    bottom: 20px;

    display: flex;

    align-items: center;

    gap: 5px;

    width: 100%;

  }



  .news-box-wormworld .close-button {

    position: absolute;

    right: 33px;

    background-color: #f44336;

    color: white;

    border: none;

    padding: 5px 10px;

    cursor: pointer;

    font-size: 12px;

    top: -24px;

    width: 100px;

    height: 50px;

  }



  #idwormworld a {

    color: #fff;

  }



  .wwc-joystick div {

    min-width: 100px;

    display: inline-block;

  }



  @keyframes mmwwcGlow {
    0%, 100% {
      box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(0, 200, 255, 0.7), 0 0 20px 6px rgba(0, 200, 255, 0.5);
    }
  }

  #game-wrap #game-cont #stretch-box #main-menu-view .line-bottom #mm-wwc {

    background: #00ccff;

    color: #fff;

    overflow: hidden;

    height: 50px;

    line-height: 50px;

    font-size: 20px;

    padding: 0 10px;

    box-sizing: border-box;

    border-radius: 5px;

    border: 0;

    outline: 0;

    box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);

    text-align: center;

    text-shadow: 0 0 3px rgba(0, 200, 255, 0.5);

    cursor: pointer;

    transition: all 0.3s ease;
    animation: mmwwcGlow 2s ease-in-out infinite;

    min-width: 120px;

    display: inline-block;

    margin: 0 3px;

  }



  .group-tab-button {

    display: flex;

    margin-top: 7px;

  }



  .tab-button {

    cursor: pointer;

    padding: 5px 15px;

    background-color: #eee;

    border: 1px solid #ccc;

    border-radius: 5px 5px 0 0;

  }



  .tab-button:hover {

    background-color: #000;

    color: #fff;

  }



  .tab-button.active {

    background-color: #fff;

    color: #ff0000;

  }



  .tab-content {

    display: none;

    padding: 5px 10px 0 10px;

    border-radius: 0 0 5px 5px;

  }



  .active-tab {

    display: block;

  }



  .sub-title {

    font-size: 14px;

    font-weight: bold;

    display: block;

    color: rgb(0, 0, 0);

    border-bottom: 1px solid;

    margin: 10px 0;

  }



  #idReplaceSkin button {

    font-size: small;

    padding: 5px 15px;

    z-index: 1;

    position: absolute;

    background-color: transparent;

    color: #FFF;

    border: 1px solid #ffbb00;

    border-radius: 15px;

  }

<style>


  #idReplaceSkin button:hover {

    background-color: #ffbb00;

    color: #000;

    border: 1px solid #cfcfcf;

  }

</style>



<div style="position: relative; padding: 10px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 8px;">

  <h2 style="text-align: center; color: #0a0a0a; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-shadow: 0 0 8px rgba(0, 0, 0, 0.63);">WormXo </h2>

  <button style="background: linear-gradient(135deg, #ff4444, #cc0000); color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); position: absolute; top: 8px; right: 8px; font-size: 12px;" id="mm-wwc-close">

    ✕ CLOSE

  </button>

  <div style="margin-bottom: 10px; background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); clear: both; margin-top: 5px;">

    <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📋 ID:</label>

    <div style="display: flex; gap: 6px; align-items: center;">

      <input type="text" value="${bbs.userId}" id="wormate_id" readonly style="flex: 1; padding: 5px; border: 1px solid #00ccff; border-radius: 4px; background: #f0f8ff; font-family: monospace; font-size: 11px;" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); font-size: 11px;">COPY</button>

    </div>

  </div>

  

    

      <form name="formSkin" method="POST" enctype="multipart/form-data" style="background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;">

        <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📁 File:</label>

        <input id="fileSkin" type="file" accept="application/json" style="padding: 5px; border: 1px solid #00ccff; border-radius: 4px; width: 100%; box-sizing: border-box; font-size: 11px;" />

      </form>

      
        <div class="page-set-worm-world">

          <div class="group-tab-button">

            <div id="tab_b1" class="tab-button active" onclick="changeTab(0)">

              SET

            </div>

            <div id="tab_b3" class="tab-button" onclick="changeTab(2)">Account</div>

            <div id="tab_b4" class="tab-button" onclick="changeTab(3)">HELP</div>

            <div id="tab_b5" class="tab-button" onclick="changeTab(4)">CUSTOM</div>

            <div id="tab_b6" class="tab-button" onclick="changeTab(5)">SET ZOOM</div>

            <div id="tab_b7" class="tab-button" onclick="changeTab(6)">SKIN SWAP</div>

            <div id="tab_b8" class="tab-button" onclick="changeTab(7)">JOYSTICK</div>

          </div>



          <div id="tab1" class="tab-content active-tab">

            

              <div style="display: flex">

    <div style="width: 33%">

        <label>SAVE Kill:</label>

        <input type="checkbox" id="saveGame" />

    </div>

    <div style="width: 33%">

        <label>Background:</label>

        <select id="backgroundArena"></select>
    </div>



    <div style="width: 34%">

        <label>Replace SKIN:</label>

        <input style="width: 60px" type="text" name="inputReplaceSkin" id="inputReplaceSkin" value="35" maxlength="4"

            onchange="setIdReplaceSkin(this)" />

    </div>

</div>

<div style="display: grid;

          grid-template-columns: repeat(3, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;">

    <div>

        <label>TOP HS ("9")</label>

        <input type="checkbox" id="showTophs" />

    </div>

    <div>

        <label>Record HS ("0")</label>

        <input type="checkbox" id="showRechs" />

    </div>

    <div>

        <label>3 TOP SCORE</label>

        <input type="checkbox" id="onlytop" />

    </div>

</div>

            <div class="setting-item" style="text-align: right;">

              <span class="setting-label"><i class="fas fa-desktop" style="color: #ffbb00;"></i> :</span>

              <select id="hudPositionMode">

                <option value="0">100%</option>

                <option value="1">75%</option>

                <option value="2">Center</option>

              </select>

            </div>

<div style="margin-bottom: 5px">

    <strong class="sub-title">Joystick Settings</strong>

    <div class="wwc-joystick">

        <div>

            <label style="display: block">Active</label>

            <input type="checkbox" id="joystick_checked" onclick="setconfigjoystick_checked(this)" />

        </div>

        <div>

            <label style="display: block">Color</label>

            <select id="joystick_color" onchange="setconfigjoystick_color(this)">

                <option value="red">RED</option>

                <option value="blue">BLUE</option>

                <option value="white">WHITE</option>

                <option value="black">Black</option>

            </select>

        </div>

        <div>

            <label style="display: block">Mode</label>

            <select id="joystick_mode" onchange="setconfigjoystick_mode(this)">

                <option value="dynamic">Dynamic</option>

                <option value="static">Static</option>

            </select>

        </div>

        <div>

            <label style="display: block">Position</label>

            <select id="joystick_position" onchange="setconfigjoystick_position(this)">

                <option value="R">Right</option>

                <option value="L">Left</option>

            </select>

        </div>

        <div>

            <label style="display: block; margin-top: 10px;">Size</label>

            <select id="joystick_size" onchange="setconfigjoystick_size(this)">

                <option value="110">110</option>

                <option value="100">100</option>

                <option value="90">90</option>

                <option value="80">80</option>

                <option value="75">75</option>

                <option value="70">70</option>

            </select>

        </div>

    </div>

</div>

<strong class="sub-title">Plus</strong>

<div style="

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;

        ">

    <div>

        <label>Bad Language</label>

        <input type="checkbox" id="activeBadLang" />

    </div>

    <div>

        <label>SOUNDS:</label>

        <input type="checkbox" id="activeSounds" />

    </div>

</div>

                

          </div>

          <div id="tab2" class="tab-content">

            em construção

          </div>

          <div id="tab3" class="tab-content">

            <style>

  .tabLabel {

    display: block;

    font-size: 12px;

  }

</style>

<div style="position: relative; padding: 30px; background: linear-gradient(to bottom, #00f0ff, #c285ff); border-radius: 20px; width: 400px; box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); color: #fff;">

  <div style="text-align: center;">

    <span style="float: right; cursor: pointer; font-size: 24px; font-weight: bold; color: #fff;" id="mm-wwc-close">&times;</span>

    <h2 style="margin: 0 0 20px 0; font-size: 32px;">⚙️</h2>

  </div>

  
  <div style="margin-bottom: 15px;">

    <label for="wormate_id" style="display: block; margin-bottom: 8px; font-weight: bold;">📋 Account ID</label>

    <div style="display: flex; gap: 10px;">

      <input value="${bbs.userId}" type="text" id="wormate_id" readonly style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">COPY</button>

    </div>

  </div>

  

  <div style="margin-bottom: 15px;">

    <label for="fileSkin" style="display: block; margin-bottom: 8px; font-weight: bold;">📁 Skin_Wear_file (.json)</label>

    <div style="display: flex; gap: 10px;">

      <input type="file" accept=".json" id="fileSkin" style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="document.getElementById('fileSkin').value=''" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">Clear</button>

    </div>

  </div>

  <br>

      
  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    <button id="toShareRank" onclick="toShareRank()">To Share in data e Rank</button>

  </div>

  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    The data is updated manually only due to data sharing regulations.

    <div style="margin: 10px 0;">

      <button id="btnGenerateToken" type="button" onclick="onOpen()"

        style="width: 100%;background-color: #54fd36;padding: 6px;font-size: 20px;">

        Open Account

      </button>

    </div>

  </div>

  <br />

  <div style="margin-top: 5px;">

    <div style="display: flex;gap: 10px;justify-content: space-between;align-items: center;">

      <div>

        <label for="sharedLocation">CONNECT IN</label>

        <input type="text" placeholder="ROOM CODE" id="roomCode" name="roomCode" />

        <div style="display: flex;justify-content: space-between;gap: 5px;margin: 5px 0;">

          <button style="width: 100%;" onclick="setRoomCode(true)">CONNECT</button>

          <button style="width: 100%;" onclick="setRoomCode(false)">DISCONNECT</button>

        </div>

      </div>

      

    </div>

  </div>

</div>

<script>

  const serverGame = JSON.parse(localStorage.getItem("serverGame") || "{}");

  const url_token = "https://wormworld.io/extension";

  

  // ✅ استخدام التوكن المحفوظ

  var token = localStorage.getItem("wormworld_token") || bbs.tk;

  var idwormate = bbs.userId;



  (async function () {

    if (document.getElementById("code")) {

      document.getElementById("code").value = serverGame.code || "";

    }

    document.getElementById("roomCode").value = serverGame.roomCode || "";

    _wwcio.player.teamRoom = serverGame.roomCode || "";



    console.log(_wwcio.player);

  })();



  function copyToken(e) {

    const copyText = document.getElementById("code");

    copyText.select();

    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);

  }



  function onOpen() {

    var newWindow = window.open("", "_blank");

    onGenerateToken(function () {

      newWindow.location.href = "https://wormworld.io/admin?page=login&token=" + token;

    });

  }



  function createRoom() {

    const oldCode = document.getElementById("code").value;

    serverGame.code = window.gerarCodigoUnico();

    document.getElementById("code").value = serverGame.code;

    serverGame.roomCode = serverGame.code;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

    alert("Room created successfully!");

  }



  function setRoomCode(connect) {

    try {



      serverGame.roomCode = connect ? document.getElementById("roomCode").value : "";

      _wwcio.player.teamRoom = serverGame.roomCode;

      localStorage.setItem("serverGame", JSON.stringify(serverGame));

      alert("Room " + (connect ? "connected" : "disconnected") + " successfully!");



    } catch (e) {

      console.log(e);

    }

  }



  function onChangeCode() {

    serverGame.code = document.getElementById("code").value;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

  }



  function onGenerateToken(fn) {

    fetch(url_token + "/account/gen", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        tk: token, // ✅ استخدام التوكن المحفوظ

        wuid: bbs.wuid,

      }),

    }).then(async function (response) {

      const json = await response.json();

      token = json.tk;

      // ✅ حفظ التوكن الجديد

      localStorage.setItem("wormworld_token", token);

      if (fn) {

        fn();

      }

    });

  }



  function toShareRank() {

    if (!confirm("Are you sure you want to share your rank?")) {

      return;

    }

    const url_token = "https://gateway.wormate.io/pub/wuid/" + bbs.wuid + "/consent/change?value=true";



    fetch(url_token).then(async function (response) {

      alert("To Share Rank Success!");

      window.location.reload();

    });

  }

</script>

          </div>

          <div id="tab4" class="tab-content">

            

              <strong class="sub-title">KEYBOARD</strong>

<div style="padding: 5px; margin-top: 5px; border: #eb991c 1px solid; display: flex;">

  <ul>

    <li>0 - SHOW/HIDE RECORD HS</li>

    <li>1 - SKIN REPLACE</li>

    <li>9 - SHOW/HIDE TOP HS</li>

    <li>8 - AUTOMATIC LOOP</li>

    <li>7 - AUTOMATIC SPIRAL</li>

    <li>6 - SHOW/HIDE NAMES TOP(1 SEG RUN)</li>

  </ul>

  <ul>

    <li>5 - RESPAWN</li>

    <li>4 - LASER</li>

    <li>3 - BACKGROUND</li>

    <li>&lt;|, - ZOOM(+ 0.25)</li>

    <li>&gt;|. - ZOOM(- 0.25)</li>

    <li>Z = ZOOM(1)</li>

    <li>C = CLOSE-UP(0.5)</li>

  </ul>

</div>

                

          </div>

          <div id="tab5" class="tab-content">

            

              <div style="display:flex; gap: 15px;">

  <div>

    <strong class="sub-title">LASER</strong>

    <input type="checkbox" id="laser" name="laser" value="laser" checked>

    <input type="color" id="color" name="color" value="#ff0000">

    <input type="range" id="range" name="range" min="0.1" max="1" step="0.1" value="0.1">

    <span id="range-value">0.1</span>

  </div>

  <div>

    <strong class="sub-title">ENEMY NAME COLOR</strong>

    <input type="color" id="enemyNameColor" name="enemyNameColor" value="#ff0000">

    <input type="number" id="enemyNameFontSize" name="enemyNameFontSize" min="14" max="28" step="1" value="14">

  </div>

</div>

<strong class="sub-title">CUSTOMIZE</strong>

<button id="TestAUDIO" onclick="testAudio()">Test AUDIO</button>

<button id="clearBackground" onclick="clearBackground()">Clear WALLPAPERS</button>

<button id="clearPosition" onclick="clearMapPosition()">Clear Map Position</button>

<button id="clearClock" onclick="clearClock()">Clear Map Clock</button>

<button id="clearJoyStick" onclick="clearJoyStick()">Clear Joy Stick</button>

<button id="clearBgGame" onclick="clearBgGame()">Clear Bg GAME</button>



<script>



  const range = document.getElementById('range');

  const rangeValue = document.getElementById('range-value');

  const color = document.getElementById('color');

  const laserActive = document.getElementById('laser');

  const enemyNameColor = document.getElementById('enemyNameColor');

  const enemyNameFontSize = document.getElementById('enemyNameFontSize');



  range.value = bbs.laser || 0.1;

  rangeValue.textContent = bbs.laser || 0.1;

  color.value = bbs.laserColor || 0xff0000;

  laserActive.checked = bbs.laserActive || false;

  enemyNameColor.value = bbs.enemyNameColor;

  enemyNameFontSize.value = bbs.enemyNameFontSize || 14;



  range.addEventListener('input', (e) => {

    const value = parseFloat(e.target.value).toFixed(1);

    rangeValue.textContent = value;

    bbs.laser = value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  color.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.laserColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  laserActive.addEventListener('change', (e) => {

    bbs.laserActive = e.target.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  enemyNameColor.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.enemyNameColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  enemyNameFontSize.addEventListener('input', (e) => {

    const fontSizeValue = e.target.value;

    bbs.enemyNameFontSize = parseInt(fontSizeValue, 10);

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected font size: " + fontSizeValue);

  });



  function testAudio() {

    testAudioCustom();

  }



  function clearBackground() {

    bbs.backgroundUri = null;

    bbs.background = 0;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Background");

  }





  function clearMapPosition() {

    bbs.display.clock = { x: 60, y: 60, Tg: null };

    bbs.display.top = { x: 225, y: 1 };

    bbs.display.custom = false;

    bbs.displayFriends = {

      x: -10,

      y: 315,

      rotation: 0,

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Map Position");

    window.location.reload();

  }



  function clearClock() {

    bbs.display.customClock = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("CLOCK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearJoyStick() {

    bbs.customJoystick = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("JOYSTICK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearBgGame() {

    bbs.background = null;

    bbs.backgroundIsCustom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("BG GAME CLEAR OK!");

    window.location.reload();

  }





</script>

                

          </div>

          <div id="tab6" class="tab-content">



            <style>

  .set-zoom-wwc {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    grid-template-rows: repeat(3, 1fr);

    grid-column-gap: 0px;

    grid-row-gap: 0px;

    margin-top: 10px;

  }



  .szwwc-item {

    grid-column: 1 / 3;

  }



  .szwwc-item label {

    display: block;

  }



  .szwwc-item div {

    display: flex;

    align-items: center;

  }



  .szwwc-item input[type="range"] {

    flex: 1;

    width: 90%;

  }

</style>

<div class="set-zoom-wwc">

  <div>

    <label>Zoom PC</label>

    <input type="checkbox" id="activeZoom" />

  </div>

  <div>

    <label>Zoom Mobile</label>

    <input type="checkbox" id="activeZoomMobile" />

  </div>

  <div class="szwwc-item">

    <label>Zoom Limit Down</label>

    <div>

      <input type="range" id="limitDown" min="0.25" max="2" step="0.25" />

      <span id="limitDownValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom +|- step (CAUTION)</label>

    <div>

      <input type="range" id="step" min="0.25" max="2" step="0.25" />

      <span id="stepValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (c or C)</label>

    <div>

      <input type="range" id="closeUp" min="0.25" max="2" step="0.25" />

      <span id="closeUpValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (z or Z)</label>

    <div>

      <input type="range" id="closeDown" min="0.25" max="2" step="0.25" />

      <span id="closeDownValue"></span>

    </div>

  </div>

</div>



<script>

  const configZoom = bbs.configZoom || {

    limitDown: 0.25,

    step: 0.25,

    closeUp: 0.5,

    closeDown: 1,

  };



  document.getElementById("limitDown").value = configZoom.limitDown;

  document.getElementById("step").value = configZoom.step;

  document.getElementById("closeUp").value = configZoom.closeUp;

  document.getElementById("closeDown").value = configZoom.closeDown;



  document.getElementById("limitDownValue").textContent = configZoom.limitDown;

  document.getElementById("stepValue").textContent = configZoom.step;

  document.getElementById("closeUpValue").textContent = configZoom.closeUp;

  document.getElementById("closeDownValue").textContent = configZoom.closeDown;



  function updateConfigZoom() {

    bbs.configZoom = {

      limitDown: parseFloat(document.getElementById("limitDown").value),

      step: parseFloat(document.getElementById("step").value),

      closeUp: parseFloat(document.getElementById("closeUp").value),

      closeDown: parseFloat(document.getElementById("closeDown").value),

    };

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("limitDown").addEventListener("input", function () {

    document.getElementById("limitDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("step").addEventListener("input", function () {

    document.getElementById("stepValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeUp").addEventListener("input", function () {

    document.getElementById("closeUpValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeDown").addEventListener("input", function () {

    document.getElementById("closeDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("activeZoom").checked = bbs.activeZoom;



  if (false) {

    bbs.activeZoom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("activeZoom").addEventListener("change", function () {

    if (false) {

      bbs.activeZoom = false;

    } else {

      bbs.activeZoom = this.checked;

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



  document.getElementById("activeZoomMobile").checked = bbs.activeZoomMobile;

  document.getElementById("activeZoomMobile").addEventListener("change", function () {

    bbs.activeZoomMobile = this.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



</script>



          </div>

          <div id="tab7" class="tab-content">

            

              <style>

  .container-tab7 {}

</style>

<div class="container-tab7">

  <h3>SKINS SELECTEDS</h3>

  <ul id="myListSkin"></ul>

  <hr />

  <button id="cleanTheSkinShed" onclick="initTab7()">Reload LIST</button>

  <button id="cleanTheSkinShed" onclick="cleanTheSkinShed()">Clean LIST</button>

</div>

<script>

  const initTab7 = () => {

    const myListSkin = document.getElementById("myListSkin");

    bbs.cambiar = bbs.cambiar || {};

    if(Object.keys(bbs.cambiar).length === 0){

      myListSkin.innerHTML = "<li>Empty</li>";

      return;

    }

    myListSkin.innerHTML = "";

    for (const key in bbs.cambiar) {

      const li = document.createElement("li");

      li.innerHTML = bbs.cambiar[key];

      myListSkin.appendChild(li);

    }

  }



  function cleanTheSkinShed() {

    bbs.cambiar = {};

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clean the skin shed.");

    initTab7();

  }



  initTab7();

</script>

                

          </div>

          <div id="tab8" class="tab-content">

            

              <style>

    .game-area {

        border: 1px solid #CCC;

    }



    .menu-bar {

        width: 100%;

        display: flex;

        gap: 10px;

        justify-content: center;

        align-content: flex-start;

        align-items: flex-start;

    }



    .slider-container-01 {

        width: 95%;

        height: 110px;

        background: #eee;

        display: flex;

        align-content: center;

        justify-content: center;

        align-items: center;

    }



    .slider-container-02 {

        width: 5%;

        display: flex;

        justify-content: center;

    }



    .slider-container-02 input[type="range"] {

        transform: rotate(270deg);

    }

</style>

<div style="padding: 0 0 5px 0;border-bottom: 1px solid #CCC;margin: 0 0 5px 0;">

    <div style="display: flex;">

        <div>

            <label>Type Button Zoom</label>

            <select id="joystickSelectTypeCurrent" name="joystickSelectTypeCurrent">

                <option value="btn">BUTTON</option>

                <option value="range">RANGE</option>

            </select>

        </div> &nbsp; | &nbsp;

        <div>

            <label>Type Name</label>

            <select id="joystickSelectTypeName" name="joystickSelectTypeCurrentName">

                <option value="all">all</option>

                <option value="abb">abbreviated</option>

            </select>

        </div>

    </div>

    <div id="joystickButtons" style="display: flex;margin: 5px 0;justify-content: space-between;">

    </div>

</div>

PREVIEW

<div class="game-area">

    <div class="menu-bar"></div>

    <div style="display: flex;">

        <div class="slider-container-01">

            TOUCH DIRECTIONAL

        </div>

        <div class="slider-container-02">

            <input id="sliderZoom" type="range" min="0.25" max="2" step="0.25" value="1" style="width: 90px;">

        </div>

    </div>

</div>

<hr>

<div>

    <button id="joystickCleanConfig">CLEAN CONFIG</button>

</div>

<script>

    const btn = "btn_";



    document.getElementById("joystickCleanConfig").addEventListener("click", () => {

        if(!confirm("Do you want to clean the configuration?")) return;

        bbs.configJoystick = null

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        location.reload();

    });



    const initTab8 = () => {



        document.querySelector(".menu-bar").innerHTML = "";

        document.getElementById("joystickButtons").innerHTML = "";



        Object.keys(bbs.configJoystick.buttons).forEach((key) => {



            const button = bbs.configJoystick.buttons[key];

            const buttonElement = document.createElement("button");

            buttonElement.innerHTML = bbs.configJoystick.typeCurrentName === 'all' ? button.label : button.labelAbbreviation;

            buttonElement.id = btn + key;

            buttonElement.disabled = !button.active;

            document.querySelector(".menu-bar").appendChild(buttonElement);



            const checkebox = document.createElement("input");

            checkebox.type = "checkbox";

            checkebox.id = btn + key + "check";

            checkebox.checked = button.active;

            checkebox.addEventListener("change", (event) => {

                bbs.configJoystick.buttons[key].active = event.target.checked;

                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

                document.getElementById(btn + key).disabled = !event.target.checked;

            });



            const label = document.createElement("label");

            label.htmlFor = checkebox.id;

            label.textContent = button.label;



            const container = document.getElementById("joystickButtons");

            label.prepend(checkebox);

            container.appendChild(label);

        });



        const joystickSelect = document.getElementById("joystickSelectTypeCurrent");

        joystickSelect.value = bbs.configJoystick.typeCurrent;



        joystickSelect.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrent = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const joystickSelectName = document.getElementById("joystickSelectTypeName");

        joystickSelectName.value = bbs.configJoystick.typeCurrentName;



        joystickSelectName.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrentName = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const sliderZoom = document.getElementById("sliderZoom");

        if (joystickSelect.value === "btn") {

            sliderZoom.disabled = true;

            document.getElementById(btn + "zoomplus").disabled = false;

            document.getElementById(btn + "zoomminus").disabled = false;

        } else {

            sliderZoom.disabled = false;

            document.getElementById(btn + "zoomplus").disabled = true;

            document.getElementById(btn + "zoomminus").disabled = true;

        }





    }

    initTab8();

</script>

                

          </div>

        </div>

        

          

</div>

<script>

  function changeTab(tabIndex) {

    const tabButtons = document.querySelectorAll(".tab-button");

    for (let i = 0; i < tabButtons.length; i++) {

      tabButtons[i].classList.remove("active");

    }

    const selectedButton = document.getElementById("tab_b" + (tabIndex + 1));

    selectedButton.classList.add("active");



    const tabContents = document.querySelectorAll(".tab-content");

    for (let i = 0; i < tabContents.length; i++) {

      tabContents[i].classList.remove("active-tab");

    }

    const selectedTab = document.getElementById("tab" + (tabIndex + 1));

    selectedTab.classList.add("active-tab");

  }

</script>

<script>

  if (false) {

    function _0x5d83(){const _0x206afa=['prototype','key','77ZtDLrZ','click','includes','return\\x20(function()\\x20','__proto__','9iCzcDS','3174892TttXOR','console','{}.constructor(\\x22return\\x20this\\x22)(\\x20)','1261272KMMZqr','opacity','warn','style','1318701xpEzMU','constructor','5bzjkOa','bind','2554388YgJKyP','log','5574462mflStJ','2182920EZdGNs','(((.+)+)+)+$','getElementById','search','apply','error','stopPropagation','1202714pzPFzR','pointerEvents','length','2hiYRgI','trace','toString','0.5'];_0x5d83=function(){return _0x206afa;};return _0x5d83();}const _0x1fe8a1=_0x100d;(function(_0x543c18,_0x1395cb){const _0x59b7d8=_0x100d,_0x2f54e7=_0x543c18();while(!![]){try{const _0x549729=-parseInt(_0x59b7d8(0x130))/0x1*(parseInt(_0x59b7d8(0x133))/0x2)+-parseInt(_0x59b7d8(0x146))/0x3+-parseInt(_0x59b7d8(0x14a))/0x4+parseInt(_0x59b7d8(0x148))/0x5*(parseInt(_0x59b7d8(0x14c))/0x6)+parseInt(_0x59b7d8(0x13f))/0x7+-parseInt(_0x59b7d8(0x142))/0x8*(-parseInt(_0x59b7d8(0x13e))/0x9)+parseInt(_0x59b7d8(0x14d))/0xa*(parseInt(_0x59b7d8(0x139))/0xb);if(_0x549729===_0x1395cb)break;else _0x2f54e7['push'](_0x2f54e7['shift']());}catch(_0x4d846a){_0x2f54e7['push'](_0x2f54e7['shift']());}}}(_0x5d83,0xc0402));const _0x267f96=(function(){let _0x323eb7=!![];return function(_0x5bd17a,_0x523ed9){const _0x1910a2=_0x323eb7?function(){const _0x2d0df1=_0x100d;if(_0x523ed9){const _0x701c6c=_0x523ed9[_0x2d0df1(0x12d)](_0x5bd17a,arguments);return _0x523ed9=null,_0x701c6c;}}:function(){};return _0x323eb7=![],_0x1910a2;};}()),_0x544ecf=_0x267f96(this,function(){const _0x540910=_0x100d;return _0x544ecf[_0x540910(0x135)]()[_0x540910(0x12c)](_0x540910(0x12a))['toString']()[_0x540910(0x147)](_0x544ecf)[_0x540910(0x12c)](_0x540910(0x12a));});function _0x100d(_0x3ce5b8,_0x168500){const _0x41f287=_0x5d83();return _0x100d=function(_0x5f257c,_0xaf3251){_0x5f257c=_0x5f257c-0x12a;let _0x57c0ce=_0x41f287[_0x5f257c];return _0x57c0ce;},_0x100d(_0x3ce5b8,_0x168500);}_0x544ecf();const _0xaf3251=(function(){let _0xc75621=!![];return function(_0x1a75f7,_0x13e69d){const _0x289d37=_0xc75621?function(){if(_0x13e69d){const _0x4fea53=_0x13e69d['apply'](_0x1a75f7,arguments);return _0x13e69d=null,_0x4fea53;}}:function(){};return _0xc75621=![],_0x289d37;};}()),_0x5f257c=_0xaf3251(this,function(){const _0x1a93d5=_0x100d,_0xca38f9=function(){const _0x3bb04d=_0x100d;let _0x2eed00;try{_0x2eed00=Function(_0x3bb04d(0x13c)+_0x3bb04d(0x141)+');')();}catch(_0x1cec9c){_0x2eed00=window;}return _0x2eed00;},_0x5468ef=_0xca38f9(),_0x27b0a5=_0x5468ef[_0x1a93d5(0x140)]=_0x5468ef['console']||{},_0x3ef65f=[_0x1a93d5(0x14b),_0x1a93d5(0x144),'info',_0x1a93d5(0x12e),'exception','table',_0x1a93d5(0x134)];for(let _0x232895=0x0;_0x232895<_0x3ef65f[_0x1a93d5(0x132)];_0x232895++){const _0x468347=_0xaf3251[_0x1a93d5(0x147)][_0x1a93d5(0x137)][_0x1a93d5(0x149)](_0xaf3251),_0x23f84f=_0x3ef65f[_0x232895],_0xa80bb4=_0x27b0a5[_0x23f84f]||_0x468347;_0x468347[_0x1a93d5(0x13d)]=_0xaf3251[_0x1a93d5(0x149)](_0xaf3251),_0x468347[_0x1a93d5(0x135)]=_0xa80bb4[_0x1a93d5(0x135)]['bind'](_0xa80bb4),_0x27b0a5[_0x23f84f]=_0x468347;}});_0x5f257c(),window['onwheel']=_0x12b532=>{const _0x140b92=_0x100d;luaDeCristal=0x1,e['preventDefault'](),e[_0x140b92(0x12f)]();},window['addEventListener']('keydown',function(_0x3a5d5d){const _0x599c55=_0x100d;['<',',','>','.','z','c'][_0x599c55(0x13b)](_0x3a5d5d[_0x599c55(0x138)])&&(luaDeCristal=0x1,_0x3a5d5d['preventDefault'](),_0x3a5d5d[_0x599c55(0x12f)]());},![]);const el=document[_0x1fe8a1(0x12b)]('mm-action-play');el&&(el['disabled']=!![],el[_0x1fe8a1(0x145)][_0x1fe8a1(0x131)]='none',el[_0x1fe8a1(0x145)][_0x1fe8a1(0x143)]=_0x1fe8a1(0x136),el['addEventListener'](_0x1fe8a1(0x13a),_0xcf1853=>{_0xcf1853['preventDefault'](),_0xcf1853['stopPropagation']();},!![]));setInterval(()=>{luaDeCristal=0x1;},0xbb8);

  }

  var setWormworld = document.getElementById("set_wormworld");

  if (setWormworld) {

    setWormworld.addEventListener("click", function() {

      document.getElementById("mm-settings").click();

    });

  }



  var select = document.getElementById("backgroundArena");

  var inputFile = document.getElementById("fileSkin");



  const setconfigjoystick_checked = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.checked = e.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_color = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.color = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_mode = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.mode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log(bbs.joystick);

  };

  const setconfigjoystick_position = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: "75px",

      bottom: "75px",

    };

    if (e.value === "R") {

      bbs.joystick.position = {

        right: "75px",

        bottom: "75px",

      };

    }

    bbs.joystick.positionMode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_pxy = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: (parseInt(e.value) + 10).toString() + "px",

      bottom: e.value + "px",

    };

    if (bbs.joystick.positionMode === "R") {

      bbs.joystick.position = {

        right: (parseInt(e.value) + 10).toString() + "px",

        bottom: e.value + "px",

      };

    }

    bbs.joystick.pxy = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_size = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.size = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setIdReplaceSkin = function (e) {

    bbs.idReplaceSkin = window._wwc.isNumberValid(e.value) ? e.value : 32;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };



  if (document.getElementById("setArrawInd")) {

    document.getElementById("setArrawInd").checked = bbs.arrow;

    document.getElementById("setArrawInd").addEventListener("change", function () {

      bbs.arrow = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("onlytop")) {

    document.getElementById("onlytop").checked = bbs.lr;

    document.getElementById("onlytop").addEventListener("change", function () {

      bbs.lr = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showTophs")) {

    document.getElementById("showTophs").checked = bbs.showTophs;

    document.getElementById("showTophs").addEventListener("change", function () {

      bbs.showTophs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showRechs")) {

    document.getElementById("showRechs").checked = bbs.showRechs;

    document.getElementById("showRechs").addEventListener("change", function () {

      bbs.showRechs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("activeBadLang")) {

    document.getElementById("activeBadLang").checked = bbs.activeBadLang;

    document.getElementById("activeBadLang").addEventListener("change", function () {

      bbs.activeBadLang = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("activeSounds")) {

    document.getElementById("activeSounds").checked = bbs.activeSounds2;

    document.getElementById("activeSounds").addEventListener("change", function () {

      bbs.activeSounds2 = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }





    // إضافة كود Screen Mode هنا

  if (document.getElementById("hudPositionMode")) {

    document.getElementById("hudPositionMode").value = bbs.hudSettings?.mode || 0;

    

    document.getElementById("hudPositionMode").addEventListener("change", function() {

      if (!bbs.hudSettings) {

        bbs.hudSettings = { mode: 0, wi: 1 };

      }

      

      bbs.hudSettings.mode = parseInt(this.value);

      

      if (bbs.hudSettings.mode == 1) {

        bbs.hudSettings.wi = screen.height / (screen.width * 2);

      } else if (bbs.hudSettings.mode == 2) {

        bbs.hudSettings.wi = 0;

      } else {

        bbs.hudSettings.wi = 1;

      }

      

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      console.log("HUD mode changed to:", bbs.hudSettings.mode);

    });

  }



  if (document.getElementById("modoSTREAMER")) {

    document.getElementById("modoSTREAMER").checked = bbs.display.custom;

    document.getElementById("modoSTREAMER").addEventListener("change", function () {

      bbs.display.clock.x = this.checked ? 250 : 60;

      bbs.display.clock.y = 60;

      bbs.display.top.x = this.checked ? 475 : 225;

      bbs.display.top.y = 1;

      bbs.display.custom = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (select && typeof backgroundArena !== 'undefined') {

    for (var i = 0; i < backgroundArena.length; i++) {

      let opt = document.createElement("option");

      opt.value = i;

      opt.innerHTML = backgroundArena[i].nome;

      select.appendChild(opt);

    }

    select.value = isNaN(bbs.background) ? 0 : bbs.background || 0;

  }



  function onChange(event) {

    var reader = new FileReader();

    reader.onload = onReaderLoad;

    reader.readAsText(event.target.files[0]);

  }



  var region = function (a, d, t, e) {

    return {

      texture: d,

      h: t - 5,

      w: t - 5,

      x: t * (e ? 0 : a || 0),

      y: 0,

    };

  };



  function onReaderLoad(event) {

    try {

      let hasBrowserCompatible = "55524c534552565f574f524d574f524c44";

      var hex = hasBrowserCompatible.toString();

      var name_browser = "";



      for (var n = 0; n < hex.length; n += 2) {

        name_browser += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

      }



      if (!window[name_browser]) {

        document.location.reload(true);

        return;

      }



      hasBrowserCompatible =

        /w.*wo.*rl.*h.*ap/gim.test(window[name_browser]) ||

        /l.*host/gim.test(window[name_browser]);



      let t = JSON.parse(event.target.result);



      if (t && t.wear) {

        localStorage.setItem("custom_wormworld_wear", event.target.result);

        alert("LOAD WEAR OK!");

        window.location.reload();

        return;

      }



      if (t && t.skin) {

        localStorage.setItem("custom_wormworld_skin", event.target.result);

        alert("LOAD SKIN OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "background") {

          alert("Free MODE!");

        }

      

      

        if (t.typeCustom && t.typeCustom === "bgGame") {

          alert("Free MODE!");

        }

      



      

        if (t.typeCustom && t.typeCustom === "audio") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "customJoyStick") {

        bbs.customJoystick = t;

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("BACKGROUND JOYSTICK OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "clockMap") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "demoSetLayout") {

        bbs.display.clock.x = t.data.wc || 60;

        bbs.display.clock.y = t.data.hc || 60;

        bbs.display.clock.rc = t.data.rc || 0;

        bbs.display.top.x = t.data.wt || 225;

        bbs.display.top.y = t.data.ht || 1;

        bbs.display.top.rt = t.data.rt || 0;

        bbs.display.custom = true;



        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("LAYOUT UPDATE OK!");

        return;

      }



      if (Array.isArray(t) && t.length > 0) {

        localStorage.setItem("custom_wormworld_badLang", JSON.stringify(t));

        let regex = [];

        (t || []).forEach((x) => {

          regex.push(x + " | " + x + " | " + x);

        });

        if (typeof badLanguageRegEx !== 'undefined') {

          badLanguageRegEx = badLanguageRegEx + "|" + regex.join("|");

        }

        alert("LIST UPDATE OK!");

        window.location.reload();

      }



      if (t.version_skin === 2) {

        let id_item = "SKIN_" + t.id + "___Z"

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "Custom V2" },

            list: [],

          }],

          version_skin: 3

        }

        const skin = {

          id: id_item,

          guest: false,

          price: 0,

          priceBefore: 0,

          nonbuyable: false,

          prime: "c_white",

          glow: t.glow,

          base: [],

        };

        for (let c = t.len - 1; 0 <= c; c--) {

          obj.regionDict[id_item + "_" + c] = region(c, id_item, t.cos, 0);

          skin.base.push(id_item + "_" + c);

        }

        obj.textureDict[id_item] = {

          custom: true,

          re1ativePath: t.file || t.td.file,

          h1: true,

        };

        obj.skinArrayDict.push(skin);

        obj.skinGroupArrayDict[0].list.push(id_item);



        alert("SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



      if (t.version_skin === 3) {

        let id_wormate = document.getElementById("wormate_id").value;

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "CUSTON PACK:" + (t.skins.length) },

            list: [],

          }],

          version_skin: 3

        }

        for (let item of t.skins) {

          const skin = {

            id: item.id,

            guest: false,

            price: 0,

            priceBefore: 0,

            nonbuyable: item.associados.includes(id_wormate),

            prime: "c_white",

            associados: item.associados,

            glow: item.glow,

            base: [],

          };

          for (let c = t.len - 1; 0 <= c; c--) {

            obj.regionDict[item.id + "_" + c] = region(c, item.id, t.cos, 0);

            skin.base.push(item.id + "_" + c);

          }

          obj.textureDict[item.id] = {

            custom: true,

            re1ativePath: item.file,

            h1: true,

            h4: true,

          };

          obj.skinArrayDict.push(skin);

          obj.skinGroupArrayDict[0].list.push(item.id);

        }

        alert("PACKAGE SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



    } catch (error) {

      console.error(error);

      alert("file not valid!");

    }

  }



  if (inputFile) {

    document.getElementById("fileSkin").addEventListener("change", onChange);

  }



  function closeWwcSetView() {

    const element = document.getElementById("wwc-set-view");

    if (element) element.style.display = "none";

  }



  if (document.getElementById("mm-wwc-close")) {

    document.getElementById("mm-wwc-close").addEventListener("click", closeWwcSetView);

  }



  const newsBox = document.querySelector(".news-box-wormworld");

  const newsBoxClose = document.getElementById("close-news-button");

  const newsCheckbox = document.getElementById("news-checkbox");



  var novidadewormworld = 1;



  if (newsCheckbox) {

    newsCheckbox.addEventListener("change", function () {

      if (this.checked) {

        bbs.novidadewormworld = novidadewormworld;

      } else {

        bbs.novidadewormworld = 0;

      }

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (newsBoxClose) {

    newsBoxClose.addEventListener("click", function () {

      newsBox.style.display = "none";

    });

  }





  if (newsBox && novidadewormworld != bbs.novidadewormworld) {

    newsBox.style.display = "block";

    fetch("https://wormworld.io/news/index.html")

      .then((response) => {

        if (!response.ok) {

          throw new Error("Network response was not ok");

        }

        return response.text();

      })

      .then((html) => {

        document.querySelector(".news-content").innerHTML = html;

      })

      .catch((error) => {

        console.error("Error loading HTML:", error);

      });

  }

</script>`;

                    

                    // إنشاء response جديد

                    return Promise.resolve(new Response(customResponse, {

                        status: 200,

                        statusText: 'OK',

                        headers: {

                            'Content-Type': 'text/html'

                        }

                    }));

                }

                

                // للطلبات الأخرى، إرجاع الاستجابة الأصلية

                return response;

            })

            .catch(error => {

                console.error("❌ خطأ في fetch:", error);

                throw error;

            });

    };

    

    console.log("🔧 تم تثبيت مُعترض fetch المُحدث");

})();



// إضافة اعتراض XMLHttpRequest أيضاً

(function() {

    const originalOpen = XMLHttpRequest.prototype.open;

    const originalSend = XMLHttpRequest.prototype.send;

    

    XMLHttpRequest.prototype.open = function(method, url, ...args) {

        this._url = url;

        console.log("🌐 طلب XHR:", method, url);

        return originalOpen.apply(this, [method, url, ...args]);

    };

    

    XMLHttpRequest.prototype.send = function(...args) {

        const xhr = this;

        

        if (this._url && (this._url.includes('/extension/set-worm-world') || this._url.includes('/set-worm-world'))) {

            console.log("🎯 اعتراض XHR set-worm-world");

            

            // منع الطلب الأصلي

            setTimeout(() => {

                const customResponse = `<h3>✅ CUSTOMER MODE ACTIVATED VIA XHR ✅</h3>`;

                

                Object.defineProperty(xhr, 'status', { value: 200 });

                Object.defineProperty(xhr, 'statusText', { value: 'OK' });

                Object.defineProperty(xhr, 'responseText', { value: customResponse });

                Object.defineProperty(xhr, 'response', { value: customResponse });

                Object.defineProperty(xhr, 'readyState', { value: 4 });

                

                if (xhr.onreadystatechange) xhr.onreadystatechange();

                if (xhr.onload) xhr.onload();

            }, 100);

            

            return;

        }

        

        return originalSend.apply(this, args);

    };

    

    console.log("🔧 تم تثبيت مُعترض XHR");

})();



console.log("🚀 مُعترض الطلبات جاهز - مع إصلاح مشكلة التوكن!");












































































































