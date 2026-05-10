var GoogleAuth;
var zE;
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.2,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: false,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    if (window.laserGraphics?.parent) {
      this.state.renderContainer = window.laserGraphics.parent;
      return this.state.renderContainer;
    }
    if (window.ooo?.Mh?.Lh?.Wf) {
      this.state.renderContainer = window.ooo.Mh.Lh.Wf;
      return this.state.renderContainer;
    }
    const vF = (p, p2 = new Set(), p3 = 0) => {
      if (!p || typeof p !== "object" || p3 > 3 || p2.has(p)) {
        return null;
      }
      p2.add(p);
      if (p.Wf instanceof PIXI.Container) {
        this.state.renderContainer = p.Wf;
        return p.Wf;
      }
      for (let v in p) {
        if (v !== "parent" && v !== "children" && p[v] && typeof p[v] === "object") {
          const vVF = vF(p[v], p2, p3 + 1);
          if (vVF) {
            return vVF;
          }
        }
      }
      return null;
    };
    return vF(window.ooo);
  },
  cachedRadius: 0,
  lastRadiusTime: 0,
  getRadius: function () {
    const v2 = Date.now();
    if (v2 - this.lastRadiusTime > 1000) {
      this.cachedRadius = window.ooo?.Mh?.Qh?.gh || window.ooo?.Mh?.Lh?.Qh?.gh || 500;
      this.lastRadiusTime = v2;
    }
    return this.cachedRadius;
  },
  clearTexts: function () {
    this.state.texts.forEach(p4 => {
      if (p4 && p4.parent) {
        p4.parent.removeChild(p4);
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (p5) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, p5);
    this.state.graphics.endFill();
    return p5;
  },
  drawSectors: function () {
    const v3 = this.initDrawing(this.getRadius());
    const v4 = v3 / 3;
    if (this.settings.showLines) {
      for (let vLN1 = 1; vLN1 < 3; vLN1++) {
        this.state.graphics.drawCircle(0, 0, v3 - vLN1 * v4);
      }
      for (let vLN0 = 0; vLN0 < 4; vLN0++) {
        const v5 = vLN0 * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(v5) * v3, Math.sin(v5) * v3);
      }
    }
    for (let vLN02 = 0; vLN02 < 4; vLN02++) {
      const v6 = vLN02 * Math.PI / 2;
      for (let vLN03 = 0; vLN03 < 3; vLN03++) {
        const v7 = v3 - (vLN03 * v4 + v4 / 2);
        const v8 = v6 + Math.PI / 4;
        const v9 = ["S", "D", "F"][vLN03] + (vLN02 + 1);
        const v10 = new PIXI.Text(v9, this.settings.sectorTextStyle);
        v10.anchor.set(0.5);
        v10.position.set(Math.cos(v8) * v7, Math.sin(v8) * v7);
        this.state.container.addChild(v10);
        this.state.texts.push(v10);
      }
    }
  },
  drawQuarters: function () {
    const v11 = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-v11, 0);
      this.state.graphics.lineTo(v11, 0);
      this.state.graphics.moveTo(0, -v11);
      this.state.graphics.lineTo(0, v11);
    }
    [{
      n: "UP 1",
      x: 1,
      y: -1
    }, {
      n: "UP 2",
      x: -1,
      y: -1
    }, {
      n: "UP 3",
      x: -1,
      y: 1
    }, {
      n: "UP 4",
      x: 1,
      y: 1
    }].forEach(p6 => {
      const v12 = new PIXI.Text(p6.n, this.settings.quarterTextStyle);
      v12.anchor.set(0.5);
      v12.position.set(p6.x * v11 / 3, p6.y * v11 / 3);
      this.state.container.addChild(v12);
      this.state.texts.push(v12);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const v13 = this.findRenderContainer();
    if (!v13) {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.graphics = new PIXI.Graphics();
    this.state.container.addChild(this.state.graphics);
    v13.addChild(this.state.container);
    this.state.container.zIndex = 10;
    this.state.container.visible = false;
    this.state.initialized = true;
    return true;
  },
  toggleMode: function (p7) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === p7) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      if (document.getElementById("sector_system_toggle")) {
        document.getElementById("sector_system_toggle").checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = p7;
    this.state.container.visible = true;
    if (document.getElementById("sector_system_toggle")) {
      document.getElementById("sector_system_toggle").checked = true;
    }
    if (p7 === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const vO = {
      83: () => this.toggleMode("sectors"),
      187: () => this.toggleMode("sectors"),
      61: () => this.toggleMode("sectors"),
      88: () => this.toggleMode("quarters")
    };
    document.addEventListener("keydown", p8 => {
      const v14 = p8.keyCode || p8.which;
      if (vO[v14]) {
        vO[v14]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    });
  },
  saveSettings: function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? "1" : "0");
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
    } catch (e) {
      console.error("Error saving sector system settings:", e);
    }
  },
  loadSettings: function () {
    try {
      const v15 = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (v15) {
        this.settings = {
          ...this.settings,
          ...v15
        };
      }
      const v16 = localStorage.getItem("sectorSystemActive") === "1";
      let v17 = localStorage.getItem("sectorSystemMode");
      if (!v17) {
        v17 = "sectors";
      }
      this.savedState = {
        isActive: v16,
        currentMode: v17
      };
    } catch (e2) {
      console.error("Error loading sector system settings:", e2);
    }
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    const v18 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!v18) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById("sector_system_toggle").checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0) {
          this.initUserInterface();
        }
      }
    }, 1000);
  },
  initUserInterface: function () {
    function f(p9) {
      return "#" + p9.toString(16).padStart(6, "0");
    }
    function f2(p10) {
      return parseInt(p10.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      console.log("Restoring state from UI initialization");
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const vF2 = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $("#sector_display_mode").val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val(f(this.settings.backgroundColor));
      $("#sector_line_color").val(f(this.settings.lineColor));
      $("#sector_bg_opacity").val(this.settings.backgroundAlpha * 100);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      $("#sector_line_opacity").val(this.settings.lineAlpha * 100);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 100) + "%");
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(300);
      } else {
        $("#sector_settings_panel").slideUp(200);
      }
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const v19 = $(this).prop("checked");
      if (v19) {
        const v20 = $("#sector_display_mode").val() || "sectors";
        window.sectorSystem.toggleMode(v20);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      vF2();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const v21 = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(v21);
        vF2();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", function () {
      window.sectorSystem.settings.lineColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const v22 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.backgroundAlpha = v22;
      $("#sector_bg_opacity_value").text(Math.round(v22 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const v23 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.lineAlpha = v23;
      $("#sector_line_opacity_value").text(Math.round(v23 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    vF2();
  }
};
function _typeof(p11) {
  return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p12) {
    return typeof p12;
  } : function (p13) {
    if (p13 && typeof Symbol == "function" && p13.constructor === Symbol && p13 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p13;
    }
  })(p11);
}
(function () {
  var vO2 = {};
  var vO3 = {};
  var vO4 = {};
  var vO5 = {};
  vO4.a = function (p14) {
    var v24 = new String();
    var vParseInt = parseInt(p14.substring(0, 2), 16);
    for (var vLN2 = 2; vLN2 < p14.length; vLN2 += 2) {
      var vParseInt2 = parseInt(p14.substring(vLN2, vLN2 + 2), 16);
      v24 += String.fromCharCode(vParseInt2 ^ (vParseInt = 3793 + vParseInt * 4513 & 255));
    }
    ;
    return v24;
  };
  vO4.b = function (p15) {
    return Function("return " + p15 + "; ")();
  };
  vO2.c = vO4.b("window");
  vO2.d = vO2.c.document;
  vO4.e = function () {
    return vO2.c.devicePixelRatio || 1;
  };
  vO2.c.addEventListener("load", function () {
    let vO6 = {
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
    let vO7 = {
      s_l: "https://timmapwormate.com",
      showSkinLines: false,
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
      joystick: vO6.joystick,
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
    vO7.showSkinLines = false;
    let v25 = localStorage.getItem("tmwSaveGame");
    if (v25 && v25 !== "null") {
      let v26 = JSON.parse(v25);
      for (let v27 in v26) {
        vO7[v27] = v26[v27];
      }
    }
    ;
    let vF3 = function () {
      let v28 = false;
      vO7.mobile = false;
      var v29 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v29) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v29.substr(0, 4))) {
        v28 = true;
        vO7.mobile = true;
      }
      return v28;
    };
    let vF4 = function (p16) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.checked = p16.checked;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
    };
    let vF5 = function (p17) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.color = p17.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
    };
    let vF6 = function (p18) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.mode = p18.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
    };
    let vF7 = function (p19) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (p19.value === "R") {
        vO7.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      vO7.joystick.positionMode = p19.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
    };
    let vF8 = function (p20) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.position = {
        left: (parseInt(p20.value) + 10).toString() + "px",
        bottom: p20.value + "px"
      };
      if (vO7.joystick.positionMode === "R") {
        vO7.joystick.position = {
          right: (parseInt(p20.value) + 10).toString() + "px",
          bottom: p20.value + "px"
        };
      }
      vO7.joystick.pxy = p20.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
    };
    let vF9 = function (p21) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.size = p21.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
    };
    let vF10 = function (p22, p23, p24, p25, p26, p27) {
      let vO8 = {
        a: "",
        b: 0,
        c: ""
      };
      if (p22 > vO7.g * 100 + 100 || p22 < vO7.g * 10 || p22 === undefined) {
        vO7.a = p22;
        if (p22 === undefined) {
          vO7.a = Math.floor(Math.random() * (vO7.g / 9) + (vO7.g - vO7.g / 9));
        }
        vO8.a = "00";
      } else {
        vO7.a = p22 - vO7.g * 10;
        vO8.b = vO7.a;
        vO7.a = vO7.a % (vO7.g / 9);
        vO8.b = (vO8.b - vO7.a) / (vO7.g / 9) + 1;
        vO7.a = vO7.a + (vO7.g - vO7.g / 9);
        vO8.a = vO8.b.toString(vO7.g).padStart(2, 0);
      }
      if (p23 > vO7.g * 20 || p23 < vO7.g / 9 * 100 || p23 === undefined) {
        if (p23 > vO7.g * 20 && p23 < vO7.g * 30) {
          vO7.b = p23 - vO7.g * 20;
          vO8.a = vO8.a + vO7.b.toString(vO7.g);
          vO7.b = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.b = p23;
          if (p23 === undefined) {
            vO7.b = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
        }
      } else {
        vO7.b = p23 - vO7.g / 9 * 100 + vO7.g / vO7.g;
        vO8.a = vO8.a + vO7.b.toString(vO7.g);
        vO7.b = 0;
        vO8.c = vO8.c + "0";
      }
      if (p24 > vO7.g * 20 || p24 < vO7.g / 9 * 100 || p24 === undefined) {
        if (p24 > vO7.g * 20 && p24 < vO7.g * 30) {
          vO7.c = p24 - vO7.g * 20;
          vO8.a = vO8.a + vO7.c.toString(vO7.g);
          vO7.c = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.c = p24;
          if (p24 === undefined) {
            vO7.c = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
        }
      } else {
        vO7.c = p24 - vO7.g / 9 * 100 + vO7.g / vO7.g;
        vO8.a = vO8.a + vO7.c.toString(vO7.g);
        vO7.c = 0;
        vO8.c = vO8.c + "0";
      }
      if (p25 > vO7.g * 20 || p25 < vO7.g / 9 * 100 || p25 === undefined) {
        if (p25 > vO7.g * 20 && p25 < vO7.g * 30) {
          vO7.d = p25 - vO7.g * 20;
          if (vO7.d.toString(vO7.g) === "N") {
            vO8.a = vO8.a + "0";
          } else {
            vO8.a = vO8.a + vO7.d.toString(vO7.g);
          }
          vO7.d = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.d = p25;
          if (p25 === undefined) {
            vO7.d = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
        }
      } else {
        vO7.d = p25 - vO7.g / 9 * 100 + vO7.g / vO7.g;
        if (vO7.d.toString(vO7.g) === "N") {
          vO8.a = vO8.a + "0";
        } else {
          vO8.a = vO8.a + vO7.d.toString(vO7.g);
        }
        vO7.d = 0;
        vO8.c = vO8.c + "0";
      }
      if (p26 > vO7.g * 20 || p26 < vO7.g / 9 * 100 || p26 === undefined) {
        if (p26 > vO7.g * 20 && p26 < vO7.g * 30) {
          vO8.b = vO7.g / vO7.g;
          if (p26 <= vO7.g * 20 + (vO7.g - 1)) {
            vO7.e = p26 - vO7.g * 20;
          } else if (p26 <= vO7.g * 20 + (vO7.g - 1) * 2) {
            vO8.b = vO8.b * 2;
            vO7.e = p26 - vO7.g * 20 - (vO7.g - 1);
          } else if (p26 <= vO7.g * 20 + (vO7.g - 1) * 3) {
            vO7.e = p26 - vO7.g * 20 - (vO7.g - 1) * 2;
          } else if (p26 <= vO7.g * 20 + (vO7.g - 1) * 4) {
            vO8.b = vO8.b * 2;
            vO7.e = p26 - vO7.g * 20 - (vO7.g - 1) * 3;
          } else {
            vO7.e = 0;
          }
          if (vO7.e >= vO7.g) {
            vO8.b = 2;
            vO7.e = vO7.e - (vO7.g - 1);
          }
          vO8.a = vO8.a + vO7.e.toString(vO7.g);
          vO7.e = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.e = p26;
          if (p26 === undefined) {
            vO7.e = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
          vO8.b = 0;
        }
      } else {
        vO8.b = vO7.g / vO7.g;
        if (p26 - vO7.g / 9 * 100 + 1 >= vO7.g) {
          vO7.e = p26 - (vO7.g / 9 * 100 + (vO7.g - 1));
          vO8.b = vO8.b * 2;
        } else {
          vO7.e = p26 - vO7.g / 9 * 100 + vO8.b;
        }
        vO8.a = vO8.a + vO7.e.toString(vO7.g);
        vO7.e = 0;
        vO8.c = vO8.c + "0";
      }
      if (vO8.a == "000000") {
        vO7.f = p27.substr(0, 22).padEnd(22);
      } else {
        let vParseInt3 = parseInt(vO8.c, 2);
        if (p26 > 790 && p26 <= 860) {
          vParseInt3 += 16;
        }
        if (vO8.b <= 1) {
          vO8.a = vO8.a.substr(0, 5) + "|" + vO8.a.substr(5, 1);
        } else {
          vO8.a = vO8.a.substr(0, 4) + "|" + vO8.a.substr(4, 2);
        }
        if (p27 == "") {
          p27 = ".                       .";
        }
        if (vO8.c == "0000") {
          if (p27.substr(23, 1) == ".") {
            p27 = p27.substr(0, 23).padEnd(23) + " " + p27.substr(24, 1).padEnd(1);
          }
          vO7.f = (p27.length >= 32 ? p27.substr(0, 25) : p27.substr(0, 25).padEnd(25)) + vO8.a;
        } else {
          vO7.f = (p27.length >= 32 ? p27.substr(0, 23) : p27.substr(0, 23).padEnd(23)) + "." + vParseInt3.toString(vO7.g) + vO8.a;
        }
        vO7.f = vO7.f.replaceAll(" ", "_");
      }
    };
    let vF11 = function (p28) {
      let v30;
      try {
        vO7.joystick ||= vO6.joystick;
        if (vF3() && p28 && vO7.joystick.checked) {
          (v30 = nipplejs.create(vO7.joystick)).on("move", function (p29, p30) {
            vO6.eie.fo = p30.angle.radian <= Math.PI ? p30.angle.radian * -1 : Math.PI - (p30.angle.radian - Math.PI);
          });
        }
        return v30;
      } catch (e3) {
        console.error(e3);
      }
    };
    let vF12 = function (p31) {
      let vO9 = {
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
      let vLN04 = 0;
      vO9.h = p31.substr(-9);
      if (vO9.h.substr(0, 1) != ".") {
        vO9.i = "0000";
      } else if ((vLN04 = parseInt(vO9.h.substr(1, 1), vO7.g)) > 15) {
        vLN04 -= 16;
        vO9.i = vLN04.toString(2).padStart(4, 0);
      } else {
        vO9.i = vLN04.toString(2).padStart(4, 0);
        vLN04 = 0;
      }
      vO9.f = p31.substr(-7);
      if (vO9.f.substr(0, 2) != "00") {
        vO9.a = parseInt(vO9.f.substr(0, 2), vO7.g);
        vO9.a = (vO9.a - 1) * (vO7.g / 9) + vO7.g * 10 - (vO7.g - 4);
      }
      if (vO9.f.substr(5, 1) == "|") {
        if (vO9.f.substr(6, 1) != "0") {
          vO9.e = parseInt(vO9.f.substr(6, 1), vO7.g);
          if (vO9.i.substr(3, 1) != "0") {
            if (vLN04 > 0) {
              vO9.e = vO9.e + vO7.g * 20 + (vO7.g - 1) * 2;
            } else {
              vO9.e = vO9.e + vO7.g * 20;
            }
          } else {
            vO9.e = vO9.e - 1 + vO7.g / 9 * 100;
          }
        }
      } else {
        vO9.e = parseInt(vO9.f.substr(6, 1), vO7.g);
        if (vO9.i.substr(3, 1) != "0") {
          if (vLN04 > 0) {
            vO9.e = vO9.e + vO7.g * 20 + (vO7.g - 1) * 3;
          } else {
            vO9.e = vO9.e + vO7.g * 20 + (vO7.g - 1);
          }
        } else {
          vO9.e = vO9.e + (vO7.g / 9 * 100 + (vO7.g - 1));
        }
      }
      vO9.f = vO9.f.replace("|", "");
      if (vO9.f.substr(2, 1) != "0") {
        vO9.b = parseInt(vO9.f.substr(2, 1), vO7.g);
        if (vO9.i.substr(0, 1) != "0") {
          vO9.b = vO9.b + vO7.g * 20;
        } else {
          vO9.b = vO9.b - 1 + vO7.g / 9 * 100;
        }
      }
      if (vO9.f.substr(3, 1) != "0") {
        vO9.c = parseInt(vO9.f.substr(3, 1), vO7.g);
        if (vO9.i.substr(1, 1) != "0") {
          vO9.c = vO9.c + vO7.g * 20;
        } else {
          vO9.c = vO9.c - 1 + vO7.g / 9 * 100;
        }
      }
      if (vO9.f.substr(4, 1) != "0") {
        vO9.d = parseInt(vO9.f.substr(4, 1), vO7.g);
        if (vO9.i.substr(2, 1) != "0") {
          vO9.d = vO9.d + vO7.g * 20;
        } else {
          vO9.d = vO9.d - 1 + vO7.g / 9 * 100;
        }
      }
      return vO9;
    };
    let vF13 = function (p32) {
      return !(p32 > vO7.g * 30) && !(p32 < vO7.g / 9 * 100) || p32 == 0;
    };
    let vF14 = function (p33) {
      return /^(.{25})(\w{5}\|\w{1})$/.test(p33) || /^(.{25})(\w{4}\|\w{2})$/.test(p33);
    };
    let vF15 = function (p34) {
      p34 = p34.replaceAll("_", " ");
      if (/^(.{25})(\w{7})$/.test(p34)) {
        for (p34 = p34.substr(0, 15).trim(); p34.substr(p34.length - 1, 1) == ".";) {
          p34 = p34.substr(0, p34.length - 1);
        }
        return p34;
      }
      if (/^(.{25})(\w{5}\|\w{1})$/.test(p34) || /^(.{25})(\w{4}\|\w{2})$/.test(p34)) {
        if (p34.substr(-9).substr(0, 1) != ".") {
          return p34.substr(0, 25).trim();
        } else {
          return p34.substr(0, 23).trim();
        }
      } else {
        return p34;
      }
    };
    vO7.loading = true;
    var v31 = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var v32 = localStorage.getItem("tmwsw");
    var v33 = localStorage.getItem("tmwi") != null ? localStorage.getItem("tmwi").split(",") : localStorage.getItem("tmwi");
    var v34 = localStorage.getItem("tmwit");
    var v35 = localStorage.getItem("custom_wear");
    var v36 = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    var v37 = null;
    var v38 = null;
    var v39 = false;
    var vLN55 = 55;
    var vLN12 = 1;
    var v40 = true;
    if (v33 && v34 && v34 == vO7.v_z) ;else {
      fetch(vO7.s_l + "/store", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          img: "i2"
        })
      }).then(async function (p35) {
        v33 = (p35 = await p35.json()).i.split(".");
        localStorage.setItem("tmwi", v33);
        localStorage.setItem("tmwit", p35.vs);
        vO7.v_z = p35.vs;
        localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
        window.location.reload();
      }).catch(function (p36) {});
    }
    ;
    var v41 = PIXI.Texture.from(atob(v33[0]));
    var v42 = PIXI.Texture.from(atob(v33[1]));
    var v43 = PIXI.Texture.from(atob(v33[2]));
    var v44 = PIXI.Texture.from(atob(v33[3]));
    var v45 = PIXI.Texture.from(atob(v33[4]));
    var v46 = PIXI.Texture.from(atob(v33[5]));
    var v47 = PIXI.Texture.from(atob(v33[6]));
    var v48 = PIXI.Texture.from(atob(v33[7]));
    var v49 = new PIXI.Sprite(v41);
    v49.buttonMode = true;
    v49.anchor.set(0.5);
    v49.x = -65;
    v49.y = 25;
    v49.interactive = true;
    v49.buttonMode = true;
    var v50 = new PIXI.Sprite(v43);
    v50.buttonMode = true;
    v50.anchor.set(0.5);
    v50.x = -33;
    v50.y = 25;
    v50.interactive = true;
    v50.buttonMode = true;
    var v51 = new PIXI.Sprite(v45);
    v51.buttonMode = true;
    v51.anchor.set(0.5);
    v51.x = -1;
    v51.y = 25;
    v51.interactive = true;
    v51.buttonMode = true;
    var v52 = new PIXI.Sprite(v48);
    v52.buttonMode = true;
    v52.anchor.set(0.5);
    v52.x = -1;
    v52.y = 25;
    v52.interactive = true;
    v52.buttonMode = true;
    var v53 = new PIXI.Sprite(v47);
    v53.buttonMode = true;
    v53.anchor.set(0.5);
    v53.x = -33;
    v53.y = 25;
    v53.interactive = true;
    v53.buttonMode = true;
    v50.alpha = 0.25;
    v49.alpha = 0.25;
    v51.alpha = 0.25;
    v53.alpha = 0.25;
    v52.alpha = 0.25;
    var v54 = new PIXI.Text("Map: ?", {
      fontFamily: "PTSans",
      fill: "#fff009",
      fontSize: 12
    });
    v54.anchor.x = 0.5;
    v54.position.x = 110;
    var v55 = document.getElementById("game-cont");
    var v56 = document.getElementById("game-view");
    var v$ = $("#mm-params-game-mode");
    vO2.d.getElementById("game-wrap").style.display = "block";
    (function (p37, p38, p39) {
      function f3(p40, p41) {
        return _typeof(p40) === p41;
      }
      function f4() {
        if (_typeof(p38.createElement) != "function") {
          return p38.createElement(arguments[0]);
        } else if (v59) {
          return p38.createElementNS.call(p38, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p38.createElement.apply(p38, arguments);
        }
      }
      var vA = [];
      var vA2 = [];
      var vO10 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p42, p43) {
          var vThis = this;
          setTimeout(function () {
            p43(vThis[p42]);
          }, 0);
        },
        addTest: function (p44, p45, p46) {
          vA2.push({
            name: p44,
            fn: p45,
            options: p46
          });
        },
        addAsyncTest: function (p47) {
          vA2.push({
            name: null,
            fn: p47
          });
        }
      };
      function f5() {}
      f5.prototype = vO10;
      f5 = new f5();
      var v57 = false;
      try {
        v57 = "WebSocket" in p37 && p37.WebSocket.CLOSING === 2;
      } catch (e4) {}
      ;
      f5.addTest("websockets", v57);
      var v58 = p38.documentElement;
      var v59 = v58.nodeName.toLowerCase() === "svg";
      f5.addTest("canvas", function () {
        var vF42 = f4("canvas");
        return !!vF42.getContext && !!vF42.getContext("2d");
      });
      f5.addTest("canvastext", function () {
        return f5.canvas !== false && _typeof(f4("canvas").getContext("2d").fillText) == "function";
      });
      (function () {
        var v60;
        var v61;
        var v62;
        var v63;
        var v64;
        var v65;
        var v66;
        for (var v67 in vA2) {
          if (vA2.hasOwnProperty(v67)) {
            v60 = [];
            if ((v61 = vA2[v67]).name && (v60.push(v61.name.toLowerCase()), v61.options && v61.options.aliases && v61.options.aliases.length)) {
              for (v62 = 0; v62 < v61.options.aliases.length; v62++) {
                v60.push(v61.options.aliases[v62].toLowerCase());
              }
            }
            ;
            v63 = f3(v61.fn, "function") ? v61.fn() : v61.fn;
            v64 = 0;
            for (; v64 < v60.length; v64++) {
              if ((v66 = (v65 = v60[v64]).split(".")).length === 1) {
                f5[v66[0]] = v63;
              } else {
                if (!!f5[v66[0]] && !(f5[v66[0]] instanceof Boolean)) {
                  f5[v66[0]] = new Boolean(f5[v66[0]]);
                }
                f5[v66[0]][v66[1]] = v63;
              }
              vA.push((v63 ? "" : "no-") + v66.join("-"));
            }
          }
        }
      })();
      (function (p48) {
        var v68 = v58.className;
        var v69 = f5._config.classPrefix || "";
        if (v59) {
          v68 = v68.baseVal;
        }
        if (f5._config.enableJSClass) {
          var vRegExp = RegExp("(^|\\s)" + v69 + "no-js(\\s|$)");
          v68 = v68.replace(vRegExp, "$1" + v69 + "js$2");
        }
        ;
        if (f5._config.enableClasses) {
          v68 += " " + v69 + p48.join(" " + v69);
          if (v59) {
            v58.className.baseVal = v68;
          } else {
            v58.className = v68;
          }
        }
      })(vA);
      delete vO10.addTest;
      delete vO10.addAsyncTest;
      for (var vLN05 = 0; vLN05 < f5._q.length; vLN05++) {
        f5._q[vLN05]();
      }
      ;
      p37.Modernizr = f5;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      vO2.d.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    vO5.f = {
      g: function (p49, p50, p51) {
        p49.stop();
        p49.fadeIn(p50, p51);
      },
      h: function (p52, p53, p54) {
        p52.stop();
        p52.fadeOut(p53, p54);
      }
    };
    vO5.i = vO4.b("WebSocket");
    vO5.j = vO4.b("Float32Array");
    v635 = (v634 = vO4.b("PIXI")).BLEND_MODES;
    v636 = v634.WRAP_MODES;
    vO5.k = {
      l: v634.Container,
      m: v634.BaseTexture,
      n: v634.Texture,
      o: v634.Renderer,
      p: v634.Graphics,
      q: v634.Shader,
      r: v634.Rectangle,
      s: v634.Sprite,
      t: v634.Text,
      u: v634.Geometry,
      v: v634.Mesh,
      w: {
        z: v635.ADD,
        A: v635.SCREEN,
        B: v635.MULTIPLY
      },
      C: {
        D: v636.REPEAT
      },
      F: {
        G: function (p55) {
          var v70 = p55.parent;
          if (v70 != null) {
            v70.removeChild(p55);
          }
        }
      }
    };
    vO3.H = {
      I: vO2.c.runtimeHash,
      J: "https://gateway.wormate.io",
      K: "https://resources.wormate.io",
      L: "/images/linelogo-valday2024.png",
      M: "/images/guest-avatar-valday2024.png",
      N: "/images/confetti-valday2024.png",
      O: "/images/bg-event-pattern-valday2025.png"
    };
    vO3.H.P = ((browserLang = vO2.c.I18N_LANG) || (browserLang = "en"), browserLang);
    vO3.H.Q = function () {
      var v71;
      switch (vO3.H.P) {
        case "uk":
          v71 = "uk_UA";
          break;
        case "de":
          v71 = "de_DE";
          break;
        case "fr":
          v71 = "fr_FR";
          break;
        case "es":
          v71 = "es_ES";
          break;
        default:
          v71 = "en_US";
      }
      ;
      return v71;
    }();
    moment.locale(vO3.H.Q);
    ooo = null;
    vO3.S = 6.283185307179586;
    vO3.T = 3.141592653589793;
    v638 = vO2.c.I18N_MESSAGES;
    vO4.U = function (p56) {
      return v638[p56];
    };
    vO4.V = function (p57) {
      if (p57[vO3.H.P]) {
        return p57[vO3.H.P];
      } else if (p57.en) {
        return p57.en;
      } else {
        return p57.x;
      }
    };
    vO4.W = function (p58) {
      return encodeURI(p58);
    };
    vO4.X = function (p59, p60) {
      return setInterval(p59, p60);
    };
    vO4.Y = function (p61, p62) {
      return setTimeout(p61, p62);
    };
    vO4.Z = function (p63) {
      clearTimeout(p63);
    };
    vO4.$ = function (p64) {
      var v72 = (vO4._(p64) % 60).toString();
      var v73 = (vO4._(p64 / 60) % 60).toString();
      var v74 = (vO4._(p64 / 3600) % 24).toString();
      var v75 = vO4._(p64 / 86400).toString();
      var v76 = vO4.U("util.time.days");
      var v77 = vO4.U("util.time.hours");
      var v78 = vO4.U("util.time.min");
      var v79 = vO4.U("util.time.sec");
      if (v75 > 0) {
        return v75 + " " + v76 + " " + v74 + " " + v77 + " " + v73 + " " + v78 + " " + v72 + " " + v79;
      } else if (v74 > 0) {
        return v74 + " " + v77 + " " + v73 + " " + v78 + " " + v72 + " " + v79;
      } else if (v73 > 0) {
        return v73 + " " + v78 + " " + v72 + " " + v79;
      } else {
        return v72 + " " + v79;
      }
    };
    vO4.aa = function (p65) {
      if (p65.includes("href")) {
        return p65.replaceAll("href", "target=\"_black\" href");
      } else {
        return p65;
      }
    };
    vO4.ba = function (p66, p67, p68) {
      var v80 = vO2.d.createElement("script");
      var v81 = true;
      if (_typeof(p67) !== "undefined" && p67 !== null) {
        if (_typeof(p67.id) !== "undefined") {
          v80.id = p67.id;
        }
        if (_typeof(p67.async) !== "undefined" && p67.async) {
          v80.async = "async";
        }
        if (_typeof(p67.defer) !== "undefined" && p67.defer) {
          v80.defer = "defer";
        }
        if (_typeof(p67.crossorigin) !== "undefined") {
          v80.crossorigin = p67.crossorigin;
        }
      }
      v80.type = "text/javascript";
      v80.src = p66;
      if (p68) {
        v80.onload = v80.onreadystatechange = function () {
          v81 = false;
          try {
            p68();
          } catch (e5) {}
          ;
          v80.onload = v80.onreadystatechange = null;
        };
      }
      (vO2.d.head || vO2.d.getElementsByTagName("head")[0]).appendChild(v80);
    };
    vO4.ca = function (p69, p70) {
      var vP70 = p70;
      vP70.prototype = Object.create(p69.prototype);
      vP70.prototype.constructor = vP70;
      vP70.parent = p69;
      return vP70;
    };
    vO4.da = function (p71) {
      if ((p71 %= vO3.S) < 0) {
        return p71 + vO3.S;
      } else {
        return p71;
      }
    };
    vO4.ea = function (p72, p73, p74) {
      return vO4.fa(p74, p72, p73);
    };
    vO4.fa = function (p75, p76, p77) {
      if (p75 > p77) {
        return p77;
      } else if (p75 < p76) {
        return p76;
      } else if (Number.isFinite(p75)) {
        return p75;
      } else {
        return (p76 + p77) * 0.5;
      }
    };
    vO4.ga = function (p78, p79, p80, p81) {
      if (p79 > p78) {
        return vO4.ha(p79, p78 + p80 * p81);
      } else {
        return vO4.ia(p79, p78 - p80 * p81);
      }
    };
    vO4.ja = function (p82, p83, p84, p85, p86) {
      return p83 + (p82 - p83) * Math.pow(1 - p85, p84 / p86);
    };
    vO4.ka = function (p87, p88, p89) {
      return p87 - (p87 - p88) * p89;
    };
    vO4.la = function (p90, p91) {
      return Math.sqrt(p90 * p90 + p91 * p91);
    };
    vO4.ma = function () {
      return Math.random();
    };
    vO4._ = function (p92) {
      return Math.floor(p92);
    };
    vO4.na = function (p93) {
      return Math.abs(p93);
    };
    vO4.ha = function (p94, p95) {
      return Math.min(p94, p95);
    };
    vO4.ia = function (p96, p97) {
      return Math.max(p96, p97);
    };
    vO4.oa = function (p98) {
      return Math.sin(p98);
    };
    vO4.pa = function (p99) {
      return Math.cos(p99);
    };
    vO4.qa = function (p100) {
      return Math.sqrt(p100);
    };
    vO4.ra = function (p101, p102) {
      return Math.pow(p101, p102);
    };
    vO4.sa = function (p103) {
      return Math.atan(p103);
    };
    vO4.ta = function (p104, p105) {
      return Math.atan2(p104, p105);
    };
    vO4.ua = function (p106, p107, p108, p109) {
      var v82 = p107 + p109;
      if (p106 == null) {
        throw TypeError();
      }
      ;
      var v83 = p106.length >>> 0;
      var v84 = p108 >> 0;
      var v85 = v84 < 0 ? Math.max(v83 + v84, 0) : Math.min(v84, v83);
      var v86 = p107 >> 0;
      var v87 = v86 < 0 ? Math.max(v83 + v86, 0) : Math.min(v86, v83);
      var v88 = v82 === undefined ? v83 : v82 >> 0;
      var v89 = Math.min((v88 < 0 ? Math.max(v83 + v88, 0) : Math.min(v88, v83)) - v87, v83 - v85);
      var vLN13 = 1;
      for (v87 < v85 && v85 < v87 + v89 && (vLN13 = -1, v87 += v89 - 1, v85 += v89 - 1); v89 > 0;) {
        if (v87 in p106) {
          p106[v85] = p106[v87];
        } else {
          delete p106[v85];
        }
        v87 += vLN13;
        v85 += vLN13;
        v89--;
      }
      ;
      return p106;
    };
    vO4.va = function (p110, p111) {
      return p110 + (p111 - p110) * vO4.ma();
    };
    vO4.wa = function (p112) {
      return p112[parseInt(vO4.ma() * p112.length)];
    };
    v639 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map(function (p113) {
      return p113.charCodeAt(0);
    });
    vO4.xa = function (p114) {
      if (_typeof(p114) == "undefined") {
        p114 = 16;
      }
      var vLS = "";
      for (var vLN06 = 0; vLN06 < p114; vLN06++) {
        vLS += String.fromCharCode(v639[vO4._(vO4.ma() * v639.length)]);
      }
      ;
      return vLS;
    };
    vO4.ya = function (p115, p116, p117) {
      var v90 = p117 * (1 - p116 * 0.5);
      var v91 = Math.min(v90, 1 - v90);
      return vO4.za(p115, v91 ? (p117 - v90) / v91 : 0, v90);
    };
    vO4.za = function (p118, p119, p120) {
      var v92 = (1 - vO4.na(p120 * 2 - 1)) * p119;
      var v93 = v92 * (1 - vO4.na(p118 / 60 % 2 - 1));
      var v94 = p120 - v92 / 2;
      if (p118 >= 0 && p118 < 60) {
        return [v94 + v92, v94 + v93, v94];
      } else if (p118 >= 60 && p118 < 120) {
        return [v94 + v93, v94 + v92, v94];
      } else if (p118 >= 120 && p118 < 180) {
        return [v94, v94 + v92, v94 + v93];
      } else if (p118 >= 180 && p118 < 240) {
        return [v94, v94 + v93, v94 + v92];
      } else if (p118 >= 240 && p118 < 300) {
        return [v94 + v93, v94, v94 + v92];
      } else {
        return [v94 + v92, v94, v94 + v93];
      }
    };
    vO4.Aa = function (p121, p122, p123) {
      $.get(p121).fail(p122).done(p123);
    };
    vO4.Ba = function (p124, p125, p126, p127) {
      var vO11 = {
        type: "GET",
        url: p124
      };
      var vO12 = {
        responseType: "arraybuffer"
      };
      vO12.onprogress = function (p128) {
        if (p128.lengthComputable) {
          p127(p128.loaded / p128.total * 100);
        }
      };
      vO11.xhrFields = vO12;
      $.ajax(vO11).fail(p125).done(p126);
    };
    vO4.Ca = function () {
      return Date.now();
    };
    vO4.Da = function (p129, p130) {
      for (var v95 in p129) {
        if (p129.hasOwnProperty(v95)) {
          p130(v95, p129[v95]);
        }
      }
    };
    vO4.Ea = function (p131) {
      for (var v96 = p131.length - 1; v96 > 0; v96--) {
        var v97 = vO4._(vO4.ma() * (v96 + 1));
        var v98 = p131[v96];
        p131[v96] = p131[v97];
        p131[v97] = v98;
      }
      ;
      return p131;
    };
    vO2.Fa = vO4.b("ArrayBuffer");
    vO2.Ga = vO4.b("DataView");
    vO2.Ha = function () {
      function f6(p132) {
        this.Ia = p132;
        this.Ja = 0;
      }
      var vLSGetInt8 = "getInt8";
      f6.prototype.Ka = function () {
        var v99 = this.Ia[vLSGetInt8](this.Ja);
        this.Ja += 1;
        return v99;
      };
      var vLSGetInt16 = "getInt16";
      f6.prototype.La = function () {
        var v100 = this.Ia[vLSGetInt16](this.Ja);
        this.Ja += 2;
        return v100;
      };
      var vLSGetInt32 = "getInt32";
      f6.prototype.Ma = function () {
        var v101 = this.Ia[vLSGetInt32](this.Ja);
        this.Ja += 4;
        return v101;
      };
      var vLSGetFloat32 = "getFloat32";
      f6.prototype.Na = function () {
        var v102 = this.Ia[vLSGetFloat32](this.Ja);
        this.Ja += 4;
        return v102;
      };
      return f6;
    }();
    vO2.Oa = function () {
      function f7(p133) {
        this.Ia = p133;
        this.Ja = 0;
      }
      var vLSSetInt8 = "setInt8";
      f7.prototype.Pa = function (p134) {
        this.Ia[vLSSetInt8](this.Ja, p134);
        this.Ja += 1;
      };
      var vLSSetInt16 = "setInt16";
      f7.prototype.Qa = function (p135) {
        this.Ia[vLSSetInt16](this.Ja, p135);
        this.Ja += 2;
      };
      return f7;
    }();
    vO4.Ra = function () {
      var v103 = false;
      function f8() {}
      var vO13 = {};
      var vLS1eaom01c3pxu9wd3 = "1eaom01c3pxu9wd3";
      var v$2 = $("#" + vLS1eaom01c3pxu9wd3);
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      var v$3 = $("#" + vLSJDHnkHtYwyXyVgG9);
      $("#adbl-continue").click(function () {
        v$3.fadeOut(500);
        f8(false);
      });
      vO13.Sa = function (p136) {
        f8 = p136;
        if (!v103) {
          try {
            aiptag.cmd.player.push(function () {
              var vO14 = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false
              };
              vO14.LOADING_TEXT = "loading advertisement";
              vO14.PREROLL_ELEM = function () {
                return vO2.d.getElementById(vLS1eaom01c3pxu9wd3);
              };
              vO14.AIP_COMPLETE = function (p137) {
                f8(true);
                vO5.f.h(v$2, 1);
                vO5.f.h(v$3, 1);
                try {
                  ga("send", "event", "preroll", vO3.H.I + "_complete");
                } catch (e6) {}
              };
              vO14.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(vO14);
            });
            v103 = true;
          } catch (e7) {}
        }
      };
      vO13.Ta = function () {
        if (_typeof(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", vO3.H.I + "_request");
          } catch (e8) {}
          ;
          vO5.f.g(v$2, 1);
          if (!vO6.on) {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer.startPreRoll();
            });
          }
        } else {
          try {
            ga("send", "event", "antiadblocker", vO3.H.I + "_start");
          } catch (e9) {}
          ;
          (function f9() {
            $("#adbl-1").text(vO4.U("index.game.antiadblocker.msg1"));
            $("#adbl-2").text(vO4.U("index.game.antiadblocker.msg2"));
            $("#adbl-3").text(vO4.U("index.game.antiadblocker.msg3"));
            $("#adbl-4").text(vO4.U("index.game.antiadblocker.msg4").replace("{0}", 10));
            $("#adbl-continue span").text(vO4.U("index.game.antiadblocker.continue"));
            vO5.f.h($("#adbl-continue"), 1);
            vO5.f.g(v$3, 500);
            var vLN10 = 10;
            for (var vLN07 = 0; vLN07 < 10; vLN07++) {
              vO4.Y(function () {
                vLN10--;
                $("#adbl-4").text(vO4.U("index.game.antiadblocker.msg4").replace("{0}", vLN10));
                if (vLN10 === 0) {
                  try {
                    ga("send", "event", "antiadblocker", vO3.H.I + "_complete");
                  } catch (e10) {}
                  ;
                  vO5.f.g($("#adbl-continue"), 200);
                }
              }, (vLN07 + 1) * 1000);
            }
          })();
        }
      };
      return vO13;
    };
    vO4.Ua = function (p138, p139) {
      var v$4 = $("#" + p138);
      var vP139 = p139;
      var vO15 = {};
      var v104 = false;
      vO15.Sa = function () {
        if (!v104) {
          v$4.empty();
          v$4.append("<div id='" + vP139 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", vO3.H.I + "_display");
            } catch (e11) {}
            ;
            if (!vO6.on) {
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(vP139);
              });
            }
            v104 = true;
          } catch (e12) {}
        }
      };
      vO15.Va = function () {
        try {
          try {
            ga("send", "event", "banner", vO3.H.I + "_refresh");
          } catch (e13) {}
          ;
          if (!vO6.on) {
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP139);
            });
          }
        } catch (e14) {}
      };
      return vO15;
    };
    vO2.Wa = function () {
      function f10(p140, p141, p142, p143, p144, p145, p146, p147, p148, p149) {
        this.Xa = p140;
        this.Ya = p141;
        this.Za = null;
        this.$a = false;
        this._a = p142;
        this.ab = p143;
        this.bb = p144;
        this.cb = p145;
        this.db = p146 || (p148 || p144) / 2;
        this.eb = p147 || (p149 || p145) / 2;
        this.fb = p148 || p144;
        this.gb = p149 || p145;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      f10.lb = function () {
        return new f10("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      f10.mb = function (p150, p151, p152) {
        return new f10(p150, p151, p152.x, p152.y, p152.w, p152.h, p152.px, p152.py, p152.pw, p152.ph);
      };
      f10.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new vO5.k.n(this.Ya, new vO5.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      f10.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return f10;
    }();
    vO2.pb = function () {
      function f11(p153, p154, p155, p156, p157, p158, p159, p160, p161, p162, p163, p164, p165, p166, p167, p168, p169, p170) {
        this.qb = p153;
        this.rb = p154;
        this.sb = p155;
        this.tb = p156;
        this.ub = p157;
        this.vb = p158;
        this.wb = p159;
        this.xb = p160;
        this.yb = p161;
        this.zb = p162;
        this.Ab = p163;
        this.Bb = p164;
        this.Cb = p165;
        this.Db = p166;
        this.Eb = p167;
        this.Fb = p168;
        this.Gb = p169;
        this.Hb = p170;
      }
      f11.prototype.ob = function () {
        for (var vLN08 = 0; vLN08 < this.qb.length; vLN08++) {
          this.qb[vLN08].dispose();
          this.qb[vLN08].destroy();
        }
        ;
        this.qb = [];
        for (var vLN09 = 0; vLN09 < this.rb.length; vLN09++) {
          this.rb[vLN09].ob();
        }
        ;
        this.rb = [];
      };
      f11.lb = function () {
        var v105 = new f11.Ib(vO2.Kb.Jb, vO2.Kb.Jb);
        var v106 = new f11.Lb("#ffffff", [vO2.Kb.Jb], [vO2.Kb.Jb]);
        return new f11([], [], {}, v105, {}, new f11.Mb(vO2.Kb.Jb), {}, v106, {}, new f11.Nb("", v106, v105), {}, new f11.Ob([vO2.Kb.Jb]), {}, new f11.Ob([vO2.Kb.Jb]), {}, new f11.Ob([vO2.Kb.Jb]), {}, new f11.Ob([vO2.Kb.Jb]));
      };
      f11.Pb = function (p171, p172, p173, p174) {
        var v107 = new f11.Ib(vO2.Kb.Jb, vO2.Kb.Jb);
        var v108 = new f11.Lb("#ffffff", [p171], [p172]);
        return new f11([], [], {}, v107, {}, new f11.Mb(vO2.Kb.Jb), {}, v108, {}, new f11.Nb("", v108, v107), {}, new f11.Ob([p173]), {}, new f11.Ob([p174]), {}, new f11.Ob([vO2.Kb.Jb]), {}, new f11.Ob([vO2.Kb.Jb]));
      };
      f11.Qb = function (p175, p176, p177, p178) {
        var vO16 = {};
        vO4.Da(p175.colorDict, function (p179, p180) {
          vO16[p179] = "#" + p180;
        });
        var vO17 = {};
        for (var vLN010 = 0; vLN010 < p175.skinArrayDict.length; vLN010++) {
          var v109 = p175.skinArrayDict[vLN010];
          vO17[v109.id] = new f11.Lb(vO16[v109.prime], v109.base.map(function (p181) {
            return p176[p181];
          }), v109.glow.map(function (p182) {
            return p176[p182];
          }));
        }
        ;
        var v110;
        var v111 = p175.skinUnknown;
        v110 = new f11.Lb(vO16[v111.prime], v111.base.map(function (p183) {
          return p176[p183];
        }), v111.glow.map(function (p184) {
          return p176[p184];
        }));
        var vO18 = {};
        vO4.Da(p175.eyesDict, function (p185, p186) {
          vO18[parseInt(p185)] = new f11.Ob(p186.base.map(function (p187) {
            return p176[p187.region];
          }));
        });
        var v112 = new f11.Ob(p175.eyesUnknown.base.map(function (p188) {
          return p176[p188.region];
        }));
        var vO19 = {};
        vO4.Da(p175.mouthDict, function (p189, p190) {
          vO19[parseInt(p189)] = new f11.Ob(p190.base.map(function (p191) {
            return p176[p191.region];
          }));
        });
        var v113 = new f11.Ob(p175.mouthUnknown.base.map(function (p192) {
          return p176[p192.region];
        }));
        var vO20 = {};
        vO4.Da(p175.hatDict, function (p193, p194) {
          vO20[parseInt(p193)] = new f11.Ob(p194.base.map(function (p195) {
            return p176[p195.region];
          }));
        });
        var v114 = new f11.Ob(p175.hatUnknown.base.map(function (p196) {
          return p176[p196.region];
        }));
        var vO21 = {};
        vO4.Da(p175.glassesDict, function (p197, p198) {
          vO21[parseInt(p197)] = new f11.Ob(p198.base.map(function (p199) {
            return p176[p199.region];
          }));
        });
        var v115 = new f11.Ob(p175.glassesUnknown.base.map(function (p200) {
          return p176[p200.region];
        }));
        var vO22 = {};
        vO4.Da(p175.portionDict, function (p201, p202) {
          vO22[p201 = parseInt(p201)] = new f11.Ib(p176[p202.base], p176[p202.glow]);
        });
        var v116;
        var v117 = p175.portionUnknown;
        v116 = new f11.Ib(p176[v117.base], p176[v117.glow]);
        var vO23 = {};
        vO4.Da(p175.abilityDict, function (p203, p204) {
          vO23[p203 = parseInt(p203)] = new f11.Mb(p176[p204.base]);
        });
        var v118;
        var v119 = p175.abilityUnknown;
        v118 = new f11.Mb(p176[v119.base]);
        var vO24 = {};
        vO4.Da(p175.teamDict, function (p205, p206) {
          vO24[p205 = parseInt(p205)] = new f11.Nb(p206.title, new f11.Lb(vO16[p206.skin.prime], null, p206.skin.glow.map(function (p207) {
            return p176[p207];
          })), new f11.Ib(null, p176[p206.portion.glow]));
        });
        var v120 = new f11.Nb({}, v110, v116);
        return new f11(p177, p178, vO22, v116, vO23, v118, vO17, v110, vO24, v120, vO18, v112, vO19, v113, vO20, v114, vO21, v115);
      };
      f11.prototype.Rb = function (p208) {
        var v121 = vO4.Ea(Object.keys(this.wb)).slice(0, p208);
        var v122 = vO4.Ea(Object.keys(this.Ab)).slice(0, p208);
        var v123 = vO4.Ea(Object.keys(this.Cb)).slice(0, p208);
        var v124 = vO4.Ea(Object.keys(this.Eb)).slice(0, p208);
        var v125 = vO4.Ea(Object.keys(this.Gb)).slice(0, p208);
        var vA3 = [];
        for (var vLN011 = 0; vLN011 < p208; vLN011++) {
          var v126 = v121.length > 0 ? v121[vLN011 % v121.length] : 0;
          var v127 = v122.length > 0 ? v122[vLN011 % v122.length] : 0;
          var v128 = v123.length > 0 ? v123[vLN011 % v123.length] : 0;
          var v129 = v124.length > 0 ? v124[vLN011 % v124.length] : 0;
          var v130 = v125.length > 0 ? v125[vLN011 % v125.length] : 0;
          vA3.push(new vO2.Sb(v126, v127, v128, v129, v130));
        }
        ;
        return vA3;
      };
      f11.prototype.Tb = function (p209) {
        if (this.wb.hasOwnProperty(p209)) {
          return this.wb[p209];
        } else {
          return this.xb;
        }
      };
      f11.prototype.Ub = function (p210) {
        if (this.yb.hasOwnProperty(p210)) {
          return this.yb[p210];
        } else {
          return this.zb;
        }
      };
      f11.prototype.Vb = function (p211) {
        if (this.Ab.hasOwnProperty(p211)) {
          return this.Ab[p211];
        } else {
          return this.Bb;
        }
      };
      f11.prototype.Wb = function (p212) {
        if (this.Cb.hasOwnProperty(p212)) {
          return this.Cb[p212];
        } else {
          return this.Db;
        }
      };
      f11.prototype.Xb = function (p213) {
        if (this.Gb.hasOwnProperty(p213)) {
          return this.Gb[p213];
        } else {
          return this.Hb;
        }
      };
      f11.prototype.Yb = function (p214) {
        if (this.Eb.hasOwnProperty(p214)) {
          return this.Eb[p214];
        } else {
          return this.Fb;
        }
      };
      f11.prototype.Zb = function (p215) {
        if (this.sb.hasOwnProperty(p215)) {
          return this.sb[p215];
        } else {
          return this.tb;
        }
      };
      f11.prototype.$b = function (p216) {
        if (this.ub.hasOwnProperty(p216)) {
          return this.ub[p216];
        } else {
          return this.vb;
        }
      };
      f11.Nb = function f12(p217, p218, p219) {
        this._b = p217;
        this.ac = p218;
        this.bc = p219;
      };
      f11.Lb = function f13(p220, p221, p222) {
        this.cc = p220;
        this.dc = p221;
        this.ec = p222;
      };
      f11.Ob = function f14(p223) {
        this.dc = p223;
      };
      f11.Ib = function f15(p224, p225) {
        this.dc = p224;
        this.ec = p225;
      };
      f11.Mb = function f16(p226) {
        this.dc = p226;
      };
      return f11;
    }();
    vO2.Kb = function () {
      function f17() {
        var v131 = vO5.k.m.from("/images/wear-ability.png");
        this.fc = new vO2.Wa("magnet_ability", v131, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new vO2.Wa("velocity_ability", v131, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new vO2.Wa("flex_ability", v131, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var v132 = vO5.k.m.from("https://i.imgur.com/wJRSUUx.png");
        this.pwrFlex1 = new vO2.Wa("flex_ability", v132, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var v133 = vO5.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex = new vO2.Wa("flex_ability", v133, 156, 140, 87, 60, 170, 128.5, 128, 128);
        var v134 = vO5.k.m.from("https://i.imgur.com/LvJ1RxC.png");
        this.pwrFlex2 = new vO2.Wa("flex_ability2", v134, 156, 4, 87, 74, 285, 63.5, 128, 128);
        var v135;
        var v136 = vO5.k.m.from("/images/def-look.png");
        var v137 = new vO2.Wa("def_eyes", v136, 0, 0, 42, 80, 75, 64, 128, 128);
        var v138 = new vO2.Wa("def_mouth", v136, 46, 0, 20, 48, 109, 63, 128, 128);
        var v139 = new vO2.Wa("def_skin_glow", v136, 70, 0, 32, 32, 0, 0, 0, 0);
        var v140 = new vO2.Wa("def_skin_base", v136, 46, 52, 64, 64, 0, 0, 0, 0);
        var v141 = vO2.pb.Pb(v140, v139, v137, v138);
        this.ic = new vO2.jc({}, v141);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((v135 = vO2.c.document.createElement("canvas")).width = 80, v135.height = 80, {
          nc: v135,
          oc: v135.getContext("2d"),
          Za: new vO5.k.n(vO5.k.m.from(v135))
        });
        this.pc = null;
        this.qc = [];
      }
      f17.Jb = vO2.Wa.lb();
      f17.prototype.Sa = function () {};
      f17.prototype.rc = function (p227, p228, p229) {
        var vThis2 = this;
        var v142 = this.ic.sc();
        if (v142 > 0 && vO4.Ca() - this.kc < 1200000) {
          if (p227 != null) {
            p227();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (vO4.Ca() - this.kc < 300000) {
            if (p227 != null) {
              p227();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var v143 = new vO2.vc(v142);
        v143.wc(function (p230, p231) {
          if (v143 === vThis2.pc && p229 != null) {
            p229(p230, p231);
          }
        });
        v143.xc(function (p232) {
          if (v143 === vThis2.pc && p228 != null) {
            p228(p232);
          }
        });
        v143.yc(function () {
          if (v143 === vThis2.pc && p228 != null) {
            p228(Error());
          }
        });
        v143.zc(function () {
          if (v143 === vThis2.pc && p227 != null) {
            p227();
          }
        });
        v143.Ac(function (p233) {
          if (v143 === vThis2.pc) {
            vThis2.lc = vO4.Ca();
            vThis2.pc = null;
            vThis2.Bc();
            vThis2.ic.Cc().ob();
            vThis2.ic = p233;
            if (p227 != null) {
              p227();
            }
            vThis2.Dc();
            return;
          }
          ;
          try {
            p233.Cc().ob();
          } catch (e15) {}
        });
        v143.Ec();
        this.kc = vO4.Ca();
        this.pc = v143;
      };
      f17.prototype.Bc = function () {};
      f17.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      f17.prototype.Gc = function () {
        return this.ic.Hc();
      };
      f17.prototype.Ic = function () {
        return this.mc;
      };
      f17.prototype.Jc = function (p234) {
        this.qc.push(p234);
      };
      f17.prototype.Dc = function () {
        for (var vLN012 = 0; vLN012 < this.qc.length; vLN012++) {
          this.qc[vLN012]();
        }
      };
      f17.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return f17;
    }();
    vO2.Kc = function () {
      function f18(p235) {
        this.Lc = p235;
      }
      f18.prototype.Mc = function (p236) {
        return this.Lc[p236];
      };
      f18.Nc = function () {
        function f19() {
          this.Oc = [];
        }
        f19.prototype.Pc = function (p237, p238) {
          for (var vLN013 = 0; vLN013 < this.Oc.length; vLN013++) {
            if (this.Oc[vLN013].Qc === p237) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new f18.Rc(p237, p238));
          return this;
        };
        f19.prototype.Sc = function () {
          var vLN014 = 0;
          for (var vLN015 = 0; vLN015 < this.Oc.length; vLN015++) {
            vLN014 += this.Oc[vLN015].Tc;
          }
          ;
          var vO25 = {};
          var vLN016 = 0;
          for (var vLN017 = 0; vLN017 < this.Oc.length; vLN017++) {
            var v144 = this.Oc[vLN017];
            v144.Tc = v144.Tc / vLN014;
            v144.Uc = vLN016;
            v144.Vc = vLN016 + v144.Tc;
            vLN016 = v144.Vc;
            vO25[v144.Qc] = v144;
          }
          ;
          return new f18(vO25);
        };
        return f19;
      }();
      f18.Rc = function () {
        function f20(p239, p240) {
          this.Qc = p239;
          this.Tc = p240;
          this.Uc = 0;
          this.Vc = 0;
        }
        f20.prototype.Wc = function (p241) {
          return this.Uc + (this.Vc - this.Uc) * p241;
        };
        return f20;
      }();
      return f18;
    }();
    vO2.Xc = function () {
      function f21() {
        this.Yc = new vO5.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new vV145();
        this.Zc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(vLN797);
        this._c[0] = this.ad(0, new vO2.bd(), new vO2.bd());
        for (var vLN14 = 1; vLN14 < vLN797; vLN14++) {
          this._c[vLN14] = this.ad(vLN14, new vO2.bd(), new vO2.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var v145;
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v146 = vO3.T * 0.1;
      f21.fd = vLN797;
      f21.prototype.ad = function (p242, p243, p244) {
        var v147 = new vF16(p243, p244);
        p243.gd.zIndex = vLN0001 * ((vLN797 - p242) * 2 + 1 + 3);
        p244.gd.zIndex = vLN0001 * ((vLN797 - p242) * 2 - 2 + 3);
        return v147;
      };
      f21.prototype.hd = function (p245, p246, p247, p248, p249, p250, p251, p252) {
        var v148 = p247.dc;
        var v149 = p245 === vO2.jd.id ? p246.ac.ec : p247.ec;
        if (v148.length > 0 && v149.length > 0) {
          for (var vLN018 = 0; vLN018 < this._c.length; vLN018++) {
            this._c[vLN018].ld.kd(v148[vLN018 % v148.length]);
            this._c[vLN018].md.kd(v149[vLN018 % v149.length]);
            this._c[vLN018].ld.nd(p252);
            this._c[vLN018].md.nd(p252);
          }
        }
        ;
        this.Zc.hd(p248, p249, p250, p251);
      };
      (v145 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new vO5.k.l();
        this.td = [];
        for (var vLN019 = 0; vLN019 < 4; vLN019++) {
          var v150 = new vO2.bd();
          v150.kd(ooo.ud.fc);
          this.sd.addChild(v150.gd);
          this.td.push(v150);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new vO2.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex1 = new vO2.bd();
        this.pwr_flex1.kd(ooo.ud.pwrFlex1);
        this.pwr_flex1.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex1.gd);
        this.pwr_flex = new vO2.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.pwr_flex2 = new vO2.bd();
        this.pwr_flex2.kd(ooo.ud.pwrFlex2);
        this.pwr_flex2.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex2.gd);
        this.disableFlex();
      })).prototype.hd = function (p253, p254, p255, p256) {
        this.yd(0.002, this.od, p253.dc);
        this.yd(0.003, this.pd, p254.dc);
        this.yd(0.004, this.rd, p256.dc);
        this.yd(0.005, this.qd, p255.dc);
      };
      v145.prototype.yd = function (p257, p258, p259) {
        while (p259.length > p258.length) {
          var v151 = new vO2.bd();
          p258.push(v151);
          this.addChild(v151.zd());
        }
        ;
        while (p259.length < p258.length) {
          p258.pop().G();
        }
        ;
        var vP257 = p257;
        for (var vLN020 = 0; vLN020 < p259.length; vLN020++) {
          vP257 += 0.0001;
          var v152 = p258[vLN020];
          v152.kd(p259[vLN020]);
          v152.gd.zIndex = vP257;
        }
      };
      v145.prototype.Ad = function (p260, p261, p262, p263) {
        this.visible = true;
        this.position.set(p260, p261);
        this.rotation = p263;
        for (var vLN021 = 0; vLN021 < this.od.length; vLN021++) {
          this.od[vLN021].Bd(p262);
        }
        ;
        for (var vLN022 = 0; vLN022 < this.pd.length; vLN022++) {
          this.pd[vLN022].Bd(p262);
        }
        ;
        for (var vLN023 = 0; vLN023 < this.qd.length; vLN023++) {
          this.qd[vLN023].Bd(p262);
        }
        ;
        for (var vLN024 = 0; vLN024 < this.rd.length; vLN024++) {
          this.rd[vLN024].Bd(p262);
        }
      };
      v145.prototype.Cd = function () {
        this.visible = false;
      };
      v145.prototype.Dd = function (p264, p265, p266, p267) {
        this.sd.visible = true;
        var v153 = p266 / 1000;
        var v154 = 1 / this.td.length;
        for (var vLN025 = 0; vLN025 < this.td.length; vLN025++) {
          var v155 = 1 - (v153 + v154 * vLN025) % 1;
          this.td[vLN025].gd.alpha = 1 - v155;
          this.td[vLN025].Bd(p265 * (0.5 + v155 * 4.5));
        }
      };
      v145.prototype.vd = function () {
        this.sd.visible = false;
      };
      v145.prototype.Ed = function (p268, p269, p270, p271) {
        this.wd.gd.visible = vO7.vp;
        this.wd.gd.alpha = vO4.ga(this.wd.gd.alpha, p268.Fd ? 0.9 : 0.4, p271, 0.0025);
        this.wd.Bd(p269);
      };
      v145.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      v145.prototype.activeFlex = function (p272, p273, p274, p275) {
        this.pwr_flex1.gd.visible = vO7.flx === 1;
        this.pwr_flex1.gd.alpha = vO4.ga(this.wd.gd.alpha, p272.Fd ? 1 : 1, p275, 1);
        this.pwr_flex1.Bd(p273);
        this.pwr_flex.gd.visible = vO7.flx === 2;
        this.pwr_flex.gd.alpha = vO4.ga(this.wd.gd.alpha, p272.Fd ? 0.9 : 0.5, p275, 0.0025);
        this.pwr_flex.Bd(p273);
        this.pwr_flex2.gd.visible = vO7.flx === 3;
        this.pwr_flex2.gd.alpha = vO4.ga(this.wd.gd.alpha, p272.Fd ? 0.9 : 0.5, p275, 0.0025);
        this.pwr_flex2.Bd(p273);
      };
      v145.prototype.disableFlex = function () {
        this.pwr_flex1.gd.visible = false;
        this.pwr_flex.gd.visible = false;
        this.pwr_flex2.gd.visible = false;
      };
      var vV145 = v145;
      f21.prototype.Gd = function (p276) {
        return this.dd + this.ed * vO4.oa(p276 * v146 - this.cd);
      };
      f21.prototype.Hd = function (p277, p278, p279, p280) {
        var v156;
        var v157;
        var v158;
        var v159;
        var v160;
        var v161;
        var v162;
        var v163;
        var v164 = p277.Id * 2;
        var v165 = p277.Jd;
        var v166 = p277.Kd;
        var v167 = v166 * 4 - 3;
        var vV167 = v167;
        this.cd = p278 / 400 * vO3.T;
        this.dd = v164 * 1.5;
        this.ed = v164 * 0.15 * p277.Ld;
        if (p280(v157 = v165[0], v161 = v165[1])) {
          v158 = v165[2];
          v162 = v165[3];
          v159 = v165[4];
          v163 = v165[5];
          var v168 = vO4.ta(v163 + v161 * 2 - v162 * 3, v159 + v157 * 2 - v158 * 3);
          this.Zc.Ad(v157, v161, v164, v168);
          this._c[0].Ad(v157, v161, v164, this.Gd(0), v168);
          this._c[1].Ad(v157 * 0.64453125 + v158 * 0.45703125 + v159 * -0.1015625, v161 * 0.64453125 + v162 * 0.45703125 + v163 * -0.1015625, v164, this.Gd(1), vF16.Md(this._c[0], this._c[2]));
          this._c[2].Ad(v157 * 0.375 + v158 * 0.75 + v159 * -0.125, v161 * 0.375 + v162 * 0.75 + v163 * -0.125, v164, this.Gd(2), vF16.Md(this._c[1], this._c[3]));
          this._c[3].Ad(v157 * 0.15234375 + v158 * 0.94921875 + v159 * -0.1015625, v161 * 0.15234375 + v162 * 0.94921875 + v163 * -0.1015625, v164, this.Gd(3), vF16.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var vLN4 = 4;
        for (var vLN22 = 2, v169 = v166 * 2 - 4; vLN22 < v169; vLN22 += 2) {
          if (p280(v157 = v165[vLN22], v161 = v165[vLN22 + 1])) {
            v156 = v165[vLN22 - 2];
            v160 = v165[vLN22 - 1];
            v158 = v165[vLN22 + 2];
            v162 = v165[vLN22 + 3];
            v159 = v165[vLN22 + 4];
            v163 = v165[vLN22 + 5];
            this._c[vLN4].Ad(v157, v161, v164, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v156 * -0.06640625 + v157 * 0.84375 + v158 * 0.2578125 + v159 * -0.03515625, v160 * -0.06640625 + v161 * 0.84375 + v162 * 0.2578125 + v163 * -0.03515625, v164, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v156 * -0.0625 + v157 * 0.5625 + v158 * 0.5625 + v159 * -0.0625, v160 * -0.0625 + v161 * 0.5625 + v162 * 0.5625 + v163 * -0.0625, v164, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v156 * -0.03515625 + v157 * 0.2578125 + v158 * 0.84375 + v159 * -0.06640625, v160 * -0.03515625 + v161 * 0.2578125 + v162 * 0.84375 + v163 * -0.06640625, v164, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
          } else {
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
          }
        }
        ;
        if (p280(v157 = v165[v166 * 2 - 4], v161 = v165[v166 * 2 - 3])) {
          v156 = v165[v166 * 2 - 6];
          v160 = v165[v166 * 2 - 5];
          v158 = v165[v166 * 2 - 2];
          v162 = v165[v166 * 2 - 1];
          this._c[v167 - 5].Ad(v157, v161, v164, this.Gd(v167 - 5), vF16.Md(this._c[v167 - 6], this._c[v167 - 4]));
          this._c[v167 - 4].Ad(v156 * -0.1015625 + v157 * 0.94921875 + v158 * 0.15234375, v160 * -0.1015625 + v161 * 0.94921875 + v162 * 0.15234375, v164, this.Gd(v167 - 4), vF16.Md(this._c[v167 - 5], this._c[v167 - 3]));
          this._c[v167 - 3].Ad(v156 * -0.125 + v157 * 0.75 + v158 * 0.375, v160 * -0.125 + v161 * 0.75 + v162 * 0.375, v164, this.Gd(v167 - 3), vF16.Md(this._c[v167 - 4], this._c[v167 - 2]));
          this._c[v167 - 2].Ad(v156 * -0.1015625 + v157 * 0.45703125 + v158 * 0.64453125, v160 * -0.1015625 + v161 * 0.45703125 + v162 * 0.64453125, v164, this.Gd(v167 - 2), vF16.Md(this._c[v167 - 3], this._c[v167 - 1]));
          this._c[v167 - 1].Ad(v158, v162, v164, this.Gd(v167 - 1), vF16.Md(this._c[v167 - 2], this._c[v167 - 1]));
        } else {
          this._c[v167 - 5].Cd();
          this._c[v167 - 4].Cd();
          this._c[v167 - 3].Cd();
          this._c[v167 - 2].Cd();
          this._c[v167 - 1].Cd();
        }
        if (this.$c === 0 && vV167 > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && vV167 === 0) {
          vO5.k.F.G(this.Zc);
        }
        while (this.$c < vV167) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > vV167) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var v170 = p277.Nd[vO2.Pd.Od];
        if (this._c[0].Qd() && v170 != null && v170.Rd) {
          this.Zc.Dd(p277, v164, p278, p279);
        } else {
          this.Zc.vd();
        }
        var v171 = p277.Nd[vO2.Pd.Sd];
        if (this._c[0].Qd() && v171 != null && v171.Rd) {
          this.Zc.Ed(p277, v164, p278, p279);
        } else {
          this.Zc.xd();
        }
        var v172 = p277.Nd[vO2.Pd.Yd];
        if (this._c[0].Qd() && v172 != null && v172.Rd) {
          this.Zc.activeFlex(p277, v164, p278, p279);
        } else {
          this.Zc.disableFlex();
        }
      };
      var vF16 = function () {
        function f22(p281, p282) {
          this.ld = p281;
          this.ld.Td(false);
          this.md = p282;
          this.md.Td(false);
        }
        f22.prototype.Ad = function (p283, p284, p285, p286, p287) {
          this.ld.Td(true);
          this.ld.Ud(p283, p284);
          this.ld.Bd(p285);
          this.ld.Vd(p287);
          this.md.Td(true);
          this.md.Ud(p283, p284);
          this.md.Bd(p286);
          this.md.Vd(p287);
        };
        f22.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        f22.prototype.Qd = function () {
          return this.ld.Qd();
        };
        f22.Md = function (p288, p289) {
          return vO4.ta(p288.ld.gd.position.y - p289.ld.gd.position.y, p288.ld.gd.position.x - p289.ld.gd.position.x);
        };
        return f22;
      }();
      return f21;
    }();
    vO2.Pd = function () {
      function f23(p290) {
        this.Wd = p290;
        this.Rd = false;
        this.Xd = 1;
      }
      f23.Sd = 0;
      f23.Yd = 1;
      f23.Od = 2;
      f23.Zd = 6;
      f23.$d = 3;
      f23._d = 4;
      f23.ae = 5;
      return f23;
    }();
    vO2.jc = function () {
      function f24(p291, p292) {
        this.be = p291;
        this.ce = p292;
      }
      f24.de = new f24({}, vO2.pb.lb());
      f24.prototype.sc = function () {
        return this.be.revision;
      };
      f24.prototype.Hc = function () {
        return this.be;
      };
      f24.prototype.Cc = function () {
        return this.ce;
      };
      return f24;
    }();
    vO2.vc = function () {
      function f25(p293) {
        this.ee = (++f25.fe, function (p294, p295) {});
        this.ge = p293;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      f25.pe = {
        qe: "0x0",
        re: "0x1",
        se: "0x2",
        te: "0x3",
        ue: "0x4"
      };
      f25.fe = 100000;
      f25.ve = new vO2.Kc.Nc().Pc(f25.pe.qe, 1).Pc(f25.pe.re, 10).Pc(f25.pe.se, 50).Pc(f25.pe.te, 15).Pc(f25.pe.ue, 5).Sc();
      f25.prototype.Ac = function (p296) {
        this.he = p296;
      };
      f25.prototype.zc = function (p297) {
        this.ie = p297;
      };
      f25.prototype.xc = function (p298) {
        this.je = p298;
      };
      f25.prototype.yc = function (p299) {
        this.ke = p299;
      };
      f25.prototype.wc = function (p300) {
        this.le = p300;
      };
      f25.prototype.tc = function () {
        return this.oe;
      };
      f25.prototype.uc = function () {
        this.me = true;
      };
      f25.prototype.Ec = function () {
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
      f25.prototype.xe = function () {
        var vThis3 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO3.H.K + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (p301) {
              var v173;
              var v174;
              if (p301.lengthComputable) {
                v173 = p301.loaded / p301.total;
                v174 = f25.pe.qe;
                vThis3.ye(v174, f25.ve.Mc(v174).Wc(v173));
              }
            }
          }
        }).fail(function () {
          vThis3.ze(Error());
        }).done(function (p302) {
          if (p302 <= vThis3.ge) {
            vThis3.Ae();
            return;
          }
          ;
          vThis3.Be();
        });
      };
      f25.prototype.Be = function () {
        var vThis4 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO3.H.K + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (p303) {
              var v175;
              var v176;
              if (p303.lengthComputable) {
                v175 = p303.loaded / p303.total;
                v176 = f25.pe.re;
                vThis4.ye(v176, f25.ve.Mc(v176).Wc(v175));
              }
            }
          }
        }).fail(function () {
          vThis4.ze(Error());
        }).done(function (p304) {
          if (p304.revision <= vThis4.ge) {
            vThis4.Ae();
            return;
          }
          ;
          var vO26 = {};
          var vO27 = {
            country: "gb",
            v: "v2"
          };
          if (v31 && v31 != "gb") {
            vO27.country = v31;
          }
          vO26 = p304;
          if (v32 && v34 && v34 == vO7.v_z) {
            vO26 = JSON.parse(v32);
            (async function () {
              if (v36 || v35 || Array.isArray(vO7.dg) && vO7.dg.length > 0) {
                vO26 = await Ysw(vO26);
              }
              for (let v177 in vO26) {
                if (Array.isArray(vO26[v177])) {
                  p304[v177] = p304[v177].concat(vO26[v177]);
                } else {
                  p304[v177] = {
                    ...p304[v177],
                    ...vO26[v177]
                  };
                }
              }
              ;
              vThis4.Ce(p304);
            })();
          } else {
            fetch(vO7.s_l + "/store", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(vO27)
            }).then(async function (p305) {
              for (let v178 in (p305 = await p305.json()).textureDict) {
                for (let v179 in p305.textureDict[v178]) {
                  if (v179 === "file") {
                    p305.textureDict[v178][v179] = "data:image/png;base64," + p305.textureDict[v178][v179].substr(p305.textureDict[v178][v179].length - vO7.c_v, vO7.c_v) + p305.textureDict[v178][v179].substr(0, p305.textureDict[v178][v179].length - vO7.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("tmwsw", JSON.stringify(p305));
              localStorage.setItem("tmwit", vO7.v_z);
              if (v36 || v35 || Array.isArray(vO7.dg) && vO7.dg.length > 0) {
                p305 = await Ysw(p305);
              }
              for (let v180 in p305) {
                if (Array.isArray(p305[v180])) {
                  p304[v180] = p304[v180].concat(p305[v180]);
                } else {
                  p304[v180] = {
                    ...p304[v180],
                    ...p305[v180]
                  };
                }
              }
              ;
              vThis4.Ce(p304);
            }).catch(function (p306) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              vThis4.Ce(p304);
            });
          }
        });
      };
      f25.prototype.Ce = function (p307) {
        var vThis5 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var vA4 = [];
        var vA5 = [];
        var vLN026 = 0;
        for (var v181 in p307.textureDict) {
          if (p307.textureDict.hasOwnProperty(v181)) {
            var v182 = p307.textureDict[v181];
            if (v182.custom) {
              var vLS2 = "";
              if (v182.relativePath) {
                vLS2 = v182.relativePath.search("https://lh3.googleusercontent.com") != -1 ? v182.relativePath : vO7.s_l + v182.relativePath;
              }
              var v183 = v182.file || vLS2;
              var vLN027 = 0;
              var vLS3 = "";
              var v184 = new f25.De(v181, v183, vLN027, vLS3);
              vA4.push(v184);
              vA5.push(v184);
            } else {
              var v183 = vO3.H.K + v182.relativePath;
              var vLN027 = v182.fileSize;
              var vLS3 = v182.sha256;
              var v184 = new f25.De(v181, v183, vLN027, vLS3);
              vA4.push(v184);
              vA5.push(v184);
              vLN026 += vLN027;
            }
          }
        }
        ;
        var v185;
        var vLN028 = 0;
        function f26(p308) {
          for (var vLN029 = 0; vLN029 < vA5.length; vLN029++) {
            try {
              vO2.c.URL.revokeObjectURL(vA5[vLN029].Ee);
            } catch (e16) {}
          }
          ;
          vThis5.ze(p308);
        }
        function f27(p309) {
          var v186;
          var v187;
          v186 = (vLN028 + vO4._(v185.Fe * p309)) / vLN026;
          v187 = f25.pe.se;
          vThis5.ye(v187, f25.ve.Mc(v187).Wc(v186));
        }
        function f28(p310) {
          var v188 = new Blob([p310]);
          v185.Ee = vO2.c.URL.createObjectURL(v188);
          vLN028 += v185.Fe;
          f29();
        }
        function f29() {
          if (vLN030 < vA5.length) {
            v185 = vA5[vLN030++];
            vThis5.Ge(v185, f26, f28, f27);
            return;
          }
          ;
          vO4.Y(function () {
            return vThis5.He(p307, vA4);
          }, 0);
        }
        var vLN030 = 0;
        f29();
      };
      f25.prototype.Ge = function (p311, p312, p313, p314) {
        $.ajax({
          type: "GET",
          url: p311.Ie,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (p315) {
              if (p315.lengthComputable) {
                p314(p315.loaded / p315.total);
              }
            }
          }
        }).fail(function () {
          p312(Error());
        }).done(function (p316) {
          p313(p316);
        });
      };
      f25.prototype.He = function (p317, p318) {
        var vThis6 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var v189;
        var v190;
        var vO28 = {};
        function f30() {
          for (var vLN031 = 0; vLN031 < p318.length; vLN031++) {
            try {
              vO2.c.URL.revokeObjectURL(p318[vLN031].Ee);
            } catch (e17) {}
          }
          ;
          vThis6.ze(Error());
        }
        function f31() {
          var v191;
          var v192;
          v191 = vLN032 / p318.length;
          v192 = f25.pe.te;
          vThis6.ye(v192, f25.ve.Mc(v192).Wc(v191));
          vO28[v189.Je] = new vO2.Ke(v189.Ee, v190);
          f32();
        }
        function f32() {
          if (vLN032 < p318.length) {
            v189 = p318[vLN032++];
            (v190 = vO5.k.m.from(v189.Ee)).on("error", f30);
            v190.on("loaded", f31);
            return;
          }
          ;
          vO4.Y(function () {
            return vThis6.Le(p317, vO28);
          }, 0);
        }
        var vLN032 = 0;
        f32();
      };
      f25.prototype.Le = function (p319, p320) {
        var vThis7 = this;
        var vO29 = {};
        var vLN033 = 0;
        var v193 = Object.values(p319.regionDict).length;
        vO4.Da(p319.regionDict, function (p321, p322) {
          var v194;
          var v195;
          var v196 = vO2.Wa.mb(p322.texture + ": " + p321, p320[p322.texture].Za, p322);
          vO29[p321] = v196;
          if (++vLN033 % 10 == 0) {
            v194 = vLN033 / v193;
            v195 = f25.pe.ue;
            vThis7.ye(v195, f25.ve.Mc(v195).Wc(v194));
          }
        });
        var v197 = Object.values(p320).map(function (p323) {
          return p323.Za;
        });
        var v198 = Object.values(vO29);
        var v199 = new vO2.jc(p319, vO2.pb.Qb(p319, vO29, v197, v198));
        vO4.Y(function () {
          return vThis7.Me(v199);
        }, 0);
      };
      f25.De = function f33(p324, p325, p326, p327) {
        this.Je = p324;
        this.Ie = p325;
        this.Fe = p326;
        this.Ne = p327;
        this.Ee = "";
      };
      f25.prototype.Me = function (p328) {
        if (this.oe) {
          p328.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var vThis8 = this;
        vO4.Y(function () {
          return vThis8.he(p328);
        }, 0);
      };
      f25.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis9 = this;
          vO4.Y(function () {
            return vThis9.ie();
          }, 0);
        }
      };
      f25.prototype.ze = function (p329) {
        if (!this.oe) {
          this.oe = true;
          var vThis10 = this;
          vO4.Y(function () {
            return vThis10.je(p329);
          }, 0);
        }
      };
      f25.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis11 = this;
          vO4.Y(function () {
            return vThis11.ke();
          }, 0);
        }
      };
      f25.prototype.ye = function (p330, p331) {
        if (!this.oe && !this.me) {
          var vThis12 = this;
          vO4.Y(function () {
            return vThis12.le(p330, p331);
          }, 0);
        }
      };
      return f25;
    }();
    vO2.Oe = {};
    vO2.Pe = function () {
      function f34() {
        this.Qe = vO2.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      f34.prototype.Sa = function () {};
      f34.prototype.Xe = function (p332) {
        this.Ue = p332;
      };
      f34.prototype.Ye = function (p333) {
        this.Qe = p333;
        this.Ze();
      };
      f34.prototype.$e = function (p334) {
        this.Te = p334;
        this.Ze();
      };
      f34.prototype.Ze = function () {};
      f34.prototype._e = function (p335, p336) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v200 = p335[p336];
        if (v200 == null || v200.length === 0) {
          return null;
        } else {
          return v200[vO4._(vO4.ma() * v200.length)].cloneNode();
        }
      };
      f34.prototype.af = function (p337, p338, p339) {
        if (this.Ue && !(p339 <= 0)) {
          var v201 = this._e(p337, p338);
          if (v201 != null) {
            v201.volume = vO4.ha(1, p339);
            v201.play();
          }
        }
      };
      f34.prototype.bf = function (p340, p341) {
        if (this.Qe.cf) {
          this.af(p340.ef.df, p340, p341);
        }
      };
      f34.prototype.ff = function (p342, p343) {
        if (this.Qe.gf) {
          this.af(p342.ef.hf, p342, p343);
        }
      };
      f34.prototype.if = function () {};
      f34.prototype.jf = function () {};
      f34.prototype.kf = function () {};
      f34.prototype.lf = function () {};
      f34.prototype.mf = function () {};
      f34.prototype.nf = function () {};
      f34.prototype.pf = function (p344, p345, p346) {};
      f34.prototype.qf = function (p347) {};
      f34.prototype.rf = function (p348) {};
      f34.prototype.sf = function (p349) {};
      f34.prototype.tf = function (p350) {};
      f34.prototype.uf = function (p351) {};
      f34.prototype.vf = function (p352) {};
      f34.prototype.wf = function (p353) {};
      f34.prototype.xf = function (p354) {};
      f34.prototype.yf = function (p355) {};
      f34.prototype.zf = function (p356) {};
      f34.prototype.Af = function (p357) {};
      f34.prototype.Bf = function (p358) {};
      f34.prototype.Cf = function (p359) {};
      f34.prototype.Df = function (p360) {};
      f34.prototype.Ef = function (p361, p362) {};
      f34.prototype.Ff = function (p363) {};
      f34.prototype.Gf = function (p364, p365, p366) {};
      f34.Se = {
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
      return f34;
    }();
    vO2.Nf = function () {
      function f35(p367) {
        this.Of = p367;
        this.nc = p367.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new vO2.Sf(vLN5, vLN40, vO2.Uf.Tf);
        this.Vf = ((v202 = {}).view = this.nc, v202.backgroundColor = vLN034, v202.antialias = true, new vO5.k.o(v202));
        this.Wf = new vO5.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new vO5.k.l();
        this.Xf.zIndex = 0;
        this.Wf.addChild(this.Xf);
        this.Yf = new vO2.Zf(ooo.ef.$f);
        this.Yf._f.zIndex = 1;
        this.Wf.addChild(this.Yf._f);
        var v202;
        var v203 = this.Rf.ag();
        v203.zIndex = 2;
        this.Wf.addChild(v203);
        this.bg = new vO5.k.l();
        this.bg.zIndex = 3;
        this.Wf.addChild(this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var vLN034 = 0;
      var vLN5 = 5;
      var vLN40 = 40;
      var vA6 = [{
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
      f35.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN034;
        this.cg = Array(vA6.length);
        for (var vLN035 = 0; vLN035 < this.cg.length; vLN035++) {
          this.cg[vLN035] = new vO5.k.s();
          this.cg[vLN035].texture = ooo.ef.ig;
          this.cg[vLN035].anchor.set(0.5);
          this.Xf.addChild(this.cg[vLN035]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var vLN036 = 0; vLN036 < this.dg.length; vLN036++) {
          this.dg[vLN036] = new vO5.k.s();
          this.dg[vLN036].texture = ooo.ef.jg[vLN036];
          this.dg[vLN036].anchor.set(0.5);
          this.bg.addChild(this.dg[vLN036]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var vLN037 = 0; vLN037 < this.eg.length; vLN037++) {
          var vA7 = [1, 1, 1];
          this.eg[vLN037] = {
            kg: vO4.va(0, vO3.S),
            lg: vO4.va(0.09, 0.16) * 0.66,
            mg: vO4.va(0, 1),
            ng: vO4.va(0, 1),
            og: 0,
            fg: vA7[0],
            gg: vA7[1],
            hg: vA7[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      f35.Rd = false;
      f35.rg = function (p368) {
        f35.Rd = p368;
      };
      f35.prototype.sg = function (p369) {
        this.Rf.rg(p369);
      };
      f35.prototype.qg = function () {
        var v204 = vO4.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v204;
        this.nc.width = v204 * this.Pf;
        this.nc.height = v204 * this.Qf;
        var v205 = vO4.ia(this.Pf, this.Qf) * 0.6;
        for (var vLN038 = 0; vLN038 < this.cg.length; vLN038++) {
          this.cg[vLN038].width = v205;
          this.cg[vLN038].height = v205;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      f35.prototype.ug = function (p370, p371) {
        if (f35.Rd) {
          var v206 = p370 / 1000;
          var v207 = this.Of.width();
          var v208 = this.Of.height();
          for (var vLN039 = 0; vLN039 < this.cg.length; vLN039++) {
            var v209 = vA6[vLN039 % vA6.length];
            var v210 = this.cg[vLN039];
            var v211 = vLN039 / this.cg.length * vO3.T;
            var v212 = v206 * 0.5 * 0.12;
            var v213 = vO4.pa((v212 + v211) * 3) * vO4.pa(v211) - vO4.oa((v212 + v211) * 5) * vO4.oa(v211);
            var v214 = vO4.pa((v212 + v211) * 3) * vO4.oa(v211) + vO4.oa((v212 + v211) * 5) * vO4.pa(v211);
            var v215 = 0.2 + vO4.pa(v211 + v206 * 0.075) * 0.2;
            var v216 = v209.fg * 255 << 16 & 16711680 | v209.gg * 255 << 8 & 65280 | v209.hg * 255 & 255;
            v210.tint = v216;
            v210.alpha = v215;
            v210.position.set(v207 * (0.2 + (v213 + 1) * 0.5 * 0.6), v208 * (0.1 + (v214 + 1) * 0.5 * 0.8));
          }
          ;
          var v217 = vO4.ia(v207, v208) * 0.05;
          for (var vLN040 = 0; vLN040 < this.dg.length; vLN040++) {
            var v218 = this.eg[vLN040];
            var v219 = this.dg[vLN040];
            var v220 = vO3.S * vLN040 / this.dg.length;
            v218.mg = 0.2 + (vO4.pa(v206 * 0.01 + v220) + vO4.pa(v206 * 0.02 * 17 + v220) * 0.2 + 1) * 0.6 / 2;
            v218.ng = 0.1 + (vO4.oa(v206 * 0.01 + v220) + vO4.oa(v206 * 0.02 * 21 + v220) * 0.2 + 1) * 0.8 / 2;
            var v221 = v218.mg;
            var v222 = v218.ng;
            var v223 = vO4.fa(vO4.ra(vO4.pa((v220 + v206 * 0.048) * 1.5), 6), 0, 0.9);
            var v224 = (0.4 + (1 + vO4.oa(v220 + v206 * 0.12)) * 0.5 * 1.2) * 1.2;
            var v225 = v220 + v206 * 0.1;
            var v226 = v218.fg * 255 << 16 & 16711680 | v218.gg * 255 << 8 & 65280 | v218.hg * 255 & 255;
            v219.alpha = v223;
            v219.tint = v226;
            v219.position.set(v207 * v221, v208 * v222);
            v219.rotation = v225;
            var v227 = v219.texture.width / v219.texture.height;
            v219.width = v224 * v217;
            v219.height = v224 * v217 * v227;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      f35.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var v228 = ooo.ud.Cc().Rb(vLN5);
          for (var vLN041 = 0; vLN041 < vLN5; vLN041++) {
            this.Rf.xg(vLN041, v228[vLN041]);
          }
        } else {
          var v229 = vO4.va(0, 1);
          for (var vLN042 = 0; vLN042 < vLN5; vLN042++) {
            var v230 = (v229 + vLN042 / vLN5) % 1;
            var v231 = vO4.za(vO4._(v230 * 360), 0.85, 0.5);
            var v232 = v231[0] * 255 & 255 | v231[1] * 255 << 8 & 65280 | v231[2] * 255 << 16 & 16711680;
            var v233 = "000000" + v232.toString(16);
            v233 = "#" + v233.substring(v233.length - 6, v233.length);
            this.Rf.yg(vLN042, v233);
          }
        }
      };
      f35.prototype.pg = function () {
        var v234 = vO4.ha(this.Pf, this.Qf);
        var v235 = vO4.Ca();
        for (var vLN043 = 0; vLN043 < vLN5; vLN043++) {
          var vF362 = f36(v235, 0.12, vLN043 / vLN5 * vO3.S);
          vF362._a = vF362._a * 4;
          vF362.ab = vF362.ab * 4;
          this.Rf.zg(vLN043, (this.Pf + vF362._a * v234) * 0.5, (this.Qf + vF362.ab * v234) * 0.5);
        }
      };
      f35.prototype.vg = function () {
        var v236 = vO4.ha(this.Pf, this.Qf);
        var v237 = vO4.Ca();
        for (var vLN044 = 0; vLN044 < vLN5; vLN044++) {
          var vF363 = f36(v237, 0.12, vLN044 / vLN5 * vO3.S);
          this.Rf.Ag(vLN044, (this.Pf + vF363._a * v236) * 0.5, (this.Qf + vF363.ab * v236) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function f36(p372, p373, p374) {
        var v238 = p372 / 1000;
        return {
          _a: (vO4.pa(p373 * v238 + p374) + vO4.pa(p373 * -32 * v238 + p374) * 0.4 + vO4.pa(p373 * 7 * v238 + p374) * 0.7) * 0.8,
          ab: (vO4.oa(p373 * v238 + p374) + vO4.oa(p373 * -32 * v238 + p374) * 0.4 + vO4.oa(p373 * 7 * v238 + p374) * 0.7) * 0.8
        };
      }
      return f35;
    }();
    vO2.Cg = function () {
      function f37() {}
      f37.Dg = "consent_state_2";
      f37.Eg = "showPlayerNames";
      f37.Fg = "musicEnabled";
      f37.Gg = "sfxEnabled";
      f37.Hg = "account_type";
      f37.Ig = "gameMode";
      f37.Jg = "nickname";
      f37.Kg = "skin";
      f37.Lg = "prerollCount";
      f37.Mg = "shared";
      f37.Ng = function (p375, p376, p377) {
        var v239 = new Date();
        v239.setTime(v239.getTime() + p377 * 86400000);
        var v240 = "expires=" + v239.toUTCString();
        vO2.d.cookie = p375 + "=" + p376 + "; " + v240;
      };
      f37.Og = function (p378) {
        var v241 = p378 + "=";
        for (var v242 = vO2.d.cookie.split("; "), vLN045 = 0; vLN045 < v242.length; vLN045++) {
          for (var v243 = v242[vLN045]; v243.charAt(0) == " ";) {
            v243 = v243.substring(1);
          }
          ;
          if (v243.indexOf(v241) == 0) {
            return v243.substring(v241.length, v243.length);
          }
        }
        ;
        return "";
      };
      return f37;
    }();
    v640 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    vO3.Pg = {
      Qg: function (p379, p380) {
        return function f38(p381, p382, p383) {
          var v244 = false;
          for (var v245 = p383.length, vLN046 = 0, v246 = v245 - 1; vLN046 < v245; v246 = vLN046++) {
            if (p383[vLN046][1] > p382 != p383[v246][1] > p382 && p381 < (p383[v246][0] - p383[vLN046][0]) * (p382 - p383[vLN046][1]) / (p383[v246][1] - p383[vLN046][1]) + p383[vLN046][0]) {
              v244 = !v244;
            }
          }
          ;
          return v244;
        }(p380, p379, v640);
      }
    };
    vO2.Rg = function () {
      function f39(p384, p385) {
        var v247;
        var v248;
        if (p385) {
          v247 = 1.3;
          v248 = 15554111;
        } else {
          v247 = 1.1;
          v248 = 16044288;
        }
        return new v263(p384, v248, true, 0.5, v247, 0.5, 0.7);
      }
      function f40(p386, p387, p388) {
        return ((p386 * 255 & 255) << 16) + ((p387 * 255 & 255) << 8) + (p388 * 255 & 255);
      }
      var v249 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      v249.prototype.Ug = function (p389) {
        this.Tg += p389;
        if (this.Tg >= 1) {
          var v250 = vO4._(this.Tg);
          this.Tg -= v250;
          var vF412 = function f41(p390) {
            v251 = p390 > 0 ? "+" + vO4._(p390) : p390 < 0 ? "-" + vO4._(p390) : "0";
            var v251;
            var v252;
            var v253 = vO4.ha(1.5, 0.5 + p390 / 600);
            if (p390 < 1) {
              v252 = "0xFFFFFF";
            } else if (p390 < 30) {
              var v254 = (p390 - 1) / 29;
              v252 = f40((1 - v254) * 1 + v254 * 0.96, (1 - v254) * 1 + v254 * 0.82, (1 - v254) * 1 + v254 * 0);
            } else if (p390 < 300) {
              var v255 = (p390 - 30) / 270;
              v252 = f40((1 - v255) * 0.96 + v255 * 0.93, (1 - v255) * 0.82 + v255 * 0.34, (1 - v255) * 0 + v255 * 0.25);
            } else if (p390 < 700) {
              var v256 = (p390 - 300) / 400;
              v252 = f40((1 - v256) * 0.93 + v256 * 0.98, (1 - v256) * 0.34 + v256 * 0, (1 - v256) * 0.25 + v256 * 0.98);
            } else {
              v252 = 16318713;
            }
            ;
            var v257 = vO4.ma();
            var v258 = 1 + vO4.ma() * 0.5;
            return new v263(v251, v252, true, 0.5, v253, v257, v258);
          }(v250);
          this.addChild(vF412);
          this.Sg.push(vF412);
        }
      };
      v249.prototype.Vg = function (p391) {
        vF20(vO7, oeo, "count", p391);
        if (vO7.vh && p391) {
          (function f42() {
            if (!v1000) {
              v1000 = true;
              s_h.play();
              let vSetInterval = setInterval(() => {
                if (s_h.ended) {
                  v1000 = false;
                  clearInterval(vSetInterval);
                }
              }, 1000);
            }
          })();
        }
        if (p391) {
          var vF39 = f39(vO4.U("index.game.floating.headshot"), true);
          if (vO7.iq) {
            vF39 = f39("HEADSHOT", true);
          }
          this.addChild(vF39);
          this.Sg.push(vF39);
        } else {
          var vF392 = f39(vO4.U("index.game.floating.wellDone"), false);
          if (vO7.iq) {
            vF392 = f39("بغى يقرصني", false);
          }
          this.addChild(vF392);
          this.Sg.push(vF392);
        }
      };
      v249.prototype.Bg = function (p392, p393) {
        var v259 = ooo.Xg.Kf.Wg;
        var v260 = v259.Vf.width / v259.Vf.resolution;
        var v261 = v259.Vf.height / v259.Vf.resolution;
        for (var vLN047 = 0; vLN047 < this.Sg.length;) {
          var v262 = this.Sg[vLN047];
          v262.Yg = v262.Yg + p393 / 2000 * v262.Zg;
          v262.$g = v262.$g + p393 / 2000 * v262._g;
          v262.alpha = vO4.oa(vO3.T * v262.$g) * 0.5;
          v262.scale.set(v262.Yg);
          v262.position.x = v260 * (0.25 + v262.ah * 0.5);
          v262.position.y = v262.bh ? v261 * (1 - (1 + v262.$g) * 0.5) : v261 * (1 - (0 + v262.$g) * 0.5);
          if (v262.$g > 1) {
            vO5.k.F.G(v262);
            this.Sg.splice(vLN047, 1);
            vLN047--;
          }
          vLN047++;
        }
      };
      var v263 = vO4.ca(vO5.k.t, function (p394, p395, p396, p397, p398, p399, p400) {
        vO5.k.t.call(this, p394, {
          fill: p395,
          fontFamily: "PTSans",
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = p396;
        this.Yg = p397;
        this.Zg = p398;
        this.ah = p399;
        this.$g = 0;
        this._g = p400;
      });
      return v249;
    }();
    vO2.Ke = function f43(p401, p402) {
      this.Ee = p401;
      this.Za = p402;
    };
    vO2.jd = {
      ch: 0,
      id: 16
    };
    vO2.dh = function () {
      function f44() {
        this.eh = vO2.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      f44.jh = 0;
      f44.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return f44;
    }();
    vO2.lh = function () {
      function f45(p403) {
        var v264;
        this.Of = p403;
        this.nc = p403.get()[0];
        this.Vf = ((v264 = {}).view = this.nc, v264.backgroundColor = vLN048, v264.antialias = true, new vO5.k.o(v264));
        this.Wf = new vO5.k.l();
        this.Wf.sortableChildren = true;
        this.mh = vO4._(vO4.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new vO2.th();
        this.uh = new vO5.k.p();
        this.vh = new vO5.k.l();
        this.wh = new vO5.k.l();
        this.wh.sortableChildren = true;
        this.xh = new vO5.k.l();
        this.yh = new vO5.k.l();
        this.yh.sortableChildren = true;
        this.zh = new vO5.k.l();
        this.Ah = new v292();
        this.Bh = new vV265();
        this.Ch = new vV267();
        this.Dh = new vO2.Rg();
        this.Eh = new vO5.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var v265;
      var v266;
      var v267;
      var v268;
      var v269;
      var vLN048 = 0;
      f45.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN048;
        this.sh._f.zIndex = 10;
        this.Wf.addChild(this.sh._f);
        this.uh.zIndex = 20;
        this.Wf.addChild(this.uh);
        this.vh.zIndex = 5000;
        this.Wf.addChild(this.vh);
        this.wh.zIndex = 5100;
        this.Wf.addChild(this.wh);
        this.xh.zIndex = 10000;
        this.Wf.addChild(this.xh);
        this.Eh.texture = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        this.Eh.zIndex = 1;
        this.yh.addChild(this.Eh);
        this.zh.alpha = 0.6;
        this.zh.zIndex = 2;
        this.yh.addChild(this.zh);
        this.Dh.zIndex = 3;
        this.yh.addChild(this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah.zIndex = 4;
        this.yh.addChild(this.Ah);
        this.Bh.zIndex = 5;
        this.yh.addChild(this.Bh);
        this.Ch.zIndex = 6;
        this.yh.addChild(this.Ch);
        this.qg();
      };
      f45.prototype.qg = function () {
        var v270 = vO4.e();
        var v271 = this.Of.width();
        var v272 = this.Of.height();
        this.Vf.resize(v271, v272);
        this.Vf.resolution = v270;
        this.nc.width = v270 * v271;
        this.nc.height = v270 * v272;
        this.qh = vO4.ha(vO4.ha(v271, v272), vO4.ia(v271, v272) * 0.625);
        this.Eh.position.x = v271 / 2;
        this.Eh.position.y = v272 / 2;
        this.Eh.width = v271;
        this.Eh.height = v272;
        this.Ah.position.x = vO7.sc == 0 ? 60 : v271 / 2 + 60 - v271 * vO7.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = vO7.sc == 0 ? 110 : v271 / 2 + 110 - v271 * vO7.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = vO7.sc == 0 ? v271 - 225 : v271 / 2 - 225 + v271 * vO7.wi;
        this.Ch.position.y = 1;
      };
      f45.prototype.Bg = function (p404, p405) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(p404.eh === vO2.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var v273 = this.uh;
        v273.clear();
        v273.lineStyle(0.2, 16711680, 0.3);
        v273.drawCircle(0, 0, p404.gh);
        v273.endFill();
        this.Ch.Kh = p405;
        this.zh.visible = p405;
      };
      f45.prototype.ug = function (p406, p407) {
        if (!(this.Vf.width <= 5)) {
          var v274 = ooo.Mh.Lh;
          var v275 = this.Vf.width / this.Vf.resolution;
          var v276 = this.Vf.height / this.Vf.resolution;
          this.ph = vO4.ga(this.ph, ooo.Mh.Nh, p407, 0.002);
          this.zh.visible = vO7.sn;
          var v277 = this.qh / (this.ph * vO7.z);
          var v278 = ooo.Mh.Lh.Nd[vO2.Pd.Zd];
          var v279 = v278 != null && v278.Rd;
          this.rh = vO4.fa(this.rh + p407 / 1000 * ((v279 ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + p407 * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = vO4.oa(p406 / 1200 * vO3.S);
          var v280 = v274.Oh();
          this.Fh.x = vO4.ja(this.Fh.x, v280._a, p407, 0.5, 33.333);
          this.Fh.y = vO4.ja(this.Fh.y, v280.ab, p407, 0.5, 33.333);
          var v281 = v275 / v277 / 2;
          var v282 = v276 / v277 / 2;
          ooo.Mh.Ph(this.Fh.x - v281 * 1.3, this.Fh.x + v281 * 1.3, this.Fh.y - v282 * 1.3, this.Fh.y + v282 * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, v281 * 2, v282 * 2);
          var v283 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = v277;
          this.Wf.scale.y = v277;
          this.Wf.position.x = v275 / 2 - this.Fh.x * v277;
          this.Wf.position.y = v276 / 2 - this.Fh.y * v277;
          var v284 = vO4.la(v280._a, v280.ab);
          if (v284 > v283 - 10) {
            this.oh = vO4.fa(1 + (v284 - v283) / 10, 0, 1);
            var v285 = vO4.pa(this.mh * vO3.S / 360) * (1 - this.oh) + this.oh * 1;
            var v286 = vO4.oa(this.mh * vO3.S / 360) * (1 - this.oh);
            var v287 = (vO4.ta(v286, v285) + vO3.S) % vO3.S * 360 / vO3.S;
            var v288 = this.oh * (0.5 + this.nh * 0.5);
            var v289 = vO4.za(vO4._(v287), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(v289[0], v289[1], v289[2], 0.1 + v288 * 0.2);
          } else {
            this.oh = 0;
            var v290 = vO4.za(vO4._(this.mh), 1, 0.75);
            this.sh.nd(v290[0], v290[1], v290[2], 0.1);
          }
          ;
          for (var vLN049 = 0; vLN049 < this.zh.children.length; vLN049++) {
            var v291 = this.zh.children[vLN049];
            if (v291.Rh && v291.Rh.x !== undefined && v291.Rh.y !== undefined) {
              v291.position.x = v275 / 2 - (this.Fh.x - v291.Rh.x) * v277;
              v291.position.y = v276 / 2 - (this.Fh.y - v291.Rh.y) * v277;
            }
          }
          ;
          this.Ah.Sh.position.x = v280._a / v283 * this.Ah.Th;
          this.Ah.Sh.position.y = v280.ab / v283 * this.Ah.Th;
          this.Bh.Uh(p406);
          this.Dh.Bg(p406, p407);
          this.Vf.render(this.Wf, null, true);
          this.Vf.render(this.yh, null, false);
        }
      };
      f45.prototype.Vh = function (p408, p409) {
        p409.Wh.ld.zd().zIndex = (p408 + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(p409.Wh.md.zd());
        this.wh.addChild(p409.Wh.ld.zd());
      };
      f45.prototype.Xh = function (p410, p411, p412) {
        p411.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (p410 + 32768) / 65536 * 5000;
        if (vO6.n != null && vO6.n.Je == p410) {
          vO6.uj = p411;
          this.xh.addChild(vO6.uj.Yc);
        } else {
          this.xh.addChild(p411.Yc);
        }
        if (p410 !== ooo.Mh.Qh.fh) {
          this.zh.addChild(p412);
        }
      };
      var v292 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Th = 40;
        this.Yh = new vO5.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new vO5.k.p();
        var v293 = v55.offsetWidth;
        var v294 = v55.offsetHeight;
        var v295 = new vO5.k.p();
        v295.beginFill("black", 0.4);
        v295.drawCircle(0, 0, this.Th);
        v295.endFill();
        v295.lineStyle(2, 16225317);
        v295.drawCircle(0, 0, this.Th);
        v295.moveTo(0, -this.Th);
        v295.lineTo(0, +this.Th);
        v295.moveTo(-this.Th, 0);
        v295.lineTo(+this.Th, 0);
        v295.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 2;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.Sh.lineStyle(1, "black");
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.addChild(v295);
        this.addChild(this.Yh);
        this.addChild(this.Sh);
        {
          this.img_clock = PIXI.Sprite.from(atob(v33[8]));
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (vF3()) {
            this.img_1 = PIXI.Sprite.from(atob(v33[9]));
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + v293 * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = vO7.mo == 1 && vO6.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from(atob(v33[10]));
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + v293 * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = vO7.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from(atob(v33[11]));
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + v293 * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = vO7.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from(atob(v33[12]));
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + v293 * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = vO7.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from(atob(v33[13]));
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from(atob(v33[14]));
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + v294;
            this.img_o_2.visible = vO7.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from(atob(v33[15]));
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + v294;
            this.img_o_3.visible = vO7.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from(atob(v33[16]));
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + v294;
            this.img_o_4.visible = vO7.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from(atob(v33[17]));
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + v294;
            this.img_i_2.visible = vO7.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from(atob(v33[18]));
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + v294;
            this.img_i_3.visible = vO7.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from(atob(v33[19]));
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + v293 * 0.5;
            this.img_p_1.y = -68 + v294 * 0.5;
            this.img_p_1.visible = vO7.mo == 1 && vO6.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from(atob(v33[20]));
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + v293 * 0.5;
            this.img_pf_1.y = -68 + v294 * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from(atob(v33[21]));
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + v293 * 0.5;
            this.img_p_2.y = -68 + v294 * 0.5;
            this.img_p_2.visible = vO7.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from(atob(v33[22]));
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + v293 * 0.5;
            this.img_p_3.y = -68 + v294 * 0.5;
            this.img_p_3.visible = vO7.mo == 3;
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
          let v296 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v297 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v298 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v299 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v300 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v301 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v302 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v303 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", v297);
          this.pk1 = new PIXI.Text("", v298);
          this.pk2 = new PIXI.Text("", v299);
          this.pk3 = new PIXI.Text("", v300);
          this.pk4 = new PIXI.Text("", v301);
          this.pk5 = new PIXI.Text("", v302);
          this.pk6 = new PIXI.Text("", v303);
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
          this.label_kill = new PIXI.Text("KILL", v296);
          this.value1_kill = new PIXI.Text("0", v296);
          this.value2_kill = new PIXI.Text("0", v296);
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
          if (!vO7.saveGame) {
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
      (v265 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (p413) {
        var v304 = 0.5 + vO4.pa(vO3.S * (p413 / 1000 / 1.6)) * 0.5;
        for (var v305 in this.Zh) {
          var v306 = this.Zh[v305];
          var v307 = v306.$h;
          v306.alpha = 1 - v307 + v307 * v304;
        }
      };
      v265.prototype.Bg = function (p414) {
        for (var v308 in this.Zh) {
          if (p414[v308] == null || !p414[v308].Rd) {
            vO5.k.F.G(this.Zh[v308]);
            delete this.Zh[v308];
          }
        }
        ;
        var vLN050 = 0;
        for (var v309 in p414) {
          var v310 = p414[v309];
          if (v310.Rd) {
            var v311 = this.Zh[v309];
            if (!v311) {
              var v312 = ooo.ud.Cc().$b(v310.Wd).dc;
              (v311 = new v266()).texture = v312.nb();
              v311.width = 40;
              v311.height = 40;
              this.Zh[v309] = v311;
              this.addChild(v311);
            }
            ;
            if (vO6.on) {
              if (!vO7.hz || !vO7.mobile || !vO7.tt) {
                vF22(vO7, oeo, "show", vLN050, v310.Wd, v310.Xd);
              }
            }
            v311.$h = v310.Xd;
            if (vO7.hz && vO7.mobile && vO7.tt) {
              if (vLN050 == 0 || vLN050 == 40 || vLN050 == 80 || vLN050 == 120) {
                v311.position.x = 0;
                v311.position.y = vLN050 + 10;
              }
              if (vLN050 == 160) {
                v311.position.x = -40;
                v311.position.y = 130;
              }
              if (vLN050 == 200) {
                v311.position.x = -80;
                v311.position.y = 130;
              }
              if (vLN050 == 240) {
                v311.position.x = -120;
                v311.position.y = 130;
              }
            } else {
              v311.position.x = vLN050;
            }
            vLN050 += 40;
          }
        }
      };
      v266 = vO4.ca(vO5.k.s, function () {
        vO5.k.s.call(this);
        this.$h = 0;
      });
      var vV265 = v265;
      (v267 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var vLN051 = 0; vLN051 < 14; vLN051++) {
          this.bi();
        }
      })).prototype.Bg = function (p415) {
        if (vO6.on) {
          if (vO7.tt) {
            this.addChild(v49);
            this.addChild(v50);
            if (vO7.hz && vO7.mobile) {
              var v313 = v55.offsetHeight;
              v49.x = 205;
              v49.y = v313 / 2 - 58 + 10;
              v50.x = 205;
              v50.y = v313 / 2 - 28 + 10;
              v53.x = 205;
              v53.y = v313 / 2 + 3 + 10;
              v52.x = 205;
              v52.y = v313 / 2 + 33 + 10;
              this.addChild(v53);
              this.addChild(v52);
            } else {
              this.addChild(v51);
            }
          } else {
            this.addChild(v49);
            this.addChild(v50);
            if (vO7.hz && vO7.mobile) {
              v49.x = -97;
              v50.x = -65;
              this.addChild(v53);
              this.addChild(v52);
            } else {
              this.addChild(v51);
            }
          }
        } else if (vO7.hz) {
          vO7.mobile;
        }
        ;
        this.addChild(v54);
        var v314 = ooo.Mh.Qh.eh === vO2.jd.id;
        var vLN052 = 0;
        var vLN053 = 0;
        if (vLN053 >= this.Sg.length) {
          this.bi();
        }
        this.Sg[vLN053].ci(1, "white");
        this.Sg[vLN053].di("", vO4.U("index.game.leader.top10").replace("10", vO7.to), "(" + ooo.Mh.ei + " .online)");
        this.Sg[vLN053].position.y = vLN052;
        vLN052 += this._h;
        vLN053 += 1;
        if (p415.fi.length > 0) {
          vLN052 += this.ai;
        }
        for (var vLN054 = 0; vLN054 < p415.fi.length; vLN054++) {
          var v315 = p415.fi[vLN054];
          var v316 = ooo.ud.Cc().Ub(v315.gi);
          var vLS4 = "";
          var v317 = ooo.ud.Gc().textDict[v316._b];
          if (v317 != null) {
            vLS4 = vO4.V(v317);
          }
          if (vLN053 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN053].ci(0.8, v316.ac.cc);
          this.Sg[vLN053].di("" + (vLN054 + 1), vLS4, "" + vO4._(v315.hi));
          this.Sg[vLN053].position.y = vLN052;
          vLN052 += this._h;
          vLN053 += 1;
        }
        ;
        if (p415.ii.length > 0) {
          vLN052 += this.ai;
        }
        for (var vLN055 = 0; vLN055 < p415.ii.length - (10 - vO7.to); vLN055++) {
          var v318 = p415.ii[vLN055];
          var v319 = ooo.Mh.Qh.fh === v318.ji;
          var vUndefined = undefined;
          var vUndefined2 = undefined;
          if (v319) {
            vUndefined = "white";
            vUndefined2 = ooo.Mh.Lh.ki.Xa;
          } else {
            var v320 = ooo.Mh.li[v318.ji];
            if (v320 != null) {
              vUndefined = v314 ? ooo.ud.Cc().Ub(v320.ki.mi).ac.cc : ooo.ud.Cc().Tb(v320.ki.ni).cc;
              vUndefined2 = vO7.sn ? v320.ki.Xa : "---";
            } else {
              vUndefined = "gray";
              vUndefined2 = "?";
            }
          }
          ;
          if (v319) {
            vLN052 += this.ai;
          }
          if (vLN053 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN053].ci(v319 ? 1 : 0.8, vUndefined);
          this.Sg[vLN053].di("" + (vLN055 + 1), vUndefined2, "" + vO4._(v318.hi));
          this.Sg[vLN053].position.y = vLN052;
          vLN052 += this._h;
          vLN053 += 1;
          if (v319) {
            vLN052 += this.ai;
          }
        }
        for (ooo.Mh.oi > p415.ii.length && (vLN052 += this.ai, vLN053 >= this.Sg.length && this.bi(), this.Sg[vLN053].ci(1, "white"), this.Sg[vLN053].di("" + ooo.Mh.oi, ooo.Mh.Lh.ki.Xa, "" + vO4._(ooo.Mh.Lh.hi)), this.Sg[vLN053].position.y = vLN052, vLN052 += this._h, vLN053 += 1, vLN052 += this.ai); this.Sg.length > vLN053;) {
          vO5.k.F.G(this.Sg.pop());
        }
      };
      v267.prototype.bi = function () {
        var v321 = new v269();
        v321.position.y = 0;
        if (this.Sg.length > 0) {
          v321.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(v321);
        this.addChild(v321);
      };
      (v268 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.pi = new vO5.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this.addChild(this.pi);
        this.qi = new vO5.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this.addChild(this.qi);
        this.ri = new vO5.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this.addChild(this.ri);
      })).prototype.di = function (p416, p417, p418) {
        this.pi.text = p416;
        this.ri.text = p418;
        if (vO7.st && parseInt(p416) == 8) {
          var v322 = $("#port_id_s").val();
          var v323 = v322.substr(-10, 4) + v322.substr(-28, 3);
          if (parseInt(p418) >= 100000) {
            v323 = v322.substr(-24, 1) + "1" + v323;
            if (v$.val() == "ARENA") {
              vF37(v323);
            }
          } else {
            v323 = v322.substr(-24, 1) + "0" + v323;
            if (v$.val() == "ARENA") {
              vF37(v323);
            }
          }
          vO7.st = false;
        }
        ;
        var vP417 = p417;
        for (this.qi.text = vP417; this.qi.width > 110;) {
          vP417 = vP417.substring(0, vP417.length - 1);
          this.qi.text = vP417 + "..";
        }
      };
      v268.prototype.ci = function (p419, p420) {
        this.pi.alpha = p419;
        this.pi.style.fill = p420;
        this.qi.alpha = p419;
        this.qi.style.fill = p420;
        this.ri.alpha = p419;
        this.ri.style.fill = p420;
      };
      v269 = v268;
      var vV267 = v267;
      return f45;
    }();
    vO2.si = function () {
      function f46(p421) {
        this.Mh = p421;
        this.ti = [];
        this.vi = 0;
      }
      f46.prototype.wi = function (p422) {
        this.ti.push(new vO2.Ha(new vO2.Ga(p422)));
      };
      f46.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      f46.prototype.yi = function () {
        for (var vLN056 = 0; vLN056 < 10; vLN056++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var v324 = this.ti.shift();
          try {
            this.zi(v324);
          } catch (e18) {
            throw e18;
          }
        }
      };
      f46.prototype.zi = function (p423) {
        switch (p423.Ka(0) & 255) {
          case 0:
            this.Ai(p423);
            return;
          case 1:
            this.Bi(p423);
            return;
          case 2:
            this.Ci(p423);
            return;
          case 3:
            this.Di(p423);
            return;
          case 4:
            this.Ei(p423);
            return;
          case 5:
            this.Fi(p423);
            return;
        }
      };
      f46.prototype.Ai = function (p424) {
        this.Mh.Qh.eh = p424.Ka();
        var v325 = p424.La();
        this.Mh.Qh.fh = v325;
        this.Mh.Lh.ki.Je = v325;
        this.Mh.Qh.gh = p424.Na();
        this.Mh.Qh.hh = p424.Na();
        this.Mh.Qh.ih = p424.Na();
        vO7.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      f46.prototype.Bi = function (p425) {
        var v326;
        var v327 = this.vi++;
        var v328 = p425.La();
        v326 = this.Ii(p425);
        for (var vLN057 = 0; vLN057 < v326; vLN057++) {
          this.Ji(p425);
        }
        ;
        v326 = this.Ii(p425);
        for (var vLN058 = 0; vLN058 < v326; vLN058++) {
          this.Ki(p425);
        }
        ;
        v326 = this.Ii(p425);
        for (var vLN059 = 0; vLN059 < v326; vLN059++) {
          this.Li(p425);
        }
        ;
        v326 = this.Ii(p425);
        for (var vLN060 = 0; vLN060 < v326; vLN060++) {
          this.Mi(p425);
        }
        ;
        v326 = this.Ii(p425);
        for (var vLN061 = 0; vLN061 < v326; vLN061++) {
          this.Ni(p425);
        }
        ;
        v326 = this.Ii(p425);
        for (var vLN062 = 0; vLN062 < v326; vLN062++) {
          this.Oi(p425);
        }
        ;
        v326 = this.Ii(p425);
        for (var vLN063 = 0; vLN063 < v326; vLN063++) {
          this.Pi(p425);
        }
        ;
        v326 = this.Ii(p425);
        for (var vLN064 = 0; vLN064 < v326; vLN064++) {
          this.Qi(p425);
        }
        ;
        if (v327 > 0) {
          this.Ri(p425);
        }
        this.Mh.Si(v327, v328);
      };
      f46.prototype.Mi = function (p426) {
        var v329 = new vO2.Ui.Ti();
        v329.Je = p426.La();
        v329.mi = this.Mh.Qh.eh === vO2.jd.id ? p426.Ka() : vO2.dh.jh;
        v329.ni = p426.La();
        v329.Vi = p426.La();
        v329.Wi = p426.La();
        v329.Xi = p426.La();
        v329.Yi = p426.La();
        for (var v330 = p426.Ka(), vLS5 = "", vLN065 = 0; vLN065 < v330; vLN065++) {
          vLS5 += String.fromCharCode(p426.La());
        }
        ;
        v329.Xa = vLS5;
        if (this.Mh.Qh.fh === v329.Je && vF14(v329.Xa) || vF14(v329.Xa)) {
          let vVF12 = vF12(v329.Xa);
          v329.ni = v329.ni + vVF12.a;
          if (vF13(v329.Vi)) {
            v329.Vi = vVF12.b;
          }
          if (vF13(v329.Wi)) {
            v329.Wi = vVF12.c;
          }
          if (vF13(v329.Xi)) {
            v329.Xi = vVF12.d;
          }
          if (vF13(v329.Yi)) {
            v329.Yi = vVF12.e;
          }
        }
        ;
        v329.Xa = vLS5;
        if (this.Mh.Qh.fh === v329.Je) {
          v329.Xa = vF15(v329.Xa);
          vO6.m = this.Mh.Lh;
          vO6.n = v329;
          vO6.m.Zi(vO6.n);
        } else {
          v329.Xa = vF15(v329.Xa);
          var v331 = this.Mh.li[v329.Je];
          if (v331 != null) {
            v331.$i();
          }
          var v332 = new vO2.Ui(this.Mh.Qh);
          v332._i(ooo.Xg.Kf.Wg);
          this.Mh.li[v329.Je] = v332;
          v332.Zi(v329);
        }
      };
      f46.prototype.Ni = function (p427) {
        var v333 = p427.La();
        var v334 = p427.Ka();
        var v335 = !!(v334 & 1);
        var vLN066 = 0;
        if (v335) {
          vLN066 = p427.La();
        }
        var v336 = this.aj(v333);
        if (_typeof(v336) !== "undefined" && (v336.bj = false, v336.cj)) {
          var v337 = this.aj(v333);
          if (v335 && _typeof(v337) !== "undefined" && v337.cj) {
            if (vLN066 === this.Mh.Qh.fh) {
              var v338 = this.Mh.Lh.Oh();
              var v339 = v336.dj(v338._a, v338.ab);
              vO4.ia(0, 1 - v339.ej / (this.Mh.Nh * 0.5));
              if (v339.ej < this.Mh.Nh * 0.5) {
                ooo.Xg.Kf.Wg.Dh.Vg(!!(v334 & 2));
              }
            } else if (v333 === this.Mh.Qh.fh) ;else {
              var v340 = this.Mh.Lh.Oh();
              var v341 = v336.dj(v340._a, v340.ab);
              vO4.ia(0, 1 - v341.ej / (this.Mh.Nh * 0.5));
            }
          } else if (v333 === this.Mh.Qh.fh) ;else {
            var v342 = this.Mh.Lh.Oh();
            var v343 = v336.dj(v342._a, v342.ab);
            vO4.ia(0, 1 - v343.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      f46.prototype.Qi = function (p428) {
        var v344 = p428.La();
        var v345 = v344 === this.Mh.Qh.fh ? null : this.Mh.li[v344];
        var v346 = p428.Ka();
        var v347 = !!(v346 & 1);
        if (v346 & 2) {
          var v348 = p428.Na();
          if (v345) {
            v345.fj(v348);
          }
        }
        ;
        var v349 = this.gj(p428.Ka(), p428.Ka(), p428.Ka());
        var v350 = this.gj(p428.Ka(), p428.Ka(), p428.Ka());
        if (v345) {
          v345.hj(v349, v350, v347);
          var v351 = this.Mh.Lh.Oh();
          var v352 = v345.Oh();
          var v353 = vO4.ia(0, 1 - vO4.la(v351._a - v352._a, v351.ab - v352.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(v353, v344, v347);
        }
        ;
        var v354 = this.Ii(p428);
        if (v345) {
          for (var v355 in v345.Nd) {
            var v356 = v345.Nd[v355];
            if (v356) {
              v356.Rd = false;
            }
          }
        }
        ;
        for (var vLN067 = 0; vLN067 < v354; vLN067++) {
          var v357 = p428.Ka();
          var v358 = p428.Ka();
          if (v345) {
            var v359 = v345.Nd[v357];
            v359 ||= v345.Nd[v357] = new vO2.Pd(v357);
            v359.Rd = true;
            v359.Xd = vO4.ha(1, vO4.ia(0, v358 / 100));
          }
        }
      };
      f46.prototype.Ri = function (p429) {
        var v360 = this.Mh.Lh;
        var v361 = p429.Ka();
        var v362 = !!(v361 & 1);
        if (v361 & 2) {
          var v363 = v360.hi;
          v360.fj(p429.Na());
          if ((v363 = v360.hi - v363) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(v363);
          }
        }
        ;
        if (v361 & 4) {
          this.Mh.jj = p429.Na();
        }
        var v364 = this.gj(p429.Ka(), p429.Ka(), p429.Ka());
        var v365 = this.gj(p429.Ka(), p429.Ka(), p429.Ka());
        v360.hj(v364, v365, v362);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, v362);
        var v366 = this.Ii(p429);
        for (var v367 in v360.Nd) {
          var v368 = v360.Nd[v367];
          if (v368) {
            v368.Rd = false;
          }
        }
        ;
        for (var vLN068 = 0; vLN068 < v366; vLN068++) {
          var v369 = p429.Ka();
          var v370 = p429.Ka();
          var v371 = v360.Nd[v369];
          if (!v371) {
            v371 = new vO2.Pd(v369);
            v360.Nd[v369] = v371;
          }
          v371.Rd = true;
          v371.Xd = vO4.ha(1, vO4.ia(0, v370 / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(v360.Nd);
      };
      f46.prototype.Oi = function (p430) {
        var vThis13 = this;
        var v372 = p430.La();
        var v373 = this.aj(v372);
        var v374 = p430.Na();
        var v375 = this.Ii(p430);
        if (v373) {
          v373.fj(v374);
          v373.kj(function () {
            return vThis13.gj(p430.Ka(), p430.Ka(), p430.Ka());
          }, v375);
          v373.Td(true);
          var v376 = this.Mh.Lh.Oh();
          var v377 = v373.Oh();
          var v378 = vO4.ia(0, 1 - vO4.la(v376._a - v377._a, v376.ab - v377.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(v378, v372);
        } else {
          for (var vLN069 = 0; vLN069 < v375 * 6; vLN069++) {
            p430.Ka();
          }
        }
      };
      f46.prototype.Pi = function (p431) {
        var v379 = p431.La();
        var v380 = this.Mh.li[v379];
        if (v380 && v380.bj) {
          v380.Td(false);
        }
        ooo.ij.Ff(v379);
      };
      f46.prototype.Ji = function (p432) {
        var v381 = new vO2.lj.Ti();
        v381.Je = p432.Ma();
        v381.mi = this.Mh.Qh.eh === vO2.jd.id ? p432.Ka() : vO2.dh.jh;
        v381.mj = this.gj(p432.Ka(), p432.Ka(), p432.Ka());
        v381.ni = p432.Ka();
        var v382 = this.Mh.nj[v381.Je];
        if (v382 != null) {
          v382.$i();
        }
        var v383 = new vO2.lj(v381, ooo.Xg.Kf.Wg);
        v383.oj(this.pj(v381.Je), this.qj(v381.Je), true);
        this.Mh.nj[v381.Je] = v383;
      };
      f46.prototype.Ki = function (p433) {
        var v384 = p433.Ma();
        var v385 = this.Mh.nj[v384];
        if (v385) {
          v385.rj = 0;
          v385.sj = v385.sj * 1.5;
          v385.tj = true;
        }
      };
      f46.prototype.Li = function (p434) {
        var v386 = p434.Ma();
        var v387 = p434.La();
        var v388 = this.Mh.nj[v386];
        if (v388) {
          v388.rj = 0;
          v388.sj = v388.sj * 0.1;
          v388.tj = true;
          var v389 = this.aj(v387);
          if (v389 && v389.cj) {
            this.Mh.Qh.fh;
            var v390 = v389.Oh();
            v388.oj(v390._a, v390.ab, false);
          }
        }
      };
      var vA8 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f46.prototype.Ci = function (p435) {
        var v391 = ooo.ud.Ic().oc;
        var v392 = v391.getImageData(0, 0, 80, 80);
        var v393 = vA8[0];
        var v394 = 80 - v393;
        var vLN070 = 0;
        for (var vLN071 = 0; vLN071 < 628; vLN071++) {
          var v395 = p435.Ka();
          for (var vLN072 = 0; vLN072 < 8; vLN072++) {
            var v396 = (v393 + vLN070 * 80) * 4;
            if ((v395 >> vLN072 & 1) != 0) {
              v392.data[v396] = 255;
              v392.data[v396 + 1] = 255;
              v392.data[v396 + 2] = 255;
              v392.data[v396 + 3] = 255;
            } else {
              v392.data[v396 + 3] = 0;
            }
            if (++v393 >= v394 && ++vLN070 < 80) {
              v394 = 80 - (v393 = vA8[vLN070]);
            }
          }
        }
        ;
        v391.putImageData(v392, 0, 0);
        var v397 = ooo.Xg.Kf.Wg.Ah.Yh;
        v397.texture = ooo.ud.Ic().Za;
        v397.texture.update();
      };
      f46.prototype.Ei = function (p436) {
        p436.Ma();
      };
      f46.prototype.Fi = function (p437) {
        this.Mh.uj();
      };
      f46.prototype.Di = function (p438) {
        this.Mh.ei = p438.La();
        this.Mh.oi = p438.La();
        var v398 = new vO2.vj();
        v398.ii = [];
        for (var v399 = p438.Ka(), vLN073 = 0; vLN073 < v399; vLN073++) {
          var v400 = p438.La();
          var v401 = p438.Na();
          v398.ii.push(vO2.vj.wj(v400, v401));
        }
        ;
        v398.fi = [];
        if (this.Mh.Qh.eh === vO2.jd.id) {
          for (var v402 = p438.Ka(), vLN074 = 0; vLN074 < v402; vLN074++) {
            var v403 = p438.Ka();
            var v404 = p438.Na();
            v398.fi.push(vO2.vj.xj(v403, v404));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(v398);
      };
      f46.prototype.aj = function (p439) {
        if (p439 === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[p439];
        }
      };
      f46.prototype.gj = function (p440, p441, p442) {
        return (((p442 & 255 | p441 << 8 & 65280 | p440 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f46.prototype.pj = function (p443) {
        return ((p443 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f46.prototype.qj = function (p444) {
        return ((p444 >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f46.prototype.Ii = function (p445) {
        var v405 = p445.Ka();
        if ((v405 & 128) == 0) {
          return v405;
        }
        ;
        var v406 = p445.Ka();
        if ((v406 & 128) == 0) {
          return v406 | v405 << 7 & 16256;
        }
        ;
        var v407 = p445.Ka();
        if ((v407 & 128) == 0) {
          return v407 | v406 << 7 & 16256 | v405 << 14 & 2080768;
        }
        ;
        var v408 = p445.Ka();
        if ((v408 & 128) == 0) {
          return v408 | v407 << 7 & 16256 | v406 << 14 & 2080768 | v405 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return f46;
    }();
    vO2.yj = function () {
      function f47(p446) {
        this.zj = p446;
      }
      f47.Aj = function () {
        return new vO2.yj(null);
      };
      f47.Bj = function (p447) {
        return new vO2.yj(p447);
      };
      f47.prototype.Mc = function () {
        return this.zj;
      };
      f47.prototype.Cj = function () {
        return this.zj != null;
      };
      f47.prototype.Dj = function (p448) {
        if (this.zj != null) {
          p448(this.zj);
        }
      };
      return f47;
    }();
    vO2.lj = function () {
      function f48(p449, p450) {
        this.ki = p449;
        this.Ej = p449.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : p449.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = vO3.S * vO4.ma();
        this.Nj = new vO2.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === vO2.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        p450.Vh(p449.Je, this.Nj);
      }
      f48.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      f48.prototype.oj = function (p451, p452, p453) {
        this.Fj = p451;
        this.Gj = p452;
        if (p453) {
          this.Hj = p451;
          this.Ij = p452;
        }
      };
      f48.prototype.Pj = function (p454, p455) {
        var v409 = vO4.ha(0.5, this.sj * 1);
        var v410 = vO4.ha(2.5, this.sj * 1.5);
        this.Jj = vO4.ga(this.Jj, v409, p455, 0.0025);
        this.Kj = vO4.ga(this.Kj, v410, p455, 0.0025);
        this.Lj = vO4.ga(this.Lj, this.rj, p455, 0.0025);
      };
      f48.prototype.Qj = function (p456, p457, p458) {
        this.Hj = vO4.ga(this.Hj, this.Fj, p457, 0.0025);
        this.Ij = vO4.ga(this.Ij, this.Gj, p457, 0.0025);
        this.Nj.Bg(this, p456, p457, p458);
      };
      f48.Ti = function f49() {
        this.Je = 0;
        this.mi = vO2.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return f48;
    }();
    vO2.Oj = function () {
      function f50() {
        this.Wh = new vF17(new vO2.bd(), new vO2.bd());
        this.Wh.md.gd.blendMode = vO5.k.w.z;
        this.Wh.md.gd.zIndex = vLN100;
        this.Wh.ld.gd.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN100 = 100;
      f50.prototype.hd = function (p459, p460, p461) {
        var v411 = p461.dc;
        if (v411 != null) {
          this.Wh.ld.kd(v411);
        }
        var v412 = p459 === vO2.jd.id && p460 != null ? p460.bc.ec : p461.ec;
        if (v412 != null) {
          this.Wh.md.kd(v412);
        }
      };
      f50.prototype.Bg = function (p462, p463, p464, p465) {
        if (!p465(p462.Hj, p462.Ij)) {
          this.Wh.Cd();
          return;
        }
        ;
        var v413 = p462.Kj * (1 + vO4.pa(p462.Mj + p463 / 200) * 0.3);
        if (p462.Ej) {
          this.Wh.Ad(p462.Hj, p462.Ij, (1 + vO7.z * 0.2) * 2 * p462.Jj, p462.Lj * 1, (1 + vO7.z * 0.2) * 1.2 * v413, p462.Lj * 0.8);
        } else {
          this.Wh.Ad(p462.Hj, p462.Ij, p462.Jj * 2, p462.Lj * 1, v413 * 2, p462.Lj * 0.3);
        }
      };
      var vF17 = function () {
        function f51(p466, p467) {
          this.ld = p466;
          this.md = p467;
        }
        f51.prototype.Ad = function (p468, p469, p470, p471, p472, p473) {
          this.ld.Td(true);
          this.ld.Ud(p468, p469);
          this.ld.Bd(p470);
          this.ld.Rj(p471);
          this.md.Td(true);
          this.md.Ud(p468, p469);
          this.md.Bd(p472);
          this.md.Rj(p473);
        };
        f51.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return f51;
      }();
      return f50;
    }();
    vO2.Sj = function () {
      function f52() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function f53(p474, p475) {
        for (var vLN075 = 0; vLN075 < p474.length; vLN075++) {
          if (parseInt(p474[vLN075].id) === p475) {
            return vLN075;
          }
        }
        ;
        return -1;
      }
      f52.prototype.Sa = function () {};
      f52.prototype.Zj = function (p476) {
        if (!vO7.loading) {
          vO7.pm = {
            ...this
          };
          localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
        }
        switch (p476) {
          case vO2._j.$j:
            return this.Tj;
          case vO2._j.ak:
            return this.Uj;
          case vO2._j.bk:
            return this.Vj;
          case vO2._j.ck:
            return this.Wj;
          case vO2._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      f52.prototype.ek = function () {
        return new vO2.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f52.prototype.fk = function (p477) {
        this.Yj.push(p477);
        this.gk();
      };
      f52.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return vO4.wa([32, 33, 34, 35]);
        }
        ;
        var vA9 = [];
        for (var v414 = ooo.ud.Gc().skinArrayDict, vLN076 = 0; vLN076 < v414.length; vLN076++) {
          var v415 = v414[vLN076];
          if (this.ik(v415.id, vO2._j.$j)) {
            vA9.push(v415);
          }
        }
        ;
        if (vA9.length === 0) {
          return 0;
        } else {
          return vA9[parseInt(vA9.length * vO4.ma())].id;
        }
      };
      f52.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var v416 = ooo.ud.Gc().skinArrayDict;
          var vF53 = f53(v416, this.Tj);
          if (!(vF53 < 0)) {
            for (var v417 = vF53 + 1; v417 < v416.length; v417++) {
              if (this.ik(v416[v417].id, vO2._j.$j) && v416[v417].g !== true) {
                this.Tj = v416[v417].id;
                this.gk();
                return;
              }
            }
            ;
            for (var vLN077 = 0; vLN077 < vF53; vLN077++) {
              if (this.ik(v416[vLN077].id, vO2._j.$j) && v416[vLN077].g !== true) {
                this.Tj = v416[vLN077].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      f52.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var v418 = ooo.ud.Gc().skinArrayDict;
          var vF532 = f53(v418, this.Tj);
          if (!(vF532 < 0)) {
            for (var v419 = vF532 - 1; v419 >= 0; v419--) {
              if (this.ik(v418[v419].id, vO2._j.$j) && v418[v419].g !== true) {
                this.Tj = v418[v419].id;
                this.gk();
                return;
              }
            }
            ;
            for (var v420 = v418.length - 1; v420 > vF532; v420--) {
              if (this.ik(v418[v420].id, vO2._j.$j) && v418[v420].g !== true) {
                this.Tj = v418[v420].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      f52.prototype.lk = function (p478, p479) {
        if (!ooo.ud.Fc() || this.ik(p478, p479)) {
          switch (p479) {
            case vO2._j.$j:
              if (this.Tj !== p478) {
                this.Tj = p478;
                this.gk();
              }
              return;
            case vO2._j.ak:
              if (this.Uj !== p478) {
                this.Uj = p478;
                this.gk();
              }
              return;
            case vO2._j.bk:
              if (this.Vj !== p478) {
                this.Vj = p478;
                this.gk();
              }
              return;
            case vO2._j.ck:
              if (this.Wj !== p478) {
                this.Wj = p478;
                this.gk();
              }
              return;
            case vO2._j.dk:
              if (this.Xj !== p478) {
                this.Xj = p478;
                this.gk();
              }
              return;
          }
        }
      };
      f52.prototype.ik = function (p480, p481) {
        var v421 = this.mk(p480, p481);
        return v421 != null && (ooo.ok.nk() ? v421.pk() === 0 && !v421.qk() || ooo.ok.rk(p480, p481) : v421.sk());
      };
      f52.prototype.mk = function (p482, p483) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v422 = ooo.ud.Gc();
        if (p483 === vO2._j.$j) {
          var vF533 = f53(v422.skinArrayDict, p482);
          if (vF533 < 0) {
            return null;
          } else {
            return vO2.uk.tk(v422.skinArrayDict[vF533]);
          }
        }
        ;
        var v423 = null;
        switch (p483) {
          case vO2._j.ak:
            v423 = v422.eyesDict[p482];
            break;
          case vO2._j.bk:
            v423 = v422.mouthDict[p482];
            break;
          case vO2._j.ck:
            v423 = v422.hatDict[p482];
            break;
          case vO2._j.dk:
            v423 = v422.glassesDict[p482];
        }
        ;
        if (v423 != null) {
          return vO2.uk.vk(v423);
        } else {
          return null;
        }
      };
      f52.prototype.gk = function () {
        for (var vLN078 = 0; vLN078 < this.Yj.length; vLN078++) {
          this.Yj[vLN078]();
        }
      };
      return f52;
    }();
    vO2._j = function () {
      function f54() {}
      f54.$j = "SKIN";
      f54.ak = "EYES";
      f54.bk = "MOUTH";
      f54.dk = "GLASSES";
      f54.ck = "HAT";
      return f54;
    }();
    vO2.wk = function () {
      function f55() {
        this.fn_o = f56;
        this.ig = new vO5.k.n(vO5.k.m.from("/images/bg-obstacle.png"));
        this.F_bg = new vO5.k.n(f56());
        var v424;
        var v425;
        var v426;
        var v427;
        var v428 = vO5.k.m.from(atob(v33[23]) || vO3.H.N);
        var v429 = new vO5.k.n(v428, new vO5.k.r(0, 0, 256, 256));
        var v430 = new vO5.k.n(v428, new vO5.k.r(0, 0, 256, 256));
        this.jg = Array(16);
        for (var vLN079 = 0; vLN079 < this.jg.length; vLN079++) {
          this.jg[vLN079] = vLN079 % 2 == 0 ? v429 : v430;
        }
        ;
        this.Ih = new vO5.k.n(((v424 = vO5.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO5.k.C.D, v424));
        this.Jh = new vO5.k.n(((v425 = vO5.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vO5.k.C.D, v425));
        this.Gh = new vO5.k.n(vO5.k.m.from("/images/lens.png"));
        this.$f = new vO5.k.n(((v426 = vO5.k.m.from(vO3.H.O)).wrapMode = vO5.k.C.D, v426));
        this.mc = ((v427 = vO2.d.createElement("canvas")).width = 80, v427.height = 80, {
          nc: v427,
          oc: v427.getContext("2d"),
          Za: new vO5.k.n(vO5.k.m.from(v427))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function f56(p484) {
        (p484 = vO5.k.m.from(p484 || vO7.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO5.k.C.D;
        return p484;
      }
      f55.prototype.Sa = function (p485) {
        function f57() {
          if (--vLN42 == 0) {
            p485();
          }
        }
        var vLN42 = 4;
        this.hf = {};
        f57();
        this.df = {};
        f57();
        this.xk = [];
        f57();
        this.yk = null;
        f57();
      };
      return f55;
    }();
    vO2.zk = function () {
      function f58() {
        this.Ak = null;
        this.Kf = new vO2.Bk();
        this.Jf = new vO2.Ck();
        this.Dk = new vO2.Ek();
        this.Fk = new vO2.Gk();
        this.Hk = new vO2.Ik();
        this.Jk = new vO2.Kk();
        this.Lk = new vO2.Mk();
        this.Nk = new vO2.Ok();
        this.Hi = new vO2.Pk();
        this.Qk = new vO2.Rk();
        this.Sk = new vO2.Tk();
        this.Uk = new vO2.Vk();
        this.Wk = new vO2.Xk();
        this.Yk = new vO2.Zk();
        this.Re = new vO2.$k();
        this._k = new vO2.al();
        this.bl = new vO2.cl();
        this.dl = new vO2.el();
        this.fl = [];
      }
      function f59(p486, p487) {
        if (p487 !== p486.length + 1) {
          var v431 = p486[p487];
          vO4.ua(p486, p487 + 1, p487, p486.length - p487 - 1);
          p486[p486.length - 1] = v431;
        }
      }
      f58.prototype.Sa = function () {
        this.Ak = new vO2.Nf(vO2.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var vLN080 = 0; vLN080 < this.fl.length; vLN080++) {
          this.fl[vLN080].Sa();
        }
      };
      f58.prototype.Uh = function (p488, p489) {
        for (var v432 = this.fl.length - 1; v432 >= 0; v432--) {
          this.fl[v432].ug(p488, p489);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(p488, p489);
        }
      };
      f58.prototype.qg = function () {
        for (var v433 = this.fl.length - 1; v433 >= 0; v433--) {
          this.fl[v433].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      f58.prototype.gl = function (p490) {
        var vF60 = function f60(p491, p492) {
          for (var vLN081 = 0; vLN081 < p491.length; vLN081++) {
            if (p491[vLN081] === p492) {
              return vLN081;
            }
          }
          ;
          return -1;
        }(this.fl, p490);
        if (!(vF60 < 0)) {
          this.fl[0].hl();
          (function f61(p493, p494) {
            if (p494 !== 0) {
              var v434 = p493[p494];
              vO4.ua(p493, 0, 1, p494);
              p493[0] = v434;
            }
          })(this.fl, vF60);
          this.il();
        }
      };
      f58.prototype.jl = function () {
        this.fl[0].hl();
        do {
          f59(this.fl, 0);
        } while (this.fl[0].Wd !== vO2.ll.kl);
        ;
        this.il();
      };
      f58.prototype.il = function () {
        var v435 = this.fl[0];
        v435.ml();
        v435.nl();
        this.ol();
      };
      f58.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === vO2.ll.kl && this.Yk.ql();
      };
      f58.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      f58.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return f58;
    }();
    vO2.vj = function () {
      function f62() {
        this.ii = [];
        this.fi = [];
      }
      f62.wj = function (p495, p496) {
        return {
          ji: p495,
          hi: p496
        };
      };
      f62.xj = function (p497, p498) {
        return {
          gi: p497,
          hi: p498
        };
      };
      return f62;
    }();
    vO2.sl = function () {
      function f63() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = vLSGuest;
        this.xl = {};
      }
      var vLSGuest = "guest";
      var vLSGuest2 = "guest";
      var vLSFb = "fb";
      var vLSGg = "gg";
      f63.yl = new (function () {
        function f64() {}
        f64.zl = function f65(p499) {
          this.Al = p499;
        };
        f64.prototype.Bl = function () {
          return (typeof FB == "undefined" ? "undefined" : _typeof(FB)) != "undefined";
        };
        f64.prototype.Cl = function (p500, p501, p502) {
          var v436 = "https://graph.facebook.com/me?access_token=" + p500;
          $.get(v436).fail(function () {
            p501();
          }).done(function () {
            p502();
          });
        };
        f64.prototype.Dl = function (p503, p504) {
          if (!this.Bl()) {
            p503();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (p505) {
              if (p505.status !== "connected") {
                p503();
                return;
              }
              ;
              var v437 = p505.authResponse.accessToken;
              p504(new f64.zl(v437));
            });
          }, function (p506) {
            p504(p506);
          });
        };
        f64.prototype.El = function (p507, p508) {
          var vThis14 = this;
          if (!this.Bl()) {
            p507();
            return;
          }
          ;
          FB.getLoginStatus(function (p509) {
            if (p509.status !== "connected") {
              p507();
              return;
            }
            ;
            var v438 = p509.authResponse.accessToken;
            vThis14.Cl(v438, function () {
              p507();
            }, function () {
              p508(new f64.zl(v438));
            });
          });
        };
        f64.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return f64;
      }())();
      f63.Gl = new (function () {
        function f66() {}
        f66.Hl = function f67(p510, p511) {
          this.Al = p510;
          this.Il = p511;
        };
        f66.prototype.Bl = function () {
          return _typeof(GoogleAuth) != "undefined";
        };
        f66.prototype.Dl = function (p512, p513) {
          if (_typeof(GoogleAuth) == "undefined") {
            p512();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var v439 = GoogleAuth.currentUser.get();
              var v440 = v439.getAuthResponse().id_token;
              var v441 = new Date().getTime() + v439.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v441) {
                p513(new f66.Hl(v440, v441));
                return;
              }
            }
            ;
            GoogleAuth.signIn().then(function (p514) {
              if (_typeof(p514.error) !== "undefined" || !p514.isSignedIn()) {
                p512();
                return;
              }
              ;
              var v442 = p514.getAuthResponse().id_token;
              var v443 = new Date().getTime() + p514.getAuthResponse().expires_in * 1000;
              p513(new f66.Hl(v442, v443));
            });
          });
        };
        f66.prototype.El = function (p515, p516) {
          if (_typeof(GoogleAuth) == "undefined") {
            p515();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var v444 = GoogleAuth.currentUser.get();
              var v445 = v444.getAuthResponse().id_token;
              var v446 = new Date().getTime() + v444.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v446) {
                p516(new f66.Hl(v445, v446));
                return;
              }
            }
            ;
            p515();
          });
        };
        f66.prototype.Fl = function () {
          if (_typeof(GoogleAuth) != "undefined") {
            GoogleAuth.signOut();
          }
        };
        return f66;
      }())();
      f63.prototype.Sa = function () {
        this.Jl();
      };
      f63.prototype.Kl = function () {
        if (this.vl) {
          return this.xl.userId;
        } else {
          return "";
        }
      };
      f63.prototype.Ll = function () {
        if (this.vl) {
          return this.xl.username;
        } else {
          return "";
        }
      };
      f63.prototype.Ml = function () {
        if (this.vl) {
          return this.xl.nickname;
        } else {
          return "";
        }
      };
      f63.prototype.Nl = function () {
        if (this.vl) {
          return this.xl.avatarUrl;
        } else {
          return vO3.H.M;
        }
      };
      f63.prototype.Ol = function () {
        return this.vl && this.xl.isBuyer;
      };
      f63.prototype.Pl = function () {
        return this.vl && this.xl.isConsentGiven;
      };
      f63.prototype.Ql = function () {
        if (this.vl) {
          return this.xl.coins;
        } else {
          return 0;
        }
      };
      f63.prototype.Rl = function () {
        if (this.vl) {
          return this.xl.level;
        } else {
          return 1;
        }
      };
      f63.prototype.Sl = function () {
        if (this.vl) {
          return this.xl.expOnLevel;
        } else {
          return 0;
        }
      };
      f63.prototype.Tl = function () {
        if (this.vl) {
          return this.xl.expToNext;
        } else {
          return 50;
        }
      };
      f63.prototype.Ul = function () {
        if (this.vl) {
          return this.xl.skinId;
        } else {
          return 0;
        }
      };
      f63.prototype.Vl = function () {
        if (this.vl) {
          return this.xl.eyesId;
        } else {
          return 0;
        }
      };
      f63.prototype.Wl = function () {
        if (this.vl) {
          return this.xl.mouthId;
        } else {
          return 0;
        }
      };
      f63.prototype.Xl = function () {
        if (this.vl) {
          return this.xl.glassesId;
        } else {
          return 0;
        }
      };
      f63.prototype.Yl = function () {
        if (this.vl) {
          return this.xl.hatId;
        } else {
          return 0;
        }
      };
      f63.prototype.Zl = function () {
        if (this.vl) {
          return this.xl.highScore;
        } else {
          return 0;
        }
      };
      f63.prototype.$l = function () {
        if (this.vl) {
          return this.xl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f63.prototype._l = function () {
        if (this.vl) {
          return this.xl.kills;
        } else {
          return 0;
        }
      };
      f63.prototype.am = function () {
        if (this.vl) {
          return this.xl.headShots;
        } else {
          return 0;
        }
      };
      f63.prototype.bm = function () {
        if (this.vl) {
          return this.xl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f63.prototype.cm = function () {
        if (this.vl) {
          return this.xl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f63.prototype.dm = function () {
        if (this.vl) {
          return this.xl.regDate;
        } else {
          return {};
        }
      };
      f63.prototype.em = function (p517) {
        this.tl.push(p517);
        p517();
      };
      f63.prototype.fm = function (p518) {
        this.ul.push(p518);
        p518();
      };
      f63.prototype.rk = function (p519, p520) {
        var v447 = this.xl.propertyList.concat(vO7.pL || []);
        if (v447 == null) {
          return false;
        }
        ;
        for (vLSGuest2 = 0; vLSGuest2 < v447.length; vLSGuest2++) {
          var v448 = v447[vLSGuest2];
          if (v448.id == p519 && v448.type === p520) {
            return true;
          }
        }
        ;
        return false;
      };
      f63.prototype.nk = function () {
        return this.vl;
      };
      f63.prototype.gm = function () {
        return this.wl;
      };
      f63.prototype.hm = function (p521) {
        var vThis15 = this;
        var v449 = this.Kl();
        var v450 = this.Ql();
        var v451 = this.Rl();
        this.im(function () {
          if (p521 != null) {
            p521();
          }
        }, function (p522) {
          vThis15.xl = p522.user_data;
          vThis15.jm();
          var v452 = vThis15.Kl();
          var v453 = vThis15.Ql();
          var v454 = vThis15.Rl();
          if (v449 === v452) {
            if (v454 > 1 && v454 !== v451) {
              ooo.Xg.Yk.km(new vO2.lm(v454));
            }
            var v455 = v453 - v450;
            if (v455 >= 20) {
              ooo.Xg.Yk.km(new vO2.mm(v455));
            }
          }
          ;
          if (p521 != null) {
            p521();
          }
        });
      };
      f63.prototype.im = function (p523, p524) {
        var v456 = vO3.H.J + "/pub/wuid/" + this.wl + "/getUserData";
        vO4.Aa(v456, p523, function (p525) {
          if (p525.code !== 1200) {
            p523();
          } else {
            p524(p525);
          }
        });
      };
      f63.prototype.nm = function (p526, p527, p528, p529) {
        var v457 = vO3.H.J + "/pub/wuid/" + this.wl + "/buyProperty?id=" + p526 + "&type=" + p527;
        vO4.Aa(v457, function () {
          p528();
        }, function (p530) {
          if (p530.code !== 1200) {
            p528();
          } else {
            p529();
          }
        });
      };
      f63.prototype.om = function (p531, p532) {
        var v458 = vO3.H.J + "/pub/wuid/" + this.wl + "/deleteAccount";
        vO4.Aa(v458, p531, function (p533) {
          if (p533.code !== 1200) {
            p531();
          } else {
            p532();
          }
        });
      };
      f63.prototype.pm = function (p534) {
        var vThis16 = this;
        if (this.vl) {
          this.qm();
        }
        f63.yl.Dl(function () {
          p534();
        }, function (p535) {
          vThis16.rm(vLSFb, p535.Al, p534);
        });
      };
      f63.prototype.sm = function (p536) {
        var vThis17 = this;
        if (this.vl) {
          this.qm();
        }
        f63.Gl.Dl(function () {
          p536();
        }, function (p537) {
          vThis17.rm(vLSGg, p537.Al, p536);
        });
      };
      f63.prototype.rm = function (p538, p539, p540) {
        var vThis18 = this;
        var v459 = p538 + "_" + p539;
        var v460 = vO3.H.J + "/pub/wuid/" + v459 + "/login";
        vO4.Aa(v460, function () {
          vThis18.tm();
        }, function (p541) {
          if (p541.code !== 1200) {
            vThis18.tm();
          } else {
            vThis18.um(p538, p539, p541.user_data);
            if (p540 != null) {
              p540();
            }
          }
        });
      };
      f63.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (e19) {}
        ;
        this.xm();
      };
      f63.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      f63.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      f63.prototype.um = function (p542, p543, p544) {
        var vThis19 = this;
        vF43(p544, function (p545) {
          var v461 = vThis19.vl ? vThis19.xl.userId : p545;
          vThis19.vl = true;
          vThis19.wl = p542 + "_" + p543;
          vThis19.xl = p545;
          vO2.Cg.Ng(vO2.Cg.Hg, p542, 60);
          if (v461 !== vThis19.xl.userId) {
            vThis19.zm();
          } else {
            vThis19.jm();
          }
          ooo.Xp(true, true);
          vO7.loading = false;
        });
      };
      f63.prototype.xm = function () {
        var v462 = this.vl ? this.xl.userId : vLSGuest2;
        this.vl = false;
        this.wl = vLSGuest;
        this.xl = {};
        vO2.Cg.Ng(vO2.Cg.Hg, "", 60);
        if (v462 !== this.xl.userId) {
          this.zm();
        } else {
          this.jm();
        }
      };
      f63.prototype.Jl = function () {
        var v463 = vO2.Cg.Og(vO2.Cg.Hg);
        var vThis20 = this;
        if (vLSFb === v463) {
          var vLN15 = 1;
          (function f68() {
            if (!f63.yl.Bl() && vLN15++ < 5) {
              vO4.Y(f68, 1000);
              return;
            }
            ;
            f63.yl.El(function () {}, function (p546) {
              vThis20.rm(vLSFb, p546.Al);
            });
          })();
        } else if (vLSGg === v463) {
          var vLN16 = 1;
          (function f69() {
            if (!f63.Gl.Bl() && vLN16++ < 5) {
              vO4.Y(f69, 1000);
              return;
            }
            ;
            f63.Gl.El(function () {}, function (p547) {
              vThis20.rm(vLSGg, p547.Al);
            });
          })();
        }
      };
      f63.prototype.zm = function () {
        for (var vLN082 = 0; vLN082 < this.tl.length; vLN082++) {
          this.tl[vLN082]();
        }
        ;
        this.jm();
      };
      f63.prototype.jm = function () {
        for (var vLN083 = 0; vLN083 < this.ul.length; vLN083++) {
          this.ul[vLN083]();
        }
      };
      f63.prototype.vm = function () {
        f63.yl.Fl();
      };
      f63.prototype.wm = function () {
        f63.Gl.Fl();
      };
      return f63;
    }();
    vO2.Sf = function () {
      function f70(p548, p549, p550) {
        this.Of = p550;
        this.Rd = false;
        this.Yc = new vO5.k.l();
        this.Yc.visible = false;
        this.Am = Array(p548);
        for (var vLN084 = 0; vLN084 < this.Am.length; vLN084++) {
          var v464 = new vO2.Bm(new vO5.j(p549 * 3));
          v464.Cm(p549);
          this.Am[vLN084] = v464;
          this.Yc.addChild(v464.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      f70.prototype.ag = function () {
        return this.Yc;
      };
      f70.prototype.rg = function (p551) {
        this.Rd = p551;
        this.Yc.visible = p551;
      };
      f70.prototype.qg = function () {
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        var v465 = this.Qf / 30;
        for (var vLN085 = 0; vLN085 < this.Am.length; vLN085++) {
          this.Am[vLN085].Dm(v465);
        }
      };
      f70.prototype.Bg = function () {
        if (this.Rd) {
          for (var vLN086 = 0; vLN086 < this.Am.length; vLN086++) {
            this.Am[vLN086].Bg(this.Vf);
          }
        }
      };
      f70.prototype.Em = function () {
        return this.Pf;
      };
      f70.prototype.Fm = function () {
        return this.Qf;
      };
      f70.prototype.xg = function (p552, p553) {
        this.Am[p552].Gm(p553);
      };
      f70.prototype.yg = function (p554, p555) {
        this.Am[p554].Hm(p555);
      };
      f70.prototype.zg = function (p556, p557, p558) {
        var v466 = this.Am[p556];
        for (var v467 = v466.Im(), v468 = v466.Jm, vLN087 = 0; vLN087 < v467; vLN087++) {
          v468[vLN087 * 3] = p557;
          v468[vLN087 * 3 + 1] = p558;
          v468[vLN087 * 3 + 2] = 0;
        }
      };
      f70.prototype.Ag = function (p559, p560, p561) {
        var v469;
        var v470;
        var v471 = this.Am[p559];
        var v472 = v471.Im();
        var v473 = v471.Jm;
        var v474 = v471.Km();
        var v475 = v473[0];
        var v476 = v473[1];
        var v477 = p560 - v475;
        var v478 = p561 - v476;
        var v479 = vO4.la(v477, v478);
        if (v479 > 0) {
          v473[0] = p560;
          v473[1] = p561;
          v473[2] = vO4.ta(v478, v477);
          var v480 = v474 * 0.25 / (v474 * 0.25 + v479);
          var v481 = 1 - v480 * 2;
          for (var vLN17 = 1, vV472 = v472; vLN17 < vV472; vLN17++) {
            v469 = v473[vLN17 * 3];
            v473[vLN17 * 3] = v473[vLN17 * 3 - 3] * v481 + (v469 + v475) * v480;
            v475 = v469;
            v470 = v473[vLN17 * 3 + 1];
            v473[vLN17 * 3 + 1] = v473[vLN17 * 3 - 2] * v481 + (v470 + v476) * v480;
            v476 = v470;
            v473[vLN17 * 3 + 2] = vO4.ta(v473[vLN17 * 3 - 2] - v473[vLN17 * 3 + 1], v473[vLN17 * 3 - 3] - v473[vLN17 * 3]);
          }
        }
      };
      return f70;
    }();
    vO2.Lm = function () {
      function f71(p562) {
        var v482;
        var vThis21 = this;
        this.Of = p562;
        this.nc = p562.get()[0];
        this.Vf = ((v482 = {}).view = vThis21.nc, v482.transparent = true, new vO5.k.o(v482));
        this.Rd = false;
        this.Mm = new vO2.Bm(new vO5.j(v483 * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
        this.qg();
        ooo.ud.Jc(function () {
          vThis21.Mm.Tm();
        });
      }
      var v483 = vO4.ha(100, vO2.Xc.fd);
      var vO30 = {
        Om: "0lt0",
        Um: "0lt1",
        Vm: "0lt2"
      };
      f71.prototype.rg = function (p563) {
        this.Rd = p563;
      };
      f71.prototype.qg = function () {
        var v484 = vO4.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v484;
        this.nc.width = v484 * this.Pf;
        this.nc.height = v484 * this.Qf;
        var v485 = this.Qf / 4;
        this.Mm.Dm(v485);
        var v486 = vO4.fa(vO4._(this.Pf / v485) * 2 - 5, 1, v483);
        this.Mm.Cm(v486);
      };
      f71.prototype.ug = function () {
        if (this.Rd) {
          var v487 = vO4.Ca() / 200;
          var v488 = vO4.oa(v487);
          this.Mm.Wm(this.Xm(this.Nm, v488), this.Ym(this.Nm, v488));
          this.Mm.Zm(this.$m(this.Pm, v488), this.$m(this.Qm, v488), this.$m(this.Rm, v488), this.$m(this.Sm, v488));
          var v489 = this.Mm.Km();
          for (var v490 = this.Mm.Im(), v491 = this.Mm.Jm, v492 = this.Pf - (this.Pf - v489 * 0.5 * (v490 - 1)) * 0.5, v493 = this.Qf * 0.5, vLN088 = 0, vLN089 = 0, v494 = -1; v494 < v490; v494++) {
            var vV494 = v494;
            var v495 = vO4.pa(vV494 * 1 / 12 * vO3.T - v487) * (1 - vO4.ra(16, vV494 * -1 / 12));
            if (v494 >= 0) {
              v491[v494 * 3] = v492 - v489 * 0.5 * vV494;
              v491[v494 * 3 + 1] = v493 + v489 * 0.5 * v495;
              v491[v494 * 3 + 2] = vO4.ta(vLN089 - v495, vV494 - vLN088);
            }
            vLN088 = vV494;
            vLN089 = v495;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      f71.prototype.Gm = function (p564) {
        this.Mm.Gm(p564);
      };
      f71.prototype.an = function (p565) {
        this.Nm = p565 ? vO30.Vm : vO30.Um;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
      };
      f71.prototype.bn = function (p566) {
        this.Nm = vO30.Om;
        this.Pm = p566 ? vO30.Vm : vO30.Um;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
      };
      f71.prototype.cn = function (p567) {
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = p567 ? vO30.Vm : vO30.Um;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
      };
      f71.prototype.dn = function (p568) {
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = p568 ? vO30.Vm : vO30.Um;
        this.Sm = vO30.Om;
      };
      f71.prototype.en = function (p569) {
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = p569 ? vO30.Vm : vO30.Um;
      };
      f71.prototype.Xm = function (p570, p571) {
        switch (p570) {
          case vO30.Um:
            return 0.9 + p571 * 0.1;
          case vO30.Vm:
            return 0.4 + p571 * 0.3;
        }
        ;
        return 1;
      };
      f71.prototype.Ym = function (p572, p573) {
        switch (p572) {
          case vO30.Um:
            return 0.6 + p573 * 0.5;
          case vO30.Vm:
            return 0.3 + p573 * 0.3;
        }
        ;
        return 1;
      };
      f71.prototype.$m = function (p574, p575) {
        switch (p574) {
          case vO30.Um:
            return 0.9 + p575 * 0.1;
          case vO30.Vm:
            return 0.6 + p575 * 0.4;
        }
        ;
        return 1;
      };
      return f71;
    }();
    vO2.uk = function () {
      function f72(p576, p577, p578, p579, p580) {
        this.gn = p576;
        this.hn = p577;
        this.in = p578;
        this.jn = p579;
        this.kn = p580;
      }
      f72.tk = function (p581) {
        return new f72(p581.price, p581.guest, p581.nonbuyable, p581.nonbuyableCause, p581.description);
      };
      f72.vk = function (p582) {
        return new f72(p582.price, p582.guest, p582.nonbuyable, p582.nonbuyableCause, p582.description);
      };
      f72.prototype.pk = function () {
        return this.gn;
      };
      f72.prototype.sk = function () {
        return this.hn;
      };
      f72.prototype.qk = function () {
        return this.in;
      };
      f72.prototype.ln = function () {
        return this.jn;
      };
      f72.prototype.mn = function () {
        return this.kn;
      };
      return f72;
    }();
    vO2.Zf = function () {
      function f73(p583) {
        this.nn = {};
        this.nn[v499] = p583;
        var v496 = vO5.k.q.from(v503, v504, this.nn);
        this._f = new vO5.k.v(v502, v496);
        this._f.blendMode = vO5.k.w.B;
      }
      var v497 = "a1_" + vO4.xa();
      var v498 = "a2_" + vO4.xa();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v499 = "u3_" + vO4.xa();
      var v500 = "u4_" + vO4.xa();
      var v501 = "v1_" + vO4.xa();
      var v502 = new vO5.k.u().addAttribute(v497, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v498, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var v503 = "precision mediump float; attribute vec2 " + v497 + "; attribute vec2 " + v498 + "; uniform mat3 " + vLSTranslationMatrix + "; uniform mat3 " + vLSProjectionMatrix + "; uniform vec4 " + v500 + "; varying vec2 " + v501 + "; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { " + v501 + " = " + v498 + "; gl_Position = vec4((" + vLSProjectionMatrix + " * " + vLSTranslationMatrix + " * vec3(" + v497 + ", 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = " + v500 + "; vec2 uv = " + v498 + "; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = (uv - vec2(0.5, 0.5)) * mul * 1.25; v2 = vec2(v2.x * ROT_COS - v2.y * ROT_SIN, v2.x * ROT_SIN + v2.y * ROT_COS) * vec2(1.0, 2.0); " + v501 + " = v2; }";
      var v504 = "precision highp float; varying vec2 " + v501 + "; uniform sampler2D " + v499 + "; void main() { gl_FragColor = texture2D(" + v499 + ", " + v501 + "); }";
      f73.prototype.tg = function (p584, p585) {
        this._f.scale.x = p584;
        this._f.scale.y = p585;
        this.nn[v500] = [p584, p585, 1 / p584 + 1, 1 / p585 + 1];
      };
      return f73;
    }();
    vO2.th = function () {
      function f74() {
        this.nn = {};
        this.nn[v508] = [1, 0.5, 0.25, 0.5];
        this.nn[v509] = vO5.k.n.WHITE;
        this.nn[v510] = [0, 0];
        this.nn[v511] = [0, 0];
        var v505 = vO5.k.q.from(v514, v515, this.nn);
        this._f = new vO5.k.v(v513, v505);
      }
      var v506 = "a1_" + vO4.xa();
      var v507 = "a2_" + vO4.xa();
      var vLSTranslationMatrix2 = "translationMatrix";
      var vLSProjectionMatrix2 = "projectionMatrix";
      var v508 = "u3_" + vO4.xa();
      var v509 = "u4_" + vO4.xa();
      var v510 = "u5_" + vO4.xa();
      var v511 = "u6_" + vO4.xa();
      var v512 = "v1_" + vO4.xa();
      var v513 = new vO5.k.u().addAttribute(v506, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v507, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v514 = "precision mediump float; attribute vec2 " + v506 + "; attribute vec2 " + v507 + "; uniform mat3 " + vLSTranslationMatrix2 + "; uniform mat3 " + vLSProjectionMatrix2 + "; varying vec2 " + v512 + "; void main(){" + v512 + "=" + v507 + "; gl_Position=vec4((" + vLSProjectionMatrix2 + "*" + vLSTranslationMatrix2 + "*vec3(" + v506 + ", 1.0)).xy, 0.0, 1.0); }";
      var v515 = "precision highp float; varying vec2 " + v512 + "; uniform vec4 " + v508 + "; uniform sampler2D " + v509 + "; uniform vec2 " + v510 + "; uniform vec2 " + v511 + "; void main(){vec4 color=texture2D(" + v509 + ", " + v512 + "*" + v510 + "+" + v511 + "); vec4 colorMix=" + v508 + "; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }";
      f74.prototype.nd = function (p586, p587, p588, p589) {
        var v516 = this.nn[v508];
        v516[0] = p586;
        v516[1] = p587;
        v516[2] = p588;
        v516[3] = p589;
      };
      f74.prototype.Hh = function (p590) {
        this.nn[v509] = p590;
      };
      f74.prototype.Bg = function (p591, p592, p593, p594) {
        this._f.position.x = p591;
        this._f.position.y = p592;
        this._f.scale.x = p593;
        this._f.scale.y = p594;
        var v517 = this.nn[v510];
        v517[0] = p593 * 0.2520615384615385;
        v517[1] = p594 * 0.4357063736263738;
        var v518 = this.nn[v511];
        v518[0] = p591 * 0.2520615384615385;
        v518[1] = p592 * 0.4357063736263738;
      };
      return f74;
    }();
    vO2.bd = function () {
      function f75() {
        this.gd = new vO5.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      f75.prototype.kd = function (p595) {
        this.gd.texture = p595.nb();
        this.gd.anchor.set(p595.hb, p595.ib);
        this.pn = p595.jb;
        this.qn = p595.kb;
      };
      f75.prototype.nd = function (p596) {
        this.gd.tint = parseInt(p596.substring(1), 16);
      };
      f75.prototype.Bd = function (p597) {
        this.gd.width = p597 * this.pn;
        this.gd.height = p597 * this.qn;
      };
      f75.prototype.Vd = function (p598) {
        this.gd.rotation = p598;
      };
      f75.prototype.Ud = function (p599, p600) {
        this.gd.position.set(p599, p600);
      };
      f75.prototype.Td = function (p601) {
        this.gd.visible = p601;
      };
      f75.prototype.Qd = function () {
        return this.gd.visible;
      };
      f75.prototype.Rj = function (p602) {
        this.gd.alpha = p602;
      };
      f75.prototype.zd = function () {
        return this.gd;
      };
      f75.prototype.G = function () {
        vO5.k.F.G(this.gd);
      };
      return f75;
    }();
    vO2.Ui = function () {
      function f76(p603) {
        this.Qh = p603;
        this.ki = new vO2.Ui.Ti();
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
        this.sn = new vO5.j(vLN200 * 2);
        this.tn = new vO5.j(vLN200 * 2);
        this.Jd = new vO5.j(vLN200 * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var vLN200 = 200;
      f76.prototype.$i = function () {
        if (this.vn != null) {
          vO5.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          vO5.k.F.G(this.wn);
        }
        if (this.skinLineGraphics) {
          vO5.k.F.G(this.skinLineGraphics);
          this.skinLineGraphics = null;
        }
      };
      f76.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = "";
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      f76.prototype.Zi = function (p604) {
        this.ki = p604;
        this.yn(this.cj);
      };
      f76.prototype.Td = function (p605) {
        var v519 = this.cj;
        this.cj = p605;
        this.yn(v519);
      };
      f76.prototype.fj = function (p606) {
        this.hi = p606 * 50;
        var vP606 = p606;
        if (p606 > this.Qh.hh) {
          vP606 = vO4.sa((p606 - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var v520 = vO4.qa(vO4.ra(vP606 * 5, 0.707106781186548) * 4 + 25);
        var v521 = vO4.ha(vLN200, vO4.ia(3, (v520 - 5) * 5 + 1));
        var v522 = this.Kd;
        this.Id = (5 + v520 * 0.9) * 0.025;
        this.Kd = vO4._(v521);
        this.rn = v521 - this.Kd;
        if (v522 > 0 && v522 < this.Kd) {
          var v523 = this.sn[v522 * 2 - 2];
          var v524 = this.sn[v522 * 2 - 1];
          var v525 = this.tn[v522 * 2 - 2];
          var v526 = this.tn[v522 * 2 - 1];
          var v527 = this.Jd[v522 * 2 - 2];
          var v528 = this.Jd[v522 * 2 - 1];
          for (var vV522 = v522; vV522 < this.Kd; vV522++) {
            this.sn[vV522 * 2] = v523;
            this.sn[vV522 * 2 + 1] = v524;
            this.tn[vV522 * 2] = v525;
            this.tn[vV522 * 2 + 1] = v526;
            this.Jd[vV522 * 2] = v527;
            this.Jd[vV522 * 2 + 1] = v528;
          }
        }
      };
      f76.prototype.kj = function (p607, p608) {
        this.Kd = p608;
        for (var vLN090 = 0; vLN090 < this.Kd; vLN090++) {
          this.sn[vLN090 * 2] = this.tn[vLN090 * 2] = this.Jd[vLN090 * 2] = p607();
          this.sn[vLN090 * 2 + 1] = this.tn[vLN090 * 2 + 1] = this.Jd[vLN090 * 2 + 1] = p607();
        }
      };
      f76.prototype.hj = function (p609, p610, p611) {
        this.Fd = p611;
        for (var vLN091 = 0; vLN091 < this.Kd; vLN091++) {
          this.sn[vLN091 * 2] = this.tn[vLN091 * 2];
          this.sn[vLN091 * 2 + 1] = this.tn[vLN091 * 2 + 1];
        }
        ;
        var v529 = p609 - this.tn[0];
        var v530 = p610 - this.tn[1];
        this.zn(v529, v530, this.Kd, this.tn);
      };
      f76.prototype.zn = function (p612, p613, p614, p615) {
        var v531 = vO4.la(p612, p613);
        if (!(v531 <= 0)) {
          var v532;
          var v533 = p615[0];
          p615[0] += p612;
          var v534;
          var v535 = p615[1];
          p615[1] += p613;
          var v536 = this.Id / (this.Id + v531);
          var v537 = 1 - v536 * 2;
          for (var vLN18 = 1, v538 = p614 - 1; vLN18 < v538; vLN18++) {
            v532 = p615[vLN18 * 2];
            p615[vLN18 * 2] = p615[vLN18 * 2 - 2] * v537 + (v532 + v533) * v536;
            v533 = v532;
            v534 = p615[vLN18 * 2 + 1];
            p615[vLN18 * 2 + 1] = p615[vLN18 * 2 - 1] * v537 + (v534 + v535) * v536;
            v535 = v534;
          }
          ;
          v537 = 1 - (v536 = this.rn * this.Id / (this.rn * this.Id + v531)) * 2;
          p615[p614 * 2 - 2] = p615[p614 * 2 - 4] * v537 + (p615[p614 * 2 - 2] + v533) * v536;
          p615[p614 * 2 - 1] = p615[p614 * 2 - 3] * v537 + (p615[p614 * 2 - 1] + v535) * v536;
        }
      };
      f76.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      f76.prototype.dj = function (p616, p617) {
        var vLN1000000 = 1000000;
        var vP616 = p616;
        var vP617 = p617;
        for (var vLN092 = 0; vLN092 < this.Kd; vLN092++) {
          var v539 = this.Jd[vLN092 * 2];
          var v540 = this.Jd[vLN092 * 2 + 1];
          var v541 = vO4.la(p616 - v539, p617 - v540);
          if (v541 < vLN1000000) {
            vLN1000000 = v541;
            vP616 = v539;
            vP617 = v540;
          }
        }
        ;
        return {
          _a: vP616,
          ab: vP617,
          ej: vLN1000000
        };
      };
      f76.prototype._i = function (p618) {
        this.un = p618;
      };
      f76.prototype.Pj = function (p619, p620) {
        this.Lj = vO4.ga(this.Lj, this.bj ? this.Fd ? 0.9 + vO4.pa(p619 / 400 * vO3.T) * 0.1 : 1 : 0, p620, 1 / 800);
        this.Ld = vO4.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, p620, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      f76.prototype.Qj = function (p621, p622, p623, p624) {
        if (this.cj && this.bj) {
          var v542 = vO4.ra(0.11112, p622 / 95);
          for (var vLN093 = 0; vLN093 < this.Kd; vLN093++) {
            var v543 = vO4.ka(this.sn[vLN093 * 2], this.tn[vLN093 * 2], p623);
            var v544 = vO4.ka(this.sn[vLN093 * 2 + 1], this.tn[vLN093 * 2 + 1], p623);
            this.Jd[vLN093 * 2] = vO4.ka(v543, this.Jd[vLN093 * 2], v542);
            this.Jd[vLN093 * 2 + 1] = vO4.ka(v544, this.Jd[vLN093 * 2 + 1], v542);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, p621, p622, p624);
          if (this.cj && this.bj) {
            this.drawSkinLines();
          }
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      f76.prototype.yn = function (p625) {
        if (this.cj) {
          if (!p625) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            vO5.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            vO5.k.F.G(this.wn);
          }
        }
      };
      f76.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new vO2.Xc();
        } else {
          vO5.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), "#ffffff");
        if (this.wn == null) {
          this.wn = new vO2.Bn("");
          this.wn.style.fontFamily = "PTSans";
          this.wn.anchor.set(0.5);
        } else {
          vO5.k.F.G(this.wn);
        }
        if (vO7 && vO7.showSkinLines && this.skinLineGraphics == null) {
          this.skinLineGraphics = new vO5.k.p();
          this.skinLineGraphics.zIndex = 1000;
          this.skinLineGraphics.alpha = 1;
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (vO7 && vO7.showSkinLines && this.skinLineGraphics) {
          console.log("إضافة خطوط السكن للمشهد");
          this.vn.Yc.addChild(this.skinLineGraphics);
        }
      };
      f76.prototype.drawSkinLines = function () {
        if (!vO7 || !vO7.showSkinLines) {
          if (this.skinLineGraphics) {
            this.skinLineGraphics.visible = false;
          }
          return;
        }
        const v545 = this.ki.Je === ooo.Mh.Qh.fh;
        if (!v545 && this.hi < 400000) {
          if (this.skinLineGraphics) {
            this.skinLineGraphics.visible = false;
          }
          return;
        }
        if (!this.skinLineGraphics) {
          this.skinLineGraphics = new vO5.k.p();
          if (ooo.Xg.Kf.Wg.vh) {
            ooo.Xg.Kf.Wg.vh.addChild(this.skinLineGraphics);
          }
          this.skinLineGraphics.zIndex = -100;
        }
        this.skinLineGraphics.clear();
        this.skinLineGraphics.visible = true;
        this.skinLineGraphics.lineStyle(0.1, 16777215, 1);
        for (let vLN19 = 1; vLN19 < this.Kd; vLN19++) {
          const v546 = this.Jd[vLN19 * 2 - 2];
          const v547 = this.Jd[vLN19 * 2 - 1];
          const v548 = this.Jd[vLN19 * 2];
          const v549 = this.Jd[vLN19 * 2 + 1];
          const v550 = v548 - v546;
          const v551 = v549 - v547;
          const v552 = Math.sqrt(v550 * v550 + v551 * v551);
          if (v552 > 0) {
            const v553 = -v551 / v552;
            const v554 = v550 / v552;
            const v555 = this.Id * 4;
            const v556 = v555 * 0.4;
            this.skinLineGraphics.moveTo((v546 + v548) / 2 + v553 * v556, (v547 + v549) / 2 + v554 * v556);
            this.skinLineGraphics.lineTo((v546 + v548) / 2 - v553 * v556, (v547 + v549) / 2 - v554 * v556);
          }
        }
      };
      f76.Ti = function f77() {
        this.Je = 0;
        this.mi = vO2.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = "";
      };
      return f76;
    }();
    vO2.Bn = vO4.ca(vO5.k.t, function (p626, p627, p628) {
      vO5.k.t.call(this, p626, p627, p628);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    vO2.Sb = function () {
      function f78(p629, p630, p631, p632, p633) {
        this.Tj = p629;
        this.Uj = p630;
        this.Vj = p631;
        this.Wj = p632;
        this.Xj = p633;
      }
      f78.prototype.Cn = function (p634) {
        return new f78(p634, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f78.prototype.Dn = function (p635) {
        return new f78(this.Tj, p635, this.Vj, this.Wj, this.Xj);
      };
      f78.prototype.En = function (p636) {
        return new f78(this.Tj, this.Uj, p636, this.Wj, this.Xj);
      };
      f78.prototype.Fn = function (p637) {
        return new f78(this.Tj, this.Uj, this.Vj, p637, this.Xj);
      };
      f78.prototype.Gn = function (p638) {
        return new f78(this.Tj, this.Uj, this.Vj, this.Wj, p638);
      };
      return f78;
    }();
    vO2.Bm = function () {
      function f79(p639) {
        this.Hn = new vO2.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = p639;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm("#ffffff");
      }
      var v557 = new vO2.Sb(0, 0, 0, 0, 0);
      f79.prototype.ag = function () {
        return this.Hn.Yc;
      };
      f79.prototype.Cm = function (p640) {
        this.$c = p640;
        if (this.Hn.$c !== p640) {
          for (var vP640 = p640; vP640 < this.Hn._c.length; vP640++) {
            this.Hn._c[vP640].Cd();
          }
          ;
          while (this.Hn.$c > p640) {
            this.Hn.$c -= 1;
            var v558 = this.Hn._c[this.Hn.$c];
            v558.md.G();
            v558.ld.G();
          }
          ;
          while (this.Hn.$c < p640) {
            var v559 = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(v559.ld.zd());
            this.Hn.Yc.addChild(v559.md.zd());
            v559.ld.Rj(this.Kn);
            v559.md.Rj(this.Ln);
          }
          ;
          for (var vLN094 = 0; vLN094 < this.Hn.Zc.od.length; vLN094++) {
            this.Hn.Zc.od[vLN094].Rj(this.Mn);
          }
          ;
          for (var vLN095 = 0; vLN095 < this.Hn.Zc.pd.length; vLN095++) {
            this.Hn.Zc.pd[vLN095].Rj(this.Nn);
          }
          ;
          for (var vLN096 = 0; vLN096 < this.Hn.Zc.rd.length; vLN096++) {
            this.Hn.Zc.rd[vLN096].Rj(this.On);
          }
          ;
          for (var vLN097 = 0; vLN097 < this.Hn.Zc.qd.length; vLN097++) {
            this.Hn.Zc.qd[vLN097].Rj(this.Pn);
          }
        }
      };
      f79.prototype.Im = function () {
        return this.$c;
      };
      f79.prototype.Gm = function (p641) {
        this.In = p641;
        this.Jn = "#ffffff";
        this.Tm();
      };
      f79.prototype.Hm = function (p642) {
        this.In = v557;
        this.Jn = p642;
        this.Tm();
      };
      f79.prototype.Tm = function () {
        this.Hn.hd(vO2.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      f79.prototype.Dm = function (p643) {
        this.mj = p643;
      };
      f79.prototype.Km = function () {
        return this.mj;
      };
      f79.prototype.Wm = function (p644, p645) {
        this.Kn = p644;
        this.Ln = p645;
        for (var vLN098 = 0; vLN098 < this.$c; vLN098++) {
          var v560 = this.Hn._c[vLN098];
          v560.ld.Rj(this.Kn);
          v560.md.Rj(this.Ln);
        }
      };
      f79.prototype.Zm = function (p646, p647, p648, p649) {
        this.Mn = p646;
        this.Nn = p647;
        this.On = p648;
        this.Pn = p649;
        for (var vLN099 = 0; vLN099 < this.Hn.Zc.od.length; vLN099++) {
          this.Hn.Zc.od[vLN099].Rj(this.Mn);
        }
        ;
        for (var vLN0100 = 0; vLN0100 < this.Hn.Zc.pd.length; vLN0100++) {
          this.Hn.Zc.pd[vLN0100].Rj(this.Nn);
        }
        ;
        for (var vLN0101 = 0; vLN0101 < this.Hn.Zc.rd.length; vLN0101++) {
          this.Hn.Zc.rd[vLN0101].Rj(this.On);
        }
        ;
        for (var vLN0102 = 0; vLN0102 < this.Hn.Zc.qd.length; vLN0102++) {
          this.Hn.Zc.qd[vLN0102].Rj(this.Pn);
        }
      };
      f79.prototype.Bg = function () {
        var v561 = this.mj * 2;
        var v562 = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var v563 = this.Jm[0];
          var v564 = this.Jm[1];
          var v565 = this.Jm[2];
          this.Hn._c[0].Ad(v563, v564, v561, v562, v565);
          this.Hn.Zc.Ad(v563, v564, v561, v565);
        }
        ;
        for (var vLN110 = 1; vLN110 < this.$c; vLN110++) {
          var v566 = this.Jm[vLN110 * 3];
          var v567 = this.Jm[vLN110 * 3 + 1];
          var v568 = this.Jm[vLN110 * 3 + 2];
          this.Hn._c[vLN110].Ad(v566, v567, v561, v562, v568);
        }
      };
      f79.prototype._m = function (p650) {
        p650.render(this.Hn.Yc);
      };
      return f79;
    }();
    vO2.Uf = function () {
      function f80(p651) {
        this.Wd = p651;
      }
      f80.Tf = $("#background-canvas");
      f80.Qn = $("#stretch-box");
      f80.Rn = $("#social-buttons");
      f80.Sn = $("#markup-wrap");
      f80.Tn = $("#game-view");
      f80.Un = $("#results-view");
      f80.Vn = $("#main-menu-view");
      f80.Wn = $("#popup-view");
      f80.Xn = $("#toaster-view");
      f80.Yn = $("#loading-view");
      f80.Zn = $("#restricted-view");
      f80.$n = $("#error-gateway-connection-view");
      f80._n = $("#error-game-connection-view");
      f80.prototype.Sa = function () {};
      f80.prototype.ml = function () {};
      f80.prototype.nl = function () {};
      f80.prototype.hl = function () {};
      f80.prototype.qg = function () {};
      f80.prototype.ug = function (p652, p653) {};
      return f80;
    }();
    v641 = $("#final-caption");
    v642 = $("#final-continue");
    v643 = $("#congrats-bg");
    v644 = $("#unl6wj4czdl84o9b");
    v645 = $("#final-share-fb");
    v646 = $("#final-message");
    v647 = $("#final-score");
    v648 = $("#final-place");
    v649 = $("#final-board");
    v650 = $("#game-canvas");
    (v651 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      var vThis22 = this;
      var v569 = v650.get()[0];
      v645.toggle(vO3.co.bo);
      v641.text(vO4.U("index.game.result.title"));
      v642.text(vO4.U("index.game.result.continue"));
      v642.click(function () {
        ooo.ij.if();
        vO3.co.do.Va();
        ooo.ij.Ye(vO2.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("html").keydown(function (p654) {
        if (p654.keyCode !== 17 || !(vO7.ctrl = true)) {
          if (p654.keyCode !== 17) {
            vO7.ctrl = false;
          }
        }
        if (p654.keyCode === 32) {
          vThis22.eo = true;
        }
      }).keyup(function (p655) {
        vO7.ctrl = false;
        if (vO6.on && vO7.s) {
          if (p655.keyCode == 81 || p655.keyCode == 87) {
            if (p655.keyCode == 81) {
              v49.texture = v42;
              v50.texture = v43;
              v49.alpha = 1;
              v50.alpha = 0.25;
              vF24();
            }
            if (p655.keyCode == 87) {
              v50.texture = v44;
              v49.texture = v41;
              v49.alpha = 0.25;
              v50.alpha = 1;
              vF29();
            }
          } else {
            v50.texture = v43;
            v49.texture = v41;
            v50.alpha = 0.25;
            v49.alpha = 0.25;
            v39 = false;
            vLN55 = 55;
            vLN12 = 1;
            v40 = true;
            clearInterval(v37);
            v37 = null;
          }
          if (p655.keyCode == 90) {
            if (vO7.z == 1) {
              if (vO7.h) {
                vO7.z = 1.6;
              } else {
                vO7.z = 1.2;
              }
              v51.texture = v46;
              v51.alpha = 1;
            } else {
              vO7.z = 1;
              v51.texture = v45;
              v51.alpha = 0.25;
            }
          }
          if (vO7.hz && !vO7.mobile) {
            if (p655.keyCode == 188 && vO7.z >= 0.2) {
              vO7.z = vO7.z - 0.1;
            }
            if (p655.keyCode == 190 && vO7.z <= 25) {
              vO7.z = vO7.z + 0.1;
            }
          }
        }
        if (vO6.on && p655.keyCode == 82) {
          if (!window.lastRespawnTime) {
            window.lastRespawnTime = 0;
          }
          const v570 = new Date().getTime();
          const v571 = v570 - window.lastRespawnTime;
          if (v571 < 1000) {
            return;
          }
          window.lastRespawnTime = v570;
          try {
            if (ooo.Mh && ooo.Mh.Rq && typeof ooo.Mh.Rq.close === "function") {
              ooo.Mh.Rq.close();
            }
            if (ooo.Mh && typeof ooo.Mh.uj === "function") {
              ooo.Mh.uj();
            }
            setTimeout(function () {
              if (document.getElementById("mm-action-play")) {
                document.getElementById("mm-action-play").click();
              }
            }, 300);
          } catch (e20) {
            document.getElementById("mm-action-play").click();
          }
          if (vO7.pi && vO7.pn) {
            $("#port_id_s").val(vO7.pi);
            $("#port_name_s").val(vO7.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
          }
          vO7.r1 = true;
        }
        if (vO6.on && p655.keyCode == 78) {
          document.getElementById("settings-show-names-switch").click();
          if (vO7.sn) {
            vO7.sn = false;
          } else {
            vO7.sn = true;
          }
        }
        if (p655.keyCode === 77) {
          if (vO7) {
            vO7.showSkinLines = !vO7.showSkinLines;
            console.log("خطوط السكن:", vO7.showSkinLines ? "مفعلة" : "معطلة");
            localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
          }
        }
        if (p655.keyCode === 32) {
          vThis22.eo = false;
        }
      });
      v569.addEventListener("touchmove", function (p656) {
        if (vO6.on && vO7.mobile && vO7.mo != 6 && vO7.s) {
          var vBtoa = btoa(vO7.c_1);
          if (vO7.mo1.x != -1 && vO7.mo1.y == -1 && btoa(vBtoa) == vO7.d_1 || vO7.mo2.x == -1 && vO7.mo2.y != -1 && btoa(vBtoa) == vO7.d_1) {
            var v572 = ooo.Xg.Kf.Wg.Ah;
            var v573 = v569.offsetHeight;
            var v574 = v569.offsetWidth;
            var v575 = v573 * 0.5;
            var v576 = v574 * 0.5;
            var vBtoa2 = btoa(vO7.c_2);
            for (let vLN0103 = 0; vLN0103 < p656.changedTouches.length; vLN0103++) {
              var v577 = p656.changedTouches[vLN0103].pageX;
              var v578 = p656.changedTouches[vLN0103].pageY;
              var v579 = p656.changedTouches[vLN0103].identifier;
              if (vO7.mo == 1 && btoa(vBtoa2) == vO7.d_2) {
                v573 *= 0.5;
                v574 *= 0.5;
              }
              if (vO7.mo == 2 && btoa(vBtoa2) == vO7.d_2) {
                v573 = v572.img_o_2.y + 110;
                v574 = v572.img_o_2.x + 110;
              }
              if (vO7.mo == 3 && btoa(vBtoa2) == vO7.d_2) {
                v573 = v572.img_o_3.y + 110;
                v574 = v572.img_o_3.x + 110;
              }
              if (vO7.mo == 4 && btoa(vBtoa2) == vO7.d_2 || vO7.mo == 5 && btoa(vBtoa2) == vO7.d_2) {
                v573 = v572.img_o_4.y + 110;
                v574 = v572.img_o_4.x + 110;
              }
              var vBtoa3 = btoa(vO7.c_5);
              var v580 = Math.atan2(v578 - v573, v577 - v574);
              var v581 = Math.cos(v580);
              var v582 = Math.sin(v580);
              var vBtoa4 = btoa(vO7.c_4);
              var v583 = vO7.mo1.x == v579;
              btoa(vO7.c_3);
              if (v583 && btoa(vBtoa4) == vO7.d_4) {
                if (v577 <= 0 || v578 <= 0) {
                  vO7.mo1.x = -1;
                  if (vO7.mo == 1) {
                    v572.img_p_1.alpha = 0.25;
                  }
                  if (vO7.mo == 2) {
                    v572.img_o_2.alpha = 0.25;
                    v572.img_i_2.alpha = 0.25;
                    v572.img_p_2.alpha = 0.25;
                  }
                  if (vO7.mo == 3) {
                    v572.img_o_3.alpha = 0.25;
                    v572.img_i_3.alpha = 0.25;
                    v572.img_p_3.alpha = 0.25;
                  }
                  if (vO7.mo == 4 || vO7.mo == 5) {
                    v572.img_p_2.alpha = 0.25;
                  }
                } else {
                  vThis22.fo = v580;
                  var vLN50 = 50;
                  if (vO7.mo == 1 || vO7.mo == 4 || vO7.mo == 5) {
                    vLN50 = 110;
                  }
                  var v584 = v574 - v577;
                  var v585 = v573 - v578;
                  var v586 = Math.sqrt(v584 * v584 + v585 * v585);
                  var v587 = v576 + v586 * v581 - 68;
                  var v588 = v575 + v586 * v582 - 68;
                  var v589 = v576 + vLN50 * v581 - 68;
                  var v590 = v575 + vLN50 * v582 - 68;
                  var v591 = v576 + v581 * 75 - 68;
                  var v592 = v575 + v582 * 75 - 68;
                  var v593 = v577 - 85;
                  var v594 = v578 - 85;
                  var v595 = v574 + vLN50 * v581 - 85;
                  var v596 = v573 + vLN50 * v582 - 85;
                  var v597 = v574 + v581 * 3 - 110;
                  var v598 = v573 + v582 * 3 - 110;
                  if (v586 < vLN50) {
                    if (vO7.mo2.x == -1 && vO7.mo2.y != -1) {
                      v572.img_pf_1.x = v587;
                      v572.img_pf_1.y = v588;
                    } else {
                      if (vO7.mo == 1) {
                        v572.img_p_1.x = v587;
                        v572.img_p_1.y = v588;
                      }
                      if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
                        v572.img_p_2.x = v587;
                        v572.img_p_2.y = v588;
                      }
                      if (vO7.mo == 3) {
                        v572.img_p_3.x = v587;
                        v572.img_p_3.y = v588;
                      }
                    }
                    if (vO7.mo == 2) {
                      v572.img_i_2.y = v594;
                      v572.img_i_2.x = v593;
                    }
                    if (vO7.mo == 3) {
                      v572.img_i_3.y = v594;
                      v572.img_i_3.x = v593;
                    }
                  } else {
                    if (vO7.mo2.x == -1 && vO7.mo2.y != -1) {
                      v572.img_pf_1.x = v589;
                      v572.img_pf_1.y = v590;
                      if (vO7.mo == 2 || vO7.mo == 3) {
                        if (v586 < 75) {
                          v572.img_pf_1.x = v587;
                          v572.img_pf_1.y = v588;
                        } else {
                          v572.img_pf_1.x = v591;
                          v572.img_pf_1.y = v592;
                        }
                      }
                    } else {
                      if (vO7.mo == 1) {
                        v572.img_p_1.x = v589;
                        v572.img_p_1.y = v590;
                      }
                      if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
                        v572.img_p_2.x = v589;
                        v572.img_p_2.y = v590;
                        if (vO7.mo == 2) {
                          if (v586 < 75) {
                            v572.img_p_2.x = v587;
                            v572.img_p_2.y = v588;
                          } else {
                            v572.img_p_2.x = v591;
                            v572.img_p_2.y = v592;
                          }
                        }
                      }
                      if (vO7.mo == 3) {
                        if (v586 < 75) {
                          v572.img_p_3.x = v587;
                          v572.img_p_3.y = v588;
                        } else {
                          v572.img_p_3.x = v591;
                          v572.img_p_3.y = v592;
                        }
                      }
                    }
                    if (vO7.mo == 2) {
                      v572.img_i_2.y = v596;
                      v572.img_i_2.x = v595;
                    }
                    if (vO7.mo == 3) {
                      v572.img_i_3.y = v596;
                      v572.img_i_3.x = v595;
                      v572.img_o_3.y = v598;
                      v572.img_o_3.x = v597;
                    }
                  }
                }
              } else if ((v583 = vO7.mo2.y == v579) && btoa(vBtoa3) == vO7.d_5) {
                if (v577 <= 0 || v578 <= 0) {
                  vO7.mo2.y = -1;
                  v572.img_f.visible = false;
                  v572.img_pf_1.visible = false;
                  if (vO7.mo == 1) {
                    v572.img_p_1.visible = true;
                  }
                  if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
                    v572.img_p_2.visible = true;
                  }
                  if (vO7.mo == 3) {
                    v572.img_p_3.visible = true;
                  }
                  if (vO7.mo == 4 || vO7.mo == 5) {
                    v572.img_f.visible = true;
                  }
                  vThis22.eo = false;
                } else if (vO7.mo == 3) {
                  v581 = Math.cos(v580 = Math.atan2(v578 - (v573 = v572.img_f.y + 100), v577 - (v574 = v572.img_f.x + 100)));
                  v582 = Math.sin(v580);
                  var v593 = v574 + v581 * 3 - 100;
                  var v594 = v573 + v582 * 3 - 100;
                  var v584 = v574 - v577;
                  var v585 = v573 - v578;
                  var v586 = Math.sqrt(v584 * v584 + v585 * v585);
                  if (v586 >= 40) {
                    v572.img_f.y = v593;
                    v572.img_f.x = v594;
                  }
                }
              }
            }
          }
        } else if (!vF3() || !vO7.joystick.checked) {
          if (p656 = p656 || window.event) {
            if ((p656 = p656.touches[0]).clientX !== undefined) {
              vThis22.fo = Math.atan2(p656.clientY - v569.offsetHeight * 0.5, p656.clientX - v569.offsetWidth * 0.5);
            } else {
              vThis22.fo = Math.atan2(p656.pageY - v569.offsetHeight * 0.5, p656.pageX - v569.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      v569.addEventListener("touchstart", function (p657) {
        if (vO6.on && vO7.mobile && vO7.mo != 6 && vO7.s) {
          var v599 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa5 = btoa(vO7.c_4);
          var v600 = v569.offsetHeight;
          var vBtoa6 = btoa(vO7.c_3);
          var v601 = v569.offsetWidth;
          var vBtoa7 = btoa(vO7.c_5);
          var v602 = (p657 = p657 || window.event).touches.item(0).pageX;
          var vBtoa8 = btoa(vO7.c_2);
          var v603 = p657.touches.item(0).pageY;
          var v604 = p657.touches.length;
          var vBtoa9 = btoa(vO7.c_1);
          var v605 = p657.touches.item(0).identifier;
          for (let vLN0104 = 0; vLN0104 < v604; vLN0104++) {
            if (vO7.mo2.x == -1 && vO7.mo2.y != -1) {
              if (p657.touches.item(vLN0104).identifier != vO7.mo2.y) {
                v602 = p657.touches.item(vLN0104).pageX;
                v603 = p657.touches.item(vLN0104).pageY;
                v605 = p657.touches.item(vLN0104).identifier;
              }
            } else {
              v602 = p657.touches.item(vLN0104).pageX;
              v603 = p657.touches.item(vLN0104).pageY;
              v605 = p657.touches.item(vLN0104).identifier;
            }
          }
          ;
          var vLN0105 = 0;
          if (vO7.mo == 4 && btoa(vBtoa7) == vO7.d_5 || vO7.mo == 5 && btoa(vBtoa5) == vO7.d_4) {
            vLN0105 = Math.sqrt((v602 - v599.img_f.x - 100) * (v602 - v599.img_f.x - 100) + (v603 - v599.img_f.y - 100) * (v603 - v599.img_f.y - 100));
          }
          if (v604 == 1 && (vO7.mo == 4 && vLN0105 > 40 || vO7.mo != 4) && (vO7.mo == 5 && vLN0105 > 40 || vO7.mo != 5)) {
            vO7.mo2.y = -1;
            v599.img_f.visible = false;
            v599.img_pf_1.visible = false;
            if (vO7.mo == 1) {
              v599.img_p_1.alpha = 0.25;
              v599.img_p_1.visible = true;
            }
            if (vO7.mo == 2) {
              v599.img_o_2.alpha = 0.25;
              v599.img_i_2.alpha = 0.25;
              v599.img_p_2.alpha = 0.25;
              v599.img_p_2.visible = true;
            }
            if (vO7.mo == 3) {
              v599.img_o_3.alpha = 0.25;
              v599.img_i_3.alpha = 0.25;
              v599.img_p_3.alpha = 0.25;
              v599.img_p_3.visible = true;
            }
            if (vO7.mo == 4 || vO7.mo == 5) {
              v599.img_p_2.alpha = 0.25;
              v599.img_p_2.visible = true;
              v599.img_f.visible = true;
            }
            vThis22.eo = false;
          }
          if (vO7.mo1.x == -1 && vO7.mo1.y == -1 && btoa(vBtoa5) == vO7.d_4 && (vO7.mo == 4 && vLN0105 > 40 || vO7.mo != 4 && btoa(vBtoa6) == vO7.d_3) && (vO7.mo == 5 && vLN0105 > 40 || vO7.mo != 5 && btoa(vBtoa8) == vO7.d_2)) {
            vO7.mo1.x = v605;
            if (vO7.mo1.x == vO7.mo2.y && vO7.mo1.y == vO7.mo2.x) {
              v602 = p657.touches.item(1).pageX;
              v603 = p657.touches.item(1).pageY;
            }
            var v606 = v601 * 0.5 - 68;
            var v607 = v600 * 0.5 - 68;
            var v608 = v602 - 110;
            var v609 = v603 - 110;
            var v610 = v602 - 85;
            var v611 = v603 - 85;
            if (vO7.mo == 1 && vO7.mo2.x == -1 && vO7.mo2.y == -1) {
              v599.img_p_1.alpha = 1;
              v599.img_p_1.x = v606;
              v599.img_p_1.y = v607;
              v599.img_p_1.visible = true;
            }
            if (vO7.mo == 2) {
              v599.img_o_2.alpha = 1;
              v599.img_o_2.x = v608;
              v599.img_o_2.y = v609;
              v599.img_i_2.alpha = 1;
              v599.img_i_2.x = v610;
              v599.img_i_2.y = v611;
              if (vO7.mo2.x == -1 && vO7.mo2.y == -1) {
                v599.img_p_2.alpha = 1;
                v599.img_p_2.x = v606;
                v599.img_p_2.y = v607;
                v599.img_p_2.visible = true;
              }
            }
            if (vO7.mo == 3 && btoa(vBtoa7) == vO7.d_5) {
              v599.img_o_3.alpha = 1;
              v599.img_o_3.x = v608;
              v599.img_o_3.y = v609;
              v599.img_i_3.alpha = 1;
              v599.img_i_3.x = v610;
              v599.img_i_3.y = v611;
              if (vO7.mo2.x == -1 && vO7.mo2.y == -1) {
                v599.img_p_3.alpha = 1;
                v599.img_p_3.x = v606;
                v599.img_p_3.y = v607;
                v599.img_p_3.visible = true;
              }
            }
            if (vO7.mo == 4 && btoa(vBtoa8) == vO7.d_2 && vO7.mo2.x == -1 && vO7.mo2.y == -1) {
              v599.img_p_2.alpha = 1;
              v599.img_p_2.x = v606;
              v599.img_p_2.y = v607;
              v599.img_p_2.visible = true;
            }
            if (vO7.mo == 5 && btoa(vBtoa6) == vO7.d_3 && vO7.mo2.x == -1 && vO7.mo2.y == -1) {
              v599.img_p_2.alpha = 1;
              v599.img_p_2.x = v606;
              v599.img_p_2.y = v607;
              v599.img_p_2.visible = true;
            }
          } else if (v604 >= 2 && vO7.mo2.x == -1 && vO7.mo2.y == -1 && btoa(vBtoa6) == vO7.d_3 || v604 == 1 && vO7.mo == 4 && vLN0105 <= 40 && btoa(vBtoa9) == vO7.d_1 || v604 == 1 && vO7.mo == 5 && vLN0105 <= 40 && btoa(vBtoa8) == vO7.d_2) {
            vO7.mo2.y = v605;
            v599.img_f.visible = true;
            v599.img_pf_1.visible = true;
            if (vO7.mo == 1) {
              v599.img_p_1.visible = false;
              v599.img_pf_1.x = v599.img_p_1.x;
              v599.img_pf_1.y = v599.img_p_1.y;
            }
            if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
              v599.img_p_2.visible = false;
              v599.img_pf_1.x = v599.img_p_2.x;
              v599.img_pf_1.y = v599.img_p_2.y;
            }
            if (vO7.mo == 3 && btoa(vBtoa6) == vO7.d_3) {
              v599.img_p_3.visible = false;
              v599.img_pf_1.x = v599.img_p_3.x;
              v599.img_pf_1.y = v599.img_p_3.y;
            }
            if (vO7.mo != 4 && vO7.mo != 5) {
              v599.img_f.x = v602 - 100;
              v599.img_f.y = v603 - 100;
            }
            vThis22.eo = true;
          }
          ;
          p657.preventDefault();
        } else {
          if (p657 = p657 || window.event) {
            vThis22.eo = p657.touches.length >= 2;
          }
          p657.preventDefault();
        }
      }, true);
      v569.addEventListener("touchend", function (p658) {
        if (vO6.on && vO7.mobile && vO7.mo != 6 && vO7.s) {
          var v612 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa10 = btoa(vO7.c_1);
          if (p658 = p658 || window.event) {
            if ((p658 = p658.changedTouches[0]).clientX !== undefined) {
              vF35(p658.clientX, p658.clientY);
            } else {
              vF35(p658.pageX, p658.pageY);
            }
          }
          var vBtoa11 = btoa(vO7.c_2);
          var v613 = p658.identifier;
          if (v613 == vO7.mo1.x && vO7.mo1.y == -1 && btoa(vBtoa11) == vO7.d_2) {
            vO7.mo1.x = -1;
            if (vO7.mo == 1) {
              v612.img_p_1.alpha = 0.25;
            }
            if (vO7.mo == 2) {
              v612.img_o_2.alpha = 0.25;
              v612.img_i_2.alpha = 0.25;
              v612.img_p_2.alpha = 0.25;
            }
            if (vO7.mo == 3 && btoa(vBtoa10) == vO7.d_1) {
              v612.img_o_3.alpha = 0.25;
              v612.img_i_3.alpha = 0.25;
              v612.img_p_3.alpha = 0.25;
            }
            if (vO7.mo == 4) {
              v612.img_p_2.alpha = 0.25;
            }
            if (vO7.mo == 5) {
              v612.img_p_2.alpha = 0.25;
            }
          }
          var vBtoa12 = btoa(vO7.c_3);
          if (vO7.mo2.x == -1 && v613 == vO7.mo2.y && btoa(vBtoa12) == vO7.d_3) {
            vO7.mo2.y = -1;
            v612.img_f.visible = false;
            v612.img_pf_1.visible = false;
            if (vO7.mo == 1) {
              v612.img_p_1.visible = true;
            }
            if (vO7.mo == 2 || vO7.mo == 4 && btoa(vBtoa11) == vO7.d_2 || vO7.mo == 5 && btoa(vBtoa12) == vO7.d_3) {
              v612.img_p_2.visible = true;
            }
            if (vO7.mo == 3) {
              v612.img_p_3.visible = true;
            }
            if (vO7.mo == 4 || vO7.mo == 5) {
              v612.img_f.visible = true;
            }
            vThis22.eo = false;
          }
        } else {
          if (p658 = p658 || window.event) {
            vThis22.eo = p658.touches.length >= 2;
          }
          if (vO7.mobile && vO7.s && (p658 = p658 || window.event)) {
            if ((p658 = p658.changedTouches[0]).clientX !== undefined) {
              vF35(p658.clientX, p658.clientY);
            } else {
              vF35(p658.pageX, p658.pageY);
            }
          }
        }
      }, true);
      v569.addEventListener("mousemove", function (p659) {
        if (p659 = p659 || vO2.c.event && _typeof(p659.clientX) != "undefined") {
          vThis22.fo = vO4.ta(p659.clientY - v569.offsetHeight * 0.5, p659.clientX - v569.offsetWidth * 0.5);
        }
      }, true);
      v569.addEventListener("mousedown", function (p660) {
        vThis22.eo = true;
      }, true);
      v569.addEventListener("mouseup", function (p661) {
        vThis22.eo = false;
      }, true);
      this.Wg = new vO2.lh(v650);
      this.go = v652.ho;
      this.fo = 0;
      this.eo = false;
      vO6.eie = vThis22;
    })).prototype.Sa = function () {};
    v651.prototype.ml = function () {
      vO2.Nf.rg(false);
      vO5.f.h(vO2.Uf.Tf, 50);
      vO5.f.h(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.g(vO2.Uf.Tn, 500);
      if (this.go === v652.ho) {
        vO5.f.h(vO2.Uf.Un, 1);
      } else {
        vO5.f.g(vO2.Uf.Un, 500);
      }
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v651.prototype.ho = function () {
      this.go = v652.ho;
      return this;
    };
    v651.prototype.io = function () {
      vO5.f.h(v643, 1);
      vO4.Y(function () {
        vO5.f.g(v643, 500);
      }, 3000);
      vO5.f.h(v644, 1);
      vO4.Y(function () {
        vO5.f.g(v644, 500);
      }, 500);
      this.go = v652.io;
      return this;
    };
    v651.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === v652.io) {
        ooo.ij.mf();
      }
    };
    v651.prototype.qg = function () {
      this.Wg.qg();
    };
    v651.prototype.ug = function (p662, p663) {
      this.Wg.ug(p662, p663);
    };
    v651.prototype.jo = function (p664, p665, p666) {
      var v614;
      var v615;
      var v616;
      if (p665 >= 1 && p665 <= 10) {
        v614 = vO4.U("index.game.result.place.i" + p665);
        v615 = vO4.U("index.game.result.placeInBoard");
        v616 = vO4.U("index.game.social.shareResult.messGood").replace("{0}", p666).replace("{1}", p664).replace("{2}", v614);
      } else {
        v614 = "";
        v615 = vO4.U("index.game.result.tryHit");
        v616 = vO4.U("index.game.social.shareResult.messNorm").replace("{0}", p666).replace("{1}", p664);
      }
      v646.html(vO4.U("index.game.result.your"));
      v647.html(p664);
      v648.html(v614);
      v649.html(v615);
      if (vO3.co.bo) {
        var v617;
        var v618;
        var v619;
        var v620;
        var v621;
        var v622;
        var v623;
        var v624 = vO4.U("index.game.result.share");
        vO4.U("index.game.social.shareResult.caption");
        v645.empty().append((v617 = v624, v618 = "https://wormate.io", v619 = "wormate.io", v620 = v616, v621 = v616, v622 = "https://wormate.io/images/og-share-img-new.jpg", (v623 = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + v617 + "</span></div>")).click(function () {
          if ((typeof FB == "undefined" ? "undefined" : _typeof(FB)) !== "undefined" && _typeof(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: v618,
              name: v619,
              caption: v620,
              description: v621,
              picture: v622
            }, function () {});
          }
        }), v623));
      }
    };
    v651.prototype.ko = function () {
      return this.fo;
    };
    v651.prototype.lo = function () {
      return this.eo;
    };
    v652 = {
      ho: 0,
      io: 1
    };
    vO2.Bk = v651;
    v653 = $("#loading-progress-cont");
    v654 = $("#loading-progress-bar");
    v655 = $("#loading-progress-text");
    (v656 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      this.mo = -1;
      this.no = "";
    })).prototype.Sa = function () {};
    v656.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.g(vO2.Uf.Yn, 500);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v656.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    v656.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    v656.prototype.oo = function () {
      this.po("", 0);
      vO5.f.g(v653, 100);
    };
    v656.prototype.qo = function () {
      vO5.f.h(v653, 100);
    };
    v656.prototype.po = function (p667, p668) {
      if (this.no !== p667) {
        this.no = p667;
      }
      var v625 = vO4.fa(vO4._(p668 * 100), 0, 100);
      if (this.mo !== v625) {
        v654.css("width", v625 + "%");
        v655.html(v625 + " %");
      }
    };
    vO2.$k = v656;
    v657 = $("#mm-line-top");
    $("#mm-line-center");
    $("#mm-line-bottom");
    v658 = $("#mm-bottom-buttons");
    v659 = $("#mm-menu-cont");
    v660 = $("#mm-loading");
    v661 = $("#mm-loading-progress-bar");
    v662 = $("#mm-loading-progress-text");
    $("#mm-event-text");
    v663 = $("#mm-skin-canv");
    v664 = $("#mm-skin-prev");
    v665 = $("#mm-skin-next");
    v666 = $("#mm-skin-over");
    v667 = $("#mm-skin-over-button-list");
    v668 = $("#mm-params-nickname");
    v669 = $("#mm-params-game-mode");
    v670 = $("#mm-action-play");
    v671 = $("#mm-action-guest");
    v672 = $("#mm-action-login");
    v673 = $("#mm-player-info");
    v674 = $("#mm-store");
    v675 = $("#mm-leaders");
    v676 = $("#mm-settings");
    v677 = $("#mm-coins-box");
    v678 = $("#mm-player-avatar");
    v679 = $("#mm-player-username");
    v680 = $("#mm-coins-val");
    v681 = $("#mm-player-exp-bar");
    v682 = $("#mm-player-exp-val");
    v683 = $("#mm-player-level");
    (v684 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.kl);
      this.mo = -1;
      this.no = "";
      this.ro = new vO2.Lm(v663);
      v669.click(function () {
        ooo.ij.if();
      });
      v663.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      v664.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      v665.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      v668.keypress(function (p669) {
        vO7.r1 = false;
        if (p669.keyCode === 13) {
          ooo.to();
        }
      });
      v670.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      v671.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      v672.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      v676.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      v673.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      v675.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      v674.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      v677.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var v626 = vO2.Cg.Og(vO2.Cg.Ig);
      if (v626 !== "ARENA" && v626 !== "TEAM2") {
        v626 = "ARENA";
      }
      v669.val(v626);
    })).prototype.Sa = function () {
      var vThis23 = this;
      function f81(p670, p671) {
        if (p670.pm) {
          p671.skinId = p670.pm.Tj;
          p671.eyesId = p670.pm.Uj;
          p671.mouthId = p670.pm.Vj;
          p671.hatId = p670.pm.Wj;
          p671.glassesId = p670.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          f81(vO7, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), vO2._j.$j);
          ooo.so.lk(ooo.ok.Vl(), vO2._j.ak);
          ooo.so.lk(ooo.ok.Wl(), vO2._j.bk);
          ooo.so.lk(ooo.ok.Xl(), vO2._j.dk);
          ooo.so.lk(ooo.ok.Yl(), vO2._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), vO2._j.$j);
          ooo.so.lk(0, vO2._j.ak);
          ooo.so.lk(0, vO2._j.bk);
          ooo.so.lk(0, vO2._j.dk);
          ooo.so.lk(0, vO2._j.ck);
        }
      });
      ooo.ok.fm(function () {
        v670.toggle(ooo.ok.nk());
        v672.toggle(!ooo.ok.nk());
        v671.toggle(!ooo.ok.nk());
        v675.toggle(ooo.ok.nk());
        v674.toggle(ooo.ok.nk());
        v677.toggle(ooo.ok.nk());
        v673.toggle(true);
        v676.toggle(true);
        if (ooo.ok.nk()) {
          v666.hide();
          v679.html(ooo.ok.Ll());
          v678.attr("src", ooo.ok.Nl());
          v680.html(ooo.ok.Ql());
          v681.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
          v682.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
          v683.html(ooo.ok.Rl());
          v668.val(ooo.ok.Ml());
        } else {
          v666.toggle(vO3.co.bo && !ooo.xo());
          v679.html(v679.data("guest"));
          v678.attr("src", vO3.H.M);
          v680.html("10");
          v681.width("0");
          v682.html("");
          v683.html(1);
          v668.val(vO2.Cg.Og(vO2.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        vThis23.ro.Gm(ooo.so.ek());
      });
    };
    v684.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.g(vO2.Uf.Rn, 500);
      vO5.f.g(vO2.Uf.Sn, 500);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.g(vO2.Uf.Vn, 500);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v684.prototype.yo = function () {
      vO5.f.g(v657, 500);
      vO5.f.g(v658, 500);
      vO5.f.g(v659, 500);
      vO5.f.h(v660, 100);
    };
    v684.prototype.zo = function () {
      vO5.f.h(v657, 100);
      vO5.f.h(v658, 100);
      vO5.f.h(v659, 100);
      vO5.f.g(v660, 500);
    };
    v684.prototype.po = function (p672, p673) {
      if (this.no !== p672) {
        this.no = p672;
      }
      var v627 = vO4.fa(vO4._(p673 * 100), 0, 100);
      if (this.mo !== v627) {
        v661.css("width", v627 + "%");
        v662.html(v627 + " %");
      }
    };
    v684.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    v684.prototype.hl = function () {
      this.ro.rg(false);
    };
    v684.prototype.qg = function () {
      this.ro.qg();
    };
    v684.prototype.ug = function (p674, p675) {
      this.ro.ug();
    };
    v684.prototype.Ml = function () {
      return v668.val();
    };
    v684.prototype.Ao = function () {
      return v669.val();
    };
    v684.prototype.uo = function () {
      var v628 = $("#mm-advice-cont").children();
      var vLN0106 = 0;
      vO4.X(function () {
        v628.eq(vLN0106).fadeOut(500, function () {
          if (++vLN0106 >= v628.length) {
            vLN0106 = 0;
          }
          v628.eq(vLN0106).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    v684.prototype.vo = function () {
      if (vO3.co.bo && !ooo.xo()) {
        v666.show();
        var v629 = vO4.U("index.game.main.menu.unlockSkins.share");
        var vEncodeURIComponent = encodeURIComponent(vO4.U("index.game.main.menu.unlockSkins.comeAndPlay"));
        v667.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent + "\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + v629 + "</span></a>").click(function f82() {
          ooo.Bo(true);
          vO4.Y(function () {
            v666.hide();
          }, 3000);
        }));
      }
    };
    vO2.Ck = v684;
    (v685 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
    })).prototype.Sa = function () {};
    v685.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.h(vO2.Uf.Tf, 50);
      vO5.f.h(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    vO2.el = v685;
    (v686 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
    })).prototype.Sa = function () {};
    v686.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.g(vO2.Uf.Zn, 500);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v686.prototype.nl = function () {};
    vO2.Xk = v686;
    v687 = $("#toaster-stack");
    (v688 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    v688.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.g(vO2.Uf.Sn, 500);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.g(vO2.Uf.Xn, 500);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v688.prototype.nl = function () {
      this.Eo();
    };
    v688.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    v688.prototype.Fo = function (p676) {
      this.Co.unshift(p676);
      vO4.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v688.prototype.km = function (p677) {
      this.Co.push(p677);
      vO4.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v688.prototype.Eo = function () {
      var vThis24 = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var v630 = this.Co.shift();
        this.Do = v630;
        var v631 = v630.ag();
        vO5.f.g(v631, 300);
        v687.append(v631);
        v630.Go = function () {
          v631.fadeOut(300);
          vO4.Y(function () {
            v631.remove();
          }, 300);
          if (vThis24.Do === v630) {
            vThis24.Do = null;
          }
          vThis24.Eo();
        };
        v630.nl();
      }
    };
    vO2.Zk = v688;
    vO2.ll = {
      ao: 0,
      kl: 1
    };
    v689 = $("#popup-menu-label");
    v690 = $("#popup-menu-coins-box");
    v691 = $("#popup-menu-coins-val");
    $("#popup-menu-back").click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    v690.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (v692 = vO4.ca(vO2.Uf, function (p678, p679) {
      vO2.Uf.call(this, vO2.ll.kl);
      this.Xa = p678;
      this.Io = p679;
      this.Jo = [];
    })).prototype.Sa = function () {
      v692.parent.prototype.Sa.call(this);
      if (!v692.Ko) {
        v692.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            v691.html(ooo.ok.Ql());
          } else {
            v691.html("0");
          }
        });
      }
      vO5.f.h(vO2.Ho.Lo, 100);
    };
    v692.Mo = $("#coins-view");
    v692.No = $("#leaders-view");
    v692.Oo = $("#profile-view");
    v692.Po = $("#login-view");
    v692.Qo = $("#settings-view");
    v692.Ro = $("#skins-view");
    v692.So = $("#store-view");
    v692.To = $("#wear-view");
    v692.Uo = $("#withdraw-consent-view");
    v692.Vo = $("#delete-account-view");
    v692.Lo = $("#please-wait-view");
    v692.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 1);
      vO5.f.g(vO2.Uf.Qn, 500);
      vO5.f.g(vO2.Uf.Rn, 200);
      vO5.f.g(vO2.Uf.Sn, 200);
      vO5.f.h(vO2.Uf.Tn, 200);
      vO5.f.h(vO2.Uf.Un, 200);
      vO5.f.h(vO2.Uf.Vn, 200);
      vO5.f.g(vO2.Uf.Wn, 200);
      vO5.f.h(vO2.Uf.Xn, 200);
      vO5.f.h(vO2.Uf.Yn, 200);
      vO5.f.h(vO2.Uf.Zn, 200);
      vO5.f.h(vO2.Uf.$n, 200);
      vO5.f.h(vO2.Uf._n, 200);
      v689.html(this.Xa);
      v690.toggle(this.Io);
      this.Wo();
    };
    v692.prototype.Wo = function () {};
    v692.prototype.Xo = function (p680) {
      var vThis25 = this;
      var v632 = vO4.va(0, 2147483647) & 2147483647;
      this.Jo.push(v632);
      vO5.f.g(vO2.Ho.Lo, 100);
      vO4.Y(function () {
        vThis25.Yo(v632);
      }, p680);
      return new vF18(this, v632);
    };
    v692.prototype.Yo = function (p681) {
      var v633 = this.Jo.indexOf(p681);
      if (!(v633 < 0)) {
        this.Jo.splice(v633, 1);
        if (this.Jo.length === 0) {
          vO5.f.h(vO2.Ho.Lo, 100);
        }
      }
    };
    vO2.Ho = v692;
    var v634;
    var v635;
    var v636;
    var v637;
    var v638;
    var v639;
    var v640;
    var v641;
    var v642;
    var v643;
    var v644;
    var v645;
    var v646;
    var v647;
    var v648;
    var v649;
    var v650;
    var v651;
    var v652;
    var v653;
    var v654;
    var v655;
    var v656;
    var v657;
    var v658;
    var v659;
    var v660;
    var v661;
    var v662;
    var v663;
    var v664;
    var v665;
    var v666;
    var v667;
    var v668;
    var v669;
    var v670;
    var v671;
    var v672;
    var v673;
    var v674;
    var v675;
    var v676;
    var v677;
    var v678;
    var v679;
    var v680;
    var v681;
    var v682;
    var v683;
    var v684;
    var v685;
    var v686;
    var v687;
    var v688;
    var v689;
    var v690;
    var v691;
    var v692;
    var v693;
    var v694;
    var v695;
    var v696;
    var v697;
    var v698;
    var v699;
    var v700;
    var v701;
    var v702;
    var v703;
    var v704;
    var v705;
    var v706;
    var v707;
    var v708;
    var v709;
    var v710;
    var v711;
    var v712;
    var v713;
    var v714;
    var v715;
    var v716;
    var v717;
    var v718;
    var v719;
    var v720;
    var v721;
    var v722;
    var v723;
    var v724;
    var v725;
    var v726;
    var v727;
    var v728;
    var v729;
    var v730;
    var v731;
    var v732;
    var v733;
    var v734;
    var v735;
    var v736;
    var v737;
    var v738;
    var v739;
    var v740;
    var v741;
    var v742;
    var v743;
    var v744;
    var v745;
    var v746;
    var v747;
    var v748;
    var v749;
    var v750;
    var v751;
    var v752;
    var v753;
    var v754;
    var v755;
    var v756;
    var v757;
    var v758;
    var v759;
    var v760;
    var v761;
    var v762;
    var v763;
    var v764;
    var v765;
    var v766;
    var v767;
    var v768;
    var v769;
    var v770;
    var v771;
    var v772;
    var v773;
    var v774;
    var v775;
    var v776;
    var v777;
    var v778;
    var v779;
    var v780;
    var v781;
    var v782;
    var v783;
    var v784;
    var vF18 = function () {
      function f83(p682, p683) {
        this.Zo = p682;
        this.$o = p683;
      }
      f83.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return f83;
    }();
    v693 = $("#store-buy-coins_125000");
    v694 = $("#store-buy-coins_50000");
    v695 = $("#store-buy-coins_16000");
    v696 = $("#store-buy-coins_7000");
    v697 = $("#store-buy-coins_3250");
    v698 = $("#store-buy-coins_1250");
    (v699 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.coins.tab"), false);
      var vThis26 = this;
      v693.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_125000");
      });
      v694.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_50000");
      });
      v695.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_16000");
      });
      v696.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_7000");
      });
      v697.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_3250");
      });
      v698.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_1250");
      });
    })).prototype.Sa = function () {
      v699.parent.prototype.Sa.call(this);
    };
    v699.prototype.Wo = function () {
      vO5.f.g(vO2.Ho.Mo, 200);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v699.prototype.nl = function () {
      ooo.ij.jf();
    };
    v699.prototype.ap = function (p684) {};
    vO2.Ik = v699;
    v700 = $("#highscore-table");
    v701 = $("#leaders-button-level");
    v702 = $("#leaders-button-highscore");
    v703 = $("#leaders-button-kills");
    v704 = "byLevel";
    v705 = "byHighScore";
    v706 = "byKillsAndHeadShots";
    (v707 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.leaders.tab"), true);
      var vThis27 = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: v701,
          fp: v704
        },
        gp: {
          ep: v702,
          fp: v705
        },
        hp: {
          ep: v703,
          fp: v706
        }
      };
      v701.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.dp);
      });
      v702.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.gp);
      });
      v703.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.hp);
      });
    })).prototype.Sa = function () {
      v707.parent.prototype.Sa.call(this);
    };
    v707.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.g(vO2.Ho.No, 200);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v707.prototype.nl = function () {
      var vThis28 = this;
      ooo.ij.jf();
      var v785 = this.Xo(5000);
      var v786 = vO3.H.J + "/pub/leaders";
      vO4.Aa(v786, function () {
        var vO31 = {
          [v704]: [],
          [v705]: [],
          [v706]: []
        };
        vThis28.bp = vO31;
        vThis28.ip(vThis28.jp ?? vThis28.cp.dp);
        v785._o();
      }, function (p685) {
        vThis28.bp = p685;
        vThis28.ip(vThis28.jp ?? vThis28.cp.dp);
        v785._o();
      });
    };
    v707.prototype.ip = function (p686) {
      this.jp = p686;
      for (var v787 in this.cp) {
        if (this.cp.hasOwnProperty(v787)) {
          this.cp[v787].ep.removeClass("pressed");
        }
      }
      ;
      this.jp.ep.addClass("pressed");
      for (var v788 = this.bp[this.jp.fp], vLS6 = "", vLN0107 = 0; vLN0107 < v788.length; vLN0107++) {
        var v789 = v788[vLN0107];
        vLS6 += "<div class=\"table-row\"><span>" + (vLN0107 + 1) + "</span><span><img src=\"" + v789.avatarUrl + "\"/></span><span>" + v789.username + "</span><span>" + v789.level + "</span><span>" + v789.highScore + "</span><span>" + v789.headShots + " / " + v789.kills + "</span></div>";
      }
      ;
      v700.empty();
      v700.append(vLS6);
    };
    vO2.Kk = v707;
    v708 = $("#popup-login-gg");
    v709 = $("#popup-login-fb");
    (v710 = vO4.ca(vO2.Ho, function () {
      var vThis29 = this;
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.login.tab"), false);
      v708.click(function () {
        ooo.ij.if();
        var v790 = vThis29.Xo(10000);
        vO4.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v790._o();
          });
        }, 500);
      });
      v709.click(function () {
        ooo.ij.if();
        var v791 = vThis29.Xo(10000);
        vO4.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v791._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      v710.parent.prototype.Sa.call(this);
    };
    v710.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.g(vO2.Ho.Po, 200);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v710.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO2.Ok = v710;
    v711 = $("#profile-avatar");
    v712 = $("#profile-username");
    v713 = $("#profile-experience-bar");
    v714 = $("#profile-experience-val");
    v715 = $("#profile-level");
    v716 = $("#profile-stat-highScore");
    v717 = $("#profile-stat-bestSurvivalTime");
    v718 = $("#profile-stat-kills");
    v719 = $("#profile-stat-headshots");
    v720 = $("#profile-stat-gamesPlayed");
    v721 = $("#profile-stat-totalTimeSpent");
    v722 = $("#profile-stat-registrationDate");
    (v723 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.profile.tab"), true);
    })).prototype.Sa = function () {
      v723.parent.prototype.Sa.call(this);
    };
    v723.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.g(vO2.Ho.Oo, 200);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v723.prototype.nl = function () {
      ooo.ij.jf();
      var v792 = ooo.ok.dm();
      var v793 = moment([v792.year, v792.month - 1, v792.day]).format("LL");
      v712.html(ooo.ok.Ll());
      v711.attr("src", ooo.ok.Nl());
      v713.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
      v714.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
      v715.html(ooo.ok.Rl());
      v716.html(ooo.ok.Zl());
      v717.html(vO4.$(ooo.ok.$l()));
      v718.html(ooo.ok._l());
      v719.html(ooo.ok.am());
      v720.html(ooo.ok.bm());
      v721.html(vO4.$(ooo.ok.cm()));
      v722.html(v793);
    };
    vO2.Mk = v723;
    v724 = $("#settings-music-enabled-switch");
    v725 = $("#settings-sfx-enabled-switch");
    v726 = $("#settings-show-names-switch");
    v727 = $("#popup-logout");
    v728 = $("#popup-logout-container");
    v729 = $("#popup-delete-account");
    v730 = $("#popup-delete-account-container");
    v731 = $("#popup-withdraw-consent");
    (v732 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.settings.tab"), false);
      var vThis30 = this;
      v724.click(function () {
        var v794 = !!v724.prop("checked");
        vO2.Cg.Ng(vO2.Cg.Fg, v794, 30);
        ooo.ij.$e(v794);
        ooo.ij.if();
      });
      v725.click(function () {
        var v795 = !!v725.prop("checked");
        vO2.Cg.Ng(vO2.Cg.Gg, v795, 30);
        ooo.ij.Xe(v795);
        ooo.ij.if();
      });
      v726.click(function () {
        ooo.ij.if();
      });
      v727.click(function () {
        ooo.ij.if();
        vThis30.Xo(500);
        ooo.ok.qm();
      });
      v729.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      v731.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var v796;
      var v797;
      var v798;
      v732.parent.prototype.Sa.call(this);
      v796 = vO2.Cg.Og(vO2.Cg.Fg) !== "false";
      v724.prop("checked", v796);
      ooo.ij.$e(v796);
      v797 = vO2.Cg.Og(vO2.Cg.Gg) !== "false";
      v725.prop("checked", v797);
      ooo.ij.Xe(v797);
      v798 = vO2.Cg.Og(vO2.Cg.Eg) !== "false";
      v726.prop("checked", v798);
      ooo.ok.em(function () {
        v728.toggle(ooo.ok.nk());
        v730.toggle(ooo.ok.nk());
      });
    };
    v732.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.g(vO2.Ho.Qo, 200);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v732.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        v731.show();
      } else {
        v731.hide();
      }
    };
    v732.prototype.Gi = function () {
      return v726.prop("checked");
    };
    vO2.Pk = v732;
    v733 = $("#store-view-canv");
    v734 = $("#skin-description-text");
    v735 = $("#skin-group-description-text");
    v736 = $("#store-locked-bar");
    v737 = $("#store-locked-bar-text");
    v738 = $("#store-buy-button");
    v739 = $("#store-item-price");
    v740 = $("#store-groups");
    v741 = $("#store-view-prev");
    v742 = $("#store-view-next");
    (v743 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.skins.tab"), true);
      var vThis31 = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new vO2.Lm(v733);
      v738.click(function () {
        ooo.ij.if();
        vThis31.pp();
      });
      v741.click(function () {
        ooo.ij.if();
        vThis31.lp.qp();
      });
      v742.click(function () {
        ooo.ij.if();
        vThis31.lp.rp();
      });
    })).prototype.Sa = function () {
      v743.parent.prototype.Sa.call(this);
      var vThis32 = this;
      ooo.ud.Jc(function () {
        var v799 = ooo.ud.Gc();
        vThis32.mp = [];
        for (var vLN0108 = 0; vLN0108 < v799.skinGroupArrayDict.length; vLN0108++) {
          vThis32.mp.push(new v744(vThis32, v799.skinGroupArrayDict[vLN0108]));
        }
        ;
        vThis32.np = {};
        for (var vLN0109 = 0; vLN0109 < v799.skinArrayDict.length; vLN0109++) {
          var v800 = v799.skinArrayDict[vLN0109];
          vThis32.np[v800.id] = v800;
        }
        ;
        vThis32.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis32.tp(false);
      });
    };
    v743.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.g(vO2.Ho.Ro, 200);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v743.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    v743.prototype.hl = function () {
      this.op.rg(false);
    };
    v743.prototype.qg = function () {
      this.op.qg();
    };
    v743.prototype.ug = function (p687, p688) {
      this.op.ug();
    };
    v743.prototype.sp = function () {
      var vThis33 = this;
      var vThis34 = this;
      v740.empty();
      for (var vLN0110 = 0; vLN0110 < this.mp.length; vLN0110++) {
        (function (p689) {
          var v801 = vThis33.mp[p689];
          var v802 = vO2.d.createElement("li");
          v740.append(v802);
          var v$5 = $(v802);
          if (vThis34.xp && vThis34.xp.isCustom) {
            v$5.addClass("iscustom");
          }
          v$5.html(v801.up());
          v$5.click(function () {
            ooo.ij.if();
            vThis34.vp(v801);
          });
          v801.wp = v$5;
        })(vLN0110);
      }
      ;
      if (this.mp.length > 0) {
        var v803 = ooo.so.Zj(vO2._j.$j);
        for (var vLN0111 = 0; vLN0111 < this.mp.length; vLN0111++) {
          var v804 = this.mp[vLN0111];
          for (var v805 = v804.xp.list, vLN0112 = 0; vLN0112 < v805.length; vLN0112++) {
            if (v805[vLN0112] === v803) {
              v804.yp = vLN0112;
              this.vp(v804);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    v743.prototype.vp = function (p690) {
      if (this.lp !== p690) {
        this.lp = p690;
        v740.children().removeClass("pressed");
        if (this.lp.wp) {
          this.lp.wp.addClass("pressed");
        }
        v735.html("");
        if (p690.xp != null) {
          var v806 = ooo.ud.Gc().textDict[p690.xp.description];
          if (v806 != null) {
            v735.html(vO4.aa(vO4.V(v806)));
          }
        }
        ;
        this.tp(true);
      }
    };
    v743.prototype.zp = function () {
      if (this.lp == null) {
        return vO2.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    v743.prototype.pp = function () {
      var v807 = this.zp();
      if (v807.Cj()) {
        var v808 = v807.Mc();
        this.Bp(v808);
      }
    };
    v743.prototype.Bp = function (p691) {
      var v809 = ooo.so.mk(p691, vO2._j.$j);
      if (v809 != null) {
        var v810 = v809.pk();
        if (!(ooo.ok.Ql() < v810)) {
          var v811 = ooo.so.Zj(vO2._j.$j);
          var v812 = ooo.so.Zj(vO2._j.ak);
          var v813 = ooo.so.Zj(vO2._j.bk);
          var v814 = ooo.so.Zj(vO2._j.dk);
          var v815 = ooo.so.Zj(vO2._j.ck);
          var v816 = this.Xo(5000);
          ooo.ok.nm(p691, vO2._j.$j, function () {
            v816._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v811, vO2._j.$j);
              ooo.so.lk(v812, vO2._j.ak);
              ooo.so.lk(v813, vO2._j.bk);
              ooo.so.lk(v814, vO2._j.dk);
              ooo.so.lk(v815, vO2._j.ck);
              ooo.so.lk(p691, vO2._j.$j);
              v816._o();
            });
          });
        }
      }
    };
    v743.prototype.tp = function (p692) {
      var v817 = ooo.so.ek();
      var v818 = this.zp();
      if (v818.Cj()) {
        var v819 = v818.Mc();
        var v820 = ooo.so.mk(v819, vO2._j.$j);
        var v821 = false;
        if (ooo.so.ik(v819, vO2._j.$j)) {
          v736.hide();
          v738.hide();
        } else if (v820 == null || v820.qk()) {
          v821 = true;
          v736.show();
          v738.hide();
          v737.text(vO4.U("index.game.popup.menu.store.locked"));
          if (v820 != null && v820.qk()) {
            var v822 = ooo.ud.Gc().textDict[v820.ln()];
            if (v822 != null) {
              v737.text(vO4.V(v822));
            }
          }
        } else {
          v736.hide();
          v738.show();
          v739.html(v820.pk());
        }
        ;
        v734.html("");
        if (v820 != null && v820.mn() != null) {
          var v823 = ooo.ud.Gc().textDict[v820.mn()];
          if (v823 != null) {
            v734.html(vO4.aa(vO4.V(v823)));
          }
        }
        ;
        this.op.Gm(v817.Cn(v819));
        this.op.an(v821);
        if (p692) {
          ooo.so.lk(v819, vO2._j.$j);
        }
      }
    };
    v744 = function () {
      function f84(p693, p694) {
        this.Cp = p693;
        this.yp = 0;
        this.xp = p694;
      }
      f84.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      f84.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      f84.prototype.up = function () {
        let v824 = vO4.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -1 || !(v824 = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search("https://lh3.googleusercontent.com") == -1 || !(v824 = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            v824 = "<img src=\"" + vO7.s_l + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return v824;
      };
      f84.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return vO2.yj.Aj();
        } else {
          return vO2.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return f84;
    }();
    vO2.Rk = v743;
    v745 = $("#store-go-coins-button");
    v746 = $("#store-go-skins-button");
    v747 = $("#store-go-wear-button");
    (v748 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.store.tab"), true);
      v745.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      v746.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      v747.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      v748.parent.prototype.Sa.call(this);
    };
    v748.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.g(vO2.Ho.So, 200);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v748.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO2.Tk = v748;
    v749 = $("#wear-view-canv");
    v750 = $("#wear-description-text");
    v751 = $("#wear-locked-bar");
    v752 = $("#wear-locked-bar-text");
    v753 = $("#wear-buy-button");
    v754 = $("#wear-item-price");
    v755 = $("#wear-eyes-button");
    v756 = $("#wear-mouths-button");
    v757 = $("#wear-glasses-button");
    v758 = $("#wear-hats-button");
    v759 = $("#wear-tint-chooser");
    v760 = $("#wear-view-prev");
    v761 = $("#wear-view-next");
    (v762 = vO4.ca(vO2.Ho, function () {
      var vThis35 = this;
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.wear.tab"), true);
      var vThis36 = this;
      this.Dp = [];
      this.ak = new v763(this, vO2._j.ak, v755);
      this.bk = new v763(this, vO2._j.bk, v756);
      this.dk = new v763(this, vO2._j.dk, v757);
      this.ck = new v763(this, vO2._j.ck, v758);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new vO2.Lm(v749);
      v753.click(function () {
        ooo.ij.if();
        vThis36.Kp();
      });
      v760.click(function () {
        ooo.ij.if();
        vThis36.Ep.Lp();
      });
      v761.click(function () {
        ooo.ij.if();
        vThis36.Ep.Mp();
      });
      v755.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.ak);
      });
      v756.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.bk);
      });
      v757.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.dk);
      });
      v758.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      v762.parent.prototype.Sa.call(this);
      var vThis37 = this;
      ooo.ud.Jc(function () {
        var v825 = ooo.ud.Gc();
        vThis37.Fp = v825.eyesDict;
        vThis37.Gp = v825.mouthDict;
        vThis37.Hp = v825.glassesDict;
        vThis37.Ip = v825.hatDict;
        vThis37.Jp = v825.colorDict;
        vThis37.ak.Op(v825.eyesVariantArray);
        vThis37.ak.Pp(vThis37.Fp);
        vThis37.bk.Op(v825.mouthVariantArray);
        vThis37.bk.Pp(vThis37.Gp);
        vThis37.dk.Op(v825.glassesVariantArray);
        vThis37.dk.Pp(vThis37.Hp);
        vThis37.ck.Op(v825.hatVariantArray);
        vThis37.ck.Pp(vThis37.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis37.tp(false);
      });
    };
    v762.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.g(vO2.Ho.To, 200);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v762.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    v762.prototype.hl = function () {
      this.op.rg(false);
    };
    v762.prototype.qg = function () {
      this.op.qg();
    };
    v762.prototype.ug = function (p695, p696) {
      this.op.ug();
    };
    v762.prototype.Np = function (p697) {
      this.Ep = p697;
      for (var vLN0113 = 0; vLN0113 < this.Dp.length; vLN0113++) {
        this.Dp[vLN0113].ep.removeClass("pressed");
      }
      ;
      this.Ep.ep.addClass("pressed");
      this.Ep.ml();
    };
    v762.prototype.Qp = function () {
      if (this.Ep == null) {
        return vO2.yj.Aj();
      } else {
        return vO2.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    v762.prototype.Kp = function () {
      var v826 = this.Qp();
      if (v826.Cj()) {
        var v827 = v826.Mc();
        this.Rp(v827.Je, v827.Wd);
      }
    };
    v762.prototype.Rp = function (p698, p699) {
      var v828 = ooo.so.mk(p698, p699);
      if (v828 != null) {
        var v829 = v828.pk();
        if (!(ooo.ok.Ql() < v829)) {
          var v830 = ooo.so.Zj(vO2._j.$j);
          var v831 = ooo.so.Zj(vO2._j.ak);
          var v832 = ooo.so.Zj(vO2._j.bk);
          var v833 = ooo.so.Zj(vO2._j.dk);
          var v834 = ooo.so.Zj(vO2._j.ck);
          var v835 = this.Xo(5000);
          ooo.ok.nm(p698, p699, function () {
            v835._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v830, vO2._j.$j);
              ooo.so.lk(v831, vO2._j.ak);
              ooo.so.lk(v832, vO2._j.bk);
              ooo.so.lk(v833, vO2._j.dk);
              ooo.so.lk(v834, vO2._j.ck);
              ooo.so.lk(p698, p699);
              v835._o();
            });
          });
        }
      }
    };
    v762.prototype.tp = function (p700) {
      var v836 = ooo.so.ek();
      var v837 = this.Qp();
      if (v837.Cj()) {
        var v838 = v837.Mc();
        var v839 = ooo.so.mk(v838.Je, v838.Wd);
        var v840 = false;
        if (ooo.so.ik(v838.Je, v838.Wd)) {
          v751.hide();
          v753.hide();
        } else if (v839 == null || v839.qk()) {
          v840 = true;
          v751.show();
          v753.hide();
          v752.text(vO4.U("index.game.popup.menu.store.locked"));
          if (v839 != null && v839.qk()) {
            var v841 = ooo.ud.Gc().textDict[v839.ln()];
            if (v841 != null) {
              v752.text(vO4.V(v841));
            }
          }
        } else {
          v751.hide();
          v753.show();
          v754.html(v839.pk());
        }
        ;
        v750.html("");
        if (v839 != null && v839.mn() != null) {
          var v842 = ooo.ud.Gc().textDict[v839.mn()];
          if (v842 != null) {
            v750.html(vO4.aa(vO4.V(v842)));
          }
        }
        ;
        var v843 = this.op;
        switch (v838.Wd) {
          case vO2._j.ak:
            v843.Gm(v836.Dn(v838.Je));
            v843.bn(v840);
            break;
          case vO2._j.bk:
            v843.Gm(v836.En(v838.Je));
            v843.cn(v840);
            break;
          case vO2._j.dk:
            v843.Gm(v836.Gn(v838.Je));
            v843.en(v840);
            break;
          case vO2._j.ck:
            v843.Gm(v836.Fn(v838.Je));
            v843.dn(v840);
        }
        ;
        if (p700) {
          ooo.so.lk(v838.Je, v838.Wd);
        }
      }
    };
    v763 = function () {
      function f85(p701, p702, p703) {
        this.Cp = p701;
        this.Wd = p702;
        this.ep = p703;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      f85.prototype.Op = function (p704) {
        this.Sp = p704;
      };
      f85.prototype.Pp = function (p705) {
        this.Lc = p705;
      };
      f85.prototype.ml = function () {
        var v844 = ooo.so.Zj(this.Wd);
        for (var vLN0114 = 0; vLN0114 < this.Sp.length; vLN0114++) {
          for (var vLN0115 = 0; vLN0115 < this.Sp[vLN0114].length; vLN0115++) {
            if (this.Sp[vLN0114][vLN0115] === v844) {
              this.Vp(vLN0114);
              this.Wp(vLN0115);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      f85.prototype.Lp = function () {
        var v845 = this.Tp - 1;
        if (v845 < 0) {
          v845 = this.Sp.length - 1;
        }
        this.Vp(v845);
        this.Wp(this.Up % this.Sp[v845].length);
      };
      f85.prototype.Mp = function () {
        var v846 = this.Tp + 1;
        if (v846 >= this.Sp.length) {
          v846 = 0;
        }
        this.Vp(v846);
        this.Wp(this.Up % this.Sp[v846].length);
      };
      f85.prototype.Vp = function (p706) {
        var vThis38 = this;
        if (!(p706 < 0) && !(p706 >= this.Sp.length)) {
          this.Tp = p706;
          v759.empty();
          var v847 = this.Sp[this.Tp];
          if (v847.length > 1) {
            for (var vLN0116 = 0; vLN0116 < v847.length; vLN0116++) {
              (function (p707) {
                var v848 = v847[p707];
                var v849 = vThis38.Lc[v848];
                var v850 = "#" + vThis38.Cp.Jp[v849.prime];
                var v$6 = $("<div style=\"border-color: " + v850 + "\"></div>");
                v$6.click(function () {
                  ooo.ij.if();
                  vThis38.Wp(p707);
                });
                v759.append(v$6);
              })(vLN0116);
            }
          }
        }
      };
      f85.prototype.Wp = function (p708) {
        if (!(p708 < 0) && !(p708 >= this.Sp[this.Tp].length)) {
          this.Up = p708;
          v759.children().css("background-color", "transparent");
          var v851 = v759.children(":nth-child(" + (1 + p708) + ")");
          v851.css("background-color", v851.css("border-color"));
          this.Cp.tp(true);
        }
      };
      f85.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return f85;
    }();
    vO2.Vk = v762;
    v764 = $(".play-button");
    v765 = $(".close-button");
    (v766 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.consent.tab"), false);
      v764.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new vO2.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      v765.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      v766.parent.prototype.Sa.call(this);
    };
    v766.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.g(vO2.Ho.Uo, 200);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v766.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO2.Ek = v766;
    v767 = $("#delete-account-timer");
    v768 = $("#delete-account-yes");
    v769 = $("#delete-account-no");
    (v770 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.delete.tab"), false);
      v768.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      v769.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      v770.parent.prototype.Sa.call(this);
    };
    v770.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.g(vO2.Ho.Vo, 200);
    };
    v770.prototype.nl = function () {
      ooo.ij.nf();
      vO5.f.h(v768, 1);
      vO5.f.g(v767, 1);
      v767.text("..10 ..");
      this.$p();
      this._p(function () {
        v767.text("..9 ..");
      }, 1000);
      this._p(function () {
        v767.text("..8 ..");
      }, 2000);
      this._p(function () {
        v767.text("..7 ..");
      }, 3000);
      this._p(function () {
        v767.text("..6 ..");
      }, 4000);
      this._p(function () {
        v767.text("..5 ..");
      }, 5000);
      this._p(function () {
        v767.text("..4 ..");
      }, 6000);
      this._p(function () {
        v767.text("..3 ..");
      }, 7000);
      this._p(function () {
        v767.text("..2 ..");
      }, 8000);
      this._p(function () {
        v767.text("..1 ..");
      }, 9000);
      this._p(function () {
        vO5.f.g(v768, 300);
        vO5.f.h(v767, 1);
      }, 10000);
    };
    v770.prototype._p = function (p709, p710) {
      var v852 = vO4.Y(p709, p710);
      this.Zp.push(v852);
    };
    v770.prototype.$p = function () {
      for (var vLN0117 = 0; vLN0117 < this.Zp.length; vLN0117++) {
        vO4.Z(this.Zp[vLN0117]);
      }
      ;
      this.Zp = [];
    };
    vO2.Gk = v770;
    vO2.aq = function () {
      function f86() {
        this.Go = function () {};
      }
      f86.prototype.ag = function () {};
      f86.prototype.nl = function () {};
      return f86;
    }();
    (v771 = vO4.ca(vO2.aq, function (p711) {
      vO2.aq.call(this);
      var v853 = vO4.Ca() + "_" + vO4._(1000 + vO4.ma() * 8999);
      this.bq = $("<div id=\"" + v853 + "\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">" + p711 + "</div><div class=\"toaster-coins-close\">" + vO4.U("index.game.toaster.continue") + "</div></div>");
      var vThis39 = this;
      this.bq.find(".toaster-coins-close").click(function () {
        ooo.ij.if();
        vThis39.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v771.prototype.nl = function () {
      ooo.ij.lf();
    };
    vO2.mm = v771;
    (v772 = vO4.ca(vO2.aq, function (p712) {
      vO2.aq.call(this);
      var v854 = vO4.Ca() + "_" + vO4._(1000 + vO4.ma() * 8999);
      this.bq = $("<div id=\"" + v854 + "\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">" + p712 + "</div><div class=\"toaster-levelup-text\">" + vO4.U("index.game.toaster.levelup") + "</div><div class=\"toaster-levelup-close\">" + vO4.U("index.game.toaster.continue") + "</div></div>");
      var vThis40 = this;
      this.bq.find(".toaster-levelup-close").click(function () {
        ooo.ij.if();
        vThis40.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v772.prototype.nl = function () {
      ooo.ij.kf();
    };
    vO2.lm = v772;
    (v773 = vO4.ca(vO2.aq, function () {
      vO2.aq.call(this);
      var vThis41 = this;
      var v855 = vO4.Ca() + "_" + vO4._(1000 + vO4.ma() * 8999);
      this.bq = $("<div id=\"" + v855 + "\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"" + vO3.H.L + "\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">" + vO4.U("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO4.U("index.game.toaster.consent.link") + "</a></div><div class=\"toaster-consent-close\">" + vO4.U("index.game.toaster.consent.iAccept") + "</div></div>");
      this.cq = this.bq.find(".toaster-consent-close");
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        vThis41.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v773.prototype.nl = function () {
      var vThis42 = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        vO4.Y(function () {
          vThis42.cq.fadeIn(300);
        }, 2000);
      } else {
        vO4.Y(function () {
          vThis42.Go();
        }, 0);
      }
    };
    vO2.Yp = v773;
    v774 = $("#error-gateway-connection-retry");
    (v775 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      v774.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        vO4.Y(function () {
          var v856 = vO3.H.J + "/pub/healthCheck/ping";
          vO4.Aa(v856, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (p713) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (p714) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (p715, p716) {
              ooo.Xg.Re.po(p715, p716);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    v775.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.g(vO2.Uf.$n, 500);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v775.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO2.al = v775;
    v776 = $("#error-game-connection-retry");
    (v777 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      v776.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    v777.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.g(vO2.Uf._n, 500);
    };
    v777.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO2.cl = v777;
    vO4.dq = function () {
      function f87(p717) {
        var v857 = p717 + vO4._(vO4.ma() * 65535) * 37;
        vO2.Cg.Ng(vO2.Cg.Lg, v857, 30);
      }
      return function () {
        var v858 = parseInt(vO2.Cg.Og(vO2.Cg.Lg)) % 37;
        if (!(v858 >= 0) || !(v858 < vO3.co.fq)) {
          v858 = vO4.ia(0, vO3.co.fq - 2);
        }
        var vO32 = {
          gq: false
        };
        vO32.hq = vO4.Ca();
        vO32.iq = 0;
        vO32.jq = 0;
        vO32.kq = null;
        vO32.lq = vO3.H.Q;
        vO32.mq = vO3.H.P;
        vO32.Mh = null;
        vO32.ud = null;
        vO32.ef = null;
        vO32.ij = null;
        vO32.Xg = null;
        vO32.so = null;
        vO32.ok = null;
        try {
          var vNavigator = navigator;
          if (vNavigator) {
            var v859 = vNavigator.geolocation;
            if (v859) {
              v859.getCurrentPosition(function (p718) {
                var v860 = p718.coords;
                if (_typeof(v860) != "undefined" && _typeof(v860.latitude) != "undefined" && _typeof(v860.longitude) != "undefined") {
                  vO32.kq = p718;
                }
              }, function (p719) {});
            }
          }
        } catch (e21) {}
        ;
        vO32.Sa = function () {
          vO32.Mh = new vO2.nq();
          vO32.Mh.oq = new vO2.si(vO32.Mh);
          vO32.ud = new vO2.Kb();
          vO32.ef = new vO2.wk();
          vO32.ij = new vO2.Pe();
          vO32.Xg = new vO2.zk();
          vO32.so = new vO2.Sj();
          vO32.ok = new vO2.sl();
          try {
            ga("send", "event", "app", vO3.H.I + "_init");
          } catch (e22) {}
          ;
          vO32.Mh.pq = function () {
            vO32.Xg.gl(vO32.Xg.bl);
          };
          vO32.Mh.qq = function () {
            var v861 = vO32.Xg.Jf.Ao();
            try {
              ga("send", "event", "game", vO3.H.I + "_start", v861);
            } catch (e23) {}
            ;
            vO32.ij.Ye(vO2.Pe.Se.Kf);
            vO32.Xg.gl(vO32.Xg.Kf.ho());
          };
          vO32.Mh.rq = function () {
            var v862;
            var v863;
            try {
              ga("send", "event", "game", vO3.H.I + "_end");
            } catch (e24) {}
            ;
            if ($("body").height() >= 430) {
              vO3.co.sq.Va();
            }
            vO32.ud.rc(null, null, null);
            v862 = vO4._(vO32.Mh.Lh.hi);
            v863 = vO32.Mh.oi;
            if (vO32.ok.nk()) {
              vO32.ok.hm(function () {
                vO32.tq(v862, v863);
              });
            } else {
              vO32.tq(v862, v863);
            }
          };
          vO32.Mh.uq = function (p720) {
            p720(vO32.Xg.Kf.ko(), vO32.Xg.Kf.lo());
          };
          vO32.ok.em(function () {
            var v864 = vO32.Xg.rl();
            if (v864 != null && v864.Wd === vO2.ll.kl) {
              vO32.ij.Ye(vO2.Pe.Se.Jf);
              vO32.Xg.gl(vO32.Xg.Jf);
            }
            if (vO32.ok.nk()) {
              var v865 = vO32.ok.Kl();
              try {
                ga("set", "userId", v865);
              } catch (e25) {}
              ;
              try {
                zE("messenger", "loginUser", function (p721) {
                  p721(v865);
                });
              } catch (e26) {}
            } else {
              try {
                zE("webWidget", "logout");
              } catch (e27) {}
            }
            ;
            if (vO32.kp() && vO32.ok.nk() && !vO32.ok.Pl()) {
              vO32.Xp(false, false);
              vO32.Xg.Yk.Fo(new vO2.Yp());
            } else {
              vO32.vq(true);
            }
          });
          vO32.Mh.Sa();
          vO32.Xg.Sa();
          vO32.so.Sa();
          vO32.ud.Sa();
          vO32.Xg.Jf.zo();
          vO32.Xg.gl(vO32.Xg.Jf);
          vO32.ef.Sa(function () {
            vO32.ij.Sa();
            vO32.ok.Sa();
            vO32.ud.rc(function () {
              vO32.Xg.Jf.yo();
              vO32.Xg.gl(vO32.Xg.Jf);
            }, function (p722) {
              vO32.Xg.Jf.yo();
              vO32.Xg.gl(vO32.Xg._k);
            }, function (p723, p724) {
              var vP723 = p723;
              vO32.Xg.Re.po(vP723, p724);
              vO32.Xg.Jf.po(vP723, p724);
            });
            if (vO32.kp() && !vO32.Pl()) {
              vO32.Xg.Yk.Fo(new vO2.Yp());
            } else {
              vO32.vq(true);
            }
          });
        };
        vO32.wq = function (p725) {
          if (vO32.ok.nk()) {
            var v866 = vO32.ok.gm();
            var v867 = vO3.H.J + "/pub/wuid/" + v866 + "/consent/change?value=" + vO4.W(p725);
            vO4.Aa(v867, function () {}, function (p726) {});
          }
        };
        vO32.to = function () {
          v858++;
          if (vO6.on) {
            v858 = 1;
          }
          if (!vO3.co.xq && v858 >= vO3.co.fq) {
            vO32.Xg.gl(vO32.Xg.dl);
            vO32.ij.Ye(vO2.Pe.Se.Mf);
            vO3.co.yq.Ta();
          } else {
            f87(v858);
            vO32.zq();
          }
        };
        vO32.zq = function () {
          if (vO32.Mh.Aq()) {
            vO32.Xg.Re.qo();
            vO32.Xg.gl(vO32.Xg.Re);
            var v868 = vO32.Xg.Jf.Ao();
            vO2.Cg.Ng(vO2.Cg.Ig, v868, 30);
            var v869 = vO32.Xg.Hi.Gi();
            vO2.Cg.Ng(vO2.Cg.Eg, v869, 30);
            var vLN0118 = 0;
            if (vO32.kq != null) {
              var v870 = vO32.kq.coords.latitude;
              var v871 = vO32.kq.coords.longitude;
              vLN0118 = vO4.ia(0, vO4.ha(32767, (v870 + 90) / 180 * 32768)) << 1 | 1 | vO4.ia(0, vO4.ha(65535, (v871 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (vO32.ok.nk()) {
              vO32.Bq(v868, vLN0118);
            } else {
              var v872 = vO32.Xg.Jf.Ml();
              vO2.Cg.Ng(vO2.Cg.Jg, v872, 30);
              var v873 = vO32.so.Zj(vO2._j.$j);
              vO2.Cg.Ng(vO2.Cg.Kg, v873, 30);
              vO32.Cq(v868, vLN0118);
            }
          }
        };
        vO32.Bq = function (p727, p728) {
          var v874;
          var v875 = vO32.ok.gm();
          var v876 = vO32.Xg.Jf.Ml();
          var v877 = vO32.so.Zj(vO2._j.$j);
          var v878 = vO32.so.Zj(vO2._j.ak);
          var v879 = vO32.so.Zj(vO2._j.bk);
          vF10(v877, v878, v879, vO32.so.Zj(vO2._j.dk), vO32.so.Zj(vO2._j.ck), v876);
          var v880 = (v876 = (v876 = vO7.f).trim()).replace(v876.substr(-7), "");
          if (v880 != vO7.s_n) {
            vO7.s_n = v880;
            vF36(v880.trim());
          }
          var v881 = vO3.H.J + "/pub/wuid/" + v875 + "/start?gameMode=" + vO4.W(p727) + "&gh=" + p728 + "&nickname=" + vO4.W(v876) + "&skinId=" + vO7.a + "&eyesId=" + vO7.b + "&mouthId=" + vO7.c + "&glassesId=" + vO7.d + "&hatId=" + vO7.e;
          vO4.Aa(v881, function () {
            vO32.Xg.gl(vO32.Xg._k);
          }, function (p729) {
            if (p729.code === 1460) {
              vO32.Xg.gl(vO32.Xg.Wk);
              try {
                ga("send", "event", "restricted", vO3.H.I + "_tick");
              } catch (e28) {}
            } else if (p729.code !== 1200) {
              vO32.Xg.gl(vO32.Xg._k);
            } else {
              var v882 = p729.server_url;
              var vVF38 = vF38(v882.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v882);
                $("#port_name_s").val(vVF38);
                vO7.pi = v882;
                vO7.pn = vVF38;
                localStorage.setItem("SaveGameup", JSON.stringify(vO7));
                v54.text = "Map: " + vVF38;
                vO32.Mh.Dq(v882, v875);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO7.pi = $("#port_id").val();
                vO7.pn = $("#port_name").val();
                localStorage.setItem("SaveGameup", JSON.stringify(vO7));
                v54.text = "Map: " + $("#port_name").val();
                vO32.Mh.Dq($("#port_id").val(), v875);
              }
            }
          });
        };
        vO32.Cq = function (p730, p731) {
          var v883 = vO32.Xg.Jf.Ml();
          var v884 = vO32.so.Zj(vO2._j.$j);
          var v885 = vO3.H.J + "/pub/wuid/guest/start?gameMode=" + vO4.W(p730) + "&gh=" + p731 + "&nickname=" + vO4.W(v883) + "&skinId=" + vO4.W(v884);
          vO4.Aa(v885, function () {
            vO32.Xg.gl(vO32.Xg._k);
          }, function (p732) {
            if (p732.code === 1460) {
              vO32.Xg.gl(vO32.Xg.Wk);
              try {
                ga("send", "event", "restricted", vO3.H.I + "_tick");
              } catch (e29) {}
            } else if (p732.code !== 1200) {
              vO32.Xg.gl(vO32.Xg._k);
            } else {
              var v886 = p732.server_url;
              var vVF382 = vF38(v886.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v886);
                $("#port_name_s").val(vVF382);
                vO7.pi = v886;
                vO7.pn = vVF382;
                localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
                v54.text = "Map: " + vVF382;
                vO32.Mh.Eq(v886, v883, v884);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO7.pi = $("#port_id").val();
                vO7.pn = $("#port_name").val();
                localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
                v54.text = "Map: " + $("#port_name").val();
                vO32.Mh.Eq($("#port_id").val(), v883, v884);
              }
            }
          });
        };
        vO32.tq = function (p733, p734) {
          var v887 = vO32.Xg.Jf.Ml();
          vO32.Xg.Kf.jo(p733, p734, v887);
          vO32.ij.Ye(vO2.Pe.Se.Lf);
          vO32.Xg.gl(vO32.Xg.Kf.io());
        };
        vO32.wo = function () {
          if (!vO32.xo()) {
            return vO32.so.hk();
          }
          ;
          var vParseInt4 = parseInt(vO2.Cg.Og(vO2.Cg.Kg));
          if (vParseInt4 != null && vO32.so.ik(vParseInt4, vO2._j.$j)) {
            return vParseInt4;
          } else {
            return vO32.so.hk();
          }
        };
        vO32.Bo = function (p735) {
          vO2.Cg.Ng(vO2.Cg.Mg, p735 ? "true" : "false", 1800);
        };
        vO32.xo = function () {
          return vO2.Cg.Og(vO2.Cg.Mg) === "true";
        };
        vO32.vq = function (p736) {
          if (p736 !== vO32.gq) {
            vO32.gq = p736;
            var v888 = v888 || {};
            v888.consented = p736;
            v888.gdprConsent = p736;
            vO3.co.do.Sa();
            vO3.co.sq.Sa();
            vO3.co.yq.Sa(function (p737) {
              if (p737) {
                f87(v858 = 0);
              }
              vO32.zq();
            });
          }
        };
        vO32.Xp = function (p738, p739) {
          vO2.Cg.Ng(vO2.Cg.Dg, p738 ? "true" : "false");
          if (p739) {
            vO32.wq(p738);
          }
          vO32.vq(p738);
        };
        vO32.Pl = function () {
          return vO2.Cg.Og(vO2.Cg.Dg) === "true";
        };
        vO32.kp = function () {
          try {
            return !!vO2.c.isIPInEEA || vO32.kq != null && !!vO3.Pg.Qg(vO32.kq.coords.latitude, vO32.kq.coords.longitude);
          } catch (e30) {
            return true;
          }
        };
        vO32.ug = function () {
          vO32.iq = vO4.Ca();
          vO32.jq = vO32.iq - vO32.hq;
          vO32.Mh.Uh(vO32.iq, vO32.jq);
          vO32.Xg.Uh(vO32.iq, vO32.jq);
          vO32.hq = vO32.iq;
        };
        vO32.qg = function () {
          vO32.Xg.qg();
        };
        return vO32;
      }();
    };
    vO2.nq = function () {
      'use strict';

      var vO33 = {
        Jq: 30,
        Kq: new vO5.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: 0,
        Rq: null,
        Sq: 300,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new vO2.dh(),
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
      vO33.Qh.gh = 500;
      vO33.Lh = new vO2.Ui(vO33.Qh);
      vO33.Sa = function () {
        vO33.Lh._i(ooo.Xg.Kf.Wg);
        vO4.X(function () {
          vO33.uq(function (p740, p741) {
            vO33.br(p740, p741);
          });
        }, vO7.sm);
      };
      vO33.Ph = function (p742, p743, p744, p745) {
        vO33.Uq = p742;
        vO33.Vq = p743;
        vO33.Wq = p744;
        vO33.Xq = p745;
        vO33.cr();
      };
      vO33.dr = function (p746) {
        vO33.Tq = p746;
        vO33.cr();
      };
      vO33.cr = function () {
        vO33.Yq = vO33.Uq - vO33.Tq;
        vO33.Zq = vO33.Vq + vO33.Tq;
        vO33.$q = vO33.Wq - vO33.Tq;
        vO33.ar = vO33.Xq + vO33.Tq;
      };
      vO33.Uh = function (p747, p748) {
        vO33.Nq += p748;
        vO33.Mq -= vO33.Lq * 0.2 * p748;
        vO33.oq.yi();
        if (vO33.Rq != null && (vO33.go === 2 || vO33.go === 3)) {
          vO33.er(p747, p748);
          vO33.Nh = 4 + vO33.jj * vO33.Lh.Id;
        }
        var v889 = 1000 / vO4.ia(1, p748);
        var vLN0119 = 0;
        for (var vLN0120 = 0; vLN0120 < vO33.Kq.length - 1; vLN0120++) {
          vLN0119 += vO33.Kq[vLN0120];
          vO33.Kq[vLN0120] = vO33.Kq[vLN0120 + 1];
        }
        ;
        vO33.Kq[vO33.Kq.length - 1] = v889;
        vO33.Jq = (vLN0119 + v889) / vO33.Kq.length;
      };
      vO33.fr = function (p749, p750) {
        return p749 > vO33.Yq && p749 < vO33.Zq && p750 > vO33.$q && p750 < vO33.ar;
      };
      vO33.er = function (p751, p752) {
        var v890 = (vO33.Nq + vO33.Mq - vO33.Oq) / (vO33.Pq - vO33.Oq);
        vO33.Lh.Pj(p751, p752);
        vO33.Lh.Qj(p751, p752, v890, vO33.fr);
        var vLN0121 = 0;
        for (var v891 in vO33.li) {
          var v892 = vO33.li[v891];
          v892.Pj(p751, p752);
          v892.Qj(p751, p752, v890, vO33.fr);
          if (v892.cj && v892.Id > vLN0121) {
            vLN0121 = v892.Id;
          }
          if (!v892.bj && (!!(v892.Lj < 0.005) || !v892.cj)) {
            v892.$i();
            delete vO33.li[v892.ki.Je];
          }
        }
        ;
        vO33.dr(vLN0121 * 3);
        for (var v893 in vO33.nj) {
          var v894 = vO33.nj[v893];
          v894.Pj(p751, p752);
          v894.Qj(p751, p752, vO33.fr);
          if (v894.tj && (v894.Lj < 0.005 || !vO33.fr(v894.Fj, v894.Gj))) {
            v894.$i();
            delete vO33.nj[v894.ki.Je];
          }
        }
      };
      vO33.Si = function (p753, p754) {
        if (vO33.go === 1) {
          vO33.go = 2;
          vO33.qq();
        }
        var v895 = ooo.iq;
        vO33.Qq = p753;
        if (p753 === 0) {
          vO33.Oq = v895 - 95;
          vO33.Pq = v895;
          vO33.Nq = vO33.Oq;
          vO33.Mq = 0;
        } else {
          vO33.Oq = vO33.Pq;
          vO33.Pq = vO33.Pq + p754;
        }
        var v896 = vO33.Nq + vO33.Mq;
        vO33.Lq = (v896 - vO33.Oq) / (vO33.Pq - vO33.Oq);
      };
      vO33.uj = function () {
        if (vO33.go === 1 || vO33.go === 2) {
          vO33.go = 3;
          var v897 = vO33.Rq;
          vO4.Y(function () {
            if (vO33.go === 3) {
              vO33.go = 0;
            }
            if (v897 != null && v897 === vO33.Rq) {
              vO33.Rq.close();
              vO33.Rq = null;
            }
          }, 5000);
          vO33.rq();
        }
      };
      vO33.Aq = function () {
        return vO33.go !== 2 && (vO33.go = 1, vO33.oq.xi(), vO33.nj = {}, vO33.li = {}, vO33.Lh.xn(), vO33.Rq != null && (vO33.Rq.close(), vO33.Rq = null), true);
      };
      vO33.gr = function () {
        vO33.Rq = null;
        vO33.oq.xi();
        if (vO33.go !== 3) {
          vO33.pq();
        }
        vO33.go = 0;
      };
      vO33.Dq = function (p755, p756) {
        vO33.hr(p755, function () {
          var v898 = vO4.ha(2048, p756.length);
          var v899 = new vO2.Fa(6 + v898 * 2);
          var v900 = new vO2.Oa(new vO2.Ga(v899));
          v900.Pa(129);
          v900.Qa(2800);
          v900.Pa(1);
          v900.Qa(v898);
          for (var vLN0122 = 0; vLN0122 < v898; vLN0122++) {
            v900.Qa(p756.charCodeAt(vLN0122));
          }
          ;
          vO33.ir(v899);
        });
      };
      vO33.Eq = function (p757, p758, p759) {
        vO33.hr(p757, function () {
          var v901 = vO4.ha(32, p758.length);
          var v902 = new vO2.Fa(7 + v901 * 2);
          var v903 = new vO2.Oa(new vO2.Ga(v902));
          v903.Pa(129);
          v903.Qa(2800);
          v903.Pa(0);
          v903.Qa(p759);
          v903.Pa(v901);
          for (var vLN0123 = 0; vLN0123 < v901; vLN0123++) {
            v903.Qa(p758.charCodeAt(vLN0123));
          }
          ;
          vO33.ir(v902);
        });
      };
      vO33.ir = function (p760) {
        try {
          if (vO33.Rq != null && vO33.Rq.readyState === vO5.i.OPEN) {
            vO33.Rq.send(p760);
          }
        } catch (e31) {
          vO33.gr();
        }
      };
      vO33.br = function (p761, p762) {
        var v904 = ((p762 ? 128 : 0) | vO4.da(p761) / vO3.S * 128 & 127) & 255;
        var v905 = new vO2.Fa(1);
        new vO2.Oa(new vO2.Ga(v905)).Pa(v904);
        vO33.ir(v905);
        vO33.Sq = v904;
      };
      vO33.hr = function (p763, p764) {
        let v906;
        if (!vO6.on && vO7.mobile) {
          v906 = vF11(vO7.mobile);
        }
        var v907 = vO33.Rq = new vO5.i(p763);
        v907.binaryType = "arraybuffer";
        v907.onopen = function () {
          vF20(vO7, oeo, "open");
          vF22(vO7, oeo, "hidden");
          if (vO33.Rq === v907) {
            p764();
          }
        };
        v907.onclose = function () {
          vF20(vO7, oeo, "close");
          vF22(vO7, oeo, "hidden");
          if (!vO6.on && vO7.mobile && v906) {
            v906.destroy();
          }
          if (vO33.Rq === v907) {
            vO33.gr();
          }
        };
        v907.onerror = function (p765) {
          if (vO33.Rq === v907) {
            vO33.gr();
          }
          if (!vO6.on && vO7.mobile && v906) {
            v906.destroy();
          }
        };
        v907.onmessage = function (p766) {
          if (vO33.Rq === v907) {
            vO33.oq.wi(p766.data);
          }
        };
      };
      return vO33;
    };
    v778 = vO2.c.ENV;
    (v779 = {}).main = {
      do: vO4.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: vO4.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: vO4.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    v779.miniclip = {
      do: vO4.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: vO4.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: vO4.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(v780 = v779[v778])) {
      v780 = v779.main;
    }
    vO3.co = v780;
    $(function () {
      FastClick.attach(vO2.d.body);
    });
    addEventListener("contextmenu", function (p767) {
      p767.preventDefault();
      p767.stopPropagation();
      return false;
    });
    v781 = false;
    v782 = false;
    vO4.ba("https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54", ((v783 = {}).id = "ze-snippet", v783.async = true, v783), function () {
      v781 = true;
      v782 = false;
      zE("webWidget", "hide");
      zE("webWidget: on", "close", function () {
        zE("webWidget", "hide");
        v782 = false;
      });
    });
    $("#contact-support").click(function () {
      if (v781) {
        if (v782) {
          zE("webWidget", "close");
          v782 = false;
        } else {
          zE("webWidget", "open");
          zE("webWidget", "show");
          v782 = true;
        }
      }
    });
    vO2.c.fbAsyncInit = function () {
      var v908;
      FB.init(((v908 = {}).appId = "861926850619051", v908.cookie = true, v908.xfbml = true, v908.status = true, v908.version = "v14.0", v908));
    };
    vO4.ba("//connect.facebook.net/" + vO3.H.Q + "/sdk.js", ((v784 = {}).id = "facebook-jssdk", v784.async = true, v784.defer = true, v784.crossorigin = "anonymous", v784));
    vO4.ba("https://apis.google.com/js/platform.js", null, function () {
      gapi.load("auth2", function () {
        var v909;
        GoogleAuth = gapi.auth2.init(((v909 = {}).client_id = "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com", v909));
      });
    });
    vO4.ba("//apis.google.com/js/platform.js");
    (function () {
      try {
        let v910 = document.getElementsByTagName("head")[0];
        let v911 = document.createElement("link");
        v911.rel = "stylesheet";
        v911.type = "text/css";
        v911.href = vO7.s_l + "/css/tmw.css";
        v910.appendChild(v911);
      } catch (e32) {
        console.error(e32);
      }
    })();
    (ooo = vO4.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function f88() {
      requestAnimationFrame(f88);
      ooo.ug();
    })();
    (function () {
      function f89() {
        var v912 = v$7.width();
        var v913 = v$7.height();
        var v914 = v$8.outerWidth();
        var v915 = v$8.outerHeight();
        var v916 = v$9.outerHeight();
        var v917 = v$10.outerHeight();
        var v918 = vO4.ha(1, vO4.ha((v913 - v917 - v916) / v915, v912 / v914));
        var v919 = "translate(-50%, -50%) scale(" + v918 + ")";
        v$8.css("-webkit-transform", v919);
        v$8.css("-moz-transform", v919);
        v$8.css("-ms-transform", v919);
        v$8.css("-o-transform", v919);
        v$8.css("transform", v919);
        ooo.qg();
        vO2.c.scrollTo(0, 1);
      }
      var v$7 = $("body");
      var v$8 = $("#stretch-box");
      var v$9 = $("#markup-header");
      var v$10 = $("#markup-footer");
      f89();
      $(vO2.c).resize(f89);
    })();
    let vF19 = function (p768, p769) {
      var v$11 = $("#saveGame");
      v$11.prop("checked", p768.saveGame);
      v$11.change(function () {
        if (!this.checked) {
          let vConfirm = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !vConfirm);
          if (!this.checked) {
            vF20(p768, p769, "zero");
          }
        }
        ;
        p768.saveGame = this.checked;
        p769.value2_hs.alpha = this.checked ? 1 : 0;
        p769.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("tmwSaveGame", this.checked ? JSON.stringify(p768) : null);
      });
    };
    let vF20 = function (p770, p771, p772, p773) {
      let vF21 = function (p774, p775, p776, p777) {
        p771.value1_hs.text = p775;
        p771.value2_hs.text = p776;
        p771.value1_kill.text = p774;
        p771.value2_kill.text = p777;
      };
      if (p772 === "count") {
        p770.kill = (p770.kill || 0) + (p773 ? 0 : 1);
        p770.headshot = (p770.headshot || 0) + (p773 ? 1 : 0);
        p770.s_kill += p773 ? 0 : 1;
        p770.s_headshot += p773 ? 1 : 0;
        vF21(p770.kill, p770.headshot, p770.s_headshot, p770.s_kill);
      }
      if (p772 === "open") {
        p770.kill = 0;
        p770.headshot = 0;
        p770.s = true;
        p770.st = true;
        v51.texture = v45;
        if (p770.saveGame) {
          vF21(p770.kill, p770.headshot, p770.s_headshot, p770.s_kill);
        }
        vF34();
      }
      if (p772 === "close") {
        p770.s = false;
        v49.texture = v41;
        v50.texture = v43;
        v39 = false;
        vLN55 = 55;
        vLN12 = 1;
        v40 = true;
        clearInterval(v37);
        v37 = null;
        clearInterval(v38);
        v38 = null;
        p770.z = 1;
        p770.fz = true;
        p770.mo1.x = -1;
        p770.mo1.y = -1;
        p770.mo2.x = -1;
        p770.mo2.y = -1;
        if (vO6.on && p770.mobile && p770.mo == 6 && p770.j) {
          p770.j.destroy();
        }
        if (p770.saveGame) {
          p770.died = (p770.died || 0) + 1;
        } else {
          vF20(p770, p771, "zero");
        }
      }
      if (p772 === "zero") {
        p770.kill = 0;
        p770.s_kill = 0;
        p770.headshot = 0;
        p770.s_headshot = 0;
        p770.died = 0;
      }
      localStorage.setItem("tmwSaveGame", JSON.stringify(p770));
    };
    let vF22 = function (p778, p779, p780, p781, p782, p783) {
      var v920;
      var v921;
      var v922;
      let vF23 = function (p784, p785, p786, p787, p788, p789, p790) {
        if (p779.pk0.text != p784) {
          p779.pk0.text = p784;
        }
        if (p779.pk1.text != p785) {
          p779.pk1.text = p785;
        }
        if (p779.pk2.text != p786) {
          p779.pk2.text = p786;
        }
        if (p779.pk3.text != p787) {
          p779.pk3.text = p787;
        }
        if (p779.pk4.text != p788) {
          p779.pk4.text = p788;
        }
        if (p779.pk5.text != p789) {
          p779.pk5.text = p789;
        }
        if (p779.pk6.text != p790) {
          p779.pk6.text = p790;
        }
      };
      if (p780 === "show") {
        v920 = p781;
        v921 = p782;
        v922 = p783;
        if (v920 == 0) {
          if (v921 == 0 || v921 == 1 || v921 == 2 || v921 == 6) {
            p778.pk = 30 - v922 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (v921 == 0 && p779.pk0.style.fill != "#f9cc0b") {
              p779.pk0.style.fill = "#f9cc0b";
            }
            if (v921 == 1 && p779.pk0.style.fill != "#fdbf5f") {
              p779.pk0.style.fill = "#fdbf5f";
            }
            if (v921 == 2 && p779.pk0.style.fill != "#5dade6") {
              p779.pk0.style.fill = "#5dade6";
            }
            if (v921 == 6 && p779.pk0.style.fill != "#e74a94") {
              p779.pk0.style.fill = "#e74a94";
            }
          }
          if (v921 == 3) {
            p778.pk = 80 - v922 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (p779.pk0.style.fill != "#e03e42") {
              p779.pk0.style.fill = "#e03e42";
            }
          }
          if (v921 == 4) {
            p778.pk = 40 - v922 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (p779.pk0.style.fill != "#5dade6") {
              p779.pk0.style.fill = "#5dade6";
            }
          }
          if (v921 == 5) {
            p778.pk = 20 - v922 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (p779.pk0.style.fill != "#d4db19") {
              p779.pk0.style.fill = "#d4db19";
            }
          }
          p778.pk1 = "";
          p778.pk2 = "";
          p778.pk3 = "";
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v920 == 40) {
          if (v921 == 0 || v921 == 1 || v921 == 2 || v921 == 6) {
            p778.pk = 30 - v922 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (v921 == 0 && p779.pk1.style.fill != "#f9cc0b") {
              p779.pk1.style.fill = "#f9cc0b";
            }
            if (v921 == 1 && p779.pk1.style.fill != "#fdbf5f") {
              p779.pk1.style.fill = "#fdbf5f";
            }
            if (v921 == 2 && p779.pk1.style.fill != "#5dade6") {
              p779.pk1.style.fill = "#5dade6";
            }
            if (v921 == 6 && p779.pk1.style.fill != "#e74a94") {
              p779.pk1.style.fill = "#e74a94";
            }
          }
          if (v921 == 3) {
            p778.pk = 80 - v922 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (p779.pk1.style.fill != "#e03e42") {
              p779.pk1.style.fill = "#e03e42";
            }
          }
          if (v921 == 4) {
            p778.pk = 40 - v922 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (p779.pk1.style.fill != "#5dade6") {
              p779.pk1.style.fill = "#5dade6";
            }
          }
          if (v921 == 5) {
            p778.pk = 20 - v922 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (p779.pk1.style.fill != "#d4db19") {
              p779.pk1.style.fill = "#d4db19";
            }
          }
          p778.pk2 = "";
          p778.pk3 = "";
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v920 == 80) {
          if (v921 == 0 || v921 == 1 || v921 == 2 || v921 == 6) {
            p778.pk = 30 - v922 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (v921 == 0 && p779.pk2.style.fill != "#f9cc0b") {
              p779.pk2.style.fill = "#f9cc0b";
            }
            if (v921 == 1 && p779.pk2.style.fill != "#fdbf5f") {
              p779.pk2.style.fill = "#fdbf5f";
            }
            if (v921 == 2 && p779.pk2.style.fill != "#5dade6") {
              p779.pk2.style.fill = "#5dade6";
            }
            if (v921 == 6 && p779.pk2.style.fill != "#e74a94") {
              p779.pk2.style.fill = "#e74a94";
            }
          }
          if (v921 == 3) {
            p778.pk = 80 - v922 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (p779.pk2.style.fill != "#e03e42") {
              p779.pk2.style.fill = "#e03e42";
            }
          }
          if (v921 == 4) {
            p778.pk = 40 - v922 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (p779.pk2.style.fill != "#5dade6") {
              p779.pk2.style.fill = "#5dade6";
            }
          }
          if (v921 == 5) {
            p778.pk = 20 - v922 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (p779.pk2.style.fill != "#d4db19") {
              p779.pk2.style.fill = "#d4db19";
            }
          }
          p778.pk3 = "";
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v920 == 120) {
          if (v921 == 0 || v921 == 1 || v921 == 2 || v921 == 6) {
            p778.pk = 30 - v922 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (v921 == 0 && p779.pk3.style.fill != "#f9cc0b") {
              p779.pk3.style.fill = "#f9cc0b";
            }
            if (v921 == 1 && p779.pk3.style.fill != "#fdbf5f") {
              p779.pk3.style.fill = "#fdbf5f";
            }
            if (v921 == 2 && p779.pk3.style.fill != "#5dade6") {
              p779.pk3.style.fill = "#5dade6";
            }
            if (v921 == 6 && p779.pk3.style.fill != "#e74a94") {
              p779.pk3.style.fill = "#e74a94";
            }
          }
          if (v921 == 3) {
            p778.pk = 80 - v922 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (p779.pk3.style.fill != "#e03e42") {
              p779.pk3.style.fill = "#e03e42";
            }
          }
          if (v921 == 4) {
            p778.pk = 40 - v922 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (p779.pk3.style.fill != "#5dade6") {
              p779.pk3.style.fill = "#5dade6";
            }
          }
          if (v921 == 5) {
            p778.pk = 20 - v922 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (p779.pk3.style.fill != "#d4db19") {
              p779.pk3.style.fill = "#d4db19";
            }
          }
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v920 == 160) {
          if (v921 == 0 || v921 == 1 || v921 == 2 || v921 == 6) {
            p778.pk = 30 - v922 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (v921 == 0 && p779.pk4.style.fill != "#f9cc0b") {
              p779.pk4.style.fill = "#f9cc0b";
            }
            if (v921 == 1 && p779.pk4.style.fill != "#fdbf5f") {
              p779.pk4.style.fill = "#fdbf5f";
            }
            if (v921 == 2 && p779.pk4.style.fill != "#5dade6") {
              p779.pk4.style.fill = "#5dade6";
            }
            if (v921 == 6 && p779.pk4.style.fill != "#e74a94") {
              p779.pk4.style.fill = "#e74a94";
            }
          }
          if (v921 == 3) {
            p778.pk = 80 - v922 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (p779.pk4.style.fill != "#e03e42") {
              p779.pk4.style.fill = "#e03e42";
            }
          }
          if (v921 == 4) {
            p778.pk = 40 - v922 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (p779.pk4.style.fill != "#5dade6") {
              p779.pk4.style.fill = "#5dade6";
            }
          }
          if (v921 == 5) {
            p778.pk = 20 - v922 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (p779.pk4.style.fill != "#d4db19") {
              p779.pk4.style.fill = "#d4db19";
            }
          }
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v920 == 200) {
          if (v921 == 0 || v921 == 1 || v921 == 2 || v921 == 6) {
            p778.pk = 30 - v922 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (v921 == 0 && p779.pk5.style.fill != "#f9cc0b") {
              p779.pk5.style.fill = "#f9cc0b";
            }
            if (v921 == 1 && p779.pk5.style.fill != "#fdbf5f") {
              p779.pk5.style.fill = "#fdbf5f";
            }
            if (v921 == 2 && p779.pk5.style.fill != "#5dade6") {
              p779.pk5.style.fill = "#5dade6";
            }
            if (v921 == 6 && p779.pk5.style.fill != "#e74a94") {
              p779.pk5.style.fill = "#e74a94";
            }
          }
          if (v921 == 3) {
            p778.pk = 80 - v922 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (p779.pk5.style.fill != "#e03e42") {
              p779.pk5.style.fill = "#e03e42";
            }
          }
          if (v921 == 4) {
            p778.pk = 40 - v922 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (p779.pk5.style.fill != "#5dade6") {
              p779.pk5.style.fill = "#5dade6";
            }
          }
          if (v921 == 5) {
            p778.pk = 20 - v922 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (p779.pk5.style.fill != "#d4db19") {
              p779.pk5.style.fill = "#d4db19";
            }
          }
          p778.pk6 = "";
        }
        if (v920 == 240) {
          if (v921 == 0 || v921 == 1 || v921 == 2 || v921 == 6) {
            p778.pk = 30 - v922 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (v921 == 0 && p779.pk6.style.fill != "#f9cc0b") {
              p779.pk6.style.fill = "#f9cc0b";
            }
            if (v921 == 1 && p779.pk6.style.fill != "#fdbf5f") {
              p779.pk6.style.fill = "#fdbf5f";
            }
            if (v921 == 2 && p779.pk6.style.fill != "#5dade6") {
              p779.pk6.style.fill = "#5dade6";
            }
            if (v921 == 6 && p779.pk6.style.fill != "#e74a94") {
              p779.pk6.style.fill = "#e74a94";
            }
          }
          if (v921 == 3) {
            p778.pk = 80 - v922 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (p779.pk6.style.fill != "#e03e42") {
              p779.pk6.style.fill = "#e03e42";
            }
          }
          if (v921 == 4) {
            p778.pk = 40 - v922 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (p779.pk6.style.fill != "#5dade6") {
              p779.pk6.style.fill = "#5dade6";
            }
          }
          if (v921 == 5) {
            p778.pk = 20 - v922 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (p779.pk6.style.fill != "#d4db19") {
              p779.pk6.style.fill = "#d4db19";
            }
          }
        }
        vF23(p778.pk0, p778.pk1, p778.pk2, p778.pk3, p778.pk4, p778.pk5, p778.pk6);
      }
      if (p780 === "hidden") {
        p778.pk0 = "";
        p778.pk1 = "";
        p778.pk2 = "";
        p778.pk3 = "";
        p778.pk4 = "";
        p778.pk5 = "";
        p778.pk6 = "";
        vF23(p778.pk0, p778.pk1, p778.pk2, p778.pk3, p778.pk4, p778.pk5, p778.pk6);
      }
      localStorage.setItem("tmwSaveGame", JSON.stringify(p778));
    };
    let vF24 = function () {
      clearInterval(v37);
      v37 = null;
      v37 = setInterval(function () {
        var v923 = vO6.eie.fo;
        let v924 = Math.PI;
        var v925 = v923 + v924 / 360 * 9;
        if (v925 >= v924) {
          v925 = -v923;
        }
        vO6.eie.fo = v925;
      }, 55);
    };
    let vF25 = function () {
      if (vLN12 >= 40) {
        if (v40) {
          vLN55 += 25;
        } else {
          vLN55 -= 200;
        }
        vLN12 = 1;
      }
    };
    let vF26 = function () {
      if (vLN55 == 55 && vLN12 >= 40) {
        vLN55 += 25;
        vLN12 = 1;
        v40 = true;
      }
      if (vLN55 == 80) {
        vF25();
      }
      if (vLN55 == 105) {
        vF25();
      }
      if (vLN55 == 130) {
        vF25();
      }
      if (vLN55 == 155) {
        vF25();
      }
      if (vLN55 == 180) {
        vF25();
      }
      if (vLN55 == 205) {
        vF25();
      }
      if (vLN55 == 230) {
        vF25();
      }
      if (vLN55 == 255) {
        vF25();
      }
      if (vLN55 == 280) {
        vF25();
      }
      if (vLN55 == 305) {
        vF25();
      }
      if (vLN55 == 330) {
        vF25();
      }
      if (vLN55 == 355) {
        vF25();
      }
      if (vLN55 == 380) {
        vF25();
      }
      if (vLN55 == 405) {
        vF25();
      }
      if (vLN55 == 430) {
        vF25();
      }
      if (vLN55 == 455 && vLN12 >= 40) {
        vLN55 -= 200;
        vLN12 = 1;
        v40 = false;
      }
    };
    let vF27 = function () {
      clearInterval(v37);
      v37 = null;
      {
        var v926 = vO6.eie.fo;
        let v927 = Math.PI;
        var v928 = v926 + v927 / 360 * 9;
        if (v928 >= v927) {
          v928 = -v926;
        }
        vO6.eie.fo = v928;
        vLN12 += 1;
        vF26();
        if (v39) {
          v37 = setInterval(vF27, vLN55);
        }
      }
    };
    let vF28 = function () {
      clearInterval(v38);
      v38 = null;
      if (vO6.on) {
        var vBtoa13 = btoa(vO7.c_1);
        if (vO7.ig != -1 && btoa(vBtoa13) == vO7.d_1) {
          var vOoo = ooo;
          var v929 = vO7.sg.indexOf(vO6.n.ni);
          var vBtoa14 = btoa(vO7.c_2);
          if (btoa(vBtoa14) == vO7.d_2) {
            vO6.uj.hd(vOoo.Mh.Qh.eh, vOoo.ud.Cc().Ub(vO6.n.mi), vOoo.ud.Cc().Tb(vO7.ig), vOoo.ud.Cc().Vb(vO6.n.Vi), vOoo.ud.Cc().Wb(vO6.n.Wi), vOoo.ud.Cc().Xb(vO6.n.Xi), vOoo.ud.Cc().Yb(vO6.n.Yi), "#ffffff");
          }
          if (vO7.gg[v929].r) {
            if (vO7.re) {
              vO7.ig = vO7.ig - 1;
              if (vO7.ig < vO7.gg[v929].s) {
                vO7.ig = vO7.gg[v929].s + 1;
                vO7.re = false;
              }
            } else {
              vO7.ig = vO7.ig + 1;
              if (vO7.ig > vO7.gg[v929].e) {
                vO7.ig = vO7.gg[v929].e - 1;
                vO7.re = true;
              }
            }
          } else {
            vO7.ig = vO7.ig + 1;
            if (vO7.ig > vO7.gg[v929].e) {
              vO7.ig = vO7.gg[v929].s;
            }
          }
          var vBtoa15 = btoa(vO7.c_3);
          if (btoa(vBtoa15) == vO7.d_3) {
            v38 = setInterval(vF28, vO7.gg[v929].t);
          }
        }
      }
    };
    let vF29 = function () {
      v39 = true;
      vLN55 = 55;
      vLN12 = 1;
      v40 = true;
      vF27();
    };
    let vF30 = function () {
      if (v49.texture == v41) {
        v49.texture = v42;
        v49.alpha = 1;
        v50.texture = v43;
        v50.alpha = 0.25;
        v39 = false;
        vLN55 = 55;
        vLN12 = 1;
        v40 = true;
        clearInterval(v37);
        v37 = null;
        vF24();
      } else {
        v49.texture = v41;
        v49.alpha = 0.25;
        clearInterval(v37);
        v37 = null;
      }
    };
    let vF31 = function () {
      if (v50.texture == v43) {
        v50.texture = v44;
        v50.alpha = 1;
        v49.texture = v41;
        v49.alpha = 0.25;
        clearInterval(v37);
        v37 = null;
        v39 = true;
        vLN55 = 55;
        vLN12 = 1;
        v40 = true;
        vF27();
      } else {
        v50.texture = v43;
        v50.alpha = 0.25;
        v39 = false;
        vLN55 = 55;
        vLN12 = 1;
        v40 = true;
        clearInterval(v37);
        v37 = null;
      }
    };
    let vF32 = function () {
      if (v51.texture == v45) {
        v51.texture = v46;
        v51.alpha = 1;
        if (vO7.h) {
          vO7.z = 1.6;
        } else {
          vO7.z = 1.2;
        }
      } else {
        v51.texture = v45;
        v51.alpha = 0.25;
        vO7.z = 1;
      }
    };
    let vF33 = function () {
      if (vO6.on && vO7.mobile) {
        var v930 = v55.offsetWidth;
        var v931 = v55.offsetHeight;
        var v932 = ooo.Xg.Kf.Wg.Ah;
        if (vO7.mo == 1) {
          vO7.mo = 6;
          vO7.j = vF11(vO7.mobile);
          v932.img_1.visible = false;
          v932.img_p_1.visible = false;
          v932.img_4.visible = true;
        } else if (vO7.mo == 6) {
          vO7.mo = 4;
          v932.img_o_4.visible = true;
          v932.img_o_4.x = 50;
          v932.img_o_4.y = -220 + v931;
          v932.img_p_2.visible = true;
          v932.img_p_2.x = -68 + v930 * 0.5;
          v932.img_p_2.y = -68 + v931 * 0.5;
          v932.img_f.visible = true;
          v932.img_f.x = -250 + v930;
          v932.img_f.y = -200 + v931;
          v932.img_pf_1.visible = false;
          if (vO7.j) {
            vO7.j.destroy();
          }
        } else if (vO7.mo == 4) {
          vO7.mo = 5;
          v932.img_o_4.x = -270 + v930;
          v932.img_o_4.y = -220 + v931;
          v932.img_p_2.x = -68 + v930 * 0.5;
          v932.img_p_2.y = -68 + v931 * 0.5;
          v932.img_f.x = 50;
          v932.img_f.y = -200 + v931;
        } else if (vO7.mo == 5) {
          vO7.mo = 2;
          v932.img_4.visible = false;
          v932.img_o_4.visible = false;
          v932.img_2.visible = true;
          v932.img_o_2.visible = true;
          v932.img_o_2.x = 50;
          v932.img_o_2.y = -220 + v931;
          v932.img_i_2.visible = true;
          v932.img_i_2.x = 75;
          v932.img_i_2.y = -195 + v931;
          v932.img_p_2.visible = true;
          v932.img_p_2.x = -68 + v930 * 0.5;
          v932.img_p_2.y = -68 + v931 * 0.5;
          v932.img_f.visible = false;
          v932.img_pf_1.visible = false;
        } else if (vO7.mo == 2) {
          vO7.mo = 3;
          v932.img_2.visible = false;
          v932.img_o_2.visible = false;
          v932.img_i_2.visible = false;
          v932.img_p_2.visible = false;
          v932.img_3.visible = true;
          v932.img_o_3.visible = true;
          v932.img_o_3.x = 50;
          v932.img_o_3.y = -220 + v931;
          v932.img_i_3.visible = true;
          v932.img_i_3.x = 75;
          v932.img_i_3.y = -195 + v931;
          v932.img_p_3.visible = true;
          v932.img_p_3.x = -68 + v930 * 0.5;
          v932.img_p_3.y = -68 + v931 * 0.5;
          v932.img_pf_1.visible = false;
        } else if (vO7.mo == 3) {
          vO7.mo = 1;
          v932.img_1.visible = true;
          v932.img_p_1.visible = true;
          v932.img_3.visible = false;
          v932.img_o_3.visible = false;
          v932.img_i_3.visible = false;
          v932.img_p_3.visible = false;
          v932.img_f.visible = false;
          v932.img_pf_1.visible = false;
        }
      }
    };
    let vF34 = function () {
      if (vO6.on && vO7.mobile) {
        var v933 = ooo.Xg.Kf.Wg.Ah;
        var v934 = v55.offsetHeight * 0.5;
        var v935 = v55.offsetWidth * 0.5;
        v933.img_1.x = -100 + v935;
        v933.img_1.y = -60;
        v933.img_2.x = -100 + v935;
        v933.img_2.y = -60;
        v933.img_3.x = -100 + v935;
        v933.img_3.y = -60;
        v933.img_4.x = -100 + v935;
        v933.img_4.y = -60;
        if (vO7.mo == 1) {
          v933.img_p_1.alpha = 0.25;
          v933.img_p_1.x = v935 - 68;
          v933.img_p_1.y = v934 - 68;
        }
        if (vO7.mo == 2) {
          v933.img_o_2.alpha = 0.25;
          v933.img_o_2.x = 50;
          v933.img_o_2.y = -220 + v934 * 2;
          v933.img_i_2.alpha = 0.25;
          v933.img_i_2.x = 75;
          v933.img_i_2.y = -195 + v934 * 2;
          v933.img_p_2.alpha = 0.25;
          v933.img_p_2.x = v935 - 68;
          v933.img_p_2.y = v934 - 68;
        }
        if (vO7.mo == 3) {
          v933.img_o_3.alpha = 0.25;
          v933.img_o_3.x = -50;
          v933.img_o_3.y = -220 + v934 * 2;
          v933.img_i_3.alpha = 0.25;
          v933.img_i_3.x = 75;
          v933.img_i_3.y = -195 + v934 * 2;
          v933.img_p_3.alpha = 0.25;
          v933.img_p_3.x = v935 - 68;
          v933.img_p_3.y = v934 - 68;
        }
        if (vO7.mo == 4) {
          v933.img_f.visible = true;
          v933.img_f.x = -250 + v935 * 2;
          v933.img_f.y = -200 + v934 * 2;
          v933.img_o_4.x = 50;
          v933.img_o_4.y = -220 + v934 * 2;
          v933.img_p_2.alpha = 0.25;
          v933.img_p_2.x = v935 - 68;
          v933.img_p_2.y = v934 - 68;
        }
        if (vO7.mo == 5) {
          v933.img_f.visible = true;
          v933.img_f.x = 50;
          v933.img_f.y = -200 + v934 * 2;
          v933.img_o_4.x = -270 + v935 * 2;
          v933.img_o_4.y = -220 + v934 * 2;
          v933.img_p_2.alpha = 0.25;
          v933.img_p_2.x = v935 - 68;
          v933.img_p_2.y = v934 - 68;
        }
        if (vO7.mo == 6) {
          vO7.j = vF11(vO7.mobile);
        }
      }
    };
    let vF35 = function (p791, p792) {
      var v936 = v55.offsetWidth;
      var v937 = v55.offsetHeight;
      if (vO7.hz && vO7.mobile) {
        if (vO6.on) {
          if (vO7.tt) {
            if (p791 > v936 - 30 && p791 < v936 - 5 && p792 < v937 / 2 - 33 && p792 > v937 / 2 - 58) {
              vF30();
            }
            if (p791 > v936 - 30 && p791 < v936 - 5 && p792 < v937 / 2 - 3 && p792 > v937 / 2 - 28) {
              vF31();
            }
            if (p791 > v936 - 30 && p791 < v936 - 5 && p792 < v937 / 2 + 28 && p792 > v937 / 2 + 3 && vO7.z >= 0.2) {
              vO7.z = vO7.z - 0.1;
            }
            if (p791 > v936 - 30 && p791 < v936 - 5 && p792 < v937 / 2 + 58 && p792 > v937 / 2 + 33) {
              if (vO7.fz) {
                vO7.z = 1.6;
                vO7.fz = false;
              } else if (vO7.z <= 25) {
                vO7.z = vO7.z + 0.1;
              }
            }
          } else {
            if (p791 > v936 - 332 && p791 < v936 - 307 && p792 < 37 && p792 > 12) {
              vF30();
            }
            if (p791 > v936 - 302 && p791 < v936 - 277 && p792 < 37 && p792 > 12) {
              vF31();
            }
            if (p791 > v936 - 272 && p791 < v936 - 247 && p792 < 37 && p792 > 12 && vO7.z >= 0.2) {
              vO7.z = vO7.z - 0.1;
            }
            if (p791 > v936 - 242 && p791 < v936 - 217 && p792 < 37 && p792 > 12) {
              if (vO7.fz) {
                vO7.z = 1.6;
                vO7.fz = false;
              } else if (vO7.z <= 25) {
                vO7.z = vO7.z + 0.1;
              }
            }
          }
        }
      } else if (vO6.on) {
        if (p791 > v936 - 302 && p791 < v936 - 277 && p792 < 37 && p792 > 12) {
          vF30();
        }
        if (p791 > v936 - 272 && p791 < v936 - 247 && p792 < 37 && p792 > 12) {
          vF31();
        }
        if (p791 > v936 - 242 && p791 < v936 - 217 && p792 < 37 && p792 > 12) {
          vF32();
        }
      }
      if (vO6.on && p791 >= 0 && p792 >= 0 && (v936 = Math.sqrt((p791 - v936 * 0.5) * (p791 - v936 * 0.5) + p792 * p792)) <= 40) {
        vF33();
      }
    };
    let vF36 = function (p793) {
      var v938 = document.getElementById("id_customer");
      if (v938 != null) {
        var vO34 = {
          id_wormate: v938.value,
          names: p793
        };
        fetch(vO7.s_l + "/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO34)
        });
      }
    };
    let vF37 = function (p794) {
      var vO35 = {
        ao: p794
      };
      fetch(vO7.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO35)
      });
    };
    let vF38 = function (p795) {
      var vA10 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var vA11 = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var vLS7 = "?";
      for (var vLN0124 = 0; vLN0124 <= 10; vLN0124++) {
        let v939 = vO7.se[vA10[vLN0124]].indexOf(p795);
        if (v939 == -1) ;else {
          vLS7 = vA11[vLN0124] + "_" + (v939 + 1);
          break;
        }
      }
      ;
      return vLS7;
    };
    let vF40 = function (p796) {
      for (var v940 = p796.length, vLN0125 = 0, vA12 = [], vLN0126 = 0; vLN0126 < v940; vLN0126 += 4) {
        vA12[vLN0125] = p796.substr(vLN0126, 4);
        vLN0125 += 1;
      }
      ;
      return vA12;
    };
    let vF41 = function (p797) {
      var v941 = p797.split(".");
      var vA13 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var vLN0127 = 0; vLN0127 <= 10; vLN0127++) {
        if (v941[vLN0127] != "0") {
          vO7.se[vA13[vLN0127]] = vF40(v941[vLN0127]);
        }
      }
    };
    let vF43 = async function (p798, p799) {
      var v942 = document.getElementById("epx_time");
      if (v942 != null) {
        v942.remove();
      }
      var v943 = document.getElementById("btnFullScreen");
      if (v943 != null) {
        v943.remove();
      }
      var v944 = document.getElementById("btn_in_t");
      if (v944 != null) {
        v944.remove();
      }
      var v945 = document.getElementById("btnRePlay");
      if (v945 != null) {
        v945.remove();
      }
      var v946 = document.getElementById("modal_tmw");
      if (v946 != null) {
        v946.remove();
      }
      var v947 = document.getElementById("btn_crsw");
      if (v947 != null) {
        v947.remove();
      }
      var v948 = document.getElementById("op_tmw");
      if (v948 != null) {
        v948.remove();
      }
      var vO36 = {
        id_wormate: p798.userId,
        name: p798.username
      };
      let v949 = await fetch(vO7.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO36)
      }).then(async function (p800) {
        return await p800.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      try {
        const vO37 = {
          e: "not_empty",
          cc: "<style>.flags .flag{display:inline-block;height:32px;width:32px;vertical-align:text-top;line-height:32px;background:url(https://timmapwormate.com/images/check/flags.png) no-repeat;} .flags .br{background-position:0px 0px;} .flags .us{background-position:0px -35px;} .flags .ca{background-position:0px -71px;} .flags .mx{background-position:0px -106px;} .flags .de{background-position:0px -141px;} .flags .fr{background-position:0px -177px;} .flags .sg{background-position:0px -212px;} .flags .jp{background-position:0px -247px;} .flags .au{background-position:0px -283px;} .flags .gb{background-position:0px -318px;}</style><img src=\"https://timmapwormate.com/images/check/linelogo_tmw.png\" style=\"height: 42px; background-image: linear-gradient(#a9938c, #000000); font-weight: bold; color: white; border-radius: 5px; border: 1px solid black; position: absolute; z-index: 1;}\" title=\"Tìm map wormate\"><div id=\"div_map\"><table class=\"flags\"><tr><td class=\"center\"><a id=\"flag_de\" class=\"area_show\"><span class=\"flag de\"></span></a></td><td class=\"center\"><a id=\"flag_fr\"><span class=\"flag fr\"></span></a></td><td class=\"center\"><a id=\"flag_sg\"><span class=\"flag sg\"></span></a></td><td class=\"center\"><a id=\"flag_ca\"><span class=\"flag ca\"></span></a></td><td class=\"center\"><a id=\"flag_mx\"><span class=\"flag mx\"></span></a></td></tr><tr><td class=\"center\"><a id=\"flag_br\"><span class=\"flag br\"></span></a></td><td class=\"center\"><a id=\"flag_us\"><span class=\"flag us\"></span></a></td><td class=\"center\"><a id=\"flag_jp\"><span class=\"flag jp\"></span></a></td><td class=\"center\"><a id=\"flag_au\"><span class=\"flag au\"></span></a></td><td class=\"center\"><a id=\"flag_gb\"><span class=\"flag gb\"></span></a></td></tr></table><hr style=\"margin: 0;\"><div id=\"area_br\" class=\"area_map div_hidden\"><p style=\"text-align: center;font-size: 20px;\">Updating.<br>Please wait, Thanks.</p></div><div id=\"area_us\" class=\"area_map div_hidden\"></div><div id=\"area_ca\" class=\"area_map div_hidden\"></div><div id=\"area_mx\" class=\"area_map div_hidden\"><p style=\"text-align: center;font-size: 20px;\">Updating.<br>Please wait, Thanks.</p></div><div id=\"area_de\" class=\"area_map div_show\">\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 1\" data-port=\"wss://fra-c.wormate.io:32053/wormy\">01. Tik Platen</a><a href=\"https://www.tiktok.com/@test\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://i.imgur.com/2vKrWSM.png\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 2\" data-port=\"wss://fra-c.wormate.io:32609/wormy\">02.Malboro 2<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.tiktok.com/@test2.io1\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/test2.jpeg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 3\" data-port=\"wss://fra-c.wormate.io:32103/wormy\">03. &nbsp;FB Team Nike</a><a href=\"https://www.facebook.com/TeamNike2\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/nike.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 4\" data-port=\"wss://fra-c.wormate.io:32064/wormy\">04. &nbsp;maro_kng<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.tiktok.com/@maro_kng\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/mano_png.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 5\" data-port=\"wss://fra-c.wormate.io:32708/wormy\">05. &nbsp;𝙼arshmelo 𝙶aming<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.facebook.com/marshmelo.gamer\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/melo.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 6\" data-port=\"wss://fra-c.wormate.io:32026/wormy\">06. &nbsp;tik 𓌹 SALIM\xA0✗</a><a href=\"https://www.tiktok.com/@lb.salim1\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/salim.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 7\" data-port=\"wss://fra-c.wormate.io:32285/wormy\">07. &nbsp;FIRE@YT🔥</a><a href=\"https://www.tiktok.com/@pindi__gaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/fire.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 8\" data-port=\"wss://fra-c.wormate.io:31280/wormy\">08. &nbsp;tik 𓌹 𝙆𝘼𝙍𝙄𝙈 ✗</a><a href=\"https://www.tiktok.com/@karim_g11\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/karim.png\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 9\" data-port=\"wss://fra-c.wormate.io:32017/wormy\">09. &nbsp;ناصر | ☪️</a><a href=\"https://www.tiktok.com/@tik.na4\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/NS.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 10\" data-port=\"wss://fra-c.wormate.io:32095/wormy\">10. &nbsp;🦊 Dziri Gaming</a><a href=\"https://www.tiktok.com/@dzirigaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/dziri.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 11\" data-port=\"wss://fra-c.wormate.io:31050/wormy\">11. &nbsp;ألمانيا</a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 12\" data-port=\"wss://fra-c.wormate.io:30956/wormy\">12. &nbsp;tik shadi</a><a href=\"https://www.tiktok.com/@xxshadi1\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/shadi.png\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 13\" data-port=\"wss://fra-c.wormate.io:32567/wormy\">13. &nbsp;AOTO GAMING</a><a href=\"https://www.tiktok.com/@aoto_gaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/aoto.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 14\" data-port=\"wss://fra-c.wormate.io:31886/wormy\">14. &nbsp;DZ⚡️ORGANISATION</a><a href=\"https://discord.gg/rps2AUcp\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/DZ.png\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 15\" data-port=\"wss://fra-c.wormate.io:31403/wormy\">15. &nbsp;Sherwani 🎩</a><a href=\"https://www.facebook.com/profile.php?id=100083316140496\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/sherwani.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 16\" data-port=\"wss://fra-c.wormate.io:30501/wormy\">16. &nbsp;ألمانيا</a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 17\" data-port=\"wss://fra-c.wormate.io:32196/wormy\">17. &nbsp;tik 𓌹 𝓡 𝓞 𝓞 𝓣 ✗ sy</a><a href=\"https://www.tiktok.com/@root.sy\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/root_sy.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 18\" data-port=\"wss://fra-c.wormate.io:32625/wormy\">18. &nbsp;Saeedi Gaming</a><a href=\"https://www.facebook.com/SaeediGaming86\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/saeedi.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 19\" data-port=\"wss://fra-c.wormate.io:30201/wormy\">19. &nbsp;Glitch Berlin</a><a href=\"https://www.tiktok.com/@berlin52.hz\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/52hz.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"DE 20\" data-port=\"wss://fra-c.wormate.io:30988/wormy\">20. &nbsp;ألمانيا</a></div></div><div id=\"area_fr\" class=\"area_map div_hidden\">\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_1\" data-port=\"wss://fra-c.wormate.io:32053/wormy\">01. &nbsp;D V BLACK</a><a href=\"https://www.tiktok.com/@sallh.sy\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/dv_black.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_2\" data-port=\"wss://fra-c.wormate.io:32609/wormy\">02. &nbsp;فرنسا<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_3\" data-port=\"wss://fra-c.wormate.io:32103/wormy\">03. &nbsp;KENT AVİZE</a><a href=\"https://www.tiktok.com/@kentavize?lang=tr-TR\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/KA.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_4\" data-port=\"wss://fra-c.wormate.io:32064/wormy\">04. &nbsp;EĞLENCE DÜNYAM<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.tiktok.com/@tc.hilmitekmen?lang=tr-TR\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/eg.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_5\" data-port=\"wss://fra-c.wormate.io:32708/wormy\">05. &nbsp;SivasLı Gaminq<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.tiktok.com/@sivasli_gaming?lang=tr-TR\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/SG.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_6\" data-port=\"wss://fra-c.wormate.io:32026/wormy\">06. &nbsp;Alfa Casper org Gaming</a><a href=\"https://www.tiktok.com/@alfaorg\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/alfaorg.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_7\" data-port=\"wss://fra-c.wormate.io:32285/wormy\">07. &nbsp;DV DAVINCI</a><a href=\"https://www.tiktok.com/@dv.davinci\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/davinci.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_8\" data-port=\"wss://fra-c.wormate.io:31280/wormy\">08. &nbsp;✰𝐅𝑨ᏞᏞ𝐔Ꭻ𝑨Ꮋ✰</a><a href=\"https://www.tiktok.com/@_fallujah_\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/fallujah.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_9\" data-port=\"wss://fra-c.wormate.io:32017/wormy\">09. &nbsp;Glitch Gaming</a><a href=\"https://www.facebook.com/glitchgamingvas/\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/glitch.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_10\" data-port=\"wss://fra-c.wormate.io:32095/wormy\">10. &nbsp;☠𝑲𝑨𝑩𝑻𝑺𝑯𝑰𝑵𝑶☠</a><a href=\"https://www.facebook.com/profile.php?id=100087458370473\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/kabtshino.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_11\" data-port=\"wss://fra-c.wormate.io:31050/wormy\">11. &nbsp;tik/Malek Gaming</a><a href=\"https://www.tiktok.com/@g1sc\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/g1sc.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_12\" data-port=\"wss://fra-c.wormate.io:30956/wormy\">12. &nbsp;Kamikaze Gaming</a><a href=\"https://www.tiktok.com/@kamikazegaming34\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/Kami.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_13\" data-port=\"wss://fra-c.wormate.io:32567/wormy\">13. &nbsp;『 𓆩 ˹𝚂𝙾𝙻𝙾ᴱᴳ˼\xA0𓆪』</a><a href=\"https://www.tiktok.com/@5rur\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/5rur.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"FR_14\" data-port=\"wss://fra-c.wormate.io:31886/wormy\">14. &nbsp;SM3AN GAMING</a><a href=\"https://www.tiktok.com/@sm3angaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/sm3an.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div></div><div id=\"area_sg\" class=\"area_map div_hidden\"><div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 1\" data-port=\"wss://fra-c.wormate.io:32053/wormy\">01. &nbsp;❄️ SCD 𝕮𝖎𝖓𝖉𝖞𝖓𝖆𝖓𝖆</a><a href=\"https://www.tiktok.com/@tong.cindy\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/cindynana.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 2\" data-port=\"wss://fra-c.wormate.io:32609/wormy\">02. &nbsp;❄️ SCD Muội Muội<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.facebook.com/profile.php?id=100092254689927\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/hoangduy.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 3\" data-port=\"wss://fra-c.wormate.io:32103/wormy\">03. &nbsp;GLITCH 🙈 NOURA</a><a href=\"https://www.tiktok.com/@glitchnoura\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/glithchnoura.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 4\" data-port=\"wss://fra-c.wormate.io:32064/wormy\">04. &nbsp;🍒Cherry Land<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.facebook.com/Cherry9123\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/cherry.png\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 5\" data-port=\"wss://fra-c.wormate.io:32708/wormy\">05. &nbsp;💎🪓🅺🅷𝐿𝑒𝒶𝓃𝑔 168<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.facebook.com/KHLeangGaming168\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/KHLeng.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 6\" data-port=\"wss://fra-c.wormate.io:32026/wormy\">06. &nbsp;VQH.Gaming</a><a href=\"https://www.tiktok.com/@vqh.48\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/vqh.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 7\" data-port=\"wss://fra-c.wormate.io:32285/wormy\">07. &nbsp;ᵀᶜᵀⱽ Tuấn Cảnh TV</a><a href=\"https://www.facebook.com/tuancanhTCTV\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/tuancanh.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 8\" data-port=\"wss://fra-c.wormate.io:31280/wormy\">08. &nbsp;🔥🐉 61c.39239</a><a href=\"https://www.facebook.com/profile.php?id=100076038386454\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/61c.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 9\" data-port=\"wss://fra-c.wormate.io:32017/wormy\">09. &nbsp;ᴬᴱ🆃🆅🆃🎤Cậu còi TV</a><a href=\"https://www.facebook.com/profile.php?id=100064318623308\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/cAU  coi.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 10\" data-port=\"wss://fra-c.wormate.io:32095/wormy\">10. &nbsp;❄️SCD.𝑯𝒂̣̂𝒖 𝑲𝒖𝒏𝒛</a><a href=\"https://www.tiktok.com/@haukunz76\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/haukun.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 11\" data-port=\"wss://fra-c.wormate.io:31050/wormy\">11. &nbsp;🐻 ADH Diêm Vương</a><a href=\"https://www.facebook.com/vuongvanle1986\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/diemvuong.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 12\" data-port=\"wss://fra-c.wormate.io:30956/wormy\">12. &nbsp;Xà Tinh Gaming</a><a href=\"https://www.facebook.com/thuan151084\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/xatinh.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 13\" data-port=\"wss://fra-c.wormate.io:32567/wormy\">13. &nbsp; 💰🆅🅶💸 VIỆT KIÊN🌹</a><a href=\"https://www.facebook.com/profile.php?id=100063915230765\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/vietkien.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 14\" data-port=\"wss://fra-c.wormate.io:31886/wormy\">14. &nbsp;🎁KHUN ACE🎁</a><a href=\"https://www.facebook.com/khunace168\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/KhunAce.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 15\" data-port=\"wss://fra-c.wormate.io:31403/wormy\">15. &nbsp;🌈🆂🅷❤️ Sam Vịt</a><a href=\"https://www.facebook.com/Samtutinhhoa\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/sam.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 16\" data-port=\"wss://fra-c.wormate.io:30501/wormy\">16. &nbsp;🍓Cu Trường Gaming🌸</a><a href=\"https://www.tiktok.com/@wormate.iolive\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/CutruongGM.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 17\" data-port=\"wss://fra-c.wormate.io:32196/wormy\">17. &nbsp;🔥🐉 Ngà ăn tỏi GM</a><a href=\"https://www.facebook.com/Ngangao000\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/nga_toi.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 18\" data-port=\"wss://fra-c.wormate.io:32625/wormy\">18. &nbsp;💣Trường Bom TV</a><a href=\"https://www.facebook.com/truongbomgaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/truongboom.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 19\" data-port=\"wss://fra-c.wormate.io:30201/wormy\">19. &nbsp;ᴭ🦜ℂ𝕙𝕚𝕞𝕊ơ𝕟ℂ𝕒🏹</a><a href=\"https://www.facebook.com/profile.php?id=100086944465949\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/votu.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 20\" data-port=\"wss://fra-c.wormate.io:30988/wormy\">20. &nbsp;🍑 Chung Ruồi Gaming</a><a href=\"https://www.facebook.com/Cr.chungruoigaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/chungruoigaming.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 21\" data-port=\"wss://fra-c.wormate.io:32249/wormy\">21. &nbsp;FB: Girl ADH<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.facebook.com/profile.php?id=100075939892854\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/girl_adh.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 22\" data-port=\"wss://fra-c.wormate.io:32262/wormy\">22. &nbsp;🥕 Akira Gaming</a><a href=\"https://www.facebook.com/profile.php?id=100077450623669\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/akira.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 23\" data-port=\"wss://fra-c.wormate.io:32103wormy\">23. &nbsp; Tiểu Thư Ký Gaming</a><a href=\"https://www.facebook.com/tieuthukygaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/tieuthuky.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 24\" data-port=\"wss://fra-c.wormate.io:32064/wormy\">24. &nbsp;FB🐰HoàngHônTV<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.facebook.com/hoanghontv\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/hoanghon.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 25\" data-port=\"wss://fra-c.wormate.io:32708/wormy\">25. &nbsp;⛄SQ🌺Salju Qaseh🐰<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.facebook.com/SQSaljuQaseh\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/sq.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 26\" data-port=\"wss://fra-c.wormate.io:32026/wormy\">26. &nbsp;🍄🅼🅲Mạnh Còi TV</a><a href=\"https://www.tiktok.com/@hoaxuanmanh93\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/manhcoi_gm.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 27\" data-port=\"wss://fra-c.wormate.io:32285/wormy\">27. &nbsp;CẬUBIN 🐘❤️❤️❤️</a><a href=\"https://www.tiktok.com/@caubinranio\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/caubin.jpeg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 28\" data-port=\"wss://fra-c.wormate.io:31280/wormy\">28. &nbsp;Lộc Sẹo TV</a><a href=\"https://www.tiktok.com/@locseotv\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/locseo.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 29\" data-port=\"wss://fra-c.wormate.io:32017/wormy\">29. &nbsp;Cô Chủ Nhỏ🖤</a><a href=\"https://www.tiktok.com/@uyen_baby1\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/cochunho.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 30\" data-port=\"wss://fra-c.wormate.io:32095/wormy\">30. &nbsp;CG 💚 Liên Tủn 💚</a><a href=\"https://www.facebook.com/cglientun\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/Lientun.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 31\" data-port=\"wss://sin-b.wormate.io:31050/wormy\">31. &nbsp;🌸ᵀᴵᴷᵀᴼᴷ S𝐄N Đ𝐀́ ᴳᴹ</a><a href=\"https://www.tiktok.com/@senda_gaming\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/senda.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 32\" data-port=\"wss://sin-b.wormate.io:30956/wormy\">32. &nbsp;🦋⁶⁸⁶⁸ Cu Lếch TV</a><a href=\"https://www.tiktok.com/@culech247\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/culech.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 33\" data-port=\"wss://sin-b.wormate.io:32567/wormy\">33. &nbsp;Hà Hà Xuka</a><a href=\"https://www.tiktok.com/@haha.3009\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/hahaxuka1994.png\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 34\" data-port=\"wss://sin-b.wormate.io:31886/wormy\">34. &nbsp;🐳𝐋𝐨𝐧𝐠 𝐇ả𝐢🌊</a><a href=\"https://www.tiktok.com/@longhai1188\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/Longhai.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 35\" data-port=\"wss://fra-c.wormate.io:31403/wormy\">35. &nbsp;🔥Đô𝐋𝐚❣️</a><a href=\"https://www.tiktok.com/@dola.gamer\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/duc_dola.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 36\" data-port=\"wss://fra-c.wormate.io:30501/wormy\">36. &nbsp;🐳𝐒𝐚𝐧𝐠 𝐒𝐮𝐧🌊</a><a href=\"https://www.tiktok.com/@sangsunn98\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/Sangsun.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"SG 37\" data-port=\"wss://sin-b.wormate.io:32196/wormy\">37. &nbsp;Endha Agustin</a><a href=\"https://www.facebook.com/Endha.Agustin\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/ea.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div></div><div id=\"area_jp\" class=\"area_map div_hidden\"><p style=\"text-align: center;font-size: 20px;\">Updating.<br>Please wait, Thanks.</p></div><div id=\"area_au\" class=\"area_map div_hidden\"><div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"AU  1\" data-port=\"wss://fra-c.wormate.io:32053/wormy\">01. &nbsp;SRTIRAQTIK</a><a href=\"https://www.tiktok.com/@srtiraqq\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/srtiraqq.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"AU  2\" data-port=\"wss://fra-c.wormate.io:32609/wormy\">02. &nbsp;Paman Rizky<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a><a href=\"https://www.tiktok.com/@pamanrizky\" target=\"_blank\" style=\"position: absolute;right: 0px;top: -2px;\"><img src=\"https://timmapwormate.com/images/check/paman_rizky.jpg\" style=\"width: 25px; vertical-align: middle\"></a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"AU  3\" data-port=\"wss://fra-c.wormate.io:32103/wormy\">03. &nbsp;أستراليا</a></div>\r\n\t\t\t\t\t\t<div class=\"div_item\"><a href=\"\" class=\"select_item\" data-name=\"AU  4\" data-port=\"wss://fra-c.wormate.io:32064/wormy\">04. &nbsp;أستراليا<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 9px;margin-right: 28px;float: right;\"></span></a></div></div><div id=\"area_gb\" class=\"area_map div_hidden\"><p style=\"text-align: center;font-size: 20px;\">Updating.<br>Please wait, Thanks.</p></div></div><script> $(\"#flag_br\").click(function(){ $(\"#flag_br\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_br\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_us\").click(function(){ $(\"#flag_us\").addClass(\"area_show\"); $(\"#flag_br,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_us\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_br,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_ca\").click(function(){ $(\"#flag_ca\").addClass(\"area_show\"); $(\"#flag_us,#flag_br,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_ca\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_br,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_mx\").click(function(){ $(\"#flag_mx\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_br,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_mx\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_br,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_de\").click(function(){ $(\"#flag_de\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_mx,#flag_br,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_de\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_mx,#area_br,#area_fr,#area_sg,#area_jp,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_fr\").click(function(){ $(\"#flag_fr\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_br,#flag_sg,#flag_jp,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_fr\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_mx,#area_de,#area_br,#area_sg,#area_jp,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_sg\").click(function(){ $(\"#flag_sg\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_br,#flag_jp,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_sg\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_br,#area_jp,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_jp\").click(function(){ $(\"#flag_jp\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_br,#flag_au,#flag_gb\").removeClass(\"area_show\"); $(\"#area_jp\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_br,#area_au,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_au\").click(function(){ $(\"#flag_au\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_br,#flag_gb\").removeClass(\"area_show\"); $(\"#area_au\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_br,#area_gb\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\"#flag_gb\").click(function(){ $(\"#flag_gb\").addClass(\"area_show\"); $(\"#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_br\").removeClass(\"area_show\"); $(\"#area_gb\").addClass(\"div_show\").removeClass(\"div_hidden\"); $(\"#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_br\").addClass(\"div_hidden\").removeClass(\"div_show\"); }); $(\".select_item\").click(function(d){ d.preventDefault(); var p = $(this).data(\"port\"); $(\"#port_id\").val(p); var n = $(this).data(\"name\"); $(\"#port_name\").val(n); document.getElementById(\"mm-action-play\").click(); }); </script><p id=\"epx_time\" style=\"text-align: center;position: absolute;bottom: -15px;width: 100%;background-image: linear-gradient(#22ffcd, #cb5dc5); font-weight: bold; color: white; border: 1px solid;border-radius: 10px;border-color: #ffffff;\">Infinite Activation</p><p id=\"update_new_2\" style=\"text-align: center;position: absolute;bottom: -15px;width: 100%;background-image: linear-gradient(#ffffff, #ffffff);font-weight: bold;color: black;border: 1px solid;border-radius: 10px;border-color: #ffffff;\">من فضلك ، امسح سجل المتصفح لتحديث الامتداد. شكرًا.</p>",
          propertyList: [{
            id: 386,
            type: "SKIN"
          }, {
            id: 387,
            type: "SKIN"
          }, {
            id: 388,
            type: "SKIN"
          }, {
            id: 394,
            type: "SKIN"
          }, {
            id: 400,
            type: "SKIN"
          }, {
            id: 401,
            type: "SKIN"
          }, {
            id: 402,
            type: "SKIN"
          }, {
            id: 403,
            type: "SKIN"
          }, {
            id: 404,
            type: "SKIN"
          }, {
            id: 405,
            type: "SKIN"
          }, {
            id: 406,
            type: "SKIN"
          }, {
            id: 407,
            type: "SKIN"
          }, {
            id: 408,
            type: "SKIN"
          }, {
            id: 409,
            type: "SKIN"
          }, {
            id: 410,
            type: "SKIN"
          }, {
            id: 411,
            type: "SKIN"
          }, {
            id: 412,
            type: "SKIN"
          }, {
            id: 413,
            type: "SKIN"
          }, {
            id: 748,
            type: "SKIN"
          }, {
            id: 414,
            type: "SKIN"
          }, {
            id: 415,
            type: "SKIN"
          }, {
            id: 416,
            type: "SKIN"
          }, {
            id: 417,
            type: "SKIN"
          }, {
            id: 418,
            type: "SKIN"
          }, {
            id: 419,
            type: "SKIN"
          }, {
            id: 420,
            type: "SKIN"
          }, {
            id: 421,
            type: "SKIN"
          }, {
            id: 422,
            type: "SKIN"
          }, {
            id: 423,
            type: "SKIN"
          }, {
            id: 424,
            type: "SKIN"
          }, {
            id: 425,
            type: "SKIN"
          }, {
            id: 426,
            type: "SKIN"
          }, {
            id: 427,
            type: "SKIN"
          }, {
            id: 428,
            type: "SKIN"
          }, {
            id: 429,
            type: "SKIN"
          }, {
            id: 430,
            type: "SKIN"
          }, {
            id: 431,
            type: "SKIN"
          }, {
            id: 432,
            type: "SKIN"
          }, {
            id: 433,
            type: "SKIN"
          }, {
            id: 434,
            type: "SKIN"
          }, {
            id: 435,
            type: "SKIN"
          }, {
            id: 436,
            type: "SKIN"
          }, {
            id: 437,
            type: "SKIN"
          }, {
            id: 438,
            type: "SKIN"
          }, {
            id: 439,
            type: "SKIN"
          }, {
            id: 440,
            type: "SKIN"
          }, {
            id: 441,
            type: "SKIN"
          }, {
            id: 442,
            type: "SKIN"
          }, {
            id: 443,
            type: "SKIN"
          }, {
            id: 444,
            type: "SKIN"
          }, {
            id: 445,
            type: "SKIN"
          }, {
            id: 446,
            type: "SKIN"
          }, {
            id: 447,
            type: "SKIN"
          }, {
            id: 448,
            type: "SKIN"
          }, {
            id: 449,
            type: "SKIN"
          }, {
            id: 450,
            type: "SKIN"
          }, {
            id: 451,
            type: "SKIN"
          }, {
            id: 452,
            type: "SKIN"
          }, {
            id: 453,
            type: "SKIN"
          }, {
            id: 454,
            type: "SKIN"
          }, {
            id: 455,
            type: "SKIN"
          }, {
            id: 456,
            type: "SKIN"
          }, {
            id: 457,
            type: "SKIN"
          }, {
            id: 458,
            type: "SKIN"
          }, {
            id: 459,
            type: "SKIN"
          }, {
            id: 460,
            type: "SKIN"
          }, {
            id: 461,
            type: "SKIN"
          }, {
            id: 462,
            type: "SKIN"
          }, {
            id: 463,
            type: "SKIN"
          }, {
            id: 464,
            type: "SKIN"
          }, {
            id: 465,
            type: "SKIN"
          }, {
            id: 466,
            type: "SKIN"
          }, {
            id: 467,
            type: "SKIN"
          }, {
            id: 468,
            type: "SKIN"
          }, {
            id: 471,
            type: "SKIN"
          }, {
            id: 472,
            type: "SKIN"
          }, {
            id: 473,
            type: "SKIN"
          }, {
            id: 474,
            type: "SKIN"
          }, {
            id: 475,
            type: "SKIN"
          }, {
            id: 476,
            type: "SKIN"
          }, {
            id: 477,
            type: "SKIN"
          }, {
            id: 478,
            type: "SKIN"
          }, {
            id: 479,
            type: "SKIN"
          }, {
            id: 480,
            type: "SKIN"
          }, {
            id: 481,
            type: "SKIN"
          }, {
            id: 482,
            type: "SKIN"
          }, {
            id: 483,
            type: "SKIN"
          }, {
            id: 484,
            type: "SKIN"
          }, {
            id: 485,
            type: "SKIN"
          }, {
            id: 486,
            type: "SKIN"
          }, {
            id: 487,
            type: "SKIN"
          }, {
            id: 488,
            type: "SKIN"
          }, {
            id: 489,
            type: "SKIN"
          }, {
            id: 490,
            type: "SKIN"
          }, {
            id: 523,
            type: "SKIN"
          }, {
            id: 555,
            type: "SKIN"
          }, {
            id: 550,
            type: "SKIN"
          }, {
            id: 551,
            type: "SKIN"
          }, {
            id: 552,
            type: "SKIN"
          }, {
            id: 553,
            type: "SKIN"
          }, {
            id: 554,
            type: "SKIN"
          }, {
            id: 556,
            type: "SKIN"
          }, {
            id: 557,
            type: "SKIN"
          }, {
            id: 558,
            type: "SKIN"
          }, {
            id: 560,
            type: "SKIN"
          }, {
            id: 561,
            type: "SKIN"
          }, {
            id: 562,
            type: "SKIN"
          }, {
            id: 563,
            type: "SKIN"
          }, {
            id: 564,
            type: "SKIN"
          }, {
            id: 565,
            type: "SKIN"
          }, {
            id: 567,
            type: "SKIN"
          }, {
            id: 568,
            type: "SKIN"
          }, {
            id: 569,
            type: "SKIN"
          }, {
            id: 570,
            type: "SKIN"
          }, {
            id: 571,
            type: "SKIN"
          }, {
            id: 573,
            type: "SKIN"
          }, {
            id: 574,
            type: "SKIN"
          }, {
            id: 575,
            type: "SKIN"
          }, {
            id: 576,
            type: "SKIN"
          }, {
            id: 577,
            type: "SKIN"
          }, {
            id: 578,
            type: "SKIN"
          }, {
            id: 579,
            type: "SKIN"
          }, {
            id: 580,
            type: "SKIN"
          }, {
            id: 585,
            type: "SKIN"
          }, {
            id: 586,
            type: "SKIN"
          }, {
            id: 590,
            type: "SKIN"
          }, {
            id: 599,
            type: "SKIN"
          }, {
            id: 600,
            type: "SKIN"
          }, {
            id: 601,
            type: "SKIN"
          }, {
            id: 610,
            type: "SKIN"
          }, {
            id: 611,
            type: "SKIN"
          }, {
            id: 615,
            type: "SKIN"
          }, {
            id: 617,
            type: "SKIN"
          }, {
            id: 629,
            type: "SKIN"
          }, {
            id: 631,
            type: "SKIN"
          }, {
            id: 648,
            type: "SKIN"
          }, {
            id: 649,
            type: "SKIN"
          }, {
            id: 635,
            type: "SKIN"
          }, {
            id: 646,
            type: "SKIN"
          }, {
            id: 647,
            type: "SKIN"
          }, {
            id: 657,
            type: "SKIN"
          }, {
            id: 658,
            type: "SKIN"
          }, {
            id: 666,
            type: "SKIN"
          }, {
            id: 684,
            type: "SKIN"
          }, {
            id: 685,
            type: "SKIN"
          }, {
            id: 686,
            type: "SKIN"
          }, {
            id: 687,
            type: "SKIN"
          }, {
            id: 688,
            type: "SKIN"
          }, {
            id: 730,
            type: "SKIN"
          }, {
            id: 731,
            type: "SKIN"
          }, {
            id: 732,
            type: "SKIN"
          }, {
            id: 733,
            type: "SKIN"
          }, {
            id: 734,
            type: "SKIN"
          }, {
            id: 770,
            type: "SKIN"
          }, {
            id: 771,
            type: "SKIN"
          }, {
            id: 772,
            type: "SKIN"
          }, {
            id: 773,
            type: "SKIN"
          }, {
            id: 774,
            type: "SKIN"
          }, {
            id: 775,
            type: "SKIN"
          }, {
            id: 776,
            type: "SKIN"
          }, {
            id: 777,
            type: "SKIN"
          }, {
            id: 778,
            type: "SKIN"
          }, {
            id: 779,
            type: "SKIN"
          }, {
            id: 780,
            type: "SKIN"
          }, {
            id: 781,
            type: "SKIN"
          }, {
            id: 782,
            type: "SKIN"
          }, {
            id: 783,
            type: "SKIN"
          }, {
            id: 784,
            type: "SKIN"
          }, {
            id: 785,
            type: "SKIN"
          }, {
            id: 786,
            type: "SKIN"
          }, {
            id: 798,
            type: "SKIN"
          }, {
            id: 799,
            type: "SKIN"
          }, {
            id: 750,
            type: "SKIN"
          }, {
            id: 759,
            type: "SKIN"
          }, {
            id: 751,
            type: "SKIN"
          }, {
            id: 754,
            type: "SKIN"
          }, {
            id: 369,
            type: "SKIN"
          }, {
            id: 397,
            type: "SKIN"
          }, {
            id: 528,
            type: "SKIN"
          }, {
            id: 529,
            type: "SKIN"
          }, {
            id: 534,
            type: "SKIN"
          }, {
            id: 543,
            type: "SKIN"
          }, {
            id: 603,
            type: "SKIN"
          }, {
            id: 604,
            type: "SKIN"
          }, {
            id: 800,
            type: "SKIN"
          }, {
            id: 801,
            type: "SKIN"
          }, {
            id: 802,
            type: "SKIN"
          }, {
            id: 807,
            type: "SKIN"
          }, {
            id: 808,
            type: "SKIN"
          }, {
            id: 809,
            type: "SKIN"
          }, {
            id: 744,
            type: "SKIN"
          }, {
            id: 496,
            type: "SKIN"
          }, {
            id: 400,
            type: "EYES"
          }, {
            id: 401,
            type: "EYES"
          }, {
            id: 402,
            type: "EYES"
          }, {
            id: 403,
            type: "EYES"
          }, {
            id: 404,
            type: "EYES"
          }, {
            id: 405,
            type: "EYES"
          }, {
            id: 406,
            type: "EYES"
          }, {
            id: 407,
            type: "EYES"
          }, {
            id: 408,
            type: "EYES"
          }, {
            id: 409,
            type: "EYES"
          }, {
            id: 410,
            type: "EYES"
          }, {
            id: 411,
            type: "EYES"
          }, {
            id: 412,
            type: "EYES"
          }, {
            id: 413,
            type: "EYES"
          }, {
            id: 414,
            type: "EYES"
          }, {
            id: 415,
            type: "EYES"
          }, {
            id: 416,
            type: "EYES"
          }, {
            id: 417,
            type: "EYES"
          }, {
            id: 418,
            type: "EYES"
          }, {
            id: 419,
            type: "EYES"
          }, {
            id: 420,
            type: "EYES"
          }, {
            id: 421,
            type: "EYES"
          }, {
            id: 422,
            type: "EYES"
          }, {
            id: 423,
            type: "EYES"
          }, {
            id: 424,
            type: "EYES"
          }, {
            id: 425,
            type: "EYES"
          }, {
            id: 426,
            type: "EYES"
          }, {
            id: 427,
            type: "EYES"
          }, {
            id: 428,
            type: "EYES"
          }, {
            id: 429,
            type: "EYES"
          }, {
            id: 430,
            type: "EYES"
          }, {
            id: 431,
            type: "EYES"
          }, {
            id: 432,
            type: "EYES"
          }, {
            id: 433,
            type: "EYES"
          }, {
            id: 434,
            type: "EYES"
          }, {
            id: 731,
            type: "EYES"
          }, {
            id: 732,
            type: "EYES"
          }, {
            id: 733,
            type: "EYES"
          }, {
            id: 734,
            type: "EYES"
          }, {
            id: 735,
            type: "EYES"
          }, {
            id: 736,
            type: "EYES"
          }, {
            id: 737,
            type: "EYES"
          }, {
            id: 738,
            type: "EYES"
          }, {
            id: 739,
            type: "EYES"
          }, {
            id: 740,
            type: "EYES"
          }, {
            id: 741,
            type: "EYES"
          }, {
            id: 742,
            type: "EYES"
          }, {
            id: 402,
            type: "GLASSES"
          }, {
            id: 403,
            type: "GLASSES"
          }, {
            id: 404,
            type: "GLASSES"
          }, {
            id: 405,
            type: "GLASSES"
          }, {
            id: 406,
            type: "GLASSES"
          }, {
            id: 407,
            type: "GLASSES"
          }, {
            id: 412,
            type: "GLASSES"
          }, {
            id: 413,
            type: "GLASSES"
          }, {
            id: 414,
            type: "GLASSES"
          }, {
            id: 415,
            type: "GLASSES"
          }, {
            id: 416,
            type: "GLASSES"
          }, {
            id: 417,
            type: "GLASSES"
          }, {
            id: 418,
            type: "GLASSES"
          }, {
            id: 419,
            type: "GLASSES"
          }, {
            id: 420,
            type: "GLASSES"
          }, {
            id: 421,
            type: "GLASSES"
          }, {
            id: 401,
            type: "GLASSES"
          }, {
            id: 423,
            type: "GLASSES"
          }, {
            id: 424,
            type: "GLASSES"
          }, {
            id: 400,
            type: "HAT"
          }, {
            id: 402,
            type: "HAT"
          }, {
            id: 403,
            type: "HAT"
          }, {
            id: 404,
            type: "HAT"
          }, {
            id: 406,
            type: "HAT"
          }, {
            id: 407,
            type: "HAT"
          }, {
            id: 408,
            type: "HAT"
          }, {
            id: 409,
            type: "HAT"
          }, {
            id: 410,
            type: "HAT"
          }, {
            id: 411,
            type: "HAT"
          }, {
            id: 412,
            type: "HAT"
          }, {
            id: 413,
            type: "HAT"
          }, {
            id: 414,
            type: "HAT"
          }, {
            id: 415,
            type: "HAT"
          }, {
            id: 416,
            type: "HAT"
          }, {
            id: 417,
            type: "HAT"
          }, {
            id: 418,
            type: "HAT"
          }, {
            id: 419,
            type: "HAT"
          }, {
            id: 420,
            type: "HAT"
          }, {
            id: 421,
            type: "HAT"
          }, {
            id: 422,
            type: "HAT"
          }, {
            id: 423,
            type: "HAT"
          }, {
            id: 424,
            type: "HAT"
          }, {
            id: 425,
            type: "HAT"
          }, {
            id: 429,
            type: "HAT"
          }, {
            id: 430,
            type: "HAT"
          }, {
            id: 431,
            type: "HAT"
          }, {
            id: 432,
            type: "HAT"
          }, {
            id: 436,
            type: "HAT"
          }, {
            id: 437,
            type: "HAT"
          }, {
            id: 438,
            type: "HAT"
          }, {
            id: 442,
            type: "HAT"
          }, {
            id: 443,
            type: "HAT"
          }, {
            id: 444,
            type: "HAT"
          }, {
            id: 445,
            type: "HAT"
          }, {
            id: 447,
            type: "HAT"
          }, {
            id: 448,
            type: "HAT"
          }, {
            id: 451,
            type: "HAT"
          }, {
            id: 452,
            type: "HAT"
          }, {
            id: 453,
            type: "HAT"
          }, {
            id: 455,
            type: "HAT"
          }, {
            id: 463,
            type: "HAT"
          }, {
            id: 465,
            type: "HAT"
          }, {
            id: 467,
            type: "HAT"
          }, {
            id: 426,
            type: "HAT"
          }, {
            id: 427,
            type: "HAT"
          }, {
            id: 441,
            type: "HAT"
          }, {
            id: 446,
            type: "HAT"
          }, {
            id: 462,
            type: "HAT"
          }, {
            id: 739,
            type: "HAT"
          }, {
            id: 740,
            type: "HAT"
          }, {
            id: 741,
            type: "HAT"
          }, {
            id: 742,
            type: "HAT"
          }, {
            id: 743,
            type: "HAT"
          }, {
            id: 744,
            type: "HAT"
          }, {
            id: 745,
            type: "HAT"
          }, {
            id: 747,
            type: "HAT"
          }, {
            id: 748,
            type: "HAT"
          }, {
            id: 749,
            type: "HAT"
          }, {
            id: 750,
            type: "HAT"
          }, {
            id: 753,
            type: "HAT"
          }, {
            id: 754,
            type: "HAT"
          }, {
            id: 755,
            type: "HAT"
          }, {
            id: 756,
            type: "HAT"
          }, {
            id: 757,
            type: "HAT"
          }, {
            id: 767,
            type: "HAT"
          }, {
            id: 768,
            type: "HAT"
          }, {
            id: 774,
            type: "HAT"
          }, {
            id: 775,
            type: "HAT"
          }, {
            id: 776,
            type: "HAT"
          }, {
            id: 777,
            type: "HAT"
          }, {
            id: 778,
            type: "HAT"
          }, {
            id: 779,
            type: "HAT"
          }, {
            id: 780,
            type: "HAT"
          }, {
            id: 781,
            type: "HAT"
          }, {
            id: 782,
            type: "HAT"
          }, {
            id: 783,
            type: "HAT"
          }, {
            id: 784,
            type: "HAT"
          }, {
            id: 785,
            type: "HAT"
          }, {
            id: 405,
            type: "HAT"
          }, {
            id: 433,
            type: "HAT"
          }, {
            id: 434,
            type: "HAT"
          }, {
            id: 439,
            type: "HAT"
          }, {
            id: 459,
            type: "HAT"
          }, {
            id: 460,
            type: "HAT"
          }, {
            id: 464,
            type: "HAT"
          }, {
            id: 400,
            type: "MOUTH"
          }, {
            id: 401,
            type: "MOUTH"
          }, {
            id: 402,
            type: "MOUTH"
          }, {
            id: 403,
            type: "MOUTH"
          }, {
            id: 404,
            type: "MOUTH"
          }, {
            id: 405,
            type: "MOUTH"
          }, {
            id: 406,
            type: "MOUTH"
          }, {
            id: 500,
            type: "SKIN"
          }, {
            id: 502,
            type: "SKIN"
          }, {
            id: 504,
            type: "SKIN"
          }, {
            id: 505,
            type: "SKIN"
          }, {
            id: 506,
            type: "SKIN"
          }, {
            id: 507,
            type: "SKIN"
          }, {
            id: 516,
            type: "SKIN"
          }, {
            id: 517,
            type: "SKIN"
          }, {
            id: 526,
            type: "SKIN"
          }, {
            id: 533,
            type: "SKIN"
          }, {
            id: 537,
            type: "SKIN"
          }, {
            id: 540,
            type: "SKIN"
          }, {
            id: 546,
            type: "SKIN"
          }, {
            id: 2200,
            type: "SKIN"
          }, {
            id: 699,
            type: "SKIN"
          }, {
            id: 382,
            type: "SKIN"
          }, {
            id: 375,
            type: "SKIN"
          }, {
            id: 522,
            type: "SKIN"
          }, {
            id: 530,
            type: "SKIN"
          }, {
            id: 542,
            type: "SKIN"
          }, {
            id: 370,
            type: "SKIN"
          }, {
            id: 527,
            type: "SKIN"
          }, {
            id: 746,
            type: "SKIN"
          }, {
            id: 491,
            type: "SKIN"
          }, {
            id: 492,
            type: "SKIN"
          }, {
            id: 753,
            type: "SKIN"
          }, {
            id: 458,
            type: "HAT"
          }, {
            id: 449,
            type: "HAT"
          }, {
            id: 450,
            type: "HAT"
          }, {
            id: 454,
            type: "HAT"
          }, {
            id: 456,
            type: "HAT"
          }, {
            id: 457,
            type: "HAT"
          }, {
            id: 461,
            type: "HAT"
          }, {
            id: 743,
            type: "EYES"
          }, {
            id: 744,
            type: "EYES"
          }, {
            id: 409,
            type: "GLASSES"
          }, {
            id: 410,
            type: "GLASSES"
          }, {
            id: 411,
            type: "GLASSES"
          }, {
            id: 425,
            type: "GLASSES"
          }, {
            id: 427,
            type: "GLASSES"
          }, {
            id: 428,
            type: "GLASSES"
          }, {
            id: 429,
            type: "GLASSES"
          }, {
            id: 430,
            type: "GLASSES"
          }, {
            id: 431,
            type: "GLASSES"
          }, {
            id: 494,
            type: "SKIN"
          }, {
            id: 769,
            type: "HAT"
          }, {
            id: 793,
            type: "HAT"
          }, {
            id: 794,
            type: "HAT"
          }, {
            id: 798,
            type: "HAT"
          }, {
            id: 795,
            type: "HAT"
          }, {
            id: 797,
            type: "HAT"
          }, {
            id: 468,
            type: "HAT"
          }, {
            id: 731,
            type: "HAT"
          }, {
            id: 732,
            type: "HAT"
          }, {
            id: 401,
            type: "HAT"
          }, {
            id: 759,
            type: "HAT"
          }, {
            id: 800,
            type: "HAT"
          }, {
            id: 735,
            type: "HAT"
          }, {
            id: 737,
            type: "HAT"
          }, {
            id: 738,
            type: "HAT"
          }, {
            id: 440,
            type: "HAT"
          }, {
            id: 734,
            type: "HAT"
          }, {
            id: 799,
            type: "HAT"
          }, {
            id: 751,
            type: "HAT"
          }, {
            id: 796,
            type: "HAT"
          }, {
            id: 758,
            type: "HAT"
          }, {
            id: 698,
            type: "SKIN"
          }, {
            id: 713,
            type: "SKIN"
          }, {
            id: 660,
            type: "SKIN"
          }, {
            id: 620,
            type: "SKIN"
          }, {
            id: 714,
            type: "SKIN"
          }, {
            id: 722,
            type: "SKIN"
          }, {
            id: 719,
            type: "SKIN"
          }, {
            id: 692,
            type: "SKIN"
          }, {
            id: 761,
            type: "SKIN"
          }, {
            id: 693,
            type: "SKIN"
          }, {
            id: 662,
            type: "SKIN"
          }, {
            id: 643,
            type: "SKIN"
          }, {
            id: 596,
            type: "SKIN"
          }, {
            id: 740,
            type: "SKIN"
          }, {
            id: 724,
            type: "SKIN"
          }, {
            id: 742,
            type: "SKIN"
          }, {
            id: 515,
            type: "SKIN"
          }, {
            id: 642,
            type: "SKIN"
          }, {
            id: 634,
            type: "SKIN"
          }],
          mb: "<h4 class=\"center\">Android Phone Control Buttons</h4><table><tr><td><label for=\"joystick_checked\">Enable or Disable</label> <input type=\"checkbox\" id=\"joystick_checked\" value=\"true\" checked></td><td> <label for=\"joystick_color\">Color</label> <select id=\"joystick_color\"> <option value=\"red\">Red</option> <option value=\"blue\">Blue</option> <option value=\"black\">Black</option> <option value=\"white\">White</option> </select></td></tr><tr><td> <label for=\"joystick_mode\">Modes</label> <select id=\"joystick_mode\"> <option value=\"dynamic\">Dynamic Mode</option> <option value=\"static\">Static Mode</option> </select></td><td> <label for=\"joystick_position\">Edge</label> <select id=\"joystick_position\"> <option value=\"L\">Left</option> <option value=\"R\">Right</option> </select></td></tr><tr><td> <label for=\"joystick_size\">Size</label> <select id=\"joystick_size\"> <option value=\"90\">90</option> <option value=\"100\">100</option> <option value=\"110\">110</option> </select></td><td> <label for=\"joystick_pxy\">Coordinates(X,Y)</label> <select id=\"joystick_pxy\"> <option value=\"90\">(90,90)</option> <option value=\"100\">(100,100)</option> <option value=\"110\">(110,110)</option> </select></td></tr></table>",
          cm: "",
          cr: "",
          ccc: "iq",
          ccg: ["Kill and Headshot statistics will be removed?", "There was a connection problem!", "Your account has been locked.", "Respanwn", "Full Screen", "In the Match / In-game", "⚙️", "Account ID", "Copy Account ID", "Copy ID", "Nation", "Remember the number of kills and headshots", "On or Off", "Background Image", "Copy", "Vietnam", "Thailand", "Cambodia", "Indonesia", "Singapore", "Japan", "Mexico", "Brazil", "Canada", "Germany", "France", "England", "Australia", "USA", "Portugal", "Shorten / Abbreviate", "Dark Blue Sky", "Purple Sky", "Clouds", "💡", "Turkey", "Arabs"],
          streamer: "CindyNana GM",
          programmer: "Pham Phu Bach",
          extension: "TimmapWormate",
          game: "Wormate.io",
          note: "Please don't copy my code",
          z: "c",
          s11: "0.0.0.0.0.0.0.0.0.0.0",
          sw: 1,
          tt: 0,
          vs: 170,
          dsg: ["100|491", "104|492", "133|494", "1146|717", "687|757", "1002|703"]
        };
        const vF44 = (p801, p802) => {
          if (Array.isArray(p802)) {
            return p802.slice();
          }
          if (p802 && typeof p802 === "object") {
            const vO38 = {
              ...p801
            };
            for (const v950 of Object.keys(p802)) {
              if (v950 === "propertyList") {
                const v951 = Array.isArray(p801?.propertyList) ? p801.propertyList : [];
                const v952 = Array.isArray(p802.propertyList) ? p802.propertyList : [];
                vO38.propertyList = v951.concat(v952);
                continue;
              }
              vO38[v950] = vF44(p801 ? p801[v950] : undefined, p802[v950]);
            }
            return vO38;
          }
          if (p802 === undefined) {
            return p801;
          } else {
            return p802;
          }
        };
        v949 = vF44(v949 || {}, vO37);
      } catch (e33) {}
      vO7.pL = [];
      vO7.v_z = v949.vs;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
      if (vO7.dg != null && v949.dsg.join() != vO7.dg.join() || vO7.dg == null && v949.dsg.join() != "") {
        vO7.dg = v949.dsg;
        localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
        window.location.reload();
      }
      if (v34 != vO7.v_z) {
        localStorage.removeItem("tmwsw");
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      if (v949.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (v949.e === "not_empty") {
          $(".description-text").html(v949.cc);
          if (v949.cr != "") {
            $("#loa831pibur0w4gv").html(v949.cr);
          } else {
            $("#loa831pibur0w4gv").html("");
          }
        } else if (v949.e === "empty" || v949.e === "new") {
          $(".description-text").html(v949.cc);
        }
        vO7.pL = [...v949.propertyList];
      }
      p799(p798);
      var vLS8 = "";
      if (v949.e === "not_empty") {
        vLS8 = "<input type=\"button\" value=\"" + v949.ccg[3] + "\" id=\"btnRePlay\">";
        vO7.s_w = v949.sw == 1;
      }
      vF41(v949.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + v949.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + v949.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + vLS8 + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let v953 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (v953 && !vO7.fullscreen) {
          try {
            vO7.fullscreen = true;
            v953.call(document.documentElement);
          } catch (e34) {}
        } else {
          vO7.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (v949.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(vO7.pi);
          $("#port_name_s").val(vO7.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (vO7.s_w) {
        $(" <button id=\"btn_crsw\" style=\"display: none;\">" + v949.ccg[34] + "</button> <button id=\"op_tmw\">" + v949.ccg[6] + "</button> <div id=\"modal_tmw\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">×</span> <h2 class=\"modal-title\" >" + v949.ccg[6] + "</h2></div> <div id=\"modal_tmw_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + v949.ccg[7] + "</label> <input value=\"" + p798.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + v949.ccg[8] + "</span>" + v949.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + v949.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_crsw\" style=\"display: none;\">Skin_Wear_file (.json) &nbsp;<input type=\"file\" accept=\".json\" id=\"fileSkin\" /><button id=\"btn_clear_file\">Clear file</button></div><br><div id=\"div_save\" style=\"display: none;\">" + v949.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + v949.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">🔊<input type=\"checkbox\" id=\"tmwsound\" value=\"true\"><audio id=\"s_h\"><source src=\"" + atob(v33[34]) + "\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">⏩<input type=\"checkbox\" id=\"tmwspeed\" value=\"true\"></div><div class=\"setting-item\" id=\"div_zigzag\" style=\"display: none;\"><select id=\"sel_zigzag\" style=\"margin-left: 10px;\"><option value=\"0\">معطل</option><option value=\"1\">Zigzag 1</option><option value=\"2\">Zigzag 2</option><option value=\"3\">Zigzag 3</option></select></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">🖥️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">⬛</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"tmwiq\" value=\"true\"></div><div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">Smooth: <select id=\"sel_sm\"><option value=\"20\">Normal</option><option value=\"10\">Hight</option></select></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + v949.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
        $("#btn_clear_file").click(function () {
          localStorage.removeItem("custom_wear");
          localStorage.removeItem("custom_skin");
          window.location.reload();
        });
        $("#btn_crsw").click(function () {
          window.open("https://timmapwormate.com/skin-wear-wormate/", "_blank");
        });
        var v947 = document.getElementById("btn_crsw");
        var v954 = document.getElementById("div_crsw");
        function f90(p803) {
          if (p803.target.result.indexOf("\"wear\":") !== -1) {
            localStorage.setItem("custom_wear", p803.target.result);
          } else {
            localStorage.setItem("custom_skin", p803.target.result);
          }
          window.location.href = "https://wormate.io/";
        }
        v947.style.display = "inline-block";
        v954.style.display = "block";
        document.getElementById("fileSkin").addEventListener("change", function f91(p804) {
          var v955 = new FileReader();
          v955.onload = f90;
          v955.readAsText(p804.target.files[0]);
        });
      } else {
        $(" <button id=\"op_tmw\">" + v949.ccg[6] + "</button> <div id=\"modal_tmw\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">×</span> <h2 class=\"modal-title\" >" + v949.ccg[6] + "</h2></div> <div id=\"modal_tmw_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + v949.ccg[7] + "</label> <input value=\"" + p798.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + v949.ccg[8] + "</span>" + v949.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + v949.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_save\" style=\"display: none;\">" + v949.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + v949.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">🔊<input type=\"checkbox\" id=\"tmwsound\" value=\"true\"><audio id=\"s_h\"><source src=\"" + atob(v33[34]) + "\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">⏩<input type=\"checkbox\" id=\"tmwspeed\" value=\"true\"></div><div class=\"setting-item\" id=\"div_zigzag\" style=\"display: none;\"><select id=\"sel_zigzag\" style=\"margin-left: 10px;\"><option value=\"0\">معطل</option><option value=\"1\">Zigzag 1</option><option value=\"2\">Zigzag 2</option><option value=\"3\">Zigzag 3</option></select></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">🖥️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">⬛</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"tmwiq\" value=\"true\"></div><div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">Smooth: <select id=\"sel_sm\"><option value=\"20\">Normal</option><option value=\"10\">Hight</option></select></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + v949.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
      }
      ;
      $("#btn_copy").click(function () {
        var v956 = document.getElementById("id_customer");
        v956.select();
        v956.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(v956.value);
        $("#myTooltip").html("" + v949.ccg[14] + "!");
      });
      $("#btn_copy").hover(function () {
        $("#myTooltip").css("visibility", "unset");
        $("#myTooltip").css("opacity", "unset");
      }, function () {
        $("#myTooltip").css("visibility", "visible");
        $("#myTooltip").css("opacity", "0");
      });
      var v946 = document.getElementById("modal_tmw");
      var v948 = document.getElementById("op_tmw");
      var v957 = document.getElementsByClassName("close")[0];
      v948.onclick = function () {
        v946.style.display = "block";
      };
      v957.onclick = function () {
        v946.style.display = "none";
      };
      var v958 = document.getElementById("div_save");
      var v959 = document.getElementById("div_sound");
      var v960 = document.getElementById("div_speed");
      var v961 = document.getElementById("div_zigzag");
      document.getElementById("s_h");
      var v962 = document.getElementById("div_w1");
      var v963 = document.getElementById("div_sm");
      var v964 = document.getElementById("sel_sc");
      var v965 = document.getElementById("div_top");
      var v966 = document.getElementById("sel_top");
      var v967 = document.getElementById("div_arab");
      var v968 = document.getElementById("div_background");
      var vA14 = [{
        name: v949.ccg[15],
        val: "vn"
      }, {
        name: v949.ccg[16],
        val: "th"
      }, {
        name: v949.ccg[17],
        val: "kh"
      }, {
        name: v949.ccg[18],
        val: "id"
      }, {
        name: v949.ccg[19],
        val: "sg"
      }, {
        name: v949.ccg[20],
        val: "jp"
      }, {
        name: v949.ccg[21],
        val: "mx"
      }, {
        name: v949.ccg[22],
        val: "br"
      }, {
        name: v949.ccg[23],
        val: "ca"
      }, {
        name: v949.ccg[24],
        val: "de"
      }, {
        name: v949.ccg[25],
        val: "fr"
      }, {
        name: v949.ccg[26],
        val: "gb"
      }, {
        name: v949.ccg[27],
        val: "au"
      }, {
        name: v949.ccg[28],
        val: "us"
      }, {
        name: v949.ccg[29],
        val: "pt"
      }, {
        name: v949.ccg[35],
        val: "tr"
      }, {
        name: v949.ccg[36],
        val: "iq"
      }];
      let v969 = document.getElementById("sel_country");
      for (p799 = 0; p799 < vA14.length; p799++) {
        let v970 = document.createElement("option");
        v970.value = vA14[p799].val;
        v970.innerHTML = vA14[p799].name;
        v969.appendChild(v970);
      }
      ;
      if (v31) {
        v969.value = v31;
      }
      v969.onchange = function () {
        let v971 = v969.value;
        v31 = v971;
        localStorage.setItem("oco", v971);
        var vO39 = {
          id_wormate: p798.userId,
          country: v971
        };
        fetch(vO7.s_l + "/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO39)
        });
        localStorage.removeItem("tmwsw");
        window.location.reload();
      };
      var v972 = false;
      if (v949.cm === "" || v949.cm === undefined) ;else {
        var v944 = document.getElementById("btn_in_t");
        var v973 = document.getElementById("mm-action-play");
        var v974 = document.getElementById("port_id");
        v944.style.display = "block";
        v944.onclick = function () {
          v974.value = v949.cm;
          v973.click();
        };
        v972 = true;
      }
      ;
      if (v949.e === "not_connect") ;else {
        vO7.h = v949.z == "b";
        vO7.hz = v949.z == "c";
        if (v949.e === "not_empty" || v972) {
          var v975 = ooo.Xg.Kf.Wg.Ah;
          v958.style.display = "block";
          v959.style.display = "inline-block";
          var v$12 = $("#tmwsound");
          v$12.prop("checked", vO7.vh);
          v$12.change(function () {
            if (this.checked) {
              vO7.vh = true;
            } else {
              vO7.vh = false;
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
          });
          v960.style.display = "inline-block";
          var v$13 = $("#tmwspeed");
          v$13.prop("checked", vO7.vp);
          v$13.change(function () {
            if (this.checked) {
              vO7.vp = true;
            } else {
              vO7.vp = false;
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
          });
          $("#sel_zigzag").val(vO7.flx || 0);
          $("#sel_zigzag").change(function () {
            vO7.flx = parseInt($(this).val());
            localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
          });
          v961.style.display = "inline-block";
          v960.style.display = "inline-block";
          var v$14 = $("#tmwspeed");
          v$14.prop("checked", vO7.vp);
          v$14.change(function () {
            if (this.checked) {
              vO7.vp = true;
            } else {
              vO7.vp = false;
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
          });
          if (vO7.mobile) {
            v962.style.display = "none";
            vO7.sc = 0;
            vO7.wi = 0;
          } else {
            v962.style.display = "inline-block";
            v964.value = vO7.sc;
            v964.onchange = function () {
              vO7.sc = parseInt(v964.value);
              if (vO7.sc == 1) {
                vO7.wi = screen.height / (screen.width * 2);
              }
              if (vO7.sc == 2) {
                vO7.wi = 0;
              }
              localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
            };
          }
          v963.style.display = "inline-block";
          sel_sm.value = vO7.sm;
          sel_sm.onchange = function () {
            vO7.sm = parseInt(sel_sm.value);
            localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
          };
          v965.style.display = "inline-block";
          v966.value = vO7.to;
          v966.onchange = function () {
            vO7.to = parseInt(v966.value);
            localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
          };
          if (v969.value == "iq") {
            v967.style.display = "inline-block";
            var v$15 = $("#tmwiq");
            v$15.prop("checked", vO7.iq);
            v$15.change(function () {
              if (this.checked) {
                vO7.iq = true;
              } else {
                vO7.iq = false;
              }
              localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
            });
          } else {
            vO7.iq = false;
            v967.style.display = "none";
          }
          ;
          vO7.c_1 = v949.streamer;
          v968.style.display = "block";
          vF19(vO7, oeo);
          vO6.on = true;
          if (vF3()) {
            vO7.tt = v949.tt == 1;
            v975.img_1.visible = vO6.on && vO7.mo == 1;
            v975.img_2.visible = vO6.on && vO7.mo == 2;
            v975.img_3.visible = vO6.on && vO7.mo == 3;
            v975.img_4.visible = vO6.on && (vO7.mo == 4 || vO7.mo == 5 || vO7.mo == 6);
          } else {
            vO7.tt = false;
          }
          var vA15 = [{
            nome: v949.ccg[30],
            uri: atob(v33[24])
          }, {
            nome: v949.ccg[31],
            uri: atob(v33[25])
          }, {
            nome: v949.ccg[32],
            uri: atob(v33[26])
          }, {
            nome: v949.ccg[33],
            uri: atob(v33[27])
          }, {
            nome: "Cindynana 1",
            uri: atob(v33[28])
          }, {
            nome: "Cindynana 2",
            uri: atob(v33[29])
          }, {
            nome: "Cindynana 3",
            uri: atob(v33[30])
          }, {
            nome: "Cindynana 4",
            uri: atob(v33[31])
          }, {
            nome: "Cindynana 5",
            uri: atob(v33[32])
          }];
          vO7.c_2 = v949.programmer;
          let v976 = document.getElementById("backgroundArena");
          for (p799 = 0; p799 < vA15.length; p799++) {
            let v977 = document.createElement("option");
            v977.value = vA15[p799].uri;
            v977.setAttribute("data-imageSrc", vA15[p799].uri);
            v977.setAttribute("data-descriptione", vA15[p799].nome);
            v977.innerHTML = vA15[p799].nome;
            v976.appendChild(v977);
          }
          ;
          vO7.c_3 = v949.extension;
          v976.value = vO7.background || vA15[0].uri;
          $("#backgroundArena").tmwsle({
            onSelected: function () {
              vO7.background = $("#backgroundArena-value").val();
              localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
              ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(vO7.background));
            }
          });
          vO7.c_4 = v949.game;
          if (vO7.hz) {
            vO7.multiplier = 0.625;
            vO7.zoomLevel = 5;
            const vLN0005 = 0.005;
            const vLN23 = 2;
            const vLN0810 = 0.8;
            function f92() {
              const v978 = vO7.multiplier * vLN0810;
              if (v978 >= vLN0005) {
                vO7.zoomLevel++;
                vO7.multiplier = v978;
                f94();
              }
            }
            function f93() {
              if (vO7.zoomLevel > 0) {
                const v979 = vO7.multiplier / vLN0810;
                if (v979 <= vLN23) {
                  vO7.zoomLevel--;
                  vO7.multiplier = v979;
                  f94();
                }
              }
            }
            function f94() {
              vO7.z = 1 / vO7.multiplier;
              if (vO7.z < 0.5) {
                vO7.z = 0.5;
                vO7.multiplier = 1 / vO7.z;
              }
              try {
                if (typeof _0x15ef25 !== "undefined" && _0x15ef25.zoom) {
                  _0x15ef25.zoom.text = "x" + vO7.z.toFixed(2);
                }
              } catch (e35) {}
            }
            v56.onwheel = function (p805) {
              p805.preventDefault();
              if (!vO7.ctrl && (vO7.z >= 0.2 && vO7.z <= 25 || vO7.z < 0.2 && p805.deltaY < 0 || vO7.z > 25 && p805.deltaY > 0)) {
                if (p805.deltaY < 0) {
                  f92();
                } else {
                  f93();
                }
              }
            };
            vO7.zoomIn = f92;
            vO7.zoomOut = f93;
          }
          if (vO7.mobile) {
            $("#config_mobile").html(v949.mb);
            var v980 = document.getElementById("joystick_checked");
            var v981 = document.getElementById("joystick_color");
            var v982 = document.getElementById("joystick_mode");
            var v983 = document.getElementById("joystick_position");
            var v984 = document.getElementById("joystick_size");
            var v985 = document.getElementById("joystick_pxy");
            v980.onchange = function () {
              vF4(v980);
              vF5(v981);
              vF6(v982);
              vF7(v983);
              vF8(v985);
              vF9(v984);
            };
            v981.onchange = function () {
              vF4(v980);
              vF5(v981);
              vF6(v982);
              vF7(v983);
              vF8(v985);
              vF9(v984);
            };
            v982.onchange = function () {
              vF4(v980);
              vF5(v981);
              vF6(v982);
              vF7(v983);
              vF8(v985);
              vF9(v984);
            };
            v983.onchange = function () {
              vF4(v980);
              vF5(v981);
              vF6(v982);
              vF7(v983);
              vF8(v985);
              vF9(v984);
            };
            v984.onchange = function () {
              vF4(v980);
              vF5(v981);
              vF6(v982);
              vF7(v983);
              vF8(v985);
              vF9(v984);
            };
            v985.onchange = function () {
              vF4(v980);
              vF5(v981);
              vF6(v982);
              vF7(v983);
              vF8(v985);
              vF9(v984);
            };
            if (vO7.joystick) {
              $("#joystick_checked").val(vO7.joystick.checked);
              $("#joystick_color").val(vO7.joystick.color);
              $("#joystick_mode").val(vO7.joystick.mode);
              $("#joystick_position").val(vO7.joystick.positionMode);
              $("#joystick_size").val(vO7.joystick.size);
              $("#joystick_pxy").val(vO7.joystick.pxy);
            } else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
            }
            vF4(v980);
            vF5(v981);
            vF6(v982);
            vF7(v983);
            vF8(v985);
            vF9(v984);
          }
          ;
          v49.on("mousedown", vF30);
          v50.on("mousedown", vF31);
          v51.on("mousedown", vF32);
          vO7.c_5 = v949.note;
        }
        ;
        if (v949.ccc && v949.ccc != "gb" && v949.ccc != v31) {
          localStorage.setItem("oco", v949.ccc);
          localStorage.removeItem("tmwsw");
          window.location.reload();
        }
        if (!v31) {
          localStorage.setItem("oco", "gb");
        }
      }
      ;
      localStorage.setItem("tmwSaveGame", JSON.stringify(vO7));
    };
    setTimeout(() => {
      if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
        window.sectorSystem.init();
      }
    }, 1000);
    Ysw = async function (p806) {
      var v986 = await p806;
      try {
        vO7.gg = [];
        vO7.sg = [];
        var vLN0128 = 0;
        if (v35 && (v35 = JSON.parse(v35)).wear) {
          for (var v987 in v35.wear.textureDict) {
            if (v35.wear.textureDict[v987].file.search("data:image/png;base64,") == -1) {
              v35.wear.textureDict[v987].file = "data:image/png;base64," + v35.wear.textureDict[v987].file.substr(v35.wear.textureDict[v987].file.length - vO7.c_v, vO7.c_v) + v35.wear.textureDict[v987].file.substr(0, v35.wear.textureDict[v987].file.length - vO7.c_v);
            }
            v986.textureDict[v987] = v35.wear.textureDict[v987];
          }
          ;
          for (let v988 in v35.wear.regionDict) {
            v986.regionDict[v988] = v35.wear.regionDict[v988];
            v986[(v987 = v986.regionDict[v988]).list][v987.id] = v987.obj;
            v986[v987.listVariant].push([v987.id]);
          }
        }
        ;
        if (v36) {
          if ((v36 = JSON.parse(v36)).csg) {
            var vLN0129 = 0;
            var v989 = false;
            var vLN0130 = 0;
            for (var v990 in v36.csg["0"]) {
              for (var v991 = v36.csg["1"][v990].split("|"), vLN0131 = 0; vLN0131 < v991.length; vLN0131++) {
                v986.textureDict["t_tmw_" + (vO7.g / 9 * 1000 + vLN0130)] = {
                  custom: true,
                  file: "data:image/png;base64," + v991[vLN0131].substr(v991[vLN0131].length - vO7.c_v, vO7.c_v) + v991[vLN0131].substr(0, v991[vLN0131].length - vO7.c_v)
                };
                vLN0130++;
              }
              ;
              var v992 = v36.csg["2"][v990];
              var vLN0132 = 0;
              var vAtob = atob(v33[36]);
              var vLSGIFSKIN = "GIF SKIN";
              var vLN0133 = 0;
              for (var v987 in v992) {
                vLN0133++;
              }
              ;
              for (var v987 in v992) {
                if (vLN0132 == 0) {
                  var vO40 = {
                    id: vO7.g * 100 + vLN0129,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: v992[v987]
                  };
                  for (var vLN0131 = 0; vLN0131 < v992[v987].length; vLN0131++) {
                    vO40.base.push("s_tmw_" + (vO7.g / 9 * 1000 + vLN0128) + "_" + (v992[v987].length - vLN0131));
                  }
                  ;
                  v986.skinArrayDict.push(vO40);
                  var v993 = vO7.sg.indexOf(vO40.id);
                  if (v993 == -1) {
                    vO7.sg.push(vO40.id);
                    vO7.gg.push({
                      s: vO7.g / 9 * 1000 + vLN0128,
                      e: vO7.g / 9 * 1000 + vLN0128 + vLN0133 - 1,
                      t: parseInt(v36.csg["0"][v990].substr(0, 1)) * 100,
                      r: v36.csg["0"][v990].substr(1, 1) == "1"
                    });
                  }
                  if (v989) {
                    for (var v994 in v986.skinGroupArrayDict) {
                      if (v986.skinGroupArrayDict[v994].id == vLSGIFSKIN) {
                        v986.skinGroupArrayDict[v994].list.push(vO40.id);
                      }
                    }
                  } else {
                    v986.skinGroupArrayDict.push({
                      isCustom: true,
                      id: vLSGIFSKIN,
                      img: vAtob,
                      name: {
                        de: vLSGIFSKIN,
                        en: vLSGIFSKIN,
                        es: vLSGIFSKIN,
                        fr: vLSGIFSKIN,
                        uk: vLSGIFSKIN
                      },
                      list: [vO40.id]
                    });
                    v989 = true;
                  }
                  ;
                  vLN0129++;
                }
                ;
                var vO40 = {
                  id: vO7.g / 9 * 1000 + vLN0128,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v992[v987]
                };
                for (var vLN0131 = 0; vLN0131 < v992[v987].length; vLN0131++) {
                  vO40.base.push("s_tmw_" + vO40.id + "_" + (v992[v987].length - vLN0131));
                  v986.regionDict["s_tmw_" + vO40.id + "_" + (vLN0131 + 1)] = {
                    texture: "t_tmw_" + vO40.id,
                    h: 96,
                    w: 96,
                    x: (vLN0131 || 0) * 99,
                    y: 0
                  };
                }
                ;
                v986.skinArrayDict.push(vO40);
                vLN0132++;
                vLN0128++;
              }
            }
          } else {
            var vA16 = [];
            var vAtob = atob(v33[33]);
            for (let v995 in v36) {
              if (v995 != "img") {
                if (v36[v995].textureDict[v995].file.search("data:image/png;base64,") == -1) {
                  v36[v995].textureDict[v995].file = "data:image/png;base64," + v36[v995].textureDict[v995].file.substr(v36[v995].textureDict[v995].file.length - vO7.c_v, vO7.c_v) + v36[v995].textureDict[v995].file.substr(0, v36[v995].textureDict[v995].file.length - vO7.c_v);
                }
                v986.textureDict[v995] = v36[v995].textureDict[v995];
                for (let v996 in v36[v995].regionDict) {
                  v986.regionDict[v996] = v36[v995].regionDict[v996];
                }
                ;
                v986.skinArrayDict.push(v36[v995].skin);
                vA16.push(v36[v995].skin.id);
              } else if (v36[v995] != "customer") {
                vAtob = v36[v995];
              }
            }
            ;
            v986.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: vAtob,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: vA16
            });
          }
        }
        ;
        if (Array.isArray(vO7.dg) && vO7.dg.length > 0) {
          for (var v987 in vO7.dg) {
            var v997 = vO7.dg[v987].split("|");
            var vO41 = {
              g: v997["0"]
            };
            await fetch(vO7.s_l + "/store", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(vO41)
            }).then(async function (p807) {
              p807 = await p807.json();
              v986.textureDict["t_tmw_" + v997["0"] + "_skin_g"] = {
                custom: true,
                relativePath: p807.csg["1"]["0"]
              };
              var v998 = p807.csg["2"]["0"];
              var vLN0134 = 0;
              for (var v999 in v998) {
                vLN0134++;
              }
              ;
              vO7.sg.push(parseInt(v997["1"]));
              vO7.gg.push({
                s: vO7.g / 9 * 1000 + vLN0128,
                e: vO7.g / 9 * 1000 + vLN0128 + vLN0134 - 1,
                t: parseInt(p807.csg["0"]["0"].substr(0, 1)) * 100,
                r: p807.csg["0"]["0"].substr(1, 1) == "1"
              });
              var vLN0135 = 0;
              for (var v999 in v998) {
                var vO42 = {
                  id: vO7.g / 9 * 1000 + vLN0128,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v998[v999]
                };
                for (var vLN0136 = 0; vLN0136 < v998[v999].length; vLN0136++) {
                  vO42.base.push("s_tmw_" + vO42.id + "_" + (v998[v999].length - vLN0136));
                  v986.regionDict["s_tmw_" + vO42.id + "_" + (vLN0136 + 1)] = {
                    texture: "t_tmw_" + v997["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (vLN0136 || 0) * 99,
                    y: (vLN0135 || 0) * 99
                  };
                }
                ;
                v986.skinArrayDict.push(vO42);
                vLN0128++;
                vLN0135++;
              }
            }).catch(function (p808) {});
          }
        }
      } catch (e36) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return v986;
    };
    var v1000 = false;
    if (v1000) {
      v1000 = false;
      s_h.pause();
    }
    (function (p809) {
      p809.fn.tmwsle = function (p810) {
        if (vO43[p810]) {
          return vO43[p810].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof p810 != "object" && p810) {
          p809.error("Method " + p810 + " does not exists.");
          return;
        } else {
          return vO43.init.apply(this, arguments);
        }
      };
      var vO43 = {};
      var vO44 = {
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
      function f95(p811, p812) {
        var v1001;
        var v1002;
        var v1003;
        var v1004;
        var v1005 = p811.data("ddslick");
        var v1006 = p811.find(".dd-selected");
        var v1007 = v1006.siblings(".dd-selected-value");
        p811.find(".dd-options");
        v1006.siblings(".dd-pointer");
        var v1008 = p811.find(".dd-option").eq(p812);
        var v1009 = v1008.closest("li");
        var v1010 = v1005.settings;
        var v1011 = v1005.settings.data[p812];
        p811.find(".dd-option").removeClass("dd-option-selected");
        v1008.addClass("dd-option-selected");
        v1005.selectedIndex = p812;
        v1005.selectedItem = v1009;
        v1005.selectedData = v1011;
        if (v1010.showSelectedHTML) {
          v1006.html((v1011.imageSrc ? "<img class=\"dd-selected-image" + (v1010.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + v1011.imageSrc + "\" />" : "") + (v1011.description ? "<small class=\"dd-selected-description dd-desc" + (v1010.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + v1011.description + "</small>" : ""));
        } else {
          v1006.html(v1011.text);
        }
        v1007.val(v1011.value);
        v1005.original.val(v1011.value);
        p811.data("ddslick", v1005);
        f98(p811);
        v1002 = (v1001 = p811).find(".dd-select").css("height");
        v1003 = v1001.find(".dd-selected-description");
        v1004 = v1001.find(".dd-selected-image");
        if (v1003.length <= 0 && v1004.length > 0) {
          v1001.find(".dd-selected-text").css("lineHeight", v1002);
        }
        if (typeof v1010.onSelected == "function") {
          v1010.onSelected.call(this, v1005);
        }
      }
      function f96(p813) {
        var v1012 = p813.find(".dd-select");
        var v1013 = v1012.siblings(".dd-options");
        var v1014 = v1012.find(".dd-pointer");
        var v1015 = v1013.is(":visible");
        p809(".dd-click-off-close").not(v1013).slideUp(50);
        p809(".dd-pointer").removeClass("dd-pointer-up");
        if (v1015) {
          v1013.slideUp("fast");
          v1014.removeClass("dd-pointer-up");
        } else {
          v1013.slideDown("fast");
          v1014.addClass("dd-pointer-up");
        }
        (function f97(p814) {
          p814.find(".dd-option").each(function () {
            var vP809 = p809(this);
            var v1016 = vP809.css("height");
            var v1017 = vP809.find(".dd-option-description");
            var v1018 = p814.find(".dd-option-image");
            if (v1017.length <= 0 && v1018.length > 0) {
              vP809.find(".dd-option-text").css("lineHeight", v1016);
            }
          });
        })(p813);
      }
      function f98(p815) {
        p815.find(".dd-options").slideUp(50);
        p815.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      vO43.init = function (p816) {
        var p816 = p809.extend({}, vO44, p816);
        if (p809("#css-ddslick").length <= 0 && p816.embedCSS) {
          p809("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}​ .dd-selected-text { font-weight:bold}​</style>").appendTo("head");
        }
        return this.each(function () {
          var vP8092 = p809(this);
          if (!vP8092.data("ddslick")) {
            var vA17 = [];
            p816.data;
            vP8092.find("option").each(function () {
              var vP8093 = p809(this);
              var v1019 = vP8093.data();
              vA17.push({
                text: p809.trim(vP8093.text()),
                value: vP8093.val(),
                selected: vP8093.is(":selected"),
                description: v1019.description,
                imageSrc: v1019.imagesrc
              });
            });
            if (p816.keepJSONItemsOnTop) {
              p809.merge(p816.data, vA17);
            } else {
              p816.data = p809.merge(vA17, p816.data);
            }
            var vVP8092 = vP8092;
            var vP8094 = p809("<div id=\"" + vP8092.attr("id") + "\"></div>");
            vP8092.replaceWith(vP8094);
            (vP8092 = vP8094).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var vA17 = vP8092.find(".dd-select");
            var v1020 = vP8092.find(".dd-options");
            v1020.css({
              width: p816.width
            });
            vA17.css({
              width: p816.width,
              background: p816.background
            });
            vP8092.css({
              width: p816.width
            });
            if (p816.height != null) {
              v1020.css({
                height: p816.height,
                overflow: "auto"
              });
            }
            p809.each(p816.data, function (p817, p818) {
              if (p818.selected) {
                p816.defaultSelectedIndex = p817;
              }
              v1020.append("<li><a class=\"dd-option\">" + (p818.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + p818.value + "\" />" : "") + (p818.imageSrc ? " <img class=\"dd-option-image" + (p816.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + p818.imageSrc + "\" />" : "") + "</a></li>");
            });
            var vO45 = {
              settings: p816,
              original: vVP8092,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            vP8092.data("ddslick", vO45);
            if (p816.selectText.length > 0 && p816.defaultSelectedIndex == null) {
              vP8092.find(".dd-selected").html(p816.selectText);
            } else {
              f95(vP8092, p816.defaultSelectedIndex != null && p816.defaultSelectedIndex >= 0 && p816.defaultSelectedIndex < p816.data.length ? p816.defaultSelectedIndex : 0);
            }
            vP8092.find(".dd-select").on("click.ddslick", function () {
              f96(vP8092);
            });
            vP8092.find(".dd-option").on("click.ddslick", function () {
              f95(vP8092, p809(this).closest("li").index());
            });
            if (p816.clickOffToClose) {
              v1020.addClass("dd-click-off-close");
              vP8092.on("click.ddslick", function (p819) {
                p819.stopPropagation();
              });
              p809("body").on("click", function () {
                p809(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      vO43.select = function (p820) {
        return this.each(function () {
          if (p820.index !== undefined) {
            f95(p809(this), p820.index);
          }
        });
      };
      vO43.open = function () {
        return this.each(function () {
          var vP8095 = p809(this);
          if (vP8095.data("ddslick")) {
            f96(vP8095);
          }
        });
      };
      vO43.close = function () {
        return this.each(function () {
          var vP8096 = p809(this);
          if (vP8096.data("ddslick")) {
            f98(vP8096);
          }
        });
      };
      vO43.destroy = function () {
        return this.each(function () {
          var vP8097 = p809(this);
          var v1021 = vP8097.data("ddslick");
          if (v1021) {
            var v1022 = v1021.original;
            vP8097.removeData("ddslick").unbind(".ddslick").replaceWith(v1022);
          }
        });
      };
    })(jQuery);
    if (vF3()) {
      vO4.ba(vO7.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var vO46 = {};
      var vO47 = {
        country: "gb"
      };
      if (v31 && v31 != "gb") {
        vO47.country = v31;
      }
      $.get(vO7.s_l + "/dynamic/assets/registry.json", function (p821) {
        vO46 = p821;
        fetch(vO7.s_l + "/store", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO47)
        }).then(async function (p822) {
          for (let v1023 in (p822 = await p822.json()).textureDict) {
            for (let v1024 in p822.textureDict[v1023]) {
              if (v1024 === "file") {
                p822.textureDict[v1023][v1024] = "data:image/png;base64," + p822.textureDict[v1023][v1024].substr(p822.textureDict[v1023][v1024].length - vO7.c_v, vO7.c_v) + p822.textureDict[v1023][v1024].substr(0, p822.textureDict[v1023][v1024].length - vO7.c_v);
              }
            }
          }
          ;
          for (let v1025 in p822) {
            if (v1025 !== "propertyList") {
              if (Array.isArray(p822[v1025])) {
                p821[v1025] = p821[v1025].concat(p822[v1025]);
              } else {
                p821[v1025] = {
                  ...p821[v1025],
                  ...p822[v1025]
                };
              }
            }
          }
        }).catch(function (p823) {});
      });
    };
    ooo.pDc = function (p824) {
      var vO48 = {};
      (function (p825, p826) {
        for (var v1026 in p825) {
          if (p825.hasOwnProperty(v1026)) {
            p826(v1026, p825[v1026]);
          }
        }
      })(p824.textureDict, function (p827, p828) {
        let v1027 = vO7.s_l + p828.relativePath;
        if (!p828.custom) {
          v1027 = vO7.s_l + p828.relativePath;
        }
        try {
          vO48[p827] = new PIXI.Texture(v1027);
        } catch (e37) {}
      });
    };
  });
})();