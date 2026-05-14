var v;
// dark xo 
// 3li
// xo

var v172;
function f(p) {
  return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p809) {
    return typeof p809;
  } : function (p822) {
    if (p822 && typeof Symbol == "function" && p822.constructor === Symbol && p822 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p822;
    }
  })(p);
}
(function () {
  var vO37 = {};
  var vO46 = {};
  var vO47 = {};
  var vO48 = {};
  vO47.a = function (p823) {
    var v173 = new String();
    var vParseInt5 = parseInt(p823.substring(0, 2), 16);
    for (var vLN23 = 2; vLN23 < p823.length; vLN23 += 2) {
      var vParseInt6 = parseInt(p823.substring(vLN23, vLN23 + 2), 16);
      v173 += String.fromCharCode(vParseInt6 ^ (vParseInt5 = 3793 + vParseInt5 * 4513 & 255));
    }
    ;
    return v173;
  };
  vO47.b = function (p824) {
    return Function(vO47.a("19f8fe38e8fc7170").concat(p824, vO47.a("0941")))();
  };
  vO37.c = vO47.b(vO47.a("e1250a7a013990"));
  vO37.d = vO37.c[vO47.a("32279b2643aa9da74e")];
  vO47.e = function () {
    return vO37.c[vO47.a("4b982848a663b4123a7c302a8569ad2334")] || 1;
  };
  vO37.c.addEventListener(vO47.a("b5ca58095d"), function () {
    let vO49 = {
      eie: null,
      joystick: {
        positionMode: "L",
        checked: true,
        size: 90,
        mode: "dynamic",
        position: {
          left: "110px",
          bottom: "110px"
        },
        color: "red",
        pxy: 110
      },
      on: false,
      vj: null,
      uj: null,
      m: null,
      n: null
    };
    let vO50 = {
      url: "https://wormxo.store",
      s_l: "https://timmapwormate.com",
      fullscreen: null,
      headshot: 0,
      s_headshot: 0,
      mobile: false,
      mo: 1,
      mo1: {
        x: -1,
        y: -1
      },
      mo2: {
        x: -1,
        y: -1
      },
      s_kill: 0,
      kill: 0,
      died: 0,
      saveGame: false,
      pm: {},
      joystick: vO49.joystick,
      j: null,
      pk: 0,
      pk0: "",
      pk1: "",
      pk2: "",
      pk3: "",
      pk4: "",
      pk5: "",
      pk6: "",
      z: 1,
      c_v: 222,
      c_1: "Cindynana GM",
      c_2: "Pham  Phu  Bach",
      c_3: "Tim map Wormate",
      c_4: "wormate.io",
      c_5: "please don't copy my code",
      d_1: "UTJsdVpIbE9ZVzVoSUVkTg==",
      d_2: "VUdoaGJTQlFhSFVnUW1GamFBPT0=",
      d_3: "VkdsdGJXRndWMjl5YldGMFpRPT0=",
      d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
      d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: "",
      g: 36,
      s_w: false,
      s_n: "",
      v_z: 0,
      h: false,
      sn: true,
      s: false,
      hz: false,
      fz: true,
      tt: false,
      vh: false,
      vp: false,
      iq: false,
      ctrl: false,
      r1: true,
      sc: 0,
      wi: 0,
      to: 10,
      sm: 20,
      pi: "",
      pn: "",
      se: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: []
      },
      st: false,
      hh: 0,
      sh: [],
      ws: [],
      we: [],
      wm: [],
      wg: [],
      wh: [],
      sg: [],
      gg: null,
      ig: -1,
      so: 1,
      re: false,
      dg: null
    };
    let v574 = localStorage.getItem("wxoSaveGame");
    if (v574 && v574 !== "null") {
      let v575 = JSON.parse(v574);
      for (let v576 in v575) {
        vO50[v576] = v575[v576];
      }
    }
    ;
    let vF41 = function () {
      let v583 = false;
      vO50.mobile = false;
      var v584 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v584) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v584.substr(0, 4))) {
        v583 = true;
        vO50.mobile = true;
      }
      return v583;
    };
    let vF42 = function (p825) {
      vO50.joystick ||= vO49.joystick;
      vO50.joystick.checked = p825.checked;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
    };
    let vF43 = function (p826) {
      vO50.joystick ||= vO49.joystick;
      vO50.joystick.color = p826.value;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
    };
    let vF44 = function (p827) {
      vO50.joystick ||= vO49.joystick;
      vO50.joystick.mode = p827.value;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
    };
    let vF45 = function (p828) {
      vO50.joystick ||= vO49.joystick;
      vO50.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (p828.value === "R") {
        vO50.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      vO50.joystick.positionMode = p828.value;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
    };
    let vF46 = function (p829) {
      vO50.joystick ||= vO49.joystick;
      vO50.joystick.position = {
        left: (parseInt(p829.value) + 10).toString() + "px",
        bottom: p829.value + "px"
      };
      if (vO50.joystick.positionMode === "R") {
        vO50.joystick.position = {
          right: (parseInt(p829.value) + 10).toString() + "px",
          bottom: p829.value + "px"
        };
      }
      vO50.joystick.pxy = p829.value;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
    };
    let vF47 = function (p830) {
      vO50.joystick ||= vO49.joystick;
      vO50.joystick.size = p830.value;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
    };
    let vF48 = function (p831, p832, p833, p834, p835, p836) {
      let vO51 = {
        a: "",
        b: 0,
        c: ""
      };
      if (p831 > vO50.g * 100 + 100 || p831 < vO50.g * 10 || p831 === undefined) {
        vO50.a = p831;
        if (p831 === undefined) {
          vO50.a = Math.floor(Math.random() * (vO50.g / 9) + (vO50.g - vO50.g / 9));
        }
        vO51.a = "00";
      } else {
        vO50.a = p831 - vO50.g * 10;
        vO51.b = vO50.a;
        vO50.a = vO50.a % (vO50.g / 9);
        vO51.b = (vO51.b - vO50.a) / (vO50.g / 9) + 1;
        vO50.a = vO50.a + (vO50.g - vO50.g / 9);
        vO51.a = vO51.b.toString(vO50.g).padStart(2, 0);
      }
      if (p832 > vO50.g * 20 || p832 < vO50.g / 9 * 100 || p832 === undefined) {
        if (p832 > vO50.g * 20 && p832 < vO50.g * 30) {
          vO50.b = p832 - vO50.g * 20;
          vO51.a = vO51.a + vO50.b.toString(vO50.g);
          vO50.b = 0;
          vO51.c = vO51.c + "1";
        } else {
          vO50.b = p832;
          if (p832 === undefined) {
            vO50.b = 0;
          }
          vO51.a = vO51.a + "0";
          vO51.c = vO51.c + "0";
        }
      } else {
        vO50.b = p832 - vO50.g / 9 * 100 + vO50.g / vO50.g;
        vO51.a = vO51.a + vO50.b.toString(vO50.g);
        vO50.b = 0;
        vO51.c = vO51.c + "0";
      }
      if (p833 > vO50.g * 20 || p833 < vO50.g / 9 * 100 || p833 === undefined) {
        if (p833 > vO50.g * 20 && p833 < vO50.g * 30) {
          vO50.c = p833 - vO50.g * 20;
          vO51.a = vO51.a + vO50.c.toString(vO50.g);
          vO50.c = 0;
          vO51.c = vO51.c + "1";
        } else {
          vO50.c = p833;
          if (p833 === undefined) {
            vO50.c = 0;
          }
          vO51.a = vO51.a + "0";
          vO51.c = vO51.c + "0";
        }
      } else {
        vO50.c = p833 - vO50.g / 9 * 100 + vO50.g / vO50.g;
        vO51.a = vO51.a + vO50.c.toString(vO50.g);
        vO50.c = 0;
        vO51.c = vO51.c + "0";
      }
      if (p834 > vO50.g * 20 || p834 < vO50.g / 9 * 100 || p834 === undefined) {
        if (p834 > vO50.g * 20 && p834 < vO50.g * 30) {
          vO50.d = p834 - vO50.g * 20;
          if (vO50.d.toString(vO50.g) === "N") {
            vO51.a = vO51.a + "0";
          } else {
            vO51.a = vO51.a + vO50.d.toString(vO50.g);
          }
          vO50.d = 0;
          vO51.c = vO51.c + "1";
        } else {
          vO50.d = p834;
          if (p834 === undefined) {
            vO50.d = 0;
          }
          vO51.a = vO51.a + "0";
          vO51.c = vO51.c + "0";
        }
      } else {
        vO50.d = p834 - vO50.g / 9 * 100 + vO50.g / vO50.g;
        if (vO50.d.toString(vO50.g) === "N") {
          vO51.a = vO51.a + "0";
        } else {
          vO51.a = vO51.a + vO50.d.toString(vO50.g);
        }
        vO50.d = 0;
        vO51.c = vO51.c + "0";
      }
      if (p835 > vO50.g * 20 || p835 < vO50.g / 9 * 100 || p835 === undefined) {
        if (p835 > vO50.g * 20 && p835 < vO50.g * 30) {
          vO51.b = vO50.g / vO50.g;
          if (p835 <= vO50.g * 20 + (vO50.g - 1)) {
            vO50.e = p835 - vO50.g * 20;
          } else if (p835 <= vO50.g * 20 + (vO50.g - 1) * 2) {
            vO51.b = vO51.b * 2;
            vO50.e = p835 - vO50.g * 20 - (vO50.g - 1);
          } else if (p835 <= vO50.g * 20 + (vO50.g - 1) * 3) {
            vO50.e = p835 - vO50.g * 20 - (vO50.g - 1) * 2;
          } else if (p835 <= vO50.g * 20 + (vO50.g - 1) * 4) {
            vO51.b = vO51.b * 2;
            vO50.e = p835 - vO50.g * 20 - (vO50.g - 1) * 3;
          } else {
            vO50.e = 0;
          }
          if (vO50.e >= vO50.g) {
            vO51.b = 2;
            vO50.e = vO50.e - (vO50.g - 1);
          }
          vO51.a = vO51.a + vO50.e.toString(vO50.g);
          vO50.e = 0;
          vO51.c = vO51.c + "1";
        } else {
          vO50.e = p835;
          if (p835 === undefined) {
            vO50.e = 0;
          }
          vO51.a = vO51.a + "0";
          vO51.c = vO51.c + "0";
          vO51.b = 0;
        }
      } else {
        vO51.b = vO50.g / vO50.g;
        if (p835 - vO50.g / 9 * 100 + 1 >= vO50.g) {
          vO50.e = p835 - (vO50.g / 9 * 100 + (vO50.g - 1));
          vO51.b = vO51.b * 2;
        } else {
          vO50.e = p835 - vO50.g / 9 * 100 + vO51.b;
        }
        vO51.a = vO51.a + vO50.e.toString(vO50.g);
        vO50.e = 0;
        vO51.c = vO51.c + "0";
      }
      if (vO51.a == "000000") {
        vO50.f = p836.substr(0, 22).padEnd(22);
      } else {
        let vParseInt7 = parseInt(vO51.c, 2);
        if (p835 > 790 && p835 <= 860) {
          vParseInt7 += 16;
        }
        if (vO51.b <= 1) {
          vO51.a = vO51.a.substr(0, 5) + "." + vO51.a.substr(5, 1);
        } else {
          vO51.a = vO51.a.substr(0, 4) + "." + vO51.a.substr(4, 2);
        }
        if (p836 == "") {
          p836 = ".                       .";
        }
        if (vO51.c == "0000") {
          if (p836.substr(23, 1) == ".") {
            p836 = p836.substr(0, 23).padEnd(23) + " " + p836.substr(24, 1).padEnd(1);
          }
          vO50.f = (p836.length >= 32 ? p836.substr(0, 25) : p836.substr(0, 25).padEnd(25)) + vO51.a;
        } else {
          vO50.f = (p836.length >= 32 ? p836.substr(0, 23) : p836.substr(0, 23).padEnd(23)) + "." + vParseInt7.toString(vO50.g) + vO51.a;
        }
        vO50.f = vO50.f.replaceAll(" ", "_");
      }
    };
    let vF49 = function (p837) {
      let v942;
      try {
        vO50.joystick ||= vO49.joystick;
        if (vF41() && p837 && vO50.joystick.checked) {
          (v942 = nipplejs.create(vO50.joystick)).on("move", function (p838, p839) {
            vO49.eie.fo = p839.angle.radian <= Math.PI ? p839.angle.radian * -1 : Math.PI - (p839.angle.radian - Math.PI);
          });
        }
        return v942;
      } catch (e) {
        console.error(e);
      }
    };
    let vF50 = function (p840) {
      let vO52 = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: "",
        g: 0,
        h: "",
        i: ""
      };
      let vLN024 = 0;
      vO52.h = p840.substr(-9);
      if (vO52.h.substr(0, 1) != ".") {
        vO52.i = "0000";
      } else if ((vLN024 = parseInt(vO52.h.substr(1, 1), vO50.g)) > 15) {
        vLN024 -= 16;
        vO52.i = vLN024.toString(2).padStart(4, 0);
      } else {
        vO52.i = vLN024.toString(2).padStart(4, 0);
        vLN024 = 0;
      }
      vO52.f = p840.substr(-7);
      if (vO52.f.substr(0, 2) != "00") {
        vO52.a = parseInt(vO52.f.substr(0, 2), vO50.g);
        vO52.a = (vO52.a - 1) * (vO50.g / 9) + vO50.g * 10 - (vO50.g - 4);
      }
      if (vO52.f.substr(5, 1) == ".") {
        if (vO52.f.substr(6, 1) != "0") {
          vO52.e = parseInt(vO52.f.substr(6, 1), vO50.g);
          if (vO52.i.substr(3, 1) != "0") {
            if (vLN024 > 0) {
              vO52.e = vO52.e + vO50.g * 20 + (vO50.g - 1) * 2;
            } else {
              vO52.e = vO52.e + vO50.g * 20;
            }
          } else {
            vO52.e = vO52.e - 1 + vO50.g / 9 * 100;
          }
        }
      } else {
        vO52.e = parseInt(vO52.f.substr(6, 1), vO50.g);
        if (vO52.i.substr(3, 1) != "0") {
          if (vLN024 > 0) {
            vO52.e = vO52.e + vO50.g * 20 + (vO50.g - 1) * 3;
          } else {
            vO52.e = vO52.e + vO50.g * 20 + (vO50.g - 1);
          }
        } else {
          vO52.e = vO52.e + (vO50.g / 9 * 100 + (vO50.g - 1));
        }
      }
      vO52.f = vO52.f.replace(".", "");
      if (vO52.f.substr(2, 1) != "0") {
        vO52.b = parseInt(vO52.f.substr(2, 1), vO50.g);
        if (vO52.i.substr(0, 1) != "0") {
          vO52.b = vO52.b + vO50.g * 20;
        } else {
          vO52.b = vO52.b - 1 + vO50.g / 9 * 100;
        }
      }
      if (vO52.f.substr(3, 1) != "0") {
        vO52.c = parseInt(vO52.f.substr(3, 1), vO50.g);
        if (vO52.i.substr(1, 1) != "0") {
          vO52.c = vO52.c + vO50.g * 20;
        } else {
          vO52.c = vO52.c - 1 + vO50.g / 9 * 100;
        }
      }
      if (vO52.f.substr(4, 1) != "0") {
        vO52.d = parseInt(vO52.f.substr(4, 1), vO50.g);
        if (vO52.i.substr(2, 1) != "0") {
          vO52.d = vO52.d + vO50.g * 20;
        } else {
          vO52.d = vO52.d - 1 + vO50.g / 9 * 100;
        }
      }
      return vO52;
    };
    let vF51 = function (p841) {
      return !(p841 > vO50.g * 30) && !(p841 < vO50.g / 9 * 100) || p841 == 0;
    };
    let vF52 = function (p842) {
      return /^(.{25})(\w{5}\.\w{1})$/.test(p842) || /^(.{25})(\w{4}\.\w{2})$/.test(p842);
    };
    let vF53 = function (p843) {
      p843 = p843.replaceAll("_", " ");
      if (/^(.{25})(\w{7})$/.test(p843)) {
        for (p843 = p843.substr(0, 15).trim(); p843.substr(p843.length - 1, 1) == ".";) {
          p843 = p843.substr(0, p843.length - 1);
        }
        ;
        return p843;
      }
      ;
      if (/^(.{25})(\w{5}\.\w{1})$/.test(p843) || /^(.{25})(\w{4}\.\w{2})$/.test(p843)) {
        if (p843.substr(-9).substr(0, 1) != ".") {
          return p843.substr(0, 25).trim();
        } else {
          return p843.substr(0, 23).trim();
        }
      } else {
        return p843;
      }
    };
    vO50.loading = true;
    var v944 = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var v945 = localStorage.getItem("wxosw");
    var v946 = localStorage.getItem("wxoi") != null ? localStorage.getItem("wxoi").split(",") : localStorage.getItem("wxoi");
    var v984 = localStorage.getItem("wxoit");
    var v990 = localStorage.getItem("custom_wear");
    var v991 = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    var v999 = null;
    var v1012 = null;
    var v1013 = false;
    var vLN552 = 55;
    var vLN19 = 1;
    var v1014 = true;
    if (v946 && v984 && v984 == vO50.v_z) ;else {
      fetch("https://raw.githubusercontent.com/xo2xo2/1/refs/heads/main/store/index.json", {
      }).then(async function (p844) {
        v946 = (p844 = await p844.json()).i.split(".");
        localStorage.setItem("wxoi", v946);
        localStorage.setItem("wxoit", p844.vs);
        vO50.v_z = p844.vs;
        localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
        window.location.reload();
      }).catch(function (p845) {});
    }
    ;
    var v1015 = PIXI.Texture.from(vO50.url + "/images/close_q.png");
    var v1016 = PIXI.Texture.from(vO50.url + "/images/open_q.png");
    var v1017 = PIXI.Texture.from(vO50.url + "/images/close_w.png");
    var v1018 = PIXI.Texture.from(vO50.url + "/images/open_w.png");
    var v1019 = PIXI.Texture.from(vO50.url + "/images/close_z.png");
    var v1020 = PIXI.Texture.from(vO50.url + "/images/open_z.png");
    var v1021 = PIXI.Texture.from(vO50.url + "/images/z_i.png");
    var v1022 = PIXI.Texture.from(vO50.url + "/images/z_o.png");
    var v1023 = new PIXI.Sprite(v1015);
    v1023.buttonMode = true;
    v1023.anchor.set(0.5);
    v1023.x = -65;
    v1023.y = 25;
    v1023.interactive = true;
    v1023.buttonMode = true;
    var v1024 = new PIXI.Sprite(v1017);
    v1024.buttonMode = true;
    v1024.anchor.set(0.5);
    v1024.x = -33;
    v1024.y = 25;
    v1024.interactive = true;
    v1024.buttonMode = true;
    var v1025 = new PIXI.Sprite(v1019);
    v1025.buttonMode = true;
    v1025.anchor.set(0.5);
    v1025.x = -1;
    v1025.y = 25;
    v1025.interactive = true;
    v1025.buttonMode = true;
    var v1026 = new PIXI.Sprite(v1022);
    v1026.buttonMode = true;
    v1026.anchor.set(0.5);
    v1026.x = -1;
    v1026.y = 25;
    v1026.interactive = true;
    v1026.buttonMode = true;
    var v1027 = new PIXI.Sprite(v1021);
    v1027.buttonMode = true;
    v1027.anchor.set(0.5);
    v1027.x = -33;
    v1027.y = 25;
    v1027.interactive = true;
    v1027.buttonMode = true;
    v1024.alpha = 0.25;
    v1023.alpha = 0.25;
    v1025.alpha = 0.25;
    v1027.alpha = 0.25;
    v1026.alpha = 0.25;
    var v1028 = new PIXI.Text("?", {
      fontFamily: "WormXO",
      fill: "#fff009",
      fontSize: 12
    });
    v1028.anchor.x = 0.5;
    v1028.position.x = 110;
    var v1029 = document.getElementById("game-cont");
    var v1030 = document.getElementById("game-view");
    var v$14 = $("#mm-params-game-mode");
    vO37.d[vO47.a("1a4cb9595bc385dc475d90775ffe8c")](vO47.a("96403944ff862bdfff5f"))[vO47.a("818177cd6993")][vO47.a("4b98244dbf6cb03b")] = vO47.a("59a8b7e3bea5");
    (function (p846, p847, p848) {
      function f95(p849, p850) {
        return f(p849) === p850;
      }
      function f96() {
        if (vO47.a("3540c286da5e528353") != f(p847.createElement)) {
          return p847.createElement(arguments[0]);
        } else if (v1033) {
          return p847.createElementNS.call(p847, vO47.a("72eb40f1063d17260dfc4ba3093c6e7ef0f46ba7b6277836f9ed2b"), arguments[0]);
        } else {
          return p847.createElement.apply(p847, arguments);
        }
      }
      var vA17 = [];
      var vA18 = [];
      var vO53 = {
        _version: vO47.a("a92905ef032f"),
        _config: {
          classPrefix: vO47.a("ca"),
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p851, p852) {
          var vThis43 = this;
          setTimeout(function () {
            p852(vThis43[p851]);
          }, 0);
        },
        addTest: function (p853, p854, p855) {
          vA18.push({
            name: p853,
            fn: p854,
            options: p855
          });
        },
        addAsyncTest: function (p856) {
          vA18.push({
            name: null,
            fn: p856
          });
        }
      };
      function f97() {}
      f97.prototype = vO53;
      f97 = new f97();
      var v1031 = false;
      try {
        v1031 = vO47.a("66a04d9b39144f160b8b") in p846 && p846.WebSocket.CLOSING === 2;
      } catch (e33) {}
      ;
      f97.addTest(vO47.a("11f5f626e6e974237cfee8"), v1031);
      var v1032 = p847.documentElement;
      var v1033 = vO47.a("189a2c0c") === v1032.nodeName.toLowerCase();
      f97.addTest(vO47.a("a9794ab25b7fdc"), function () {
        var vF96 = f96(vO47.a("766459670cea4f"));
        return !!vF96.getContext && !!vF96.getContext(vO47.a("5d7cbb"));
      });
      f97.addTest(vO47.a("0a78ad7378fea3d5775ba0"), function () {
        return f97.canvas !== false && vO47.a("782fcfa51fb9d720ee") == f(f96(vO47.a("e5b506f61fbb98")).getContext(vO47.a("7f82e5")).fillText);
      });
      (function () {
        var v1034;
        var v1035;
        var v1036;
        var v1037;
        var v1038;
        var v1039;
        var v1040;
        for (var v1041 in vA18) {
          if (vA18.hasOwnProperty(v1041)) {
            v1034 = [];
            if ((v1035 = vA18[v1041]).name && (v1034.push(v1035.name.toLowerCase()), v1035.options && v1035.options.aliases && v1035.options.aliases.length)) {
              for (v1036 = 0; v1036 < v1035.options.aliases.length; v1036++) {
                v1034.push(v1035.options.aliases[v1036].toLowerCase());
              }
            }
            ;
            v1037 = f95(v1035.fn, vO47.a("0c3b3bb173953b0c7a")) ? v1035.fn() : v1035.fn;
            v1038 = 0;
            for (; v1038 < v1034.length; v1038++) {
              if ((v1040 = (v1039 = v1034[v1038]).split(vO47.a("b669"))).length === 1) {
                f97[v1040[0]] = v1037;
              } else {
                if (!!f97[v1040[0]] && !(f97[v1040[0]] instanceof Boolean)) {
                  f97[v1040[0]] = new Boolean(f97[v1040[0]]);
                }
                f97[v1040[0]][v1040[1]] = v1037;
              }
              vA17.push((v1037 ? vO47.a("72") : vO47.a("e5b808b5")) + v1040.join(vO47.a("2a16")));
            }
          }
        }
      })();
      (function (p857) {
        var v1042 = v1032.className;
        var v1043 = f97._config.classPrefix || vO47.a("e3");
        if (v1033) {
          v1042 = v1042.baseVal;
        }
        if (f97._config.enableJSClass) {
          var vRegExp2 = RegExp(vO47.a("0eb78edd4e50fd") + v1043 + vO47.a("0bd262d3e5b3b95e60b8312f"));
          v1042 = v1042.replace(vRegExp2, vO47.a("28dd5b") + v1043 + vO47.a("2bb65e3a9d"));
        }
        ;
        if (f97._config.enableClasses) {
          v1042 += vO47.a("2536") + v1043 + p857.join(vO47.a("21b2") + v1043);
          if (v1033) {
            v1032.className.baseVal = v1042;
          } else {
            v1032.className = v1042;
          }
        }
      })(vA17);
      delete vO53.addTest;
      delete vO53.addAsyncTest;
      for (var vLN0128 = 0; vLN0128 < f97._q.length; vLN0128++) {
        f97._q[vLN0128]();
      }
      ;
      p846.Modernizr = f97;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      vO37.d[vO47.a("1bab787adabcc47f46ba5154de91cd")](vO47.a("7aee4eff117d6d67ebf633"))[vO47.a("4545b381a55f")][vO47.a("b78cd0594b805c57")] = vO47.a("19e8f723fee5");
      return;
    }
    ;
    vO48.f = {
      g: function (p858, p859, p860) {
        p858[vO47.a("0101f75bf5")]();
        p858[vO47.a("c47367f3add064")](p859, p860);
      },
      h: function (p861, p862, p863) {
        p861[vO47.a("cc6e7af0a0")]();
        p861[vO47.a("9de87e3444ddd620")](p862, p863);
      }
    };
    vO48.i = vO47.b(vO47.a("a6600d5bf9d40fd6cb4b"));
    vO48.j = vO47.b(vO47.a("077e6515ea48be4c4e3263e3ea"));
    v1631 = (v1630 = vO47.b(vO47.a("88098383c5")))[vO47.a("04170a92469d151643190b8c")];
    v1632 = v1630[vO47.a("8c8a9c1ec03e9facd0a085")];
    vO48.k = {
      l: v1630[vO47.a("5505b866ad2b3262383c")],
      m: v1630[vO47.a("142737947dbd3f1368182c8a")],
      n: v1630[vO47.a("ed8a0ad8059781c1")],
      o: v1630[vO47.a("3bbe5840db95b35731")],
      p: v1630[vO47.a("f3e3878707c0108988")],
      q: v1630[vO47.a("5cfef64e0454d0")],
      r: v1630[vO47.a("57da3ca9afedb3a933f5")],
      s: v1630[vO47.a("e3c795a40eec0c")],
      t: v1630[vO47.a("dd9a3ae815")],
      u: v1630[vO47.a("1c2a3b804d9416015d")],
      v: v1630[vO47.a("dc607bdc88")],
      w: {
        z: v1631[vO47.a("1a6a9869")],
        A: v1631[vO47.a("acaead2df5c4bc")],
        B: v1631[vO47.a("752ba264ad232b6024")]
      },
      C: {
        D: v1632[vO47.a("4201410503965c")]
      },
      F: {
        G: function (p864) {
          var v1044 = p864[vO47.a("7e7f2163e7fd30")];
          if (v1044 != null) {
            v1044[vO47.a("7033d7ae1bb3d3041020d6af")](p864);
          }
        }
      }
    };
    vO46.H = {
      I: vO37.c[vO47.a("e76a9c341f75003ba741820a")],
      J: vO47.a("a9725fa85d6d95cf9e4552905051d691975d549e504fcb95ef5b2c"),
      K: vO47.a("7fd8f58673c73fd9a8caec8964c97f9deab3bf757cb67867e3adb76374"),
      L: vO47.a("a7f7c0774abb486d808cd84c56885a41d8c5cf4b57885c578dc0f3066d842b51"),
      M: vO47.a("c2fcedb8a730ed2ae5bcf9b8bd2bbd00a482e084a44aee08b68ffd94ec5f9245cc83ca92"),
      N: vO47.a("ead4c5908f18d5f2dd60db6b90e2ccfd9326ca6c92eba1e83023f62128e7a6fe"),
      O: vO47.a("4bd32453ae67b4317c66326bb27ebc242f212d2fab6484200d390d378b74862d0e79036cdf12c54c034a12")
    };
    vO46.H.P = ((v1633 = vO37.c[vO47.a("e8f01b03a26262febe86")]) || (v1633 = vO47.a("ce3afe")), v1633);
    vO46.H.Q = function () {
      var v1045;
      switch (vO46.H.P) {
        case vO47.a("5e9a4b"):
          v1045 = vO47.a("3b995671eab1");
          break;
        case vO47.a("3eab65"):
          v1045 = vO47.a("da8ff9b29a2a");
          break;
        case vO47.a("225596"):
          v1045 = vO47.a("d76eab151d5e");
          break;
        case vO47.a("520667"):
          v1045 = vO47.a("043035884d8a");
          break;
        default:
          v1045 = vO47.a("69bf85c3b88d");
      }
      ;
      return v1045;
    }();
    moment.locale(vO46.H.Q);
    ooo = null;
    vO46.S = 6.283185307179586;
    vO46.T = 3.141592653589793;
    v1634 = vO37.c[vO47.a("5d07ee28af0d2e513605a65fac09")];
    vO47.U = function (p865) {
      return v1634[p865];
    };
    vO47.V = function (p866) {
      if (p866[vO46.H.P]) {
        return p866[vO46.H.P];
      } else if (p866[vO47.a("a2d60a")]) {
        return p866[vO47.a("c5d329")];
      } else {
        return p866[vO47.a("917a")];
      }
    };
    vO47.W = function (p867) {
      return encodeURI(p867);
    };
    vO47.X = function (p868, p869) {
      return setInterval(p868, p869);
    };
    vO47.Y = function (p870, p871) {
      return setTimeout(p870, p871);
    };
    vO47.Z = function (p872) {
      clearTimeout(p872);
    };
    vO47.$ = function (p873) {
      var v1046 = (vO47._(p873) % 60).toString();
      var v1047 = (vO47._(p873 / 60) % 60).toString();
      var v1048 = (vO47._(p873 / 3600) % 24).toString();
      var v1049 = vO47._(p873 / 86400).toString();
      var v1050 = vO47.U(vO47.a("f43042ae94e74e22912810ab61a831"));
      var v1051 = vO47.U(vO47.a("8d0b7b297dace72df8e3392076ffe93f"));
      var v1052 = vO47.U(vO47.a("f59303c115c48fc5908b51dde89c"));
      var v1053 = vO47.U(vO47.a("0bc97997e3eee56b7ea13b75f2ab"));
      if (v1049 > 0) {
        return v1049 + vO47.a("1c4d") + v1050 + vO47.a("d162") + v1048 + vO47.a("0394") + v1051 + vO47.a("3bcc") + v1047 + vO47.a("33c4") + v1052 + vO47.a("1526") + v1046 + vO47.a("d96a") + v1053;
      } else if (v1048 > 0) {
        return v1048 + vO47.a("3bcc") + v1051 + vO47.a("5fb0") + v1047 + vO47.a("c435") + v1052 + vO47.a("67b8") + v1046 + vO47.a("8cfd") + v1053;
      } else if (v1047 > 0) {
        return v1047 + vO47.a("a859") + v1052 + vO47.a("f384") + v1046 + vO47.a("fc6d") + v1053;
      } else {
        return v1046 + vO47.a("c0b1") + v1053;
      }
    };
    vO47.aa = function (p874) {
      if (p874.includes(vO47.a("c790bb5f2d"))) {
        return p874.replaceAll(vO47.a("f58e05cd1f"), vO47.a("72f755f711624c3458d45ee11f6c2b33a2fb36f0e0"));
      } else {
        return p874;
      }
    };
    vO47.ba = function (p875, p876, p877) {
      var v1054 = vO37.d[vO47.a("2edc82a4533791005aa295ac543f")](vO47.a("9ad83fdff75f14"));
      var v1055 = true;
      if (vO47.a("95f3792c7cecf222f8ea") !== f(p876) && p876 !== null) {
        if (vO47.a("52167a01338171873f0f") !== f(p876[vO47.a("79839f")])) {
          v1054[vO47.a("257fc3")] = p876[vO47.a("5a0278")];
        }
        if (vO47.a("f276da6193e1d1e79f6f") !== f(p876[vO47.a("28981902421e")]) && p876[vO47.a("9808a992f28e")]) {
          v1054[vO47.a("a5f7542147f9")] = vO47.a("4ebe63983c00");
        }
        if (vO47.a("5cd8f04b0557cbdd01d1") !== f(p876[vO47.a("0f2474e4f636")]) && p876[vO47.a("b5c2520e5cd8")]) {
          v1054[vO47.a("00b527356127")] = vO47.a("7025d7a511b7");
        }
        if (vO47.a("240008934d9f03154919") !== f(p876[vO47.a("59a9a9e3aebd30e208b58afa")])) {
          v1054[vO47.a("46b47ab63928632f27b8798f")] = p876[vO47.a("4b9f3f51bc73be303a633c28")];
        }
      }
      v1054[vO47.a("173c60fafe")] = vO47.a("288d0f035852049e466001e046ec0673");
      v1054[vO47.a("21e1d137")] = p875;
      if (p877) {
        v1054[vO47.a("504efccf3bc4f2")] = v1054[vO47.a("67f707a88efd89a71cd4109696c79d8719cf1c")] = function () {
          v1055 = false;
          try {
            p877();
          } catch (e34) {}
          ;
          v1054[vO47.a("7b431302905165")] = v1054[vO47.a("00be2c21613422ae7bad2b2f693e26be7e8637")] = null;
        };
      }
      (vO37.d[vO47.a("d0c97742b0")] || vO37.d[vO47.a("b46293f3fde59f66d9638afc82e85672a35b67faad")](vO47.a("fd861ad1e5"))[0])[vO47.a("6375152682768d190375013a")](v1054);
    };
    vO47.ca = function (p878, p879) {
      var vP879 = p879;
      vP879.prototype = Object.create(p878.prototype);
      vP879.prototype.constructor = vP879;
      vP879.parent = p878;
      return vP879;
    };
    vO47.da = function (p880) {
      if ((p880 %= vO46.S) < 0) {
        return p880 + vO46.S;
      } else {
        return p880;
      }
    };
    vO47.ea = function (p881, p882, p883) {
      return vO47.fa(p883, p881, p882);
    };
    vO47.fa = function (p884, p885, p886) {
      if (p884 > p886) {
        return p886;
      } else if (p884 < p885) {
        return p885;
      } else if (Number.isFinite(p884)) {
        return p884;
      } else {
        return (p885 + p886) * 0.5;
      }
    };
    vO47.ga = function (p887, p888, p889, p890) {
      if (p888 > p887) {
        return vO47.ha(p888, p887 + p889 * p890);
      } else {
        return vO47.ia(p888, p887 - p889 * p890);
      }
    };
    vO47.ja = function (p891, p892, p893, p894, p895) {
      return p892 + (p891 - p892) * Math.pow(1 - p894, p893 / p895);
    };
    vO47.ka = function (p896, p897, p898) {
      return p896 - (p896 - p897) * p898;
    };
    vO47.la = function (p899, p900) {
      return Math.sqrt(p899 * p899 + p900 * p900);
    };
    vO47.ma = function () {
      return Math.random();
    };
    vO47._ = function (p901) {
      return Math.floor(p901);
    };
    vO47.na = function (p902) {
      return Math.abs(p902);
    };
    vO47.ha = function (p903, p904) {
      return Math.min(p903, p904);
    };
    vO47.ia = function (p905, p906) {
      return Math.max(p905, p906);
    };
    vO47.oa = function (p907) {
      return Math.sin(p907);
    };
    vO47.pa = function (p908) {
      return Math.cos(p908);
    };
    vO47.qa = function (p909) {
      return Math.sqrt(p909);
    };
    vO47.ra = function (p910, p911) {
      return Math.pow(p910, p911);
    };
    vO47.sa = function (p912) {
      return Math.atan(p912);
    };
    vO47.ta = function (p913, p914) {
      return Math.atan2(p913, p914);
    };
    vO47.ua = function (p915, p916, p917, p918) {
      var v1056 = p916 + p918;
      if (p915 == null) {
        throw TypeError();
      }
      ;
      var v1057 = p915.length >>> 0;
      var v1058 = p917 >> 0;
      var v1059 = v1058 < 0 ? Math.max(v1057 + v1058, 0) : Math.min(v1058, v1057);
      var v1060 = p916 >> 0;
      var v1061 = v1060 < 0 ? Math.max(v1057 + v1060, 0) : Math.min(v1060, v1057);
      var v1062 = v1056 === undefined ? v1057 : v1056 >> 0;
      var v1063 = Math.min((v1062 < 0 ? Math.max(v1057 + v1062, 0) : Math.min(v1062, v1057)) - v1061, v1057 - v1059);
      var vLN110 = 1;
      for (v1061 < v1059 && v1059 < v1061 + v1063 && (vLN110 = -1, v1061 += v1063 - 1, v1059 += v1063 - 1); v1063 > 0;) {
        if (v1061 in p915) {
          p915[v1059] = p915[v1061];
        } else {
          delete p915[v1059];
        }
        v1061 += vLN110;
        v1059 += vLN110;
        v1063--;
      }
      ;
      return p915;
    };
    vO47.va = function (p919, p920) {
      return p919 + (p920 - p919) * vO47.ma();
    };
    vO47.wa = function (p921) {
      return p921[parseInt(vO47.ma() * p921.length)];
    };
    v1635 = [vO47.a("a849"), vO47.a("11b3"), vO47.a("dad9"), vO47.a("6d6d"), vO47.a("de5b"), vO47.a("4eea"), vO47.a("d097"), vO47.a("36f0"), vO47.a("8861"), vO47.a("11bb"), vO47.a("0f21"), vO47.a("3cef"), vO47.a("e3f7"), vO47.a("9dea"), vO47.a("8197"), vO47.a("13a2"), vO47.a("d92d"), vO47.a("7ca5"), vO47.a("51ab"), vO47.a("b62d"), vO47.a("5ffb"), vO47.a("f6eb"), vO47.a("dc40"), vO47.a("209f"), vO47.a("ea94"), vO47.a("6041"), vO47.a("2242"), vO47.a("6d2c"), vO47.a("6fd3"), vO47.a("c300"), vO47.a("26c2"), vO47.a("2a4d"), vO47.a("470f"), vO47.a("026b"), vO47.a("ea82"), vO47.a("5a11")].map(function (p922) {
      return p922.charCodeAt(0);
    });
    vO47.xa = function (p923) {
      if (vO47.a("ddbb31f404b48afa80b2") == f(p923)) {
        p923 = 16;
      }
      var v1064 = vO47.a("b6");
      for (var vLN0131 = 0; vLN0131 < p923; vLN0131++) {
        v1064 += String.fromCharCode(v1635[vO47._(vO47.ma() * v1635.length)]);
      }
      ;
      return v1064;
    };
    vO47.ya = function (p924, p925, p926) {
      var v1065 = p926 * (1 - p925 * 0.5);
      var v1066 = Math.min(v1065, 1 - v1065);
      return vO47.za(p924, v1066 ? (p926 - v1065) / v1066 : 0, v1065);
    };
    vO47.za = function (p927, p928, p929) {
      var v1067 = (1 - vO47.na(p929 * 2 - 1)) * p928;
      var v1068 = v1067 * (1 - vO47.na(p927 / 60 % 2 - 1));
      var v1069 = p929 - v1067 / 2;
      if (p927 >= 0 && p927 < 60) {
        return [v1069 + v1067, v1069 + v1068, v1069];
      } else if (p927 >= 60 && p927 < 120) {
        return [v1069 + v1068, v1069 + v1067, v1069];
      } else if (p927 >= 120 && p927 < 180) {
        return [v1069, v1069 + v1067, v1069 + v1068];
      } else if (p927 >= 180 && p927 < 240) {
        return [v1069, v1069 + v1068, v1069 + v1067];
      } else if (p927 >= 240 && p927 < 300) {
        return [v1069 + v1068, v1069, v1069 + v1067];
      } else {
        return [v1069 + v1067, v1069, v1069 + v1068];
      }
    };
    vO47.Aa = function (p930, p931, p932) {
      $[vO47.a("1d69faa4")](p930)[vO47.a("b2a515acda")](p931)[vO47.a("3b885240da")](p932);
    };
    vO47.Ba = function (p933, p934, p935, p936) {
      var vO54 = {};
      vO54[vO47.a("dc5967df85")] = vO47.a("5066d7f7");
      vO54[vO47.a("7cb8cc23")] = p933;
      var vO55 = {};
      vO55[vO47.a("2564c2abd97545af484ad690d4")] = vO47.a("d92b297e3c37bd6587340666");
      vO55[vO47.a("11edfd34e7e9703a7cf9e8")] = function (p937) {
        if (p937[vO47.a("8835afb5eba9a61cff0ca296e084b40bfd")]) {
          p936(p937[vO47.a("fa67d36c9aeaa4")] / p937[vO47.a("b79cd65e5a80")] * 100);
        }
      };
      vO54[vO47.a("a2cb0cc7e05e0d55cec8")] = vO55;
      $[vO47.a("fbcd978f07")](vO54)[vO47.a("c5d0261125")](p934)[vO47.a("9e4b0f5fc7")](p935);
    };
    vO47.Ca = function () {
      return Date.now();
    };
    vO47.Da = function (p938, p939) {
      for (var v1070 in p938) {
        if (p938.hasOwnProperty(v1070)) {
          p939(v1070, p938[v1070]);
        }
      }
    };
    vO47.Ea = function (p940) {
      for (var v1071 = p940.length - 1; v1071 > 0; v1071--) {
        var v1072 = vO47._(vO47.ma() * (v1071 + 1));
        var v1073 = p940[v1071];
        p940[v1071] = p940[v1072];
        p940[v1072] = v1073;
      }
      ;
      return p940;
    };
    vO37.Fa = vO47.b(vO47.a("16e6aadb7b529e5878c985c3"));
    vO37.Ga = vO47.b(vO47.a("d8ed7b5fbd7b77ca97"));
    vO37.Ha = function () {
      function f98(p941) {
        this.Ia = p941;
        this.Ja = 0;
      }
      var v1074 = vO47.a("423461210fb97ce1");
      f98.prototype.Ka = function () {
        var v1075 = this.Ia[v1074](this.Ja);
        this.Ja += 1;
        return v1075;
      };
      var v1076 = vO47.a("2a5c894967d184f004");
      f98.prototype.La = function () {
        var v1077 = this.Ia[v1076](this.Ja);
        this.Ja += 2;
        return v1077;
      };
      var v1078 = vO47.a("de08c505ab9dd0c6d4");
      f98.prototype.Ma = function () {
        var v1079 = this.Ia[v1078](this.Ja);
        this.Ja += 4;
        return v1079;
      };
      var v1080 = vO47.a("4b9b284a896cbe23273767");
      f98.prototype.Na = function () {
        var v1081 = this.Ia[v1080](this.Ja);
        this.Ja += 4;
        return v1081;
      };
      return f98;
    }();
    vO37.Oa = function () {
      function f99(p942) {
        this.Ia = p942;
        this.Ja = 0;
      }
      var v1082 = vO47.a("5e9c45852b1d504d");
      f99.prototype.Pa = function (p943) {
        this.Ia[v1082](this.Ja, p943);
        this.Ja += 1;
      };
      var v1083 = vO47.a("ee0cd5f5bb6dc034c0");
      f99.prototype.Qa = function (p944) {
        this.Ia[v1083](this.Ja, p944);
        this.Ja += 2;
      };
      return f99;
    }();
    vO47.Ra = function () {
      var v1084 = false;
      function f100() {}
      var vO56 = {};
      var v1085 = vO47.a("edef0ac11e8fc39596d507d00cd38cc8ce");
      var v$15 = $(vO47.a("74e6") + v1085);
      var v1086 = vO47.a("e63dec318490e489b708c9d98b55d342cf");
      var v$16 = $(vO47.a("4cbe") + v1086);
      $(vO47.a("adbd4e0453ce9e07dac8430157dfde")).click(function () {
        v$16[vO47.a("e295c5918338dd0d")](500);
        f100(false);
      });
      vO56.Sa = function (p945) {
        f100 = p945;
        if (!v1084) {
          try {
            aiptag[vO47.a("9ded7234")][vO47.a("224388545fd29a")][vO47.a("cc6d7becb8")](function () {
              var vO57 = {
                [vO47.a("10a0163c432c12b350")]: 960,
                [vO47.a("39ebff33f5eb763709e6")]: 540,
                [vO47.a("b16377bb7373fba4ea6969a97860")]: true,
                [vO47.a("bdef7b2f02f78d2080e4173408e38e2e")]: false
              };
              vO57[vO47.a("9784d64b5f855349c084e44a77")] = vO47.a("027fab7462fea6fe2a7aa86b6beda4c86146b94078d3");
              vO57[vO47.a("77f82bafa9e3b1a220f5cdb74e")] = function () {
                return vO37.d[vO47.a("c313a0c202142cd7ae12b9fc36c935")](v1085);
              };
              vO57[vO47.a("bc4cb7df9fd24d5e945943c38d")] = function (p946) {
                f100(true);
                vO48.f.h(v$15, 1);
                vO48.f.h(v$16, 1);
                try {
                  ga(vO47.a("9fa3c47c47"), vO47.a("471d3fdfa508"), vO47.a("66875a9c18144011"), vO46.H.I + vO47.a("701ed1ac19b5da220c2c"));
                } catch (e35) {}
              };
              vO57[vO47.a("20b02b237b2723ba67af2f")] = function () {};
              aiptag[vO47.a("c636ec29a6baf5b8bc")] = new aipPlayer(vO57);
            });
            v1084 = true;
          } catch (e36) {}
        }
      };
      vO56.Ta = function () {
        if (f(aiptag[vO47.a("41d3a704a9d73e1d3b")]) !== vO47.a("e1270d7000308e768c3e")) {
          try {
            ga(vO47.a("c9492e9229"), vO47.a("3f1537d7ad00"), vO47.a("090af959ff11632c"), vO46.H.I + vO47.a("56b86a8c2b1e791e2a"));
          } catch (e37) {}
          ;
          vO48.f.g(v$15, 1);
          if (!vO49.on) {
            aiptag[vO47.a("95e57a2c")][vO47.a("0bcc619ff6a5e3")][vO47.a("9819af98f4")](function () {
              aiptag[vO47.a("6cdcca4f1c20cba606")][vO47.a("6cceda5e0235e2b11197d92b14")]();
            });
          }
        } else {
          try {
            ga(vO47.a("13b77068f3"), vO47.a("487cfcfe22e9"), vO47.a("5ff10fa68af581b40bf70ab18eee"), vO46.H.I + vO47.a("622c570107855c"));
          } catch (e38) {}
          ;
          (function f101() {
            $(vO47.a("786adbaf1ea1937e")).text(vO47.U(vO47.a("6a1242190b871e6613ee51ab17694c601bef5ee1116c2b74f0bd29e6e126")));
            $(vO47.a("11a1f220f7ea3a7a")).text(vO47.U(vO47.a("370157cede1493c95e1d249ca21ab1df261c2bd6a41fa6db3dae3cb1b4b6")));
            $(vO47.a("e3b784b205f444e9")).text(vO47.U(vO47.a("7ae252e91b776e76e3fe21bbe7793c70ebff2ef1e17c3b44e08d39d6f114")));
            $(vO47.a("8cfeaf3bf20dffd7")).text(vO47.U(vO47.a("49d3a518a8c661e730afb6aab4a823e138aeb9e0b2ad34f513fc8ee782e2")).replace(vO47.a("51b9e3f9"), 10));
            $(vO47.a("6c9ecf5b122d9fa01babc22e163cdfeb0fbddf21")).text(vO47.U(vO47.a("19e3f528f8f6313740ffc67ac4f8533148fec930c2fd4405438cd00bdbd25e064ccf")));
            vO48.f.h($(vO47.a("61f182f087ba4afb06b49ff583ab0a")), 1);
            vO48.f.g(v$16, 500);
            var vLN102 = 10;
            for (var vLN0134 = 0; vLN0134 < 10; vLN0134++) {
              vO47.Y(function () {
                vLN102--;
                $(vO47.a("ee5cd1e5906f9931")).text(vO47.U(vO47.a("fbc5938a1ac8af9562d960d8e6d6fd936ad86f92e0a3fa6761ea7875f0fc")).replace(vO47.a("44eeb66a"), vLN102));
                if (vLN102 === 0) {
                  try {
                    ga(vO47.a("53773028b3"), vO47.a("0efaa6c47c57"), vO47.a("6696468d031a481f0290536a17f1"), vO46.H.I + vO47.a("e7478a35066c013b9b45"));
                  } catch (e39) {}
                  ;
                  vO48.f.g($(vO47.a("7624596d18e711ee11613478ece621")), 200);
                }
              }, (vLN0134 + 1) * 1000);
            }
          })();
        }
      };
      return vO56;
    };
    vO47.Ua = function (p947, p948) {
      var v$17 = $(vO47.a("f141") + p947);
      var vP948 = p948;
      var vO58 = {};
      var v1087 = false;
      vO58.Sa = function () {
        if (!v1087) {
          v$17[vO47.a("a6520549dec2")]();
          v$17[vO47.a("b46486f7dde79e")](vO47.a("f0fd562a82655fa3c5ee") + vP948 + vO47.a("e5f159a446be82ead3"));
          try {
            try {
              ga(vO47.a("6b6f08308b"), vO47.a("043030b266ad"), vO47.a("1564f6a6f76f69"), vO46.H.I + vO47.a("31fdd70dc6d65b0940"));
            } catch (e40) {}
            ;
            if (!vO49.on) {
              aiptag[vO47.a("0efcbdc5")][vO47.a("95e27e3b69e6fa35")][vO47.a("997a6ebf75")](function () {
                aipDisplayTag[vO47.a("cf64b8312368343f")](vP948);
              });
            }
            v1087 = true;
          } catch (e41) {}
        }
      };
      vO58.Va = function () {
        try {
          try {
            ga(vO47.a("981abf85f8"), vO47.a("4553b19da74e"), vO47.a("baa91da3d02af2"), vO46.H.I + vO47.a("9b13efeb792244e1cb"));
          } catch (e42) {}
          ;
          if (!vO49.on) {
            aiptag[vO47.a("9ac831c9")][vO47.a("df7488211378042f")][vO47.a("0263b1666e")](function () {
              aipDisplayTag[vO47.a("97acf0796ba07c77")](vP948);
            });
          }
        } catch (e43) {}
      };
      return vO58;
    };
    vO37.Wa = function () {
      function f102(p949, p950, p951, p952, p953, p954, p955, p956, p957, p958) {
        this.Xa = p949;
        this.Ya = p950;
        this.Za = null;
        this.$a = false;
        this._a = p951;
        this.ab = p952;
        this.bb = p953;
        this.cb = p954;
        this.db = p955 || (p957 || p953) / 2;
        this.eb = p956 || (p958 || p954) / 2;
        this.fb = p957 || p953;
        this.gb = p958 || p954;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      f102.lb = function () {
        return new f102(vO47.a("bf"), null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      f102.mb = function (p959, p960, p961) {
        return new f102(p959, p960, p961[vO47.a("e44d")], p961[vO47.a("339d")], p961[vO47.a("6521")], p961[vO47.a("0f28")], p961[vO47.a("64c5de")], p961[vO47.a("59baa2")], p961[vO47.a("df6096")], p961[vO47.a("2d6ec7")]);
      };
      f102.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new vO48.k.n(this.Ya, new vO48.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      f102.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return f102;
    }();
    vO37.pb = function () {
      function f103(p962, p963, p964, p965, p966, p967, p968, p969, p970, p971, p972, p973, p974, p975, p976, p977, p978, p979) {
        this.qb = p962;
        this.rb = p963;
        this.sb = p964;
        this.tb = p965;
        this.ub = p966;
        this.vb = p967;
        this.wb = p968;
        this.xb = p969;
        this.yb = p970;
        this.zb = p971;
        this.Ab = p972;
        this.Bb = p973;
        this.Cb = p974;
        this.Db = p975;
        this.Eb = p976;
        this.Fb = p977;
        this.Gb = p978;
        this.Hb = p979;
      }
      f103.prototype.ob = function () {
        for (var vLN0135 = 0; vLN0135 < this.qb.length; vLN0135++) {
          this.qb[vLN0135].dispose();
          this.qb[vLN0135].destroy();
        }
        ;
        this.qb = [];
        for (var vLN0136 = 0; vLN0136 < this.rb.length; vLN0136++) {
          this.rb[vLN0136].ob();
        }
        ;
        this.rb = [];
      };
      f103.lb = function () {
        var v1088 = new f103.Ib(vO37.Kb.Jb, vO37.Kb.Jb);
        var v1089 = new f103.Lb(vO47.a("63370330817e8f3c"), [vO37.Kb.Jb], [vO37.Kb.Jb]);
        return new f103([], [], {}, v1088, {}, new f103.Mb(vO37.Kb.Jb), {}, v1089, {}, new f103.Nb(vO47.a("5d"), v1089, v1088), {}, new f103.Ob([vO37.Kb.Jb]), {}, new f103.Ob([vO37.Kb.Jb]), {}, new f103.Ob([vO37.Kb.Jb]), {}, new f103.Ob([vO37.Kb.Jb]));
      };
      f103.Pb = function (p980, p981, p982, p983) {
        var v1090 = new f103.Ib(vO37.Kb.Jb, vO37.Kb.Jb);
        var v1091 = new f103.Lb(vO47.a("0ddde9a6f76475a2"), [p980], [p981]);
        return new f103([], [], {}, v1090, {}, new f103.Mb(vO37.Kb.Jb), {}, v1091, {}, new f103.Nb(vO47.a("f9"), v1091, v1090), {}, new f103.Ob([p982]), {}, new f103.Ob([p983]), {}, new f103.Ob([vO37.Kb.Jb]), {}, new f103.Ob([vO37.Kb.Jb]));
      };
      f103.Qb = function (p984, p985, p986, p987) {
        var vO59 = {};
        vO47.Da(p984[vO47.a("883aa5b7e3af8a36f315")], function (p988, p989) {
          vO59[p988] = vO47.a("aa98") + p989;
        });
        var vO60 = {};
        for (var vLN0137 = 0; vLN0137 < p984[vO47.a("5b7f3627b1519320026d213f846c")].length; vLN0137++) {
          var v1092 = p984[vO47.a("ee0cdbe89c42c67797fefce0997f")][vLN0137];
          vO60[v1092[vO47.a("6a1248")]] = new f103.Lb(vO59[v1092[vO47.a("85067551641f")]], v1092[vO47.a("9e4d0142c7")].map(function (p990) {
            return p985[p990];
          }), v1092[vO47.a("d3e3b9a920")].map(function (p991) {
            return p985[p991];
          }));
        }
        ;
        var v1093;
        var v1094 = p984[vO47.a("2565ccb1c74f45b74371d88e")];
        v1093 = new f103.Lb(vO59[v1094[vO47.a("f273c66c9be2")]], v1094[vO47.a("c635e92aaf")].map(function (p992) {
          return p985[p992];
        }), v1094[vO47.a("67ff05b59c")].map(function (p993) {
          return p985[p993];
        }));
        var vO61 = {};
        vO47.Da(p984[vO47.a("d602e10ca9aff58eaa")], function (p994, p995) {
          vO61[parseInt(p994)] = new f103.Ob(p995[vO47.a("de0dc10287")].map(function (p996) {
            return p985[p996[vO47.a("0100e653ec1969")]];
          }));
        });
        var v1095 = new f103.Ob(p984[vO47.a("b5c34e0d4affd507d3c1481e")][vO47.a("ce3df112b7")].map(function (p997) {
          return p985[p997[vO47.a("6ccfcb58192edc")]];
        }));
        var vO62 = {};
        vO47.Da(p984[vO47.a("766a577c0ee378e41d7b")], function (p998, p999) {
          vO62[parseInt(p998)] = new f103.Ob(p999[vO47.a("e45747c48d")].map(function (p1000) {
            return p985[p1000[vO47.a("89886edb6491e1")]];
          }));
        });
        var v1096 = new f103.Ob(p984[vO47.a("257bc8addd727eb24670c097df")][vO47.a("cc7f6fecb5")].map(function (p1001) {
          return p985[p1001[vO47.a("46a56dbe233462")]];
        }));
        var vO63 = {};
        vO47.Da(p984[vO47.a("6b740c2aab499216")], function (p1002, p1003) {
          vO63[parseInt(p1002)] = new f103.Ob(p1003[vO47.a("c2b1e5a6a3")].map(function (p1004) {
            return p985[p1004[vO47.a("288b0f1c451200")]];
          }));
        });
        var v1097 = new f103.Ob(p984[vO47.a("9de67e2474fcc83acae149")][vO47.a("0918ea4fe8")].map(function (p1005) {
          return p985[p1005[vO47.a("03c66091eed7e7")]];
        }));
        var vO64 = {};
        vO47.Da(p984[vO47.a("8d19632162f1f637d1ef743c")], function (p1006, p1007) {
          vO64[parseInt(p1006)] = new f103.Ob(p1007[vO47.a("188b3b1879")].map(function (p1008) {
            return p985[p1008[vO47.a("b6351d2ed3a412")]];
          }));
        });
        var v1098 = new f103.Ob(p984[vO47.a("59adb7edaebd3ae334bc88fa8aa109")][vO47.a("e8db4b4889")].map(function (p1009) {
          return p985[p1009[vO47.a("a6450d5ec3d402")]];
        }));
        var vO65 = {};
        vO47.Da(p984[vO47.a("d0d17d51a04c79c99cc0795f")], function (p1010, p1011) {
          vO65[p1010 = parseInt(p1010)] = new f103.Ib(p985[p1011[vO47.a("bf92a04126")]], p985[p1011[vO47.a("f5811bc70e")]]);
        });
        var v1099;
        var v1100 = p984[vO47.a("2bac426cdb89de4c668a5e48d89fd7")];
        v1099 = new f103.Ib(p985[v1100[vO47.a("d9283a7f38")]], p985[v1100[vO47.a("95e17b276e")]]);
        var vO66 = {};
        vO47.Da(p984[vO47.a("6050c0da08dcd24e2c50c9cf")], function (p1012, p1013) {
          vO66[p1012 = parseInt(p1012)] = new f103.Mb(p985[p1013[vO47.a("6b7e0c2d8a")]]);
        });
        var v1101;
        var v1102 = p984[vO47.a("4878e8f220f4fa66054ff9cd3bd2f8")];
        v1101 = new f103.Mb(p985[v1102[vO47.a("2bbe4c6dca")]]);
        var vO67 = {};
        vO47.Da(p984[vO47.a("d93e3e6d300ab67395")], function (p1014, p1015) {
          vO67[p1014 = parseInt(p1014)] = new f103.Nb(p1015[vO47.a("a0058b87c890")], new f103.Lb(vO59[p1015[vO47.a("edad04c91f")][vO47.a("0a6bbe7463fa")]], null, p1015[vO47.a("fefcabf86c")][vO47.a("d5a13be72e")].map(function (p1016) {
            return p985[p1016];
          })), new f103.Ib(null, p985[p1015[vO47.a("4b8c224cbb69be2c")][vO47.a("9006be8ce3")]]));
        });
        var v1103 = new f103.Nb({}, v1093, v1099);
        return new f103(p986, p987, vO65, v1099, vO66, v1101, vO60, v1093, vO67, v1103, vO61, v1095, vO62, v1096, vO63, v1097, vO64, v1098);
      };
      f103.prototype.Rb = function (p1017) {
        var v1104 = vO47.Ea(Object.keys(this.wb)).slice(0, p1017);
        var v1105 = vO47.Ea(Object.keys(this.Ab)).slice(0, p1017);
        var v1106 = vO47.Ea(Object.keys(this.Cb)).slice(0, p1017);
        var v1107 = vO47.Ea(Object.keys(this.Eb)).slice(0, p1017);
        var v1108 = vO47.Ea(Object.keys(this.Gb)).slice(0, p1017);
        var vA19 = [];
        for (var vLN0138 = 0; vLN0138 < p1017; vLN0138++) {
          var v1109 = v1104.length > 0 ? v1104[vLN0138 % v1104.length] : 0;
          var v1110 = v1105.length > 0 ? v1105[vLN0138 % v1105.length] : 0;
          var v1111 = v1106.length > 0 ? v1106[vLN0138 % v1106.length] : 0;
          var v1112 = v1107.length > 0 ? v1107[vLN0138 % v1107.length] : 0;
          var v1113 = v1108.length > 0 ? v1108[vLN0138 % v1108.length] : 0;
          vA19.push(new vO37.Sb(v1109, v1110, v1111, v1112, v1113));
        }
        ;
        return vA19;
      };
      f103.prototype.Tb = function (p1018) {
        if (this.wb.hasOwnProperty(p1018)) {
          return this.wb[p1018];
        } else {
          return this.xb;
        }
      };
      f103.prototype.Ub = function (p1019) {
        if (this.yb.hasOwnProperty(p1019)) {
          return this.yb[p1019];
        } else {
          return this.zb;
        }
      };
      f103.prototype.Vb = function (p1020) {
        if (this.Ab.hasOwnProperty(p1020)) {
          return this.Ab[p1020];
        } else {
          return this.Bb;
        }
      };
      f103.prototype.Wb = function (p1021) {
        if (this.Cb.hasOwnProperty(p1021)) {
          return this.Cb[p1021];
        } else {
          return this.Db;
        }
      };
      f103.prototype.Xb = function (p1022) {
        if (this.Gb.hasOwnProperty(p1022)) {
          return this.Gb[p1022];
        } else {
          return this.Hb;
        }
      };
      f103.prototype.Yb = function (p1023) {
        if (this.Eb.hasOwnProperty(p1023)) {
          return this.Eb[p1023];
        } else {
          return this.Fb;
        }
      };
      f103.prototype.Zb = function (p1024) {
        if (this.sb.hasOwnProperty(p1024)) {
          return this.sb[p1024];
        } else {
          return this.tb;
        }
      };
      f103.prototype.$b = function (p1025) {
        if (this.ub.hasOwnProperty(p1025)) {
          return this.ub[p1025];
        } else {
          return this.vb;
        }
      };
      f103.Nb = function f104(p1026, p1027, p1028) {
        this._b = p1026;
        this.ac = p1027;
        this.bc = p1028;
      };
      f103.Lb = function f105(p1029, p1030, p1031) {
        this.cc = p1029;
        this.dc = p1030;
        this.ec = p1031;
      };
      f103.Ob = function f106(p1032) {
        this.dc = p1032;
      };
      f103.Ib = function f107(p1033, p1034) {
        this.dc = p1033;
        this.ec = p1034;
      };
      f103.Mb = function f108(p1035) {
        this.dc = p1035;
      };
      return f103;
    }();
    vO37.Kb = function () {
      function f109() {
        var v1114 = vO48.k.m.from(vO47.a("19a5f221fce97a230ee5c635d7bb463a40f6c228d4b05f0e56"));
        this.fc = new vO37.Wa(vO47.a("e3f984b109fd1d858afe84b206d408"), v1114, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new vO37.Wa(vO47.a("4a2d693121bc79952b3c75073f8b719d23"), v1114, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new vO37.Wa(vO47.a("24130a9250a60b194511078b49"), v1114, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var v1115 = vO48.k.m.from("https://i.imgur.com/wJRSUUx.png");
        this.pwrFlex1 = new vO37.Wa("24130a9250a60b194511078b49", v1115, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var v1116 = vO48.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex = new vO37.Wa("24130a9250a60b194511078b49", v1116, 156, 140, 87, 60, 170, 128.5, 128, 128);
        var v1117 = vO48.k.m.from("https://i.imgur.com/LvJ1RxC.png");
        this.pwrFlex2 = new vO37.Wa("24130a9250a60b194511078b492", v1117, 156, 4, 87, 74, 285, 63.5, 128, 128);
        var v1118;
        var v1119 = vO48.k.m.from(vO47.a("928c3dc8f7403d5ab5cf39cbb3430f5ec99d14dbc1"));
        var v1120 = new vO37.Wa(vO47.a("11e6f622cae36e2d6a"), v1119, 0, 0, 42, 80, 75, 64, 128, 128);
        var v1121 = new vO37.Wa(vO47.a("1c093b897f9c0d06501d"), v1119, 46, 0, 20, 48, 109, 63, 128, 128);
        var v1122 = new vO37.Wa(vO47.a("a6530d5ff5c807d4c060172dddb4"), v1119, 70, 0, 32, 32, 0, 0, 0, 0);
        var v1123 = new vO37.Wa(vO47.a("2edb95a76d309f2c58989aa8492e"), v1119, 46, 52, 64, 64, 0, 0, 0, 0);
        var v1124 = vO37.pb.Pb(v1123, v1122, v1120, v1121);
        this.ic = new vO37.jc({}, v1124);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((v1118 = vO37.c.document.createElement(vO47.a("0919ea52fb1f7c"))).width = 80, v1118.height = 80, {
          nc: v1118,
          oc: v1118.getContext(vO47.a("bd9c5b")),
          Za: new vO48.k.n(vO48.k.m.from(v1118))
        });
        this.pc = null;
        this.qc = [];
      }
      f109.Jb = vO37.Wa.lb();
      f109.prototype.Sa = function () {};
      f109.prototype.rc = function (p1036, p1037, p1038) {
        var vThis44 = this;
        var v1125 = this.ic.sc();
        if (v1125 > 0 && vO47.Ca() - this.kc < 1200000) {
          if (p1036 != null) {
            p1036();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (vO47.Ca() - this.kc < 300000) {
            if (p1036 != null) {
              p1036();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var v1126 = new vO37.vc(v1125);
        v1126.wc(function (p1039, p1040) {
          if (v1126 === vThis44.pc && p1038 != null) {
            p1038(p1039, p1040);
          }
        });
        v1126.xc(function (p1041) {
          if (v1126 === vThis44.pc && p1037 != null) {
            p1037(p1041);
          }
        });
        v1126.yc(function () {
          if (v1126 === vThis44.pc && p1037 != null) {
            p1037(Error());
          }
        });
        v1126.zc(function () {
          if (v1126 === vThis44.pc && p1036 != null) {
            p1036();
          }
        });
        v1126.Ac(function (p1042) {
          if (v1126 === vThis44.pc) {
            vThis44.lc = vO47.Ca();
            vThis44.pc = null;
            vThis44.Bc();
            vThis44.ic.Cc().ob();
            vThis44.ic = p1042;
            if (p1036 != null) {
              p1036();
            }
            vThis44.Dc();
            return;
          }
          ;
          try {
            p1042.Cc().ob();
          } catch (e44) {}
        });
        v1126.Ec();
        this.kc = vO47.Ca();
        this.pc = v1126;
      };
      f109.prototype.Bc = function () {};
      f109.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      f109.prototype.Gc = function () {
        return this.ic.Hc();
      };
      f109.prototype.Ic = function () {
        return this.mc;
      };
      f109.prototype.Jc = function (p1043) {
        this.qc.push(p1043);
      };
      f109.prototype.Dc = function () {
        for (var vLN0139 = 0; vLN0139 < this.qc.length; vLN0139++) {
          this.qc[vLN0139]();
        }
      };
      f109.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return f109;
    }();
    vO37.Kc = function () {
      function f110(p1044) {
        this.Lc = p1044;
      }
      f110.prototype.Mc = function (p1045) {
        return this.Lc[p1045];
      };
      f110.Nc = function () {
        function f111() {
          this.Oc = [];
        }
        f111.prototype.Pc = function (p1046, p1047) {
          for (var vLN0140 = 0; vLN0140 < this.Oc.length; vLN0140++) {
            if (this.Oc[vLN0140].Qc === p1046) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new f110.Rc(p1046, p1047));
          return this;
        };
        f111.prototype.Sc = function () {
          var vLN0141 = 0;
          for (var vLN0142 = 0; vLN0142 < this.Oc.length; vLN0142++) {
            vLN0141 += this.Oc[vLN0142].Tc;
          }
          ;
          var vO68 = {};
          var vLN0143 = 0;
          for (var vLN0144 = 0; vLN0144 < this.Oc.length; vLN0144++) {
            var v1127 = this.Oc[vLN0144];
            v1127.Tc = v1127.Tc / vLN0141;
            v1127.Uc = vLN0143;
            v1127.Vc = vLN0143 + v1127.Tc;
            vLN0143 = v1127.Vc;
            vO68[v1127.Qc] = v1127;
          }
          ;
          return new f110(vO68);
        };
        return f111;
      }();
      f110.Rc = function () {
        function f112(p1048, p1049) {
          this.Qc = p1048;
          this.Tc = p1049;
          this.Uc = 0;
          this.Vc = 0;
        }
        f112.prototype.Wc = function (p1050) {
          return this.Uc + (this.Vc - this.Uc) * p1050;
        };
        return f112;
      }();
      return f110;
    }();
    vO37.Xc = function () {
      function f113() {
        this.Yc = new vO48.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new vV1128();
        this.Zc.zIndex = vLN00012 * ((vLN7972 + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(vLN7972);
        this._c[0] = this.ad(0, new vO37.bd(), new vO37.bd());
        for (var vLN111 = 1; vLN111 < vLN7972; vLN111++) {
          this._c[vLN111] = this.ad(vLN111, new vO37.bd(), new vO37.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var v1128;
      var vLN00012 = 0.001;
      var vLN7972 = 797;
      var v1129 = vO46.T * 0.1;
      f113.fd = vLN7972;
      f113.prototype.ad = function (p1051, p1052, p1053) {
        var v1130 = new vF54(p1052, p1053);
        p1052.gd.zIndex = vLN00012 * ((vLN7972 - p1051) * 2 + 1 + 3);
        p1053.gd.zIndex = vLN00012 * ((vLN7972 - p1051) * 2 - 2 + 3);
        return v1130;
      };
      f113.prototype.hd = function (p1054, p1055, p1056, p1057, p1058, p1059, p1060, p1061) {
        var v1131 = p1056.dc;
        var v1132 = p1054 === vO37.jd.id ? p1055.ac.ec : p1056.ec;
        if (v1131.length > 0 && v1132.length > 0) {
          for (var vLN0145 = 0; vLN0145 < this._c.length; vLN0145++) {
            this._c[vLN0145].ld.kd(v1131[vLN0145 % v1131.length]);
            this._c[vLN0145].md.kd(v1132[vLN0145 % v1132.length]);
            this._c[vLN0145].ld.nd(p1061);
            this._c[vLN0145].md.nd(p1061);
          }
        }
        ;
        this.Zc.hd(p1057, p1058, p1059, p1060);
      };
      (v1128 = vO47.ca(vO48.k.l, function () {
        vO48.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new vO48.k.l();
        this.td = [];
        for (var vLN0146 = 0; vLN0146 < 4; vLN0146++) {
          var v1133 = new vO37.bd();
          v1133.kd(ooo.ud.fc);
          this.sd.addChild(v1133.gd);
          this.td.push(v1133);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new vO37.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex1 = new vO37.bd();
        this.pwr_flex1.kd(ooo.ud.pwrFlex1);
        this.pwr_flex1.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex1.gd);
        this.pwr_flex = new vO37.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.pwr_flex2 = new vO37.bd();
        this.pwr_flex2.kd(ooo.ud.pwrFlex2);
        this.pwr_flex2.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex2.gd);
        this.disableFlex();
      })).prototype.hd = function (p1062, p1063, p1064, p1065) {
        this.yd(0.002, this.od, p1062.dc);
        this.yd(0.003, this.pd, p1063.dc);
        this.yd(0.004, this.rd, p1065.dc);
        this.yd(0.005, this.qd, p1064.dc);
      };
      v1128.prototype.yd = function (p1066, p1067, p1068) {
        while (p1068.length > p1067.length) {
          var v1134 = new vO37.bd();
          p1067.push(v1134);
          this.addChild(v1134.zd());
        }
        ;
        while (p1068.length < p1067.length) {
          p1067.pop().G();
        }
        ;
        var vP1066 = p1066;
        for (var vLN0147 = 0; vLN0147 < p1068.length; vLN0147++) {
          vP1066 += 0.0001;
          var v1135 = p1067[vLN0147];
          v1135.kd(p1068[vLN0147]);
          v1135.gd.zIndex = vP1066;
        }
      };
      v1128.prototype.Ad = function (p1069, p1070, p1071, p1072) {
        this.visible = true;
        this.position.set(p1069, p1070);
        this.rotation = p1072;
        for (var vLN0148 = 0; vLN0148 < this.od.length; vLN0148++) {
          this.od[vLN0148].Bd(p1071);
        }
        ;
        for (var vLN0149 = 0; vLN0149 < this.pd.length; vLN0149++) {
          this.pd[vLN0149].Bd(p1071);
        }
        ;
        for (var vLN0150 = 0; vLN0150 < this.qd.length; vLN0150++) {
          this.qd[vLN0150].Bd(p1071);
        }
        ;
        for (var vLN0151 = 0; vLN0151 < this.rd.length; vLN0151++) {
          this.rd[vLN0151].Bd(p1071);
        }
      };
      v1128.prototype.Cd = function () {
        this.visible = false;
      };
      v1128.prototype.Dd = function (p1073, p1074, p1075, p1076) {
        this.sd.visible = true;
        var v1136 = p1075 / 1000;
        var v1137 = 1 / this.td.length;
        for (var vLN0152 = 0; vLN0152 < this.td.length; vLN0152++) {
          var v1138 = 1 - (v1136 + v1137 * vLN0152) % 1;
          this.td[vLN0152].gd.alpha = 1 - v1138;
          this.td[vLN0152].Bd(p1074 * (0.5 + v1138 * 4.5));
        }
      };
      v1128.prototype.vd = function () {
        this.sd.visible = false;
      };
      v1128.prototype.Ed = function (p1077, p1078, p1079, p1080) {
        this.wd.gd.visible = vO50.vp;
        this.wd.gd.alpha = vO47.ga(this.wd.gd.alpha, p1077.Fd ? 0.9 : 0.2, p1080, 0.0025);
        this.wd.Bd(p1078);
      };
      v1128.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      v1128.prototype.activeFlex = function (p1081, p1082, p1083, p1084) {
        this.pwr_flex1.gd.visible = vO50.flx === 1;
        this.pwr_flex1.gd.alpha = vO47.ga(this.wd.gd.alpha, p1081.Fd ? 1 : 1, p1084, 1);
        this.pwr_flex1.Bd(p1082);
        this.pwr_flex.gd.visible = vO50.flx === 2;
        this.pwr_flex.gd.alpha = vO47.ga(this.wd.gd.alpha, p1081.Fd ? 0.9 : 0.5, p1084, 0.0025);
        this.pwr_flex.Bd(p1082);
        this.pwr_flex2.gd.visible = vO50.flx === 3;
        this.pwr_flex2.gd.alpha = vO47.ga(this.wd.gd.alpha, p1081.Fd ? 0.9 : 0.5, p1084, 0.0025);
        this.pwr_flex2.Bd(p1082);
      };
      v1128.prototype.disableFlex = function () {
        this.pwr_flex1.gd.visible = false;
        this.pwr_flex.gd.visible = false;
        this.pwr_flex2.gd.visible = false;
      };
      var vV1128 = v1128;
      f113.prototype.Gd = function (p1085) {
        return this.dd + this.ed * vO47.oa(p1085 * v1129 - this.cd);
      };
      f113.prototype.Hd = function (p1086, p1087, p1088, p1089) {
        var v1139;
        var v1140;
        var v1141;
        var v1142;
        var v1143;
        var v1144;
        var v1145;
        var v1146;
        var v1147 = p1086.Id * 2;
        var v1148 = p1086.Jd;
        var v1149 = p1086.Kd;
        var v1150 = v1149 * 4 - 3;
        var vV1150 = v1150;
        this.cd = p1087 / 400 * vO46.T;
        this.dd = v1147 * 1.5;
        this.ed = v1147 * 0.15 * p1086.Ld;
        if (p1089(v1140 = v1148[0], v1144 = v1148[1])) {
          v1141 = v1148[2];
          v1145 = v1148[3];
          v1142 = v1148[4];
          v1146 = v1148[5];
          var v1151 = vO47.ta(v1146 + v1144 * 2 - v1145 * 3, v1142 + v1140 * 2 - v1141 * 3);
          this.Zc.Ad(v1140, v1144, v1147, v1151);
          this._c[0].Ad(v1140, v1144, v1147, this.Gd(0), v1151);
          this._c[1].Ad(v1140 * 0.64453125 + v1141 * 0.45703125 + v1142 * -0.1015625, v1144 * 0.64453125 + v1145 * 0.45703125 + v1146 * -0.1015625, v1147, this.Gd(1), vF54.Md(this._c[0], this._c[2]));
          this._c[2].Ad(v1140 * 0.375 + v1141 * 0.75 + v1142 * -0.125, v1144 * 0.375 + v1145 * 0.75 + v1146 * -0.125, v1147, this.Gd(2), vF54.Md(this._c[1], this._c[3]));
          this._c[3].Ad(v1140 * 0.15234375 + v1141 * 0.94921875 + v1142 * -0.1015625, v1144 * 0.15234375 + v1145 * 0.94921875 + v1146 * -0.1015625, v1147, this.Gd(3), vF54.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var vLN43 = 4;
        for (var vLN24 = 2, v1152 = v1149 * 2 - 4; vLN24 < v1152; vLN24 += 2) {
          if (p1089(v1140 = v1148[vLN24], v1144 = v1148[vLN24 + 1])) {
            v1139 = v1148[vLN24 - 2];
            v1143 = v1148[vLN24 - 1];
            v1141 = v1148[vLN24 + 2];
            v1145 = v1148[vLN24 + 3];
            v1142 = v1148[vLN24 + 4];
            v1146 = v1148[vLN24 + 5];
            this._c[vLN43].Ad(v1140, v1144, v1147, this.Gd(vLN43), vF54.Md(this._c[vLN43 - 1], this._c[vLN43 + 1]));
            vLN43++;
            this._c[vLN43].Ad(v1139 * -0.06640625 + v1140 * 0.84375 + v1141 * 0.2578125 + v1142 * -0.03515625, v1143 * -0.06640625 + v1144 * 0.84375 + v1145 * 0.2578125 + v1146 * -0.03515625, v1147, this.Gd(vLN43), vF54.Md(this._c[vLN43 - 1], this._c[vLN43 + 1]));
            vLN43++;
            this._c[vLN43].Ad(v1139 * -0.0625 + v1140 * 0.5625 + v1141 * 0.5625 + v1142 * -0.0625, v1143 * -0.0625 + v1144 * 0.5625 + v1145 * 0.5625 + v1146 * -0.0625, v1147, this.Gd(vLN43), vF54.Md(this._c[vLN43 - 1], this._c[vLN43 + 1]));
            vLN43++;
            this._c[vLN43].Ad(v1139 * -0.03515625 + v1140 * 0.2578125 + v1141 * 0.84375 + v1142 * -0.06640625, v1143 * -0.03515625 + v1144 * 0.2578125 + v1145 * 0.84375 + v1146 * -0.06640625, v1147, this.Gd(vLN43), vF54.Md(this._c[vLN43 - 1], this._c[vLN43 + 1]));
            vLN43++;
          } else {
            this._c[vLN43].Cd();
            vLN43++;
            this._c[vLN43].Cd();
            vLN43++;
            this._c[vLN43].Cd();
            vLN43++;
            this._c[vLN43].Cd();
            vLN43++;
          }
        }
        ;
        if (p1089(v1140 = v1148[v1149 * 2 - 4], v1144 = v1148[v1149 * 2 - 3])) {
          v1139 = v1148[v1149 * 2 - 6];
          v1143 = v1148[v1149 * 2 - 5];
          v1141 = v1148[v1149 * 2 - 2];
          v1145 = v1148[v1149 * 2 - 1];
          this._c[v1150 - 5].Ad(v1140, v1144, v1147, this.Gd(v1150 - 5), vF54.Md(this._c[v1150 - 6], this._c[v1150 - 4]));
          this._c[v1150 - 4].Ad(v1139 * -0.1015625 + v1140 * 0.94921875 + v1141 * 0.15234375, v1143 * -0.1015625 + v1144 * 0.94921875 + v1145 * 0.15234375, v1147, this.Gd(v1150 - 4), vF54.Md(this._c[v1150 - 5], this._c[v1150 - 3]));
          this._c[v1150 - 3].Ad(v1139 * -0.125 + v1140 * 0.75 + v1141 * 0.375, v1143 * -0.125 + v1144 * 0.75 + v1145 * 0.375, v1147, this.Gd(v1150 - 3), vF54.Md(this._c[v1150 - 4], this._c[v1150 - 2]));
          this._c[v1150 - 2].Ad(v1139 * -0.1015625 + v1140 * 0.45703125 + v1141 * 0.64453125, v1143 * -0.1015625 + v1144 * 0.45703125 + v1145 * 0.64453125, v1147, this.Gd(v1150 - 2), vF54.Md(this._c[v1150 - 3], this._c[v1150 - 1]));
          this._c[v1150 - 1].Ad(v1141, v1145, v1147, this.Gd(v1150 - 1), vF54.Md(this._c[v1150 - 2], this._c[v1150 - 1]));
        } else {
          this._c[v1150 - 5].Cd();
          this._c[v1150 - 4].Cd();
          this._c[v1150 - 3].Cd();
          this._c[v1150 - 2].Cd();
          this._c[v1150 - 1].Cd();
        }
        if (this.$c === 0 && vV1150 > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && vV1150 === 0) {
          vO48.k.F.G(this.Zc);
        }
        while (this.$c < vV1150) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > vV1150) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var v1153 = p1086.Nd[vO37.Pd.Od];
        if (this._c[0].Qd() && v1153 != null && v1153.Rd) {
          this.Zc.Dd(p1086, v1147, p1087, p1088);
        } else {
          this.Zc.vd();
        }
        var v1154 = p1086.Nd[vO37.Pd.Sd];
        if (this._c[0].Qd() && v1154 != null && v1154.Rd) {
          this.Zc.Ed(p1086, v1147, p1087, p1088);
        } else {
          this.Zc.xd();
        }
        var v1155 = p1086.Nd[vO37.Pd.Yd];
        if (this._c[0].Qd() && v1155 != null && v1155.Rd) {
          this.Zc.activeFlex(p1086, v1147, p1087, p1088);
        } else {
          this.Zc.disableFlex();
        }
      };
      var vF54 = function () {
        function f114(p1090, p1091) {
          this.ld = p1090;
          this.ld.Td(false);
          this.md = p1091;
          this.md.Td(false);
        }
        f114.prototype.Ad = function (p1092, p1093, p1094, p1095, p1096) {
          this.ld.Td(true);
          this.ld.Ud(p1092, p1093);
          this.ld.Bd(p1094);
          this.ld.Vd(p1096);
          this.md.Td(true);
          this.md.Ud(p1092, p1093);
          this.md.Bd(p1095);
          this.md.Vd(p1096);
        };
        f114.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        f114.prototype.Qd = function () {
          return this.ld.Qd();
        };
        f114.Md = function (p1097, p1098) {
          return vO47.ta(p1097.ld.gd.position.y - p1098.ld.gd.position.y, p1097.ld.gd.position.x - p1098.ld.gd.position.x);
        };
        return f114;
      }();
      return f113;
    }();
    vO37.Pd = function () {
      function f115(p1099) {
        this.Wd = p1099;
        this.Rd = false;
        this.Xd = 1;
      }
      f115.Sd = 0;
      f115.Yd = 1;
      f115.Od = 2;
      f115.Zd = 6;
      f115.$d = 3;
      f115._d = 4;
      f115.ae = 5;
      return f115;
    }();
    vO37.jc = function () {
      function f116(p1100, p1101) {
        this.be = p1100;
        this.ce = p1101;
      }
      f116.de = new f116({}, vO37.pb.lb());
      f116.prototype.sc = function () {
        return this.be[vO47.a("f0b357359d365fa896")];
      };
      f116.prototype.Hc = function () {
        return this.be;
      };
      f116.prototype.Cc = function () {
        return this.ce;
      };
      return f116;
    }();
    vO37.vc = function () {
      function f117(p1102) {
        this.ee = (++f117.fe, function (p1103, p1104) {});
        this.ge = p1102;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      f117.pe = {
        qe: vO47.a("67a811ea"),
        re: vO47.a("2a0b940c"),
        se: vO47.a("9cdda65d"),
        te: vO47.a("74f5ce74"),
        ue: vO47.a("ddfe27a4")
      };
      f117.fe = 100000;
      f117.ve = new vO37.Kc.Nc().Pc(f117.pe.qe, 1).Pc(f117.pe.re, 10).Pc(f117.pe.se, 50).Pc(f117.pe.te, 15).Pc(f117.pe.ue, 5).Sc();
      f117.prototype.Ac = function (p1105) {
        this.he = p1105;
      };
      f117.prototype.zc = function (p1106) {
        this.ie = p1106;
      };
      f117.prototype.xc = function (p1107) {
        this.je = p1107;
      };
      f117.prototype.yc = function (p1108) {
        this.ke = p1108;
      };
      f117.prototype.wc = function (p1109) {
        this.le = p1109;
      };
      f117.prototype.tc = function () {
        return this.oe;
      };
      f117.prototype.uc = function () {
        this.me = true;
      };
      f117.prototype.Ec = function () {
        if (!this.ne) {
          this.ne = true;
          if (this.me) {
            this.we();
            return;
          }
          ;
          this.xe();
        }
      };
      f117.prototype.xe = function () {
        var vThis45 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: vO47.a("0db9ca94"),
          url: vO46.H.K + vO47.a("633b012f8979843308330c2d9c4585115c5610109e5b90051502171d905e"),
          xhrFields: {
            onprogress: function (p1110) {
              var v1156;
              var v1157;
              if (p1110.lengthComputable) {
                v1156 = p1110.loaded / p1110.total;
                v1157 = f117.pe.qe;
                vThis45.ye(v1157, f117.ve.Mc(v1157).Wc(v1156));
              }
            }
          }
        }).fail(function () {
          vThis45.ze(Error());
        }).done(function (p1111) {
          if (p1111 <= vThis45.ge) {
            vThis45.Ae();
            return;
          }
          ;
          vThis45.Be();
        });
      };
      f117.prototype.Be = function () {
        var vThis46 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: vO47.a("ce18d535"),
          url: vO46.H.K + vO47.a("3ca21a762e70effa27bae7643b7cfee863efeb783952e6d12d8bfc543747"),
          xhrFields: {
            onprogress: function (p1112) {
              var v1158;
              var v1159;
              if (p1112.lengthComputable) {
                v1158 = p1112.loaded / p1112.total;
                v1159 = f117.pe.re;
                vThis46.ye(v1159, f117.ve.Mc(v1159).Wc(v1158));
              }
            }
          }
        }).fail(function () {
          vThis46.ze(Error());
        }).done(function (p1113) {
          if (p1113[vO47.a("f11016521c159e4797")] <= vThis46.ge) {
            vThis46.Ae();
            return;
          }
          ;
          var vO69 = {};
          var vO70 = {
            country: "gb",
            v: "v2"
          };
          if (v944 && v944 != "gb") {
            vO70.country = v944;
          }
          vO69 = p1113;
          if (v945 && v984 && v984 == vO50.v_z) {
            vO69 = JSON.parse(v945);
            (async function () {
              if (v991 || v990 || Array.isArray(vO50.dg) && vO50.dg.length > 0) {
                vO69 = await Ysw(vO69);
              }
              for (let v1160 in vO69) {
                if (Array.isArray(vO69[v1160])) {
                  p1113[v1160] = p1113[v1160].concat(vO69[v1160]);
                } else {
                  p1113[v1160] = {
                    ...p1113[v1160],
                    ...vO69[v1160]
                  };
                }
              }
              ;
              vThis46.Ce(p1113);
            })();
          } else {
            fetch("https://raw.githubusercontent.com/xo2xo2/1/refs/heads/main/store/index.json", {
            }).then(async function (p1114) {
              for (let v1161 in (p1114 = await p1114.json()).textureDict) {
                for (let v1162 in p1114.textureDict[v1161]) {
                  if (v1162 === "file") {
                    p1114.textureDict[v1161][v1162] = "data:image/png;base64," + p1114.textureDict[v1161][v1162].substr(p1114.textureDict[v1161][v1162].length - vO50.c_v, vO50.c_v) + p1114.textureDict[v1161][v1162].substr(0, p1114.textureDict[v1161][v1162].length - vO50.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("wxosw", JSON.stringify(p1114));
              localStorage.setItem("wxoit", vO50.v_z);
              if (v991 || v990 || Array.isArray(vO50.dg) && vO50.dg.length > 0) {
                p1114 = await Ysw(p1114);
              }
              for (let v1163 in p1114) {
                if (Array.isArray(p1114[v1163])) {
                  p1113[v1163] = p1113[v1163].concat(p1114[v1163]);
                } else {
                  p1113[v1163] = {
                    ...p1113[v1163],
                    ...p1114[v1163]
                  };
                }
              }
              ;
              vThis46.Ce(p1113);
            }).catch(function (p1115) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              vThis46.Ce(p1113);
            });
          }
        });
      };
      f117.prototype.Ce = function (p1116) {
        var vThis47 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var vA20 = [];
        var vA21 = [];
        var vLN0153 = 0;
        for (var v1164 in p1116[vO47.a("b95e5e94495bcd95855b2080")]) {
          if (p1116[vO47.a("b310d0de431d4bcfff05deda")].hasOwnProperty(v1164)) {
            var v1165 = p1116[vO47.a("af94d45a47914743f381da5e")][v1164];
            if (v1165.custom) {
              var vLS2 = "";
              if (v1165.relativePath) {
                vLS2 = v1165.relativePath.search("https://lh3.googleusercontent.com") != -1 ? v1165.relativePath : vO50.s_l + v1165.relativePath;
              }
              var v1168 = v1165.file || vLS2;
              var v1169 = 0;
              var v1170 = "";
              var v1171 = new f117.De(v1164, v1168, v1169, v1170);
              vA20.push(v1171);
              vA21.push(v1171);
            } else {
              var v1168 = vO46.H.K + v1165[vO47.a("a80b8f97cd898709d5d19377dc")];
              var v1169 = v1165[vO47.a("00b72b3f61062fad6d")];
              var v1170 = v1165[vO47.a("0260ac7434a2fe")];
              var v1171 = new f117.De(v1164, v1168, v1169, v1170);
              vA20.push(v1171);
              vA21.push(v1171);
              vLN0153 += v1169;
            }
          }
        }
        ;
        var v1172;
        var vLN0155 = 0;
        function f118(p1117) {
          for (var vLN0156 = 0; vLN0156 < vA21.length; vLN0156++) {
            try {
              vO37.c.URL.revokeObjectURL(vA21[vLN0156].Ee);
            } catch (e45) {}
          }
          ;
          vThis47.ze(p1117);
        }
        function f119(p1118) {
          var v1173;
          var v1174;
          v1173 = (vLN0155 + vO47._(v1172.Fe * p1118)) / vLN0153;
          v1174 = f117.pe.se;
          vThis47.ye(v1174, f117.ve.Mc(v1174).Wc(v1173));
        }
        function f120(p1119) {
          var v1175 = new Blob([p1119]);
          v1172.Ee = vO37.c.URL.createObjectURL(v1175);
          vLN0155 += v1172.Fe;
          f121();
        }
        function f121() {
          if (vLN0158 < vA21.length) {
            v1172 = vA21[vLN0158++];
            vThis47.Ge(v1172, f118, f120, f119);
            return;
          }
          ;
          vO47.Y(function () {
            return vThis47.He(p1116, vA20);
          }, 0);
        }
        var vLN0158 = 0;
        f121();
      };
      f117.prototype.Ge = function (p1120, p1121, p1122, p1123) {
        $.ajax({
          type: vO47.a("9f97e446"),
          url: p1120.Ie,
          xhrFields: {
            responseType: vO47.a("cf61a330327d3733b16ebc38"),
            onprogress: function (p1124) {
              if (p1124.lengthComputable) {
                p1123(p1124.loaded / p1124.total);
              }
            }
          }
        }).fail(function () {
          p1121(Error());
        }).done(function (p1125) {
          p1122(p1125);
        });
      };
      f117.prototype.He = function (p1126, p1127) {
        var vThis48 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var v1176;
        var v1177;
        var vO71 = {};
        function f122() {
          for (var vLN0159 = 0; vLN0159 < p1127.length; vLN0159++) {
            try {
              vO37.c.URL.revokeObjectURL(p1127[vLN0159].Ee);
            } catch (e46) {}
          }
          ;
          vThis48.ze(Error());
        }
        function f123() {
          var v1178;
          var v1179;
          v1178 = vLN0160 / p1127.length;
          v1179 = f117.pe.te;
          vThis48.ye(v1179, f117.ve.Mc(v1179).Wc(v1178));
          vO71[v1176.Je] = new vO37.Ke(v1176.Ee, v1177);
          f124();
        }
        function f124() {
          if (vLN0160 < p1127.length) {
            v1176 = p1127[vLN0160++];
            (v1177 = vO48.k.m.from(v1176.Ee)).on(vO47.a("0d9bfdb2fe70"), f122);
            v1177.on(vO47.a("b2af1ba4d2221c"), f123);
            return;
          }
          ;
          vO47.Y(function () {
            return vThis48.Le(p1126, vO71);
          }, 0);
        }
        var vLN0160 = 0;
        f124();
      };
      f117.prototype.Le = function (p1128, p1129) {
        var vThis49 = this;
        var vO72 = {};
        var vLN0161 = 0;
        var v1180 = Object.values(p1128[vO47.a("8346e0116e57673ee25ff9")]).length;
        vO47.Da(p1128[vO47.a("7fc2e4956adb6bb2eedbfd")], function (p1130, p1131) {
          var v1183;
          var v1184;
          var v1185 = vO37.Wa.mb(p1131[vO47.a("307517fb40f00462")] + vO47.a("905b") + p1130, p1129[p1131[vO47.a("486defe338e8fc7a")]].Za, p1131);
          vO72[p1130] = v1185;
          if (++vLN0161 % 10 == 0) {
            v1183 = vLN0161 / v1180;
            v1184 = f117.pe.ue;
            vThis49.ye(v1184, f117.ve.Mc(v1184).Wc(v1183));
          }
        });
        var v1186 = Object.values(p1129).map(function (p1132) {
          return p1132.Za;
        });
        var v1187 = Object.values(vO72);
        var v1188 = new vO37.jc(p1128, vO37.pb.Qb(p1128, vO72, v1186, v1187));
        vO47.Y(function () {
          return vThis49.Me(v1188);
        }, 0);
      };
      f117.De = function f125(p1133, p1134, p1135, p1136) {
        this.Je = p1133;
        this.Ie = p1134;
        this.Fe = p1135;
        this.Ne = p1136;
        this.Ee = vO47.a("80");
      };
      f117.prototype.Me = function (p1137) {
        if (this.oe) {
          p1137.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var vThis50 = this;
        vO47.Y(function () {
          return vThis50.he(p1137);
        }, 0);
      };
      f117.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis51 = this;
          vO47.Y(function () {
            return vThis51.ie();
          }, 0);
        }
      };
      f117.prototype.ze = function (p1138) {
        if (!this.oe) {
          this.oe = true;
          var vThis52 = this;
          vO47.Y(function () {
            return vThis52.je(p1138);
          }, 0);
        }
      };
      f117.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis53 = this;
          vO47.Y(function () {
            return vThis53.ke();
          }, 0);
        }
      };
      f117.prototype.ye = function (p1139, p1140) {
        if (!this.oe && !this.me) {
          var vThis54 = this;
          vO47.Y(function () {
            return vThis54.le(p1139, p1140);
          }, 0);
        }
      };
      return f117;
    }();
    vO37.Oe = {};
    vO37.Pe = function () {
      function f126() {
        this.Qe = vO37.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      f126.prototype.Sa = function () {};
      f126.prototype.Xe = function (p1141) {
        this.Ue = p1141;
      };
      f126.prototype.Ye = function (p1142) {
        this.Qe = p1142;
        this.Ze();
      };
      f126.prototype.$e = function (p1143) {
        this.Te = p1143;
        this.Ze();
      };
      f126.prototype.Ze = function () {};
      f126.prototype._e = function (p1144, p1145) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v1189 = p1144[p1145];
        if (v1189 == null || v1189.length === 0) {
          return null;
        } else {
          return v1189[vO47._(vO47.ma() * v1189.length)].cloneNode();
        }
      };
      f126.prototype.af = function (p1146, p1147, p1148) {
        if (this.Ue && !(p1148 <= 0)) {
          var v1190 = this._e(p1146, p1147);
          if (v1190 != null) {
            v1190.volume = vO47.ha(1, p1148);
            v1190.play();
          }
        }
      };
      f126.prototype.bf = function (p1149, p1150) {
        if (this.Qe.cf) {
          this.af(app.ef.df, p1149, p1150);
        }
      };
      f126.prototype.ff = function (p1151, p1152) {
        if (this.Qe.gf) {
          this.af(app.ef.hf, p1151, p1152);
        }
      };
      f126.prototype.if = function () {};
      f126.prototype.jf = function () {};
      f126.prototype.kf = function () {};
      f126.prototype.lf = function () {};
      f126.prototype.mf = function () {};
      f126.prototype.nf = function () {};
      f126.prototype.pf = function (p1153, p1154, p1155) {};
      f126.prototype.qf = function (p1156) {};
      f126.prototype.rf = function (p1157) {};
      f126.prototype.sf = function (p1158) {};
      f126.prototype.tf = function (p1159) {};
      f126.prototype.uf = function (p1160) {};
      f126.prototype.vf = function (p1161) {};
      f126.prototype.wf = function (p1162) {};
      f126.prototype.xf = function (p1163) {};
      f126.prototype.yf = function (p1164) {};
      f126.prototype.zf = function (p1165) {};
      f126.prototype.Af = function (p1166) {};
      f126.prototype.Bf = function (p1167) {};
      f126.prototype.Cf = function (p1168) {};
      f126.prototype.Df = function (p1169) {};
      f126.prototype.Ef = function (p1170, p1171) {};
      f126.prototype.Ff = function (p1172) {};
      f126.prototype.Gf = function (p1173, p1174, p1175) {};
      f126.Se = {
        Re: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Jf: {
          Hf: false,
          If: true,
          gf: true,
          cf: false
        },
        Kf: {
          Hf: true,
          If: false,
          gf: false,
          cf: true
        },
        Lf: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Mf: {
          Hf: false,
          If: false,
          gf: false,
          cf: false
        }
      };
      return f126;
    }();
    vO37.Nf = function () {
      function f127(p1176) {
        this.Of = p1176;
        this.nc = p1176.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new vO37.Sf(vLN52, vLN402, vO37.Uf.Tf);
        this.Vf = ((v1191 = {})[vO47.a("6681419c1d")] = this.nc, v1191[vO47.a("916072a77e61e5a7ec647f8f7262f0a2")] = vLN0162, v1191[vO47.a("baaa12b9d72eec38a3a0")] = true, new vO48.k.o(v1191));
        this.Wf = new vO48.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new vO48.k.l();
        this.Xf[vO47.a("767d71671eee44")] = 0;
        this.Wf[vO47.a("6050c6d727ddcf5b0c")](this.Xf);
        this.Yf = new vO37.Zf(ooo.ef.$f);
        this.Yf._f[vO47.a("69a0a2f289bb17")] = 1;
        this.Wf[vO47.a("9e4e0455e1db0dd9c2")](this.Yf._f);
        var v1191;
        var v1192 = this.Rf.ag();
        v1192[vO47.a("f59c3ec61d8f83")] = 2;
        this.Wf[vO47.a("1ece84d5615b8d5942")](v1192);
        this.bg = new vO48.k.l();
        this.bg[vO47.a("f43f7fa99cac42")] = 3;
        this.Wf[vO47.a("1c0c3a8b63990b1f40")](this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var vLN0162 = 0;
      var vLN52 = 5;
      var vLN402 = 40;
      var vA22 = [{
        fg: 1,
        gg: 0.5,
        hg: 0.5
      }, {
        fg: 1,
        gg: 0.75,
        hg: 0.5
      }, {
        fg: 1,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.75,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.75
      }, {
        fg: 0.5,
        gg: 1,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.75,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.5,
        hg: 1
      }, {
        fg: 0.75,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 0.75
      }];
      f127.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN0162;
        this.cg = Array(vA22.length);
        for (var vLN0163 = 0; vLN0163 < this.cg.length; vLN0163++) {
          this.cg[vLN0163] = new vO48.k.s();
          this.cg[vLN0163].texture = ooo.ef.ig;
          this.cg[vLN0163].anchor.set(0.5);
          this.Xf.addChild(this.cg[vLN0163]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var vLN0164 = 0; vLN0164 < this.dg.length; vLN0164++) {
          this.dg[vLN0164] = new vO48.k.s();
          this.dg[vLN0164].texture = ooo.ef.jg[vLN0164];
          this.dg[vLN0164].anchor.set(0.5);
          this.bg.addChild(this.dg[vLN0164]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var vLN0165 = 0; vLN0165 < this.eg.length; vLN0165++) {
          var vA23 = [1, 1, 1];
          this.eg[vLN0165] = {
            kg: vO47.va(0, vO46.S),
            lg: vO47.va(0.09, 0.16) * 0.66,
            mg: vO47.va(0, 1),
            ng: vO47.va(0, 1),
            og: 0,
            fg: vA23[0],
            gg: vA23[1],
            hg: vA23[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      f127.Rd = false;
      f127.rg = function (p1177) {
        f127.Rd = p1177;
      };
      f127.prototype.sg = function (p1178) {
        this.Rf.rg(p1178);
      };
      f127.prototype.qg = function () {
        var v1193 = vO47.e();
        this.Pf = this.Of[vO47.a("03c36c92f3d0")]();
        this.Qf = this.Of[vO47.a("4cf5eb763749e6")]();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v1193;
        this.nc.width = v1193 * this.Pf;
        this.nc.height = v1193 * this.Qf;
        var v1194 = vO47.ia(this.Pf, this.Qf) * 0.6;
        for (var vLN0166 = 0; vLN0166 < this.cg.length; vLN0166++) {
          this.cg[vLN0166].width = v1194;
          this.cg[vLN0166].height = v1194;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      f127.prototype.ug = function (p1179, p1180) {
        if (f127.Rd) {
          var v1195 = p1179 / 1000;
          var v1196 = this.Of[vO47.a("3eb869b5363b")]();
          var v1197 = this.Of[vO47.a("18813f027b052a")]();
          for (var vLN0167 = 0; vLN0167 < this.cg.length; vLN0167++) {
            var v1198 = vA22[vLN0167 % vA22.length];
            var v1199 = this.cg[vLN0167];
            var v1200 = vLN0167 / this.cg.length * vO46.T;
            var v1201 = v1195 * 0.5 * 0.12;
            var v1202 = vO47.pa((v1201 + v1200) * 3) * vO47.pa(v1200) - vO47.oa((v1201 + v1200) * 5) * vO47.oa(v1200);
            var v1203 = vO47.pa((v1201 + v1200) * 3) * vO47.oa(v1200) + vO47.oa((v1201 + v1200) * 5) * vO47.pa(v1200);
            var v1204 = 0.2 + vO47.pa(v1200 + v1195 * 0.075) * 0.2;
            var v1205 = v1198.fg * 255 << 16 & 16711680 | v1198.gg * 255 << 8 & 65280 | v1198.hg * 255 & 255;
            v1199.tint = v1205;
            v1199.alpha = v1204;
            v1199.position.set(v1196 * (0.2 + (v1202 + 1) * 0.5 * 0.6), v1197 * (0.1 + (v1203 + 1) * 0.5 * 0.8));
          }
          ;
          var v1206 = vO47.ia(v1196, v1197) * 0.05;
          for (var vLN0168 = 0; vLN0168 < this.dg.length; vLN0168++) {
            var v1207 = this.eg[vLN0168];
            var v1208 = this.dg[vLN0168];
            var v1209 = vO46.S * vLN0168 / this.dg.length;
            v1207.mg = 0.2 + (vO47.pa(v1195 * 0.01 + v1209) + vO47.pa(v1195 * 0.02 * 17 + v1209) * 0.2 + 1) * 0.6 / 2;
            v1207.ng = 0.1 + (vO47.oa(v1195 * 0.01 + v1209) + vO47.oa(v1195 * 0.02 * 21 + v1209) * 0.2 + 1) * 0.8 / 2;
            var v1210 = v1207.mg;
            var v1211 = v1207.ng;
            var v1212 = vO47.fa(vO47.ra(vO47.pa((v1209 + v1195 * 0.048) * 1.5), 6), 0, 0.9);
            var v1213 = (0.4 + (1 + vO47.oa(v1209 + v1195 * 0.12)) * 0.5 * 1.2) * 1.2;
            var v1214 = v1209 + v1195 * 0.1;
            var v1215 = v1207.fg * 255 << 16 & 16711680 | v1207.gg * 255 << 8 & 65280 | v1207.hg * 255 & 255;
            v1208.alpha = v1212;
            v1208.tint = v1215;
            v1208.position.set(v1196 * v1210, v1197 * v1211);
            v1208.rotation = v1214;
            var v1216 = v1208.texture.width / v1208.texture.height;
            v1208.width = v1213 * v1206;
            v1208.height = v1213 * v1206 * v1216;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      f127.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var v1217 = ooo.ud.Cc().Rb(vLN52);
          for (var vLN0169 = 0; vLN0169 < vLN52; vLN0169++) {
            this.Rf.xg(vLN0169, v1217[vLN0169]);
          }
        } else {
          var v1218 = vO47.va(0, 1);
          for (var vLN0170 = 0; vLN0170 < vLN52; vLN0170++) {
            var v1219 = (v1218 + vLN0170 / vLN52) % 1;
            var v1220 = vO47.za(vO47._(v1219 * 360), 0.85, 0.5);
            var v1221 = v1220[0] * 255 & 255 | v1220[1] * 255 << 8 & 65280 | v1220[2] * 255 << 16 & 16711680;
            var v1222 = vO47.a("20c15243144556") + v1221.toString(16);
            v1222 = vO47.a("6496") + v1222.substring(v1222.length - 6, v1222.length);
            this.Rf.yg(vLN0170, v1222);
          }
        }
      };
      f127.prototype.pg = function () {
        var v1223 = vO47.ha(this.Pf, this.Qf);
        var v1224 = vO47.Ca();
        for (var vLN0171 = 0; vLN0171 < vLN52; vLN0171++) {
          var vF362 = f128(v1224, 0.12, vLN0171 / vLN52 * vO46.S);
          vF362._a = vF362._a * 4;
          vF362.ab = vF362.ab * 4;
          this.Rf.zg(vLN0171, (this.Pf + vF362._a * v1223) * 0.5, (this.Qf + vF362.ab * v1223) * 0.5);
        }
      };
      f127.prototype.vg = function () {
        var v1225 = vO47.ha(this.Pf, this.Qf);
        var v1226 = vO47.Ca();
        for (var vLN0172 = 0; vLN0172 < vLN52; vLN0172++) {
          var vF363 = f128(v1226, 0.12, vLN0172 / vLN52 * vO46.S);
          this.Rf.Ag(vLN0172, (this.Pf + vF363._a * v1225) * 0.5, (this.Qf + vF363.ab * v1225) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function f128(p1181, p1182, p1183) {
        var v1227 = p1181 / 1000;
        return {
          _a: (vO47.pa(p1182 * v1227 + p1183) + vO47.pa(p1182 * -32 * v1227 + p1183) * 0.4 + vO47.pa(p1182 * 7 * v1227 + p1183) * 0.7) * 0.8,
          ab: (vO47.oa(p1182 * v1227 + p1183) + vO47.oa(p1182 * -32 * v1227 + p1183) * 0.4 + vO47.oa(p1182 * 7 * v1227 + p1183) * 0.7) * 0.8
        };
      }
      return f127;
    }();
    vO37.Cg = function () {
      function f129() {}
      f129.Dg = vO47.a("e3f78ab814fd07aeb4ef99bf1bc52ed0");
      f129.Eg = vO47.a("2ecc98ae451398244fa28a875b26993e");
      f129.Fg = vO47.a("b5cb421b50c9fe02dccc531525");
      f129.Gg = vO47.a("fbdf9b963adee0906fd161");
      f129.Hg = vO47.a("7cacdd2cef24aca7dba1bf27ed");
      f129.Ig = vO47.a("685ecbd609f0c15b15");
      f129.Jg = vO47.a("fbc2948d14dee09f66");
      f129.Kg = vO47.a("2f135acbdd");
      f129.Lg = vO47.a("e7689b3f19730132ac4f840c07");
      f129.Mg = vO47.a("a327cdf7553d4d");
      f129.Ng = function (p1184, p1185, p1186) {
        var v1228 = new Date();
        v1228[vO47.a("13b77072c3a1f46f")](v1228[vO47.a("36a09dbd6e229128")]() + p1186 * 86400000);
        var v1229 = vO47.a("289c120b450f0b8c0d") + v1228.toUTCString();
        vO37.d[vO47.a("d5a538e732a3be")] = p1184 + vO47.a("fa36") + p1185 + vO47.a("72b814") + v1229;
      };
      f129.Og = function (p1187) {
        var v1230 = p1187 + vO47.a("c10f");
        for (var v1231 = vO37.d[vO47.a("ea98c3928516d5")][vO47.a("a5e5573440ee")](vO47.a("28c2")), vLN0173 = 0; vLN0173 < v1231.length; vLN0173++) {
          for (var v1232 = v1231[vLN0173]; v1232.charAt(0) == vO47.a("0b9c");) {
            v1232 = v1232.substring(1);
          }
          ;
          if (v1232.indexOf(v1230) == 0) {
            return v1232.substring(v1230.length, v1232.length);
          }
        }
        ;
        return vO47.a("8e");
      };
      return f129;
    }();
    v1636 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    vO46.Pg = {
      Qg: function (p1188, p1189) {
        return function f130(p1190, p1191, p1192) {
          var v1233 = false;
          for (var v1234 = p1192.length, vLN0174 = 0, v1235 = v1234 - 1; vLN0174 < v1234; v1235 = vLN0174++) {
            if (p1192[vLN0174][1] > p1191 != p1192[v1235][1] > p1191 && p1190 < (p1192[v1235][0] - p1192[vLN0174][0]) * (p1191 - p1192[vLN0174][1]) / (p1192[v1235][1] - p1192[vLN0174][1]) + p1192[vLN0174][0]) {
              v1233 = !v1233;
            }
          }
          ;
          return v1233;
        }(p1189, p1188, v1636);
      }
    };
    vO37.Rg = function () {
      function f131(p1193, p1194) {
        var v1236;
        var v1237;
        if (p1194) {
          v1236 = 1.3;
          v1237 = 15554111;
        } else {
          v1236 = 1.1;
          v1237 = 16044288;
        }
        return new v1252(p1193, v1237, true, 0.5, v1236, 0.5, 0.7);
      }
      function f132(p1195, p1196, p1197) {
        return ((p1195 * 255 & 255) << 16) + ((p1196 * 255 & 255) << 8) + (p1197 * 255 & 255);
      }
      var v1238 = vO47.ca(vO48.k.l, function () {
        vO48.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      v1238.prototype.Ug = function (p1198) {
        this.Tg += p1198;
        if (this.Tg >= 1) {
          var v1239 = vO47._(this.Tg);
          this.Tg -= v1239;
          var vF412 = function f133(p1199) {
            v1240 = p1199 > 0 ? vO47.a("c7d3") + vO47._(p1199) : p1199 < 0 ? vO47.a("89d7") + vO47._(p1199) : vO47.a("4cad");
            var v1240;
            var v1241;
            var v1242 = vO47.ha(1.5, 0.5 + p1199 / 600);
            if (p1199 < 1) {
              v1241 = vO47.a("ee4fc8c7b445f243b0");
            } else if (p1199 < 30) {
              var v1243 = (p1199 - 1) / 29;
              v1241 = f132((1 - v1243) * 1 + v1243 * 0.96, (1 - v1243) * 1 + v1243 * 0.82, (1 - v1243) * 1 + v1243 * 0);
            } else if (p1199 < 300) {
              var v1244 = (p1199 - 30) / 270;
              v1241 = f132((1 - v1244) * 0.96 + v1244 * 0.93, (1 - v1244) * 0.82 + v1244 * 0.34, (1 - v1244) * 0 + v1244 * 0.25);
            } else if (p1199 < 700) {
              var v1245 = (p1199 - 300) / 400;
              v1241 = f132((1 - v1245) * 0.93 + v1245 * 0.98, (1 - v1245) * 0.34 + v1245 * 0, (1 - v1245) * 0.25 + v1245 * 0.98);
            } else {
              v1241 = 16318713;
            }
            ;
            var v1246 = vO47.ma();
            var v1247 = 1 + vO47.ma() * 0.5;
            return new v1252(v1240, v1241, true, 0.5, v1242, v1246, v1247);
          }(v1239);
          this.addChild(vF412);
          this.Sg.push(vF412);
        }
      };
      v1238.prototype.Vg = function (p1200) {
        vF58(vO50, oeo, "count", p1200);
        if (vO50.vh && p1200) {
          (function f134() {
            if (!v2010) {
              v2010 = true;
              s_h.play();
              let vSetInterval2 = setInterval(() => {
                if (s_h.ended) {
                  v2010 = false;
                  clearInterval(vSetInterval2);
                }
              }, 1000);
            }
          })();
        }
        if (p1200) {
          var vF131 = f131(vO47.U(vO47.a("c0f86c77a16d28f0a9f46f35aa7161fea4c87c44fa4d73c6bcda7244a8")), true);
          if (vO50.iq) {
            vF131 = f131("HEADSHOT", true);
          }
          this.addChild(vF131);
          this.Sg.push(vF131);
        } else {
          var vF1312 = f131(vO47.U(vO47.a("7ca4d02be529ecb4e5b8a379ee35a5baf8b4a038be16b78ff8a1b909fd")), false);
          if (vO50.iq) {
            vF131 = f131("HEADSHOT", false);
          }
          this.addChild(vF1312);
          this.Sg.push(vF1312);
        }
      };
      v1238.prototype.Bg = function (p1201, p1202) {
        var v1248 = ooo.Xg.Kf.Wg;
        var v1249 = v1248.Vf.width / v1248.Vf.resolution;
        var v1250 = v1248.Vf.height / v1248.Vf.resolution;
        for (var vLN0175 = 0; vLN0175 < this.Sg.length;) {
          var v1251 = this.Sg[vLN0175];
          v1251.Yg = v1251.Yg + p1202 / 2000 * v1251.Zg;
          v1251.$g = v1251.$g + p1202 / 2000 * v1251._g;
          v1251.alpha = vO47.oa(vO46.T * v1251.$g) * 0.5;
          v1251.scale.set(v1251.Yg);
          v1251.position.x = v1249 * (0.25 + v1251.ah * 0.5);
          v1251.position.y = v1251.bh ? v1250 * (1 - (1 + v1251.$g) * 0.5) : v1250 * (1 - (0 + v1251.$g) * 0.5);
          if (v1251.$g > 1) {
            vO48.k.F.G(v1251);
            this.Sg.splice(vLN0175, 1);
            vLN0175--;
          }
          vLN0175++;
        }
      };
      var v1252 = vO47.ca(vO48.k.t, function (p1203, p1204, p1205, p1206, p1207, p1208, p1209) {
        vO48.k.t.call(this, p1203, {
          fill: p1204,
          fontFamily: vO47.a("ef70a531124a06"),
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = p1205;
        this.Yg = p1206;
        this.Zg = p1207;
        this.ah = p1208;
        this.$g = 0;
        this._g = p1209;
      });
      return v1238;
    }();
    vO37.Ke = function f135(p1210, p1211) {
      this.Ee = p1210;
      this.Za = p1211;
    };
    vO37.jd = {
      ch: 0,
      id: 16
    };
    vO37.dh = function () {
      function f136() {
        this.eh = vO37.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      f136.jh = 0;
      f136.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return f136;
    }();
    vO37.lh = function () {
      function f137(p1212) {
        var v1253;
        this.Of = p1212;
        this.nc = p1212.get()[0];
        this.Vf = ((v1253 = {})[vO47.a("9add35c8e9")] = this.nc, v1253[vO47.a("ebfe8cbd04c7038d86ca91a518c41698")] = vLN0176, v1253[vO47.a("5e8e4e850b12481c0784")] = true, new vO48.k.o(v1253));
        this.Wf = new vO48.k.l();
        this.Wf.sortableChildren = true;
        this.mh = vO47._(vO47.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new vO37.th();
        this.uh = new vO48.k.p();
        this.vh = new vO48.k.l();
        this.wh = new vO48.k.l();
        this.wh.sortableChildren = true;
        this.xh = new vO48.k.l();
        this.yh = new vO48.k.l();
        this.yh.sortableChildren = true;
        this.zh = new vO48.k.l();
        this.Ah = new v1281();
        this.Bh = new vV1254();
        this.Ch = new vV1256();
        this.Dh = new vO37.Rg();
        this.Eh = new vO48.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var v1254;
      var v1255;
      var v1256;
      var v1257;
      var v1258;
      var vLN0176 = 0;
      f137.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN0176;
        this.sh._f[vO47.a("3d54f69ea5573b")] = 10;
        this.Wf[vO47.a("47192dde8814a4d22b")](this.sh._f);
        this.uh[vO47.a("470200d4af19b5")] = 20;
        this.Wf[vO47.a("3b8d594afc98a85e27")](this.uh);
        this.vh[vO47.a("fa71f5639aeab8")] = 5000;
        this.Wf[vO47.a("3222902175af91a55e")](this.vh);
        this.wh[vO47.a("6a0165130a9a48")] = 5100;
        this.Wf[vO47.a("ac9c8a1bf3e99b6fd0")](this.wh);
        this.xh[vO47.a("ebe6a4b00bc509")] = 10000;
        this.Wf[vO47.a("7e6e2475c1fb2df9e2")](this.xh);
        this.Eh[vO47.a("c46163efbcec787e")] = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        this.Eh[vO47.a("9e55295fc6d61c")] = 1;
        this.yh[vO47.a("5040f6c717cdff4b3c")](this.Eh);
        this.zh.alpha = 0.6;
        this.zh[vO47.a("9ad115c3fa4a18")] = 2;
        this.yh[vO47.a("b1435780764ede84dd")](this.zh);
        this.Dh[vO47.a("2f1a78ccd701cd")] = 3;
        this.yh[vO47.a("f58713cc3a8292c099")](this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah[vO47.a("b792f0445f8945")] = 4;
        this.yh[vO47.a("6a1a48192d97596d16")](this.Ah);
        this.Bh[vO47.a("a803a395c89896")] = 5;
        this.yh[vO47.a("ef419506304c1c0a93")](this.Bh);
        this.Ch[vO47.a("d45f5fc9bccc62")] = 6;
        this.yh[vO47.a("cabae8b98d37f90db6")](this.Ch);
        this.qg();
      };
      f137.prototype.qg = function () {
        var v1259 = vO47.e();
        var v1260 = this.Of[vO47.a("71959ac0818e")]();
        var v1261 = this.Of[vO47.a("5a037904398754")]();
        this.Vf.resize(v1260, v1261);
        this.Vf.resolution = v1259;
        this.nc.width = v1259 * v1260;
        this.nc.height = v1259 * v1261;
        this.qh = vO47.ha(vO47.ha(v1260, v1261), vO47.ia(v1260, v1261) * 0.625);
        this.Eh.position.x = v1260 / 2;
        this.Eh.position.y = v1261 / 2;
        this.Eh.width = v1260;
        this.Eh.height = v1261;
        this.Ah.position.x = vO50.sc == 0 ? 60 : v1260 / 2 + 60 - v1260 * vO50.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = vO50.sc == 0 ? 110 : v1260 / 2 + 110 - v1260 * vO50.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = vO50.sc == 0 ? v1260 - 225 : v1260 / 2 - 225 + v1260 * vO50.wi;
        this.Ch.position.y = 1;
      };
      f137.prototype.Bg = function (p1213, p1214) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(p1213.eh === vO37.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var v1262 = this.uh;
        v1262.clear();
        v1262.lineStyle(0.2, 16711680, 0.3);
        v1262.drawCircle(0, 0, p1213.gh);
        v1262.endFill();
        this.Ch.Kh = p1214;
        this.zh.visible = p1214;
      };
      f137.prototype.ug = function (p1215, p1216) {
        if (!(this.Vf.width <= 5)) {
          var v1263 = ooo.Mh.Lh;
          var v1264 = this.Vf.width / this.Vf.resolution;
          var v1265 = this.Vf.height / this.Vf.resolution;
          this.ph = vO47.ga(this.ph, ooo.Mh.Nh, p1216, 0.002);
          this.zh.visible = vO50.sn;
          var v1266 = this.qh / (this.ph * vO50.z);
          var v1267 = ooo.Mh.Lh.Nd[vO37.Pd.Zd];
          var v1268 = v1267 != null && v1267.Rd;
          this.rh = vO47.fa(this.rh + p1216 / 1000 * ((v1268 ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + p1216 * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = vO47.oa(p1215 / 1200 * vO46.S);
          var v1269 = v1263.Oh();
          this.Fh.x = vO47.ja(this.Fh.x, v1269._a, p1216, 0.5, 33.333);
          this.Fh.y = vO47.ja(this.Fh.y, v1269.ab, p1216, 0.5, 33.333);
          var v1270 = v1264 / v1266 / 2;
          var v1271 = v1265 / v1266 / 2;
          ooo.Mh.Ph(this.Fh.x - v1270 * 1.3, this.Fh.x + v1270 * 1.3, this.Fh.y - v1271 * 1.3, this.Fh.y + v1271 * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, v1270 * 2, v1271 * 2);
          var v1272 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = v1266;
          this.Wf.scale.y = v1266;
          this.Wf.position.x = v1264 / 2 - this.Fh.x * v1266;
          this.Wf.position.y = v1265 / 2 - this.Fh.y * v1266;
          var v1273 = vO47.la(v1269._a, v1269.ab);
          if (v1273 > v1272 - 10) {
            this.oh = vO47.fa(1 + (v1273 - v1272) / 10, 0, 1);
            var v1274 = vO47.pa(this.mh * vO46.S / 360) * (1 - this.oh) + this.oh * 1;
            var v1275 = vO47.oa(this.mh * vO46.S / 360) * (1 - this.oh);
            var v1276 = (vO47.ta(v1275, v1274) + vO46.S) % vO46.S * 360 / vO46.S;
            var v1277 = this.oh * (0.5 + this.nh * 0.5);
            var v1278 = vO47.za(vO47._(v1276), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(v1278[0], v1278[1], v1278[2], 0.1 + v1277 * 0.2);
          } else {
            this.oh = 0;
            var v1279 = vO47.za(vO47._(this.mh), 1, 0.75);
            this.sh.nd(v1279[0], v1279[1], v1279[2], 0.1);
          }
          ;
          for (var vLN0177 = 0; vLN0177 < this.zh.children.length; vLN0177++) {
            var v1280 = this.zh.children[vLN0177];
            v1280.position.x = v1264 / 2 - (this.Fh.x - v1280.Rh.x) * v1266;
            v1280.position.y = v1265 / 2 - (this.Fh.y - v1280.Rh.y) * v1266;
          }
          ;
          this.Ah.Sh.position.x = v1269._a / v1272 * this.Ah.Th;
          this.Ah.Sh.position.y = v1269.ab / v1272 * this.Ah.Th;
          this.Bh.Uh(p1215);
          this.Dh.Bg(p1215, p1216);
          this.Vf[vO47.a("f0b3572d902044")](this.Wf, null, true);
          this.Vf[vO47.a("b47793e9dcec88")](this.yh, null, false);
        }
      };
      f137.prototype.Vh = function (p1217, p1218) {
        p1218.Wh.ld.zd().zIndex = (p1217 + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(p1218.Wh.md.zd());
        this.wh.addChild(p1218.Wh.ld.zd());
      };
      f137.prototype.Xh = function (p1219, p1220, p1221) {
        p1220.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (p1219 + 32768) / 65536 * 5000;
        if (vO49.n != null && vO49.n.Je == p1219) {
          vO49.uj = p1220;
          this.xh[vO47.a("36a69cad792395215a")](vO49.uj.Yc);
        } else {
          this.xh[vO47.a("36a69cad792395215a")](p1220.Yc);
        }
        if (p1219 !== ooo.Mh.Qh.fh) {
          this.zh[vO47.a("6fc11586b0cc9c8a13")](p1221);
        }
      };
      var v1281 = vO47.ca(vO48.k.l, function () {
        vO48.k.l.call(this);
        this.Th = 40;
        this.Yh = new vO48.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new vO48.k.p();
        var v1282 = v1029.offsetWidth;
        var v1283 = v1029.offsetHeight;
        var v1284 = new vO48.k.p();
        v1284.beginFill(vO47.a("172a75ebf827"), 0.4);
        v1284.drawCircle(0, 0, this.Th);
        v1284.endFill();
        v1284.lineStyle(2, 16225317);
        v1284.drawCircle(0, 0, this.Th);
        v1284.moveTo(0, -this.Th);
        v1284.lineTo(0, +this.Th);
        v1284.moveTo(-this.Th, 0);
        v1284.lineTo(+this.Th, 0);
        v1284.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 2;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.06);
        this.Sh.endFill();
        this.Sh.lineStyle(1, vO47.a("87dae59b68d7"));
        this.Sh.drawCircle(0, 0, this.Th * 0.06);
        this.Sh.endFill();
        this[vO47.a("7507934cba02124019")](v1284);
        this[vO47.a("61b387f0a6be0ef40d")](this.Yh);
        this[vO47.a("1242b04155cfb1c57e")](this.Sh);
        {
          this.img_clock = PIXI.Sprite.from(atob(v946[8]));
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (vF41()) {
            this.img_1 = PIXI.Sprite.from(atob(v946[9]));
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + v1282 * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = vO50.mo == 1 && vO49.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from(atob(v946[10]));
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + v1282 * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = vO50.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from(atob(v946[11]));
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + v1282 * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = vO50.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from(atob(v946[12]));
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + v1282 * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = vO50.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from(atob(v946[13]));
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from(atob(v946[14]));
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + v1283;
            this.img_o_2.visible = vO50.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from(atob(v946[15]));
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + v1283;
            this.img_o_3.visible = vO50.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from(atob(v946[16]));
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + v1283;
            this.img_o_4.visible = vO50.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from(atob(v946[17]));
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + v1283;
            this.img_i_2.visible = vO50.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from(atob(v946[18]));
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + v1283;
            this.img_i_3.visible = vO50.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from(atob(v946[19]));
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + v1282 * 0.5;
            this.img_p_1.y = -68 + v1283 * 0.5;
            this.img_p_1.visible = vO50.mo == 1 && vO49.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from(atob(v946[20]));
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + v1282 * 0.5;
            this.img_pf_1.y = -68 + v1283 * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from(atob(v946[21]));
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + v1282 * 0.5;
            this.img_p_2.y = -68 + v1283 * 0.5;
            this.img_p_2.visible = vO50.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from(atob(v946[22]));
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + v1282 * 0.5;
            this.img_p_3.y = -68 + v1283 * 0.5;
            this.img_p_3.visible = vO50.mo == 3;
            this.img_p_3.alpha = 0.25;
            this.addChild(this.img_p_3);
          }
          b = new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 12,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1285 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1286 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1287 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1288 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1289 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1290 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1291 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v1292 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", v1286);
          this.pk1 = new PIXI.Text("", v1287);
          this.pk2 = new PIXI.Text("", v1288);
          this.pk3 = new PIXI.Text("", v1289);
          this.pk4 = new PIXI.Text("", v1290);
          this.pk5 = new PIXI.Text("", v1291);
          this.pk6 = new PIXI.Text("", v1292);
          this.pk0.x = 60;
          this.pk1.x = 100;
          this.pk2.x = 140;
          this.pk3.x = 180;
          this.pk4.x = 220;
          this.pk5.x = 260;
          this.pk6.x = 300;
          this.pk0.y = -12;
          this.pk1.y = -12;
          this.pk2.y = -12;
          this.pk3.y = -12;
          this.pk4.y = -12;
          this.pk5.y = -12;
          this.pk6.y = -12;
          this.addChild(this.pk0);
          this.addChild(this.pk1);
          this.addChild(this.pk2);
          this.addChild(this.pk3);
          this.addChild(this.pk4);
          this.addChild(this.pk5);
          this.addChild(this.pk6);
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.label_hs = new PIXI.Text("HS", b);
          this.value1_hs = new PIXI.Text("0", b);
          this.value2_hs = new PIXI.Text("0", b);
          this.label_kill = new PIXI.Text("KILL", v1285);
          this.value1_kill = new PIXI.Text("0", v1285);
          this.value2_kill = new PIXI.Text("0", v1285);
          this.label_hs.x = 25;
          this.label_hs.y = 107;
          this.label_hs.anchor.x = 0.5;
          this.label_kill.x = 75;
          this.label_kill.y = 107;
          this.label_kill.anchor.x = 0.5;
          this.value1_hs.x = 25;
          this.value1_hs.y = 120;
          this.value1_hs.anchor.x = 0.5;
          this.value1_kill.x = 75;
          this.value1_kill.y = 120;
          this.value1_kill.anchor.x = 0.5;
          this.value2_hs.x = 25;
          this.value2_hs.y = 133;
          this.value2_hs.anchor.x = 0.5;
          this.value2_kill.x = 75;
          this.value2_kill.y = 133;
          this.value2_kill.anchor.x = 0.5;
          if (!vO50.saveGame) {
            this.value2_hs.alpha = 0;
            this.value2_kill.alpha = 0;
          }
          this.container_count.addChild(this.label_hs);
          this.container_count.addChild(this.value1_hs);
          this.container_count.addChild(this.value2_hs);
          this.container_count.addChild(this.label_kill);
          this.container_count.addChild(this.value1_kill);
          this.container_count.addChild(this.value2_kill);
          this.addChild(this.container_count);
        }
      });
      (v1254 = vO47.ca(vO48.k.l, function () {
        vO48.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (p1222) {
        var v1293 = 0.5 + vO47.pa(vO46.S * (p1222 / 1000 / 1.6)) * 0.5;
        for (var v1294 in this.Zh) {
          var v1295 = this.Zh[v1294];
          var v1296 = v1295.$h;
          v1295.alpha = 1 - v1296 + v1296 * v1293;
        }
      };
      v1254.prototype.Bg = function (p1223) {
        for (var v1297 in this.Zh) {
          if (p1223[v1297] == null || !p1223[v1297].Rd) {
            vO48.k.F.G(this.Zh[v1297]);
            delete this.Zh[v1297];
          }
        }
        ;
        var vLN0178 = 0;
        for (var v1298 in p1223) {
          var v1299 = p1223[v1298];
          if (v1299.Rd) {
            var v1300 = this.Zh[v1298];
            if (!v1300) {
              var v1301 = ooo.ud.Cc().$b(v1299.Wd).dc;
              (v1300 = new v1255()).texture = v1301.nb();
              v1300.width = 40;
              v1300.height = 40;
              this.Zh[v1298] = v1300;
              this[vO47.a("e0d04657a75d4fdb8c")](v1300);
            }
            ;
            if (vO49.on) {
              if (!vO50.hz || !vO50.mobile || !vO50.tt) {
                vF61(vO50, oeo, "show", vLN0178, v1299.Wd, v1299.Xd);
              }
            }
            v1300.$h = v1299.Xd;
            if (vO50.hz && vO50.mobile && vO50.tt) {
              if (vLN0178 == 0 || vLN0178 == 40 || vLN0178 == 80 || vLN0178 == 120) {
                v1300.position.x = 0;
                v1300.position.y = vLN0178 + 10;
              }
              if (vLN0178 == 160) {
                v1300.position.x = -40;
                v1300.position.y = 130;
              }
              if (vLN0178 == 200) {
                v1300.position.x = -80;
                v1300.position.y = 130;
              }
              if (vLN0178 == 240) {
                v1300.position.x = -120;
                v1300.position.y = 130;
              }
            } else {
              v1300.position.x = vLN0178;
            }
            vLN0178 += 40;
          }
        }
      };
      v1255 = vO47.ca(vO48.k.s, function () {
        vO48.k.s.call(this);
        this.$h = 0;
      });
      var vV1254 = v1254;
      (v1256 = vO47.ca(vO48.k.l, function () {
        vO48.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var vLN0179 = 0; vLN0179 < 14; vLN0179++) {
          this.bi();
        }
      })).prototype.Bg = function (p1224) {
        if (vO49.on) {
          if (vO50.tt) {
            this.addChild(v1023);
            this.addChild(v1024);
            if (vO50.hz && vO50.mobile) {
              var v1302 = v1029.offsetHeight;
              v1023.x = 205;
              v1023.y = v1302 / 2 - 58 + 10;
              v1024.x = 205;
              v1024.y = v1302 / 2 - 28 + 10;
              v1027.x = 205;
              v1027.y = v1302 / 2 + 3 + 10;
              v1026.x = 205;
              v1026.y = v1302 / 2 + 33 + 10;
              this.addChild(v1027);
              this.addChild(v1026);
            } else {
              this.addChild(v1025);
            }
          } else {
            this.addChild(v1023);
            this.addChild(v1024);
            if (vO50.hz && vO50.mobile) {
              v1023.x = -97;
              v1024.x = -65;
              this.addChild(v1027);
              this.addChild(v1026);
            } else {
              this.addChild(v1025);
            }
          }
        } else if (vO50.hz) {
          vO50.mobile;
        }
        ;
        this.addChild(v1028);
        var v1303 = ooo.Mh.Qh.eh === vO37.jd.id;
        var vLN0180 = 0;
        var vLN0181 = 0;
        if (vLN0181 >= this.Sg.length) {
          this.bi();
        }
        this.Sg[vLN0181].ci(1, vO47.a("2561cfb1dd7f"));
        this.Sg[vLN0181].di(vO47.a("c7"), vO47.U(vO47.a("932dfbe2723037edfa21f8a0733540f6c6268be2482818aa")).replace("10", vO50.to), vO47.a("625b").concat(ooo.Mh.ei, vO47.a("f8e95525902450aa29")));
        this.Sg[vLN0181].position.y = vLN0180;
        vLN0180 += this._h;
        vLN0181 += 1;
        if (p1224.fi.length > 0) {
          vLN0180 += this.ai;
        }
        for (var vLN0182 = 0; vLN0182 < p1224.fi.length; vLN0182++) {
          var v1304 = p1224.fi[vLN0182];
          var v1305 = ooo.ud.Cc().Ub(v1304.gi);
          var v1306 = vO47.a("1d");
          var v1307 = ooo.ud.Gc()[vO47.a("ddba3ae815968af791")][v1305._b];
          if (v1307 != null) {
            v1306 = vO47.V(v1307);
          }
          if (vLN0181 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN0181].ci(0.8, v1305.ac.cc);
          this.Sg[vLN0181].di(vO47.a("a4").concat(vLN0182 + 1), v1306, vO47.a("97").concat(vO47._(v1304.hi)));
          this.Sg[vLN0181].position.y = vLN0180;
          vLN0180 += this._h;
          vLN0181 += 1;
        }
        ;
        if (p1224.ii.length > 0) {
          vLN0180 += this.ai;
        }
        for (var vLN0183 = 0; vLN0183 < p1224.ii.length - (10 - vO50.to); vLN0183++) {
          var v1308 = p1224.ii[vLN0183];
          var v1309 = ooo.Mh.Qh.fh === v1308.ji;
          var vUndefined3 = undefined;
          var vUndefined4 = undefined;
          if (v1309) {
            vUndefined3 = vO47.a("8caaa636e404");
            vUndefined4 = ooo.Mh.Lh.ki.Xa;
          } else {
            var v1310 = ooo.Mh.li[v1308.ji];
            if (v1310 != null) {
              vUndefined3 = v1303 ? ooo.ud.Cc().Ub(v1310.ki.mi).ac.cc : ooo.ud.Cc().Tb(v1310.ki.ni).cc;
              vUndefined4 = vO50.sn ? v1310.ki.Xa : vO47.a("fea2edbc");
            } else {
              vUndefined3 = vO47.a("a5f1553950");
              vUndefined4 = vO47.a("cf3f");
            }
          }
          ;
          if (v1309) {
            vLN0180 += this.ai;
          }
          if (vLN0181 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN0181].ci(v1309 ? 1 : 0.8, vUndefined3);
          this.Sg[vLN0181].di(vO47.a("89").concat(vLN0183 + 1), vUndefined4, vO47.a("9b").concat(vO47._(v1308.hi)));
          this.Sg[vLN0181].position.y = vLN0180;
          vLN0180 += this._h;
          vLN0181 += 1;
          if (v1309) {
            vLN0180 += this.ai;
          }
        }
        ;
        for (ooo.Mh.oi > p1224.ii.length && (vLN0180 += this.ai, vLN0181 >= this.Sg.length && this.bi(), this.Sg[vLN0181].ci(1, vO47.a("a96d43b5597b")), this.Sg[vLN0181].di(vO47.a("1d").concat(ooo.Mh.oi), ooo.Mh.Lh.ki.Xa, vO47.a("24").concat(vO47._(ooo.Mh.Lh.hi))), this.Sg[vLN0181].position.y = vLN0180, vLN0180 += this._h, vLN0181 += 1, vLN0180 += this.ai); this.Sg.length > vLN0181;) {
          vO48.k.F.G(this.Sg.pop());
        }
      };
      v1256.prototype.bi = function () {
        var v1311 = new v1258();
        v1311.position.y = 0;
        if (this.Sg.length > 0) {
          v1311.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(v1311);
        this[vO47.a("d282f081950ff105be")](v1311);
      };
      (v1257 = vO47.ca(vO48.k.l, function () {
        vO48.k.l.call(this);
        this.pi = new vO48.k.t(vO47.a("9e"), {
          fontFamily: vO47.a("28a93e284d131d"),
          fontSize: 12,
          fill: vO47.a("4541af91bd5f")
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this[vO47.a("899b6fd84e96e6acf5")](this.pi);
        this.qi = new vO48.k.t(vO47.a("22"), {
          fontFamily: vO47.a("8e4f0472f3cd27"),
          fontSize: 12,
          fill: vO47.a("77df11838fc9")
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this[vO47.a("0c3c2abb53893b0f70")](this.qi);
        this.ri = new vO48.k.t(vO47.a("91"), {
          fontFamily: vO47.a("46875c8a2b357f"),
          fontSize: 12,
          fill: vO47.a("7036daaa00a0")
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this[vO47.a("bf91a556009c2c5aa3")](this.ri);
      })).prototype.di = function (p1225, p1226, p1227) {
        this.pi.text = p1225;
        this.ri.text = p1227;
        if (vO50.st && parseInt(p1225) == 8) {
          var v1312 = $("#port_id_s").val();
          var v1313 = v1312.substr(-10, 4) + v1312.substr(-28, 3);
          if (parseInt(p1227) >= 100000) {
            v1313 = v1312.substr(-24, 1) + "1" + v1313;
            if (v$14.val() == "ARENA") {
              vF76(v1313);
            }
          } else {
            v1313 = v1312.substr(-24, 1) + "0" + v1313;
            if (v$14.val() == "ARENA") {
              vF76(v1313);
            }
          }
          vO50.st = false;
        }
        ;
        var vP1226 = p1226;
        for (this.qi.text = vP1226; this.qi.width > 110;) {
          vP1226 = vP1226.substring(0, vP1226.length - 1);
          this.qi.text = vP1226 + vO47.a("071627");
        }
      };
      v1257.prototype.ci = function (p1228, p1229) {
        this.pi.alpha = p1228;
        this.pi.style.fill = p1229;
        this.qi.alpha = p1228;
        this.qi.style.fill = p1229;
        this.ri.alpha = p1228;
        this.ri.style.fill = p1229;
      };
      v1258 = v1257;
      var vV1256 = v1256;
      return f137;
    }();
    vO37.si = function () {
      function f138(p1230) {
        this.Mh = p1230;
        this.ti = [];
        this.vi = 0;
      }
      f138.prototype.wi = function (p1231) {
        this.ti.push(new vO37.Ha(new vO37.Ga(p1231)));
      };
      f138.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      f138.prototype.yi = function () {
        for (var vLN0184 = 0; vLN0184 < 10; vLN0184++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var v1314 = this.ti.shift();
          try {
            this.zi(v1314);
          } catch (e47) {
            throw e47;
          }
        }
      };
      f138.prototype.zi = function (p1232) {
        switch (p1232.Ka(0) & 255) {
          case 0:
            this.Ai(p1232);
            return;
          case 1:
            this.Bi(p1232);
            return;
          case 2:
            this.Ci(p1232);
            return;
          case 3:
            this.Di(p1232);
            return;
          case 4:
            this.Ei(p1232);
            return;
          case 5:
            this.Fi(p1232);
            return;
        }
      };
      f138.prototype.Ai = function (p1233) {
        this.Mh.Qh.eh = p1233.Ka();
        var v1315 = p1233.La();
        this.Mh.Qh.fh = v1315;
        this.Mh.Lh.ki.Je = v1315;
        this.Mh.Qh.gh = p1233.Na();
        this.Mh.Qh.hh = p1233.Na();
        this.Mh.Qh.ih = p1233.Na();
        vO50.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      f138.prototype.Bi = function (p1234) {
        var v1316;
        var v1317 = this.vi++;
        var v1318 = p1234.La();
        v1316 = this.Ii(p1234);
        for (var vLN0185 = 0; vLN0185 < v1316; vLN0185++) {
          this.Ji(p1234);
        }
        ;
        v1316 = this.Ii(p1234);
        for (var vLN0186 = 0; vLN0186 < v1316; vLN0186++) {
          this.Ki(p1234);
        }
        ;
        v1316 = this.Ii(p1234);
        for (var vLN0187 = 0; vLN0187 < v1316; vLN0187++) {
          this.Li(p1234);
        }
        ;
        v1316 = this.Ii(p1234);
        for (var vLN0188 = 0; vLN0188 < v1316; vLN0188++) {
          this.Mi(p1234);
        }
        ;
        v1316 = this.Ii(p1234);
        for (var vLN0189 = 0; vLN0189 < v1316; vLN0189++) {
          this.Ni(p1234);
        }
        ;
        v1316 = this.Ii(p1234);
        for (var vLN0190 = 0; vLN0190 < v1316; vLN0190++) {
          this.Oi(p1234);
        }
        ;
        v1316 = this.Ii(p1234);
        for (var vLN0191 = 0; vLN0191 < v1316; vLN0191++) {
          this.Pi(p1234);
        }
        ;
        v1316 = this.Ii(p1234);
        for (var vLN0192 = 0; vLN0192 < v1316; vLN0192++) {
          this.Qi(p1234);
        }
        ;
        if (v1317 > 0) {
          this.Ri(p1234);
        }
        this.Mh.Si(v1317, v1318);
      };
      f138.prototype.Mi = function (p1235) {
        var v1319 = new vO37.Ui.Ti();
        v1319.Je = p1235.La();
        v1319.mi = this.Mh.Qh.eh === vO37.jd.id ? p1235.Ka() : vO37.dh.jh;
        v1319.ni = p1235.La();
        v1319.Vi = p1235.La();
        v1319.Wi = p1235.La();
        v1319.Xi = p1235.La();
        v1319.Yi = p1235.La();
        for (var v1320 = p1235.Ka(), v1321 = vO47.a("b6"), vLN0193 = 0; vLN0193 < v1320; vLN0193++) {
          v1321 += String.fromCharCode(p1235.La());
        }
        ;
        v1319.Xa = v1321;
        if (this.Mh.Qh.fh === v1319.Je && vF52(v1319.Xa) || vF52(v1319.Xa)) {
          let vVF50 = vF50(v1319.Xa);
          v1319.ni = v1319.ni + vVF50.a;
          if (vF51(v1319.Vi)) {
            v1319.Vi = vVF50.b;
          }
          if (vF51(v1319.Wi)) {
            v1319.Wi = vVF50.c;
          }
          if (vF51(v1319.Xi)) {
            v1319.Xi = vVF50.d;
          }
          if (vF51(v1319.Yi)) {
            v1319.Yi = vVF50.e;
          }
        }
        ;
        v1319.Xa = v1321;
        if (this.Mh.Qh.fh === v1319.Je) {
          v1319.Xa = vF53(v1319.Xa);
          vO49.m = this.Mh.Lh;
          vO49.n = v1319;
          vO49.m.Zi(vO49.n);
        } else {
          v1319.Xa = vF53(v1319.Xa);
          var v1322 = this.Mh.li[v1319.Je];
          if (v1322 != null) {
            v1322.$i();
          }
          var v1323 = new vO37.Ui(this.Mh.Qh);
          v1323._i(ooo.Xg.Kf.Wg);
          this.Mh.li[v1319.Je] = v1323;
          v1323.Zi(v1319);
        }
      };
      f138.prototype.Ni = function (p1236) {
        var v1324 = p1236.La();
        var v1325 = p1236.Ka();
        var v1326 = !!(v1325 & 1);
        var vLN0194 = 0;
        if (v1326) {
          vLN0194 = p1236.La();
        }
        var v1327 = this.aj(v1324);
        if (f(v1327) !== vO47.a("e76d873e0e7a04308a44") && (v1327.bj = false, v1327.cj)) {
          var v1328 = this.aj(v1324);
          if (v1326 && f(v1328) !== vO47.a("898f65d86898e6aef466") && v1328.cj) {
            if (vLN0194 === this.Mh.Qh.fh) {
              var v1329 = this.Mh.Lh.Oh();
              var v1330 = v1327.dj(v1329._a, v1329.ab);
              vO47.ia(0, 1 - v1330.ej / (this.Mh.Nh * 0.5));
              if (v1330.ej < this.Mh.Nh * 0.5) {
                ooo.Xg.Kf.Wg.Dh.Vg(!!(v1325 & 2));
              }
            } else if (v1324 === this.Mh.Qh.fh) ;else {
              var v1331 = this.Mh.Lh.Oh();
              var v1332 = v1327.dj(v1331._a, v1331.ab);
              vO47.ia(0, 1 - v1332.ej / (this.Mh.Nh * 0.5));
            }
          } else if (v1324 === this.Mh.Qh.fh) ;else {
            var v1333 = this.Mh.Lh.Oh();
            var v1334 = v1327.dj(v1333._a, v1333.ab);
            vO47.ia(0, 1 - v1334.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      f138.prototype.Qi = function (p1237) {
        var v1335 = p1237.La();
        var v1336 = v1335 === this.Mh.Qh.fh ? null : this.Mh.li[v1335];
        var v1337 = p1237.Ka();
        var v1338 = !!(v1337 & 1);
        if (v1337 & 2) {
          var v1339 = p1237.Na();
          if (v1336) {
            v1336.fj(v1339);
          }
        }
        ;
        var v1340 = this.gj(p1237.Ka(), p1237.Ka(), p1237.Ka());
        var v1341 = this.gj(p1237.Ka(), p1237.Ka(), p1237.Ka());
        if (v1336) {
          v1336.hj(v1340, v1341, v1338);
          var v1342 = this.Mh.Lh.Oh();
          var v1343 = v1336.Oh();
          var v1344 = vO47.ia(0, 1 - vO47.la(v1342._a - v1343._a, v1342.ab - v1343.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(v1344, v1335, v1338);
        }
        ;
        var v1345 = this.Ii(p1237);
        if (v1336) {
          for (var v1346 in v1336.Nd) {
            var v1347 = v1336.Nd[v1346];
            if (v1347) {
              v1347.Rd = false;
            }
          }
        }
        ;
        for (var vLN0195 = 0; vLN0195 < v1345; vLN0195++) {
          var v1348 = p1237.Ka();
          var v1349 = p1237.Ka();
          if (v1336) {
            var v1350 = v1336.Nd[v1348];
            v1350 ||= v1336.Nd[v1348] = new vO37.Pd(v1348);
            v1350.Rd = true;
            v1350.Xd = vO47.ha(1, vO47.ia(0, v1349 / 100));
          }
        }
      };
      f138.prototype.Ri = function (p1238) {
        var v1351 = this.Mh.Lh;
        var v1352 = p1238.Ka();
        var v1353 = !!(v1352 & 1);
        if (v1352 & 2) {
          var v1354 = v1351.hi;
          v1351.fj(p1238.Na());
          if ((v1354 = v1351.hi - v1354) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(v1354);
          }
        }
        ;
        if (v1352 & 4) {
          this.Mh.jj = p1238.Na();
        }
        var v1355 = this.gj(p1238.Ka(), p1238.Ka(), p1238.Ka());
        var v1356 = this.gj(p1238.Ka(), p1238.Ka(), p1238.Ka());
        v1351.hj(v1355, v1356, v1353);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, v1353);
        var v1357 = this.Ii(p1238);
        for (var v1358 in v1351.Nd) {
          var v1359 = v1351.Nd[v1358];
          if (v1359) {
            v1359.Rd = false;
          }
        }
        ;
        for (var vLN0196 = 0; vLN0196 < v1357; vLN0196++) {
          var v1360 = p1238.Ka();
          var v1361 = p1238.Ka();
          var v1362 = v1351.Nd[v1360];
          if (!v1362) {
            v1362 = new vO37.Pd(v1360);
            v1351.Nd[v1360] = v1362;
          }
          v1362.Rd = true;
          v1362.Xd = vO47.ha(1, vO47.ia(0, v1361 / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(v1351.Nd);
      };
      f138.prototype.Oi = function (p1239) {
        var vThis55 = this;
        var v1363 = p1239.La();
        var v1364 = this.aj(v1363);
        var v1365 = p1239.Na();
        var v1366 = this.Ii(p1239);
        if (v1364) {
          v1364.fj(v1365);
          v1364.kj(function () {
            return vThis55.gj(p1239.Ka(), p1239.Ka(), p1239.Ka());
          }, v1366);
          v1364.Td(true);
          var v1367 = this.Mh.Lh.Oh();
          var v1368 = v1364.Oh();
          var v1369 = vO47.ia(0, 1 - vO47.la(v1367._a - v1368._a, v1367.ab - v1368.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(v1369, v1363);
        } else {
          for (var vLN0197 = 0; vLN0197 < v1366 * 6; vLN0197++) {
            p1239.Ka();
          }
        }
      };
      f138.prototype.Pi = function (p1240) {
        var v1370 = p1240.La();
        var v1371 = this.Mh.li[v1370];
        if (v1371 && v1371.bj) {
          v1371.Td(false);
        }
        ooo.ij.Ff(v1370);
      };
      f138.prototype.Ji = function (p1241) {
        var v1372 = new vO37.lj.Ti();
        v1372.Je = p1241.Ma();
        v1372.mi = this.Mh.Qh.eh === vO37.jd.id ? p1241.Ka() : vO37.dh.jh;
        v1372.mj = this.gj(p1241.Ka(), p1241.Ka(), p1241.Ka());
        v1372.ni = p1241.Ka();
        var v1373 = this.Mh.nj[v1372.Je];
        if (v1373 != null) {
          v1373.$i();
        }
        var v1374 = new vO37.lj(v1372, ooo.Xg.Kf.Wg);
        v1374.oj(this.pj(v1372.Je), this.qj(v1372.Je), true);
        this.Mh.nj[v1372.Je] = v1374;
      };
      f138.prototype.Ki = function (p1242) {
        var v1375 = p1242.Ma();
        var v1376 = this.Mh.nj[v1375];
        if (v1376) {
          v1376.rj = 0;
          v1376.sj = v1376.sj * 1.5;
          v1376.tj = true;
        }
      };
      f138.prototype.Li = function (p1243) {
        var v1377 = p1243.Ma();
        var v1378 = p1243.La();
        var v1379 = this.Mh.nj[v1377];
        if (v1379) {
          v1379.rj = 0;
          v1379.sj = v1379.sj * 0.1;
          v1379.tj = true;
          var v1380 = this.aj(v1378);
          if (v1380 && v1380.cj) {
            this.Mh.Qh.fh;
            var v1381 = v1380.Oh();
            v1379.oj(v1381._a, v1381.ab, false);
          }
        }
      };
      var vA24 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f138.prototype.Ci = function (p1244) {
        var v1382 = ooo.ud.Ic().oc;
        var v1383 = v1382.getImageData(0, 0, 80, 80);
        var v1384 = vA24[0];
        var v1385 = 80 - v1384;
        var vLN0198 = 0;
        for (var vLN0199 = 0; vLN0199 < 628; vLN0199++) {
          var v1386 = p1244.Ka();
          for (var vLN0200 = 0; vLN0200 < 8; vLN0200++) {
            var v1387 = (v1384 + vLN0198 * 80) * 4;
            if ((v1386 >> vLN0200 & 1) != 0) {
              v1383.data[v1387] = 255;
              v1383.data[v1387 + 1] = 255;
              v1383.data[v1387 + 2] = 255;
              v1383.data[v1387 + 3] = 255;
            } else {
              v1383.data[v1387 + 3] = 0;
            }
            if (++v1384 >= v1385 && ++vLN0198 < 80) {
              v1385 = 80 - (v1384 = vA24[vLN0198]);
            }
          }
        }
        ;
        v1382.putImageData(v1383, 0, 0);
        var v1388 = ooo.Xg.Kf.Wg.Ah.Yh;
        v1388.texture = ooo.ud.Ic().Za;
        v1388.texture.update();
      };
      f138.prototype.Ei = function (p1245) {
        p1245.Ma();
      };
      f138.prototype.Fi = function (p1246) {
        this.Mh.uj();
      };
      f138.prototype.Di = function (p1247) {
        this.Mh.ei = p1247.La();
        this.Mh.oi = p1247.La();
        var v1389 = new vO37.vj();
        v1389.ii = [];
        for (var v1390 = p1247.Ka(), vLN0201 = 0; vLN0201 < v1390; vLN0201++) {
          var v1391 = p1247.La();
          var v1392 = p1247.Na();
          v1389.ii.push(vO37.vj.wj(v1391, v1392));
        }
        ;
        v1389.fi = [];
        if (this.Mh.Qh.eh === vO37.jd.id) {
          for (var v1393 = p1247.Ka(), vLN0202 = 0; vLN0202 < v1393; vLN0202++) {
            var v1394 = p1247.Ka();
            var v1395 = p1247.Na();
            v1389.fi.push(vO37.vj.xj(v1394, v1395));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(v1389);
      };
      f138.prototype.aj = function (p1248) {
        if (p1248 === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[p1248];
        }
      };
      f138.prototype.gj = function (p1249, p1250, p1251) {
        return (((p1251 & 255 | p1250 << 8 & 65280 | p1249 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f138.prototype.pj = function (p1252) {
        return ((p1252 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f138.prototype.qj = function (p1253) {
        return ((p1253 >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f138.prototype.Ii = function (p1254) {
        var v1396 = p1254.Ka();
        if ((v1396 & 128) == 0) {
          return v1396;
        }
        ;
        var v1397 = p1254.Ka();
        if ((v1397 & 128) == 0) {
          return v1397 | v1396 << 7 & 16256;
        }
        ;
        var v1398 = p1254.Ka();
        if ((v1398 & 128) == 0) {
          return v1398 | v1397 << 7 & 16256 | v1396 << 14 & 2080768;
        }
        ;
        var v1399 = p1254.Ka();
        if ((v1399 & 128) == 0) {
          return v1399 | v1398 << 7 & 16256 | v1397 << 14 & 2080768 | v1396 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return f138;
    }();
    vO37.yj = function () {
      function f139(p1255) {
        this.zj = p1255;
      }
      f139.Aj = function () {
        return new vO37.yj(null);
      };
      f139.Bj = function (p1256) {
        return new vO37.yj(p1256);
      };
      f139.prototype.Mc = function () {
        return this.zj;
      };
      f139.prototype.Cj = function () {
        return this.zj != null;
      };
      f139.prototype.Dj = function (p1257) {
        if (this.zj != null) {
          p1257(this.zj);
        }
      };
      return f139;
    }();
    vO37.lj = function () {
      function f140(p1258, p1259) {
        this.ki = p1258;
        this.Ej = p1258.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : p1258.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = vO46.S * vO47.ma();
        this.Nj = new vO37.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === vO37.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        p1259.Vh(p1258.Je, this.Nj);
      }
      f140.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      f140.prototype.oj = function (p1260, p1261, p1262) {
        this.Fj = p1260;
        this.Gj = p1261;
        if (p1262) {
          this.Hj = p1260;
          this.Ij = p1261;
        }
      };
      f140.prototype.Pj = function (p1263, p1264) {
        var v1400 = vO47.ha(0.5, this.sj * 1);
        var v1401 = vO47.ha(2.5, this.sj * 1.5);
        this.Jj = vO47.ga(this.Jj, v1400, p1264, 0.0025);
        this.Kj = vO47.ga(this.Kj, v1401, p1264, 0.0025);
        this.Lj = vO47.ga(this.Lj, this.rj, p1264, 0.0025);
      };
      f140.prototype.Qj = function (p1265, p1266, p1267) {
        this.Hj = vO47.ga(this.Hj, this.Fj, p1266, 0.0025);
        this.Ij = vO47.ga(this.Ij, this.Gj, p1266, 0.0025);
        this.Nj.Bg(this, p1265, p1266, p1267);
      };
      f140.Ti = function f141() {
        this.Je = 0;
        this.mi = vO37.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return f140;
    }();
    vO37.Oj = function () {
      function f142() {
        this.Wh = new vF55(new vO37.bd(), new vO37.bd());
        this.Wh.md.gd.blendMode = vO48.k.w.z;
        this.Wh.md.gd.zIndex = vLN1002;
        this.Wh.ld.gd.zIndex = vLN5002;
      }
      var vLN5002 = 500;
      var vLN1002 = 100;
      f142.prototype.hd = function (p1268, p1269, p1270) {
        var v1402 = p1270.dc;
        if (v1402 != null) {
          this.Wh.ld.kd(v1402);
        }
        var v1403 = p1268 === vO37.jd.id && p1269 != null ? p1269.bc.ec : p1270.ec;
        if (v1403 != null) {
          this.Wh.md.kd(v1403);
        }
      };
      f142.prototype.Bg = function (p1271, p1272, p1273, p1274) {
        if (!p1274(p1271.Hj, p1271.Ij)) {
          this.Wh.Cd();
          return;
        }
        ;
        var v1404 = p1271.Kj * (1 + vO47.pa(p1271.Mj + p1272 / 200) * 0.3);
        if (p1271.Ej) {
          this.Wh.Ad(p1271.Hj, p1271.Ij, (1 + vO50.z * 0.2) * 2 * p1271.Jj, p1271.Lj * 1, (1 + vO50.z * 0.2) * 1.2 * v1404, p1271.Lj * 0.8);
        } else {
          this.Wh.Ad(p1271.Hj, p1271.Ij, p1271.Jj * 2, p1271.Lj * 1, v1404 * 2, p1271.Lj * 0.3);
        }
      };
      var vF55 = function () {
        function f143(p1275, p1276) {
          this.ld = p1275;
          this.md = p1276;
        }
        f143.prototype.Ad = function (p1277, p1278, p1279, p1280, p1281, p1282) {
          this.ld.Td(true);
          this.ld.Ud(p1277, p1278);
          this.ld.Bd(p1279);
          this.ld.Rj(p1280);
          this.md.Td(true);
          this.md.Ud(p1277, p1278);
          this.md.Bd(p1281);
          this.md.Rj(p1282);
        };
        f143.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return f143;
      }();
      return f142;
    }();
    vO37.Sj = function () {
      function f144() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function f145(p1283, p1284) {
        for (var vLN0203 = 0; vLN0203 < p1283.length; vLN0203++) {
          if (parseInt(p1283[vLN0203][vO47.a("455fa3")]) === p1284) {
            return vLN0203;
          }
        }
        ;
        return -1;
      }
      f144.prototype.Sa = function () {};
      f144.prototype.Zj = function (p1285) {
        if (!vO50.loading) {
          vO50.pm = {
            ...this
          };
          localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
        }
        switch (p1285) {
          case vO37._j.$j:
            return this.Tj;
          case vO37._j.ak:
            return this.Uj;
          case vO37._j.bk:
            return this.Vj;
          case vO37._j.ck:
            return this.Wj;
          case vO37._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      f144.prototype.ek = function () {
        return new vO37.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f144.prototype.fk = function (p1286) {
        this.Yj.push(p1286);
        this.gk();
      };
      f144.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return vO47.wa([32, 33, 34, 35]);
        }
        ;
        var vA25 = [];
        for (var v1405 = ooo.ud.Gc()[vO47.a("1f234afbcd15d7e446216df3c828")], vLN0204 = 0; vLN0204 < v1405.length; vLN0204++) {
          var v1406 = v1405[vLN0204];
          if (this.ik(v1406[vO47.a("439d21")], vO37._j.$j)) {
            vA25.push(v1406);
          }
        }
        ;
        if (vA25.length === 0) {
          return 0;
        } else {
          return vA25[parseInt(vA25.length * vO47.ma())][vO47.a("d8c07e")];
        }
      };
      f144.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var v1407 = ooo.ud.Gc()[vO47.a("c141289d2b77b58aa8430f952e4a")];
          var vF145 = f145(v1407, this.Tj);
          if (!(vF145 < 0)) {
            for (var v1408 = vF145 + 1; v1408 < v1407.length; v1408++) {
              if (this.ik(v1407[v1408][vO47.a("0a72a8")], vO37._j.$j) && v1407[v1408].g !== true) {
                this.Tj = v1407[v1408][vO47.a("21fbc7")];
                this.gk();
                return;
              }
            }
            ;
            for (var vLN0205 = 0; vLN0205 < vF145; vLN0205++) {
              if (this.ik(v1407[vLN0205][vO47.a("e7718d")], vO37._j.$j) && v1407[vLN0205].g !== true) {
                this.Tj = v1407[vLN0205][vO47.a("9e4604")];
                this.gk();
                return;
              }
            }
          }
        }
      };
      f144.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var v1409 = ooo.ud.Gc()[vO47.a("1a58b74470ee92c3434aa05c45c3")];
          var vF1452 = f145(v1409, this.Tj);
          if (!(vF1452 < 0)) {
            for (var v1410 = vF1452 - 1; v1410 >= 0; v1410--) {
              if (this.ik(v1409[v1410][vO47.a("8830ae")], vO37._j.$j) && v1409[v1410].g !== true) {
                this.Tj = v1409[v1410][vO47.a("29f3cf")];
                this.gk();
                return;
              }
            }
            ;
            for (var v1411 = v1409.length - 1; v1411 > vF1452; v1411--) {
              if (this.ik(v1409[v1411][vO47.a("07516d")], vO37._j.$j) && v1409[v1411].g !== true) {
                this.Tj = v1409[v1411][vO47.a("156ff3")];
                this.gk();
                return;
              }
            }
          }
        }
      };
      f144.prototype.lk = function (p1287, p1288) {
        if (!ooo.ud.Fc() || this.ik(p1287, p1288)) {
          switch (p1288) {
            case vO37._j.$j:
              if (this.Tj !== p1287) {
                this.Tj = p1287;
                this.gk();
              }
              return;
            case vO37._j.ak:
              if (this.Uj !== p1287) {
                this.Uj = p1287;
                this.gk();
              }
              return;
            case vO37._j.bk:
              if (this.Vj !== p1287) {
                this.Vj = p1287;
                this.gk();
              }
              return;
            case vO37._j.ck:
              if (this.Wj !== p1287) {
                this.Wj = p1287;
                this.gk();
              }
              return;
            case vO37._j.dk:
              if (this.Xj !== p1287) {
                this.Xj = p1287;
                this.gk();
              }
              return;
          }
        }
      };
      f144.prototype.ik = function (p1289, p1290) {
        var v1412 = this.mk(p1289, p1290);
        return v1412 != null && (ooo.ok.nk() ? v1412.pk() === 0 && !v1412.qk() || ooo.ok.rk(p1289, p1290) : v1412.sk());
      };
      f144.prototype.mk = function (p1291, p1292) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v1413 = ooo.ud.Gc();
        if (p1292 === vO37._j.$j) {
          var vF1453 = f145(v1413[vO47.a("d614f300b4aaee9fbf16e4188187")], p1291);
          if (vF1453 < 0) {
            return null;
          } else {
            return vO37.uk.tk(v1413[vO47.a("64c6cd5e0678d8c90dc4ea561335")][vF1453]);
          }
        }
        ;
        var v1414 = null;
        switch (p1292) {
          case vO37._j.ak:
            v1414 = v1413[vO47.a("9deb663552d6ca37d1")][p1291];
            break;
          case vO37._j.bk:
            v1414 = v1413[vO47.a("209c0d06501d229e4b8d")][p1291];
            break;
          case vO37._j.ck:
            v1414 = v1413[vO47.a("3f1820c6871da6c2")][p1291];
            break;
          case vO37._j.dk:
            v1414 = v1413[vO47.a("5521bb69aa393e7f1927bc64")][p1291];
        }
        ;
        if (v1414 != null) {
          return vO37.uk.vk(v1414);
        } else {
          return null;
        }
      };
      f144.prototype.gk = function () {
        for (var vLN0206 = 0; vLN0206 < this.Yj.length; vLN0206++) {
          this.Yj[vLN0206]();
        }
      };
      return f144;
    }();
    vO37._j = function () {
      function f146() {}
      f146.$j = vO47.a("385a31c272");
      f146.ak = vO47.a("30442bc667");
      f146.bk = vO47.a("fbe1b2bb2bf8");
      f146.dk = vO47.a("71a5bfe5a6b532fb");
      f146.ck = vO47.a("5d069e44");
      return f146;
    }();
    vO37.wk = function () {
      function f147() {
        this.fn_o = f148;
        this.ig = new vO48.k.n(vO48.k.m.from(vO47.a("d5e93ee538adbefff2ac38bd0eb090e084b50bfd47aa85fb")));
        this.F_bg = new vO48.k.n(f148());
        var v1415;
        var v1416;
        var v1417;
        var v1418;
        var v1419 = vO48.k.m.from(atob(v946[23]) || vO46.H.N);
        var v1420 = new vO48.k.n(v1419, new vO48.k.r(0, 0, 256, 256));
        var v1421 = new vO48.k.n(v1419, new vO48.k.r(0, 0, 256, 256));
        this.jg = Array(16);
        for (var vLN0207 = 0; vLN0207 < this.jg.length; vLN0207++) {
          this.jg[vLN0207] = vLN0207 % 2 == 0 ? v1420 : v1421;
        }
        ;
        this.Ih = new vO48.k.n(((v1415 = vO48.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO48.k.C.D, v1415));
        this.Jh = new vO48.k.n(((v1416 = vO48.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vO48.k.C.D, v1416));
        this.Gh = new vO48.k.n(vO48.k.m.from(vO47.a("66d841940b1c490e4193556f01ad44eb11")));
        this.$f = new vO48.k.n(((v1417 = vO48.k.m.from(vO46.H.O)).wrapMode = vO48.k.C.D, v1417));
        this.mc = ((v1418 = vO37.d.createElement(vO47.a("d9293a622b2fac"))).width = 80, v1418.height = 80, {
          nc: v1418,
          oc: v1418[vO47.a("1d69faa4e27d4da0406ed3")](vO47.a("9b7ef9")),
          Za: new vO48.k.n(vO48.k.m[vO47.a("584fe8c431")](v1418))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function f148(p1293) {
        (p1293 = vO48.k.m.from(p1293 || vO50.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO48.k.C.D;
        return p1293;
      }
      f147.prototype.Sa = function (p1294) {
        function f149() {
          if (--vLN44 == 0) {
            p1294();
          }
        }
        var vLN44 = 4;
        this.hf = {};
        f149();
        this.df = {};
        f149();
        this.xk = [];
        f149();
        this.yk = null;
        f149();
      };
      return f147;
    }();
    vO37.zk = function () {
      function f150() {
        this.Ak = null;
        this.Kf = new vO37.Bk();
        this.Jf = new vO37.Ck();
        this.Dk = new vO37.Ek();
        this.Fk = new vO37.Gk();
        this.Hk = new vO37.Ik();
        this.Jk = new vO37.Kk();
        this.Lk = new vO37.Mk();
        this.Nk = new vO37.Ok();
        this.Hi = new vO37.Pk();
        this.Qk = new vO37.Rk();
        this.Sk = new vO37.Tk();
        this.Uk = new vO37.Vk();
        this.Wk = new vO37.Xk();
        this.Yk = new vO37.Zk();
        this.Re = new vO37.$k();
        this._k = new vO37.al();
        this.bl = new vO37.cl();
        this.dl = new vO37.el();
        this.fl = [];
      }
      function f151(p1295, p1296) {
        if (p1296 !== p1295.length + 1) {
          var v1422 = p1295[p1296];
          vO47.ua(p1295, p1296 + 1, p1296, p1295.length - p1296 - 1);
          p1295[p1295.length - 1] = v1422;
        }
      }
      f150.prototype.Sa = function () {
        this.Ak = new vO37.Nf(vO37.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var vLN0208 = 0; vLN0208 < this.fl.length; vLN0208++) {
          this.fl[vLN0208].Sa();
        }
      };
      f150.prototype.Uh = function (p1297, p1298) {
        for (var v1423 = this.fl.length - 1; v1423 >= 0; v1423--) {
          this.fl[v1423].ug(p1297, p1298);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(p1297, p1298);
        }
      };
      f150.prototype.qg = function () {
        for (var v1424 = this.fl.length - 1; v1424 >= 0; v1424--) {
          this.fl[v1424].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      f150.prototype.gl = function (p1299) {
        var vF60 = function f152(p1300, p1301) {
          for (var vLN0209 = 0; vLN0209 < p1300.length; vLN0209++) {
            if (p1300[vLN0209] === p1301) {
              return vLN0209;
            }
          }
          ;
          return -1;
        }(this.fl, p1299);
        if (!(vF60 < 0)) {
          this.fl[0].hl();
          (function f153(p1302, p1303) {
            if (p1303 !== 0) {
              var v1425 = p1302[p1303];
              vO47.ua(p1302, 0, 1, p1303);
              p1302[0] = v1425;
            }
          })(this.fl, vF60);
          this.il();
        }
      };
      f150.prototype.jl = function () {
        this.fl[0].hl();
        do {
          f151(this.fl, 0);
        } while (this.fl[0].Wd !== vO37.ll.kl);
        ;
        this.il();
      };
      f150.prototype.il = function () {
        var v1426 = this.fl[0];
        v1426.ml();
        v1426.nl();
        this.ol();
      };
      f150.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === vO37.ll.kl && this.Yk.ql();
      };
      f150.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      f150.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return f150;
    }();
    vO37.vj = function () {
      function f154() {
        this.ii = [];
        this.fi = [];
      }
      f154.wj = function (p1304, p1305) {
        return {
          ji: p1304,
          hi: p1305
        };
      };
      f154.xj = function (p1306, p1307) {
        return {
          gi: p1306,
          hi: p1307
        };
      };
      return f154;
    }();
    vO37.sl = function () {
      function f155() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = v1427;
        this.xl = {};
      }
      var v1427 = vO47.a("64d2d3521b4d");
      var v1428 = vO47.a("2c1a1b9a4375");
      var v1429 = vO47.a("0bda6f");
      var v1430 = vO47.a("6b7b0a");
      f155.yl = new (function () {
        function f156() {}
        f156.zl = function f157(p1308) {
          this.Al = p1308;
        };
        f156.prototype.Bl = function () {
          return vO47.a("5d3bb17484340a7a0032") != (typeof FB == "undefined" ? "undefined" : f(FB));
        };
        f156.prototype.Cl = function (p1309, p1310, p1311) {
          var v1431 = vO47.a("6851decf1cce94105f26c0a204ad9821192adfa913a2d561e33eaffce9b0") + vO47.a("929c35c6f5422b5ac5df33c6fb415d") + p1309;
          $.get(v1431).fail(function () {
            p1310();
          }).done(function () {
            p1311();
          });
        };
        f156.prototype.Dl = function (p1312, p1313) {
          if (!this.Bl()) {
            p1312();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (p1314) {
              if (p1314.status !== vO47.a("a2d00bdbc8520b4dcfdf")) {
                p1312();
                return;
              }
              ;
              var v1432 = p1314.authResponse.accessToken;
              p1313(new f156.zl(v1432));
            });
          }, function (p1315) {
            p1313(p1315);
          });
        };
        f156.prototype.El = function (p1316, p1317) {
          var vThis56 = this;
          if (!this.Bl()) {
            p1316();
            return;
          }
          ;
          FB.getLoginStatus(function (p1318) {
            if (p1318.status !== vO47.a("e0d24d5d8a5045c38ddd")) {
              p1316();
              return;
            }
            ;
            var v1433 = p1318.authResponse.accessToken;
            vThis56.Cl(v1433, function () {
              p1316();
            }, function () {
              p1317(new f156.zl(v1433));
            });
          });
        };
        f156.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return f156;
      }())();
      f155.Gl = new (function () {
        function f158() {}
        f158.Hl = function f159(p1319, p1320) {
          this.Al = p1319;
          this.Il = p1320;
        };
        f158.prototype.Bl = function () {
          return vO47.a("34f018635d6f13e559e9") != f(v);
        };
        f158.prototype.Dl = function (p1321, p1322) {
          if (vO47.a("074d671eee5ae4106a24") == f(v)) {
            p1321();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var v1434 = v.currentUser.get();
              var v1435 = v1434.getAuthResponse().id_token;
              var v1436 = new Date().getTime() + v1434.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v1436) {
                p1322(new f158.Hl(v1435, v1436));
                return;
              }
            }
            ;
            v.signIn().then(function (p1323) {
              if (vO47.a("c46068f3adff6375a979") !== f(p1323.error) || !p1323.isSignedIn()) {
                p1321();
                return;
              }
              ;
              var v1437 = p1323.getAuthResponse().id_token;
              var v1438 = new Date().getTime() + p1323.getAuthResponse().expires_in * 1000;
              p1322(new f158.Hl(v1437, v1438));
            });
          });
        };
        f158.prototype.El = function (p1324, p1325) {
          if (vO47.a("c1472d902050ae96ac5e") == f(v)) {
            p1324();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var v1439 = v.currentUser.get();
              var v1440 = v1439.getAuthResponse().id_token;
              var v1441 = new Date().getTime() + v1439.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v1441) {
                p1325(new f158.Hl(v1440, v1441));
                return;
              }
            }
            ;
            p1324();
          });
        };
        f158.prototype.Fl = function () {
          if (vO47.a("4ce8e07b3547fbcd31c1") != f(v)) {
            v.signOut();
          }
        };
        return f158;
      }())();
      f155.prototype.Sa = function () {
        this.Jl();
      };
      f155.prototype.Kl = function () {
        if (this.vl) {
          return this.xl[vO47.a("cf75a227214d31")];
        } else {
          return vO47.a("02");
        }
      };
      f155.prototype.Ll = function () {
        if (this.vl) {
          return this.xl[vO47.a("e76d9a3f19720c338a")];
        } else {
          return vO47.a("23");
        }
      };
      f155.prototype.Ml = function () {
        if (this.vl) {
          return this.xl[vO47.a("d0cf7b40bf4b77cabd")];
        } else {
          return vO47.a("22");
        }
      };
      f155.prototype.Nl = function () {
        if (this.vl) {
          return this.xl[vO47.a("ef418703074507338544")];
        } else {
          return vO46.H.M;
        }
      };
      f155.prototype.Ol = function () {
        return this.vl && this.xl[vO47.a("26de9bfb5f42894f")];
      };
      f155.prototype.Pl = function () {
        return this.vl && this.xl[vO47.a("d923284f3220ac758f26247d133389")];
      };
      f155.prototype.Ql = function () {
        if (this.vl) {
          return this.xl[vO47.a("c5d5281127c9")];
        } else {
          return 0;
        }
      };
      f155.prototype.Rl = function () {
        if (this.vl) {
          return this.xl[vO47.a("d0cd7755b149")];
        } else {
          return 1;
        }
      };
      f155.prototype.Sl = function () {
        if (this.vl) {
          return this.xl[vO47.a("feeab8e14d7d887070f2a4")];
        } else {
          return 0;
        }
      };
      f155.prototype.Tl = function () {
        if (this.vl) {
          return this.xl[vO47.a("24101e877c96241e5409")];
        } else {
          return 50;
        }
      };
      f155.prototype.Ul = function () {
        if (this.vl) {
          return this.xl[vO47.a("b5d55c0157e3df")];
        } else {
          return 0;
        }
      };
      f155.prototype.Vl = function () {
        if (this.vl) {
          return this.xl[vO47.a("6e9a496401ca50")];
        } else {
          return 0;
        }
      };
      f155.prototype.Wl = function () {
        if (this.vl) {
          return this.xl[vO47.a("5844f5de28c5d74b")];
        } else {
          return 0;
        }
      };
      f155.prototype.Xl = function () {
        if (this.vl) {
          return this.xl[vO47.a("4a3c603c3dac75921b07")];
        } else {
          return 0;
        }
      };
      f155.prototype.Yl = function () {
        if (this.vl) {
          return this.xl[vO47.a("06ffa9ed437f")];
        } else {
          return 0;
        }
      };
      f155.prototype.Zl = function () {
        if (this.vl) {
          return this.xl[vO47.a("21faca33cdc544375bff")];
        } else {
          return 0;
        }
      };
      f155.prototype.$l = function () {
        if (this.vl) {
          return this.xl[vO47.a("cab9e9aeba0ce513a48ae284ba33f104bfb8f98e")];
        } else {
          return 0;
        }
      };
      f155.prototype._l = function () {
        if (this.vl) {
          return this.xl[vO47.a("b783d046579f")];
        } else {
          return 0;
        }
      };
      f155.prototype.am = function () {
        if (this.vl) {
          return this.xl[vO47.a("c31ca0d7232b21d5bf0f")];
        } else {
          return 0;
        }
      };
      f155.prototype.bm = function () {
        if (this.vl) {
          return this.xl[vO47.a("9b3ff8fd6c394efcd004c9f75e3d4d")];
        } else {
          return 0;
        }
      };
      f155.prototype.cm = function () {
        if (this.vl) {
          return this.xl[vO47.a("6045cdc705d9f65b0940fed201d8fd5a13")];
        } else {
          return 0;
        }
      };
      f155.prototype.dm = function () {
        if (this.vl) {
          return this.xl[vO47.a("13b67061d3a9ed6f")];
        } else {
          return {};
        }
      };
      f155.prototype.em = function (p1326) {
        this.tl.push(p1326);
        p1326();
      };
      f155.prototype.fm = function (p1327) {
        this.ul.push(p1327);
        p1327();
      };
      f155.prototype.rk = function (p1328, p1329) {
        var v1442 = this.xl[vO47.a("e92a19731d3b9d54882e1a5701")].concat(vO50.pL || []);
        if (v1442 == null) {
          return false;
        }
        ;
        for (v1428 = 0; v1428 < v1442.length; v1428++) {
          var v1443 = v1442[v1428];
          if (v1443[vO47.a("ae5614")] == p1328 && v1443[vO47.a("b0f58b73d1")] === p1329) {
            return true;
          }
        }
        ;
        return false;
      };
      f155.prototype.nk = function () {
        return this.vl;
      };
      f155.prototype.gm = function () {
        return this.wl;
      };
      f155.prototype.hm = function (p1330) {
        var vThis57 = this;
        var v1444 = this.Kl();
        var v1445 = this.Ql();
        var v1446 = this.Rl();
        this.im(function () {
          if (p1330 != null) {
            p1330();
          }
        }, function (p1331) {
          vThis57.xl = p1331[vO47.a("f43045a28a965e2a882c")];
          vThis57.jm();
          var v1447 = vThis57.Kl();
          var v1448 = vThis57.Ql();
          var v1449 = vThis57.Rl();
          if (v1444 === v1447) {
            if (v1449 > 1 && v1449 !== v1446) {
              ooo.Xg.Yk.km(new vO37.lm(v1449));
            }
            var v1450 = v1448 - v1445;
            if (v1450 >= 20) {
              ooo.Xg.Yk.km(new vO37.mm(v1450));
            }
          }
          ;
          if (p1330 != null) {
            p1330();
          }
        });
      };
      f155.prototype.im = function (p1332, p1333) {
        var v1451 = vO46.H.J + vO47.a("d648e81cb8c4eb98b70b8f") + this.wl + vO47.a("adb1480545f7c001c7e2561c58");
        vO47.Aa(v1451, p1332, function (p1334) {
          if (p1334[vO47.a("d8ca754fb9")] !== 1200) {
            p1332();
          } else {
            p1333(p1334);
          }
        });
      };
      f155.prototype.nm = function (p1335, p1336, p1337, p1338) {
        var v1452 = vO46.H.J + vO47.a("4cb2fe6a320ee5d63dc1b9") + this.wl + vO47.a("3ee062a43b03763a36b27aad33") + vO47.a("33db5c428a") + p1335 + vO47.a("eaddd8849e1a8d") + p1336;
        vO47.Aa(v1452, function () {
          p1337();
        }, function (p1339) {
          if (p1339[vO47.a("9fb3ce7646")] !== 1200) {
            p1337();
          } else {
            p1338();
          }
        });
      };
      f155.prototype.om = function (p1340, p1341) {
        var v1453 = vO46.H.J + vO47.a("706ec2b616eac132112d95") + this.wl + vO47.a("17677deff729e9eb5e3342fdd63ad1");
        vO47.Aa(v1453, p1340, function (p1342) {
          if (p1342[vO47.a("72e05be113")] !== 1200) {
            p1340();
          } else {
            p1341();
          }
        });
      };
      f155.prototype.pm = function (p1343) {
        var vThis58 = this;
        if (this.vl) {
          this.qm();
        }
        f155.yl.Dl(function () {
          p1343();
        }, function (p1344) {
          vThis58.rm(v1429, p1344.Al, p1343);
        });
      };
      f155.prototype.sm = function (p1345) {
        var vThis59 = this;
        if (this.vl) {
          this.qm();
        }
        f155.Gl.Dl(function () {
          p1345();
        }, function (p1346) {
          vThis59.rm(v1430, p1346.Al, p1345);
        });
      };
      f155.prototype.rm = function (p1347, p1348, p1349) {
        var vThis60 = this;
        var v1454 = p1347 + vO47.a("c44a") + p1348;
        var v1455 = vO46.H.J + vO47.a("dde12fe503fd94e18cb248") + v1454 + vO47.a("5d61b37f863b0d");
        vO47.Aa(v1455, function () {
          vThis60.tm();
        }, function (p1350) {
          if (p1350[vO47.a("ae5c1f25d7")] !== 1200) {
            vThis60.tm();
          } else {
            vThis60.um(p1347, p1348, p1350[vO47.a("bddb4c1533eda715b1d7")]);
            if (p1349 != null) {
              p1349();
            }
          }
        });
      };
      f155.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (e48) {}
        ;
        this.xm();
      };
      f155.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      f155.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      f155.prototype.um = function (p1351, p1352, p1353) {
        var vThis61 = this;
        vF80(p1353, function (p1354) {
          var v1456 = vThis61.vl ? vThis61.xl[vO47.a("8d0b7c2563cbf7")] : p1354;
          vThis61.vl = true;
          vThis61.wl = p1351 + vO47.a("622c") + p1352;
          vThis61.xl = p1354;
          vO37.Cg.Ng(vO37.Cg.Hg, p1351, 60);
          if (v1456 !== vThis61.xl[vO47.a("08ac393e7e142a")]) {
            vThis61.zm();
          } else {
            vThis61.jm();
          }
          ooo.Xp(true, true);
          vO50.loading = false;
        });
      };
      f155.prototype.xm = function () {
        var v1457 = this.vl ? this.xl[vO47.a("2a4e9f585cf694")] : v1428;
        this.vl = false;
        this.wl = v1427;
        this.xl = {};
        vO37.Cg.Ng(vO37.Cg.Hg, vO47.a("ba"), 60);
        if (v1457 !== this.xl[vO47.a("e1271071171f83")]) {
          this.zm();
        } else {
          this.jm();
        }
      };
      f155.prototype.Jl = function () {
        var v1458 = vO37.Cg.Og(vO37.Cg.Hg);
        var vThis62 = this;
        if (v1429 === v1458) {
          var vLN112 = 1;
          (function f160() {
            if (!f155.yl.Bl() && vLN112++ < 5) {
              vO47.Y(f160, 1000);
              return;
            }
            ;
            f155.yl.El(function () {}, function (p1355) {
              vThis62.rm(v1429, p1355.Al);
            });
          })();
        } else if (v1430 === v1458) {
          var vLN113 = 1;
          (function f161() {
            if (!f155.Gl.Bl() && vLN113++ < 5) {
              vO47.Y(f161, 1000);
              return;
            }
            ;
            f155.Gl.El(function () {}, function (p1356) {
              vThis62.rm(v1430, p1356.Al);
            });
          })();
        }
      };
      f155.prototype.zm = function () {
        for (var vLN0210 = 0; vLN0210 < this.tl.length; vLN0210++) {
          this.tl[vLN0210]();
        }
        ;
        this.jm();
      };
      f155.prototype.jm = function () {
        for (var vLN0211 = 0; vLN0211 < this.ul.length; vLN0211++) {
          this.ul[vLN0211]();
        }
      };
      f155.prototype.vm = function () {
        f155.yl.Fl();
      };
      f155.prototype.wm = function () {
        f155.Gl.Fl();
      };
      return f155;
    }();
    vO37.Sf = function () {
      function f162(p1357, p1358, p1359) {
        this.Of = p1359;
        this.Rd = false;
        this.Yc = new vO48.k.l();
        this.Yc.visible = false;
        this.Am = Array(p1357);
        for (var vLN0212 = 0; vLN0212 < this.Am.length; vLN0212++) {
          var v1459 = new vO37.Bm(new vO48.j(p1358 * 3));
          v1459.Cm(p1358);
          this.Am[vLN0212] = v1459;
          this.Yc.addChild(v1459.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      f162.prototype.ag = function () {
        return this.Yc;
      };
      f162.prototype.rg = function (p1360) {
        this.Rd = p1360;
        this.Yc.visible = p1360;
      };
      f162.prototype.qg = function () {
        this.Pf = this.Of[vO47.a("69ad82f899b6")]();
        this.Qf = this.Of[vO47.a("3b845847d898b5")]();
        var v1460 = this.Qf / 30;
        for (var vLN0213 = 0; vLN0213 < this.Am.length; vLN0213++) {
          this.Am[vLN0213].Dm(v1460);
        }
      };
      f162.prototype.Bg = function () {
        if (this.Rd) {
          for (var vLN0214 = 0; vLN0214 < this.Am.length; vLN0214++) {
            this.Am[vLN0214].Bg(this.Vf);
          }
        }
      };
      f162.prototype.Em = function () {
        return this.Pf;
      };
      f162.prototype.Fm = function () {
        return this.Qf;
      };
      f162.prototype.xg = function (p1361, p1362) {
        this.Am[p1361].Gm(p1362);
      };
      f162.prototype.yg = function (p1363, p1364) {
        this.Am[p1363].Hm(p1364);
      };
      f162.prototype.zg = function (p1365, p1366, p1367) {
        var v1461 = this.Am[p1365];
        for (var v1462 = v1461.Im(), v1463 = v1461.Jm, vLN0215 = 0; vLN0215 < v1462; vLN0215++) {
          v1463[vLN0215 * 3] = p1366;
          v1463[vLN0215 * 3 + 1] = p1367;
          v1463[vLN0215 * 3 + 2] = 0;
        }
      };
      f162.prototype.Ag = function (p1368, p1369, p1370) {
        var v1464;
        var v1465;
        var v1466 = this.Am[p1368];
        var v1467 = v1466.Im();
        var v1468 = v1466.Jm;
        var v1469 = v1466.Km();
        var v1470 = v1468[0];
        var v1471 = v1468[1];
        var v1472 = p1369 - v1470;
        var v1473 = p1370 - v1471;
        var v1474 = vO47.la(v1472, v1473);
        if (v1474 > 0) {
          v1468[0] = p1369;
          v1468[1] = p1370;
          v1468[2] = vO47.ta(v1473, v1472);
          var v1475 = v1469 * 0.25 / (v1469 * 0.25 + v1474);
          var v1476 = 1 - v1475 * 2;
          for (var vLN114 = 1, vV1467 = v1467; vLN114 < vV1467; vLN114++) {
            v1464 = v1468[vLN114 * 3];
            v1468[vLN114 * 3] = v1468[vLN114 * 3 - 3] * v1476 + (v1464 + v1470) * v1475;
            v1470 = v1464;
            v1465 = v1468[vLN114 * 3 + 1];
            v1468[vLN114 * 3 + 1] = v1468[vLN114 * 3 - 2] * v1476 + (v1465 + v1471) * v1475;
            v1471 = v1465;
            v1468[vLN114 * 3 + 2] = vO47.ta(v1468[vLN114 * 3 - 2] - v1468[vLN114 * 3 + 1], v1468[vLN114 * 3 - 3] - v1468[vLN114 * 3]);
          }
        }
      };
      return f162;
    }();
    vO37.Lm = function () {
      function f163(p1371) {
        var v1477;
        var vThis63 = this;
        this.Of = p1371;
        this.nc = p1371.get()[0];
        this.Vf = ((v1477 = {})[vO47.a("5d38b67596")] = vThis63.nc, v1477[vO47.a("34f10466567a0aea4ee8107b")] = true, new vO48.k.o(v1477));
        this.Rd = false;
        this.Mm = new vO37.Bm(new vO48.j(v1478 * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = vO73.Om;
        this.Pm = vO73.Om;
        this.Qm = vO73.Om;
        this.Rm = vO73.Om;
        this.Sm = vO73.Om;
        this.qg();
        ooo.ud.Jc(function () {
          vThis63.Mm.Tm();
        });
      }
      var v1478 = vO47.ha(100, vO37.Xc.fd);
      var vO73 = {
        Om: vO47.a("0c6d22ab20"),
        Um: vO47.a("7cfdd23bb1"),
        Vm: vO47.a("3273983104")
      };
      f163.prototype.rg = function (p1372) {
        this.Rd = p1372;
      };
      f163.prototype.qg = function () {
        var v1479 = vO47.e();
        this.Pf = this.Of[vO47.a("51b5bae0a1ae")]();
        this.Qf = this.Of[vO47.a("28910f124b151a")]();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v1479;
        this.nc.width = v1479 * this.Pf;
        this.nc.height = v1479 * this.Qf;
        var v1480 = this.Qf / 4;
        this.Mm.Dm(v1480);
        var v1481 = vO47.fa(vO47._(this.Pf / v1480) * 2 - 5, 1, v1478);
        this.Mm.Cm(v1481);
      };
      f163.prototype.ug = function () {
        if (this.Rd) {
          var v1482 = vO47.Ca() / 200;
          var v1483 = vO47.oa(v1482);
          this.Mm.Wm(this.Xm(this.Nm, v1483), this.Ym(this.Nm, v1483));
          this.Mm.Zm(this.$m(this.Pm, v1483), this.$m(this.Qm, v1483), this.$m(this.Rm, v1483), this.$m(this.Sm, v1483));
          var v1484 = this.Mm.Km();
          for (var v1485 = this.Mm.Im(), v1486 = this.Mm.Jm, v1487 = this.Pf - (this.Pf - v1484 * 0.5 * (v1485 - 1)) * 0.5, v1488 = this.Qf * 0.5, vLN0216 = 0, vLN0217 = 0, v1489 = -1; v1489 < v1485; v1489++) {
            var vV1489 = v1489;
            var v1490 = vO47.pa(vV1489 * 1 / 12 * vO46.T - v1482) * (1 - vO47.ra(16, vV1489 * -1 / 12));
            if (v1489 >= 0) {
              v1486[v1489 * 3] = v1487 - v1484 * 0.5 * vV1489;
              v1486[v1489 * 3 + 1] = v1488 + v1484 * 0.5 * v1490;
              v1486[v1489 * 3 + 2] = vO47.ta(vLN0217 - v1490, vV1489 - vLN0216);
            }
            vLN0216 = vV1489;
            vLN0217 = v1490;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      f163.prototype.Gm = function (p1373) {
        this.Mm.Gm(p1373);
      };
      f163.prototype.an = function (p1374) {
        this.Nm = p1374 ? vO73.Vm : vO73.Um;
        this.Pm = vO73.Om;
        this.Qm = vO73.Om;
        this.Rm = vO73.Om;
        this.Sm = vO73.Om;
      };
      f163.prototype.bn = function (p1375) {
        this.Nm = vO73.Om;
        this.Pm = p1375 ? vO73.Vm : vO73.Um;
        this.Qm = vO73.Om;
        this.Rm = vO73.Om;
        this.Sm = vO73.Om;
      };
      f163.prototype.cn = function (p1376) {
        this.Nm = vO73.Om;
        this.Pm = vO73.Om;
        this.Qm = p1376 ? vO73.Vm : vO73.Um;
        this.Rm = vO73.Om;
        this.Sm = vO73.Om;
      };
      f163.prototype.dn = function (p1377) {
        this.Nm = vO73.Om;
        this.Pm = vO73.Om;
        this.Qm = vO73.Om;
        this.Rm = p1377 ? vO73.Vm : vO73.Um;
        this.Sm = vO73.Om;
      };
      f163.prototype.en = function (p1378) {
        this.Nm = vO73.Om;
        this.Pm = vO73.Om;
        this.Qm = vO73.Om;
        this.Rm = vO73.Om;
        this.Sm = p1378 ? vO73.Vm : vO73.Um;
      };
      f163.prototype.Xm = function (p1379, p1380) {
        switch (p1379) {
          case vO73.Um:
            return 0.9 + p1380 * 0.1;
          case vO73.Vm:
            return 0.4 + p1380 * 0.3;
        }
        ;
        return 1;
      };
      f163.prototype.Ym = function (p1381, p1382) {
        switch (p1381) {
          case vO73.Um:
            return 0.6 + p1382 * 0.5;
          case vO73.Vm:
            return 0.3 + p1382 * 0.3;
        }
        ;
        return 1;
      };
      f163.prototype.$m = function (p1383, p1384) {
        switch (p1383) {
          case vO73.Um:
            return 0.9 + p1384 * 0.1;
          case vO73.Vm:
            return 0.6 + p1384 * 0.4;
        }
        ;
        return 1;
      };
      return f163;
    }();
    vO37.uk = function () {
      function f164(p1385, p1386, p1387, p1388, p1389) {
        this.gn = p1385;
        this.hn = p1386;
        this.in = p1387;
        this.jn = p1388;
        this.kn = p1389;
      }
      f164.tk = function (p1390) {
        return new f164(p1390[vO47.a("16d7aac0794e")], p1390[vO47.a("06f0bdfc796f")], p1390[vO47.a("4cf3e1713254ebc236c9f3")], p1390[vO47.a("e29dcb9b8402d1188897c9be8f0ac3e4")], p1390[vO47.a("241103844b8b030b58140191")]);
      };
      f164.vk = function (p1391) {
        return new f164(p1391[vO47.a("818271dd6693")], p1391[vO47.a("a0169796d781")], p1391[vO47.a("6a1543130c8a496010ef51")], p1391[vO47.a("7669576718fe45ec1c632552e3e637f0")], p1391[vO47.a("d44173d4bbdb735ba84471c1")]);
      };
      f164.prototype.pk = function () {
        return this.gn;
      };
      f164.prototype.sk = function () {
        return this.hn;
      };
      f164.prototype.qk = function () {
        return this.in;
      };
      f164.prototype.ln = function () {
        return this.jn;
      };
      f164.prototype.mn = function () {
        return this.kn;
      };
      return f164;
    }();
    vO37.Zf = function () {
      function f165(p1392) {
        this.nn = {};
        this.nn[v1496] = p1392;
        var v1491 = vO48.k.q.from(v1500, v1501, this.nn);
        this._f = new vO48.k.v(v1499, v1491);
        this._f.blendMode = vO48.k.w.B;
      }
      var v1492 = vO47.a("ae5e411e") + vO47.xa();
      var v1493 = vO47.a("d8c82874") + vO47.xa();
      var v1494 = vO47.a("cb08bfdf21f33da3a7edbaa81ae92db8b2f4");
      var v1495 = vO47.a("feffb2fe6876a7616ff8a6d46b6fbe7476");
      var v1496 = vO47.a("1edad3ee") + vO47.xa();
      var v1497 = vO47.a("b31181f9") + vO47.xa();
      var v1498 = vO47.a("9017e3bc") + vO47.xa();
      var v1499 = new vO48.k.u().addAttribute(v1492, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v1493, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var v1500 = vO47.a("8e6f2244f1ca27ccf9497844ffcf35d8f35f4057cedc05c19d561c4dd8d20ec8da5a5037d7a046e5").concat(v1492, vO47.a("b43e97f3ccfb9369c9799bafb6f46121e4")).concat(v1493, vO47.a("29a1de32c4f840125c82de05c19517")).concat(v1494, vO47.a("d41e63c9b1cf7559b10d73ce948202")).concat(v1495, vO47.a("6248511b0f91478b075b5a180dcb10")).concat(v1497, vO47.a("5812ecca2ed4f7410711d4d6078786")).concat(v1498, vO47.a("8aa02ff2e06c2401f4cf3bc4e2070a66cef41de3d963256ee6f6238891195d02c9d402ceda1f162ddda200e5e4082c16f9842ff0dd20f379909cd08a8719cf158f84c8988970a159e2cda4cfe049aa51e9daa4d8ed5f9740d5ca91cdd05e931a8595df89ce19dcee93779457b9d3e7dab345817e97e1e8c34d479b5448d084dc555f895a21aee8913c13fe133895e09a2b13e91e2e98d1861b06dc030f8c9ed6435fcc504fd69ee91b389329699797ba533f952250f276b421672c7d")).concat(v1495, vO47.a("b34e")).concat(v1494, vO47.a("5803ecce3f9eb6")).concat(v1492, vO47.a("5d62ee3ed17b4a3a1d2fcb28c76a472d436ec61b870710105539a44b8b0f1e422d0f8d516c01be")).concat(v1497, vO47.a("67a31fbf88aecdab199d")).concat(v1493, vO47.a("ab67dbfb4c5211cfc6088896195d13dcde0f8f86602322c0a611abe6260a28d7b852b59467df02a1a1e1b0a807e92babb6fff3b972a14fe2cabfd4f857b4368988ee88bb01f0109092c986c80e8251b5a8cf8f8b1aded19371d56885a9c2a4cb258c24d5beeea12b28b27065a5e8ef3826e46878b2a6c47111fc153892f499341ef50434c295dd0802ca07138c9e8b174d895e1c9786f31c3bde177993a78a7518d13b0ce179fb101c500a159e46f53c692225648d5fb50d305d2b7d912ac723414e220ab063be315a0e0303941ad15b571e54558a463c04b10f")).concat(v1498, vO47.a("34b803710374"));
      var v1501 = vO47.a("1576e5adfa6368a57260bfb8c8754ba40570cbb7c86e10aa4c6cd689df451392504585c8").concat(v1498, vO47.a("648ed359015fc5c9019ddd5e1d31dea606f7f267")).concat(v1496, vO47.a("8aa03af2e77b704cf3ca3a8dbf5c3f45c5ed2eccf96c0f5dcdc159c1c34f1c4cd8de5ef986")).concat(v1496, vO47.a("904d")).concat(v1498, vO47.a("928a6fd8"));
      f165.prototype.tg = function (p1393, p1394) {
        this._f.scale.x = p1393;
        this._f.scale.y = p1394;
        this.nn[v1497] = [p1393, p1394, 1 / p1393 + 1, 1 / p1394 + 1];
      };
      return f165;
    }();
    vO37.th = function () {
      function f166() {
        this.nn = {};
        this.nn[v1507] = [1, 0.5, 0.25, 0.5];
        this.nn[v1508] = vO48.k.n.WHITE;
        this.nn[v1509] = [0, 0];
        this.nn[v1510] = [0, 0];
        var v1502 = vO48.k.q.from(v1513, v1514, this.nn);
        this._f = new vO48.k.v(v1512, v1502);
      }
      var v1503 = vO47.a("c315f4e9") + vO47.xa();
      var v1504 = vO47.a("84b4f408") + vO47.xa();
      var v1505 = vO47.a("bc798ceeaee26e72b07c69f985f87e69a565");
      var v1506 = vO47.a("e3e497b90dfd0aae82f383930ed4038b8b");
      var v1507 = vO47.a("5cd8ad70") + vO47.xa();
      var v1508 = vO47.a("7b594931") + vO47.xa();
      var v1509 = vO47.a("2d6b9abf") + vO47.xa();
      var v1510 = vO47.a("74b08018") + vO47.xa();
      var v1511 = vO47.a("8027f38c") + vO47.xa();
      var v1512 = new vO48.k.u().addAttribute(v1503, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v1504, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v1513 = vO47.a("8344f71364517a13e452ad136a2478f7fe34b5e07b2778fea02de9fa6d3943e7d73185e0423b1bba").concat(v1503, vO47.a("a28805c1d245015bdfcf099dd85a137392")).concat(v1504, vO47.a("557da266b02c347e306eb271956143")).concat(v1505, vO47.a("3a70892357a96fa32f73693432e428")).concat(v1506, vO47.a("c9013d9d3f47a66eb66225613674f7")).concat(v1511, vO47.a("47433fd5a218edd32ee93feafaff")).concat(v1511, vO47.a("a844")).concat(v1504, vO47.a("3ef467bd1d036b262fa361b624667a382deb38c9")).concat(v1506, vO47.a("3a61")).concat(v1505, vO47.a("29b0dd39cead07")).concat(v1503, vO47.a("419ef25af59f6e5631c3e74ce38e63b17ff2fabfa8"));
      var v1514 = vO47.a("b6370a2cd9a20fa4d121a039abb4eca5e631e436abafb7abaf2de908bc84b493b304aa49").concat(v1511, vO47.a("57b32ca4b2eab2bc32b017b780a0c5")).concat(v1507, vO47.a("afdbc44c5a825a54dac8ca4b569c514bcdc28512")).concat(v1508, vO47.a("bc368be1a9f76d61a93570f2abab2a")).concat(v1509, vO47.a("fa30c96397e9afe36f33b27065a5e8")).concat(v1510, vO47.a("501ae4cc3dc1b64a3940f48375d6f9433f77d0d203f6c95b074b97cf09c5da4a022480875c")).concat(v1508, vO47.a("c358")).concat(v1511, vO47.a("b0ab")).concat(v1509, vO47.a("b7c3")).concat(v1510, vO47.a("863e6229a4a867")).concat(v1507, vO47.a("cc336fb5a6c47117fc")).concat(v1507, vO47.a("f22dc66294ab88a7ca228770"));
      f166.prototype.nd = function (p1395, p1396, p1397, p1398) {
        var v1515 = this.nn[v1507];
        v1515[0] = p1395;
        v1515[1] = p1396;
        v1515[2] = p1397;
        v1515[3] = p1398;
      };
      f166.prototype.Hh = function (p1399) {
        this.nn[v1508] = p1399;
      };
      f166.prototype.Bg = function (p1400, p1401, p1402, p1403) {
        this._f.position.x = p1400;
        this._f.position.y = p1401;
        this._f.scale.x = p1402;
        this._f.scale.y = p1403;
        var v1516 = this.nn[v1509];
        v1516[0] = p1402 * 0.2520615384615385;
        v1516[1] = p1403 * 0.4357063736263738;
        var v1517 = this.nn[v1510];
        v1517[0] = p1400 * 0.2520615384615385;
        v1517[1] = p1401 * 0.4357063736263738;
      };
      return f166;
    }();
    vO37.bd = function () {
      function f167() {
        this.gd = new vO48.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      f167.prototype.kd = function (p1404) {
        this.gd.texture = p1404.nb();
        this.gd.anchor.set(p1404.hb, p1404.ib);
        this.pn = p1404.jb;
        this.qn = p1404.kb;
      };
      f167.prototype.nd = function (p1405) {
        this.gd.tint = parseInt(p1405.substring(1), 16);
      };
      f167.prototype.Bd = function (p1406) {
        this.gd.width = p1406 * this.pn;
        this.gd.height = p1406 * this.qn;
      };
      f167.prototype.Vd = function (p1407) {
        this.gd.rotation = p1407;
      };
      f167.prototype.Ud = function (p1408, p1409) {
        this.gd.position.set(p1408, p1409);
      };
      f167.prototype.Td = function (p1410) {
        this.gd.visible = p1410;
      };
      f167.prototype.Qd = function () {
        return this.gd.visible;
      };
      f167.prototype.Rj = function (p1411) {
        this.gd.alpha = p1411;
      };
      f167.prototype.zd = function () {
        return this.gd;
      };
      f167.prototype.G = function () {
        vO48.k.F.G(this.gd);
      };
      return f167;
    }();
    vO37.Ui = function () {
      function f168(p1412) {
        this.Qh = p1412;
        this.ki = new vO37.Ui.Ti();
        this.cj = false;
        this.bj = true;
        this.Fd = false;
        this.Id = 0;
        this.rn = 0;
        this.Lj = 1;
        this.Ld = 0;
        this.hi = 0;
        this.Nd = {};
        this.Kd = 0;
        this.sn = new vO48.j(vLN2002 * 2);
        this.tn = new vO48.j(vLN2002 * 2);
        this.Jd = new vO48.j(vLN2002 * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var vLN2002 = 200;
      f168.prototype.$i = function () {
        if (this.vn != null) {
          vO48.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          vO48.k.F.G(this.wn);
        }
      };
      f168.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = vO47.a("e9");
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      f168.prototype.Zi = function (p1413) {
        this.ki = p1413;
        this.yn(this.cj);
      };
      f168.prototype.Td = function (p1414) {
        var v1518 = this.cj;
        this.cj = p1414;
        this.yn(v1518);
      };
      f168.prototype.fj = function (p1415) {
        this.hi = p1415 * 50;
        var vP1415 = p1415;
        if (p1415 > this.Qh.hh) {
          vP1415 = vO47.sa((p1415 - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var v1519 = vO47.qa(vO47.ra(vP1415 * 5, 0.707106781186548) * 4 + 25);
        var v1520 = vO47.ha(vLN2002, vO47.ia(3, (v1519 - 5) * 5 + 1));
        var v1521 = this.Kd;
        this.Id = (5 + v1519 * 0.9) * 0.025;
        this.Kd = vO47._(v1520);
        this.rn = v1520 - this.Kd;
        if (v1521 > 0 && v1521 < this.Kd) {
          var v1522 = this.sn[v1521 * 2 - 2];
          var v1523 = this.sn[v1521 * 2 - 1];
          var v1524 = this.tn[v1521 * 2 - 2];
          var v1525 = this.tn[v1521 * 2 - 1];
          var v1526 = this.Jd[v1521 * 2 - 2];
          var v1527 = this.Jd[v1521 * 2 - 1];
          for (var vV1521 = v1521; vV1521 < this.Kd; vV1521++) {
            this.sn[vV1521 * 2] = v1522;
            this.sn[vV1521 * 2 + 1] = v1523;
            this.tn[vV1521 * 2] = v1524;
            this.tn[vV1521 * 2 + 1] = v1525;
            this.Jd[vV1521 * 2] = v1526;
            this.Jd[vV1521 * 2 + 1] = v1527;
          }
        }
      };
      f168.prototype.kj = function (p1416, p1417) {
        this.Kd = p1417;
        for (var vLN0218 = 0; vLN0218 < this.Kd; vLN0218++) {
          this.sn[vLN0218 * 2] = this.tn[vLN0218 * 2] = this.Jd[vLN0218 * 2] = p1416();
          this.sn[vLN0218 * 2 + 1] = this.tn[vLN0218 * 2 + 1] = this.Jd[vLN0218 * 2 + 1] = p1416();
        }
      };
      f168.prototype.hj = function (p1418, p1419, p1420) {
        this.Fd = p1420;
        for (var vLN0219 = 0; vLN0219 < this.Kd; vLN0219++) {
          this.sn[vLN0219 * 2] = this.tn[vLN0219 * 2];
          this.sn[vLN0219 * 2 + 1] = this.tn[vLN0219 * 2 + 1];
        }
        ;
        var v1528 = p1418 - this.tn[0];
        var v1529 = p1419 - this.tn[1];
        this.zn(v1528, v1529, this.Kd, this.tn);
      };
      f168.prototype.zn = function (p1421, p1422, p1423, p1424) {
        var v1530 = vO47.la(p1421, p1422);
        if (!(v1530 <= 0)) {
          var v1531;
          var v1532 = p1424[0];
          p1424[0] += p1421;
          var v1533;
          var v1534 = p1424[1];
          p1424[1] += p1422;
          var v1535 = this.Id / (this.Id + v1530);
          var v1536 = 1 - v1535 * 2;
          for (var vLN115 = 1, v1537 = p1423 - 1; vLN115 < v1537; vLN115++) {
            v1531 = p1424[vLN115 * 2];
            p1424[vLN115 * 2] = p1424[vLN115 * 2 - 2] * v1536 + (v1531 + v1532) * v1535;
            v1532 = v1531;
            v1533 = p1424[vLN115 * 2 + 1];
            p1424[vLN115 * 2 + 1] = p1424[vLN115 * 2 - 1] * v1536 + (v1533 + v1534) * v1535;
            v1534 = v1533;
          }
          ;
          v1536 = 1 - (v1535 = this.rn * this.Id / (this.rn * this.Id + v1530)) * 2;
          p1424[p1423 * 2 - 2] = p1424[p1423 * 2 - 4] * v1536 + (p1424[p1423 * 2 - 2] + v1532) * v1535;
          p1424[p1423 * 2 - 1] = p1424[p1423 * 2 - 3] * v1536 + (p1424[p1423 * 2 - 1] + v1534) * v1535;
        }
      };
      f168.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      f168.prototype.dj = function (p1425, p1426) {
        var vLN10000002 = 1000000;
        var vP1425 = p1425;
        var vP1426 = p1426;
        for (var vLN0220 = 0; vLN0220 < this.Kd; vLN0220++) {
          var v1538 = this.Jd[vLN0220 * 2];
          var v1539 = this.Jd[vLN0220 * 2 + 1];
          var v1540 = vO47.la(p1425 - v1538, p1426 - v1539);
          if (v1540 < vLN10000002) {
            vLN10000002 = v1540;
            vP1425 = v1538;
            vP1426 = v1539;
          }
        }
        ;
        return {
          _a: vP1425,
          ab: vP1426,
          ej: vLN10000002
        };
      };
      f168.prototype._i = function (p1427) {
        this.un = p1427;
      };
      f168.prototype.Pj = function (p1428, p1429) {
        this.Lj = vO47.ga(this.Lj, this.bj ? this.Fd ? 0.9 + vO47.pa(p1428 / 400 * vO46.T) * 0.1 : 1 : 0, p1429, 1 / 800);
        this.Ld = vO47.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, p1429, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      f168.prototype.Qj = function (p1430, p1431, p1432, p1433) {
        if (this.cj && this.bj) {
          var v1541 = vO47.ra(0.11112, p1431 / 95);
          for (var vLN0221 = 0; vLN0221 < this.Kd; vLN0221++) {
            var v1542 = vO47.ka(this.sn[vLN0221 * 2], this.tn[vLN0221 * 2], p1432);
            var v1543 = vO47.ka(this.sn[vLN0221 * 2 + 1], this.tn[vLN0221 * 2 + 1], p1432);
            this.Jd[vLN0221 * 2] = vO47.ka(v1542, this.Jd[vLN0221 * 2], v1541);
            this.Jd[vLN0221 * 2 + 1] = vO47.ka(v1543, this.Jd[vLN0221 * 2 + 1], v1541);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, p1430, p1431, p1433);
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      f168.prototype.yn = function (p1434) {
        if (this.cj) {
          if (!p1434) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            vO48.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            vO48.k.F.G(this.wn);
          }
        }
      };
      f168.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new vO37.Xc();
        } else {
          vO48.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), vO47.a("1525f1aeff6c7daa"));
        if (this.wn == null) {
          this.wn = new vO37.Bn(vO47.a("20"));
          this.wn.style.fontFamily = vO47.a("64e5f2640957d9");
          this.wn.anchor.set(0.5);
        } else {
          vO48.k.F.G(this.wn);
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (vO49.n != null && vO49.n.Je == this.ki.Je) {
          vO49.vj = this.wn;
          let v1544 = vO50.sg.indexOf(vO49.n.ni);
          if (v1544 == -1) {
            if (vO50.ig != -1) {
              vO50.ig = -1;
            }
          } else {
            vO50.ig = vO50.gg[v1544].s;
            vO50.re = false;
            vF67();
          }
        }
      };
      f168.Ti = function f169() {
        this.Je = 0;
        this.mi = vO37.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = vO47.a("1d");
      };
      return f168;
    }();
    vO37.Bn = vO47.ca(vO48.k.t, function (p1435, p1436, p1437) {
      vO48.k.t.call(this, p1435, p1436, p1437);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    vO37.Sb = function () {
      function f170(p1438, p1439, p1440, p1441, p1442) {
        this.Tj = p1438;
        this.Uj = p1439;
        this.Vj = p1440;
        this.Wj = p1441;
        this.Xj = p1442;
      }
      f170.prototype.Cn = function (p1443) {
        return new f170(p1443, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f170.prototype.Dn = function (p1444) {
        return new f170(this.Tj, p1444, this.Vj, this.Wj, this.Xj);
      };
      f170.prototype.En = function (p1445) {
        return new f170(this.Tj, this.Uj, p1445, this.Wj, this.Xj);
      };
      f170.prototype.Fn = function (p1446) {
        return new f170(this.Tj, this.Uj, this.Vj, p1446, this.Xj);
      };
      f170.prototype.Gn = function (p1447) {
        return new f170(this.Tj, this.Uj, this.Vj, this.Wj, p1447);
      };
      return f170;
    }();
    vO37.Bm = function () {
      function f171(p1448) {
        this.Hn = new vO37.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = p1448;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm(vO47.a("4bdf2b58a966b724"));
      }
      var v1545 = new vO37.Sb(0, 0, 0, 0, 0);
      f171.prototype.ag = function () {
        return this.Hn.Yc;
      };
      f171.prototype.Cm = function (p1449) {
        this.$c = p1449;
        if (this.Hn.$c !== p1449) {
          for (var vP1449 = p1449; vP1449 < this.Hn._c.length; vP1449++) {
            this.Hn._c[vP1449].Cd();
          }
          ;
          while (this.Hn.$c > p1449) {
            this.Hn.$c -= 1;
            var v1546 = this.Hn._c[this.Hn.$c];
            v1546.md.G();
            v1546.ld.G();
          }
          ;
          while (this.Hn.$c < p1449) {
            var v1547 = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(v1547.ld.zd());
            this.Hn.Yc.addChild(v1547.md.zd());
            v1547.ld.Rj(this.Kn);
            v1547.md.Rj(this.Ln);
          }
          ;
          for (var vLN0222 = 0; vLN0222 < this.Hn.Zc.od.length; vLN0222++) {
            this.Hn.Zc.od[vLN0222].Rj(this.Mn);
          }
          ;
          for (var vLN0223 = 0; vLN0223 < this.Hn.Zc.pd.length; vLN0223++) {
            this.Hn.Zc.pd[vLN0223].Rj(this.Nn);
          }
          ;
          for (var vLN0224 = 0; vLN0224 < this.Hn.Zc.rd.length; vLN0224++) {
            this.Hn.Zc.rd[vLN0224].Rj(this.On);
          }
          ;
          for (var vLN0225 = 0; vLN0225 < this.Hn.Zc.qd.length; vLN0225++) {
            this.Hn.Zc.qd[vLN0225].Rj(this.Pn);
          }
        }
      };
      f171.prototype.Im = function () {
        return this.$c;
      };
      f171.prototype.Gm = function (p1450) {
        this.In = p1450;
        this.Jn = vO47.a("9a883acbf8490657");
        this.Tm();
      };
      f171.prototype.Hm = function (p1451) {
        this.In = v1545;
        this.Jn = p1451;
        this.Tm();
      };
      f171.prototype.Tm = function () {
        this.Hn.hd(vO37.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      f171.prototype.Dm = function (p1452) {
        this.mj = p1452;
      };
      f171.prototype.Km = function () {
        return this.mj;
      };
      f171.prototype.Wm = function (p1453, p1454) {
        this.Kn = p1453;
        this.Ln = p1454;
        for (var vLN0226 = 0; vLN0226 < this.$c; vLN0226++) {
          var v1548 = this.Hn._c[vLN0226];
          v1548.ld.Rj(this.Kn);
          v1548.md.Rj(this.Ln);
        }
      };
      f171.prototype.Zm = function (p1455, p1456, p1457, p1458) {
        this.Mn = p1455;
        this.Nn = p1456;
        this.On = p1457;
        this.Pn = p1458;
        for (var vLN0227 = 0; vLN0227 < this.Hn.Zc.od.length; vLN0227++) {
          this.Hn.Zc.od[vLN0227].Rj(this.Mn);
        }
        ;
        for (var vLN0228 = 0; vLN0228 < this.Hn.Zc.pd.length; vLN0228++) {
          this.Hn.Zc.pd[vLN0228].Rj(this.Nn);
        }
        ;
        for (var vLN0229 = 0; vLN0229 < this.Hn.Zc.rd.length; vLN0229++) {
          this.Hn.Zc.rd[vLN0229].Rj(this.On);
        }
        ;
        for (var vLN0230 = 0; vLN0230 < this.Hn.Zc.qd.length; vLN0230++) {
          this.Hn.Zc.qd[vLN0230].Rj(this.Pn);
        }
      };
      f171.prototype.Bg = function () {
        var v1549 = this.mj * 2;
        var v1550 = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var v1551 = this.Jm[0];
          var v1552 = this.Jm[1];
          var v1553 = this.Jm[2];
          this.Hn._c[0].Ad(v1551, v1552, v1549, v1550, v1553);
          this.Hn.Zc.Ad(v1551, v1552, v1549, v1553);
        }
        ;
        for (var vLN116 = 1; vLN116 < this.$c; vLN116++) {
          var v1554 = this.Jm[vLN116 * 3];
          var v1555 = this.Jm[vLN116 * 3 + 1];
          var v1556 = this.Jm[vLN116 * 3 + 2];
          this.Hn._c[vLN116].Ad(v1554, v1555, v1549, v1550, v1556);
        }
      };
      f171.prototype._m = function (p1459) {
        p1459.render(this.Hn.Yc);
      };
      return f171;
    }();
    vO37.Uf = function () {
      function f172(p1460) {
        this.Wd = p1460;
      }
      f172.Tf = $(vO47.a("b909598d5e45d882ae472d906855a696bf5b38"));
      f172.Qn = $(vO47.a("bd8d4c0433d7b717ad9b251731"));
      f172.Rn = $(vO47.a("f5c504c71a839ac0d08c0ac4f59d6dc7"));
      f172.Sn = $(vO47.a("6b3f003f9d4b84125e53070787"));
      f172.Tn = $(vO47.a("a85a8d9ac198c309d9e485"));
      f172.Un = $(vO47.a("d96929692e3bb364927f157d0021"));
      f172.Vn = $(vO47.a("df338c330a7a483b82769c771d750829"));
      f172.Wn = $(vO47.a("e092525c9440569a9ed04f4c"));
      f172.Xn = $(vO47.a("a7fbdd754aaf597bddcdc74b5693"));
      f172.Yn = $(vO47.a("de4ccc1e8397cd9b815ade108f8c"));
      f172.Zn = $(vO47.a("a5b5553d5aeed935ceea4a041cd4da01c2"));
      f172.$n = $(vO47.a("277b4ce8d933dfb3480145c7c405cc8b540757c4de0fc9c7501e6cc4aa11b2"));
      f172._n = $(vO47.a("5240711724886ac43d0a7108738c4f9f0c1647010f9846d41c12490a"));
      f172.prototype.Sa = function () {};
      f172.prototype.ml = function () {};
      f172.prototype.nl = function () {};
      f172.prototype.hl = function () {};
      f172.prototype.qg = function () {};
      f172.prototype.ug = function (p1461, p1462) {};
      return f172;
    }();
    v1637 = $(vO47.a("0230a27c68f6a4b4697abc6967f0be"));
    v1638 = $(vO47.a("3505d181d74b57c15e41d184a85c3691"));
    v1639 = $(vO47.a("9367f6e9792f6bebef3fb0ec78"));
    v1640 = $(vO47.a("cb5fb8d023b626a8e7e7afa23bb06da5e2ee"));
    v1641 = $(vO47.a("0959ed55e31f636d62eaf236f0ab712a"));
    v1642 = $(vO47.a("43d7235fa999a51726993e4dae67b4"));
    v1643 = $(vO47.a("071b6f13e55de1537c237ef0f6"));
    v1644 = $(vO47.a("f5c511c1178b97818d821ed3e4"));
    v1645 = $(vO47.a("9e0c0658ccd20898c458094bce"));
    v1646 = $(vO47.a("ee5cd7e09f66996697e9cee889"));
    (v1647 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.ao);
      var vThis64 = this;
      var v1557 = v1646.get()[0];
      v1641.toggle(vO46.co.bo);
        // 1. ÖNCE değişkeni tanımla ve elementi seç
      var v1637 = $("#final-continue"); 
      
      // 2. SONRA bu değişken üzerinde işlem yap
      v1637.html("Continue (Home)");
      v1637.after("<div id='final-replay'>Replay</div>");
      v1638.text(vO47.U(vO47.a("4078ecf721eda8702974efb53ef8fd6a3c55bcc03bcbe24e365cff")));
      v1638.click(function () {
        ooo.ij.if();
        vO46.co.do.Va();
        ooo.ij.Ye(vO37.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("#final-replay").click(function () {
        ooo.ij.if();
        ooo.to();
      });
      $(vO47.a("e8d15e5680")).keydown(function (p1463) {
        if (p1463.keyCode !== 17 || !(vO50.ctrl = true)) {
          if (p1463.keyCode !== 17) {
            vO50.ctrl = false;
          }
        }
        if (p1463.keyCode === 32) {
          vThis64.eo = true;
        }
      }).keyup(function (p1464) {
        vO50.ctrl = false;
        if (vO49.on && vO50.s) {
          if (p1464.keyCode == 81 || p1464.keyCode == 87) {
            if (p1464.keyCode == 81) {
              v1023.texture = v1016;
              v1024.texture = v1017;
              v1023.alpha = 1;
              v1024.alpha = 0.25;
              vF63();
            }
            if (p1464.keyCode == 87) {
              v1024.texture = v1018;
              v1023.texture = v1015;
              v1023.alpha = 0.25;
              v1024.alpha = 1;
              vF68();
            }
          } else {
            v1024.texture = v1017;
            v1023.texture = v1015;
            v1024.alpha = 0.25;
            v1023.alpha = 0.25;
            v1013 = false;
            vLN552 = 55;
            vLN19 = 1;
            v1014 = true;
            clearInterval(v999);
            v999 = null;
          }
          if (p1464.keyCode == 90) {
            if (vO50.z == 1) {
              if (vO50.h) {
                vO50.z = 1.6;
              } else {
                vO50.z = 1.2;
              }
              v1025.texture = v1020;
              v1025.alpha = 1;
            } else {
              vO50.z = 1;
              v1025.texture = v1019;
              v1025.alpha = 0.25;
            }
          }
          if (vO50.hz && !vO50.mobile) {
            if (p1464.keyCode == 188 && vO50.z >= 0.2) {
              vO50.z = vO50.z - 0.1;
            }
            if (p1464.keyCode == 190 && vO50.z <= 25) {
              vO50.z = vO50.z + 0.1;
            }
          }
        }
        if (vO49.on && p1464.keyCode == 82) {
          if (vO50.r1) {
            $("#port_id_s").val(vO50.pi);
            $("#port_name_s").val(vO50.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
            document.getElementById("mm-action-play").click();
          } else {
            vO50.r1 = true;
          }
        }
        if (vO49.on && p1464.keyCode == 78) {
          document.getElementById("settings-show-names-switch").click();
          if (vO50.sn) {
            vO50.sn = false;
          } else {
            vO50.sn = true;
          }
        }
        if (p1464.keyCode === 32) {
          vThis64.eo = false;
        }
      });
      v1557.addEventListener(vO47.a("0582e8cdea9266d37b9b"), function (p1465) {
        if (vO49.on && vO50.mobile && vO50.mo != 6 && vO50.s) {
          var vBtoa16 = btoa(vO50.c_1);
          if (vO50.mo1.x != -1 && vO50.mo1.y == -1 && btoa(vBtoa16) == vO50.d_1 || vO50.mo2.x == -1 && vO50.mo2.y != -1 && btoa(vBtoa16) == vO50.d_1) {
            var v1558 = ooo.Xg.Kf.Wg.Ah;
            var v1559 = v1557.offsetHeight;
            var v1560 = v1557.offsetWidth;
            var v1561 = v1559 * 0.5;
            var v1562 = v1560 * 0.5;
            var vBtoa17 = btoa(vO50.c_2);
            for (let vLN0231 = 0; vLN0231 < p1465.changedTouches.length; vLN0231++) {
              var v1563 = p1465.changedTouches[vLN0231].pageX;
              var v1564 = p1465.changedTouches[vLN0231].pageY;
              var v1565 = p1465.changedTouches[vLN0231].identifier;
              if (vO50.mo == 1 && btoa(vBtoa17) == vO50.d_2) {
                v1559 *= 0.5;
                v1560 *= 0.5;
              }
              if (vO50.mo == 2 && btoa(vBtoa17) == vO50.d_2) {
                v1559 = v1558.img_o_2.y + 110;
                v1560 = v1558.img_o_2.x + 110;
              }
              if (vO50.mo == 3 && btoa(vBtoa17) == vO50.d_2) {
                v1559 = v1558.img_o_3.y + 110;
                v1560 = v1558.img_o_3.x + 110;
              }
              if (vO50.mo == 4 && btoa(vBtoa17) == vO50.d_2 || vO50.mo == 5 && btoa(vBtoa17) == vO50.d_2) {
                v1559 = v1558.img_o_4.y + 110;
                v1560 = v1558.img_o_4.x + 110;
              }
              var vBtoa18 = btoa(vO50.c_5);
              var v1566 = Math.atan2(v1564 - v1559, v1563 - v1560);
              var v1567 = Math.cos(v1566);
              var v1568 = Math.sin(v1566);
              var vBtoa19 = btoa(vO50.c_4);
              var v1569 = vO50.mo1.x == v1565;
              btoa(vO50.c_3);
              if (v1569 && btoa(vBtoa19) == vO50.d_4) {
                if (v1563 <= 0 || v1564 <= 0) {
                  vO50.mo1.x = -1;
                  if (vO50.mo == 1) {
                    v1558.img_p_1.alpha = 0.25;
                  }
                  if (vO50.mo == 2) {
                    v1558.img_o_2.alpha = 0.25;
                    v1558.img_i_2.alpha = 0.25;
                    v1558.img_p_2.alpha = 0.25;
                  }
                  if (vO50.mo == 3) {
                    v1558.img_o_3.alpha = 0.25;
                    v1558.img_i_3.alpha = 0.25;
                    v1558.img_p_3.alpha = 0.25;
                  }
                  if (vO50.mo == 4 || vO50.mo == 5) {
                    v1558.img_p_2.alpha = 0.25;
                  }
                } else {
                  vThis64.fo = v1566;
                  var vLN502 = 50;
                  if (vO50.mo == 1 || vO50.mo == 4 || vO50.mo == 5) {
                    vLN502 = 110;
                  }
                  var v1590 = v1560 - v1563;
                  var v1591 = v1559 - v1564;
                  var v1594 = Math.sqrt(v1590 * v1590 + v1591 * v1591);
                  var v1573 = v1562 + v1594 * v1567 - 68;
                  var v1574 = v1561 + v1594 * v1568 - 68;
                  var v1575 = v1562 + vLN502 * v1567 - 68;
                  var v1576 = v1561 + vLN502 * v1568 - 68;
                  var v1577 = v1562 + v1567 * 75 - 68;
                  var v1578 = v1561 + v1568 * 75 - 68;
                  var v1588 = v1563 - 85;
                  var v1589 = v1564 - 85;
                  var v1581 = v1560 + vLN502 * v1567 - 85;
                  var v1582 = v1559 + vLN502 * v1568 - 85;
                  var v1586 = v1560 + v1567 * 3 - 110;
                  var v1587 = v1559 + v1568 * 3 - 110;
                  if (v1594 < vLN502) {
                    if (vO50.mo2.x == -1 && vO50.mo2.y != -1) {
                      v1558.img_pf_1.x = v1573;
                      v1558.img_pf_1.y = v1574;
                    } else {
                      if (vO50.mo == 1) {
                        v1558.img_p_1.x = v1573;
                        v1558.img_p_1.y = v1574;
                      }
                      if (vO50.mo == 2 || vO50.mo == 4 || vO50.mo == 5) {
                        v1558.img_p_2.x = v1573;
                        v1558.img_p_2.y = v1574;
                      }
                      if (vO50.mo == 3) {
                        v1558.img_p_3.x = v1573;
                        v1558.img_p_3.y = v1574;
                      }
                    }
                    if (vO50.mo == 2) {
                      v1558.img_i_2.y = v1589;
                      v1558.img_i_2.x = v1588;
                    }
                    if (vO50.mo == 3) {
                      v1558.img_i_3.y = v1589;
                      v1558.img_i_3.x = v1588;
                    }
                  } else {
                    if (vO50.mo2.x == -1 && vO50.mo2.y != -1) {
                      v1558.img_pf_1.x = v1575;
                      v1558.img_pf_1.y = v1576;
                      if (vO50.mo == 2 || vO50.mo == 3) {
                        if (v1594 < 75) {
                          v1558.img_pf_1.x = v1573;
                          v1558.img_pf_1.y = v1574;
                        } else {
                          v1558.img_pf_1.x = v1577;
                          v1558.img_pf_1.y = v1578;
                        }
                      }
                    } else {
                      if (vO50.mo == 1) {
                        v1558.img_p_1.x = v1575;
                        v1558.img_p_1.y = v1576;
                      }
                      if (vO50.mo == 2 || vO50.mo == 4 || vO50.mo == 5) {
                        v1558.img_p_2.x = v1575;
                        v1558.img_p_2.y = v1576;
                        if (vO50.mo == 2) {
                          if (v1594 < 75) {
                            v1558.img_p_2.x = v1573;
                            v1558.img_p_2.y = v1574;
                          } else {
                            v1558.img_p_2.x = v1577;
                            v1558.img_p_2.y = v1578;
                          }
                        }
                      }
                      if (vO50.mo == 3) {
                        if (v1594 < 75) {
                          v1558.img_p_3.x = v1573;
                          v1558.img_p_3.y = v1574;
                        } else {
                          v1558.img_p_3.x = v1577;
                          v1558.img_p_3.y = v1578;
                        }
                      }
                    }
                    if (vO50.mo == 2) {
                      v1558.img_i_2.y = v1582;
                      v1558.img_i_2.x = v1581;
                    }
                    if (vO50.mo == 3) {
                      v1558.img_i_3.y = v1582;
                      v1558.img_i_3.x = v1581;
                      v1558.img_o_3.y = v1587;
                      v1558.img_o_3.x = v1586;
                    }
                  }
                }
              } else if ((v1569 = vO50.mo2.y == v1565) && btoa(vBtoa18) == vO50.d_5) {
                if (v1563 <= 0 || v1564 <= 0) {
                  vO50.mo2.y = -1;
                  v1558.img_f.visible = false;
                  v1558.img_pf_1.visible = false;
                  if (vO50.mo == 1) {
                    v1558.img_p_1.visible = true;
                  }
                  if (vO50.mo == 2 || vO50.mo == 4 || vO50.mo == 5) {
                    v1558.img_p_2.visible = true;
                  }
                  if (vO50.mo == 3) {
                    v1558.img_p_3.visible = true;
                  }
                  if (vO50.mo == 4 || vO50.mo == 5) {
                    v1558.img_f.visible = true;
                  }
                  vThis64.eo = false;
                } else if (vO50.mo == 3) {
                  v1567 = Math.cos(v1566 = Math.atan2(v1564 - (v1559 = v1558.img_f.y + 100), v1563 - (v1560 = v1558.img_f.x + 100)));
                  v1568 = Math.sin(v1566);
                  var v1588 = v1560 + v1567 * 3 - 100;
                  var v1589 = v1559 + v1568 * 3 - 100;
                  var v1590 = v1560 - v1563;
                  var v1591 = v1559 - v1564;
                  var v1594 = Math.sqrt(v1590 * v1590 + v1591 * v1591);
                  if (v1594 >= 40) {
                    v1558.img_f.y = v1588;
                    v1558.img_f.x = v1589;
                  }
                }
              }
            }
          }
        } else if (!vF41() || !vO50.joystick.checked) {
          if (p1465 = p1465 || window.event) {
            if ((p1465 = p1465.touches[0]).clientX !== undefined) {
              vThis64.fo = Math.atan2(p1465.clientY - v1557.offsetHeight * 0.5, p1465.clientX - v1557.offsetWidth * 0.5);
            } else {
              vThis64.fo = Math.atan2(p1465.pageY - v1557.offsetHeight * 0.5, p1465.pageX - v1557.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      v1557.addEventListener(vO47.a("0a6fa3686df7a3d57351a0"), function (p1466) {
        if (vO49.on && vO50.mobile && vO50.mo != 6 && vO50.s) {
          var v1595 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa20 = btoa(vO50.c_4);
          var v1596 = v1557.offsetHeight;
          var vBtoa21 = btoa(vO50.c_3);
          var v1597 = v1557.offsetWidth;
          var vBtoa22 = btoa(vO50.c_5);
          var v1598 = (p1466 = p1466 || window.event).touches.item(0).pageX;
          var vBtoa23 = btoa(vO50.c_2);
          var v1599 = p1466.touches.item(0).pageY;
          var v1600 = p1466.touches.length;
          var vBtoa24 = btoa(vO50.c_1);
          var v1601 = p1466.touches.item(0).identifier;
          for (let vLN0232 = 0; vLN0232 < v1600; vLN0232++) {
            if (vO50.mo2.x == -1 && vO50.mo2.y != -1) {
              if (p1466.touches.item(vLN0232).identifier != vO50.mo2.y) {
                v1598 = p1466.touches.item(vLN0232).pageX;
                v1599 = p1466.touches.item(vLN0232).pageY;
                v1601 = p1466.touches.item(vLN0232).identifier;
              }
            } else {
              v1598 = p1466.touches.item(vLN0232).pageX;
              v1599 = p1466.touches.item(vLN0232).pageY;
              v1601 = p1466.touches.item(vLN0232).identifier;
            }
          }
          ;
          var vLN0233 = 0;
          if (vO50.mo == 4 && btoa(vBtoa22) == vO50.d_5 || vO50.mo == 5 && btoa(vBtoa20) == vO50.d_4) {
            vLN0233 = Math.sqrt((v1598 - v1595.img_f.x - 100) * (v1598 - v1595.img_f.x - 100) + (v1599 - v1595.img_f.y - 100) * (v1599 - v1595.img_f.y - 100));
          }
          if (v1600 == 1 && (vO50.mo == 4 && vLN0233 > 40 || vO50.mo != 4) && (vO50.mo == 5 && vLN0233 > 40 || vO50.mo != 5)) {
            vO50.mo2.y = -1;
            v1595.img_f.visible = false;
            v1595.img_pf_1.visible = false;
            if (vO50.mo == 1) {
              v1595.img_p_1.alpha = 0.25;
              v1595.img_p_1.visible = true;
            }
            if (vO50.mo == 2) {
              v1595.img_o_2.alpha = 0.25;
              v1595.img_i_2.alpha = 0.25;
              v1595.img_p_2.alpha = 0.25;
              v1595.img_p_2.visible = true;
            }
            if (vO50.mo == 3) {
              v1595.img_o_3.alpha = 0.25;
              v1595.img_i_3.alpha = 0.25;
              v1595.img_p_3.alpha = 0.25;
              v1595.img_p_3.visible = true;
            }
            if (vO50.mo == 4 || vO50.mo == 5) {
              v1595.img_p_2.alpha = 0.25;
              v1595.img_p_2.visible = true;
              v1595.img_f.visible = true;
            }
            vThis64.eo = false;
          }
          if (vO50.mo1.x == -1 && vO50.mo1.y == -1 && btoa(vBtoa20) == vO50.d_4 && (vO50.mo == 4 && vLN0233 > 40 || vO50.mo != 4 && btoa(vBtoa21) == vO50.d_3) && (vO50.mo == 5 && vLN0233 > 40 || vO50.mo != 5 && btoa(vBtoa23) == vO50.d_2)) {
            vO50.mo1.x = v1601;
            if (vO50.mo1.x == vO50.mo2.y && vO50.mo1.y == vO50.mo2.x) {
              v1598 = p1466.touches.item(1).pageX;
              v1599 = p1466.touches.item(1).pageY;
            }
            var v1602 = v1597 * 0.5 - 68;
            var v1603 = v1596 * 0.5 - 68;
            var v1604 = v1598 - 110;
            var v1605 = v1599 - 110;
            var v1606 = v1598 - 85;
            var v1607 = v1599 - 85;
            if (vO50.mo == 1 && vO50.mo2.x == -1 && vO50.mo2.y == -1) {
              v1595.img_p_1.alpha = 1;
              v1595.img_p_1.x = v1602;
              v1595.img_p_1.y = v1603;
              v1595.img_p_1.visible = true;
            }
            if (vO50.mo == 2) {
              v1595.img_o_2.alpha = 1;
              v1595.img_o_2.x = v1604;
              v1595.img_o_2.y = v1605;
              v1595.img_i_2.alpha = 1;
              v1595.img_i_2.x = v1606;
              v1595.img_i_2.y = v1607;
              if (vO50.mo2.x == -1 && vO50.mo2.y == -1) {
                v1595.img_p_2.alpha = 1;
                v1595.img_p_2.x = v1602;
                v1595.img_p_2.y = v1603;
                v1595.img_p_2.visible = true;
              }
            }
            if (vO50.mo == 3 && btoa(vBtoa22) == vO50.d_5) {
              v1595.img_o_3.alpha = 1;
              v1595.img_o_3.x = v1604;
              v1595.img_o_3.y = v1605;
              v1595.img_i_3.alpha = 1;
              v1595.img_i_3.x = v1606;
              v1595.img_i_3.y = v1607;
              if (vO50.mo2.x == -1 && vO50.mo2.y == -1) {
                v1595.img_p_3.alpha = 1;
                v1595.img_p_3.x = v1602;
                v1595.img_p_3.y = v1603;
                v1595.img_p_3.visible = true;
              }
            }
            if (vO50.mo == 4 && btoa(vBtoa23) == vO50.d_2 && vO50.mo2.x == -1 && vO50.mo2.y == -1) {
              v1595.img_p_2.alpha = 1;
              v1595.img_p_2.x = v1602;
              v1595.img_p_2.y = v1603;
              v1595.img_p_2.visible = true;
            }
            if (vO50.mo == 5 && btoa(vBtoa21) == vO50.d_3 && vO50.mo2.x == -1 && vO50.mo2.y == -1) {
              v1595.img_p_2.alpha = 1;
              v1595.img_p_2.x = v1602;
              v1595.img_p_2.y = v1603;
              v1595.img_p_2.visible = true;
            }
          } else if (v1600 >= 2 && vO50.mo2.x == -1 && vO50.mo2.y == -1 && btoa(vBtoa21) == vO50.d_3 || v1600 == 1 && vO50.mo == 4 && vLN0233 <= 40 && btoa(vBtoa24) == vO50.d_1 || v1600 == 1 && vO50.mo == 5 && vLN0233 <= 40 && btoa(vBtoa23) == vO50.d_2) {
            vO50.mo2.y = v1601;
            v1595.img_f.visible = true;
            v1595.img_pf_1.visible = true;
            if (vO50.mo == 1) {
              v1595.img_p_1.visible = false;
              v1595.img_pf_1.x = v1595.img_p_1.x;
              v1595.img_pf_1.y = v1595.img_p_1.y;
            }
            if (vO50.mo == 2 || vO50.mo == 4 || vO50.mo == 5) {
              v1595.img_p_2.visible = false;
              v1595.img_pf_1.x = v1595.img_p_2.x;
              v1595.img_pf_1.y = v1595.img_p_2.y;
            }
            if (vO50.mo == 3 && btoa(vBtoa21) == vO50.d_3) {
              v1595.img_p_3.visible = false;
              v1595.img_pf_1.x = v1595.img_p_3.x;
              v1595.img_pf_1.y = v1595.img_p_3.y;
            }
            if (vO50.mo != 4 && vO50.mo != 5) {
              v1595.img_f.x = v1598 - 100;
              v1595.img_f.y = v1599 - 100;
            }
            vThis64.eo = true;
          }
          ;
          p1466.preventDefault();
        } else {
          if (p1466 = p1466 || window.event) {
            vThis64.eo = p1466.touches.length >= 2;
          }
          p1466.preventDefault();
        }
      }, true);
      v1557.addEventListener(vO47.a("f0b55d36972d53a99c"), function (p1467) {
        if (vO49.on && vO50.mobile && vO50.mo != 6 && vO50.s) {
          var v1608 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa25 = btoa(vO50.c_1);
          if (p1467 = p1467 || window.event) {
            if ((p1467 = p1467.changedTouches[0]).clientX !== undefined) {
              vF74(p1467.clientX, p1467.clientY);
            } else {
              vF74(p1467.pageX, p1467.pageY);
            }
          }
          var vBtoa26 = btoa(vO50.c_2);
          var v1609 = p1467.identifier;
          if (v1609 == vO50.mo1.x && vO50.mo1.y == -1 && btoa(vBtoa26) == vO50.d_2) {
            vO50.mo1.x = -1;
            if (vO50.mo == 1) {
              v1608.img_p_1.alpha = 0.25;
            }
            if (vO50.mo == 2) {
              v1608.img_o_2.alpha = 0.25;
              v1608.img_i_2.alpha = 0.25;
              v1608.img_p_2.alpha = 0.25;
            }
            if (vO50.mo == 3 && btoa(vBtoa25) == vO50.d_1) {
              v1608.img_o_3.alpha = 0.25;
              v1608.img_i_3.alpha = 0.25;
              v1608.img_p_3.alpha = 0.25;
            }
            if (vO50.mo == 4) {
              v1608.img_p_2.alpha = 0.25;
            }
            if (vO50.mo == 5) {
              v1608.img_p_2.alpha = 0.25;
            }
          }
          var vBtoa27 = btoa(vO50.c_3);
          if (vO50.mo2.x == -1 && v1609 == vO50.mo2.y && btoa(vBtoa27) == vO50.d_3) {
            vO50.mo2.y = -1;
            v1608.img_f.visible = false;
            v1608.img_pf_1.visible = false;
            if (vO50.mo == 1) {
              v1608.img_p_1.visible = true;
            }
            if (vO50.mo == 2 || vO50.mo == 4 && btoa(vBtoa26) == vO50.d_2 || vO50.mo == 5 && btoa(vBtoa27) == vO50.d_3) {
              v1608.img_p_2.visible = true;
            }
            if (vO50.mo == 3) {
              v1608.img_p_3.visible = true;
            }
            if (vO50.mo == 4 || vO50.mo == 5) {
              v1608.img_f.visible = true;
            }
            vThis64.eo = false;
          }
        } else {
          if (p1467 = p1467 || window.event) {
            vThis64.eo = p1467.touches.length >= 2;
          }
          if (vO50.mobile && vO50.s && (p1467 = p1467 || window.event)) {
            if ((p1467 = p1467.changedTouches[0]).clientX !== undefined) {
              vF74(p1467.clientX, p1467.clientY);
            } else {
              vF74(p1467.pageX, p1467.pageY);
            }
          }
        }
      }, true);
      v1557.addEventListener(vO47.a("9b21f2fb6c354cfdd531"), function (p1468) {
        if (p1468 = p1468 || vO37.c[vO47.a("4236723028a3")] && vO47.a("1573f9acfc6c72a2786a") != f(p1468.clientX)) {
          vThis64.fo = vO47.ta(p1468.clientY - v1557.offsetHeight * 0.5, p1468.clientX - v1557.offsetWidth * 0.5);
        }
      }, true);
      v1557.addEventListener(vO47.a("899764c97e9bebafe66c"), function (p1469) {
        vThis64.eo = true;
      }, true);
      v1557.addEventListener(vO47.a("b14f5c914643c298"), function (p1470) {
        vThis64.eo = false;
      }, true);
      this.Wg = new vO37.lh(v1646);
      this.go = v1648.ho;
      this.fo = 0;
      this.eo = false;
      vO49.eie = vThis64;
    })).prototype.Sa = function () {};
    v1647.prototype.ml = function () {
      vO37.Nf.rg(false);
      vO48.f.h(vO37.Uf.Tf, 50);
      vO48.f.h(vO37.Uf.Qn, 1);
      vO48.f.h(vO37.Uf.Rn, 50);
      vO48.f.h(vO37.Uf.Sn, 50);
      vO48.f.g(vO37.Uf.Tn, 500);
      if (this.go === v1648.ho) {
        vO48.f.h(vO37.Uf.Un, 1);
      } else {
        vO48.f.g(vO37.Uf.Un, 500);
      }
      vO48.f.h(vO37.Uf.Vn, 50);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.h(vO37.Uf.Xn, 50);
      vO48.f.h(vO37.Uf.Yn, 50);
      vO48.f.h(vO37.Uf.Zn, 50);
      vO48.f.h(vO37.Uf.$n, 50);
      vO48.f.h(vO37.Uf._n, 50);
    };
    v1647.prototype.ho = function () {
      this.go = v1648.ho;
      return this;
    };
    v1647.prototype.io = function () {
      vO48.f.h(v1639, 1);
      vO47.Y(function () {
        vO48.f.g(v1639, 500);
      }, 3000);
      vO48.f.h(v1640, 1);
      vO47.Y(function () {
        vO48.f.g(v1640, 500);
      }, 500);
      this.go = v1648.io;
      return this;
    };
    v1647.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === v1648.io) {
        ooo.ij.mf();
      }
    };
    v1647.prototype.qg = function () {
      this.Wg.qg();
    };
    v1647.prototype.ug = function (p1471, p1472) {
      this.Wg.ug(p1471, p1472);
    };
    v1647.prototype.jo = function (p1473, p1474, p1475) {
      var v1610;
      var v1611;
      var v1612;
      if (p1474 >= 1 && p1474 <= 10) {
        v1610 = vO47.U(vO47.a("be26ee35a7abaab2a73aed77b8beffa8a22bbe11be82f780f80e") + p1474);
        v1611 = vO47.U(vO47.a("520a7a01339f368e3b0679432c8a53840e070a050a964b9c23156e120f8d54"));
        v1612 = vO47.U(vO47.a("6058ccd701cd88500954cf951fd2cd56112d9cb01ca4c4222a2cc9be10b99022e522b194ebbaa2")).replace(vO47.a("ce24a01c"), p1475).replace(vO47.a("51b9e2f9"), p1473).replace(vO47.a("44eeb46a"), v1610);
      } else {
        v1610 = vO47.a("9e");
        v1611 = vO47.U(vO47.a("d5af39ec3cb2f5ebbca33abe13b790e189a249ec1ba3a3f599"));
        v1612 = vO47.U(vO47.a("835deb126240271dea51e8507c2f72ebf228bbf57f296befc929eefb73240fffc627d6d8482a44")).replace(vO47.a("5cd6ae52"), p1475).replace(vO47.a("ee0481fc"), p1473);
      }
      v1642.html(vO47.U(vO47.a("011bed50e00e295f6817ee12ff1b7c357df6bd3dfaf365")));
      v1643.html(p1473);
      v1644.html(v1610);
      v1645.html(v1611);
      if (vO46.co.bo) {
        var v1613;
        var v1614;
        var v1615;
        var v1616;
        var v1617;
        var v1618;
        var v1619;
        var v1620 = vO47.U(vO47.a("0d97e1a4f47a3da3746bf2e6eb6f68b9717ab1a3c97351b1"));
        vO47.U(vO47.a("439d2b52a280e75d2a912810bc6fb22b32687b35bf69ab2f09692e3bb364cf310264113f8876"));
        v1641.empty().append((v1613 = v1620, v1614 = vO47.a("2bb4596adf938b0d1c935a54da89cd4f158552"), v1615 = vO47.a("0a6ca36f63fea4c43c4abb"), v1616 = v1612, v1617 = v1612, v1618 = vO47.a("16cfacdd6a58e60231d88fc34f52905008de879643568d5a4bccdfae556e872d57b59de453269b6050aa77ff282363"), (v1619 = $(vO47.a("a368c1ff516615e9dd3b8de6420c5fd18e46ddd243180385941bcad91107729cac06a2997548798ae40fbbd96da027a7a1f7bca939b57bfbf5bdffee27ad43e2c1b49ceb45a84bfa9df588a92dcf09dfd194d5d6579c4cdcdb98c8d85d90f99f6f8e7686e6dbecc729cc7f9bfca5e37476e62b") + vO47.a("763b4a6c19ff1cf5432d7033a2ea79b7b635686ee3ff38f5b33d6414a48174cdf34e3f41ee967e99ab194211c4da08d99b154b0c9b8c2df99f1d5f7f8eb315b1de671c7498864ef98c61b771f6e6b283f460b177fdb3a1e8f771a317ffd4a5cbef0fad50f4d8eac0e85f8e4581c389c1d5599159d9ce82cbc34889afc723833cd8b295bec3258965c8bdb6a7363df27d2ba3fcb73e78e12c3db1e981220ee6103894f8982b05ef002c9ace820201d11b15c1dd89420dd4131bd3ddf81c76d47207e9c1a1177ec5630f9934e47429267520be64b577792f3b28b932ce6c5f3b16208026") + vO47.a("b11e4094544889") + v1613 + vO47.a("74f999340828d4f540e2da26f66f"))).click(function () {
          if (vO47.a("aace02d9cb59192fd7a7") !== (typeof FB == "undefined" ? "undefined" : f(FB)) && vO47.a("371d57cede0ad4c05a14") != f(FB.ui)) {
            FB.ui({
              method: vO47.a("7b4a180b9b"),
              display: vO47.a("d8d9755ba95d"),
              link: v1614,
              name: v1615,
              caption: v1616,
              description: v1617,
              picture: v1618
            }, function () {});
          }
        }), v1619));
      }
    };
    v1647.prototype.ko = function () {
      return this.fo;
    };
    v1647.prototype.lo = function () {
      return this.eo;
    };
    v1648 = {
      ho: 0,
      io: 1
    };
    vO37.Bk = v1647;
    v1649 = $(vO47.a("d0827e4cb5417fc9bf846a59b34a6cca93c20f508b5b52"));
    v1650 = $(vO47.a("1525fba7f86e72a27a23efa2ce7551b156658abac868"));
    v1651 = $(vO47.a("11a1ff2bf4e27e267ea7eb3ef2e96d3552e18e20c0ee53"));
    (v1652 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.ao);
      this.mo = -1;
      this.no = vO47.a("50");
    })).prototype.Sa = function () {};
    v1652.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.g(vO37.Uf.Tf, 500);
      vO48.f.g(vO37.Uf.Qn, 1);
      vO48.f.h(vO37.Uf.Rn, 50);
      vO48.f.h(vO37.Uf.Sn, 50);
      vO48.f.h(vO37.Uf.Tn, 50);
      vO48.f.h(vO37.Uf.Un, 50);
      vO48.f.h(vO37.Uf.Vn, 50);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.h(vO37.Uf.Xn, 50);
      vO48.f.g(vO37.Uf.Yn, 500);
      vO48.f.h(vO37.Uf.Zn, 50);
      vO48.f.h(vO37.Uf.$n, 50);
      vO48.f.h(vO37.Uf._n, 50);
    };
    v1652.prototype.nl = function () {
      ooo.ij.Ye(vO37.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    v1652.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    v1652.prototype.oo = function () {
      this.po(vO47.a("ef"), 0);
      vO48.f.g(v1649, 100);
    };
    v1652.prototype.qo = function () {
      vO48.f.h(v1649, 100);
    };
    v1652.prototype.po = function (p1476, p1477) {
      if (this.no !== p1476) {
        this.no = p1476;
      }
      var v1621 = vO47.fa(vO47._(p1477 * 100), 0, 100);
      if (this.mo !== v1621) {
        v1650.css(vO47.a("c620e13dbeb3"), v1621 + vO47.a("f94f"));
        v1651.html(v1621 + vO47.a("2e9fd5"));
      }
    };
    vO37.$k = v1652;
    v1653 = $(vO47.a("be6ced3cefbfedbba37afc36ba"));
    $(vO47.a("b8aa9766916197e1a5bc6176aa6163e5"));
    $(vO47.a("dac8f180f303c91f87dec69a9203c714"));
    v1654 = $(vO47.a("bd8d521d6cd0ac00b1d92a552bcfbf08a2d03c"));
    v1655 = $(vO47.a("be6ced3cefbee1bbb37aeb36a4af"));
    v1656 = $(vO47.a("1d2df2bd8c7e4cb5417fc9bf"));
    v1657 = $(vO47.a("cb5fa0d362ec3ea3b7edbba17af82ba5bcfeb8bd2cbd03b391"));
    v1658 = $(vO47.a("1bef7063b2bcce7347bd4b718aa8db754cae486ddccdc5474b90"));
    $(vO47.a("e4164bdac5dc5c5e824903cb95b946"));
    v1659 = $(vO47.a("4cbee3727d52f9ca3a88f546365f"));
    v1660 = $(vO47.a("2bff40738293da4b5dc94554d29e"));
    v1661 = $(vO47.a("0ebcbdcc3f50bf4c788ab6cc625f"));
    v1662 = $(vO47.a("18ca3706311e35864edc0d054107"));
    v1663 = $(vO47.a("b4269bea95fa9162d22091f9a5e32f71b16172f8a6b46672bf69"));
    v1664 = $(vO47.a("2d3dc28d9c525296544bc4c5d7435887534fd295"));
    v1665 = $(vO47.a("7e2c2d7cafe325e7e77a3b34edfa21f8a3723f45f7"));
    v1666 = $(vO47.a("f5c51ac5548b98d89481119df19e62cd"));
    v1667 = $(vO47.a("3eec6dbc6f3267212fb866f42d2e692e3a"));
    v1668 = $(vO47.a("1684b5c4374abf5977c08e9c4e5c835c48"));
    v1669 = $(vO47.a("c7dba457668c215fb665a36f3a6a3329"));
    v1670 = $(vO47.a("6edc5d6c5ff040ea0462"));
    v1671 = $(vO47.a("bc2e93e2edfd6772a07074e4"));
    v1672 = $(vO47.a("bae811a0933ce525b6baeab2b5"));
    v1673 = $(vO47.a("3eec6dbc6f306b3c28a425bb2523"));
    v1674 = $(vO47.a("4bdf2053e270bd232a61276bb67eb83e3a7e"));
    v1675 = $(vO47.a("6edc5d6c5ff358e40f624a240ff859ff106e2d74"));
    v1676 = $(vO47.a("82b029f8ab742770e4e861ebef73"));
    v1677 = $(vO47.a("56c47584771b700c278a52dc070b545804965a"));
    v1678 = $(vO47.a("f70b9407565c110f8655735fe64cf55b715965"));
    v1679 = $(vO47.a("46f465b4672b603c37ba62cc3e0662003a"));
    (v1680 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.kl);
      this.mo = -1;
      this.no = vO47.a("26");
      this.ro = new vO37.Lm(v1659);
      v1665.click(function () {
        ooo.ij.if();
      });
      v1659.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      v1660.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      v1661.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      v1664.keypress(function (p1478) {
        vO50.r1 = false;
        if (p1478.keyCode === 13) {
          ooo.to();
        }
      });
      v1666.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      v1667.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      v1668.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      v1672.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      v1669.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      v1671.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      v1670.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      v1673.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var v1622 = vO37.Cg.Og(vO37.Cg.Ig);
      if (v1622 !== vO47.a("dbcd8f8b11d1") && v1622 !== vO47.a("8acf09dcc32d")) {
        v1622 = vO47.a("81b351f14bb7");
      }
      v1665.val(v1622);
    })).prototype.Sa = function () {
      var vThis65 = this;
      function f173(p1479, p1480) {
        if (p1479.pm) {
          p1480.skinId = p1479.pm.Tj;
          p1480.eyesId = p1479.pm.Uj;
          p1480.mouthId = p1479.pm.Vj;
          p1480.hatId = p1479.pm.Wj;
          p1480.glassesId = p1479.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          f173(vO50, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), vO37._j.$j);
          ooo.so.lk(ooo.ok.Vl(), vO37._j.ak);
          ooo.so.lk(ooo.ok.Wl(), vO37._j.bk);
          ooo.so.lk(ooo.ok.Xl(), vO37._j.dk);
          ooo.so.lk(ooo.ok.Yl(), vO37._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), vO37._j.$j);
          ooo.so.lk(0, vO37._j.ak);
          ooo.so.lk(0, vO37._j.bk);
          ooo.so.lk(0, vO37._j.dk);
          ooo.so.lk(0, vO37._j.ck);
        }
      });
      ooo.ok.fm(function () {
        v1666.toggle(ooo.ok.nk());
        v1668.toggle(!ooo.ok.nk());
        v1667.toggle(!ooo.ok.nk());
        v1671.toggle(ooo.ok.nk());
        v1670.toggle(ooo.ok.nk());
        v1673.toggle(ooo.ok.nk());
        v1669.toggle(true);
        v1672.toggle(true);
        if (ooo.ok.nk()) {
          v1662.hide();
          v1675.html(ooo.ok.Ll());
          v1674.attr(vO47.a("f59505cb"), ooo.ok.Nl());
          v1676.html(ooo.ok.Ql());
          v1677.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + vO47.a("a054"));
          v1678.html(ooo.ok.Sl() + vO47.a("2d3e80c0") + ooo.ok.Tl());
          v1679.html(ooo.ok.Rl());
          v1664.val(ooo.ok.Ml());
        } else {
          v1662.toggle(vO46.co.bo && !ooo.xo());
          v1675.html(v1675.data(vO47.a("c2b4f1b0b523")));
          v1674.attr(vO47.a("6d2d9d43"), vO46.H.M);
          v1676.html(vO47.a("13f525"));
          v1677.width(vO47.a("4cad"));
          v1678.html(vO47.a("49"));
          v1679.html(1);
          v1664.val(vO37.Cg.Og(vO37.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        vThis65.ro.Gm(ooo.so.ek());
      });
    };
    v1680.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.g(vO37.Uf.Tf, 500);
      vO48.f.g(vO37.Uf.Qn, 1);
      vO48.f.g(vO37.Uf.Rn, 500);
      vO48.f.g(vO37.Uf.Sn, 500);
      vO48.f.h(vO37.Uf.Tn, 50);
      vO48.f.h(vO37.Uf.Un, 50);
      vO48.f.g(vO37.Uf.Vn, 500);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.h(vO37.Uf.Xn, 50);
      vO48.f.h(vO37.Uf.Yn, 50);
      vO48.f.h(vO37.Uf.Zn, 50);
      vO48.f.h(vO37.Uf.$n, 50);
      vO48.f.h(vO37.Uf._n, 50);
    };
    v1680.prototype.yo = function () {
      vO48.f.g(v1653, 500);
      vO48.f.g(v1654, 500);
      vO48.f.g(v1655, 500);
      vO48.f.h(v1656, 100);
    };
    v1680.prototype.zo = function () {
      vO48.f.h(v1653, 100);
      vO48.f.h(v1654, 100);
      vO48.f.h(v1655, 100);
      vO48.f.g(v1656, 500);
    };
    v1680.prototype.po = function (p1481, p1482) {
      if (this.no !== p1481) {
        this.no = p1481;
      }
      var v1623 = vO47.fa(vO47._(p1482 * 100), 0, 100);
      if (this.mo !== v1623) {
        v1657.css(vO47.a("b630112dcea3"), v1623 + vO47.a("3eea"));
        v1658.html(v1623 + vO47.a("a051c7"));
      }
    };
    v1680.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    v1680.prototype.hl = function () {
      this.ro.rg(false);
    };
    v1680.prototype.qg = function () {
      this.ro.qg();
    };
    v1680.prototype.ug = function (p1483, p1484) {
      this.ro.ug();
    };
    v1680.prototype.Ml = function () {
      return v1664.val();
    };
    v1680.prototype.Ao = function () {
      return v1665.val();
    };
    v1680.prototype.uo = function () {
      var v1624 = $(vO47.a("b347d8cb1a095ddcd20fd8835c1f2fc6")).children();
      var vLN0234 = 0;
      vO47.X(function () {
        v1624.eq(vLN0234).fadeOut(500, function () {
          if (++vLN0234 >= v1624.length) {
            vLN0234 = 0;
          }
          v1624.eq(vLN0234).fadeIn(500).css(vO47.a("0277ad6676fba9e0"), vO47.a("87d1e79662d268d3edacfe6178"));
        });
      }, 3000);
    };
    v1680.prototype.vo = function () {
      if (vO46.co.bo && !ooo.xo()) {
        v1662.show();
        var v1625 = vO47.U(vO47.a("455fa99cac42659b2c53aa2ebc233a6a7b2bb266ac642e623121bc7bb2390a7a1678947088280e"));
        var vEncodeURIComponent2 = encodeURIComponent(vO47.U(vO47.a("00b82c37612d68b069b42f75613c27b13e8c370d614b2389748639004f06378153df011c491027994ca9061a55")));
        v1663.append($(vO47.a("00ed2373673927a47be4683661703db4798f7f0c620024ca7a9c2e1f73037ccf49955f5149184b8443900456430b0b8d1d6710a114f117755f6c0eb61ed21c63217fe9b164fdf4722e24a8f338e9fe6c6a0ebdd423d2b841394affc933c2f501035ecf9c00dcc75b075e85c804dcdc5a4f20c2b32bacd27a407f8bf24efb867ab067f3eab4e0f771ec30b9abe0bcb762e00ea296e4c3be15fd0fe783e899ae1c8542a3d696b3c345ee0e8589c19c9a1a9ee89d25c66092eecaec997fe3788ce6fdf97667b46623a489bc385de92f48e8bfd37f42a04038ceb78f724aaf456ace878c0701d74249c585d85e5e855208ce85ae4626c9") + vEncodeURIComponent2 + vO47.a("4190fd") + vO47.a("10dd3b0e734525957bd4780f7d193fd5499c0314415a15814fd2121640460c9e436444b718d53e490a5303c908ef29773572f8a32df4ce45787acef43ad1bd7b6345eb9667e8ef122e4af7c82ae0f46e177ce18a1ed1cb540170e2e100dec071002380f74d8cdc020d04e9821ba8fa7fe91c819ae3b09267e1148992ebb9a333fc05e2a9e2809257f12499aaeba49a3e913f8bb294bbb22ec130a293d89faa0fcae2b545de5fa2b7d1eab241d06eccd9b9f56f46ad456cefbfc05249a35449cee9e87913ad6b52f6ade4636aec634af5b7fc4850d1794cd387f57e6ed97144f1c28d66208c095cab97876e2089000d96749f2812711b019a7f951e0a761124b477ac2836612b3fd72ba6095f2d241a8c15bd0826503b1c9c5db73d1c1e3000a6024f31b706e43537084739bf0cd4073f385cfba771dcc2563c54e0ce39d0f75e286cc1972ee9c26e6965f0e63be0f47a157c91ea55f8e1505a76e98f5ddfed0f450dd896138bcc020d06edac0883ea24f51c948ab49b920dbe10a399e1bc9927e33181aafebfbb3df520b3d3b7bd9d56da158f908fd7c949") + vO47.a("c7c4ba4a2a9273") + v1625 + vO47.a("375416d9cb0dd390035f208c")).click(function f174() {
          ooo.Bo(true);
          vO47.Y(function () {
            v1662.hide();
          }, 3000);
        }));
      }
    };
    vO37.Ck = v1680;
    (v1681 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.ao);
    })).prototype.Sa = function () {};
    v1681.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.h(vO37.Uf.Tf, 50);
      vO48.f.h(vO37.Uf.Qn, 1);
      vO48.f.h(vO37.Uf.Rn, 50);
      vO48.f.h(vO37.Uf.Sn, 50);
      vO48.f.h(vO37.Uf.Tn, 50);
      vO48.f.h(vO37.Uf.Un, 50);
      vO48.f.h(vO37.Uf.Vn, 50);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.h(vO37.Uf.Xn, 50);
      vO48.f.h(vO37.Uf.Yn, 50);
      vO48.f.h(vO37.Uf.Zn, 50);
      vO48.f.h(vO37.Uf.$n, 50);
      vO48.f.h(vO37.Uf._n, 50);
    };
    vO37.el = v1681;
    (v1682 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.ao);
    })).prototype.Sa = function () {};
    v1682.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.g(vO37.Uf.Tf, 500);
      vO48.f.g(vO37.Uf.Qn, 1);
      vO48.f.h(vO37.Uf.Rn, 50);
      vO48.f.h(vO37.Uf.Sn, 50);
      vO48.f.h(vO37.Uf.Tn, 50);
      vO48.f.h(vO37.Uf.Un, 50);
      vO48.f.h(vO37.Uf.Vn, 50);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.h(vO37.Uf.Xn, 50);
      vO48.f.h(vO37.Uf.Yn, 50);
      vO48.f.g(vO37.Uf.Zn, 500);
      vO48.f.h(vO37.Uf.$n, 50);
      vO48.f.h(vO37.Uf._n, 50);
    };
    v1682.prototype.nl = function () {};
    vO37.Xk = v1682;
    v1683 = $(vO47.a("5d6dab7f80211771177b946c883900"));
    (v1684 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    v1684.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.g(vO37.Uf.Tf, 500);
      vO48.f.g(vO37.Uf.Qn, 1);
      vO48.f.h(vO37.Uf.Rn, 50);
      vO48.f.g(vO37.Uf.Sn, 500);
      vO48.f.h(vO37.Uf.Tn, 50);
      vO48.f.h(vO37.Uf.Un, 50);
      vO48.f.h(vO37.Uf.Vn, 50);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.g(vO37.Uf.Xn, 500);
      vO48.f.h(vO37.Uf.Yn, 50);
      vO48.f.h(vO37.Uf.Zn, 50);
      vO48.f.h(vO37.Uf.$n, 50);
      vO48.f.h(vO37.Uf._n, 50);
    };
    v1684.prototype.nl = function () {
      this.Eo();
    };
    v1684.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    v1684.prototype.Fo = function (p1485) {
      this.Co.unshift(p1485);
      vO47.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v1684.prototype.km = function (p1486) {
      this.Co.push(p1486);
      vO47.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v1684.prototype.Eo = function () {
      var vThis66 = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var v1626 = this.Co.shift();
        this.Do = v1626;
        var v1627 = v1626.ag();
        vO48.f.g(v1627, 300);
        v1683.append(v1627);
        v1626.Go = function () {
          v1627.fadeOut(300);
          vO47.Y(function () {
            v1627.remove();
          }, 300);
          if (vThis66.Do === v1626) {
            vThis66.Do = null;
          }
          vThis66.Eo();
        };
        v1626.nl();
      }
    };
    vO37.Zk = v1684;
    vO37.ll = {
      ao: 0,
      kl: 1
    };
    v1685 = $(vO47.a("7062c2ac04b0c66a152cd4be51a1df2de53d"));
    v1686 = $(vO47.a("46f478b63a2e7c7023ba7e947f007b0c3894358b3513"));
    v1687 = $(vO47.a("5ecc509e120654580b92468c47184314008c1d7713ef"));
    $(vO47.a("69f99bf39dab1f8d1c879dd1d88416cb12")).click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    v1686.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (v1688 = vO47.ca(vO37.Uf, function (p1487, p1488) {
      vO37.Uf.call(this, vO37.ll.kl);
      this.Xa = p1487;
      this.Io = p1488;
      this.Jo = [];
    })).prototype.Sa = function () {
      v1688.parent.prototype.Sa.call(this);
      if (!v1688.Ko) {
        v1688.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            v1687.html(ooo.ok.Ql());
          } else {
            v1687.html(vO47.a("f0f1"));
          }
        });
      }
      vO48.f.h(vO37.Ho.Lo, 100);
    };
    v1688.Mo = $(vO47.a("8317e6196e567a57fd55e809"));
    v1688.No = $(vO47.a("05d5ebdde89e6ece7ed3f9a9f475"));
    v1688.Oo = $(vO47.a("ee5cc0f39d65dd6993aacee09f7c"));
    v1688.Po = $(vO47.a("10c23e0c730c38ca6e803f1c"));
    v1688.Qo = $(vO47.a("f387868303dc10849cdfd09816d5f6"));
    v1688.Ro = $(vO47.a("dac8ef86b701d35c949ac182"));
    v1688.So = $(vO47.a("9ccead1bcf0387ded29c8300"));
    v1688.To = $(vO47.a("382a0dee5dff53792974f5"));
    v1688.Uo = $(vO47.a("c9193c953956ab72b0357e673a28a46db73e767a342ba8"));
    v1688.Vo = $(vO47.a("ef0395071f410103da499a091459131ad2466817f4"));
    v1688.Lo = $(vO47.a("e9791b70083f9c45dc15124d014b81419c1d"));
    v1688.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.g(vO37.Uf.Tf, 1);
      vO48.f.g(vO37.Uf.Qn, 500);
      vO48.f.g(vO37.Uf.Rn, 200);
      vO48.f.g(vO37.Uf.Sn, 200);
      vO48.f.h(vO37.Uf.Tn, 200);
      vO48.f.h(vO37.Uf.Un, 200);
      vO48.f.h(vO37.Uf.Vn, 200);
      vO48.f.g(vO37.Uf.Wn, 200);
      vO48.f.h(vO37.Uf.Xn, 200);
      vO48.f.h(vO37.Uf.Yn, 200);
      vO48.f.h(vO37.Uf.Zn, 200);
      vO48.f.h(vO37.Uf.$n, 200);
      vO48.f.h(vO37.Uf._n, 200);
      v1685.html(this.Xa);
      v1686.toggle(this.Io);
      this.Wo();
    };
    v1688.prototype.Wo = function () {};
    v1688.prototype.Xo = function (p1489) {
      var vThis67 = this;
      var v1628 = vO47.va(0, 2147483647) & 2147483647;
      this.Jo.push(v1628);
      vO48.f.g(vO37.Ho.Lo, 100);
      vO47.Y(function () {
        vThis67.Yo(v1628);
      }, p1489);
      return new vF56(this, v1628);
    };
    v1688.prototype.Yo = function (p1490) {
      var v1629 = this.Jo.indexOf(p1490);
      if (!(v1629 < 0)) {
        this.Jo.splice(v1629, 1);
        if (this.Jo.length === 0) {
          vO48.f.h(vO37.Ho.Lo, 100);
        }
      }
    };
    vO37.Ho = v1688;
    var v1630;
    var v1631;
    var v1632;
    var v1633;
    var v1634;
    var v1635;
    var v1636;
    var v1637;
    var v1638;
    var v1639;
    var v1640;
    var v1641;
    var v1642;
    var v1643;
    var v1644;
    var v1645;
    var v1646;
    var v1647;
    var v1648;
    var v1649;
    var v1650;
    var v1651;
    var v1652;
    var v1653;
    var v1654;
    var v1655;
    var v1656;
    var v1657;
    var v1658;
    var v1659;
    var v1660;
    var v1661;
    var v1662;
    var v1663;
    var v1664;
    var v1665;
    var v1666;
    var v1667;
    var v1668;
    var v1669;
    var v1670;
    var v1671;
    var v1672;
    var v1673;
    var v1674;
    var v1675;
    var v1676;
    var v1677;
    var v1678;
    var v1679;
    var v1680;
    var v1681;
    var v1682;
    var v1683;
    var v1684;
    var v1685;
    var v1686;
    var v1687;
    var v1688;
    var v1689;
    var v1690;
    var v1691;
    var v1692;
    var v1693;
    var v1694;
    var v1695;
    var v1696;
    var v1697;
    var v1698;
    var v1699;
    var v1700;
    var v1701;
    var v1702;
    var v1703;
    var v1704;
    var v1705;
    var v1706;
    var v1707;
    var v1708;
    var v1709;
    var v1710;
    var v1711;
    var v1712;
    var v1713;
    var v1714;
    var v1715;
    var v1716;
    var v1717;
    var v1718;
    var v1719;
    var v1720;
    var v1721;
    var v1722;
    var v1723;
    var v1724;
    var v1725;
    var v1726;
    var v1727;
    var v1728;
    var v1729;
    var v1730;
    var v1731;
    var v1732;
    var v1733;
    var v1734;
    var v1735;
    var v1736;
    var v1737;
    var v1738;
    var v1739;
    var v1740;
    var v1741;
    var v1742;
    var v1743;
    var v1744;
    var v1745;
    var v1746;
    var v1747;
    var v1748;
    var v1749;
    var v1750;
    var v1751;
    var v1752;
    var v1753;
    var v1754;
    var v1755;
    var v1756;
    var v1757;
    var v1758;
    var v1759;
    var v1760;
    var v1761;
    var v1762;
    var v1763;
    var v1764;
    var v1765;
    var v1766;
    var v1767;
    var v1768;
    var v1769;
    var v1770;
    var v1771;
    var v1772;
    var v1773;
    var v1774;
    var v1775;
    var v1776;
    var v1777;
    var v1778;
    var v1779;
    var v1780;
    var vF56 = function () {
      function f175(p1491, p1492) {
        this.Zo = p1491;
        this.$o = p1492;
      }
      f175.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return f175;
    }();
    v1689 = $(vO47.a("f8ea493f933f5be262a43b7e673a2fb97b867b69396d7eef"));
    v1690 = $(vO47.a("b10140905a54d2c5db5f42c15e41d69eb26d76c47506f7"));
    v1691 = $(vO47.a("f220c77199f5dda4987ec5209de0a9ff714cf52336a7f8"));
    v1692 = $(vO47.a("e41655c387cb4f168e48579293ae5b2d871a01f7c8f9"));
    v1693 = $(vO47.a("1e8c93c54d41811844c29194495485535de0c3f30773"));
    v1694 = $(vO47.a("21b1d020cae442754befd271cef1460e42fd82568096"));
    (v1695 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("5d27b174842a4d73043b823699351b691d7082459f175d471a0f995bd71e1a4e")), false);
      var vThis68 = this;
      v1689.click(function () {
        ooo.ij.if();
        vThis68.ap(vO47.a("91617cad7b75c8f9ab3f2bfc2d"));
      });
      v1690.click(function () {
        ooo.ij.if();
        vThis68.ap(vO47.a("7caed126ee229de6b4e5f667"));
      });
      v1691.click(function () {
        ooo.ij.if();
        vThis68.ap(vO47.a("4a38633420ac4fd064532455"));
      });
      v1692.click(function () {
        ooo.ij.if();
        vThis68.ap(vO47.a("a1714cbd4b65f8ef992a1b"));
      });
      v1693.click(function () {
        ooo.ij.if();
        vThis68.ap(vO47.a("77cb168395dfa2dd4d85b1"));
      });
      v1694.click(function () {
        ooo.ij.if();
        vThis68.ap(vO47.a("59a9b4e5b3bd00a153e7d3"));
      });
    })).prototype.Sa = function () {
      v1695.parent.prototype.Sa.call(this);
    };
    v1695.prototype.Wo = function () {
      vO48.f.g(vO37.Ho.Mo, 200);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1695.prototype.nl = function () {
      ooo.ij.jf();
    };
    v1695.prototype.ap = function (p1493) {};
    vO37.Ik = v1695;
    v1696 = $(vO47.a("36e490a05d238f2e51bd65fc3632663923"));
    v1697 = $(vO47.a("85556b5d681eee4efe536d3565f6fc2ab8ea723e7ce6"));
    v1698 = $(vO47.a("ef039d071240101484059b1f0f581200d2586815eb47e619755d"));
    v1699 = $(vO47.a("be6cec34a3b7e1a7b57aea2cbeafe3b3e334f90dbe90"));
    v1700 = vO47.a("22519d7943c18dd5");
    v1701 = vO47.a("d605e121b38cf4bebd00d214");
    v1702 = vO47.a("8033bb98edb9aa24c937ae93e9bcaa0cf80ea690");
    (v1703 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("f741970e1e5453099e5d645cf35bf5037716641fe549a3126a2175e7e137bbf2762a")), true);
      var vThis69 = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: v1697,
          fp: v1700
        },
        gp: {
          ep: v1698,
          fp: v1701
        },
        hp: {
          ep: v1699,
          fp: v1702
        }
      };
      v1697.click(function () {
        ooo.ij.if();
        vThis69.ip(vThis69.cp.dp);
      });
      v1698.click(function () {
        ooo.ij.if();
        vThis69.ip(vThis69.cp.gp);
      });
      v1699.click(function () {
        ooo.ij.if();
        vThis69.ip(vThis69.cp.hp);
      });
    })).prototype.Sa = function () {
      v1703.parent.prototype.Sa.call(this);
    };
    v1703.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.g(vO37.Ho.No, 200);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1703.prototype.nl = function () {
      var vThis70 = this;
      ooo.ij.jf();
      var v1781 = this.Xo(5000);
      var v1782 = vO46.H.J + vO47.a("2d31df95d30d5f815442d29aca");
      vO47.Aa(v1782, function () {
        var vO74 = {
          [v1700]: [],
          [v1701]: [],
          [v1702]: []
        };
        vThis70.bp = vO74;
        vThis70.ip(vThis70.jp ?? vThis70.cp.dp);
        v1781._o();
      }, function (p1494) {
        vThis70.bp = p1494;
        vThis70.ip(vThis70.jp ?? vThis70.cp.dp);
        v1781._o();
      });
    };
    v1703.prototype.ip = function (p1495) {
      this.jp = p1495;
      for (var v1783 in this.cp) {
        if (this.cp.hasOwnProperty(v1783)) {
          this.cp[v1783].ep.removeClass(vO47.a("73540703845b9c0e"));
        }
      }
      ;
      this.jp.ep.addClass(vO47.a("ef50830700571002"));
      for (var v1784 = this.bp[this.jp.fp], v1785 = vO47.a("60"), vLN0235 = 0; vLN0235 < v1784.length; vLN0235++) {
        var v1786 = v1784[vLN0235];
        v1785 += vO47.a("d5fa33e12feab8e0bcbd2cad43a682f689b34aea06adc9a2d1ad1fc11fdc").concat(vLN0235 + 1, vO47.a("022feb6676f6a6a73668bc7c60a1ecc87f44f45664c4e58b")).concat(v1786[vO47.a("c2b2f2b4b236fa0cb8b7")], vO47.a("36e5d7f706648f3d5fa13eed3123653b78")).concat(v1786[vO47.a("272d5affd932ccf34a")], vO47.a("74f999340828d4f540bece2eee6f")).concat(v1786[vO47.a("423f612323bb")], vO47.a("51fefcf7a5a739b665b9abedb3f0")).concat(v1786[vO47.a("fd8616d7e9a160db7793")], vO47.a("9855f598ec8cb0519c029292cacb")).concat(v1786[vO47.a("fc255bae64822a3c7026")], vO47.a("1203fb05")).concat(v1786[vO47.a("0d95e6acfd71")], vO47.a("4825a5e83cfce0216c0ef6ca229b"));
      }
      ;
      v1696.empty();
      v1696.append(v1785);
    };
    vO37.Kk = v1703;
    v1704 = $(vO47.a("33c74549c79dc90757835a47d1dda655"));
    v1705 = $(vO47.a("071b7915fb49fd53632f76ebfd69f3e4"));
    (v1706 = vO47.ca(vO37.Ho, function () {
      var vThis71 = this;
      vO37.Ho.call(this, vO47.U(vO47.a("354fd98cdc52158b5c43dadeb15d33813518aa9da74f65902259a66eff363266")), false);
      v1704.click(function () {
        ooo.ij.if();
        var v1787 = vThis71.Xo(10000);
        vO47.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v1787._o();
          });
        }, 500);
      });
      v1705.click(function () {
        ooo.ij.if();
        var v1788 = vThis71.Xo(10000);
        vO47.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v1788._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      v1706.parent.prototype.Sa.call(this);
    };
    v1706.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.g(vO37.Ho.Po, 200);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1706.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO37.Ok = v1706;
    v1707 = $(vO47.a("0b9f7d8ce0a6f86e76e97470f6bcf878"));
    v1708 = $(vO47.a("51e1a3f6baa03ee43ce7aeffb8bc31f10cb7"));
    v1709 = $(vO47.a("6d7d9f529e041a48104b9250890f094518009c552c10e246"));
    v1710 = $(vO47.a("03977584e8dee0966e916886ffa5e36b76aa7663babef866"));
    v1711 = $(vO47.a("984aaa99f38bb703c55c8e96d2908a"));
    v1712 = $(vO47.a("f8ea4a39932b57a365fc312765216bbf61be22086f323cba"));
    v1713 = $(vO47.a("d40666d5b7cf7347b9006ddb81c50f51814652e49dcb5c529a5c42eb99ac57"));
    v1714 = $(vO47.a("feacb0e36d75ad7963babbed6b6fe17667f3bcd2"));
    v1715 = $(vO47.a("b9094b9e5248d69ca41f30802442ea90ac5b2f8f2551bb73"));
    v1716 = $(vO47.a("19a9eb3ef2e8763c44bfd020c4e20a3f48f7ce2ffdf24e1954c6"));
    v1717 = $(vO47.a("b42686f5d7ef9367d9208dfba1e52f67ab6167fb9cf0677e9f6d6bf1a4"));
    v1718 = $(vO47.a("5b2f2d3cb076883e06391622866cc4280e7b042d9b5290161a4b1b22965c9c"));
    (v1719 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("156ff9acfc7235ab7c63fafed17d53a15538cabdc76f05ac5f71c989dd471d905444")), true);
    })).prototype.Sa = function () {
      v1719.parent.prototype.Sa.call(this);
    };
    v1719.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.g(vO37.Ho.Oo, 200);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1719.prototype.nl = function () {
      ooo.ij.jf();
      var v1789 = ooo.ok.dm();
      var v1790 = moment([v1789.year, v1789.month - 1, v1789.day]).format(vO47.a("a794e5"));
      v1708.html(ooo.ok.Ll());
      v1707.attr(vO47.a("52106606"), ooo.ok.Nl());
      v1709.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + vO47.a("10c4"));
      v1710.html(ooo.ok.Sl() + vO47.a("ab7c82be") + ooo.ok.Tl());
      v1711.html(ooo.ok.Rl());
      v1712.html(ooo.ok.Zl());
      v1713.html(vO47.$(ooo.ok.$l()));
      v1714.html(ooo.ok._l());
      v1715.html(ooo.ok.am());
      v1716.html(ooo.ok.bm());
      v1717.html(vO47.$(ooo.ok.cm()));
      v1718.html(v1790);
    };
    vO37.Mk = v1719;
    v1720 = $(vO47.a("11a1e021e1f27e267ef9b621e8fd76330cf7cd35c7fa423c04e9dc35d9fd47"));
    v1721 = $(vO47.a("5a486f082a9b499f05000906008f059c041a4e110b9b1d7205ea40e61e"));
    v1722 = $(vO47.a("10c2210660113f897f9a7718740229c24e900f1657581580418d0913"));
    v1723 = $(vO47.a("2f4341cdc311c58b5b075ec5ce18"));
    v1724 = $(vO47.a("34a60668487c0aa650e219603565aff02bfbf2762177efe9"));
    v1725 = $(vO47.a("302202ec44f0062a5c6c16ee48e8536e2372ede62ae1"));
    v1726 = $(vO47.a("d5e527e729bfaba1b9ab33f515b7cef586b508ed07aec6ff82b01bc1188c96d6"));
    v1727 = $(vO47.a("ab7fddf15f15418fc40dc1ce531a58dd960fd2c04c152fc6"));
    (v1728 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("20980c17410d489049940f555c121e8a402f1fe65af058745d7d0ee252ea0d213470e0")), false);
      var vThis72 = this;
      v1720.click(function () {
        var v1791 = !!v1720.prop(vO47.a("4fe339a7b0efb0a2"));
        vO37.Cg.Ng(vO37.Cg.Fg, v1791, 30);
        ooo.ij.$e(v1791);
        ooo.ij.if();
      });
      v1721.click(function () {
        var v1792 = !!v1721.prop(vO47.a("64d6ce520b52cfdf"));
        vO37.Cg.Ng(vO37.Cg.Gg, v1792, 30);
        ooo.ij.Xe(v1792);
        ooo.ij.if();
      });
      v1722.click(function () {
        ooo.ij.if();
      });
      v1723.click(function () {
        ooo.ij.if();
        vThis72.Xo(500);
        ooo.ok.qm();
      });
      v1725.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      v1727.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var v1793;
      var v1794;
      var v1795;
      v1728.parent.prototype.Sa.call(this);
      v1793 = vO37.Cg.Og(vO37.Cg.Fg) !== vO47.a("d76eb8262869");
      v1720.prop(vO47.a("1240bc4075ccbdcd"), v1793);
      ooo.ij.$e(v1793);
      v1794 = vO37.Cg.Og(vO37.Cg.Gg) !== vO47.a("2d78ce8cc247");
      v1721.prop(vO47.a("4b9f255bac6bb426"), v1794);
      ooo.ij.Xe(v1794);
      v1795 = vO37.Cg.Og(vO37.Cg.Eg) !== vO47.a("e3f284ba14fd");
      v1722.prop(vO47.a("a4968e12cb128f9f"), v1795);
      ooo.ok.em(function () {
        v1724.toggle(ooo.ok.nk());
        v1726.toggle(ooo.ok.nk());
      });
    };
    v1728.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.g(vO37.Ho.Qo, 200);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1728.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        v1727.show();
      } else {
        v1727.hide();
      }
    };
    v1728.prototype.Gi = function () {
      return v1722.prop(vO47.a("2a5884584dd495a5"));
    };
    vO37.Pk = v1728;
    v1729 = $(vO47.a("0f6362f6fc36f0ab61217cfdb62ffce069"));
    v1730 = $(vO47.a("8072b1b8edbbeb33ed2aa9a9e5adba36ff0fff97f19da2"));
    v1731 = $(vO47.a("071b7a11e252a0197d2f64f2be20f0f5743a70faef25f2e0322444ead7"));
    v1732 = $(vO47.a("96042b5df5d93980f240035ac7d749d7c745"));
    v1733 = $(vO47.a("e17110600a24823585350877083ac24290105e50101e83"));
    v1734 = $(vO47.a("c7dbba4e248e2813ad75a86f31712132b866"));
    v1735 = $(vO47.a("caf8ffa9a12df54cbb97f188fb17ea00b98e"));
    v1736 = $(vO47.a("fc6e4dbb6fa3277e632729a278aa"));
    v1737 = $(vO47.a("89d978c8628ceaede76b76b33876e5adef"));
    v1738 = $(vO47.a("c0b27167ab6763babef06f6ce1736be7a4"));
    (v1739 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("c5df291c2cc2e51bacd32aae21ada3f1a5e83aed37bff5ffb6a731e34fa682f6")), true);
      var vThis73 = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new vO37.Lm(v1729);
      v1734.click(function () {
        ooo.ij.if();
        vThis73.pp();
      });
      v1737.click(function () {
        ooo.ij.if();
        vThis73.lp.qp();
      });
      v1738.click(function () {
        ooo.ij.if();
        vThis73.lp.rp();
      });
    })).prototype.Sa = function () {
      v1739.parent.prototype.Sa.call(this);
      var vThis74 = this;
      ooo.ud.Jc(function () {
        var v1796 = ooo.ud.Gc();
        vThis74.mp = [];
        for (var vLN0236 = 0; vLN0236 < v1796[vO47.a("75159c41972d0943081ebe427313fa70ec1573")].length; vLN0236++) {
          vThis74.mp.push(new v1740(vThis74, v1796[vO47.a("fa78d76490c8b2fe7763856774f6b1dd6378b8")][vLN0236]));
        }
        ;
        vThis74.np = {};
        for (var vLN0237 = 0; vLN0237 < v1796[vO47.a("b2b01facd8060a3bdbb238a4dd3b")].length; vLN0237++) {
          var v1797 = v1796[vO47.a("2f135acbdd25c7d456117dc3d818")][vLN0237];
          vThis74.np[v1797[vO47.a("edb70b")]] = v1797;
        }
        ;
        vThis74.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis74.tp(false);
      });
    };
    v1739.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.g(vO37.Ho.Ro, 200);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1739.prototype.nl = function () {
      ooo.ij.Ye(vO37.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    v1739.prototype.hl = function () {
      this.op.rg(false);
    };
    v1739.prototype.qg = function () {
      this.op.qg();
    };
    v1739.prototype.ug = function (p1496, p1497) {
      this.op.ug();
    };
    v1739.prototype.sp = function () {
      var vThis75 = this;
      var vThis76 = this;
      v1736.empty();
      for (var vLN0238 = 0; vLN0238 < this.mp.length; vLN0238++) {
        (function (p1498) {
          var v1798 = vThis75.mp[p1498];
          var v1799 = vO37.d.createElement(vO47.a("011eea"));
          v1736.append(v1799);
          var v$18 = $(v1799);
          if (vThis76.xp && vThis76.xp.isCustom) {
            v$18.addClass("iscustom");
          }
          v$18.html(v1798.up());
          v$18.click(function () {
            ooo.ij.if();
            vThis76.vp(v1798);
          });
          v1798.wp = v$18;
        })(vLN0238);
      }
      ;
      if (this.mp.length > 0) {
        var v1800 = ooo.so.Zj(vO37._j.$j);
        for (var vLN0239 = 0; vLN0239 < this.mp.length; vLN0239++) {
          var v1801 = this.mp[vLN0239];
          for (var v1802 = v1801.xp.list, vLN0240 = 0; vLN0240 < v1802.length; vLN0240++) {
            if (v1802[vLN0240] === v1800) {
              v1801.yp = vLN0240;
              this.vp(v1801);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    v1739.prototype.vp = function (p1499) {
      if (this.lp !== p1499) {
        this.lp = p1499;
        v1736.children().removeClass(vO47.a("141524826b9a3f0f"));
        if (this.lp.wp) {
          this.lp.wp.addClass(vO47.a("dc5d6cca93c24757"));
        }
        v1731.html(vO47.a("54"));
        if (p1499.xp != null) {
          var v1803 = ooo.ud.Gc()[vO47.a("51b6b6fca1823eeb2d")][p1499.xp[vO47.a("f8ad5f389f3f57bf74b82d3d")]];
          if (v1803 != null) {
            v1731.html(vO47.aa(vO47.V(v1803)));
          }
        }
        ;
        this.tp(true);
      }
    };
    v1739.prototype.zp = function () {
      if (this.lp == null) {
        return vO37.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    v1739.prototype.pp = function () {
      var v1804 = this.zp();
      if (v1804.Cj()) {
        var v1805 = v1804.Mc();
        this.Bp(v1805);
      }
    };
    v1739.prototype.Bp = function (p1500) {
      var v1806 = ooo.so.mk(p1500, vO37._j.$j);
      if (v1806 != null) {
        var v1807 = v1806.pk();
        if (!(ooo.ok.Ql() < v1807)) {
          var v1808 = ooo.so.Zj(vO37._j.$j);
          var v1809 = ooo.so.Zj(vO37._j.ak);
          var v1810 = ooo.so.Zj(vO37._j.bk);
          var v1811 = ooo.so.Zj(vO37._j.dk);
          var v1812 = ooo.so.Zj(vO37._j.ck);
          var v1813 = this.Xo(5000);
          ooo.ok.nm(p1500, vO37._j.$j, function () {
            v1813._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v1808, vO37._j.$j);
              ooo.so.lk(v1809, vO37._j.ak);
              ooo.so.lk(v1810, vO37._j.bk);
              ooo.so.lk(v1811, vO37._j.dk);
              ooo.so.lk(v1812, vO37._j.ck);
              ooo.so.lk(p1500, vO37._j.$j);
              v1813._o();
            });
          });
        }
      }
    };
    v1739.prototype.tp = function (p1501) {
      var v1814 = ooo.so.ek();
      var v1815 = this.zp();
      if (v1815.Cj()) {
        var v1816 = v1815.Mc();
        var v1817 = ooo.so.mk(v1816, vO37._j.$j);
        var v1818 = false;
        if (ooo.so.ik(v1816, vO37._j.$j)) {
          v1732.hide();
          v1734.hide();
        } else if (v1817 == null || v1817.qk()) {
          v1818 = true;
          v1732.show();
          v1734.hide();
          v1733.text(vO47.U(vO47.a("c95325982846e167b02f362a2529a77da9643669333bf163953d11714b3a887b823f0f")));
          if (v1817 != null && v1817.qk()) {
            var v1819 = ooo.ud.Gc()[vO47.a("882dafa3f899a73ce4")][v1817.ln()];
            if (v1819 != null) {
              v1733.text(vO47.V(v1819));
            }
          }
        } else {
          v1732.hide();
          v1734.show();
          v1735.html(v1817.pk());
        }
        ;
        v1730.html(vO47.a("63"));
        if (v1817 != null && v1817.mn() != null) {
          var v1820 = ooo.ud.Gc()[vO47.a("0bc86886fb84f86167")][v1817.mn()];
          if (v1820 != null) {
            v1730.html(vO47.aa(vO47.V(v1820)));
          }
        }
        ;
        this.op.Gm(v1814.Cn(v1816));
        this.op.an(v1818);
        if (p1501) {
          ooo.so.lk(v1816, vO37._j.$j);
        }
      }
    };
    v1740 = function () {
      function f176(p1502, p1503) {
        this.Cp = p1502;
        this.yp = 0;
        this.xp = p1503;
      }
      f176.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      f176.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      f176.prototype.up = function () {
        let v1821 = vO47.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -1 || !(v1821 = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search("https://lh3.googleusercontent.com") == -1 || !(v1821 = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            v1821 = "<img src=\"" + vO50.url + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return v1821;
      };
      f176.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return vO37.yj.Aj();
        } else {
          return vO37.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return f176;
    }();
    vO37.Rk = v1739;
    v1741 = $(vO47.a("c2f0f7a1a925ed74adb4a1bea136fe12ff81e191a208f6"));
    v1742 = $(vO47.a("c9193888224caa2db62d7e773e2fb97bf4282e782921b1"));
    v1743 = $(vO47.a("912160b07a74f2e5fe6536bb786fedfdc36757a04a78"));
    (v1744 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("23bd4b72c2a0877d4ab14830df8fc15743ca5843d99d97594f834f4b9184a050")), true);
      v1741.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      v1742.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      v1743.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      v1744.parent.prototype.Sa.call(this);
    };
    v1744.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.g(vO37.Ho.So, 200);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1744.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO37.Tk = v1744;
    v1745 = $(vO47.a("5ecc5794030109030f925fd4091a420b"));
    v1746 = $(vO47.a("a6141f5ccbc941d9cb4c1333dbb300acd929553ddfb308"));
    v1747 = $(vO47.a("f46641a299bb1727932e55aa64fc203276"));
    v1748 = $(vO47.a("ae1c0724d3b159a9d924132cdee61eaccc62f434baa7"));
    v1749 = $(vO47.a("a0529596c587cb15dd00c799d9899a10de"));
    v1750 = $(vO47.a("9dad683540e08e3dd1f34a7559e8c23fc8"));
    v1751 = $(vO47.a("a85a9d9ecd8fc31ac9e4812ed67082f3d7e7"));
    v1752 = $(vO47.a("b9094c895c5c929dae47379c361ba58dbd4e2492"));
    v1753 = $(vO47.a("2210935047c5c5de465a9f4e4bccdda34737802a58"));
    v1754 = $(vO47.a("86343f7cebe961f5ef6b230cf0d620d1f949"));
    v1755 = $(vO47.a("b101448154549a9cd0444fc15e46d09fb25731"));
    v1756 = $(vO47.a("2e9c87a45331d9335fa28fe44a39993b"));
    v1757 = $(vO47.a("3eec77b4232129232fb27ff4243e7429"));
    (v1758 = vO47.ca(vO37.Ho, function () {
      var vThis77 = this;
      vO37.Ho.call(this, vO47.U(vO47.a("5048fcc731ddb8403944ff852cc2ee5a101fcfd60ac088400d58d89518dccc")), true);
      var vThis78 = this;
      this.Dp = [];
      this.ak = new v1759(this, vO37._j.ak, v1751);
      this.bk = new v1759(this, vO37._j.bk, v1752);
      this.dk = new v1759(this, vO37._j.dk, v1753);
      this.ck = new v1759(this, vO37._j.ck, v1754);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new vO37.Lm(v1745);
      v1749.click(function () {
        ooo.ij.if();
        vThis78.Kp();
      });
      v1756.click(function () {
        ooo.ij.if();
        vThis78.Ep.Lp();
      });
      v1757.click(function () {
        ooo.ij.if();
        vThis78.Ep.Mp();
      });
      v1751.click(function () {
        ooo.ij.if();
        vThis78.Np(vThis77.ak);
      });
      v1752.click(function () {
        ooo.ij.if();
        vThis78.Np(vThis77.bk);
      });
      v1753.click(function () {
        ooo.ij.if();
        vThis78.Np(vThis77.dk);
      });
      v1754.click(function () {
        ooo.ij.if();
        vThis78.Np(vThis77.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      v1758.parent.prototype.Sa.call(this);
      var vThis79 = this;
      ooo.ud.Jc(function () {
        var v1822 = ooo.ud.Gc();
        vThis79.Fp = v1822[vO47.a("a5f35e3d5adec23fd9")];
        vThis79.Gp = v1822[vO47.a("7824d5be08a5fa26e325")];
        vThis79.Hp = v1822[vO47.a("c4726af6bbea6f6888746deb")];
        vThis79.Ip = v1822[vO47.a("82fb25e1c27e2b6d")];
        vThis79.Jp = v1822[vO47.a("289a0517430f2a965375")];
        vThis79.ak.Op(v1822[vO47.a("11e7ea21e6d0763a70ebf538dcfc6d3158")]);
        vThis79.ak.Pp(vThis79.Fp);
        vThis79.bk.Op(v1822[vO47.a("1884351e6805088e5298031d503414854980")]);
        vThis79.bk.Pp(vThis79.Gp);
        vThis79.dk.Op(v1822[vO47.a("8e783c40e1d031d6c0462a40fbc528ecec5d0148")]);
        vThis79.dk.Pp(vThis79.Hp);
        vThis79.ck.Op(v1822[vO47.a("dc457fdbb6d0505a855b52f69acb4b42")]);
        vThis79.ck.Pp(vThis79.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis79.tp(false);
      });
    };
    v1758.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.g(vO37.Ho.To, 200);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1758.prototype.nl = function () {
      ooo.ij.Ye(vO37.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    v1758.prototype.hl = function () {
      this.op.rg(false);
    };
    v1758.prototype.qg = function () {
      this.op.qg();
    };
    v1758.prototype.ug = function (p1504, p1505) {
      this.op.ug();
    };
    v1758.prototype.Np = function (p1506) {
      this.Ep = p1506;
      for (var vLN0241 = 0; vLN0241 < this.Dp.length; vLN0241++) {
        this.Dp[vLN0241].ep.removeClass(vO47.a("3233862045b49dad"));
      }
      ;
      this.Ep.ep.addClass(vO47.a("8b4cff1b7c3374e6"));
      this.Ep.ml();
    };
    v1758.prototype.Qp = function () {
      if (this.Ep == null) {
        return vO37.yj.Aj();
      } else {
        return vO37.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    v1758.prototype.Kp = function () {
      var v1823 = this.Qp();
      if (v1823.Cj()) {
        var v1824 = v1823.Mc();
        this.Rp(v1824.Je, v1824.Wd);
      }
    };
    v1758.prototype.Rp = function (p1507, p1508) {
      var v1825 = ooo.so.mk(p1507, p1508);
      if (v1825 != null) {
        var v1826 = v1825.pk();
        if (!(ooo.ok.Ql() < v1826)) {
          var v1827 = ooo.so.Zj(vO37._j.$j);
          var v1828 = ooo.so.Zj(vO37._j.ak);
          var v1829 = ooo.so.Zj(vO37._j.bk);
          var v1830 = ooo.so.Zj(vO37._j.dk);
          var v1831 = ooo.so.Zj(vO37._j.ck);
          var v1832 = this.Xo(5000);
          ooo.ok.nm(p1507, p1508, function () {
            v1832._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v1827, vO37._j.$j);
              ooo.so.lk(v1828, vO37._j.ak);
              ooo.so.lk(v1829, vO37._j.bk);
              ooo.so.lk(v1830, vO37._j.dk);
              ooo.so.lk(v1831, vO37._j.ck);
              ooo.so.lk(p1507, p1508);
              v1832._o();
            });
          });
        }
      }
    };
    v1758.prototype.tp = function (p1509) {
      var v1833 = ooo.so.ek();
      var v1834 = this.Qp();
      if (v1834.Cj()) {
        var v1835 = v1834.Mc();
        var v1836 = ooo.so.mk(v1835.Je, v1835.Wd);
        var v1837 = false;
        if (ooo.so.ik(v1835.Je, v1835.Wd)) {
          v1747.hide();
          v1749.hide();
        } else if (v1836 == null || v1836.qk()) {
          v1837 = true;
          v1747.show();
          v1749.hide();
          v1748.text(vO47.U(vO47.a("adf7410454da9d03d4cb524649c5cb19cd8052152fc7ed07b1d9351d67d6a41fa6db2b")));
          if (v1836 != null && v1836.qk()) {
            var v1838 = ooo.ud.Gc()[vO47.a("2d6aca98c5665a8741")][v1836.ln()];
            if (v1838 != null) {
              v1748.text(vO47.V(v1838));
            }
          }
        } else {
          v1747.hide();
          v1749.show();
          v1750.html(v1836.pk());
        }
        ;
        v1746.html(vO47.a("66"));
        if (v1836 != null && v1836.mn() != null) {
          var v1839 = ooo.ud.Gc()[vO47.a("aacf09c5da7b1922c6")][v1836.mn()];
          if (v1839 != null) {
            v1746.html(vO47.aa(vO47.V(v1839)));
          }
        }
        ;
        var v1840 = this.op;
        switch (v1835.Wd) {
          case vO37._j.ak:
            v1840.Gm(v1833.Dn(v1835.Je));
            v1840.bn(v1837);
            break;
          case vO37._j.bk:
            v1840.Gm(v1833.En(v1835.Je));
            v1840.cn(v1837);
            break;
          case vO37._j.dk:
            v1840.Gm(v1833.Gn(v1835.Je));
            v1840.en(v1837);
            break;
          case vO37._j.ck:
            v1840.Gm(v1833.Fn(v1835.Je));
            v1840.dn(v1837);
        }
        ;
        if (p1509) {
          ooo.so.lk(v1835.Je, v1835.Wd);
        }
      }
    };
    v1759 = function () {
      function f177(p1510, p1511, p1512) {
        this.Cp = p1510;
        this.Wd = p1511;
        this.ep = p1512;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      f177.prototype.Op = function (p1513) {
        this.Sp = p1513;
      };
      f177.prototype.Pp = function (p1514) {
        this.Lc = p1514;
      };
      f177.prototype.ml = function () {
        var v1841 = ooo.so.Zj(this.Wd);
        for (var vLN0242 = 0; vLN0242 < this.Sp.length; vLN0242++) {
          for (var vLN0243 = 0; vLN0243 < this.Sp[vLN0242].length; vLN0243++) {
            if (this.Sp[vLN0242][vLN0243] === v1841) {
              this.Vp(vLN0242);
              this.Wp(vLN0243);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      f177.prototype.Lp = function () {
        var v1842 = this.Tp - 1;
        if (v1842 < 0) {
          v1842 = this.Sp.length - 1;
        }
        this.Vp(v1842);
        this.Wp(this.Up % this.Sp[v1842].length);
      };
      f177.prototype.Mp = function () {
        var v1843 = this.Tp + 1;
        if (v1843 >= this.Sp.length) {
          v1843 = 0;
        }
        this.Vp(v1843);
        this.Wp(this.Up % this.Sp[v1843].length);
      };
      f177.prototype.Vp = function (p1515) {
        var vThis80 = this;
        if (!(p1515 < 0) && !(p1515 >= this.Sp.length)) {
          this.Tp = p1515;
          v1755.empty();
          var v1844 = this.Sp[this.Tp];
          if (v1844.length > 1) {
            for (var vLN0244 = 0; vLN0244 < v1844.length; vLN0244++) {
              (function (p1516) {
                var v1845 = v1844[p1516];
                var v1846 = vThis80.Lc[v1845];
                var v1847 = vO47.a("b347") + vThis80.Cp.Jp[v1846[vO47.a("77d80b8396c9")]];
                var v$19 = $(vO47.a("319ed70dc386441c40c6de519fcc500225d7b159a6d92b173b80") + v1847 + vO47.a("06b5f6a5257fa56b30"));
                v$19.click(function () {
                  ooo.ij.if();
                  vThis80.Wp(p1516);
                });
                v1755.append(v$19);
              })(vLN0244);
            }
          }
        }
      };
      f177.prototype.Wp = function (p1517) {
        if (!(p1517 < 0) && !(p1517 >= this.Sp[this.Tp].length)) {
          this.Up = p1517;
          v1755.children().css(vO47.a("0594e6dbe29d79d37890ebedf26d7fab67"), vO47.a("0eeba2c07c50a44464c2b6dd"));
          var v1848 = v1755.children(vO47.a("32799a315eea9ba153279865") + (1 + p1517) + vO47.a("18c0"));
          v1848.css(vO47.a("9326f4e57c2f6be5ee22f9a37c3f4dfdd1"), v1848.css(vO47.a("c635e72baebefef0ad30fc0ea0")));
          this.Cp.tp(true);
        }
      };
      f177.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return f177;
    }();
    vO37.Vk = v1758;
    v1760 = $(vO47.a("f6a4cfe08e63d87f9ff8edf26d7db77068e3e5e06f68"));
    v1761 = $(vO47.a("7307020f83409d181a5b500d905e7217ed40a81868"));
    (v1762 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("5cc4f04b05498cd405d8c3191856dace1c93c35a1e349ca01babc522163d94bf1daf")), false);
      v1760.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new vO37.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      v1761.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      v1762.parent.prototype.Sa.call(this);
    };
    v1762.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.g(vO37.Ho.Uo, 200);
      vO48.f.h(vO37.Ho.Vo, 50);
    };
    v1762.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO37.Ek = v1762;
    v1763 = $(vO47.a("1e8c84d44e5690500bd68bda454e824903cb99ac5731"));
    v1764 = $(vO47.a("4efc74843e0660007b867b8a351e721973964582"));
    v1765 = $(vO47.a("ae1c1424dea600a09b261b2ad5be12b99321ef"));
    (v1766 = vO47.ca(vO37.Ho, function () {
      vO37.Ho.call(this, vO47.U(vO47.a("95ef792c7cf2b52bfce37a7e51fdd321d5b84a3d47ef8538c8f24a14548cc705d7")), false);
      v1764.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      v1765.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      v1766.parent.prototype.Sa.call(this);
    };
    v1766.prototype.Wo = function () {
      vO48.f.h(vO37.Ho.Mo, 50);
      vO48.f.h(vO37.Ho.No, 50);
      vO48.f.h(vO37.Ho.Oo, 50);
      vO48.f.h(vO37.Ho.Po, 50);
      vO48.f.h(vO37.Ho.Qo, 50);
      vO48.f.h(vO37.Ho.Ro, 50);
      vO48.f.h(vO37.Ho.So, 50);
      vO48.f.h(vO37.Ho.To, 50);
      vO48.f.h(vO37.Ho.Uo, 50);
      vO48.f.g(vO37.Ho.Vo, 200);
    };
    v1766.prototype.nl = function () {
      ooo.ij.nf();
      vO48.f.h(v1764, 1);
      vO48.f.g(v1763, 1);
      v1763.text(vO47.a("326dda6507f7d8e714"));
      this.$p();
      this._p(function () {
        v1763.text(vO47.a("dba2f3ee66b04ffc"));
      }, 1000);
      this._p(function () {
        v1763.text(vO47.a("e17c4d345d76c936"));
      }, 2000);
      this._p(function () {
        v1763.text(vO47.a("a857c4db9bddc051"));
      }, 3000);
      this._p(function () {
        v1763.text(vO47.a("de418e51d4d38adb"));
      }, 4000);
      this._p(function () {
        v1763.text(vO47.a("2d3081c084021dca"));
      }, 5000);
      this._p(function () {
        v1763.text(vO47.a("1c4370cf14d14c5d"));
      }, 6000);
      this._p(function () {
        v1763.text(vO47.a("bb42938e0c506f9c"));
      }, 7000);
      this._p(function () {
        v1763.text(vO47.a("b42bd8a78aa9d425"));
      }, 8000);
      this._p(function () {
        v1763.text(vO47.a("2c5340df01215cad"));
      }, 9000);
      this._p(function () {
        vO48.f.g(v1764, 300);
        vO48.f.h(v1763, 1);
      }, 10000);
    };
    v1766.prototype._p = function (p1518, p1519) {
      var v1849 = vO47.Y(p1518, p1519);
      this.Zp.push(v1849);
    };
    v1766.prototype.$p = function () {
      for (var vLN0245 = 0; vLN0245 < this.Zp.length; vLN0245++) {
        vO47.Z(this.Zp[vLN0245]);
      }
      ;
      this.Zp = [];
    };
    vO37.Gk = v1766;
    vO37.aq = function () {
      function f178() {
        this.Go = function () {};
      }
      f178.prototype.ag = function () {};
      f178.prototype.nl = function () {};
      return f178;
    }();
    (v1767 = vO47.ca(vO37.aq, function (p1520) {
      vO37.aq.call(this);
      var v1850 = vO47.Ca() + vO47.a("2a64") + vO47._(1000 + vO47.ma() * 8999);
      this.bq = $(vO47.a("9fda813203f4053687f8893a0bfc117ac696914b57d917").concat(v1850, vO47.a("acdfce1cdce08170892782e8d9fa8e6ece2d8ae0a1e27676b63865f8a1f77939f2172ebff0813203f4053687f8893a0bfc0d22c68dd60250885455c4d59b5e548d4e5ada82ec512c9d2b45ea91a45d69dc2c52bb3df3153c763827a36df9093465336cff6393315e364a3f8a798e3f18330e31864eae5141145b16994fdb4a5412774edf102152a314a5562718295aab1cad426b2967a2f028f4f564753bfef42deefa7a220cf1cc3dcbe50a2e48f68962")).concat(p1520, vO47.a("ab6082fa46160fa8934495861748198a9b4c9d8e1f506192ff10acc0671b25dbb80ff09c3bef30b1a7e1a7eb34e730a4a8a1bea230e304f0dd")).concat(vO47.U(vO47.a("8d17612474fabd23f4eb72666de5fa3fe9eb6d7e42fdcd20ccf8523d")), vO47.a("44a9a973216fb4916cbdae3f7001b2837485b6076406fec22a93")));
      var vThis81 = this;
      this.bq.find(vO47.a("c35ab1d9260b3ddfb951aed126ee22efb0e8bab532")).click(function () {
        ooo.ij.if();
        vThis81.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v1767.prototype.nl = function () {
      ooo.ij.lf();
    };
    vO37.mm = v1767;
    (v1768 = vO47.ca(vO37.aq, function (p1521) {
      vO37.aq.call(this);
      var v1851 = vO47.Ca() + vO47.a("3579") + vO47._(1000 + vO47.ma() * 8999);
      this.bq = $(vO47.a("c09b2233e43526b7e8b92a3bec3d32fbb9d7324ab01834").concat(v1851, vO47.a("e89b0a58805c5dcccde3462c953642a28ae94e249d3e4aaa72fc2e3672302aa278fb74512c7d6eff30c17243344576c738c97a4b2004338800920e1257065bd55c960b0858181cd25c6404e658f0062a51641da91cec127b7d33d5fc36f8e7632d39c6fe3af8e23f0551b2f020c4e405785ae8c8618fb1460d50c5d6179aca521e5cc6961fc9cf4d5e32c4a456e5997972699aeb5ced9e6fa071e2f3a4f5e677a865aeb2fafdad33f112a1deb691b906eb1dbf99b181bb19c51d97838983871b8a47")).concat(p1521, vO47.a("e16e4c700c20d912c97a4b3c4d7ecf00d14253045546d708c50e125a5d0d93517201be16f119664b7d1ff911e11b79257df7e369e1e36f3c3bb4")).concat(vO47.U(vO47.a("34ec18635d7154ec5de01b21347ee3e030f0f439247cfcfe20e8fe")), vO47.a("e40909d381cf1431cc1d0e9fd0e11263d46516e7d8e91a6bc02957b920b22e3277267bf57cb62b2878383cf27c842406781026ca7b853518794f60")).concat(vO47.U(vO47.a("d28afa81b31fb60ebb86f9c3aa00c1029696d6db8518c60d8395d998")), vO47.a("33d81a42de9e87201bcc1d0e9fd0e11263d46516fbd7ad533dc2")));
      var vThis82 = this;
      this.bq.find(vO47.a("b2ed00aad7340c2cc8e610a8c82aec24b2fee7b9a924ed")).click(function () {
        ooo.ij.if();
        vThis82.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v1768.prototype.nl = function () {
      ooo.ij.kf();
    };
    vO37.lm = v1768;
    (v1769 = vO47.ca(vO37.aq, function () {
      vO37.aq.call(this);
      var vThis83 = this;
      var v1852 = vO47.Ca() + vO47.a("4846") + vO47._(1000 + vO47.ma() * 8999);
      this.bq = $(vO47.a("23") + vO47.a("be73e438b4f3edb1fb75") + v1852 + vO47.a("1201f4467ac6abda2709a8427fdc94d45013905a47c49cdc58168f5240cc95af466e952655a288bd5f2fde73") + vO47.a("92837485b61b3144fd8b3fc1ff5c130c80c70bd4d5430d4b87d803d3dd5a1e359fa217a6d3370c2cdee610a2d920a271b1a1e7e8e4") + vO46.H.L + vO47.a("00f3623268217bf55fb638366d292bf1798e720f7b0239c537d7") + vO47.a("c5") + vO47.a("ce7fb041f2dff08ca047fb05bb98efd0fc1bcf109187c187cb14c717999ec289c31ed3e29773c06092aadbe6947fdd6490eab2b33c") + vO47.a("f384d5c6578859cadb908e9e1edea1916fd57685ba9afd956acf799bfdedf26d7db77068e3e5f86978a96d7afab48c6646ac513499") + vO47.U(vO47.a("59a3b5e8b8b671f700bf86ba91b906eb1dbf99b28eb101d3148c878a81830fdc")).replaceAll(vO47.a("51e2"), vO47.a("6ed95e6301f30f")).replaceAll(vO47.a("56ed"), vO47.a("b8b598799333")) + vO47.a("557af87ba92b3532") + vO47.a("28d94a5b0c5d4edf103d13a357e917744b3458ff53ec0d7b2563aff02bfbf572266da7fa2ffeeb6f2444f68e38ccf84c7a09f2d939cba30d4f41d0da12d4c54e4549c5d705ded71d4e") + vO47.U(vO47.a("669e469d0f03021a0f92552f06ec55f602624a2719e452fe1b61343feefa2afe")) + vO47.a("b439d9e686") + vO47.a("ef00d14253185a029e5ec7") + vO47.a("82") + vO47.a("4d1eef20f17e376d2366b464b83928317f3ab07192260666483588769a3f0568403d834f8207511a") + vO47.U(vO47.a("c47c68f3ade1247cad706bb1a4ce7350a0406489bbc67458b9436a8189f04150814552")) + vO47.a("ee439fe59b758a") + vO47.a("23e80a72ceae97"));
      this.cq = this.bq.find(vO47.a("de41d41e8380d090945acb168488c9939a52d3ed9d70d1"));
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        vThis83.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v1769.prototype.nl = function () {
      var vThis84 = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        vO47.Y(function () {
          vThis84.cq.fadeIn(300);
        }, 2000);
      } else {
        vO47.Y(function () {
          vThis84.Go();
        }, 0);
      }
    };
    vO37.Yp = v1769;
    v1770 = $(vO47.a("c11126863759b5d5ae5b3f993a5fb62db22d3d6a3025a361b624767e383aad69"));
    (v1771 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.ao);
      v1770.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        vO47.Y(function () {
          var v1853 = vO46.H.J + vO47.a("4519b78dab1523992c52bb68922a36673e69a761b72d");
          vO47.Aa(v1853, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (p1522) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (p1523) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (p1524, p1525) {
              ooo.Xg.Re.po(p1524, p1525);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    v1771.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.g(vO37.Uf.Tf, 500);
      vO48.f.g(vO37.Uf.Qn, 1);
      vO48.f.h(vO37.Uf.Rn, 50);
      vO48.f.h(vO37.Uf.Sn, 50);
      vO48.f.h(vO37.Uf.Tn, 50);
      vO48.f.h(vO37.Uf.Un, 50);
      vO48.f.h(vO37.Uf.Vn, 50);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.h(vO37.Uf.Xn, 50);
      vO48.f.h(vO37.Uf.Yn, 50);
      vO48.f.h(vO37.Uf.Zn, 50);
      vO48.f.g(vO37.Uf.$n, 500);
      vO48.f.h(vO37.Uf._n, 50);
    };
    v1771.prototype.nl = function () {
      ooo.ij.Ye(vO37.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO37.al = v1771;
    v1772 = $(vO47.a("e89a4f499e525c9297a05f26d92659a996ac593f952250e272b436217d"));
    (v1773 = vO47.ca(vO37.Uf, function () {
      vO37.Uf.call(this, vO37.ll.ao);
      v1772.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    v1773.prototype.ml = function () {
      vO37.Nf.rg(true);
      vO48.f.g(vO37.Uf.Tf, 500);
      vO48.f.g(vO37.Uf.Qn, 1);
      vO48.f.h(vO37.Uf.Rn, 50);
      vO48.f.h(vO37.Uf.Sn, 50);
      vO48.f.h(vO37.Uf.Tn, 50);
      vO48.f.h(vO37.Uf.Un, 50);
      vO48.f.h(vO37.Uf.Vn, 50);
      vO48.f.h(vO37.Uf.Wn, 50);
      vO48.f.h(vO37.Uf.Xn, 50);
      vO48.f.h(vO37.Uf.Yn, 50);
      vO48.f.h(vO37.Uf.Zn, 50);
      vO48.f.h(vO37.Uf.$n, 50);
      vO48.f.g(vO37.Uf._n, 500);
    };
    v1773.prototype.nl = function () {
      ooo.ij.Ye(vO37.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO37.cl = v1773;
    vO47.dq = function () {
      function f179(p1526) {
        var v1854 = p1526 + vO47._(vO47.ma() * 65535) * 37;
        vO37.Cg.Ng(vO37.Cg.Lg, v1854, 30);
      }
      return function () {
        var v1855 = parseInt(vO37.Cg.Og(vO37.Cg.Lg)) % 37;
        if (!(v1855 >= 0) || !(v1855 < vO46.co.fq)) {
          v1855 = vO47.ia(0, vO46.co.fq - 2);
        }
        var vO75 = {
          gq: false
        };
        vO75.hq = vO47.Ca();
        vO75.iq = 0;
        vO75.jq = 0;
        vO75.kq = null;
        vO75.lq = vO46.H.Q;
        vO75.mq = vO46.H.P;
        vO75.Mh = null;
        vO75.ud = null;
        vO75.ef = null;
        vO75.ij = null;
        vO75.Xg = null;
        vO75.so = null;
        vO75.ok = null;
        try {
          var vNavigator2 = navigator;
          if (vNavigator2) {
            var v1856 = vNavigator2[vO47.a("9e48055ecedc07d4d25e0757")];
            if (v1856) {
              v1856.getCurrentPosition(function (p1527) {
                var v1857 = p1527[vO47.a("e8da45549e595d")];
                if (vO47.a("11f7fd20f0e07e267cee") != f(v1857) && vO47.a("486ce4ff29fbe7713545") != f(v1857[vO47.a("3ce11f7b2965f7f721")]) && vO47.a("1a5eb2497bc989df4757") != f(v1857[vO47.a("29f6c432caf75b1555c7")])) {
                  vO75.kq = p1527;
                }
              }, function (p1528) {});
            }
          }
        } catch (e49) {}
        ;
        vO75.Sa = function () {
          vO75.Mh = new vO37.nq();
          vO75.Mh.oq = new vO37.si(vO75.Mh);
          vO75.ud = new vO37.Kb();
          vO75.ef = new vO37.wk();
          vO75.ij = new vO37.Pe();
          vO75.Xg = new vO37.zk();
          vO75.so = new vO37.Sj();
          vO75.ok = new vO37.sl();
          try {
            ga(vO47.a("b79bdc445f"), vO47.a("3f1537d7ad00"), vO47.a("8d1f7f30"), vO46.H.I + vO47.a("737b1c089e5c"));
          } catch (e50) {}
          ;
          vO75.Mh.pq = function () {
            vO75.Xg.gl(vO75.Xg.bl);
          };
          vO75.Mh.qq = function () {
            var v1858 = vO75.Xg.Jf.Ao();
            try {
              ga(vO47.a("be3ce53fa6"), vO47.a("3ce8086a2e65"), vO47.a("bdc95e1d24"), vO46.H.I + vO47.a("d11d20703434a3"), v1858);
            } catch (e51) {}
            ;
            vO75.ij.Ye(vO37.Pe.Se.Kf);
            vO75.Xg.gl(vO75.Xg.Kf.ho());
          };
          vO75.Mh.rq = function () {
            var v1859;
            var v1860;
            try {
              ga(vO47.a("917176aa71"), vO47.a("370d4fcfd518"), vO47.a("77cf18879e"), vO46.H.I + vO47.a("535b3028b3"));
            } catch (e52) {}
            ;
            if ($(vO47.a("d1203c602c"))[vO47.a("851e62516e12ff")]() >= 430) {
              vO46.co.sq.Va();
            }
            vO75.ud.rc(null, null, null);
            v1859 = vO47._(vO75.Mh.Lh.hi);
            v1860 = vO75.Mh.oi;
            if (vO75.ok.nk()) {
              vO75.ok.hm(function () {
                vO75.tq(v1859, v1860);
              });
            } else {
              vO75.tq(v1859, v1860);
            }
          };
          vO75.Mh.uq = function (p1529) {
            p1529(vO75.Xg.Kf.ko(), vO75.Xg.Kf.lo());
          };
          vO75.ok.em(function () {
            var v1861 = vO75.Xg.rl();
            if (v1861 != null && v1861.Wd === vO37.ll.kl) {
              vO75.ij.Ye(vO37.Pe.Se.Jf);
              vO75.Xg.gl(vO75.Xg.Jf);
            }
            if (vO75.ok.nk()) {
              var v1862 = vO75.ok.Kl();
              try {
                ga(vO47.a("e44643c3"), vO47.a("173d6aefe905f9"), v1862);
              } catch (e53) {}
              ;
              try {
                v172(vO47.a("621e41061592469e0f09"), vO47.a("39c6d40bd4c06a0324c0"), function (p1530) {
                  p1530(v1862);
                });
              } catch (e54) {}
            } else {
              try {
                v172(vO47.a("4ceaeb7d0748f6c431d1"), vO47.a("cab7e3baa12ae4"));
              } catch (e55) {}
            }
            ;
            if (vO75.kp() && vO75.ok.nk() && !vO75.ok.Pl()) {
              vO75.Xp(false, false);
              vO75.Xg.Yk.Fo(new vO37.Yp());
            } else {
              vO75.vq(true);
            }
          });
          vO75.Mh.Sa();
          vO75.Xg.Sa();
          vO75.so.Sa();
          vO75.ud.Sa();
          vO75.Xg.Jf.zo();
          vO75.Xg.gl(vO75.Xg.Jf);
          vO75.ef.Sa(function () {
            vO75.ij.Sa();
            vO75.ok.Sa();
            vO75.ud.rc(function () {
              vO75.Xg.Jf.yo();
              vO75.Xg.gl(vO75.Xg.Jf);
            }, function (p1531) {
              vO75.Xg.Jf.yo();
              vO75.Xg.gl(vO75.Xg._k);
            }, function (p1532, p1533) {
              var vP1532 = p1532;
              vO75.Xg.Re.po(vP1532, p1533);
              vO75.Xg.Jf.po(vP1532, p1533);
            });
            if (vO75.kp() && !vO75.Pl()) {
              vO75.Xg.Yk.Fo(new vO37.Yp());
            } else {
              vO75.vq(true);
            }
          });
        };
        vO75.wq = function (p1534) {
          if (vO75.ok.nk()) {
            var v1863 = vO75.ok.gm();
            var v1864 = vO46.H.J + vO47.a("56c8689c38446b18378b0f") + v1863 + vO47.a("fa24df6290fca5ff763ca77d67f9affc") + vO47.a("7876ccaa10b8db72") + vO47.W(p1534);
            vO47.Aa(v1864, function () {}, function (p1535) {});
          }
        };
        vO75.to = function () {
          v1855++;
          if (vO49.on) {
            v1855 = 1;
          }
          if (!vO46.co.xq && v1855 >= vO46.co.fq) {
            vO75.Xg.gl(vO75.Xg.dl);
            vO75.ij.Ye(vO37.Pe.Se.Mf);
            vO46.co.yq.Ta();
          } else {
            f179(v1855);
            vO75.zq();
          }
        };
        vO75.zq = function () {
          if (vO75.Mh.Aq()) {
            vO75.Xg.Re.qo();
            vO75.Xg.gl(vO75.Xg.Re);
            var v1865 = vO75.Xg.Jf.Ao();
            vO37.Cg.Ng(vO37.Cg.Ig, v1865, 30);
            var v1866 = vO75.Xg.Hi.Gi();
            vO37.Cg.Ng(vO37.Cg.Eg, v1866, 30);
            var vLN0246 = 0;
            if (vO75.kq != null) {
              var v1867 = vO75.kq[vO47.a("87dbe69579d87e")][vO47.a("69b68ae884aa1ac414")];
              var v1868 = vO75.kq[vO47.a("386a15e44ee90d")][vO47.a("172476e4fc25e9fb7b35")];
              vLN0246 = vO47.ia(0, vO47.ha(32767, (v1867 + 90) / 180 * 32768)) << 1 | 1 | vO47.ia(0, vO47.ha(65535, (v1868 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (vO75.ok.nk()) {
              vO75.Bq(v1865, vLN0246);
            } else {
              var v1869 = vO75.Xg.Jf.Ml();
              vO37.Cg.Ng(vO37.Cg.Jg, v1869, 30);
              var v1870 = vO75.so.Zj(vO37._j.$j);
              vO37.Cg.Ng(vO37.Cg.Kg, v1870, 30);
              vO75.Cq(v1865, vLN0246);
            }
          }
        };
        vO75.Bq = function (p1536, p1537) {
          var v1871;
          var v1872 = vO75.ok.gm();
          var v1873 = vO75.Xg.Jf.Ml();
          var v1874 = vO75.so.Zj(vO37._j.$j);
          var v1875 = vO75.so.Zj(vO37._j.ak);
          var v1876 = vO75.so.Zj(vO37._j.bk);
          vF48(v1874, v1875, v1876, vO75.so.Zj(vO37._j.dk), vO75.so.Zj(vO37._j.ck), v1873);
          var v1877 = (v1873 = (v1873 = vO50.f).trim()).replace(v1873.substr(-7), "");
          if (v1877 != vO50.s_n) {
            vO50.s_n = v1877;
            vF75(v1877.trim());
          }
          var v1878 = vO46.H.J + vO47.a("f46a46b29ae64d3e952911") + v1872 + vO47.a("7ce2cd3be123b6") + vO47.a("f6b8dfe8976ef1629aeafd") + vO47.W(p1536) + vO47.a("19acfc24a0") + p1537 + vO47.a("4ef97e8831087a043b8225") + vO47.W(v1873) + vO47.a("f70e8a011242340ac2") + vO50.a + vO47.a("c7deac432e8f045af2") + vO50.b + vO47.a("475e24d5be08a5f72bbd") + vO50.c + vO47.a("1d28f8bcc06150b1565fc3e5") + vO50.d + vO47.a("4cbbe67e2468f69e") + vO50.e;
          vO47.Aa(v1878, function () {
            vO75.Xg.gl(vO75.Xg._k);
          }, function (p1538) {
            if (p1538[vO47.a("53673a22b2")] === 1460) {
              vO75.Xg.gl(vO75.Xg.Wk);
              try {
                ga(vO47.a("f0b2572d90"), vO47.a("7503814d971e"), vO47.a("a5e4422b5de8c23fd9fb4b"), vO46.H.I + vO47.a("535b212fb463"));
              } catch (e56) {}
            } else if (p1538[vO47.a("5d2db07484")] !== 1200) {
              vO75.Xg.gl(vO75.Xg._k);
            } else {
              var v1879 = p1538[vO47.a("0101e646f31375677c08e7")];
              var vVF36 = vF77(v1879.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v1879);
                $("#port_name_s").val(vVF36);
                vO50.pi = v1879;
                vO50.pn = vVF36;  
                localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
                v1028.text = " " + vVF36;
                vO75.Mh.Dq(v1879, v1872);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO50.pi = $("#port_id").val();
                vO50.pn = $("#port_name").val();
                localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
                v1028.text = " " + $("#port_name").val();
                vO75.Mh.Dq($("#port_id").val(), v1872);
              }
            }
          });
        };
        vO75.Cq = function (p1539, p1540) {
          var v1880 = vO75.Xg.Jf.Ml();
          var v1881 = vO75.so.Zj(vO37._j.$j);
          var v1882 = vO46.H.J + vO47.a("4519b78dab153c89245ae0") + vO47.a("a2d411d0d543") + vO47.a("44baf563296bfe") + vO47.a("56d87f88370e51023a8a1d") + vO47.W(p1539) + vO47.a("dacdfb85e3") + p1540 + vO47.a("3184dd0dd6cd590954cf86") + vO47.W(v1880) + vO47.a("3ee973ba2b3d4d317b") + vO47.W(v1881);
          vO47.Aa(v1882, function () {
            vO75.Xg.gl(vO75.Xg._k);
          }, function (p1541) {
            if (p1541[vO47.a("f8aa552f99")] === 1460) {
              vO75.Xg.gl(vO75.Xg.Wk);
              try {
                ga(vO47.a("0909ee52e9"), vO47.a("d286e280b813"), vO47.a("8023a7a0f0a7af34fc3cae"), vO46.H.I + vO47.a("0be37997ecab"));
              } catch (e57) {}
            } else if (p1541[vO47.a("97abf66e7e")] !== 1200) {
              vO75.Xg.gl(vO75.Xg._k);
            } else {
              var v1883 = p1541[vO47.a("fd9d1ac2f79771eb7084eb")];
              var vVF362 = vF77(v1883.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v1883);
                $("#port_name_s").val(vVF362);
                vO50.pi = v1883;
                vO50.pn = vVF362;
                localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
                v1028.text = " " + vVF362;
                vO75.Mh.Eq(v1883, v1880, v1881);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO50.pi = $("#port_id").val();
                vO50.pn = $("#port_name").val();
                localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
                v1028.text = " " + $("#port_name").val();
                vO75.Mh.Eq($("#port_id").val(), v1880, v1881);
              }
            }
          });
        };
        vO75.tq = function (p1542, p1543) {
          var v1884 = vO75.Xg.Jf.Ml();
          vO75.Xg.Kf.jo(p1542, p1543, v1884);
          vO75.ij.Ye(vO37.Pe.Se.Lf);
          vO75.Xg.gl(vO75.Xg.Kf.io());
        };
        vO75.wo = function () {
          if (!vO75.xo()) {
            return vO75.so.hk();
          }
          ;
          var vParseInt8 = parseInt(vO37.Cg.Og(vO37.Cg.Kg));
          if (vParseInt8 != null && vO75.so.ik(vParseInt8, vO37._j.$j)) {
            return vParseInt8;
          } else {
            return vO75.so.hk();
          }
        };
        vO75.Bo = function (p1544) {
          vO37.Cg.Ng(vO37.Cg.Mg, p1544 ? vO47.a("56936a9c3f") : vO47.a("9fb6c07e50b1"), 1800);
        };
        vO75.xo = function () {
          return vO37.Cg.Og(vO37.Cg.Mg) === vO47.a("8e6b2254f7");
        };
        vO75.vq = function (p1545) {
          if (p1545 !== vO75.gq) {
            vO75.gq = p1545;
            var v1885 = v1885 || {};
            v1885[vO47.a("b94954824e4bd184a456")] = p1545;
            v1885[vO47.a("685ececb1efec1510324dcb7")] = p1545;
            vO46.co.do.Sa();
            vO46.co.sq.Sa();
            vO46.co.yq.Sa(function (p1546) {
              if (p1546) {
                f179(v1855 = 0);
              }
              vO75.zq();
            });
          }
        };
        vO75.Xp = function (p1547, p1548) {
          vO37.Cg.Ng(vO37.Cg.Dg, p1547 ? vO47.a("d0d56056b1") : vO47.a("9fb6c07e50b1"));
          if (p1548) {
            vO75.wq(p1547);
          }
          vO75.vq(p1547);
        };
        vO75.Pl = function () {
          return vO37.Cg.Og(vO37.Cg.Dg) === vO47.a("0d8afdb5f4");
        };
        vO75.kp = function () {
          try {
            return !!vO37.c[vO47.a("6058d1fa34fcc8722d78")] || vO75.kq != null && !!vO46.Pg.Qg(vO75.kq[vO47.a("30621dec46e105")][vO47.a("851a664c600efe58e8")], vO75.kq[vO47.a("9486b908ea0da9")][vO47.a("4eb37f8f350a60103282")]);
          } catch (e58) {
            return true;
          }
        };
        vO75.ug = function () {
          vO75.iq = vO47.Ca();
          vO75.jq = vO75.iq - vO75.hq;
          vO75.Mh.Uh(vO75.iq, vO75.jq);
          vO75.Xg.Uh(vO75.iq, vO75.jq);
          vO75.hq = vO75.iq;
        };
        vO75.qg = function () {
          vO75.Xg.qg();
        };
        return vO75;
      }();
    };
    vO37.nq = function () {
      vO47.a("2c081d9a107206f15de602");
      const vLN3002 = 300;
      var vO76 = {
        Jq: 30,
        Kq: new vO48.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: 0,
        Rq: null,
        Sq: 300,
        resendTimer: null,
        reconnectAttempts: 0,
        maxReconnectAttempts: 10,
        reconnectDelay: 3000,
        lastUrl: null,
        lastOnOpen: null,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new vO37.dh(),
        oq: null,
        Lh: null,
        nj: {},
        li: {},
        jj: 12.5,
        Nh: 40,
        Tq: 1,
        Uq: -1,
        Vq: 1,
        Wq: 1,
        Xq: -1,
        Yq: -1,
        Zq: 1,
        $q: 1,
        ar: -1,
        oi: 500,
        ei: 500
      };
      vO76.Qh.gh = 500;
      vO76.Lh = new vO37.Ui(vO76.Qh);
      vO76.controlResend = function (p1549) {
        if (p1549 === "start" && !vO76.resendTimer) {
          vO76.resendTimer = setInterval(vO76.resendLastByte, vLN3002);
        } else if (p1549 === "stop" && vO76.resendTimer) {
          clearInterval(vO76.resendTimer);
          vO76.resendTimer = null;
        }
      };
      vO76.reconnectAttempt = function (p1550, p1551) {
        if (vO76.reconnectAttempts < vO76.maxReconnectAttempts) {
          vO76.reconnectAttempts++;
          console.log("Reconnecting... Attempt " + vO76.reconnectAttempts + "/" + vO76.maxReconnectAttempts);
          vO47.Y(function () {
            if (vO76.go === 0) {
              vO76.hr(p1550, p1551);
            }
          }, vO76.reconnectDelay);
        } else {
          console.error("Max reconnection attempts reached. Giving up.");
          vO76.pq();
        }
      };
      vO76.resendLastByte = function () {
        if (vO76.Sq <= 255) {
          var v1886 = new vO37.Fa(1);
          new vO37.Oa(new vO37.Ga(v1886)).Pa(vO76.Sq);
          vO76.ir_modified(v1886, true);
        }
      };
      vO76.sendInitialHandshake = function () {
        var v1887 = new vO37.Fa(1);
        new vO37.Oa(new vO37.Ga(v1887)).Pa(1);
        vO76.ir_modified(v1887);
      };
      vO76.Sa = function () {
        vO76.Lh._i(ooo.Xg.Kf.Wg);
        vO47.X(function () {
          vO76.uq(function (p1552, p1553) {
            vO76.br(p1552, p1553);
          });
        }, vO50.sm);
      };
      vO76.Ph = function (p1554, p1555, p1556, p1557) {
        vO76.Uq = p1554;
        vO76.Vq = p1555;
        vO76.Wq = p1556;
        vO76.Xq = p1557;
        vO76.cr();
      };
      vO76.dr = function (p1558) {
        vO76.Tq = p1558;
        vO76.cr();
      };
      vO76.cr = function () {
        vO76.Yq = vO76.Uq - vO76.Tq;
        vO76.Zq = vO76.Vq + vO76.Tq;
        vO76.$q = vO76.Wq - vO76.Tq;
        vO76.ar = vO76.Xq + vO76.Tq;
      };
      vO76.Uh = function (p1559, p1560) {
        vO76.Nq += p1560;
        vO76.Mq -= vO76.Lq * 0.2 * p1560;
        vO76.oq.yi();
        if (vO76.Rq != null && (vO76.go === 2 || vO76.go === 3)) {
          vO76.er(p1559, p1560);
          vO76.Nh = 4 + vO76.jj * vO76.Lh.Id;
        }
        var v1888 = 1000 / vO47.ia(1, p1560);
        var vLN0247 = 0;
        for (var vLN0248 = 0; vLN0248 < vO76.Kq.length - 1; vLN0248++) {
          vLN0247 += vO76.Kq[vLN0248];
          vO76.Kq[vLN0248] = vO76.Kq[vLN0248 + 1];
        }
        ;
        vO76.Kq[vO76.Kq.length - 1] = v1888;
        vO76.Jq = (vLN0247 + v1888) / vO76.Kq.length;
      };
      vO76.fr = function (p1561, p1562) {
        return p1561 > vO76.Yq && p1561 < vO76.Zq && p1562 > vO76.$q && p1562 < vO76.ar;
      };
      vO76.er = function (p1563, p1564) {
        var v1889 = (vO76.Nq + vO76.Mq - vO76.Oq) / (vO76.Pq - vO76.Oq);
        vO76.Lh.Pj(p1563, p1564);
        vO76.Lh.Qj(p1563, p1564, v1889, vO76.fr);
        var vLN0249 = 0;
        for (var v1890 in vO76.li) {
          var v1891 = vO76.li[v1890];
          v1891.Pj(p1563, p1564);
          v1891.Qj(p1563, p1564, v1889, vO76.fr);
          if (v1891.cj && v1891.Id > vLN0249) {
            vLN0249 = v1891.Id;
          }
          if (!v1891.bj && (!!(v1891.Lj < 0.005) || !v1891.cj)) {
            v1891.$i();
            delete vO76.li[v1891.ki.Je];
          }
        }
        ;
        vO76.dr(vLN0249 * 3);
        for (var v1892 in vO76.nj) {
          var v1893 = vO76.nj[v1892];
          v1893.Pj(p1563, p1564);
          v1893.Qj(p1563, p1564, vO76.fr);
          if (v1893.tj && (v1893.Lj < 0.005 || !vO76.fr(v1893.Fj, v1893.Gj))) {
            v1893.$i();
            delete vO76.nj[v1893.ki.Je];
          }
        }
      };
      vO76.Si = function (p1565, p1566) {
        if (vO76.go === 1) {
          vO76.go = 2;
          vO76.qq();
          vO76.reconnectAttempts = 0;
        }
        var v1894 = ooo.iq;
        vO76.Qq = p1565;
        if (p1565 === 0) {
          vO76.Oq = v1894 - 95;
          vO76.Pq = v1894;
          vO76.Nq = vO76.Oq;
          vO76.Mq = 0;
        } else {
          vO76.Oq = vO76.Pq;
          vO76.Pq = vO76.Pq + p1566;
        }
        var v1895 = vO76.Nq + vO76.Mq;
        vO76.Lq = (v1895 - vO76.Oq) / (vO76.Pq - vO76.Oq);
      };
      vO76.uj = function () {
        if (vO76.go === 1 || vO76.go === 2) {
          vO76.go = 3;
          var v1896 = vO76.Rq;
          vO47.Y(function () {
            if (vO76.go === 3) {
              vO76.go = 0;
            }
            if (v1896 != null && v1896 === vO76.Rq) {
              vO76.Rq[vO47.a("3b8f5141cc95")]();
              vO76.Rq = null;
            }
          }, 5000);
          vO76.rq();
        }
      };
      vO76.gr = function (p1567 = false) {
        vO76.controlResend("stop");
        vO76.Rq = null;
        vO76.oq.xi();
        if (vO76.go !== 3) {
          if (p1567 && vO76.reconnectAttempts < vO76.maxReconnectAttempts) {
            vO76.go = 0;
            vO76.reconnectAttempt(vO76.lastUrl, vO76.lastOnOpen);
          } else {
            vO76.pq();
            vO76.go = 0;
          }
        } else {
          vO76.go = 0;
        }
      };
      vO76.Aq = function () {
        return vO76.go !== 2 && (vO76.go = 1, vO76.oq.xi(), vO76.nj = {}, vO76.li = {}, vO76.Lh.xn(), vO76.Rq != null && (vO76.Rq[vO47.a("66944496191e")](), vO76.Rq = null), true);
      };
      vO76.Dq = function (p1568, p1569) {
        vO76.hr(p1568, function () {
          var v1897 = vO47.ha(2048, p1569.length);
          var v1898 = new vO37.Fa(6 + v1897 * 2);
          var v1899 = new vO37.Oa(new vO37.Ga(v1898));
          v1899.Pa(129);
          v1899.Qa(2800);
          v1899.Pa(1);
          v1899.Qa(v1897);
          for (var vLN0250 = 0; vLN0250 < v1897; vLN0250++) {
            v1899.Qa(p1569.charCodeAt(vLN0250));
          }
          ;
          vO76.ir_modified(v1898);
          vO76.controlResend("start");
        });
      };
      vO76.Eq = function (p1570, p1571, p1572) {
        vO76.hr(p1570, function () {
          var v1900 = vO47.ha(32, p1571.length);
          var v1901 = new vO37.Fa(7 + v1900 * 2);
          var v1902 = new vO37.Oa(new vO37.Ga(v1901));
          v1902.Pa(129);
          v1902.Qa(2800);
          v1902.Pa(0);
          v1902.Qa(p1572);
          v1902.Pa(v1900);
          for (var vLN0251 = 0; vLN0251 < v1900; vLN0251++) {
            v1902.Qa(p1571.charCodeAt(vLN0251));
          }
          ;
          vO76.ir_modified(v1901);
          vO76.controlResend("start");
        });
      };
      vO76.ir_modified = function (p1573, p1574 = false) {
        try {
          if (vO76.Rq != null && vO76.Rq[vO47.a("a80b8f9ac884bd0bd1f597")] === vO48.i[vO47.a("9b03cdcb51")]) {
            if (p1573.byteLength === 1 && !p1574) {
              vO76.controlResend("stop");
              vO76.Sq = new DataView(p1573).getUint8(0);
              vO76.controlResend("start");
            }
            vO76.Rq[vO47.a("4eac758f36")](p1573);
          }
        } catch (e59) {
          vO76.gr(true);
        }
      };
      vO76.br = function (p1575, p1576) {
        var v1903 = ((p1576 ? 128 : 0) | vO47.da(p1575) / vO46.S * 128 & 127) & 255;
        if (vO76.Sq !== v1903) {
          var v1904 = new vO37.Fa(1);
          new vO37.Oa(new vO37.Ga(v1904)).Pa(v1903);
          vO76.ir_modified(v1904);
        }
      };
      vO76.hr = function (p1577, p1578) {
        vO76.lastUrl = p1577;
        vO76.lastOnOpen = p1578;
        vO76.go = 1;
        vO76.reconnectAttempts = vO76.reconnectAttempts || 0;
        let v1905;
        if (!vO49.on && vO50.mobile) {
          v1905 = vF49(vO50.mobile);
        }
        var v1906 = vO76.Rq = new vO48.i(p1577);
        v1906.binaryType = "arraybuffer";
        v1906.onopen = function () {
          vF58(vO50, oeo, "open");
          vF61(vO50, oeo, "hidden");
          if (vO76.Rq === v1906) {
            p1578();
            vO76.sendInitialHandshake();
            vO76.controlResend("start");
          }
        };
        v1906.onclose = function () {
          vF58(vO50, oeo, "close");
          vF61(vO50, oeo, "hidden");
          if (!vO49.on && vO50.mobile && v1905) {
            v1905.destroy();
          }
          if (vO76.Rq === v1906) {
            vO76.gr(true);
          }
        };
        v1906.onerror = function (p1579) {
          if (vO76.Rq === v1906) {
            vO76.gr(true);
          }
          if (!vO49.on && vO50.mobile && v1905) {
            v1905.destroy();
          }
        };
        v1906.onmessage = function (p1580) {
          if (vO76.Rq === v1906) {
            vO76.oq.wi(p1580.data);
          }
        };
      };
      return vO76;
    };
    v1774 = vO37.c[vO47.a("3563f9be")];
    (v1775 = {})[vO47.a("c8f46b72a2")] = {
      do: vO47.Ua(vO47.a("d282e58ba000fb19a0dba982ac04cf138a"), atob(vO47.a("8362b43c49603a1efd5fe04f672456d7e725c2bf710563cbec29d9c72e1d60af9e"))),
      sq: vO47.Ua(vO47.a("867b3c74e5f725f1ed766148e7d12594ff"), atob(vO47.a("dc492c9699d37575d46f758698db1b03d97354fdc48c581683"))),
      yq: vO47.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    v1775[vO47.a("5844f3c535cef24610")] = {
      do: vO47.Ua(vO47.a("f6e6c9e78c6cdf7d84bff5fe7078ab776e"), atob(vO47.a("e2a595bfa82f9b1d9c98c1cc861bf7d48662e33c90cac2c88d6ef844cfc281ac3f"))),
      sq: vO47.Ua(vO47.a("7b400903905c681ee05db41f724a784be2"), atob(vO47.a("74a1847e012bed8d4c97ed7ef033f3ebb19bbc15bc14a08efb"))),
      yq: vO47.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(v1776 = v1775[v1774])) {
      v1776 = v1775[vO47.a("19e7fa25f3")];
    }
    vO46.co = v1776;
    $(function () {
      FastClick[vO47.a("899b7fc86c9de7")](vO37.d[vO47.a("26d587dd53")]);
    });
    addEventListener(vO47.a("edbd00ce05878bd0988319dd"), function (p1581) {
      p1581.preventDefault();
      p1581.stopPropagation();
      return false;
    });
    v1777 = false;
    v1778 = false;
    vO47.ba(vO47.a("e7709d2e1b6f5771c0538503074d16488d4c98190849091dd1536e1fac51ee04284b6713fb4ce80a212a62bdf821ecbb717b2abdf97ea5ed323217a4c17991af156c04f8c83fc9b34b510794d50186c7510d0c9e"), ((v1779 = {})[vO47.a("29f3cf")] = vO47.a("2ec595ec412d9d3546a28c"), v1779[vO47.a("ddaf2ce90fb1")] = true, v1779), function () {
      v1777 = true;
      v1778 = false;
      v172(vO47.a("63630034b0718d3d0e68"), vO47.a("fee7a9f567"));
      v172(vO47.a("c94d2e9e1a57ab67b436696b3b"), vO47.a("f3c7998904cd"), function () {
        v172(vO47.a("a7afcc787cb54979ca94"), vO47.a("5cc5f74b05"));
        v1778 = false;
      });
    });
    $(vO47.a("4191a01babc2261b3d97b809bdce20f225"))[vO47.a("85156b516a11")](function () {
      if (v1777) {
        if (v1778) {
          v172(vO47.a("ae481523e5aa10a2d333"), vO47.a("bdcd531f32d7"));
          v1778 = false;
        } else {
          v172(vO47.a("e0c64751b35c42d08dcd"), vO47.a("124ca44078"));
          v172(vO47.a("5a1c790f098644960707"), vO47.a("6d2d874f86"));
          v1778 = true;
        }
      }
    });
    vO37.c[vO47.a("c95c29bd3e47a163982c3a70")] = function () {
      var v1907;
      FB[vO47.a("8830a4b2f8")](((v1907 = {})[vO47.a("bf91b1420a90")] = atob(vO47.a("3a04b81446805498701c40003199629c7f16480836")), v1907[vO47.a("22508b5a4dde8d")] = true, v1907[vO47.a("569f7e8b3707")] = true, v1907[vO47.a("a2c010d4d2421b")] = true, v1907[vO47.a("a4838305db108595")] = vO47.a("e76ed86e452c"), v1907));
    };
    vO47.ba(vO47.a("5fbf4eb18cfa8bb304ec47bc8aff88bc00cf1acc9dc181c9") + vO46.H.Q + vO47.a("57a72aaeb0a2b7bd"), ((v1780 = {})[vO47.a("b46c92")] = vO47.a("9b2afced7a324efdc879cfe5543c42"), v1780[vO47.a("03d5768fe9db")] = true, v1780[vO47.a("3542d28edc58")] = true, v1780[vO47.a("b307c7c9441b56d8d20bd4c0")] = vO47.a("df718f3d0d6d0839926b"), v1780));
    vO47.ba(vO47.a("86386778faf23fb3e9703f46fec67ac6f94a7743e9843dddf715035dcbd60ac1885d1b"), null, function () {
      gapi[vO47.a("4a37633c2a")](vO47.a("0bdd788ae7f2"), function () {
        var v1908;
        v = gapi[vO47.a("d92b2e78357c")][vO47.a("41dbad1db1")](((v1908 = {})[vO47.a("798997c598800befe896")] = vO47.a("79d3ce95c9dc4a81b8c032873ddbf6d2f8c838d0349bbfaff93a7fa37134feabf76877be7f68fdbcc06017b5177089b9d96a58f24a71c087dd4746975054d487d75e5e824900dc9fac"), v1908));
      });
    });
    vO47.ba(vO47.a("79c5d4cd8d870c9ee69d6cd36993a9dbe69724d67ed1ffacf07675ab676bb9a2ea"));
    (function () {
      try {
        let v1909 = document.getElementsByTagName("head")[0];
        let v1910 = document.createElement("link");
        v1910.rel = "stylesheet";
        v1910.type = "text/css";
        v1910.href = vO50.url + "/css/wxo.css";
        v1909.appendChild(v1910);
      } catch (e60) {
        console.error(e60);
      }
    })();
    (ooo = vO47.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function f180() {
      requestAnimationFrame(f180);
      ooo.ug();
    })();
    (function () {
      function f181() {
        var v1911 = v$20[vO47.a("4ff738a6a7ec")]();
        var v1912 = v$20[vO47.a("8831afb2ebb5ba")]();
        var v1913 = v$21[vO47.a("de00d5058781f39c8203c0")]();
        var v1914 = v$21[vO47.a("74aac3331d3bf2ae15aad63b")]();
        var v1915 = v$22[vO47.a("a6581d4dcfc924d8c7581835")]();
        var v1916 = v$23[vO47.a("08b63f2f692f06ba79863a17")]();
        var v1917 = vO47.ha(1, vO47.ha((v1912 - v1916 - v1915) / v1914, v1911 / v1913));
        var v1918 = vO47.a("7b580f0f91436d13f751ad5b32082c56ab11b84e2a6931f1f025f9e33f").concat(v1917, vO47.a("f46c"));
        v$21[vO47.a("2a589f4e")](vO47.a("221e935044dc81cd074f9e5c40cc96ae402e"), v1918);
        v$21[vO47.a("4072f1e0")](vO47.a("0f6d7cede969e1f476266aecf43ef0"), v1918);
        v$21[vO47.a("ce3ce312")](vO47.a("6814c7c841c9dc5e1e32d4ac06a8"), v1918);
        v$21[vO47.a("4a387f2e")](vO47.a("ae121f6cc6b115abc521173bd7"), v1918);
        v$21[vO47.a("23b75665")](vO47.a("46a37ab824286a323cb2"), v1918);
        ooo.qg();
        vO37.c[vO47.a("26c48bcb4557806941")](0, 1);
      }
      var v$20 = $(vO47.a("ebfe82ba16"));
      var v$21 = $(vO47.a("c595340c3bdfbf1fa5932def29"));
      var v$22 = $(vO47.a("5565ba69ab212e7c7026ba71853711"));
      var v$23 = $(vO47.a("a85a879ade969b0f9de79d6cc06084"));
      f181();
      $(vO37.c)[vO47.a("b5d4521b50d0de")](f181);
    })();
    let vF57 = function (p1582, p1583) {
      var v$24 = $("#saveGame");
      v$24.prop("checked", p1582.saveGame);
      v$24.change(function () {
        if (!this.checked) {
          let vConfirm2 = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !vConfirm2);
          if (!this.checked) {
            vF58(p1582, p1583, "zero");
          }
        }
        ;
        p1582.saveGame = this.checked;
        p1583.value2_hs.alpha = this.checked ? 1 : 0;
        p1583.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("wxoSaveGame", this.checked ? JSON.stringify(p1582) : null);
      });
    };
    let vF58 = function (p1584, p1585, p1586, p1587) {
      let vF59 = function (p1588, p1589, p1590, p1591) {
        p1585.value1_hs.text = p1589;
        p1585.value2_hs.text = p1590;
        p1585.value1_kill.text = p1588;
        p1585.value2_kill.text = p1591;
      };
      if (p1586 === "count") {
        p1584.kill = (p1584.kill || 0) + (p1587 ? 0 : 1);
        p1584.headshot = (p1584.headshot || 0) + (p1587 ? 1 : 0);
        p1584.s_kill += p1587 ? 0 : 1;
        p1584.s_headshot += p1587 ? 1 : 0;
        vF59(p1584.kill, p1584.headshot, p1584.s_headshot, p1584.s_kill);
      }
      if (p1586 === "open") {
        p1584.kill = 0;
        p1584.headshot = 0;
        p1584.s = true;
        p1584.st = true;
        v1025.texture = v1019;
        if (p1584.saveGame) {
          vF59(p1584.kill, p1584.headshot, p1584.s_headshot, p1584.s_kill);
        }
        vF73();
      }
      if (p1586 === "close") {
        p1584.s = false;
        v1023.texture = v1015;
        v1024.texture = v1017;
        v1013 = false;
        vLN552 = 55;
        vLN19 = 1;
        v1014 = true;
        clearInterval(v999);
        v999 = null;
        clearInterval(v1012);
        v1012 = null;
        p1584.z = 1;
        p1584.fz = true;
        p1584.mo1.x = -1;
        p1584.mo1.y = -1;
        p1584.mo2.x = -1;
        p1584.mo2.y = -1;
        if (vO49.on && p1584.mobile && p1584.mo == 6 && p1584.j) {
          p1584.j.destroy();
        }
        if (p1584.saveGame) {
          p1584.died = (p1584.died || 0) + 1;
        } else {
          vF58(p1584, p1585, "zero");
        }
      }
      if (p1586 === "zero") {
        p1584.kill = 0;
        p1584.s_kill = 0;
        p1584.headshot = 0;
        p1584.s_headshot = 0;
        p1584.died = 0;
      }
      localStorage.setItem("wxoSaveGame", JSON.stringify(p1584));
    };
    let vF61 = function (p1592, p1593, p1594, p1595, p1596, p1597) {
      var v1919;
      var v1920;
      var v1921;
      let vF62 = function (p1598, p1599, p1600, p1601, p1602, p1603, p1604) {
        if (p1593.pk0.text != p1598) {
          p1593.pk0.text = p1598;
        }
        if (p1593.pk1.text != p1599) {
          p1593.pk1.text = p1599;
        }
        if (p1593.pk2.text != p1600) {
          p1593.pk2.text = p1600;
        }
        if (p1593.pk3.text != p1601) {
          p1593.pk3.text = p1601;
        }
        if (p1593.pk4.text != p1602) {
          p1593.pk4.text = p1602;
        }
        if (p1593.pk5.text != p1603) {
          p1593.pk5.text = p1603;
        }
        if (p1593.pk6.text != p1604) {
          p1593.pk6.text = p1604;
        }
      };
      if (p1594 === "show") {
        v1919 = p1595;
        v1920 = p1596;
        v1921 = p1597;
        if (v1919 == 0) {
          if (v1920 == 0 || v1920 == 1 || v1920 == 2 || v1920 == 6) {
            p1592.pk = 30 - v1921 * 100 * (30 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk0 = "";
            } else {
              p1592.pk0 = p1592.pk.toFixed();
            }
            if (v1920 == 0 && p1593.pk0.style.fill != "#f9cc0b") {
              p1593.pk0.style.fill = "#f9cc0b";
            }
            if (v1920 == 1 && p1593.pk0.style.fill != "#fdbf5f") {
              p1593.pk0.style.fill = "#fdbf5f";
            }
            if (v1920 == 2 && p1593.pk0.style.fill != "#5dade6") {
              p1593.pk0.style.fill = "#5dade6";
            }
            if (v1920 == 6 && p1593.pk0.style.fill != "#e74a94") {
              p1593.pk0.style.fill = "#e74a94";
            }
          }
          if (v1920 == 3) {
            p1592.pk = 80 - v1921 * 100 * (80 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk0 = "";
            } else {
              p1592.pk0 = p1592.pk.toFixed();
            }
            if (p1593.pk0.style.fill != "#e03e42") {
              p1593.pk0.style.fill = "#e03e42";
            }
          }
          if (v1920 == 4) {
            p1592.pk = 40 - v1921 * 100 * (40 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk0 = "";
            } else {
              p1592.pk0 = p1592.pk.toFixed();
            }
            if (p1593.pk0.style.fill != "#5dade6") {
              p1593.pk0.style.fill = "#5dade6";
            }
          }
          if (v1920 == 5) {
            p1592.pk = 20 - v1921 * 100 * (20 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk0 = "";
            } else {
              p1592.pk0 = p1592.pk.toFixed();
            }
            if (p1593.pk0.style.fill != "#d4db19") {
              p1593.pk0.style.fill = "#d4db19";
            }
          }
          p1592.pk1 = "";
          p1592.pk2 = "";
          p1592.pk3 = "";
          p1592.pk4 = "";
          p1592.pk5 = "";
          p1592.pk6 = "";
        }
        if (v1919 == 40) {
          if (v1920 == 0 || v1920 == 1 || v1920 == 2 || v1920 == 6) {
            p1592.pk = 30 - v1921 * 100 * (30 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk1 = "";
            } else {
              p1592.pk1 = p1592.pk.toFixed();
            }
            if (v1920 == 0 && p1593.pk1.style.fill != "#f9cc0b") {
              p1593.pk1.style.fill = "#f9cc0b";
            }
            if (v1920 == 1 && p1593.pk1.style.fill != "#fdbf5f") {
              p1593.pk1.style.fill = "#fdbf5f";
            }
            if (v1920 == 2 && p1593.pk1.style.fill != "#5dade6") {
              p1593.pk1.style.fill = "#5dade6";
            }
            if (v1920 == 6 && p1593.pk1.style.fill != "#e74a94") {
              p1593.pk1.style.fill = "#e74a94";
            }
          }
          if (v1920 == 3) {
            p1592.pk = 80 - v1921 * 100 * (80 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk1 = "";
            } else {
              p1592.pk1 = p1592.pk.toFixed();
            }
            if (p1593.pk1.style.fill != "#e03e42") {
              p1593.pk1.style.fill = "#e03e42";
            }
          }
          if (v1920 == 4) {
            p1592.pk = 40 - v1921 * 100 * (40 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk1 = "";
            } else {
              p1592.pk1 = p1592.pk.toFixed();
            }
            if (p1593.pk1.style.fill != "#5dade6") {
              p1593.pk1.style.fill = "#5dade6";
            }
          }
          if (v1920 == 5) {
            p1592.pk = 20 - v1921 * 100 * (20 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk1 = "";
            } else {
              p1592.pk1 = p1592.pk.toFixed();
            }
            if (p1593.pk1.style.fill != "#d4db19") {
              p1593.pk1.style.fill = "#d4db19";
            }
          }
          p1592.pk2 = "";
          p1592.pk3 = "";
          p1592.pk4 = "";
          p1592.pk5 = "";
          p1592.pk6 = "";
        }
        if (v1919 == 80) {
          if (v1920 == 0 || v1920 == 1 || v1920 == 2 || v1920 == 6) {
            p1592.pk = 30 - v1921 * 100 * (30 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk2 = "";
            } else {
              p1592.pk2 = p1592.pk.toFixed();
            }
            if (v1920 == 0 && p1593.pk2.style.fill != "#f9cc0b") {
              p1593.pk2.style.fill = "#f9cc0b";
            }
            if (v1920 == 1 && p1593.pk2.style.fill != "#fdbf5f") {
              p1593.pk2.style.fill = "#fdbf5f";
            }
            if (v1920 == 2 && p1593.pk2.style.fill != "#5dade6") {
              p1593.pk2.style.fill = "#5dade6";
            }
            if (v1920 == 6 && p1593.pk2.style.fill != "#e74a94") {
              p1593.pk2.style.fill = "#e74a94";
            }
          }
          if (v1920 == 3) {
            p1592.pk = 80 - v1921 * 100 * (80 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk2 = "";
            } else {
              p1592.pk2 = p1592.pk.toFixed();
            }
            if (p1593.pk2.style.fill != "#e03e42") {
              p1593.pk2.style.fill = "#e03e42";
            }
          }
          if (v1920 == 4) {
            p1592.pk = 40 - v1921 * 100 * (40 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk2 = "";
            } else {
              p1592.pk2 = p1592.pk.toFixed();
            }
            if (p1593.pk2.style.fill != "#5dade6") {
              p1593.pk2.style.fill = "#5dade6";
            }
          }
          if (v1920 == 5) {
            p1592.pk = 20 - v1921 * 100 * (20 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk2 = "";
            } else {
              p1592.pk2 = p1592.pk.toFixed();
            }
            if (p1593.pk2.style.fill != "#d4db19") {
              p1593.pk2.style.fill = "#d4db19";
            }
          }
          p1592.pk3 = "";
          p1592.pk4 = "";
          p1592.pk5 = "";
          p1592.pk6 = "";
        }
        if (v1919 == 120) {
          if (v1920 == 0 || v1920 == 1 || v1920 == 2 || v1920 == 6) {
            p1592.pk = 30 - v1921 * 100 * (30 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk3 = "";
            } else {
              p1592.pk3 = p1592.pk.toFixed();
            }
            if (v1920 == 0 && p1593.pk3.style.fill != "#f9cc0b") {
              p1593.pk3.style.fill = "#f9cc0b";
            }
            if (v1920 == 1 && p1593.pk3.style.fill != "#fdbf5f") {
              p1593.pk3.style.fill = "#fdbf5f";
            }
            if (v1920 == 2 && p1593.pk3.style.fill != "#5dade6") {
              p1593.pk3.style.fill = "#5dade6";
            }
            if (v1920 == 6 && p1593.pk3.style.fill != "#e74a94") {
              p1593.pk3.style.fill = "#e74a94";
            }
          }
          if (v1920 == 3) {
            p1592.pk = 80 - v1921 * 100 * (80 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk3 = "";
            } else {
              p1592.pk3 = p1592.pk.toFixed();
            }
            if (p1593.pk3.style.fill != "#e03e42") {
              p1593.pk3.style.fill = "#e03e42";
            }
          }
          if (v1920 == 4) {
            p1592.pk = 40 - v1921 * 100 * (40 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk3 = "";
            } else {
              p1592.pk3 = p1592.pk.toFixed();
            }
            if (p1593.pk3.style.fill != "#5dade6") {
              p1593.pk3.style.fill = "#5dade6";
            }
          }
          if (v1920 == 5) {
            p1592.pk = 20 - v1921 * 100 * (20 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk3 = "";
            } else {
              p1592.pk3 = p1592.pk.toFixed();
            }
            if (p1593.pk3.style.fill != "#d4db19") {
              p1593.pk3.style.fill = "#d4db19";
            }
          }
          p1592.pk4 = "";
          p1592.pk5 = "";
          p1592.pk6 = "";
        }
        if (v1919 == 160) {
          if (v1920 == 0 || v1920 == 1 || v1920 == 2 || v1920 == 6) {
            p1592.pk = 30 - v1921 * 100 * (30 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk4 = "";
            } else {
              p1592.pk4 = p1592.pk.toFixed();
            }
            if (v1920 == 0 && p1593.pk4.style.fill != "#f9cc0b") {
              p1593.pk4.style.fill = "#f9cc0b";
            }
            if (v1920 == 1 && p1593.pk4.style.fill != "#fdbf5f") {
              p1593.pk4.style.fill = "#fdbf5f";
            }
            if (v1920 == 2 && p1593.pk4.style.fill != "#5dade6") {
              p1593.pk4.style.fill = "#5dade6";
            }
            if (v1920 == 6 && p1593.pk4.style.fill != "#e74a94") {
              p1593.pk4.style.fill = "#e74a94";
            }
          }
          if (v1920 == 3) {
            p1592.pk = 80 - v1921 * 100 * (80 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk4 = "";
            } else {
              p1592.pk4 = p1592.pk.toFixed();
            }
            if (p1593.pk4.style.fill != "#e03e42") {
              p1593.pk4.style.fill = "#e03e42";
            }
          }
          if (v1920 == 4) {
            p1592.pk = 40 - v1921 * 100 * (40 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk4 = "";
            } else {
              p1592.pk4 = p1592.pk.toFixed();
            }
            if (p1593.pk4.style.fill != "#5dade6") {
              p1593.pk4.style.fill = "#5dade6";
            }
          }
          if (v1920 == 5) {
            p1592.pk = 20 - v1921 * 100 * (20 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk4 = "";
            } else {
              p1592.pk4 = p1592.pk.toFixed();
            }
            if (p1593.pk4.style.fill != "#d4db19") {
              p1593.pk4.style.fill = "#d4db19";
            }
          }
          p1592.pk5 = "";
          p1592.pk6 = "";
        }
        if (v1919 == 200) {
          if (v1920 == 0 || v1920 == 1 || v1920 == 2 || v1920 == 6) {
            p1592.pk = 30 - v1921 * 100 * (30 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk5 = "";
            } else {
              p1592.pk5 = p1592.pk.toFixed();
            }
            if (v1920 == 0 && p1593.pk5.style.fill != "#f9cc0b") {
              p1593.pk5.style.fill = "#f9cc0b";
            }
            if (v1920 == 1 && p1593.pk5.style.fill != "#fdbf5f") {
              p1593.pk5.style.fill = "#fdbf5f";
            }
            if (v1920 == 2 && p1593.pk5.style.fill != "#5dade6") {
              p1593.pk5.style.fill = "#5dade6";
            }
            if (v1920 == 6 && p1593.pk5.style.fill != "#e74a94") {
              p1593.pk5.style.fill = "#e74a94";
            }
          }
          if (v1920 == 3) {
            p1592.pk = 80 - v1921 * 100 * (80 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk5 = "";
            } else {
              p1592.pk5 = p1592.pk.toFixed();
            }
            if (p1593.pk5.style.fill != "#e03e42") {
              p1593.pk5.style.fill = "#e03e42";
            }
          }
          if (v1920 == 4) {
            p1592.pk = 40 - v1921 * 100 * (40 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk5 = "";
            } else {
              p1592.pk5 = p1592.pk.toFixed();
            }
            if (p1593.pk5.style.fill != "#5dade6") {
              p1593.pk5.style.fill = "#5dade6";
            }
          }
          if (v1920 == 5) {
            p1592.pk = 20 - v1921 * 100 * (20 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk5 = "";
            } else {
              p1592.pk5 = p1592.pk.toFixed();
            }
            if (p1593.pk5.style.fill != "#d4db19") {
              p1593.pk5.style.fill = "#d4db19";
            }
          }
          p1592.pk6 = "";
        }
        if (v1919 == 240) {
          if (v1920 == 0 || v1920 == 1 || v1920 == 2 || v1920 == 6) {
            p1592.pk = 30 - v1921 * 100 * (30 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk6 = "";
            } else {
              p1592.pk6 = p1592.pk.toFixed();
            }
            if (v1920 == 0 && p1593.pk6.style.fill != "#f9cc0b") {
              p1593.pk6.style.fill = "#f9cc0b";
            }
            if (v1920 == 1 && p1593.pk6.style.fill != "#fdbf5f") {
              p1593.pk6.style.fill = "#fdbf5f";
            }
            if (v1920 == 2 && p1593.pk6.style.fill != "#5dade6") {
              p1593.pk6.style.fill = "#5dade6";
            }
            if (v1920 == 6 && p1593.pk6.style.fill != "#e74a94") {
              p1593.pk6.style.fill = "#e74a94";
            }
          }
          if (v1920 == 3) {
            p1592.pk = 80 - v1921 * 100 * (80 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk6 = "";
            } else {
              p1592.pk6 = p1592.pk.toFixed();
            }
            if (p1593.pk6.style.fill != "#e03e42") {
              p1593.pk6.style.fill = "#e03e42";
            }
          }
          if (v1920 == 4) {
            p1592.pk = 40 - v1921 * 100 * (40 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk6 = "";
            } else {
              p1592.pk6 = p1592.pk.toFixed();
            }
            if (p1593.pk6.style.fill != "#5dade6") {
              p1593.pk6.style.fill = "#5dade6";
            }
          }
          if (v1920 == 5) {
            p1592.pk = 20 - v1921 * 100 * (20 / 99);
            if (p1592.pk <= 0.1) {
              p1592.pk6 = "";
            } else {
              p1592.pk6 = p1592.pk.toFixed();
            }
            if (p1593.pk6.style.fill != "#d4db19") {
              p1593.pk6.style.fill = "#d4db19";
            }
          }
        }
        vF62(p1592.pk0, p1592.pk1, p1592.pk2, p1592.pk3, p1592.pk4, p1592.pk5, p1592.pk6);
      }
      if (p1594 === "hidden") {
        p1592.pk0 = "";
        p1592.pk1 = "";
        p1592.pk2 = "";
        p1592.pk3 = "";
        p1592.pk4 = "";
        p1592.pk5 = "";
        p1592.pk6 = "";
        vF62(p1592.pk0, p1592.pk1, p1592.pk2, p1592.pk3, p1592.pk4, p1592.pk5, p1592.pk6);
      }
      localStorage.setItem("wxoSaveGame", JSON.stringify(p1592));
    };
    let vF63 = function () {
      clearInterval(v999);
      v999 = null;
      v999 = setInterval(function () {
        var v1922 = vO49.eie.fo;
        let v1923 = Math.PI;
        var v1924 = v1922 + v1923 / 360 * 9;
        if (v1924 >= v1923) {
          v1924 = -v1922;
        }
        vO49.eie.fo = v1924;
      }, 55);
    };
    let vF64 = function () {
      if (vLN19 >= 40) {
        if (v1014) {
          vLN552 += 25;
        } else {
          vLN552 -= 200;
        }
        vLN19 = 1;
      }
    };
    let vF65 = function () {
      if (vLN552 == 55 && vLN19 >= 40) {
        vLN552 += 25;
        vLN19 = 1;
        v1014 = true;
      }
      if (vLN552 == 80) {
        vF64();
      }
      if (vLN552 == 105) {
        vF64();
      }
      if (vLN552 == 130) {
        vF64();
      }
      if (vLN552 == 155) {
        vF64();
      }
      if (vLN552 == 180) {
        vF64();
      }
      if (vLN552 == 205) {
        vF64();
      }
      if (vLN552 == 230) {
        vF64();
      }
      if (vLN552 == 255) {
        vF64();
      }
      if (vLN552 == 280) {
        vF64();
      }
      if (vLN552 == 305) {
        vF64();
      }
      if (vLN552 == 330) {
        vF64();
      }
      if (vLN552 == 355) {
        vF64();
      }
      if (vLN552 == 380) {
        vF64();
      }
      if (vLN552 == 405) {
        vF64();
      }
      if (vLN552 == 430) {
        vF64();
      }
      if (vLN552 == 455 && vLN19 >= 40) {
        vLN552 -= 200;
        vLN19 = 1;
        v1014 = false;
      }
    };
    let vF66 = function () {
      clearInterval(v999);
      v999 = null;
      {
        var v1925 = vO49.eie.fo;
        let v1926 = Math.PI;
        var v1927 = v1925 + v1926 / 360 * 9;
        if (v1927 >= v1926) {
          v1927 = -v1925;
        }
        vO49.eie.fo = v1927;
        vLN19 += 1;
        vF65();
        if (v1013) {
          v999 = setInterval(vF66, vLN552);
        }
      }
    };
    let vF67 = function () {
      clearInterval(v1012);
      v1012 = null;
      if (vO49.on) {
        var vBtoa28 = btoa(vO50.c_1);
        if (vO50.ig != -1 && btoa(vBtoa28) == vO50.d_1) {
          var vOoo2 = ooo;
          var v1928 = vO50.sg.indexOf(vO49.n.ni);
          var vBtoa29 = btoa(vO50.c_2);
          if (btoa(vBtoa29) == vO50.d_2) {
            vO49.uj.hd(vOoo2.Mh.Qh.eh, vOoo2.ud.Cc().Ub(vO49.n.mi), vOoo2.ud.Cc().Tb(vO50.ig), vOoo2.ud.Cc().Vb(vO49.n.Vi), vOoo2.ud.Cc().Wb(vO49.n.Wi), vOoo2.ud.Cc().Xb(vO49.n.Xi), vOoo2.ud.Cc().Yb(vO49.n.Yi), "#ffffff");
          }
          if (vO50.gg[v1928].r) {
            if (vO50.re) {
              vO50.ig = vO50.ig - 1;
              if (vO50.ig < vO50.gg[v1928].s) {
                vO50.ig = vO50.gg[v1928].s + 1;
                vO50.re = false;
              }
            } else {
              vO50.ig = vO50.ig + 1;
              if (vO50.ig > vO50.gg[v1928].e) {
                vO50.ig = vO50.gg[v1928].e - 1;
                vO50.re = true;
              }
            }
          } else {
            vO50.ig = vO50.ig + 1;
            if (vO50.ig > vO50.gg[v1928].e) {
              vO50.ig = vO50.gg[v1928].s;
            }
          }
          var vBtoa30 = btoa(vO50.c_3);
          if (btoa(vBtoa30) == vO50.d_3) {
            v1012 = setInterval(vF67, vO50.gg[v1928].t);
          }
        }
      }
    };
    let vF68 = function () {
      v1013 = true;
      vLN552 = 55;
      vLN19 = 1;
      v1014 = true;
      vF66();
    };
    let vF69 = function () {
      if (v1023.texture == v1015) {
        v1023.texture = v1016;
        v1023.alpha = 1;
        v1024.texture = v1017;
        v1024.alpha = 0.25;
        v1013 = false;
        vLN552 = 55;
        vLN19 = 1;
        v1014 = true;
        clearInterval(v999);
        v999 = null;
        vF63();
      } else {
        v1023.texture = v1015;
        v1023.alpha = 0.25;
        clearInterval(v999);
        v999 = null;
      }
    };
    let vF70 = function () {
      if (v1024.texture == v1017) {
        v1024.texture = v1018;
        v1024.alpha = 1;
        v1023.texture = v1015;
        v1023.alpha = 0.25;
        clearInterval(v999);
        v999 = null;
        v1013 = true;
        vLN552 = 55;
        vLN19 = 1;
        v1014 = true;
        vF66();
      } else {
        v1024.texture = v1017;
        v1024.alpha = 0.25;
        v1013 = false;
        vLN552 = 55;
        vLN19 = 1;
        v1014 = true;
        clearInterval(v999);
        v999 = null;
      }
    };
    let vF71 = function () {
      if (v1025.texture == v1019) {
        v1025.texture = v1020;
        v1025.alpha = 1;
        if (vO50.h) {
          vO50.z = 1.6;
        } else {
          vO50.z = 1.2;
        }
      } else {
        v1025.texture = v1019;
        v1025.alpha = 0.25;
        vO50.z = 1;
      }
    };
    let vF72 = function () {
      if (vO49.on && vO50.mobile) {
        var v1929 = v1029.offsetWidth;
        var v1930 = v1029.offsetHeight;
        var v1931 = ooo.Xg.Kf.Wg.Ah;
        if (vO50.mo == 1) {
          vO50.mo = 6;
          vO50.j = vF49(vO50.mobile);
          v1931.img_1.visible = false;
          v1931.img_p_1.visible = false;
          v1931.img_4.visible = true;
        } else if (vO50.mo == 6) {
          vO50.mo = 4;
          v1931.img_o_4.visible = true;
          v1931.img_o_4.x = 50;
          v1931.img_o_4.y = -220 + v1930;
          v1931.img_p_2.visible = true;
          v1931.img_p_2.x = -68 + v1929 * 0.5;
          v1931.img_p_2.y = -68 + v1930 * 0.5;
          v1931.img_f.visible = true;
          v1931.img_f.x = -250 + v1929;
          v1931.img_f.y = -200 + v1930;
          v1931.img_pf_1.visible = false;
          if (vO50.j) {
            vO50.j.destroy();
          }
        } else if (vO50.mo == 4) {
          vO50.mo = 5;
          v1931.img_o_4.x = -270 + v1929;
          v1931.img_o_4.y = -220 + v1930;
          v1931.img_p_2.x = -68 + v1929 * 0.5;
          v1931.img_p_2.y = -68 + v1930 * 0.5;
          v1931.img_f.x = 50;
          v1931.img_f.y = -200 + v1930;
        } else if (vO50.mo == 5) {
          vO50.mo = 2;
          v1931.img_4.visible = false;
          v1931.img_o_4.visible = false;
          v1931.img_2.visible = true;
          v1931.img_o_2.visible = true;
          v1931.img_o_2.x = 50;
          v1931.img_o_2.y = -220 + v1930;
          v1931.img_i_2.visible = true;
          v1931.img_i_2.x = 75;
          v1931.img_i_2.y = -195 + v1930;
          v1931.img_p_2.visible = true;
          v1931.img_p_2.x = -68 + v1929 * 0.5;
          v1931.img_p_2.y = -68 + v1930 * 0.5;
          v1931.img_f.visible = false;
          v1931.img_pf_1.visible = false;
        } else if (vO50.mo == 2) {
          vO50.mo = 3;
          v1931.img_2.visible = false;
          v1931.img_o_2.visible = false;
          v1931.img_i_2.visible = false;
          v1931.img_p_2.visible = false;
          v1931.img_3.visible = true;
          v1931.img_o_3.visible = true;
          v1931.img_o_3.x = 50;
          v1931.img_o_3.y = -220 + v1930;
          v1931.img_i_3.visible = true;
          v1931.img_i_3.x = 75;
          v1931.img_i_3.y = -195 + v1930;
          v1931.img_p_3.visible = true;
          v1931.img_p_3.x = -68 + v1929 * 0.5;
          v1931.img_p_3.y = -68 + v1930 * 0.5;
          v1931.img_pf_1.visible = false;
        } else if (vO50.mo == 3) {
          vO50.mo = 1;
          v1931.img_1.visible = true;
          v1931.img_p_1.visible = true;
          v1931.img_3.visible = false;
          v1931.img_o_3.visible = false;
          v1931.img_i_3.visible = false;
          v1931.img_p_3.visible = false;
          v1931.img_f.visible = false;
          v1931.img_pf_1.visible = false;
        }
      }
    };
    let vF73 = function () {
      if (vO49.on && vO50.mobile) {
        var v1932 = ooo.Xg.Kf.Wg.Ah;
        var v1933 = v1029.offsetHeight * 0.5;
        var v1934 = v1029.offsetWidth * 0.5;
        v1932.img_1.x = -100 + v1934;
        v1932.img_1.y = -60;
        v1932.img_2.x = -100 + v1934;
        v1932.img_2.y = -60;
        v1932.img_3.x = -100 + v1934;
        v1932.img_3.y = -60;
        v1932.img_4.x = -100 + v1934;
        v1932.img_4.y = -60;
        if (vO50.mo == 1) {
          v1932.img_p_1.alpha = 0.25;
          v1932.img_p_1.x = v1934 - 68;
          v1932.img_p_1.y = v1933 - 68;
        }
        if (vO50.mo == 2) {
          v1932.img_o_2.alpha = 0.25;
          v1932.img_o_2.x = 50;
          v1932.img_o_2.y = -220 + v1933 * 2;
          v1932.img_i_2.alpha = 0.25;
          v1932.img_i_2.x = 75;
          v1932.img_i_2.y = -195 + v1933 * 2;
          v1932.img_p_2.alpha = 0.25;
          v1932.img_p_2.x = v1934 - 68;
          v1932.img_p_2.y = v1933 - 68;
        }
        if (vO50.mo == 3) {
          v1932.img_o_3.alpha = 0.25;
          v1932.img_o_3.x = -50;
          v1932.img_o_3.y = -220 + v1933 * 2;
          v1932.img_i_3.alpha = 0.25;
          v1932.img_i_3.x = 75;
          v1932.img_i_3.y = -195 + v1933 * 2;
          v1932.img_p_3.alpha = 0.25;
          v1932.img_p_3.x = v1934 - 68;
          v1932.img_p_3.y = v1933 - 68;
        }
        if (vO50.mo == 4) {
          v1932.img_f.visible = true;
          v1932.img_f.x = -250 + v1934 * 2;
          v1932.img_f.y = -200 + v1933 * 2;
          v1932.img_o_4.x = 50;
          v1932.img_o_4.y = -220 + v1933 * 2;
          v1932.img_p_2.alpha = 0.25;
          v1932.img_p_2.x = v1934 - 68;
          v1932.img_p_2.y = v1933 - 68;
        }
        if (vO50.mo == 5) {
          v1932.img_f.visible = true;
          v1932.img_f.x = 50;
          v1932.img_f.y = -200 + v1933 * 2;
          v1932.img_o_4.x = -270 + v1934 * 2;
          v1932.img_o_4.y = -220 + v1933 * 2;
          v1932.img_p_2.alpha = 0.25;
          v1932.img_p_2.x = v1934 - 68;
          v1932.img_p_2.y = v1933 - 68;
        }
        if (vO50.mo == 6) {
          vO50.j = vF49(vO50.mobile);
        }
      }
    };
    let vF74 = function (p1605, p1606) {
      var v1935 = v1029.offsetWidth;
      var v1936 = v1029.offsetHeight;
      if (vO50.hz && vO50.mobile) {
        if (vO49.on) {
          if (vO50.tt) {
            if (p1605 > v1935 - 30 && p1605 < v1935 - 5 && p1606 < v1936 / 2 - 33 && p1606 > v1936 / 2 - 58) {
              vF69();
            }
            if (p1605 > v1935 - 30 && p1605 < v1935 - 5 && p1606 < v1936 / 2 - 3 && p1606 > v1936 / 2 - 28) {
              vF70();
            }
            if (p1605 > v1935 - 30 && p1605 < v1935 - 5 && p1606 < v1936 / 2 + 28 && p1606 > v1936 / 2 + 3 && vO50.z >= 0.2) {
              vO50.z = vO50.z - 0.1;
            }
            if (p1605 > v1935 - 30 && p1605 < v1935 - 5 && p1606 < v1936 / 2 + 58 && p1606 > v1936 / 2 + 33) {
              if (vO50.fz) {
                vO50.z = 1.6;
                vO50.fz = false;
              } else if (vO50.z <= 25) {
                vO50.z = vO50.z + 0.1;
              }
            }
          } else {
            if (p1605 > v1935 - 332 && p1605 < v1935 - 307 && p1606 < 37 && p1606 > 12) {
              vF69();
            }
            if (p1605 > v1935 - 302 && p1605 < v1935 - 277 && p1606 < 37 && p1606 > 12) {
              vF70();
            }
            if (p1605 > v1935 - 272 && p1605 < v1935 - 247 && p1606 < 37 && p1606 > 12 && vO50.z >= 0.2) {
              vO50.z = vO50.z - 0.1;
            }
            if (p1605 > v1935 - 242 && p1605 < v1935 - 217 && p1606 < 37 && p1606 > 12) {
              if (vO50.fz) {
                vO50.z = 1.6;
                vO50.fz = false;
              } else if (vO50.z <= 25) {
                vO50.z = vO50.z + 0.1;
              }
            }
          }
        }
      } else if (vO49.on) {
        if (p1605 > v1935 - 302 && p1605 < v1935 - 277 && p1606 < 37 && p1606 > 12) {
          vF69();
        }
        if (p1605 > v1935 - 272 && p1605 < v1935 - 247 && p1606 < 37 && p1606 > 12) {
          vF70();
        }
        if (p1605 > v1935 - 242 && p1605 < v1935 - 217 && p1606 < 37 && p1606 > 12) {
          vF71();
        }
      }
      if (vO49.on && p1605 >= 0 && p1606 >= 0 && (v1935 = Math.sqrt((p1605 - v1935 * 0.5) * (p1605 - v1935 * 0.5) + p1606 * p1606)) <= 40) {
        vF72();
      }
    };
    let vF75 = function (p1607) {
      var v1937 = document.getElementById("id_customer");
      if (v1937 != null) {
        var vO77 = {
          id_wormate: v1937.value,
          names: p1607
        };
        fetch(vO50.s_l + "/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO77)
        });
      }
    };
    let vF76 = function (p1608) {
      var vO78 = {
        ao: p1608
      };
      fetch(vO50.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO78)
      });
    };
    let vF77 = function (p1609) {
      var vA26 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var vA27 = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var vLS6 = "?";
      for (var vLN0252 = 0; vLN0252 <= 10; vLN0252++) {
        let v1938 = vO50.se[vA26[vLN0252]].indexOf(p1609);
        if (v1938 == -1) ;else {
          vLS6 = vA27[vLN0252] + "_" + (v1938 + 1);
          break;
        }
      }
      ;
      return vLS6;
    };
    let vF78 = function (p1610) {
      for (var v1939 = p1610.length, vLN0253 = 0, vA28 = [], vLN0254 = 0; vLN0254 < v1939; vLN0254 += 4) {
        vA28[vLN0253] = p1610.substr(vLN0254, 4);
        vLN0253 += 1;
      }
      ;
      return vA28;
    };
    let vF79 = function (p1611) {
      var v1940 = p1611.split(".");
      var vA29 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var vLN0255 = 0; vLN0255 <= 10; vLN0255++) {
        if (v1940[vLN0255] != "0") {
          vO50.se[vA29[vLN0255]] = vF78(v1940[vLN0255]);
        }
      }
    };
    let vF80 = async function (p1612, p1613) {
      var v1941 = document.getElementById("epx_time");
      if (v1941 != null) {
        v1941.remove();
      }
      var v1942 = document.getElementById("btnFullScreen");
      if (v1942 != null) {
        v1942.remove();
      }
      var v1976 = document.getElementById("btn_in_t");
      if (v1976 != null) {
        v1976.remove();
      }
      var v1944 = document.getElementById("btnRePlay");
      if (v1944 != null) {
        v1944.remove();
      }
      var v1958 = document.getElementById("modal_wxo");
      if (v1958 != null) {
        v1958.remove();
      }
      var v1950 = document.getElementById("btn_crsw");
      if (v1950 != null) {
        v1950.remove();
      }
      var v1959 = document.getElementById("op_wxo");
      if (v1959 != null) {
        v1959.remove();
      }
      var vO79 = {
        id_wormate: p1612.userId,
        name: p1612.username
      };
      let v1948 = await fetch(vO50.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO79)
      }).then(async function (p1614) {
        return await p1614.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      vO50.pL = [];
      vO50.v_z = v1948.vs;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
      if (vO50.dg != null && v1948.dsg.join() != vO50.dg.join() || vO50.dg == null && v1948.dsg.join() != "") {
        vO50.dg = v1948.dsg;
        localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
        window.location.reload();
      }
            if (v984 != vO50.v_z) {
        localStorage.removeItem("wxosw");
       // window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      window.currentDisplayMode = "timmap";
      if (typeof window.servers === "undefined") {
        window.servers = {
          Api_listServer: []
        };
      }
      function _0x2cde8c() {
        try {
          const _0x27e99a = localStorage.getItem("cachedServers");
          if (_0x27e99a) {
            const _0x1f265f = JSON.parse(_0x27e99a);
            const _0x45cf81 = _0x1f265f.timestamp;
            const _0x181dc5 = new Date().getTime();
            if (_0x181dc5 - _0x45cf81 < 3600000) {
              window.servers = _0x1f265f.data;
              return true;
            }
          }
        } catch (_0x35d812) {}
        return false;
      }
      async function _0xf6e63b() {
        try {
          const _0x32ec2d = await fetch(vO50.url +  "/servers");
          if (_0x32ec2d.ok) {
            const _0x4617f2 = await _0x32ec2d.json();
            if (_0x4617f2.success && Array.isArray(_0x4617f2.servers)) {
              window.servers.Api_listServer = _0x4617f2.servers.filter(_0x1058d8 => _0x1058d8.serverUrl);
              try {
                const _0x5eec04 = {
                  timestamp: new Date().getTime(),
                  data: window.servers
                };
                localStorage.setItem("cachedServers", JSON.stringify(_0x5eec04));
              } catch (_0x3e7392) {}
              return true;
            }
          }
        } catch (_0x2a8843) {
          setTimeout(_0xf6e63b, 5000);
        }
        return false;
      }
      function _0xe651e2() {
        setInterval(() => {
          if (typeof loadUsers === "function") {
            loadUsers();
          }
          _0xf6e63b().then(_0x3a4444 => {
            if (_0x3a4444 && typeof createServers === "function") {
              createServers();
            }
          });
        }, 300000);
      }
      async function _0xf218bd() {
        const _0x4181f5 = _0x2cde8c();
        if (typeof loadUsers === "function") {
          loadUsers();
        }
        const _0xbaa9d4 = await _0xf6e63b();
        _0xe651e2();
        return _0x4181f5 || _0xbaa9d4;
      }
      if (v1948.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (v1948.e === "not_empty") {
          $(".description-text").html(v1948.cc);
          if (v1948.cr != "") {
            $("#loa831pibur0w4gv").html("");
          }
          _0x4bb5d0();
        } else if (v1948.e === "empty" || v1948.e === "new") {
          _0x33c7d0();
        }
        vO50.pL = [...v1948.propertyList];
      }
      function _0x4bb5d0() {
        $(".description-text").append("\n<div class=\"title-wormate-server\">\n          S E R V E R S  \n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + vO50.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n              \n      <div class=\"gachngang\"></div>\n                    </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n        \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0xe8047c();
      }
      function _0x33c7d0() {
        $(".description-text").html("\n<div class=\"title-wormate-server\">\n          S E R V E R S \n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + vO50.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + vO50.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n              \n      <div class=\"gachngang\"></div>\n                    </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n        \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0xe8047c();
      }
      function _0xe8047c() {
        $("body").append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">⟷ </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
        $("body").append("<div id=\"image-tooltip\" class=\"image-tooltip\"></div>");
        window.currentDisplayMode = "timmap";
        $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
        function _0x4ef3a5() {
          const _0x2a0868 = {
            mx: "servers-mexico",
            br: "servers-peru",
            us: "servers-eeuu",
            ca: "servers-canada",
            de: "servers-germania",
            fr: "servers-francia",
            sg: "servers-singapur",
            jp: "servers-japon",
            au: "servers-australia",
            gb: "servers-granbretana"
          };
          $("<style>").prop("type", "text/css").html("\n          .ui-tabs-nav .ui-tab:hover, \n          .ui-tabs-nav .ui-tab.ui-tab-active {\n            background-color: white !important;\n          }\n          .ui-tabs-nav .ui-tab {\n            border-color: white !important;\n          }\n        ").appendTo("head");
          Object.keys(_0x2a0868).forEach((_0x257188, _0x3f291d) => {
            $("." + _0x257188).on("click", function () {
              $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
              $(this).closest(".ui-tab").addClass("ui-tab-active");
              $("#addflag").attr("class", "flag " + _0x257188);
              $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").hide();
              $("." + _0x2a0868[_0x257188]).fadeIn(300);
            });
          });
        }
        function _0x5c117b() {
          $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
          const _0x321745 = {
            peru: "DE",
            mexico: "UAE",
            eeuu: "USA",
            canada: "LT",
            germania: "BR",
            francia: "FR",
            singapur: "SG",
            japon: "JP",
            australia: "IN",
            granbretana: "UK"
          };
          const _0xfb2d3c = {
            peru: vO50.s_l + "/images/cors-proxy.phpimg=flg/de.png",
            mexico: vO50.s_l + "/images/cors-proxy.phpimg=flg/mx.png",
            eeuu: vO50.s_l + "/images/cors-proxy.phpimg=flg/us.png",
            canada: vO50.s_l + "/images/cors-proxy.phpimg=flg/ca.png",
            germania: vO50.s_l + "/images/server-flags/tur.png",
            francia: vO50.s_l + "/images/cors-proxy.phpimg=flg/fr.png",
            singapur: vO50.s_l + "/images/cors-proxy.phpimg=flg/sg.png",
            japon: vO50.s_l + "/images/cors-proxy.phpimg=flg/jp.png",
            australia: vO50.s_l + "/images/cors-proxy.phpimg=flg/au.png",
            granbretana: vO50.s_l + "/images/cors-proxy.phpimg=flg/gb.png"
          };
          const _0x5adcf3 = {};
          Object.keys(_0x321745).forEach(_0x4890a5 => {
            _0x5adcf3[_0x4890a5] = [];
          });
          if (window.servers && window.servers.Api_listServer && window.servers.Api_listServer.length > 0) {
            let _0xab13ee = window.currentDisplayMode || "timmap";
            window.servers.Api_listServer.forEach(_0x20112f => {
              let _0x52fed1 = null;
              if (_0xab13ee === "timmap" && _0x20112f.timmap) {
                _0x52fed1 = _0x20112f.timmap;
              } else if (_0xab13ee === "wormworld" && _0x20112f.wormworld) {
                _0x52fed1 = _0x20112f.wormworld;
              }
              if (_0x52fed1 && _0x5adcf3[_0x20112f.region]) {
                _0x20112f.displayNumber = _0x52fed1;
                _0x5adcf3[_0x20112f.region].push(_0x20112f);
              }
            });
            Object.keys(_0x5adcf3).forEach(_0xf7df86 => {
              const _0x3ca86c = _0x5adcf3[_0xf7df86];
              const _0x54236c = _0x321745[_0xf7df86];
              if (_0x3ca86c.length > 0) {
                _0x3ca86c.sort((_0x46d500, _0x287b06) => (_0x46d500.displayNumber || 0) - (_0x287b06.displayNumber || 0));
                for (let _0x1b7ef8 = 0; _0x1b7ef8 < _0x3ca86c.length; _0x1b7ef8++) {
                  const _0x2b5632 = _0x3ca86c[_0x1b7ef8];
                  const _0x2ee87c = _0x2b5632.displayNumber;
                  const _0x55bfdc = _0x2b5632.image || vO50.s_l + "/images/cors-proxy.phpimg=flg/default-server.png";
                  const _0x3bf653 = _0x2b5632.imageUrl || "";
                  const _0x27323b = $("<div></div>").addClass("selectSala").attr({
                    id: _0xf7df86,
                    value: _0x2b5632.serverUrl,
                    "data-server-name": _0x2b5632.name || "Server " + _0x2ee87c,
                    "data-region-name": _0x54236c,
                    "data-region-flag": _0xfb2d3c[_0xf7df86],
                    "data-server-number": _0x2ee87c,
                    "data-server-image": _0x55bfdc
                  });
                  const _0x16d8cb = _0x3bf653 && _0x3bf653.trim() !== "";
                  const _0x2697a4 = $("<div></div>").addClass("server-image");
                  if (_0x16d8cb) {
                    const _0xced140 = _0x2b5632.name || "Server " + _0x2ee87c;
                    _0x2697a4.addClass("server-image-with-link").data("url", _0x3bf653).attr("data-server-name", _0xced140);
                    _0x2697a4.on("click", function (_0x1e83be) {
                      _0x1e83be.stopPropagation();
                      const _0x4c2565 = $(this).data("url");
                      if (_0x4c2565) {
                        window.open(_0x4c2565, "_blank");
                      }
                    });
                    _0x2697a4.hover(function () {
                      const _0x26bcf7 = $(this).data("server-name");
                      $("#server-link-tooltip").remove();
                      $("<div id=\"server-link-tooltip\"></div>").text("Visit " + _0x26bcf7 + " page").css({
                        position: "fixed",
                        background: "rgba(0,0,0,0.9)",
                        color: "white",
                        padding: "5px 10px",
                        "border-radius": "4px",
                        "font-size": "11px",
                        "white-space": "nowrap",
                        "z-index": "99999",
                        "pointer-events": "none",
                        "box-shadow": "0 0 5px rgba(0,0,0,0.5)"
                      }).appendTo("body");
                      const _0x27cf39 = $(this).offset();
                      const _0x41218a = $(this).width();
                      const _0x53038f = $(this).height();
                      const _0x203e43 = $("#server-link-tooltip").outerWidth();
                      $("#server-link-tooltip").css({
                        left: _0x27cf39.left + _0x41218a / 2 - _0x203e43 / 2,
                        top: _0x27cf39.top + _0x53038f + 10
                      }).fadeIn(200);
                    }, function () {
                      $("#server-link-tooltip").fadeOut(200, function () {
                        $(this).remove();
                      });
                    });
                  }
                  _0x2697a4.append($("<img>").attr("src", _0x55bfdc));
                  const _0x577e09 = $("<div></div>").addClass("server-info").append($("<span></span>").addClass("server-number").text(_0x2ee87c + "."), $("<span></span>").addClass("server-name").text(_0x2b5632.name || "Server " + _0x2ee87c));
                  const _0x53a99c = $("<div></div>").addClass("server-region").text(_0x54236c + " " + _0x2ee87c);
                  const _0x18fa29 = $("<div></div>").addClass("server-status").append($("<span></span>").addClass("green-dot"));
                  const _0x113cb5 = $("<div></div>").addClass("server-score");
                  _0x27323b.append(_0x2697a4, _0x577e09, _0x53a99c, _0x18fa29, _0x113cb5);
                  $(".servers-" + _0xf7df86).append(_0x27323b);
                  _0x27323b.click(function () {
                    const _0x1e57b1 = $(this).attr("data-region-name");
                    const _0x5c3570 = $(this).attr("data-server-number");
                    const _0x51efba = $(this).attr("value");
                    const _0x3db2f5 = $(this).attr("data-region-flag");
                    const _0x432726 = $(this).attr("data-server-image");
                    const _0xbcf504 = _0x1e57b1 + " " + _0x5c3570;
                    window.realServerName = _0xbcf504;
                    window.selectedServerInfo = {
                      regionName: _0x1e57b1,
                      serverNumber: _0x5c3570,
                      regionFlag: _0x3db2f5,
                      serverImage: _0x432726,
                      displayName: _0xbcf504
                    };
                    $("#port_id_s").val(_0x51efba);
                    $("#port_name_s").val(_0xbcf504);
                    $("#port_id").val($("#port_id_s").val());
                    $("#port_name").val($("#port_name_s").val());
                    try {
                      const _0x204811 = JSON.parse(localStorage.getItem("SaveGamewdv") || "{}");
                      _0x204811.realServerName = _0xbcf504;
                      localStorage.setItem("SaveGamewdv", JSON.stringify(_0x204811));
                    } catch (_0x5f4f5f) {
                      console.error("خطأ في حفظ اسم السيرفر:", _0x5f4f5f);
                    }
                    if (typeof vO3 !== "undefined") {
                      if (vO3.containerImgS && vO3.onclickServer) {
                        vO3.containerImgS.texture = vO3.onclickServer;
                      }
                    }
                    if (typeof retundFlagError === "function") {
                      retundFlagError();
                    }
                    window.server_url = _0x51efba;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click();
                    setTimeout(_0x52f296, 500);
                    setTimeout(_0x52f296, 2000);
                  });
                }
              } else {
                $(".servers-" + _0xf7df86).append("\n            <div style=\"text-align:center; padding:20px; color:#aaa;\">\n              No servers available in this region\n            </div>\n          ");
              }
            });
          } else {
            $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").html("\n        <div style=\"text-align:center; padding:20px; color:#aaa;\">\n          Loading servers... Please wait.\n        </div>\n      ");
          }
          _0x4c9ec5();
        }
        function _0x209649(_0x146868) {
          if (_0x146868 >= 1000000) {
            return (_0x146868 / 1000000).toFixed(2) + "M";
          } else if (_0x146868 >= 1000) {
            return (_0x146868 / 1000).toFixed(1) + "K";
          } else {
            return _0x146868.toFixed(0);
          }
        }
        function _0x52f296() {
          if (!window.realServerName) {
            return;
          }
          document.querySelectorAll("text, span, div").forEach(_0x307193 => {
            const _0x402810 = _0x307193.textContent || "";
            if (_0x402810.includes("wss://") || _0x402810.includes(".wormate.io") || _0x402810.includes("/wormy") || _0x402810.match(/[a-z]+-\d+/i)) {
              _0x307193.textContent = window.realServerName;
              if (_0x307193.text !== undefined) {
                _0x307193.text = window.realServerName;
              }
            }
          });
          if (window.mapText && window.mapText.text !== undefined) {
            window.mapText.text = window.realServerName;
          }
        }
        function _0x4a9d2a() {
          try {
            const _0x4c9de3 = window.savedData || window.savedData;
            if (_0x4c9de3 && typeof _0x4c9de3.Bq === "function") {
              const _0x59c0d3 = _0x4c9de3.Bq;
              _0x4c9de3.Bq = function (_0x30f240, _0x4d6c88) {
                const _0x50bcc8 = _0x59c0d3.apply(this, arguments);
                setTimeout(function () {
                  try {
                    const _0x44abd1 = window.realServerName || function () {
                      try {
                        const _0x141e76 = JSON.parse(localStorage.getItem("SaveGamewdv") || "{}");
                        return _0x141e76.realServerName || "";
                      } catch (_0x3a7b43) {
                        return "";
                      }
                    }();
                    if (window.mapText && window.mapText.text && _0x44abd1) {
                      window.mapText.text = _0x44abd1;
                    }
                  } catch (_0x5717a5) {
                    console.error("خطأ في تحديث عرض اسم السيرفر:", _0x5717a5);
                  }
                }, 100);
                return _0x50bcc8;
              };
              console.log("✅ تم تعديل دالة عرض اسم السيرفر بنجاح");
            }
          } catch (_0x1389e9) {
            console.error("❌ خطأ في تعديل دالة عرض اسم السيرفر:", _0x1389e9);
          }
        }
        window._0x4c9ec5 = function () {
          fetch("https://wormmedia.xyz:4000/api/live-scores?t=" + Date.now()).then(_0x3d659d => _0x3d659d.json()).then(_0x277a02 => {
            if (_0x277a02 && _0x277a02.success && Array.isArray(_0x277a02.data)) {
              $(".selectSala").each(function () {
                const _0x721a6e = $(this);
                const _0x32f759 = _0x721a6e.attr("value").trim();
                const _0x2b6815 = _0x277a02.data.find(_0x5484b9 => _0x5484b9.serverUrl === _0x32f759);
                _0x721a6e.find(".green-dot").css("display", "none");
                if (_0x2b6815 && _0x2b6815.YT.length > 0) {
                  _0x721a6e.data("YT", JSON.stringify(_0x2b6815.YT));
                  const _0x44adf6 = _0x2b6815.YT[0];
                  const _0x3dfe2e = _0x209649(_0x44adf6.score);
                  const _0x1b70bc = _0x44adf6.score >= 1000000;
                  _0x721a6e.find(".server-score").html("<span class=\"score-display " + (_0x1b70bc ? "million" : "regular") + "\">" + _0x3dfe2e + "</span>");
                  const _0x582d71 = _0x2b6815.YT.filter(_0xdda596 => _0xdda596.score >= 1000000).length;
                  if (_0x582d71 >= 4) {
                    _0x721a6e.find(".green-dot").css("display", "block");
                  }
                } else {
                  _0x721a6e.find(".server-score").html("-");
                }
              });
            }
          }).catch(_0x1c7a00 => console.error("API error:", _0x1c7a00));
        };
        function _0x413cd0() {
          $(document).on("mouseenter", ".server-score", function (_0x31e397) {
            $(".player-tooltip").remove();
            const _0x6c3cd8 = $(this).closest(".selectSala");
            const _0xad9f7a = _0x6c3cd8.data("YT");
            if (!_0xad9f7a) {
              return;
            }
            let _0x5316 = [];
            try {
              _0x5316 = typeof _0xad9f7a === "string" ? JSON.parse(_0xad9f7a) : _0xad9f7a;
            } catch (_0x5b3b3b) {
              return;
            }
            if (!_0x5316 || !_0x5316.length) {
              return;
            }
            let _0x3cb1ac = "<table>";
            const _0x70161b = Math.min(_0x5316.length, 10);
            for (let _0xb2e8af = 0; _0xb2e8af < _0x70161b; _0xb2e8af++) {
              const _0x2a2fc5 = _0x5316[_0xb2e8af];
              _0x3cb1ac += "<tr>\n          <td class=\"rank\">" + (_0xb2e8af + 1) + "-</td>\n          <td class=\"name\">" + (_0x2a2fc5.name || "Player_" + _0x2a2fc5.id) + "</td>\n          <td class=\"score\">" + _0x209649(_0x2a2fc5.score) + "</td>\n        </tr>";
            }
            _0x3cb1ac += "</table>";
            const _0x12730e = $("<div class=\"player-tooltip\"></div>").html(_0x3cb1ac).css({
              top: _0x31e397.pageY + 10,
              left: _0x31e397.pageX + 10
            });
            $("body").append(_0x12730e);
            $(this).data("tooltip", _0x12730e);
          });
          $(document).on("mouseleave", ".server-score", function () {
            const _0x386dff = $(this).data("tooltip");
            if (_0x386dff) {
              setTimeout(function () {
                _0x386dff.remove();
              }, 100);
            }
          });
          $(document).on("mousemove", ".server-score", function (_0x374284) {
            const _0x4db05d = $(this).data("tooltip");
            if (_0x4db05d) {
              _0x4db05d.css({
                top: _0x374284.pageY + 10,
                left: _0x374284.pageX + 10
              });
            }
          });
        }
        $("#sort-toggle").on({
          mouseenter: function (_0x128aa6) {
            var _0x3547ee = $("#custom-tooltip");
            var _0x58f874 = $(this).offset();
            var _0x420138 = $(this).outerWidth();
            var _0x593fd1 = _0x3547ee.outerWidth();
            _0x3547ee.css({
              left: _0x58f874.left + _0x420138 / 2 - _0x593fd1 / 2,
              top: _0x58f874.top + 30
            }).fadeIn(200);
          },
          mouseleave: function () {
            $("#custom-tooltip").fadeOut(200);
          }
        });
        $("#sort-toggle").click(function () {
          if (window.currentDisplayMode === "timmap") {
            window.currentDisplayMode = "wormworld";
            $(this).addClass("wormworld").text("WormWorld Servers");
            $(".server-number").css("color", "#00a8ff");
          } else {
            window.currentDisplayMode = "timmap";
            $(this).removeClass("wormworld").text("Timmap Servers");
            $(".server-number").css("color", "#f00");
          }
          _0x5c117b();
          setTimeout(function () {
            if (window.currentDisplayMode === "wormworld") {
              $(".server-number").css("color", "#00a8ff");
            } else {
              $(".server-number").css("color", "#f00");
            }
          }, 100);
        });
        function _0x4d71e8(_0x28fb67) {
          if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
            return;
          }
          $(".selectSala").hide();
          Object.keys(regionNames).forEach(_0x1fdf2c => {
            const _0x398fb2 = window.servers.Api_listServer.filter(_0x571f64 => _0x571f64.region === _0x1fdf2c);
            if (_0x398fb2.length > 0) {
              const _0x2f1c8e = _0x398fb2.filter(_0x8c3b8 => {
                if (_0x28fb67 === "timmap") {
                  return _0x8c3b8.timmap;
                } else {
                  return _0x8c3b8.wormworld;
                }
              });
              _0x2f1c8e.sort((_0x5efc77, _0x1baab1) => {
                const _0x394ec2 = _0x28fb67 === "timmap" ? _0x5efc77.timmap || 0 : _0x5efc77.wormworld || 0;
                const _0x4cdfc8 = _0x28fb67 === "timmap" ? _0x1baab1.timmap || 0 : _0x1baab1.wormworld || 0;
                return _0x394ec2 - _0x4cdfc8;
              });
              _0x2f1c8e.forEach(_0x47115b => {
                const _0x5e74e1 = _0x28fb67 === "timmap" ? _0x47115b.timmap : _0x47115b.wormworld;
                const _0x35445f = ".selectSala[value=\"" + _0x47115b.serverUrl + "\"]";
                const _0x59a920 = $(_0x35445f);
                if (_0x59a920.length) {
                  _0x59a920.find(".server-number").text(_0x5e74e1 + ".");
                  _0x59a920.find(".server-region").text(_0x59a920.attr("data-region-name") + " " + _0x5e74e1);
                  _0x59a920.attr("data-server-number", _0x5e74e1);
                  if ($(".servers-" + _0x1fdf2c).is(":visible")) {
                    _0x59a920.show();
                  }
                }
              });
            }
          });
        }
        function _0x349dd5() {
          if (window.currentDisplayMode === "wormworld") {
            $(".server-number").css("color", "#00a8ff");
          } else {
            $(".server-number").css("color", "#f00");
          }
        }
        $(".ui-tab").on("click", _0x4ef3a5);
        $(".flag").click(function () {
          let _0x39c64b = $(this).attr("value");
          if (typeof theoKzObjects !== "undefined") {
            theoKzObjects.flag = _0x39c64b;
          }
          if (typeof vO3 !== "undefined" && vO3.containerImgS) {
            vO3.containerImgS.texture = vO3.onclickServer;
          }
          if (typeof retundFlagError === "function") {
            retundFlagError();
          }
        });
        _0x4ef3a5();
        _0x413cd0();
        _0x4a9d2a();
        _0xf218bd().then(_0x15655e => {
          if (_0x15655e) {
            _0x5c117b();
            setTimeout(function () {
              let _0x46a116 = 0;
              let _0x227b67 = setInterval(function () {
                if (_0x46a116 >= 6) {
                  clearInterval(_0x227b67);
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                  _0x5c117b();
                  return;
                }
                if (_0x46a116 % 2 === 0) {
                  window.currentDisplayMode = "wormworld";
                  $("#sort-toggle").addClass("wormworld").text("WormWorld Servers");
                  $(".server-number").css("color", "#00a8ff");
                } else {
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                }
                if (_0x46a116 === 0 || _0x46a116 === 1) {
                  _0x5c117b();
                }
                _0x46a116++;
              }, 700);
            }, 1500);
          }
        });
      }
      p1613(p1612);
      var vLS7 = "";
      if (v1948.e === "empty") {
        vLS7 = "<input type=\"button\" value=\"" + v1948.ccg[3] + "\" id=\"btnRePlay\">";
        vO50.s_w = v1948.sw == 1;
      }
      vF79(v1948.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + v1948.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + v1948.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + vLS7 + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let v1949 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (v1949 && !vO50.fullscreen) {
          try {
            vO50.fullscreen = true;
            v1949.call(document.documentElement);
          } catch (e61) {}
        } else {
          vO50.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (v1948.e === "empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(vO50.pi);
          $("#port_name_s").val(vO50.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (vO50.s_w) {
        $("<button id=\"btn_crsw\" style=\"display: none;\">" + v1948.ccg[34] + "</button> <button id=\"op_wxo\">" + v1948.ccg[6] + "</button> <div id=\"modal_wxo\" class=\"modal\">   <div class=\"modal-content\">     <div class=\"center\">       <span class=\"close\">×</span>       <h2 class=\"modal-title\">" + v1948.ccg[6] + "</h2>     </div>     <div id=\"modal_wxo_body\" class=\"modal-body\">       <div>         <label for=\"id_customer\">" + v1948.ccg[7] + "</label>         <input value=\"" + p1612.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly>         <button id=\"btn_copy\">           <span class=\"tooltiptext\" id=\"myTooltip\">" + v1948.ccg[8] + "</span>" + v1948.ccg[9] + "         </button>       </div>       <br>       <div id=\"div_server\">         <label for=\"sel_server\">" + v1948.ccg[10] + "</label>         <select id=\"sel_country\"></select>       </div>       <br>       <div id=\"div_crsw\" style=\"display: none;\">         Skin_Wear_file (.json) &nbsp;         <input type=\"file\" accept=\".json\" id=\"fileSkin\" />         <button id=\"btn_clear_file\">Clear file</button>       </div>       <br>       <div id=\"div_save\" style=\"display: none;\">" + v1948.ccg[11] + " &nbsp;         <label for=\"saveGame\">(" + v1948.ccg[12] + ")</label>         <input type=\"checkbox\" id=\"saveGame\" value=\"true\">       </div>       <br>       <div>         <div id=\"div_sound\" style=\"display: none;\">           🔊<input type=\"checkbox\" id=\"wxosound\" value=\"true\">           <audio id=\"s_h\">             <source src=\"" + atob(v946[34]) + "\" type=\"audio/mpeg\">           </audio>         </div>         <div id=\"div_speed\" style=\"display: none;\">           ⏩<input type=\"checkbox\" id=\"wxospeed\" value=\"true\">         </div>         <div class=\"setting-item\" id=\"div_zigzag\" style=\"display: none;\">           <select id=\"sel_zigzag\" style=\"margin-left: 10px;\">             <option value=\"0\">No Zigzag</option>             <option value=\"1\">Zigzag 1</option>             <option value=\"2\">Zigzag 2</option>             <option value=\"3\">Zigzag 3</option>           </select>         </div>         <div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">           🖥️<select id=\"sel_sc\">             <option value=\"0\">100%</option>             <option value=\"1\">⬛</option>             <option value=\"2\">Center</option>           </select>         </div>         <div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">           Top: <select id=\"sel_top\">             <option value=\"0\">0</option>             <option value=\"1\">1</option>             <option value=\"2\">2</option>             <option value=\"3\">3</option>             <option value=\"4\">4</option>             <option value=\"5\">5</option>             <option value=\"6\">6</option>             <option value=\"7\">7</option>             <option value=\"8\">8</option>             <option value=\"9\">9</option>             <option value=\"10\">10</option>           </select>         </div>         <div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">           عربي<input type=\"checkbox\" id=\"wxoiq\" value=\"true\">         </div>         <div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">           Smooth: <select id=\"sel_sm\">             <option value=\"20\">Normal</option>             <option value=\"10\">Hight</option>           </select>         </div>       </div>       <br>       <div id=\"div_background\" style=\"display: none;\">         <label for=\"backgroundArena\">" + v1948.ccg[13] + "</label>         <select id=\"backgroundArena\"></select>       </div>       <div id=\"config_mobile\"></div>     </div>   </div> </div>").insertAfter("#mm-store");
        $("#btn_clear_file").click(function () {
          localStorage.removeItem("custom_wear");
          localStorage.removeItem("custom_skin");
          window.location.reload();
        });
        $("#btn_crsw").click(function () {
          window.open("https://timmapwormate.com/skin-wear-wormate/", "_blank");
        });
        var v1950 = document.getElementById("btn_crsw");
        var v1952 = document.getElementById("div_crsw");
        function f182(p1615) {
          if (p1615.target.result.indexOf("\"wear\":") !== -1) {
            localStorage.setItem("custom_wear", p1615.target.result);
          } else {
            localStorage.setItem("custom_skin", p1615.target.result);
          }
          window.location.href = "https://wormate.io/";
        }
        v1950.style.display = "inline-block";
        v1952.style.display = "block";
        document.getElementById("fileSkin").addEventListener("change", function f183(p1616) {
          var v1956 = new FileReader();
          v1956.onload = f182;
          v1956.readAsText(p1616.target.files[0]);
        });
      } else {
        $("<button id=\"op_wxo\">" + v1948.ccg[6] + "</button> <div id=\"modal_wxo\" class=\"modal\">   <div class=\"modal-content\">     <div class=\"center\">       <span class=\"close\">×</span>       <h2 class=\"modal-title\">" + v1948.ccg[6] + "</h2>     </div>     <div id=\"modal_wxo_body\" class=\"modal-body\">       <div>         <label for=\"id_customer\">" + v1948.ccg[7] + "</label>         <input value=\"" + p1612.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly>         <button id=\"btn_copy\">           <span class=\"tooltiptext\" id=\"myTooltip\">" + v1948.ccg[8] + "</span>" + v1948.ccg[9] + "         </button>       </div>       <br>       <div id=\"div_server\">         <label for=\"sel_server\">" + v1948.ccg[10] + "</label>         <select id=\"sel_country\"></select>       </div>       <br>       <div id=\"div_save\" style=\"display: none;\">" + v1948.ccg[11] + " &nbsp;         <label for=\"saveGame\">(" + v1948.ccg[12] + ")</label>         <input type=\"checkbox\" id=\"saveGame\" value=\"true\">       </div>       <br>       <div>         <div id=\"div_sound\" style=\"display: none;\">           🔊<input type=\"checkbox\" id=\"wxosound\" value=\"true\">           <audio id=\"s_h\">             <source src=\"" + atob(v946[34]) + "\" type=\"audio/mpeg\">           </audio>         </div>         <div id=\"div_speed\" style=\"display: none;\">           ⏩<input type=\"checkbox\" id=\"wxospeed\" value=\"true\">         </div>         <div class=\"setting-item\" id=\"div_zigzag\" style=\"display: none;\">           <select id=\"sel_zigzag\" style=\"margin-left: 10px;\">             <option value=\"0\">No Zigzag</option>             <option value=\"1\">Zigzag 1</option>             <option value=\"2\">Zigzag 2</option>             <option value=\"3\">Zigzag 3</option>           </select>         </div>         <div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">           🖥️<select id=\"sel_sc\">             <option value=\"0\">100%</option>             <option value=\"1\">⬛</option>             <option value=\"2\">Center</option>           </select>         </div>         <div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">           Top: <select id=\"sel_top\">             <option value=\"0\">0</option>             <option value=\"1\">1</option>             <option value=\"2\">2</option>             <option value=\"3\">3</option>             <option value=\"4\">4</option>             <option value=\"5\">5</option>             <option value=\"6\">6</option>             <option value=\"7\">7</option>             <option value=\"8\">8</option>             <option value=\"9\">9</option>             <option value=\"10\">10</option>           </select>         </div>         <div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">           عربي<input type=\"checkbox\" id=\"wxoiq\" value=\"true\">         </div>         <div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">           Smooth: <select id=\"sel_sm\">             <option value=\"20\">Normal</option>             <option value=\"10\">Hight</option>           </select>         </div>       </div>       <br>       <div id=\"div_background\" style=\"display: none;\">         <label for=\"backgroundArena\">" + v1948.ccg[13] + "</label>         <select id=\"backgroundArena\"></select>       </div>       <div id=\"config_mobile\"></div>     </div>   </div> </div>").insertAfter("#mm-store");
      }
      ;
      $("#btn_copy").click(function () {
        var v1957 = document.getElementById("id_customer");
        v1957.select();
        v1957.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(v1957.value);
        $("#myTooltip").html("" + v1948.ccg[14] + "!");
      });
      $("#btn_copy").hover(function () {
        $("#myTooltip").css("visibility", "unset");
        $("#myTooltip").css("opacity", "unset");
      }, function () {
        $("#myTooltip").css("visibility", "visible");
        $("#myTooltip").css("opacity", "0");
      });
      var v1958 = document.getElementById("modal_wxo");
      var v1959 = document.getElementById("op_wxo");
      var v1960 = document.getElementsByClassName("close")[0];
      v1959.onclick = function () {
        v1958.style.display = "block";
      };
      v1960.onclick = function () {
        v1958.style.display = "none";
      };
      var v1961 = document.getElementById("div_save");
      var v1962 = document.getElementById("div_sound");
      var v1963 = document.getElementById("div_speed");
      var v1964 = document.getElementById("div_zigzag");
      document.getElementById("s_h");
      var v1965 = document.getElementById("div_w1");
      var v1966 = document.getElementById("div_sm");
      var v1967 = document.getElementById("sel_sc");
      var v1968 = document.getElementById("div_top");
      var v1969 = document.getElementById("sel_top");
      var v1970 = document.getElementById("div_arab");
      var v1971 = document.getElementById("div_background");
      var vA30 = [{
        name: v1948.ccg[15],
        val: "vn"
      }, {
        name: v1948.ccg[16],
        val: "th"
      }, {
        name: v1948.ccg[17],
        val: "kh"
      }, {
        name: v1948.ccg[18],
        val: "id"
      }, {
        name: v1948.ccg[19],
        val: "sg"
      }, {
        name: v1948.ccg[20],
        val: "jp"
      }, {
        name: v1948.ccg[21],
        val: "mx"
      }, {
        name: v1948.ccg[22],
        val: "br"
      }, {
        name: v1948.ccg[23],
        val: "ca"
      }, {
        name: v1948.ccg[24],
        val: "de"
      }, {
        name: v1948.ccg[25],
        val: "fr"
      }, {
        name: v1948.ccg[26],
        val: "gb"
      }, {
        name: v1948.ccg[27],
        val: "au"
      }, {
        name: v1948.ccg[28],
        val: "us"
      }, {
        name: v1948.ccg[29],
        val: "pt"
      }, {
        name: v1948.ccg[35],
        val: "tr"
      }, {
        name: v1948.ccg[36],
        val: "iq"
      }];
      let v1972 = document.getElementById("sel_country");
      for (p1613 = 0; p1613 < vA30.length; p1613++) {
        let v1973 = document.createElement("option");
        v1973.value = vA30[p1613].val;
        v1973.innerHTML = vA30[p1613].name;
        v1972.appendChild(v1973);
      }
      ;
      if (v944) {
        v1972.value = v944;
      }
      v1972.onchange = function () {
        let v1974 = v1972.value;
        v944 = v1974;
        localStorage.setItem("oco", v1974);
        var vO80 = {
          id_wormate: p1612.userId,
          country: v1974
        };
        fetch(vO50.s_l + "/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO80)
        });
        localStorage.removeItem("wxosw");
        window.location.reload();
      };
      var v1975 = false;
      if (v1948.cm === "" || v1948.cm === undefined) ;else {
        var v1976 = document.getElementById("btn_in_t");
        var v1977 = document.getElementById("mm-action-play");
        var v1978 = document.getElementById("port_id");
        v1976.style.display = "block";
        v1976.onclick = function () {
          v1978.value = v1948.cm;
          v1977.click();
        };
        v1975 = true;
      }
      ;
      if (v1948.e === "not_connect") {} else {
        vO50.h = v1948.z == "b";
        vO50.hz = v1948.z == "c";
        if (v1948.e === "empty" || v1975) {
          var v1979 = ooo.Xg.Kf.Wg.Ah;
          v1961.style.display = "block";
          v1962.style.display = "inline-block";
          var v$25 = $("#wxosound");
          v$25.prop("checked", vO50.vh);
          v$25.change(function () {
            if (this.checked) {
              vO50.vh = true;
            } else {
              vO50.vh = false;
            }
            localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
          });
          v1963.style.display = "inline-block";
          var v$26 = $("#wxospeed");
          v$26.prop("checked", vO50.vp);
          v$26.change(function () {
            if (this.checked) {
              vO50.vp = true;
            } else {
              vO50.vp = false;
            }
            localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
          });
          $("#div_zigzag").css("display", "inline-block");
          $("#sel_zigzag").val(vO50.flx || 0);
          $("#sel_zigzag").change(function () {
            vO50.flx = parseInt($(this).val());
            localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
          });
          v1963.style.display = "inline-block";
          v1964.style.display = "inline-block";
          var v$29 = $("#wkgspeed");
          v$29.prop("checked", vO50.vp);
          v$29.change(function () {
            if (this.checked) {
              vO50.vp = true;
            } else {
              vO50.vp = false;
            }
            localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
          });
          if (vO50.mobile) {
            v1965.style.display = "none";
            vO50.sc = 0;
            vO50.wi = 0;
          } else {
            v1965.style.display = "inline-block";
            v1967.value = vO50.sc;
            v1967.onchange = function () {
              vO50.sc = parseInt(v1967.value);
              if (vO50.sc == 1) {
                vO50.wi = screen.height / (screen.width * 2);
              }
              if (vO50.sc == 2) {
                vO50.wi = 0;
              }
              localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
            };
          }
          v1966.style.display = "inline-block";
          sel_sm.value = vO50.sm;
          sel_sm.onchange = function () {
            vO50.sm = parseInt(sel_sm.value);
            localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
          };
          v1968.style.display = "inline-block";
          v1969.value = vO50.to;
          v1969.onchange = function () {
            vO50.to = parseInt(v1969.value);
            localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
          };
          if (v1972.value == "iq") {
            v1970.style.display = "inline-block";
            var v$29 = $("#wxoiq");
            v$29.prop("checked", vO50.iq);
            v$29.change(function () {
              if (this.checked) {
                vO50.iq = true;
              } else {
                vO50.iq = false;
              }
              localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
            });
          } else {
            vO50.iq = false;
            v1970.style.display = "none";
          }
          ;
          vO50.c_1 = v1948.streamer;
          v1971.style.display = "block";
          vF57(vO50, oeo);
          vO49.on = true;
          if (vF41()) {
            vO50.tt = v1948.tt == 1;
            v1979.img_1.visible = vO49.on && vO50.mo == 1;
            v1979.img_2.visible = vO49.on && vO50.mo == 2;
            v1979.img_3.visible = vO49.on && vO50.mo == 3;
            v1979.img_4.visible = vO49.on && (vO50.mo == 4 || vO50.mo == 5 || vO50.mo == 6);
          } else {
            vO50.tt = false;
          }
          var vA31 = [{
            nome: v1948.ccg[30],
            uri: atob(v946[24])
          }, {
            nome: v1948.ccg[31],
            uri: atob(v946[25])
          }, {
            nome: v1948.ccg[32],
            uri: atob(v946[26])
          }, {
            nome: v1948.ccg[33],
            uri: atob(v946[27])
          }, {
            nome: "Cindynana 1",
            uri: atob(v946[28])
          }, {
            nome: "Cindynana 2",
            uri: atob(v946[29])
          }, {
            nome: "Cindynana 3",
            uri: atob(v946[30])
          }, {
            nome: "Cindynana 4",
            uri: atob(v946[31])
          }, {
            nome: "Cindynana 5",
            uri: atob(v946[32])
          }];
          vO50.c_2 = v1948.programmer;
          let v1980 = document.getElementById("backgroundArena");
          for (p1613 = 0; p1613 < vA31.length; p1613++) {
            let v1981 = document.createElement("option");
            v1981.value = vA31[p1613].uri;
            v1981.setAttribute("data-imageSrc", vA31[p1613].uri);
            v1981.setAttribute("data-descriptione", vA31[p1613].nome);
            v1981.innerHTML = vA31[p1613].nome;
            v1980.appendChild(v1981);
          }
          ;
          vO50.c_3 = v1948.extension;
          v1980.value = vO50.background || vA31[0].uri;
          $("#backgroundArena").wxosle({
            onSelected: function () {
              vO50.background = $("#backgroundArena-value").val();
              localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
              ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(vO50.background));
            }
          });
          if (vO50.mobile) {
            $("#config_mobile").html(v1948.mb);
            var v1982 = document.getElementById("joystick_checked");
            var v1983 = document.getElementById("joystick_color");
            var v1984 = document.getElementById("joystick_mode");
            var v1985 = document.getElementById("joystick_position");
            var v1986 = document.getElementById("joystick_size");
            var v1987 = document.getElementById("joystick_pxy");
            v1982.onchange = function () {
              vF42(v1982);
              vF43(v1983);
              vF44(v1984);
              vF45(v1985);
              vF46(v1987);
              vF47(v1986);
            };
            v1983.onchange = function () {
              vF42(v1982);
              vF43(v1983);
              vF44(v1984);
              vF45(v1985);
              vF46(v1987);
              vF47(v1986);
            };
            v1984.onchange = function () {
              vF42(v1982);
              vF43(v1983);
              vF44(v1984);
              vF45(v1985);
              vF46(v1987);
              vF47(v1986);
            };
            v1985.onchange = function () {
              vF42(v1982);
              vF43(v1983);
              vF44(v1984);
              vF45(v1985);
              vF46(v1987);
              vF47(v1986);
            };
            v1986.onchange = function () {
              vF42(v1982);
              vF43(v1983);
              vF44(v1984);
              vF45(v1985);
              vF46(v1987);
              vF47(v1986);
            };
            v1987.onchange = function () {
              vF42(v1982);
              vF43(v1983);
              vF44(v1984);
              vF45(v1985);
              vF46(v1987);
              vF47(v1986);
            };
            if (vO50.joystick) {
              $("#joystick_checked").val(vO50.joystick.checked);
              $("#joystick_color").val(vO50.joystick.color);
              $("#joystick_mode").val(vO50.joystick.mode);
              $("#joystick_position").val(vO50.joystick.positionMode);
              $("#joystick_size").val(vO50.joystick.size);
              $("#joystick_pxy").val(vO50.joystick.pxy);
            } else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
            }
            vF42(v1982);
            vF43(v1983);
            vF44(v1984);
            vF45(v1985);
            vF46(v1987);
            vF47(v1986);
          }
          ;
          v1023.on("mousedown", vF69);
          v1024.on("mousedown", vF70);
          v1025.on("mousedown", vF71);
          vO50.c_5 = v1948.note;
        }
        ;
        if (v1948.ccc && v1948.ccc != "gb" && v1948.ccc != v944) {
          localStorage.setItem("oco", v1948.ccc);
          localStorage.removeItem("wxosw");
          window.location.reload();
        }
        if (!v944) {
          localStorage.setItem("oco", "gb");
        }
      }
      ;
      localStorage.setItem("wxoSaveGame", JSON.stringify(vO50));
    };
    Ysw = async function (p1617) {
      var v1988 = await p1617;
      try {
        vO50.gg = [];
        vO50.sg = [];
        var vLN0256 = 0;
        if (v990 && (v990 = JSON.parse(v990)).wear) {
          for (var v2004 in v990.wear.textureDict) {
            if (v990.wear.textureDict[v2004].file.search("data:image/png;base64,") == -1) {
              v990.wear.textureDict[v2004].file = "data:image/png;base64," + v990.wear.textureDict[v2004].file.substr(v990.wear.textureDict[v2004].file.length - vO50.c_v, vO50.c_v) + v990.wear.textureDict[v2004].file.substr(0, v990.wear.textureDict[v2004].file.length - vO50.c_v);
            }
            v1988.textureDict[v2004] = v990.wear.textureDict[v2004];
          }
          ;
          for (let v1990 in v990.wear.regionDict) {
            v1988.regionDict[v1990] = v990.wear.regionDict[v1990];
            v1988[(v2004 = v1988.regionDict[v1990]).list][v2004.id] = v2004.obj;
            v1988[v2004.listVariant].push([v2004.id]);
          }
        }
        ;
        if (v991) {
          if ((v991 = JSON.parse(v991)).csg) {
            var vLN0257 = 0;
            var v1991 = false;
            var vLN0258 = 0;
            for (var v1992 in v991.csg["0"]) {
              for (var v1994 = v991.csg["1"][v1992].split("|"), vLN0264 = 0; vLN0264 < v1994.length; vLN0264++) {
                v1988.textureDict["t_wxo_" + (vO50.g / 9 * 1000 + vLN0258)] = {
                  custom: true,
                  file: "data:image/png;base64," + v1994[vLN0264].substr(v1994[vLN0264].length - vO50.c_v, vO50.c_v) + v1994[vLN0264].substr(0, v1994[vLN0264].length - vO50.c_v)
                };
                vLN0258++;
              }
              ;
              var v1995 = v991.csg["2"][v1992];
              var vLN0260 = 0;
              var vAtob3 = atob(v946[36]);
              var vLSGIFSKIN2 = "GIF SKIN";
              var vLN0262 = 0;
              for (var v2004 in v1995) {
                vLN0262++;
              }
              ;
              for (var v2004 in v1995) {
                if (vLN0260 == 0) {
                  var vO83 = {
                    id: vO50.g * 100 + vLN0257,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: v1995[v2004]
                  };
                  for (var vLN0264 = 0; vLN0264 < v1995[v2004].length; vLN0264++) {
                    vO83.base.push("s_wxo_" + (vO50.g / 9 * 1000 + vLN0256) + "_" + (v1995[v2004].length - vLN0264));
                  }
                  ;
                  v1988.skinArrayDict.push(vO83);
                  var v1998 = vO50.sg.indexOf(vO83.id);
                  if (v1998 == -1) {
                    vO50.sg.push(vO83.id);
                    vO50.gg.push({
                      s: vO50.g / 9 * 1000 + vLN0256,
                      e: vO50.g / 9 * 1000 + vLN0256 + vLN0262 - 1,
                      t: parseInt(v991.csg["0"][v1992].substr(0, 1)) * 100,
                      r: v991.csg["0"][v1992].substr(1, 1) == "1"
                    });
                  }
                  if (v1991) {
                    for (var v2001 in v1988.skinGroupArrayDict) {
                      if (v1988.skinGroupArrayDict[v2001].id == vLSGIFSKIN2) {
                        v1988.skinGroupArrayDict[v2001].list.push(vO83.id);
                      }
                    }
                  } else {
                    v1988.skinGroupArrayDict.push({
                      isCustom: true,
                      id: vLSGIFSKIN2,
                      img: vAtob3,
                      name: {
                        de: vLSGIFSKIN2,
                        en: vLSGIFSKIN2,
                        es: vLSGIFSKIN2,
                        fr: vLSGIFSKIN2,
                        uk: vLSGIFSKIN2
                      },
                      list: [vO83.id]
                    });
                    v1991 = true;
                  }
                  ;
                  vLN0257++;
                }
                ;
                var vO83 = {
                  id: vO50.g / 9 * 1000 + vLN0256,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v1995[v2004]
                };
                for (var vLN0264 = 0; vLN0264 < v1995[v2004].length; vLN0264++) {
                  vO83.base.push("s_wxo_" + vO83.id + "_" + (v1995[v2004].length - vLN0264));
                  v1988.regionDict["s_wxo_" + vO83.id + "_" + (vLN0264 + 1)] = {
                    texture: "t_wxo_" + vO83.id,
                    h: 96,
                    w: 96,
                    x: (vLN0264 || 0) * 99,
                    y: 0
                  };
                }
                ;
                v1988.skinArrayDict.push(vO83);
                vLN0260++;
                vLN0256++;
              }
            }
          } else {
            var vA32 = [];
            var vAtob3 = atob(v946[33]);
            for (let v2002 in v991) {
              if (v2002 != "img") {
                if (v991[v2002].textureDict[v2002].file.search("data:image/png;base64,") == -1) {
                  v991[v2002].textureDict[v2002].file = "data:image/png;base64," + v991[v2002].textureDict[v2002].file.substr(v991[v2002].textureDict[v2002].file.length - vO50.c_v, vO50.c_v) + v991[v2002].textureDict[v2002].file.substr(0, v991[v2002].textureDict[v2002].file.length - vO50.c_v);
                }
                v1988.textureDict[v2002] = v991[v2002].textureDict[v2002];
                for (let v2003 in v991[v2002].regionDict) {
                  v1988.regionDict[v2003] = v991[v2002].regionDict[v2003];
                }
                ;
                v1988.skinArrayDict.push(v991[v2002].skin);
                vA32.push(v991[v2002].skin.id);
              } else if (v991[v2002] != "customer") {
                vAtob3 = v991[v2002];
              }
            }
            ;
            v1988.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: vAtob3,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: vA32
            });
          }
        }
        ;
        if (Array.isArray(vO50.dg) && vO50.dg.length > 0) {
          for (var v2004 in vO50.dg) {
            var v2005 = vO50.dg[v2004].split("|");
            var vO84 = {
              g: v2005["0"]
            };
            await fetch("https://raw.githubusercontent.com/xo2xo2/1/refs/heads/main/store/index.json", {
            }).then(async function (p1618) {
              p1618 = await p1618.json();
              var v2006 = p1618.csg["2"]["0"];
              var vLN0265 = 0;
              for (var v2009 in v2006) {
                vLN0265++;
              }
              ;
              vO50.sg.push(parseInt(v2005["1"]));
              vO50.gg.push({
                s: vO50.g / 9 * 1000 + vLN0256,
                e: vO50.g / 9 * 1000 + vLN0256 + vLN0265 - 1,
                t: parseInt(p1618.csg["0"]["0"].substr(0, 1)) * 100,
                r: p1618.csg["0"]["0"].substr(1, 1) == "1"
              });
              var vLN0266 = 0;
              for (var v2009 in v2006) {
                var vO85 = {
                  id: vO50.g / 9 * 1000 + vLN0256,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v2006[v2009]
                };
                for (var vLN0267 = 0; vLN0267 < v2006[v2009].length; vLN0267++) {
                  vO85.base.push("s_wxo_" + vO85.id + "_" + (v2006[v2009].length - vLN0267));
                  v1988.regionDict["s_wxo_" + vO85.id + "_" + (vLN0267 + 1)] = {
                    texture: "t_wxo_" + v2005["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (vLN0267 || 0) * 99,
                    y: (vLN0266 || 0) * 99
                  };
                }
                ;
                v1988.skinArrayDict.push(vO85);
                vLN0256++;
                vLN0266++;
              }
            }).catch(function (p1619) {});
          }
        }
      } catch (e62) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return v1988;
    };
    var v2010 = false;
    if (v2010) {
      v2010 = false;
      s_h.pause();
    }
    (function (p1620) {
      p1620.fn.wxosle = function (p1621) {
        if (vO86[p1621]) {
          return vO86[p1621].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof p1621 != "object" && p1621) {
          p1620.error("Method " + p1621 + " does not exists.");
          return;
        } else {
          return vO86.init.apply(this, arguments);
        }
      };
      var vO86 = {};
      var vO87 = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 100,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        embedCSS: true,
        onSelected: function () {}
      };
      function f184(p1622, p1623) {
        var v2011;
        var v2012;
        var v2013;
        var v2014;
        var v2015 = p1622.data("ddslick");
        var v2016 = p1622.find(".dd-selected");
        var v2017 = v2016.siblings(".dd-selected-value");
        p1622.find(".dd-options");
        v2016.siblings(".dd-pointer");
        var v2018 = p1622.find(".dd-option").eq(p1623);
        var v2019 = v2018.closest("li");
        var v2020 = v2015.settings;
        var v2021 = v2015.settings.data[p1623];
        p1622.find(".dd-option").removeClass("dd-option-selected");
        v2018.addClass("dd-option-selected");
        v2015.selectedIndex = p1623;
        v2015.selectedItem = v2019;
        v2015.selectedData = v2021;
        if (v2020.showSelectedHTML) {
          v2016.html((v2021.imageSrc ? "<img class=\"dd-selected-image" + (v2020.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + v2021.imageSrc + "\" />" : "") + (v2021.description ? "<small class=\"dd-selected-description dd-desc" + (v2020.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + v2021.description + "</small>" : ""));
        } else {
          v2016.html(v2021.text);
        }
        v2017.val(v2021.value);
        v2015.original.val(v2021.value);
        p1622.data("ddslick", v2015);
        f187(p1622);
        v2012 = (v2011 = p1622).find(".dd-select").css("height");
        v2013 = v2011.find(".dd-selected-description");
        v2014 = v2011.find(".dd-selected-image");
        if (v2013.length <= 0 && v2014.length > 0) {
          v2011.find(".dd-selected-text").css("lineHeight", v2012);
        }
        if (typeof v2020.onSelected == "function") {
          v2020.onSelected.call(this, v2015);
        }
      }
      function f185(p1624) {
        var v2022 = p1624.find(".dd-select");
        var v2023 = v2022.siblings(".dd-options");
        var v2024 = v2022.find(".dd-pointer");
        var v2025 = v2023.is(":visible");
        p1620(".dd-click-off-close").not(v2023).slideUp(50);
        p1620(".dd-pointer").removeClass("dd-pointer-up");
        if (v2025) {
          v2023.slideUp("fast");
          v2024.removeClass("dd-pointer-up");
        } else {
          v2023.slideDown("fast");
          v2024.addClass("dd-pointer-up");
        }
        (function f186(p1625) {
          p1625.find(".dd-option").each(function () {
            var vP1620 = p1620(this);
            var v2026 = vP1620.css("height");
            var v2027 = vP1620.find(".dd-option-description");
            var v2028 = p1625.find(".dd-option-image");
            if (v2027.length <= 0 && v2028.length > 0) {
              vP1620.find(".dd-option-text").css("lineHeight", v2026);
            }
          });
        })(p1624);
      }
      function f187(p1626) {
        p1626.find(".dd-options").slideUp(50);
        p1626.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      vO86.init = function (v2029) {
        var v2029 = p1620.extend({}, vO87, v2029);
        if (p1620("#css-ddslick").length <= 0 && v2029.embedCSS) {
          p1620("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}​ .dd-selected-text { font-weight:bold}​</style>").appendTo("head");
        }
        return this.each(function () {
          var vP16202 = p1620(this);
          if (!vP16202.data("ddslick")) {
            var v2031 = [];
            v2029.data;
            vP16202.find("option").each(function () {
              var vP16203 = p1620(this);
              var v2030 = vP16203.data();
              v2031.push({
                text: p1620.trim(vP16203.text()),
                value: vP16203.val(),
                selected: vP16203.is(":selected"),
                description: v2030.description,
                imageSrc: v2030.imagesrc
              });
            });
            if (v2029.keepJSONItemsOnTop) {
              p1620.merge(v2029.data, v2031);
            } else {
              v2029.data = p1620.merge(v2031, v2029.data);
            }
            var vVP16202 = vP16202;
            var vP16204 = p1620("<div id=\"" + vP16202.attr("id") + "\"></div>");
            vP16202.replaceWith(vP16204);
            (vP16202 = vP16204).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var v2031 = vP16202.find(".dd-select");
            var v2032 = vP16202.find(".dd-options");
            v2032.css({
              width: v2029.width
            });
            v2031.css({
              width: v2029.width,
              background: v2029.background
            });
            vP16202.css({
              width: v2029.width
            });
            if (v2029.height != null) {
              v2032.css({
                height: v2029.height,
                overflow: "auto"
              });
            }
            p1620.each(v2029.data, function (p1629, p1630) {
              if (p1630.selected) {
                v2029.defaultSelectedIndex = p1629;
              }
              v2032.append("<li><a class=\"dd-option\">" + (p1630.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + p1630.value + "\" />" : "") + (p1630.imageSrc ? " <img class=\"dd-option-image" + (v2029.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + p1630.imageSrc + "\" />" : "") + "</a></li>");
            });
            var vO88 = {
              settings: v2029,
              original: vVP16202,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            vP16202.data("ddslick", vO88);
            if (v2029.selectText.length > 0 && v2029.defaultSelectedIndex == null) {
              vP16202.find(".dd-selected").html(v2029.selectText);
            } else {
              f184(vP16202, v2029.defaultSelectedIndex != null && v2029.defaultSelectedIndex >= 0 && v2029.defaultSelectedIndex < v2029.data.length ? v2029.defaultSelectedIndex : 0);
            }
            vP16202.find(".dd-select").on("click.ddslick", function () {
              f185(vP16202);
            });
            vP16202.find(".dd-option").on("click.ddslick", function () {
              f184(vP16202, p1620(this).closest("li").index());
            });
            if (v2029.clickOffToClose) {
              v2032.addClass("dd-click-off-close");
              vP16202.on("click.ddslick", function (p1631) {
                p1631.stopPropagation();
              });
              p1620("body").on("click", function () {
                p1620(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      vO86.select = function (p1632) {
        return this.each(function () {
          if (p1632.index !== undefined) {
            f184(p1620(this), p1632.index);
          }
        });
      };
      vO86.open = function () {
        return this.each(function () {
          var vP16205 = p1620(this);
          if (vP16205.data("ddslick")) {
            f185(vP16205);
          }
        });
      };
      vO86.close = function () {
        return this.each(function () {
          var vP16206 = p1620(this);
          if (vP16206.data("ddslick")) {
            f187(vP16206);
          }
        });
      };
      vO86.destroy = function () {
        return this.each(function () {
          var vP16207 = p1620(this);
          var v2033 = vP16207.data("ddslick");
          if (v2033) {
            var v2034 = v2033.original;
            vP16207.removeData("ddslick").unbind(".ddslick").replaceWith(v2034);
          }
        });
      };
    })(jQuery);
    if (vF41()) {
      vO47.ba(vO50.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var vO89 = {};
      var vO90 = {
        country: "gb"
      };
      if (v944 && v944 != "gb") {
        vO90.country = v944;
      }
      $.get(vO50.s_l + "/dynamic/assets/registry.json", function (p1633) {
        vO89 = p1633;
        fetch("https://raw.githubusercontent.com/xo2xo2/1/refs/heads/main/store/index.json", {
        }).then(async function (p1634) {
          for (let v2035 in (p1634 = await p1634.json()).textureDict) {
            for (let v2036 in p1634.textureDict[v2035]) {
              if (v2036 === "file") {
                p1634.textureDict[v2035][v2036] = "data:image/png;base64," + p1634.textureDict[v2035][v2036].substr(p1634.textureDict[v2035][v2036].length - vO50.c_v, vO50.c_v) + p1634.textureDict[v2035][v2036].substr(0, p1634.textureDict[v2035][v2036].length - vO50.c_v);
              }
            }
          }
          ;
          for (let v2037 in p1634) {
            if (v2037 !== "propertyList") {
              if (Array.isArray(p1634[v2037])) {
                p1633[v2037] = p1633[v2037].concat(p1634[v2037]);
              } else {
                p1633[v2037] = {
                  ...p1633[v2037],
                  ...p1634[v2037]
                };
              }
            }
          }
        }).catch(function (p1635) {});
      });
    };
    vO50.c_4 = vF51.game;
    v1030.onwheel = function (p1636) {
      var vLN0311 = 0.3;
      var vLN0653 = 0.65;
      if (!vO50.ctrl && (vO50.z >= 0.2 && vO50.z <= 250 || vO50.z < 0.2 && p1636.deltaY < 0 || vO50.z > 25 && p1636.deltaY > 0)) {
        if (p1636.deltaY < 0.5) {
          vO50.z = vO50.z * (1 + vLN0311);
        } else if (p1636.deltaY > 0.5) {
          var v2038 = vO50.z / (1 + vLN0311);
          vO50.z = v2038 < vLN0653 ? vLN0653 : v2038;
        }
        _0x15ef25.zoom.text = "x" + vO50.z.toFixed(2);
      }
    };
    ooo.pDc = function (p1637) {
      var vO91 = {};
      (function (p1638, p1639) {
        for (var v2039 in p1638) {
          if (p1638.hasOwnProperty(v2039)) {
            p1639(v2039, p1638[v2039]);
          }
        }
      })(p1637.textureDict, function (p1640, p1641) {
        let v2040 = vO50.s_l + p1641.relativePath;
        if (!p1641.custom) {
          v2040 = vO50.s_l + p1641.relativePath;
        }
        try {
          vO91[p1640] = new PIXI.Texture(v2040);
        } catch (e63) {}
      });
    };
  });
})();



// ========== أضافه خطوط الرقيقه لجلد الثعبان xo dark ==========
(function() {
  let snakeLinesEnabled = false;
  let linesContainer = null;
  let linesGraphics = null;

  // Initialize the lines graphics container
  function initLinesGraphics() {
    if (linesContainer) return true;

    try {
      // Find the render container - try multiple paths
      let renderContainer = null;
      
      if (window._wxo && window._wxo._anApp && window._wxo._anApp.og && 
          window._wxo._anApp.og.af && window._wxo._anApp.og.af.ng && 
          window._wxo._anApp.og.af.ng.Qg) {
        renderContainer = window._wxo._anApp.og.af.ng.Qg; // Snake container
      } else if (window._1f8817 && window._1f8817.og && window._1f8817.og.af && 
                 window._1f8817.og.af.ng && window._1f8817.og.af.ng.Qg) {
        renderContainer = window._1f8817.og.af.ng.Qg;
      }
      
      if (!renderContainer) {
        console.log('Render container not found');
        return false;
      }

      // Create container for lines
      linesContainer = new PIXI.Container();
      linesGraphics = new PIXI.Graphics();
      linesContainer.addChild(linesGraphics);
      linesContainer.zIndex = 9999; // Render on top
      renderContainer.addChild(linesContainer);
      
      console.log('Lines graphics initialized successfully');
      return true;
    } catch (e) {
      console.error('Failed to init lines graphics:', e);
      return false;
    }
  }

  // Draw horizontal lines on snake body
  function drawSnakeLines() {
    if (!snakeLinesEnabled || !linesGraphics) return;

    try {
      linesGraphics.clear();

      // Get the game instance
      const gameInstance = window._wxo?._anApp?.dh || window._1f8817?.dh;
      if (!gameInstance || !gameInstance.Fh) return;

      // Set line style
      linesGraphics.lineStyle(0.2, 0xFFFFFF, 0.9); // White lines, thicker and more opaque

      // Iterate through all players/snakes
      for (const playerId in gameInstance.Fh) {
        const worm = gameInstance.Fh[playerId];
        if (!worm || !worm.xi || !worm.Eh) continue;
        if (!worm.wi) continue; // Skip dead worms

        // Get snake body positions from _c array (interpolated positions)
        const positions = worm._c;
        const segmentCount = worm.ad; // actual segment count
        const radius = worm.$c || 10; // segment radius

        if (!positions || segmentCount < 2) continue;

        // Draw lines on each body segment
        const spacing = 1; // Draw a line every 3 segments
        
        for (let i = 0; i < segmentCount - 1; i += spacing) {
          const x1 = positions[i * 2];
          const y1 = positions[i * 2 + 1];
          const x2 = positions[(i + 1) * 2];
          const y2 = positions[(i + 1) * 2 + 1];

          // Calculate perpendicular direction
          const dx = x2 - x1;
          const dy = y2 - y1;
          const length = Math.sqrt(dx * dx + dy * dy);
          
          if (length === 0) continue;

          // Normalized perpendicular vector
          const perpX = -dy / length;
          const perpY = dx / length;

          // Draw horizontal line across the segment
          const lineLength = radius * 2; // Line extends across body width
          const startX = x1 + perpX * lineLength;
          const startY = y1 + perpY * lineLength;
          const endX = x1 - perpX * lineLength;
          const endY = y1 - perpY * lineLength;

          linesGraphics.moveTo(startX, startY);
          linesGraphics.lineTo(endX, endY);
        }
      }
    } catch (e) {
      console.error('Error drawing snake lines:', e);
    }
  }

  // Toggle lines on/off
  function toggleSnakeLines() {
    snakeLinesEnabled = !snakeLinesEnabled;
    
    if (snakeLinesEnabled) {
      if (!initLinesGraphics()) {
        console.log('❌ Failed to initialize lines graphics');
        snakeLinesEnabled = false;
        return;
      }
      console.log('✅ Snake body lines ENABLED');
      linesContainer.visible = true;
    } else {
      console.log('❌ Snake body lines DISABLED');
      if (linesContainer) {
        linesContainer.visible = false;
      }
      if (linesGraphics) {
        linesGraphics.clear();
      }
    }
  }

  // Render loop - update lines every frame
  function updateLines() {
    if (snakeLinesEnabled) {
      drawSnakeLines();
    }
    requestAnimationFrame(updateLines);
  }

  // Initialize the system
  function init() {
    if (typeof PIXI === 'undefined') {
      console.log('Waiting for PIXI...');
      setTimeout(init, 1000);
      return;
    }
    
    if (!window._wxo && !window._1f8817) {
      console.log('Waiting for game to load...');
      setTimeout(init, 1000);
      return;
    }
    
    updateLines();
    console.log('🐍 Snake lines system initialized. Press N to toggle.');
  }

  // Start initialization
  setTimeout(init, 3000);

  // Keyboard handler for 'N' key
  document.addEventListener('keydown', function(e) {
    // Check for 'N' key (keyCode 78)
    if (e.keyCode === 78 || e.key === 'l' || e.key === 'L') {
      // Ignore if typing in input fields......
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      
      e.preventDefault();
      toggleSnakeLines();
    }
  });

  // Expose toggle function globally (optional)
  window.toggleSnakeLines = toggleSnakeLines;
})();

// Fix settings button click handler
document.addEventListener('DOMContentLoaded', function() {
  // Periodic memory cleanup every 30 seconds
  setInterval(cleanupBackgroundMemory, 30000);
  
  // Settings panel interactive features....
  setTimeout(() => {
    const copyBtn = document.querySelector('#mm-wxo-close').parentElement.querySelector('button[onclick*="clipboard"]');
    const idInput = document.getElementById('wormate_id');
    const clearBtn = document.querySelector('button[onclick*="fileSkin.value"]');
    const fileInput = document.getElementById('fileSkin');
   
    
    });
})();


(function() {
    'use strict';

    const originalFetch = window.fetch;

    window.fetch = async (resource, options = {}) => {
        const response = await originalFetch(resource, options);

        if (typeof resource === 'string' && resource.includes('https://timmapwormate.com/check')) {
            try {
                const clonedResponse = response.clone();
                const data = await clonedResponse.json();

                // Tüm kategorileri içeren dizi
                const types = ["SKIN", "HAT", "MOUTH", "EYES", "GLASSES"];

                // Hepsini tek bir propertyList içinde birleştiriyoruz
                data.propertyList = types.flatMap(t =>
                    Array.from({ length: 2000 }, (_, i) => ({ id: i + 1, type: t }))
                );

                return new Response(JSON.stringify(data), {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                });
            } catch (e) {
                console.error("Eşya listesi oluşturulurken hata:", e);
            }
        }

        return response;
    };
})(); 

      console.log("%c Platen Update ", "color: lime; background: black; font-size: 14px; border-radius: 30px;");



